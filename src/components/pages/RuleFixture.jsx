import * as React from "react";

/**
 * accessFlow rule fixture — FIXED state.
 *
 * Every FIXED comment marks a repair applied IN PLACE: an attribute, style, or
 * text change. No element was deleted and no tag name was changed, so every
 * audit's stored selector still matches. That matters: a deleted element sends
 * the audit down the "irrelevant" path, which already works and would prove
 * nothing. The path under test is "element still present, now passes".
 *
 * To return to the broken state, reverse each FIXED comment.
 *
 * All styles stay scoped under .aflw-fixture so nothing leaks into the rest of
 * the app.
 */

const css = `
.aflw-fixture {
  font-family: system-ui, sans-serif;
  font-size: 16px;
  line-height: 1.5;
  color: #111;
  background: #fff;
  letter-spacing: normal;
  padding: 24px;
}
.aflw-fixture section { border-top: 1px solid #ccc; padding: 16px 0; }
.aflw-fixture .sr-only {
  position: absolute; width: 1px; height: 1px;
  overflow: hidden; clip: rect(0 0 0 0); white-space: nowrap;
}
.aflw-fixture .bg-hero {
  background-image: url('/logo192.png');
  background-size: cover; width: 240px; height: 120px;
}
.aflw-fixture .icon {
  display: inline-block; width: 24px; height: 24px; background: #444;
}
.aflw-fixture .btn-like {
  display: inline-block; padding: 8px 16px; background: #eee; cursor: pointer;
}
.aflw-fixture .carousel { border: 1px solid #999; padding: 12px; width: 320px; }
.aflw-fixture .carousel .next,
.aflw-fixture .carousel .owl-dot {
  display: inline-block; padding: 6px 10px; border: 1px solid #666;
}
.aflw-fixture table { border-collapse: collapse; margin: 8px 0; }
.aflw-fixture td, .aflw-fixture th { border: 1px solid #999; padding: 6px 10px; }
/* FIXED targetSize: 16x16 -> 44x44 (class kept, so the selector still matches) */
.aflw-fixture .tiny-target {
  display: inline-block; width: 44px; height: 44px; background: #06c;
}
`;

