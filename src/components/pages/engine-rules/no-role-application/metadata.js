// Generated metadata for no-role-application
// This file is auto-generated from index.ts to avoid module resolution issues

export const NoRoleApplication = {
  id: "no-role-application",
  title: `Avoid using role="application"`,
  description: `Using role="application" is generally discouraged because it disables standard screen reader modes and forces users into an application mode. This removes familiar navigation shortcuts, such as heading or landmark navigation, and requires them to interact in ways they may not expect.`,
  advice: `Remove role="application" from the failing element.`,
  impact: "critical",
  refs: [
    { type: "Non-Standard", link: "https://stackoverflow.com/a/61693580" }
  ]
};
