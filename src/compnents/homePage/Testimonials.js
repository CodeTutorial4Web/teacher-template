import { motion } from "framer-motion";
import Heading from '../general/Heading';
import Slider from "react-slick";


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";




export default function Testimonials () {


  const data = [
    {
      userAvatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyzTWQoCUbRNdiyorem5Qp1zYYhpliR9q0Bw&s",
      userName: "Maher Fady",
      role: "Student",
      review: "Non esse ex labore dolore proident voluptate mollit nisi do velit. Anim et voluptate laborum et eu minim labore. Laborum Lorem sit ex sunt cupidatat elit. Adipisicing mollit adipisicing amet id esse aute sunt pariatur reprehenderit esse esse magna."
    },
    {
      userAvatar: "https://images.ladbible.com/resize?type=webp&quality=70&width=3840&fit=contain&gravity=auto&url=https://images.ladbiblegroup.com/v3/assets/bltb5d92757ac1ee045/bltc86e7943bcc0e006/6569cbef0b642304079a348b/AI-creates-what-the-average-person.png%3Fcrop%3D590%2C590%2Cx0%2Cy0",
      userName: "Ahmed Hossam",
      role: "Teacher",
      review: "Est proident ullamco amet proident ullamco laborum aliquip sunt quis aute. Irure laboris duis aute consectetur occaecat voluptate. In exercitation culpa consequat nulla. Ipsum eiusmod irure labore cupidatat aliquip. Id occaecat voluptate ex eiusmod ea nostrud. Est quis commodo aliquip cillum ad esse laborum ullamco officia veniam sunt. Laboris duis dolor labore consectetur consectetur nisi anim in sit deserunt ad elit non."
    },{
      userAvatar: "https://clickhole.com/wp-content/uploads/2018/02/dnmtn4ksijwyep0xmljk.jpg",
      userName: "Omar Sherif",
      role: "Student",
      review: "Dolore veniam sint elit laborum dolor non. Officia do nulla duis fugiat nostrud et. Et occaecat magna do irure ut elit dolor aute commodo ullamco."
    }
  ]

  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    
  };
    return (
        
           
      <section className="section testimonialsSection">
        <Heading textContent="Reviews" />

        <div className="testimonials">



        <Slider {...settings}>
            {
              data.map((el, i) => {
                return(
                  <div key={i} className="testimonial">
                  <div className="userData">
                    <div className="userAvatar" style={{
                      backgroundImage: `url(${el.userAvatar})`
                    }}>
        
                    </div>
        
                    <p>{el.userName}</p>
                    <span>{el.role}</span>
        
        
                  </div>
        
                  <p>{el.review}</p>
                    <i className="fas fa-quote-left"></i>
        
                 </div>
                )
              })
            }
        </Slider>
       
        </div>
      </section>
    )
}