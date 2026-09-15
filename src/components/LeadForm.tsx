"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
    Home,
    User,
    Clock,
    Shield,
    Phone,
    Mail,
    User2,
    Calendar,
    ArrowRight,
    ArrowLeft,
    CheckCircle,
    Sun,
    TrendingUp,
    Zap,
    AlertTriangle
} from "lucide-react";
import Link from "next/link";

declare global {
    interface Window {
        dataLayer: Record<string, unknown>[];
    }
}

interface LeadFormProps {
    city: string;
    domain: string;
    targetType?: 'SOLAR' | 'MIXED';
    themeColor?: 'gold' | 'amber' | 'slate';
    initialProjectType?: 'proprietaire_maison' | 'coproprietaire' | 'locataire';
}

interface FormData {
    projectType: 'proprietaire_maison' | 'coproprietaire' | 'locataire' | null;
    monthlyBill: 'plus_150' | '100_150' | 'moins_100' | null;
    roofType: 'tuile_ardoise' | 'toit_plat' | 'amiante_chaume' | null;
    solarLocation: 'toiture' | 'carport_solaire' | 'au_sol' | null;
    name: string;
    email: string;
    phone: string;
    zipCode: string;
    phoneConsent?: boolean;
}

const FRENCH_PHONE_REGEX = /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/;
const ZIP_CODE_REGEX = /^\d{5}$/;

