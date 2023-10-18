import { Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export const OperatorLinksComponent = () => {
  return (
    <Navbar bg="light" variant="light">
      <Nav className="flex-column">
        <LinkContainer to="/operator/orders">
          <Nav.Link>Orders</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/operator/product-list">
          <Nav.Link>Products</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/operator/users-list">
          <Nav.Link>Users List</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/operator/chats">
          <Nav.Link>Chats</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/operator/analytics">
          <Nav.Link>Analytics</Nav.Link>
        </LinkContainer>
        <Nav.Link>Logout</Nav.Link>
      </Nav>
    </Navbar>
  );
};
