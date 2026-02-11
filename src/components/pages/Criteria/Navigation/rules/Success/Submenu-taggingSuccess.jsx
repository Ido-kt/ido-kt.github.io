import React from "react";
import IssueSuccess from "../../../../../layout/issueSuccess";

const itemDescription = "Navigation: Submenu Tagging - Success";

const SubmenuTaggingSuccess = () => (
  <IssueSuccess
    itemContent={
      <>
        <div className="list-item" id="submenu-tagging-success-1">
          <nav>
            <ul>
              <li>
                <a href="#" aria-haspopup="true">Products</a>
                <div className="sub-menu" role="region" aria-label="Sub-menu">
                  <ul>
                    <li><a href="#">Product 1</a></li>
                    <li><a href="#">Product 2</a></li>
                  </ul>
                </div>
              </li>
            </ul>
          </nav>
        </div>
        <div className="list-item" id="submenu-tagging-success-2">
          <nav>
            <ul>
              <li>
                <button aria-haspopup="true">Services</button>
                <ul className="submenu" role="region" aria-label="Sub-menu">
                  <li><a href="#">Service 1</a></li>
                  <li><a href="#">Service 2</a></li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
        <div className="list-item" id="submenu-tagging-success-3">
          <nav>
            <ul>
              <li>
                <a href="#" aria-haspopup="true">About</a>
                <div role="region" aria-label="Sub-menu">
                  <ul>
                    <li><a href="#">Team</a></li>
                    <li><a href="#">History</a></li>
                  </ul>
                </div>
              </li>
            </ul>
          </nav>
        </div>
        <div className="list-item" id="submenu-tagging-success-4">
          <nav>
            <ul>
              <li>
                <button aria-haspopup="true">Menu</button>
                <ul role="region" aria-label="Sub-menu">
                  <li><a href="#">Item 1</a></li>
                  <li><a href="#">Item 2</a></li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
        <div className="list-item" id="submenu-tagging-success-5">
          <nav>
            <ul>
              <li>
                <a href="#" aria-haspopup="true">Categories</a>
                <div className="dropdown" role="region" aria-label="Sub-menu">
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
    helpText="Submenus should be labeled with role='region' and aria-label='Sub-menu' to provide clear context to screen reader users. This helps users understand when they enter or leave a submenu region, preventing disorientation in complex menu structures."
    bestPractices={[
      "Add role='region' to submenu container elements",
      "Add aria-label='Sub-menu' to clearly identify the region",
      "Ensure the entire submenu content is within the labeled region",
      "Test with screen readers to verify region announcements",
      "Verify screen readers announce when entering/leaving submenu regions"
    ]}
  />
);

export default SubmenuTaggingSuccess;

