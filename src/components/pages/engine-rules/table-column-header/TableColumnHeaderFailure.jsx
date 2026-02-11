import React from "react";
import EngineIssueFailure from "../../../layout/engineIssueFailure";

const TableColumnHeaderFailure = () => {
  const ruleId = "table-column-header";
  const title = `Table column headers should be tagged for assistive technology`;
  const description = `If a column header is not marked up with the correct role or scope, screen reader users cannot determine which header applies to each cell.`;
  const helpText = `Use <th scope="col"> or assign role="columnheader" when building custom tables. Make sure each data cell is programmatically associated with the correct header so relationships are clear to assistive technology.`;
  const fixSteps = [
  "Review the HTML structure",
  "Apply proper accessibility attributes",
  "Test with screen readers"
  ];
  const htmlExamples = [
  { filename: "table native tds styled as headers no thead or tbody", content: `<style>
  .test-subject {
    font-weight: bold;
  }
</style>
<table>
  <tr>
    <td class="test-subject">
      <span>First Name</span>
    </td>
    <td class="test-subject">
      <span>Last Name</span>
    </td>
    <td class="test-subject">
      <span>Company Name</span>
    </td>
    <td class="test-subject">
      <span>Job Title</span>
    </td>
  </tr>
  <tr>
    <td>John</td>
    <td>Doe</td>
    <td>Google</td>
    <td>Sales</td>
  </tr>
</table>` },
  { filename: "table native tds styled as headers with thead", content: `<style>
  .test-subject {
    font-weight: bold;
  }
</style>
<table>
  <thead>
    <tr>
      <td class="test-subject">
        <span>First Name</span>
      </td>
      <td class="test-subject">
        <span>Last Name</span>
      </td>
      <td class="test-subject">
        <span>Company Name</span>
      </td>
      <td class="test-subject">
        <span>Job Title</span>
      </td>
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
  { filename: "table roles cell role styled as headers", content: `<style>
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
<div role="table">
  <div role="row">
    <div role="cell" class="test-subject">Header 1</div>
    <div role="cell" class="test-subject">Header 2</div>
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

export default TableColumnHeaderFailure;
