import React from "react";
import IssueFailure from "../../../../../layout/issueFailure";

const itemDescription = "Forms - Field Validations Failures";

export default () => (
  <IssueFailure
    itemContent={
      <ul>
        <li className="list-item">
          <form id="invalid-form">
            <label for="email">Email:</label>
            <br />
            <input type="email" id="email" name="email" required />
            <br />
            <span id="email-validation">
              Please enter a valid email address.
            </span>
            <br />
            <button type="submit">Submit</button>
          </form>
        </li>
        <li className="list-item">
          <form id="invalid-form">
            <label for="username">Username:</label>
            <br />
            <input type="text" id="username" name="username" required />
            <br />
            <span id="username-validation">Username is required.</span>
            <br />
            <label for="email">Email:</label>
            <br />
            <input type="email" id="email" name="email" required />
            <br />
            <span id="email-validation">
              Please enter a valid email address.
            </span>
            <br />
            <label for="password">Password:</label>
            <br />
            <input type="password" id="password" name="password" required />
            <br />
            <span id="password-validation">
              Password should have at least 8 characters.
            </span>
            <br />
            <button type="submit">Submit</button>
          </form>
        </li>
        <li className="list-item">
          <form id="case1-form">
            <label for="username">Username:</label>
            <br />
            <input type="text" id="username" name="username" required />
            <br />
            <span>Username is required.</span>
            <br />
            <label for="email">Email:</label>
            <br />
            <input type="email" id="email" name="email" required />
            <br />
            <span>Please enter a valid email address.</span>
            <br />
            <label for="password">Password:</label>
            <br />
            <input type="password" id="password" name="password" required />
            <br />
            <span>Password should have at least 8 characters.</span>
            <br />
            <button type="submit">Submit</button>
          </form>
        </li>
        <li className="list-item">
          <form id="case2-form">
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
    }
    itemDescription={itemDescription}
  />
);
