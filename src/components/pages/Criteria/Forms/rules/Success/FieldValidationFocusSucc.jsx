import React from "react";
import IssueSuccess from "../../../../../layout/issueSuccess";

const itemDescription = "Form - Field Validation Focus Success";

export default () => {
  const handleFormSubmit = (event, formId) => {
    event.preventDefault();
    const form = document.getElementById(formId);
    const inputs = form.elements;
    for (let i = 0; i < inputs.length; i++) {
      if (!inputs[i].validity.valid) {
        inputs[i].focus();
        break;
      }
    }
  };

  return (
    <IssueSuccess
      itemContent={
        <ul>
          <li className="list-item">
            <form
              id="valid-form"
              action="#"
              onSubmit={(e) => handleFormSubmit(e, "valid-form")}
            >
              <label htmlFor="username">Username:</label>
              <br />
              <input type="text" id="username" name="username" required />
              <br />
              <label htmlFor="password">Password:</label>
              <br />
              <input type="password" id="password" name="password" required />
              <br />
              <button type="submit">Submit</button>
            </form>
          </li>

          <li className="list-item">
            <form
              id="valid-form2"
              action="#"
              onSubmit={(e) => handleFormSubmit(e, "valid-form2")}
            >
              <label htmlFor="email">Email:</label>
              <br />
              <input type="email" id="email" name="email" required />
              <br />
              <label htmlFor="age">Age:</label>
              <br />
              <input type="number" id="age" name="age" required />
              <br />
              <button type="submit">Submit</button>
            </form>
          </li>
        </ul>
      }
      itemDescription={itemDescription}
    />
  );
};
