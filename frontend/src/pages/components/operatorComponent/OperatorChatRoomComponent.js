import { useState } from "react";
import { Toast } from "react-bootstrap";

export const OperatorChatRoomComponent = () => {
  const [toast1, closeToast1] = useState(true);
  const close1 = () => closeToast1(false);
  return (
    <>
      <Toast show={toast1} onClose={close1} className="ms-4 mb-5">
        <Toast.Header>
          <strong className="me-auto">John</strong>
        </Toast.Header>
        <Toast.Body>
          <p className="bg-primary p-3 ms-4 text-light rounded-pill">
            <b>User wrote:</b> Hello world!
          </p>
          <p>
            <b>Operator wrote:</b> Hello world!
          </p>
        </Toast.Body>
      </Toast>
    </>
  );
};
