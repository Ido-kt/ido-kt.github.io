import React from "react";
import IssueSuccess from "../../../../../layout/issueSuccess";

const itemDescription = "Form - Field Labels Success";

export default () => (
  <IssueSuccess
    itemContent={
      <>
        <h2>Success Case 1: Associated Label with 'for' Attribute</h2>
        <form>
          <label for="username1">Username:</label>
          <input type="text" id="username1" name="username" />
          <label for="email1">Email:</label>
          <input type="email" id="email1" name="email" />
          <label for="password1">Password:</label>
          <input type="password" id="password1" name="password" />
        </form>

        <h2>Success Case 2: Using 'aria-label' Attribute</h2>
        <form>
          <input
            type="text"
            id="username2"
            name="username"
            aria-label="Username:"
          />
          <input type="email" id="email2" name="email" aria-label="Email:" />
          <input
            type="password"
            id="password2"
            name="password"
            aria-label="Password:"
          />
        </form>

        <h2>Success Case 3: Nesting input field within Label</h2>
        <form>
          <label>
            Username:
            <input type="text" id="username3" name="username" />
          </label>
          <label>
            Email:
            <input type="email" id="email3" name="email" />
          </label>
          <label>
            Password:
            <input type="password" id="password3" name="password" />
          </label>
        </form>

        <h2>Success Case 4: Using 'aria-labelledby' Attribute</h2>
        <form>
          <span id="username4-label">Username:</span>
          <input
            type="text"
            id="username4"
            name="username"
            aria-labelledby="username4-label"
          />
          <span id="email4-label">Email:</span>
          <input
            type="email"
            id="email4"
            name="email"
            aria-labelledby="email4-label"
          />
          <span id="password4-label">Password:</span>
          <input
            type="password"
            id="password4"
            name="password"
            aria-labelledby="password4-label"
          />
        </form>
      </>
    }
    itemDescription={itemDescription}
  />
);
