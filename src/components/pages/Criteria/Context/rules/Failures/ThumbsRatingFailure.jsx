import React from "react";

export const ThumbsRatingFailure = () => (
  <div>
    <button>👍</button>
    <button>👎</button>
    {/* No aria-label, users with screen readers won't understand the buttons */}
  </div>
);