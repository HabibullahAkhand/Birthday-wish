import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FaRegStar } from "react-icons/fa6";

const BookCard = ({ bookData }) => {
  const { bookId,image,tags,bookName,author,category } = bookData;
  const [tag_1,tag_2]=tags;
  return (
    <Link to={`/bookCard/${bookId}`}>
      <div className="card card-compact bg-base-100 shadow-2xl">
        <div className="p-4">
        <figure className="h-64 bg-[#F3F3F3] lg:p-8 rounded-lg">
          <img
            className="h-full rounded-lg"
            src={image}
            alt="book-image "
          />
        </figure>
        <div className="mt-6 flex gap-2 font-work font-semibold">
            <button className="px-4 py-1 bg-[#23BE0A0D] rounded-full text-[#23BE0A]">{tag_1}</button>
            <button className="px-4 py-1 bg-[#23BE0A0D] rounded-full text-[#23BE0A]">{tag_2}</button>
        </div>
        </div>
        <div className="p-4">
          <div className="mb-6">
          <h2 className="card-title text-[#131313] font-playfair text-xl font-bold">{bookName}</h2>
          <p className="text-[#131313CC] font-work font-bold">By: <span>{author}</span></p>
          </div>
          <div className="flex justify-between border-t-2 border-dashed mb-5">
            <p className="mt-6 text-[#131313CC] font-work font-bold">{category}</p>
            <p className="mt-6 flex items-center justify-end gap-2 text-[#131313CC] font-work font-bold">5.00 <FaRegStar></FaRegStar></p>
          </div>
        </div>
      </div>
    </Link>
  );
};

BookCard.propTypes = {
  bookData: PropTypes.object,
};

export default BookCard;
