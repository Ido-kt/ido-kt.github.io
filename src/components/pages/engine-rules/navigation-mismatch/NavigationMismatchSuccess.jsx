import React from "react";
import EngineIssueSuccess from "../../../layout/engineIssueSuccess";

const NavigationMismatchSuccess = () => {
  const ruleId = "navigation-mismatch";
  const title = `A list of navigation links is not contained in a navigation landmark`;
  const description = `Screen readers rely on accurate tagging and labeling to provide necessary context. If a navigation region is not tagged as a navigation landmark, screen reader users may lose orientation and find the page's structure difficult to understand.`;
  const helpText = `Add role=navigation to the custom navigation region, or use a HTML <nav> element.`;
  const bestPractices = [
  "Follow proper HTML semantics",
  "Ensure screen reader compatibility",
  "Test with assistive technologies"
  ];
  const htmlExamples = [
  { filename: "nav role is container of multiple list menus nav links", content: `<div>
  <div role="navigation">
    <ul>
      <li>
        <a href="/home">Home</a>
      </li>
      <li>
        <a href="/about">About</a>
      </li>
    </ul>
    <div>
      <h4>Contact us</h4>
      <ul>
        <li>
          <a href="/contact/info">Get info</a>
        </li>
        <li>
          <a href="/contact/ticket">Submit a ticket</a>
        </li>
      </ul>
    </div>
  </div>
</div>` },
  { filename: "nav role is container of multiple list menus", content: `<div>
  <div role="navigation">
    <ul>
      <li>
        <a href="#main-content">Skip to main content</a>
      </li>
      <li>
        <a href="#footer">Skip to footer</a>
      </li>
    </ul>
    <ul>
      <li>
        <a href="#main-content">Skip to main content</a>
      </li>
      <li>
        <a href="#footer">Skip to footer</a>
      </li>
    </ul>
  </div>
</div>` },
  { filename: "nav role is container of single list menu", content: `<div>
  <div role="navigation">
    <ul>
      <li>
        <a href="#main-content">Skip to main content</a>
      </li>
      <li>
        <a href="#footer">Skip to footer</a>
      </li>
    </ul>
  </div>
</div>` }
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

export default NavigationMismatchSuccess;
