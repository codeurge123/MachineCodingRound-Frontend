import "./styles.css";
import { useState } from "react";
// import Profile from "Profile.jsx";
import Profile from "./components/Profile";
import Interest from "./components/Interest";
import Settings from "./components/Settings";

export default function App() {
  const [activetab, setActivetab] = useState(0);

  const [error, setError] = useState({});

  const [data, setData] = useState({
    name: "Yash",
    age: 21,
    email: "bansalyash316@gmail.com",
    interest: ["coding", "batminton"],
    theme: "dark",
  });

  const handleData = () => {
    console.log(data);
  };

  // this is done inorder to make the application scalable
  const tab = [
    {
      name: "Profile",
      component: Profile,
      validate: () => {
        const err = {};
        if (!data.name) {
          err.name = "Name is not defined";
        }
        if (!data.age || data.age < 18) {
          err.age = "Age is invalid";
        }
        if (!data.email) {
          err.email = "Email is not valid";
        }

        setError(err);

        return err.name || err.age || err.email ? false : true;
      },
    },
    {
      name: "Interest",
      component: Interest,
      validate: () => {
        const err = {};
        if (data.interest.length < 1) {
          err.interest = "Atleast one field should be checked";
        }
        setError(err);

        return err.interest ? false : true;
      },
    },
    {
      name: "Settings",
      component: Settings,
      validate: () => {
        return true;
      },
    },
  ];

  const handleNext = () => {
    if (tab[activetab].validate()) setActivetab((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (tab[activetab].validate()) setActivetab((prev) => prev - 1);
  };

  const ActiveComponent = tab[activetab].component;

  return (
    <div>
      <div className="tab-bar">
        {tab.map((t, index) => (
          <div className="tab" key={index} onClick={() => setActivetab(index)}>
            {t.name}
          </div>
        ))}
      </div>
      <div className="elements">
        <ActiveComponent data={data} setData={setData} error={error} />

        <div className="btn">
          <div>
            {activetab === tab.length - 1 ? (
              <button onClick={() => handleData()}>Submit</button>
            ) : (
              ""
            )}
          </div>
          <div>
            <span>
              {activetab > 0 ? (
                <button onClick={() => handlePrev()}>prev</button>
              ) : (
                ""
              )}
            </span>
            <span>
              {activetab < tab.length - 1 ? (
                <button onClick={() => handleNext()}>next</button>
              ) : (
                ""
              )}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
