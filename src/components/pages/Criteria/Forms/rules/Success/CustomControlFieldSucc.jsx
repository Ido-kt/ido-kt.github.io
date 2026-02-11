import React from "react";
import IssueSuccess from "../../../../../layout/issueSuccess";

const itemDescription = "Form - Custom Control Field Success";

export default () => (
  <IssueSuccess
    itemContent={
      <>
        <h1>Custom Control Field</h1>
        <p>
          Screen readers have built-in mechanisms to handle checkboxes. By
          default, assistive technology does not support custom checkboxes, and
          using those may prevent screen reader users from interacting with the
          fields.
        </p>
        <p>
          Screen readers have built-in mechanisms to handle checkboxes. By
          default, assistive technology does not support custom checkboxes, and
          using those may prevent screen reader users from interacting with the
          fields.
        </p>
        <p>
          If you are using standard LABEL and INPUT fields to design the custom
          checkbox using CSS, you need to ensure that the checkbox input is
          fully visible to assistive technology and the browser, but only
          visually hidden. To ensure that, you can hide it using opacity, width,
          height, and positioning, but never hide it using display=none or
          visibility=hidden.
        </p>
        <label for="checkbox1">Option 1</label>
        <input class="visually-hidden" type="checkbox" id="checkbox1" />
        <div role="checkbox" aria-checked="false" tabindex="0">
          Option 1
        </div>
        <input
          class="checkbox-custom"
          id="checkbox1"
          type="checkbox"
          role="checkbox"
          aria-checked="false"
        />
        <label class="checkbox-label" for="checkbox1">
          Option 1
        </label>
      </>
    }
    itemDescription={itemDescription}
  />
);
