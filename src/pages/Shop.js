import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

// Import local product images from the assets folder
import Flavor1 from '../assets/Cherry.png';
import Flavor2 from '../assets/Ice.jpg';
import Flavor3 from '../assets/Strawberry.png';
import Flavor4 from '../assets/Watermelon.jpg';

const products = [
  { id: 1, name: "Vapor X-Pro Mod", price: 59.99, img: Flavor1 },
  { id: 2, name: "Neon Salt E-Liquid", price: 19.99, img: Flavor2 },
  { id: 3, name: "Replacement Coils", price: 14.99, img: Flavor3 },
  { id: 4, name: "Pod System 2.0", price: 29.99, img: Flavor4 },
];

const Shop = ({ addToCart }) => (
  <Container className="my-5">
    <h2 className="fw-bold mb-4">Shop All Products</h2>
    <Row>
      {products.map(p => (
        <Col key={p.id} sm={6} lg={3} className="mb-4">
          <Card className="h-100 shadow-sm border-0">
            {/* Renders the imported local image asset */}
            <Card.Img variant="top" src={p.img} style={{ height: '200px', objectFit: 'cover' }} />
            <Card.Body className="text-center">
              <Card.Title className="h5">{p.name}</Card.Title>
              <Card.Text className="text-primary fw-bold h4">${p.price}</Card.Text>
              <Button variant="dark" className="w-100 mt-2" onClick={() => addToCart(p)}>Add to Cart</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
);

export default Shop;