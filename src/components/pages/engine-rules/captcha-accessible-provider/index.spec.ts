import { CaptchaAccessibleProvider } from ".";
import type { ValidationMethodArguments } from "../../../test/unit/helpers/validation-method-arguments";
import validationMethodArguments from "../../../test/unit/helpers/validation-method-arguments";

describe("CaptchaAccessibleProvider Rule Validation", () => {
  let validateMethodArguments: ValidationMethodArguments;

  beforeEach(() => {
    validateMethodArguments = validationMethodArguments();

    // Prepare a clean state for the document
    validateMethodArguments.document.body.innerHTML = ""; // Clear any existing content
  });

  it("should have no failed nodes when there's a google captcha element", async () => {
    const { response, document, classifier } = validateMethodArguments;
    document.body.innerHTML = `<div class="g-recaptcha"></div>`;
    const div = document.querySelector("div");
    (classifier.getMatched as jest.Mock).mockReturnValue([div]);
    jest.spyOn(validateMethodArguments.classifier, "getOperations").mockReturnValue({
      componentMatch: {
        element: { type: "recaptcha", exactMatch: false },
        content: { type: "", exactMatch: false },
      },
    });

    await CaptchaAccessibleProvider.validate(validateMethodArguments);

    expect(response.failedNodes).toEqual([]);
  });

  it("should have no failed nodes when there's an hcaptcha captcha element", async () => {
    const { response, document, classifier } = validateMethodArguments;
    document.body.innerHTML = `<div class="h-captcha"></div>`;
    const div = document.querySelector("div");
    (classifier.getMatched as jest.Mock).mockReturnValue([div]);
    jest.spyOn(validateMethodArguments.classifier, "getOperations").mockReturnValue({
      componentMatch: {
        element: { type: "hCaptcha", exactMatch: false },
        content: { type: "", exactMatch: false },
      },
    });

    await CaptchaAccessibleProvider.validate(validateMethodArguments);

    expect(response.failedNodes).toEqual([]);
  });

  it("should have no failed nodes when there's a cloudflare turnstile captcha element", async () => {
    const { response, document, classifier } = validateMethodArguments;
    document.body.innerHTML = `<div class="cf-turnstile"></div>`;
    const div = document.querySelector("div");
    (classifier.getMatched as jest.Mock).mockReturnValue([div]);
    jest.spyOn(validateMethodArguments.classifier, "getOperations").mockReturnValue({
      componentMatch: {
        element: { type: "cfTurnstile", exactMatch: false },
        content: { type: "", exactMatch: false },
      },
    });

    await CaptchaAccessibleProvider.validate(validateMethodArguments);

    expect(response.failedNodes).toEqual([]);
  });

  it("should have no failed nodes when there's a friendly-captcha captcha element", async () => {
    const { response, document, classifier } = validateMethodArguments;
    document.body.innerHTML = `<div class="frc-captcha"></div>`;
    const div = document.querySelector("div");
    (classifier.getMatched as jest.Mock).mockReturnValue([div]);

    jest.spyOn(validateMethodArguments.classifier, "getOperations").mockReturnValue({
      componentMatch: {
        element: { type: "friendlyCaptcha", exactMatch: false },
        content: { type: "", exactMatch: false },
      },
    });

    await CaptchaAccessibleProvider.validate(validateMethodArguments);

    expect(response.failedNodes).toEqual([]);
  });

  it("should have a failed node when there's no accessible captcha element", async () => {
    const { response, document, classifier } = validateMethodArguments;
    document.body.innerHTML = `<div class="other-captcha"></div>`;
    const div = document.querySelector("div");
    (classifier.getMatched as jest.Mock).mockReturnValue([div]);
    jest.spyOn(validateMethodArguments.classifier, "getOperations").mockReturnValue({
      componentMatch: {
        element: { type: "otherCaptcha", exactMatch: false },
        content: { type: "", exactMatch: false },
      },
    });

    await CaptchaAccessibleProvider.validate(validateMethodArguments);

    expect(response.failedNodes).toEqual([div]);
  });

  it("should return passed when captcha from accessible provides is found", async () => {
    const { response, document, classifier } = validateMethodArguments;
    document.body.innerHTML = `<div class="g-recaptcha"></div>`;
    const div = document.querySelector("div");
    (classifier.getMatched as jest.Mock).mockReturnValue([div]);
    jest.spyOn(validateMethodArguments.classifier, "getOperations").mockReturnValue({
      componentMatch: {
        element: { type: "recaptcha", exactMatch: false },
        content: { type: "", exactMatch: false },
      },
    });

    await CaptchaAccessibleProvider.validate(validateMethodArguments);

    expect(response.failedNodes).toEqual([]);
  });
});
