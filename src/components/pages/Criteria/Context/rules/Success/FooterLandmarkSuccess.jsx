import React from "react";
import IssueSuccess from "../../../../../layout/issueSuccess";

const itemDescription = "Context: Footer Landmark - Success";

export default () => (
  <IssueSuccess
    itemContent={
      <>
        <div className="list-item" id="footer-landmark-success-1">
          <footer>
            <a href="/about">About Us</a> | <a href="/contact">Contact</a> | <a href="/privacy">Privacy Policy</a>
          </footer>
        </div>
        <div className="list-item" id="footer-landmark-success-2">
          <div role="contentinfo" aria-label="footer">
            <a href="/about">About Us</a> | <a href="/contact">Contact</a> | <a href="/terms">Terms of Service</a>
          </div>
        </div>
        <div className="list-item" id="footer-landmark-success-3">
          <footer aria-label="main footer">
            <a href="/about">About</a> | <a href="/support">Support</a> | <a href="/feedback">Feedback</a>
          </footer>
        </div>
        <div className="list-item" id="footer-landmark-success-4">
          <div role="contentinfo" aria-labelledby="footer-label">
            <a href="/company">Company</a> | <a href="/careers">Careers</a> | <a href="/legal">Legal</a>
          </div>
        </div>
        <div className="list-item" id="footer-landmark-success-5">
          <footer role="contentinfo">
            <a href="/help">Help</a> | <a href="/accessibility">Accessibility</a> | <a href="/security">Security</a>
          </footer>
        </div>
        <div className="list-item" id="footer-landmark-success-6">
          <div role="contentinfo" aria-label="footer">
            <a href="/faq">FAQ</a> | <a href="/terms">Terms of Use</a> | <a href="/sitemap">Sitemap</a>
          </div>
        </div>
      </>
    }
    itemDescription={itemDescription}
  />
);
