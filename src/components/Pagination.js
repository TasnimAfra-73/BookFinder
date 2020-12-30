import React from "react";

const Pagination = (props) => {
  console.log(props);
    const totalPages=props.totalItems/10;
    const page_links = [];
    for (let i = 1, index=0; i <= totalPages; i++, index=index+10) {
      page_links.push(
        <button
          className="wave-effect active"
          key={index}
          onClick={() => {
            props.nextPage(index);
          }}
        >
          {i}
        </button>
      );
    }
    return (
      <div className="container">
        <div className="row">{page_links}</div>
      </div>
    );
};

export default Pagination;
