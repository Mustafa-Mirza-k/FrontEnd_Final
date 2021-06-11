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
    output: "",
    arr: [],
    show: false,
    showParaDropDown: false,
    model: "Select Model",
    Title: "Select Title",
    Paragraph: "Select Paragraph",
    accuracy: null,
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
    if (this.state.model == "Select Model") {
      alert("Please select the model from the dropdown");
    } else if (this.state.txtarea != "") {
      this.setState({
        show: true,
      });

      await axios
        .get(
          `${
            this.state.model == "T5 Model"
            // Nitesh Check this line below
              ? `http://127.0.0.1:5000/?para=${this.state.txtarea}&questions=${[["In what country is Normandy located?"],["When were the Normans in Normandy?"],["From which countries did the Norse originate?"],["Who was the Norse leader?"],["What century did the Normans first gain their separate identity?"],["Who did King Charles III swear fealty to?"],["When did the Frankish identity emerge?"],["What is France a region of?"]]}`
              : `http://127.0.0.1:5000/${this.state.txtarea}`
          }`
        )
        .then((res) => {
          this.setState({
            arr: res.data.questions,
            accuracy: res.data.accuracy,
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
  


  renderParaDropdown = () => {
    return [
      <Dropdown ref = {(input)=> this.menu = input} style={{ marginTop: "1%", marginLeft: "5%" }}>
      <Dropdown.Toggle variant="primary" id="dropdown-basic">
        {this.state.Paragraph}
      </Dropdown.Toggle>
      <Dropdown.Menu>
     
        <Dropdown.Item
          href=""
          onClick={() => this.setState({ Paragraph: "Para 1", txtarea: 'Para 1', txtareaDisable: true,   })}
        >
          Para 1
        </Dropdown.Item>
        <Dropdown.Item
          href=""
          onClick={() => this.setState({ Paragraph: "Para 2",  txtarea: 'Para 2', txtareaDisable: true,   })}
        >
          Para 2
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    ];
  };


  accuracy = (acc) => {
    return [
      <h1 style={{ color: "white" }}>Accuracy</h1>,
      // /* Bleu Accuracy */
      <h4 style={{ color: "white" }}>BLEU</h4>,
      <ProgressBar
        variant="success"
        now={acc[0]}
        label={"(" + (Math.round(acc[0] * 100) / 100).toFixed(2) + ")"}
        style={{
          height: height * 0.05,
        }}
      />,

      // /* METEOR Accuracy */
      <h4 style={{ color: "white", marginTop: "2%" }}>METEOR</h4>,
      <ProgressBar
        variant="success"
        now={acc[1]}
        label={"(" + (Math.round(acc[1] * 100) / 100).toFixed(2) + ")"}
        style={{
          height: height * 0.05,
        }}
      />,
    ];
  };

  render() {
    const styletxtArea = {
      padding: "20px",
      color: "#2C74F1",
      height: height / 2,
      width: width * 0.9,
      marginLeft: "5%",
      marginRight: "5%",
      marginTop: "2%",
      borderRadius: "10px",
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
        

    
        <Dropdown ref = {(input)=> this.menu = input} style={{ marginTop: "1%", marginLeft: "5%" }}>
          <Dropdown.Toggle variant="primary" id="dropdown-basic">
            {this.state.Title}
          </Dropdown.Toggle>
          

          <Dropdown.Menu>

          <Dropdown.Item
              href=""
              onClick={() => this.setState({ Title: "Select Title",  txtarea: "",  showParaDropDown: false , txtareaDisable: false, })}
            >
                None
            </Dropdown.Item>
            <Dropdown.Item
              href=""
              onClick={() => this.setState({ Title: "Title 1",   showParaDropDown: true  })}
            >
              Title 1
            </Dropdown.Item>
            <Dropdown.Item
              href=""
              onClick={() => this.setState({ Title: "Title 2", showParaDropDown: true   })}
            >
              Title 2
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        
        {this.state.showParaDropDown == true  && this.renderParaDropdown()}
        

        <textarea
          name="txtarea"
          value={this.state.txtarea}
          readOnly = {this.state.txtareaDisable}
          onChange={this.handleChange}
          placeholder="Enter the text here!"
          style={styletxtArea}
        ></textarea>
        <div style={styledivdropdown}>
          <Dropdown>
            <Dropdown.Toggle variant="primary" id="dropdown-basic">
              {this.state.model}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item
                href=""
                onClick={() => this.setState({ model: "T5 Model" })}
              >
                T5 Model
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
          style={styletxtArea}
        ></textarea>

        

        <div
          style={{
            marginLeft: "5%",
            marginRight: "5%",
            marginTop: "2%",
            borderRadius: "10px",
          }}
        >
          {this.state.accuracy !== null && this.accuracy(this.state.accuracy)}
        </div>

        <div style={{ paddingTop: height / 8 }}></div>
      </div>
    );
  }
}

export default homePage;
