import React, { useState } from "react";

const App = () => {
  let [myName, setMyName] = useState("Thapa Technical");

  const updateName = () => {
    if (myName === "Thapa Technical")
      setMyName("Thanks for subscribing the channel");
    else setMyName("Thapa Technical");
  };

  return (
    <>
      <h1>{myName}</h1>
      <button className="btn" onClick={updateName}>
        Click Here
      </button>
    </>
  );
};
export default App;