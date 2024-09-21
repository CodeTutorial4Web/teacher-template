import "./assets/main.css"
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import { useContext } from "react";
import { AuthContext } from "./authContext/AuthContext";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Courses from './pages/Courses';
import Course from './pages/Course';
import Books from "./pages/Books";
import Book from "./pages/Book";
import Footer from "./compnents/Footer";
import Navbar from "./compnents/Navbar";


export default function App() {

  const {user} = useContext(AuthContext).userData


  if(localStorage.getItem("theme") !== null) {
    document.body.className = localStorage.getItem("theme");
  }





    return (
      <Router>

<Navbar />

        <div className="wrapper">

<Routes>
  <Route path="/" exact element={<Home /> }/>
  <Route path="/login" exact element={user ? <Navigate to="/" /> : <Login />}/>
  <Route path="/register" exact element={user ? <Navigate to="/" /> : <Register />   }/>
  <Route path="/courses" exact element={<Courses /> }/>
  <Route path="/books" exact element={<Books />}/>
  <Route path="/course/:courseId" exact element={<Course />}/>
  <Route path="/book/:bookId" exact element={<Book />}/>
</Routes>

        </div>
        <Footer />

      </Router>
   );


  
}

