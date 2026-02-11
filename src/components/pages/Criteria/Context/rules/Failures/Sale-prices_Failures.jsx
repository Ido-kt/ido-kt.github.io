import React from "react";
import IssueFailure from "../../../../../layout/issueFailure";

const itemDescription = "Context : Sale Prices - Failure";

export default () => (
  <IssueFailure
    itemContent={
      <>
        <div className="list-item" id="salePrices-failure-1">
          <div>$100</div>
        </div>
        <div className="list-item" id="salePrices-failure-2">
          <div>$50</div>
        </div>
        <div className="list-item" id="salePrices-failure-3">
          <div>$200</div>
        </div>
        <div className="list-item" id="salePrices-failure-4">
          <div>$300</div>
        </div>
        <div className="list-item" id="salePrices-failure-5">
          <div>$75</div>
        </div>
        <div className="list-item" id="salePrices-failure-6">
          <div>$120</div>
        </div>
      </>
    }
    itemDescription={itemDescription}
  />
);
