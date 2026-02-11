import { SalePriceDiscernible } from ".";
import type { ValidationMethodArguments } from "../../../test/unit/helpers/validation-method-arguments";
import validationMethodArguments from "../../../test/unit/helpers/validation-method-arguments";

describe("SalePriceDiscernible Rule Validation", () => {
  let validateMethodArguments: ValidationMethodArguments;

  beforeEach(() => {
    validateMethodArguments = validationMethodArguments();
  });

  it("should fail for element with strikethrough but no sr-only text implying sale price", async () => {
    const { response, classifier } = validateMethodArguments;
    const div = document.createElement("div");
    div.textContent = "$100";
    div.style.textDecorationLine = "line-through";

    jest.spyOn(classifier, "getMatched").mockReturnValue([div]);
    jest.spyOn(classifier, "assert").mockReturnValueOnce(true);
    jest.spyOn(classifier, "getOperations").mockReturnValue({
      contentInfo: { srVisibleText: "" },
    });

    await SalePriceDiscernible.validate(validateMethodArguments);

    expect(response.failedNodes).toHaveLength(1);
    expect(response.failedNodes[0]).toBe(div);
  });

  it("should fail when a semantic strikethrough element does not have discernible text", async () => {
    const { response, classifier } = validateMethodArguments;
    const s = document.createElement("s");
    s.textContent = "$100";
    const strike = document.createElement("strike");
    strike.textContent = "$200";
    const del = document.createElement("del");
    del.textContent = "₪150";

    jest.spyOn(classifier, "getMatched").mockReturnValue([s, strike, del]);
    jest.spyOn(classifier, "assert").mockReturnValueOnce(false);
    jest.spyOn(classifier, "assert").mockReturnValue(true);
    jest.spyOn(classifier, "getOperations").mockReturnValue({
      contentInfo: { srVisibleText: "" },
    });

    await SalePriceDiscernible.validate(validateMethodArguments);

    expect(response.failedNodes).toHaveLength(3);
    expect(response.passedNodes).toHaveLength(0);
    expect(response.failedNodes[0]).toBe(s);
    expect(response.failedNodes[1]).toBe(strike);
    expect(response.failedNodes[2]).toBe(del);
  });

  it("should correctly identify element with strikethrough and sr-only text implying sale price", async () => {
    const { response, classifier } = validateMethodArguments;
    document.body.innerHTML = `
        <div class="price">
          <span class="price-regular">
            <span class="sr-only">original price</span>$100
          </span>
          <span class="price-sale">$90</span>
        </div>
    `;
    const priceElement = document.querySelector("span.price-regular");

    jest.spyOn(classifier, "getMatched").mockReturnValue([priceElement]);
    jest.spyOn(classifier, "assert").mockReturnValueOnce(true);
    jest.spyOn(classifier, "getOperations").mockReturnValueOnce({
      contentInfo: { srVisibleText: "original price" },
    });

    await SalePriceDiscernible.validate(validateMethodArguments);

    expect(response.passedNodes).toHaveLength(1);
    expect(response.passedNodes[0]).toBe(priceElement);
  });

  it("should return true for element with a strikethrough and an aria-label implying sale price", async () => {
    const { response, classifier } = validateMethodArguments;
    const div = document.createElement("div");
    div.textContent = "$100";
    div.style.textDecorationLine = "line-through";
    div.setAttribute("aria-label", "was");

    jest.spyOn(classifier, "getMatched").mockReturnValue([div]);
    jest.spyOn(classifier, "assert").mockReturnValueOnce(true);
    jest.spyOn(classifier, "getOperations").mockReturnValue({
      contentInfo: { srVisibleText: "was" },
    });
    await SalePriceDiscernible.validate(validateMethodArguments);

    expect(response.failedNodes).toHaveLength(0);
    expect(response.passedNodes).toHaveLength(1);
    expect(response.passedNodes[0]).toBe(div);
  });

  it("should correctly identify elements with a strikethrough and a child sr-only element implying sale price", async () => {
    const { response, classifier } = validateMethodArguments;
    const div = document.createElement("div");
    div.textContent = "$100";
    div.style.textDecorationLine = "line-through";
    const span = document.createElement("span");
    span.classList.add("sr-only");
    span.textContent = "Original price";
    div.appendChild(span);
    document.body.appendChild(div);

    jest.spyOn(classifier, "getMatched").mockReturnValueOnce([div]);
    jest.spyOn(classifier, "assert").mockReturnValueOnce(true);
    jest.spyOn(classifier, "getOperations").mockReturnValueOnce({
      contentInfo: { srVisibleText: "" },
    });

    jest.spyOn(classifier, "getMatched").mockReturnValueOnce([span]);
    jest.spyOn(classifier, "getOperations").mockReturnValueOnce({
      contentInfo: { srVisibleText: "Original price" },
    });

    await SalePriceDiscernible.validate(validateMethodArguments);

    expect(response.failedNodes).toHaveLength(0);
    expect(response.passedNodes).toHaveLength(1);
    expect(response.passedNodes[0]).toBe(div);
  });

  it("should return true for an element with a strikethrough and a sibling sr-only element implying sale price", async () => {
    const { response, classifier } = validateMethodArguments;

    document.body.innerHTML = `
    <div>
      Price:
      <span class="sr-only">old price</span>
      <del>$200</del>
      <span>$100</span>
    </div>
    `;

    const del = document.createElement("del");
    const srOnlySpan = document.querySelector("span.sr-only");

    jest.spyOn(classifier, "getMatched").mockReturnValueOnce([del]);
    jest.spyOn(classifier, "getMatched").mockReturnValueOnce([]);
    jest.spyOn(classifier, "getMatched").mockReturnValueOnce([srOnlySpan]);

    jest.spyOn(classifier, "assert").mockReturnValueOnce(true);

    jest.spyOn(classifier, "getOperations").mockReturnValueOnce({
      contentInfo: { srVisibleText: "" },
    });
    jest.spyOn(classifier, "getOperations").mockReturnValueOnce({
      contentInfo: { srVisibleText: "old price" },
    });

    await SalePriceDiscernible.validate(validateMethodArguments);

    expect(response.failedNodes).toHaveLength(0);
    expect(response.passedNodes).toHaveLength(1);
    expect(response.passedNodes[0]).toBe(del);
  });
});
