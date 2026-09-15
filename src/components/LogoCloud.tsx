import { Shield, CheckCircle } from "lucide-react";

const BRANDS = [
    { name: "DualSun", tier: "Panneaux" },
    { name: "SunPower", tier: "Premium" },
    { name: "Enphase", tier: "Onduleurs" },
    { name: "Fronius", tier: "Onduleurs" },
    { name: "Q-Cells", tier: "Panneaux" },
    { name: "SolarEdge", tier: "Onduleurs" }
];

export default function LogoCloud() {
    return (
        <section className="py-10 border-b border-slate-100 bg-white">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
                    <p className="text-sm font-semibold text-slate-500 uppercase tracking-widest whitespace-nowrap">
                        Nos installateurs RGE posent les marques leaders :
                    </p>
                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                        {BRANDS.map((brand) => (
                            <div key={brand.name} className="group flex items-center gap-2 cursor-default">
                                {brand.name === "DualSun" && <span className="font-bold text-xl tracking-tight text-blue-800">DualSun</span>}
                                {brand.name === "SunPower" && <span className="font-bold text-xl tracking-tighter text-amber-600 group-hover:text-amber-500">SUNPOWER</span>}
                                {brand.name === "Enphase" && <span className="font-bold text-xl uppercase tracking-widest text-orange-600">ENPHASE</span>}
                                {brand.name === "Fronius" && <span className="font-bold text-xl tracking-tight text-red-600">Fronius</span>}
                                {brand.name === "Q-Cells" && <span className="font-bold text-lg text-slate-700">Q-CELLS</span>}
                                {brand.name === "SolarEdge" && <span className="font-bold text-xl tracking-wide text-red-800">solaredge</span>}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
