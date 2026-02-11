import React, { useState } from "react";
import IssueSuccess from "../../../../../layout/issueSuccess";

const itemDescription = "Keyboard : Popup Focus - Success";

export default () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [isHelpPopupOpen, setHelpPopupOpen] = useState(false);
  const [isDialogOpen, setDialogOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const openPopup = () => setPopupOpen(true);
  const closePopup = () => setPopupOpen(false);

  const triggerHelpPopup = () => setHelpPopupOpen(true);
  const closeHelpPopup = () => setHelpPopupOpen(false);

  const launchDialog = () => setDialogOpen(true);
  const dismissDialog = () => setDialogOpen(false);

  return (
    <IssueSuccess
      itemContent={
        <>
          <li id="popupFocus-success-1">
            <button onClick={openModal}>Open Modal</button>
            {isModalOpen && (
              <div role="dialog" aria-labelledby="modal-title">
                <h2 id="modal-title">Modal Title</h2>
                <p>Modal Content</p>
                <button onClick={closeModal}>Close</button>
              </div>
            )}
          </li>
          <li id="popupFocus-success-2">
            <button onClick={openPopup}>Open Popup</button>
            {isPopupOpen && (
              <div role="dialog">
                <input type="text" placeholder="Focus moves here on open" />
                <button onClick={closePopup}>Close</button>
              </div>
            )}
          </li>
          <li id="popupFocus-success-3">
            <button onClick={triggerHelpPopup}>Help</button>
            {isHelpPopupOpen && (
              <div role="dialog" aria-labelledby="help-title">
                <h2 id="help-title">Help Section</h2>
                <button onClick={closeHelpPopup}>Close Help</button>
              </div>
            )}
          </li>
          <li id="popupFocus-success-4">
            <button onClick={launchDialog}>Launch Dialog</button>
            {isDialogOpen && (
              <div role="dialog">
                <p>Dialog Content</p>
                <button onClick={dismissDialog}>Close</button>
              </div>
            )}
          </li>
        </>
      }
      itemDescription={itemDescription}
    />
  );
};