import React from "react";
import IssueSuccess from "../../../../../layout/issueSuccess";

const itemDescription = "Errors: Title Misuse - Success";

export default () => (
  <IssueSuccess
    itemContent={
      <>
        <div className="list-item" id="title-misuse-success-1">
          <a href="/about">About Us</a>
        </div>
        <div className="list-item" id="title-misuse-success-2">
          <button>Submit</button>
        </div>
        <div className="list-item" id="title-misuse-success-3">
          <img src="logo.png" alt="Company Logo" />
        </div>
        <div className="list-item" id="title-misuse-success-4">
          <p>Learn more about our services by clicking the links above.</p>
        </div>
        <div className="list-item" id="title-misuse-success-5">
          <label htmlFor="username">Username:</label>
          <input id="username" type="text" />
        </div>
        <div className="list-item" id="title-misuse-success-6">
          <h1>Welcome to Our Website</h1>
        </div>
      </>
    }
    itemDescription={itemDescription}
  />
);