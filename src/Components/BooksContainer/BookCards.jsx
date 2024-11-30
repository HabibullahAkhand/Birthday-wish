import { useEffect, useState } from "react";
import BookCard from "../BookCard/BookCard";

const BookCards = () => {
    const [booksData,setBooksData]=useState([]);

    useEffect(()=>{
        fetch('https://habibullahakhand.github.io/booksZone-json/BooksZone.json')
        .then(res =>res.json())
        .then(data => setBooksData(data))
    },[])

    return (
        <div className="container mx-auto">
            <div className="lg:mb-10 text-center">
            <h2 className="text-[#151515] text-5xl font-bold font-playfair">Books</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-4 lg:p-0 ">
                {
                    booksData.map((bookData,idx)=><BookCard key={idx} bookData={bookData}></BookCard>)
                }
            </div>
        </div>
    );
};

export default BookCards;