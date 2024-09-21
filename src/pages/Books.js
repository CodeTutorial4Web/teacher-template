import Navbar from "../compnents/Navbar";
import ".././assets/books.css"
import Heading from "../compnents/Heading";
import BookCard from './../compnents/BookCard';

export default function Books() {
  return (
    <main className="booksPage">



    <section >
    <Heading textContent="Books" />

      <div className="gridContainer">
          <BookCard />
      </div>
    </section>
  </main>
  );
}
