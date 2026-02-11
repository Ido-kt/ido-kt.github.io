// Generated metadata for form-mismatch
// This file is auto-generated from index.ts to avoid module resolution issues

export const FormMismatch = {
  id: "form-mismatch",
  title: `A container of input elements should be tagged as a form`,
  description: `Input elements should be enclosed in a <form> element or an element with role="form" so that browsers and assistive technologies identify and expose the fields as part of a form.\\`,
  advice: `Enclose the input controls in a <form> element or assign role="form" to an element that contains the fields.`,
  impact: "moderate",
  refs: [
    { type: "WAI", link: "https://www.w3.org/TR/wai-aria/#form" }
  ]
};
