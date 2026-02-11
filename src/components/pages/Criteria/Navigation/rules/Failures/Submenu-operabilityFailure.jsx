import React from "react";
import IssueFailure from "../../../../../layout/issueFailure";

const itemDescription = "Navigation: Submenu Operability - Failure";

const SubmenuOperabilityFailure = () => (
  <IssueFailure
    itemContent={
      <>
        <div className="list-item" id="submenu-operability-failure-1">
          <nav>
            <ul>
              <li>
                <a href="/products">Products</a>
                <ul>
                  <li><a href="#">Product 1</a></li>
                  <li><a href="#">Product 2</a></li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
        <div className="list-item" id="submenu-operability-failure-2">
          <nav>
            <ul>
              <li>
                <a href="/services" onClick={(e) => e.preventDefault()}>
                  Services
                </a>
                <ul>
                  <li><a href="#">Service 1</a></li>
                  <li><a href="#">Service 2</a></li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
        <div className="list-item" id="submenu-operability-failure-3">
          <nav>
            <ul>
              <li>
                <div tabIndex="0">Menu</div>
                <ul>
                  <li><a href="#">Item 1</a></li>
                  <li><a href="#">Item 2</a></li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
        <div className="list-item" id="submenu-operability-failure-4">
          <nav>
            <ul>
              <li>
                <span tabIndex="0">Categories</span>
                <ul>
                  <li><a href="#">Category 1</a></li>
                  <li><a href="#">Category 2</a></li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
        <div className="list-item" id="submenu-operability-failure-5">
          <nav>
            <ul>
              <li>
                <a href="/about">About</a>
                <ul>
                  <li><a href="#">Team</a></li>
                  <li><a href="#">History</a></li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </>
    }
    itemDescription={itemDescription}
    helpText="Submenus must be operable using the Enter key. When a menu item with a submenu is focused and Enter is pressed, the submenu should open. Pressing Enter again should close it. If the trigger is a link, its navigation should be disabled to allow submenu operation."
    fixSteps={[
      "Make submenu triggers keyboard operable with Enter key",
      "If trigger is a link, prevent default navigation behavior",
      "Add a screen-reader-only link within the submenu to the original destination",
      "Ensure Enter key toggles submenu open/close state",
      "Test keyboard navigation to verify submenu operability"
    ]}
  />
);

export default SubmenuOperabilityFailure;

