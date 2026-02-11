import React from "react";
import EngineIssueSuccess from "../../../layout/engineIssueSuccess";

const NameProhibitedNoAriaLabelSuccess = () => {
  const ruleId = "name-prohibited-no-aria-label";
  const title = `aria-label should be used with compatible roles`;
  const description = `Using aria-label on elements that do not support the attribute can lead to the label being ignored, leaving users without the intended information.`;
  const helpText = `Use a visually hidden element to provide the name or description instead of an aria-label.`;
  const bestPractices = [
  "Follow proper HTML semantics",
  "Ensure screen reader compatibility",
  "Test with assistive technologies"
  ];
  const htmlExamples = [
  { filename: "alert", content: `<div role="alert" aria-label="alert label">This is an alert message</div>` },
  { filename: "application", content: `<div role="application" aria-label="application label">An application interface</div>` },
  { filename: "article", content: `<div role="article" aria-label="article label">An article of content</div>` },
  { filename: "banner", content: `<div role="banner" aria-label="banner label">A site banner</div>` },
  { filename: "button", content: `<div role="button" aria-label="button label">A button</div>` },
  { filename: "caption no label", content: `<div role="caption">some caption</div>` },
  { filename: "cell", content: `<div role="cell" aria-label="cell label">A table cell</div>` },
  { filename: "checkbox", content: `<div role="checkbox" aria-label="checkbox label">A checkbox</div>` },
  { filename: "code no label", content: `<div role="code">some code</div>` },
  { filename: "columnheader", content: `<div role="columnheader" aria-label="columnheader label">A column header</div>` },
  { filename: "combobox", content: `<div role="combobox" aria-label="combobox label">A combobox input</div>` },
  { filename: "dialog", content: `<div role="dialog" aria-label="dialog label">A dialog box</div>` },
  { filename: "document", content: `<div role="document" aria-label="document label">A document section</div>` },
  { filename: "feed", content: `<div role="feed" aria-label="feed label">A content feed</div>` },
  { filename: "figure", content: `<div role="figure" aria-label="figure label">A figure with caption</div>` },
  { filename: "form", content: `<div role="form" aria-label="form label">A form section</div>` },
  { filename: "mark no label", content: `<div role="mark">a marked text</div>` },
  { filename: "none no label", content: `<div role="none">no particular role</div>` },
  { filename: "term no label", content: `<div role="term">a term</div>` },
  { filename: "time no label", content: `<div role="time">a time-related text</div>` },
  { filename: "time with label hidden", content: `<div role="time" aria-label="time label" hidden>a time-related text</div>` }
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

export default NameProhibitedNoAriaLabelSuccess;
