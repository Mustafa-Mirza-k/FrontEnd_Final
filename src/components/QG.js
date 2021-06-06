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
    txtarea: "",
    output: "",
    arr: [],
    show: false,
    model: "Select Model",
    paragraph: "Select Paragraph",
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
    if (this.state.model == "Select Model") {
      alert("Please select the model from the dropdown");
    } else if (this.state.txtarea != "") {
      this.setState({
        show: true,
      });
      
      await axios
        .get(
          `${
            this.state.model == "BERT Model"
              ? `http://127.0.0.1:5000/${this.state.txtarea}`
              : `http://127.0.0.1:5000/${this.state.txtarea}`
          }`
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
  render() {
    const options = ["one", "two", "three"];

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

        <div style={{ color: "white" }}>
          <input
            type="file"
            accept=".txt"
            style={{ marginTop: "5%", marginLeft: "5%" }}
            onChange={(e) => this.handleChangeFile(e.target.files[0])}
          />
        </div>
        <Dropdown       
        style={{ marginTop: "1%", marginLeft: "5%" }}>
            <Dropdown.Toggle variant="primary" id="dropdown-basic" >
              {this.state.paragraph}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item
                href=""
                onClick={() => this.setState({ paragraph: "Para 1" })}
              >
                Para 1
              </Dropdown.Item>
              <Dropdown.Item
                href=""
                onClick={() => this.setState({ paragraph: "Para 2" })}
              >
                Para 2
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

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
          <Dropdown>
            <Dropdown.Toggle variant="primary" id="dropdown-basic">
              {this.state.model}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item
                href=""
                onClick={() => this.setState({ model: "BERT Model" })}
              >
                BERT Model
              </Dropdown.Item>
              <Dropdown.Item
                href=""
                onClick={() => this.setState({ model: "Seq2Seq Model" })}
              >
                Seq2Seq Model
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

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

       

        <textarea
          id="consolePlaceHolderColor"
          name="console"
          placeholder="Console Results"
          value={this.state.output}
          style={{
            
            padding: "20px",
            color: "#2C74F1",
            backgroundColor:"#494949",
            height: height / 2,
            width: width * 0.9,
            marginLeft: "5%",
            marginRight: "5%",
            marginTop: "2%",
            borderRadius: "10px",
          }}
        ></textarea>

        

        <div style={{ 
          height: height * 0.1,
          width: width * 0.9,
          marginLeft: "5%",
          marginRight: "5%",
          marginTop: "2%",
          borderRadius: "10px",
        }}>  
        <h1 style={{color: "white"}}>Accuracy</h1>
        <ProgressBar variant="success" now={30} label='(30%)'  
        style={{ 
          height: height * 0.05,
        }}/>
        </div>

        <div style={{ paddingTop: height / 8  }}></div>

      </div>
    );
    
  }
  
}



export default homePage;
