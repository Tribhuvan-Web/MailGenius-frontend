import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-lg w-full bg-white rounded-lg shadow-lg p-8 text-center">
        <h1 className="mt-6 text-6xl font-bold text-red-500">404</h1>
        <h2 className="mt-4 text-2xl font-semibold text-gray-800">
          Page Not Found
        </h2>
        <p className="mt-4 text-gray-600">
          Oops! The page you're looking for might have been removed or is
          temporarily unavailable.
        </p>

        <Link
          to="/"
          className="mt-8 inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors duration-200"
        >
          Return to Homepage
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
