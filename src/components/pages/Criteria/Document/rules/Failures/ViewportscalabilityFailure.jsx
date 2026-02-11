import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import IssueFailure from "../../../../../layout/issueFailure";

// JavaScript function to update the existing meta viewport tag
function updateViewport(content) {
  const meta = document.querySelector("meta[name='viewport']");
  if (meta) {
    meta.setAttribute("content", content); // Update existing viewport meta tag
    console.log(`Updated viewport meta tag: ${content}`);
  } else {
    console.warn("Viewport meta tag not found.");
  }
}

// List of failure cases
const failureCases = [
  { id: "viewport-failure-1", content: "width=device-width, initial-scale=1.0", description: "Failure 1: No user scaling enabled" },
  { id: "viewport-failure-2", content: "width=device-width, initial-scale=1.0, user-scalable=no", description: "Failure 2: Explicitly disables user scaling" },
  { id: "viewport-failure-3", content: "width=500, initial-scale=0.5", description: "Failure 3: Fixed width and scale below standard" },
  { id: "viewport-failure-4", content: "initial-scale=2.0, user-scalable=no", description: "Failure 4: Prevents scaling above default" },
];

export default function ViewportScalabilityFailure() {
  const { id } = useParams(); // Get the failure id from the URL
  const [currentFailure, setCurrentFailure] = useState(null);

  useEffect(() => {
    const failure = failureCases.find((caseItem) => caseItem.id === id);
    if (failure) {
      updateViewport(failure.content); // Update the meta viewport tag
      setCurrentFailure(failure.description); // Update the current failure description
    }
  }, [id]);

  return (
    <IssueFailure
      itemContent={
        <>
          <div>
            <h2>Viewport Scalability Failures</h2>
            {currentFailure ? (
              <p>Current Failure: {currentFailure}</p>
            ) : (
              <p>Select a failure to view details.</p>
            )}
          </div>
          <div>
            <h3>Navigate to Other Failures</h3>
            <ul>
              {failureCases.map((failure) => (
                <li key={failure.id}>
                  <Link to={`/document/viewport-scalability_failure/${failure.id}`}>
                    {failure.description}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </>
      }
      itemDescription="Document: Viewport Scalability - Failure"
    />
  );
}