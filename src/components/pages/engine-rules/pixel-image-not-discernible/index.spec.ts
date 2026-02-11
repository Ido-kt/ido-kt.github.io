import { PixelImageNotDiscernible } from "./index";
import type { ValidationMethodArguments } from "../../../test/unit/helpers/validation-method-arguments";
import validationMethodArguments from "../../../test/unit/helpers/validation-method-arguments";

describe("PixelsExcludeFromScreenReaders Rule Validation", () => {
  let validateMethodArguments: ValidationMethodArguments;

  beforeEach(() => {
    validateMethodArguments = validationMethodArguments();
    (validateMethodArguments.classifier.getMatched as jest.Mock).mockReturnValue([{}]);
  });

  it("should pass when there are no images", async () => {
    const { response, classifier } = validateMethodArguments;
    (classifier.getMatched as jest.Mock).mockReturnValue([]);

    await PixelImageNotDiscernible.validate(validateMethodArguments);

    expect(response.failedNodes).toHaveLength(0);
    expect(response.passedNodes).toHaveLength(0);
  });

  it("should pass when there are images but none are 1x1 pixels", async () => {
    const { response, classifier } = validateMethodArguments;
    const image = document.createElement("img");
    Object.defineProperty(image, "offsetWidth", { value: 100 });
    Object.defineProperty(image, "offsetHeight", { value: 100 });
    (classifier.getMatched as jest.Mock).mockReturnValue([image]);
    (classifier.getOperations as jest.Mock).mockReturnValue({
      layoutInfo: {
        renderedWidth: image.offsetWidth,
        renderedHeight: image.offsetHeight,
      },
    });

    await PixelImageNotDiscernible.validate(validateMethodArguments);

    expect(response.failedNodes.length).toBe(0);
  });

  it("should fail when there are 1x1 pixel images without the appropriate role attribute", async () => {
    const { response, classifier } = validateMethodArguments;
    const image = document.createElement("img");
    Object.defineProperty(image, "offsetWidth", { value: 1 });
    Object.defineProperty(image, "offsetHeight", { value: 1 });
    (classifier.getMatched as jest.Mock).mockReturnValue([image]);
    (classifier.getOperations as jest.Mock).mockReturnValue({
      layoutInfo: {
        renderedWidth: image.offsetWidth,
        renderedHeight: image.offsetHeight,
      },
    });

    await PixelImageNotDiscernible.validate(validateMethodArguments);

    expect(response.failedNodes.length).toBe(1);
    expect(response.failedNodes).toContain(image);
  });

  it("should pass when there are 1x1 pixel images with the appropriate role attribute", async () => {
    const { response, classifier } = validateMethodArguments;
    const image = document.createElement("img");
    image.setAttribute("role", "presentation");
    Object.defineProperty(image, "offsetWidth", { value: 1 });
    Object.defineProperty(image, "offsetHeight", { value: 1 });
    (classifier.getMatched as jest.Mock).mockReturnValue([]);
    (classifier.getOperations as jest.Mock).mockReturnValue({
      layoutInfo: {
        renderedWidth: image.offsetWidth,
        renderedHeight: image.offsetHeight,
      },
    });

    await PixelImageNotDiscernible.validate(validateMethodArguments);

    expect(response.failedNodes.length).toBe(0);
  });

  it("should add image to inapplicableNodes array if image is sr-only element", async () => {
    const { response, document, classifier } = validateMethodArguments;
    const element = document.createElement("div");
    jest.spyOn(classifier, "getMatched").mockReturnValue([element]);
    jest.spyOn(classifier, "assert").mockReturnValueOnce(true);

    await PixelImageNotDiscernible.validate(validateMethodArguments);

    expect(response.failedNodes).toHaveLength(0);
    expect(response.passedNodes).toHaveLength(0);
    expect(response.inapplicableNodes).toContain(element);
  });
});
