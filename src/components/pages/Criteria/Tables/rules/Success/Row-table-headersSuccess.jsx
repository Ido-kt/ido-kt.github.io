import React from "react";
import IssueSuccess from "../../../../../layout/issueSuccess";

const itemDescription = "Tables : Row Table Headers - Success";

const RowTableHeadersSuccess = () => (
  <IssueSuccess
    itemContent={
      <>
        <div className="list-item" id="row-table-headers-success-1">
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
                <th scope="row">Widget A</th>
                <td>100</td>
                <td>120</td>
                <td>150</td>
              </tr>
              <tr>
                <th scope="row">Widget B</th>
                <td>80</td>
                <td>90</td>
                <td>110</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="list-item" id="row-table-headers-success-2">
          <table>
            <thead>
              <tr>
                <th>Metric</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Revenue</th>
                <td>$50,000</td>
              </tr>
              <tr>
                <th scope="row">Expenses</th>
                <td>$30,000</td>
              </tr>
              <tr>
                <th scope="row">Profit</th>
                <td>$20,000</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="list-item" id="row-table-headers-success-3">
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
                <th scope="row">Category A</th>
                <td>25</td>
                <td>35%</td>
              </tr>
              <tr>
                <th scope="row">Category B</th>
                <td>30</td>
                <td>42%</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="list-item" id="row-table-headers-success-4">
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
                <th scope="row">North</th>
                <td>$10,000</td>
                <td>$500</td>
              </tr>
              <tr>
                <th scope="row">South</th>
                <td>$12,000</td>
                <td>$600</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="list-item" id="row-table-headers-success-5">
          <div role="table">
            <div role="row">
              <div role="columnheader">Item</div>
              <div role="columnheader">Price</div>
            </div>
            <div role="row">
              <div role="rowheader">Product X</div>
              <div role="cell">$25.00</div>
            </div>
            <div role="row">
              <div role="rowheader">Product Y</div>
              <div role="cell">$30.00</div>
            </div>
          </div>
        </div>
        <div className="list-item" id="row-table-headers-success-6">
          <table>
            <thead>
              <tr>
                <th>Department</th>
                <th>Budget</th>
                <th>Actual</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Marketing</th>
                <td>$50,000</td>
                <td>$48,000</td>
              </tr>
              <tr>
                <th scope="row">Sales</th>
                <td>$75,000</td>
                <td>$72,000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    }
    itemDescription={itemDescription}
    helpText="Properly tagged row headers using TH elements with scope='row' or role='rowheader' allow screen readers to associate data cells with their row headers, making table content accessible when rows have identifying headers."
    bestPractices={[
      "Use TH elements with scope='row' for native HTML table row headers",
      "Place row headers in the first column of each data row",
      "For custom ARIA tables, use role='rowheader' on header cells",
      "Ensure row headers clearly identify each row",
      "Test with screen readers to verify row headers are announced with data cells"
    ]}
  />
);

export default RowTableHeadersSuccess;

