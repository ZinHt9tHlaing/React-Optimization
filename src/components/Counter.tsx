import { memo, useEffect, useMemo, useState } from "react";

// Props and types for Counter
interface CounterProps {
  initialValue: number;
}

function expensiveCompute(initialValue: number) {
  console.log("expensiveComputeValue function called");

  const numericValue = Number(initialValue);
  if (!isNaN(numericValue)) {
    // must be number
    return numericValue;
  } else {
    return 0;
  }
}

// Counter Component
const Counter = ({ initialValue }: CounterProps) => {
  console.log("Counter rendered");

  const expensiveComputeValue = useMemo(
    () => expensiveCompute(initialValue),
    [initialValue]
  );

  const [count, setCount] = useState<number>(0);

  // Update count when initialValue changes
  useEffect(() => {
    setCount(expensiveComputeValue);
  }, [initialValue]);

  return (
    <>
      <h2>Counter</h2>
      <p>Validated Initial Value: {initialValue}</p>
      <p>Current Count: {count}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
    </>
  );
};

export default memo(Counter);
