import React from "react";
import BookSlide from "../components/BookSlide.jsx";

const Top5_3Book = ({ data }) => (
  <BookSlide book={data.books[1]} index={3} total={7} data={data} />
);

export default Top5_3Book;
