import React from "react";
import IssueFailure from "../../../../../layout/issueFailure";

const itemDescription = "Graphics: Alt Text - Failure";

const helpText = "Alternative text (alt text) provides a textual description of images for users who cannot see them, including screen reader users and users with images disabled. Missing, empty, or inadequate alt text creates barriers to accessibility.";

const fixSteps = [
  "Add meaningful alt text that describes the content and function of the image",
  "Use alt=\"\" (empty alt attribute) only for decorative images that add no informational value",
  "Avoid redundant phrases like 'image of' or 'picture of' in alt text",
  "For complex images like charts or graphs, provide detailed descriptions in surrounding text or via longdesc",
  "Test with screen readers to ensure alt text provides equivalent information"
];

export default () => (
  <IssueFailure
    itemContent={
      <>
        <div className="list-item" id="altText-failure-1">
          <img src="https://via.placeholder.com/150" alt="" />
          <p><strong>Issue:</strong> Empty alt attribute on informational image</p>
        </div>
        <div className="list-item" id="altText-failure-2">
          <img src="https://via.placeholder.com/200" alt="image1234" />
          <p><strong>Issue:</strong> Non-descriptive alt text (filename-like)</p>
        </div>
        <div className="list-item" id="altText-failure-3">
          <img src="https://via.placeholder.com/250" />
          <p><strong>Issue:</strong> Missing alt attribute entirely</p>
        </div>
        <div className="list-item" id="altText-failure-4">
          <img src="https://via.placeholder.com/300" alt=" " />
          <p><strong>Issue:</strong> Alt text contains only whitespace</p>
        </div>
        <div className="list-item" id="altText-failure-5">
          <img src="https://via.placeholder.com/350" alt="file_upload" />
          <p><strong>Issue:</strong> Technical filename used as alt text</p>
        </div>
        <div className="list-item" id="altText-failure-6">
          <img src="https://via.placeholder.com/400" />
          <p><strong>Issue:</strong> No alt attribute for functional image</p>
        </div>
      </>
    }
    itemDescription={itemDescription}
    helpText={helpText}
    fixSteps={fixSteps}
  />
);