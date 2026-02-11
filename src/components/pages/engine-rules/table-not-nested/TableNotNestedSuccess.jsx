import React from "react";
import EngineIssueSuccess from "../../../layout/engineIssueSuccess";

const TableNotNestedSuccess = () => {
  const ruleId = "table-not-nested";
  const title = `Tables should not be nested`;
  const description = `Nested tables are often misinterpreted by screen readers, making it hard for users to follow the intended structure and meaning of the data.`;
  const helpText = `Avoid nesting tables. Use separate tables with clear headings, and if tables are used for layout, assign  role="presentation" or role="none" to each table element.`;
  const bestPractices = [
  "Follow proper HTML semantics",
  "Ensure screen reader compatibility",
  "Test with assistive technologies"
  ];
  const htmlExamples = [
  { filename: "table not nested multi", content: `<table>
  <th>Countries</th>
  <tr>
    <td>Finland</td>
    <td>Brazil</td>
    <td>Japan</td>
    <td>Korea</td>
  </tr>
</table>

<table>
  <th>Cities</th>
  <tr>
    <td>Bat Yam</td>
    <td>Cairo</td>
    <td>Beirut</td>
    <td>Shanghai</td>
  </tr>
</table>` },
  { filename: "table not nested", content: `<table>
  <th>Countries</th>
  <tr>
    <td>Finland</td>
    <td>Jerusalem</td>
    <td>Beirut</td>
    <td>Shanghai</td>
  </tr>
</table>` }
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

export default TableNotNestedSuccess;
