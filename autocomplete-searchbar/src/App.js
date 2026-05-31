import "./styles.css";
import { useState, useEffect } from "react";

export default function App() {
  const [result, setResult] = useState([]);
  const [input, setInput] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [cache, setCache] = useState({});

  const fetchData = async () => {
    if (cache[input]) {
      console.log("Cached result : ", input);
      setResult(cache[input]);
      return;
    }

    const data = await fetch("https://dummyjson.com/recipes/search?q=" + input);
    const json = await data?.json();
    setResult(json?.recipes);
    console.log("API CALL : ", input);
    // this below is the caching that we are doing so the again api is called
    setCache((prev) => ({ ...prev, [input]: json?.recipes }));
  };

  useEffect(() => {
    // this below is the implementation of debouncing
    const timer = setTimeout(fetchData, 300);

    // here we do clearTimeout and it means when
    return () => {
      clearTimeout(timer);
    };
  }, [input]);

  return (
    <div className="App">
      <h1>AutoComplete Search Bar</h1>

      <input
        type="text"
        className="search-bar"
        value={input}
        placeholder="Search for Recipes"
        onFocus={() => setShowResult(true)}
        onBlur={() => setShowResult(false)}
        onChange={(e) => setInput(e.target.value)}
      />
      <div className="container">
        {showResult && result.map((r) => <div key={r.id}>{r.name}</div>)}
      </div>
    </div>
  );
}
