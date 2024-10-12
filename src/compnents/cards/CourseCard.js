import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import UserAvatar from "../general/UserAvtar";

export default function CourseCard() {
  return (





      <Link to="/course/1" className="courseCard popular">
      <span className="price">110 EGP.</span>

      <Link className="author" to="/teacher/12">
         <UserAvatar width={45} height={45} imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyzTWQoCUbRNdiyorem5Qp1zYYhpliR9q0Bw&s" /> 
         <div>
         <p>Ahmed Wael</p>  
         <span>Science Teacher</span> 
         </div>

      </Link>



      <div className="courseData">

      <div
          style={{
            backgroundImage: `url(https://ebmes.com/storage/140/EBMES---%D8%A7%D9%84%D8%AC%D9%85%D8%B9%D9%8A%D8%A9-%D8%A7%D9%84%D9%85%D8%B5%D8%B1%D9%8A%D8%A9-%D9%84%D9%84%D9%87%D9%86%D8%AF%D8%B3%D8%A9-%D8%A7%D9%84%D8%B7%D8%A8%D9%8A%D8%A9---Course-1.jpg)`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            width: "100%",
          }}
          className="courseImage"
        ></div>

        <div className="courseContent">


          <div className="courseText">
            <p>Course Title</p>  
            <span>2 Concepts</span>

            <b>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </b>
          </div>

          <div className="courseTags">
            <span className="category">Science</span>
          </div>


        </div>
      </div>
 
      </Link>
  );
}
