import React, { useContext, useMemo, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';

// Loading State Component
const Loading = () => (
  <div className="flex justify-center items-center h-40">
    <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-yellow-500" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>
);

// Error State Component
const Error = ({ message }) => (
  <div className="flex justify-center items-center h-40">
    <p className="text-red-500 text-lg font-semibold">{message}</p>
  </div>
);

// Button Component
const CustomButton = ({ onClick, children, ariaLabel }) => (
  <button
    className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white text-lg font-semibold px-8 py-3 rounded-full shadow-md hover:shadow-lg hover:scale-105 transform transition-all duration-300"
    onClick={onClick}
    aria-label={ariaLabel}
  >
    {children}
  </button>
);

const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Memoized calculation of latest products
  const latestProducts = useMemo(() => {
    if (!products) {
      return [];
    }
    return products.slice(0, 10);
  }, [products]);

  if (loading) return <Loading />;
  if (error) return <Error message={error} />;

  return (
    <div className="my-16 bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-6 lg:px-16">
      {/* Title Section */}
      <div className="text-center py-8">
        <Title text1="LATEST" text2="COLLECTIONS" />
        <p className="w-full md:w-2/3 lg:w-1/2 mx-auto text-sm md:text-base text-gray-600 leading-relaxed">
          Explore our exclusive, handpicked collection of the season's most sought-after products. Elevate your style and find something you'll love.
        </p>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {latestProducts.length > 0 ? (
          latestProducts.map((item) => (
            <ProductItem
              key={item._id}
              id={item._id}
              image={item.image}
              name={item.name}
              price={item.price}
            />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">No products available.</p>
        )}
      </div>

      {/* Call to Action */}
      <div className="flex justify-center mt-10">
        <CustomButton ariaLabel="View all products">
          View All Products
        </CustomButton>
      </div>
    </div>
  );
};

export default LatestCollection;
