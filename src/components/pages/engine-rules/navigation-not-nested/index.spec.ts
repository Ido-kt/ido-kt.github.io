import { NavigationNotNested } from ".";
import type { ValidationMethodArguments } from "../../../test/unit/helpers/validation-method-arguments";
import validationMethodArguments from "../../../test/unit/helpers/validation-method-arguments";

describe("NavigationNotNested Rule Validation", () => {
  let validateMethodArguments: ValidationMethodArguments;

  beforeEach(() => {
    validateMethodArguments = validationMethodArguments();
    const { document } = validateMethodArguments;
    // Prepare a clean state for the document
    document.head.innerHTML = "";
  });

  it("should fail if nav is nested inside another nav", async () => {
    const { document, response, classifier } = validateMethodArguments;

    document.body.innerHTML = `
      <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li>
              <a href="/about/">About Us</a>
              <!-- Submenu for "About Us" -->
              <nav id="nested-nav">
                <ul>
                  <li><a href="/about/history">Our History</a></li>
                  <li><a href="/about/team">Our Team</a></li>
                  <li><a href="/about/mission">Our Mission</a></li>
                </ul>
              </nav>
            </li>
            <li><a href="/services/">Services</a></li>
            <li><a href="/contact/">Contact</a></li>
          </ul>
      </nav>
    `;
    (classifier.getParent as jest.Mock).mockReturnValue(document.querySelector("nav"));
    const nestedNav = document.querySelector<HTMLElement>("#nested-nav");

    (classifier.getMatched as jest.Mock).mockReturnValueOnce([nestedNav]);

    await NavigationNotNested.validate(validateMethodArguments);

    expect(response.passedNodes).toEqual([]);
    expect(response.failedNodes).toEqual([nestedNav]);
  });

  it("should fail if role=navigation is nested inside a nav", async () => {
    const { document, response, classifier } = validateMethodArguments;
    (classifier.getParent as jest.Mock).mockResolvedValue(Promise.resolve(true));

    document.body.innerHTML = `
      <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li>
              <a href="/about/">About Us</a>
              <!-- Submenu for "About Us" -->
              <div id="nested-nav" role="navigation">
                <ul>
                  <li><a href="/about/history">Our History</a></li>
                  <li><a href="/about/team">Our Team</a></li>
                  <li><a href="/about/mission">Our Mission</a></li>
                </ul>
              </div>
            </li>
            <li><a href="/services/">Services</a></li>
            <li><a href="/contact/">Contact</a></li>
          </ul>
      </nav>
    `;

    const nestedNav = document.querySelector<HTMLElement>("#nested-nav");

    (classifier.getMatched as jest.Mock).mockReturnValueOnce([nestedNav]);

    await NavigationNotNested.validate(validateMethodArguments);

    expect(response.passedNodes).toEqual([]);
    expect(response.failedNodes).toEqual([nestedNav]);
  });

  it("should fail if role=navigation is nested inside a role=navigation", async () => {
    const { document, response, classifier } = validateMethodArguments;
    (classifier.getParent as jest.Mock).mockResolvedValue(Promise.resolve(true));

    document.body.innerHTML = `
      <div role="navigation">
          <ul>
            <li><a href="/">Home</a></li>
            <li>
              <a href="/about/">About Us</a>
              <!-- Submenu for "About Us" -->
              <div id="nested-nav" role="navigation">
                <ul>
                  <li><a href="/about/history">Our History</a></li>
                  <li><a href="/about/team">Our Team</a></li>
                  <li><a href="/about/mission">Our Mission</a></li>
                </ul>
              </div>
            </li>
            <li><a href="/services/">Services</a></li>
            <li><a href="/contact/">Contact</a></li>
          </ul>
      </div>
    `;

    const nestedNav = document.querySelector<HTMLElement>("#nested-nav");

    (classifier.getMatched as jest.Mock).mockReturnValueOnce([nestedNav]);

    await NavigationNotNested.validate(validateMethodArguments);

    expect(response.passedNodes).toEqual([]);
    expect(response.failedNodes).toEqual([nestedNav]);
  });

  it("should fail if nav is nested inside a role=navigation", async () => {
    const { document, response, classifier } = validateMethodArguments;
    (classifier.getParent as jest.Mock).mockResolvedValue(Promise.resolve(true));

    document.body.innerHTML = `
      <div role="navigation">
          <ul>
            <li><a href="/">Home</a></li>
            <li>
              <a href="/about/">About Us</a>
              <!-- Submenu for "About Us" -->
              <nav id="nested-nav">
                <ul>
                  <li><a href="/about/history">Our History</a></li>
                  <li><a href="/about/team">Our Team</a></li>
                  <li><a href="/about/mission">Our Mission</a></li>
                </ul>
              </nav>
            </li>
            <li><a href="/services/">Services</a></li>
            <li><a href="/contact/">Contact</a></li>
          </ul>
      </div>
    `;

    const nestedNav = document.querySelector<HTMLElement>("#nested-nav");

    (classifier.getMatched as jest.Mock).mockReturnValueOnce([nestedNav]);

    await NavigationNotNested.validate(validateMethodArguments);

    expect(response.passedNodes).toEqual([]);
    expect(response.failedNodes).toEqual([nestedNav]);
  });

  it("should fail if nav are nested inside a nav", async () => {
    const { document, response, classifier } = validateMethodArguments;
    (classifier.getParent as jest.Mock).mockResolvedValue(Promise.resolve(true));

    document.body.innerHTML = `
      <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li>
              <a href="/about/">About Us</a>
              <!-- Submenu for "About Us" -->
              <nav id="nested-nav1">
                <ul>
                  <li><a href="/about/history">Our History</a></li>
                  <li><a href="/about/team">Our Team</a></li>
                  <li>
                    <a href="/about/mission">Our Mission</a>
                    <nav id="nested-nav2">
                      <ul>
                        <li><a href="/about/mission/start">Our Beginning</a></li>
                        <li><a href="/about/mission/end">Our Goal</a></li>
                      </ul>
                    </nav>
                  </li>
                </ul>
              </nav>
            </li>
            <li><a href="/services/">Services</a></li>
            <li><a href="/contact/">Contact</a></li>
          </ul>
      </nav>
    `;

    const nestedNav1 = document.querySelector<HTMLElement>("#nested-nav1");
    const nestedNav2 = document.querySelector<HTMLElement>("#nested-nav2");

    (classifier.getMatched as jest.Mock).mockReturnValueOnce([nestedNav1, nestedNav2]);

    await NavigationNotNested.validate(validateMethodArguments);

    expect(response.passedNodes).toEqual([]);
    expect(response.failedNodes).toEqual([nestedNav1, nestedNav2]);
  });

  it("should pass if a nav is not nested", async () => {
    const { document, response, classifier } = validateMethodArguments;
    (classifier.getParent as jest.Mock).mockReturnValue(false);

    document.body.innerHTML = `
      <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about/">About Us</a></li>
            <li><a href="/services/">Services</a></li>
            <li><a href="/contact/">Contact</a></li>
          </ul>
      </nav> 
    `;

    const allNavs = document.querySelectorAll<HTMLElement>("nav:not([role]), [role='navigation']");

    (classifier.getMatched as jest.Mock).mockReturnValueOnce(Array.from(allNavs));
    (classifier.getMatched as jest.Mock).mockReturnValueOnce([]);

    await NavigationNotNested.validate(validateMethodArguments);

    expect(response.passedNodes).toEqual([...allNavs]);
    expect(response.failedNodes).toEqual([]);
  });

  it("should pass if a role=navigation is not nested", async () => {
    const { document, response, classifier } = validateMethodArguments;
    (classifier.getParent as jest.Mock).mockReturnValue(false);

    document.body.innerHTML = `
      <div role="navigation">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about/">About Us</a></li>
            <li><a href="/services/">Services</a></li>
            <li><a href="/contact/">Contact</a></li>
          </ul>
      </div> 
    `;

    const allNavs = document.querySelectorAll<HTMLElement>("nav:not([role]), [role='navigation']");

    (classifier.getMatched as jest.Mock).mockReturnValueOnce(Array.from(allNavs));

    await NavigationNotNested.validate(validateMethodArguments);

    expect(response.passedNodes).toEqual([...allNavs]);
    expect(response.failedNodes).toEqual([]);
  });

  it("should pass if navs are not nested", async () => {
    const { document, response, classifier } = validateMethodArguments;
    (classifier.getParent as jest.Mock).mockReturnValue(false);

    document.body.innerHTML = `
      <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about/">About Us</a></li>
            <li><a href="/services/">Services</a></li>
            <li><a href="/contact/">Contact</a></li>
          </ul>
      </nav> 
      <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about/">About Us</a></li>
            <li><a href="/services/">Services</a></li>
            <li><a href="/contact/">Contact</a></li>
          </ul>
      </nav> 
      <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about/">About Us</a></li>
            <li><a href="/services/">Services</a></li>
            <li><a href="/contact/">Contact</a></li>
          </ul>
      </nav> 
    `;

    const allNavs = document.querySelectorAll<HTMLElement>("nav:not([role]), [role='navigation']");

    (classifier.getMatched as jest.Mock).mockReturnValueOnce(Array.from(allNavs));

    await NavigationNotNested.validate(validateMethodArguments);

    expect(response.passedNodes).toEqual([...allNavs]);
    expect(response.failedNodes).toEqual([]);
  });

  it("should pass if a nav with role='presentation' is nested in a nav", async () => {
    const { document, response, classifier } = validateMethodArguments;
    (classifier.getParent as jest.Mock).mockReturnValue(false);

    document.body.innerHTML = `
      <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li>
              <a href="/about/">About Us</a>
              <!-- Submenu for "About Us" -->
              <nav role="presentation">
                <ul>
                  <li><a href="/about/history">Our History</a></li>
                  <li><a href="/about/team">Our Team</a></li>
                  <li><a href="/about/mission">Our Mission</a></li>
                </ul>
              </nav>
            </li>
            <li><a href="/services/">Services</a></li>
            <li><a href="/contact/">Contact</a></li>
          </ul>
      </nav>
    `;

    const allNavs = document.querySelectorAll<HTMLElement>("nav:not([role]), [role='navigation']");

    (classifier.getMatched as jest.Mock).mockReturnValueOnce(Array.from(allNavs));

    await NavigationNotNested.validate(validateMethodArguments);

    expect(response.passedNodes).toEqual([...allNavs]);
    expect(response.failedNodes).toEqual([]);
  });

  it("should pass if a nav with role='presentation' is nested in a role=navigation", async () => {
    const { document, response, classifier } = validateMethodArguments;
    (classifier.getParent as jest.Mock).mockReturnValue(false);

    document.body.innerHTML = `
      <div role="navigation">
          <ul>
            <li><a href="/">Home</a></li>
            <li>
              <a href="/about/">About Us</a>
              <!-- Submenu for "About Us" -->
              <nav role="presentation">
                <ul>
                  <li><a href="/about/history">Our History</a></li>
                  <li><a href="/about/team">Our Team</a></li>
                  <li><a href="/about/mission">Our Mission</a></li>
                </ul>
              </nav>
            </li>
            <li><a href="/services/">Services</a></li>
            <li><a href="/contact/">Contact</a></li>
          </ul>
      </nav>
    `;

    const allNavs = document.querySelectorAll<HTMLElement>("nav:not([role]), [role='navigation']");

    (classifier.getMatched as jest.Mock).mockReturnValueOnce(Array.from(allNavs));

    await NavigationNotNested.validate(validateMethodArguments);

    expect(response.passedNodes).toEqual([...allNavs]);
    expect(response.failedNodes).toEqual([]);
  });
});
