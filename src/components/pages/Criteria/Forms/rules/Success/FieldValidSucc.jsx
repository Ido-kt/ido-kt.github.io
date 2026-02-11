import React from "react";
import IssueSuccess from "../../../../../layout/issueSuccess";

const itemDescription = "Forms - Field Validations Success";

export default () => (
  <IssueSuccess
    itemContent={
      <>
        <ul>
          <li className="list-item">
            <form id="valid-form">
              <label for="email">Email:</label>
              <br />
              <input
                type="email"
                id="email"
                name="email"
                required
                aria-describedby="email-validation"
              />
              <br />
              <span id="email-validation">
                Please enter a valid email address.
              </span>
              <button type="submit">Submit</button>
            </form>
          </li>
          <li className="list-item">
            <form id="valid-form">
              <label for="username">Username:</label>
              <br />
              <input
                type="text"
                id="username"
                name="username"
                required
                aria-describedby="username-validation"
              />
              <br />
              <span id="username-validation">Username is required.</span>
              <br />

              <label for="email">Email:</label>
              <br />
              <input
                type="email"
                id="email"
                name="email"
                required
                aria-describedby="email-validation"
              />
              <br />
              <span id="email-validation">
                Please enter a valid email address.
              </span>
              <br />

              <label for="password">Password:</label>
              <br />
              <input
                type="password"
                id="password"
                name="password"
                required
                aria-describedby="password-validation"
              />
              <br />
              <span id="password-validation">
                Password should have at least 8 characters.
              </span>
              <br />

              <button type="submit">Submit</button>
            </form>
          </li>
        </ul>
      </>
    }
    itemDescription={itemDescription}
  />
);
