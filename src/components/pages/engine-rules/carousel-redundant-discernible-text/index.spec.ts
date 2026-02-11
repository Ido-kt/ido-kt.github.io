import type { ValidationMethodArguments } from "../../../test/unit/helpers/validation-method-arguments";
import validationMethodArguments from "../../../test/unit/helpers/validation-method-arguments";
import { CarouselRedundantDiscernibleText } from ".";

describe("CarouselRedundantDiscernibleText Rule Validation", () => {
  let validateMethodArguments: ValidationMethodArguments;

  beforeEach(() => {
    validateMethodArguments = validationMethodArguments();
    const { document, classifier } = validateMethodArguments;
    // Prepare a clean state for the document
    document.head.innerHTML = "";
    (classifier.getOperations as jest.Mock).mockImplementation((element) => ({ contentInfo: { relatedText: element.getAttribute("aria-label") } }));
  });

  it("should have no failed elements when element has no related text", async () => {
    const { classifier, response } = validateMethodArguments;
    const carousel = document.createElement("div");
    carousel.classList.add("carousel");
    carousel.setAttribute("aria-label", "");
    document.body.appendChild(carousel);
    (classifier.getMatched as jest.Mock).mockReturnValue([carousel]);

    await CarouselRedundantDiscernibleText.validate(validateMethodArguments);

    expect(response.failedNodes.length).toBe(0);
  });

  it("should have no failed elements when element has related text without the word carousel in it", async () => {
    const { classifier, response } = validateMethodArguments;
    const carousel = document.createElement("div");
    carousel.classList.add("carousel");
    carousel.setAttribute("aria-label", "Our awesome products");
    document.body.appendChild(carousel);
    (classifier.getMatched as jest.Mock).mockReturnValue([carousel]);

    await CarouselRedundantDiscernibleText.validate(validateMethodArguments);

    expect(response.failedNodes.length).toBe(0);
  });

  it("should have a failed element when element has related content with the word carousel in it", async () => {
    const { classifier, response } = validateMethodArguments;
    const carousel = document.createElement("div");
    carousel.classList.add("carousel");
    carousel.setAttribute("aria-label", "Our awesome products carousel");
    document.body.appendChild(carousel);
    (classifier.getMatched as jest.Mock).mockReturnValue([carousel]);

    await CarouselRedundantDiscernibleText.validate(validateMethodArguments);

    expect(response.failedNodes.length).toBe(1);
    expect(response.failedNodes[0]).toBe(carousel);
  });
});
