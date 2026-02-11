import React from "react";
import EngineIssueSuccess from "../../../layout/engineIssueSuccess";

const MenuAvoidSuccess = () => {
  const ruleId = "menu-avoid";
  const title = `Avoid using role="menu" for web navigation links`;
  const description = `In most cases, using role=menu on navigation elements within a web page can negatively impact screen reader users, especially those using JAWS. The attribute should be used for menu types that function like those found in desktop applications.`;
  const helpText = `Remove role="menu" from the failing element.`;
  const bestPractices = [
  "Follow proper HTML semantics",
  "Ensure screen reader compatibility",
  "Test with assistive technologies"
  ];
  const htmlExamples = [
  { filename: "nav containing no menu items", content: `<nav>
    <ul>
      <li><a href="/">Home</a></li>
      <li>
        <a href="/about/" aria-haspopup="true" aria-expanded="false">About Us</a>
        <!-- Submenu for "About Us" -->
        <ul aria-label="About Us">
          <li><a href="/about/history">Our History</a></li>
          <li><a href="/about/team">Our Team</a></li>
          <li><a href="/about/mission">Our Mission</a></li>
        </ul>
      </li>
      <li><a href="/services/">Services</a></li>
      <li><a href="/contact/">Contact</a></li>
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

export default MenuAvoidSuccess;
