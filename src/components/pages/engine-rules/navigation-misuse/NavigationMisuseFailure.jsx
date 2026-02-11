import React from "react";
import EngineIssueFailure from "../../../layout/engineIssueFailure";

const NavigationMisuseFailure = () => {
  const ruleId = "navigation-misuse";
  const title = `An element without navigation links is tagged as a navigation landmark`;
  const description = `Screen readers rely on accurate tagging and labeling to provide necessary context. If an element that does not contain navigation links is tagged as a navigation landmark, screen reader users may lose orientation and find the page's structure difficult to understand.`;
  const helpText = `Add role=presentation to the incorrect <nav> element or remove role=navigation if a different element is used.`;
  const fixSteps = [
  "Review the HTML structure",
  "Apply proper accessibility attributes",
  "Test with screen readers"
  ];
  const htmlExamples = [
  { filename: "nav element is container of nav container", content: `<div>
  <nav>
    <div>
      <ul>
        <li>
          <a href="#main-content">Skip to main content</a>
        </li>
        <li>
          <a href="#footer">Skip to footer</a>
        </li>
      </ul>
    </div>
    <p>some text in here</p>
  </nav>
</div>` },
  { filename: "nav is used as container of no list menus", content: `<div>
  <nav>
    <h1>Page header</h1>
    <div>
      <article>
        <h2>Article header</h2>
        <p>Article content</p>
      </article>
    </div>
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

export default NavigationMisuseFailure;
