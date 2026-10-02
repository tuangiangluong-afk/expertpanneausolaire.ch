const normalize = (value: string) => value.replace(/[\s\u00a0\u202f]+/g, " ").trim();

function cut(value: string, max: number): string {
  const text = normalize(value);
  if (text.length <= max) return text;
  const head = text.slice(0, max);
  const boundary = head.lastIndexOf(" ");
  return (boundary > max * 0.5 ? head.slice(0, boundary) : head).replace(/[\s|·•,;:/\-–—]+$/u, "").trim();
}

export function clampTitle(value: string): string {
  return cut(value, 60);
}

export function clampDescription(value: string): string {
  const text = normalize(value);
  return text.length <= 155 ? text : `${cut(text, 154)}…`;
}

export function ogImageUrl(opts: {
  title: string;
  badge?: string;
  description?: string;
  theme?: string;
}): string {
  const params = new URLSearchParams();
  if (opts.title) params.set("q", opts.title);
  if (opts.description) params.set("sub", opts.description);
  if (opts.badge) params.set("badge", opts.badge);
  return `https://www.expertpanneausolaire.ch/api/og?${params.toString()}`;
}

export function breadcrumbList(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
