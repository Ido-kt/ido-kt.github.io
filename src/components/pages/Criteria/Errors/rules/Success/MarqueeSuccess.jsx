import React from "react";
import IssueSuccess from "../../../../../layout/issueSuccess";

const itemDescription = "Errors: Marquee - Success";

export default () => (
  <IssueSuccess
    itemContent={
      <>
        <div className="list-item" id="marquee-success-1">
          <p>Static text content with no scrolling effect.</p>
        </div>
        <div className="list-item" id="marquee-success-2">
          <div style={{ overflow: "hidden", whiteSpace: "nowrap" }}>
            <p>Simulated scrolling using CSS transitions.</p>
          </div>
        </div>
        <div className="list-item" id="marquee-success-3">
          <p>Using semantic HTML elements for proper content structure.</p>
        </div>
        <div className="list-item" id="marquee-success-4">
          <section>
            <h2>Accessible announcements without animations</h2>
          </section>
        </div>
        <div className="list-item" id="marquee-success-5">
          <p>CSS animations combined with ARIA roles for enhanced experience.</p>
        </div>
        <div className="list-item" id="marquee-success-6">
          <p>Interactive content avoids autoplaying or animated effects.</p>
        </div>
      </>
    }
    itemDescription={itemDescription}
  />
);