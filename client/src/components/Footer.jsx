import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

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
}));
const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <div>
        <p>Shop All</p>
        <p>Shop By Use</p>
        <p>Shop By Type</p>
        <p>Top Sellers</p>
        <p>Sale Items</p>
        <p>New Items</p>
      </div>
      <div>
        <p>Guide</p>
        <p>Ask an expert</p>
        <p>Create a stack</p>
      </div>
      <div>
        <p>Terms and Conditions</p>
        <p>Privacy Policy</p>
        <p>Shipping Policy</p>
        <p>Faqs</p>
        <p>Payments</p>
        <p>Lab Testing Results</p>
      </div>
      <div>
        <p>Contact Us</p>
        <p>Newsletter</p>
      </div>
    </footer>
  );
};

export default Footer;
