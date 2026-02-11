import React, { useState } from "react";
import IssueSuccess from "../../../../../layout/issueSuccess";

const itemDescription = "Form - Submission Status Success";

export default () => {
  const [isSuccessMessageVisible, setIsSuccessMessageVisible] = useState(false);
  const [isFailureMessageVisible, setIsFailureMessageVisible] = useState(false);

  function handleFormSubmit(event) {
    event.preventDefault();

    // Mock form validation - replace with your own validation
    const isValid = true;

    setIsSuccessMessageVisible(false);
    setIsFailureMessageVisible(false);

    if (isValid) {
      // Mock server response delay
      setTimeout(() => {
        setIsSuccessMessageVisible(true);
      }, 1000); // 1 second delay
    } else {
      // Mock server response delay
      setTimeout(() => {
        setIsFailureMessageVisible(true);
      }, 1000); // 1 second delay
    }
  }

  return (
    <IssueSuccess
      itemContent={
        <ul>
          <li className="list-item">
            <form id="contactForm" onSubmit={handleFormSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
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

              <div className="form-group">
                <label htmlFor="message">Message:</label>
                <textarea
                  id="message"
                  name="message"
                  className="form-control"
                ></textarea>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="termsCheck"
                />
                <label className="form-check-label" htmlFor="termsCheck">
                  Accept Terms and Conditions
                </label>
              </div>

              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </li>

          <li className="list-item">
            <div
              id="successMessage"
              role="alert"
              className={`alert alert-success mt-3 ${
                isSuccessMessageVisible ? "" : "d-none"
              }`}
            >
              Form submitted successfully!
            </div>
          </li>

          <li className="list-item">
            <div
              id="failureMessage"
              role="alert"
              className={`alert alert-danger mt-3 ${
                isFailureMessageVisible ? "" : "d-none"
              }`}
            >
              Form submission failed. Please try again.
            </div>
          </li>
        </ul>
      }
      itemDescription={itemDescription}
    />
  );
};
