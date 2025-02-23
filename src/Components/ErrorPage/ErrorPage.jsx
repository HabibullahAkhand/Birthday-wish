import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex flex-col justify-center items-center">
        <h1 className="font-work text-3xl font-bold mb-2">OOOooops!!!</h1>
        <h2 className="font-work text-3xl font-bold mb-2">{error.status} {error.statusText}</h2>
        <Link to="/" className="font-work text-2xl font-semibold mb-4 text-[#2ccf13]">Go Back Home</Link>
        <label className="swap swap-flip text-9xl">
          <input type="checkbox" />
        </label>
      </div>
    </div>
  );
};

export default ErrorPage;
