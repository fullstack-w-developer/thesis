import React, {
  useContext,
  useEffect,
  useState,
} from "react";
import Logo from "./../../assests/images/logo.png";
import { CacheProvider } from "@emotion/react";

import UploadImage from "./UploadImage";
import {
  cacheRtl,
  CssTextField,
  valifateFormRegister,
} from "../../utils/Register";
import { FormControl, Select } from "@mui/material";
import ResponsibleSelect from "./ResponsibleSelect";

const Register = ({
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
      setShowSuccessAuth(!showSuccessAuth)
    }
  };
  return (
    <div
      className={`fixed  flex flex-col items-center top-0    h-screen   transition-all duration-[800ms] bg-white ${
        loginPage
          ? "translate-x-full"
          : "right-0 -translate-x-[50%] lg:-translate-x-0 w-[50%] "
      } `}
    >
      <div className="flex-1">
        <div className="flex justify-center  pt-5">
          <img className="w-40 h-24" src={Logo} />
        </div>
        <p className="yekanBold text-center pt-3 text-sm text-gray-700">
          لطفا جهت ثبت نام فرم زیر را تکمیل کنید
        </p>
        <div className="flex justify-center items-center">
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
                  <CssTextField
                    className="ltr"
                    type="password"
                    label="رمز عبور"
                    autoComplete="off"
                    value={formDataRegister.password}
                    name="password"
                    onChange={onchangeFormData}
                  />
                  <CssTextField
                    className="ltr"
                    type="password"
                    label="تکرار رمز عبور"
                    autoComplete="off"
                    value={formDataRegister.repeartPassword}
                    name="repeartPassword"
                    onChange={onchangeFormData}
                  />
                </div>
              </CacheProvider>
              <p className="regular text-xs mt-2 text-red-500">
                {error}
              </p>
              <button className="bg-[#0096f5] border-2 border-white yekanBold mt-14 w-full text-white rounded-lg py-2">
                ثبت نام
              </button>
            </form>
            <div className="flex justify-center"></div>
          </div>
        </div>
        <div className="yekanBold text-xs flex justify-center  pt-5 gap-2">
          <p>آیا قبلا ثبت نام کرده اید ؟</p>
          <p
            onClick={() => setLoginPage(!loginPage)}
            className="text-[#0096f5] underline cursor-pointer"
          >
            ورود
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
