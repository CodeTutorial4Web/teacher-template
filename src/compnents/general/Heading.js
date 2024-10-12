import { motion } from "framer-motion";

export default function Heading({ textContent }) {
  return (
    <motion.h2
      className="heading"
      initial={{ opacity: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      whileInView={{
        opacity: 1,
        transition: { duration: 1 },
      }}
    >
      {textContent}
    </motion.h2>
  );
}
