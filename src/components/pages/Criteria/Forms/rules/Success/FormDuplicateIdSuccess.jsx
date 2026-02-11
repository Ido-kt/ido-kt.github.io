import React from "react";
import IssueSuccess from "../../../../../layout/issueSuccess";

const itemDescription = "Form - Form Duplicate Id Success";

export default () => (
  <IssueSuccess
    itemContent={
      <ul>
        <li className="list-item">
          <h1>Form Duplicate ID's Accessible</h1>
        </li>
        <li className="list-item">
          <form id="registrationForm1">
            <label htmlFor="firstName1">First Name:</label>
            <input type="text" id="firstName1" name="firstName" />

            <label htmlFor="lastName1">Last Name:</label>
            <input type="text" id="lastName1" name="lastName" />

            <label htmlFor="email1">Email:</label>
            <input type="email" id="email1" name="email" />
          </form>
        </li>

        <li className="list-item">
          <form id="registrationForm2">
            <label htmlFor="firstName2">First Name:</label>
            <input type="text" id="firstName2" name="firstName" />

            <label htmlFor="lastName2">Last Name:</label>
            <input type="text" id="lastName2" name="lastName" />

            <label htmlFor="email2">Email:</label>
            <input type="email" id="email2" name="email" />
          </form>
        </li>
        <li className="list-item">
          <form id="registrationForm1">
            <div class="form-group">
              <label htmlFor="firstName1">First Name:</label>
              <input
                type="text"
                id="firstName1"
                name="firstName"
                className="form-control"
              />
            </div>

            <div class="form-group">
              <label htmlFor="lastName1">Last Name:</label>
              <input
                type="text"
                id="lastName1"
                name="lastName"
                className="form-control"
              />
            </div>

            <div class="form-group">
              <label htmlFor="email1">Email:</label>
              <input
                type="email"
                id="email1"
                name="email"
                className="form-control"
              />
            </div>
          </form>
        </li>

        <li className="list-item">
          <form id="registrationForm2">
            <div class="form-group">
              <label htmlFor="firstName2">First Name:</label>
              <input
                type="text"
                id="firstName2"
                name="firstName"
                className="form-control"
              />
            </div>

            <div class="form-group">
              <label htmlFor="lastName2">Last Name:</label>
              <input
                type="text"
                id="lastName2"
                name="lastName"
                className="form-control"
              />
            </div>

            <div class="form-group">
              <label htmlFor="email2">Email:</label>
              <input
                type="email"
                id="email2"
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
