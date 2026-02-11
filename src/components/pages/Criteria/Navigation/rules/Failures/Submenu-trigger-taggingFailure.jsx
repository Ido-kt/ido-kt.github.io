import React from "react";
import IssueFailure from "../../../../../layout/issueFailure";

const itemDescription = "Navigation: Submenu Trigger Tagging - Failure";

const SubmenuTriggerTaggingFailure = () => (
  <IssueFailure
    itemContent={
      <>
        <div className="list-item" id="submenu-trigger-tagging-failure-1">
          <nav>
            <ul>
              <li>
                <a href="#">Products</a>
                <ul>
                  <li><a href="#">Product 1</a></li>
                  <li><a href="#">Product 2</a></li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
        <div className="list-item" id="submenu-trigger-tagging-failure-2">
          <nav>
            <ul>
              <li>
                <button>Services</button>
                <ul>
                  <li><a href="#">Service 1</a></li>
                  <li><a href="#">Service 2</a></li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
        <div className="list-item" id="submenu-trigger-tagging-failure-3">
          <nav>
            <ul>
              <li>
                <a href="#" aria-expanded="false">About</a>
                <ul>
                  <li><a href="#">Team</a></li>
                  <li><a href="#">History</a></li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
        <div className="list-item" id="submenu-trigger-tagging-failure-4">
          <nav>
            <ul>
              <li>
                <button aria-haspopup="true">Menu</button>
                <ul>
                  <li><a href="#">Item 1</a></li>
                  <li><a href="#">Item 2</a></li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
        <div className="list-item" id="submenu-trigger-tagging-failure-5">
          <nav>
            <ul>
              <li>
                <div>Categories</div>
                <ul>
                  <li><a href="#">Category 1</a></li>
                  <li><a href="#">Category 2</a></li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
        <div className="list-item" id="submenu-trigger-tagging-failure-6">
          <nav>
            <ul>
              <li>
                <span>More</span>
                <ul>
                  <li><a href="#">Option 1</a></li>
                  <li><a href="#">Option 2</a></li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </>
    }
    itemDescription={itemDescription}
    helpText="Submenu trigger buttons/links must be properly tagged with aria-haspopup and aria-expanded attributes to indicate to assistive technology that they control a submenu and its current state."
    fixSteps={[
      "Add aria-haspopup='true' to the link/button that triggers the submenu",
      "Add aria-expanded='false' when the submenu is closed",
      "Update aria-expanded to 'true' when the submenu is open",
      "Ensure the trigger element is a button or link, not a div or span",
      "Test with screen readers to verify submenu triggers are properly announced"
    ]}
  />
);

export default SubmenuTriggerTaggingFailure;

