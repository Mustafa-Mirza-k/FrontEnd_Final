import axios from "axios";
import $ from "jquery";
import React, { Component } from "react";
import { Dropdown } from "react-bootstrap";
import ProgressBar from "react-bootstrap/ProgressBar";
import Loader from "react-loader-spinner";
import { Link } from "react-router-dom";
import background from "../../images/bg_home.jpg";

const height = window.innerHeight;
const width = window.innerWidth;

class homePage extends Component {
  state = {
    txtareaDisable: false,
    txtarea: "",
    txtAreaBgColor: "#FFFFFF",
    txtInputTextColor: "#2C74F1",
    output: "",
    arr: [],
    show: false,
    question: null,
    answers: [""],
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
      accuracy: null,
    });
    if (
      this.state.Paragraph == "Select Paragraph" &&
      this.state.Title != "Select Title"
    ) {
      alert("Please select the paragraph");
    } else if (this.state.model == "Select Model") {
      alert("Please select the model from the dropdown");
    } else if (this.state.txtarea != "") {
      this.setState({
        show: true,
      });

      await axios
        .get(
          `http://127.0.0.1:5000/?para=${this.state.txtarea}&answers=${this.state.answers}`
        )
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

  handleInputs = (index, e) => {
    const { name, value } = e.target;
    let answers = [...this.state.answers];
    answers[index] = value;
    this.setState({ answers });
  };

  render() {
    const styleInputTxtArea = {
      padding: "20px",
      color: this.state.txtInputTextColor,
      background: this.state.txtAreaBgColor,
      height: height / 2,
      width: width * 0.9,
      marginLeft: "5%",
      marginRight: "5%",
      marginTop: "2%",
      borderRadius: "10px",
    };
    const styleInputTxt = {
      padding: "10px",
      color: this.state.txtInputTextColor,
      background: this.state.txtAreaBgColor,
      borderRadius: "10px",
      marginTop: "2%",
      marginLeft: "40%",
      height: height / 15,
      width: "20%",
    };

    const styleOutputTxtArea = {
      padding: "20px",
      background: "#7E7C7C",
      height: height / 2,
      width: width * 0.9,
      marginLeft: "5%",
      marginRight: "5%",
      marginTop: "2%",
      borderRadius: "10px",
    };
    const btnAdd = {
      height: "50px",
      width: "50px",
      fontSize: "20px",
      marginLeft: "48%",
      marginTop: "2%",
    };

    const styledivdropdown = {
      marginTop: "1%",
      display: "flex",
      flex: 1,
      flexDirection: "row",
      width: width,
      justifyContent: "center",
    };

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
            <li>
              <Link className="smoothscroll" to="/QG">
                Question Generation
              </Link>
            </li>
            <li className="current">
              <Link className="smoothscroll" to="/AQG">
                Advanced Question Generation
              </Link>
            </li>
            <li>
              <Link className="smoothscroll" to="/About">
                About
              </Link>
            </li>
          </ul>
        </nav>

        <div style={{ color: "white" }}>
          <input
            type="file"
            accept=".txt"
            style={{ marginTop: "5%", marginLeft: "5%" }}
            onChange={(e) => this.handleChangeFile(e.target.files[0])}
          />
        </div>
        {console.log(this.state)}
        <textarea
          name="txtarea"
          value={this.state.txtarea}
          readOnly={this.state.txtareaDisable}
          onChange={this.handleChange}
          placeholder="Enter the text here!"
          style={styleInputTxtArea}
        ></textarea>
        {this.state.answers.map((item, index) => (
          <div>
            <textarea
              style={styleInputTxt}
              placeholder={"Enter answer of " + (index + 1) + " sentence"}
              onChange={(e) => this.handleInputs(index, e)}
            />

            <br />
          </div>
        ))}

        <button
          onClick={() =>
            this.setState({ answers: [...this.state.answers, ""] })
          }
          style={btnAdd}
        >
          {" "}
          +{" "}
        </button>

        <div style={styledivdropdown}>
          <button
            onClick={this.btngenQuestions}
            style={{ marginTop: "15%", fontSize: "20px" }}
          >
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
          readOnly
          style={styleOutputTxtArea}
        ></textarea>

        <div
          style={{
            marginLeft: "5%",
            marginRight: "5%",
            marginTop: "2%",
            borderRadius: "10px",
          }}
        ></div>

        <div style={{ paddingTop: height / 8 }}></div>
      </div>
    );
  }
}

export default homePage;
