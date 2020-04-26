import React, { useState, useEffect } from "react";
import { Form, FormGroup, Input, Label, Table } from "reactstrap";

const useInput = (dx, dy, dsize) => {
  const [size, setSize] = useState(dsize);
  const [x, setX] = useState(dx);
  const [y, setY] = useState(dy);

  useEffect(() => {
    if (x.length > size) {
      setX(x.slice(0, size));
      setY(y.slice(0, size));
    } else {
      let newX = [...x];
      let newY = [...y];
      for (let i = x.length; i < size; i++) {
        newX.push(0);
        newY.push(0);
      }

      setX(newX);
      setY(newY);
    }
  }, [size]);

  const setVal = (arr, setter, ind, value) => {
    const newArr = [...arr];
    newArr[ind] = value;
    setter(newArr);
  };

  return [
    <Form>
      <p>Координаты точек:</p>
      <Table>
        <tbody>
          <tr>
            <th key="x">x</th>
            {x.map((xi, i) => (
              <td key={`x-${i}`}>
                <Input
                  value={xi}
                  type="number"
                  onChange={(e) => {
                    setVal(x, setX, i, e.target.value);
                  }}
                ></Input>
              </td>
            ))}
          </tr>
          <tr>
            <th key="y">y</th>
            {y.map((yi, i) => (
              <td key={`y-${i}`}>
                <Input
                  value={yi}
                  type="number"
                  onChange={(e) => {
                    setVal(y, setY, i, e.target.value);
                  }}
                ></Input>
              </td>
            ))}
          </tr>
        </tbody>
      </Table>
      <hr></hr>
    </Form>,
    { x, y },
    setSize,
  ];
};

export default useInput;
