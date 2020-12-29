import axios from "axios";

const BookFinder = axios.create({
  baseURL: "https://www.googleapis.com/books/v1",
});

const getBooksByTerm = (SearchTerm, setBooks, page_number, setTotalPages) => {
  BookFinder.get("/volumes/", {
    params: {
      key: "AIzaSyDMfnUMmRi-jpawGLffj4fodpE4UH4G8lM",
      q: SearchTerm,
      page: page_number,
    },
  }).then((response) => {
    console.log(response.data);
    setBooks(response.data.items);
    setTotalPages(response.data.total_pages);
  });
};

const getBookDetails = (bookID, setCurrentBook) => {
  BookFinder.get("movie/" + bookID, {
    params: {
      key: "AIzaSyDMfnUMmRi-jpawGLffj4fodpE4UH4G8lM",
    },
  }).then((response) => {
    console.log(response.data);
    setCurrentBook(response.data);
  });
};

export { getBooksByTerm, getBookDetails };
