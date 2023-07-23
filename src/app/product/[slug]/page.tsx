import Card from '@/components/card'
import { getImageLink } from '@/libs/images/utils'
import getSimilarProductsByCategories, { getProduct } from '@/services/product'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

type ProductPageProps = {
  params: {
    slug: string
  }
}

export const runtime = "edge";

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const [product] = await getProduct<Record<string, any>[]>(params);
  const productMainImage = product.images?.[0].src;

  return {
    title: product.name,
    description: product.short_description,
    alternates: {
      canonical: `/product/${product.slug}/`
    },
    openGraph: {
      type: "article",
      title: product.name,
      description: product.short_description,
      images: {
        url: productMainImage,
      }
    },
    twitter: {
      card: "summary",
      title: product.name,
      description: product.short_description,
      images: {
        url: productMainImage,
      }
    },
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const [product] = await getProduct<Record<string, any>[]>(params);
  const similarProducts = await getSimilarProductsByCategories<Record<string, any>[]>(product.categories?.[0]?.id);

  return (
    <div className="product-page">

      {/* <!-- breadcrumb --> */}
      <div className="container py-4 flex items-center gap-3">
        <Link href="/" className="text-primary text-base">
          <i className="fa-solid fa-house"></i>
        </Link>
        <span className="text-sm text-gray-400">
          <i className="fa-solid fa-chevron-right"></i>
        </span>
        <Link href={"/shop/"} className="text-gray-600 font-medium">Shop</Link>
      </div>
      {/* <!-- ./breadcrumb --> */}

      {/* <!-- product-detail --> */}
      <div className="container grid grid-cols-2 gap-6">
        <div>
          <link
            rel="preload"
            // @ts-expect-error
            fetchPriority="high"
            as="image"
            href={getImageLink(product.images?.[0].src, {
              w: 750,
              fit: "contain",
              we: true
            })}
            type="image/webp"
          />
          <Image
            src={getImageLink(product.images?.[0].src, {
              w: 750,
              fit: "contain",
              we: true
            })}
            alt="product"
            className="w-full"
            height={750}
            width={750}
            priority
            loading="eager"
            unoptimized
          />
          <div className="grid grid-cols-5 gap-4 mt-4">
            {
              product?.images?.map((image: any, index: number) => (
                <Image
                  key={`product-image-${image.id}`}
                  src={getImageLink(image.src, {
                    h: 100,
                    w: 100,
                    fit: "contain",
                    we: true
                  })}
                  height={1000}
                  width={1000}
                  alt="product2"
                  className={`w-full cursor-pointer border ${index === 0 && 'border-primary'}`}
                  loading='lazy'
                  unoptimized
                />
              ))
            }
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-medium uppercase mb-2">{product.name}</h2>
          <div className="flex items-center mb-4">
            <div className="flex gap-1 text-sm text-yellow-400">
              <span><i className="fa-solid fa-star"></i></span>
              <span><i className="fa-solid fa-star"></i></span>
              <span><i className="fa-solid fa-star"></i></span>
              <span><i className="fa-solid fa-star"></i></span>
              <span><i className="fa-solid fa-star"></i></span>
            </div>
            <div className="text-xs text-gray-500 ml-3">(150 Reviews)</div>
          </div>
          <div className="space-y-2">
            <p className="text-gray-800 font-semibold space-x-2">
              <span>Availability: </span>
              <span className="text-green-600">In Stock</span>
            </p>
            <p className="space-x-2">
              <span className="text-gray-800 font-semibold">Brand: </span>
              <span className="text-gray-600">Apex</span>
            </p>
            <p className="space-x-2">
              <span className="text-gray-800 font-semibold">Category: </span>
              <span className="text-gray-600">Sofa</span>
            </p>
            <p className="space-x-2">
              <span className="text-gray-800 font-semibold">SKU: </span>
              <span className="text-gray-600">BE45VGRT</span>
            </p>
          </div>
          <div className="flex items-baseline mb-1 space-x-2 font-roboto mt-4">
            <p className="text-xl text-primary font-semibold">${product.sale_price || product.regular_price}</p>
            <p className="text-base text-gray-400 line-through">${product.regular_price}</p>
          </div>

          <p className="mt-4 text-gray-600" dangerouslySetInnerHTML={{ __html: product.short_description }} />

          <div className="pt-4 flex flex-col gap-3">
            {
              product?.attributes?.map((attribute: any, index: number) => (
                <div key={`product-attribute-${attribute.name}-${index}`}>
                  <h3 className="text-sm text-gray-800 first-letter:capitalize font-semibold mb-1">{attribute.name}</h3>
                  <div className="flex items-center gap-2">
                    {
                      attribute?.options?.map((option: string, index: number) => (
                        <div
                          key={`product-attribute-option-${option}-${index}`}
                          className="size-selector"
                        >
                          <input type="radio" name={attribute.name} id={option} className="hidden" />
                          <label
                            htmlFor={option}
                            className="text-xs border border-gray-200 rounded-sm h-6 p-2 flex items-center justify-center cursor-pointer shadow-sm text-gray-600 truncate"
                          >
                            {option}
                          </label>
                        </div>
                      ))
                    }
                  </div>
                </div>
              ))
            }
          </div>

          <div className="mt-4">
            <h3 className="text-sm text-gray-800 uppercase mb-1">Quantity</h3>
            <div className="flex border border-gray-300 text-gray-600 divide-x divide-gray-300 w-max">
              <div className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none">-</div>
              <div className="h-8 w-8 text-base flex items-center justify-center">4</div>
              <div className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none">+</div>
            </div>
          </div>

          <div className="mt-6 flex gap-3 border-b border-gray-200 pb-5 pt-5">
            <a href="#"
              className="bg-primary border border-primary text-white px-8 py-2 font-medium rounded uppercase flex items-center gap-2 hover:bg-transparent hover:text-primary transition">
              <i className="fa-solid fa-bag-shopping"></i> Add to cart
            </a>
            <a href="#"
              className="border border-gray-300 text-gray-600 px-8 py-2 font-medium rounded uppercase flex items-center gap-2 hover:text-primary transition">
              <i className="fa-solid fa-heart"></i> Wishlist
            </a>
          </div>

          <div className="flex gap-3 mt-4">
            <a href="#"
              className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a href="#"
              className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center">
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a href="#"
              className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </div>
        </div>

      </div>
      {/*  <!-- ./product-detail --> */}

      {/* <!-- description --> */}
      <div className="container pb-16">
        <h3 className="border-b border-gray-200 font-roboto text-gray-800 pb-3 text-lg font-semibold">Product details</h3>
        <div className="w-3/5 pt-6">
          <div
            className="text-gray-600"
            dangerouslySetInnerHTML={{ __html: product.description }}
          />
        </div>
      </div>
      {/* <!-- ./description --> */}

      {/* <!-- related product --> */}
      <div className="container pb-16">
        <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">Related products</h2>
        <div className="grid grid-cols-4 gap-6">
          {
            similarProducts.map((currentProduct) => {
              if (product?.slug !== currentProduct?.slug) {
                return (
                  <Card
                    key={`similar-product-card-${currentProduct?.slug}-${currentProduct.id}`}
                    href={`/product/${currentProduct?.slug}/`}
                    title={currentProduct?.name}
                    regular_price={currentProduct?.regular_price}
                    sale_price={currentProduct?.sale_price}
                    image={{
                      src: currentProduct?.images?.[0]?.src,
                      height: 500,
                      width: 500
                    }}
                  />
                );
              }
              return null;
            })
          }
        </div>
      </div>
      {/* <!-- ./related product --> */}

    </div>
  )
}
