import React from "react";
import EngineIssueSuccess from "../../../layout/engineIssueSuccess";

const LinkNavigationDiscernibleSuccess = () => {
  const ruleId = "link-navigation-discernible";
  const title = `Link navigation discernible text`;
  const description = `Links need discernible text that tells visitors where the link takes them.`;
  const helpText = `Add discernible text to the button`;
  const bestPractices = [
  "Follow proper HTML semantics",
  "Ensure screen reader compatibility",
  "Test with assistive technologies"
  ];
  const htmlExamples = [
  { filename: "hidden link no content", content: `<a href="path/to/page" style="width: 100px; height: 100px" hidden></a>` },
  { filename: "link no content with aria label", content: `<!-- Issue with @acsbe/classifier detection -->
<a href="path/to/page" style="width: 100px; height: 100px" aria-label="describe the button"></a>` },
  { filename: "link svg icon labelled", content: `<style>
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

<a id="test-subject" href="/search">
  <svg style="width:100px;height:100px;" >
    <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />
  </svg>
  <span class="sr-only">Search</span>
</a>` },
  { filename: "link with content", content: `<a href="path/to/page">Some text content</a>` },
  { filename: "link with desernable content and aria label", content: `<a target="_blank" aria-label="Home" class="btn-new silent compensate-left e16fm13v0 e1of9yu15 css-6x6bk e1figufi0" href="/home"><span class="silent css-17qgsod e1of9yu11">Home</span></a>` },
  { filename: "link wtih image content and aria label", content: `<a href="path/to/page" aria-label="describe the button"><img src="path/to/graphic/cotnent" /></a>` }
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

export default LinkNavigationDiscernibleSuccess;
