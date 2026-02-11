import React from "react";
import IssueFailure from "../../../../../layout/issueFailure";

const itemDescription = "Errors : Hidden Visible Content - Failure";

export default () => (
  <IssueFailure
    itemContent={
      <>
        <div className="list-item" id="hidden-visible-failure-1">
          <button aria-hidden="true">Button Hidden from AT</button>
        </div>
        <div className="list-item" id="hidden-visible-failure-2">
          <p aria-hidden="true">Paragraph Hidden from AT</p>
        </div>
        <div className="list-item" id="hidden-visible-failure-3">
          <span aria-hidden="true">Span Content Hidden</span>
        </div>
        <div className="list-item" id="hidden-visible-failure-4">
          <div aria-label="Invisible Div Content" aria-hidden="true">Div Hidden</div>
        </div>
        <div className="list-item" id="hidden-visible-failure-5">
          <img src="image.jpg" alt="" aria-hidden="true" />
        </div>
        <div className="list-item" id="hidden-visible-failure-6">
          <a href="#" aria-hidden="true">Link Hidden from AT</a>
        </div>
      </>
    }
    itemDescription={itemDescription}
  />
);