import React from "react";
import EngineIssueFailure from "../../../layout/engineIssueFailure";

const TabMisuseFailure = () => {
  const ruleId = "tab-misuse";
  const title = `Only elements that function as tabs should receive role="tab"`;
  const description = `Applying role="tab" to an element that is not part of a functioning tab interface misleads screen reader users by presenting it as a tab without a corresponding panel.`;
  const helpText = `Remove role="tab" from the failing element.`;
  const fixSteps = [
  "Review the HTML structure",
  "Apply proper accessibility attributes",
  "Test with screen readers"
  ];
  const htmlExamples = [
  { filename: "skip link role tab", content: `<div>
  <nav>
    <div>
      <ul>
        <li>
          <span role="tab"><a href="#main-content">Skip to main content</a></span>
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

export default TabMisuseFailure;
