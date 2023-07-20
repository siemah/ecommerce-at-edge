
type ImageConfig = {
  format?: "webp" | "png" | "jpg";
  quality?: number;
  // width of the new image
  w?: number;
  // height of the new image
  h?: number;
  // how to print the image
  fit?: "inside" | "outside" | "cover" | "fill" | "contain";
  // without enlargement if the targetted dimension is over the image original dimensions
  we?: boolean;
}

/**
 * Create a link using a3th party service to transform images
 * 
 * @param src url of the given image
 * @param imageConfig image config such as format, quality, width...
 * @returns 
 */
export function getImageLink(src: string, imageConfig?: ImageConfig): string {
  let { format = "webp", quality = 85, ...restConfig } = imageConfig || {};

  const options = {
    url: src,
    q: `${quality}`,
    output: format,
    ...(restConfig || {})
  };
  const searchParams = new URLSearchParams(options as {});

  return (
    process.env.NODE_ENV !== "production"
      ? `https://images.weserv.nl/?${searchParams}`
      : src
  );
}