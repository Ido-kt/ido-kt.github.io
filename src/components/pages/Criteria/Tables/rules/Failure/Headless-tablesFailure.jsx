import React from "react";
import IssueFailure from "../../../../../layout/issueFailure";

const itemDescription = "Tables : Headless Tables - Failure";

const HeadlessTablesFailure = () => (
  <IssueFailure
    itemContent={
      <>
        <div className="list-item" id="headless-tables-failure-1">
          <table>
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
        <div className="list-item" id="headless-tables-failure-2">
          <table>
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
        <div className="list-item" id="headless-tables-failure-3">
          <table>
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
        <div className="list-item" id="headless-tables-failure-4">
          <div role="table">
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
        <div className="list-item" id="headless-tables-failure-5">
          <table>
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
        <div className="list-item" id="headless-tables-failure-6">
          <table>
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
    helpText="Tables without header rows make it impossible for screen readers to associate data cells with their column headers. Users cannot understand the context or meaning of table data without proper headers."
    fixSteps={[
      "Add a THEAD element containing the header row",
      "Use TH elements for each column header in the header row",
      "For custom ARIA tables, add role='columnheader' to header cells",
      "Ensure headers clearly describe the data in each column",
      "Test with screen readers to verify headers are announced with data cells"
    ]}
  />
);

export default HeadlessTablesFailure;

