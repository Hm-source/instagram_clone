import React, { useState } from "react";
import { HiOutlineHome, HiSearch } from 'react-icons/hi';
import { MdOndemandVideo } from 'react-icons/md'
import { AiOutlineHeart } from 'react-icons/ai'
import { BsPlusSquare } from 'react-icons/bs'
import { BiUserCircle } from 'react-icons/bi'
import { ReactComponent as Instagram } from "../asset/svg/instagram.svg"
import { ReactComponent as Search } from "../asset/svg/search.svg"
import { ReactComponent as Message } from "../asset/svg/message.svg"
import SearchComponent from "./SearchComponent"; 


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
  const navigationItems = [
    { icon: <HiOutlineHome className="w-6 h-6" />, text: "홈", onClick: handleSearchToggle },
    { icon: <HiSearch className="w-6 h-6" />, text: "검색" ,onClick: handleSearchToggle},
    { icon: <Search className="w-6 h-6" />, text: "탐색 탭", onClick: handleSearchToggle },
    { icon: <MdOndemandVideo className="w-6 h-6" />, text: "릴스", onClick: handleSearchToggle },
    { icon: <Message className="w-6 h-6" />, text: "메시지", onClick: handleSearchToggle },
    { icon: <AiOutlineHeart className="w-6 h-6" />, text: "알림" , onClick: handleSearchToggle},
    { icon: <BsPlusSquare className="w-6 h-6" />, text: "만들기", onClick: handleSearchToggle },
    { icon: <BiUserCircle className="w-6 h-6" />, text: "프로필" , onClick: handleSearchToggle},
  ];
  
  return (
    <div className="flex">
      {/* w-${sidebarExpanded ? "60" : "60"} */}
     <div className={`overflow-hidden bg-white w-40 shadow h-screen p-3`}>
        <div className="space-y-3">
          <div className="flex items-center">
            <Instagram />
          </div>
          <div className="flex-1">
            <ul className="pt-2 pb-4 space-y-1 text-sm">
              {navigationItems.map((item, index) => (
                <li key={index} className="rounded-sm">
                  <button
                    className="flex items-center p-2 space-x-3 rounded-md"
                    onClick={item.onClick}
                  >
                    {item.icon}
                    <span>{item.text}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="container mx-auto mt-12">
        {showSearch ? (
          <SearchComponent showSearch={showSearch} onSearch={handleSearch} onClose={handleSearchToggle} />
        ) : (
          <div>
            {/* Your main content */}
          </div>
        )}
      </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;