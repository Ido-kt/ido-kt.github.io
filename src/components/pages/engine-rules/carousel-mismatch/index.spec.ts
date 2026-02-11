import type { ValidationMethodArguments } from "../../../test/unit/helpers/validation-method-arguments";
import validationMethodArguments from "../../../test/unit/helpers/validation-method-arguments";
import { CarouselMismatch } from ".";

describe("carousel-mismatch Rule Validation", () => {
  let validateMethodArguments: ValidationMethodArguments;

  beforeEach(() => {
    validateMethodArguments = validationMethodArguments();
    const { document } = validateMethodArguments;
    // Prepare a clean state for the document
    document.head.innerHTML = "";
  });

  it("should have no failed elements when perceivable carousels are the same as compliant ones", async () => {
    const { classifier, response, document } = validateMethodArguments;
    const carousel = document.createElement("div");
    carousel.classList.add("carousel");
    carousel.setAttribute("role", "region");
    carousel.setAttribute("aria-roledescription", "carousel");
    document.body.appendChild(carousel);
    (classifier.getMatched as jest.Mock).mockReturnValueOnce([carousel, carousel]);
    (classifier.getMatched as jest.Mock).mockReturnValueOnce([carousel, carousel]);

    await CarouselMismatch.validate(validateMethodArguments);

    expect(response.failedNodes.length).toBe(0);
    expect(response.passedNodes.length).toBe(2);
    expect(response.passedNodes[0]).toBe(carousel);
    expect(response.passedNodes[1]).toBe(carousel);
  });

  it("should have a failed element when a perceivable carousel is not contained in the compliant carousels list", async () => {
    const { classifier, response } = validateMethodArguments;
    const carousel = document.createElement("div");
    carousel.classList.add("carousel");
    carousel.setAttribute("aria-roledescription", "carousel");
    document.body.appendChild(carousel);
    (classifier.getMatched as jest.Mock).mockReturnValueOnce([carousel]);
    (classifier.getMatched as jest.Mock).mockReturnValueOnce([]);

    await CarouselMismatch.validate(validateMethodArguments);

    expect(response.failedNodes.length).toBe(1);
    expect(response.failedNodes[0]).toBe(carousel);
    expect(response.passedNodes.length).toBe(0);
  });
});
