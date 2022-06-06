import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import "./SocialLogin.css";
import google from "../../images/social/google.png";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const location = useLocation();
  const navigate = useNavigate();
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
    <div className="row mx-0">
      <div className="col-md-6 px-0">
        <button
          className="border btn btn-light"
          onClick={() => signInWithGoogle()}
        >
          <img style={{ width: "30px" }} src={google} alt="" />
          <span className="px-2">Signin With Google</span>
        </button>
        <br />
        {error && <p className="text-danger">Error: {error?.message}</p>}
      </div>
    </div>
  );
};

export default SocialLogin;
