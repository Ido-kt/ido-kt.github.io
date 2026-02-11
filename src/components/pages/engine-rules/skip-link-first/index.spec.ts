import { SkipLinkFirst } from ".";
import type { ValidationMethodArguments } from "../../../test/unit/helpers/validation-method-arguments";
import validationMethodArguments from "../../../test/unit/helpers/validation-method-arguments";

describe("SkipLinkFirst rule validation", () => {
  let validateMethodArguments: ValidationMethodArguments;

  beforeEach(() => {
    validateMethodArguments = validationMethodArguments();
    const style = validateMethodArguments.document.createElement("style");
    style.innerHTML = `
        <style>
      .skip-link {
        position: absolute;
        left: -10000px;
        top: auto;
        width: 1px;
        height: 1px;
        overflow: hidden;
      }
      .skip-link:focus {
        position: static;
        width: auto;
        height: auto;
      }
    </style>`;
    validateMethodArguments.document.head.appendChild(style);
  });

  it("should fail when skip-link is not the first keyboard-navigable component", async () => {
    const { response, document, classifier } = validateMethodArguments;

    const tabbable = document.createElement("div");
    tabbable.setAttribute("tabIndex", "0");
    document.body.appendChild(tabbable);

    const skipLink = document.createElement("a");
    skipLink.href = "#main";
    document.body.appendChild(skipLink);

    jest.spyOn(classifier, "getMatched").mockReturnValueOnce([skipLink]);
    jest.spyOn(classifier, "getMatched").mockReturnValueOnce([tabbable, skipLink]);
    [false, true].forEach((value) => jest.spyOn(classifier, "assert").mockReturnValueOnce(value));

    await SkipLinkFirst.validate(validateMethodArguments);

    expect(response.passedNodes).toHaveLength(0);
    expect(response.failedNodes).toHaveLength(1);
  });

  it("should pass when skip-link is the first keyboard-navigable component", async () => {
    const { response, document, classifier } = validateMethodArguments;

    const skipLink = document.createElement("a");
    skipLink.href = "#main";
    document.body.appendChild(skipLink);

    const tabbable = document.createElement("div");
    tabbable.setAttribute("tabIndex", "0");
    document.body.appendChild(tabbable);

    jest.spyOn(classifier, "getMatched").mockReturnValueOnce([skipLink]);
    jest.spyOn(classifier, "getMatched").mockReturnValueOnce([skipLink, tabbable]);
    [true, false].forEach((value) => jest.spyOn(classifier, "assert").mockReturnValueOnce(value));

    await SkipLinkFirst.validate(validateMethodArguments);

    expect(response.passedNodes).toHaveLength(1);
    expect(response.failedNodes).toHaveLength(0);
  });

  it("should pass when skip-links all are before the first keyboard-navigable component", async () => {
    const { response, document, classifier } = validateMethodArguments;

    const skipLink = document.createElement("a");
    const skipLink2 = document.createElement("a");
    const skipLink3 = document.createElement("a");
    skipLink.href = "#main";
    skipLink2.href = "#main";
    skipLink3.href = "#main";
    document.body.appendChild(skipLink);
    document.body.appendChild(skipLink2);
    document.body.appendChild(skipLink3);

    const tabbable = document.createElement("div");
    tabbable.setAttribute("tabIndex", "0");
    document.body.appendChild(tabbable);

    jest.spyOn(classifier, "getMatched").mockReturnValueOnce([skipLink, skipLink2, skipLink3]);
    jest.spyOn(classifier, "getMatched").mockReturnValueOnce([skipLink, skipLink2, skipLink3, tabbable]);
    [true, true, true, false].forEach((value) => jest.spyOn(classifier, "assert").mockReturnValueOnce(value));

    await SkipLinkFirst.validate(validateMethodArguments);

    expect(response.passedNodes).toHaveLength(3);
    expect(response.failedNodes).toHaveLength(0);
  });

  it("should fail when one skip-link in a page with multiple, is after another tabbable", async () => {
    const { response, document, classifier } = validateMethodArguments;

    const skipLink = document.createElement("a");
    const skipLink2 = document.createElement("a");
    const skipLink3 = document.createElement("a");
    skipLink.href = "#main";
    skipLink2.href = "#somewhere";
    skipLink3.href = "#overtherainbow";
    document.body.appendChild(skipLink);
    document.body.appendChild(skipLink2);

    const tabbable = document.createElement("div");
    tabbable.setAttribute("tabIndex", "0");
    document.body.appendChild(tabbable);

    document.body.appendChild(skipLink3);

    jest.spyOn(classifier, "getMatched").mockReturnValueOnce([skipLink, skipLink2, skipLink3]);
    jest.spyOn(classifier, "getMatched").mockReturnValueOnce([skipLink, skipLink2, tabbable, skipLink3]);
    [true, true, false, true].forEach((value) => jest.spyOn(classifier, "assert").mockReturnValueOnce(value));

    await SkipLinkFirst.validate(validateMethodArguments);

    expect(response.passedNodes).toHaveLength(2);
    expect(response.failedNodes).toHaveLength(1);
  });

  it("should pass when a page has no skip-links", async () => {
    const { response, document, classifier } = validateMethodArguments;

    const paragraph = document.createElement("p");
    document.body.appendChild(paragraph);

    const tabbable = document.createElement("div");
    tabbable.setAttribute("tabIndex", "0");
    document.body.appendChild(tabbable);

    jest.spyOn(classifier, "getMatched").mockReturnValueOnce([]);
    jest.spyOn(classifier, "getMatched").mockReturnValueOnce([tabbable]);
    jest.spyOn(classifier, "assert").mockReturnValueOnce(false);

    await SkipLinkFirst.validate(validateMethodArguments);

    expect(response.passedNodes).toHaveLength(0);
    expect(response.failedNodes).toHaveLength(0);
  });
});
