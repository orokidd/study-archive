// State usage: change background color when clicking button and add outline to the button

import React, { useState } from "react";

const COLORS = ["pink", "green", "blue", "yellow", "purple"];

function App() {
  const [backgroundColor, setBackgroundColor] = useState(COLORS[0]);

  const onButtonClick = (color) => () => {
    setBackgroundColor(color);
  };

  return (
    <div className="App" style={{ backgroundColor }}> 
      {COLORS.map((color) => (

        <button type="button" key={color} onClick={onButtonClick(color)}
          className={backgroundColor === color ? "selected" : ""}>
          {color}
        </button>

      ))}
    </div>
  );
}

export default App;