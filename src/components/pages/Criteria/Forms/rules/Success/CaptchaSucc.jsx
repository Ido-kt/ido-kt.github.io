import React from "react";
import IssueSuccess from "../../../../../layout/issueSuccess";

const itemDescription = "Forms : Captcha - Success";

export default () => (
  <IssueSuccess
    itemContent={
      <>
        <div className="list-item" id="captcha-success-1">
          <label htmlFor="captcha">Please solve this:</label>
          <input id="captcha" type="text" aria-describedby="captcha-instructions" />
          <div id="captcha-instructions">
            Enter the answer to "What is 2 + 2?"
          </div>
        </div>
        <div className="list-item" id="captcha-success-2">
          <label htmlFor="audio-captcha">Audio Captcha</label>
          <audio controls aria-label="Audio Captcha: Enter the spoken digits.">
            <source src="/audio/captcha.mp3" type="audio/mpeg" />
          </audio>
          <input id="audio-captcha" type="text" placeholder="Enter digits here" />
        </div>
        <div className="list-item" id="captcha-success-3">
          <label htmlFor="checkbox-captcha">Verify You’re Human:</label>
          <input id="checkbox-captcha" type="checkbox" aria-label="I am not a robot" />
        </div>
        <div className="list-item" id="captcha-success-4">
          <label htmlFor="accessible-captcha">Accessible Math Challenge:</label>
          <input id="accessible-captcha" type="text" aria-describedby="captcha-instructions-alt" />
          <div id="captcha-instructions-alt">
            Enter the answer to "What is 10 minus 5?"
          </div>
        </div>
        <div className="list-item" id="captcha-success-5">
          <label htmlFor="logic-captcha">Solve this logic puzzle:</label>
          <input id="logic-captcha" type="text" aria-describedby="captcha-instructions-logic" />
          <div id="captcha-instructions-logic">
            "If today is Wednesday, what day is 2 days before?"
          </div>
        </div>
        <div className="list-item" id="captcha-success-6">
          <label htmlFor="visual-captcha">Visual Pattern:</label>
          <img src="/captcha/image.jpg" alt="Enter the pattern shown in this image." />
          <input id="visual-captcha" type="text" placeholder="Enter pattern here" />
        </div>
      </>
    }
    itemDescription={itemDescription}
  />
);