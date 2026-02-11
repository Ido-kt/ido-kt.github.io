import React from "react";
import EngineIssueFailure from "../../../layout/engineIssueFailure";

const TabListMisuseFailure = () => {
  const ruleId = "tab-list-misuse";
  const title = `Only elements that function as tablists should receive role="tablist"`;
  const description = `Applying role="tablist" to an element without tabs misleads screen reader users by suggesting a group of tabs that does not exist.`;
  const helpText = `Remove role="tablist" from the failing element.`;
  const fixSteps = [
  "Review the HTML structure",
  "Apply proper accessibility attributes",
  "Test with screen readers"
  ];
  const htmlExamples = [
  { filename: "skip link role tablist", content: `<div>
  <nav>
    <div>
      <ul>
        <li>
          <span role="tablist"><a href="#main-content">Skip to main content</a></span>
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

export default TabListMisuseFailure;
