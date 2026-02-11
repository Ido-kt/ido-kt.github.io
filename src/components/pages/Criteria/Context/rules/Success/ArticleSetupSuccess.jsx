import React from "react";
import IssueSuccess from "../../../../../layout/issueSuccess";

const itemDescription = "Context: Article Setup - Success";

export default () => (
  <IssueSuccess
    itemContent={
      <>
        <li className="list-item" id="rule-success-1">
          <div>This is not a full-featured article, using a &lt;div&gt; instead of &lt;article&gt;.</div>
        </li>
        <li className="list-item" id="rule-success-2">
          <section>This content doesn't require a specific article role.</section>
        </li>
        <li className="list-item" id="rule-success-3">
          <div role="presentation">Resetting an incorrect article role to avoid unnecessary semantics.</div>
        </li>
        <li className="list-item" id="rule-success-4">
          <div>This container has no need for an article role, correctly using a &lt;div&gt; tag.</div>
        </li>
        <li className="list-item" id="rule-success-5">
          <div role="none">This element should not have an article role, using role="none" instead.</div>
        </li>
        <li className="list-item" id="rule-success-6">
          <span>A simple &lt;span&gt; element used correctly without unnecessary roles.</span>
        </li>
      </>
    }
    itemDescription={itemDescription}
  />
);
