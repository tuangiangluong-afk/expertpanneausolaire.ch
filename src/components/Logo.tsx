import Link from "next/link";
import { Sun } from "lucide-react";

interface LogoProps {
    /** City name for satellite sites, null for hub */
    city?: string | null;
    /** Is this the main hub (expertpanneausolaire.ch)? */
    isHub?: boolean;
    /** Size variant */
    size?: "sm" | "md" | "lg";
    /** Theme variant */
    variant?: "default" | "light";
    /** Theme color */
    themeColor?: 'blue' | 'emerald' | 'amber' | 'purple' | 'gold';
    /** Additional className */
    className?: string;
    /** Custom URL override */
    customLink?: string;
}

export default function Logo({
    city,
    isHub = false,
    size = "md",
    variant = "default",
    themeColor = 'gold',
    className = "",
    customLink
}: LogoProps) {
    const sizes = {
        sm: { height: 32, text: "text-lg", iconSize: 24 },
        md: { height: 48, text: "text-xl", iconSize: 32 },
        lg: { height: 64, text: "text-3xl", iconSize: 44 },
    };

    const s = sizes[size];

    const colors = {
        default: {
            expert: "text-slate-900",
            niche: "text-amber-600",
            dot: "text-amber-500",
            cityText: "text-amber-700"
        },
        light: {
            expert: "text-white",
            niche: "text-white",
            dot: "text-yellow-300",
            cityText: "text-white"
        }
    }[variant];

    if (isHub) {
        return (
            <Link href={customLink || "/"} className={`flex items-center gap-2.5 ${className}`}>
                <div className={`flex items-center justify-center p-2 rounded-xl bg-amber-50/50 backdrop-blur-sm border border-amber-100/30 ${variant === 'light' ? 'bg-white/10 border-white/20' : ''}`}>
                    <Sun className={variant === 'light' ? 'text-white' : 'text-amber-500'} size={s.iconSize} strokeWidth={2.2} />
                </div>
                <div className={`${s.text} font-bold tracking-tight leading-none`}>
                    <span className={colors.expert}>Expert</span>
                    <span className="ml-1 font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-yellow-500">Solaire</span>
                    <span className={`block text-[10px] font-semibold uppercase tracking-wider text-neutral-500 ${variant === 'light' ? 'text-amber-200' : ''}`}>Photovoltaïque</span>
                </div>
            </Link>
        );
    }

    return (
        <Link href={customLink || "/"} className={`flex items-center gap-2.5 ${className}`}>
            <div className={`flex items-center justify-center p-2 rounded-xl bg-amber-50/50 backdrop-blur-sm border border-amber-100/30 ${variant === 'light' ? 'bg-white/10 border-white/20' : ''}`}>
                <Sun className={variant === 'light' ? 'text-white' : 'text-amber-500'} size={s.iconSize} strokeWidth={2.2} />
            </div>
            <div className={`${s.text} font-bold tracking-tight leading-tight`}>
                <span className={colors.expert}>Panneau Solaire </span>
                {city && (
                    <span className={`${colors.niche} block text-sm font-semibold uppercase tracking-wider`}>{city}</span>
                )}
            </div>
        </Link>
    );
}

export function LogoIcon({ size = 40, className = "" }: { size?: number; className?: string }) {
    return (
        <div className={`flex items-center justify-center p-2 rounded-xl bg-amber-50/50 backdrop-blur-sm border border-amber-100/30 ${className}`}>
            <Sun className="text-amber-500" size={size} strokeWidth={2.2} />
        </div>
    );
}
