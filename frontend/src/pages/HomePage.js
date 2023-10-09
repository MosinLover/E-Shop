import { ProductCarouselComponent } from "./components/ProductCarouselComponent";
import { CategoryCardComponent } from "./components/CategoryCardComponent";
import { Row, Container } from "react-bootstrap";

export const HomePage = () => {
  const categories = [
    "Tablets",
    "Monitors",
    "Games",
    "Cameras",
    "Tablets",
    "Monitors",
    "Games",
    "Cameras",
  ];
  return (
    <>
      <ProductCarouselComponent />
      <Container>
        <Row xs={1} md={2} className="g-4 mt-5">
          {categories.map((category, index) => (
            <CategoryCardComponent key={index} category={category} index={index} />
          ))}
        </Row>
      </Container>
    </>
  );
};
