import React from "react";
import IssueFailure from "../../../../../layout/issueFailure";

const itemDescription = "Errors : Avoid using role applications - Failure";

export default () => (
  <IssueFailure
    itemContent={
      <>
        <div className="list-item" id="avoid-role-application-failure-1">
          <div role="application">
            <h1>Heading inside Application Role</h1>
            <p>Generic container improperly using the application role.</p>
          </div>
        </div>
        <div className="list-item" id="avoid-role-application-failure-2">
          <main role="application">
            <article>
              <h2>Article within Application Role</h2>
              <p>This is an article that inherits the application role.</p>
            </article>
          </main>
        </div>
        <div className="list-item" id="avoid-role-application-failure-3">
          <header role="application">
            <h1>Header Section</h1>
            <nav>
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#contact">Contact</a>
            </nav>
          </header>
        </div>
        <div className="list-item" id="avoid-role-application-failure-4">
          <section role="application">
            <h3>Section with Application Role</h3>
            <p>Content improperly nested under the application role.</p>
          </section>
        </div>
        <div className="list-item" id="avoid-role-application-failure-5">
          <aside role="application">
            <h4>Complementary Content</h4>
            <p>Asides should not be given an application role.</p>
          </aside>
        </div>
        <div className="list-item" id="avoid-role-application-failure-6">
          <form role="application">
            <label htmlFor="username">Username:</label>
            <input id="username" type="text" />
            <button type="submit">Submit</button>
          </form>
        </div>
        <div className="list-item" id="avoid-role-application-failure-7">
          <table role="application">
            <thead>
              <tr>
                <th>Column 1</th>
                <th>Column 2</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Data 1</td>
                <td>Data 2</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="list-item" id="avoid-role-application-failure-8">
          <figure role="application">
            <img src="image.jpg" alt="Sample Image" />
            <figcaption>Image improperly wrapped in application role.</figcaption>
          </figure>
        </div>
        <div className="list-item" id="avoid-role-application-failure-9">
          <footer role="application">
            <p>&copy; 2025 Inaccessible Website</p>
          </footer>
        </div>
        <div className="list-item" id="avoid-role-application-failure-10">
          <dialog role="application" open>
            <p>Dialog content incorrectly marked with application role.</p>
            <button>Close</button>
          </dialog>
        </div>
      </>
    }
    itemDescription={itemDescription}
  />
);