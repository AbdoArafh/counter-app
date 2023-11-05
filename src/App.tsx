import { useState } from "react";
import "./App.css";
import NumbersSlider from "./components/NumbersSlider";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NumbersSlider number={count} />
      <div className="controls">
        <button onClick={() => setCount((count) => Math.max(0, count - 1))}>
          -
        </button>
        <button onClick={() => setCount((count) => count + 1)}>+</button>
        <button onClick={() => setCount(0)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="reset-icon"
          >
            <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
            <path d="M3 3v5h5" />
          </svg>
        </button>
      </div>
    </>
  );
}

export default App;
