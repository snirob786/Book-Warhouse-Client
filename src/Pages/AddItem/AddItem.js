import React from "react";
import { useForm } from "react-hook-form";
import useCurrentUser from "../../hooks/useCurrentUser";
import Header from "../../Shared/Header/Header";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../../Shared/Footer/Footer";

const AddItem = () => {
  const currentUser = useCurrentUser();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    reset();
    data.addedby = currentUser.uid;
    const url = `https://sheltered-beach-08896.herokuapp.com/book`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        toast(data.name + " added successfully");
      });
  };

  return (
    <div>
      <Header></Header>
      <div className="container">
        <div className="row">
          <div className="col-md-6 mx-auto">
            <h2 className="text-center mt-5 mb-3 text-uppercase">Add Book</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  {...register("name", { required: true })}
                  placeholder="Insert Book's Name"
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  {...register("author")}
                  placeholder="Insert Book's Author Name"
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  {...register("imgurl")}
                  placeholder="Insert Book's Image Link"
                />
              </div>
              <div className="mb-3">
                <textarea
                  type="text"
                  rows="3"
                  className="form-control"
                  {...register("shortdesc")}
                  placeholder="Insert Book's Description"
                ></textarea>
              </div>
              <div className="mb-3">
                <input
                  type="number"
                  className="form-control"
                  {...register("price", { required: true })}
                  placeholder="Insert Book's Price"
                />
              </div>
              <div className="mb-3">
                <input
                  type="number"
                  className="form-control"
                  {...register("quantity", { required: true })}
                  placeholder="Insert Book's Quantity"
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  {...register("supplier")}
                  placeholder="Insert Book's Supplier Name"
                />
              </div>
              <div className="mb-3">
                <input type="submit" value="Add Book" />
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
      <Footer></Footer>
    </div>
  );
};

export default AddItem;
