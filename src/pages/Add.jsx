import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
const host = "http://localhost:2020";

const Add = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = async (data) => {
    const { title, description } = data;
    try {
      const res = await axios.post(`${host}/`, {
        title: title,
        description: description,
      });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
    reset();
  };
  return (
    <div className="flex items-center justify-center">
      <form
        className="text-xl flex flex-col items-center justify-center bg-gray-700 p-5 rounded-2xl gap-4 translate-y-[30%] text-white"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="uppercase font-semibold text-[1.75rem]">
          Add a new Task
        </h1>
        <div className="m-2 w-[300px]">
          <label className="m-2">Title</label>
          <input
            type="text"
            {...register("title")}
            id="title"
            className="border border-gray-500 focus:outline-none rounded-md px-3 py-1 w-[300px] text-black"
          />
        </div>
        <div className="m-2 w-[300px]">
          <label className="m-2">Description</label>
          <input
            type="text"
            {...register("description")}
            id="description"
            className="border border-gray-500 focus:outline-none rounded-md px-3 py-1 w-[300px] text-black"
          />
        </div>
        <button className="border-2 border-green-500 text-green-500 rounded-md text-xl px-3 py-[2px] duration-300 my-3 ml-3 mr-auto hover:bg-green-500 hover:text-white">
          Add Task
        </button>
      </form>
    </div>
  );
};

export default Add;
