import React from "react";
import EngineIssueSuccess from "../../../layout/engineIssueSuccess";

const CheckboxAriaCheckedSuccess = () => {
  const ruleId = "checkbox-aria-checked";
  const title = `Checked state of custom checkbox controls should be exposed to assistive technology`;
  const description = `If custom checkbox controls lack a defined checked state, screen reader users cannot determine which option is selected, resulting in confusion and loss of functionality.`;
  const helpText = `Assign \\\\`;
  const bestPractices = [
  "Follow proper HTML semantics",
  "Ensure screen reader compatibility",
  "Test with assistive technologies"
  ];
  const htmlExamples = [
  { filename: "div as a custom checkbox", content: `<div class="checkbox-wrapper-1" tabindex="0" role="checkbox" aria-checked="false">
  <input id="example-1" class="substituted" type="checkbox" aria-hidden="true" />
  <label class="pointer" for="example-1">Checkbox</label>
</div>
<style>
  .checkbox-wrapper-1 *,
  .checkbox-wrapper-1 ::after,
  .checkbox-wrapper-1 ::before {
    box-sizing: border-box;
  }
  .checkbox-wrapper-1 [type="checkbox"].substituted {
    margin: 0;
    width: 0;
    height: 0;
    display: inline;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }
  .checkbox-wrapper-1 [type="checkbox"].substituted + label:before {
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
  .checkbox-wrapper-1 [type="checkbox"].substituted:enabled:active + label:before,
  .checkbox-wrapper-1 [type="checkbox"].substituted:enabled + label:active:before {
    box-shadow: 0 0 0.04em, 0 0.06em 0.16em -0.03em transparent inset, 0 0 0 0.07em rgba(0, 0, 0, 0.1) inset;
    background-color: #f0f0f0;
  }
  .checkbox-wrapper-1 [type="checkbox"].substituted:checked + label:before {
    background-color: #3b99fc;
    background-size: 0.75em;
    color: rgba(0, 0, 0, 0.075);
  }
  .checkbox-wrapper-1 [type="checkbox"].substituted:checked:enabled:active + label:before,
  .checkbox-wrapper-1 [type="checkbox"].substituted:checked:enabled + label:active:before {
    background-color: #0a7ffb;
    color: rgba(0, 0, 0, 0.275);
  }
  .checkbox-wrapper-1 [type="checkbox"].substituted:focus + label:before {
    box-shadow: 0 0 0.04em, 0 0.06em 0.16em -0.03em transparent inset, 0 0 0 0.07em rgba(0, 0, 0, 0.1) inset, 0 0 0 3.3px rgba(65, 159, 255, 0.55), 0 0 0 5px rgba(65, 159, 255, 0.3);
  }
  .checkbox-wrapper-1 [type="checkbox"].substituted:focus:active + label:before,
  .checkbox-wrapper-1 [type="checkbox"].substituted:focus + label:active:before {
    box-shadow: 0 0 0.04em, 0 0.06em 0.16em -0.03em transparent inset, 0 0 0 0.07em rgba(0, 0, 0, 0.1) inset, 0 0 0 3.3px rgba(65, 159, 255, 0.55), 0 0 0 5px rgba(65, 159, 255, 0.3);
  }
  .checkbox-wrapper-1 [type="checkbox"].substituted:disabled + label:before {
    opacity: 0.5;
  }

  .checkbox-wrapper-1 [type="checkbox"].substituted.dark + label:before {
    color: rgba(255, 255, 255, 0.275);
    background-color: #222;
    background-image: url('data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xml:space="preserve" fill="rgba(34, 34, 34, 0.999)" viewBox="0 0 9 9"><rect x="0" y="4.3" transform="matrix(-0.707 -0.7072 0.7072 -0.707 0.5891 10.4702)" width="4.3" height="1.6" /><rect x="2.2" y="2.9" transform="matrix(-0.7071 0.7071 -0.7071 -0.7071 12.1877 2.9833)" width="6.1" height="1.7" /></svg>');
  }
  .checkbox-wrapper-1 [type="checkbox"].substituted.dark:enabled:active + label:before,
  .checkbox-wrapper-1 [type="checkbox"].substituted.dark:enabled + label:active:before {
    background-color: #444;
    box-shadow: 0 0 0.04em, 0 0.06em 0.16em -0.03em transparent inset, 0 0 0 0.07em rgba(255, 255, 255, 0.1) inset;
  }
  .checkbox-wrapper-1 [type="checkbox"].substituted.dark:checked + label:before {
    background-color: #a97035;
    color: rgba(255, 255, 255, 0.075);
  }
  .checkbox-wrapper-1 [type="checkbox"].substituted.dark:checked:enabled:active + label:before,
  .checkbox-wrapper-1 [type="checkbox"].substituted.dark:checked:enabled + label:active:before {
    background-color: #c68035;
    color: rgba(0, 0, 0, 0.275);
  }
  .checkbox-wrapper-1 [type="checkbox"].substituted + label {
    -webkit-user-select: none;
    user-select: none;
  }
  .pointer {
    cursor: pointer;
  }
</style>` },
  { filename: "input checkbox", content: `<div class="checkbox-wrapper-1">
  <input id="example-1" class="substituted" type="checkbox" />
  <label class="pointer" for="example-1">I agree to the terms</label>
</div>
<style>
  .checkbox-wrapper-1 *,
  .checkbox-wrapper-1 ::after,
  .checkbox-wrapper-1 ::before {
    box-sizing: border-box;
  }
  .checkbox-wrapper-1 [type="checkbox"].substituted:enabled:active + label:before,
  .checkbox-wrapper-1 [type="checkbox"].substituted:enabled + label:active:before {
    box-shadow: 0 0 0.04em, 0 0.06em 0.16em -0.03em transparent inset, 0 0 0 0.07em rgba(0, 0, 0, 0.1) inset;
    background-color: #f0f0f0;
  }
  .checkbox-wrapper-1 [type="checkbox"].substituted:checked + label:before {
    background-color: #3b99fc;
    background-size: 0.75em;
    color: rgba(0, 0, 0, 0.075);
  }
  .checkbox-wrapper-1 [type="checkbox"].substituted:checked:enabled:active + label:before,
  .checkbox-wrapper-1 [type="checkbox"].substituted:checked:enabled + label:active:before {
    background-color: #0a7ffb;
    color: rgba(0, 0, 0, 0.275);
  }
  .checkbox-wrapper-1 [type="checkbox"].substituted:focus + label:before {
    box-shadow: 0 0 0.04em, 0 0.06em 0.16em -0.03em transparent inset, 0 0 0 0.07em rgba(0, 0, 0, 0.1) inset, 0 0 0 3.3px rgba(65, 159, 255, 0.55), 0 0 0 5px rgba(65, 159, 255, 0.3);
  }
  .checkbox-wrapper-1 [type="checkbox"].substituted:focus:active + label:before,
  .checkbox-wrapper-1 [type="checkbox"].substituted:focus + label:active:before {
    box-shadow: 0 0 0.04em, 0 0.06em 0.16em -0.03em transparent inset, 0 0 0 0.07em rgba(0, 0, 0, 0.1) inset, 0 0 0 3.3px rgba(65, 159, 255, 0.55), 0 0 0 5px rgba(65, 159, 255, 0.3);
  }
  .checkbox-wrapper-1 [type="checkbox"].substituted:disabled + label:before {
    opacity: 0.5;
  }

  .checkbox-wrapper-1 [type="checkbox"].substituted.dark + label:before {
    color: rgba(255, 255, 255, 0.275);
    background-color: #222;
    background-image: url('data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xml:space="preserve" fill="rgba(34, 34, 34, 0.999)" viewBox="0 0 9 9"><rect x="0" y="4.3" transform="matrix(-0.707 -0.7072 0.7072 -0.707 0.5891 10.4702)" width="4.3" height="1.6" /><rect x="2.2" y="2.9" transform="matrix(-0.7071 0.7071 -0.7071 -0.7071 12.1877 2.9833)" width="6.1" height="1.7" /></svg>');
  }
  .checkbox-wrapper-1 [type="checkbox"].substituted.dark:enabled:active + label:before,
  .checkbox-wrapper-1 [type="checkbox"].substituted.dark:enabled + label:active:before {
    background-color: #444;
    box-shadow: 0 0 0.04em, 0 0.06em 0.16em -0.03em transparent inset, 0 0 0 0.07em rgba(255, 255, 255, 0.1) inset;
  }
  .checkbox-wrapper-1 [type="checkbox"].substituted.dark:checked + label:before {
    background-color: #a97035;
    color: rgba(255, 255, 255, 0.075);
  }
  .checkbox-wrapper-1 [type="checkbox"].substituted.dark:checked:enabled:active + label:before,
  .checkbox-wrapper-1 [type="checkbox"].substituted.dark:checked:enabled + label:active:before {
    background-color: #c68035;
    color: rgba(0, 0, 0, 0.275);
  }
  .checkbox-wrapper-1 [type="checkbox"].substituted + label {
    -webkit-user-select: none;
    user-select: none;
  }
  .pointer {
    cursor: pointer;
  }
</style>` },
  { filename: "label as a custom checkbox", content: `<div class="checkbox-wrapper-44">
  <label id="test-subject" class="toggleButton" role="checkbox" aria-checked="true" tabindex="0">
    <input type="checkbox" />
    <div>
      <svg viewBox="0 0 44 44">
        <path d="M14,24 L21,31 L39.7428882,11.5937758 C35.2809627,6.53125861 30.0333333,4 24,4 C12.95,4 4,12.95 4,24 C4,35.05 12.95,44 24,44 C35.05,44 44,35.05 44,24 C44,19.3 42.5809627,15.1645919 39.7428882,11.5937758" transform="translate(-2.000000, -2.000000)"></path>
      </svg>
    </div>
    <span class="caption"> I agree to the terms</span>
  </label>
</div>
<style>
  .checkbox-wrapper-44 input[type="checkbox"] {
    display: none;
    visibility: hidden;
  }

  .checkbox-wrapper-44 *,
  .checkbox-wrapper-44 *::before,
  .checkbox-wrapper-44 *::after {
    box-sizing: border-box;
  }

  .checkbox-wrapper-44 .toggleButton {
    cursor: pointer;
    display: flex;
    transform-origin: 50% 50%;
    transform-style: preserve-3d;
    transition: transform 0.14s ease;
  }
  .checkbox-wrapper-44 .toggleButton:active {
    transform: rotateX(30deg);
  }
  .checkbox-wrapper-44 .toggleButton input + div {
    border: 3px solid rgba(0, 0, 0, 0.2);
    border-radius: 50%;
    position: relative;
    width: 44px;
    height: 44px;
  }
  .checkbox-wrapper-44 .toggleButton input + div svg {
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
  .checkbox-wrapper-44 .toggleButton input + div:before,
  .checkbox-wrapper-44 .toggleButton input + div:after {
    content: "";
    width: 3px;
    height: 16px;
    background: #000;
    position: absolute;
    left: 50%;
    top: 50%;
    border-radius: 5px;
  }
  .checkbox-wrapper-44 .toggleButton input + div:before {
    opacity: 0;
    transform: scale(0.3) translate(-50%, -50%) rotate(45deg);
    -webkit-animation: bounceInBefore-44 0.3s linear forwards 0.3s;
    animation: bounceInBefore-44 0.3s linear forwards 0.3s;
  }
  .checkbox-wrapper-44 .toggleButton input + div:after {
    opacity: 0;
    transform: scale(0.3) translate(-50%, -50%) rotate(-45deg);
    -webkit-animation: bounceInAfter-44 0.3s linear forwards 0.3s;
    animation: bounceInAfter-44 0.3s linear forwards 0.3s;
  }
  .checkbox-wrapper-44 .toggleButton input:checked + div svg {
    stroke-dashoffset: 162.6;
    stroke-dasharray: 0 162.6 28 134.6;
    transition: all 0.4s ease 0.2s;
  }
  .checkbox-wrapper-44 .toggleButton input:checked + div:before {
    opacity: 0;
    transform: scale(0.3) translate(-50%, -50%) rotate(45deg);
    -webkit-animation: bounceInBeforeDont-44 0.3s linear forwards 0s;
    animation: bounceInBeforeDont-44 0.3s linear forwards 0s;
  }
  .checkbox-wrapper-44 .toggleButton input:checked + div:after {
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
</style>` }
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

export default CheckboxAriaCheckedSuccess;
