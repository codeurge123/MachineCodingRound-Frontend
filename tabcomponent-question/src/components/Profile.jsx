import React from "react";

export default function Profile({ data, setData, error }) {
  const { name, age, email } = data;

  const handleState = (e, item) => {
    // basically we are spreading the prevState becasue we want to maintain that state.
    setData((prevState) => ({
      ...prevState,
      [item]: e.target.value,
    }));
  };

  return (
    <>
      <div className="inputform">
        <div className="form">
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => handleState(e, "name")}
            />
          </div>
          {error.name && <span>{error.name}</span>}
          <div>
            <label htmlFor="age">Age:</label>
            <input
              type="number"
              id="age"
              value={age}
              onChange={(e) => handleState(e, "age")}
            />
          </div>
          {error.age && <span>{error.age}</span>}
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => handleState(e, "email")}
            />
          </div>
          {error.email && <span>{error.email}</span>}
        </div>
      </div>
    </>
  );
}
