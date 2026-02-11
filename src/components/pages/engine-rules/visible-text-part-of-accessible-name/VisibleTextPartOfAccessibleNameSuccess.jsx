import React from "react";
import EngineIssueSuccess from "../../../layout/engineIssueSuccess";

const VisibleTextPartOfAccessibleNameSuccess = () => {
  const ruleId = "visible-text-part-of-accessible-name";
  const title = `Aria labels should not override or replace visible text`;
  const description = `Aria labels should describe elements that don't have proper text, like icons and field labels. It should not be used to override element texts. Screen reader users need to receive the exact text as visually on the screen, with more context if it is ambiguous. An exception applies to landmarks such as nav or other landmarks: here, ARIA labels can provide additional context or clarification.`;
  const helpText = `Remove the aria-label. If you need to add context for screen reader users only because of the ambiguity of the text, use the screen-reader-only technique.`;
  const bestPractices = [
  "Follow proper HTML semantics",
  "Ensure screen reader compatibility",
  "Test with assistive technologies"
  ];
  const htmlExamples = [
  { filename: "anchor aria describedby incl text", content: `<!-- NOTE: according to ACT, aria-describedby attribute is not applicable and should pass https://www.w3.org/WAI/standards-guidelines/act/rules/2ee8b8/proposed/#applicability -->
<p id="description">this is a test, and some description</p>
<a href="#" aria-describedby="description">this is a test</a>` },
  { filename: "anchor aria label incl text", content: `<a href="#" aria-label="this is a test, and some clarification">this is a test</a>` },
  { filename: "anchor aria labelledby incl text", content: `<label id="l1">this is a test, and some clarification</label>
<a href="#" aria-labelledby="l1">this is a test</a>` },
  { filename: "anchor multi aria labelledby incl text", content: `<label id="l1">this is a test, and some clarification</label>
<label id="l2">this is a tire, and some cash</label>
<a href="#" aria-labelledby="l1 l2">this is a test</a>` },
  { filename: "anchor nested aria", content: `<!--this example is from https://k9ballistics.com/-->
<a href="/collections/chew-proof-armored-dog-beds/products/chew-proof-armored-rip-stop-elevated-dog-bed" style="cursor: pointer; list-style-type: none; text-align: left">
  <div
    class="grid-product__meta"
    style="
      block-size: 157.375px;
      inset: 0px;
      cursor: pointer;
      height: 157.375px;
      inline-size: 197.75px;
      inset-block: 0px;
      inset-inline: 0px;
      line-height: 21px;
      list-style-type: none;
      padding-block: 10px 6px;
      padding-bottom: 6px;
      padding-top: 10px;
      perspective-origin: 98.875px 78.6875px;
      position: relative;
      text-align: left;
      transform-origin: 98.875px 78.6875px;
      width: 197.75px;
    "
  >
    <div class="grid-product__title" style="block-size: 70.5625px; cursor: pointer; font-size: 16.52px; height: 70.5625px; inline-size: 197.75px; line-height: 24.78px; list-style-type: none; perspective-origin: 98.875px 35.2812px; text-align: left; transform-origin: 98.875px 35.2812px; width: 197.75px">
      <span style="block-size: 21px; cursor: pointer; display: block; height: 21px; inline-size: 197.75px; line-height: 21px; list-style-type: none; perspective-origin: 98.875px 10.5px; text-align: left; transform-origin: 98.875px 10.5px; width: 197.75px">Chew Proof Armored™</span>
      Ripstop Elevated Dog Bed
    </div>

    <div data-oke-star-rating="" data-oke-reviews-product-id="shopify-1815758143559" data-oke-rendered="" style="block-size: 45.9297px; cursor: pointer; height: 45.9297px; inline-size: 197.75px; line-height: 21px; list-style-type: none; perspective-origin: 98.875px 22.9609px; text-align: left; transform-origin: 98.875px 22.9648px; width: 197.75px">
      <div data-oke-reviews-version="0.71.19" data-oke-container="" class="okeReviews oke-sr" style="block-size: 45.9297px; cursor: pointer; display: inline-block; height: 45.9297px; inline-size: 197.75px; list-style-type: none; perspective-origin: 98.875px 22.9609px; text-align: left; transform-origin: 98.875px 22.9648px; width: 197.75px">
        <div class="" style="block-size: 45.9297px; cursor: pointer; height: 45.9297px; inline-size: 197.75px; list-style-type: none; perspective-origin: 98.875px 22.9609px; text-align: left; transform-origin: 98.875px 22.9648px; width: 197.75px">
          <div class="oke-sr-rating" style="block-size: auto; cursor: pointer; display: none; height: auto; inline-size: auto; list-style-type: none; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; vertical-align: middle; width: auto">4.8</div>
          <div
            class="oke-sr-stars"
            style="block-size: 20px; cursor: pointer; display: inline-block; height: 20px; inline-size: 101.852px; line-height: 14px; list-style-type: none; margin-inline-end: 8px; margin-right: 8px; perspective-origin: 50.9219px 10px; text-align: left; transform-origin: 50.9258px 10px; vertical-align: middle; width: 101.852px"
          >
            <div
              class="oke-stars"
              style="block-size: 18px; inset: 0px; cursor: pointer; display: inline-block; height: 18px; inline-size: 101.852px; inset-block: 0px; inset-inline: 0px; line-height: 14px; list-style-type: none; perspective-origin: 50.9219px 9px; position: relative; text-align: left; transform-origin: 50.9258px 9px; width: 101.852px"
            >
              <!---->
              <div class="oke-stars-background" style="block-size: 18px; cursor: pointer; height: 18px; inline-size: 101.852px; line-height: 14px; list-style-type: none; perspective-origin: 50.9219px 9px; text-align: left; transform-origin: 50.9258px 9px; width: 101.852px">
                <svg
                  height="18"
                  viewBox="0 0 79.22222222222221 14"
                  aria-hidden="true"
                  role="none"
                  style="block-size: 18px; cursor: pointer; height: 18px; inline-size: 101.852px; line-height: 14px; list-style-type: none; overflow-clip-margin: content-box; overflow: visible; perspective-origin: 50.9219px 9px; text-align: left; transform-origin: 50.9258px 9px; width: 101.852px"
                >
                  <use x="0" href="#oke-star-empty"></use>
                  <use x="16.155555555555555" href="#oke-star-empty"></use>
                  <use x="32.31111111111111" href="#oke-star-empty"></use>
                  <use x="48.46666666666667" href="#oke-star-empty"></use>
                  <use x="64.62222222222222" href="#oke-star-empty"></use>
                </svg>
              </div>
              <div
                class="oke-stars-foreground"
                style="
                  block-size: 18px;
                  inset: 0px 3.75781px 0px 0px;
                  cursor: pointer;
                  height: 18px;
                  inline-size: 98.0938px;
                  inset-block: 0px;
                  inset-inline: 0px 3.75781px;
                  line-height: 14px;
                  list-style-type: none;
                  overflow: hidden;
                  perspective-origin: 49.0469px 9px;
                  position: absolute;
                  text-align: left;
                  transform-origin: 49.0469px 9px;
                  width: 98.0938px;
                "
              >
                <svg
                  height="18"
                  viewBox="0 0 79.22222222222221 14"
                  aria-hidden="true"
                  role="none"
                  style="block-size: 18px; cursor: pointer; height: 18px; inline-size: 101.852px; line-height: 14px; list-style-type: none; overflow-clip-margin: content-box; perspective-origin: 50.9219px 9px; text-align: left; transform-origin: 50.9258px 9px; width: 101.852px"
                >
                  <use x="0" href="#oke-star-filled"></use>
                  <use x="16.155555555555555" href="#oke-star-filled"></use>
                  <use x="32.31111111111111" href="#oke-star-filled"></use>
                  <use x="48.46666666666667" href="#oke-star-filled"></use>
                  <use x="64.62222222222222" href="#oke-star-filled"></use>
                </svg>
              </div>
              <span
                class="oke-a11yText"
                style="
                  block-size: 1px;
                  border-block-color: rgb(0, 0, 0);
                  border-block-style: none;
                  border-color: rgb(0, 0, 0);
                  border-style: none;
                  border-inline-color: rgb(0, 0, 0);
                  border-inline-style: none;
                  inset: 18px 102.852px 1px 0px;
                  clip: rect(0px, 0px, 0px, 0px);
                  cursor: pointer;
                  display: block;
                  height: 1px;
                  inline-size: 1px;
                  inset-block: 18px 1px;
                  inset-inline: 0px 102.852px;
                  line-height: 14px;
                  list-style-type: none;
                  margin-block: -1px;
                  margin: -1px;
                  margin-inline: -1px;
                  overflow: hidden;
                  perspective-origin: 0.5px 0.5px;
                  position: absolute;
                  text-align: left;
                  transform-origin: 0.5px 0.5px;
                  width: 1px;
                "
                >Rated 4.8 out of 5 stars</span
              >
            </div>
          </div>
          <div class="oke-sr-count" style="block-size: 22.3984px; cursor: pointer; display: inline-block; height: 22.3984px; inline-size: 96.3672px; list-style-type: none; perspective-origin: 48.1797px 11.1953px; text-align: left; transform-origin: 48.1836px 11.1992px; vertical-align: middle; width: 96.3672px">
            <span class="oke-sr-count-number" style="cursor: pointer; list-style-type: none; text-align: left">2,637</span><span class="oke-sr-label-text" style="cursor: pointer; list-style-type: none; text-align: left"> Reviews</span
            ><!---->
          </div>
          <!---->
        </div>
        <script type="application/json" data-oke-metafield-data="" style="cursor: pointer; list-style-type: none; text-align: left">
          { "averageRating": "4.8", "reviewCount": 2637 }
        </script>
      </div>
    </div>

    <div
      class="grid-product__price"
      style="
        align-items: center;
        block-size: 18.8906px;
        gap: 6px;
        cursor: pointer;
        display: flex;
        font-size: 12.6px;
        height: 18.8906px;
        inline-size: 197.75px;
        line-height: 18.9px;
        list-style-type: none;
        margin-block-start: 6px;
        margin-top: 6px;
        perspective-origin: 98.875px 9.44531px;
        text-align: left;
        transform-origin: 98.875px 9.44531px;
        width: 197.75px;
      "
    >
      <span
        style="
          block-size: 18.8984px;
          cursor: pointer;
          display: block;
          font-size: 12.6px;
          height: 18.8984px;
          inline-size: 78.4453px;
          line-height: 18.9px;
          list-style-type: none;
          min-block-size: auto;
          min-height: auto;
          min-inline-size: auto;
          min-width: auto;
          perspective-origin: 39.2188px 9.44531px;
          text-align: left;
          transform-origin: 39.2227px 9.44922px;
          width: 78.4453px;
        "
      >
        from \$129.00
      </span>
    </div>
  </div>
</a>` },
  { filename: "anchor title", content: `<!-- NOTE: according to ACT, title attribute is not applicable and should pass https://www.w3.org/WAI/standards-guidelines/act/rules/2ee8b8/proposed/#applicability -->
<a href="#" title="foo">foo bar</a>` },
  { filename: "button aria describedby incl text", content: `<!-- NOTE: according to ACT, aria-describedby attribute is not applicable and should pass https://www.w3.org/WAI/standards-guidelines/act/rules/2ee8b8/proposed/#applicability -->
<p id="description">this is a test, and some description</p>
" <button aria-describedby="description">this is a test</button>` },
  { filename: "button aria label incl text", content: `<button aria-label="this is a test, and some clarification">this is a test</button>` },
  { filename: "button aria labelledby incl text", content: `<label id="l1">this is a test, and some clarification</label>
<button aria-labelledby="l1">this is a test</button>` },
  { filename: "button multi aria labelledby incl text", content: `<label id="l1">nothing similar</label>
<label id="l2">this is a test</label>
<button aria-labelledby="l1 l2">this is a test</button>` },
  { filename: "button visible text contained within aria label", content: `<button aria-label="Next Page in the list">Next Page</button>` },
  { filename: "button visible text is non text content", content: `<!-- TODO: currently skipped because we don't have ability to detect non-text content (only if text is ambigous which is not suitable here) -->
<!-- This button has visible text that does not need to be contained within the accessible name, because the “x” text node is non-text content. Note: this would need to meet SC 1.1.1 Non text content. -->
<button aria-label="anything">X</button>` },
  { filename: "button visible text is rendered as icon", content: `<!-- This button element has the text “search” rendered as an magnifying glass icon by the font. Because the text is rendered as non-text content, the text does not need to be contained within the accessible name. -->
<link href="../assets/material-icons/icon.css" rel="stylesheet" />
<style>
  button {
    font-family: "Material Icons";
  }
</style>
<button aria-label="Find">search</button>` },
  { filename: "button with supplement aria label", content: `<div
  class="oke-showMore"
  style="
    block-size: 40px;
    caret-color: rgb(65, 67, 66);
    color: rgb(65, 67, 66);
    column-rule-color: rgb(65, 67, 66);
    height: 40px;
    inline-size: 1320px;
    outline-color: rgb(65, 67, 66);
    perspective-origin: 660px 20px;
    text-align: center;
    text-decoration: none solid rgb(65, 67, 66);
    text-emphasis-color: rgb(65, 67, 66);
    transform-origin: 660px 20px;
    width: 1320px;
    -webkit-text-fill-color: rgb(65, 67, 66);
    -webkit-text-stroke-color: rgb(65, 67, 66);
  "
>
  <button
    type="button"
    aria-label="Show more reviews"
    tabindex="0"
    class="oke-showMore-button oke-button"
    style="
      background-color: rgb(244, 220, 66);
      block-size: 40px;
      border-block: 1px solid rgb(244, 220, 66);
      border-color: rgb(244, 220, 66);
      border-radius: 4px;
      border-style: solid;
      border-width: 1px;
      border-end-end-radius: 4px;
      border-end-start-radius: 4px;
      border-inline: 1px solid rgb(244, 220, 66);
      border-start-end-radius: 4px;
      border-start-start-radius: 4px;
      inset: 0px;
      caret-color: rgb(65, 67, 66);
      color: rgb(65, 67, 66);
      column-rule-color: rgb(65, 67, 66);
      font-weight: 700;
      height: 40px;
      inline-size: 123.953px;
      inset-block: 0px;
      inset-inline: 0px;
      line-height: 14px;
      outline-color: rgb(65, 67, 66);
      padding-block: 12px;
      padding: 12px 24px;
      padding-inline: 24px;
      perspective-origin: 61.9688px 20px;
      position: relative;
      text-decoration: none solid rgb(65, 67, 66);
      text-emphasis-color: rgb(65, 67, 66);
      transform-origin: 61.9766px 20px;
      width: 123.953px;
      -webkit-text-fill-color: rgb(65, 67, 66);
      -webkit-text-stroke-color: rgb(65, 67, 66);
    "
  >
    <span
      class="oke-showMore-button-text oke-button-text"
      style="
        caret-color: rgb(65, 67, 66);
        color: rgb(65, 67, 66);
        column-rule-color: rgb(65, 67, 66);
        cursor: pointer;
        font-weight: 700;
        line-height: 14px;
        outline-color: rgb(65, 67, 66);
        text-align: center;
        text-decoration: none solid rgb(65, 67, 66);
        text-emphasis-color: rgb(65, 67, 66);
        -webkit-text-fill-color: rgb(65, 67, 66);
        -webkit-text-stroke-color: rgb(65, 67, 66);
      "
    >
      Show More
    </span>
  </button>
</div>` },
  { filename: "div role tooltip", content: `<!-- This div element does not have a widget role, so the visible text does not need to match the accessible name. -->
<div role="tooltip" aria-label="OK">Next</div>` },
  { filename: "link visible text matches aria label  case ignored", content: `<a href="https://act-rules.github.io/" aria-label="act rules">ACT rules</a>` },
  { filename: "link visible text matches aria label  whitespace ignored", content: `<a href="https://act-rules.github.io/" aria-label="  ACT rules  ">ACT rules</a>` },
  { filename: "link visible text matches aria label", content: `<a href="https://act-rules.github.io/" aria-label="ACT rules">ACT rules</a>` },
  { filename: "link without visible text", content: `<a href="https://w3.org" aria-label="W3C homepage">
  <img src="/test-assets/shared/w3c-logo.png" alt="w3c logo" />
</a>` },
  { filename: "nav element", content: `<nav aria-label="main nav">W3C navigation</nav>` },
  { filename: "text field", content: `<!-- This email text field does not need to have its visible text match the accessible name. The content of a textfield shows its value instead of its label; it does not support name from content. The label is usually adjacent to the textfield instead. -->
<div>E-mail</div>
<input type="email" aria-label="E-mail" value="Contact" />` }
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

export default VisibleTextPartOfAccessibleNameSuccess;
