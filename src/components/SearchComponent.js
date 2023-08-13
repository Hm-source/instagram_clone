import React, { useState } from "react";

const SearchComponent = ({ onSearch, onClose, showSearch }) => {
  const [searchText, setSearchText] = useState("");

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    onSearch(searchText);
  };

  return (
    <div className={`search-component fixed inset-y-0 left-0 duration-300 ease-in ${showSearch ? "translate-x-20 " : "translate-x-full"}`}>
      <form onSubmit={handleSearchSubmit} className={`h-full flex flex-col justify-center p-4 bg-white ${showSearch ? "max-w-xs " : "hidden"}`}>
        <input
          type="text"
          placeholder="검색"
          value={searchText}
          onChange={handleSearchChange}
          className="p-2 border rounded-md"
        />
        <div className="flex mt-2 space-x-2">
          <button type="submit" className="bg-blue-500 text-white px-3 py-2 rounded-md">검색</button>
          <button type="button" onClick={onClose} className="bg-gray-300 text-gray-700 px-3 py-2 rounded-md">닫기</button>
        </div>
      </form>
    </div>
  );
};

export default SearchComponent;