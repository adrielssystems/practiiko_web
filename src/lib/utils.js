export function getImageUrl(path) {
  if (!path) return "/placeholder-furniture.jpg";
  if (path.startsWith('http')) return path;
  
  const adminUrl = "https://auto.practiiko.com";
  return `${adminUrl}${path.startsWith('/') ? '' : '/'}${path}`;
}
