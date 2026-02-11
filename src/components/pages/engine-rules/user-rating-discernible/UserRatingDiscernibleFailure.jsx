import React from "react";
import EngineIssueFailure from "../../../layout/engineIssueFailure";

const UserRatingDiscernibleFailure = () => {
  const ruleId = "user-rating-discernible";
  const title = `User ratings should be tagged and labeled for assistive technology`;
  const description = `When a static star rating is presented using unlabeled icons, screen readers cannot interpret the symbols as meaningful content. Assigning a role and text alternative ensures the rating value is conveyed clearly, allowing non-visual users to understand the information.`;
  const helpText = `Assign role="img" with an aria-label such as “4 out of 5 stars,” either directly on a single image or SVG, or on a container that holds the star elements.`;
  const fixSteps = [
  "Review the HTML structure",
  "Apply proper accessibility attributes",
  "Test with screen readers"
  ];
  const htmlExamples = [
  { filename: "theknot ratings number no explantory text", content: `<div id="test-subject" class="rating--b0ef1 primaryBold--1abd6 centerAligned--5225d"></div>` },
  { filename: "theknot ratings stars no discernible text", content: `<div id="test-subject" class="stars--fc5d5 centerAligned--5225d caption-lg--e66c1">
    <div class="container--eef31 star--ebf69">
        <div class="filledStarContainer--c22d2">
            <div class="cropContainer--d0023" style="width:100%"><svg class="icon--1935d icon-has-no-size--189a8  ">
                    <use xlink:href="#v2-icon-star_filled"></use>
                </svg></div>
        </div><svg class="icon--1935d icon-has-no-size--189a8  ">
            <use xlink:href="#v2-icon-star"></use>
        </svg>
    </div>
    <div class="container--eef31 star--ebf69">
        <div class="filledStarContainer--c22d2">
            <div class="cropContainer--d0023" style="width:100%"><svg class="icon--1935d icon-has-no-size--189a8  ">
                    <use xlink:href="#v2-icon-star_filled"></use>
                </svg></div>
        </div><svg class="icon--1935d icon-has-no-size--189a8  ">
            <use xlink:href="#v2-icon-star"></use>
        </svg>
    </div>
    <div class="container--eef31 star--ebf69">
        <div class="filledStarContainer--c22d2">
            <div class="cropContainer--d0023" style="width:100%"><svg class="icon--1935d icon-has-no-size--189a8  ">
                    <use xlink:href="#v2-icon-star_filled"></use>
                </svg></div>
        </div><svg class="icon--1935d icon-has-no-size--189a8  ">
            <use xlink:href="#v2-icon-star"></use>
        </svg>
    </div>
    <div class="container--eef31 star--ebf69">
        <div class="filledStarContainer--c22d2">
            <div class="cropContainer--d0023" style="width:100%"><svg class="icon--1935d icon-has-no-size--189a8  ">
                    <use xlink:href="#v2-icon-star_filled"></use>
                </svg></div>
        </div><svg class="icon--1935d icon-has-no-size--189a8  ">
            <use xlink:href="#v2-icon-star"></use>
        </svg>
    </div>
    <div class="container--eef31 star--ebf69">
        <div class="filledStarContainer--c22d2">
            <div class="cropContainer--d0023" style="width:64%"><svg class="icon--1935d icon-has-no-size--189a8  ">
                    <use xlink:href="#v2-icon-star_filled"></use>
                </svg></div>
        </div><svg class="icon--1935d icon-has-no-size--189a8  ">
            <use xlink:href="#v2-icon-star"></use>
        </svg>
    </div>
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

export default UserRatingDiscernibleFailure;
