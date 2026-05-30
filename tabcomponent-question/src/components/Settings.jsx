import React from "react";

export default function Settings({ data, setData }) {
  const { theme } = data;

  const handleState = (e, item) => {
    setData((prevState) => ({
      ...prevState,
      theme: e.target.name,
    }));
  };

  return (
    <>
      <input
        type="radio"
        name="dark"
        id="dark"
        checked={theme === "dark"}
        onChange={(e) => handleState(e, "dark")}
      />
      <label htmlFor="dark">Dark</label>
      <input
        type="radio"
        name="light"
        id="light"
        checked={theme === "light"}
        onChange={(e) => handleState(e, "light")}
      />
      <label htmlFor="light">Light</label>
    </>
  );
}
