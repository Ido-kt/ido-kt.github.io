// Generated metadata for heading-order
// This file is auto-generated from index.ts to avoid module resolution issues

export const HeadingOrder = {
  id: "heading-order",
  title: `Heading levels should follow a logical hierarchy`,
  description: `Incorrect heading hierarchy can create a misleading page outline, disrupt navigation by heading shortcuts, and cause confusion about the structure and importance of content. Skipping levels or using them inconsistently makes it harder for screen reader users and others who rely on structured navigation to understand the page.`,
  advice: `Use heading levels in a meaningful, hierarchical order that reflects the structure of the content. Start with a single <h1> for the main page title, then use <h2> for primary sections, <h3> for subsections, and so on. Best practice avoids skipping levels (for example, jumping from <h1> to <h3>) to maintain a logical sequence and ensure a clear, consistent outline for all users.`,
  impact: "moderate",
  refs: [
    { type: "WCAG", id: "1.3.1", level: "A", link: "https://www.w3.org/WAI/WCAG21/quickref/?showtechniques=131#info-and-relationships" },
    { type: "Non-Standard", link: "https://www.a11yproject.com/posts/how-to-accessible-heading-structure/" },
    { type: "ACT", link: "https://act-rules.github.io/rules/047fe0" }
  ]
};
