import React from "react";
import IssueFailure from "../../../../../layout/issueFailure";

const itemDescription = "Readability: Letter Spacing - Failure";

const LetterSpacingFailure = () => (
  <IssueFailure
    itemContent={
      <>
        <div className="list-item" id="letter-spacing-failure-1">
          <p style={{ fontSize: "16px", letterSpacing: "-2px" }}>
            This paragraph uses negative letter spacing of -2px, making text
            cramped and hard to read.
          </p>
        </div>
        <div className="list-item" id="letter-spacing-failure-2">
          <div
            style={{
              fontSize: "14px",
              letterSpacing: "-1.5px",
              width: "200px",
              overflow: "hidden",
            }}
          >
            This text has negative letter spacing in a fixed-width container
            with hidden overflow, causing text to be clipped.
          </div>
        </div>
        <div className="list-item" id="letter-spacing-failure-3">
          <h1 style={{ fontSize: "24px", letterSpacing: "-3px" }}>
            This heading uses -3px letter spacing, making it illegible.
          </h1>
        </div>
        <div className="list-item" id="letter-spacing-failure-4">
          <span
            style={{
              fontSize: "12px",
              letterSpacing: "-1.2px",
              whiteSpace: "nowrap",
            }}
          >
            This span uses negative letter spacing with no-wrap, preventing
            proper text reflow.
          </span>
        </div>
        <div className="list-item" id="letter-spacing-failure-5">
          <div
            style={{
              fontSize: "18px",
              letterSpacing: "-2.5px",
              height: "30px",
              overflow: "hidden",
            }}
          >
            Fixed height container with negative letter spacing causes text
            overflow.
          </div>
        </div>
        <div className="list-item" id="letter-spacing-failure-6">
          <button
            style={{
              fontSize: "16px",
              letterSpacing: "-1.8px",
              width: "150px",
            }}
          >
            Button text with cramped letter spacing in fixed width.
          </button>
        </div>
        <div className="list-item" id="letter-spacing-failure-7">
          <label style={{ fontSize: "14px", letterSpacing: "-1.3px" }}>
            Label text with negative letter spacing reduces readability.
          </label>
        </div>
        <div className="list-item" id="letter-spacing-failure-8">
          <a href="#" style={{ fontSize: "16px", letterSpacing: "-2px" }}>
            Link text with excessive negative letter spacing.
          </a>
        </div>
        <div className="list-item" id="letter-spacing-failure-9">
          <div
            style={{
              fontSize: "20px",
              letterSpacing: "-2.2px",
              position: "absolute",
              width: "250px",
            }}
          >
            Absolutely positioned element with negative letter spacing in fixed
            width.
          </div>
        </div>
        <div className="list-item" id="letter-spacing-failure-10">
          <p
            style={{
              fontSize: "15px",
              letterSpacing: "-1.6px",
              maxWidth: "300px",
              overflow: "hidden",
            }}
          >
            Paragraph with max-width and overflow hidden prevents text from
            reflowing when letter spacing increases.
          </p>
        </div>
        <div className="list-item" id="letter-spacing-failure-11">
          <strong style={{ fontSize: "16px", letterSpacing: "-1.9px" }}>
            Strong text with negative letter spacing makes emphasis ineffective.
          </strong>
        </div>
        <div className="list-item" id="letter-spacing-failure-12">
          <em style={{ fontSize: "14px", letterSpacing: "-1.4px" }}>
            Emphasized text with cramped letter spacing reduces readability.
          </em>
        </div>
        <div className="list-item" id="letter-spacing-failure-13">
          <blockquote
            style={{
              fontSize: "16px",
              letterSpacing: "-1.7px",
              width: "400px",
              overflow: "hidden",
            }}
          >
            Blockquote with fixed width and negative letter spacing causes
            content loss.
          </blockquote>
        </div>
        <div className="list-item" id="letter-spacing-failure-14">
          <code style={{ fontSize: "13px", letterSpacing: "-1.1px" }}>
            Code snippet with negative letter spacing makes code hard to read.
          </code>
        </div>
        <div className="list-item" id="letter-spacing-failure-15">
          <pre
            style={{
              fontSize: "12px",
              letterSpacing: "-1px",
              width: "500px",
              overflow: "hidden",
            }}
          >
            Preformatted text with fixed width and negative letter spacing.
          </pre>
        </div>
      </>
    }
    itemDescription={itemDescription}
    helpText="Letter spacing issues occur when text uses negative letter spacing (less than -1px) or when containers have fixed dimensions that prevent text from reflowing when letter spacing is increased. This makes text cramped, illegible, or causes content to be clipped. Use normal or positive letter spacing, and ensure containers allow text reflow with flexible widths and heights."
    fixSteps={[
      "Remove negative letter spacing values (use 'normal', '0', or positive values)",
      "Replace fixed widths and heights with flexible dimensions (use 'auto', 'min-width', 'max-width')",
      "Remove 'overflow: hidden' or use 'overflow: visible' to allow text expansion",
      "Remove 'white-space: nowrap' to enable text wrapping",
      "Use relative positioning instead of absolute when possible",
      "Test with letter spacing increased to 0.12 times the font size to ensure no content loss",
    ]}
  />
);

export default LetterSpacingFailure;
