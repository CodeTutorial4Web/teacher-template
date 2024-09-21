import { motion } from "framer-motion";
import Heading from "./Heading";

export default function About() {
  return (
    <section className="aboutSection">
      <div className="aboutContent">

        <motion.div      
          initial={{ opacity: 0, filter: "blur(5px)" }}
          whileInView={{ opacity: 1, filter: "blur(0px)",transition: { duration: 1 } }}
          viewport={{ once: false, amount: 0.3 }}>
          <div
   
          className="aboutImage"
        ></div>
        </motion.div>
     

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
          <Heading textContent="About Me" />

          <p>
            I’m Kamal Ahmed, a physics teacher since 2005, and I’m very proud of
            my students who passed under my supervision during this whole
            period. Thanks to Allah, I was able to teach a lot of students,
            graduated and excelled in various fields. I feel very proud to see
            their successes and achievements. It makes me feel a real
            achievement.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
