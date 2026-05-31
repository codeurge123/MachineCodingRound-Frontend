import "./styles.css";
import { useState, useEffect } from "react";

export default function App() {
  const progress = [0, 5, 10, 15, 30, 50, 75, 100];

  const [animatedProgress, setAnimatedProgress] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setAnimatedProgress(progress[5]);
    }, 200);
  }, [progress]);

  return (
    <div className="App">
      <h1>Progress Bar</h1>

      {/* <div className="outer"> */}
      {progress.map((p, index) => (
        <div key={index} className="inner">
          <div
            className="inside"
            style={{
              // width: `${p}%`,
              transform: `translateX(${animatedProgress - 100}%)`,
              color: animatedProgress < 5 ? "transparent" : "white",
            }}
            // this is how we add 'accessibility' to our progress bar
            role="progressbar"
            aria-valuenow={animatedProgress}
            aria-valuemin="0"
            aria-valuemax="100"
          >
            {p}%
          </div>
        </div>
      ))}
      {/* </div> */}
    </div>
  );
}
