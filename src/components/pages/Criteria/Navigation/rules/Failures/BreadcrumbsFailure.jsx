import React from "react";
import IssueFailure from "../../../../../layout/issueFailure";

const itemDescription = "Navigation: Breadcrumbs - Failure";

export default () => (
  <IssueFailure
    itemContent={
      <>
        <div className="list-item" id="breadcrumbs-failure-1">
          <div>
            <span>Home</span> > <span>Products</span> > <span>Item</span>
          </div>
        </div>
        <div className="list-item" id="breadcrumbs-failure-2">
          <nav>
            <div>
              <a href="/home">Home</a> - <a href="/products">Products</a> - Item
            </div>
          </nav>
        </div>
        <div className="list-item" id="breadcrumbs-failure-3">
          <div aria-label="breadcrumb">
            <p><a href="/start">Start</a> / <a href="/next">Next</a> / Final</p>
          </div>
        </div>
        <div className="list-item" id="breadcrumbs-failure-4">
          <ul>
            <li><a href="/">Home</a> -></li>
            <li><a href="/about">About</a> -></li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="list-item" id="breadcrumbs-failure-5">
          <span>You are here:</span>
          <span>Home > Products > Shoes</span>
        </div>
        <div className="list-item" id="breadcrumbs-failure-6">
          <nav>
            <div>Home / About / Services</div>
          </nav>
        </div>
      </>
    }
    itemDescription={itemDescription}
  />
);