import React from "react";
import IssueFailure from "../../../../../layout/issueFailure";

const itemDescription = "Headings : Untagged Headings - Failure";

export default () => (
  <IssueFailure
    itemContent={
      <>
        <div className="list-item" id="untagged-headings-failure-1">
          <div style={{ fontSize: "2em", fontWeight: "bold" }}>Visually Styled Heading</div>
        </div>
        <div className="list-item" id="untagged-headings-failure-2">
          <p style={{ fontSize: "1.5em", fontWeight: "bold" }}>Paragraph Styled as Heading</p>
        </div>
        <div className="list-item" id="untagged-headings-failure-3">
          <span style={{ fontSize: "1.2em", fontWeight: "bold" }}>Span Styled as Heading</span>
        </div>
        <div className="list-item" id="untagged-headings-failure-4">
          <div role="heading">Missing ARIA Level</div>
        </div>
        <div className="list-item" id="untagged-headings-failure-5">
          <h1 aria-hidden="true">Hidden Heading</h1>
        </div>
        <div className="list-item" id="untagged-headings-failure-6">
          <span aria-level="2">ARIA Level Without Role</span>
        </div>
      </>
    }
    itemDescription={itemDescription}
  />
);