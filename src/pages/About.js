import { Container, Row, Col } from 'react-bootstrap';

const About = () => (
  <Container className="my-5 py-5">
    <Row className="align-items-center">
      <Col md={6}>
        <h2 className="fw-bold">Our Story</h2>
        <p className="text-muted mt-3">
          Founded in 2020, Vape Cloud was built on the principle of providing high-quality 
          alternatives to traditional smoking. We specialize in curated mods and premium juices.
        </p>
      </Col>
      <Col md={6} className="text-center">
        <div className="p-5 bg-dark text-white rounded">Est. 2020</div>
      </Col>
    </Row>
  </Container>
);

export default About;