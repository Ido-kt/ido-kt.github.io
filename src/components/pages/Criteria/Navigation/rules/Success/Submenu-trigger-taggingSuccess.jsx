import React from "react";
import IssueSuccess from "../../../../../layout/issueSuccess";

const itemDescription = "Navigation: Submenu Trigger Tagging - Success";

const SubmenuTriggerTaggingSuccess = () => (
  <IssueSuccess
    itemContent={
      <>
        <div className="list-item" id="submenu-trigger-tagging-success-1">
          <nav>
            <ul>
              <li>
                <a href="#" aria-expanded="false" aria-haspopup="true">
                  Products
                </a>
                <ul>
                  <li><a href="#">Product 1</a></li>
                  <li><a href="#">Product 2</a></li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
        <div className="list-item" id="submenu-trigger-tagging-success-2">
          <nav>
            <ul>
              <li>
                <button aria-expanded="true" aria-haspopup="true">
                  Services
                </button>
                <ul>
                  <li><a href="#">Service 1</a></li>
                  <li><a href="#">Service 2</a></li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
        <div className="list-item" id="submenu-trigger-tagging-success-3">
          <nav>
            <ul>
              <li>
                <a href="#" aria-expanded="false" aria-haspopup="true" aria-controls="about-submenu">
                  About
                </a>
                <ul id="about-submenu">
                  <li><a href="#">Team</a></li>
                  <li><a href="#">History</a></li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
        <div className="list-item" id="submenu-trigger-tagging-success-4">
          <nav>
            <ul>
              <li>
                <button aria-expanded="false" aria-haspopup="true" aria-controls="menu-submenu">
                  Menu
                </button>
                <ul id="menu-submenu">
                  <li><a href="#">Item 1</a></li>
                  <li><a href="#">Item 2</a></li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
        <div className="list-item" id="submenu-trigger-tagging-success-5">
          <nav>
            <ul>
              <li>
                <button aria-expanded="true" aria-haspopup="true">
                  Categories
                </button>
                <ul>
                  <li><a href="#">Category 1</a></li>
                  <li><a href="#">Category 2</a></li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </>
    }
    itemDescription={itemDescription}
    helpText="Submenu triggers should have aria-haspopup='true' to indicate they control a submenu, and aria-expanded should reflect the current state (true when open, false when closed)."
    bestPractices={[
      "Always add aria-haspopup='true' to submenu trigger elements",
      "Use aria-expanded='false' when submenu is closed",
      "Update aria-expanded to 'true' when submenu is open",
      "Use aria-controls to reference the submenu ID when possible",
      "Ensure triggers are interactive elements (button or link)"
    ]}
  />
);

export default SubmenuTriggerTaggingSuccess;

