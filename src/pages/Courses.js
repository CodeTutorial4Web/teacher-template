import CourseCard from "../compnents/CourseCard";
import Navbar from "../compnents/Navbar";
import ".././assets/courses.css"
import Heading from "../compnents/Heading";

export default function Courses() {
  return (
    <main className="coursesPage">



      <section >
      <Heading textContent="Courses" />

        <div className="gridContainer">
            <CourseCard />
        </div>
      </section>
    </main>
  );
}
