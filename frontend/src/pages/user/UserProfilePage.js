import {
    Col,
    Container,
    Row,
    Form,
    Button,
    Alert,
  } from "react-bootstrap";
  import { useState } from "react";
  
  export const UserProfilePage = () => {
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
            <h1>User Profile</h1>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="validationCustom01">
                <Form.Label>Your Name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  defaultValue="Enter your name"
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
                  defaultValue="Doe"
                  name="lastName"
                />
                <Form.Control.Feedback type="invalid">
                  Please enter your last name
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3" controlId="FormBasicPhone">
                <Form.Label>Phone number</Form.Label>
                <Form.Control
                type="text"
                  placeholder="enter your phone number"
                  defaultValue=""
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="FormBasicAddress">
                <Form.Label>Address</Form.Label>
                <Form.Control
                type="text"
                  placeholder="enter your address"
                  defaultValue=""
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="FormBasicCity">
                <Form.Label>City</Form.Label>
                <Form.Control
                type="text"
                  placeholder="enter your city"
                  defaultValue=""
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="FormBasicState">
                <Form.Label>State</Form.Label>
                <Form.Control
                type="text"
                  placeholder="enter you state"
                  defaultValue=""
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="FormBasicCountry">
                <Form.Label>Country</Form.Label>
                <Form.Control
                type="text"
                  placeholder="enter your country"
                  defaultValue=""
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="FormBasicZipcode">
                <Form.Label>Zip code</Form.Label>
                <Form.Control
                type="text"
                  placeholder="enter your zip code"
                  defaultValue=""
                />
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
              <Button variant="primary" type="submit">
                Update
              </Button>
              <Alert variant="danger">User with that email already exists!</Alert>
              <Alert variant="info">User Updated</Alert>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  };
  