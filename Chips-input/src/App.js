import "./styles.css";
import { useState } from "react";

export default function App() {
  const [input, setInput] = useState("");

  const [chipsArr, setChipsArr] = useState([]);

  const handleClick = (e) => {
    if (!input) return;

    // console.log(e.key);
    if (e.key === "Enter") {
      setChipsArr([...chipsArr, input]);
      setInput("");
    }
  };

  const handledelete = (index) => {
    // setChipsArr((prev) => [...prev]);
    console.log("element", chipsArr[index]);
    chipsArr.splice(index, 1);
    setChipsArr([...chipsArr]);
  };

  return (
    <div className="App">
      <h1>Chips Input</h1>
      <input
        type="text"
        className="inputbox"
        placeholder="Enter the Chip"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => handleClick(e)}
      />

      <div className="outer">
        <div className="result">
          {chipsArr.map((chip, index) => (
            <span key={index} className="chips">
              {chip}
              <span className="delete" onClick={() => handledelete(index)}>
                x
              </span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
