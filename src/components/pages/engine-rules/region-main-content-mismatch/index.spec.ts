import { RegionMainContentMismatch } from ".";
import type { ValidationMethodArguments } from "../../../test/unit/helpers/validation-method-arguments";
import validationMethodArguments from "../../../test/unit/helpers/validation-method-arguments";

describe("RegionMainContentMismatch Rule Validation", () => {
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
    jest.spyOn(classifier, "getMatched").mockResolvedValueOnce([main]);
    jest.spyOn(classifier, "assert").mockReturnValueOnce(true);
    await RegionMainContentMismatch.validate(validateMethodArguments);

    expect(response.failedNodes).toEqual([]);
    expect(response.passedNodes).toContain(main);
  });

  it("should fail when the main landmark is not main tag or hase role=main", async () => {
    const { response, document, classifier } = validateMethodArguments;

    document.body.innerHTML = `
      <header>Header content</header>
      <div style="height: 300px;">Smaller div</div>
      <div id="larger" style="height: 700px;">Larger div</div>
      <footer>Footer content</footer>
    `;

    const main = document.querySelector("#larger");
    jest.spyOn(classifier, "getMatched").mockResolvedValueOnce([main]);
    jest.spyOn(classifier, "assert").mockReturnValueOnce(false);
    await RegionMainContentMismatch.validate(validateMethodArguments);

    expect(response.passedNodes).toEqual([]);
    expect(response.failedNodes).toContain(main);
  });
});
