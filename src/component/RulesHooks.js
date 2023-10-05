// 1: Always write it inside the component or function
// 2: Component name must be PascalCase(first letter should be uppercase)
// 3: we can directly import or we can directly write it using React.hookName
// 4: Don't call Hooks inside loops, conditions, or nested functions.
import React, { useState } from "react";

const RulesHooks = () => {
  const [myName, setMyName] = useState("Thapa Technical");
  return (
    <div>
      <h1>{myName}</h1>
    </div>
  );
};

export default RulesHooks;
