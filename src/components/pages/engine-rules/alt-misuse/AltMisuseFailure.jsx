import React from "react";
import EngineIssueFailure from "../../../layout/engineIssueFailure";

const AltMisuseFailure = () => {
  const ruleId = "alt-misuse";
  const title = `Elements other than image (Tag: IMG) should not have alt attribute`;
  const description = `The alt attribute is used to provide a text alternative for images. It is not meant to be used on elements other than images and therefore will not be read using screen-readers.`;
  const helpText = `Use a screen-reader-only element to add the accessibility description of the element that was misusing the alt attribute and remove the alt attribute.`;
  const fixSteps = [
  "Review the HTML structure",
  "Apply proper accessibility attributes",
  "Test with screen readers"
  ];
  const htmlExamples = [
  { filename: "div with alt", content: `<div alt="this div is remarkable, you should know this"></div>` },
  { filename: "div with role img and alt", content: `<div role-="image" alt="this div is remarkable, you should know this"></div>` }
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

export default AltMisuseFailure;
