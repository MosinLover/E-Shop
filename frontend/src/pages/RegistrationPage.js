import {
  Col,
  Container,
  Row,
  Form,
  Button,
  InputGroup,
  Spinner,
  Alert,
} from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";

export const RegistrationPage = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  const onChange = () => {
    const password = document.querySelector("input[name=password]");
    const confirm = document.querySelector("input[name=confirmPassword]");
    if(confirm.value === password.value) {
        confirm.setCustomValidity("");
    } else {
        confirm.setCustomValidity("Passwords do not match!")
    }
  }

  return (
    <Container>
      <Row className="mt-5 justify-content-md-center">
        <Col md={6}>
          <h1>Register</h1>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="validationCustom01">
              <Form.Label>Your Name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Enter your name"
                name="name"
              />
              <Form.Control.Feedback type="invalid">
                Please enter a name
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicLastName">
              <Form.Label>Your last name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Enter your last name"
                name="lastName"
              />
              <Form.Control.Feedback type="invalid">
                Please enter your last name
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="FormBasicEmail">
              <Form.Label>Email adress</Form.Label>
              <Form.Control
                required
                type="email"
                placeholder="Enter Email adress"
                name="email"
              />
              <Form.Control.Feedback type="invalid">
                Please enter a valid email address
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Your password</Form.Label>
              <Form.Control
                required
                type="password"
                placeholder="password"
                name="password"
                minLength={6}
                onChange={onChange}
              />
              <Form.Control.Feedback type="invalid">
                Please enter a valid password
              </Form.Control.Feedback>
              <Form.Text>Password should have at least 6 characters</Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPasswordRepeat">
              <Form.Label>Repeat password</Form.Label>
              <Form.Control
                required
                name="confirmPassword"
                type="password"
                placeholder="Repeat Password"
                onChange={onChange}
              />
              <Form.Control.Feedback type="invalid">
                Both passwords should match
              </Form.Control.Feedback>
            </Form.Group>
            <Row>
              <Col>
                Do you have an account already?
                <Link to={"/login"}> Login </Link>
              </Col>
            </Row>
            <Button type="submit">
              <Spinner
                as="spin"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
              />
              Submit
            </Button>
            <Alert variant="danger">User with that email already exists!</Alert>
            <Alert variant="info">User created</Alert>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
