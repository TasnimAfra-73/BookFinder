import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const BookDetails = (props) => {
  console.log(props)
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
            </div>
            <div className="card-content">
              <span
                className="card-title"
                style={{ color: "teal", fontSize: "100", marginLeft:"50"}}
              >
                <p style={{ marginLeft: "50" }}>
                  {props.history.location.details.title}
                </p>
              </span>
            </div>
            <div className="card-content">
              <p>{props.history.location.details.authors}</p>
            </div>
            <div className="card-content">
              <p>{props.history.location.details.description}</p>
            </div>
            <div className="card-action">
              <Link to="/">Go back to search page!</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
