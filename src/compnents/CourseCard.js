import { Link } from "react-router-dom";
import { motion } from 'framer-motion';

export default function CourseCard() {
  return (
    <motion.div 
    
    initial={{ opacity: 0, filter: "blur(5px)"}}
    whileInView={{
      opacity: 1,
       filter: "blur(0px)",
      transition: {duration: 1 },
    }}
    viewport={{ once: false, amount:0.3 }}
    
    >
      <Link to="/course/1" className="courseCard">
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
          <div className="courseTags">
            <span className="schoolYear">Prep. 2</span>
            <span className="coursePrice">200 LE</span>
          </div>

          <div className="courseText">
            <h4>Course Title</h4>
            <p>
              In laborum amet voluptate irure occaecat qui. Do do labore
              cupidatat proident ea commodo eiusmod nisi veniam est...
            </p>

            <span>2 Concepts</span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
