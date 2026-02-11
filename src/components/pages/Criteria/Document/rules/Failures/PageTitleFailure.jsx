import React from "react";
import IssueFailure from "../../../../../layout/issueFailure";

const itemDescription = "Document: Page Title - Failure";

export default () => (
  <IssueFailure
    itemContent={
      <>
        
        <div className="list-item" id="page-title-failure-1">
          <head>
            <title></title>
          </head>
        </div>
    

        <div className="list-item" id="page-title-failure-2">
          <head>
            <title>Untitled Document</title>
          </head>
        </div>
    

        <div className="list-item" id="page-title-failure-3">
          <head>
            <title>Document</title>
          </head>
        </div>
    

        <div className="list-item" id="page-title-failure-4">
          <head>
            <title>New Page</title>
          </head>
        </div>
    

        <div className="list-item" id="page-title-failure-5">
          <head>
            <title>Welcome</title>
          </head>
        </div>
    

        <div className="list-item" id="page-title-failure-6">
          <head>
            <title>Page</title>
          </head>
        </div>
    
      </>
    }
    itemDescription={itemDescription}
  />
);
