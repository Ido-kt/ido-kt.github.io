import React from "react";
import IssueFailure from "../../../../../layout/issueFailure";

const itemDescription = "Form - Field Validation Focus Failures";

export default () => {
  // Define event listener functions
  function handleForm1Submit(event) {
    event.preventDefault();
    const inputs = event.target.elements;
    for (let i = 0; i < inputs.length; i++) {
      if (!inputs[i].validity.valid) {
        // Missing focus shift
        break;
      }
    }
  }

  function handleForm2Submit(event) {
    event.preventDefault();
    const inputs = event.target.elements;
    for (let i = 0; i < inputs.length; i++) {
      if (!inputs[i].validity.valid) {
        // Missing focus shift
        break;
      }
    }
  }

  return (
    <IssueFailure
      itemContent={
        <ul>
          <li className="list-item">
            <form id="invalid-form" action="#" onSubmit={handleForm1Submit}>
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
            <form id="invalid-form2" action="#" onSubmit={handleForm2Submit}>
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
