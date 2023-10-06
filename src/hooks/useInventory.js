import { useEffect, useState } from "react";

const useInventory = () => {
  const [inventory, setInventory] = useState([]);
  useEffect(() => {
    const url = `${process.env.REACT_APP_BACKEND_URL}/books`
    fetch(url)
      .then((res) => res.json())
      .then((data) => setInventory(data));
  }, []);
  return [inventory, setInventory];
};

export default useInventory;
