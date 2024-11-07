import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "katex/dist/katex.min.css"; // Import the CSS file
import { InlineMath, BlockMath } from "react-katex";

function App() {
  const [String, setString] = useState("");
  const [count, setCount] = useState(0);

  const renderMath = (input: string) => {
    // Split the input into parts based on $ and render lateX when found
    const parts = input.replaceAll("\n", "$\\\\$").split(/(\$[^\$]*\$)/g);
    console.log(JSON.stringify(parts));
    return (
      <>
        {parts.map((part, index) => {
          // Check if the part is wrapped in $...$

          if (part.startsWith("$") && part.endsWith("$")) {
            const mathContent = part.slice(1, -1); // Remove the $ from both ends
            return <InlineMath key={index} math={mathContent} />; // Render as laTex
          } else {
            return <span key={index}>{part}</span>; // Return raw text if not in $
          }
        })}
      </>
    );
  };

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <textarea
        onChange={(e) => {
          setString(e.target.value);
        }}
      />
      <div className="output-container">{renderMath(String)}</div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
