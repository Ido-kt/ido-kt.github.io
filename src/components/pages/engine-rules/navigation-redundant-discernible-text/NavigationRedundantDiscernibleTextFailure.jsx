import React from "react";
import EngineIssueFailure from "../../../layout/engineIssueFailure";

const NavigationRedundantDiscernibleTextFailure = () => {
  const ruleId = "navigation-redundant-discernible-text";
  const title = `Navigation elements should have a label that doesn't contain the word navigation`;
  const description = `Screen readers announce when a user encounters a navigation region, which is why including the word 'navigation' in a label is redundant.`;
  const helpText = `Remove the word 'navigation' from assigned labels.`;
  const fixSteps = [
  "Review the HTML structure",
  "Apply proper accessibility attributes",
  "Test with screen readers"
  ];
  const htmlExamples = [
  { filename: "nav wrong label", content: `<nav aria-label="Main Navigation">
  <ul>
    <li><a href="/">Home</a></li>
    <li>
      <a href="/about/" aria-haspopup="true" aria-expanded="false">About Us</a>
      <ul aria-label="About Us">
        <li><a href="/about/history">Our History</a></li>
        <li><a href="/about/team">Our Team</a></li>
        <li><a href="/about/mission">Our Mission</a></li>
      </ul>
    </li>
    <li><a href="/services/">Services</a></li>
    <li><a href="/contact/">Contact</a></li>
  </ul>
</nav>` },
  { filename: "nav wrong labelledby", content: `<label id="mainlabel">Main Navigation</label>
<nav aria-labelledby="mainlabel">
  <ul>
    <li><a href="/">Home</a></li>
    <li>
      <a href="/about/" aria-haspopup="true" aria-expanded="false">About Us</a>
      <ul aria-label="About Us">
        <li><a href="/about/history">Our History</a></li>
        <li><a href="/about/team">Our Team</a></li>
        <li><a href="/about/mission">Our Mission</a></li>
      </ul>
    </li>
    <li><a href="/services/">Services</a></li>
    <li><a href="/contact/">Contact</a></li>
  </ul>
</nav>` },
  { filename: "role nav wrong label", content: `<div role="navigation" aria-label="Main Navigation">
  <ul>
    <li><a href="/">Home</a></li>
    <li>
      <a href="/about/" aria-haspopup="true" aria-expanded="false">About Us</a>
      <ul aria-label="About Us">
        <li><a href="/about/history">Our History</a></li>
        <li><a href="/about/team">Our Team</a></li>
        <li><a href="/about/mission">Our Mission</a></li>
      </ul>
    </li>
    <li><a href="/services/">Services</a></li>
    <li><a href="/contact/">Contact</a></li>
  </ul>
</div>` },
  { filename: "role nav wrong labelledby", content: `<label id="mainlabel">Main Navigation</label>
<div role="navigation" aria-labelledby="mainlabel">
  <ul>
    <li><a href="/">Home</a></li>
    <li>
      <a href="/about/" aria-haspopup="true" aria-expanded="false">About Us</a>
      <ul aria-label="About Us">
        <li><a href="/about/history">Our History</a></li>
        <li><a href="/about/team">Our Team</a></li>
        <li><a href="/about/mission">Our Mission</a></li>
      </ul>
    </li>
    <li><a href="/services/">Services</a></li>
    <li><a href="/contact/">Contact</a></li>
  </ul>
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

export default NavigationRedundantDiscernibleTextFailure;
