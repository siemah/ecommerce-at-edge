import { apiEndpoint } from "@/constants/global";
import httpRequest from "@/libs/http/json";

/**
 * Fetch products from the api
 * 
 * @returns list of products
 */
export async function getProducts<T = Record<string, string>[]>() {
  const products = await httpRequest<T>({
    url: `${apiEndpoint}/store/2/products`
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