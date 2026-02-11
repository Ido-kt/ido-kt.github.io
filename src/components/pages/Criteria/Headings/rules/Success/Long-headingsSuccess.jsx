import React from "react";
import IssueSuccess from "../../../../../layout/issueSuccess";

const itemDescription = "Headings : Long Headings - Success";

export default () => (
  <IssueSuccess
    itemContent={
      <>
        <div className="list-item" id="longHeadings-success-1">
          <h1>Main Heading</h1>
        </div>
        <div className="list-item" id="longHeadings-success-2">
          <h2>About Us</h2>
        </div>
        <div className="list-item" id="longHeadings-success-3">
          <h3>Services Offered</h3>
        </div>
        <div className="list-item" id="longHeadings-success-4">
          <h4>Contact Information</h4>
        </div>
        <div className="list-item" id="longHeadings-success-5">
          <h5>Frequently Asked Questions</h5>
        </div>
        <div className="list-item" id="longHeadings-success-6">
          <h6>Quick Links</h6>
        </div>
      </>
    }
    itemDescription={itemDescription}
  />
);