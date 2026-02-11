import React from "react";
import IssueSuccess from "../../../../../layout/issueSuccess";

const itemDescription = "Readability : Color Contrast - Success";

export default () => (
  <IssueSuccess
    itemContent={
      <>
        <div className="list-item" id="colorContrast-success-1">
          <div style={{ backgroundColor: "#FFFFFF", color: "#000000", padding: "10px" }}>
            Standard text with a 4.5:1 contrast ratio.
          </div>
        </div>
        <div className="list-item" id="colorContrast-success-2">
          <div style={{ backgroundColor: "#EFEFEF", color: "#2B2B2B", fontSize: "24px" }}>
            Large text with a 3:1 contrast ratio.
          </div>
        </div>
        <div className="list-item" id="colorContrast-success-3">
          <div style={{ backgroundColor: "#0F0F0F", color: "#FFFFFF", padding: "15px" }}>
            Dark background and white text with high contrast.
          </div>
        </div>
        <div className="list-item" id="colorContrast-success-4">
          <div style={{ backgroundColor: "#008000", color: "#FFFFFF" }}>
            Green background and white text with a valid ratio.
          </div>
        </div>
        <div className="list-item" id="colorContrast-success-5">
          <div style={{ backgroundColor: "#FFD700", color: "#000000", fontSize: "18px" }}>
            Yellow background and black text meeting the contrast requirement.
          </div>
        </div>
        <div className="list-item" id="colorContrast-success-6">
          <div style={{ backgroundColor: "#123456", color: "#F1F1F1" }}>
            Blue background with a light text color.
          </div>
        </div>
        <p id="pass-small-1" role="main" className="text-small" style={{ color: "#000000", backgroundColor: "#FFFFFF" }}>
      This is a small text with high contrast (black on white). This should pass the WCAG color contrast rule.
    </p>
    <p id="pass-small-2" className="text-small" style={{ color: "#00008B", backgroundColor: "#FFFFFF" }}>
      This is a small text with high contrast (dark blue on white). This should pass the WCAG color contrast rule.
    </p>
    <p id="pass-large-1" className="text-large" style={{ color: "#000000", backgroundColor: "#FFFFFF" }}>
      This is a large text with high contrast (black on white). This should pass the WCAG color contrast rule.
    </p>
    <p id="pass-large-2" className="text-large" style={{ color: "#006400", backgroundColor: "#FFFFE0" }}>
      This is a large text with high contrast (dark green on light yellow). This should pass the WCAG color contrast rule.
    </p>
    <div id="pass-background-1" style={{ backgroundColor: "#EEEEEE", padding: "10px" }}>
      <p className="text-small" style={{ color: "#000000", backgroundColor: "#FFFFFF" }}>
        This text has a high contrast ratio with the direct background, but the container is within a different background.
      </p>
    </div>
    <p id="pass-small-3" className="text-small" style={{ color: "#8B0000", backgroundColor: "#D3D3D3" }}>
      This is a small text with high contrast (dark red on light gray). This should pass the WCAG color contrast rule.
    </p>
      </>
    }
    itemDescription={itemDescription}
  />
);