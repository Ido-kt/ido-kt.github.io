import React from "react";
import IssueFailure from "../../../../../layout/issueFailure";

const itemDescription = "Form - Field Label Failures";

const FieldLabelFail = () => (
  <IssueFailure
    itemContent={
      <ul>
        <li className="list-item">
          <h2>Failure Case 1: Missing Label</h2>
          <form>
            <input type="text" id="username1" name="username" />
            <input type="email" id="email1" name="email" />
            <input type="password" id="password1" name="password" />
          </form>
        </li>

        <li className="list-item">
          <h2>Failure Case 2: Label with No Associated Field</h2>
          <form>
            <label>Username:</label>
            <input type="text" name="username" />
            <label>Email:</label>
            <input type="email" name="email" />
            <label>Password:</label>
            <input type="password" name="password" />
          </form>
        </li>

        <li className="list-item">
          <h2>
            Failure Case 3: Label with 'for' Attribute Not Matching Any Field ID
          </h2>
          <form>
            <label htmlFor="nonexistent_id">Username:</label>
            <input type="text" id="username2" name="username" />
            <label htmlFor="nonexistent_id">Email:</label>
            <input type="email" id="email2" name="email" />
            <label htmlFor="nonexistent_id">Password:</label>
            <input type="password" id="password2" name="password" />
          </form>
        </li>

        <li className="list-item">
          <h2>
            Failure Case 4: 'aria-label' or 'aria-labelledby' Not Providing a
            Descriptive Label
          </h2>
          <form>
            <input
              type="text"
              id="username3"
              name="username"
              aria-label="Text Field 1"
            />
            <input
              type="email"
              id="email3"
              name="email"
              aria-label="Text Field 2"
            />
            <input
              type="password"
              id="password3"
              name="password"
              aria-label="Text Field 3"
            />
          </form>
        </li>

        <li className="list-item">
          <h2>F2: Incorrect use of text presentation to convey information</h2>
          <div style={{ fontWeight: "bold" }}>
            This text is bold, which might indicate it's a heading, but it's not
            marked up as a heading.
          </div>
        </li>

        <li className="list-item">
          <h2>F33 & F34: Using white space characters for columns or tables</h2>
          <pre>Name Age John 25 Doe 30</pre>
        </li>

        <li className="list-item">
          <h2>F42: Emulating links</h2>
          <div
            role="button"
            tabIndex={0}
            onClick={() => (window.location.href = "https://example.com")}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                window.location.href = "https://example.com";
              }
            }}
            style={{ cursor: "pointer" }}
          >
            Fake link
          </div>
        </li>

        <li className="list-item">
          <h2>F43: Misrepresenting relationships with structural markup</h2>
          <h2>Subheading</h2>
          <h1>Main heading</h1>
        </li>

        <li className="list-item">
          <h2>F46: Using th elements in layout tables</h2>
          <table role="presentation">
          <thead>
            <tr>
              <th style={{ fontWeight: "normal" }}>
                This is a layout cell, not a table header.
              </th>
            </tr>
            </thead>
          </table>
        </li>

        <li className="list-item">
          <h2>F48: Using the pre element for tabular information</h2>
          <pre>Name: John Age: 25</pre>
        </li>

        <li className="list-item">
          <h2>F87: Inserting non-decorative content with pseudo-elements</h2>
          <div className="pseudo-element"></div>
        </li>

        <li className="list-item">
          <h2>F90: Incorrectly associating table headers and content</h2>
          <table role="presentation">
            <tr>
              <th id="name">Name</th>
            </tr>
            <tr>
              <td headers="name">John</td>
            </tr>
          </table>
        </li>

        <li className="list-item">
          <h2>F91: Not correctly marking up table headers</h2>
          <table role="presentation">
            <tr>
              <td>Name</td>
              <td>Age</td>
            </tr>
            <tr>
              <td>John</td>
              <td>25</td>
            </tr>
          </table>
        </li>

        <li className="list-item">
          <h2>F92: Use of role presentation on semantic content</h2>
          <h1 role="presentation">This is a heading</h1>
        </li>
      </ul>
    }
    itemDescription={itemDescription}
  />
);

export default FieldLabelFail;
