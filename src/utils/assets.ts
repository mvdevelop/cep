const assetModules = import.meta.glob('../assets/img/*', {
  eager: true,
  import: 'default',
  query: '?url',
}) as Record<string, string>;

export function getImageUrl(fileName: string, fallback?: string): string {
  const normalizedName = fileName.replace(/^\/+/, '').split('/').pop() ?? '';
  const assetPath = Object.keys(assetModules).find((path) => path.endsWith(`/${normalizedName}`));

  if (assetPath) return assetModules[assetPath] ?? '/icon.ico';
  if (fallback) return getImageUrl(fallback);
  return '/icon.ico';
}
