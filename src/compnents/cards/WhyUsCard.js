
import { motion } from "framer-motion";


export default function WhyUsCard({header, text, icon}) {


    function handleOnMouseMove(e) {
        const rect = e.target.getBoundingClientRect(),
              x = e.clientX - rect.left,
              y = e.clientY - rect.top


        e.target.style.setProperty("--mouse-x", `${x}px`)
        e.target.style.setProperty("--mouse-y", `${y}px`)
    }

    return (


        <motion.div 
        class="why-us-item"
        initial={{ opacity: 0, filter: "blur(5px)"}}
        whileInView={{
          opacity: 1,
           filter: "blur(0px)",
          transition: {duration: 1 },
        }}
        viewport={{ once: false, amount:0.3 }}
      >
        <i class={"fas " + icon}></i>
        <span>{header}</span>
        <p>
          {text}
        </p>
      </motion.div>
    )
}