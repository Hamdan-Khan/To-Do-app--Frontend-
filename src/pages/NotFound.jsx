import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center gap-6 mt-10">
      <h1 className="text-6xl text-center font-semibold">
        ERROR - PAGE NOT FOUND
      </h1>
      <Link
        to={-1}
        className="border-2 bg-black text-white border-black rounded-lg p-2 text-xl"
      >
        Go Back
      </Link>
    </div>
  );
};

export default NotFound;
