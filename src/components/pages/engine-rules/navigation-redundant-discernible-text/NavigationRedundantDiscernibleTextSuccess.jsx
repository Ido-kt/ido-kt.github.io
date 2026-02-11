import React from "react";
import EngineIssueSuccess from "../../../layout/engineIssueSuccess";

const NavigationRedundantDiscernibleTextSuccess = () => {
  const ruleId = "navigation-redundant-discernible-text";
  const title = `Navigation elements should have a label that doesn't contain the word navigation`;
  const description = `Screen readers announce when a user encounters a navigation region, which is why including the word 'navigation' in a label is redundant.`;
  const helpText = `Remove the word 'navigation' from assigned labels.`;
  const bestPractices = [
  "Follow proper HTML semantics",
  "Ensure screen reader compatibility",
  "Test with assistive technologies"
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
  { filename: "nav with aria label", content: `<nav aria-label="main">
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
  { filename: "nav with aria labelledby", content: `<label id="mainlabel">Main</label>
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
  { filename: "role nav correct label", content: `<div role="navigation" aria-label="Main Menu">
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
  { filename: "role nav multi aria labelledby", content: `<label id="mainlabel">Main</label>
<label id="secondlabel">Main</label>
<div role="navigation" aria-labelledby="mainlabel secondlabel">
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
</div>` },
  { filename: "role nav with aria label", content: `<div role="navigation" aria-label="main">
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
  { filename: "role nav with aria labelledby", content: `<label id="mainlabel">Main</label>
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

export default NavigationRedundantDiscernibleTextSuccess;
