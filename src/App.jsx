import React, { useState } from "react";

function App() {
  const [onSubmit, setOnSubmit] = useState(false);
  const [fullName, setFullName] = useState({
    fName: "",
    lName: "",
  });

  function handleChange(event) {
    const { value, name } = event.target;

    setFullName((preValue) => {
      if (name === "fName") {
        return {
          fName: value,
          lName: preValue.lName,
        };
      } else if (name === "lName") {
        return {
          fName: preValue.fName,
          lName: value,
        };
      }
    });
  }

  function mouseOn() {
    setOnSubmit(true);
  }
  function mouseOff() {
    setOnSubmit(false);
  }

  return (
    <div className="container">
      <h1>
        Hello {fullName.fName} {fullName.lName}
      </h1>
      <form>
        <input onChange={handleChange} name="fName" placeholder="First Name" />
        <input onChange={handleChange} name="lName" placeholder="Last Name" />
        <button
          onMouseOver={mouseOn}
          onMouseOut={mouseOff}
          style={
            onSubmit
              ? { backgroundColor: "black" }
              : { backgroundColor: "white" }
          }
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
