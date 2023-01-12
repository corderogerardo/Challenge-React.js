import React from "react";
import Arrow from "../images/Arrow";

const Button = ({ title, handleSubmit, onSubmit }) => {
  return (
    <div className="text-center mt-6">
      <button
        className="bg-[#2991E0] flex text-white active:bg-[#2991E0]-200 text-sm font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full flex-row align-center justify-center"
        type="button"
        style={{ transition: "all .15s ease" }}
        onClick={handleSubmit(onSubmit)}
      >
        <div className="flex flex-row align-center self-center justify-around justify-self-center w-19 ">
          {title}
        </div>
        <div className="flex flex-row align-center self-center justify-around justify-self-center h-3 w-10">
          <Arrow />
        </div>
      </button>
    </div>
  );
};

export default Button;
