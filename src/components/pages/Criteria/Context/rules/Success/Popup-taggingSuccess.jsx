import React, { useState } from "react";
import IssueSuccess from "../../../../../layout/issueSuccess";

const itemDescription = "Context : Popup Tagging - Success";

const Popup = ({ isOpen, onClose, id, title, description }) => {
  if (!isOpen) return null;

  return (
    <div
      className="overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby={`${id}-title`}
      aria-describedby={`${id}-desc`}
    >
      <div className="popup-content">
        <h2 id={`${id}-title`}>{title}</h2>
        <p id={`${id}-desc`}>{description}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default () => {
  const [popupOpen, setPopupOpen] = useState({});

  const openPopup = (id) => setPopupOpen({ ...popupOpen, [id]: true });
  const closePopup = (id) => setPopupOpen({ ...popupOpen, [id]: false });

  return (
    <IssueSuccess
      itemContent={
        <>
          {["1", "2", "3", "4", "5", "6"].map((id) => (
            <div
              className="list-item trigger"
              id={`popup-tagging-success-${id}`}
              key={id}
              role="button"
              tabIndex="0"
              onClick={() => openPopup(id)}
              onKeyDown={(e) => e.key === "Enter" && openPopup(id)}
            >
              Open Popup {id}
              <Popup
                isOpen={popupOpen[id]}
                onClose={() => closePopup(id)}
                id={id}
                title={`Popup Title ${id}`}
                description={`This is the content of popup ${id}, providing additional information.`}
              />
            </div>
          ))}
        </>
      }
      itemDescription={itemDescription}
    />
  );
};
