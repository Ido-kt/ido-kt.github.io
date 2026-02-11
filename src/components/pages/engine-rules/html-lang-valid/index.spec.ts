import { HtmlLangValid } from ".";
import type { ValidationMethodArguments } from "../../../test/unit/helpers/validation-method-arguments";
import validationMethodArguments from "../../../test/unit/helpers/validation-method-arguments";

describe("HtmlLangValid Rule Validation", () => {
  let validateMethodArguments: ValidationMethodArguments;

  beforeEach(() => {
    validateMethodArguments = validationMethodArguments();
    const { document } = validateMethodArguments;
    // Prepare a clean state for the document
    document.documentElement.lang = ""; // Clear any lang attribute
  });

  it("should mark as inapplicable when no lang attribute is present", async () => {
    const { response, document } = validateMethodArguments;
    await HtmlLangValid.validate(validateMethodArguments);

    // Check for inapplicability due to missing lang attribute
    expect(response.inapplicableNodes).toContain(document.documentElement);
    expect(response.passedNodes.length).toBe(0);
    expect(response.failedNodes.length).toBe(0);
  });

  const validLangs = ["en", "fr-CA", "es-419", "zh-Hant"];

  it.each(validLangs)("should pass with a valid lang attribute: %s", async (lang) => {
    const { response, document } = validateMethodArguments;
    document.documentElement.lang = lang; // Set a valid lang attribute
    await HtmlLangValid.validate(validateMethodArguments);

    // Verify success for valid lang attribute
    expect(response.passedNodes).toContain(document.documentElement);
    expect(response.failedNodes.length).toBe(0);
  });

  const invalidLangs = ["en-uk-GB", "abcd-efgh", "123-456"];

  it.each(invalidLangs)("should fail with an invalid lang attribute: %s", async (lang) => {
    const { response, document } = validateMethodArguments;
    document.documentElement.lang = lang; // Set an invalid lang attribute
    await HtmlLangValid.validate(validateMethodArguments);

    // Verify failure for invalid lang attribute
    expect(response.failedNodes).toContain(document.documentElement);
    expect(response.passedNodes.length).toBe(0);
  });
});
