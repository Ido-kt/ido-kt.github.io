import React from "react";
import EngineIssueFailure from "../../../layout/engineIssueFailure";

const TableRowHeaderFailure = () => {
  const ruleId = "table-row-header";
  const title = `Table row headers should be tagged for assistive technology`;
  const description = `If a table row header is not marked up with the correct role or scope, screen reader users cannot determine which header applies to each cell.`;
  const helpText = `Use <th scope="row"> or assign role="rowheader" when building custom tables. Make sure each data cell is programmatically associated with the correct header so relationships are clear to assistive technology.`;
  const fixSteps = [
  "Review the HTML structure",
  "Apply proper accessibility attributes",
  "Test with screen readers"
  ];
  const htmlExamples = [
  { filename: "table roles styled row headers with role cell", content: `<style>
  .test-subject {
    background-color: aqua;
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
    <div role="cell" class="test-subject">Row 1</div>
    <div role="cell">Row 1, Cell 1</div>
  </div>
  <div role="row">
    <div role="cell" class="test-subject">Row 2</div>
    <div role="cell">Row 2, Cell 1</div>
  </div>
  <div role="row">
    <div role="cell" class="test-subject">Row 3</div>
    <div role="cell">Row 3, Cell 1</div>
  </div>
</div>` },
  { filename: "table styled row headers tagged as td in tbody", content: `<style>
  .test-subject {
    font-weight: bold;
  }

   td, th {
     border: 1px solid black;
     width: 100px;
   }
</style>
<table>
  <tbody>
    <tr>
      <td class="test-subject">Row 1</td>
      <td>Row 1, Cell 1</td>
    </tr>
    <tr>
      <td class="test-subject">Row 2</td>
      <td>Row 2, Cell 1</td>
    </tr>
    <tr>
      <td class="test-subject">Row 3</td>
      <td>Row 3, Cell 1</td>
    </tr>
  </tbody>
</table>` },
  { filename: "table styled row headers tagged as td no tbody", content: `<style>
  td, th {
    border: 1px solid black;
    width: 100px;
  }

  .test-subject {
    font-weight: bold;
  }
</style>
<table>
  <tr>
    <td class="test-subject">Row 1</td>
    <td>Row 1, Cell 1</td>
  </tr>
  <tr>
    <td class="test-subject">Row 2</td>
    <td>Row 2, Cell 1</td>
  </tr>
  <tr>
    <td class="test-subject">Row 3</td>
    <td>Row 3, Cell 1</td>
  </tr>
</table>` }
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

export default TableRowHeaderFailure;
