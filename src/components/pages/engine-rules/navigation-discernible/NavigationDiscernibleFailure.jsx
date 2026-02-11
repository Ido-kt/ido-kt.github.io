import React from "react";
import EngineIssueFailure from "../../../layout/engineIssueFailure";

const NavigationDiscernibleFailure = () => {
  const ruleId = "navigation-discernible";
  const title = `Navigation regions should have unique labels when there are multiple navigation regions`;
  const description = `When multiple navigation regions exist on a page, each navigation element should have a unique label so that each region can be differentiated by screen reader users.`;
  const helpText = `Provide a unique label for each navigation region using either the aria-label or aria-labelledby attribute.`;
  const fixSteps = [
  "Review the HTML structure",
  "Apply proper accessibility attributes",
  "Test with screen readers"
  ];
  const htmlExamples = [
  { filename: "nav no aria label", content: `<nav>
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
  { filename: "nav with empty aria labelledby", content: `<label id="mainlabel"></label>
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
  { filename: "nav with no aria labelledby", content: `<nav aria-labelledby="mainlabel">
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
  { filename: "role nav no aria label", content: `<div role="navigation">
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

export default NavigationDiscernibleFailure;
