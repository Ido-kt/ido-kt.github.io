import React from "react";
import IssueSuccess from "../../../../../layout/issueSuccess";

const itemDescription = "Tables : Column Table Headers - Success";

const ColumnTableHeadersSuccess = () => (
  <IssueSuccess
    itemContent={
      <>
        <div className="list-item" id="column-table-headers-success-1">
          <table>
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Price</th>
                <th>Stock</th>
              </tr>
            </thead>
            <tbody>
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
        <div className="list-item" id="column-table-headers-success-2">
          <table>
            <thead>
              <tr>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Email</th>
              </tr>
            </thead>
            <tbody>
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
        <div className="list-item" id="column-table-headers-success-3">
          <div role="table">
            <div role="row">
              <div role="columnheader">Date</div>
              <div role="columnheader">Event</div>
              <div role="columnheader">Location</div>
            </div>
            <div role="row">
              <div role="cell">2024-01-15</div>
              <div role="cell">Conference</div>
              <div role="cell">New York</div>
            </div>
            <div role="row">
              <div role="cell">2024-02-20</div>
              <div role="cell">Workshop</div>
              <div role="cell">Boston</div>
            </div>
          </div>
        </div>
        <div className="list-item" id="column-table-headers-success-4">
          <table>
            <thead>
              <tr>
                <th>Item</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Book</td>
                <td>2</td>
                <td>$20.00</td>
              </tr>
              <tr>
                <td>Pen</td>
                <td>5</td>
                <td>$5.00</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="list-item" id="column-table-headers-success-5">
          <table>
            <thead>
              <tr>
                <th scope="col">Category</th>
                <th scope="col">Count</th>
              </tr>
            </thead>
            <tbody>
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
        <div className="list-item" id="column-table-headers-success-6">
          <table>
            <thead>
              <tr>
                <th>Department</th>
                <th>Budget</th>
                <th>Spent</th>
              </tr>
            </thead>
            <tbody>
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
        <div className="list-item" id="column-table-headers-success-7">
          <table>
            <tbody>
              <tr>
                <td role="columnheader">
                  <strong>Product</strong>
                </td>
                <td role="columnheader">
                  <strong>Price</strong>
                </td>
              </tr>
              <tr>
                <td>Laptop</td>
                <td>$999.00</td>
              </tr>
              <tr>
                <td>Mouse</td>
                <td>$25.00</td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    }
    itemDescription={itemDescription}
    helpText="Properly tagged column headers using TH elements or role='columnheader' allow screen readers to associate data cells with their headers, making table content accessible to assistive technology users."
    bestPractices={[
      "Use TH elements within THEAD for native HTML tables",
      "Add scope='col' attribute to column headers for clarity",
      "For custom ARIA tables, use role='columnheader' on header cells",
      "Ensure header cells are in the first row of the table",
      "Test with screen readers to verify proper announcement"
    ]}
  />
);

export default ColumnTableHeadersSuccess;

