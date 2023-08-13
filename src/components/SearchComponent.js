import React, { useState } from "react";
import { ReactComponent as XButton } from "../asset/svg/x-button.svg"
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
    <div className={`search-component fixed inset-y-0 left-0 duration-300 ease-in ${showSearch ? "translate-x-20 " : "translate-x-full hidden"}`}>
      <h2 className={`text-3xl font-semibold p-2 m-1`}> 검색</h2>
      <form onSubmit={handleSearchSubmit} className={`flex flex-col justify-between p-4 bg-white ${showSearch ? "max-w-xs " : ""}`}>
        <div className="relative">
          <input
            type="text"
            placeholder="검색"
            value={searchText}
            onChange={handleSearchChange}
            // onKeyPress={(e) => {
            //   if (e.key === "Enter") {
            //     e.preventDefault();
            //     handleSearchSubmit();
            //   }
            // }}
            className="p-2 pr-10 border rounded-md"
          />
          {searchText && (
            <button
              className="absolute top-0 right-0 p-2"
              onClick={() => setSearchText("")}
            >
              <XButton />
            </button>
          )}
        </div>

        <div className="flex mt-2 space-x-2 h-4">

          <button type="submit" className="bg-blue-500 text-white px-3 py-2 rounded-md">검색</button>
          <button type="button" onClick={onClose} className="bg-gray-300 text-gray-700 px-3 py-2 rounded-md">닫기</button>
        </div>
      </form>
      <div className="border-t-2 border-gray w-full"></div>
    </div>
  );
};

export default SearchComponent;