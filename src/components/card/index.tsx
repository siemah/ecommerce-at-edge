import { getImageLink } from '@/libs/images/utils';
import Image from 'next/image';
import Link from 'next/link';
import { UrlObject } from 'url';

interface CardProps {
  title: string;
  sale_price: string;
  regular_price: string;
  as?: "div" | "a" | typeof Link;
  href?: string | UrlObject;
  image: {
    src: string;
    height: number;
    width: number;
  };
}

export default function Card({ title, regular_price, sale_price, image, as = "div", href }: CardProps) {
  const AsElement = href ? Link : as;

  return (
    <AsElement href={href as any} className="bg-white shadow rounded overflow-hidden group">
      <div className="relative">
        <Image
          src={getImageLink(image.src, {
            we: true,
            fit: "contain",
            w: 550,
          })}
          height={image.height || 1000}
          width={image.width || 1000}
          alt={title}
          className="w-full aspect-square object-contain"
          unoptimized
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center 
                    justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
          <span
            className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
            title="view product">
            <i className="fa-solid fa-magnifying-glass"></i>
          </span>
          <span
            className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
            title="add to wishlist">
            <i className="fa-solid fa-heart"></i>
          </span>
        </div>
      </div>
      <div className="pt-4 pb-3 px-4">
        <span>
          <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition truncate">
            {title}
          </h4>
        </span>
        <div className="flex items-baseline mb-1 space-x-2">
          {
            !!sale_price && (
              <p className="text-xl text-primary font-semibold">${sale_price}</p>
            )
          }
          <p className="text-sm text-gray-400 line-through">${regular_price}</p>
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
      <span
        className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition">
        Add to cart
      </span>
    </AsElement>
  )
}
