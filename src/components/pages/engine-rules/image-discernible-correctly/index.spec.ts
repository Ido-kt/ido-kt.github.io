import { ImageDiscernibleCorrectly } from ".";
import type { ValidationMethodArguments } from "../../../test/unit/helpers/validation-method-arguments";
import validationMethodArguments from "../../../test/unit/helpers/validation-method-arguments";

describe("ImageDiscernibleCorrectly Rule Validation", () => {
  let validateMethodArguments: ValidationMethodArguments;

  beforeEach(() => {
    validateMethodArguments = validationMethodArguments();
    const { document, classifier } = validateMethodArguments;
    document.body.innerHTML = "";
    (classifier.getOperations as jest.Mock).mockImplementation((element) => {
      const ariaLabel = element.getAttribute("aria-label");
      const alt = element.getAttribute("alt");
      return {
        contentInfo: { srVisibleText: (ariaLabel ? ariaLabel : "") + (alt ? alt : "") },
      };
    });
  });

  it("should pass when images have meaningful alt text", async () => {
    const { document, classifier, response } = validateMethodArguments;

    document.body.innerHTML = `<img alt="A beautiful sunrise over the mountains" style="width:100px;height:100px;"/>`;

    const images = document.querySelectorAll("img");
    jest.spyOn(classifier, "getMatched").mockReturnValue(images);
    jest.spyOn(classifier, "assert").mockReturnValue(true);

    await ImageDiscernibleCorrectly.validate(validateMethodArguments);
    expect(response.passedNodes).toEqual(Array.from(images));
    expect(response.failedNodes.length).toBe(0);
  });

  it("should pass when images have meaningful aria-label", async () => {
    const { document, classifier, response } = validateMethodArguments;

    document.body.innerHTML = `<img aria-label="A beautiful sunrise over the mountains" style="width:100px;height:100px;"/>`;

    const images = document.querySelectorAll("img");
    jest.spyOn(classifier, "getMatched").mockReturnValue(images);
    jest.spyOn(classifier, "assert").mockReturnValue(true);

    await ImageDiscernibleCorrectly.validate(validateMethodArguments);
    expect(response.passedNodes).toEqual(Array.from(images));
    expect(response.failedNodes.length).toBe(0);
  });

  it("should pass when images have meaningful alt text in hebrew", async () => {
    const { document, classifier, response } = validateMethodArguments;

    document.body.innerHTML = `<img alt="זריחה יפה מעל ההרים" style="width:100px;height:100px;"/>`;

    const images = document.querySelectorAll("img");
    jest.spyOn(classifier, "getMatched").mockReturnValue(images);
    jest.spyOn(classifier, "assert").mockReturnValue(true);

    await ImageDiscernibleCorrectly.validate(validateMethodArguments);
    expect(response.passedNodes).toEqual(Array.from(images));
    expect(response.failedNodes.length).toBe(0);
  });

  it("should pass when images have meaningful aria-label in hebrew", async () => {
    const { document, classifier, response } = validateMethodArguments;

    document.body.innerHTML = `<img aria-label="זריחה יפה מעל ההרים" style="width:100px;height:100px;"/>`;

    const images = document.querySelectorAll("img");
    jest.spyOn(classifier, "getMatched").mockReturnValue(images);
    jest.spyOn(classifier, "assert").mockReturnValue(true);

    await ImageDiscernibleCorrectly.validate(validateMethodArguments);
    expect(response.passedNodes).toEqual(Array.from(images));
    expect(response.failedNodes.length).toBe(0);
  });

  it("should fail when alt text contains a single non-descriptive word", async () => {
    const { document, classifier, response } = validateMethodArguments;

    document.body.innerHTML = `<img alt="image" style="width:100px;height:100px;"/>`;

    const images = document.querySelectorAll("img");
    jest.spyOn(classifier, "getMatched").mockReturnValue(images);
    jest.spyOn(classifier, "assert").mockReturnValue(true);

    await ImageDiscernibleCorrectly.validate(validateMethodArguments);

    expect(response.failedNodes).toEqual(Array.from(images));
    expect(response.passedNodes.length).toBe(0);
  });

  it("should fail when aria-label contains a single non-descriptive word", async () => {
    const { document, classifier, response } = validateMethodArguments;

    document.body.innerHTML = `<img aria-label="image" style="width:100px;height:100px;"/>`;

    const images = document.querySelectorAll("img");
    jest.spyOn(classifier, "getMatched").mockReturnValue(images);
    jest.spyOn(classifier, "assert").mockReturnValue(true);

    await ImageDiscernibleCorrectly.validate(validateMethodArguments);

    expect(response.failedNodes).toEqual(Array.from(images));
    expect(response.passedNodes.length).toBe(0);
  });

  it("should fail when alt text contains only non-alphabetic characters", async () => {
    const { document, classifier, response } = validateMethodArguments;

    document.body.innerHTML = `<img alt="!!!" style="width:100px;height:100px;"/>`;

    const images = document.querySelectorAll("img");
    jest.spyOn(classifier, "getMatched").mockReturnValue(images);
    jest.spyOn(classifier, "assert").mockReturnValue(true);

    await ImageDiscernibleCorrectly.validate(validateMethodArguments);

    expect(response.failedNodes).toEqual(Array.from(images));
    expect(response.passedNodes.length).toBe(0);
  });

  it("should fail when aria-label contains only non-alphabetic characters", async () => {
    const { document, classifier, response } = validateMethodArguments;

    document.body.innerHTML = `<img aria-label="!!!" style="width:100px;height:100px;"/>`;

    const images = document.querySelectorAll("img");
    jest.spyOn(classifier, "getMatched").mockReturnValue(images);
    jest.spyOn(classifier, "assert").mockReturnValue(true);

    await ImageDiscernibleCorrectly.validate(validateMethodArguments);

    expect(response.failedNodes).toEqual(Array.from(images));
    expect(response.passedNodes.length).toBe(0);
  });

  it("should fail when alt text contains a single word with more than 20 characters", async () => {
    const { document, classifier, response } = validateMethodArguments;

    document.body.innerHTML = `<img alt="abcdefghijklmnopqrstuvwxyz" style="width:100px;height:100px;"/>`;

    const images = document.querySelectorAll("img");
    jest.spyOn(classifier, "getMatched").mockReturnValue(images);
    jest.spyOn(classifier, "assert").mockReturnValue(true);

    await ImageDiscernibleCorrectly.validate(validateMethodArguments);

    expect(response.failedNodes).toEqual(Array.from(images));
    expect(response.passedNodes.length).toBe(0);
  });

  it("should fail when aria-label contains a single word with more than 20 characters", async () => {
    const { document, classifier, response } = validateMethodArguments;

    document.body.innerHTML = `<img aria-label="abcdefghijklmnopqrstuvwxyz" style="width:100px;height:100px;"/>`;

    const images = document.querySelectorAll("img");
    jest.spyOn(classifier, "getMatched").mockReturnValue(images);
    jest.spyOn(classifier, "assert").mockReturnValue(true);

    await ImageDiscernibleCorrectly.validate(validateMethodArguments);

    expect(response.failedNodes).toEqual(Array.from(images));
    expect(response.passedNodes.length).toBe(0);
  });

  it("should fail when alt text contains more numbers than non-numbers", async () => {
    const { document, classifier, response } = validateMethodArguments;

    document.body.innerHTML = `<img alt="1234abc" style="width:100px;height:100px;"/>`;

    const images = document.querySelectorAll("img");
    jest.spyOn(classifier, "getMatched").mockReturnValue(images);
    jest.spyOn(classifier, "assert").mockReturnValue(true);

    await ImageDiscernibleCorrectly.validate(validateMethodArguments);

    expect(response.failedNodes).toEqual(Array.from(images));
    expect(response.passedNodes.length).toBe(0);
  });

  it("should fail when aria-label contains more numbers than non-numbers", async () => {
    const { document, classifier, response } = validateMethodArguments;

    document.body.innerHTML = `<img aria-label="1234abc" style="width:100px;height:100px;"/>`;

    const images = document.querySelectorAll("img");
    jest.spyOn(classifier, "getMatched").mockReturnValue(images);
    jest.spyOn(classifier, "assert").mockReturnValue(true);

    await ImageDiscernibleCorrectly.validate(validateMethodArguments);

    expect(response.failedNodes).toEqual(Array.from(images));
    expect(response.passedNodes.length).toBe(0);
  });

  it("should fail when alt text contains only dimensions", async () => {
    const { document, classifier, response } = validateMethodArguments;

    document.body.innerHTML = `<img alt="800x600" style="width:100px;height:100px;"/>`;

    const images = document.querySelectorAll("img");
    jest.spyOn(classifier, "getMatched").mockReturnValue(images);
    jest.spyOn(classifier, "assert").mockReturnValue(true);

    await ImageDiscernibleCorrectly.validate(validateMethodArguments);

    expect(response.failedNodes).toEqual(Array.from(images));
    expect(response.passedNodes.length).toBe(0);
  });

  it("should fail when aria-label contains only dimensions", async () => {
    const { document, classifier, response } = validateMethodArguments;

    document.body.innerHTML = `<img aria-label="800x600" style="width:100px;height:100px;"/>`;

    const images = document.querySelectorAll("img");
    jest.spyOn(classifier, "getMatched").mockReturnValue(images);
    jest.spyOn(classifier, "assert").mockReturnValue(true);

    await ImageDiscernibleCorrectly.validate(validateMethodArguments);

    expect(response.failedNodes).toEqual(Array.from(images));
    expect(response.passedNodes.length).toBe(0);
  });

  it("should skip image when assertDetector returns false", async () => {
    const { document, classifier, response } = validateMethodArguments;

    document.body.innerHTML = `<img/>`;

    const images = document.querySelectorAll("img");
    jest.spyOn(classifier, "getMatched").mockReturnValue(images);
    jest.spyOn(classifier, "assert").mockReturnValue(false);

    await ImageDiscernibleCorrectly.validate(validateMethodArguments);

    expect(response.passedNodes.length).toBe(0);
    expect(response.failedNodes.length).toBe(0);
  });
});
