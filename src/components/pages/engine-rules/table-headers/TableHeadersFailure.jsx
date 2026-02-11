import React from "react";
import EngineIssueFailure from "../../../layout/engineIssueFailure";

const TableHeadersFailure = () => {
  const ruleId = "table-headers";
  const title = `Tables should include table header tags`;
  const description = `Screen readers can't match columns and cells without properly coded table header tags (TH). Without table headers, screen readers won't announce the table's content properly to users, leaving them unable to consume information.`;
  const helpText = `Add a THEAD element to indicate a table heading section, and include TH elements for every column, describing the purpose of that table column.`;
  const fixSteps = [
  "Review the HTML structure",
  "Apply proper accessibility attributes",
  "Test with screen readers"
  ];
  const htmlExamples = [
  { filename: "multi role table without headers", content: `<div id="test-subject1" role="table">
    <div role="rowgroup">
        <div role="row">
            <div role="cell">Toyota Camry</div>
            <div role="cell">\$25,000</div>
            <div role="cell">120 mph</div>
            <div role="cell">2022</div>
        </div>
        <div role="row">
            <div role="cell">Honda Civic</div>
            <div role="cell">\$20,000</div>
            <div role="cell">110 mph</div>
            <div role="cell">2021</div>
        </div>
        <div role="row">
            <div role="cell">Ford Mustang</div>
            <div role="cell">\$35,000</div>
            <div role="cell">150 mph</div>
            <div role="cell">2022</div>
        </div>
    </div>
</div>
<div id="test-subject2" role="table">
    <div role="rowgroup">
        <div role="row">
            <div role="cell">Toyota Camry</div>
            <div role="cell">\$25,000</div>
            <div role="cell">120 mph</div>
            <div role="cell">2022</div>
        </div>
        <div role="row">
            <div role="cell">Honda Civic</div>
            <div role="cell">\$20,000</div>
            <div role="cell">110 mph</div>
            <div role="cell">2021</div>
        </div>
        <div role="row">
            <div role="cell">Ford Mustang</div>
            <div role="cell">\$35,000</div>
            <div role="cell">150 mph</div>
            <div role="cell">2022</div>
        </div>
    </div>
</div>` },
  { filename: "multi table without th", content: `<table>
    <thead>
        <tr>
            <td>Car Model</td>
            <td>Price</td>
            <td>Speed</td>
            <td>Year of Release</td>
        </tr>
    </thead>
    <tbody>
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
    </tbody>
</table>

<table>
    <thead>
    <tr>
        <td>Car Model</td>
        <td>Price</td>
        <td>Speed</td>
        <td>Year of Release</td>
    </tr>
    </thead>
    <tbody>
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
    </tbody>
</table>` },
  { filename: "role table without headers", content: `<div id="test-subject" role="table">
    <div role="rowgroup">
        <div role="row">
            <div role="cell">Toyota Camry</div>
            <div role="cell">\$25,000</div>
            <div role="cell">120 mph</div>
            <div role="cell">2022</div>
        </div>
        <div role="row">
            <div role="cell">Honda Civic</div>
            <div role="cell">\$20,000</div>
            <div role="cell">110 mph</div>
            <div role="cell">2021</div>
        </div>
        <div role="row">
            <div role="cell">Ford Mustang</div>
            <div role="cell">\$35,000</div>
            <div role="cell">150 mph</div>
            <div role="cell">2022</div>
        </div>
    </div>
</div>` },
  { filename: "role tables with and without headers", content: `<div id="test-subject" role="table">
  <div role="rowgroup">
    <div role="row">
      <div role="cell">Toyota Camry</div>
      <div role="cell">\$25,000</div>
      <div role="cell">120 mph</div>
      <div role="cell">2022</div>
    </div>
    <div role="row">
      <div role="cell">Honda Civic</div>
      <div role="cell">\$20,000</div>
      <div role="cell">110 mph</div>
      <div role="cell">2021</div>
    </div>
    <div role="row">
      <div role="cell">Ford Mustang</div>
      <div role="cell">\$35,000</div>
      <div role="cell">150 mph</div>
      <div role="cell">2022</div>
    </div>
  </div>
</div>
<div class="with-headers" role="table">
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
  { filename: "table and role table without headers", content: `<table id="test-subject1">
    <thead>
    <tr>
        <td>Car Model</td>
        <td>Price</td>
        <td>Speed</td>
        <td>Year of Release</td>
    </tr>
    </thead>
    <tbody>
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
    </tbody>
</table>
<div id="test-subject2" role="table">
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
  { filename: "table without th", content: `<table>
    <thead>
        <tr>
            <td>Car Model</td>
            <td>Price</td>
            <td>Speed</td>
            <td>Year of Release</td>
        </tr>
    </thead>
    <tbody>
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
    </tbody>
</table>` },
  { filename: "tables with and without th", content: `<table class="with-th">
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
</table>
<table class="without-th">
  <thead>
    <tr>
      <td>Car Model</td>
      <td>Price</td>
      <td>Speed</td>
      <td>Year of Release</td>
    </tr>
  </thead>
  <tbody>
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

export default TableHeadersFailure;
