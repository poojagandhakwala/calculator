import React from 'react';
import './calc.css';

export default function Calculator() {
  let x, op2, ans;
  const [output, setOutput] = React.useState(0);
  const [operator, setOperator] = React.useState(0);
  const [op1, setOp1] = React.useState(0);

  const handleChange = (n) => {
    if (n === "AC") {
      setOutput(0);
    } else if (output !== 0) {
      if (n === "=") {
        op2 = output.split(operator).pop();
        console.log("op1= " + op1);
        console.log("op2= " + op2);
        handleOperation();
      } else if (n === "+") {
        setOperator("+");
        setOp1(output);
        x = output + n;
        setOutput(x);
      } else if (n === "-") {
        setOperator("-");
        setOp1(output);
        x = output + n;
        setOutput(x);
      } else if (n === "X") {
        setOperator("X");
        setOp1(output);
        x = output + n;
        setOutput(x);
      } else if (n === "/") {
        setOperator("/");
        setOp1(output);
        console.log("output = " + output);
        console.log("oper = " + operator);
        x = output + n;
        setOutput(x);
      } else {
        x = output + n;
        setOutput(x);
      }
    } else setOutput(n);
  };

  const handleOperation = () => {
    if (operator == "+") {
      ans = parseInt(op1) + parseInt(op2);
      setOutput(ans);
      console.log("ans = " + ans);
    } else if (operator == "-") {
      ans = op1 - op2;
      setOutput(ans);
      console.log("ans = " + ans);
    } else if (operator == "X") {
      ans = op1 * op2;
      setOutput(ans);
      console.log("ans = " + ans);
    } else if (operator == "/") {
      ans = op1 / op2;
      setOutput(ans);
      console.log("ans = " + ans);
    } else {
      console.log("invalid ");
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center output pt-3">
        <p>{output}</p>
      </div>

      <div className="row num">
        <button className="ac btn-secondary" onClick={() => handleChange("AC")}>
          AC
        </button>
        <button className="btn-secondary" onClick={() => handleChange("/")}>
          /
        </button>
        <button className=" btn-secondary" onClick={() => handleChange("X")}>
          X
        </button>

        <button className=" btn-secondary" onClick={() => handleChange("7")}>
          7
        </button>
        <button className=" btn-secondary" onClick={() => handleChange("8")}>
          8
        </button>
        <button className=" btn-secondary" onClick={() => handleChange("9")}>
          9
        </button>
        <button className=" btn-secondary" onClick={() => handleChange("-")}>
          -
        </button>

        <button className="btn-secondary" onClick={() => handleChange("4")}>
          4
        </button>
        <button className=" btn-secondary" onClick={() => handleChange("5")}>
          5
        </button>
        <button className=" btn-secondary" onClick={() => handleChange("6")}>
          6
        </button>
        <button className=" btn-secondary" onClick={() => handleChange("+")}>
          +
        </button>

        <button className=" btn-secondary" onClick={() => handleChange("1")}>
          1
        </button>
        <button className=" btn-secondary" onClick={() => handleChange("2")}>
          2
        </button>
        <button className="one btn-secondary" onClick={() => handleChange("3")}>
          3
        </button>

        <button
          style={{ width: "160px", marginLeft: "-3px" }}
          className="btn-secondary"
          onClick={() => handleChange("0")}
        >
          0
        </button>
        <button className="btn-secondary" onClick={() => handleChange(".")}>
          .
        </button>
        <button
          style={{
            marginTop: "-65px",
            marginRight: "-2px",
            height: "130px",
            backgroundColor: "#135e92"
          }}
          className="btn-secondary"
          onClick={() => handleChange("=")}
        >
          =
        </button>
      </div>
    </div>
  );
};