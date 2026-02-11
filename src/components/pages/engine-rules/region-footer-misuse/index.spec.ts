import { RegionFooterMisuse } from ".";
import type { ValidationMethodArguments } from "../../../test/unit/helpers/validation-method-arguments";
import validationMethodArguments from "../../../test/unit/helpers/validation-method-arguments";

describe("RegionFooterMisuse Rule Validation", () => {
  let validateMethodArguments: ValidationMethodArguments;

  beforeEach(() => {
    validateMethodArguments = validationMethodArguments();
  });

  it("should pass when the correct footer is tagged as footer", async () => {
    const { response, document, classifier } = validateMethodArguments;

    document.body.innerHTML = `
      <header>Header content</header>
      <div style="height: 300px;">Smaller div</div>
      <main id="larger" style="height: 700px;">Larger div</main>
      <footer>Footer content</footer>
    `;

    const footer = document.querySelector("footer");
    jest.spyOn(classifier, "getMatched").mockReturnValueOnce([footer]);
    jest.spyOn(classifier, "assert").mockReturnValueOnce(true);
    await RegionFooterMisuse.validate(validateMethodArguments);

    expect(response.failedNodes).toHaveLength(0);
    expect(response.passedNodes).toContain(footer);
  });

  it("should fail when incorrect footer region is tagged as the footer", async () => {
    const { response, document, classifier } = validateMethodArguments;

    document.body.innerHTML = `
      <header>Header content</header>
      <div style="height: 300px;">Smaller div</div>
      <div id="larger" style="height: 700px;">Larger div</div>
      <div class="footer">Footer content</div>
    `;

    const footer = document.querySelector("div.footer");
    jest.spyOn(classifier, "getMatched").mockReturnValueOnce([footer]);
    jest.spyOn(classifier, "assert").mockReturnValueOnce(false);
    await RegionFooterMisuse.validate(validateMethodArguments);

    expect(response.passedNodes).toHaveLength(0);
    expect(response.failedNodes).toContain(footer);
  });
});
