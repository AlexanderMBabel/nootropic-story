import React from 'react';
import Carousel from 'react-material-ui-carousel';

import SlideThree from './SlideThree';
import SlideOneRe from './SlideOneRe';
import SlideTwoRe from './SlideTwoRe';

const LandingCarousel = () => {
  return (
    <Carousel autoPlay animation='slide' interval={5000}>
      <SlideOneRe />
      <SlideTwoRe />
      <SlideThree />
    </Carousel>
  );
};

export default LandingCarousel;
