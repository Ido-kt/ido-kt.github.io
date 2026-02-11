import { RegionMainContentMisuse } from ".";
import type { ValidationMethodArguments } from "../../../test/unit/helpers/validation-method-arguments";
import validationMethodArguments from "../../../test/unit/helpers/validation-method-arguments";

describe("RegionMainContentMisuse Rule Validation", () => {
  let validateMethodArguments: ValidationMethodArguments;

  beforeEach(() => {
    validateMethodArguments = validationMethodArguments();
  });

  it("should pass when the main landmark is complaint", async () => {
    const { response, document, classifier } = validateMethodArguments;

    document.body.innerHTML = `
      <header>Header content</header>
      <div style="height: 300px;">Smaller div</div>
      <main id="larger" style="height: 700px;">Larger div</main>
      <footer>Footer content</footer>
    `;

    const main = document.querySelector("main");
    jest.spyOn(classifier, "getMatched").mockReturnValueOnce([main]);
    jest.spyOn(classifier, "assert").mockResolvedValueOnce(true);
    await RegionMainContentMisuse.validate(validateMethodArguments);

    expect(response.failedNodes).toEqual([]);
    expect(response.passedNodes).toContain(main);
  });

  it("should fail when the main landmark is not main tag or hase role=main", async () => {
    const { response, document, classifier } = validateMethodArguments;

    document.body.innerHTML = `
      <header>Header content</header>
      <main style="height: 300px;">Smaller div</main>
      <div id="larger" style="height: 700px;">Larger div</div>
      <footer>Footer content</footer>
    `;

    const main = document.querySelector("main");
    jest.spyOn(classifier, "getMatched").mockReturnValueOnce([main]);
    jest.spyOn(classifier, "assert").mockResolvedValueOnce(false);
    await RegionMainContentMisuse.validate(validateMethodArguments);

    expect(response.passedNodes).toEqual([]);
    expect(response.failedNodes).toContain(main);
  });
});
