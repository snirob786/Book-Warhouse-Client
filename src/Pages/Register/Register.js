import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import SingleHeader from "../../Shared/SingleHeader/SingleHeader";
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
  useSendEmailVerification,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Register.css";
import SocialLogin from "../../Shared/SocialLogin/SocialLogin";
import Footer from "../../Shared/Footer/Footer";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  // const [user] = useAuthState(auth);
  const [sendEmailVerification] = useSendEmailVerification(auth);
  const navigate = useNavigate();
  const handleAddUser = (event) => {
    event.preventDefault();
    setEmail(event.target.email.value);
    setPassword(event.target.password.value);
    createUserWithEmailAndPassword(email, password);
    sendEmailVerification();
  };
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  if (user) {
    navigate(from, { replace: true });
  }

  return (
    <div>
      <SingleHeader></SingleHeader>
      <div className="container">
        <div className="row">
          <div className="col-md-6 mx-auto">
            <form onSubmit={handleAddUser}>
              <div className="mb-5 text-center">
                <h1>Register Yourself</h1>
              </div>
              <div className="mb-3">
                <input
                  name="email"
                  type="email"
                  className="form-control"
                  placeholder="Your Email Address"
                />
              </div>
              <div className="mb-3">
                <input
                  name="password"
                  type="password"
                  className="form-control"
                  placeholder="Your password"
                />
                {error ? (
                  <p className="text-danger">Error: {error?.message}</p>
                ) : (
                  ""
                )}
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
            <p>
              Already a User?
              <Link
                to="/login"
                className="text-danger ps-1 text-decoration-none"
              >
                Login
              </Link>
            </p>
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Register;
