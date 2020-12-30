import react from "react";
import { Link } from "react-router-dom";

const Book = (props) => {
  const ImageURL = props.data.volumeInfo.imageLinks.thumbnail;
  return (
    <div class="col s12 m4">
      <div class="card">
        <div class="card-image">
          {ImageURL == null ? (
            <img
              src="https://picsum.photos/200/300"
              alt=""
              style={{ width: "100", height: "200" }}
            />
          ) : (
            <img
              src={ImageURL}
              alt=""
              style={{ width: "100", height: "200" }}
            />
          )}

          <span class="card-title">{props.data.volumeInfo.title}</span>
        </div>
        <div class="card-content">{props.data.volumeInfo.authors}</div>
        <div class="card-action">
          <Link
            to={{
              pathname: "/book/" + props.data.id,
              details: props.data.volumeInfo,
            }}
          >
            See Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Book;
