import { Link } from "react-router-dom";
import { motion } from 'framer-motion';

export default function BookCard() {
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
      <Link to="/book/1" className="bookCard">
        <div
          style={{
            backgroundImage: `url(https://www.ktateeb.com/upfiles/2022/10/FB_IMG_1666253619866.jpg)`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            width: "100%",
          }}
          className="bookImage"
        ></div>

        <div className="bookContent">
        <div className="bookTags">
            <span className="schoolYear">Prep. 2</span>
            <span className="bookPrice">200 LE</span>
            </div>
          <div className="bookText">
            <h4>book Title</h4>
            <p>Mollit esse velit amet ullamco sint excepteur et est quis non labore sunt consequat do...</p>
            
     
            <span>25 Pages</span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
