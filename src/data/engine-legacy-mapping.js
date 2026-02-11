// Mapping between engine rule IDs and their related legacy rule routes.
// Shape:
// {
//   [engineRuleId]: [
//     {
//       label: string; // human-friendly legacy rule name
//       path: string;  // app route to legacy rule, e.g. "/clickables/link-context"
//     }
//   ]
// }
//
// This file is intentionally small and data-only so you can easily extend it
// using the CSV mapping you provided.

const engineLegacyMapping = {
  // Example: engine rule "link-context" is closely related to the legacy
  // "Link Context" rule under the Context criteria.
  "link-context": [
    {
      label: "Link Context (Legacy rule)",
      path: "/context/link-context",
    },
  ],
};

export default engineLegacyMapping;
