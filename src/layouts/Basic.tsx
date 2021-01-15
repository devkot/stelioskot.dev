import React from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export const Basic: React.FunctionComponent = (props) => (
  <>
    <Header />
    {props.children}
    <Footer />
  </>
);
