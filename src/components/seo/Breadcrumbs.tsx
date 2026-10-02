import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  const allItems: BreadcrumbItem[] = [
    { name: "Accueil", url: "/" },
    ...items,
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: allItems.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http")
        ? item.url
        : `https://www.expertpanneausolaire.ch${item.url}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav aria-label="Fil d'Ariane" className="py-3 px-4 sm:px-6 max-w-7xl mx-auto w-full">
        <ol className="flex items-center flex-wrap gap-1.5 text-xs sm:text-sm text-slate-500">
          {allItems.map((item, idx) => {
            const isLast = idx === allItems.length - 1;
            return (
              <li key={item.url} className="flex items-center gap-1.5">
                {idx === 0 ? (
                  <Link
                    href={item.url}
                    className="flex items-center gap-1 text-slate-500 hover:text-amber-600 transition"
                  >
                    <Home className="w-3.5 h-3.5" />
                    <span className="sr-only">Accueil</span>
                  </Link>
                ) : isLast ? (
                  <span className="font-semibold text-slate-900 truncate max-w-[200px] sm:max-w-md">
                    {item.name}
                  </span>
                ) : (
                  <Link
                    href={item.url}
                    className="text-slate-500 hover:text-amber-600 transition truncate max-w-[150px] sm:max-w-xs"
                  >
                    {item.name}
                  </Link>
                )}
                {!isLast && <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}

export default Breadcrumbs;
