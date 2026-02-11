import React from "react";
import EngineIssueFailure from "../../../layout/engineIssueFailure";

const MenuBarAvoidFailure = () => {
  const ruleId = "menu-bar-avoid";
  const title = `Avoid using role="menubar" for web navigation links`;
  const description = `In most cases, using role=menubar on navigation elements within a web page can negatively impact screen reader users, especially those using JAWS. The attribute should be used for menu types that function like those found in desktop applications.`;
  const helpText = `Remove role="menu" from the failing element.`;
  const fixSteps = [
  "Review the HTML structure",
  "Apply proper accessibility attributes",
  "Test with screen readers"
  ];
  const htmlExamples = [
  { filename: "div role menubar containing div role menubar", content: `<div id="test-subject1" role="menubar" aria-label="Main navigation">
  <div role="menuitem" aria-haspopup="true" tabindex="0" aria-expanded="false" id="fileMenuButton" onclick="toggleMenu('fileMenu')">File</div>
  <div id="fileMenu" role="menubar" aria-labelledby="fileMenuButton">
    <div role="menuitem" tabindex="-1" onclick="newFile()">New</div>
    <div role="menuitem" tabindex="-1" onclick="openFile()">Open</div>
    <div role="menuitem" tabindex="-1" onclick="saveFile()">Save</div>
  </div>
</div>` },
  { filename: "div role menubar containing hidden div role menubar", content: `<div id="test-subject1" role="menubar" aria-label="Main navigation">
  <div role="menuitem" aria-haspopup="true" tabindex="0" aria-expanded="false" id="fileMenuButton" onclick="toggleMenu('fileMenu')">File</div>
  <div id="fileMenu" role="menubar" aria-labelledby="fileMenuButton" style="display: none;">
    <div role="menuitem" tabindex="-1" onclick="newFile()">New</div>
    <div role="menuitem" tabindex="-1" onclick="openFile()">Open</div>
    <div role="menuitem" tabindex="-1" onclick="saveFile()">Save</div>
  </div>
</div>` },
  { filename: "div role menubar", content: `<div id="test-subject" role="menubar" aria-label="Main navigation">
  <div role="menuitem" aria-haspopup="true" tabindex="0" aria-expanded="false" id="fileMenuButton" onclick="toggleMenu('fileMenu')">File</div>
  <div role="menuitem" aria-haspopup="true" tabindex="0" aria-expanded="false" id="editMenuButton" onclick="toggleMenu('editMenu')">Edit</div>
</div>` },
  { filename: "mult div role menubar", content: `<div id="test-subject1" role="menubar" aria-label="Main navigation">
  <div role="menuitem" aria-haspopup="true" tabindex="0" aria-expanded="false" id="fileMenuButton" onclick="toggleMenu('fileMenu')">File</div>
  <div role="menuitem" aria-haspopup="true" tabindex="0" aria-expanded="false" id="editMenuButton" onclick="toggleMenu('editMenu')">Edit</div>
</div>
<div id="test-subject2" role="menubar" aria-label="Secondary navigation">
  <div role="menuitem" aria-haspopup="true" tabindex="0" aria-expanded="false">File</div>
  <div role="menuitem" aria-haspopup="true" tabindex="0" aria-expanded="false">Edit</div>
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

export default MenuBarAvoidFailure;
