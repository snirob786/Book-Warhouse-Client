import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Loading/Loading";
import "./Header.css";

const Header = () => {
  const [user, loading, error] = useAuthState(auth);

  const handleSignout = () => {
    signOut(auth);
  };

  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light p-0">
        <div className="container px-0 py-2">
          <div className="row mx-auto navbar-row-container">
            <Link className="navbar-brand w-auto" to="/">
              Book Warehouse
            </Link>
            <button
              className="navbar-toggler ms-auto w-auto me-3"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo01"
              aria-controls="navbarTogglerDemo01"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse ms-auto w-auto"
              id="navbarTogglerDemo01"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/blogs">
                    Blogs
                  </Link>
                </li>
                {user && (
                  <li className="nav-item">
                    <Link className="nav-link" to="/manageinventory">
                      Manage Inventory
                    </Link>
                  </li>
                )}
                {user && (
                  <li className="nav-item">
                    <Link className="nav-link" to="/myitems">
                      My Items
                    </Link>
                  </li>
                )}
                {user && (
                  <li className="nav-item">
                    <Link className="nav-link" to="/additem">
                      Add Item
                    </Link>
                  </li>
                )}

                {user && (
                  <li className="nav-item">
                    <button
                      className="border-0 nav-link btn-danger text-light rounded"
                      onClick={handleSignout}
                    >
                      Logut
                    </button>
                  </li>
                )}

                {!user && (
                  <li className="nav-item">
                    <Link className="nav-link" to="/login">
                      Login
                    </Link>
                  </li>
                )}
                {!user && (
                  <li className="nav-item">
                    <Link className="nav-link" to="/register">
                      Register
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
