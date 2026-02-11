import React from "react";
import EngineIssueSuccess from "../../../layout/engineIssueSuccess";

const PixelImageNotDiscernibleSuccess = () => {
  const ruleId = "pixel-image-not-discernible";
  const title = `Pixels should be hidden from assistive technology`;
  const description = `Visually hidden pixel images (often used for analytics or marketing purposes) should not be announced by screen readers.`;
  const helpText = `If the pixel image is an <img> element, assign an empty alt attribute. For other cases, add role="none" or role="presentation" to the pixel element.`;
  const bestPractices = [
  "Follow proper HTML semantics",
  "Ensure screen reader compatibility",
  "Test with assistive technologies"
  ];
  const htmlExamples = [
  { filename: "pixel image 1x1 no alt", content: `<!-- the image is not considered complaint image because there is no alt, so it will not be audited and will not show in any nodes array -->
<img src="http://127.0.0.1:9000/tracker.png" width="1" height="1" alt="" />` },
  { filename: "pixel image 2x2", content: `<img src="http://127.0.0.1:9000/tracker.png" width="2" height="2" alt="" />` },
  { filename: "pixel image aria hidden true", content: `<img src="http://127.0.0.1:9000/tracker.png" width="1" height="1" alt="" aria-hidden="true" />` },
  { filename: "pixel image hidden", content: `<img src="http://127.0.0.1:9000/tracker.png" width="1" height="1" alt="" hidden />` },
  { filename: "pixel image role none", content: `<img src="http://127.0.0.1:9000/tracker.png" width="1" height="1" alt="" role="none" />` },
  { filename: "pixel image role presentation", content: `<img src="http://127.0.0.1:9000/tracker.png" width="1" height="1" alt="" role="presentation" />` },
  { filename: "role image sr only element", content: `<span role="img" data-acsb-sr-only="true" class="acsb-sr-only" style="position: absolute !important; width: 1px !important; height: 1px !important; padding: 0px !important; overflow: hidden !important; clip: rect(0px, 0px, 0px, 0px) !important; border: 0px !important" data-acsb-hidden="false" data-acsb-force-visible="true"
>an aerial view of three surfers in the ocean</span
>` }
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

export default PixelImageNotDiscernibleSuccess;
