import { faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Modal } from "bootstrap";
import { Button } from "bootstrap";
import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import axiosPrivate from "../../api/axiosPrivate";
import auth from "../../firebase.init";
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";
import InventoryContainer from "../../Shared/InventoryContainer/InventoryContainer";

const MyItems = () => {
  const [user] = useAuthState(auth);
  const [inventory, setInventory] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const getInventory = async () => {
      const uid = user?.uid;
      const url = `https://sheltered-beach-08896.herokuapp.com/mybooks?uid=${uid}`;
      try {
        const { data } = await axiosPrivate.get(url);
        setInventory(data);
      } catch (error) {
        console.log(error.message);
        if (error.response.status === 401 || error.response.status === 403) {
          signOut(auth);
          navigate("/login");
        }
      }
    };
    getInventory();
  }, [user]);

  return (
    <div>
      <Header></Header>
      <div className="container pt-5">
        <h2 className="text-center">Manage Inventory</h2>
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Cover</th>
              <th scope="col">Name</th>
              <th scope="col">Author</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
            </tr>
          </thead>
          <tbody>
            <InventoryContainer
              myitem={true}
              manage={true}
              myInventory={inventory}
            ></InventoryContainer>
          </tbody>
        </table>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MyItems;
