import "./App.css";

import Title from "./Title";
import Counter from "./Counter";
import { useState } from "react";

const App = () => {
  console.log("App rendered");

  const [initialValue, setInitialValue] = useState<number>(0);
  const [inputValue, setInputValue] = useState<string>("");

  const handleSubmit = () => {
    console.log("handleSubmit function called");

    const numericValue = Number(inputValue);
    if (!isNaN(numericValue)) {
      setInitialValue(numericValue);
    } else {
      console.log("Pleaser enter a valid number.");
    }
  };

  return (
    <>
      <Title />
      <h2>Initial Value Setup</h2>
      <input
        type="number"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter initial value"
      />
      <button onClick={handleSubmit}>Submit</button>
      <Counter initialValue={initialValue} />
    </>
  );
};

export default App;
