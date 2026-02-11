import React from "react";
import IssueFailure from "../../../../../layout/issueFailure";

const itemDescription = "Headings : Long Headings - Failure";

export default () => (
  <IssueFailure
    itemContent={
      <>
        <div className="list-item" id="longHeadings-failure-1">
          <h1>
            This is an overly detailed heading that exceeds 161 characters, making it unsuitable for effective screen reader navigation. Long headings like this create unnecessary clutter.
          </h1>
        </div>
        <div className="list-item" id="longHeadings-failure-2">
          <h2>
            Screen reader users struggle with headings like this one because it is unnecessarily verbose, exceeding the 161-character guideline, and failing to act as a concise navigation aid.
          </h2>
        </div>
        <div className="list-item" id="longHeadings-failure-3">
          <h3>
            An excessively long heading like this makes it difficult for assistive technology users to quickly understand the structure of the page, defeating the purpose of headings entirely.
          </h3>
        </div>
        <div className="list-item" id="longHeadings-failure-4">
          <h4>
            Headings must remain short and to the point, but this example fails by providing an overwhelming amount of text, reducing usability for all users, especially those using assistive technology.
          </h4>
        </div>
        <div className="list-item" id="longHeadings-failure-5">
          <h5>
            Overly long headings like this one diminish the ability of screen reader users to navigate efficiently, as the heading's primary purpose of concise description is lost in excessive verbosity.
          </h5>
        </div>
        <div className="list-item" id="longHeadings-failure-6">
          <h6>
            Lengthy headings such as this violate the 161-character limit, making it difficult for users relying on assistive technology to quickly identify the topic or purpose of the content.
          </h6>
        </div>
        <hr />
        <div className="list-item" id="longHeadings-ariaLevel1-failure-1">
          <div aria-level="1" role="heading">
            This is a very long heading that exceeds 161 characters, providing far more detail than necessary, which makes it unsuitable for efficient screen reader navigation or usability.
          </div>
        </div>
        <div className="list-item" id="longHeadings-ariaLevel1-failure-2">
          <p aria-level="1" role="heading">
            Overly detailed headings like this one that exceed the 161-character guideline create challenges for assistive technologies by cluttering the user's navigation experience.
          </p>
        </div>
        <div className="list-item" id="longHeadings-ariaLevel1-failure-3">
          <span aria-level="1" role="heading">
          Excessively verbose headings like this add unnecessary complexity, reducing the usability and navigability of the page, especially for screen reader users.especial          </span>
        </div>
        <div className="list-item" id="longHeadings-ariaLevel1-failure-4">
          <section aria-level="1" role="heading">
            Headings are meant to provide concise summaries, but this example fails by exceeding the 161-character limit, thus complicating the navigation experience for assistive technology users.
          </section>
        </div>
        <div className="list-item" id="longHeadings-ariaLevel1-failure-5">
          <article aria-level="1" role="heading">
            By exceeding 161 characters, this heading fails its primary role of being a succinct summary for navigation, making it unsuitable for users relying on screen readers.
          </article>
        </div>
        <div className="list-item" id="longHeadings-ariaLevel1-failure-6">
          <aside aria-level="1" role="heading">
            Long headings like this, which exceed the 161-character guideline, compromise accessibility by making navigation unnecessarily cumbersome for users relying on assistive technologies.
          </aside>
        </div>
      </>
    }
    itemDescription={itemDescription}
  />
);