import axios from "axios";
import React from "react";

const Card = ({ props, onDelete, onUpdate, progress }) => {
  const del = async () => {
    const res = await axios.delete(`http://localhost:2020/`, {
      data: { key: props.key },
    });
    onDelete(props.key);
  };
  const done = async () => {
    const res = await axios.put(`http://localhost:2020/`, { key: props.key });
    console.log(res);
    onUpdate(props.key);
  };
  return (
    <div className="flex flex-row bg-gray-200 items-center justify-between max-w-[100%] min-h-max rounded-xl p-4 gap-2 duration-300 ease-in-out transition-all grow whitespace-nowrap overflow-hidden text-ellipsis">
      <div className="text-black whitespace-pre-wrap break-words">
        <h1 className="text-2xl uppercase text-orange-500 font-medium">
          {props.title}
        </h1>
        <p className="break-words">{props.description}</p>
      </div>

      <div className="flex flex-col text-xl gap-3">
        {!progress && (
          <button className="" onClick={done}>
            <i className="fa-regular fa-circle-check text-green-500" />
          </button>
        )}
        {progress && (
          <i className="fa-solid fa-check text-[15px] text-white bg-green-500 p-[3px] rounded-[50%]" />
        )}
        <button className="" onClick={del}>
          <i className="fa-solid fa-trash text-red-600"></i>
        </button>
      </div>
    </div>
  );
};

export default Card;
