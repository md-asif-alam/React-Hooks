import React, { useState } from "react";

const UseStateArray = () => {
  const bioData = [
    {
      id: 0,
      myName: "Asif",
      myAge: 26,
    },
    {
      id: 1,
      myName: "Alam",
      myAge: 27,
    },
  ];

  const [myArray, setMyArray] = useState(bioData);

  const clearArray = () => {
    setMyArray([]);
  };
  return (
    <>
      {myArray.map((curEle) => {
        return (
          <h1 key={curEle.id}>
            Name: {curEle.myName} & age :{curEle.myAge}
          </h1>
        );
      })}
      <button className="btn" onClick={clearArray}>
        Clear
      </button>
    </>
  );
};

export default UseStateArray;
