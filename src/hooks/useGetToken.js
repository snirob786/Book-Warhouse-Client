import { isEmpty } from "@firebase/util";

const setToken = async (uid) => {
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
      console.log("set token used");
    });
};

const useGetToken = (uid) => {
  const accessToken = localStorage.getItem("accessToken");
  if (accessToken) {
    return accessToken;
  } else {
    // setToken(uid);
    console.log(localStorage.getItem("accessToken"));
    console.log("your token not found", uid);
  }
};

export default useGetToken;
