import { signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosPrivate from "../api/axiosPrivate";
import auth from "../firebase.init";
import useCurrentUser from "./useCurrentUser";
import useGetToken from "./useGetToken";

const useInventory = () => {
  const [inventory, setInventory] = useState([]);
  useEffect(() => {
    fetch("https://sheltered-beach-08896.herokuapp.com/books")
      .then((res) => res.json())
      .then((data) => setInventory(data));
  }, []);
  return [inventory, setInventory];
};

export default useInventory;
