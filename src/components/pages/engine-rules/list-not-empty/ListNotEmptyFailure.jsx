import React from "react";
import EngineIssueFailure from "../../../layout/engineIssueFailure";

const ListNotEmptyFailure = () => {
  const ruleId = "list-not-empty";
  const title = `Lists should contain at least one list item`;
  const description = `An empty list will still be announced by screen readers, which may confuse users, leaving them unsure if the list is empty or an issue prevents the screen reader from announcing the list items.`;
  const helpText = `Remove the empty HTML list elements (<ul>/<ol>) or assign aria-hidden="true" to make sure they are ignored by screen readers.`;
  const fixSteps = [
  "Review the HTML structure",
  "Apply proper accessibility attributes",
  "Test with screen readers"
  ];
  const htmlExamples = [
  { filename: "empty lists", content: `<html>
  <head> </head>
  <body>
    <ol></ol>
    <ul></ul>
  </body>
</html>` },
  { filename: "list with invisible items", content: `<html>
  <head> </head>
  <body>
    <ol>
      <li style="display: none">Milk</li>
    </ol>
    <ul>
      <li style="visibility: hidden">Coffee</li>
    </ul>
  </body>
</html>` },
  { filename: "role list without list items", content: `<html>
  <head> </head>
  <body>
  <div role="list">
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

export default ListNotEmptyFailure;
