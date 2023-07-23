import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

export default function Header({ logo }: { logo: string }) {
  return (
    <div>
      {/* <!-- header --> */}
      <header className="py-4 shadow-sm bg-white">
        <div className="container flex items-center justify-between">
          <Link href="/">
            <Image
              src={logo}
              alt="Logo"
              className="w-32"
            />
          </Link>

          <div className="w-full max-w-xl relative flex">
            <span className="absolute left-4 top-3 text-lg text-gray-400">
              <i className="fa-solid fa-magnifying-glass"></i>
            </span>
            <input type="text" name="search" id="search"
              className="w-full border border-primary border-r-0 pl-12 py-3 pr-3 rounded-l-md focus:outline-none hidden md:flex"
              placeholder="search" />
            <button className="bg-primary border border-primary text-white px-8 rounded-r-md hover:bg-transparent hover:text-primary transition hidden md:flex justify-center items-center">
              Search
            </button>
          </div>

          <div className="flex items-center space-x-4">
            <a href="#" className="text-center text-gray-700 hover:text-primary transition relative">
              <div className="text-2xl">
                <i className="fa-regular fa-heart"></i>
              </div>
              <div className="text-xs leading-3">Wishlist</div>
              <div
                className="absolute right-0 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">
                8</div>
            </a>
            <Link href="/checkout/" className="text-center text-gray-700 hover:text-primary transition relative">
              <div className="text-2xl">
                <i className="fa-solid fa-bag-shopping"></i>
              </div>
              <div className="text-xs leading-3">Cart</div>
              <div
                className="absolute -right-3 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">
                2</div>
            </Link>
          </div>
        </div>
      </header>
      {/* <!-- ./header --> */}

      {/* <!-- navbar --> */}
      <nav className="bg-gray-800">
        <div className="container flex">
          <div className="px-8 py-4 bg-primary md:flex items-center cursor-pointer relative group hidden">
            <span className="text-white">
              <i className="fa-solid fa-bars"></i>
            </span>
            <span className="capitalize ml-2 text-white hidden">All Categories</span>

            {/* <!-- dropdown --> */}
            <div
              className="absolute w-full left-0 top-full bg-white shadow-md py-3 divide-y divide-gray-300 divide-dashed opacity-0 group-hover:opacity-100 transition duration-300 invisible group-hover:visible">
              <a href="#" className="flex gap-2 items-center px-6 py-3 hover:bg-gray-100 transition w-max h-5">
                <div className="relative w-5 h-5">
                  <Image
                    src="https://picsum.photos/1006"
                    fill
                    loading='lazy'
                    unoptimized
                    alt="sofa"
                    className="w-5 object-contain"
                  />
                </div>
                <span className="flex-1 text-gray-600 text-sm">Sofa</span>
              </a>
              <a href="#" className="flex gap-2 items-center px-6 py-3 hover:bg-gray-100 transition w-max h-5">
                <div className="relative w-5 h-5">
                  <Image
                    src="https://picsum.photos/1000"
                    fill
                    loading='lazy'
                    unoptimized
                    alt="terrace"
                    className="w-5 object-contain"
                  />
                </div>
                <span className="flex-1 text-gray-600 text-sm">Terarce</span>
              </a>
              <a href="#" className="flex gap-2 items-center px-6 py-3 hover:bg-gray-100 transition w-max h-5">
                <div className="relative w-5 h-5">
                  <Image
                    src="https://picsum.photos/1004"
                    fill
                    loading='lazy'
                    unoptimized
                    alt="bed"
                    className="w-5 object-contain"
                  />
                </div>
                <span className="flex-1 text-gray-600 text-sm">Bed</span>
              </a>
              <a href="#" className="flex gap-2 items-center px-6 py-3 hover:bg-gray-100 transition w-max h-5">
                <div className="relative w-5 h-5">
                  <Image
                    src="https://picsum.photos/1003"
                    fill
                    loading='lazy'
                    unoptimized
                    alt="office"
                    className="w-5 object-contain"
                  />
                </div>
                <span className="flex-1 text-gray-600 text-sm">office</span>
              </a>
              <a href="#" className="flex gap-2 items-center px-6 py-3 hover:bg-gray-100 transition w-max h-5">
                <div className="relative w-5 h-5">
                  <Image
                    src="https://picsum.photos/1002"
                    fill
                    loading='lazy'
                    unoptimized
                    alt="outdoor"
                    className="w-5 object-contain"
                  />
                </div>
                <span className="flex-1 text-gray-600 text-sm">Outdoor</span>
              </a>
              <a href="#" className="flex gap-2 items-center px-6 py-3 hover:bg-gray-100 transition w-max h-5">
                <div className="relative w-5 h-5">
                  <Image
                    src="https://picsum.photos/1001"
                    fill
                    loading='lazy'
                    unoptimized
                    alt="Mattress"
                    className="w-5 object-contain"
                  />
                </div>
                <span className="flex-1 text-gray-600 text-sm">Mattress</span>
              </a>
            </div>
          </div>

          <div className="flex items-center justify-between flex-grow md:pl-12 py-5">
            <div className="flex items-center space-x-6 capitalize">
              <Link href="/" className="text-gray-200 hover:text-white transition">Home</Link>
              <Link href="/shop/1" className="text-gray-200 hover:text-white transition">Shop</Link>
            </div>
            <a href="pages/login.html" className="text-gray-200 hover:text-white transition">Login</a>
          </div>
        </div>
      </nav>
      {/* <!-- ./navbar --> */}
    </div>
  );
}
