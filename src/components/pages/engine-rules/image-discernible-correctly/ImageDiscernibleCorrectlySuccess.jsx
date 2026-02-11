import React from "react";
import EngineIssueSuccess from "../../../layout/engineIssueSuccess";

const ImageDiscernibleCorrectlySuccess = () => {
  const ruleId = "image-discernible-correctly";
  const title = `Functional image should have an informative and accurate text alternative`;
  const description = `Text alternatives must provide accurate descriptions of the image. Incorrect text alternatives, such as filenames or other placeholder values, may cause screen reader users to either miss essential information or hear unnecessary content that disrupts navigation.`;
  const helpText = `Make sure that the assigned text alternative describes the content or function of the image.`;
  const bestPractices = [
  "Follow proper HTML semantics",
  "Ensure screen reader compatibility",
  "Test with assistive technologies"
  ];
  const htmlExamples = [
  { filename: "image with meaningful alt text hebrew", content: `<img alt="זריחה יפה מעל ההרים" style="width: 100px; height: 100px" />` },
  { filename: "image with meaningful alt text", content: `<img alt="A beautiful sunrise over the mountains" style="width: 100px; height: 100px" />` },
  { filename: "image with meaningful aria label hebrew", content: `<img aria-label="זריחה יפה מעל ההרים" style="width: 100px; height: 100px" />` },
  { filename: "image with meaningful aria label", content: `<img aria-label="A beautiful sunrise over the mountains" style="width:100px;height:100px;"/>` },
  { filename: "image with not meaningful alt text and meaningful aria label", content: `<img alt="abcdefghijklmnopqrstuvwxyz" aria-label="A beautiful sunrise over the mountains" style="width: 100px; height: 100px" />` }
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

export default ImageDiscernibleCorrectlySuccess;
