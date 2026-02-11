import React from "react";
import EngineIssueFailure from "../../../layout/engineIssueFailure";

const ImageDiscernibleFailure = () => {
  const ruleId = "image-discernible";
  const title = `Functional image should have a text alternative`;
  const description = `Images require a text alternative when the image conveys meaningful content or serves a functional purpose. If the image is decorative, it must be hidden from assistive technology.`;
  const helpText = `If the image is meaningful, assign a text alternative with a description of the image content using the alt attribute for image elements, or aria-label for elements with role="img". If the image is decorative, provide an empty alt attribute for image elements, or role="presentation" for elements with role="img".`;
  const fixSteps = [
  "Review the HTML structure",
  "Apply proper accessibility attributes",
  "Test with screen readers"
  ];
  const htmlExamples = [
  { filename: "img", content: `<img style="width:100px;height:100px;" />` },
  { filename: "picture", content: `<picture>
    <source srcset="path-to-image-png">
    <img src="path-to-image-png">
</picture>` },
  { filename: "role img", content: `<div role="img" style="width:100px;height:100px;background-image: url(path-to-image.png);" />` }
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

export default ImageDiscernibleFailure;
