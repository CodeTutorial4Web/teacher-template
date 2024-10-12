import "./assets/main.css"
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import { useContext } from "react";
import { AuthContext } from "./authContext/AuthContext";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Courses from './pages/Courses';
import Course from './pages/Course';
import Footer from "./compnents/general/Footer";
import Navbar from "./compnents/general/Navbar";
import { Teachers } from "./pages/Teachers";
import Teacher from "./pages/Teacher";
import TeacherAbout from "./compnents/teacherPage/TeacherAbout";
import TeacherCourses from "./compnents/teacherPage/TeacherCourses";
import { Dashboard } from "./pages/Dashboard";


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
  <Route path="/" exact element={user ? <Navigate to="/dashboard" /> : <Home /> }/>
  <Route path="/" exact element={user ? <Navigate to="/" /> : <Dashboard /> }/>
  <Route path="/login" exact element={user ? <Navigate to="/" /> : <Login />}/>
  <Route path="/register" exact element={user ? <Navigate to="/" /> : <Register />   }/>
  <Route path="/courses" exact element={<Courses /> }/>
  <Route path="/course/:courseId" exact element={<Course />}/>
  <Route path="/teacher/:teacherId" exact element={<Teacher />}>
      <Route path="about"  exact element={<TeacherAbout />} />
      <Route path=""  exact element={<TeacherCourses />} />
  
  </Route>
  <Route path="/teachers" exact element={<Teachers />}/>
</Routes>

        </div>
        <Footer />

      </Router>
   );


  
}

