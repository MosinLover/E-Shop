import { Card, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export const CategoryCardComponent = ({ category, index }) => {
  const images = [
    "/images/tablets-category.png",
    "/images/monitors-category.png",
    "/images/tablets-category.png",
    "/images/monitors-category.png",
    "/images/tablets-category.png",
    "/images/monitors-category.png",
    "/images/tablets-category.png",
    "/images/monitors-category.png",
  ];
  return (
    <Card>
      <Card.Img
        crossOrigin="anonymous"
        variant="top"
        src={images[index]}
      ></Card.Img>
      <Card.Body>
        <Card.Title>{category}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <LinkContainer to="/product-list">
          <Button variant="primary">Go to Category</Button>
        </LinkContainer>
      </Card.Body>
    </Card>
  );
};
