import React from "react";
import IssueFailure from "../../../../../layout/issueFailure";

const itemDescription = "Ambigious Links: Failures";

export default () => (
  <IssueFailure
    itemContent={
      <>
        <a href="https://example.com/ambiguous">Learn More</a>
        <a href="https://example.com/action">Take Action</a>
        <a href="https://example.com/news">Read More</a>
        <a href="https://example.com/resources">Explore</a>
        <a href="https://example.com/services">Click Here</a>
        <a href="https://example.com/event">Join Us</a>
        <br></br>
        <li class="failure1"><a href="/products">Products</a></li>
        <li class="failure2"><a href="/blog">Read More</a></li>
        <li class="failure3"><a href="/events">See Events</a></li>
        <li class="failure4"><a href="/help">Help</a></li>
        <li class="failure5"><a href="/documentation">Documentation</a></li>
        <li class="failure6"><a href="/services">Learn More</a></li>
        <a href="/product-details">Learn More</a>
        <br></br>
        <a href="/sale">Shop Now</a>
        <br></br>
        <a href="/services">Start Here</a>
        <br></br>
        <a href="/membership">Learn More</a>
        <br></br>
        <a href="/training">Start Here</a>
        <br></br>
        <a href="/blog">Learn More</a>
        <br></br>

      </>
    }
    itemDescription={itemDescription}
  />
);
