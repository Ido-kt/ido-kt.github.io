import { HeadingMisuse } from "./index";
import type { ValidationMethodArguments } from "../../../test/unit/helpers/validation-method-arguments";
import validationMethodArguments from "../../../test/unit/helpers/validation-method-arguments";

describe("HeadingMisuse Rule Validation", () => {
  let validateMethodArguments: ValidationMethodArguments;

  beforeEach(() => {
    validateMethodArguments = validationMethodArguments();
    (validateMethodArguments.classifier.getMatched as jest.Mock).mockReturnValue([{}]);
  });

  it("should pass when all compliant headings are perceivable", async () => {
    const { response, classifier } = validateMethodArguments;
    const heading = document.createElement("div");
    (classifier.getMatched as jest.Mock).mockReturnValue([heading]);
    (classifier.assert as jest.Mock).mockReturnValue(true);

    await HeadingMisuse.validate(validateMethodArguments);

    expect(response.failedNodes.length).toBe(0);
    expect(response.passedNodes.length).toBe(1);
    expect(response.passedNodes).toContain(heading);
  });

  it("should fail when there are compliant headings that are non-perceivable headings", async () => {
    const { response, classifier } = validateMethodArguments;
    const heading = document.createElement("div");
    (classifier.getMatched as jest.Mock).mockReturnValue([heading]);
    (classifier.assert as jest.Mock).mockReturnValue(false);

    await HeadingMisuse.validate(validateMethodArguments);

    expect(response.failedNodes.length).toBe(1);
    expect(response.failedNodes).toContain(heading);
    expect(response.passedNodes.length).toBe(0);
  });

  it("should handle multiple headings correctly", async () => {
    const { response, classifier } = validateMethodArguments;
    const heading1 = document.createElement("div");
    const heading2 = document.createElement("div");
    (classifier.getMatched as jest.Mock).mockReturnValue([heading1, heading2]);
    (classifier.assert as jest.Mock).mockImplementation((element) => element === heading1);

    await HeadingMisuse.validate(validateMethodArguments);

    expect(response.passedNodes.length).toBe(1);
    expect(response.passedNodes).toContain(heading1);
    expect(response.failedNodes.length).toBe(1);
    expect(response.failedNodes).toContain(heading2);
  });
});
