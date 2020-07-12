import React from 'react';

// import { makeStyles } from '@material-ui/core/styles';
import LandingSlider from '../components/LandingSlider';
import BestSellers from '../components/BestSellers';

// const useStyles = makeStyles((theme) => ({
//   landing: {
//     width: '95vw',
//     height: '88vh',
//     backgroundImage: 'url(analyze.svg)',
//     backgroundRepeat: 'no-repeat',
//   },
//   best: {
//     paddingBottom: 50,
//     fontFamily: 'Poppins',
//     fontSize: '2rem',
//     letterSpacing: '5px',
//     color: theme.palette.secondary.dark,
//   },
//   [theme.breakpoints.up('xs')]: {
//     landing: {
//       backgroundSize: 'fit',
//     },
//     best: {
//       display: 'none',
//     },
//   },

//   [theme.breakpoints.up('md')]: {
//     landing: {
//       backgroundSize: '80%',
//     },
//     best: {
//       display: 'block',
//     },
//   },
//   [theme.breakpoints.up('lg')]: {
//     landing: {
//       backgroundSize: '65%',
//     },
//   },
//   [theme.breakpoints.up('xl')]: {},
// }));
const Landing = () => {
  return (
    <div className='flex flex-col p-4 items-center justify-center'>
      <LandingSlider />
      <BestSellers />
    </div>
  );
};

export default Landing;
