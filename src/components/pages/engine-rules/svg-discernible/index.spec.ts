import { SVGDiscernible } from ".";
import type { ValidationMethodArguments } from "../../../test/unit/helpers/validation-method-arguments";
import validationMethodArguments from "../../../test/unit/helpers/validation-method-arguments";

describe("SVGDiscernible Rule Validation", () => {
  let validateMethodArguments: ValidationMethodArguments;

  beforeEach(() => {
    validateMethodArguments = validationMethodArguments();
    // Prepare a clean state for the document
    validateMethodArguments.document.body.innerHTML = "";
    jest.spyOn(validateMethodArguments.classifier, "getParent").mockReturnValue(false);
  });

  it("should have no failed nodes when SVG has discernible text", async () => {
    (validateMethodArguments.classifier.assert as jest.Mock).mockReturnValue(true);
    const { response, document } = validateMethodArguments;

    document.body.innerHTML = `
      <svg>
        <text>Discernible text</text>
      </svg>
    `;

    await SVGDiscernible.validate(validateMethodArguments);

    expect(response.failedNodes.length).toBe(0);
  });

  it("should have 1 failed node when SVG is exposed and does not have discernible text", async () => {
    (validateMethodArguments.classifier.assert as jest.Mock).mockReturnValueOnce(true);
    (validateMethodArguments.classifier.assert as jest.Mock).mockReturnValueOnce(true);
    (validateMethodArguments.classifier.assert as jest.Mock).mockReturnValue(false);
    const { response, document } = validateMethodArguments;

    document.body.innerHTML = `
      <svg>
        <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />
      </svg>
    `;

    await SVGDiscernible.validate(validateMethodArguments);

    expect(response.failedNodes[0]).toBe(document.body.querySelector("svg"));
  });

  it("should have no failed nodes when SVG is not exposed and does not have discernible text", async () => {
    (validateMethodArguments.classifier.assert as jest.Mock).mockReturnValueOnce(true);
    (validateMethodArguments.classifier.assert as jest.Mock).mockReturnValue(false);
    const { response, document } = validateMethodArguments;

    document.body.innerHTML = `
      <svg>
        <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />
      </svg>
    `;

    await SVGDiscernible.validate(validateMethodArguments);

    expect(response.failedNodes).toEqual([]);
  });

  it("should have no failed nodes when multiple SVGs have discernible text", async () => {
    (validateMethodArguments.classifier.assert as jest.Mock).mockReturnValue(true);
    const { response, document } = validateMethodArguments;

    document.body.innerHTML = `
      <svg>
        <text>Discernible text 1</text>
      </svg>
      <svg>
        <text>Discernible text 2</text>
      </svg>
    `;

    await SVGDiscernible.validate(validateMethodArguments);

    expect(response.failedNodes.length).toBe(0);
  });

  it("should not be included in either passed or failed nodes when SVG is not `PerceivableTraitVisible`", async () => {
    (validateMethodArguments.classifier.assert as jest.Mock).mockReturnValue(false);
    const { response, document } = validateMethodArguments;

    document.body.innerHTML = `
      <svg>
        <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />
      </svg>
    `;

    await SVGDiscernible.validate(validateMethodArguments);

    expect(response.failedNodes.length).toBe(0);
    expect(response.passedNodes.length).toBe(0);
  });

  it("should not be included in either passed or failed nodes when SVG is in a compliant button", async () => {
    (validateMethodArguments.classifier.assert as jest.Mock).mockReturnValue(true);
    jest.spyOn(validateMethodArguments.classifier, "getParent").mockReturnValue(true);
    const { response, document } = validateMethodArguments;

    document.body.innerHTML = `
      <button>
        <svg>
          <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />
        </svg>
      </button>
    `;

    await SVGDiscernible.validate(validateMethodArguments);

    expect(response.failedNodes.length).toBe(0);
    expect(response.passedNodes.length).toBe(0);
  });
});
