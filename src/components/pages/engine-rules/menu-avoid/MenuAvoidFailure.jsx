import React from "react";
import EngineIssueFailure from "../../../layout/engineIssueFailure";

const MenuAvoidFailure = () => {
  const ruleId = "menu-avoid";
  const title = `Avoid using role="menu" for web navigation links`;
  const description = `In most cases, using role=menu on navigation elements within a web page can negatively impact screen reader users, especially those using JAWS. The attribute should be used for menu types that function like those found in desktop applications.`;
  const helpText = `Remove role="menu" from the failing element.`;
  const fixSteps = [
  "Review the HTML structure",
  "Apply proper accessibility attributes",
  "Test with screen readers"
  ];
  const htmlExamples = [
  { filename: "div role menu containing div role menu", content: `<div id="test-subject1" role="menu" aria-label="Main navigation">
  <div role="menuitem" aria-haspopup="true" tabindex="0" aria-expanded="false" id="fileMenuButton" onclick="toggleMenu('fileMenu')">File</div>
  <div id="fileMenu" role="menu" aria-labelledby="fileMenuButton">
    <div role="menuitem" tabindex="-1" onclick="newFile()">New</div>
    <div role="menuitem" tabindex="-1" onclick="openFile()">Open</div>
    <div role="menuitem" tabindex="-1" onclick="saveFile()">Save</div>
  </div>
</div>` },
  { filename: "div role menu containing hidden div role menu", content: `<div id="test-subject1" role="menu" aria-label="Main navigation">
  <div role="menuitem" aria-haspopup="true" tabindex="0" aria-expanded="false" id="fileMenuButton" onclick="toggleMenu('fileMenu')">File</div>
  <div id="fileMenu" role="menu" aria-labelledby="fileMenuButton" style="display: none;">
    <div role="menuitem" tabindex="-1" onclick="newFile()">New</div>
    <div role="menuitem" tabindex="-1" onclick="openFile()">Open</div>
    <div role="menuitem" tabindex="-1" onclick="saveFile()">Save</div>
  </div>
</div>` },
  { filename: "div role menu", content: `<div id="test-subject" role="menu" aria-label="File Operations" tabindex="0">
  <div role="menuitem" tabindex="-1" id="newFile" onclick="newFile()">New</div>
  <div role="menuitem" tabindex="-1" id="saveFile" onclick="saveFile()">Save</div>
  <div role="menuitem" tabindex="-1" id="deleteFile" onclick="deleteFile()">Delete</div>
</div>` },
  { filename: "multi div role menu", content: `<div id="test-subject1" role="menu" aria-label="File Operations" tabindex="0">
  <div role="menuitem" tabindex="-1" id="newFile" onclick="newFile()">New</div>
  <div role="menuitem" tabindex="-1" id="saveFile" onclick="saveFile()">Save</div>
  <div role="menuitem" tabindex="-1" id="deleteFile" onclick="deleteFile()">Delete</div>
</div>
<div id="test-subject2" role="menu" aria-label="File Operations" tabindex="0">
  <div role="menuitem" tabindex="-1" id="editFile" onclick="editFile()">New</div>
  <div role="menuitem" tabindex="-1" id="copyFile" onclick="copyFile()">Save</div>
  <div role="menuitem" tabindex="-1" id="cutFile" onclick="cutFile()">Delete</div>
</div>` }
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

export default MenuAvoidFailure;
