import React from "react";
import IssueSuccess from "../../../../../layout/issueSuccess";

const itemDescription = "Keyboard : Scroll Focus - Success";

export default () => (
  <IssueSuccess
    itemContent={
      <>
        <div className="list-item" id="scrollFocus-success-1">
          <button
            onClick={() => {
              document.getElementById("target1").focus();
              document.getElementById("target1").scrollIntoView();
            }}
          >
            Scroll to Target 1
          </button>
          <div id="target1" tabIndex="-1">
            Target 1
          </div>
        </div>
        <div className="list-item" id="scrollFocus-success-2">
          <a
            href="#target2"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("target2").focus();
            }}
          >
            Go to Target 2
          </a>
          <div id="target2" tabIndex="-1">
            Target 2
          </div>
        </div>
        <div className="list-item" id="scrollFocus-success-3">
          <button
            onClick={() => {
              const target = document.getElementById("target3");
              target.scrollIntoView();
              target.focus();
            }}
          >
            Scroll and Focus Target 3
          </button>
          <div id="target3" tabIndex="-1">
            Target 3
          </div>
        </div>
        <div className="list-item" id="scrollFocus-success-4">
          <a
            href="#target4"
            onClick={(e) => {
              e.preventDefault();
              const target = document.getElementById("target4");
              target.scrollIntoView();
              target.focus();
            }}
          >
            Navigate to Target 4
          </a>
          <div id="target4" tabIndex="-1">
            Target 4
          </div>
        </div>
        <div className="list-item" id="scrollFocus-success-5">
          <button
            onClick={() => {
              const target = document.getElementById("target5");
              target.scrollIntoView({ behavior: "smooth" });
              target.focus();
            }}
          >
            Smooth Scroll to Target 5
          </button>
          <div id="target5" tabIndex="-1">
            Target 5
          </div>
        </div>
        <div className="list-item" id="scrollFocus-success-6">
          <a
            href="#target6"
            onClick={(e) => {
              e.preventDefault();
              const target = document.getElementById("target6");
              target.focus();
              target.scrollIntoView();
            }}
          >
            Jump to Target 6
          </a>
          <div id="target6" tabIndex="-1">
            Target 6
          </div>
        </div>
      </>
    }
    itemDescription={itemDescription}
  />
);