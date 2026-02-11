import React from "react";
import EngineIssueSuccess from "../../../layout/engineIssueSuccess";

const BreadcrumbsNavSuccess = () => {
  const ruleId = "breadcrumbs-in-nav";
  const title = `Breadcrumbs navigation should be tagged properly`;
  const description = `Breadcrumb navigation regions are essential for user orientation. If not appropriately tagged, screen reader users will not know that such an option exists on the page and will face more difficulties browsing around.`;
  const helpText = `Add a role=navigation or code the breadcrumbs using the HTML NAV tag. This will indicate to screen readers that it is a navigation region. Lastly, add an aria-label=Breadcrumbs attribute so screen readers can announce that to users.`;
  const bestPractices = [
  "Follow proper HTML semantics",
  "Ensure screen reader compatibility",
  "Test with assistive technologies"
  ];
  const htmlExamples = [
  { filename: "breadcrumbs nav", content: `<style>
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

<nav aria-label="Breadcrumb">
  <div class="breadcrumb">
    <span class="breadcrumb-item"><a href="/">Home</a></span>
    <span class="breadcrumb-item"><a href="/lib">Library</a></span>
    <span class="breadcrumb-item active" aria-current="page">Data</span>
  </div>
</nav>` },
  { filename: "breadcrumbs parent nav", content: `<style>
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

<nav aria-label="Breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="/">Home</a></li>
    <li class="breadcrumb-item"><a href="/lib">Library</a></li>
    <li class="breadcrumb-item active" aria-current="page">Data</li>
  </ol>
</nav>` },
  { filename: "breadcrumbs parent role nav", content: `<style>
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

<div role="navigation" aria-label="Breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="/">Home</a></li>
    <li class="breadcrumb-item"><a href="/lib">Library</a></li>
    <li class="breadcrumb-item active" aria-current="page">Data</li>
  </ol>
</div>` },
  { filename: "breadcrumbs role nav", content: `<style>
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


<div class="breadcrumb" role="navigation" aria-label="Breadcrumb">
    <span class="breadcrumb-item"><a href="/">Home</a></span>
    <span class="breadcrumb-item"><a href="/lib">Library</a></span>
    <span class="breadcrumb-item active" aria-current="page">Data</span>
</div>` },
  { filename: "div no breadcrumbs", content: `<div>
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

export default BreadcrumbsNavSuccess;
