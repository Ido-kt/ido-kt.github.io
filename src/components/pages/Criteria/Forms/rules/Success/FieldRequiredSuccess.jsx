import React from "react";
import IssueSuccess from "../../../../../layout/issueSuccess";

const itemDescription = "Form - Field Required Success";

export default () => (
  <IssueSuccess
    itemContent={
      <>
        <ul className="unstyled-list">
          <li className="list-item">
            <label for="fullname1">Full Name *</label>
            <input type="text" id="fullname1" aria-required="true" />
          </li>

          <li className="list-item">
            <label for="email1">Email *</label>
            <input type="email" id="email1" aria-required="true" />
          </li>

          <li className="list-item">
            <label for="password1">Password *</label>
            <input type="password" id="password1" aria-required="true" />
          </li>

          <li className="list-item">
            <label for="phone1">Phone Number *</label>
            <input type="tel" id="phone1" aria-required="true" />
          </li>

          <li className="list-item">
            <label for="dob1">Date of Birth *</label>
            <input type="date" id="dob1" aria-required="true" />
          </li>
        </ul>

        <input type="submit" value="Submit" />
      </>
    }
    itemDescription={itemDescription}
  />
);
