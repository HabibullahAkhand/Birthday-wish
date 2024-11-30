import Banner from "../Banner/Banner";
import BooksCard from "../BooksContainer/BookCards";
const Home = () => {
  return (
    <div>
      <div className="mt-12 mb-10 lg:mb-24">
        <Banner></Banner>
      </div>
      <div>
        <BooksCard></BooksCard>
      </div>
    </div>
  );
};

export default Home;
