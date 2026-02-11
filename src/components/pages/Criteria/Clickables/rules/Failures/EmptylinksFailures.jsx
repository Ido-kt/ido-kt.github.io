import React from "react";
import IssueFailure from "../../../../../layout/issueFailure";

const itemDescription = "Clickables : Empty Links - Failure";

export default () => (
  <IssueFailure
    itemContent={
      <>
        <li className="list-item" id="rule-failure-1">
          <a href="https://example.com/products"></a>
        </li>
        <li className="list-item" id="rule-failure-2">
          <a href="https://example.com/blog"><span aria-hidden="true">→</span></a>
        </li>
        <li className="list-item" id="rule-failure-3">
          <a href="https://example.com/gallery"><img src="gallery-icon.png" alt="" /></a>
        </li>
        <li className="list-item" id="rule-failure-4">
          <a href="https://example.com/contact" aria-label=""></a>
        </li>
        <li className="list-item" id="rule-failure-5">
          <a href="https://example.com/services"><span></span></a>
        </li>
        <li className="list-item" id="rule-failure-6">
          <a href="https://example.com/about" aria-labelledby="nonexistent-element"></a>
        </li>
        <li className="list-item" id="rule-failure-7">
          <a href="https://example.com/download">
            <i className="fas fa-download" aria-hidden="true"></i>
          </a>
        </li>
        <li className="list-item" id="rule-failure-8">
          <a href="https://example.com/social">
            <svg aria-hidden="true" width="20" height="20">
              <circle cx="10" cy="10" r="5"/>
            </svg>
          </a>
        </li>
        <li className="list-item" id="rule-failure-9">
          <a href="https://example.com/search" title="Search">
            <img src="search-icon.png" alt=""/>
          </a>
        </li>
        <li className="list-item" id="rule-failure-10">
          <a href="https://example.com/cart" aria-describedby="cart-description">
            <span aria-hidden="true">🛒</span>
          </a>
        </li>
        <li className="list-item" id="rule-failure-11">
          <a href="https://example.com/profile">
            <div style={{width: '20px', height: '20px', backgroundColor: '#007cba'}}></div>
          </a>
        </li>
        <li className="list-item" id="rule-failure-12">
          <a href="https://example.com/help">
            <span role="presentation">?</span>
          </a>
        </li>
        <li className="list-item" id="rule-failure-13">
          <a href="https://example.com/settings" aria-label="   ">
            <img src="settings.png" alt="   "/>
          </a>
        </li>
        <li className="list-item" id="rule-failure-14">
          <a href="javascript:void(0)" onclick="openModal()">
            <span className="visually-hidden"></span>
          </a>
        </li>
        <li className="list-item" id="rule-failure-15">
          <a href="https://example.com/news">
            <span>&nbsp;</span>
          </a>
        </li>
      </>
    }
    itemDescription={itemDescription}
  />
);
