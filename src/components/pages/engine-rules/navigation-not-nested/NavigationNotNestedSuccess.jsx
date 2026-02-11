import React from "react";
import EngineIssueSuccess from "../../../layout/engineIssueSuccess";

const NavigationNotNestedSuccess = () => {
  const ruleId = "navigation-not-nested";
  const title = `Avoid using nested navigation structure`;
  const description = `Complex navigation components can be difficult for screen readers to handle. This is especially true if submenus or other complex structures exist. Nesting navigation regions makes it harder for screen reader users to understand a page's structure and disrupts orientation.`;
  const helpText = `If the failing element is a custom navigation region, remove role="navigation". If the failing element is coded using a HTML <nav> tag, apply role="presentation" or a role that is suitable for the function of the element.`;
  const bestPractices = [
  "Follow proper HTML semantics",
  "Ensure screen reader compatibility",
  "Test with assistive technologies"
  ];
  const htmlExamples = [
  { filename: "nav nested presentation", content: `<nav>
  <ul>
    <li><a href="/">Home</a></li>
    <li>
      <a href="/about/">About Us</a>
      <!-- Submenu for "About Us" -->
      <nav role="presentation" aria-label="submenu">
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
  { filename: "nav no nested multi", content: `<nav>
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/about/">About Us</a></li>
    <li><a href="/services/">Services</a></li>
    <li><a href="/contact/">Contact</a></li>
  </ul>
</nav>
<nav>
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/about/">About Us</a></li>
    <li><a href="/services/">Services</a></li>
    <li><a href="/contact/">Contact</a></li>
  </ul>
</nav>
<nav>
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/about/">About Us</a></li>
    <li><a href="/services/">Services</a></li>
    <li><a href="/contact/">Contact</a></li>
  </ul>
</nav>` },
  { filename: "nav no nested", content: `<nav>
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/about/">About Us</a></li>
    <li><a href="/services/">Services</a></li>
    <li><a href="/contact/">Contact</a></li>
  </ul>
</nav>` },
  { filename: "nav role nested presentation", content: `<div role="navigation">
  <ul>
    <li><a href="/">Home</a></li>
    <li>
      <a href="/about/">About Us</a>
      <!-- Submenu for "About Us" -->
      <nav role="presentation">
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
</div>` },
  { filename: "nav role no nested", content: `<div role="navigation">
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/about/">About Us</a></li>
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

export default NavigationNotNestedSuccess;
