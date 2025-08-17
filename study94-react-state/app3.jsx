
import React, { useState } from "react";

export function App() {
  const [nomor, setNomor] = useState(0);

  const increment = () => {
    setNomor(nomor + 1);
  };

  return (
    <div>
      <h1>This is a test</h1>
      <p>Current number : {nomor}</p>
      <button onClick={increment}>Increment</button>
    </div>
  )
}