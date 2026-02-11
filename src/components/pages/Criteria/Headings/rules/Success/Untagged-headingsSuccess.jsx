import React from "react";
import IssueSuccess from "../../../../../layout/issueSuccess";

const itemDescription = "Headings : Untagged Headings - Success";

export default () => (
  <IssueSuccess
    itemContent={
      <>
        <div className="list-item" id="untagged-headings-success-1">
          <h1>Main Heading</h1>
        </div>
        <div className="list-item" id="untagged-headings-success-2">
          <h2>Subheading</h2>
        </div>
        <div className="list-item" id="untagged-headings-success-3">
          <span role="heading" aria-level="3">Tertiary Heading</span>
        </div>
        <div className="list-item" id="untagged-headings-success-4">
          <h3>Properly Nested Heading</h3>
        </div>
        <div className="list-item" id="untagged-headings-success-5">
          <h4>Another Proper Heading</h4>
        </div>
        <div className="list-item" id="untagged-headings-success-6">
          <span role="heading" aria-level="2">ARIA Level 2 Heading</span>
        </div>
      </>
    }
    itemDescription={itemDescription}
  />
);