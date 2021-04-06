import React, { useState, useEffect } from "react";
import "./App.css";
function App() {
  // Create the count state.
  const [count, setCount] = useState(0);
  // Update the count (+1 every second).
  useEffect(() => {
    const timer = setTimeout(() => setCount(count + 1), 1000);
    return () => clearTimeout(timer);
  }, [count, setCount]);
  // Return the App component.
  return (
    <div className="App">
      <div className="App-header">
        <img className="App-logo rotate" src="assets/reactjs-logo.svg" alt="" />
        <img className="App-logo" src="assets/snowpack-logo.png" alt="" />
      </div>
    </div>
  );
}

export default App;
