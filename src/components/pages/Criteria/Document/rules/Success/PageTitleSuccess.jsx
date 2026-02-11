import React from "react";
import IssueSuccess from "../../../../../layout/issueSuccess";

const itemDescription = "Document: Page Title - Success";

export default () => (
  <IssueSuccess
    itemContent={
      <>
        
        <div className="list-item" id="page-title-success-1">
          <head>
            <title>Home - Accessible Website</title>
          </head>
        </div>
    

        <div className="list-item" id="page-title-success-2">
          <head>
            <title>About Us - Learn More About Our Mission</title>
          </head>
        </div>
    

        <div className="list-item" id="page-title-success-3">
          <head>
            <title>Contact Us - Reach Out Today</title>
          </head>
        </div>
    

        <div className="list-item" id="page-title-success-4">
          <head>
            <title>Services - Explore Our Offerings</title>
          </head>
        </div>
    

        <div className="list-item" id="page-title-success-5">
          <head>
            <title>Blog - Insights and Updates</title>
          </head>
        </div>
    

        <div className="list-item" id="page-title-success-6">
          <head>
            <title>FAQs - Common Questions Answered</title>
          </head>
        </div>
    
      </>
    }
    itemDescription={itemDescription}
  />
);
