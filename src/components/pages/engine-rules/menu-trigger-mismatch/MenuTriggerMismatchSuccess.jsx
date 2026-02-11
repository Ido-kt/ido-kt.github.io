import React from "react";
import EngineIssueSuccess from "../../../layout/engineIssueSuccess";

const MenuTriggerMismatchSuccess = () => {
  const ruleId = "menu-trigger-mismatch";
  const title = `Menu trigger buttons/links should be tagged properly`;
  const description = `Menu trigger buttons/links should have \\`;
  const helpText = `Use the \\`;
  const bestPractices = [
  "Follow proper HTML semantics",
  "Ensure screen reader compatibility",
  "Test with assistive technologies"
  ];
  const htmlExamples = [
  { filename: "anchor within nav with aria haspopup with aria controls with aria expanded", content: `<style>
  #sub-menu {
    display: none;
  }

  li #test-subject[aria-expanded="true"] + #sub-menu {
    display: block;
  }
</style>

<nav>
  <ul>
    <li>
      <a id="test-subject" aria-haspopup="true" aria-expanded="false" aria-controls="sub-menu">Menu</a>
      <ul id="sub-menu">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
      </ul>
    </li>
  </ul>
</nav>` },
  { filename: "button within nav with aria haspopup with aria controls with aria expanded", content: `<style>
  #sub-menu {
    display: none;
  }

  li #test-subject[aria-expanded="true"] + #sub-menu {
    display: block;
  }
</style>

<nav>
  <ul>
    <li>
      <button id="test-subject" aria-haspopup="true" aria-expanded="false" aria-controls="sub-menu">Menu</button>
      <ul id="sub-menu">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
      </ul>
    </li>
  </ul>
</nav>` },
  { filename: "menu trigger with aria haspopup and with aria expanded", content: `<div data-enable-parallax="0" data-parallax-speed="0.5" data-background-images="{}" data-video-fallback-src="" data-element="inner" data-pb-style="EM2MYR0">
  <div data-content-type="html" data-appearance="default" data-element="main" data-pb-style="PYTK9WD" data-decoded="true">
    <ul class="menuTop" id="topmenu">
      <li>
        <a href="/about-hoffmaster" id="about-hoffmaster" aria-haspopup="menu" aria-expanded="true">About</a>
        <ul id="topmenudropdown">
          <li><a href="/history">History</a></li>
          <li><a href="/social-responsibility">Social Responsibility</a></li>
          <li><a href="/faq">FAQ</a></li>
          <li><a href="/terms-conditions">Terms and Conditions</a></li>
        </ul>
      </li>
      <li><a href="https://us231.dayforcehcm.com/CandidatePortal/en-US/hoffmaster" target=" _blank">Employment</a></li>
      <li><a href="/customer-care">Customer Care</a></li>
    </ul>
  </div>
</div>` },
  { filename: "remediated menu trigger", content: `<nav>
  <ul>
    <li>
      <button id="sub-menu-button" aria-expanded="false" aria-controls="sub-menu" aria-haspopup="menu">Menu</button>
      <ul id="sub-menu">
        <li><a href="link://#">Home</a></li>
        <li><a href="link://#">About</a></li>
      </ul>
    </li>
  </ul>
</nav>` },
  { filename: "simple nav without sub menu", content: `<nav>
  <ul id="menu">
    <li><a href="#">Home</a></li>
    <li><a href="#">About</a></li>
  </ul>
</nav>` }
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

export default MenuTriggerMismatchSuccess;
