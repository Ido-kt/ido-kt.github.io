import { FigureDiscernible } from ".";
import type { ValidationMethodArguments } from "../../../test/unit/helpers/validation-method-arguments";
import validationMethodArguments from "../../../test/unit/helpers/validation-method-arguments";

describe("FigureDiscernible rule validation", () => {
  let validateMethodArguments: ValidationMethodArguments;

  beforeEach(() => (validateMethodArguments = validationMethodArguments()));

  it("should pass when figure element has direct text", async () => {
    const { response, document, classifier } = validateMethodArguments;

    const figure = document.createElement("figure");
    figure.textContent = "text";

    jest.spyOn(classifier, "getMatched").mockReturnValueOnce([figure]);
    jest.spyOn(classifier, "assert").mockReturnValueOnce(true);
    jest.spyOn(classifier, "getMatched").mockReturnValueOnce([]);
    await FigureDiscernible.validate(validateMethodArguments);

    expect(response.passedNodes).toContain(figure);
    expect(response.failedNodes).toHaveLength(0);
  });

  it("should pass when figure element has a child with discernible text", async () => {
    const { response, document, classifier } = validateMethodArguments;

    const figure = document.createElement("figure");
    const image = document.createElement("img");
    image.setAttribute("alt", "A diagram of a supply chain network.");
    figure.appendChild(image);

    jest.spyOn(classifier, "getMatched").mockReturnValueOnce([figure]);
    jest.spyOn(classifier, "assert").mockReturnValueOnce(false);
    jest.spyOn(classifier, "getMatched").mockReturnValueOnce([image]);
    await FigureDiscernible.validate(validateMethodArguments);

    expect(response.passedNodes).toContain(figure);
    expect(response.failedNodes).toHaveLength(0);
  });

  it("should pass when figure element has aria-labelledby", async () => {
    const { response, document, classifier } = validateMethodArguments;

    document.body.innerHTML = `
      <figure aria-labelledby="caption1">
        <span id="caption1">A bar graph showing sales trends in 2020.</span>
      </figure>
    `;

    const figure = document.querySelector("figure");
    const span = document.querySelector("span");

    jest.spyOn(classifier, "getMatched").mockReturnValueOnce([figure]);
    jest.spyOn(classifier, "assert").mockReturnValueOnce(true);
    jest.spyOn(classifier, "getMatched").mockReturnValueOnce([span]);
    await FigureDiscernible.validate(validateMethodArguments);

    expect(response.passedNodes).toContain(figure);
    expect(response.failedNodes).toHaveLength(0);
  });

  it("should fail when figure element has no discernible text", async () => {
    const { response, document, classifier } = validateMethodArguments;

    const figure = document.createElement("figure");
    const image = document.createElement("img");
    figure.appendChild(image);

    jest.spyOn(classifier, "getMatched").mockReturnValueOnce([figure]);
    jest.spyOn(classifier, "assert").mockReturnValueOnce(false);
    jest.spyOn(classifier, "getMatched").mockReturnValueOnce([]);
    await FigureDiscernible.validate(validateMethodArguments);

    expect(response.failedNodes).toContain(figure);
    expect(response.passedNodes).toHaveLength(0);
  });
});
