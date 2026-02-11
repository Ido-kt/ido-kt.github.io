import { NoRoleApplication } from ".";
import type { ValidationMethodArguments } from "../../../test/unit/helpers/validation-method-arguments";
import validationMethodArguments from "../../../test/unit/helpers/validation-method-arguments";

describe("RoleApplication rule validation", () => {
  let validateMethodArguments: ValidationMethodArguments;

  beforeEach(() => (validateMethodArguments = validationMethodArguments()));

  it('should fail when element has role="application"', () => {
    const { response, document } = validateMethodArguments;

    const roleApplication = document.createElement("div");
    roleApplication.setAttribute("role", "application");
    document.body.appendChild(roleApplication);

    NoRoleApplication.validate(validateMethodArguments);

    expect(response.failedNodes.length).toBeGreaterThan(0);
  });

  it('should pass when there is no element with role="application"', () => {
    const { response, document } = validateMethodArguments;

    const roleApplication = document.createElement("div");
    roleApplication.setAttribute("role", "button");
    document.body.appendChild(roleApplication);

    NoRoleApplication.validate(validateMethodArguments);

    expect(response.failedNodes).toHaveLength(0);
  });
});
