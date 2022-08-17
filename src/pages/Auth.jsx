import React from "react";
import { useState } from "react";
import Login from "../components/auth/Login";
import Register from "../components/auth/Register";
import CheckAnimation from "../components/CheckAnimation";
import AUthImage from "./../assests/images/auth.webp";
const Auth = () => {
  const [loginPage, setLoginPage] = useState(true);
  const [showSuccessAuth, setShowSuccessAuth] =
    useState(false);
  return (
    <>
      <div className="w-screen h-screen flex justify-between">
        <Login
          showSuccessAuth={showSuccessAuth}
          setShowSuccessAuth={setShowSuccessAuth}
          loginPage={loginPage}
          setLoginPage={setLoginPage}
        />

        <Register
          showSuccessAuth={showSuccessAuth}
          setShowSuccessAuth={setShowSuccessAuth}
          loginPage={loginPage}
          setLoginPage={setLoginPage}
        />

        <div className="hidden lg:block w-[50%] border-r border-gray-100 shadow-lg">
          <img className="w-full h-full" src={AUthImage} />
        </div>
      </div>

      <CheckAnimation
        showSuccessAuth={showSuccessAuth}
        setShowSuccessAuth={setShowSuccessAuth}
      />
    </>
  );
};

export default Auth;
