import React from "react";
import IssueFailure from "../../../../../layout/issueFailure";

const itemDescription = "Clickables : Link Context - Failure";

export default () => (
    <IssueFailure
        itemContent={
            <>
                <li className="list-item" id="rule-failure-1">
                    <a href="https://example.com/cart">Click Here</a>
                </li>
                <li className="list-item" id="rule-failure-2">
                    <a href="https://facebook.com/company">Visit</a>
                </li>
                <li className="list-item" id="rule-failure-3">
                    <a href="https://example.com/search">Search</a>
                </li>
                <li className="list-item" id="rule-failure-4">
                    <a href="https://example.com/blog">Read More</a>
                </li>
                <li className="list-item" id="rule-failure-5">
                    <a href="https://example.com/support">Support</a>
                </li>
                <li className="list-item" id="rule-failure-6">
                    <a href="https://example.com/profile">Profile</a>
                </li>
                <a rel="noopener nofollow" target="_blank" href="https://www.facebook.com/FRIDArestaurantAmericana" class="wp-block-social-link-anchor" tabindex="-1">
                    <svg aria-hidden="true" focusable="false"><path d="..."></path></svg>
                    <span class="wp-block-social-link-label screen-reader-only" aria-hidden="true">Facebook</span>
                    <span class="sr-only">new window</span>
                </a>

                <a href="page1.html" class="failing-same-name-diff-hrefs-link">Click Here</a>
                <a href="page2.html" class="failing-same-name-diff-hrefs-link">Click Here</a>

                <a href="login.html" class="failing-svg-link"><svg width="50" height="50"><circle cx="25" cy="25" r="20" fill="blue"></circle></svg></a>

                <p>You can learn more <a href="info.html">here</a>.</p>

                <a href="login.html" class="failing-image-link"><img src="login-icon.png" /></a>

                <p>For more details, <a href="info.html" class="failing-generic-text-link">click here</a>.</p>

                <a href="login.html" class="failing-screen-reader-context-link">Login</a>

                <div onclick="location.href='https://instagram.com'" class="failing-interactive-element">Instagram</div>

                <a href="javascript:void(0);" onclick="myFunction()" class="failing-javascript-link">Do Something</a>

                <a href="https://yahoo.com" class="failing-text-match-link">Google</a>

            </>
        }
        itemDescription={itemDescription}
    />
);
