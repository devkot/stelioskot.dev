import React from "react";
import { Header } from "../components/Header";

export class Basic extends React.Component {
  render() {
    return (
      <>
        <Header />
        {this.props.children}
      </>
    );
  }
}
