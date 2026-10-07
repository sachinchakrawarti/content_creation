import React from "react";
import BookSlide from "../components/BookSlide.jsx";

const Top5_2Book = ({ data }) => (
  <BookSlide book={data.books[0]} index={2} total={7} data={data} />
);

export default Top5_2Book;
