import { HeadingOrderOptimal } from ".";
import type { ValidationMethodArguments } from "../../../test/unit/helpers/validation-method-arguments";
import validationMethodArguments from "../../../test/unit/helpers/validation-method-arguments";

describe("HeadingOrderOptimal Rule Validation", () => {
  let validateMethodArguments: ValidationMethodArguments;
  const mockContext = {
    getCompliantHeadingLevel: jest.fn((heading: HTMLElement) => {
      const level = parseInt(heading.getAttribute("aria-level") ?? heading.tagName.replace("H", ""), 10);
      return isNaN(level) ? 0 : level;
    }),
  };

  beforeEach(() => {
    validateMethodArguments = validationMethodArguments();
    document.body.innerHTML = "";
  });

  it("should pass for h1, h2, h3", async () => {
    const { response, classifier } = validateMethodArguments;
    const h1 = document.createElement("h1");
    const h2 = document.createElement("h2");
    const h3 = document.createElement("h3");

    jest.spyOn(classifier, "getMatched").mockReturnValue([h1, h2, h3]);
    jest.spyOn(classifier, "getContext").mockReturnValue({
      ...mockContext,
      data: {
        headings: [h1, h2, h3],
        elementLevels: new Map([
          [h1, 1],
          [h2, 2],
          [h3, 3],
        ]),
      },
    });

    await HeadingOrderOptimal.validate(validateMethodArguments);

    expect(response.passedNodes).toEqual([h1, h2, h3]);
  });

  it("should pass for aria-level=1, aria-level=2, aria-level=3", async () => {
    const { response, classifier } = validateMethodArguments;
    const heading1 = document.createElement("div");
    heading1.setAttribute("role", "heading");
    heading1.setAttribute("aria-level", "1");

    const heading2 = document.createElement("div");
    heading2.setAttribute("role", "heading");
    heading2.setAttribute("aria-level", "2");

    const heading3 = document.createElement("div");
    heading3.setAttribute("role", "heading");
    heading3.setAttribute("aria-level", "3");

    jest.spyOn(classifier, "getMatched").mockReturnValue([heading1, heading2, heading3]);
    jest.spyOn(classifier, "getContext").mockReturnValue({
      ...mockContext,
      data: {
        headings: [heading1, heading2, heading3],
        elementLevels: new Map([
          [heading1, 1],
          [heading2, 2],
          [heading3, 3],
        ]),
      },
    });

    await HeadingOrderOptimal.validate(validateMethodArguments);

    expect(response.passedNodes).toEqual([heading1, heading2, heading3]);
  });

  it("should pass for h1, aria-level=2, h3", async () => {
    const { response, classifier } = validateMethodArguments;
    const heading1 = document.createElement("h1");

    const heading2 = document.createElement("div");
    heading2.setAttribute("role", "heading");
    heading2.setAttribute("aria-level", "2");

    const heading3 = document.createElement("h3");

    jest.spyOn(classifier, "getMatched").mockReturnValue([heading1, heading2, heading3]);
    jest.spyOn(classifier, "getContext").mockReturnValue({
      ...mockContext,
      data: {
        headings: [heading1, heading2, heading3],
        elementLevels: new Map([
          [heading1, 1],
          [heading2, 2],
          [heading3, 3],
        ]),
      },
    });

    await HeadingOrderOptimal.validate(validateMethodArguments);

    expect(response.passedNodes).toEqual([heading1, heading2, heading3]);
  });

  it("should fail for h1, h2, h3, h4, h2, h4", async () => {
    const { response, classifier } = validateMethodArguments;
    const h1 = document.createElement("h1");
    const h2 = document.createElement("h2");
    const h3 = document.createElement("h3");
    const h4 = document.createElement("h4");
    const secondH2 = document.createElement("h2");
    const secondH4 = document.createElement("h4");

    jest.spyOn(classifier, "getMatched").mockReturnValue([h1, h2, h3, h4, secondH2, secondH4]);
    jest.spyOn(classifier, "getContext").mockReturnValue({
      ...mockContext,
      data: {
        headings: [h1, h2, h3, h4, secondH2, secondH4],
        elementLevels: new Map([
          [h1, 1],
          [h2, 2],
          [h3, 3],
          [h4, 4],
          [secondH2, 2],
          [secondH4, 3],
        ]),
      },
    });

    await HeadingOrderOptimal.validate(validateMethodArguments);

    expect(response.failedNodes).toEqual([secondH4]);
    expect(response.passedNodes).toEqual([h1, h2, h3, h4, secondH2]);
  });

  it("should fail for non-compliant h3", async () => {
    const { response, classifier } = validateMethodArguments;
    const h1 = document.createElement("h1");
    const h2 = document.createElement("h2");
    const h3 = document.createElement("div");

    jest.spyOn(classifier, "getMatched").mockReturnValue([h1, h2]);
    jest.spyOn(classifier, "getContext").mockReturnValue({
      ...mockContext,
      data: {
        headings: [h1, h2, h3],
        elementLevels: new Map([
          [h1, 1],
          [h2, 2],
          [h3, 3],
        ]),
      },
    });

    await HeadingOrderOptimal.validate(validateMethodArguments);

    expect(response.failedNodes).toEqual([h3]);
    expect(response.passedNodes).toEqual([h1, h2]);
  });
});