export default function LeadForm({
    city,
    domain,
    targetType = 'MIXED',
    themeColor = 'gold',
    initialProjectType
}: LeadFormProps) {
    const router = useRouter();
    const INITIAL_FORM_DATA: FormData = {
        projectType: initialProjectType || null,
        monthlyBill: null,
        roofType: null,
        solarLocation: null,
        name: "",
        email: "",
        phone: "",
        zipCode: "",
        phoneConsent: true
    };

    const [step, setStep] = useState(initialProjectType ? 2 : 1);
    const [formData, setFormData] = useState<FormData>(INITIAL_FORM_DATA);
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState("");

    const totalSteps = 5;
    const progress = (step / totalSteps) * 100;

    const getLeadScore = (): number => {
        let score = 0;
        if (formData.projectType === 'proprietaire_maison') score += 30;
        if (formData.projectType === 'coproprietaire') score += 5;
        if (formData.monthlyBill === 'plus_150') score += 30;
        if (formData.monthlyBill === '100_150') score += 15;
        if (formData.monthlyBill === 'moins_100') score += 5;
        if (formData.roofType === 'tuile_ardoise') score += 20;
        if (formData.roofType === 'toit_plat') score += 10;
        if (formData.solarLocation === 'carport_solaire') score += 25;
        if (formData.solarLocation === 'toiture') score += 20;
        if (formData.solarLocation === 'au_sol') score += 10;
        return score;
    };

    const handleOptionSelect = (field: keyof FormData, value: string) => {
        if (step === 1 && field === 'projectType') {
            if (typeof window !== 'undefined' && window.dataLayer) {
                window.dataLayer.push({
                    event: 'form_start',
                    lead_category: value
                });
            }
        }
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (status === 'error') {
            setStatus('idle');
            setErrorMessage("");
        }
    };

    const canProceed = (): boolean => {
        switch (step) {
            case 1: return formData.projectType !== null;
            case 2: return formData.monthlyBill !== null;
            case 3: return formData.roofType !== null;
            case 4: return formData.solarLocation !== null;
            case 5:
                return (
                    formData.name.trim() !== "" &&
                    formData.email.includes("@") &&
                    ZIP_CODE_REGEX.test(formData.zipCode.trim()) &&
                    formData.phone.trim() !== "" &&
                    FRENCH_PHONE_REGEX.test(formData.phone.replace(/\s/g, '')) && formData.phoneConsent === true
                );
            default: return false;
        }
    };

    const nextStep = () => {
        if (canProceed() && step < totalSteps) {
            setStep(step + 1);
        }
    };

    const prevStep = () => {
        if (step > 1) {
            if (step === 2 && initialProjectType) return;
            setStep(step - 1);
        }
    };

    const handleSubmit = async () => {
        if (!canProceed()) {
            setStatus('error');
            const errors = [];
            if (formData.name.trim() === "") errors.push("votre Nom");
            if (!ZIP_CODE_REGEX.test(formData.zipCode.trim())) errors.push("un Code Postal valide");
            if (!formData.email.includes("@")) errors.push("un Email valide");
            if (formData.phone.trim() === "" || !FRENCH_PHONE_REGEX.test(formData.phone.replace(/\s/g, '')) && formData.phoneConsent === true) errors.push("un Numéro de téléphone valide");
            
            setErrorMessage(`Veuillez renseigner : ${errors.join(', ')}.`);
            return;
        }

        setStatus('loading');

        try {
            let attribution = {};
            if (typeof window !== 'undefined') {
                const stored = sessionStorage.getItem('lead_attribution');
                if (stored) {
                    try { attribution = JSON.parse(stored); } catch (e) {}
                }
            }

            const payload = {
                ...formData,
                city,
                postalCode: formData.zipCode,
                domain,
                leadScore: getLeadScore(),
                niche: 'solaire',
                timestamp: new Date().toISOString(),
                phoneConsent: formData.phoneConsent,
                consentText: "J'accepte d'être contacté par téléphone par les services qui prendront en charge ma demande de devis pour la qualifier et effectuer une visite technique.",
                consentDate: new Date().toISOString(),
                consentUrl: typeof window !== 'undefined' ? window.location.href : `https://${domain}`,
                attribution
            };

            const res = await fetch('/api/leads', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            if (!res.ok) {
                const errorData = await res.json();
                throw new Error(errorData.error || 'Erreur lors de l\'envoi');
            }

            const data = await res.json();

            if (typeof window !== 'undefined' && window.dataLayer) {
                window.dataLayer.push({
                    event: 'generate_lead',
                    lead_category: formData.projectType,
                    lead_city: city,
                    value: 100.00,
                    currency: 'EUR',
                    traffic_source: (attribution as any).source || 'direct',
                    landing_page: window.location.pathname
                });
            }

            // Redirect to success page if we have VUD details!
            if (data?.vud && data.vud.devis_id) {
                router.push(`/success?devis_id=${data.vud.devis_id}&devis_hash=${data.vud.devis_hash || ''}`);
                return;
            }

            setStatus('success');
        } catch (error: any) {
            setStatus('error');
            setErrorMessage(error.message || 'Une erreur est survenue');
        }
    };

    if (status === 'success') {
        return (
            <div className="bg-gradient-to-br from-amber-50 to-yellow-50 border border-amber-200 rounded-3xl p-8 text-center">
                <div className="mx-auto w-20 h-20 bg-white rounded-full flex items-center justify-center mb-6 shadow-md shadow-amber-500/10">
                    <CheckCircle className="text-amber-500" size={40} />
                </div>
                <h3 className="text-2xl font-bold text-amber-800 mb-3">
                    Étude d&apos;éligibilité validée !
                </h3>
                <p className="text-neutral-700 mb-6">
                    Votre demande a été transmise. Un expert solaire certifié RGE QualiPV va réaliser votre étude de rentabilité sous <strong>24h</strong> pour votre projet {(!city || city.toLowerCase() === 'france' || city.toLowerCase() === 'national') ? 'en France' : <>à <strong>{city}</strong></>}.
                </p>
                <div className="flex items-center justify-center gap-2 text-sm text-amber-700 font-medium">
                    <Shield size={16} />
                    <span>Matériel garanti 25 ans & Installateur RGE</span>
                </div>
            </div>
        );
    }

    const OptionButton = ({
        selected,
        onClick,
        icon: Icon,
        label,
        sublabel,
        highlight = false
    }: {
        selected: boolean;
        onClick: () => void;
        icon: React.ElementType;
        label: string;
        sublabel?: string;
        highlight?: boolean;
    }) => (
        <button
            onClick={onClick}
            className={`
                relative w-full p-5 rounded-2xl border-2 transition-all duration-200
                flex items-center gap-4 text-left
                ${selected
                    ? 'border-amber-500 bg-amber-50/50 shadow-lg'
                    : 'border-neutral-200 bg-white hover:bg-neutral-50'
                }
                ${highlight && !selected ? 'ring-2 ring-yellow-400 ring-offset-2' : ''}
            `}
        >
            <div className={`
                w-12 h-12 rounded-xl flex items-center justify-center shrink-0
                ${selected ? 'bg-white text-amber-500 shadow' : 'bg-neutral-100 text-neutral-600'}
            `}>
                <Icon size={24} />
            </div>
            <div>
                <div className={`font-bold ${selected ? 'text-neutral-900' : 'text-neutral-800'}`}>
                    {label}
                </div>
                {sublabel && (
                    <div className="text-sm text-neutral-500 mt-0.5">{sublabel}</div>
                )}
            </div>
            {selected && (
                <div className="absolute top-3 right-3">
                    <CheckCircle className="text-amber-500" size={20} />
                </div>
            )}
        </button>
    );

    return (
        <div className="bg-white rounded-3xl shadow-2xl border border-neutral-200 overflow-hidden font-sans">
            {/* Header */}
            <div className="bg-gradient-to-r from-amber-500 to-yellow-500 p-6 text-slate-900">
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-slate-900/10 rounded-xl flex items-center justify-center">
                        <Sun size={24} className="text-amber-700" />
                    </div>
                    <div>
                        <h3 className="font-bold text-lg">Simulateur Solaire 2026</h3>
                        <p className="text-slate-700 text-sm">Rentabilité & Primes à l&apos;Autoconsommation</p>
                    </div>
                </div>

                {/* Progress Bar */}
                <div className="relative">
                    <div className="h-2 bg-slate-900/10 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-slate-900 transition-all duration-500 ease-out rounded-full"
                            style={{ width: `${progress}%` }}
                        />
                    </div>
                    <div className="flex justify-between mt-2 text-xs text-slate-800 font-medium">
                        <span>Étape {step}/{totalSteps}</span>
                        <span>{Math.round(progress)}% complété</span>
                    </div>
                </div>
            </div>

            {/* Form Body */}
            <div className="p-6">
                {/* Step 1: Project Type */}
                {step === 1 && (
                    <div className="space-y-4">
                        <h4 className="text-xl font-bold text-neutral-900 mb-6">
                            Quel est votre statut d&apos;habitation ?
                        </h4>
                        <div className="space-y-3">
                            <OptionButton
                                selected={formData.projectType === 'proprietaire_maison'}
                                onClick={() => handleOptionSelect('projectType', 'proprietaire_maison')}
                                icon={Home}
                                label="Propriétaire de maison individuelle"
                                sublabel="Éligibilité maximale pour le photovoltaïque"
                                highlight={true}
                            />
                            <OptionButton
                                selected={formData.projectType === 'coproprietaire'}
                                onClick={() => handleOptionSelect('projectType', 'coproprietaire')}
                                icon={Home}
                                label="Copropriétaire (Appartement)"
                                sublabel="Projet nécessitant l'accord de la copropriété"
                            />
                            <OptionButton
                                selected={formData.projectType === 'locataire'}
                                onClick={() => handleOptionSelect('projectType', 'locataire')}
                                icon={User}
                                label="Locataire"
                                sublabel="Non éligible directement aux aides"
                            />
                        </div>
                    </div>
                )}

                {/* Step 2: Monthly Bill */}
                {step === 2 && (
                    <div className="space-y-4">
                        <h4 className="text-xl font-bold text-neutral-900 mb-6">
                            Quel est le montant de votre facture d&apos;électricité ?
                        </h4>
                        <div className="space-y-3">
                            <OptionButton
                                selected={formData.monthlyBill === 'plus_150'}
                                onClick={() => handleOptionSelect('monthlyBill', 'plus_150')}
                                icon={TrendingUp}
                                label="Plus de 150 € / mois"
                                sublabel="Installation solaire ultra-rentable"
                            />
                            <OptionButton
                                selected={formData.monthlyBill === '100_150'}
                                onClick={() => handleOptionSelect('monthlyBill', '100_150')}
                                icon={Zap}
                                label="Entre 100 et 150 € / mois"
                                sublabel="Rentabilité rapide"
                            />
                            <OptionButton
                                selected={formData.monthlyBill === 'moins_100'}
                                onClick={() => handleOptionSelect('monthlyBill', 'moins_100')}
                                icon={Zap}
                                label="Moins de 100 € / mois"
                                sublabel="Projet de petite taille"
                            />
                        </div>
                    </div>
                )}

                {/* Step 3: Roof Type */}
                {step === 3 && (
                    <div className="space-y-4">
                        <h4 className="text-xl font-bold text-neutral-900 mb-6">
                            Quel est le revêtement de votre toiture ?
                        </h4>
                        <div className="space-y-3">
                            <OptionButton
                                selected={formData.roofType === 'tuile_ardoise'}
                                onClick={() => handleOptionSelect('roofType', 'tuile_ardoise')}
                                icon={Home}
                                label="Tuiles ou Ardoises"
                                sublabel="Idéal pour la pose de panneaux intégrés ou surimposés"
                            />
                            <OptionButton
                                selected={formData.roofType === 'toit_plat'}
                                onClick={() => handleOptionSelect('roofType', 'toit_plat')}
                                icon={Home}
                                label="Toit plat / Terrasse"
                                sublabel="Pose sur châssis lestés inclinés"
                            />
                            <OptionButton
                                selected={formData.roofType === 'amiante_chaume'}
                                onClick={() => handleOptionSelect('roofType', 'amiante_chaume')}
                                icon={AlertTriangle}
                                label="Toit en Amiante ou Chaume"
                                sublabel="⚠️ Non pris en charge par nos installateurs RGE"
                            />
                        </div>
                    </div>
                )}

                {/* Step 4: Installation Location */}
                {step === 4 && (
                    <div className="space-y-4">
                        <h4 className="text-xl font-bold text-neutral-900 mb-6">
                            Où souhaitez-vous poser vos panneaux ?
                        </h4>
                        <div className="space-y-3">
                            <OptionButton
                                selected={formData.solarLocation === 'toiture'}
                                onClick={() => handleOptionSelect('solarLocation', 'toiture')}
                                icon={Sun}
                                label="Sur le toit principal"
                                sublabel="Le plus courant, optimise la surface libre"
                            />
                            <OptionButton
                                selected={formData.solarLocation === 'carport_solaire'}
                                onClick={() => handleOptionSelect('solarLocation', 'carport_solaire')}
                                icon={Home}
                                label="Sur un Carport Solaire"
                                sublabel="Idéal pour abriter et recharger un véhicule électrique"
                                highlight={true}
                            />
                            <OptionButton
                                selected={formData.solarLocation === 'au_sol'}
                                onClick={() => handleOptionSelect('solarLocation', 'au_sol')}
                                icon={Sun}
                                label="Au sol (Dans le jardin)"
                                sublabel="Si la toiture n'est pas adaptée"
                            />
                        </div>
                    </div>
                )}

                {/* Step 5: Contact Info */}
                {step === 5 && (
                    <div className="space-y-5">
                        <h4 className="text-xl font-bold text-neutral-900 mb-6">
                            Saisissez vos coordonnées pour recevoir votre étude gratuite
                        </h4>

                        <div className="space-y-4">
                            <div>
                                <label className="flex items-center gap-2 text-sm font-medium text-neutral-700 mb-2">
                                    <User2 size={16} />
                                    Nom complet
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    placeholder="Jean Dupont"
                                    className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition outline-none"
                                />
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="flex items-center gap-2 text-sm font-medium text-neutral-700 mb-2">
                                        Code Postal du projet
                                    </label>
                                    <input
                                        type="text"
                                        name="zipCode"
                                        value={formData.zipCode}
                                        onChange={handleInputChange}
                                        placeholder="75000"
                                        maxLength={5}
                                        className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition outline-none"
                                    />
                                </div>
                                <div>
                                    <label className="flex items-center gap-2 text-sm font-medium text-neutral-700 mb-2">
                                        <Mail size={16} />
                                        Adresse email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        placeholder="jean.dupont@email.com"
                                        className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition outline-none"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="flex items-center gap-2 text-sm font-medium text-neutral-700 mb-2">
                                    <Phone size={16} />
                                    Numéro de téléphone
                                </label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    placeholder="06 12 34 56 78"
                                    className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition outline-none"
                                />
                                {formData.phone && !FRENCH_PHONE_REGEX.test(formData.phone.replace(/\s/g, '')) && (
                                    <p className="text-xs text-red-500 mt-1">
                                        Format de téléphone invalide (Ex: 0612345678)
                                    </p>
                                )}
                            </div>
                        </div>

                        
                            {/* Phone Consent Checkbox (RGPD / Bloctel) */}
                            <div className="p-3 bg-neutral-50 border border-neutral-200 rounded-xl text-left">
                                <label className="flex items-start gap-2.5 cursor-pointer select-none">
                                    <input
                                        type="checkbox"
                                        name="phoneConsent"
                                        checked={formData.phoneConsent === true}
                                        onChange={(e) => {
                                            setFormData(prev => ({ ...prev, phoneConsent: e.target.checked }));
                                            if (status === 'error') {
                                                setStatus('idle');
                                                setErrorMessage("");
                                            }
                                        }}
                                        className="mt-0.5 h-4 w-4 rounded border-neutral-300 text-blue-600 focus:ring-blue-500 accent-blue-600 shrink-0"
                                    />
                                    <span className="text-[11px] text-neutral-600 leading-tight">
                                        J&apos;accepte d&apos;être contacté par téléphone par les services qui prendront en charge ma demande de devis pour la qualifier et effectuer une visite technique.</span>
                                </label>
                            </div>

                        {status === 'error' && (
                            <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm">
                                {errorMessage}
                            </div>
                        )}
                    </div>
                )}

                {/* Navigation */}
                <div className="flex gap-3 mt-8 items-start">
                    {step > 1 && !(step === 2 && initialProjectType) && (
                        <button
                            onClick={prevStep}
                            className="flex items-center gap-2 px-6 py-3 rounded-xl border border-neutral-300 text-neutral-700 font-medium hover:bg-neutral-50 transition"
                        >
                            <ArrowLeft size={18} />
                            Retour
                        </button>
                    )}

                    {step < totalSteps ? (
                        <button
                            onClick={nextStep}
                            disabled={!canProceed()}
                            className={`
                                    flex-1 flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-bold text-lg transition
                                    ${canProceed()
                                    ? 'bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-900 shadow-lg shadow-amber-500/20 hover:from-amber-600 hover:to-yellow-600'
                                    : 'bg-neutral-200 text-neutral-400 cursor-not-allowed'
                                }
                                `}
                        >
                            Continuer
                            <ArrowRight size={20} />
                        </button>
                    ) : (
                        <div className="w-full">
                            <button
                                type="button"
                                onClick={handleSubmit}
                                disabled={status === 'loading'}
                                className={`
                                        w-full py-4 px-6 rounded-xl text-lg font-bold text-slate-900 shadow-xl transition-all
                                        ${status === 'loading'
                                        ? 'bg-slate-400 cursor-not-allowed text-white'
                                        : 'bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 transform hover:-translate-y-1 shadow-amber-500/20'
                                    }
                                    `}
                            >
                                {status === 'loading' ? (
                                    <span className="flex items-center justify-center gap-2">
                                        <div className="w-5 h-5 border-2 border-slate-900/30 border-t-slate-900 rounded-full animate-spin" />
                                        Simulation...
                                    </span>
                                ) : (
                                    "Obtenir mon étude de rentabilité"
                                )}
                            </button>

                            <p className="text-xs text-slate-400 text-center mt-4 px-4 leading-relaxed">
                                En cliquant sur ce bouton, vous acceptez nos <Link href="/cgv" className="underline hover:text-amber-600">CGV</Link> et acceptez d&apos;être recontacté par nos experts RGE QualiPV partenaires pour votre projet solaire.
                            </p>
                        </div>
                    )}
                </div>

                {/* Trust footer */}
                <div className="flex flex-wrap justify-center sm:justify-between gap-3 mt-6 pt-6 border-t border-neutral-100 text-[10px] sm:text-xs text-slate-400 font-medium uppercase tracking-wide">
                    <span className="flex items-center gap-1.5"><Shield size={12} className="text-green-500" /> Données Sécurisées</span>
                    <span className="hidden sm:inline">•</span>
                    <span className="flex items-center gap-1.5"><div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div> Sans engagement</span>
                    <span className="hidden sm:inline">•</span>
                    <span className="flex items-center gap-1.5"><Sun size={12} className="text-amber-500" /> Installateurs RGE QualiPV</span>
                    <span className="hidden sm:inline">•</span>
                    <span className="flex items-center gap-1.5"><div className="w-1.5 h-1.5 rounded-full bg-slate-400"></div> Étude 24h</span>
                </div>
            </div>
        </div>
    );
}
