import React from "react";

const Blog = ({ blog, index }) => {
  const { Que, Ans } = blog;
  return (
    <div className="card border-dark" style={{ minHeight: "325px" }}>
      <div className="card-header">Blog {index}</div>
      <div className="card-body text-dark">
        <h5 className="card-title">
          <strong>Question: </strong>
          {Que}
        </h5>
        <p className="card-text">
          <strong>Answer: </strong>
          {Ans}
        </p>
      </div>
    </div>
  );
};

export default Blog;
