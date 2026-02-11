import React from "react";
import IssueFailure from "../../../../../layout/issueFailure";

const itemDescription = "Errors: Marquee - Failure";

export default () => (
  <IssueFailure
    itemContent={
      <>
        <div className="list-item" id="marquee-failure-1">
          <marquee>Scrolling text using deprecated marquee element.</marquee>
        </div>
        <div className="list-item" id="marquee-failure-2">
          <marquee behavior="alternate">Alternating scrolling text.</marquee>
        </div>
        <div className="list-item" id="marquee-failure-3">
          <marquee scrollamount="10">Fast scrolling text.</marquee>
        </div>
        <div className="list-item" id="marquee-failure-4">
          <marquee direction="up">Vertical scrolling text.</marquee>
        </div>
        <div className="list-item" id="marquee-failure-5">
          <marquee width="100%" loop="infinite">
            Continuous scrolling text.
          </marquee>
        </div>
        <div className="list-item" id="marquee-failure-6">
          <marquee bgcolor="yellow">Marquee with a background color.</marquee>
        </div>
      </>
    }
    itemDescription={itemDescription}
  />
);