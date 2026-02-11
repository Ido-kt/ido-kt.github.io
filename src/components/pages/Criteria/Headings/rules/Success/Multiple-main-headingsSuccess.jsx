import React from "react";
import IssueSuccess from "../../../../../layout/issueSuccess";

const itemDescription = "Headings: Multiple Main Headings - Success";

export default () => (
  <IssueSuccess
    itemContent={
      <>
        <div className="list-item" id="multipleMainHeadings-success-1">
          <h1>Welcome to Our Website</h1>
        </div>
       
      </>
    }
    itemDescription={itemDescription}
  />
);