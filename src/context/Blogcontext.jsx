import React, { createContext, useState } from "react";
import { useNavigate } from 'react-router-dom'

export const Blogcontext = createContext();

const BlogProvider = ({ children }) => {
  const [blogs, setBlogs] = useState([
    { id: 1, title: "Welcome", description: "welcome to blogger! we hope you enjoy blogging here" },
    { id: 2, title: "test", description: "This is just a test" },
  ]);

  const addBlog = (newBlog) => {
    setBlogs([...blogs, { ...newBlog, id: blogs.length + 1 }]);
  };

  return (
    <Blogcontext.Provider value={{ blogs, addBlog }}>
      {children}
    </Blogcontext.Provider>
  );
};

export default BlogProvider;
