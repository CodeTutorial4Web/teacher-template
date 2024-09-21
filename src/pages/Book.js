import ".././assets/book.css";
import Heading from "../compnents/Heading";
import Navbar from "../compnents/Navbar";
import { Link } from 'react-router-dom';

export default function Book() {
  return (
    <main className="booksPage">

      <section className="book">
        <div
          className="bookImage"
          style={{
            backgroundImage: `url(https://www.ktateeb.com/upfiles/2022/10/FB_IMG_1666253619866.jpg)`,
            backgroundPosition: "center",
            backgroundSize: "cover",

            borderRadius: ".5rem",
          }}
        ></div>

        <div className="bookInfo">
          <div className="bookDetails">
            <Heading textContent="Book Title" />
            <div className="bookTags">
              <span className="schoolYear">Prep. 2</span>
              <span className="bookPrice">200 LE</span>
            </div>

            <p>
              Incididunt ex adipisicing nulla labore dolore non quis anim enim
              aute. Exercitation dolor anim laborum mollit nisi qui aute
              voluptate laboris non ullamco. Sunt in Lorem magna et culpa
              pariatur.
            </p>


          </div>


          <div className="bookContentPayment">
            <div className="bookContent">
                <Heading textContent="Content"/>

                <ul>
                <li>
                      <i className="conceptNumber">1</i>
                      <span>How To Suiiiii</span>

                    
                </li>

                <li>
                    
                      <i className="conceptNumber">1</i>
                      <span>How To Suiiiii</span>

                    
                </li>
              </ul>

              <Link to="/" className="btn">Buy Now</Link>

            </div>



            <div className="offer">
                20% Off
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
