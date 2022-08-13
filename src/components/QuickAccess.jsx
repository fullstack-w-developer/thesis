import React from "react";
import { FaUserGraduate } from "react-icons/fa";
import { GiTeacher } from "react-icons/gi";
import { AiFillLike } from "react-icons/ai";
const QuickAccess = () => {
  return (
  
      <div className="hidden lg-block px-10 bg-gray-100 ">
        <ul className="yekanBold flex  text-xs gap-10 container_menu_category">
          <li>
            <GiTeacher className="text-gray-500"/>
            <span>پروژه‌ی استادان</span>
          </li>
          <li>
            <FaUserGraduate className="text-gray-400" />
            <span>پروژه‌ی دانشجو‌ها</span>
          </li>
          <li>
            <AiFillLike className="text-red-500/75"/>
            <span>پروژه های پسند شده</span>
          </li>
        </ul>
      </div>

  );
};

export default QuickAccess;
