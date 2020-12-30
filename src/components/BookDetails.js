import React, { useState, useEffect } from "react";
import { getBookDetails } from "../api/BookFinder";
import { Link } from "react-router-dom";

const BookDetails = (props) => {
  console.log(props)
  const [currentBook, setCurrentBook] = useState({});

  useEffect(() => {
    getBookDetails(props.location.details, setCurrentBook);
  }, []);

  return (
    <div>
      <div class="row">
        <div class="col s12 m7">
          <div class="card">
            <div class="card-image">
              <img
                src={props.history.location.details.imageLinks.thumbnail}
                alt=""
                style={{ width: "400", height: "800" }}
              />
              <span class="card-title">{props.history.location.details.title}</span>
            </div>
            <div class="card-content">
              <p>{props.history.location.details.authors}</p>
            </div>
             <div class="card-content">
              <p>{props.history.location.details.description}</p>
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
