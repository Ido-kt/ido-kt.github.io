import React from "react";
import IssueSuccess from "../../../../../layout/issueSuccess";

const itemDescription = "Errors: ARIA Label Misuse - Success";

export default () => (
    <IssueSuccess
      itemContent={
        <>
           <div className="list-item" id="aria-label-success-1">
          {/* A button to resend a verification email with a clear ARIA label */}
          <button aria-label="Resend verification email">Resend</button>
        </div>
        <div className="list-item" id="aria-label-success-2">
          {/* An input field for a username with a descriptive ARIA label */}
          <input 
            type="text" 
            aria-label="Enter your username" 
            placeholder="Username"
          />
        </div>
        <div className="list-item" id="aria-label-success-3">
          {/* A link to troubleshooting help with an actionable ARIA label */}
          <a 
            href="/help" 
            aria-label="Learn more about troubleshooting login issues">
            Troubleshooting Help
          </a>
        </div>
        <div className="list-item" id="aria-label-success-4">
          {/* A section summarizing form errors with a meaningful ARIA label */}
          <section aria-label="Form error summary">
            <p>There are errors in your form submission. Please correct them.</p>
          </section>
        </div>
        <div className="list-item" id="aria-label-success-5">
          {/* A navigation bar for error links with an appropriate ARIA label */}
          <nav aria-label="Error navigation">
            <button href="#error1" type="button">Go to first error</button>
          </nav>
        </div>
        <div className="list-item" id="aria-label-success-6">
          {/* An error icon with a descriptive ARIA label for context */}
          <img 
            src="/images/error-icon.png" 
            aria-label="Critical error icon" 
            alt="Critical error"
          />
        </div>
        <div className="list-item" id="aria-labelledby-success-1">
          {/* Form field linked to a visible error message using aria-labelledby */}
          <label id="email-label">Email Address</label>
          <input 
            type="email" 
            id="email-input" 
            aria-labelledby="email-label email-error"
          />
          <span id="email-error" className="error-text">
            Please enter a valid email address.
          </span>
        </div>
        </>
      }
      itemDescription={itemDescription}
    />
  );
