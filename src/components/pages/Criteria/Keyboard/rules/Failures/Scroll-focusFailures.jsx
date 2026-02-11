import React from "react";
import IssueFailure from "../../../../../layout/issueFailure";

const itemDescription = "Keyboard : Scroll Focus - Failure";

export default () => (
  <IssueFailure
    itemContent={
      <>
        <div className="list-item" id="scrollFocus-failure-1">
          <button
            onClick={() => {
              document.getElementById("target1").scrollIntoView();
            }}
          >
            Scroll to Target 1
          </button>
          <div id="target1" tabIndex="-1">
            Target 1
          </div>
        </div>
        <div className="list-item" id="scrollFocus-failure-2">
          <a href="#target2">Go to Target 2</a>
          <div id="target2" tabIndex="-1">
            Target 2
          </div>
        </div>
        <div className="list-item" id="scrollFocus-failure-3">
          <button
            onClick={() => {
              const target = document.getElementById("target3");
              target.scrollIntoView();
            }}
          >
            Scroll without Focus Target 3
          </button>
          <div id="target3" tabIndex="-1">
            Target 3
          </div>
        </div>
        <div className="list-item" id="scrollFocus-failure-4">
          <a href="#target4">Navigate to Target 4</a>
          <div id="target4" tabIndex="-1">
            Target 4
          </div>
        </div>
        <div className="list-item" id="scrollFocus-failure-5">
          <button
            onClick={() => {
              document.getElementById("target5").scrollIntoView();
            }}
          >
            Smooth Scroll without Focus Target 5
          </button>
          <div id="target5" tabIndex="-1">
            Target 5
          </div>
        </div>
        <div className="list-item" id="scrollFocus-failure-6">
          <a href="#target6">Jump to Target 6</a>
          <div id="target6" tabIndex="-1">
            Target 6
          </div>
        </div>
      </>
    }
    itemDescription={itemDescription}
  />
);