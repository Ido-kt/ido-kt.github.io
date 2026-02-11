import React from "react";

export const SliderRatingFailure = () => (
  <div>
    <input type="range" min="1" max="5" step="1" />
    {/* No label, no aria attributes */}
  </div>
);