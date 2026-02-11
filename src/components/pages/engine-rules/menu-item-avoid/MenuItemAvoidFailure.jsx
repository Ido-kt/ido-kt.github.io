import React from "react";
import EngineIssueFailure from "../../../layout/engineIssueFailure";

const MenuItemAvoidFailure = () => {
  const ruleId = "menu-item-avoid";
  const title = `Avoid using role="menuitem" for web navigation links`;
  const description = `In most cases, using ARIA menu roles within a web page can negatively impact screen reader users, especially those using JAWS. role="menuitem" should be used for menu items in menu types that function like those found in desktop applications.`;
  const helpText = `Use standard lists with links and buttons (or custom buttons with role="button") and remove role="menuitem".`;
  const fixSteps = [
  "Review the HTML structure",
  "Apply proper accessibility attributes",
  "Test with screen readers"
  ];
  const htmlExamples = [
  { filename: "multiple navs containing menu items", content: `<nav>
  <ul>
    <li><a href="#">Home</a></li>
    <li><a id="test-subject-1" role="menuitem" href="#">About</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
</nav>
<nav>
  <ul>
    <li><a href="#">Home</a></li>
    <li><a id="test-subject-2" role="menuitem" href="#">About</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
</nav>` },
  { filename: "multiple role navigations containing menu items", content: `<div role="navigation">
  <ul>
    <li><a href="#">Home</a></li>
    <li><a id="test-subject-1" role="menuitem" href="#">About</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
</div>
<div role="navigation">
  <ul>
    <li><a href="#">Home</a></li>
    <li><a id="test-subject-2" role="menuitem" href="#">About</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
</div>` },
  { filename: "nav and role navigation containing menu items", content: `<nav>
  <ul>
    <li><a href="#">Home</a></li>
    <li><a id="test-subject-1" role="menuitem" href="#">About</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
</nav>
<div role="navigation">
  <ul>
    <li><a href="#">Home</a></li>
    <li><a id="test-subject-2" role="menuitem" href="#">About</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
</div>` },
  { filename: "nav containing multiple menu items", content: `<nav>
  <ul>
    <li><a href="#">Home</a></li>
    <li><a id="test-subject-1" role="menuitem" href="#">About</a></li>
    <li><a id="test-subject-2" role="menuitem" href="#">Contact</a></li>
  </ul>
</nav>` },
  { filename: "nav containing single menu item", content: `<nav>
  <ul>
    <li><a href="#">Home</a></li>
    <li><a id="test-subject" role="menuitem" href="#">About</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
</nav>` },
  { filename: "role navigation containing multiple menu items", content: `<nav>
  <ul>
    <li><a href="#">Home</a></li>
    <li><a id="test-subject-1" role="menuitem" href="#">About</a></li>
    <li><a id="test-subject-2" role="menuitem" href="#">Contact</a></li>
  </ul>
</nav>` },
  { filename: "role navigation containing single menu item", content: `<div role="navigation">
  <ul>
    <li><a href="#">Home</a></li>
    <li><a id="test-subject" role="menuitem" href="#">About</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
</div>` }
  ];

  return (
    <EngineIssueFailure
      ruleId={ruleId}
      title={title}
      description={description}
      helpText={helpText}
      fixSteps={fixSteps}
      htmlExamples={htmlExamples}
    />
  );
};

export default MenuItemAvoidFailure;
