import React from "react";
import IssueFailure from "../../../../../layout/issueFailure";

const itemDescription = "Form - Custom Control Field Failures";

export default () => (
  <IssueFailure
    itemContent={
      <ul>
        <li className="list-item">
          <div>Option 1</div>
        </li>
        <li className="list-item">
          <label htmlFor="checkbox1">Option 1</label>
        </li>
        <li className="list-item">
          <input style={{ display: "none" }} type="checkbox" id="checkbox1" />
        </li>
        <li className="list-item">
          <div role="button">Option 1</div>
        </li>
        <li className="list-item">
          <input
            style={{ width: 0, height: 0, opacity: 0 }}
            type="checkbox"
            id="checkbox1"
          />
        </li>
        <li className="list-item">
          <input
            style={{ width: 0, height: 0, opacity: 0 }}
            type="checkbox"
            id="checkbox1"
          />
        </li>
        <li className="list-item">
          <label htmlFor="checkbox1">Submit</label>
        </li>
      </ul>
    }
    itemDescription={itemDescription}
  />
);
