import React, { useState } from "react";
import NameComponent, { FullNameComponent } from "./NameComponent";

function App() {
  const [state, setState] = useState(false);

  const changeHandler = () => {
    setState((prev) => !prev);
  };
  return (
    <div className="w-full h-[100%] overflow-hidden flex flex-col justify-center items-center relative">
      <div className="absolute top-0 py-3 bg-cyan-500 w-full text-center font-bold text-4xl shadow-md text-white">
        Hari ॐ
      </div>
      <div className="text-white text-center flex flex-col justify-center items-center h-[100vh] m-0 bg-[#282c34] w-[100%]">
       <div>Hi, I am App Component.</div>
       <NameComponent name='Hariom' />
       <FullNameComponent surname="Chouhan" />
      </div>
    </div>
  );
}

export default App;
