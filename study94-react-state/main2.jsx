// setNomor(nomor + 1) = setNomor(2),setNomor(3),setNomor(4),etc

import React, { useState } from "react";

export function App() {
  const [nomor, setNomor] = useState(0);

  return (
    <div>
      <h1>This is a test</h1>
      <p>Current number : {nomor}</p>
      <button onClick={() => setNomor(nomor + 1)}>Increment</button>
    </div>
  )
}