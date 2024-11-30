
const authors = [
    {
      "name": "J.K. Rowling",
      "image": "https://i.ibb.co/QbCzMpB/pic1.jpg",
      "born": "31 July 1965",
      "country": "United Kingdom",
      "best_book": "Harry Potter and the Philosopher's Stone"
    },
    {
      "name": "Stephen King",
      "image": "https://i.ibb.co/BgNBp0J/pic2.jpg",
      "born": "21 September 1947",
      "country": "United States",
      "best_book": "The Shining"
    },
    {
      "name": "Agatha Christie",
      "image": "https://i.ibb.co/w6KvC8X/pic3.jpg",
      "born": "15 September 1890",
      "country": "United Kingdom",
      "best_book": "Murder on the Orient Express"
    },
    {
      "name": "Tolkien",
      "image": "https://i.ibb.co/TWGsYKR/pic4.jpg",
      "born": "3 January 1892",
      "country": "United Kingdom",
      "best_book": "The Lord of the Rings"
    },
    {
      "name": "George Orwell",
      "image": "https://i.ibb.co/vYS0Y5Q/pic5.jpg",
      "born": "25 June 1903",
      "country": "United Kingdom",
      "best_book": "1984"
    },
    {
      "name": "Mark Twain",
      "image": "https://i.ibb.co/wNLKt3W/pic6.webp",
      "born": "30 November 1835",
      "country": "United States",
      "best_book": "The Adventures of Huckleberry Finn"
    },
    {
      "name": "Harper Lee",
      "image": "https://i.ibb.co/cJ48H5G/pic7.jpg",
      "born": "28 April 1926",
      "country": "United States",
      "best_book": "To Kill a Mockingbird"
    },
    {
      "name": "Gabriel García Márquez",
      "image": "https://i.ibb.co/wcjZ3hL/pic8.webp",
      "born": "6 March 1927",
      "country": "Colombia",
      "best_book": "One Hundred Years of Solitude"
    },
    {
      "name": "Leo Tolstoy",
      "image": "https://i.ibb.co/8493Y2W/pic9.jpg",
      "born": "9 September 1828",
      "country": "Russia",
      "best_book": "War and Peace"
    }
  ]
const Writer = () => {
  return (
    <div className="container mx-auto mt-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {authors.map((author, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-4">
            <div className="h-52 w-48 mx-auto">
            <img src={author.image} alt={author.name} className="w-full h-auto rounded-md mb-4 " />
            </div>
            <h2 className="text-2xl font-black mb-2 mt-20">{author.name}</h2>
            <p className="text-gray-600 mb-2 ">Born: {author.born}</p>
            <p className="text-gray-600 mb-2">Country: {author.country}</p>
            <p className="text-gray-600 mb-2">Best Book: {author.best_book}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Writer;

