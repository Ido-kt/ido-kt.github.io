import React, { useEffect } from "react";
import IssueSuccess from "../../../../../layout/issueSuccess";

const itemDescription = "Errors: Load Autofocus - Success";

export default () => (
  <IssueSuccess
    itemContent={
      <>
        <div className="list-item" id="loadAutofocus-success-1">
          <form>
            <input type="text" name="name" placeholder="Enter your name" />
          </form>
        </div>
        <div className="list-item" id="loadAutofocus-success-2">
          <form>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
          </form>
        </div>
        <div className="list-item" id="loadAutofocus-success-3">
          <form>
            <textarea placeholder="Leave a comment" id="comment"></textarea>
          </form>
        </div>
        <div className="list-item" id="loadAutofocus-success-4">
          {(() => {
            useEffect(() => {
              const button = document.getElementById("submitButton");
              button.focus(); // Example of managing focus dynamically.
            }, []);
          })()}
          <button id="submitButton" type="submit">
            Submit
          </button>
        </div>
        <div className="list-item" id="loadAutofocus-success-5">
          <form>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" />
          </form>
        </div>
        <div className="list-item" id="loadAutofocus-success-6">
          <form>
            <input
              type="url"
              name="website"
              placeholder="Enter website URL"
              id="urlInput"
            />
            {(() => {
              useEffect(() => {
                const input = document.getElementById("urlInput");
                input.addEventListener("focus", () => console.log("Focused!"));
              }, []);
            })()}
          </form>
        </div>
      </>
    }
    itemDescription={itemDescription}
  />
);