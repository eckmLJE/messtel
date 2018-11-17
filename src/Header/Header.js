import React, { Fragment } from "react";
import "./Header.css";

const Header = () => (
  <Fragment>
    <header>
      <div className="fixed-header">
        <h1>messtel</h1>
        <nav>Nav</nav>
      </div>
    </header>
    <div
      style={{
        position: "relative",
        display: "block",
        width: "100%",
        height: "55px"
      }}
    />
  </Fragment>
);

export default Header;
