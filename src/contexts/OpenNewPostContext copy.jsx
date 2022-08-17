import { createContext, useState } from "react";

export const openNewPostContext = createContext(null);

const OpenNewPostContext = ({ children }) => {
  const [openModalNewPost, setOpenModalNewPost] =
    useState(false);
  return (
    <openNewPostContext.Provider
      value={{ openModalNewPost, setOpenModalNewPost }}
    >
      {children}
    </openNewPostContext.Provider>
  );
};

export default OpenNewPostContext;
