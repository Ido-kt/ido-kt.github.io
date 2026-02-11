import React from "react";
import IssueSuccess from "../../../../../layout/issueSuccess";

const itemDescription = "Keyboard : Skip Links - Success";

export default () => (
  <IssueSuccess
    itemContent={
      <>
        <div className="list-item" id="skipLinks-success-1">
          <a href="#main-content" className="skip-link" style={{ position: "absolute", top: "0", left: "0", opacity: "0", transition: "opacity 0.2s" }} onFocus={(e) => e.target.style.opacity = "1"} onBlur={(e) => e.target.style.opacity = "0"}>
            Skip to main content
          </a>
          <header>
            <h1>Site Header</h1>
          </header>
          <main id="main-content">
            <h1>Main Content</h1>
            <p>This is the main section of the page.</p>
          </main>
        </div>
        <div className="list-item" id="skipLinks-success-2">
          <a href="#navigation" className="skip-link" style={{ position: "absolute", top: "0", left: "0", opacity: "0", transition: "opacity 0.2s" }} onFocus={(e) => e.target.style.opacity = "1"} onBlur={(e) => e.target.style.opacity = "0"}>
            Skip to navigation
          </a>
          <nav id="navigation">
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
            </ul>
          </nav>
        </div>
        <div className="list-item" id="skipLinks-success-3">
          <a href="#footer" className="skip-link" style={{ position: "absolute", top: "0", left: "0", opacity: "0", transition: "opacity 0.2s" }} onFocus={(e) => e.target.style.opacity = "1"} onBlur={(e) => e.target.style.opacity = "0"}>
            Skip to footer
          </a>
          <footer id="footer">
            <p>Footer Information</p>
          </footer>
        </div>
        <div className="list-item" id="skipLinks-success-4">
          <a href="#section2" className="skip-link" style={{ position: "absolute", top: "0", left: "0", opacity: "0", transition: "opacity 0.2s" }} onFocus={(e) => e.target.style.opacity = "1"} onBlur={(e) => e.target.style.opacity = "0"}>
            Skip to section 2
          </a>
          <section id="section2">
            <h2>Section 2</h2>
            <p>Details about section 2.</p>
          </section>
        </div>
        <div className="list-item" id="skipLinks-success-5">
          <a href="#section3" className="skip-link" style={{ position: "absolute", top: "0", left: "0", opacity: "0", transition: "opacity 0.2s" }} onFocus={(e) => e.target.style.opacity = "1"} onBlur={(e) => e.target.style.opacity = "0"}>
            Skip to section 3
          </a>
          <section id="section3">
            <h2>Section 3</h2>
            <p>Details about section 3.</p>
          </section>
        </div>
        <div className="list-item" id="skipLinks-success-6">
          <a href="#content" className="skip-link" style={{ position: "absolute", top: "0", left: "0", opacity: "0", transition: "opacity 0.2s" }} onFocus={(e) => e.target.style.opacity = "1"} onBlur={(e) => e.target.style.opacity = "0"}>
            Skip to main content
          </a>
          <main id="content">
            <p>Accessible content here.</p>
          </main>
        </div>
      </>
    }
    itemDescription={itemDescription}
  />
);