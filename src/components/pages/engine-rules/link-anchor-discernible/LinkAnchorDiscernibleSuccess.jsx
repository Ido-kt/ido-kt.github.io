import React from "react";
import EngineIssueSuccess from "../../../layout/engineIssueSuccess";

const LinkAnchorDiscernibleSuccess = () => {
  const ruleId = "link-anchor-discernible";
  const title = `Anchor links discernible text`;
  const description = `Anchors links need discernible text that tells visitors where the link takes them.`;
  const helpText = `Add discernible text to the anchor`;
  const bestPractices = [
  "Follow proper HTML semantics",
  "Ensure screen reader compatibility",
  "Test with assistive technologies"
  ];
  const htmlExamples = [
  { filename: "anchor no related element", content: `<!-- Without related element it won't be audited at all-->
<a href="#sec123">=></a>` },
  { filename: "anchor svg icon labelled", content: `<style>
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }
</style>

<a id="test-subject" href="#test-subject">
  <svg style="width:100px;height:100px;" >
    <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />
  </svg>
  <span class="sr-only">Search</span>
</a>` },
  { filename: "anchor to element with discernible text", content: `<a href="#sec123">About</a>

<section>
    <h3 id="sec123">About us</h3>
    <p>Our company is a leader in the industry.</p>
</section>` },
  { filename: "hidden link no content", content: `<!-- Hidden element won't be audited at all-->
<a href="path/to/page" style="width:100px;height:100px;" hidden></a>` }
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

export default LinkAnchorDiscernibleSuccess;
