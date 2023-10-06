import { useEffect, useState } from "react";

const useInventoryDetail = (bookId) => {
  const [book, setBook] = useState({});

  useEffect(() => {
    const url = `${process.env.REACT_APP_BACKEND_URL}/book/${bookId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBook(data));
  }, [bookId]);
  return [book];
};

export default useInventoryDetail;
