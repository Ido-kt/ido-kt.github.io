import React from "react";
import EngineIssueFailure from "../../../layout/engineIssueFailure";

const VisibleTextPartOfAccessibleNameFailure = () => {
  const ruleId = "visible-text-part-of-accessible-name";
  const title = `Aria labels should not override or replace visible text`;
  const description = `Aria labels should describe elements that don't have proper text, like icons and field labels. It should not be used to override element texts. Screen reader users need to receive the exact text as visually on the screen, with more context if it is ambiguous. An exception applies to landmarks such as nav or other landmarks: here, ARIA labels can provide additional context or clarification.`;
  const helpText = `Remove the aria-label. If you need to add context for screen reader users only because of the ambiguity of the text, use the screen-reader-only technique.`;
  const fixSteps = [
  "Review the HTML structure",
  "Apply proper accessibility attributes",
  "Test with screen readers"
  ];
  const htmlExamples = [
  { filename: "anchor aria label incl text", content: `<a href="#" aria-label="this is a test, and some clarification">this is Gazorpazorp" </a>` },
  { filename: "anchor aria labelledby incl text", content: `<label id="l1">this is a test, and some clarification</label>
<a href="#" aria-labelledby="l1">this is Gazorpazorp</a>` },
  { filename: "anchor multi aria labelledby incl text", content: `<label id="l1">this is a car, and some clarification</label>
<label id="l2">this is a pole, and some cash</label>
<a href="#" aria-labelledby="l1 l2">this is a test</a>` },
  { filename: "aria label is different from visible text", content: `<a href="https://act-rules.github.io/" aria-label="WCAG">ACT rules</a>` },
  { filename: "button aria label incl text", content: `<button aria-label="this is a test, and some clarification">this is Uranium</button>` },
  { filename: "button aria label partially contains visible text", content: `<button aria-label="the full">The full label</button>` },
  { filename: "button aria labelledby incl text", content: `<label id="l1">this is a test, and some clarification</label>
<button aria-labelledby="l1">this is Uranium</button>` },
  { filename: "button multi aria labelledby incl text", content: `<label id="l1">this is a pool, and some clarification</label>
<label id="l2">this is an axe, and some cash</label>
<button aria-labelledby="l1 l2">this is a test</button>` },
  { filename: "checkbox visible text is different from aria label", content: `<label for="terms"> Accept terms and conditions </label>
<input type="checkbox" name="terms" id="terms" aria-label="terms & conditions"/>` },
  { filename: "mathematic equations written differently in accname", content: `<a href="/" aria-label="Proof of two multiplied by two is four">Proof of 2&times;2=4</a>` },
  { filename: "option visible text is different from aria label", content: `<!-- TODO: skipped due to OPTION being considered non-renderable by classifier and ignored -->
<option aria-label="hello">Hello world</option>` },
  { filename: "radio visible text is different from aria label", content: `<label for="radio1"> Hello World </label>
<input type="radio" id="radio1" aria-label="hello" />` },
  { filename: "role checkbox visible text is different from aria label", content: `<div role="checkbox" aria-label="terms & conditions">Accept terms and conditions</div>` },
  { filename: "role gridcell visible text is different from aria label", content: `<!-- TODO: requires non existing CompliantComponentGridCell detector -->
<div role="gridcell" aria-label="hello">Hello world</div>` },
  { filename: "role link visible text is different from aria label", content: `<span data-href="https://mozilla.org" tabindex="0" role="link" aria-label="fake link"> Fake accessible link created using a span </span>` },
  { filename: "role menuitem visible text is different from aria label", content: `<div role="menuitem" aria-label="Keyboard"> Keyboard interactions </div>` },
  { filename: "role menuitemcheckbox visible text is different from aria label", content: `<!-- TODO: requires non existing CompliantComponentMenuItemCheckbox detector -->
<div role="menuitemcheckbox" aria-label="hello">Hello world</div>` },
  { filename: "role menuitemradio visible text is different from aria label", content: `<!-- TODO: requires non existing CompliantComponentMenuitemradio detector -->
<div role="menuitemradio" aria-label="hello">Hello world</div>` },
  { filename: "role option visible text is different from aria label", content: `<div role="option" aria-label="hello">Hello world</div>` },
  { filename: "role radio visible text is different from aria label", content: `<div role="radio" aria-label="hello">Hello world</div>` },
  { filename: "role switch visible text is different from aria label", content: `<div role="switch" aria-label="switch">Title of my switch</div>` },
  { filename: "role tab visible text is different from aria label", content: `<div role="tab" tabindex="0" aria-label="tab title">Title of my tab</div>` },
  { filename: "role treeitem visible text is different from aria label", content: `<!-- TODO: test is skipped due to non-existing CompliantComponentTreeItem detector -->
<div role="treeitem" aria-label="Hello">Hello world</div>` },
  { filename: "searchbox visible text is different from aria label", content: `<!-- TODO: requires non existant CompliantComponentSearchbox detector -->
<label for="searchbox">Search</label>
<input id="searchbox" type="search" aria-label="Find" />` },
  { filename: "switch visible text is different from aria label", content: `<label for="id-switch-1">Hello world</label>
<input id="id-switch-1" type="checkbox" role="switch" aria-label="hello" />` }
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

export default VisibleTextPartOfAccessibleNameFailure;
