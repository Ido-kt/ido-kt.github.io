import React from "react";
import IssueFailure from "../../../../../layout/issueFailure";

const itemDescription = "Navigation: Submenu Tagging - Failure";

const SubmenuTaggingFailure = () => (
  <IssueFailure
    itemContent={
      <>
        <div className="list-item" id="submenu-tagging-failure-1">
          <nav>
            <ul>
              <li>
                <a href="#" aria-haspopup="true">Products</a>
                <div className="sub-menu">
                  <ul>
                    <li><a href="#">Product 1</a></li>
                    <li><a href="#">Product 2</a></li>
                  </ul>
                </div>
              </li>
            </ul>
          </nav>
        </div>
        <div className="list-item" id="submenu-tagging-failure-2">
          <nav>
            <ul>
              <li>
                <button aria-haspopup="true">Services</button>
                <ul className="submenu">
                  <li><a href="#">Service 1</a></li>
                  <li><a href="#">Service 2</a></li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
        <div className="list-item" id="submenu-tagging-failure-3">
          <nav>
            <ul>
              <li>
                <a href="#">About</a>
                <div>
                  <ul>
                    <li><a href="#">Team</a></li>
                    <li><a href="#">History</a></li>
                  </ul>
                </div>
              </li>
            </ul>
          </nav>
        </div>
        <div className="list-item" id="submenu-tagging-failure-4">
          <nav>
            <ul>
              <li>
                <button>Menu</button>
                <ul>
                  <li><a href="#">Item 1</a></li>
                  <li><a href="#">Item 2</a></li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
        <div className="list-item" id="submenu-tagging-failure-5">
          <nav>
            <ul>
              <li>
                <a href="#">Categories</a>
                <div className="dropdown">
                  <a href="#">Category 1</a>
                  <a href="#">Category 2</a>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </>
    }
    itemDescription={itemDescription}
    helpText="Submenus should be properly labeled with role='region' and aria-label='Sub-menu' to provide context to screen reader users. This helps users understand when they enter or leave a submenu region."
    fixSteps={[
      "Add role='region' to the submenu container element",
      "Add aria-label='Sub-menu' to the submenu container",
      "Ensure the submenu is properly contained within the labeled region",
      "Test with screen readers to verify submenu regions are announced",
      "Verify screen readers announce when entering/leaving submenu regions"
    ]}
  />
);

export default SubmenuTaggingFailure;

