import React, { useState } from "react";
import IssueFailure from "../../../../../layout/issueFailure";

const itemDescription = "context : Inline Popup Focus - Failure";

export default () => {
  const [popupVisible, setPopupVisible] = useState(null);

  const openPopup = (id) => {
    setPopupVisible(id);
    // Focus does not move to the popup here.
  };

  return (
    <IssueFailure
      itemContent={
        <>
          <div className="list-item" id="inline-popup-focus-failure-1">
            <button onClick={() => openPopup("popupFail1")}>Open Popup</button>
            <div id="popupFail1" tabIndex="-1" style={{ display: popupVisible === "popupFail1" ? "block" : "none" }}>Popup Content</div>
          </div>

          <div className="list-item" id="inline-popup-focus-failure-2">
            <button onClick={() => openPopup("popupFail2")}>Show Details</button>
            <div id="popupFail2" tabIndex="-1" style={{ display: popupVisible === "popupFail2" ? "block" : "none" }}>Details Content</div>
          </div>

          <div className="list-item" id="inline-popup-focus-failure-3">
            <button onClick={() => openPopup("popupFail3")}>Reveal Info</button>
            <div id="popupFail3" tabIndex="-1" style={{ display: popupVisible === "popupFail3" ? "block" : "none" }}>Additional Info</div>
          </div>

          <div className="list-item" id="inline-popup-focus-failure-4">
            <button onClick={() => openPopup("popupFail4")}>Display Content</button>
            <div id="popupFail4" tabIndex="-1" style={{ display: popupVisible === "popupFail4" ? "block" : "none" }}>Content</div>
          </div>

          <div className="list-item" id="inline-popup-focus-failure-5">
            <button onClick={() => openPopup("popupFail5")}>More Info</button>
            <div id="popupFail5" tabIndex="-1" style={{ display: popupVisible === "popupFail5" ? "block" : "none" }}>Extra Information</div>
          </div>

          <div className="list-item" id="inline-popup-focus-failure-6">
            <button onClick={() => openPopup("popupFail6")}>Open Details</button>
            <div id="popupFail6" tabIndex="-1" style={{ display: popupVisible === "popupFail6" ? "block" : "none" }}>Detail Content</div>
          </div>
        </>
      }
      itemDescription={itemDescription}
    />
  );
};
