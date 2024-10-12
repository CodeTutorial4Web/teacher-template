import { motion } from "framer-motion";
import Btn from "../general/Btn";

export default function Hero() {
  return (
    <section class="section hero-container">
      {/* <motion.div
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
      </motion.div> */}

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
          <p>Welcome to</p>
          <h2>
            <span>Easy Learn</span> your path to easy learning!
          </h2>

          <p>
            Nostrud ut cupidatat aute enim fugiat sit. Lorem sint proident
            aliquip nulla ut qui eprehenderit. Amet fugiat minim magna culpa
            amet non non eiusmod officia dolore. Minim aute pariatur aliquip
            officia consectetur qui fugiat sint ea pariatur.
          </p>

          <div className="btns">
          <Btn text="Join Now" link="/register" />
          <Btn text="I'm A Teacher " link="/register" />
          </div>
          
        </div>

        <p>+12K Students joined Easy Learn</p>
      </motion.div>

      <div class="custom-shape-divider-bottom-1728647107">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M741,116.23C291,117.43,0,27.57,0,6V120H1200V6C1200,27.93,1186.4,119.83,741,116.23Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
    </section>
  );
}
