import React from "react";
import IssueFailure from "../../../../../layout/issueFailure";

const itemDescription = "Navigation : Nested Navigation - Failure";

export default () => (
  <IssueFailure
    itemContent={
      <>
        <div className="list-item" id="nested-navigation-failure-1">
          <nav aria-label="Primary Navigation">
            <nav aria-label="Secondary Navigation">
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
              </ul>
            </nav>
          </nav>
        </div>

        <div className="list-item" id="nested-navigation-failure-2">
          <header>
            <nav aria-label="Main Menu">
              <nav aria-label="Submenu">
                <ul>
                  <li><a href="#portfolio">Portfolio</a></li>
                </ul>
              </nav>
            </nav>
          </header>
        </div>

        <div className="list-item" id="nested-navigation-failure-3">
          <footer>
            <nav aria-label="Footer Navigation">
              <nav aria-label="Inner Footer Navigation">
                <ul>
                  <li><a href="#privacy">Privacy Policy</a></li>
                </ul>
              </nav>
            </nav>
          </footer>
        </div>

        <div className="list-item" id="nested-navigation-failure-4">
          <aside>
            <nav aria-label="Sidebar Navigation">
              <nav aria-label="Sidebar Submenu">
                <ul>
                  <li><a href="#settings">Settings</a></li>
                </ul>
              </nav>
            </nav>
          </aside>
        </div>

        <div className="list-item" id="nested-navigation-failure-5">
          <div>
            <nav aria-label="Secondary Navigation">
              <nav aria-label="Subsection Navigation">
                <ul>
                  <li><a href="#news">News</a></li>
                </ul>
              </nav>
            </nav>
          </div>
        </div>

        <div className="list-item" id="nested-navigation-failure-6">
          <nav aria-label="Global Navigation">
            <nav aria-label="Local Navigation">
              <ul>
                <li><a href="#shop">Shop</a></li>
              </ul>
            </nav>
          </nav>
        </div>
      </>
    }
    itemDescription={itemDescription}
  />
);