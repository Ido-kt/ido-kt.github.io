import type { ValidationMethodArguments } from "../../../test/unit/helpers/validation-method-arguments";
import validationMethodArguments from "../../../test/unit/helpers/validation-method-arguments";
import { CarouselDiscernible } from ".";

describe("carousel-discernible Rule Validation", () => {
  let validateMethodArguments: ValidationMethodArguments;

  beforeEach(() => {
    validateMethodArguments = validationMethodArguments();
    const { document, classifier } = validateMethodArguments;
    // Prepare a clean state for the document
    document.head.innerHTML = "";
    (classifier.getOperations as jest.Mock).mockImplementation((element) => ({ contentInfo: { relatedText: element.getAttribute("aria-label") } }));
  });

  it("should have no failed elements when element has related text without the word carousel in it", async () => {
    const { classifier, response } = validateMethodArguments;
    const carousel = document.createElement("div");
    carousel.classList.add("carousel");
    carousel.setAttribute("aria-label", "Our awesome products");
    document.body.appendChild(carousel);
    (classifier.getMatched as jest.Mock).mockReturnValue([carousel]);

    await CarouselDiscernible.validate(validateMethodArguments);

    expect(response.failedNodes.length).toBe(0);
    expect(response.passedNodes.length).toBe(1);
    expect(response.passedNodes[0]).toBe(carousel);
  });

  it("should have no failed elements when element has related text with the word carousel in it", async () => {
    const { classifier, response } = validateMethodArguments;
    const carousel = document.createElement("div");
    carousel.classList.add("carousel");
    carousel.setAttribute("aria-label", "Our awesome products carousel");
    document.body.appendChild(carousel);
    (classifier.getMatched as jest.Mock).mockReturnValue([carousel]);

    await CarouselDiscernible.validate(validateMethodArguments);

    expect(response.failedNodes.length).toBe(0);
    expect(response.passedNodes.length).toBe(1);
    expect(response.passedNodes[0]).toBe(carousel);
  });

  it("should have a failed element when element has no related content", async () => {
    const { classifier, response } = validateMethodArguments;
    const carousel = document.createElement("div");
    carousel.classList.add("carousel");
    document.body.appendChild(carousel);
    (classifier.getMatched as jest.Mock).mockReturnValue([carousel]);

    await CarouselDiscernible.validate(validateMethodArguments);

    expect(response.failedNodes.length).toBe(1);
    expect(response.failedNodes[0]).toBe(carousel);
    expect(response.passedNodes.length).toBe(0);
  });
});
