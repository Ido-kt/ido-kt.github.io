import React from "react";
import EngineIssueFailure from "../../../layout/engineIssueFailure";

const TabPanelMisuseFailure = () => {
  const ruleId = "tab-panel-misuse";
  const title = `Only elements that function as tab panels should receive role="tabpanel"`;
  const description = `Applying role="tabpanel" to an element without a corresponding tab misleads screen reader users by announcing it as tab content, even though no controlling tab exists.`;
  const helpText = `Remove role="tabpanel" from the failing element.`;
  const fixSteps = [
  "Review the HTML structure",
  "Apply proper accessibility attributes",
  "Test with screen readers"
  ];
  const htmlExamples = [
  { filename: "skip link role tabpanel", content: `<div>
  <nav>
    <div>
      <ul>
        <li>
          <span role="tabpanel"><a href="#main-content">Skip to main content</a></span>
        </li>
        <li>
          <a href="#footer">Skip to footer</a>
        </li>
      </ul>
    </div>
    <p>some text in here</p>
  </nav>
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

export default TabPanelMisuseFailure;
