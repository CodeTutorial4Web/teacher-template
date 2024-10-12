import { Link, NavLink } from "react-router-dom";
import ".././../assets/navbar.css";
import { useContext, useState } from "react";
import { AuthContext } from "../../authContext/AuthContext";
import UserAvatar from "./UserAvtar";

export default function Navbar() {
  const { user } = useContext(AuthContext).userData;
  const [open, setOpen] = useState(false);

  document.querySelectorAll(".navbar nav ul li ").forEach(el => {
    el.addEventListener("click", () => {
      setOpen(!open)
    })
  })
  
  return (
    <header
      className={
        open ? 
        "navbar slide navbar-style-1":
        "navbar navbar-style-1"
      }
    >
      <nav>
        <Link to="/" className="logo">
          <img src={require(".././.././assets/images/logo_copy.png")} alt="" />
        </Link>

        <ul>
          <ul>
            <li>
              <NavLink
                to="/"
                exact
                activeClassName="active-link"
                style={({ isActive }) => ({
                  background: isActive ? "var(--main-color)" : "none",
                       color: isActive ?  "var(--theme-text-color)" :" var(--gray-color-300) "
                })}
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/courses"
                exact
                activeClassName="active-link"
                style={({ isActive }) => ({
                  background: isActive ? "var(--main-color)" : "none",
                  color: isActive ?  "var(--theme-text-color)" :" var(--gray-color-300) "
                })}
              >
                Courses
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/teachers"
                exact
                activeClassName="active-link"
                style={({ isActive }) => ({
                  background: isActive ? "var(--main-color)" : "none",
                  color: isActive ?  "var(--theme-text-color)" :" var(--gray-color-300) "
                })}
              >
                Teachers
              </NavLink>
            </li>

            <li>
              {" "}
              <div>
                {user ? (
                         <UserAvatar width={40} height={40} imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyzTWQoCUbRNdiyorem5Qp1zYYhpliR9q0Bw&s" /> 

                ) : (
                  <Link to="/login" className="loginBtn">
                    Login
                  </Link>
                )}
              </div>
            </li>
          </ul>
        </ul>

        <button className="toggleNavBtn" onClick={( ) => {
            setOpen(!open)
        }}><i className="fas fa-bars"></i></button>
      </nav>
    </header>
  );
}
