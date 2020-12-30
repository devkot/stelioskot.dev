import React from "react";
import BlogPost from "../components/BlogPost";

const TITLE = "What Makes You Tick";

const CONTENT = `
bla
bla
bla
bla
bla
bla
bla

`;

const WhatMakesYouTick: React.FunctionComponent = () => {
  return <BlogPost postTitle={TITLE} content={CONTENT} />;
};

export default WhatMakesYouTick;
