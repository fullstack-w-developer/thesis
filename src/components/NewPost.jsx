import {useContext} from "react";
import { MdAddPhotoAlternate } from "react-icons/md";
import { openNewPostContext } from "../contexts/OpenNewPostContext";

const NewPost = () => {
  const {openModalNewPost,setOpenModalNewPost} = useContext(openNewPostContext)
  const handleClickPost = ()=>{
    setOpenModalNewPost(!openModalNewPost)
  }
  return (
    <div onClick={handleClickPost} className="flex cursor-pointer flex-col items-center justify-center mt-5">
      <div className="w-20 h-20  rounded-full border  flex justify-center items-center shadow-sm">
        <MdAddPhotoAlternate className="w-16 text-gray-300 h-16" />
      </div>
      <p className="regular pt-2 text-[#0096f5] text-xs">
        اضافه کردن پست جدید
      </p>
    </div>
  );
};

export default NewPost;
