import React from "react";
import EngineIssueFailure from "../../../layout/engineIssueFailure";

const NavigationSubmenuRegionFailure = () => {
  const ruleId = "navigation-submenu-region";
  const title = `Tagging submenus is recommended`;
  const description = `Complex menu structures often contain multiple groups of links that can feel like undifferentiated page content to screen reader users. Assigning role="region" with a label makes each submenu a distinct, named section, clarifying its relationship to the trigger and improving orientation.`;
  const helpText = `Assign role="region" to each menu panel so screen reader users can distinguish submenus from surrounding page content. Adding a label (e.g., with aria-labelledby) helps users quickly identify each panel within a complex menu structure.`;
  const fixSteps = [
  "Review the HTML structure",
  "Apply proper accessibility attributes",
  "Test with screen readers"
  ];
  const htmlExamples = [
  { filename: "navigation nested submenu no role", content: `<style>
    button {
        display: none;
    }
</style>


<nav>
  <ul>
    <li>
      <a href="#">About</a>
      <ul id="sub-menu" role="region">
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

export default NavigationSubmenuRegionFailure;
