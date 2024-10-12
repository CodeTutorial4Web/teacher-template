import Heading from "../general/Heading";
import ".././.././assets/teachers.css"
import TeacherCard from './../cards/TeacherCard';
import Btn from './../general/Btn';

export default function TopTeachers() {
  return (
    <section className="section topTeachersSection">
        <Heading textContent="Top Teachers" />

        <div className="teachersGrid">
            <TeacherCard />
            <TeacherCard />
            <TeacherCard />
        </div>

        <Btn text="View All" link="/teachers"/>

    </section>
  );
}