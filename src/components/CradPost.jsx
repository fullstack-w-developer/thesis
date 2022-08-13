import React, { useState } from "react";
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import { FiMoreVertical } from "react-icons/fi";
import { FaRegComment } from "react-icons/fa";
import { IoIosShareAlt } from "react-icons/io";
import { convertEnToPe } from "persian-number";

const CradPost = ({ post }) => {
  const [like, setLike] = useState(false);
  const [showComment, setShowComment] = useState(false);

  return (
    <div className="shadow-sm  rounded-lg border-[1.5px] p-4 border-gray-100">
      <div className="flex justify-between items-center">
        <div className="flex gap-3 items-center">
          <img
            className="rounded-full w-9 h-9 lg:w-12 lg:h-12"
            src={post.imageProfile}
          />
          <div className="flex flex-col gap-2">
            <p className="yekanBold text-xs lg:text-sm">
              {post.username}
            </p>
            <p className="regular text-[0.60rem] lg:text-xs">
              {post.responsible === "master"
                ? "استاد"
                : "دانشجو"}
            </p>
          </div>
        </div>
        <FiMoreVertical className="w-5 h-5 lg:w-8 lg:h-6 text-gray-700" />
      </div>

      {/* image or video */}
      <img
        className="mt-3 rounded-lg w-full h-60 lg:h-72"
        src={post.post}
      />
      {/* comment && like && shere && more option */}
      <div className="flex mt-2 justify-between items-center">
        <div className="flex  gap-3 text-gray-700">
          <div className="flex flex-col items-center">
            {like ? (
              <IoMdHeart
                className="w-6 h-6 text-red-500 cursor-pointer"
                onClick={() => setLike(!like)}
              />
            ) : (
              <IoMdHeartEmpty
                className="w-6 h-6 cursor-pointer"
                onClick={() => setLike(!like)}
              />
            )}
          </div>
          <FaRegComment className="w-5 h-5" />

          <IoIosShareAlt className="w-5 h-5" />
        </div>
        <FiMoreVertical className="text-gray-700 w-5 h-5 rotate-90" />
      </div>
      <span className="text-xs yekanBold">
        {convertEnToPe(post.likes)} پسند
      </span>
      {/* last comment */}
      <div className="block border-b pb-3 border-dashed mt-3">
        <div className="flex gap-2 items-center">
          <img
            className="rounded-full w-8 h-8"
            src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
          />
          <p className="text-xs regular">سارا رحیمی</p>
        </div>
        <p className="text-xs regular pt-1">
          هنر زیبا و قشنگه، آدم حیرت زده میشه همچنین هنر های
          خارق العاده رو می بینه، دستتون درد نکنه برای تلاش
          های بی وفقه ما،اممیدوار همیشه سربلند و موفق باشید
        </p>
      </div>

      {/* add new comment */}
      <div className="pt-4 flex gap-2 items-center">
        <img
          className="rounded-full w-8 h-8"
          src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
        />
        <div className="flex-1 flex bg-gray-100 px-2 rounded-lg py-3">
          <input
            className=" w-full text-xs regular bg-transparent outline-none"
            placeholder="لطفا نظر خود را بنویسید..."
          />
          <button className="yekanBold text-[#0096f5] text-xs px-1">
            ارسال
          </button>
        </div>
      </div>
    </div>
  );
};

export default CradPost;
