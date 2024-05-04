import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import PropTypes from 'prop-types';
import Aos from 'aos';
import 'aos/dist/aos.css';


const responsive = {
    200: { items: 1 },
    300: { items: 2 },
    400: { items: 3 },
    500: { items: 4 },
    600: { items: 5 },
    
};


const Carousel = ({items}) => (
    <AliceCarousel
        mouseTracking = {true}
        items={items}
        responsive={responsive}
        controlsStrategy="alternate"
        disableDotsControls='true'
        disableButtonsControls='true'
        animationType='slide'
        autoPlayDirection='rtl'
        autoPlay='true'
        autoPlayInterval="1500"
        autoPlayStrategy ='default'
        infinite='true'
    />
);

Carousel.propTypes = {
    items: PropTypes.array.isRequired,
}

export default Carousel;