
import Btn from './Btn';
import Heading from './Heading';


export default function callToAction() {
    return (
        
      <section className="callToAction">
      <div>
        <Heading textContent="Get Started Now And Learn All You Need. " />
        <Btn text="Get Started" link="/register"/>

      </div>
    </section>
    )
}