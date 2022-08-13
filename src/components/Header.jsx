import React, { useContext, useState } from "react";
import Logo from "./../assests/images/logo.png";
import HeaderLeft from "./HeaderLeft";
import {BsSearch} from "react-icons/bs"
import { MdAddPhotoAlternate } from "react-icons/md";
import { openNewPostContext } from "../contexts/OpenNewPostContext";
const Header = () => {
  const { openModalNewPost, setOpenModalNewPost } =
    useContext(openNewPostContext);

  return (
    <header className="sticky top-0 bg-white z-50 flex justify-between items-center lg:mt-3 px-2 lg:px-10 py-2 lg:py-0 lg:h-[80px] shadow-sm">
      {/*header  right */}
      <div className="flex flex-1 items-center gap-8">
        <img className="w-20 h-10" src={Logo} />
        <div className="hidden lg:flex bg-[#F0F0F1] flex-1 py-[0.70rem] rounded-lg px-2">
          <BsSearch className="text-gray-600 w-5 h-5" />
          <input
            className="yekanBold w-full text-sm bg-transparent px-2 outline-none placeholder:text-xs txet-[#222f3e]"
            type="text"
            placeholder="لطفا پروژه یا شخص مورد نظر خود را جستجو کنید"
          />
        </div>
      </div>
      <div
        onClick={() =>
          setOpenModalNewPost(!openModalNewPost)
        }
        className="lg:hidden"
      >
        <div className="border cursor-pointer border-gray-200 flex justify-center items-center rounded-full shadow-sm w-10 h-10">
          <MdAddPhotoAlternate className="w-5 h-5 text-gray-600" />
        </div>
      </div>
      {/* header left */}
      <HeaderLeft />
    </header>
  );
};

export default Header;
