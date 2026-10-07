import React from "react";

const PostChrome = ({
  index,
  total = 7,
  brand = "BOOKQUBIT",
  website = "www.book.qubit.com",
  headerColor = "#a1a1aa",
  footerColor = "#71717a",
}) => (
  <>
    <div
      style={{
        position: "absolute", top: 60, left: 70, right: 70,
        display: "flex", justifyContent: "space-between",
        fontSize: 22, fontWeight: 800, letterSpacing: 3,
        color: headerColor, fontFamily: "Arial, Helvetica, sans-serif",
      }}
    >
      <span>{brand}</span>
      <span>
        {String(index).padStart(2, "0")} / {String(total).padStart(2, "0")}
      </span>
    </div>

    <div
      style={{
        position: "absolute", bottom: 60, left: 0, right: 0,
        textAlign: "center",
        fontSize: 20, fontWeight: 700, letterSpacing: 3,
        color: footerColor, fontFamily: "Arial, Helvetica, sans-serif",
      }}
    >
      {website}
    </div>
  </>
);

export default PostChrome;
