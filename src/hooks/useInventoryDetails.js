import { useEffect, useState } from "react";

const useInventoryDetail = (bookId) => {
  const [book, setBook] = useState({});

  useEffect(() => {
    const url = `https://sheltered-beach-08896.herokuapp.com/book/${bookId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBook(data));
  }, [bookId]);
  return [book];
};

export default useInventoryDetail;
