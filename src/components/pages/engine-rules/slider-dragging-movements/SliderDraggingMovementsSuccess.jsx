import React from "react";
import EngineIssueSuccess from "../../../layout/engineIssueSuccess";

const SliderDraggingMovementsSuccess = () => {
  const ruleId = "slider-dragging-movements";
  const title = `Sliders requiring dragging movements must offer alternative single-pointer operation methods`;
  const description = `Sliders that require dragging movements should also provide alternative ways to set their value, such as an option to tap or click anywhere on the track to set the value or an adjacent input field. This ensures users can operate the slider without relying solely on dragging. The rule checks whether there are input fields adjacent to the slider, and does not verify whether the slider itself supports tapping or clicking to set its value.`;
  const helpText = `Make sure the slider can be operated with a single pointer, or provide an input field that allows users to set the value directly. For example, a slider should allow users to tap or click anywhere on the track to set the value, or offer a numeric/text input beside the slider for direct value entry.`;
  const bestPractices = [
  "Follow proper HTML semantics",
  "Ensure screen reader compatibility",
  "Test with assistive technologies"
  ];
  const htmlExamples = [
  { filename: "rc slider with inputs", content: `<!-- The test is in skip because the inputs are inside the 3 parent of the rc-slider, https://www.ibuypower.com/gaming-laptops/asus-laptops-->
<div
  class="inline-flex w-fit flex-col items-center justify-center px-5"
  style="
    align-items: center;
    block-size: 106px;
    caret-color: rgb(13, 13, 13);
    color: rgb(13, 13, 13);
    column-rule-color: rgb(13, 13, 13);
    display: flex;
    flex-direction: column;
    height: 106px;
    inline-size: 235.266px;
    justify-content: center;
    min-block-size: auto;
    min-height: auto;
    min-inline-size: auto;
    min-width: auto;
    outline-color: rgb(13, 13, 13);
    padding-inline: 20px;
    padding-left: 20px;
    padding-right: 20px;
    perspective-origin: 117.633px 53px;
    text-decoration-color: rgb(13, 13, 13);
    text-emphasis-color: rgb(13, 13, 13);
    transform-origin: 117.633px 53px;
    width: 235.266px;
    -webkit-text-fill-color: rgb(13, 13, 13);
    -webkit-text-stroke-color: rgb(13, 13, 13);
  "
>
  <div
    class="inline-flex w-fit justify-between gap-2 px-2"
    style="
      block-size: 44px;
      caret-color: rgb(13, 13, 13);
      color: rgb(13, 13, 13);
      gap: 8px;
      column-rule-color: rgb(13, 13, 13);
      display: flex;
      height: 44px;
      inline-size: 195.266px;
      justify-content: space-between;
      min-block-size: auto;
      min-height: auto;
      min-inline-size: auto;
      min-width: auto;
      outline-color: rgb(13, 13, 13);
      padding-inline: 8px;
      padding-left: 8px;
      padding-right: 8px;
      perspective-origin: 97.6328px 22px;
      text-decoration-color: rgb(13, 13, 13);
      text-emphasis-color: rgb(13, 13, 13);
      transform-origin: 97.6328px 22px;
      width: 195.266px;
      -webkit-text-fill-color: rgb(13, 13, 13);
      -webkit-text-stroke-color: rgb(13, 13, 13);
    "
  >
    <div
      class="inline-flex w-fit flex-col items-center justify-center"
      style="
        align-items: center;
        block-size: 44px;
        caret-color: rgb(13, 13, 13);
        color: rgb(13, 13, 13);
        column-rule-color: rgb(13, 13, 13);
        display: flex;
        flex-direction: column;
        height: 44px;
        inline-size: 73.6406px;
        justify-content: center;
        min-block-size: auto;
        min-height: auto;
        min-inline-size: auto;
        min-width: auto;
        outline-color: rgb(13, 13, 13);
        perspective-origin: 36.8203px 22px;
        text-decoration-color: rgb(13, 13, 13);
        text-emphasis-color: rgb(13, 13, 13);
        transform-origin: 36.8203px 22px;
        width: 73.6406px;
        -webkit-text-fill-color: rgb(13, 13, 13);
        -webkit-text-stroke-color: rgb(13, 13, 13);
      "
    >
      <p
        class="text-xs text-gray-400"
        style="
          block-size: 16px;
          caret-color: rgb(156, 163, 175);
          color: rgb(156, 163, 175);
          column-rule-color: rgb(156, 163, 175);
          font-size: 12px;
          height: 16px;
          inline-size: 22.9766px;
          line-height: 16px;
          min-block-size: auto;
          min-height: auto;
          min-inline-size: auto;
          min-width: auto;
          outline-color: rgb(156, 163, 175);
          perspective-origin: 11.4844px 8px;
          text-decoration-color: rgb(156, 163, 175);
          text-emphasis-color: rgb(156, 163, 175);
          transform-origin: 11.4883px 8px;
          width: 22.9766px;
          -webkit-text-fill-color: rgb(156, 163, 175);
          -webkit-text-stroke-color: rgb(156, 163, 175);
        "
      >
        Min
      </p>
      <div
        class="flex w-full flex-row items-center rounded border-none p-1 shadow-newContainer"
        style="
          align-items: center;
          block-size: 28px;
          border-block-style: none;
          border-radius: 4px;
          border-style: none;
          border-end-end-radius: 4px;
          border-end-start-radius: 4px;
          border-inline-style: none;
          border-start-end-radius: 4px;
          border-start-start-radius: 4px;
          box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(153, 153, 153, 0.6) 0px 0px 4px 0px;
          caret-color: rgb(13, 13, 13);
          color: rgb(13, 13, 13);
          column-rule-color: rgb(13, 13, 13);
          display: flex;
          height: 28px;
          inline-size: 73.6484px;
          min-block-size: auto;
          min-height: auto;
          min-inline-size: auto;
          min-width: auto;
          outline-color: rgb(13, 13, 13);
          padding-block: 4px;
          padding: 4px;
          padding-inline: 4px;
          perspective-origin: 36.8203px 14px;
          text-decoration-color: rgb(13, 13, 13);
          text-emphasis-color: rgb(13, 13, 13);
          transform-origin: 36.8242px 14px;
          width: 73.6484px;
          -webkit-text-fill-color: rgb(13, 13, 13);
          -webkit-text-stroke-color: rgb(13, 13, 13);
        "
      >
        <span
          class="w-fit px-1 text-center text-xs font-bold"
          style="
            block-size: 16px;
            caret-color: rgb(13, 13, 13);
            color: rgb(13, 13, 13);
            column-rule-color: rgb(13, 13, 13);
            display: block;
            font-size: 12px;
            font-weight: 700;
            height: 16px;
            inline-size: 15.6562px;
            line-height: 16px;
            min-block-size: auto;
            min-height: auto;
            min-inline-size: auto;
            min-width: auto;
            outline-color: rgb(13, 13, 13);
            padding-inline: 4px;
            padding-left: 4px;
            padding-right: 4px;
            perspective-origin: 7.82812px 8px;
            text-align: center;
            text-decoration-color: rgb(13, 13, 13);
            text-emphasis-color: rgb(13, 13, 13);
            transform-origin: 7.82812px 8px;
            width: 15.6562px;
            -webkit-text-fill-color: rgb(13, 13, 13);
            -webkit-text-stroke-color: rgb(13, 13, 13);
          "
          >\$</span
        ><input
          class="w-[50px] border-none p-0 text-sm font-bold outline-none"
          type="string"
          min="800"
          value="800"
          style="
            block-size: 20px;
            border-block-style: none;
            border-block-width: 0px;
            border-style: none;
            border-width: 0px;
            border-inline-style: none;
            border-inline-width: 0px;
            caret-color: rgb(13, 13, 13);
            color: rgb(13, 13, 13);
            column-rule-color: rgb(13, 13, 13);
            display: block;
            font-size: 14px;
            font-weight: 700;
            height: 20px;
            inline-size: 50px;
            line-height: 20px;
            min-block-size: auto;
            min-height: auto;
            min-inline-size: auto;
            min-width: auto;
            outline: rgba(0, 0, 0, 0) solid 2px;
            outline-offset: 2px;
            padding-inline-start: 0px;
            padding-left: 0px;
            perspective-origin: 25px 10px;
            text-decoration-color: rgb(13, 13, 13);
            text-emphasis-color: rgb(13, 13, 13);
            transform-origin: 25px 10px;
            width: 50px;
            -webkit-text-fill-color: rgb(13, 13, 13);
            -webkit-text-stroke-color: rgb(13, 13, 13);
          "
        />
      </div>
    </div>
    <p
      class="self-end"
      style="
        align-self: flex-end;
        block-size: 24px;
        caret-color: rgb(13, 13, 13);
        color: rgb(13, 13, 13);
        column-rule-color: rgb(13, 13, 13);
        height: 24px;
        inline-size: 16px;
        min-block-size: auto;
        min-height: auto;
        min-inline-size: auto;
        min-width: auto;
        outline-color: rgb(13, 13, 13);
        perspective-origin: 8px 12px;
        text-decoration-color: rgb(13, 13, 13);
        text-emphasis-color: rgb(13, 13, 13);
        transform-origin: 8px 12px;
        width: 16px;
        -webkit-text-fill-color: rgb(13, 13, 13);
        -webkit-text-stroke-color: rgb(13, 13, 13);
      "
    >
      —
    </p>
    <div
      class="inline-flex flex-col items-center justify-start"
      style="
        align-items: center;
        block-size: 44px;
        caret-color: rgb(13, 13, 13);
        color: rgb(13, 13, 13);
        column-rule-color: rgb(13, 13, 13);
        display: flex;
        flex-direction: column;
        height: 44px;
        inline-size: 73.6406px;
        justify-content: flex-start;
        min-block-size: auto;
        min-height: auto;
        min-inline-size: auto;
        min-width: auto;
        outline-color: rgb(13, 13, 13);
        perspective-origin: 36.8203px 22px;
        text-decoration-color: rgb(13, 13, 13);
        text-emphasis-color: rgb(13, 13, 13);
        transform-origin: 36.8203px 22px;
        width: 73.6406px;
        -webkit-text-fill-color: rgb(13, 13, 13);
        -webkit-text-stroke-color: rgb(13, 13, 13);
      "
    >
      <p
        class="text-xs text-gray-400"
        style="
          block-size: 16px;
          caret-color: rgb(156, 163, 175);
          color: rgb(156, 163, 175);
          column-rule-color: rgb(156, 163, 175);
          font-size: 12px;
          height: 16px;
          inline-size: 25.2656px;
          line-height: 16px;
          min-block-size: auto;
          min-height: auto;
          min-inline-size: auto;
          min-width: auto;
          outline-color: rgb(156, 163, 175);
          perspective-origin: 12.6328px 8px;
          text-decoration-color: rgb(156, 163, 175);
          text-emphasis-color: rgb(156, 163, 175);
          transform-origin: 12.6328px 8px;
          width: 25.2656px;
          -webkit-text-fill-color: rgb(156, 163, 175);
          -webkit-text-stroke-color: rgb(156, 163, 175);
        "
      >
        Max
      </p>
      <div
        class="flex w-fit flex-row items-center rounded border-none p-1 shadow-newContainer"
        style="
          align-items: center;
          block-size: 28px;
          border-block-style: none;
          border-radius: 4px;
          border-style: none;
          border-end-end-radius: 4px;
          border-end-start-radius: 4px;
          border-inline-style: none;
          border-start-end-radius: 4px;
          border-start-start-radius: 4px;
          box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(153, 153, 153, 0.6) 0px 0px 4px 0px;
          caret-color: rgb(13, 13, 13);
          color: rgb(13, 13, 13);
          column-rule-color: rgb(13, 13, 13);
          display: flex;
          height: 28px;
          inline-size: 73.6484px;
          min-block-size: auto;
          min-height: auto;
          min-inline-size: auto;
          min-width: auto;
          outline-color: rgb(13, 13, 13);
          padding-block: 4px;
          padding: 4px;
          padding-inline: 4px;
          perspective-origin: 36.8203px 14px;
          text-decoration-color: rgb(13, 13, 13);
          text-emphasis-color: rgb(13, 13, 13);
          transform-origin: 36.8242px 14px;
          width: 73.6484px;
          -webkit-text-fill-color: rgb(13, 13, 13);
          -webkit-text-stroke-color: rgb(13, 13, 13);
        "
      >
        <span
          class="w-fit px-1 text-center text-xs font-bold"
          style="
            block-size: 16px;
            caret-color: rgb(13, 13, 13);
            color: rgb(13, 13, 13);
            column-rule-color: rgb(13, 13, 13);
            display: block;
            font-size: 12px;
            font-weight: 700;
            height: 16px;
            inline-size: 15.6562px;
            line-height: 16px;
            min-block-size: auto;
            min-height: auto;
            min-inline-size: auto;
            min-width: auto;
            outline-color: rgb(13, 13, 13);
            padding-inline: 4px;
            padding-left: 4px;
            padding-right: 4px;
            perspective-origin: 7.82812px 8px;
            text-align: center;
            text-decoration-color: rgb(13, 13, 13);
            text-emphasis-color: rgb(13, 13, 13);
            transform-origin: 7.82812px 8px;
            width: 15.6562px;
            -webkit-text-fill-color: rgb(13, 13, 13);
            -webkit-text-stroke-color: rgb(13, 13, 13);
          "
          >\$</span
        ><input
          class="w-[50px] border-none p-0 text-sm font-bold outline-none"
          max="7000"
          value="4300"
          style="
            block-size: 20px;
            border-block-style: none;
            border-block-width: 0px;
            border-style: none;
            border-width: 0px;
            border-inline-style: none;
            border-inline-width: 0px;
            caret-color: rgb(13, 13, 13);
            color: rgb(13, 13, 13);
            column-rule-color: rgb(13, 13, 13);
            display: block;
            font-size: 14px;
            font-weight: 700;
            height: 20px;
            inline-size: 50px;
            line-height: 20px;
            min-block-size: auto;
            min-height: auto;
            min-inline-size: auto;
            min-width: auto;
            outline: rgba(0, 0, 0, 0) solid 2px;
            outline-offset: 2px;
            padding-inline-start: 0px;
            padding-left: 0px;
            perspective-origin: 25px 10px;
            text-decoration-color: rgb(13, 13, 13);
            text-emphasis-color: rgb(13, 13, 13);
            transform-origin: 25px 10px;
            width: 50px;
            -webkit-text-fill-color: rgb(13, 13, 13);
            -webkit-text-stroke-color: rgb(13, 13, 13);
          "
        />
      </div>
    </div>
  </div>
  <div
    class="mt-7 w-full px-3 pb-5"
    style="
      block-size: 34px;
      caret-color: rgb(13, 13, 13);
      color: rgb(13, 13, 13);
      column-rule-color: rgb(13, 13, 13);
      height: 34px;
      inline-size: 195.266px;
      margin-block-start: 28px;
      margin-top: 28px;
      min-block-size: auto;
      min-height: auto;
      min-inline-size: auto;
      min-width: auto;
      outline-color: rgb(13, 13, 13);
      padding-block-end: 20px;
      padding-bottom: 20px;
      padding-inline: 12px;
      padding-left: 12px;
      padding-right: 12px;
      perspective-origin: 97.6328px 17px;
      text-decoration-color: rgb(13, 13, 13);
      text-emphasis-color: rgb(13, 13, 13);
      transform-origin: 97.6328px 17px;
      width: 195.266px;
      -webkit-text-fill-color: rgb(13, 13, 13);
      -webkit-text-stroke-color: rgb(13, 13, 13);
    "
  >
    <div
      class="relative flex w-full !flex-row items-center justify-center"
      style="
        align-items: center;
        block-size: 14px;
        inset: 0px;
        caret-color: rgb(13, 13, 13);
        color: rgb(13, 13, 13);
        column-rule-color: rgb(13, 13, 13);
        display: flex;
        height: 14px;
        inline-size: 171.266px;
        inset-block: 0px;
        inset-inline: 0px;
        justify-content: center;
        outline-color: rgb(13, 13, 13);
        perspective-origin: 85.6328px 7px;
        position: relative;
        text-decoration-color: rgb(13, 13, 13);
        text-emphasis-color: rgb(13, 13, 13);
        transform-origin: 85.6328px 7px;
        width: 171.266px;
        -webkit-text-fill-color: rgb(13, 13, 13);
        -webkit-text-stroke-color: rgb(13, 13, 13);
      "
    >
      <div
        class="rc-slider"
        style="
          block-size: 14px;
          border-radius: 6px;
          border-end-end-radius: 6px;
          border-end-start-radius: 6px;
          border-start-end-radius: 6px;
          border-start-start-radius: 6px;
          inset: 0px;
          caret-color: rgb(13, 13, 13);
          color: rgb(13, 13, 13);
          column-rule-color: rgb(13, 13, 13);
          height: 14px;
          inline-size: 171.266px;
          inset-block: 0px;
          inset-inline: 0px;
          min-block-size: auto;
          min-height: auto;
          min-inline-size: auto;
          min-width: auto;
          outline-color: rgb(13, 13, 13);
          padding-block: 5px;
          padding-bottom: 5px;
          padding-top: 5px;
          perspective-origin: 85.6328px 7px;
          position: relative;
          text-decoration-color: rgb(13, 13, 13);
          text-emphasis-color: rgb(13, 13, 13);
          touch-action: none;
          transform-origin: 85.6328px 7px;
          width: 171.266px;
          -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
          -webkit-text-fill-color: rgb(13, 13, 13);
          -webkit-text-stroke-color: rgb(13, 13, 13);
        "
      >
        <div
          class="rc-slider-rail"
          style="
            background-color: rgba(220, 220, 220, 0.38);
            block-size: 5px;
            border-radius: 6px;
            border-end-end-radius: 6px;
            border-end-start-radius: 6px;
            border-start-end-radius: 6px;
            border-start-start-radius: 6px;
            inset: 5px 0px 4px;
            caret-color: rgb(13, 13, 13);
            color: rgb(13, 13, 13);
            column-rule-color: rgb(13, 13, 13);
            height: 5px;
            inline-size: 171.266px;
            inset-block: 5px 4px;
            inset-inline: 0px;
            outline-color: rgb(13, 13, 13);
            perspective-origin: 85.6328px 2.5px;
            position: absolute;
            text-decoration-color: rgb(13, 13, 13);
            text-emphasis-color: rgb(13, 13, 13);
            transform-origin: 85.6328px 2.5px;
            width: 171.266px;
            -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
            -webkit-text-fill-color: rgb(13, 13, 13);
            -webkit-text-stroke-color: rgb(13, 13, 13);
          "
        ></div>
        <div
          class="rc-slider-track rc-slider-track-1"
          style="
            background-color: rgb(254, 27, 27);
            block-size: 5px;
            border-radius: 6px;
            border-end-end-radius: 6px;
            border-end-start-radius: 6px;
            border-start-end-radius: 6px;
            border-start-start-radius: 6px;
            inset: 5px 74.5859px 4px 0px;
            caret-color: rgb(13, 13, 13);
            color: rgb(13, 13, 13);
            column-rule-color: rgb(13, 13, 13);
            height: 5px;
            inline-size: 96.6797px;
            inset-block: 5px 4px;
            inset-inline: 0px 74.5859px;
            outline-color: rgb(13, 13, 13);
            perspective-origin: 48.3359px 2.5px;
            position: absolute;
            text-decoration-color: rgb(13, 13, 13);
            text-emphasis-color: rgb(13, 13, 13);
            transform-origin: 48.3398px 2.5px;
            width: 96.6797px;
            -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
            -webkit-text-fill-color: rgb(13, 13, 13);
            -webkit-text-stroke-color: rgb(13, 13, 13);
          "
        ></div>
        <div
          class="rc-slider-step"
          style="
            block-size: 4px;
            inset: 5px 0px;
            caret-color: rgb(13, 13, 13);
            color: rgb(13, 13, 13);
            column-rule-color: rgb(13, 13, 13);
            height: 4px;
            inline-size: 171.266px;
            inset-block: 5px;
            inset-inline: 0px;
            outline-color: rgb(13, 13, 13);
            perspective-origin: 85.6328px 2px;
            position: absolute;
            text-decoration-color: rgb(13, 13, 13);
            text-emphasis-color: rgb(13, 13, 13);
            transform-origin: 85.6328px 2px;
            width: 171.266px;
            -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
            -webkit-text-fill-color: rgb(13, 13, 13);
            -webkit-text-stroke-color: rgb(13, 13, 13);
          "
        ></div>
        <div
          tabindex="0"
          class="rc-slider-handle rc-slider-handle-1"
          role="slider"
          aria-valuemin="800"
          aria-valuemax="7000"
          aria-valuenow="800"
          aria-disabled="false"
          style="
            border: 2px solid rgb(254, 27, 27);
            background-color: rgb(255, 255, 255);
            block-size: 17px;
            border-block-color: rgb(254, 27, 27);
            border-block-width: 2px;
            border-radius: 50%;
            border-end-end-radius: 50%;
            border-end-start-radius: 50%;
            border-inline-color: rgb(254, 27, 27);
            border-inline-width: 2px;
            border-start-end-radius: 50%;
            border-start-start-radius: 50%;
            inset: 5px 161.266px -2px 0px;
            caret-color: rgb(13, 13, 13);
            color: rgb(13, 13, 13);
            column-rule-color: rgb(13, 13, 13);
            cursor: grab;
            height: 17px;
            inline-size: 17px;
            inset-block: 5px -2px;
            inset-inline: 0px 161.266px;
            margin-block-start: -6px;
            margin-inline-start: -7px;
            margin-left: -7px;
            margin-top: -6px;
            outline-color: rgb(13, 13, 13);
            perspective-origin: 8.5px 8.5px;
            position: absolute;
            text-decoration-color: rgb(13, 13, 13);
            text-emphasis-color: rgb(13, 13, 13);
            touch-action: pan-x;
            transform-origin: 8.5px 8.5px;
            width: 17px;
            -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
            -webkit-text-fill-color: rgb(13, 13, 13);
            -webkit-text-stroke-color: rgb(13, 13, 13);
          "
        ></div>
        <div
          tabindex="0"
          class="rc-slider-handle rc-slider-handle-2"
          role="slider"
          aria-valuemin="800"
          aria-valuemax="7000"
          aria-valuenow="4300"
          aria-disabled="false"
          style="
            border: 2px solid rgb(254, 27, 27);
            background-color: rgb(255, 255, 255);
            block-size: 17px;
            border-block-color: rgb(254, 27, 27);
            border-block-width: 2px;
            border-radius: 50%;
            border-end-end-radius: 50%;
            border-end-start-radius: 50%;
            border-inline-color: rgb(254, 27, 27);
            border-inline-width: 2px;
            border-start-end-radius: 50%;
            border-start-start-radius: 50%;
            inset: 5px 64.5859px -2px 96.6797px;
            caret-color: rgb(13, 13, 13);
            color: rgb(13, 13, 13);
            column-rule-color: rgb(13, 13, 13);
            cursor: grab;
            height: 17px;
            inline-size: 17px;
            inset-block: 5px -2px;
            inset-inline: 96.6797px 64.5859px;
            margin-block-start: -6px;
            margin-inline-start: -7px;
            margin-left: -7px;
            margin-top: -6px;
            outline-color: rgb(13, 13, 13);
            perspective-origin: 8.5px 8.5px;
            position: absolute;
            text-decoration-color: rgb(13, 13, 13);
            text-emphasis-color: rgb(13, 13, 13);
            touch-action: pan-x;
            transform-origin: 8.5px 8.5px;
            width: 17px;
            -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
            -webkit-text-fill-color: rgb(13, 13, 13);
            -webkit-text-stroke-color: rgb(13, 13, 13);
          "
        ></div>
        <div
          class="rc-slider-mark"
          style="
            inset: 18px 0px -4px;
            caret-color: rgb(13, 13, 13);
            color: rgb(13, 13, 13);
            column-rule-color: rgb(13, 13, 13);
            font-size: 12px;
            inline-size: 171.266px;
            inset-block: 18px -4px;
            inset-inline: 0px;
            line-height: 18px;
            outline-color: rgb(13, 13, 13);
            perspective-origin: 85.6328px 0px;
            position: absolute;
            text-decoration-color: rgb(13, 13, 13);
            text-emphasis-color: rgb(13, 13, 13);
            transform-origin: 85.6328px 0px;
            width: 171.266px;
            -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
            -webkit-text-fill-color: rgb(13, 13, 13);
            -webkit-text-stroke-color: rgb(13, 13, 13);
          "
        ></div>
      </div>
    </div>
  </div>
</div>
<style></style>` },
  { filename: "slider with inputs", content: `<div
  class="filter-group__content"
  data-collapsible-content=""
  style="
    animation-duration: 0.3s;
    animation-name: fadeInUp;
    animation-timing-function: ease-in;
    block-size: 110px;
    display: grid;
    font-size: 13.2px;
    grid-template-columns: 340px;
    grid-template-rows: 110px;
    height: 110px;
    inline-size: 340px;
    perspective-origin: 170px 55px;
    transform-origin: 170px 55px;
    transition: transform 0.3s ease-out, opacity 0.3s ease-in;
    width: 340px;
  "
>
  <div class="filter__price" data-range-holder="" style="block-size: 98px; font-size: 13.2px; height: 98px; inline-size: 340px; margin-block-start: 12px; margin-top: 12px; min-block-size: auto; min-height: auto; min-inline-size: auto; min-width: auto; perspective-origin: 170px 49px; transform-origin: 170px 49px; width: 340px">
    <range-slider
      class="filter__price__range range is-initialized"
      data-range-slider=""
      data-range-filter-update=""
      data-se-min="0"
      data-se-step="1"
      data-se-min-value="0"
      data-se-max-value="248"
      data-se-max="248"
      style="block-size: 36px; inset: 0px; display: block; font-size: 13.2px; height: 36px; inline-size: 356px; inset-block: 0px; inset-inline: 0px; margin-inline: -8px; margin-left: -8px; margin-right: -8px; perspective-origin: 178px 18px; position: relative; transform-origin: 178px 18px; user-select: none; width: 356px"
    >
      <div
        class="range__dot range__dot--left"
        data-range-left=""
        style="block-size: 36px; inset: 0px 320px 0px 0px; font-size: 13.2px; height: 36px; inline-size: 36px; inset-block: 0px; inset-inline: 0px 320px; padding-block: 8px; padding: 8px; padding-inline: 8px; perspective-origin: 18px 18px; position: absolute; transform-origin: 18px 18px; user-select: none; width: 36px; z-index: 2"
      >
        <span
          style="
            background-color: rgb(0, 0, 0);
            block-size: 20px;
            border-block-style: solid;
            border-block-width: 1px;
            border-radius: 50%;
            border-style: solid;
            border-width: 1px;
            border-end-end-radius: 50%;
            border-end-start-radius: 50%;
            border-inline-style: solid;
            border-inline-width: 1px;
            border-start-end-radius: 50%;
            border-start-start-radius: 50%;
            cursor: pointer;
            display: block;
            font-size: 0px;
            height: 20px;
            inline-size: 20px;
            perspective-origin: 10px 10px;
            transform-origin: 10px 10px;
            user-select: none;
            width: 20px;
          "
          >&nbsp;</span
        >
      </div>
      <div
        class="range__dot range__dot--right"
        data-range-right=""
        style="block-size: 36px; inset: 0px 0px 0px 320px; font-size: 13.2px; height: 36px; inline-size: 36px; inset-block: 0px; inset-inline: 320px 0px; padding-block: 8px; padding: 8px; padding-inline: 8px; perspective-origin: 18px 18px; position: absolute; transform-origin: 18px 18px; user-select: none; width: 36px; z-index: 2"
      >
        <span
          style="
            background-color: rgb(0, 0, 0);
            block-size: 20px;
            border-block-style: solid;
            border-block-width: 1px;
            border-radius: 50%;
            border-style: solid;
            border-width: 1px;
            border-end-end-radius: 50%;
            border-end-start-radius: 50%;
            border-inline-style: solid;
            border-inline-width: 1px;
            border-start-end-radius: 50%;
            border-start-start-radius: 50%;
            cursor: pointer;
            display: block;
            font-size: 0px;
            height: 20px;
            inline-size: 20px;
            perspective-origin: 10px 10px;
            transform-origin: 10px 10px;
            user-select: none;
            width: 20px;
          "
          >&nbsp;</span
        >
      </div>
      <div
        class="range__line"
        style="
          block-size: 4px;
          border-block-style: solid;
          border-block-width: 1px;
          border-radius: 4px;
          border-style: solid;
          border-width: 1px;
          border-end-end-radius: 4px;
          border-end-start-radius: 4px;
          border-inline-style: solid;
          border-inline-width: 1px;
          border-start-end-radius: 4px;
          border-start-start-radius: 4px;
          inset: 16px 8px;
          font-size: 13.2px;
          height: 4px;
          inline-size: 340px;
          inset-block: 16px;
          inset-inline: 8px;
          overflow-block: hidden;
          overflow-inline: hidden;
          overflow: hidden;
          perspective-origin: 170px 2px;
          position: absolute;
          transform-origin: 170px 2px;
          user-select: none;
          width: 340px;
          z-index: 0;
        "
      >
        <span data-range-line="" style="margin-left: 0px; background-color: rgb(0, 0, 0); block-size: 2px; display: block; font-size: 0px; height: 2px; inline-size: 320px; perspective-origin: 160px 1px; transform-origin: 160px 1px; user-select: none; width: 320px">&nbsp;</span>
      </div>
    </range-slider>

    <script src="//www.alexandani.com/cdn/shop/t/792/assets/range-slider.js?v=172585113619389479691762276857" defer="defer" style="font-size: 13.2px"></script>

    <div class="filter__price__fields" style="align-items: center; block-size: 37px; display: flex; font-size: 13.2px; height: 37px; inline-size: 340px; justify-content: flex-start; margin-block-end: 25px; margin-bottom: 25px; max-inline-size: 100%; max-width: 100%; perspective-origin: 170px 18.5px; transform-origin: 170px 18.5px; width: 340px">
      <div
        class="filter__price__field filter__price__from"
        style="
          align-items: center;
          block-size: 37px;
          border-block-style: solid;
          border-block-width: 1px;
          border-style: solid;
          border-width: 1px;
          border-inline-style: solid;
          border-inline-width: 1px;
          display: flex;
          flex-basis: 0%;
          flex-grow: 1;
          font-size: 13.2px;
          height: 37px;
          inline-size: 160px;
          max-inline-size: calc(50% - 10px);
          max-width: calc(50% - 10px);
          min-block-size: auto;
          min-height: auto;
          min-inline-size: auto;
          min-width: auto;
          padding-block: 8px;
          padding-bottom: 8px;
          padding-inline-start: 8px;
          padding-left: 8px;
          padding-top: 8px;
          perspective-origin: 80px 18.5px;
          transform-origin: 80px 18.5px;
          width: 160px;
        "
      >
        <span
          class="filter__price__currency"
          style="block-size: 17px; display: block; font-size: 13.2px; height: 17px; inline-size: 7.63281px; margin-inline-end: 5px; margin-right: 5px; min-block-size: auto; min-height: auto; min-inline-size: auto; min-width: auto; perspective-origin: 3.8125px 8.5px; transform-origin: 3.81641px 8.5px; width: 7.63281px"
          >\$</span
        >

        <input
          data-field-price-min=""
          class="filter__price__input"
          name="filter.v.price.gte"
          id="filter-price-from-Price-5"
          type="number"
          placeholder="0"
          min="0"
          max="248.00"
          style="
            appearance: none;
            block-size: 19px;
            border-block-color: rgba(0, 0, 0, 0);
            border-color: rgba(0, 0, 0, 0);
            border-inline-color: rgba(0, 0, 0, 0);
            display: block;
            flex-basis: 0%;
            flex-grow: 1;
            font-size: 13.2px;
            height: 19px;
            inline-size: 137.375px;
            margin-block: 0px;
            margin-bottom: 0px;
            margin-top: 0px;
            min-block-size: auto;
            min-height: auto;
            padding-block: 0px;
            padding: 0px 3px;
            padding-inline: 3px;
            perspective-origin: 68.6875px 9.5px;
            text-align: right;
            transform-origin: 68.6875px 9.5px;
            width: 137.375px;
          "
        />

        <label
          for="filter-price-from-Price-5"
          style="
            block-size: 1px;
            inset: 67px 332px 44px 9px;
            clip: rect(0px, 0px, 0px, 0px);
            display: block;
            font-size: 13.2px;
            height: 1px;
            inline-size: 1px;
            inset-block: 67px 44px;
            inset-inline: 9px 332px;
            margin-block: -1px;
            margin: -1px;
            margin-inline: -1px;
            overflow-block: hidden;
            overflow-inline: hidden;
            overflow: hidden;
            perspective-origin: 0.5px 0.5px;
            position: absolute;
            transform-origin: 0.5px 0.5px;
            width: 1px;
          "
          >From</label
        >
      </div>
      <div
        class="filter__price__spacer"
        style="
          block-size: 10px;
          inset: 0px;
          flex-basis: 20px;
          flex-shrink: 0;
          font-size: 0px;
          height: 10px;
          inline-size: 20px;
          inset-block: 0px;
          inset-inline: 0px;
          min-block-size: auto;
          min-height: auto;
          min-inline-size: auto;
          min-width: auto;
          padding-block: 5px;
          padding: 5px;
          padding-inline: 5px;
          perspective-origin: 10px 5px;
          position: relative;
          text-align: center;
          transform-origin: 10px 5px;
          width: 20px;
        "
        data-id="0"
      >
        -
      </div>
      <div
        class="filter__price__field filter__price__to"
        style="
          align-items: center;
          block-size: 37px;
          border-block-style: solid;
          border-block-width: 1px;
          border-style: solid;
          border-width: 1px;
          border-inline-style: solid;
          border-inline-width: 1px;
          display: flex;
          flex-basis: 0%;
          flex-grow: 1;
          font-size: 13.2px;
          height: 37px;
          inline-size: 160px;
          max-inline-size: calc(50% - 10px);
          max-width: calc(50% - 10px);
          min-block-size: auto;
          min-height: auto;
          min-inline-size: auto;
          min-width: auto;
          padding-block: 8px;
          padding-bottom: 8px;
          padding-inline-start: 8px;
          padding-left: 8px;
          padding-top: 8px;
          perspective-origin: 80px 18.5px;
          transform-origin: 80px 18.5px;
          width: 160px;
        "
      >
        <span
          class="filter__price__currency"
          style="block-size: 17px; display: block; font-size: 13.2px; height: 17px; inline-size: 7.63281px; margin-inline-end: 5px; margin-right: 5px; min-block-size: auto; min-height: auto; min-inline-size: auto; min-width: auto; perspective-origin: 3.8125px 8.5px; transform-origin: 3.81641px 8.5px; width: 7.63281px"
          >\$</span
        >

        <input
          data-field-price-max=""
          class="filter__price__input"
          name="filter.v.price.lte"
          id="filter-price-to-Price-5"
          type="number"
          placeholder="248"
          min="0"
          max="248"
          style="
            appearance: none;
            block-size: 19px;
            border-block-color: rgba(0, 0, 0, 0);
            border-color: rgba(0, 0, 0, 0);
            border-inline-color: rgba(0, 0, 0, 0);
            display: block;
            flex-basis: 0%;
            flex-grow: 1;
            font-size: 13.2px;
            height: 19px;
            inline-size: 137.375px;
            margin-block: 0px;
            margin-bottom: 0px;
            margin-top: 0px;
            min-block-size: auto;
            min-height: auto;
            padding-block: 0px;
            padding: 0px 3px;
            padding-inline: 3px;
            perspective-origin: 68.6875px 9.5px;
            text-align: right;
            transform-origin: 68.6875px 9.5px;
            width: 137.375px;
          "
        />

        <label
          for="filter-price-to-Price-5"
          style="
            block-size: 1px;
            inset: 67px 152px 44px 189px;
            clip: rect(0px, 0px, 0px, 0px);
            display: block;
            font-size: 13.2px;
            height: 1px;
            inline-size: 1px;
            inset-block: 67px 44px;
            inset-inline: 189px 152px;
            margin-block: -1px;
            margin: -1px;
            margin-inline: -1px;
            overflow-block: hidden;
            overflow-inline: hidden;
            overflow: hidden;
            perspective-origin: 0.5px 0.5px;
            position: absolute;
            transform-origin: 0.5px 0.5px;
            width: 1px;
          "
          >To</label
        >
      </div>
    </div>
  </div>
</div>
<style>
  [data-id="0"]::before {
    background-color: rgb(0, 0, 0);
    block-size: 1px;
    bottom: 4px;
    content: "";
    display: block;
    font-size: 0px;
    height: 1px;
    inline-size: 6px;
    inset-block-end: 4px;
    inset-block-start: 5px;
    inset-inline-end: 7px;
    inset-inline-start: 10px;
    left: 10px;
    margin-inline-start: -3px;
    margin-left: -3px;
    perspective-origin: 3px 0.5px;
    position: absolute;
    right: 7px;
    text-align: center;
    top: 5px;
    transform-origin: 3px 0.5px;
    width: 6px;
    --padding-bottom: 0px;
    --padding: calc(20px * 2);
    --swatch-size: calc(1.5rem * 1);
    --padding-top: 0px;
    --full-screen: calc(369px - 94px);
    --COLUMNS-MOBILE: 2;
    --PT: 0px;
    --width: 380px;
    --PB: 0px;
    --duration: 0.6s;
    --COLUMNS-MEDIUM: 2;
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

export default SliderDraggingMovementsSuccess;
