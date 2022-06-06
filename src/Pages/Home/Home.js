import React from "react";
import { useNavigate } from "react-router-dom";
import useBlogs from "../../hooks/useBlogs";
import useInventory from "../../hooks/useInventory";
import Banner from "../../Shared/Banner/Banner";
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";
import InventoryContainer from "../../Shared/InventoryContainer/InventoryContainer";
import Subscription from "../../Shared/Subscription/Subscription";
import Blog from "../Blogs/Blog/Blog";
import "./Home.css";

const Home = () => {
  const [inventory, setInventory] = useInventory();
  const navigate = useNavigate();
  const [blogs, setBlogs] = useBlogs();
  const handleManageInventory = () => {
    navigate("/manageinventory");
  };

  const handleAllBlogs = () => {
    navigate("/blogs");
  };
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <div className="container pt-5">
        <h2 className="text-center">Manage Inventory</h2>
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Cover</th>
              <th scope="col">Name</th>
              <th scope="col">Author</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
            </tr>
          </thead>
          <tbody>
            <InventoryContainer
              parent="home"
              manage={false}
            ></InventoryContainer>
          </tbody>
        </table>
        <div className="col d-flex justify-content-center">
          <button
            className="btn btn-info text-center"
            onClick={handleManageInventory}
          >
            Manage Inventory
          </button>
        </div>
      </div>
      <div className="container mt-5 pt-5">
        <div className="row">
          <h2 className="text-center pb-3">Blogs</h2>
          {blogs.slice(0, 2).map((blog, index) => (
            <div className="col-md-6 mb-3">
              <Blog
                blog={blog}
                key={blog.id}
                index={index + 1}
                page="home"
              ></Blog>
            </div>
          ))}
        </div>
        <div className="col d-flex justify-content-center">
          <button className="btn btn-info text-center" onClick={handleAllBlogs}>
            All Blogs
          </button>
        </div>
      </div>
      <Subscription></Subscription>
      <Footer></Footer>
    </div>
  );
};

export default Home;
