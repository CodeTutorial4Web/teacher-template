import CourseCard from "../cards/CourseCard";
import { useParams } from 'react-router-dom';


export default function TeacherCourses() {

  const {teacherId} = useParams()

  return (

    <div className="gridContainer">
            <CourseCard />
            <CourseCard />
            <CourseCard />
        </div>
  );
}