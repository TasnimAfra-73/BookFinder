import React, { useState } from "react";
import Searchbar from "./components/Searchbar";
import BookList from "./components/BookList";
import { getBooksByTerm } from "./api/BookFinder";
import Pagination from "./components/Pagination";
import 'fomantic-ui-css/semantic.css';

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [books, setBooks] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);



  const handleSubmit = async (event) => {
    event.preventDefault();
    await getBooksByTerm(searchTerm, setBooks, currentIndex, setTotalItems);
  };

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

   const nextPage = async (index) => {
    setCurrentIndex(index);
    await getBooksByTerm(searchTerm, setBooks, currentIndex, setTotalItems);
  };

  return (
    <div>
      <Searchbar handleChange={handleChange} handleSubmit={handleSubmit} />
      <BookList books={books} />
      {totalItems > 10 ? (
        <Pagination
          nextPage={nextPage}
          currentIndex={currentIndex}
          totalItems={totalItems}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default App;
