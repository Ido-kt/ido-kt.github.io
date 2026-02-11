import React from "react";
import IssueFailure from "../../../../../layout/issueFailure";

const itemDescription = "Tables : Table Layouts - Failure";

const TableLayoutsFailure = () => (
  <IssueFailure
    itemContent={
      <>
        <div className="list-item" id="table-layouts-failure-1">
          <table>
            <tr>
              <td>Logo</td>
              <td>Navigation Menu</td>
            </tr>
            <tr>
              <td>Sidebar</td>
              <td>Main Content Area</td>
            </tr>
          </table>
        </div>
        <div className="list-item" id="table-layouts-failure-2">
          <table style={{ width: "100%" }}>
            <tr>
              <td style={{ width: "20%" }}>Left Column</td>
              <td style={{ width: "60%" }}>Center Column</td>
              <td style={{ width: "20%" }}>Right Column</td>
            </tr>
          </table>
        </div>
        <div className="list-item" id="table-layouts-failure-3">
          <table>
            <tr>
              <td>
                <header>Header Content</header>
              </td>
            </tr>
            <tr>
              <td>
                <main>Main Content</main>
              </td>
            </tr>
            <tr>
              <td>
                <footer>Footer Content</footer>
              </td>
            </tr>
          </table>
        </div>
        <div className="list-item" id="table-layouts-failure-4">
          <table>
            <tr>
              <td>Button 1</td>
              <td>Button 2</td>
              <td>Button 3</td>
            </tr>
          </table>
        </div>
        <div className="list-item" id="table-layouts-failure-5">
          <table role="table">
            <tr>
              <td>Image Gallery Item 1</td>
              <td>Image Gallery Item 2</td>
              <td>Image Gallery Item 3</td>
            </tr>
          </table>
        </div>
        <div className="list-item" id="table-layouts-failure-6">
          <table>
            <tr>
              <td>
                <div>Form Field 1</div>
              </td>
              <td>
                <div>Form Field 2</div>
              </td>
            </tr>
            <tr>
              <td>
                <div>Form Field 3</div>
              </td>
              <td>
                <div>Form Field 4</div>
              </td>
            </tr>
          </table>
        </div>
      </>
    }
    itemDescription={itemDescription}
    helpText="Tables used for layout purposes (not for displaying tabular data) should have their table role removed. Screen readers have specific navigation patterns for tables, and using tables for layout confuses assistive technology users."
    fixSteps={[
      "Add role='presentation' to tables used only for layout",
      "Alternatively, use CSS Grid or Flexbox for layout instead of tables",
      "Keep table elements only for actual tabular data",
      "Remove table semantics from layout tables to prevent screen reader confusion",
      "Test with screen readers to ensure layout tables are not announced as data tables"
    ]}
  />
);

export default TableLayoutsFailure;

