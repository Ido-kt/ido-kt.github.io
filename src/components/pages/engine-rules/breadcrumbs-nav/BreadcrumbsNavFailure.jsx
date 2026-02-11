import React from "react";
import EngineIssueFailure from "../../../layout/engineIssueFailure";

const BreadcrumbsNavFailure = () => {
  const ruleId = "breadcrumbs-in-nav";
  const title = `Breadcrumbs navigation should be tagged properly`;
  const description = `Breadcrumb navigation regions are essential for user orientation. If not appropriately tagged, screen reader users will not know that such an option exists on the page and will face more difficulties browsing around.`;
  const helpText = `Add a role=navigation or code the breadcrumbs using the HTML NAV tag. This will indicate to screen readers that it is a navigation region. Lastly, add an aria-label=Breadcrumbs attribute so screen readers can announce that to users.`;
  const fixSteps = [
  "Review the HTML structure",
  "Apply proper accessibility attributes",
  "Test with screen readers"
  ];
  const htmlExamples = [
  { filename: "breadcrumbs not nav", content: `<style>
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
  { filename: "breadcrumbs parent div no role", content: `<style>
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

<div>
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="/">Home</a></li>
    <li class="breadcrumb-item"><a href="/lib">Library</a></li>
    <li class="breadcrumb-item active" aria-current="page">Data</li>
  </ol>
</div>` },
  { filename: "breadcrumbs parent nav role presentation", content: `<style>
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

<nav role="presentation">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="/">Home</a></li>
    <li class="breadcrumb-item"><a href="/lib">Library</a></li>
    <li class="breadcrumb-item active" aria-current="page">Data</li>
  </ol>
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

export default BreadcrumbsNavFailure;
