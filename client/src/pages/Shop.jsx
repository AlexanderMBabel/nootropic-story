import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import ShowProduct from '../components/ShowProduct';
const useStyles = makeStyles((theme) => ({
  container: {
    width: '100%',
    height: '40vh',
    backgroundColor: '#cc5656',
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 1000'%3E%3Cg %3E%3Ccircle fill='%23cc5656' cx='50' cy='0' r='50'/%3E%3Cg fill='%23d05660' %3E%3Ccircle cx='0' cy='50' r='50'/%3E%3Ccircle cx='100' cy='50' r='50'/%3E%3C/g%3E%3Ccircle fill='%23d25669' cx='50' cy='100' r='50'/%3E%3Cg fill='%23d45774' %3E%3Ccircle cx='0' cy='150' r='50'/%3E%3Ccircle cx='100' cy='150' r='50'/%3E%3C/g%3E%3Ccircle fill='%23d5587e' cx='50' cy='200' r='50'/%3E%3Cg fill='%23d55a88' %3E%3Ccircle cx='0' cy='250' r='50'/%3E%3Ccircle cx='100' cy='250' r='50'/%3E%3C/g%3E%3Ccircle fill='%23d55d93' cx='50' cy='300' r='50'/%3E%3Cg fill='%23d3619d' %3E%3Ccircle cx='0' cy='350' r='50'/%3E%3Ccircle cx='100' cy='350' r='50'/%3E%3C/g%3E%3Ccircle fill='%23d064a7' cx='50' cy='400' r='50'/%3E%3Cg fill='%23cc69b2' %3E%3Ccircle cx='0' cy='450' r='50'/%3E%3Ccircle cx='100' cy='450' r='50'/%3E%3C/g%3E%3Ccircle fill='%23c86ebb' cx='50' cy='500' r='50'/%3E%3Cg fill='%23c273c5' %3E%3Ccircle cx='0' cy='550' r='50'/%3E%3Ccircle cx='100' cy='550' r='50'/%3E%3C/g%3E%3Ccircle fill='%23bb78ce' cx='50' cy='600' r='50'/%3E%3Cg fill='%23b37dd7' %3E%3Ccircle cx='0' cy='650' r='50'/%3E%3Ccircle cx='100' cy='650' r='50'/%3E%3C/g%3E%3Ccircle fill='%23aa83df' cx='50' cy='700' r='50'/%3E%3Cg fill='%239f88e6' %3E%3Ccircle cx='0' cy='750' r='50'/%3E%3Ccircle cx='100' cy='750' r='50'/%3E%3C/g%3E%3Ccircle fill='%23948ded' cx='50' cy='800' r='50'/%3E%3Cg fill='%238793f2' %3E%3Ccircle cx='0' cy='850' r='50'/%3E%3Ccircle cx='100' cy='850' r='50'/%3E%3C/g%3E%3Ccircle fill='%237898f7' cx='50' cy='900' r='50'/%3E%3Cg fill='%23689dfc' %3E%3Ccircle cx='0' cy='950' r='50'/%3E%3Ccircle cx='100' cy='950' r='50'/%3E%3C/g%3E%3Ccircle fill='%2354a2ff' cx='50' cy='1000' r='50'/%3E%3C/g%3E%3C/svg%3E")`,
    backgroundAttachment: 'fixed',
    backgroundSize: 'contain',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#2d3748',
    '& h1': {
      fontSize: '2rem',
    },
    '& p': {
      padding: '10px 20px',
    },
  },
}));

const categoryBlurbs = {
  essential: {
    title: 'Essential Supplements',
    description: 'Supplements designed to boost or replace natural processes',
  },
  longevity: {
    title: 'Life Extension',
    description:
      'A collection of supplements clinically proven to slow down the aging process',
  },
  mood: {
    title: 'Mood Enhancement',
    description:
      'These supplements are clinically developed to gently improve and stabilize your mood.  ',
  },
  cognitive: {
    title: 'Cognitive Boost',
    description: (
      <div>
        <h4 className='text-center text-xl text-gray-700'>
          Boost cognitive function
        </h4>
        <p className='text-center text-sm text-gray-800'>
          One of the main reasons people take natural nootropics is so they can
          think more clearly. This can include generating ideas or performing
          more efficiently on challenging mental tasks. Experts call this group
          of characteristics cognitive function.
        </p>
      </div>
    ),
    // '  Improvements in working memory, the ability to grasp new concepts, and information processing boosts are common',
  },
};

const Shop = ({ category }) => {
  const [products, setProducts] = useState([]);
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    const uri = category
      ? process.env.REACT_APP_PRODUCT_DB + `category/?category=${category}`
      : process.env.REACT_APP_PRODUCT_DB;
    axios
      .get(uri)
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => setErrors([...errors, err.errors]));
  }, [category, errors]);
  const classes = useStyles();
  return (
    <div className='w-full'>
      <div className={classes.container}>
        <h1>{categoryBlurbs[category].title}</h1>
        <div>{categoryBlurbs[category].description}</div>
      </div>
      <div
        className='flex w-full flex-wrap justify-center'
        style={{ marginTop: -100 }}>
        {products.map((product) => (
          <ShowProduct productData={product} key={product.product} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
