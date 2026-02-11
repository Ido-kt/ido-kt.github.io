import React from "react";
import EngineIssueFailure from "../../../layout/engineIssueFailure";

const HeadingOrderOptimalFailure = () => {
  const ruleId = "heading-order-optimal";
  const title = `Heading levels should reflect the structure of the content`;
  const description = `Incorrect heading hierarchy can create a misleading page outline, disrupt navigation by heading shortcuts, and cause confusion about the structure and importance of content. Using the correct heading level preserves a logical structure, allowing users to understand how sections relate to each other.`;
  const helpText = `Heading levels should reflect how each section relates to the main topic. Use <h1> for the overall subject,<h2> for major sections, and deeper levels, such as <h3> and <h4>, for subsections.`;
  const fixSteps = [
  "Review the HTML structure",
  "Apply proper accessibility attributes",
  "Test with screen readers"
  ];
  const htmlExamples = [
  { filename: "aria level 1 3", content: `<style>
    [aria-level="1"] {
        font-size: 2em;
        font-weight: bold;
    }
    [aria-level="3"] {
        font-size: 1.5em;
        font-weight: bold;
    }
</style>

<br>
<br>
<br>
<br>

<div role="heading" aria-level="1">Heading 1</div>
<div role="heading" aria-level="3">Heading 3</div>` },
  { filename: "h1 div h3", content: `<style>
  .heading-2 {
    font-size: 1.5em;
    font-weight: bold;
  }
</style>

<br>
<br>
<br>

<h1>Heading 1</h1>
<div class="heading-2">Heading 2</div>
<h3>Heading 3</h3>` },
  { filename: "h1 h3", content: `<br>
<br>
<br>

<h1>Heading 1</h1>
<h3>Heading 3</h3>` }
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

export default HeadingOrderOptimalFailure;
