import React from "react";
import EngineIssueFailure from "../../../layout/engineIssueFailure";

const NavigationSubmenuDiscernibleFailure = () => {
  const ruleId = "navigation-submenu-discernible";
  const title = `Labeling submenus is recommended`;
  const description = `Complex menu structures that include nested submenus can unintentionally cause screen reader users to lose orientation. This can be mitigated by applying a unique label to each submenu to provide additional context for assistive technology.`;
  const helpText = `Add an aria-label to each submenu region. Screen readers will announce the label to users when they navigate into the submenu.`;
  const fixSteps = [
  "Review the HTML structure",
  "Apply proper accessibility attributes",
  "Test with screen readers"
  ];
  const htmlExamples = [
  { filename: "navigation nested submenu no label", content: `<style>
    button {
        display: none;
    }
</style>


<nav>
  <ul>
    <li>
      <a href="#">About</a>
      <ul id="sub-menu" aria-label="About Menu">
        <li><a href="#">Home</a></li>
        <li>
          <a href="#">About</a>
          <ul id="nested-sub-menu">
            <li><a href="#">Contact</a></li>
            <li><a href="#">Location</a></li>
          </ul>
        </li>
      </ul>
    </li>
    <li>
      <a href="#">Contact</a>
    </li>
  </ul>
</nav>` },
  { filename: "navigation submenu no role", content: `<nav>
  <ul>
    <li>
      <button id="sub-menu-button" aria-expanded="false">About</button>
      <ul id="sub-menu">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
      </ul>
    </li>
    <li>
      <a href="#">Contact</a>
    </li>
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

export default NavigationSubmenuDiscernibleFailure;
