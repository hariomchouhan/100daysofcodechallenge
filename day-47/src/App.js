import React, { useState } from "react";

function App() {

  const [text, setText] = useState('Click Me');
  const changeHandler = (event) => {
    console.log(event.target.value);
  }

  const clickHandler = () => {
    setText("Clicked!")
  }
  return (
    <div>
      <input type="text" onChange={changeHandler} />
      <button onClick={clickHandler}>{text}</button>
    </div>
  );
}

export default App;
