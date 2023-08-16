import React, { useState } from "react";
import { BiSearchAlt2 } from 'react-icons/bi'
import { ReactComponent as XButton } from "../asset/svg/x-button.svg"
const SearchComponent = ({ onSearch, onClose, showSearch }) => {
  const [searchText, setSearchText] = useState("");
  const [data, setData] = useState([])
  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    if (event.target.value === 'enter') console.log(event);
    event.preventDefault();
    onSearch(searchText);
  };
  const activeEnter = (e) => {
    if (e.key === "Enter") {
      data.push({
        icon: <BiSearchAlt2 className="w-6 h-6" />, text: searchText
      })
    }
  }

  const deleteData = (e) => {
    e.preventDefault();
//삭제 구현해야 함.
  }

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
            onKeyDown={(e) => activeEnter(e)}
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
          {data && data.length > 0 ? data.map((item, index) => (
            <li key={index} className="flex items-center rounded-sm  hover:bg-gray-light">
              <button
                className={`flex flex-1 items-center p-3 space-x-3 rounded-md`}
                onClick={item.onClick}
              >
                <div className="m-1 rounded-full border-solid border p-2">
                  {item.icon}
                </div>
                <span >{item.text}</span>
              </button>

              <button onClick={() => deleteData} className="float-right m-1" >
                <XButton width="2rem" height="2rem" />
              </button>
            </li>
          )) : <div className="text-center translate-y-56">최근 검색 내역 없음.</div>}
        </ul>
      </div>
    </div>
  );
};

export default SearchComponent;