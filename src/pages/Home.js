import React from 'react';
import { Carousel, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// Import local images from the assets folder
import carousel1 from '../assets/carousel1.jpg';
import carousel2 from '../assets/carousel2.jpg';
import carousel3 from '../assets/carousel3.jpg';

const Home = () => {
  return (
    <Carousel fade interval={3500} controls={false} indicators={true}>
      {/* Slide 1 */}
      <Carousel.Item style={{ height: '80vh' }}>
        <img
          className="d-block w-100 h-100"
          src={carousel1}
          alt="Premium Mods"
          style={{ objectFit: 'cover', filter: 'brightness(50%)' }}
        />
        <Carousel.Caption className="mb-5">
          <h1 className="display-3 fw-bold">Premium Vaping Experience</h1>
          <p className="lead">Discover high-performance mods and accessories.</p>
          <Button as={Link} to="/shop" variant="warning" size="lg" className="mt-3">
            Shop Our Collection
          </Button>
        </Carousel.Caption>
      </Carousel.Item>

      {/* Slide 2 */}
      <Carousel.Item style={{ height: '80vh' }}>
        <img
          className="d-block w-100 h-100"
          src={carousel2}
          alt="E-Liquids"
          style={{ objectFit: 'cover', filter: 'brightness(50%)' }}
        />
        <Carousel.Caption className="mb-5">
          <h1 className="display-3 fw-bold">Bold New Flavors</h1>
          <p className="lead">Explore our curated selection of premium salts and juices.</p>
          <Button as={Link} to="/contact" variant="light" size="lg" className="mt-3">
            Keep In Touch
          </Button>
        </Carousel.Caption>
      </Carousel.Item>

      {/* Slide 3 */}
      <Carousel.Item style={{ height: '80vh' }}>
        <img
          className="d-block w-100 h-100"
          src={carousel3}
          alt="Vape Accessories"
          style={{ objectFit: 'cover', filter: 'brightness(50%)' }}
        />
        <Carousel.Caption className="mb-5">
          <h1 className="display-3 fw-bold">Essential Gear</h1>
          <p className="lead">Everything you need to maintain your perfect cloud.</p>
          <Button as={Link} to="/about" variant="outline-light" size="lg" className="mt-3">
            About Our Quality
          </Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Home;