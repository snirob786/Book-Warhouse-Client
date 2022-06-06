import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useInventoryDetail from "../../../hooks/useInventoryDetails";
import Header from "../../Header/Header";
import { useForm } from "react-hook-form";

const InventoryDetails = () => {
  const { register, handleSubmit } = useForm();
  const [latestBookQuantity, setLatestBookQuantity] = useState(0);
  const { id } = useParams();
  let [book] = useInventoryDetail(id);
  useEffect(() => {
    setLatestBookQuantity(book.quantity);
  }, [book.quantity]);

  const handleDelivery = () => {
    book.quantity = parseInt(book.quantity) - 1;
    const url = `https://sheltered-beach-08896.herokuapp.com/book/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(book),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.modifiedCount === 1) {
          setLatestBookQuantity(book.quantity);
        }
      });
  };

  const handleUpdateQuantity = (data) => {
    book.quantity = parseInt(book.quantity) + parseInt(data.quantity);
    const url = `https://sheltered-beach-08896.herokuapp.com/book/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(book),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.modifiedCount === 1) {
          setLatestBookQuantity(book.quantity);
        }
      });
  };
  return (
    <div>
      <Header></Header>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-6">
                    <img
                      src={book.imgurl}
                      className="card-img-top"
                      alt={book.name}
                    />
                  </div>
                  <div className="col-md-6">
                    <h5 className="card-title text-uppercase">
                      <strong>Name: </strong>
                      {book.name}
                    </h5>
                    <p>
                      <strong>Written By: </strong>
                      {book.author}
                    </p>
                    <p>
                      <strong>Quantity: </strong>
                      {latestBookQuantity}
                    </p>
                    <p className="fs-5">
                      <strong>Price: </strong>
                      {book.price}
                    </p>
                  </div>
                </div>
                <hr />
                <h3 className="fs-3">Description</h3>
                <p className="card-text">{book.shortdesc}</p>
                <p className="fs-5">
                  <strong>Publisher: </strong>
                  {book.supplier}
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <div className="card-body">
                <button
                  className="btn btn-primary mb-3"
                  onClick={handleDelivery}
                >
                  Delivered
                </button>
                <form onSubmit={handleSubmit(handleUpdateQuantity)}>
                  <input
                    type="number"
                    placeholder="Restock the Item"
                    {...register("quantity", { required: true })}
                  />

                  <input
                    className="btn btn-success ms-2"
                    type="submit"
                    value="Restock"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InventoryDetails;
