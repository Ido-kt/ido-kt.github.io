import React from "react";
import IssueSuccess from "../../../../../layout/issueSuccess";

const itemDescription = "Form - Missing Form Button Success";

export default () => {
  const formStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  };

  return (
    <IssueSuccess
      itemContent={
        <ul>
          <li className="list-item">
            <style>
              {`
                .onfocus-only {
                  opacity: 0;
                  transition: opacity 0.5s;
                }

                .onfocus-only:focus {
                  opacity: 1;
                }
                `}
            </style>
          </li>

          <li className="list-item">
            <form action="#" style={formStyle}>
              <label htmlFor="username">Username:</label>
              <input type="text" id="username" name="username" />
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" name="password" />
              <button type="submit">Login</button>
            </form>
          </li>

          {/* Add more forms and styling here as needed */}
        </ul>
      }
      itemDescription={itemDescription}
    />
  );
};
