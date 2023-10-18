import {
    Container,
    Row,
    Col,
    Form,
    Alert,
    ListGroup,
    Button,
  } from "react-bootstrap";
  import { CartItemComponent } from "../components/CartItemComponent";
  
  export const UserCartDetailsPage = () => {
    return (
      <Container fluid>
        <Row className="mt-4">
          <h1>Cart Details</h1>
          <Col md={8}>
            <br />
            <Row>
              <Col md={6}>
                <h2>Shipping</h2>
                <b>Name</b>: John Doe <br />
                <b>Address</b>: xxx avenue <br />
                <b>Phone</b>: 11111111 <br />
              </Col>
              <Col md={6}>
                <h2>Payment method</h2>
                <Form.Select >
                  <option value="pp">PayPal</option>
                  <option value="cod">
                    Cash On Delivery (delivery may be delayed)
                  </option>
                </Form.Select>
              </Col>
              <Row>
                <Col>
                  <Alert className="mt-3" variant="success">
                    Not delivered
                  </Alert>
                </Col>
                <Col>
                  <Alert className="mt-3" variant="success">
                    Not paid yet
                  </Alert>
                </Col>
              </Row>
            </Row>
            <br />
            <h2>Order Items</h2>
            <ListGroup variant="flush">
              {Array.from({ length: 3 }).map((item, index) => (
                <CartItemComponent key={index} />
              ))}
            </ListGroup>
          </Col>
          <Col md={4}>
            <ListGroup>
              <ListGroup.Item>
                <h3>Order summary</h3>
              </ListGroup.Item>
              <ListGroup.Item>
                Items price (after tax): <span className="fw-bold">$892</span>
              </ListGroup.Item>
              <ListGroup.Item>
                Shipping: <span className="fw-bold">included</span>
              </ListGroup.Item>
              <ListGroup.Item>
                Tax: <span className="fw-bold">included</span>
              </ListGroup.Item>
              <ListGroup.Item>
                Total price: <span className="fw-bold">$903</span>
              </ListGroup.Item>
              <ListGroup.Item>
                <div className="d-grid gap-2">
                  <Button size="lg" variant="danger" type="button">
                    Pay for the order
                  </Button>
                </div>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    );
  };
  