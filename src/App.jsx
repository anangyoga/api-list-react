import { useEffect, useState } from "react";
import Jumbotron from "./components/Jumbotron";
import ListAPI from "./components/ListAPI";
import Tags from "./components/Tags";
import api from "./config/api";

const App = () => {
  const [entries, setEntries] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    api.get("entries").then((response) => setEntries(response.data.entries.slice(0, 30)));
  }, []);

  return (
    <div>
      <Jumbotron query={query} setQuery={setQuery} />
      <div className="container mx-auto max-w-4xl">
        <Tags />
        <ListAPI entries={entries} query={query} />
      </div>
    </div>
  );
};

export default App;
