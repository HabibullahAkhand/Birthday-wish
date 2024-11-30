import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import Home from './Components/Home/Home';
import ListedBooks from './Components/ListedBooks/ListedBooks';
import ReadPages from './Components/ReadPagesOnChart/ReadPages';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import BookDetails from './Components/BookDetails/BookDetails';
import Writer from './Components/BestWriter/Writer';
import Subscription from './Components/Subscription/Subscription';
import AllBooks from './Components/AllBooks/AllBooks';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path:"/",
        element: <Home></Home>
      },
      {
        path:"/booksListed",
        element: <ListedBooks></ListedBooks>
      },
      {
        path:"/allBooks",
        element: <AllBooks></AllBooks>
      },
      {
        path:"/readPages",
        element:<ReadPages></ReadPages>
      },
      {
        path:"/writer",
        element:<Writer></Writer>
      },
      {
        path:"/subscription",
        element:<Subscription></Subscription>
      },
      
      {
        path:"/bookCard/:id",
        element: <BookDetails></BookDetails>,
        loader:()=>fetch('https://habibullahakhand.github.io/booksZone-json/BooksZone.json'),
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
