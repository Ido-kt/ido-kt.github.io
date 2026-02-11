import React from "react";
import IssueFailure from "../../../../../layout/issueFailure";

const itemDescription = "Context: Footer Landmark - Failure";

export default () => (
  <IssueFailure
    itemContent={
      <>
        <div className="list-item" id="footer-landmark-failure-1">
          <div className="footer-content">
            <p>© 2025 Company Inc. All rights reserved.</p>
            <a href="/about">About Us</a> | <a href="/contact">Contact</a> | <a href="/privacy">Privacy Policy</a>
          </div>
        </div>
        <div className="list-item" id="footer-landmark-failure-2">
          <section className="site-footer">
            <p>Contact us: (555) 123-4567 | support@example.com</p>
            <a href="/about">About</a> | <a href="/careers">Careers</a> | <a href="/legal">Legal</a>
          </section>
        </div>
        <div className="list-item" id="footer-landmark-failure-3">
          <div id="page-footer">
            <nav>
              <a href="/home">Home</a> | <a href="/products">Products</a> | <a href="/support">Support</a>
            </nav>
            <p>© 2025 All rights reserved</p>
          </div>
        </div>
        <div className="list-item" id="footer-landmark-failure-4">
          <footer role="banner">
            <a href="/company">Company</a> | <a href="/investors">Investors</a> | <a href="/press">Press</a>
          </footer>
        </div>
        <div className="list-item" id="footer-landmark-failure-5">
          <footer role="navigation">
            <a href="/help">Help</a> | <a href="/accessibility">Accessibility</a> | <a href="/security">Security</a>
          </footer>
        </div>
        <div className="list-item" id="footer-landmark-failure-6">
          <footer aria-hidden="true">
            <a href="/faq">FAQ</a> | <a href="/terms">Terms of Use</a> | <a href="/sitemap">Sitemap</a>
          </footer>
        </div>
        <div className="list-item" id="footer-landmark-failure-7">
          <footer role="presentation">
            <a href="/newsletter">Newsletter</a> | <a href="/blog">Blog</a> | <a href="/media">Media</a>
          </footer>
        </div>
        <div className="list-item" id="footer-landmark-failure-8">
          <div role="complementary" className="footer-area">
            <a href="/partners">Partners</a> | <a href="/locations">Locations</a> | <a href="/events">Events</a>
          </div>
        </div>
        <div className="list-item" id="footer-landmark-failure-9">
          <div role="main" className="bottom-content">
            <a href="/support">Support</a> | <a href="/docs">Documentation</a> | <a href="/api">API</a>
          </div>
        </div>
        <div className="list-item" id="footer-landmark-failure-10">
          <article className="footer-info">
            <p>Follow us on social media</p>
            <a href="/facebook">Facebook</a> | <a href="/twitter">Twitter</a> | <a href="/linkedin">LinkedIn</a>
          </article>
        </div>
        <div className="list-item" id="footer-landmark-failure-11">
          <aside className="bottom-links">
            <a href="/terms">Terms</a> | <a href="/conditions">Conditions</a> | <a href="/refunds">Refunds</a>
          </aside>
        </div>
        <div className="list-item" id="footer-landmark-failure-12">
          <footer role="none">
            <a href="/careers">Careers</a> | <a href="/offices">Offices</a> | <a href="/contact">Contact</a>
          </footer>
        </div>
      </>
    }
    itemDescription={itemDescription}
  />
);
