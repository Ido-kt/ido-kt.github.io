import React from "react";
import IssueFailure from "../../../../../layout/issueFailure";

const itemDescription = "Form - Form Duplicate Id Failures";

export default () => (
  <IssueFailure
    itemContent={
      <ul>
        <li className="list-item">
          <form id="registrationForm">
            <label htmlFor="firstName">First Name:</label>
            <input type="text" id="firstName" name="firstName" />

            <label htmlFor="lastName">Last Name:</label>
            <input type="text" id="lastName" name="lastName" />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
          </form>
        </li>

        <li className="list-item">
          <form id="registrationForm">
            <label htmlFor="firstName">First Name:</label>
            <input type="text" id="firstName" name="firstName" />

            <label htmlFor="lastName">Last Name:</label>
            <input type="text" id="lastName" name="lastName" />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
          </form>
        </li>

        <li className="list-item">
          <form id="registrationForm">
            <div className="form-group">
              <label htmlFor="firstName">First Name:</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                className="form-control"
              />
            </div>

            <div className="form-group">
              <label htmlFor="lastName">Last Name:</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                className="form-control"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-control"
              />
            </div>
          </form>
        </li>

        <li className="list-item">
          <form id="registrationForm">
            <div className="form-group">
              <label htmlFor="firstName">First Name:</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                className="form-control"
              />
            </div>

            <div className="form-group">
              <label htmlFor="lastName">Last Name:</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                className="form-control"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-control"
              />
            </div>
          </form>
        </li>
      </ul>
    }
    itemDescription={itemDescription}
  />
);
