import React from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export class Basic extends React.Component {
  render() {
    return (
      <>
        <Header />
        {this.props.children}
        <Footer />
      </>
    );
  }
}
