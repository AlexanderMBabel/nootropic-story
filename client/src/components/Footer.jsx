import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.info.main,
    display: 'flex',
    justifyContent: 'space-around',
    fontSize: '1rem',
    justifySelf: 'flex-end',

    fontWeight: 200,
    '& div': {
      padding: 10,
      '& p ': {
        padding: 5,
      },
    },
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
  },
  linkItem: {
    padding: 5,
    '&:hover': {
      letterSpacing: 3,
    },
  },
}));
const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <div className={classes.column}>
        <Link className={classes.linkItem} to='/Shop'>
          Shop All
        </Link>
        <Link className={classes.linkItem} to='/Shop/top'>
          Top Sellers
        </Link>
        <Link className={classes.linkItem} to='/Shop/sale'>
          Sale Items
        </Link>
        <Link className={classes.linkItem} to='/Shop/new'>
          New Products
        </Link>
      </div>
      <div className={classes.column}>
        <Link className={classes.linkItem} to='/Guides'>
          Guide
        </Link>
        <Link className={classes.linkItem} to='/Stack'>
          Create a stack
        </Link>
      </div>
      <div className={classes.column}>
        <Link className={classes.linkItem} to='/info/term'>
          Terms and Conditions
        </Link>
        <Link className={classes.linkItem} to='/info/privacy'>
          Privacy Policy
        </Link>
        <Link className={classes.linkItem} to='/info/shipping'>
          Shipping Policy
        </Link>
        <Link className={classes.linkItem} to='/info/faq'>
          FAQS
        </Link>
        <Link className={classes.linkItem} to='/info/payments'>
          Payments
        </Link>
        <Link className={classes.linkItem} to='/info/lab'>
          Lab Testing Results
        </Link>
      </div>
      <div className={classes.column}>
        <Link className={classes.linkItem} to='/contact'>
          Contact
        </Link>
        <Link className={classes.linkItem} to='/news'>
          Newsletter
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
