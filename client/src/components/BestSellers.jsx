import React, { useEffect, useState } from 'react';
import axios from 'axios';

import ShowProduct from './ShowProduct';

const BestSellers = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState([]);
  useEffect(() => {
    setLoading(true);
    axios
      .get(process.env.REACT_APP_PRODUCT_DB + 'top')
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setErrors((errors) => [...errors, err.errors.message]);
      });
  }, []);

  const displayProducts = products.map((product) => (
    <ShowProduct
      productData={product}
      loading={loading}
      key={product.product}
    />
  ));
  return (
    <div className='w-full flex flex-wrap justify-center'>
      <div className='flex flex-col items-center w-full'>
        <h1 className='text-gray-800 text-2xl font-galada'>Best Sellers</h1>
        <div className='flex flex-wrap justify-around w-5/6'>
          {displayProducts}
        </div>
      </div>
    </div>
  );
};

export default BestSellers;
