import Btn from './Btn';
import CourseCard from "./CourseCard";
import Heading from './Heading';


export default function LatestCourses () {
    return (
      <section className="latestCoursesSection">
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