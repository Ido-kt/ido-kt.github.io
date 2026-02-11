import React, { useState } from "react";

const AmazonPopoverRating = () => {
  const [isPopoverVisible, setPopoverVisible] = useState(false);

  const handleMouseEnter = () => setPopoverVisible(true);
  const handleMouseLeave = () => setPopoverVisible(false);

  return (
    <div>
      {/* Rating Trigger */}
      <span>Amazon Rating</span>
      <br />
      <button
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        aria-haspopup="true"
        aria-expanded={isPopoverVisible}
        aria-describedby="rating-popover"
        className="popover-trigger"
      >
        <span className="rating-score">4.7</span>
        <i className="star-icon">★</i>
      </button>

      {/* Popover Content */}
      {isPopoverVisible && (
        <div
          id="rating-popover"
          role="tooltip"
          className="popover-content"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="rating-summary">
            <strong>4.7 out of 5</strong>
            <p>28,030 global ratings</p>
          </div>
          <div className="rating-distribution">
            <div className="rating-bar">
              <span>5 star</span>
              <div className="bar">
                <div className="filled" style={{ width: "82%" }}></div>
              </div>
              <span>82%</span>
            </div>
            <div className="rating-bar">
              <span>4 star</span>
              <div className="bar">
                <div className="filled" style={{ width: "12%" }}></div>
              </div>
              <span>12%</span>
            </div>
            <div className="rating-bar">
              <span>3 star</span>
              <div className="bar">
                <div className="filled" style={{ width: "4%" }}></div>
              </div>
              <span>4%</span>
            </div>
            <div className="rating-bar">
              <span>2 star</span>
              <div className="bar">
                <div className="filled" style={{ width: "1%" }}></div>
              </div>
              <span>1%</span>
            </div>
            <div className="rating-bar">
              <span>1 star</span>
              <div className="bar">
                <div className="filled" style={{ width: "1%" }}></div>
              </div>
              <span>1%</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AmazonPopoverRating;