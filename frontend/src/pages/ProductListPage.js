import { Row, Col, Container, ListGroup, Button } from "react-bootstrap";
import { SortOptionsComponent } from "./components/SortOptionsComponent";
import { PriceFilterComponent } from "./components/filterResultOptions/PriceFilterComponent";
import { RatingFilterComponent } from "./components/filterResultOptions/RatingFilterComponent";
import { CategoryFilterComponent } from "./components/filterResultOptions/CategoryFilterComponent";
import { AttributesFilterComponent } from "./components/filterResultOptions/AttributesFilterComponent";
import { ProductForListComponent } from "./components/ProductForListComponent";
import { PaginationComponent } from "./components/PaginationComponent";

export const ProductListPage = () => {
  return (
    <Container fluid>
      <Row>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item className="mb-3 mt-3">
              <SortOptionsComponent />
            </ListGroup.Item>
            <ListGroup.Item>
              FILTER: <br />
              <PriceFilterComponent />
            </ListGroup.Item>
            <ListGroup.Item>
              <RatingFilterComponent />
            </ListGroup.Item>
            <ListGroup.Item>
              <CategoryFilterComponent />
            </ListGroup.Item>
            <ListGroup.Item>
              <AttributesFilterComponent />
            </ListGroup.Item>
            <ListGroup.Item>
              <Button variant="primary">Filter</Button>
              <Button variant="danger">Reset</Button>
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={9}>
          <ProductForListComponent />
          <PaginationComponent />
        </Col>
      </Row>
    </Container>
  );
};
