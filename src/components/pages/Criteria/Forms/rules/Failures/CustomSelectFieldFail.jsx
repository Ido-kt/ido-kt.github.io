import React from "react";
import IssueFailure from "../../../../../layout/issueFailure";

const itemDescription = "Forms - Custom Select Field Failures";

export default () => (
  <IssueFailure
    itemContent={
      <ul>
        <li className="list-item">
          <div>
            <button>Volvo</button>
            <ul style={{ display: "none" }}>
              <li>Saab</li>
              <li>Mercedes</li>
              <li>Audi</li>
            </ul>
          </div>
        </li>
        <li className="list-item">
          <div>
            <button>Volvo</button>
            <ul style={{ display: "none" }}>
              <li>Saab</li>
              <li>Mercedes</li>
              <li>Audi</li>
            </ul>
          </div>
        </li>
        <li className="list-item">
          <select style={{ display: "none" }}>
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
        </li>
        <li className="list-item">
          <div role="textbox">
            <button>Volvo</button>
            <ul style={{ display: "none" }}>
              <li>Saab</li>
              <li>Mercedes</li>
              <li>Audi</li>
            </ul>
          </div>
        </li>
      </ul>
    }
    itemDescription={itemDescription}
  />
);
