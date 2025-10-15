import { memo, useState } from "react";

// Props and types for InitialSetup
interface InitialSetupProps {
  onSetup: (value: number) => void;
}

const InitialSetup = ({ onSetup }: InitialSetupProps) => {
  console.log("InitialSetup rendered");

  const [inputValue, setInputValue] = useState<string>("");

  const handleSubmit = () => {
    console.log("handleSubmit function called");

    const numericValue = Number(inputValue);
    if (!isNaN(numericValue)) {
      onSetup(numericValue);
      setInputValue("");
    } else {
      console.log("Pleaser enter a valid number.");
    }
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setInputValue(e.target.value);
  };

  return (
    <>
      <h2>Initial Value Setup</h2>
      <input
        type="number"
        value={inputValue}
        onChange={handleOnChange}
        placeholder="Enter initial value"
      />
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
};

export default memo(InitialSetup);
