import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BlogProvider from "./context/Blogcontext";
import BlogList from "./components/Bloglist";
import BlogDetails from "./components/Blogdetails";
import CreateBlog from "./components/Createblog";
import Header from "./components/Header";

const App = () => {
  return (
    <BlogProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<BlogList />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
          <Route path="/create" element={<CreateBlog />} />
        </Routes>
      </Router>
    </BlogProvider>
  );
};

export default App;
