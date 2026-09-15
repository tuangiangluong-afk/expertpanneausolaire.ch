"use client";

export default function InstallationSteps() {
    const steps = [
        { title: "1. Étude & Devis", desc: "Simulation gratuite et étude de faisabilité de votre projet photovoltaïque." },
        { title: "2. Démarches", desc: "Prise en charge complète de la déclaration de travaux en mairie et le gestionnaire de réseau." },
        { title: "3. Pose par un installateur qualifié", desc: "Installation de vos panneaux solaires par une entreprise du label Les Pros du Solaire." },
        { title: "4. Production", desc: "Mise en service de votre onduleur et début d'autoconsommation." }
    ];

    return (
        <section className="py-16 bg-slate-50">
            <div className="container mx-auto px-4 max-w-5xl">
                <h2 className="text-3xl font-bold text-center mb-10 text-slate-900">Comment se passe l'installation ?</h2>
                <div className="grid md:grid-cols-4 gap-6">
                    {steps.map((s, i) => (
                        <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                            <div className="text-4xl font-black text-amber-100 mb-2">0{i + 1}</div>
                            <h3 className="font-bold text-lg mb-2">{s.title}</h3>
                            <p className="text-sm text-slate-600">{s.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
