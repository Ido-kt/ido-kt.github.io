import { MenuBarAvoid } from ".";
import type { ValidationMethodArguments } from "../../../test/unit/helpers/validation-method-arguments";
import validationMethodArguments from "../../../test/unit/helpers/validation-method-arguments";

describe("MenuBarAvoid Rule Validation", () => {
  let validateMethodArguments: ValidationMethodArguments;

  beforeEach(() => {
    validateMethodArguments = validationMethodArguments();
    const { document } = validateMethodArguments;
    // Prepare a clean state for the document
    document.head.innerHTML = "";
  });

  it("should pass if there is no menubar", async () => {
    const { classifier, document, response } = validateMethodArguments;
    document.body.innerHTML = `
      <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li>
              <a href="/about/" aria-haspopup="true" aria-expanded="false">About Us</a>
              <ul aria-label="About Us">
                <li><a href="/about/team">Our Team</a></li>
                <li><a href="/about/mission">Our Mission</a></li>
              </ul>
            </li>
            <li><a href="/services/">Services</a></li>
            <li><a href="/contact/">Contact</a></li>
          </ul>
      </nav>
    `;

    (classifier.getMatched as jest.Mock).mockReturnValueOnce([]);

    await MenuBarAvoid.validate(validateMethodArguments);
    expect(response.failedNodes).toEqual([]);
  });

  it("should fail if there is a menubar", async () => {
    const { classifier, document, response } = validateMethodArguments;
    document.body.innerHTML = `
      <div role="menubar" aria-label="Main navigation">
          <div role="menuitem" aria-haspopup="true" tabindex="0" aria-expanded="false" id="fileMenuButton" onclick="toggleMenu('fileMenu')">File</div>
          <div role="menuitem" aria-haspopup="true" tabindex="0" aria-expanded="false" id="editMenuButton" onclick="toggleMenu('editMenu')">Edit</div>
      </div>
    `;

    const menubar = document.querySelector<HTMLElement>("[role='menubar']");
    (classifier.getMatched as jest.Mock).mockReturnValueOnce([menubar]);

    await MenuBarAvoid.validate(validateMethodArguments);
    expect(response.failedNodes).toEqual([menubar]);
  });

  it("should have 2 failed nodes if there are 2 menubars", async () => {
    const { classifier, document, response } = validateMethodArguments;
    document.body.innerHTML = `
      <div role="menubar" aria-label="Main navigation">
          <div role="menuitem" aria-haspopup="true" tabindex="0" aria-expanded="false" id="fileMenuButton" onclick="toggleMenu('fileMenu')">File</div>
          <div role="menuitem" aria-haspopup="true" tabindex="0" aria-expanded="false" id="editMenuButton" onclick="toggleMenu('editMenu')">Edit</div>
      </div>
      <div role="menubar" aria-label="Secondary navigation">
          <div role="menuitem" aria-haspopup="true" tabindex="0" aria-expanded="false">File</div>
          <div role="menuitem" aria-haspopup="true" tabindex="0" aria-expanded="false">Edit</div>
      </div>
    `;

    const menubars = document.querySelectorAll<HTMLElement>("[role='menubar']");
    (classifier.getMatched as jest.Mock).mockReturnValueOnce(Array.from(menubars));

    await MenuBarAvoid.validate(validateMethodArguments);
    expect(response.failedNodes).toEqual(Array.from(menubars));
  });

  it("should have 2 failed nodes if there is a menubar nested in a menubar", async () => {
    const { classifier, document, response } = validateMethodArguments;
    document.body.innerHTML = `
      <div role="menubar" aria-label="Main navigation">
          <div role="menuitem" aria-haspopup="true" tabindex="0" aria-expanded="false" id="fileMenuButton" onclick="toggleMenu('fileMenu')">File</div>
          <div id="fileMenu" role="menubar" aria-labelledby="fileMenuButton" style="display: none;">
            <div role="menuitem" tabindex="-1" onclick="newFile()">New</div>
            <div role="menuitem" tabindex="-1" onclick="openFile()">Open</div>
            <div role="menuitem" tabindex="-1" onclick="saveFile()">Save</div>
          </div>
      </div>
    `;

    const menubars = document.querySelectorAll<HTMLElement>("[role='menubar']");
    (classifier.getMatched as jest.Mock).mockReturnValueOnce(Array.from(menubars));

    await MenuBarAvoid.validate(validateMethodArguments);
    expect(response.failedNodes).toEqual(Array.from(menubars));
  });
});
