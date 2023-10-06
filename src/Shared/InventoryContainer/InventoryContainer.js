import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./InventoryContainer.css";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { Modal, Button } from "react-bootstrap";
import useInventory from "../../hooks/useInventory";
import useCurrentUser from "../../hooks/useCurrentUser";

const InventoryContainer = ({ myitem, manage, myInventory }) => {
  const [show, setShow] = useState(false);
  const [inventoryList, setInventoryList] = useState([]);
  const [selectedId, setSelectedId] = useState("");
  const [selectedBook, setSelectedBook] = useState({});
  const navigate = useNavigate();
  const [inventory, setInventory] = useInventory();
  const currentUser = useCurrentUser();

  useEffect(() => {
    if (manage) {
      setInventoryList(inventory);
      if (myitem) {
        setInventoryList(myInventory);
      }
    } else {
      setInventoryList(inventory.slice(0, 6));
    }
  }, [inventory]);
  const handleClose = (isConfirm, id) => {
    if (isConfirm) {
      handleDeleteItem(id);
    }
    setShow(false);
  };
  const handleShow = (id) => {
    getBookDetails(id);
    setShow(true);
    setSelectedId(id);
  };

  const navigateToServiceDetail = (id) => {
    navigate(`/inventory/${id}`);
  };
  const handleDeleteItem = (id) => {
    getBookDetails(id);
    const url = `${process.env.REACT_APP_BACKEND_URL}/book/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        const remaining = inventory.filter((item) => item._id !== id);
        setInventory(remaining);
      });
  };

  const getBookDetails = (id) => {
    const url = `${process.env.REACT_APP_BACKEND_URL}/book/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setSelectedBook(data);
      });
  };
  return (
    <>
      {inventoryList.map((item, index) => (
        <>
          <tr>
            <th scope="row">{index + 1}</th>
            <td>
              <img className="book-cover" src={item.imgurl} alt={item.name} />
            </td>
            <td>{item.name}</td>
            <td>{item.author}</td>
            <td>{item.price}</td>
            <td>{item.quantity}</td>
            <td>
              {
                <button
                  onClick={() => navigateToServiceDetail(item._id)}
                  className="btn btn-primary text-light hoverbtn my-1 me-2"
                >
                  <FontAwesomeIcon
                    icon={faPenToSquare}
                    className="pe-1"
                  ></FontAwesomeIcon>
                  Update
                </button>
              }
              {manage === true && (
                <>
                  <Button
                    variant="primary"
                    onClick={() => handleShow(item._id)}
                    className="btn btn-danger text-light hoverbtn my-1"
                  >
                    <FontAwesomeIcon
                      icon={faTrashCan}
                      className="pe-1"
                    ></FontAwesomeIcon>
                    Delete
                  </Button>

                  <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                      <Modal.Title>Delete Confirmation</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      Do you really want to delete "
                      <strong className="text-uppercase">
                        {selectedBook.name}
                      </strong>
                      "
                    </Modal.Body>
                    <Modal.Footer>
                      <Button
                        variant="secondary"
                        onClick={() => handleClose(false, selectedId)}
                      >
                        Cancel
                      </Button>
                      <Button
                        variant="danger"
                        onClick={() => handleClose(true, selectedId)}
                      >
                        Delete
                      </Button>
                    </Modal.Footer>
                  </Modal>
                </>
              )}
            </td>
          </tr>
        </>
      ))}
    </>
  );
};

export default InventoryContainer;
