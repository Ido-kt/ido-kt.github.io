import React from "react";
import EngineIssueFailure from "../../../layout/engineIssueFailure";

const PixelImageNotDiscernibleFailure = () => {
  const ruleId = "pixel-image-not-discernible";
  const title = `Pixels should be hidden from assistive technology`;
  const description = `Visually hidden pixel images (often used for analytics or marketing purposes) should not be announced by screen readers.`;
  const helpText = `If the pixel image is an <img> element, assign an empty alt attribute. For other cases, add role="none" or role="presentation" to the pixel element.`;
  const fixSteps = [
  "Review the HTML structure",
  "Apply proper accessibility attributes",
  "Test with screen readers"
  ];
  const htmlExamples = [
  { filename: "pixel image 1x1", content: `<img src="http://127.0.0.1:9000/tracker.png" width="1" height="1" alt="in case there is an alt, empty alt will make it pass" />` }
  ];

  return (
    <EngineIssueFailure
      ruleId={ruleId}
      title={title}
      description={description}
      helpText={helpText}
      fixSteps={fixSteps}
      htmlExamples={htmlExamples}
    />
  );
};

export default PixelImageNotDiscernibleFailure;
