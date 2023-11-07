import React from "react";
import "../style/Contact.css";

function Contact() {
  return (
    <div className="homeMain mt-3">
      <div className="homeLeft">
        <>
          <div
            style={{
              position: "relative",
              width: "100%",
              height: 0,
              paddingTop: "177.7778%",
              paddingBottom: 0,
              boxShadow: "0 2px 8px 0 rgba(63,69,81,0.16)",
              marginTop: "0.0em",
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
                width: "100%",
                height: "100%",
                top: 0,
                left: 0,
                border: "none",
                padding: 0,
                margin: 0,
              }}
              src="https://www.canva.com/design/DAFzgiwv7v0/view?embed"
              allowFullScreen="allowfullscreen"
              allow="fullscreen"
            ></iframe>
          </div>
          
        </>
      </div>
      <div className="homeRight">Right</div>
    </div>
  );
}

export default Contact;
