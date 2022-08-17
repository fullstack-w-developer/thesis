import React, { useContext, useState } from "react";
import Logo from "./../../assests/images/logo.png";
import { CacheProvider } from "@emotion/react";

import {
  cacheRtl,
  CssTextField,
} from "../../utils/Register";
import { valifateFormLogin } from "../../utils/login";
import { useNavigate } from "react-router-dom";

const Login = ({
  loginPage,
  setLoginPage,
  showSuccessAuth,
  setShowSuccessAuth,
}) => {
  const [error, setError] = useState("");
  const [formDataLogin, setFormDataLogin] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const onchangeFormData = (e) => {
    const { value, name } = e.target;

    setFormDataLogin({
      ...formDataLogin,
      [name]: value,
    });
  };

  const submitForm = (event) => {
    event.preventDefault();
    if (valifateFormLogin(formDataLogin, setError)) {
      setShowSuccessAuth(!showSuccessAuth)
    }
  };
  return (
    <div>
      <div
        className={`fixed flex flex-col items-center top-0    h-screen   transition-all duration-[800ms] bg-white ${
          loginPage
            ? "right-0 -translate-x-[50%] lg:-translate-x-0 w-[50%]"
            : "translate-x-full"
        } `}
      >
        <div className="flex justify-center   mt-20">
          <img className="w-40 h-24" src={Logo} />
        </div>
        <div className="flex justify-center items-center">
          <div className="mt-10">
            <h1 className="yekanBold text-xl text-gray-700 ">
              با سلام !
            </h1>
            <p className="yekanBold text-[13px] text-gray-500 mt-3">
              برای ورود لطفا ایمیل و رمز عبور خود را وارد
              کنید
            </p>

            <form onSubmit={submitForm} className="mt-10">
              <CacheProvider value={cacheRtl}>
                <div className="flex flex-col gap-10 w-[400px]">
                  <CssTextField
                    type="text"
                    className="ltr"
                    label="نام کاربری"
                    value={formDataLogin.username}
                    onChange={onchangeFormData}
                    autoComplete="off"
                    name="username"
                  />
                  <CssTextField
                    className="ltr"
                    type="password"
                    label="رمز عبور"
                    value={formDataLogin.password}
                    onChange={onchangeFormData}
                    autoComplete="off"
                    name="password"
                  />
                </div>
              </CacheProvider>
              <p className="regular text-xs mt-2 text-red-500">
                {error}
              </p>
              <button className="bg-[#0096f5] border-2 border-white yekanBold mt-14 w-full text-white rounded-lg py-2">
                ورود
              </button>
            </form>
            <div className="flex justify-center"></div>
          </div>
        </div>
        <div className="yekanBold text-xs flex justify-center absolute bottom-10 right-0 left-0 gap-2">
          <p>آیا تاکنون ثبت نام نکرده اید ؟</p>
          <p
            onClick={() => setLoginPage(!loginPage)}
            className="text-[#0096f5] underline cursor-pointer"
          >
            ثبت نام
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
