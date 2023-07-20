import Card from '@/components/card';
import CategoryCard from '@/components/category-card';
import { getCategories, getProducts } from '@/services/product'
import Image from 'next/image'

export default async function Home() {
  const products = await getProducts<any>();
  const { data: categories } = await getCategories<any>();

  return (
    <div>
      <div
        className="bg-cover bg-no-repeat bg-center py-36 relative overflow-hidden"
      >
        <Image
          src={"https://github.com/fajar7xx/ecommerce-template-tailwind-1/blob/main/public/assets/images/banner-bg.jpg?raw=true"}
          fill
          unoptimized
          alt='hero'
          className='z-0'
          priority
          loading='eager'
        />
        <div className="container relative z-10">
          <h1 className="text-6xl text-gray-800 font-medium mb-4 capitalize">
            best collection for <br /> home decoration
          </h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam <br />
            accusantium perspiciatis, sapiente
            magni eos dolorum ex quos dolores odio</p>
          <div className="mt-12">
            <a
              href="#"
              className="bg-primary border border-primary text-white px-8 py-3 font-medium rounded-md hover:bg-transparent hover:text-primary">
              Shop Now
            </a>
          </div>
        </div>
      </div>
      {/* features */}
      <div className="container py-16">
        <div className="w-10/12 grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto justify-center">
          <div className="border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5">
            <img src="https://picsum.photos/1020" alt="Delivery" className="w-12 h-12 object-contain" />
            <div>
              <h4 className="font-medium capitalize text-lg">Free Shipping</h4>
              <p className="text-gray-500 text-sm">Order over $200</p>
            </div>
          </div>
          <div className="border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5">
            <img src="https://picsum.photos/1022" alt="Delivery" className="w-12 h-12 object-contain" />
            <div>
              <h4 className="font-medium capitalize text-lg">Money Rturns</h4>
              <p className="text-gray-500 text-sm">30 days money returs</p>
            </div>
          </div>
          <div className="border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5">
            <img src="https://picsum.photos/1023" alt="Delivery" className="w-12 h-12 object-contain" />
            <div>
              <h4 className="font-medium capitalize text-lg">24/7 Support</h4>
              <p className="text-gray-500 text-sm">Customer support</p>
            </div>
          </div>
        </div>
      </div>

      {/* categories */}
      <div className="container py-16">
        <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">shop by category</h2>
        <div className="grid grid-cols-3 gap-3">
          {
            categories.map((category: any) => (
              <CategoryCard
                key={`category-item=${category.slug}-${category.term_id}`}
                title={category.name}
                image={"https://picsum.photos/1030"}
                href={`/category/${category.slug}/`}
              />
            ))
          }
          <CategoryCard
            title={"Bedroom"}
            image={"https://picsum.photos/1032"}
            href={`/category/bed/`}
          />
          <CategoryCard
            title={"Mattras"}
            image={"https://picsum.photos/1033"}
            href={`/category/bed/`}
          />
          <CategoryCard
            title={"Outdoor"}
            image={"https://picsum.photos/1034"}
            href={`/category/bed/`}
          />
          <CategoryCard
            title={"Azul a winathan"}
            image={"https://picsum.photos/1035"}
            href={`/category/bed/`}
          />
        </div>
      </div>

      {/* <!-- new arrival --> */}
      <div className="container pb-16">
        <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">top new arrival</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {
            products.map((product: Record<string, any>) => (
              <Card
                key={`new-arrival-${product.slug}-${product.id}`}
                href={`/product/${product.slug}`}
                title={product.name}
                regular_price={product.regular_price}
                sale_price={product.sale_price}
                image={{
                  src: product.images[0].src,
                  height: product.images[0].height,
                  width: product.images[0].width,
                }}
              />
            ))
          }
        </div>
      </div>

      {/* <!-- ads --> */}
      <div className="container relative pb-16">
        <a href="#">
          <Image
            src="https://raw.githubusercontent.com/fajar7xx/ecommerce-template-tailwind-1/main/public/assets/images/offer.jpg"
            height={112}
            width={467}
            alt="ads"
            className="w-full"
            loading="lazy"
          />
        </a>
      </div>

      {/* products */}
      <div className="container pb-16">
        <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">recomended for you</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-white shadow rounded overflow-hidden group">
            <div className="relative">
              <Image
                src="https://picsum.photos/1791"
                alt="product 1"
                className="w-full"
                height={1000}
                width={100}
                loading='lazy'
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center 
                    justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                <a href="#"
                  className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                  title="view product">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </a>
                <a href="#"
                  className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                  title="add to wishlist">
                  <i className="fa-solid fa-heart"></i>
                </a>
              </div>
            </div>
            <div className="pt-4 pb-3 px-4">
              <a href="#">
                <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">Guyer
                  Chair</h4>
              </a>
              <div className="flex items-baseline mb-1 space-x-2">
                <p className="text-xl text-primary font-semibold">$45.00</p>
                <p className="text-sm text-gray-400 line-through">$55.90</p>
              </div>
              <div className="flex items-center">
                <div className="flex gap-1 text-sm text-yellow-400">
                  <span><i className="fa-solid fa-star"></i></span>
                  <span><i className="fa-solid fa-star"></i></span>
                  <span><i className="fa-solid fa-star"></i></span>
                  <span><i className="fa-solid fa-star"></i></span>
                  <span><i className="fa-solid fa-star"></i></span>
                </div>
                <div className="text-xs text-gray-500 ml-3">(150)</div>
              </div>
            </div>
            <a href="#"
              className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition">Add
              to cart</a>
          </div>
          <div className="bg-white shadow rounded overflow-hidden group">
            <div className="relative">
              <Image
                src="https://picsum.photos/1701"
                alt="product 1"
                className="w-full"
                height={1000}
                width={100}
                loading='lazy'
              // unoptimized={false}
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center 
                    justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                <a href="#"
                  className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                  title="view product">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </a>
                <a href="#"
                  className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                  title="add to wishlist">
                  <i className="fa-solid fa-heart"></i>
                </a>
              </div>
            </div>
            <div className="pt-4 pb-3 px-4">
              <a href="#">
                <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">Bed
                  King Size</h4>
              </a>
              <div className="flex items-baseline mb-1 space-x-2">
                <p className="text-xl text-primary font-semibold">$45.00</p>
                <p className="text-sm text-gray-400 line-through">$55.90</p>
              </div>
              <div className="flex items-center">
                <div className="flex gap-1 text-sm text-yellow-400">
                  <span><i className="fa-solid fa-star"></i></span>
                  <span><i className="fa-solid fa-star"></i></span>
                  <span><i className="fa-solid fa-star"></i></span>
                  <span><i className="fa-solid fa-star"></i></span>
                  <span><i className="fa-solid fa-star"></i></span>
                </div>
                <div className="text-xs text-gray-500 ml-3">(150)</div>
              </div>
            </div>
            <a href="#"
              className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition">Add
              to cart</a>
          </div>
          <div className="bg-white shadow rounded overflow-hidden group">
            <div className="relative">
              <Image
                src="https://picsum.photos/1711"
                alt="product 1"
                className="w-full"
                height={1000}
                width={100}
                loading='lazy'
              // unoptimized={false}
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center 
                    justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                <a href="#"
                  className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                  title="view product">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </a>
                <a href="#"
                  className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                  title="add to wishlist">
                  <i className="fa-solid fa-heart"></i>
                </a>
              </div>
            </div>
            <div className="pt-4 pb-3 px-4">
              <a href="#">
                <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
                  Couple Sofa</h4>
              </a>
              <div className="flex items-baseline mb-1 space-x-2">
                <p className="text-xl text-primary font-semibold">$45.00</p>
                <p className="text-sm text-gray-400 line-through">$55.90</p>
              </div>
              <div className="flex items-center">
                <div className="flex gap-1 text-sm text-yellow-400">
                  <span><i className="fa-solid fa-star"></i></span>
                  <span><i className="fa-solid fa-star"></i></span>
                  <span><i className="fa-solid fa-star"></i></span>
                  <span><i className="fa-solid fa-star"></i></span>
                  <span><i className="fa-solid fa-star"></i></span>
                </div>
                <div className="text-xs text-gray-500 ml-3">(150)</div>
              </div>
            </div>
            <a href="#"
              className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition">Add
              to cart</a>
          </div>
          <div className="bg-white shadow rounded overflow-hidden group">
            <div className="relative">
              <Image
                src="https://picsum.photos/1721"
                alt="product 1"
                className="w-full"
                height={1000}
                width={100}
                loading='lazy'
              // unoptimized={false}
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center 
                    justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                <a href="#"
                  className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                  title="view product">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </a>
                <a href="#"
                  className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                  title="add to wishlist">
                  <i className="fa-solid fa-heart"></i>
                </a>
              </div>
            </div>
            <div className="pt-4 pb-3 px-4">
              <a href="#">
                <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
                  Mattrass X</h4>
              </a>
              <div className="flex items-baseline mb-1 space-x-2">
                <p className="text-xl text-primary font-semibold">$45.00</p>
                <p className="text-sm text-gray-400 line-through">$55.90</p>
              </div>
              <div className="flex items-center">
                <div className="flex gap-1 text-sm text-yellow-400">
                  <span><i className="fa-solid fa-star"></i></span>
                  <span><i className="fa-solid fa-star"></i></span>
                  <span><i className="fa-solid fa-star"></i></span>
                  <span><i className="fa-solid fa-star"></i></span>
                  <span><i className="fa-solid fa-star"></i></span>
                </div>
                <div className="text-xs text-gray-500 ml-3">(150)</div>
              </div>
            </div>
            <a href="#"
              className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition">Add
              to cart</a>
          </div>
          <div className="bg-white shadow rounded overflow-hidden group">
            <div className="relative">
              <Image
                src="https://picsum.photos/1731"
                alt="product 1"
                className="w-full"
                height={1000}
                width={100}
                loading='lazy'
              // unoptimized={false}
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center 
                    justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                <a href="#"
                  className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                  title="view product">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </a>
                <a href="#"
                  className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                  title="add to wishlist">
                  <i className="fa-solid fa-heart"></i>
                </a>
              </div>
            </div>
            <div className="pt-4 pb-3 px-4">
              <a href="#">
                <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">Guyer
                  Chair</h4>
              </a>
              <div className="flex items-baseline mb-1 space-x-2">
                <p className="text-xl text-primary font-semibold">$45.00</p>
                <p className="text-sm text-gray-400 line-through">$55.90</p>
              </div>
              <div className="flex items-center">
                <div className="flex gap-1 text-sm text-yellow-400">
                  <span><i className="fa-solid fa-star"></i></span>
                  <span><i className="fa-solid fa-star"></i></span>
                  <span><i className="fa-solid fa-star"></i></span>
                  <span><i className="fa-solid fa-star"></i></span>
                  <span><i className="fa-solid fa-star"></i></span>
                </div>
                <div className="text-xs text-gray-500 ml-3">(150)</div>
              </div>
            </div>
            <a href="#"
              className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition">Add
              to cart</a>
          </div>
          <div className="bg-white shadow rounded overflow-hidden group">
            <div className="relative">
              <Image
                src="https://picsum.photos/1741"
                alt="product 1"
                className="w-full"
                height={1000}
                width={100}
                loading='lazy'
              // unoptimized={false}
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center 
                    justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                <a href="#"
                  className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                  title="view product">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </a>
                <a href="#"
                  className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                  title="add to wishlist">
                  <i className="fa-solid fa-heart"></i>
                </a>
              </div>
            </div>
            <div className="pt-4 pb-3 px-4">
              <a href="#">
                <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">Bed
                  King Size</h4>
              </a>
              <div className="flex items-baseline mb-1 space-x-2">
                <p className="text-xl text-primary font-semibold">$45.00</p>
                <p className="text-sm text-gray-400 line-through">$55.90</p>
              </div>
              <div className="flex items-center">
                <div className="flex gap-1 text-sm text-yellow-400">
                  <span><i className="fa-solid fa-star"></i></span>
                  <span><i className="fa-solid fa-star"></i></span>
                  <span><i className="fa-solid fa-star"></i></span>
                  <span><i className="fa-solid fa-star"></i></span>
                  <span><i className="fa-solid fa-star"></i></span>
                </div>
                <div className="text-xs text-gray-500 ml-3">(150)</div>
              </div>
            </div>
            <a href="#"
              className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition">Add
              to cart</a>
          </div>
          <div className="bg-white shadow rounded overflow-hidden group">
            <div className="relative">
              <Image
                src="https://picsum.photos/1751"
                alt="product 1"
                className="w-full"
                height={1000}
                width={100}
                loading='lazy'
              // unoptimized={false}
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center 
                    justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                <a href="#"
                  className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                  title="view product">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </a>
                <a href="#"
                  className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                  title="add to wishlist">
                  <i className="fa-solid fa-heart"></i>
                </a>
              </div>
            </div>
            <div className="pt-4 pb-3 px-4">
              <a href="#">
                <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
                  Couple Sofa</h4>
              </a>
              <div className="flex items-baseline mb-1 space-x-2">
                <p className="text-xl text-primary font-semibold">$45.00</p>
                <p className="text-sm text-gray-400 line-through">$55.90</p>
              </div>
              <div className="flex items-center">
                <div className="flex gap-1 text-sm text-yellow-400">
                  <span><i className="fa-solid fa-star"></i></span>
                  <span><i className="fa-solid fa-star"></i></span>
                  <span><i className="fa-solid fa-star"></i></span>
                  <span><i className="fa-solid fa-star"></i></span>
                  <span><i className="fa-solid fa-star"></i></span>
                </div>
                <div className="text-xs text-gray-500 ml-3">(150)</div>
              </div>
            </div>
            <a href="#"
              className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition">Add
              to cart</a>
          </div>
          <div className="bg-white shadow rounded overflow-hidden group">
            <div className="relative">
              <Image
                src="https://picsum.photos/1761"
                alt="product 1"
                className="w-full"
                height={1000}
                width={100}
                loading='lazy'
              // unoptimized={false}
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center 
                    justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                <a href="#"
                  className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                  title="view product">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </a>
                <a href="#"
                  className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                  title="add to wishlist">
                  <i className="fa-solid fa-heart"></i>
                </a>
              </div>
            </div>
            <div className="pt-4 pb-3 px-4">
              <a href="#">
                <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
                  Mattrass X</h4>
              </a>
              <div className="flex items-baseline mb-1 space-x-2">
                <p className="text-xl text-primary font-semibold">$45.00</p>
                <p className="text-sm text-gray-400 line-through">$55.90</p>
              </div>
              <div className="flex items-center">
                <div className="flex gap-1 text-sm text-yellow-400">
                  <span><i className="fa-solid fa-star"></i></span>
                  <span><i className="fa-solid fa-star"></i></span>
                  <span><i className="fa-solid fa-star"></i></span>
                  <span><i className="fa-solid fa-star"></i></span>
                  <span><i className="fa-solid fa-star"></i></span>
                </div>
                <div className="text-xs text-gray-500 ml-3">(150)</div>
              </div>
            </div>
            <a href="#"
              className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition">Add
              to cart</a>
          </div>
        </div>
      </div>

    </div>
  )
}
