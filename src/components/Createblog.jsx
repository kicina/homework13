import React, { useState, useContext } from "react";
import { Blogcontext } from "../context/Blogcontext";
import { useNavigate } from "react-router-dom";

const CreateBlog = () => {
  const { addBlog } = useContext(Blogcontext);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    addBlog({ title, description });
    navigate("/");
  };

  return (
    <div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <div className="blog1">
      <h1 className="title text1" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>Create a New Blog</h1>
      </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <label className="title">Title:</label>
          <input className="input"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <label className="title">Description:</label>
          <input className="input desc"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></input>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <button className="btn" type="submit">Add Blog</button>
        </div>
      </form>
    </div>
  );
};

export default CreateBlog;
