import Btn from '../general/Btn';
import CourseCard from "../cards/CourseCard";
import Heading from '../general/Heading';
import ".././.././assets/courses.css"

export default function LatestCourses () {
    return (
      <section className="section latestCoursesSection">
      <Heading textContent="Latest Courses" />

      <div className="gridContainer">
        <CourseCard />
        <CourseCard />
        <CourseCard />
      </div>

      <Btn text="View All" link="/courses"/>

    </section>
    )
}