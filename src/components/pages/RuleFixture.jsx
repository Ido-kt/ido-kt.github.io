import * as React from "react";

/**
 * accessFlow rule fixture.
 *
 * Every element below trips exactly one auditor rule and carries a FIX comment
 * describing the IN-PLACE repair. Fixes must never delete the element: removing
 * it sends the audit down the "irrelevant" path instead of the "passes now"
 * path, which is the path under test.
 *
 * All styles are scoped under .aflw-fixture so nothing leaks into the rest of
 * the app (a stray small font or low-contrast rule elsewhere would create
 * issues on every other page).
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
.aflw-fixture .tiny-target {
  display: inline-block; width: 16px; height: 16px; background: #06c;
}
`;

export default function RuleFixture() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />

      {/* FIX mainLandmark: add role="main" to this wrapper */}
      <div className="aflw-fixture" id="content">
        {/* FIX skipLinks: point href at #content, which exists */}
        <a href="#no-such-anchor">Skip to content</a>

        {/* ============ keyboard ============ */}
        <section>
          <h2>Keyboard</h2>

          {/* FIX brokenTabindex / inlinePopupFocus: tabIndex={0} */}
          <div tabIndex={3}>Positive tabindex container</div>

          {/* FIX noninteractiveTabindex: add role="button" */}
          <span tabIndex={0}>Focusable but not interactive</span>

          {/* FIX noticeableFocus / enterClickability: remove outline none */}
          <a href="#content" style={{ outline: "none" }}>
            Link with suppressed focus ring
          </a>
        </section>

        {/* ============ headings ============ */}
        <section>
          {/* FIX multipleMainHeadings: hide the second h1 (display none) */}
          <h1>Rule fixture page</h1>
          <h1>Second top-level heading</h1>

          {/* FIX longHeadings: shorten the text under 160 chars */}
          <h3>
            This heading is deliberately far longer than the one hundred and sixty character ceiling that the auditor
            applies to headings, so that it is reported as a long heading violation on every scan of this page
          </h3>

          {/* FIX untaggedHeadings: add role="heading" aria-level={2} */}
          <div style={{ fontSize: "28px", fontWeight: 700 }}>Looks Like A Heading</div>
        </section>

        {/* ============ readability ============ */}
        <section>
          <h2>Readability</h2>

          {/* FIX fontSizes: fontSize 13px */}
          <p style={{ fontSize: "11px" }}>Text below the minimum font size.</p>

          {/* FIX letterSpacing: letterSpacing -1px */}
          <p style={{ letterSpacing: "-3px" }}>Text with negative letter spacing.</p>

          {/* FIX colorContrast: color #333 */}
          <p style={{ color: "#bbbbbb", background: "#ffffff" }}>Low contrast paragraph text.</p>
        </section>

        {/* ============ graphics ============ */}
        <section>
          <h2>Graphics</h2>

          {/* FIX altText: add alt="accessFlow logo" */}
          {/* eslint-disable-next-line jsx-a11y/alt-text */}
          <img src="/logo192.png" width="64" height="64" />

          {/* FIX decorativeContent: add aria-label="Decorative star" */}
          <i className="icon" />

          {/* FIX svgContent: add <title>Circle</title> as first child */}
          <svg width="40" height="40" viewBox="0 0 40 40">
            <circle cx="20" cy="20" r="18" fill="#06c" />
          </svg>

          {/* FIX backgroundImages: add <span className="sr-only" role="img">Hero banner</span> as FIRST child */}
          <div className="bg-hero" />

          {/* FIX figureSetup: add <figcaption>Quarterly revenue</figcaption> */}
          <figure>
            <p>Quarterly revenue climbed 12% year over year.</p>
          </figure>
        </section>

        {/* ============ clickables ============ */}
        <section>
          <h2>Clickables</h2>

          {/* FIX emptyLinks: add alt="Home" to the nested image */}
          {/* eslint-disable-next-line jsx-a11y/alt-text */}
          <a href="#content">
            <img src="/logo192.png" width="32" height="32" />
          </a>

          {/* FIX linkContext: change the text to "Home" */}
          <a href="/">Click here</a>

          {/* FIX buttonLabels: add aria-label="Submit form" */}
          <button type="button" style={{ width: "40px", height: "32px" }} />

          {/* FIX buttonRoles: add role="button" */}
          <span className="btn-like" tabIndex={0}>
            Save changes
          </span>

          {/* FIX newWindowLinks: add aria-label="Example site, opens in a new tab" */}
          <a href="https://example.com" target="_blank" rel="noopener noreferrer">
            Example site
          </a>

          {/* FIX ambiguousLinks: add aria-label="Read more about pricing plans" */}
          <a href="#content">Read more</a>

          {/* FIX targetSize: widen to 44x44 */}
          <a href="#content" className="tiny-target" aria-label="Tiny target">
            {" "}
          </a>
        </section>

        {/* ============ errors ============ */}
        <section>
          <h2>ARIA / errors</h2>

          {/* FIX brokenAriaReference: point aria-labelledby at "real-label" */}
          <div aria-labelledby="missing-label-id" tabIndex={0}>
            Region with a dangling label reference
          </div>
          <span id="real-label">Account settings</span>

          {/* FIX brokenAriaLabels: change aria-label to "Send request" */}
          <button type="button" aria-label="Submit">
            Send request
          </button>

          {/* FIX titleMisuse: add aria-label="More information" */}
          <span title="More information">i</span>

          {/* FIX ariaLabelMisuse: use aria-label="Promotional banner text" */}
          <span aria-label="Banner">Promotional banner text</span>

          {/* FIX brokenList: add role="list" to this wrapper */}
          <div>
            <div role="listitem">Orphaned list item</div>
          </div>

          {/* FIX emptyList: add a second <li> */}
          <ul>
            <li>Only child item</li>
          </ul>

          {/* FIX fakeHiddenContent: add aria-hidden="true" */}
          <div style={{ opacity: 0, height: "20px" }}>Visually hidden promotional copy</div>

          {/* GROUP B probe - FIX marquee: display none */}
          <marquee>Scrolling announcement</marquee>

          {/* GROUP B probe - FIX roleApplications: change role to "region" */}
          <div role="application" tabIndex={0}>
            Application role container
          </div>

          {/* GROUP B probe - FIX loadAutofocus: remove autoFocus */}
          {/* eslint-disable-next-line jsx-a11y/no-autofocus */}
          <input type="text" autoFocus aria-label="Autofocused field" />
        </section>

        {/* ============ forms ============ */}
        <section>
          <h2>Forms</h2>

          {/* FIX searchFormTagging: add role="search" to this form */}
          <form action="#">
            <input type="text" name="search" placeholder="Search" aria-label="Search" />
          </form>

          <form action="#">
            {/* FIX fieldLabel: add aria-label="Full name" */}
            <input type="text" name="fullname" />

            {/* FIX fieldRequired: add the required attribute */}
            <label htmlFor="email-field">Email *</label>
            <input type="email" id="email-field" name="email" />

            {/* FIX missingFormButton: change type to "submit" */}
            <button type="button">Send</button>
          </form>
        </section>

        {/* ============ tables ============ */}
        <section>
          <h2>Tables</h2>

          {/* FIX headlessTables: add role="presentation" to this table */}
          <table>
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

          {/* FIX emptyTableHeaders: put text in the empty th */}
          <table>
            <tbody>
              <tr>
                <th>Region</th>
                <th />
              </tr>
              <tr>
                <td>EMEA</td>
                <td>42</td>
              </tr>
            </tbody>
          </table>

          {/* FIX nestedTables: add role="presentation" to the INNER table */}
          <table>
            <tbody>
              <tr>
                <td>
                  <table>
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

          {/* FIX iframeLabeling: add aria-label="Embedded map" */}
          {/* eslint-disable-next-line jsx-a11y/iframe-has-title */}
          <iframe src="about:blank" width="200" height="120" />

          {/* FIX articleSetup: add role="presentation" */}
          <article>Short article body.</article>

          {/* FIX salePrices: add <span className="sr-only">Discounted price:</span> before the sale price */}
          <p>
            <del>$99.00</del> $79.00
          </p>

          {/* FIX userRating: add <span className="sr-only">4.5 out of 5</span> inside */}
          <div>
            <span itemProp="ratingValue">4.5</span>
          </div>
        </section>

        {/* ============ carousels ============ */}
        <section>
          <h2>Carousel</h2>

          {/* FIX carouselLabeling: add role="region" aria-label="Featured products" */}
          {/* FIX liveCarousels: remove aria-live from the slide track */}
          <div className="carousel">
            <div aria-live="polite">
              <div className="slide">
                Slide one <img src="/logo192.png" width="32" height="32" alt="Product one" />
              </div>
              <div className="slide" style={{ display: "none" }}>
                Slide two
              </div>
            </div>
            {/* FIX carouselArrows: change the text to "Next" */}
            <a href="#content" className="next">
              &rsaquo;
            </a>
            {/* FIX carouselPagination: add aria-label="Go to slide 1" */}
            <a href="#content" className="owl-dot">
              {" "}
            </a>
          </div>
        </section>

        {/* ============ navigation ============ */}
        <section>
          <h2>Navigation</h2>

          {/* FIX navigationTagging: add aria-label="Main" */}
          <nav>
            <ul>
              <li>
                <a href="#content">Products</a>
              </li>
              {/* FIX missingNavItems: wrap the text in <a href="#content"> */}
              <li>Services</li>
              <li>
                {/* FIX submenuState: add aria-expanded="false" */}
                <a href="#content" className="has-submenu">
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

          {/* FIX breadcrumbs: add aria-label="Breadcrumb" */}
          <nav className="breadcrumbs">
            <ol>
              <li>
                <a href="#content">Home</a>
              </li>
              <li>
                <a href="#content">Docs</a>
              </li>
            </ol>
          </nav>

          {/* GROUP B probe - FIX nestedNavigation: change the inner <nav> to a <div> */}
          <nav aria-label="Outer">
            <nav aria-label="Inner">
              <a href="#content">Inner nav link</a>
            </nav>
          </nav>

          {/* GROUP B probe - FIX brokenNavTagging: change role="menu" to role="list" */}
          <div role="menu">
            <a href="#content">Menu entry without menuitem role</a>
          </div>
        </section>

        {/* FIX footerLandmark: add role="contentinfo" */}
        <div className="site-footer">
          <p>Fixture footer &mdash; accessFlow rule coverage page.</p>
        </div>
      </div>
    </>
  );
}
