import React from "react";
import EngineIssueSuccess from "../../../layout/engineIssueSuccess";

const RadioDiscernibleSuccess = () => {
  const ruleId = "radio-discernible";
  const title = `Radio controls should have a label`;
  const description = `Screen readers rely on properly coded and associated labels to announce the purpose of a form field. A radio control without an identifiable label may prevent screen reader users from completing the form.`;
  const helpText = `Assign a label to each radio control using <label for> with a matching id (or wrapping the <label> around the control), or ARIA attributes such as aria-label or aria-labelledby.`;
  const bestPractices = [
  "Follow proper HTML semantics",
  "Ensure screen reader compatibility",
  "Test with assistive technologies"
  ];
  const htmlExamples = [
  { filename: "button role radio with label", content: `<button role="radio" style="width: 15px; height: 15px; border: solid 1px blue">Toggle</button>` },
  { filename: "div as a custom radio with aria label", content: `<div class="radio-wrapper-1" tabindex="0" role="radio" aria-checked="false" aria-label="I agree to the terms" style="display: inline-block">
  <input class="substituted" type="radio" aria-hidden="true" />
  <span></span>
  <b class="pointer">I agree to the terms</b>
</div>
<b class="pointer">I agree to the terms</b>
<style>
  .radio-wrapper-1 *,
  .radio-wrapper-1 ::after,
  .radio-wrapper-1 ::before {
    box-sizing: border-box;
  }
  .radio-wrapper-1 [type="radio"].substituted {
    margin: 0;
    width: 0;
    height: 0;
    display: inline;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }
  .radio-wrapper-1 [type="radio"].substituted + span:before {
    content: "";
    display: inline-block;
    vertical-align: top;
    height: 1.15em;
    width: 1.15em;
    margin-right: 0.6em;
    color: rgba(0, 0, 0, 0.275);
    border: solid 0.06em;
    box-shadow: 0 0 0.04em, 0 0.06em 0.16em -0.03em inset, 0 0 0 0.07em transparent inset;
    border-radius: 0.2em;
    background: url('data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xml:space="preserve" fill="white" viewBox="0 0 9 9"><rect x="0" y="4.3" transform="matrix(-0.707 -0.7072 0.7072 -0.707 0.5891 10.4702)" width="4.3" height="1.6" /><rect x="2.2" y="2.9" transform="matrix(-0.7071 0.7071 -0.7071 -0.7071 12.1877 2.9833)" width="6.1" height="1.7" /></svg>')
        no-repeat center,
      white;
    background-size: 0;
    will-change: color, border, background, background-size, box-shadow;
    transform: translate3d(0, 0, 0);
    transition: color 0.1s, border 0.1s, background 0.15s, box-shadow 0.1s;
  }
  .radio-wrapper-1 [type="radio"].substituted:enabled:active + span:before,
  .radio-wrapper-1 [type="radio"].substituted:enabled + span:active:before {
    box-shadow: 0 0 0.04em, 0 0.06em 0.16em -0.03em transparent inset, 0 0 0 0.07em rgba(0, 0, 0, 0.1) inset;
    background-color: #f0f0f0;
  }
  .radio-wrapper-1 [type="radio"].substituted:checked + span:before {
    background-color: #3b99fc;
    background-size: 0.75em;
    color: rgba(0, 0, 0, 0.075);
  }
  .radio-wrapper-1 [type="radio"].substituted:checked:enabled:active + span:before,
  .radio-wrapper-1 [type="radio"].substituted:checked:enabled + span:active:before {
    background-color: #0a7ffb;
    color: rgba(0, 0, 0, 0.275);
  }
  .radio-wrapper-1 [type="radio"].substituted:focus + span:before {
    box-shadow: 0 0 0.04em, 0 0.06em 0.16em -0.03em transparent inset, 0 0 0 0.07em rgba(0, 0, 0, 0.1) inset, 0 0 0 3.3px rgba(65, 159, 255, 0.55), 0 0 0 5px rgba(65, 159, 255, 0.3);
  }
  .radio-wrapper-1 [type="radio"].substituted:focus:active + span:before,
  .radio-wrapper-1 [type="radio"].substituted:focus + span:active:before {
    box-shadow: 0 0 0.04em, 0 0.06em 0.16em -0.03em transparent inset, 0 0 0 0.07em rgba(0, 0, 0, 0.1) inset, 0 0 0 3.3px rgba(65, 159, 255, 0.55), 0 0 0 5px rgba(65, 159, 255, 0.3);
  }
  .radio-wrapper-1 [type="radio"].substituted:disabled + span:before {
    opacity: 0.5;
  }

  .radio-wrapper-1 [type="radio"].substituted.dark + span:before {
    color: rgba(255, 255, 255, 0.275);
    background-color: #222;
    background-image: url('data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xml:space="preserve" fill="rgba(34, 34, 34, 0.999)" viewBox="0 0 9 9"><rect x="0" y="4.3" transform="matrix(-0.707 -0.7072 0.7072 -0.707 0.5891 10.4702)" width="4.3" height="1.6" /><rect x="2.2" y="2.9" transform="matrix(-0.7071 0.7071 -0.7071 -0.7071 12.1877 2.9833)" width="6.1" height="1.7" /></svg>');
  }
  .radio-wrapper-1 [type="radio"].substituted.dark:enabled:active + span:before,
  .radio-wrapper-1 [type="radio"].substituted.dark:enabled + span:active:before {
    background-color: #444;
    box-shadow: 0 0 0.04em, 0 0.06em 0.16em -0.03em transparent inset, 0 0 0 0.07em rgba(255, 255, 255, 0.1) inset;
  }
  .radio-wrapper-1 [type="radio"].substituted.dark:checked + span:before {
    background-color: #a97035;
    color: rgba(255, 255, 255, 0.075);
  }
  .radio-wrapper-1 [type="radio"].substituted.dark:checked:enabled:active + span:before,
  .radio-wrapper-1 [type="radio"].substituted.dark:checked:enabled + span:active:before {
    background-color: #c68035;
    color: rgba(0, 0, 0, 0.275);
  }
  .radio-wrapper-1 [type="radio"].substituted + span {
    -webkit-user-select: none;
    user-select: none;
  }
  .pointer {
    cursor: pointer;
  }
</style>` },
  { filename: "div as a custom radio with aria labelledby", content: `<div class="radio-wrapper-1" tabindex="0" role="radio" aria-checked="false" aria-labelledby="example-1-label" style="display: inline-block">
  <input class="substituted" type="radio" aria-hidden="true" />
  <span></span>
</div>
<b id="example-1-label" class="pointer">I agree to the terms</b>
<style>
  .radio-wrapper-1 *,
  .radio-wrapper-1 ::after,
  .radio-wrapper-1 ::before {
    box-sizing: border-box;
  }
  .radio-wrapper-1 [type="radio"].substituted {
    margin: 0;
    width: 0;
    height: 0;
    display: inline;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }
  .radio-wrapper-1 [type="radio"].substituted + span:before {
    content: "";
    display: inline-block;
    vertical-align: top;
    height: 1.15em;
    width: 1.15em;
    margin-right: 0.6em;
    color: rgba(0, 0, 0, 0.275);
    border: solid 0.06em;
    box-shadow: 0 0 0.04em, 0 0.06em 0.16em -0.03em inset, 0 0 0 0.07em transparent inset;
    border-radius: 0.2em;
    background: url('data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xml:space="preserve" fill="white" viewBox="0 0 9 9"><rect x="0" y="4.3" transform="matrix(-0.707 -0.7072 0.7072 -0.707 0.5891 10.4702)" width="4.3" height="1.6" /><rect x="2.2" y="2.9" transform="matrix(-0.7071 0.7071 -0.7071 -0.7071 12.1877 2.9833)" width="6.1" height="1.7" /></svg>')
        no-repeat center,
      white;
    background-size: 0;
    will-change: color, border, background, background-size, box-shadow;
    transform: translate3d(0, 0, 0);
    transition: color 0.1s, border 0.1s, background 0.15s, box-shadow 0.1s;
  }
  .radio-wrapper-1 [type="radio"].substituted:enabled:active + span:before,
  .radio-wrapper-1 [type="radio"].substituted:enabled + span:active:before {
    box-shadow: 0 0 0.04em, 0 0.06em 0.16em -0.03em transparent inset, 0 0 0 0.07em rgba(0, 0, 0, 0.1) inset;
    background-color: #f0f0f0;
  }
  .radio-wrapper-1 [type="radio"].substituted:checked + span:before {
    background-color: #3b99fc;
    background-size: 0.75em;
    color: rgba(0, 0, 0, 0.075);
  }
  .radio-wrapper-1 [type="radio"].substituted:checked:enabled:active + span:before,
  .radio-wrapper-1 [type="radio"].substituted:checked:enabled + span:active:before {
    background-color: #0a7ffb;
    color: rgba(0, 0, 0, 0.275);
  }
  .radio-wrapper-1 [type="radio"].substituted:focus + span:before {
    box-shadow: 0 0 0.04em, 0 0.06em 0.16em -0.03em transparent inset, 0 0 0 0.07em rgba(0, 0, 0, 0.1) inset, 0 0 0 3.3px rgba(65, 159, 255, 0.55), 0 0 0 5px rgba(65, 159, 255, 0.3);
  }
  .radio-wrapper-1 [type="radio"].substituted:focus:active + span:before,
  .radio-wrapper-1 [type="radio"].substituted:focus + span:active:before {
    box-shadow: 0 0 0.04em, 0 0.06em 0.16em -0.03em transparent inset, 0 0 0 0.07em rgba(0, 0, 0, 0.1) inset, 0 0 0 3.3px rgba(65, 159, 255, 0.55), 0 0 0 5px rgba(65, 159, 255, 0.3);
  }
  .radio-wrapper-1 [type="radio"].substituted:disabled + span:before {
    opacity: 0.5;
  }

  .radio-wrapper-1 [type="radio"].substituted.dark + span:before {
    color: rgba(255, 255, 255, 0.275);
    background-color: #222;
    background-image: url('data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xml:space="preserve" fill="rgba(34, 34, 34, 0.999)" viewBox="0 0 9 9"><rect x="0" y="4.3" transform="matrix(-0.707 -0.7072 0.7072 -0.707 0.5891 10.4702)" width="4.3" height="1.6" /><rect x="2.2" y="2.9" transform="matrix(-0.7071 0.7071 -0.7071 -0.7071 12.1877 2.9833)" width="6.1" height="1.7" /></svg>');
  }
  .radio-wrapper-1 [type="radio"].substituted.dark:enabled:active + span:before,
  .radio-wrapper-1 [type="radio"].substituted.dark:enabled + span:active:before {
    background-color: #444;
    box-shadow: 0 0 0.04em, 0 0.06em 0.16em -0.03em transparent inset, 0 0 0 0.07em rgba(255, 255, 255, 0.1) inset;
  }
  .radio-wrapper-1 [type="radio"].substituted.dark:checked + span:before {
    background-color: #a97035;
    color: rgba(255, 255, 255, 0.075);
  }
  .radio-wrapper-1 [type="radio"].substituted.dark:checked:enabled:active + span:before,
  .radio-wrapper-1 [type="radio"].substituted.dark:checked:enabled + span:active:before {
    background-color: #c68035;
    color: rgba(0, 0, 0, 0.275);
  }
  .radio-wrapper-1 [type="radio"].substituted + span {
    -webkit-user-select: none;
    user-select: none;
  }
  .pointer {
    cursor: pointer;
  }
</style>` },
  { filename: "div as a custom radio with label", content: `<div class="radio-wrapper-1" tabindex="0" role="radio" aria-checked="false">
  <input id="example-1" class="substituted" type="radio" aria-hidden="true" />
  <label class="pointer" for="example-1">I agree to the terms</label>
</div>
<style>
  .radio-wrapper-1 *,
  .radio-wrapper-1 ::after,
  .radio-wrapper-1 ::before {
    box-sizing: border-box;
  }
  .radio-wrapper-1 [type="radio"].substituted {
    margin: 0;
    width: 0;
    height: 0;
    display: inline;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }
  .radio-wrapper-1 [type="radio"].substituted + label:before {
    content: "";
    display: inline-block;
    vertical-align: top;
    height: 1.15em;
    width: 1.15em;
    margin-right: 0.6em;
    color: rgba(0, 0, 0, 0.275);
    border: solid 0.06em;
    box-shadow: 0 0 0.04em, 0 0.06em 0.16em -0.03em inset, 0 0 0 0.07em transparent inset;
    border-radius: 0.2em;
    background: url('data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xml:space="preserve" fill="white" viewBox="0 0 9 9"><rect x="0" y="4.3" transform="matrix(-0.707 -0.7072 0.7072 -0.707 0.5891 10.4702)" width="4.3" height="1.6" /><rect x="2.2" y="2.9" transform="matrix(-0.7071 0.7071 -0.7071 -0.7071 12.1877 2.9833)" width="6.1" height="1.7" /></svg>')
        no-repeat center,
      white;
    background-size: 0;
    will-change: color, border, background, background-size, box-shadow;
    transform: translate3d(0, 0, 0);
    transition: color 0.1s, border 0.1s, background 0.15s, box-shadow 0.1s;
  }
  .radio-wrapper-1 [type="radio"].substituted:enabled:active + label:before,
  .radio-wrapper-1 [type="radio"].substituted:enabled + label:active:before {
    box-shadow: 0 0 0.04em, 0 0.06em 0.16em -0.03em transparent inset, 0 0 0 0.07em rgba(0, 0, 0, 0.1) inset;
    background-color: #f0f0f0;
  }
  .radio-wrapper-1 [type="radio"].substituted:checked + label:before {
    background-color: #3b99fc;
    background-size: 0.75em;
    color: rgba(0, 0, 0, 0.075);
  }
  .radio-wrapper-1 [type="radio"].substituted:checked:enabled:active + label:before,
  .radio-wrapper-1 [type="radio"].substituted:checked:enabled + label:active:before {
    background-color: #0a7ffb;
    color: rgba(0, 0, 0, 0.275);
  }
  .radio-wrapper-1 [type="radio"].substituted:focus + label:before {
    box-shadow: 0 0 0.04em, 0 0.06em 0.16em -0.03em transparent inset, 0 0 0 0.07em rgba(0, 0, 0, 0.1) inset, 0 0 0 3.3px rgba(65, 159, 255, 0.55), 0 0 0 5px rgba(65, 159, 255, 0.3);
  }
  .radio-wrapper-1 [type="radio"].substituted:focus:active + label:before,
  .radio-wrapper-1 [type="radio"].substituted:focus + label:active:before {
    box-shadow: 0 0 0.04em, 0 0.06em 0.16em -0.03em transparent inset, 0 0 0 0.07em rgba(0, 0, 0, 0.1) inset, 0 0 0 3.3px rgba(65, 159, 255, 0.55), 0 0 0 5px rgba(65, 159, 255, 0.3);
  }
  .radio-wrapper-1 [type="radio"].substituted:disabled + label:before {
    opacity: 0.5;
  }

  .radio-wrapper-1 [type="radio"].substituted.dark + label:before {
    color: rgba(255, 255, 255, 0.275);
    background-color: #222;
    background-image: url('data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xml:space="preserve" fill="rgba(34, 34, 34, 0.999)" viewBox="0 0 9 9"><rect x="0" y="4.3" transform="matrix(-0.707 -0.7072 0.7072 -0.707 0.5891 10.4702)" width="4.3" height="1.6" /><rect x="2.2" y="2.9" transform="matrix(-0.7071 0.7071 -0.7071 -0.7071 12.1877 2.9833)" width="6.1" height="1.7" /></svg>');
  }
  .radio-wrapper-1 [type="radio"].substituted.dark:enabled:active + label:before,
  .radio-wrapper-1 [type="radio"].substituted.dark:enabled + label:active:before {
    background-color: #444;
    box-shadow: 0 0 0.04em, 0 0.06em 0.16em -0.03em transparent inset, 0 0 0 0.07em rgba(255, 255, 255, 0.1) inset;
  }
  .radio-wrapper-1 [type="radio"].substituted.dark:checked + label:before {
    background-color: #a97035;
    color: rgba(255, 255, 255, 0.075);
  }
  .radio-wrapper-1 [type="radio"].substituted.dark:checked:enabled:active + label:before,
  .radio-wrapper-1 [type="radio"].substituted.dark:checked:enabled + label:active:before {
    background-color: #c68035;
    color: rgba(0, 0, 0, 0.275);
  }
  .radio-wrapper-1 [type="radio"].substituted + label {
    -webkit-user-select: none;
    user-select: none;
  }
  .pointer {
    cursor: pointer;
  }
</style>` },
  { filename: "div as a custom radio", content: `<div class="radio-wrapper-1" tabindex="0" role="radio" aria-checked="false">
  <input id="example-1" class="substituted" type="radio" aria-hidden="true" />
  <span>Option 1</span>
</div>
<style>
  .radio-wrapper-1 *,
  .radio-wrapper-1 ::after,
  .radio-wrapper-1 ::before {
    box-sizing: border-box;
  }
  .radio-wrapper-1 [type="radio"].substituted {
    margin: 0;
    width: 0;
    height: 0;
    display: inline;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }
  .radio-wrapper-1 [type="radio"].substituted + span:before {
    content: "";
    display: inline-block;
    vertical-align: top;
    height: 1.15em;
    width: 1.15em;
    border-radius: 50px;
    margin-right: 0.6em;
    color: rgba(0, 0, 0, 0.275);
    border: solid 0.06em;
    box-shadow: 0 0 0.04em, 0 0.06em 0.16em -0.03em inset, 0 0 0 0.07em transparent inset;
    background: url('data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xml:space="preserve" fill="white" viewBox="0 0 9 9"><rect x="0" y="4.3" transform="matrix(-0.707 -0.7072 0.7072 -0.707 0.5891 10.4702)" width="4.3" height="1.6" /><rect x="2.2" y="2.9" transform="matrix(-0.7071 0.7071 -0.7071 -0.7071 12.1877 2.9833)" width="6.1" height="1.7" /></svg>')
        no-repeat center,
      white;
    background-size: 0;
    will-change: color, border, background, background-size, box-shadow;
    transform: translate3d(0, 0, 0);
    transition: color 0.1s, border 0.1s, background 0.15s, box-shadow 0.1s;
  }
  .radio-wrapper-1 [type="radio"].substituted:enabled:active + span:before,
  .radio-wrapper-1 [type="radio"].substituted:enabled + span:active:before {
    box-shadow: 0 0 0.04em, 0 0.06em 0.16em -0.03em transparent inset, 0 0 0 0.07em rgba(0, 0, 0, 0.1) inset;
    background-color: #f0f0f0;
  }
  .radio-wrapper-1 [type="radio"].substituted:checked + span:before {
    background-color: #3b99fc;
    background-size: 0.75em;
    color: rgba(0, 0, 0, 0.075);
  }
  .radio-wrapper-1 [type="radio"].substituted:checked:enabled:active + span:before,
  .radio-wrapper-1 [type="radio"].substituted:checked:enabled + span:active:before {
    background-color: #0a7ffb;
    color: rgba(0, 0, 0, 0.275);
  }
  .radio-wrapper-1 [type="radio"].substituted:focus + span:before {
    box-shadow: 0 0 0.04em, 0 0.06em 0.16em -0.03em transparent inset, 0 0 0 0.07em rgba(0, 0, 0, 0.1) inset, 0 0 0 3.3px rgba(65, 159, 255, 0.55), 0 0 0 5px rgba(65, 159, 255, 0.3);
  }
  .radio-wrapper-1 [type="radio"].substituted:focus:active + span:before,
  .radio-wrapper-1 [type="radio"].substituted:focus + span:active:before {
    box-shadow: 0 0 0.04em, 0 0.06em 0.16em -0.03em transparent inset, 0 0 0 0.07em rgba(0, 0, 0, 0.1) inset, 0 0 0 3.3px rgba(65, 159, 255, 0.55), 0 0 0 5px rgba(65, 159, 255, 0.3);
  }
  .radio-wrapper-1 [type="radio"].substituted:disabled + span:before {
    opacity: 0.5;
  }

  .radio-wrapper-1 [type="radio"].substituted.dark + span:before {
    color: rgba(255, 255, 255, 0.275);
    background-color: #222;
    background-image: url('data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xml:space="preserve" fill="rgba(34, 34, 34, 0.999)" viewBox="0 0 9 9"><rect x="0" y="4.3" transform="matrix(-0.707 -0.7072 0.7072 -0.707 0.5891 10.4702)" width="4.3" height="1.6" /><rect x="2.2" y="2.9" transform="matrix(-0.7071 0.7071 -0.7071 -0.7071 12.1877 2.9833)" width="6.1" height="1.7" /></svg>');
  }
  .radio-wrapper-1 [type="radio"].substituted.dark:enabled:active + span:before,
  .radio-wrapper-1 [type="radio"].substituted.dark:enabled + span:active:before {
    background-color: #444;
    box-shadow: 0 0 0.04em, 0 0.06em 0.16em -0.03em transparent inset, 0 0 0 0.07em rgba(255, 255, 255, 0.1) inset;
  }
  .radio-wrapper-1 [type="radio"].substituted.dark:checked + span:before {
    background-color: #a97035;
    color: rgba(255, 255, 255, 0.075);
  }
  .radio-wrapper-1 [type="radio"].substituted.dark:checked:enabled:active + span:before,
  .radio-wrapper-1 [type="radio"].substituted.dark:checked:enabled + span:active:before {
    background-color: #c68035;
    color: rgba(0, 0, 0, 0.275);
  }
  .radio-wrapper-1 [type="radio"].substituted + span {
    -webkit-user-select: none;
    user-select: none;
  }
  .pointer {
    cursor: pointer;
  }
</style>` },
  { filename: "input radio color value with label", content: `<style>
  .circle {
    border-radius: 50%;
    width: 25px;
    height: 25px;
    display: inline-block;
  }
  .orange {
    background-color: #ff6b16;
  }
</style>
<div>
  <input type="radio" id="oo" value="orange" />
  <label for="oo"><div class="orange circle" aria-label="orange"></div></label>
</div>` },
  { filename: "input radio with aria labelledby", content: `<div class="radio-wrapper-1">
  <input id="example-1" class="substituted" type="radio" aria-labelledby="example-1-label" style="display: inline" />
  <label></label>
</div>
<b id="example-1-label" class="pointer">I agree to the terms</b>
<style>
  .radio-wrapper-1 *,
  .radio-wrapper-1 ::after,
  .radio-wrapper-1 ::before {
    box-sizing: border-box;
  }
  .radio-wrapper-1 [type="radio"].substituted:enabled:active + label:before,
  .radio-wrapper-1 [type="radio"].substituted:enabled + label:active:before {
    box-shadow: 0 0 0.04em, 0 0.06em 0.16em -0.03em transparent inset, 0 0 0 0.07em rgba(0, 0, 0, 0.1) inset;
    background-color: #f0f0f0;
  }
  .radio-wrapper-1 [type="radio"].substituted:checked + label:before {
    background-color: #3b99fc;
    background-size: 0.75em;
    color: rgba(0, 0, 0, 0.075);
  }
  .radio-wrapper-1 [type="radio"].substituted:checked:enabled:active + label:before,
  .radio-wrapper-1 [type="radio"].substituted:checked:enabled + label:active:before {
    background-color: #0a7ffb;
    color: rgba(0, 0, 0, 0.275);
  }
  .radio-wrapper-1 [type="radio"].substituted:focus + label:before {
    box-shadow: 0 0 0.04em, 0 0.06em 0.16em -0.03em transparent inset, 0 0 0 0.07em rgba(0, 0, 0, 0.1) inset, 0 0 0 3.3px rgba(65, 159, 255, 0.55), 0 0 0 5px rgba(65, 159, 255, 0.3);
  }
  .radio-wrapper-1 [type="radio"].substituted:focus:active + label:before,
  .radio-wrapper-1 [type="radio"].substituted:focus + label:active:before {
    box-shadow: 0 0 0.04em, 0 0.06em 0.16em -0.03em transparent inset, 0 0 0 0.07em rgba(0, 0, 0, 0.1) inset, 0 0 0 3.3px rgba(65, 159, 255, 0.55), 0 0 0 5px rgba(65, 159, 255, 0.3);
  }
  .radio-wrapper-1 [type="radio"].substituted:disabled + label:before {
    opacity: 0.5;
  }

  .radio-wrapper-1 [type="radio"].substituted.dark + label:before {
    color: rgba(255, 255, 255, 0.275);
    background-color: #222;
    background-image: url('data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xml:space="preserve" fill="rgba(34, 34, 34, 0.999)" viewBox="0 0 9 9"><rect x="0" y="4.3" transform="matrix(-0.707 -0.7072 0.7072 -0.707 0.5891 10.4702)" width="4.3" height="1.6" /><rect x="2.2" y="2.9" transform="matrix(-0.7071 0.7071 -0.7071 -0.7071 12.1877 2.9833)" width="6.1" height="1.7" /></svg>');
  }
  .radio-wrapper-1 [type="radio"].substituted.dark:enabled:active + label:before,
  .radio-wrapper-1 [type="radio"].substituted.dark:enabled + label:active:before {
    background-color: #444;
    box-shadow: 0 0 0.04em, 0 0.06em 0.16em -0.03em transparent inset, 0 0 0 0.07em rgba(255, 255, 255, 0.1) inset;
  }
  .radio-wrapper-1 [type="radio"].substituted.dark:checked + label:before {
    background-color: #a97035;
    color: rgba(255, 255, 255, 0.075);
  }
  .radio-wrapper-1 [type="radio"].substituted.dark:checked:enabled:active + label:before,
  .radio-wrapper-1 [type="radio"].substituted.dark:checked:enabled + label:active:before {
    background-color: #c68035;
    color: rgba(0, 0, 0, 0.275);
  }
  .radio-wrapper-1 [type="radio"].substituted + label {
    -webkit-user-select: none;
    user-select: none;
  }
  .pointer {
    cursor: pointer;
  }
</style>` },
  { filename: "input radio with label", content: `<div class="radio-wrapper-1">
  <input id="example-1" class="substituted" type="radio" />
  <label class="pointer" for="example-1">I agree to the terms</label>
</div>
<style>
  .radio-wrapper-1 *,
  .radio-wrapper-1 ::after,
  .radio-wrapper-1 ::before {
    box-sizing: border-box;
  }
  .radio-wrapper-1 [type="radio"].substituted:enabled:active + label:before,
  .radio-wrapper-1 [type="radio"].substituted:enabled + label:active:before {
    box-shadow: 0 0 0.04em, 0 0.06em 0.16em -0.03em transparent inset, 0 0 0 0.07em rgba(0, 0, 0, 0.1) inset;
    background-color: #f0f0f0;
  }
  .radio-wrapper-1 [type="radio"].substituted:checked + label:before {
    background-color: #3b99fc;
    background-size: 0.75em;
    color: rgba(0, 0, 0, 0.075);
  }
  .radio-wrapper-1 [type="radio"].substituted:checked:enabled:active + label:before,
  .radio-wrapper-1 [type="radio"].substituted:checked:enabled + label:active:before {
    background-color: #0a7ffb;
    color: rgba(0, 0, 0, 0.275);
  }
  .radio-wrapper-1 [type="radio"].substituted:focus + label:before {
    box-shadow: 0 0 0.04em, 0 0.06em 0.16em -0.03em transparent inset, 0 0 0 0.07em rgba(0, 0, 0, 0.1) inset, 0 0 0 3.3px rgba(65, 159, 255, 0.55), 0 0 0 5px rgba(65, 159, 255, 0.3);
  }
  .radio-wrapper-1 [type="radio"].substituted:focus:active + label:before,
  .radio-wrapper-1 [type="radio"].substituted:focus + label:active:before {
    box-shadow: 0 0 0.04em, 0 0.06em 0.16em -0.03em transparent inset, 0 0 0 0.07em rgba(0, 0, 0, 0.1) inset, 0 0 0 3.3px rgba(65, 159, 255, 0.55), 0 0 0 5px rgba(65, 159, 255, 0.3);
  }
  .radio-wrapper-1 [type="radio"].substituted:disabled + label:before {
    opacity: 0.5;
  }

  .radio-wrapper-1 [type="radio"].substituted.dark + label:before {
    color: rgba(255, 255, 255, 0.275);
    background-color: #222;
    background-image: url('data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xml:space="preserve" fill="rgba(34, 34, 34, 0.999)" viewBox="0 0 9 9"><rect x="0" y="4.3" transform="matrix(-0.707 -0.7072 0.7072 -0.707 0.5891 10.4702)" width="4.3" height="1.6" /><rect x="2.2" y="2.9" transform="matrix(-0.7071 0.7071 -0.7071 -0.7071 12.1877 2.9833)" width="6.1" height="1.7" /></svg>');
  }
  .radio-wrapper-1 [type="radio"].substituted.dark:enabled:active + label:before,
  .radio-wrapper-1 [type="radio"].substituted.dark:enabled + label:active:before {
    background-color: #444;
    box-shadow: 0 0 0.04em, 0 0.06em 0.16em -0.03em transparent inset, 0 0 0 0.07em rgba(255, 255, 255, 0.1) inset;
  }
  .radio-wrapper-1 [type="radio"].substituted.dark:checked + label:before {
    background-color: #a97035;
    color: rgba(255, 255, 255, 0.075);
  }
  .radio-wrapper-1 [type="radio"].substituted.dark:checked:enabled:active + label:before,
  .radio-wrapper-1 [type="radio"].substituted.dark:checked:enabled + label:active:before {
    background-color: #c68035;
    color: rgba(0, 0, 0, 0.275);
  }
  .radio-wrapper-1 [type="radio"].substituted + label {
    -webkit-user-select: none;
    user-select: none;
  }
  .pointer {
    cursor: pointer;
  }
</style>` },
  { filename: "label as a custom radio", content: `<div class="radio-wrapper-44">
  <label id="test-subject" class="toggleButton" role="radio" aria-checked="false" tabindex="0">
    <input type="radio" />
    <div>
      <svg viewBox="0 0 44 44">
        <path d="M14,24 L21,31 L39.7428882,11.5937758 C35.2809627,6.53125861 30.0333333,4 24,4 C12.95,4 4,12.95 4,24 C4,35.05 12.95,44 24,44 C35.05,44 44,35.05 44,24 C44,19.3 42.5809627,15.1645919 39.7428882,11.5937758" transform="translate(-2.000000, -2.000000)"></path>
      </svg>
    </div>
    <span class="caption">I agree to the terms</span>
  </label>
</div>
<style>
  .radio-wrapper-44 input[type="radio"] {
    display: none;
    visibility: hidden;
  }

  .radio-wrapper-44 *,
  .radio-wrapper-44 *::before,
  .radio-wrapper-44 *::after {
    box-sizing: border-box;
  }

  .radio-wrapper-44 .toggleButton {
    cursor: pointer;
    display: flex;
    transform-origin: 50% 50%;
    transform-style: preserve-3d;
    transition: transform 0.14s ease;
  }
  .radio-wrapper-44 .toggleButton:active {
    transform: rotateX(30deg);
  }
  .radio-wrapper-44 .toggleButton input + div {
    border: 3px solid rgba(0, 0, 0, 0.2);
    border-radius: 50%;
    position: relative;
    width: 44px;
    height: 44px;
  }
  .radio-wrapper-44 .toggleButton input + div svg {
    fill: none;
    stroke-width: 3.6;
    stroke: #000;
    stroke-linecap: round;
    stroke-linejoin: round;
    width: 44px;
    height: 44px;
    display: block;
    position: absolute;
    left: -3px;
    top: -3px;
    right: -3px;
    bottom: -3px;
    z-index: 1;
    stroke-dashoffset: 124.6;
    stroke-dasharray: 0 162.6 133 29.6;
    transition: all 0.4s ease 0s;
  }
  .radio-wrapper-44 .toggleButton input + div:before,
  .radio-wrapper-44 .toggleButton input + div:after {
    content: "";
    width: 3px;
    height: 16px;
    background: #000;
    position: absolute;
    left: 50%;
    top: 50%;
    border-radius: 5px;
  }
  .radio-wrapper-44 .toggleButton input + div:before {
    opacity: 0;
    transform: scale(0.3) translate(-50%, -50%) rotate(45deg);
    -webkit-animation: bounceInBefore-44 0.3s linear forwards 0.3s;
    animation: bounceInBefore-44 0.3s linear forwards 0.3s;
  }
  .radio-wrapper-44 .toggleButton input + div:after {
    opacity: 0;
    transform: scale(0.3) translate(-50%, -50%) rotate(-45deg);
    -webkit-animation: bounceInAfter-44 0.3s linear forwards 0.3s;
    animation: bounceInAfter-44 0.3s linear forwards 0.3s;
  }
  .radio-wrapper-44 .toggleButton input:checked + div svg {
    stroke-dashoffset: 162.6;
    stroke-dasharray: 0 162.6 28 134.6;
    transition: all 0.4s ease 0.2s;
  }
  .radio-wrapper-44 .toggleButton input:checked + div:before {
    opacity: 0;
    transform: scale(0.3) translate(-50%, -50%) rotate(45deg);
    -webkit-animation: bounceInBeforeDont-44 0.3s linear forwards 0s;
    animation: bounceInBeforeDont-44 0.3s linear forwards 0s;
  }
  .radio-wrapper-44 .toggleButton input:checked + div:after {
    opacity: 0;
    transform: scale(0.3) translate(-50%, -50%) rotate(-45deg);
    -webkit-animation: bounceInAfterDont-44 0.3s linear forwards 0s;
    animation: bounceInAfterDont-44 0.3s linear forwards 0s;
  }
  span.caption {
    padding-left: 8px;
    line-height: 44px;
    font-size: 22px;
    font-weight: 600;
  }
  @-webkit-keyframes bounceInBefore-44 {
    0% {
      opacity: 0;
      transform: scale(0.3) translate(-50%, -50%) rotate(45deg);
    }
    50% {
      opacity: 0.9;
      transform: scale(1.1) translate(-50%, -50%) rotate(45deg);
    }
    80% {
      opacity: 1;
      transform: scale(0.89) translate(-50%, -50%) rotate(45deg);
    }
    100% {
      opacity: 1;
      transform: scale(1) translate(-50%, -50%) rotate(45deg);
    }
  }

  @keyframes bounceInBefore-44 {
    0% {
      opacity: 0;
      transform: scale(0.3) translate(-50%, -50%) rotate(45deg);
    }
    50% {
      opacity: 0.9;
      transform: scale(1.1) translate(-50%, -50%) rotate(45deg);
    }
    80% {
      opacity: 1;
      transform: scale(0.89) translate(-50%, -50%) rotate(45deg);
    }
    100% {
      opacity: 1;
      transform: scale(1) translate(-50%, -50%) rotate(45deg);
    }
  }
  @-webkit-keyframes bounceInAfter-44 {
    0% {
      opacity: 0;
      transform: scale(0.3) translate(-50%, -50%) rotate(-45deg);
    }
    50% {
      opacity: 0.9;
      transform: scale(1.1) translate(-50%, -50%) rotate(-45deg);
    }
    80% {
      opacity: 1;
      transform: scale(0.89) translate(-50%, -50%) rotate(-45deg);
    }
    100% {
      opacity: 1;
      transform: scale(1) translate(-50%, -50%) rotate(-45deg);
    }
  }
  @keyframes bounceInAfter-44 {
    0% {
      opacity: 0;
      transform: scale(0.3) translate(-50%, -50%) rotate(-45deg);
    }
    50% {
      opacity: 0.9;
      transform: scale(1.1) translate(-50%, -50%) rotate(-45deg);
    }
    80% {
      opacity: 1;
      transform: scale(0.89) translate(-50%, -50%) rotate(-45deg);
    }
    100% {
      opacity: 1;
      transform: scale(1) translate(-50%, -50%) rotate(-45deg);
    }
  }
  @-webkit-keyframes bounceInBeforeDont-44 {
    0% {
      opacity: 1;
      transform: scale(1) translate(-50%, -50%) rotate(45deg);
    }
    100% {
      opacity: 0;
      transform: scale(0.3) translate(-50%, -50%) rotate(45deg);
    }
  }
  @keyframes bounceInBeforeDont-44 {
    0% {
      opacity: 1;
      transform: scale(1) translate(-50%, -50%) rotate(45deg);
    }
    100% {
      opacity: 0;
      transform: scale(0.3) translate(-50%, -50%) rotate(45deg);
    }
  }
  @-webkit-keyframes bounceInAfterDont-44 {
    0% {
      opacity: 1;
      transform: scale(1) translate(-50%, -50%) rotate(-45deg);
    }
    100% {
      opacity: 0;
      transform: scale(0.3) translate(-50%, -50%) rotate(-45deg);
    }
  }
  @keyframes bounceInAfterDont-44 {
    0% {
      opacity: 1;
      transform: scale(1) translate(-50%, -50%) rotate(-45deg);
    }
    100% {
      opacity: 0;
      transform: scale(0.3) translate(-50%, -50%) rotate(-45deg);
    }
  }
</style>` },
  { filename: "role radio wrapper", content: `<div class="radio-wrapper-1" tabindex="0" role="radio" aria-checked="false" style="display: inline-block">
  <input class="substituted" type="radio" aria-hidden="true" />
  <span><b class="pointer">I agree to the terms</b></span>
</div>
<style>
  .radio-wrapper-1 *,
  .radio-wrapper-1 ::after,
  .radio-wrapper-1 ::before {
    box-sizing: border-box;
  }
  .radio-wrapper-1 [type="radio"].substituted {
    margin: 0;
    width: 0;
    height: 0;
    display: inline;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }
  .radio-wrapper-1 [type="radio"].substituted + span:before {
    content: "";
    display: inline-block;
    vertical-align: top;
    height: 1.15em;
    width: 1.15em;
    margin-right: 0.6em;
    color: rgba(0, 0, 0, 0.275);
    border: solid 0.06em;
    box-shadow: 0 0 0.04em, 0 0.06em 0.16em -0.03em inset, 0 0 0 0.07em transparent inset;
    border-radius: 0.2em;
    background: url('data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xml:space="preserve" fill="white" viewBox="0 0 9 9"><rect x="0" y="4.3" transform="matrix(-0.707 -0.7072 0.7072 -0.707 0.5891 10.4702)" width="4.3" height="1.6" /><rect x="2.2" y="2.9" transform="matrix(-0.7071 0.7071 -0.7071 -0.7071 12.1877 2.9833)" width="6.1" height="1.7" /></svg>')
        no-repeat center,
      white;
    background-size: 0;
    will-change: color, border, background, background-size, box-shadow;
    transform: translate3d(0, 0, 0);
    transition: color 0.1s, border 0.1s, background 0.15s, box-shadow 0.1s;
  }
  .radio-wrapper-1 [type="radio"].substituted:enabled:active + span:before,
  .radio-wrapper-1 [type="radio"].substituted:enabled + span:active:before {
    box-shadow: 0 0 0.04em, 0 0.06em 0.16em -0.03em transparent inset, 0 0 0 0.07em rgba(0, 0, 0, 0.1) inset;
    background-color: #f0f0f0;
  }
  .radio-wrapper-1 [type="radio"].substituted:checked + span:before {
    background-color: #3b99fc;
    background-size: 0.75em;
    color: rgba(0, 0, 0, 0.075);
  }
  .radio-wrapper-1 [type="radio"].substituted:checked:enabled:active + span:before,
  .radio-wrapper-1 [type="radio"].substituted:checked:enabled + span:active:before {
    background-color: #0a7ffb;
    color: rgba(0, 0, 0, 0.275);
  }
  .radio-wrapper-1 [type="radio"].substituted:focus + span:before {
    box-shadow: 0 0 0.04em, 0 0.06em 0.16em -0.03em transparent inset, 0 0 0 0.07em rgba(0, 0, 0, 0.1) inset, 0 0 0 3.3px rgba(65, 159, 255, 0.55), 0 0 0 5px rgba(65, 159, 255, 0.3);
  }
  .radio-wrapper-1 [type="radio"].substituted:focus:active + span:before,
  .radio-wrapper-1 [type="radio"].substituted:focus + span:active:before {
    box-shadow: 0 0 0.04em, 0 0.06em 0.16em -0.03em transparent inset, 0 0 0 0.07em rgba(0, 0, 0, 0.1) inset, 0 0 0 3.3px rgba(65, 159, 255, 0.55), 0 0 0 5px rgba(65, 159, 255, 0.3);
  }
  .radio-wrapper-1 [type="radio"].substituted:disabled + span:before {
    opacity: 0.5;
  }

  .radio-wrapper-1 [type="radio"].substituted.dark + span:before {
    color: rgba(255, 255, 255, 0.275);
    background-color: #222;
    background-image: url('data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xml:space="preserve" fill="rgba(34, 34, 34, 0.999)" viewBox="0 0 9 9"><rect x="0" y="4.3" transform="matrix(-0.707 -0.7072 0.7072 -0.707 0.5891 10.4702)" width="4.3" height="1.6" /><rect x="2.2" y="2.9" transform="matrix(-0.7071 0.7071 -0.7071 -0.7071 12.1877 2.9833)" width="6.1" height="1.7" /></svg>');
  }
  .radio-wrapper-1 [type="radio"].substituted.dark:enabled:active + span:before,
  .radio-wrapper-1 [type="radio"].substituted.dark:enabled + span:active:before {
    background-color: #444;
    box-shadow: 0 0 0.04em, 0 0.06em 0.16em -0.03em transparent inset, 0 0 0 0.07em rgba(255, 255, 255, 0.1) inset;
  }
  .radio-wrapper-1 [type="radio"].substituted.dark:checked + span:before {
    background-color: #a97035;
    color: rgba(255, 255, 255, 0.075);
  }
  .radio-wrapper-1 [type="radio"].substituted.dark:checked:enabled:active + span:before,
  .radio-wrapper-1 [type="radio"].substituted.dark:checked:enabled + span:active:before {
    background-color: #c68035;
    color: rgba(0, 0, 0, 0.275);
  }
  .radio-wrapper-1 [type="radio"].substituted + span {
    -webkit-user-select: none;
    user-select: none;
  }
  .pointer {
    cursor: pointer;
  }
</style>` },
  { filename: "role radio", content: `<button role="radio" style="width: 15px; height: 15px; border: solid 1px blue">green</button>` }
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

export default RadioDiscernibleSuccess;
