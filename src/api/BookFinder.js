import axios from "axios";

const BookFinder = axios.create({
  baseURL: "https://www.googleapis.com/books/v1",
});

const getBooksByTerm = (SearchTerm, setBooks, start_index, setTotalItems) => {
  BookFinder.get("/volumes/", {
    params: {
      key: "AIzaSyDMfnUMmRi-jpawGLffj4fodpE4UH4G8lM",
      q: SearchTerm,
      startIndex: start_index,
    },
  }).then((response) => {
    console.log(response.data);
    setBooks(response.data.items);
    setTotalItems(response.data.totalItems);
  });
};

const getBooksByOrder = (
  SearchTerm,
  setBooks,
  order
) => {
BookFinder
  .get('/', {
      params: {
        key: 'AIzaSyDMfnUMmRi-jpawGLffj4fodpE4UH4G8lM',
        q: SearchTerm,
        startIndex: 0,
        orderBy: order,
      },
    })
    .then(response => {
      setBooks(response.data.items)
    })
}

export { getBooksByTerm, getBooksByOrder};
