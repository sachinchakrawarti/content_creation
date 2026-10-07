import React from "react";
import BookSlide from "../components/BookSlide.jsx";

const Top5_6Book = ({ data }) => (
  <BookSlide book={data.books[4]} index={6} total={7} data={data} />
);

export default Top5_6Book;
