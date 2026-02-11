import React from "react";
import IssueSuccess from "../../../../../layout/issueSuccess";

const itemDescription = "Graphics: Figure Setup - Success";

export default () => (
  <IssueSuccess
    itemContent={
      <>
        <div className="list-item" id="figure-setup-success-1">
          <img src="https://picsum.photos/300/200?random=1" alt="Randomly generated image" />
        </div>
        <div className="list-item" id="figure-setup-success-2">
          <figure>
            <img src="https://picsum.photos/300/200?random=2" alt="Randomly generated image" />
            <figcaption>Generated using Picsum - January 23, 2025.</figcaption>
          </figure>
        </div>
        <div className="list-item" id="figure-setup-success-3">
          <figure role="presentation">
            <img src="https://picsum.photos/300/200?random=3" alt="Randomly generated image" />
          </figure>
        </div>
        <div className="list-item" id="figure-setup-success-4">
          <img src="https://picsum.photos/300/200?random=4" alt="Randomly generated image" />
        </div>
        <div className="list-item" id="figure-setup-success-5">
          <figure>
            <img src="https://picsum.photos/300/200?random=5" alt="Randomly generated image" />
            <figcaption>Generated using Picsum - January 23, 2025.</figcaption>
          </figure>
        </div>
        <div className="list-item" id="figure-setup-success-6">
          <img src="https://picsum.photos/300/200?random=6" alt="Randomly generated image" />
        </div>
      </>
    }
    itemDescription={itemDescription}
  />
);