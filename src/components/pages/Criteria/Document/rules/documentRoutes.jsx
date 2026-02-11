import React from "react";
import { Route } from "react-router-dom";
import LanguageReportSuccess from "./Success/Language-reportSuccess";
import LanguageReportFailure from "./Failures/Language-reportFailure";
import PageTitleSuccess from "./Success/PageTitleSuccess";
import PageTitleFailure from "./Failures/PageTitleFailure";
import ViewportscalabilitySuccess from "./Success/ViewportscalabilitySuccess";
import ViewportscalabilityFailure from "./Failures/ViewportscalabilityFailure";

const DocumentRoutes = () => (
  <>
    {/* Static Routes */}
    <Route path="document/language-report_success" element={<LanguageReportSuccess />} />
    <Route path="document/language-report_failure" element={<LanguageReportFailure />} />
    <Route path="document/page-title_success" element={<PageTitleSuccess />} />
    <Route path="document/page-title_failure" element={<PageTitleFailure />} />
    <Route path="document/viewport-scalability_success" element={<ViewportscalabilitySuccess />} />
    <Route path="document/viewport-scalability_failure" element={<ViewportscalabilityFailure />} />

    {/* Dynamic Route for Language Report Failures */}
    <Route path="document/language-report_failure/:id" element={<LanguageReportFailure />} />
    <Route path="document/viewport-scalability_failure/:id" element={<ViewportscalabilityFailure />} />

  </>
);

export default DocumentRoutes;