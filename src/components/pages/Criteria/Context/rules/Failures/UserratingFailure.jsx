import React from "react";
import IssueFailure from "../../../../../layout/issueFailure";

const itemDescription = "Criteria: Context - User Rating - Failure";

export default () => (
  <IssueFailure
    itemContent={
      <>
        {/* Failure 1: Star icons without any accessible text */}
        <div className="list-item" id="userRating-failure-1">
          <div className="rating">
            ★★★★☆
          </div>
        </div>

        {/* Failure 2: SVG stars with aria-hidden on entire container */}
        <div className="list-item" id="userRating-failure-2">
          <div className="stars" aria-hidden="true">
            <svg width="16" height="16"><path d="M8 12l-4 2 1-4.5L1 6l4.5-.5L8 1l2.5 4L15 6l-4 3.5L12 14z" fill="gold"/></svg>
            <svg width="16" height="16"><path d="M8 12l-4 2 1-4.5L1 6l4.5-.5L8 1l2.5 4L15 6l-4 3.5L12 14z" fill="gold"/></svg>
            <svg width="16" height="16"><path d="M8 12l-4 2 1-4.5L1 6l4.5-.5L8 1l2.5 4L15 6l-4 3.5L12 14z" fill="gold"/></svg>
            <svg width="16" height="16"><path d="M8 12l-4 2 1-4.5L1 6l4.5-.5L8 1l2.5 4L15 6l-4 3.5L12 14z" fill="gray"/></svg>
            <svg width="16" height="16"><path d="M8 12l-4 2 1-4.5L1 6l4.5-.5L8 1l2.5 4L15 6l-4 3.5L12 14z" fill="gray"/></svg>
          </div>
        </div>

        {/* Failure 3: Image-based rating without alt text */}
        <div className="list-item" id="userRating-failure-3">
          <div>
            <img src="4-star-rating.png" width="80" height="16" />
          </div>
        </div>

        {/* Failure 4: Font icons without screen reader text */}
        <div className="list-item" id="userRating-failure-4">
          <div className="rating">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="far fa-star"></i>
            <i className="far fa-star"></i>
          </div>
        </div>

        {/* Failure 5: CSS-generated stars without accessible text */}
        <div className="list-item" id="userRating-failure-5">
          <div className="star-rating" data-rating="3.5">
            <span></span><span></span><span></span><span></span><span></span>
          </div>
        </div>

        {/* Failure 6: Empty aria-label on rating container */}
        <div className="list-item" id="userRating-failure-6">
          <div className="rating" aria-label="">
            ★★★★★
          </div>
        </div>

        {/* Failure 7: Role presentation removing semantic meaning */}
        <div className="list-item" id="userRating-failure-7">
          <div className="rating" role="presentation">
            ★★★☆☆
          </div>
        </div>

        {/* Failure 8: Hidden text with wrong content */}
        <div className="list-item" id="userRating-failure-8">
          <div>
            ★★★★☆
            <span className="sr-only">Click to rate</span>
          </div>
        </div>

        {/* Failure 9: Numeric display without context */}
        <div className="list-item" id="userRating-failure-9">
          <div className="rating-display">
            3.8
          </div>
        </div>

        {/* Failure 10: Background image stars */}
        <div className="list-item" id="userRating-failure-10">
          <div className="bg-stars" style={{
            backgroundImage: 'url(star-rating-bg.png)',
            backgroundSize: 'cover',
            width: '100px',
            height: '20px'
          }}>
          </div>
        </div>

        {/* Failure 11: Progress bar style rating without label */}
        <div className="list-item" id="userRating-failure-11">
          <div className="rating-bar">
            <div className="rating-fill" style={{width: '80%'}}></div>
          </div>
        </div>

        {/* Failure 12: Interactive rating without accessibility */}
        <div className="list-item" id="userRating-failure-12">
          <div className="interactive-rating" onClick={() => {}}>
            <span data-value="1">⭐</span>
            <span data-value="2">⭐</span>
            <span data-value="3">⭐</span>
            <span data-value="4">⭐</span>
            <span data-value="5">⭐</span>
          </div>
        </div>

        {/* Failure 13: Broken aria-labelledby reference */}
        <div className="list-item" id="userRating-failure-13">
          <div className="rating" aria-labelledby="missing-element">
            ★★★★☆
          </div>
        </div>

        {/* Failure 14: Empty container with only CSS content */}
        <div className="list-item" id="userRating-failure-14">
          <div className="css-stars" data-rating="4"></div>
        </div>

        {/* Failure 15: Whitespace-only sr-only text */}
        <div className="list-item" id="userRating-failure-15">
          <div>
            ★★☆☆☆
            <span className="sr-only">   </span>
          </div>
        </div>
      </>
    }
    itemDescription={itemDescription}
  />
);