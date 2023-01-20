import { useState } from "react";

import "./index.scss";

export const App = () => {
  const [count, setCount] = useState(0);

  const onClickPlus = () => {
    setCount((prev) => prev + 1);
  };

  const onClickMinus = () => {
    setCount((prev) => prev - 1);
  };

  return (
    <div className="App">
      <div>
        <h2>Сounter:</h2>
        <h1>{count}</h1>
        <button onClick={onClickMinus} className="minus">
          - Minus
        </button>
        <button onClick={onClickPlus} className="plus">
          Plus +
        </button>
      </div>
    </div>
  );
};
