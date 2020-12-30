import React from "react";

const Searchbar = (props) => {
console.log(props)
  return (
    <div className="container">
      <div className="row">
        <section className="col s6 offset-s4">
          <form action="" onSubmit={props.handleSubmit}>
            <div className="input-field">
              <input
                placeholder="Search for books"
                type="text"
                onChange={props.handleChange}
              />
            </div>
          </form>
        </section>
        <div class='ui small compact selection menu' style={{ marginLeft: '20px' }}>
      <div class='ui simple dropdown item'>
        Sort
        <i class='dropdown icon'></i>
        <div class='menu'>
          <div
            class='item'
            onClick={() => {
              props.setOrder('newest')
  
              props.handleSubmitOrder()
            }}
          >
            Newest
          </div>
          <div
            class='item'
            onClick={() => {
              props.setOrder('relevance')
              props.handleSubmitOrder()
            }}
          >
            Most relevant
          </div>
        </div>
      </div>
    </div>
      </div>
    </div>
  );
};

export default Searchbar;
