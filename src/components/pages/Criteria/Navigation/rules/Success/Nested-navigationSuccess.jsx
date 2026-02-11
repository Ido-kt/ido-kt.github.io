import React from "react";
import IssueSuccess from "../../../../../layout/issueSuccess";

const itemDescription = "Navigation : Nested Navigation - Success";

export default () => (
  <IssueSuccess
    itemContent={
      <>
        <div className="list-item" id="nested-navigation-success-1">
          <nav aria-label="Primary Navigation">
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </div>

        <div className="list-item" id="nested-navigation-success-2">
          <header>
            <nav aria-label="Main Menu">
              <ul>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#blog">Blog</a></li>
                <li><a href="#faq">FAQ</a></li>
                <li><a href="#support">Support</a></li>
              </ul>
            </nav>
          </header>
        </div>

        <div className="list-item" id="nested-navigation-success-3">
          <footer>
            <nav aria-label="Footer Navigation">
              <ul>
                <li><a href="#privacy">Privacy Policy</a></li>
                <li><a href="#terms">Terms of Service</a></li>
              </ul>
            </nav>
          </footer>
        </div>

        <div className="list-item" id="nested-navigation-success-4">
          <aside>
            <nav aria-label="Sidebar Navigation">
              <ul>
                <li><a href="#settings">Settings</a></li>
                <li><a href="#profile">Profile</a></li>
              </ul>
            </nav>
          </aside>
        </div>

        <div className="list-item" id="nested-navigation-success-5">
          <div>
            <nav aria-label="Secondary Navigation">
              <ul>
                <li><a href="#news">News</a></li>
                <li><a href="#events">Events</a></li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="list-item" id="nested-navigation-success-6">
          <nav aria-label="Global Navigation">
            <ul>
              <li><a href="#shop">Shop</a></li>
              <li><a href="#gallery">Gallery</a></li>
            </ul>
          </nav>
        </div>
      </>
    }
    itemDescription={itemDescription}
  />
);