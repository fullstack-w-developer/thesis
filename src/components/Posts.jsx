import React from "react";
import CradPost from "./CradPost";
import { posts } from "./dataPosts";

const Posts = () => {
  return (
    <div className="h-[85vh] lg:h-[80vh]  overflow-auto posts mb-24 lg:mb-10 flex flex-col gap-5 lg:max-w-[600px] lg:w-[600px]">
      {posts.map((post, index) => {
        return <CradPost post={post} key={index} />;
      })}
    </div>
  );
};

export default Posts;

// flex-1  overflow-auto posts   flex flex-col gap-5 max-w-[600px] w-[600px]
