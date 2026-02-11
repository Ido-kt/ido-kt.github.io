import React from "react";
import EngineIssueSuccess from "../../../layout/engineIssueSuccess";

const SrHiddenTabbableSuccess = () => {
  const ruleId = "sr-hidden-tabbable";
  const title = `Elements hidden from screen-reader must not contain tabbable elements.`;
  const description = `although the elements are hidden from assistive technologies, users can still navigate to any focusable child elements using the keyboard, but their content is inaccessible to people who use assistive technologies.`;
  const helpText = `Remove the tabindex attribute from the non-interactive element or set it to -1. This will prevent the element from being focused on by keyboard users.`;
  const bestPractices = [
  "Follow proper HTML semantics",
  "Ensure screen reader compatibility",
  "Test with assistive technologies"
  ];
  const htmlExamples = [
  { filename: "button hidden", content: `<button hidden>Not tabbable button</button>` },
  { filename: "form role none", content: `<form role="none">
  <label for="fname">First Name:</label><br />
  <input type="text" id="fname" name="fname" required /><br /><br />

  <label for="lname">Last Name:</label><br />
  <input type="text" id="lname" name="lname" required /><br /><br />

  <label for="address">Address:</label><br />
  <input type="text" id="address" name="address" required /><br /><br />

  <input type="submit" value="Submit" />
</form>` },
  { filename: "form role presentation", content: `<form role="presentation">
  <label for="fname">First Name:</label><br />
  <input type="text" id="fname" name="fname" required /><br /><br />

  <label for="lname">Last Name:</label><br />
  <input type="text" id="lname" name="lname" required /><br /><br />

  <label for="address">Address:</label><br />
  <input type="text" id="address" name="address" required /><br /><br />

  <input type="submit" value="Submit" />
</form>` },
  { filename: "hidden not tabbable", content: `<div hidden>
  <p>This is a paragraph.</p>
</div>` },
  { filename: "hidden with tabindex", content: `<form hidden>
  <label for="fname">First Name:</label><br />
  <input type="text" id="fname" name="fname" required tabindex="-1" /><br /><br />

  <label for="lname">Last Name:</label><br />
  <input type="text" id="lname" name="lname" required tabindex="-1" /><br /><br />

  <label for="address">Address:</label><br />
  <input type="text" id="address" name="address" required tabindex="-1" /><br /><br />

  <input type="submit" value="Submit" tabindex="-1" />
</form>` }
  ];

  return (
    <EngineIssueSuccess
      ruleId={ruleId}
      title={title}
      description={description}
      helpText={helpText}
      bestPractices={bestPractices}
      htmlExamples={htmlExamples}
    />
  );
};

export default SrHiddenTabbableSuccess;
