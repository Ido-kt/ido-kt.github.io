import React from "react";
import IssueSuccess from "../../../../../layout/issueSuccess";

const itemDescription = "Context : Sale Prices - Success";

export default () => (
  <IssueSuccess
    itemContent={
      <>
        <div className="list-item" id="salePrices-success-1">
          <div>$100 <span className="sr-only">Original price</span></div>
        </div>
        <div className="list-item" id="salePrices-success-2">
          <div>$50 <span className="sr-only">Original price</span></div>
        </div>
        <div className="list-item" id="salePrices-success-3">
          <div>$200 <span className="sr-only">Original price</span></div>
        </div>
        <div className="list-item" id="salePrices-success-4">
          <div>$300 <span className="sr-only">Original price</span></div>
        </div>
        <div className="list-item" id="salePrices-success-5">
          <div>$75 <span className="sr-only">Original price</span></div>
        </div>
        <div className="list-item" id="salePrices-success-6">
          <div>$120 <span className="sr-only">Original price</span></div>
        </div>
      </>
    }
    itemDescription={itemDescription}
  />
);
