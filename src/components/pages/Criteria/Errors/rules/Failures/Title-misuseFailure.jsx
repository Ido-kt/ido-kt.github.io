import React from "react";
import IssueFailure from "../../../../../layout/issueFailure";

const itemDescription = "Errors: Title Misuse - Failure";

export default () => (
  <IssueFailure
    itemContent={
      <>
        <div className="list-item" id="title-misuse-failure-1">
          <a href="/about" title="This is our About Us page">About Us</a>
        </div>
        <div className="list-item" id="title-misuse-failure-2">
          <button title="Click to submit the form">Submit</button>
        </div>
        <div className="list-item" id="title-misuse-failure-3">
          <img src="logo.png" alt="Logo" title="This is the company logo" />
        </div>
        <div className="list-item" id="title-misuse-failure-4">
          <p title="This is additional information not visible to screen readers">
            Learn more about our services.
          </p>
        </div>
        <div className="list-item" id="title-misuse-failure-5">
          <input type="text" id="username" title="Enter your username" />
        </div>
        <div className="list-item" id="title-misuse-failure-6">
          <h1 title="Main heading of the page">Welcome to Our Website</h1>
        </div>
      </>
    }
    itemDescription={itemDescription}
  />
);