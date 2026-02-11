import { ListItemWithinList } from ".";
import type { ValidationMethodArguments } from "../../../test/unit/helpers/validation-method-arguments";
import validationMethodArguments from "../../../test/unit/helpers/validation-method-arguments";

describe("ListItemWithinList rule validation", () => {
  let validateMethodArguments: ValidationMethodArguments;

  beforeEach(async () => {
    validateMethodArguments = validationMethodArguments();
    validateMethodArguments.document.body.innerHTML = "";
  });

  it("should fail when list item has no list parent (ol/ul)", async () => {
    const { response, document, classifier } = validateMethodArguments;

    const listItem = document.createElement("li");
    listItem.textContent = "List item";
    document.body.appendChild(listItem);

    (classifier.getMatched as jest.Mock).mockReturnValue([listItem]);
    (classifier.getParent as jest.Mock).mockReturnValue(null);
    await ListItemWithinList.validate(validateMethodArguments);

    expect(response.passedNodes).toHaveLength(0);
    expect(response.failedNodes).toContain(listItem);
  });

  it("should pass when list item has a list parent (ol/ul)", async () => {
    const { response, document, classifier } = validateMethodArguments;

    const listItem = document.createElement("li");
    listItem.textContent = "List item";

    const list = document.createElement("ul");
    list.appendChild(listItem);

    document.body.appendChild(list);

    (classifier.getMatched as jest.Mock).mockReturnValue([listItem]);
    (classifier.getParent as jest.Mock).mockResolvedValue(list);
    await ListItemWithinList.validate(validateMethodArguments);

    expect(response.failedNodes).toHaveLength(0);
    expect(response.passedNodes).toContain(listItem);
  });

  it("should fail when role=listitem has no role=list parent", async () => {
    const { response, document, classifier } = validateMethodArguments;

    const listItem = document.createElement("div");
    listItem.setAttribute("role", "listitem");
    listItem.textContent = "List item";
    document.body.appendChild(listItem);

    (classifier.getMatched as jest.Mock).mockReturnValue([listItem]);
    (classifier.getParent as jest.Mock).mockReturnValue(null);
    await ListItemWithinList.validate(validateMethodArguments);

    expect(response.passedNodes).toHaveLength(0);
    expect(response.failedNodes).toContain(listItem);
  });

  it("should pass when role=listitem has a role=list parent", async () => {
    const { response, document, classifier } = validateMethodArguments;

    const listItem = document.createElement("div");
    listItem.setAttribute("role", "listitem");
    listItem.textContent = "List item";

    const list = document.createElement("div");
    list.setAttribute("role", "list");
    list.appendChild(listItem);

    document.body.appendChild(list);

    (classifier.getMatched as jest.Mock).mockReturnValue([listItem]);
    (classifier.getParent as jest.Mock).mockResolvedValue(list);
    await ListItemWithinList.validate(validateMethodArguments);

    expect(response.failedNodes).toHaveLength(0);
    expect(response.passedNodes).toContain(listItem);
  });
});
