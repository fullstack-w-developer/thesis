import React, {
  useContext,
  useEffect,
  useState,
} from "react";
import Logo from "./../assests/images/logo.png";
import { CacheProvider } from "@emotion/react";
import {
  cacheRtl,
  CssTextField,
  valifateFormRegister,
} from "../utils/Register";
import ResponsibleSelect from "../components/auth/ResponsibleSelect";
import UploadImage from "./../components/auth/UploadImage"
const EditProfile = ({
  loginPage,
  setLoginPage,
  showSuccessAuth,
  setShowSuccessAuth,
}) => {
  const [file, setFile] = useState([]);
  const [error, setError] = useState("");

  const [formDataRegister, setFormDataRegister] = useState({
    username: "",
    responeible: "",
    password: "",
    repeartPassword: "",
  });

  const onchangeFormData = (e) => {
    const { value, name } = e.target;

    setFormDataRegister({
      ...formDataRegister,
      [name]: value,
    });
  };



 


  const submitForm = (event) => {
    event.preventDefault();
    if (
      valifateFormRegister(file, formDataRegister, setError)
    ) {
     
    }
  };
  return (
    <div>
      <div className="flex-1">
        <div className="flex justify-center  pt-5">
          <img className="w-40 h-24" src={Logo} />
        </div>
        <p className="yekanBold text-center pt-3 text-sm text-gray-700">
          ویرایش پروفایل
        </p>
        <div className="flex justify-center mt-12 items-center">
          <div className="">
            <form onSubmit={submitForm} className="">
              <UploadImage file={file} setFile={setFile} />
              <CacheProvider value={cacheRtl}>
                <div className="flex flex-col gap-7 w-[400px] pt-6">
                  <CssTextField
                    className="ltr"
                    type="text"
                    label="نام کاربری"
                    autoComplete="off"
                    value={formDataRegister.username}
                    name="username"
                    onChange={onchangeFormData}
                  />

                  <ResponsibleSelect
                    value={formDataRegister.responeible}
                    onChange={onchangeFormData}
                    name="responeible"
                  />
                </div>
              </CacheProvider>
              <p className="regular text-xs mt-2 text-red-500">
                {error}
              </p>
              <button className="bg-[#0096f5] border-2 border-white yekanBold mt-14 w-full text-white rounded-lg py-2">
                ویرایش
              </button>
            </form>
            <div className="flex justify-center"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
