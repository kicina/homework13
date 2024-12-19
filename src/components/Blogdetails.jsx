import React, { useContext } from "react";
import { Blogcontext } from "../context/Blogcontext";
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom'

const BlogDetails = () => {
  const { blogs } = useContext(Blogcontext);
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === parseInt(id));
  const navigate = useNavigate()

  if (!blog) return <p>Blog not found</p>;

  return (
    <div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
        <button className='btn' onClick={() => {navigate(`/`)}}>back</button>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
        <div className="blog">
            <h1 className="text" style={{ display: 'flex', justifyContent: 'center'}}>{blog.title}</h1>
            <p className="text" style={{ display: 'flex', justifyContent: 'center'}}>{blog.description}</p>
        </div>
        </div>
    </div>
  );
};

export default BlogDetails;