import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Navbar, Nav, Container, Badge } from 'react-bootstrap';
import Home from './pages/Home';
import Shop from './pages/Shop';
import About from './pages/About';
import Contact from './pages/Contact';
import Cart from './pages/Cart';

function App() {
  const [cart, setCart] = useState([]);

  // Adds a product to the array
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  // Removes a specific item by its index in the array
  const removeFromCart = (index) => {
    const newCart = cart.filter((_, i) => i !== index);
    setCart(newCart);
  };

  // Resets the cart to an empty array
  const clearCart = () => {
    setCart([]);
  };

  return (
    <Router>
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top" className="shadow-sm">
        <Container>
          <Navbar.Brand as={Link} to="/" className="fw-bold">VAPE CLOUD</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto align-items-center">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/shop">Shop</Nav.Link>
              <Nav.Link as={Link} to="/about">About</Nav.Link>
              <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
              <Nav.Link as={Link} to="/cart" className="ms-lg-3">
                <Badge bg="warning" text="dark" className="p-2">
                  🛒 Cart: {cart.length}
                </Badge>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop addToCart={addToCart} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/* CRITICAL: Passing all 3 props to the Cart component */}
        <Route 
          path="/cart" 
          element={
            <Cart 
              cartItems={cart} 
              removeFromCart={removeFromCart} 
              clearCart={clearCart} 
            />
          } 
        />
      </Routes>

      <footer className="bg-dark text-white text-center py-4 mt-auto">
        <Container>
          <p className="mb-0">&copy; 2026 Vape Cloud Co. | SDLC Project Phase 2</p>
        </Container>
      </footer>
    </Router>
  );
}

export default App;