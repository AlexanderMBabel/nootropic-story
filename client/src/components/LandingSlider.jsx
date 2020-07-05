import React, { useState } from 'react';
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import SlideOne from './SlideOne';
import SlideTwo from './SlideTwo';
import SlideThree from './SlideThree';

const LandingCarousel = () => {
  const [slides, setSlides] = useState([<SlideOne />, <SlideTwo />]);
  const [value, setValue] = useState(0);
  const handleChange = (value) => {
    setValue(value);
  };
  return (
    <CarouselProvider
      naturalSlideWidth={100}
      naturalSlideHeight={125}
      totalSlides={3}>
      <Slider>
        <SlideOne />
        <SlideThree />
      </Slider>
    </CarouselProvider>
  );
};

export default LandingCarousel;
