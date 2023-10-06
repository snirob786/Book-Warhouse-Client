import React, { useEffect } from "react";
import useInventory from "../../hooks/useInventory";
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";
import InventoryContainer from "../../Shared/InventoryContainer/InventoryContainer";

const Inventory = () => {
  const [inventory, setInventory] = useInventory();
  return (
    <div>
      <Header></Header>
      <div className="container">
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
            <InventoryContainer manage={true}></InventoryContainer>
          </tbody>
        </table>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Inventory;
