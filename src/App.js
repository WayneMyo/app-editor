import "../src/style.css"
import OverviewFlow from "./Flow-Builder/FlowBuilder";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

const ContainerDiv = styled(Container)`
  font-family: sans-serif;
  text-align: center;
`;

const DemoArea = styled(Col)`
  width: 100%;
  height: 85vh;
`;

export default function App() {
  return (
    <ContainerDiv fluid>
      <Row>
        <Col>
          <h1>Hello CodeSandbox</h1>
        </Col>
      </Row>
      <Row>
        <DemoArea>
          <OverviewFlow />
        </DemoArea>
      </Row>
    </ContainerDiv>
  );
}
