export default function cloudflareLoader({ src, width, quality }) {
  // For local images during development
  if (process.env.NODE_ENV === 'development') {
    return src;
  }
  
  // Use Cloudflare Image Resizing for production
  const params = [`width=${width}`];
  if (quality) {
    params.push(`quality=${quality}`);
  }
  params.push('format=auto');
  
  // Remove leading slash if present
  const normalizedSrc = src.startsWith('/') ? src.slice(1) : src;
  
  return `/cdn-cgi/image/${params.join(',')}/${normalizedSrc}`;
}
