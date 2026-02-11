import React from "react";
import EngineIssueFailure from "../../../layout/engineIssueFailure";

const FigureDiscernibleFailure = () => {
  const ruleId = "figure-discernible";
  const title = `Figure elements should receive text description or lose figure role`;
  const description = `Figure elements are often incorrectly used to display images on the screen. Incorrectly using the figure tag, without providing a proper figcaption, adds unnecessary clutter to the screen reader user's experience.`;
  const helpText = `Standard images should be coded regularly without having a figure parent element. The figure tag should only be used for images you wish to provide additional visual descriptions for, like the date and time a photo was taken or other metadata. To make a figure tag non-cluttering for screen-readers, add the role=presentation attribute to replace it with another element like DIV. Alternatively, if you did intend to use the figure tag, make sure to add a figcaption tag with the additional metadata`;
  const fixSteps = [
  "Review the HTML structure",
  "Apply proper accessibility attributes",
  "Test with screen readers"
  ];
  const htmlExamples = [
  { filename: "figure with aria labelledby but no valid caption", content: `<html>
  <head> </head>
  <body>
    <figure aria-labelledby="caption1">
      <span id="caption1"> </span>
      <!-- Empty caption -->
    </figure>
  </body>
</html>` },
  { filename: "figure with empty alt and no figcaption", content: `<html>
  <head> </head>
  <body>
    <figure>
      <img src="diagram.jpg" alt="" />
      <!-- No figcaption provided -->
    </figure>
  </body>
</html>` },
  { filename: "figure without figcaption child and image alt", content: `<html>
  <head> </head>
  <body>
    <figure>
      <img src="event1.jpg" alt="" />
      <figcaption></figcaption>
    </figure>
  </body>
</html>` },
  { filename: "figure without image and empty aria labelledby", content: `<html>
  <head> </head>
  <body>
    <figure aria-labelledby="caption1">
      <span id="caption1"></span>
    </figure>
  </body>
</html>` },
  { filename: "figure without image and no figcaption", content: `<html>
  <head> </head>
  <body>
    <figure>
      <!-- No image and no caption -->
    </figure>
  </body>
</html>` },
  { filename: "figure witht empty figcaption child", content: `<html>
  <head> </head>
  <body>
    <figure>
      <img />
      <figcaption></figcaption>
    </figure>
  </body>
</html>` },
  { filename: "role figure with no alt and no aria labelledby", content: `<html>
  <head> </head>
  <body>
    <div role="figure">
      <img src="image.jpg" alt="" />
      <!-- No caption or aria-labelledby -->
    </div>
  </body>
</html>` },
  { filename: "role figure without aria labelledby and image alt", content: `<html>
  <head> </head>
  <body>
    <div role="figure">
      <img src="image.jpg" alt="" />
    </div>
  </body>
</html>` }
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

export default FigureDiscernibleFailure;
