import { Col, Row, Container } from "react-bootstrap";

export const FooterComponent = () => {
  return (
    <footer>
      <Container fluid>
        <Row className="mt-5">
          <Col className="bg-dark text-white text-center py-5">
            Copyright & copy; E-Shop
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
