import React from "react";
import BookSlide from "../components/BookSlide.jsx";

const Top5_5Book = ({ data }) => (
  <BookSlide book={data.books[3]} index={5} total={7} data={data} />
);

export default Top5_5Book;
