import React, { useState } from 'react';

function App() {
  
  const [state, setState] = useState(false);

  const changeHandler = () => {
    setState(prev => !prev)
  }
  return (
    <div className="w-full h-[100%] overflow-hidden flex flex-col justify-center items-center relative">
    <div className="absolute top-0 py-3 bg-cyan-500 w-full text-center font-bold text-4xl shadow-md text-white">
        Hari ॐ
      </div>
<div className="text-center flex justify-center items-center h-[100vh] m-0 bg-[#282c34] w-[100%]">
  <div className='flex flex-col gap-5 text-white bg-[#2e9cca] px-16 py-4 rounded-xl'>

  {
    state === true ? <p className='text-3xl font-semibold'>I am True</p> : <p className='text-3xl font-semibold'>I am False</p>
  }
  <button className='text-3xl font-semibold border-2  rounded-md px-3 py-1 hover:text-[#2e9cca] hover:bg-white' onClick={changeHandler}>Change Me</button>
  </div>
</div>
</div>
  );
}

export default App;