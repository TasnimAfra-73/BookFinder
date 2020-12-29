import React, { useState } from "react";
import Searchbar from "./components/Searchbar";
import BookList from "./components/BookList";
import { getBooksByTerm } from "./api/BookFinder";
import Pagination from "./components/Pagination";
import 'fomantic-ui-css/semantic.css';

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [books, setBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const handleSubmit = async (event) => {
    event.preventDefault();
    await getBooksByTerm(searchTerm, setBooks, currentPage, setTotalPages);
  };

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const nextPage = async (page_number) => {
    setCurrentPage(page_number);
    await getBooksByTerm(searchTerm, setBooks, currentPage, setTotalPages);
  };

  return (
    <div>
      <Searchbar handleChange={handleChange} handleSubmit={handleSubmit} />
      <BookList books={books} />
      {totalPages > 1 ? (
        <Pagination
          nextPage={nextPage}
          currentPage={currentPage}
          totalPages={totalPages}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default App;
