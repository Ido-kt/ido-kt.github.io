import React from "react";
import IssueSuccess from "../../../../../layout/issueSuccess";

const itemDescription = "Keyboard - Non Interactive Tab Index Success";

export default () => (
  <IssueSuccess
    itemContent={
      <ul>
        <li class="list-item">
          <a href="#" role="button" tabindex="0">
            A as Button
          </a>
        </li>
        <li class="list-item">
          <a href="#" role="link" tabindex="0">
            A as Link
          </a>
        </li>
        <li class="list-item">
          <span role="button" tabindex="0">
            Span as Button
          </span>
        </li>
        <li class="list-item">
          <div role="link" tabindex="0">
            Div as Link
          </div>
        </li>
        <li class="list-item">
          <img
            src="example.jpg"
            alt="example image"
            role="button"
            tabindex="0"
          />
        </li>
        <li class="list-item">
          <svg
            role="link"
            tabindex="0"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-bootstrap"
            viewBox="0 0 16 16"
          >
            <path d="M5.062 1h5.876c2.7 0 4.436 2.03 4.438 4.475v4.55C15.378 13.97 13.641 16 10.94 16H5.062C2.366 16 .625 13.975.623 10.525v-4.55C.625 3.03 2.365 1 5.062 1z" />
            <path d="M8 4.768c-1.58 0-2.633.875-2.633 2.012 0 .73.568 1.13 1.06 1.382.56.286 1.278.421 1.852.578v.154c0 .359-.15.577-.723.577-.602 0-.914-.224-1.106-.45l-1.235.666c.359.66 1.117 1.118 2.457 1.118 1.696 0 2.633-.843 2.635-2.056v-.652c-.106-.01-.222-.02-.345-.03-.758-.08-1.464-.15-1.464-.674 0-.33.27-.539.695-.539.602 0 .91.176 1.127.33l1.198-.77c-.408-.482-.984-.724-1.854-.724z" />
          </svg>
        </li>
        <li class="list-item">
          <input
            type="text"
            role="textbox"
            tabindex="0"
            placeholder="Input text"
          />
        </li>
        <li class="list-item">
          <input type="button" role="button" tabindex="0" value="Button" />
        </li>
        <li class="list-item">
          <input type="checkbox" role="checkbox" tabindex="0" />
        </li>
        <li class="list-item">
          <button role="button" tabindex="0">
            Button Element
          </button>
        </li>
        <li class="list-item">
          <select role="listbox" tabindex="0">
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
          </select>
        </li>
        <li class="list-item">
          <label for="inputField" tabindex="0">
            Label:
          </label>
          <input type="text" id="inputField" tabindex="0" />
        </li>
        <li class="list-item">
          <textarea role="textbox" tabindex="0"></textarea>
        </li>
      </ul>
    }
    itemDescription={itemDescription}
  />
);
