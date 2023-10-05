import React, { useState } from "react";
import RulesHooks from "./component/rulesHooks";

const App = () => {
  // const [myName, setMyName] = useState("Thapa Technical");

  // const updateName = () => {
  //   // if (myName === "Thapa Technical")
  //   //   setMyName("Thanks for subscribing the channel");
  //   // else setMyName("Thapa Technical");

  //   myName === "Thapa Technical"
  //     ? setMyName("Thanks for subscribing the channel")
  //     : setMyName("Thapa Technical");
  // };

  return (
    <>
      {/* <h1>{myName}</h1>
      <button className="btn" onClick={updateName}>
        Click Here
      </button> */}
      <RulesHooks />
    </>
  );
};
export default App;
