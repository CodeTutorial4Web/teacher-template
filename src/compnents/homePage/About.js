import { motion } from "framer-motion";
import Heading from "../general/Heading";
import { Link } from "react-router-dom";

export default function About() {


  const teamMembers = [
    {
      name: "Mostafa Ahmed",
      profession: "MERN Stack Developer",
      exp: 3,
      link: "https://codetutorial4web.pages.dev",
      image: "https://codetutorial4web.pages.dev/images/profile.png",
      desc: "Hi, My name is Mostafa Ahmed I live in egypt I'm 14 years old I began programming Two years ago I created more than 3 websites I joined Deci and started Udacity Nanodegee course. I like programming so much as I take like a hobby I also like playing football and video games and i like art work like drowing and making things from cardboard. I like front-end development and I hope i continue in this way and i hope i reach all i want."
    },
    {
      name: "Mostafa Ahmed",
      profession: "MERN Stack Developer",
      exp: 3,
      link: "https://codetutorial4web.pages.dev",
      image: "https://codetutorial4web.pages.dev/images/profile.png",
      desc: "Hi, My name is Mostafa Ahmed I live in egypt I'm 14 years old I began programming Two years ago I created more than 3 websites I joined Deci and started Udacity Nanodegee course. I like programming so much as I take like a hobby I also like playing football and video games and i like art work like drowing and making things from cardboard. I like front-end development and I hope i continue in this way and i hope i reach all i want."
    }
  ]

  return (
    <section className="section aboutSection">
      <div className="aboutContent">
        <Heading textContent="About Us" />

        <motion.div
          className="aboutText"
          initial={{ opacity: 0, y: 100, filter: "blur(5px)" }}
          whileInView={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: { delay: 0.4, duration: 1 },
          }}
          viewport={{ once: false, amount: 0.001 }}
        >
          <p>
            At Easy Learn, we believe that learning should be accessible,
            engaging, and straightforward for everyone. Our Learning Management
            System (LMS) is designed to provide a seamless educational
            experience, whether you’re a student, teacher, or organization
            looking to enhance your skills and knowledge. With Easy Learn, users
            can access a wide range of courses from anywhere at any time. Our
            intuitive platform is built with user-friendliness in mind, making
            it easy for learners to navigate through lessons, track their
            progress, and achieve their educational goals at their own pace. For
            educators, Easy Learn offers a powerful suite of tools to create,
            manage, and deliver online courses effortlessly. From interactive
            quizzes to multimedia lessons, our system supports a variety of
            content formats, helping educators engage students in dynamic and
            effective ways. Whether you're looking to upskill, explore new areas
            of knowledge, or manage large learning programs, Easy Learn is here
            to support you every step of the way. Our Mission Our mission is to
            simplify online learning for everyone, providing a platform where
            learners can grow, and educators can teach without barriers. Join
            Easy Learn today and discover a world of easy, effective, and
            enjoyable online learning!
          </p>
        </motion.div>

        <h3 >Our Team</h3>

        <div className="team">
     

          {
            teamMembers.map(
              (el ,index ) => {
                return (

                  <Link rel="noopener noreferrer" to={el.link} key={index} className="teamMember" style={{
                    backgroundImage: `url(${el.image})`,
           
                  }}>


                    <div>
                    <p>{el.name}</p>
                  <span>{el.profession}</span>
                  <span>+{el.exp} Years Of Exp.</span>
                  <p>{el.desc.length > 500 ? el.desc.slice(0, 500) + "..." : el.desc}</p>
                    </div>

               
                </Link>
                )
              }
            )
          }
        </div>
      </div>
    </section>
  );
}
