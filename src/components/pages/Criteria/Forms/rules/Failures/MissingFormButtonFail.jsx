import React from "react";
import IssueFailure from "../../../../../layout/issueFailure";

const itemDescription = "Form - Missing Form Button Failures";

export default () => (
  <IssueFailure
    itemContent={
      <>
        <h2>A form without any submit button:</h2>
        <form action="#">
          <label htmlFor="username">Username:</label>
          <br />
          <input type="text" id="username" name="username" />
          <br />
          <label htmlFor="password">Password:</label>
          <br />
          <input type="password" id="password" name="password" />
          <br />
        </form>

        <h2>
          A form with an input field used as a submit button but without a type
          attribute:
        </h2>
        <form action="#">
          <label htmlFor="username">Username:</label>
          <br />
          <input type="text" id="username" name="username" />
          <br />
          <label htmlFor="password">Password:</label>
          <br />
          <input type="password" id="password" name="password" />
          <br />
          <input type="submit" value="Submit" />
        </form>

        <h2>A form with a submit button but with a hidden attribute:</h2>
        <form action="#">
          <label htmlFor="username">Username:</label>
          <br />
          <input type="text" id="username" name="username" />
          <br />
          <label htmlFor="password">Password:</label>
          <br />
          <input type="password" id="password" name="password" />
          <br />
          <button type="submit" hidden>
            Submit
          </button>
        </form>

        <h2>A form with a submit button styled to be invisible:</h2>
        <form action="#">
          <label htmlFor="username">Username:</label>
          <br />
          <input type="text" id="username" name="username" />
          <br />
          <label htmlFor="password">Password:</label>
          <br />
          <input type="password" id="password" name="password" />
          <br />
          <button type="submit" style={{ opacity: 0 }}>
            Submit
          </button>
        </form>

        <form action="#">
          <label htmlFor="username">Username:</label>
          <br />
          <input type="text" id="username" name="username" />
          <br />
          <label htmlFor="password">Password:</label>
          <br />
          <input type="password" id="password" name="password" />
          <br />
        </form>

        <form action="#">
          <label htmlFor="username">Username:</label>
          <br />
          <input type="text" id="username" name="username" />
          <br />
          <label htmlFor="password">Password:</label>
          <br />
          <input type="password" id="password" name="password" />
          <br />
          <button type="submit" style={{ display: "none" }}>
            Login
          </button>
        </form>

        <form action="#">
          <label htmlFor="username">Username:</label>
          <br />
          <input type="text" id="username" name="username" />
          <br />
          <label htmlFor="password">Password:</label>
          <br />
          <input type="password" id="password" name="password" />
          <br />
          <button type="submit" disabled>
            Login
          </button>
        </form>
      </>
    }
    itemDescription={itemDescription}
  />
);
