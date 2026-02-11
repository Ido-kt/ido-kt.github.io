import React from "react";
import IssueFailure from "../../../../../layout/issueFailure";

const itemDescription = "Keyboard - Non Interactive Tab Index Failures";

export default () => (
  <IssueFailure
    itemContent={
      <ul>
         <div className="list-item">
          <p tabindex="0">Paragraph</p>
         </div>
         <div className="list-item">
          <h2 tabindex="0">Heading 2</h2>
         </div>
         <div className="list-item">
          <h3 tabindex="0">Heading 3</h3>
         </div>
         <div className="list-item">
          <section tabindex="0">
            <h4>A Section</h4>
            <p>This is a section with a heading and a paragraph inside.</p>
          </section>
         </div>
         <div className="list-item">
          <article tabindex="0">
            <h5>An Article</h5>
            <p>This is an article with a heading and a paragraph inside.</p>
          </article>
         </div>
         <div className="list-item">
          <aside tabindex="0">An Aside</aside>
         </div>
         <div className="list-item">
          <figure tabindex="0">A Figure</figure>
         </div>
         <div className="list-item">
          <footer tabindex="0">A Footer</footer>
         </div>
         <div className="list-item">
          <header tabindex="0">A Header</header>
         </div>
         <div className="list-item">
          <main tabindex="0">Main Content</main>
         </div>
         <div className="list-item">
          <nav tabindex="0">Navigation</nav>
         </div>
         <div className="list-item">
          <table class="table" tabindex="0">
            <tr>
              <th>Name</th>
              <th>Email</th>
            </tr>
            <tr>
              <td>John Doe</td>
              <td>john.doe@example.com</td>
            </tr>
          </table>
         </div>
         <div className="list-item">
          <blockquote tabindex="0">
            A long quotation from a notable source
          </blockquote>
         </div>
         <div className="list-item">
          <code tabindex="0">let x = 10;</code>
         </div>
         <div className="list-item">
          <pre tabindex="0">const y = 20;\nlet z = x + y;</pre>
         </div>
         <div className="list-item">
          <time datetime="2023-07-09" tabindex="0">
            July 9, 2023
          </time>
         </div>
         <div className="list-item">
          <mark tabindex="0">Highlighted text</mark>
         </div>
         <div className="list-item">
          <progress value="70" max="100" tabindex="0"></progress>
          <span> 70% completed</span>
         </div>
         <div className="list-item">
          <meter value="2" min="0" max="10" tabindex="0"></meter>
          <span> 2 out of 10</span>
         </div>
      </ul>
    }
    itemDescription={itemDescription}
  />
);
