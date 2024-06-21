import React, { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

export const Searchbar = () => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const clearInput = () => {
    setInputValue("");
  };

  return (
    <div className="flex items-center bg-gray-100 rounded py-2 px-4 focus-within:ring-2 focus-within:ring-blue-500 w-full">
      <IoSearchSharp className="text-gray-500 mr-2" />
      <input
        type="text"
        placeholder="Search files"
        value={inputValue}
        onChange={handleInputChange}
        className="bg-transparent outline-none text-gray-800 flex-grow"
      />
      {inputValue && (
        <RxCross2
          className="text-gray-500 ml-2 cursor-pointer"
          onClick={clearInput}
        />
      )}
    </div>
  );
};
