import { Form } from "react-bootstrap";

export const AttributesFilterComponent = () => {
  return (
    <>
      {[{ color: ["red", "blue", "green"] }, { ram: ["1TB", "2TB"] }].map(
        (item, index) => (
          <div key={index}>
            <Form.Label>
              <b>{Object.keys(item)}</b>
            </Form.Label>
            {item[Object.keys(item)].map((i, index) => (
              <Form.Check key={index} type="checkbox" label={i} />
            ))}
          </div>
        )
      )}
    </>
  );
};
