import React from "react";
import IssueSuccess from "../../../../../layout/issueSuccess";

const itemDescription = "Document: Language Report - Success";

export default () => (
  <IssueSuccess
    itemContent={
      <>
        <div className="list-item" id="language-report-success-1">
          <code>&lt;html lang="en"&gt;</code>
        </div>
        <div className="list-item" id="language-report-success-2">
          <code>&lt;html lang="es"&gt;</code>
        </div>
        <div className="list-item" id="language-report-success-3">
          <code>&lt;html lang="fr"&gt;</code>
        </div>
        <div className="list-item" id="language-report-success-4">
          <code>&lt;html lang="de"&gt;</code>
        </div>
        <div className="list-item" id="language-report-success-5">
          <code>&lt;html lang="ru"&gt;</code>
        </div>
        <div className="list-item" id="language-report-success-6">
          <code>&lt;html lang="it"&gt;</code>
        </div>
      </>
    }
    itemDescription={itemDescription}
  />
);
