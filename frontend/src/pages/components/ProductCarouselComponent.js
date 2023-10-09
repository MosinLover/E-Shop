import { Carousel } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export const ProductCarouselComponent = () => {
  const cursorPointer = {
    cursor: "pointer",
  };
  return (
    <Carousel>
      <Carousel.Item crossOrigin="anonymous">
        <img
          className="d-block w-100"
          src="/images/tablets-category.png"
          alt="first-slide"
          style={{ height: "300px", objectFit: "cover" }}
        />
        <Carousel.Caption>
          <LinkContainer style={cursorPointer} to="/product">
            <h3>Best Seller in laptop</h3>
          </LinkContainer>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item crossOrigin="anonymous">
        <img
          className="d-block w-100"
          src="/images/games-category.png"
          alt="second-slide"
          style={{ height: "300px", objectFit: "cover" }}
        />
        <Carousel.Caption>
          <LinkContainer style={cursorPointer} to="/product">
            <h3>Best Seller in games</h3>
          </LinkContainer>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item crossOrigin="anonymous">
        <img
          className="d-block w-100"
          src="/images/monitors-category.png"
          alt="third-slide"
          style={{ height: "300px", objectFit: "cover" }}
        />
        <Carousel.Caption>
          <LinkContainer style={cursorPointer} to="/product">
            <h3>Best Seller in monitors</h3>
          </LinkContainer>{" "}
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
