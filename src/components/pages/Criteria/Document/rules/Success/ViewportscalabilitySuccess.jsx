import React from "react";
import IssueSuccess from "../../../../../layout/issueSuccess";

const itemDescription = "document : Viewport Scalability - Success";

const SuccessExample = () => (
  <IssueSuccess
    itemContent={
      <div className="list-item" id="viewport-scalability-success-1">
        <meta
          name="viewport"
          content="width=device-width, user-scalable=yes, initial-scale=1.0, maximum-scale=5.0, minimum-scale=1.0"
        />
      </div>
    }
    itemDescription={itemDescription}
  />
);

export default SuccessExample;
