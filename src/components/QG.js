import React, { Component, useEffect } from "react";
import axios from "axios";
const height = window.innerHeight;
const width = window.innerWidth;
import Loader from "react-loader-spinner";
import { Link } from "react-router-dom";
import background from "../../images/bg_home.jpg";
import $ from "jquery";
import ReactFileReader from "react-file-reader";

class homePage extends Component {
  state = {
    txtarea: "",
    output: "",
    arr: [],
    show: false,
  };

  componentDidMount() {
    $(document).ready(function () {
      $(window).scroll(function () {
        if ($(window).scrollTop() > $(window).height()) {
          $(".nav").css({ "background-color": "transparent" });
        } else {
          $(".nav").css({ "background-color": "black" });
        }
      });
    });
  }

  btngenQuestions = async (e) => {
    this.setState({
      output: "",
    });
    if (this.state.txtarea != "") {
      this.setState({
        show: true,
      });
      await axios
        .get(`http://127.0.0.1:5000/${this.state.txtarea}`)
        .then((res) => {
          this.setState({
            arr: res.data.questions,
          });
        })
        .catch(function (error) {
          alert("Server error. Please try again later");
        });
      this.state.arr.forEach((element) => {
        this.setState({
          show: false,
        });
        this.setState({
          output: this.state.output.concat(element + " " + "\n"),
        });
      });

      console.log(this.state.output);
    } else {
      alert("Text is empty");
    }
  };

  handleFile = (e) => {
    const content = e.target.result;
    console.log("file content", content);
    this.setState({
      txtarea: content,
    });
    // You can set content in state and show it in render.
  };

  handleChangeFile = (file) => {
    let fileData = new FileReader();
    fileData.onloadend = this.handleFile;
    fileData.readAsText(file);
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      txtarea: value,
    });
  };
  render() {
    return (
      <div style={{ backgroundImage: `url(${background})`, width: width }}>
        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav" style={{ justifyContent: "center" }}>
            <li>
              <Link className="smoothscroll" to="/">
                Home
              </Link>
            </li>
            <li className="current">
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
      <div style={{color:"white"}}>
        <input
          type="file"
          accept=".txt"
          style={{ marginTop: "5%", marginLeft: "5%", }}
          onChange={(e) => this.handleChangeFile(e.target.files[0])}
        />
        </div>

        <textarea
          name="txtarea"
          value={this.state.txtarea}
          onChange={this.handleChange}
          placeholder="Enter the text here!"
          style={{
            padding: "10px",
            color: "#2C74F1",
            height: height / 3,
            width: width * 0.9,
            marginLeft: "5%",
            marginRight: "5%",
            marginTop: "1%",
            borderRadius: "10px",
          }}
        ></textarea>
        <div
          style={{
            marginTop: "1%",
            display: "flex",
            flex: 1,
            flexDirection: "row",
            width: width,
            justifyContent: "center",
          }}
        >
          <button onClick={this.btngenQuestions} style={{ fontSize: "20px" }}>
            Generate Questions
          </button>
          {this.state.show == true ? (
            <Loader
              type="ThreeDots"
              color="#2C74F1"
              height={50}
              width={50}
              timeout={1000000} //3 secs
              style={{ paddingLeft: "4%" }}
            />
          ) : (
            " "
          )}
        </div>

        <textarea
          name="output"
          placeholder="Output!"
          value={this.state.output}
          style={{
            padding: "20px",
            color: "#2C74F1",
            height: height / 2,
            width: width * 0.9,
            marginLeft: "5%",
            marginRight: "5%",
            marginTop: "2%",
            borderRadius: "10px",
          }}
        ></textarea>
        <div style={{ paddingTop: height / 8 }}></div>
      </div>
    );
  }
}

export default homePage;
