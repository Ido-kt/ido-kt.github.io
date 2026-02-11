import React from "react";
import IssueFailure from "../../../../../layout/issueFailure";

const itemDescription = "Errors: Broken Aria Labels - Failure";

const BrokenAriaLabelsFailure = () => (
  <IssueFailure
    itemContent={
      <>
        <div className="list-item" id="broken-aria-labels-failure-1">
          <button aria-label="Submit form">
            Submit
          </button>
        </div>
        <div className="list-item" id="broken-aria-labels-failure-2">
          <a href="#" aria-label="Go to home page">
            Home
          </a>
        </div>
        <div className="list-item" id="broken-aria-labels-failure-3">
          <button aria-label="Close dialog">
            Close
          </button>
        </div>
        <div className="list-item" id="broken-aria-labels-failure-4">
          <a href="#" aria-label="Read more about products">
            Read More
          </a>
        </div>
        <div className="list-item" id="broken-aria-labels-failure-5">
          <button aria-label="Add item to cart">
            Add to Cart
          </button>
        </div>
        <div className="list-item" id="broken-aria-labels-failure-6">
          <div aria-label="Error message">
            Please fill in all required fields.
          </div>
        </div>
        <div className="list-item" id="broken-aria-labels-failure-7">
          <span aria-label="Warning text">
            This action cannot be undone.
          </span>
        </div>
        <div className="list-item" id="broken-aria-labels-failure-8">
          <h2 aria-label="Page title">
            Welcome to Our Website
          </h2>
        </div>
        <div className="list-item" id="broken-aria-labels-failure-9">
          <p aria-label="Description text">
            This is a description of our service.
          </p>
        </div>
        <div className="list-item" id="broken-aria-labels-failure-10">
          <label>
            Email Address
            <input type="email" aria-label="Email input field" />
          </label>
        </div>
        <div className="list-item" id="broken-aria-labels-failure-11">
          <button aria-label="Delete item">
            Delete
          </button>
        </div>
        <div className="list-item" id="broken-aria-labels-failure-12">
          <a href="#" aria-label="Contact us page">
            Contact Us
          </a>
        </div>
      </>
    }
    itemDescription={itemDescription}
    helpText="Aria labels should not override or replace visible text. Screen reader users need to receive the exact text as visually displayed on the screen. If additional context is needed for ambiguous text, use screen-reader-only text instead of aria-label."
    fixSteps={[
      "Remove aria-label from elements that have visible text",
      "If text is ambiguous, add screen-reader-only text using sr-only class",
      "Use aria-label only for elements without visible text (like icon buttons)",
      "For landmarks like nav, aria-label can provide additional context",
      "Test with screen readers to ensure visible text is announced correctly"
    ]}
  />
);

export default BrokenAriaLabelsFailure;

