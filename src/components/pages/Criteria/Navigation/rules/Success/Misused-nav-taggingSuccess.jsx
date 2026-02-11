import React from "react";
import IssueSuccess from "../../../../../layout/issueSuccess";

const itemDescription = "Navigation : Misused Nav Tagging - Success";

export default () => (
  <IssueSuccess
    itemContent={
      <>
        <div className="list-item" id="misused-nav-tagging-success-1">
          <nav>
            <a href="/home">Home</a>
            <a href="/about">About</a>
          </nav>
        </div>
        <div className="list-item" id="misused-nav-tagging-success-2">
          <header>
            <h1>Website Title</h1>
          </header>
        </div>
        <div className="list-item" id="misused-nav-tagging-success-3">
          <footer>
            <p>© 2025 Company Name</p>
          </footer>
        </div>
        <div className="list-item" id="misused-nav-tagging-success-4">
          <aside>
            <h2>Sidebar Content</h2>
          </aside>
        </div>
        <div className="list-item" id="misused-nav-tagging-success-5">
          <main>
            <p>Main content of the page goes here.</p>
          </main>
        </div>
        <div className="list-item" id="misused-nav-tagging-success-6">
          <nav>
            <a href="/blog">Blog</a>
            <a href="/contact">Contact</a>
          </nav>
        </div>
      </>
    }
    itemDescription={itemDescription}
  />
);