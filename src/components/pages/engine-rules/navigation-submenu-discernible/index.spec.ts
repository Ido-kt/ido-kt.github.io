import { NavigationSubmenuDiscernible } from ".";
import type { ValidationMethodArguments } from "../../../test/unit/helpers/validation-method-arguments";
import validationMethodArguments from "../../../test/unit/helpers/validation-method-arguments";

describe("NavigationSubmenuDiscernible Rule Validation", () => {
  let validateMethodArguments: ValidationMethodArguments;

  beforeEach(() => {
    validateMethodArguments = validationMethodArguments();
  });

  it("should have no failed nodes or passed nodes if there are no navigation regions", async () => {
    const { classifier, response } = validateMethodArguments;
    (classifier.getMatched as jest.Mock).mockReturnValue([]);

    await NavigationSubmenuDiscernible.validate(validateMethodArguments);

    expect(response.failedNodes).toEqual([]);
    expect(response.passedNodes).toEqual([]);
  });

  it("should have no failed nodes or passed nodes if the navigation has no submenus", async () => {
    const { classifier, response } = validateMethodArguments;
    document.body.innerHTML = `'
      <nav>
        <ul>
          <li>About</li>
        </ul>
      </nav>
    `;
    const navigationRegion = document.querySelector("nav");

    jest.spyOn(classifier, "getMatched").mockReturnValueOnce([navigationRegion]);
    jest.spyOn(classifier, "getMatched").mockReturnValueOnce([]);

    await NavigationSubmenuDiscernible.validate(validateMethodArguments);

    expect(response.failedNodes).toEqual([]);
    expect(response.passedNodes).toEqual([]);
  });

  it("should have failed nodes if the navigation has submenus with no aria label", async () => {
    const { classifier, response } = validateMethodArguments;
    document.body.innerHTML = `
      <nav>
        <ul>
          <li>
            About
            <ul>
              <li>Submenu Item</li>
            </ul>
          </li>
        </ul>
      </nav>
    `;
    const navigationRegion = document.querySelector("nav");
    const navigationMenus = document.querySelectorAll("ul");

    jest.spyOn(classifier, "getMatched").mockReturnValueOnce([navigationRegion]);
    jest.spyOn(classifier, "getMatched").mockReturnValueOnce([navigationMenus[1]]);
    jest.spyOn(classifier, "getOperations").mockReturnValueOnce({ contentInfo: { accessibleName: "" } });

    await NavigationSubmenuDiscernible.validate(validateMethodArguments);

    expect(response.failedNodes).toEqual([navigationMenus[1]]);
    expect(response.passedNodes).toEqual([]);
  });

  it("should have passed nodes if the navigation has submenus with aria label", async () => {
    const { classifier, response } = validateMethodArguments;
    document.body.innerHTML = `
      <nav>
        <ul>
          <li>
            About
            <ul aria-label="About Menu">
              <li>Submenu Item</li>
            </ul>
          </li>
        </ul>
      </nav>
    `;
    const navigationRegion = document.querySelector("nav");
    const navigationMenus = document.querySelectorAll("ul");

    jest.spyOn(classifier, "getMatched").mockReturnValueOnce([navigationRegion]);
    jest.spyOn(classifier, "getMatched").mockReturnValueOnce([navigationMenus[1]]);
    jest.spyOn(classifier, "getOperations").mockReturnValueOnce({ contentInfo: { accessibleName: "About Menu" } });

    await NavigationSubmenuDiscernible.validate(validateMethodArguments);

    expect(response.failedNodes).toEqual([]);
    expect(response.passedNodes).toEqual([navigationMenus[1]]);
  });
});
