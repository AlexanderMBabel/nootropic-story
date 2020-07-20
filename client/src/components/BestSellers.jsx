import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { AppContext } from '../context/app.context';
import { ADD_ALERT } from '../reducers/types';
import ShowProduct from './ShowProduct';

const BestSellers = () => {
  const [products, setProducts] = useState([]);

  const { dispatch } = useContext(AppContext);
  useEffect(() => {
    axios
      .get(process.env.REACT_APP_PRODUCT_DB + 'top')
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        dispatch({ type: ADD_ALERT, payload: err.errors });
      });
  }, [dispatch]);

  const displayProducts = products.map((product) => (
    <ShowProduct productData={product} key={product.product} />
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
