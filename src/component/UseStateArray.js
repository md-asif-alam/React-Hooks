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

  const removeElem = (id) => {
    // alert(id);
    const myNewArray = myArray.filter((curEle) => {
      return curEle.id != id;
    });
    setMyArray(myNewArray);
  };
  return (
    <>
      {myArray.map((curEle) => {
        return (
          <h1 key={curEle.id}>
            Name: {curEle.myName} & age :{curEle.myAge}
            <button className="btnInner" onClick={() => removeElem(curEle.id)}>
              remove
            </button>
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
