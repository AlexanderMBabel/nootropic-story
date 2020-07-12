import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { FaShoppingCart, FaCartPlus, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { grey } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  '@global': {},
  '@keyframes spinGrowCart': {
    from: {
      transform: 'rotate(0deg) scale(1)',
      opacity: 1,
    },
    to: {
      transform: 'scale(1.7)',
      opacity: '0.6',
    },
  },
  '@keyframes checkoutIn': {
    '0%': {
      opacity: 0,
      left: '-200px',
      background: `linear-gradient(120deg, ${theme.palette.secondary.light}, ${theme.palette.secondary.main})`,
    },
    '50%': {
      opacity: 0,
      left: '-200px',
      background: `linear-gradient(120deg, ${theme.palette.secondary.light}, ${theme.palette.secondary.main})`,
    },
    to: {
      background: theme.palette.secondary.light,
      opacity: 1,
      left: '0px',
      color: grey[800],
    },
  },
  '@keyframes continueIn': {
    from: {
      opacity: 0,
      left: '200px',
      background: theme.palette.secondary.light,
    },
    '50%': {
      opacity: 0,
      left: '200px',
      background: theme.palette.secondary.light,
    },
    to: {
      opacity: 1,
      left: '0px',
      background: theme.palette.secondary.dark,
    },
  },
  '@keyframes addedOut': {
    '0%': {
      opacity: 1,
    },
    '70%': {
      opactiy: 0,
    },

    to: {
      opacity: 0,
    },
  },
  '@keyframes checked': {
    from: {
      opacity: 0,
    },
    '80%': {
      opacity: 1,
      width: '150px',
    },
    '100%': {
      opacity: 1,
    },
  },
  '@keyframes added': {
    '1%': {
      opacity: 0,
    },
    to: {
      opacity: 0,
    },
  },
  button: {
    padding: '2rem',
    borderRadius: '10px',
    background: `linear-gradient(120deg, ${theme.palette.secondary.light}, ${theme.palette.secondary.main})`,
    letterSpacing: '1px',
    outline: 'none',
    border: 'none',
    transition: 'all 0.5s ease',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    color: 'white',
    '&:hover': {
      letterSpacing: '4px',
      boxShadow: `0 0 0 0 ${theme.palette.secondary.light}, inset 0 4rem 5rem 0 ${theme.palette.secondary.main}`,
      '& span': {
        animation: '$spinGrowCart 1000ms ',
        animationDirection: 'alternate',
        animationIterationCount: '2',
      },
    },
    '&:active': {
      border: 'none',
    },
    '&:focus': {
      border: 'none',
      outline: 'none',
    },
  },
  activeButton: {
    borderRadius: '10px',
    background: `linear-gradient(120deg, ${theme.palette.secondary.light}, ${theme.palette.secondary.main})`,
    position: 'relative',
    overflow: 'hidden',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'all 0.5s ease-out',
    '& #added': {
      animation: '$addedOut 1500ms',
      animationFillMode: 'forwards',
      alignSelf: 'center',
      textAlign: 'center',
      color: grey[800],
      zIndex: 100,

      justifySelf: 'center',
      position: 'relative',
      // left: '-40px',
      fontSize: '3rem',
      padding: '0px',
      width: '0px',
      '& svg': {
        width: '70px',
        height: '70px',
        '& .check-1': {
          animation: '$checked 750ms forwards',
        },
        '& .cart-plus-1': {
          animation: '$added 750ms forwards',
        },
      },
    },

    '& #check-out': {
      padding: '2rem',
      position: 'relative',
      animation: '$checkoutIn 1500ms',
      animationFillMode: 'forwards',
      display: 'flex',
      alignItems: 'center',

      '&:hover': {
        filter: 'brightness(110%)',
      },
    },
    '& #continue': {
      padding: '2rem',
      position: 'relative',
      animation: '$continueIn 1500ms',
      animationFillMode: 'forwards',
      display: 'flex',
      alignItems: 'center',
      '&:hover': {
        filter: 'brightness(110%)',
        '& #arrow': {
          transform: 'scale(1.4)',
        },
      },
    },
  },
  cartPlus: {
    marginRight: '1rem',
  },
}));

