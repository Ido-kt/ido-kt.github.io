import React, { useEffect } from "react";
import IssueFailure from "../../../../../layout/issueFailure";

const itemDescription = "Forms : Captcha - Failure (Geetest v4)";

export default () => {
  useEffect(() => {
    // Load the Geetest script dynamically
    const script = document.createElement("script");
    script.src = "https://static.geetest.com/static/tools/gt.js";
    script.async = true;
    script.onload = () => {
      // Initialize Geetest after script loads
      window.initGeetest(
        {
          gt: "9e0a7cbbb460381da534d725ca5a1208", // Provided CAPTCHA ID
          challenge: "your-challenge-key-from-server", // Replace with server-generated challenge
          offline: false, // Set to true if testing offline mode
          new_captcha: true, // Ensure use of the new CAPTCHA system
          product: "popup", // Type of CAPTCHA (e.g., popup, float)
        },
        function (captchaObj) {
          captchaObj.appendTo("#geetest-captcha"); // Attach CAPTCHA to the div
        }
      );
    };
    document.body.appendChild(script);
  }, []);

  return (
    <IssueFailure
      itemContent={
        <>
          <div className="list-item" id="captcha-failure-4">
            <div id="geetest-captcha"></div>
            {/* Failure: Drag-and-drop puzzles are inaccessible to keyboard users. */}
          </div>
        </>
      }
      itemDescription={itemDescription}
    />
  );
};