import React from "react";
import IssueFailure from "../../../../../layout/issueFailure";

const itemDescription = "keyboard : Keyboard Navigation - Failure";
export default () => (
    <IssueFailure
      itemContent={
        <>
          <h1>Keyboard Navigation</h1>  
          <div className="list-item" id="keyboardNavigation-failure-1">
            <button style={{ pointerEvents: "none" }}>Non-clickable Button</button>
          </div>
          <div className="list-item" id="keyboardNavigation-failure-2">
            <a href="/example" tabIndex="-1">Non-focusable Link</a>
          </div>
          <div className="list-item" id="keyboardNavigation-failure-3">
            <div onClick={() => alert("No tabindex")}>Interactive Div Without Tabindex</div>
          </div>
          <div className="list-item" id="keyboardNavigation-failure-4">
            <input type="text" style={{ display: "none" }} />
          </div>
          <div className="list-item" id="keyboardNavigation-failure-5">
            <select disabled>
              <option>Option 1</option>
            </select>
          </div>
          <div className="list-item" id="keyboardNavigation-failure-6">
            <textarea readOnly tabIndex="-1">Non-editable Textarea</textarea>
          </div>
  
          <div className="list-item" id="keyboardNavigation-failure-7">
            <h3 id="failure-rule-1">Div without tabindex - Not keyboard-navigable</h3>
            <div id="failure-1">Div Element without tabindex</div>
          </div>
  
          <div className="list-item" id="keyboardNavigation-failure-8">
            <h3 id="failure-rule-2">Span without tabindex - Not keyboard-navigable</h3>
            <span id="failure-2">Span Element without tabindex</span>
          </div>
  
          <div className="list-item" id="keyboardNavigation-failure-9">
            <h3 id="failure-rule-3">Anchor tag without href or tabindex</h3>
            <a id="failure-3">Non-clickable Anchor</a>
          </div>
  
          <div className="list-item" id="keyboardNavigation-failure-10">
            <h3 id="failure-rule-4">Button element inside a non-focusable div</h3>
            <div id="failure-4">
              <button>Button inside Div</button>
            </div>
          </div>
  
          <div className="list-item" id="keyboardNavigation-failure-11">
            <h3 id="failure-rule-5">Image inside anchor tag without href</h3>
            <a id="failure-5">
              <img
                height="80px"
                src="https://pixabay.com/get/ge39cf152dd520d0797750b8e7bb589bc74a10696eb92811c713184a443795cf96238686b48a78a5ea4bdb5a11f323d1a_1280.png"
                alt="Image without href anchor"
              />
            </a>
          </div>
  
          <div className="list-item" id="keyboardNavigation-failure-12">
            <h3 id="failure-rule-6">I tag used as button without tabindex</h3>
            <i id="failure-6" className="icon-button">Icon Button</i>
          </div>
          <div className="list-item" id="interactive-not-tabbable-failure-1">
          <button style={{ display: "none" }}>I'm hidden and not keyboard accessible</button>
        </div>

        <div className="list-item" id="interactive-not-tabbable-failure-2">
          <a>No href, not focusable</a>
        </div>

        <div className="list-item" id="interactive-not-tabbable-failure-3">
          <div role="button">No tabindex, can't receive focus</div>
        </div>

        <div className="list-item" id="interactive-not-tabbable-failure-4">
          <span role="checkbox" aria-checked="false">No tabindex, can't be toggled</span>
        </div>

        <div className="list-item" id="interactive-not-tabbable-failure-5">
          <input type="text" disabled placeholder="Disabled input is not focusable" />
        </div>

        <div className="list-item" id="interactive-not-tabbable-failure-6">
          <div onClick={() => alert("Clicked!")}>I'm clickable but not focusable</div>
        </div>
        </>
      }
      itemDescription={itemDescription}
    />
  );