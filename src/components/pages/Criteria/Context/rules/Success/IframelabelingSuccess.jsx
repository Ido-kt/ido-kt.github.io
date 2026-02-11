import React from "react";
import IssueSuccess from "../../../../../layout/issueSuccess";

const itemDescription = "context: Iframe Labeling - Success";

export default () => (
  <IssueSuccess
    itemContent={
      <>
        <div className="list-item" id="iframe-labeling-success-1">
          <iframe src="https://www.youtube.com/embed/4Zs1j26OQTM?si=tIZadzCKd-9aewaV" aria-label="YouTube tutorial video on Web Development"></iframe>
        </div>
        <div className="list-item" id="iframe-labeling-success-2">
          <iframe src="https://www.youtube.com/embed/TdBSoy9F9NA?si=OjTdIpjuOo63qYmk" aria-label="YouTube tutorial video on Accessibility Testing"></iframe>
        </div>
        <div className="list-item" id="iframe-labeling-success-3">
          <iframe src="https://www.youtube.com/embed/y_Hs1bgkT5Q?si=k2DYxrxcjnMt6IVM" aria-label="YouTube tutorial video on JavaScript Basics"></iframe>
        </div>
        <div className="list-item" id="iframe-labeling-success-4">
          <iframe src="https://www.youtube.com/embed/N6y5DdEHNYA?si=NDNxo95M4fCYIfu5" aria-label="YouTube tutorial video on HTML Forms"></iframe>
        </div>
        <div className="list-item" id="iframe-labeling-success-5">
          <iframe src="https://www.youtube.com/embed/rYyjY-A7kE0?si=EJl6DvHGhgy3fLIm" aria-label="YouTube tutorial video on CSS Grid"></iframe>
        </div>
        <div className="list-item" id="iframe-labeling-success-6">
          <iframe src="https://www.youtube.com/embed/jfKfPfyJRdk?si=1Wr0bo39Yr8LNNzX" aria-label="YouTube tutorial video on React Components"></iframe>
        </div>
      </>
    }
    itemDescription={itemDescription}
  />
);
