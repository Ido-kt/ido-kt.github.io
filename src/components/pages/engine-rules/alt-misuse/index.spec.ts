import { AltMisuse } from ".";
import type { ValidationMethodArguments } from "../../../test/unit/helpers/validation-method-arguments";
import validationMethodArguments from "../../../test/unit/helpers/validation-method-arguments";

describe("AltMisuse Rule Validation", () => {
  let validateMethodArguments: ValidationMethodArguments;

  beforeEach(() => {
    validateMethodArguments = validationMethodArguments();
  });

  it("should have no failed nodes and 1 passed node when element with alt attribute is an image", async () => {
    const { response, document } = validateMethodArguments;

    document.body.innerHTML = `
      <img src="image.jpg" alt="image description" />
    `;

    await AltMisuse.validate(validateMethodArguments);

    expect(response.failedNodes.length).toBe(0);
    expect(response.passedNodes.length).toBe(1);
  });

  it("should have 1 failed nodes when element with alt attribute is not an image", async () => {
    const { response, document } = validateMethodArguments;

    document.body.innerHTML = `
      <div alt="image description"></div>
    `;

    await AltMisuse.validate(validateMethodArguments);

    expect(response.failedNodes[0]).toBe(document.body.querySelector("div"));
  });
  it("should have passed nodes when element with alt attribute is an input of type image", async () => {
    const { response, document } = validateMethodArguments;

    document.body.innerHTML = `
      <input type="image" alt="image description" />
    `;

    await AltMisuse.validate(validateMethodArguments);

    expect(response.failedNodes.length).toBe(0);
    expect(response.passedNodes.length).toBe(1);
  });
  it("should have passed nodes when element with alt attribute is an area", async () => {
    const { response, document } = validateMethodArguments;

    document.body.innerHTML = `
    <map name="image-map">
      <area alt="image description" />
    </map>
    `;

    await AltMisuse.validate(validateMethodArguments);

    expect(response.failedNodes.length).toBe(0);
    expect(response.passedNodes.length).toBe(1);
  });
});
