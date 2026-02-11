import { MapAreaDiscernible } from ".";
import type { ValidationMethodArguments } from "../../../test/unit/helpers/validation-method-arguments";
import validationMethodArguments from "../../../test/unit/helpers/validation-method-arguments";

describe("MapAreaDiscernible Rule Validation", () => {
  let validateMethodArguments: ValidationMethodArguments;

  beforeEach(() => {
    validateMethodArguments = validationMethodArguments();
    document.body.innerHTML = "";
  });

  it("should pass when area is inside valid map and has discernible text", async () => {
    const { response, document, classifier } = validateMethodArguments;

    document.body.innerHTML = `
        <img alt="Workplace" usemap="#workmap" width="400" height="379">
        <map name="workmap">
            <area shape="rect" coords="34,44,270,350" alt="Computer" href="computer.htm">
            <area shape="rect" coords="290,172,333,250" alt="Phone" href="phone.htm">
            <area shape="circle" coords="337,300,44" alt="Cup of coffee" href="coffee.htm">
        </map>
    `;

    const areas = Array.from(document.querySelectorAll("area"));

    jest.spyOn(classifier, "getMatched").mockReturnValue(areas);
    jest.spyOn(classifier, "getOperations").mockReturnValue({
      contentInfo: {
        accessibleName: "Computer",
        title: "",
      },
    });
    await MapAreaDiscernible.validate(validateMethodArguments);

    expect(response.failedNodes.length).toBe(0);
    expect(response.passedNodes.length).toBe(3);
    expect(response.passedNodes).toContain(areas[0]);
    expect(response.passedNodes).toContain(areas[1]);
    expect(response.passedNodes).toContain(areas[2]);
  });

  it("should fail when area is inside valid map but has no discernible text", async () => {
    const { response, document, classifier } = validateMethodArguments;

    document.body.innerHTML = `
        <img alt="Workplace" usemap="#workmap" width="400" height="379">
        <map name="workmap">
            <area shape="rect" coords="34,44,270,350" href="computer.htm">
        </map>
    `;

    const area = document.querySelector("area");

    jest.spyOn(classifier, "getMatched").mockReturnValue([area]);
    jest.spyOn(classifier, "getOperations").mockReturnValue({
      contentInfo: {
        accessibleName: "",
        title: "",
      },
    });
    await MapAreaDiscernible.validate(validateMethodArguments);

    expect(response.failedNodes).toContain(area);
    expect(response.failedNodes.length).toBe(1);
    expect(response.passedNodes.length).toBe(0);
  });
});
