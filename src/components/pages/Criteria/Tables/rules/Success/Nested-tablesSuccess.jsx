import React from "react";
import IssueSuccess from "../../../../../layout/issueSuccess";

const itemDescription = "Tables : Nested Tables - Success";

export default () => (
  <IssueSuccess
    itemContent={
      <>
        <div className="list-item" id="nested-tables-success-1">
          <table>
            <caption>Employee Data</caption>
            <thead>
              <tr>
                <th>Name</th>
                <th>Position</th>
                <th>Department</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Jane Doe</td>
                <td>Manager</td>
                <td>HR</td>
              </tr>
              <tr>
                <td>John Smith</td>
                <td>Developer</td>
                <td>IT</td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    }
    itemDescription={itemDescription}
  />
);