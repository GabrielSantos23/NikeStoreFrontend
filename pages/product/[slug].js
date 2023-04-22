import ProductDetailsCarousel from '@/components/ProductDetailsCarousel';
import Wrapper from '@/components/Wrapper';
import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { IoMdHeartEmpty } from 'react-icons/io';
import RelatedProducts from '@/components/RelatedProducts';
const ProductDetails = () => {
  return (
    <div className='w-full md:py-20'>
      <Wrapper>
        <div className='flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]'>
          <div className='w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0'>
            <ProductDetailsCarousel />
          </div>
          <div className='flex-[1] py-3'>
            <div className='text-[34px] font-semibold mb-2'>
              Jordan Retro 6 G
            </div>
            <div className='text-lg font-semibold mb-5'>
              Men&apos;s Golf Shoes
            </div>
            <div className='text-lg font-semibold '>$240,00</div>
            <div className='text-md font-medium text-black/[0.5] '>
              incl.of taxes
            </div>
            <div className='text-md font-medium text-black/[0.5] mb-20 '>
              {`(Also includes all applicable duties)`}
            </div>
            <div className='mb-10'>
              <div className='flex justify-between mb-2'>
                <div className='text-md font-semibold'>Select Size</div>
                <div className='text-md font-medium text-black/[0.5] cursor-pointer'>
                  Select Guide
                </div>
              </div>
              <div className='grid grid-cols-3 gap-2'>
                <div className='border rounded-md text-center py-3 font-medium opacity-50  bg-black/[0.1] hover:border-black cursor-not-allowed'>
                  4
                </div>
                <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                  4.5
                </div>
                <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                  5
                </div>
                <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                  5.5
                </div>
                <div className='border rounded-md text-center py-3 font-medium opacity-50  bg-black/[0.1] hover:border-black cursor-not-allowed'>
                  6
                </div>
                <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                  6.5
                </div>
                <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                  7
                </div>
                <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                  7.5
                </div>
                <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                  8
                </div>
                <div className='border rounded-md text-center py-3 font-medium opacity-50  bg-black/[0.1] hover:border-black cursor-not-allowed'>
                  8.5
                </div>
              </div>
              <div className='text-red-600 mt-1'>
                Size selection is required
              </div>
            </div>
            <button className='w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-90'>
              Add to Cart
            </button>
            <button className='w-full py-4 rounded-full border border-black text-lg font-medium transition-transform active:scale-95 flex items-center justify-center gap-2 hover:opacity75 mb-10'>
              Whishlist
              <IoMdHeartEmpty size={20} />
            </button>
            <div>
              <div className='text-lg font-bold mb-5'>Product Details</div>
              <div className='text-md mb-5'>
                "Be cool. Stay cool. The AJ-6 ""Cool Grey"" lets your style take
                flight with a colourway rooted to Jordan Brand DNA. MJ wore 'em
                when he claimed his first championship and you'll be wearing 'em
                for—well, whatever you want. Laden with sleek features like
                dynamic design lines and an iced outsole, these sneakers bring
                speed and class to any 'fit. After all, they were famously
                inspired by Jordan's (wait for it) COOL sports car. So lace up
                and let your kicks do the rest. Colour Shown: White/Cool
                Grey/Medium Grey Style: CT8529-100"
              </div>
              <div className='text-md mb-5'>
                "Be cool. Stay cool. The AJ-6 ""Cool Grey"" lets your style take
                flight with a colourway rooted to Jordan Brand DNA. MJ wore 'em
                when he claimed his first championship and you'll be wearing 'em
                for—well, whatever you want. Laden with sleek features like
                dynamic design lines and an iced outsole, these sneakers bring
                speed and class to any 'fit. After all, they were famously
                inspired by Jordan's (wait for it) COOL sports car. So lace up
                and let your kicks do the rest. Colour Shown: White/Cool
                Grey/Medium Grey Style: CT8529-100"
              </div>
            </div>
          </div>
        </div>
        <RelatedProducts />
      </Wrapper>
    </div>
  );
};

export default ProductDetails;
