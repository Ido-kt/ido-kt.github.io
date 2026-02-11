import { RegionFooterMismatch } from ".";
import type { ValidationMethodArguments } from "../../../test/unit/helpers/validation-method-arguments";
import validationMethodArguments from "../../../test/unit/helpers/validation-method-arguments";

describe("RegionFooterMismatch Rule Validation", () => {
  let validateMethodArguments: ValidationMethodArguments;

  beforeEach(() => {
    validateMethodArguments = validationMethodArguments();
  });

  it("should pass when the footer region is complaint", async () => {
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
    await RegionFooterMismatch.validate(validateMethodArguments);

    expect(response.failedNodes).toHaveLength(0);
    expect(response.passedNodes).toContain(footer);
  });

  it("should fail when the footer region is not footer tag or hase role=contentInfo", async () => {
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
    await RegionFooterMismatch.validate(validateMethodArguments);

    expect(response.passedNodes).toHaveLength(0);
    expect(response.failedNodes).toContain(footer);
  });
});
