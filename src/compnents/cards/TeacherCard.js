import { Link } from "react-router-dom";
import UserAvatar from "../general/UserAvtar";

export default function TeacherCard() {
  return (
    <Link to="/teacher/12" className="teacherCard">
      <div
        className="banner"
        style={{
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundImage:
            "url(https://img.freepik.com/premium-vector/science-vector-banner_36298-510.jpg)",
        }}
      >
        <UserAvatar
          width={90}
          height={90}
          imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyzTWQoCUbRNdiyorem5Qp1zYYhpliR9q0Bw&s"
        />
      </div>
      <div className="teacherData">
        <i className="fas fa-check-circle"></i>
        <p>Wiliams</p>
        <span className="profession">Science Teacher</span>
        <span className="desc">
          Id ad nostrud irure officia fugiat enim esse Lorem. Lorem pariatur
          ipsum incididunt cupidatat cillum. Aliquipt...
        </span>

        <span className="students">12 Courses | 12 Students</span>
      </div>
    </Link>
  );
}
