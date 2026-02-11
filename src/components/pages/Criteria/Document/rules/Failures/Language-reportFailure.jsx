import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import IssueFailure from "../../../../../layout/issueFailure";

const itemDescription = "Document: Language Report - Failure";

// JavaScript function to set the `lang` attribute
function simulatePage(lang) {
  document.documentElement.lang = lang;
}

const failureCases = [
  { id: "language-report-failure-1", lang: "", description: 'Failure 1: lang=""' },
  { id: "language-report-failure-2", lang: " ", description: 'Failure 2: lang=" "' },
  { id: "language-report-failure-3", lang: "123", description: 'Failure 3: lang="123"' },
  { id: "language-report-failure-4", lang: "en-us-es", description: 'Failure 4: lang="en-us-es"' },
  { id: "language-report-failure-5", lang: "undefined", description: 'Failure 5: lang="undefined"' },
  { id: "language-report-failure-6", lang: null, description: "Failure 6: lang=null" },
];

export default () => {
  const { id } = useParams(); // Get the failure id from the URL
  const [currentFailure, setCurrentFailure] = useState(null);

  useEffect(() => {
    const failure = failureCases.find((caseItem) => caseItem.id === id);
    if (failure) {
      simulatePage(failure.lang); // Set the `lang` attribute
      setCurrentFailure(failure.description); // Update the current failure description
      console.log(`Navigated to page with lang="${failure.lang}"`);
    }
  }, [id]); // Trigger on `id` change

  return (
    <IssueFailure
      itemContent={
        <>
          <div>
            <h2>Navigate to Failure Pages</h2>
            <ul>
              {failureCases.map((failure) => (
                <li key={failure.id}>
                  <Link to={`/document/language-report_failure/${failure.id}`}>
                    {failure.description}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="failure-details">
            <h3>Current Failure Page</h3>
            <p>{currentFailure || "No page selected yet."}</p>
          </div>
        </>
      }
      itemDescription={itemDescription}
    />
  );
};