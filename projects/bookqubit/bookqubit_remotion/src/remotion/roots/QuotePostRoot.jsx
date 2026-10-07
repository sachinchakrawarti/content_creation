import React from "react";
import { Composition } from "remotion";
import quoteSet from "../compositions/instagram/QuotePost/data/quotes.js";
import Quote1Hook from "../compositions/instagram/QuotePost/slides/Quote1Hook.jsx";
import Quote2Context from "../compositions/instagram/QuotePost/slides/Quote2Context.jsx";
import Quote3Meaning from "../compositions/instagram/QuotePost/slides/Quote3Meaning.jsx";
import Quote4Takeaway from "../compositions/instagram/QuotePost/slides/Quote4Takeaway.jsx";
import Quote5CTA from "../compositions/instagram/QuotePost/slides/Quote5CTA.jsx";
import { theme } from "../theme.js";

const common = {
  durationInFrames: 1, fps: 30,
  width: theme.width, height: theme.height,
  defaultProps: { set: quoteSet },
};

export const QuotePostRoot = () => (
  <>
    <Composition id="IG-Quote-01" component={Quote1Hook}     {...common} />
    <Composition id="IG-Quote-02" component={Quote2Context}  {...common} />
    <Composition id="IG-Quote-03" component={Quote3Meaning}  {...common} />
    <Composition id="IG-Quote-04" component={Quote4Takeaway} {...common} />
    <Composition id="IG-Quote-05" component={Quote5CTA}      {...common} />
  </>
);
