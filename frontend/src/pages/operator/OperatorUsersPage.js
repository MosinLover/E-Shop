import { Row, Col, Table, Button } from "react-bootstrap";
import { OperatorLinksComponent } from "../components/operatorComponent/OperatorLinksComponent";
import { LinkContainer } from "react-router-bootstrap";

export const OperatorUsersPage = () => {
  const deleteHandler = () => {
    if(window.confirm("Are you sure?"))alert("User deleted");
  }
  return (
    <Row className="m-5">
      <Col md={2}>
        <OperatorLinksComponent />
      </Col>
      <Col md={10}>
        <h1>Users list</h1>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Is Admin</th>
              <th>Edit/Delete</th>
            </tr>
          </thead>
          <tbody>
            {["bi bi-check-lg text-success", "bi bi-check-lg text-danger"].map(
              (item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>Mark z</td>
                  <td>t</td>
                  <td>email</td>
                  <td>
                    <i className={item}></i>
                  </td>
                  <td>PayPal</td>
                  <td>
                    <LinkContainer to="/operator/edit-user">
                      <Button className="btn-sm">
                        <i className="bi bi-pencil-square"></i>
                      </Button>
                    </LinkContainer>
                    {" / "}
                    <Button variant="danger" className="btn-sm" onClick={deleteHandler}>
                      <i className="bi bi-x-circle"></i>
                    </Button>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </Table>
      </Col>
    </Row>
  );
};
