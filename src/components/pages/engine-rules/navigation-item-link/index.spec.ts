import { NavigationItemLink } from ".";
import type { ValidationMethodArguments } from "../../../test/unit/helpers/validation-method-arguments";
import validationMethodArguments from "../../../test/unit/helpers/validation-method-arguments";

describe("NavigationItemLink Rule Validation", () => {
  let validateMethodArguments: ValidationMethodArguments;

  beforeEach(() => {
    validateMethodArguments = validationMethodArguments();
    // Prepare a clean state for the document
    document.head.innerHTML = "";
  });

  it("should pass if a nav's list items only have direct child links", async () => {
    const { response, classifier } = validateMethodArguments;
    document.body.innerHTML = `
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    `;

    const nav = document.querySelector("nav");
    const navListItems = Array.from(nav.querySelectorAll<HTMLElement>("li"));

    (classifier.getMatched as jest.Mock).mockReturnValueOnce([nav]);
    (classifier.getMatched as jest.Mock).mockReturnValueOnce(navListItems);
    navListItems.forEach((listItem) => {
      const listItemChildLinks = Array.from(listItem.querySelectorAll("a"));
      (classifier.getMatched as jest.Mock).mockReturnValueOnce(listItemChildLinks);
    });

    jest.spyOn(classifier, "getOperations").mockReturnValue({
      contentInfo: { visibleText: "" },
    });

    await NavigationItemLink.validate(validateMethodArguments);

    expect(response.failedNodes).toEqual([]);
    expect(response.passedNodes).toEqual(navListItems);
  });

  it("should pass if a nav's list items have direct child links or sublists with direct child links", async () => {
    const { response, classifier } = validateMethodArguments;
    document.body.innerHTML = `
      <nav aria-label="Main Navigation">
        <ul>
          <li><a href="/home">Home</a></li>
          <li><a href="/about">About Us</a></li>
          <li>Services
            <ul>
              <li><a href="/services/web-design">Web Design</a></li>
              <li><a href="/services/seo">SEO</a></li>
              <li><a href="/services/content">Content Creation</a></li>
            </ul>
          </li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    `;

    const nav = document.querySelector("nav");
    const navListItems = Array.from(nav.querySelectorAll<HTMLElement>("li"));

    (classifier.getMatched as jest.Mock).mockReturnValueOnce([nav]);
    (classifier.getMatched as jest.Mock).mockReturnValueOnce(navListItems);
    navListItems.forEach((listItem) => {
      const listItemChildLinks = Array.from(listItem.querySelectorAll("a"));
      (classifier.getMatched as jest.Mock).mockReturnValueOnce(listItemChildLinks);
      jest.spyOn(classifier, "getOperations").mockReturnValueOnce({
        contentInfo: { visibleText: listItem.textContent },
      });
    });

    await NavigationItemLink.validate(validateMethodArguments);

    expect(response.failedNodes).toEqual([]);
    expect(response.passedNodes).toEqual(navListItems);
  });

  it("should fail with a single node when a nav's list item only has direct text", async () => {
    const { response, classifier } = validateMethodArguments;
    document.body.innerHTML = `
      <nav aria-label="Main Navigation">
        <ul>
          <li><a href="/home">Home</a></li>
          <li><a href="/about">About Us</a></li>
          <li>Services</li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    `;

    const nav = document.querySelector("nav");
    const navListItems = Array.from(nav.querySelectorAll<HTMLElement>("li"));

    (classifier.getMatched as jest.Mock).mockReturnValueOnce([nav]);
    (classifier.getMatched as jest.Mock).mockReturnValueOnce(navListItems);

    navListItems.forEach((listItem) => {
      (classifier.getMatched as jest.Mock).mockReturnValueOnce(Array.from(listItem.children));
      jest.spyOn(classifier, "getOperations").mockReturnValueOnce({
        contentInfo: { visibleText: listItem.textContent },
      });
    });

    await NavigationItemLink.validate(validateMethodArguments);

    expect(response.failedNodes).toEqual([navListItems[2]]);
  });

  it("should fail with multiple nodes when a nav has multiple list items with only direct text", async () => {
    const { response, classifier } = validateMethodArguments;
    document.body.innerHTML = `
      <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
      </nav>
    `;

    const nav = document.querySelector("nav");
    const navListItems = Array.from(nav.querySelectorAll<HTMLElement>("li"));

    (classifier.getMatched as jest.Mock).mockReturnValueOnce([nav]);
    (classifier.getMatched as jest.Mock).mockReturnValueOnce(navListItems);

    navListItems.forEach((listItem) => {
      (classifier.getMatched as jest.Mock).mockReturnValueOnce([]);
      jest.spyOn(classifier, "getOperations").mockReturnValueOnce({
        contentInfo: { visibleText: listItem.textContent },
      });
    });

    await NavigationItemLink.validate(validateMethodArguments);

    expect(response.failedNodes).toEqual(navListItems);
  });

  it("should fail with a single node when a nav's sublist has one item that only has direct text", async () => {
    const { response, classifier } = validateMethodArguments;
    document.body.innerHTML = `
      <nav aria-label="Main Navigation">
        <ul>
          <li><a href="/home">Home</a></li>
          <li><a href="/about">About Us</a></li>
          <li>Services
            <ul>
              <li><a href="/services/web-design">Web Design</a></li>
              <li>SEO</li>
              <li><a href="/services/content">Content Creation</a></li>
            </ul>
          </li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    `;

    const nav = document.querySelector("nav");
    const navListItems = Array.from(nav.querySelectorAll<HTMLElement>("li"));

    (classifier.getMatched as jest.Mock).mockReturnValueOnce([nav]);
    (classifier.getMatched as jest.Mock).mockReturnValueOnce(navListItems);

    navListItems.forEach((listItem) => {
      (classifier.getMatched as jest.Mock).mockReturnValueOnce(Array.from(listItem.children));
      jest.spyOn(classifier, "getOperations").mockReturnValueOnce({
        contentInfo: { visibleText: listItem.textContent },
      });
    });

    await NavigationItemLink.validate(validateMethodArguments);

    expect(response.failedNodes).toEqual([navListItems[4]]);
  });

  it("should pass if a role=navigation's list items only have direct child links", async () => {
    const { response, classifier } = validateMethodArguments;
    document.body.innerHTML = `
      <div role="navigation">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    `;

    const nav = document.querySelector("[role=navigation]");
    const navListItems = Array.from(nav.querySelectorAll<HTMLElement>("li"));

    (classifier.getMatched as jest.Mock).mockReturnValueOnce([nav]);
    (classifier.getMatched as jest.Mock).mockReturnValueOnce(navListItems);
    navListItems.forEach((listItem) => {
      const listItemChildLinks = Array.from(listItem.querySelectorAll("a"));
      (classifier.getMatched as jest.Mock).mockReturnValueOnce(listItemChildLinks);
    });
    jest.spyOn(classifier, "getOperations").mockReturnValue({
      contentInfo: { visibleText: "" },
    });

    await NavigationItemLink.validate(validateMethodArguments);

    expect(response.failedNodes).toEqual([]);
    expect(response.passedNodes).toEqual(navListItems);
  });

  it("should pass if a role=navigation's list items have direct child links or sublists with direct child links", async () => {
    const { response, classifier } = validateMethodArguments;
    document.body.innerHTML = `
      <div role="navigation">
        <ul>
          <li><a href="/home">Home</a></li>
          <li><a href="/about">About Us</a></li>
          <li>Services
            <ul>
              <li><a href="/services/web-design">Web Design</a></li>
              <li><a href="/services/seo">SEO</a></li>
              <li><a href="/services/content">Content Creation</a></li>
            </ul>
          </li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>
    `;

    const nav = document.querySelector("[role=navigation]");
    const navListItems = Array.from(nav.querySelectorAll<HTMLElement>("li"));

    (classifier.getMatched as jest.Mock).mockReturnValueOnce([nav]);
    (classifier.getMatched as jest.Mock).mockReturnValueOnce(navListItems);
    navListItems.forEach((listItem) => {
      const listItemChildLinks = Array.from(listItem.querySelectorAll("a"));
      (classifier.getMatched as jest.Mock).mockReturnValueOnce(listItemChildLinks);
      jest.spyOn(classifier, "getOperations").mockReturnValue({
        contentInfo: { visibleText: listItem.textContent },
      });
    });

    await NavigationItemLink.validate(validateMethodArguments);

    expect(response.failedNodes).toEqual([]);
    expect(response.passedNodes).toEqual(navListItems);
  });

  it("should fail with a single node when a role=navigation's list item only has direct text", async () => {
    const { response, classifier } = validateMethodArguments;
    document.body.innerHTML = `
      <div role="navigation">
        <ul>
          <li><a href="/home">Home</a></li>
          <li><a href="/about">About Us</a></li>
          <li>Services</li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>
    `;

    const nav = document.querySelector("[role=navigation]");
    const navListItems = Array.from(nav.querySelectorAll<HTMLElement>("li"));

    (classifier.getMatched as jest.Mock).mockReturnValueOnce([nav]);
    (classifier.getMatched as jest.Mock).mockReturnValueOnce(navListItems);

    navListItems.forEach((listItem) => {
      (classifier.getMatched as jest.Mock).mockReturnValueOnce(Array.from(listItem.children));
      jest.spyOn(classifier, "getOperations").mockReturnValueOnce({
        contentInfo: { visibleText: listItem.textContent },
      });
    });

    await NavigationItemLink.validate(validateMethodArguments);

    expect(response.failedNodes).toEqual([navListItems[2]]);
  });

  it("should fail with multiple nodes when a role=navigation has multiple list items with only direct text", async () => {
    const { response, classifier } = validateMethodArguments;
    document.body.innerHTML = `
      <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
      </nav>
    `;

    const nav = document.querySelector("nav");
    const navListItems = Array.from(nav.querySelectorAll<HTMLElement>("li"));

    (classifier.getMatched as jest.Mock).mockReturnValueOnce([nav]);
    (classifier.getMatched as jest.Mock).mockReturnValueOnce(navListItems);

    navListItems.forEach((listItem) => {
      (classifier.getMatched as jest.Mock).mockReturnValueOnce([]);
      jest.spyOn(classifier, "getOperations").mockReturnValueOnce({
        contentInfo: { visibleText: listItem.textContent },
      });
    });

    await NavigationItemLink.validate(validateMethodArguments);

    expect(response.failedNodes).toEqual(navListItems);
  });

  it("should fail with a single node when a role=navigation's sublist has one item that only has direct text", async () => {
    const { response, classifier } = validateMethodArguments;
    document.body.innerHTML = `
      <div role="navigation">
        <ul>
          <li><a href="/home">Home</a></li>
          <li><a href="/about">About Us</a></li>
          <li>Services
            <ul>
              <li><a href="/services/web-design">Web Design</a></li>
              <li>SEO</li>
              <li><a href="/services/content">Content Creation</a></li>
            </ul>
          </li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>
    `;

    const nav = document.querySelector("[role=navigation]");
    const navListItems = Array.from(nav.querySelectorAll<HTMLElement>("li"));

    (classifier.getMatched as jest.Mock).mockReturnValueOnce([nav]);
    (classifier.getMatched as jest.Mock).mockReturnValueOnce(navListItems);

    navListItems.forEach((listItem) => {
      (classifier.getMatched as jest.Mock).mockReturnValueOnce(Array.from(listItem.children));
      jest.spyOn(classifier, "getOperations").mockReturnValueOnce({
        contentInfo: { visibleText: listItem.textContent },
      });
    });

    await NavigationItemLink.validate(validateMethodArguments);

    expect(response.failedNodes).toEqual([navListItems[4]]);
  });
});
