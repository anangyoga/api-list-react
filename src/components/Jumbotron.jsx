import React from "react";

const Jumbotron = ({ query, setQuery }) => {
  return (
    <div className="bg-gradient-to-r from-green-400 to-blue-500 text-center py-20 px-2">
      <h2 className="font-semibold text-gray-700/95 text-2xl">Search APIs</h2>
      <div className="flex items-center mt-6 max-w-md mx-auto bg-white rounded-md overflow-hidden">
        <input value={query} onChange={(e) => setQuery(e.target.value)} className="w-full px-4 py-2 rounded-md text-gray-800 focus:outline-none" type="text" placeholder="Search Pokemon API . . ." />
      </div>
    </div>
  );
};

export default Jumbotron;
