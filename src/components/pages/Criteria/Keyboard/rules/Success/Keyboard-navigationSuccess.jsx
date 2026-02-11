import React from "react";
import IssueSuccess from "../../../../../layout/issueSuccess";

const itemDescription = "keyboard : Keyboard Navigation - Success";

export default () => (
  <IssueSuccess
    itemContent={
      <>
        <h1>Keyboard Navigation</h1>
        <h2>Success Examples</h2>

        <div className="list-item" id="keyboardNavigation-success-1">
          <button>Clickable Button</button>
        </div>
        <div className="list-item" id="keyboardNavigation-success-2">
          <a href="/example">Accessible Link</a>
        </div>
        <div className="list-item" id="keyboardNavigation-success-3">
          <input type="text" placeholder="Text Input" />
        </div>
        <div className="list-item" id="keyboardNavigation-success-4">
          <select>
            <option>Option 1</option>
            <option>Option 2</option>
          </select>
        </div>
        <div className="list-item" id="keyboardNavigation-success-5">
          <textarea placeholder="Textarea Input"></textarea>
        </div>
        <div className="list-item" id="keyboardNavigation-success-6">
          <div role="button" tabIndex="0">Custom Button Role</div>
        </div>

        <div className="list-item" id="keyboardNavigation-success-7">
          <h3 id="success-rule-1">Button element - Keyboard-navigable</h3>
          <button id="success-1">Button 1</button>
        </div>

        <div className="list-item" id="keyboardNavigation-success-8">
          <h3 id="success-rule-2">Link with href - Keyboard-navigable</h3>
          <a href="#" role="main" id="success-2">Link 1</a>
        </div>

        <div className="list-item" id="keyboardNavigation-success-9">
          <h3 id="success-rule-3">Div with tabindex - Keyboard-navigable</h3>
          <div tabindex="0" id="success-3">Div Element</div>
        </div>

        <div className="list-item" id="keyboardNavigation-success-10">
          <h3 id="success-rule-4">Span with tabindex - Keyboard-navigable</h3>
          <span tabindex="0" id="success-4">Span Element</span>
        </div>

        <div className="list-item" id="keyboardNavigation-success-11">
          <h3 id="success-rule-5">Anchor tag without href but with tabindex</h3>
          <a tabindex="0" id="success-5">Clickable Anchor</a>
        </div>

        <div className="list-item" id="keyboardNavigation-success-12">
          <h3 id="success-rule-6">Image inside link with href</h3>
          <a href="#" id="success-6">
            <img
              height="80px"
              src="https://pixabay.com/get/g1d35002eddc77ec912438c68d94c3c5e81eea9ebdc08efe519c153ce0321ac859b0f397ffeb96ddc8f333d7d153da709_1280.png"
              alt="Sample Image"
            />
          </a>
        </div>
      </>
    }
    itemDescription={itemDescription}
  />
);
