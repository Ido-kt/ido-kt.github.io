import React from "react";
import EngineIssueSuccess from "../../../layout/engineIssueSuccess";

const ImageDiscernibleSuccess = () => {
  const ruleId = "image-discernible";
  const title = `Functional image should have a text alternative`;
  const description = `Images require a text alternative when the image conveys meaningful content or serves a functional purpose. If the image is decorative, it must be hidden from assistive technology.`;
  const helpText = `If the image is meaningful, assign a text alternative with a description of the image content using the alt attribute for image elements, or aria-label for elements with role="img". If the image is decorative, provide an empty alt attribute for image elements, or role="presentation" for elements with role="img".`;
  const bestPractices = [
  "Follow proper HTML semantics",
  "Ensure screen reader compatibility",
  "Test with assistive technologies"
  ];
  const htmlExamples = [
  { filename: "img with aria label", content: `<img aria-label="Image description" style="width:100px;height:100px;" />` },
  { filename: "picture with alt on child img", content: `<!-- issue with @acsbe/classifier -->
<picture >
    <img src="cat.jpg" alt="A picture of a cat" />
</picture>` },
  { filename: "picture with aria label", content: `<!-- issue with @acsbe/classifier -->
<picture aria-label="A picture of a cat">
    <img src="cat.jpg" />
</picture>` },
  { filename: "role img with aria label", content: `<div role="img" aria-label="Image description" style="width:100px;height:100px;background-image: url(path-to-image.png);" />` }
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

export default ImageDiscernibleSuccess;
