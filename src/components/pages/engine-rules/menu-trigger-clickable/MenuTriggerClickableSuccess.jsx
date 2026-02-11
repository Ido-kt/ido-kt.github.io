import React from "react";
import EngineIssueSuccess from "../../../layout/engineIssueSuccess";

const MenuTriggerClickableSuccess = () => {
  const ruleId = "menu-trigger-clickable";
  const title = `ARIA relationship and state attributes should only be applied to elements with appropriate roles`;
  const description = `Interactive elements that trigger additional content should only have relationship and state ARIA attributes, such as aria-expanded and aria-controls, if they have interactive roles, such as button, tab, combobox and in rarer cases, link.`;
  const helpText = `Make sure relationship and state ARIA attributes are only applied to elements with interactive roles, such as button, tab, and combobox. In rare cases, aria-expanded can be applied to link elements or elements with role='link', however this should only be done when the link both navigates and expands content.`;
  const bestPractices = [
  "Follow proper HTML semantics",
  "Ensure screen reader compatibility",
  "Test with assistive technologies"
  ];
  const htmlExamples = [
  { filename: "anchor as menu trigger", content: `<style>
  #submenu {
    display: none;
  }
</style>
<nav>
  <ul>
    <li><button type="button">Home</button></li>
    <li><button type="button">About</button></li>
    <li>
      <button id="test-subject" type="button" aria-haspopup="true" aria-expanded="false" aria-controls="submenu">Services</button>
      <ul id="submenu" aria-hidden="true">
        <li><button type="button">Web Design</button></li>
        <li><button type="button">Graphic Design</button></li>
        <li><button type="button">SEO</button></li>
      </ul>
    </li>
    <li><button type="button">Contact</button></li>
  </ul>
</nav>` },
  { filename: "button role as menu trigger", content: `<style>
  #submenu {
    display: block;
  }
</style>
<nav>
  <ul>
    <li><button type="button">Home</button></li>
    <li><button type="button">About</button></li>
    <li>
      <span role="button" id="test-subject" aria-haspopup="true" aria-expanded="true" aria-controls="submenu">Services</span>
      <ul id="submenu" aria-hidden="false">
        <li><button type="button">Web Design</button></li>
        <li><button type="button">Graphic Design</button></li>
        <li><button type="button">SEO</button></li>
      </ul>
    </li>
    <li><button type="button">Contact</button></li>
  </ul>
</nav>` },
  { filename: "button tag as menu trigger", content: `<style>
  #submenu {
    display: block;
  }
</style>
<nav>
  <ul>
    <li><button type="button">Home</button></li>
    <li><button type="button">About</button></li>
    <li>
      <button id="test-subject" type="button" aria-haspopup="true" aria-expanded="true" aria-controls="submenu">Services</button>
      <ul id="submenu" aria-hidden="false">
        <li><button type="button">Web Design</button></li>
        <li><button type="button">Graphic Design</button></li>
        <li><button type="button">SEO</button></li>
      </ul>
    </li>
    <li><button type="button">Contact</button></li>
  </ul>
</nav>` },
  { filename: "link role as menu trigger", content: `<style>
  #submenu {
    display: none;
  }
</style>
<nav>
  <ul>
    <li><button type="button">Home</button></li>
    <li><button type="button">About</button></li>
    <li>
      <span role="link" id="test-subject" aria-haspopup="true" aria-expanded="false" aria-controls="submenu">Services</span>
      <ul id="submenu" aria-hidden="true">
        <li><button type="button">Web Design</button></li>
        <li><button type="button">Graphic Design</button></li>
        <li><button type="button">SEO</button></li>
      </ul>
    </li>
    <li><button type="button">Contact</button></li>
  </ul>
</nav>` }
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

export default MenuTriggerClickableSuccess;
