import React from "react";
import IssueSuccess from "../../../../../layout/issueSuccess";

const itemDescription = "Errors: Broken Aria Labels - Success";

const BrokenAriaLabelsSuccess = () => (
  <IssueSuccess
    itemContent={
      <>
        <div className="list-item" id="broken-aria-labels-success-1">
          <button>
            Submit
          </button>
        </div>
        <div className="list-item" id="broken-aria-labels-success-2">
          <a href="#">
            Home
          </a>
        </div>
        <div className="list-item" id="broken-aria-labels-success-3">
          <button>
            Close
          </button>
        </div>
        <div className="list-item" id="broken-aria-labels-success-4">
          <a href="#">
            Read More
            <span className="sr-only"> about our products</span>
          </a>
        </div>
        <div className="list-item" id="broken-aria-labels-success-5">
          <button>
            Add to Cart
          </button>
        </div>
        <div className="list-item" id="broken-aria-labels-success-6">
          <div>
            Please fill in all required fields.
          </div>
        </div>
        <div className="list-item" id="broken-aria-labels-success-7">
          <span>
            This action cannot be undone.
          </span>
        </div>
        <div className="list-item" id="broken-aria-labels-success-8">
          <h2>
            Welcome to Our Website
          </h2>
        </div>
        <div className="list-item" id="broken-aria-labels-success-9">
          <p>
            This is a description of our service.
          </p>
        </div>
        <div className="list-item" id="broken-aria-labels-success-10">
          <label htmlFor="email-input">
            Email Address
          </label>
          <input type="email" id="email-input" />
        </div>
        <div className="list-item" id="broken-aria-labels-success-11">
          <button>
            <span className="sr-only">Delete </span>
            <span aria-hidden="true">🗑️</span>
          </button>
        </div>
        <div className="list-item" id="broken-aria-labels-success-12">
          <nav aria-label="Main navigation">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
          </nav>
        </div>
        <div className="list-item" id="broken-aria-labels-success-13">
          <button aria-label="Close dialog">
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div className="list-item" id="broken-aria-labels-success-14">
          <a href="#">
            Contact Us
            <span className="sr-only"> - opens contact page</span>
          </a>
        </div>
      </>
    }
    itemDescription={itemDescription}
    helpText="Elements with visible text should not use aria-label to override that text. Use aria-label only for elements without visible text (like icon-only buttons). For ambiguous text, add screen-reader-only context. Landmarks like nav can use aria-label for additional context."
    bestPractices={[
      "Do not use aria-label on elements with visible descriptive text",
      "Use aria-label only for icon-only buttons or elements without text",
      "For ambiguous text, add screen-reader-only text using sr-only class",
      "Landmarks (nav, main, etc.) can use aria-label for additional context",
      "Test with screen readers to ensure visible text is properly announced"
    ]}
  />
);

export default BrokenAriaLabelsSuccess;

