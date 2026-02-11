import React from "react";
import EngineIssueSuccess from "../../../layout/engineIssueSuccess";

const InputDiscernibleSuccess = () => {
  const ruleId = "input-discernible";
  const title = `Inputs must include a descriptive label`;
  const description = `Screen readers rely on correctly coded and associated labels to announce the purpose of a form field. If a label isn't properly associated with its input field, screen reader users won't know the expected input.`;
  const helpText = `Provide a <label> element and associate it with the <input> using the for and id attributes. Alternatively, you can assign an aria-label attribute directly to the <input> element.`;
  const bestPractices = [
  "Follow proper HTML semantics",
  "Ensure screen reader compatibility",
  "Test with assistive technologies"
  ];
  const htmlExamples = [
  { filename: "input with aria label", content: `<input type="text" id="username" aria-label="Username" />` },
  { filename: "input with for attr for element", content: `<label for="username">Username</label>
<input type="text" name="username" id="username">` },
  { filename: "input with implicit label", content: `<label>
  Username
  <input type="text" name="username" id="username" />
</label>` },
  { filename: "input with label element", content: `<input type="text" aria-labelledby="username" />
<label id="username">Username</label>` },
  { filename: "input with label with describedby", content: `<form>
    <label for="fname">First name</label>
    <input aria-describedby="int2" autocomplete="given-name" id="fname" type="text">
    <p id="int2">Your first name is sometimes called your "given name".</p>
  </form>` },
  { filename: "input with labelled by and described by", content: `<label id="username">Username</label>
<input type="text" aria-labelledby="username" aria-describedby="usernameHint" />
<span id="usernameHint">Enter your username, which is usually your email address.</span>` },
  { filename: "input with labelled by element", content: `<input type="text" aria-labelledby="username" />
<label id="username">Username</label>` },
  { filename: "select with aria label", content: `<select id="username" aria-label="Username"></select>` },
  { filename: "select with for attr for element", content: `<label for="username">Username</label>
<select name="username" id="username"></select>` },
  { filename: "select with label element", content: `<label id="username">Username</label>
<select aria-labelledby="username"></select>` },
  { filename: "textarea with aria label", content: `<textarea id="username" aria-label="Username"></textarea>` },
  { filename: "textarea with for attr for element", content: `<label for="username">Username</label>
<textarea name="username" id="username"></textarea>` },
  { filename: "textarea with label element", content: `<label id="username">Username</label>
<textarea aria-labelledby="username"></textarea>` }
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

export default InputDiscernibleSuccess;
