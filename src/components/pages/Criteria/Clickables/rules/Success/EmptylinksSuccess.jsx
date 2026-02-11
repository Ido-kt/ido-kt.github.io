import React from "react";
import IssueSuccess from "../../../../../layout/issueSuccess";

const itemDescription = "Clickables : Empty Links - Success";

export default () => (
  <IssueSuccess
    itemContent={
      <>
        <li className="list-item" id="rule-success-1">
          <a href="https://example.com" aria-label="Learn more about our services">Read More</a>
        </li>
        <li className="list-item" id="rule-success-2">
          <a href="https://example.com/blog" aria-label="Visit our blog homepage">Blog</a>
        </li>
        <li className="list-item" id="rule-success-3">
          <a href="https://example.com/product" aria-label="View product details">Product Info</a>
        </li>
        <li className="list-item" id="rule-success-4">
          <a href="https://example.com/contact" aria-label="Contact us for inquiries">Contact Us</a>
        </li>
        <li className="list-item" id="rule-success-5">
          <a href="https://example.com/signup" aria-label="Sign up for our newsletter">Sign Up</a>
        </li>
        <li className="list-item" id="rule-success-6">
          <a href="https://example.com/resources" aria-label="Access learning resources">Resources</a>
        </li>
      </>
    }
    itemDescription={itemDescription}
  />
);
