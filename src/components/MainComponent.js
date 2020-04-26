import React, { useEffect } from "react";
import useSize from "./SizeHook";
import useInput from "./InputHook";
import { lagrange } from "../helpers/math";
import { Container, Row, Col } from "reactstrap";

const MainComponent = () => {
  const [SizeComponent, size] = useSize(9, "Количество точек: ");
  const [InputComponent, values, setSize] = useInput(
    [0.09, 0.25, 0.47, 0.65, 0.8, 1.1, 1.33, 1.53, 1.62],
    [-1.92, -0.43, -1.52, -1.28, -0.25, -1.46, -1.24, -1.7, -0.68],
    size
  );
  const [XComponent, x] = useSize(0.769, "x: ");

  useEffect(() => {
    setSize(size);
  }, [size]);

  let solution = lagrange(x, values.x, values.y);

  console.log(solution);

  return (
    <Container className="mt-1">
      {SizeComponent}
      {InputComponent}
      {XComponent}
      <Row>
        <Col xs={12}>
          <strong>Ответ: x = {solution.toFixed(4)}</strong>
        </Col>
      </Row>
    </Container>
  );
};

export default MainComponent;
