
import Heading from '../general/Heading';
import WhyUsCard from '../cards/WhyUsCard';

export default function WhyUs () {


  const whyMeContent = [

    {
      heading: "Continuous Learning",
      text: "Periodic exams help you regularly assess your knowledge and ensure you are consistently improving. Engaging in frequent exercises strengthens your understanding and keeps your learning sharp, so you never fall behind.",
      icon: "fa-brain"
    },
    {
      heading: "Track Your Progress",
      text: "Exams and exercises provide clear milestones in your learning journey. They show you how far you’ve come, highlight areas for improvement, and motivate you to reach your full potential.",
      icon: "fa-chart-line"
    },
    {
      heading: "Boost Your Confidence",
      text: "The more you practice, the more confident you become in your abilities. Periodic tests reduce anxiety by familiarizing you with exam formats, helping you feel prepared and ready to succeed.",
      icon: "fa-hand-holding-heart"
    },
    {
      heading: "Identify Strengths and Weaknesses",
      text: "Periodic assessments give you valuable insights into what you excel at and where you need extra focus. By targeting your weaknesses, you can develop a more balanced and thorough understanding of the material.",
      icon: "fa-search"
    },
    {
      heading: "Enhance Retention",
      text: "Frequent exams reinforce key concepts, helping you retain information more effectively. With consistent practice, you’ll move knowledge from short-term to long-term memory, making it easier to recall during exams or real-life applications.",
      icon: "fa-memory"
    },
    {
      heading: "Build Discipline and Routine",
      text: "Periodic exams instill a sense of discipline and structure in your study habits. Regular assessments encourage you to create a study routine that fosters productivity and accountability, ensuring steady progress over time.",
      icon: "fa-clock"
    }
  ]

    return (
        
      <section className="section whyUsSection">
      <Heading textContent="Why Us?" />
      <div class="why-us-section">
        {
          whyMeContent.map( (el, id) => {
            return(

              <WhyUsCard header={el.heading} icon={el.icon} text={el.text} key={id}/>
            )
          })
        }
      </div>
    </section>
    )
}