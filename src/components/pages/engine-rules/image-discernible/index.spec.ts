import { ImageDiscernible } from ".";
import type { ValidationMethodArguments } from "../../../test/unit/helpers/validation-method-arguments";
import validationMethodArguments from "../../../test/unit/helpers/validation-method-arguments";

describe("ImageDiscernible Rule Validation", () => {
  let validateMethodArguments: ValidationMethodArguments;

  beforeEach(() => {
    validateMethodArguments = validationMethodArguments();
    const document = validateMethodArguments.document;
    document.body.innerHTML = "";
    jest.resetAllMocks();
  });

  it("should pass when images have discernible text", async () => {
    const { classifier, document, response } = validateMethodArguments;

    document.body.innerHTML = `
            <img src="test.jpg" alt="Test image">
            <picture>
                <source srcset="test.jpg" type="image/jpeg">
                <img src="test.jpg" alt="Test image in picture">
            </picture>
            <div role="img" aria-label="Decorative image"></div>
        `;

    const images = document.querySelectorAll("img, picture, [role=img]");
    jest.spyOn(classifier, "getMatched").mockReturnValue(images);
    jest.spyOn(classifier, "assert").mockResolvedValue(true);

    await ImageDiscernible.validate(validateMethodArguments);

    expect(response.passedNodes).toEqual(Array.from(images));
    expect(response.failedNodes.length).toBe(0);
  });

  it("should fail when any image does not have discernible text", async () => {
    const { classifier, document } = validateMethodArguments;

    document.body.innerHTML = `
            <img src="missing-alt.jpg">
            <div role="img"></div> <!-- missing aria-label or aria-labelledby -->
        `;

    const images = document.querySelectorAll("img, [role=img]");
    jest.spyOn(classifier, "getMatched").mockReturnValue(images);
    jest.spyOn(classifier, "assert").mockReturnValueOnce(false);

    await ImageDiscernible.validate(validateMethodArguments);

    expect(validateMethodArguments.response.failedNodes).toEqual(Array.from(images));
    expect(validateMethodArguments.response.passedNodes.length).toBe(0);
  });

  it("should correctly handle the absence of images", async () => {
    const { document, classifier } = validateMethodArguments;
    document.body.innerHTML = "<p>No images here</p>";

    jest.spyOn(classifier, "getMatched").mockReturnValueOnce([]);
    await ImageDiscernible.validate(validateMethodArguments);

    expect(validateMethodArguments.response.passedNodes.length).toBe(0);
    expect(validateMethodArguments.response.failedNodes.length).toBe(0);
  });

  it("should handle irrelevant images correctly", async () => {
    const { classifier, document, response } = validateMethodArguments;

    document.body.innerHTML = `
            <img src="data:image/svg+xml;base64,..." alt="irrelevant image">
            <img src="linear-gradient(...)" alt="irrelevant image">
        `;

    const irrelevantImages = document.querySelectorAll("img");
    jest.spyOn(classifier, "getMatched").mockReturnValue(irrelevantImages);
    jest.spyOn(classifier, "assert").mockReturnValueOnce(false);

    await ImageDiscernible.validate(validateMethodArguments);

    expect(response.inapplicableNodes).toEqual(Array.from(irrelevantImages));
    expect(response.failedNodes.length).toBe(0);
  });
});
