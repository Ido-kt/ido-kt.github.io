import React from "react";
import IssueSuccess from "../../../../../layout/issueSuccess";

const itemDescription = "Errors : Avoid using role applications - Success";

export default () => (
  <IssueSuccess
    itemContent={
      <>
        <div className="list-item" id="avoid-role-application-success-1">
          <div>
            <h1>Accessible Heading</h1>
            <p>This content uses native HTML elements for structure.</p>
          </div>
        </div>
        <div className="list-item" id="avoid-role-application-success-2">
          <nav>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </div>
        <div className="list-item" id="avoid-role-application-success-3">
          <main>
            <article>
              <h2>Article Heading</h2>
              <p>Articles are properly nested and accessible.</p>
            </article>
          </main>
        </div>
        <div className="list-item" id="avoid-role-application-success-4">
          <div>
            <form>
              <label htmlFor="username">Username:</label>
              <input id="username" type="text" />
            </form>
          </div>
        </div>
        <div className="list-item" id="avoid-role-

application-success-5">
          <div>
            <button>Click Me</button>
          </div>
        </div>
        <div className="list-item" id="avoid-role-application-success-6">
          <footer>
            <p>&copy; 2025 Accessible Web</p>
          </footer>
        </div>
      </>
    }
    itemDescription={itemDescription}
  />
);