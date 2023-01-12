import React from "react";

const Input = ({ register, name, type, error }) => {
  return (
    <div className="relative w-full mb-3">
      <label
        className="block uppercase text-gray-700 text-xs font-bold mb-2"
        htmlFor="grid-password"
      >
        {name}
      </label>
      <input
        {...register(name)}
        type={type}
        className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
        placeholder={name}
        style={{ transition: "all .15s ease" }}
      />
      <p className="text-red-500 text-sm">{error}</p>
    </div>
  );
};

export default Input;
