import React from "react";
import IssueSuccess from "../../../../../layout/issueSuccess";

const itemDescription = "Graphics: Alt Text - Success";

const helpText = "Proper alt text makes images accessible to screen reader users and provides meaningful descriptions when images fail to load. Good alt text is concise, descriptive, and conveys the essential information or function of the image.";

const bestPractices = [
  "Write alt text that describes the content and function of the image clearly and concisely",
  "Keep alt text under 125 characters when possible for optimal screen reader experience",
  "Use context to determine what information is essential to convey",
  "For decorative images that add no informational value, use empty alt=\"\" to hide from screen readers",
  "Avoid redundant phrases like 'image of' or 'picture of' since screen readers already announce it's an image",
  "For complex images like charts or infographics, provide additional detailed description in surrounding text"
];

export default () => (
  <IssueSuccess
    itemContent={
      <>
        <div className="list-item" id="altText-success-1">
          <img src="https://via.placeholder.com/150" alt="A fluffy orange cat sitting on a windowsill" />
          <p><strong>✅ Good:</strong> Descriptive and specific alt text that paints a clear picture</p>
        </div>
        <div className="list-item" id="altText-success-2">
          <img src="https://via.placeholder.com/200" alt="Bar chart showing 40% increase in sales over Q3" />
          <p><strong>✅ Good:</strong> Conveys the essential data and meaning of the chart</p>
        </div>
        <div className="list-item" id="altText-success-3">
          <img src="https://via.placeholder.com/250" alt="" role="presentation" />
          <p><strong>✅ Good:</strong> Decorative image properly hidden from screen readers</p>
        </div>
        <div className="list-item" id="altText-success-4">
          <img src="https://via.placeholder.com/300" alt="Download PDF report" />
          <p><strong>✅ Good:</strong> Describes the function/action rather than appearance</p>
        </div>
        <div className="list-item" id="altText-success-5">
          <img src="https://via.placeholder.com/350" alt="World map with pins marking our 12 office locations" />
          <p><strong>✅ Good:</strong> Provides context and specific information about the map</p>
        </div>
        <div className="list-item" id="altText-success-6">
          <img src="https://via.placeholder.com/400" alt="Sarah Johnson, CEO" />
          <p><strong>✅ Good:</strong> Identifies the person when identity is important to content</p>
        </div>
      </>
    }
    itemDescription={itemDescription}
    helpText={helpText}
    bestPractices={bestPractices}
  />
);