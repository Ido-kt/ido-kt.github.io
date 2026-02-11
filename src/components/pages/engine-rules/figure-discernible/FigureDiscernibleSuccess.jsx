import React from "react";
import EngineIssueSuccess from "../../../layout/engineIssueSuccess";

const FigureDiscernibleSuccess = () => {
  const ruleId = "figure-discernible";
  const title = `Figure elements should receive text description or lose figure role`;
  const description = `Figure elements are often incorrectly used to display images on the screen. Incorrectly using the figure tag, without providing a proper figcaption, adds unnecessary clutter to the screen reader user's experience.`;
  const helpText = `Standard images should be coded regularly without having a figure parent element. The figure tag should only be used for images you wish to provide additional visual descriptions for, like the date and time a photo was taken or other metadata. To make a figure tag non-cluttering for screen-readers, add the role=presentation attribute to replace it with another element like DIV. Alternatively, if you did intend to use the figure tag, make sure to add a figcaption tag with the additional metadata`;
  const bestPractices = [
  "Follow proper HTML semantics",
  "Ensure screen reader compatibility",
  "Test with assistive technologies"
  ];
  const htmlExamples = [
  { filename: "figure and image with alt", content: `<html>
  <head> </head>
  <body>
    <figure>
      <img
        src="diagram.png"
        alt="diagram showing the four layers of awesome and their relative priority order —
        music, cats, nature, and ice cream"
      />
      <figcaption>January 2020, 10 AM, Milano Italy.</figcaption>
    </figure>
  </body>
</html>` },
  { filename: "figure with aria labelledby", content: `<html>
  <head> </head>
  <body>
    <figure aria-labelledby="caption1">
      <img src="graph.jpg" alt="" />
      <span id="caption1">A bar graph showing sales trends in 2020.</span>
    </figure>
  </body>
</html>` },
  { filename: "figure with figcaption child", content: `<html>
  <head> </head>
  <body>
    <figure>
      <img />
      <figcaption>January 2020, 10 AM, Milano Italy.</figcaption>
    </figure>
  </body>
</html>` },
  { filename: "figure with multiple captions one valid", content: `<html>
  <head> </head>
  <body>
    <figure>
      <figcaption></figcaption>
      <figcaption>Europe's geopolitical boundaries in 1453.</figcaption>
    </figure>
  </body>
</html>` },
  { filename: "figure with multiple images and one alt", content: `<html>
  <head> </head>
  <body>
    <figure>
      <img src="event1.jpg" alt="The first event in the timeline." />
      <img src="event2.jpg" />
    </figure>
  </body>
</html>` },
  { filename: "figure with svg", content: `<html>
  <head> </head>
  <body>
    <figure>
      <svg role="img" aria-label="A diagram of a supply chain network."></svg>
    </figure>
  </body>
</html>` },
  { filename: "figure with text node", content: `<html>
  <head> </head>
  <body>
    <figure>text</figure>
  </body>
</html>` },
  { filename: "role figure and image with alt", content: `<html>
  <head> </head>
  <body>
    <div role="figure">
      <img
        src="diagram.png"
        alt="diagram showing the four layers of awesome and their relative priority order —
        music, cats, nature, and ice cream"
      />
    </div>
  </body>
</html>` },
  { filename: "role figure with alt image and figcaption", content: `<html>
  <head> </head>
  <body>
    <div role="figure">
      <img src="image.jpg" alt="A beautiful sunset over the ocean." />
      <figcaption>Photograph taken during the summer of 2023.</figcaption>
    </div>
  </body>
</html>` },
  { filename: "role figure with aria labelledby", content: `<html>
  <head> </head>
  <body>
    <div role="figure" aria-labelledby="figure-1">
      <img
        src="diagram.png"
      />
      <p id="figure-1">Figure 1: The four layers of awesome.</p>
    </div>
  </body>
</html>` }
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

export default FigureDiscernibleSuccess;
