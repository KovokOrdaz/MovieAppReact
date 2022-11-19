import { Col, Input, InputGroup, Row } from "reactstrap";

function FormApp() {
  return (
    <Row className="mt-5">
      <Col className="mt-5">
        <InputGroup size="lg" >
          <Input placeholder="Search 🔍"  />
        </InputGroup>
      </Col>
    </Row>
  );
}

export default FormApp;
