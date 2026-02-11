import React from "react";
import IssueSuccess from "../../../../../layout/issueSuccess";

const itemDescription = "Graphics : SVG Content - Success";

export default () => (
  <IssueSuccess
    itemContent={
      <>
        <div className="list-item" id="svgContent-success-1">
          <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
          </svg>
        </div>
        <div className="list-item" id="svgContent-success-2">
          <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M19 13H5v-2h14v2z" />
          </svg>
        </div>
        <div className="list-item" id="svgContent-success-3">
          <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M12 4.54L4.54 12 12 19.46 19.46 12 12 4.54z" />
          </svg>
        </div>
        <div className="list-item" id="svgContent-success-4">
          <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M21 11.5L14.5 2 8 11.5h5v9H7v-7H3v7H0v-9H1L7 1l7 10h-5z" />
          </svg>
        </div>
        <div className="list-item" id="svgContent-success-5">
          <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M12 22c5.52 0 10-4.48 10-10S17.52 2 12 2 2 6.48 2 12s4.48 10 10 10z" />
          </svg>
        </div>
        <div className="list-item" id="svgContent-success-6">
          <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
          </svg>
        </div>
      </>
    }
    itemDescription={itemDescription}
  />
);