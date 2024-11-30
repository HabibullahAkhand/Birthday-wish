import { useEffect, useState } from "react";
import { getReadBookDataFromLocalStorage } from "../../Utility/localStorage";
import {BarChart, Bar,XAxis,YAxis,CartesianGrid,Tooltip,ResponsiveContainer,} from "recharts";

const ReadPages = () => {
  const [readListBooksData, setReadListBookData] = useState([]);

  useEffect(() => {
    const readListBooksData = getReadBookDataFromLocalStorage() || [];
    setReadListBookData(readListBooksData);
  }, []);

  console.log(readListBooksData);
  return (
    <div className="w-3/4 h-[700px] mt-10 ml-auto mr-auto">
      <div className="container mx-auto text-center mb-12 p-4 rounded-lg shadow-lg bg-[#70c0d6b2]">
        <h2 className="lg:text-2xl font-work font-bold ">This Chart Represention by Selected Read Books Quantity andRead Books Toatal Pages</h2>
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={readListBooksData && readListBooksData}
          margin={{ top: 10, right: 30, left: 20, bottom: 100 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="bookName" angle={0} textAnchor="end" interval={0} />
          <YAxis />
          <Tooltip />
          <Bar dataKey="totalPages" fill="#70c0d6b2" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ReadPages;
