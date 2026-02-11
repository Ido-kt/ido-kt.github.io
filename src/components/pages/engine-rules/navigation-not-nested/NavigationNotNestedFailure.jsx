import React from "react";
import EngineIssueFailure from "../../../layout/engineIssueFailure";

const NavigationNotNestedFailure = () => {
  const ruleId = "navigation-not-nested";
  const title = `Avoid using nested navigation structure`;
  const description = `Complex navigation components can be difficult for screen readers to handle. This is especially true if submenus or other complex structures exist. Nesting navigation regions makes it harder for screen reader users to understand a page's structure and disrupts orientation.`;
  const helpText = `If the failing element is a custom navigation region, remove role="navigation". If the failing element is coded using a HTML <nav> tag, apply role="presentation" or a role that is suitable for the function of the element.`;
  const fixSteps = [
  "Review the HTML structure",
  "Apply proper accessibility attributes",
  "Test with screen readers"
  ];
  const htmlExamples = [
  { filename: "nav nested nav multi", content: `<nav id="not-nested-nav">
  <ul>
    <li><a href="/">Home</a></li>
    <li>
      <a href="/about/">About Us</a>
      <!-- Submenu for "About Us" -->
      <nav id="nested-nav1">
        <ul>
          <li><a href="/about/history">Our History</a></li>
          <li><a href="/about/team">Our Team</a></li>
          <li>
            <a href="/about/mission">Our Mission</a>
            <nav id="nested-nav2">
              <ul>
                <li><a href="/about/mission/start">Our Beginning</a></li>
                <li><a href="/about/mission/end">Our Goal</a></li>
              </ul>
            </nav>
          </li>
        </ul>
      </nav>
    </li>
    <li><a href="/services/">Services</a></li>
    <li><a href="/contact/">Contact</a></li>
  </ul>
</nav>` },
  { filename: "nav nested nav role", content: `<nav id="not-nested-nav">
  <ul>
    <li><a href="/">Home</a></li>
    <li>
      <a href="/about/">About Us</a>
      <!-- Submenu for "About Us" -->
      <div id="nested-role" role="navigation">
        <ul>
          <li><a href="/about/history">Our History</a></li>
          <li><a href="/about/team">Our Team</a></li>
          <li><a href="/about/mission">Our Mission</a></li>
        </ul>
      </div>
    </li>
    <li><a href="/services/">Services</a></li>
    <li><a href="/contact/">Contact</a></li>
  </ul>
</nav>` },
  { filename: "nav nested nav", content: `<nav id="not-nested-nav">
  <ul>
    <li><a href="/">Home</a></li>
    <li>
      <a href="/about/">About Us</a>
      <!-- Submenu for "About Us" -->
      <nav id="nested-nav">
        <ul>
          <li><a href="/about/history">Our History</a></li>
          <li><a href="/about/team">Our Team</a></li>
          <li><a href="/about/mission">Our Mission</a></li>
        </ul>
      </nav>
    </li>
    <li><a href="/services/">Services</a></li>
    <li><a href="/contact/">Contact</a></li>
  </ul>
</nav>` },
  { filename: "nav role nested nav role", content: `<div role="navigation" id="not-nested-nav">
  <ul>
    <li><a href="/">Home</a></li>
    <li>
      <a href="/about/">About Us</a>
      <!-- Submenu for "About Us" -->
      <div id="nested-nav" role="navigation">
        <ul>
          <li><a href="/about/history">Our History</a></li>
          <li><a href="/about/team">Our Team</a></li>
          <li><a href="/about/mission">Our Mission</a></li>
        </ul>
      </div>
    </li>
    <li><a href="/services/">Services</a></li>
    <li><a href="/contact/">Contact</a></li>
  </ul>
</div>` },
  { filename: "nav role nested nav", content: `<div role="navigation" id="not-nested-nav">
  <ul>
    <li><a href="/">Home</a></li>
    <li>
      <a href="/about/">About Us</a>
      <!-- Submenu for "About Us" -->
      <nav id="nested-nav">
        <ul>
          <li><a href="/about/history">Our History</a></li>
          <li><a href="/about/team">Our Team</a></li>
          <li><a href="/about/mission">Our Mission</a></li>
        </ul>
        <nav id="nested-nav2"></nav>
      </nav>
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

export default NavigationNotNestedFailure;
