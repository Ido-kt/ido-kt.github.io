import React, { useState } from "react";
import IssueFailure from "../../../../../layout/issueFailure";

const itemDescription = "Errors: Fake Hidden Content - Failure";

export default () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <IssueFailure
      itemContent={
        <>
          <div className="list-item" id="fake-hidden-failure-1">
            <div className="popup" aria-hidden="true">
              <p>Popup content is visible but marked hidden.</p>
              **Failure Reason:** `aria-hidden="true"` is applied, but the popup is still visible. Screen readers will ignore it, while sighted users see it.
            </div>
          </div>

          <div className="list-item" id="fake-hidden-failure-2">
            <div className="hidden-content">
              <p>Visually hidden content is accessible.</p>
              **Failure Reason:** No actual hiding mechanism (e.g., `display: none` or `aria-hidden="true"`). Content is visible to assistive technology.
            </div>
          </div>

          <div className="list-item" id="fake-hidden-failure-3">
            <div id="tab1">
              <p>Tab content is accessible without hidden attribute.</p>
              **Failure Reason:** Tabs that are inactive should use `aria-hidden="true"` or `display: none`, but this example lacks both.
            </div>
          </div>

          <div className="list-item" id="fake-hidden-failure-4">
            <div aria-hidden="false">
              <p>Tooltip content is hidden but marked as visible.</p>
              **Failure Reason:** `aria-hidden="false"` is applied, but the tooltip is visually hidden. Screen readers will announce it even though sighted users can’t see it.
            </div>
          </div>

          <div className="list-item" id="fake-hidden-failure-5">
            <div className={`modal ${isOpen ? "visible" : ""}`} aria-hidden="true">
              <p>Modal content is visible but marked as hidden.</p>
              **Failure Reason:** `aria-hidden="true"` should only be used when the modal is truly hidden. If it's visible, the attribute should be `false`.
            </div>
          </div>

          <div className="list-item" id="fake-hidden-failure-6">
            <ul className={isOpen ? "" : "hidden"}>
              <li>Option 1</li>
              <li>Option 2</li>
              **Failure Reason:** Class-based hiding methods (`hidden`) do not necessarily remove content from screen readers. Proper `aria-hidden="true"` or `display: none` should be used.
            </ul>
          </div>

          <div className="list-item" id="fake-hidden-failure-7">
            <div style={{ position: "absolute", left: "-9999px" }}>
              <p>Content is visually hidden but still announced.</p>
              **Failure Reason:** Moving content off-screen does not hide it from screen readers, so it remains accessible.
            </div>
          </div>

          <div className="list-item" id="fake-hidden-failure-8">
            <div style={{ opacity: 0 }}>
              <p>Invisible content is still detected.</p>
              **Failure Reason:** Opacity does not affect accessibility, so screen readers still read this content.
            </div>
          </div>

          <div className="list-item" id="fake-hidden-failure-9">
            <div style={{ height: "0px", overflow: "hidden" }}>
              <p>Content is collapsed but not removed.</p>
              **Failure Reason:** Even though the height is `0`, screen readers can still access this content.
            </div>
          </div>

          <div className="list-item" id="fake-hidden-failure-10">
            <div style={{ transform: "scale(0)" }}>
              <p>Scaled to zero but still present.</p>
              **Failure Reason:** `scale(0)` makes it visually disappear but does not remove it from the accessibility tree.
            </div>
          </div>

          <div className="list-item" id="fake-hidden-failure-11">
            <div style={{ width: "0px", height: "0px" }}>
              <p>No visible space, but still accessible.</p>
              **Failure Reason:** Content with zero width and height is still read by assistive tech.
            </div>
          </div>

          <div className="list-item" id="fake-hidden-failure-12">
            <button
              onClick={() => {
                document.getElementById("modal").style.display = "none";
              }}
            >
              Close Modal
            </button>
            <div id="modal">
              <p>Modal content is hidden visually but not for assistive tech.</p>
              **Failure Reason:** `display: none` is applied dynamically, but `aria-hidden="true"` should also be added to ensure full removal from screen readers.
            </div>
          </div>
        </>
      }
      itemDescription={itemDescription}
    />
  );
};