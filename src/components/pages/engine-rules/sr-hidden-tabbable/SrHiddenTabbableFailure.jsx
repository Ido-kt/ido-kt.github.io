import React from "react";
import EngineIssueFailure from "../../../layout/engineIssueFailure";

const SrHiddenTabbableFailure = () => {
  const ruleId = "sr-hidden-tabbable";
  const title = `Elements hidden from screen-reader must not contain tabbable elements.`;
  const description = `although the elements are hidden from assistive technologies, users can still navigate to any focusable child elements using the keyboard, but their content is inaccessible to people who use assistive technologies.`;
  const helpText = `Remove the tabindex attribute from the non-interactive element or set it to -1. This will prevent the element from being focused on by keyboard users.`;
  const fixSteps = [
  "Review the HTML structure",
  "Apply proper accessibility attributes",
  "Test with screen readers"
  ];
  const htmlExamples = [
  { filename: "form aria hidden", content: `<form aria-hidden="true">
  <label for="fname">First Name:</label><br />
  <input type="text" id="fname" name="fname" required /><br /><br />

  <label for="lname">Last Name:</label><br />
  <input type="text" id="lname" name="lname" required /><br /><br />

  <label for="address">Address:</label><br />
  <input type="text" id="address" name="address" required /><br /><br />

  <input type="submit" value="Submit" />
</form>` },
  { filename: "form hidden", content: `<form hidden>
  <label for="fname">First Name:</label><br />
  <input type="text" id="fname" name="fname" required /><br /><br />

  <label for="lname">Last Name:</label><br />
  <input type="text" id="lname" name="lname" required /><br /><br />

  <label for="address">Address:</label><br />
  <input type="text" id="address" name="address" required /><br /><br />

  <input type="submit" value="Submit" />
</form>` }
  ];

  return (
    <EngineIssueFailure
      ruleId={ruleId}
      title={title}
      description={description}
      helpText={helpText}
      fixSteps={fixSteps}
      htmlExamples={htmlExamples}
    />
  );
};

export default SrHiddenTabbableFailure;
