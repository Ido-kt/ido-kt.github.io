import React from "react";
import IssueFailure from "../../../../../layout/issueFailure";

const itemDescription = "Navigation : Missing Nav Items - Failure";

export default () => (
  <IssueFailure
    itemContent={
      <>
        <div className="list-item" id="missing-nav-items-failure-1">
          Home
        </div>
        <div className="list-item" id="missing-nav-items-failure-2">
          About Us
        </div>
        <div className="list-item" id="missing-nav-items-failure-3">
          Services
        </div>
        <div className="list-item" id="missing-nav-items-failure-4">
          Contact Us
        </div>
        <div className="list-item" id="missing-nav-items-failure-5">
          Blog
        </div>
        <div className="list-item" id="missing-nav-items-failure-6">
          Portfolio
        </div>
      </>
    }
    itemDescription={itemDescription}
  />
);