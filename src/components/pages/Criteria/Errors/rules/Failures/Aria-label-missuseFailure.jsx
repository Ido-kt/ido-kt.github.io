import React from "react";
import IssueFailure from "../../../../../layout/issueFailure";
import { Typography } from "@mui/material";

const itemDescription = "Errors: ARIA Label Misuse - Failure";

export default () => (
  <IssueFailure
    itemContent={
      <>
        <div className="list-item" id="aria-label-failure-1">
          <div aria-label="Error message">
            Failure: A &lt;div&gt; with visible text should not have an <code>aria-label</code>. The screen reader will ignore the <code>aria-label</code> because visible text is present.
          </div>
        </div>

        <div className="list-item" id="aria-label-failure-2">
          <span aria-label="Error label">
            Failure: A &lt;span&gt; with visible error text should not use <code>aria-label</code>. The screen reader will read the visible text and ignore the <code>aria-label</code>.
          </span>
        </div>

        <div className="list-item" id="aria-label-failure-3">
          <p aria-label="Error description">
            Failure: A &lt;p&gt; with visible error text should not use <code>aria-label</code>. The visible text already provides a description.
          </p>
        </div>

        <div className="list-item" id="aria-label-failure-4">
          <h2 aria-label="Form error">
            Failure: A heading with text should not use <code>aria-label</code>. Screen readers will prioritize the visible text and ignore the <code>aria-label</code>.
          </h2>
        </div>

        <div className="list-item" id="aria-label-failure-5">
          <ul aria-label="Error list">
            Failure: A list of errors should not use an <code>aria-label</code>. Visible list content is sufficient for accessibility.
            <li>Password is too short.</li>
          </ul>
        </div>

        <div className="list-item" id="aria-label-failure-6">
          <div aria-label="Broken field">
            Failure: An empty &lt;div&gt; with an <code>aria-label</code> adds no value because there is no visible or functional content.
          </div>
        </div>

        <div className="list-item" id="aria-labelledby-failure-1">
          <label id="username-label">Username</label>
          <input
            type="text"
            id="username-input"
            aria-labelledby="username-label missing-error"
          />
          <span id="username-error" className="error-text">
            Failure: The <code>aria-labelledby</code> attribute references non-existent IDs (<code>missing-error</code>), causing the label to be invalid.
          </span>
        </div>

        <div className="list-item" id="aria-label-failure-7">
          <a
            target="_blank"
            aria-label="Dribbble"
            className="btn-new silent compensate-left"
            href="https://dribbble.com/sentry/"
          >
            <svg
              aria-hidden="true"
              className="icon-small"
              viewBox="0 0 16 16"
              version="1.1"
              width="16"
            >
              <path
                d="M8,16a8,8,0,1,1,8-8A8,8,0,0,1,8,16Zm6.75-6.9a10,10,0,0,0-4.26-.29,29.49,29.49,0,0,1,1.33,4.87A6.84,6.84,0,0,0,14.75,9.1ZM10.67,14.3A28.41,28.41,0,0,0,9.21,9.12,9.38,9.38,0,0,0,3.81,13.4,6.86,6.86,0,0,0,10.67,14.3ZM2.92,12.58A10.75,10.75,0,0,1,8.75,8C8.58,7.6,8.39,7.21,8.19,6.83a25.21,25.21,0,0,1-7,1A6.77,6.77,0,0,0,2.92,12.58Zm-1.61-6a25.49,25.49,0,0,0,6.32-.83,43.6,43.6,0,0,0-2.53-4A6.86,6.86,0,0,0,1.31,6.61ZM6.4,1.37a36.47,36.47,0,0,1,2.55,4A7.72,7.72,0,0,0,12.53,2.9,6.79,6.79,0,0,0,6.4,1.37Zm6.89,2.32A9.1,9.1,0,0,1,9.47,6.38c0.16,0.33.44,0.89,0.6,1.34a16,16,0,0,1,4.76.22A6.8,6.8,0,0,0,13.29,3.69Z"
                fill="currentColor"
              ></path>
            </svg>
            Failure: An anchor with <code>aria-label</code> and visible text is redundant. Use either visible text or <code>aria-label</code>, not both.
          </a>
        </div>
        <div className="list-item" id="aria-label-failure-8">
          <div role="code" aria-label="Code label">
            Failure: The `role="code"` does not support `aria-label`. The label will be ignored by screen readers.
          </div>
        </div>

        <div className="list-item" id="aria-label-failure-9">
          <div role="presentation" aria-label="Presentation content">
            Failure: The `role="presentation"` is for decorative purposes and should not use `aria-label`.
          </div>
        </div>

        <div className="list-item" id="aria-label-failure-10">
          <div role="none" aria-label="None label">
            Failure: The `role="none"` is functionally equivalent to `role="presentation"` and should not use `aria-label`.
          </div>
        </div>

        <div className="list-item" id="aria-label-failure-11">
          <div role="article" aria-label="Article label">
            Failure: The `role="article"` already implies content and does not need an `aria-label`.
          </div>
        </div>

        <div className="list-item" id="aria-label-failure-12">
          <div role="img" aria-label="Image description">
            Failure: The `role="img"` should not have an `aria-label` if there is visible descriptive text.
          </div>
        </div>

        <div className="list-item" id="aria-label-failure-13">
          <section role="group" aria-label="Grouped content">
            Failure: The `role="group"` should not use an `aria-label` when there is visible content inside the group.
          </section>
        </div>
        <div className="list-item" id="aria-label-failure-14">
          <div role="banner" aria-label="Banner label">
            Failure: The `role="banner"` should not use an `aria-label` when there is visible content inside the banner.
          </div>
        </div>
        <div className="list-item" id="aria-label-failure-15">
          <div role="navigation" aria-label="Navigation label">
            Failure: The `role="navigation"` should not use an `aria-label` when there is visible content inside the navigation.
          </div> </div>
        <Typography variant="h6" color="text.secondary" sx={{ mb: 2 }}>Label for Examples</Typography>
        <div className="list-item" id="for-attribute-failure-1">
          <label htmlFor="username-input">Username</label>
          <input
            type="text"
            id="username-input"
            aria-label="Username field"
          />
          <span className="error-text">
            Failure: Using both `htmlFor` and `aria-label` on the same field is redundant. The label is already linked to the input via the `id`.
          </span>
        </div>

        <div className="list-item" id="for-attribute-failure-2">
          <label htmlFor="email-input">Email</label>
          <input
            type="email"
            id="email-input"
            aria-labelledby="nonexistent-id"
          />
          <span className="error-text">
            Failure: The `aria-labelledby` attribute references a non-existent ID, causing the label association to fail.
          </span>
        </div>

        <div className="list-item" id="for-attribute-failure-3">
          <label htmlFor="password-input">Password</label>
          <input
            type="password"
            id="password-input"
          />
          <span className="error-text">
            Success: The `htmlFor` attribute correctly links the label to the input, providing an accessible name for screen readers.
          </span>
        </div>

        <div className="list-item" id="for-attribute-failure-4">
          <label>Password</label>
          <input
            type="password"
            aria-label="Password field"
          />
          <span className="error-text">
            Failure: The label is missing a `htmlFor` attribute, making it inaccessible to screen readers. Use `htmlFor` to associate the label with the input.
          </span>
        </div>

        <div className="list-item" id="for-attribute-failure-5">
          <label htmlFor="confirm-password-input">Confirm Password</label>
          <input
            type="password"
            id="confirm-password-input"
            aria-describedby="password-requirements"
          />
          <p id="password-requirements" className="help-text">
            Your password must be at least 8 characters long.
          </p>
          <span className="error-text">
            Success: The `htmlFor` attribute links the label, and `aria-describedby` provides additional context for screen readers.
          </span>
        </div>

        <div className="list-item" id="for-attribute-failure-6">
          <label htmlFor="phone-number-input">Phone Number</label>
          <input
            type="tel"
            id="phone-number-input"
            aria-label="Phone number field"
          />
          <span className="error-text">
            Failure: Using both `htmlFor` and `aria-label` on the same field is redundant. Remove the `aria-label` when a label is already linked.
          </span>
        </div>
        <div className="list-item" id="for-attribute-failure-7">
          <div htmlFor="phone-number-input">Phone Number</div>
          <input type="tel" id="phone-number-input" aria-label="Phone number field" />
          <span className="error-text">
            Failure: The `htmlFor` attribute should be used with a `label` element, not a `div`. Use a `label` element to associate the label with the input.
          </span>
        </div>
        <div className="list-item" id="for-attribute-failure-8">
          <label htmlFor="phone-number-input">Phone Number</label>
          <input type="tel" id="phone-number-input" aria-label="Phone number field" />
          <span className="error-text">
            Failure: The `htmlFor` attribute is used correctly, but the `aria-label` attribute is redundant. Remove the `aria-label` when a label is already linked.
          </span>
          </div>
      </>
    }
    itemDescription={itemDescription}
  />
);