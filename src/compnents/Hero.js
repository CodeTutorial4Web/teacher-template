import { motion } from "framer-motion";
import Btn from "./../compnents/Btn";

export default function Hero() {
  return (
    <section class="hero-container">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: .5,
          transition: { delay: 2, duration: 1 },
        }}
        className="skill"
      >
        <i className="fas fa-user-graduate"></i>

        <h4>
          +12K
          <br />
          Students
        </h4>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: .5,
          transition: { delay: 2, duration: 1 },
        }}
        className="skill"
      >
        <i className="fas fa-award"></i>

        <h4>
          +5
          <br />
          Years Of Exp.
        </h4>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: .5,
          transition: { delay: 2, duration: 1 },
        }}
        className="skill"
      >
        <i className="fas fa-location"></i>
        <h4>
          +5
          <br />
          Locations
        </h4>
      </motion.div>

      <motion.div
        class="hero-content"
        initial={{ opacity: 0, y: -300, filter: "blur(5px)" }}
        animate={{
          opacity: 1,
          y: 0,
           filter: "blur(0)",
          transition: { duration: 1 },
        }}
      >
        <div>
          <h2>
            Welcome Dear Students To <span>Easy Learn.</span>
          </h2>

          <p>
            Nostrud ut cupidatat aute enim fugiat sit. Lorem sint proident
            aliquip nulla ut qui eprehenderit. Amet fugiat minim magna culpa
            amet non non eiusmod officia dolore. Minim aute pariatur aliquip
            officia consectetur qui fugiat sint ea pariatur.
          </p>
        </div>
        <Btn text="Get Started" link="/register" />
      </motion.div>

      <div className="socialLinks">
        <motion.a
          href="https://www.facebook.com/phy.kamal.ahmed/"
          rel="noopener noreferrer"
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,

            transition: { delay: 1, duration: 0.5 },
          }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <i className="fab fa-facebook-f"></i>
        </motion.a>
        <motion.a
          href="https://www.youtube.com/@keyofphysicskamalahmed4744/featured"
          rel="noopener noreferrer"
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,

            transition: { delay: 1.5, duration: 0.5 },
          }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <i className="fab fa-youtube"></i>
        </motion.a>
        <motion.a
          href="mailto:mr_kamal_physics@yahoo.com"
          rel="noopener noreferrer"
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,

            transition: { delay: 2, duration: 0.5 },
          }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <i className="fas fa-envelope"></i>
        </motion.a>
        <motion.a
          href="tel:01005892842"
          rel="noopener noreferrer"
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,

            transition: { delay: 2.5, duration: 0.5 },
          }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <i className="fas fa-phone"></i>
        </motion.a>

        <motion.a
          href="https://t.me/+YJjm0X51zoFkMDlk"
          rel="noopener noreferrer"
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,

            transition: { delay: 3, duration: 0.5 },
          }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <i className="fab fa-telegram"></i>
        </motion.a>
      </div>
    </section>
  );
}
