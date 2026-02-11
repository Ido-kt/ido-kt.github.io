import { CarouselAriaLive } from ".";
import type { ValidationMethodArguments } from "../../../test/unit/helpers/validation-method-arguments";
import validationMethodArguments from "../../../test/unit/helpers/validation-method-arguments";

describe("CarouselsNotLive rule validation", () => {
  let validateMethodArguments: ValidationMethodArguments;

  beforeEach(() => (validateMethodArguments = validationMethodArguments()));

  it("should fail when carousel has aria-live=assertive", async () => {
    const { response, classifier } = validateMethodArguments;

    const carousel = document.createElement("div");
    carousel.setAttribute("aria-live", "assertive");
    (classifier.getMatched as jest.Mock).mockReturnValue([carousel]);

    await CarouselAriaLive.validate(validateMethodArguments);

    expect(response.failedNodes).toContain(carousel);
  });

  it("should fail when carousel has aria-live=polite", async () => {
    const { response, classifier } = validateMethodArguments;

    const carousel = document.createElement("div");
    carousel.setAttribute("aria-live", "polite");
    (classifier.getMatched as jest.Mock).mockReturnValue([carousel]);

    await CarouselAriaLive.validate(validateMethodArguments);

    expect(response.failedNodes).toContain(carousel);
  });

  it("should pass when carousel has aria-live=off", async () => {
    const { response, classifier } = validateMethodArguments;

    const carousel = document.createElement("div");
    carousel.setAttribute("aria-live", "off");
    (classifier.getMatched as jest.Mock).mockReturnValue([carousel]);

    await CarouselAriaLive.validate(validateMethodArguments);

    expect(response.failedNodes.length).toBe(0);
    expect(response.passedNodes).toContain(carousel);
  });

  it("should pass when carousel has empty aria-live", async () => {
    const { response, classifier } = validateMethodArguments;

    const carousel = document.createElement("div");
    carousel.setAttribute("aria-live", "");
    (classifier.getMatched as jest.Mock).mockReturnValue([carousel]);

    await CarouselAriaLive.validate(validateMethodArguments);

    expect(response.failedNodes.length).toBe(0);
    expect(response.passedNodes).toContain(carousel);
  });

  it("should pass when carousel has no aria-live attribute", async () => {
    const { response, classifier } = validateMethodArguments;

    const carousel = document.createElement("div");
    (classifier.getMatched as jest.Mock).mockReturnValue([carousel]);

    await CarouselAriaLive.validate(validateMethodArguments);

    expect(response.failedNodes.length).toBe(0);
    expect(response.passedNodes).toEqual([]);
  });
});
