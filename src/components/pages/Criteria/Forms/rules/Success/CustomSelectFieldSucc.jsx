import React from "react";
import IssueSuccess from "../../../../../layout/issueSuccess";

const itemDescription = "Forms - Custom Select Field Success";

const CustomSelectFieldSuccess = () => {
  return (
    <IssueSuccess
      itemContent={
        <div>
          <p>Custom select fields should be made accessible</p>
          <p>
            Screen readers have built-in mechanisms to handle select fields. By
            default, assistive technology does not support custom select fields,
            and using those may prevent screen reader users from interacting
            with the fields.
          </p>
          <p>
            Resolution: Create a standard select field with all the options and
            make it available only for screen readers using the screen reader
            only technique. Then, hide the custom select box from screen readers
            using <code>aria-hidden=true</code>. Don't forget to add the same
            functionality to this hidden field as your custom one. Using this
            method, screen readers will not "see" the custom field but will see
            the standard one and interact with it regularly.
          </p>
          <ul>
            <select className="screen-reader-only">
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select>
            <div aria-hidden="true">
              <button>Volvo</button>
              <ul style={{ display: "none" }}>
                <li>Saab</li>
                <li>Mercedes</li>
                <li>Audi</li>
              </ul>
            </div>
            <div
              role="combobox"
              aria-expanded="false"
              aria-owns="ex1-grid"
              aria-haspopup="grid"
              id="ex1-combobox"
            >
              <input
                type="text"
                aria-autocomplete="none"
                aria-controls="ex1-grid"
                id="ex1-input"
              />
            </div>
          </ul>
          <ul id="ex1-grid" role="grid" aria-readonly="true">
            <li className="list-item" role="row">
              <span role="gridcell" id="ex1-option-1">
                Option 1
              </span>
            </li>
            <li className="list-item" role="row">
              <span role="gridcell" id="ex1-option-2">
                Option 2
              </span>
            </li>
          </ul>
        </div>
      }
      itemDescription={itemDescription}
    />
  );
};

export default CustomSelectFieldSuccess;
