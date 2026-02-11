import React from "react";
import IssueFailure from "../../../../../layout/issueFailure";

const itemDescription = "Keyboard: Broken Tabindex - Failure";

export default () => (
  <IssueFailure
    itemContent={
      <>
        <div className="list-item" id="broken-tabindex-failure-1">
          <div tabIndex="1">Non-interactive div</div>
        </div>
        <div className="list-item" id="broken-tabindex-failure-2">
          <span tabIndex="5">Non-interactive span</span>
        </div>
        <div className="list-item" id="broken-tabindex-failure-3">
          <p tabIndex="3">Non-interactive paragraph</p>
        </div>
        <div className="list-item" id="broken-tabindex-failure-4">
          <h1 tabIndex="10">Non-interactive heading</h1>
        </div>
        <div className="list-item" id="broken-tabindex-failure-5">
          <div tabIndex="4">Div with invalid positive tabindex</div>
        </div>
        <div className="list-item" id="broken-tabindex-failure-6">
          <ul tabIndex="2">
            <li>List item</li>
          </ul>
        </div>
        <div className="list-item" id="broken-tabindex-failure-7">
          <img src="image.jpg" alt="Decorative image" tabIndex="1" />
        </div>
        <div className="list-item" id="broken-tabindex-failure-8">
          <table tabIndex="2">
            <tr>
              <td>Table cell</td>
            </tr>
          </table>
        </div>
        <div className="list-item" id="broken-tabindex-failure-9">
          <iframe src="https://example.com" tabIndex="5"></iframe>
        </div>
        <div className="list-item" id="broken-tabindex-failure-10">
          <label htmlFor="input" tabIndex="3">Label for Input</label>
        </div>
        <div className="list-item" id="broken-tabindex-failure-11">
          <div role="presentation" tabIndex="4">Presentation div</div>
        </div>
        <div className="list-item" id="broken-tabindex-failure-12">
          <svg tabIndex="6">
            <circle cx="50" cy="50" r="40" />
          </svg>
        </div>
        <div className="list-item" id="broken-tabindex-failure-13">
          <audio controls tabIndex="1">
            <source src="audio.mp3" type="audio/mpeg" />
          </audio>
        </div>
        <div className="list-item" id="broken-tabindex-failure-14">
          <video controls tabIndex="2">
            <source src="video.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="list-item" id="broken-tabindex-failure-15">
          <fieldset tabIndex="3">
            <legend>Form Group</legend>
          </fieldset>
        </div>
        <div className="list-item" id="broken-tabindex-failure-16">
          <progress value="50" max="100" tabIndex="4"></progress>
        </div>
        <div className="list-item" id="broken-tabindex-failure-17">
          <blockquote tabIndex="5">This is a blockquote.</blockquote>
        </div>
        <div className="list-item" id="broken-tabindex-failure-18">
          <canvas tabIndex="6">Your browser does not support the canvas element.</canvas>
        </div>
        <div className="list-item" id="broken-tabindex-failure-19">
          <footer tabIndex="0">Footer content</footer>
        </div>
        <div className="list-item" id="broken-tabindex-failure-20">
          <section tabIndex="3">Section content</section>
        </div>
        <div className="list-item" id="broken-tabindex-failure-21">
          <li tabIndex="2">Standalone list item</li>
        </div>
        <div className="list-item" id="broken-tabindex-failure-22">
          <header tabIndex="4">Header content</header>
        </div>
        <div className="list-item" id="broken-tabindex-failure-23">
          <div style={{ cursor: "pointer" }} tabIndex="1">
            Div styled to look like a button
          </div>
        </div>
        <div className="list-item" id="broken-tabindex-failure-24">
          <nav tabIndex="6">
            Navigation area with no interactive elements
          </nav>
        </div>
        <div className="list-item" id="broken-tabindex-failure-25">
          <abbr title="Hypertext Markup Language" tabIndex="7">
            HTML
          </abbr>
        </div>
        <div className="list-item" id="broken-tabindex-failure-26">
          <mark tabIndex="5">Highlighted text</mark>
        </div>
        <div className="list-item" id="broken-tabindex-failure-27">
          <output tabIndex="8">Output: 42</output>
        </div>
        <div className="list-item" id="broken-tabindex-failure-28">
          <code tabIndex="9">const a = 10;</code>
        </div>
      </>
    }
    itemDescription={itemDescription}
  />
);