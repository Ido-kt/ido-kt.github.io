import { MenuAvoid } from ".";
import type { ValidationMethodArguments } from "../../../test/unit/helpers/validation-method-arguments";
import validationMethodArguments from "../../../test/unit/helpers/validation-method-arguments";

describe("MenuAvoid Rule Validation", () => {
  let validateMethodArguments: ValidationMethodArguments;

  beforeEach(() => {
    validateMethodArguments = validationMethodArguments();
    const { document } = validateMethodArguments;
    // Prepare a clean state for the document
    document.head.innerHTML = "";
  });

  it("should pass if there is no menu", async () => {
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

    await MenuAvoid.validate(validateMethodArguments);
    expect(response.passedNodes).toHaveLength(0);
    expect(response.failedNodes).toEqual([]);
  });

  it("should fail if there is a div with role menu", async () => {
    const { classifier, document, response } = validateMethodArguments;
    document.body.innerHTML = `
      <div role="menu" aria-label="File Operations" tabindex="0">
          <div role="menuitem" tabindex="-1" id="newFile" onclick="newFile()">New</div>
          <div role="menuitem" tabindex="-1" id="saveFile" onclick="saveFile()">Save</div>
          <div role="menuitem" tabindex="-1" id="deleteFile" onclick="deleteFile()">Delete</div>
      </div>
    `;

    const menu = document.querySelector<HTMLElement>("[role='menu']");
    (classifier.getMatched as jest.Mock).mockReturnValueOnce([menu]);

    await MenuAvoid.validate(validateMethodArguments);
    expect(response.failedNodes).toEqual([menu]);
  });

  it("should have 2 failed nodes for 2 menus", async () => {
    const { classifier, document, response } = validateMethodArguments;
    document.body.innerHTML = `
      <div role="menu" aria-label="File Operations" tabindex="0">
        <div role="menuitem" tabindex="-1" id="newFile" onclick="newFile()">New</div>
        <div role="menuitem" tabindex="-1" id="saveFile" onclick="saveFile()">Save</div>
        <div role="menuitem" tabindex="-1" id="deleteFile" onclick="deleteFile()">Delete</div>
      </div>
      <div role="menu" aria-label="File Operations" tabindex="0">
        <div role="menuitem" tabindex="-1" id="editFile" onclick="editFile()">New</div>
        <div role="menuitem" tabindex="-1" id="copyFile" onclick="copyFile()">Save</div>
        <div role="menuitem" tabindex="-1" id="cutFile" onclick="cutFile()">Delete</div>
      </div>
    `;

    const menus = document.querySelectorAll<HTMLElement>("[role='menu']");
    (classifier.getMatched as jest.Mock).mockReturnValueOnce(Array.from(menus));

    await MenuAvoid.validate(validateMethodArguments);
    expect(response.failedNodes).toEqual(Array.from(menus));
  });

  it("should have 2 failed nodes if there is a menu nested in a menu", async () => {
    const { classifier, document, response } = validateMethodArguments;
    document.body.innerHTML = `
      <div role="menu" aria-label="Main navigation">
          <div role="menuitem" aria-haspopup="true" tabindex="0" aria-expanded="false" id="fileMenuButton" onclick="toggleMenu('fileMenu')">File</div>
          <div id="fileMenu" role="menu" aria-labelledby="fileMenuButton" style="display: none;">
            <div role="menuitem" tabindex="-1" onclick="newFile()">New</div>
            <div role="menuitem" tabindex="-1" onclick="openFile()">Open</div>
            <div role="menuitem" tabindex="-1" onclick="saveFile()">Save</div>
          </div>
      </div>
    `;

    const menus = document.querySelectorAll<HTMLElement>("[role='menu']");
    (classifier.getMatched as jest.Mock).mockReturnValueOnce(Array.from(menus));

    await MenuAvoid.validate(validateMethodArguments);
    expect(response.failedNodes).toEqual(Array.from(menus));
  });
});
