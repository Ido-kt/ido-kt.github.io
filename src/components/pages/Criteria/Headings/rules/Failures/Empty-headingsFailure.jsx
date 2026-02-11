import React from "react";
import IssueFailure from "../../../../../layout/issueFailure";

const itemDescription = "Headings : Empty Headings - Failure";

export default () => (
  <IssueFailure
    itemContent={
      <>
        <div className="list-item" id="empty-headings-failure-1">
          <h1></h1>
        </div>
        <div className="list-item" id="empty-headings-failure-2">
          <h2> </h2>
        </div>
        <div className="list-item" id="empty-headings-failure-3">
          <h3>&nbsp;</h3>
        </div>
        <div className="list-item" id="empty-headings-failure-4">
          <h4>No Title</h4>
        </div>
        <div className="list-item" id="empty-headings-failure-5">
          <h5>Heading Placeholder</h5>
        </div>
        <div className="list-item" id="empty-headings-failure-6">
          <h6>Untitled Section</h6>
        </div>
        <div className="list-item" id="empty-headings-failure-1">
          <h1 aria-level="2"></h1>
        </div>
        <div className="list-item" id="empty-headings-failure-2">
          <div role="heading" aria-level="3"></div>
        </div>
        <div className="list-item" id="empty-headings-failure-3">
          <h2 aria-hidden="true"></h2>
        </div>
        <div className="list-item" id="empty-headings-failure-4">
          <h3 tabindex="-1"></h3>
        </div>
        <div className="list-item" id="empty-headings-failure-5">
          <div role="heading" aria-level="1"> </div>
        </div>
        <div className="list-item" id="empty-headings-failure-6">
          <h4 aria-level="5">Untitled</h4>
        </div>
        <div className="list-item" id="empty-headings-labelfor-failure-1">
          <label for="emptyheading-labelfor-failure-1">heading text using for attribute h5</label
          ><h5 id="emptyheading-labelfor-failure-1"></h5>
        </div>
        <div className="list-item" id="empty-headings-labelfor-failure-2">
          <label for="emptyheading-labelfor-failure-2">heading text using for attribute h6</label
          ><h6 id="emptyheading-labelfor-failure-2"> </h6>
        </div>
        <div className="list-item" id="empty-headings-labelfor-failure-3">
          <label for="emptyheading-labelfor-failure-3">heading text using for attribute h1</label
          ><h1 id="emptyheading-labelfor-failure-3">&nbsp;</h1>
        </div>
        <div className="list-item" id="empty-headings-labelfor-failure-4">
          <label for="emptyheading-labelfor-failure-4">heading text using for attribute h2</label
          ><h2 id="emptyheading-labelfor-failure-4">No Title</h2>
        </div>
      <div className="list-item" id="empty-headings-labelfor-failure-5">
        <label for="emptyheading-labelfor-failure-5">
          Dashborard/ Customer Portal Label for empty heading element example
        </label>
        <a scale="base" id="emptyheading-labelfor-failure-5" className="sc-cGXZpB bPwspU sc-jXErnb JtxYj override" href="/app/widget-license/619a932d8dbc2f0444b3ed3d">
          <span>
            <span data-mixpanel="buy-license-announcement-bar"> example behavior</span>
          </span>
          <i aria-hidden="true" role="presentation" size="14" className="sc-ldgYGE gMHHrU">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="m8 4 8 8-8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
          </i>
        </a>
      </div>
      </>
    }
    itemDescription={itemDescription}
  />
);