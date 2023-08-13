import { useState } from "react";
import "./App.css";

function App() {

  const [name, setName] = useState('Hariom Chouhan');

  const changeHandler = (event) => {
    setName(event.target.value);
  }

  return <div className="bg-green-500 w-full h-[100vh] overflow-hidden flex flex-col justify-center items-center relative">
    <div className="absolute top-0 py-3 bg-green-700 w-full text-center font-bold text-4xl shadow-md">Hari ॐ</div>
      <div className="flex flex-col justify-center items-center gap-10 rounded-sm px-3 py-2">
        <p className="text-2xl">🙏</p>
       <input type="text" value={name} onChange={changeHandler} className="outline-none border-2 border-green-800 rounded-md px-4 py-2 tracking-wide"/>
       <p className="text-2xl tracking-wide">WelCome, <span className="text-red-600 font-bold">{name}</span>.</p>
      </div>
  </div>;
}

export default App;
