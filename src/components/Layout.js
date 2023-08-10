import React from "react";
import { HiOutlineHome, HiSearch } from 'react-icons/hi';
import {MdOndemandVideo} from 'react-icons/md'
import {AiOutlineHeart} from 'react-icons/ai'
import {BsPlusSquare} from 'react-icons/bs'
import {BiUserCircle} from 'react-icons/bi'
import { ReactComponent as Instagram } from "../asset/svg/instagram.svg"
import { ReactComponent as Search } from "../asset/svg/search.svg"
import { ReactComponent as Message } from "../asset/svg/message.svg"
const Layout = (props) => {
  return (
    <div className="flex">
      <div className="flex flex-col h-screen p-3 bg-white shadow w-60">
        <div className="space-y-3">
          <div className="flex items-center">
            <Instagram />
          </div>
          <div className="flex-1">
            <ul className="pt-2 pb-4 space-y-1 text-sm">
              <li className="rounded-sm">
                <a href="{() => false}" className="flex items-center p-2 space-x-3 rounded-md" >
                  <HiOutlineHome className="w-6 h-6"/>
                  <span>홈</span>
                </a>
              </li>
              <li className="rounded-sm">
                <a
                  href="{() => false}"
                  className="flex items-center p-2 space-x-3 rounded-md"
                >
                  <HiSearch className="w-6 h-6"/>
                  <span>검색</span>
                </a>
              </li>
              <li className="rounded-sm">
                <a
                  href="{() => false}"
                  className="flex items-center p-2 space-x-3 rounded-md"
                >
                  <Search className="w-6 h-6"/>
                  <span>탐색 탭</span>
                </a>
              </li>
              <li className="rounded-sm">
                <a
                  href="{() => false}"
                  className="flex items-center p-2 space-x-3 rounded-md"
                >
                  <MdOndemandVideo className="w-6 h-6"/>
                  <span>릴스</span>
                </a>
              </li>
              <li className="rounded-sm">
                <a
                  href="{() => false}"
                  className="flex items-center p-2 space-x-3 rounded-md"
                >
                  <Message className="w-6 h-6"/>
                  <span>메시지</span>
                </a>
              </li>
              <li className="rounded-sm">
                <a
                  href="{() => false}"
                  className="flex items-center p-2 space-x-3 rounded-md"
                >
                  <AiOutlineHeart className="w-6 h-6"/>
                  <span>알림</span>
                </a>
              </li>
              <li className="rounded-sm">
                <a
                  href="{() => false}"
                  className="flex items-center p-2 space-x-3 rounded-md"
                >
                  <BsPlusSquare className="w-6 h-6"/>
                  <span>만들기</span>
                </a>
              </li>
              <li className="rounded-sm">
                <a
                  href="{() => false}"
                  className="flex items-center p-2 space-x-3 rounded-md"
                >
                  <BiUserCircle className="w-6 h-6"/>
                  <span>프로필</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* <div className="container mx-auto mt-12">
        <div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-3">
          <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
            <div className="text-sm font-medium text-gray-500 truncate">
              Total users
            </div>
            <div className="mt-1 text-3xl font-semibold text-gray-900">
              12,00
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Layout;