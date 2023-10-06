const setToken = async (uid) => {
  const url = `${process.env.REACT_APP_BACKEND_URL}/logintoken`;
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

const useGetToken = (uid) => {
  const accessToken = localStorage.getItem("accessToken");
  if (accessToken) {
    return accessToken;
  } else {
    setToken(uid);
  }
};

export default useGetToken;
