import React, { createContext, useContext, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const ModalContext = createContext();

export function useModalContext() {
  return useContext(ModalContext);
}

export function ModalProvider({ children }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);

  const navigate = useNavigate(); // Access navigate inside the provider

  const openModal = useCallback((item) => {
    setCurrentItem(item);
    setModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setCurrentItem(null);
    setModalOpen(false);
  }, []);

  const openModalAndUpdateURL = useCallback(
    (item) => {
      setCurrentItem(item);
      setModalOpen(true);
      navigate(`/${item.criteria}/${item.route}/`); // Use navigate here
    },
    [navigate] // Include navigate as a dependency
  );

  const closeModalAndResetURL = useCallback(() => {
    setCurrentItem(null);
    setModalOpen(false);
    if (currentItem) {
      navigate(`/${currentItem.criteria}/`); // Use navigate here
    }
  }, [navigate, currentItem]); // Include navigate and currentItem as dependencies

  return (
    <ModalContext.Provider
      value={{
        modalOpen,
        openModal,
        closeModal,
        currentItem,
        openModalAndUpdateURL,
        closeModalAndResetURL,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}
