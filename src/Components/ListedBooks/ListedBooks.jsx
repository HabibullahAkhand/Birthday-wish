import {getReadBookDataFromLocalStorage,getWishListBookDataFromLocalStorage,} from "../../Utility/localStorage";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GoChevronDown } from "react-icons/go";
import { LuFileBarChart } from "react-icons/lu";
import { IoLocationOutline, IoPeopleOutline } from "react-icons/io5";

const ListedBooks = () => {
  const [readList, setReadList] = useState();

  const [wishlistBookData, setWishlist] = useState();

  useEffect(() => {
    const readData = getReadBookDataFromLocalStorage() || [];
    setReadList(readData);
  }, []);

  useEffect(() => {
    const wishListData = getWishListBookDataFromLocalStorage() || [];
    setWishlist(wishListData);
  }, []);

  const BooksSortBy = (readListSort) => {
    if (readListSort === "Rating") {
      const sortedReadListedBooks = [...readList].sort(
        (x, y) => y.rating - x.rating
      );


      const sortedWishListedBooks = [...wishlistBookData].sort(
        (x, y) => y.rating - x.rating
      );


      setReadList(sortedReadListedBooks);
      setWishlist(sortedWishListedBooks);


    } 
    else if (readListSort === "PageNumber") {
      const sortedReadListedBooks = [...readList].sort(
        (a, b) => b.totalPages - a.totalPages
      );

      const sortedWishListedBooks = [...wishlistBookData].sort(
        (a, b) => b.totalPages - a.totalPages
      );
      setReadList(sortedReadListedBooks);
      setWishlist(sortedWishListedBooks);
    } else if (readListSort === "Year") {
      const sortedReadListedBooks = [...readList].sort(
        (a, b) => b.yearOfPublishing - a.yearOfPublishing
      );
      const sortedWishListedBooks = [...wishlistBookData].sort(
        (a, b) => b.yearOfPublishing - a.yearOfPublishing
      );
      setReadList(sortedReadListedBooks);
      setWishlist(sortedWishListedBooks);
    }
  };
  return (
    <div className="container mx-auto">
      <div className="border my-10 py-6 text-center bg-[#70c0d6b2] rounded-lg">
        <h2 className="text-[#2d1111] text-4xl font-work font-bold">Books</h2>
      </div>
      <div className="text-center mb-14">
        <details className="dropdown">
          <summary className="m-1 btn bg-[#23BE0A] text-white text-lg font-work">
            Sort By<GoChevronDown className="text-2xl"></GoChevronDown>
          </summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li>
              <a onClick={() => 
                BooksSortBy("Rating")
                }>Rating</a>
            </li>
            <li>
              <a onClick={() => 
                BooksSortBy("PageNumber")
                }>
                Number of Pages
              </a>
            </li>
            <li>
              <a onClick={() => 
                BooksSortBy("Year")
                }>Published Year</a>
            </li>
          </ul>
        </details>
      </div>
      <div>
        <div role="tablist" className="tabs-sm lg:tabs tabs-lifted">
          <input
            type="radio"name="my_tabs_2"role="tab"className="tab text-2xl font-work font-semibold"aria-label="Read Books"defaultChecked
          />
          <div
            role="tabpanel"className="tab-content bg-base-100 border-base-300 rounded-box lg:p-6"
          >
            <div>
              {readList && readList.length === 0 && (
                <div className="text-center">
                  <h2 className="text-3xl font-playfair font-semibold m-4">You have not selected any book for ReadList</h2>
                </div>
              )}
              {readList &&
                readList.map((data, idx) => (
                  <div key={idx}>
                      <div className="p-5 mb-8 rounded-lg flex flex-col lg:flex-row bg-base-100 shadow-2xl">
                        <div className="lg:w-1/4 flex justify-center p-8 bg-[#1313130D] rounded-lg border ">
                          <img src={data.image} alt="Book-Image" />
                        </div>
                        <div className="lg:w-3/4 p-5 ">
                          <h2 className="card-title font-playfair  lg:text-2xl font-bold mb-5">
                            {data.bookName}
                          </h2>
                          <p className="text-[#131313CC] text-center lg:text-left font-work font-semibold mb-5">
                            By: {data.author}
                          </p>
                          <div className="flex flex-col lg:flex-row gap-5 items-center mb-5">
                            <p className="text-[#131313] font-work text-lg font-bold">
                              Tag
                            </p>
                            <button className="px-4 py-1 bg-[#23BE0A0D] rounded-full text-[#23BE0A] font-work">
                              #{data.tags[0]}
                            </button>
                            <button className="px-4 py-1 bg-[#23BE0A0D] rounded-full text-[#23BE0A] font-work">
                              #{data.tags[1]}
                            </button>
                            <p className="flex items-center gap-2 text-[#131313CC] font-work">
                              <IoLocationOutline></IoLocationOutline>Year of
                              publishing: {data.yearOfPublishing}
                            </p>
                          </div>


                          <div className="flex gap-5 mb-5">
                            <div className="flex items-center gap-2">
                              <IoPeopleOutline className="text-lg"></IoPeopleOutline>
                              <p className="text-[#13131399] font-work">
                                Publisher: {data.publisher}
                              </p>
                            </div>


                            <div className="flex items-center gap-2">
                              <LuFileBarChart className="text-lg"></LuFileBarChart>
                              <p className="text-[#13131399] font-work">
                                Page: {data.totalPages}
                              </p>
                            </div>

                          </div>

                          
                          <hr />
                          <div className="flex flex-col lg:flex-row gap-5 items-center mt-4">
                            <button className="px-4 py-1 bg-[#328eff3b] rounded-full text-[#328effeb] font-work">
                              Category:{data.category}
                            </button>
                            <button className="px-4 py-1 bg-[#ffad3339] rounded-full text-[#ffad33f0] font-work">
                              Rating:{data.rating}
                            </button>
                            <Link to={`/bookCard/${data.bookId}`}>
                              <button className="px-4 py-1 bg-[#22be0af0] rounded-full text-white font-work font-semibold">
                                View Details
                              </button>
                            </Link>
                          </div>
                        </div>
                      </div>
                  </div>
                ))}
            </div>
          </div>

          <input
            type="radio"
            name="my_tabs_2"
            role="tab"
            className="tab text-2xl font-work font-semibold"
            aria-label="Wishlist Books"
          />
          <div
            role="tabpanel"
            className="tab-content bg-base-100 border-base-300 rounded-box lg:p-6"
          >
            <div>
            {wishlistBookData && wishlistBookData.length === 0 && (
                <div className="text-center">
                  <h2 className="text-3xl font-playfair font-semibold m-4">You have not selected any book for WishList</h2>
                </div>
              )}
              {wishlistBookData &&
                wishlistBookData.map((data, idx) => (
                  <div key={idx}>
                    <div className="p-5 mb-8 rounded-lg flex flex-col lg:flex-row bg-base-100 shadow-2xl">
                      <div className="lg:w-1/4 flex justify-center p-8 bg-[#1313130D] rounded-lg border ">
                        <img src={data.image} alt="Book-Image" />
                      </div>
                      <div className="lg:w-3/4 p-5">
                        <h2 className="card-title font-playfair text-2xl font-bold mb-5">
                          {data.bookName}
                        </h2>
                        <p className="text-[#131313CC] font-work font-semibold mb-5">
                          By: {data.author}
                        </p>
                        <div className="flex flex-col lg:flex-row gap-5 items-center mb-5">
                          <p className="text-[#131313] font-work text-lg font-bold">
                            Tag
                          </p>
                          <button className="px-4 py-1 bg-[#23BE0A0D] rounded-full text-[#23BE0A] font-work">
                            #{data.tags[0]}
                          </button>
                          <button className="px-4 py-1 bg-[#23BE0A0D] rounded-full text-[#23BE0A] font-work">
                            #{data.tags[1]}
                          </button>
                          <p className="flex items-center gap-2 text-[#131313CC] font-work">
                            <IoLocationOutline></IoLocationOutline>Year of
                            publishing: {data.yearOfPublishing}
                          </p>
                        </div>
                        <div className="flex gap-5 mb-5">
                          <div className="flex items-center gap-2">
                            <IoPeopleOutline className="text-lg"></IoPeopleOutline>
                            <p className="text-[#13131399] font-work">
                              Publisher: {data.publisher}
                            </p>
                          </div>
                          <div className="flex items-center gap-2">
                            <LuFileBarChart className="text-lg"></LuFileBarChart>
                            <p className="text-[#13131399] font-work">
                              Page: {data.totalPages}
                            </p>
                          </div>
                        </div>
                        <hr />
                        <div className="flex flex-col lg:flex-row gap-5 items-center mt-4">
                          <button className="px-4 py-1 bg-[#328EFF26] rounded-full text-[#328EFF] font-work">
                            Category:{data.category}
                          </button>
                          <button className="px-4 py-1 bg-[#FFAC3326] rounded-full text-[#FFAC33] font-work">
                            Rating:{data.rating}
                          </button>
                          <Link to={`/bookCard/${data.bookId}`}>
                            <button className="px-4 py-1 bg-[#23BE0A] rounded-full text-white font-work font-semibold">
                              View Details
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListedBooks;
