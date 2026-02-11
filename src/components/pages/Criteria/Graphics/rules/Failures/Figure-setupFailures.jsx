import React from "react";
import IssueFailure from "../../../../../layout/issueFailure";

const itemDescription = "Graphics: Figure Setup - Failure";

export default () => (
  <IssueFailure
    itemContent={
      <>
      <div className="list-item" id="figure-tag-failure-1">
          <figure>
            <img src="https://picsum.photos/300/200?random=56" alt="A mountain." />
          </figure>
        </div>

        {/* Failure 2: Figcaption contains irrelevant information */}
        <div className="list-item" id="figure-tag-failure-2">
          <figure>
            <img src="https://picsum.photos/300/200?random=57" alt="A beach." />
            <figcaption>This caption does not relate to the image.</figcaption>
          </figure>
        </div>

        {/* Failure 3: Empty figcaption */}
        <div className="list-item" id="figure-tag-failure-3">
          <figure>
            <img src="https://picsum.photos/300/200?random=58" alt="A river." />
            <figcaption></figcaption>
          </figure>
        </div>

        {/* Failure 4: No accessible name for screen readers */}
        <div className="list-item" id="figure-tag-failure-4">
          <figure role="presentation">
            <img src="https://picsum.photos/300/200?random=59" />
          </figure>
        </div>

        {/* Failure 5: Using aria-labelledby without pointing to valid ID */}
        <div className="list-item" id="figure-tag-failure-5">
          <figure aria-labelledby="missingID">
            <img src="https://picsum.photos/300/200?random=60" />
          </figure>
        </div>

        {/* Failure 6: Overly verbose figcaption */}
        <div className="list-item" id="figure-tag-failure-6">
          <figure>
            <img src="https://picsum.photos/300/200?random=61"/>
            <figcaption aria-hidden="true" >
              This image is of a mountain surrounded by clouds during sunset, with a lot of detailed description that might not be helpful for users.
            </figcaption>
          </figure>
        </div>
         {/* Failure 1: Div with role="figure" but no accessible name or description */}
         <div className="list-item" id="role-figure-failure-1">
          <div role="figure">
            <img src="https://picsum.photos/300/200?random=71" />
          </div>
        </div>

        {/* Failure 2: Section with role="figure" but no figcaption or accessible name */}
        <div className="list-item" id="role-figure-failure-2">
          <section role="figure">
            <img src="https://picsum.photos/300/200?random=72" />
          </section>
        </div>

        {/* Failure 3: Article with role="figure" and irrelevant content */}
        <div className="list-item" id="role-figure-failure-3">
          <article role="figure">
            <img src="https://picsum.photos/300/200?random=73" />
            <p>This is just some unrelated text.</p>
          </article>
        </div>

        {/* Failure 4: Div with role="figure" but an empty image */}
        <div className="list-item" id="role-figure-failure-4">
          <div role="figure">
            <img src="" />
          </div>
        </div>

        {/* Failure 5: Non-visual element assigned role="figure" */}
        <div className="list-item" id="role-figure-failure-5">
          <div role="figure">
            <p>This is text content that has no visual relevance.</p>
          </div>
        </div>

        {/* Failure 6: Duplicate images in a figure with no description */}
        <div className="list-item" id="role-figure-failure-6">
          <div role="figure">
            <img src="https://picsum.photos/300/200?random=74" />
            <img src="https://picsum.photos/300/200?random=74" />
          </div>
        </div>
         {/* Failure 1: `<figcaption>` is visually hidden */}
         <div className="list-item" id="figure-setup-failure-1">
          <figure>
            <img
              src="https://picsum.photos/300/200?random=75"
              
            />
            <figcaption style={{ position: "absolute", left: "-9999px" }}>
              A breathtaking mountain view captured in 2025.
            </figcaption>
          </figure>
        </div>

        {/* Failure 2: `<figcaption>` hidden via `display: none` */}
        <div className="list-item" id="figure-setup-failure-2">
          <figure>
            <img
              src="https://picsum.photos/300/200?random=76"
              
            />
            <figcaption style={{ display: "none" }}>
              A serene lake in the middle of a forest.
            </figcaption>
          </figure>
        </div>

        {/* Failure 3: `<figcaption>` hidden with opacity and screen reader still picks it */}
        <div className="list-item" id="figure-setup-failure-3">
          <figure>
            <img
              src="https://picsum.photos/300/200?random=77"
              
            />
            <figcaption style={{ opacity: 0 }}>
              Sunset at Waikiki Beach in Hawaii.
            </figcaption>
          </figure>
        </div>
              </>
    }
    itemDescription={itemDescription}
  />
);