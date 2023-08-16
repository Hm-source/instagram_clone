import React, { useState } from "react";
import { BiSearchAlt2 } from 'react-icons/bi'
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
  const data = [
    {
      icon: <BiSearchAlt2 className="w-6 h-6" />, text: '케이스'
    },
    {
      icon: <BiSearchAlt2 className="w-6 h-6" />, text: '에어팟'
    },
    {
      icon: <BiSearchAlt2 className="w-6 h-6" />, text: '아이폰'
    }
  ]

  return (
    <div className={`search-component fixed w-72 inset-y-0 left-0 duration-300 ease-in ${showSearch ? "translate-x-20" : "hidden"}`}>
      <h2 className={`text-2xl font-semibold p-5`}> 검색</h2>
      <form onSubmit={handleSearchSubmit} className={`flex flex-col justify-between p-4 bg-white`}>
        <div className="relative">
          <input
            type="text"
            placeholder="검색"
            value={searchText}
            onChange={handleSearchChange}
            className="p-2 rounded-md drop-shadow-md w-64 bg-gray-light"
          />
          {searchText && (
            <button
              className="absolute top-0 right-0 p-2"
              onClick={() => setSearchText("")}
            >
              <XButton width="1.5rem" height="1.5rem" />

            </button>
          )}

        </div>

        {/* <div className="flex mt-2 space-x-2 h-4">

          <button type="submit" className="bg-blue-500 text-white px-3 py-2 rounded-md">검색</button>
          <button type="button" onClick={onClose} className="bg-gray-300 text-gray-700 px-3 py-2 rounded-md">닫기</button>
        </div> */}
      </form>
      <div className="border-t-2 border-gray-light w-full"></div>
      <div>
        <div className={`text-lg font-semibold p-5`}>
          {'최근 검색 항목'}
        </div>
        <ul className="pt-2 pb-4 space-y-1 text-md">
          {data.map((item, index) => (
            <li key={index} className="flex items-center rounded-sm">
              <button
                className={`flex flex-1 items-center p-3 space-x-3 rounded-md hover:bg-gray-light`}
                onClick={item.onClick}
              >
                <div className="m-1">
                  {item.icon}
                </div>
                  <span >{item.text}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SearchComponent;