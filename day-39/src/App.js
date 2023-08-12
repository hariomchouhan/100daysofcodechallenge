import { useState } from "react";
import "./App.css";

function App() {

  const [count, setCount] = useState(0);

  const increaseHandler = () => {
    setCount(count + 1);
  }

  const decreaseHandler = () => {
    setCount(count - 1);
  }
  return <div className="bg-amber-400 w-full h-[100vh] overflow-hidden flex flex-col justify-center items-center relative">
    <div className="absolute top-0 py-3 bg-amber-500 w-full text-center font-bold text-4xl shadow-md">Hari ॐ</div>
      <div className="flex justify-center items-center gap-10 bg-slate-300 rounded-sm px-3 py-2">
        <button onClick={decreaseHandler} className="border-r-2 border-[#7b7474] px-3 py-0 text-4xl flex justify-center items-center"> &minus;</button>
        <div className="text-3xl">{count}</div>
        <button onClick={increaseHandler} className="border-l-2 border-[#7b7474] px-3 py-0 text-4xl flex justify-center items-center">+</button>
      </div>
  </div>;
}

export default App;
