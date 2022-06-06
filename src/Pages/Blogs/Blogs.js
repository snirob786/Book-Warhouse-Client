import React from "react";
import Header from "../../Shared/Header/Header";
import "./Blogs.css";
import useBlogs from "../../hooks/useBlogs";
import Blog from "./Blog/Blog";
import Footer from "../../Shared/Footer/Footer";

const Blogs = ({ page }) => {
  const [blogs, setBlogs] = useBlogs();
  return (
    <div>
      <Header></Header>
      <h2 className="text-center mt-5 mb-3">Blog page</h2>
      <div className="container">
        <div className="row">
          {blogs.map((blog, index) => (
            <div className="col-md-6 mb-3">
              <Blog blog={blog} key={blog.id} index={index + 1}></Blog>
            </div>
          ))}
        </div>
      </div>
      {page !== "home" && <Footer></Footer>}
    </div>
  );
};

export default Blogs;
