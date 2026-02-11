// Generated metadata for form-duplicate-id
// This file is auto-generated from index.ts to avoid module resolution issues

export const FormDuplicateId = {
  id: "form-duplicate-id",
  title: `Forms and form fields must have unique ID attributes`,
  description: `Screen readers rely on ID attributes to be unique in order to announce to the users the correct content. If IDs are not unique, screen readers won't know which element is the correct one.`,
  advice: `Change the ID of the duplicate fields and forms so they are unique.`,
  impact: "moderate",
  refs: [
    { type: "WAI", link: "https://www.w3.org/WAI/tutorials/forms/instructions/" },
    { type: "Non-Standard", link: "https://rocketvalidator.com/accessibility-validation/axe/4.6/duplicate-id" }
  ]
};
