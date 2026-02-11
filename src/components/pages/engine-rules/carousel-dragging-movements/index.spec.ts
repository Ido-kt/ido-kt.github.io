import { CarouselDraggingMovements } from ".";
import type { ValidationMethodArguments } from "../../../test/unit/helpers/validation-method-arguments";
import validationMethodArguments from "../../../test/unit/helpers/validation-method-arguments";

describe("CarouselDraggingMovements Rule Validation", () => {
  let validateMethodArguments: ValidationMethodArguments;

  beforeEach(() => {
    validateMethodArguments = validationMethodArguments();
  });

  it("should pass when carousel is not overflowed (all slides visible)", async () => {
    const { classifier, response } = validateMethodArguments;

    const carousel = document.createElement("div");
    const slidersWrapper = document.createElement("div");

    // Simulate layout info: wrapper width <= carousel width + SPACE
    jest.spyOn(classifier, "getMatched").mockReturnValueOnce([carousel]);
    jest.spyOn(classifier, "getMatched").mockReturnValueOnce([slidersWrapper]);
    jest.spyOn(classifier, "getOperations").mockImplementation((element) => {
      if (element === slidersWrapper) return { layoutInfo: { scrollWidth: 100, scrollHeight: 100 } };
      if (element === carousel) return { layoutInfo: { width: 100, height: 100 } };
      return { layoutInfo: { width: 0, height: 0 } };
    });

    await CarouselDraggingMovements.validate(validateMethodArguments);

    expect(response.inapplicableNodes).toContain(carousel);
    expect(response.passedNodes).not.toContain(carousel);
    expect(response.failedNodes).not.toContain(carousel);
  });

  it("should pass when carousel has slide picker controls", async () => {
    const { classifier, response } = validateMethodArguments;

    const carousel = document.createElement("div");
    const carouselParent = document.createElement("div");
    const slidePicker = document.createElement("div");
    const slidersWrapper = document.createElement("div");

    carouselParent.appendChild(carousel);
    carousel.appendChild(slidersWrapper);
    slidersWrapper.appendChild(slidePicker);

    jest.spyOn(classifier, "getMatched").mockReturnValueOnce([carousel]);
    jest.spyOn(classifier, "getMatched").mockReturnValueOnce([slidersWrapper]);
    jest.spyOn(classifier, "getMatched").mockReturnValueOnce([slidePicker]);
    jest.spyOn(classifier, "getMatched").mockReturnValueOnce([]);
    jest.spyOn(classifier, "getMatched").mockReturnValueOnce([]);
    jest.spyOn(classifier, "getOperations").mockImplementation((element) => {
      if (element === slidersWrapper) return { layoutInfo: { scrollWidth: 1000, scrollHeight: 100 } };
      if (element === carousel) return { layoutInfo: { width: 100, height: 100 } };
      return { layoutInfo: { width: 0, height: 0 } };
    });

    await CarouselDraggingMovements.validate(validateMethodArguments);

    expect(response.passedNodes).toContain(carousel);
    expect(response.failedNodes).toHaveLength(0);
  });

  it("should pass when carousel has slide picker controls, no parent to carousel", async () => {
    const { classifier, response } = validateMethodArguments;

    const carousel = document.createElement("div");
    const slidePicker = document.createElement("div");
    const slidersWrapper = document.createElement("div");

    carousel.appendChild(slidersWrapper);
    slidersWrapper.appendChild(slidePicker);

    jest.spyOn(classifier, "getMatched").mockReturnValueOnce([carousel]);
    jest.spyOn(classifier, "getMatched").mockReturnValueOnce([slidersWrapper]);
    jest.spyOn(classifier, "getMatched").mockReturnValueOnce([slidePicker]);
    jest.spyOn(classifier, "getMatched").mockReturnValueOnce([]);
    jest.spyOn(classifier, "getMatched").mockReturnValueOnce([]);
    jest.spyOn(classifier, "getOperations").mockImplementation((element) => {
      if (element === slidersWrapper) return { layoutInfo: { scrollWidth: 1000, scrollHeight: 100 } };
      if (element === carousel) return { layoutInfo: { width: 100, height: 100 } };
      return { layoutInfo: { width: 0, height: 0 } };
    });

    await CarouselDraggingMovements.validate(validateMethodArguments);

    expect(response.passedNodes).toContain(carousel);
    expect(response.failedNodes).toHaveLength(0);
  });

  it("should pass when carousel has both previous and next arrow controls", async () => {
    const { classifier, response } = validateMethodArguments;

    const carousel = document.createElement("div");
    const carouselParent = document.createElement("div");
    const prevArrow = document.createElement("button");
    const nextArrow = document.createElement("button");
    const slidersWrapper = document.createElement("div");

    carouselParent.appendChild(carousel);
    slidersWrapper.appendChild(prevArrow);
    slidersWrapper.appendChild(nextArrow);
    carousel.appendChild(slidersWrapper);

    jest.spyOn(classifier, "getMatched").mockReturnValueOnce([carousel]);
    jest.spyOn(classifier, "getMatched").mockReturnValueOnce([slidersWrapper]);
    jest.spyOn(classifier, "getMatched").mockReturnValueOnce([]);
    jest.spyOn(classifier, "getMatched").mockReturnValueOnce([prevArrow]);
    jest.spyOn(classifier, "getMatched").mockReturnValueOnce([nextArrow]);
    jest.spyOn(classifier, "getOperations").mockImplementation((element) => {
      if (element === slidersWrapper) return { layoutInfo: { scrollWidth: 1000, scrollHeight: 100 } };
      if (element === carousel) return { layoutInfo: { width: 100, height: 100 } };
      return { layoutInfo: { width: 0, height: 0 } };
    });

    await CarouselDraggingMovements.validate(validateMethodArguments);

    expect(response.passedNodes).toContain(carousel);
    expect(response.failedNodes).toHaveLength(0);
  });

  it("should fail when carousel has no alternative controls", async () => {
    const { classifier, response } = validateMethodArguments;

    const carousel = document.createElement("div");
    const carouselParent = document.createElement("div");
    const slidersWrapper = document.createElement("div");

    carouselParent.appendChild(carousel);
    carousel.appendChild(slidersWrapper);

    jest.spyOn(classifier, "getMatched").mockReturnValueOnce([carousel]);
    jest.spyOn(classifier, "getMatched").mockReturnValueOnce([slidersWrapper]);
    jest.spyOn(classifier, "getMatched").mockReturnValueOnce([]);
    jest.spyOn(classifier, "getMatched").mockReturnValueOnce([]);
    jest.spyOn(classifier, "getMatched").mockReturnValueOnce([]);
    jest.spyOn(classifier, "getOperations").mockImplementation((element) => {
      if (element === slidersWrapper) return { layoutInfo: { scrollWidth: 1000, scrollHeight: 100 } };
      if (element === carousel) return { layoutInfo: { width: 100, height: 100 } };
      return { layoutInfo: { width: 0, height: 0 } };
    });

    await CarouselDraggingMovements.validate(validateMethodArguments);

    expect(response.failedNodes).toContain(carousel);
    expect(response.passedNodes).toHaveLength(0);
  });

  it("should pass when carousel has only previous arrow but no next arrow", async () => {
    const { classifier, response } = validateMethodArguments;

    const carousel = document.createElement("div");
    const carouselParent = document.createElement("div");
    const prevArrow = document.createElement("button");
    const slidersWrapper = document.createElement("div");

    carouselParent.appendChild(carousel);
    slidersWrapper.appendChild(prevArrow);
    carousel.appendChild(slidersWrapper);

    jest.spyOn(classifier, "getMatched").mockReturnValueOnce([carousel]);
    jest.spyOn(classifier, "getMatched").mockReturnValueOnce([slidersWrapper]);
    jest.spyOn(classifier, "getMatched").mockReturnValueOnce([]);
    jest.spyOn(classifier, "getMatched").mockReturnValueOnce([prevArrow]);
    jest.spyOn(classifier, "getMatched").mockReturnValueOnce([]);
    jest.spyOn(classifier, "getOperations").mockImplementation((element) => {
      if (element === slidersWrapper) return { layoutInfo: { scrollWidth: 1000, scrollHeight: 100 } };
      if (element === carousel) return { layoutInfo: { width: 100, height: 100 } };
      return { layoutInfo: { width: 0, height: 0 } };
    });

    await CarouselDraggingMovements.validate(validateMethodArguments);

    expect(response.passedNodes).toContain(carousel);
    expect(response.failedNodes).toHaveLength(0);
  });

  it("should pass when carousel has only next arrow but no previous arrow", async () => {
    const { classifier, response } = validateMethodArguments;

    const carousel = document.createElement("div");
    const carouselParent = document.createElement("div");
    const nextArrow = document.createElement("button");
    const slidersWrapper = document.createElement("div");

    carouselParent.appendChild(carousel);
    slidersWrapper.appendChild(nextArrow);
    carousel.appendChild(slidersWrapper);

    jest.spyOn(classifier, "getMatched").mockReturnValueOnce([carousel]);
    jest.spyOn(classifier, "getMatched").mockReturnValueOnce([slidersWrapper]);
    jest.spyOn(classifier, "getMatched").mockReturnValueOnce([]);
    jest.spyOn(classifier, "getMatched").mockReturnValueOnce([]);
    jest.spyOn(classifier, "getMatched").mockReturnValueOnce([nextArrow]);
    jest.spyOn(classifier, "getOperations").mockImplementation((element) => {
      if (element === slidersWrapper) return { layoutInfo: { scrollWidth: 1000, scrollHeight: 100 } };
      if (element === carousel) return { layoutInfo: { width: 100, height: 100 } };
      return { layoutInfo: { width: 0, height: 0 } };
    });

    await CarouselDraggingMovements.validate(validateMethodArguments);

    expect(response.passedNodes).toContain(carousel);
    expect(response.failedNodes).toHaveLength(0);
  });

  it("should pass when vertical carousel has alternative controls", async () => {
    const { classifier, response } = validateMethodArguments;

    const carousel = document.createElement("div");
    const carouselParent = document.createElement("div");
    const upArrow = document.createElement("button");
    const downArrow = document.createElement("button");
    const slidersWrapper = document.createElement("div");

    carouselParent.appendChild(carousel);
    slidersWrapper.appendChild(upArrow);
    slidersWrapper.appendChild(downArrow);
    carousel.appendChild(slidersWrapper);

    jest.spyOn(classifier, "getMatched").mockReturnValueOnce([carousel]);
    jest.spyOn(classifier, "getMatched").mockReturnValueOnce([slidersWrapper]);
    jest.spyOn(classifier, "getMatched").mockReturnValueOnce([]);
    jest.spyOn(classifier, "getMatched").mockReturnValueOnce([upArrow]);
    jest.spyOn(classifier, "getMatched").mockReturnValueOnce([downArrow]);
    jest.spyOn(classifier, "getOperations").mockImplementation((element) => {
      if (element === slidersWrapper) return { layoutInfo: { scrollWidth: 100, scrollHeight: 1000 } }; // vertical overflow
      if (element === carousel) return { layoutInfo: { width: 100, height: 100 } };
      return { layoutInfo: { width: 0, height: 0 } };
    });

    await CarouselDraggingMovements.validate(validateMethodArguments);

    expect(response.passedNodes).toContain(carousel);
    expect(response.failedNodes).toHaveLength(0);
  });

  it("should handle when no carousels are found", async () => {
    const { classifier, response } = validateMethodArguments;

    (classifier.getMatched as jest.Mock).mockReturnValue([]);

    await CarouselDraggingMovements.validate(validateMethodArguments);

    expect(response.passedNodes).toHaveLength(0);
    expect(response.failedNodes).toHaveLength(0);
  });
});
