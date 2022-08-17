import React, { useState } from "react";
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import { FiMoreVertical } from "react-icons/fi";
import { FaRegComment } from "react-icons/fa";
import { IoIosShareAlt } from "react-icons/io";
import { convertEnToPe } from "persian-number";
import { MdDelete } from "react-icons/md";
import MenuDrop from "./MenuDrop";
import { BsWhatsapp } from "react-icons/bs";
import Comments from "./Comment";

const CradPost = ({ post }) => {
  const [like, setLike] = useState({
    like: 0,
    show: false,
  });
  const [comments, setComments] = useState(post.comments);
  const [comment, setComment] = useState("");
  const [showComment, setShowComment] = useState(false);

  const addComment = () => {
    const newComment = {
      imageProfile:
        "https://bestprofilepictures.com/wp-content/uploads/2021/04/Anime-Profile-Picture.jpg",
      username: "سارا محمدی",
      comment: comment,
    };

    const newArr = [...comments, newComment];

    setComments(newArr);
    setComment("");
  };

  return (
    <>
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
          <MenuDrop
            icon={
              <FiMoreVertical className="w-5 h-5 text-gray-500" />
            }
          >
            <div className="yekanBold cursor-pointer hover:bg-gray-100 px-2 py-2 text-xs flex items-center text-gray-500">
              <MdDelete size={20} />
              <p>حذف پست</p>
            </div>{" "}
          </MenuDrop>
        </div>

        {/* image or video */}
        <img
          className="mt-3 rounded-lg w-full h-60 lg:h-72"
          src={post.post}
        />
        {/* comment && like && shere && more option */}
        <div className="flex mt-2 justify-start items-center">
          <div className="flex flex-col items-center">
            {like.show ? (
              <IoMdHeart
                className="w-6 h-6 text-red-500 cursor-pointer"
                onClick={() => {
                  setLike({
                    ...like,
                    show: false,
                    like: 0,
                  });
                }}
              />
            ) : (
              <IoMdHeartEmpty
                className="w-6 h-6 cursor-pointer"
                onClick={() => {
                  setLike({
                    ...like,
                    show: true,
                    like: 1,
                  });
                }}
              />
            )}
          </div>
          <FaRegComment
            onClick={() => setShowComment(!showComment)}
            className="w-5 h-5 mr-2 cursor-pointer"
          />
          <MenuDrop
            icon={<IoIosShareAlt className="w-5 h-5" />}
          >
            <a
              href={`https://web.whatsapp.com/send?text=http:localhost:3000`}
              className="flex items-center yekanBold text-xs hover:bg-gray-100 px-2 py-2"
            >
              <BsWhatsapp className="w-5 h-5 text-green-600" />
              <span className="mx-2">واتساپ</span>
            </a>
          </MenuDrop>
        </div>
        <span className="text-xs yekanBold">
          {convertEnToPe(like.like)} پسند
        </span>
        {/* description */}
        <div className="yekanBold text-xs mt-2">
          <p className="text-sm text-gray-700">توضیحات:</p>
          <p className="pt-1 text-gray-600 text-justify">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
            صنعت چاپ و با استفاده از طراحان گرافیک است
            چاپگرها و متون بلکه روزنامه و مجله در ستون و
            سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی
            مورد نیاز و کاربردهای متنوع با هدف بهبود
            ابزارهای کاربردی می باشد
          </p>
        </div>

        {/* add new comment */}
        <div className="pt-6 flex gap-2 items-center">
          <img
            className="rounded-full w-8 h-8"
            src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
          />
          <div className="flex-1 flex bg-gray-100 px-2 rounded-lg py-3">
            <input
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className=" w-full text-xs regular bg-transparent outline-none"
              placeholder="لطفا نظر خود را بنویسید..."
            />
            <button
              onClick={addComment}
              className="yekanBold text-[#0096f5] text-xs px-1"
            >
              ارسال
            </button>
          </div>
        </div>
      </div>
      <Comments
        showComment={showComment}
        setShowComment={setShowComment}
        comments={comments}
      />
    </>
  );
};

export default CradPost;
