import React from "react";
import EngineIssueFailure from "../../../layout/engineIssueFailure";

const ButtonDiscernibleFailure = () => {
  const ruleId = "button-discernible";
  const title = `Buttons should have a label`;
  const description = `Buttons that do not contain visible text should be assigned labels that informs screen reader users of their purpose.`;
  const helpText = `Add an aria-label or aria-labelledby attribute to the button.`;
  const fixSteps = [
  "Review the HTML structure",
  "Apply proper accessibility attributes",
  "Test with screen readers"
  ];
  const htmlExamples = [
  { filename: "button aria hidden child with text", content: `<button>
  <span aria-hidden="true">Clickable Download Link</span>
</button>` },
  { filename: "button display none child with text", content: `<button>
    <span style="display: none;">Clickable Download Link</span>
</button>` },
  { filename: "button no text", content: `<button></button>` },
  { filename: "button non interactable child", content: `<button>
    <noscript>Clickable Download Link</noscript>
</button>` },
  { filename: "button svg icon", content: `<button id="test-subject">
  <svg style="width:100px;height:100px;" >
    <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />
  </svg>
</button>` },
  { filename: "button with non discernible image", content: `<button><img /></button>` },
  { filename: "cart button without aria label", content: `<div
  id="cart"
  data-cy="openCartButton"
  role="button"
  aria-pressed="false"
  class="NavigationButton__Container-sc-8dp1rn-0 hzcrcD navigation-button navigation-button__container"
  data-acsb-navigable="true"
  tabindex="0"
  data-acsb-now-navigable="true"
  data-acsb-inner-focus="true"
  style="
    align-items: center;
    animation-duration: 0.001s;
    background-color: rgb(18, 137, 73);
    block-size: 42px;
    border-block: 1px solid rgba(0, 0, 0, 0);
    border-color: rgba(0, 0, 0, 0);
    border-radius: 4px;
    border-style: solid;
    border-width: 1px;
    border-end-end-radius: 4px;
    border-end-start-radius: 4px;
    border-inline: 1px solid rgba(0, 0, 0, 0);
    border-start-end-radius: 4px;
    border-start-start-radius: 4px;
    inset: 0px;
    box-sizing: border-box;
    caret-color: rgb(255, 255, 255);
    color: rgb(255, 255, 255);
    column-rule-color: rgb(255, 255, 255);
    cursor: pointer;
    display: flex;
    font-weight: 700;
    height: 42px;
    inline-size: 61px;
    inset-block: 0px;
    inset-inline: 0px;
    justify-content: center;
    list-style-type: none;
    min-block-size: auto;
    min-height: auto;
    min-inline-size: auto;
    min-width: auto;
    outline-color: rgb(255, 255, 255);
    padding-block: 8px;
    padding: 8px;
    padding-inline: 8px;
    perspective-origin: 30.5px 21px;
    position: relative;
    text-align: left;
    text-decoration: none solid rgb(255, 255, 255);
    text-emphasis-color: rgb(255, 255, 255);
    transform-origin: 30.5px 21px;
    width: 61px;
    -webkit-box-align: center;
    -webkit-box-pack: center;
    -webkit-text-fill-color: rgb(255, 255, 255);
    -webkit-text-stroke-color: rgb(255, 255, 255);
  "
>
  <div
    class="CartButton__Container-sc-1ozjklz-0 ldZhdv cart-btn cart-btn__container"
    style="
      align-items: center;
      animation-duration: 0.001s;
      block-size: 24px;
      border-block-color: rgb(255, 255, 255);
      border-color: rgb(255, 255, 255);
      border-inline-color: rgb(255, 255, 255);
      caret-color: rgb(255, 255, 255);
      color: rgb(255, 255, 255);
      column-gap: 0px;
      column-rule-color: rgb(255, 255, 255);
      cursor: pointer;
      display: flex;
      font-weight: 700;
      height: 24px;
      inline-size: 43px;
      justify-content: center;
      list-style-type: none;
      min-block-size: auto;
      min-height: auto;
      min-inline-size: auto;
      min-width: auto;
      outline-color: rgb(255, 255, 255);
      perspective-origin: 21.5px 12px;
      text-align: left;
      text-decoration: none solid rgb(255, 255, 255);
      text-emphasis-color: rgb(255, 255, 255);
      transform-origin: 21.5px 12px;
      width: 43px;
      -webkit-box-align: center;
      -webkit-box-pack: center;
      -webkit-text-fill-color: rgb(255, 255, 255);
      -webkit-text-stroke-color: rgb(255, 255, 255);
    "
  >
    <svg
      viewBox="0 0 24 24"
      height="24px"
      width="24px"
      aria-hidden="true"
      focusable="false"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      color="#ffffff"
      data-keep-cart="true"
      class="StyledIconBase-sc-ea9ulj-0 ebjPRL Icons__CartIcon-sc-5zp2uz-3 dRaUQh"
      data-acsb-hidden="true"
      style="
        animation-duration: 0.001s;
        block-size: 24px;
        border-block-color: rgb(255, 255, 255);
        border-color: rgb(255, 255, 255);
        border-inline-color: rgb(255, 255, 255);
        caret-color: rgb(255, 255, 255);
        color: rgb(255, 255, 255);
        column-rule-color: rgb(255, 255, 255);
        cursor: pointer;
        display: block;
        fill: rgb(255, 255, 255);
        font-weight: 700;
        height: 24px;
        inline-size: 24px;
        list-style-type: none;
        min-block-size: 24px;
        min-height: 24px;
        min-inline-size: 24px;
        min-width: 24px;
        outline-color: rgb(255, 255, 255);
        overflow-block: hidden;
        overflow-clip-margin: content-box;
        overflow-inline: hidden;
        overflow: hidden;
        perspective-origin: 12px 12px;
        pointer-events: none;
        text-align: left;
        text-decoration: none solid rgb(255, 255, 255);
        text-emphasis-color: rgb(255, 255, 255);
        transform-origin: 12px 12px;
        vertical-align: middle;
        width: 24px;
        -webkit-text-fill-color: rgb(255, 255, 255);
        -webkit-text-stroke-color: rgb(255, 255, 255);
      "
    >
      <g data-name="Layer 2">
        <g data-name="shopping-cart">
          <path d="M21.08 7a2 2 0 0 0-1.7-1H6.58L6 3.74A1 1 0 0 0 5 3H3a1 1 0 0 0 0 2h1.24L7 15.26A1 1 0 0 0 8 16h9a1 1 0 0 0 .89-.55l3.28-6.56A2 2 0 0 0 21.08 7zm-4.7 7H8.76L7.13 8h12.25z"></path>
          <circle cx="7.5" cy="19.5" r="1.5"></circle>
          <circle cx="17.5" cy="19.5" r="1.5"></circle>
        </g>
      </g>
    </svg>
    <div
      class="CartButton__NumberOfItemsBadge-sc-1ozjklz-2 dkWmut cart-btn cart-btn__items-number"
      style="
        align-items: center;
        animation-duration: 0.001s;
        block-size: 17.5px;
        border-block-color: rgb(255, 255, 255);
        border-color: rgb(255, 255, 255);
        border-radius: 50%;
        border-end-end-radius: 50%;
        border-end-start-radius: 50%;
        border-inline-color: rgb(255, 255, 255);
        border-start-end-radius: 50%;
        border-start-start-radius: 50%;
        inset: 0px;
        caret-color: rgb(255, 255, 255);
        color: rgb(255, 255, 255);
        column-rule-color: rgb(255, 255, 255);
        cursor: pointer;
        display: flex;
        height: 17.5px;
        inline-size: 15px;
        inset-block: 0px;
        inset-inline: 0px;
        justify-content: center;
        list-style-type: none;
        min-block-size: 15px;
        min-height: 15px;
        min-inline-size: 15px;
        min-width: 15px;
        outline-color: rgb(255, 255, 255);
        padding-block: 2px;
        padding: 2px;
        padding-inline: 2px;
        perspective-origin: 9.5px 10.75px;
        position: relative;
        text-align: left;
        text-decoration: none solid rgb(255, 255, 255);
        text-emphasis-color: rgb(255, 255, 255);
        transform-origin: 9.5px 10.75px;
        width: 15px;
        -webkit-box-align: center;
        -webkit-box-pack: center;
        -webkit-text-fill-color: rgb(255, 255, 255);
        -webkit-text-stroke-color: rgb(255, 255, 255);
      "
    ></div>
  </div>
</div>
<style></style>` },
  { filename: "plus minus buttons without aria labels", content: `<div
  class="QuantityPickerWithPrice__QuantityPickerWithPriceContainer-sc-15hi4lh-1 KMxXY"
  style="
    align-items: center;
    animation-duration: 0.001s;
    block-size: 80px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    height: 80px;
    inline-size: 30px;
    justify-content: space-between;
    min-block-size: 80px;
    min-height: 80px;
    min-inline-size: auto;
    min-width: auto;
    perspective-origin: 15px 40px;
    transform-origin: 15px 40px;
    user-select: none;
    width: 30px;
    -webkit-box-align: center;
    -webkit-box-pack: justify;
  "
>
  <div
    id="increase"
    class="commonComponents__Controller-sc-15umw33-1 dpJwCt"
    data-acsb-clickable="true"
    data-acsb-navigable="true"
    tabindex="0"
    data-acsb-now-navigable="true"
    data-acsb-textual-ops="plus"
    role="button"
    style="
      align-items: center;
      animation-duration: 0.001s;
      background-color: rgb(238, 238, 238);
      block-size: 28px;
      border-block-end: 1px solid rgb(255, 255, 255);
      border-bottom: 1px solid rgb(255, 255, 255);
      cursor: pointer;
      display: flex;
      height: 28px;
      inline-size: 28px;
      justify-content: center;
      min-block-size: 30%;
      min-height: 30%;
      min-inline-size: 30%;
      min-width: 30%;
      perspective-origin: 14px 14.5px;
      text-align: center;
      transform-origin: 14px 14.5px;
      user-select: none;
      width: 28px;
      -webkit-box-align: center;
      -webkit-box-pack: center;
    "
  >
    <svg
      viewBox="0 0 24 24"
      height="24px"
      width="24px"
      aria-hidden="true"
      focusable="false"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      data-keep-cart="true"
      class="StyledIconBase-sc-ea9ulj-0 ebjPRL Icons__PlusIcon-sc-5zp2uz-1 klkJJV"
      data-acsb-hidden="true"
      style="
        animation-duration: 0.001s;
        block-size: 24px;
        border-block-color: rgb(158, 158, 158);
        border-color: rgb(158, 158, 158);
        border-inline-color: rgb(158, 158, 158);
        caret-color: rgb(158, 158, 158);
        color: rgb(158, 158, 158);
        column-rule-color: rgb(158, 158, 158);
        cursor: pointer;
        display: block;
        fill: rgb(158, 158, 158);
        height: 24px;
        inline-size: 24px;
        min-block-size: 24px;
        min-height: 24px;
        min-inline-size: 24px;
        min-width: 24px;
        outline-color: rgb(158, 158, 158);
        overflow-block: hidden;
        overflow-clip-margin: content-box;
        overflow-inline: hidden;
        overflow: hidden;
        perspective-origin: 12px 12px;
        text-align: center;
        text-decoration: none solid rgb(158, 158, 158);
        text-emphasis-color: rgb(158, 158, 158);
        transform-origin: 12px 12px;
        user-select: none;
        vertical-align: middle;
        width: 24px;
        -webkit-text-fill-color: rgb(158, 158, 158);
        -webkit-text-stroke-color: rgb(158, 158, 158);
      "
    >
      <path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"></path>
    </svg>
  </div>
  <label style="animation-duration: 0.001s; block-size: 21.5px; display: block; height: 21.5px; inline-size: 30px; min-block-size: auto; min-height: auto; min-inline-size: auto; min-width: auto; perspective-origin: 15px 10.75px; transform-origin: 15px 10.75px; user-select: none; width: 30px"
    ><input
      type="number"
      value="1"
      data-acsb-navigable="true"
      data-acsb-now-navigable="true"
      data-acsb-hidden="false"
      data-acsb-validation-uuid="aoh0thx6r5ij"
      data-acsb-field-visible="true"
      aria-label="\$45Add to cartPrice per unit"
      placeholder="\$45Add to cartPrice per unit"
      data-acsb-tooltip="\$45Add to cartPrice per unit"
      style="
        animation-duration: 0.001s;
        block-size: 21.5px;
        border-block: 0px none rgb(0, 0, 0);
        border-color: rgb(0, 0, 0);
        border-style: none;
        border-width: 0px;
        border-inline: 0px none rgb(0, 0, 0);
        box-sizing: border-box;
        font-size: 17px;
        font-weight: 500;
        height: 21.5px;
        inline-size: 30px;
        perspective-origin: 15px 10.75px;
        text-align: center;
        transform-origin: 15px 10.75px;
        user-select: none;
        width: 30px;
      "
  /></label>
  <div
    id="decrease"
    class="commonComponents__Controller-sc-15umw33-1 dpJwCt"
    data-acsb-clickable="true"
    data-acsb-navigable="true"
    tabindex="0"
    data-acsb-now-navigable="true"
    data-acsb-textual-ops="minus"
    role="button"
    style="
      align-items: center;
      animation-duration: 0.001s;
      background-color: rgb(238, 238, 238);
      block-size: 28px;
      border-block-start: 1px solid rgb(255, 255, 255);
      border-top: 1px solid rgb(255, 255, 255);
      cursor: pointer;
      display: flex;
      height: 28px;
      inline-size: 28px;
      justify-content: center;
      min-block-size: 30%;
      min-height: 30%;
      min-inline-size: 30%;
      min-width: 30%;
      perspective-origin: 14px 14.5px;
      text-align: center;
      transform-origin: 14px 14.5px;
      user-select: none;
      width: 28px;
      -webkit-box-align: center;
      -webkit-box-pack: center;
    "
  >
    <svg
      viewBox="0 0 24 24"
      height="24px"
      width="24px"
      aria-hidden="true"
      focusable="false"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      data-keep-cart="true"
      class="StyledIconBase-sc-ea9ulj-0 ebjPRL Icons__MinusIcon-sc-5zp2uz-2 fNayBs"
      data-acsb-hidden="true"
      style="
        animation-duration: 0.001s;
        block-size: 24px;
        border-block-color: rgb(158, 158, 158);
        border-color: rgb(158, 158, 158);
        border-inline-color: rgb(158, 158, 158);
        caret-color: rgb(158, 158, 158);
        color: rgb(158, 158, 158);
        column-rule-color: rgb(158, 158, 158);
        cursor: pointer;
        display: block;
        fill: rgb(158, 158, 158);
        height: 24px;
        inline-size: 24px;
        min-block-size: 24px;
        min-height: 24px;
        min-inline-size: 24px;
        min-width: 24px;
        outline-color: rgb(158, 158, 158);
        overflow-block: hidden;
        overflow-clip-margin: content-box;
        overflow-inline: hidden;
        overflow: hidden;
        perspective-origin: 12px 12px;
        text-align: center;
        text-decoration: none solid rgb(158, 158, 158);
        text-emphasis-color: rgb(158, 158, 158);
        transform-origin: 12px 12px;
        user-select: none;
        vertical-align: middle;
        width: 24px;
        -webkit-text-fill-color: rgb(158, 158, 158);
        -webkit-text-stroke-color: rgb(158, 158, 158);
      "
    >
      <path d="M5 11h14v2H5z"></path>
    </svg>
  </div>
</div>
<style></style>` },
  { filename: "role button with hidden text", content: `<div role="button">
    <span aria-hidden="true">Clickable Download Link</span>
</div>` }
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

export default ButtonDiscernibleFailure;
