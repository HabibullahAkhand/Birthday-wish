import { Link } from 'react-router-dom';
import bannerImage from '../../assets/images/bannerPic.jpg'

const Banner = () => {
  return (
    <div className="container mx-auto hero py-24 bg-base-300 rounded-xl">
      <div className="hero-content flex-col lg:flex-row-reverse lg:px-16">
       <div className='lg:w-1/2'>
       <img
          src={bannerImage}
          className=" rounded-lg"
        />
       </div>
        <div className='text-center lg:text-left'> 
          <h1 className="text-5xl lg:text-6xl font-playfair lg:leading-relaxed font-bold">Books to freshen <br /> up your bookshelf</h1>
          <p className="py-6 text-[#181717b3] font-playfair">
          Welcome to BooksZone, where every book offers a passage to adventure, enlightenment, and creativity. Explore our extensive collection and let the stories within transport you to distant lands, ignite your curiosity, and broaden your horizons.
          </p>
          <Link to="/booksListed"><button className="btn btn-primary font-work text-xl font-bold bg-[#23BE0A] outline-none border-none px-8">View The List</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
