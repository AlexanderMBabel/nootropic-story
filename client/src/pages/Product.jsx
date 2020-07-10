import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { AppContext } from '../context/app.context';
import Skeleton from 'react-loading-skeleton';
import { Button } from '@material-ui/core';
const Product = ({ product }) => {
  const [productData, setProductData] = useState(null);
  const [errors, setErrors] = useState([]);
  const { state } = useContext(AppContext);
  const { loading } = state;
  console.log(productData);
  useEffect(() => {
    axios
      .get(process.env.REACT_APP_PRODUCT_DB + 'get_product', {
        params: { product: product },
      })
      .then((res) => {
        setProductData(res.data);
      })
      .catch((err) => setErrors([...errors, err.errors]));
  }, []);
  return (
    <div className='flex p-4 items-center justify-center w-full'>
      <div className='flex rounded shadow justify-center items-center flex-col p-6 w-5/6'>
        <div>
          {loading ? (
            <Skeleton height={200} />
          ) : (
            productData && (
              <img src={productData.image} alt={productData.product} />
            )
          )}
        </div>
        <p className='p-6 text-xl'>
          {loading ? <Skeleton /> : productData && productData.product}
        </p>
        <div>
          {loading ? (
            <Skeleton />
          ) : (
            productData &&
            productData.sizes.map((size) => (
              <Button variant='text' size='small'>
                {size}
              </Button>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
