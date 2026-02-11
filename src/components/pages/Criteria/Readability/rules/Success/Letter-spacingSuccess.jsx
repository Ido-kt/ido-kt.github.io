import React from "react";
import IssueSuccess from "../../../../../layout/issueSuccess";

const itemDescription = "Readability: Letter Spacing - Success";

const LetterSpacingSuccess = () => (
  <IssueSuccess
    itemContent={
      <>
        <div className="list-item" id="letter-spacing-success-1">
          <p style={{ fontSize: "16px", letterSpacing: "normal" }}>
            This paragraph uses normal letter spacing, providing optimal readability.
          </p>
        </div>
        <div className="list-item" id="letter-spacing-success-2">
          <p style={{ fontSize: "16px", letterSpacing: "0" }}>
            This paragraph uses zero letter spacing, which is acceptable and readable.
          </p>
        </div>
        <div className="list-item" id="letter-spacing-success-3">
          <div style={{ fontSize: "14px", letterSpacing: "0.5px", width: "auto", minWidth: "200px" }}>
            This text uses positive letter spacing in a flexible container that allows reflow.
          </div>
        </div>
        <div className="list-item" id="letter-spacing-success-4">
          <h1 style={{ fontSize: "24px", letterSpacing: "1px" }}>
            This heading uses positive letter spacing for better readability.
          </h1>
        </div>
        <div className="list-item" id="letter-spacing-success-5">
          <span style={{ fontSize: "12px", letterSpacing: "normal", whiteSpace: "normal" }}>
            This span uses normal letter spacing with proper text wrapping enabled.
          </span>
        </div>
        <div className="list-item" id="letter-spacing-success-6">
          <div style={{ fontSize: "18px", letterSpacing: "0.3px", minHeight: "30px", height: "auto" }}>
            Flexible height container with positive letter spacing allows proper text expansion.
          </div>
        </div>
        <div className="list-item" id="letter-spacing-success-7">
          <button style={{ fontSize: "16px", letterSpacing: "0.2px", width: "auto", minWidth: "150px", padding: "8px 16px" }}>
            Button with flexible width and positive letter spacing.
          </button>
        </div>
        <div className="list-item" id="letter-spacing-success-8">
          <label style={{ fontSize: "14px", letterSpacing: "normal" }}>
            Label text with normal letter spacing for optimal readability.
          </label>
        </div>
        <div className="list-item" id="letter-spacing-success-9">
          <a href="#" style={{ fontSize: "16px", letterSpacing: "0.1px" }}>
            Link text with appropriate letter spacing maintains readability.
          </a>
        </div>
        <div className="list-item" id="letter-spacing-success-10">
          <div style={{ fontSize: "20px", letterSpacing: "0.4px", maxWidth: "100%", width: "auto" }}>
            Responsive container with positive letter spacing allows text to reflow properly.
          </div>
        </div>
        <div className="list-item" id="letter-spacing-success-11">
          <p style={{ fontSize: "15px", letterSpacing: "normal", maxWidth: "100%", overflow: "visible" }}>
            Paragraph with flexible width and visible overflow allows text expansion when letter spacing increases.
          </p>
        </div>
        <div className="list-item" id="letter-spacing-success-12">
          <strong style={{ fontSize: "16px", letterSpacing: "0.2px" }}>
            Strong text with positive letter spacing enhances emphasis and readability.
          </strong>
        </div>
        <div className="list-item" id="letter-spacing-success-13">
          <em style={{ fontSize: "14px", letterSpacing: "normal" }}>
            Emphasized text with normal letter spacing maintains readability.
          </em>
        </div>
        <div className="list-item" id="letter-spacing-success-14">
          <blockquote style={{ fontSize: "16px", letterSpacing: "0.3px", width: "auto", maxWidth: "100%" }}>
            Blockquote with flexible width and positive letter spacing prevents content loss.
          </blockquote>
        </div>
        <div className="list-item" id="letter-spacing-success-15">
          <code style={{ fontSize: "13px", letterSpacing: "normal" }}>
            Code snippet with normal letter spacing maintains code readability.
          </code>
        </div>
        <div className="list-item" id="letter-spacing-success-16">
          <pre style={{ fontSize: "12px", letterSpacing: "0.1px", width: "auto", maxWidth: "100%", overflow: "auto" }}>
            Preformatted text with flexible width and appropriate letter spacing.
          </pre>
        </div>
        <div className="list-item" id="letter-spacing-success-17">
          <div style={{ fontSize: "16px", letterSpacing: "1.92px" }}>
            This text uses letter spacing of 0.12 times the font size (16px × 0.12 = 1.92px), demonstrating proper scaling.
          </div>
        </div>
        <div className="list-item" id="letter-spacing-success-18">
          <p style={{ fontSize: "20px", letterSpacing: "2.4px", width: "auto", minWidth: "200px" }}>
            Larger text with scaled letter spacing (20px × 0.12 = 2.4px) in a flexible container.
          </p>
        </div>
      </>
    }
    itemDescription={itemDescription}
    helpText="Proper letter spacing ensures text remains readable and accessible. Use normal, zero, or positive letter spacing values. Ensure containers have flexible dimensions (auto, min-width, max-width) rather than fixed widths, and allow text to wrap and reflow when letter spacing is increased. This ensures content remains visible and readable when users adjust letter spacing to 0.12 times the font size."
    bestPractices={[
      "Use 'normal', '0', or positive letter spacing values (avoid negative values less than -1px)",
      "Use flexible container dimensions (auto, min-width, max-width) instead of fixed widths",
      "Allow text wrapping by avoiding 'white-space: nowrap'",
      "Use 'overflow: visible' or 'overflow: auto' instead of 'overflow: hidden'",
      "Test with letter spacing scaled to 0.12 times the font size to verify no content loss",
      "Ensure containers can expand to accommodate increased letter spacing"
    ]}
  />
);

export default LetterSpacingSuccess;

