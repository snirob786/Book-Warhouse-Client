import React from "react";
import { useForm } from "react-hook-form";
import useCurrentUser from "../../hooks/useCurrentUser";
import Header from "../../Shared/Header/Header";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./Subscription.css";

const Subscription = () => {
  const currentUser = useCurrentUser();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    reset();
    toast("Email from " + data.email + " sent.");
  };
  return (
    <div>
      <div className="container my-5">
        <div className="row subscription px-5 pt-3 pb-5 rounded">
          <div className="col-md-6 subscription-left pt-5">
            <div className="row">
              <h2 className="fs-1">Have any questions?</h2>
              <p className="fs-6 pt-3">
                If you have any questions please feel free to message us. We are
                also open to have your opinion about this book library or how we
                can make this better.
              </p>
            </div>
          </div>
          <div className="col-md-6 mx-auto">
            <h2 className="mt-5 mb-3 text-uppercase">Send Message</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  {...register("name", { required: true })}
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  {...register("email")}
                  placeholder="Your Email Address"
                />
              </div>
              <div className="mb-3">
                <textarea
                  type="text"
                  rows="3"
                  className="form-control"
                  {...register("message")}
                  placeholder="Message Here"
                ></textarea>
              </div>
              <div className="mb-3">
                <button type="submit" className="btn btn-success">
                  Send
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="pe-1 px-2"
                  ></FontAwesomeIcon>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Subscription;
