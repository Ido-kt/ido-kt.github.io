import React from "react";
import IssueFailure from "../../../../../layout/issueFailure";

const itemDescription = "Navigation: Avoid role menu/menubar - Failure";

export default () => (
  <IssueFailure
    itemContent={
      <>
        {/* Failure Example 1 */}
        <div className="list-item" id="menu-avoid-failure-1">
          <nav role="menu">
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
            </ul>
          </nav>
        </div>

        {/* Failure Example 2 */}
        <div className="list-item" id="menu-avoid-failure-2">
          <header>
            <nav role="menu" aria-label="Header Menu">
              <a href="#services">Services</a>
              <a href="#contact">Contact</a>
            </nav>
          </header>
        </div>

        {/* Failure Example 3 */}
        <div className="list-item" id="menu-avoid-failure-3">
          <footer>
            <nav role="menu">
              <a href="#privacy">Privacy</a>
              <a href="#terms">Terms</a>
            </nav>
          </footer>
        </div>

        {/* Failure Example 4 */}
        <div className="list-item" id="menu-bar-avoid-failure-4">
          <nav role="menubar" aria-label="Main Menubar">
            <ul>
              <li><a href="#products">Products</a></li>
              <li><a href="#blog">Blog</a></li>
            </ul>
          </nav>
        </div>

        {/* Failure Example 5 */}
        <div className="list-item" id="menu-bar-avoid-failure-5">
          <nav role="menubar">
            <ul>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#testimonials">Testimonials</a></li>
            </ul>
          </nav>
        </div>

        {/* Failure Example 6 */}
        <div className="list-item" id="menu-bar-avoid-failure-6">
          <nav role="menubar" aria-label="Footer Menubar">
            <ul>
              <li><a href="#faq">FAQ</a></li>
              <li><a href="#support">Support</a></li>
            </ul>
          </nav>
        </div>

        {/* Failure Example 7 */}
        <div className="list-item" id="menu-bar-avoid-failure-7">
          <div role="menu" aria-label="Main navigation">
            <div role="menuitem" aria-haspopup="true" tabindex="0" aria-expanded="false" id="fileMenuButton" onclick="toggleMenu('fileMenu')">File</div>
            <div id="fileMenu" role="menu" aria-labelledby="fileMenuButton" style={{ display: "none" }}>
              <div role="menuitem" tabindex="-1" onclick="newFile()">New</div>
              <div role="menuitem" tabindex="-1" onclick="openFile()">Open</div>
              <div role="menuitem" tabindex="-1" onclick="saveFile()">Save</div>
            </div>
          </div>
        </div>

        {/* Failure Example 8 */}
        <div className="list-item" id="menu-bar-avoid-failure-8">
          <ul role="menu" aria-label="Main Menu">
            <li role="menuitem"><a href="#home">Home</a></li>
            <li role="menuitem"><a href="#about">About</a></li>
          </ul>
        </div>

        {/* Failure Example 9 */}
        <div className="list-item" id="menu-bar-avoid-failure-9">
          <div role="menubar" aria-label="Navigation">
            <button role="menuitem">Dashboard</button>
            <button role="menuitem">Reports</button>
            <button role="menuitem">Settings</button>
          </div>
        </div>

        {/* Failure Example 10 */}
        <div className="list-item" id="menu-bar-avoid-failure-10">
          <section role="menu" aria-label="Sidebar Menu">
            <div role="menuitem" tabindex="0">Overview</div>
            <div role="menuitem" tabindex="0">Details</div>
          </section>
        </div>

        {/* Failure Example 11 */}
        <div className="list-item" id="menu-bar-avoid-failure-11">
          <footer role="menu" aria-label="Footer Links">
            <div role="menuitem"><a href="#privacy">Privacy Policy</a></div>
            <div role="menuitem"><a href="#terms">Terms of Service</a></div>
          </footer>
        </div>

        {/* Failure Example 12 */}
        <div className="list-item" id="menu-bar-avoid-failure-12">
          <aside role="menu" aria-label="Side Navigation">
            <nav role="menubar">
              <a role="menuitem" href="#help">Help</a>
              <a role="menuitem" href="#support">Support</a>
            </nav>
          </aside>
        </div>
      </>
    }
    itemDescription={itemDescription}
  />
);