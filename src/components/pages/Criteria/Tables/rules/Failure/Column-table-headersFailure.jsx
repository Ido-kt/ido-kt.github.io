import React from "react";
import IssueFailure from "../../../../../layout/issueFailure";

const itemDescription = "Tables : Column Table Headers - Failure";

const ColumnTableHeadersFailure = () => (
  <IssueFailure
    itemContent={
      <>
        <div className="list-item" id="column-table-headers-failure-1">
          <table>
            <tbody>
              <tr>
                <td>
                  <strong>Product Name</strong>
                </td>
                <td>
                  <strong>Price</strong>
                </td>
                <td>
                  <strong>Stock</strong>
                </td>
              </tr>
              <tr>
                <td>Widget A</td>
                <td>$10.00</td>
                <td>50</td>
              </tr>
              <tr>
                <td>Widget B</td>
                <td>$15.00</td>
                <td>30</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="list-item" id="column-table-headers-failure-2">
          <table>
            <tbody>
              <tr>
                <td style={{ fontWeight: "bold" }}>First Name</td>
                <td style={{ fontWeight: "bold" }}>Last Name</td>
                <td style={{ fontWeight: "bold" }}>Email</td>
              </tr>
              <tr>
                <td>John</td>
                <td>Doe</td>
                <td>john@example.com</td>
              </tr>
              <tr>
                <td>Jane</td>
                <td>Smith</td>
                <td>jane@example.com</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="list-item" id="column-table-headers-failure-3">
          <table>
            <tbody>
              <tr>
                <td className="header-style">Date</td>
                <td className="header-style">Event</td>
                <td className="header-style">Location</td>
              </tr>
              <tr>
                <td>2024-01-15</td>
                <td>Conference</td>
                <td>New York</td>
              </tr>
              <tr>
                <td>2024-02-20</td>
                <td>Workshop</td>
                <td>Boston</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="list-item" id="column-table-headers-failure-4">
          <div role="table">
            <div role="row">
              <div role="cell">
                <strong>Item</strong>
              </div>
              <div role="cell">
                <strong>Quantity</strong>
              </div>
              <div role="cell">
                <strong>Total</strong>
              </div>
            </div>
            <div role="row">
              <div role="cell">Book</div>
              <div role="cell">2</div>
              <div role="cell">$20.00</div>
            </div>
          </div>
        </div>
        <div className="list-item" id="column-table-headers-failure-5">
          <table>
            <tbody>
              <tr>
                <td>
                  <span style={{ fontSize: "18px", fontWeight: "bold" }}>
                    Category
                  </span>
                </td>
                <td>
                  <span style={{ fontSize: "18px", fontWeight: "bold" }}>
                    Count
                  </span>
                </td>
              </tr>
              <tr>
                <td>Electronics</td>
                <td>25</td>
              </tr>
              <tr>
                <td>Clothing</td>
                <td>40</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="list-item" id="column-table-headers-failure-6">
          <table>
            <tbody>
              <tr>
                <td>
                  <h4>Department</h4>
                </td>
                <td>
                  <h4>Budget</h4>
                </td>
                <td>
                  <h4>Spent</h4>
                </td>
              </tr>
              <tr>
                <td>Marketing</td>
                <td>$50,000</td>
                <td>$45,000</td>
              </tr>
              <tr>
                <td>Sales</td>
                <td>$75,000</td>
                <td>$70,000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    }
    itemDescription={itemDescription}
    helpText="Column headers that are visually styled but not properly tagged with TH elements or role='columnheader' cannot be recognized by assistive technology. Screen readers need proper semantic markup to associate data cells with their column headers."
    fixSteps={[
      "Replace TD elements in the header row with TH elements",
      "Wrap the header row in a THEAD element",
      "For custom tables using ARIA, add role='columnheader' to header cells",
      "Ensure each data cell is programmatically associated with its column header",
      "Test with a screen reader to verify headers are announced correctly"
    ]}
  />
);

export default ColumnTableHeadersFailure;

