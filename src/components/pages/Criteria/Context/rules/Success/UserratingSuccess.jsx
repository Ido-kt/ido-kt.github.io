import React from "react";
import IssueSuccess from "../../../../../layout/issueSuccess";

const itemDescription = "Criteria: Context - User Rating - Success";

export default () => (
  <IssueSuccess
    itemContent={
      <>
        <div className="list-item" id="userRating-success-1">
          <div>
            ★★★★★ <span className="sr-only">5/5 rating</span>
          </div>
        </div>
        <div className="list-item" id="userRating-success-2">
          <div>
            ★★★☆☆ <span className="sr-only">3/5 rating</span>
          </div>
        </div>
        <div className="list-item" id="userRating-success-3">
          <div>
            ★★☆☆☆ <span className="sr-only">2/5 rating</span>
          </div>
        </div>
        <div className="list-item" id="userRating-success-4">
          <div>
            ★★★★☆ <span className="sr-only">4/5 rating</span>
          </div>
        </div>
        <div className="list-item" id="userRating-success-5">
          <div>
            ★☆☆☆☆ <span className="sr-only">1/5 rating</span>
          </div>
        </div>
        <div className="list-item" id="userRating-success-6">
          <div>
            ★★★★★ <span className="sr-only">Excellent, 5 out of 5</span>
          </div>
        </div>
      </>
    }
    itemDescription={itemDescription}
  />
);
