import { useEffect, useState } from "react";

const useBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND_URL}/blogs`)
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return [blogs, setBlogs];
};

export default useBlogs;
