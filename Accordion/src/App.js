import "./styles.css";
import { useState } from "react";

export default function App() {
  const [openIndex, setOpenIndex] = useState(null);

  const data = [
    {
      title: "Javascript",
      content: "Javascript is a programming language",
    },
    {
      title: "Python",
      content: "It is the programming language used in ML",
    },
    {
      title: "Software",
      content: "It can mean industry or tech",
    },
  ];

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="App">
      <h1>Accordion</h1>

      <div className="outer">
        {data.length === 0 ? (
          <span>No Item is available</span>
        ) : (
          data.map((item, index) => (
            <div key={index} className="accordion">
              <div onClick={() => handleClick(index)}>
                {item.title}
                <span>{openIndex === index ? " ^" : " v"}</span>
              </div>

              {openIndex === index && <div>{item.content}</div>}
            </div>
          ))
        )}
      </div>
    </div>
  );
}
