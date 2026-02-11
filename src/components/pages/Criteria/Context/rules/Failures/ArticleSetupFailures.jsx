import React from "react";
import IssueFailure from "../../../../../layout/issueFailure";

const itemDescription = "Context: Article Setup - Failure";

export default () => (
  <IssueFailure
    itemContent={
      <>
        <li className="list-item" id="rule-failure-1">
          <article>This is just a basic container, but it's incorrectly marked as an article.</article>
        </li>
        <li className="list-item" id="rule-failure-2">
          <article role="article">Redundant article role, making it more verbose than necessary.</article>
        </li>
        <li className="list-item" id="rule-failure-3">
          <article>This is used to group images but should not be marked as an article.</article>
        </li>
        <li className="list-item" id="rule-failure-4">
          <article>This is a list item, not a complete article, incorrect semantics.</article>
        </li>
        <li className="list-item" id="rule-failure-5">
          <article role="article">Role attribute is unnecessary, adding semantic redundancy.</article>
        </li>
        <li className="list-item" id="rule-failure-6">
          <article>This container element is used for layout purposes, it should use &lt;div&gt; or another non-semantic tag.</article>
        </li>
      </>
    }
    itemDescription={itemDescription}
  />
);
