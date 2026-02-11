import { PageMetaViewportValid } from ".";
import type { ValidationMethodArguments } from "../../../test/unit/helpers/validation-method-arguments";
import validationMethodArguments from "../../../test/unit/helpers/validation-method-arguments";

describe("pageMetaViewportValid rule validation", () => {
  let validateMethodArguments: ValidationMethodArguments;

  beforeEach(() => (validateMethodArguments = validationMethodArguments()));

  it("should pass if a meta viewport with valid content is present", async () => {
    const { response, document, root } = validateMethodArguments;

    // Setup for a valid meta viewport
    const head = document.querySelector("head");
    const metaViewport = document.createElement("meta");
    metaViewport.name = "viewport";
    metaViewport.content = "width=device-width, initial-scale=1";
    head.appendChild(metaViewport);
    root.appendChild(head);

    await PageMetaViewportValid.validate(validateMethodArguments);

    expect(response.failedNodes).toHaveLength(0);
  });

  it("should pass if the meta viewport tag is missing", async () => {
    const { response } = validateMethodArguments;

    await PageMetaViewportValid.validate(validateMethodArguments);

    expect(response.failedNodes).toHaveLength(0);
    expect(response.passedNodes).toHaveLength(0);
  });

  it("should fail if the meta viewport content is invalid or empty", async () => {
    const { response, root } = validateMethodArguments;

    // Setup with an invalid meta viewport content
    const head = document.querySelector<HTMLHeadElement>("head");
    const metaViewport = document.createElement("meta");
    metaViewport.name = "viewport";
    metaViewport.content = ""; // Assuming empty content is invalid
    head.appendChild(metaViewport);
    root.appendChild(head);

    await PageMetaViewportValid.validate(validateMethodArguments);

    expect(response.failedNodes).toContain(metaViewport);
  });

  it("should fail if the meta viewport content has user-scalable=no", async () => {
    const { response, document, root } = validateMethodArguments;

    // Setup with user-scalable=no
    const head = document.querySelector<HTMLHeadElement>("head");
    const metaViewport = document.createElement("meta");
    metaViewport.name = "viewport";
    metaViewport.content = "width=device-width, initial-scale=1, user-scalable=no";
    head.appendChild(metaViewport);
    root.appendChild(head);

    await PageMetaViewportValid.validate(validateMethodArguments);

    expect(response.failedNodes).toContain(metaViewport);
  });

  it("should fail if the meta viewport content has maximum-scale less than 2", async () => {
    const { response, document, root } = validateMethodArguments;

    // Setup with maximum-scale less than 2
    const head = document.querySelector<HTMLHeadElement>("head");
    const metaViewport = document.createElement("meta");
    metaViewport.name = "viewport";
    metaViewport.content = "width=device-width, initial-scale=1, maximum-scale=1.5";
    head.appendChild(metaViewport);
    root.appendChild(head);

    await PageMetaViewportValid.validate(validateMethodArguments);

    expect(response.failedNodes).toContain(metaViewport);
  });

  it("should pass if the meta viewport content has maximum-scale equal to or greater than 2", async () => {
    const { response, document, root } = validateMethodArguments;

    // Setup with maximum-scale equal to 2
    const head = document.querySelector<HTMLHeadElement>("head");
    const metaViewport = document.createElement("meta");
    metaViewport.name = "viewport";
    metaViewport.content = "width=device-width, initial-scale=1, maximum-scale=2";
    head.appendChild(metaViewport);
    root.appendChild(head);

    await PageMetaViewportValid.validate(validateMethodArguments);

    expect(response.failedNodes).toHaveLength(0);
    expect(response.passedNodes).toContain(metaViewport);
  });
});
