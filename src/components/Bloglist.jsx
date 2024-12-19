import React, { useContext } from "react";
import { Blogcontext } from "../context/Blogcontext";
import { useNavigate } from 'react-router-dom'

const BlogList = () => {
  const { blogs } = useContext(Blogcontext);
  const navigate = useNavigate()

  return (
    <div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <div className="blog1">
      <h1 className="text" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>All Blogs</h1>
      </div>
      </div>
      <ul>
        {blogs.map((blog) => (
          <li style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}} key={blog.id}>
            <div className="blog">
                <h1 className="text">{blog.title}</h1>
                <p className="text">{blog.description}</p>
                <button className='btn' onClick={() => {navigate(`/blog/${blog.id}`)}}>more</button> 
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogList;