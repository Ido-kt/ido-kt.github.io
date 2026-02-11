import React from "react";
import EngineIssueFailure from "../../../layout/engineIssueFailure";

const ImageMisuseFailure = () => {
  const ruleId = "image-misuse";
  const title = `An element that does not function as an image should be assigned role="img"`;
  const description = `Using an image tag for content that isn't an image can obscure relevant information and confuse screen readers and other assistive technologies. This can lead to a poor user experience for people with disabilities.`;
  const helpText = `Remove role="img" from the failing element.`;
  const fixSteps = [
  "Review the HTML structure",
  "Apply proper accessibility attributes",
  "Test with screen readers"
  ];
  const htmlExamples = [
  { filename: "canvas", content: `<canvas role="img" width="100" height="100"></canvas>` },
  { filename: "div with role image", content: `<div role="img" style="width: 100px; height: 100px;"></div>` },
  { filename: "div_with_background_image_with_visibile_content", content: `<div role="img" style="background-image: url('https://www.example.com/image.jpg'); width: 100px; height: 100px;">
    Some content here
</div>` },
  { filename: "svg", content: `<svg role="img" xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
    <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />
</svg>` }
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

export default ImageMisuseFailure;
