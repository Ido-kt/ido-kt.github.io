import { NavigationMisuse } from ".";
import type { ValidationMethodArguments } from "../../../test/unit/helpers/validation-method-arguments";
import validationMethodArguments from "../../../test/unit/helpers/validation-method-arguments";

describe("NavigationMisuse Rule Validation", () => {
  let validateMethodArguments: ValidationMethodArguments;

  beforeEach(() => {
    validateMethodArguments = validationMethodArguments();
  });

  it("should have no nodes in failed nodes if there are no navigation regions", async () => {
    const { classifier, response } = validateMethodArguments;
    (classifier.getMatched as jest.Mock).mockReturnValue([]);

    await NavigationMisuse.validate(validateMethodArguments);

    expect(response.failedNodes).toHaveLength(0);
  });

  it("should have no nodes in failed nodes if navigation region is asserted as correctly tagged", async () => {
    const { classifier, response } = validateMethodArguments;
    const navigationRegion = document.createElement("nav");
    navigationRegion.textContent = "Navigation Region";
    const navigationItem = document.createElement("a");
    navigationItem.textContent = "Navigation Item";
    navigationRegion.appendChild(navigationItem);

    (classifier.getMatched as jest.Mock).mockReturnValue([navigationRegion]);
    (classifier.assert as jest.Mock).mockReturnValue(true);

    await NavigationMisuse.validate(validateMethodArguments);

    expect(response.failedNodes).toHaveLength(0);
    expect(response.passedNodes).toHaveLength(1);
    expect(response.passedNodes[0]).toBe(navigationRegion);
  });

  it("should have the failed element in failed nodes if navigation region is empty", async () => {
    const { classifier, response } = validateMethodArguments;
    const navigationRegion = document.createElement("nav");

    (classifier.getMatched as jest.Mock).mockReturnValue([navigationRegion]);
    (classifier.assert as jest.Mock).mockReturnValue(false);

    await NavigationMisuse.validate(validateMethodArguments);

    expect(response.failedNodes[0]).toBe(navigationRegion);
    expect(response.failedNodes).toHaveLength(1);
  });

  it("should mark breadcrumb elements as inapplicable nodes", async () => {
    const { classifier, response } = validateMethodArguments;
    const breadcrumb = document.createElement("nav");
    breadcrumb.setAttribute("aria-label", "Breadcrumb");

    (classifier.getMatched as jest.Mock).mockReturnValue([breadcrumb]);
    (classifier.assert as jest.Mock).mockReturnValueOnce(false); // The element isn't PerceivableComponentNavigation
    (classifier.assert as jest.Mock).mockReturnValueOnce(true); // The element is PerceivableComponentBreadcrumb

    await NavigationMisuse.validate(validateMethodArguments);

    expect(response.inapplicableNodes).toHaveLength(1);
    expect(response.inapplicableNodes[0]).toBe(breadcrumb);
    expect(response.failedNodes).toHaveLength(0);
    expect(response.passedNodes).toHaveLength(0);
  });

  it("should mark main navigation's parent as inapplicable if it is the element", async () => {
    const { classifier, response } = validateMethodArguments;
    const mainNavigation = document.createElement("nav");
    const parentElement = document.createElement("div");
    parentElement.appendChild(mainNavigation);

    (classifier.getMatched as jest.Mock).mockReturnValueOnce([parentElement]); // CompliantComponentNavigation
    (classifier.getMatched as jest.Mock).mockReturnValueOnce([mainNavigation]); // PerceivableComponentMainNavigation
    (classifier.assert as jest.Mock).mockReturnValue(false); // Not PerceivableComponentNavigation

    await NavigationMisuse.validate(validateMethodArguments);

    expect(response.inapplicableNodes).toContain(parentElement);
    expect(response.failedNodes).toHaveLength(0);
    expect(response.passedNodes).toHaveLength(0);
  });

  it("should fail if a navigation element is improperly tagged and not a breadcrumb or main navigation parent", async () => {
    const { classifier, response } = validateMethodArguments;
    const navigationElement = document.createElement("div");
    navigationElement.setAttribute("role", "navigation");

    (classifier.getMatched as jest.Mock).mockReturnValue([navigationElement]);
    (classifier.assert as jest.Mock).mockReturnValue(false); // Not PerceivableComponentNavigation

    await NavigationMisuse.validate(validateMethodArguments);

    expect(response.failedNodes).toContain(navigationElement);
    expect(response.passedNodes).toHaveLength(0);
    expect(response.inapplicableNodes).toHaveLength(0);
  });

  it("should pass if a navigation element is properly tagged", async () => {
    const { classifier, response } = validateMethodArguments;
    const navigationElement = document.createElement("nav");

    (classifier.getMatched as jest.Mock).mockReturnValue([navigationElement]);
    (classifier.assert as jest.Mock).mockReturnValue(true); // PerceivableComponentNavigation

    await NavigationMisuse.validate(validateMethodArguments);

    expect(response.passedNodes).toContain(navigationElement);
    expect(response.failedNodes).toHaveLength(0);
    expect(response.inapplicableNodes).toHaveLength(0);
  });
});
