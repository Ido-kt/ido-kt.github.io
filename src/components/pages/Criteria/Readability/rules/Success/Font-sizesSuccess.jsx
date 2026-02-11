import React from "react";
import IssueSuccess from "../../../../../layout/issueSuccess";

const itemDescription = "Readability: Font Sizes - Success";

export default () => (
  <IssueSuccess
    itemContent={
      <>
        <div className="list-item" id="font-sizes-success-1">
          <p style={{ fontSize: "16px" }}>Readable font size of 16px for body text.</p>
        </div>
        <div className="list-item" id="font-sizes-success-2">
          <p style={{ fontSize: "18px" }}>Readable font size of 18px, ideal for larger text.</p>
        </div>
        <div className="list-item" id="font-sizes-success-3">
          <p style={{ fontSize: "20px" }}>Readable font size of 20px, suitable for subheadings.</p>
        </div>
        <div className="list-item" id="font-sizes-success-4">
          <p style={{ fontSize: "14px" }}>Readable font size of 14px for compact body text.</p>
        </div>
        <div className="list-item" id="font-sizes-success-5">
          <p style={{ fontSize: "22px" }}>Readable font size of 22px for prominent headings.</p>
        </div>
        <div className="list-item" id="font-sizes-success-6">
          <p style={{ fontSize: "24px" }}>Readable font size of 24px for clear and large text.</p>
        </div>
      </>
    }
    itemDescription={itemDescription}
  />
);