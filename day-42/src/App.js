import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState();

  const fetchData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    setData(data);
    console.log(data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className=" w-full h-[100%] overflow-hidden flex flex-col justify-center items-center relative">
      <div className="absolute top-0 py-3 bg-cyan-500 w-full text-center font-bold text-4xl shadow-md">
        Hari ॐ
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-28 mb-10 w-[80%]">
        {data.map((item) => (
          <div className="bg-cyan-200 border m-3 rounded-md hover:scale-[1.1] duration-200 hover:shadow-2xl ">
            <div className="p-4">
              <h2 className="font-bold text-lg text-gray-700">{item.title}</h2>
              <p className="text-gray-500">{item.body}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