export default function RuleFixture() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />

      {/* FIXED mainLandmark: added role="main" */}
      <div className="aflw-fixture" id="content" role="main">
        {/* FIXED skipLinks: now points at #content, which exists */}
        <a href="#content">Skip to content</a>

        {/* ============ keyboard ============ */}
        <section>
          <h2>Keyboard</h2>

          {/* FIXED brokenTabindex / inlinePopupFocus: 3 -> 0 */}
          <div tabIndex={0}>Positive tabindex container</div>

          {/* FIXED noninteractiveTabindex: added role="button" */}
          <span tabIndex={0} role="button">
            Focusable but not interactive
          </span>

          {/* FIXED noticeableFocus / enterClickability: outline:none removed */}
          <a href="#content">Link with suppressed focus ring</a>
        </section>

        {/* ============ headings ============ */}
        <section>
          <h1>Rule fixture page</h1>
          {/* FIXED multipleMainHeadings: second h1 hidden, element retained */}
          <h1 style={{ display: "none" }}>Second top-level heading</h1>

          {/* FIXED longHeadings: shortened under 160 chars */}
          <h3>Deliberately long heading, now shortened</h3>

          {/* FIXED untaggedHeadings: added role="heading" aria-level */}
          <div style={{ fontSize: "28px", fontWeight: 700 }} role="heading" aria-level={2}>
            Looks Like A Heading
          </div>
        </section>

        {/* ============ readability ============ */}
        <section>
          <h2>Readability</h2>

          {/* FIXED fontSizes: 11px -> 13px */}
          <p style={{ fontSize: "13px" }}>Text below the minimum font size.</p>

          {/* FIXED letterSpacing: -3px -> -1px */}
          <p style={{ letterSpacing: "-1px" }}>Text with negative letter spacing.</p>

          {/* FIXED colorContrast: #bbbbbb -> #333333 */}
          <p style={{ color: "#333333", background: "#ffffff" }}>Low contrast paragraph text.</p>
        </section>

        {/* ============ graphics ============ */}
        <section>
          <h2>Graphics</h2>

          {/* FIXED altText: alt added */}
          <img src="/logo192.png" width="64" height="64" alt="accessFlow logo" />

          {/* FIXED decorativeContent: aria-label added */}
          <i className="icon" aria-label="Decorative star" />

          {/* FIXED svgContent: <title> added as first child */}
          <svg width="40" height="40" viewBox="0 0 40 40">
            <title>Circle</title>
            <circle cx="20" cy="20" r="18" fill="#06c" />
          </svg>

          {/* FIXED backgroundImages: sr-only role="img" added as first child */}
          <div className="bg-hero">
            <span className="sr-only" role="img">
              Hero banner
            </span>
          </div>

          {/* FIXED figureSetup: figcaption added */}
          <figure>
            <p>Quarterly revenue climbed 12% year over year.</p>
            <figcaption>Quarterly revenue</figcaption>
          </figure>
        </section>

        {/* ============ clickables ============ */}
        <section>
          <h2>Clickables</h2>

          {/* FIXED emptyLinks: alt added to the nested image */}
          <a href="#content">
            <img src="/logo192.png" width="32" height="32" alt="Home" />
          </a>

          {/* FIXED linkContext: text now matches the Home preset */}
          <a href="/">Home</a>

          {/* FIXED buttonLabels: aria-label added */}
          <button type="button" style={{ width: "40px", height: "32px" }} aria-label="Submit form" />

          {/* FIXED buttonRoles: role="button" added */}
          <span className="btn-like" tabIndex={0} role="button">
            Save changes
          </span>

          {/* FIXED newWindowLinks: aria-label announces the new tab */}
          <a
            href="https://example.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Example site, opens in a new tab"
          >
            Example site
          </a>

          {/* FIXED ambiguousLinks: aria-label longer than the visible text */}
          <a href="#content" aria-label="Read more about pricing plans">
            Read more
          </a>

          {/* FIXED targetSize: see .tiny-target in the stylesheet (44x44) */}
          <a href="#content" className="tiny-target" aria-label="Tiny target">
            {" "}
          </a>
        </section>

        {/* ============ errors ============ */}
        <section>
          <h2>ARIA / errors</h2>

          {/* FIXED brokenAriaReference: now points at an element that exists */}
          <div aria-labelledby="real-label" tabIndex={0}>
            Region with a dangling label reference
          </div>
          <span id="real-label">Account settings</span>

          {/* FIXED brokenAriaLabels: aria-label now contains the visible text */}
          <button type="button" aria-label="Send request">
            Send request
          </button>

          {/* FIXED titleMisuse: aria-label added */}
          <span title="More information" aria-label="More information">
            i
          </span>

          {/* FIXED ariaLabelMisuse: aria-label now matches the visible text */}
          <span aria-label="Promotional banner text">Promotional banner text</span>

          {/* FIXED brokenList: role="list" added to the wrapper */}
          <div role="list">
            <div role="listitem">Orphaned list item</div>
          </div>

          {/* FIXED emptyList: second item added */}
          <ul>
            <li>Only child item</li>
            <li>Second item</li>
          </ul>

          {/* FIXED fakeHiddenContent: aria-hidden added */}
          <div style={{ opacity: 0, height: "20px" }} aria-hidden="true">
            Visually hidden promotional copy
          </div>

          {/* GROUP B probe - FIXED marquee: hidden, element retained */}
          <marquee style={{ display: "none" }}>Scrolling announcement</marquee>

          {/* GROUP B probe - FIXED roleApplications: application -> region */}
          <div role="region" aria-label="Application container" tabIndex={0}>
            Application role container
          </div>

          {/* GROUP B probe - FIXED loadAutofocus: autoFocus removed */}
          <input type="text" aria-label="Autofocused field" />
        </section>

        {/* ============ forms ============ */}
        <section>
          <h2>Forms</h2>

          {/* FIXED searchFormTagging: role="search" added */}
          <form action="#" role="search">
            <input type="text" name="search" placeholder="Search" aria-label="Search" />
          </form>

          <form action="#">
            {/* FIXED fieldLabel: aria-label added */}
            <input type="text" name="fullname" aria-label="Full name" />

            {/* FIXED fieldRequired: required added */}
            <label htmlFor="email-field">Email *</label>
            <input type="email" id="email-field" name="email" required />

            {/* FIXED missingFormButton: type button -> submit */}
            <button type="submit">Send</button>
          </form>
        </section>

        {/* ============ tables ============ */}
        <section>
          <h2>Tables</h2>

          {/* FIXED headlessTables: role="presentation" added */}
          <table role="presentation">
            <tbody>
              <tr>
                <td>Plan</td>
                <td>Price</td>
              </tr>
              <tr>
                <td>Basic</td>
                <td>$10</td>
              </tr>
            </tbody>
          </table>

          <table>
            <tbody>
              <tr>
                <th>Region</th>
                {/* FIXED emptyTableHeaders: text added */}
                <th>Count</th>
              </tr>
              <tr>
                <td>EMEA</td>
                <td>42</td>
              </tr>
            </tbody>
          </table>

          <table>
            <tbody>
              <tr>
                <td>
                  {/* FIXED nestedTables: role="presentation" on the inner table */}
                  <table role="presentation">
                    <tbody>
                      <tr>
                        <td>Nested cell</td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* ============ context ============ */}
        <section>
          <h2>Context</h2>

          {/* FIXED iframeLabeling: aria-label added */}
          <iframe src="about:blank" width="200" height="120" aria-label="Embedded map" title="Embedded map" />

          {/* FIXED articleSetup: role="presentation" added */}
          <article role="presentation">Short article body.</article>

          {/* FIXED salePrices: sr-only prefix added */}
          <p>
            <span className="sr-only">Discounted price:</span>
            <del>$99.00</del> $79.00
          </p>

          {/* FIXED userRating: sr-only rating text added */}
          <div>
            <span itemProp="ratingValue">4.5</span>
            <span className="sr-only">4.5 out of 5</span>
          </div>
        </section>

        {/* ============ carousels ============ */}
        <section>
          <h2>Carousel</h2>

          {/* FIXED carouselLabeling: role="region" + aria-label added */}
          <div className="carousel" role="region" aria-label="Featured products">
            {/* FIXED liveCarousels: aria-live removed */}
            <div>
              <div className="slide">
                Slide one <img src="/logo192.png" width="32" height="32" alt="Product one" />
              </div>
              <div className="slide" style={{ display: "none" }}>
                Slide two
              </div>
            </div>
            {/* FIXED carouselArrows: text now a recognised keyword */}
            <a href="#content" className="next">
              Next
            </a>
            {/* FIXED carouselPagination: aria-label added */}
            <a href="#content" className="owl-dot" aria-label="Go to slide 1">
              {" "}
            </a>
          </div>
        </section>

        {/* ============ navigation ============ */}
        <section>
          <h2>Navigation</h2>

          {/* FIXED navigationTagging / navigationLabel: aria-label added */}
          <nav aria-label="Main">
            <ul>
              <li>
                <a href="#content">Products</a>
              </li>
              {/* FIXED missingNavItems: text wrapped in a link */}
              <li>
                <a href="#content">Services</a>
              </li>
              <li>
                {/* FIXED submenuState: aria-expanded added */}
                <a href="#content" className="has-submenu" aria-expanded="false">
                  Resources
                </a>
                <ul>
                  <li>
                    <a href="#content">Guides</a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>

          {/* FIXED breadcrumbs: aria-label added */}
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <ol>
              <li>
                <a href="#content">Home</a>
              </li>
              <li>
                <a href="#content">Docs</a>
              </li>
            </ol>
          </nav>

          {/* GROUP B probe - FIXED nestedNavigation: inner nav given role="presentation".
              The <nav> tag is kept deliberately so the stored selector still matches. */}
          <nav aria-label="Outer">
            <nav role="presentation">
              <a href="#content">Inner nav link</a>
            </nav>
          </nav>

          {/* GROUP B probe - FIXED brokenNavTagging: role menu -> list */}
          <div role="list">
            <a href="#content">Menu entry without menuitem role</a>
          </div>
        </section>

        {/* FIXED footerLandmark: role="contentinfo" added */}
        <div className="site-footer" role="contentinfo">
          <p>Fixture footer &mdash; accessFlow rule coverage page.</p>
        </div>
      </div>
    </>
  );
}
