import React from "react";
import EngineIssueFailure from "../../../layout/engineIssueFailure";

const MenuTriggerClickableFailure = () => {
  const ruleId = "menu-trigger-clickable";
  const title = `ARIA relationship and state attributes should only be applied to elements with appropriate roles`;
  const description = `Interactive elements that trigger additional content should only have relationship and state ARIA attributes, such as aria-expanded and aria-controls, if they have interactive roles, such as button, tab, combobox and in rarer cases, link.`;
  const helpText = `Make sure relationship and state ARIA attributes are only applied to elements with interactive roles, such as button, tab, and combobox. In rare cases, aria-expanded can be applied to link elements or elements with role='link', however this should only be done when the link both navigates and expands content.`;
  const fixSteps = [
  "Review the HTML structure",
  "Apply proper accessibility attributes",
  "Test with screen readers"
  ];
  const htmlExamples = [
  { filename: "li as menu trigger", content: `<style>
  #submenu {
    display: none;
  }
</style>
<nav>
  <ul>
    <li><a href="#">Home</a></li>
    <li><a href="#">About</a></li>
    <li>
      <ul>
        <li id="test-subject" aria-haspopup="true" aria-expanded="false" aria-controls="submenu">
          <button>Services</button>
        </li>
        <ul id="submenu" aria-hidden="true">
          <li><a href="#">Graphic Design</a></li>
          <li><a href="#">SEO</a></li>
        </ul>
      </ul>
    </li>
    <li><a href="#">Contact</a></li>
  </ul>
</nav>` },
  { filename: "span as menu trigger", content: `<style>
  #submenu {
    display: none;
  }
</style>
<nav>
  <ul>
    <li><a href="#">Home</a></li>
    <li><a href="#">About</a></li>
    <li>
      <span id="test-subject" aria-haspopup="true" aria-expanded="false" aria-controls="submenu">Services</span>
    </li>
    <li>
      <ul id="submenu" aria-hidden="true">
        <li><a href="#">Web Design</a></li>
        <li><a href="#">Graphic Design</a></li>
        <li><a href="#">SEO</a></li>
      </ul>
    </li>
    <li><a href="#">Contact</a></li>
  </ul>
</nav>` }
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

export default MenuTriggerClickableFailure;
