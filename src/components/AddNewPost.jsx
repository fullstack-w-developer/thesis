import { Dialog } from "@mui/material";
import { MdClose } from "react-icons/md";
import { useDropzone } from "react-dropzone";
import { BiCheckDouble } from "react-icons/bi";
import { HiOutlineCloudUpload } from "react-icons/hi";
import React, { useContext, useState } from "react";
import { openNewPostContext } from "../contexts/OpenNewPostContext";

const AddNewPost = () => {
  const { openModalNewPost, setOpenModalNewPost } =
    useContext(openNewPostContext);

  const [file, setFile] = useState([]);
  const [description, setDescription] = useState("");

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
    <img
      className="w-full h-full"
      key={file.name}
      src={file.preview}
      alt="preview"
    />
  ));

  const submitUploadImage = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", file[0]);
    formData.append("description", description);

    if (file.length !== 0) {
    }
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
          <MdClose className="w-5 h-5 text-gray-700" />
        </div>
        {/* form select image */}
        <form
          onSubmit={submitUploadImage}
          className="flex flex-col gap-6  rounded-md px-4 md:px-16"
        >
          <h1 className="text-center text-gray-700 yekanBold lg:text-xl">
            لطفا پست جدید خود را انتخاب کنید
          </h1>

          {/* select image */}
          <div>
            {images.length === 0 ? (
              <div
                {...getRootProps()}
                className="border-2 h-44 flex justify-center items-center flex-col overflow-hidden border-gray-500 rounded-lg border-dashed"
              >
                <input {...getInputProps()} />
                <div className="flex justify-center">
                  <HiOutlineCloudUpload
                    size={35}
                    className="text-gray-700"
                  />
                </div>
                <p className="text-center text-gray-700 regular text-xs pt-2">
                  فایل مورد خود را بکشید، یا کلیک کرده و
                  انتخاب کنید
                </p>
              </div>
            ) : (
              <div className="border-2 h-44 overflow-hidden border-gray-500 rounded-lg border-dashed">
                {images}
              </div>
            )}
          </div>
          {/* description */}
          <div>
            <label
              htmlFor="description"
              className="yekanBold text-xs "
            >
              توضیحات
            </label>
            <textarea
              value={description}
              onChange={(event) =>
                setDescription(event.target.value)
              }
              id="description"
              rows={5}
              className="rounded-lg regular text-xs outline-none p-2 mt-1 w-full resize-none border border-gray-200"
            />
          </div>

          <button
            onClick={() =>
              setOpenModalNewPost(!openModalNewPost)
            }
            className="mb-5 flex justify-center yekanBold bg-gray-500 w-full text-white hover:bg-gray-700 transition-all bold text-sm py-3 rounded-md mt-6"
          >
            آپلود
          </button>
        </form>
      </div>
    </Dialog>
  );
};

export default AddNewPost;
