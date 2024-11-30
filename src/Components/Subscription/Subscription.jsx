

const Subscription = () => {
  const subscriptions = [
    { duration: "1 Month", price: 10, explanation: "Believe you can and you're halfway there. - Theodore Roosevelt" },
    { duration: "3 Months", price: 20, explanation: "The only way to do great work is to love what you do. - Steve Jobs" },
    { duration: "5 Months", price: 30, explanation: "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill" },
    { duration: "10 Months", price: 40, explanation: "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt" }
  ];

  return (
    <div className="container mx-auto mt-20">
        <div className="flex justify-between font-bold text-md lg:text-4xl ">
            <div className="">
                <div className=" bg-pink-600 text-white p-5 rounded-full">Subscription</div>
            </div>
            <div className="">
                <div className="bg-pink-600 text-white p-5 rounded-full">for individuals</div>
            </div>
        </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
        {subscriptions.map((subscription, index) => (
          <div key={index} className=" rounded-lg shadow-md p-4 bg-sky-100 mt-5 py-20 px-4 space-y-5">
            <h1 className="text-xl font-bold mb-2">{subscription.duration} Subscription</h1>
            <p>${subscription.price} per month</p>
            <p>{subscription.explanation}</p>
            <button className="bg-pink-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-4 btn">purchase </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Subscription;
