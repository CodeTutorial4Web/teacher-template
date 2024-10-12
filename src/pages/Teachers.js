import TeacherCard from "../compnents/cards/TeacherCard";
import Heading from "../compnents/general/Heading";
import ".././assets/teachers.css"

export function Teachers() {
  return (


    <main className="teachersPage">
        <section>
            <Heading textContent="Teachers"/>

            <div className="teachersGrid"> 

            <TeacherCard />    
            <TeacherCard />    
            <TeacherCard />    
                
            </div>
        </section>
    </main>

  );
}