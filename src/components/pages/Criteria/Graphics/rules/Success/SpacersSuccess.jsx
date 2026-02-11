import React from "react";
import IssueSuccess from "../../../../../layout/issueSuccess";

const itemDescription = "Graphics : Spacers - Success";

export default () => (
  <IssueSuccess
    itemContent={
      <>
        <div className="list-item" id="spacers-success-1">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <div
            aria-hidden="true"
            style={{
              height: "20px",
              background: "#e0e0e0",
              width: "100%",
            }}
          ></div>
          <p>Nullam vel risus ac risus feugiat fermentum.</p>
        </div>
        <div className="list-item" id="spacers-success-2">
          <p>Curabitur vitae libero non justo aliquam fermentum.</p>
          <span
            role="presentation"
            style={{
              display: "block",
              width: "100%",
              height: "15px",
              background: "#ccc",
            }}
          ></span>
          <p>Ut convallis nisi sit amet ex convallis volutpat.</p>
        </div>
        <div className="list-item" id="spacers-success-3">
          <p>Pellentesque eget lacus non odio volutpat scelerisque.</p>
          <div
            style={{
              marginTop: "10px",
              height: "20px",
              background: "#d6d6d6",
            }}
            aria-hidden="true"
          ></div>
          <p>Fusce gravida mi nec ligula sagittis feugiat.</p>
        </div>
        <div className="list-item" id="spacers-success-4">
          <p>Mauris lacinia erat sed nulla dapibus dapibus.</p>
          <hr
            role="presentation"
            style={{
              border: "none",
              height: "1px",
              background: "#aaa",
              margin: "15px 0",
            }}
          />
          <p>Phasellus vulputate est et felis placerat, a lacinia massa.</p>
        </div>
        <div className="list-item" id="spacers-success-5">
          <p>Donec efficitur, urna in convallis tempus, elit elit fermentum eros.</p>
          <div
            className="spacer"
            role="none"
            style={{
              height: "30px",
              width: "100%",
              background: "#e6e6e6",
            }}
          ></div>
          <p>Aliquam vehicula ex ut risus venenatis congue.</p>
        </div>
        <div className="list-item" id="spacers-success-6">
          <p>Proin vel nunc ac nulla cursus fringilla sit amet non lacus.</p>
          <span
            aria-hidden="true"
            style={{
              display: "inline-block",
              width: "20px",
              height: "20px",
              background: "#ccc",
            }}
          ></span>
          <p>Sed quis arcu nec sapien scelerisque facilisis.</p>
        </div>
      </>
    }
    itemDescription={itemDescription}
  />
);