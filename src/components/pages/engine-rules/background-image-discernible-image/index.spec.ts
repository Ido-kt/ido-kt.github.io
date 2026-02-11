import { BackgroundImageDiscernibleImage } from "./index";
import type { ValidationMethodArguments } from "../../../test/unit/helpers/validation-method-arguments";
import validationMethodArguments from "../../../test/unit/helpers/validation-method-arguments";

describe("BackgroundImageDiscernibleImage Rule Validation", () => {
  let validateMethodArguments: ValidationMethodArguments;

  beforeEach(() => {
    validateMethodArguments = validationMethodArguments();
  });

  it("should skip background images without discernible elements", async () => {
    const { response, classifier } = validateMethodArguments;
    const mockImage = document.createElement("div");
    (classifier.getMatched as jest.Mock).mockReturnValueOnce([mockImage]).mockReturnValueOnce([]);

    await BackgroundImageDiscernibleImage.validate(validateMethodArguments);

    expect(response.failedNodes).toEqual([]);
  });

  it("should skip background images with first discernible element that is not screen-reader-only", async () => {
    const { response, classifier } = validateMethodArguments;
    const mockImage = document.createElement("div");
    const mockDiscernibleElement = document.createElement("span");
    (classifier.getMatched as jest.Mock).mockReturnValueOnce([mockImage]).mockReturnValueOnce([mockDiscernibleElement]);
    (classifier.assert as jest.Mock).mockReturnValueOnce(false);

    await BackgroundImageDiscernibleImage.validate(validateMethodArguments);

    expect(response.failedNodes).toEqual([]);
  });

  it("should fail background images with first discernible element that is screen-reader-only but not compliant image", async () => {
    const { response, classifier } = validateMethodArguments;
    const mockImage = document.createElement("div");
    const mockDiscernibleElement = document.createElement("span");
    (classifier.getMatched as jest.Mock).mockReturnValueOnce([mockImage]).mockReturnValueOnce([mockDiscernibleElement]);
    (classifier.assert as jest.Mock).mockReturnValueOnce(true).mockReturnValueOnce(false);

    await BackgroundImageDiscernibleImage.validate(validateMethodArguments);

    expect(response.failedNodes).toEqual([mockDiscernibleElement]);
  });

  it("should pass background images with first discernible element that is screen-reader-only and compliant image", async () => {
    const { response, classifier } = validateMethodArguments;
    const mockImage = document.createElement("div");
    const mockDiscernibleElement = document.createElement("span");
    (classifier.getMatched as jest.Mock).mockReturnValueOnce([mockImage]).mockReturnValueOnce([mockDiscernibleElement]);
    (classifier.assert as jest.Mock).mockReturnValueOnce(true).mockReturnValueOnce(true);

    await BackgroundImageDiscernibleImage.validate(validateMethodArguments);

    expect(response.failedNodes).toEqual([]);
    expect(response.passedNodes).toEqual([mockDiscernibleElement]);
  });
});
