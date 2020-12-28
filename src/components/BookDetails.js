import React, { useState, useEffect } from "react";
import { getBookDetails } from "../api/BookFinder";
import { Link } from "react-router-dom";

const BookDetails = (props) => {
  const [currentBook, setCurrentBook] = useState({});

  useEffect(() => {
    getBookDetails(props.location.movie_id, setCurrentBook);
  }, []);

  const ImageURL =
    "https://image.tmdb.org/t/p/w500/" + currentBook.poster_path;
  return (
    <div>
      <div class="row">
        <div class="col s12 m7">
          <div class="card">
            <div class="card-image">
              {currentBook.poster_path != null ? (
                <img
                  src={ImageURL}
                  alt=""
                  style={{ width: "300", height: "600" }}
                />
              ) : (
                <img
                  src="https://picsum.photos/300/600"
                  alt=""
                  style={{ width: "300", height: "600" }}
                />
              )}
              <span class="card-title">{currentBook.original_title}</span>
            </div>
            <div class="card-content">
              <p>{currentBook.overview}</p>
            </div>
            <div class="card-action">
              <Link to="/">Go back to searching books!</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
