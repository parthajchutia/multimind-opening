import React from "react";
import chatgptLogo from "./icons/chatgpt.jpg";
import geminiLogo from "./icons/gemini.png";
import claudeLogo from "./icons/claude.webp";
import Navbar from "./nav.js";

function gotochat() {}

function Homepage() {
  return (
    <div>
      <Navbar />
      <div className="App" style={{ height: "100vh" }}>
        <header
          className="App-header"
          style={{ backgroundColor: "rgba(221, 240, 235, 1)" }}
        >
          <div>
            <h1
              style={{
                position: "absolute",
                top: "6%",
                right: "34%",
                left: "8%",
                paddingRight: "30%",
                paddingTop: "10%",
                paddingBottom: "30%",
                color: "black",
                fontSize: "40px",
                textAlign: "left",
              }}
            >
              Query multiple LLMs with just a single prompt
            </h1>
          </div>

          <div
            className="logos"
            style={{
              color: "white",
              width: "70%",
              maxWidth: "400px",
              position: "absolute",
              top: "50%",
              left: "56%",
              transform: "translate(-45%, -40%)",
              display: "flex",
              paddingLeft: "58%",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              "@media (max-width: 400px)": { display: "none" },
            }}
          >
            <img
              src={claudeLogo}
              alt="Claude Logo"
              className="llm-logo3"
              style={{
                width: "45px",
                minHeight: "0px",
                margin: "10px",
                borderRadius: "40%",
              }}
            />
            <img
              src={geminiLogo}
              alt="Gemini Logo"
              className="llm-logo2"
              style={{
                width: "45px",
                height: "40px",
                margin: "10px",
                marginRight: "55%",
                paddingLeft: "1%",
                borderRadius: "30%",
              }}
            />
            <img
              src={chatgptLogo}
              alt="ChatGPT Logo"
              className="llm-logo1"
              style={{
                width: "45px",
                height: "40px",
                margin: "10px",
                borderRadius: "40%",
                marginBottom: "10%",
              }}
            />
          </div>
        </header>
        <div
          className="box"
          style={{
            position: "absolute",
            top: "70%",
            left: "18.5%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "18px 8px",
            paddingBottom: "47px",
            borderRadius: "20px",
            alignContent: "initial",
            backgroundColor: "#525252",
            color: "white",
            width: "20%",
            maxWidth: "370px",
            transform: "translate(-50%, -50%)",
          }}
        >
          <p
            style={{
              margin: "20px",
              paddingBottom: "20px",
              fontSize: "1rem",
              color: "white",
            }}
          >
            Get response from, ChatGPT, Gemini and Claude with a single prompt
          </p>
          <button
            className="App-button"
            onClick={gotochat}
            style={{
              padding: "5px 53px",
              fontSize: "24px",
              backgroundColor: "white",
              color: "black",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Get started
          </button>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
