import ProductDetailsCarousel from '@/components/ProductDetailsCarousel';
import Wrapper from '@/components/Wrapper';
import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useSelector, useDispatch } from 'react-redux';
import { IoMdHeartEmpty } from 'react-icons/io';
import RelatedProducts from '@/components/RelatedProducts';
import { fetchDataFromApi } from '@/utils/api';
import { getDiscountedPricePercentage } from '@/utils/helper';
import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { addToCart } from '@/store/cartSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductDetails = ({ product, products }) => {
  const [selectedSize, setSelectedSize] = useState();
  const [showError, setShowError] = useState(false);
  const dispatch = useDispatch();
  const p = product.data[0].attributes;

  const notify = () => {
    toast.success('Success! Check your cart!', {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'dark',
    });
  };

  return (
    <div className='w-full md:py-20'>
      <ToastContainer />
      <Wrapper>
        <div className='flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]'>
          <div className='w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0'>
            <ProductDetailsCarousel images={p?.image?.data} />
          </div>
          <div className='flex-[1] py-3'>
            <div className='leading-10  text-[34px] font-semibold mb-2'>
              {p.name}
            </div>
            <div className='text-lg font-semibold mb-5'>{p?.subtitle}</div>
            <div className='flex items-center text-black '>
              <p className=' mr-2 text-sm font-bold'>&#36;{p.price}</p>
              {p.original_price && (
                <>
                  <p className='text-sm font-medium line-through'>
                    &#36;{p.original_price}
                  </p>
                  <p className='ml-auto text-sm font-medium text-green-500'>
                    {getDiscountedPricePercentage(p.original_price, p.price)}%
                    Off
                  </p>
                </>
              )}
            </div>
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
              <div id='sizesGrid' className='grid grid-cols-3 gap-2'>
                {p.size.data.map((item, i) => (
                  <div
                    key={i}
                    onClick={() => {
                      setSelectedSize(item.size);
                      setShowError(false);
                    }}
                    className={`border rounded-md text-center py-3 font-medium ${
                      item.enabled
                        ? 'hover:border-black cursor-pointer'
                        : 'cursor-not-allowed opacity-50 bg-black/[0.1]'
                    } ${selectedSize === item.size ? 'border-black' : ''}`}
                  >
                    {item.size}
                  </div>
                ))}
              </div>
              {showError && (
                <div className='text-red-600 mt-1'>
                  Size selection is required
                </div>
              )}
            </div>
            <button
              onClick={() => {
                if (!selectedSize) {
                  setShowError(true);
                  document.getElementById('sizesGrid').scrollIntoView({
                    block: 'center',
                    behavior: 'smooth',
                  });
                } else {
                  dispatch(
                    addToCart({
                      ...product?.data?.[0],
                      selectedSize,
                      oneQuantityPrice: p.price,
                    })
                  );
                  notify();
                }
              }}
              className='w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-90'
            >
              Add to Cart
            </button>
            <button className='w-full py-4 rounded-full border border-black text-lg font-medium transition-transform active:scale-95 flex items-center justify-center gap-2 hover:opacity75 mb-10'>
              Whishlist
              <IoMdHeartEmpty size={20} />
            </button>
            <div>
              <div className='text-lg font-bold mb-5'>Product Details</div>
              <div className='text-md mb-5 markdown'>
                <ReactMarkdown>{p.description}</ReactMarkdown>
              </div>
            </div>
          </div>
        </div>
        <RelatedProducts products={products} />
      </Wrapper>
    </div>
  );
};

export async function getStaticPaths() {
  const products = await fetchDataFromApi('/api/products?populate=*');
  const paths = products?.data?.map((p) => ({
    params: {
      slug: p.attributes.slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const product = await fetchDataFromApi(
    `/api/products?populate=*&filters[slug][$eq]=${slug}`
  );
  const products = await fetchDataFromApi(
    `/api/products?populate=*&[filters][slug][$ne]=${slug}`
  );

  return {
    props: {
      product,
      products,
    },
  };
}
export default ProductDetails;
