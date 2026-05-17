import React from 'react';
import { Container, ListGroup, Card, Button, Stack, Row, Col } from 'react-bootstrap';

// Make sure these parameters in the { } match the ones passed in App.js exactly
const Cart = ({ cartItems, removeFromCart, clearCart }) => {
  
  // Calculate total price
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <Container className="my-5" style={{ minHeight: '70vh' }}>
      <Row className="justify-content-center">
        <Col md={8}>
          <Stack direction="horizontal" className="justify-content-between mb-4">
            <h2 className="fw-bold">Shopping Cart</h2>
            {cartItems.length > 0 && (
              <Button variant="outline-danger" size="sm" onClick={clearCart}>
                Clear All Items
              </Button>
            )}
          </Stack>

          {cartItems.length === 0 ? (
            <Card className="text-center p-5 border-0 bg-light shadow-sm">
              <Card.Body>
                <h4 className="text-muted">Your cart is currently empty</h4>
                <Button variant="dark" href="/shop" className="mt-3">Go to Shop</Button>
              </Card.Body>
            </Card>
          ) : (
            <Card className="shadow-sm border-0">
              <ListGroup variant="flush">
                {cartItems.map((item, index) => (
                  <ListGroup.Item key={index} className="d-flex justify-content-between align-items-center py-3">
                    <div>
                      <h6 className="mb-0 fw-bold">{item.name}</h6>
                      <small className="text-success fw-bold">${item.price.toFixed(2)}</small>
                    </div>
                    <Button 
                      variant="link" 
                      className="text-danger p-0" 
                      onClick={() => removeFromCart(index)}
                    >
                      Remove
                    </Button>
                  </ListGroup.Item>
                ))}

                <ListGroup.Item className="bg-light py-4">
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="h5 mb-0">Total to Pay:</span>
                    <span className="h3 mb-0 text-dark fw-bold">${total.toFixed(2)}</span>
                  </div>
                </ListGroup.Item>
              </ListGroup>
              <Card.Footer className="bg-white p-3 border-0">
                <Button variant="success" size="lg" className="w-100 fw-bold">
                  Proceed to Checkout
                </Button>
              </Card.Footer>
            </Card>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Cart;