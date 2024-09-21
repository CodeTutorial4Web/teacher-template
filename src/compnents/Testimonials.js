import { motion } from "framer-motion";
import Heading from './Heading';
import TestimonialCard from './TestimonialCard';


export default function Testimonials () {
    return (
        
           
      <section className="testimonialsSection">
        <Heading textContent="Testimonials" />

        <div className="testimonials">
          < TestimonialCard />
          < TestimonialCard />
          < TestimonialCard />
        </div>
      </section>
    )
}