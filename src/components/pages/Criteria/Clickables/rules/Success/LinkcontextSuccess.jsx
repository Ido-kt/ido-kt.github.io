import React from "react";
import IssueSuccess from "../../../../../layout/issueSuccess";

const itemDescription = "Clickables : Link Context - Success";

export default () => (
  <IssueSuccess
    itemContent={
      <>
        <li className="list-item" id="rule-success-1">
          <a href="https://example.com/cart" aria-label="Go to shopping cart">Cart</a>
        </li>
        <li className="list-item" id="rule-success-2">
          <a href="https://facebook.com/company" aria-label="Visit our Facebook page">Facebook</a>
        </li>
        <li className="list-item" id="rule-success-3">
          <a href="https://example.com/search" aria-label="Search the site">Search</a>
        </li>
        <li className="list-item" id="rule-success-4">
          <a href="https://example.com/blog" aria-label="Read our latest blog posts">Blog</a>
        </li>
        <li className="list-item" id="rule-success-5">
          <a href="https://example.com/support" aria-label="Get support for our services">Support</a>
        </li>
        <li className="list-item" id="rule-success-6">
          <a href="https://example.com/profile" aria-label="View your profile">Profile</a>
        </li>
        <a href="login-en.html" class="btn btn-outline-primary" role="link" aria-label="English login page">Login (English)</a>
        <a href="login-es.html" class="btn btn-outline-primary" role="link" aria-label="Spanish login page">Iniciar sesión (Español)</a>
        <a href="mailto:your-email@example.com" class="btn btn-outline-primary" role="link" aria-label="Send us an email">Email us</a>
        <a href="tel:+11234567890" class="btn btn-outline-primary" role="link" aria-label="Call us at +1 123 456 7890">Call us</a>
        <a href="login.html"><img src="login-icon.png" alt="Login Page" /></a>
        <p>For more details, <a href="info.html" class="successful-context-link">see our information page</a>.</p>
        <a href="login.html" class="successful-screen-reader-link" aria-label="Login Page">Login</a>
        <a href="https://instagram.com" class="successful-standard-interactive-link" role="link" aria-label="Instagram">Instagram</a>
        <a href="https://google.com" class="successful-match-link">Google</a>
        <a href="https://facebook.com/yourusername" class="btn btn-outline-primary" role="link" aria-label="Our Facebook profile">Facebook</a>
        <a href="https://instagram.com/yourusername" class="btn btn-outline-primary" role="link" aria-label="Our Instagram profile">Instagram</a>


      </>
    }
    itemDescription={itemDescription}
  />
);
