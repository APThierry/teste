export function getSiteUrl(path = '') {
  const base = process.env.NEXT_PUBLIC_SITE_URL;
  const normalizedBase = base ? base.replace(/\/$/, '') : '';

  if (normalizedBase) {
    return `${normalizedBase}${path}`;
  }

  if (typeof window !== 'undefined' && window.location) {
    return `${window.location.origin}${path}`;
  }

  return `http://localhost:3010${path}`;
}
