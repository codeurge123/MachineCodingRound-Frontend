import React from "react";

export default function Interest({ data, setData, error }) {
  const { interest } = data;

  // important logic : notee
  const handleState = (e, item) => {
    setData((prevState) => ({
      ...prevState,
      interest: prevState.interest.includes(item)
        ? prevState.interest.filter((i) => i !== item)
        : [...prevState.interest, item],
    }));
  };

  return (
    <>
      <div className="interestform">
        <input
          type="checkbox"
          checked={interest.includes("coding")}
          onChange={(e) => handleState(e, "coding")}
        />
        <label htmlFor="coding">Coding</label>
        <input
          type="checkbox"
          checked={interest.includes("javascript")}
          onChange={(e) => handleState(e, "javascript")}
        />
        <label htmlFor="coding">Javascript</label>
        <input
          type="checkbox"
          checked={interest.includes("batminton")}
          onChange={(e) => handleState(e, "batminton")}
        />
        <label htmlFor="coding">Batminton</label>
      </div>
      <div>{error.interest && <span>{error.interest}</span>}</div>
    </>
  );
}
