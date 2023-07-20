import { apiEndpoint } from "@/constants/global";
import httpRequest from "@/libs/http/json";

/**
 * Fetch products from the api
 * 
 * @returns list of products
 */
export async function getProducts<T = Record<string, string>[]>(searchParams?: string | string[][] | Record<string, string> | URLSearchParams) {
  const search = new URLSearchParams(searchParams);
  const endpoint = !!searchParams
    ? `${apiEndpoint}/products?${search}`
    : `${apiEndpoint}/store/2/products`;
  
    console.log("<<<<<<endpoint>>>>>>", endpoint)

  const products = await httpRequest<T>({
    url: endpoint
  });

  return products;
}

/**
 * Fetch products from the api
 * 
 * @returns list of products
 */
export async function getCategories<T = any>() {
  const products = await httpRequest<T>({
    url: `${apiEndpoint}/store/2/products/categories`
  });

  return products;
}

type GetProductParams = {
  slug: string;
} | {
  id: string;
};

/**
 * Fetch product details using filters
 * 
 * @param filters product details such as id, slug..
 * @returns product details or null
 */
export async function getProduct<T = Record<string, string>[]>(filters: GetProductParams) {
  const params = new URLSearchParams({
    ...filters,
    consumer_secret: process.env.woo_consumer_secret,
    consumer_key: process.env.woo_consumer_key,
  });
  const product = await httpRequest<T>({
    url: `${apiEndpoint}/products?${params.toString()}`
  });

  return product;
}

/**
 * Retrive similar product(belongin to same category)
 * 
 * @param category category id
 * @param per_page number of item to fetch
 * @returns list of products belonging to the same category
 */
export default async function getSimilarProductsByCategories<T = Record<string, string>[]>(category: string, per_page = "4") {
  if (!!category === false) return [];

  const products = await getProducts<T>({
    category,
    per_page,
    consumer_secret: process.env.woo_consumer_key,
    consumer_key: process.env.woo_consumer_key,
  });

  return products;
}