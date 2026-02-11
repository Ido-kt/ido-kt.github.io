import React from "react";
import EngineIssueSuccess from "../../../layout/engineIssueSuccess";

const NavigationItemLinkSuccess = () => {
  const ruleId = "navigation-item-link";
  const title = `All leaf nodes in a navigation tree should contain a link element.`;
  const description = `Navigation items, whether their functionality is provided using JS (custom behavior), should always have a child that is a link and not as a clickable LI element with text.`;
  const helpText = `Always include a link under navigation items and avoid using text elements even if functionality is provided using JS.`;
  const bestPractices = [
  "Follow proper HTML semantics",
  "Ensure screen reader compatibility",
  "Test with assistive technologies"
  ];
  const htmlExamples = [
  { filename: "nav anchor list", content: `<nav>
  <ul>
    <li id="test-subject-1"><a href="#">Home</a></li>
    <li id="test-subject-2"><a href="#">About</a></li>
    <li id="test-subject-3"><a href="#">Services</a></li>
    <li id="test-subject-4"><a href="#">Contact</a></li>
  </ul>
</nav>` },
  { filename: "nav anchor role list", content: `<nav>
  <div role="list">
    <div id="test-subject-1" role="listitem"><a href="#">Home</a></div>
    <div id="test-subject-2" role="listitem"><a href="#">About</a></div>
    <div id="test-subject-3" role="listitem"><a href="#">Services</a></div>
    <div id="test-subject-4" role="listitem"><a href="#">Contact</a></div>
  </div>
</nav>` },
  { filename: "nav role list role list items", content: `<nav>
  <ul>
    <li id="test-subject-1"><div role="link" onclick="navigateToPage('home.html');">Home</div></li>
    <li id="test-subject-2"><div role="link" onclick="navigateToPage('about.html');">About</div></li>
    <li id="test-subject-3"><div role="link" onclick="navigateToPage('contact.html');">Contact</div></li>
  </ul>
</nav>` },
  { filename: "nav sublist", content: `<nav aria-label="Main Navigation">
  <ul>
    <li><a href="/home">Home</a></li>
    <li><a href="/about">About Us</a></li>
    <li>Services
      <ul>
        <li><a href="/services/web-design">Web Design</a></li>
        <li><a href="/services/seo">SEO</a></li>
        <li><a href="/services/content">Content Creation</a></li>
      </ul>
    </li>
    <li><a href="/contact">Contact</a></li>
  </ul>
</nav>` },
  { filename: "role anchor list", content: `<div role="navigation">
    <ul>
        <li id="test-subject-1"><a href="#">Home</a></li>
        <li id="test-subject-2"><a href="#">About</a></li>
        <li id="test-subject-3"><a href="#">Services</a></li>
        <li id="test-subject-4"><a href="#">Contact</a></li>
    </ul>
</div>` },
  { filename: "role nav list items", content: `<div role="navigation">
  <ul>
    <li id="test-subject-1"><div role="link" onclick="navigateToPage('home.html');">Home</div></li>
    <li id="test-subject-2"><div role="link" onclick="navigateToPage('about.html');">About</div></li>
    <li id="test-subject-3"><div role="link" onclick="navigateToPage('contact.html');">Contact</div></li>
  </ul>
</div>` },
  { filename: "role nav role list role list items", content: `<div role="navigation">
  <div role="list">
    <div id="test-subject-1" role="listitem"><a href="#">Home</a></div>
    <div id="test-subject-2" role="listitem"><a href="#">About</a></div>
    <div id="test-subject-3" role="listitem"><a href="#">Services</a></div>
    <div id="test-subject-4" role="listitem"><a href="#">Contact</a></div>
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

export default NavigationItemLinkSuccess;
