import React from "react";
import BookSlide from "../components/BookSlide.jsx";

const Top5_4Book = ({ data }) => (
  <BookSlide book={data.books[2]} index={4} total={7} data={data} />
);

export default Top5_4Book;
