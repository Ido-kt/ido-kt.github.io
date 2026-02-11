import React from "react";
import { AltMisuse } from "../../components/pages/engine-rules/alt-misuse/index.ts";

const atomicTest = {
  description: "Atomic test: <div alt=...> should fail.",
  html: '<div alt="this div is remarkable, you should know this"></div>',
  expectedFailedNodes: ["div"],
};

const AltMisuseDescription = () => (
  <div style={{ padding: "2rem" }}>
    <h1>{AltMisuse.title}</h1>
    <p>{AltMisuse.description}</p>
    <h2>Advice</h2>
    <p>{AltMisuse.advice}</p>
    <h2>Atomic Test</h2>
    <p>{atomicTest.description}</p>
    <pre>{atomicTest.html}</pre>
    <p><strong>Expected failed nodes:</strong> {atomicTest.expectedFailedNodes.join(", ")}</p>
  </div>
);

export default AltMisuseDescription;
