import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <header id="home">
        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav" style={{ justifyContent: "center" }}>
            <li className="current">
              <Link className="smoothscroll" to="/home">
                Home
              </Link>
            </li>
            <li>
              <Link className="smoothscroll" to="/QG">
                Question Generation
              </Link>
            </li>
            <li>
              <Link className="smoothscroll" to="/About">
                About
              </Link>
            </li>
          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <h1 className="responsive-headline">
              Question Generation through Neural Model
            </h1>
            {/* <h3><span>A Highly trained model which generates accurate questions using Seq2Seq model having decoder with attention mechanism. You just have to input paragraph or an article and this highly trained model generate question in few seconds.</span></h3> */}
            <p
              className="scrolldown"
              style={{
                color: "white",
                letterSpacing: "2.5px",
                fontStyle: "opensans-bold",
                fontWeight: "bold",
                fontFamily: "sans-serif",
                fontSize: "16px",
              }}
            >
              <span> NITESH CONGREJA </span>
            </p>
            <p
              className="scrolldown"
              style={{
                color: "white",
                letterSpacing: "2.5px",
                fontStyle: "opensans-bold",
                fontWeight: "bold",
                fontFamily: "sans-serif",
                fontSize: "16px",
              }}
            >
              <span> MUSTAFA MIRZA </span>
            </p>
            <Link to="/QG">
              <button style={{ fontSize: "20px" }}>Get Started!</button>
              <hr />
            </Link>
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
    );
  }
}

export default Header;
