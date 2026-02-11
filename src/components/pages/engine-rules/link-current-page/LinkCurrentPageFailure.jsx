import React from "react";
import EngineIssueFailure from "../../../layout/engineIssueFailure";

const LinkCurrentPageFailure = () => {
  const ruleId = "link-current-page";
  const title = `Visual indication that a link's destination is the current page should be announced by screen readers`;
  const description = `Visual cues are often used by sighted users to indicate which link represents the current page within a set of links. This information should be made available to screen reader users by assigning aria-current='page' to the link.`;
  const helpText = `Add aria-current="page" to the  link within a list of navigation links whose destination matches the page the user is currently navigating.`;
  const fixSteps = [
  "Review the HTML structure",
  "Apply proper accessibility attributes",
  "Test with screen readers"
  ];
  const htmlExamples = [
  { filename: "a tag aria current is not page", content: `<a class="current" href="http://127.0.0.1:9000/rules/link-current-page/atomic-tests/fail/a-tag-aria-current-is-not-page.html" aria-current="true">current</a>` },
  { filename: "a tag no aria current page", content: `<a class="current" href="http://127.0.0.1:9000/rules/link-current-page/atomic-tests/fail/a-tag-no-aria-current-page.html">current</a>` },
  { filename: "breadcrumb no aria current page", content: `<nav aria-label="Breadcrumb" class="breadcrumb">
  <ol>
    <li>
      <a href="../../../../../">Web technology for developers</a>
    </li>
    <li>
      <a href="../../../../">Accessibility</a>
    </li>
    <li>
      <a href="../../../">ARIA</a>
    </li>
    <li>
      <a href="../../">ARIA States and Properties</a>
    </li>
    <li>
      <a class="current" href="http://127.0.0.1:9000/rules/link-current-page/atomic-tests/fail/breadcrumb-no-aria-current-page.html">ARIA: \`aria-current\` attribute</a>
    </li>
  </ol>
</nav>` },
  { filename: "div role link no aria current page", content: `<div role="link" class="current" href="http://127.0.0.1:9000/rules/link-current-page/atomic-tests/fail/div-role-link-no-aria-current-page.html">current</div>` },
  { filename: "nav no aria current page", content: `<nav>
  <ul>
    <li><a class="current" id="link-home" href="http://127.0.0.1:9000/rules/link-current-page/atomic-tests/fail/nav-no-aria-current-page.html">Home</a></li>
    <li><a href="/">About</a></li>
    <li><a href="/">Contact</a></li>
  </ul>
</nav>` }
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

export default LinkCurrentPageFailure;
