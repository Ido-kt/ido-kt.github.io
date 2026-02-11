import React from "react";
import IssueSuccess from "../../../../../layout/issueSuccess";

const itemDescription = "Clickables : New Window Links - Success";

export default () => (
  <IssueSuccess
    itemContent={
      <>
        <li className="list-item" id="rule-success-1">
          <a href="https://example.com/about-us" target="_blank" aria-label="Learn more about our company (opens in a new window)">
            About Us<span className="sr-only">New Window</span>
          </a>
        </li>
        <li className="list-item" id="rule-success-2">
          <a href="https://linkedin.com/in/yourprofile" target="_blank" aria-label="View my LinkedIn profile (opens in a new window)">
            LinkedIn Profile<span className="sr-only">New Window</span>
          </a>
        </li>
        <li className="list-item" id="rule-success-3">
          <a href="https://example.com/privacy-policy.pdf" target="_blank" aria-label="Read our Privacy Policy (opens in a new window)">
            Privacy Policy PDF<span className="sr-only">New Window</span>
          </a>
        </li>
        <li className="list-item" id="rule-success-4">
          <a href="https://github.com/yourusername" target="_blank" aria-label="View my GitHub profile (opens in a new window)">
            GitHub Profile<span className="sr-only">New Window</span>
          </a>
        </li>
        <li className="list-item" id="rule-success-5">
          <a href="https://example.com/docs" target="_blank" aria-label="Access our documentation page (opens in a new window)">
            Documentation<span className="sr-only">New Window</span>
          </a>
        </li>
        <li className="list-item" id="rule-success-6">
          <a href="https://example.com/report.pdf" target="_blank" aria-label="Download our annual report (opens in a new window)">
            Annual Report PDF<span className="sr-only">New Window</span>
          </a>
        </li>
      </>
    }
    itemDescription={itemDescription}
  />
);
