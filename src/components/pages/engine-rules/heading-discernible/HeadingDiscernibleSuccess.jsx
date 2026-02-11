import React from "react";
import EngineIssueSuccess from "../../../layout/engineIssueSuccess";

const HeadingDiscernibleSuccess = () => {
  const ruleId = "heading-discernible";
  const title = `Headings should not be empty`;
  const description = `Empty heading elements break the document outline, making navigation by headings less effective for screen reader users and causing confusion due to the disrupted page hierarchy.`;
  const helpText = `Remove empty HTML heading elements or assign aria-hidden="true" to make sure that they are ignored by screen readers.`;
  const bestPractices = [
  "Follow proper HTML semantics",
  "Ensure screen reader compatibility",
  "Test with assistive technologies"
  ];
  const htmlExamples = [
  { filename: "heading with complex content", content: `<h2 data-heading-level="manual" class="sc-dmyCSP fhJXZs sc-fYrVWQ kOOKzb">
  <button type="button" aria-controls="radix-:r4:" aria-expanded="false" data-state="closed" class="sc-GkLId ixespc">
    <span>Add alt text to inserted email images</span>
    <div class="sc-iBdnpw hjoFUu">
      <i role="presentation" aria-hidden="true" class="sc-hABBmJ bHDvnc"
        ><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m20 8-8 8-8-8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg
      ></i>
    </div>
  </button>
</h2>` },
  { filename: "heading with content", content: `<h1>Some text content</h1>` },
  { filename: "heading with img as content and aria label on nested img", content: `<h1><img src="path/to/image" aria-label="describe the button" /></h1>` },
  { filename: "heading with img as content and aria label", content: `<h1 aria-label="describe the button"><img src="path/to/image" /></h1>` },
  { filename: "heading with labelled alt img", content: `<h1 id="test-subject"><img src="image.png" alt="Image description">1</h1>` },
  { filename: "heading with labelled svg", content: `<h3><svg aria-label="SVG Heading alt text"></svg></h3>` },
  { filename: "role heading with content  no aria level", content: `<div role="heading">Accessible Heading</div>` },
  { filename: "role heading with content", content: `<div role="heading" aria-level="1">Some text content</div>` }
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

export default HeadingDiscernibleSuccess;
