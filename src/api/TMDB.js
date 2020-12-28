import axios from "axios";

const TMDB = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});

const getBooksByTerm = (SearchTerm, setBooks, page_number, setTotalPages) => {
  TMDB.get("/search/movie/", {
    params: {
      api_key: "209d31e2b7002857fcc0fdeff8329ae2",
      query: SearchTerm,
      page: page_number,
    },
  }).then((response) => {
    console.log(response.data);
    setBooks(response.data.results);
    setTotalPages(response.data.total_pages);
  });
};

const getBookDetails = (bookID, setCurrentBook) => {
  TMDB.get("movie/" + bookID, {
    params: {
      api_key: "209d31e2b7002857fcc0fdeff8329ae2",
    },
  }).then((response) => {
    console.log(response.data);
    setCurrentBook(response.data);
  });
};

export { getBooksByTerm, getBookDetails };
