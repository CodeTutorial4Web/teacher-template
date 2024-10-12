import ".././assets/course.css";
import ConceptDetail from "../compnents/general/ConceptDetail";
import Heading from "../compnents/general/Heading";
import { Link } from "react-router-dom";
import UserAvatar from "./../compnents/general/UserAvtar";
import TeacherCard from "../compnents/cards/TeacherCard";

export default function Course() {
  return (
    <main className="coursesPage section">
      <section className="coursePreview">
        <div className="courseData">
          <div className="courseContent">
            <Heading textContent="Content" />
            <ul>
              <ConceptDetail />
              <ConceptDetail />
            </ul>
          </div>

          <div className="discription">
            <Heading textContent="Description" />

            <p>
              Aliquip in do in deserunt irure id. Qui ullamco eiusmod excepteur
              minim do sint et occaecat et culpa consequat sit pariatur. Ea
              ullamco cupidatat dolore consectetur reprehenderit aute enim amet
              consectetur Lorem ex non duis occaecat eiusmod magna deserunt
              proident do minim culpa. Deserunt adipisicing laborum ut tempor ea
              ex tempor. Consequat nulla quis cupidatat nisi consectetur nulla
              in do. Duis consequat reprehenderit excepteur dolore adipisicing
              consectetur eiusmod ad nulla. Nulla et minim nulla Lorem irure
              ullamco consequat aliquip.
            </p>
          </div>

          <div className="teacher">
            <Heading textContent="Teacher" />

           <TeacherCard />
          </div>
        </div>
        <div className="buyCourse">
          <div
            style={{
              backgroundImage: `url(https://ebmes.com/storage/140/EBMES---%D8%A7%D9%84%D8%AC%D9%85%D8%B9%D9%8A%D8%A9-%D8%A7%D9%84%D9%85%D8%B5%D8%B1%D9%8A%D8%A9-%D9%84%D9%84%D9%87%D9%86%D8%AF%D8%B3%D8%A9-%D8%A7%D9%84%D8%B7%D8%A8%D9%8A%D8%A9---Course-1.jpg)`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              width: "100%",
            }}
            className="courseImage"
          ></div>
            <Heading textContent="Course Title" />

          <div className="courseDetails">


            <p>
              Aliquip in do in deserunt irure id. Qui ullamco eiusmod excepteur
              minim do sint et occaecat et culpa consequat sit pariatur. Ea
              ullamco cupidatat dolore consectetur reprehenderit aute enim amet
              consectetur...
            </p>

            <div className="priceAndActions">
            <span className="coursePrice">200 LE</span>
            <div className="actions">
              <span className="actionBtn">
                <i className="fas fa-shopping-cart"></i>
              </span>

              <span className="actionBtn">
                Buy Now
              </span>
            </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
