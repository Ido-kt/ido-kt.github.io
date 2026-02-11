import { MenuTriggerCorrectState } from ".";
import type { ValidationMethodArguments } from "../../../test/unit/helpers/validation-method-arguments";
import validationMethodArguments from "../../../test/unit/helpers/validation-method-arguments";

describe("MenuTriggerCorrectState Rule Validation", () => {
  let validateMethodArguments: ValidationMethodArguments;

  beforeEach(() => {
    validateMethodArguments = validationMethodArguments();
    const { document } = validateMethodArguments;
    document.head.innerHTML = "";
  });

  it("should have no nodes in passed and failed if there are no menu triggers", async () => {
    const { classifier, response } = validateMethodArguments;

    (classifier.getMatched as jest.Mock).mockReturnValueOnce([]);

    await MenuTriggerCorrectState.validate(validateMethodArguments);

    expect(response.passedNodes).toHaveLength(0);
    expect(response.failedNodes).toHaveLength(0);
  });

  it("should have no nodes in passed and failed if there is no aria-controls on menu-triggers", async () => {
    const { classifier, response, document } = validateMethodArguments;
    const menuTrigger = document.createElement("button");
    document.body.appendChild(menuTrigger);

    (classifier.getMatched as jest.Mock).mockReturnValueOnce([menuTrigger]);

    await MenuTriggerCorrectState.validate(validateMethodArguments);

    expect(response.passedNodes).toHaveLength(0);
    expect(response.failedNodes).toHaveLength(0);
  });

  it("should have no nodes in passed and failed if there is aria-controls but it points to none existing element", async () => {
    const { classifier, response, document } = validateMethodArguments;
    const menuTrigger = document.createElement("button");
    menuTrigger.setAttribute("aria-controls", "submenu");
    document.body.appendChild(menuTrigger);
    const submenu = document.createElement("div");
    submenu.id = "submenu-other";
    document.body.appendChild(submenu);

    jest.spyOn(classifier, "getMatched").mockReturnValue([menuTrigger]);

    await MenuTriggerCorrectState.validate(validateMethodArguments);

    expect(response.passedNodes).toHaveLength(0);
    expect(response.failedNodes).toHaveLength(0);
  });

  it("should have node in passed and none in failed if there is aria-controls, that points existing element, and expanded=false when menu is non-visible", async () => {
    const { classifier, response, document } = validateMethodArguments;
    const menuTrigger = document.createElement("button");
    menuTrigger.setAttribute("aria-controls", "submenu");
    menuTrigger.setAttribute("aria-expanded", "false");
    document.body.appendChild(menuTrigger);
    const submenu = document.createElement("div");
    submenu.id = "submenu";
    document.body.appendChild(submenu);

    jest.spyOn(classifier, "getMatched").mockReturnValue([menuTrigger]);
    // Asserting menu visibility
    jest.spyOn(classifier, "assert").mockReturnValue(false);

    await MenuTriggerCorrectState.validate(validateMethodArguments);

    expect(response.failedNodes).toHaveLength(0);
    expect(response.passedNodes).toHaveLength(1);
    expect(response.passedNodes).toEqual([menuTrigger]);
  });

  it("should have node in passed and none in failed if there is aria-controls, that points existing element, and expanded=true when menu is visible", async () => {
    const { classifier, response, document } = validateMethodArguments;
    const menuTrigger = document.createElement("button");
    menuTrigger.setAttribute("aria-controls", "submenu");
    menuTrigger.setAttribute("aria-expanded", "true");
    document.body.appendChild(menuTrigger);
    const submenu = document.createElement("div");
    submenu.id = "submenu";
    document.body.appendChild(submenu);

    jest.spyOn(classifier, "getMatched").mockReturnValue([menuTrigger]);
    // Asserting menu visibility
    jest.spyOn(classifier, "assert").mockReturnValue(true);

    await MenuTriggerCorrectState.validate(validateMethodArguments);

    expect(response.failedNodes).toHaveLength(0);
    expect(response.passedNodes).toHaveLength(1);
    expect(response.passedNodes).toEqual([menuTrigger]);
  });

  it("should have node in failed and none in passed if there is aria-controls, that points existing element, and expanded=true when menu is non-visible", async () => {
    const { classifier, response, document } = validateMethodArguments;
    const menuTrigger = document.createElement("button");
    menuTrigger.setAttribute("aria-controls", "submenu");
    menuTrigger.setAttribute("aria-expanded", "true");
    document.body.appendChild(menuTrigger);
    const submenu = document.createElement("div");
    submenu.id = "submenu";
    document.body.appendChild(submenu);

    jest.spyOn(classifier, "getMatched").mockReturnValue([menuTrigger]);
    // Asserting menu visibility
    jest.spyOn(classifier, "assert").mockReturnValue(false);

    await MenuTriggerCorrectState.validate(validateMethodArguments);

    expect(response.passedNodes).toHaveLength(0);
    expect(response.failedNodes).toHaveLength(1);
    expect(response.failedNodes).toEqual([menuTrigger]);
  });

  it("should have node in failed and none in passed if there is aria-controls, that points existing element, and expanded=false when menu is visible", async () => {
    const { classifier, response, document } = validateMethodArguments;
    const menuTrigger = document.createElement("button");
    menuTrigger.setAttribute("aria-controls", "submenu");
    menuTrigger.setAttribute("aria-expanded", "false");
    document.body.appendChild(menuTrigger);
    const submenu = document.createElement("div");
    submenu.id = "submenu";
    document.body.appendChild(submenu);

    jest.spyOn(classifier, "getMatched").mockReturnValue([menuTrigger]);
    // Asserting menu visibility
    jest.spyOn(classifier, "assert").mockReturnValue(true);

    await MenuTriggerCorrectState.validate(validateMethodArguments);

    expect(response.passedNodes).toHaveLength(0);
    expect(response.failedNodes).toHaveLength(1);
    expect(response.failedNodes).toEqual([menuTrigger]);
  });
});
