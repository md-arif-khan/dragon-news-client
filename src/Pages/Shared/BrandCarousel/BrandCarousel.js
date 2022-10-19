import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import brand2 from '../../../assets/brands/brand2.webp'
import brand3 from '../../../assets/brands/brand3.webp'
const BrandCarousel = () => {
    return (
        <div>
            <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={brand2}
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={brand3}
          alt="Second slide"
        />

        
      </Carousel.Item>
    </Carousel>
        </div>
    );
};

export default BrandCarousel;