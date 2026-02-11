import React from "react";
import EngineIssueFailure from "../../../layout/engineIssueFailure";

const InteractiveNotTabbableFailure = () => {
  const ruleId = "interactive-not-tabbable";
  const title = `Interactive elements should be keyboard navigable`;
  const description = `Interactive elements should be keyboard navigable. If a custom interactive element is not keyboard navigable, keyboard users will not be able to interact with it.`;
  const helpText = `Add tabindex="0" to the custom interactive element.`;
  const fixSteps = [
  "Review the HTML structure",
  "Apply proper accessibility attributes",
  "Test with screen readers"
  ];
  const htmlExamples = [
  { filename: "custom checkbox not tabbable", content: `<div class="checkbox-wrapper-44">
  <label class="toggleButton" role="checkbox" aria-checked="false">
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
</style>` },
  { filename: "custom interactive element no tabindex", content: `<div role="button" style="cursor: pointer">
  <span>Interactive Button</span>
</div>` },
  { filename: "input checkbox not tabbable", content: `<div class="checkbox-wrapper-1">
  <input id="example-1" class="substituted" type="checkbox" tabindex="-1" />
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
  { filename: "interactive element without tabindex", content: `<span onclick="alert('Hello, user!')" style="cursor: pointer">Interactive but without tabindex - should not be included in the passedNodes array</span>` },
  { filename: "nested clickable elements", content: `<article
  class="theme theme-white cur-p bcssr-1o8xzez e1q5pid111"
  data-gem-id="box-container-box-1"
  data-testid="box"
  data-standard-box="true"
  style="
    background-color: rgb(255, 255, 255);
    block-size: 408px;
    border-radius: 12px;
    border-end-end-radius: 12px;
    border-end-start-radius: 12px;
    border-start-end-radius: 12px;
    border-start-start-radius: 12px;
    box-shadow: rgba(11, 31, 66, 0.04) 0px 1px 1px 0px, rgba(11, 31, 66, 0.1) 0px 2px 8px 0px;
    cursor: pointer;
    height: 408px;
    inline-size: 244px;
    list-style-type: none;
    perspective-origin: 122px 204px;
    text-align: left;
    transform-origin: 122px 204px;
    transition-duration: 0.3s;
    transition-property: box-shadow;
    transition-timing-function: ease-in-out;
    width: 244px;
  "
>
  <div
    class="o-h bcssr-1v1fsp9 e1q5pid110"
    style="
      block-size: 137px;
      border-start-end-radius: 12px;
      border-start-start-radius: 12px;
      border-top-left-radius: 12px;
      border-top-right-radius: 12px;
      cursor: pointer;
      height: 137px;
      inline-size: 244px;
      list-style-type: none;
      overflow-block: hidden;
      overflow-inline: hidden;
      overflow: hidden;
      perspective-origin: 122px 68.5px;
      text-align: left;
      transform-origin: 122px 68.5px;
      width: 244px;
    "
  >
    <img
      src="https://cdn0.erstegroup.com/gemlip/v2/2X34s725b4Trbkc6Fj6M2NGnBb8k/dam/at/spk-sgruppe/www_sparkasse_at/finanzieren/wohnkredit/bauspardarlehen/kampagne-03-2025/sBau_WebsiteHero_SWPF_2025_Main_3840x1145.jpg.8b9078bbe8f667a6.x1636y229w1625h915.w3840w2560w1920w1280w1024w820w570w360w220w120w64_w570_r.webp"
      loading="lazy"
      width="280"
      class="mw-full h-full"
      alt=""
      style="
        block-size: 137px;
        cursor: pointer;
        height: 137px;
        inline-size: 244px;
        list-style-type: none;
        max-inline-size: 100%;
        max-width: 100%;
        object-fit: cover;
        perspective-origin: 122px 68.5px;
        text-align: left;
        transform-origin: 122px 68.5px;
        transition-duration: 0.3s;
        transition-property: transform;
        transition-timing-function: ease-in-out;
        width: 244px;
      "
    />
  </div>
  <div
    class="p-l-msm p-r-msm p-t-md p-b-md bcssr-1czv79t e1q5pid17"
    style="
      block-size: 271px;
      gap: 16px;
      cursor: pointer;
      display: grid;
      grid-auto-rows: 21px;
      grid-template-columns: 212px;
      grid-template-rows: 186px 21px;
      height: 271px;
      inline-size: 244px;
      list-style-type: none;
      padding-block: 24px;
      padding: 24px 16px;
      padding-inline: 16px;
      perspective-origin: 122px 135.5px;
      text-align: left;
      transform-origin: 122px 135.5px;
      width: 244px;
    "
  >
    <div
      class="d-f fd-c bcssr-hteqgq e1q5pid16"
      style="block-size: 186px; gap: 4px; cursor: pointer; display: flex; flex-direction: column; height: 186px; inline-size: 212px; list-style-type: none; min-block-size: auto; min-height: auto; min-inline-size: auto; min-width: auto; perspective-origin: 106px 93px; text-align: left; transform-origin: 106px 93px; width: 212px"
    >
      <div
        class="d-f fd-c bcssr-1p3li6n e1q5pid14"
        style="
          block-size: 76px;
          gap: 8px;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          height: 76px;
          inline-size: 212px;
          list-style-type: none;
          max-block-size: 100%;
          max-height: 100%;
          min-block-size: auto;
          min-height: auto;
          min-inline-size: auto;
          min-width: auto;
          perspective-origin: 106px 38px;
          text-align: left;
          transform-origin: 106px 38px;
          width: 212px;
        "
      >
        <h3
          class="wb m-0 text-ellipsis-multiline fw-sb bcssr-11y8s9c e804vwf1"
          style="
            --line-clamp: 2;
            block-size: 26px;
            cursor: pointer;
            display: flow-root;
            flex-shrink: 0;
            font-size: 18px;
            font-weight: 600;
            height: 26px;
            inline-size: 212px;
            line-height: 26px;
            list-style-type: none;
            margin-block: 0px;
            margin-bottom: 0px;
            margin-top: 0px;
            min-block-size: auto;
            min-height: auto;
            min-inline-size: auto;
            min-width: auto;
            overflow-block: hidden;
            overflow-inline: hidden;
            overflow: hidden;
            perspective-origin: 106px 13px;
            text-align: left;
            text-overflow: ellipsis;
            transform-origin: 106px 13px;
            width: 212px;
            word-break: break-word;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
          "
        >
          Bauspardarlehen
        </h3>
        <div
          class="wb m-0 text-ellipsis-multiline editor-content bcssr-1g0sanh e804vwf0"
          style="
            --line-clamp: 6;
            --font-size-list: 0.875rem;
            block-size: 42px;
            cursor: pointer;
            display: flow-root;
            height: 42px;
            inline-size: 212px;
            list-style-type: none;
            min-block-size: auto;
            min-height: auto;
            min-inline-size: auto;
            min-width: auto;
            overflow-block: hidden;
            overflow-inline: hidden;
            overflow-wrap: break-word;
            overflow: hidden;
            perspective-origin: 106px 21px;
            text-align: left;
            text-overflow: ellipsis;
            transform-origin: 106px 21px;
            width: 212px;
            word-break: break-word;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 6;
          "
        >
          <p style="block-size: 42px; cursor: pointer; font-size: 14px; height: 42px; inline-size: 212px; line-height: 21px; list-style-type: none; margin-block: 0px; margin-bottom: 0px; margin-top: 0px; overflow-wrap: break-word; perspective-origin: 106px 21px; text-align: left; transform-origin: 106px 21px; width: 212px; word-break: break-word">
            Das sichere Wohndarlehen, mit Fixzinssatz und Hypothek.
          </p>
        </div>
      </div>
    </div>
    <div
      class="d-f fd-c ai-fs bcssr-q52r78 e1q5pid13"
      style="
        align-items: flex-start;
        block-size: 21px;
        gap: 8px;
        cursor: pointer;
        display: flex;
        flex-direction: column;
        height: 21px;
        inline-size: 212px;
        list-style-type: none;
        min-block-size: auto;
        min-height: auto;
        min-inline-size: auto;
        min-width: auto;
        perspective-origin: 106px 10.5px;
        text-align: left;
        transform-origin: 106px 10.5px;
        width: 212px;
      "
    >
      <a
        data-testid="link"
        href="/sgruppe/privatkunden/wohnen-finanzieren/wohnfinanzierung/kredit-darlehen/bauspardarlehen"
        class="mw-full d-if fs-6 link link--text"
        data-tracking-cta=""
        data-tracking-cta-type=""
        data-tracking-cta-style=""
        style="
          block-size: 21px;
          border-block-color: rgb(40, 112, 237);
          border-color: rgb(40, 112, 237);
          border-inline-color: rgb(40, 112, 237);
          caret-color: rgb(40, 112, 237);
          color: rgb(40, 112, 237);
          column-rule-color: rgb(40, 112, 237);
          cursor: pointer;
          display: flex;
          font-size: 14px;
          font-weight: 600;
          height: 21px;
          inline-size: 186.273px;
          justify-self: start;
          line-height: 21px;
          list-style-type: none;
          max-inline-size: 100%;
          max-width: 100%;
          min-block-size: auto;
          min-height: auto;
          min-inline-size: auto;
          min-width: auto;
          outline-color: rgb(40, 112, 237);
          perspective-origin: 93.1328px 10.5px;
          text-align: left;
          text-decoration: none solid rgb(40, 112, 237);
          text-emphasis-color: rgb(40, 112, 237);
          transform-origin: 93.1367px 10.5px;
          width: 186.273px;
          -webkit-text-fill-color: rgb(40, 112, 237);
          -webkit-text-stroke-color: rgb(40, 112, 237);
        "
        ><span
          class="wb link__content text-ellipsis"
          style="
            block-size: 21px;
            border-block-color: rgb(40, 112, 237);
            border-color: rgb(40, 112, 237);
            border-inline-color: rgb(40, 112, 237);
            caret-color: rgb(40, 112, 237);
            color: rgb(40, 112, 237);
            column-rule-color: rgb(40, 112, 237);
            cursor: pointer;
            display: block;
            font-size: 14px;
            font-weight: 600;
            height: 21px;
            inline-size: 186.281px;
            line-height: 21px;
            list-style-type: none;
            min-block-size: auto;
            min-height: auto;
            min-inline-size: auto;
            min-width: auto;
            outline-color: rgb(40, 112, 237);
            overflow-block: hidden;
            overflow-inline: hidden;
            overflow: hidden;
            perspective-origin: 93.1406px 10.5px;
            text-align: left;
            text-decoration: none solid rgb(40, 112, 237);
            text-emphasis-color: rgb(40, 112, 237);
            text-overflow: ellipsis;
            text-wrap-mode: nowrap;
            transform-origin: 93.1406px 10.5px;
            width: 186.281px;
            word-break: break-word;
            -webkit-text-fill-color: rgb(40, 112, 237);
            -webkit-text-stroke-color: rgb(40, 112, 237);
          "
          >Mehr zum Bauspardarlehen</span
        ></a
      >
    </div>
  </div>
</article>
<style></style>` },
  { filename: "semantic interactive element negative tabindex", content: `<button role="button" tabindex="-1">
  <span>Regular Button</span>
</button>` }
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

export default InteractiveNotTabbableFailure;
