import { Link } from "react-router-dom";
import ".././assets/navbar.css";
import { useContext, useState } from "react";
import { motion } from "framer-motion";
import Theme from "./Theme";
import { AuthContext } from "../authContext/AuthContext";

export default function Navbar() {
  const [openNavbar, setOpenNavbar] = useState(false);

  const { user } = useContext(AuthContext).userData;

  return (
    <header class="navbar navbar-style-1">
      <nav>
        <div>
          <div>
            <Link to="/" class="logo">
              <img src={require(".././assets/images/logo.png")} alt="Logo" />
              <h1>Easy Learn</h1>
            </Link>
            <i
              className="fas fa-bars"
              onClick={() => {
                setOpenNavbar(!openNavbar);
                document.querySelector(".navbar").classList.toggle("slide");
              }}
            ></i>
          </div>

          <ul>
            <ul>
              <li>
                <Link to="/">
                  <i className="fas fa-home"></i>
                  <span>Home</span>
                </Link>
              </li>

              <li>
                <Link to="/courses">
                  <i className="fas fa-book-open"></i>
                  <span>Courses</span>
                </Link>
              </li>

              <li>
                <Link to="/books">
                  <i className="fas fa-file"></i>
                  <span>Books</span>
                </Link>
              </li>

              <li></li>
            </ul>
          </ul>
        </div>

        <div>
          {user ? (
            <div>user</div>
          ) : (
            <Link to="/login" className="login">
              Login
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
}
