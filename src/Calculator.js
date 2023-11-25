import { useState } from "react";

//Array to represent all Operators
const operators = ["*", "/", "-", "+", "="]; //"(", ")"];

//Button compenent
function Button({ value, onClick, className }) {
  return (
    <button className={className} onClick={() => onClick(value)}>{value}</button>
  );
}

//Screen component
function OutputScreen({ output }) {
  return (
    <input type="text" className="screen" value={output} readOnly />
  );
}

function Calculator() {
  const [output, setOutput] = useState('');

  function handleClick(value) {
    //If equals button is pressed and display is not empty, try to compute the input
    if (value === '=' && output != "") {
      try {
        const result = Function(`return (${output})`)();
        setOutput(result.toString());
        //If above condition is not completetd, catch the error; set screen to "Error"
      } catch (error) {
        setOutput('Error');
      }
      //Clear button
    } else if (value === 'C') {
      setOutput('');
    } else {
      //Prevents user from entering an operator before any numbers
      if (output === "" && operators.includes(value)) return;
      //Add new value to current output
      setOutput((prevOutput) => prevOutput + value);
    }
  }

  //Button Layout
  return (
    <>
    <div className="container">
      <input type="text" className="screen" value={output} readOnly />

        <div className="row">
        <button className="num" onClick={() => handleClick('7')} data-value="7">7</button>
        <button className="num" onClick={() => handleClick('8')} data-value="8">8</button>
        <button className="num" onClick={() => handleClick('9')} data-value="9">9</button>
        <button className="op" onClick={() => handleClick('+')} data-value="+">+</button>
        </div>

        <div className="row">
        <button className="num" onClick={() => handleClick('4')} data-value="4">4</button>
        <button className="num" onClick={() => handleClick('5')} data-value="5">5</button>
        <button className="num" onClick={() => handleClick('6')} data-value="6">6</button>
        <button className="op" onClick={() => handleClick('-')} data-value="-">-</button>
        </div>

        <div className="row">
        <button className="num" onClick={() => handleClick('1')} data-value="1">1</button>
        <button className="num" onClick={() => handleClick('2')} data-value="2">2</button>
        <button className="num" onClick={() => handleClick('3')} data-value="3">3</button>
        <button className="op" onClick={() => handleClick('*')} data-value="*">x</button>
        </div>

        <div className="row">
        <button className="clr" onClick={() => handleClick('C')} data-value="C">C</button>
        <button className="num" onClick={() => handleClick('0')} data-value="0">0</button>
        <button className="op" onClick={() => handleClick('=')} data-value="=">=</button>
        <button className="op" onClick={() => handleClick('/')} data-value="/">/</button>
        </div>
      </div>
    </>
  );
}

export default Calculator;