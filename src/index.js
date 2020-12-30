import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import BookDetails from "./components/BookDetails";
import Navbar from "./components/Navbar";
import { BrowserRouter, Link, Route } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <div>
        <Route path="/" exact component={App} />
        <Route path="/book/:id" exact component={BookDetails} />
      </div>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
