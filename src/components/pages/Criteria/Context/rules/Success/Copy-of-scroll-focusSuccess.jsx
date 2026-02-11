import React, { useState } from "react";
import IssueSuccess from "../../../../../layout/issueSuccess";

const itemDescription = "context : Inline Popup Focus - Success";

export default () => {
  const [popupVisible, setPopupVisible] = useState(null);

  const openPopup = (id) => {
    setPopupVisible(id);
    setTimeout(() => document.getElementById(id).focus(), 0);
  };

  return (
    <IssueSuccess
      itemContent={
        <>
          <div className="list-item" id="inline-popup-focus-success-1">
            <button onClick={() => openPopup("popup1")}>Open Popup</button>
            <div id="popup1" tabIndex="-1" style={{ display: popupVisible === "popup1" ? "block" : "none" }}>Popup Content</div>
          </div>

          <div className="list-item" id="inline-popup-focus-success-2">
            <button onClick={() => openPopup("popup2")}>Show Details</button>
            <div id="popup2" tabIndex="-1" style={{ display: popupVisible === "popup2" ? "block" : "none" }}>Details Content</div>
          </div>

          <div className="list-item" id="inline-popup-focus-success-3">
            <button onClick={() => openPopup("popup3")}>Reveal Info</button>
            <div id="popup3" tabIndex="-1" style={{ display: popupVisible === "popup3" ? "block" : "none" }}>Additional Info</div>
          </div>

          <div className="list-item" id="inline-popup-focus-success-4">
            <button onClick={() => openPopup("popup4")}>Display Content</button>
            <div id="popup4" tabIndex="-1" style={{ display: popupVisible === "popup4" ? "block" : "none" }}>Content</div>
          </div>

          <div className="list-item" id="inline-popup-focus-success-5">
            <button onClick={() => openPopup("popup5")}>More Info</button>
            <div id="popup5" tabIndex="-1" style={{ display: popupVisible === "popup5" ? "block" : "none" }}>Extra Information</div>
          </div>

          <div className="list-item" id="inline-popup-focus-success-6">
            <button onClick={() => openPopup("popup6")}>Open Details</button>
            <div id="popup6" tabIndex="-1" style={{ display: popupVisible === "popup6" ? "block" : "none" }}>Detail Content</div>
          </div>
        </>
      }
      itemDescription={itemDescription}
    />
  );
};
