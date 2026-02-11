import React from "react";
import EngineIssueFailure from "../../../layout/engineIssueFailure";

const ListItemWithinListFailure = () => {
  const ruleId = "list-item-within-list";
  const title = `List items should not exist outside of a list element`;
  const description = `When list items are not contained in a list element, screen readers will not announce them as list items, preventing users from understanding the content as part of a structured list.`;
  const helpText = `Enclose the list items in an <ol>, <ul>, or an element with role="list".`;
  const fixSteps = [
  "Review the HTML structure",
  "Apply proper accessibility attributes",
  "Test with screen readers"
  ];
  const htmlExamples = [
  { filename: "li outside list parent", content: `<html>
  <head> </head>
  <body>
    <div>
      <li class="orphaned">item #1</li>
    </div>
  </body>
</html>` },
  { filename: "role listitem outside list", content: `<html>
  <head> </head>
  <body>
    <div>
      <div role="listitem" class="orphaned">item #1</li>
    </div>
  </body>
</html>` }
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

export default ListItemWithinListFailure;
