import { getDiscountedPricePercentage } from '@/utils/helper';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
const ProductCard = ({ data: { attributes: p, id } }) => {
  return (
    <Link
      href={`/product/${p.slug}`}
      className='transform overflow-hidden bg-white duration-200 hover:scale-105 '
    >
      <Image
        width={500}
        height={500}
        className='w-full'
        src={p.thumbnail.data.attributes.url}
        alt={p.name}
      />
      <div className='p-4 text-black/[0.9]'>
        <h2 className='text-base font-medium'>{p.name}</h2>
        <div className='flex items-center text-black/[0.5]'>
          <p className='mr-2 text-sm font-semibold'>&#36;{p.price}</p>
          {p.original_price && (
            <>
              <p className='text-sm font-medium line-through'>
                &#36;{p.original_price}
              </p>
              <p className='ml-auto text-sm font-medium text-green-500'>
                {getDiscountedPricePercentage(p.original_price, p.price)}% Off
              </p>
            </>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
