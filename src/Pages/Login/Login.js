import React, { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Footer from "../../Shared/Footer/Footer";
import SingleHeader from "../../Shared/SingleHeader/SingleHeader";
import SocialLogin from "../../Shared/SocialLogin/SocialLogin";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();

  const handleSignin = async (event) => {
    event.preventDefault();
    setEmail(event.target.email.value);
    setPassword(event.target.password.value);
    await signInWithEmailAndPassword(
      event.target.email.value,
      event.target.password.value
    );
  };
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  if (user) {
    const accessTokenStore = async () => {
      const uid = user.user.uid;
      const url = `https://sheltered-beach-08896.herokuapp.com/logintoken`;
      await fetch(url, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ uid }),
      })
        .then((res) => res.json())
        .then((result) => {
          localStorage.setItem("accessToken", result.accessToken);
        });
    };

    accessTokenStore();
    navigate(from, { replace: true });
  }
  return (
    <div>
      <SingleHeader></SingleHeader>
      <div className="container">
        <div className="row">
          <div className="col-md-6 mx-auto">
            <form onSubmit={handleSignin}>
              <div className="mb-5 text-center">
                <h1>Please Login</h1>
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
              Not a User?
              <Link
                to="/register"
                className="text-danger ps-1 text-decoration-none"
              >
                Register
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

export default Login;
