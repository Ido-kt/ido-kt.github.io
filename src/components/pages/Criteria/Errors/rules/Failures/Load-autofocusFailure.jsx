import React, { useEffect } from "react";
import IssueFailure from "../../../../../layout/issueFailure";

const itemDescription = "Errors: Load Autofocus - Failure";

export default () => (
  <IssueFailure
    itemContent={
      <>
        <div className="list-item" id="loadAutofocus-failure-1">
          <form>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              autoFocus
            />
          </form>
        </div>
        <div className="list-item" id="loadAutofocus-failure-2">
          <form>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              autoFocus
              onFocus={() => console.log("Autofocused email field")}
            />
          </form>
        </div>
        <div className="list-item" id="loadAutofocus-failure-3">
          <form>
            <input
              type="search"
              name="query"
              placeholder="Search"
              autoFocus
            />
          </form>
        </div>
        <div className="list-item" id="loadAutofocus-failure-4">
          <textarea
            autoFocus
            placeholder="Leave a comment"
            id="commentField"
            onFocus={() => alert("Screen reader interrupted")}
          ></textarea>
        </div>
        <div className="list-item" id="loadAutofocus-failure-5">
          <form>
            <input
              type="url"
              name="website"
              placeholder="Enter website URL"
              autoFocus
            />
          </form>
        </div>
        <div className="list-item" id="loadAutofocus-failure-6">
          <form>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              autoFocus
            />
          </form>
        </div>
      </>
    }
    itemDescription={itemDescription}
  />
);