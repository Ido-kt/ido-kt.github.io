import React from "react";
import EngineIssueSuccess from "../../../layout/engineIssueSuccess";

const TableRowHeaderSuccess = () => {
  const ruleId = "table-row-header";
  const title = `Table row headers should be tagged for assistive technology`;
  const description = `If a table row header is not marked up with the correct role or scope, screen reader users cannot determine which header applies to each cell.`;
  const helpText = `Use <th scope="row"> or assign role="rowheader" when building custom tables. Make sure each data cell is programmatically associated with the correct header so relationships are clear to assistive technology.`;
  const bestPractices = [
  "Follow proper HTML semantics",
  "Ensure screen reader compatibility",
  "Test with assistive technologies"
  ];
  const htmlExamples = [
  { filename: "table role with correct roles", content: `<style>
  [role=table] {
    display: table;
  }

  [role=row] {
    display: table-row;
  }

  [role=row] > * {
    display: table-cell;
    border: 1px solid black;
    width: 100px;
  }
</style>
<div role="table">
  <div role="row">
    <div role="rowheader" class="test-subject">Row 1</div>
    <div role="cell">Row 1, Cell 1</div>
  </div>
  <div role="row">
    <div role="rowheader" class="test-subject">Row 2</div>
    <div role="cell">Row 2, Cell 1</div>
  </div>
  <div role="row">
    <div role="rowheader" class="test-subject">Row 3</div>
    <div role="cell">Row 3, Cell 1</div>
  </div>
</div>` },
  { filename: "table row headers with correct tagging multiple tables", content: `<style>
  td, th {
    border: 1px solid black;
    width: 100px;
  }
</style>

<table>
  <tr>
    <th class="test-subject">Row 1</th>
    <td>Row 1, Cell 1</td>
  </tr>
  <tr>
    <th class="test-subject">Row 2</th>
    <td>Row 2, Cell 1</td>
  </tr>
</table>
<table>
  <tr>
    <th class="test-subject">Row 1</th>
    <td>Row 1, Cell 1</td>
  </tr>
  <tr>
    <th class="test-subject">Row 2</th>
    <td>Row 2, Cell 1</td>
  </tr>
</table>` },
  { filename: "table row headers with correct tagging", content: `<style>
  td, th {
    border: 1px solid black;
    width: 100px;
  }
</style>

<table>
  <tr>
    <th class="test-subject">Row 1</th>
    <td>Row 1, Cell 1</td>
  </tr>
  <tr>
    <th class="test-subject">Row 2</th>
    <td>Row 2, Cell 1</td>
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

export default TableRowHeaderSuccess;
