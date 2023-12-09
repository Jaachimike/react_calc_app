import React, { useState } from "react";

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const signs = ["+", "-", "/", "*"];

const Calculator = () => {
  const [digit, setDigit] = useState("");
  // const [displayNum, setDisplayNum] = useState(null);

  const handleClick = (key) => {
    setDigit((prevDigit) => prevDigit + key);
  };

  const calculateResult = () => {
    try {
      const finalResult = eval(digit);
      setDigit(finalResult);
    } catch (error) {
      setDigit("Error");
    }
  };

  const reset = () => {
    setDigit("");
  };

  const NumGrid = numbers.map((num, index) => (
    <div className=" p-3 border mr-2 mb-2" key={index}>
      <button onClick={() => handleClick(num)}>{num}</button>
    </div>
  ));

  const SignGrid = signs.map((sign, index, props) => (
    <div className=" p-3 border mr-2 mb-2" key={index}>
      <button onClick={() => handleClick(sign)}>{sign}</button>
    </div>
  ));

  return (
    <div className="bg-black">
      <div className=" text-red-800  flex flex-col justify-center items-center h-screen  ">
        <input
          type="text"
          value={digit}
          onChange={(e) => setDigit(e.target.value)}
          className=" mb-6"
        />

        <div className=" grid grid-cols-3">
          {NumGrid}
          {SignGrid}
          <div className=" p-3 border mr-2 mb-2">
            <button onClick={calculateResult}>=</button>
          </div>
        </div>

        {/* RESET BUTTON  */}
        <div>
          <button onClick={reset}>RESET</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
