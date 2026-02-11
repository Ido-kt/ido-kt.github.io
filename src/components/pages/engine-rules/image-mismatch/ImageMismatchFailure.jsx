import React from "react";
import EngineIssueFailure from "../../../layout/engineIssueFailure";

const ImageMismatchFailure = () => {
  const ruleId = "image-mismatch";
  const title = `Images should be tagged for assistive technology`;
  const description = `Elements or a group of elements that contain graphics should be marked up using role="img" so that they can be identified as images by screen reader users.`;
  const helpText = `Add role="img" to page content that should be identified as an image.`;
  const fixSteps = [
  "Review the HTML structure",
  "Apply proper accessibility attributes",
  "Test with screen readers"
  ];
  const htmlExamples = [
  { filename: "div with background image", content: `<div style="background: url('https://www.example.com/image.jpg'); width: 100px; height: 100px;"></div>` },
  { filename: "img role other", content: `<img role="table" src="https://www.example.com/image.jpg" alt="Example Image" />` },
  { filename: "picture role other with nested img", content: `<picture>
    <source srcset="https://www.example.com/image.webp" type="image/webp">
    <img role="table" src="https://www.example.com/image.jpg" alt="Example Image">
</picture>` }
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

export default ImageMismatchFailure;