const AddToCartButton = ({ onClick }) => {
  const [active, setActive] = useState(false);
  const classes = useStyles();
  const handleClick = () => {
    onClick();
    setActive(true);
  };
  const handleContinue = () => {
    setActive(false);
  };
  // const handleCheckOut = () => {
  //   return (<Link to='/check'></Link>)
  // };
  return (
    <div>
      {active ? (
        <div className={classes.activeButton}>
          <Link to='/Cart'>
            <div id='check-out'>
              <FaShoppingCart className='mr-2' />
              <span>Check Out</span>
            </div>
          </Link>
          <div id='added'>
            <svg
              className='cart-icon-1'
              version='1.1'
              width='150px'
              height='150px'
              viewBox='0 0 90.156 89.89'>
              <path
                className='main-path'
                fill='none'
                stroke='#FFFFFF'
                strokeWidth='3'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeMiterlimit='10'
                d='
          M14.973,26.021V15.296c0-1.109-0.865-2.292-1.922-2.628L1.49,8.99 M62.354,55.639c0,1.109-0.101,2.236-0.224,2.504
          c-0.123,0.268-1.684,0.487-2.793,0.487H17.989c-1.109,0-2.242-0.098-2.517-0.218c-0.275-0.12-0.5-1.664-0.5-2.773V23.273
          c0-1.109,0.101-2.236,0.224-2.504c0.123-0.268,1.684-0.487,2.793-0.487h41.348c1.109,0,2.242,0.098,2.517,0.218  c0.275,0.12,0.5,1.664,0.5,2.773V55.639z'
              />
              <line
                fill='none'
                stroke='#FFFFFF'
                strokeWidth='3'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeMiterlimit='10'
                x1='30.863'
                y1='20.74'
                x2='30.863'
                y2='58.63'
              />
              <line
                fill='none'
                stroke='#FFFFFF'
                strokeWidth='3'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeMiterlimit='10'
                x1='46.837'
                y1='20.74'
                x2='46.837'
                y2='58.63'
              />
              <line
                fill='none'
                stroke='#FFFFFF'
                strokeWidth='3'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeMiterlimit='10'
                x1='15.973'
                y1='33.308'
                x2='61.24'
                y2='33.308'
              />
              <line
                fill='none'
                stroke='#FFFFFF'
                strokeWidth='3'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeMiterlimit='10'
                x1='15.973'
                y1='46.285'
                x2='61.125'
                y2='46.285'
              />
              <circle
                className='wheel'
                fill='none'
                stroke='#FFFFFF'
                strokeWidth='3'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeMiterlimit='10'
                cx='23.442'
                cy='64.554'
                r='5.924'
              />
              <circle
                className='wheel'
                fill='none'
                stroke='#FFFFFF'
                strokeWidth='3'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeMiterlimit='10'
                cx='53.314'
                cy='64.554'
                r='5.924'
              />
              <path
                className='outer-plus-1'
                fill='none'
                stroke='#FFFFFF'
                strokeWidth='3'
                strokeLinecap='round'
                strokeMiterlimit='10'
                d='M67.378,52.665
          c1.29-0.143,2.615-0.147,3.959,0.001c9.837,1.087,16.93,9.943,15.843,19.78s-9.943,16.93-19.78,15.843
          c-7.378-0.815-13.212-6.001-15.21-12.692'
              />
              <path
                className='cart-plus-1'
                fill='none'
                stroke='#FFFFFF'
                strokeWidth='3'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeMiterlimit='10'
                d='
          M61.516,70.556h17.695 M70.364,61.708v17.695'
              />
              <path
                className='check-1'
                fill='none'
                stroke='#7aa23f'
                strokeWidth='4'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeMiterlimit='10'
                d='
          M60.207,73.377l6.817,6.817 M81.273,64.554l-14.249,15.64'
              />
            </svg>
          </div>
          <div id='continue' onClick={handleContinue}>
            <span>Continue Shopping</span>
            <FaArrowRight className='ml-2' id='arrow' />
          </div>
        </div>
      ) : (
        <button className={classes.button} onClick={handleClick}>
          <span>
            <FaCartPlus className={classes.cartPlus} />
          </span>
          <p className='ml-2'>Add To Cart</p>
        </button>
      )}
    </div>
  );
};

export default AddToCartButton;
