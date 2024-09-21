import Btn from './Btn';
import BookCard from './BookCard';
import Heading from './Heading';


export default function LatestBooks () {
    return (

      <section className="latestBooksSection">
        <Heading textContent="Latest Books" />

        <div className="gridContainer">
          <BookCard />
          <BookCard />
          <BookCard />
        </div>

        <Btn text="View All" link="/books"/>

      </section>
    )
}