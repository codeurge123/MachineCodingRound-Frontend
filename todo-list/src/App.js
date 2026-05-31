import "./styles.css";
import { useState } from "react";

export default function App() {
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState([]);

  const handleClick = () => {
    if (!input.trim()) return;

    setTodo([
      ...todo,
      {
        input: input,
        complete: false,
      },
    ]);

    setInput("");
  };

  const handleDelete = (index) => {
    setTodo(todo.filter((_, i) => i !== index));
  };

  const handleToggle = (index) => {
    const updatedTodo = [...todo];

    updatedTodo[index].complete = !updatedTodo[index].complete;

    setTodo(updatedTodo);
  };

  return (
    <div className="App">
      <h1>Todo List</h1>

      <input
        type="text"
        className="inputbox"
        placeholder="Enter the Task"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button className="addbutton" onClick={handleClick}>
        Add
      </button>

      <div>
        {todo.map((t, index) => (
          <div className="todo-list" key={index}>
            <input
              type="checkbox"
              id={`todo-${index}`}
              checked={t.complete}
              onChange={() => handleToggle(index)}
            />

            <label
              htmlFor={`todo-${index}`}
              style={{
                textDecoration: t.complete ? "line-through" : "none",
              }}
            >
              {t.input}
            </label>

            <button className="delete" onClick={() => handleDelete(index)}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
