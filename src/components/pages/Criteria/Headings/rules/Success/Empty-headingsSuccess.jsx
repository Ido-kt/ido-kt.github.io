import React from "react";
import IssueSuccess from "../../../../../layout/issueSuccess";

const itemDescription = "Headings : Empty Headings - Success";

export default () => (
  <IssueSuccess
    itemContent={
      <>
        <div className="list-item" id="empty-headings-success-1">
          <h1>Welcome to Our Website</h1>
        </div>
        <div className="list-item" id="empty-headings-success-2">
          <h2>Our Services</h2>
        </div>
        <div className="list-item" id="empty-headings-success-3">
          <h3>Contact Information</h3>
        </div>
        <div className="list-item" id="empty-headings-success-4">
          <h4>Featured Blog Posts</h4>
        </div>
        <div className="list-item" id="empty-headings-success-5">
          <h5>Support Options</h5>
        </div>
        <div className="list-item" id="empty-headings-success-6">
          <h6>Terms and Conditions</h6>
        </div>
      </>
    }
    itemDescription={itemDescription}
  />
);