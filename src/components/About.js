import React, { Component } from "react";
import { Link } from "react-router-dom";
const height = window.innerHeight;
const width = window.innerWidth;
class About extends Component {
  componentDidMount() {
    $(document).ready(function () {
      $(window).scroll(function () {
        $(".nav").css({ "background-color": "black" });
      });
    });
    
  }
  render() {
    const style = {
      marginLeft: "20%",
      height: "400px",
      width: "500px",
      marginBottom: "20px",
      justifyContent: "center",
    };

    return (
      <section id="about">
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
            <li >
              <Link className="smoothscroll" to="/AQG">
               Advanced Question Generation
              </Link>
            </li>
            <li className="current">
              <Link className="smoothscroll" to="/About">
                About
              </Link>
            </li>
          </ul>
        </nav>
        <div>
          <div
            style={{
              justifyContent: "center",
              marginLeft: "20%",
              marginRight: "20%",
            }}
          >
            <h2>Project Aim</h2>
            <p>
              Our Project’s aim is to generate questions . The users will input
              text through typing or can upload a document then system will
              select the sentences that are filtered through sentence algorithm
              and then after filtration, the inputted English text or uploaded
              document will be converted into simple questions. Our project aims
              to save time and also the effort of our users.
            </p>
           
              <div>
              <h2>Dataset</h2>
              <p style={{ justifyContent: "center" }}>
                The Dataset used for training is SQUADS. Stanford Question
                Answering Dataset (SQuAD) is a reading comprehension dataset,
                consisting of questions posed by crowdworkers on a set of
                Wikipedia articles, where the answer to every question is a
                segment of text, or span, from the corresponding reading
                passage, or the question might be unanswerable.
              </p>

              <h2>Analysis</h2>
              <p style={{ justifyContent: "center" }}>
                To train the sequence-to-sequence model with right numbers of
                Epochs and topics we have to form the complete analysis. To form
                the complete analysis, we have trained our model considering
                different parameters which are mentioned in the given excel files by
                <a href="https://1drv.ms/x/s!Am2z6pLslZVElTuWl0LwYXVCNyZa?e=s98fve" style={{fontSize:"15px"}}> Mustafa Mirza </a>
                and
                <a href="https://1drv.ms/x/s!ArfUKVT0QufNh5BCz6KCTVPKSK2TqA?e=na2Z49" style={{fontSize:"15px"}}> Nitesh Congreja </a>
                 .  
              </p>
             

              <h2>Current Settings:</h2>
              <p style={{ justifyContent: "center" }}>
                Training is done on the below given settings:
                <br />
                1) No of Epoches = 25
                <br />
                2) No of Topics = 60
                <br />
                3) No of Questions =  18626
              </p>
            </div>
            <h2>Graph:</h2>
            <div>
              <div className="row" style={{ display: "inline-block" }}>
                <img
                  src={`../../images/graphs/5.png`}
                  alt="Logo"
                  style={{
                    marginLeft: "20%",
                    height: "400px",
                    width: "500px",
                    marginBottom: "20px",
                    justifyContent: "center",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
