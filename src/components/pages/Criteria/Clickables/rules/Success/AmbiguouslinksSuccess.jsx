import React from "react";
import IssueSuccess from "../../../../../layout/issueSuccess";

const itemDescription = "Ambigious Links - Success";

export default () => (
  <IssueSuccess
    itemContent={<>
      <a href="https://example.com/article" aria-label="Read Article about Web Accessibility">Read Web Accessibility Article</a>
      <a href="https://example.com/product" aria-label="View Details of Product X">View Product X Details</a>
      <a href="https://example.com/learn" aria-label="Explore Educational Resources">Explore Educational Resources</a>
      <a href="https://example.com/service" aria-label="Learn More about Our Services">Learn More about Our Services</a>
      <a href="https://example.com/contact" aria-label="Contact Us for Assistance">Contact Us</a>
      <a href="https://example.com/event" aria-label="Register for the Web Accessibility Conference">Register for the Conference</a>
      <hr></hr>
      <a
        href="/product-details"
        aria-label="Learn more about our latest product features"
      >Learn More</a
      >
      <br />
      <a href="/sale" aria-label="Shop Now for the latest sale on winter apparel"
      >Shop Now</a
      >
      <br />
      <a href="/services" aria-label="Explore our full list of available services"
      >Start Here</a
      >
      <br />
      <a href="/membership" aria-label="Find out about our membership benefits"
      >Learn More</a
      >
      <br />
      <a href="/training" aria-label="Begin our comprehensive training program"
      >Start Here</a
      >
      <br />
      <a href="/blog" aria-label="Read more articles on technology trends"
      >Learn More</a
      >
      <br />
    </>}
    itemDescription={itemDescription}
  />
);
