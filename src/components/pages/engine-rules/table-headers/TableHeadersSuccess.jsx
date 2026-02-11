import React from "react";
import EngineIssueSuccess from "../../../layout/engineIssueSuccess";

const TableHeadersSuccess = () => {
  const ruleId = "table-headers";
  const title = `Tables should include table header tags`;
  const description = `Screen readers can't match columns and cells without properly coded table header tags (TH). Without table headers, screen readers won't announce the table's content properly to users, leaving them unable to consume information.`;
  const helpText = `Add a THEAD element to indicate a table heading section, and include TH elements for every column, describing the purpose of that table column.`;
  const bestPractices = [
  "Follow proper HTML semantics",
  "Ensure screen reader compatibility",
  "Test with assistive technologies"
  ];
  const htmlExamples = [
  { filename: "role table with role columnheaders", content: `<div role="table">
  <div role="row">
    <div role="columnheader">Car Model</div>
    <div role="columnheader">Price</div>
    <div role="columnheader">Speed</div>
    <div role="columnheader">Year of Release</div>
  </div>
  <div role="row">
    <div>Toyota Camry</div>
    <div>\$25,000</div>
    <div>120 mph</div>
    <div>2022</div>
  </div>
  <div role="row">
    <div>Honda Civic</div>
    <div>\$20,000</div>
    <div>110 mph</div>
    <div>2021</div>
  </div>
  <div role="row">
    <div>Ford Mustang</div>
    <div>\$35,000</div>
    <div>150 mph</div>
    <div>2022</div>
  </div>
</div>` },
  { filename: "role table with role rowheaders", content: `<div role="table">
  <div role="row">
    <div role="rowheader">Car Model</div>
    <div role="cell">Toyota Camry</div>
    <div role="cell">Honda Civic</div>
    <div role="cell">Ford Mustang</div>
  </div>
  <div role="row">
    <div role="rowheader">Price</div>
    <div role="cell">\$25,000</div>
    <div role="cell">\$20,000</div>
    <div role="cell">\$35,000</div>
  </div>
  <div role="row">
    <div role="rowheader">Speed</div>
    <div role="cell">120 mph</div>
    <div role="cell">110 mph</div>
    <div role="cell">150 mph</div>
  </div>
  <div role="row">
    <div role="rowheader">Year of Release</div>
    <div role="cell">2022</div>
    <div role="cell">2021</div>
    <div role="cell">2022</div>
  </div>
</div>` },
  { filename: "table with column headers", content: `<table>
  <tr>
    <th>Car Model</th>
    <th>Price</th>
    <th>Speed</th>
    <th>Year of Release</th>
  </tr>
  <tr>
    <td>Toyota Camry</td>
    <td>\$25,000</td>
    <td>120 mph</td>
    <td>2022</td>
  </tr>
  <tr>
    <td>Honda Civic</td>
    <td>\$20,000</td>
    <td>110 mph</td>
    <td>2021</td>
  </tr>
  <tr>
    <td>Ford Mustang</td>
    <td>\$35,000</td>
    <td>150 mph</td>
    <td>2022</td>
  </tr>
</table>` },
  { filename: "table with row headers", content: `<table>
  <tr>
    <th scope="row">Car Model</th>
    <td>Toyota Camry</td>
    <td>Honda Civic</td>
    <td>Ford Mustang</td>
  </tr>
  <tr>
    <th scope="row">Price</th>
    <td>\$25,000</td>
    <td>\$20,000</td>
    <td>\$35,000</td>
  </tr>
  <tr>
    <th scope="row">Speed</th>
    <td>120 mph</td>
    <td>110 mph</td>
    <td>150 mph</td>
  </tr>
  <tr>
    <th scope="row">Year of Release</th>
    <td>2022</td>
    <td>2021</td>
    <td>2022</td>
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

export default TableHeadersSuccess;
