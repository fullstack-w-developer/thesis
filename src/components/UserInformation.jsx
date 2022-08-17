import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import { FaRegComment } from "react-icons/fa";
import { MdAddPhotoAlternate } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import {Link} from "react-router-dom"
const UserInformation = () => {
  return (
    <div className="flex flex-col ">
      <div className="  ">
        {/* avaatar */}
        <div className="w-full  rounded-t-lg relative h-48 bg-no-repeat bg-cover bg-[url('https://images.unsplash.com/photo-1540228232483-1b64a7024923?ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80')]">
          <div className="absolute -bottom-7 left-4">
            <img
              className="w-24 h-24  rounded-full border-4 shadow-lg"
              src="https://demos.creative-tim.com/impact-design-system-pro/docs/assets/img/team/6.jpg"
            />
          </div>
        </div>
        <div className="px-4">
          <div className="flex pt-10 text-gray-700 items-center justify-between">
            <h2 className=" yekanBold text-lg ">
              مهدی شریفلو
            </h2>
            <Link to="/edit/profile">
              <FiEdit
                className="cursor-pointer"
                size={20}
              />
            </Link>
          </div>
          <div className="flex justify-between mt-14 text-gray-700 yekanBold text-sm">
            {/* project */}
            <div className="flex flex-col gap-2 items-center">
              <span className="regular">پروژه‌ها</span>
              <span className="text-lg ">۱۲</span>
              <AccountTreeIcon className="text-[#a5b1c2]" />
            </div>
            {/* likes */}
            <div className="flex flex-col gap-2 items-center">
              <span className="regular">کامنت ها</span>
              <span className="text-lg">۱۳</span>
              <FaRegComment size={22} />
            </div>
            {/* count like */}
            <div className="flex flex-col gap-2 items-center">
              <span className="regular">تعداد لایک</span>

              <span className="text-md">۲۳ </span>

              <FavoriteIcon className="text-red-500" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInformation;
