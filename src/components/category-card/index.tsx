import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface CategoryCardProps {
  title: string;
  image: string;
  href?: string;
}
export default function CategoryCard({ title, image, href = "#" }: CategoryCardProps) {
  return (
    <div className="relative rounded-sm overflow-hidden group">
      <Image
        src={image}
        alt="category 1"
        className="w-full"
        height={1000}
        width={1000}
        priority={false}
        loading='lazy'
        unoptimized
      />
      <Link href={href}
        className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition">
        {title}
      </Link>
    </div>
  )
}
