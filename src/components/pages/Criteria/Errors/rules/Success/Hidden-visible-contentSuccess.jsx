import React from "react";
import IssueSuccess from "../../../../../layout/issueSuccess";

const itemDescription = "Errors : Hidden Visible Content - Success";

export default () => (
  <IssueSuccess
    itemContent={
      <>
        <div className="list-item" id="hidden-visible-success-1">
          <button aria-hidden="false">Accessible Button</button>
        </div>
        <div className="list-item" id="hidden-visible-success-2">
          <p role="presentation">Visible and Available Paragraph</p>
        </div>
        <div className="list-item" id="hidden-visible-success-3">
          <span aria-hidden="false">Visible Span Content</span>
        </div>
        <div className="list-item" id="hidden-visible-success-4">
          <div aria-label="Accessible Div Content">Visible Div</div>
        </div>
        <div className="list-item" id="hidden-visible-success-5">
          <img src="image.jpg" alt="Descriptive Alt Text" />
        </div>
        <div className="list-item" id="hidden-visible-success-6">
          <a href="#" aria-hidden="false">Visible Link</a>
        </div>
      </>
    }
    itemDescription={itemDescription}
  />
);