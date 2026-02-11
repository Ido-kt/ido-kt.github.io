import { ListNotEmpty } from ".";
import type { ValidationMethodArguments } from "../../../test/unit/helpers/validation-method-arguments";
import validationMethodArguments from "../../../test/unit/helpers/validation-method-arguments";

describe("ListNotEmpty rule validation", () => {
  let validateMethodArguments: ValidationMethodArguments;

  beforeEach(() => (validateMethodArguments = validationMethodArguments()));

  it("should fail when list (ol/ul) is empty", async () => {
    const { response, document, classifier } = validateMethodArguments;

    const emptyOl = document.createElement("ol");
    document.body.appendChild(emptyOl);

    const emptyUl = document.createElement("ul");
    document.body.appendChild(emptyUl);

    jest.spyOn(classifier, "assert").mockReturnValue(true);
    jest.spyOn(classifier, "getMatched").mockReturnValue([emptyOl, emptyUl]);

    await ListNotEmpty.validate(validateMethodArguments);

    expect(response.failedNodes).toContain(emptyOl);
    expect(response.failedNodes).toContain(emptyUl);
  });

  it("should fail when role=list is empty", async () => {
    const { response, document, classifier } = validateMethodArguments;

    const emptyList = document.createElement("div");
    emptyList.setAttribute("role", "list");
    document.body.appendChild(emptyList);

    jest.spyOn(classifier, "assert").mockReturnValue(true);
    jest.spyOn(classifier, "getMatched").mockReturnValue([emptyList]);

    await ListNotEmpty.validate(validateMethodArguments);

    expect(response.failedNodes).toContain(emptyList);
  });

  it("should fail when role=list has no visible role='listitem' children", async () => {
    const { response, document, classifier } = validateMethodArguments;

    const list = document.createElement("div");
    list.setAttribute("role", "list");
    document.body.appendChild(list);

    const listItemOne = document.createElement("div");
    listItemOne.setAttribute("role", "listitem");
    listItemOne.style.display = "none";
    list.appendChild(listItemOne);

    const listItemTwo = document.createElement("div");
    listItemTwo.setAttribute("role", "listitem");
    listItemTwo.style.visibility = "hidden";
    list.appendChild(listItemTwo);

    jest.spyOn(classifier, "getMatched").mockReturnValue([list]);
    jest.spyOn(classifier, "assert").mockImplementation((el: HTMLElement) => {
      if (el.getAttribute("role") === "list") {
        return true;
      } else {
        return false;
      }
    });

    await ListNotEmpty.validate(validateMethodArguments);

    expect(response.failedNodes).toContain(list);
  });

  it("should pass when role=list has role='listitem' children", async () => {
    const { response, document, classifier } = validateMethodArguments;

    const list = document.createElement("div");
    list.setAttribute("role", "list");
    document.body.appendChild(list);

    const listItem = document.createElement("div");
    listItem.setAttribute("role", "listitem");
    list.appendChild(listItem);

    jest.spyOn(classifier, "assert").mockReturnValue(true);
    jest.spyOn(classifier, "getMatched").mockReturnValueOnce([list, listItem]);
    jest.spyOn(classifier, "getMatched").mockReturnValueOnce([listItem]);

    await ListNotEmpty.validate(validateMethodArguments);

    expect(response.passedNodes).toContain(list);
  });

  it("should pass when list (ol/ul) is not empty", async () => {
    const { response, document, classifier } = validateMethodArguments;

    const listItemOne = document.createElement("li");
    listItemOne.textContent = "list item";
    const listItemTwo = document.createElement("li");
    listItemTwo.textContent = "list item";

    const listOl = document.createElement("ol");
    listOl.appendChild(listItemOne);
    document.body.appendChild(listOl);

    const listUl = document.createElement("ul");
    listUl.appendChild(listItemTwo);
    document.body.appendChild(listUl);

    jest.spyOn(classifier, "assert").mockReturnValue(true);
    jest.spyOn(classifier, "getMatched").mockReturnValueOnce([listOl, listItemOne, listUl, listItemTwo]);

    await ListNotEmpty.validate(validateMethodArguments);

    expect(response.passedNodes).toContain(listOl);
    expect(response.passedNodes).toContain(listUl);
  });

  it("should fail when list (ol/ul) has no visible li children", async () => {
    const { response, document, classifier } = validateMethodArguments;

    const listItemOne = document.createElement("li");
    listItemOne.style.display = "none";
    listItemOne.textContent = "list item one";
    const listItemTwo = document.createElement("li");
    listItemTwo.style.visibility = "hidden";
    listItemTwo.textContent = "list item two";

    const listOl = document.createElement("ol");
    listOl.appendChild(listItemOne);
    document.body.appendChild(listOl);

    const listUl = document.createElement("ul");
    listUl.appendChild(listItemTwo);
    document.body.appendChild(listUl);

    jest.spyOn(classifier, "getMatched").mockReturnValue([listOl, listUl]);
    jest.spyOn(classifier, "assert").mockImplementation((el: HTMLElement) => {
      if (el.tagName === "OL" || el.tagName === "UL") {
        return true;
      } else {
        return false;
      }
    });

    await ListNotEmpty.validate(validateMethodArguments);

    expect(response.failedNodes).toContain(listOl);
    expect(response.failedNodes).toContain(listUl);
  });
});
