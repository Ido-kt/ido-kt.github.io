import React from "react";
import EngineIssueSuccess from "../../../layout/engineIssueSuccess";

const IconDiscernibleSuccess = () => {
  const ruleId = "icon-discernible";
  const title = `Icons should be labeled or excluded from assistive technology`;
  const description = `Icons used as decorative or complementary elements, like icons or illustrations that do not provide additional information, will often add unnecessary clutter to a screen reader user's browsing experience.`;
  const helpText = `If the icon provides additional context or necessary information, provide an aria-label or a screen-reader-only text describing the functionality. If the element is used for decorative or complementary purposes, exclude it from assistive technology using role=presentation.`;
  const bestPractices = [
  "Follow proper HTML semantics",
  "Ensure screen reader compatibility",
  "Test with assistive technologies"
  ];
  const htmlExamples = [
  { filename: "font awesome icon aria label", content: `<head>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"> 
</head>
<i class="fa fa-star" aria-label="star"></i>
<span class="fa fa-star" aria-label="star"></span>
<div class="fa fa-star" aria-label="star"></div>` },
  { filename: "font awesome icon role presentation", content: `<head>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"> 
</head>
<i class="fa fa-star" role="presentation"></i>
<span class="fa fa-star" role="presentation"></span>
<div class="fa fa-star" role="presentation"></div>` },
  { filename: "img aria label", content: `<style>
    img {
        width: 40;
        height: 20;
        display: block;
    }
</style>
<img src="https://banner2.cleanpng.com/20180411/oqq/kisspng-computer-icons-star-5-star-5acdd9ec67db40.8458493715234401084254.jpg" alt="Example Image" aria-label="star" />` },
  { filename: "img role presentation", content: `<style>
    img {
        width: 40;
        height: 20;
        display: block;
    }
</style>
<img role="presentation" src="https://banner2.cleanpng.com/20180411/oqq/kisspng-computer-icons-star-5-star-5acdd9ec67db40.8458493715234401084254.jpg" alt="Example Image" />` },
  { filename: "svg aria label", content: `<svg aria-label="circle" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 100 100">
    <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />
</svg>` },
  { filename: "svg role presentation", content: `<svg role="presentation" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 100 100">
    <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />
</svg>` }
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

export default IconDiscernibleSuccess;
