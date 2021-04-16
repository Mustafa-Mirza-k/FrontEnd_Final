import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from 'react-router-dom'
import 'react-app-polyfill/ie9';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
const height = window.innerHeight;
const width = window.innerWidth;

ReactDOM.render(
    <Router>
        <App />
        <div style={{ backgroundColor: "black", textAlign: "center", height: height / 10 }}>
                <text style={{
                    width: width,
                    position: 'relative',
                    bottom: "-50%", fontFamily: "sans-serif", fontWeight: "bold", color: "white"
                }}>© 2021 Mustafa and Nitesh.  All rights reserved.</text>
            </div>
    </Router>
    , document.getElementById("root"));
