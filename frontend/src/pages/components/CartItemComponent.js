import { ListGroup, Image, Row, Col, Button, Form } from "react-bootstrap";

export const CartItemComponent = () => {
  return (
    <>
      <ListGroup.Item>
        <Row>
          <Col md={2}>
            <Image crossOrigin="anonymous"src="/images/games-category.png" fluid />
          </Col>
          <Col md={2}>
            Logitech series <br />
            Gaming Mouse
          </Col>
          <Col md={2}>
            <b>$89</b>
          </Col>
          <Col md={3}>
            <Form.Select>
              <option></option>
              <option></option>
              <option></option>
            </Form.Select>
          </Col>
          <Col md={3}>
            <Button
              type="button"
              variant="secondary"
              onClick={() => window.confirm("are you sure")}
            >
              <i className="bi bi-trash"></i>
            </Button>
          </Col>
        </Row>
      </ListGroup.Item>
      <br/>
    </>
  );
};
