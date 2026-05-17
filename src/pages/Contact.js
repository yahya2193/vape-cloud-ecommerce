import { Container, Form, Button, Row, Col } from 'react-bootstrap';

const Contact = () => (
  <Container className="my-5 shadow-sm p-4 rounded bg-white" style={{ maxWidth: '600px' }}>
    <h2 className="text-center mb-4">Get In Touch</h2>
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Full Name</Form.Label>
        <Form.Control type="text" placeholder="John Doe" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Email Address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" rows={4} placeholder="How can we help you?" />
      </Form.Group>
      <Button variant="dark" type="submit" className="w-100">Send Message</Button>
    </Form>
  </Container>
);

export default Contact;