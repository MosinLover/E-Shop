import { Form } from "react-bootstrap";

export const CategoryFilterComponent = () => {
  return (
    <>
      <span className="fw-bold">Category</span>
      <Form>
        {Array.from({ length: 5 }).map((_, index) => (
          <div key={index}>
            <Form.Check type="checkbox" id={`check-api2-${index}`}>
              <Form.Check.Input
                type="checkbox"
                style={{ cursor: "pointer" }}
                isValid
              />
              <Form.Check.Label>Category -{index}</Form.Check.Label>
            </Form.Check>
          </div>
        ))}
      </Form>
    </>
  );
};
