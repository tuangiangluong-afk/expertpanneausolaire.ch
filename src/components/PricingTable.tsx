"use client";

export default function PricingTable() {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-10 text-slate-900">
                    Quel prix pour une installation solaire en 2026 ?
                </h2>
                <div className="overflow-x-auto">
                    <table className="w-full max-w-4xl mx-auto text-left border-collapse">
                        <thead>
                            <tr className="bg-slate-100 text-slate-700">
                                <th className="p-4 border-b">Type d&apos;installation</th>
                                <th className="p-4 border-b">Matériel (Panneaux, Onduleur)</th>
                                <th className="p-4 border-b">Installation (Pose &amp; Raccordement)</th>
                                <th className="p-4 border-b">Aides Déduites*</th>
                            </tr>
                        </thead>
                        <tbody className="text-slate-600">
                            <tr className="border-b hover:bg-slate-50">
                                <td className="p-4 font-bold text-amber-950">Installation 3 kWp (Autoconsommation)</td>
                                <td className="p-4">3 500€ - 5 000€</td>
                                <td className="p-4">2 000€ - 3 500€</td>
                                <td className="p-4 font-bold text-green-600">Dès 5 500€ (Après aides)</td>
                            </tr>
                            <tr className="border-b hover:bg-slate-50">
                                <td className="p-4 font-bold text-amber-950">Installation 6 kWp (Autoconsommation)</td>
                                <td className="p-4">6 000€ - 8 500€</td>
                                <td className="p-4">3 500€ - 5 500€</td>
                                <td className="p-4 font-bold text-green-600">Dès 9 000€ (Après aides)</td>
                            </tr>
                            <tr className="border-b hover:bg-slate-50">
                                <td className="p-4 font-bold text-amber-950">Installation 9 kWp (Autoconsommation)</td>
                                <td className="p-4">8 500€ - 12 000€</td>
                                <td className="p-4">4 500€ - 7 000€</td>
                                <td className="p-4 font-bold text-green-600">Dès 12 500€ (Après aides)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p className="text-center text-sm text-slate-500 mt-4 italic">
                    *Estimations moyennes 2026. La prime à l&apos;autoconsommation et le tarif d&apos;achat garanti de revente de surplus EDF OA sont déduits. La rentabilité est assurée en moyenne sur 8 à 10 ans.
                </p>
            </div>
        </section>
    );
}
