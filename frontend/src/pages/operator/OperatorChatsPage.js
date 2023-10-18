import { Row, Col } from "react-bootstrap";
import { OperatorLinksComponent } from "../components/operatorComponent/OperatorLinksComponent";
import { OperatorChatRoomComponent } from "../components/operatorComponent/OperatorChatRoomComponent";

export const OperatorChatsPage = () => {
  return (
    <Row className="m-5">
      <Col md={2}>
        <OperatorLinksComponent />
      </Col>
      <Col md={8}>
        <Row>
            <OperatorChatRoomComponent />
        </Row>
      </Col>
    </Row>
  );
};
