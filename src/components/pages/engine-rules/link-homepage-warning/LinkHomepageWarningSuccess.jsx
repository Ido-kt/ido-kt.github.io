import React from "react";
import EngineIssueSuccess from "../../../layout/engineIssueSuccess";

const LinkHomepageWarningSuccess = () => {
  const ruleId = "link-homepage-warning";
  const title = `Links that redirect to the homepage shouldn't do so without warning the user`;
  const description = `Standalone redirection links to the homepage can unexpectedly shift the user's context by redirecting them to the homepage. They should therefore display a clear warning so that the user is informed before proceeding`;
  const helpText = `Include a clear warning that will be visible for screen-readers, indicating that clicking the link will redirect the user to the homepage`;
  const bestPractices = [
  "Follow proper HTML semantics",
  "Ensure screen reader compatibility",
  "Test with assistive technologies"
  ];
  const htmlExamples = [
  { filename: "coralogix schedule demo link", content: `<a class="button-solid-reversed" href="#marketoModalForm-demo">Schedule Demo</a>` },
  { filename: "link homepage acsb sr element", content: `<a href="/" id="homepage-link">
  Redirect to home page
  <span data-acsb-sr-only="true" class="acsb-sr-only" style="position: absolute !important; width: 1px !important; height: 1px !important; padding: 0px !important; overflow: hidden !important; clip: rect(0px, 0px, 0px, 0px) !important; border: 0px !important"> | Redirecting user</span>
</a>` },
  { filename: "link homepage full base url end with slash", content: `<p>
  <a href="http://127.0.0.1:9000/" id="homepage-link" aria-describedby="homepage-desc">Homepage</a>
</p>
<p id="homepage-desc">Redirecting to the homepage</p>` },
  { filename: "link homepage full base url", content: `<p>
  <a href="http://127.0.0.1:9000" id="homepage-link" aria-describedby="homepage-desc">Homepage</a>
</p>
<p id="homepage-desc">Redirecting to the homepage</p>` },
  { filename: "link homepage sr element", content: `<style>
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }
</style>
<p>
  <a href="/" id="homepage-link"
    >Homepage
    <span id="homepage-desc" class="sr-only">Redirect to homepage</span>
  </a>
</p>` },
  { filename: "link homepage with aria describedby", content: `<p>
  <a href="/" id="homepage-link" aria-describedby="homepage-desc">Homepage</a>
</p>
<p id="homepage-desc">Redirecting to the homepage</p>` },
  { filename: "link homepage with aria label", content: `<p>
  <a href="/" aria-label="Redirecting the user to the homepage">Home</a>
</p>` },
  { filename: "link homepage with aria labelledby", content: `<style>
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }
</style>
<p>
  <a href="/" id="homepage-link" aria-labelledby="homepage-desc">homepage</a>
  <span id="homepage-desc" class="sr-only">home page</span>
</p>` },
  { filename: "no link to homepage", content: `<p>
  <a href="/cats" id="homepage-link" aria-describedby="homepage-desc">Homepage</a>
</p>
<p id="homepage-desc">Redirecting to the homepage</p>` }
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

export default LinkHomepageWarningSuccess;
