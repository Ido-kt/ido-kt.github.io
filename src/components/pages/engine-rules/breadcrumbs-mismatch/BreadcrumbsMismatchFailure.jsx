import React from "react";
import EngineIssueFailure from "../../../layout/engineIssueFailure";

const BreadcrumbsMismatchFailure = () => {
  const ruleId = "breadcrumbs-mismatch";
  const title = `Breadcrumb navigation region should have a label`;
  const description = `A breadcrumb region presents a trail of links showing the user’s current page in relation to higher-level pages on a site. Without a label, it may be announced by screen reades simply as "navigation", making it hard to distinguish from other navigation regions on the page.`;
  const helpText = `Add an aria-label=Breadcrumbs attribute so screen readers can announce that to users.`;
  const fixSteps = [
  "Review the HTML structure",
  "Apply proper accessibility attributes",
  "Test with screen readers"
  ];
  const htmlExamples = [
  { filename: "breadcrumbs nav mislabeled", content: `<style>
    .breadcrumbs {
        display: flex;
        gap: 1rem;
    }
</style>

<nav class="breadcrumbs" aria-label="Navigation Stack">
  <div><a href="/">Home</a></div>
  <div><a href="/perceivable/components/breadcrumb/">Home</a></div>
  <div><a href="/perceivable/components/breadcrumb/atomic-tests/">Home</a></div>
  <div><a href="/perceivable/components/breadcrumb/atomic-tests/pass/enclosing-element-is-nav--list-items-are-divs.html">Home</a></div>
</nav>` },
  { filename: "breadcrumbs nav not labeled", content: `<style>
    .breadcrumbs {
        display: flex;
        gap: 1rem;
    }
</style>

<nav class="breadcrumbs">
  <div><a href="/">Home</a></div>
  <div><a href="/perceivable/components/breadcrumb/">Home</a></div>
  <div><a href="/perceivable/components/breadcrumb/atomic-tests/">Home</a></div>
  <div><a href="/perceivable/components/breadcrumb/atomic-tests/pass/enclosing-element-is-nav--list-items-are-divs.html">Home</a></div>
</nav>` },
  { filename: "breadcrumbs ol not labeled", content: `<style>
    .breadcrumb {
        background-color: #f5f5f5;
        padding: 8px 15px;
        margin-bottom: 20px;
        list-style: none;
        border-radius: 4px;
        display: flex;
        flex-flow: row wrap;
    }

    .breadcrumb-item {
        margin-inline: 1rem;
    }

    .breadcrumb-item:not(:last-child)::after {
        content: ">";
        margin-inline: 1rem;
    }
</style>

<ol class="breadcrumb">
  <li class="breadcrumb-item"><a href="/">Home</a></li>
  <li class="breadcrumb-item"><a href="/lib">Library</a></li>
  <li class="breadcrumb-item active" aria-current="page">Data</li>
</ol>` },
  { filename: "breadcrumbs parent not labeled", content: `<style>
    .breadcrumb {
        background-color: #f5f5f5;
        padding: 8px 15px;
        margin-bottom: 20px;
        list-style: none;
        border-radius: 4px;
        display: flex;
        flex-flow: row wrap;
    }

    .breadcrumb-item {
        margin-inline: 1rem;
    }

    .breadcrumb-item:not(:last-child)::after {
        content: ">";
        margin-inline: 1rem;
    }
</style>

<div role="navigation">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="/">Home</a></li>
    <li class="breadcrumb-item"><a href="/lib">Library</a></li>
    <li class="breadcrumb-item active" aria-current="page">Data</li>
  </ol>
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

export default BreadcrumbsMismatchFailure;
