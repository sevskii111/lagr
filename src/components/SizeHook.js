import React, { useState } from "react";
import { Form, FormGroup, Input, Label, Col } from "reactstrap";

const useSize = (d, label) => {
  const [size, setSize] = useState(d);
  return [
    <Form>
      <FormGroup row>
        <Label xs="auto" htmlFor="size">
          {label}
        </Label>
        <Col xs={2}>
          <Input
            name="size"
            value={size}
            onChange={(e) => setSize(e.target.value)}
            type="number"
          ></Input>
        </Col>
      </FormGroup>
    </Form>,
    size,
  ];
};

export default useSize;
