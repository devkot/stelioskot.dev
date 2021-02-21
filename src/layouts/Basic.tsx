import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const Basic: React.FunctionComponent = (props) => (
  <>
    <div id="page-top" />
    <Header />
    {props.children}
    <Footer />
  </>
);
