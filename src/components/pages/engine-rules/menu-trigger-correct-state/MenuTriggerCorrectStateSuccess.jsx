import React from "react";
import EngineIssueSuccess from "../../../layout/engineIssueSuccess";

const MenuTriggerCorrectStateSuccess = () => {
  const ruleId = "menu-trigger-correct-state";
  const title = `Menu open/close states should be indicated to assistive technology`;
  const description = `Screen readers require properly coded states for interactive elements. Menus can be expanded or collapsed, and their state should be indicated to screen readers. Otherwise, users will lose orientation and get confused while browsing the menu.`;
  const helpText = `When a button is a menu trigger, you should connected it to the menu it toggles using the "aria-controls" attribute on the button, where the value is the "id" of the menu. Use the the "aria-expanded" attribute to indicate whether the menu controlled by a menu-trigger button is expanded or collapsed (if it is visible or not). Set the value to dynamically to "true" when the menu is visible and "false" when it is not. Note: the aria-expanded attribute must be placed on the link or button menu items only. Otherwise, they won't work.`;
  const bestPractices = [
  "Follow proper HTML semantics",
  "Ensure screen reader compatibility",
  "Test with assistive technologies"
  ];
  const htmlExamples = [
  { filename: "aria expanded false submenu controller", content: `<style>
  #submenu {
    display: none;
  }
</style>
<nav>
  <ul>
    <li><button type="button">Home</button></li>
    <li><button type="button">About</button></li>
    <li>
      <button type="button" aria-haspopup="true" aria-expanded="false" aria-controls="submenu">Services</button>
      <ul id="submenu" aria-hidden="true">
        <li><button type="button">Web Design</button></li>
        <li><button type="button">Graphic Design</button></li>
        <li><button type="button">SEO</button></li>
      </ul>
    </li>
    <li><button type="button">Contact</button></li>
  </ul>
</nav>` },
  { filename: "aria expanded true submenu controller", content: `<style>
  #submenu {
    display: block;
  }
</style>
<nav>
  <ul>
    <li><button type="button">Home</button></li>
    <li><button type="button">About</button></li>
    <li>
      <button type="button" aria-haspopup="true" aria-expanded="true" aria-controls="submenu">Services</button>
      <ul id="submenu" aria-hidden="false">
        <li><button type="button">Web Design</button></li>
        <li><button type="button">Graphic Design</button></li>
        <li><button type="button">SEO</button></li>
      </ul>
    </li>
    <li><button type="button">Contact</button></li>
  </ul>
</nav>` },
  { filename: "no aria controls submenu controller", content: `<style>
  #submenu {
    display: none;
  }
</style>
<nav>
  <ul>
    <li><button type="button">Home</button></li>
    <li><button type="button">About</button></li>
    <li>
      <button type="button" aria-haspopup="true" aria-expanded="false">Services</button>
      <ul id="submenu" aria-hidden="true">
        <li><button type="button">Web Design</button></li>
        <li><button type="button">Graphic Design</button></li>
        <li><button type="button">SEO</button></li>
      </ul>
    </li>
    <li><button type="button">Contact</button></li>
  </ul>
</nav>` },
  { filename: "no aria expanded submenu controller", content: `<style>
  #submenu {
    display: none;
  }
</style>
<nav>
  <ul>
    <li><button type="button">Home</button></li>
    <li><button type="button">About</button></li>
    <li>
      <button type="button" aria-haspopup="true" aria-controls="submenu">Services</button>
      <ul id="submenu" aria-hidden="true">
        <li><button type="button">Web Design</button></li>
        <li><button type="button">Graphic Design</button></li>
        <li><button type="button">SEO</button></li>
      </ul>
    </li>
    <li><button type="button">Contact</button></li>
  </ul>
</nav>` },
  { filename: "no aria haspopup submenu controller", content: `<style>
  #submenu {
    display: none;
  }
</style>
<nav>
  <ul>
    <li><button type="button">Home</button></li>
    <li><button type="button">About</button></li>
    <li>
      <button type="button" aria-expanded="false" aria-controls="submenu">Services</button>
      <ul id="submenu" aria-hidden="true">
        <li><button type="button">Web Design</button></li>
        <li><button type="button">Graphic Design</button></li>
        <li><button type="button">SEO</button></li>
      </ul>
    </li>
    <li><button type="button">Contact</button></li>
  </ul>
</nav>` },
  { filename: "wrong aria haspopup submenu controller", content: `<style>
  #submenu {
    display: none;
  }
</style>
<nav>
  <ul>
    <li><button type="button">Home</button></li>
    <li><button type="button">About</button></li>
    <li>
      <button type="button" aria-haspopup="false" aria-expanded="false" aria-controls="submenu">Services</button>
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

export default MenuTriggerCorrectStateSuccess;
