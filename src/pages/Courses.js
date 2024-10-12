import ".././assets/courses.css"
import CourseCard from "../compnents/cards/CourseCard";
import Heading from "../compnents/general/Heading";

export default function Courses() {
  return (
    <main className="coursesPage">



      <section >
      <Heading textContent="Courses" />

        <div className="gridContainer">
            <CourseCard />
            <CourseCard />
            <CourseCard />
        </div>
      </section>
    </main>
  );
}
