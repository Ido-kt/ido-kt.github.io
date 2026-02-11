import React from "react";
import EngineIssueFailure from "../../../layout/engineIssueFailure";

const TableMisuseFailure = () => {
  const ruleId = "table-misuse";
  const title = `Only elements that function as data tables should be tagged as table`;
  const description = `When a layout table is marked up with HTML elements like <table> or <tr>, or assigned table ARIA roles, screen readers announce a data table structure with rows, columns, and headers, even though the table is only used for page layout.`;
  const helpText = `Avoid using table markup or roles for visual layout. Use CSS for page structure, and if a table must be used for layout, remove semantic roles by adding role="presentation" or role="none".`;
  const fixSteps = [
  "Review the HTML structure",
  "Apply proper accessibility attributes",
  "Test with screen readers"
  ];
  const htmlExamples = [
  { filename: "books", content: `<div class="mobile-container" style="background-color: rgb(204, 204, 204); block-size: 2112px; height: 2112px; inline-size: 1998px; padding-block: 8px; padding: 8px; padding-inline: 8px; perspective-origin: 1007px 1064px; transform-origin: 1007px 1064px; width: 1998px">
  <center class="top-ad" style="block-size: 18px; height: 18px; inline-size: 1998px; perspective-origin: 999px 9px; transform-origin: 999px 9px; width: 1998px">
    <a
      href="https://pubads.g.doubleclick.net/gampad/jump?iu=/5963/TL-Web/Books&amp;sz=320x50&amp;c=98491"
      style="
        border-block-color: rgb(0, 0, 238);
        border-color: rgb(0, 0, 238);
        border-inline-color: rgb(0, 0, 238);
        caret-color: rgb(0, 0, 238);
        color: rgb(0, 0, 238);
        column-rule-color: rgb(0, 0, 238);
        cursor: pointer;
        outline-color: rgb(0, 0, 238);
        text-align: -webkit-center;
        text-decoration: underline solid rgb(0, 0, 238);
        text-emphasis-color: rgb(0, 0, 238);
        -webkit-text-decorations-in-effect: underline;
        -webkit-text-fill-color: rgb(0, 0, 238);
        -webkit-text-stroke-color: rgb(0, 0, 238);
      "
    >
      <img
        src="https://pubads.g.doubleclick.net/gampad/ad?iu=/5963/TL-Web/Books&amp;sz=320x50&amp;c=98491"
        style="
          block-size: 1px;
          border-block-color: rgb(0, 0, 238);
          border-color: rgb(0, 0, 238);
          border-inline-color: rgb(0, 0, 238);
          caret-color: rgb(0, 0, 238);
          color: rgb(0, 0, 238);
          column-rule-color: rgb(0, 0, 238);
          cursor: pointer;
          height: 1px;
          inline-size: 1px;
          outline-color: rgb(0, 0, 238);
          perspective-origin: 0.5px 0.5px;
          text-align: -webkit-center;
          text-decoration: none solid rgb(0, 0, 238);
          text-emphasis-color: rgb(0, 0, 238);
          transform-origin: 0.5px 0.5px;
          width: 1px;
          -webkit-text-decorations-in-effect: underline;
          -webkit-text-fill-color: rgb(0, 0, 238);
          -webkit-text-stroke-color: rgb(0, 0, 238);
        "
      />
    </a>
  </center>
  <div class="article sunday-times" style="background-color: rgb(255, 255, 255); block-size: 316px; height: 316px; inline-size: 1998px; margin-block-end: 5px; margin-bottom: 5px; perspective-origin: 999px 158px; transform-origin: 999px 158px; width: 1998px">
    <div class="row" style="block-size: 316px; height: 316px; inline-size: 1998px; perspective-origin: 999px 158px; transform-origin: 999px 158px; width: 1998px">
      <table style="block-size: 316px; height: 316px; inline-size: 1998px; perspective-origin: 999px 158px; transform-origin: 999px 158px; width: 1998px">
        <tbody style="block-size: 316px; border-block-color: rgb(128, 128, 128); border-color: rgb(128, 128, 128); border-inline-color: rgb(128, 128, 128); height: 316px; inline-size: 1998px; perspective-origin: 999px 158px; transform-origin: 999px 158px; width: 1998px">
          <tr class="" style="block-size: 316px; border-block-color: rgb(128, 128, 128); border-color: rgb(128, 128, 128); border-inline-color: rgb(128, 128, 128); height: 316px; inline-size: 1998px; perspective-origin: 999px 158px; transform-origin: 999px 158px; vertical-align: middle; width: 1998px">
            <td colspan="" style="block-size: 314px; height: 314px; inline-size: 1996px; perspective-origin: 999px 158px; transform-origin: 999px 158px; vertical-align: middle; width: 1996px">
              <div class="container" style="block-size: 314px; height: 314px; inline-size: 1996px; perspective-origin: 998px 157px; transform-origin: 998px 157px; width: 1996px">
                <div class="" style="inline-size: 1996px; perspective-origin: 998px 0px; transform-origin: 998px 0px; width: 1996px"></div>
                <a
                  class="firstimage"
                  href="https://www.timeslive.co.za/sunday-times/books/news/2024-09-08-the-2024-sunday-times-literary-awards-shortlist/"
                  title=""
                  style="
                    background-image: url('https://lh3.googleusercontent.com/1_YwWl0lfYIWoaEEVfNDXB20Ws-qXiyMpMbJ0j6i3mhxKTJaP1M_pLvmCxxYQzSrc7hqMz5aYLvQup40k5nj4tBjfxEsRtAviQ=s300');
                    background-position: 50% 50%;
                    background-repeat: no-repeat;
                    background-size: cover;
                    block-size: 250px;
                    border-block-color: rgb(0, 0, 238);
                    border-color: rgb(0, 0, 238);
                    border-inline-color: rgb(0, 0, 238);
                    caret-color: rgb(0, 0, 238);
                    color: rgb(0, 0, 238);
                    column-rule-color: rgb(0, 0, 238);
                    cursor: pointer;
                    display: block;
                    height: 250px;
                    inline-size: 1996px;
                    outline-color: rgb(0, 0, 238);
                    perspective-origin: 998px 125px;
                    text-decoration: underline solid rgb(0, 0, 238);
                    text-emphasis-color: rgb(0, 0, 238);
                    transform-origin: 998px 125px;
                    width: 1996px;
                    -webkit-text-decorations-in-effect: underline;
                    -webkit-text-fill-color: rgb(0, 0, 238);
                    -webkit-text-stroke-color: rgb(0, 0, 238);
                  "
                >
                </a>
                <div class="title-firstsection" style="block-size: 44px; height: 44px; inline-size: 1990px; padding-block: 10px; padding-bottom: 10px; padding-inline-start: 6px; padding-left: 6px; padding-top: 10px; perspective-origin: 998px 32px; transform-origin: 998px 32px; width: 1990px">
                  <div
                    class="meta"
                    style="
                      block-size: 11px;
                      border-block-color: rgb(195, 14, 61);
                      border-color: rgb(195, 14, 61);
                      border-inline-color: rgb(195, 14, 61);
                      caret-color: rgb(195, 14, 61);
                      color: rgb(195, 14, 61);
                      column-rule-color: rgb(195, 14, 61);
                      font-family: Arial;
                      font-size: 10px;
                      font-weight: 700;
                      height: 11px;
                      inline-size: 1990px;
                      outline-color: rgb(195, 14, 61);
                      padding-block-end: 2px;
                      padding-bottom: 2px;
                      perspective-origin: 995px 6.5px;
                      text-decoration: none solid rgb(195, 14, 61);
                      text-emphasis-color: rgb(195, 14, 61);
                      transform-origin: 995px 6.5px;
                      width: 1990px;
                      -webkit-text-fill-color: rgb(195, 14, 61);
                      -webkit-text-stroke-color: rgb(195, 14, 61);
                    "
                  >
                    News
                  </div>
                  <span class="firsttitle" style="font-family: Arial; font-size: 17px; font-weight: 700">
                    <a
                      href="https://www.timeslive.co.za/sunday-times/books/news/2024-09-08-the-2024-sunday-times-literary-awards-shortlist/"
                      style="
                        block-size: 15px;
                        border-block-color: rgb(30, 26, 26);
                        border-color: rgb(30, 26, 26);
                        border-inline-color: rgb(30, 26, 26);
                        caret-color: rgb(30, 26, 26);
                        color: rgb(30, 26, 26);
                        column-rule-color: rgb(30, 26, 26);
                        cursor: pointer;
                        display: inline-block;
                        font-family: Arial;
                        font-size: 17px;
                        font-weight: 700;
                        height: 15px;
                        inline-size: 396.516px;
                        line-height: 15px;
                        outline-color: rgb(30, 26, 26);
                        perspective-origin: 198.25px 7.5px;
                        text-decoration: none solid rgb(30, 26, 26);
                        text-emphasis-color: rgb(30, 26, 26);
                        transform-origin: 198.258px 7.5px;
                        width: 396.516px;
                        -webkit-text-fill-color: rgb(30, 26, 26);
                        -webkit-text-stroke-color: rgb(30, 26, 26);
                      "
                    >
                      The 2024 Sunday Times Literary Awards shortlist
                    </a>
                  </span>
                  <div class="date-stamp" style="block-size: 11px; font-family: Arial; font-size: 10px; height: 11px; inline-size: 1990px; perspective-origin: 995px 5.5px; transform-origin: 995px 5.5px; width: 1990px">4 weeks ago</div>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <div class="article sunday-times" style="background-color: rgb(255, 255, 255); block-size: 67px; height: 67px; inline-size: 1998px; margin-block-end: 5px; margin-bottom: 5px; perspective-origin: 999px 33.5px; transform-origin: 999px 33.5px; width: 1998px">
    <div class="row" style="block-size: 67px; height: 67px; inline-size: 1998px; perspective-origin: 999px 33.5px; transform-origin: 999px 33.5px; width: 1998px">
      <table style="block-size: 67px; height: 67px; inline-size: 1998px; perspective-origin: 999px 33.5px; transform-origin: 999px 33.5px; width: 1998px">
        <tbody style="block-size: 67px; border-block-color: rgb(128, 128, 128); border-color: rgb(128, 128, 128); border-inline-color: rgb(128, 128, 128); height: 67px; inline-size: 1998px; perspective-origin: 999px 33.5px; transform-origin: 999px 33.5px; width: 1998px">
          <tr style="block-size: 67px; border-block-color: rgb(128, 128, 128); border-color: rgb(128, 128, 128); border-inline-color: rgb(128, 128, 128); height: 67px; inline-size: 1998px; perspective-origin: 999px 33.5px; transform-origin: 999px 33.5px; vertical-align: middle; width: 1998px">
            <td text-align="top" valign="top" align="left" width="65px" height="65px" style="block-size: 65px; height: 65px; inline-size: 65px; perspective-origin: 33.5px 33.5px; text-align: -webkit-left; transform-origin: 33.5px 33.5px; vertical-align: top; width: 65px">
              <a
                aria-label="article image"
                class="image"
                href="https://www.timeslive.co.za/sunday-times/opinion-and-analysis/insight/2024-10-06-return-of-the-superspreader/"
                title=""
                style="
                  background-image: url('https://lh3.googleusercontent.com/n8sYa4_IaIn7it1-asE4XrvuaCfaLCXHCCDoEo6K_JHN8hEltyYIRU_Ix0M-UrDzWUWeRfiE5MZtZTExx4Sj1jc8Vkle90Bcxs0=s300');
                  background-repeat: no-repeat;
                  background-size: cover;
                  block-size: 65px;
                  border-block-color: rgb(0, 0, 238);
                  border-color: rgb(0, 0, 238);
                  border-inline-color: rgb(0, 0, 238);
                  caret-color: rgb(0, 0, 238);
                  color: rgb(0, 0, 238);
                  column-rule-color: rgb(0, 0, 238);
                  cursor: pointer;
                  display: block;
                  height: 65px;
                  inline-size: 65px;
                  outline-color: rgb(0, 0, 238);
                  perspective-origin: 32.5px 32.5px;
                  text-align: -webkit-left;
                  text-decoration: underline solid rgb(0, 0, 238);
                  text-emphasis-color: rgb(0, 0, 238);
                  transform-origin: 32.5px 32.5px;
                  width: 65px;
                  -webkit-text-decorations-in-effect: underline;
                  -webkit-text-fill-color: rgb(0, 0, 238);
                  -webkit-text-stroke-color: rgb(0, 0, 238);
                "
              ></a>
            </td>
            <td valign="top" style="block-size: 65px; height: 65px; inline-size: 1929px; perspective-origin: 965.5px 33.5px; transform-origin: 965.5px 33.5px; vertical-align: top; width: 1929px">
              <div id="titlesection" style="block-size: 42px; height: 42px; inline-size: 1924px; padding-block-start: 5px; padding-inline-start: 5px; padding-left: 5px; padding-top: 5px; perspective-origin: 964.5px 23.5px; transform-origin: 964.5px 23.5px; width: 1924px">
                <div
                  class="meta"
                  style="
                    block-size: 11px;
                    border-block-color: rgb(195, 14, 61);
                    border-color: rgb(195, 14, 61);
                    border-inline-color: rgb(195, 14, 61);
                    caret-color: rgb(195, 14, 61);
                    color: rgb(195, 14, 61);
                    column-rule-color: rgb(195, 14, 61);
                    font-family: Arial;
                    font-size: 10px;
                    font-weight: 700;
                    height: 11px;
                    inline-size: 1924px;
                    outline-color: rgb(195, 14, 61);
                    padding-block-end: 2px;
                    padding-bottom: 2px;
                    perspective-origin: 962px 6.5px;
                    text-decoration: none solid rgb(195, 14, 61);
                    text-emphasis-color: rgb(195, 14, 61);
                    transform-origin: 962px 6.5px;
                    width: 1924px;
                    -webkit-text-fill-color: rgb(195, 14, 61);
                    -webkit-text-stroke-color: rgb(195, 14, 61);
                  "
                >
                  Insight
                </div>
                <span class="title" style="font-family: Arial; font-size: 13px; font-weight: 700">
                  <a
                    href="https://www.timeslive.co.za/sunday-times/opinion-and-analysis/insight/2024-10-06-return-of-the-superspreader/"
                    style="
                      block-size: 15px;
                      border-block-color: rgb(30, 26, 26);
                      border-color: rgb(30, 26, 26);
                      border-inline-color: rgb(30, 26, 26);
                      caret-color: rgb(30, 26, 26);
                      color: rgb(30, 26, 26);
                      column-rule-color: rgb(30, 26, 26);
                      cursor: pointer;
                      display: inline-block;
                      font-family: Arial;
                      font-size: 13px;
                      font-weight: 700;
                      height: 15px;
                      inline-size: 174.828px;
                      line-height: 15px;
                      outline-color: rgb(30, 26, 26);
                      perspective-origin: 87.4062px 7.5px;
                      text-decoration: none solid rgb(30, 26, 26);
                      text-emphasis-color: rgb(30, 26, 26);
                      transform-origin: 87.4141px 7.5px;
                      width: 174.828px;
                      -webkit-text-fill-color: rgb(30, 26, 26);
                      -webkit-text-stroke-color: rgb(30, 26, 26);
                    "
                  >
                    Return of the superspreader
                  </a>
                </span>
                <div class="date-stamp" style="block-size: 11px; font-family: Arial; font-size: 10px; height: 11px; inline-size: 1924px; perspective-origin: 962px 5.5px; transform-origin: 962px 5.5px; width: 1924px">15 hours ago</div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <div class="article sunday-times" style="background-color: rgb(255, 255, 255); block-size: 67px; height: 67px; inline-size: 1998px; margin-block-end: 5px; margin-bottom: 5px; perspective-origin: 999px 33.5px; transform-origin: 999px 33.5px; width: 1998px">
    <div class="row" style="block-size: 67px; height: 67px; inline-size: 1998px; perspective-origin: 999px 33.5px; transform-origin: 999px 33.5px; width: 1998px">
      <table style="block-size: 67px; height: 67px; inline-size: 1998px; perspective-origin: 999px 33.5px; transform-origin: 999px 33.5px; width: 1998px">
        <tbody style="block-size: 67px; border-block-color: rgb(128, 128, 128); border-color: rgb(128, 128, 128); border-inline-color: rgb(128, 128, 128); height: 67px; inline-size: 1998px; perspective-origin: 999px 33.5px; transform-origin: 999px 33.5px; width: 1998px">
          <tr style="block-size: 67px; border-block-color: rgb(128, 128, 128); border-color: rgb(128, 128, 128); border-inline-color: rgb(128, 128, 128); height: 67px; inline-size: 1998px; perspective-origin: 999px 33.5px; transform-origin: 999px 33.5px; vertical-align: middle; width: 1998px">
            <td text-align="top" valign="top" align="left" width="65px" height="65px" style="block-size: 65px; height: 65px; inline-size: 65px; perspective-origin: 33.5px 33.5px; text-align: -webkit-left; transform-origin: 33.5px 33.5px; vertical-align: top; width: 65px">
              <a
                aria-label="article image"
                class="image"
                href="https://www.timeslive.co.za/sunday-times/books/news/2024-10-06-sunday-times-literary-awards-shortlist--an-extract-from-the-race-to-be-myself-by-caster-semenya/"
                title=""
                style="
                  background-image: url('https://lh3.googleusercontent.com/2pUQ7Tl-GQQ4dLgGbk8vMu6nmeaNBKPIIygm7wlpkRWmnQ0a44yPBPaVw3xJFcCkzU5lZTrj05pNS3GodBxPhIEz1D3ukkavWA=s300');
                  background-repeat: no-repeat;
                  background-size: cover;
                  block-size: 65px;
                  border-block-color: rgb(0, 0, 238);
                  border-color: rgb(0, 0, 238);
                  border-inline-color: rgb(0, 0, 238);
                  caret-color: rgb(0, 0, 238);
                  color: rgb(0, 0, 238);
                  column-rule-color: rgb(0, 0, 238);
                  cursor: pointer;
                  display: block;
                  height: 65px;
                  inline-size: 65px;
                  outline-color: rgb(0, 0, 238);
                  perspective-origin: 32.5px 32.5px;
                  text-align: -webkit-left;
                  text-decoration: underline solid rgb(0, 0, 238);
                  text-emphasis-color: rgb(0, 0, 238);
                  transform-origin: 32.5px 32.5px;
                  width: 65px;
                  -webkit-text-decorations-in-effect: underline;
                  -webkit-text-fill-color: rgb(0, 0, 238);
                  -webkit-text-stroke-color: rgb(0, 0, 238);
                "
              ></a>
            </td>
            <td valign="top" style="block-size: 65px; height: 65px; inline-size: 1929px; perspective-origin: 965.5px 33.5px; transform-origin: 965.5px 33.5px; vertical-align: top; width: 1929px">
              <div id="titlesection" style="block-size: 42px; height: 42px; inline-size: 1924px; padding-block-start: 5px; padding-inline-start: 5px; padding-left: 5px; padding-top: 5px; perspective-origin: 964.5px 23.5px; transform-origin: 964.5px 23.5px; width: 1924px">
                <div
                  class="meta"
                  style="
                    block-size: 11px;
                    border-block-color: rgb(195, 14, 61);
                    border-color: rgb(195, 14, 61);
                    border-inline-color: rgb(195, 14, 61);
                    caret-color: rgb(195, 14, 61);
                    color: rgb(195, 14, 61);
                    column-rule-color: rgb(195, 14, 61);
                    font-family: Arial;
                    font-size: 10px;
                    font-weight: 700;
                    height: 11px;
                    inline-size: 1924px;
                    outline-color: rgb(195, 14, 61);
                    padding-block-end: 2px;
                    padding-bottom: 2px;
                    perspective-origin: 962px 6.5px;
                    text-decoration: none solid rgb(195, 14, 61);
                    text-emphasis-color: rgb(195, 14, 61);
                    transform-origin: 962px 6.5px;
                    width: 1924px;
                    -webkit-text-fill-color: rgb(195, 14, 61);
                    -webkit-text-stroke-color: rgb(195, 14, 61);
                  "
                >
                  News
                </div>
                <span class="title" style="font-family: Arial; font-size: 13px; font-weight: 700">
                  <a
                    href="https://www.timeslive.co.za/sunday-times/books/news/2024-10-06-sunday-times-literary-awards-shortlist--an-extract-from-the-race-to-be-myself-by-caster-semenya/"
                    style="
                      block-size: 15px;
                      border-block-color: rgb(30, 26, 26);
                      border-color: rgb(30, 26, 26);
                      border-inline-color: rgb(30, 26, 26);
                      caret-color: rgb(30, 26, 26);
                      color: rgb(30, 26, 26);
                      column-rule-color: rgb(30, 26, 26);
                      cursor: pointer;
                      display: inline-block;
                      font-family: Arial;
                      font-size: 13px;
                      font-weight: 700;
                      height: 15px;
                      inline-size: 622.312px;
                      line-height: 15px;
                      outline-color: rgb(30, 26, 26);
                      perspective-origin: 311.156px 7.5px;
                      text-decoration: none solid rgb(30, 26, 26);
                      text-emphasis-color: rgb(30, 26, 26);
                      transform-origin: 311.156px 7.5px;
                      width: 622.312px;
                      -webkit-text-fill-color: rgb(30, 26, 26);
                      -webkit-text-stroke-color: rgb(30, 26, 26);
                    "
                  >
                    Sunday Times Literary Awards shortlist | An extract from ‘The Race to Be Myself’ by Caster Semenya
                  </a>
                </span>
                <div class="date-stamp" style="block-size: 11px; font-family: Arial; font-size: 10px; height: 11px; inline-size: 1924px; perspective-origin: 962px 5.5px; transform-origin: 962px 5.5px; width: 1924px">15 hours ago</div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <div class="article sunday-times" style="background-color: rgb(255, 255, 255); block-size: 67px; height: 67px; inline-size: 1998px; margin-block-end: 5px; margin-bottom: 5px; perspective-origin: 999px 33.5px; transform-origin: 999px 33.5px; width: 1998px">
    <div class="row" style="block-size: 67px; height: 67px; inline-size: 1998px; perspective-origin: 999px 33.5px; transform-origin: 999px 33.5px; width: 1998px">
      <table style="block-size: 67px; height: 67px; inline-size: 1998px; perspective-origin: 999px 33.5px; transform-origin: 999px 33.5px; width: 1998px">
        <tbody style="block-size: 67px; border-block-color: rgb(128, 128, 128); border-color: rgb(128, 128, 128); border-inline-color: rgb(128, 128, 128); height: 67px; inline-size: 1998px; perspective-origin: 999px 33.5px; transform-origin: 999px 33.5px; width: 1998px">
          <tr style="block-size: 67px; border-block-color: rgb(128, 128, 128); border-color: rgb(128, 128, 128); border-inline-color: rgb(128, 128, 128); height: 67px; inline-size: 1998px; perspective-origin: 999px 33.5px; transform-origin: 999px 33.5px; vertical-align: middle; width: 1998px">
            <td text-align="top" valign="top" align="left" width="65px" height="65px" style="block-size: 65px; height: 65px; inline-size: 65px; perspective-origin: 33.5px 33.5px; text-align: -webkit-left; transform-origin: 33.5px 33.5px; vertical-align: top; width: 65px">
              <a
                aria-label="article image"
                class="image"
                href="https://www.timeslive.co.za/sunday-times/opinion-and-analysis/insight/2024-10-06-la-gumas-soviet-union-revisited/"
                title=""
                style="
                  background-image: url('https://lh3.googleusercontent.com/SWJdKDpuF3Y5KPgZrCwQ6eRZr2-RDnluAOHm9tI0gXJxjvrz8C5s5L3UnEZ8zOYCscdf7J0kKfhmDfhUYY9eyzUOg0NzTGMgwYk=s300');
                  background-repeat: no-repeat;
                  background-size: cover;
                  block-size: 65px;
                  border-block-color: rgb(0, 0, 238);
                  border-color: rgb(0, 0, 238);
                  border-inline-color: rgb(0, 0, 238);
                  caret-color: rgb(0, 0, 238);
                  color: rgb(0, 0, 238);
                  column-rule-color: rgb(0, 0, 238);
                  cursor: pointer;
                  display: block;
                  height: 65px;
                  inline-size: 65px;
                  outline-color: rgb(0, 0, 238);
                  perspective-origin: 32.5px 32.5px;
                  text-align: -webkit-left;
                  text-decoration: underline solid rgb(0, 0, 238);
                  text-emphasis-color: rgb(0, 0, 238);
                  transform-origin: 32.5px 32.5px;
                  width: 65px;
                  -webkit-text-decorations-in-effect: underline;
                  -webkit-text-fill-color: rgb(0, 0, 238);
                  -webkit-text-stroke-color: rgb(0, 0, 238);
                "
              ></a>
            </td>
            <td valign="top" style="block-size: 65px; height: 65px; inline-size: 1929px; perspective-origin: 965.5px 33.5px; transform-origin: 965.5px 33.5px; vertical-align: top; width: 1929px">
              <div id="titlesection" style="block-size: 42px; height: 42px; inline-size: 1924px; padding-block-start: 5px; padding-inline-start: 5px; padding-left: 5px; padding-top: 5px; perspective-origin: 964.5px 23.5px; transform-origin: 964.5px 23.5px; width: 1924px">
                <div
                  class="meta"
                  style="
                    block-size: 11px;
                    border-block-color: rgb(195, 14, 61);
                    border-color: rgb(195, 14, 61);
                    border-inline-color: rgb(195, 14, 61);
                    caret-color: rgb(195, 14, 61);
                    color: rgb(195, 14, 61);
                    column-rule-color: rgb(195, 14, 61);
                    font-family: Arial;
                    font-size: 10px;
                    font-weight: 700;
                    height: 11px;
                    inline-size: 1924px;
                    outline-color: rgb(195, 14, 61);
                    padding-block-end: 2px;
                    padding-bottom: 2px;
                    perspective-origin: 962px 6.5px;
                    text-decoration: none solid rgb(195, 14, 61);
                    text-emphasis-color: rgb(195, 14, 61);
                    transform-origin: 962px 6.5px;
                    width: 1924px;
                    -webkit-text-fill-color: rgb(195, 14, 61);
                    -webkit-text-stroke-color: rgb(195, 14, 61);
                  "
                >
                  Insight
                </div>
                <span class="title" style="font-family: Arial; font-size: 13px; font-weight: 700">
                  <a
                    href="https://www.timeslive.co.za/sunday-times/opinion-and-analysis/insight/2024-10-06-la-gumas-soviet-union-revisited/"
                    style="
                      block-size: 15px;
                      border-block-color: rgb(30, 26, 26);
                      border-color: rgb(30, 26, 26);
                      border-inline-color: rgb(30, 26, 26);
                      caret-color: rgb(30, 26, 26);
                      color: rgb(30, 26, 26);
                      column-rule-color: rgb(30, 26, 26);
                      cursor: pointer;
                      display: inline-block;
                      font-family: Arial;
                      font-size: 13px;
                      font-weight: 700;
                      height: 15px;
                      inline-size: 321px;
                      line-height: 15px;
                      outline-color: rgb(30, 26, 26);
                      perspective-origin: 160.5px 7.5px;
                      text-decoration: none solid rgb(30, 26, 26);
                      text-emphasis-color: rgb(30, 26, 26);
                      transform-origin: 160.5px 7.5px;
                      width: 321px;
                      -webkit-text-fill-color: rgb(30, 26, 26);
                      -webkit-text-stroke-color: rgb(30, 26, 26);
                    "
                  >
                    BOOK EXTRACT | La Guma’s Soviet Union revisited
                  </a>
                </span>
                <div class="date-stamp" style="block-size: 11px; font-family: Arial; font-size: 10px; height: 11px; inline-size: 1924px; perspective-origin: 962px 5.5px; transform-origin: 962px 5.5px; width: 1924px">15 hours ago</div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <div class="article sunday-times" style="background-color: rgb(255, 255, 255); block-size: 67px; height: 67px; inline-size: 1998px; margin-block-end: 5px; margin-bottom: 5px; perspective-origin: 999px 33.5px; transform-origin: 999px 33.5px; width: 1998px">
    <div class="row" style="block-size: 67px; height: 67px; inline-size: 1998px; perspective-origin: 999px 33.5px; transform-origin: 999px 33.5px; width: 1998px">
      <table style="block-size: 67px; height: 67px; inline-size: 1998px; perspective-origin: 999px 33.5px; transform-origin: 999px 33.5px; width: 1998px">
        <tbody style="block-size: 67px; border-block-color: rgb(128, 128, 128); border-color: rgb(128, 128, 128); border-inline-color: rgb(128, 128, 128); height: 67px; inline-size: 1998px; perspective-origin: 999px 33.5px; transform-origin: 999px 33.5px; width: 1998px">
          <tr style="block-size: 67px; border-block-color: rgb(128, 128, 128); border-color: rgb(128, 128, 128); border-inline-color: rgb(128, 128, 128); height: 67px; inline-size: 1998px; perspective-origin: 999px 33.5px; transform-origin: 999px 33.5px; vertical-align: middle; width: 1998px">
            <td text-align="top" valign="top" align="left" width="65px" height="65px" style="block-size: 65px; height: 65px; inline-size: 65px; perspective-origin: 33.5px 33.5px; text-align: -webkit-left; transform-origin: 33.5px 33.5px; vertical-align: top; width: 65px">
              <a
                aria-label="article image"
                class="image"
                href="https://www.timeslive.co.za/sunday-times/books/news/2024-10-06-sunday-times-literary-awards-shortlist--jarred-thompson-on-the-genesis-of-the-institute-for-creative-dying/"
                title=""
                style="
                  background-image: url('https://lh3.googleusercontent.com/b2j6TMTGEcjlQtkvXyC7Tcp2AuZCEgVkV29t2PDYzAnDHdjuy7SHk1ChTIzAjz-r2t2vThYk-vHhIaonqAhZz1bzwiDSeZfmBzc=s300');
                  background-repeat: no-repeat;
                  background-size: cover;
                  block-size: 65px;
                  border-block-color: rgb(0, 0, 238);
                  border-color: rgb(0, 0, 238);
                  border-inline-color: rgb(0, 0, 238);
                  caret-color: rgb(0, 0, 238);
                  color: rgb(0, 0, 238);
                  column-rule-color: rgb(0, 0, 238);
                  cursor: pointer;
                  display: block;
                  height: 65px;
                  inline-size: 65px;
                  outline-color: rgb(0, 0, 238);
                  perspective-origin: 32.5px 32.5px;
                  text-align: -webkit-left;
                  text-decoration: underline solid rgb(0, 0, 238);
                  text-emphasis-color: rgb(0, 0, 238);
                  transform-origin: 32.5px 32.5px;
                  width: 65px;
                  -webkit-text-decorations-in-effect: underline;
                  -webkit-text-fill-color: rgb(0, 0, 238);
                  -webkit-text-stroke-color: rgb(0, 0, 238);
                "
              ></a>
            </td>
            <td valign="top" style="block-size: 65px; height: 65px; inline-size: 1929px; perspective-origin: 965.5px 33.5px; transform-origin: 965.5px 33.5px; vertical-align: top; width: 1929px">
              <div id="titlesection" style="block-size: 42px; height: 42px; inline-size: 1924px; padding-block-start: 5px; padding-inline-start: 5px; padding-left: 5px; padding-top: 5px; perspective-origin: 964.5px 23.5px; transform-origin: 964.5px 23.5px; width: 1924px">
                <div
                  class="meta"
                  style="
                    block-size: 11px;
                    border-block-color: rgb(195, 14, 61);
                    border-color: rgb(195, 14, 61);
                    border-inline-color: rgb(195, 14, 61);
                    caret-color: rgb(195, 14, 61);
                    color: rgb(195, 14, 61);
                    column-rule-color: rgb(195, 14, 61);
                    font-family: Arial;
                    font-size: 10px;
                    font-weight: 700;
                    height: 11px;
                    inline-size: 1924px;
                    outline-color: rgb(195, 14, 61);
                    padding-block-end: 2px;
                    padding-bottom: 2px;
                    perspective-origin: 962px 6.5px;
                    text-decoration: none solid rgb(195, 14, 61);
                    text-emphasis-color: rgb(195, 14, 61);
                    transform-origin: 962px 6.5px;
                    width: 1924px;
                    -webkit-text-fill-color: rgb(195, 14, 61);
                    -webkit-text-stroke-color: rgb(195, 14, 61);
                  "
                >
                  News
                </div>
                <span class="title" style="font-family: Arial; font-size: 13px; font-weight: 700">
                  <a
                    href="https://www.timeslive.co.za/sunday-times/books/news/2024-10-06-sunday-times-literary-awards-shortlist--jarred-thompson-on-the-genesis-of-the-institute-for-creative-dying/"
                    style="
                      block-size: 15px;
                      border-block-color: rgb(30, 26, 26);
                      border-color: rgb(30, 26, 26);
                      border-inline-color: rgb(30, 26, 26);
                      caret-color: rgb(30, 26, 26);
                      color: rgb(30, 26, 26);
                      column-rule-color: rgb(30, 26, 26);
                      cursor: pointer;
                      display: inline-block;
                      font-family: Arial;
                      font-size: 13px;
                      font-weight: 700;
                      height: 15px;
                      inline-size: 678.828px;
                      line-height: 15px;
                      outline-color: rgb(30, 26, 26);
                      perspective-origin: 339.406px 7.5px;
                      text-decoration: none solid rgb(30, 26, 26);
                      text-emphasis-color: rgb(30, 26, 26);
                      transform-origin: 339.414px 7.5px;
                      width: 678.828px;
                      -webkit-text-fill-color: rgb(30, 26, 26);
                      -webkit-text-stroke-color: rgb(30, 26, 26);
                    "
                  >
                    Sunday Times Literary Awards shortlist | Jarred Thompson on the genesis of ‘The Institute for Creative Dying’
                  </a>
                </span>
                <div class="date-stamp" style="block-size: 11px; font-family: Arial; font-size: 10px; height: 11px; inline-size: 1924px; perspective-origin: 962px 5.5px; transform-origin: 962px 5.5px; width: 1924px">15 hours ago</div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <div class="article sunday-times" style="background-color: rgb(255, 255, 255); block-size: 67px; height: 67px; inline-size: 1998px; margin-block-end: 5px; margin-bottom: 5px; perspective-origin: 999px 33.5px; transform-origin: 999px 33.5px; width: 1998px">
    <div class="row" style="block-size: 67px; height: 67px; inline-size: 1998px; perspective-origin: 999px 33.5px; transform-origin: 999px 33.5px; width: 1998px">
      <table style="block-size: 67px; height: 67px; inline-size: 1998px; perspective-origin: 999px 33.5px; transform-origin: 999px 33.5px; width: 1998px">
        <tbody style="block-size: 67px; border-block-color: rgb(128, 128, 128); border-color: rgb(128, 128, 128); border-inline-color: rgb(128, 128, 128); height: 67px; inline-size: 1998px; perspective-origin: 999px 33.5px; transform-origin: 999px 33.5px; width: 1998px">
          <tr style="block-size: 67px; border-block-color: rgb(128, 128, 128); border-color: rgb(128, 128, 128); border-inline-color: rgb(128, 128, 128); height: 67px; inline-size: 1998px; perspective-origin: 999px 33.5px; transform-origin: 999px 33.5px; vertical-align: middle; width: 1998px">
            <td text-align="top" valign="top" align="left" width="65px" height="65px" style="block-size: 65px; height: 65px; inline-size: 65px; perspective-origin: 33.5px 33.5px; text-align: -webkit-left; transform-origin: 33.5px 33.5px; vertical-align: top; width: 65px">
              <a
                aria-label="article image"
                class="image"
                href="https://www.timeslive.co.za/sunday-times/books/fiction/2024-10-01-the-last-song-of-penelope-retells-greek-myth-from-womans-perspective/"
                title=""
                style="
                  background-image: url('https://lh3.googleusercontent.com/TMiQUqa12oS8rMhA_o-4b9HkK3cMrhuXqgQBmT2HUEFAy_9gNkdF0FOcQfMdtq_BCsja1uKee0W8V8Rw-0m5PNsAT75py4d0NfQ=s300');
                  background-repeat: no-repeat;
                  background-size: cover;
                  block-size: 65px;
                  border-block-color: rgb(0, 0, 238);
                  border-color: rgb(0, 0, 238);
                  border-inline-color: rgb(0, 0, 238);
                  caret-color: rgb(0, 0, 238);
                  color: rgb(0, 0, 238);
                  column-rule-color: rgb(0, 0, 238);
                  cursor: pointer;
                  display: block;
                  height: 65px;
                  inline-size: 65px;
                  outline-color: rgb(0, 0, 238);
                  perspective-origin: 32.5px 32.5px;
                  text-align: -webkit-left;
                  text-decoration: underline solid rgb(0, 0, 238);
                  text-emphasis-color: rgb(0, 0, 238);
                  transform-origin: 32.5px 32.5px;
                  width: 65px;
                  -webkit-text-decorations-in-effect: underline;
                  -webkit-text-fill-color: rgb(0, 0, 238);
                  -webkit-text-stroke-color: rgb(0, 0, 238);
                "
              ></a>
            </td>
            <td valign="top" style="block-size: 65px; height: 65px; inline-size: 1929px; perspective-origin: 965.5px 33.5px; transform-origin: 965.5px 33.5px; vertical-align: top; width: 1929px">
              <div id="titlesection" style="block-size: 42px; height: 42px; inline-size: 1924px; padding-block-start: 5px; padding-inline-start: 5px; padding-left: 5px; padding-top: 5px; perspective-origin: 964.5px 23.5px; transform-origin: 964.5px 23.5px; width: 1924px">
                <div
                  class="meta"
                  style="
                    block-size: 11px;
                    border-block-color: rgb(195, 14, 61);
                    border-color: rgb(195, 14, 61);
                    border-inline-color: rgb(195, 14, 61);
                    caret-color: rgb(195, 14, 61);
                    color: rgb(195, 14, 61);
                    column-rule-color: rgb(195, 14, 61);
                    font-family: Arial;
                    font-size: 10px;
                    font-weight: 700;
                    height: 11px;
                    inline-size: 1924px;
                    outline-color: rgb(195, 14, 61);
                    padding-block-end: 2px;
                    padding-bottom: 2px;
                    perspective-origin: 962px 6.5px;
                    text-decoration: none solid rgb(195, 14, 61);
                    text-emphasis-color: rgb(195, 14, 61);
                    transform-origin: 962px 6.5px;
                    width: 1924px;
                    -webkit-text-fill-color: rgb(195, 14, 61);
                    -webkit-text-stroke-color: rgb(195, 14, 61);
                  "
                >
                  Fiction
                </div>
                <span class="title" style="font-family: Arial; font-size: 13px; font-weight: 700">
                  <a
                    href="https://www.timeslive.co.za/sunday-times/books/fiction/2024-10-01-the-last-song-of-penelope-retells-greek-myth-from-womans-perspective/"
                    style="
                      block-size: 15px;
                      border-block-color: rgb(30, 26, 26);
                      border-color: rgb(30, 26, 26);
                      border-inline-color: rgb(30, 26, 26);
                      caret-color: rgb(30, 26, 26);
                      color: rgb(30, 26, 26);
                      column-rule-color: rgb(30, 26, 26);
                      cursor: pointer;
                      display: inline-block;
                      font-family: Arial;
                      font-size: 13px;
                      font-weight: 700;
                      height: 15px;
                      inline-size: 457.547px;
                      line-height: 15px;
                      outline-color: rgb(30, 26, 26);
                      perspective-origin: 228.766px 7.5px;
                      text-decoration: none solid rgb(30, 26, 26);
                      text-emphasis-color: rgb(30, 26, 26);
                      transform-origin: 228.773px 7.5px;
                      width: 457.547px;
                      -webkit-text-fill-color: rgb(30, 26, 26);
                      -webkit-text-stroke-color: rgb(30, 26, 26);
                    "
                  >
                    ‘The Last Song of Penelope’ retells Greek myth from woman’s perspective
                  </a>
                </span>
                <div class="date-stamp" style="block-size: 11px; font-family: Arial; font-size: 10px; height: 11px; inline-size: 1924px; perspective-origin: 962px 5.5px; transform-origin: 962px 5.5px; width: 1924px">5 days ago</div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <div class="article sunday-times" style="background-color: rgb(255, 255, 255); block-size: 67px; height: 67px; inline-size: 1998px; margin-block-end: 5px; margin-bottom: 5px; perspective-origin: 999px 33.5px; transform-origin: 999px 33.5px; width: 1998px">
    <div class="row" style="block-size: 67px; height: 67px; inline-size: 1998px; perspective-origin: 999px 33.5px; transform-origin: 999px 33.5px; width: 1998px">
      <table style="block-size: 67px; height: 67px; inline-size: 1998px; perspective-origin: 999px 33.5px; transform-origin: 999px 33.5px; width: 1998px">
        <tbody style="block-size: 67px; border-block-color: rgb(128, 128, 128); border-color: rgb(128, 128, 128); border-inline-color: rgb(128, 128, 128); height: 67px; inline-size: 1998px; perspective-origin: 999px 33.5px; transform-origin: 999px 33.5px; width: 1998px">
          <tr style="block-size: 67px; border-block-color: rgb(128, 128, 128); border-color: rgb(128, 128, 128); border-inline-color: rgb(128, 128, 128); height: 67px; inline-size: 1998px; perspective-origin: 999px 33.5px; transform-origin: 999px 33.5px; vertical-align: middle; width: 1998px">
            <td text-align="top" valign="top" align="left" width="65px" height="65px" style="block-size: 65px; height: 65px; inline-size: 65px; perspective-origin: 33.5px 33.5px; text-align: -webkit-left; transform-origin: 33.5px 33.5px; vertical-align: top; width: 65px">
              <a
                aria-label="article image"
                class="image"
                href="https://www.timeslive.co.za/sunday-times/books/events/2024-10-01-joburg-launch-of-what-nelson-mandela-taught-me-by-zelda-la-grange/"
                title=""
                style="
                  background-image: url('https://lh3.googleusercontent.com/H_F6poGfSqdPC2M0ZCdPFgkwuur4SaUjyj2RFkY1SVWGIvBXOAA1fwIU96g8MO-UfX_n0o-NGKW-wqAvyMEc9C30-pqi7eaF82eU=s300');
                  background-repeat: no-repeat;
                  background-size: cover;
                  block-size: 65px;
                  border-block-color: rgb(0, 0, 238);
                  border-color: rgb(0, 0, 238);
                  border-inline-color: rgb(0, 0, 238);
                  caret-color: rgb(0, 0, 238);
                  color: rgb(0, 0, 238);
                  column-rule-color: rgb(0, 0, 238);
                  cursor: pointer;
                  display: block;
                  height: 65px;
                  inline-size: 65px;
                  outline-color: rgb(0, 0, 238);
                  perspective-origin: 32.5px 32.5px;
                  text-align: -webkit-left;
                  text-decoration: underline solid rgb(0, 0, 238);
                  text-emphasis-color: rgb(0, 0, 238);
                  transform-origin: 32.5px 32.5px;
                  width: 65px;
                  -webkit-text-decorations-in-effect: underline;
                  -webkit-text-fill-color: rgb(0, 0, 238);
                  -webkit-text-stroke-color: rgb(0, 0, 238);
                "
              ></a>
            </td>
            <td valign="top" style="block-size: 65px; height: 65px; inline-size: 1929px; perspective-origin: 965.5px 33.5px; transform-origin: 965.5px 33.5px; vertical-align: top; width: 1929px">
              <div id="titlesection" style="block-size: 42px; height: 42px; inline-size: 1924px; padding-block-start: 5px; padding-inline-start: 5px; padding-left: 5px; padding-top: 5px; perspective-origin: 964.5px 23.5px; transform-origin: 964.5px 23.5px; width: 1924px">
                <div
                  class="meta"
                  style="
                    block-size: 11px;
                    border-block-color: rgb(195, 14, 61);
                    border-color: rgb(195, 14, 61);
                    border-inline-color: rgb(195, 14, 61);
                    caret-color: rgb(195, 14, 61);
                    color: rgb(195, 14, 61);
                    column-rule-color: rgb(195, 14, 61);
                    font-family: Arial;
                    font-size: 10px;
                    font-weight: 700;
                    height: 11px;
                    inline-size: 1924px;
                    outline-color: rgb(195, 14, 61);
                    padding-block-end: 2px;
                    padding-bottom: 2px;
                    perspective-origin: 962px 6.5px;
                    text-decoration: none solid rgb(195, 14, 61);
                    text-emphasis-color: rgb(195, 14, 61);
                    transform-origin: 962px 6.5px;
                    width: 1924px;
                    -webkit-text-fill-color: rgb(195, 14, 61);
                    -webkit-text-stroke-color: rgb(195, 14, 61);
                  "
                >
                  Events
                </div>
                <span class="title" style="font-family: Arial; font-size: 13px; font-weight: 700">
                  <a
                    href="https://www.timeslive.co.za/sunday-times/books/events/2024-10-01-joburg-launch-of-what-nelson-mandela-taught-me-by-zelda-la-grange/"
                    style="
                      block-size: 15px;
                      border-block-color: rgb(30, 26, 26);
                      border-color: rgb(30, 26, 26);
                      border-inline-color: rgb(30, 26, 26);
                      caret-color: rgb(30, 26, 26);
                      color: rgb(30, 26, 26);
                      column-rule-color: rgb(30, 26, 26);
                      cursor: pointer;
                      display: inline-block;
                      font-family: Arial;
                      font-size: 13px;
                      font-weight: 700;
                      height: 15px;
                      inline-size: 510.109px;
                      line-height: 15px;
                      outline-color: rgb(30, 26, 26);
                      perspective-origin: 255.047px 7.5px;
                      text-decoration: none solid rgb(30, 26, 26);
                      text-emphasis-color: rgb(30, 26, 26);
                      transform-origin: 255.055px 7.5px;
                      width: 510.109px;
                      -webkit-text-fill-color: rgb(30, 26, 26);
                      -webkit-text-stroke-color: rgb(30, 26, 26);
                    "
                  >
                    Joburg launch of 'What Nelson Mandela Taught Me' by Zelda la Grange (October 8)
                  </a>
                </span>
                <div class="date-stamp" style="block-size: 11px; font-family: Arial; font-size: 10px; height: 11px; inline-size: 1924px; perspective-origin: 962px 5.5px; transform-origin: 962px 5.5px; width: 1924px">5 days ago</div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <div class="article sunday-times" style="background-color: rgb(255, 255, 255); block-size: 67px; height: 67px; inline-size: 1998px; margin-block-end: 5px; margin-bottom: 5px; perspective-origin: 999px 33.5px; transform-origin: 999px 33.5px; width: 1998px">
    <div class="row" style="block-size: 67px; height: 67px; inline-size: 1998px; perspective-origin: 999px 33.5px; transform-origin: 999px 33.5px; width: 1998px">
      <table style="block-size: 67px; height: 67px; inline-size: 1998px; perspective-origin: 999px 33.5px; transform-origin: 999px 33.5px; width: 1998px">
        <tbody style="block-size: 67px; border-block-color: rgb(128, 128, 128); border-color: rgb(128, 128, 128); border-inline-color: rgb(128, 128, 128); height: 67px; inline-size: 1998px; perspective-origin: 999px 33.5px; transform-origin: 999px 33.5px; width: 1998px">
          <tr style="block-size: 67px; border-block-color: rgb(128, 128, 128); border-color: rgb(128, 128, 128); border-inline-color: rgb(128, 128, 128); height: 67px; inline-size: 1998px; perspective-origin: 999px 33.5px; transform-origin: 999px 33.5px; vertical-align: middle; width: 1998px">
            <td text-align="top" valign="top" align="left" width="65px" height="65px" style="block-size: 65px; height: 65px; inline-size: 65px; perspective-origin: 33.5px 33.5px; text-align: -webkit-left; transform-origin: 33.5px 33.5px; vertical-align: top; width: 65px">
              <a
                aria-label="article image"
                class="image"
                href="https://www.timeslive.co.za/sunday-times/books/events/2024-10-01-cape-town-launch-of-nomad-heart-by-ian-roberts-october-2/"
                title="Nomad Heart:"
                style="
                  background-image: url('https://lh3.googleusercontent.com/VC0dldn6XQRQ7xEFg_KYvlDmucEOt77VKrQSVGvZ22ELA4SK_4GncV8IbWVe4vrSjOJMiwWrnUMyqo0lGCK8ebl-JAelEmiyn8UR=s300');
                  background-repeat: no-repeat;
                  background-size: cover;
                  block-size: 65px;
                  border-block-color: rgb(0, 0, 238);
                  border-color: rgb(0, 0, 238);
                  border-inline-color: rgb(0, 0, 238);
                  caret-color: rgb(0, 0, 238);
                  color: rgb(0, 0, 238);
                  column-rule-color: rgb(0, 0, 238);
                  cursor: pointer;
                  display: block;
                  height: 65px;
                  inline-size: 65px;
                  outline-color: rgb(0, 0, 238);
                  perspective-origin: 32.5px 32.5px;
                  text-align: -webkit-left;
                  text-decoration: underline solid rgb(0, 0, 238);
                  text-emphasis-color: rgb(0, 0, 238);
                  transform-origin: 32.5px 32.5px;
                  width: 65px;
                  -webkit-text-decorations-in-effect: underline;
                  -webkit-text-fill-color: rgb(0, 0, 238);
                  -webkit-text-stroke-color: rgb(0, 0, 238);
                "
              ></a>
            </td>
            <td valign="top" style="block-size: 65px; height: 65px; inline-size: 1929px; perspective-origin: 965.5px 33.5px; transform-origin: 965.5px 33.5px; vertical-align: top; width: 1929px">
              <div id="titlesection" style="block-size: 42px; height: 42px; inline-size: 1924px; padding-block-start: 5px; padding-inline-start: 5px; padding-left: 5px; padding-top: 5px; perspective-origin: 964.5px 23.5px; transform-origin: 964.5px 23.5px; width: 1924px">
                <div
                  class="meta"
                  style="
                    block-size: 11px;
                    border-block-color: rgb(195, 14, 61);
                    border-color: rgb(195, 14, 61);
                    border-inline-color: rgb(195, 14, 61);
                    caret-color: rgb(195, 14, 61);
                    color: rgb(195, 14, 61);
                    column-rule-color: rgb(195, 14, 61);
                    font-family: Arial;
                    font-size: 10px;
                    font-weight: 700;
                    height: 11px;
                    inline-size: 1924px;
                    outline-color: rgb(195, 14, 61);
                    padding-block-end: 2px;
                    padding-bottom: 2px;
                    perspective-origin: 962px 6.5px;
                    text-decoration: none solid rgb(195, 14, 61);
                    text-emphasis-color: rgb(195, 14, 61);
                    transform-origin: 962px 6.5px;
                    width: 1924px;
                    -webkit-text-fill-color: rgb(195, 14, 61);
                    -webkit-text-stroke-color: rgb(195, 14, 61);
                  "
                >
                  Events
                </div>
                <span class="title" style="font-family: Arial; font-size: 13px; font-weight: 700">
                  <a
                    href="https://www.timeslive.co.za/sunday-times/books/events/2024-10-01-cape-town-launch-of-nomad-heart-by-ian-roberts-october-2/"
                    style="
                      block-size: 15px;
                      border-block-color: rgb(30, 26, 26);
                      border-color: rgb(30, 26, 26);
                      border-inline-color: rgb(30, 26, 26);
                      caret-color: rgb(30, 26, 26);
                      color: rgb(30, 26, 26);
                      column-rule-color: rgb(30, 26, 26);
                      cursor: pointer;
                      display: inline-block;
                      font-family: Arial;
                      font-size: 13px;
                      font-weight: 700;
                      height: 15px;
                      inline-size: 387.656px;
                      line-height: 15px;
                      outline-color: rgb(30, 26, 26);
                      perspective-origin: 193.828px 7.5px;
                      text-decoration: none solid rgb(30, 26, 26);
                      text-emphasis-color: rgb(30, 26, 26);
                      transform-origin: 193.828px 7.5px;
                      width: 387.656px;
                      -webkit-text-fill-color: rgb(30, 26, 26);
                      -webkit-text-stroke-color: rgb(30, 26, 26);
                    "
                  >
                    Cape Town launch of ‘Nomad Heart’ by Ian Roberts (October 2)
                  </a>
                </span>
                <div class="date-stamp" style="block-size: 11px; font-family: Arial; font-size: 10px; height: 11px; inline-size: 1924px; perspective-origin: 962px 5.5px; transform-origin: 962px 5.5px; width: 1924px">5 days ago</div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <div class="article sunday-times" style="background-color: rgb(255, 255, 255); block-size: 67px; height: 67px; inline-size: 1998px; margin-block-end: 5px; margin-bottom: 5px; perspective-origin: 999px 33.5px; transform-origin: 999px 33.5px; width: 1998px">
    <div class="row" style="block-size: 67px; height: 67px; inline-size: 1998px; perspective-origin: 999px 33.5px; transform-origin: 999px 33.5px; width: 1998px">
      <table style="block-size: 67px; height: 67px; inline-size: 1998px; perspective-origin: 999px 33.5px; transform-origin: 999px 33.5px; width: 1998px">
        <tbody style="block-size: 67px; border-block-color: rgb(128, 128, 128); border-color: rgb(128, 128, 128); border-inline-color: rgb(128, 128, 128); height: 67px; inline-size: 1998px; perspective-origin: 999px 33.5px; transform-origin: 999px 33.5px; width: 1998px">
          <tr style="block-size: 67px; border-block-color: rgb(128, 128, 128); border-color: rgb(128, 128, 128); border-inline-color: rgb(128, 128, 128); height: 67px; inline-size: 1998px; perspective-origin: 999px 33.5px; transform-origin: 999px 33.5px; vertical-align: middle; width: 1998px">
            <td text-align="top" valign="top" align="left" width="65px" height="65px" style="block-size: 65px; height: 65px; inline-size: 65px; perspective-origin: 33.5px 33.5px; text-align: -webkit-left; transform-origin: 33.5px 33.5px; vertical-align: top; width: 65px">
              <a
                aria-label="article image"
                class="image"
                href="https://www.timeslive.co.za/sunday-times/opinion-and-analysis/insight/2024-09-29-a-continuous-humanness/"
                title=""
                style="
                  background-image: url('https://lh3.googleusercontent.com/MCHeJWkLRH3fc0roY_bMaBAwJ3Gac9VMR1wprfXvYtKIN1PZR2MKH-jUHsKtCbd2spH0XIT30nt0vUyp86x3Obkr4nn7If2gcBU=s300');
                  background-repeat: no-repeat;
                  background-size: cover;
                  block-size: 65px;
                  border-block-color: rgb(0, 0, 238);
                  border-color: rgb(0, 0, 238);
                  border-inline-color: rgb(0, 0, 238);
                  caret-color: rgb(0, 0, 238);
                  color: rgb(0, 0, 238);
                  column-rule-color: rgb(0, 0, 238);
                  cursor: pointer;
                  display: block;
                  height: 65px;
                  inline-size: 65px;
                  outline-color: rgb(0, 0, 238);
                  perspective-origin: 32.5px 32.5px;
                  text-align: -webkit-left;
                  text-decoration: underline solid rgb(0, 0, 238);
                  text-emphasis-color: rgb(0, 0, 238);
                  transform-origin: 32.5px 32.5px;
                  width: 65px;
                  -webkit-text-decorations-in-effect: underline;
                  -webkit-text-fill-color: rgb(0, 0, 238);
                  -webkit-text-stroke-color: rgb(0, 0, 238);
                "
              ></a>
            </td>
            <td valign="top" style="block-size: 65px; height: 65px; inline-size: 1929px; perspective-origin: 965.5px 33.5px; transform-origin: 965.5px 33.5px; vertical-align: top; width: 1929px">
              <div id="titlesection" style="block-size: 42px; height: 42px; inline-size: 1924px; padding-block-start: 5px; padding-inline-start: 5px; padding-left: 5px; padding-top: 5px; perspective-origin: 964.5px 23.5px; transform-origin: 964.5px 23.5px; width: 1924px">
                <div
                  class="meta"
                  style="
                    block-size: 11px;
                    border-block-color: rgb(195, 14, 61);
                    border-color: rgb(195, 14, 61);
                    border-inline-color: rgb(195, 14, 61);
                    caret-color: rgb(195, 14, 61);
                    color: rgb(195, 14, 61);
                    column-rule-color: rgb(195, 14, 61);
                    font-family: Arial;
                    font-size: 10px;
                    font-weight: 700;
                    height: 11px;
                    inline-size: 1924px;
                    outline-color: rgb(195, 14, 61);
                    padding-block-end: 2px;
                    padding-bottom: 2px;
                    perspective-origin: 962px 6.5px;
                    text-decoration: none solid rgb(195, 14, 61);
                    text-emphasis-color: rgb(195, 14, 61);
                    transform-origin: 962px 6.5px;
                    width: 1924px;
                    -webkit-text-fill-color: rgb(195, 14, 61);
                    -webkit-text-stroke-color: rgb(195, 14, 61);
                  "
                >
                  Insight
                </div>
                <span class="title" style="font-family: Arial; font-size: 13px; font-weight: 700">
                  <a
                    href="https://www.timeslive.co.za/sunday-times/opinion-and-analysis/insight/2024-09-29-a-continuous-humanness/"
                    style="
                      block-size: 15px;
                      border-block-color: rgb(30, 26, 26);
                      border-color: rgb(30, 26, 26);
                      border-inline-color: rgb(30, 26, 26);
                      caret-color: rgb(30, 26, 26);
                      color: rgb(30, 26, 26);
                      column-rule-color: rgb(30, 26, 26);
                      cursor: pointer;
                      display: inline-block;
                      font-family: Arial;
                      font-size: 13px;
                      font-weight: 700;
                      height: 15px;
                      inline-size: 158.422px;
                      line-height: 15px;
                      outline-color: rgb(30, 26, 26);
                      perspective-origin: 79.2031px 7.5px;
                      text-decoration: none solid rgb(30, 26, 26);
                      text-emphasis-color: rgb(30, 26, 26);
                      transform-origin: 79.2109px 7.5px;
                      width: 158.422px;
                      -webkit-text-fill-color: rgb(30, 26, 26);
                      -webkit-text-stroke-color: rgb(30, 26, 26);
                    "
                  >
                    A continuous humanness
                  </a>
                </span>
                <div class="date-stamp" style="block-size: 11px; font-family: Arial; font-size: 10px; height: 11px; inline-size: 1924px; perspective-origin: 962px 5.5px; transform-origin: 962px 5.5px; width: 1924px">1 week ago</div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <div class="article sunday-times" style="background-color: rgb(255, 255, 255); block-size: 67px; height: 67px; inline-size: 1998px; margin-block-end: 5px; margin-bottom: 5px; perspective-origin: 999px 33.5px; transform-origin: 999px 33.5px; width: 1998px">
    <div class="row" style="block-size: 67px; height: 67px; inline-size: 1998px; perspective-origin: 999px 33.5px; transform-origin: 999px 33.5px; width: 1998px">
      <table style="block-size: 67px; height: 67px; inline-size: 1998px; perspective-origin: 999px 33.5px; transform-origin: 999px 33.5px; width: 1998px">
        <tbody style="block-size: 67px; border-block-color: rgb(128, 128, 128); border-color: rgb(128, 128, 128); border-inline-color: rgb(128, 128, 128); height: 67px; inline-size: 1998px; perspective-origin: 999px 33.5px; transform-origin: 999px 33.5px; width: 1998px">
          <tr style="block-size: 67px; border-block-color: rgb(128, 128, 128); border-color: rgb(128, 128, 128); border-inline-color: rgb(128, 128, 128); height: 67px; inline-size: 1998px; perspective-origin: 999px 33.5px; transform-origin: 999px 33.5px; vertical-align: middle; width: 1998px">
            <td text-align="top" valign="top" align="left" width="65px" height="65px" style="block-size: 65px; height: 65px; inline-size: 65px; perspective-origin: 33.5px 33.5px; text-align: -webkit-left; transform-origin: 33.5px 33.5px; vertical-align: top; width: 65px">
              <a
                aria-label="article image"
                class="image"
                href="https://www.timeslive.co.za/sunday-times/books/non-fiction/2024-10-01-malcolm-gladwell-looks-at-how-tipping-points-play-a-bigger-role-than-ever/"
                title="DD030924 Malcolm Gladwell"
                style="
                  background-image: url('https://lh3.googleusercontent.com/eE40UX0N9UCJ07M6BH0-JoIRy9i8_GaQgc7qbeh7JvXRNDtQkChgDle_P21rJchx9v8juYEaC5A5cUOZh5KfoNpIaFry9fWJZGHc=s300');
                  background-repeat: no-repeat;
                  background-size: cover;
                  block-size: 65px;
                  border-block-color: rgb(0, 0, 238);
                  border-color: rgb(0, 0, 238);
                  border-inline-color: rgb(0, 0, 238);
                  caret-color: rgb(0, 0, 238);
                  color: rgb(0, 0, 238);
                  column-rule-color: rgb(0, 0, 238);
                  cursor: pointer;
                  display: block;
                  height: 65px;
                  inline-size: 65px;
                  outline-color: rgb(0, 0, 238);
                  perspective-origin: 32.5px 32.5px;
                  text-align: -webkit-left;
                  text-decoration: underline solid rgb(0, 0, 238);
                  text-emphasis-color: rgb(0, 0, 238);
                  transform-origin: 32.5px 32.5px;
                  width: 65px;
                  -webkit-text-decorations-in-effect: underline;
                  -webkit-text-fill-color: rgb(0, 0, 238);
                  -webkit-text-stroke-color: rgb(0, 0, 238);
                "
              ></a>
            </td>
            <td valign="top" style="block-size: 65px; height: 65px; inline-size: 1929px; perspective-origin: 965.5px 33.5px; transform-origin: 965.5px 33.5px; vertical-align: top; width: 1929px">
              <div id="titlesection" style="block-size: 42px; height: 42px; inline-size: 1924px; padding-block-start: 5px; padding-inline-start: 5px; padding-left: 5px; padding-top: 5px; perspective-origin: 964.5px 23.5px; transform-origin: 964.5px 23.5px; width: 1924px">
                <div
                  class="meta"
                  style="
                    block-size: 11px;
                    border-block-color: rgb(195, 14, 61);
                    border-color: rgb(195, 14, 61);
                    border-inline-color: rgb(195, 14, 61);
                    caret-color: rgb(195, 14, 61);
                    color: rgb(195, 14, 61);
                    column-rule-color: rgb(195, 14, 61);
                    font-family: Arial;
                    font-size: 10px;
                    font-weight: 700;
                    height: 11px;
                    inline-size: 1924px;
                    outline-color: rgb(195, 14, 61);
                    padding-block-end: 2px;
                    padding-bottom: 2px;
                    perspective-origin: 962px 6.5px;
                    text-decoration: none solid rgb(195, 14, 61);
                    text-emphasis-color: rgb(195, 14, 61);
                    transform-origin: 962px 6.5px;
                    width: 1924px;
                    -webkit-text-fill-color: rgb(195, 14, 61);
                    -webkit-text-stroke-color: rgb(195, 14, 61);
                  "
                >
                  Non-Fiction
                </div>
                <span class="title" style="font-family: Arial; font-size: 13px; font-weight: 700">
                  <a
                    href="https://www.timeslive.co.za/sunday-times/books/non-fiction/2024-10-01-malcolm-gladwell-looks-at-how-tipping-points-play-a-bigger-role-than-ever/"
                    style="
                      block-size: 15px;
                      border-block-color: rgb(30, 26, 26);
                      border-color: rgb(30, 26, 26);
                      border-inline-color: rgb(30, 26, 26);
                      caret-color: rgb(30, 26, 26);
                      color: rgb(30, 26, 26);
                      column-rule-color: rgb(30, 26, 26);
                      cursor: pointer;
                      display: inline-block;
                      font-family: Arial;
                      font-size: 13px;
                      font-weight: 700;
                      height: 15px;
                      inline-size: 453.641px;
                      line-height: 15px;
                      outline-color: rgb(30, 26, 26);
                      perspective-origin: 226.812px 7.5px;
                      text-decoration: none solid rgb(30, 26, 26);
                      text-emphasis-color: rgb(30, 26, 26);
                      transform-origin: 226.82px 7.5px;
                      width: 453.641px;
                      -webkit-text-fill-color: rgb(30, 26, 26);
                      -webkit-text-stroke-color: rgb(30, 26, 26);
                    "
                  >
                    Malcolm Gladwell looks at how tipping points play a bigger role than ever
                  </a>
                </span>
                <div class="date-stamp" style="block-size: 11px; font-family: Arial; font-size: 10px; height: 11px; inline-size: 1924px; perspective-origin: 962px 5.5px; transform-origin: 962px 5.5px; width: 1924px">5 days ago</div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <div class="article sunday-times" style="background-color: rgb(255, 255, 255); block-size: 67px; height: 67px; inline-size: 1998px; margin-block-end: 5px; margin-bottom: 5px; perspective-origin: 999px 33.5px; transform-origin: 999px 33.5px; width: 1998px">
    <div class="row" style="block-size: 67px; height: 67px; inline-size: 1998px; perspective-origin: 999px 33.5px; transform-origin: 999px 33.5px; width: 1998px">
      <table style="block-size: 67px; height: 67px; inline-size: 1998px; perspective-origin: 999px 33.5px; transform-origin: 999px 33.5px; width: 1998px">
        <tbody style="block-size: 67px; border-block-color: rgb(128, 128, 128); border-color: rgb(128, 128, 128); border-inline-color: rgb(128, 128, 128); height: 67px; inline-size: 1998px; perspective-origin: 999px 33.5px; transform-origin: 999px 33.5px; width: 1998px">
          <tr style="block-size: 67px; border-block-color: rgb(128, 128, 128); border-color: rgb(128, 128, 128); border-inline-color: rgb(128, 128, 128); height: 67px; inline-size: 1998px; perspective-origin: 999px 33.5px; transform-origin: 999px 33.5px; vertical-align: middle; width: 1998px">
            <td text-align="top" valign="top" align="left" width="65px" height="65px" style="block-size: 65px; height: 65px; inline-size: 65px; perspective-origin: 33.5px 33.5px; text-align: -webkit-left; transform-origin: 33.5px 33.5px; vertical-align: top; width: 65px">
              <a
                aria-label="article image"
                class="image"
                href="https://www.timeslive.co.za/sunday-times/books/news/2024-09-22-three-egg-dilemma-by-morabo-morojele/"
                title=""
                style="
                  background-image: url('https://lh3.googleusercontent.com/HdzrXM660DHa_E8LMkJsfZdI8D8w9tQTgIz8nJwJrOLQUIPQjnjPB4oUBc87W-JbJf8xf0qzugP7vck-HjhnguRbur-K4UJ-6BXt=s300');
                  background-repeat: no-repeat;
                  background-size: cover;
                  block-size: 65px;
                  border-block-color: rgb(0, 0, 238);
                  border-color: rgb(0, 0, 238);
                  border-inline-color: rgb(0, 0, 238);
                  caret-color: rgb(0, 0, 238);
                  color: rgb(0, 0, 238);
                  column-rule-color: rgb(0, 0, 238);
                  cursor: pointer;
                  display: block;
                  height: 65px;
                  inline-size: 65px;
                  outline-color: rgb(0, 0, 238);
                  perspective-origin: 32.5px 32.5px;
                  text-align: -webkit-left;
                  text-decoration: underline solid rgb(0, 0, 238);
                  text-emphasis-color: rgb(0, 0, 238);
                  transform-origin: 32.5px 32.5px;
                  width: 65px;
                  -webkit-text-decorations-in-effect: underline;
                  -webkit-text-fill-color: rgb(0, 0, 238);
                  -webkit-text-stroke-color: rgb(0, 0, 238);
                "
              ></a>
            </td>
            <td valign="top" style="block-size: 65px; height: 65px; inline-size: 1929px; perspective-origin: 965.5px 33.5px; transform-origin: 965.5px 33.5px; vertical-align: top; width: 1929px">
              <div id="titlesection" style="block-size: 42px; height: 42px; inline-size: 1924px; padding-block-start: 5px; padding-inline-start: 5px; padding-left: 5px; padding-top: 5px; perspective-origin: 964.5px 23.5px; transform-origin: 964.5px 23.5px; width: 1924px">
                <div
                  class="meta"
                  style="
                    block-size: 11px;
                    border-block-color: rgb(195, 14, 61);
                    border-color: rgb(195, 14, 61);
                    border-inline-color: rgb(195, 14, 61);
                    caret-color: rgb(195, 14, 61);
                    color: rgb(195, 14, 61);
                    column-rule-color: rgb(195, 14, 61);
                    font-family: Arial;
                    font-size: 10px;
                    font-weight: 700;
                    height: 11px;
                    inline-size: 1924px;
                    outline-color: rgb(195, 14, 61);
                    padding-block-end: 2px;
                    padding-bottom: 2px;
                    perspective-origin: 962px 6.5px;
                    text-decoration: none solid rgb(195, 14, 61);
                    text-emphasis-color: rgb(195, 14, 61);
                    transform-origin: 962px 6.5px;
                    width: 1924px;
                    -webkit-text-fill-color: rgb(195, 14, 61);
                    -webkit-text-stroke-color: rgb(195, 14, 61);
                  "
                >
                  News
                </div>
                <span class="title" style="font-family: Arial; font-size: 13px; font-weight: 700">
                  <a
                    href="https://www.timeslive.co.za/sunday-times/books/news/2024-09-22-three-egg-dilemma-by-morabo-morojele/"
                    style="
                      block-size: 15px;
                      border-block-color: rgb(30, 26, 26);
                      border-color: rgb(30, 26, 26);
                      border-inline-color: rgb(30, 26, 26);
                      caret-color: rgb(30, 26, 26);
                      color: rgb(30, 26, 26);
                      column-rule-color: rgb(30, 26, 26);
                      cursor: pointer;
                      display: inline-block;
                      font-family: Arial;
                      font-size: 13px;
                      font-weight: 700;
                      height: 15px;
                      inline-size: 601.547px;
                      line-height: 15px;
                      outline-color: rgb(30, 26, 26);
                      perspective-origin: 300.766px 7.5px;
                      text-decoration: none solid rgb(30, 26, 26);
                      text-emphasis-color: rgb(30, 26, 26);
                      transform-origin: 300.773px 7.5px;
                      width: 601.547px;
                      -webkit-text-fill-color: rgb(30, 26, 26);
                      -webkit-text-stroke-color: rgb(30, 26, 26);
                    "
                  >
                    Sunday Times Literary Awards shortlist | Morabo Morojele on the genesis of ‘Three Egg Dilemma’
                  </a>
                </span>
                <div class="date-stamp" style="block-size: 11px; font-family: Arial; font-size: 10px; height: 11px; inline-size: 1924px; perspective-origin: 962px 5.5px; transform-origin: 962px 5.5px; width: 1924px">1 week ago</div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <div class="article sunday-times" style="background-color: rgb(255, 255, 255); block-size: 67px; height: 67px; inline-size: 1998px; margin-block-end: 5px; margin-bottom: 5px; perspective-origin: 999px 33.5px; transform-origin: 999px 33.5px; width: 1998px">
    <div class="row" style="block-size: 67px; height: 67px; inline-size: 1998px; perspective-origin: 999px 33.5px; transform-origin: 999px 33.5px; width: 1998px">
      <table style="block-size: 67px; height: 67px; inline-size: 1998px; perspective-origin: 999px 33.5px; transform-origin: 999px 33.5px; width: 1998px">
        <tbody style="block-size: 67px; border-block-color: rgb(128, 128, 128); border-color: rgb(128, 128, 128); border-inline-color: rgb(128, 128, 128); height: 67px; inline-size: 1998px; perspective-origin: 999px 33.5px; transform-origin: 999px 33.5px; width: 1998px">
          <tr style="block-size: 67px; border-block-color: rgb(128, 128, 128); border-color: rgb(128, 128, 128); border-inline-color: rgb(128, 128, 128); height: 67px; inline-size: 1998px; perspective-origin: 999px 33.5px; transform-origin: 999px 33.5px; vertical-align: middle; width: 1998px">
            <td text-align="top" valign="top" align="left" width="65px" height="65px" style="block-size: 65px; height: 65px; inline-size: 65px; perspective-origin: 33.5px 33.5px; text-align: -webkit-left; transform-origin: 33.5px 33.5px; vertical-align: top; width: 65px">
              <a
                aria-label="article image"
                class="image"
                href="https://www.timeslive.co.za/sunday-times/lifestyle/2024-09-29-st-2909-books-sunday-times-literary-awards-shortlist-murder-most-foul-chris-hanis-white-supremacist-slaying/"
                title="DD270624 chris hani"
                style="
                  background-image: url('https://lh3.googleusercontent.com/3rKrQgxuuc7IaHo_V4-SPLlRwIkMHbc5znZLYF0Qy3vtwOGY6FGrihIEIozUgZnzX1Q9lBI1P4Rgk230piZOigazmMQ4zqjz3w=s300');
                  background-repeat: no-repeat;
                  background-size: cover;
                  block-size: 65px;
                  border-block-color: rgb(0, 0, 238);
                  border-color: rgb(0, 0, 238);
                  border-inline-color: rgb(0, 0, 238);
                  caret-color: rgb(0, 0, 238);
                  color: rgb(0, 0, 238);
                  column-rule-color: rgb(0, 0, 238);
                  cursor: pointer;
                  display: block;
                  height: 65px;
                  inline-size: 65px;
                  outline-color: rgb(0, 0, 238);
                  perspective-origin: 32.5px 32.5px;
                  text-align: -webkit-left;
                  text-decoration: underline solid rgb(0, 0, 238);
                  text-emphasis-color: rgb(0, 0, 238);
                  transform-origin: 32.5px 32.5px;
                  width: 65px;
                  -webkit-text-decorations-in-effect: underline;
                  -webkit-text-fill-color: rgb(0, 0, 238);
                  -webkit-text-stroke-color: rgb(0, 0, 238);
                "
              ></a>
            </td>
            <td valign="top" style="block-size: 65px; height: 65px; inline-size: 1929px; perspective-origin: 965.5px 33.5px; transform-origin: 965.5px 33.5px; vertical-align: top; width: 1929px">
              <div id="titlesection" style="block-size: 42px; height: 42px; inline-size: 1924px; padding-block-start: 5px; padding-inline-start: 5px; padding-left: 5px; padding-top: 5px; perspective-origin: 964.5px 23.5px; transform-origin: 964.5px 23.5px; width: 1924px">
                <div
                  class="meta"
                  style="
                    block-size: 11px;
                    border-block-color: rgb(195, 14, 61);
                    border-color: rgb(195, 14, 61);
                    border-inline-color: rgb(195, 14, 61);
                    caret-color: rgb(195, 14, 61);
                    color: rgb(195, 14, 61);
                    column-rule-color: rgb(195, 14, 61);
                    font-family: Arial;
                    font-size: 10px;
                    font-weight: 700;
                    height: 11px;
                    inline-size: 1924px;
                    outline-color: rgb(195, 14, 61);
                    padding-block-end: 2px;
                    padding-bottom: 2px;
                    perspective-origin: 962px 6.5px;
                    text-decoration: none solid rgb(195, 14, 61);
                    text-emphasis-color: rgb(195, 14, 61);
                    transform-origin: 962px 6.5px;
                    width: 1924px;
                    -webkit-text-fill-color: rgb(195, 14, 61);
                    -webkit-text-stroke-color: rgb(195, 14, 61);
                  "
                >
                  Lifestyle
                </div>
                <span class="title" style="font-family: Arial; font-size: 13px; font-weight: 700">
                  <a
                    href="https://www.timeslive.co.za/sunday-times/lifestyle/2024-09-29-st-2909-books-sunday-times-literary-awards-shortlist-murder-most-foul-chris-hanis-white-supremacist-slaying/"
                    style="
                      block-size: 15px;
                      border-block-color: rgb(30, 26, 26);
                      border-color: rgb(30, 26, 26);
                      border-inline-color: rgb(30, 26, 26);
                      caret-color: rgb(30, 26, 26);
                      color: rgb(30, 26, 26);
                      column-rule-color: rgb(30, 26, 26);
                      cursor: pointer;
                      display: inline-block;
                      font-family: Arial;
                      font-size: 13px;
                      font-weight: 700;
                      height: 15px;
                      inline-size: 610.469px;
                      line-height: 15px;
                      outline-color: rgb(30, 26, 26);
                      perspective-origin: 305.234px 7.5px;
                      text-decoration: none solid rgb(30, 26, 26);
                      text-emphasis-color: rgb(30, 26, 26);
                      transform-origin: 305.234px 7.5px;
                      width: 610.469px;
                      -webkit-text-fill-color: rgb(30, 26, 26);
                      -webkit-text-stroke-color: rgb(30, 26, 26);
                    "
                  >
                    Sunday Times Literary Awards shortlist | Murder most foul: Chris Hani’s white-supremacist slaying
                  </a>
                </span>
                <div class="date-stamp" style="block-size: 11px; font-family: Arial; font-size: 10px; height: 11px; inline-size: 1924px; perspective-origin: 962px 5.5px; transform-origin: 962px 5.5px; width: 1924px">1 week ago</div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <div class="article sunday-times" style="background-color: rgb(255, 255, 255); block-size: 67px; height: 67px; inline-size: 1998px; margin-block-end: 5px; margin-bottom: 5px; perspective-origin: 999px 33.5px; transform-origin: 999px 33.5px; width: 1998px">
    <div class="row" style="block-size: 67px; height: 67px; inline-size: 1998px; perspective-origin: 999px 33.5px; transform-origin: 999px 33.5px; width: 1998px">
      <table style="block-size: 67px; height: 67px; inline-size: 1998px; perspective-origin: 999px 33.5px; transform-origin: 999px 33.5px; width: 1998px">
        <tbody style="block-size: 67px; border-block-color: rgb(128, 128, 128); border-color: rgb(128, 128, 128); border-inline-color: rgb(128, 128, 128); height: 67px; inline-size: 1998px; perspective-origin: 999px 33.5px; transform-origin: 999px 33.5px; width: 1998px">
          <tr style="block-size: 67px; border-block-color: rgb(128, 128, 128); border-color: rgb(128, 128, 128); border-inline-color: rgb(128, 128, 128); height: 67px; inline-size: 1998px; perspective-origin: 999px 33.5px; transform-origin: 999px 33.5px; vertical-align: middle; width: 1998px">
            <td text-align="top" valign="top" align="left" width="65px" height="65px" style="block-size: 65px; height: 65px; inline-size: 65px; perspective-origin: 33.5px 33.5px; text-align: -webkit-left; transform-origin: 33.5px 33.5px; vertical-align: top; width: 65px">
              <a
                aria-label="article image"
                class="image"
                href="https://www.timeslive.co.za/sunday-times/books/news/2024-09-27-an-evening-with-abdulrazak-gurnah-finding-our-shared-humanity/"
                title=""
                style="
                  background-image: url('https://lh3.googleusercontent.com/jUoe9Gr3Um9f9b-rT2emI4w7wohyzES1NtpYijqjCPQUrwPrmIEE3xNMb1HtTW8FTc_vKKH0Zq0FrXnxadkge65SCTrXDxiZvb0=s300');
                  background-repeat: no-repeat;
                  background-size: cover;
                  block-size: 65px;
                  border-block-color: rgb(0, 0, 238);
                  border-color: rgb(0, 0, 238);
                  border-inline-color: rgb(0, 0, 238);
                  caret-color: rgb(0, 0, 238);
                  color: rgb(0, 0, 238);
                  column-rule-color: rgb(0, 0, 238);
                  cursor: pointer;
                  display: block;
                  height: 65px;
                  inline-size: 65px;
                  outline-color: rgb(0, 0, 238);
                  perspective-origin: 32.5px 32.5px;
                  text-align: -webkit-left;
                  text-decoration: underline solid rgb(0, 0, 238);
                  text-emphasis-color: rgb(0, 0, 238);
                  transform-origin: 32.5px 32.5px;
                  width: 65px;
                  -webkit-text-decorations-in-effect: underline;
                  -webkit-text-fill-color: rgb(0, 0, 238);
                  -webkit-text-stroke-color: rgb(0, 0, 238);
                "
              ></a>
            </td>
            <td valign="top" style="block-size: 65px; height: 65px; inline-size: 1929px; perspective-origin: 965.5px 33.5px; transform-origin: 965.5px 33.5px; vertical-align: top; width: 1929px">
              <div id="titlesection" style="block-size: 42px; height: 42px; inline-size: 1924px; padding-block-start: 5px; padding-inline-start: 5px; padding-left: 5px; padding-top: 5px; perspective-origin: 964.5px 23.5px; transform-origin: 964.5px 23.5px; width: 1924px">
                <div
                  class="meta"
                  style="
                    block-size: 11px;
                    border-block-color: rgb(195, 14, 61);
                    border-color: rgb(195, 14, 61);
                    border-inline-color: rgb(195, 14, 61);
                    caret-color: rgb(195, 14, 61);
                    color: rgb(195, 14, 61);
                    column-rule-color: rgb(195, 14, 61);
                    font-family: Arial;
                    font-size: 10px;
                    font-weight: 700;
                    height: 11px;
                    inline-size: 1924px;
                    outline-color: rgb(195, 14, 61);
                    padding-block-end: 2px;
                    padding-bottom: 2px;
                    perspective-origin: 962px 6.5px;
                    text-decoration: none solid rgb(195, 14, 61);
                    text-emphasis-color: rgb(195, 14, 61);
                    transform-origin: 962px 6.5px;
                    width: 1924px;
                    -webkit-text-fill-color: rgb(195, 14, 61);
                    -webkit-text-stroke-color: rgb(195, 14, 61);
                  "
                >
                  News
                </div>
                <span class="title" style="font-family: Arial; font-size: 13px; font-weight: 700">
                  <a
                    href="https://www.timeslive.co.za/sunday-times/books/news/2024-09-27-an-evening-with-abdulrazak-gurnah-finding-our-shared-humanity/"
                    style="
                      block-size: 15px;
                      border-block-color: rgb(30, 26, 26);
                      border-color: rgb(30, 26, 26);
                      border-inline-color: rgb(30, 26, 26);
                      caret-color: rgb(30, 26, 26);
                      color: rgb(30, 26, 26);
                      column-rule-color: rgb(30, 26, 26);
                      cursor: pointer;
                      display: inline-block;
                      font-family: Arial;
                      font-size: 13px;
                      font-weight: 700;
                      height: 15px;
                      inline-size: 406.156px;
                      line-height: 15px;
                      outline-color: rgb(30, 26, 26);
                      perspective-origin: 203.078px 7.5px;
                      text-decoration: none solid rgb(30, 26, 26);
                      text-emphasis-color: rgb(30, 26, 26);
                      transform-origin: 203.078px 7.5px;
                      width: 406.156px;
                      -webkit-text-fill-color: rgb(30, 26, 26);
                      -webkit-text-stroke-color: rgb(30, 26, 26);
                    "
                  >
                    An evening with Abdulrazak Gurnah: finding our shared humanity
                  </a>
                </span>
                <div class="date-stamp" style="block-size: 11px; font-family: Arial; font-size: 10px; height: 11px; inline-size: 1924px; perspective-origin: 962px 5.5px; transform-origin: 962px 5.5px; width: 1924px">1 week ago</div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <div class="article sunday-times" style="background-color: rgb(255, 255, 255); block-size: 67px; height: 67px; inline-size: 1998px; margin-block-end: 5px; margin-bottom: 5px; perspective-origin: 999px 33.5px; transform-origin: 999px 33.5px; width: 1998px">
    <div class="row" style="block-size: 67px; height: 67px; inline-size: 1998px; perspective-origin: 999px 33.5px; transform-origin: 999px 33.5px; width: 1998px">
      <table style="block-size: 67px; height: 67px; inline-size: 1998px; perspective-origin: 999px 33.5px; transform-origin: 999px 33.5px; width: 1998px">
        <tbody style="block-size: 67px; border-block-color: rgb(128, 128, 128); border-color: rgb(128, 128, 128); border-inline-color: rgb(128, 128, 128); height: 67px; inline-size: 1998px; perspective-origin: 999px 33.5px; transform-origin: 999px 33.5px; width: 1998px">
          <tr style="block-size: 67px; border-block-color: rgb(128, 128, 128); border-color: rgb(128, 128, 128); border-inline-color: rgb(128, 128, 128); height: 67px; inline-size: 1998px; perspective-origin: 999px 33.5px; transform-origin: 999px 33.5px; vertical-align: middle; width: 1998px">
            <td text-align="top" valign="top" align="left" width="65px" height="65px" style="block-size: 65px; height: 65px; inline-size: 65px; perspective-origin: 33.5px 33.5px; text-align: -webkit-left; transform-origin: 33.5px 33.5px; vertical-align: top; width: 65px">
              <a
                aria-label="article image"
                class="image"
                href="https://www.timeslive.co.za/sunday-times/books/fiction/2024-09-25-rooney-fever-intermezzo-is-a-deep-dive-into-grief-and-connection-in-contemporary-life/"
                title=""
                style="
                  background-image: url('https://lh3.googleusercontent.com/0Vj2NYzgjLuMVaIcSS9R9c_OA5DilAw516OMW2fSzp_Nk7IfgzoXnZ2UDPxW-1KNBNQw4F_DVwX9kW8CiljbOSU8tncWSLhOeg=s300');
                  background-repeat: no-repeat;
                  background-size: cover;
                  block-size: 65px;
                  border-block-color: rgb(0, 0, 238);
                  border-color: rgb(0, 0, 238);
                  border-inline-color: rgb(0, 0, 238);
                  caret-color: rgb(0, 0, 238);
                  color: rgb(0, 0, 238);
                  column-rule-color: rgb(0, 0, 238);
                  cursor: pointer;
                  display: block;
                  height: 65px;
                  inline-size: 65px;
                  outline-color: rgb(0, 0, 238);
                  perspective-origin: 32.5px 32.5px;
                  text-align: -webkit-left;
                  text-decoration: underline solid rgb(0, 0, 238);
                  text-emphasis-color: rgb(0, 0, 238);
                  transform-origin: 32.5px 32.5px;
                  width: 65px;
                  -webkit-text-decorations-in-effect: underline;
                  -webkit-text-fill-color: rgb(0, 0, 238);
                  -webkit-text-stroke-color: rgb(0, 0, 238);
                "
              ></a>
            </td>
            <td valign="top" style="block-size: 65px; height: 65px; inline-size: 1929px; perspective-origin: 965.5px 33.5px; transform-origin: 965.5px 33.5px; vertical-align: top; width: 1929px">
              <div id="titlesection" style="block-size: 42px; height: 42px; inline-size: 1924px; padding-block-start: 5px; padding-inline-start: 5px; padding-left: 5px; padding-top: 5px; perspective-origin: 964.5px 23.5px; transform-origin: 964.5px 23.5px; width: 1924px">
                <div
                  class="meta"
                  style="
                    block-size: 11px;
                    border-block-color: rgb(195, 14, 61);
                    border-color: rgb(195, 14, 61);
                    border-inline-color: rgb(195, 14, 61);
                    caret-color: rgb(195, 14, 61);
                    color: rgb(195, 14, 61);
                    column-rule-color: rgb(195, 14, 61);
                    font-family: Arial;
                    font-size: 10px;
                    font-weight: 700;
                    height: 11px;
                    inline-size: 1924px;
                    outline-color: rgb(195, 14, 61);
                    padding-block-end: 2px;
                    padding-bottom: 2px;
                    perspective-origin: 962px 6.5px;
                    text-decoration: none solid rgb(195, 14, 61);
                    text-emphasis-color: rgb(195, 14, 61);
                    transform-origin: 962px 6.5px;
                    width: 1924px;
                    -webkit-text-fill-color: rgb(195, 14, 61);
                    -webkit-text-stroke-color: rgb(195, 14, 61);
                  "
                >
                  Fiction
                </div>
                <span class="title" style="font-family: Arial; font-size: 13px; font-weight: 700">
                  <a
                    href="https://www.timeslive.co.za/sunday-times/books/fiction/2024-09-25-rooney-fever-intermezzo-is-a-deep-dive-into-grief-and-connection-in-contemporary-life/"
                    style="
                      block-size: 15px;
                      border-block-color: rgb(30, 26, 26);
                      border-color: rgb(30, 26, 26);
                      border-inline-color: rgb(30, 26, 26);
                      caret-color: rgb(30, 26, 26);
                      color: rgb(30, 26, 26);
                      column-rule-color: rgb(30, 26, 26);
                      cursor: pointer;
                      display: inline-block;
                      font-family: Arial;
                      font-size: 13px;
                      font-weight: 700;
                      height: 15px;
                      inline-size: 540.344px;
                      line-height: 15px;
                      outline-color: rgb(30, 26, 26);
                      perspective-origin: 270.172px 7.5px;
                      text-decoration: none solid rgb(30, 26, 26);
                      text-emphasis-color: rgb(30, 26, 26);
                      transform-origin: 270.172px 7.5px;
                      width: 540.344px;
                      -webkit-text-fill-color: rgb(30, 26, 26);
                      -webkit-text-stroke-color: rgb(30, 26, 26);
                    "
                  >
                    Rooney fever: ‘Intermezzo’ is a deep dive into grief and connection in contemporary life
                  </a>
                </span>
                <div class="date-stamp" style="block-size: 11px; font-family: Arial; font-size: 10px; height: 11px; inline-size: 1924px; perspective-origin: 962px 5.5px; transform-origin: 962px 5.5px; width: 1924px">1 week ago</div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <div class="article sunday-times" style="background-color: rgb(255, 255, 255); block-size: 67px; height: 67px; inline-size: 1998px; margin-block-end: 5px; margin-bottom: 5px; perspective-origin: 999px 33.5px; transform-origin: 999px 33.5px; width: 1998px">
    <div class="row" style="block-size: 67px; height: 67px; inline-size: 1998px; perspective-origin: 999px 33.5px; transform-origin: 999px 33.5px; width: 1998px">
      <table style="block-size: 67px; height: 67px; inline-size: 1998px; perspective-origin: 999px 33.5px; transform-origin: 999px 33.5px; width: 1998px">
        <tbody style="block-size: 67px; border-block-color: rgb(128, 128, 128); border-color: rgb(128, 128, 128); border-inline-color: rgb(128, 128, 128); height: 67px; inline-size: 1998px; perspective-origin: 999px 33.5px; transform-origin: 999px 33.5px; width: 1998px">
          <tr style="block-size: 67px; border-block-color: rgb(128, 128, 128); border-color: rgb(128, 128, 128); border-inline-color: rgb(128, 128, 128); height: 67px; inline-size: 1998px; perspective-origin: 999px 33.5px; transform-origin: 999px 33.5px; vertical-align: middle; width: 1998px">
            <td text-align="top" valign="top" align="left" width="65px" height="65px" style="block-size: 65px; height: 65px; inline-size: 65px; perspective-origin: 33.5px 33.5px; text-align: -webkit-left; transform-origin: 33.5px 33.5px; vertical-align: top; width: 65px">
              <a
                aria-label="article image"
                class="image"
                href="https://www.timeslive.co.za/sunday-times/books/non-fiction/2024-09-23-extract-breaking-bread-a-memoir-by-jonathan-jansen/"
                title=""
                style="
                  background-image: url('https://lh3.googleusercontent.com/jxakZrt2_6n5oaiNa9eY9nIMJsyFP6Nq7RA_1fxmRUKf6GHmQW5GFE2U_0N9ILp5vOgQsvFEWvZp3ojeyHplrd5_k46wc0Q3P1g=s300');
                  background-repeat: no-repeat;
                  background-size: cover;
                  block-size: 65px;
                  border-block-color: rgb(0, 0, 238);
                  border-color: rgb(0, 0, 238);
                  border-inline-color: rgb(0, 0, 238);
                  caret-color: rgb(0, 0, 238);
                  color: rgb(0, 0, 238);
                  column-rule-color: rgb(0, 0, 238);
                  cursor: pointer;
                  display: block;
                  height: 65px;
                  inline-size: 65px;
                  outline-color: rgb(0, 0, 238);
                  perspective-origin: 32.5px 32.5px;
                  text-align: -webkit-left;
                  text-decoration: underline solid rgb(0, 0, 238);
                  text-emphasis-color: rgb(0, 0, 238);
                  transform-origin: 32.5px 32.5px;
                  width: 65px;
                  -webkit-text-decorations-in-effect: underline;
                  -webkit-text-fill-color: rgb(0, 0, 238);
                  -webkit-text-stroke-color: rgb(0, 0, 238);
                "
              ></a>
            </td>
            <td valign="top" style="block-size: 65px; height: 65px; inline-size: 1929px; perspective-origin: 965.5px 33.5px; transform-origin: 965.5px 33.5px; vertical-align: top; width: 1929px">
              <div id="titlesection" style="block-size: 42px; height: 42px; inline-size: 1924px; padding-block-start: 5px; padding-inline-start: 5px; padding-left: 5px; padding-top: 5px; perspective-origin: 964.5px 23.5px; transform-origin: 964.5px 23.5px; width: 1924px">
                <div
                  class="meta"
                  style="
                    block-size: 11px;
                    border-block-color: rgb(195, 14, 61);
                    border-color: rgb(195, 14, 61);
                    border-inline-color: rgb(195, 14, 61);
                    caret-color: rgb(195, 14, 61);
                    color: rgb(195, 14, 61);
                    column-rule-color: rgb(195, 14, 61);
                    font-family: Arial;
                    font-size: 10px;
                    font-weight: 700;
                    height: 11px;
                    inline-size: 1924px;
                    outline-color: rgb(195, 14, 61);
                    padding-block-end: 2px;
                    padding-bottom: 2px;
                    perspective-origin: 962px 6.5px;
                    text-decoration: none solid rgb(195, 14, 61);
                    text-emphasis-color: rgb(195, 14, 61);
                    transform-origin: 962px 6.5px;
                    width: 1924px;
                    -webkit-text-fill-color: rgb(195, 14, 61);
                    -webkit-text-stroke-color: rgb(195, 14, 61);
                  "
                >
                  Non-Fiction
                </div>
                <span class="title" style="font-family: Arial; font-size: 13px; font-weight: 700">
                  <a
                    href="https://www.timeslive.co.za/sunday-times/books/non-fiction/2024-09-23-extract-breaking-bread-a-memoir-by-jonathan-jansen/"
                    style="
                      block-size: 15px;
                      border-block-color: rgb(30, 26, 26);
                      border-color: rgb(30, 26, 26);
                      border-inline-color: rgb(30, 26, 26);
                      caret-color: rgb(30, 26, 26);
                      color: rgb(30, 26, 26);
                      column-rule-color: rgb(30, 26, 26);
                      cursor: pointer;
                      display: inline-block;
                      font-family: Arial;
                      font-size: 13px;
                      font-weight: 700;
                      height: 15px;
                      inline-size: 370.141px;
                      line-height: 15px;
                      outline-color: rgb(30, 26, 26);
                      perspective-origin: 185.062px 7.5px;
                      text-decoration: none solid rgb(30, 26, 26);
                      text-emphasis-color: rgb(30, 26, 26);
                      transform-origin: 185.07px 7.5px;
                      width: 370.141px;
                      -webkit-text-fill-color: rgb(30, 26, 26);
                      -webkit-text-stroke-color: rgb(30, 26, 26);
                    "
                  >
                    EXTRACT | ‘Breaking Bread: A Memoir’ by Jonathan Jansen
                  </a>
                </span>
                <div class="date-stamp" style="block-size: 11px; font-family: Arial; font-size: 10px; height: 11px; inline-size: 1924px; perspective-origin: 962px 5.5px; transform-origin: 962px 5.5px; width: 1924px">1 week ago</div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <div class="article sunday-times" style="background-color: rgb(255, 255, 255); block-size: 67px; height: 67px; inline-size: 1998px; margin-block-end: 5px; margin-bottom: 5px; perspective-origin: 999px 33.5px; transform-origin: 999px 33.5px; width: 1998px">
    <div class="row" style="block-size: 67px; height: 67px; inline-size: 1998px; perspective-origin: 999px 33.5px; transform-origin: 999px 33.5px; width: 1998px">
      <table style="block-size: 67px; height: 67px; inline-size: 1998px; perspective-origin: 999px 33.5px; transform-origin: 999px 33.5px; width: 1998px">
        <tbody style="block-size: 67px; border-block-color: rgb(128, 128, 128); border-color: rgb(128, 128, 128); border-inline-color: rgb(128, 128, 128); height: 67px; inline-size: 1998px; perspective-origin: 999px 33.5px; transform-origin: 999px 33.5px; width: 1998px">
          <tr style="block-size: 67px; border-block-color: rgb(128, 128, 128); border-color: rgb(128, 128, 128); border-inline-color: rgb(128, 128, 128); height: 67px; inline-size: 1998px; perspective-origin: 999px 33.5px; transform-origin: 999px 33.5px; vertical-align: middle; width: 1998px">
            <td text-align="top" valign="top" align="left" width="65px" height="65px" style="block-size: 65px; height: 65px; inline-size: 65px; perspective-origin: 33.5px 33.5px; text-align: -webkit-left; transform-origin: 33.5px 33.5px; vertical-align: top; width: 65px">
              <a
                aria-label="article image"
                class="image"
                href="https://www.timeslive.co.za/sunday-times/books/news/2024-09-22-speaking-the-truth-life-in-post-apartheid-sa-seen-through-the-eyes-of-ordinary-people/"
                title=""
                style="
                  background-image: url('https://lh3.googleusercontent.com/S7gnbckauKt12svrp5jyGfFEWIAMze_WR4_SylbF__2zz4qR4AiYVsI6eOsIzv62U8CXmdSky51wTuQqdzen3fP6JNOZmjE6PzA=s300');
                  background-repeat: no-repeat;
                  background-size: cover;
                  block-size: 65px;
                  border-block-color: rgb(0, 0, 238);
                  border-color: rgb(0, 0, 238);
                  border-inline-color: rgb(0, 0, 238);
                  caret-color: rgb(0, 0, 238);
                  color: rgb(0, 0, 238);
                  column-rule-color: rgb(0, 0, 238);
                  cursor: pointer;
                  display: block;
                  height: 65px;
                  inline-size: 65px;
                  outline-color: rgb(0, 0, 238);
                  perspective-origin: 32.5px 32.5px;
                  text-align: -webkit-left;
                  text-decoration: underline solid rgb(0, 0, 238);
                  text-emphasis-color: rgb(0, 0, 238);
                  transform-origin: 32.5px 32.5px;
                  width: 65px;
                  -webkit-text-decorations-in-effect: underline;
                  -webkit-text-fill-color: rgb(0, 0, 238);
                  -webkit-text-stroke-color: rgb(0, 0, 238);
                "
              ></a>
            </td>
            <td valign="top" style="block-size: 65px; height: 65px; inline-size: 1929px; perspective-origin: 965.5px 33.5px; transform-origin: 965.5px 33.5px; vertical-align: top; width: 1929px">
              <div id="titlesection" style="block-size: 42px; height: 42px; inline-size: 1924px; padding-block-start: 5px; padding-inline-start: 5px; padding-left: 5px; padding-top: 5px; perspective-origin: 964.5px 23.5px; transform-origin: 964.5px 23.5px; width: 1924px">
                <div
                  class="meta"
                  style="
                    block-size: 11px;
                    border-block-color: rgb(195, 14, 61);
                    border-color: rgb(195, 14, 61);
                    border-inline-color: rgb(195, 14, 61);
                    caret-color: rgb(195, 14, 61);
                    color: rgb(195, 14, 61);
                    column-rule-color: rgb(195, 14, 61);
                    font-family: Arial;
                    font-size: 10px;
                    font-weight: 700;
                    height: 11px;
                    inline-size: 1924px;
                    outline-color: rgb(195, 14, 61);
                    padding-block-end: 2px;
                    padding-bottom: 2px;
                    perspective-origin: 962px 6.5px;
                    text-decoration: none solid rgb(195, 14, 61);
                    text-emphasis-color: rgb(195, 14, 61);
                    transform-origin: 962px 6.5px;
                    width: 1924px;
                    -webkit-text-fill-color: rgb(195, 14, 61);
                    -webkit-text-stroke-color: rgb(195, 14, 61);
                  "
                >
                  News
                </div>
                <span class="title" style="font-family: Arial; font-size: 13px; font-weight: 700">
                  <a
                    href="https://www.timeslive.co.za/sunday-times/books/news/2024-09-22-speaking-the-truth-life-in-post-apartheid-sa-seen-through-the-eyes-of-ordinary-people/"
                    style="
                      block-size: 15px;
                      border-block-color: rgb(30, 26, 26);
                      border-color: rgb(30, 26, 26);
                      border-inline-color: rgb(30, 26, 26);
                      caret-color: rgb(30, 26, 26);
                      color: rgb(30, 26, 26);
                      column-rule-color: rgb(30, 26, 26);
                      cursor: pointer;
                      display: inline-block;
                      font-family: Arial;
                      font-size: 13px;
                      font-weight: 700;
                      height: 15px;
                      inline-size: 459.984px;
                      line-height: 15px;
                      outline-color: rgb(30, 26, 26);
                      perspective-origin: 229.984px 7.5px;
                      text-decoration: none solid rgb(30, 26, 26);
                      text-emphasis-color: rgb(30, 26, 26);
                      transform-origin: 229.992px 7.5px;
                      width: 459.984px;
                      -webkit-text-fill-color: rgb(30, 26, 26);
                      -webkit-text-stroke-color: rgb(30, 26, 26);
                    "
                  >
                    Sunday Times Literary Awards shortlist | Eve Fairbanks on ‘The Inheritors’
                  </a>
                </span>
                <div class="date-stamp" style="block-size: 11px; font-family: Arial; font-size: 10px; height: 11px; inline-size: 1924px; perspective-origin: 962px 5.5px; transform-origin: 962px 5.5px; width: 1924px">2 weeks ago</div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <div class="article sunday-times" style="background-color: rgb(255, 255, 255); block-size: 67px; height: 67px; inline-size: 1998px; margin-block-end: 5px; margin-bottom: 5px; perspective-origin: 999px 33.5px; transform-origin: 999px 33.5px; width: 1998px">
    <div class="row" style="block-size: 67px; height: 67px; inline-size: 1998px; perspective-origin: 999px 33.5px; transform-origin: 999px 33.5px; width: 1998px">
      <table style="block-size: 67px; height: 67px; inline-size: 1998px; perspective-origin: 999px 33.5px; transform-origin: 999px 33.5px; width: 1998px">
        <tbody style="block-size: 67px; border-block-color: rgb(128, 128, 128); border-color: rgb(128, 128, 128); border-inline-color: rgb(128, 128, 128); height: 67px; inline-size: 1998px; perspective-origin: 999px 33.5px; transform-origin: 999px 33.5px; width: 1998px">
          <tr style="block-size: 67px; border-block-color: rgb(128, 128, 128); border-color: rgb(128, 128, 128); border-inline-color: rgb(128, 128, 128); height: 67px; inline-size: 1998px; perspective-origin: 999px 33.5px; transform-origin: 999px 33.5px; vertical-align: middle; width: 1998px">
            <td text-align="top" valign="top" align="left" width="65px" height="65px" style="block-size: 65px; height: 65px; inline-size: 65px; perspective-origin: 33.5px 33.5px; text-align: -webkit-left; transform-origin: 33.5px 33.5px; vertical-align: top; width: 65px">
              <a
                aria-label="article image"
                class="image"
                href="https://www.timeslive.co.za/sunday-times/books/news/2024-09-22-sunday-times-literary-awards-shortlist--sven-axelrad-on-the-genesis-of-buried-treasure/"
                title=""
                style="
                  background-image: url('https://lh3.googleusercontent.com/bcRcivTTKVpCWNu6Ui1mEP0E_dKkvMNmKlYqXJHYu1761zbcXFAEm6T77V6Zo8qV8W9QiR0YuhIhzEUfR3uWmjUf4D9ZJnRlRfQ=s300');
                  background-repeat: no-repeat;
                  background-size: cover;
                  block-size: 65px;
                  border-block-color: rgb(0, 0, 238);
                  border-color: rgb(0, 0, 238);
                  border-inline-color: rgb(0, 0, 238);
                  caret-color: rgb(0, 0, 238);
                  color: rgb(0, 0, 238);
                  column-rule-color: rgb(0, 0, 238);
                  cursor: pointer;
                  display: block;
                  height: 65px;
                  inline-size: 65px;
                  outline-color: rgb(0, 0, 238);
                  perspective-origin: 32.5px 32.5px;
                  text-align: -webkit-left;
                  text-decoration: underline solid rgb(0, 0, 238);
                  text-emphasis-color: rgb(0, 0, 238);
                  transform-origin: 32.5px 32.5px;
                  width: 65px;
                  -webkit-text-decorations-in-effect: underline;
                  -webkit-text-fill-color: rgb(0, 0, 238);
                  -webkit-text-stroke-color: rgb(0, 0, 238);
                "
              ></a>
            </td>
            <td valign="top" style="block-size: 65px; height: 65px; inline-size: 1929px; perspective-origin: 965.5px 33.5px; transform-origin: 965.5px 33.5px; vertical-align: top; width: 1929px">
              <div id="titlesection" style="block-size: 42px; height: 42px; inline-size: 1924px; padding-block-start: 5px; padding-inline-start: 5px; padding-left: 5px; padding-top: 5px; perspective-origin: 964.5px 23.5px; transform-origin: 964.5px 23.5px; width: 1924px">
                <div
                  class="meta"
                  style="
                    block-size: 11px;
                    border-block-color: rgb(195, 14, 61);
                    border-color: rgb(195, 14, 61);
                    border-inline-color: rgb(195, 14, 61);
                    caret-color: rgb(195, 14, 61);
                    color: rgb(195, 14, 61);
                    column-rule-color: rgb(195, 14, 61);
                    font-family: Arial;
                    font-size: 10px;
                    font-weight: 700;
                    height: 11px;
                    inline-size: 1924px;
                    outline-color: rgb(195, 14, 61);
                    padding-block-end: 2px;
                    padding-bottom: 2px;
                    perspective-origin: 962px 6.5px;
                    text-decoration: none solid rgb(195, 14, 61);
                    text-emphasis-color: rgb(195, 14, 61);
                    transform-origin: 962px 6.5px;
                    width: 1924px;
                    -webkit-text-fill-color: rgb(195, 14, 61);
                    -webkit-text-stroke-color: rgb(195, 14, 61);
                  "
                >
                  News
                </div>
                <span class="title" style="font-family: Arial; font-size: 13px; font-weight: 700">
                  <a
                    href="https://www.timeslive.co.za/sunday-times/books/news/2024-09-22-sunday-times-literary-awards-shortlist--sven-axelrad-on-the-genesis-of-buried-treasure/"
                    style="
                      block-size: 15px;
                      border-block-color: rgb(30, 26, 26);
                      border-color: rgb(30, 26, 26);
                      border-inline-color: rgb(30, 26, 26);
                      caret-color: rgb(30, 26, 26);
                      color: rgb(30, 26, 26);
                      column-rule-color: rgb(30, 26, 26);
                      cursor: pointer;
                      display: inline-block;
                      font-family: Arial;
                      font-size: 13px;
                      font-weight: 700;
                      height: 15px;
                      inline-size: 557.047px;
                      line-height: 15px;
                      outline-color: rgb(30, 26, 26);
                      perspective-origin: 278.516px 7.5px;
                      text-decoration: none solid rgb(30, 26, 26);
                      text-emphasis-color: rgb(30, 26, 26);
                      transform-origin: 278.523px 7.5px;
                      width: 557.047px;
                      -webkit-text-fill-color: rgb(30, 26, 26);
                      -webkit-text-stroke-color: rgb(30, 26, 26);
                    "
                  >
                    Sunday Times Literary Awards shortlist | Sven Axelrad on the genesis of ‘Buried Treasure’
                  </a>
                </span>
                <div class="date-stamp" style="block-size: 11px; font-family: Arial; font-size: 10px; height: 11px; inline-size: 1924px; perspective-origin: 962px 5.5px; transform-origin: 962px 5.5px; width: 1924px">2 weeks ago</div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <div class="article sunday-times" style="background-color: rgb(255, 255, 255); block-size: 67px; height: 67px; inline-size: 1998px; margin-block-end: 5px; margin-bottom: 5px; perspective-origin: 999px 33.5px; transform-origin: 999px 33.5px; width: 1998px">
    <div class="row" style="block-size: 67px; height: 67px; inline-size: 1998px; perspective-origin: 999px 33.5px; transform-origin: 999px 33.5px; width: 1998px">
      <table style="block-size: 67px; height: 67px; inline-size: 1998px; perspective-origin: 999px 33.5px; transform-origin: 999px 33.5px; width: 1998px">
        <tbody style="block-size: 67px; border-block-color: rgb(128, 128, 128); border-color: rgb(128, 128, 128); border-inline-color: rgb(128, 128, 128); height: 67px; inline-size: 1998px; perspective-origin: 999px 33.5px; transform-origin: 999px 33.5px; width: 1998px">
          <tr style="block-size: 67px; border-block-color: rgb(128, 128, 128); border-color: rgb(128, 128, 128); border-inline-color: rgb(128, 128, 128); height: 67px; inline-size: 1998px; perspective-origin: 999px 33.5px; transform-origin: 999px 33.5px; vertical-align: middle; width: 1998px">
            <td text-align="top" valign="top" align="left" width="65px" height="65px" style="block-size: 65px; height: 65px; inline-size: 65px; perspective-origin: 33.5px 33.5px; text-align: -webkit-left; transform-origin: 33.5px 33.5px; vertical-align: top; width: 65px">
              <a
                aria-label="article image"
                class="image"
                href="https://www.timeslive.co.za/sunday-times/opinion-and-analysis/insight/2024-09-22-smuts-vs-xuma--round-2/"
                title=""
                style="
                  background-image: url('https://lh3.googleusercontent.com/VRU5ImhKhqjMS2vS5udj35laQIPat59EokF4pgCnDbEnqpk7PNUoAM2kHKaTMkrpefBpLT7oqjsCbNMdUrOO47oeKvmuE4uabnU=s300');
                  background-repeat: no-repeat;
                  background-size: cover;
                  block-size: 65px;
                  border-block-color: rgb(0, 0, 238);
                  border-color: rgb(0, 0, 238);
                  border-inline-color: rgb(0, 0, 238);
                  caret-color: rgb(0, 0, 238);
                  color: rgb(0, 0, 238);
                  column-rule-color: rgb(0, 0, 238);
                  cursor: pointer;
                  display: block;
                  height: 65px;
                  inline-size: 65px;
                  outline-color: rgb(0, 0, 238);
                  perspective-origin: 32.5px 32.5px;
                  text-align: -webkit-left;
                  text-decoration: underline solid rgb(0, 0, 238);
                  text-emphasis-color: rgb(0, 0, 238);
                  transform-origin: 32.5px 32.5px;
                  width: 65px;
                  -webkit-text-decorations-in-effect: underline;
                  -webkit-text-fill-color: rgb(0, 0, 238);
                  -webkit-text-stroke-color: rgb(0, 0, 238);
                "
              ></a>
            </td>
            <td valign="top" style="block-size: 65px; height: 65px; inline-size: 1929px; perspective-origin: 965.5px 33.5px; transform-origin: 965.5px 33.5px; vertical-align: top; width: 1929px">
              <div id="titlesection" style="block-size: 42px; height: 42px; inline-size: 1924px; padding-block-start: 5px; padding-inline-start: 5px; padding-left: 5px; padding-top: 5px; perspective-origin: 964.5px 23.5px; transform-origin: 964.5px 23.5px; width: 1924px">
                <div
                  class="meta"
                  style="
                    block-size: 11px;
                    border-block-color: rgb(195, 14, 61);
                    border-color: rgb(195, 14, 61);
                    border-inline-color: rgb(195, 14, 61);
                    caret-color: rgb(195, 14, 61);
                    color: rgb(195, 14, 61);
                    column-rule-color: rgb(195, 14, 61);
                    font-family: Arial;
                    font-size: 10px;
                    font-weight: 700;
                    height: 11px;
                    inline-size: 1924px;
                    outline-color: rgb(195, 14, 61);
                    padding-block-end: 2px;
                    padding-bottom: 2px;
                    perspective-origin: 962px 6.5px;
                    text-decoration: none solid rgb(195, 14, 61);
                    text-emphasis-color: rgb(195, 14, 61);
                    transform-origin: 962px 6.5px;
                    width: 1924px;
                    -webkit-text-fill-color: rgb(195, 14, 61);
                    -webkit-text-stroke-color: rgb(195, 14, 61);
                  "
                >
                  Insight
                </div>
                <span class="title" style="font-family: Arial; font-size: 13px; font-weight: 700">
                  <a
                    href="https://www.timeslive.co.za/sunday-times/opinion-and-analysis/insight/2024-09-22-smuts-vs-xuma--round-2/"
                    style="
                      block-size: 15px;
                      border-block-color: rgb(30, 26, 26);
                      border-color: rgb(30, 26, 26);
                      border-inline-color: rgb(30, 26, 26);
                      caret-color: rgb(30, 26, 26);
                      color: rgb(30, 26, 26);
                      column-rule-color: rgb(30, 26, 26);
                      cursor: pointer;
                      display: inline-block;
                      font-family: Arial;
                      font-size: 13px;
                      font-weight: 700;
                      height: 15px;
                      inline-size: 283.906px;
                      line-height: 15px;
                      outline-color: rgb(30, 26, 26);
                      perspective-origin: 141.953px 7.5px;
                      text-decoration: none solid rgb(30, 26, 26);
                      text-emphasis-color: rgb(30, 26, 26);
                      transform-origin: 141.953px 7.5px;
                      width: 283.906px;
                      -webkit-text-fill-color: rgb(30, 26, 26);
                      -webkit-text-stroke-color: rgb(30, 26, 26);
                    "
                  >
                    BOOK EXTRACT | Smuts vs Xuma — Round 2
                  </a>
                </span>
                <div class="date-stamp" style="block-size: 11px; font-family: Arial; font-size: 10px; height: 11px; inline-size: 1924px; perspective-origin: 962px 5.5px; transform-origin: 962px 5.5px; width: 1924px">2 weeks ago</div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <div class="article sunday-times" style="background-color: rgb(255, 255, 255); block-size: 67px; height: 67px; inline-size: 1998px; margin-block-end: 5px; margin-bottom: 5px; perspective-origin: 999px 33.5px; transform-origin: 999px 33.5px; width: 1998px">
    <div class="row" style="block-size: 67px; height: 67px; inline-size: 1998px; perspective-origin: 999px 33.5px; transform-origin: 999px 33.5px; width: 1998px">
      <table style="block-size: 67px; height: 67px; inline-size: 1998px; perspective-origin: 999px 33.5px; transform-origin: 999px 33.5px; width: 1998px">
        <tbody style="block-size: 67px; border-block-color: rgb(128, 128, 128); border-color: rgb(128, 128, 128); border-inline-color: rgb(128, 128, 128); height: 67px; inline-size: 1998px; perspective-origin: 999px 33.5px; transform-origin: 999px 33.5px; width: 1998px">
          <tr style="block-size: 67px; border-block-color: rgb(128, 128, 128); border-color: rgb(128, 128, 128); border-inline-color: rgb(128, 128, 128); height: 67px; inline-size: 1998px; perspective-origin: 999px 33.5px; transform-origin: 999px 33.5px; vertical-align: middle; width: 1998px">
            <td text-align="top" valign="top" align="left" width="65px" height="65px" style="block-size: 65px; height: 65px; inline-size: 65px; perspective-origin: 33.5px 33.5px; text-align: -webkit-left; transform-origin: 33.5px 33.5px; vertical-align: top; width: 65px">
              <a
                aria-label="article image"
                class="image"
                href="https://www.timeslive.co.za/sunday-times/books/news/2024-09-20-works-of-wit-and-wisdom-winners-of-the-2024-uj-prize-are-announced/"
                title=""
                style="
                  background-image: url('https://lh3.googleusercontent.com/jYbxX-6cZziYMiIHcXYylL4CqPTPNVcaO35uS0-R6Fbgr_MBnet6r_ze0qsYjdF8DFGOyYhBWZ5eCG0jwxbFuapV8gUeGlhUzw=s300');
                  background-repeat: no-repeat;
                  background-size: cover;
                  block-size: 65px;
                  border-block-color: rgb(0, 0, 238);
                  border-color: rgb(0, 0, 238);
                  border-inline-color: rgb(0, 0, 238);
                  caret-color: rgb(0, 0, 238);
                  color: rgb(0, 0, 238);
                  column-rule-color: rgb(0, 0, 238);
                  cursor: pointer;
                  display: block;
                  height: 65px;
                  inline-size: 65px;
                  outline-color: rgb(0, 0, 238);
                  perspective-origin: 32.5px 32.5px;
                  text-align: -webkit-left;
                  text-decoration: underline solid rgb(0, 0, 238);
                  text-emphasis-color: rgb(0, 0, 238);
                  transform-origin: 32.5px 32.5px;
                  width: 65px;
                  -webkit-text-decorations-in-effect: underline;
                  -webkit-text-fill-color: rgb(0, 0, 238);
                  -webkit-text-stroke-color: rgb(0, 0, 238);
                "
              ></a>
            </td>
            <td valign="top" style="block-size: 65px; height: 65px; inline-size: 1929px; perspective-origin: 965.5px 33.5px; transform-origin: 965.5px 33.5px; vertical-align: top; width: 1929px">
              <div id="titlesection" style="block-size: 42px; height: 42px; inline-size: 1924px; padding-block-start: 5px; padding-inline-start: 5px; padding-left: 5px; padding-top: 5px; perspective-origin: 964.5px 23.5px; transform-origin: 964.5px 23.5px; width: 1924px">
                <div
                  class="meta"
                  style="
                    block-size: 11px;
                    border-block-color: rgb(195, 14, 61);
                    border-color: rgb(195, 14, 61);
                    border-inline-color: rgb(195, 14, 61);
                    caret-color: rgb(195, 14, 61);
                    color: rgb(195, 14, 61);
                    column-rule-color: rgb(195, 14, 61);
                    font-family: Arial;
                    font-size: 10px;
                    font-weight: 700;
                    height: 11px;
                    inline-size: 1924px;
                    outline-color: rgb(195, 14, 61);
                    padding-block-end: 2px;
                    padding-bottom: 2px;
                    perspective-origin: 962px 6.5px;
                    text-decoration: none solid rgb(195, 14, 61);
                    text-emphasis-color: rgb(195, 14, 61);
                    transform-origin: 962px 6.5px;
                    width: 1924px;
                    -webkit-text-fill-color: rgb(195, 14, 61);
                    -webkit-text-stroke-color: rgb(195, 14, 61);
                  "
                >
                  News
                </div>
                <span class="title" style="font-family: Arial; font-size: 13px; font-weight: 700">
                  <a
                    href="https://www.timeslive.co.za/sunday-times/books/news/2024-09-20-works-of-wit-and-wisdom-winners-of-the-2024-uj-prize-are-announced/"
                    style="
                      block-size: 15px;
                      border-block-color: rgb(30, 26, 26);
                      border-color: rgb(30, 26, 26);
                      border-inline-color: rgb(30, 26, 26);
                      caret-color: rgb(30, 26, 26);
                      color: rgb(30, 26, 26);
                      column-rule-color: rgb(30, 26, 26);
                      cursor: pointer;
                      display: inline-block;
                      font-family: Arial;
                      font-size: 13px;
                      font-weight: 700;
                      height: 15px;
                      inline-size: 435.359px;
                      line-height: 15px;
                      outline-color: rgb(30, 26, 26);
                      perspective-origin: 217.672px 7.5px;
                      text-decoration: none solid rgb(30, 26, 26);
                      text-emphasis-color: rgb(30, 26, 26);
                      transform-origin: 217.68px 7.5px;
                      width: 435.359px;
                      -webkit-text-fill-color: rgb(30, 26, 26);
                      -webkit-text-stroke-color: rgb(30, 26, 26);
                    "
                  >
                    Works of wit and wisdom: winners of the 2024 UJ Prize are announced
                  </a>
                </span>
                <div class="date-stamp" style="block-size: 11px; font-family: Arial; font-size: 10px; height: 11px; inline-size: 1924px; perspective-origin: 962px 5.5px; transform-origin: 962px 5.5px; width: 1924px">2 weeks ago</div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <div class="article sunday-times" style="background-color: rgb(255, 255, 255); block-size: 67px; height: 67px; inline-size: 1998px; margin-block-end: 5px; margin-bottom: 5px; perspective-origin: 999px 33.5px; transform-origin: 999px 33.5px; width: 1998px">
    <div class="row" style="block-size: 67px; height: 67px; inline-size: 1998px; perspective-origin: 999px 33.5px; transform-origin: 999px 33.5px; width: 1998px">
      <table style="block-size: 67px; height: 67px; inline-size: 1998px; perspective-origin: 999px 33.5px; transform-origin: 999px 33.5px; width: 1998px">
        <tbody style="block-size: 67px; border-block-color: rgb(128, 128, 128); border-color: rgb(128, 128, 128); border-inline-color: rgb(128, 128, 128); height: 67px; inline-size: 1998px; perspective-origin: 999px 33.5px; transform-origin: 999px 33.5px; width: 1998px">
          <tr style="block-size: 67px; border-block-color: rgb(128, 128, 128); border-color: rgb(128, 128, 128); border-inline-color: rgb(128, 128, 128); height: 67px; inline-size: 1998px; perspective-origin: 999px 33.5px; transform-origin: 999px 33.5px; vertical-align: middle; width: 1998px">
            <td text-align="top" valign="top" align="left" width="65px" height="65px" style="block-size: 65px; height: 65px; inline-size: 65px; perspective-origin: 33.5px 33.5px; text-align: -webkit-left; transform-origin: 33.5px 33.5px; vertical-align: top; width: 65px">
              <a
                aria-label="article image"
                class="image"
                href="https://www.timeslive.co.za/sunday-times/books/news/2024-09-18-shortlist-for-booker-prize-2024-announced/"
                title=""
                style="
                  background-image: url('https://lh3.googleusercontent.com/WaoNHkDhGQzzUc_Z5RUYnwJUyvfCp9a1iTK8z8U7GJtKMRkN4YJpWqi8mIAuBQXEyGaL9uBa5gdFkXog30K9qXYEr4-gzKaw0Dk=s300');
                  background-repeat: no-repeat;
                  background-size: cover;
                  block-size: 65px;
                  border-block-color: rgb(0, 0, 238);
                  border-color: rgb(0, 0, 238);
                  border-inline-color: rgb(0, 0, 238);
                  caret-color: rgb(0, 0, 238);
                  color: rgb(0, 0, 238);
                  column-rule-color: rgb(0, 0, 238);
                  cursor: pointer;
                  display: block;
                  height: 65px;
                  inline-size: 65px;
                  outline-color: rgb(0, 0, 238);
                  perspective-origin: 32.5px 32.5px;
                  text-align: -webkit-left;
                  text-decoration: underline solid rgb(0, 0, 238);
                  text-emphasis-color: rgb(0, 0, 238);
                  transform-origin: 32.5px 32.5px;
                  width: 65px;
                  -webkit-text-decorations-in-effect: underline;
                  -webkit-text-fill-color: rgb(0, 0, 238);
                  -webkit-text-stroke-color: rgb(0, 0, 238);
                "
              ></a>
            </td>
            <td valign="top" style="block-size: 65px; height: 65px; inline-size: 1929px; perspective-origin: 965.5px 33.5px; transform-origin: 965.5px 33.5px; vertical-align: top; width: 1929px">
              <div id="titlesection" style="block-size: 42px; height: 42px; inline-size: 1924px; padding-block-start: 5px; padding-inline-start: 5px; padding-left: 5px; padding-top: 5px; perspective-origin: 964.5px 23.5px; transform-origin: 964.5px 23.5px; width: 1924px">
                <div
                  class="meta"
                  style="
                    block-size: 11px;
                    border-block-color: rgb(195, 14, 61);
                    border-color: rgb(195, 14, 61);
                    border-inline-color: rgb(195, 14, 61);
                    caret-color: rgb(195, 14, 61);
                    color: rgb(195, 14, 61);
                    column-rule-color: rgb(195, 14, 61);
                    font-family: Arial;
                    font-size: 10px;
                    font-weight: 700;
                    height: 11px;
                    inline-size: 1924px;
                    outline-color: rgb(195, 14, 61);
                    padding-block-end: 2px;
                    padding-bottom: 2px;
                    perspective-origin: 962px 6.5px;
                    text-decoration: none solid rgb(195, 14, 61);
                    text-emphasis-color: rgb(195, 14, 61);
                    transform-origin: 962px 6.5px;
                    width: 1924px;
                    -webkit-text-fill-color: rgb(195, 14, 61);
                    -webkit-text-stroke-color: rgb(195, 14, 61);
                  "
                >
                  News
                </div>
                <span class="title" style="font-family: Arial; font-size: 13px; font-weight: 700">
                  <a
                    href="https://www.timeslive.co.za/sunday-times/books/news/2024-09-18-shortlist-for-booker-prize-2024-announced/"
                    style="
                      block-size: 15px;
                      border-block-color: rgb(30, 26, 26);
                      border-color: rgb(30, 26, 26);
                      border-inline-color: rgb(30, 26, 26);
                      caret-color: rgb(30, 26, 26);
                      color: rgb(30, 26, 26);
                      column-rule-color: rgb(30, 26, 26);
                      cursor: pointer;
                      display: inline-block;
                      font-family: Arial;
                      font-size: 13px;
                      font-weight: 700;
                      height: 15px;
                      inline-size: 262.234px;
                      line-height: 15px;
                      outline-color: rgb(30, 26, 26);
                      perspective-origin: 131.109px 7.5px;
                      text-decoration: none solid rgb(30, 26, 26);
                      text-emphasis-color: rgb(30, 26, 26);
                      transform-origin: 131.117px 7.5px;
                      width: 262.234px;
                      -webkit-text-fill-color: rgb(30, 26, 26);
                      -webkit-text-stroke-color: rgb(30, 26, 26);
                    "
                  >
                    Shortlist for Booker Prize 2024 announced
                  </a>
                </span>
                <div class="date-stamp" style="block-size: 11px; font-family: Arial; font-size: 10px; height: 11px; inline-size: 1924px; perspective-origin: 962px 5.5px; transform-origin: 962px 5.5px; width: 1924px">2 weeks ago</div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <div class="article sunday-times" style="background-color: rgb(255, 255, 255); block-size: 67px; height: 67px; inline-size: 1998px; margin-block-end: 5px; margin-bottom: 5px; perspective-origin: 999px 33.5px; transform-origin: 999px 33.5px; width: 1998px">
    <div class="row" style="block-size: 67px; height: 67px; inline-size: 1998px; perspective-origin: 999px 33.5px; transform-origin: 999px 33.5px; width: 1998px">
      <table style="block-size: 67px; height: 67px; inline-size: 1998px; perspective-origin: 999px 33.5px; transform-origin: 999px 33.5px; width: 1998px">
        <tbody style="block-size: 67px; border-block-color: rgb(128, 128, 128); border-color: rgb(128, 128, 128); border-inline-color: rgb(128, 128, 128); height: 67px; inline-size: 1998px; perspective-origin: 999px 33.5px; transform-origin: 999px 33.5px; width: 1998px">
          <tr style="block-size: 67px; border-block-color: rgb(128, 128, 128); border-color: rgb(128, 128, 128); border-inline-color: rgb(128, 128, 128); height: 67px; inline-size: 1998px; perspective-origin: 999px 33.5px; transform-origin: 999px 33.5px; vertical-align: middle; width: 1998px">
            <td text-align="top" valign="top" align="left" width="65px" height="65px" style="block-size: 65px; height: 65px; inline-size: 65px; perspective-origin: 33.5px 33.5px; text-align: -webkit-left; transform-origin: 33.5px 33.5px; vertical-align: top; width: 65px">
              <a
                aria-label="article image"
                class="image"
                href="https://www.timeslive.co.za/sunday-times/books/events/2024-09-18-abdulrazak-gurnah-to-deliver-22nd-nelson-mandela-annual-lecture/"
                title=""
                style="
                  background-image: url('https://lh3.googleusercontent.com/yicgFJEp_szQJSz4ix9rl9Qb7hqq_VsVcMBEggYwadin0LO0aIYytO4gZk6HwmcHPou8GMJ8HJhw2jn8jLWPko2eN1NTTivfuZ68=s300');
                  background-repeat: no-repeat;
                  background-size: cover;
                  block-size: 65px;
                  border-block-color: rgb(0, 0, 238);
                  border-color: rgb(0, 0, 238);
                  border-inline-color: rgb(0, 0, 238);
                  caret-color: rgb(0, 0, 238);
                  color: rgb(0, 0, 238);
                  column-rule-color: rgb(0, 0, 238);
                  cursor: pointer;
                  display: block;
                  height: 65px;
                  inline-size: 65px;
                  outline-color: rgb(0, 0, 238);
                  perspective-origin: 32.5px 32.5px;
                  text-align: -webkit-left;
                  text-decoration: underline solid rgb(0, 0, 238);
                  text-emphasis-color: rgb(0, 0, 238);
                  transform-origin: 32.5px 32.5px;
                  width: 65px;
                  -webkit-text-decorations-in-effect: underline;
                  -webkit-text-fill-color: rgb(0, 0, 238);
                  -webkit-text-stroke-color: rgb(0, 0, 238);
                "
              ></a>
            </td>
            <td valign="top" style="block-size: 65px; height: 65px; inline-size: 1929px; perspective-origin: 965.5px 33.5px; transform-origin: 965.5px 33.5px; vertical-align: top; width: 1929px">
              <div id="titlesection" style="block-size: 42px; height: 42px; inline-size: 1924px; padding-block-start: 5px; padding-inline-start: 5px; padding-left: 5px; padding-top: 5px; perspective-origin: 964.5px 23.5px; transform-origin: 964.5px 23.5px; width: 1924px">
                <div
                  class="meta"
                  style="
                    block-size: 11px;
                    border-block-color: rgb(195, 14, 61);
                    border-color: rgb(195, 14, 61);
                    border-inline-color: rgb(195, 14, 61);
                    caret-color: rgb(195, 14, 61);
                    color: rgb(195, 14, 61);
                    column-rule-color: rgb(195, 14, 61);
                    font-family: Arial;
                    font-size: 10px;
                    font-weight: 700;
                    height: 11px;
                    inline-size: 1924px;
                    outline-color: rgb(195, 14, 61);
                    padding-block-end: 2px;
                    padding-bottom: 2px;
                    perspective-origin: 962px 6.5px;
                    text-decoration: none solid rgb(195, 14, 61);
                    text-emphasis-color: rgb(195, 14, 61);
                    transform-origin: 962px 6.5px;
                    width: 1924px;
                    -webkit-text-fill-color: rgb(195, 14, 61);
                    -webkit-text-stroke-color: rgb(195, 14, 61);
                  "
                >
                  Events
                </div>
                <span class="title" style="font-family: Arial; font-size: 13px; font-weight: 700">
                  <a
                    href="https://www.timeslive.co.za/sunday-times/books/events/2024-09-18-abdulrazak-gurnah-to-deliver-22nd-nelson-mandela-annual-lecture/"
                    style="
                      block-size: 15px;
                      border-block-color: rgb(30, 26, 26);
                      border-color: rgb(30, 26, 26);
                      border-inline-color: rgb(30, 26, 26);
                      caret-color: rgb(30, 26, 26);
                      color: rgb(30, 26, 26);
                      column-rule-color: rgb(30, 26, 26);
                      cursor: pointer;
                      display: inline-block;
                      font-family: Arial;
                      font-size: 13px;
                      font-weight: 700;
                      height: 15px;
                      inline-size: 415.609px;
                      line-height: 15px;
                      outline-color: rgb(30, 26, 26);
                      perspective-origin: 207.797px 7.5px;
                      text-decoration: none solid rgb(30, 26, 26);
                      text-emphasis-color: rgb(30, 26, 26);
                      transform-origin: 207.805px 7.5px;
                      width: 415.609px;
                      -webkit-text-fill-color: rgb(30, 26, 26);
                      -webkit-text-stroke-color: rgb(30, 26, 26);
                    "
                  >
                    Abdulrazak Gurnah to deliver 22nd Nelson Mandela Annual Lecture
                  </a>
                </span>
                <div class="date-stamp" style="block-size: 11px; font-family: Arial; font-size: 10px; height: 11px; inline-size: 1924px; perspective-origin: 962px 5.5px; transform-origin: 962px 5.5px; width: 1924px">2 weeks ago</div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <div class="article sunday-times" style="background-color: rgb(255, 255, 255); block-size: 67px; height: 67px; inline-size: 1998px; margin-block-end: 5px; margin-bottom: 5px; perspective-origin: 999px 33.5px; transform-origin: 999px 33.5px; width: 1998px">
    <div class="row" style="block-size: 67px; height: 67px; inline-size: 1998px; perspective-origin: 999px 33.5px; transform-origin: 999px 33.5px; width: 1998px">
      <table style="block-size: 67px; height: 67px; inline-size: 1998px; perspective-origin: 999px 33.5px; transform-origin: 999px 33.5px; width: 1998px">
        <tbody style="block-size: 67px; border-block-color: rgb(128, 128, 128); border-color: rgb(128, 128, 128); border-inline-color: rgb(128, 128, 128); height: 67px; inline-size: 1998px; perspective-origin: 999px 33.5px; transform-origin: 999px 33.5px; width: 1998px">
          <tr style="block-size: 67px; border-block-color: rgb(128, 128, 128); border-color: rgb(128, 128, 128); border-inline-color: rgb(128, 128, 128); height: 67px; inline-size: 1998px; perspective-origin: 999px 33.5px; transform-origin: 999px 33.5px; vertical-align: middle; width: 1998px">
            <td text-align="top" valign="top" align="left" width="65px" height="65px" style="block-size: 65px; height: 65px; inline-size: 65px; perspective-origin: 33.5px 33.5px; text-align: -webkit-left; transform-origin: 33.5px 33.5px; vertical-align: top; width: 65px">
              <a
                aria-label="article image"
                class="image"
                href="https://www.timeslive.co.za/sunday-times/opinion-and-analysis/insight/2024-09-22-voices-in-the-discordant-discourse/"
                title=""
                style="
                  background-image: url('https://lh3.googleusercontent.com/K66lc1lwGsubJD8GsVwn0ZnwjGX0t1ids_SWEfO3QPUEFZWsalRYDvFeTYqxAFwI5KjViN9XOt5QPvyM86GZy6CYep-H1zL8sl2AKNfFSQAp=s300');
                  background-repeat: no-repeat;
                  background-size: cover;
                  block-size: 65px;
                  border-block-color: rgb(0, 0, 238);
                  border-color: rgb(0, 0, 238);
                  border-inline-color: rgb(0, 0, 238);
                  caret-color: rgb(0, 0, 238);
                  color: rgb(0, 0, 238);
                  column-rule-color: rgb(0, 0, 238);
                  cursor: pointer;
                  display: block;
                  height: 65px;
                  inline-size: 65px;
                  outline-color: rgb(0, 0, 238);
                  perspective-origin: 32.5px 32.5px;
                  text-align: -webkit-left;
                  text-decoration: underline solid rgb(0, 0, 238);
                  text-emphasis-color: rgb(0, 0, 238);
                  transform-origin: 32.5px 32.5px;
                  width: 65px;
                  -webkit-text-decorations-in-effect: underline;
                  -webkit-text-fill-color: rgb(0, 0, 238);
                  -webkit-text-stroke-color: rgb(0, 0, 238);
                "
              ></a>
            </td>
            <td valign="top" style="block-size: 65px; height: 65px; inline-size: 1929px; perspective-origin: 965.5px 33.5px; transform-origin: 965.5px 33.5px; vertical-align: top; width: 1929px">
              <div id="titlesection" style="block-size: 42px; height: 42px; inline-size: 1924px; padding-block-start: 5px; padding-inline-start: 5px; padding-left: 5px; padding-top: 5px; perspective-origin: 964.5px 23.5px; transform-origin: 964.5px 23.5px; width: 1924px">
                <div
                  class="meta"
                  style="
                    block-size: 11px;
                    border-block-color: rgb(195, 14, 61);
                    border-color: rgb(195, 14, 61);
                    border-inline-color: rgb(195, 14, 61);
                    caret-color: rgb(195, 14, 61);
                    color: rgb(195, 14, 61);
                    column-rule-color: rgb(195, 14, 61);
                    font-family: Arial;
                    font-size: 10px;
                    font-weight: 700;
                    height: 11px;
                    inline-size: 1924px;
                    outline-color: rgb(195, 14, 61);
                    padding-block-end: 2px;
                    padding-bottom: 2px;
                    perspective-origin: 962px 6.5px;
                    text-decoration: none solid rgb(195, 14, 61);
                    text-emphasis-color: rgb(195, 14, 61);
                    transform-origin: 962px 6.5px;
                    width: 1924px;
                    -webkit-text-fill-color: rgb(195, 14, 61);
                    -webkit-text-stroke-color: rgb(195, 14, 61);
                  "
                >
                  Insight
                </div>
                <span class="title" style="font-family: Arial; font-size: 13px; font-weight: 700">
                  <a
                    href="https://www.timeslive.co.za/sunday-times/opinion-and-analysis/insight/2024-09-22-voices-in-the-discordant-discourse/"
                    style="
                      block-size: 15px;
                      border-block-color: rgb(30, 26, 26);
                      border-color: rgb(30, 26, 26);
                      border-inline-color: rgb(30, 26, 26);
                      caret-color: rgb(30, 26, 26);
                      color: rgb(30, 26, 26);
                      column-rule-color: rgb(30, 26, 26);
                      cursor: pointer;
                      display: inline-block;
                      font-family: Arial;
                      font-size: 13px;
                      font-weight: 700;
                      height: 15px;
                      inline-size: 214.328px;
                      line-height: 15px;
                      outline-color: rgb(30, 26, 26);
                      perspective-origin: 107.156px 7.5px;
                      text-decoration: none solid rgb(30, 26, 26);
                      text-emphasis-color: rgb(30, 26, 26);
                      transform-origin: 107.164px 7.5px;
                      width: 214.328px;
                      -webkit-text-fill-color: rgb(30, 26, 26);
                      -webkit-text-stroke-color: rgb(30, 26, 26);
                    "
                  >
                    Voices in the discordant discourse
                  </a>
                </span>
                <div class="date-stamp" style="block-size: 11px; font-family: Arial; font-size: 10px; height: 11px; inline-size: 1924px; perspective-origin: 962px 5.5px; transform-origin: 962px 5.5px; width: 1924px">2 weeks ago</div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <div class="article sunday-times" style="background-color: rgb(255, 255, 255); block-size: 67px; height: 67px; inline-size: 1998px; margin-block-end: 5px; margin-bottom: 5px; perspective-origin: 999px 33.5px; transform-origin: 999px 33.5px; width: 1998px">
    <div class="row" style="block-size: 67px; height: 67px; inline-size: 1998px; perspective-origin: 999px 33.5px; transform-origin: 999px 33.5px; width: 1998px">
      <table style="block-size: 67px; height: 67px; inline-size: 1998px; perspective-origin: 999px 33.5px; transform-origin: 999px 33.5px; width: 1998px">
        <tbody style="block-size: 67px; border-block-color: rgb(128, 128, 128); border-color: rgb(128, 128, 128); border-inline-color: rgb(128, 128, 128); height: 67px; inline-size: 1998px; perspective-origin: 999px 33.5px; transform-origin: 999px 33.5px; width: 1998px">
          <tr style="block-size: 67px; border-block-color: rgb(128, 128, 128); border-color: rgb(128, 128, 128); border-inline-color: rgb(128, 128, 128); height: 67px; inline-size: 1998px; perspective-origin: 999px 33.5px; transform-origin: 999px 33.5px; vertical-align: middle; width: 1998px">
            <td text-align="top" valign="top" align="left" width="65px" height="65px" style="block-size: 65px; height: 65px; inline-size: 65px; perspective-origin: 33.5px 33.5px; text-align: -webkit-left; transform-origin: 33.5px 33.5px; vertical-align: top; width: 65px">
              <a
                aria-label="article image"
                class="image"
                href="https://www.timeslive.co.za/sunday-times/books/events/2024-09-18-joburg-launch-of-nomad-heart-by-ian-roberts-september-25/"
                title="Nomad Heart:"
                style="
                  background-image: url('https://lh3.googleusercontent.com/VC0dldn6XQRQ7xEFg_KYvlDmucEOt77VKrQSVGvZ22ELA4SK_4GncV8IbWVe4vrSjOJMiwWrnUMyqo0lGCK8ebl-JAelEmiyn8UR=s300');
                  background-repeat: no-repeat;
                  background-size: cover;
                  block-size: 65px;
                  border-block-color: rgb(0, 0, 238);
                  border-color: rgb(0, 0, 238);
                  border-inline-color: rgb(0, 0, 238);
                  caret-color: rgb(0, 0, 238);
                  color: rgb(0, 0, 238);
                  column-rule-color: rgb(0, 0, 238);
                  cursor: pointer;
                  display: block;
                  height: 65px;
                  inline-size: 65px;
                  outline-color: rgb(0, 0, 238);
                  perspective-origin: 32.5px 32.5px;
                  text-align: -webkit-left;
                  text-decoration: underline solid rgb(0, 0, 238);
                  text-emphasis-color: rgb(0, 0, 238);
                  transform-origin: 32.5px 32.5px;
                  width: 65px;
                  -webkit-text-decorations-in-effect: underline;
                  -webkit-text-fill-color: rgb(0, 0, 238);
                  -webkit-text-stroke-color: rgb(0, 0, 238);
                "
              ></a>
            </td>
            <td valign="top" style="block-size: 65px; height: 65px; inline-size: 1929px; perspective-origin: 965.5px 33.5px; transform-origin: 965.5px 33.5px; vertical-align: top; width: 1929px">
              <div id="titlesection" style="block-size: 42px; height: 42px; inline-size: 1924px; padding-block-start: 5px; padding-inline-start: 5px; padding-left: 5px; padding-top: 5px; perspective-origin: 964.5px 23.5px; transform-origin: 964.5px 23.5px; width: 1924px">
                <div
                  class="meta"
                  style="
                    block-size: 11px;
                    border-block-color: rgb(195, 14, 61);
                    border-color: rgb(195, 14, 61);
                    border-inline-color: rgb(195, 14, 61);
                    caret-color: rgb(195, 14, 61);
                    color: rgb(195, 14, 61);
                    column-rule-color: rgb(195, 14, 61);
                    font-family: Arial;
                    font-size: 10px;
                    font-weight: 700;
                    height: 11px;
                    inline-size: 1924px;
                    outline-color: rgb(195, 14, 61);
                    padding-block-end: 2px;
                    padding-bottom: 2px;
                    perspective-origin: 962px 6.5px;
                    text-decoration: none solid rgb(195, 14, 61);
                    text-emphasis-color: rgb(195, 14, 61);
                    transform-origin: 962px 6.5px;
                    width: 1924px;
                    -webkit-text-fill-color: rgb(195, 14, 61);
                    -webkit-text-stroke-color: rgb(195, 14, 61);
                  "
                >
                  Events
                </div>
                <span class="title" style="font-family: Arial; font-size: 13px; font-weight: 700">
                  <a
                    href="https://www.timeslive.co.za/sunday-times/books/events/2024-09-18-joburg-launch-of-nomad-heart-by-ian-roberts-september-25/"
                    style="
                      block-size: 15px;
                      border-block-color: rgb(30, 26, 26);
                      border-color: rgb(30, 26, 26);
                      border-inline-color: rgb(30, 26, 26);
                      caret-color: rgb(30, 26, 26);
                      color: rgb(30, 26, 26);
                      column-rule-color: rgb(30, 26, 26);
                      cursor: pointer;
                      display: inline-block;
                      font-family: Arial;
                      font-size: 13px;
                      font-weight: 700;
                      height: 15px;
                      inline-size: 387.906px;
                      line-height: 15px;
                      outline-color: rgb(30, 26, 26);
                      perspective-origin: 193.953px 7.5px;
                      text-decoration: none solid rgb(30, 26, 26);
                      text-emphasis-color: rgb(30, 26, 26);
                      transform-origin: 193.953px 7.5px;
                      width: 387.906px;
                      -webkit-text-fill-color: rgb(30, 26, 26);
                      -webkit-text-stroke-color: rgb(30, 26, 26);
                    "
                  >
                    Joburg launch of ‘Nomad Heart’ by Ian Roberts (September 25)
                  </a>
                </span>
                <div class="date-stamp" style="block-size: 11px; font-family: Arial; font-size: 10px; height: 11px; inline-size: 1924px; perspective-origin: 962px 5.5px; transform-origin: 962px 5.5px; width: 1924px">2 weeks ago</div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <div class="article sunday-times" style="background-color: rgb(255, 255, 255); block-size: 67px; height: 67px; inline-size: 1998px; margin-block-end: 5px; margin-bottom: 5px; perspective-origin: 999px 33.5px; transform-origin: 999px 33.5px; width: 1998px">
    <div class="row" style="block-size: 67px; height: 67px; inline-size: 1998px; perspective-origin: 999px 33.5px; transform-origin: 999px 33.5px; width: 1998px">
      <table style="block-size: 67px; height: 67px; inline-size: 1998px; perspective-origin: 999px 33.5px; transform-origin: 999px 33.5px; width: 1998px">
        <tbody style="block-size: 67px; border-block-color: rgb(128, 128, 128); border-color: rgb(128, 128, 128); border-inline-color: rgb(128, 128, 128); height: 67px; inline-size: 1998px; perspective-origin: 999px 33.5px; transform-origin: 999px 33.5px; width: 1998px">
          <tr style="block-size: 67px; border-block-color: rgb(128, 128, 128); border-color: rgb(128, 128, 128); border-inline-color: rgb(128, 128, 128); height: 67px; inline-size: 1998px; perspective-origin: 999px 33.5px; transform-origin: 999px 33.5px; vertical-align: middle; width: 1998px">
            <td text-align="top" valign="top" align="left" width="65px" height="65px" style="block-size: 65px; height: 65px; inline-size: 65px; perspective-origin: 33.5px 33.5px; text-align: -webkit-left; transform-origin: 33.5px 33.5px; vertical-align: top; width: 65px">
              <a
                aria-label="article image"
                class="image"
                href="https://www.timeslive.co.za/sunday-times/books/non-fiction/2024-09-17-extract-smashing-the-patriarchy-by-lethabo-maleka/"
                title=""
                style="
                  background-image: url('https://lh3.googleusercontent.com/jD0_vIL-dr4phs04QOXMUeouV3r_zydpJMDZ8zqGlgv73QBaTctzPutVoibt4u-PZ3iWObQlA7ZS0sWozQj_2bQjWTzmyXuQCw=s300');
                  background-repeat: no-repeat;
                  background-size: cover;
                  block-size: 65px;
                  border-block-color: rgb(0, 0, 238);
                  border-color: rgb(0, 0, 238);
                  border-inline-color: rgb(0, 0, 238);
                  caret-color: rgb(0, 0, 238);
                  color: rgb(0, 0, 238);
                  column-rule-color: rgb(0, 0, 238);
                  cursor: pointer;
                  display: block;
                  height: 65px;
                  inline-size: 65px;
                  outline-color: rgb(0, 0, 238);
                  perspective-origin: 32.5px 32.5px;
                  text-align: -webkit-left;
                  text-decoration: underline solid rgb(0, 0, 238);
                  text-emphasis-color: rgb(0, 0, 238);
                  transform-origin: 32.5px 32.5px;
                  width: 65px;
                  -webkit-text-decorations-in-effect: underline;
                  -webkit-text-fill-color: rgb(0, 0, 238);
                  -webkit-text-stroke-color: rgb(0, 0, 238);
                "
              ></a>
            </td>
            <td valign="top" style="block-size: 65px; height: 65px; inline-size: 1929px; perspective-origin: 965.5px 33.5px; transform-origin: 965.5px 33.5px; vertical-align: top; width: 1929px">
              <div id="titlesection" style="block-size: 42px; height: 42px; inline-size: 1924px; padding-block-start: 5px; padding-inline-start: 5px; padding-left: 5px; padding-top: 5px; perspective-origin: 964.5px 23.5px; transform-origin: 964.5px 23.5px; width: 1924px">
                <div
                  class="meta"
                  style="
                    block-size: 11px;
                    border-block-color: rgb(195, 14, 61);
                    border-color: rgb(195, 14, 61);
                    border-inline-color: rgb(195, 14, 61);
                    caret-color: rgb(195, 14, 61);
                    color: rgb(195, 14, 61);
                    column-rule-color: rgb(195, 14, 61);
                    font-family: Arial;
                    font-size: 10px;
                    font-weight: 700;
                    height: 11px;
                    inline-size: 1924px;
                    outline-color: rgb(195, 14, 61);
                    padding-block-end: 2px;
                    padding-bottom: 2px;
                    perspective-origin: 962px 6.5px;
                    text-decoration: none solid rgb(195, 14, 61);
                    text-emphasis-color: rgb(195, 14, 61);
                    transform-origin: 962px 6.5px;
                    width: 1924px;
                    -webkit-text-fill-color: rgb(195, 14, 61);
                    -webkit-text-stroke-color: rgb(195, 14, 61);
                  "
                >
                  Non-Fiction
                </div>
                <span class="title" style="font-family: Arial; font-size: 13px; font-weight: 700">
                  <a
                    href="https://www.timeslive.co.za/sunday-times/books/non-fiction/2024-09-17-extract-smashing-the-patriarchy-by-lethabo-maleka/"
                    style="
                      block-size: 15px;
                      border-block-color: rgb(30, 26, 26);
                      border-color: rgb(30, 26, 26);
                      border-inline-color: rgb(30, 26, 26);
                      caret-color: rgb(30, 26, 26);
                      color: rgb(30, 26, 26);
                      column-rule-color: rgb(30, 26, 26);
                      cursor: pointer;
                      display: inline-block;
                      font-family: Arial;
                      font-size: 13px;
                      font-weight: 700;
                      height: 15px;
                      inline-size: 351.125px;
                      line-height: 15px;
                      outline-color: rgb(30, 26, 26);
                      perspective-origin: 175.562px 7.5px;
                      text-decoration: none solid rgb(30, 26, 26);
                      text-emphasis-color: rgb(30, 26, 26);
                      transform-origin: 175.562px 7.5px;
                      width: 351.125px;
                      -webkit-text-fill-color: rgb(30, 26, 26);
                      -webkit-text-stroke-color: rgb(30, 26, 26);
                    "
                  >
                    EXTRACT | ‘Smashing the Patriarchy’ by Lethabo Maleka
                  </a>
                </span>
                <div class="date-stamp" style="block-size: 11px; font-family: Arial; font-size: 10px; height: 11px; inline-size: 1924px; perspective-origin: 962px 5.5px; transform-origin: 962px 5.5px; width: 1924px">2 weeks ago</div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <div class="article sunday-times" style="background-color: rgb(255, 255, 255); block-size: 67px; height: 67px; inline-size: 1998px; margin-block-end: 5px; margin-bottom: 5px; perspective-origin: 999px 33.5px; transform-origin: 999px 33.5px; width: 1998px">
    <div class="row" style="block-size: 67px; height: 67px; inline-size: 1998px; perspective-origin: 999px 33.5px; transform-origin: 999px 33.5px; width: 1998px">
      <table style="block-size: 67px; height: 67px; inline-size: 1998px; perspective-origin: 999px 33.5px; transform-origin: 999px 33.5px; width: 1998px">
        <tbody style="block-size: 67px; border-block-color: rgb(128, 128, 128); border-color: rgb(128, 128, 128); border-inline-color: rgb(128, 128, 128); height: 67px; inline-size: 1998px; perspective-origin: 999px 33.5px; transform-origin: 999px 33.5px; width: 1998px">
          <tr style="block-size: 67px; border-block-color: rgb(128, 128, 128); border-color: rgb(128, 128, 128); border-inline-color: rgb(128, 128, 128); height: 67px; inline-size: 1998px; perspective-origin: 999px 33.5px; transform-origin: 999px 33.5px; vertical-align: middle; width: 1998px">
            <td text-align="top" valign="top" align="left" width="65px" height="65px" style="block-size: 65px; height: 65px; inline-size: 65px; perspective-origin: 33.5px 33.5px; text-align: -webkit-left; transform-origin: 33.5px 33.5px; vertical-align: top; width: 65px">
              <a
                aria-label="article image"
                class="image"
                href="https://www.timeslive.co.za/sunday-times/books/news/2024-09-17-story-time-book-dash-shares-five-new-books-to-get-kids-reading/"
                title=""
                style="
                  background-image: url('https://lh3.googleusercontent.com/fY5qooVGsAADGbT6txflsF7QJOV_1ya7f1rR6rwkDIXXLsRZ-8nXLhDRcFyHhNYtZpRGlHH7UDBKZ3KEgggFaqLqkMgeIE1c=s300');
                  background-repeat: no-repeat;
                  background-size: cover;
                  block-size: 65px;
                  border-block-color: rgb(0, 0, 238);
                  border-color: rgb(0, 0, 238);
                  border-inline-color: rgb(0, 0, 238);
                  caret-color: rgb(0, 0, 238);
                  color: rgb(0, 0, 238);
                  column-rule-color: rgb(0, 0, 238);
                  cursor: pointer;
                  display: block;
                  height: 65px;
                  inline-size: 65px;
                  outline-color: rgb(0, 0, 238);
                  perspective-origin: 32.5px 32.5px;
                  text-align: -webkit-left;
                  text-decoration: underline solid rgb(0, 0, 238);
                  text-emphasis-color: rgb(0, 0, 238);
                  transform-origin: 32.5px 32.5px;
                  width: 65px;
                  -webkit-text-decorations-in-effect: underline;
                  -webkit-text-fill-color: rgb(0, 0, 238);
                  -webkit-text-stroke-color: rgb(0, 0, 238);
                "
              ></a>
            </td>
            <td valign="top" style="block-size: 65px; height: 65px; inline-size: 1929px; perspective-origin: 965.5px 33.5px; transform-origin: 965.5px 33.5px; vertical-align: top; width: 1929px">
              <div id="titlesection" style="block-size: 42px; height: 42px; inline-size: 1924px; padding-block-start: 5px; padding-inline-start: 5px; padding-left: 5px; padding-top: 5px; perspective-origin: 964.5px 23.5px; transform-origin: 964.5px 23.5px; width: 1924px">
                <div
                  class="meta"
                  style="
                    block-size: 11px;
                    border-block-color: rgb(195, 14, 61);
                    border-color: rgb(195, 14, 61);
                    border-inline-color: rgb(195, 14, 61);
                    caret-color: rgb(195, 14, 61);
                    color: rgb(195, 14, 61);
                    column-rule-color: rgb(195, 14, 61);
                    font-family: Arial;
                    font-size: 10px;
                    font-weight: 700;
                    height: 11px;
                    inline-size: 1924px;
                    outline-color: rgb(195, 14, 61);
                    padding-block-end: 2px;
                    padding-bottom: 2px;
                    perspective-origin: 962px 6.5px;
                    text-decoration: none solid rgb(195, 14, 61);
                    text-emphasis-color: rgb(195, 14, 61);
                    transform-origin: 962px 6.5px;
                    width: 1924px;
                    -webkit-text-fill-color: rgb(195, 14, 61);
                    -webkit-text-stroke-color: rgb(195, 14, 61);
                  "
                >
                  News
                </div>
                <span class="title" style="font-family: Arial; font-size: 13px; font-weight: 700">
                  <a
                    href="https://www.timeslive.co.za/sunday-times/books/news/2024-09-17-story-time-book-dash-shares-five-new-books-to-get-kids-reading/"
                    style="
                      block-size: 15px;
                      border-block-color: rgb(30, 26, 26);
                      border-color: rgb(30, 26, 26);
                      border-inline-color: rgb(30, 26, 26);
                      caret-color: rgb(30, 26, 26);
                      color: rgb(30, 26, 26);
                      column-rule-color: rgb(30, 26, 26);
                      cursor: pointer;
                      display: inline-block;
                      font-family: Arial;
                      font-size: 13px;
                      font-weight: 700;
                      height: 15px;
                      inline-size: 400.938px;
                      line-height: 15px;
                      outline-color: rgb(30, 26, 26);
                      perspective-origin: 200.469px 7.5px;
                      text-decoration: none solid rgb(30, 26, 26);
                      text-emphasis-color: rgb(30, 26, 26);
                      transform-origin: 200.469px 7.5px;
                      width: 400.938px;
                      -webkit-text-fill-color: rgb(30, 26, 26);
                      -webkit-text-stroke-color: rgb(30, 26, 26);
                    "
                  >
                    Story time: Book Dash shares five new books to get kids reading
                  </a>
                </span>
                <div class="date-stamp" style="block-size: 11px; font-family: Arial; font-size: 10px; height: 11px; inline-size: 1924px; perspective-origin: 962px 5.5px; transform-origin: 962px 5.5px; width: 1924px">2 weeks ago</div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <table class="pagination" style="block-size: 20px; height: 20px; inline-size: 1998px; margin-block: 20px 10px; margin-bottom: 10px; margin-top: 20px; perspective-origin: 999px 10px; transform-origin: 999px 10px; width: 1998px">
    <tbody style="block-size: 20px; border-block-color: rgb(128, 128, 128); border-color: rgb(128, 128, 128); border-inline-color: rgb(128, 128, 128); height: 20px; inline-size: 1998px; perspective-origin: 999px 10px; transform-origin: 999px 10px; width: 1998px">
      <tr align="center" style="block-size: 20px; border-block-color: rgb(128, 128, 128); border-color: rgb(128, 128, 128); border-inline-color: rgb(128, 128, 128); height: 20px; inline-size: 1998px; perspective-origin: 999px 10px; text-align: -webkit-center; transform-origin: 999px 10px; vertical-align: middle; width: 1998px">
        <td style="block-size: 18px; height: 18px; inline-size: 1996px; perspective-origin: 999px 10px; text-align: -webkit-center; transform-origin: 999px 10px; vertical-align: middle; width: 1996px">
          <a
            href="?page=2"
            style="
              border-block: 1px solid rgb(30, 26, 26);
              border-color: rgb(30, 26, 26);
              border-style: solid;
              border-width: 1px;
              border-inline: 1px solid rgb(30, 26, 26);
              caret-color: rgb(30, 26, 26);
              color: rgb(30, 26, 26);
              column-rule-color: rgb(30, 26, 26);
              cursor: pointer;
              font-family: Arial;
              outline-color: rgb(30, 26, 26);
              padding-block: 5px;
              padding: 5px 15px;
              padding-inline: 15px;
              text-align: -webkit-center;
              text-decoration: none solid rgb(30, 26, 26);
              text-emphasis-color: rgb(30, 26, 26);
              -webkit-text-fill-color: rgb(30, 26, 26);
              -webkit-text-stroke-color: rgb(30, 26, 26);
            "
            >Load More</a
          >
        </td>
      </tr>
    </tbody>
  </table>
</div>
<style></style>` },
  { filename: "footer amazon", content: `<div class="navFooterLine navFooterLinkLine navFooterDescLine" role="navigation" aria-label="More on Amazon.com" style="background-color: rgb(19, 26, 34); block-size: 466.469px; border-block-color: rgb(221, 221, 221); border-color: rgb(221, 221, 221); border-inline-color: rgb(221, 221, 221); caret-color: rgb(221, 221, 221); color: rgb(221, 221, 221); column-rule-color: rgb(221, 221, 221); font-size: 12px; height: 466.469px; line-height: 18px; margin-block-start: 30px; margin-top: 30px; outline-color: rgb(221, 221, 221); padding-block: 30px; padding-bottom: 30px; padding-top: 30px; perspective-origin: 1007px 233.234px; text-align: center; text-decoration: none solid rgb(221, 221, 221); text-emphasis-color: rgb(221, 221, 221); text-wrap-mode: nowrap; transform-origin: 1007px 233.234px; -webkit-text-fill-color: rgb(221, 221, 221); -webkit-text-stroke-color: rgb(221, 221, 221);"><table class="navFooterMoreOnAmazon" cellspacing="0" style="block-size: 406.469px; caret-color: rgb(221, 221, 221); color: rgb(221, 221, 221); column-rule-color: rgb(221, 221, 221); font-size: 12px; height: 406.469px; inline-size: 1000px; line-height: 18px; margin-inline: 507px; margin-left: 507px; margin-right: 507px; max-inline-size: 1000px; max-width: 1000px; outline-color: rgb(221, 221, 221); perspective-origin: 500px 203.234px; text-align: center; text-decoration: none solid rgb(221, 221, 221); text-emphasis-color: rgb(221, 221, 221); text-wrap-mode: nowrap; transform-origin: 500px 203.234px; width: 1000px; border-spacing: 0px; -webkit-text-fill-color: rgb(221, 221, 221); -webkit-text-stroke-color: rgb(221, 221, 221);"><tbody style="block-size: 406.469px; border-block-color: rgb(128, 128, 128); border-color: rgb(128, 128, 128); border-collapse: collapse; border-inline-color: rgb(128, 128, 128); caret-color: rgb(221, 221, 221); color: rgb(221, 221, 221); column-rule-color: rgb(221, 221, 221); font-size: 12px; height: 406.469px; inline-size: 1000px; line-height: 18px; outline-color: rgb(221, 221, 221); perspective-origin: 500px 203.234px; text-align: center; text-decoration: none solid rgb(221, 221, 221); text-emphasis-color: rgb(221, 221, 221); text-wrap-mode: nowrap; transform-origin: 500px 203.234px; width: 1000px; -webkit-text-fill-color: rgb(221, 221, 221); -webkit-text-stroke-color: rgb(221, 221, 221);"><tr style="block-size: 46.3125px; border-block-color: rgb(128, 128, 128); border-color: rgb(128, 128, 128); border-collapse: collapse; border-inline-color: rgb(128, 128, 128); caret-color: rgb(221, 221, 221); color: rgb(221, 221, 221); column-rule-color: rgb(221, 221, 221); font-size: 12px; height: 46.3125px; inline-size: 1000px; line-height: 18px; outline-color: rgb(221, 221, 221); perspective-origin: 500px 23.1562px; text-align: center; text-decoration: none solid rgb(221, 221, 221); text-emphasis-color: rgb(221, 221, 221); text-wrap-mode: nowrap; transform-origin: 500px 23.1562px; vertical-align: middle; width: 1000px; -webkit-text-fill-color: rgb(221, 221, 221); -webkit-text-stroke-color: rgb(221, 221, 221);">
    <td class="navFooterDescItem" style="block-size: 46.3125px; border-block-color: rgb(221, 221, 221); border-color: rgb(221, 221, 221); border-collapse: collapse; border-inline-color: rgb(221, 221, 221); caret-color: rgb(221, 221, 221); color: rgb(221, 221, 221); column-rule-color: rgb(221, 221, 221); font-size: 11px; height: 46.3125px; inline-size: 113.297px; line-height: 12.65px; outline-color: rgb(221, 221, 221); padding-block: 0px; padding: 0px 8.25px; padding-inline: 8.25px; perspective-origin: 56.6406px 23.1562px; text-align: left; text-decoration: none solid rgb(221, 221, 221); text-emphasis-color: rgb(221, 221, 221); text-wrap-mode: nowrap; transform-origin: 56.6484px 23.1562px; width: 113.297px; -webkit-text-fill-color: rgb(221, 221, 221); -webkit-text-stroke-color: rgb(221, 221, 221);"><a href="https://music.amazon.com/?ref=dm_aff_amz_com" class="nav_a" style="border-block-color: rgb(221, 221, 221); border-color: rgb(221, 221, 221); border-collapse: collapse; border-inline-color: rgb(221, 221, 221); caret-color: rgb(221, 221, 221); color: rgb(221, 221, 221); column-rule-color: rgb(221, 221, 221); cursor: pointer; font-size: 11px; line-height: 12.65px; outline-color: rgb(221, 221, 221); text-align: left; text-decoration: none solid rgb(221, 221, 221); text-emphasis-color: rgb(221, 221, 221); -webkit-text-fill-color: rgb(221, 221, 221); -webkit-text-stroke-color: rgb(221, 221, 221);">Amazon Music<br style="border-block-color: rgb(221, 221, 221); border-color: rgb(221, 221, 221); border-collapse: collapse; border-inline-color: rgb(221, 221, 221); caret-color: rgb(221, 221, 221); color: rgb(221, 221, 221); column-rule-color: rgb(221, 221, 221); cursor: pointer; font-size: 11px; line-height: 12.65px; outline-color: rgb(221, 221, 221); text-align: left; text-decoration: none solid rgb(221, 221, 221); text-emphasis-color: rgb(221, 221, 221); -webkit-text-fill-color: rgb(221, 221, 221); -webkit-text-stroke-color: rgb(221, 221, 221);"> <span class="navFooterDescText" style="block-size: 22px; border-block-color: rgb(153, 153, 153); border-color: rgb(153, 153, 153); border-collapse: collapse; border-inline-color: rgb(153, 153, 153); caret-color: rgb(153, 153, 153); color: rgb(153, 153, 153); column-rule-color: rgb(153, 153, 153); cursor: pointer; display: inline-block; font-size: 10px; height: 22px; inline-size: 68.3594px; line-height: 11px; list-style-type: none; outline-color: rgb(153, 153, 153); perspective-origin: 34.1719px 11px; text-align: left; text-decoration: none solid rgb(153, 153, 153); text-emphasis-color: rgb(153, 153, 153); transform-origin: 34.1797px 11px; width: 68.3594px; -webkit-text-fill-color: rgb(153, 153, 153); -webkit-text-stroke-color: rgb(153, 153, 153);">Stream millions<br style="border-block-color: rgb(153, 153, 153); border-color: rgb(153, 153, 153); border-collapse: collapse; border-inline-color: rgb(153, 153, 153); caret-color: rgb(153, 153, 153); color: rgb(153, 153, 153); column-rule-color: rgb(153, 153, 153); cursor: pointer; font-size: 10px; line-height: 11px; list-style-type: none; outline-color: rgb(153, 153, 153); text-align: left; text-decoration: none solid rgb(153, 153, 153); text-emphasis-color: rgb(153, 153, 153); -webkit-text-fill-color: rgb(153, 153, 153); -webkit-text-stroke-color: rgb(153, 153, 153);"> of songs</span></a></td>
    <td class="navFooterDescSpacer" style="block-size: 46.3125px; border-block-color: rgb(221, 221, 221); border-color: rgb(221, 221, 221); border-collapse: collapse; border-inline-color: rgb(221, 221, 221); caret-color: rgb(221, 221, 221); color: rgb(221, 221, 221); column-rule-color: rgb(221, 221, 221); height: 46.3125px; inline-size: 40px; line-height: 15.6px; outline-color: rgb(221, 221, 221); padding-block: 0px; padding: 0px 10px; padding-inline: 10px; perspective-origin: 20px 23.1562px; text-align: center; text-decoration: none solid rgb(221, 221, 221); text-emphasis-color: rgb(221, 221, 221); text-wrap-mode: nowrap; transform-origin: 20px 23.1562px; width: 40px; -webkit-text-fill-color: rgb(221, 221, 221); -webkit-text-stroke-color: rgb(221, 221, 221);"></td>
    <td class="navFooterDescItem" style="block-size: 46.3125px; border-block-color: rgb(221, 221, 221); border-color: rgb(221, 221, 221); border-collapse: collapse; border-inline-color: rgb(221, 221, 221); caret-color: rgb(221, 221, 221); color: rgb(221, 221, 221); column-rule-color: rgb(221, 221, 221); font-size: 11px; height: 46.3125px; inline-size: 147.281px; line-height: 12.65px; outline-color: rgb(221, 221, 221); padding-block: 0px; padding: 0px 8.25px; padding-inline: 8.25px; perspective-origin: 73.6406px 23.1562px; text-align: left; text-decoration: none solid rgb(221, 221, 221); text-emphasis-color: rgb(221, 221, 221); text-wrap-mode: nowrap; transform-origin: 73.6406px 23.1562px; width: 147.281px; -webkit-text-fill-color: rgb(221, 221, 221); -webkit-text-stroke-color: rgb(221, 221, 221);"><a href="https://advertising.amazon.com/?ref=footer_advtsing_amzn_com" class="nav_a" style="border-block-color: rgb(221, 221, 221); border-color: rgb(221, 221, 221); border-collapse: collapse; border-inline-color: rgb(221, 221, 221); caret-color: rgb(221, 221, 221); color: rgb(221, 221, 221); column-rule-color: rgb(221, 221, 221); cursor: pointer; font-size: 11px; line-height: 12.65px; outline-color: rgb(221, 221, 221); text-align: left; text-decoration: none solid rgb(221, 221, 221); text-emphasis-color: rgb(221, 221, 221); -webkit-text-fill-color: rgb(221, 221, 221); -webkit-text-stroke-color: rgb(221, 221, 221);">Amazon Advertising<br style="border-block-color: rgb(221, 221, 221); border-color: rgb(221, 221, 221); border-collapse: collapse; border-inline-color: rgb(221, 221, 221); caret-color: rgb(221, 221, 221); color: rgb(221, 221, 221); column-rule-color: rgb(221, 221, 221); cursor: pointer; font-size: 11px; line-height: 12.65px; outline-color: rgb(221, 221, 221); text-align: left; text-decoration: none solid rgb(221, 221, 221); text-emphasis-color: rgb(221, 221, 221); -webkit-text-fill-color: rgb(221, 221, 221); -webkit-text-stroke-color: rgb(221, 221, 221);"> <span class="navFooterDescText" style="block-size: 22px; border-block-color: rgb(153, 153, 153); border-color: rgb(153, 153, 153); border-collapse: collapse; border-inline-color: rgb(153, 153, 153); caret-color: rgb(153, 153, 153); color: rgb(153, 153, 153); column-rule-color: rgb(153, 153, 153); cursor: pointer; display: inline-block; font-size: 10px; height: 22px; inline-size: 82.2812px; line-height: 11px; list-style-type: none; outline-color: rgb(153, 153, 153); perspective-origin: 41.1406px 11px; text-align: left; text-decoration: none solid rgb(153, 153, 153); text-emphasis-color: rgb(153, 153, 153); transform-origin: 41.1406px 11px; width: 82.2812px; -webkit-text-fill-color: rgb(153, 153, 153); -webkit-text-stroke-color: rgb(153, 153, 153);">Find, attract, and<br style="border-block-color: rgb(153, 153, 153); border-color: rgb(153, 153, 153); border-collapse: collapse; border-inline-color: rgb(153, 153, 153); caret-color: rgb(153, 153, 153); color: rgb(153, 153, 153); column-rule-color: rgb(153, 153, 153); cursor: pointer; font-size: 10px; line-height: 11px; list-style-type: none; outline-color: rgb(153, 153, 153); text-align: left; text-decoration: none solid rgb(153, 153, 153); text-emphasis-color: rgb(153, 153, 153); -webkit-text-fill-color: rgb(153, 153, 153); -webkit-text-stroke-color: rgb(153, 153, 153);"> engage customers</span></a></td>
    <td class="navFooterDescSpacer" style="block-size: 46.3125px; border-block-color: rgb(221, 221, 221); border-color: rgb(221, 221, 221); border-collapse: collapse; border-inline-color: rgb(221, 221, 221); caret-color: rgb(221, 221, 221); color: rgb(221, 221, 221); column-rule-color: rgb(221, 221, 221); height: 46.3125px; inline-size: 40px; line-height: 15.6px; outline-color: rgb(221, 221, 221); padding-block: 0px; padding: 0px 10px; padding-inline: 10px; perspective-origin: 20px 23.1562px; text-align: center; text-decoration: none solid rgb(221, 221, 221); text-emphasis-color: rgb(221, 221, 221); text-wrap-mode: nowrap; transform-origin: 20px 23.1562px; width: 40px; -webkit-text-fill-color: rgb(221, 221, 221); -webkit-text-stroke-color: rgb(221, 221, 221);"></td>
    <td class="navFooterDescItem" style="block-size: 46.3125px; border-block-color: rgb(221, 221, 221); border-color: rgb(221, 221, 221); border-collapse: collapse; border-inline-color: rgb(221, 221, 221); caret-color: rgb(221, 221, 221); color: rgb(221, 221, 221); column-rule-color: rgb(221, 221, 221); font-size: 11px; height: 46.3125px; inline-size: 96.2969px; line-height: 12.65px; outline-color: rgb(221, 221, 221); padding-block: 0px; padding: 0px 8.25px; padding-inline: 8.25px; perspective-origin: 48.1406px 23.1562px; text-align: left; text-decoration: none solid rgb(221, 221, 221); text-emphasis-color: rgb(221, 221, 221); text-wrap-mode: nowrap; transform-origin: 48.1484px 23.1562px; width: 96.2969px; -webkit-text-fill-color: rgb(221, 221, 221); -webkit-text-stroke-color: rgb(221, 221, 221);"><a href="http://www.amazon.com/STRING-subnav_primephotos_amazondrive/b?ie=UTF8&amp;node=15547130011&amp;ref_=us_footer_drive" class="nav_a" style="border-block-color: rgb(221, 221, 221); border-color: rgb(221, 221, 221); border-collapse: collapse; border-inline-color: rgb(221, 221, 221); caret-color: rgb(221, 221, 221); color: rgb(221, 221, 221); column-rule-color: rgb(221, 221, 221); cursor: pointer; font-size: 11px; line-height: 12.65px; outline-color: rgb(221, 221, 221); text-align: left; text-decoration: none solid rgb(221, 221, 221); text-emphasis-color: rgb(221, 221, 221); -webkit-text-fill-color: rgb(221, 221, 221); -webkit-text-stroke-color: rgb(221, 221, 221);">Amazon Drive<br style="border-block-color: rgb(221, 221, 221); border-color: rgb(221, 221, 221); border-collapse: collapse; border-inline-color: rgb(221, 221, 221); caret-color: rgb(221, 221, 221); color: rgb(221, 221, 221); column-rule-color: rgb(221, 221, 221); cursor: pointer; font-size: 11px; line-height: 12.65px; outline-color: rgb(221, 221, 221); text-align: left; text-decoration: none solid rgb(221, 221, 221); text-emphasis-color: rgb(221, 221, 221); -webkit-text-fill-color: rgb(221, 221, 221); -webkit-text-stroke-color: rgb(221, 221, 221);"> <span class="navFooterDescText" style="block-size: 22px; border-block-color: rgb(153, 153, 153); border-color: rgb(153, 153, 153); border-collapse: collapse; border-inline-color: rgb(153, 153, 153); caret-color: rgb(153, 153, 153); color: rgb(153, 153, 153); column-rule-color: rgb(153, 153, 153); cursor: pointer; display: inline-block; font-size: 10px; height: 22px; inline-size: 62.2656px; line-height: 11px; list-style-type: none; outline-color: rgb(153, 153, 153); perspective-origin: 31.125px 11px; text-align: left; text-decoration: none solid rgb(153, 153, 153); text-emphasis-color: rgb(153, 153, 153); transform-origin: 31.1328px 11px; width: 62.2656px; -webkit-text-fill-color: rgb(153, 153, 153); -webkit-text-stroke-color: rgb(153, 153, 153);">Cloud storage<br style="border-block-color: rgb(153, 153, 153); border-color: rgb(153, 153, 153); border-collapse: collapse; border-inline-color: rgb(153, 153, 153); caret-color: rgb(153, 153, 153); color: rgb(153, 153, 153); column-rule-color: rgb(153, 153, 153); cursor: pointer; font-size: 10px; line-height: 11px; list-style-type: none; outline-color: rgb(153, 153, 153); text-align: left; text-decoration: none solid rgb(153, 153, 153); text-emphasis-color: rgb(153, 153, 153); -webkit-text-fill-color: rgb(153, 153, 153); -webkit-text-stroke-color: rgb(153, 153, 153);"> from Amazon</span></a></td>
    <td class="navFooterDescSpacer" style="block-size: 46.3125px; border-block-color: rgb(221, 221, 221); border-color: rgb(221, 221, 221); border-collapse: collapse; border-inline-color: rgb(221, 221, 221); caret-color: rgb(221, 221, 221); color: rgb(221, 221, 221); column-rule-color: rgb(221, 221, 221); height: 46.3125px; inline-size: 40px; line-height: 15.6px; outline-color: rgb(221, 221, 221); padding-block: 0px; padding: 0px 10px; padding-inline: 10px; perspective-origin: 20px 23.1562px; text-align: center; text-decoration: none solid rgb(221, 221, 221); text-emphasis-color: rgb(221, 221, 221); text-wrap-mode: nowrap; transform-origin: 20px 23.1562px; width: 40px; -webkit-text-fill-color: rgb(221, 221, 221); -webkit-text-stroke-color: rgb(221, 221, 221);"></td>
    <td class="navFooterDescItem" style="block-size: 46.3125px; border-block-color: rgb(221, 221, 221); border-color: rgb(221, 221, 221); border-collapse: collapse; border-inline-color: rgb(221, 221, 221); caret-color: rgb(221, 221, 221); color: rgb(221, 221, 221); column-rule-color: rgb(221, 221, 221); font-size: 11px; height: 46.3125px; inline-size: 119.922px; line-height: 12.65px; outline-color: rgb(221, 221, 221); padding-block: 0px; padding: 0px 8.25px; padding-inline: 8.25px; perspective-origin: 59.9531px 23.1562px; text-align: left; text-decoration: none solid rgb(221, 221, 221); text-emphasis-color: rgb(221, 221, 221); text-wrap-mode: nowrap; transform-origin: 59.9609px 23.1562px; width: 119.922px; -webkit-text-fill-color: rgb(221, 221, 221); -webkit-text-stroke-color: rgb(221, 221, 221);"><a href="https://www.6pm.com/" class="nav_a" style="border-block-color: rgb(221, 221, 221); border-color: rgb(221, 221, 221); border-collapse: collapse; border-inline-color: rgb(221, 221, 221); caret-color: rgb(221, 221, 221); color: rgb(221, 221, 221); column-rule-color: rgb(221, 221, 221); cursor: pointer; font-size: 11px; line-height: 12.65px; outline-color: rgb(221, 221, 221); text-align: left; text-decoration: none solid rgb(221, 221, 221); text-emphasis-color: rgb(221, 221, 221); -webkit-text-fill-color: rgb(221, 221, 221); -webkit-text-stroke-color: rgb(221, 221, 221);">6pm<br style="border-block-color: rgb(221, 221, 221); border-color: rgb(221, 221, 221); border-collapse: collapse; border-inline-color: rgb(221, 221, 221); caret-color: rgb(221, 221, 221); color: rgb(221, 221, 221); column-rule-color: rgb(221, 221, 221); cursor: pointer; font-size: 11px; line-height: 12.65px; outline-color: rgb(221, 221, 221); text-align: left; text-decoration: none solid rgb(221, 221, 221); text-emphasis-color: rgb(221, 221, 221); -webkit-text-fill-color: rgb(221, 221, 221); -webkit-text-stroke-color: rgb(221, 221, 221);"> <span class="navFooterDescText" style="block-size: 22px; border-block-color: rgb(153, 153, 153); border-color: rgb(153, 153, 153); border-collapse: collapse; border-inline-color: rgb(153, 153, 153); caret-color: rgb(153, 153, 153); color: rgb(153, 153, 153); column-rule-color: rgb(153, 153, 153); cursor: pointer; display: inline-block; font-size: 10px; height: 22px; inline-size: 79.5156px; line-height: 11px; list-style-type: none; outline-color: rgb(153, 153, 153); perspective-origin: 39.75px 11px; text-align: left; text-decoration: none solid rgb(153, 153, 153); text-emphasis-color: rgb(153, 153, 153); transform-origin: 39.7578px 11px; width: 79.5156px; -webkit-text-fill-color: rgb(153, 153, 153); -webkit-text-stroke-color: rgb(153, 153, 153);">Score deals<br style="border-block-color: rgb(153, 153, 153); border-color: rgb(153, 153, 153); border-collapse: collapse; border-inline-color: rgb(153, 153, 153); caret-color: rgb(153, 153, 153); color: rgb(153, 153, 153); column-rule-color: rgb(153, 153, 153); cursor: pointer; font-size: 10px; line-height: 11px; list-style-type: none; outline-color: rgb(153, 153, 153); text-align: left; text-decoration: none solid rgb(153, 153, 153); text-emphasis-color: rgb(153, 153, 153); -webkit-text-fill-color: rgb(153, 153, 153); -webkit-text-stroke-color: rgb(153, 153, 153);"> on fashion brands</span></a></td>
    <td class="navFooterDescSpacer" style="block-size: 46.3125px; border-block-color: rgb(221, 221, 221); border-color: rgb(221, 221, 221); border-collapse: collapse; border-inline-color: rgb(221, 221, 221); caret-color: rgb(221, 221, 221); color: rgb(221, 221, 221); column-rule-color: rgb(221, 221, 221); height: 46.3125px; inline-size: 40px; line-height: 15.6px; outline-color: rgb(221, 221, 221); padding-block: 0px; padding: 0px 10px; padding-inline: 10px; perspective-origin: 20px 23.1562px; text-align: center; text-decoration: none solid rgb(221, 221, 221); text-emphasis-color: rgb(221, 221, 221); text-wrap-mode: nowrap; transform-origin: 20px 23.1562px; width: 40px; -webkit-text-fill-color: rgb(221, 221, 221); -webkit-text-stroke-color: rgb(221, 221, 221);"></td>
    <td class="navFooterDescItem" style="block-size: 46.3125px; border-block-color: rgb(221, 221, 221); border-color: rgb(221, 221, 221); border-collapse: collapse; border-inline-color: rgb(221, 221, 221); caret-color: rgb(221, 221, 221); color: rgb(221, 221, 221); column-rule-color: rgb(221, 221, 221); font-size: 11px; height: 46.3125px; inline-size: 102.328px; line-height: 12.65px; outline-color: rgb(221, 221, 221); padding-block: 0px; padding: 0px 8.25px; padding-inline: 8.25px; perspective-origin: 51.1562px 23.1562px; text-align: left; text-decoration: none solid rgb(221, 221, 221); text-emphasis-color: rgb(221, 221, 221); text-wrap-mode: nowrap; transform-origin: 51.1641px 23.1562px; width: 102.328px; -webkit-text-fill-color: rgb(221, 221, 221); -webkit-text-stroke-color: rgb(221, 221, 221);"><a href="https://www.abebooks.com/" class="nav_a" style="border-block-color: rgb(221, 221, 221); border-color: rgb(221, 221, 221); border-collapse: collapse; border-inline-color: rgb(221, 221, 221); caret-color: rgb(221, 221, 221); color: rgb(221, 221, 221); column-rule-color: rgb(221, 221, 221); cursor: pointer; font-size: 11px; line-height: 12.65px; outline-color: rgb(221, 221, 221); text-align: left; text-decoration: none solid rgb(221, 221, 221); text-emphasis-color: rgb(221, 221, 221); -webkit-text-fill-color: rgb(221, 221, 221); -webkit-text-stroke-color: rgb(221, 221, 221);">AbeBooks<br style="border-block-color: rgb(221, 221, 221); border-color: rgb(221, 221, 221); border-collapse: collapse; border-inline-color: rgb(221, 221, 221); caret-color: rgb(221, 221, 221); color: rgb(221, 221, 221); column-rule-color: rgb(221, 221, 221); cursor: pointer; font-size: 11px; line-height: 12.65px; outline-color: rgb(221, 221, 221); text-align: left; text-decoration: none solid rgb(221, 221, 221); text-emphasis-color: rgb(221, 221, 221); -webkit-text-fill-color: rgb(221, 221, 221); -webkit-text-stroke-color: rgb(221, 221, 221);"> <span class="navFooterDescText" style="block-size: 22px; border-block-color: rgb(153, 153, 153); border-color: rgb(153, 153, 153); border-collapse: collapse; border-inline-color: rgb(153, 153, 153); caret-color: rgb(153, 153, 153); color: rgb(153, 153, 153); column-rule-color: rgb(153, 153, 153); cursor: pointer; display: inline-block; font-size: 10px; height: 22px; inline-size: 58.3594px; line-height: 11px; list-style-type: none; outline-color: rgb(153, 153, 153); perspective-origin: 29.1719px 11px; text-align: left; text-decoration: none solid rgb(153, 153, 153); text-emphasis-color: rgb(153, 153, 153); transform-origin: 29.1797px 11px; width: 58.3594px; -webkit-text-fill-color: rgb(153, 153, 153); -webkit-text-stroke-color: rgb(153, 153, 153);">Books, art<br style="border-block-color: rgb(153, 153, 153); border-color: rgb(153, 153, 153); border-collapse: collapse; border-inline-color: rgb(153, 153, 153); caret-color: rgb(153, 153, 153); color: rgb(153, 153, 153); column-rule-color: rgb(153, 153, 153); cursor: pointer; font-size: 10px; line-height: 11px; list-style-type: none; outline-color: rgb(153, 153, 153); text-align: left; text-decoration: none solid rgb(153, 153, 153); text-emphasis-color: rgb(153, 153, 153); -webkit-text-fill-color: rgb(153, 153, 153); -webkit-text-stroke-color: rgb(153, 153, 153);"> &amp; collectibles</span></a></td>
    <td class="navFooterDescSpacer" style="block-size: 46.3125px; border-block-color: rgb(221, 221, 221); border-color: rgb(221, 221, 221); border-collapse: collapse; border-inline-color: rgb(221, 221, 221); caret-color: rgb(221, 221, 221); color: rgb(221, 221, 221); column-rule-color: rgb(221, 221, 221); height: 46.3125px; inline-size: 40px; line-height: 15.6px; outline-color: rgb(221, 221, 221); padding-block: 0px; padding: 0px 10px; padding-inline: 10px; perspective-origin: 20px 23.1562px; text-align: center; text-decoration: none solid rgb(221, 221, 221); text-emphasis-color: rgb(221, 221, 221); text-wrap-mode: nowrap; transform-origin: 20px 23.1562px; width: 40px; -webkit-text-fill-color: rgb(221, 221, 221); -webkit-text-stroke-color: rgb(221, 221, 221);"></td>
    <td class="navFooterDescItem" style="block-size: 46.3125px; border-block-color: rgb(221, 221, 221); border-color: rgb(221, 221, 221); border-collapse: collapse; border-inline-color: rgb(221, 221, 221); caret-color: rgb(221, 221, 221); color: rgb(221, 221, 221); column-rule-color: rgb(221, 221, 221); font-size: 11px; height: 46.3125px; inline-size: 94.3906px; line-height: 12.65px; outline-color: rgb(221, 221, 221); padding-block: 0px; padding: 0px 8.25px; padding-inline: 8.25px; perspective-origin: 47.1875px 23.1562px; text-align: left; text-decoration: none solid rgb(221, 221, 221); text-emphasis-color: rgb(221, 221, 221); text-wrap-mode: nowrap; transform-origin: 47.1953px 23.1562px; width: 94.3906px; -webkit-text-fill-color: rgb(221, 221, 221); -webkit-text-stroke-color: rgb(221, 221, 221);"><a href="https://www.acx.com/" class="nav_a" style="border-block-color: rgb(221, 221, 221); border-color: rgb(221, 221, 221); border-collapse: collapse; border-inline-color: rgb(221, 221, 221); caret-color: rgb(221, 221, 221); color: rgb(221, 221, 221); column-rule-color: rgb(221, 221, 221); cursor: pointer; font-size: 11px; line-height: 12.65px; outline-color: rgb(221, 221, 221); text-align: left; text-decoration: none solid rgb(221, 221, 221); text-emphasis-color: rgb(221, 221, 221); -webkit-text-fill-color: rgb(221, 221, 221); -webkit-text-stroke-color: rgb(221, 221, 221);">ACX <br style="border-block-color: rgb(221, 221, 221); border-color: rgb(221, 221, 221); border-collapse: collapse; border-inline-color: rgb(221, 221, 221); caret-color: rgb(221, 221, 221); color: rgb(221, 221, 221); column-rule-color: rgb(221, 221, 221); cursor: pointer; font-size: 11px; line-height: 12.65px; outline-color: rgb(221, 221, 221); text-align: left; text-decoration: none solid rgb(221, 221, 221); text-emphasis-color: rgb(221, 221, 221); -webkit-text-fill-color: rgb(221, 221, 221); -webkit-text-stroke-color: rgb(221, 221, 221);"> <span class="navFooterDescText" style="block-size: 33px; border-block-color: rgb(153, 153, 153); border-color: rgb(153, 153, 153); border-collapse: collapse; border-inline-color: rgb(153, 153, 153); caret-color: rgb(153, 153, 153); color: rgb(153, 153, 153); column-rule-color: rgb(153, 153, 153); cursor: pointer; display: inline-block; font-size: 10px; height: 33px; inline-size: 71.3125px; line-height: 11px; list-style-type: none; outline-color: rgb(153, 153, 153); perspective-origin: 35.6562px 16.5px; text-align: left; text-decoration: none solid rgb(153, 153, 153); text-emphasis-color: rgb(153, 153, 153); transform-origin: 35.6562px 16.5px; width: 71.3125px; -webkit-text-fill-color: rgb(153, 153, 153); -webkit-text-stroke-color: rgb(153, 153, 153);">Audiobook Publishing<br style="border-block-color: rgb(153, 153, 153); border-color: rgb(153, 153, 153); border-collapse: collapse; border-inline-color: rgb(153, 153, 153); caret-color: rgb(153, 153, 153); color: rgb(153, 153, 153); column-rule-color: rgb(153, 153, 153); cursor: pointer; font-size: 10px; line-height: 11px; list-style-type: none; outline-color: rgb(153, 153, 153); text-align: left; text-decoration: none solid rgb(153, 153, 153); text-emphasis-color: rgb(153, 153, 153); -webkit-text-fill-color: rgb(153, 153, 153); -webkit-text-stroke-color: rgb(153, 153, 153);"> Made Easy</span></a></td>
    <td class="navFooterDescSpacer" style="block-size: 46.3125px; border-block-color: rgb(221, 221, 221); border-color: rgb(221, 221, 221); border-collapse: collapse; border-inline-color: rgb(221, 221, 221); caret-color: rgb(221, 221, 221); color: rgb(221, 221, 221); column-rule-color: rgb(221, 221, 221); height: 46.3125px; inline-size: 40px; line-height: 15.6px; outline-color: rgb(221, 221, 221); padding-block: 0px; padding: 0px 10px; padding-inline: 10px; perspective-origin: 20px 23.1562px; text-align: center; text-decoration: none solid rgb(221, 221, 221); text-emphasis-color: rgb(221, 221, 221); text-wrap-mode: nowrap; transform-origin: 20px 23.1562px; width: 40px; -webkit-text-fill-color: rgb(221, 221, 221); -webkit-text-stroke-color: rgb(221, 221, 221);"></td>
    <td class="navFooterDescItem" style="block-size: 46.3125px; border-block-color: rgb(221, 221, 221); border-color: rgb(221, 221, 221); border-collapse: collapse; border-inline-color: rgb(221, 221, 221); caret-color: rgb(221, 221, 221); color: rgb(221, 221, 221); column-rule-color: rgb(221, 221, 221); font-size: 11px; height: 46.3125px; inline-size: 86.5312px; line-height: 12.65px; outline-color: rgb(221, 221, 221); padding-block: 0px; padding: 0px 8.25px; padding-inline: 8.25px; perspective-origin: 43.2656px 23.1562px; text-align: left; text-decoration: none solid rgb(221, 221, 221); text-emphasis-color: rgb(221, 221, 221); text-wrap-mode: nowrap; transform-origin: 43.2656px 23.1562px; width: 86.5312px; -webkit-text-fill-color: rgb(221, 221, 221); -webkit-text-stroke-color: rgb(221, 221, 221);"><a href="https://www.alexa.com/" class="nav_a" style="border-block-color: rgb(221, 221, 221); border-color: rgb(221, 221, 221); border-collapse: collapse; border-inline-color: rgb(221, 221, 221); caret-color: rgb(221, 221, 221); color: rgb(221, 221, 221); column-rule-color: rgb(221, 221, 221); cursor: pointer; font-size: 11px; line-height: 12.65px; outline-color: rgb(221, 221, 221); text-align: left; text-decoration: none solid rgb(221, 221, 221); text-emphasis-color: rgb(221, 221, 221); -webkit-text-fill-color: rgb(221, 221, 221); -webkit-text-stroke-color: rgb(221, 221, 221);">Alexa<br style="border-block-color: rgb(221, 221, 221); border-color: rgb(221, 221, 221); border-collapse: collapse; border-inline-color: rgb(221, 221, 221); caret-color: rgb(221, 221, 221); color: rgb(221, 221, 221); column-rule-color: rgb(221, 221, 221); cursor: pointer; font-size: 11px; line-height: 12.65px; outline-color: rgb(221, 221, 221); text-align: left; text-decoration: none solid rgb(221, 221, 221); text-emphasis-color: rgb(221, 221, 221); -webkit-text-fill-color: rgb(221, 221, 221); -webkit-text-stroke-color: rgb(221, 221, 221);"> <span class="navFooterDescText" style="block-size: 33px; border-block-color: rgb(153, 153, 153); border-color: rgb(153, 153, 153); border-collapse: collapse; border-inline-color: rgb(153, 153, 153); caret-color: rgb(153, 153, 153); color: rgb(153, 153, 153); column-rule-color: rgb(153, 153, 153); cursor: pointer; display: inline-block; font-size: 10px; height: 33px; inline-size: 70.0312px; line-height: 11px; list-style-type: none; outline-color: rgb(153, 153, 153); perspective-origin: 35.0156px 16.5px; text-align: left; text-decoration: none solid rgb(153, 153, 153); text-emphasis-color: rgb(153, 153, 153); transform-origin: 35.0156px 16.5px; width: 70.0312px; -webkit-text-fill-color: rgb(153, 153, 153); -webkit-text-stroke-color: rgb(153, 153, 153);">Actionable Analytics<br style="border-block-color: rgb(153, 153, 153); border-color: rgb(153, 153, 153); border-collapse: collapse; border-inline-color: rgb(153, 153, 153); caret-color: rgb(153, 153, 153); color: rgb(153, 153, 153); column-rule-color: rgb(153, 153, 153); cursor: pointer; font-size: 10px; line-height: 11px; list-style-type: none; outline-color: rgb(153, 153, 153); text-align: left; text-decoration: none solid rgb(153, 153, 153); text-emphasis-color: rgb(153, 153, 153); -webkit-text-fill-color: rgb(153, 153, 153); -webkit-text-stroke-color: rgb(153, 153, 153);"> for the Web</span></a></td>
</tr>
<tr style="block-size: 15.5938px; border-block-color: rgb(128, 128, 128); border-color: rgb(128, 128, 128); border-collapse: collapse; border-inline-color: rgb(128, 128, 128); caret-color: rgb(221, 221, 221); color: rgb(221, 221, 221); column-rule-color: rgb(221, 221, 221); font-size: 12px; height: 15.5938px; inline-size: 1000px; line-height: 18px; outline-color: rgb(221, 221, 221); perspective-origin: 500px 7.79688px; text-align: center; text-decoration: none solid rgb(221, 221, 221); text-emphasis-color: rgb(221, 221, 221); text-wrap-mode: nowrap; transform-origin: 500px 7.79688px; vertical-align: middle; width: 1000px; -webkit-text-fill-color: rgb(221, 221, 221); -webkit-text-stroke-color: rgb(221, 221, 221);"><td style="block-size: 15.5938px; border-block-color: rgb(221, 221, 221); border-color: rgb(221, 221, 221); border-collapse: collapse; border-inline-color: rgb(221, 221, 221); caret-color: rgb(221, 221, 221); color: rgb(221, 221, 221); column-rule-color: rgb(221, 221, 221); height: 15.5938px; inline-size: 113.297px; line-height: 15.6px; outline-color: rgb(221, 221, 221); padding-block: 0px; padding: 0px 10px; padding-inline: 10px; perspective-origin: 56.6406px 7.79688px; text-align: center; text-decoration: none solid rgb(221, 221, 221); text-emphasis-color: rgb(221, 221, 221); text-wrap-mode: nowrap; transform-origin: 56.6484px 7.79688px; width: 113.297px; -webkit-text-fill-color: rgb(221, 221, 221); -webkit-text-stroke-color: rgb(221, 221, 221);">&nbsp;</td></tr>
<tr style="block-size: 58.9688px; border-block-color: rgb(128, 128, 128); border-color: rgb(128, 128, 128); border-collapse: collapse; border-inline-color: rgb(128, 128, 128); caret-color: rgb(221, 221, 221); color: rgb(221, 221, 221); column-rule-color: rgb(221, 221, 221); font-size: 12px; height: 58.9688px; inline-size: 1000px; line-height: 18px; outline-color: rgb(221, 221, 221); perspective-origin: 500px 29.4844px; text-align: center; text-decoration: none solid rgb(221, 221, 221); text-emphasis-color: rgb(221, 221, 221); text-wrap-mode: nowrap; transform-origin: 500px 29.4844px; vertical-align: middle; width: 1000px; -webkit-text-fill-color: rgb(221, 221, 221); -webkit-text-stroke-color: rgb(221, 221, 221);">
    <td class="navFooterDescItem" style="block-size: 58.9688px; border-block-color: rgb(221, 221, 221); border-color: rgb(221, 221, 221); border-collapse: collapse; border-inline-color: rgb(221, 221, 221); caret-color: rgb(221, 221, 221); color: rgb(221, 221, 221); column-rule-color: rgb(221, 221, 221); font-size: 11px; height: 58.9688px; inline-size: 113.297px; line-height: 12.65px; outline-color: rgb(221, 221, 221); padding-block: 0px; padding: 0px 8.25px; padding-inline: 8.25px; perspective-origin: 56.6406px 29.4844px; text-align: left; text-decoration: none solid rgb(221, 221, 221); text-emphasis-color: rgb(221, 221, 221); text-wrap-mode: nowrap; transform-origin: 56.6484px 29.4844px; width: 113.297px; -webkit-text-fill-color: rgb(221, 221, 221); -webkit-text-stroke-color: rgb(221, 221, 221);"><a href="https://www.amazon.com:443/gp/redirect.html?_encoding=UTF8&amp;location=https%3A%2F%2Fsell.amazon.com%2F%3Fld%3DAZUSSOA-footer-aff%26ref_%3Dfooter_sell&amp;source=standards&amp;token=5C1C6935C910A355A9EFF638456512B3EE3E32AC" class="nav_a" style="border-block-color: rgb(221, 221, 221); border-color: rgb(221, 221, 221); border-collapse: collapse; border-inline-color: rgb(221, 221, 221); caret-color: rgb(221, 221, 221); color: rgb(221, 221, 221); column-rule-color: rgb(221, 221, 221); cursor: pointer; font-size: 11px; line-height: 12.65px; outline-color: rgb(221, 221, 221); text-align: left; text-decoration: none solid rgb(221, 221, 221); text-emphasis-color: rgb(221, 221, 221); -webkit-text-fill-color: rgb(221, 221, 221); -webkit-text-stroke-color: rgb(221, 221, 221);">Sell on Amazon<br style="border-block-color: rgb(221, 221, 221); border-color: rgb(221, 221, 221); border-collapse: collapse; border-inline-color: rgb(221, 221, 221); caret-color: rgb(221, 221, 221); color: rgb(221, 221, 221); column-rule-color: rgb(221, 221, 221); cursor: pointer; font-size: 11px; line-height: 12.65px; outline-color: rgb(221, 221, 221); text-align: left; text-decoration: none solid rgb(221, 221, 221); text-emphasis-color: rgb(221, 221, 221); -webkit-text-fill-color: rgb(221, 221, 221); -webkit-text-stroke-color: rgb(221, 221, 221);"> <span class="navFooterDescText" style="block-size: 22px; border-block-color: rgb(153, 153, 153); border-color: rgb(153, 153, 153); border-collapse: collapse; border-inline-color: rgb(153, 153, 153); caret-color: rgb(153, 153, 153); color: rgb(153, 153, 153); column-rule-color: rgb(153, 153, 153); cursor: pointer; display: inline-block; font-size: 10px; height: 22px; inline-size: 96.7969px; line-height: 11px; list-style-type: none; outline-color: rgb(153, 153, 153); perspective-origin: 48.3906px 11px; text-align: left; text-decoration: none solid rgb(153, 153, 153); text-emphasis-color: rgb(153, 153, 153); transform-origin: 48.3984px 11px; width: 96.7969px; -webkit-text-fill-color: rgb(153, 153, 153); -webkit-text-stroke-color: rgb(153, 153, 153);">Start a Selling Account</span></a></td>
    <td class="navFooterDescSpacer" style="block-size: 58.9688px; border-block-color: rgb(221, 221, 221); border-color: rgb(221, 221, 221); border-collapse: collapse; border-inline-color: rgb(221, 221, 221); caret-color: rgb(221, 221, 221); color: rgb(221, 221, 221); column-rule-color: rgb(221, 221, 221); height: 58.9688px; inline-size: 40px; line-height: 15.6px; outline-color: rgb(221, 221, 221); padding-block: 0px; padding: 0px 10px; padding-inline: 10px; perspective-origin: 20px 29.4844px; text-align: center; text-decoration: none solid rgb(221, 221, 221); text-emphasis-color: rgb(221, 221, 221); text-wrap-mode: nowrap; transform-origin: 20px 29.4844px; width: 40px; -webkit-text-fill-color: rgb(221, 221, 221); -webkit-text-stroke-color: rgb(221, 221, 221);"></td>
    <td class="navFooterDescItem" style="block-size: 58.9688px; border-block-color: rgb(221, 221, 221); border-color: rgb(221, 221, 221); border-collapse: collapse; border-inline-color: rgb(221, 221, 221); caret-color: rgb(221, 221, 221); color: rgb(221, 221, 221); column-rule-color: rgb(221, 221, 221); font-size: 11px; height: 58.9688px; inline-size: 147.266px; line-height: 12.65px; outline-color: rgb(221, 221, 221); padding-block: 0px; padding: 0px 8.25px; padding-inline: 8.25px; perspective-origin: 73.625px 29.4844px; text-align: left; text-decoration: none solid rgb(221, 221, 221); text-emphasis-color: rgb(221, 221, 221); text-wrap-mode: nowrap; transform-origin: 73.6328px 29.4844px; width: 147.266px; -webkit-text-fill-color: rgb(221, 221, 221); -webkit-text-stroke-color: rgb(221, 221, 221);"><a href="http://www.amazon.com/business?_encoding=UTF8&amp;ref_=footer_retail_b2b" class="nav_a" style="border-block-color: rgb(221, 221, 221); border-color: rgb(221, 221, 221); border-collapse: collapse; border-inline-color: rgb(221, 221, 221); caret-color: rgb(221, 221, 221); color: rgb(221, 221, 221); column-rule-color: rgb(221, 221, 221); cursor: pointer; font-size: 11px; line-height: 12.65px; outline-color: rgb(221, 221, 221); text-align: left; text-decoration: none solid rgb(221, 221, 221); text-emphasis-color: rgb(221, 221, 221); -webkit-text-fill-color: rgb(221, 221, 221); -webkit-text-stroke-color: rgb(221, 221, 221);">Amazon Business<br style="border-block-color: rgb(221, 221, 221); border-color: rgb(221, 221, 221); border-collapse: collapse; border-inline-color: rgb(221, 221, 221); caret-color: rgb(221, 221, 221); color: rgb(221, 221, 221); column-rule-color: rgb(221, 221, 221); cursor: pointer; font-size: 11px; line-height: 12.65px; outline-color: rgb(221, 221, 221); text-align: left; text-decoration: none solid rgb(221, 221, 221); text-emphasis-color: rgb(221, 221, 221); -webkit-text-fill-color: rgb(221, 221, 221); -webkit-text-stroke-color: rgb(221, 221, 221);"> <span class="navFooterDescText" style="block-size: 22px; border-block-color: rgb(153, 153, 153); border-color: rgb(153, 153, 153); border-collapse: collapse; border-inline-color: rgb(153, 153, 153); caret-color: rgb(153, 153, 153); color: rgb(153, 153, 153); column-rule-color: rgb(153, 153, 153); cursor: pointer; display: inline-block; font-size: 10px; height: 22px; inline-size: 65.0312px; line-height: 11px; list-style-type: none; outline-color: rgb(153, 153, 153); perspective-origin: 32.5156px 11px; text-align: left; text-decoration: none solid rgb(153, 153, 153); text-emphasis-color: rgb(153, 153, 153); transform-origin: 32.5156px 11px; width: 65.0312px; -webkit-text-fill-color: rgb(153, 153, 153); -webkit-text-stroke-color: rgb(153, 153, 153);">Everything For<br style="border-block-color: rgb(153, 153, 153); border-color: rgb(153, 153, 153); border-collapse: collapse; border-inline-color: rgb(153, 153, 153); caret-color: rgb(153, 153, 153); color: rgb(153, 153, 153); column-rule-color: rgb(153, 153, 153); cursor: pointer; font-size: 10px; line-height: 11px; list-style-type: none; outline-color: rgb(153, 153, 153); text-align: left; text-decoration: none solid rgb(153, 153, 153); text-emphasis-color: rgb(153, 153, 153); -webkit-text-fill-color: rgb(153, 153, 153); -webkit-text-stroke-color: rgb(153, 153, 153);"> Your Business</span></a></td>
    <td class="navFooterDescSpacer" style="block-size: 58.9688px; border-block-color: rgb(221, 221, 221); border-color: rgb(221, 221, 221); border-collapse: collapse; border-inline-color: rgb(221, 221, 221); caret-color: rgb(221, 221, 221); color: rgb(221, 221, 221); column-rule-color: rgb(221, 221, 221); height: 58.9688px; inline-size: 40px; line-height: 15.6px; outline-color: rgb(221, 221, 221); padding-block: 0px; padding: 0px 10px; padding-inline: 10px; perspective-origin: 20px 29.4844px; text-align: center; text-decoration: none solid rgb(221, 221, 221); text-emphasis-color: rgb(221, 221, 221); text-wrap-mode: nowrap; transform-origin: 20px 29.4844px; width: 40px; -webkit-text-fill-color: rgb(221, 221, 221); -webkit-text-stroke-color: rgb(221, 221, 221);"></td>
    <td class="navFooterDescItem" style="block-size: 58.9688px; border-block-color: rgb(221, 221, 221); border-color: rgb(221, 221, 221); border-collapse: collapse; border-inline-color: rgb(221, 221, 221); caret-color: rgb(221, 221, 221); color: rgb(221, 221, 221); column-rule-color: rgb(221, 221, 221); font-size: 11px; height: 58.9688px; inline-size: 96.2969px; line-height: 12.65px; outline-color: rgb(221, 221, 221); padding-block: 0px; padding: 0px 8.25px; padding-inline: 8.25px; perspective-origin: 48.1406px 29.4844px; text-align: left; text-decoration: none solid rgb(221, 221, 221); text-emphasis-color: rgb(221, 221, 221); text-wrap-mode: nowrap; transform-origin: 48.1484px 29.4844px; width: 96.2969px; -webkit-text-fill-color: rgb(221, 221, 221); -webkit-text-stroke-color: rgb(221, 221, 221);"><a href="http://www.amazon.com/alm/storefront?_encoding=UTF8&amp;almBrandId=QW1hem9uIEZyZXNo&amp;ref_=footer_aff_fresh" class="nav_a" style="border-block-color: rgb(221, 221, 221); border-color: rgb(221, 221, 221); border-collapse: collapse; border-inline-color: rgb(221, 221, 221); caret-color: rgb(221, 221, 221); color: rgb(221, 221, 221); column-rule-color: rgb(221, 221, 221); cursor: pointer; font-size: 11px; line-height: 12.65px; outline-color: rgb(221, 221, 221); text-align: left; text-decoration: none solid rgb(221, 221, 221); text-emphasis-color: rgb(221, 221, 221); -webkit-text-fill-color: rgb(221, 221, 221); -webkit-text-stroke-color: rgb(221, 221, 221);">Amazon Fresh<br style="border-block-color: rgb(221, 221, 221); border-color: rgb(221, 221, 221); border-collapse: collapse; border-inline-color: rgb(221, 221, 221); caret-color: rgb(221, 221, 221); color: rgb(221, 221, 221); column-rule-color: rgb(221, 221, 221); cursor: pointer; font-size: 11px; line-height: 12.65px; outline-color: rgb(221, 221, 221); text-align: left; text-decoration: none solid rgb(221, 221, 221); text-emphasis-color: rgb(221, 221, 221); -webkit-text-fill-color: rgb(221, 221, 221); -webkit-text-stroke-color: rgb(221, 221, 221);"> <span class="navFooterDescText" style="block-size: 33px; border-block-color: rgb(153, 153, 153); border-color: rgb(153, 153, 153); border-collapse: collapse; border-inline-color: rgb(153, 153, 153); caret-color: rgb(153, 153, 153); color: rgb(153, 153, 153); column-rule-color: rgb(153, 153, 153); cursor: pointer; display: inline-block; font-size: 10px; height: 33px; inline-size: 79.7969px; line-height: 11px; list-style-type: none; outline-color: rgb(153, 153, 153); perspective-origin: 39.8906px 16.5px; text-align: left; text-decoration: none solid rgb(153, 153, 153); text-emphasis-color: rgb(153, 153, 153); transform-origin: 39.8984px 16.5px; width: 79.7969px; -webkit-text-fill-color: rgb(153, 153, 153); -webkit-text-stroke-color: rgb(153, 153, 153);">Groceries &amp; More<br style="border-block-color: rgb(153, 153, 153); border-color: rgb(153, 153, 153); border-collapse: collapse; border-inline-color: rgb(153, 153, 153); caret-color: rgb(153, 153, 153); color: rgb(153, 153, 153); column-rule-color: rgb(153, 153, 153); cursor: pointer; font-size: 10px; line-height: 11px; list-style-type: none; outline-color: rgb(153, 153, 153); text-align: left; text-decoration: none solid rgb(153, 153, 153); text-emphasis-color: rgb(153, 153, 153); -webkit-text-fill-color: rgb(153, 153, 153); -webkit-text-stroke-color: rgb(153, 153, 153);"> Right To Your Door</span></a></td>
    <td class="navFooterDescSpacer" style="block-size: 58.9688px; border-block-color: rgb(221, 221, 221); border-color: rgb(221, 221, 221); border-collapse: collapse; border-inline-color: rgb(221, 221, 221); caret-color: rgb(221, 221, 221); color: rgb(221, 221, 221); column-rule-color: rgb(221, 221, 221); height: 58.9688px; inline-size: 40px; line-height: 15.6px; outline-color: rgb(221, 221, 221); padding-block: 0px; padding: 0px 10px; padding-inline: 10px; perspective-origin: 20px 29.4844px; text-align: center; text-decoration: none solid rgb(221, 221, 221); text-emphasis-color: rgb(221, 221, 221); text-wrap-mode: nowrap; transform-origin: 20px 29.4844px; width: 40px; -webkit-text-fill-color: rgb(221, 221, 221); -webkit-text-stroke-color: rgb(221, 221, 221);"></td>
    <td class="navFooterDescItem" style="block-size: 58.9688px; border-block-color: rgb(221, 221, 221); border-color: rgb(221, 221, 221); border-collapse: collapse; border-inline-color: rgb(221, 221, 221); caret-color: rgb(221, 221, 221); color: rgb(221, 221, 221); column-rule-color: rgb(221, 221, 221); font-size: 11px; height: 58.9688px; inline-size: 119.922px; line-height: 12.65px; outline-color: rgb(221, 221, 221); padding-block: 0px; padding: 0px 8.25px; padding-inline: 8.25px; perspective-origin: 59.9531px 29.4844px; text-align: left; text-decoration: none solid rgb(221, 221, 221); text-emphasis-color: rgb(221, 221, 221); text-wrap-mode: nowrap; transform-origin: 59.9609px 29.4844px; width: 119.922px; -webkit-text-fill-color: rgb(221, 221, 221); -webkit-text-stroke-color: rgb(221, 221, 221);"><a href="http://www.amazon.com/International-Shipping-Direct/b?ie=UTF8&amp;node=230659011&amp;ref_=footer_amazonglobal" class="nav_a" style="border-block-color: rgb(221, 221, 221); border-color: rgb(221, 221, 221); border-collapse: collapse; border-inline-color: rgb(221, 221, 221); caret-color: rgb(221, 221, 221); color: rgb(221, 221, 221); column-rule-color: rgb(221, 221, 221); cursor: pointer; font-size: 11px; line-height: 12.65px; outline-color: rgb(221, 221, 221); text-align: left; text-decoration: none solid rgb(221, 221, 221); text-emphasis-color: rgb(221, 221, 221); -webkit-text-fill-color: rgb(221, 221, 221); -webkit-text-stroke-color: rgb(221, 221, 221);">AmazonGlobal<br style="border-block-color: rgb(221, 221, 221); border-color: rgb(221, 221, 221); border-collapse: collapse; border-inline-color: rgb(221, 221, 221); caret-color: rgb(221, 221, 221); color: rgb(221, 221, 221); column-rule-color: rgb(221, 221, 221); cursor: pointer; font-size: 11px; line-height: 12.65px; outline-color: rgb(221, 221, 221); text-align: left; text-decoration: none solid rgb(221, 221, 221); text-emphasis-color: rgb(221, 221, 221); -webkit-text-fill-color: rgb(221, 221, 221); -webkit-text-stroke-color: rgb(221, 221, 221);"> <span class="navFooterDescText" style="block-size: 22px; border-block-color: rgb(153, 153, 153); border-color: rgb(153, 153, 153); border-collapse: collapse; border-inline-color: rgb(153, 153, 153); caret-color: rgb(153, 153, 153); color: rgb(153, 153, 153); column-rule-color: rgb(153, 153, 153); cursor: pointer; display: inline-block; font-size: 10px; height: 22px; inline-size: 62.2656px; line-height: 11px; list-style-type: none; outline-color: rgb(153, 153, 153); perspective-origin: 31.125px 11px; text-align: left; text-decoration: none solid rgb(153, 153, 153); text-emphasis-color: rgb(153, 153, 153); transform-origin: 31.1328px 11px; width: 62.2656px; -webkit-text-fill-color: rgb(153, 153, 153); -webkit-text-stroke-color: rgb(153, 153, 153);">Ship Orders<br style="border-block-color: rgb(153, 153, 153); border-color: rgb(153, 153, 153); border-collapse: collapse; border-inline-color: rgb(153, 153, 153); caret-color: rgb(153, 153, 153); color: rgb(153, 153, 153); column-rule-color: rgb(153, 153, 153); cursor: pointer; font-size: 10px; line-height: 11px; list-style-type: none; outline-color: rgb(153, 153, 153); text-align: left; text-decoration: none solid rgb(153, 153, 153); text-emphasis-color: rgb(153, 153, 153); -webkit-text-fill-color: rgb(153, 153, 153); -webkit-text-stroke-color: rgb(153, 153, 153);"> Internationally</span></a></td>
    <td class="navFooterDescSpacer" style="block-size: 58.9688px; border-block-color: rgb(221, 221, 221); border-color: rgb(221, 221, 221); border-collapse: collapse; border-inline-color: rgb(221, 221, 221); caret-color: rgb(221, 221, 221); color: rgb(221, 221, 221); column-rule-color: rgb(221, 221, 221); height: 58.9688px; inline-size: 40px; line-height: 15.6px; outline-color: rgb(221, 221, 221); padding-block: 0px; padding: 0px 10px; padding-inline: 10px; perspective-origin: 20px 29.4844px; text-align: center; text-decoration: none solid rgb(221, 221, 221); text-emphasis-color: rgb(221, 221, 221); text-wrap-mode: nowrap; transform-origin: 20px 29.4844px; width: 40px; -webkit-text-fill-color: rgb(221, 221, 221); -webkit-text-stroke-color: rgb(221, 221, 221);"></td>
    <td class="navFooterDescItem" style="block-size: 58.9688px; border-block-color: rgb(221, 221, 221); border-color: rgb(221, 221, 221); border-collapse: collapse; border-inline-color: rgb(221, 221, 221); caret-color: rgb(221, 221, 221); color: rgb(221, 221, 221); column-rule-color: rgb(221, 221, 221); font-size: 11px; height: 58.9688px; inline-size: 102.312px; line-height: 12.65px; outline-color: rgb(221, 221, 221); padding-block: 0px; padding: 0px 8.25px; padding-inline: 8.25px; perspective-origin: 51.1562px 29.4844px; text-align: left; text-decoration: none solid rgb(221, 221, 221); text-emphasis-color: rgb(221, 221, 221); text-wrap-mode: nowrap; transform-origin: 51.1562px 29.4844px; width: 102.312px; -webkit-text-fill-color: rgb(221, 221, 221); -webkit-text-stroke-color: rgb(221, 221, 221);"><a href="http://www.amazon.com/services?_encoding=UTF8&amp;ref_=footer_services" class="nav_a" style="border-block-color: rgb(221, 221, 221); border-color: rgb(221, 221, 221); border-collapse: collapse; border-inline-color: rgb(221, 221, 221); caret-color: rgb(221, 221, 221); color: rgb(221, 221, 221); column-rule-color: rgb(221, 221, 221); cursor: pointer; font-size: 11px; line-height: 12.65px; outline-color: rgb(221, 221, 221); text-align: left; text-decoration: none solid rgb(221, 221, 221); text-emphasis-color: rgb(221, 221, 221); -webkit-text-fill-color: rgb(221, 221, 221); -webkit-text-stroke-color: rgb(221, 221, 221);">Home Services<br style="border-block-color: rgb(221, 221, 221); border-color: rgb(221, 221, 221); border-collapse: collapse; border-inline-color: rgb(221, 221, 221); caret-color: rgb(221, 221, 221); color: rgb(221, 221, 221); column-rule-color: rgb(221, 221, 221); cursor: pointer; font-size: 11px; line-height: 12.65px; outline-color: rgb(221, 221, 221); text-align: left; text-decoration: none solid rgb(221, 221, 221); text-emphasis-color: rgb(221, 221, 221); -webkit-text-fill-color: rgb(221, 221, 221); -webkit-text-stroke-color: rgb(221, 221, 221);"> <span class="navFooterDescText" style="block-size: 33px; border-block-color: rgb(153, 153, 153); border-color: rgb(153, 153, 153); border-collapse: collapse; border-inline-color: rgb(153, 153, 153); caret-color: rgb(153, 153, 153); color: rgb(153, 153, 153); column-rule-color: rgb(153, 153, 153); cursor: pointer; display: inline-block; font-size: 10px; height: 33px; inline-size: 85.8125px; line-height: 11px; list-style-type: none; outline-color: rgb(153, 153, 153); perspective-origin: 42.9062px 16.5px; text-align: left; text-decoration: none solid rgb(153, 153, 153); text-emphasis-color: rgb(153, 153, 153); transform-origin: 42.9062px 16.5px; width: 85.8125px; -webkit-text-fill-color: rgb(153, 153, 153); -webkit-text-stroke-color: rgb(153, 153, 153);">Experienced Pros<br style="border-block-color: rgb(153, 153, 153); border-color: rgb(153, 153, 153); border-collapse: collapse; border-inline-color: rgb(153, 153, 153); caret-color: rgb(153, 153, 153); color: rgb(153, 153, 153); column-rule-color: rgb(153, 153, 153); cursor: pointer; font-size: 10px; line-height: 11px; list-style-type: none; outline-color: rgb(153, 153, 153); text-align: left; text-decoration: none solid rgb(153, 153, 153); text-emphasis-color: rgb(153, 153, 153); -webkit-text-fill-color: rgb(153, 153, 153); -webkit-text-stroke-color: rgb(153, 153, 153);"> Happiness Guarantee</span></a></td>
    <td class="navFooterDescSpacer" style="block-size: 58.9688px; border-block-color: rgb(221, 221, 221); border-color: rgb(221, 221, 221); border-collapse: collapse; border-inline-color: rgb(221, 221, 221); caret-color: rgb(221, 221, 221); color: rgb(221, 221, 221); column-rule-color: rgb(221, 221, 221); height: 58.9688px; inline-size: 40px; line-height: 15.6px; outline-color: rgb(221, 221, 221); padding-block: 0px; padding: 0px 10px; padding-inline: 10px; perspective-origin: 20px 29.4844px; text-align: center; text-decoration: none solid rgb(221, 221, 221); text-emphasis-color: rgb(221, 221, 221); text-wrap-mode: nowrap; transform-origin: 20px 29.4844px; width: 40px; -webkit-text-fill-color: rgb(221, 221, 221); -webkit-text-stroke-color: rgb(221, 221, 221);"></td>
    <td class="navFooterDescItem" style="block-size: 58.9688px; border-block-color: rgb(221, 221, 221); border-color: rgb(221, 221, 221); border-collapse: collapse; border-inline-color: rgb(221, 221, 221); caret-color: rgb(221, 221, 221); color: rgb(221, 221, 221); column-rule-color: rgb(221, 221, 221); font-size: 11px; height: 58.9688px; inline-size: 94.375px; line-height: 12.65px; outline-color: rgb(221, 221, 221); padding-block: 0px; padding: 0px 8.25px; padding-inline: 8.25px; perspective-origin: 47.1875px 29.4844px; text-align: left; text-decoration: none solid rgb(221, 221, 221); text-emphasis-color: rgb(221, 221, 221); text-wrap-mode: nowrap; transform-origin: 47.1875px 29.4844px; width: 94.375px; -webkit-text-fill-color: rgb(221, 221, 221); -webkit-text-stroke-color: rgb(221, 221, 221);"><a href="https://ignite.amazon.com/?ref=amazon_footer_ignite" class="nav_a" style="border-block-color: rgb(221, 221, 221); border-color: rgb(221, 221, 221); border-collapse: collapse; border-inline-color: rgb(221, 221, 221); caret-color: rgb(221, 221, 221); color: rgb(221, 221, 221); column-rule-color: rgb(221, 221, 221); cursor: pointer; font-size: 11px; line-height: 12.65px; outline-color: rgb(221, 221, 221); text-align: left; text-decoration: none solid rgb(221, 221, 221); text-emphasis-color: rgb(221, 221, 221); -webkit-text-fill-color: rgb(221, 221, 221); -webkit-text-stroke-color: rgb(221, 221, 221);">Amazon Ignite<br style="border-block-color: rgb(221, 221, 221); border-color: rgb(221, 221, 221); border-collapse: collapse; border-inline-color: rgb(221, 221, 221); caret-color: rgb(221, 221, 221); color: rgb(221, 221, 221); column-rule-color: rgb(221, 221, 221); cursor: pointer; font-size: 11px; line-height: 12.65px; outline-color: rgb(221, 221, 221); text-align: left; text-decoration: none solid rgb(221, 221, 221); text-emphasis-color: rgb(221, 221, 221); -webkit-text-fill-color: rgb(221, 221, 221); -webkit-text-stroke-color: rgb(221, 221, 221);"> <span class="navFooterDescText" style="block-size: 44px; border-block-color: rgb(153, 153, 153); border-color: rgb(153, 153, 153); border-collapse: collapse; border-inline-color: rgb(153, 153, 153); caret-color: rgb(153, 153, 153); color: rgb(153, 153, 153); column-rule-color: rgb(153, 153, 153); cursor: pointer; display: inline-block; font-size: 10px; height: 44px; inline-size: 77.875px; line-height: 11px; list-style-type: none; outline-color: rgb(153, 153, 153); perspective-origin: 38.9375px 22px; text-align: left; text-decoration: none solid rgb(153, 153, 153); text-emphasis-color: rgb(153, 153, 153); transform-origin: 38.9375px 22px; width: 77.875px; -webkit-text-fill-color: rgb(153, 153, 153); -webkit-text-stroke-color: rgb(153, 153, 153);">Sell your original<br style="border-block-color: rgb(153, 153, 153); border-color: rgb(153, 153, 153); border-collapse: collapse; border-inline-color: rgb(153, 153, 153); caret-color: rgb(153, 153, 153); color: rgb(153, 153, 153); column-rule-color: rgb(153, 153, 153); cursor: pointer; font-size: 10px; line-height: 11px; list-style-type: none; outline-color: rgb(153, 153, 153); text-align: left; text-decoration: none solid rgb(153, 153, 153); text-emphasis-color: rgb(153, 153, 153); -webkit-text-fill-color: rgb(153, 153, 153); -webkit-text-stroke-color: rgb(153, 153, 153);"> Digital Educational<br style="border-block-color: rgb(153, 153, 153); border-color: rgb(153, 153, 153); border-collapse: collapse; border-inline-color: rgb(153, 153, 153); caret-color: rgb(153, 153, 153); color: rgb(153, 153, 153); column-rule-color: rgb(153, 153, 153); cursor: pointer; font-size: 10px; line-height: 11px; list-style-type: none; outline-color: rgb(153, 153, 153); text-align: left; text-decoration: none solid rgb(153, 153, 153); text-emphasis-color: rgb(153, 153, 153); -webkit-text-fill-color: rgb(153, 153, 153); -webkit-text-stroke-color: rgb(153, 153, 153);"> Resources</span></a></td>
    <td class="navFooterDescSpacer" style="block-size: 58.9688px; border-block-color: rgb(221, 221, 221); border-color: rgb(221, 221, 221); border-collapse: collapse; border-inline-color: rgb(221, 221, 221); caret-color: rgb(221, 221, 221); color: rgb(221, 221, 221); column-rule-color: rgb(221, 221, 221); height: 58.9688px; inline-size: 40px; line-height: 15.6px; outline-color: rgb(221, 221, 221); padding-block: 0px; padding: 0px 10px; padding-inline: 10px; perspective-origin: 20px 29.4844px; text-align: center; text-decoration: none solid rgb(221, 221, 221); text-emphasis-color: rgb(221, 221, 221); text-wrap-mode: nowrap; transform-origin: 20px 29.4844px; width: 40px; -webkit-text-fill-color: rgb(221, 221, 221); -webkit-text-stroke-color: rgb(221, 221, 221);"></td>
    <td class="navFooterDescItem" style="block-size: 58.9688px; border-block-color: rgb(221, 221, 221); border-color: rgb(221, 221, 221); border-collapse: collapse; border-inline-color: rgb(221, 221, 221); caret-color: rgb(221, 221, 221); color: rgb(221, 221, 221); column-rule-color: rgb(221, 221, 221); font-size: 11px; height: 58.9688px; inline-size: 86.5312px; line-height: 12.65px; outline-color: rgb(221, 221, 221); padding-block: 0px; padding: 0px 8.25px; padding-inline: 8.25px; perspective-origin: 43.2656px 29.4844px; text-align: left; text-decoration: none solid rgb(221, 221, 221); text-emphasis-color: rgb(221, 221, 221); text-wrap-mode: nowrap; transform-origin: 43.2656px 29.4844px; width: 86.5312px; -webkit-text-fill-color: rgb(221, 221, 221); -webkit-text-stroke-color: rgb(221, 221, 221);"><a href="https://aws.amazon.com/what-is-cloud-computing/?sc_channel=EL&amp;sc_campaign=amazonfooter" class="nav_a" style="border-block-color: rgb(221, 221, 221); border-color: rgb(221, 221, 221); border-collapse: collapse; border-inline-color: rgb(221, 221, 221); caret-color: rgb(221, 221, 221); color: rgb(221, 221, 221); column-rule-color: rgb(221, 221, 221); cursor: pointer; font-size: 11px; line-height: 12.65px; outline-color: rgb(221, 221, 221); text-align: left; text-decoration: none solid rgb(221, 221, 221); text-emphasis-color: rgb(221, 221, 221); -webkit-text-fill-color: rgb(221, 221, 221); -webkit-text-stroke-color: rgb(221, 221, 221);">Amazon Web Services<br style="border-block-color: rgb(221, 221, 221); border-color: rgb(221, 221, 221); border-collapse: collapse; border-inline-color: rgb(221, 221, 221); caret-color: rgb(221, 221, 221); color: rgb(221, 221, 221); column-rule-color: rgb(221, 221, 221); cursor: pointer; font-size: 11px; line-height: 12.65px; outline-color: rgb(221, 221, 221); text-align: left; text-decoration: none solid rgb(221, 221, 221); text-emphasis-color: rgb(221, 221, 221); -webkit-text-fill-color: rgb(221, 221, 221); -webkit-text-stroke-color: rgb(221, 221, 221);"> <span class="navFooterDescText" style="block-size: 33px; border-block-color: rgb(153, 153, 153); border-color: rgb(153, 153, 153); border-collapse: collapse; border-inline-color: rgb(153, 153, 153); caret-color: rgb(153, 153, 153); color: rgb(153, 153, 153); column-rule-color: rgb(153, 153, 153); cursor: pointer; display: inline-block; font-size: 10px; height: 33px; inline-size: 70.0312px; line-height: 11px; list-style-type: none; outline-color: rgb(153, 153, 153); perspective-origin: 35.0156px 16.5px; text-align: left; text-decoration: none solid rgb(153, 153, 153); text-emphasis-color: rgb(153, 153, 153); transform-origin: 35.0156px 16.5px; width: 70.0312px; -webkit-text-fill-color: rgb(153, 153, 153); -webkit-text-stroke-color: rgb(153, 153, 153);">Scalable Cloud<br style="border-block-color: rgb(153, 153, 153); border-color: rgb(153, 153, 153); border-collapse: collapse; border-inline-color: rgb(153, 153, 153); caret-color: rgb(153, 153, 153); color: rgb(153, 153, 153); column-rule-color: rgb(153, 153, 153); cursor: pointer; font-size: 10px; line-height: 11px; list-style-type: none; outline-color: rgb(153, 153, 153); text-align: left; text-decoration: none solid rgb(153, 153, 153); text-emphasis-color: rgb(153, 153, 153); -webkit-text-fill-color: rgb(153, 153, 153); -webkit-text-stroke-color: rgb(153, 153, 153);"> Computing Services</span></a></td>
</tr>
<tr style="block-size: 15.5938px; border-block-color: rgb(128, 128, 128); border-color: rgb(128, 128, 128); border-collapse: collapse; border-inline-color: rgb(128, 128, 128); caret-color: rgb(221, 221, 221); color: rgb(221, 221, 221); column-rule-color: rgb(221, 221, 221); font-size: 12px; height: 15.5938px; inline-size: 1000px; line-height: 18px; outline-color: rgb(221, 221, 221); perspective-origin: 500px 7.79688px; text-align: center; text-decoration: none solid rgb(221, 221, 221); text-emphasis-color: rgb(221, 221, 221); text-wrap-mode: nowrap; transform-origin: 500px 7.79688px; vertical-align: middle; width: 1000px; -webkit-text-fill-color: rgb(221, 221, 221); -webkit-text-stroke-color: rgb(221, 221, 221);"><td style="block-size: 15.5938px; border-block-color: rgb(221, 221, 221); border-color: rgb(221, 221, 221); border-collapse: collapse; border-inline-color: rgb(221, 221, 221); caret-color: rgb(221, 221, 221); color: rgb(221, 221, 221); column-rule-color: rgb(221, 221, 221); height: 15.5938px; inline-size: 113.297px; line-height: 15.6px; outline-color: rgb(221, 221, 221); padding-block: 0px; padding: 0px 10px; padding-inline: 10px; perspective-origin: 56.6406px 7.79688px; text-align: center; text-decoration: none solid rgb(221, 221, 221); text-emphasis-color: rgb(221, 221, 221); text-wrap-mode: nowrap; transform-origin: 56.6484px 7.79688px; width: 113.297px; -webkit-text-fill-color: rgb(221, 221, 221); -webkit-text-stroke-color: rgb(221, 221, 221);">&nbsp;</td></tr>
<tr style="block-size: 46.3125px; border-block-color: rgb(128, 128, 128); border-color: rgb(128, 128, 128); border-collapse: collapse; border-inline-color: rgb(128, 128, 128); caret-color: rgb(221, 221, 221); color: rgb(221, 221, 221); column-rule-color: rgb(221, 221, 221); font-size: 12px; height: 46.3125px; inline-size: 1000px; line-height: 18px; outline-color: rgb(221, 221, 221); perspective-origin: 500px 23.1562px; text-align: center; text-decoration: none solid rgb(221, 221, 221); text-emphasis-color: rgb(221, 221, 221); text-wrap-mode: nowrap; transform-origin: 500px 23.1562px; vertical-align: middle; width: 1000px; -webkit-text-fill-color: rgb(221, 221, 221); -webkit-text-stroke-color: rgb(221, 221, 221);">
    <td class="navFooterDescItem" style="block-size: 46.3125px; border-block-color: rgb(221, 221, 221); border-color: rgb(221, 221, 221); border-collapse: collapse; border-inline-color: rgb(221, 221, 221); caret-color: rgb(221, 221, 221); color: rgb(221, 221, 221); column-rule-color: rgb(221, 221, 221); font-size: 11px; height: 46.3125px; inline-size: 113.297px; line-height: 12.65px; outline-color: rgb(221, 221, 221); padding-block: 0px; padding: 0px 8.25px; padding-inline: 8.25px; perspective-origin: 56.6406px 23.1562px; text-align: left; text-decoration: none solid rgb(221, 221, 221); text-emphasis-color: rgb(221, 221, 221); text-wrap-mode: nowrap; transform-origin: 56.6484px 23.1562px; width: 113.297px; -webkit-text-fill-color: rgb(221, 221, 221); -webkit-text-stroke-color: rgb(221, 221, 221);"><a href="https://www.audible.com/" class="nav_a" style="border-block-color: rgb(221, 221, 221); border-color: rgb(221, 221, 221); border-collapse: collapse; border-inline-color: rgb(221, 221, 221); caret-color: rgb(221, 221, 221); color: rgb(221, 221, 221); column-rule-color: rgb(221, 221, 221); cursor: pointer; font-size: 11px; line-height: 12.65px; outline-color: rgb(221, 221, 221); text-align: left; text-decoration: none solid rgb(221, 221, 221); text-emphasis-color: rgb(221, 221, 221); -webkit-text-fill-color: rgb(221, 221, 221); -webkit-text-stroke-color: rgb(221, 221, 221);">Audible<br style="border-block-color: rgb(221, 221, 221); border-color: rgb(221, 221, 221); border-collapse: collapse; border-inline-color: rgb(221, 221, 221); caret-color: rgb(221, 221, 221); color: rgb(221, 221, 221); column-rule-color: rgb(221, 221, 221); cursor: pointer; font-size: 11px; line-height: 12.65px; outline-color: rgb(221, 221, 221); text-align: left; text-decoration: none solid rgb(221, 221, 221); text-emphasis-color: rgb(221, 221, 221); -webkit-text-fill-color: rgb(221, 221, 221); -webkit-text-stroke-color: rgb(221, 221, 221);"> <span class="navFooterDescText" style="block-size: 33px; border-block-color: rgb(153, 153, 153); border-color: rgb(153, 153, 153); border-collapse: collapse; border-inline-color: rgb(153, 153, 153); caret-color: rgb(153, 153, 153); color: rgb(153, 153, 153); column-rule-color: rgb(153, 153, 153); cursor: pointer; display: inline-block; font-size: 10px; height: 33px; inline-size: 96.7969px; line-height: 11px; list-style-type: none; outline-color: rgb(153, 153, 153); perspective-origin: 48.3906px 16.5px; text-align: left; text-decoration: none solid rgb(153, 153, 153); text-emphasis-color: rgb(153, 153, 153); transform-origin: 48.3984px 16.5px; width: 96.7969px; -webkit-text-fill-color: rgb(153, 153, 153); -webkit-text-stroke-color: rgb(153, 153, 153);">Listen to Books &amp; Original<br style="border-block-color: rgb(153, 153, 153); border-color: rgb(153, 153, 153); border-collapse: collapse; border-inline-color: rgb(153, 153, 153); caret-color: rgb(153, 153, 153); color: rgb(153, 153, 153); column-rule-color: rgb(153, 153, 153); cursor: pointer; font-size: 10px; line-height: 11px; list-style-type: none; outline-color: rgb(153, 153, 153); text-align: left; text-decoration: none solid rgb(153, 153, 153); text-emphasis-color: rgb(153, 153, 153); -webkit-text-fill-color: rgb(153, 153, 153); -webkit-text-stroke-color: rgb(153, 153, 153);"> Audio Performances</span></a></td>
    <td class="navFooterDescSpacer" style="block-size: 46.3125px; border-block-color: rgb(221, 221, 221); border-color: rgb(221, 221, 221); border-collapse: collapse; border-inline-color: rgb(221, 221, 221); caret-color: rgb(221, 221, 221); color: rgb(221, 221, 221); column-rule-color: rgb(221, 221, 221); height: 46.3125px; inline-size: 40px; line-height: 15.6px; outline-color: rgb(221, 221, 221); padding-block: 0px; padding: 0px 10px; padding-inline: 10px; perspective-origin: 20px 23.1562px; text-align: center; text-decoration: none solid rgb(221, 221, 221); text-emphasis-color: rgb(221, 221, 221); text-wrap-mode: nowrap; transform-origin: 20px 23.1562px; width: 40px; -webkit-text-fill-color: rgb(221, 221, 221); -webkit-text-stroke-color: rgb(221, 221, 221);"></td>
    <td class="navFooterDescItem" style="block-size: 46.3125px; border-block-color: rgb(221, 221, 221); border-color: rgb(221, 221, 221); border-collapse: collapse; border-inline-color: rgb(221, 221, 221); caret-color: rgb(221, 221, 221); color: rgb(221, 221, 221); column-rule-color: rgb(221, 221, 221); font-size: 11px; height: 46.3125px; inline-size: 147.266px; line-height: 12.65px; outline-color: rgb(221, 221, 221); padding-block: 0px; padding: 0px 8.25px; padding-inline: 8.25px; perspective-origin: 73.625px 23.1562px; text-align: left; text-decoration: none solid rgb(221, 221, 221); text-emphasis-color: rgb(221, 221, 221); text-wrap-mode: nowrap; transform-origin: 73.6328px 23.1562px; width: 147.266px; -webkit-text-fill-color: rgb(221, 221, 221); -webkit-text-stroke-color: rgb(221, 221, 221);"><a href="https://www.bookdepository.com/" class="nav_a" style="border-block-color: rgb(221, 221, 221); border-color: rgb(221, 221, 221); border-collapse: collapse; border-inline-color: rgb(221, 221, 221); caret-color: rgb(221, 221, 221); color: rgb(221, 221, 221); column-rule-color: rgb(221, 221, 221); cursor: pointer; font-size: 11px; line-height: 12.65px; outline-color: rgb(221, 221, 221); text-align: left; text-decoration: none solid rgb(221, 221, 221); text-emphasis-color: rgb(221, 221, 221); -webkit-text-fill-color: rgb(221, 221, 221); -webkit-text-stroke-color: rgb(221, 221, 221);">Book Depository<br style="border-block-color: rgb(221, 221, 221); border-color: rgb(221, 221, 221); border-collapse: collapse; border-inline-color: rgb(221, 221, 221); caret-color: rgb(221, 221, 221); color: rgb(221, 221, 221); column-rule-color: rgb(221, 221, 221); cursor: pointer; font-size: 11px; line-height: 12.65px; outline-color: rgb(221, 221, 221); text-align: left; text-decoration: none solid rgb(221, 221, 221); text-emphasis-color: rgb(221, 221, 221); -webkit-text-fill-color: rgb(221, 221, 221); -webkit-text-stroke-color: rgb(221, 221, 221);"> <span class="navFooterDescText" style="block-size: 22px; border-block-color: rgb(153, 153, 153); border-color: rgb(153, 153, 153); border-collapse: collapse; border-inline-color: rgb(153, 153, 153); caret-color: rgb(153, 153, 153); color: rgb(153, 153, 153); column-rule-color: rgb(153, 153, 153); cursor: pointer; display: inline-block; font-size: 10px; height: 22px; inline-size: 85.4062px; line-height: 11px; list-style-type: none; outline-color: rgb(153, 153, 153); perspective-origin: 42.7031px 11px; text-align: left; text-decoration: none solid rgb(153, 153, 153); text-emphasis-color: rgb(153, 153, 153); transform-origin: 42.7031px 11px; width: 85.4062px; -webkit-text-fill-color: rgb(153, 153, 153); -webkit-text-stroke-color: rgb(153, 153, 153);">Books With Free<br style="border-block-color: rgb(153, 153, 153); border-color: rgb(153, 153, 153); border-collapse: collapse; border-inline-color: rgb(153, 153, 153); caret-color: rgb(153, 153, 153); color: rgb(153, 153, 153); column-rule-color: rgb(153, 153, 153); cursor: pointer; font-size: 10px; line-height: 11px; list-style-type: none; outline-color: rgb(153, 153, 153); text-align: left; text-decoration: none solid rgb(153, 153, 153); text-emphasis-color: rgb(153, 153, 153); -webkit-text-fill-color: rgb(153, 153, 153); -webkit-text-stroke-color: rgb(153, 153, 153);"> Delivery Worldwide</span></a></td>
    <td class="navFooterDescSpacer" style="block-size: 46.3125px; border-block-color: rgb(221, 221, 221); border-color: rgb(221, 221, 221); border-collapse: collapse; border-inline-color: rgb(221, 221, 221); caret-color: rgb(221, 221, 221); color: rgb(221, 221, 221); column-rule-color: rgb(221, 221, 221); height: 46.3125px; inline-size: 40px; line-height: 15.6px; outline-color: rgb(221, 221, 221); padding-block: 0px; padding: 0px 10px; padding-inline: 10px; perspective-origin: 20px 23.1562px; text-align: center; text-decoration: none solid rgb(221, 221, 221); text-emphasis-color: rgb(221, 221, 221); text-wrap-mode: nowrap; transform-origin: 20px 23.1562px; width: 40px; -webkit-text-fill-color: rgb(221, 221, 221); -webkit-text-stroke-color: rgb(221, 221, 221);"></td>
    <td class="navFooterDescItem" style="block-size: 46.3125px; border-block-color: rgb(221, 221, 221); border-color: rgb(221, 221, 221); border-collapse: collapse; border-inline-color: rgb(221, 221, 221); caret-color: rgb(221, 221, 221); color: rgb(221, 221, 221); column-rule-color: rgb(221, 221, 221); font-size: 11px; height: 46.3125px; inline-size: 96.2969px; line-height: 12.65px; outline-color: rgb(221, 221, 221); padding-block: 0px; padding: 0px 8.25px; padding-inline: 8.25px; perspective-origin: 48.1406px 23.1562px; text-align: left; text-decoration: none solid rgb(221, 221, 221); text-emphasis-color: rgb(221, 221, 221); text-wrap-mode: nowrap; transform-origin: 48.1484px 23.1562px; width: 96.2969px; -webkit-text-fill-color: rgb(221, 221, 221); -webkit-text-stroke-color: rgb(221, 221, 221);"><a href="https://www.boxofficemojo.com/?ref_=amzn_nav_ftr" class="nav_a" style="border-block-color: rgb(221, 221, 221); border-color: rgb(221, 221, 221); border-collapse: collapse; border-inline-color: rgb(221, 221, 221); caret-color: rgb(221, 221, 221); color: rgb(221, 221, 221); column-rule-color: rgb(221, 221, 221); cursor: pointer; font-size: 11px; line-height: 12.65px; outline-color: rgb(221, 221, 221); text-align: left; text-decoration: none solid rgb(221, 221, 221); text-emphasis-color: rgb(221, 221, 221); -webkit-text-fill-color: rgb(221, 221, 221); -webkit-text-stroke-color: rgb(221, 221, 221);">Box Office Mojo<br style="border-block-color: rgb(221, 221, 221); border-color: rgb(221, 221, 221); border-collapse: collapse; border-inline-color: rgb(221, 221, 221); caret-color: rgb(221, 221, 221); color: rgb(221, 221, 221); column-rule-color: rgb(221, 221, 221); cursor: pointer; font-size: 11px; line-height: 12.65px; outline-color: rgb(221, 221, 221); text-align: left; text-decoration: none solid rgb(221, 221, 221); text-emphasis-color: rgb(221, 221, 221); -webkit-text-fill-color: rgb(221, 221, 221); -webkit-text-stroke-color: rgb(221, 221, 221);"> <span class="navFooterDescText" style="block-size: 22px; border-block-color: rgb(153, 153, 153); border-color: rgb(153, 153, 153); border-collapse: collapse; border-inline-color: rgb(153, 153, 153); caret-color: rgb(153, 153, 153); color: rgb(153, 153, 153); column-rule-color: rgb(153, 153, 153); cursor: pointer; display: inline-block; font-size: 10px; height: 22px; inline-size: 69.8594px; line-height: 11px; list-style-type: none; outline-color: rgb(153, 153, 153); perspective-origin: 34.9219px 11px; text-align: left; text-decoration: none solid rgb(153, 153, 153); text-emphasis-color: rgb(153, 153, 153); transform-origin: 34.9297px 11px; width: 69.8594px; -webkit-text-fill-color: rgb(153, 153, 153); -webkit-text-stroke-color: rgb(153, 153, 153);">Find Movie<br style="border-block-color: rgb(153, 153, 153); border-color: rgb(153, 153, 153); border-collapse: collapse; border-inline-color: rgb(153, 153, 153); caret-color: rgb(153, 153, 153); color: rgb(153, 153, 153); column-rule-color: rgb(153, 153, 153); cursor: pointer; font-size: 10px; line-height: 11px; list-style-type: none; outline-color: rgb(153, 153, 153); text-align: left; text-decoration: none solid rgb(153, 153, 153); text-emphasis-color: rgb(153, 153, 153); -webkit-text-fill-color: rgb(153, 153, 153); -webkit-text-stroke-color: rgb(153, 153, 153);"> Box Office Data</span></a></td>
    <td class="navFooterDescSpacer" style="block-size: 46.3125px; border-block-color: rgb(221, 221, 221); border-color: rgb(221, 221, 221); border-collapse: collapse; border-inline-color: rgb(221, 221, 221); caret-color: rgb(221, 221, 221); color: rgb(221, 221, 221); column-rule-color: rgb(221, 221, 221); height: 46.3125px; inline-size: 40px; line-height: 15.6px; outline-color: rgb(221, 221, 221); padding-block: 0px; padding: 0px 10px; padding-inline: 10px; perspective-origin: 20px 23.1562px; text-align: center; text-decoration: none solid rgb(221, 221, 221); text-emphasis-color: rgb(221, 221, 221); text-wrap-mode: nowrap; transform-origin: 20px 23.1562px; width: 40px; -webkit-text-fill-color: rgb(221, 221, 221); -webkit-text-stroke-color: rgb(221, 221, 221);"></td>
    <td class="navFooterDescItem" style="block-size: 46.3125px; border-block-color: rgb(221, 221, 221); border-color: rgb(221, 221, 221); border-collapse: collapse; border-inline-color: rgb(221, 221, 221); caret-color: rgb(221, 221, 221); color: rgb(221, 221, 221); column-rule-color: rgb(221, 221, 221); font-size: 11px; height: 46.3125px; inline-size: 119.922px; line-height: 12.65px; outline-color: rgb(221, 221, 221); padding-block: 0px; padding: 0px 8.25px; padding-inline: 8.25px; perspective-origin: 59.9531px 23.1562px; text-align: left; text-decoration: none solid rgb(221, 221, 221); text-emphasis-color: rgb(221, 221, 221); text-wrap-mode: nowrap; transform-origin: 59.9609px 23.1562px; width: 119.922px; -webkit-text-fill-color: rgb(221, 221, 221); -webkit-text-stroke-color: rgb(221, 221, 221);"><a href="https://www.comixology.com/" class="nav_a" style="border-block-color: rgb(221, 221, 221); border-color: rgb(221, 221, 221); border-collapse: collapse; border-inline-color: rgb(221, 221, 221); caret-color: rgb(221, 221, 221); color: rgb(221, 221, 221); column-rule-color: rgb(221, 221, 221); cursor: pointer; font-size: 11px; line-height: 12.65px; outline-color: rgb(221, 221, 221); text-align: left; text-decoration: none solid rgb(221, 221, 221); text-emphasis-color: rgb(221, 221, 221); -webkit-text-fill-color: rgb(221, 221, 221); -webkit-text-stroke-color: rgb(221, 221, 221);">ComiXology<br style="border-block-color: rgb(221, 221, 221); border-color: rgb(221, 221, 221); border-collapse: collapse; border-inline-color: rgb(221, 221, 221); caret-color: rgb(221, 221, 221); color: rgb(221, 221, 221); column-rule-color: rgb(221, 221, 221); cursor: pointer; font-size: 11px; line-height: 12.65px; outline-color: rgb(221, 221, 221); text-align: left; text-decoration: none solid rgb(221, 221, 221); text-emphasis-color: rgb(221, 221, 221); -webkit-text-fill-color: rgb(221, 221, 221); -webkit-text-stroke-color: rgb(221, 221, 221);"> <span class="navFooterDescText" style="block-size: 22px; border-block-color: rgb(153, 153, 153); border-color: rgb(153, 153, 153); border-collapse: collapse; border-inline-color: rgb(153, 153, 153); caret-color: rgb(153, 153, 153); color: rgb(153, 153, 153); column-rule-color: rgb(153, 153, 153); cursor: pointer; display: inline-block; font-size: 10px; height: 22px; inline-size: 63.9062px; line-height: 11px; list-style-type: none; outline-color: rgb(153, 153, 153); perspective-origin: 31.9531px 11px; text-align: left; text-decoration: none solid rgb(153, 153, 153); text-emphasis-color: rgb(153, 153, 153); transform-origin: 31.9531px 11px; width: 63.9062px; -webkit-text-fill-color: rgb(153, 153, 153); -webkit-text-stroke-color: rgb(153, 153, 153);">Thousands of<br style="border-block-color: rgb(153, 153, 153); border-color: rgb(153, 153, 153); border-collapse: collapse; border-inline-color: rgb(153, 153, 153); caret-color: rgb(153, 153, 153); color: rgb(153, 153, 153); column-rule-color: rgb(153, 153, 153); cursor: pointer; font-size: 10px; line-height: 11px; list-style-type: none; outline-color: rgb(153, 153, 153); text-align: left; text-decoration: none solid rgb(153, 153, 153); text-emphasis-color: rgb(153, 153, 153); -webkit-text-fill-color: rgb(153, 153, 153); -webkit-text-stroke-color: rgb(153, 153, 153);"> Digital Comics</span></a></td>
    <td class="navFooterDescSpacer" style="block-size: 46.3125px; border-block-color: rgb(221, 221, 221); border-color: rgb(221, 221, 221); border-collapse: collapse; border-inline-color: rgb(221, 221, 221); caret-color: rgb(221, 221, 221); color: rgb(221, 221, 221); column-rule-color: rgb(221, 221, 221); height: 46.3125px; inline-size: 40px; line-height: 15.6px; outline-color: rgb(221, 221, 221); padding-block: 0px; padding: 0px 10px; padding-inline: 10px; perspective-origin: 20px 23.1562px; text-align: center; text-decoration: none solid rgb(221, 221, 221); text-emphasis-color: rgb(221, 221, 221); text-wrap-mode: nowrap; transform-origin: 20px 23.1562px; width: 40px; -webkit-text-fill-color: rgb(221, 221, 221); -webkit-text-stroke-color: rgb(221, 221, 221);"></td>
    <td class="navFooterDescItem" style="block-size: 46.3125px; border-block-color: rgb(221, 221, 221); border-color: rgb(221, 221, 221); border-collapse: collapse; border-inline-color: rgb(221, 221, 221); caret-color: rgb(221, 221, 221); color: rgb(221, 221, 221); column-rule-color: rgb(221, 221, 221); font-size: 11px; height: 46.3125px; inline-size: 102.312px; line-height: 12.65px; outline-color: rgb(221, 221, 221); padding-block: 0px; padding: 0px 8.25px; padding-inline: 8.25px; perspective-origin: 51.1562px 23.1562px; text-align: left; text-decoration: none solid rgb(221, 221, 221); text-emphasis-color: rgb(221, 221, 221); text-wrap-mode: nowrap; transform-origin: 51.1562px 23.1562px; width: 102.312px; -webkit-text-fill-color: rgb(221, 221, 221); -webkit-text-stroke-color: rgb(221, 221, 221);"><a href="https://www.dpreview.com/" class="nav_a" style="border-block-color: rgb(221, 221, 221); border-color: rgb(221, 221, 221); border-collapse: collapse; border-inline-color: rgb(221, 221, 221); caret-color: rgb(221, 221, 221); color: rgb(221, 221, 221); column-rule-color: rgb(221, 221, 221); cursor: pointer; font-size: 11px; line-height: 12.65px; outline-color: rgb(221, 221, 221); text-align: left; text-decoration: none solid rgb(221, 221, 221); text-emphasis-color: rgb(221, 221, 221); -webkit-text-fill-color: rgb(221, 221, 221); -webkit-text-stroke-color: rgb(221, 221, 221);">DPReview<br style="border-block-color: rgb(221, 221, 221); border-color: rgb(221, 221, 221); border-collapse: collapse; border-inline-color: rgb(221, 221, 221); caret-color: rgb(221, 221, 221); color: rgb(221, 221, 221); column-rule-color: rgb(221, 221, 221); cursor: pointer; font-size: 11px; line-height: 12.65px; outline-color: rgb(221, 221, 221); text-align: left; text-decoration: none solid rgb(221, 221, 221); text-emphasis-color: rgb(221, 221, 221); -webkit-text-fill-color: rgb(221, 221, 221); -webkit-text-stroke-color: rgb(221, 221, 221);"> <span class="navFooterDescText" style="block-size: 22px; border-block-color: rgb(153, 153, 153); border-color: rgb(153, 153, 153); border-collapse: collapse; border-inline-color: rgb(153, 153, 153); caret-color: rgb(153, 153, 153); color: rgb(153, 153, 153); column-rule-color: rgb(153, 153, 153); cursor: pointer; display: inline-block; font-size: 10px; height: 22px; inline-size: 56.7188px; line-height: 11px; list-style-type: none; outline-color: rgb(153, 153, 153); perspective-origin: 28.3594px 11px; text-align: left; text-decoration: none solid rgb(153, 153, 153); text-emphasis-color: rgb(153, 153, 153); transform-origin: 28.3594px 11px; width: 56.7188px; -webkit-text-fill-color: rgb(153, 153, 153); -webkit-text-stroke-color: rgb(153, 153, 153);">Digital<br style="border-block-color: rgb(153, 153, 153); border-color: rgb(153, 153, 153); border-collapse: collapse; border-inline-color: rgb(153, 153, 153); caret-color: rgb(153, 153, 153); color: rgb(153, 153, 153); column-rule-color: rgb(153, 153, 153); cursor: pointer; font-size: 10px; line-height: 11px; list-style-type: none; outline-color: rgb(153, 153, 153); text-align: left; text-decoration: none solid rgb(153, 153, 153); text-emphasis-color: rgb(153, 153, 153); -webkit-text-fill-color: rgb(153, 153, 153); -webkit-text-stroke-color: rgb(153, 153, 153);"> Photography</span></a></td>
    <td class="navFooterDescSpacer" style="block-size: 46.3125px; border-block-color: rgb(221, 221, 221); border-color: rgb(221, 221, 221); border-collapse: collapse; border-inline-color: rgb(221, 221, 221); caret-color: rgb(221, 221, 221); color: rgb(221, 221, 221); column-rule-color: rgb(221, 221, 221); height: 46.3125px; inline-size: 40px; line-height: 15.6px; outline-color: rgb(221, 221, 221); padding-block: 0px; padding: 0px 10px; padding-inline: 10px; perspective-origin: 20px 23.1562px; text-align: center; text-decoration: none solid rgb(221, 221, 221); text-emphasis-color: rgb(221, 221, 221); text-wrap-mode: nowrap; transform-origin: 20px 23.1562px; width: 40px; -webkit-text-fill-color: rgb(221, 221, 221); -webkit-text-stroke-color: rgb(221, 221, 221);"></td>
    <td class="navFooterDescItem" style="block-size: 46.3125px; border-block-color: rgb(221, 221, 221); border-color: rgb(221, 221, 221); border-collapse: collapse; border-inline-color: rgb(221, 221, 221); caret-color: rgb(221, 221, 221); color: rgb(221, 221, 221); column-rule-color: rgb(221, 221, 221); font-size: 11px; height: 46.3125px; inline-size: 94.375px; line-height: 12.65px; outline-color: rgb(221, 221, 221); padding-block: 0px; padding: 0px 8.25px; padding-inline: 8.25px; perspective-origin: 47.1875px 23.1562px; text-align: left; text-decoration: none solid rgb(221, 221, 221); text-emphasis-color: rgb(221, 221, 221); text-wrap-mode: nowrap; transform-origin: 47.1875px 23.1562px; width: 94.375px; -webkit-text-fill-color: rgb(221, 221, 221); -webkit-text-stroke-color: rgb(221, 221, 221);"><a href="https://www.eastdane.com/welcome" class="nav_a" style="border-block-color: rgb(221, 221, 221); border-color: rgb(221, 221, 221); border-collapse: collapse; border-inline-color: rgb(221, 221, 221); caret-color: rgb(221, 221, 221); color: rgb(221, 221, 221); column-rule-color: rgb(221, 221, 221); cursor: pointer; font-size: 11px; line-height: 12.65px; outline-color: rgb(221, 221, 221); text-align: left; text-decoration: none solid rgb(221, 221, 221); text-emphasis-color: rgb(221, 221, 221); -webkit-text-fill-color: rgb(221, 221, 221); -webkit-text-stroke-color: rgb(221, 221, 221);">East Dane<br style="border-block-color: rgb(221, 221, 221); border-color: rgb(221, 221, 221); border-collapse: collapse; border-inline-color: rgb(221, 221, 221); caret-color: rgb(221, 221, 221); color: rgb(221, 221, 221); column-rule-color: rgb(221, 221, 221); cursor: pointer; font-size: 11px; line-height: 12.65px; outline-color: rgb(221, 221, 221); text-align: left; text-decoration: none solid rgb(221, 221, 221); text-emphasis-color: rgb(221, 221, 221); -webkit-text-fill-color: rgb(221, 221, 221); -webkit-text-stroke-color: rgb(221, 221, 221);"> <span class="navFooterDescText" style="block-size: 22px; border-block-color: rgb(153, 153, 153); border-color: rgb(153, 153, 153); border-collapse: collapse; border-inline-color: rgb(153, 153, 153); caret-color: rgb(153, 153, 153); color: rgb(153, 153, 153); column-rule-color: rgb(153, 153, 153); cursor: pointer; display: inline-block; font-size: 10px; height: 22px; inline-size: 69.1719px; line-height: 11px; list-style-type: none; outline-color: rgb(153, 153, 153); perspective-origin: 34.5781px 11px; text-align: left; text-decoration: none solid rgb(153, 153, 153); text-emphasis-color: rgb(153, 153, 153); transform-origin: 34.5859px 11px; width: 69.1719px; -webkit-text-fill-color: rgb(153, 153, 153); -webkit-text-stroke-color: rgb(153, 153, 153);">Designer Men's<br style="border-block-color: rgb(153, 153, 153); border-color: rgb(153, 153, 153); border-collapse: collapse; border-inline-color: rgb(153, 153, 153); caret-color: rgb(153, 153, 153); color: rgb(153, 153, 153); column-rule-color: rgb(153, 153, 153); cursor: pointer; font-size: 10px; line-height: 11px; list-style-type: none; outline-color: rgb(153, 153, 153); text-align: left; text-decoration: none solid rgb(153, 153, 153); text-emphasis-color: rgb(153, 153, 153); -webkit-text-fill-color: rgb(153, 153, 153); -webkit-text-stroke-color: rgb(153, 153, 153);"> Fashion</span></a></td>
    <td class="navFooterDescSpacer" style="block-size: 46.3125px; border-block-color: rgb(221, 221, 221); border-color: rgb(221, 221, 221); border-collapse: collapse; border-inline-color: rgb(221, 221, 221); caret-color: rgb(221, 221, 221); color: rgb(221, 221, 221); column-rule-color: rgb(221, 221, 221); height: 46.3125px; inline-size: 40px; line-height: 15.6px; outline-color: rgb(221, 221, 221); padding-block: 0px; padding: 0px 10px; padding-inline: 10px; perspective-origin: 20px 23.1562px; text-align: center; text-decoration: none solid rgb(221, 221, 221); text-emphasis-color: rgb(221, 221, 221); text-wrap-mode: nowrap; transform-origin: 20px 23.1562px; width: 40px; -webkit-text-fill-color: rgb(221, 221, 221); -webkit-text-stroke-color: rgb(221, 221, 221);"></td>
    <td class="navFooterDescItem" style="block-size: 46.3125px; border-block-color: rgb(221, 221, 221); border-color: rgb(221, 221, 221); border-collapse: collapse; border-inline-color: rgb(221, 221, 221); caret-color: rgb(221, 221, 221); color: rgb(221, 221, 221); column-rule-color: rgb(221, 221, 221); font-size: 11px; height: 46.3125px; inline-size: 86.5312px; line-height: 12.65px; outline-color: rgb(221, 221, 221); padding-block: 0px; padding: 0px 8.25px; padding-inline: 8.25px; perspective-origin: 43.2656px 23.1562px; text-align: left; text-decoration: none solid rgb(221, 221, 221); text-emphasis-color: rgb(221, 221, 221); text-wrap-mode: nowrap; transform-origin: 43.2656px 23.1562px; width: 86.5312px; -webkit-text-fill-color: rgb(221, 221, 221); -webkit-text-stroke-color: rgb(221, 221, 221);"><a href="https://www.fabric.com/" class="nav_a" style="border-block-color: rgb(221, 221, 221); border-color: rgb(221, 221, 221); border-collapse: collapse; border-inline-color: rgb(221, 221, 221); caret-color: rgb(221, 221, 221); color: rgb(221, 221, 221); column-rule-color: rgb(221, 221, 221); cursor: pointer; font-size: 11px; line-height: 12.65px; outline-color: rgb(221, 221, 221); text-align: left; text-decoration: none solid rgb(221, 221, 221); text-emphasis-color: rgb(221, 221, 221); -webkit-text-fill-color: rgb(221, 221, 221); -webkit-text-stroke-color: rgb(221, 221, 221);">Fabric<br style="border-block-color: rgb(221, 221, 221); border-color: rgb(221, 221, 221); border-collapse: collapse; border-inline-color: rgb(221, 221, 221); caret-color: rgb(221, 221, 221); color: rgb(221, 221, 221); column-rule-color: rgb(221, 221, 221); cursor: pointer; font-size: 11px; line-height: 12.65px; outline-color: rgb(221, 221, 221); text-align: left; text-decoration: none solid rgb(221, 221, 221); text-emphasis-color: rgb(221, 221, 221); -webkit-text-fill-color: rgb(221, 221, 221); -webkit-text-stroke-color: rgb(221, 221, 221);"> <span class="navFooterDescText" style="block-size: 33px; border-block-color: rgb(153, 153, 153); border-color: rgb(153, 153, 153); border-collapse: collapse; border-inline-color: rgb(153, 153, 153); caret-color: rgb(153, 153, 153); color: rgb(153, 153, 153); column-rule-color: rgb(153, 153, 153); cursor: pointer; display: inline-block; font-size: 10px; height: 33px; inline-size: 70.0312px; line-height: 11px; list-style-type: none; outline-color: rgb(153, 153, 153); perspective-origin: 35.0156px 16.5px; text-align: left; text-decoration: none solid rgb(153, 153, 153); text-emphasis-color: rgb(153, 153, 153); transform-origin: 35.0156px 16.5px; width: 70.0312px; -webkit-text-fill-color: rgb(153, 153, 153); -webkit-text-stroke-color: rgb(153, 153, 153);">Sewing, Quilting<br style="border-block-color: rgb(153, 153, 153); border-color: rgb(153, 153, 153); border-collapse: collapse; border-inline-color: rgb(153, 153, 153); caret-color: rgb(153, 153, 153); color: rgb(153, 153, 153); column-rule-color: rgb(153, 153, 153); cursor: pointer; font-size: 10px; line-height: 11px; list-style-type: none; outline-color: rgb(153, 153, 153); text-align: left; text-decoration: none solid rgb(153, 153, 153); text-emphasis-color: rgb(153, 153, 153); -webkit-text-fill-color: rgb(153, 153, 153); -webkit-text-stroke-color: rgb(153, 153, 153);"> &amp; Knitting</span></a></td>
</tr>
<tr style="block-size: 15.5938px; border-block-color: rgb(128, 128, 128); border-color: rgb(128, 128, 128); border-collapse: collapse; border-inline-color: rgb(128, 128, 128); caret-color: rgb(221, 221, 221); color: rgb(221, 221, 221); column-rule-color: rgb(221, 221, 221); font-size: 12px; height: 15.5938px; inline-size: 1000px; line-height: 18px; outline-color: rgb(221, 221, 221); perspective-origin: 500px 7.79688px; text-align: center; text-decoration: none solid rgb(221, 221, 221); text-emphasis-color: rgb(221, 221, 221); text-wrap-mode: nowrap; transform-origin: 500px 7.79688px; vertical-align: middle; width: 1000px; -webkit-text-fill-color: rgb(221, 221, 221); -webkit-text-stroke-color: rgb(221, 221, 221);"><td style="block-size: 15.5938px; border-block-color: rgb(221, 221, 221); border-color: rgb(221, 221, 221); border-collapse: collapse; border-inline-color: rgb(221, 221, 221); caret-color: rgb(221, 221, 221); color: rgb(221, 221, 221); column-rule-color: rgb(221, 221, 221); height: 15.5938px; inline-size: 113.297px; line-height: 15.6px; outline-color: rgb(221, 221, 221); padding-block: 0px; padding: 0px 10px; padding-inline: 10px; perspective-origin: 56.6406px 7.79688px; text-align: center; text-decoration: none solid rgb(221, 221, 221); text-emphasis-color: rgb(221, 221, 221); text-wrap-mode: nowrap; transform-origin: 56.6484px 7.79688px; width: 113.297px; -webkit-text-fill-color: rgb(221, 221, 221); -webkit-text-stroke-color: rgb(221, 221, 221);">&nbsp;</td></tr>
<tr style="block-size: 58.9688px; border-block-color: rgb(128, 128, 128); border-color: rgb(128, 128, 128); border-collapse: collapse; border-inline-color: rgb(128, 128, 128); caret-color: rgb(221, 221, 221); color: rgb(221, 221, 221); column-rule-color: rgb(221, 221, 221); font-size: 12px; height: 58.9688px; inline-size: 1000px; line-height: 18px; outline-color: rgb(221, 221, 221); perspective-origin: 500px 29.4844px; text-align: center; text-decoration: none solid rgb(221, 221, 221); text-emphasis-color: rgb(221, 221, 221); text-wrap-mode: nowrap; transform-origin: 500px 29.4844px; vertical-align: middle; width: 1000px; -webkit-text-fill-color: rgb(221, 221, 221); -webkit-text-stroke-color: rgb(221, 221, 221);">
    <td class="navFooterDescItem" style="block-size: 58.9688px; border-block-color: rgb(221, 221, 221); border-color: rgb(221, 221, 221); border-collapse: collapse; border-inline-color: rgb(221, 221, 221); caret-color: rgb(221, 221, 221); color: rgb(221, 221, 221); column-rule-color: rgb(221, 221, 221); font-size: 11px; height: 58.9688px; inline-size: 113.297px; line-height: 12.65px; outline-color: rgb(221, 221, 221); padding-block: 0px; padding: 0px 8.25px; padding-inline: 8.25px; perspective-origin: 56.6406px 29.4844px; text-align: left; text-decoration: none solid rgb(221, 221, 221); text-emphasis-color: rgb(221, 221, 221); text-wrap-mode: nowrap; transform-origin: 56.6484px 29.4844px; width: 113.297px; -webkit-text-fill-color: rgb(221, 221, 221); -webkit-text-stroke-color: rgb(221, 221, 221);"><a href="https://www.goodreads.com/" class="nav_a" style="border-block-color: rgb(221, 221, 221); border-color: rgb(221, 221, 221); border-collapse: collapse; border-inline-color: rgb(221, 221, 221); caret-color: rgb(221, 221, 221); color: rgb(221, 221, 221); column-rule-color: rgb(221, 221, 221); cursor: pointer; font-size: 11px; line-height: 12.65px; outline-color: rgb(221, 221, 221); text-align: left; text-decoration: none solid rgb(221, 221, 221); text-emphasis-color: rgb(221, 221, 221); -webkit-text-fill-color: rgb(221, 221, 221); -webkit-text-stroke-color: rgb(221, 221, 221);">Goodreads<br style="border-block-color: rgb(221, 221, 221); border-color: rgb(221, 221, 221); border-collapse: collapse; border-inline-color: rgb(221, 221, 221); caret-color: rgb(221, 221, 221); color: rgb(221, 221, 221); column-rule-color: rgb(221, 221, 221); cursor: pointer; font-size: 11px; line-height: 12.65px; outline-color: rgb(221, 221, 221); text-align: left; text-decoration: none solid rgb(221, 221, 221); text-emphasis-color: rgb(221, 221, 221); -webkit-text-fill-color: rgb(221, 221, 221); -webkit-text-stroke-color: rgb(221, 221, 221);"> <span class="navFooterDescText" style="block-size: 22px; border-block-color: rgb(153, 153, 153); border-color: rgb(153, 153, 153); border-collapse: collapse; border-inline-color: rgb(153, 153, 153); caret-color: rgb(153, 153, 153); color: rgb(153, 153, 153); column-rule-color: rgb(153, 153, 153); cursor: pointer; display: inline-block; font-size: 10px; height: 22px; inline-size: 88.9375px; line-height: 11px; list-style-type: none; outline-color: rgb(153, 153, 153); perspective-origin: 44.4688px 11px; text-align: left; text-decoration: none solid rgb(153, 153, 153); text-emphasis-color: rgb(153, 153, 153); transform-origin: 44.4688px 11px; width: 88.9375px; -webkit-text-fill-color: rgb(153, 153, 153); -webkit-text-stroke-color: rgb(153, 153, 153);">Book reviews<br style="border-block-color: rgb(153, 153, 153); border-color: rgb(153, 153, 153); border-collapse: collapse; border-inline-color: rgb(153, 153, 153); caret-color: rgb(153, 153, 153); color: rgb(153, 153, 153); column-rule-color: rgb(153, 153, 153); cursor: pointer; font-size: 10px; line-height: 11px; list-style-type: none; outline-color: rgb(153, 153, 153); text-align: left; text-decoration: none solid rgb(153, 153, 153); text-emphasis-color: rgb(153, 153, 153); -webkit-text-fill-color: rgb(153, 153, 153); -webkit-text-stroke-color: rgb(153, 153, 153);"> &amp; recommendations</span></a></td>
    <td class="navFooterDescSpacer" style="block-size: 58.9688px; border-block-color: rgb(221, 221, 221); border-color: rgb(221, 221, 221); border-collapse: collapse; border-inline-color: rgb(221, 221, 221); caret-color: rgb(221, 221, 221); color: rgb(221, 221, 221); column-rule-color: rgb(221, 221, 221); height: 58.9688px; inline-size: 40px; line-height: 15.6px; outline-color: rgb(221, 221, 221); padding-block: 0px; padding: 0px 10px; padding-inline: 10px; perspective-origin: 20px 29.4844px; text-align: center; text-decoration: none solid rgb(221, 221, 221); text-emphasis-color: rgb(221, 221, 221); text-wrap-mode: nowrap; transform-origin: 20px 29.4844px; width: 40px; -webkit-text-fill-color: rgb(221, 221, 221); -webkit-text-stroke-color: rgb(221, 221, 221);"></td>
    <td class="navFooterDescItem" style="block-size: 58.9688px; border-block-color: rgb(221, 221, 221); border-color: rgb(221, 221, 221); border-collapse: collapse; border-inline-color: rgb(221, 221, 221); caret-color: rgb(221, 221, 221); color: rgb(221, 221, 221); column-rule-color: rgb(221, 221, 221); font-size: 11px; height: 58.9688px; inline-size: 147.266px; line-height: 12.65px; outline-color: rgb(221, 221, 221); padding-block: 0px; padding: 0px 8.25px; padding-inline: 8.25px; perspective-origin: 73.625px 29.4844px; text-align: left; text-decoration: none solid rgb(221, 221, 221); text-emphasis-color: rgb(221, 221, 221); text-wrap-mode: nowrap; transform-origin: 73.6328px 29.4844px; width: 147.266px; -webkit-text-fill-color: rgb(221, 221, 221); -webkit-text-stroke-color: rgb(221, 221, 221);"><a href="https://www.imdb.com/" class="nav_a" style="border-block-color: rgb(221, 221, 221); border-color: rgb(221, 221, 221); border-collapse: collapse; border-inline-color: rgb(221, 221, 221); caret-color: rgb(221, 221, 221); color: rgb(221, 221, 221); column-rule-color: rgb(221, 221, 221); cursor: pointer; font-size: 11px; line-height: 12.65px; outline-color: rgb(221, 221, 221); text-align: left; text-decoration: none solid rgb(221, 221, 221); text-emphasis-color: rgb(221, 221, 221); -webkit-text-fill-color: rgb(221, 221, 221); -webkit-text-stroke-color: rgb(221, 221, 221);">IMDb<br style="border-block-color: rgb(221, 221, 221); border-color: rgb(221, 221, 221); border-collapse: collapse; border-inline-color: rgb(221, 221, 221); caret-color: rgb(221, 221, 221); color: rgb(221, 221, 221); column-rule-color: rgb(221, 221, 221); cursor: pointer; font-size: 11px; line-height: 12.65px; outline-color: rgb(221, 221, 221); text-align: left; text-decoration: none solid rgb(221, 221, 221); text-emphasis-color: rgb(221, 221, 221); -webkit-text-fill-color: rgb(221, 221, 221); -webkit-text-stroke-color: rgb(221, 221, 221);"> <span class="navFooterDescText" style="block-size: 22px; border-block-color: rgb(153, 153, 153); border-color: rgb(153, 153, 153); border-collapse: collapse; border-inline-color: rgb(153, 153, 153); caret-color: rgb(153, 153, 153); color: rgb(153, 153, 153); column-rule-color: rgb(153, 153, 153); cursor: pointer; display: inline-block; font-size: 10px; height: 22px; inline-size: 56.7031px; line-height: 11px; list-style-type: none; outline-color: rgb(153, 153, 153); perspective-origin: 28.3438px 11px; text-align: left; text-decoration: none solid rgb(153, 153, 153); text-emphasis-color: rgb(153, 153, 153); transform-origin: 28.3516px 11px; width: 56.7031px; -webkit-text-fill-color: rgb(153, 153, 153); -webkit-text-stroke-color: rgb(153, 153, 153);">Movies, TV<br style="border-block-color: rgb(153, 153, 153); border-color: rgb(153, 153, 153); border-collapse: collapse; border-inline-color: rgb(153, 153, 153); caret-color: rgb(153, 153, 153); color: rgb(153, 153, 153); column-rule-color: rgb(153, 153, 153); cursor: pointer; font-size: 10px; line-height: 11px; list-style-type: none; outline-color: rgb(153, 153, 153); text-align: left; text-decoration: none solid rgb(153, 153, 153); text-emphasis-color: rgb(153, 153, 153); -webkit-text-fill-color: rgb(153, 153, 153); -webkit-text-stroke-color: rgb(153, 153, 153);"> &amp; Celebrities</span></a></td>
    <td class="navFooterDescSpacer" style="block-size: 58.9688px; border-block-color: rgb(221, 221, 221); border-color: rgb(221, 221, 221); border-collapse: collapse; border-inline-color: rgb(221, 221, 221); caret-color: rgb(221, 221, 221); color: rgb(221, 221, 221); column-rule-color: rgb(221, 221, 221); height: 58.9688px; inline-size: 40px; line-height: 15.6px; outline-color: rgb(221, 221, 221); padding-block: 0px; padding: 0px 10px; padding-inline: 10px; perspective-origin: 20px 29.4844px; text-align: center; text-decoration: none solid rgb(221, 221, 221); text-emphasis-color: rgb(221, 221, 221); text-wrap-mode: nowrap; transform-origin: 20px 29.4844px; width: 40px; -webkit-text-fill-color: rgb(221, 221, 221); -webkit-text-stroke-color: rgb(221, 221, 221);"></td>
    <td class="navFooterDescItem" style="block-size: 58.9688px; border-block-color: rgb(221, 221, 221); border-color: rgb(221, 221, 221); border-collapse: collapse; border-inline-color: rgb(221, 221, 221); caret-color: rgb(221, 221, 221); color: rgb(221, 221, 221); column-rule-color: rgb(221, 221, 221); font-size: 11px; height: 58.9688px; inline-size: 96.2969px; line-height: 12.65px; outline-color: rgb(221, 221, 221); padding-block: 0px; padding: 0px 8.25px; padding-inline: 8.25px; perspective-origin: 48.1406px 29.4844px; text-align: left; text-decoration: none solid rgb(221, 221, 221); text-emphasis-color: rgb(221, 221, 221); text-wrap-mode: nowrap; transform-origin: 48.1484px 29.4844px; width: 96.2969px; -webkit-text-fill-color: rgb(221, 221, 221); -webkit-text-stroke-color: rgb(221, 221, 221);"><a href="https://pro.imdb.com/?ref_=amzn_nav_ftr" class="nav_a" style="border-block-color: rgb(221, 221, 221); border-color: rgb(221, 221, 221); border-collapse: collapse; border-inline-color: rgb(221, 221, 221); caret-color: rgb(221, 221, 221); color: rgb(221, 221, 221); column-rule-color: rgb(221, 221, 221); cursor: pointer; font-size: 11px; line-height: 12.65px; outline-color: rgb(221, 221, 221); text-align: left; text-decoration: none solid rgb(221, 221, 221); text-emphasis-color: rgb(221, 221, 221); -webkit-text-fill-color: rgb(221, 221, 221); -webkit-text-stroke-color: rgb(221, 221, 221);">IMDbPro<br style="border-block-color: rgb(221, 221, 221); border-color: rgb(221, 221, 221); border-collapse: collapse; border-inline-color: rgb(221, 221, 221); caret-color: rgb(221, 221, 221); color: rgb(221, 221, 221); column-rule-color: rgb(221, 221, 221); cursor: pointer; font-size: 11px; line-height: 12.65px; outline-color: rgb(221, 221, 221); text-align: left; text-decoration: none solid rgb(221, 221, 221); text-emphasis-color: rgb(221, 221, 221); -webkit-text-fill-color: rgb(221, 221, 221); -webkit-text-stroke-color: rgb(221, 221, 221);"> <span class="navFooterDescText" style="block-size: 44px; border-block-color: rgb(153, 153, 153); border-color: rgb(153, 153, 153); border-collapse: collapse; border-inline-color: rgb(153, 153, 153); caret-color: rgb(153, 153, 153); color: rgb(153, 153, 153); column-rule-color: rgb(153, 153, 153); cursor: pointer; display: inline-block; font-size: 10px; height: 44px; inline-size: 79.7969px; line-height: 11px; list-style-type: none; outline-color: rgb(153, 153, 153); perspective-origin: 39.8906px 22px; text-align: left; text-decoration: none solid rgb(153, 153, 153); text-emphasis-color: rgb(153, 153, 153); transform-origin: 39.8984px 22px; width: 79.7969px; -webkit-text-fill-color: rgb(153, 153, 153); -webkit-text-stroke-color: rgb(153, 153, 153);">Get Info Entertainment<br style="border-block-color: rgb(153, 153, 153); border-color: rgb(153, 153, 153); border-collapse: collapse; border-inline-color: rgb(153, 153, 153); caret-color: rgb(153, 153, 153); color: rgb(153, 153, 153); column-rule-color: rgb(153, 153, 153); cursor: pointer; font-size: 10px; line-height: 11px; list-style-type: none; outline-color: rgb(153, 153, 153); text-align: left; text-decoration: none solid rgb(153, 153, 153); text-emphasis-color: rgb(153, 153, 153); -webkit-text-fill-color: rgb(153, 153, 153); -webkit-text-stroke-color: rgb(153, 153, 153);"> Professionals Need</span></a></td>
    <td class="navFooterDescSpacer" style="block-size: 58.9688px; border-block-color: rgb(221, 221, 221); border-color: rgb(221, 221, 221); border-collapse: collapse; border-inline-color: rgb(221, 221, 221); caret-color: rgb(221, 221, 221); color: rgb(221, 221, 221); column-rule-color: rgb(221, 221, 221); height: 58.9688px; inline-size: 40px; line-height: 15.6px; outline-color: rgb(221, 221, 221); padding-block: 0px; padding: 0px 10px; padding-inline: 10px; perspective-origin: 20px 29.4844px; text-align: center; text-decoration: none solid rgb(221, 221, 221); text-emphasis-color: rgb(221, 221, 221); text-wrap-mode: nowrap; transform-origin: 20px 29.4844px; width: 40px; -webkit-text-fill-color: rgb(221, 221, 221); -webkit-text-stroke-color: rgb(221, 221, 221);"></td>
    <td class="navFooterDescItem" style="block-size: 58.9688px; border-block-color: rgb(221, 221, 221); border-color: rgb(221, 221, 221); border-collapse: collapse; border-inline-color: rgb(221, 221, 221); caret-color: rgb(221, 221, 221); color: rgb(221, 221, 221); column-rule-color: rgb(221, 221, 221); font-size: 11px; height: 58.9688px; inline-size: 119.922px; line-height: 12.65px; outline-color: rgb(221, 221, 221); padding-block: 0px; padding: 0px 8.25px; padding-inline: 8.25px; perspective-origin: 59.9531px 29.4844px; text-align: left; text-decoration: none solid rgb(221, 221, 221); text-emphasis-color: rgb(221, 221, 221); text-wrap-mode: nowrap; transform-origin: 59.9609px 29.4844px; width: 119.922px; -webkit-text-fill-color: rgb(221, 221, 221); -webkit-text-stroke-color: rgb(221, 221, 221);"><a href="https://kdp.amazon.com/" class="nav_a" style="border-block-color: rgb(221, 221, 221); border-color: rgb(221, 221, 221); border-collapse: collapse; border-inline-color: rgb(221, 221, 221); caret-color: rgb(221, 221, 221); color: rgb(221, 221, 221); column-rule-color: rgb(221, 221, 221); cursor: pointer; font-size: 11px; line-height: 12.65px; outline-color: rgb(221, 221, 221); text-align: left; text-decoration: none solid rgb(221, 221, 221); text-emphasis-color: rgb(221, 221, 221); -webkit-text-fill-color: rgb(221, 221, 221); -webkit-text-stroke-color: rgb(221, 221, 221);">Kindle Direct Publishing<br style="border-block-color: rgb(221, 221, 221); border-color: rgb(221, 221, 221); border-collapse: collapse; border-inline-color: rgb(221, 221, 221); caret-color: rgb(221, 221, 221); color: rgb(221, 221, 221); column-rule-color: rgb(221, 221, 221); cursor: pointer; font-size: 11px; line-height: 12.65px; outline-color: rgb(221, 221, 221); text-align: left; text-decoration: none solid rgb(221, 221, 221); text-emphasis-color: rgb(221, 221, 221); -webkit-text-fill-color: rgb(221, 221, 221); -webkit-text-stroke-color: rgb(221, 221, 221);"> <span class="navFooterDescText" style="block-size: 33px; border-block-color: rgb(153, 153, 153); border-color: rgb(153, 153, 153); border-collapse: collapse; border-inline-color: rgb(153, 153, 153); caret-color: rgb(153, 153, 153); color: rgb(153, 153, 153); column-rule-color: rgb(153, 153, 153); cursor: pointer; display: inline-block; font-size: 10px; height: 33px; inline-size: 103.422px; line-height: 11px; list-style-type: none; outline-color: rgb(153, 153, 153); perspective-origin: 51.7031px 16.5px; text-align: left; text-decoration: none solid rgb(153, 153, 153); text-emphasis-color: rgb(153, 153, 153); transform-origin: 51.7109px 16.5px; width: 103.422px; -webkit-text-fill-color: rgb(153, 153, 153); -webkit-text-stroke-color: rgb(153, 153, 153);">Indie Digital &amp; Print Publishing<br style="border-block-color: rgb(153, 153, 153); border-color: rgb(153, 153, 153); border-collapse: collapse; border-inline-color: rgb(153, 153, 153); caret-color: rgb(153, 153, 153); color: rgb(153, 153, 153); column-rule-color: rgb(153, 153, 153); cursor: pointer; font-size: 10px; line-height: 11px; list-style-type: none; outline-color: rgb(153, 153, 153); text-align: left; text-decoration: none solid rgb(153, 153, 153); text-emphasis-color: rgb(153, 153, 153); -webkit-text-fill-color: rgb(153, 153, 153); -webkit-text-stroke-color: rgb(153, 153, 153);"> Made Easy
</span></a></td>
    <td class="navFooterDescSpacer" style="block-size: 58.9688px; border-block-color: rgb(221, 221, 221); border-color: rgb(221, 221, 221); border-collapse: collapse; border-inline-color: rgb(221, 221, 221); caret-color: rgb(221, 221, 221); color: rgb(221, 221, 221); column-rule-color: rgb(221, 221, 221); height: 58.9688px; inline-size: 40px; line-height: 15.6px; outline-color: rgb(221, 221, 221); padding-block: 0px; padding: 0px 10px; padding-inline: 10px; perspective-origin: 20px 29.4844px; text-align: center; text-decoration: none solid rgb(221, 221, 221); text-emphasis-color: rgb(221, 221, 221); text-wrap-mode: nowrap; transform-origin: 20px 29.4844px; width: 40px; -webkit-text-fill-color: rgb(221, 221, 221); -webkit-text-stroke-color: rgb(221, 221, 221);"></td>
    <td class="navFooterDescItem" style="block-size: 58.9688px; border-block-color: rgb(221, 221, 221); border-color: rgb(221, 221, 221); border-collapse: collapse; border-inline-color: rgb(221, 221, 221); caret-color: rgb(221, 221, 221); color: rgb(221, 221, 221); column-rule-color: rgb(221, 221, 221); font-size: 11px; height: 58.9688px; inline-size: 102.312px; line-height: 12.65px; outline-color: rgb(221, 221, 221); padding-block: 0px; padding: 0px 8.25px; padding-inline: 8.25px; perspective-origin: 51.1562px 29.4844px; text-align: left; text-decoration: none solid rgb(221, 221, 221); text-emphasis-color: rgb(221, 221, 221); text-wrap-mode: nowrap; transform-origin: 51.1562px 29.4844px; width: 102.312px; -webkit-text-fill-color: rgb(221, 221, 221); -webkit-text-stroke-color: rgb(221, 221, 221);"><a href="http://www.amazon.com/STRING-subnav-prime-photos/b?ie=UTF8&amp;node=13234696011&amp;ref_=gno_p_foot" class="nav_a" style="border-block-color: rgb(221, 221, 221); border-color: rgb(221, 221, 221); border-collapse: collapse; border-inline-color: rgb(221, 221, 221); caret-color: rgb(221, 221, 221); color: rgb(221, 221, 221); column-rule-color: rgb(221, 221, 221); cursor: pointer; font-size: 11px; line-height: 12.65px; outline-color: rgb(221, 221, 221); text-align: left; text-decoration: none solid rgb(221, 221, 221); text-emphasis-color: rgb(221, 221, 221); -webkit-text-fill-color: rgb(221, 221, 221); -webkit-text-stroke-color: rgb(221, 221, 221);">Amazon Photos<br style="border-block-color: rgb(221, 221, 221); border-color: rgb(221, 221, 221); border-collapse: collapse; border-inline-color: rgb(221, 221, 221); caret-color: rgb(221, 221, 221); color: rgb(221, 221, 221); column-rule-color: rgb(221, 221, 221); cursor: pointer; font-size: 11px; line-height: 12.65px; outline-color: rgb(221, 221, 221); text-align: left; text-decoration: none solid rgb(221, 221, 221); text-emphasis-color: rgb(221, 221, 221); -webkit-text-fill-color: rgb(221, 221, 221); -webkit-text-stroke-color: rgb(221, 221, 221);"> <span class="navFooterDescText" style="block-size: 33px; border-block-color: rgb(153, 153, 153); border-color: rgb(153, 153, 153); border-collapse: collapse; border-inline-color: rgb(153, 153, 153); caret-color: rgb(153, 153, 153); color: rgb(153, 153, 153); column-rule-color: rgb(153, 153, 153); cursor: pointer; display: inline-block; font-size: 10px; height: 33px; inline-size: 85.8125px; line-height: 11px; list-style-type: none; outline-color: rgb(153, 153, 153); perspective-origin: 42.9062px 16.5px; text-align: left; text-decoration: none solid rgb(153, 153, 153); text-emphasis-color: rgb(153, 153, 153); transform-origin: 42.9062px 16.5px; width: 85.8125px; -webkit-text-fill-color: rgb(153, 153, 153); -webkit-text-stroke-color: rgb(153, 153, 153);">Unlimited Photo Storage<br style="border-block-color: rgb(153, 153, 153); border-color: rgb(153, 153, 153); border-collapse: collapse; border-inline-color: rgb(153, 153, 153); caret-color: rgb(153, 153, 153); color: rgb(153, 153, 153); column-rule-color: rgb(153, 153, 153); cursor: pointer; font-size: 10px; line-height: 11px; list-style-type: none; outline-color: rgb(153, 153, 153); text-align: left; text-decoration: none solid rgb(153, 153, 153); text-emphasis-color: rgb(153, 153, 153); -webkit-text-fill-color: rgb(153, 153, 153); -webkit-text-stroke-color: rgb(153, 153, 153);"> Free With Prime</span></a></td>
    <td class="navFooterDescSpacer" style="block-size: 58.9688px; border-block-color: rgb(221, 221, 221); border-color: rgb(221, 221, 221); border-collapse: collapse; border-inline-color: rgb(221, 221, 221); caret-color: rgb(221, 221, 221); color: rgb(221, 221, 221); column-rule-color: rgb(221, 221, 221); height: 58.9688px; inline-size: 40px; line-height: 15.6px; outline-color: rgb(221, 221, 221); padding-block: 0px; padding: 0px 10px; padding-inline: 10px; perspective-origin: 20px 29.4844px; text-align: center; text-decoration: none solid rgb(221, 221, 221); text-emphasis-color: rgb(221, 221, 221); text-wrap-mode: nowrap; transform-origin: 20px 29.4844px; width: 40px; -webkit-text-fill-color: rgb(221, 221, 221); -webkit-text-stroke-color: rgb(221, 221, 221);"></td>
    <td class="navFooterDescItem" style="block-size: 58.9688px; border-block-color: rgb(221, 221, 221); border-color: rgb(221, 221, 221); border-collapse: collapse; border-inline-color: rgb(221, 221, 221); caret-color: rgb(221, 221, 221); color: rgb(221, 221, 221); column-rule-color: rgb(221, 221, 221); font-size: 11px; height: 58.9688px; inline-size: 94.375px; line-height: 12.65px; outline-color: rgb(221, 221, 221); padding-block: 0px; padding: 0px 8.25px; padding-inline: 8.25px; perspective-origin: 47.1875px 29.4844px; text-align: left; text-decoration: none solid rgb(221, 221, 221); text-emphasis-color: rgb(221, 221, 221); text-wrap-mode: nowrap; transform-origin: 47.1875px 29.4844px; width: 94.375px; -webkit-text-fill-color: rgb(221, 221, 221); -webkit-text-stroke-color: rgb(221, 221, 221);"><a href="https://videodirect.amazon.com/home/landing" class="nav_a" style="border-block-color: rgb(221, 221, 221); border-color: rgb(221, 221, 221); border-collapse: collapse; border-inline-color: rgb(221, 221, 221); caret-color: rgb(221, 221, 221); color: rgb(221, 221, 221); column-rule-color: rgb(221, 221, 221); cursor: pointer; font-size: 11px; line-height: 12.65px; outline-color: rgb(221, 221, 221); text-align: left; text-decoration: none solid rgb(221, 221, 221); text-emphasis-color: rgb(221, 221, 221); -webkit-text-fill-color: rgb(221, 221, 221); -webkit-text-stroke-color: rgb(221, 221, 221);">Prime Video Direct<br style="border-block-color: rgb(221, 221, 221); border-color: rgb(221, 221, 221); border-collapse: collapse; border-inline-color: rgb(221, 221, 221); caret-color: rgb(221, 221, 221); color: rgb(221, 221, 221); column-rule-color: rgb(221, 221, 221); cursor: pointer; font-size: 11px; line-height: 12.65px; outline-color: rgb(221, 221, 221); text-align: left; text-decoration: none solid rgb(221, 221, 221); text-emphasis-color: rgb(221, 221, 221); -webkit-text-fill-color: rgb(221, 221, 221); -webkit-text-stroke-color: rgb(221, 221, 221);"> <span class="navFooterDescText" style="block-size: 33px; border-block-color: rgb(153, 153, 153); border-color: rgb(153, 153, 153); border-collapse: collapse; border-inline-color: rgb(153, 153, 153); caret-color: rgb(153, 153, 153); color: rgb(153, 153, 153); column-rule-color: rgb(153, 153, 153); cursor: pointer; display: inline-block; font-size: 10px; height: 33px; inline-size: 77.875px; line-height: 11px; list-style-type: none; outline-color: rgb(153, 153, 153); perspective-origin: 38.9375px 16.5px; text-align: left; text-decoration: none solid rgb(153, 153, 153); text-emphasis-color: rgb(153, 153, 153); transform-origin: 38.9375px 16.5px; width: 77.875px; -webkit-text-fill-color: rgb(153, 153, 153); -webkit-text-stroke-color: rgb(153, 153, 153);">Video Distribution<br style="border-block-color: rgb(153, 153, 153); border-color: rgb(153, 153, 153); border-collapse: collapse; border-inline-color: rgb(153, 153, 153); caret-color: rgb(153, 153, 153); color: rgb(153, 153, 153); column-rule-color: rgb(153, 153, 153); cursor: pointer; font-size: 10px; line-height: 11px; list-style-type: none; outline-color: rgb(153, 153, 153); text-align: left; text-decoration: none solid rgb(153, 153, 153); text-emphasis-color: rgb(153, 153, 153); -webkit-text-fill-color: rgb(153, 153, 153); -webkit-text-stroke-color: rgb(153, 153, 153);"> Made Easy</span></a></td>
    <td class="navFooterDescSpacer" style="block-size: 58.9688px; border-block-color: rgb(221, 221, 221); border-color: rgb(221, 221, 221); border-collapse: collapse; border-inline-color: rgb(221, 221, 221); caret-color: rgb(221, 221, 221); color: rgb(221, 221, 221); column-rule-color: rgb(221, 221, 221); height: 58.9688px; inline-size: 40px; line-height: 15.6px; outline-color: rgb(221, 221, 221); padding-block: 0px; padding: 0px 10px; padding-inline: 10px; perspective-origin: 20px 29.4844px; text-align: center; text-decoration: none solid rgb(221, 221, 221); text-emphasis-color: rgb(221, 221, 221); text-wrap-mode: nowrap; transform-origin: 20px 29.4844px; width: 40px; -webkit-text-fill-color: rgb(221, 221, 221); -webkit-text-stroke-color: rgb(221, 221, 221);"></td>
    <td class="navFooterDescItem" style="block-size: 58.9688px; border-block-color: rgb(221, 221, 221); border-color: rgb(221, 221, 221); border-collapse: collapse; border-inline-color: rgb(221, 221, 221); caret-color: rgb(221, 221, 221); color: rgb(221, 221, 221); column-rule-color: rgb(221, 221, 221); font-size: 11px; height: 58.9688px; inline-size: 86.5312px; line-height: 12.65px; outline-color: rgb(221, 221, 221); padding-block: 0px; padding: 0px 8.25px; padding-inline: 8.25px; perspective-origin: 43.2656px 29.4844px; text-align: left; text-decoration: none solid rgb(221, 221, 221); text-emphasis-color: rgb(221, 221, 221); text-wrap-mode: nowrap; transform-origin: 43.2656px 29.4844px; width: 86.5312px; -webkit-text-fill-color: rgb(221, 221, 221); -webkit-text-stroke-color: rgb(221, 221, 221);"><a href="https://www.shopbop.com/welcome" class="nav_a" style="border-block-color: rgb(221, 221, 221); border-color: rgb(221, 221, 221); border-collapse: collapse; border-inline-color: rgb(221, 221, 221); caret-color: rgb(221, 221, 221); color: rgb(221, 221, 221); column-rule-color: rgb(221, 221, 221); cursor: pointer; font-size: 11px; line-height: 12.65px; outline-color: rgb(221, 221, 221); text-align: left; text-decoration: none solid rgb(221, 221, 221); text-emphasis-color: rgb(221, 221, 221); -webkit-text-fill-color: rgb(221, 221, 221); -webkit-text-stroke-color: rgb(221, 221, 221);">Shopbop<br style="border-block-color: rgb(221, 221, 221); border-color: rgb(221, 221, 221); border-collapse: collapse; border-inline-color: rgb(221, 221, 221); caret-color: rgb(221, 221, 221); color: rgb(221, 221, 221); column-rule-color: rgb(221, 221, 221); cursor: pointer; font-size: 11px; line-height: 12.65px; outline-color: rgb(221, 221, 221); text-align: left; text-decoration: none solid rgb(221, 221, 221); text-emphasis-color: rgb(221, 221, 221); -webkit-text-fill-color: rgb(221, 221, 221); -webkit-text-stroke-color: rgb(221, 221, 221);"> <span class="navFooterDescText" style="block-size: 22px; border-block-color: rgb(153, 153, 153); border-color: rgb(153, 153, 153); border-collapse: collapse; border-inline-color: rgb(153, 153, 153); caret-color: rgb(153, 153, 153); color: rgb(153, 153, 153); column-rule-color: rgb(153, 153, 153); cursor: pointer; display: inline-block; font-size: 10px; height: 22px; inline-size: 70.0312px; line-height: 11px; list-style-type: none; outline-color: rgb(153, 153, 153); perspective-origin: 35.0156px 11px; text-align: left; text-decoration: none solid rgb(153, 153, 153); text-emphasis-color: rgb(153, 153, 153); transform-origin: 35.0156px 11px; width: 70.0312px; -webkit-text-fill-color: rgb(153, 153, 153); -webkit-text-stroke-color: rgb(153, 153, 153);">Designer<br style="border-block-color: rgb(153, 153, 153); border-color: rgb(153, 153, 153); border-collapse: collapse; border-inline-color: rgb(153, 153, 153); caret-color: rgb(153, 153, 153); color: rgb(153, 153, 153); column-rule-color: rgb(153, 153, 153); cursor: pointer; font-size: 10px; line-height: 11px; list-style-type: none; outline-color: rgb(153, 153, 153); text-align: left; text-decoration: none solid rgb(153, 153, 153); text-emphasis-color: rgb(153, 153, 153); -webkit-text-fill-color: rgb(153, 153, 153); -webkit-text-stroke-color: rgb(153, 153, 153);"> Fashion Brands</span></a></td>
</tr>
<tr style="block-size: 15.5938px; border-block-color: rgb(128, 128, 128); border-color: rgb(128, 128, 128); border-collapse: collapse; border-inline-color: rgb(128, 128, 128); caret-color: rgb(221, 221, 221); color: rgb(221, 221, 221); column-rule-color: rgb(221, 221, 221); font-size: 12px; height: 15.5938px; inline-size: 1000px; line-height: 18px; outline-color: rgb(221, 221, 221); perspective-origin: 500px 7.79688px; text-align: center; text-decoration: none solid rgb(221, 221, 221); text-emphasis-color: rgb(221, 221, 221); text-wrap-mode: nowrap; transform-origin: 500px 7.79688px; vertical-align: middle; width: 1000px; -webkit-text-fill-color: rgb(221, 221, 221); -webkit-text-stroke-color: rgb(221, 221, 221);"><td style="block-size: 15.5938px; border-block-color: rgb(221, 221, 221); border-color: rgb(221, 221, 221); border-collapse: collapse; border-inline-color: rgb(221, 221, 221); caret-color: rgb(221, 221, 221); color: rgb(221, 221, 221); column-rule-color: rgb(221, 221, 221); height: 15.5938px; inline-size: 113.297px; line-height: 15.6px; outline-color: rgb(221, 221, 221); padding-block: 0px; padding: 0px 10px; padding-inline: 10px; perspective-origin: 56.6406px 7.79688px; text-align: center; text-decoration: none solid rgb(221, 221, 221); text-emphasis-color: rgb(221, 221, 221); text-wrap-mode: nowrap; transform-origin: 56.6484px 7.79688px; width: 113.297px; -webkit-text-fill-color: rgb(221, 221, 221); -webkit-text-stroke-color: rgb(221, 221, 221);">&nbsp;</td></tr>
<tr style="block-size: 58.9688px; border-block-color: rgb(128, 128, 128); border-color: rgb(128, 128, 128); border-collapse: collapse; border-inline-color: rgb(128, 128, 128); caret-color: rgb(221, 221, 221); color: rgb(221, 221, 221); column-rule-color: rgb(221, 221, 221); font-size: 12px; height: 58.9688px; inline-size: 1000px; line-height: 18px; outline-color: rgb(221, 221, 221); perspective-origin: 500px 29.4844px; text-align: center; text-decoration: none solid rgb(221, 221, 221); text-emphasis-color: rgb(221, 221, 221); text-wrap-mode: nowrap; transform-origin: 500px 29.4844px; vertical-align: middle; width: 1000px; -webkit-text-fill-color: rgb(221, 221, 221); -webkit-text-stroke-color: rgb(221, 221, 221);">
    <td class="navFooterDescItem" style="block-size: 58.9688px; border-block-color: rgb(221, 221, 221); border-color: rgb(221, 221, 221); border-collapse: collapse; border-inline-color: rgb(221, 221, 221); caret-color: rgb(221, 221, 221); color: rgb(221, 221, 221); column-rule-color: rgb(221, 221, 221); font-size: 11px; height: 58.9688px; inline-size: 113.297px; line-height: 12.65px; outline-color: rgb(221, 221, 221); padding-block: 0px; padding: 0px 8.25px; padding-inline: 8.25px; perspective-origin: 56.6406px 29.4844px; text-align: left; text-decoration: none solid rgb(221, 221, 221); text-emphasis-color: rgb(221, 221, 221); text-wrap-mode: nowrap; transform-origin: 56.6484px 29.4844px; width: 113.297px; -webkit-text-fill-color: rgb(221, 221, 221); -webkit-text-stroke-color: rgb(221, 221, 221);"><a href="http://www.amazon.com/Warehouse-Deals/b?ie=UTF8&amp;node=10158976011&amp;ref_=footer_wrhsdls" class="nav_a" style="border-block-color: rgb(221, 221, 221); border-color: rgb(221, 221, 221); border-collapse: collapse; border-inline-color: rgb(221, 221, 221); caret-color: rgb(221, 221, 221); color: rgb(221, 221, 221); column-rule-color: rgb(221, 221, 221); cursor: pointer; font-size: 11px; line-height: 12.65px; outline-color: rgb(221, 221, 221); text-align: left; text-decoration: none solid rgb(221, 221, 221); text-emphasis-color: rgb(221, 221, 221); -webkit-text-fill-color: rgb(221, 221, 221); -webkit-text-stroke-color: rgb(221, 221, 221);">Amazon Warehouse<br style="border-block-color: rgb(221, 221, 221); border-color: rgb(221, 221, 221); border-collapse: collapse; border-inline-color: rgb(221, 221, 221); caret-color: rgb(221, 221, 221); color: rgb(221, 221, 221); column-rule-color: rgb(221, 221, 221); cursor: pointer; font-size: 11px; line-height: 12.65px; outline-color: rgb(221, 221, 221); text-align: left; text-decoration: none solid rgb(221, 221, 221); text-emphasis-color: rgb(221, 221, 221); -webkit-text-fill-color: rgb(221, 221, 221); -webkit-text-stroke-color: rgb(221, 221, 221);"> <span class="navFooterDescText" style="block-size: 33px; border-block-color: rgb(153, 153, 153); border-color: rgb(153, 153, 153); border-collapse: collapse; border-inline-color: rgb(153, 153, 153); caret-color: rgb(153, 153, 153); color: rgb(153, 153, 153); column-rule-color: rgb(153, 153, 153); cursor: pointer; display: inline-block; font-size: 10px; height: 33px; inline-size: 96.7969px; line-height: 11px; list-style-type: none; outline-color: rgb(153, 153, 153); perspective-origin: 48.3906px 16.5px; text-align: left; text-decoration: none solid rgb(153, 153, 153); text-emphasis-color: rgb(153, 153, 153); transform-origin: 48.3984px 16.5px; width: 96.7969px; -webkit-text-fill-color: rgb(153, 153, 153); -webkit-text-stroke-color: rgb(153, 153, 153);">Great Deals on<br style="border-block-color: rgb(153, 153, 153); border-color: rgb(153, 153, 153); border-collapse: collapse; border-inline-color: rgb(153, 153, 153); caret-color: rgb(153, 153, 153); color: rgb(153, 153, 153); column-rule-color: rgb(153, 153, 153); cursor: pointer; font-size: 10px; line-height: 11px; list-style-type: none; outline-color: rgb(153, 153, 153); text-align: left; text-decoration: none solid rgb(153, 153, 153); text-emphasis-color: rgb(153, 153, 153); -webkit-text-fill-color: rgb(153, 153, 153); -webkit-text-stroke-color: rgb(153, 153, 153);"> Quality Used Products </span></a></td>
    <td class="navFooterDescSpacer" style="block-size: 58.9688px; border-block-color: rgb(221, 221, 221); border-color: rgb(221, 221, 221); border-collapse: collapse; border-inline-color: rgb(221, 221, 221); caret-color: rgb(221, 221, 221); color: rgb(221, 221, 221); column-rule-color: rgb(221, 221, 221); height: 58.9688px; inline-size: 40px; line-height: 15.6px; outline-color: rgb(221, 221, 221); padding-block: 0px; padding: 0px 10px; padding-inline: 10px; perspective-origin: 20px 29.4844px; text-align: center; text-decoration: none solid rgb(221, 221, 221); text-emphasis-color: rgb(221, 221, 221); text-wrap-mode: nowrap; transform-origin: 20px 29.4844px; width: 40px; -webkit-text-fill-color: rgb(221, 221, 221); -webkit-text-stroke-color: rgb(221, 221, 221);"></td>
    <td class="navFooterDescItem" style="block-size: 58.9688px; border-block-color: rgb(221, 221, 221); border-color: rgb(221, 221, 221); border-collapse: collapse; border-inline-color: rgb(221, 221, 221); caret-color: rgb(221, 221, 221); color: rgb(221, 221, 221); column-rule-color: rgb(221, 221, 221); font-size: 11px; height: 58.9688px; inline-size: 147.266px; line-height: 12.65px; outline-color: rgb(221, 221, 221); padding-block: 0px; padding: 0px 8.25px; padding-inline: 8.25px; perspective-origin: 73.625px 29.4844px; text-align: left; text-decoration: none solid rgb(221, 221, 221); text-emphasis-color: rgb(221, 221, 221); text-wrap-mode: nowrap; transform-origin: 73.6328px 29.4844px; width: 147.266px; -webkit-text-fill-color: rgb(221, 221, 221); -webkit-text-stroke-color: rgb(221, 221, 221);"><a href="https://www.wholefoodsmarket.com/" class="nav_a" style="border-block-color: rgb(221, 221, 221); border-color: rgb(221, 221, 221); border-collapse: collapse; border-inline-color: rgb(221, 221, 221); caret-color: rgb(221, 221, 221); color: rgb(221, 221, 221); column-rule-color: rgb(221, 221, 221); cursor: pointer; font-size: 11px; line-height: 12.65px; outline-color: rgb(221, 221, 221); text-align: left; text-decoration: none solid rgb(221, 221, 221); text-emphasis-color: rgb(221, 221, 221); -webkit-text-fill-color: rgb(221, 221, 221); -webkit-text-stroke-color: rgb(221, 221, 221);">Whole Foods Market<br style="border-block-color: rgb(221, 221, 221); border-color: rgb(221, 221, 221); border-collapse: collapse; border-inline-color: rgb(221, 221, 221); caret-color: rgb(221, 221, 221); color: rgb(221, 221, 221); column-rule-color: rgb(221, 221, 221); cursor: pointer; font-size: 11px; line-height: 12.65px; outline-color: rgb(221, 221, 221); text-align: left; text-decoration: none solid rgb(221, 221, 221); text-emphasis-color: rgb(221, 221, 221); -webkit-text-fill-color: rgb(221, 221, 221); -webkit-text-stroke-color: rgb(221, 221, 221);"> <span class="navFooterDescText" style="block-size: 22px; border-block-color: rgb(153, 153, 153); border-color: rgb(153, 153, 153); border-collapse: collapse; border-inline-color: rgb(153, 153, 153); caret-color: rgb(153, 153, 153); color: rgb(153, 153, 153); column-rule-color: rgb(153, 153, 153); cursor: pointer; display: inline-block; font-size: 10px; height: 22px; inline-size: 90.9688px; line-height: 11px; list-style-type: none; outline-color: rgb(153, 153, 153); perspective-origin: 45.4844px 11px; text-align: left; text-decoration: none solid rgb(153, 153, 153); text-emphasis-color: rgb(153, 153, 153); transform-origin: 45.4844px 11px; width: 90.9688px; -webkit-text-fill-color: rgb(153, 153, 153); -webkit-text-stroke-color: rgb(153, 153, 153);">America’s Healthiest<br style="border-block-color: rgb(153, 153, 153); border-color: rgb(153, 153, 153); border-collapse: collapse; border-inline-color: rgb(153, 153, 153); caret-color: rgb(153, 153, 153); color: rgb(153, 153, 153); column-rule-color: rgb(153, 153, 153); cursor: pointer; font-size: 10px; line-height: 11px; list-style-type: none; outline-color: rgb(153, 153, 153); text-align: left; text-decoration: none solid rgb(153, 153, 153); text-emphasis-color: rgb(153, 153, 153); -webkit-text-fill-color: rgb(153, 153, 153); -webkit-text-stroke-color: rgb(153, 153, 153);"> Grocery Store</span></a></td>
    <td class="navFooterDescSpacer" style="block-size: 58.9688px; border-block-color: rgb(221, 221, 221); border-color: rgb(221, 221, 221); border-collapse: collapse; border-inline-color: rgb(221, 221, 221); caret-color: rgb(221, 221, 221); color: rgb(221, 221, 221); column-rule-color: rgb(221, 221, 221); height: 58.9688px; inline-size: 40px; line-height: 15.6px; outline-color: rgb(221, 221, 221); padding-block: 0px; padding: 0px 10px; padding-inline: 10px; perspective-origin: 20px 29.4844px; text-align: center; text-decoration: none solid rgb(221, 221, 221); text-emphasis-color: rgb(221, 221, 221); text-wrap-mode: nowrap; transform-origin: 20px 29.4844px; width: 40px; -webkit-text-fill-color: rgb(221, 221, 221); -webkit-text-stroke-color: rgb(221, 221, 221);"></td>
    <td class="navFooterDescItem" style="block-size: 58.9688px; border-block-color: rgb(221, 221, 221); border-color: rgb(221, 221, 221); border-collapse: collapse; border-inline-color: rgb(221, 221, 221); caret-color: rgb(221, 221, 221); color: rgb(221, 221, 221); column-rule-color: rgb(221, 221, 221); font-size: 11px; height: 58.9688px; inline-size: 96.2969px; line-height: 12.65px; outline-color: rgb(221, 221, 221); padding-block: 0px; padding: 0px 8.25px; padding-inline: 8.25px; perspective-origin: 48.1406px 29.4844px; text-align: left; text-decoration: none solid rgb(221, 221, 221); text-emphasis-color: rgb(221, 221, 221); text-wrap-mode: nowrap; transform-origin: 48.1484px 29.4844px; width: 96.2969px; -webkit-text-fill-color: rgb(221, 221, 221); -webkit-text-stroke-color: rgb(221, 221, 221);"><a href="https://www.woot.com/" class="nav_a" style="border-block-color: rgb(221, 221, 221); border-color: rgb(221, 221, 221); border-collapse: collapse; border-inline-color: rgb(221, 221, 221); caret-color: rgb(221, 221, 221); color: rgb(221, 221, 221); column-rule-color: rgb(221, 221, 221); cursor: pointer; font-size: 11px; line-height: 12.65px; outline-color: rgb(221, 221, 221); text-align: left; text-decoration: none solid rgb(221, 221, 221); text-emphasis-color: rgb(221, 221, 221); -webkit-text-fill-color: rgb(221, 221, 221); -webkit-text-stroke-color: rgb(221, 221, 221);">Woot!<br style="border-block-color: rgb(221, 221, 221); border-color: rgb(221, 221, 221); border-collapse: collapse; border-inline-color: rgb(221, 221, 221); caret-color: rgb(221, 221, 221); color: rgb(221, 221, 221); column-rule-color: rgb(221, 221, 221); cursor: pointer; font-size: 11px; line-height: 12.65px; outline-color: rgb(221, 221, 221); text-align: left; text-decoration: none solid rgb(221, 221, 221); text-emphasis-color: rgb(221, 221, 221); -webkit-text-fill-color: rgb(221, 221, 221); -webkit-text-stroke-color: rgb(221, 221, 221);"> <span class="navFooterDescText" style="block-size: 22px; border-block-color: rgb(153, 153, 153); border-color: rgb(153, 153, 153); border-collapse: collapse; border-inline-color: rgb(153, 153, 153); caret-color: rgb(153, 153, 153); color: rgb(153, 153, 153); column-rule-color: rgb(153, 153, 153); cursor: pointer; display: inline-block; font-size: 10px; height: 22px; inline-size: 58.3906px; line-height: 11px; list-style-type: none; outline-color: rgb(153, 153, 153); perspective-origin: 29.1875px 11px; text-align: left; text-decoration: none solid rgb(153, 153, 153); text-emphasis-color: rgb(153, 153, 153); transform-origin: 29.1953px 11px; width: 58.3906px; -webkit-text-fill-color: rgb(153, 153, 153); -webkit-text-stroke-color: rgb(153, 153, 153);">Deals and <br style="border-block-color: rgb(153, 153, 153); border-color: rgb(153, 153, 153); border-collapse: collapse; border-inline-color: rgb(153, 153, 153); caret-color: rgb(153, 153, 153); color: rgb(153, 153, 153); column-rule-color: rgb(153, 153, 153); cursor: pointer; font-size: 10px; line-height: 11px; list-style-type: none; outline-color: rgb(153, 153, 153); text-align: left; text-decoration: none solid rgb(153, 153, 153); text-emphasis-color: rgb(153, 153, 153); -webkit-text-fill-color: rgb(153, 153, 153); -webkit-text-stroke-color: rgb(153, 153, 153);"> Shenanigans</span></a></td>
    <td class="navFooterDescSpacer" style="block-size: 58.9688px; border-block-color: rgb(221, 221, 221); border-color: rgb(221, 221, 221); border-collapse: collapse; border-inline-color: rgb(221, 221, 221); caret-color: rgb(221, 221, 221); color: rgb(221, 221, 221); column-rule-color: rgb(221, 221, 221); height: 58.9688px; inline-size: 40px; line-height: 15.6px; outline-color: rgb(221, 221, 221); padding-block: 0px; padding: 0px 10px; padding-inline: 10px; perspective-origin: 20px 29.4844px; text-align: center; text-decoration: none solid rgb(221, 221, 221); text-emphasis-color: rgb(221, 221, 221); text-wrap-mode: nowrap; transform-origin: 20px 29.4844px; width: 40px; -webkit-text-fill-color: rgb(221, 221, 221); -webkit-text-stroke-color: rgb(221, 221, 221);"></td>
    <td class="navFooterDescItem" style="block-size: 58.9688px; border-block-color: rgb(221, 221, 221); border-color: rgb(221, 221, 221); border-collapse: collapse; border-inline-color: rgb(221, 221, 221); caret-color: rgb(221, 221, 221); color: rgb(221, 221, 221); column-rule-color: rgb(221, 221, 221); font-size: 11px; height: 58.9688px; inline-size: 119.922px; line-height: 12.65px; outline-color: rgb(221, 221, 221); padding-block: 0px; padding: 0px 8.25px; padding-inline: 8.25px; perspective-origin: 59.9531px 29.4844px; text-align: left; text-decoration: none solid rgb(221, 221, 221); text-emphasis-color: rgb(221, 221, 221); text-wrap-mode: nowrap; transform-origin: 59.9609px 29.4844px; width: 119.922px; -webkit-text-fill-color: rgb(221, 221, 221); -webkit-text-stroke-color: rgb(221, 221, 221);"><a href="https://www.zappos.com/" class="nav_a" style="border-block-color: rgb(221, 221, 221); border-color: rgb(221, 221, 221); border-collapse: collapse; border-inline-color: rgb(221, 221, 221); caret-color: rgb(221, 221, 221); color: rgb(221, 221, 221); column-rule-color: rgb(221, 221, 221); cursor: pointer; font-size: 11px; line-height: 12.65px; outline-color: rgb(221, 221, 221); text-align: left; text-decoration: none solid rgb(221, 221, 221); text-emphasis-color: rgb(221, 221, 221); -webkit-text-fill-color: rgb(221, 221, 221); -webkit-text-stroke-color: rgb(221, 221, 221);">Zappos<br style="border-block-color: rgb(221, 221, 221); border-color: rgb(221, 221, 221); border-collapse: collapse; border-inline-color: rgb(221, 221, 221); caret-color: rgb(221, 221, 221); color: rgb(221, 221, 221); column-rule-color: rgb(221, 221, 221); cursor: pointer; font-size: 11px; line-height: 12.65px; outline-color: rgb(221, 221, 221); text-align: left; text-decoration: none solid rgb(221, 221, 221); text-emphasis-color: rgb(221, 221, 221); -webkit-text-fill-color: rgb(221, 221, 221); -webkit-text-stroke-color: rgb(221, 221, 221);"> <span class="navFooterDescText" style="block-size: 22px; border-block-color: rgb(153, 153, 153); border-color: rgb(153, 153, 153); border-collapse: collapse; border-inline-color: rgb(153, 153, 153); caret-color: rgb(153, 153, 153); color: rgb(153, 153, 153); column-rule-color: rgb(153, 153, 153); cursor: pointer; display: inline-block; font-size: 10px; height: 22px; inline-size: 37.8125px; line-height: 11px; list-style-type: none; outline-color: rgb(153, 153, 153); perspective-origin: 18.9062px 11px; text-align: left; text-decoration: none solid rgb(153, 153, 153); text-emphasis-color: rgb(153, 153, 153); transform-origin: 18.9062px 11px; width: 37.8125px; -webkit-text-fill-color: rgb(153, 153, 153); -webkit-text-stroke-color: rgb(153, 153, 153);">Shoes &amp;<br style="border-block-color: rgb(153, 153, 153); border-color: rgb(153, 153, 153); border-collapse: collapse; border-inline-color: rgb(153, 153, 153); caret-color: rgb(153, 153, 153); color: rgb(153, 153, 153); column-rule-color: rgb(153, 153, 153); cursor: pointer; font-size: 10px; line-height: 11px; list-style-type: none; outline-color: rgb(153, 153, 153); text-align: left; text-decoration: none solid rgb(153, 153, 153); text-emphasis-color: rgb(153, 153, 153); -webkit-text-fill-color: rgb(153, 153, 153); -webkit-text-stroke-color: rgb(153, 153, 153);"> Clothing</span></a></td>
    <td class="navFooterDescSpacer" style="block-size: 58.9688px; border-block-color: rgb(221, 221, 221); border-color: rgb(221, 221, 221); border-collapse: collapse; border-inline-color: rgb(221, 221, 221); caret-color: rgb(221, 221, 221); color: rgb(221, 221, 221); column-rule-color: rgb(221, 221, 221); height: 58.9688px; inline-size: 40px; line-height: 15.6px; outline-color: rgb(221, 221, 221); padding-block: 0px; padding: 0px 10px; padding-inline: 10px; perspective-origin: 20px 29.4844px; text-align: center; text-decoration: none solid rgb(221, 221, 221); text-emphasis-color: rgb(221, 221, 221); text-wrap-mode: nowrap; transform-origin: 20px 29.4844px; width: 40px; -webkit-text-fill-color: rgb(221, 221, 221); -webkit-text-stroke-color: rgb(221, 221, 221);"></td>
    <td class="navFooterDescItem" style="block-size: 58.9688px; border-block-color: rgb(221, 221, 221); border-color: rgb(221, 221, 221); border-collapse: collapse; border-inline-color: rgb(221, 221, 221); caret-color: rgb(221, 221, 221); color: rgb(221, 221, 221); column-rule-color: rgb(221, 221, 221); font-size: 11px; height: 58.9688px; inline-size: 102.312px; line-height: 12.65px; outline-color: rgb(221, 221, 221); padding-block: 0px; padding: 0px 8.25px; padding-inline: 8.25px; perspective-origin: 51.1562px 29.4844px; text-align: left; text-decoration: none solid rgb(221, 221, 221); text-emphasis-color: rgb(221, 221, 221); text-wrap-mode: nowrap; transform-origin: 51.1562px 29.4844px; width: 102.312px; -webkit-text-fill-color: rgb(221, 221, 221); -webkit-text-stroke-color: rgb(221, 221, 221);"><a href="https://ring.com/" class="nav_a" style="border-block-color: rgb(221, 221, 221); border-color: rgb(221, 221, 221); border-collapse: collapse; border-inline-color: rgb(221, 221, 221); caret-color: rgb(221, 221, 221); color: rgb(221, 221, 221); column-rule-color: rgb(221, 221, 221); cursor: pointer; font-size: 11px; line-height: 12.65px; outline-color: rgb(221, 221, 221); text-align: left; text-decoration: none solid rgb(221, 221, 221); text-emphasis-color: rgb(221, 221, 221); -webkit-text-fill-color: rgb(221, 221, 221); -webkit-text-stroke-color: rgb(221, 221, 221);">Ring<br style="border-block-color: rgb(221, 221, 221); border-color: rgb(221, 221, 221); border-collapse: collapse; border-inline-color: rgb(221, 221, 221); caret-color: rgb(221, 221, 221); color: rgb(221, 221, 221); column-rule-color: rgb(221, 221, 221); cursor: pointer; font-size: 11px; line-height: 12.65px; outline-color: rgb(221, 221, 221); text-align: left; text-decoration: none solid rgb(221, 221, 221); text-emphasis-color: rgb(221, 221, 221); -webkit-text-fill-color: rgb(221, 221, 221); -webkit-text-stroke-color: rgb(221, 221, 221);"> <span class="navFooterDescText" style="block-size: 22px; border-block-color: rgb(153, 153, 153); border-color: rgb(153, 153, 153); border-collapse: collapse; border-inline-color: rgb(153, 153, 153); caret-color: rgb(153, 153, 153); color: rgb(153, 153, 153); column-rule-color: rgb(153, 153, 153); cursor: pointer; display: inline-block; font-size: 10px; height: 22px; inline-size: 77.25px; line-height: 11px; list-style-type: none; outline-color: rgb(153, 153, 153); perspective-origin: 38.625px 11px; text-align: left; text-decoration: none solid rgb(153, 153, 153); text-emphasis-color: rgb(153, 153, 153); transform-origin: 38.625px 11px; width: 77.25px; -webkit-text-fill-color: rgb(153, 153, 153); -webkit-text-stroke-color: rgb(153, 153, 153);">Smart Home<br style="border-block-color: rgb(153, 153, 153); border-color: rgb(153, 153, 153); border-collapse: collapse; border-inline-color: rgb(153, 153, 153); caret-color: rgb(153, 153, 153); color: rgb(153, 153, 153); column-rule-color: rgb(153, 153, 153); cursor: pointer; font-size: 10px; line-height: 11px; list-style-type: none; outline-color: rgb(153, 153, 153); text-align: left; text-decoration: none solid rgb(153, 153, 153); text-emphasis-color: rgb(153, 153, 153); -webkit-text-fill-color: rgb(153, 153, 153); -webkit-text-stroke-color: rgb(153, 153, 153);"> Security Systems
</span></a></td>
    <td class="navFooterDescSpacer" style="block-size: 58.9688px; border-block-color: rgb(221, 221, 221); border-color: rgb(221, 221, 221); border-collapse: collapse; border-inline-color: rgb(221, 221, 221); caret-color: rgb(221, 221, 221); color: rgb(221, 221, 221); column-rule-color: rgb(221, 221, 221); height: 58.9688px; inline-size: 40px; line-height: 15.6px; outline-color: rgb(221, 221, 221); padding-block: 0px; padding: 0px 10px; padding-inline: 10px; perspective-origin: 20px 29.4844px; text-align: center; text-decoration: none solid rgb(221, 221, 221); text-emphasis-color: rgb(221, 221, 221); text-wrap-mode: nowrap; transform-origin: 20px 29.4844px; width: 40px; -webkit-text-fill-color: rgb(221, 221, 221); -webkit-text-stroke-color: rgb(221, 221, 221);"></td>
    <td class="navFooterDescItem" style="block-size: 58.9688px; border-block-color: rgb(221, 221, 221); border-color: rgb(221, 221, 221); border-collapse: collapse; border-inline-color: rgb(221, 221, 221); caret-color: rgb(221, 221, 221); color: rgb(221, 221, 221); column-rule-color: rgb(221, 221, 221); font-size: 11px; height: 58.9688px; inline-size: 94.375px; line-height: 12.65px; outline-color: rgb(221, 221, 221); padding-block: 0px; padding: 0px 8.25px; padding-inline: 8.25px; perspective-origin: 47.1875px 29.4844px; text-align: left; text-decoration: none solid rgb(221, 221, 221); text-emphasis-color: rgb(221, 221, 221); text-wrap-mode: nowrap; transform-origin: 47.1875px 29.4844px; width: 94.375px; -webkit-text-fill-color: rgb(221, 221, 221); -webkit-text-stroke-color: rgb(221, 221, 221);"><a href="https://eero.com/" class="nav_a" style="border-block-color: rgb(221, 221, 221); border-color: rgb(221, 221, 221); border-collapse: collapse; border-inline-color: rgb(221, 221, 221); caret-color: rgb(221, 221, 221); color: rgb(221, 221, 221); column-rule-color: rgb(221, 221, 221); cursor: pointer; font-size: 11px; line-height: 12.65px; outline-color: rgb(221, 221, 221); text-align: left; text-decoration: none solid rgb(221, 221, 221); text-emphasis-color: rgb(221, 221, 221); -webkit-text-fill-color: rgb(221, 221, 221); -webkit-text-stroke-color: rgb(221, 221, 221);">eero WiFi<br style="border-block-color: rgb(221, 221, 221); border-color: rgb(221, 221, 221); border-collapse: collapse; border-inline-color: rgb(221, 221, 221); caret-color: rgb(221, 221, 221); color: rgb(221, 221, 221); column-rule-color: rgb(221, 221, 221); cursor: pointer; font-size: 11px; line-height: 12.65px; outline-color: rgb(221, 221, 221); text-align: left; text-decoration: none solid rgb(221, 221, 221); text-emphasis-color: rgb(221, 221, 221); -webkit-text-fill-color: rgb(221, 221, 221); -webkit-text-stroke-color: rgb(221, 221, 221);"> <span class="navFooterDescText" style="block-size: 22px; border-block-color: rgb(153, 153, 153); border-color: rgb(153, 153, 153); border-collapse: collapse; border-inline-color: rgb(153, 153, 153); caret-color: rgb(153, 153, 153); color: rgb(153, 153, 153); column-rule-color: rgb(153, 153, 153); cursor: pointer; display: inline-block; font-size: 10px; height: 22px; inline-size: 75.4219px; line-height: 11px; list-style-type: none; outline-color: rgb(153, 153, 153); perspective-origin: 37.7031px 11px; text-align: left; text-decoration: none solid rgb(153, 153, 153); text-emphasis-color: rgb(153, 153, 153); transform-origin: 37.7109px 11px; width: 75.4219px; -webkit-text-fill-color: rgb(153, 153, 153); -webkit-text-stroke-color: rgb(153, 153, 153);">Stream 4K Video<br style="border-block-color: rgb(153, 153, 153); border-color: rgb(153, 153, 153); border-collapse: collapse; border-inline-color: rgb(153, 153, 153); caret-color: rgb(153, 153, 153); color: rgb(153, 153, 153); column-rule-color: rgb(153, 153, 153); cursor: pointer; font-size: 10px; line-height: 11px; list-style-type: none; outline-color: rgb(153, 153, 153); text-align: left; text-decoration: none solid rgb(153, 153, 153); text-emphasis-color: rgb(153, 153, 153); -webkit-text-fill-color: rgb(153, 153, 153); -webkit-text-stroke-color: rgb(153, 153, 153);"> in Every Room</span></a></td>
    <td class="navFooterDescSpacer" style="block-size: 58.9688px; border-block-color: rgb(221, 221, 221); border-color: rgb(221, 221, 221); border-collapse: collapse; border-inline-color: rgb(221, 221, 221); caret-color: rgb(221, 221, 221); color: rgb(221, 221, 221); column-rule-color: rgb(221, 221, 221); height: 58.9688px; inline-size: 40px; line-height: 15.6px; outline-color: rgb(221, 221, 221); padding-block: 0px; padding: 0px 10px; padding-inline: 10px; perspective-origin: 20px 29.4844px; text-align: center; text-decoration: none solid rgb(221, 221, 221); text-emphasis-color: rgb(221, 221, 221); text-wrap-mode: nowrap; transform-origin: 20px 29.4844px; width: 40px; -webkit-text-fill-color: rgb(221, 221, 221); -webkit-text-stroke-color: rgb(221, 221, 221);"></td>
    <td class="navFooterDescItem" style="block-size: 58.9688px; border-block-color: rgb(221, 221, 221); border-color: rgb(221, 221, 221); border-collapse: collapse; border-inline-color: rgb(221, 221, 221); caret-color: rgb(221, 221, 221); color: rgb(221, 221, 221); column-rule-color: rgb(221, 221, 221); font-size: 11px; height: 58.9688px; inline-size: 86.5312px; line-height: 12.65px; outline-color: rgb(221, 221, 221); padding-block: 0px; padding: 0px 8.25px; padding-inline: 8.25px; perspective-origin: 43.2656px 29.4844px; text-align: left; text-decoration: none solid rgb(221, 221, 221); text-emphasis-color: rgb(221, 221, 221); text-wrap-mode: nowrap; transform-origin: 43.2656px 29.4844px; width: 86.5312px; -webkit-text-fill-color: rgb(221, 221, 221); -webkit-text-stroke-color: rgb(221, 221, 221);"><a href="https://shop.ring.com/pages/neighbors-app" class="nav_a" style="border-block-color: rgb(221, 221, 221); border-color: rgb(221, 221, 221); border-collapse: collapse; border-inline-color: rgb(221, 221, 221); caret-color: rgb(221, 221, 221); color: rgb(221, 221, 221); column-rule-color: rgb(221, 221, 221); cursor: pointer; font-size: 11px; line-height: 12.65px; outline-color: rgb(221, 221, 221); text-align: left; text-decoration: none solid rgb(221, 221, 221); text-emphasis-color: rgb(221, 221, 221); -webkit-text-fill-color: rgb(221, 221, 221); -webkit-text-stroke-color: rgb(221, 221, 221);">Neighbors App <br style="border-block-color: rgb(221, 221, 221); border-color: rgb(221, 221, 221); border-collapse: collapse; border-inline-color: rgb(221, 221, 221); caret-color: rgb(221, 221, 221); color: rgb(221, 221, 221); column-rule-color: rgb(221, 221, 221); cursor: pointer; font-size: 11px; line-height: 12.65px; outline-color: rgb(221, 221, 221); text-align: left; text-decoration: none solid rgb(221, 221, 221); text-emphasis-color: rgb(221, 221, 221); -webkit-text-fill-color: rgb(221, 221, 221); -webkit-text-stroke-color: rgb(221, 221, 221);"> <span class="navFooterDescText" style="block-size: 33px; border-block-color: rgb(153, 153, 153); border-color: rgb(153, 153, 153); border-collapse: collapse; border-inline-color: rgb(153, 153, 153); caret-color: rgb(153, 153, 153); color: rgb(153, 153, 153); column-rule-color: rgb(153, 153, 153); cursor: pointer; display: inline-block; font-size: 10px; height: 33px; inline-size: 70.0312px; line-height: 11px; list-style-type: none; outline-color: rgb(153, 153, 153); perspective-origin: 35.0156px 16.5px; text-align: left; text-decoration: none solid rgb(153, 153, 153); text-emphasis-color: rgb(153, 153, 153); transform-origin: 35.0156px 16.5px; width: 70.0312px; -webkit-text-fill-color: rgb(153, 153, 153); -webkit-text-stroke-color: rgb(153, 153, 153);"> Real-Time Crime<br style="border-block-color: rgb(153, 153, 153); border-color: rgb(153, 153, 153); border-collapse: collapse; border-inline-color: rgb(153, 153, 153); caret-color: rgb(153, 153, 153); color: rgb(153, 153, 153); column-rule-color: rgb(153, 153, 153); cursor: pointer; font-size: 10px; line-height: 11px; list-style-type: none; outline-color: rgb(153, 153, 153); text-align: left; text-decoration: none solid rgb(153, 153, 153); text-emphasis-color: rgb(153, 153, 153); -webkit-text-fill-color: rgb(153, 153, 153); -webkit-text-stroke-color: rgb(153, 153, 153);"> &amp; Safety Alerts
</span></a></td>
</tr>
<tr style="block-size: 15.5938px; border-block-color: rgb(128, 128, 128); border-color: rgb(128, 128, 128); border-collapse: collapse; border-inline-color: rgb(128, 128, 128); caret-color: rgb(221, 221, 221); color: rgb(221, 221, 221); column-rule-color: rgb(221, 221, 221); font-size: 12px; height: 15.5938px; inline-size: 1000px; line-height: 18px; outline-color: rgb(221, 221, 221); perspective-origin: 500px 7.79688px; text-align: center; text-decoration: none solid rgb(221, 221, 221); text-emphasis-color: rgb(221, 221, 221); text-wrap-mode: nowrap; transform-origin: 500px 7.79688px; vertical-align: middle; width: 1000px; -webkit-text-fill-color: rgb(221, 221, 221); -webkit-text-stroke-color: rgb(221, 221, 221);"><td style="block-size: 15.5938px; border-block-color: rgb(221, 221, 221); border-color: rgb(221, 221, 221); border-collapse: collapse; border-inline-color: rgb(221, 221, 221); caret-color: rgb(221, 221, 221); color: rgb(221, 221, 221); column-rule-color: rgb(221, 221, 221); height: 15.5938px; inline-size: 113.297px; line-height: 15.6px; outline-color: rgb(221, 221, 221); padding-block: 0px; padding: 0px 10px; padding-inline: 10px; perspective-origin: 56.6406px 7.79688px; text-align: center; text-decoration: none solid rgb(221, 221, 221); text-emphasis-color: rgb(221, 221, 221); text-wrap-mode: nowrap; transform-origin: 56.6484px 7.79688px; width: 113.297px; -webkit-text-fill-color: rgb(221, 221, 221); -webkit-text-stroke-color: rgb(221, 221, 221);">&nbsp;</td></tr>
<tr style="block-size: 58.9688px; border-block-color: rgb(128, 128, 128); border-color: rgb(128, 128, 128); border-collapse: collapse; border-inline-color: rgb(128, 128, 128); caret-color: rgb(221, 221, 221); color: rgb(221, 221, 221); column-rule-color: rgb(221, 221, 221); font-size: 12px; height: 58.9688px; inline-size: 1000px; line-height: 18px; outline-color: rgb(221, 221, 221); perspective-origin: 500px 29.4844px; text-align: center; text-decoration: none solid rgb(221, 221, 221); text-emphasis-color: rgb(221, 221, 221); text-wrap-mode: nowrap; transform-origin: 500px 29.4844px; vertical-align: middle; width: 1000px; -webkit-text-fill-color: rgb(221, 221, 221); -webkit-text-stroke-color: rgb(221, 221, 221);">
    <td class="navFooterDescItem" style="block-size: 58.9688px; border-block-color: rgb(221, 221, 221); border-color: rgb(221, 221, 221); border-collapse: collapse; border-inline-color: rgb(221, 221, 221); caret-color: rgb(221, 221, 221); color: rgb(221, 221, 221); column-rule-color: rgb(221, 221, 221); font-size: 11px; height: 58.9688px; inline-size: 113.297px; line-height: 12.65px; outline-color: rgb(221, 221, 221); padding-block: 0px; padding: 0px 8.25px; padding-inline: 8.25px; perspective-origin: 56.6406px 29.4844px; text-align: left; text-decoration: none solid rgb(221, 221, 221); text-emphasis-color: rgb(221, 221, 221); text-wrap-mode: nowrap; transform-origin: 56.6484px 29.4844px; width: 113.297px; -webkit-text-fill-color: rgb(221, 221, 221); -webkit-text-stroke-color: rgb(221, 221, 221);">&nbsp;</td>
    <td class="navFooterDescSpacer" style="block-size: 58.9688px; border-block-color: rgb(221, 221, 221); border-color: rgb(221, 221, 221); border-collapse: collapse; border-inline-color: rgb(221, 221, 221); caret-color: rgb(221, 221, 221); color: rgb(221, 221, 221); column-rule-color: rgb(221, 221, 221); height: 58.9688px; inline-size: 40px; line-height: 15.6px; outline-color: rgb(221, 221, 221); padding-block: 0px; padding: 0px 10px; padding-inline: 10px; perspective-origin: 20px 29.4844px; text-align: center; text-decoration: none solid rgb(221, 221, 221); text-emphasis-color: rgb(221, 221, 221); text-wrap-mode: nowrap; transform-origin: 20px 29.4844px; width: 40px; -webkit-text-fill-color: rgb(221, 221, 221); -webkit-text-stroke-color: rgb(221, 221, 221);"></td>
    <td class="navFooterDescItem" style="block-size: 58.9688px; border-block-color: rgb(221, 221, 221); border-color: rgb(221, 221, 221); border-collapse: collapse; border-inline-color: rgb(221, 221, 221); caret-color: rgb(221, 221, 221); color: rgb(221, 221, 221); column-rule-color: rgb(221, 221, 221); font-size: 11px; height: 58.9688px; inline-size: 147.266px; line-height: 12.65px; outline-color: rgb(221, 221, 221); padding-block: 0px; padding: 0px 8.25px; padding-inline: 8.25px; perspective-origin: 73.625px 29.4844px; text-align: left; text-decoration: none solid rgb(221, 221, 221); text-emphasis-color: rgb(221, 221, 221); text-wrap-mode: nowrap; transform-origin: 73.6328px 29.4844px; width: 147.266px; -webkit-text-fill-color: rgb(221, 221, 221); -webkit-text-stroke-color: rgb(221, 221, 221);"><a href="http://www.amazon.com/b?ie=UTF8&amp;node=14498690011&amp;ref_=amzn_nav_ftr_swa" class="nav_a" style="border-block-color: rgb(221, 221, 221); border-color: rgb(221, 221, 221); border-collapse: collapse; border-inline-color: rgb(221, 221, 221); caret-color: rgb(221, 221, 221); color: rgb(221, 221, 221); column-rule-color: rgb(221, 221, 221); cursor: pointer; font-size: 11px; line-height: 12.65px; outline-color: rgb(221, 221, 221); text-align: left; text-decoration: none solid rgb(221, 221, 221); text-emphasis-color: rgb(221, 221, 221); -webkit-text-fill-color: rgb(221, 221, 221); -webkit-text-stroke-color: rgb(221, 221, 221);">Amazon Subscription Boxes<br style="border-block-color: rgb(221, 221, 221); border-color: rgb(221, 221, 221); border-collapse: collapse; border-inline-color: rgb(221, 221, 221); caret-color: rgb(221, 221, 221); color: rgb(221, 221, 221); column-rule-color: rgb(221, 221, 221); cursor: pointer; font-size: 11px; line-height: 12.65px; outline-color: rgb(221, 221, 221); text-align: left; text-decoration: none solid rgb(221, 221, 221); text-emphasis-color: rgb(221, 221, 221); -webkit-text-fill-color: rgb(221, 221, 221); -webkit-text-stroke-color: rgb(221, 221, 221);"> <span class="navFooterDescText" style="block-size: 22px; border-block-color: rgb(153, 153, 153); border-color: rgb(153, 153, 153); border-collapse: collapse; border-inline-color: rgb(153, 153, 153); caret-color: rgb(153, 153, 153); color: rgb(153, 153, 153); column-rule-color: rgb(153, 153, 153); cursor: pointer; display: inline-block; font-size: 10px; height: 22px; inline-size: 130.766px; line-height: 11px; list-style-type: none; outline-color: rgb(153, 153, 153); perspective-origin: 65.375px 11px; text-align: left; text-decoration: none solid rgb(153, 153, 153); text-emphasis-color: rgb(153, 153, 153); transform-origin: 65.3828px 11px; width: 130.766px; -webkit-text-fill-color: rgb(153, 153, 153); -webkit-text-stroke-color: rgb(153, 153, 153);">Top subscription boxes – right to your door</span></a></td>
    <td class="navFooterDescSpacer" style="block-size: 58.9688px; border-block-color: rgb(221, 221, 221); border-color: rgb(221, 221, 221); border-collapse: collapse; border-inline-color: rgb(221, 221, 221); caret-color: rgb(221, 221, 221); color: rgb(221, 221, 221); column-rule-color: rgb(221, 221, 221); height: 58.9688px; inline-size: 40px; line-height: 15.6px; outline-color: rgb(221, 221, 221); padding-block: 0px; padding: 0px 10px; padding-inline: 10px; perspective-origin: 20px 29.4844px; text-align: center; text-decoration: none solid rgb(221, 221, 221); text-emphasis-color: rgb(221, 221, 221); text-wrap-mode: nowrap; transform-origin: 20px 29.4844px; width: 40px; -webkit-text-fill-color: rgb(221, 221, 221); -webkit-text-stroke-color: rgb(221, 221, 221);"></td>
    <td class="navFooterDescItem" style="block-size: 58.9688px; border-block-color: rgb(221, 221, 221); border-color: rgb(221, 221, 221); border-collapse: collapse; border-inline-color: rgb(221, 221, 221); caret-color: rgb(221, 221, 221); color: rgb(221, 221, 221); column-rule-color: rgb(221, 221, 221); font-size: 11px; height: 58.9688px; inline-size: 96.2969px; line-height: 12.65px; outline-color: rgb(221, 221, 221); padding-block: 0px; padding: 0px 8.25px; padding-inline: 8.25px; perspective-origin: 48.1406px 29.4844px; text-align: left; text-decoration: none solid rgb(221, 221, 221); text-emphasis-color: rgb(221, 221, 221); text-wrap-mode: nowrap; transform-origin: 48.1484px 29.4844px; width: 96.2969px; -webkit-text-fill-color: rgb(221, 221, 221); -webkit-text-stroke-color: rgb(221, 221, 221);"><a href="https://www.pillpack.com/" class="nav_a" style="border-block-color: rgb(221, 221, 221); border-color: rgb(221, 221, 221); border-collapse: collapse; border-inline-color: rgb(221, 221, 221); caret-color: rgb(221, 221, 221); color: rgb(221, 221, 221); column-rule-color: rgb(221, 221, 221); cursor: pointer; font-size: 11px; line-height: 12.65px; outline-color: rgb(221, 221, 221); text-align: left; text-decoration: none solid rgb(221, 221, 221); text-emphasis-color: rgb(221, 221, 221); -webkit-text-fill-color: rgb(221, 221, 221); -webkit-text-stroke-color: rgb(221, 221, 221);">PillPack<br style="border-block-color: rgb(221, 221, 221); border-color: rgb(221, 221, 221); border-collapse: collapse; border-inline-color: rgb(221, 221, 221); caret-color: rgb(221, 221, 221); color: rgb(221, 221, 221); column-rule-color: rgb(221, 221, 221); cursor: pointer; font-size: 11px; line-height: 12.65px; outline-color: rgb(221, 221, 221); text-align: left; text-decoration: none solid rgb(221, 221, 221); text-emphasis-color: rgb(221, 221, 221); -webkit-text-fill-color: rgb(221, 221, 221); -webkit-text-stroke-color: rgb(221, 221, 221);"> <span class="navFooterDescText" style="block-size: 22px; border-block-color: rgb(153, 153, 153); border-color: rgb(153, 153, 153); border-collapse: collapse; border-inline-color: rgb(153, 153, 153); caret-color: rgb(153, 153, 153); color: rgb(153, 153, 153); column-rule-color: rgb(153, 153, 153); cursor: pointer; display: inline-block; font-size: 10px; height: 22px; inline-size: 79.7969px; line-height: 11px; list-style-type: none; outline-color: rgb(153, 153, 153); perspective-origin: 39.8906px 11px; text-align: left; text-decoration: none solid rgb(153, 153, 153); text-emphasis-color: rgb(153, 153, 153); transform-origin: 39.8984px 11px; width: 79.7969px; -webkit-text-fill-color: rgb(153, 153, 153); -webkit-text-stroke-color: rgb(153, 153, 153);">Pharmacy Simplified</span></a></td>
    <td class="navFooterDescSpacer" style="block-size: 58.9688px; border-block-color: rgb(221, 221, 221); border-color: rgb(221, 221, 221); border-collapse: collapse; border-inline-color: rgb(221, 221, 221); caret-color: rgb(221, 221, 221); color: rgb(221, 221, 221); column-rule-color: rgb(221, 221, 221); height: 58.9688px; inline-size: 40px; line-height: 15.6px; outline-color: rgb(221, 221, 221); padding-block: 0px; padding: 0px 10px; padding-inline: 10px; perspective-origin: 20px 29.4844px; text-align: center; text-decoration: none solid rgb(221, 221, 221); text-emphasis-color: rgb(221, 221, 221); text-wrap-mode: nowrap; transform-origin: 20px 29.4844px; width: 40px; -webkit-text-fill-color: rgb(221, 221, 221); -webkit-text-stroke-color: rgb(221, 221, 221);"></td>
    <td class="navFooterDescItem" style="block-size: 58.9688px; border-block-color: rgb(221, 221, 221); border-color: rgb(221, 221, 221); border-collapse: collapse; border-inline-color: rgb(221, 221, 221); caret-color: rgb(221, 221, 221); color: rgb(221, 221, 221); column-rule-color: rgb(221, 221, 221); font-size: 11px; height: 58.9688px; inline-size: 119.922px; line-height: 12.65px; outline-color: rgb(221, 221, 221); padding-block: 0px; padding: 0px 8.25px; padding-inline: 8.25px; perspective-origin: 59.9531px 29.4844px; text-align: left; text-decoration: none solid rgb(221, 221, 221); text-emphasis-color: rgb(221, 221, 221); text-wrap-mode: nowrap; transform-origin: 59.9609px 29.4844px; width: 119.922px; -webkit-text-fill-color: rgb(221, 221, 221); -webkit-text-stroke-color: rgb(221, 221, 221);"><a href="http://www.amazon.com/Certified-Refurbished/b?ie=UTF8&amp;node=12653393011&amp;ref_=footer_usrenew" class="nav_a" style="border-block-color: rgb(221, 221, 221); border-color: rgb(221, 221, 221); border-collapse: collapse; border-inline-color: rgb(221, 221, 221); caret-color: rgb(221, 221, 221); color: rgb(221, 221, 221); column-rule-color: rgb(221, 221, 221); cursor: pointer; font-size: 11px; line-height: 12.65px; outline-color: rgb(221, 221, 221); text-align: left; text-decoration: none solid rgb(221, 221, 221); text-emphasis-color: rgb(221, 221, 221); -webkit-text-fill-color: rgb(221, 221, 221); -webkit-text-stroke-color: rgb(221, 221, 221);">Amazon Renewed<br style="border-block-color: rgb(221, 221, 221); border-color: rgb(221, 221, 221); border-collapse: collapse; border-inline-color: rgb(221, 221, 221); caret-color: rgb(221, 221, 221); color: rgb(221, 221, 221); column-rule-color: rgb(221, 221, 221); cursor: pointer; font-size: 11px; line-height: 12.65px; outline-color: rgb(221, 221, 221); text-align: left; text-decoration: none solid rgb(221, 221, 221); text-emphasis-color: rgb(221, 221, 221); -webkit-text-fill-color: rgb(221, 221, 221); -webkit-text-stroke-color: rgb(221, 221, 221);"> <span class="navFooterDescText" style="block-size: 22px; border-block-color: rgb(153, 153, 153); border-color: rgb(153, 153, 153); border-collapse: collapse; border-inline-color: rgb(153, 153, 153); caret-color: rgb(153, 153, 153); color: rgb(153, 153, 153); column-rule-color: rgb(153, 153, 153); cursor: pointer; display: inline-block; font-size: 10px; height: 22px; inline-size: 81.1562px; line-height: 11px; list-style-type: none; outline-color: rgb(153, 153, 153); perspective-origin: 40.5781px 11px; text-align: left; text-decoration: none solid rgb(153, 153, 153); text-emphasis-color: rgb(153, 153, 153); transform-origin: 40.5781px 11px; width: 81.1562px; -webkit-text-fill-color: rgb(153, 153, 153); -webkit-text-stroke-color: rgb(153, 153, 153);">Like-new products<br style="border-block-color: rgb(153, 153, 153); border-color: rgb(153, 153, 153); border-collapse: collapse; border-inline-color: rgb(153, 153, 153); caret-color: rgb(153, 153, 153); color: rgb(153, 153, 153); column-rule-color: rgb(153, 153, 153); cursor: pointer; font-size: 10px; line-height: 11px; list-style-type: none; outline-color: rgb(153, 153, 153); text-align: left; text-decoration: none solid rgb(153, 153, 153); text-emphasis-color: rgb(153, 153, 153); -webkit-text-fill-color: rgb(153, 153, 153); -webkit-text-stroke-color: rgb(153, 153, 153);"> you can trust</span></a></td>
    <td class="navFooterDescSpacer" style="block-size: 58.9688px; border-block-color: rgb(221, 221, 221); border-color: rgb(221, 221, 221); border-collapse: collapse; border-inline-color: rgb(221, 221, 221); caret-color: rgb(221, 221, 221); color: rgb(221, 221, 221); column-rule-color: rgb(221, 221, 221); height: 58.9688px; inline-size: 40px; line-height: 15.6px; outline-color: rgb(221, 221, 221); padding-block: 0px; padding: 0px 10px; padding-inline: 10px; perspective-origin: 20px 29.4844px; text-align: center; text-decoration: none solid rgb(221, 221, 221); text-emphasis-color: rgb(221, 221, 221); text-wrap-mode: nowrap; transform-origin: 20px 29.4844px; width: 40px; -webkit-text-fill-color: rgb(221, 221, 221); -webkit-text-stroke-color: rgb(221, 221, 221);"></td>
    <td class="navFooterDescItem" style="block-size: 58.9688px; border-block-color: rgb(221, 221, 221); border-color: rgb(221, 221, 221); border-collapse: collapse; border-inline-color: rgb(221, 221, 221); caret-color: rgb(221, 221, 221); color: rgb(221, 221, 221); column-rule-color: rgb(221, 221, 221); font-size: 11px; height: 58.9688px; inline-size: 102.312px; line-height: 12.65px; outline-color: rgb(221, 221, 221); padding-block: 0px; padding: 0px 8.25px; padding-inline: 8.25px; perspective-origin: 51.1562px 29.4844px; text-align: left; text-decoration: none solid rgb(221, 221, 221); text-emphasis-color: rgb(221, 221, 221); text-wrap-mode: nowrap; transform-origin: 51.1562px 29.4844px; width: 102.312px; -webkit-text-fill-color: rgb(221, 221, 221); -webkit-text-stroke-color: rgb(221, 221, 221);"><a href="http://www.amazon.com/amazonsecondchance?_encoding=UTF8&amp;ref_=footer_asc" class="nav_a" style="border-block-color: rgb(221, 221, 221); border-color: rgb(221, 221, 221); border-collapse: collapse; border-inline-color: rgb(221, 221, 221); caret-color: rgb(221, 221, 221); color: rgb(221, 221, 221); column-rule-color: rgb(221, 221, 221); cursor: pointer; font-size: 11px; line-height: 12.65px; outline-color: rgb(221, 221, 221); text-align: left; text-decoration: none solid rgb(221, 221, 221); text-emphasis-color: rgb(221, 221, 221); -webkit-text-fill-color: rgb(221, 221, 221); -webkit-text-stroke-color: rgb(221, 221, 221);">Amazon Second Chance<br style="border-block-color: rgb(221, 221, 221); border-color: rgb(221, 221, 221); border-collapse: collapse; border-inline-color: rgb(221, 221, 221); caret-color: rgb(221, 221, 221); color: rgb(221, 221, 221); column-rule-color: rgb(221, 221, 221); cursor: pointer; font-size: 11px; line-height: 12.65px; outline-color: rgb(221, 221, 221); text-align: left; text-decoration: none solid rgb(221, 221, 221); text-emphasis-color: rgb(221, 221, 221); -webkit-text-fill-color: rgb(221, 221, 221); -webkit-text-stroke-color: rgb(221, 221, 221);"> <span class="navFooterDescText" style="block-size: 33px; border-block-color: rgb(153, 153, 153); border-color: rgb(153, 153, 153); border-collapse: collapse; border-inline-color: rgb(153, 153, 153); caret-color: rgb(153, 153, 153); color: rgb(153, 153, 153); column-rule-color: rgb(153, 153, 153); cursor: pointer; display: inline-block; font-size: 10px; height: 33px; inline-size: 85.8125px; line-height: 11px; list-style-type: none; outline-color: rgb(153, 153, 153); perspective-origin: 42.9062px 16.5px; text-align: left; text-decoration: none solid rgb(153, 153, 153); text-emphasis-color: rgb(153, 153, 153); transform-origin: 42.9062px 16.5px; width: 85.8125px; -webkit-text-fill-color: rgb(153, 153, 153); -webkit-text-stroke-color: rgb(153, 153, 153);">Pass it on, trade it in,<br style="border-block-color: rgb(153, 153, 153); border-color: rgb(153, 153, 153); border-collapse: collapse; border-inline-color: rgb(153, 153, 153); caret-color: rgb(153, 153, 153); color: rgb(153, 153, 153); column-rule-color: rgb(153, 153, 153); cursor: pointer; font-size: 10px; line-height: 11px; list-style-type: none; outline-color: rgb(153, 153, 153); text-align: left; text-decoration: none solid rgb(153, 153, 153); text-emphasis-color: rgb(153, 153, 153); -webkit-text-fill-color: rgb(153, 153, 153); -webkit-text-stroke-color: rgb(153, 153, 153);"> give it a second life</span></a></td>
    <td class="navFooterDescSpacer" style="block-size: 58.9688px; border-block-color: rgb(221, 221, 221); border-color: rgb(221, 221, 221); border-collapse: collapse; border-inline-color: rgb(221, 221, 221); caret-color: rgb(221, 221, 221); color: rgb(221, 221, 221); column-rule-color: rgb(221, 221, 221); height: 58.9688px; inline-size: 40px; line-height: 15.6px; outline-color: rgb(221, 221, 221); padding-block: 0px; padding: 0px 10px; padding-inline: 10px; perspective-origin: 20px 29.4844px; text-align: center; text-decoration: none solid rgb(221, 221, 221); text-emphasis-color: rgb(221, 221, 221); text-wrap-mode: nowrap; transform-origin: 20px 29.4844px; width: 40px; -webkit-text-fill-color: rgb(221, 221, 221); -webkit-text-stroke-color: rgb(221, 221, 221);"></td>
    <td class="navFooterDescItem" style="block-size: 58.9688px; border-block-color: rgb(221, 221, 221); border-color: rgb(221, 221, 221); border-collapse: collapse; border-inline-color: rgb(221, 221, 221); caret-color: rgb(221, 221, 221); color: rgb(221, 221, 221); column-rule-color: rgb(221, 221, 221); font-size: 11px; height: 58.9688px; inline-size: 94.375px; line-height: 12.65px; outline-color: rgb(221, 221, 221); padding-block: 0px; padding: 0px 8.25px; padding-inline: 8.25px; perspective-origin: 47.1875px 29.4844px; text-align: left; text-decoration: none solid rgb(221, 221, 221); text-emphasis-color: rgb(221, 221, 221); text-wrap-mode: nowrap; transform-origin: 47.1875px 29.4844px; width: 94.375px; -webkit-text-fill-color: rgb(221, 221, 221); -webkit-text-stroke-color: rgb(221, 221, 221);">&nbsp;</td>
    <td class="navFooterDescSpacer" style="block-size: 58.9688px; border-block-color: rgb(221, 221, 221); border-color: rgb(221, 221, 221); border-collapse: collapse; border-inline-color: rgb(221, 221, 221); caret-color: rgb(221, 221, 221); color: rgb(221, 221, 221); column-rule-color: rgb(221, 221, 221); height: 58.9688px; inline-size: 40px; line-height: 15.6px; outline-color: rgb(221, 221, 221); padding-block: 0px; padding: 0px 10px; padding-inline: 10px; perspective-origin: 20px 29.4844px; text-align: center; text-decoration: none solid rgb(221, 221, 221); text-emphasis-color: rgb(221, 221, 221); text-wrap-mode: nowrap; transform-origin: 20px 29.4844px; width: 40px; -webkit-text-fill-color: rgb(221, 221, 221); -webkit-text-stroke-color: rgb(221, 221, 221);"></td>
    <td class="navFooterDescItem" style="block-size: 58.9688px; border-block-color: rgb(221, 221, 221); border-color: rgb(221, 221, 221); border-collapse: collapse; border-inline-color: rgb(221, 221, 221); caret-color: rgb(221, 221, 221); color: rgb(221, 221, 221); column-rule-color: rgb(221, 221, 221); font-size: 11px; height: 58.9688px; inline-size: 86.5312px; line-height: 12.65px; outline-color: rgb(221, 221, 221); padding-block: 0px; padding: 0px 8.25px; padding-inline: 8.25px; perspective-origin: 43.2656px 29.4844px; text-align: left; text-decoration: none solid rgb(221, 221, 221); text-emphasis-color: rgb(221, 221, 221); text-wrap-mode: nowrap; transform-origin: 43.2656px 29.4844px; width: 86.5312px; -webkit-text-fill-color: rgb(221, 221, 221); -webkit-text-stroke-color: rgb(221, 221, 221);">&nbsp;</td>
</tr>
</tbody></table></div>
<style></style>` },
  { filename: "table as article layout", content: `<table style="padding: 1rem;">
    <tr>
      <td rowspan="3"><img src="image.jpg" style="height:100px;width:100px;border:1px solid black; margin-right: 0.5rem;" alt="Article Image"></td>
      <td><h2>Article Title</h2></td>
    </tr>
    <tr>
      <td>Description of the article goes here. It can span multiple lines and include further details about the article's content.</td>
    </tr>
    <tr>
      <td><button onclick="location.href='article-link.html'">Read More</button></td>
    </tr>
</table>` },
  { filename: "table as breadcrumbs layout", content: `<table>
    <tr>
        <td><a href="#">Home</a></td>
        <td><span>&gt;</span></td>
        <td><a href="#">Category</a></td>
        <td><span>&gt;</span></td>
        <td><a href="#">Subcategory</a></td>
        <td><span>&gt;</span></td>
        <td><a href="#">Page</a></td>
    </tr>
</table>` },
  { filename: "table as layout", content: `<div id="MainContainerPart2" style="background-color: rgb(255, 255, 255); border: 0px; block-size: 1874.58px; float: left; height: 1874.58px; inline-size: 1028px; perspective-origin: 514px 937.281px; text-align: left; transform-origin: 514px 937.289px; width: 1028px">
  <div id="MiddleLeft" style="background-color: rgb(255, 255, 255); block-size: 1612.02px; float: left; height: 1612.02px; inline-size: 750px; padding-block-start: 15px; padding-inline-end: 30px; padding-right: 30px; padding-top: 15px; perspective-origin: 390px 813.5px; text-align: left; transform-origin: 390px 813.508px; width: 750px">
    <table cellpadding="0" cellspacing="0" border="0" width="100%" style="block-size: 715.188px; height: 715.188px; inline-size: 750px; perspective-origin: 375px 357.594px; text-align: left; transform-origin: 375px 357.594px; width: 750px; border-spacing: 0px">
      <tbody style="block-size: 715.188px; border-block-color: rgb(128, 128, 128); border-color: rgb(128, 128, 128); border-inline-color: rgb(128, 128, 128); height: 715.188px; inline-size: 750px; overflow-wrap: break-word; perspective-origin: 375px 357.594px; text-align: left; transform-origin: 375px 357.594px; width: 750px">
        <tr style="block-size: 666px; border-block-color: rgb(128, 128, 128); border-color: rgb(128, 128, 128); border-inline-color: rgb(128, 128, 128); height: 666px; inline-size: 750px; overflow-wrap: break-word; perspective-origin: 375px 333px; text-align: left; transform-origin: 375px 333px; vertical-align: middle; width: 750px">
          <td style="block-size: 666px; height: 666px; inline-size: 750px; overflow-wrap: break-word; padding-block: 0px; padding: 0px; padding-inline: 0px; perspective-origin: 375px 333px; text-align: left; transform-origin: 375px 333px; vertical-align: middle; width: 750px">
            <img
              width="700"
              src="https://cdn.trendhunterstatic.com/i/2010/InTheMedia-ExploitingChaos.gif"
              style="block-size: 45.6094px; height: 45.6094px; inline-size: 700px; margin-block: 5px 20px; margin-bottom: 20px; margin-top: 5px; overflow-wrap: break-word; perspective-origin: 350px 22.7969px; text-align: left; transform-origin: 350px 22.8047px; width: 700px"
              border="0"
              alt="Exploiting Chaos in the Media"
            /><br style="overflow-wrap: break-word; text-align: left" />

            <div style="display: block; float: left; block-size: 592px; height: 592px; inline-size: 350px; overflow-wrap: break-word; perspective-origin: 175px 296px; text-align: left; transform-origin: 175px 296px; width: 350px">
              <img
                border="0"
                alt="Exploiting Chaos Cover"
                align="left"
                style="block-size: 587px; display: block; float: left; height: 587px; inline-size: 330px; margin-block-start: 5px; margin-inline-end: 15px; margin-right: 15px; margin-top: 5px; overflow-wrap: break-word; perspective-origin: 165px 293.5px; text-align: left; transform-origin: 165px 293.5px; vertical-align: top; width: 330px"
                width="330"
                src="https://cdn.trendhunterstatic.com/i/2010/ExploitingChaos3d.jpg"
              /><br style="overflow-wrap: break-word; text-align: left" />
            </div>

            <br style="overflow-wrap: break-word; text-align: left" />

            <h1 style="block-size: 42px; height: 42px; inline-size: 750px; overflow-wrap: break-word; perspective-origin: 375px 21px; text-align: left; transform-origin: 375px 21px; width: 750px">*** NEW: Revised and Updated for 2020, as The Innovation Handbook</h1>
            <a style="display: none; cursor: pointer; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%" target="_blank" href="https://www.trendhunter.com/book"
              ><img
                border="0"
                alt="Exploiting Chaos Cover"
                style="
                  block-size: auto;
                  border-block-color: rgb(102, 102, 102);
                  border-color: rgb(102, 102, 102);
                  border-inline-color: rgb(102, 102, 102);
                  caret-color: rgb(102, 102, 102);
                  color: rgb(102, 102, 102);
                  column-rule-color: rgb(102, 102, 102);
                  cursor: pointer;
                  height: auto;
                  inline-size: 340px;
                  margin-block-start: 5px;
                  margin-top: 5px;
                  overflow-wrap: break-word;
                  perspective-origin: 50% 50%;
                  text-align: left;
                  text-decoration: none solid rgb(102, 102, 102);
                  text-emphasis-color: rgb(102, 102, 102);
                  transform-origin: 50% 50%;
                  width: 340px;
                  -webkit-text-fill-color: rgb(102, 102, 102);
                  -webkit-text-stroke-color: rgb(102, 102, 102);
                "
                width="340"
                src="https://cdn.trendhunterstatic.com/i/2012/Exploiting-Chaos-PDF-Download5-2012.gif" /></a
            ><br style="overflow-wrap: break-word; text-align: left" />

            <div
              style="
                display: block;
                float: left;
                background: rgb(239, 239, 239);
                border: 1px solid rgb(153, 153, 153);
                block-size: 80.3906px;
                border-block: 1px solid rgb(153, 153, 153);
                border-inline: 1px solid rgb(153, 153, 153);
                height: 80.3906px;
                inline-size: 320px;
                margin-block-start: 15px;
                margin-top: 15px;
                overflow-wrap: break-word;
                padding-block: 10px;
                padding: 10px;
                padding-inline: 10px;
                perspective-origin: 171px 51.1875px;
                text-align: left;
                transform-origin: 171px 51.1953px;
                width: 320px;
              "
            >
              <img
                src="https://cdn.trendhunterstatic.com/blockquote.png"
                align="left"
                style="block-size: 28px; display: block; float: left; height: 28px; inline-size: 40px; margin-block-end: 40px; margin-bottom: 40px; overflow-wrap: break-word; perspective-origin: 20px 14px; text-align: left; transform-origin: 20px 14px; vertical-align: top; width: 40px"
                height="28"
                width="40"
              />
              <b style="overflow-wrap: break-word; text-align: left"
                ><font class="Sixteen" style="font-size: 20px; line-height: 22px; font-weight: 700; overflow-wrap: break-word; text-align: left">Without a doubt one of the BEST books on sparking ideas that I have ever read."<br style="font-size: 20px; font-weight: 700; line-height: 22px; overflow-wrap: break-word; text-align: left" /></font> - Jack
                Covert, CEO of CEO Read</b
              >
            </div>

            <div style="display: block; float: left; block-size: 320px; height: 320px; inline-size: 340px; margin-block-start: 15px; margin-top: 15px; overflow-wrap: break-word; perspective-origin: 170px 160px; text-align: left; transform-origin: 170px 160px; width: 340px">
              <font style="font-size: 16px; line-height: 20px; overflow-wrap: break-word; text-align: left">
                EXPLOITING CHAOS is Jeremy Gutsche's award-winning, bestselling, magazine-style book about 150 ways to spark innovation during times of change. It has been translated into 7 languages,
                <a href="https://www.trendhunter.com/book" style="cursor: pointer; font-size: 16px; line-height: 20px; overflow-wrap: break-word; text-align: left">downloaded</a> 400,000 times, tweeted 100,000 times, viewed as a
                <a href="https://www.youtube.com/watch?v=P4gAkM72ah4" style="cursor: pointer; font-size: 16px; line-height: 20px; overflow-wrap: break-word; text-align: left">30 minute keynote</a> 1,100,000 times, and delivered as an
                <a href="https://www.jeremygutsche.com/" style="cursor: pointer; font-size: 16px; line-height: 20px; overflow-wrap: break-word; text-align: left">innovation keynote</a> to 250 audiences totaling 150,000 people. Key lessons include:<br style="font-size: 16px; line-height: 20px; overflow-wrap: break-word; text-align: left" />
                <br style="font-size: 16px; line-height: 20px; overflow-wrap: break-word; text-align: left" />

                1) STRATEGY - Turn chaos into opportunity<br style="font-size: 16px; line-height: 20px; overflow-wrap: break-word; text-align: left" />
                2) CULTURE - Create a culture of innovation<br style="font-size: 16px; line-height: 20px; overflow-wrap: break-word; text-align: left" />
                3) TRENDS - Filter through all the noise<br style="font-size: 16px; line-height: 20px; overflow-wrap: break-word; text-align: left" />
                4) INNOVATION - Increase your odds<br style="font-size: 16px; line-height: 20px; overflow-wrap: break-word; text-align: left" />
                5) MARKETING - Infectiously market your ideas<br style="font-size: 16px; line-height: 20px; overflow-wrap: break-word; text-align: left" />
                <br style="font-size: 16px; line-height: 20px; overflow-wrap: break-word; text-align: left" />
              </font>
            </div>
          </td>
        </tr>
        <tr
          style="block-size: 49.1875px; border-block-color: rgb(128, 128, 128); border-color: rgb(128, 128, 128); border-inline-color: rgb(128, 128, 128); height: 49.1875px; inline-size: 750px; overflow-wrap: break-word; perspective-origin: 375px 24.5938px; text-align: left; transform-origin: 375px 24.5938px; vertical-align: middle; width: 750px"
        >
          <td style="block-size: 49.1875px; height: 49.1875px; inline-size: 750px; overflow-wrap: break-word; padding-block: 0px; padding: 0px; padding-inline: 0px; perspective-origin: 375px 24.5938px; text-align: left; transform-origin: 375px 24.5938px; vertical-align: middle; width: 750px">
            <div
              style="
                display: none;
                float: left;
                background: rgb(255, 0, 0);
                block-size: auto;
                height: auto;
                inline-size: 680px;
                margin-block: 5px 15px;
                margin-bottom: 15px;
                margin-top: 5px;
                overflow-wrap: break-word;
                padding-block: 10px;
                padding: 10px;
                padding-inline: 10px;
                perspective-origin: 50% 50%;
                text-align: left;
                transform-origin: 50% 50%;
                width: 680px;
              "
            >
              <a target="_blank" href="https://www.trendhunter.com/book" style="cursor: pointer; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%"
                ><img
                  border="0"
                  width="680"
                  height="224"
                  src="https://cdn.trendhunterstatic.com/i/2011/Exploiting-Chaos-2012-Relaunch2.gif"
                  style="
                    block-size: 224px;
                    border-block-color: rgb(102, 102, 102);
                    border-color: rgb(102, 102, 102);
                    border-inline-color: rgb(102, 102, 102);
                    caret-color: rgb(102, 102, 102);
                    color: rgb(102, 102, 102);
                    column-rule-color: rgb(102, 102, 102);
                    cursor: pointer;
                    height: 224px;
                    inline-size: 680px;
                    overflow-wrap: break-word;
                    perspective-origin: 50% 50%;
                    text-align: left;
                    text-decoration: none solid rgb(102, 102, 102);
                    text-emphasis-color: rgb(102, 102, 102);
                    transform-origin: 50% 50%;
                    width: 680px;
                    -webkit-text-fill-color: rgb(102, 102, 102);
                    -webkit-text-stroke-color: rgb(102, 102, 102);
                  "
              /></a>
            </div>

            <div
              style="
                display: block;
                float: left;
                background: rgb(0, 0, 0);
                block-size: 19.2031px;
                height: 19.2031px;
                inline-size: 680px;
                margin-block: 5px;
                margin-bottom: 5px;
                margin-top: 5px;
                overflow-wrap: break-word;
                padding-block: 10px;
                padding: 10px;
                padding-inline: 10px;
                perspective-origin: 350px 19.5938px;
                text-align: left;
                transform-origin: 350px 19.6016px;
                width: 680px;
              "
            >
              <font
                class="SixteenY"
                style="
                  border-block-color: rgb(255, 0, 0);
                  border-color: rgb(255, 0, 0);
                  border-inline-color: rgb(255, 0, 0);
                  caret-color: rgb(255, 0, 0);
                  color: rgb(255, 0, 0);
                  column-rule-color: rgb(255, 0, 0);
                  font-size: 16px;
                  line-height: 19.2px;
                  overflow-wrap: break-word;
                  text-align: left;
                  text-decoration: none solid rgb(255, 0, 0);
                  text-emphasis-color: rgb(255, 0, 0);
                  -webkit-text-fill-color: rgb(255, 0, 0);
                  -webkit-text-stroke-color: rgb(255, 0, 0);
                "
              >
                <b
                  style="
                    border-block-color: rgb(255, 0, 0);
                    border-color: rgb(255, 0, 0);
                    border-inline-color: rgb(255, 0, 0);
                    caret-color: rgb(255, 0, 0);
                    color: rgb(255, 0, 0);
                    column-rule-color: rgb(255, 0, 0);
                    font-size: 16px;
                    line-height: 19.2px;
                    overflow-wrap: break-word;
                    text-align: left;
                    text-decoration: none solid rgb(255, 0, 0);
                    text-emphasis-color: rgb(255, 0, 0);
                    -webkit-text-fill-color: rgb(255, 0, 0);
                    -webkit-text-stroke-color: rgb(255, 0, 0);
                  "
                  >New Version:</b
                >
                &nbsp;&nbsp;
              </font>

              <a
                class="SixteenW"
                target="_blank"
                href="https://www.amazon.com/Create-Future-Innovation-Handbook-Disruptive/dp/1732439141?tag=trenhunt0f-20"
                style="
                  border-block-color: rgb(255, 255, 255);
                  border-color: rgb(255, 255, 255);
                  border-inline-color: rgb(255, 255, 255);
                  caret-color: rgb(255, 255, 255);
                  color: rgb(255, 255, 255);
                  column-rule-color: rgb(255, 255, 255);
                  cursor: pointer;
                  font-size: 16px;
                  line-height: 19.2px;
                  outline-color: rgb(255, 255, 255);
                  overflow-wrap: break-word;
                  text-align: left;
                  text-decoration: none solid rgb(255, 255, 255);
                  text-emphasis-color: rgb(255, 255, 255);
                  -webkit-text-fill-color: rgb(255, 255, 255);
                  -webkit-text-stroke-color: rgb(255, 255, 255);
                "
                >Create The Future + The Innovation Handbook - Buy it Now</a
              >
            </div>
          </td>
        </tr>
      </tbody>
    </table>

    <br style="text-align: left" /><br style="text-align: left" /><br style="text-align: left" />

    <a name="services" style="text-align: left"></a>
    <div id="body01" class="expandblock" style="block-size: auto; display: inline; height: auto; inline-size: auto; perspective-origin: 0px 0px; text-align: left; transform-origin: 0px 0px; width: auto">
      <div style="block-size: 27px; height: 27px; inline-size: 750px; perspective-origin: 375px 13.5px; text-align: left; transform-origin: 375px 13.5px; width: 750px">
        <font class="NavBadgeActive" style="text-align: left"
          ><a
            rel="nofollow"
            href="javascript:poptoggle4('body01','body02','body03','body04','body05','body06');"
            style="
              background-color: rgb(102, 102, 102);
              block-size: 20px;
              border-block-color: rgb(255, 255, 255);
              border-color: rgb(255, 255, 255);
              border-inline-color: rgb(255, 255, 255);
              caret-color: rgb(255, 255, 255);
              color: rgb(255, 255, 255);
              column-rule-color: rgb(255, 255, 255);
              cursor: pointer;
              font-size: 18px;
              font-weight: 700;
              height: 20px;
              line-height: 21.6px;
              margin-inline-end: 1px;
              margin-right: 1px;
              outline-color: rgb(255, 255, 255);
              padding-block: 4px 6px;
              padding: 4px 10px 6px;
              padding-inline: 10px;
              text-align: left;
              text-decoration: none solid rgb(255, 255, 255);
              text-emphasis-color: rgb(255, 255, 255);
              -webkit-text-fill-color: rgb(255, 255, 255);
              -webkit-text-stroke-color: rgb(255, 255, 255);
            "
            >Videos</a
          ></font
        >
        <font class="NavBadge" style="text-align: left"
          ><a
            rel="nofollow"
            href="javascript:poptoggle4('body02','body01','body03','body04','body05','body06');"
            style="
              background-color: rgb(212, 212, 212);
              block-size: 20px;
              border-block-color: rgb(0, 0, 0);
              border-color: rgb(0, 0, 0);
              border-inline-color: rgb(0, 0, 0);
              caret-color: rgb(0, 0, 0);
              color: rgb(0, 0, 0);
              column-rule-color: rgb(0, 0, 0);
              cursor: pointer;
              font-size: 18px;
              font-weight: 700;
              height: 20px;
              line-height: 21.6px;
              margin-inline-end: 1px;
              margin-right: 1px;
              outline-color: rgb(0, 0, 0);
              padding-block: 4px 6px;
              padding: 4px 10px 6px;
              padding-inline: 10px;
              text-align: left;
              text-decoration: none solid rgb(0, 0, 0);
              text-emphasis-color: rgb(0, 0, 0);
              -webkit-text-fill-color: rgb(0, 0, 0);
              -webkit-text-stroke-color: rgb(0, 0, 0);
            "
            >Framework</a
          ></font
        >
        <font class="NavBadge" style="text-align: left"
          ><a
            rel="nofollow"
            href="javascript:poptoggle4('body03','body02','body01','body04','body05','body06');"
            style="
              background-color: rgb(212, 212, 212);
              block-size: 20px;
              border-block-color: rgb(0, 0, 0);
              border-color: rgb(0, 0, 0);
              border-inline-color: rgb(0, 0, 0);
              caret-color: rgb(0, 0, 0);
              color: rgb(0, 0, 0);
              column-rule-color: rgb(0, 0, 0);
              cursor: pointer;
              font-size: 18px;
              font-weight: 700;
              height: 20px;
              line-height: 21.6px;
              margin-inline-end: 1px;
              margin-right: 1px;
              outline-color: rgb(0, 0, 0);
              padding-block: 4px 6px;
              padding: 4px 10px 6px;
              padding-inline: 10px;
              text-align: left;
              text-decoration: none solid rgb(0, 0, 0);
              text-emphasis-color: rgb(0, 0, 0);
              -webkit-text-fill-color: rgb(0, 0, 0);
              -webkit-text-stroke-color: rgb(0, 0, 0);
            "
            >Visual Design</a
          ></font
        >
        <font class="NavBadge" style="text-align: left"
          ><a
            rel="nofollow"
            href="javascript:poptoggle4('body04','body02','body03','body01','body05','body06');"
            style="
              background-color: rgb(212, 212, 212);
              block-size: 20px;
              border-block-color: rgb(0, 0, 0);
              border-color: rgb(0, 0, 0);
              border-inline-color: rgb(0, 0, 0);
              caret-color: rgb(0, 0, 0);
              color: rgb(0, 0, 0);
              column-rule-color: rgb(0, 0, 0);
              cursor: pointer;
              font-size: 18px;
              font-weight: 700;
              height: 20px;
              line-height: 21.6px;
              margin-inline-end: 1px;
              margin-right: 1px;
              outline-color: rgb(0, 0, 0);
              padding-block: 4px 6px;
              padding: 4px 10px 6px;
              padding-inline: 10px;
              text-align: left;
              text-decoration: none solid rgb(0, 0, 0);
              text-emphasis-color: rgb(0, 0, 0);
              -webkit-text-fill-color: rgb(0, 0, 0);
              -webkit-text-stroke-color: rgb(0, 0, 0);
            "
            >Press / Testimonials</a
          ></font
        >
        <!-- <font class=NavBadge><a rel=nofollow href="javascript:poptoggle4('body06','body02','body03','body01','body05','body04');">Download (NEW!)</a></font> 
                <font class=NavBadge><a rel=nofollow href="javascript:poptoggle4('body05','body02','body03','body01','body04','body06');">FAQ</a></font>  &nbsp;&nbsp; -->
      </div>

      <div
        id="aboutbox"
        style="
          margin-bottom: 0px;
          background-color: rgb(255, 255, 255);
          block-size: 627.969px;
          border-block: 5px solid rgb(102, 102, 102);
          border-color: rgb(102, 102, 102);
          border-style: solid;
          border-width: 5px;
          border-inline: 5px solid rgb(102, 102, 102);
          height: 627.969px;
          inline-size: 680px;
          padding-block: 8px;
          padding: 8px;
          padding-inline: 8px;
          perspective-origin: 353px 326.984px;
          text-align: left;
          transform-origin: 353px 326.984px;
          width: 680px;
        "
      >
        <br style="text-align: left" />
        <h1 style="block-size: 21px; height: 21px; inline-size: 680px; perspective-origin: 340px 10.5px; text-align: left; transform-origin: 340px 10.5px; width: 680px">Exploiting Chaos Videos</h1>
        <hr style="inline-size: 680px; perspective-origin: 340px 0.5px; text-align: left; transform-origin: 340px 0.5px; width: 680px" />
        <br style="text-align: left" />
        <table width="680" cellpadding="0" border="0" cellspacing="0" style="block-size: 565.188px; height: 565.188px; inline-size: 680px; perspective-origin: 340px 282.594px; text-align: left; transform-origin: 340px 282.594px; width: 680px; border-spacing: 0px">
          <tbody style="block-size: 565.188px; border-block-color: rgb(128, 128, 128); border-color: rgb(128, 128, 128); border-inline-color: rgb(128, 128, 128); height: 565.188px; inline-size: 680px; overflow-wrap: break-word; perspective-origin: 340px 282.594px; text-align: left; transform-origin: 340px 282.594px; width: 680px">
            <tr
              valign="top"
              style="block-size: 282.594px; border-block-color: rgb(128, 128, 128); border-color: rgb(128, 128, 128); border-inline-color: rgb(128, 128, 128); height: 282.594px; inline-size: 680px; overflow-wrap: break-word; perspective-origin: 340px 141.297px; text-align: left; transform-origin: 340px 141.297px; vertical-align: top; width: 680px"
            >
              <td width="350" style="block-size: 282.594px; height: 282.594px; inline-size: 350px; overflow-wrap: break-word; padding-block: 0px; padding: 0px; padding-inline: 0px; perspective-origin: 175px 141.297px; text-align: left; transform-origin: 175px 141.297px; vertical-align: top; width: 350px">
                <font
                  class="SixteenY"
                  style="
                    border-block-color: rgb(255, 0, 0);
                    border-color: rgb(255, 0, 0);
                    border-inline-color: rgb(255, 0, 0);
                    caret-color: rgb(255, 0, 0);
                    color: rgb(255, 0, 0);
                    column-rule-color: rgb(255, 0, 0);
                    font-size: 16px;
                    line-height: 19.2px;
                    overflow-wrap: break-word;
                    text-align: left;
                    text-decoration: none solid rgb(255, 0, 0);
                    text-emphasis-color: rgb(255, 0, 0);
                    -webkit-text-fill-color: rgb(255, 0, 0);
                    -webkit-text-stroke-color: rgb(255, 0, 0);
                  "
                  ><b
                    style="
                      border-block-color: rgb(255, 0, 0);
                      border-color: rgb(255, 0, 0);
                      border-inline-color: rgb(255, 0, 0);
                      caret-color: rgb(255, 0, 0);
                      color: rgb(255, 0, 0);
                      column-rule-color: rgb(255, 0, 0);
                      font-size: 16px;
                      line-height: 19.2px;
                      overflow-wrap: break-word;
                      text-align: left;
                      text-decoration: none solid rgb(255, 0, 0);
                      text-emphasis-color: rgb(255, 0, 0);
                      -webkit-text-fill-color: rgb(255, 0, 0);
                      -webkit-text-stroke-color: rgb(255, 0, 0);
                    "
                    >30 Minute Keynote + Media Clips</b
                  ></font
                ><b style="overflow-wrap: break-word; text-align: left"><br style="font-weight: 700; overflow-wrap: break-word; text-align: left" /></b>
                <iframe
                  width="330"
                  height="260"
                  src="https://www.youtube.com/embed/P4gAkM72ah4?&amp;showsearch=0&amp;rel=0&amp;fs=1&amp;showinfo=0"
                  frameborder="0"
                  allowfullscreen=""
                  data-ruffle-polyfilled=""
                  style="block-size: 260px; border-block-width: 0px; border-width: 0px; border-inline-width: 0px; height: 260px; inline-size: 330px; overflow-wrap: break-word; perspective-origin: 165px 130px; text-align: left; transform-origin: 165px 130px; width: 330px"
                ></iframe>
              </td>
              <td width="330" style="block-size: 282.594px; height: 282.594px; inline-size: 330px; overflow-wrap: break-word; padding-block: 0px; padding: 0px; padding-inline: 0px; perspective-origin: 165px 141.297px; text-align: left; transform-origin: 165px 141.297px; vertical-align: top; width: 330px">
                <font
                  class="SixteenY"
                  style="
                    border-block-color: rgb(255, 0, 0);
                    border-color: rgb(255, 0, 0);
                    border-inline-color: rgb(255, 0, 0);
                    caret-color: rgb(255, 0, 0);
                    color: rgb(255, 0, 0);
                    column-rule-color: rgb(255, 0, 0);
                    font-size: 16px;
                    line-height: 19.2px;
                    overflow-wrap: break-word;
                    text-align: left;
                    text-decoration: none solid rgb(255, 0, 0);
                    text-emphasis-color: rgb(255, 0, 0);
                    -webkit-text-fill-color: rgb(255, 0, 0);
                    -webkit-text-stroke-color: rgb(255, 0, 0);
                  "
                  ><b
                    style="
                      border-block-color: rgb(255, 0, 0);
                      border-color: rgb(255, 0, 0);
                      border-inline-color: rgb(255, 0, 0);
                      caret-color: rgb(255, 0, 0);
                      color: rgb(255, 0, 0);
                      column-rule-color: rgb(255, 0, 0);
                      font-size: 16px;
                      line-height: 19.2px;
                      overflow-wrap: break-word;
                      text-align: left;
                      text-decoration: none solid rgb(255, 0, 0);
                      text-emphasis-color: rgb(255, 0, 0);
                      -webkit-text-fill-color: rgb(255, 0, 0);
                      -webkit-text-stroke-color: rgb(255, 0, 0);
                    "
                    >In Depth Interview (CityTV)</b
                  ></font
                ><b style="overflow-wrap: break-word; text-align: left"><br style="font-weight: 700; overflow-wrap: break-word; text-align: left" /></b>
                <iframe
                  width="330"
                  height="260"
                  src="https://www.youtube.com/embed/9NvyGMxryew?&amp;showsearch=0&amp;rel=0&amp;fs=1&amp;showinfo=0"
                  frameborder="0"
                  allowfullscreen=""
                  data-ruffle-polyfilled=""
                  style="block-size: 260px; border-block-width: 0px; border-width: 0px; border-inline-width: 0px; height: 260px; inline-size: 330px; overflow-wrap: break-word; perspective-origin: 165px 130px; text-align: left; transform-origin: 165px 130px; width: 330px"
                ></iframe>
              </td>
            </tr>
            <tr
              valign="top"
              style="block-size: 282.594px; border-block-color: rgb(128, 128, 128); border-color: rgb(128, 128, 128); border-inline-color: rgb(128, 128, 128); height: 282.594px; inline-size: 680px; overflow-wrap: break-word; perspective-origin: 340px 141.297px; text-align: left; transform-origin: 340px 141.297px; vertical-align: top; width: 680px"
            >
              <td width="350" style="block-size: 282.594px; height: 282.594px; inline-size: 350px; overflow-wrap: break-word; padding-block: 0px; padding: 0px; padding-inline: 0px; perspective-origin: 175px 141.297px; text-align: left; transform-origin: 175px 141.297px; vertical-align: top; width: 350px">
                <font
                  class="SixteenY"
                  style="
                    border-block-color: rgb(255, 0, 0);
                    border-color: rgb(255, 0, 0);
                    border-inline-color: rgb(255, 0, 0);
                    caret-color: rgb(255, 0, 0);
                    color: rgb(255, 0, 0);
                    column-rule-color: rgb(255, 0, 0);
                    font-size: 16px;
                    line-height: 19.2px;
                    overflow-wrap: break-word;
                    text-align: left;
                    text-decoration: none solid rgb(255, 0, 0);
                    text-emphasis-color: rgb(255, 0, 0);
                    -webkit-text-fill-color: rgb(255, 0, 0);
                    -webkit-text-stroke-color: rgb(255, 0, 0);
                  "
                  ><b
                    style="
                      border-block-color: rgb(255, 0, 0);
                      border-color: rgb(255, 0, 0);
                      border-inline-color: rgb(255, 0, 0);
                      caret-color: rgb(255, 0, 0);
                      color: rgb(255, 0, 0);
                      column-rule-color: rgb(255, 0, 0);
                      font-size: 16px;
                      line-height: 19.2px;
                      overflow-wrap: break-word;
                      text-align: left;
                      text-decoration: none solid rgb(255, 0, 0);
                      text-emphasis-color: rgb(255, 0, 0);
                      -webkit-text-fill-color: rgb(255, 0, 0);
                      -webkit-text-stroke-color: rgb(255, 0, 0);
                    "
                    >Reader Review</b
                  ></font
                ><b style="overflow-wrap: break-word; text-align: left"><br style="font-weight: 700; overflow-wrap: break-word; text-align: left" /></b>
                <iframe
                  width="330"
                  height="260"
                  src="https://www.youtube.com/embed/JPkkqekVxXc?&amp;showsearch=0&amp;rel=0&amp;fs=1&amp;showinfo=0"
                  frameborder="0"
                  allowfullscreen=""
                  data-ruffle-polyfilled=""
                  style="block-size: 260px; border-block-width: 0px; border-width: 0px; border-inline-width: 0px; height: 260px; inline-size: 330px; overflow-wrap: break-word; perspective-origin: 165px 130px; text-align: left; transform-origin: 165px 130px; width: 330px"
                ></iframe>
              </td>
              <td width="330" style="block-size: 282.594px; height: 282.594px; inline-size: 330px; overflow-wrap: break-word; padding-block: 0px; padding: 0px; padding-inline: 0px; perspective-origin: 165px 141.297px; text-align: left; transform-origin: 165px 141.297px; vertical-align: top; width: 330px">
                <font
                  class="SixteenY"
                  style="
                    border-block-color: rgb(255, 0, 0);
                    border-color: rgb(255, 0, 0);
                    border-inline-color: rgb(255, 0, 0);
                    caret-color: rgb(255, 0, 0);
                    color: rgb(255, 0, 0);
                    column-rule-color: rgb(255, 0, 0);
                    font-size: 16px;
                    line-height: 19.2px;
                    overflow-wrap: break-word;
                    text-align: left;
                    text-decoration: none solid rgb(255, 0, 0);
                    text-emphasis-color: rgb(255, 0, 0);
                    -webkit-text-fill-color: rgb(255, 0, 0);
                    -webkit-text-stroke-color: rgb(255, 0, 0);
                  "
                  ><b
                    style="
                      border-block-color: rgb(255, 0, 0);
                      border-color: rgb(255, 0, 0);
                      border-inline-color: rgb(255, 0, 0);
                      caret-color: rgb(255, 0, 0);
                      color: rgb(255, 0, 0);
                      column-rule-color: rgb(255, 0, 0);
                      font-size: 16px;
                      line-height: 19.2px;
                      overflow-wrap: break-word;
                      text-align: left;
                      text-decoration: none solid rgb(255, 0, 0);
                      text-emphasis-color: rgb(255, 0, 0);
                      -webkit-text-fill-color: rgb(255, 0, 0);
                      -webkit-text-stroke-color: rgb(255, 0, 0);
                    "
                    >Publicity Stunt</b
                  ></font
                ><b style="overflow-wrap: break-word; text-align: left"><br style="font-weight: 700; overflow-wrap: break-word; text-align: left" /></b>
                <iframe
                  width="330"
                  height="260"
                  src="https://www.youtube.com/embed/lX1BnGTwh7s?&amp;showsearch=0&amp;rel=0&amp;fs=1&amp;showinfo=0"
                  frameborder="0"
                  allowfullscreen=""
                  data-ruffle-polyfilled=""
                  style="block-size: 260px; border-block-width: 0px; border-width: 0px; border-inline-width: 0px; height: 260px; inline-size: 330px; overflow-wrap: break-word; perspective-origin: 165px 130px; text-align: left; transform-origin: 165px 130px; width: 330px"
                ></iframe>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div id="body02" class="collapseblock" style="block-size: auto; display: none; height: auto; inline-size: auto; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; width: auto">
      <div style="block-size: 27px; height: 27px; inline-size: auto; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; width: auto">
        <font class="NavBadge" style="perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%"
          ><a
            rel="nofollow"
            href="javascript:poptoggle4('body01','body02','body03','body04','body05','body06');"
            style="
              background-color: rgb(212, 212, 212);
              block-size: 20px;
              border-block-color: rgb(0, 0, 0);
              border-color: rgb(0, 0, 0);
              border-inline-color: rgb(0, 0, 0);
              caret-color: rgb(0, 0, 0);
              color: rgb(0, 0, 0);
              column-rule-color: rgb(0, 0, 0);
              cursor: pointer;
              font-size: 18px;
              font-weight: 700;
              height: 20px;
              line-height: 21.6px;
              margin-inline-end: 1px;
              margin-right: 1px;
              outline-color: rgb(0, 0, 0);
              padding-block: 4px 6px;
              padding: 4px 10px 6px;
              padding-inline: 10px;
              perspective-origin: 50% 50%;
              text-align: left;
              text-decoration: none solid rgb(0, 0, 0);
              text-emphasis-color: rgb(0, 0, 0);
              transform-origin: 50% 50%;
              -webkit-text-fill-color: rgb(0, 0, 0);
              -webkit-text-stroke-color: rgb(0, 0, 0);
            "
            >Videos</a
          ></font
        >
        <font class="NavBadgeActive" style="perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%"
          ><a
            rel="nofollow"
            href="javascript:poptoggle4('body02','body01','body03','body04','body05','body06');"
            style="
              background-color: rgb(102, 102, 102);
              block-size: 20px;
              border-block-color: rgb(255, 255, 255);
              border-color: rgb(255, 255, 255);
              border-inline-color: rgb(255, 255, 255);
              caret-color: rgb(255, 255, 255);
              color: rgb(255, 255, 255);
              column-rule-color: rgb(255, 255, 255);
              cursor: pointer;
              font-size: 18px;
              font-weight: 700;
              height: 20px;
              line-height: 21.6px;
              margin-inline-end: 1px;
              margin-right: 1px;
              outline-color: rgb(255, 255, 255);
              padding-block: 4px 6px;
              padding: 4px 10px 6px;
              padding-inline: 10px;
              perspective-origin: 50% 50%;
              text-align: left;
              text-decoration: none solid rgb(255, 255, 255);
              text-emphasis-color: rgb(255, 255, 255);
              transform-origin: 50% 50%;
              -webkit-text-fill-color: rgb(255, 255, 255);
              -webkit-text-stroke-color: rgb(255, 255, 255);
            "
            >Framework</a
          ></font
        >
        <font class="NavBadge" style="perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%"
          ><a
            rel="nofollow"
            href="javascript:poptoggle4('body03','body02','body01','body04','body05','body06');"
            style="
              background-color: rgb(212, 212, 212);
              block-size: 20px;
              border-block-color: rgb(0, 0, 0);
              border-color: rgb(0, 0, 0);
              border-inline-color: rgb(0, 0, 0);
              caret-color: rgb(0, 0, 0);
              color: rgb(0, 0, 0);
              column-rule-color: rgb(0, 0, 0);
              cursor: pointer;
              font-size: 18px;
              font-weight: 700;
              height: 20px;
              line-height: 21.6px;
              margin-inline-end: 1px;
              margin-right: 1px;
              outline-color: rgb(0, 0, 0);
              padding-block: 4px 6px;
              padding: 4px 10px 6px;
              padding-inline: 10px;
              perspective-origin: 50% 50%;
              text-align: left;
              text-decoration: none solid rgb(0, 0, 0);
              text-emphasis-color: rgb(0, 0, 0);
              transform-origin: 50% 50%;
              -webkit-text-fill-color: rgb(0, 0, 0);
              -webkit-text-stroke-color: rgb(0, 0, 0);
            "
            >Visual Design</a
          ></font
        >
        <font class="NavBadge" style="perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%"
          ><a
            rel="nofollow"
            href="javascript:poptoggle4('body04','body02','body03','body01','body05','body06');"
            style="
              background-color: rgb(212, 212, 212);
              block-size: 20px;
              border-block-color: rgb(0, 0, 0);
              border-color: rgb(0, 0, 0);
              border-inline-color: rgb(0, 0, 0);
              caret-color: rgb(0, 0, 0);
              color: rgb(0, 0, 0);
              column-rule-color: rgb(0, 0, 0);
              cursor: pointer;
              font-size: 18px;
              font-weight: 700;
              height: 20px;
              line-height: 21.6px;
              margin-inline-end: 1px;
              margin-right: 1px;
              outline-color: rgb(0, 0, 0);
              padding-block: 4px 6px;
              padding: 4px 10px 6px;
              padding-inline: 10px;
              perspective-origin: 50% 50%;
              text-align: left;
              text-decoration: none solid rgb(0, 0, 0);
              text-emphasis-color: rgb(0, 0, 0);
              transform-origin: 50% 50%;
              -webkit-text-fill-color: rgb(0, 0, 0);
              -webkit-text-stroke-color: rgb(0, 0, 0);
            "
            >Press / Testimonials</a
          ></font
        >
        <!-- <font class=NavBadge><a rel=nofollow href="javascript:poptoggle4('body06','body02','body03','body01','body05','body04');">Download (NEW!)</a></font> 
                <font class=NavBadge><a rel=nofollow href="javascript:poptoggle4('body05','body02','body03','body01','body04','body06');">FAQ</a></font>  &nbsp;&nbsp; -->
      </div>
      <div
        id="aboutbox"
        style="
          margin-bottom: 0px;
          background-color: rgb(255, 255, 255);
          block-size: auto;
          border-block: 5px solid rgb(102, 102, 102);
          border-color: rgb(102, 102, 102);
          border-style: solid;
          border-width: 5px;
          border-inline: 5px solid rgb(102, 102, 102);
          height: auto;
          inline-size: 680px;
          padding-block: 8px;
          padding: 8px;
          padding-inline: 8px;
          perspective-origin: 50% 50%;
          text-align: left;
          transform-origin: 50% 50%;
          width: 680px;
        "
      >
        <br style="perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%" />

        <h1 style="block-size: auto; height: auto; inline-size: auto; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; width: auto">The Exploiting Chaos Framework</h1>
        <hr style="inline-size: auto; margin-inline: auto; margin-left: auto; margin-right: auto; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; width: auto" />
        <font class="Sixteen" style="line-height: 22.4px; font-size: 16px; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%">
          <br style="font-size: 16px; line-height: 22.4px; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%" />
          <img
            align="right"
            alt="Exploiting Chaos Framework"
            style="
              border: 1px solid rgb(153, 153, 153);
              block-size: 261px;
              border-block: 1px solid rgb(153, 153, 153);
              border-inline: 1px solid rgb(153, 153, 153);
              display: block;
              float: right;
              font-size: 16px;
              height: 261px;
              inline-size: 350px;
              line-height: 22.4px;
              margin-inline-start: 30px;
              margin-left: 30px;
              perspective-origin: 50% 50%;
              text-align: left;
              transform-origin: 50% 50%;
              vertical-align: top;
              width: 350px;
            "
            src="https://cdn.trendhunterstatic.com/i/2009/ExploitingChaosFramework.jpg"
            width="350"
            height="261"
          />
          <b style="font-size: 16px; line-height: 22.4px; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%">IN TIMES OF CHAOS</b>, the deck gets reshuffled and the rules of the game are changed. To thrive, companies must learn not to create structure and stability, but rather, to adapt quickly.
          <br style="font-size: 16px; line-height: 22.4px; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%" /><br style="font-size: 16px; line-height: 22.4px; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%" />
          Exploiting Chaos suggests that the next wave of management theory will be the science of adaptation. Accordingly, this book approaches adaptation using four equally important tactics: Culture of Revolution, Trend Hunting, Adaptive Innovation, and Infectious Messaging.
          <br style="font-size: 16px; line-height: 22.4px; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%" /><br style="font-size: 16px; line-height: 22.4px; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%" />
          <br style="font-size: 16px; line-height: 22.4px; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%" />

          <h3 style="block-size: auto; height: auto; inline-size: auto; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; width: auto">
            <img
              style="
                block-size: 21px;
                border-block-color: rgb(51, 51, 51);
                border-color: rgb(51, 51, 51);
                border-inline-color: rgb(51, 51, 51);
                caret-color: rgb(51, 51, 51);
                color: rgb(51, 51, 51);
                column-rule-color: rgb(51, 51, 51);
                display: block;
                float: left;
                font-size: 20px;
                font-weight: 700;
                height: 21px;
                inline-size: 22px;
                line-height: 21px;
                margin-inline-end: 10px;
                margin-right: 10px;
                perspective-origin: 50% 50%;
                text-align: left;
                text-decoration: none solid rgb(51, 51, 51);
                text-emphasis-color: rgb(51, 51, 51);
                transform-origin: 50% 50%;
                vertical-align: top;
                width: 22px;
                -webkit-text-fill-color: rgb(51, 51, 51);
                -webkit-text-stroke-color: rgb(51, 51, 51);
              "
              alt="Culture of Revolution"
              align="left"
              src="https://cdn.trendhunterstatic.com/ExploitingChaosFramework-1.jpg"
              width="22"
              height="21"
            />Culture of Revolution
          </h3>
          Culture is more important than strategy. Culture underlies your organization’s ability to adapt, and times of dramatic change magnify this importance. Most likely, your organization perceives the need to adapt, but uncertainty and resistance are paralyzing innovation. By creating an organizational culture of revolution, you can spark a
          new paradigm for creative change.
          <br style="font-size: 16px; line-height: 22.4px; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%" /><br style="font-size: 16px; line-height: 22.4px; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%" />
          <h3 style="block-size: auto; height: auto; inline-size: auto; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; width: auto">
            <img
              style="
                block-size: 21px;
                border-block-color: rgb(51, 51, 51);
                border-color: rgb(51, 51, 51);
                border-inline-color: rgb(51, 51, 51);
                caret-color: rgb(51, 51, 51);
                color: rgb(51, 51, 51);
                column-rule-color: rgb(51, 51, 51);
                display: block;
                float: left;
                font-size: 20px;
                font-weight: 700;
                height: 21px;
                inline-size: 22px;
                line-height: 21px;
                margin-inline-end: 10px;
                margin-right: 10px;
                perspective-origin: 50% 50%;
                text-align: left;
                text-decoration: none solid rgb(51, 51, 51);
                text-emphasis-color: rgb(51, 51, 51);
                transform-origin: 50% 50%;
                vertical-align: top;
                width: 22px;
                -webkit-text-fill-color: rgb(51, 51, 51);
                -webkit-text-stroke-color: rgb(51, 51, 51);
              "
              alt="Trend Hunting"
              align="left"
              src="https://cdn.trendhunterstatic.com/ExploitingChaosFramework-2.jpg"
              width="22"
              height="21"
            />Trend Hunting
          </h3>
          Innovation and strategic advantage hinge on your ability to anticipate trends and identify the next big thing. By using the cutting-edge framework in this book, you can filter through chaos and identify clusters of opportunity to focus your innovation.
          <br style="font-size: 16px; line-height: 22.4px; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%" /><br style="font-size: 16px; line-height: 22.4px; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%" />
          <h3 style="block-size: auto; height: auto; inline-size: auto; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; width: auto">
            <img
              style="
                block-size: 21px;
                border-block-color: rgb(51, 51, 51);
                border-color: rgb(51, 51, 51);
                border-inline-color: rgb(51, 51, 51);
                caret-color: rgb(51, 51, 51);
                color: rgb(51, 51, 51);
                column-rule-color: rgb(51, 51, 51);
                display: block;
                float: left;
                font-size: 20px;
                font-weight: 700;
                height: 21px;
                inline-size: 22px;
                line-height: 21px;
                margin-inline-end: 10px;
                margin-right: 10px;
                perspective-origin: 50% 50%;
                text-align: left;
                text-decoration: none solid rgb(51, 51, 51);
                text-emphasis-color: rgb(51, 51, 51);
                transform-origin: 50% 50%;
                vertical-align: top;
                width: 22px;
                -webkit-text-fill-color: rgb(51, 51, 51);
                -webkit-text-stroke-color: rgb(51, 51, 51);
              "
              alt="Adaptive Innovation"
              align="left"
              src="https://cdn.trendhunterstatic.com/i/2009/ExploitingChaosFramework-3.jpg"
              width="22"
              height="21"
            />Adaptive Innovation
          </h3>
          Engineers, designers, and scientists have invested billions of dollars to perfect human creativity. By applying the best of their proven practices to your own field, you can think big while acting small. You can rapidly identify and evaluate new opportunities.
          <br style="font-size: 16px; line-height: 22.4px; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%" /><br style="font-size: 16px; line-height: 22.4px; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%" />
          <h3 style="block-size: auto; height: auto; inline-size: auto; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; width: auto">
            <img
              style="
                block-size: 21px;
                border-block-color: rgb(51, 51, 51);
                border-color: rgb(51, 51, 51);
                border-inline-color: rgb(51, 51, 51);
                caret-color: rgb(51, 51, 51);
                color: rgb(51, 51, 51);
                column-rule-color: rgb(51, 51, 51);
                display: block;
                float: left;
                font-size: 20px;
                font-weight: 700;
                height: 21px;
                inline-size: 22px;
                line-height: 21px;
                margin-inline-end: 10px;
                margin-right: 10px;
                perspective-origin: 50% 50%;
                text-align: left;
                text-decoration: none solid rgb(51, 51, 51);
                text-emphasis-color: rgb(51, 51, 51);
                transform-origin: 50% 50%;
                vertical-align: top;
                width: 22px;
                -webkit-text-fill-color: rgb(51, 51, 51);
                -webkit-text-stroke-color: rgb(51, 51, 51);
              "
              alt="Infectious Messaging"
              align="left"
              src="https://cdn.trendhunterstatic.com/ExploitingChaosFramework-4.jpg"
              width="22"
              height="21"
            />Infectious Messaging
          </h3>
          The Internet has created a world cluttered with chaos, but it has also created the world’s first viral platform for ideas. Well-packaged stories travel faster than ever before. Unfortunately, most marketers are stuck in a world dominated by traditional advertising and cliché. By cultivating infection, your ideas will resonate, helping you
          to leapfrog ahead of the competition.
          <br style="font-size: 16px; line-height: 22.4px; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%" /><br style="font-size: 16px; line-height: 22.4px; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%" />
        </font>
        <a href="https://www.exploitingchaos.com/exploitingchaos-download" style="cursor: pointer; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%"
          ><img
            style="
              background: rgb(255, 0, 0);
              block-size: 36px;
              border-block-color: rgb(102, 102, 102);
              border-color: rgb(102, 102, 102);
              border-inline-color: rgb(102, 102, 102);
              caret-color: rgb(102, 102, 102);
              color: rgb(102, 102, 102);
              column-rule-color: rgb(102, 102, 102);
              cursor: pointer;
              height: 36px;
              inline-size: 353px;
              margin-block: 10px;
              margin-bottom: 10px;
              margin-top: 10px;
              perspective-origin: 50% 50%;
              text-align: left;
              text-decoration: none solid rgb(102, 102, 102);
              text-emphasis-color: rgb(102, 102, 102);
              transform-origin: 50% 50%;
              width: 353px;
              -webkit-text-fill-color: rgb(102, 102, 102);
              -webkit-text-stroke-color: rgb(102, 102, 102);
            "
            border="0"
            vspace="10"
            height="36"
            width="353"
            src="https://cdn.trendhunterstatic.com/i/2009/EC-Download2.png"
        /></a>
      </div>
    </div>

    <div id="body03" class="collapseblock" style="block-size: auto; display: none; height: auto; inline-size: auto; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; width: auto">
      <div style="block-size: 27px; height: 27px; inline-size: auto; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; width: auto">
        <font class="NavBadge" style="perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%"
          ><a
            rel="nofollow"
            href="javascript:poptoggle4('body01','body02','body03','body04','body05','body06');"
            style="
              background-color: rgb(212, 212, 212);
              block-size: 20px;
              border-block-color: rgb(0, 0, 0);
              border-color: rgb(0, 0, 0);
              border-inline-color: rgb(0, 0, 0);
              caret-color: rgb(0, 0, 0);
              color: rgb(0, 0, 0);
              column-rule-color: rgb(0, 0, 0);
              cursor: pointer;
              font-size: 18px;
              font-weight: 700;
              height: 20px;
              line-height: 21.6px;
              margin-inline-end: 1px;
              margin-right: 1px;
              outline-color: rgb(0, 0, 0);
              padding-block: 4px 6px;
              padding: 4px 10px 6px;
              padding-inline: 10px;
              perspective-origin: 50% 50%;
              text-align: left;
              text-decoration: none solid rgb(0, 0, 0);
              text-emphasis-color: rgb(0, 0, 0);
              transform-origin: 50% 50%;
              -webkit-text-fill-color: rgb(0, 0, 0);
              -webkit-text-stroke-color: rgb(0, 0, 0);
            "
            >Videos</a
          ></font
        >
        <font class="NavBadge" style="perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%"
          ><a
            rel="nofollow"
            href="javascript:poptoggle4('body02','body01','body03','body04','body05','body06');"
            style="
              background-color: rgb(212, 212, 212);
              block-size: 20px;
              border-block-color: rgb(0, 0, 0);
              border-color: rgb(0, 0, 0);
              border-inline-color: rgb(0, 0, 0);
              caret-color: rgb(0, 0, 0);
              color: rgb(0, 0, 0);
              column-rule-color: rgb(0, 0, 0);
              cursor: pointer;
              font-size: 18px;
              font-weight: 700;
              height: 20px;
              line-height: 21.6px;
              margin-inline-end: 1px;
              margin-right: 1px;
              outline-color: rgb(0, 0, 0);
              padding-block: 4px 6px;
              padding: 4px 10px 6px;
              padding-inline: 10px;
              perspective-origin: 50% 50%;
              text-align: left;
              text-decoration: none solid rgb(0, 0, 0);
              text-emphasis-color: rgb(0, 0, 0);
              transform-origin: 50% 50%;
              -webkit-text-fill-color: rgb(0, 0, 0);
              -webkit-text-stroke-color: rgb(0, 0, 0);
            "
            >Framework</a
          ></font
        >
        <font class="NavBadgeActive" style="perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%"
          ><a
            rel="nofollow"
            href="javascript:poptoggle4('body03','body02','body01','body04','body05','body06');"
            style="
              background-color: rgb(102, 102, 102);
              block-size: 20px;
              border-block-color: rgb(255, 255, 255);
              border-color: rgb(255, 255, 255);
              border-inline-color: rgb(255, 255, 255);
              caret-color: rgb(255, 255, 255);
              color: rgb(255, 255, 255);
              column-rule-color: rgb(255, 255, 255);
              cursor: pointer;
              font-size: 18px;
              font-weight: 700;
              height: 20px;
              line-height: 21.6px;
              margin-inline-end: 1px;
              margin-right: 1px;
              outline-color: rgb(255, 255, 255);
              padding-block: 4px 6px;
              padding: 4px 10px 6px;
              padding-inline: 10px;
              perspective-origin: 50% 50%;
              text-align: left;
              text-decoration: none solid rgb(255, 255, 255);
              text-emphasis-color: rgb(255, 255, 255);
              transform-origin: 50% 50%;
              -webkit-text-fill-color: rgb(255, 255, 255);
              -webkit-text-stroke-color: rgb(255, 255, 255);
            "
            >Visual Design</a
          ></font
        >
        <font class="NavBadge" style="perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%"
          ><a
            rel="nofollow"
            href="javascript:poptoggle4('body04','body02','body03','body01','body05','body06');"
            style="
              background-color: rgb(212, 212, 212);
              block-size: 20px;
              border-block-color: rgb(0, 0, 0);
              border-color: rgb(0, 0, 0);
              border-inline-color: rgb(0, 0, 0);
              caret-color: rgb(0, 0, 0);
              color: rgb(0, 0, 0);
              column-rule-color: rgb(0, 0, 0);
              cursor: pointer;
              font-size: 18px;
              font-weight: 700;
              height: 20px;
              line-height: 21.6px;
              margin-inline-end: 1px;
              margin-right: 1px;
              outline-color: rgb(0, 0, 0);
              padding-block: 4px 6px;
              padding: 4px 10px 6px;
              padding-inline: 10px;
              perspective-origin: 50% 50%;
              text-align: left;
              text-decoration: none solid rgb(0, 0, 0);
              text-emphasis-color: rgb(0, 0, 0);
              transform-origin: 50% 50%;
              -webkit-text-fill-color: rgb(0, 0, 0);
              -webkit-text-stroke-color: rgb(0, 0, 0);
            "
            >Press / Testimonials</a
          ></font
        >
        <!-- <font class=NavBadge><a rel=nofollow href="javascript:poptoggle4('body06','body02','body03','body01','body05','body04');">Download (NEW!)</a></font> 
                <font class=NavBadge><a rel=nofollow href="javascript:poptoggle4('body05','body02','body03','body01','body04','body06');">FAQ</a></font>  &nbsp;&nbsp; -->
      </div>
      <div
        id="aboutbox"
        style="
          margin-bottom: 0px;
          background-color: rgb(255, 255, 255);
          block-size: auto;
          border-block: 5px solid rgb(102, 102, 102);
          border-color: rgb(102, 102, 102);
          border-style: solid;
          border-width: 5px;
          border-inline: 5px solid rgb(102, 102, 102);
          height: auto;
          inline-size: 680px;
          padding-block: 8px;
          padding: 8px;
          padding-inline: 8px;
          perspective-origin: 50% 50%;
          text-align: left;
          transform-origin: 50% 50%;
          width: 680px;
        "
      >
        <br style="perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%" />
        <h4 style="font-size: 22px; line-height: 22px; block-size: auto; height: auto; inline-size: auto; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; width: auto">Visual Design</h4>
        <hr style="inline-size: auto; margin-inline: auto; margin-left: auto; margin-right: auto; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; width: auto" />
        <br style="perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%" />
        <font class="Sixteen" style="line-height: 22.4px; font-size: 16px; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%">
          <b style="font-size: 16px; line-height: 22.4px; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%">Our reading habits have entirely changed in the last decade.</b> Driven by media clutter and our shrinking attention spans, our world has become headline obsessed. Hence, this book is visual and action packed, offering
          two ways to read:<br style="font-size: 16px; line-height: 22.4px; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%" />
          1. Consume the content front-to-back.<br style="font-size: 16px; line-height: 22.4px; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%" />
          2. Just read the headlines on each page. They flow together and will help spark your next big idea.<br style="font-size: 16px; line-height: 22.4px; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%" />
        </font>

        <br style="perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%" />
        <table width="680" cellspacing="0" border="0" style="block-size: auto; height: auto; inline-size: 680px; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; width: 680px; border-spacing: 0px">
          <tbody style="block-size: auto; border-block-color: rgb(128, 128, 128); border-color: rgb(128, 128, 128); border-inline-color: rgb(128, 128, 128); height: auto; inline-size: auto; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; width: auto">
            <tr style="block-size: auto; border-block-color: rgb(128, 128, 128); border-color: rgb(128, 128, 128); border-inline-color: rgb(128, 128, 128); height: auto; inline-size: auto; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; vertical-align: middle; width: auto">
              <td class="Twelve" style="block-size: auto; height: auto; inline-size: auto; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; vertical-align: middle; width: auto">
                <img
                  border="0"
                  style="border: 1px solid rgb(153, 153, 153); block-size: 141px; border-block: 1px solid rgb(153, 153, 153); border-inline: 1px solid rgb(153, 153, 153); height: 141px; inline-size: 220px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; width: 220px"
                  src="https://cdn.trendhunterstatic.com/Exploiting-Chaos_Page_008.jpg"
                  width="220"
                  height="141"
                  alt="Difficulty creates opportunity"
                /><b style="overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%">Difficulty creates opportunity</b><br style="overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%" /><br
                  style="overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%"
                />
              </td>
              <td class="Twelve" style="block-size: auto; height: auto; inline-size: auto; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; vertical-align: middle; width: auto">
                <img
                  border="0"
                  style="border: 1px solid rgb(153, 153, 153); block-size: 141px; border-block: 1px solid rgb(153, 153, 153); border-inline: 1px solid rgb(153, 153, 153); height: 141px; inline-size: 220px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; width: 220px"
                  src="https://cdn.trendhunterstatic.com/Exploiting-Chaos_Page_009.jpg"
                  width="220"
                  height="141"
                  alt="A bit of history"
                /><b style="overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%">A bit of history</b><br style="overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%" /><br
                  style="overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%"
                />
              </td>
              <td class="Twelve" style="block-size: auto; height: auto; inline-size: auto; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; vertical-align: middle; width: auto">
                <img
                  border="0"
                  style="border: 1px solid rgb(153, 153, 153); block-size: 141px; border-block: 1px solid rgb(153, 153, 153); border-inline: 1px solid rgb(153, 153, 153); height: 141px; inline-size: 220px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; width: 220px"
                  src="https://cdn.trendhunterstatic.com/Exploiting-Chaos_Page_010.jpg"
                  width="220"
                  height="141"
                  alt="Crisis creates opportunity"
                /><b style="overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%">Crisis creates opportunity</b><br style="overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%" /><br
                  style="overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%"
                />
              </td>
            </tr>
            <tr style="block-size: auto; border-block-color: rgb(128, 128, 128); border-color: rgb(128, 128, 128); border-inline-color: rgb(128, 128, 128); height: auto; inline-size: auto; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; vertical-align: middle; width: auto">
              <td class="Twelve" style="block-size: auto; height: auto; inline-size: auto; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; vertical-align: middle; width: auto">
                <img
                  border="0"
                  style="border: 1px solid rgb(153, 153, 153); block-size: 141px; border-block: 1px solid rgb(153, 153, 153); border-inline: 1px solid rgb(153, 153, 153); height: 141px; inline-size: 220px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; width: 220px"
                  src="https://cdn.trendhunterstatic.com/Exploiting-Chaos_Page_011.jpg"
                  width="220"
                  height="141"
                  alt="You can thrive in times of loss"
                /><b style="overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%">You can thrive in times of loss</b><br style="overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%" /><br
                  style="overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%"
                />
              </td>
              <td class="Twelve" style="block-size: auto; height: auto; inline-size: auto; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; vertical-align: middle; width: auto">
                <img
                  border="0"
                  style="border: 1px solid rgb(153, 153, 153); block-size: 141px; border-block: 1px solid rgb(153, 153, 153); border-inline: 1px solid rgb(153, 153, 153); height: 141px; inline-size: 220px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; width: 220px"
                  src="https://cdn.trendhunterstatic.com/Exploiting-Chaos_Page_012.jpg"
                  width="220"
                  height="141"
                  alt="Reinvent what people want"
                /><b style="overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%">Reinvent what people want</b><br style="overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%" /><br
                  style="overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%"
                />
              </td>
              <td class="Twelve" style="block-size: auto; height: auto; inline-size: auto; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; vertical-align: middle; width: auto">
                <img
                  border="0"
                  style="border: 1px solid rgb(153, 153, 153); block-size: 141px; border-block: 1px solid rgb(153, 153, 153); border-inline: 1px solid rgb(153, 153, 153); height: 141px; inline-size: 220px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; width: 220px"
                  src="https://cdn.trendhunterstatic.com/Exploiting-Chaos_Page_013.jpg"
                  width="220"
                  height="141"
                  alt="Keep your finger on the pulse of pop culture"
                /><b style="overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%">Keep your finger on the pulse of pop culture</b><br style="overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%" /><br
                  style="overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%"
                />
              </td>
            </tr>
            <tr style="block-size: auto; border-block-color: rgb(128, 128, 128); border-color: rgb(128, 128, 128); border-inline-color: rgb(128, 128, 128); height: auto; inline-size: auto; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; vertical-align: middle; width: auto">
              <td class="Twelve" style="block-size: auto; height: auto; inline-size: auto; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; vertical-align: middle; width: auto">
                <img
                  border="0"
                  style="border: 1px solid rgb(153, 153, 153); block-size: 141px; border-block: 1px solid rgb(153, 153, 153); border-inline: 1px solid rgb(153, 153, 153); height: 141px; inline-size: 220px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; width: 220px"
                  src="https://cdn.trendhunterstatic.com/Exploiting-Chaos_Page_014.jpg"
                  width="220"
                  height="141"
                  alt="Learn the game and start to play"
                /><b style="overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%">Learn the game and start to play</b><br style="overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%" /><br
                  style="overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%"
                />
              </td>
              <td class="Twelve" style="block-size: auto; height: auto; inline-size: auto; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; vertical-align: middle; width: auto">
                <img
                  border="0"
                  style="border: 1px solid rgb(153, 153, 153); block-size: 141px; border-block: 1px solid rgb(153, 153, 153); border-inline: 1px solid rgb(153, 153, 153); height: 141px; inline-size: 220px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; width: 220px"
                  src="https://cdn.trendhunterstatic.com/Exploiting-Chaos_Page_015.jpg"
                  width="220"
                  height="141"
                  alt='"It is not the strongest of the species that survives, nor the most intelligent, but rather the one most adaptable to change."'
                /><b style="overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%">"It is not the strongest of the species that survives, nor the most intelligent, but rather the one most adaptable to change."</b
                ><br style="overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%" /><br style="overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%" />
              </td>
              <td class="Twelve" style="block-size: auto; height: auto; inline-size: auto; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; vertical-align: middle; width: auto">
                <img
                  border="0"
                  style="border: 1px solid rgb(153, 153, 153); block-size: 141px; border-block: 1px solid rgb(153, 153, 153); border-inline: 1px solid rgb(153, 153, 153); height: 141px; inline-size: 220px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; width: 220px"
                  src="https://cdn.trendhunterstatic.com/Exploiting-Chaos_Page_016.jpg"
                  width="220"
                  height="141"
                  alt="Even the clever must adapt"
                /><b style="overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%">Even the clever must adapt</b><br style="overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%" /><br
                  style="overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%"
                />
              </td>
            </tr>
            <tr style="block-size: auto; border-block-color: rgb(128, 128, 128); border-color: rgb(128, 128, 128); border-inline-color: rgb(128, 128, 128); height: auto; inline-size: auto; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; vertical-align: middle; width: auto">
              <td class="Twelve" style="block-size: auto; height: auto; inline-size: auto; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; vertical-align: middle; width: auto">
                <img
                  border="0"
                  style="border: 1px solid rgb(153, 153, 153); block-size: 141px; border-block: 1px solid rgb(153, 153, 153); border-inline: 1px solid rgb(153, 153, 153); height: 141px; inline-size: 220px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; width: 220px"
                  src="https://cdn.trendhunterstatic.com/Exploiting-Chaos_Page_017.jpg"
                  width="220"
                  height="141"
                  alt="You cannot escape disruptive evolution"
                /><b style="overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%">You cannot escape disruptive evolution</b><br style="overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%" /><br
                  style="overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%"
                />
              </td>
              <td class="Twelve" style="block-size: auto; height: auto; inline-size: auto; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; vertical-align: middle; width: auto">
                <img border="0" style="border: 1px solid rgb(153, 153, 153); block-size: 141px; border-block: 1px solid rgb(153, 153, 153); border-inline: 1px solid rgb(153, 153, 153); height: 141px; inline-size: 220px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; width: 220px;"
                src="https://cdn.trendhunterstatic.com/Exploiting-Chaos_Page_018.jpg" width="220" height="141" alt="Don" t="" become="" a="" boiled="" frog'=""><b style="overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%">Don't become a boiled frog</b
                ><br style="overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%" /><br style="overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%" />
              </td>
              <td class="Twelve" style="block-size: auto; height: auto; inline-size: auto; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; vertical-align: middle; width: auto">
                <img
                  border="0"
                  style="border: 1px solid rgb(153, 153, 153); block-size: 141px; border-block: 1px solid rgb(153, 153, 153); border-inline: 1px solid rgb(153, 153, 153); height: 141px; inline-size: 220px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; width: 220px"
                  src="https://cdn.trendhunterstatic.com/Exploiting-Chaos_Page_019.jpg"
                  width="220"
                  height="141"
                  alt="Stay focused on opportunity"
                /><b style="overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%">Stay focused on opportunity</b><br style="overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%" /><br
                  style="overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%"
                />
              </td>
            </tr>
            <tr style="block-size: auto; border-block-color: rgb(128, 128, 128); border-color: rgb(128, 128, 128); border-inline-color: rgb(128, 128, 128); height: auto; inline-size: auto; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; vertical-align: middle; width: auto">
              <td class="Twelve" style="block-size: auto; height: auto; inline-size: auto; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; vertical-align: middle; width: auto">
                <img
                  border="0"
                  style="border: 1px solid rgb(153, 153, 153); block-size: 141px; border-block: 1px solid rgb(153, 153, 153); border-inline: 1px solid rgb(153, 153, 153); height: 141px; inline-size: 220px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; width: 220px"
                  src="https://cdn.trendhunterstatic.com/Exploiting-Chaos_Page_020.jpg"
                  width="220"
                  height="141"
                  alt="Find a way to make sense of all the noise"
                /><b style="overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%">Find a way to make sense of all the noise</b><br style="overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%" /><br
                  style="overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%"
                />
              </td>
              <td class="Twelve" style="block-size: auto; height: auto; inline-size: auto; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; vertical-align: middle; width: auto">
                <img
                  border="0"
                  style="border: 1px solid rgb(153, 153, 153); block-size: 141px; border-block: 1px solid rgb(153, 153, 153); border-inline: 1px solid rgb(153, 153, 153); height: 141px; inline-size: 220px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; width: 220px"
                  src="https://cdn.trendhunterstatic.com/Exploiting-Chaos_Page_021.jpg"
                  width="220"
                  height="141"
                  alt="Accept that the world never returns to normal"
                /><b style="overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%">Accept that the world never returns to normal</b><br style="overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%" /><br
                  style="overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%"
                />
              </td>
              <td class="Twelve" style="block-size: auto; height: auto; inline-size: auto; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; vertical-align: middle; width: auto">
                <img border="0" style="border: 1px solid rgb(153, 153, 153); block-size: 141px; border-block: 1px solid rgb(153, 153, 153); border-inline: 1px solid rgb(153, 153, 153); height: 141px; inline-size: 220px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; width: 220px;"
                src="https://cdn.trendhunterstatic.com/Exploiting-Chaos_Page_022.jpg" width="220" height="141" alt="You don" t="" need="" to="" have="" everything="" figured="" out'=""><b style="overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%">You don't need to have everything figured out</b
                ><br style="overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%" /><br style="overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%" />
              </td>
            </tr>
          </tbody>
        </table>

        <br style="perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%" />

        <a href="https://www.exploitingchaos.com/exploitingchaos-download" style="cursor: pointer; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%"
          ><img
            style="
              background: rgb(255, 0, 0);
              block-size: 36px;
              border-block-color: rgb(102, 102, 102);
              border-color: rgb(102, 102, 102);
              border-inline-color: rgb(102, 102, 102);
              caret-color: rgb(102, 102, 102);
              color: rgb(102, 102, 102);
              column-rule-color: rgb(102, 102, 102);
              cursor: pointer;
              height: 36px;
              inline-size: 353px;
              margin-block: 10px;
              margin-bottom: 10px;
              margin-top: 10px;
              perspective-origin: 50% 50%;
              text-align: left;
              text-decoration: none solid rgb(102, 102, 102);
              text-emphasis-color: rgb(102, 102, 102);
              transform-origin: 50% 50%;
              width: 353px;
              -webkit-text-fill-color: rgb(102, 102, 102);
              -webkit-text-stroke-color: rgb(102, 102, 102);
            "
            border="0"
            vspace="10"
            height="36"
            width="353"
            src="https://cdn.trendhunterstatic.com/i/2009/EC-Download2.png"
        /></a>

        <br style="perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%" />
      </div>
    </div>

    <div id="body04" class="collapseblock" style="block-size: auto; display: none; height: auto; inline-size: auto; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; width: auto">
      <div style="block-size: 27px; height: 27px; inline-size: auto; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; width: auto">
        <font class="NavBadge" style="perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%"
          ><a
            rel="nofollow"
            href="javascript:poptoggle4('body01','body02','body03','body04','body05','body06');"
            style="
              background-color: rgb(212, 212, 212);
              block-size: 20px;
              border-block-color: rgb(0, 0, 0);
              border-color: rgb(0, 0, 0);
              border-inline-color: rgb(0, 0, 0);
              caret-color: rgb(0, 0, 0);
              color: rgb(0, 0, 0);
              column-rule-color: rgb(0, 0, 0);
              cursor: pointer;
              font-size: 18px;
              font-weight: 700;
              height: 20px;
              line-height: 21.6px;
              margin-inline-end: 1px;
              margin-right: 1px;
              outline-color: rgb(0, 0, 0);
              padding-block: 4px 6px;
              padding: 4px 10px 6px;
              padding-inline: 10px;
              perspective-origin: 50% 50%;
              text-align: left;
              text-decoration: none solid rgb(0, 0, 0);
              text-emphasis-color: rgb(0, 0, 0);
              transform-origin: 50% 50%;
              -webkit-text-fill-color: rgb(0, 0, 0);
              -webkit-text-stroke-color: rgb(0, 0, 0);
            "
            >Videos</a
          ></font
        >
        <font class="NavBadge" style="perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%"
          ><a
            rel="nofollow"
            href="javascript:poptoggle4('body02','body01','body03','body04','body05','body06');"
            style="
              background-color: rgb(212, 212, 212);
              block-size: 20px;
              border-block-color: rgb(0, 0, 0);
              border-color: rgb(0, 0, 0);
              border-inline-color: rgb(0, 0, 0);
              caret-color: rgb(0, 0, 0);
              color: rgb(0, 0, 0);
              column-rule-color: rgb(0, 0, 0);
              cursor: pointer;
              font-size: 18px;
              font-weight: 700;
              height: 20px;
              line-height: 21.6px;
              margin-inline-end: 1px;
              margin-right: 1px;
              outline-color: rgb(0, 0, 0);
              padding-block: 4px 6px;
              padding: 4px 10px 6px;
              padding-inline: 10px;
              perspective-origin: 50% 50%;
              text-align: left;
              text-decoration: none solid rgb(0, 0, 0);
              text-emphasis-color: rgb(0, 0, 0);
              transform-origin: 50% 50%;
              -webkit-text-fill-color: rgb(0, 0, 0);
              -webkit-text-stroke-color: rgb(0, 0, 0);
            "
            >Framework</a
          ></font
        >
        <font class="NavBadge" style="perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%"
          ><a
            rel="nofollow"
            href="javascript:poptoggle4('body03','body02','body01','body04','body05','body06');"
            style="
              background-color: rgb(212, 212, 212);
              block-size: 20px;
              border-block-color: rgb(0, 0, 0);
              border-color: rgb(0, 0, 0);
              border-inline-color: rgb(0, 0, 0);
              caret-color: rgb(0, 0, 0);
              color: rgb(0, 0, 0);
              column-rule-color: rgb(0, 0, 0);
              cursor: pointer;
              font-size: 18px;
              font-weight: 700;
              height: 20px;
              line-height: 21.6px;
              margin-inline-end: 1px;
              margin-right: 1px;
              outline-color: rgb(0, 0, 0);
              padding-block: 4px 6px;
              padding: 4px 10px 6px;
              padding-inline: 10px;
              perspective-origin: 50% 50%;
              text-align: left;
              text-decoration: none solid rgb(0, 0, 0);
              text-emphasis-color: rgb(0, 0, 0);
              transform-origin: 50% 50%;
              -webkit-text-fill-color: rgb(0, 0, 0);
              -webkit-text-stroke-color: rgb(0, 0, 0);
            "
            >Visual Design</a
          ></font
        >
        <font class="NavBadgeActive" style="perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%"
          ><a
            rel="nofollow"
            href="javascript:poptoggle4('body04','body02','body03','body01','body05','body06');"
            style="
              background-color: rgb(102, 102, 102);
              block-size: 20px;
              border-block-color: rgb(255, 255, 255);
              border-color: rgb(255, 255, 255);
              border-inline-color: rgb(255, 255, 255);
              caret-color: rgb(255, 255, 255);
              color: rgb(255, 255, 255);
              column-rule-color: rgb(255, 255, 255);
              cursor: pointer;
              font-size: 18px;
              font-weight: 700;
              height: 20px;
              line-height: 21.6px;
              margin-inline-end: 1px;
              margin-right: 1px;
              outline-color: rgb(255, 255, 255);
              padding-block: 4px 6px;
              padding: 4px 10px 6px;
              padding-inline: 10px;
              perspective-origin: 50% 50%;
              text-align: left;
              text-decoration: none solid rgb(255, 255, 255);
              text-emphasis-color: rgb(255, 255, 255);
              transform-origin: 50% 50%;
              -webkit-text-fill-color: rgb(255, 255, 255);
              -webkit-text-stroke-color: rgb(255, 255, 255);
            "
            >Press / Testimonials</a
          ></font
        >
        <!-- <font class=NavBadge><a rel=nofollow href="javascript:poptoggle4('body06','body02','body03','body01','body05','body04');">Download (NEW!)</a></font> 
                <font class=NavBadge><a rel=nofollow href="javascript:poptoggle4('body05','body02','body03','body01','body04','body06');">FAQ</a></font>  &nbsp;&nbsp; -->
      </div>
      <div
        id="aboutbox"
        style="
          margin-bottom: 0px;
          font-size: 16px;
          background-color: rgb(255, 255, 255);
          block-size: auto;
          border-block: 5px solid rgb(102, 102, 102);
          border-color: rgb(102, 102, 102);
          border-style: solid;
          border-width: 5px;
          border-inline: 5px solid rgb(102, 102, 102);
          height: auto;
          inline-size: 680px;
          line-height: 19.2px;
          padding-block: 8px;
          padding: 8px;
          padding-inline: 8px;
          perspective-origin: 50% 50%;
          text-align: left;
          transform-origin: 50% 50%;
          width: 680px;
        "
      >
        <br style="font-size: 16px; line-height: 19.2px; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%" />

        <h4 style="font-size: 22px; line-height: 22px; block-size: auto; height: auto; inline-size: auto; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; width: auto">Press &amp; Testimonials</h4>
        <hr style="font-size: 16px; inline-size: auto; line-height: 19.2px; margin-block: 8px; margin: 8px auto; margin-inline: auto; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; width: auto" />
        <br style="font-size: 16px; line-height: 19.2px; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%" />
        <table width="680" style="block-size: auto; font-size: 16px; height: auto; inline-size: 680px; line-height: 19.2px; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; width: 680px">
          <tbody
            style="
              block-size: auto;
              border-block-color: rgb(128, 128, 128);
              border-color: rgb(128, 128, 128);
              border-inline-color: rgb(128, 128, 128);
              font-size: 16px;
              height: auto;
              inline-size: auto;
              line-height: 19.2px;
              overflow-wrap: break-word;
              perspective-origin: 50% 50%;
              text-align: left;
              transform-origin: 50% 50%;
              width: auto;
              border-spacing: 2px;
            "
          >
            <tr
              valign="top"
              style="
                block-size: auto;
                border-block-color: rgb(128, 128, 128);
                border-color: rgb(128, 128, 128);
                border-inline-color: rgb(128, 128, 128);
                font-size: 16px;
                height: auto;
                inline-size: auto;
                line-height: 19.2px;
                overflow-wrap: break-word;
                perspective-origin: 50% 50%;
                text-align: left;
                transform-origin: 50% 50%;
                vertical-align: top;
                width: auto;
                border-spacing: 2px;
              "
            >
              <td width="90" style="block-size: auto; font-size: 16px; height: auto; inline-size: 90px; line-height: 19.2px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; vertical-align: top; width: 90px; border-spacing: 2px"></td>
              <td width="590" style="block-size: auto; font-size: 16px; height: auto; inline-size: 590px; line-height: 19.2px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; vertical-align: top; width: 590px; border-spacing: 2px">
                <font
                  class="SixteenY"
                  style="
                    border-block-color: rgb(255, 0, 0);
                    border-color: rgb(255, 0, 0);
                    border-inline-color: rgb(255, 0, 0);
                    caret-color: rgb(255, 0, 0);
                    color: rgb(255, 0, 0);
                    column-rule-color: rgb(255, 0, 0);
                    font-size: 16px;
                    line-height: 19.2px;
                    overflow-wrap: break-word;
                    perspective-origin: 50% 50%;
                    text-align: left;
                    text-decoration: none solid rgb(255, 0, 0);
                    text-emphasis-color: rgb(255, 0, 0);
                    transform-origin: 50% 50%;
                    border-spacing: 2px;
                    -webkit-text-fill-color: rgb(255, 0, 0);
                    -webkit-text-stroke-color: rgb(255, 0, 0);
                  "
                >
                  <b
                    style="
                      border-block-color: rgb(255, 0, 0);
                      border-color: rgb(255, 0, 0);
                      border-inline-color: rgb(255, 0, 0);
                      caret-color: rgb(255, 0, 0);
                      color: rgb(255, 0, 0);
                      column-rule-color: rgb(255, 0, 0);
                      font-size: 16px;
                      line-height: 19.2px;
                      overflow-wrap: break-word;
                      perspective-origin: 50% 50%;
                      text-align: left;
                      text-decoration: none solid rgb(255, 0, 0);
                      text-emphasis-color: rgb(255, 0, 0);
                      transform-origin: 50% 50%;
                      border-spacing: 2px;
                      -webkit-text-fill-color: rgb(255, 0, 0);
                      -webkit-text-stroke-color: rgb(255, 0, 0);
                    "
                  >
                    •
                    <a
                      class="Sixteen"
                      href="https://www.trendhunter.com/trends/axiom-business-book-awards"
                      style="
                        border-block-color: rgb(0, 0, 0);
                        border-color: rgb(0, 0, 0);
                        border-inline-color: rgb(0, 0, 0);
                        caret-color: rgb(0, 0, 0);
                        color: rgb(0, 0, 0);
                        column-rule-color: rgb(0, 0, 0);
                        cursor: pointer;
                        font-size: 16px;
                        font-weight: 700;
                        line-height: 19.2px;
                        outline-color: rgb(0, 0, 0);
                        overflow-wrap: break-word;
                        perspective-origin: 50% 50%;
                        text-align: left;
                        text-decoration: none solid rgb(0, 0, 0);
                        text-emphasis-color: rgb(0, 0, 0);
                        transform-origin: 50% 50%;
                        border-spacing: 2px;
                        -webkit-text-fill-color: rgb(0, 0, 0);
                        -webkit-text-stroke-color: rgb(0, 0, 0);
                      "
                      >Axiom Book Award Winner - 2010 Gold Medal in Success / Motivation</a
                    >
                    <br
                      style="
                        border-block-color: rgb(255, 0, 0);
                        border-color: rgb(255, 0, 0);
                        border-inline-color: rgb(255, 0, 0);
                        caret-color: rgb(255, 0, 0);
                        color: rgb(255, 0, 0);
                        column-rule-color: rgb(255, 0, 0);
                        font-size: 16px;
                        font-weight: 700;
                        line-height: 19.2px;
                        overflow-wrap: break-word;
                        perspective-origin: 50% 50%;
                        text-align: left;
                        text-decoration: none solid rgb(255, 0, 0);
                        text-emphasis-color: rgb(255, 0, 0);
                        transform-origin: 50% 50%;
                        border-spacing: 2px;
                        -webkit-text-fill-color: rgb(255, 0, 0);
                        -webkit-text-stroke-color: rgb(255, 0, 0);
                      "
                    />
                    •
                    <a
                      class="Sixteen"
                      href="https://www.trendhunter.com/trends/exploiting-chaos-800-ceo-read1"
                      style="
                        border-block-color: rgb(0, 0, 0);
                        border-color: rgb(0, 0, 0);
                        border-inline-color: rgb(0, 0, 0);
                        caret-color: rgb(0, 0, 0);
                        color: rgb(0, 0, 0);
                        column-rule-color: rgb(0, 0, 0);
                        cursor: pointer;
                        font-size: 16px;
                        font-weight: 700;
                        line-height: 19.2px;
                        outline-color: rgb(0, 0, 0);
                        overflow-wrap: break-word;
                        perspective-origin: 50% 50%;
                        text-align: left;
                        text-decoration: none solid rgb(0, 0, 0);
                        text-emphasis-color: rgb(0, 0, 0);
                        transform-origin: 50% 50%;
                        border-spacing: 2px;
                        -webkit-text-fill-color: rgb(0, 0, 0);
                        -webkit-text-stroke-color: rgb(0, 0, 0);
                      "
                      >#1 Most Popular Book at CEO Read</a
                    ><br
                      style="
                        border-block-color: rgb(255, 0, 0);
                        border-color: rgb(255, 0, 0);
                        border-inline-color: rgb(255, 0, 0);
                        caret-color: rgb(255, 0, 0);
                        color: rgb(255, 0, 0);
                        column-rule-color: rgb(255, 0, 0);
                        font-size: 16px;
                        font-weight: 700;
                        line-height: 19.2px;
                        overflow-wrap: break-word;
                        perspective-origin: 50% 50%;
                        text-align: left;
                        text-decoration: none solid rgb(255, 0, 0);
                        text-emphasis-color: rgb(255, 0, 0);
                        transform-origin: 50% 50%;
                        border-spacing: 2px;
                        -webkit-text-fill-color: rgb(255, 0, 0);
                        -webkit-text-stroke-color: rgb(255, 0, 0);
                      "
                    />
                    •
                    <a
                      class="Sixteen"
                      href="https://www.exploitingchaos.com/"
                      style="
                        border-block-color: rgb(0, 0, 0);
                        border-color: rgb(0, 0, 0);
                        border-inline-color: rgb(0, 0, 0);
                        caret-color: rgb(0, 0, 0);
                        color: rgb(0, 0, 0);
                        column-rule-color: rgb(0, 0, 0);
                        cursor: pointer;
                        font-size: 16px;
                        font-weight: 700;
                        line-height: 19.2px;
                        outline-color: rgb(0, 0, 0);
                        overflow-wrap: break-word;
                        perspective-origin: 50% 50%;
                        text-align: left;
                        text-decoration: none solid rgb(0, 0, 0);
                        text-emphasis-color: rgb(0, 0, 0);
                        transform-origin: 50% 50%;
                        border-spacing: 2px;
                        -webkit-text-fill-color: rgb(0, 0, 0);
                        -webkit-text-stroke-color: rgb(0, 0, 0);
                      "
                      >Inc. Best Books for Business Owners</a
                    ><br
                      style="
                        border-block-color: rgb(255, 0, 0);
                        border-color: rgb(255, 0, 0);
                        border-inline-color: rgb(255, 0, 0);
                        caret-color: rgb(255, 0, 0);
                        color: rgb(255, 0, 0);
                        column-rule-color: rgb(255, 0, 0);
                        font-size: 16px;
                        font-weight: 700;
                        line-height: 19.2px;
                        overflow-wrap: break-word;
                        perspective-origin: 50% 50%;
                        text-align: left;
                        text-decoration: none solid rgb(255, 0, 0);
                        text-emphasis-color: rgb(255, 0, 0);
                        transform-origin: 50% 50%;
                        border-spacing: 2px;
                        -webkit-text-fill-color: rgb(255, 0, 0);
                        -webkit-text-stroke-color: rgb(255, 0, 0);
                      "
                    />
                    •
                    <a
                      class="Sixteen"
                      href=""
                      style="
                        border-block-color: rgb(0, 0, 0);
                        border-color: rgb(0, 0, 0);
                        border-inline-color: rgb(0, 0, 0);
                        caret-color: rgb(0, 0, 0);
                        color: rgb(0, 0, 0);
                        column-rule-color: rgb(0, 0, 0);
                        cursor: pointer;
                        font-size: 16px;
                        font-weight: 700;
                        line-height: 19.2px;
                        outline-color: rgb(0, 0, 0);
                        overflow-wrap: break-word;
                        perspective-origin: 50% 50%;
                        text-align: left;
                        text-decoration: none solid rgb(0, 0, 0);
                        text-emphasis-color: rgb(0, 0, 0);
                        transform-origin: 50% 50%;
                        border-spacing: 2px;
                        -webkit-text-fill-color: rgb(0, 0, 0);
                        -webkit-text-stroke-color: rgb(0, 0, 0);
                      "
                      >Amazon Bestseller on Multiple Lists</a
                    ><br
                      style="
                        border-block-color: rgb(255, 0, 0);
                        border-color: rgb(255, 0, 0);
                        border-inline-color: rgb(255, 0, 0);
                        caret-color: rgb(255, 0, 0);
                        color: rgb(255, 0, 0);
                        column-rule-color: rgb(255, 0, 0);
                        font-size: 16px;
                        font-weight: 700;
                        line-height: 19.2px;
                        overflow-wrap: break-word;
                        perspective-origin: 50% 50%;
                        text-align: left;
                        text-decoration: none solid rgb(255, 0, 0);
                        text-emphasis-color: rgb(255, 0, 0);
                        transform-origin: 50% 50%;
                        border-spacing: 2px;
                        -webkit-text-fill-color: rgb(255, 0, 0);
                        -webkit-text-stroke-color: rgb(255, 0, 0);
                      "
                    />
                    •
                    <a
                      class="Sixteen"
                      href="https://www.exploitingchaos.com/"
                      style="
                        border-block-color: rgb(0, 0, 0);
                        border-color: rgb(0, 0, 0);
                        border-inline-color: rgb(0, 0, 0);
                        caret-color: rgb(0, 0, 0);
                        color: rgb(0, 0, 0);
                        column-rule-color: rgb(0, 0, 0);
                        cursor: pointer;
                        font-size: 16px;
                        font-weight: 700;
                        line-height: 19.2px;
                        outline-color: rgb(0, 0, 0);
                        overflow-wrap: break-word;
                        perspective-origin: 50% 50%;
                        text-align: left;
                        text-decoration: none solid rgb(0, 0, 0);
                        text-emphasis-color: rgb(0, 0, 0);
                        transform-origin: 50% 50%;
                        border-spacing: 2px;
                        -webkit-text-fill-color: rgb(0, 0, 0);
                        -webkit-text-stroke-color: rgb(0, 0, 0);
                      "
                      >Available in 7 Languages</a
                    ><br
                      style="
                        border-block-color: rgb(255, 0, 0);
                        border-color: rgb(255, 0, 0);
                        border-inline-color: rgb(255, 0, 0);
                        caret-color: rgb(255, 0, 0);
                        color: rgb(255, 0, 0);
                        column-rule-color: rgb(255, 0, 0);
                        font-size: 16px;
                        font-weight: 700;
                        line-height: 19.2px;
                        overflow-wrap: break-word;
                        perspective-origin: 50% 50%;
                        text-align: left;
                        text-decoration: none solid rgb(255, 0, 0);
                        text-emphasis-color: rgb(255, 0, 0);
                        transform-origin: 50% 50%;
                        border-spacing: 2px;
                        -webkit-text-fill-color: rgb(255, 0, 0);
                        -webkit-text-stroke-color: rgb(255, 0, 0);
                      "
                    />
                    •
                    <a
                      class="Sixteen"
                      href="https://www.exploitingchaos.com/exploitingchaos-download"
                      style="
                        border-block-color: rgb(0, 0, 0);
                        border-color: rgb(0, 0, 0);
                        border-inline-color: rgb(0, 0, 0);
                        caret-color: rgb(0, 0, 0);
                        color: rgb(0, 0, 0);
                        column-rule-color: rgb(0, 0, 0);
                        cursor: pointer;
                        font-size: 16px;
                        font-weight: 700;
                        line-height: 19.2px;
                        outline-color: rgb(0, 0, 0);
                        overflow-wrap: break-word;
                        perspective-origin: 50% 50%;
                        text-align: left;
                        text-decoration: none solid rgb(0, 0, 0);
                        text-emphasis-color: rgb(0, 0, 0);
                        transform-origin: 50% 50%;
                        border-spacing: 2px;
                        -webkit-text-fill-color: rgb(0, 0, 0);
                        -webkit-text-stroke-color: rgb(0, 0, 0);
                      "
                      >Chapter 1 Downloads: 268,975</a
                    >
                    <br
                      style="
                        border-block-color: rgb(255, 0, 0);
                        border-color: rgb(255, 0, 0);
                        border-inline-color: rgb(255, 0, 0);
                        caret-color: rgb(255, 0, 0);
                        color: rgb(255, 0, 0);
                        column-rule-color: rgb(255, 0, 0);
                        font-size: 16px;
                        font-weight: 700;
                        line-height: 19.2px;
                        overflow-wrap: break-word;
                        perspective-origin: 50% 50%;
                        text-align: left;
                        text-decoration: none solid rgb(255, 0, 0);
                        text-emphasis-color: rgb(255, 0, 0);
                        transform-origin: 50% 50%;
                        border-spacing: 2px;
                        -webkit-text-fill-color: rgb(255, 0, 0);
                        -webkit-text-stroke-color: rgb(255, 0, 0);
                      "
                    />
                  </b>
                </font>
                <br style="font-size: 16px; line-height: 19.2px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; border-spacing: 2px" />
                <hr style="font-size: 16px; inline-size: auto; line-height: 19.2px; margin-block: 8px; margin: 8px auto; margin-inline: auto; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; width: auto; border-spacing: 2px" />
                <br style="font-size: 16px; line-height: 19.2px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; border-spacing: 2px" />
              </td>
            </tr>
            <tr
              valign="top"
              style="
                block-size: auto;
                border-block-color: rgb(128, 128, 128);
                border-color: rgb(128, 128, 128);
                border-inline-color: rgb(128, 128, 128);
                font-size: 16px;
                height: auto;
                inline-size: auto;
                line-height: 19.2px;
                overflow-wrap: break-word;
                perspective-origin: 50% 50%;
                text-align: left;
                transform-origin: 50% 50%;
                vertical-align: top;
                width: auto;
                border-spacing: 2px;
              "
            >
              <td width="90" style="block-size: auto; font-size: 16px; height: auto; inline-size: 90px; line-height: 19.2px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; vertical-align: top; width: 90px; border-spacing: 2px">
                <img
                  align="left"
                  style="block-size: 80px; display: block; float: left; font-size: 16px; height: 80px; inline-size: 80px; line-height: 19.2px; margin-inline-end: 10px; margin-right: 10px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; vertical-align: top; width: 80px; border-spacing: 2px"
                  width="80"
                  height="80"
                  alt="Inc.: Exploiting Chaos Named One of Best Books of 2009"
                  src="https://cdn.trendhunterstatic.com/phpthumbnails/52/52624/52624_1_80.jpeg"
                />
              </td>
              <td width="590" style="block-size: auto; font-size: 16px; height: auto; inline-size: 590px; line-height: 19.2px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; vertical-align: top; width: 590px; border-spacing: 2px">
                "Love the book - best book on innovation I've read and I get 10 a week." <br style="font-size: 16px; line-height: 19.2px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; border-spacing: 2px" />
                <b style="font-size: 16px; line-height: 19.2px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; border-spacing: 2px"
                  ><font class="Twelve" style="font-weight: 700; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; border-spacing: 2px">- John Jantsch, Author of Duct Tape Marketing</font></b
                ><br style="font-size: 16px; line-height: 19.2px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; border-spacing: 2px" /><br
                  style="font-size: 16px; line-height: 19.2px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; border-spacing: 2px"
                />
              </td>
            </tr>
            <tr
              valign="top"
              style="
                block-size: auto;
                border-block-color: rgb(128, 128, 128);
                border-color: rgb(128, 128, 128);
                border-inline-color: rgb(128, 128, 128);
                font-size: 16px;
                height: auto;
                inline-size: auto;
                line-height: 19.2px;
                overflow-wrap: break-word;
                perspective-origin: 50% 50%;
                text-align: left;
                transform-origin: 50% 50%;
                vertical-align: top;
                width: auto;
                border-spacing: 2px;
              "
            >
              <td style="block-size: auto; font-size: 16px; height: auto; inline-size: auto; line-height: 19.2px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; vertical-align: top; width: auto; border-spacing: 2px">
                <img
                  align="left"
                  style="block-size: 80px; display: block; float: left; font-size: 16px; height: 80px; inline-size: 80px; line-height: 19.2px; margin-inline-end: 10px; margin-right: 10px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; vertical-align: top; width: 80px; border-spacing: 2px"
                  width="80"
                  height="80"
                  alt="Jack Covert CEO Read"
                  src="https://cdn.trendhunterstatic.com/phpthumbnails/53/53026/53026_1_80.jpeg"
                />
              </td>
              <td style="block-size: auto; font-size: 16px; height: auto; inline-size: auto; line-height: 19.2px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; vertical-align: top; width: auto; border-spacing: 2px">
                "Without a doubt, this is one of the best books on sparking ideas that I have ever read. I read it from cover to cover, but believe that even good skim will have you reaching for a blank piece of paper and pen or a fresh Word document. Get yourself a copy of Exploiting Chaos. It could be the difference going forward."<br
                  style="font-size: 16px; line-height: 19.2px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; border-spacing: 2px"
                />
                <font class="Twelve" style="overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; border-spacing: 2px"
                  ><b style="overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; border-spacing: 2px">- Jack Covert, Founder of 800 CEO Read, Author of The 100 Best Business Books of All Time</b></font
                ><br style="font-size: 16px; line-height: 19.2px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; border-spacing: 2px" /><br
                  style="font-size: 16px; line-height: 19.2px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; border-spacing: 2px"
                />
              </td>
            </tr>

            <tr
              valign="top"
              style="
                block-size: auto;
                border-block-color: rgb(128, 128, 128);
                border-color: rgb(128, 128, 128);
                border-inline-color: rgb(128, 128, 128);
                font-size: 16px;
                height: auto;
                inline-size: auto;
                line-height: 19.2px;
                overflow-wrap: break-word;
                perspective-origin: 50% 50%;
                text-align: left;
                transform-origin: 50% 50%;
                vertical-align: top;
                width: auto;
                border-spacing: 2px;
              "
            >
              <td style="block-size: auto; font-size: 16px; height: auto; inline-size: auto; line-height: 19.2px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; vertical-align: top; width: auto; border-spacing: 2px">
                <img
                  align="left"
                  style="block-size: 80px; display: block; float: left; font-size: 16px; height: 80px; inline-size: 80px; line-height: 19.2px; margin-inline-end: 10px; margin-right: 10px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; vertical-align: top; width: 80px; border-spacing: 2px"
                  width="80"
                  height="80"
                  alt="John Batelle"
                  src="https://cdn.trendhunterstatic.com/phpthumbnails/4/4600/4600_1_80.jpeg"
                />
              </td>
              <td style="block-size: auto; font-size: 16px; height: auto; inline-size: auto; line-height: 19.2px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; vertical-align: top; width: auto; border-spacing: 2px">
                "Visually spectacular and engaging!"<br style="font-size: 16px; line-height: 19.2px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; border-spacing: 2px" />
                <font class="Twelve" style="overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; border-spacing: 2px"
                  ><b style="overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; border-spacing: 2px">- John Battelle, Co-Founder of WIRED Magazine and BoingBoing</b></font
                ><br style="font-size: 16px; line-height: 19.2px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; border-spacing: 2px" /><br
                  style="font-size: 16px; line-height: 19.2px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; border-spacing: 2px"
                />
              </td>
            </tr>

            <tr
              valign="top"
              style="
                block-size: auto;
                border-block-color: rgb(128, 128, 128);
                border-color: rgb(128, 128, 128);
                border-inline-color: rgb(128, 128, 128);
                font-size: 16px;
                height: auto;
                inline-size: auto;
                line-height: 19.2px;
                overflow-wrap: break-word;
                perspective-origin: 50% 50%;
                text-align: left;
                transform-origin: 50% 50%;
                vertical-align: top;
                width: auto;
                border-spacing: 2px;
              "
            >
              <td style="block-size: auto; font-size: 16px; height: auto; inline-size: auto; line-height: 19.2px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; vertical-align: top; width: auto; border-spacing: 2px">
                <img
                  align="left"
                  style="block-size: 80px; display: block; float: left; font-size: 16px; height: 80px; inline-size: 80px; line-height: 19.2px; margin-inline-end: 10px; margin-right: 10px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; vertical-align: top; width: 80px; border-spacing: 2px"
                  width="80"
                  height="80"
                  alt="Kevin Roberts"
                  src="https://cdn.trendhunterstatic.com/phpthumbnails/4/4598/4598_1_80.jpeg"
                />
              </td>
              <td style="block-size: auto; font-size: 16px; height: auto; inline-size: auto; line-height: 19.2px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; vertical-align: top; width: auto; border-spacing: 2px">
                "A love potion for relentlessly creative souls looking to break boundaries, ignite customer passion and start a revolution."<br style="font-size: 16px; line-height: 19.2px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; border-spacing: 2px" />
                <font class="Twelve" style="overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; border-spacing: 2px"
                  ><b style="overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; border-spacing: 2px">- Kevin Roberts, Worldwide CEO of Saatchi and Saatachi</b></font
                ><br style="font-size: 16px; line-height: 19.2px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; border-spacing: 2px" /><br
                  style="font-size: 16px; line-height: 19.2px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; border-spacing: 2px"
                />
              </td>
            </tr>

            <tr
              valign="top"
              style="
                block-size: auto;
                border-block-color: rgb(128, 128, 128);
                border-color: rgb(128, 128, 128);
                border-inline-color: rgb(128, 128, 128);
                font-size: 16px;
                height: auto;
                inline-size: auto;
                line-height: 19.2px;
                overflow-wrap: break-word;
                perspective-origin: 50% 50%;
                text-align: left;
                transform-origin: 50% 50%;
                vertical-align: top;
                width: auto;
                border-spacing: 2px;
              "
            >
              <td style="block-size: auto; font-size: 16px; height: auto; inline-size: auto; line-height: 19.2px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; vertical-align: top; width: auto; border-spacing: 2px">
                <img
                  align="left"
                  style="block-size: 80px; display: block; float: left; font-size: 16px; height: 80px; inline-size: 80px; line-height: 19.2px; margin-inline-end: 10px; margin-right: 10px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; vertical-align: top; width: 80px; border-spacing: 2px"
                  width="80"
                  height="80"
                  alt="Inc.: Exploiting Chaos Named One of Best Books of 2009"
                  src="https://cdn.trendhunterstatic.com/phpthumbnails/61/61780/61780_1_80.jpeg"
                />
              </td>
              <td style="block-size: auto; font-size: 16px; height: auto; inline-size: auto; line-height: 19.2px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; vertical-align: top; width: auto; border-spacing: 2px">
                "One of the Best Books for Business Owners, "Presented in an appealing, magazine-like format."<br style="font-size: 16px; line-height: 19.2px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; border-spacing: 2px" />
                <font class="Twelve" style="overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; border-spacing: 2px"><b style="overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; border-spacing: 2px">- Inc Magazine</b></font
                ><br style="font-size: 16px; line-height: 19.2px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; border-spacing: 2px" /><br
                  style="font-size: 16px; line-height: 19.2px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; border-spacing: 2px"
                />
              </td>
            </tr>

            <tr
              valign="top"
              style="
                block-size: auto;
                border-block-color: rgb(128, 128, 128);
                border-color: rgb(128, 128, 128);
                border-inline-color: rgb(128, 128, 128);
                font-size: 16px;
                height: auto;
                inline-size: auto;
                line-height: 19.2px;
                overflow-wrap: break-word;
                perspective-origin: 50% 50%;
                text-align: left;
                transform-origin: 50% 50%;
                vertical-align: top;
                width: auto;
                border-spacing: 2px;
              "
            >
              <td style="block-size: auto; font-size: 16px; height: auto; inline-size: auto; line-height: 19.2px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; vertical-align: top; width: auto; border-spacing: 2px">
                <img
                  align="left"
                  style="block-size: 80px; display: block; float: left; font-size: 16px; height: 80px; inline-size: 80px; line-height: 19.2px; margin-inline-end: 10px; margin-right: 10px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; vertical-align: top; width: 80px; border-spacing: 2px"
                  width="80"
                  height="80"
                  alt="Daniel Pink Review"
                  src="https://cdn.trendhunterstatic.com/phpthumbnails/16/16348/16348_1_80.jpeg"
                />
              </td>
              <td style="block-size: auto; font-size: 16px; height: auto; inline-size: auto; line-height: 19.2px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; vertical-align: top; width: auto; border-spacing: 2px">
                "EXPLOITING CHAOS is a rousing battle cry for the kind of creative, risky thinking that is most needed in times of change and disorder. Whether you're a CEO trying to stay ahead of the curve, a daydreaming teenager, or a wannabe trailblazer, this bold guide is the shake-up you need to check your assumptions, get inspired, and turn
                business-as-usual totally upside down."<br style="font-size: 16px; line-height: 19.2px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; border-spacing: 2px" />
                <b style="font-size: 16px; line-height: 19.2px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; border-spacing: 2px"
                  ><font class="Twelve" style="font-weight: 700; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; border-spacing: 2px">- Daniel Pink, bestselling author of A Whole New Mind</font></b
                ><br style="font-size: 16px; line-height: 19.2px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; border-spacing: 2px" /><br
                  style="font-size: 16px; line-height: 19.2px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; border-spacing: 2px"
                />
              </td>
            </tr>

            <tr
              valign="top"
              style="
                block-size: auto;
                border-block-color: rgb(128, 128, 128);
                border-color: rgb(128, 128, 128);
                border-inline-color: rgb(128, 128, 128);
                font-size: 16px;
                height: auto;
                inline-size: auto;
                line-height: 19.2px;
                overflow-wrap: break-word;
                perspective-origin: 50% 50%;
                text-align: left;
                transform-origin: 50% 50%;
                vertical-align: top;
                width: auto;
                border-spacing: 2px;
              "
            >
              <td style="block-size: auto; font-size: 16px; height: auto; inline-size: auto; line-height: 19.2px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; vertical-align: top; width: auto; border-spacing: 2px">
                <img
                  align="left"
                  style="block-size: 80px; display: block; float: left; font-size: 16px; height: 80px; inline-size: 80px; line-height: 19.2px; margin-inline-end: 10px; margin-right: 10px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; vertical-align: top; width: 80px; border-spacing: 2px"
                  width="80"
                  height="80"
                  alt="Guy Kawasaki Exploiting Chaos Review"
                  src="https://cdn.trendhunterstatic.com/phpthumbnails/6/6794/6794_1_80.jpeg"
                />
              </td>
              <td style="block-size: auto; font-size: 16px; height: auto; inline-size: auto; line-height: 19.2px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; vertical-align: top; width: auto; border-spacing: 2px">
                “EXPLOITING CHAOS is the quintessential road map for all those who seek opportunity in times of change. Gutsche vividly explores how remarkable companies have risen from chaos, and he provides a toolkit that managers can use to foster a culture of innovation, create great products and services, and change the world.”
                <br style="font-size: 16px; line-height: 19.2px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; border-spacing: 2px" />
                <b style="font-size: 16px; line-height: 19.2px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; border-spacing: 2px"
                  ><font class="Twelve" style="font-weight: 700; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; border-spacing: 2px">- Guy Kawasaki, Co-founder of AllTop, Author of Reality Check</font></b
                ><br style="font-size: 16px; line-height: 19.2px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; border-spacing: 2px" /><br
                  style="font-size: 16px; line-height: 19.2px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; border-spacing: 2px"
                />
              </td>
            </tr>

            <tr
              valign="top"
              style="
                block-size: auto;
                border-block-color: rgb(128, 128, 128);
                border-color: rgb(128, 128, 128);
                border-inline-color: rgb(128, 128, 128);
                font-size: 16px;
                height: auto;
                inline-size: auto;
                line-height: 19.2px;
                overflow-wrap: break-word;
                perspective-origin: 50% 50%;
                text-align: left;
                transform-origin: 50% 50%;
                vertical-align: top;
                width: auto;
                border-spacing: 2px;
              "
            >
              <td style="block-size: auto; font-size: 16px; height: auto; inline-size: auto; line-height: 19.2px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; vertical-align: top; width: auto; border-spacing: 2px">
                <img
                  align="left"
                  style="block-size: 80px; display: block; float: left; font-size: 16px; height: 80px; inline-size: 80px; line-height: 19.2px; margin-inline-end: 10px; margin-right: 10px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; vertical-align: top; width: 80px; border-spacing: 2px"
                  width="80"
                  height="80"
                  alt="Marian Salzman"
                  src="https://cdn.trendhunterstatic.com/phpthumbnails/4/4599/4599_1_80.jpeg"
                />
              </td>
              <td style="block-size: auto; font-size: 16px; height: auto; inline-size: auto; line-height: 19.2px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; vertical-align: top; width: auto; border-spacing: 2px">
                "The cutting edge as we contemplate what's next for brands, commerce and consumerism." <br style="font-size: 16px; line-height: 19.2px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; border-spacing: 2px" />
                <b style="font-size: 16px; line-height: 19.2px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; border-spacing: 2px"
                  ><font class="Twelve" style="font-weight: 700; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; border-spacing: 2px">- Marian Salzman, Futurist, CMO of Porter Novelli</font></b
                ><br style="font-size: 16px; line-height: 19.2px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; border-spacing: 2px" /><br
                  style="font-size: 16px; line-height: 19.2px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; border-spacing: 2px"
                />
              </td>
            </tr>

            <tr
              valign="top"
              style="
                block-size: auto;
                border-block-color: rgb(128, 128, 128);
                border-color: rgb(128, 128, 128);
                border-inline-color: rgb(128, 128, 128);
                font-size: 16px;
                height: auto;
                inline-size: auto;
                line-height: 19.2px;
                overflow-wrap: break-word;
                perspective-origin: 50% 50%;
                text-align: left;
                transform-origin: 50% 50%;
                vertical-align: top;
                width: auto;
                border-spacing: 2px;
              "
            >
              <td style="block-size: auto; font-size: 16px; height: auto; inline-size: auto; line-height: 19.2px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; vertical-align: top; width: auto; border-spacing: 2px">
                <img
                  align="left"
                  style="block-size: 80px; display: block; float: left; font-size: 16px; height: 80px; inline-size: 80px; line-height: 19.2px; margin-inline-end: 10px; margin-right: 10px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; vertical-align: top; width: 80px; border-spacing: 2px"
                  width="80"
                  height="80"
                  alt="Inc.: Exploiting Chaos Named One of Best Books of 2009"
                  src="https://cdn.trendhunterstatic.com/phpthumbnails/49/49098/49098_1_80.jpeg"
                />
              </td>
              <td style="block-size: auto; font-size: 16px; height: auto; inline-size: auto; line-height: 19.2px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; vertical-align: top; width: auto; border-spacing: 2px">
                "Not surprisingly, it's hot, hip and absolutely worth talking about." <br style="font-size: 16px; line-height: 19.2px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; border-spacing: 2px" />
                <b style="font-size: 16px; line-height: 19.2px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; border-spacing: 2px"
                  ><font class="Twelve" style="font-weight: 700; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; border-spacing: 2px">- Dave Balter, CEO BzzAgent, Author of The Word of Mouth Manual</font></b
                ><br style="font-size: 16px; line-height: 19.2px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; border-spacing: 2px" /><br
                  style="font-size: 16px; line-height: 19.2px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; border-spacing: 2px"
                />
              </td>
            </tr>

            <tr
              valign="top"
              style="
                block-size: auto;
                border-block-color: rgb(128, 128, 128);
                border-color: rgb(128, 128, 128);
                border-inline-color: rgb(128, 128, 128);
                font-size: 16px;
                height: auto;
                inline-size: auto;
                line-height: 19.2px;
                overflow-wrap: break-word;
                perspective-origin: 50% 50%;
                text-align: left;
                transform-origin: 50% 50%;
                vertical-align: top;
                width: auto;
                border-spacing: 2px;
              "
            >
              <td style="block-size: auto; font-size: 16px; height: auto; inline-size: auto; line-height: 19.2px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; vertical-align: top; width: auto; border-spacing: 2px">
                <img
                  align="left"
                  style="block-size: 80px; display: block; float: left; font-size: 16px; height: 80px; inline-size: 80px; line-height: 19.2px; margin-inline-end: 10px; margin-right: 10px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; vertical-align: top; width: 80px; border-spacing: 2px"
                  width="80"
                  height="80"
                  alt="Max Lenderman"
                  src="https://cdn.trendhunterstatic.com/phpthumbnails/49/49745/49745_1_80.jpeg"
                />
              </td>
              <td style="block-size: auto; font-size: 16px; height: auto; inline-size: auto; line-height: 19.2px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; vertical-align: top; width: auto; border-spacing: 2px">
                "A work of genius-in-a-flash brilliance and choose-your-own-adventure engagement." <br style="font-size: 16px; line-height: 19.2px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; border-spacing: 2px" />
                <b style="font-size: 16px; line-height: 19.2px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; border-spacing: 2px"
                  ><font class="Twelve" style="font-weight: 700; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; border-spacing: 2px">- Max Lenderman, Executive Creative Director, GMR Marketing, Author of Brand New World</font></b
                ><br style="font-size: 16px; line-height: 19.2px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; border-spacing: 2px" /><br
                  style="font-size: 16px; line-height: 19.2px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; border-spacing: 2px"
                />
              </td>
            </tr>

            <tr
              valign="top"
              style="
                block-size: auto;
                border-block-color: rgb(128, 128, 128);
                border-color: rgb(128, 128, 128);
                border-inline-color: rgb(128, 128, 128);
                font-size: 16px;
                height: auto;
                inline-size: auto;
                line-height: 19.2px;
                overflow-wrap: break-word;
                perspective-origin: 50% 50%;
                text-align: left;
                transform-origin: 50% 50%;
                vertical-align: top;
                width: auto;
                border-spacing: 2px;
              "
            >
              <td style="block-size: auto; font-size: 16px; height: auto; inline-size: auto; line-height: 19.2px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; vertical-align: top; width: auto; border-spacing: 2px">
                <img
                  align="left"
                  style="block-size: 80px; display: block; float: left; font-size: 16px; height: 80px; inline-size: 80px; line-height: 19.2px; margin-inline-end: 10px; margin-right: 10px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; vertical-align: top; width: 80px; border-spacing: 2px"
                  width="80"
                  height="80"
                  alt="Amber Mac"
                  src="https://cdn.trendhunterstatic.com/phpthumbnails/49/49600/49600_1_80.jpeg"
                />
              </td>
              <td style="block-size: auto; font-size: 16px; height: auto; inline-size: auto; line-height: 19.2px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; vertical-align: top; width: auto; border-spacing: 2px">
                "With its visual design and cutting edge ideas, Exploiting Chaos represents the future of business books. Jeremy captures a new way of thinking for anyone looking to hit on the next big thing."<br
                  style="font-size: 16px; line-height: 19.2px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; border-spacing: 2px"
                />
                <b style="font-size: 16px; line-height: 19.2px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; border-spacing: 2px"
                  ><font class="Twelve" style="font-weight: 700; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; border-spacing: 2px">- Amber Mac, TV Host, Tech Journalist, Cewebrity</font></b
                ><br style="font-size: 16px; line-height: 19.2px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; border-spacing: 2px" /><br
                  style="font-size: 16px; line-height: 19.2px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; border-spacing: 2px"
                />
              </td>
            </tr>

            <tr
              valign="top"
              style="
                block-size: auto;
                border-block-color: rgb(128, 128, 128);
                border-color: rgb(128, 128, 128);
                border-inline-color: rgb(128, 128, 128);
                font-size: 16px;
                height: auto;
                inline-size: auto;
                line-height: 19.2px;
                overflow-wrap: break-word;
                perspective-origin: 50% 50%;
                text-align: left;
                transform-origin: 50% 50%;
                vertical-align: top;
                width: auto;
                border-spacing: 2px;
              "
            >
              <td style="block-size: auto; font-size: 16px; height: auto; inline-size: auto; line-height: 19.2px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; vertical-align: top; width: auto; border-spacing: 2px">
                <img
                  align="left"
                  style="block-size: 80px; display: block; float: left; font-size: 16px; height: 80px; inline-size: 80px; line-height: 19.2px; margin-inline-end: 10px; margin-right: 10px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; vertical-align: top; width: 80px; border-spacing: 2px"
                  width="80"
                  height="80"
                  alt="Exploiting Chaos in the Toronto Star"
                  src="https://cdn.trendhunterstatic.com/phpthumbnails/52/52895/52895_1_80.jpeg"
                />
              </td>
              <td style="block-size: auto; font-size: 16px; height: auto; inline-size: auto; line-height: 19.2px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; vertical-align: top; width: auto; border-spacing: 2px">
                "Chicken Soup for the Confused Executive's Soul."<br style="font-size: 16px; line-height: 19.2px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; border-spacing: 2px" />
                <b style="font-size: 16px; line-height: 19.2px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; border-spacing: 2px"
                  ><font class="Twelve" style="font-weight: 700; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; border-spacing: 2px">- The Toronto Star</font></b
                ><br style="font-size: 16px; line-height: 19.2px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; border-spacing: 2px" /><br
                  style="font-size: 16px; line-height: 19.2px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; border-spacing: 2px"
                />
              </td>
            </tr>

            <tr
              valign="top"
              style="
                block-size: auto;
                border-block-color: rgb(128, 128, 128);
                border-color: rgb(128, 128, 128);
                border-inline-color: rgb(128, 128, 128);
                font-size: 16px;
                height: auto;
                inline-size: auto;
                line-height: 19.2px;
                overflow-wrap: break-word;
                perspective-origin: 50% 50%;
                text-align: left;
                transform-origin: 50% 50%;
                vertical-align: top;
                width: auto;
                border-spacing: 2px;
              "
            >
              <td style="block-size: auto; font-size: 16px; height: auto; inline-size: auto; line-height: 19.2px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; vertical-align: top; width: auto; border-spacing: 2px">
                <img
                  align="left"
                  style="block-size: 80px; display: block; float: left; font-size: 16px; height: 80px; inline-size: 80px; line-height: 19.2px; margin-inline-end: 10px; margin-right: 10px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; vertical-align: top; width: 80px; border-spacing: 2px"
                  width="80"
                  height="80"
                  alt="BusinessWeek Review"
                  src="https://cdn.trendhunterstatic.com/phpthumbnails/52/52620/52620_1_80.jpeg"
                />
              </td>
              <td style="block-size: auto; font-size: 16px; height: auto; inline-size: auto; line-height: 19.2px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; vertical-align: top; width: auto; border-spacing: 2px">
                "The book is a quick read, with lots of graphics, oversized headlines on each page, and memorable quotes."<br style="font-size: 16px; line-height: 19.2px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; border-spacing: 2px" />
                <b style="font-size: 16px; line-height: 19.2px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; border-spacing: 2px"
                  ><font class="Twelve" style="font-weight: 700; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; border-spacing: 2px">- BusinessWeek Article / 24 Page Exploiting Chaos Slideshow</font></b
                ><br style="font-size: 16px; line-height: 19.2px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; border-spacing: 2px" /><br
                  style="font-size: 16px; line-height: 19.2px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; border-spacing: 2px"
                />
              </td>
            </tr>

            <tr
              valign="top"
              style="
                block-size: auto;
                border-block-color: rgb(128, 128, 128);
                border-color: rgb(128, 128, 128);
                border-inline-color: rgb(128, 128, 128);
                font-size: 16px;
                height: auto;
                inline-size: auto;
                line-height: 19.2px;
                overflow-wrap: break-word;
                perspective-origin: 50% 50%;
                text-align: left;
                transform-origin: 50% 50%;
                vertical-align: top;
                width: auto;
                border-spacing: 2px;
              "
            >
              <td style="block-size: auto; font-size: 16px; height: auto; inline-size: auto; line-height: 19.2px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; vertical-align: top; width: auto; border-spacing: 2px">
                <img
                  align="left"
                  style="block-size: 80px; display: block; float: left; font-size: 16px; height: 80px; inline-size: 80px; line-height: 19.2px; margin-inline-end: 10px; margin-right: 10px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; vertical-align: top; width: 80px; border-spacing: 2px"
                  width="80"
                  height="80"
                  alt="Exploiting Chaos in CityTV"
                  src="https://cdn.trendhunterstatic.com/phpthumbnails/52/52593/52593_1_80.jpeg"
                />
              </td>
              <td style="block-size: auto; font-size: 16px; height: auto; inline-size: auto; line-height: 19.2px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; vertical-align: top; width: auto; border-spacing: 2px">
                "What a great installment... a quick, easy ready with tons of insightful facts."<br style="font-size: 16px; line-height: 19.2px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; border-spacing: 2px" />
                <b style="font-size: 16px; line-height: 19.2px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; border-spacing: 2px"
                  ><font class="Twelve" style="font-weight: 700; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; border-spacing: 2px">- CityTV</font></b
                ><br style="font-size: 16px; line-height: 19.2px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; border-spacing: 2px" /><br
                  style="font-size: 16px; line-height: 19.2px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; border-spacing: 2px"
                />
              </td>
            </tr>

            <tr
              valign="top"
              style="
                block-size: auto;
                border-block-color: rgb(128, 128, 128);
                border-color: rgb(128, 128, 128);
                border-inline-color: rgb(128, 128, 128);
                font-size: 16px;
                height: auto;
                inline-size: auto;
                line-height: 19.2px;
                overflow-wrap: break-word;
                perspective-origin: 50% 50%;
                text-align: left;
                transform-origin: 50% 50%;
                vertical-align: top;
                width: auto;
                border-spacing: 2px;
              "
            >
              <td style="block-size: auto; font-size: 16px; height: auto; inline-size: auto; line-height: 19.2px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; vertical-align: top; width: auto; border-spacing: 2px">
                <img
                  align="left"
                  style="block-size: 80px; display: block; float: left; font-size: 16px; height: 80px; inline-size: 80px; line-height: 19.2px; margin-inline-end: 10px; margin-right: 10px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; vertical-align: top; width: 80px; border-spacing: 2px"
                  width="80"
                  height="80"
                  alt="Exploiting Chaos keynote review"
                  src="https://cdn.trendhunterstatic.com/phpthumbnails/58/58698/58698_1_80.jpeg"
                />
              </td>
              <td style="block-size: auto; font-size: 16px; height: auto; inline-size: auto; line-height: 19.2px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; vertical-align: top; width: auto; border-spacing: 2px">
                "[As a keynote] it was the most energizing, inspiring and applicable piece of stand-up I have ever seen. And I've heard Bill Clinton speak, listened to enough Bill Gates on YouTube and sat through my fair share of Tony Robbins CDs."<br
                  style="font-size: 16px; line-height: 19.2px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; border-spacing: 2px"
                />
                <b style="font-size: 16px; line-height: 19.2px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; border-spacing: 2px"
                  ><font class="Twelve" style="font-weight: 700; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; border-spacing: 2px">- The Sun</font></b
                ><br style="font-size: 16px; line-height: 19.2px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; border-spacing: 2px" /><br
                  style="font-size: 16px; line-height: 19.2px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; border-spacing: 2px"
                />
              </td>
            </tr>

            <tr
              valign="top"
              style="
                block-size: auto;
                border-block-color: rgb(128, 128, 128);
                border-color: rgb(128, 128, 128);
                border-inline-color: rgb(128, 128, 128);
                font-size: 16px;
                height: auto;
                inline-size: auto;
                line-height: 19.2px;
                overflow-wrap: break-word;
                perspective-origin: 50% 50%;
                text-align: left;
                transform-origin: 50% 50%;
                vertical-align: top;
                width: auto;
                border-spacing: 2px;
              "
            >
              <td style="block-size: auto; font-size: 16px; height: auto; inline-size: auto; line-height: 19.2px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; vertical-align: top; width: auto; border-spacing: 2px">
                <img
                  align="left"
                  style="block-size: 80px; display: block; float: left; font-size: 16px; height: 80px; inline-size: 80px; line-height: 19.2px; margin-inline-end: 10px; margin-right: 10px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; vertical-align: top; width: 80px; border-spacing: 2px"
                  width="80"
                  height="80"
                  alt="Exploiting Chaos in Toro"
                  src="https://cdn.trendhunterstatic.com/phpthumbnails/51/51936/51936_1_80.jpeg"
                />
              </td>
              <td style="block-size: auto; font-size: 16px; height: auto; inline-size: auto; line-height: 19.2px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; vertical-align: top; width: auto; border-spacing: 2px">
                "Gutsche has just released, Exploiting Chaos, a book that is, in a word, stunning. And it would be stunning if it didn’t become an instant bestseller and classic, and catapult its young author onto the current guru pantheon alongside trend spotters and commentators like Wired editor Chris Anderson and pop sociologist Malcom
                Gladwell."<br style="font-size: 16px; line-height: 19.2px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; border-spacing: 2px" />
                <b style="font-size: 16px; line-height: 19.2px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; border-spacing: 2px"
                  ><font class="Twelve" style="font-weight: 700; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; border-spacing: 2px">- TORO Magazine</font></b
                ><br style="font-size: 16px; line-height: 19.2px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; border-spacing: 2px" />
              </td>
            </tr>
          </tbody>
        </table>

        <br style="font-size: 16px; line-height: 19.2px; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%" /><br style="font-size: 16px; line-height: 19.2px; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%" />

        <b style="font-size: 16px; line-height: 19.2px; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%">Media Features<br style="font-size: 16px; font-weight: 700; line-height: 19.2px; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%" /></b>
        <hr style="font-size: 16px; inline-size: auto; line-height: 19.2px; margin-block: 8px; margin: 8px auto; margin-inline: auto; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; width: auto" />

        <a
          class="Ten"
          target="_blank"
          href="https://www.trendhunter.com/trends/meetingsreview-jeremy-gutsche"
          style="
            border-block-color: rgb(0, 0, 0);
            border-color: rgb(0, 0, 0);
            border-inline-color: rgb(0, 0, 0);
            caret-color: rgb(0, 0, 0);
            color: rgb(0, 0, 0);
            column-rule-color: rgb(0, 0, 0);
            cursor: pointer;
            font-size: 10px;
            line-height: 12px;
            outline-color: rgb(0, 0, 0);
            perspective-origin: 50% 50%;
            text-align: left;
            text-decoration: none solid rgb(0, 0, 0);
            text-emphasis-color: rgb(0, 0, 0);
            transform-origin: 50% 50%;
            -webkit-text-fill-color: rgb(0, 0, 0);
            -webkit-text-stroke-color: rgb(0, 0, 0);
          "
          ><img
            style="block-size: 60px; cursor: pointer; font-size: 10px; height: 60px; inline-size: 60px; line-height: 12px; margin-block-end: 10px; margin-bottom: 10px; margin-inline-end: 10px; margin-right: 10px; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; width: 60px"
            border="1"
            width="60"
            height="60"
            alt="Meetings:review: Jeremy Gutsche on Exploiting Chaos"
            src="https://cdn.trendhunterstatic.com/phpthumbnails/72/72170/72170_1_120.jpeg" /></a
        ><a
          class="Ten"
          target="_blank"
          href="https://www.trendhunter.com/trends/exploiting-chaos-keynote1"
          style="
            border-block-color: rgb(0, 0, 0);
            border-color: rgb(0, 0, 0);
            border-inline-color: rgb(0, 0, 0);
            caret-color: rgb(0, 0, 0);
            color: rgb(0, 0, 0);
            column-rule-color: rgb(0, 0, 0);
            cursor: pointer;
            font-size: 10px;
            line-height: 12px;
            outline-color: rgb(0, 0, 0);
            perspective-origin: 50% 50%;
            text-align: left;
            text-decoration: none solid rgb(0, 0, 0);
            text-emphasis-color: rgb(0, 0, 0);
            transform-origin: 50% 50%;
            -webkit-text-fill-color: rgb(0, 0, 0);
            -webkit-text-stroke-color: rgb(0, 0, 0);
          "
          ><img style="block-size: 60px; cursor: pointer; font-size: 10px; height: 60px; inline-size: 60px; line-height: 12px; margin-block-end: 10px; margin-bottom: 10px; margin-inline-end: 10px; margin-right: 10px; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; width: 60px;" border="1" width="60" height="60" alt="London
          Free Press: Jeremy Gutsche" s="" exploiting="" chaos="" keynote="" featured'="" src="https://cdn.trendhunterstatic.com/phpthumbnails/71/71880/71880_1_120.jpeg"></a
        ><a
          class="Ten"
          target="_blank"
          href="https://www.trendhunter.com/trends/jeremy-gutsche-on-spotting-trends"
          style="
            border-block-color: rgb(0, 0, 0);
            border-color: rgb(0, 0, 0);
            border-inline-color: rgb(0, 0, 0);
            caret-color: rgb(0, 0, 0);
            color: rgb(0, 0, 0);
            column-rule-color: rgb(0, 0, 0);
            cursor: pointer;
            font-size: 10px;
            line-height: 12px;
            outline-color: rgb(0, 0, 0);
            perspective-origin: 50% 50%;
            text-align: left;
            text-decoration: none solid rgb(0, 0, 0);
            text-emphasis-color: rgb(0, 0, 0);
            transform-origin: 50% 50%;
            -webkit-text-fill-color: rgb(0, 0, 0);
            -webkit-text-stroke-color: rgb(0, 0, 0);
          "
          ><img
            style="block-size: 60px; cursor: pointer; font-size: 10px; height: 60px; inline-size: 60px; line-height: 12px; margin-block-end: 10px; margin-bottom: 10px; margin-inline-end: 10px; margin-right: 10px; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; width: 60px"
            border="1"
            width="60"
            height="60"
            alt="The Red Couch: Jeremy Gutsche on Spotting Trends and Exploiting Chaos"
            src="https://cdn.trendhunterstatic.com/phpthumbnails/71/71558/71558_1_120.jpeg" /></a
        ><a
          class="Ten"
          target="_blank"
          href="https://www.trendhunter.com/trends/axiom-business-book-awards"
          style="
            border-block-color: rgb(0, 0, 0);
            border-color: rgb(0, 0, 0);
            border-inline-color: rgb(0, 0, 0);
            caret-color: rgb(0, 0, 0);
            color: rgb(0, 0, 0);
            column-rule-color: rgb(0, 0, 0);
            cursor: pointer;
            font-size: 10px;
            line-height: 12px;
            outline-color: rgb(0, 0, 0);
            perspective-origin: 50% 50%;
            text-align: left;
            text-decoration: none solid rgb(0, 0, 0);
            text-emphasis-color: rgb(0, 0, 0);
            transform-origin: 50% 50%;
            -webkit-text-fill-color: rgb(0, 0, 0);
            -webkit-text-stroke-color: rgb(0, 0, 0);
          "
          ><img
            style="block-size: 60px; cursor: pointer; font-size: 10px; height: 60px; inline-size: 60px; line-height: 12px; margin-block-end: 10px; margin-bottom: 10px; margin-inline-end: 10px; margin-right: 10px; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; width: 60px"
            border="1"
            width="60"
            height="60"
            alt="Axiom Business Book Awards - EXPLOITING CHAOS Wins Gold Medal in Success / Motivation"
            src="https://cdn.trendhunterstatic.com/phpthumbnails/70/70298/70298_1_120.jpeg" /></a
        ><a
          class="Ten"
          target="_blank"
          href="https://www.trendhunter.com/trends/jeremy-gutsche-keynote-review"
          style="
            border-block-color: rgb(0, 0, 0);
            border-color: rgb(0, 0, 0);
            border-inline-color: rgb(0, 0, 0);
            caret-color: rgb(0, 0, 0);
            color: rgb(0, 0, 0);
            column-rule-color: rgb(0, 0, 0);
            cursor: pointer;
            font-size: 10px;
            line-height: 12px;
            outline-color: rgb(0, 0, 0);
            perspective-origin: 50% 50%;
            text-align: left;
            text-decoration: none solid rgb(0, 0, 0);
            text-emphasis-color: rgb(0, 0, 0);
            transform-origin: 50% 50%;
            -webkit-text-fill-color: rgb(0, 0, 0);
            -webkit-text-stroke-color: rgb(0, 0, 0);
          "
          ><img
            style="block-size: 60px; cursor: pointer; font-size: 10px; height: 60px; inline-size: 60px; line-height: 12px; margin-block-end: 10px; margin-bottom: 10px; margin-inline-end: 10px; margin-right: 10px; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; width: 60px"
            border="1"
            width="60"
            height="60"
            alt="OnSite: Jeremy Gutsche Keynote Review in Cancun"
            src="https://cdn.trendhunterstatic.com/phpthumbnails/69/69443/69443_1_120.jpeg" /></a
        ><a
          class="Ten"
          target="_blank"
          href="https://www.trendhunter.com/trends/jeremy-gutsche-on-bnn"
          style="
            border-block-color: rgb(0, 0, 0);
            border-color: rgb(0, 0, 0);
            border-inline-color: rgb(0, 0, 0);
            caret-color: rgb(0, 0, 0);
            color: rgb(0, 0, 0);
            column-rule-color: rgb(0, 0, 0);
            cursor: pointer;
            font-size: 10px;
            line-height: 12px;
            outline-color: rgb(0, 0, 0);
            perspective-origin: 50% 50%;
            text-align: left;
            text-decoration: none solid rgb(0, 0, 0);
            text-emphasis-color: rgb(0, 0, 0);
            transform-origin: 50% 50%;
            -webkit-text-fill-color: rgb(0, 0, 0);
            -webkit-text-stroke-color: rgb(0, 0, 0);
          "
          ><img
            style="block-size: 60px; cursor: pointer; font-size: 10px; height: 60px; inline-size: 60px; line-height: 12px; margin-block-end: 10px; margin-bottom: 10px; margin-inline-end: 10px; margin-right: 10px; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; width: 60px"
            border="1"
            width="60"
            height="60"
            alt="BNN: Jeremy Gutsche on Marketing Trends in 2010"
            src="https://cdn.trendhunterstatic.com/phpthumbnails/63/63597/63597_1_120.jpeg" /></a
        ><a
          class="Ten"
          target="_blank"
          href="https://www.trendhunter.com/trends/trend-hunter-on-virgin-radio"
          style="
            border-block-color: rgb(0, 0, 0);
            border-color: rgb(0, 0, 0);
            border-inline-color: rgb(0, 0, 0);
            caret-color: rgb(0, 0, 0);
            color: rgb(0, 0, 0);
            column-rule-color: rgb(0, 0, 0);
            cursor: pointer;
            font-size: 10px;
            line-height: 12px;
            outline-color: rgb(0, 0, 0);
            perspective-origin: 50% 50%;
            text-align: left;
            text-decoration: none solid rgb(0, 0, 0);
            text-emphasis-color: rgb(0, 0, 0);
            transform-origin: 50% 50%;
            -webkit-text-fill-color: rgb(0, 0, 0);
            -webkit-text-stroke-color: rgb(0, 0, 0);
          "
          ><img
            style="block-size: 60px; cursor: pointer; font-size: 10px; height: 60px; inline-size: 60px; line-height: 12px; margin-block-end: 10px; margin-bottom: 10px; margin-inline-end: 10px; margin-right: 10px; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; width: 60px"
            border="1"
            width="60"
            height="60"
            alt="Virgin Radio: Jeremy Gutsche on Trend Hunter Pro and Exploiting Chaos"
            src="https://cdn.trendhunterstatic.com/phpthumbnails/63/63317/63317_1_120.jpeg" /></a
        ><a
          class="Ten"
          target="_blank"
          href="https://www.trendhunter.com/trends/top-10-trends-of-the-decade"
          style="
            border-block-color: rgb(0, 0, 0);
            border-color: rgb(0, 0, 0);
            border-inline-color: rgb(0, 0, 0);
            caret-color: rgb(0, 0, 0);
            color: rgb(0, 0, 0);
            column-rule-color: rgb(0, 0, 0);
            cursor: pointer;
            font-size: 10px;
            line-height: 12px;
            outline-color: rgb(0, 0, 0);
            perspective-origin: 50% 50%;
            text-align: left;
            text-decoration: none solid rgb(0, 0, 0);
            text-emphasis-color: rgb(0, 0, 0);
            transform-origin: 50% 50%;
            -webkit-text-fill-color: rgb(0, 0, 0);
            -webkit-text-stroke-color: rgb(0, 0, 0);
          "
          ><img
            style="block-size: 60px; cursor: pointer; font-size: 10px; height: 60px; inline-size: 60px; line-height: 12px; margin-block-end: 10px; margin-bottom: 10px; margin-inline-end: 10px; margin-right: 10px; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; width: 60px"
            border="1"
            width="60"
            height="60"
            alt="BNN: Jeremy Gutsche and Trend Hunter Pro on the Top 10 Trends of the Decade"
            src="https://cdn.trendhunterstatic.com/phpthumbnails/63/63246/63246_1_120.jpeg" /></a
        ><a
          class="Ten"
          target="_blank"
          href="https://www.trendhunter.com/trends/best-buisness-books-for-business-owners"
          style="
            border-block-color: rgb(0, 0, 0);
            border-color: rgb(0, 0, 0);
            border-inline-color: rgb(0, 0, 0);
            caret-color: rgb(0, 0, 0);
            color: rgb(0, 0, 0);
            column-rule-color: rgb(0, 0, 0);
            cursor: pointer;
            font-size: 10px;
            line-height: 12px;
            outline-color: rgb(0, 0, 0);
            perspective-origin: 50% 50%;
            text-align: left;
            text-decoration: none solid rgb(0, 0, 0);
            text-emphasis-color: rgb(0, 0, 0);
            transform-origin: 50% 50%;
            -webkit-text-fill-color: rgb(0, 0, 0);
            -webkit-text-stroke-color: rgb(0, 0, 0);
          "
          ><img
            style="block-size: 60px; cursor: pointer; font-size: 10px; height: 60px; inline-size: 60px; line-height: 12px; margin-block-end: 10px; margin-bottom: 10px; margin-inline-end: 10px; margin-right: 10px; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; width: 60px"
            border="1"
            width="60"
            height="60"
            alt="Inc.: Exploiting Chaos Named One of Best Books of 2009"
            src="https://cdn.trendhunterstatic.com/phpthumbnails/61/61780/61780_1_120.jpeg" /></a
        ><a
          class="Ten"
          target="_blank"
          href="https://www.trendhunter.com/trends/exploiting-chaos-keynote"
          style="
            border-block-color: rgb(0, 0, 0);
            border-color: rgb(0, 0, 0);
            border-inline-color: rgb(0, 0, 0);
            caret-color: rgb(0, 0, 0);
            color: rgb(0, 0, 0);
            column-rule-color: rgb(0, 0, 0);
            cursor: pointer;
            font-size: 10px;
            line-height: 12px;
            outline-color: rgb(0, 0, 0);
            perspective-origin: 50% 50%;
            text-align: left;
            text-decoration: none solid rgb(0, 0, 0);
            text-emphasis-color: rgb(0, 0, 0);
            transform-origin: 50% 50%;
            -webkit-text-fill-color: rgb(0, 0, 0);
            -webkit-text-stroke-color: rgb(0, 0, 0);
          "
          ><img
            style="block-size: 60px; cursor: pointer; font-size: 10px; height: 60px; inline-size: 60px; line-height: 12px; margin-block-end: 10px; margin-bottom: 10px; margin-inline-end: 10px; margin-right: 10px; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; width: 60px"
            border="1"
            width="60"
            height="60"
            alt="The Calagary Sun: Jeremy Gutsche Profiled"
            src="https://cdn.trendhunterstatic.com/phpthumbnails/58/58698/58698_1_120.jpeg" /></a
        ><a
          class="Ten"
          target="_blank"
          href="https://www.trendhunter.com/trends/exploiting-chaos-fast-company"
          style="
            border-block-color: rgb(0, 0, 0);
            border-color: rgb(0, 0, 0);
            border-inline-color: rgb(0, 0, 0);
            caret-color: rgb(0, 0, 0);
            color: rgb(0, 0, 0);
            column-rule-color: rgb(0, 0, 0);
            cursor: pointer;
            font-size: 10px;
            line-height: 12px;
            outline-color: rgb(0, 0, 0);
            perspective-origin: 50% 50%;
            text-align: left;
            text-decoration: none solid rgb(0, 0, 0);
            text-emphasis-color: rgb(0, 0, 0);
            transform-origin: 50% 50%;
            -webkit-text-fill-color: rgb(0, 0, 0);
            -webkit-text-stroke-color: rgb(0, 0, 0);
          "
          ><img style="block-size: 60px; cursor: pointer; font-size: 10px; height: 60px; inline-size: 60px; line-height: 12px; margin-block-end: 10px; margin-bottom: 10px; margin-inline-end: 10px; margin-right: 10px; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; width: 60px;" border="1" width="60" height="60" alt="Fast
          Company: Jeremy Gutsche" s="" exploiting="" chaos="" featured'="" src="https://cdn.trendhunterstatic.com/phpthumbnails/58/58789/58789_1_120.jpeg"></a
        ><a
          class="Ten"
          target="_blank"
          href="https://www.trendhunter.com/trends/jeremy-gutsche-globe-and-mail"
          style="
            border-block-color: rgb(0, 0, 0);
            border-color: rgb(0, 0, 0);
            border-inline-color: rgb(0, 0, 0);
            caret-color: rgb(0, 0, 0);
            color: rgb(0, 0, 0);
            column-rule-color: rgb(0, 0, 0);
            cursor: pointer;
            font-size: 10px;
            line-height: 12px;
            outline-color: rgb(0, 0, 0);
            perspective-origin: 50% 50%;
            text-align: left;
            text-decoration: none solid rgb(0, 0, 0);
            text-emphasis-color: rgb(0, 0, 0);
            transform-origin: 50% 50%;
            -webkit-text-fill-color: rgb(0, 0, 0);
            -webkit-text-stroke-color: rgb(0, 0, 0);
          "
          ><img
            style="block-size: 60px; cursor: pointer; font-size: 10px; height: 60px; inline-size: 60px; line-height: 12px; margin-block-end: 10px; margin-bottom: 10px; margin-inline-end: 10px; margin-right: 10px; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; width: 60px"
            border="1"
            width="60"
            height="60"
            alt="Globe and Mail: Jeremy Gutsche Discussing Potentialists"
            src="https://cdn.trendhunterstatic.com/phpthumbnails/56/56479/56479_1_120.jpeg" /></a
        ><a
          class="Ten"
          target="_blank"
          href="https://www.trendhunter.com/trends/jeremy-gutsche-cbc-radio"
          style="
            border-block-color: rgb(0, 0, 0);
            border-color: rgb(0, 0, 0);
            border-inline-color: rgb(0, 0, 0);
            caret-color: rgb(0, 0, 0);
            color: rgb(0, 0, 0);
            column-rule-color: rgb(0, 0, 0);
            cursor: pointer;
            font-size: 10px;
            line-height: 12px;
            outline-color: rgb(0, 0, 0);
            perspective-origin: 50% 50%;
            text-align: left;
            text-decoration: none solid rgb(0, 0, 0);
            text-emphasis-color: rgb(0, 0, 0);
            transform-origin: 50% 50%;
            -webkit-text-fill-color: rgb(0, 0, 0);
            -webkit-text-stroke-color: rgb(0, 0, 0);
          "
          ><img
            style="block-size: 60px; cursor: pointer; font-size: 10px; height: 60px; inline-size: 60px; line-height: 12px; margin-block-end: 10px; margin-bottom: 10px; margin-inline-end: 10px; margin-right: 10px; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; width: 60px"
            border="1"
            width="60"
            height="60"
            alt="Jeremy Gutsche Completes 16 Radio Interviews, Including CBC Radio, in One Day"
            src="https://cdn.trendhunterstatic.com/phpthumbnails/56/56359/56359_1_120.jpeg" /></a
        ><a
          class="Ten"
          target="_blank"
          href="https://www.trendhunter.com/trends/jeremy-gutsche-exploiting-chaos-potentialists"
          style="
            border-block-color: rgb(0, 0, 0);
            border-color: rgb(0, 0, 0);
            border-inline-color: rgb(0, 0, 0);
            caret-color: rgb(0, 0, 0);
            color: rgb(0, 0, 0);
            column-rule-color: rgb(0, 0, 0);
            cursor: pointer;
            font-size: 10px;
            line-height: 12px;
            outline-color: rgb(0, 0, 0);
            perspective-origin: 50% 50%;
            text-align: left;
            text-decoration: none solid rgb(0, 0, 0);
            text-emphasis-color: rgb(0, 0, 0);
            transform-origin: 50% 50%;
            -webkit-text-fill-color: rgb(0, 0, 0);
            -webkit-text-stroke-color: rgb(0, 0, 0);
          "
          ><img style="block-size: 60px; cursor: pointer; font-size: 10px; height: 60px; inline-size: 60px; line-height: 12px; margin-block-end: 10px; margin-bottom: 10px; margin-inline-end: 10px; margin-right: 10px; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; width: 60px;" border="1" width="60" height="60" alt="CTV:
          Jeremy Gutsche" s="" exploiting="" chaos="" featured'="" src="https://cdn.trendhunterstatic.com/phpthumbnails/56/56221/56221_1_120.jpeg"></a
        ><a
          class="Ten"
          target="_blank"
          href="https://www.trendhunter.com/trends/exploiting-chaos-national-post"
          style="
            border-block-color: rgb(0, 0, 0);
            border-color: rgb(0, 0, 0);
            border-inline-color: rgb(0, 0, 0);
            caret-color: rgb(0, 0, 0);
            color: rgb(0, 0, 0);
            column-rule-color: rgb(0, 0, 0);
            cursor: pointer;
            font-size: 10px;
            line-height: 12px;
            outline-color: rgb(0, 0, 0);
            perspective-origin: 50% 50%;
            text-align: left;
            text-decoration: none solid rgb(0, 0, 0);
            text-emphasis-color: rgb(0, 0, 0);
            transform-origin: 50% 50%;
            -webkit-text-fill-color: rgb(0, 0, 0);
            -webkit-text-stroke-color: rgb(0, 0, 0);
          "
          ><img style="block-size: 60px; cursor: pointer; font-size: 10px; height: 60px; inline-size: 60px; line-height: 12px; margin-block-end: 10px; margin-bottom: 10px; margin-inline-end: 10px; margin-right: 10px; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; width: 60px;" border="1" width="60" height="60"
          alt="National Post: Jeremy Gutsche Discusses the Book &quot;It" s="" not="" how="" good="" you="" are,="" it's="" go'="" src="https://cdn.trendhunterstatic.com/phpthumbnails/53/53414/53414_1_120.jpeg"></a
        ><a
          class="Ten"
          target="_blank"
          href="https://www.trendhunter.com/trends/jeremy-gutsche-bnn"
          style="
            border-block-color: rgb(0, 0, 0);
            border-color: rgb(0, 0, 0);
            border-inline-color: rgb(0, 0, 0);
            caret-color: rgb(0, 0, 0);
            color: rgb(0, 0, 0);
            column-rule-color: rgb(0, 0, 0);
            cursor: pointer;
            font-size: 10px;
            line-height: 12px;
            outline-color: rgb(0, 0, 0);
            perspective-origin: 50% 50%;
            text-align: left;
            text-decoration: none solid rgb(0, 0, 0);
            text-emphasis-color: rgb(0, 0, 0);
            transform-origin: 50% 50%;
            -webkit-text-fill-color: rgb(0, 0, 0);
            -webkit-text-stroke-color: rgb(0, 0, 0);
          "
          ><img
            style="block-size: 60px; cursor: pointer; font-size: 10px; height: 60px; inline-size: 60px; line-height: 12px; margin-block-end: 10px; margin-bottom: 10px; margin-inline-end: 10px; margin-right: 10px; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; width: 60px"
            border="1"
            width="60"
            height="60"
            alt="BNN: Jeremy Gutsche on EXPLOITING CHAOS"
            src="https://cdn.trendhunterstatic.com/phpthumbnails/53/53341/53341_1_120.jpeg" /></a
        ><a
          class="Ten"
          target="_blank"
          href="https://www.trendhunter.com/trends/jack-covert-800-ceo-read-exploiting-chaos"
          style="
            border-block-color: rgb(0, 0, 0);
            border-color: rgb(0, 0, 0);
            border-inline-color: rgb(0, 0, 0);
            caret-color: rgb(0, 0, 0);
            color: rgb(0, 0, 0);
            column-rule-color: rgb(0, 0, 0);
            cursor: pointer;
            font-size: 10px;
            line-height: 12px;
            outline-color: rgb(0, 0, 0);
            perspective-origin: 50% 50%;
            text-align: left;
            text-decoration: none solid rgb(0, 0, 0);
            text-emphasis-color: rgb(0, 0, 0);
            transform-origin: 50% 50%;
            -webkit-text-fill-color: rgb(0, 0, 0);
            -webkit-text-stroke-color: rgb(0, 0, 0);
          "
          ><img style="block-size: 60px; cursor: pointer; font-size: 10px; height: 60px; inline-size: 60px; line-height: 12px; margin-block-end: 10px; margin-bottom: 10px; margin-inline-end: 10px; margin-right: 10px; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; width: 60px;" border="1" width="60" height="60" alt="Jack
          Covert of 800 CEO Read: Jeremy Gutsche" s="" exploiting="" chaos="" featured'="" src="https://cdn.trendhunterstatic.com/phpthumbnails/53/53026/53026_1_120.jpeg"></a
        ><a
          class="Ten"
          target="_blank"
          href="https://www.trendhunter.com/trends/jeremy-gutsche-trendhunter.com-toronto-star"
          style="
            border-block-color: rgb(0, 0, 0);
            border-color: rgb(0, 0, 0);
            border-inline-color: rgb(0, 0, 0);
            caret-color: rgb(0, 0, 0);
            color: rgb(0, 0, 0);
            column-rule-color: rgb(0, 0, 0);
            cursor: pointer;
            font-size: 10px;
            line-height: 12px;
            outline-color: rgb(0, 0, 0);
            perspective-origin: 50% 50%;
            text-align: left;
            text-decoration: none solid rgb(0, 0, 0);
            text-emphasis-color: rgb(0, 0, 0);
            transform-origin: 50% 50%;
            -webkit-text-fill-color: rgb(0, 0, 0);
            -webkit-text-stroke-color: rgb(0, 0, 0);
          "
          ><img
            style="block-size: 60px; cursor: pointer; font-size: 10px; height: 60px; inline-size: 60px; line-height: 12px; margin-block-end: 10px; margin-bottom: 10px; margin-inline-end: 10px; margin-right: 10px; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; width: 60px"
            border="1"
            width="60"
            height="60"
            alt="Toronto Star: Jeremy Gutsche Profiled"
            src="https://cdn.trendhunterstatic.com/phpthumbnails/52/52895/52895_1_120.jpeg" /></a
        ><a
          class="Ten"
          target="_blank"
          href="https://www.trendhunter.com/trends/business-week-exploiting-chaos"
          style="
            border-block-color: rgb(0, 0, 0);
            border-color: rgb(0, 0, 0);
            border-inline-color: rgb(0, 0, 0);
            caret-color: rgb(0, 0, 0);
            color: rgb(0, 0, 0);
            column-rule-color: rgb(0, 0, 0);
            cursor: pointer;
            font-size: 10px;
            line-height: 12px;
            outline-color: rgb(0, 0, 0);
            perspective-origin: 50% 50%;
            text-align: left;
            text-decoration: none solid rgb(0, 0, 0);
            text-emphasis-color: rgb(0, 0, 0);
            transform-origin: 50% 50%;
            -webkit-text-fill-color: rgb(0, 0, 0);
            -webkit-text-stroke-color: rgb(0, 0, 0);
          "
          ><img style="block-size: 60px; cursor: pointer; font-size: 10px; height: 60px; inline-size: 60px; line-height: 12px; margin-block-end: 10px; margin-bottom: 10px; margin-inline-end: 10px; margin-right: 10px; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; width: 60px;" border="1" width="60" height="60"
          alt="BusinessWeek.com: Jeremy Gutsche" s="" exploiting="" chaos="" featured'="" src="https://cdn.trendhunterstatic.com/phpthumbnails/52/52629/52629_1_120.jpeg"></a
        ><a
          class="Ten"
          target="_blank"
          href="https://www.trendhunter.com/trends/jeremy-gutsche-exploiting-chaos-duct-tape-marketing"
          style="
            border-block-color: rgb(0, 0, 0);
            border-color: rgb(0, 0, 0);
            border-inline-color: rgb(0, 0, 0);
            caret-color: rgb(0, 0, 0);
            color: rgb(0, 0, 0);
            column-rule-color: rgb(0, 0, 0);
            cursor: pointer;
            font-size: 10px;
            line-height: 12px;
            outline-color: rgb(0, 0, 0);
            perspective-origin: 50% 50%;
            text-align: left;
            text-decoration: none solid rgb(0, 0, 0);
            text-emphasis-color: rgb(0, 0, 0);
            transform-origin: 50% 50%;
            -webkit-text-fill-color: rgb(0, 0, 0);
            -webkit-text-stroke-color: rgb(0, 0, 0);
          "
          ><img style="block-size: 60px; cursor: pointer; font-size: 10px; height: 60px; inline-size: 60px; line-height: 12px; margin-block-end: 10px; margin-bottom: 10px; margin-inline-end: 10px; margin-right: 10px; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; width: 60px;" border="1" width="60" height="60" alt="Duct
          Tape Marketing: Jeremy Gutsche" s="" exploiting="" chaos="" featured'="" src="https://cdn.trendhunterstatic.com/phpthumbnails/52/52624/52624_1_120.jpeg"></a
        ><a
          class="Ten"
          target="_blank"
          href="https://www.trendhunter.com/trends/jeremy-gutsche-exploiting-chaos-business-week"
          style="
            border-block-color: rgb(0, 0, 0);
            border-color: rgb(0, 0, 0);
            border-inline-color: rgb(0, 0, 0);
            caret-color: rgb(0, 0, 0);
            color: rgb(0, 0, 0);
            column-rule-color: rgb(0, 0, 0);
            cursor: pointer;
            font-size: 10px;
            line-height: 12px;
            outline-color: rgb(0, 0, 0);
            perspective-origin: 50% 50%;
            text-align: left;
            text-decoration: none solid rgb(0, 0, 0);
            text-emphasis-color: rgb(0, 0, 0);
            transform-origin: 50% 50%;
            -webkit-text-fill-color: rgb(0, 0, 0);
            -webkit-text-stroke-color: rgb(0, 0, 0);
          "
          ><img style="block-size: 60px; cursor: pointer; font-size: 10px; height: 60px; inline-size: 60px; line-height: 12px; margin-block-end: 10px; margin-bottom: 10px; margin-inline-end: 10px; margin-right: 10px; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; width: 60px;" border="1" width="60" height="60"
          alt="BusinessWeek: Jeremy Gutsche" s="" exploiting="" chaos="" featured'="" src="https://cdn.trendhunterstatic.com/phpthumbnails/52/52620/52620_1_120.jpeg"></a
        ><a
          class="Ten"
          target="_blank"
          href="https://www.trendhunter.com/trends/jeremy-gutsches-exploiting-chaos-on-breakfast-television-citytv"
          style="
            border-block-color: rgb(0, 0, 0);
            border-color: rgb(0, 0, 0);
            border-inline-color: rgb(0, 0, 0);
            caret-color: rgb(0, 0, 0);
            color: rgb(0, 0, 0);
            column-rule-color: rgb(0, 0, 0);
            cursor: pointer;
            font-size: 10px;
            line-height: 12px;
            outline-color: rgb(0, 0, 0);
            perspective-origin: 50% 50%;
            text-align: left;
            text-decoration: none solid rgb(0, 0, 0);
            text-emphasis-color: rgb(0, 0, 0);
            transform-origin: 50% 50%;
            -webkit-text-fill-color: rgb(0, 0, 0);
            -webkit-text-stroke-color: rgb(0, 0, 0);
          "
          ><img
            style="block-size: 60px; cursor: pointer; font-size: 10px; height: 60px; inline-size: 60px; line-height: 12px; margin-block-end: 10px; margin-bottom: 10px; margin-inline-end: 10px; margin-right: 10px; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; width: 60px"
            border="1"
            width="60"
            height="60"
            alt="Breakfast Television / CityTV: Jeremy Gutsche on Exploiting Chaos"
            src="https://cdn.trendhunterstatic.com/phpthumbnails/52/52593/52593_1_120.jpeg" /></a
        ><a
          class="Ten"
          target="_blank"
          href="https://www.trendhunter.com/trends/jeremy-gutsche-metro"
          style="
            border-block-color: rgb(0, 0, 0);
            border-color: rgb(0, 0, 0);
            border-inline-color: rgb(0, 0, 0);
            caret-color: rgb(0, 0, 0);
            color: rgb(0, 0, 0);
            column-rule-color: rgb(0, 0, 0);
            cursor: pointer;
            font-size: 10px;
            line-height: 12px;
            outline-color: rgb(0, 0, 0);
            perspective-origin: 50% 50%;
            text-align: left;
            text-decoration: none solid rgb(0, 0, 0);
            text-emphasis-color: rgb(0, 0, 0);
            transform-origin: 50% 50%;
            -webkit-text-fill-color: rgb(0, 0, 0);
            -webkit-text-stroke-color: rgb(0, 0, 0);
          "
          ><img style="block-size: 60px; cursor: pointer; font-size: 10px; height: 60px; inline-size: 60px; line-height: 12px; margin-block-end: 10px; margin-bottom: 10px; margin-inline-end: 10px; margin-right: 10px; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; width: 60px;" border="1" width="60" height="60" alt="Metro:
          Jeremy Gutsche" s="" exploiting="" chaos="" featured'="" src="https://cdn.trendhunterstatic.com/phpthumbnails/52/52519/52519_1_120.jpeg"></a
        ><a
          class="Ten"
          target="_blank"
          href="https://www.trendhunter.com/trends/exploiting-chaos-jeremy-gutsche-toro-magazine"
          style="
            border-block-color: rgb(0, 0, 0);
            border-color: rgb(0, 0, 0);
            border-inline-color: rgb(0, 0, 0);
            caret-color: rgb(0, 0, 0);
            color: rgb(0, 0, 0);
            column-rule-color: rgb(0, 0, 0);
            cursor: pointer;
            font-size: 10px;
            line-height: 12px;
            outline-color: rgb(0, 0, 0);
            perspective-origin: 50% 50%;
            text-align: left;
            text-decoration: none solid rgb(0, 0, 0);
            text-emphasis-color: rgb(0, 0, 0);
            transform-origin: 50% 50%;
            -webkit-text-fill-color: rgb(0, 0, 0);
            -webkit-text-stroke-color: rgb(0, 0, 0);
          "
          ><img style="block-size: 60px; cursor: pointer; font-size: 10px; height: 60px; inline-size: 60px; line-height: 12px; margin-block-end: 10px; margin-bottom: 10px; margin-inline-end: 10px; margin-right: 10px; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; width: 60px;" border="1" width="60" height="60" alt="Toro
          Magazine: Jeremy Gutsche" s="" exploiting="" chaos="" featured'="" src="https://cdn.trendhunterstatic.com/phpthumbnails/51/51936/51936_1_120.jpeg"></a
        ><a
          class="Ten"
          target="_blank"
          href="https://www.trendhunter.com/trends/exploiting-chaos-jeremy-gutsche-chicago-tribune"
          style="
            border-block-color: rgb(0, 0, 0);
            border-color: rgb(0, 0, 0);
            border-inline-color: rgb(0, 0, 0);
            caret-color: rgb(0, 0, 0);
            color: rgb(0, 0, 0);
            column-rule-color: rgb(0, 0, 0);
            cursor: pointer;
            font-size: 10px;
            line-height: 12px;
            outline-color: rgb(0, 0, 0);
            perspective-origin: 50% 50%;
            text-align: left;
            text-decoration: none solid rgb(0, 0, 0);
            text-emphasis-color: rgb(0, 0, 0);
            transform-origin: 50% 50%;
            -webkit-text-fill-color: rgb(0, 0, 0);
            -webkit-text-stroke-color: rgb(0, 0, 0);
          "
          ><img style="block-size: 60px; cursor: pointer; font-size: 10px; height: 60px; inline-size: 60px; line-height: 12px; margin-block-end: 10px; margin-bottom: 10px; margin-inline-end: 10px; margin-right: 10px; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; width: 60px;" border="1" width="60" height="60"
          alt="Chicago Tribune: Jeremy Gutsche on ROHTO" s="" 'cool="" not="" cool'="" survey'="" src="https://cdn.trendhunterstatic.com/phpthumbnails/51/51827/51827_1_120.jpeg"></a
        ><a
          class="Ten"
          target="_blank"
          href="https://www.trendhunter.com/trends/jeremy-gutsche-and-trend-hunter-profiled-in-queens-alumni-magazine"
          style="
            border-block-color: rgb(0, 0, 0);
            border-color: rgb(0, 0, 0);
            border-inline-color: rgb(0, 0, 0);
            caret-color: rgb(0, 0, 0);
            color: rgb(0, 0, 0);
            column-rule-color: rgb(0, 0, 0);
            cursor: pointer;
            font-size: 10px;
            line-height: 12px;
            outline-color: rgb(0, 0, 0);
            perspective-origin: 50% 50%;
            text-align: left;
            text-decoration: none solid rgb(0, 0, 0);
            text-emphasis-color: rgb(0, 0, 0);
            transform-origin: 50% 50%;
            -webkit-text-fill-color: rgb(0, 0, 0);
            -webkit-text-stroke-color: rgb(0, 0, 0);
          "
          ><img style="block-size: 60px; cursor: pointer; font-size: 10px; height: 60px; inline-size: 60px; line-height: 12px; margin-block-end: 10px; margin-bottom: 10px; margin-inline-end: 10px; margin-right: 10px; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; width: 60px;" border="1" width="60" height="60" alt="Queen"
          s="" alumni="" magazine:="" jeremy="" gutsche="" profiled'="" src="https://cdn.trendhunterstatic.com/phpthumbnails/50/50771/50771_1_120.jpeg"></a
        ><a
          class="Ten"
          target="_blank"
          href="https://www.trendhunter.com/trends/jeremy-gutsche-exploiting-chaos-media"
          style="
            border-block-color: rgb(0, 0, 0);
            border-color: rgb(0, 0, 0);
            border-inline-color: rgb(0, 0, 0);
            caret-color: rgb(0, 0, 0);
            color: rgb(0, 0, 0);
            column-rule-color: rgb(0, 0, 0);
            cursor: pointer;
            font-size: 10px;
            line-height: 12px;
            outline-color: rgb(0, 0, 0);
            perspective-origin: 50% 50%;
            text-align: left;
            text-decoration: none solid rgb(0, 0, 0);
            text-emphasis-color: rgb(0, 0, 0);
            transform-origin: 50% 50%;
            -webkit-text-fill-color: rgb(0, 0, 0);
            -webkit-text-stroke-color: rgb(0, 0, 0);
          "
          ><img style="block-size: 60px; cursor: pointer; font-size: 10px; height: 60px; inline-size: 60px; line-height: 12px; margin-block-end: 10px; margin-bottom: 10px; margin-inline-end: 10px; margin-right: 10px; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; width: 60px;" border="1" width="60" height="60"
          alt="Publishers Weekly:&nbsp; Jeremy Gutsche" s="" exploiting="" chaos="" featured'="" src="https://cdn.trendhunterstatic.com/phpthumbnails/44/44833/44833_1_120.jpeg"></a
        ><a
          class="Ten"
          target="_blank"
          href="https://www.trendhunter.com/trends/jeremy-gutsche-keynote-therecord.com"
          style="
            border-block-color: rgb(0, 0, 0);
            border-color: rgb(0, 0, 0);
            border-inline-color: rgb(0, 0, 0);
            caret-color: rgb(0, 0, 0);
            color: rgb(0, 0, 0);
            column-rule-color: rgb(0, 0, 0);
            cursor: pointer;
            font-size: 10px;
            line-height: 12px;
            outline-color: rgb(0, 0, 0);
            perspective-origin: 50% 50%;
            text-align: left;
            text-decoration: none solid rgb(0, 0, 0);
            text-emphasis-color: rgb(0, 0, 0);
            transform-origin: 50% 50%;
            -webkit-text-fill-color: rgb(0, 0, 0);
            -webkit-text-stroke-color: rgb(0, 0, 0);
          "
          ><img style="block-size: 60px; cursor: pointer; font-size: 10px; height: 60px; inline-size: 60px; line-height: 12px; margin-block-end: 10px; margin-bottom: 10px; margin-inline-end: 10px; margin-right: 10px; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; width: 60px;" border="1" width="60" height="60" alt="The
          Record: Jeremy Gutsche" s="" keynote="" featured'="" src="https://cdn.trendhunterstatic.com/phpthumbnails/44/44828/44828_1_120.jpeg"></a
        >
        <br style="font-size: 16px; line-height: 19.2px; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%" />

        <hr style="font-size: 16px; inline-size: auto; line-height: 19.2px; margin-block: 8px; margin: 8px auto; margin-inline: auto; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; width: auto" />

        <b style="font-size: 16px; line-height: 19.2px; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%">More Coverage</b> (<a href="https://www.trendhunter.com/contact" style="cursor: pointer; font-size: 16px; line-height: 19.2px; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%">Add Your Link</a
        >)<br style="font-size: 16px; line-height: 19.2px; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%" />
        <br style="font-size: 16px; line-height: 19.2px; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%" />

        <table border="0" cellspacing="0" cellpadding="0" width="680" style="block-size: auto; font-size: 16px; height: auto; inline-size: 680px; line-height: 19.2px; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; width: 680px; border-spacing: 0px">
          <tbody style="block-size: auto; border-block-color: rgb(128, 128, 128); border-color: rgb(128, 128, 128); border-inline-color: rgb(128, 128, 128); font-size: 16px; height: auto; inline-size: auto; line-height: 19.2px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; width: auto">
            <tr
              valign="top"
              style="
                block-size: auto;
                border-block-color: rgb(128, 128, 128);
                border-color: rgb(128, 128, 128);
                border-inline-color: rgb(128, 128, 128);
                font-size: 16px;
                height: auto;
                inline-size: auto;
                line-height: 19.2px;
                overflow-wrap: break-word;
                perspective-origin: 50% 50%;
                text-align: left;
                transform-origin: 50% 50%;
                vertical-align: top;
                width: auto;
              "
            >
              <td style="block-size: auto; font-size: 16px; height: auto; inline-size: auto; line-height: 19.2px; overflow-wrap: break-word; padding-block: 0px; padding: 0px; padding-inline: 0px; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; vertical-align: top; width: auto">
                <a
                  class="Fourteen"
                  target="_blank"
                  href="http://blog.800ceoread.com/2009/08/18/a-sneak-peak-of-exploiting-chaos/"
                  style="
                    border-block-color: rgb(0, 0, 0);
                    border-color: rgb(0, 0, 0);
                    border-inline-color: rgb(0, 0, 0);
                    caret-color: rgb(0, 0, 0);
                    color: rgb(0, 0, 0);
                    column-rule-color: rgb(0, 0, 0);
                    cursor: pointer;
                    font-size: 14px;
                    line-height: 16.8px;
                    outline-color: rgb(0, 0, 0);
                    overflow-wrap: break-word;
                    perspective-origin: 50% 50%;
                    text-align: left;
                    text-decoration: none solid rgb(0, 0, 0);
                    text-emphasis-color: rgb(0, 0, 0);
                    transform-origin: 50% 50%;
                    -webkit-text-fill-color: rgb(0, 0, 0);
                    -webkit-text-stroke-color: rgb(0, 0, 0);
                  "
                  >800 CEO Read</a
                ><br style="font-size: 16px; line-height: 19.2px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%" /><a
                  class="Fourteen"
                  target="_blank"
                  href="http://www.ducttapemarketing.com/blog/2009/09/09/exploiting-chaos-with-the-trendhunter/"
                  style="
                    border-block-color: rgb(0, 0, 0);
                    border-color: rgb(0, 0, 0);
                    border-inline-color: rgb(0, 0, 0);
                    caret-color: rgb(0, 0, 0);
                    color: rgb(0, 0, 0);
                    column-rule-color: rgb(0, 0, 0);
                    cursor: pointer;
                    font-size: 14px;
                    line-height: 16.8px;
                    outline-color: rgb(0, 0, 0);
                    overflow-wrap: break-word;
                    perspective-origin: 50% 50%;
                    text-align: left;
                    text-decoration: none solid rgb(0, 0, 0);
                    text-emphasis-color: rgb(0, 0, 0);
                    transform-origin: 50% 50%;
                    -webkit-text-fill-color: rgb(0, 0, 0);
                    -webkit-text-stroke-color: rgb(0, 0, 0);
                  "
                  >Duct Tape Marketing</a
                ><br style="font-size: 16px; line-height: 19.2px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%" /><a
                  class="Fourteen"
                  target="_blank"
                  href="http://innovation.fleishmanhillard.com/?p=3790"
                  style="
                    border-block-color: rgb(0, 0, 0);
                    border-color: rgb(0, 0, 0);
                    border-inline-color: rgb(0, 0, 0);
                    caret-color: rgb(0, 0, 0);
                    color: rgb(0, 0, 0);
                    column-rule-color: rgb(0, 0, 0);
                    cursor: pointer;
                    font-size: 14px;
                    line-height: 16.8px;
                    outline-color: rgb(0, 0, 0);
                    overflow-wrap: break-word;
                    perspective-origin: 50% 50%;
                    text-align: left;
                    text-decoration: none solid rgb(0, 0, 0);
                    text-emphasis-color: rgb(0, 0, 0);
                    transform-origin: 50% 50%;
                    -webkit-text-fill-color: rgb(0, 0, 0);
                    -webkit-text-stroke-color: rgb(0, 0, 0);
                  "
                  >Fleishman Hillard</a
                ><br style="font-size: 16px; line-height: 19.2px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%" /><a
                  class="Fourteen"
                  target="_blank"
                  href="http://www.bornrich.org/entry/trendhunters-new-trends-book-exploiting-chaos-calls-for-the-innovators/"
                  style="
                    border-block-color: rgb(0, 0, 0);
                    border-color: rgb(0, 0, 0);
                    border-inline-color: rgb(0, 0, 0);
                    caret-color: rgb(0, 0, 0);
                    color: rgb(0, 0, 0);
                    column-rule-color: rgb(0, 0, 0);
                    cursor: pointer;
                    font-size: 14px;
                    line-height: 16.8px;
                    outline-color: rgb(0, 0, 0);
                    overflow-wrap: break-word;
                    perspective-origin: 50% 50%;
                    text-align: left;
                    text-decoration: none solid rgb(0, 0, 0);
                    text-emphasis-color: rgb(0, 0, 0);
                    transform-origin: 50% 50%;
                    -webkit-text-fill-color: rgb(0, 0, 0);
                    -webkit-text-stroke-color: rgb(0, 0, 0);
                  "
                  >Born Rich</a
                ><br style="font-size: 16px; line-height: 19.2px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%" /><a
                  class="Fourteen"
                  target="_blank"
                  href="http://www.fastcompany.com/blog/david-heitman/marketing-and-pr-challenging-economy-edition/not-disruptivedestructive"
                  style="
                    border-block-color: rgb(0, 0, 0);
                    border-color: rgb(0, 0, 0);
                    border-inline-color: rgb(0, 0, 0);
                    caret-color: rgb(0, 0, 0);
                    color: rgb(0, 0, 0);
                    column-rule-color: rgb(0, 0, 0);
                    cursor: pointer;
                    font-size: 14px;
                    line-height: 16.8px;
                    outline-color: rgb(0, 0, 0);
                    overflow-wrap: break-word;
                    perspective-origin: 50% 50%;
                    text-align: left;
                    text-decoration: none solid rgb(0, 0, 0);
                    text-emphasis-color: rgb(0, 0, 0);
                    transform-origin: 50% 50%;
                    -webkit-text-fill-color: rgb(0, 0, 0);
                    -webkit-text-stroke-color: rgb(0, 0, 0);
                  "
                  >Fast Company</a
                ><br style="font-size: 16px; line-height: 19.2px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%" /><a
                  class="Fourteen"
                  target="_blank"
                  href="http://www.squidoo.com/book-roundup"
                  style="
                    border-block-color: rgb(0, 0, 0);
                    border-color: rgb(0, 0, 0);
                    border-inline-color: rgb(0, 0, 0);
                    caret-color: rgb(0, 0, 0);
                    color: rgb(0, 0, 0);
                    column-rule-color: rgb(0, 0, 0);
                    cursor: pointer;
                    font-size: 14px;
                    line-height: 16.8px;
                    outline-color: rgb(0, 0, 0);
                    overflow-wrap: break-word;
                    perspective-origin: 50% 50%;
                    text-align: left;
                    text-decoration: none solid rgb(0, 0, 0);
                    text-emphasis-color: rgb(0, 0, 0);
                    transform-origin: 50% 50%;
                    -webkit-text-fill-color: rgb(0, 0, 0);
                    -webkit-text-stroke-color: rgb(0, 0, 0);
                  "
                  >Seth Godin's Book Roundup</a
                ><br style="font-size: 16px; line-height: 19.2px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%" /><a
                  class="Fourteen"
                  target="_blank"
                  href="http://www.ohgizmo.com/2009/08/18/check-out-exploiting-chaos-a-new-book-by-jeremy-gutsche"
                  style="
                    border-block-color: rgb(0, 0, 0);
                    border-color: rgb(0, 0, 0);
                    border-inline-color: rgb(0, 0, 0);
                    caret-color: rgb(0, 0, 0);
                    color: rgb(0, 0, 0);
                    column-rule-color: rgb(0, 0, 0);
                    cursor: pointer;
                    font-size: 14px;
                    line-height: 16.8px;
                    outline-color: rgb(0, 0, 0);
                    overflow-wrap: break-word;
                    perspective-origin: 50% 50%;
                    text-align: left;
                    text-decoration: none solid rgb(0, 0, 0);
                    text-emphasis-color: rgb(0, 0, 0);
                    transform-origin: 50% 50%;
                    -webkit-text-fill-color: rgb(0, 0, 0);
                    -webkit-text-stroke-color: rgb(0, 0, 0);
                  "
                  >Oh Gizmo</a
                ><br style="font-size: 16px; line-height: 19.2px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%" /><a
                  class="Fourteen"
                  target="_blank"
                  href="http://www.bzzagent.com/frog/FrogHome.do?name=EXPLOITING-CHAOS&amp;frogIdent=6024765151"
                  style="
                    border-block-color: rgb(0, 0, 0);
                    border-color: rgb(0, 0, 0);
                    border-inline-color: rgb(0, 0, 0);
                    caret-color: rgb(0, 0, 0);
                    color: rgb(0, 0, 0);
                    column-rule-color: rgb(0, 0, 0);
                    cursor: pointer;
                    font-size: 14px;
                    line-height: 16.8px;
                    outline-color: rgb(0, 0, 0);
                    overflow-wrap: break-word;
                    perspective-origin: 50% 50%;
                    text-align: left;
                    text-decoration: none solid rgb(0, 0, 0);
                    text-emphasis-color: rgb(0, 0, 0);
                    transform-origin: 50% 50%;
                    -webkit-text-fill-color: rgb(0, 0, 0);
                    -webkit-text-stroke-color: rgb(0, 0, 0);
                  "
                  >BzzAgent</a
                ><br style="font-size: 16px; line-height: 19.2px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%" /><a
                  class="Fourteen"
                  target="_blank"
                  href="http://www.neatorama.com/2009/08/31/exploiting-chaos-new-book-by-trendhunters-jeremy-gutsche/"
                  style="
                    border-block-color: rgb(0, 0, 0);
                    border-color: rgb(0, 0, 0);
                    border-inline-color: rgb(0, 0, 0);
                    caret-color: rgb(0, 0, 0);
                    color: rgb(0, 0, 0);
                    column-rule-color: rgb(0, 0, 0);
                    cursor: pointer;
                    font-size: 14px;
                    line-height: 16.8px;
                    outline-color: rgb(0, 0, 0);
                    overflow-wrap: break-word;
                    perspective-origin: 50% 50%;
                    text-align: left;
                    text-decoration: none solid rgb(0, 0, 0);
                    text-emphasis-color: rgb(0, 0, 0);
                    transform-origin: 50% 50%;
                    -webkit-text-fill-color: rgb(0, 0, 0);
                    -webkit-text-stroke-color: rgb(0, 0, 0);
                  "
                  >Neatorama</a
                ><br style="font-size: 16px; line-height: 19.2px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%" /><a
                  class="Fourteen"
                  target="_blank"
                  href="http://www.lyved.com/misc/thriving-by-exploiting-chaos/"
                  style="
                    border-block-color: rgb(0, 0, 0);
                    border-color: rgb(0, 0, 0);
                    border-inline-color: rgb(0, 0, 0);
                    caret-color: rgb(0, 0, 0);
                    color: rgb(0, 0, 0);
                    column-rule-color: rgb(0, 0, 0);
                    cursor: pointer;
                    font-size: 14px;
                    line-height: 16.8px;
                    outline-color: rgb(0, 0, 0);
                    overflow-wrap: break-word;
                    perspective-origin: 50% 50%;
                    text-align: left;
                    text-decoration: none solid rgb(0, 0, 0);
                    text-emphasis-color: rgb(0, 0, 0);
                    transform-origin: 50% 50%;
                    -webkit-text-fill-color: rgb(0, 0, 0);
                    -webkit-text-stroke-color: rgb(0, 0, 0);
                  "
                  >Lyved</a
                ><br style="font-size: 16px; line-height: 19.2px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%" /><a
                  class="Fourteen"
                  target="_blank"
                  href="http://su.pr/25knPV"
                  style="
                    border-block-color: rgb(0, 0, 0);
                    border-color: rgb(0, 0, 0);
                    border-inline-color: rgb(0, 0, 0);
                    caret-color: rgb(0, 0, 0);
                    color: rgb(0, 0, 0);
                    column-rule-color: rgb(0, 0, 0);
                    cursor: pointer;
                    font-size: 14px;
                    line-height: 16.8px;
                    outline-color: rgb(0, 0, 0);
                    overflow-wrap: break-word;
                    perspective-origin: 50% 50%;
                    text-align: left;
                    text-decoration: none solid rgb(0, 0, 0);
                    text-emphasis-color: rgb(0, 0, 0);
                    transform-origin: 50% 50%;
                    -webkit-text-fill-color: rgb(0, 0, 0);
                    -webkit-text-stroke-color: rgb(0, 0, 0);
                  "
                  >Tim Ferriss</a
                ><br style="font-size: 16px; line-height: 19.2px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%" /><a
                  class="Fourteen"
                  target="_blank"
                  href="http://esbjournal.com/2009/08/free-book-preview-exploiting-chaos-45-pages-download/"
                  style="
                    border-block-color: rgb(0, 0, 0);
                    border-color: rgb(0, 0, 0);
                    border-inline-color: rgb(0, 0, 0);
                    caret-color: rgb(0, 0, 0);
                    color: rgb(0, 0, 0);
                    column-rule-color: rgb(0, 0, 0);
                    cursor: pointer;
                    font-size: 14px;
                    line-height: 16.8px;
                    outline-color: rgb(0, 0, 0);
                    overflow-wrap: break-word;
                    perspective-origin: 50% 50%;
                    text-align: left;
                    text-decoration: none solid rgb(0, 0, 0);
                    text-emphasis-color: rgb(0, 0, 0);
                    transform-origin: 50% 50%;
                    -webkit-text-fill-color: rgb(0, 0, 0);
                    -webkit-text-stroke-color: rgb(0, 0, 0);
                  "
                  >ESB Journal</a
                ><br style="font-size: 16px; line-height: 19.2px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%" /><a
                  class="Fourteen"
                  target="_blank"
                  href="http://www.adlounge.ca/news_detail.php?id=102"
                  style="
                    border-block-color: rgb(0, 0, 0);
                    border-color: rgb(0, 0, 0);
                    border-inline-color: rgb(0, 0, 0);
                    caret-color: rgb(0, 0, 0);
                    color: rgb(0, 0, 0);
                    column-rule-color: rgb(0, 0, 0);
                    cursor: pointer;
                    font-size: 14px;
                    line-height: 16.8px;
                    outline-color: rgb(0, 0, 0);
                    overflow-wrap: break-word;
                    perspective-origin: 50% 50%;
                    text-align: left;
                    text-decoration: none solid rgb(0, 0, 0);
                    text-emphasis-color: rgb(0, 0, 0);
                    transform-origin: 50% 50%;
                    -webkit-text-fill-color: rgb(0, 0, 0);
                    -webkit-text-stroke-color: rgb(0, 0, 0);
                  "
                  >Ad Lounge</a
                ><br style="font-size: 16px; line-height: 19.2px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%" /><a
                  class="Fourteen"
                  target="_blank"
                  href="http://design.alltop.com/"
                  style="
                    border-block-color: rgb(0, 0, 0);
                    border-color: rgb(0, 0, 0);
                    border-inline-color: rgb(0, 0, 0);
                    caret-color: rgb(0, 0, 0);
                    color: rgb(0, 0, 0);
                    column-rule-color: rgb(0, 0, 0);
                    cursor: pointer;
                    font-size: 14px;
                    line-height: 16.8px;
                    outline-color: rgb(0, 0, 0);
                    overflow-wrap: break-word;
                    perspective-origin: 50% 50%;
                    text-align: left;
                    text-decoration: none solid rgb(0, 0, 0);
                    text-emphasis-color: rgb(0, 0, 0);
                    transform-origin: 50% 50%;
                    -webkit-text-fill-color: rgb(0, 0, 0);
                    -webkit-text-stroke-color: rgb(0, 0, 0);
                  "
                  >Guy Kawasaki</a
                ><br style="font-size: 16px; line-height: 19.2px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%" /><a
                  class="Fourteen"
                  target="_blank"
                  href="http://www.marsdd.com/blog/2010/03/17/don%E2%80%99t-you-just-love-a-good-story/"
                  style="
                    border-block-color: rgb(0, 0, 0);
                    border-color: rgb(0, 0, 0);
                    border-inline-color: rgb(0, 0, 0);
                    caret-color: rgb(0, 0, 0);
                    color: rgb(0, 0, 0);
                    column-rule-color: rgb(0, 0, 0);
                    cursor: pointer;
                    font-size: 14px;
                    line-height: 16.8px;
                    outline-color: rgb(0, 0, 0);
                    overflow-wrap: break-word;
                    perspective-origin: 50% 50%;
                    text-align: left;
                    text-decoration: none solid rgb(0, 0, 0);
                    text-emphasis-color: rgb(0, 0, 0);
                    transform-origin: 50% 50%;
                    -webkit-text-fill-color: rgb(0, 0, 0);
                    -webkit-text-stroke-color: rgb(0, 0, 0);
                  "
                  >MaRS</a
                ><br style="font-size: 16px; line-height: 19.2px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%" /><a
                  class="Fourteen"
                  target="_blank"
                  href="http://trendoffice.blogspot.com/2009/08/turn-business-as-usual-totally-upside.html"
                  style="
                    border-block-color: rgb(0, 0, 0);
                    border-color: rgb(0, 0, 0);
                    border-inline-color: rgb(0, 0, 0);
                    caret-color: rgb(0, 0, 0);
                    color: rgb(0, 0, 0);
                    column-rule-color: rgb(0, 0, 0);
                    cursor: pointer;
                    font-size: 14px;
                    line-height: 16.8px;
                    outline-color: rgb(0, 0, 0);
                    overflow-wrap: break-word;
                    perspective-origin: 50% 50%;
                    text-align: left;
                    text-decoration: none solid rgb(0, 0, 0);
                    text-emphasis-color: rgb(0, 0, 0);
                    transform-origin: 50% 50%;
                    -webkit-text-fill-color: rgb(0, 0, 0);
                    -webkit-text-stroke-color: rgb(0, 0, 0);
                  "
                  >Trend Office</a
                ><br style="font-size: 16px; line-height: 19.2px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%" /><a
                  class="Fourteen"
                  target="_blank"
                  href="http://www.examiner.com/x-/x-8310-Trendy-Living-Examiner~y2009m9d14-Jeremy-Gutsche-explains-Exploiting-Chaos-via-high-fives-with-Kanye-West-or-Ashton-Kutcher-Video"
                  style="
                    border-block-color: rgb(0, 0, 0);
                    border-color: rgb(0, 0, 0);
                    border-inline-color: rgb(0, 0, 0);
                    caret-color: rgb(0, 0, 0);
                    color: rgb(0, 0, 0);
                    column-rule-color: rgb(0, 0, 0);
                    cursor: pointer;
                    font-size: 14px;
                    line-height: 16.8px;
                    outline-color: rgb(0, 0, 0);
                    overflow-wrap: break-word;
                    perspective-origin: 50% 50%;
                    text-align: left;
                    text-decoration: none solid rgb(0, 0, 0);
                    text-emphasis-color: rgb(0, 0, 0);
                    transform-origin: 50% 50%;
                    -webkit-text-fill-color: rgb(0, 0, 0);
                    -webkit-text-stroke-color: rgb(0, 0, 0);
                  "
                  >The Examiner</a
                ><br style="font-size: 16px; line-height: 19.2px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%" /><a
                  class="Fourteen"
                  target="_blank"
                  href="http://arabaquarius.blogspot.com/2009/08/exploiting-chaos-by-jeremy-gutsche.html"
                  style="
                    border-block-color: rgb(0, 0, 0);
                    border-color: rgb(0, 0, 0);
                    border-inline-color: rgb(0, 0, 0);
                    caret-color: rgb(0, 0, 0);
                    color: rgb(0, 0, 0);
                    column-rule-color: rgb(0, 0, 0);
                    cursor: pointer;
                    font-size: 14px;
                    line-height: 16.8px;
                    outline-color: rgb(0, 0, 0);
                    overflow-wrap: break-word;
                    perspective-origin: 50% 50%;
                    text-align: left;
                    text-decoration: none solid rgb(0, 0, 0);
                    text-emphasis-color: rgb(0, 0, 0);
                    transform-origin: 50% 50%;
                    -webkit-text-fill-color: rgb(0, 0, 0);
                    -webkit-text-stroke-color: rgb(0, 0, 0);
                  "
                  >The Arab Aquarius</a
                ><br style="font-size: 16px; line-height: 19.2px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%" /><a
                  class="Fourteen"
                  target="_blank"
                  href="http://ambermac.com/articles/2009/08/19/exploiting-chaos-free-download"
                  style="
                    border-block-color: rgb(0, 0, 0);
                    border-color: rgb(0, 0, 0);
                    border-inline-color: rgb(0, 0, 0);
                    caret-color: rgb(0, 0, 0);
                    color: rgb(0, 0, 0);
                    column-rule-color: rgb(0, 0, 0);
                    cursor: pointer;
                    font-size: 14px;
                    line-height: 16.8px;
                    outline-color: rgb(0, 0, 0);
                    overflow-wrap: break-word;
                    perspective-origin: 50% 50%;
                    text-align: left;
                    text-decoration: none solid rgb(0, 0, 0);
                    text-emphasis-color: rgb(0, 0, 0);
                    transform-origin: 50% 50%;
                    -webkit-text-fill-color: rgb(0, 0, 0);
                    -webkit-text-stroke-color: rgb(0, 0, 0);
                  "
                  >Amber Mac</a
                ><br style="font-size: 16px; line-height: 19.2px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%" /><a
                  class="Fourteen"
                  target="_blank"
                  href="http://blog.impact.org/2009/09/jeremy-gutsche-inspiring-all-to-exploit-chaos"
                  style="
                    border-block-color: rgb(0, 0, 0);
                    border-color: rgb(0, 0, 0);
                    border-inline-color: rgb(0, 0, 0);
                    caret-color: rgb(0, 0, 0);
                    color: rgb(0, 0, 0);
                    column-rule-color: rgb(0, 0, 0);
                    cursor: pointer;
                    font-size: 14px;
                    line-height: 16.8px;
                    outline-color: rgb(0, 0, 0);
                    overflow-wrap: break-word;
                    perspective-origin: 50% 50%;
                    text-align: left;
                    text-decoration: none solid rgb(0, 0, 0);
                    text-emphasis-color: rgb(0, 0, 0);
                    transform-origin: 50% 50%;
                    -webkit-text-fill-color: rgb(0, 0, 0);
                    -webkit-text-stroke-color: rgb(0, 0, 0);
                  "
                  >Impact</a
                ><br style="font-size: 16px; line-height: 19.2px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%" /><a
                  class="Fourteen"
                  target="_blank"
                  href="http://allxclubnews.blogspot.com/2009/08/exploiting-chaos-means-business-in.html"
                  style="
                    border-block-color: rgb(0, 0, 0);
                    border-color: rgb(0, 0, 0);
                    border-inline-color: rgb(0, 0, 0);
                    caret-color: rgb(0, 0, 0);
                    color: rgb(0, 0, 0);
                    column-rule-color: rgb(0, 0, 0);
                    cursor: pointer;
                    font-size: 14px;
                    line-height: 16.8px;
                    outline-color: rgb(0, 0, 0);
                    overflow-wrap: break-word;
                    perspective-origin: 50% 50%;
                    text-align: left;
                    text-decoration: none solid rgb(0, 0, 0);
                    text-emphasis-color: rgb(0, 0, 0);
                    transform-origin: 50% 50%;
                    -webkit-text-fill-color: rgb(0, 0, 0);
                    -webkit-text-stroke-color: rgb(0, 0, 0);
                  "
                  >Carlo &amp; Gale's AllXClub News</a
                ><br style="font-size: 16px; line-height: 19.2px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%" /><a
                  class="Fourteen"
                  target="_blank"
                  href="http://upcoming.current.com/items/241553_preview-exploiting-chaos-150-ways-to-spark-innovation-during-times-of-change.htm"
                  style="
                    border-block-color: rgb(0, 0, 0);
                    border-color: rgb(0, 0, 0);
                    border-inline-color: rgb(0, 0, 0);
                    caret-color: rgb(0, 0, 0);
                    color: rgb(0, 0, 0);
                    column-rule-color: rgb(0, 0, 0);
                    cursor: pointer;
                    font-size: 14px;
                    line-height: 16.8px;
                    outline-color: rgb(0, 0, 0);
                    overflow-wrap: break-word;
                    perspective-origin: 50% 50%;
                    text-align: left;
                    text-decoration: none solid rgb(0, 0, 0);
                    text-emphasis-color: rgb(0, 0, 0);
                    transform-origin: 50% 50%;
                    -webkit-text-fill-color: rgb(0, 0, 0);
                    -webkit-text-stroke-color: rgb(0, 0, 0);
                  "
                  >Current</a
                ><br style="font-size: 16px; line-height: 19.2px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%" />
              </td>
              <td style="block-size: auto; font-size: 16px; height: auto; inline-size: auto; line-height: 19.2px; overflow-wrap: break-word; padding-block: 0px; padding: 0px; padding-inline: 0px; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; vertical-align: top; width: auto">
                <a
                  class="Fourteen"
                  target="_blank"
                  href="http://justinbasini.blogspot.com/2009/08/what-is-innovation-really.html"
                  style="
                    border-block-color: rgb(0, 0, 0);
                    border-color: rgb(0, 0, 0);
                    border-inline-color: rgb(0, 0, 0);
                    caret-color: rgb(0, 0, 0);
                    color: rgb(0, 0, 0);
                    column-rule-color: rgb(0, 0, 0);
                    cursor: pointer;
                    font-size: 14px;
                    line-height: 16.8px;
                    outline-color: rgb(0, 0, 0);
                    overflow-wrap: break-word;
                    perspective-origin: 50% 50%;
                    text-align: left;
                    text-decoration: none solid rgb(0, 0, 0);
                    text-emphasis-color: rgb(0, 0, 0);
                    transform-origin: 50% 50%;
                    -webkit-text-fill-color: rgb(0, 0, 0);
                    -webkit-text-stroke-color: rgb(0, 0, 0);
                  "
                  >Justin Basini</a
                ><br style="font-size: 16px; line-height: 19.2px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%" /><a
                  class="Fourteen"
                  target="_blank"
                  href="http://www.brandinfiltration.com/dailygrind/2009/10/06/exploiting-chaos/"
                  style="
                    border-block-color: rgb(0, 0, 0);
                    border-color: rgb(0, 0, 0);
                    border-inline-color: rgb(0, 0, 0);
                    caret-color: rgb(0, 0, 0);
                    color: rgb(0, 0, 0);
                    column-rule-color: rgb(0, 0, 0);
                    cursor: pointer;
                    font-size: 14px;
                    line-height: 16.8px;
                    outline-color: rgb(0, 0, 0);
                    overflow-wrap: break-word;
                    perspective-origin: 50% 50%;
                    text-align: left;
                    text-decoration: none solid rgb(0, 0, 0);
                    text-emphasis-color: rgb(0, 0, 0);
                    transform-origin: 50% 50%;
                    -webkit-text-fill-color: rgb(0, 0, 0);
                    -webkit-text-stroke-color: rgb(0, 0, 0);
                  "
                  >Brand Filtration</a
                ><br style="font-size: 16px; line-height: 19.2px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%" /><a
                  class="Fourteen"
                  target="_blank"
                  href="http://www.beadinggem.com/2009/08/exploiting-chaos-150-ways-to-spark.html"
                  style="
                    border-block-color: rgb(0, 0, 0);
                    border-color: rgb(0, 0, 0);
                    border-inline-color: rgb(0, 0, 0);
                    caret-color: rgb(0, 0, 0);
                    color: rgb(0, 0, 0);
                    column-rule-color: rgb(0, 0, 0);
                    cursor: pointer;
                    font-size: 14px;
                    line-height: 16.8px;
                    outline-color: rgb(0, 0, 0);
                    overflow-wrap: break-word;
                    perspective-origin: 50% 50%;
                    text-align: left;
                    text-decoration: none solid rgb(0, 0, 0);
                    text-emphasis-color: rgb(0, 0, 0);
                    transform-origin: 50% 50%;
                    -webkit-text-fill-color: rgb(0, 0, 0);
                    -webkit-text-stroke-color: rgb(0, 0, 0);
                  "
                  >The Beading Gem's Journal</a
                ><br style="font-size: 16px; line-height: 19.2px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%" /><a
                  class="Fourteen"
                  target="_blank"
                  href="http://theessentialorange.blogspot.com/"
                  style="
                    border-block-color: rgb(0, 0, 0);
                    border-color: rgb(0, 0, 0);
                    border-inline-color: rgb(0, 0, 0);
                    caret-color: rgb(0, 0, 0);
                    color: rgb(0, 0, 0);
                    column-rule-color: rgb(0, 0, 0);
                    cursor: pointer;
                    font-size: 14px;
                    line-height: 16.8px;
                    outline-color: rgb(0, 0, 0);
                    overflow-wrap: break-word;
                    perspective-origin: 50% 50%;
                    text-align: left;
                    text-decoration: none solid rgb(0, 0, 0);
                    text-emphasis-color: rgb(0, 0, 0);
                    transform-origin: 50% 50%;
                    -webkit-text-fill-color: rgb(0, 0, 0);
                    -webkit-text-stroke-color: rgb(0, 0, 0);
                  "
                  >Essential Orange</a
                ><br style="font-size: 16px; line-height: 19.2px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%" /><a
                  class="Fourteen"
                  target="_blank"
                  href="http://benjaminproberts.wordpress.com/2009/09/26/exploiting-chaos-150-ways-to-spark-innovation-during-times-of-change-by-jeremy-gutsche/"
                  style="
                    border-block-color: rgb(0, 0, 0);
                    border-color: rgb(0, 0, 0);
                    border-inline-color: rgb(0, 0, 0);
                    caret-color: rgb(0, 0, 0);
                    color: rgb(0, 0, 0);
                    column-rule-color: rgb(0, 0, 0);
                    cursor: pointer;
                    font-size: 14px;
                    line-height: 16.8px;
                    outline-color: rgb(0, 0, 0);
                    overflow-wrap: break-word;
                    perspective-origin: 50% 50%;
                    text-align: left;
                    text-decoration: none solid rgb(0, 0, 0);
                    text-emphasis-color: rgb(0, 0, 0);
                    transform-origin: 50% 50%;
                    -webkit-text-fill-color: rgb(0, 0, 0);
                    -webkit-text-stroke-color: rgb(0, 0, 0);
                  "
                  >Benjamin P Roberts</a
                ><br style="font-size: 16px; line-height: 19.2px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%" /><a
                  class="Fourteen"
                  target="_blank"
                  href="http://www.fuelyourcreativity.com/preview-exploiting-chaos-150-ways-to-spark-innovation-during-times-of-change/"
                  style="
                    border-block-color: rgb(0, 0, 0);
                    border-color: rgb(0, 0, 0);
                    border-inline-color: rgb(0, 0, 0);
                    caret-color: rgb(0, 0, 0);
                    color: rgb(0, 0, 0);
                    column-rule-color: rgb(0, 0, 0);
                    cursor: pointer;
                    font-size: 14px;
                    line-height: 16.8px;
                    outline-color: rgb(0, 0, 0);
                    overflow-wrap: break-word;
                    perspective-origin: 50% 50%;
                    text-align: left;
                    text-decoration: none solid rgb(0, 0, 0);
                    text-emphasis-color: rgb(0, 0, 0);
                    transform-origin: 50% 50%;
                    -webkit-text-fill-color: rgb(0, 0, 0);
                    -webkit-text-stroke-color: rgb(0, 0, 0);
                  "
                  >Fuel Your Creativity</a
                ><br style="font-size: 16px; line-height: 19.2px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%" /><a
                  class="Fourteen"
                  target="_blank"
                  href="http://innovation-living.blogspot.com/2009_11_01_archive.html#6749210859853314426"
                  style="
                    border-block-color: rgb(0, 0, 0);
                    border-color: rgb(0, 0, 0);
                    border-inline-color: rgb(0, 0, 0);
                    caret-color: rgb(0, 0, 0);
                    color: rgb(0, 0, 0);
                    column-rule-color: rgb(0, 0, 0);
                    cursor: pointer;
                    font-size: 14px;
                    line-height: 16.8px;
                    outline-color: rgb(0, 0, 0);
                    overflow-wrap: break-word;
                    perspective-origin: 50% 50%;
                    text-align: left;
                    text-decoration: none solid rgb(0, 0, 0);
                    text-emphasis-color: rgb(0, 0, 0);
                    transform-origin: 50% 50%;
                    -webkit-text-fill-color: rgb(0, 0, 0);
                    -webkit-text-stroke-color: rgb(0, 0, 0);
                  "
                  >Innovation Living</a
                ><br style="font-size: 16px; line-height: 19.2px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%" /><a
                  class="Fourteen"
                  target="_blank"
                  href="http://selahsynergy.com/blog1/2010/01/26/books-for-business-inspiration"
                  style="
                    border-block-color: rgb(0, 0, 0);
                    border-color: rgb(0, 0, 0);
                    border-inline-color: rgb(0, 0, 0);
                    caret-color: rgb(0, 0, 0);
                    color: rgb(0, 0, 0);
                    column-rule-color: rgb(0, 0, 0);
                    cursor: pointer;
                    font-size: 14px;
                    line-height: 16.8px;
                    outline-color: rgb(0, 0, 0);
                    overflow-wrap: break-word;
                    perspective-origin: 50% 50%;
                    text-align: left;
                    text-decoration: none solid rgb(0, 0, 0);
                    text-emphasis-color: rgb(0, 0, 0);
                    transform-origin: 50% 50%;
                    -webkit-text-fill-color: rgb(0, 0, 0);
                    -webkit-text-stroke-color: rgb(0, 0, 0);
                  "
                  >Selah Synergy</a
                ><br style="font-size: 16px; line-height: 19.2px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%" /><a
                  class="Fourteen"
                  target="_blank"
                  href="http://wrightplacetv.com/exploiting-chaos/"
                  style="
                    border-block-color: rgb(0, 0, 0);
                    border-color: rgb(0, 0, 0);
                    border-inline-color: rgb(0, 0, 0);
                    caret-color: rgb(0, 0, 0);
                    color: rgb(0, 0, 0);
                    column-rule-color: rgb(0, 0, 0);
                    cursor: pointer;
                    font-size: 14px;
                    line-height: 16.8px;
                    outline-color: rgb(0, 0, 0);
                    overflow-wrap: break-word;
                    perspective-origin: 50% 50%;
                    text-align: left;
                    text-decoration: none solid rgb(0, 0, 0);
                    text-emphasis-color: rgb(0, 0, 0);
                    transform-origin: 50% 50%;
                    -webkit-text-fill-color: rgb(0, 0, 0);
                    -webkit-text-stroke-color: rgb(0, 0, 0);
                  "
                  >The Wright Place TV Show</a
                ><br style="font-size: 16px; line-height: 19.2px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%" /><a
                  class="Fourteen"
                  target="_blank"
                  href="http://freshpeel.com/2009/10/interview-with-professional-trend-spotter-and-author-jeremy-gutsche/"
                  style="
                    border-block-color: rgb(0, 0, 0);
                    border-color: rgb(0, 0, 0);
                    border-inline-color: rgb(0, 0, 0);
                    caret-color: rgb(0, 0, 0);
                    color: rgb(0, 0, 0);
                    column-rule-color: rgb(0, 0, 0);
                    cursor: pointer;
                    font-size: 14px;
                    line-height: 16.8px;
                    outline-color: rgb(0, 0, 0);
                    overflow-wrap: break-word;
                    perspective-origin: 50% 50%;
                    text-align: left;
                    text-decoration: none solid rgb(0, 0, 0);
                    text-emphasis-color: rgb(0, 0, 0);
                    transform-origin: 50% 50%;
                    -webkit-text-fill-color: rgb(0, 0, 0);
                    -webkit-text-stroke-color: rgb(0, 0, 0);
                  "
                  >The Marketing Fresh Peel</a
                ><br style="font-size: 16px; line-height: 19.2px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%" /><a
                  class="Fourteen"
                  target="_blank"
                  href="http://www.washingtontimes.com/news/2009/oct/06/unraveling-at-the-seams/"
                  style="
                    border-block-color: rgb(0, 0, 0);
                    border-color: rgb(0, 0, 0);
                    border-inline-color: rgb(0, 0, 0);
                    caret-color: rgb(0, 0, 0);
                    color: rgb(0, 0, 0);
                    column-rule-color: rgb(0, 0, 0);
                    cursor: pointer;
                    font-size: 14px;
                    line-height: 16.8px;
                    outline-color: rgb(0, 0, 0);
                    overflow-wrap: break-word;
                    perspective-origin: 50% 50%;
                    text-align: left;
                    text-decoration: none solid rgb(0, 0, 0);
                    text-emphasis-color: rgb(0, 0, 0);
                    transform-origin: 50% 50%;
                    -webkit-text-fill-color: rgb(0, 0, 0);
                    -webkit-text-stroke-color: rgb(0, 0, 0);
                  "
                  >Washington Times</a
                ><br style="font-size: 16px; line-height: 19.2px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%" /><a
                  class="Fourteen"
                  target="_blank"
                  href="http://bodybydesign.wordpress.com/2010/02/05/mentoring-the-homeless/"
                  style="
                    border-block-color: rgb(0, 0, 0);
                    border-color: rgb(0, 0, 0);
                    border-inline-color: rgb(0, 0, 0);
                    caret-color: rgb(0, 0, 0);
                    color: rgb(0, 0, 0);
                    column-rule-color: rgb(0, 0, 0);
                    cursor: pointer;
                    font-size: 14px;
                    line-height: 16.8px;
                    outline-color: rgb(0, 0, 0);
                    overflow-wrap: break-word;
                    perspective-origin: 50% 50%;
                    text-align: left;
                    text-decoration: none solid rgb(0, 0, 0);
                    text-emphasis-color: rgb(0, 0, 0);
                    transform-origin: 50% 50%;
                    -webkit-text-fill-color: rgb(0, 0, 0);
                    -webkit-text-stroke-color: rgb(0, 0, 0);
                  "
                  >Network to Freedom</a
                ><br style="font-size: 16px; line-height: 19.2px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%" /><a
                  class="Fourteen"
                  target="_blank"
                  href="http://creativechaosconsultant.blogspot.com/2010/02/are-you-commodore-64.html"
                  style="
                    border-block-color: rgb(0, 0, 0);
                    border-color: rgb(0, 0, 0);
                    border-inline-color: rgb(0, 0, 0);
                    caret-color: rgb(0, 0, 0);
                    color: rgb(0, 0, 0);
                    column-rule-color: rgb(0, 0, 0);
                    cursor: pointer;
                    font-size: 14px;
                    line-height: 16.8px;
                    outline-color: rgb(0, 0, 0);
                    overflow-wrap: break-word;
                    perspective-origin: 50% 50%;
                    text-align: left;
                    text-decoration: none solid rgb(0, 0, 0);
                    text-emphasis-color: rgb(0, 0, 0);
                    transform-origin: 50% 50%;
                    -webkit-text-fill-color: rgb(0, 0, 0);
                    -webkit-text-stroke-color: rgb(0, 0, 0);
                  "
                  >Creative Chaos Consultant</a
                ><br style="font-size: 16px; line-height: 19.2px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%" /><a
                  class="Fourteen"
                  target="_blank"
                  href="http://www.bluetoad.com/publication/?m=1924&amp;l=1&amp;p=25"
                  style="
                    border-block-color: rgb(0, 0, 0);
                    border-color: rgb(0, 0, 0);
                    border-inline-color: rgb(0, 0, 0);
                    caret-color: rgb(0, 0, 0);
                    color: rgb(0, 0, 0);
                    column-rule-color: rgb(0, 0, 0);
                    cursor: pointer;
                    font-size: 14px;
                    line-height: 16.8px;
                    outline-color: rgb(0, 0, 0);
                    overflow-wrap: break-word;
                    perspective-origin: 50% 50%;
                    text-align: left;
                    text-decoration: none solid rgb(0, 0, 0);
                    text-emphasis-color: rgb(0, 0, 0);
                    transform-origin: 50% 50%;
                    -webkit-text-fill-color: rgb(0, 0, 0);
                    -webkit-text-stroke-color: rgb(0, 0, 0);
                  "
                  >Birmingham Works</a
                ><br style="font-size: 16px; line-height: 19.2px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%" /><a
                  class="Fourteen"
                  target="_blank"
                  href="http://www.strategiesforsuccess.com/2763/billys-book-reviews/exploiting-chaos"
                  style="
                    border-block-color: rgb(0, 0, 0);
                    border-color: rgb(0, 0, 0);
                    border-inline-color: rgb(0, 0, 0);
                    caret-color: rgb(0, 0, 0);
                    color: rgb(0, 0, 0);
                    column-rule-color: rgb(0, 0, 0);
                    cursor: pointer;
                    font-size: 14px;
                    line-height: 16.8px;
                    outline-color: rgb(0, 0, 0);
                    overflow-wrap: break-word;
                    perspective-origin: 50% 50%;
                    text-align: left;
                    text-decoration: none solid rgb(0, 0, 0);
                    text-emphasis-color: rgb(0, 0, 0);
                    transform-origin: 50% 50%;
                    -webkit-text-fill-color: rgb(0, 0, 0);
                    -webkit-text-stroke-color: rgb(0, 0, 0);
                  "
                  >Strategies for Success</a
                ><br style="font-size: 16px; line-height: 19.2px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%" /><a
                  class="Fourteen"
                  target="_blank"
                  href="http://www.innosight.com/blog/449-exploiting-chaos---post2post-virtual-book-tour.html"
                  style="
                    border-block-color: rgb(0, 0, 0);
                    border-color: rgb(0, 0, 0);
                    border-inline-color: rgb(0, 0, 0);
                    caret-color: rgb(0, 0, 0);
                    color: rgb(0, 0, 0);
                    column-rule-color: rgb(0, 0, 0);
                    cursor: pointer;
                    font-size: 14px;
                    line-height: 16.8px;
                    outline-color: rgb(0, 0, 0);
                    overflow-wrap: break-word;
                    perspective-origin: 50% 50%;
                    text-align: left;
                    text-decoration: none solid rgb(0, 0, 0);
                    text-emphasis-color: rgb(0, 0, 0);
                    transform-origin: 50% 50%;
                    -webkit-text-fill-color: rgb(0, 0, 0);
                    -webkit-text-stroke-color: rgb(0, 0, 0);
                  "
                  >InnoBlog</a
                ><br style="font-size: 16px; line-height: 19.2px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%" /><a
                  class="Fourteen"
                  target="_blank"
                  href="http://innovationandadvantage.blogspot.com/2009/10/exploiting-chaos-and-celebrating.html"
                  style="
                    border-block-color: rgb(0, 0, 0);
                    border-color: rgb(0, 0, 0);
                    border-inline-color: rgb(0, 0, 0);
                    caret-color: rgb(0, 0, 0);
                    color: rgb(0, 0, 0);
                    column-rule-color: rgb(0, 0, 0);
                    cursor: pointer;
                    font-size: 14px;
                    line-height: 16.8px;
                    outline-color: rgb(0, 0, 0);
                    overflow-wrap: break-word;
                    perspective-origin: 50% 50%;
                    text-align: left;
                    text-decoration: none solid rgb(0, 0, 0);
                    text-emphasis-color: rgb(0, 0, 0);
                    transform-origin: 50% 50%;
                    -webkit-text-fill-color: rgb(0, 0, 0);
                    -webkit-text-stroke-color: rgb(0, 0, 0);
                  "
                  >Innovation and Advantage</a
                ><br style="font-size: 16px; line-height: 19.2px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%" /><a
                  class="Fourteen"
                  target="_blank"
                  href="http://www.adamdanielmezei.com/?p=592"
                  style="
                    border-block-color: rgb(0, 0, 0);
                    border-color: rgb(0, 0, 0);
                    border-inline-color: rgb(0, 0, 0);
                    caret-color: rgb(0, 0, 0);
                    color: rgb(0, 0, 0);
                    column-rule-color: rgb(0, 0, 0);
                    cursor: pointer;
                    font-size: 14px;
                    line-height: 16.8px;
                    outline-color: rgb(0, 0, 0);
                    overflow-wrap: break-word;
                    perspective-origin: 50% 50%;
                    text-align: left;
                    text-decoration: none solid rgb(0, 0, 0);
                    text-emphasis-color: rgb(0, 0, 0);
                    transform-origin: 50% 50%;
                    -webkit-text-fill-color: rgb(0, 0, 0);
                    -webkit-text-stroke-color: rgb(0, 0, 0);
                  "
                  >Adam Daniel Mezei</a
                ><br style="font-size: 16px; line-height: 19.2px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%" /><a
                  class="Fourteen"
                  target="_blank"
                  href="http://tech.arlingtonlibrary.org/2009/09/normalcy-chaos-and-not-yogi-berra.html"
                  style="
                    border-block-color: rgb(0, 0, 0);
                    border-color: rgb(0, 0, 0);
                    border-inline-color: rgb(0, 0, 0);
                    caret-color: rgb(0, 0, 0);
                    color: rgb(0, 0, 0);
                    column-rule-color: rgb(0, 0, 0);
                    cursor: pointer;
                    font-size: 14px;
                    line-height: 16.8px;
                    outline-color: rgb(0, 0, 0);
                    overflow-wrap: break-word;
                    perspective-origin: 50% 50%;
                    text-align: left;
                    text-decoration: none solid rgb(0, 0, 0);
                    text-emphasis-color: rgb(0, 0, 0);
                    transform-origin: 50% 50%;
                    -webkit-text-fill-color: rgb(0, 0, 0);
                    -webkit-text-stroke-color: rgb(0, 0, 0);
                  "
                  >Arlington Public Library</a
                ><br style="font-size: 16px; line-height: 19.2px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%" /><a
                  class="Fourteen"
                  target="_blank"
                  href="http://sprouter.com/blog/september-book-club-pick-exploiting-chaos/"
                  style="
                    border-block-color: rgb(0, 0, 0);
                    border-color: rgb(0, 0, 0);
                    border-inline-color: rgb(0, 0, 0);
                    caret-color: rgb(0, 0, 0);
                    color: rgb(0, 0, 0);
                    column-rule-color: rgb(0, 0, 0);
                    cursor: pointer;
                    font-size: 14px;
                    line-height: 16.8px;
                    outline-color: rgb(0, 0, 0);
                    overflow-wrap: break-word;
                    perspective-origin: 50% 50%;
                    text-align: left;
                    text-decoration: none solid rgb(0, 0, 0);
                    text-emphasis-color: rgb(0, 0, 0);
                    transform-origin: 50% 50%;
                    -webkit-text-fill-color: rgb(0, 0, 0);
                    -webkit-text-stroke-color: rgb(0, 0, 0);
                  "
                  >Sprouter</a
                ><br style="font-size: 16px; line-height: 19.2px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%" /><a
                  class="Fourteen"
                  target="_blank"
                  href="http://www.hospitality-trade.com/blog.php/"
                  style="
                    border-block-color: rgb(0, 0, 0);
                    border-color: rgb(0, 0, 0);
                    border-inline-color: rgb(0, 0, 0);
                    caret-color: rgb(0, 0, 0);
                    color: rgb(0, 0, 0);
                    column-rule-color: rgb(0, 0, 0);
                    cursor: pointer;
                    font-size: 14px;
                    line-height: 16.8px;
                    outline-color: rgb(0, 0, 0);
                    overflow-wrap: break-word;
                    perspective-origin: 50% 50%;
                    text-align: left;
                    text-decoration: none solid rgb(0, 0, 0);
                    text-emphasis-color: rgb(0, 0, 0);
                    transform-origin: 50% 50%;
                    -webkit-text-fill-color: rgb(0, 0, 0);
                    -webkit-text-stroke-color: rgb(0, 0, 0);
                  "
                  >Hospitality Trade</a
                ><br style="font-size: 16px; line-height: 19.2px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%" /><a
                  class="Fourteen"
                  target="_blank"
                  href="http://heycrazy.wordpress.com/2009/08/18/its-time-to-start-exploiting-chaos/"
                  style="
                    border-block-color: rgb(0, 0, 0);
                    border-color: rgb(0, 0, 0);
                    border-inline-color: rgb(0, 0, 0);
                    caret-color: rgb(0, 0, 0);
                    color: rgb(0, 0, 0);
                    column-rule-color: rgb(0, 0, 0);
                    cursor: pointer;
                    font-size: 14px;
                    line-height: 16.8px;
                    outline-color: rgb(0, 0, 0);
                    overflow-wrap: break-word;
                    perspective-origin: 50% 50%;
                    text-align: left;
                    text-decoration: none solid rgb(0, 0, 0);
                    text-emphasis-color: rgb(0, 0, 0);
                    transform-origin: 50% 50%;
                    -webkit-text-fill-color: rgb(0, 0, 0);
                    -webkit-text-stroke-color: rgb(0, 0, 0);
                  "
                  >Hey crazy</a
                ><br style="font-size: 16px; line-height: 19.2px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%" />
              </td>
              <td style="block-size: auto; font-size: 16px; height: auto; inline-size: auto; line-height: 19.2px; overflow-wrap: break-word; padding-block: 0px; padding: 0px; padding-inline: 0px; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; vertical-align: top; width: auto">
                <a
                  class="Fourteen"
                  target="_blank"
                  href="http://www.jerkins.lv/2009/08/trendhunter-dibinataja-gramatas-preview.html"
                  style="
                    border-block-color: rgb(0, 0, 0);
                    border-color: rgb(0, 0, 0);
                    border-inline-color: rgb(0, 0, 0);
                    caret-color: rgb(0, 0, 0);
                    color: rgb(0, 0, 0);
                    column-rule-color: rgb(0, 0, 0);
                    cursor: pointer;
                    font-size: 14px;
                    line-height: 16.8px;
                    outline-color: rgb(0, 0, 0);
                    overflow-wrap: break-word;
                    perspective-origin: 50% 50%;
                    text-align: left;
                    text-decoration: none solid rgb(0, 0, 0);
                    text-emphasis-color: rgb(0, 0, 0);
                    transform-origin: 50% 50%;
                    -webkit-text-fill-color: rgb(0, 0, 0);
                    -webkit-text-stroke-color: rgb(0, 0, 0);
                  "
                  >jerkins.lv</a
                ><br style="font-size: 16px; line-height: 19.2px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%" /><a
                  class="Fourteen"
                  target="_blank"
                  href="http://inoted.wordpress.com/2009/08/18/exploiting-chaos/"
                  style="
                    border-block-color: rgb(0, 0, 0);
                    border-color: rgb(0, 0, 0);
                    border-inline-color: rgb(0, 0, 0);
                    caret-color: rgb(0, 0, 0);
                    color: rgb(0, 0, 0);
                    column-rule-color: rgb(0, 0, 0);
                    cursor: pointer;
                    font-size: 14px;
                    line-height: 16.8px;
                    outline-color: rgb(0, 0, 0);
                    overflow-wrap: break-word;
                    perspective-origin: 50% 50%;
                    text-align: left;
                    text-decoration: none solid rgb(0, 0, 0);
                    text-emphasis-color: rgb(0, 0, 0);
                    transform-origin: 50% 50%;
                    -webkit-text-fill-color: rgb(0, 0, 0);
                    -webkit-text-stroke-color: rgb(0, 0, 0);
                  "
                  >inoted</a
                ><br style="font-size: 16px; line-height: 19.2px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%" /><a
                  class="Fourteen"
                  target="_blank"
                  href="http://mindbloggingstuff.blogspot.com/2009/08/chaos-theory.html"
                  style="
                    border-block-color: rgb(0, 0, 0);
                    border-color: rgb(0, 0, 0);
                    border-inline-color: rgb(0, 0, 0);
                    caret-color: rgb(0, 0, 0);
                    color: rgb(0, 0, 0);
                    column-rule-color: rgb(0, 0, 0);
                    cursor: pointer;
                    font-size: 14px;
                    line-height: 16.8px;
                    outline-color: rgb(0, 0, 0);
                    overflow-wrap: break-word;
                    perspective-origin: 50% 50%;
                    text-align: left;
                    text-decoration: none solid rgb(0, 0, 0);
                    text-emphasis-color: rgb(0, 0, 0);
                    transform-origin: 50% 50%;
                    -webkit-text-fill-color: rgb(0, 0, 0);
                    -webkit-text-stroke-color: rgb(0, 0, 0);
                  "
                  >Mindblogging Stuff</a
                ><br style="font-size: 16px; line-height: 19.2px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%" /><a
                  class="Fourteen"
                  target="_blank"
                  href="http://the-fantail.blogspot.com/2009/08/exploiting-chaos-intrigueing-concept.html"
                  style="
                    border-block-color: rgb(0, 0, 0);
                    border-color: rgb(0, 0, 0);
                    border-inline-color: rgb(0, 0, 0);
                    caret-color: rgb(0, 0, 0);
                    color: rgb(0, 0, 0);
                    column-rule-color: rgb(0, 0, 0);
                    cursor: pointer;
                    font-size: 14px;
                    line-height: 16.8px;
                    outline-color: rgb(0, 0, 0);
                    overflow-wrap: break-word;
                    perspective-origin: 50% 50%;
                    text-align: left;
                    text-decoration: none solid rgb(0, 0, 0);
                    text-emphasis-color: rgb(0, 0, 0);
                    transform-origin: 50% 50%;
                    -webkit-text-fill-color: rgb(0, 0, 0);
                    -webkit-text-stroke-color: rgb(0, 0, 0);
                  "
                  >The Fantail</a
                ><br style="font-size: 16px; line-height: 19.2px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%" /><a
                  class="Fourteen"
                  target="_blank"
                  href="http://emilygoligoski.com/index.php/exploitation/"
                  style="
                    border-block-color: rgb(0, 0, 0);
                    border-color: rgb(0, 0, 0);
                    border-inline-color: rgb(0, 0, 0);
                    caret-color: rgb(0, 0, 0);
                    color: rgb(0, 0, 0);
                    column-rule-color: rgb(0, 0, 0);
                    cursor: pointer;
                    font-size: 14px;
                    line-height: 16.8px;
                    outline-color: rgb(0, 0, 0);
                    overflow-wrap: break-word;
                    perspective-origin: 50% 50%;
                    text-align: left;
                    text-decoration: none solid rgb(0, 0, 0);
                    text-emphasis-color: rgb(0, 0, 0);
                    transform-origin: 50% 50%;
                    -webkit-text-fill-color: rgb(0, 0, 0);
                    -webkit-text-stroke-color: rgb(0, 0, 0);
                  "
                  >Goliblogski | Arts + culture</a
                ><br style="font-size: 16px; line-height: 19.2px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%" /><a
                  class="Fourteen"
                  target="_blank"
                  href="http://endlessinnovation.typepad.com/endless_innovation/2009/08/exploiting-chaos-trendhunters-new-innovation-trends-book.html"
                  style="
                    border-block-color: rgb(0, 0, 0);
                    border-color: rgb(0, 0, 0);
                    border-inline-color: rgb(0, 0, 0);
                    caret-color: rgb(0, 0, 0);
                    color: rgb(0, 0, 0);
                    column-rule-color: rgb(0, 0, 0);
                    cursor: pointer;
                    font-size: 14px;
                    line-height: 16.8px;
                    outline-color: rgb(0, 0, 0);
                    overflow-wrap: break-word;
                    perspective-origin: 50% 50%;
                    text-align: left;
                    text-decoration: none solid rgb(0, 0, 0);
                    text-emphasis-color: rgb(0, 0, 0);
                    transform-origin: 50% 50%;
                    -webkit-text-fill-color: rgb(0, 0, 0);
                    -webkit-text-stroke-color: rgb(0, 0, 0);
                  "
                  >Endless Innovation</a
                ><br style="font-size: 16px; line-height: 19.2px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%" /><a
                  class="Fourteen"
                  target="_blank"
                  href="http://hooyoo.wordpress.com/2009/08/17/exploiting-chaos-exclusive-download/"
                  style="
                    border-block-color: rgb(0, 0, 0);
                    border-color: rgb(0, 0, 0);
                    border-inline-color: rgb(0, 0, 0);
                    caret-color: rgb(0, 0, 0);
                    color: rgb(0, 0, 0);
                    column-rule-color: rgb(0, 0, 0);
                    cursor: pointer;
                    font-size: 14px;
                    line-height: 16.8px;
                    outline-color: rgb(0, 0, 0);
                    overflow-wrap: break-word;
                    perspective-origin: 50% 50%;
                    text-align: left;
                    text-decoration: none solid rgb(0, 0, 0);
                    text-emphasis-color: rgb(0, 0, 0);
                    transform-origin: 50% 50%;
                    -webkit-text-fill-color: rgb(0, 0, 0);
                    -webkit-text-stroke-color: rgb(0, 0, 0);
                  "
                  >HooYoo</a
                ><br style="font-size: 16px; line-height: 19.2px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%" /><a
                  class="Fourteen"
                  target="_blank"
                  href="http://stylecatch.wordpress.com/2009/08/18/latest-news-exploiting-chaos-by-jeremy-gutsche/"
                  style="
                    border-block-color: rgb(0, 0, 0);
                    border-color: rgb(0, 0, 0);
                    border-inline-color: rgb(0, 0, 0);
                    caret-color: rgb(0, 0, 0);
                    color: rgb(0, 0, 0);
                    column-rule-color: rgb(0, 0, 0);
                    cursor: pointer;
                    font-size: 14px;
                    line-height: 16.8px;
                    outline-color: rgb(0, 0, 0);
                    overflow-wrap: break-word;
                    perspective-origin: 50% 50%;
                    text-align: left;
                    text-decoration: none solid rgb(0, 0, 0);
                    text-emphasis-color: rgb(0, 0, 0);
                    transform-origin: 50% 50%;
                    -webkit-text-fill-color: rgb(0, 0, 0);
                    -webkit-text-stroke-color: rgb(0, 0, 0);
                  "
                  >Style Catch</a
                ><br style="font-size: 16px; line-height: 19.2px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%" /><a
                  class="Fourteen"
                  target="_blank"
                  href="http://www.happyhotelier.com/2009/08/20/let-chaos-inspire-you-grab-a-sneak-preview/"
                  style="
                    border-block-color: rgb(0, 0, 0);
                    border-color: rgb(0, 0, 0);
                    border-inline-color: rgb(0, 0, 0);
                    caret-color: rgb(0, 0, 0);
                    color: rgb(0, 0, 0);
                    column-rule-color: rgb(0, 0, 0);
                    cursor: pointer;
                    font-size: 14px;
                    line-height: 16.8px;
                    outline-color: rgb(0, 0, 0);
                    overflow-wrap: break-word;
                    perspective-origin: 50% 50%;
                    text-align: left;
                    text-decoration: none solid rgb(0, 0, 0);
                    text-emphasis-color: rgb(0, 0, 0);
                    transform-origin: 50% 50%;
                    -webkit-text-fill-color: rgb(0, 0, 0);
                    -webkit-text-stroke-color: rgb(0, 0, 0);
                  "
                  >Happy Hotelier</a
                ><br style="font-size: 16px; line-height: 19.2px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%" /><a
                  class="Fourteen"
                  target="_blank"
                  href="http://sassisam.wordpress.com/2009/08/19/trendhunter-is-the-epitome-of-cool/"
                  style="
                    border-block-color: rgb(0, 0, 0);
                    border-color: rgb(0, 0, 0);
                    border-inline-color: rgb(0, 0, 0);
                    caret-color: rgb(0, 0, 0);
                    color: rgb(0, 0, 0);
                    column-rule-color: rgb(0, 0, 0);
                    cursor: pointer;
                    font-size: 14px;
                    line-height: 16.8px;
                    outline-color: rgb(0, 0, 0);
                    overflow-wrap: break-word;
                    perspective-origin: 50% 50%;
                    text-align: left;
                    text-decoration: none solid rgb(0, 0, 0);
                    text-emphasis-color: rgb(0, 0, 0);
                    transform-origin: 50% 50%;
                    -webkit-text-fill-color: rgb(0, 0, 0);
                    -webkit-text-stroke-color: rgb(0, 0, 0);
                  "
                  >Sassi Sam's Girlie Gossip</a
                ><br style="font-size: 16px; line-height: 19.2px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%" /><a
                  class="Fourteen"
                  target="_blank"
                  href="http://thinkfreshbebrave.blogspot.com/2009/08/exploiting-me-exploiting-chaos.html"
                  style="
                    border-block-color: rgb(0, 0, 0);
                    border-color: rgb(0, 0, 0);
                    border-inline-color: rgb(0, 0, 0);
                    caret-color: rgb(0, 0, 0);
                    color: rgb(0, 0, 0);
                    column-rule-color: rgb(0, 0, 0);
                    cursor: pointer;
                    font-size: 14px;
                    line-height: 16.8px;
                    outline-color: rgb(0, 0, 0);
                    overflow-wrap: break-word;
                    perspective-origin: 50% 50%;
                    text-align: left;
                    text-decoration: none solid rgb(0, 0, 0);
                    text-emphasis-color: rgb(0, 0, 0);
                    transform-origin: 50% 50%;
                    -webkit-text-fill-color: rgb(0, 0, 0);
                    -webkit-text-stroke-color: rgb(0, 0, 0);
                  "
                  >Think Fresh Be Brave</a
                ><br style="font-size: 16px; line-height: 19.2px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%" /><a
                  class="Fourteen"
                  target="_blank"
                  href="http://loyaltymatchblog.blogspot.com/2009/08/exploiting-chaos-loyaltymatchcom.html"
                  style="
                    border-block-color: rgb(0, 0, 0);
                    border-color: rgb(0, 0, 0);
                    border-inline-color: rgb(0, 0, 0);
                    caret-color: rgb(0, 0, 0);
                    color: rgb(0, 0, 0);
                    column-rule-color: rgb(0, 0, 0);
                    cursor: pointer;
                    font-size: 14px;
                    line-height: 16.8px;
                    outline-color: rgb(0, 0, 0);
                    overflow-wrap: break-word;
                    perspective-origin: 50% 50%;
                    text-align: left;
                    text-decoration: none solid rgb(0, 0, 0);
                    text-emphasis-color: rgb(0, 0, 0);
                    transform-origin: 50% 50%;
                    -webkit-text-fill-color: rgb(0, 0, 0);
                    -webkit-text-stroke-color: rgb(0, 0, 0);
                  "
                  >LoyaltyMatch</a
                ><br style="font-size: 16px; line-height: 19.2px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%" /><a
                  class="Fourteen"
                  target="_blank"
                  href="http://cocochanel-blog.com/?p=198"
                  style="
                    border-block-color: rgb(0, 0, 0);
                    border-color: rgb(0, 0, 0);
                    border-inline-color: rgb(0, 0, 0);
                    caret-color: rgb(0, 0, 0);
                    color: rgb(0, 0, 0);
                    column-rule-color: rgb(0, 0, 0);
                    cursor: pointer;
                    font-size: 14px;
                    line-height: 16.8px;
                    outline-color: rgb(0, 0, 0);
                    overflow-wrap: break-word;
                    perspective-origin: 50% 50%;
                    text-align: left;
                    text-decoration: none solid rgb(0, 0, 0);
                    text-emphasis-color: rgb(0, 0, 0);
                    transform-origin: 50% 50%;
                    -webkit-text-fill-color: rgb(0, 0, 0);
                    -webkit-text-stroke-color: rgb(0, 0, 0);
                  "
                  >Coco Chanel Blog</a
                ><br style="font-size: 16px; line-height: 19.2px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%" /><a
                  class="Fourteen"
                  target="_blank"
                  href="http://www.thecheapgirl.com/2009/08/18/free-preview-of-jeremy-gutsches-exploiting-chaos/"
                  style="
                    border-block-color: rgb(0, 0, 0);
                    border-color: rgb(0, 0, 0);
                    border-inline-color: rgb(0, 0, 0);
                    caret-color: rgb(0, 0, 0);
                    color: rgb(0, 0, 0);
                    column-rule-color: rgb(0, 0, 0);
                    cursor: pointer;
                    font-size: 14px;
                    line-height: 16.8px;
                    outline-color: rgb(0, 0, 0);
                    overflow-wrap: break-word;
                    perspective-origin: 50% 50%;
                    text-align: left;
                    text-decoration: none solid rgb(0, 0, 0);
                    text-emphasis-color: rgb(0, 0, 0);
                    transform-origin: 50% 50%;
                    -webkit-text-fill-color: rgb(0, 0, 0);
                    -webkit-text-stroke-color: rgb(0, 0, 0);
                  "
                  >The Cheap Girl</a
                ><br style="font-size: 16px; line-height: 19.2px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%" /><a
                  class="Fourteen"
                  target="_blank"
                  href="http://hitmusicacademy.wordpress.com/2009/08/24/exploiting-chaos-book-preview/"
                  style="
                    border-block-color: rgb(0, 0, 0);
                    border-color: rgb(0, 0, 0);
                    border-inline-color: rgb(0, 0, 0);
                    caret-color: rgb(0, 0, 0);
                    color: rgb(0, 0, 0);
                    column-rule-color: rgb(0, 0, 0);
                    cursor: pointer;
                    font-size: 14px;
                    line-height: 16.8px;
                    outline-color: rgb(0, 0, 0);
                    overflow-wrap: break-word;
                    perspective-origin: 50% 50%;
                    text-align: left;
                    text-decoration: none solid rgb(0, 0, 0);
                    text-emphasis-color: rgb(0, 0, 0);
                    transform-origin: 50% 50%;
                    -webkit-text-fill-color: rgb(0, 0, 0);
                    -webkit-text-stroke-color: rgb(0, 0, 0);
                  "
                  >The Hit Music Academy</a
                ><br style="font-size: 16px; line-height: 19.2px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%" /><a
                  class="Fourteen"
                  target="_blank"
                  href="http://snappylifestyle.blogspot.com/2009/08/chaos-is-uncertainty-sparked-by.html"
                  style="
                    border-block-color: rgb(0, 0, 0);
                    border-color: rgb(0, 0, 0);
                    border-inline-color: rgb(0, 0, 0);
                    caret-color: rgb(0, 0, 0);
                    color: rgb(0, 0, 0);
                    column-rule-color: rgb(0, 0, 0);
                    cursor: pointer;
                    font-size: 14px;
                    line-height: 16.8px;
                    outline-color: rgb(0, 0, 0);
                    overflow-wrap: break-word;
                    perspective-origin: 50% 50%;
                    text-align: left;
                    text-decoration: none solid rgb(0, 0, 0);
                    text-emphasis-color: rgb(0, 0, 0);
                    transform-origin: 50% 50%;
                    -webkit-text-fill-color: rgb(0, 0, 0);
                    -webkit-text-stroke-color: rgb(0, 0, 0);
                  "
                  >Snappylifestyle</a
                ><br style="font-size: 16px; line-height: 19.2px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%" /><a
                  class="Fourteen"
                  target="_blank"
                  href="http://www.digitaladman.com/?p=597"
                  style="
                    border-block-color: rgb(0, 0, 0);
                    border-color: rgb(0, 0, 0);
                    border-inline-color: rgb(0, 0, 0);
                    caret-color: rgb(0, 0, 0);
                    color: rgb(0, 0, 0);
                    column-rule-color: rgb(0, 0, 0);
                    cursor: pointer;
                    font-size: 14px;
                    line-height: 16.8px;
                    outline-color: rgb(0, 0, 0);
                    overflow-wrap: break-word;
                    perspective-origin: 50% 50%;
                    text-align: left;
                    text-decoration: none solid rgb(0, 0, 0);
                    text-emphasis-color: rgb(0, 0, 0);
                    transform-origin: 50% 50%;
                    -webkit-text-fill-color: rgb(0, 0, 0);
                    -webkit-text-stroke-color: rgb(0, 0, 0);
                  "
                  >Confessions of a Digital Adman</a
                ><br style="font-size: 16px; line-height: 19.2px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%" /><a
                  class="Fourteen"
                  target="_blank"
                  href="http://dailyobsessional.blogspot.com/2009/08/out-of-chaos-comes-change.html"
                  style="
                    border-block-color: rgb(0, 0, 0);
                    border-color: rgb(0, 0, 0);
                    border-inline-color: rgb(0, 0, 0);
                    caret-color: rgb(0, 0, 0);
                    color: rgb(0, 0, 0);
                    column-rule-color: rgb(0, 0, 0);
                    cursor: pointer;
                    font-size: 14px;
                    line-height: 16.8px;
                    outline-color: rgb(0, 0, 0);
                    overflow-wrap: break-word;
                    perspective-origin: 50% 50%;
                    text-align: left;
                    text-decoration: none solid rgb(0, 0, 0);
                    text-emphasis-color: rgb(0, 0, 0);
                    transform-origin: 50% 50%;
                    -webkit-text-fill-color: rgb(0, 0, 0);
                    -webkit-text-stroke-color: rgb(0, 0, 0);
                  "
                  >Daily Obsessional</a
                ><br style="font-size: 16px; line-height: 19.2px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%" /><a
                  class="Fourteen"
                  target="_blank"
                  href="http://newmediaplay.com/crisis-oportunidad/"
                  style="
                    border-block-color: rgb(0, 0, 0);
                    border-color: rgb(0, 0, 0);
                    border-inline-color: rgb(0, 0, 0);
                    caret-color: rgb(0, 0, 0);
                    color: rgb(0, 0, 0);
                    column-rule-color: rgb(0, 0, 0);
                    cursor: pointer;
                    font-size: 14px;
                    line-height: 16.8px;
                    outline-color: rgb(0, 0, 0);
                    overflow-wrap: break-word;
                    perspective-origin: 50% 50%;
                    text-align: left;
                    text-decoration: none solid rgb(0, 0, 0);
                    text-emphasis-color: rgb(0, 0, 0);
                    transform-origin: 50% 50%;
                    -webkit-text-fill-color: rgb(0, 0, 0);
                    -webkit-text-stroke-color: rgb(0, 0, 0);
                  "
                  >New Media Play</a
                ><br style="font-size: 16px; line-height: 19.2px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%" /><a
                  class="Fourteen"
                  target="_blank"
                  href="http://styletrends.wordpress.com/2009/08/17/feed-your-aha-moment/"
                  style="
                    border-block-color: rgb(0, 0, 0);
                    border-color: rgb(0, 0, 0);
                    border-inline-color: rgb(0, 0, 0);
                    caret-color: rgb(0, 0, 0);
                    color: rgb(0, 0, 0);
                    column-rule-color: rgb(0, 0, 0);
                    cursor: pointer;
                    font-size: 14px;
                    line-height: 16.8px;
                    outline-color: rgb(0, 0, 0);
                    overflow-wrap: break-word;
                    perspective-origin: 50% 50%;
                    text-align: left;
                    text-decoration: none solid rgb(0, 0, 0);
                    text-emphasis-color: rgb(0, 0, 0);
                    transform-origin: 50% 50%;
                    -webkit-text-fill-color: rgb(0, 0, 0);
                    -webkit-text-stroke-color: rgb(0, 0, 0);
                  "
                  >Style Trends</a
                ><br style="font-size: 16px; line-height: 19.2px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%" /><a
                  class="Fourteen"
                  target="_blank"
                  href="http://www.welldays.ch/blog/archives/342/buchtipp-exploiting-chaos-rezepte-gegen-krise/"
                  style="
                    border-block-color: rgb(0, 0, 0);
                    border-color: rgb(0, 0, 0);
                    border-inline-color: rgb(0, 0, 0);
                    caret-color: rgb(0, 0, 0);
                    color: rgb(0, 0, 0);
                    column-rule-color: rgb(0, 0, 0);
                    cursor: pointer;
                    font-size: 14px;
                    line-height: 16.8px;
                    outline-color: rgb(0, 0, 0);
                    overflow-wrap: break-word;
                    perspective-origin: 50% 50%;
                    text-align: left;
                    text-decoration: none solid rgb(0, 0, 0);
                    text-emphasis-color: rgb(0, 0, 0);
                    transform-origin: 50% 50%;
                    -webkit-text-fill-color: rgb(0, 0, 0);
                    -webkit-text-stroke-color: rgb(0, 0, 0);
                  "
                  >escapes</a
                ><br style="font-size: 16px; line-height: 19.2px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%" /><a
                  class="Fourteen"
                  target="_blank"
                  href="http://brandautopsy.typepad.com/brandautopsy/2009/10/exploiting-chaos.html"
                  style="
                    border-block-color: rgb(0, 0, 0);
                    border-color: rgb(0, 0, 0);
                    border-inline-color: rgb(0, 0, 0);
                    caret-color: rgb(0, 0, 0);
                    color: rgb(0, 0, 0);
                    column-rule-color: rgb(0, 0, 0);
                    cursor: pointer;
                    font-size: 14px;
                    line-height: 16.8px;
                    outline-color: rgb(0, 0, 0);
                    overflow-wrap: break-word;
                    perspective-origin: 50% 50%;
                    text-align: left;
                    text-decoration: none solid rgb(0, 0, 0);
                    text-emphasis-color: rgb(0, 0, 0);
                    transform-origin: 50% 50%;
                    -webkit-text-fill-color: rgb(0, 0, 0);
                    -webkit-text-stroke-color: rgb(0, 0, 0);
                  "
                  >Brand Autopsy</a
                ><br style="font-size: 16px; line-height: 19.2px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%" />
              </td>
              <td style="block-size: auto; font-size: 16px; height: auto; inline-size: auto; line-height: 19.2px; overflow-wrap: break-word; padding-block: 0px; padding: 0px; padding-inline: 0px; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; vertical-align: top; width: auto">
                <a
                  class="Fourteen"
                  target="_blank"
                  href="http://ihaveanidea.org/inbox/2009/08/17/trend-hunters-exploiting-chaos-due-in-stores-sept-1st/"
                  style="
                    border-block-color: rgb(0, 0, 0);
                    border-color: rgb(0, 0, 0);
                    border-inline-color: rgb(0, 0, 0);
                    caret-color: rgb(0, 0, 0);
                    color: rgb(0, 0, 0);
                    column-rule-color: rgb(0, 0, 0);
                    cursor: pointer;
                    font-size: 14px;
                    line-height: 16.8px;
                    outline-color: rgb(0, 0, 0);
                    overflow-wrap: break-word;
                    perspective-origin: 50% 50%;
                    text-align: left;
                    text-decoration: none solid rgb(0, 0, 0);
                    text-emphasis-color: rgb(0, 0, 0);
                    transform-origin: 50% 50%;
                    -webkit-text-fill-color: rgb(0, 0, 0);
                    -webkit-text-stroke-color: rgb(0, 0, 0);
                  "
                  >IHAVEANIDEA</a
                ><br style="font-size: 16px; line-height: 19.2px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%" /><a
                  class="Fourteen"
                  target="_blank"
                  href="http://wrightplacetv.com/exploiting-chaos/"
                  style="
                    border-block-color: rgb(0, 0, 0);
                    border-color: rgb(0, 0, 0);
                    border-inline-color: rgb(0, 0, 0);
                    caret-color: rgb(0, 0, 0);
                    color: rgb(0, 0, 0);
                    column-rule-color: rgb(0, 0, 0);
                    cursor: pointer;
                    font-size: 14px;
                    line-height: 16.8px;
                    outline-color: rgb(0, 0, 0);
                    overflow-wrap: break-word;
                    perspective-origin: 50% 50%;
                    text-align: left;
                    text-decoration: none solid rgb(0, 0, 0);
                    text-emphasis-color: rgb(0, 0, 0);
                    transform-origin: 50% 50%;
                    -webkit-text-fill-color: rgb(0, 0, 0);
                    -webkit-text-stroke-color: rgb(0, 0, 0);
                  "
                  >The Wright Place</a
                ><br style="font-size: 16px; line-height: 19.2px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%" /><a
                  class="Fourteen"
                  target="_blank"
                  href="http://blog.360dgrs.nl/archives/3851/trendhunters-new-trends-book-exploiting-chaos-calls-for-the-innovators.html"
                  style="
                    border-block-color: rgb(0, 0, 0);
                    border-color: rgb(0, 0, 0);
                    border-inline-color: rgb(0, 0, 0);
                    caret-color: rgb(0, 0, 0);
                    color: rgb(0, 0, 0);
                    column-rule-color: rgb(0, 0, 0);
                    cursor: pointer;
                    font-size: 14px;
                    line-height: 16.8px;
                    outline-color: rgb(0, 0, 0);
                    overflow-wrap: break-word;
                    perspective-origin: 50% 50%;
                    text-align: left;
                    text-decoration: none solid rgb(0, 0, 0);
                    text-emphasis-color: rgb(0, 0, 0);
                    transform-origin: 50% 50%;
                    -webkit-text-fill-color: rgb(0, 0, 0);
                    -webkit-text-stroke-color: rgb(0, 0, 0);
                  "
                  >360 Degrees</a
                ><br style="font-size: 16px; line-height: 19.2px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%" /><a
                  class="Fourteen"
                  target="_blank"
                  href="http://www.converstations.com/2010/02/exploiting-chaos-as-example-blog-posts-great-content-too.html"
                  style="
                    border-block-color: rgb(0, 0, 0);
                    border-color: rgb(0, 0, 0);
                    border-inline-color: rgb(0, 0, 0);
                    caret-color: rgb(0, 0, 0);
                    color: rgb(0, 0, 0);
                    column-rule-color: rgb(0, 0, 0);
                    cursor: pointer;
                    font-size: 14px;
                    line-height: 16.8px;
                    outline-color: rgb(0, 0, 0);
                    overflow-wrap: break-word;
                    perspective-origin: 50% 50%;
                    text-align: left;
                    text-decoration: none solid rgb(0, 0, 0);
                    text-emphasis-color: rgb(0, 0, 0);
                    transform-origin: 50% 50%;
                    -webkit-text-fill-color: rgb(0, 0, 0);
                    -webkit-text-stroke-color: rgb(0, 0, 0);
                  "
                  >ConverStations</a
                ><br style="font-size: 16px; line-height: 19.2px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%" /><a
                  class="Fourteen"
                  target="_blank"
                  href="http://according2g.com/2009/08/exploiting-chaos/"
                  style="
                    border-block-color: rgb(0, 0, 0);
                    border-color: rgb(0, 0, 0);
                    border-inline-color: rgb(0, 0, 0);
                    caret-color: rgb(0, 0, 0);
                    color: rgb(0, 0, 0);
                    column-rule-color: rgb(0, 0, 0);
                    cursor: pointer;
                    font-size: 14px;
                    line-height: 16.8px;
                    outline-color: rgb(0, 0, 0);
                    overflow-wrap: break-word;
                    perspective-origin: 50% 50%;
                    text-align: left;
                    text-decoration: none solid rgb(0, 0, 0);
                    text-emphasis-color: rgb(0, 0, 0);
                    transform-origin: 50% 50%;
                    -webkit-text-fill-color: rgb(0, 0, 0);
                    -webkit-text-stroke-color: rgb(0, 0, 0);
                  "
                  >According to G</a
                ><br style="font-size: 16px; line-height: 19.2px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%" /><a
                  class="Fourteen"
                  target="_blank"
                  href="http://bargainista.blogspot.com/2009/08/exploiting-chaos-sparks-innovation-and.html"
                  style="
                    border-block-color: rgb(0, 0, 0);
                    border-color: rgb(0, 0, 0);
                    border-inline-color: rgb(0, 0, 0);
                    caret-color: rgb(0, 0, 0);
                    color: rgb(0, 0, 0);
                    column-rule-color: rgb(0, 0, 0);
                    cursor: pointer;
                    font-size: 14px;
                    line-height: 16.8px;
                    outline-color: rgb(0, 0, 0);
                    overflow-wrap: break-word;
                    perspective-origin: 50% 50%;
                    text-align: left;
                    text-decoration: none solid rgb(0, 0, 0);
                    text-emphasis-color: rgb(0, 0, 0);
                    transform-origin: 50% 50%;
                    -webkit-text-fill-color: rgb(0, 0, 0);
                    -webkit-text-stroke-color: rgb(0, 0, 0);
                  "
                  >Barganista</a
                ><br style="font-size: 16px; line-height: 19.2px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%" /><a
                  class="Fourteen"
                  target="_blank"
                  href="http://www.ajun.org/other-stuff/check-out-exploiting-chaos-a-new-book-by-jeremy-gutsche-16014.html"
                  style="
                    border-block-color: rgb(0, 0, 0);
                    border-color: rgb(0, 0, 0);
                    border-inline-color: rgb(0, 0, 0);
                    caret-color: rgb(0, 0, 0);
                    color: rgb(0, 0, 0);
                    column-rule-color: rgb(0, 0, 0);
                    cursor: pointer;
                    font-size: 14px;
                    line-height: 16.8px;
                    outline-color: rgb(0, 0, 0);
                    overflow-wrap: break-word;
                    perspective-origin: 50% 50%;
                    text-align: left;
                    text-decoration: none solid rgb(0, 0, 0);
                    text-emphasis-color: rgb(0, 0, 0);
                    transform-origin: 50% 50%;
                    -webkit-text-fill-color: rgb(0, 0, 0);
                    -webkit-text-stroke-color: rgb(0, 0, 0);
                  "
                  >Are You Reading?</a
                ><br style="font-size: 16px; line-height: 19.2px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%" /><a
                  class="Fourteen"
                  target="_blank"
                  href="http://braindancingsmorgasbord.blogspot.com/2009/09/exploiting-chaos.html"
                  style="
                    border-block-color: rgb(0, 0, 0);
                    border-color: rgb(0, 0, 0);
                    border-inline-color: rgb(0, 0, 0);
                    caret-color: rgb(0, 0, 0);
                    color: rgb(0, 0, 0);
                    column-rule-color: rgb(0, 0, 0);
                    cursor: pointer;
                    font-size: 14px;
                    line-height: 16.8px;
                    outline-color: rgb(0, 0, 0);
                    overflow-wrap: break-word;
                    perspective-origin: 50% 50%;
                    text-align: left;
                    text-decoration: none solid rgb(0, 0, 0);
                    text-emphasis-color: rgb(0, 0, 0);
                    transform-origin: 50% 50%;
                    -webkit-text-fill-color: rgb(0, 0, 0);
                    -webkit-text-stroke-color: rgb(0, 0, 0);
                  "
                  >Braindancing Smorgasbored</a
                ><br style="font-size: 16px; line-height: 19.2px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%" /><a
                  class="Fourteen"
                  target="_blank"
                  href="http://www.futurelab.net/blogs/marketing-strategy-innovation/2009/08/exploiting_chaos_trendhunters.html"
                  style="
                    border-block-color: rgb(0, 0, 0);
                    border-color: rgb(0, 0, 0);
                    border-inline-color: rgb(0, 0, 0);
                    caret-color: rgb(0, 0, 0);
                    color: rgb(0, 0, 0);
                    column-rule-color: rgb(0, 0, 0);
                    cursor: pointer;
                    font-size: 14px;
                    line-height: 16.8px;
                    outline-color: rgb(0, 0, 0);
                    overflow-wrap: break-word;
                    perspective-origin: 50% 50%;
                    text-align: left;
                    text-decoration: none solid rgb(0, 0, 0);
                    text-emphasis-color: rgb(0, 0, 0);
                    transform-origin: 50% 50%;
                    -webkit-text-fill-color: rgb(0, 0, 0);
                    -webkit-text-stroke-color: rgb(0, 0, 0);
                  "
                  >FutureLab</a
                ><br style="font-size: 16px; line-height: 19.2px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%" /><a
                  class="Fourteen"
                  target="_blank"
                  href="http://www.followmeongoogle.com/book-publicity/exploiting-chaos-ashton-vs-kanye-high-five-battle-flash-mob-publicity-stunt"
                  style="
                    border-block-color: rgb(0, 0, 0);
                    border-color: rgb(0, 0, 0);
                    border-inline-color: rgb(0, 0, 0);
                    caret-color: rgb(0, 0, 0);
                    color: rgb(0, 0, 0);
                    column-rule-color: rgb(0, 0, 0);
                    cursor: pointer;
                    font-size: 14px;
                    line-height: 16.8px;
                    outline-color: rgb(0, 0, 0);
                    overflow-wrap: break-word;
                    perspective-origin: 50% 50%;
                    text-align: left;
                    text-decoration: none solid rgb(0, 0, 0);
                    text-emphasis-color: rgb(0, 0, 0);
                    transform-origin: 50% 50%;
                    -webkit-text-fill-color: rgb(0, 0, 0);
                    -webkit-text-stroke-color: rgb(0, 0, 0);
                  "
                  >Follow me on Google</a
                ><br style="font-size: 16px; line-height: 19.2px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%" /><a
                  class="Fourteen"
                  target="_blank"
                  href="http://iclubici.net/icnet/2009/09/exploiting-chaos-and-celebrating-failure/"
                  style="
                    border-block-color: rgb(0, 0, 0);
                    border-color: rgb(0, 0, 0);
                    border-inline-color: rgb(0, 0, 0);
                    caret-color: rgb(0, 0, 0);
                    color: rgb(0, 0, 0);
                    column-rule-color: rgb(0, 0, 0);
                    cursor: pointer;
                    font-size: 14px;
                    line-height: 16.8px;
                    outline-color: rgb(0, 0, 0);
                    overflow-wrap: break-word;
                    perspective-origin: 50% 50%;
                    text-align: left;
                    text-decoration: none solid rgb(0, 0, 0);
                    text-emphasis-color: rgb(0, 0, 0);
                    transform-origin: 50% 50%;
                    -webkit-text-fill-color: rgb(0, 0, 0);
                    -webkit-text-stroke-color: rgb(0, 0, 0);
                  "
                  >Intellectual Capital Network</a
                ><br style="font-size: 16px; line-height: 19.2px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%" /><a
                  class="Fourteen"
                  target="_blank"
                  href="http://innovationmcr.wordpress.com/2009/09/11/exploiting-chaos/#comment-39"
                  style="
                    border-block-color: rgb(0, 0, 0);
                    border-color: rgb(0, 0, 0);
                    border-inline-color: rgb(0, 0, 0);
                    caret-color: rgb(0, 0, 0);
                    color: rgb(0, 0, 0);
                    column-rule-color: rgb(0, 0, 0);
                    cursor: pointer;
                    font-size: 14px;
                    line-height: 16.8px;
                    outline-color: rgb(0, 0, 0);
                    overflow-wrap: break-word;
                    perspective-origin: 50% 50%;
                    text-align: left;
                    text-decoration: none solid rgb(0, 0, 0);
                    text-emphasis-color: rgb(0, 0, 0);
                    transform-origin: 50% 50%;
                    -webkit-text-fill-color: rgb(0, 0, 0);
                    -webkit-text-stroke-color: rgb(0, 0, 0);
                  "
                  >Innovation Manchester</a
                ><br style="font-size: 16px; line-height: 19.2px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%" /><a
                  class="Fourteen"
                  target="_blank"
                  href="http://www.imaginepub.com/orange/dirty-little-secrets"
                  style="
                    border-block-color: rgb(0, 0, 0);
                    border-color: rgb(0, 0, 0);
                    border-inline-color: rgb(0, 0, 0);
                    caret-color: rgb(0, 0, 0);
                    color: rgb(0, 0, 0);
                    column-rule-color: rgb(0, 0, 0);
                    cursor: pointer;
                    font-size: 14px;
                    line-height: 16.8px;
                    outline-color: rgb(0, 0, 0);
                    overflow-wrap: break-word;
                    perspective-origin: 50% 50%;
                    text-align: left;
                    text-decoration: none solid rgb(0, 0, 0);
                    text-emphasis-color: rgb(0, 0, 0);
                    transform-origin: 50% 50%;
                    -webkit-text-fill-color: rgb(0, 0, 0);
                    -webkit-text-stroke-color: rgb(0, 0, 0);
                  "
                  >Orange Magazine</a
                ><br style="font-size: 16px; line-height: 19.2px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%" /><a
                  class="Fourteen"
                  target="_blank"
                  href="http://3winsconsulting.com/2009/09/05/exploiting-chaos-trendhunter/"
                  style="
                    border-block-color: rgb(0, 0, 0);
                    border-color: rgb(0, 0, 0);
                    border-inline-color: rgb(0, 0, 0);
                    caret-color: rgb(0, 0, 0);
                    color: rgb(0, 0, 0);
                    column-rule-color: rgb(0, 0, 0);
                    cursor: pointer;
                    font-size: 14px;
                    line-height: 16.8px;
                    outline-color: rgb(0, 0, 0);
                    overflow-wrap: break-word;
                    perspective-origin: 50% 50%;
                    text-align: left;
                    text-decoration: none solid rgb(0, 0, 0);
                    text-emphasis-color: rgb(0, 0, 0);
                    transform-origin: 50% 50%;
                    -webkit-text-fill-color: rgb(0, 0, 0);
                    -webkit-text-stroke-color: rgb(0, 0, 0);
                  "
                  >3Wins</a
                ><br style="font-size: 16px; line-height: 19.2px; overflow-wrap: break-word; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%" />
              </td>
            </tr>
          </tbody>
        </table>
        <br style="font-size: 16px; line-height: 19.2px; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%" /><br style="font-size: 16px; line-height: 19.2px; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%" /><br
          style="font-size: 16px; line-height: 19.2px; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%"
        />

        <br style="font-size: 16px; line-height: 19.2px; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%" />
      </div>
    </div>

    <div id="body06" class="collapseblock" style="block-size: auto; display: none; height: auto; inline-size: auto; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; width: auto">
      <div style="block-size: 27px; height: 27px; inline-size: auto; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; width: auto">
        <font class="NavBadge" style="perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%"
          ><a
            rel="nofollow"
            href="javascript:poptoggle4('body01','body02','body03','body04','body05','body06');"
            style="
              background-color: rgb(212, 212, 212);
              block-size: 20px;
              border-block-color: rgb(0, 0, 0);
              border-color: rgb(0, 0, 0);
              border-inline-color: rgb(0, 0, 0);
              caret-color: rgb(0, 0, 0);
              color: rgb(0, 0, 0);
              column-rule-color: rgb(0, 0, 0);
              cursor: pointer;
              font-size: 18px;
              font-weight: 700;
              height: 20px;
              line-height: 21.6px;
              margin-inline-end: 1px;
              margin-right: 1px;
              outline-color: rgb(0, 0, 0);
              padding-block: 4px 6px;
              padding: 4px 10px 6px;
              padding-inline: 10px;
              perspective-origin: 50% 50%;
              text-align: left;
              text-decoration: none solid rgb(0, 0, 0);
              text-emphasis-color: rgb(0, 0, 0);
              transform-origin: 50% 50%;
              -webkit-text-fill-color: rgb(0, 0, 0);
              -webkit-text-stroke-color: rgb(0, 0, 0);
            "
            >Videos</a
          ></font
        >
        <font class="NavBadge" style="perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%"
          ><a
            rel="nofollow"
            href="javascript:poptoggle4('body02','body01','body03','body04','body05','body06');"
            style="
              background-color: rgb(212, 212, 212);
              block-size: 20px;
              border-block-color: rgb(0, 0, 0);
              border-color: rgb(0, 0, 0);
              border-inline-color: rgb(0, 0, 0);
              caret-color: rgb(0, 0, 0);
              color: rgb(0, 0, 0);
              column-rule-color: rgb(0, 0, 0);
              cursor: pointer;
              font-size: 18px;
              font-weight: 700;
              height: 20px;
              line-height: 21.6px;
              margin-inline-end: 1px;
              margin-right: 1px;
              outline-color: rgb(0, 0, 0);
              padding-block: 4px 6px;
              padding: 4px 10px 6px;
              padding-inline: 10px;
              perspective-origin: 50% 50%;
              text-align: left;
              text-decoration: none solid rgb(0, 0, 0);
              text-emphasis-color: rgb(0, 0, 0);
              transform-origin: 50% 50%;
              -webkit-text-fill-color: rgb(0, 0, 0);
              -webkit-text-stroke-color: rgb(0, 0, 0);
            "
            >Framework</a
          ></font
        >
        <font class="NavBadge" style="perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%"
          ><a
            rel="nofollow"
            href="javascript:poptoggle4('body03','body02','body01','body04','body05','body06');"
            style="
              background-color: rgb(212, 212, 212);
              block-size: 20px;
              border-block-color: rgb(0, 0, 0);
              border-color: rgb(0, 0, 0);
              border-inline-color: rgb(0, 0, 0);
              caret-color: rgb(0, 0, 0);
              color: rgb(0, 0, 0);
              column-rule-color: rgb(0, 0, 0);
              cursor: pointer;
              font-size: 18px;
              font-weight: 700;
              height: 20px;
              line-height: 21.6px;
              margin-inline-end: 1px;
              margin-right: 1px;
              outline-color: rgb(0, 0, 0);
              padding-block: 4px 6px;
              padding: 4px 10px 6px;
              padding-inline: 10px;
              perspective-origin: 50% 50%;
              text-align: left;
              text-decoration: none solid rgb(0, 0, 0);
              text-emphasis-color: rgb(0, 0, 0);
              transform-origin: 50% 50%;
              -webkit-text-fill-color: rgb(0, 0, 0);
              -webkit-text-stroke-color: rgb(0, 0, 0);
            "
            >Visual Design</a
          ></font
        >
        <font class="NavBadge" style="perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%"
          ><a
            rel="nofollow"
            href="javascript:poptoggle4('body04','body02','body03','body01','body05','body06');"
            style="
              background-color: rgb(212, 212, 212);
              block-size: 20px;
              border-block-color: rgb(0, 0, 0);
              border-color: rgb(0, 0, 0);
              border-inline-color: rgb(0, 0, 0);
              caret-color: rgb(0, 0, 0);
              color: rgb(0, 0, 0);
              column-rule-color: rgb(0, 0, 0);
              cursor: pointer;
              font-size: 18px;
              font-weight: 700;
              height: 20px;
              line-height: 21.6px;
              margin-inline-end: 1px;
              margin-right: 1px;
              outline-color: rgb(0, 0, 0);
              padding-block: 4px 6px;
              padding: 4px 10px 6px;
              padding-inline: 10px;
              perspective-origin: 50% 50%;
              text-align: left;
              text-decoration: none solid rgb(0, 0, 0);
              text-emphasis-color: rgb(0, 0, 0);
              transform-origin: 50% 50%;
              -webkit-text-fill-color: rgb(0, 0, 0);
              -webkit-text-stroke-color: rgb(0, 0, 0);
            "
            >Press / Testimonials</a
          ></font
        >
        <!-- <font class=NavBadgeActive><a rel=nofollow href="javascript:poptoggle4('body06','body02','body03','body01','body05','body04');">Download (NEW!)</a></font> 
                <font class=NavBadge><a rel=nofollow href="javascript:poptoggle4('body05','body02','body03','body01','body04','body06');">FAQ</a></font>  &nbsp;&nbsp; -->
      </div>
      <div
        id="aboutbox"
        style="
          margin-bottom: 0px;
          background-color: rgb(255, 255, 255);
          block-size: auto;
          border-block: 5px solid rgb(102, 102, 102);
          border-color: rgb(102, 102, 102);
          border-style: solid;
          border-width: 5px;
          border-inline: 5px solid rgb(102, 102, 102);
          height: auto;
          inline-size: 680px;
          padding-block: 8px;
          padding: 8px;
          padding-inline: 8px;
          perspective-origin: 50% 50%;
          text-align: left;
          transform-origin: 50% 50%;
          width: 680px;
        "
      >
        <div class="Fourteen" style="block-size: auto; font-size: 14px; height: auto; inline-size: auto; line-height: 16.8px; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; width: auto">
          <br style="font-size: 14px; line-height: 16.8px; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%" />
          <h4 style="font-size: 22px; line-height: 22px; block-size: auto; height: auto; inline-size: auto; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; width: auto">PDF / iPad Download</h4>
          <br style="font-size: 14px; line-height: 16.8px; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%" />
          Text HERE
        </div>
      </div>
    </div>

    <div id="body05" class="collapseblock" style="block-size: auto; display: none; height: auto; inline-size: auto; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; width: auto">
      <div style="block-size: 27px; height: 27px; inline-size: auto; perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%; width: auto">
        <font class="NavBadge" style="perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%"
          ><a
            rel="nofollow"
            href="javascript:poptoggle4('body01','body02','body03','body04','body05','body06');"
            style="
              background-color: rgb(212, 212, 212);
              block-size: 20px;
              border-block-color: rgb(0, 0, 0);
              border-color: rgb(0, 0, 0);
              border-inline-color: rgb(0, 0, 0);
              caret-color: rgb(0, 0, 0);
              color: rgb(0, 0, 0);
              column-rule-color: rgb(0, 0, 0);
              cursor: pointer;
              font-size: 18px;
              font-weight: 700;
              height: 20px;
              line-height: 21.6px;
              margin-inline-end: 1px;
              margin-right: 1px;
              outline-color: rgb(0, 0, 0);
              padding-block: 4px 6px;
              padding: 4px 10px 6px;
              padding-inline: 10px;
              perspective-origin: 50% 50%;
              text-align: left;
              text-decoration: none solid rgb(0, 0, 0);
              text-emphasis-color: rgb(0, 0, 0);
              transform-origin: 50% 50%;
              -webkit-text-fill-color: rgb(0, 0, 0);
              -webkit-text-stroke-color: rgb(0, 0, 0);
            "
            >Videos</a
          ></font
        >
        <font class="NavBadge" style="perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%"
          ><a
            rel="nofollow"
            href="javascript:poptoggle4('body02','body01','body03','body04','body05','body06');"
            style="
              background-color: rgb(212, 212, 212);
              block-size: 20px;
              border-block-color: rgb(0, 0, 0);
              border-color: rgb(0, 0, 0);
              border-inline-color: rgb(0, 0, 0);
              caret-color: rgb(0, 0, 0);
              color: rgb(0, 0, 0);
              column-rule-color: rgb(0, 0, 0);
              cursor: pointer;
              font-size: 18px;
              font-weight: 700;
              height: 20px;
              line-height: 21.6px;
              margin-inline-end: 1px;
              margin-right: 1px;
              outline-color: rgb(0, 0, 0);
              padding-block: 4px 6px;
              padding: 4px 10px 6px;
              padding-inline: 10px;
              perspective-origin: 50% 50%;
              text-align: left;
              text-decoration: none solid rgb(0, 0, 0);
              text-emphasis-color: rgb(0, 0, 0);
              transform-origin: 50% 50%;
              -webkit-text-fill-color: rgb(0, 0, 0);
              -webkit-text-stroke-color: rgb(0, 0, 0);
            "
            >Framework</a
          ></font
        >
        <font class="NavBadge" style="perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%"
          ><a
            rel="nofollow"
            href="javascript:poptoggle4('body03','body02','body01','body04','body05','body06');"
            style="
              background-color: rgb(212, 212, 212);
              block-size: 20px;
              border-block-color: rgb(0, 0, 0);
              border-color: rgb(0, 0, 0);
              border-inline-color: rgb(0, 0, 0);
              caret-color: rgb(0, 0, 0);
              color: rgb(0, 0, 0);
              column-rule-color: rgb(0, 0, 0);
              cursor: pointer;
              font-size: 18px;
              font-weight: 700;
              height: 20px;
              line-height: 21.6px;
              margin-inline-end: 1px;
              margin-right: 1px;
              outline-color: rgb(0, 0, 0);
              padding-block: 4px 6px;
              padding: 4px 10px 6px;
              padding-inline: 10px;
              perspective-origin: 50% 50%;
              text-align: left;
              text-decoration: none solid rgb(0, 0, 0);
              text-emphasis-color: rgb(0, 0, 0);
              transform-origin: 50% 50%;
              -webkit-text-fill-color: rgb(0, 0, 0);
              -webkit-text-stroke-color: rgb(0, 0, 0);
            "
            >Visual Design</a
          ></font
        >
        <font class="NavBadge" style="perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%"
          ><a
            rel="nofollow"
            href="javascript:poptoggle4('body04','body02','body03','body01','body05','body06');"
            style="
              background-color: rgb(212, 212, 212);
              block-size: 20px;
              border-block-color: rgb(0, 0, 0);
              border-color: rgb(0, 0, 0);
              border-inline-color: rgb(0, 0, 0);
              caret-color: rgb(0, 0, 0);
              color: rgb(0, 0, 0);
              column-rule-color: rgb(0, 0, 0);
              cursor: pointer;
              font-size: 18px;
              font-weight: 700;
              height: 20px;
              line-height: 21.6px;
              margin-inline-end: 1px;
              margin-right: 1px;
              outline-color: rgb(0, 0, 0);
              padding-block: 4px 6px;
              padding: 4px 10px 6px;
              padding-inline: 10px;
              perspective-origin: 50% 50%;
              text-align: left;
              text-decoration: none solid rgb(0, 0, 0);
              text-emphasis-color: rgb(0, 0, 0);
              transform-origin: 50% 50%;
              -webkit-text-fill-color: rgb(0, 0, 0);
              -webkit-text-stroke-color: rgb(0, 0, 0);
            "
            >Press / Testimonials</a
          ></font
        >
        <!-- <font class=NavBadge><a rel=nofollow href="javascript:poptoggle4('body06','body02','body03','body01','body05','body04');">Download (NEW!)</a></font> 
                <font class=NavBadgeActive><a rel=nofollow href="javascript:poptoggle4('body05','body02','body03','body01','body04','body06');">FAQ</a></font>  &nbsp;&nbsp; -->
      </div>
      <div
        id="aboutbox"
        style="
          margin-bottom: 0px;
          background-color: rgb(255, 255, 255);
          block-size: auto;
          border-block: 5px solid rgb(102, 102, 102);
          border-color: rgb(102, 102, 102);
          border-style: solid;
          border-width: 5px;
          border-inline: 5px solid rgb(102, 102, 102);
          height: auto;
          inline-size: 680px;
          padding-block: 8px;
          padding: 8px;
          padding-inline: 8px;
          perspective-origin: 50% 50%;
          text-align: left;
          transform-origin: 50% 50%;
          width: 680px;
        "
      >
        <br style="perspective-origin: 50% 50%; text-align: left; transform-origin: 50% 50%" />
      </div>
    </div>

    <br style="text-align: left" /><br style="text-align: left" /><br style="text-align: left" />

    <div
      style="
        display: block;
        float: left;
        background: rgb(0, 0, 0);
        border: 1px solid rgb(153, 153, 153);
        block-size: 19.2031px;
        border-block: 1px solid rgb(153, 153, 153);
        border-inline: 1px solid rgb(153, 153, 153);
        height: 19.2031px;
        inline-size: 680px;
        margin-block: 15px;
        margin-bottom: 15px;
        margin-top: 15px;
        padding-block: 10px;
        padding: 10px;
        padding-inline: 10px;
        perspective-origin: 351px 20.5938px;
        text-align: left;
        transform-origin: 351px 20.6016px;
        width: 680px;
      "
    >
      <font
        class="SixteenY"
        style="
          border-block-color: rgb(255, 0, 0);
          border-color: rgb(255, 0, 0);
          border-inline-color: rgb(255, 0, 0);
          caret-color: rgb(255, 0, 0);
          color: rgb(255, 0, 0);
          column-rule-color: rgb(255, 0, 0);
          font-size: 16px;
          line-height: 19.2px;
          text-align: left;
          text-decoration: none solid rgb(255, 0, 0);
          text-emphasis-color: rgb(255, 0, 0);
          -webkit-text-fill-color: rgb(255, 0, 0);
          -webkit-text-stroke-color: rgb(255, 0, 0);
        "
      >
        <b
          style="
            border-block-color: rgb(255, 0, 0);
            border-color: rgb(255, 0, 0);
            border-inline-color: rgb(255, 0, 0);
            caret-color: rgb(255, 0, 0);
            color: rgb(255, 0, 0);
            column-rule-color: rgb(255, 0, 0);
            font-size: 16px;
            line-height: 19.2px;
            text-align: left;
            text-decoration: none solid rgb(255, 0, 0);
            text-emphasis-color: rgb(255, 0, 0);
            -webkit-text-fill-color: rgb(255, 0, 0);
            -webkit-text-stroke-color: rgb(255, 0, 0);
          "
          >New Version:</b
        >
        &nbsp;&nbsp;
      </font>

      <a
        class="SixteenW"
        target="_blank"
        href="https://www.amazon.com/Create-Future-Innovation-Handbook-Disruptive/dp/1732439141?tag=trenhunt0f-20"
        style="
          border-block-color: rgb(255, 255, 255);
          border-color: rgb(255, 255, 255);
          border-inline-color: rgb(255, 255, 255);
          caret-color: rgb(255, 255, 255);
          color: rgb(255, 255, 255);
          column-rule-color: rgb(255, 255, 255);
          cursor: pointer;
          font-size: 16px;
          line-height: 19.2px;
          outline-color: rgb(255, 255, 255);
          text-align: left;
          text-decoration: none solid rgb(255, 255, 255);
          text-emphasis-color: rgb(255, 255, 255);
          -webkit-text-fill-color: rgb(255, 255, 255);
          -webkit-text-stroke-color: rgb(255, 255, 255);
        "
        >Create The Future + The Innovation Handbook - Buy it Now</a
      >
    </div>

    <br style="text-align: left" />
    <br style="text-align: left" />
    <br style="text-align: left" />
    <br style="text-align: left" />
    <br style="text-align: left" />
    <br style="text-align: left" />
    <br style="text-align: left" />
    <br style="text-align: left" />
    <br style="text-align: left" />
  </div>
  <!-- END MIDDLE LEFT -->

  <div
    id="Right"
    style="border-left: 0px; background-color: rgb(255, 255, 255); block-size: 1869.59px; float: right; height: 1869.59px; inline-size: 230px; padding-block-start: 5px; padding-inline: 5px; padding-left: 5px; padding-right: 5px; padding-top: 5px; perspective-origin: 120px 937.297px; text-align: left; transform-origin: 120px 937.297px; width: 230px"
  >
    <div
      id="aboutbox"
      style="
        background-color: rgb(255, 255, 255);
        block-size: 111.516px;
        border-block: 5px solid rgb(255, 255, 255);
        border-color: rgb(255, 255, 255);
        border-style: solid;
        border-width: 5px;
        border-inline: 5px solid rgb(255, 255, 255);
        height: 111.516px;
        inline-size: 200px;
        margin-block-end: 5px;
        margin-bottom: 5px;
        padding-block: 8px;
        padding: 8px;
        padding-inline: 8px;
        perspective-origin: 113px 68.75px;
        text-align: left;
        transform-origin: 113px 68.7578px;
        width: 200px;
      "
    >
      <div class="Twelve" style="block-size: 111.531px; height: 111.531px; inline-size: 200px; perspective-origin: 100px 55.7656px; text-align: left; transform-origin: 100px 55.7656px; width: 200px">
        <a href="https://www.jeremygutsche.com/" style="cursor: pointer; text-align: left"
          ><img
            align="right"
            border="0"
            width="67"
            height="67"
            src="https://cdn.trendhunterstatic.com/avatars/uploads/avatar_1.jpg"
            style="
              block-size: 67px;
              border-block-color: rgb(102, 102, 102);
              border-color: rgb(102, 102, 102);
              border-inline-color: rgb(102, 102, 102);
              caret-color: rgb(102, 102, 102);
              color: rgb(102, 102, 102);
              column-rule-color: rgb(102, 102, 102);
              cursor: pointer;
              display: block;
              float: right;
              height: 67px;
              inline-size: 67px;
              margin-inline-start: 10px;
              margin-left: 10px;
              perspective-origin: 33.5px 33.5px;
              text-align: left;
              text-decoration: none solid rgb(102, 102, 102);
              text-emphasis-color: rgb(102, 102, 102);
              transform-origin: 33.5px 33.5px;
              vertical-align: top;
              width: 67px;
              -webkit-text-fill-color: rgb(102, 102, 102);
              -webkit-text-stroke-color: rgb(102, 102, 102);
            "
        /></a>
        <h4 style="line-height: 25.2px; block-size: 25.1875px; height: 25.1875px; inline-size: 200px; perspective-origin: 100px 12.5938px; text-align: left; transform-origin: 100px 12.5938px; width: 200px">The Author</h4>
        <b style="text-align: left">Jeremy Gutsche</b>, MBA, CFA, is an innovation expert, award-winning author, "one of North America's most requested keynote speakers," and the founder of TrendHunter.com.
        <a
          class="TwelveY"
          href="https://www.jeremygutsche.com/"
          style="
            border-block-color: rgb(255, 0, 0);
            border-color: rgb(255, 0, 0);
            border-inline-color: rgb(255, 0, 0);
            caret-color: rgb(255, 0, 0);
            color: rgb(255, 0, 0);
            column-rule-color: rgb(255, 0, 0);
            cursor: pointer;
            outline-color: rgb(255, 0, 0);
            text-align: left;
            text-decoration: none solid rgb(255, 0, 0);
            text-emphasis-color: rgb(255, 0, 0);
            -webkit-text-fill-color: rgb(255, 0, 0);
            -webkit-text-stroke-color: rgb(255, 0, 0);
          "
          ><b
            style="
              border-block-color: rgb(255, 0, 0);
              border-color: rgb(255, 0, 0);
              border-inline-color: rgb(255, 0, 0);
              caret-color: rgb(255, 0, 0);
              color: rgb(255, 0, 0);
              column-rule-color: rgb(255, 0, 0);
              cursor: pointer;
              text-align: left;
              text-decoration: none solid rgb(255, 0, 0);
              text-emphasis-color: rgb(255, 0, 0);
              -webkit-text-fill-color: rgb(255, 0, 0);
              -webkit-text-stroke-color: rgb(255, 0, 0);
            "
            >More &gt;</b
          ></a
        >
        <br style="text-align: left" />
      </div>
    </div>

    <div align="center" style="block-size: 1727.08px; height: 1727.08px; inline-size: 230px; perspective-origin: 115px 863.531px; text-align: -webkit-center; transform-origin: 115px 863.539px; width: 230px">
      <div
        id="aboutbox"
        style="
          background-color: rgb(255, 255, 255);
          block-size: 502.391px;
          border-block: 5px solid rgb(239, 239, 239);
          border-color: rgb(239, 239, 239);
          border-style: solid;
          border-width: 5px;
          border-inline: 5px solid rgb(239, 239, 239);
          height: 502.391px;
          inline-size: 200px;
          margin-block-end: 5px;
          margin-bottom: 5px;
          padding-block: 8px;
          padding: 8px;
          padding-inline: 8px;
          perspective-origin: 113px 264.188px;
          text-align: left;
          transform-origin: 113px 264.195px;
          width: 200px;
        "
      >
        <img border="0" alt="Exploiting Chaos Awards" width="200" src="https://cdn.trendhunterstatic.com/i/2010/ExploitingChaosAwards2.gif" style="block-size: 499px; height: 499px; inline-size: 200px; perspective-origin: 100px 249.5px; text-align: left; transform-origin: 100px 249.5px; width: 200px" /><br style="text-align: left" />
      </div>
      <br style="text-align: -webkit-center" />

      <div
        id="aboutbox"
        style="
          background-color: rgb(255, 255, 255);
          block-size: 690.75px;
          border-block: 5px solid rgb(239, 239, 239);
          border-color: rgb(239, 239, 239);
          border-style: solid;
          border-width: 5px;
          border-inline: 5px solid rgb(239, 239, 239);
          height: 690.75px;
          inline-size: 200px;
          margin-block-end: 5px;
          margin-bottom: 5px;
          padding-block: 8px;
          padding: 8px;
          padding-inline: 8px;
          perspective-origin: 113px 358.375px;
          text-align: left;
          transform-origin: 113px 358.375px;
          width: 200px;
        "
      >
        <div class="Twelve" style="block-size: 690.75px; height: 690.75px; inline-size: 200px; perspective-origin: 100px 345.375px; text-align: left; transform-origin: 100px 345.375px; width: 200px">
          <img
            align="left"
            style="block-size: 80px; display: block; float: left; height: 80px; inline-size: 80px; margin-inline-end: 5px; margin-right: 5px; perspective-origin: 40px 40px; text-align: left; transform-origin: 40px 40px; vertical-align: top; width: 80px"
            width="80"
            height="80"
            alt="Kevin Roberts"
            src="https://cdn.trendhunterstatic.com/phpthumbnails/4/4598/4598_1_80.jpeg"
          />
          "A love potion for relentlessly creative souls looking to break boundaries, ignite customer passion and start a revolution."<br style="text-align: left" />
          <font class="Twelve" style="text-align: left"><b style="text-align: left">- Kevin Roberts, Worldwide CEO of Saatchi and Saatachi</b></font
          ><br style="text-align: left" /><br style="text-align: left" />

          <img
            align="left"
            style="block-size: 80px; display: block; float: left; height: 80px; inline-size: 80px; margin-inline-end: 5px; margin-right: 5px; perspective-origin: 40px 40px; text-align: left; transform-origin: 40px 40px; vertical-align: top; width: 80px"
            width="80"
            height="80"
            alt="Inc.: Exploiting Chaos Named One of Best Books of 2009"
            src="https://cdn.trendhunterstatic.com/phpthumbnails/61/61780/61780_1_80.jpeg"
          />
          "One of the Best Books for Business Owners, "Presented in an appealing, magazine-like format."
          <font class="Twelve" style="text-align: left"><b style="text-align: left">- Inc</b></font
          ><br style="text-align: left" /><br style="text-align: left" />

          <img
            align="left"
            style="block-size: 80px; display: block; float: left; height: 80px; inline-size: 80px; margin-inline-end: 5px; margin-right: 5px; perspective-origin: 40px 40px; text-align: left; transform-origin: 40px 40px; vertical-align: top; width: 80px"
            width="80"
            height="80"
            alt="Daniel Pink Review"
            src="https://cdn.trendhunterstatic.com/phpthumbnails/16/16348/16348_1_80.jpeg"
          />
          "EXPLOITING CHAOS is a rousing battle cry for the kind of creative, risky thinking that is most needed in times of change and disorder. Whether you're a CEO trying to stay ahead of the curve, a daydreaming teenager, or a wannabe trailblazer, this bold guide is the shake-up you need to check your assumptions, get inspired, and turn
          business-as-usual totally upside down."<br style="text-align: left" />
          <b style="text-align: left"><font class="Twelve" style="font-weight: 700; text-align: left">- Daniel Pink, bestselling author of A Whole New Mind</font></b
          ><br style="text-align: left" /><br style="text-align: left" />

          <img
            align="left"
            style="block-size: 80px; display: block; float: left; height: 80px; inline-size: 80px; margin-inline-end: 5px; margin-right: 5px; perspective-origin: 40px 40px; text-align: left; transform-origin: 40px 40px; vertical-align: top; width: 80px"
            width="80"
            height="80"
            alt="Guy Kawasaki Exploiting Chaos Review"
            src="https://cdn.trendhunterstatic.com/phpthumbnails/6/6794/6794_1_80.jpeg"
          />
          “EXPLOITING CHAOS is the quintessential road map for all those who seek opportunity in times of change. Gutsche vividly explores how remarkable companies have risen from chaos, and he provides a toolkit that managers can use to foster a culture of innovation, create great products and services, and change the world.”
          <br style="text-align: left" />
          <b style="text-align: left"><font class="Twelve" style="font-weight: 700; text-align: left">- Guy Kawasaki, Co-founder of AllTop, Author of Reality Check</font></b>
        </div>
      </div>

      <div
        id="aboutbox"
        style="
          background-color: rgb(255, 255, 255);
          block-size: 431.562px;
          border-block: 5px solid rgb(255, 255, 255);
          border-color: rgb(255, 255, 255);
          border-style: solid;
          border-width: 5px;
          border-inline: 5px solid rgb(255, 255, 255);
          height: 431.562px;
          inline-size: 200px;
          margin-block-end: 5px;
          margin-bottom: 5px;
          padding-block: 8px;
          padding: 8px;
          padding-inline: 8px;
          perspective-origin: 113px 228.781px;
          text-align: left;
          transform-origin: 113px 228.781px;
          width: 200px;
        "
      >
        <div class="Twelve" style="block-size: 431.578px; height: 431.578px; inline-size: 200px; perspective-origin: 100px 215.781px; text-align: left; transform-origin: 100px 215.789px; width: 200px">
          <h4 style="line-height: 25.2px; block-size: 25.1875px; height: 25.1875px; inline-size: 200px; perspective-origin: 100px 12.5938px; text-align: left; transform-origin: 100px 12.5938px; width: 200px">Now in 7 Languages!</h4>
          <img border="0" width="200" src="https://cdn.trendhunterstatic.com/i/2010/ExploitingChaosForeignCovers.gif" style="block-size: 403px; height: 403px; inline-size: 200px; perspective-origin: 100px 201.5px; text-align: left; transform-origin: 100px 201.5px; width: 200px" />
        </div>
      </div>
    </div>
  </div>
</div>
<style></style>` },
  { filename: "table as profile layout", content: `<table>
    <tr>
        <td rowspan="3"><img src="path/to/profile-picture.jpg" alt="Profile Picture"></td>
        <td><strong>Full Name:</strong> John Doe</td>
    </tr>
    <tr>
        <td><strong>Email:</strong> johndoe@example.com</td>
    </tr>
    <tr>
        <td><strong>Last Online:</strong> 2021-10-15</td>
    </tr>
    <tr>
        <td colspan="2">
            <h3>Comments:</h3>
            <ul>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                <li>Nulla facilisi. Sed sed semper nisl.</li>
                <li>Etiam auctor, nunc at ultrices tincidunt, velit nunc tincidunt urna, in tincidunt nunc nunc ac nunc.</li>
            </ul>
        </td>
    </tr>
</table>` },
  { filename: "ubl com", content: `<body style="background-color: rgb(255, 255, 255); height: 100vh;">
  <form method="GET" target="_top" style="block-size: 152px; height: 152px; perspective-origin: 995.5px 76px; transform-origin: 995.5px 76px">
    <center style="block-size: 152px; height: 152px; perspective-origin: 995.5px 76px; transform-origin: 995.5px 76px">
      <a
        style="
          border-block-color: rgb(0, 0, 238);
          border-color: rgb(0, 0, 238);
          border-inline-color: rgb(0, 0, 238);
          caret-color: rgb(0, 0, 238);
          color: rgb(0, 0, 238);
          column-rule-color: rgb(0, 0, 238);
          cursor: pointer;
          outline-color: rgb(0, 0, 238);
          text-align: -webkit-center;
          text-decoration: underline solid rgb(0, 0, 238);
          text-emphasis-color: rgb(0, 0, 238);
          -webkit-text-decorations-in-effect: underline;
          -webkit-text-fill-color: rgb(0, 0, 238);
          -webkit-text-stroke-color: rgb(0, 0, 238);
        "
      >
        <img

          usemap="#ubl-index"
          hspace="0"
          vspace="0"
          border="0"
          alt="[Ultimate Band List]"
          ismap=""
          style="
            block-size: 118px;
            border-block-color: rgb(0, 0, 238);
            border-block-style: solid;
            border-color: rgb(0, 0, 238);
            border-style: solid;
            border-inline-color: rgb(0, 0, 238);
            border-inline-style: solid;
            caret-color: rgb(0, 0, 238);
            color: rgb(0, 0, 238);
            column-rule-color: rgb(0, 0, 238);
            cursor: pointer;
            height: 118px;
            inline-size: 502px;
            outline-color: rgb(0, 0, 238);
            perspective-origin: 251px 59px;
            text-align: -webkit-center;
            text-decoration: none solid rgb(0, 0, 238);
            text-emphasis-color: rgb(0, 0, 238);
            transform-origin: 251px 59px;
            width: 502px;
            -webkit-text-decorations-in-effect: underline;
            -webkit-text-fill-color: rgb(0, 0, 238);
            -webkit-text-stroke-color: rgb(0, 0, 238);
          "
      /></a>
      <table id="t1" border="0" cellpadding="0" cellspacing="0" style="block-size: 34px; height: 34px; inline-size: 338.25px; perspective-origin: 169.125px 17px; transform-origin: 169.125px 17px; width: 338.25px; border-spacing: 0px">
        <tbody style="block-size: 34px; border-block-color: rgb(128, 128, 128); border-color: rgb(128, 128, 128); border-inline-color: rgb(128, 128, 128); height: 34px; inline-size: 338.25px; perspective-origin: 169.125px 17px; transform-origin: 169.125px 17px; width: 338.25px">
          <tr style="block-size: 34px; border-block-color: rgb(128, 128, 128); border-color: rgb(128, 128, 128); border-inline-color: rgb(128, 128, 128); height: 34px; inline-size: 338.25px; perspective-origin: 169.125px 17px; transform-origin: 169.125px 17px; vertical-align: middle; width: 338.25px">
            <td align="RIGHT" valign="CENTER" style="block-size: 34px; height: 34px; inline-size: 78px; padding-block: 0px; padding: 0px; padding-inline: 0px; perspective-origin: 39px 17px; text-align: -webkit-right; transform-origin: 39px 17px; vertical-align: middle; width: 78px">
              <a

                style="
                  border-block-color: rgb(0, 0, 238);
                  border-color: rgb(0, 0, 238);
                  border-inline-color: rgb(0, 0, 238);
                  caret-color: rgb(0, 0, 238);
                  color: rgb(0, 0, 238);
                  column-rule-color: rgb(0, 0, 238);
                  cursor: pointer;
                  outline-color: rgb(0, 0, 238);
                  text-align: -webkit-right;
                  text-decoration: underline solid rgb(0, 0, 238);
                  text-emphasis-color: rgb(0, 0, 238);
                  -webkit-text-decorations-in-effect: underline;
                  -webkit-text-fill-color: rgb(0, 0, 238);
                  -webkit-text-stroke-color: rgb(0, 0, 238);
                "
                ><img

                  alt="[UBL]"
                  width="78"
                  height="34"
                  border="0"
                  hspace="0"
                  vspace="0"
                  style="
                    block-size: 34px;
                    border-block-color: rgb(0, 0, 238);
                    border-block-style: solid;
                    border-color: rgb(0, 0, 238);
                    border-style: solid;
                    border-inline-color: rgb(0, 0, 238);
                    border-inline-style: solid;
                    caret-color: rgb(0, 0, 238);
                    color: rgb(0, 0, 238);
                    column-rule-color: rgb(0, 0, 238);
                    cursor: pointer;
                    height: 34px;
                    inline-size: 78px;
                    outline-color: rgb(0, 0, 238);
                    perspective-origin: 39px 17px;
                    text-align: -webkit-right;
                    text-decoration: none solid rgb(0, 0, 238);
                    text-emphasis-color: rgb(0, 0, 238);
                    transform-origin: 39px 17px;
                    width: 78px;
                    -webkit-text-decorations-in-effect: underline;
                    -webkit-text-fill-color: rgb(0, 0, 238);
                    -webkit-text-stroke-color: rgb(0, 0, 238);
                  "
              /></a>
            </td>
            <td valign="TOP" style="block-size: 34px; height: 34px; inline-size: 260.25px; padding-block: 0px; padding: 0px; padding-inline: 0px; perspective-origin: 130.125px 17px; transform-origin: 130.125px 17px; vertical-align: top; width: 260.25px">
              <table id="t2" border="0" cellpadding="0" cellspacing="0" style="block-size: 32px; height: 32px; inline-size: 260.25px; perspective-origin: 130.125px 16px; transform-origin: 130.125px 16px; width: 260.25px; border-spacing: 0px">
                <tbody style="block-size: 32px; border-block-color: rgb(128, 128, 128); border-color: rgb(128, 128, 128); border-inline-color: rgb(128, 128, 128); height: 32px; inline-size: 260.25px; perspective-origin: 130.125px 16px; transform-origin: 130.125px 16px; width: 260.25px">
                  <tr style="block-size: 11px; border-block-color: rgb(128, 128, 128); border-color: rgb(128, 128, 128); border-inline-color: rgb(128, 128, 128); height: 11px; inline-size: 260.25px; perspective-origin: 130.125px 5.5px; transform-origin: 130.125px 5.5px; vertical-align: middle; width: 260.25px">
                    <td valign="BOTTOM" align="CENTER" colspan="3" style="block-size: 11px; height: 11px; inline-size: 260.25px; padding-block: 0px; padding: 0px; padding-inline: 0px; perspective-origin: 130.125px 5.5px; text-align: -webkit-center; transform-origin: 130.125px 5.5px; vertical-align: bottom; width: 260.25px">
                      <img

                        width="216"
                        height="11"
                        border="0"
                        hspace="0"
                        vspace="0"
                        alt="Search anywhere on the Ultimate Band List"
                        style="block-size: 11px; border-block-style: solid; border-style: solid; border-inline-style: solid; height: 11px; inline-size: 216px; perspective-origin: 108px 5.5px; text-align: -webkit-center; transform-origin: 108px 5.5px; width: 216px"
                      />
                    </td>
                  </tr>
                  <tr style="block-size: 21px; border-block-color: rgb(128, 128, 128); border-color: rgb(128, 128, 128); border-inline-color: rgb(128, 128, 128); height: 21px; inline-size: 260.25px; perspective-origin: 130.125px 10.5px; transform-origin: 130.125px 10.5px; vertical-align: middle; width: 260.25px">
                    <td valign="TOP" style="block-size: 21px; height: 21px; inline-size: 214.25px; padding-block: 0px; padding: 0px; padding-inline: 0px; perspective-origin: 107.125px 10.5px; transform-origin: 107.125px 10.5px; vertical-align: top; width: 214.25px">
                      <font size="-1" style="font-size: 13px">
                        <img

                          width="100"
                          height="11"
                          border="0"
                          hspace="0"
                          vspace="0"
                          alt="Press ENTER key to activate search:"
                          style="block-size: 11px; border-block-style: solid; border-style: solid; border-inline-style: solid; font-size: 13px; height: 11px; inline-size: 100px; perspective-origin: 50px 5.5px; transform-origin: 50px 5.5px; width: 100px"
                        />
                        <input type="text" name="SEARCH" size="14" maxlength="100" style="inline-size: 111px; perspective-origin: 55.5px 10.5px; transform-origin: 55.5px 10.5px; width: 111px" />
                      </font>
                    </td>
                    <td valign="TOP" style="block-size: 21px; height: 21px; inline-size: 46px; padding-block: 0px; padding: 0px; padding-inline: 0px; perspective-origin: 23px 10.5px; transform-origin: 23px 10.5px; vertical-align: top; width: 46px">
                      <input
                        type="image"

                        border="0"
                        hspace="2"
                        vspace="0"
                        alt="[Find]"
                        style="
                          appearance: none;
                          background-color: rgba(0, 0, 0, 0);
                          block-size: 19px;
                          border-block: 0px solid rgb(0, 0, 0);
                          border-color: rgb(0, 0, 0);
                          border-style: solid;
                          border-width: 0px;
                          border-inline: 0px solid rgb(0, 0, 0);
                          box-sizing: content-box;
                          cursor: pointer;
                          height: 19px;
                          inline-size: 42px;
                          margin-inline: 2px;
                          margin-left: 2px;
                          margin-right: 2px;
                          overflow: visible;
                          padding-block: 0px;
                          padding: 0px;
                          padding-inline: 0px;
                          perspective-origin: 21px 9.5px;
                          transform-origin: 21px 9.5px;
                          width: 42px;
                        "
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
            <td valign="CENTER" style="block-size: 34px; height: 34px; padding-block: 0px; padding: 0px; padding-inline: 0px; perspective-origin: 0px 17px; transform-origin: 0px 17px; vertical-align: middle"></td>
          </tr>
        </tbody>
      </table>
    </center>
  </form>

  <center style="block-size: 49px; height: 49px; perspective-origin: 995.5px 24.5px; transform-origin: 995.5px 24.5px">
    <table id="t3" width="540" border="0" style="block-size: 49px; height: 49px; inline-size: 540px; perspective-origin: 270px 24.5px; transform-origin: 270px 24.5px; width: 540px">
      <tbody style="block-size: 45px; border-block-color: rgb(128, 128, 128); border-color: rgb(128, 128, 128); border-inline-color: rgb(128, 128, 128); height: 45px; inline-size: 536px; perspective-origin: 268px 22.5px; transform-origin: 268px 22.5px; width: 536px; border-spacing: 2px">
        <tr style="block-size: 45px; border-block-color: rgb(128, 128, 128); border-color: rgb(128, 128, 128); border-inline-color: rgb(128, 128, 128); height: 45px; inline-size: 536px; perspective-origin: 268px 22.5px; transform-origin: 268px 22.5px; vertical-align: middle; width: 536px; border-spacing: 2px">
          <td width="25%" align="RIGHT" valign="TOP" style="block-size: 37px; height: 37px; inline-size: 128.359px; perspective-origin: 65.1719px 19.5px; text-align: -webkit-right; transform-origin: 65.1797px 19.5px; vertical-align: top; width: 128.359px; border-spacing: 2px">
            <font size="-1" style="font-size: 13px; text-align: -webkit-right; border-spacing: 2px"
              ><b style="font-size: 13px; text-align: -webkit-right; border-spacing: 2px"><br style="font-size: 13px; font-weight: 700; text-align: -webkit-right; border-spacing: 2px" />SCAN THE UBL BY... </b></font
            >
          </td>
          <td width="25%" valign="TOP" align="CENTER" style="block-size: 45px; height: 45px; inline-size: 130.5px; perspective-origin: 66.25px 23.5px; text-align: -webkit-center; transform-origin: 66.25px 23.5px; vertical-align: top; width: 130.5px; border-spacing: 2px">
            <font size="+1" style="font-size: 18px; text-align: -webkit-center; border-spacing: 2px"
              ><a

                style="
                  border-block-color: rgb(0, 0, 238);
                  border-color: rgb(0, 0, 238);
                  border-inline-color: rgb(0, 0, 238);
                  caret-color: rgb(0, 0, 238);
                  color: rgb(0, 0, 238);
                  column-rule-color: rgb(0, 0, 238);
                  cursor: pointer;
                  font-size: 18px;
                  outline-color: rgb(0, 0, 238);
                  text-align: -webkit-center;
                  text-decoration: underline solid rgb(0, 0, 238);
                  text-emphasis-color: rgb(0, 0, 238);
                  border-spacing: 2px;
                  -webkit-text-decorations-in-effect: underline;
                  -webkit-text-fill-color: rgb(0, 0, 238);
                  -webkit-text-stroke-color: rgb(0, 0, 238);
                "
                >Music Genre</a
              ></font
            ><br style="text-align: -webkit-center; border-spacing: 2px" />
            <font size="-1" style="font-size: 13px; text-align: -webkit-center; border-spacing: 2px">[ <b style="font-size: 13px; text-align: -webkit-center; border-spacing: 2px">A</b>coustic to <b style="font-size: 13px; text-align: -webkit-center; border-spacing: 2px">Z</b>ydeco ]</font>
          </td>
          <td width="25%" valign="TOP" align="CENTER" style="block-size: 43px; height: 43px; inline-size: 136.344px; perspective-origin: 69.1719px 22.5px; text-align: -webkit-center; transform-origin: 69.1719px 22.5px; vertical-align: top; width: 136.344px; border-spacing: 2px">
            <nobr style="text-align: -webkit-center; border-spacing: 2px"
              ><font size="+1" style="font-size: 18px; text-align: -webkit-center; text-wrap-mode: nowrap; border-spacing: 2px"
                ><a
                  style="
                    border-block-color: rgb(0, 0, 238);
                    border-color: rgb(0, 0, 238);
                    border-inline-color: rgb(0, 0, 238);
                    caret-color: rgb(0, 0, 238);
                    color: rgb(0, 0, 238);
                    column-rule-color: rgb(0, 0, 238);
                    cursor: pointer;
                    font-size: 18px;
                    outline-color: rgb(0, 0, 238);
                    text-align: -webkit-center;
                    text-decoration: underline solid rgb(0, 0, 238);
                    text-emphasis-color: rgb(0, 0, 238);
                    text-wrap-mode: nowrap;
                    border-spacing: 2px;
                    -webkit-text-decorations-in-effect: underline;
                    -webkit-text-fill-color: rgb(0, 0, 238);
                    -webkit-text-stroke-color: rgb(0, 0, 238);
                  "
                  >Resources</a
                ></font
              ><br style="text-align: -webkit-center; text-wrap-mode: nowrap; border-spacing: 2px" />
              <font size="-1" style="font-size: 13px; text-align: -webkit-center; text-wrap-mode: nowrap; border-spacing: 2px">[ WWW pages and more ]</font></nobr
            >
          </td>
          <td width="25%" valign="TOP" align="CENTER" style="block-size: 43px; height: 43px; inline-size: 130.5px; perspective-origin: 66.25px 22.5px; text-align: -webkit-center; transform-origin: 66.25px 22.5px; vertical-align: top; width: 130.5px; border-spacing: 2px">
            <font size="+1" style="font-size: 18px; text-align: -webkit-center; border-spacing: 2px"
              ><a
                href="https://ubl.com/ubl/new.html"
                style="
                  border-block-color: rgb(0, 0, 238);
                  border-color: rgb(0, 0, 238);
                  border-inline-color: rgb(0, 0, 238);
                  caret-color: rgb(0, 0, 238);
                  color: rgb(0, 0, 238);
                  column-rule-color: rgb(0, 0, 238);
                  cursor: pointer;
                  font-size: 18px;
                  outline-color: rgb(0, 0, 238);
                  text-align: -webkit-center;
                  text-decoration: underline solid rgb(0, 0, 238);
                  text-emphasis-color: rgb(0, 0, 238);
                  border-spacing: 2px;
                  -webkit-text-decorations-in-effect: underline;
                  -webkit-text-fill-color: rgb(0, 0, 238);
                  -webkit-text-stroke-color: rgb(0, 0, 238);
                "
                >What's New</a
              ></font
            ><br style="text-align: -webkit-center; border-spacing: 2px" />
            <font size="-1" style="font-size: 13px; text-align: -webkit-center; border-spacing: 2px">[ Latest additions ]</font>
          </td>
        </tr>
      </tbody>
    </table>
  </center>

  <center style="block-size: 14px; height: 14px; perspective-origin: 995.5px 7px; transform-origin: 995.5px 7px">
    <nobr style="text-align: -webkit-center"
      ><img width="526" height="14" style="block-size: 14px; height: 14px; inline-size: 526px; perspective-origin: 263px 7px; text-align: -webkit-center; text-wrap-mode: nowrap; transform-origin: 263px 7px; width: 526px" /><img
        width="14"
        height="14"
        style="block-size: 14px; height: 14px; inline-size: 14px; perspective-origin: 7px 7px; text-align: -webkit-center; text-wrap-mode: nowrap; transform-origin: 7px 7px; width: 14px"
    /></nobr>
  </center>

  <p></p>
  <center style="perspective-origin: 391px 407.5px; transform-origin: 391px 407.5px; block-size: 815px; height: 815px">
    <table
      id="t4"
      width="533"
      border="2"
      noshade=""
      cellpadding="4"
      cellspacing="0"
      style="perspective-origin: 266.5px 257.5px; transform-origin: 266.5px 257.5px; border-spacing: 0px; block-size: 515px; border-block-style: outset; border-block-width: 2px; border-style: outset; border-width: 2px; border-inline-style: outset; border-inline-width: 2px; height: 515px; inline-size: 533px; width: 533px"
    >
      <tbody style="perspective-origin: 264.5px 255.5px; transform-origin: 264.5px 255.5px; block-size: 511px; border-block-color: rgb(128, 128, 128); border-color: rgb(128, 128, 128); border-inline-color: rgb(128, 128, 128); height: 511px; inline-size: 529px; width: 529px">
        <tr style="perspective-origin: 264.5px 69.75px; transform-origin: 264.5px 69.75px; vertical-align: middle; block-size: 139.5px; border-block-color: rgb(128, 128, 128); border-color: rgb(128, 128, 128); border-inline-color: rgb(128, 128, 128); height: 139.5px; inline-size: 529px; width: 529px">
          <td
            valign="TOP"
            align="LEFT"
            style="
              perspective-origin: 203px 69.75px;
              text-align: -webkit-left;
              transform-origin: 203px 69.75px;
              vertical-align: top;
              block-size: 129.5px;
              border-block: 1px inset rgb(128, 128, 128);
              border-color: rgb(128, 128, 128);
              border-style: inset;
              border-width: 1px;
              border-inline: 1px inset rgb(128, 128, 128);
              height: 129.5px;
              inline-size: 396px;
              padding-block: 4px;
              padding: 4px;
              padding-inline: 4px;
              width: 396px;
            "
          >
            <!-- begin heading 18 -->
            <font
              color="#FF6600"
              style="
                caret-color: rgb(255, 102, 0);
                color: rgb(255, 102, 0);
                column-rule-color: rgb(255, 102, 0);
                outline-color: rgb(255, 102, 0);
                text-align: -webkit-left;
                text-decoration: none solid rgb(255, 102, 0);
                text-emphasis-color: rgb(255, 102, 0);
                -webkit-text-fill-color: rgb(255, 102, 0);
                -webkit-text-stroke-color: rgb(255, 102, 0);
                border-block-color: rgb(255, 102, 0);
                border-color: rgb(255, 102, 0);
                border-inline-color: rgb(255, 102, 0);
              "
              ><i
                style="
                  caret-color: rgb(255, 102, 0);
                  color: rgb(255, 102, 0);
                  column-rule-color: rgb(255, 102, 0);
                  outline-color: rgb(255, 102, 0);
                  text-align: -webkit-left;
                  text-decoration: none solid rgb(255, 102, 0);
                  text-emphasis-color: rgb(255, 102, 0);
                  -webkit-text-fill-color: rgb(255, 102, 0);
                  -webkit-text-stroke-color: rgb(255, 102, 0);
                  border-block-color: rgb(255, 102, 0);
                  border-color: rgb(255, 102, 0);
                  border-inline-color: rgb(255, 102, 0);
                "
                ><b
                  style="
                    caret-color: rgb(255, 102, 0);
                    color: rgb(255, 102, 0);
                    column-rule-color: rgb(255, 102, 0);
                    font-style: italic;
                    outline-color: rgb(255, 102, 0);
                    text-align: -webkit-left;
                    text-decoration: none solid rgb(255, 102, 0);
                    text-emphasis-color: rgb(255, 102, 0);
                    -webkit-text-fill-color: rgb(255, 102, 0);
                    -webkit-text-stroke-color: rgb(255, 102, 0);
                    border-block-color: rgb(255, 102, 0);
                    border-color: rgb(255, 102, 0);
                    border-inline-color: rgb(255, 102, 0);
                  "
                  >Win Tickets To See Marilyn Manson!!!</b
                ></i
              ></font
            >
            <br style="text-align: -webkit-left" />
            If you're in Los Angeles you can win 2 tickets to go see Marilyn Manson at the Santa Monica Civic on 1/25/97 from your friends at Goldenvoice. For your enjoyment, a link to the Goldenvoice site is conveniently located in the Promoters, Agents &amp; Music Professionals area inside the
            <a
              href="concert/"
              style="
                caret-color: rgb(0, 0, 238);
                color: rgb(0, 0, 238);
                column-rule-color: rgb(0, 0, 238);
                cursor: pointer;
                outline-color: rgb(0, 0, 238);
                text-align: -webkit-left;
                text-decoration: underline solid rgb(0, 0, 238);
                text-emphasis-color: rgb(0, 0, 238);
                -webkit-text-decorations-in-effect: underline;
                -webkit-text-fill-color: rgb(0, 0, 238);
                -webkit-text-stroke-color: rgb(0, 0, 238);
                border-block-color: rgb(0, 0, 238);
                border-color: rgb(0, 0, 238);
                border-inline-color: rgb(0, 0, 238);
              "
              >Club &amp; Concert</a
            >
            section. Go forth and win!
            <!-- end heading -->
          </td>
          <td
            rowspan="3"
            align="CENTER"
            style="
              perspective-origin: 61.5px 255.5px;
              text-align: -webkit-center;
              transform-origin: 61.5px 255.5px;
              vertical-align: middle;
              block-size: 501px;
              border-block: 1px inset rgb(128, 128, 128);
              border-color: rgb(128, 128, 128);
              border-style: inset;
              border-width: 1px;
              border-inline: 1px inset rgb(128, 128, 128);
              height: 501px;
              inline-size: 113px;
              padding-block: 4px;
              padding: 4px;
              padding-inline: 4px;
              width: 113px;
            "
          >
            <a
              target="NewWindow"
              href="http://liveconcerts.com/"
              style="
                caret-color: rgb(0, 0, 238);
                color: rgb(0, 0, 238);
                column-rule-color: rgb(0, 0, 238);
                cursor: pointer;
                outline-color: rgb(0, 0, 238);
                text-align: -webkit-center;
                text-decoration: underline solid rgb(0, 0, 238);
                text-emphasis-color: rgb(0, 0, 238);
                -webkit-text-decorations-in-effect: underline;
                -webkit-text-fill-color: rgb(0, 0, 238);
                -webkit-text-stroke-color: rgb(0, 0, 238);
                border-block-color: rgb(0, 0, 238);
                border-color: rgb(0, 0, 238);
                border-inline-color: rgb(0, 0, 238);
              "
              ><img
                border="0"
                vspace="4"
                hspace="6"

                alt="[Black Crows]"
                style="
                  caret-color: rgb(0, 0, 238);
                  color: rgb(0, 0, 238);
                  column-rule-color: rgb(0, 0, 238);
                  cursor: pointer;
                  outline-color: rgb(0, 0, 238);
                  perspective-origin: 47px 56px;
                  text-align: -webkit-center;
                  text-decoration: none solid rgb(0, 0, 238);
                  text-emphasis-color: rgb(0, 0, 238);
                  transform-origin: 47px 56px;
                  -webkit-text-decorations-in-effect: underline;
                  -webkit-text-fill-color: rgb(0, 0, 238);
                  -webkit-text-stroke-color: rgb(0, 0, 238);
                  block-size: 112px;
                  border-block-color: rgb(0, 0, 238);
                  border-block-style: solid;
                  border-color: rgb(0, 0, 238);
                  border-style: solid;
                  border-inline-color: rgb(0, 0, 238);
                  border-inline-style: solid;
                  height: 112px;
                  inline-size: 94px;
                  margin-block: 4px;
                  margin: 4px 6px;
                  margin-inline: 6px;
                  width: 94px;
                " /></a
            ><br style="text-align: -webkit-center" />
            <p style="perspective-origin: 56.5px 61.5px; text-align: -webkit-center; transform-origin: 56.5px 61.5px; block-size: 123px; height: 123px; inline-size: 113px; width: 113px">
              <a
                target="NewWindow"
                href="http://www.addict.com/"
                style="
                  caret-color: rgb(0, 0, 238);
                  color: rgb(0, 0, 238);
                  column-rule-color: rgb(0, 0, 238);
                  cursor: pointer;
                  outline-color: rgb(0, 0, 238);
                  text-align: -webkit-center;
                  text-decoration: underline solid rgb(0, 0, 238);
                  text-emphasis-color: rgb(0, 0, 238);
                  -webkit-text-decorations-in-effect: underline;
                  -webkit-text-fill-color: rgb(0, 0, 238);
                  -webkit-text-stroke-color: rgb(0, 0, 238);
                  border-block-color: rgb(0, 0, 238);
                  border-color: rgb(0, 0, 238);
                  border-inline-color: rgb(0, 0, 238);
                "
              >
                <img
                  border="0"
                  vspace="4"
                  hspace="6"

                  alt="[Addicted to Noise]"
                  style="
                    caret-color: rgb(0, 0, 238);
                    color: rgb(0, 0, 238);
                    column-rule-color: rgb(0, 0, 238);
                    cursor: pointer;
                    outline-color: rgb(0, 0, 238);
                    perspective-origin: 50.5px 57.5px;
                    text-align: -webkit-center;
                    text-decoration: none solid rgb(0, 0, 238);
                    text-emphasis-color: rgb(0, 0, 238);
                    transform-origin: 50.5px 57.5px;
                    -webkit-text-decorations-in-effect: underline;
                    -webkit-text-fill-color: rgb(0, 0, 238);
                    -webkit-text-stroke-color: rgb(0, 0, 238);
                    block-size: 115px;
                    border-block-color: rgb(0, 0, 238);
                    border-block-style: solid;
                    border-color: rgb(0, 0, 238);
                    border-style: solid;
                    border-inline-color: rgb(0, 0, 238);
                    border-inline-style: solid;
                    height: 115px;
                    inline-size: 101px;
                    margin-block: 4px;
                    margin: 4px 6px;
                    margin-inline: 6px;
                    width: 101px;
                  " /></a
              ><br style="text-align: -webkit-center" />
              <font size="-1" style="font-size: 13px; text-align: -webkit-center"></font>
            </p>
          </td>
        </tr>
        <tr style="perspective-origin: 264.5px 69.75px; transform-origin: 264.5px 69.75px; vertical-align: middle; block-size: 139.5px; border-block-color: rgb(128, 128, 128); border-color: rgb(128, 128, 128); border-inline-color: rgb(128, 128, 128); height: 139.5px; inline-size: 529px; width: 529px">
          <td
            align="LEFT"
            valign="TOP"
            style="
              perspective-origin: 203px 69.75px;
              text-align: -webkit-left;
              transform-origin: 203px 69.75px;
              vertical-align: top;
              block-size: 129.5px;
              border-block: 1px inset rgb(128, 128, 128);
              border-color: rgb(128, 128, 128);
              border-style: inset;
              border-width: 1px;
              border-inline: 1px inset rgb(128, 128, 128);
              height: 129.5px;
              inline-size: 396px;
              padding-block: 4px;
              padding: 4px;
              padding-inline: 4px;
              width: 396px;
            "
          >
            <!-- begin heading 19 -->
            <font
              color="#FF6600"
              style="
                caret-color: rgb(255, 102, 0);
                color: rgb(255, 102, 0);
                column-rule-color: rgb(255, 102, 0);
                outline-color: rgb(255, 102, 0);
                text-align: -webkit-left;
                text-decoration: none solid rgb(255, 102, 0);
                text-emphasis-color: rgb(255, 102, 0);
                -webkit-text-fill-color: rgb(255, 102, 0);
                -webkit-text-stroke-color: rgb(255, 102, 0);
                border-block-color: rgb(255, 102, 0);
                border-color: rgb(255, 102, 0);
                border-inline-color: rgb(255, 102, 0);
              "
              ><i
                style="
                  caret-color: rgb(255, 102, 0);
                  color: rgb(255, 102, 0);
                  column-rule-color: rgb(255, 102, 0);
                  outline-color: rgb(255, 102, 0);
                  text-align: -webkit-left;
                  text-decoration: none solid rgb(255, 102, 0);
                  text-emphasis-color: rgb(255, 102, 0);
                  -webkit-text-fill-color: rgb(255, 102, 0);
                  -webkit-text-stroke-color: rgb(255, 102, 0);
                  border-block-color: rgb(255, 102, 0);
                  border-color: rgb(255, 102, 0);
                  border-inline-color: rgb(255, 102, 0);
                "
                ><b
                  style="
                    caret-color: rgb(255, 102, 0);
                    color: rgb(255, 102, 0);
                    column-rule-color: rgb(255, 102, 0);
                    font-style: italic;
                    outline-color: rgb(255, 102, 0);
                    text-align: -webkit-left;
                    text-decoration: none solid rgb(255, 102, 0);
                    text-emphasis-color: rgb(255, 102, 0);
                    -webkit-text-fill-color: rgb(255, 102, 0);
                    -webkit-text-stroke-color: rgb(255, 102, 0);
                    border-block-color: rgb(255, 102, 0);
                    border-color: rgb(255, 102, 0);
                    border-inline-color: rgb(255, 102, 0);
                  "
                  >Get Livid!</b
                ></i
              ></font
            >
            <br style="text-align: -webkit-left" />
            Revisit Livid '96-- 1 day, 5 stages, and 38 bands including Garbage, Everclear, Ben Lee and tons more. Livid '96 went off in October, down under in Brisbane, Australia. Check out the biggest line-up we've ever seen, get performance photos and a map of the huge concert site. Just go to the
            <a
              href="concert/"
              style="
                caret-color: rgb(0, 0, 238);
                color: rgb(0, 0, 238);
                column-rule-color: rgb(0, 0, 238);
                cursor: pointer;
                outline-color: rgb(0, 0, 238);
                text-align: -webkit-left;
                text-decoration: underline solid rgb(0, 0, 238);
                text-emphasis-color: rgb(0, 0, 238);
                -webkit-text-decorations-in-effect: underline;
                -webkit-text-fill-color: rgb(0, 0, 238);
                -webkit-text-stroke-color: rgb(0, 0, 238);
                border-block-color: rgb(0, 0, 238);
                border-color: rgb(0, 0, 238);
                border-inline-color: rgb(0, 0, 238);
              "
              >Club &amp; Concerts</a
            >
            section and enter the Festival &amp; Event zone.
            <!-- end heading -->
          </td>
        </tr>
        <tr style="perspective-origin: 264.5px 116px; transform-origin: 264.5px 116px; vertical-align: middle; block-size: 232px; border-block-color: rgb(128, 128, 128); border-color: rgb(128, 128, 128); border-inline-color: rgb(128, 128, 128); height: 232px; inline-size: 529px; width: 529px">
          <td
            align="LEFT"
            valign="TOP"
            style="
              perspective-origin: 203px 116px;
              text-align: -webkit-left;
              transform-origin: 203px 116px;
              vertical-align: top;
              block-size: 222px;
              border-block: 1px inset rgb(128, 128, 128);
              border-color: rgb(128, 128, 128);
              border-style: inset;
              border-width: 1px;
              border-inline: 1px inset rgb(128, 128, 128);
              height: 222px;
              inline-size: 396px;
              padding-block: 4px;
              padding: 4px;
              padding-inline: 4px;
              width: 396px;
            "
          >
            <!-- begin heading 20 -->
            <font
              color="#FF6600"
              style="
                caret-color: rgb(255, 102, 0);
                color: rgb(255, 102, 0);
                column-rule-color: rgb(255, 102, 0);
                outline-color: rgb(255, 102, 0);
                text-align: -webkit-left;
                text-decoration: none solid rgb(255, 102, 0);
                text-emphasis-color: rgb(255, 102, 0);
                -webkit-text-fill-color: rgb(255, 102, 0);
                -webkit-text-stroke-color: rgb(255, 102, 0);
                border-block-color: rgb(255, 102, 0);
                border-color: rgb(255, 102, 0);
                border-inline-color: rgb(255, 102, 0);
              "
              ><i
                style="
                  caret-color: rgb(255, 102, 0);
                  color: rgb(255, 102, 0);
                  column-rule-color: rgb(255, 102, 0);
                  outline-color: rgb(255, 102, 0);
                  text-align: -webkit-left;
                  text-decoration: none solid rgb(255, 102, 0);
                  text-emphasis-color: rgb(255, 102, 0);
                  -webkit-text-fill-color: rgb(255, 102, 0);
                  -webkit-text-stroke-color: rgb(255, 102, 0);
                  border-block-color: rgb(255, 102, 0);
                  border-color: rgb(255, 102, 0);
                  border-inline-color: rgb(255, 102, 0);
                "
                ><b
                  style="
                    caret-color: rgb(255, 102, 0);
                    color: rgb(255, 102, 0);
                    column-rule-color: rgb(255, 102, 0);
                    font-style: italic;
                    outline-color: rgb(255, 102, 0);
                    text-align: -webkit-left;
                    text-decoration: none solid rgb(255, 102, 0);
                    text-emphasis-color: rgb(255, 102, 0);
                    -webkit-text-fill-color: rgb(255, 102, 0);
                    -webkit-text-stroke-color: rgb(255, 102, 0);
                    border-block-color: rgb(255, 102, 0);
                    border-color: rgb(255, 102, 0);
                    border-inline-color: rgb(255, 102, 0);
                  "
                  >Radiohead's "Official" Web Site</b
                ></i
              ></font
            >
            <br style="text-align: -webkit-left" />
            Check out Radiohead's "Official" web site. If you aren't already a Radiohead fan you'll be one by the time you leave this site. No discographies or guitar tabs here; Radiohead saw their web site as a chance to publish not only some pent-up stories, but exciting (and fun) information on waste materials (primarily non-recyclable plastics)
            too. Their sense-of-humor runs throughout the site which is rare these days. If you're looking for lyric sheets try elsewhere but if you're looking for a cool place to visit, this one's for you. Just skip on over to
            <a
              href="artists/002630.html"
              style="
                caret-color: rgb(0, 0, 238);
                color: rgb(0, 0, 238);
                column-rule-color: rgb(0, 0, 238);
                cursor: pointer;
                outline-color: rgb(0, 0, 238);
                text-align: -webkit-left;
                text-decoration: underline solid rgb(0, 0, 238);
                text-emphasis-color: rgb(0, 0, 238);
                -webkit-text-decorations-in-effect: underline;
                -webkit-text-fill-color: rgb(0, 0, 238);
                -webkit-text-stroke-color: rgb(0, 0, 238);
                border-block-color: rgb(0, 0, 238);
                border-color: rgb(0, 0, 238);
                border-inline-color: rgb(0, 0, 238);
              "
              >Radiohead's UBL card</a
            >, pick the only site that calls itself official, and have a good time.
            <!-- end heading -->
          </td>
        </tr>
      </tbody>
    </table>

    <p align="CENTER" style="text-align: -webkit-center">
      <!-- flags -->
    </p>
    <p align="CENTER" style="text-align: -webkit-center"></p>
    <center style="perspective-origin: 391px 47px; transform-origin: 391px 47px; block-size: 94px; height: 94px">
      <table id="t5" border="0" width="520" cellpadding="0" style="perspective-origin: 262px 47px; transform-origin: 262px 47px; block-size: 94px; height: 94px; inline-size: 524px; width: 524px">
        <tbody style="perspective-origin: 260px 45px; transform-origin: 260px 45px; border-spacing: 2px; block-size: 90px; border-block-color: rgb(128, 128, 128); border-color: rgb(128, 128, 128); border-inline-color: rgb(128, 128, 128); height: 90px; inline-size: 520px; width: 520px">
          <tr style="perspective-origin: 260px 36.25px; transform-origin: 260px 36.25px; vertical-align: middle; border-spacing: 2px; block-size: 72.5px; border-block-color: rgb(128, 128, 128); border-color: rgb(128, 128, 128); border-inline-color: rgb(128, 128, 128); height: 72.5px; inline-size: 520px; width: 520px">
            <td align="CENTER" colspan="6" width="520" style="perspective-origin: 260px 36.25px; text-align: -webkit-center; transform-origin: 260px 36.25px; vertical-align: middle; border-spacing: 2px; block-size: 72.5px; height: 72.5px; inline-size: 520px; padding-block: 0px; padding: 0px; padding-inline: 0px; width: 520px">
              <b style="text-align: -webkit-center; border-spacing: 2px"><i style="font-weight: 700; text-align: -webkit-center; border-spacing: 2px">Coming Soon... the UBL in 6 Major Languages</i></b
              ><br style="text-align: -webkit-center; border-spacing: 2px" />
              <img alt="[Flags]"  style="perspective-origin: 260px 27px; text-align: -webkit-center; transform-origin: 260px 27px; border-spacing: 2px; block-size: 54px; height: 54px; inline-size: 520px; width: 520px" />
            </td>
          </tr>
          <tr style="perspective-origin: 260px 7.75px; transform-origin: 260px 7.75px; vertical-align: middle; border-spacing: 2px; block-size: 15.5px; border-block-color: rgb(128, 128, 128); border-color: rgb(128, 128, 128); border-inline-color: rgb(128, 128, 128); height: 15.5px; inline-size: 520px; width: 520px">
            <td align="CENTER" width="17%" style="perspective-origin: 42.4688px 7.75px; text-align: -webkit-center; transform-origin: 42.4688px 7.75px; vertical-align: middle; border-spacing: 2px; block-size: 15.5px; height: 15.5px; inline-size: 83.5312px; padding-block: 0px; padding: 0px; padding-inline: 0px; width: 83.5312px">
              <font
                size="-1"
                color="#999999"
                style="
                  caret-color: rgb(153, 153, 153);
                  color: rgb(153, 153, 153);
                  column-rule-color: rgb(153, 153, 153);
                  font-size: 13px;
                  outline-color: rgb(153, 153, 153);
                  text-align: -webkit-center;
                  text-decoration: none solid rgb(153, 153, 153);
                  text-emphasis-color: rgb(153, 153, 153);
                  border-spacing: 2px;
                  -webkit-text-fill-color: rgb(153, 153, 153);
                  -webkit-text-stroke-color: rgb(153, 153, 153);
                  border-block-color: rgb(153, 153, 153);
                  border-color: rgb(153, 153, 153);
                  border-inline-color: rgb(153, 153, 153);
                "
                >Russian</font
              >
            </td>
            <td align="CENTER" width="17%" style="perspective-origin: 43.3438px 7.75px; text-align: -webkit-center; transform-origin: 43.3477px 7.75px; vertical-align: middle; border-spacing: 2px; block-size: 15.5px; height: 15.5px; inline-size: 85.5469px; padding-block: 0px; padding: 0px; padding-inline: 0px; width: 85.5469px">
              <font
                size="-1"
                color="#999999"
                style="
                  caret-color: rgb(153, 153, 153);
                  color: rgb(153, 153, 153);
                  column-rule-color: rgb(153, 153, 153);
                  font-size: 13px;
                  outline-color: rgb(153, 153, 153);
                  text-align: -webkit-center;
                  text-decoration: none solid rgb(153, 153, 153);
                  text-emphasis-color: rgb(153, 153, 153);
                  border-spacing: 2px;
                  -webkit-text-fill-color: rgb(153, 153, 153);
                  -webkit-text-stroke-color: rgb(153, 153, 153);
                  border-block-color: rgb(153, 153, 153);
                  border-color: rgb(153, 153, 153);
                  border-inline-color: rgb(153, 153, 153);
                "
                >Francais</font
              >
            </td>
            <td align="CENTER" width="17%" style="perspective-origin: 43.3438px 7.75px; text-align: -webkit-center; transform-origin: 43.3477px 7.75px; vertical-align: middle; border-spacing: 2px; block-size: 15.5px; height: 15.5px; inline-size: 85.6875px; padding-block: 0px; padding: 0px; padding-inline: 0px; width: 85.6875px">
              <font
                size="-1"
                color="#999999"
                style="
                  caret-color: rgb(153, 153, 153);
                  color: rgb(153, 153, 153);
                  column-rule-color: rgb(153, 153, 153);
                  font-size: 13px;
                  outline-color: rgb(153, 153, 153);
                  text-align: -webkit-center;
                  text-decoration: none solid rgb(153, 153, 153);
                  text-emphasis-color: rgb(153, 153, 153);
                  border-spacing: 2px;
                  -webkit-text-fill-color: rgb(153, 153, 153);
                  -webkit-text-stroke-color: rgb(153, 153, 153);
                  border-block-color: rgb(153, 153, 153);
                  border-color: rgb(153, 153, 153);
                  border-inline-color: rgb(153, 153, 153);
                "
                >Deutsch</font
              >
            </td>
            <td align="CENTER" width="17%" style="perspective-origin: 43.3438px 7.75px; text-align: -webkit-center; transform-origin: 43.3477px 7.75px; vertical-align: middle; border-spacing: 2px; block-size: 15.5px; height: 15.5px; inline-size: 85.8125px; padding-block: 0px; padding: 0px; padding-inline: 0px; width: 85.8125px">
              <font
                size="-1"
                color="#999999"
                style="
                  caret-color: rgb(153, 153, 153);
                  color: rgb(153, 153, 153);
                  column-rule-color: rgb(153, 153, 153);
                  font-size: 13px;
                  outline-color: rgb(153, 153, 153);
                  text-align: -webkit-center;
                  text-decoration: none solid rgb(153, 153, 153);
                  text-emphasis-color: rgb(153, 153, 153);
                  border-spacing: 2px;
                  -webkit-text-fill-color: rgb(153, 153, 153);
                  -webkit-text-stroke-color: rgb(153, 153, 153);
                  border-block-color: rgb(153, 153, 153);
                  border-color: rgb(153, 153, 153);
                  border-inline-color: rgb(153, 153, 153);
                "
                >Italiano</font
              >
            </td>
            <td align="CENTER" width="17%" style="perspective-origin: 43.3438px 7.75px; text-align: -webkit-center; transform-origin: 43.3477px 7.75px; vertical-align: middle; border-spacing: 2px; block-size: 15.5px; height: 15.5px; inline-size: 86.0625px; padding-block: 0px; padding: 0px; padding-inline: 0px; width: 86.0625px">
              <font
                size="-1"
                color="#999999"
                style="
                  caret-color: rgb(153, 153, 153);
                  color: rgb(153, 153, 153);
                  column-rule-color: rgb(153, 153, 153);
                  font-size: 13px;
                  outline-color: rgb(153, 153, 153);
                  text-align: -webkit-center;
                  text-decoration: none solid rgb(153, 153, 153);
                  text-emphasis-color: rgb(153, 153, 153);
                  border-spacing: 2px;
                  -webkit-text-fill-color: rgb(153, 153, 153);
                  -webkit-text-stroke-color: rgb(153, 153, 153);
                  border-block-color: rgb(153, 153, 153);
                  border-color: rgb(153, 153, 153);
                  border-inline-color: rgb(153, 153, 153);
                "
                >Japanese</font
              >
            </td>
            <td align="CENTER" width="17%" style="perspective-origin: 43.3438px 7.75px; text-align: -webkit-center; transform-origin: 43.3477px 7.75px; vertical-align: middle; border-spacing: 2px; block-size: 15.5px; height: 15.5px; inline-size: 86.1406px; padding-block: 0px; padding: 0px; padding-inline: 0px; width: 86.1406px">
              <font
                size="-1"
                color="#999999"
                style="
                  caret-color: rgb(153, 153, 153);
                  color: rgb(153, 153, 153);
                  column-rule-color: rgb(153, 153, 153);
                  font-size: 13px;
                  outline-color: rgb(153, 153, 153);
                  text-align: -webkit-center;
                  text-decoration: none solid rgb(153, 153, 153);
                  text-emphasis-color: rgb(153, 153, 153);
                  border-spacing: 2px;
                  -webkit-text-fill-color: rgb(153, 153, 153);
                  -webkit-text-stroke-color: rgb(153, 153, 153);
                  border-block-color: rgb(153, 153, 153);
                  border-color: rgb(153, 153, 153);
                  border-inline-color: rgb(153, 153, 153);
                "
                >Español</font
              >
            </td>
          </tr>
        </tbody>
      </table>
    </center>

    <p align="CENTER" style="text-align: -webkit-center"></p>
    <center style="perspective-origin: 391px 39.25px; transform-origin: 391px 39.25px; block-size: 78.5px; height: 78.5px">
      <font size="-1" style="font-size: 13px; text-align: -webkit-center">
        <a
          href="https://ubl.com/adinfo/"
          style="
            caret-color: rgb(0, 0, 238);
            color: rgb(0, 0, 238);
            column-rule-color: rgb(0, 0, 238);
            cursor: pointer;
            font-size: 13px;
            outline-color: rgb(0, 0, 238);
            text-align: -webkit-center;
            text-decoration: underline solid rgb(0, 0, 238);
            text-emphasis-color: rgb(0, 0, 238);
            -webkit-text-decorations-in-effect: underline;
            -webkit-text-fill-color: rgb(0, 0, 238);
            -webkit-text-stroke-color: rgb(0, 0, 238);
            border-block-color: rgb(0, 0, 238);
            border-color: rgb(0, 0, 238);
            border-inline-color: rgb(0, 0, 238);
          "
          ><img
            border="0"

            alt="[Ad Info]"
            style="
              caret-color: rgb(0, 0, 238);
              color: rgb(0, 0, 238);
              column-rule-color: rgb(0, 0, 238);
              cursor: pointer;
              font-size: 13px;
              outline-color: rgb(0, 0, 238);
              perspective-origin: 61px 37.5px;
              text-align: -webkit-center;
              text-decoration: none solid rgb(0, 0, 238);
              text-emphasis-color: rgb(0, 0, 238);
              transform-origin: 61px 37.5px;
              -webkit-text-decorations-in-effect: underline;
              -webkit-text-fill-color: rgb(0, 0, 238);
              -webkit-text-stroke-color: rgb(0, 0, 238);
              block-size: 75px;
              border-block-color: rgb(0, 0, 238);
              border-block-style: solid;
              border-color: rgb(0, 0, 238);
              border-style: solid;
              border-inline-color: rgb(0, 0, 238);
              border-inline-style: solid;
              height: 75px;
              inline-size: 122px;
              width: 122px;
            "
        /></a>
        <a
          href="https://ubl.com/updateinfo/"
          style="
            caret-color: rgb(0, 0, 238);
            color: rgb(0, 0, 238);
            column-rule-color: rgb(0, 0, 238);
            cursor: pointer;
            font-size: 13px;
            outline-color: rgb(0, 0, 238);
            text-align: -webkit-center;
            text-decoration: underline solid rgb(0, 0, 238);
            text-emphasis-color: rgb(0, 0, 238);
            -webkit-text-decorations-in-effect: underline;
            -webkit-text-fill-color: rgb(0, 0, 238);
            -webkit-text-stroke-color: rgb(0, 0, 238);
            border-block-color: rgb(0, 0, 238);
            border-color: rgb(0, 0, 238);
            border-inline-color: rgb(0, 0, 238);
          "
          ><img
            border="0"

            alt="[Update List]"
            style="
              caret-color: rgb(0, 0, 238);
              color: rgb(0, 0, 238);
              column-rule-color: rgb(0, 0, 238);
              cursor: pointer;
              font-size: 13px;
              outline-color: rgb(0, 0, 238);
              perspective-origin: 61px 37.5px;
              text-align: -webkit-center;
              text-decoration: none solid rgb(0, 0, 238);
              text-emphasis-color: rgb(0, 0, 238);
              transform-origin: 61px 37.5px;
              -webkit-text-decorations-in-effect: underline;
              -webkit-text-fill-color: rgb(0, 0, 238);
              -webkit-text-stroke-color: rgb(0, 0, 238);
              block-size: 75px;
              border-block-color: rgb(0, 0, 238);
              border-block-style: solid;
              border-color: rgb(0, 0, 238);
              border-style: solid;
              border-inline-color: rgb(0, 0, 238);
              border-inline-style: solid;
              height: 75px;
              inline-size: 122px;
              width: 122px;
            "
        /></a>
      </font>
    </center>

    <center style="perspective-origin: 391px 7px; transform-origin: 391px 7px; block-size: 14px; height: 14px">
      <nobr style="text-align: -webkit-center"
        ><img width="526" height="14"  style="perspective-origin: 263px 7px; text-align: -webkit-center; text-wrap-mode: nowrap; transform-origin: 263px 7px; block-size: 14px; height: 14px; inline-size: 526px; width: 526px" /><img
          width="14"
          height="14"

          style="perspective-origin: 7px 7px; text-align: -webkit-center; text-wrap-mode: nowrap; transform-origin: 7px 7px; block-size: 14px; height: 14px; inline-size: 14px; width: 14px"
      /></nobr>
    </center>

    <center style="perspective-origin: 391px 40.75px; transform-origin: 391px 40.75px; block-size: 81.5px; height: 81.5px">
      <table id="t6" border="0" width="540" style="perspective-origin: 270px 40.75px; transform-origin: 270px 40.75px; block-size: 81.5px; height: 81.5px; inline-size: 540px; width: 540px">
        <tbody style="perspective-origin: 268px 38.75px; transform-origin: 268px 38.75px; border-spacing: 2px; block-size: 77.5px; border-block-color: rgb(128, 128, 128); border-color: rgb(128, 128, 128); border-inline-color: rgb(128, 128, 128); height: 77.5px; inline-size: 536px; width: 536px">
          <tr style="perspective-origin: 268px 38.75px; transform-origin: 268px 38.75px; vertical-align: middle; border-spacing: 2px; block-size: 77.5px; border-block-color: rgb(128, 128, 128); border-color: rgb(128, 128, 128); border-inline-color: rgb(128, 128, 128); height: 77.5px; inline-size: 536px; width: 536px">
            <td valign="CENTER" align="CENTER" style="perspective-origin: 87.2969px 38.75px; text-align: -webkit-center; transform-origin: 87.3047px 38.75px; vertical-align: middle; border-spacing: 2px; block-size: 75.5px; height: 75.5px; inline-size: 172.594px; width: 172.594px">
              <a
                href="https://ubl.com/"
                style="
                  caret-color: rgb(0, 0, 238);
                  color: rgb(0, 0, 238);
                  column-rule-color: rgb(0, 0, 238);
                  cursor: pointer;
                  outline-color: rgb(0, 0, 238);
                  text-align: -webkit-center;
                  text-decoration: underline solid rgb(0, 0, 238);
                  text-emphasis-color: rgb(0, 0, 238);
                  border-spacing: 2px;
                  -webkit-text-decorations-in-effect: underline;
                  -webkit-text-fill-color: rgb(0, 0, 238);
                  -webkit-text-stroke-color: rgb(0, 0, 238);
                  border-block-color: rgb(0, 0, 238);
                  border-color: rgb(0, 0, 238);
                  border-inline-color: rgb(0, 0, 238);
                "
                ><img
                  border="0"
                  vspace="5"

                  alt="[UBL]"
                  style="
                    caret-color: rgb(0, 0, 238);
                    color: rgb(0, 0, 238);
                    column-rule-color: rgb(0, 0, 238);
                    cursor: pointer;
                    outline-color: rgb(0, 0, 238);
                    perspective-origin: 52.5px 23.5px;
                    text-align: -webkit-center;
                    text-decoration: none solid rgb(0, 0, 238);
                    text-emphasis-color: rgb(0, 0, 238);
                    transform-origin: 52.5px 23.5px;
                    border-spacing: 2px;
                    -webkit-text-decorations-in-effect: underline;
                    -webkit-text-fill-color: rgb(0, 0, 238);
                    -webkit-text-stroke-color: rgb(0, 0, 238);
                    block-size: 47px;
                    border-block-color: rgb(0, 0, 238);
                    border-block-style: solid;
                    border-color: rgb(0, 0, 238);
                    border-style: solid;
                    border-inline-color: rgb(0, 0, 238);
                    border-inline-style: solid;
                    height: 47px;
                    inline-size: 105px;
                    margin-block: 5px;
                    margin-bottom: 5px;
                    margin-top: 5px;
                    width: 105px;
                  " /></a
              ><br style="text-align: -webkit-center; border-spacing: 2px" />
              <a
                href="mailto:ubl@ubl.com"
                style="
                  caret-color: rgb(0, 0, 238);
                  color: rgb(0, 0, 238);
                  column-rule-color: rgb(0, 0, 238);
                  cursor: pointer;
                  outline-color: rgb(0, 0, 238);
                  text-align: -webkit-center;
                  text-decoration: underline solid rgb(0, 0, 238);
                  text-emphasis-color: rgb(0, 0, 238);
                  border-spacing: 2px;
                  -webkit-text-decorations-in-effect: underline;
                  -webkit-text-fill-color: rgb(0, 0, 238);
                  -webkit-text-stroke-color: rgb(0, 0, 238);
                  border-block-color: rgb(0, 0, 238);
                  border-color: rgb(0, 0, 238);
                  border-inline-color: rgb(0, 0, 238);
                "
                >ubl@ubl.com</a
              >
            </td>
            <td valign="TOP" align="CENTER" style="perspective-origin: 99.5469px 38.75px; text-align: -webkit-center; transform-origin: 99.5469px 38.75px; vertical-align: top; border-spacing: 2px; block-size: 75.5px; height: 75.5px; inline-size: 197.094px; width: 197.094px">
              <a
                href="http://www.cid.com/"
                style="
                  caret-color: rgb(0, 0, 238);
                  color: rgb(0, 0, 238);
                  column-rule-color: rgb(0, 0, 238);
                  cursor: pointer;
                  outline-color: rgb(0, 0, 238);
                  text-align: -webkit-center;
                  text-decoration: underline solid rgb(0, 0, 238);
                  text-emphasis-color: rgb(0, 0, 238);
                  border-spacing: 2px;
                  -webkit-text-decorations-in-effect: underline;
                  -webkit-text-fill-color: rgb(0, 0, 238);
                  -webkit-text-stroke-color: rgb(0, 0, 238);
                  border-block-color: rgb(0, 0, 238);
                  border-color: rgb(0, 0, 238);
                  border-inline-color: rgb(0, 0, 238);
                "
                ><img
                  border="0"
                  vspace="5"
                  width="120"
                  height="50"

                  alt="[Creative Internet Design]"
                  style="
                    caret-color: rgb(0, 0, 238);
                    color: rgb(0, 0, 238);
                    column-rule-color: rgb(0, 0, 238);
                    cursor: pointer;
                    outline-color: rgb(0, 0, 238);
                    perspective-origin: 60px 25px;
                    text-align: -webkit-center;
                    text-decoration: none solid rgb(0, 0, 238);
                    text-emphasis-color: rgb(0, 0, 238);
                    transform-origin: 60px 25px;
                    border-spacing: 2px;
                    -webkit-text-decorations-in-effect: underline;
                    -webkit-text-fill-color: rgb(0, 0, 238);
                    -webkit-text-stroke-color: rgb(0, 0, 238);
                    block-size: 50px;
                    border-block-color: rgb(0, 0, 238);
                    border-block-style: solid;
                    border-color: rgb(0, 0, 238);
                    border-style: solid;
                    border-inline-color: rgb(0, 0, 238);
                    border-inline-style: solid;
                    height: 50px;
                    inline-size: 120px;
                    margin-block: 5px;
                    margin-bottom: 5px;
                    margin-top: 5px;
                    width: 120px;
                  "
              /></a>
            </td>
            <td valign="TOP" align="CENTER" style="perspective-origin: 79.1406px 38.75px; text-align: -webkit-center; transform-origin: 79.1523px 38.75px; vertical-align: top; border-spacing: 2px; block-size: 75.5px; height: 75.5px; inline-size: 156.312px; width: 156.312px">
              <a
                href="http://www.sun.com/"
                style="
                  caret-color: rgb(0, 0, 238);
                  color: rgb(0, 0, 238);
                  column-rule-color: rgb(0, 0, 238);
                  cursor: pointer;
                  outline-color: rgb(0, 0, 238);
                  text-align: -webkit-center;
                  text-decoration: underline solid rgb(0, 0, 238);
                  text-emphasis-color: rgb(0, 0, 238);
                  border-spacing: 2px;
                  -webkit-text-decorations-in-effect: underline;
                  -webkit-text-fill-color: rgb(0, 0, 238);
                  -webkit-text-stroke-color: rgb(0, 0, 238);
                  border-block-color: rgb(0, 0, 238);
                  border-color: rgb(0, 0, 238);
                  border-inline-color: rgb(0, 0, 238);
                "
                ><img
                  border="0"
                  vspace="5"
                  width="95"
                  height="48"

                  alt="[Sun Microsystems]"
                  style="
                    caret-color: rgb(0, 0, 238);
                    color: rgb(0, 0, 238);
                    column-rule-color: rgb(0, 0, 238);
                    cursor: pointer;
                    outline-color: rgb(0, 0, 238);
                    perspective-origin: 47.5px 24px;
                    text-align: -webkit-center;
                    text-decoration: none solid rgb(0, 0, 238);
                    text-emphasis-color: rgb(0, 0, 238);
                    transform-origin: 47.5px 24px;
                    border-spacing: 2px;
                    -webkit-text-decorations-in-effect: underline;
                    -webkit-text-fill-color: rgb(0, 0, 238);
                    -webkit-text-stroke-color: rgb(0, 0, 238);
                    block-size: 48px;
                    border-block-color: rgb(0, 0, 238);
                    border-block-style: solid;
                    border-color: rgb(0, 0, 238);
                    border-style: solid;
                    border-inline-color: rgb(0, 0, 238);
                    border-inline-style: solid;
                    height: 48px;
                    inline-size: 95px;
                    margin-block: 5px;
                    margin-bottom: 5px;
                    margin-top: 5px;
                    width: 95px;
                  "
              /></a>
            </td>
          </tr>
        </tbody>
      </table>
    </center>
  </center>
</body>
<style></style>` },
  { filename: "weather component", content: `<div
  class="column col-size-1"
  id="column-544"
  style="
    background-color: rgb(255, 255, 255);
    block-size: 257px;
    border-radius: 4px;
    border-end-end-radius: 4px;
    border-end-start-radius: 4px;
    border-start-end-radius: 4px;
    border-start-start-radius: 4px;
    inset: 0px;
    float: left;
    height: 257px;
    inline-size: 316px;
    inset-block: 0px;
    inset-inline: 0px;
    perspective-origin: 158px 128.5px;
    position: relative;
    transform-origin: 158px 128.5px;
    width: 316px;
  "
>
  <div class="line-weather" data-measurement-group="widget" style="block-size: 113px; inset: 0px; height: 113px; inline-size: 316px; inset-block: 0px; inset-inline: 0px; overflow: hidden; perspective-origin: 158px 56.5px; position: relative; transform-origin: 158px 56.5px; width: 316px">
    <div
      class="line-weather-header"
      style="
        background-color: rgb(243, 243, 243);
        block-size: 30px;
        border-block-color: rgb(35, 81, 130);
        border-color: rgb(35, 81, 130);
        border-inline-color: rgb(35, 81, 130);
        border-start-end-radius: 4px;
        border-start-start-radius: 4px;
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
        caret-color: rgb(35, 81, 130);
        color: rgb(35, 81, 130);
        column-rule-color: rgb(35, 81, 130);
        font-size: 15px;
        height: 30px;
        inline-size: 316px;
        line-height: 31px;
        outline-color: rgb(35, 81, 130);
        perspective-origin: 158px 15px;
        text-decoration: none solid rgb(35, 81, 130);
        text-emphasis-color: rgb(35, 81, 130);
        text-indent: 6px;
        text-transform: uppercase;
        transform-origin: 158px 15px;
        width: 316px;
        -webkit-text-fill-color: rgb(35, 81, 130);
        -webkit-text-stroke-color: rgb(35, 81, 130);
      "
    >
      <div
        class="line-weather-city"
        style="
          block-size: 31px;
          border-block-color: rgb(35, 81, 130);
          border-color: rgb(35, 81, 130);
          border-inline-color: rgb(35, 81, 130);
          caret-color: rgb(35, 81, 130);
          color: rgb(35, 81, 130);
          column-rule-color: rgb(35, 81, 130);
          font-size: 15px;
          height: 31px;
          inline-size: 316px;
          line-height: 31px;
          outline-color: rgb(35, 81, 130);
          perspective-origin: 158px 15.5px;
          text-decoration: none solid rgb(35, 81, 130);
          text-emphasis-color: rgb(35, 81, 130);
          text-indent: 6px;
          text-transform: uppercase;
          transform-origin: 158px 15.5px;
          width: 316px;
          -webkit-text-fill-color: rgb(35, 81, 130);
          -webkit-text-stroke-color: rgb(35, 81, 130);
        "
      >
        <div
          class="selected-city"
          data-id="0"
          style="
            block-size: auto;
            border-block-color: rgb(35, 81, 130);
            border-color: rgb(35, 81, 130);
            border-inline-color: rgb(35, 81, 130);
            caret-color: rgb(35, 81, 130);
            color: rgb(35, 81, 130);
            column-rule-color: rgb(35, 81, 130);
            cursor: pointer;
            display: inline;
            font-size: 15px;
            height: auto;
            inline-size: auto;
            line-height: 31px;
            outline-color: rgb(35, 81, 130);
            perspective-origin: 0px 0px;
            text-decoration: none solid rgb(35, 81, 130);
            text-emphasis-color: rgb(35, 81, 130);
            text-indent: 6px;
            text-transform: uppercase;
            transform-origin: 0px 0px;
            width: auto;
            -webkit-text-fill-color: rgb(35, 81, 130);
            -webkit-text-stroke-color: rgb(35, 81, 130);
          "
        >
          <span
            class="city-name"
            style="
              border-block-color: rgb(35, 81, 130);
              border-color: rgb(35, 81, 130);
              border-inline-color: rgb(35, 81, 130);
              caret-color: rgb(35, 81, 130);
              color: rgb(35, 81, 130);
              column-rule-color: rgb(35, 81, 130);
              cursor: pointer;
              font-size: 15px;
              line-height: 31px;
              outline-color: rgb(35, 81, 130);
              text-decoration: none solid rgb(35, 81, 130);
              text-emphasis-color: rgb(35, 81, 130);
              text-indent: 6px;
              text-transform: uppercase;
              -webkit-text-fill-color: rgb(35, 81, 130);
              -webkit-text-stroke-color: rgb(35, 81, 130);
            "
            >Budapest</span
          >
        </div>
        <a
          href="https://kiderul.startlap.hu/"
          target="_blank"
          rel=""
          class="line-weather-logo pull-right"
          link-type="insite-navigation"
          style="
            background-image: url('https://yiifrontend.p3k.hu/img/weather/kiderul-sl-sprite.png');
            background-position: 0px -45px;
            background-repeat: no-repeat;
            block-size: 30px;
            inset: -3px 8px 86px 254px;
            cursor: pointer;
            display: block;
            font-size: 15px;
            height: 30px;
            inline-size: 54px;
            inset-block: -3px 86px;
            inset-inline: 254px 8px;
            line-height: 31px;
            perspective-origin: 27px 15px;
            position: absolute;
            text-indent: 6px;
            text-transform: uppercase;
            transform-origin: 27px 15px;
            transition-duration: 0.15s;
            transition-property: opacity;
            transition-timing-function: ease-in-out;
            width: 54px;
          "
        ></a>
      </div>
    </div>
    <div class="line-weather-body clearfix" data-id="7" style="block-size: 55px; height: 55px; inline-size: 316px; padding-inline: 6px 7px; padding-left: 6px; padding-right: 7px; perspective-origin: 158px 27.5px; transform-origin: 158px 27.5px; width: 316px">
      <a href="https://kiderul.startlap.hu/" target="_blank" rel="" link-type="insite-navigation" style="block-size: 55px; cursor: pointer; display: block; height: 55px; inline-size: 303px; perspective-origin: 151.5px 27.5px; transform-origin: 151.5px 27.5px; width: 303px">
        <div
          class="container weather-container"
          data-id="6"
          style="
            block-size: 55px;
            border-block-color: rgb(51, 122, 183);
            border-color: rgb(51, 122, 183);
            border-inline-color: rgb(51, 122, 183);
            caret-color: rgb(51, 122, 183);
            color: rgb(51, 122, 183);
            column-rule-color: rgb(51, 122, 183);
            cursor: pointer;
            height: 55px;
            inline-size: 303px;
            outline-color: rgb(51, 122, 183);
            perspective-origin: 151.5px 27.5px;
            text-decoration: none solid rgb(51, 122, 183);
            text-emphasis-color: rgb(51, 122, 183);
            transform-origin: 151.5px 27.5px;
            width: 303px;
            -webkit-text-fill-color: rgb(51, 122, 183);
            -webkit-text-stroke-color: rgb(51, 122, 183);
          "
        >
          <div
            class="col-sm-6 part"
            style="
              block-size: 55px;
              border-block-color: rgb(51, 122, 183);
              border-color: rgb(51, 122, 183);
              border-inline-color: rgb(51, 122, 183);
              inset: 0px;
              caret-color: rgb(51, 122, 183);
              color: rgb(51, 122, 183);
              column-rule-color: rgb(51, 122, 183);
              cursor: pointer;
              float: left;
              height: 55px;
              inline-size: 145px;
              inset-block: 0px;
              inset-inline: 0px;
              min-block-size: 1px;
              min-height: 1px;
              outline-color: rgb(51, 122, 183);
              perspective-origin: 72.5px 27.5px;
              position: relative;
              text-decoration: none solid rgb(51, 122, 183);
              text-emphasis-color: rgb(51, 122, 183);
              transform-origin: 72.5px 27.5px;
              width: 145px;
              -webkit-text-fill-color: rgb(51, 122, 183);
              -webkit-text-stroke-color: rgb(51, 122, 183);
            "
          >
            <img
              class="weather-icon"
              src="https://yiifrontend.p3k.hu/img/weather/ifc9_2.png"
              style="
                block-size: 55px;
                border-block-color: rgb(51, 122, 183);
                border-color: rgb(51, 122, 183);
                border-radius: 7px;
                border-end-end-radius: 7px;
                border-end-start-radius: 7px;
                border-inline-color: rgb(51, 122, 183);
                border-start-end-radius: 7px;
                border-start-start-radius: 7px;
                inset: 1px 0px -1px;
                caret-color: rgb(51, 122, 183);
                color: rgb(51, 122, 183);
                column-rule-color: rgb(51, 122, 183);
                cursor: pointer;
                display: inline-block;
                height: 55px;
                inline-size: 55px;
                inset-block: 1px -1px;
                inset-inline: 0px;
                outline-color: rgb(51, 122, 183);
                perspective-origin: 27.5px 27.5px;
                position: relative;
                text-decoration: none solid rgb(51, 122, 183);
                text-emphasis-color: rgb(51, 122, 183);
                transform-origin: 27.5px 27.5px;
                vertical-align: bottom;
                width: 55px;
                -webkit-text-fill-color: rgb(51, 122, 183);
                -webkit-text-stroke-color: rgb(51, 122, 183);
              "
            />
            <p
              class="temperature current"
              data-id="1"
              style="
                block-size: 49.5625px;
                border-block-color: rgb(64, 109, 151);
                border-color: rgb(64, 109, 151);
                border-inline-color: rgb(64, 109, 151);
                inset: -3px 0px 3px;
                caret-color: rgb(64, 109, 151);
                color: rgb(64, 109, 151);
                column-rule-color: rgb(64, 109, 151);
                cursor: pointer;
                display: inline-block;
                font-size: 34px;
                height: 49.5625px;
                inline-size: 82px;
                inset-block: -3px 3px;
                inset-inline: 0px;
                line-height: 48.5714px;
                margin-block-end: 0px;
                margin-bottom: 0px;
                outline-color: rgb(64, 109, 151);
                padding-block-start: 1px;
                padding-inline: 4px 5px;
                padding-left: 4px;
                padding-right: 5px;
                padding-top: 1px;
                perspective-origin: 41px 24.7812px;
                position: relative;
                text-align: center;
                text-decoration: none solid rgb(64, 109, 151);
                text-emphasis-color: rgb(64, 109, 151);
                transform-origin: 41px 24.7812px;
                width: 82px;
                -webkit-text-fill-color: rgb(64, 109, 151);
                -webkit-text-stroke-color: rgb(64, 109, 151);
              "
            >
              9
            </p>
          </div>
          <div
            class="col-sm-6 part"
            style="
              block-size: 48px;
              border-block-color: rgb(51, 122, 183);
              border-color: rgb(51, 122, 183);
              border-inline-color: rgb(51, 122, 183);
              inset: 0px;
              caret-color: rgb(51, 122, 183);
              color: rgb(51, 122, 183);
              column-rule-color: rgb(51, 122, 183);
              cursor: pointer;
              float: left;
              height: 48px;
              inline-size: 145px;
              inset-block: 0px;
              inset-inline: 0px;
              min-block-size: 1px;
              min-height: 1px;
              outline-color: rgb(51, 122, 183);
              perspective-origin: 72.5px 24px;
              position: relative;
              text-decoration: none solid rgb(51, 122, 183);
              text-emphasis-color: rgb(51, 122, 183);
              transform-origin: 72.5px 24px;
              width: 145px;
              -webkit-text-fill-color: rgb(51, 122, 183);
              -webkit-text-stroke-color: rgb(51, 122, 183);
            "
          >
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
          </div>
        </div>
      </a>
    </div>
    <div class="line-weather-footer" style="background-color: rgb(243, 243, 243); block-size: 28px; height: 28px; inline-size: 316px; perspective-origin: 158px 14px; transform-origin: 158px 14px; width: 316px">
      <a
        href="https://kiderul.startlap.hu/"
        target="_blank"
        rel=""
        link-type="insite-navigation"
        data-id="8"
        style="
          block-size: 28px;
          border-block-color: rgb(64, 109, 151);
          border-color: rgb(64, 109, 151);
          border-inline-color: rgb(64, 109, 151);
          caret-color: rgb(64, 109, 151);
          color: rgb(64, 109, 151);
          column-rule-color: rgb(64, 109, 151);
          cursor: pointer;
          display: block;
          float: right;
          font-weight: 700;
          height: 28px;
          inline-size: 145.078px;
          line-height: 28px;
          outline-color: rgb(64, 109, 151);
          padding-inline-end: 15px;
          padding-right: 15px;
          perspective-origin: 72.5312px 14px;
          text-align: right;
          text-decoration: none solid rgb(64, 109, 151);
          text-emphasis-color: rgb(64, 109, 151);
          transform-origin: 72.5391px 14px;
          width: 145.078px;
          -webkit-text-fill-color: rgb(64, 109, 151);
          -webkit-text-stroke-color: rgb(64, 109, 151);
        "
        >8 napos előrejelzés</a
      >
    </div>
    <div
      class="line-weather-city-selector"
      style="
        background-color: rgb(255, 255, 255);
        block-size: 113px;
        border-block-color: rgb(48, 85, 118);
        border-color: rgb(48, 85, 118);
        border-inline-color: rgb(48, 85, 118);
        inset: -115.25px 0px 115.25px;
        box-shadow: rgba(50, 50, 50, 0.25) 0px 5px 12px -3px;
        caret-color: rgb(48, 85, 118);
        color: rgb(48, 85, 118);
        column-rule-color: rgb(48, 85, 118);
        height: 113px;
        inline-size: 316px;
        inset-block: -115.25px 115.25px;
        inset-inline: 0px;
        outline-color: rgb(48, 85, 118);
        padding-block: 5px 10px;
        padding: 5px 10px 10px;
        padding-inline: 10px;
        perspective-origin: 158px 56.5px;
        position: absolute;
        text-decoration: none solid rgb(48, 85, 118);
        text-emphasis-color: rgb(48, 85, 118);
        transform-origin: 158px 56.5px;
        transition-duration: 0.3s;
        transition-property: top;
        transition-timing-function: ease-in;
        width: 316px;
        -webkit-text-fill-color: rgb(48, 85, 118);
        -webkit-text-stroke-color: rgb(48, 85, 118);
      "
    >
      <p
        style="
          block-size: 18.5625px;
          border-block-color: rgb(48, 85, 118);
          border-color: rgb(48, 85, 118);
          border-inline-color: rgb(48, 85, 118);
          caret-color: rgb(48, 85, 118);
          color: rgb(48, 85, 118);
          column-rule-color: rgb(48, 85, 118);
          height: 18.5625px;
          inline-size: 296px;
          margin-block-start: 10px;
          margin-top: 10px;
          outline-color: rgb(48, 85, 118);
          perspective-origin: 148px 9.28125px;
          text-decoration: none solid rgb(48, 85, 118);
          text-emphasis-color: rgb(48, 85, 118);
          transform-origin: 148px 9.28125px;
          width: 296px;
          -webkit-text-fill-color: rgb(48, 85, 118);
          -webkit-text-stroke-color: rgb(48, 85, 118);
        "
      >
        Melyik település időjárására vagy kíváncsi?
      </p>
      <label
        for="citySelector-2"
        style="
          block-size: 18.5625px;
          border-block-color: rgb(48, 85, 118);
          border-color: rgb(48, 85, 118);
          border-inline-color: rgb(48, 85, 118);
          caret-color: rgb(48, 85, 118);
          color: rgb(48, 85, 118);
          column-rule-color: rgb(48, 85, 118);
          display: block;
          height: 18.5625px;
          inline-size: 296px;
          margin-block-start: 10px;
          margin-top: 10px;
          outline-color: rgb(48, 85, 118);
          perspective-origin: 148px 9.28125px;
          text-decoration: none solid rgb(48, 85, 118);
          text-emphasis-color: rgb(48, 85, 118);
          transform-origin: 148px 9.28125px;
          width: 296px;
          -webkit-text-fill-color: rgb(48, 85, 118);
          -webkit-text-stroke-color: rgb(48, 85, 118);
        "
        >Válassz települést</label
      >
      <select
        id="citySelector-2"
        style="
          block-size: 27px;
          border-block-color: rgb(204, 204, 204);
          border-color: rgb(204, 204, 204);
          border-inline-color: rgb(204, 204, 204);
          caret-color: rgb(0, 0, 0);
          color: rgb(0, 0, 0);
          column-rule-color: rgb(0, 0, 0);
          height: 27px;
          inline-size: 207.188px;
          margin-block-start: 10px;
          margin-top: 10px;
          max-block-size: 250px;
          max-height: 250px;
          max-inline-size: 210px;
          max-width: 210px;
          outline-color: rgb(0, 0, 0);
          padding-block: 1px;
          padding: 1px;
          padding-inline: 1px;
          perspective-origin: 103.594px 13.5px;
          text-decoration: none solid rgb(0, 0, 0);
          text-emphasis-color: rgb(0, 0, 0);
          transform-origin: 103.594px 13.5px;
          width: 207.188px;
          z-index: 100;
          -webkit-text-fill-color: rgb(0, 0, 0);
          -webkit-text-stroke-color: rgb(0, 0, 0);
        "
      >
        <option
          value="Budapest"
          style="
            block-size: auto;
            border-block-color: rgb(0, 0, 0);
            border-color: rgb(0, 0, 0);
            border-inline-color: rgb(0, 0, 0);
            caret-color: rgb(0, 0, 0);
            color: rgb(0, 0, 0);
            column-rule-color: rgb(0, 0, 0);
            cursor: default;
            height: auto;
            inline-size: auto;
            line-height: normal;
            outline-color: rgb(0, 0, 0);
            perspective-origin: 50% 50%;
            text-decoration: none solid rgb(0, 0, 0);
            text-emphasis-color: rgb(0, 0, 0);
            transform-origin: 50% 50%;
            width: auto;
            -webkit-text-fill-color: rgb(0, 0, 0);
            -webkit-text-stroke-color: rgb(0, 0, 0);
          "
        >
          Budapest
        </option>
        <option
          value="Békéscsaba"
          style="
            block-size: auto;
            border-block-color: rgb(0, 0, 0);
            border-color: rgb(0, 0, 0);
            border-inline-color: rgb(0, 0, 0);
            caret-color: rgb(0, 0, 0);
            color: rgb(0, 0, 0);
            column-rule-color: rgb(0, 0, 0);
            cursor: default;
            height: auto;
            inline-size: auto;
            line-height: normal;
            outline-color: rgb(0, 0, 0);
            perspective-origin: 50% 50%;
            text-decoration: none solid rgb(0, 0, 0);
            text-emphasis-color: rgb(0, 0, 0);
            transform-origin: 50% 50%;
            width: auto;
            -webkit-text-fill-color: rgb(0, 0, 0);
            -webkit-text-stroke-color: rgb(0, 0, 0);
          "
        >
          Békéscsaba
        </option>
        <option
          value="Debrecen"
          style="
            block-size: auto;
            border-block-color: rgb(0, 0, 0);
            border-color: rgb(0, 0, 0);
            border-inline-color: rgb(0, 0, 0);
            caret-color: rgb(0, 0, 0);
            color: rgb(0, 0, 0);
            column-rule-color: rgb(0, 0, 0);
            cursor: default;
            height: auto;
            inline-size: auto;
            line-height: normal;
            outline-color: rgb(0, 0, 0);
            perspective-origin: 50% 50%;
            text-decoration: none solid rgb(0, 0, 0);
            text-emphasis-color: rgb(0, 0, 0);
            transform-origin: 50% 50%;
            width: auto;
            -webkit-text-fill-color: rgb(0, 0, 0);
            -webkit-text-stroke-color: rgb(0, 0, 0);
          "
        >
          Debrecen
        </option>
        <option
          value="Eger"
          style="
            block-size: auto;
            border-block-color: rgb(0, 0, 0);
            border-color: rgb(0, 0, 0);
            border-inline-color: rgb(0, 0, 0);
            caret-color: rgb(0, 0, 0);
            color: rgb(0, 0, 0);
            column-rule-color: rgb(0, 0, 0);
            cursor: default;
            height: auto;
            inline-size: auto;
            line-height: normal;
            outline-color: rgb(0, 0, 0);
            perspective-origin: 50% 50%;
            text-decoration: none solid rgb(0, 0, 0);
            text-emphasis-color: rgb(0, 0, 0);
            transform-origin: 50% 50%;
            width: auto;
            -webkit-text-fill-color: rgb(0, 0, 0);
            -webkit-text-stroke-color: rgb(0, 0, 0);
          "
        >
          Eger
        </option>
        <option
          value="Győr"
          style="
            block-size: auto;
            border-block-color: rgb(0, 0, 0);
            border-color: rgb(0, 0, 0);
            border-inline-color: rgb(0, 0, 0);
            caret-color: rgb(0, 0, 0);
            color: rgb(0, 0, 0);
            column-rule-color: rgb(0, 0, 0);
            cursor: default;
            height: auto;
            inline-size: auto;
            line-height: normal;
            outline-color: rgb(0, 0, 0);
            perspective-origin: 50% 50%;
            text-decoration: none solid rgb(0, 0, 0);
            text-emphasis-color: rgb(0, 0, 0);
            transform-origin: 50% 50%;
            width: auto;
            -webkit-text-fill-color: rgb(0, 0, 0);
            -webkit-text-stroke-color: rgb(0, 0, 0);
          "
        >
          Győr
        </option>
        <option
          value="Kaposvár"
          style="
            block-size: auto;
            border-block-color: rgb(0, 0, 0);
            border-color: rgb(0, 0, 0);
            border-inline-color: rgb(0, 0, 0);
            caret-color: rgb(0, 0, 0);
            color: rgb(0, 0, 0);
            column-rule-color: rgb(0, 0, 0);
            cursor: default;
            height: auto;
            inline-size: auto;
            line-height: normal;
            outline-color: rgb(0, 0, 0);
            perspective-origin: 50% 50%;
            text-decoration: none solid rgb(0, 0, 0);
            text-emphasis-color: rgb(0, 0, 0);
            transform-origin: 50% 50%;
            width: auto;
            -webkit-text-fill-color: rgb(0, 0, 0);
            -webkit-text-stroke-color: rgb(0, 0, 0);
          "
        >
          Kaposvár
        </option>
        <option
          value="Kecskemét"
          style="
            block-size: auto;
            border-block-color: rgb(0, 0, 0);
            border-color: rgb(0, 0, 0);
            border-inline-color: rgb(0, 0, 0);
            caret-color: rgb(0, 0, 0);
            color: rgb(0, 0, 0);
            column-rule-color: rgb(0, 0, 0);
            cursor: default;
            height: auto;
            inline-size: auto;
            line-height: normal;
            outline-color: rgb(0, 0, 0);
            perspective-origin: 50% 50%;
            text-decoration: none solid rgb(0, 0, 0);
            text-emphasis-color: rgb(0, 0, 0);
            transform-origin: 50% 50%;
            width: auto;
            -webkit-text-fill-color: rgb(0, 0, 0);
            -webkit-text-stroke-color: rgb(0, 0, 0);
          "
        >
          Kecskemét
        </option>
        <option
          value="Miskolc"
          style="
            block-size: auto;
            border-block-color: rgb(0, 0, 0);
            border-color: rgb(0, 0, 0);
            border-inline-color: rgb(0, 0, 0);
            caret-color: rgb(0, 0, 0);
            color: rgb(0, 0, 0);
            column-rule-color: rgb(0, 0, 0);
            cursor: default;
            height: auto;
            inline-size: auto;
            line-height: normal;
            outline-color: rgb(0, 0, 0);
            perspective-origin: 50% 50%;
            text-decoration: none solid rgb(0, 0, 0);
            text-emphasis-color: rgb(0, 0, 0);
            transform-origin: 50% 50%;
            width: auto;
            -webkit-text-fill-color: rgb(0, 0, 0);
            -webkit-text-stroke-color: rgb(0, 0, 0);
          "
        >
          Miskolc
        </option>
        <option
          value="Nagykanizsa"
          style="
            block-size: auto;
            border-block-color: rgb(0, 0, 0);
            border-color: rgb(0, 0, 0);
            border-inline-color: rgb(0, 0, 0);
            caret-color: rgb(0, 0, 0);
            color: rgb(0, 0, 0);
            column-rule-color: rgb(0, 0, 0);
            cursor: default;
            height: auto;
            inline-size: auto;
            line-height: normal;
            outline-color: rgb(0, 0, 0);
            perspective-origin: 50% 50%;
            text-decoration: none solid rgb(0, 0, 0);
            text-emphasis-color: rgb(0, 0, 0);
            transform-origin: 50% 50%;
            width: auto;
            -webkit-text-fill-color: rgb(0, 0, 0);
            -webkit-text-stroke-color: rgb(0, 0, 0);
          "
        >
          Nagykanizsa
        </option>
        <option
          value="Nyíregyháza"
          style="
            block-size: auto;
            border-block-color: rgb(0, 0, 0);
            border-color: rgb(0, 0, 0);
            border-inline-color: rgb(0, 0, 0);
            caret-color: rgb(0, 0, 0);
            color: rgb(0, 0, 0);
            column-rule-color: rgb(0, 0, 0);
            cursor: default;
            height: auto;
            inline-size: auto;
            line-height: normal;
            outline-color: rgb(0, 0, 0);
            perspective-origin: 50% 50%;
            text-decoration: none solid rgb(0, 0, 0);
            text-emphasis-color: rgb(0, 0, 0);
            transform-origin: 50% 50%;
            width: auto;
            -webkit-text-fill-color: rgb(0, 0, 0);
            -webkit-text-stroke-color: rgb(0, 0, 0);
          "
        >
          Nyíregyháza
        </option>
        <option
          value="Pécs"
          style="
            block-size: auto;
            border-block-color: rgb(0, 0, 0);
            border-color: rgb(0, 0, 0);
            border-inline-color: rgb(0, 0, 0);
            caret-color: rgb(0, 0, 0);
            color: rgb(0, 0, 0);
            column-rule-color: rgb(0, 0, 0);
            cursor: default;
            height: auto;
            inline-size: auto;
            line-height: normal;
            outline-color: rgb(0, 0, 0);
            perspective-origin: 50% 50%;
            text-decoration: none solid rgb(0, 0, 0);
            text-emphasis-color: rgb(0, 0, 0);
            transform-origin: 50% 50%;
            width: auto;
            -webkit-text-fill-color: rgb(0, 0, 0);
            -webkit-text-stroke-color: rgb(0, 0, 0);
          "
        >
          Pécs
        </option>
        <option
          value="Salgótarján"
          style="
            block-size: auto;
            border-block-color: rgb(0, 0, 0);
            border-color: rgb(0, 0, 0);
            border-inline-color: rgb(0, 0, 0);
            caret-color: rgb(0, 0, 0);
            color: rgb(0, 0, 0);
            column-rule-color: rgb(0, 0, 0);
            cursor: default;
            height: auto;
            inline-size: auto;
            line-height: normal;
            outline-color: rgb(0, 0, 0);
            perspective-origin: 50% 50%;
            text-decoration: none solid rgb(0, 0, 0);
            text-emphasis-color: rgb(0, 0, 0);
            transform-origin: 50% 50%;
            width: auto;
            -webkit-text-fill-color: rgb(0, 0, 0);
            -webkit-text-stroke-color: rgb(0, 0, 0);
          "
        >
          Salgótarján
        </option>
        <option
          value="Siófok"
          style="
            block-size: auto;
            border-block-color: rgb(0, 0, 0);
            border-color: rgb(0, 0, 0);
            border-inline-color: rgb(0, 0, 0);
            caret-color: rgb(0, 0, 0);
            color: rgb(0, 0, 0);
            column-rule-color: rgb(0, 0, 0);
            cursor: default;
            height: auto;
            inline-size: auto;
            line-height: normal;
            outline-color: rgb(0, 0, 0);
            perspective-origin: 50% 50%;
            text-decoration: none solid rgb(0, 0, 0);
            text-emphasis-color: rgb(0, 0, 0);
            transform-origin: 50% 50%;
            width: auto;
            -webkit-text-fill-color: rgb(0, 0, 0);
            -webkit-text-stroke-color: rgb(0, 0, 0);
          "
        >
          Siófok
        </option>
        <option
          value="Sopron"
          style="
            block-size: auto;
            border-block-color: rgb(0, 0, 0);
            border-color: rgb(0, 0, 0);
            border-inline-color: rgb(0, 0, 0);
            caret-color: rgb(0, 0, 0);
            color: rgb(0, 0, 0);
            column-rule-color: rgb(0, 0, 0);
            cursor: default;
            height: auto;
            inline-size: auto;
            line-height: normal;
            outline-color: rgb(0, 0, 0);
            perspective-origin: 50% 50%;
            text-decoration: none solid rgb(0, 0, 0);
            text-emphasis-color: rgb(0, 0, 0);
            transform-origin: 50% 50%;
            width: auto;
            -webkit-text-fill-color: rgb(0, 0, 0);
            -webkit-text-stroke-color: rgb(0, 0, 0);
          "
        >
          Sopron
        </option>
        <option
          value="Szeged"
          style="
            block-size: auto;
            border-block-color: rgb(0, 0, 0);
            border-color: rgb(0, 0, 0);
            border-inline-color: rgb(0, 0, 0);
            caret-color: rgb(0, 0, 0);
            color: rgb(0, 0, 0);
            column-rule-color: rgb(0, 0, 0);
            cursor: default;
            height: auto;
            inline-size: auto;
            line-height: normal;
            outline-color: rgb(0, 0, 0);
            perspective-origin: 50% 50%;
            text-decoration: none solid rgb(0, 0, 0);
            text-emphasis-color: rgb(0, 0, 0);
            transform-origin: 50% 50%;
            width: auto;
            -webkit-text-fill-color: rgb(0, 0, 0);
            -webkit-text-stroke-color: rgb(0, 0, 0);
          "
        >
          Szeged
        </option>
        <option
          value="Szekszárd"
          style="
            block-size: auto;
            border-block-color: rgb(0, 0, 0);
            border-color: rgb(0, 0, 0);
            border-inline-color: rgb(0, 0, 0);
            caret-color: rgb(0, 0, 0);
            color: rgb(0, 0, 0);
            column-rule-color: rgb(0, 0, 0);
            cursor: default;
            height: auto;
            inline-size: auto;
            line-height: normal;
            outline-color: rgb(0, 0, 0);
            perspective-origin: 50% 50%;
            text-decoration: none solid rgb(0, 0, 0);
            text-emphasis-color: rgb(0, 0, 0);
            transform-origin: 50% 50%;
            width: auto;
            -webkit-text-fill-color: rgb(0, 0, 0);
            -webkit-text-stroke-color: rgb(0, 0, 0);
          "
        >
          Szekszárd
        </option>
        <option
          value="Székesfehérvár"
          style="
            block-size: auto;
            border-block-color: rgb(0, 0, 0);
            border-color: rgb(0, 0, 0);
            border-inline-color: rgb(0, 0, 0);
            caret-color: rgb(0, 0, 0);
            color: rgb(0, 0, 0);
            column-rule-color: rgb(0, 0, 0);
            cursor: default;
            height: auto;
            inline-size: auto;
            line-height: normal;
            outline-color: rgb(0, 0, 0);
            perspective-origin: 50% 50%;
            text-decoration: none solid rgb(0, 0, 0);
            text-emphasis-color: rgb(0, 0, 0);
            transform-origin: 50% 50%;
            width: auto;
            -webkit-text-fill-color: rgb(0, 0, 0);
            -webkit-text-stroke-color: rgb(0, 0, 0);
          "
        >
          Székesfehérvár
        </option>
        <option
          value="Szolnok"
          style="
            block-size: auto;
            border-block-color: rgb(0, 0, 0);
            border-color: rgb(0, 0, 0);
            border-inline-color: rgb(0, 0, 0);
            caret-color: rgb(0, 0, 0);
            color: rgb(0, 0, 0);
            column-rule-color: rgb(0, 0, 0);
            cursor: default;
            height: auto;
            inline-size: auto;
            line-height: normal;
            outline-color: rgb(0, 0, 0);
            perspective-origin: 50% 50%;
            text-decoration: none solid rgb(0, 0, 0);
            text-emphasis-color: rgb(0, 0, 0);
            transform-origin: 50% 50%;
            width: auto;
            -webkit-text-fill-color: rgb(0, 0, 0);
            -webkit-text-stroke-color: rgb(0, 0, 0);
          "
        >
          Szolnok
        </option>
        <option
          value="Szombathely"
          style="
            block-size: auto;
            border-block-color: rgb(0, 0, 0);
            border-color: rgb(0, 0, 0);
            border-inline-color: rgb(0, 0, 0);
            caret-color: rgb(0, 0, 0);
            color: rgb(0, 0, 0);
            column-rule-color: rgb(0, 0, 0);
            cursor: default;
            height: auto;
            inline-size: auto;
            line-height: normal;
            outline-color: rgb(0, 0, 0);
            perspective-origin: 50% 50%;
            text-decoration: none solid rgb(0, 0, 0);
            text-emphasis-color: rgb(0, 0, 0);
            transform-origin: 50% 50%;
            width: auto;
            -webkit-text-fill-color: rgb(0, 0, 0);
            -webkit-text-stroke-color: rgb(0, 0, 0);
          "
        >
          Szombathely
        </option>
        <option
          value="Tatabánya"
          style="
            block-size: auto;
            border-block-color: rgb(0, 0, 0);
            border-color: rgb(0, 0, 0);
            border-inline-color: rgb(0, 0, 0);
            caret-color: rgb(0, 0, 0);
            color: rgb(0, 0, 0);
            column-rule-color: rgb(0, 0, 0);
            cursor: default;
            height: auto;
            inline-size: auto;
            line-height: normal;
            outline-color: rgb(0, 0, 0);
            perspective-origin: 50% 50%;
            text-decoration: none solid rgb(0, 0, 0);
            text-emphasis-color: rgb(0, 0, 0);
            transform-origin: 50% 50%;
            width: auto;
            -webkit-text-fill-color: rgb(0, 0, 0);
            -webkit-text-stroke-color: rgb(0, 0, 0);
          "
        >
          Tatabánya
        </option>
        <option
          value="Veszprém"
          style="
            block-size: auto;
            border-block-color: rgb(0, 0, 0);
            border-color: rgb(0, 0, 0);
            border-inline-color: rgb(0, 0, 0);
            caret-color: rgb(0, 0, 0);
            color: rgb(0, 0, 0);
            column-rule-color: rgb(0, 0, 0);
            cursor: default;
            height: auto;
            inline-size: auto;
            line-height: normal;
            outline-color: rgb(0, 0, 0);
            perspective-origin: 50% 50%;
            text-decoration: none solid rgb(0, 0, 0);
            text-emphasis-color: rgb(0, 0, 0);
            transform-origin: 50% 50%;
            width: auto;
            -webkit-text-fill-color: rgb(0, 0, 0);
            -webkit-text-stroke-color: rgb(0, 0, 0);
          "
        >
          Veszprém
        </option>
        <option
          value="Zalaegerszeg"
          style="
            block-size: auto;
            border-block-color: rgb(0, 0, 0);
            border-color: rgb(0, 0, 0);
            border-inline-color: rgb(0, 0, 0);
            caret-color: rgb(0, 0, 0);
            color: rgb(0, 0, 0);
            column-rule-color: rgb(0, 0, 0);
            cursor: default;
            height: auto;
            inline-size: auto;
            line-height: normal;
            outline-color: rgb(0, 0, 0);
            perspective-origin: 50% 50%;
            text-decoration: none solid rgb(0, 0, 0);
            text-emphasis-color: rgb(0, 0, 0);
            transform-origin: 50% 50%;
            width: auto;
            -webkit-text-fill-color: rgb(0, 0, 0);
            -webkit-text-stroke-color: rgb(0, 0, 0);
          "
        >
          Zalaegerszeg
        </option>
      </select>
      <button
        class="btn city-selector-button"
        type="button"
        style="
          background-color: rgb(64, 109, 151);
          block-size: 27px;
          border-block: 0px none rgb(255, 255, 255);
          border-color: rgb(255, 255, 255);
          border-style: none;
          border-width: 0px;
          border-inline: 0px none rgb(255, 255, 255);
          caret-color: rgb(255, 255, 255);
          color: rgb(255, 255, 255);
          column-rule-color: rgb(255, 255, 255);
          font-size: 14px;
          height: 27px;
          inline-size: 80.7812px;
          line-height: 26px;
          margin-block-start: 10px;
          margin-top: 10px;
          outline-color: rgb(255, 255, 255);
          padding-block: 0px;
          padding: 0px 8.875px;
          padding-inline: 8.875px;
          perspective-origin: 40.3906px 13.5px;
          text-decoration: none solid rgb(255, 255, 255);
          text-emphasis-color: rgb(255, 255, 255);
          text-wrap-mode: nowrap;
          touch-action: manipulation;
          transform-origin: 40.3906px 13.5px;
          user-select: none;
          vertical-align: top;
          width: 80.7812px;
          -webkit-text-fill-color: rgb(255, 255, 255);
          -webkit-text-stroke-color: rgb(255, 255, 255);
        "
      >
        Elmentem
      </button>
    </div>
  </div>
  <a
    class="line link image-link image-link-small image-link-small-155 clearfix link line-rss random-link noad active"
    href="https://kiderul.startlap.hu/elorejelzes/melegebben-kell-oltozkodnunk-a-kovetkezo-napokban/"
    title="Melegebben kell öltözködnünk a következő napokban"
    link-type="insite-navigation"
    data-measurement-group="kepes"
    target="_blank"
    smash-key="a3133d7ad1f9713e889fb46a2322900b"
    id="smash-link-900"
    data-ajax-url="https://www.hirstart.hu/site/relocate.php?rssid=400&amp;rsspid=1&amp;ctype=rss&amp;id=33954235&amp;chk=97c6b4b4de5ce3aee4fa89f9eb61c72e&amp;url=https%3A%2F%2Fkiderul.startlap.hu%2Felorejelzes%2Fmelegebben-kell-oltozkodnunk-a-kovetkezo-napokban%2F&amp;r=0"
    data-id="10"
    style="
      background-color: rgb(255, 255, 255);
      block-size: 111px;
      border-block-end: 1px solid rgb(239, 234, 219);
      border-block-start-color: rgb(64, 109, 151);
      border-color: rgb(64, 109, 151) rgb(64, 109, 151) rgb(239, 234, 219);
      border-bottom-style: solid;
      border-bottom-width: 1px;
      border-inline-color: rgb(64, 109, 151);
      caret-color: rgb(64, 109, 151);
      color: rgb(64, 109, 151);
      column-rule-color: rgb(64, 109, 151);
      cursor: pointer;
      display: block;
      font-size: 14px;
      font-weight: 700;
      height: 111px;
      inline-size: 316px;
      line-height: 16px;
      max-block-size: 122px;
      max-height: 122px;
      min-block-size: 90px;
      min-height: 90px;
      outline-color: rgb(64, 109, 151);
      overflow: hidden;
      padding-block: 10px;
      padding: 10px;
      padding-inline: 10px;
      perspective-origin: 158px 55.5px;
      text-decoration: none solid rgb(64, 109, 151);
      text-emphasis-color: rgb(64, 109, 151);
      text-overflow: ellipsis;
      transform-origin: 158px 55.5px;
      width: 316px;
      -webkit-text-fill-color: rgb(64, 109, 151);
      -webkit-text-stroke-color: rgb(64, 109, 151);
    "
  >
    <img
      src="https://image-api.startlap.hu/startlap/rss/2024/11/07/9b127253e782fad848cc2fb9a293a7f5_44fbb6b428c9d253fa5042bb88a6d75a.jpg?p=small_155&amp;s=d79689481f1b797375f7a91545e115a0"
      class="lazy-load loaded"
      style="
        block-size: 90px;
        border-block-color: rgb(64, 109, 151);
        border-color: rgb(64, 109, 151);
        border-radius: 7px;
        border-end-end-radius: 7px;
        border-end-start-radius: 7px;
        border-inline-color: rgb(64, 109, 151);
        border-start-end-radius: 7px;
        border-start-start-radius: 7px;
        caret-color: rgb(64, 109, 151);
        color: rgb(64, 109, 151);
        column-rule-color: rgb(64, 109, 151);
        cursor: pointer;
        display: block;
        float: left;
        font-size: 14px;
        font-weight: 700;
        height: 90px;
        inline-size: 155px;
        line-height: 16px;
        margin-inline-end: 10px;
        margin-right: 10px;
        outline-color: rgb(64, 109, 151);
        perspective-origin: 77.5px 45px;
        text-decoration: none solid rgb(64, 109, 151);
        text-emphasis-color: rgb(64, 109, 151);
        transform-origin: 77.5px 45px;
        transition-duration: 1s;
        transition-property: opacity;
        width: 155px;
        -webkit-text-fill-color: rgb(64, 109, 151);
        -webkit-text-stroke-color: rgb(64, 109, 151);
      "
    />
    <div
      class="title"
      data-id="9"
      style="
        block-size: 88px;
        border-block: 1px solid rgba(0, 0, 0, 0);
        border-color: rgba(0, 0, 0, 0);
        border-style: solid;
        border-width: 1px;
        border-inline: 1px solid rgba(0, 0, 0, 0);
        inset: 0px;
        caret-color: rgb(64, 109, 151);
        color: rgb(64, 109, 151);
        column-rule-color: rgb(64, 109, 151);
        cursor: pointer;
        font-size: 14px;
        font-weight: 700;
        height: 88px;
        inline-size: 131px;
        inset-block: 0px;
        inset-inline: 0px;
        line-height: 16px;
        max-block-size: 90px;
        max-height: 90px;
        min-block-size: 88px;
        min-height: 88px;
        outline-color: rgb(64, 109, 151);
        overflow: hidden;
        padding-block-start: 2px;
        padding-top: 2px;
        perspective-origin: 65.5px 44px;
        position: relative;
        text-decoration: none solid rgb(64, 109, 151);
        text-emphasis-color: rgb(64, 109, 151);
        transform-origin: 65.5px 44px;
        width: 131px;
        -webkit-text-fill-color: rgb(64, 109, 151);
        -webkit-text-stroke-color: rgb(64, 109, 151);
      "
    >
      Melegebben kell öltözködnünk a következő napokban
    </div>
    <div
      class="link-info"
      style="
        block-size: auto;
        border-block-color: rgb(64, 109, 151);
        border-color: rgb(64, 109, 151);
        border-inline-color: rgb(64, 109, 151);
        caret-color: rgb(64, 109, 151);
        color: rgb(64, 109, 151);
        column-rule-color: rgb(64, 109, 151);
        cursor: pointer;
        display: none;
        font-size: 14px;
        font-weight: 700;
        height: auto;
        inline-size: auto;
        line-height: 16px;
        outline-color: rgb(64, 109, 151);
        perspective-origin: 50% 50%;
        text-decoration: none solid rgb(64, 109, 151);
        text-emphasis-color: rgb(64, 109, 151);
        transform-origin: 50% 50%;
        width: auto;
        -webkit-text-fill-color: rgb(64, 109, 151);
        -webkit-text-stroke-color: rgb(64, 109, 151);
      "
    >
      <span
        class="link-source"
        style="
          border-block-color: rgb(64, 109, 151);
          border-color: rgb(64, 109, 151);
          border-inline-color: rgb(64, 109, 151);
          caret-color: rgb(64, 109, 151);
          color: rgb(64, 109, 151);
          column-rule-color: rgb(64, 109, 151);
          cursor: pointer;
          font-size: 14px;
          font-weight: 700;
          line-height: 16px;
          outline-color: rgb(64, 109, 151);
          perspective-origin: 50% 50%;
          text-decoration: none solid rgb(64, 109, 151);
          text-emphasis-color: rgb(64, 109, 151);
          transform-origin: 50% 50%;
          -webkit-text-fill-color: rgb(64, 109, 151);
          -webkit-text-stroke-color: rgb(64, 109, 151);
        "
        >kiderul.startlap.hu</span
      >
      <span
        class="link-date"
        style="
          border-block-color: rgb(64, 109, 151);
          border-color: rgb(64, 109, 151);
          border-inline-color: rgb(64, 109, 151);
          caret-color: rgb(64, 109, 151);
          color: rgb(64, 109, 151);
          column-rule-color: rgb(64, 109, 151);
          cursor: pointer;
          font-size: 14px;
          font-weight: 700;
          line-height: 16px;
          outline-color: rgb(64, 109, 151);
          perspective-origin: 50% 50%;
          text-decoration: none solid rgb(64, 109, 151);
          text-emphasis-color: rgb(64, 109, 151);
          transform-origin: 50% 50%;
          -webkit-text-fill-color: rgb(64, 109, 151);
          -webkit-text-stroke-color: rgb(64, 109, 151);
        "
        >14:05</span
      >
    </div>
  </a>
  <a
    class="line link link-text"
    href="https://kiderul.startlap.hu/idojaras-hirek/"
    title="Friss időjáráshírek: kiderul.hu"
    link-type="insite-navigation"
    data-measurement-group="link"
    target="_blank"
    style="
      background-color: rgb(255, 255, 255);
      block-size: 33px;
      border-block-end: 1px solid rgba(0, 0, 0, 0);
      border-block-start-color: rgb(64, 109, 151);
      border-color: rgb(64, 109, 151) rgb(64, 109, 151) rgba(0, 0, 0, 0);
      border-radius: 4px;
      border-bottom-style: solid;
      border-bottom-width: 1px;
      border-end-end-radius: 4px;
      border-end-start-radius: 4px;
      border-inline-color: rgb(64, 109, 151);
      border-start-end-radius: 4px;
      border-start-start-radius: 4px;
      caret-color: rgb(64, 109, 151);
      color: rgb(64, 109, 151);
      column-rule-color: rgb(64, 109, 151);
      cursor: pointer;
      display: block;
      font-weight: 700;
      height: 33px;
      inline-size: 316px;
      line-height: 33px;
      outline-color: rgb(64, 109, 151);
      overflow: hidden;
      padding-inline-start: 10px;
      padding-left: 10px;
      perspective-origin: 158px 16.5px;
      text-decoration: none solid rgb(64, 109, 151);
      text-emphasis-color: rgb(64, 109, 151);
      text-overflow: ellipsis;
      text-wrap-mode: nowrap;
      transform-origin: 158px 16.5px;
      width: 316px;
      -webkit-text-fill-color: rgb(64, 109, 151);
      -webkit-text-stroke-color: rgb(64, 109, 151);
    "
  >
    Friss időjáráshírek: kiderul.hu
  </a>
</div>
<style>
  [data-id="0"]::after {
    background-image: url("https://yiifrontend.p3k.hu/img/weather/kiderul-sl-sprite.png");
    background-position: 12px 114px;
    block-size: 8px;
    border-block-end-color: rgb(35, 81, 130);
    border-block-start-color: rgb(35, 81, 130);
    border-bottom-color: rgb(35, 81, 130);
    border-inline-end-color: rgb(35, 81, 130);
    border-inline-start-color: rgb(35, 81, 130);
    border-left-color: rgb(35, 81, 130);
    border-right-color: rgb(35, 81, 130);
    border-top-color: rgb(35, 81, 130);
    bottom: 0px;
    caret-color: rgb(35, 81, 130);
    color: rgb(35, 81, 130);
    column-rule-color: rgb(35, 81, 130);
    content: "";
    cursor: pointer;
    display: inline-block;
    font-size: 15px;
    height: 8px;
    inline-size: 12px;
    inset-block-end: 0px;
    inset-block-start: 0px;
    inset-inline-end: 0px;
    inset-inline-start: 0px;
    left: 0px;
    line-height: 31px;
    outline-color: rgb(35, 81, 130);
    perspective-origin: 6px 4px;
    position: relative;
    right: 0px;
    text-decoration: none solid rgb(35, 81, 130);
    text-decoration-color: rgb(35, 81, 130);
    text-emphasis-color: rgb(35, 81, 130);
    text-indent: 6px;
    text-transform: uppercase;
    top: 0px;
    transform-origin: 6px 4px;
    width: 12px;
    -webkit-text-fill-color: rgb(35, 81, 130);
    -webkit-text-stroke-color: rgb(35, 81, 130);
  }
  [data-id="1"]::after {
    border-block-end-color: rgb(64, 109, 151);
    border-block-start-color: rgb(64, 109, 151);
    border-bottom-color: rgb(64, 109, 151);
    border-inline-end-color: rgb(64, 109, 151);
    border-inline-start-color: rgb(64, 109, 151);
    border-left-color: rgb(64, 109, 151);
    border-right-color: rgb(64, 109, 151);
    border-top-color: rgb(64, 109, 151);
    caret-color: rgb(64, 109, 151);
    color: rgb(64, 109, 151);
    column-rule-color: rgb(64, 109, 151);
    content: "° C";
    cursor: pointer;
    font-size: 25px;
    line-height: 48.5714px;
    outline-color: rgb(64, 109, 151);
    perspective-origin: 0px 0px;
    text-align: center;
    text-decoration: none solid rgb(64, 109, 151);
    text-decoration-color: rgb(64, 109, 151);
    text-emphasis-color: rgb(64, 109, 151);
    transform-origin: 0px 0px;
    -webkit-text-fill-color: rgb(64, 109, 151);
    -webkit-text-stroke-color: rgb(64, 109, 151);
  }
  [data-id="2"]::after {
    border-block-end-color: rgb(255, 24, 0);
    border-block-start-color: rgb(255, 24, 0);
    border-bottom-color: rgb(255, 24, 0);
    border-collapse: collapse;
    border-inline-end-color: rgb(255, 24, 0);
    border-inline-start-color: rgb(255, 24, 0);
    border-left-color: rgb(255, 24, 0);
    border-right-color: rgb(255, 24, 0);
    border-top-color: rgb(255, 24, 0);
    caret-color: rgb(255, 24, 0);
    color: rgb(255, 24, 0);
    column-rule-color: rgb(255, 24, 0);
    content: "° C";
    cursor: pointer;
    font-size: 12px;
    font-weight: 700;
    line-height: 17.1429px;
    outline-color: rgb(255, 24, 0);
    perspective-origin: 0px 0px;
    text-align: right;
    text-decoration: none solid rgb(255, 24, 0);
    text-decoration-color: rgb(255, 24, 0);
    text-emphasis-color: rgb(255, 24, 0);
    transform-origin: 0px 0px;
    -webkit-text-fill-color: rgb(255, 24, 0);
    -webkit-text-stroke-color: rgb(255, 24, 0);
  }
  [data-id="3"]::after {
    border-block-end-color: rgb(85, 85, 85);
    border-block-start-color: rgb(85, 85, 85);
    border-bottom-color: rgb(85, 85, 85);
    border-collapse: collapse;
    border-inline-end-color: rgb(85, 85, 85);
    border-inline-start-color: rgb(85, 85, 85);
    border-left-color: rgb(85, 85, 85);
    border-right-color: rgb(85, 85, 85);
    border-top-color: rgb(85, 85, 85);
    caret-color: rgb(64, 109, 151);
    color: rgb(85, 85, 85);
    column-rule-color: rgb(85, 85, 85);
    content: " mm";
    cursor: pointer;
    font-size: 12px;
    line-height: 19px;
    outline-color: rgb(85, 85, 85);
    perspective-origin: 0px 0px;
    text-align: left;
    text-decoration: none solid rgb(85, 85, 85);
    text-decoration-color: rgb(85, 85, 85);
    text-emphasis-color: rgb(64, 109, 151);
    text-wrap-mode: nowrap;
    transform-origin: 0px 0px;
    -webkit-text-fill-color: rgb(64, 109, 151);
    -webkit-text-stroke-color: rgb(64, 109, 151);
  }
  [data-id="4"]::after {
    border-block-end-color: rgb(0, 120, 220);
    border-block-start-color: rgb(0, 120, 220);
    border-bottom-color: rgb(0, 120, 220);
    border-collapse: collapse;
    border-inline-end-color: rgb(0, 120, 220);
    border-inline-start-color: rgb(0, 120, 220);
    border-left-color: rgb(0, 120, 220);
    border-right-color: rgb(0, 120, 220);
    border-top-color: rgb(0, 120, 220);
    caret-color: rgb(0, 120, 220);
    color: rgb(0, 120, 220);
    column-rule-color: rgb(0, 120, 220);
    content: "° C";
    cursor: pointer;
    font-size: 12px;
    font-weight: 700;
    line-height: 17.1429px;
    outline-color: rgb(0, 120, 220);
    perspective-origin: 0px 0px;
    text-align: right;
    text-decoration: none solid rgb(0, 120, 220);
    text-decoration-color: rgb(0, 120, 220);
    text-emphasis-color: rgb(0, 120, 220);
    transform-origin: 0px 0px;
    -webkit-text-fill-color: rgb(0, 120, 220);
    -webkit-text-stroke-color: rgb(0, 120, 220);
  }
  [data-id="5"]::after {
    border-block-end-color: rgb(85, 85, 85);
    border-block-start-color: rgb(85, 85, 85);
    border-bottom-color: rgb(85, 85, 85);
    border-collapse: collapse;
    border-inline-end-color: rgb(85, 85, 85);
    border-inline-start-color: rgb(85, 85, 85);
    border-left-color: rgb(85, 85, 85);
    border-right-color: rgb(85, 85, 85);
    border-top-color: rgb(85, 85, 85);
    caret-color: rgb(64, 109, 151);
    color: rgb(85, 85, 85);
    column-rule-color: rgb(85, 85, 85);
    content: " km/h";
    cursor: pointer;
    font-size: 12px;
    line-height: 19px;
    outline-color: rgb(85, 85, 85);
    perspective-origin: 0px 0px;
    text-align: left;
    text-decoration: none solid rgb(85, 85, 85);
    text-decoration-color: rgb(85, 85, 85);
    text-emphasis-color: rgb(64, 109, 151);
    text-wrap-mode: nowrap;
    transform-origin: 0px 0px;
    -webkit-text-fill-color: rgb(64, 109, 151);
    -webkit-text-stroke-color: rgb(64, 109, 151);
  }
  [data-id="6"]::after {
    block-size: 0px;
    border-block-end-color: rgb(51, 122, 183);
    border-block-start-color: rgb(51, 122, 183);
    border-bottom-color: rgb(51, 122, 183);
    border-inline-end-color: rgb(51, 122, 183);
    border-inline-start-color: rgb(51, 122, 183);
    border-left-color: rgb(51, 122, 183);
    border-right-color: rgb(51, 122, 183);
    border-top-color: rgb(51, 122, 183);
    caret-color: rgb(51, 122, 183);
    clear: both;
    color: rgb(51, 122, 183);
    column-rule-color: rgb(51, 122, 183);
    content: " ";
    cursor: pointer;
    display: table;
    height: 0px;
    inline-size: 0px;
    outline-color: rgb(51, 122, 183);
    perspective-origin: 0px 0px;
    text-decoration: none solid rgb(51, 122, 183);
    text-decoration-color: rgb(51, 122, 183);
    text-emphasis-color: rgb(51, 122, 183);
    transform-origin: 0px 0px;
    width: 0px;
    -webkit-text-fill-color: rgb(51, 122, 183);
    -webkit-text-stroke-color: rgb(51, 122, 183);
  }
  [data-id="6"]::before {
    block-size: 0px;
    border-block-end-color: rgb(51, 122, 183);
    border-block-start-color: rgb(51, 122, 183);
    border-bottom-color: rgb(51, 122, 183);
    border-inline-end-color: rgb(51, 122, 183);
    border-inline-start-color: rgb(51, 122, 183);
    border-left-color: rgb(51, 122, 183);
    border-right-color: rgb(51, 122, 183);
    border-top-color: rgb(51, 122, 183);
    caret-color: rgb(51, 122, 183);
    color: rgb(51, 122, 183);
    column-rule-color: rgb(51, 122, 183);
    content: " ";
    cursor: pointer;
    display: table;
    height: 0px;
    inline-size: 0px;
    outline-color: rgb(51, 122, 183);
    perspective-origin: 0px 0px;
    text-decoration: none solid rgb(51, 122, 183);
    text-decoration-color: rgb(51, 122, 183);
    text-emphasis-color: rgb(51, 122, 183);
    transform-origin: 0px 0px;
    width: 0px;
    -webkit-text-fill-color: rgb(51, 122, 183);
    -webkit-text-stroke-color: rgb(51, 122, 183);
  }
  [data-id="7"]::after {
    block-size: 0px;
    clear: both;
    content: " ";
    display: table;
    height: 0px;
    inline-size: 0px;
    perspective-origin: 0px 0px;
    transform-origin: 0px 0px;
    width: 0px;
  }
  [data-id="7"]::before {
    block-size: 0px;
    content: " ";
    display: table;
    height: 0px;
    inline-size: 0px;
    perspective-origin: 0px 0px;
    transform-origin: 0px 0px;
    width: 0px;
  }
  [data-id="8"]::after {
    border-block-end-color: rgb(64, 109, 151);
    border-block-start-color: rgb(64, 109, 151);
    border-bottom-color: rgb(64, 109, 151);
    border-inline-end-color: rgb(64, 109, 151);
    border-inline-start-color: rgb(64, 109, 151);
    border-left-color: rgb(64, 109, 151);
    border-right-color: rgb(64, 109, 151);
    border-top-color: rgb(64, 109, 151);
    caret-color: rgb(64, 109, 151);
    color: rgb(64, 109, 151);
    column-rule-color: rgb(64, 109, 151);
    content: " »";
    cursor: pointer;
    font-weight: 700;
    line-height: 28px;
    outline-color: rgb(64, 109, 151);
    perspective-origin: 0px 0px;
    text-align: right;
    text-decoration: none solid rgb(64, 109, 151);
    text-decoration-color: rgb(64, 109, 151);
    text-emphasis-color: rgb(64, 109, 151);
    transform-origin: 0px 0px;
    -webkit-text-fill-color: rgb(64, 109, 151);
    -webkit-text-stroke-color: rgb(64, 109, 151);
  }
  [data-id="9"]::after {
    background-image: linear-gradient(rgba(255, 255, 255, 0) 0px, rgb(255, 255, 255));
    block-size: 30px;
    border-block-end-color: rgb(64, 109, 151);
    border-block-start-color: rgb(64, 109, 151);
    border-bottom-color: rgb(64, 109, 151);
    border-inline-end-color: rgb(64, 109, 151);
    border-inline-start-color: rgb(64, 109, 151);
    border-left-color: rgb(64, 109, 151);
    border-right-color: rgb(64, 109, 151);
    border-top-color: rgb(64, 109, 151);
    bottom: 0px;
    caret-color: rgb(64, 109, 151);
    color: rgb(64, 109, 151);
    column-rule-color: rgb(64, 109, 151);
    content: "";
    cursor: pointer;
    display: block;
    font-size: 14px;
    font-weight: 700;
    height: 30px;
    inline-size: 129px;
    inset-block-end: 0px;
    inset-block-start: 56px;
    inset-inline-end: 0px;
    inset-inline-start: 0px;
    left: 0px;
    line-height: 16px;
    outline-color: rgb(64, 109, 151);
    perspective-origin: 64.5px 15px;
    position: absolute;
    right: 0px;
    text-decoration: none solid rgb(64, 109, 151);
    text-decoration-color: rgb(64, 109, 151);
    text-emphasis-color: rgb(64, 109, 151);
    top: 56px;
    transform-origin: 64.5px 15px;
    width: 129px;
    -webkit-text-fill-color: rgb(64, 109, 151);
    -webkit-text-stroke-color: rgb(64, 109, 151);
  }
  [data-id="10"]::after {
    border-block-end-color: rgb(64, 109, 151);
    border-block-start-color: rgb(64, 109, 151);
    border-bottom-color: rgb(64, 109, 151);
    border-inline-end-color: rgb(64, 109, 151);
    border-inline-start-color: rgb(64, 109, 151);
    border-left-color: rgb(64, 109, 151);
    border-right-color: rgb(64, 109, 151);
    border-top-color: rgb(64, 109, 151);
    caret-color: rgb(64, 109, 151);
    clear: both;
    color: rgb(64, 109, 151);
    column-rule-color: rgb(64, 109, 151);
    content: " ";
    cursor: pointer;
    display: none;
    font-size: 14px;
    font-weight: 700;
    line-height: 16px;
    outline-color: rgb(64, 109, 151);
    text-decoration: none solid rgb(64, 109, 151);
    text-decoration-color: rgb(64, 109, 151);
    text-emphasis-color: rgb(64, 109, 151);
    -webkit-text-fill-color: rgb(64, 109, 151);
    -webkit-text-stroke-color: rgb(64, 109, 151);
  }
  [data-id="10"]::before {
    block-size: 0px;
    border-block-end-color: rgb(64, 109, 151);
    border-block-start-color: rgb(64, 109, 151);
    border-bottom-color: rgb(64, 109, 151);
    border-inline-end-color: rgb(64, 109, 151);
    border-inline-start-color: rgb(64, 109, 151);
    border-left-color: rgb(64, 109, 151);
    border-right-color: rgb(64, 109, 151);
    border-top-color: rgb(64, 109, 151);
    caret-color: rgb(64, 109, 151);
    color: rgb(64, 109, 151);
    column-rule-color: rgb(64, 109, 151);
    content: " ";
    cursor: pointer;
    display: table;
    font-size: 14px;
    font-weight: 700;
    height: 0px;
    inline-size: 0px;
    line-height: 16px;
    outline-color: rgb(64, 109, 151);
    perspective-origin: 0px 0px;
    text-decoration: none solid rgb(64, 109, 151);
    text-decoration-color: rgb(64, 109, 151);
    text-emphasis-color: rgb(64, 109, 151);
    transform-origin: 0px 0px;
    width: 0px;
    -webkit-text-fill-color: rgb(64, 109, 151);
    -webkit-text-stroke-color: rgb(64, 109, 151);
  }
</style>` }
  ];

  return (
    <EngineIssueFailure
      ruleId={ruleId}
      title={title}
      description={description}
      helpText={helpText}
      fixSteps={fixSteps}
      htmlExamples={htmlExamples}
    />
  );
};

export default TableMisuseFailure;
