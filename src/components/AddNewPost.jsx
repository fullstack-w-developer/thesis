import { Dialog } from "@mui/material";
import { MdClose } from "react-icons/md";
import { useDropzone } from "react-dropzone";
import { BiCheckDouble } from "react-icons/bi";
import { HiOutlineCloudUpload } from "react-icons/hi";

import React, { useContext, useState } from "react";
import { openNewPostContext } from "../contexts/OpenNewPostContext";

const AddNewPost = () => {
  const [file, setFile] = useState([]);
  const { openModalNewPost, setOpenModalNewPost } =
    useContext(openNewPostContext);

  // use pakeage for set file
  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      setFile(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  // image preview when user selected file
  const images = file.map((file) => (
    <div
      key={file.name}
      className="flex items-center justify-between"
    >
      <div className="flex items-center">
        <img
          className="p-1"
          src={file.preview}
          style={{ width: "50px", height: "40px" }}
          alt="preview"
        />
        <span className="regular text-xs pt-1">
          {file.name}
        </span>
      </div>
      <BiCheckDouble size={20} color="#20bf6b" />
    </div>
  ));

  // submit form
  const submitUploadImage = (e) => {
    e.preventDefault();

    setOpenModalNewPost(!openModalNewPost);

    // const formData = new FormData();
    // formData.append("image", file[0]);
  };
  return (
    <Dialog
      fullWidth={true}
      maxWidth="sm"
      open={openModalNewPost}
      onClose={() => setOpenModalNewPost(!openModalNewPost)}
    >
      <div>
        {/* btn Close */}
        <div
          onClick={() =>
            setOpenModalNewPost(!openModalNewPost)
          }
          className="flex m-2 cursor-pointer justify-center items-center w-9 h-9 rounded-full hover:bg-gray-100"
        >
          <MdClose  className="w-5 h-5 text-gray-700" />
        </div>
        {/* form select image */}
        <form
          onSubmit={submitUploadImage}
          className="flex flex-col gap-6  rounded-md px-4 md:px-28 md:py-10"
        >
          <h1 className="text-center text-gray-700 yekanBold lg:text-xl">
            لطفا پست جدید خود را انتخاب کنید
          </h1>
          <div
            {...getRootProps()}
            className="border-2 border-gray-500 rounded-lg border-dashed p-12 mt-8"
          >
            <input {...getInputProps()} />
            <div className="flex justify-center">
              <HiOutlineCloudUpload
                size={35}
                className="text-gray-700"
              />
            </div>
            <p className="text-center text-gray-700 regular text-xs pt-2">
              فایل مورد خود را بکشید، یا کلیک کرده و انتخاب
              کنید
            </p>
          </div>
          <div className="border rounded-lg  px-2 py-1">
            {images.length === 0 ? (
              <div
                className="bg-gray-200"
                style={{ width: "50px", height: "40px" }}
              ></div>
            ) : (
              images
            )}
          </div>
          <button className="mb-5 flex justify-center yekanBold bg-gray-500 w-full text-white hover:bg-gray-700 transition-all bold text-sm py-3 rounded-md mt-6">
            {/* {imageUpload.isLoading ? (
                <IsLoading type="bars" />
              ) : (
                "تائید"
              )} */}
            آپلود
          </button>
        </form>
      </div>
    </Dialog>
  );
};

export default AddNewPost;
