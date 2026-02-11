import React from "react";
import IssueSuccess from "../../../../../layout/issueSuccess";

const itemDescription = "Tables : Headless Tables - Success";

const HeadlessTablesSuccess = () => (
  <IssueSuccess
    itemContent={
      <>
        <div className="list-item" id="headless-tables-success-1">
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Product A</td>
                <td>$10.00</td>
                <td>In Stock</td>
              </tr>
              <tr>
                <td>Product B</td>
                <td>$15.00</td>
                <td>Out of Stock</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="list-item" id="headless-tables-success-2">
          <table>
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Position</th>
                <th scope="col">Department</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>John Doe</td>
                <td>Manager</td>
                <td>HR Department</td>
              </tr>
              <tr>
                <td>Jane Smith</td>
                <td>Developer</td>
                <td>IT Department</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="list-item" id="headless-tables-success-3">
          <table>
            <thead>
              <tr>
                <th>Month</th>
                <th>Budget</th>
                <th>Spent</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>January</td>
                <td>$5,000</td>
                <td>$4,500</td>
              </tr>
              <tr>
                <td>February</td>
                <td>$6,000</td>
                <td>$5,800</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="list-item" id="headless-tables-success-4">
          <div role="table">
            <div role="row">
              <div role="columnheader">Item</div>
              <div role="columnheader">Quantity</div>
              <div role="columnheader">Price</div>
            </div>
            <div role="row">
              <div role="cell">Item 1</div>
              <div role="cell">Quantity: 5</div>
              <div role="cell">Price: $25</div>
            </div>
            <div role="row">
              <div role="cell">Item 2</div>
              <div role="cell">Quantity: 3</div>
              <div role="cell">Price: $15</div>
            </div>
          </div>
        </div>
        <div className="list-item" id="headless-tables-success-5">
          <table>
            <thead>
              <tr>
                <th>Day</th>
                <th>Time</th>
                <th>Location</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Monday</td>
                <td>9:00 AM</td>
                <td>Meeting Room A</td>
              </tr>
              <tr>
                <td>Tuesday</td>
                <td>2:00 PM</td>
                <td>Meeting Room B</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="list-item" id="headless-tables-success-6">
          <table>
            <thead>
              <tr>
                <th>Category</th>
                <th>Count</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Category A</td>
                <td>10 items</td>
              </tr>
              <tr>
                <td>Category B</td>
                <td>15 items</td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    }
    itemDescription={itemDescription}
    helpText="Tables with proper header rows using THEAD and TH elements allow screen readers to announce column headers with each data cell, providing context and meaning to assistive technology users."
    bestPractices={[
      "Always include a THEAD element with header row for data tables",
      "Use TH elements for column headers instead of styled TD elements",
      "Add scope='col' attribute to column headers for clarity",
      "For custom ARIA tables, use role='columnheader' on header cells",
      "Ensure headers are descriptive and clearly indicate column content"
    ]}
  />
);

export default HeadlessTablesSuccess;

