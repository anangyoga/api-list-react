import React from "react";

const CardAPI = ({ item }) => {
  return (
    <a href={item?.Link} target="_blank">
      <div className="border-2 p-2  border-emerald-500 text-gray-700/90 rounded-md bg-emerald-100 hover:bg-emerald-200 cursor-pointer h-full">
        {item?.API && (
          <p>
            Title: <span className="font-semibold"> {item?.API} </span>
          </p>
        )}
        {item?.Description && (
          <p>
            Description: <span className="font-semibold"> {item?.Description}</span>
          </p>
        )}
        {item?.Auth && (
          <p>
            Auth: <span className="font-semibold">{item?.Auth}</span>
          </p>
        )}
        {item?.Cors && (
          <p>
            Cors: <span className="font-semibold">{item?.Cors}</span>
          </p>
        )}
        {item?.Category && (
          <p>
            Category: <span className="font-semibold"> {item?.Category}</span>
          </p>
        )}
      </div>
    </a>
  );
};

export default CardAPI;
