import { Link, useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {checkIfBookAlreadyInReadList, saveAddToLocalStorageReadBookData,saveAddToLocalStorageWishListBookData } from "../../Utility/localStorage";

const BookDetails = () => {
  const allBooksData = useLoaderData();
  const { id } = useParams();
  const clickedBookId = parseInt(id);
  const clickedBookInfo = allBooksData.find(
    (singleBookData) => singleBookData.bookId === clickedBookId
  );
  const { image, bookName, author, category, review,tags,totalPages,publisher,yearOfPublishing,rating } = clickedBookInfo;
  const [tag1,tag2]= tags;

  const handleAddToReadlist = () => {
    const addedReadData = saveAddToLocalStorageReadBookData(clickedBookInfo);
    if (addedReadData) {
      toast.success("Successfully added to read list",{position:"top-center"});
    } else {
      toast.error("Already added to the read list" ,{position:"top-center"});
    }
  };
  

  const handleAddToWishList = () => {
    const isAddedToReadList = checkIfBookAlreadyInReadList(clickedBookInfo);
    
    if (isAddedToReadList) {
      toast.info("Already added to the read list",{position:"top-center"});
    } else {
      const addedWishListData = saveAddToLocalStorageWishListBookData(clickedBookInfo);
      if (addedWishListData) {
        toast.success("Successfully added to the wishlist",{position:"top-center"});
      } else {
        toast.error("Already added to the wishlist",{position:"top-center"});
      }
    }
  };
  console.log(publisher);
  
  return (
    <div className="container mx-auto mt-12 mb-24">
      <div className="flex flex-col lg:flex-row lg:gap-6">
        <div className="lg:w-1/2 p-4 lg:p-8 m-4 flex justify-center items-center rounded-xl bg-[#121111b30D] ">
          <img src={image} alt="Book-Image" className="lg:w-96 h-60 lg:h-96" />
        </div>
        <div className="lg:w-1/2 p-4">
          <h2 className="text-[#121111b3] text-2xl lg:text-4xl font-playfair font-bold mb-2 lg:mb-5">{bookName}</h2>
          <p className="text-[#121111b3CC] text-lg lg:text-xl font-medium font-work mb-5">By: {author}</p>
          <hr />
          <p className="text-[#121111b3CC] text-lg lg:text-xl font-medium font-work mt-4 mb-4">{category}</p>
          <hr />
          <p className="text-[#121111b3] font-work text-base lg:text-lg font-bold mt-6">
            Review: <span className="text-[#121111b3] font-normal ">{review}</span>
          </p>
          <div className="flex gap-4 mt-4 lg:mt-12 mb-3 lg:mb-5">
            <p className="text-[#121111b3] font-work text-lg font-bold">Tag</p>
            <button className="px-4 py-1 bg-[#23BE0A0D] rounded-full text-[#23BE0A]">
              #{tag1}
            </button>
            <button className="px-4 py-1 bg-[#23BE0A0D] rounded-full text-[#23BE0A]">
              #{tag2}
            </button>
          </div>
          <hr />
          <div className="flex gap-5 mt-6 mb-7">
            <div className="space-y-3">
            <p className="text-[#121111b3] text-base lg:text-lg font-work">Number of Pages: </p>
          <p className="text-[#121111b3] text-base lg:text-lg font-work">Publisher: </p>
          <p className="text-[#121111b3] text-base lg:text-lg font-work">Year of Publishing: </p>
          <p className="text-[#121111b3] text-base lg:text-lg font-work">Rating: </p>
            </div>
            <div className="space-y-3">
            <p className="text-[#121111b3] text-base lg:text-lg font-work font-semibold">{totalPages}</p>
            <p className="text-[#121111b3] text-base lg:text-lg font-work font-semibold">{publisher}</p>
            <p className="text-[#121111b3] text-base lg:text-lg font-work font-semibold">{yearOfPublishing}</p>
            <p className="text-[#121111b3] text-base lg:text-lg font-work font-semibold">{rating}</p>
            </div>
          </div>
          <div className="flex gap-5">
            <Link><button onClick={handleAddToReadlist} className="border-2 border-[#121111b34D] btn-md lg:btn-lg rounded-lg text-[#121111b3] text-lg font-semibold font-work">Read</button></Link>
            <Link><button onClick={handleAddToWishList} className="btn-md lg:btn-lg rounded-lg text-white text-lg font-work font-semibold bg-[#50B1C9]">Wishlist</button></Link>
          </div>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default BookDetails;
