import React from "react";
import IssueFailure from "../../../../../layout/issueFailure";

const itemDescription = "Errors: Broken Aria Reference - Failure";

export default () => (
  <IssueFailure
    itemContent={
      <>
        <li className="list-item" id="ariaReference-failure-1">
          <label id="name-label" htmlFor="name-input">Name</label>
          <input id="name-input" type="text" aria-labelledby="non-existent-id" />
        </li>
        
        <li className="list-item" id="ariaReference-failure-2">
          <input id="email-input" type="email" aria-describedby="missing-help" />
        </li>
        
        <li className="list-item" id="ariaReference-failure-3">
          <span id="empty-label"></span>
          <input id="search-input" type="search" aria-labelledby="empty-label" />
        </li>
        
        <li className="list-item" id="ariaReference-failure-4">
          <p id="password-hint" style={{ display: "none" }}>Password hint</p>
          <input id="password-input" type="password" aria-describedby="password-hint" />
        </li>
        
        <li className="list-item" id="ariaReference-failure-5">
          <button aria-controls="non-existent-menu" aria-expanded="false">Toggle Menu</button>
        </li>
        
        <li className="list-item" id="ariaReference-failure-6">
          <p id="hint-text">This field is required.</p>
          <input
            id="input-with-valid-aria-describedby-and-invalid-aria-labelledby"
            type="text"
            aria-labelledby="invalid-id"
            aria-describedby="hint-text"
          />
        </li>
      </>
    }
    itemDescription={itemDescription}
  />
);