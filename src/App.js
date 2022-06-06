import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddItem from "./Pages/AddItem/AddItem";
import Blogs from "./Pages/Blogs/Blogs";
import Home from "./Pages/Home/Home";
import Inventory from "./Pages/Inventory/Inventory";
import Login from "./Pages/Login/Login";
import RequireAuth from "./Pages/Login/RequireAuth/RequireAuth";
import MyItems from "./Pages/MyItems/MyItems";
import NotFound from "./Pages/NotFound/NotFound";
import Register from "./Pages/Register/Register";
import InventoryDetails from "./Shared/InventoryContainer/InventoryDetails/InventoryDetails";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route
          path="/inventory/:id"
          element={
            <RequireAuth>
              <InventoryDetails></InventoryDetails>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/manageinventory"
          element={
            <RequireAuth>
              <Inventory></Inventory>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/myitems"
          element={
            <RequireAuth>
              <MyItems></MyItems>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/additem"
          element={
            <RequireAuth>
              <AddItem></AddItem>
            </RequireAuth>
          }
        ></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
