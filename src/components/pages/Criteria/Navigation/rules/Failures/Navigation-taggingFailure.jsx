import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import IssueFailure from "../../../../../layout/issueFailure";

const itemDescription = "Navigation: Navigation Tagging - Failures";

// List of failure cases for Navigation-Discernible
const navigationDiscernibleFailures = [
  {
    id: "navigation-discernible-failure-1",
    description: "Failure 1: <nav> missing aria-label, aria-labelledby, or aria-describedby",
    example: (
      <nav>
        <ul>
          <li><a href="/home">Home</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    ),
  },
  {
    id: "navigation-discernible-failure-2",
    description: "Failure 2: Empty aria-label",
    example: (
      <nav aria-label="">
        <ul>
          <li><a href="/about">About</a></li>
          <li><a href="/blog">Blog</a></li>
          <li><a href="/faq">FAQ</a></li>
        </ul>
      </nav>
    ),
  },
  {
    id: "navigation-discernible-failure-3",
    description: "Failure 3: aria-labelledby points to a non-existent ID",
    example: (
      <nav aria-labelledby="nonExistingId">
        <ul>
          <li><a href="/products">Products</a></li>
          <li><a href="/support">Support</a></li>
          <li><a href="/careers">Careers</a></li>
        </ul>
      </nav>
    ),
  },
  {
    id: "navigation-discernible-failure-4",
    description: "Failure 4: aria-describedby points to a hidden element",
    example: (
      <nav aria-describedby="hiddenText">
        <p id="hiddenText" style={{ display: "none" }}>Main navigation</p>
        <ul>
          <li><a href="/portfolio">Portfolio</a></li>
          <li><a href="/news">News</a></li>
          <li><a href="/team">Team</a></li>
        </ul>
      </nav>
    ),
  },
  {
    id: "navigation-discernible-failure-5",
    description: "Failure 5: aria-label placed incorrectly on <ul>",
    example: (
      <nav>
        <ul aria-label="navigation">
          <li><a href="/features">Features</a></li>
          <li><a href="/testimonials">Testimonials</a></li>
          <li><a href="/partnerships">Partnerships</a></li>
        </ul>
      </nav>
    ),
  },
  {
    id: "navigation-discernible-failure-6",
    description: "Failure 6: role='menu' misused for navigation",
    example: (
      <nav role="menu">
        <ul>
          <li><a href="/login">Login</a></li>
          <li><a href="/register">Register</a></li>
          <li><a href="/help">Help</a></li>
        </ul>
      </nav>
    ),
  },
];

// List of failure cases for Navigation-Mismatch
const navigationMismatchFailures = [
  {
    id: "navigation-mismatch-failure-1",
    description: "Failure 1: <div> without role='navigation'",
    example: (
      <div>
        <ul>
          <li><a href="/portfolio">Portfolio</a></li>
          <li><a href="/news">News</a></li>
          <li><a href="/team">Team</a></li>
        </ul>
      </div>
    ),
  },
  {
    id: "navigation-mismatch-failure-2",
    description: "Failure 2: <section> used without role='navigation'",
    example: (
      <section>
        <ul>
          <li><a href="/features">Features</a></li>
          <li><a href="/testimonials">Testimonials</a></li>
          <li><a href="/partnerships">Partnerships</a></li>
        </ul>
      </section>
    ),
  },
  {
    id: "navigation-mismatch-failure-3",
    description: "Failure 3: <article> used as a navigation landmark",
    example: (
      <article>
        <ul>
          <li><a href="/login">Login</a></li>
          <li><a href="/register">Register</a></li>
          <li><a href="/help">Help</a></li>
        </ul>
      </article>
    ),
  },
  {
    id: "navigation-mismatch-failure-4",
    description: "Failure 4: <div role='banner'> misused as navigation",
    example: (
      <div role="banner">
        <ul>
          <li><a href="/blog">Blog</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/about">About</a></li>
        </ul>
      </div>
    ),
  },
  {
    id: "navigation-mismatch-failure-5",
    description: "Failure 5: <header> without navigation role",
    example: (
      <header>
        <ul>
          <li><a href="/pricing">Pricing</a></li>
          <li><a href="/features">Features</a></li>
          <li><a href="/careers">Careers</a></li>
        </ul>
      </header>
    ),
  },
  {
    id: "navigation-mismatch-failure-6",
    description: "Failure 6: <footer> misused as a navigation landmark",
    example: (
      <footer>
        <ul>
          <li><a href="/terms">Terms of Service</a></li>
          <li><a href="/privacy">Privacy Policy</a></li>
          <li><a href="/sitemap">Sitemap</a></li>
        </ul>
      </footer>
    ),
  },
];

// Combine both sets of failures
const allFailures = [...navigationDiscernibleFailures, ...navigationMismatchFailures];

export default () => {
  const { id } = useParams(); // Get failure ID from the route
  const [currentFailure, setCurrentFailure] = useState(null);

  useEffect(() => {
    const failure = allFailures.find((caseItem) => caseItem.id === id);
    if (failure) {
      setCurrentFailure(failure); // Update the current failure
    }
  }, [id]); // Runs when `id` changes

  return (
    <IssueFailure
      itemContent={
        <>
          <div>
            <h2>Navigate to Failure Pages</h2>
            <ul>
              {allFailures.map((failure) => (
                <li key={failure.id}>
                  <Link to={`/navigation/navigation-tagging_failure/${failure.id}`}>
                    {failure.description}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="failure-details">
            <h3>Current Failure Page</h3>
            {currentFailure ? (
              <>
                <p>{currentFailure.description}</p>
                <div className="list-item" id={currentFailure.id}>
                  {currentFailure.example}
                </div>
              </>
            ) : (
              <p>No page selected yet.</p>
            )}
          </div>
        </>
      }
      itemDescription={itemDescription}
    />
  );
};