import React from "react";
import IssueFailure from "../../../../../layout/issueFailure";

const itemDescription = "Tables : Row Table Headers - Failure";

const RowTableHeadersFailure = () => (
  <IssueFailure
    itemContent={
      <>
        <div className="list-item" id="row-table-headers-failure-1">
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Q1</th>
                <th>Q2</th>
                <th>Q3</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>Widget A</strong>
                </td>
                <td>100</td>
                <td>120</td>
                <td>150</td>
              </tr>
              <tr>
                <td>
                  <strong>Widget B</strong>
                </td>
                <td>80</td>
                <td>90</td>
                <td>110</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="list-item" id="row-table-headers-failure-2">
          <table>
            <thead>
              <tr>
                <th>Metric</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ fontWeight: "bold" }}>Revenue</td>
                <td>$50,000</td>
              </tr>
              <tr>
                <td style={{ fontWeight: "bold" }}>Expenses</td>
                <td>$30,000</td>
              </tr>
              <tr>
                <td style={{ fontWeight: "bold" }}>Profit</td>
                <td>$20,000</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="list-item" id="row-table-headers-failure-3">
          <table>
            <thead>
              <tr>
                <th>Category</th>
                <th>Count</th>
                <th>Percentage</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <h4>Category A</h4>
                </td>
                <td>25</td>
                <td>35%</td>
              </tr>
              <tr>
                <td>
                  <h4>Category B</h4>
                </td>
                <td>30</td>
                <td>42%</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="list-item" id="row-table-headers-failure-4">
          <table>
            <thead>
              <tr>
                <th>Region</th>
                <th>Sales</th>
                <th>Returns</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="row-header">North</td>
                <td>$10,000</td>
                <td>$500</td>
              </tr>
              <tr>
                <td className="row-header">South</td>
                <td>$12,000</td>
                <td>$600</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="list-item" id="row-table-headers-failure-5">
          <div role="table">
            <div role="row">
              <div role="columnheader">Item</div>
              <div role="columnheader">Price</div>
            </div>
            <div role="row">
              <div role="cell">
                <strong>Product X</strong>
              </div>
              <div role="cell">$25.00</div>
            </div>
            <div role="row">
              <div role="cell">
                <strong>Product Y</strong>
              </div>
              <div role="cell">$30.00</div>
            </div>
          </div>
        </div>
      </>
    }
    itemDescription={itemDescription}
    helpText="Row headers that are visually styled but not properly tagged with role='rowheader' cannot be recognized by assistive technology. Screen readers need proper semantic markup to associate data cells with their row headers."
    fixSteps={[
      "Add role='rowheader' to cells that function as row headers",
      "Use TH elements with scope='row' for native HTML table row headers",
      "For custom ARIA tables, add role='rowheader' to header cells in the first column",
      "Ensure row headers are in the first column of each data row",
      "Test with screen readers to verify row headers are announced correctly"
    ]}
  />
);

export default RowTableHeadersFailure;

