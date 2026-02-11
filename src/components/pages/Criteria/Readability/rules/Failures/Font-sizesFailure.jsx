import React from "react";
import IssueFailure from "../../../../../layout/issueFailure";

const itemDescription = "Readability: Font Sizes - Failure";

export default () => (
  <IssueFailure
    itemContent={
      <>
        <div className="list-item" id="font-sizes-failure-1">
          <p style={{ fontSize: "10px" }}>This paragraph (p) uses a font size of 10px, making it unreadable.</p>
        </div>
        <div className="list-item" id="font-sizes-failure-2">
          <span style={{ fontSize: "11px" }}>This span uses a font size of 11px, which is too small for accessibility.</span>
        </div>
        <div className="list-item" id="font-sizes-failure-3">
          <h1 style={{ fontSize: "11px" }}>This heading (h1) uses 12px, which is unsuitable for readability.</h1>
        </div>
        <div className="list-item" id="font-sizes-failure-4">
          <h2 style={{ fontSize: "9px" }}>This heading (h2) uses a font size of 9px, making it hard to read.</h2>
        </div>
        <div className="list-item" id="font-sizes-failure-5">
          <h3 style={{ fontSize: "8px" }}>This heading (h3) uses a font size of 8px, which is inaccessible.</h3>
        </div>
        <div className="list-item" id="font-sizes-failure-6">
          <h4 style={{ fontSize: "7px" }}>This heading (h4) uses 7px, which is unreadable for most users.</h4>
        </div>
        <div className="list-item" id="font-sizes-failure-7">
          <h5 style={{ fontSize: "10px" }}>This heading (h5) uses 10px, far too small to be readable.</h5>
        </div>
        <div className="list-item" id="font-sizes-failure-8">
          <h6 style={{ fontSize: "8px" }}>This heading (h6) uses 8px, making it very difficult to read.</h6>
        </div>
        <div className="list-item" id="font-sizes-failure-9">
          <label style={{ fontSize: "9px" }}>This label uses a font size of 9px, which is not user-friendly.</label>
        </div>
        <div className="list-item" id="font-sizes-failure-10">
          <button style={{ fontSize: "7px" }}>This button text uses a font size of 7px, making it illegible.</button>
        </div>
        <div className="list-item" id="font-sizes-failure-11">
          <a href="#" style={{ fontSize: "8px" }}>This link text (a) uses 8px, making it hard to interact with.</a>
        </div>
        <div className="list-item" id="font-sizes-failure-12">
          <strong style={{ fontSize: "10px" }}>This strong text uses a font size of 10px, which is insufficient.</strong>
        </div>
        <div className="list-item" id="font-sizes-failure-13">
          <em style={{ fontSize: "10px" }}>This emphasized text (em) uses a font size of 10px, too small for readability.</em>
        </div>
        <div className="list-item" id="font-sizes-failure-14">
          <blockquote style={{ fontSize: "11px" }}>This blockquote uses a font size of 11px, making it unreadable.</blockquote>
        </div>
        <div className="list-item" id="font-sizes-failure-15">
          <code style={{ fontSize: "9px" }}>This code snippet uses 9px, too small for developers to read easily.</code>
        </div>
        <div className="list-item" id="font-sizes-failure-16">
          <pre style={{ fontSize: "9px" }}>This preformatted text uses 9px, which is not accessible.</pre>
        </div>
        <div className="list-item" id="font-sizes-failure-17">
          <abbr style={{ fontSize: "8px" }} title="Abbreviation">Abbr</abbr>
          uses 8px, which is too small to be legible.
        </div>
        <div className="list-item" id="font-sizes-failure-18">
          <cite style={{ fontSize: "8px" }}>This citation (cite) uses 8px, making it difficult to read.</cite>
        </div>
        <div className="list-item" id="font-sizes-failure-19">
          <small style={{ fontSize: "6px" }}>This small tag uses 6px, extremely unreadable.</small>
        </div>
        <div className="list-item" id="font-sizes-failure-20">
          <time style={{ fontSize: "7px" }} dateTime="2024-12-24">
            This time element uses 7px, making it illegible.
          </time>
        </div>
      </>
    }
    itemDescription={itemDescription}
  />
);