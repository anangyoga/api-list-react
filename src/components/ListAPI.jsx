import React from "react";
import CardAPI from "./CardAPI";

const ListAPI = ({ entries, query }) => {
  return (
    <div className="mx-2 mb-10">
      <h3 className="font-semibold text-xl text-gray-700/95 my-5">API Lists</h3>
      <div className="grid gap-4 md:grid-cols-3">
        {entries
          .filter((search) => search.API.toLowerCase().includes(query))
          .map((item) => (
            <CardAPI item={item} key={item?.Description} />
          ))}
      </div>
    </div>
  );
};

export default ListAPI;
