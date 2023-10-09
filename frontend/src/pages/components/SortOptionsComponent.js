import { Form } from "react-bootstrap";

export const SortOptionsComponent = () => {
  return (
    <Form.Select aria-label="Default select example">
      <option>Sort By</option>
      <option value="price_1">Price: Low To High</option>
      <option value="price_-1">Price: High To Low</option>
      <option value="rating_-1">Price: Ratings</option>
      <option value="name_1">Price: Name A-Z</option>
      <option value="name_-1">Price: Name Z-A</option>
    </Form.Select>
  );
};
