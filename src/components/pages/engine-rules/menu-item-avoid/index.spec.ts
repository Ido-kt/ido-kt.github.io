import { MenuItemAvoid as MenuItemAvoid } from ".";
import type { ValidationMethodArguments } from "../../../test/unit/helpers/validation-method-arguments";
import validationMethodArguments from "../../../test/unit/helpers/validation-method-arguments";

describe("MenuItemAvoid Rule Validation", () => {
  let validateMethodArguments: ValidationMethodArguments;

  beforeEach(() => {
    validateMethodArguments = validationMethodArguments();
  });

  it("should have no failed nodes if nav region has no role=menuitem children", async () => {
    const { response, classifier } = validateMethodArguments;

    document.body.innerHTML = `
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
        </ul>
      </nav>
    `;

    (classifier.getMatched as jest.Mock).mockReturnValueOnce([]);

    await MenuItemAvoid.validate(validateMethodArguments);

    expect(response.failedNodes).toEqual([]);
  });

  it("should have a single failed node if nav region has a single role=menuitem child", async () => {
    const { response, classifier } = validateMethodArguments;

    document.body.innerHTML = `
      <nav>
        <ul>
          <li role="menuitem"><a href="/">Home</a> </li>
        </ul>
      </nav>
    `;

    const li = document.querySelector("li");
    (classifier.getMatched as jest.Mock).mockReturnValueOnce([li]);

    await MenuItemAvoid.validate(validateMethodArguments);

    expect(response.failedNodes).toEqual([li]);
  });

  it("should have multiple failed nodes if nav region has multiple role=menuitem children", async () => {
    const { response, classifier } = validateMethodArguments;

    document.body.innerHTML = `
      <nav>
        <ul>
          <li><a id="test-subject-1" role="menuitem" href="/">Home</a></li>
          <li><a id="test-subject-2" role="menuitem" href="/">About</a></li>
        </ul>
      </nav>
    `;

    const testSubject1 = document.querySelector("#test-subject-1");
    const testSubject2 = document.querySelector("#test-subject-2");
    (classifier.getMatched as jest.Mock).mockReturnValueOnce([testSubject1, testSubject2]);

    await MenuItemAvoid.validate(validateMethodArguments);

    expect(response.failedNodes).toEqual([testSubject1, testSubject2]);
  });

  it("should have multiple failed nodes if multiple nav regions have role=menuitem children", async () => {
    const { response, classifier } = validateMethodArguments;

    document.body.innerHTML = `
      <nav id="nav-1">
        <ul>
          <li><a id="test-subject-1" role="menuitem" href="/">Home</a></li>
        </ul>
      </nav>
      <nav id="nav-2">
        <ul>
          <li><a id="test-subject-2" role="menuitem" href="/">About</a></li>
        </ul>
      </nav>
    `;

    const testSubject1 = document.querySelector("#test-subject-1");
    const testSubject2 = document.querySelector("#test-subject-2");
    (classifier.getMatched as jest.Mock).mockReturnValueOnce([testSubject1, testSubject2]);

    await MenuItemAvoid.validate(validateMethodArguments);

    expect(response.failedNodes).toEqual([testSubject1, testSubject2]);
  });

  it("should have no failed nodes if role=navigation region has no role=menuitem children", async () => {
    const { response, classifier } = validateMethodArguments;

    document.body.innerHTML = `
      <div role="navigation">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
        </ul>
      </div>
    `;

    (classifier.getMatched as jest.Mock).mockReturnValue([]);

    await MenuItemAvoid.validate(validateMethodArguments);

    expect(response.failedNodes).toEqual([]);
  });

  it("should have a single failed node if role=navigation region has a single role=menuitem child", async () => {
    const { response, classifier } = validateMethodArguments;

    document.body.innerHTML = `
      <div role="navigation">
        <ul>
          <li role="menuitem"><a href="/">Home</a> </li>
        </ul>
      </div>
    `;

    const li = document.querySelector("li");
    (classifier.getMatched as jest.Mock).mockReturnValueOnce([li]);

    await MenuItemAvoid.validate(validateMethodArguments);

    expect(response.failedNodes).toEqual([li]);
  });

  it("should have multiple failed nodes if role=navigation region has multiple role=menuitem children", async () => {
    const { response, classifier } = validateMethodArguments;

    document.body.innerHTML = `
      <div role="navigation">
        <ul>
          <li><a id="test-subject-1" role="menuitem" href="/">Home</a></li>
          <li><a id="test-subject-2" role="menuitem" href="/">About</a></li>
        </ul>
      </div>
    `;

    const testSubject1 = document.querySelector("#test-subject-1");
    const testSubject2 = document.querySelector("#test-subject-2");
    (classifier.getMatched as jest.Mock).mockReturnValueOnce([testSubject1, testSubject2]);

    await MenuItemAvoid.validate(validateMethodArguments);

    expect(response.failedNodes).toEqual([testSubject1, testSubject2]);
  });

  it("should have multiple failed nodes if multiple role=navigation regions have role=menuitem children", async () => {
    const { response, classifier } = validateMethodArguments;

    document.body.innerHTML = `
      <div id="div-1" role="navigation">
        <ul>
          <li><a id="test-subject-1" role="menuitem" href="/">Home</a></li>
        </ul>
      </div>
      <div id="div-2" role="navigation">
        <ul>
          <li><a id="test-subject-2" role="menuitem" href="/">About</a></li>
        </ul>
      </div>
    `;

    const testSubject1 = document.querySelector("#test-subject-1");
    const testSubject2 = document.querySelector("#test-subject-2");
    (classifier.getMatched as jest.Mock).mockReturnValueOnce([testSubject1, testSubject2]);

    await MenuItemAvoid.validate(validateMethodArguments);

    expect(response.failedNodes).toEqual([testSubject1, testSubject2]);
  });

  it("should have multiple failed nodes if nav and role=navigation regions have role=menuitem children", async () => {
    const { response, classifier } = validateMethodArguments;

    document.body.innerHTML = `
      <nav>
        <ul>
          <li><a id="test-subject-1" role="menuitem" href="/">Home</a></li>
        </ul>
      </nav>
      <div role="navigation">
        <ul>
          <li><a id="test-subject-2" role="menuitem" href="/">About</a></li>
        </ul>
      </div>
    `;

    const testSubject1 = document.querySelector("#test-subject-1");
    const testSubject2 = document.querySelector("#test-subject-2");
    (classifier.getMatched as jest.Mock).mockReturnValueOnce([testSubject1, testSubject2]);

    await MenuItemAvoid.validate(validateMethodArguments);

    expect(response.failedNodes).toEqual([testSubject1, testSubject2]);
  });

  it("should have multiple failed nodes for nav containing ul with role=menu containing role=menuitem children", async () => {
    const { response, classifier } = validateMethodArguments;

    document.body.innerHTML = `
      <nav>
        <ul role="menu">
          <li><a id="a-1" role="menuitem" href="/">Home</a></li>
          <li><a href="/">About</a></li>
          <li><a id="a-2" role="menuitem" href="/">Contact</a></li>
        </ul>
      </nav>
    `;

    const a1 = document.querySelector("#a-1");
    const a2 = document.querySelector("#a-2");
    (classifier.getMatched as jest.Mock).mockReturnValueOnce([a1, a2]);

    await MenuItemAvoid.validate(validateMethodArguments);

    expect(response.failedNodes).toEqual([a1, a2]);
  });

  it("should have multiple failed nodes for div with role=navigation containing ul with role=menu containing role=menuitem children", async () => {
    const { response, classifier } = validateMethodArguments;

    document.body.innerHTML = `
      <div role="navigation">
        <ul role="menu">
          <li><a id="a-1" role="menuitem" href="/">Home</a></li>
          <li><a href="/">About</a></li>
          <li><a id="a-2" role="menuitem" href="/">Contact</a></li>
        </ul>
      </div>
    `;

    const a1 = document.querySelector("#a-1");
    const a2 = document.querySelector("#a-2");
    (classifier.getMatched as jest.Mock).mockReturnValueOnce([a1, a2]);

    await MenuItemAvoid.validate(validateMethodArguments);

    expect(response.failedNodes).toEqual([a1, a2]);
  });

  it("should have multiple failed nodes for nav containing ul with role=menubar containing role=menuitem children", async () => {
    const { response, classifier } = validateMethodArguments;

    document.body.innerHTML = `
      <nav>
        <ul role="menubar">
          <li><a id="a-1" role="menuitem" href="/">Home</a></li>
          <li><a href="/">About</a></li>
          <li><a id="a-2" role="menuitem" href="/">Contact</a></li>
        </ul>
      </nav>
    `;

    const a1 = document.querySelector("#a-1");
    const a2 = document.querySelector("#a-2");
    (classifier.getMatched as jest.Mock).mockReturnValueOnce([a1, a2]);

    await MenuItemAvoid.validate(validateMethodArguments);

    expect(response.failedNodes).toEqual([a1, a2]);
  });

  it("should have multiple failed nodes for div with role=navigation containing ul with role=menubar containing role=menuitem children", async () => {
    const { response, classifier } = validateMethodArguments;

    document.body.innerHTML = `
      <div role="navigation">
        <ul role="menubar">
          <li><a id="a-1" role="menuitem" href="/">Home</a></li>
          <li><a href="/">About</a></li>
          <li><a id="a-2" role="menuitem" href="/">Contact</a></li>
        </ul>
      </div>
    `;

    const a1 = document.querySelector("#a-1");
    const a2 = document.querySelector("#a-2");
    (classifier.getMatched as jest.Mock).mockReturnValueOnce([a1, a2]);

    await MenuItemAvoid.validate(validateMethodArguments);

    expect(response.failedNodes).toEqual([a1, a2]);
  });
});
