import React from "react";
import IssueSuccess from "../../../../../layout/issueSuccess";

const itemDescription = "Navigation: Avoid role menu/menubar - Success";

export default () => (
  <IssueSuccess
    itemContent={
      <>
        <div className="list-item" id="menu-avoid-success-1">
          <nav>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
            </ul>
          </nav>
        </div>
        <div className="list-item" id="menu-avoid-success-2">
          <header>
            <nav aria-label="Header Navigation">
              <a href="#services">Services</a>
              <a href="#contact">Contact</a>
            </nav>
          </header>
        </div>
        <div className="list-item" id="menu-avoid-success-3">
          <footer>
            <nav role="navigation">
              <a href="#privacy">Privacy</a>
              <a href="#terms">Terms</a>
            </nav>
          </footer>
        </div>
        <div className="list-item" id="menu-bar-avoid-success-4">
          <nav aria-label="Main Navigation">
            <ul>
              <li><a href="#products">Products</a></li>
              <li><a href="#blog">Blog</a></li>
            </ul>
          </nav>
        </div>
        <div className="list-item" id="menu-bar-avoid-success-5">
          <nav>
            <ul>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#testimonials">Testimonials</a></li>
            </ul>
          </nav>
        </div>
        <div className="list-item" id="menu-bar-avoid-success-6">
          <nav aria-label="Footer Navigation">
            <ul>
              <li><a href="#faq">FAQ</a></li>
              <li><a href="#support">Support</a></li>
            </ul>
          </nav>
        </div>
      </>
    }
    itemDescription={itemDescription}
  />
);