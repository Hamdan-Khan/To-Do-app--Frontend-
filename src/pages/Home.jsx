import React, { lazy, Suspense, useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import Card from "../components/Card";
const host = "http://localhost:2020";
import axios from "axios";

const Card = lazy(() => import("../components/Card"));

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [completed, setCompleted] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`${host}/`);
      const data = response.data;
      setTasks(data.filter((x) => x.progress == false));
      setCompleted(data.filter((x) => x.progress == true));
    };
    fetchData();
  }, []);

  const handleDelete = (id) => {
    setTasks(tasks.filter((x) => x._id !== id));
    setCompleted(completed.filter((x) => x._id !== id));
  };

  const handleUpdate = (id) => {
    setCompleted([...completed, ...tasks.filter((x) => x._id == id)]);
    setTasks(tasks.filter((x) => x._id !== id));
  };
  const noTasks = !((tasks.length > 0) | (completed.length > 0));
  return (
    <>
      {noTasks && (
        <div className="bg-gray-800 p-7 m-7 rounded-3xl flex items-center justify-center flex-col">
          <h1 className="my-6 text-3xl text-center font-semibold text-green-500">
            WELCOME TO e-ASSISTANT <br />
            SCHEDULE YOUR TASKS AND KEEP A RECORD OF THEM!
          </h1>
          <Link
            to={"/add"}
            className="border-2 border-green-500 text-green-500 rounded-md text-2xl px-3 py-1 duration-300 my-3 ml-3 hover:bg-green-500 hover:text-white font-semibold text-center"
          >
            ADD NEW TASK
          </Link>
        </div>
      )}
      {!noTasks && (
        <>
          <div className="bg-gray-800 p-7 m-7 rounded-3xl">
            {tasks.length > 0 ? (
              <>
                <h1 className="my-3 text-3xl text-center font-semibold text-white">
                  PENDING TASKS:
                </h1>
                <Suspense
                  fallback={
                    <div className="text-white text-5xl">LOADING .....</div>
                  }
                >
                  <div className="flex gap-3 flex-wrap duration-200 ease-in-out transition-all">
                    {tasks.map((x) => {
                      const { title, description, _id, progress } = x;
                      return (
                        <Card
                          key={_id}
                          props={{
                            title: title,
                            description: description,
                            key: _id,
                            progress: progress,
                          }}
                          onDelete={handleDelete}
                          onUpdate={handleUpdate}
                          progress={false}
                        />
                      );
                    })}
                  </div>
                </Suspense>
              </>
            ) : (
              <h1 className="my-6 text-3xl text-center font-semibold text-green-600">
                NO PENDING TASKS{" "}
                <i className="fa-solid fa-check text-white bg-green-500 p-[2px] rounded-[50%]" />
              </h1>
            )}
          </div>

          <div className="bg-gray-800 p-7 m-7 rounded-3xl">
            {completed.length > 0 ? (
              <>
                <h1 className="my-3 text-3xl text-center font-semibold text-white">
                  COMPLETED TASKS:
                </h1>
                <Suspense
                  fallback={
                    <div className="text-white text-3xl">LOADING .....</div>
                  }
                >
                  <div className="flex gap-3 flex-wrap duration-200 ease-in-out transition-all">
                    {completed.map((x) => {
                      const { title, description, _id, progress } = x;
                      return (
                        <Card
                          key={_id}
                          props={{
                            title: title,
                            description: description,
                            key: _id,
                            progress: progress,
                          }}
                          onDelete={handleDelete}
                          progress={true}
                        />
                      );
                    })}
                  </div>
                </Suspense>
              </>
            ) : (
              <h1 className="my-6 text-3xl text-center font-semibold text-yellow-600">
                NO TASKS COMPLETED CURRENTLY{" "}
                <i className="fa-solid fa-multiply text-white bg-yellow-500 py-1 px-2 rounded-[50%]" />
              </h1>
            )}
          </div>
        </>
      )}
      <Link
        to="/add"
        className="rounded-[50%] px-2 py-1 bg-green-500 text-5xl text-white fixed right-12 bottom-12 hover:bg-green-600 duration-300"
      >
        <i className="fa-regular fa-add"></i>
      </Link>
    </>
  );
};

export default Home;
