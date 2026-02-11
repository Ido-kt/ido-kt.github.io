import React from "react";
import EngineIssueFailure from "../../../layout/engineIssueFailure";

const SalePriceDiscernibleFailure = () => {
  const ruleId = "sale-price-discernible";
  const title = `Original and discounted prices should be indicated to assistive technology`;
  const description = `Discounted prices often appear next to the original and distinguished with visual cues like strikethroughs or color changes. Both prices must also be conveyed by screen readers in a way that enables users to differentiate between the values, ensuring they can understand when a discount is applied.`;
  const helpText = `Add visually hidden text that explicitly identifies each value as the original price or the discounted price.`;
  const fixSteps = [
  "Review the HTML structure",
  "Apply proper accessibility attributes",
  "Test with screen readers"
  ];
  const htmlExamples = [
  { filename: "del element only", content: `<div>Price: <del>\$200</del> <span>\$100</span></div>` },
  { filename: "line through without sr text", content: `<style>
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
      <span class="price-regular">\$100</span>
      <span class="price-sale">\$90</span>
    </div>
  </div>
</div>` },
  { filename: "s element only", content: `<div>Price: <s>\$200</s> <span>\$100</span></div>` },
  { filename: "sr only text not indicate old price", content: `<style>
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

  .line-through {
    text-decoration: line-through;
  }
</style>
<div id="price">
  Price: <span class="line-through"><span class="sr-only" aria-label="some label">tada</span>\$200</span> <span>\$100</span>
</div>` },
  { filename: "strike element only", content: `<div>Price: <strike>\$200</strike> <span>\$100</span></div>` }
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

export default SalePriceDiscernibleFailure;
