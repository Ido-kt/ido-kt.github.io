import React from "react";
import EngineIssueSuccess from "../../../layout/engineIssueSuccess";

const AltMisuseSuccess = () => {
  const ruleId = "alt-misuse";
  const title = `Elements other than image (Tag: IMG) should not have alt attribute`;
  const description = `The alt attribute is used to provide a text alternative for images. It is not meant to be used on elements other than images and therefore will not be read using screen-readers.`;
  const helpText = `Use a screen-reader-only element to add the accessibility description of the element that was misusing the alt attribute and remove the alt attribute.`;
  const bestPractices = [
  "Follow proper HTML semantics",
  "Ensure screen reader compatibility",
  "Test with assistive technologies"
  ];
  const htmlExamples = [
  { filename: "div with no alt", content: `<div></div>` },
  { filename: "img with alt", content: `<img alt="this div is remarkable, you should know this" />` },
  { filename: "img with map", content: `<img src="world-map.png" usemap="#worldmap" alt="World map with clickable countries">
<map name="worldmap">
  <area shape="rect" coords="0,0,100,100" href="usa.html" alt="United States" />
  <area shape="rect" coords="101,0,200,100" href="canada.html" alt="Canada" />
</map>` },
  { filename: "input with alt", content: `<input type="image" alt="this div is remarkable, you should know this" />` }
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

export default AltMisuseSuccess;
