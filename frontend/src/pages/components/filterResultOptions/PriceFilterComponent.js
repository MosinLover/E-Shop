import { Form } from "react-bootstrap";

export const PriceFilterComponent = () => {
  return (
    <>
      <Form.Label>
        <span className="fw-bold">Price no greater than:</span> 500$
      </Form.Label>
      <Form.Range min={10} max={1000} step={10} />
    </>
  );
};
