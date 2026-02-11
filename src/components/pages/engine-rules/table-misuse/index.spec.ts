import { TableMisuse } from ".";
import type { ValidationMethodArguments } from "../../../test/unit/helpers/validation-method-arguments";
import validationMethodArguments from "../../../test/unit/helpers/validation-method-arguments";

describe("TableMisuse Rule Validation", () => {
  let validateMethodArguments: ValidationMethodArguments;

  beforeEach(() => {
    validateMethodArguments = validationMethodArguments();
    const { document } = validateMethodArguments;
    // Prepare a clean state for the document
    document.head.innerHTML = "";
  });

  it("should pass when a table is a data-table with headers", async () => {
    const { response, document, classifier } = validateMethodArguments;
    document.body.innerHTML = `
      <table>
        <thead>
          <tr>
            <th>Header 1</th>
            <th>Header 2</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Data 1</td>
            <td>Data 2</td>
          </tr>
        </tbody>
      </table>
    `;

    const table = document.querySelector("table");

    jest.spyOn(classifier, "getMatched").mockReturnValueOnce([table]);
    jest.spyOn(classifier, "assert").mockReturnValueOnce(false);

    await TableMisuse.validate(validateMethodArguments);

    expect(response.passedNodes).toHaveLength(0);
    expect(response.failedNodes).toContain(table);
  });

  it("should fail when a table is used for layout", async () => {
    const { response, document, classifier } = validateMethodArguments;
    document.body.innerHTML = `
    <table
              style="
                block-size: 38px;
                caret-color: rgb(51, 122, 183);
                color: rgb(51, 122, 183);
                column-rule-color: rgb(51, 122, 183);
                cursor: pointer;
                height: 38px;
                inline-size: 145px;
                margin-block-start: 10px;
                margin-top: 10px;
                outline-color: rgb(51, 122, 183);
                perspective-origin: 72.5px 19px;
                text-decoration: none solid rgb(51, 122, 183);
                text-emphasis-color: rgb(51, 122, 183);
                transform-origin: 72.5px 19px;
                width: 145px;
                -webkit-text-fill-color: rgb(51, 122, 183);
                -webkit-text-stroke-color: rgb(51, 122, 183);
              "
            >
            <thead></thead>
              <tbody
                style="
                  block-size: 38px;
                  border-block-color: rgb(128, 128, 128);
                  border-color: rgb(128, 128, 128);
                  border-collapse: collapse;
                  border-inline-color: rgb(128, 128, 128);
                  caret-color: rgb(51, 122, 183);
                  color: rgb(51, 122, 183);
                  column-rule-color: rgb(51, 122, 183);
                  cursor: pointer;
                  height: 38px;
                  inline-size: 145px;
                  outline-color: rgb(51, 122, 183);
                  perspective-origin: 72.5px 19px;
                  text-decoration: none solid rgb(51, 122, 183);
                  text-emphasis-color: rgb(51, 122, 183);
                  transform-origin: 72.5px 19px;
                  width: 145px;
                  -webkit-text-fill-color: rgb(51, 122, 183);
                  -webkit-text-stroke-color: rgb(51, 122, 183);
                "
              >
                <tr
                  style="
                    block-size: 19px;
                    border-block-color: rgb(128, 128, 128);
                    border-color: rgb(128, 128, 128);
                    border-collapse: collapse;
                    border-inline-color: rgb(128, 128, 128);
                    caret-color: rgb(51, 122, 183);
                    color: rgb(51, 122, 183);
                    column-rule-color: rgb(51, 122, 183);
                    cursor: pointer;
                    height: 19px;
                    inline-size: 145px;
                    outline-color: rgb(51, 122, 183);
                    perspective-origin: 72.5px 9.5px;
                    text-decoration: none solid rgb(51, 122, 183);
                    text-emphasis-color: rgb(51, 122, 183);
                    transform-origin: 72.5px 9.5px;
                    vertical-align: middle;
                    width: 145px;
                    -webkit-text-fill-color: rgb(51, 122, 183);
                    -webkit-text-stroke-color: rgb(51, 122, 183);
                  "
                >
                  <td
                    style="
                      block-size: 19px;
                      border-block-color: rgb(51, 122, 183);
                      border-color: rgb(51, 122, 183);
                      border-collapse: collapse;
                      border-inline-color: rgb(51, 122, 183);
                      caret-color: rgb(51, 122, 183);
                      color: rgb(51, 122, 183);
                      column-rule-color: rgb(51, 122, 183);
                      cursor: pointer;
                      height: 19px;
                      inline-size: 27.6875px;
                      outline-color: rgb(51, 122, 183);
                      perspective-origin: 13.8438px 9.5px;
                      text-decoration: none solid rgb(51, 122, 183);
                      text-emphasis-color: rgb(51, 122, 183);
                      transform-origin: 13.8438px 9.5px;
                      vertical-align: middle;
                      width: 27.6875px;
                      -webkit-text-fill-color: rgb(51, 122, 183);
                      -webkit-text-stroke-color: rgb(51, 122, 183);
                    "
                  >
                    <span
                      class="value-label"
                      style="
                        border-block-color: rgb(85, 85, 85);
                        border-color: rgb(85, 85, 85);
                        border-collapse: collapse;
                        border-inline-color: rgb(85, 85, 85);
                        caret-color: rgb(85, 85, 85);
                        color: rgb(85, 85, 85);
                        column-rule-color: rgb(85, 85, 85);
                        cursor: pointer;
                        font-size: 12px;
                        inline-size: 25px;
                        line-height: 17.1429px;
                        outline-color: rgb(85, 85, 85);
                        text-align: left;
                        text-decoration: none solid rgb(85, 85, 85);
                        text-emphasis-color: rgb(85, 85, 85);
                        width: 25px;
                        -webkit-text-fill-color: rgb(85, 85, 85);
                        -webkit-text-stroke-color: rgb(85, 85, 85);
                      "
                      >Max:</span
                    >
                  </td>
                  <td
                    style="
                      block-size: 19px;
                      border-block-color: rgb(51, 122, 183);
                      border-color: rgb(51, 122, 183);
                      border-collapse: collapse;
                      border-inline-color: rgb(51, 122, 183);
                      caret-color: rgb(51, 122, 183);
                      color: rgb(51, 122, 183);
                      column-rule-color: rgb(51, 122, 183);
                      cursor: pointer;
                      height: 19px;
                      inline-size: 39.0312px;
                      outline-color: rgb(51, 122, 183);
                      perspective-origin: 19.5156px 9.5px;
                      text-decoration: none solid rgb(51, 122, 183);
                      text-emphasis-color: rgb(51, 122, 183);
                      transform-origin: 19.5156px 9.5px;
                      vertical-align: middle;
                      width: 39.0312px;
                      -webkit-text-fill-color: rgb(51, 122, 183);
                      -webkit-text-stroke-color: rgb(51, 122, 183);
                    "
                  >
                    <span
                      class="temperature max value"
                      data-id="2"
                      style="
                        block-size: 18.1406px;
                        border-block-color: rgb(255, 24, 0);
                        border-color: rgb(255, 24, 0);
                        border-collapse: collapse;
                        border-inline-color: rgb(255, 24, 0);
                        caret-color: rgb(255, 24, 0);
                        color: rgb(255, 24, 0);
                        column-rule-color: rgb(255, 24, 0);
                        cursor: pointer;
                        display: block;
                        font-size: 12px;
                        font-weight: 700;
                        height: 18.1406px;
                        inline-size: 37.4219px;
                        line-height: 17.1429px;
                        outline-color: rgb(255, 24, 0);
                        padding-block-start: 1px;
                        padding-inline-end: 5px;
                        padding-right: 5px;
                        padding-top: 1px;
                        perspective-origin: 18.7031px 9.0625px;
                        text-align: right;
                        text-decoration: none solid rgb(255, 24, 0);
                        text-emphasis-color: rgb(255, 24, 0);
                        transform-origin: 18.7109px 9.07031px;
                        width: 37.4219px;
                        -webkit-text-fill-color: rgb(255, 24, 0);
                        -webkit-text-stroke-color: rgb(255, 24, 0);
                      "
                      >12</span
                    >
                  </td>
                  <td
                    style="
                      block-size: 19px;
                      border-block-color: rgb(51, 122, 183);
                      border-color: rgb(51, 122, 183);
                      border-collapse: collapse;
                      border-inline-color: rgb(51, 122, 183);
                      caret-color: rgb(51, 122, 183);
                      color: rgb(51, 122, 183);
                      column-rule-color: rgb(51, 122, 183);
                      cursor: pointer;
                      height: 19px;
                      inline-size: 15.6406px;
                      outline-color: rgb(51, 122, 183);
                      perspective-origin: 7.8125px 9.5px;
                      text-decoration: none solid rgb(51, 122, 183);
                      text-emphasis-color: rgb(51, 122, 183);
                      transform-origin: 7.82031px 9.5px;
                      vertical-align: middle;
                      width: 15.6406px;
                      -webkit-text-fill-color: rgb(51, 122, 183);
                      -webkit-text-stroke-color: rgb(51, 122, 183);
                    "
                  >
                    <span
                      class="icon rain"
                      style="
                        background-image: url('https://yiifrontend.p3k.hu/img/weather/kiderul-sl-sprite.png');
                        background-position: 0px -150px;
                        background-repeat: no-repeat;
                        block-size: 15px;
                        border-block-color: rgb(51, 122, 183);
                        border-color: rgb(51, 122, 183);
                        border-collapse: collapse;
                        border-inline-color: rgb(51, 122, 183);
                        caret-color: rgb(51, 122, 183);
                        color: rgb(51, 122, 183);
                        column-rule-color: rgb(51, 122, 183);
                        cursor: pointer;
                        display: inline-block;
                        height: 15px;
                        inline-size: 15px;
                        outline-color: rgb(51, 122, 183);
                        perspective-origin: 7.5px 7.5px;
                        text-decoration: none solid rgb(51, 122, 183);
                        text-emphasis-color: rgb(51, 122, 183);
                        transform-origin: 7.5px 7.5px;
                        vertical-align: middle;
                        width: 15px;
                        -webkit-text-fill-color: rgb(51, 122, 183);
                        -webkit-text-stroke-color: rgb(51, 122, 183);
                      "
                    ></span>
                  </td>
                  <td
                    style="
                      block-size: 19px;
                      border-block-color: rgb(51, 122, 183);
                      border-color: rgb(51, 122, 183);
                      border-collapse: collapse;
                      border-inline-color: rgb(51, 122, 183);
                      caret-color: rgb(51, 122, 183);
                      color: rgb(51, 122, 183);
                      column-rule-color: rgb(51, 122, 183);
                      cursor: pointer;
                      height: 19px;
                      inline-size: 62.6719px;
                      outline-color: rgb(51, 122, 183);
                      perspective-origin: 31.3281px 9.5px;
                      text-decoration: none solid rgb(51, 122, 183);
                      text-emphasis-color: rgb(51, 122, 183);
                      transform-origin: 31.3359px 9.5px;
                      vertical-align: middle;
                      width: 62.6719px;
                      -webkit-text-fill-color: rgb(51, 122, 183);
                      -webkit-text-stroke-color: rgb(51, 122, 183);
                    "
                  >
                    <span
                      class="rain value"
                      data-id="3"
                      style="
                        block-size: 19px;
                        border-block-color: rgb(64, 109, 151);
                        border-color: rgb(64, 109, 151);
                        border-collapse: collapse;
                        border-inline-color: rgb(64, 109, 151);
                        caret-color: rgb(64, 109, 151);
                        color: rgb(64, 109, 151);
                        column-rule-color: rgb(64, 109, 151);
                        cursor: pointer;
                        display: block;
                        font-size: 12px;
                        font-weight: 700;
                        height: 19px;
                        inline-size: 62.6719px;
                        line-height: 19px;
                        outline-color: rgb(64, 109, 151);
                        perspective-origin: 31.3281px 9.5px;
                        text-align: left;
                        text-decoration: none solid rgb(64, 109, 151);
                        text-emphasis-color: rgb(64, 109, 151);
                        text-wrap-mode: nowrap;
                        transform-origin: 31.3359px 9.5px;
                        width: 62.6719px;
                        -webkit-text-fill-color: rgb(64, 109, 151);
                        -webkit-text-stroke-color: rgb(64, 109, 151);
                      "
                      >0</span
                    >
                  </td>
                </tr>
                <tr
                  style="
                    block-size: 19px;
                    border-block-color: rgb(128, 128, 128);
                    border-color: rgb(128, 128, 128);
                    border-collapse: collapse;
                    border-inline-color: rgb(128, 128, 128);
                    caret-color: rgb(51, 122, 183);
                    color: rgb(51, 122, 183);
                    column-rule-color: rgb(51, 122, 183);
                    cursor: pointer;
                    height: 19px;
                    inline-size: 145px;
                    outline-color: rgb(51, 122, 183);
                    perspective-origin: 72.5px 9.5px;
                    text-decoration: none solid rgb(51, 122, 183);
                    text-emphasis-color: rgb(51, 122, 183);
                    transform-origin: 72.5px 9.5px;
                    vertical-align: middle;
                    width: 145px;
                    -webkit-text-fill-color: rgb(51, 122, 183);
                    -webkit-text-stroke-color: rgb(51, 122, 183);
                  "
                >
                  <td
                    style="
                      block-size: 19px;
                      border-block-color: rgb(51, 122, 183);
                      border-color: rgb(51, 122, 183);
                      border-collapse: collapse;
                      border-inline-color: rgb(51, 122, 183);
                      caret-color: rgb(51, 122, 183);
                      color: rgb(51, 122, 183);
                      column-rule-color: rgb(51, 122, 183);
                      cursor: pointer;
                      height: 19px;
                      inline-size: 27.6875px;
                      outline-color: rgb(51, 122, 183);
                      perspective-origin: 13.8438px 9.5px;
                      text-decoration: none solid rgb(51, 122, 183);
                      text-emphasis-color: rgb(51, 122, 183);
                      transform-origin: 13.8438px 9.5px;
                      vertical-align: middle;
                      width: 27.6875px;
                      -webkit-text-fill-color: rgb(51, 122, 183);
                      -webkit-text-stroke-color: rgb(51, 122, 183);
                    "
                  >
                    <span
                      class="value-label"
                      style="
                        border-block-color: rgb(85, 85, 85);
                        border-color: rgb(85, 85, 85);
                        border-collapse: collapse;
                        border-inline-color: rgb(85, 85, 85);
                        caret-color: rgb(85, 85, 85);
                        color: rgb(85, 85, 85);
                        column-rule-color: rgb(85, 85, 85);
                        cursor: pointer;
                        font-size: 12px;
                        inline-size: 25px;
                        line-height: 17.1429px;
                        outline-color: rgb(85, 85, 85);
                        text-align: left;
                        text-decoration: none solid rgb(85, 85, 85);
                        text-emphasis-color: rgb(85, 85, 85);
                        width: 25px;
                        -webkit-text-fill-color: rgb(85, 85, 85);
                        -webkit-text-stroke-color: rgb(85, 85, 85);
                      "
                      >Min:</span
                    >
                  </td>
                  <td
                    style="
                      block-size: 19px;
                      border-block-color: rgb(51, 122, 183);
                      border-color: rgb(51, 122, 183);
                      border-collapse: collapse;
                      border-inline-color: rgb(51, 122, 183);
                      caret-color: rgb(51, 122, 183);
                      color: rgb(51, 122, 183);
                      column-rule-color: rgb(51, 122, 183);
                      cursor: pointer;
                      height: 19px;
                      inline-size: 39.0156px;
                      outline-color: rgb(51, 122, 183);
                      perspective-origin: 19.5px 9.5px;
                      text-decoration: none solid rgb(51, 122, 183);
                      text-emphasis-color: rgb(51, 122, 183);
                      transform-origin: 19.5078px 9.5px;
                      vertical-align: middle;
                      width: 39.0156px;
                      -webkit-text-fill-color: rgb(51, 122, 183);
                      -webkit-text-stroke-color: rgb(51, 122, 183);
                    "
                  >
                    <span
                      class="temperature min value"
                      data-id="4"
                      style="
                        block-size: 18.1406px;
                        border-block-color: rgb(0, 120, 220);
                        border-color: rgb(0, 120, 220);
                        border-collapse: collapse;
                        border-inline-color: rgb(0, 120, 220);
                        caret-color: rgb(0, 120, 220);
                        color: rgb(0, 120, 220);
                        column-rule-color: rgb(0, 120, 220);
                        cursor: pointer;
                        display: block;
                        font-size: 12px;
                        font-weight: 700;
                        height: 18.1406px;
                        inline-size: 39.0156px;
                        line-height: 17.1429px;
                        outline-color: rgb(0, 120, 220);
                        padding-block-start: 1px;
                        padding-inline-end: 5px;
                        padding-right: 5px;
                        padding-top: 1px;
                        perspective-origin: 19.5px 9.0625px;
                        text-align: right;
                        text-decoration: none solid rgb(0, 120, 220);
                        text-emphasis-color: rgb(0, 120, 220);
                        transform-origin: 19.5078px 9.07031px;
                        width: 39.0156px;
                        -webkit-text-fill-color: rgb(0, 120, 220);
                        -webkit-text-stroke-color: rgb(0, 120, 220);
                      "
                      >-1</span
                    >
                  </td>
                  <td
                    style="
                      block-size: 19px;
                      border-block-color: rgb(51, 122, 183);
                      border-color: rgb(51, 122, 183);
                      border-collapse: collapse;
                      border-inline-color: rgb(51, 122, 183);
                      caret-color: rgb(51, 122, 183);
                      color: rgb(51, 122, 183);
                      column-rule-color: rgb(51, 122, 183);
                      cursor: pointer;
                      height: 19px;
                      inline-size: 15.625px;
                      outline-color: rgb(51, 122, 183);
                      perspective-origin: 7.8125px 9.5px;
                      text-decoration: none solid rgb(51, 122, 183);
                      text-emphasis-color: rgb(51, 122, 183);
                      transform-origin: 7.8125px 9.5px;
                      vertical-align: middle;
                      width: 15.625px;
                      -webkit-text-fill-color: rgb(51, 122, 183);
                      -webkit-text-stroke-color: rgb(51, 122, 183);
                    "
                  >
                    <span
                      class="icon wind"
                      style="
                        background-image: url('https://yiifrontend.p3k.hu/img/weather/kiderul-sl-sprite.png');
                        background-position: 0px -200px;
                        background-repeat: no-repeat;
                        block-size: 15px;
                        border-block-color: rgb(51, 122, 183);
                        border-color: rgb(51, 122, 183);
                        border-collapse: collapse;
                        border-inline-color: rgb(51, 122, 183);
                        caret-color: rgb(51, 122, 183);
                        color: rgb(51, 122, 183);
                        column-rule-color: rgb(51, 122, 183);
                        cursor: pointer;
                        display: inline-block;
                        height: 15px;
                        inline-size: 15px;
                        outline-color: rgb(51, 122, 183);
                        perspective-origin: 7.5px 7.5px;
                        text-decoration: none solid rgb(51, 122, 183);
                        text-emphasis-color: rgb(51, 122, 183);
                        transform-origin: 7.5px 7.5px;
                        vertical-align: middle;
                        width: 15px;
                        -webkit-text-fill-color: rgb(51, 122, 183);
                        -webkit-text-stroke-color: rgb(51, 122, 183);
                      "
                    ></span>
                  </td>
                  <td
                    style="
                      block-size: 19px;
                      border-block-color: rgb(51, 122, 183);
                      border-color: rgb(51, 122, 183);
                      border-collapse: collapse;
                      border-inline-color: rgb(51, 122, 183);
                      caret-color: rgb(51, 122, 183);
                      color: rgb(51, 122, 183);
                      column-rule-color: rgb(51, 122, 183);
                      cursor: pointer;
                      height: 19px;
                      inline-size: 62.6719px;
                      outline-color: rgb(51, 122, 183);
                      perspective-origin: 31.3281px 9.5px;
                      text-decoration: none solid rgb(51, 122, 183);
                      text-emphasis-color: rgb(51, 122, 183);
                      transform-origin: 31.3359px 9.5px;
                      vertical-align: middle;
                      width: 62.6719px;
                      -webkit-text-fill-color: rgb(51, 122, 183);
                      -webkit-text-stroke-color: rgb(51, 122, 183);
                    "
                  >
                    <span
                      class="wind value"
                      data-id="5"
                      style="
                        block-size: 19px;
                        border-block-color: rgb(64, 109, 151);
                        border-color: rgb(64, 109, 151);
                        border-collapse: collapse;
                        border-inline-color: rgb(64, 109, 151);
                        caret-color: rgb(64, 109, 151);
                        color: rgb(64, 109, 151);
                        column-rule-color: rgb(64, 109, 151);
                        cursor: pointer;
                        display: block;
                        font-size: 12px;
                        font-weight: 700;
                        height: 19px;
                        inline-size: 62.6719px;
                        line-height: 19px;
                        outline-color: rgb(64, 109, 151);
                        perspective-origin: 31.3281px 9.5px;
                        text-align: left;
                        text-decoration: none solid rgb(64, 109, 151);
                        text-emphasis-color: rgb(64, 109, 151);
                        text-wrap-mode: nowrap;
                        transform-origin: 31.3359px 9.5px;
                        width: 62.6719px;
                        -webkit-text-fill-color: rgb(64, 109, 151);
                        -webkit-text-stroke-color: rgb(64, 109, 151);
                      "
                      >10-20</span
                    >
                  </td>
                </tr>
              </tbody>
            </table>
    `;

    const table = document.querySelector("table");

    jest.spyOn(classifier, "getMatched").mockReturnValueOnce([table]);
    jest.spyOn(classifier, "assert").mockReturnValueOnce(true);

    await TableMisuse.validate(validateMethodArguments);

    expect(response.failedNodes).toHaveLength(0);
    expect(response.passedNodes).toContain(table);
  });
});
