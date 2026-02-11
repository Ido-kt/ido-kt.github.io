import React from "react";
import IssueFailure from "../../../../../layout/issueFailure";

const itemDescription =
  "menu-trigger-correct-state : Menu open/close states should be indicated to assistive technology - All Failure Cases in Menu Structure";

export default () => (
  <IssueFailure
    itemContent={
      <nav>
        <ul>
          {/* Failure Example 1: Mismatched ARIA Attributes */}
          <li className="list-item" id="menu-trigger-failure-1">
            <button aria-haspopup="true" aria-expanded="true" aria-controls="submenu1">
              Services
            </button>
            <ul id="submenu1" hidden>
              <li><a href="#">Web Design</a></li>
              <li><a href="#">Graphic Design</a></li>
              <li><a href="#">SEO</a></li>
            </ul>
          </li>

          {/* Failure Example 2: ARIA Hidden Without Dynamic Update */}
          <li className="list-item" id="menu-trigger-failure-2">
            <button aria-haspopup="menu" aria-expanded="false" aria-controls="submenu2">
              Menu
            </button>
            <ul id="submenu2" aria-hidden="true">
              <li><a href="#">Option 1</a></li>
              <li><a href="#">Option 2</a></li>
            </ul>
          </li>

          {/* Failure Example 3: Missing `aria-expanded` Update */}
          <li className="list-item" id="menu-trigger-failure-3">
            <button aria-haspopup="menu" aria-expanded="false" aria-controls="submenu3">
              Features
            </button>
            <ul id="submenu3" hidden>
              <li><a href="#">Feature 1</a></li>
              <li><a href="#">Feature 2</a></li>
            </ul>
          </li>

          {/* Failure Example 4: Static Content Without Dynamic Visibility */}
          <li className="list-item" id="menu-trigger-failure-4">
            <div aria-haspopup="menu" aria-expanded="false" aria-controls="submenu4">
              Options
            </div>
            <ul id="submenu4" role="menu">
              <li role="menuitem"><a href="#">Option A</a></li>
              <li role="menuitem"><a href="#">Option B</a></li>
            </ul>
          </li>

          {/* Failure Example 5: Incorrect Use of `aria-haspopup` */}
          <li className="list-item" id="menu-trigger-failure-5">
            <a
              href="#"
              aria-haspopup="dialog"
              aria-expanded="true"
              aria-controls="submenu5"
            >
              Account
            </a>
            <ul id="submenu5" hidden>
              <li><a href="#">Profile</a></li>
              <li><a href="#">Settings</a></li>
            </ul>
          </li>

          {/* Failure Example 6: Non-Interactive Trigger with `aria-expanded` */}
          <li className="list-item" id="menu-trigger-failure-6">
            <span aria-haspopup="menu" aria-expanded="true" aria-controls="submenu6">
              Categories
            </span>
            <ul id="submenu6" aria-hidden="false">
              <li><a href="#">Category A</a></li>
              <li><a href="#">Category B</a></li>
            </ul>
          </li>

          {/* Failure Example 7: Duplicate ARIA Controls */}
          <li className="list-item" id="menu-trigger-failure-7">
            <button aria-haspopup="menu" aria-expanded="false" aria-controls="submenu7">
              Help
            </button>
            <ul id="submenu7" hidden>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
            <ul id="submenu7" hidden>
              <li><a href="#">Documentation</a></li>
              <li><a href="#">Support</a></li>
            </ul>
          </li>

          {/* Failure Example 8: Always Visible Menu with Incorrect Attributes */}
          <li className="list-item" id="menu-trigger-failure-8">
            <button aria-haspopup="menu" aria-expanded="false" aria-controls="submenu8">
              Resources
            </button>
            <ul id="submenu8" role="menu" aria-hidden="false">
              <li role="menuitem"><a href="#">Resource 1</a></li>
              <li role="menuitem"><a href="#">Resource 2</a></li>
            </ul>
          </li>


        </ul>

      </nav>

      
    }
    itemDescription={itemDescription}
  />
);