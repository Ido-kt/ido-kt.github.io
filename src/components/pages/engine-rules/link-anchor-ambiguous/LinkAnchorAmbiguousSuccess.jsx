import React from "react";
import EngineIssueSuccess from "../../../layout/engineIssueSuccess";

const LinkAnchorAmbiguousSuccess = () => {
  const ruleId = "link-anchor-ambiguous";
  const title = `Ambiguous links should have additional descriptions for screen readers.`;
  const description = `Ambiguous links like "Learn More", "Shop Now" and "Start Here" are often used as a call to action. However, screen-reader users, while using link navigation, do not interact with content above or below the link and therefore don\\\\`;
  const helpText = `Add a screen-reader only text which gives additional context to the destination of the link. You can use the \\`;
  const bestPractices = [
  "Follow proper HTML semantics",
  "Ensure screen reader compatibility",
  "Test with assistive technologies"
  ];
  const htmlExamples = [
  { filename: "link navigation", content: `<!-- Navigation links should not be audited at all here -->
<a href="/homepage" aria-label="this link leads to the homepage">click here</a>` },
  { filename: "link with ambiguous content and good aria label", content: `<a href="#faq" aria-label="this link leads to the FAQ section">click here</a>

<section id="faq"></section>` },
  { filename: "link with image content and good alt", content: `<a href="#faq"><img alt="image for link that leads to the FAQ section" /></a>

<section id="faq"></section>` },
  { filename: "link with no content", content: `<!-- Empty link are inapplicable -->
<a href="#plans"></a>

<section id="plans"></section>` },
  { filename: "link with non ambiguous long content", content: `<a href="#faq">jump tp frequently asked question</a>

<section id="faq"></section>` },
  { filename: "link with non ambiguous short content", content: `<a href="#plans">go to see plans</a>

<section id="plans"></section>` }
  ];

  return (
    <EngineIssueSuccess
      ruleId={ruleId}
      title={title}
      description={description}
      helpText={helpText}
      bestPractices={bestPractices}
      htmlExamples={htmlExamples}
    />
  );
};

export default LinkAnchorAmbiguousSuccess;
