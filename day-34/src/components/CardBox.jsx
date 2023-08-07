import React from "react";

const CardBox = (props) => {
  let data = props.cardData;
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {data.map((item, index) => (
        <div key={index} className="m-3 border-4 p-[1rem] bg-slate-200 rounded-md text-lg">
          <h2><span className="font-bold">Name: </span>{item.name}</h2>
          <p><span className="font-bold">City: </span>{item.city}</p>
          <p><span className="font-bold">State: </span>{item.state}</p>
        </div>
      ))}
    </div>
  );
};

export default CardBox;
