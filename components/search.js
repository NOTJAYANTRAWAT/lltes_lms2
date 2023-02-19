import React, { useState } from "react";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Search Term: ${searchTerm}`);
  };

  return (
    <form onSubmit={handleSubmit} className="w-64 mx-auto my-10">
      <div className="relative">
        <input
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          className=" w-full bg-[#e8f1f2] text-[#7F56D9] rounded-md py-2 pl-10 
          focus:outline-none focus:shadow-outline border border-[#7F56D9] w-100 h-100"
          placeholder="Want to learn ?"
        />
        <button
          type="submit"
          className="absolute right-0 top-0 mt-3 mr-4"
        >
          <svg
            className="object-left fill-current text-[#7F56D9] h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
          </svg>
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
