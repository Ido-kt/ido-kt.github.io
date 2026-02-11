import React from "react";
import EngineIssueFailure from "../../../layout/engineIssueFailure";

const SliderDraggingMovementsFailure = () => {
  const ruleId = "slider-dragging-movements";
  const title = `Sliders requiring dragging movements must offer alternative single-pointer operation methods`;
  const description = `Sliders that require dragging movements should also provide alternative ways to set their value, such as an option to tap or click anywhere on the track to set the value or an adjacent input field. This ensures users can operate the slider without relying solely on dragging. The rule checks whether there are input fields adjacent to the slider, and does not verify whether the slider itself supports tapping or clicking to set its value.`;
  const helpText = `Make sure the slider can be operated with a single pointer, or provide an input field that allows users to set the value directly. For example, a slider should allow users to tap or click anywhere on the track to set the value, or offer a numeric/text input beside the slider for direct value entry.`;
  const fixSteps = [
  "Review the HTML structure",
  "Apply proper accessibility attributes",
  "Test with screen readers"
  ];
  const htmlExamples = [
  { filename: "slider without inputs", content: `<div class="amshopby-slider-wrapper -default" style="block-size: 41px; height: 41px; inline-size: 500px; perspective-origin: 250px 20.5px; transform-origin: 250px 20.5px; width: 500px">
  <div class="items am-filter-items-price" style="block-size: 41px; height: 41px; inline-size: 500px; list-style-type: none; perspective-origin: 250px 20.5px; transform-origin: 250px 20.5px; width: 500px">
    <form data-amshopby-filter="price" data-amshopby-filter-request-var="price" style="block-size: 41px; height: 41px; inline-size: 500px; list-style-type: none; perspective-origin: 250px 20.5px; transform-origin: 250px 20.5px; width: 500px">
      <div
        id="am-shopby-filter-price_6910a4af7bca1"
        class="amshopby-slider-container amshopby_currency_rate -default"
        data-am-js="slider-container"
        data-min="1"
        data-max="55"
        data-rate="1"
        style="block-size: 41px; height: 41px; inline-size: 500px; list-style-type: none; margin-block: 10px 5px; margin-bottom: 5px; margin-top: 10px; perspective-origin: 250px 20.5px; transform-origin: 250px 20.5px; width: 500px; -webkit-tap-highlight-color: rgba(0, 0, 0, 0)"
      >
        <input
          data-amshopby-slider-id="value"
          type="hidden"
          data-digits-after-dot="0"
          name="amshopby[price][]"
          value="10.00-39.00"
          style="
            appearance: none;
            background-color: rgba(0, 0, 0, 0);
            block-size: auto;
            border-block: 0px none rgb(0, 0, 0);
            border-color: rgb(0, 0, 0);
            border-style: none;
            border-width: 0px;
            border-inline: 0px none rgb(0, 0, 0);
            cursor: default;
            display: none;
            height: auto;
            inline-size: auto;
            list-style-type: none;
            padding-block: 0px;
            padding: 0px;
            padding-inline: 0px;
            perspective-origin: 50% 50%;
            transform-origin: 50% 50%;
            width: auto;
            -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
          "
        />
        <div
          data-amshopby-slider-id="slider"
          class="am-slider ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content -loaded"
          style="
            background-color: rgb(218, 218, 218);
            block-size: 10px;
            border-radius: 10px;
            border-end-end-radius: 10px;
            border-end-start-radius: 10px;
            border-start-end-radius: 10px;
            border-start-start-radius: 10px;
            inset: 0px;
            height: 10px;
            inline-size: 484px;
            inset-block: 0px;
            inset-inline: 0px;
            list-style-type: none;
            margin-inline: 8px;
            margin-left: 8px;
            margin-right: 8px;
            perspective-origin: 242px 5px;
            position: relative;
            text-align: left;
            transform-origin: 242px 5px;
            width: 484px;
            -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
          "
          data-id="0"
        >
          <div
            class="ui-slider-range ui-corner-all ui-widget-header"
            style="
              background-color: rgb(182, 182, 182);
              block-size: 10px;
              inset: 0px 143.414px 0px 80.6641px;
              height: 10px;
              inline-size: 259.922px;
              inset-block: 0px;
              inset-inline: 80.6641px 143.414px;
              list-style-type: none;
              perspective-origin: 129.961px 5px;
              position: absolute;
              text-align: left;
              transform-origin: 129.961px 5px;
              width: 259.922px;
              z-index: 2;
              -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
            "
          ></div>
          <span
            tabindex="0"
            class="ui-slider-handle ui-corner-all ui-state-default"
            style="
              background: rgb(255, 85, 2);
              block-size: 16px;
              border-radius: 50%;
              border-end-end-radius: 50%;
              border-end-start-radius: 50%;
              border-start-end-radius: 50%;
              border-start-start-radius: 50%;
              inset: 0px 387.336px -6px 80.6641px;
              cursor: pointer;
              display: flex;
              height: 16px;
              inline-size: 16px;
              inset-block: 0px -6px;
              inset-inline: 80.6641px 387.336px;
              justify-content: center;
              list-style-type: none;
              perspective-origin: 8px 8px;
              position: absolute;
              text-align: left;
              transform: matrix(1, 0, 0, 1, -8, -3);
              transform-origin: 8px 8px;
              width: 16px;
              z-index: 2;
              -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
            "
          ></span
          ><span
            tabindex="0"
            class="ui-slider-handle ui-corner-all ui-state-default"
            style="
              background: rgb(255, 85, 2);
              block-size: 16px;
              border-radius: 50%;
              border-end-end-radius: 50%;
              border-end-start-radius: 50%;
              border-start-end-radius: 50%;
              border-start-start-radius: 50%;
              inset: 0px 127.414px -6px 340.586px;
              cursor: pointer;
              display: flex;
              height: 16px;
              inline-size: 16px;
              inset-block: 0px -6px;
              inset-inline: 340.586px 127.414px;
              justify-content: center;
              list-style-type: none;
              perspective-origin: 8px 8px;
              position: absolute;
              text-align: left;
              transform: matrix(1, 0, 0, 1, -8, -3);
              transform-origin: 8px 8px;
              width: 16px;
              z-index: 2;
              -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
            "
          ></span>
        </div>
        <div
          data-amshopby-slider-id="display"
          class="amshopby-slider-display"
          data-am-js="slider-display"
          style="block-size: 21px; height: 21px; inline-size: 500px; list-style-type: none; margin-block-start: 10px; margin-top: 10px; perspective-origin: 250px 10.5px; text-align: center; transform-origin: 250px 10.5px; width: 500px; -webkit-tap-highlight-color: rgba(0, 0, 0, 0)"
        >
          \$10.00 - \$39.00
        </div>
      </div>
    </form>
  </div>
</div>
<style>
  [data-id="0"]::after {
    block-size: 10px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    border-end-end-radius: 20px;
    border-end-start-radius: 20px;
    border-start-end-radius: 20px;
    border-start-start-radius: 20px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    bottom: 0px;
    content: "";
    display: block;
    height: 10px;
    inline-size: 16px;
    inset-block-end: 0px;
    inset-block-start: 0px;
    inset-inline-end: -8px;
    inset-inline-start: 476px;
    left: 476px;
    list-style-type: none;
    perspective-origin: 8px 5px;
    position: absolute;
    right: -8px;
    text-align: left;
    top: 0px;
    transform-origin: 8px 5px;
    width: 16px;
    z-index: 1;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
  [data-id="0"]::before {
    block-size: 10px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    border-end-end-radius: 20px;
    border-end-start-radius: 20px;
    border-start-end-radius: 20px;
    border-start-start-radius: 20px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    bottom: 0px;
    content: "";
    display: block;
    height: 10px;
    inline-size: 16px;
    inset-block-end: 0px;
    inset-block-start: 0px;
    inset-inline-end: 476px;
    inset-inline-start: -8px;
    left: -8px;
    list-style-type: none;
    perspective-origin: 8px 5px;
    position: absolute;
    right: 476px;
    text-align: left;
    top: 0px;
    transform-origin: 8px 5px;
    width: 16px;
    z-index: 1;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
</style>` }
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

export default SliderDraggingMovementsFailure;
