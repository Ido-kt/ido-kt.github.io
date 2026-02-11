import React from "react";
import EngineIssueSuccess from "../../../layout/engineIssueSuccess";

const MenuItemAvoidSuccess = () => {
  const ruleId = "menu-item-avoid";
  const title = `Avoid using role="menuitem" for web navigation links`;
  const description = `In most cases, using ARIA menu roles within a web page can negatively impact screen reader users, especially those using JAWS. role="menuitem" should be used for menu items in menu types that function like those found in desktop applications.`;
  const helpText = `Use standard lists with links and buttons (or custom buttons with role="button") and remove role="menuitem".`;
  const bestPractices = [
    "Follow proper HTML semantics",
    "Ensure screen reader compatibility",
    "Test with assistive technologies",
  ];
  const htmlExamples = [
    {
      filename: "div with role navigation containing ul and li without roles",
      content: `<div role="navigation">
  <ul>
    <li><button type="button">Home</button></li>
    <li><button type="button">About</button></li>
    <li><button type="button">Contact</button></li>
  </ul>
</div>`,
    },
    {
      filename: "nav containing ul and li without roles",
      content: `<nav>
  <ul>
    <li><button type="button">Home</button></li>
    <li><button type="button">About</button></li>
    <li><button type="button">Contact</button></li>
  </ul>
</nav>`,
    },
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

export default MenuItemAvoidSuccess;
