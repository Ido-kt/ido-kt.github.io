import React from "react";
import EngineIssueSuccess from "../../../layout/engineIssueSuccess";

const SalePriceDiscernibleSuccess = () => {
  const ruleId = "sale-price-discernible";
  const title = `Original and discounted prices should be indicated to assistive technology`;
  const description = `Discounted prices often appear next to the original and distinguished with visual cues like strikethroughs or color changes. Both prices must also be conveyed by screen readers in a way that enables users to differentiate between the values, ensuring they can understand when a discount is applied.`;
  const helpText = `Add visually hidden text that explicitly identifies each value as the original price or the discounted price.`;
  const bestPractices = [
  "Follow proper HTML semantics",
  "Ensure screen reader compatibility",
  "Test with assistive technologies"
  ];
  const htmlExamples = [
  { filename: "del element with aria labelledby", content: `<style>
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }
</style>
<div>
  Price:
  <del aria-labelledby="old-price"
    >\$200
    <span id="old-price" class="sr-only">old price</span>
  </del>
  <span>\$100</span>
</div>` },
  { filename: "del element with sr only sibling", content: `<style>
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }
</style>
<div>
  Price:
  <span class="sr-only">old price</span>
  <del>\$200</del>
  <span>\$100</span>
</div>` },
  { filename: "line through and aria label", content: `<style>
  .product {
    display: flex;
    justify-content: space-between;
  }

  .price {
    display: flex;
    flex-direction: column;
  }

  .price-regular {
    text-decoration: line-through;
  }

  .price-sale {
    color: red;
  }

</style>

<div>
  <div class="product">
    <div class="price">
      <span class="price-regular" aria-label="was">\$100</span>
      <span class="price-sale">\$90</span>
    </div>
  </div>
</div>` },
  { filename: "line through with a nested sr text", content: `<style>
  .product {
    display: flex;
    justify-content: space-between;
  }

  .price {
    display: flex;
    flex-direction: column;
  }

  .price-regular {
    text-decoration: line-through;
  }

  .price-sale {
    color: red;
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }
</style>

<div>
  <div class="product">
    <div class="price">
      <span class="price-regular">
        <span class="sr-only">original price</span>
        \$100
      </span>
      <span class="price-sale">\$90</span>
    </div>
  </div>
</div>` },
  { filename: "no indication of old price", content: `<div>Price: <span class="red">\$200</span> <span>\$100</span></div>` },
  { filename: "s element with aria describedby", content: `<style>
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }
</style>
<div>Price:
    <s aria-describedby="original-price">\$200</s>
    <span id="original-price" class="sr-only">Original price</span>
    <span>\$100</span>
</div>` },
  { filename: "strike element with aria label", content: `<div>
  Price:
  <strike aria-label="was">\$200</strike>
  <span>\$100</span>
</div>` }
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

export default SalePriceDiscernibleSuccess;
