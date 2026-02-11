import React from "react";
import EngineIssueFailure from "../../../layout/engineIssueFailure";

const MenuTriggerCorrectStateFailure = () => {
  const ruleId = "menu-trigger-correct-state";
  const title = `Menu open/close states should be indicated to assistive technology`;
  const description = `Screen readers require properly coded states for interactive elements. Menus can be expanded or collapsed, and their state should be indicated to screen readers. Otherwise, users will lose orientation and get confused while browsing the menu.`;
  const helpText = `When a button is a menu trigger, you should connected it to the menu it toggles using the "aria-controls" attribute on the button, where the value is the "id" of the menu. Use the the "aria-expanded" attribute to indicate whether the menu controlled by a menu-trigger button is expanded or collapsed (if it is visible or not). Set the value to dynamically to "true" when the menu is visible and "false" when it is not. Note: the aria-expanded attribute must be placed on the link or button menu items only. Otherwise, they won't work.`;
  const fixSteps = [
  "Review the HTML structure",
  "Apply proper accessibility attributes",
  "Test with screen readers"
  ];
  const htmlExamples = [
  { filename: "wrong aria expanded 2 submenu controller", content: `<style>
  #submenu {
    display: block;
  }
</style>
<nav>
  <ul>
    <li><a href="#">Home</a></li>
    <li><a href="#">About</a></li>
    <li>
      <a href="#" aria-haspopup="true" aria-expanded="false" aria-controls="submenu">Services</a>
      <ul id="submenu" aria-hidden="false">
        <li><a href="#">Web Design</a></li>
        <li><a href="#">Graphic Design</a></li>
        <li><a href="#">SEO</a></li>
      </ul>
    </li>
    <li><a href="#">Contact</a></li>
  </ul>
</nav>` },
  { filename: "wrong aria expanded submenu controller", content: `<style>
  #submenu {
    display: none;
  }
</style>
<nav>
  <ul>
    <li><a href="#">Home</a></li>
    <li><a href="#">About</a></li>
    <li>
      <a href="#" aria-haspopup="true" aria-expanded="true" aria-controls="submenu">Services</a>
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

export default MenuTriggerCorrectStateFailure;
