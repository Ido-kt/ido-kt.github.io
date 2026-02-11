import React from "react";
import IssueFailure from "../../../../../layout/issueFailure";

const itemDescription = "Clickables : New Window Links - Failure";

export default () => (
  <IssueFailure
    itemContent={
      <>
        <li className="list-item" id="rule-failure-1">
          <a href="https://example.com/about-us" target="_blank">About Us</a>
        </li>
        <li className="list-item" id="rule-failure-2">
          <a href="https://linkedin.com/in/yourprofile" target="_blank">LinkedIn Profile</a>
        </li>
        <li className="list-item" id="rule-failure-3">
          <a href="https://example.com/privacy-policy.pdf" target="_blank">Privacy Policy PDF</a>
        </li>
        <li className="list-item" id="rule-failure-4">
          <a href="https://github.com/yourusername" target="_blank">GitHub Profile</a>
        </li>
        <li className="list-item" id="rule-failure-5">
          <a href="https://example.com/docs" target="_blank">Documentation</a>
        </li>
        <li className="list-item" id="rule-failure-6">
          <a href="https://example.com/report.pdf" target="_blank">Annual Report PDF</a>
        </li>
      </>
    }
    itemDescription={itemDescription}
  />
);
