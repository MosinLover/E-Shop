import { Row, Col, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { OperatorLinksComponent } from "../components/operatorComponent/OperatorLinksComponent";

export const OperatorOrdersPage = () => {
  return (
    <Row className="m-5">
      <Col md={2}>
        <OperatorLinksComponent />
      </Col>
      <Col md={10}>
        <h1>My Orders</h1>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>User</th>
              <th>Date</th>
              <th>Total</th>
              <th>Delivered</th>
              <th>Payment Method</th>
              <th>Order details</th>
            </tr>
          </thead>
          <tbody>
            {["bi bi-check-lg text-success", "bi bi-check-lg text-danger"].map(
              (item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>Mark z</td>
                  <td>2022</td>
                  <td>$124</td>
                  <td>
                    <i className={item}></i>
                  </td>
                  <td>PayPal</td>
                  <td>
                    <Link to="/operator/order-details">check order</Link>
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
