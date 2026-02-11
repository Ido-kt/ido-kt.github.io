import React from "react";
import EngineIssueSuccess from "../../../layout/engineIssueSuccess";

const ImageMismatchSuccess = () => {
  const ruleId = "image-mismatch";
  const title = `Images should be tagged for assistive technology`;
  const description = `Elements or a group of elements that contain graphics should be marked up using role="img" so that they can be identified as images by screen reader users.`;
  const helpText = `Add role="img" to page content that should be identified as an image.`;
  const bestPractices = [
  "Follow proper HTML semantics",
  "Ensure screen reader compatibility",
  "Test with assistive technologies"
  ];
  const htmlExamples = [
  { filename: "div with background image", content: `<div role="img" style="background: url('https://www.example.com/image.jpg'); width: 100px; height: 100px;"></div>` },
  { filename: "img", content: `<img src="https://www.example.com/image.jpg" alt="Example Image" />` },
  { filename: "picture with nested img", content: `<picture>
    <source srcset="https://www.example.com/image.webp" type="image/webp">
    <img src="https://www.example.com/image.jpg" alt="Example Image">
</picture>` },
  { filename: "svg", content: `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
    <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />
</svg>` }
  ];

  return (
    <EngineIssueSuccess
      ruleId={ruleId}
      title={title}
      description={description}
      helpText={helpText}
      bestPractices={bestPractices}
      htmlExamples={htmlExamples}
    />
  );
};

export default ImageMismatchSuccess;
