import React from "react";
import AddNewPost from "../components/AddNewPost";
import CradPost from "../components/CradPost";
import Header from "../components/Header";
import NewPost from "../components/NewPost";
import Posts from "../components/Posts";
import QuickAccess from "../components/QuickAccess";
import UserInformation from "../components/UserInformation";
import Navigation from "../components/Navigation";
const Home = () => {
  return (
    <>
      <div>
        <Header />
        <QuickAccess />
        <main className="flex justify-between mt-4 lg:mt-5 gap-10 px-2 lg:px-10">
          {/* right */}

          {/* add new post or see all post */}
          <div className=" hidden lg:block sticky top-28 border h-fit rounded-lg max-w-[350px] min-w-[350px] pb-3 border-gray-100 shadow-sm">
            <NewPost />
          </div>

          {/* posts */}
          <Posts />

          {/* User information */}
          <div className="hidden lg:block sticky top-28 border h-fit rounded-lg max-w-[350px] min-w-[350px] pb-3 border-gray-100 shadow-sm">
            <UserInformation />
          </div>
        </main>
      </div>

      <AddNewPost />
      <Navigation />
    </>
  );
};

export default Home;
