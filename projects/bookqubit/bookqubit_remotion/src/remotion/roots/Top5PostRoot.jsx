import React from "react";
import { Composition } from "remotion";
import { bookLists } from "../compositions/instagram/Top5Post/data/bookLists.js";
import Top5_1Hook from "../compositions/instagram/Top5Post/slides/Top5_1Hook.jsx";
import Top5_2Book from "../compositions/instagram/Top5Post/slides/Top5_2Book.jsx";
import Top5_3Book from "../compositions/instagram/Top5Post/slides/Top5_3Book.jsx";
import Top5_4Book from "../compositions/instagram/Top5Post/slides/Top5_4Book.jsx";
import Top5_5Book from "../compositions/instagram/Top5Post/slides/Top5_5Book.jsx";
import Top5_6Book from "../compositions/instagram/Top5Post/slides/Top5_6Book.jsx";
import Top5_7CTA from "../compositions/instagram/Top5Post/slides/Top5_7CTA.jsx";
import { theme } from "../theme.js";

const layout = {
  durationInFrames: 1,
  fps: 30,
  width: theme.width,
  height: theme.height,
};

export const Top5PostRoot = () => (
  <>
    {bookLists.map((list) => (
      <React.Fragment key={list.id}>
        <Composition id={`IG-Top5-${list.id}-01-Hook`} component={Top5_1Hook} {...layout} defaultProps={{ data: list }} />
        <Composition id={`IG-Top5-${list.id}-02-Book`} component={Top5_2Book} {...layout} defaultProps={{ data: list }} />
        <Composition id={`IG-Top5-${list.id}-03-Book`} component={Top5_3Book} {...layout} defaultProps={{ data: list }} />
        <Composition id={`IG-Top5-${list.id}-04-Book`} component={Top5_4Book} {...layout} defaultProps={{ data: list }} />
        <Composition id={`IG-Top5-${list.id}-05-Book`} component={Top5_5Book} {...layout} defaultProps={{ data: list }} />
        <Composition id={`IG-Top5-${list.id}-06-Book`} component={Top5_6Book} {...layout} defaultProps={{ data: list }} />
        <Composition id={`IG-Top5-${list.id}-07-CTA`}  component={Top5_7CTA}  {...layout} defaultProps={{ data: list }} />
      </React.Fragment>
    ))}
  </>
);
