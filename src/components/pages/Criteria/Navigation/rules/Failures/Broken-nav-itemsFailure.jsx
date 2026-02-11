import React from "react";
import IssueFailure from "../../../../../layout/issueFailure";

const itemDescription = "Navigation: Broken Nav Items - Failure";

export default () => (
  <IssueFailure
    itemContent={
      <>
        {/* Failure Example 1 */}
        <div className="list-item" id="brokenNavItems-failure-1">
          <nav>
            <div role="menuitem">Home</div>
            <div role="menuitem">About</div>
          </nav>
        </div>

        {/* Failure Example 2 */}
        <div className="list-item" id="brokenNavItems-failure-2">
          <nav aria-label="Header Navigation">
            <span role="menuitem" tabindex="0" onClick={() => alert('Services clicked')}>Services</span>
            <span role="menuitem" tabindex="0" onClick={() => alert('Contact clicked')}>Contact</span>
          </nav>
        </div>

        {/* Failure Example 3 */}
        <div className="list-item" id="brokenNavItems-failure-3">
          <header>
            <nav>
              <ul>
                <li role="menuitem">Portfolio</li>
                <li role="menuitem">Testimonials</li>
              </ul>
            </nav>
          </header>
        </div>

        {/* Failure Example 4 */}
        <div className="list-item" id="brokenNavItems-failure-4">
          <footer>
            <nav>
              <div role="menuitem">Privacy Policy</div>
              <div role="menuitem">Terms of Service</div>
            </nav>
          </footer>
        </div>

        {/* Failure Example 5 */}
        <div className="list-item" id="brokenNavItems-failure-5">
          <nav>
            <div role="menuitem" tabindex="0" onClick={() => alert('Help clicked')}>Help</div>
            <div role="menuitem" tabindex="0" onClick={() => alert('Support clicked')}>Support</div>
          </nav>
        </div>

        {/* Failure Example 6 */}
        <div className="list-item" id="brokenNavItems-failure-6">
          <aside>
            <nav>
              <span role="menuitem">FAQ</span>
              <span role="menuitem">Feedback</span>
            </nav>
          </aside>
        </div>

        {/* Failure Example 7 */}
        <div className="list-item" id="brokenNavItems-failure-7">
          <main role="menu">
            <article role="menuitem">Overview</article>
            <article role="menuitem">Details</article>
          </main>
        </div>

        {/* Failure Example 8 */}
        <div className="list-item" id="brokenNavItems-failure-8">
          <section role="menu">
            <header role="menuitem">Header Link</header>
            <footer role="menuitem">Footer Link</footer>
          </section>
        </div>

        {/* Failure Example 9 */}
        <div className="list-item" id="brokenNavItems-failure-9">
          <table role="menu">
            <tr>
              <td role="menuitem"><a href="#dashboard">Dashboard</a></td>
              <td role="menuitem"><a href="#settings">Settings</a></td>
            </tr>
          </table>
        </div>

        {/* Failure Example 10 */}
        <div className="list-item" id="brokenNavItems-failure-10">
          <div role="menu" aria-label="Custom Navigation">
            <form role="menuitem">
              <button type="submit">Submit</button>
            </form>
            <form role="menuitem">
              <button type="button">Cancel</button>
            </form>
          </div>
        </div>

        {/* Failure Example 11 */}
        <div className="list-item" id="brokenNavItems-failure-11">
          <nav>
            <svg role="menuitem" width="24" height="24">
              <circle cx="12" cy="12" r="10" />
            </svg>
            <svg role="menuitem" width="24" height="24">
              <rect width="20" height="20" />
            </svg>
          </nav>
        </div>

        {/* Failure Example 12 */}
        <div className="list-item" id="brokenNavItems-failure-12">
          <aside>
            <video role="menuitem" controls>
              <source src="sample.mp4" type="video/mp4" />
            </video>
            <audio role="menuitem" controls>
              <source src="sample.mp3" type="audio/mp3" />
            </audio>
          </aside>
        </div>
      </>
    }
    itemDescription={itemDescription}
  />
);