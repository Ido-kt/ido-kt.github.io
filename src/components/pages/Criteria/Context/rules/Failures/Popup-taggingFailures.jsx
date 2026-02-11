import React, { useState } from "react";
import IssueFailure from "../../../../../layout/issueFailure";

const itemDescription = "Context : Popup Tagging - Failure";

const BadPopup = ({ isOpen, onClose, id, title }) => {
  if (!isOpen) return null;

  return (
    <div className="overlay">
      {/* Missing role and aria-modal attributes */}
      <div className="popup-content">
        <h2>{title}</h2>
        <p>This popup has no proper accessibility features.</p>
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
    <IssueFailure
      itemContent={
        <>
          {["1", "2", "3", "4", "5", "6"].map((id) => (
            <div
              className="list-item trigger"
              id={`popup-tagging-failure-${id}`}
              key={id}
              onClick={() => openPopup(id)}
              /* Missing accessibility attributes like role or tabIndex */
            >
              Open Popup {id}
              <BadPopup
                isOpen={popupOpen[id]}
                onClose={() => closePopup(id)}
                id={id}
                title={`Popup Title ${id}`}
              />
            </div>
          ))}
        </>
      }
      itemDescription={itemDescription}
    />
  );
};
