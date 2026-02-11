import React, { createContext, useContext, useCallback, useState } from "react";

const LoadingContext = createContext();

export const useLoading = () => useContext(LoadingContext);

export const LoadingProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState("Loading...");
  const [loadingType, setLoadingType] = useState("spinner"); // 'spinner', 'progress', 'skeleton'

  const showLoading = useCallback((message = "Loading...", type = "spinner") => {
    setLoadingMessage(message);
    setLoadingType(type);
    setLoading(true);
  }, []);

  const hideLoading = useCallback(() => setLoading(false), []);

  const updateLoadingMessage = useCallback((message) => {
    setLoadingMessage(message);
  }, []);

  return (
    <LoadingContext.Provider value={{ 
      loading, 
      loadingMessage, 
      loadingType,
      showLoading, 
      hideLoading,
      updateLoadingMessage,
      isLoading: loading // Keep backward compatibility
    }}>
      {children}
    </LoadingContext.Provider>
  );
};