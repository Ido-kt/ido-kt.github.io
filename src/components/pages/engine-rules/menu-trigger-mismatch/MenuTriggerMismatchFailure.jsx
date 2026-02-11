import React from "react";
import EngineIssueFailure from "../../../layout/engineIssueFailure";

const MenuTriggerMismatchFailure = () => {
  const ruleId = "menu-trigger-mismatch";
  const title = `Menu trigger buttons/links should be tagged properly`;
  const description = `Menu trigger buttons/links should have \\`;
  const helpText = `Use the \\`;
  const fixSteps = [
  "Review the HTML structure",
  "Apply proper accessibility attributes",
  "Test with screen readers"
  ];
  const htmlExamples = [
  { filename: "button within nav with aria expanded without aria haspopup without aria controls", content: `<nav>
  <ul>
    <li>
      <button id="sub-menu-button" aria-expanded="false">Menu</button>
      <ul id="sub-menu">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
      </ul>
    </li>
  </ul>
</nav>` },
  { filename: "button within nav with aria haspopup with aria controls without aria expanded", content: `<nav>
  <ul>
    <li>
      <button id="sub-menu-button" aria-haspopup="true" aria-controls="sub-menu">Menu</button>
      <ul id="sub-menu">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
      </ul>
    </li>
  </ul>
</nav>` },
  { filename: "button within nav without aria haspopup with aria controls with aria expanded", content: `<nav>
  <ul>
    <li>
      <button id="sub-menu-button" aria-expanded="false" aria-controls="sub-menu">Menu</button>
      <ul id="sub-menu">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
      </ul>
    </li>
  </ul>
</nav>` },
  { filename: "menu trigger without aria expanded", content: `<div data-enable-parallax="0" data-parallax-speed="0.5" data-background-images="{}" data-video-fallback-src="" data-element="inner" data-pb-style="EM2MYR0">
  <div data-content-type="html" data-appearance="default" data-element="main" data-pb-style="PYTK9WD" data-decoded="true">
    <ul class="menuTop" id="topmenu">
      <li>
        <a href="/about-hoffmaster" id="about-hoffmaster">About</a>
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
  { filename: "menu trigger without aria haspopup and without aria expanded", content: `<div data-enable-parallax="0" data-parallax-speed="0.5" data-background-images="{}" data-video-fallback-src="" data-element="inner" data-pb-style="EM2MYR0">
  <div data-content-type="html" data-appearance="default" data-element="main" data-pb-style="PYTK9WD" data-decoded="true">
    <ul class="menuTop" id="topmenu">
      <li>
        <a href="/about-hoffmaster" id="about-hoffmaster" aria-haspopup="menu">About</a>
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
  { filename: "menu trigger without aria haspopup", content: `<div data-enable-parallax="0" data-parallax-speed="0.5" data-background-images="{}" data-video-fallback-src="" data-element="inner" data-pb-style="EM2MYR0">
  <div data-content-type="html" data-appearance="default" data-element="main" data-pb-style="PYTK9WD" data-decoded="true">
    <ul class="menuTop" id="topmenu">
      <li>
        <a href="/about-hoffmaster" id="about-hoffmaster" aria-expanded="true">About</a>
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
  { filename: "perceivable menu triggger not compliant", content: `<nav id="TableOfContents">
  <ul>
    <li><a href="#overview" class="">Overview</a></li>
    <li><a href="#accessibility" class="">Accessibility</a></li>
    <li>
      <a href="#examples" class="">Examples</a>
      <ul>
        <li><a href="#single-button" class="">Single button</a></li>
        <li><a href="#split-button" class="">Split button</a></li>
      </ul>
    </li>
    <li><a href="#sizing" class="">Sizing</a></li>
    <li><a href="#dark-dropdowns" class="">Dark dropdowns</a></li>
    <li>
      <a aria-expanded="true" id="test-subject" href="#directions" class="">Directions</a>
      <ul>
        <li><a href="#centered" class="">Centered</a></li>
        <li><a href="#dropup" class="">Dropup</a></li>
        <li><a href="#dropup-centered" class="">Dropup centered</a></li>
        <li><a href="#dropend" class="">Dropend</a></li>
        <li><a href="#dropstart" class="">Dropstart</a></li>
      </ul>
    </li>
    <li>
      <a href="#menu-items">Menu items</a>
      <ul>
        <li><a href="#active">Active</a></li>
        <li><a href="#disabled">Disabled</a></li>
      </ul>
    </li>
    <li>
      <a href="#menu-alignment">Menu alignment</a>
      <ul>
        <li><a href="#responsive-alignment">Responsive alignment</a></li>
        <li><a href="#alignment-options">Alignment options</a></li>
      </ul>
    </li>
    <li>
      <a href="#menu-content">Menu content</a>
      <ul>
        <li><a href="#headers">Headers</a></li>
        <li><a href="#dividers">Dividers</a></li>
        <li><a href="#text">Text</a></li>
        <li><a href="#forms">Forms</a></li>
      </ul>
    </li>
    <li>
      <a href="#dropdown-options">Dropdown options</a>
      <ul>
        <li><a href="#auto-close-behavior">Auto close behavior</a></li>
      </ul>
    </li>
    <li>
      <a href="#css">CSS</a>
      <ul>
        <li><a href="#variables">Variables</a></li>
        <li><a href="#sass-variables">Sass variables</a></li>
        <li><a href="#sass-mixins">Sass mixins</a></li>
      </ul>
    </li>
    <li>
      <a href="#usage">Usage</a>
      <ul>
        <li><a href="#via-data-attributes">Via data attributes</a></li>
        <li><a href="#via-javascript">Via JavaScript</a></li>
        <li>
          <a href="#options">Options</a>
          <ul>
            <li>
              <a href="#using-function-with-popperconfig">Using function with <code>popperConfig</code></a>
            </li>
          </ul>
        </li>
        <li><a href="#methods">Methods</a></li>
        <li><a href="#events">Events</a></li>
      </ul>
    </li>
  </ul>
</nav>` }
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

export default MenuTriggerMismatchFailure;
