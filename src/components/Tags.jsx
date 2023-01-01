import React, { useEffect, useState } from "react";
import api from "../config/api";

const Tags = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    api.get("categories").then((response) => setCategories(response?.data?.categories));
  }, []);

  return (
    <div className="text-center my-5">
      {categories.map((category) => (
        <button key={category} className="bg-green-400 text-gray-700/95  m-1 py-1 px-2 rounded-md hover:bg-green-500">
          {category}
        </button>
      ))}
    </div>
  );
};

export default Tags;
