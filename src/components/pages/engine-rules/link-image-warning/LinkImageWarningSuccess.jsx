import React from "react";
import EngineIssueSuccess from "../../../layout/engineIssueSuccess";

const LinkImageWarningSuccess = () => {
  const ruleId = "link-image-warning";
  const title = `Links that open an image shouldn't do so without warning the user`;
  const description = `Standalone image links can unexpectedly shift the user's context by redirecting them to an image. They should therefore display a clear warning so that the user is informed before proceeding`;
  const helpText = `Include a clear warning that will be visible for screen-readers, indicating that clicking the link will open an image.`;
  const bestPractices = [
  "Follow proper HTML semantics",
  "Ensure screen reader compatibility",
  "Test with assistive technologies"
  ];
  const htmlExamples = [
  { filename: "link image acsb sr element", content: `<a href="https://example.com/image.png" id="image-link">
  Source Image
  <span data-acsb-sr-only="true" class="acsb-sr-only" style="position: absolute !important; width: 1px !important; height: 1px !important; padding: 0px !important; overflow: hidden !important; clip: rect(0px, 0px, 0px, 0px) !important; border: 0px !important"> | Opens an image</span>
</a>` },
  { filename: "link image sr element", content: `<style>
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
<p>
  <a href="https://example.com/image.png" id="image-link"
    >View Image
    <span id="image-desc" class="sr-only">Opens an image</span>
  </a>
</p>` },
  { filename: "link image with aria describedby", content: `<p>
  <a href="https://example.com/image.png" id="image-link" aria-describedby="image-desc">View Image</a>
</p>
<p id="image-desc">Opens an image</p>` },
  { filename: "link image with aria label", content: `<p>
  <a href="https://example.com/image.png" aria-label="View Image, opens an image">View Image</a>
</p>` },
  { filename: "link image with aria labelledby", content: `<style>
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
<p>
  <a href="https://example.com/image.png" id="image-link" aria-labelledby="image-desc">View Image</a>
  <span id="image-desc" class="sr-only">This link opens an image in a new page</span>
</p>` }
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

export default LinkImageWarningSuccess;
