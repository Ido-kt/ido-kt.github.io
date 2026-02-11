import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { HashRouter as Router } from "react-router-dom"; // Use HashRouter here
import { ModalProvider } from "./components/util/ModalContext";
import { LoadingProvider } from "./components/util/LoadingContext"; // Import LoadingProvider
import GlobalLoading from "./components/util/GlobalLoading"; // Import GlobalLoading
import { SearchProvider } from "./components/util/SearchContext"; // Import SearchProvider

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}> {/* Enable future flags */}
      <LoadingProvider> {/* Wrap with LoadingProvider */}
        <ModalProvider>
          <SearchProvider> {/* Add SearchProvider for global search state */}
            <GlobalLoading /> {/* Display loading bar at the top when loading */}
            <App />
          </SearchProvider>
        </ModalProvider>
      </LoadingProvider>
    </Router>
  </React.StrictMode>
);

reportWebVitals();