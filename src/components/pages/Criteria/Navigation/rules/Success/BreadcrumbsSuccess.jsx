import React from "react";
import IssueSuccess from "../../../../../layout/issueSuccess";

const itemDescription = "Navigation: Breadcrumbs - Success";

export default () => (
  <IssueSuccess
    itemContent={
      <>
        <div className="list-item" id="breadcrumbs-success-1">
          <nav aria-label="Breadcrumb">
            <ol>
              <li><a href="/home">Home</a></li>
              <li><a href="/products">Products</a></li>
              <li><a href="/products/item">Item</a></li>
            </ol>
          </nav>
        </div>
        <div className="list-item" id="breadcrumbs-success-2">
          <nav aria-label="Breadcrumb">
            <ul>
              <li><a href="/home">Home</a> &gt;</li>
              <li><a href="/about">About Us</a> &gt;</li>
              <li>Contact</li>
            </ul>
          </nav>
        </div>
        <div className="list-item" id="breadcrumbs-success-3">
          <nav aria-labelledby="breadcrumb-label">
            <h2 id="breadcrumb-label">Breadcrumb</h2>
            <ol>
              <li><a href="/dashboard">Dashboard</a></li>
              <li><a href="/reports">Reports</a></li>
              <li>Current Report</li>
            </ol>
          </nav>
        </div>
        <div className="list-item" id="breadcrumbs-success-4">
          <nav aria-label="Breadcrumb">
            <ol>
              <li><a href="/">Start</a></li>
              <li><a href="/categories">Categories</a></li>
              <li><a href="/categories/shoes">Shoes</a></li>
            </ol>
          </nav>
        </div>
        <div className="list-item" id="breadcrumbs-success-5">
          <nav aria-label="Breadcrumb">
            <ul>
              <li><a href="/root">Root</a> /</li>
              <li><a href="/level1">Level 1</a> /</li>
              <li><a href="/level2">Level 2</a> /</li>
              <li>Level 3</li>
            </ul>
          </nav>
        </div>
        <div className="list-item" id="breadcrumbs-success-6">
          <nav aria-labelledby="breadcrumb-nav">
            <span id="breadcrumb-nav">You are here:</span>
            <ul>
              <li><a href="/">Index</a></li>
              <li><a href="/section">Section</a></li>
              <li>Subsection</li>
            </ul>
          </nav>
        </div>
      </>
    }
    itemDescription={itemDescription}
  />
);