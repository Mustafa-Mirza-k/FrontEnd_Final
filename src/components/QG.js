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
    showParaDropDown: false,
    model: "Select Model",
    Title: "Select Title",
    Paragraph: "Select Paragraph",
    accuracy: null,
    question: null,
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

  //Title's names
  title1 = "Normans";
  title2 = "Computational_complexity_theory";
  title3 = "Victoria (Australia)";

  //Title1 Paragraphs
  para1 =
    'The Normans (Norman: Nourmands; French: Normands; Latin: Normanni) were the people who in the 10th and 11th centuries gave their name to Normandy, a region in France. They were descended from Norse ("Norman" comes from "Norseman") raiders and pirates from Denmark, Iceland and Norway who, under their leader Rollo, agreed to swear fealty to King Charles III of West Francia. Through generations of assimilation and mixing with the native Frankish and Roman-Gaulish populations, their descendants would gradually merge with the Carolingian-based cultures of West Francia. The distinct cultural and ethnic identity of the Normans emerged initially in the first half of the 10th century, and it continued to evolve over the succeeding centuries';
  para2 =
    "The Norman dynasty had a major political, cultural and military impact on medieval Europe and even the Near East. The Normans were famed for their martial spirit and eventually for their Christian piety, becoming exponents of the Catholic orthodoxy into which they assimilated. They adopted the Gallo-Romance language of the Frankish land they settled, their dialect becoming known as Norman, Normaund or Norman French, an important literary language. The Duchy of Normandy, which they formed by treaty with the French crown, was a great fief of medieval France, and under Richard I of Normandy was forged into a cohesive and formidable principality in feudal tenure. The Normans are noted both for their culture, such as their unique Romanesque architecture and musical traditions, and for their significant military accomplishments and innovations. Norman adventurers founded the Kingdom of Sicily under Roger II after conquering southern Italy on the Saracens and Byzantines, and an expedition on behalf of their duke, William the Conqueror, led to the Norman conquest of England at the Battle of Hastings in 1066. Norman cultural and military influence spread from these new European centres to the Crusader states of the Near East, where their prince Bohemond I founded the Principality of Antioch in the Levant, to Scotland and Wales in Great Britain, to Ireland, and to the coasts of north Africa and the Canary Islands.";
  para3 =
    "In the course of the 10th century, the initially destructive incursions of Norse war bands into the rivers of France evolved into more permanent encampments that included local women and personal property. The Duchy of Normandy, which began in 911 as a fiefdom, was established by the treaty of Saint-Clair-sur-Epte between King Charles III of West Francia and the famed Viking ruler Rollo, and was situated in the former Frankish kingdom of Neustria. The treaty offered Rollo and his men the French lands between the river Epte and the Atlantic coast in exchange for their protection against further Viking incursions. The area corresponded to the northern part of present-day Upper Normandy down to the river Seine, but the Duchy would eventually extend west beyond the Seine. The territory was roughly equivalent to the old province of Rouen, and reproduced the Roman administrative structure of Gallia Lugdunensis II (part of the former Gallia Lugdunensis).";

  //Title2 Paragraphs
  para4 =
    "Computational complexity theory is a branch of the theory of computation in theoretical computer science that focuses on classifying computational problems according to their inherent difficulty, and relating those classes to each other. A computational problem is understood to be a task that is in principle amenable to being solved by a computer, which is equivalent to stating that the problem may be solved by mechanical application of mathematical steps, such as an algorithm.";
  para5 =
    "A problem is regarded as inherently difficult if its solution requires significant resources, whatever the algorithm used. The theory formalizes this intuition, by introducing mathematical models of computation to study these problems and quantifying the amount of resources needed to solve them, such as time and storage. Other complexity measures are also used, such as the amount of communication (used in communication complexity), the number of gates in a circuit (used in circuit complexity) and the number of processors (used in parallel computing). One of the roles of computational complexity theory is to determine the practical limits on what computers can and cannot do.";
  para6 =
    "Closely related fields in theoretical computer science are analysis of algorithms and computability theory. A key distinction between analysis of algorithms and computational complexity theory is that the former is devoted to analyzing the amount of resources needed by a particular algorithm to solve a problem, whereas the latter asks a more general question about all possible algorithms that could be used to solve the same problem. More precisely, it tries to classify problems that can or cannot be solved with appropriately restricted resources. In turn, imposing restrictions on the available resources is what distinguishes computational complexity from computability theory: the latter theory asks what kind of problems can, in principle, be solved algorithmically.";

  //Title3 Paragraphs
  para7 =
    'The economy of Victoria is highly diversified: service sectors including financial and property services, health, education, wholesale, retail, hospitality and manufacturing constitute the majority of employment. Victoria\'s total gross state product (GSP) is ranked second in Australia, although Victoria is ranked fourth in terms of GSP per capita because of its limited mining activity. Culturally, Melbourne is home to a number of museums, art galleries and theatres and is also described as the "sporting capital of Australia". The Melbourne Cricket Ground is the largest stadium in Australia, and the host of the 1956 Summer Olympics and the 2006 Commonwealth Games. The ground is also considered the "spiritual home" of Australian cricket and Australian rules football, and hosts the grand final of the Australian Football League (AFL) each year, usually drawing crowds of over 95,000 people. Victoria includes eight public universities, with the oldest, the University of Melbourne, having been founded in 1853.';
  para8 =
    "Immigrants arrived from all over the world to search for gold, especially from Ireland and China. Many Chinese miners worked in Victoria, and their legacy is particularly strong in Bendigo and its environs. Although there was some racism directed at them, there was not the level of anti-Chinese violence that was seen at the Lambing Flat riots in New South Wales. However, there was a riot at Buckland Valley near Bright in 1857. Conditions on the gold fields were cramped and unsanitary; an outbreak of typhoid at Buckland Valley in 1854 killed over 1,000 miners.";
  para9 =
    "In November 2006, the Victorian Legislative Council elections were held under a new multi-member proportional representation system. The State of Victoria was divided into eight electorates with each electorate represented by five representatives elected by Single Transferable Vote. The total number of upper house members was reduced from 44 to 40 and their term of office is now the same as the lower house members—four years. Elections for the Victorian Parliament are now fixed and occur in November every four years. Prior to the 2006 election, the Legislative Council consisted of 44 members elected to eight-year terms from 22 two-member electorates.";

  //Title1 Questions
  //P1 Questions
  T1Q = [
    [
      ["In what country is Normandy located?"],
      ["When were the Normans in Normandy?"],
      ["From which countries did the Norse originate?"],
      ["Who was the Norse leader?"],
      ["What century did the Normans first gain their separate identity?"],
      ["Who gave their name to Normandy in the 1000's and 1100's"],
      ["Who did King Charles III swear fealty to?"],
    ],

    [
      ["Who was the duke in the battle of Hastings?"],
      ["Who ruled the duchy of Normandy"],
      ["What religion were the Normans"],
      ["What type of major impact did the Norman dynasty have on modern Europe?"],
      ["Who was famed for their Christian spirit?"],
      ["Who assimilted the Roman language?"],
      ["Who ruled the country of Normandy?"],
    ],
    [
      ["What is the original meaning of the word Norman?"],
      ["When was the Latin version of the word Norman first recorded?"],
      ["What name comes from the English words Normans/Normanz?"],
      ["When was the French version of the word Norman first recorded?"],
    ],
  ];

  //Title2 Questions
  //P4 Questions
  T2Q = [
    [
      ["What branch of theoretical computer science deals with broadly classifying computational problems by difficulty and class of relationship?"],
      ["By what main attribute are computational problems classified utilizing computational complexity theory? "],
      ["What is the term for a task that generally lends itself to being solved by a computer?"],
      ["What is computational complexity principle?"],
      ["What branch of theoretical computer class deals with broadly classifying computational problems by difficulty and class of relationship?"],
      ["What is understood to be a task that is in principle not amendable to being solved by a computer?"],
      [" What cannot be solved by mechanical application of mathematical steps?"],
      ["What is a manual application of mathematical steps?"]
    ],
    [
      ["What measure of a computational problem broadly defines the inherent difficulty of the solution?"],
      ["What method is used to intuitively assess or quantify the amount of resources required to solve a computational problem?"],
      ["What are two basic primary resources used to guage complexity?"],
      ["What unit is measured to determine circuit complexity?"],
      ["What practical role does defining the complexity of problems play in everyday computing?"],
      ["What measure of computational problem broadly defines the inherent simplicity of the solution?"],
      ["What method is not used to intuitively assess or quantify the amount of resources required to solve a computational problem?"],
      ["What are three basic primary resources used to gauge complexity?"],
      ["What unit is measured to determine circuit simplicity?"],
      ["What number is used in perpendicular computing?"],
    ],
    [
      ["What two fields of theoretical computer science closely mirror computational complexity theory?"],
      ["What field of computer science analyzes the resource requirements of a specific algorithm isolated unto itself within a given problem?"],
      ["What field of computer science analyzes all possible algorithms in aggregate to determine the resource requirements needed to solve to a given problem?"],
      ["What field of computer science is primarily concerned with determining the likelihood of whether or not a problem can ultimately be solved using algorithms?"],
      ["What are two fields of theoretical computer science that closely mirror computational simplicity theory?"],
      ["What is not the key distinction between analysis of algorithms and computational complexity theory?"],
      ["What is the process of analyzing the amount of resources needed by a particular algorithm to solve a hypothesis?"],
      ["What is the process that asks a more specific question about all possible algorithms that could not be used to solve the same problem?"],
      ["What process classifies problems that can and cannot be solved with approximately unlimited resources?"],
    ],
  ];

  //Title3 Questions
  //P7 Questions
  T3Q = [
    [
      ["What kind of economy does Victoria have?"],
      ["Where according to gross state product does Victoria rank in Australia?"],
      ["At what rank does GPS per capita set Victoria?"],
      ["What city in Victoria is called the sporting capital of Australia?"],
      ["What is the largest stadium in Australia?"],
      ["What kind of education does Victoria have?"],
      ["Where according to net domestic product does Victoria rank in Australia?"],
      ["At what rank is GPS service in Victoria?"],
      ["What city in Victoria is called the cricket ground of Australia?"],
      ["How many public universities are in Melbourne?"],
    ],
    [
      ["Where is the Asian influence strongest in Victoria?"],
      ["Where were the Lambing Flat riots?"],
      ["Where was the 1857 riot?"],
      ["How many miners died in the typhoid outbreak of 1854?"],
      ["What were the conditions for miners in the gold fields in Victoria?"],
      ["Where is the Asian gold miners strongest in Victoria?"],
      ["Where were the pro-Chinese riots?"],
      ["Where was the 1857 gold rush?"],
      ["How many miners died from racism violence in 1854?"],
      ["What were the conditions for miners in Ireland and China?"],
    ],
    [
      ["What kind of representational system does the Victorian Legislative Council have?"],
      ["How many electorates does the State of Victoria have?"],
      ["How many representatives does each electorate have?"],
      ["What is the term of office for each house member?"],
      ["How often are elections held for the Victorian Parliament?"],
      ["How many electorates does the Legislative Council have?"],
      ["How many representatives does each state have?"],
      ["How often are elections held by upper house members?"],
      ["In what month does the Victorian Parliament register voters?"],
    ],
  ];

  btngenQuestions = async (e) => {
    this.setState({
      output: "",
      accuracy: null,
    });
    if(this.state.Paragraph == "Select Paragraph" && this.state.Title != "Select Title"){
      alert("Please select the paragraph");
    }
    else if (this.state.model == "Select Model") {
      alert("Please select the model from the dropdown");
    } else if (this.state.txtarea != "") {
      this.setState({
        show: true,
      });

      await axios
        .get(
          `${
            this.state.model == "T5 Model"
              ? // Nitesh Check this line below
                `http://127.0.0.1:5000/?para=${this.state.txtarea}&questions=${this.state.question}`
              : `http://127.0.0.1:3000/?para=${this.state.txtarea}&questions=${this.state.question}`
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

  renderParaDropdown = (p1, p2, p3, TQ) => {
    return [
      <Dropdown
        ref={(input) => (this.menu = input)}
        style={{ marginTop: "1%", marginLeft: "5%" }}
      >
        <Dropdown.Toggle variant="primary" id="dropdown-basic">
          {this.state.Paragraph}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item
            href=""
            onClick={() => {
              console.log(TQ[0]),
                this.setState({
                  Paragraph: p1.substr(0, 20),
                  txtarea: p1,
                  txtareaDisable: true,
                  txtAreaBgColor: "#7E7C7C",
                  txtInputTextColor: "#E2DFDF",
                  question: TQ[0],
                });
            }}
          >
            {p1.substr(0, 40)}
          </Dropdown.Item>
          <Dropdown.Item
            href=""
            onClick={() => {
              console.log(TQ[1]),
                this.setState({
                  Paragraph: p2.substr(0, 20),
                  txtarea: p2,
                  txtareaDisable: true,
                  txtAreaBgColor: "#7E7C7C",
                  txtInputTextColor: "#E2DFDF",
                  question: TQ[1],
                });
            }}
          >
            {p2.substr(0, 40)}
          </Dropdown.Item>
          <Dropdown.Item
            href=""
            onClick={() => {
              console.log(TQ[2]);
              this.setState({
                Paragraph: p3.substr(0, 20),
                txtarea: p3,
                txtareaDisable: true,
                txtAreaBgColor: "#7E7C7C",
                txtInputTextColor: "#E2DFDF",
                question: TQ[2],
              });
            }}
          >
            {p3.substr(0, 40)}
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>,
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
            <li >
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

        <Dropdown
          ref={(input) => (this.menu = input)}
          style={{ marginTop: "1%", marginLeft: "5%" }}
        >
          <Dropdown.Toggle variant="primary" id="dropdown-basic">
            {this.state.Title}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item
              href=""
              onClick={() =>
                this.setState({
                  Paragraph: "Select Paragraph",
                  Title: "Select Title",
                  txtarea: "",
                  showParaDropDown: false,
                  txtareaDisable: false,
                  txtAreaBgColor: "#FFFFFF",
                  txtInputTextColor: "#2C74F1",
                  question: ""
                })
              }
            >
              None
            </Dropdown.Item>
            <Dropdown.Item
              href=""
              onClick={() =>
                this.setState({
                  Paragraph: "Select Paragraph",
                  Title: this.title1,
                  showParaDropDown: true,
                })
              }
            >
              {this.title1}
            </Dropdown.Item>
            <Dropdown.Item
              href=""
              onClick={() =>
                this.setState({
                  Paragraph: "Select Paragraph",
                  Title: this.title2.substr(0, 20),
                  showParaDropDown: true,
                })
              }
            >
              {this.title2}
            </Dropdown.Item>
            <Dropdown.Item
              href=""
              onClick={() =>
                this.setState({
                  Paragraph: "Select Paragraph",
                  Title: this.title3,
                  showParaDropDown: true,
                })
              }
            >
              {this.title3}
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        {this.state.Title == this.title1 &&
          this.renderParaDropdown(this.para1, this.para2, this.para3, this.T1Q)}
        {this.state.Title == this.title2.substr(0, 20) &&
          this.renderParaDropdown(this.para4, this.para5, this.para6, this.T2Q)}
        {this.state.Title == this.title3 &&
          this.renderParaDropdown(this.para7, this.para8, this.para9, this.T3Q)}

        <textarea
          name="txtarea"
          value={this.state.txtarea}
          readOnly={this.state.txtareaDisable}
          onChange={this.handleChange}
          placeholder="Enter the text here!"
          style={styleInputTxtArea}
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
        >
          {this.state.accuracy !== null && this.state.question != "" && this.accuracy(this.state.accuracy)}
        </div>

        <div style={{ paddingTop: height / 8 }}></div>
      </div>
    );
  }
}

export default homePage;
