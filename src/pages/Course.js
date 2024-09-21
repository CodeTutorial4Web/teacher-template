import CourseCard from "../compnents/CourseCard";
import Navbar from "../compnents/Navbar";
import ".././assets/course.css";
import Heading from "../compnents/Heading";
import { Link } from "react-router-dom";

export default function Course() {
  return (
    <main className="coursesPage">

      <section className="coursePreview">
        <div
          style={{
            backgroundImage: `url(https://ebmes.com/storage/140/EBMES---%D8%A7%D9%84%D8%AC%D9%85%D8%B9%D9%8A%D8%A9-%D8%A7%D9%84%D9%85%D8%B5%D8%B1%D9%8A%D8%A9-%D9%84%D9%84%D9%87%D9%86%D8%AF%D8%B3%D8%A9-%D8%A7%D9%84%D8%B7%D8%A8%D9%8A%D8%A9---Course-1.jpg)`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            width: "100%",
          }}
          className="courseImage"
        ></div>

        <div className="courseData">
          <Heading textContent="Course Title" />

          <div className="courseTags">
            <span className="schoolYear">Prep. 2</span>
            <span className="coursePrice">200 LE</span>
          </div>
          <p>
            Aliquip in do in deserunt irure id. Qui ullamco eiusmod excepteur
            minim do sint et occaecat et culpa consequat sit pariatur. Ea
            ullamco cupidatat dolore consectetur reprehenderit aute enim amet
            consectetur. Nostrud labore dolore incididunt aliquip elit
            reprehenderit eiusmod commodo proident consequat fugiat. Non tempor
            pariatur enim fugiat voluptate nulla proident et. Elit tempor minim
            irure aute nostrud deserunt est quis labore consectetur proident sit
            est.
          </p>

          <div className="courseContentBooks">
            <div className="courseContent">
              <Heading textContent="Content" />
              <ul>
                <li>
                  <Link to="/course/1/concept/1">
                    <div>
                      <i className="conceptNumber">1</i>
                      <span>How To Suiiiii</span>
                    </div>

                    <i className="fas fa-lock"></i>
                  </Link>
                </li>

                <li>
                  <Link to="/course/1/concept/1">
                    <div>
                      <i className="conceptNumber">1</i>
                      <span>How To Suiiiii</span>
                    </div>

                    <i className="fas fa-lock"></i>
                  </Link>
                </li>
              </ul>
            </div>

            <div className="courseBooks">
              <Heading textContent="Books" />
              <ul>
                <li>
                  <Link to="/books/1">
                    <p>Book of art</p>
                    <span>200 LE</span>
                  </Link>
                </li>

                <li>
                  <Link to="/books/2">
                    <p>Book of Suiii</p>
                    <span>200 LE</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="plans">
          <Heading textContent="Available Plans" />
          <div className="paymentPlans">
            <div className="paymentPlan">
              <div>
                <h4>Basic</h4>
                <i>Books Only</i>
              </div>

              <span className="price">400 LE</span>

              <Link to="/buy-course/1" className="">
                Buy Now
              </Link>
            </div>

            <div className="paymentPlan">
              <div>
                <h4>Standard</h4>
                <i>Course Only</i>
              </div>

              <span className="price">200 LE</span>

              <Link to="/buy-course/1" className="">
                Buy Now
              </Link>
            </div>


            <div className="paymentPlan">
              <div>
                <span>Recommended</span>
                <h4>Premium</h4>
                <i>Course & Books</i>
              </div>

              <span className="price">700 LE</span>

              <Link to="/buy-course/1" className="">
                Buy Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
