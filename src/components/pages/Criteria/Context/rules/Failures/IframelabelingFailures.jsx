import React from "react";
import IssueFailure from "../../../../../layout/issueFailure";

const itemDescription = "context: Iframe Labeling - Failure";

export default () => (
  <IssueFailure
    itemContent={
      <>
        <div className="list-item" id="iframe-labeling-failure-1">
          <iframe src="https://www.youtube.com/embed/4Zs1j26OQTM?si=tIZadzCKd-9aewaV"></iframe>
        </div>
        <div className="list-item" id="iframe-labeling-failure-2">
          <iframe src="https://www.youtube.com/embed/TdBSoy9F9NA?si=OjTdIpjuOo63qYmk"></iframe>
        </div>
        <div className="list-item" id="iframe-labeling-failure-3">
          <iframe src="https://www.youtube.com/embed/y_Hs1bgkT5Q?si=k2DYxrxcjnMt6IVM"></iframe>
        </div>
        <div className="list-item" id="iframe-labeling-failure-4">
          <iframe src="https://www.youtube.com/embed/N6y5DdEHNYA?si=NDNxo95M4fCYIfu5"></iframe>
        </div>
        <div className="list-item" id="iframe-labeling-failure-5">
          <iframe src="https://www.youtube.com/embed/rYyjY-A7kE0?si=EJl6DvHGhgy3fLIm"></iframe>
        </div>
        <div className="list-item" id="iframe-labeling-failure-6">
          <iframe src="https://www.youtube.com/embed/jfKfPfyJRdk?si=1Wr0bo39Yr8LNNzX"></iframe>
        </div>
      </>
    }
    itemDescription={itemDescription}
  />
);
