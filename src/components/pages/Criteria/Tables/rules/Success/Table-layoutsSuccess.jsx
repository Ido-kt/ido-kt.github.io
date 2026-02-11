import React from "react";
import IssueSuccess from "../../../../../layout/issueSuccess";

const itemDescription = "Tables : Table Layouts - Success";

const TableLayoutsSuccess = () => (
  <IssueSuccess
    itemContent={
      <>
        <div className="list-item" id="table-layouts-success-1">
          <table role="presentation">
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
        <div className="list-item" id="table-layouts-success-2">
          <table role="presentation" style={{ width: "100%" }}>
            <tr>
              <td style={{ width: "20%" }}>Left Column</td>
              <td style={{ width: "60%" }}>Center Column</td>
              <td style={{ width: "20%" }}>Right Column</td>
            </tr>
          </table>
        </div>
        <div className="list-item" id="table-layouts-success-3">
          <table role="presentation">
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
        <div className="list-item" id="table-layouts-success-4">
          <div style={{ display: "flex", gap: "10px" }}>
            <button>Button 1</button>
            <button>Button 2</button>
            <button>Button 3</button>
          </div>
        </div>
        <div className="list-item" id="table-layouts-success-5">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "10px" }}>
            <div>Image Gallery Item 1</div>
            <div>Image Gallery Item 2</div>
            <div>Image Gallery Item 3</div>
          </div>
        </div>
        <div className="list-item" id="table-layouts-success-6">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
            <div>Form Field 1</div>
            <div>Form Field 2</div>
            <div>Form Field 3</div>
            <div>Form Field 4</div>
          </div>
        </div>
      </>
    }
    itemDescription={itemDescription}
    helpText="Layout tables should use role='presentation' to remove table semantics, or use modern CSS layout methods like Grid or Flexbox. This prevents screen readers from treating layout structures as data tables."
    bestPractices={[
      "Add role='presentation' to tables used only for layout purposes",
      "Prefer CSS Grid or Flexbox for modern layouts instead of tables",
      "Reserve table elements for actual tabular data only",
      "Ensure layout tables don't interfere with screen reader navigation",
      "Test with assistive technology to verify layout tables are not announced as data tables"
    ]}
  />
);

export default TableLayoutsSuccess;

