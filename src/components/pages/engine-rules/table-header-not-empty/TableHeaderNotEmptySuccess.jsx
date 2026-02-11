import React from "react";
import EngineIssueSuccess from "../../../layout/engineIssueSuccess";

const TableHeaderNotEmptySuccess = () => {
  const ruleId = "table-header-not-empty";
  const title = `Table header cells should not be empty`;
  const description = `If a table header cell is empty, screen reader users may only hear a generic label such as "column 3" or nothing at all. This makes it harder to understand what each column or row represents.`;
  const helpText = `Provide meaningful text for all table header cells, using visible or hidden labels. If a cell is not a true header, use <td> or omit the header role.`;
  const bestPractices = [
  "Follow proper HTML semantics",
  "Ensure screen reader compatibility",
  "Test with assistive technologies"
  ];
  const htmlExamples = [
  { filename: "remediated table", content: `<table>
  <thead>
    <tr>
      <th role="presentation"></th>
      <th role="presentation"></th>
      <th role="presentation"></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Row 1, Column 1</td>
      <td>Row 1, Column 2</td>
      <td>Row 1, Column 3</td>
    </tr>
    <tr>
      <td>Row 2, Column 1</td>
      <td>Row 2, Column 2</td>
      <td>Row 2, Column 3</td>
    </tr>
  </tbody>
</table>` },
  { filename: "role table headers with elements", content: `<div role="table">
  <div role="rowgroup">
    <div role="row">
      <div role="columnheader"><div>Header1</div></div>
      <div role="columnheader"><div>Header2</div></div>
      <div role="columnheader"><div>Header3</div></div>
    </div>
  </div>
  <div role="rowgroup">
    <div role="row">
      <div role="cell">Row 1, Column 1</div>
      <div role="cell">Row 1, Column 2</div>
      <div role="cell">Row 1, Column 3</div>
    </div>
    <div role="row">
      <div role="cell">Row 2, Column 1</div>
      <div role="cell">Row 2, Column 2</div>
      <div role="cell">Row 2, Column 3</div>
    </div>
  </div>
</div>` },
  { filename: "role table with headers", content: `<div role="table">
  <div role="rowgroup">
    <div role="row">
      <div role="columnheader">Header 1</div>
      <div role="columnheader">Header 2</div>
      <div role="columnheader">Header 3</div>
    </div>
  </div>
  <div role="rowgroup">
    <div role="row">
      <div role="cell">Row 1, Column 1</div>
      <div role="cell">Row 1, Column 2</div>
      <div role="cell">Row 1, Column 3</div>
    </div>
    <div role="row">
      <div role="cell">Row 2, Column 1</div>
      <div role="cell">Row 2, Column 2</div>
      <div role="cell">Row 2, Column 3</div>
    </div>
  </div>
</div>` },
  { filename: "role table without headers", content: `<div role="table">
    <div role="rowgroup">
        <div role="row">
            <div role="cell">Row 1, Column 1</div>
            <div role="cell">Row 1, Column 2</div>
            <div role="cell">Row 1, Column 3</div>
        </div>
        <div role="row">
            <div role="cell">Row 2, Column 1</div>
            <div role="cell">Row 2, Column 2</div>
            <div role="cell">Row 2, Column 3</div>
        </div>
    </div>
</div>` },
  { filename: "table col headers and empty cells", content: `<table>
  <thead>
    <tr>
      <th>Header 1</th>
      <th>Header 2</th>
      <th>Header 3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td></td>
      <td></td>
      <td>Row 1, Column 3</td>
    </tr>
    <tr>
      <td></td>
      <td></td>
      <td>Row 2, Column 3</td>
    </tr>
  </tbody>
</table>` },
  { filename: "table headers with elements", content: `<table>
  <thead>
    <tr>
      <th><div>Header1</div></th>
      <th><div>Header2</div></th>
      <th><div>Header3</div></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Row 1, Column 1</td>
      <td>Row 1, Column 2</td>
      <td>Row 1, Column 3</td>
    </tr>
    <tr>
      <td>Row 2, Column 1</td>
      <td>Row 2, Column 2</td>
      <td>Row 2, Column 3</td>
    </tr>
  </tbody>
</table>` },
  { filename: "table row headers and empty cell", content: `<table>
  <tbody>
    <tr>
      <th scope="row">header</th>
      <td></td>
      <td>Row 1, Column 2</td>
      <td>Row 1, Column 3</td>
    </tr>
    <tr>
      <td>Row 2, Column 1</td>
      <td>Row 2, Column 2</td>
      <td>Row 2, Column 3</td>
    </tr>
  </tbody>
</table>` },
  { filename: "table with headers", content: `<table>
  <thead>
    <tr>
      <th>Header 1</th>
      <th>Header 2</th>
      <th>Header 3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Row 1, Column 1</td>
      <td>Row 1, Column 2</td>
      <td>Row 1, Column 3</td>
    </tr>
    <tr>
      <td>Row 2, Column 1</td>
      <td>Row 2, Column 2</td>
      <td>Row 2, Column 3</td>
    </tr>
  </tbody>
</table>` },
  { filename: "table without headers", content: `<table>
  <tbody>
    <tr>
      <td>Row 1, Column 1</td>
      <td>Row 1, Column 2</td>
      <td>Row 1, Column 3</td>
    </tr>
    <tr>
      <td>Row 2, Column 1</td>
      <td>Row 2, Column 2</td>
      <td>Row 2, Column 3</td>
    </tr>
  </tbody>
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

export default TableHeaderNotEmptySuccess;
