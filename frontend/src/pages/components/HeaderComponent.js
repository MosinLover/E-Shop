import {
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Badge,
  Form,
  Dropdown,
  DropdownButton,
  Button,
  InputGroup,
} from "react-bootstrap";

import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";

export const HeaderComponent = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <LinkContainer to="/home">
          <Navbar.Brand href="/home">E-SHOP</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <InputGroup>
              <DropdownButton id="dropdown-basic-button" title="All">
                <Dropdown.Item>Electronics</Dropdown.Item>
                <Dropdown.Item>Book</Dropdown.Item>
                <Dropdown.Item>Cars</Dropdown.Item>
              </DropdownButton>
              <Form.Control type="text" placeholder="Normal text" />
              <Button variant="warning">
                <i className="bi bi-search"></i>
              </Button>
            </InputGroup>
          </Nav>
          <Nav>
            <LinkContainer to="/operator">
              <Nav.Link>Admin</Nav.Link>
            </LinkContainer>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <Nav.Link href="#cart">
              <Badge bg="danger">2</Badge>
              Cart
            </Nav.Link>
            <NavDropdown title="John Doe" id="collapsible-nav-dropdown">
              <NavDropdown.Item
                eventKey="/user/orders"
                as={Link}
                to="/user/orders"
              >
                Orders
              </NavDropdown.Item>
              <NavDropdown.Item
                eventKey="/user/profile"
                as={Link}
                to="/user/profile"
              >
                Profile
              </NavDropdown.Item>
              <NavDropdown.Item>Log Out</NavDropdown.Item>
            </NavDropdown>
            <LinkContainer to="/login">
              <Nav.Link>Login</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/register">
              <Nav.Link>Register</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/cart">
              <Nav.Link>
                <i className="bi bi-cart3"></i>
                <span className="ms-1">Cart</span>
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
