//Complete the necessary code in this file
import React from "react";
import Post from "./Post";
import "./Posts.css";

// pass the data from App.js down as props then map through the data
const PostsPage = (props) => {
  return (
    <div className="posts-container-wrapper">
      {props.data.map((item, index) => (<Post post={item} key={index}/>))}
      {/* map through data here */}
    </div>
  );
};

export default PostsPage;

