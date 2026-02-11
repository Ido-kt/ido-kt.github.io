import React from "react";
import IssueSuccess from "../../../../../layout/issueSuccess";

const itemDescription = "Navigation: Submenu Operability - Success";

const SubmenuOperabilitySuccess = () => (
  <IssueSuccess
    itemContent={
      <>
        <div className="list-item" id="submenu-operability-success-1">
          <nav>
            <ul>
              <li>
                <button
                  aria-expanded="false"
                  aria-haspopup="true"
                  onClick={(e) => {
                    e.preventDefault();
                    // Toggle submenu
                  }}
                >
                  Products
                </button>
                <ul>
                  <li><a href="/products">All Products</a></li>
                  <li><a href="#">Product 1</a></li>
                  <li><a href="#">Product 2</a></li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
        <div className="list-item" id="submenu-operability-success-2">
          <nav>
            <ul>
              <li>
                <a
                  href="#"
                  aria-expanded="false"
                  aria-haspopup="true"
                  onClick={(e) => e.preventDefault()}
                >
                  Services
                </a>
                <ul>
                  <li>
                    <a href="/services">
                      <span className="sr-only">Go to </span>
                      All Services
                    </a>
                  </li>
                  <li><a href="#">Service 1</a></li>
                  <li><a href="#">Service 2</a></li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
        <div className="list-item" id="submenu-operability-success-3">
          <nav>
            <ul>
              <li>
                <button
                  aria-expanded="true"
                  aria-haspopup="true"
                  onClick={(e) => {
                    e.preventDefault();
                    // Toggle submenu
                  }}
                >
                  Menu
                </button>
                <ul>
                  <li><a href="#">Item 1</a></li>
                  <li><a href="#">Item 2</a></li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
        <div className="list-item" id="submenu-operability-success-4">
          <nav>
            <ul>
              <li>
                <button
                  aria-expanded="false"
                  aria-haspopup="true"
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      // Toggle submenu
                    }
                  }}
                >
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
    helpText="Submenus should be operable using the Enter key. When a menu item with a submenu is focused, pressing Enter should toggle the submenu open/close. If the trigger is a link, prevent its navigation and provide a link within the submenu to the original destination."
    bestPractices={[
      "Make submenu triggers keyboard operable with Enter key",
      "Prevent default link navigation when trigger is a link",
      "Include a screen-reader-only link in submenu to original destination",
      "Toggle aria-expanded state when Enter is pressed",
      "Test with keyboard-only navigation to ensure operability"
    ]}
  />
);

export default SubmenuOperabilitySuccess;

