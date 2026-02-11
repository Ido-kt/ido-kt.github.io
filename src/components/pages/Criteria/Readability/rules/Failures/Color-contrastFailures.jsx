import React from "react";
import IssueFailure from "../../../../../layout/issueFailure";

const itemDescription = "Readability : Color Contrast - Failure";

export default () => (
  <IssueFailure
    itemContent={
      <>
        <div className="list-item" id="colorContrast-failure-1">
          <div style={{ backgroundColor: "#FFFFFF", color: "#C0C0C0", padding: "10px" }}>
            Low contrast between white background and light gray text.
          </div>
        </div>
        <div className="list-item" id="colorContrast-failure-2">
          <div style={{ backgroundColor: "#F5F5F5", color: "#A0A0A0", fontSize: "20px" }}>
            Insufficient contrast for larger text.
          </div>
        </div>
        <div className="list-item" id="colorContrast-failure-3">
          <div style={{ backgroundColor: "#FFFFFF", color: "#FFFF00" }}>
            Yellow text on white background.
          </div>
        </div>
        <div className="list-item" id="colorContrast-failure-4">
          <div style={{ backgroundColor: "#333333", color: "#444444" }}>
            Dark gray text on a slightly lighter gray background.
          </div>
        </div>
        <div className="list-item" id="colorContrast-failure-5">
          <div style={{ backgroundColor: "#FF0000", color: "#FFA500" }}>
            Orange text on a red background with insufficient contrast.
          </div>
        </div>
        <div className="list-item" id="colorContrast-failure-6">
          <div style={{ backgroundColor: "#00008B", color: "#0000FF", padding: "10px" }}>
            Blue text on a dark blue background with poor readability.
          </div>
        </div>
        <p id="fail-small-1" className="text-small" style={{ color: "#767676", backgroundColor: "#CCCCCC" }}>
      This is a small text with low contrast (gray on light gray). This should fail the WCAG color contrast rule.
    </p>
    <p id="fail-small-2" className="text-small" style={{ color: "#ADD8E6", backgroundColor: "#FFFFFF" }}>
      This is a small text with low contrast (light blue on white). This should fail the WCAG color contrast rule.
    </p>
    <p id="fail-large-1" className="text-large" style={{ color: "#767676", backgroundColor: "#CCCCCC" }}>
      This is a large text with low contrast (gray on light gray). This may fail the WCAG color contrast rule, depending on the ratio.
    </p>
    <p id="fail-large-2" className="text-large" style={{ color: "#90EE90", backgroundColor: "#FFFFE0" }}>
      This is a large text with low contrast (light green on light yellow). This should fail the WCAG color contrast rule.
    </p>
    <div id="fail-container-1" style={{ border: "1px solid #000000", padding: "10px", backgroundColor: "#FFFFFF" }}>
      <p className="text-small" style={{ color: "#767676" }}>
        This is a small text with low contrast, but inside a bordered container with a white background.
      </p>
    </div>
    <div id="fail-background-1" style={{ backgroundColor: "#EEEEEE", padding: "10px" }}>
      <p className="text-small" style={{ color: "#767676", backgroundColor: "#CCCCCC" }}>
        This text has a low contrast ratio with its direct background and the outer background. It should fail the contrast rule.
      </p>
    </div>
    <p id="fail-small-3" className="text-small" style={{ color: "#FFB6C1", backgroundColor: "#FFFFFF" }}>
      This is a small text with low contrast (light pink on white). This should fail the WCAG color contrast rule.
    </p>
      </>
    }
    itemDescription={itemDescription}
  />
);