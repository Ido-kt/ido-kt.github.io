import React from "react";
import IssueSuccess from "../../../../../layout/issueSuccess";

const itemDescription = "Navigation : Missing Nav Items - Success";

export default () => (
  <IssueSuccess
    itemContent={
      <>
        <div className="list-item" id="missing-nav-items-success-1">
          <a href="/home">Home</a>
        </div>
        <div className="list-item" id="missing-nav-items-success-2">
          <button onClick={() => alert('Go to About')}>About</button>
        </div>
        <div className="list-item" id="missing-nav-items-success-3">
          <a href="/services">Services</a>
        </div>
        <div className="list-item" id="missing-nav-items-success-4">
          <span role="link" tabIndex="0" onClick={() => alert('Contact')}>
            Contact
          </span>
        </div>
        <div className="list-item" id="missing-nav-items-success-5">
          <a href="/blog">Blog</a>
        </div>
        <div className="list-item" id="missing-nav-items-success-6">
          <button onClick={() => alert('Navigate to Portfolio')}>
            Portfolio
          </button>
        </div>
      </>
    }
    itemDescription={itemDescription}
  />
);