import React from "react";
import EngineIssueSuccess from "../../../layout/engineIssueSuccess";

const ListItemWithinListSuccess = () => {
  const ruleId = "list-item-within-list";
  const title = `List items should not exist outside of a list element`;
  const description = `When list items are not contained in a list element, screen readers will not announce them as list items, preventing users from understanding the content as part of a structured list.`;
  const helpText = `Enclose the list items in an <ol>, <ul>, or an element with role="list".`;
  const bestPractices = [
  "Follow proper HTML semantics",
  "Ensure screen reader compatibility",
  "Test with assistive technologies"
  ];
  const htmlExamples = [
  { filename: "ol with list item", content: `<html>
  <head> </head>
  <body>
    <ol>
      <li>Coffee</li>
    </ol>
  </body>
</html>` },
  { filename: "role list with list item", content: `<html>
  <head> </head>
  <body>
    <div role="list">
      <div role="listitem">Milk</div>
    </div>
  </body>
</html>` },
  { filename: "ul with list item", content: `<html>
  <head> </head>
  <body>
    <ul>
      <li>Milk</li>
    </ul>
  </body>
</html>` }
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

export default ListItemWithinListSuccess;
