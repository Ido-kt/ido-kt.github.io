import React from "react";
import IssueSuccess from "../../../../../layout/issueSuccess";

const itemDescription = "Navigation: Navigation Tagging - Success";

export default () => (
  <IssueSuccess
    itemContent={
      <>
        <div className="list-item" id="navigation-discernible-success-1">
          <nav aria-label="Primary Navigation">
            <ul>
              <li><a href="/home">Home</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </nav>
        </div>

        <div className="list-item" id="navigation-discernible-success-2">
          <nav aria-labelledby="navHeading">
            <h2 id="navHeading" hidden>Site Navigation</h2>
            <ul>
              <li><a href="/about">About Us</a></li>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/faq">FAQ</a></li>
            </ul>
          </nav>
        </div>

        <div className="list-item" id="navigation-discernible-success-3">
          <nav aria-describedby="navDesc">
            <p id="navDesc" hidden>Navigate through key sections</p>
            <ul>
              <li><a href="/products">Products</a></li>
              <li><a href="/support">Support</a></li>
              <li><a href="/careers">Careers</a></li>
            </ul>
          </nav>
        </div>

        <div className="list-item" id="navigation-mismatch-success-4">
          <nav>
            <ul>
              <li><a href="/portfolio">Portfolio</a></li>
              <li><a href="/news">News</a></li>
              <li><a href="/team">Team</a></li>
            </ul>
          </nav>
        </div>

        <div className="list-item" id="navigation-mismatch-success-5">
          <div role="navigation">
            <ul>
              <li><a href="/features">Features</a></li>
              <li><a href="/testimonials">Testimonials</a></li>
              <li><a href="/partnerships">Partnerships</a></li>
            </ul>
          </div>
        </div>

        <div className="list-item" id="navigation-mismatch-success-6">
          <nav>
            <ul>
              <li><a href="/login">Login</a></li>
              <li><a href="/register">Register</a></li>
              <li><a href="/help">Help</a></li>
            </ul>
          </nav>
        </div>
      </>
    }
    itemDescription={itemDescription}
  />
);