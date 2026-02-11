import { MarqueeDeprecated } from ".";
import type { ValidationMethodArguments } from "../../../test/unit/helpers/validation-method-arguments";
import validationMethodArguments from "../../../test/unit/helpers/validation-method-arguments";

describe("MarqueeDeprecated rule validation", () => {
  let validateMethodArguments: ValidationMethodArguments;

  beforeEach(() => (validateMethodArguments = validationMethodArguments()));

  it("should fail when a marquee element is present in the document", () => {
    const { response, document } = validateMethodArguments;

    // Simulate a document with a marquee element
    const marqueeElement = document.createElement("marquee");
    document.body.appendChild(marqueeElement);

    MarqueeDeprecated.validate(validateMethodArguments);

    // Expect the marquee element to be identified as a failed node
    expect(response.failedNodes).toContain(marqueeElement);
    expect(response.failedNodes).toHaveLength(1);
    expect(response.passedNodes).toHaveLength(0);
  });

  it("should pass when no marquee elements are present in the document", () => {
    const { response } = validateMethodArguments;

    // No marquee elements are added to the document

    MarqueeDeprecated.validate(validateMethodArguments);

    // Expect no failed nodes as no marquee elements are present
    expect(response.failedNodes).toHaveLength(0);
    expect(response.passedNodes).toHaveLength(0); // As per the rule's pass condition, no nodes are explicitly passed
  });
});
