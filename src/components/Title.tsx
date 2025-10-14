import { memo } from "react";

const Title = () => {
  console.log("Title rendered");

  return <h1>Optimization: memo, useMemo, useCallback</h1>;
};

export default memo(Title);
