import React from "react";

function About() {
  return (
    <div className="container mt-3 d-flex align-items-center">
      <>
        <div
          style={{
            position: "relative",
            width: "100%",
            height: 0,
            paddingTop: "141.4141%",
            paddingBottom: 0,
            boxShadow: "0 2px 8px 0 rgba(63,69,81,0.16)",
            marginTop: "1.6em",
            marginBottom: "0.9em",
            overflow: "hidden",
            borderRadius: 8,
            willChange: "transform",
          }}
        >
          <iframe
            loading="lazy"
            style={{
              position: "absolute",
              width: "70%",
              height: "70%",
              top: 0,
              left:0,
              border: "none",
              padding: 0,
              margin: 0,
            }}
            src="https://www.canva.com/design/DAFzhE-8gV4/view?embed"
            allowFullScreen="allowfullscreen"
            allow="fullscreen"
          ></iframe>
        </div>
        
      </>
    </div>
  );
}

export default About;
