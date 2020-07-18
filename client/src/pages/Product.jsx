import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { AppContext } from '../context/app.context';
import Skeleton from 'react-loading-skeleton';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ADD_ALERT } from '../reducers/types';
import { ADD_TO_CART } from '../reducers/types';
import AddToCartButton from '../components/AddToCartButton';
import { v4 as uuid } from 'uuid';

const useStyles = makeStyles((theme) => ({
  selectedSize: {
    backgroundColor: theme.palette.primary.main,
    color: 'white',
    '&:active': {
      outline: 'none',
    },
    '&:focus': {
      outline: 'none',
    },
  },
  buy: {
    '&:focus': {
      outline: 'none',
    },
  },
}));
const Product = ({ product }) => {
  const [productData, setProductData] = useState(null);

  const [selectedSize, setSelectedSize] = useState(0);
  const { state, dispatch } = useContext(AppContext);
  const { loading } = state;
  const classes = useStyles();
  const handleSizeChange = (sizeIndex) => {
    setSelectedSize(sizeIndex);
  };
  const handleAddToCart = () => {
    dispatch({
      type: ADD_TO_CART,
      payload: {
        name: productData.product,
        size: productData.sizes[selectedSize],
        sizeIndex: selectedSize,
        price: productData.prices[selectedSize],
        image: productData.image,
        quantity: 1,
        id: uuid(),
      },
    });
  };
  useEffect(() => {
    axios
      .get(process.env.REACT_APP_PRODUCT_DB + 'get_product', {
        params: { product: product },
      })
      .then((res) => {
        setProductData(res.data);
      })
      .catch((err) => dispatch({ type: ADD_ALERT, payload: err }));
  }, [product, dispatch]);
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
            productData.sizes.map((size, index) => (
              <Button
                variant='text'
                size='small'
                name={index}
                key={size}
                onClick={() => handleSizeChange(index)}
                className={`${index === selectedSize && classes.selectedSize}`}>
                {size}
              </Button>
            ))
          )}
        </div>
        <div>
          {loading ? (
            <Skeleton />
          ) : (
            productData && (
              <p className='p-4 text-2xl text-gray-800'>
                ${productData.prices[selectedSize]}
              </p>
            )
          )}
        </div>
        <div>
          {loading ? (
            <Skeleton count={4} />
          ) : (
            <p className='p-3'>{productData && productData.description}</p>
          )}
        </div>
        <div className='p-4'>
          <AddToCartButton onClick={handleAddToCart} />
        </div>
      </div>
    </div>
  );
};

export default Product;
