
import { motion } from 'framer-motion';

export default function TestimonialCard() {
   
  
  return (
        <motion.div
        className="userTestimonial"
        initial={{ opacity: 0, filter: "blur(5px)"}}
        whileInView={{
          opacity: 1,
           filter: "blur(0px)",
          transition: {duration: 1 },
        }}
        viewport={{ once: false, amount:0.3 }}
      >
        <div className="userData">
          <div className="userAvatar"></div>
          <h3>Mostafa</h3>
        </div>
        <p>
          Incididunt et ad id ad laboris aliqua in. Dolor id nostrud non
          cillum qui non exercitation. Excepteur sit qui veniam duis sunt
          ullamco. Incididunt velit ad do incididunt. Irure laborum ex ut
          sit reprehenderit esse exercitation consectetur consectetur
          laborum cupidatat dolor. Quis ea deserunt occaecat veniam anim
          ipsum commodo nostrud.
        </p>
      </motion.div>
    )
}