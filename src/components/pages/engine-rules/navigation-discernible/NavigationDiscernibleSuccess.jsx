import React from "react";
import EngineIssueSuccess from "../../../layout/engineIssueSuccess";

const NavigationDiscernibleSuccess = () => {
  const ruleId = "navigation-discernible";
  const title = `Navigation regions should have unique labels when there are multiple navigation regions`;
  const description = `When multiple navigation regions exist on a page, each navigation element should have a unique label so that each region can be differentiated by screen reader users.`;
  const helpText = `Provide a unique label for each navigation region using either the aria-label or aria-labelledby attribute.`;
  const bestPractices = [
  "Follow proper HTML semantics",
  "Ensure screen reader compatibility",
  "Test with assistive technologies"
  ];
  const htmlExamples = [
  { filename: "nav correct label", content: `<nav aria-label="Main Menu">
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
  { filename: "nav correct labelledby", content: `<label id="mainlabel">Main Menu</label>
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
  { filename: "role correct labelledby", content: `<label id="mainlabel">Main Menu</label>
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
</div>` },
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

export default NavigationDiscernibleSuccess;
