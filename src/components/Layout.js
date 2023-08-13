import React, { useState } from "react";
import { HiOutlineHome, HiSearch } from 'react-icons/hi';
import { MdOndemandVideo } from 'react-icons/md'
import { AiOutlineHeart, AiOutlineMenu } from 'react-icons/ai'
import { BsPlusSquare } from 'react-icons/bs'
import { BiUserCircle } from 'react-icons/bi'
import { ReactComponent as Instagram } from "../asset/svg/instagram.svg"
import { ReactComponent as InstagramIcon } from "../asset/svg/instagram-icon.svg"
import { ReactComponent as Search } from "../asset/svg/search.svg"
import { ReactComponent as Message } from "../asset/svg/message.svg"
import SearchComponent from "./SearchComponent";
import { useNavigate } from "react-router-dom";


const Layout = (props) => {
  const [showSearch, setShowSearch] = useState(false);
  // const [sidebarExpanded, setSidebarExpanded] = useState(true);

  const handleSearchToggle = () => {
    setShowSearch(!showSearch);
    // setSidebarExpanded(!showSearch);
  };
  const handleSearch = (searchText) => {
    // Perform the actual search logic here
    console.log("Searching for:", searchText);
  };

  const navigate = useNavigate();
  const goHome = () => {
    setShowSearch(false)
    navigate('/');
  }
  const navigationItems = [
    { icon: <HiOutlineHome className="w-6 h-6" />, text: "홈", onClick: goHome },
    { icon: <HiSearch className="w-6 h-6" />, text: "검색", onClick: handleSearchToggle },
    { icon: <Search className="w-6 h-6" />, text: "탐색 탭", onClick: null },
    { icon: <MdOndemandVideo className="w-6 h-6" />, text: "릴스", onClick: null },
    { icon: <Message className="w-6 h-6" />, text: "메시지", onClick: null },
    { icon: <AiOutlineHeart className="w-6 h-6" />, text: "알림", onClick: null },
    { icon: <BsPlusSquare className="w-6 h-6" />, text: "만들기", onClick: null },
    { icon: <BiUserCircle className="w-6 h-6" />, text: "프로필", onClick: null },
  ];

  return (

    <div className="flex">
      <div className={`overflow-hidden bg-white duration-300 ease-in-out ${showSearch ? "w-20" : "w-60"} shadow h-screen p-3`}>
        <div className="space-y-3">
          <div className="flex items-center p-3 space-x-3 m-1">
            {!showSearch ? <Instagram /> : <InstagramIcon />}
          </div>
          <div className="flex-1 container">
            <ul className="pt-2 pb-4 space-y-1 text-md">
              {navigationItems.map((item, index) => (
                <li key={index} className="flex items-center rounded-sm">
                  <button
                    className={`flex flex-1 items-center p-3 space-x-3 rounded-md hover:bg-gray-light`}
                    onClick={item.onClick}
                  >
                    <div className="m-1">
                      {item.icon}
                    </div>
                    {!showSearch ? (
                      <span >{item.text}</span>
                    ) : (
                      null
                    )}
                  </button>
                </li>
              ))}
            </ul>

          </div>
          <div className="fixed bottom-3">
            <div className="flex items-center rounded-sm">
              <button
                className={`flex flex-1 items-center p-3 space-x-3 rounded-md hover:bg-gray-light w-48`}
              >
                <div className="m-1">
                  <AiOutlineMenu className="w-6 h-6" />
                </div>
                {!showSearch ? (
                  <span >{'더 보기'}</span>
                ) : (
                  null
                )}
              </button>
            </div>
          </div>

        </div>
      </div>
      <div className={`container mx-auto mt-12`}>
        <div className={`duration-300 ease-in-out`}>
          <SearchComponent showSearch={showSearch} onSearch={handleSearch} onClose={handleSearchToggle} />
        </div>
      </div>

    </div>
  );
};

export default Layout;