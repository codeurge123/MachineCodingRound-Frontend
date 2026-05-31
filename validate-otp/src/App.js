import "./styles.css";
import { useState, useEffect, useRef } from "react";

const OTP_INPUTS = 5;

export default function App() {
  const [inputArr, setInputArr] = useState(new Array(OTP_INPUTS).fill(""));

  const refArr = useRef([]);

  useEffect(() => {
    // this is to be done so that as page load our focus is on first input
    refArr.current[0]?.focus();
  }, []);

  const handleInput = (value, index) => {
    if (isNaN(value)) return;

    // always use them to know where you are going
    console.log(value);
    const newValue = value.trim();

    const newArr = [...inputArr];
    // slice is used so that last value only appear
    newArr[index] = newValue.slice(-1);
    setInputArr(newArr);

    newValue && refArr.current[index + 1]?.focus();
  };

  const handleKeyDown = (e, index) => {
    console.log(e.key);
    // important
    if (!e.target.value && e.key === "Backspace") {
      refArr.current[index - 1]?.focus();
    }
  };

  return (
    <div className="App">
      <h1>Validate OTP</h1>

      {inputArr.map((input, index) => (
        <input
          type="text"
          key={index}
          className="inputbox"
          value={inputArr[index]}
          // there is a doubt in below one
          ref={(input) => (refArr.current[index] = input)}
          onChange={(e) => handleInput(e.target.value, index)}
          // passing index is very important b/c based on that only ref of input change
          onKeyDown={(e) => handleKeyDown(e, index)}
        />
      ))}
    </div>
  );
}
