import React from "react";
import IssueFailure from "../../../../../layout/issueFailure";

const itemDescription = "Clickables: Button Roles - Failure";

export default () => (
  <IssueFailure
    itemContent={
      <>
        <div className="list-item" id="button-role-failure-1">
          <div onClick={() => alert('Submitted!')}>Submit Form</div>
          <div>❌ Failure Reason: div is used as a button but lacks `role="button"` and `tabIndex`.</div>
        </div>

        <div className="list-item" id="button-role-failure-2">
          <span onClick={() => alert('Deleted!')}>Delete Item</span>
          <div>❌ Failure Reason: span lacks `role="button"` and keyboard accessibility (`onKeyDown`, `tabIndex`).</div>
        </div>

        <div className="list-item" id="button-role-failure-3">
          <a href="#">Learn More</a>
          <div>❌ Failure Reason: a tag with empty `href="#"` functions like a button but lacks `role="button"`.</div>
        </div>

        <div className="list-item" id="button-role-failure-4">
          <div onClick={() => alert('Added to Cart!')} tabIndex={0}>
            Add to Cart
          </div>
          <div>❌ Failure Reason: div has `tabIndex` but lacks `role="button"`, causing confusion for screen readers.</div>
        </div>

        <div className="list-item" id="button-role-failure-5">
          <span onClick={() => alert('Favorited!')} tabIndex={0}>
            ❤️ Add to Favorites
          </span>
          <div>❌ Failure Reason: span has `tabIndex` but is missing `role="button"`, making it inaccessible.</div>
        </div>

        <div className="list-item" id="button-role-failure-6">
          <a href="javascript:void(0);" onClick={() => alert('Shared!')}>
            Share Post
          </a>
          <div>❌ Failure Reason: a uses `javascript:void(0);` instead of a proper button or `role="button"`.</div>
        </div>

        <div className="list-item" id="button-role-failure-7">
          <div onClick={() => alert('Settings Updated!')}>
            Update Settings
          </div>
          <div>❌ Failure Reason: A div is used for interaction but is missing `role="button"` and `tabIndex`.</div>
        </div>

        <div className="list-item" id="button-role-failure-8">
          <span onClick={() => alert('Subscribed!')}>
            Subscribe Now
          </span>
          <div>❌ Failure Reason: span is used as a button but lacks semantic meaning and accessibility features.</div>
        </div>

        <div className="list-item" id="button-role-failure-9">
          <a href="#" onClick={() => alert('Download Started!')}>
            Download
          </a>
          <div>❌ Failure Reason: a should have `role="button"` and `tabIndex={0}` if used as a button.</div>
        </div>

        <div className="list-item" id="button-role-failure-10">
          <div tabIndex={0} onClick={() => alert('Logged Out!')}>
            Logout
          </div>
          <div>❌ Failure Reason: div is focusable with `tabIndex`, but it should use `role="button"` for clarity.</div>
        </div>

        <div className="list-item" id="button-role-failure-11">
          <a href="javascript:void(0);" onClick={() => alert('Liked!')}>
            👍 Like Post
          </a>
          <div>❌ Failure Reason: a with `javascript:void(0);` is a misused button replacement.</div>
        </div>

        <div className="list-item" id="button-role-failure-12">
          <div onClick={() => alert('Profile Updated!')} aria-hidden="true">
            Save Changes
          </div>
          <div>❌ Failure Reason: `aria-hidden="true"` makes this button invisible to screen readers, breaking accessibility.</div>
        </div>
        <div class="d-f fd-c bcssr-ubr22j epbl8rw1"><h3 class="wb m-0 text-ellipsis-multiline fw-sb bcssr-11y8s9c e804vwf1" >Benefits</h3><div class="wb m-0 text-ellipsis-multiline editor-content bcssr-1g0sanh e804vwf0" ><p>Wir bieten diverse Leistungen für unsere Mitarbeiter:innen</p></div></div>

        <div class="sc-kuACkN sc-hWWBcw sc-uZIaX kDBgUW ktGlFr bnwRPv"><p id=":r5:" class="sc-KXCwU FVZcD">Skip to main menu</p><button scale="primary" aria-labelledby=":r5:" role="link" class="sc-cGXZpB kksyIA"><span>Enter</span><i aria-hidden="true" role="presentation" class="sc-ldgYGE gMHHqG"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m8 4 8 8-8 8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></i></button></div>
        <div>❌ Failure Reason: `button with the role=link` Dashboard Skip links.</div>

      </>
    }
    itemDescription={itemDescription}
  />
);