import React from "react";

export const BarGraphRatingFailure = () => (
  <div>
    <div style={{ width: '80%' }}>★★★★★</div>
    <div style={{ width: '60%' }}>★★★★☆</div>
    <div style={{ width: '40%' }}>★★★☆☆</div>
    <div style={{ width: '20%' }}>★★☆☆☆</div>
    <div style={{ width: '10%' }}>★☆☆☆☆</div>
    {/* No aria-label or alternative text for the bars */}
  </div>
);