import React from "react";
import EngineIssueFailure from "../../../layout/engineIssueFailure";

const IconDiscernibleFailure = () => {
  const ruleId = "icon-discernible";
  const title = `Icons should be labeled or excluded from assistive technology`;
  const description = `Icons used as decorative or complementary elements, like icons or illustrations that do not provide additional information, will often add unnecessary clutter to a screen reader user's browsing experience.`;
  const helpText = `If the icon provides additional context or necessary information, provide an aria-label or a screen-reader-only text describing the functionality. If the element is used for decorative or complementary purposes, exclude it from assistive technology using role=presentation.`;
  const fixSteps = [
  "Review the HTML structure",
  "Apply proper accessibility attributes",
  "Test with screen readers"
  ];
  const htmlExamples = [
  { filename: "font awesome icon", content: `<!-- classifier returns "\\f005" as discernible text, which is partially corrent, because the screen reader attmpts to read it and shows "[?]" -->
<head>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
</head>
<i class="fa fa-star"></i>
<span class="fa fa-star"></span>
<div class="fa fa-star"></div>` },
  { filename: "img", content: `<style>
    img {
        width: calc(var(--base-size) * 1px);
        height: calc(var(--base-size) * 1px);
        display: block;
    }
</style>
<script>
    var dpr = window.devicePixelRatio || 1;
    document.documentElement.style.setProperty('--base-size', 48 * dpr);
</script>
<img src="https://banner2.cleanpng.com/20180411/oqq/kisspng-computer-icons-star-5-star-5acdd9ec67db40.8458493715234401084254.jpg" />` },
  { filename: "svg", content: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 100 100">
    <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />
</svg>` }
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

export default IconDiscernibleFailure;
