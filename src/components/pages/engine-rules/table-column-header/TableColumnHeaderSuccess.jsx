import React from "react";
import EngineIssueSuccess from "../../../layout/engineIssueSuccess";

const TableColumnHeaderSuccess = () => {
  const ruleId = "table-column-header";
  const title = `Table column headers should be tagged for assistive technology`;
  const description = `If a column header is not marked up with the correct role or scope, screen reader users cannot determine which header applies to each cell.`;
  const helpText = `Use <th scope="col"> or assign role="columnheader" when building custom tables. Make sure each data cell is programmatically associated with the correct header so relationships are clear to assistive technology.`;
  const bestPractices = [
  "Follow proper HTML semantics",
  "Ensure screen reader compatibility",
  "Test with assistive technologies"
  ];
  const htmlExamples = [
  { filename: "table headers native th", content: `<table>
  <thead>
    <tr role="row">
      <th class="test-subject">
        <span>First Name</span>
      </th>
      <th class="test-subject">
        <span>Last Name</span>
      </th>
      <th class="test-subject">
        <span>Company Name</span>
      </th>
      <th class="test-subject">
        <span>Job Title</span>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>John</td>
      <td>Doe</td>
      <td>Google</td>
      <td>Sales</td>
    </tr>
  </tbody>
</table>` },
  { filename: "table roles headers with role column header", content: `<style>
  .test-subject {
    font-weight: bold;
  }
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
</style>
<div role="table">
  <div role="row">
    <div role="columnheader" class="test-subject">Header 1</div>
    <div role="columnheader" class="test-subject">Header 2</div>
  </div>
  <div role="row">
    <div role="cell">Row 1, Cell 1</div>
    <div role="cell">Row 1, Cell 2</div>
  </div>
  <div role="row">
    <div role="cell">Row 2, Cell 1</div>
    <div role="cell">Row 2, Cell 2</div>
  </div>
</div>` }
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

export default TableColumnHeaderSuccess;
