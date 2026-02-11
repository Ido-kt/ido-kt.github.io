import React from "react";
import IssueSuccess from "../../../../../layout/issueSuccess";

const itemDescription = "Navigation: Broken Nav Items - Success";

export default () => (
  <IssueSuccess
    itemContent={
      <>
        {/* Success Example 1 */}
        <div className="list-item" id="brokenNavItems-success-1">
          <nav>
            <a href="#home">Home</a>
            <a href="#about">About</a>
          </nav>
        </div>

        {/* Success Example 2 */}
        <div className="list-item" id="brokenNavItems-success-2">
          <nav aria-label="Header Navigation">
            <button onClick={() => alert('Services clicked')}>Services</button>
            <button onClick={() => alert('Contact clicked')}>Contact</button>
          </nav>
        </div>

        {/* Success Example 3 */}
        <div className="list-item" id="brokenNavItems-success-3">
          <header>
            <nav>
              <ul>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
              </ul>
            </nav>
          </header>
        </div>

        {/* Success Example 4 */}
        <div className="list-item" id="brokenNavItems-success-4">
          <footer>
            <nav>
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms of Service</a>
            </nav>
          </footer>
        </div>

        {/* Success Example 5 */}
        <div className="list-item" id="brokenNavItems-success-5">
          <nav>
            <button onClick={() => alert('Help clicked')}>Help</button>
            <button onClick={() => alert('Support clicked')}>Support</button>
          </nav>
        </div>

        {/* Success Example 6 */}
        <div className="list-item" id="brokenNavItems-success-6">
          <aside>
            <nav>
              <a href="#faq">FAQ</a>
              <a href="#feedback">Feedback</a>
            </nav>
          </aside>
        </div>
      </>
    }
    itemDescription={itemDescription}
  />
);