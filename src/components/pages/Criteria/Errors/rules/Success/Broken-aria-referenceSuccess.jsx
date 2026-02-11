import React from "react";
import IssueSuccess from "../../../../../layout/issueSuccess";

const itemDescription = "Errors: Broken Aria Reference - Success";

export default () => (
  <IssueSuccess
    itemContent={
      <>
        <li className="list-item" id="ariaReference-success-1">
          <label id="name-label" htmlFor="name-input">Name</label>
          <input id="name-input" type="text" aria-labelledby="name-label" />
        </li>
        
        <li className="list-item" id="ariaReference-success-2">
          <p id="email-help">Enter your email address.</p>
          <input id="email-input" type="email" aria-describedby="email-help" />
        </li>
        
        <li className="list-item" id="ariaReference-success-3">
          <span id="hidden-label" className="sr-only">Search Field</span>
          <input id="search-input" type="search" aria-labelledby="hidden-label" />
        </li>
        
        <li className="list-item" id="ariaReference-success-4">
          <p id="password-hint">Password must be at least 8 characters long.</p>
          <input id="password-input" type="password" aria-describedby="password-hint" />
        </li>
        
        <li className="list-item" id="ariaReference-success-5">
          <button aria-controls="dropdown-menu" aria-expanded="false">Toggle Menu</button>
          <ul id="dropdown-menu" hidden>
            <li>Option 1</li>
            <li>Option 2</li>
          </ul>
        </li>
        
        <li className="list-item" id="ariaReference-success-6">
          <ul id="autocomplete-list" role="listbox">
            <li id="suggestion1" role="option">Apple</li>
            <li id="suggestion2" role="option">Orange</li>
          </ul>
          <input type="text" aria-activedescendant="suggestion1" aria-owns="autocomplete-list" />
        </li>
      </>
    }
    itemDescription={itemDescription}
  />
);