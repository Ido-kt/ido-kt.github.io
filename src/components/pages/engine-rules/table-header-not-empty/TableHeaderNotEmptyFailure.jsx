import React from "react";
import EngineIssueFailure from "../../../layout/engineIssueFailure";

const TableHeaderNotEmptyFailure = () => {
  const ruleId = "table-header-not-empty";
  const title = `Table header cells should not be empty`;
  const description = `If a table header cell is empty, screen reader users may only hear a generic label such as "column 3" or nothing at all. This makes it harder to understand what each column or row represents.`;
  const helpText = `Provide meaningful text for all table header cells, using visible or hidden labels. If a cell is not a true header, use <td> or omit the header role.`;
  const fixSteps = [
  "Review the HTML structure",
  "Apply proper accessibility attributes",
  "Test with screen readers"
  ];
  const htmlExamples = [
  { filename: "role table empty columnheaders", content: `<div role="table">
    <div role="row">
        <div role="columnheader"></div>
        <div role="columnheader"></div>
        <div role="columnheader"></div>
    </div>
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
</div>` },
  { filename: "role table empty headers with elements", content: `<div role="table">
    <div role="rowgroup">
        <div role="row">
            <div role="columnheader"><div></div></div>
            <div role="columnheader"><div></div></div>
            <div role="columnheader"><div></div></div>
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
  { filename: "role table empty headers", content: `<div role="table">
    <div role="rowgroup">
        <div role="row">
            <div role="columnheader"></div>
            <div role="columnheader"></div>
            <div role="columnheader"></div>
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
  { filename: "role table empty row headers", content: `<div role="table">
    <div role="rowgroup">
        <div role="row">
            <div role="columnheader"></div>
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
  { filename: "table empty columnheaders", content: `<table>
    <tbody>
        <tr>
            <th></th>
            <th></th>
            <th></th>
        </tr>
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
  { filename: "table empty headers with elements", content: `<table>
    <thead>
        <tr>
            <th><div></div></th>
            <th><div></div></th>
            <th><div></div></th>
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
  { filename: "table empty headers", content: `<table>
    <thead>
        <tr>
            <th>    </th>
            <th></th>
            <th></th>
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
  { filename: "table empty row headers", content: `<table>
    <tbody>
        <tr>
            <th scope="row"></th>
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

export default TableHeaderNotEmptyFailure;
