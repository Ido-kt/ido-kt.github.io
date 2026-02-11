import React from "react";
import EngineIssueFailure from "../../../layout/engineIssueFailure";

const NavigationMismatchFailure = () => {
  const ruleId = "navigation-mismatch";
  const title = `A list of navigation links is not contained in a navigation landmark`;
  const description = `Screen readers rely on accurate tagging and labeling to provide necessary context. If a navigation region is not tagged as a navigation landmark, screen reader users may lose orientation and find the page's structure difficult to understand.`;
  const helpText = `Add role=navigation to the custom navigation region, or use a HTML <nav> element.`;
  const fixSteps = [
  "Review the HTML structure",
  "Apply proper accessibility attributes",
  "Test with screen readers"
  ];
  const htmlExamples = [
  { filename: "hotmobile co il main nav", content: `<style>
  [data-id="0"]::after {
    block-size: 32px;
    border-block-end-color: rgb(0, 0, 0);
    border-block-start-color: rgb(0, 0, 0);
    border-bottom-color: rgb(0, 0, 0);
    border-inline-end-color: rgb(0, 0, 0);
    border-inline-start-color: rgb(0, 0, 0);
    border-left-color: rgb(0, 0, 0);
    border-right-color: rgb(0, 0, 0);
    border-top-color: rgb(0, 0, 0);
    bottom: 0px;
    caret-color: rgb(0, 0, 0);
    color: rgb(0, 0, 0);
    column-rule-color: rgb(0, 0, 0);
    content: "›";
    cursor: pointer;
    direction: ltr;
    display: block;
    font-size: 22.5px;
    font-weight: 900;
    height: 32px;
    inline-size: 7.29688px;
    inset-block-end: 0px;
    inset-block-start: 0px;
    inset-inline-end: 0px;
    inset-inline-start: 35.3281px;
    left: 35.3281px;
    line-height: 32px;
    outline-color: rgb(0, 0, 0);
    perspective-origin: 3.64062px 16px;
    position: absolute;
    right: 0px;
    text-decoration: none solid rgb(0, 0, 0);
    text-decoration-color: rgb(0, 0, 0);
    text-emphasis-color: rgb(0, 0, 0);
    top: 0px;
    transform: matrix(0, 1, -1, 0, 0, 0);
    transform-origin: 3.64844px 16px;
    width: 7.29688px;
    -webkit-text-fill-color: rgb(0, 0, 0);
    -webkit-text-stroke-color: rgb(0, 0, 0);
  }

  [data-id="1"]::after {
    border-block-end-color: rgb(0, 0, 0);
    border-block-start-color: rgb(0, 0, 0);
    border-bottom-color: rgb(0, 0, 0);
    border-inline-end-color: rgb(0, 0, 0);
    border-inline-start-color: rgb(0, 0, 0);
    border-left-color: rgb(0, 0, 0);
    border-right-color: rgb(0, 0, 0);
    border-top-color: rgb(0, 0, 0);
    caret-color: rgb(0, 0, 0);
    color: rgb(0, 0, 0);
    column-rule-color: rgb(0, 0, 0);
    content: " ›";
    display: block;
    font-size: 20.7px;
    font-weight: 900;
    inset-block-start: 50%;
    inset-inline-end: 0px;
    left: 0px;
    letter-spacing: -0.5px;
    line-height: 20px;
    list-style-type: none;
    outline-color: rgb(0, 0, 0);
    position: absolute;
    text-align: right;
    text-decoration: none solid rgb(0, 0, 0);
    text-decoration-color: rgb(0, 0, 0);
    text-emphasis-color: rgb(0, 0, 0);
    top: 50%;
    -webkit-text-fill-color: rgb(0, 0, 0);
    -webkit-text-stroke-color: rgb(0, 0, 0);
  }

  [data-id="2"]::after {
    border-block-end-color: rgb(0, 0, 0);
    border-block-start-color: rgb(0, 0, 0);
    border-bottom-color: rgb(0, 0, 0);
    border-inline-end-color: rgb(0, 0, 0);
    border-inline-start-color: rgb(0, 0, 0);
    border-left-color: rgb(0, 0, 0);
    border-right-color: rgb(0, 0, 0);
    border-top-color: rgb(0, 0, 0);
    caret-color: rgb(0, 0, 0);
    color: rgb(0, 0, 0);
    column-rule-color: rgb(0, 0, 0);
    content: " ›";
    display: block;
    font-size: 20.7px;
    font-weight: 900;
    inset-block-start: 50%;
    inset-inline-end: 0px;
    left: 0px;
    letter-spacing: -0.5px;
    line-height: 20px;
    list-style-type: none;
    outline-color: rgb(0, 0, 0);
    position: absolute;
    text-align: right;
    text-decoration: none solid rgb(0, 0, 0);
    text-decoration-color: rgb(0, 0, 0);
    text-emphasis-color: rgb(0, 0, 0);
    top: 50%;
    -webkit-text-fill-color: rgb(0, 0, 0);
    -webkit-text-stroke-color: rgb(0, 0, 0);
  }

  [data-id="3"]::after {
    border-block-end-color: rgb(0, 0, 0);
    border-block-start-color: rgb(0, 0, 0);
    border-bottom-color: rgb(0, 0, 0);
    border-inline-end-color: rgb(0, 0, 0);
    border-inline-start-color: rgb(0, 0, 0);
    border-left-color: rgb(0, 0, 0);
    border-right-color: rgb(0, 0, 0);
    border-top-color: rgb(0, 0, 0);
    caret-color: rgb(0, 0, 0);
    color: rgb(0, 0, 0);
    column-rule-color: rgb(0, 0, 0);
    content: " ›";
    display: block;
    font-size: 20.7px;
    font-weight: 900;
    inset-block-start: 50%;
    inset-inline-end: 0px;
    left: 0px;
    letter-spacing: -0.5px;
    line-height: 20px;
    list-style-type: none;
    outline-color: rgb(0, 0, 0);
    position: absolute;
    text-align: right;
    text-decoration: none solid rgb(0, 0, 0);
    text-decoration-color: rgb(0, 0, 0);
    text-emphasis-color: rgb(0, 0, 0);
    top: 50%;
    -webkit-text-fill-color: rgb(0, 0, 0);
    -webkit-text-stroke-color: rgb(0, 0, 0);
  }

  [data-id="4"]::after {
    border-block-end-color: rgb(0, 0, 0);
    border-block-start-color: rgb(0, 0, 0);
    border-bottom-color: rgb(0, 0, 0);
    border-inline-end-color: rgb(0, 0, 0);
    border-inline-start-color: rgb(0, 0, 0);
    border-left-color: rgb(0, 0, 0);
    border-right-color: rgb(0, 0, 0);
    border-top-color: rgb(0, 0, 0);
    caret-color: rgb(0, 0, 0);
    color: rgb(0, 0, 0);
    column-rule-color: rgb(0, 0, 0);
    content: " ›";
    display: block;
    font-size: 20.7px;
    font-weight: 900;
    inset-block-start: 50%;
    inset-inline-end: 0px;
    left: 0px;
    letter-spacing: -0.5px;
    line-height: 20px;
    list-style-type: none;
    outline-color: rgb(0, 0, 0);
    position: absolute;
    text-align: right;
    text-decoration: none solid rgb(0, 0, 0);
    text-decoration-color: rgb(0, 0, 0);
    text-emphasis-color: rgb(0, 0, 0);
    top: 50%;
    -webkit-text-fill-color: rgb(0, 0, 0);
    -webkit-text-stroke-color: rgb(0, 0, 0);
  }

  [data-id="5"]::after {
    border-block-end-color: rgb(0, 0, 0);
    border-block-start-color: rgb(0, 0, 0);
    border-bottom-color: rgb(0, 0, 0);
    border-inline-end-color: rgb(0, 0, 0);
    border-inline-start-color: rgb(0, 0, 0);
    border-left-color: rgb(0, 0, 0);
    border-right-color: rgb(0, 0, 0);
    border-top-color: rgb(0, 0, 0);
    caret-color: rgb(0, 0, 0);
    color: rgb(0, 0, 0);
    column-rule-color: rgb(0, 0, 0);
    content: " ›";
    display: block;
    font-size: 20.7px;
    font-weight: 900;
    inset-block-start: 50%;
    inset-inline-end: 0px;
    left: 0px;
    letter-spacing: -0.5px;
    line-height: 20px;
    list-style-type: none;
    outline-color: rgb(0, 0, 0);
    position: absolute;
    text-align: right;
    text-decoration: none solid rgb(0, 0, 0);
    text-decoration-color: rgb(0, 0, 0);
    text-emphasis-color: rgb(0, 0, 0);
    top: 50%;
    -webkit-text-fill-color: rgb(0, 0, 0);
    -webkit-text-stroke-color: rgb(0, 0, 0);
  }

  [data-id="6"]::after {
    block-size: 0px;
    border-block-end-color: rgb(255, 0, 0);
    border-block-end-style: solid;
    border-block-end-width: 9px;
    border-block-start-color: rgba(0, 0, 0, 0);
    border-block-start-style: solid;
    border-block-start-width: 9px;
    border-bottom-color: rgb(255, 0, 0);
    border-bottom-style: solid;
    border-bottom-width: 9px;
    border-inline-end-color: rgba(0, 0, 0, 0);
    border-inline-end-style: solid;
    border-inline-end-width: 9px;
    border-inline-start-color: rgba(0, 0, 0, 0);
    border-inline-start-style: solid;
    border-inline-start-width: 9px;
    border-left-color: rgba(0, 0, 0, 0);
    border-left-style: solid;
    border-left-width: 9px;
    border-right-color: rgba(0, 0, 0, 0);
    border-right-style: solid;
    border-right-width: 9px;
    border-top-color: rgba(0, 0, 0, 0);
    border-top-style: solid;
    border-top-width: 9px;
    bottom: 100%;
    content: "";
    display: block;
    height: 0px;
    inline-size: 0px;
    inset-block-end: 100%;
    inset-inline-end: 20px;
    left: 20px;
    position: absolute;
    width: 0px;
    z-index: 1;
  }

  [data-id="6"]::before {
    background-image: linear-gradient(to right, rgb(255, 0, 0) 0%, rgb(255, 0, 0) 68%, rgb(255, 80, 228) 100%);
    block-size: 7px;
    content: "";
    display: block;
    height: 7px;
    inset-block-start: 0px;
    inset-inline-end: 0px;
    inset-inline-start: 0px;
    left: 0px;
    position: absolute;
    right: 0px;
    top: 0px;
  }

  [data-id="7"]::after {
    block-size: 11px;
    content: url("https://www.hotmobile.co.il/_layouts/HotMobile/NewDesign/Images/black_arrow_down.svg");
    display: block;
    height: 11px;
    inline-size: 16px;
    inset-block-start: 34%;
    inset-inline-end: 12px;
    left: 12px;
    list-style-type: none;
    position: absolute;
    text-align: right;
    top: 34%;
    transition-property: none;
    width: 16px;
  }

  [data-id="8"]::after {
    block-size: 0px;
    border-block-end-color: rgb(255, 64, 182);
    border-block-end-style: solid;
    border-block-end-width: 9px;
    border-block-start-color: rgba(0, 0, 0, 0);
    border-block-start-style: solid;
    border-block-start-width: 9px;
    border-bottom-color: rgb(255, 64, 182);
    border-bottom-style: solid;
    border-bottom-width: 9px;
    border-inline-end-color: rgba(0, 0, 0, 0);
    border-inline-end-style: solid;
    border-inline-end-width: 9px;
    border-inline-start-color: rgba(0, 0, 0, 0);
    border-inline-start-style: solid;
    border-inline-start-width: 9px;
    border-left-color: rgba(0, 0, 0, 0);
    border-left-style: solid;
    border-left-width: 9px;
    border-right-color: rgba(0, 0, 0, 0);
    border-right-style: solid;
    border-right-width: 9px;
    border-top-color: rgba(0, 0, 0, 0);
    border-top-style: solid;
    border-top-width: 9px;
    bottom: -35px;
    caret-color: rgb(0, 0, 0);
    color: rgb(0, 0, 0);
    column-rule-color: rgb(0, 0, 0);
    content: "";
    display: none;
    font-size: 18px;
    font-weight: 900;
    height: 0px;
    inline-size: 0px;
    inset-block-end: -35px;
    inset-inline-end: 50%;
    left: 50%;
    line-height: 18px;
    list-style-type: none;
    opacity: 0;
    outline-color: rgb(0, 0, 0);
    position: absolute;
    text-align: center;
    text-decoration: none solid rgb(0, 0, 0);
    text-decoration-color: rgb(0, 0, 0);
    text-emphasis-color: rgb(0, 0, 0);
    transition-duration: 0.5s;
    transition-timing-function: ease-in-out;
    width: 0px;
    z-index: 1;
    -webkit-text-fill-color: rgb(0, 0, 0);
    -webkit-text-stroke-color: rgb(0, 0, 0);
  }

  [data-id="8"]::before {
    background-image: linear-gradient(to right, rgb(255, 0, 0) 0%, rgba(255, 80, 228, 0.15) 85%, rgba(255, 255, 255, 0) 100%);
    block-size: 4px;
    border-block-end-color: rgb(0, 0, 0);
    border-block-start-color: rgb(0, 0, 0);
    border-bottom-color: rgb(0, 0, 0);
    border-inline-end-color: rgb(0, 0, 0);
    border-inline-start-color: rgb(0, 0, 0);
    border-left-color: rgb(0, 0, 0);
    border-right-color: rgb(0, 0, 0);
    border-top-color: rgb(0, 0, 0);
    bottom: 14px;
    caret-color: rgb(0, 0, 0);
    color: rgb(0, 0, 0);
    column-rule-color: rgb(0, 0, 0);
    content: "";
    display: block;
    font-size: 18px;
    font-weight: 900;
    height: 4px;
    inline-size: 0px;
    inset-block-end: 14px;
    inset-block-start: 42px;
    inset-inline-end: 0px;
    inset-inline-start: 74.7656px;
    left: 0px;
    line-height: 18px;
    list-style-type: none;
    outline-color: rgb(0, 0, 0);
    perspective-origin: 0px 2px;
    position: absolute;
    right: 74.7656px;
    text-align: center;
    text-decoration: none solid rgb(0, 0, 0);
    text-decoration-color: rgb(0, 0, 0);
    text-emphasis-color: rgb(0, 0, 0);
    top: 42px;
    transform-origin: 0px 2px;
    transition-duration: 0.25s;
    transition-timing-function: ease-in-out;
    width: 0px;
    -webkit-text-fill-color: rgb(0, 0, 0);
    -webkit-text-stroke-color: rgb(0, 0, 0);
  }

  [data-id="9"]::after {
    border-block-end-color: rgb(0, 0, 0);
    border-block-start-color: rgb(0, 0, 0);
    border-bottom-color: rgb(0, 0, 0);
    border-inline-end-color: rgb(0, 0, 0);
    border-inline-start-color: rgb(0, 0, 0);
    border-left-color: rgb(0, 0, 0);
    border-right-color: rgb(0, 0, 0);
    border-top-color: rgb(0, 0, 0);
    caret-color: rgb(0, 0, 0);
    color: rgb(0, 0, 0);
    column-rule-color: rgb(0, 0, 0);
    content: " ›";
    font-size: 20.7px;
    font-weight: 900;
    letter-spacing: -0.5px;
    line-height: 20px;
    list-style-type: none;
    outline-color: rgb(0, 0, 0);
    text-align: right;
    text-decoration: none solid rgb(0, 0, 0);
    text-decoration-color: rgb(0, 0, 0);
    text-emphasis-color: rgb(0, 0, 0);
    text-wrap: nowrap;
    -webkit-text-fill-color: rgb(0, 0, 0);
    -webkit-text-stroke-color: rgb(0, 0, 0);
  }

  [data-id="10"]::after {
    border-block-end-color: rgb(0, 0, 0);
    border-block-start-color: rgb(0, 0, 0);
    border-bottom-color: rgb(0, 0, 0);
    border-inline-end-color: rgb(0, 0, 0);
    border-inline-start-color: rgb(0, 0, 0);
    border-left-color: rgb(0, 0, 0);
    border-right-color: rgb(0, 0, 0);
    border-top-color: rgb(0, 0, 0);
    caret-color: rgb(0, 0, 0);
    color: rgb(0, 0, 0);
    column-rule-color: rgb(0, 0, 0);
    content: " ›";
    font-size: 20.7px;
    font-weight: 900;
    letter-spacing: -0.5px;
    line-height: 20px;
    list-style-type: none;
    outline-color: rgb(0, 0, 0);
    text-align: right;
    text-decoration: none solid rgb(0, 0, 0);
    text-decoration-color: rgb(0, 0, 0);
    text-emphasis-color: rgb(0, 0, 0);
    text-wrap: nowrap;
    -webkit-text-fill-color: rgb(0, 0, 0);
    -webkit-text-stroke-color: rgb(0, 0, 0);
  }

  [data-id="11"]::after {
    border-block-end-color: rgb(0, 0, 0);
    border-block-start-color: rgb(0, 0, 0);
    border-bottom-color: rgb(0, 0, 0);
    border-inline-end-color: rgb(0, 0, 0);
    border-inline-start-color: rgb(0, 0, 0);
    border-left-color: rgb(0, 0, 0);
    border-right-color: rgb(0, 0, 0);
    border-top-color: rgb(0, 0, 0);
    caret-color: rgb(0, 0, 0);
    color: rgb(0, 0, 0);
    column-rule-color: rgb(0, 0, 0);
    content: " ›";
    font-size: 20.7px;
    font-weight: 900;
    letter-spacing: -0.5px;
    line-height: 20px;
    list-style-type: none;
    outline-color: rgb(0, 0, 0);
    text-align: right;
    text-decoration: none solid rgb(0, 0, 0);
    text-decoration-color: rgb(0, 0, 0);
    text-emphasis-color: rgb(0, 0, 0);
    text-wrap: nowrap;
    -webkit-text-fill-color: rgb(0, 0, 0);
    -webkit-text-stroke-color: rgb(0, 0, 0);
  }

  [data-id="12"]::before {
    background-image: linear-gradient(to right, rgb(255, 0, 0) 0%, rgb(255, 0, 0) 68%, rgb(255, 80, 228) 100%);
    block-size: 7px;
    content: "";
    display: block;
    height: 7px;
    inset-block-start: 0px;
    inset-inline-end: 0px;
    inset-inline-start: 0px;
    left: 0px;
    list-style-type: none;
    position: absolute;
    right: 0px;
    text-align: right;
    top: 0px;
  }

  [data-id="13"]::after {
    block-size: 0px;
    border-block-end-color: rgb(255, 30, 86);
    border-block-end-style: solid;
    border-block-end-width: 9px;
    border-block-start-color: rgba(0, 0, 0, 0);
    border-block-start-style: solid;
    border-block-start-width: 9px;
    border-bottom-color: rgb(255, 30, 86);
    border-bottom-style: solid;
    border-bottom-width: 9px;
    border-inline-end-color: rgba(0, 0, 0, 0);
    border-inline-end-style: solid;
    border-inline-end-width: 9px;
    border-inline-start-color: rgba(0, 0, 0, 0);
    border-inline-start-style: solid;
    border-inline-start-width: 9px;
    border-left-color: rgba(0, 0, 0, 0);
    border-left-style: solid;
    border-left-width: 9px;
    border-right-color: rgba(0, 0, 0, 0);
    border-right-style: solid;
    border-right-width: 9px;
    border-top-color: rgba(0, 0, 0, 0);
    border-top-style: solid;
    border-top-width: 9px;
    bottom: -35px;
    caret-color: rgb(0, 0, 0);
    color: rgb(0, 0, 0);
    column-rule-color: rgb(0, 0, 0);
    content: "";
    display: none;
    font-size: 18px;
    font-weight: 900;
    height: 0px;
    inline-size: 0px;
    inset-block-end: -35px;
    inset-inline-end: 50%;
    left: 50%;
    line-height: 18px;
    list-style-type: none;
    opacity: 0;
    outline-color: rgb(0, 0, 0);
    position: absolute;
    text-align: center;
    text-decoration: none solid rgb(0, 0, 0);
    text-decoration-color: rgb(0, 0, 0);
    text-emphasis-color: rgb(0, 0, 0);
    transition-duration: 0.5s;
    transition-timing-function: ease-in-out;
    width: 0px;
    z-index: 1;
    -webkit-text-fill-color: rgb(0, 0, 0);
    -webkit-text-stroke-color: rgb(0, 0, 0);
  }

  [data-id="13"]::before {
    background-image: linear-gradient(to right, rgb(255, 0, 0) 0%, rgba(255, 80, 228, 0.15) 85%, rgba(255, 255, 255, 0) 100%);
    block-size: 4px;
    border-block-end-color: rgb(0, 0, 0);
    border-block-start-color: rgb(0, 0, 0);
    border-bottom-color: rgb(0, 0, 0);
    border-inline-end-color: rgb(0, 0, 0);
    border-inline-start-color: rgb(0, 0, 0);
    border-left-color: rgb(0, 0, 0);
    border-right-color: rgb(0, 0, 0);
    border-top-color: rgb(0, 0, 0);
    bottom: 14px;
    caret-color: rgb(0, 0, 0);
    color: rgb(0, 0, 0);
    column-rule-color: rgb(0, 0, 0);
    content: "";
    display: block;
    font-size: 18px;
    font-weight: 900;
    height: 4px;
    inline-size: 0px;
    inset-block-end: 14px;
    inset-block-start: 42px;
    inset-inline-end: 0px;
    inset-inline-start: 167.297px;
    left: 0px;
    line-height: 18px;
    list-style-type: none;
    outline-color: rgb(0, 0, 0);
    perspective-origin: 0px 2px;
    position: absolute;
    right: 167.297px;
    text-align: center;
    text-decoration: none solid rgb(0, 0, 0);
    text-decoration-color: rgb(0, 0, 0);
    text-emphasis-color: rgb(0, 0, 0);
    top: 42px;
    transform-origin: 0px 2px;
    transition-duration: 0.25s;
    transition-timing-function: ease-in-out;
    width: 0px;
    -webkit-text-fill-color: rgb(0, 0, 0);
    -webkit-text-stroke-color: rgb(0, 0, 0);
  }

  [data-id="14"]::after {
    border-block-end-color: rgb(0, 0, 0);
    border-block-start-color: rgb(0, 0, 0);
    border-bottom-color: rgb(0, 0, 0);
    border-inline-end-color: rgb(0, 0, 0);
    border-inline-start-color: rgb(0, 0, 0);
    border-left-color: rgb(0, 0, 0);
    border-right-color: rgb(0, 0, 0);
    border-top-color: rgb(0, 0, 0);
    caret-color: rgb(0, 0, 0);
    color: rgb(0, 0, 0);
    column-rule-color: rgb(0, 0, 0);
    content: " ›";
    font-size: 20.7px;
    font-weight: 900;
    letter-spacing: -0.5px;
    line-height: 20px;
    list-style-type: none;
    outline-color: rgb(0, 0, 0);
    text-align: right;
    text-decoration: none solid rgb(0, 0, 0);
    text-decoration-color: rgb(0, 0, 0);
    text-emphasis-color: rgb(0, 0, 0);
    text-wrap: nowrap;
    -webkit-text-fill-color: rgb(0, 0, 0);
    -webkit-text-stroke-color: rgb(0, 0, 0);
  }

  [data-id="15"]::after {
    border-block-end-color: rgb(0, 0, 0);
    border-block-start-color: rgb(0, 0, 0);
    border-bottom-color: rgb(0, 0, 0);
    border-inline-end-color: rgb(0, 0, 0);
    border-inline-start-color: rgb(0, 0, 0);
    border-left-color: rgb(0, 0, 0);
    border-right-color: rgb(0, 0, 0);
    border-top-color: rgb(0, 0, 0);
    caret-color: rgb(0, 0, 0);
    color: rgb(0, 0, 0);
    column-rule-color: rgb(0, 0, 0);
    content: " ›";
    font-size: 20.7px;
    font-weight: 900;
    letter-spacing: -0.5px;
    line-height: 20px;
    list-style-type: none;
    outline-color: rgb(0, 0, 0);
    text-align: right;
    text-decoration: none solid rgb(0, 0, 0);
    text-decoration-color: rgb(0, 0, 0);
    text-emphasis-color: rgb(0, 0, 0);
    text-wrap: nowrap;
    -webkit-text-fill-color: rgb(0, 0, 0);
    -webkit-text-stroke-color: rgb(0, 0, 0);
  }

  [data-id="16"]::after {
    border-block-end-color: rgb(0, 0, 0);
    border-block-start-color: rgb(0, 0, 0);
    border-bottom-color: rgb(0, 0, 0);
    border-inline-end-color: rgb(0, 0, 0);
    border-inline-start-color: rgb(0, 0, 0);
    border-left-color: rgb(0, 0, 0);
    border-right-color: rgb(0, 0, 0);
    border-top-color: rgb(0, 0, 0);
    caret-color: rgb(0, 0, 0);
    color: rgb(0, 0, 0);
    column-rule-color: rgb(0, 0, 0);
    content: " ›";
    font-size: 20.7px;
    font-weight: 900;
    letter-spacing: -0.5px;
    line-height: 20px;
    list-style-type: none;
    outline-color: rgb(0, 0, 0);
    text-align: right;
    text-decoration: none solid rgb(0, 0, 0);
    text-decoration-color: rgb(0, 0, 0);
    text-emphasis-color: rgb(0, 0, 0);
    text-wrap: nowrap;
    -webkit-text-fill-color: rgb(0, 0, 0);
    -webkit-text-stroke-color: rgb(0, 0, 0);
  }

  [data-id="17"]::after {
    border-block-end-color: rgb(0, 0, 0);
    border-block-start-color: rgb(0, 0, 0);
    border-bottom-color: rgb(0, 0, 0);
    border-inline-end-color: rgb(0, 0, 0);
    border-inline-start-color: rgb(0, 0, 0);
    border-left-color: rgb(0, 0, 0);
    border-right-color: rgb(0, 0, 0);
    border-top-color: rgb(0, 0, 0);
    caret-color: rgb(0, 0, 0);
    color: rgb(0, 0, 0);
    column-rule-color: rgb(0, 0, 0);
    content: " ›";
    font-size: 20.7px;
    font-weight: 900;
    letter-spacing: -0.5px;
    line-height: 20px;
    list-style-type: none;
    outline-color: rgb(0, 0, 0);
    text-align: right;
    text-decoration: none solid rgb(0, 0, 0);
    text-decoration-color: rgb(0, 0, 0);
    text-emphasis-color: rgb(0, 0, 0);
    text-wrap: nowrap;
    -webkit-text-fill-color: rgb(0, 0, 0);
    -webkit-text-stroke-color: rgb(0, 0, 0);
  }

  [data-id="18"]::before {
    background-image: linear-gradient(to right, rgb(255, 0, 0) 0%, rgb(255, 0, 0) 68%, rgb(255, 80, 228) 100%);
    block-size: 7px;
    content: "";
    display: block;
    height: 7px;
    inset-block-start: 0px;
    inset-inline-end: 0px;
    inset-inline-start: 0px;
    left: 0px;
    list-style-type: none;
    position: absolute;
    right: 0px;
    text-align: right;
    top: 0px;
  }

  [data-id="19"]::after {
    block-size: 0px;
    border-block-end-color: rgb(255, 0, 0);
    border-block-end-style: solid;
    border-block-end-width: 9px;
    border-block-start-color: rgba(0, 0, 0, 0);
    border-block-start-style: solid;
    border-block-start-width: 9px;
    border-bottom-color: rgb(255, 0, 0);
    border-bottom-style: solid;
    border-bottom-width: 9px;
    border-inline-end-color: rgba(0, 0, 0, 0);
    border-inline-end-style: solid;
    border-inline-end-width: 9px;
    border-inline-start-color: rgba(0, 0, 0, 0);
    border-inline-start-style: solid;
    border-inline-start-width: 9px;
    border-left-color: rgba(0, 0, 0, 0);
    border-left-style: solid;
    border-left-width: 9px;
    border-right-color: rgba(0, 0, 0, 0);
    border-right-style: solid;
    border-right-width: 9px;
    border-top-color: rgba(0, 0, 0, 0);
    border-top-style: solid;
    border-top-width: 9px;
    bottom: -35px;
    caret-color: rgb(0, 0, 0);
    color: rgb(0, 0, 0);
    column-rule-color: rgb(0, 0, 0);
    content: "";
    display: none;
    font-size: 18px;
    font-weight: 900;
    height: 0px;
    inline-size: 0px;
    inset-block-end: -35px;
    inset-inline-end: 50%;
    left: 50%;
    line-height: 18px;
    list-style-type: none;
    opacity: 0;
    outline-color: rgb(0, 0, 0);
    position: absolute;
    text-align: center;
    text-decoration: none solid rgb(0, 0, 0);
    text-decoration-color: rgb(0, 0, 0);
    text-emphasis-color: rgb(0, 0, 0);
    transition-duration: 0.5s;
    transition-timing-function: ease-in-out;
    width: 0px;
    z-index: 1;
    -webkit-text-fill-color: rgb(0, 0, 0);
    -webkit-text-stroke-color: rgb(0, 0, 0);
  }

  [data-id="19"]::before {
    background-image: linear-gradient(to right, rgb(255, 0, 0) 0%, rgba(255, 80, 228, 0.15) 85%, rgba(255, 255, 255, 0) 100%);
    block-size: 4px;
    border-block-end-color: rgb(0, 0, 0);
    border-block-start-color: rgb(0, 0, 0);
    border-bottom-color: rgb(0, 0, 0);
    border-inline-end-color: rgb(0, 0, 0);
    border-inline-start-color: rgb(0, 0, 0);
    border-left-color: rgb(0, 0, 0);
    border-right-color: rgb(0, 0, 0);
    border-top-color: rgb(0, 0, 0);
    bottom: 14px;
    caret-color: rgb(0, 0, 0);
    color: rgb(0, 0, 0);
    column-rule-color: rgb(0, 0, 0);
    content: "";
    display: block;
    font-size: 18px;
    font-weight: 900;
    height: 4px;
    inline-size: 0px;
    inset-block-end: 14px;
    inset-block-start: 42px;
    inset-inline-end: 0px;
    inset-inline-start: 113.938px;
    left: 0px;
    line-height: 18px;
    list-style-type: none;
    outline-color: rgb(0, 0, 0);
    perspective-origin: 0px 2px;
    position: absolute;
    right: 113.938px;
    text-align: center;
    text-decoration: none solid rgb(0, 0, 0);
    text-decoration-color: rgb(0, 0, 0);
    text-emphasis-color: rgb(0, 0, 0);
    top: 42px;
    transform-origin: 0px 2px;
    transition-duration: 0.25s;
    transition-timing-function: ease-in-out;
    width: 0px;
    -webkit-text-fill-color: rgb(0, 0, 0);
    -webkit-text-stroke-color: rgb(0, 0, 0);
  }

  [data-id="20"]::after {
    border-block-end-color: rgb(0, 0, 0);
    border-block-start-color: rgb(0, 0, 0);
    border-bottom-color: rgb(0, 0, 0);
    border-inline-end-color: rgb(0, 0, 0);
    border-inline-start-color: rgb(0, 0, 0);
    border-left-color: rgb(0, 0, 0);
    border-right-color: rgb(0, 0, 0);
    border-top-color: rgb(0, 0, 0);
    caret-color: rgb(0, 0, 0);
    color: rgb(0, 0, 0);
    column-rule-color: rgb(0, 0, 0);
    content: " ›";
    font-size: 20.7px;
    font-weight: 900;
    letter-spacing: -0.5px;
    line-height: 20px;
    list-style-type: none;
    outline-color: rgb(0, 0, 0);
    text-align: right;
    text-decoration: none solid rgb(0, 0, 0);
    text-decoration-color: rgb(0, 0, 0);
    text-emphasis-color: rgb(0, 0, 0);
    text-wrap: nowrap;
    -webkit-text-fill-color: rgb(0, 0, 0);
    -webkit-text-stroke-color: rgb(0, 0, 0);
  }

  [data-id="21"]::after {
    border-block-end-color: rgb(0, 0, 0);
    border-block-start-color: rgb(0, 0, 0);
    border-bottom-color: rgb(0, 0, 0);
    border-inline-end-color: rgb(0, 0, 0);
    border-inline-start-color: rgb(0, 0, 0);
    border-left-color: rgb(0, 0, 0);
    border-right-color: rgb(0, 0, 0);
    border-top-color: rgb(0, 0, 0);
    caret-color: rgb(0, 0, 0);
    color: rgb(0, 0, 0);
    column-rule-color: rgb(0, 0, 0);
    content: " ›";
    font-size: 20.7px;
    font-weight: 900;
    letter-spacing: -0.5px;
    line-height: 20px;
    list-style-type: none;
    outline-color: rgb(0, 0, 0);
    text-align: right;
    text-decoration: none solid rgb(0, 0, 0);
    text-decoration-color: rgb(0, 0, 0);
    text-emphasis-color: rgb(0, 0, 0);
    text-wrap: nowrap;
    -webkit-text-fill-color: rgb(0, 0, 0);
    -webkit-text-stroke-color: rgb(0, 0, 0);
  }

  [data-id="22"]::after {
    border-block-end-color: rgb(0, 0, 0);
    border-block-start-color: rgb(0, 0, 0);
    border-bottom-color: rgb(0, 0, 0);
    border-inline-end-color: rgb(0, 0, 0);
    border-inline-start-color: rgb(0, 0, 0);
    border-left-color: rgb(0, 0, 0);
    border-right-color: rgb(0, 0, 0);
    border-top-color: rgb(0, 0, 0);
    caret-color: rgb(0, 0, 0);
    color: rgb(0, 0, 0);
    column-rule-color: rgb(0, 0, 0);
    content: " ›";
    font-size: 20.7px;
    font-weight: 900;
    letter-spacing: -0.5px;
    line-height: 20px;
    list-style-type: none;
    outline-color: rgb(0, 0, 0);
    text-align: right;
    text-decoration: none solid rgb(0, 0, 0);
    text-decoration-color: rgb(0, 0, 0);
    text-emphasis-color: rgb(0, 0, 0);
    text-wrap: nowrap;
    -webkit-text-fill-color: rgb(0, 0, 0);
    -webkit-text-stroke-color: rgb(0, 0, 0);
  }

  [data-id="23"]::after {
    border-block-end-color: rgb(0, 0, 0);
    border-block-start-color: rgb(0, 0, 0);
    border-bottom-color: rgb(0, 0, 0);
    border-inline-end-color: rgb(0, 0, 0);
    border-inline-start-color: rgb(0, 0, 0);
    border-left-color: rgb(0, 0, 0);
    border-right-color: rgb(0, 0, 0);
    border-top-color: rgb(0, 0, 0);
    caret-color: rgb(0, 0, 0);
    color: rgb(0, 0, 0);
    column-rule-color: rgb(0, 0, 0);
    content: " ›";
    font-size: 20.7px;
    font-weight: 900;
    letter-spacing: -0.5px;
    line-height: 20px;
    list-style-type: none;
    outline-color: rgb(0, 0, 0);
    text-align: right;
    text-decoration: none solid rgb(0, 0, 0);
    text-decoration-color: rgb(0, 0, 0);
    text-emphasis-color: rgb(0, 0, 0);
    text-wrap: nowrap;
    -webkit-text-fill-color: rgb(0, 0, 0);
    -webkit-text-stroke-color: rgb(0, 0, 0);
  }

  [data-id="24"]::after {
    border-block-end-color: rgb(0, 0, 0);
    border-block-start-color: rgb(0, 0, 0);
    border-bottom-color: rgb(0, 0, 0);
    border-inline-end-color: rgb(0, 0, 0);
    border-inline-start-color: rgb(0, 0, 0);
    border-left-color: rgb(0, 0, 0);
    border-right-color: rgb(0, 0, 0);
    border-top-color: rgb(0, 0, 0);
    caret-color: rgb(0, 0, 0);
    color: rgb(0, 0, 0);
    column-rule-color: rgb(0, 0, 0);
    content: " ›";
    font-size: 20.7px;
    font-weight: 900;
    letter-spacing: -0.5px;
    line-height: 20px;
    list-style-type: none;
    outline-color: rgb(0, 0, 0);
    text-align: right;
    text-decoration: none solid rgb(0, 0, 0);
    text-decoration-color: rgb(0, 0, 0);
    text-emphasis-color: rgb(0, 0, 0);
    text-wrap: nowrap;
    -webkit-text-fill-color: rgb(0, 0, 0);
    -webkit-text-stroke-color: rgb(0, 0, 0);
  }

  [data-id="25"]::after {
    border-block-end-color: rgb(0, 0, 0);
    border-block-start-color: rgb(0, 0, 0);
    border-bottom-color: rgb(0, 0, 0);
    border-inline-end-color: rgb(0, 0, 0);
    border-inline-start-color: rgb(0, 0, 0);
    border-left-color: rgb(0, 0, 0);
    border-right-color: rgb(0, 0, 0);
    border-top-color: rgb(0, 0, 0);
    caret-color: rgb(0, 0, 0);
    color: rgb(0, 0, 0);
    column-rule-color: rgb(0, 0, 0);
    content: " ›";
    font-size: 20.7px;
    font-weight: 900;
    letter-spacing: -0.5px;
    line-height: 20px;
    list-style-type: none;
    outline-color: rgb(0, 0, 0);
    text-align: right;
    text-decoration: none solid rgb(0, 0, 0);
    text-decoration-color: rgb(0, 0, 0);
    text-emphasis-color: rgb(0, 0, 0);
    text-wrap: nowrap;
    -webkit-text-fill-color: rgb(0, 0, 0);
    -webkit-text-stroke-color: rgb(0, 0, 0);
  }

  [data-id="26"]::after {
    border-block-end-color: rgb(0, 0, 0);
    border-block-start-color: rgb(0, 0, 0);
    border-bottom-color: rgb(0, 0, 0);
    border-inline-end-color: rgb(0, 0, 0);
    border-inline-start-color: rgb(0, 0, 0);
    border-left-color: rgb(0, 0, 0);
    border-right-color: rgb(0, 0, 0);
    border-top-color: rgb(0, 0, 0);
    caret-color: rgb(0, 0, 0);
    color: rgb(0, 0, 0);
    column-rule-color: rgb(0, 0, 0);
    content: " ›";
    font-size: 20.7px;
    font-weight: 900;
    letter-spacing: -0.5px;
    line-height: 20px;
    list-style-type: none;
    outline-color: rgb(0, 0, 0);
    text-align: right;
    text-decoration: none solid rgb(0, 0, 0);
    text-decoration-color: rgb(0, 0, 0);
    text-emphasis-color: rgb(0, 0, 0);
    text-wrap: nowrap;
    -webkit-text-fill-color: rgb(0, 0, 0);
    -webkit-text-stroke-color: rgb(0, 0, 0);
  }

  [data-id="27"]::after {
    border-block-end-color: rgb(0, 0, 0);
    border-block-start-color: rgb(0, 0, 0);
    border-bottom-color: rgb(0, 0, 0);
    border-inline-end-color: rgb(0, 0, 0);
    border-inline-start-color: rgb(0, 0, 0);
    border-left-color: rgb(0, 0, 0);
    border-right-color: rgb(0, 0, 0);
    border-top-color: rgb(0, 0, 0);
    caret-color: rgb(0, 0, 0);
    color: rgb(0, 0, 0);
    column-rule-color: rgb(0, 0, 0);
    content: " ›";
    font-size: 20.7px;
    font-weight: 900;
    letter-spacing: -0.5px;
    line-height: 20px;
    list-style-type: none;
    outline-color: rgb(0, 0, 0);
    text-align: right;
    text-decoration: none solid rgb(0, 0, 0);
    text-decoration-color: rgb(0, 0, 0);
    text-emphasis-color: rgb(0, 0, 0);
    text-wrap: nowrap;
    -webkit-text-fill-color: rgb(0, 0, 0);
    -webkit-text-stroke-color: rgb(0, 0, 0);
  }

  [data-id="28"]::before {
    background-image: linear-gradient(to right, rgb(255, 0, 0) 0%, rgb(255, 0, 0) 68%, rgb(255, 80, 228) 100%);
    block-size: 7px;
    content: "";
    display: block;
    height: 7px;
    inset-block-start: 0px;
    inset-inline-end: 0px;
    inset-inline-start: 0px;
    left: 0px;
    list-style-type: none;
    position: absolute;
    right: 0px;
    text-align: right;
    top: 0px;
  }

  [data-id="29"]::after {
    block-size: 0px;
    border-block-end-color: rgb(255, 0, 0);
    border-block-end-style: solid;
    border-block-end-width: 9px;
    border-block-start-color: rgba(0, 0, 0, 0);
    border-block-start-style: solid;
    border-block-start-width: 9px;
    border-bottom-color: rgb(255, 0, 0);
    border-bottom-style: solid;
    border-bottom-width: 9px;
    border-inline-end-color: rgba(0, 0, 0, 0);
    border-inline-end-style: solid;
    border-inline-end-width: 9px;
    border-inline-start-color: rgba(0, 0, 0, 0);
    border-inline-start-style: solid;
    border-inline-start-width: 9px;
    border-left-color: rgba(0, 0, 0, 0);
    border-left-style: solid;
    border-left-width: 9px;
    border-right-color: rgba(0, 0, 0, 0);
    border-right-style: solid;
    border-right-width: 9px;
    border-top-color: rgba(0, 0, 0, 0);
    border-top-style: solid;
    border-top-width: 9px;
    bottom: -35px;
    caret-color: rgb(0, 0, 0);
    color: rgb(0, 0, 0);
    column-rule-color: rgb(0, 0, 0);
    content: "";
    display: none;
    font-size: 18px;
    font-weight: 900;
    height: 0px;
    inline-size: 0px;
    inset-block-end: -35px;
    inset-inline-end: 50%;
    left: 50%;
    line-height: 18px;
    list-style-type: none;
    opacity: 0;
    outline-color: rgb(0, 0, 0);
    position: absolute;
    text-align: center;
    text-decoration: none solid rgb(0, 0, 0);
    text-decoration-color: rgb(0, 0, 0);
    text-emphasis-color: rgb(0, 0, 0);
    transition-duration: 0.5s;
    transition-timing-function: ease-in-out;
    width: 0px;
    z-index: 1;
    -webkit-text-fill-color: rgb(0, 0, 0);
    -webkit-text-stroke-color: rgb(0, 0, 0);
  }

  [data-id="29"]::before {
    background-image: linear-gradient(to right, rgb(255, 0, 0) 0%, rgba(255, 80, 228, 0.15) 85%, rgba(255, 255, 255, 0) 100%);
    block-size: 4px;
    border-block-end-color: rgb(0, 0, 0);
    border-block-start-color: rgb(0, 0, 0);
    border-bottom-color: rgb(0, 0, 0);
    border-inline-end-color: rgb(0, 0, 0);
    border-inline-start-color: rgb(0, 0, 0);
    border-left-color: rgb(0, 0, 0);
    border-right-color: rgb(0, 0, 0);
    border-top-color: rgb(0, 0, 0);
    bottom: 14px;
    caret-color: rgb(0, 0, 0);
    color: rgb(0, 0, 0);
    column-rule-color: rgb(0, 0, 0);
    content: "";
    display: block;
    font-size: 18px;
    font-weight: 900;
    height: 4px;
    inline-size: 0px;
    inset-block-end: 14px;
    inset-block-start: 42px;
    inset-inline-end: 0px;
    inset-inline-start: 91.6875px;
    left: 0px;
    line-height: 18px;
    list-style-type: none;
    outline-color: rgb(0, 0, 0);
    perspective-origin: 0px 2px;
    position: absolute;
    right: 91.6875px;
    text-align: center;
    text-decoration: none solid rgb(0, 0, 0);
    text-decoration-color: rgb(0, 0, 0);
    text-emphasis-color: rgb(0, 0, 0);
    top: 42px;
    transform-origin: 0px 2px;
    transition-duration: 0.25s;
    transition-timing-function: ease-in-out;
    width: 0px;
    -webkit-text-fill-color: rgb(0, 0, 0);
    -webkit-text-stroke-color: rgb(0, 0, 0);
  }

  [data-id="30"]::after {
    border-block-end-color: rgb(0, 0, 0);
    border-block-start-color: rgb(0, 0, 0);
    border-bottom-color: rgb(0, 0, 0);
    border-inline-end-color: rgb(0, 0, 0);
    border-inline-start-color: rgb(0, 0, 0);
    border-left-color: rgb(0, 0, 0);
    border-right-color: rgb(0, 0, 0);
    border-top-color: rgb(0, 0, 0);
    caret-color: rgb(0, 0, 0);
    color: rgb(0, 0, 0);
    column-rule-color: rgb(0, 0, 0);
    content: " ›";
    font-size: 20.7px;
    font-weight: 900;
    letter-spacing: -0.5px;
    line-height: 20px;
    list-style-type: none;
    outline-color: rgb(0, 0, 0);
    text-align: right;
    text-decoration: none solid rgb(0, 0, 0);
    text-decoration-color: rgb(0, 0, 0);
    text-emphasis-color: rgb(0, 0, 0);
    text-wrap: nowrap;
    -webkit-text-fill-color: rgb(0, 0, 0);
    -webkit-text-stroke-color: rgb(0, 0, 0);
  }

  [data-id="31"]::after {
    border-block-end-color: rgb(0, 0, 0);
    border-block-start-color: rgb(0, 0, 0);
    border-bottom-color: rgb(0, 0, 0);
    border-inline-end-color: rgb(0, 0, 0);
    border-inline-start-color: rgb(0, 0, 0);
    border-left-color: rgb(0, 0, 0);
    border-right-color: rgb(0, 0, 0);
    border-top-color: rgb(0, 0, 0);
    caret-color: rgb(0, 0, 0);
    color: rgb(0, 0, 0);
    column-rule-color: rgb(0, 0, 0);
    content: " ›";
    font-size: 20.7px;
    font-weight: 900;
    letter-spacing: -0.5px;
    line-height: 20px;
    list-style-type: none;
    outline-color: rgb(0, 0, 0);
    text-align: right;
    text-decoration: none solid rgb(0, 0, 0);
    text-decoration-color: rgb(0, 0, 0);
    text-emphasis-color: rgb(0, 0, 0);
    text-wrap: nowrap;
    -webkit-text-fill-color: rgb(0, 0, 0);
    -webkit-text-stroke-color: rgb(0, 0, 0);
  }

  [data-id="32"]::after {
    border-block-end-color: rgb(0, 0, 0);
    border-block-start-color: rgb(0, 0, 0);
    border-bottom-color: rgb(0, 0, 0);
    border-inline-end-color: rgb(0, 0, 0);
    border-inline-start-color: rgb(0, 0, 0);
    border-left-color: rgb(0, 0, 0);
    border-right-color: rgb(0, 0, 0);
    border-top-color: rgb(0, 0, 0);
    caret-color: rgb(0, 0, 0);
    color: rgb(0, 0, 0);
    column-rule-color: rgb(0, 0, 0);
    content: " ›";
    font-size: 20.7px;
    font-weight: 900;
    letter-spacing: -0.5px;
    line-height: 20px;
    list-style-type: none;
    outline-color: rgb(0, 0, 0);
    text-align: right;
    text-decoration: none solid rgb(0, 0, 0);
    text-decoration-color: rgb(0, 0, 0);
    text-emphasis-color: rgb(0, 0, 0);
    text-wrap: nowrap;
    -webkit-text-fill-color: rgb(0, 0, 0);
    -webkit-text-stroke-color: rgb(0, 0, 0);
  }

  [data-id="33"]::after {
    border-block-end-color: rgb(0, 0, 0);
    border-block-start-color: rgb(0, 0, 0);
    border-bottom-color: rgb(0, 0, 0);
    border-inline-end-color: rgb(0, 0, 0);
    border-inline-start-color: rgb(0, 0, 0);
    border-left-color: rgb(0, 0, 0);
    border-right-color: rgb(0, 0, 0);
    border-top-color: rgb(0, 0, 0);
    caret-color: rgb(0, 0, 0);
    color: rgb(0, 0, 0);
    column-rule-color: rgb(0, 0, 0);
    content: " ›";
    font-size: 20.7px;
    font-weight: 900;
    letter-spacing: -0.5px;
    line-height: 20px;
    list-style-type: none;
    outline-color: rgb(0, 0, 0);
    text-align: right;
    text-decoration: none solid rgb(0, 0, 0);
    text-decoration-color: rgb(0, 0, 0);
    text-emphasis-color: rgb(0, 0, 0);
    text-wrap: nowrap;
    -webkit-text-fill-color: rgb(0, 0, 0);
    -webkit-text-stroke-color: rgb(0, 0, 0);
  }

  [data-id="34"]::after {
    border-block-end-color: rgb(0, 0, 0);
    border-block-start-color: rgb(0, 0, 0);
    border-bottom-color: rgb(0, 0, 0);
    border-inline-end-color: rgb(0, 0, 0);
    border-inline-start-color: rgb(0, 0, 0);
    border-left-color: rgb(0, 0, 0);
    border-right-color: rgb(0, 0, 0);
    border-top-color: rgb(0, 0, 0);
    caret-color: rgb(0, 0, 0);
    color: rgb(0, 0, 0);
    column-rule-color: rgb(0, 0, 0);
    content: " ›";
    font-size: 20.7px;
    font-weight: 900;
    letter-spacing: -0.5px;
    line-height: 20px;
    list-style-type: none;
    outline-color: rgb(0, 0, 0);
    text-align: right;
    text-decoration: none solid rgb(0, 0, 0);
    text-decoration-color: rgb(0, 0, 0);
    text-emphasis-color: rgb(0, 0, 0);
    text-wrap: nowrap;
    -webkit-text-fill-color: rgb(0, 0, 0);
    -webkit-text-stroke-color: rgb(0, 0, 0);
  }

  [data-id="35"]::before {
    background-image: linear-gradient(to right, rgb(255, 0, 0) 0%, rgb(255, 0, 0) 68%, rgb(255, 80, 228) 100%);
    block-size: 7px;
    content: "";
    display: block;
    height: 7px;
    inset-block-start: 0px;
    inset-inline-end: 0px;
    inset-inline-start: 0px;
    left: 0px;
    list-style-type: none;
    position: absolute;
    right: 0px;
    text-align: right;
    top: 0px;
  }

  [data-id="36"]::after {
    block-size: 0px;
    border-block-end-color: rgb(255, 0, 0);
    border-block-end-style: solid;
    border-block-end-width: 9px;
    border-block-start-color: rgba(0, 0, 0, 0);
    border-block-start-style: solid;
    border-block-start-width: 9px;
    border-bottom-color: rgb(255, 0, 0);
    border-bottom-style: solid;
    border-bottom-width: 9px;
    border-inline-end-color: rgba(0, 0, 0, 0);
    border-inline-end-style: solid;
    border-inline-end-width: 9px;
    border-inline-start-color: rgba(0, 0, 0, 0);
    border-inline-start-style: solid;
    border-inline-start-width: 9px;
    border-left-color: rgba(0, 0, 0, 0);
    border-left-style: solid;
    border-left-width: 9px;
    border-right-color: rgba(0, 0, 0, 0);
    border-right-style: solid;
    border-right-width: 9px;
    border-top-color: rgba(0, 0, 0, 0);
    border-top-style: solid;
    border-top-width: 9px;
    bottom: -35px;
    caret-color: rgb(0, 0, 0);
    color: rgb(0, 0, 0);
    column-rule-color: rgb(0, 0, 0);
    content: "";
    display: none;
    font-size: 18px;
    font-weight: 900;
    height: 0px;
    inline-size: 0px;
    inset-block-end: -35px;
    inset-inline-end: 50%;
    left: 50%;
    line-height: 18px;
    list-style-type: none;
    opacity: 0;
    outline-color: rgb(0, 0, 0);
    position: absolute;
    text-align: center;
    text-decoration: none solid rgb(0, 0, 0);
    text-decoration-color: rgb(0, 0, 0);
    text-emphasis-color: rgb(0, 0, 0);
    transition-duration: 0.5s;
    transition-timing-function: ease-in-out;
    width: 0px;
    z-index: 1;
    -webkit-text-fill-color: rgb(0, 0, 0);
    -webkit-text-stroke-color: rgb(0, 0, 0);
  }

  [data-id="36"]::before {
    background-image: linear-gradient(to right, rgb(255, 0, 0) 0%, rgba(255, 80, 228, 0.15) 85%, rgba(255, 255, 255, 0) 100%);
    block-size: 4px;
    border-block-end-color: rgb(0, 0, 0);
    border-block-start-color: rgb(0, 0, 0);
    border-bottom-color: rgb(0, 0, 0);
    border-inline-end-color: rgb(0, 0, 0);
    border-inline-start-color: rgb(0, 0, 0);
    border-left-color: rgb(0, 0, 0);
    border-right-color: rgb(0, 0, 0);
    border-top-color: rgb(0, 0, 0);
    bottom: 14px;
    caret-color: rgb(0, 0, 0);
    color: rgb(0, 0, 0);
    column-rule-color: rgb(0, 0, 0);
    content: "";
    display: block;
    font-size: 18px;
    font-weight: 900;
    height: 4px;
    inline-size: 0px;
    inset-block-end: 14px;
    inset-block-start: 42px;
    inset-inline-end: 0px;
    inset-inline-start: 37.5px;
    left: 0px;
    line-height: 18px;
    list-style-type: none;
    outline-color: rgb(0, 0, 0);
    perspective-origin: 0px 2px;
    position: absolute;
    right: 37.5px;
    text-align: center;
    text-decoration: none solid rgb(0, 0, 0);
    text-decoration-color: rgb(0, 0, 0);
    text-emphasis-color: rgb(0, 0, 0);
    top: 42px;
    transform-origin: 0px 2px;
    transition-duration: 0.25s;
    transition-timing-function: ease-in-out;
    width: 0px;
    -webkit-text-fill-color: rgb(0, 0, 0);
    -webkit-text-stroke-color: rgb(0, 0, 0);
  }

  [data-id="37"]::after {
    border-block-end-color: rgb(0, 0, 0);
    border-block-start-color: rgb(0, 0, 0);
    border-bottom-color: rgb(0, 0, 0);
    border-inline-end-color: rgb(0, 0, 0);
    border-inline-start-color: rgb(0, 0, 0);
    border-left-color: rgb(0, 0, 0);
    border-right-color: rgb(0, 0, 0);
    border-top-color: rgb(0, 0, 0);
    caret-color: rgb(0, 0, 0);
    color: rgb(0, 0, 0);
    column-rule-color: rgb(0, 0, 0);
    content: " ›";
    font-size: 20.7px;
    font-weight: 900;
    letter-spacing: -0.5px;
    line-height: 20px;
    list-style-type: none;
    outline-color: rgb(0, 0, 0);
    text-align: right;
    text-decoration: none solid rgb(0, 0, 0);
    text-decoration-color: rgb(0, 0, 0);
    text-emphasis-color: rgb(0, 0, 0);
    text-wrap: nowrap;
    -webkit-text-fill-color: rgb(0, 0, 0);
    -webkit-text-stroke-color: rgb(0, 0, 0);
  }

  [data-id="38"]::after {
    border-block-end-color: rgb(0, 0, 0);
    border-block-start-color: rgb(0, 0, 0);
    border-bottom-color: rgb(0, 0, 0);
    border-inline-end-color: rgb(0, 0, 0);
    border-inline-start-color: rgb(0, 0, 0);
    border-left-color: rgb(0, 0, 0);
    border-right-color: rgb(0, 0, 0);
    border-top-color: rgb(0, 0, 0);
    caret-color: rgb(0, 0, 0);
    color: rgb(0, 0, 0);
    column-rule-color: rgb(0, 0, 0);
    content: " ›";
    font-size: 20.7px;
    font-weight: 900;
    letter-spacing: -0.5px;
    line-height: 20px;
    list-style-type: none;
    outline-color: rgb(0, 0, 0);
    text-align: right;
    text-decoration: none solid rgb(0, 0, 0);
    text-decoration-color: rgb(0, 0, 0);
    text-emphasis-color: rgb(0, 0, 0);
    text-wrap: nowrap;
    -webkit-text-fill-color: rgb(0, 0, 0);
    -webkit-text-stroke-color: rgb(0, 0, 0);
  }

  [data-id="39"]::after {
    border-block-end-color: rgb(0, 0, 0);
    border-block-start-color: rgb(0, 0, 0);
    border-bottom-color: rgb(0, 0, 0);
    border-inline-end-color: rgb(0, 0, 0);
    border-inline-start-color: rgb(0, 0, 0);
    border-left-color: rgb(0, 0, 0);
    border-right-color: rgb(0, 0, 0);
    border-top-color: rgb(0, 0, 0);
    caret-color: rgb(0, 0, 0);
    color: rgb(0, 0, 0);
    column-rule-color: rgb(0, 0, 0);
    content: " ›";
    font-size: 20.7px;
    font-weight: 900;
    letter-spacing: -0.5px;
    line-height: 20px;
    list-style-type: none;
    outline-color: rgb(0, 0, 0);
    text-align: right;
    text-decoration: none solid rgb(0, 0, 0);
    text-decoration-color: rgb(0, 0, 0);
    text-emphasis-color: rgb(0, 0, 0);
    text-wrap: nowrap;
    -webkit-text-fill-color: rgb(0, 0, 0);
    -webkit-text-stroke-color: rgb(0, 0, 0);
  }

  [data-id="40"]::before {
    background-image: linear-gradient(to right, rgb(255, 0, 0) 0%, rgb(255, 0, 0) 68%, rgb(255, 80, 228) 100%);
    block-size: 7px;
    content: "";
    display: block;
    height: 7px;
    inset-block-start: 0px;
    inset-inline-end: 0px;
    inset-inline-start: 0px;
    left: 0px;
    list-style-type: none;
    position: absolute;
    right: 0px;
    text-align: right;
    top: 0px;
  }

  [data-id="41"]::after {
    block-size: 0px;
    border-block-end-color: rgb(255, 0, 0);
    border-block-end-style: solid;
    border-block-end-width: 9px;
    border-block-start-color: rgba(0, 0, 0, 0);
    border-block-start-style: solid;
    border-block-start-width: 9px;
    border-bottom-color: rgb(255, 0, 0);
    border-bottom-style: solid;
    border-bottom-width: 9px;
    border-inline-end-color: rgba(0, 0, 0, 0);
    border-inline-end-style: solid;
    border-inline-end-width: 9px;
    border-inline-start-color: rgba(0, 0, 0, 0);
    border-inline-start-style: solid;
    border-inline-start-width: 9px;
    border-left-color: rgba(0, 0, 0, 0);
    border-left-style: solid;
    border-left-width: 9px;
    border-right-color: rgba(0, 0, 0, 0);
    border-right-style: solid;
    border-right-width: 9px;
    border-top-color: rgba(0, 0, 0, 0);
    border-top-style: solid;
    border-top-width: 9px;
    bottom: -35px;
    caret-color: rgb(255, 0, 0);
    color: rgb(255, 0, 0);
    column-rule-color: rgb(255, 0, 0);
    content: "";
    display: none;
    font-size: 18px;
    font-weight: 900;
    height: 0px;
    inline-size: 0px;
    inset-block-end: -35px;
    inset-inline-end: 50%;
    left: 50%;
    line-height: 18px;
    list-style-type: none;
    opacity: 0;
    outline-color: rgb(255, 0, 0);
    position: absolute;
    text-align: center;
    text-decoration: none solid rgb(255, 0, 0);
    text-decoration-color: rgb(255, 0, 0);
    text-emphasis-color: rgb(255, 0, 0);
    transition-duration: 0.5s;
    transition-timing-function: ease-in-out;
    width: 0px;
    z-index: 1;
    -webkit-text-fill-color: rgb(255, 0, 0);
    -webkit-text-stroke-color: rgb(255, 0, 0);
  }

  [data-id="41"]::before {
    background-image: linear-gradient(to right, rgb(255, 0, 0) 0%, rgba(255, 80, 228, 0.15) 85%, rgba(255, 255, 255, 0) 100%);
    block-size: 4px;
    border-block-end-color: rgb(255, 0, 0);
    border-block-start-color: rgb(255, 0, 0);
    border-bottom-color: rgb(255, 0, 0);
    border-inline-end-color: rgb(255, 0, 0);
    border-inline-start-color: rgb(255, 0, 0);
    border-left-color: rgb(255, 0, 0);
    border-right-color: rgb(255, 0, 0);
    border-top-color: rgb(255, 0, 0);
    bottom: 14px;
    caret-color: rgb(255, 0, 0);
    color: rgb(255, 0, 0);
    column-rule-color: rgb(255, 0, 0);
    content: "";
    display: block;
    font-size: 18px;
    font-weight: 900;
    height: 4px;
    inline-size: 0px;
    inset-block-end: 14px;
    inset-block-start: 42px;
    inset-inline-end: 0px;
    inset-inline-start: 137.516px;
    left: 0px;
    line-height: 18px;
    list-style-type: none;
    outline-color: rgb(255, 0, 0);
    perspective-origin: 0px 2px;
    position: absolute;
    right: 137.516px;
    text-align: center;
    text-decoration: none solid rgb(255, 0, 0);
    text-decoration-color: rgb(255, 0, 0);
    text-emphasis-color: rgb(255, 0, 0);
    top: 42px;
    transform-origin: 0px 2px;
    transition-duration: 0.25s;
    transition-timing-function: ease-in-out;
    width: 0px;
    -webkit-text-fill-color: rgb(255, 0, 0);
    -webkit-text-stroke-color: rgb(255, 0, 0);
  }

  [data-id="42"]::after {
    border-block-end-color: rgb(0, 0, 0);
    border-block-start-color: rgb(0, 0, 0);
    border-bottom-color: rgb(0, 0, 0);
    border-inline-end-color: rgb(0, 0, 0);
    border-inline-start-color: rgb(0, 0, 0);
    border-left-color: rgb(0, 0, 0);
    border-right-color: rgb(0, 0, 0);
    border-top-color: rgb(0, 0, 0);
    caret-color: rgb(0, 0, 0);
    color: rgb(0, 0, 0);
    column-rule-color: rgb(0, 0, 0);
    content: " ›";
    font-size: 20.7px;
    font-weight: 900;
    letter-spacing: -0.5px;
    line-height: 20px;
    list-style-type: none;
    outline-color: rgb(0, 0, 0);
    text-align: right;
    text-decoration: none solid rgb(0, 0, 0);
    text-decoration-color: rgb(0, 0, 0);
    text-emphasis-color: rgb(0, 0, 0);
    text-wrap: nowrap;
    -webkit-text-fill-color: rgb(0, 0, 0);
    -webkit-text-stroke-color: rgb(0, 0, 0);
  }

  [data-id="43"]::after {
    border-block-end-color: rgb(0, 0, 0);
    border-block-start-color: rgb(0, 0, 0);
    border-bottom-color: rgb(0, 0, 0);
    border-inline-end-color: rgb(0, 0, 0);
    border-inline-start-color: rgb(0, 0, 0);
    border-left-color: rgb(0, 0, 0);
    border-right-color: rgb(0, 0, 0);
    border-top-color: rgb(0, 0, 0);
    caret-color: rgb(0, 0, 0);
    color: rgb(0, 0, 0);
    column-rule-color: rgb(0, 0, 0);
    content: " ›";
    font-size: 20.7px;
    font-weight: 900;
    letter-spacing: -0.5px;
    line-height: 20px;
    list-style-type: none;
    outline-color: rgb(0, 0, 0);
    text-align: right;
    text-decoration: none solid rgb(0, 0, 0);
    text-decoration-color: rgb(0, 0, 0);
    text-emphasis-color: rgb(0, 0, 0);
    text-wrap: nowrap;
    -webkit-text-fill-color: rgb(0, 0, 0);
    -webkit-text-stroke-color: rgb(0, 0, 0);
  }

  [data-id="44"]::after {
    border-block-end-color: rgb(0, 0, 0);
    border-block-start-color: rgb(0, 0, 0);
    border-bottom-color: rgb(0, 0, 0);
    border-inline-end-color: rgb(0, 0, 0);
    border-inline-start-color: rgb(0, 0, 0);
    border-left-color: rgb(0, 0, 0);
    border-right-color: rgb(0, 0, 0);
    border-top-color: rgb(0, 0, 0);
    caret-color: rgb(0, 0, 0);
    color: rgb(0, 0, 0);
    column-rule-color: rgb(0, 0, 0);
    content: " ›";
    font-size: 20.7px;
    font-weight: 900;
    letter-spacing: -0.5px;
    line-height: 20px;
    list-style-type: none;
    outline-color: rgb(0, 0, 0);
    text-align: right;
    text-decoration: none solid rgb(0, 0, 0);
    text-decoration-color: rgb(0, 0, 0);
    text-emphasis-color: rgb(0, 0, 0);
    text-wrap: nowrap;
    -webkit-text-fill-color: rgb(0, 0, 0);
    -webkit-text-stroke-color: rgb(0, 0, 0);
  }

  [data-id="45"]::after {
    border-block-end-color: rgb(0, 0, 0);
    border-block-start-color: rgb(0, 0, 0);
    border-bottom-color: rgb(0, 0, 0);
    border-inline-end-color: rgb(0, 0, 0);
    border-inline-start-color: rgb(0, 0, 0);
    border-left-color: rgb(0, 0, 0);
    border-right-color: rgb(0, 0, 0);
    border-top-color: rgb(0, 0, 0);
    caret-color: rgb(0, 0, 0);
    color: rgb(0, 0, 0);
    column-rule-color: rgb(0, 0, 0);
    content: " ›";
    font-size: 20.7px;
    font-weight: 900;
    letter-spacing: -0.5px;
    line-height: 20px;
    list-style-type: none;
    outline-color: rgb(0, 0, 0);
    text-align: right;
    text-decoration: none solid rgb(0, 0, 0);
    text-decoration-color: rgb(0, 0, 0);
    text-emphasis-color: rgb(0, 0, 0);
    text-wrap: nowrap;
    -webkit-text-fill-color: rgb(0, 0, 0);
    -webkit-text-stroke-color: rgb(0, 0, 0);
  }

  [data-id="46"]::before {
    background-image: linear-gradient(to right, rgb(255, 0, 0) 0%, rgb(255, 0, 0) 68%, rgb(255, 80, 228) 100%);
    block-size: 7px;
    content: "";
    display: block;
    height: 7px;
    inset-block-start: 0px;
    inset-inline-end: 0px;
    inset-inline-start: 0px;
    left: 0px;
    list-style-type: none;
    position: absolute;
    right: 0px;
    text-align: right;
    top: 0px;
  }

  [data-id="47"]::before {
    block-size: 20.6875px;
    bottom: 18.3125px;
    content: "|";
    display: block;
    font-size: 18px;
    height: 20.6875px;
    inline-size: 32px;
    inset-block-end: 18.3125px;
    inset-block-start: 21px;
    inset-inline-end: 1068.83px;
    inset-inline-start: 661.172px;
    left: 1068.83px;
    line-height: 20.7px;
    margin-inline-start: -32px;
    margin-right: -32px;
    perspective-origin: 16px 10.3438px;
    position: absolute;
    right: 661.172px;
    text-align: center;
    top: 21px;
    transform-origin: 16px 10.3438px;
    width: 32px;
  }
</style>
<div
  class="headerBottom"
  id="test-subject"
  style="background-color: rgb(255, 255, 255); block-size: 100px; inset: 0px; height: 100px; inset-block: 0px; inset-inline: 0px; padding-block-start: 20px; padding-inline-start: 190px; padding-right: 190px; padding-top: 20px; perspective-origin: 960px 50px; position: relative; transform-origin: 960px 50px; z-index: 1"
>
  <div
    class="headerBottom_left"
    style="align-items: center; block-size: 56px; inset: 24px 1218.92px 20px 80px; display: flex; flex-direction: row-reverse; height: 56px; inline-size: 621.078px; inset-block: 24px 20px; inset-inline: 1218.92px 80px; perspective-origin: 310.531px 28px; position: absolute; transform-origin: 310.539px 28px; width: 621.078px; z-index: 1"
  >
    <!-- ngIf: AuthStatus == true -->

    <!-- ngIf: AuthStatus != true -->
    <div
      class="headerBottom_leftUser ng-scope"
      ng-if="AuthStatus != true"
      style="
        block-size: 48px;
        inset: 0px;
        height: 48px;
        inline-size: 247.391px;
        inset-block: 0px;
        inset-inline: 0px;
        margin-inline-start: 12px;
        margin-right: 12px;
        min-block-size: auto;
        min-height: auto;
        min-inline-size: auto;
        min-width: auto;
        perspective-origin: 123.688px 24px;
        position: relative;
        transform-origin: 123.695px 24px;
        width: 247.391px;
      "
    >
      <a
        id="headerBottom_userToggle"
        class="headerBottom_userToggle"
        aria-expanded="false"
        aria-controls="headerBottom_userPop"
        ng-click="LoginState = !LoginState"
        role="button"
        tabindex="0"
        style="
          background-image: linear-gradient(to right, rgb(255, 0, 0) 0%, rgb(255, 0, 0) 68%, rgb(255, 80, 228) 100%);
          block-size: 48px;
          border-block-color: rgb(0, 0, 0);
          border-color: rgb(0, 0, 0);
          border-inline-color: rgb(0, 0, 0);
          caret-color: rgb(0, 0, 0);
          color: rgb(0, 0, 0);
          column-rule-color: rgb(0, 0, 0);
          display: inline-block;
          font-size: 24px;
          font-weight: 900;
          height: 48px;
          inline-size: 247.391px;
          line-height: 44px;
          outline-color: rgb(0, 0, 0);
          padding-block: 2px;
          padding: 2px;
          padding-inline: 2px;
          perspective-origin: 123.688px 24px;
          text-align: center;
          text-decoration: none solid rgb(0, 0, 0);
          text-emphasis-color: rgb(0, 0, 0);
          transform-origin: 123.695px 24px;
          transition-duration: 0.5s;
          transition-timing-function: ease-in-out;
          width: 247.391px;
          -webkit-text-fill-color: rgb(0, 0, 0);
          -webkit-text-stroke-color: rgb(0, 0, 0);
        "
      >
        <div
          id="logincsstxt"
          style="
            background-color: rgb(255, 255, 255);
            block-size: 44px;
            border-block-color: rgb(0, 0, 0);
            border-color: rgb(0, 0, 0);
            border-inline-color: rgb(0, 0, 0);
            caret-color: rgb(0, 0, 0);
            color: rgb(0, 0, 0);
            column-rule-color: rgb(0, 0, 0);
            cursor: pointer;
            font-size: 24px;
            font-weight: 900;
            height: 44px;
            inline-size: 243.391px;
            line-height: 44px;
            outline-color: rgb(0, 0, 0);
            padding-inline: 20px;
            padding-left: 20px;
            padding-right: 20px;
            perspective-origin: 121.688px 22px;
            text-align: center;
            text-decoration: none solid rgb(0, 0, 0);
            text-emphasis-color: rgb(0, 0, 0);
            transform-origin: 121.695px 22px;
            width: 243.391px;
            -webkit-text-fill-color: rgb(0, 0, 0);
            -webkit-text-stroke-color: rgb(0, 0, 0);
          "
        >
          כניסה לאזור האישי
        </div>
        <svg
          tabindex="-1"
          focusable="”false”"
          aria-label="user icon"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 94 94"
          style="
            border-block-color: rgb(0, 0, 0);
            border-color: rgb(0, 0, 0);
            border-inline-color: rgb(0, 0, 0);
            caret-color: rgb(0, 0, 0);
            color: rgb(0, 0, 0);
            column-rule-color: rgb(0, 0, 0);
            cursor: pointer;
            display: none;
            font-size: 24px;
            font-weight: 900;
            line-height: 44px;
            outline-color: rgb(0, 0, 0);
            overflow-clip-margin: content-box;
            overflow: hidden;
            perspective-origin: 50% 50%;
            text-align: center;
            text-decoration: none solid rgb(0, 0, 0);
            text-emphasis-color: rgb(0, 0, 0);
            transform-origin: 50% 50%;
            -webkit-text-fill-color: rgb(0, 0, 0);
            -webkit-text-stroke-color: rgb(0, 0, 0);
          "
        >
          <defs>
            <filter id="filter4" x="-0.031" y="0" filterUnits="userSpaceOnUse">
              <feImage
                preserveAspectRatio="none"
                x="-0.03125"
                y="0"
                result="image"
                xlink:href="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iOTMiIGhlaWdodD0iOTIuOTY5IiB2aWV3Qm94PSIwIDAgOTMgOTIuOTY5Ij4KICA8ZGVmcz4KICAgIDxzdHlsZT4KICAgICAgLmNscy0xIHsKIC"
              ></feImage>
              <feComposite result="composite" operator="in" in2="SourceGraphic"></feComposite>
              <feBlend result="blend" in2="SourceGraphic"></feBlend>
            </filter>
          </defs>
          <path
            tabindex="-1"
            class="gradientHot"
            d="M46.466,0.008A46.488,46.488,0,1,0,92.954,46.5,46.541,46.541,0,0,0,46.466.008Zm26.8,72.106V70.279c0-6.338-7.326-8.653-11.245-10.329-1.419-.606-4.1-1.89-6.842-3.234a3.742,3.742,0,0,1-1.869-2.688l-0.3-3.006A12.9,12.9,0,0,0,57.325,43.3H57.8a1.6,1.6,0,0,0,1.558-1.24L60.1,37.47a1.523,1.523,0,0,0-1.575-1.578c0.017-.1.034-0.2,0.047-0.279a15.656,15.656,0,0,0,.189-1.6c0.049-.417.086-0.851,0.1-1.3a10.392,10.392,0,0,0-.9-5.125,12.146,12.146,0,0,0-2.861-4.162c-3.631-3.438-7.842-4.776-11.434-2.013a8.309,8.309,0,0,0-7.451,3.153,9.78,9.78,0,0,0-2.165,4.39,13.894,13.894,0,0,0-.5,3.316,13.411,13.411,0,0,0,.339,3.645,1.536,1.536,0,0,0-1.431,1.56l0.741,4.593a1.6,1.6,0,0,0,1.558,1.241h0.425a15.416,15.416,0,0,0,4.35,7.861l-0.292,2.9a3.76,3.76,0,0,1-1.869,2.692c-2.655,1.3-5.271,2.546-6.837,3.19C26.855,61.473,19.3,63.945,19.3,70.283v1.434A37.121,37.121,0,1,1,73.27,72.114Z"
          ></path>
        </svg>
      </a>
      <!-- ngIf: LoginState -->
    </div>
    <!-- end ngIf: AuthStatus != true -->

    <div class="headerBottom_leftJoin" style="block-size: 48px; height: 48px; inline-size: 259.25px; min-block-size: auto; min-height: auto; min-inline-size: auto; min-width: auto; padding-inline-start: 16px; padding-right: 16px; perspective-origin: 129.625px 24px; transform-origin: 129.625px 24px; width: 259.25px">
      <a
        aria-label="הפעלת SIM/eSIM"
        href="/Pages/Sim_Activation.aspx"
        style="
          background-image: linear-gradient(to right, rgb(255, 0, 0) 0%, rgb(255, 0, 0) 68%, rgb(255, 80, 228) 100%);
          block-size: 48px;
          border-block-color: rgb(0, 0, 0);
          border-color: rgb(0, 0, 0);
          border-inline-color: rgb(0, 0, 0);
          caret-color: rgb(0, 0, 0);
          color: rgb(0, 0, 0);
          column-rule-color: rgb(0, 0, 0);
          display: inline-block;
          font-size: 24px;
          font-weight: 900;
          height: 48px;
          inline-size: 243.25px;
          line-height: 44px;
          outline-color: rgb(0, 0, 0);
          padding-block: 2px;
          padding: 2px;
          padding-inline: 2px;
          perspective-origin: 121.625px 24px;
          text-align: center;
          text-decoration: none solid rgb(0, 0, 0);
          text-emphasis-color: rgb(0, 0, 0);
          transform-origin: 121.625px 24px;
          transition-duration: 0.5s;
          transition-timing-function: ease-in-out;
          width: 243.25px;
          -webkit-text-fill-color: rgb(0, 0, 0);
          -webkit-text-stroke-color: rgb(0, 0, 0);
        "
      >
        <div
          style="
            background-color: rgb(255, 255, 255);
            block-size: 44px;
            border-block-color: rgb(0, 0, 0);
            border-color: rgb(0, 0, 0);
            border-inline-color: rgb(0, 0, 0);
            caret-color: rgb(0, 0, 0);
            color: rgb(0, 0, 0);
            column-rule-color: rgb(0, 0, 0);
            cursor: pointer;
            font-size: 24px;
            font-weight: 900;
            height: 44px;
            inline-size: 239.25px;
            line-height: 44px;
            outline-color: rgb(0, 0, 0);
            padding-inline: 20px;
            padding-left: 20px;
            padding-right: 20px;
            perspective-origin: 119.625px 22px;
            text-align: center;
            text-decoration: none solid rgb(0, 0, 0);
            text-emphasis-color: rgb(0, 0, 0);
            transform-origin: 119.625px 22px;
            width: 239.25px;
            -webkit-text-fill-color: rgb(0, 0, 0);
            -webkit-text-stroke-color: rgb(0, 0, 0);
          "
        >
          הפעלת SIM/eSIM
        </div>
        <svg
          tabindex="-1"
          focusable="”false”"
          aria-hidden="איקון הפעלת סים"
          xmlns="http://www.w3.org/2000/svg"
          width="81"
          height="96"
          viewBox="0 0 81 96"
          style="
            block-size: 96px;
            border-block-color: rgb(0, 0, 0);
            border-color: rgb(0, 0, 0);
            border-inline-color: rgb(0, 0, 0);
            caret-color: rgb(0, 0, 0);
            color: rgb(0, 0, 0);
            column-rule-color: rgb(0, 0, 0);
            cursor: pointer;
            display: none;
            font-size: 24px;
            font-weight: 900;
            height: 96px;
            inline-size: 81px;
            line-height: 44px;
            outline-color: rgb(0, 0, 0);
            overflow-clip-margin: content-box;
            overflow: hidden;
            perspective-origin: 50% 50%;
            text-align: center;
            text-decoration: none solid rgb(0, 0, 0);
            text-emphasis-color: rgb(0, 0, 0);
            transform-origin: 50% 50%;
            width: 81px;
            -webkit-text-fill-color: rgb(0, 0, 0);
            -webkit-text-stroke-color: rgb(0, 0, 0);
          "
        >
          <path
            tabindex="-1"
            d="M73.506,96H7.515A7.487,7.487,0,0,1,0,88.56V7.44A7.487,7.487,0,0,1,7.515,0h47.85a14.5,14.5,0,0,1,9.573,4.156L77.26,17.4a15.678,15.678,0,0,1,3.761,9.539V88.56A7.486,7.486,0,0,1,73.506,96ZM7.515,6.377A1.083,1.083,0,0,0,6.442,7.44V88.56a1.083,1.083,0,0,0,1.074,1.063h65.99a1.083,1.083,0,0,0,1.074-1.063V26.939a9.463,9.463,0,0,0-2.058-5.219L60.2,8.476a8.208,8.208,0,0,0-4.835-2.1H7.515Zm9.537,28.589a3.2,3.2,0,0,1-3.221-3.189v-13.6a3.221,3.221,0,0,1,6.442,0v13.6A3.2,3.2,0,0,1,17.053,34.966Zm12.469,0A3.2,3.2,0,0,1,26.3,31.777v-13.6a3.221,3.221,0,0,1,6.442,0v13.6A3.2,3.2,0,0,1,29.522,34.966Zm12.469,0a3.2,3.2,0,0,1-3.221-3.189v-13.6a3.221,3.221,0,0,1,6.442,0v13.6A3.2,3.2,0,0,1,41.991,34.966Zm12.469,0a3.2,3.2,0,0,1-3.221-3.189v-13.6a3.221,3.221,0,0,1,6.442,0v13.6A3.2,3.2,0,0,1,54.46,34.966Z"
          ></path>
        </svg>
      </a>
    </div>
    <div class="headerBottom_leftLang" style="block-size: 56px; inset: 0px; height: 56px; inline-size: 102.438px; inset-block: 0px; inset-inline: 0px; min-block-size: auto; min-height: auto; min-inline-size: auto; min-width: auto; perspective-origin: 51.2188px 28px; position: relative; transform-origin: 51.2188px 28px; width: 102.438px">
      <a
        href="#"
        aria-haspopup="true"
        class="headerLang_toggle"
        aria-expanded="false"
        aria-controls="headerLang_pop"
        aria-label="לחץ לשינוי שפה - שפה נוכחית: עברית"
        style="
          block-size: 56px;
          border-block-color: rgb(0, 0, 0);
          border-color: rgb(0, 0, 0);
          border-inline-color: rgb(0, 0, 0);
          caret-color: rgb(0, 0, 0);
          color: rgb(0, 0, 0);
          column-rule-color: rgb(0, 0, 0);
          direction: ltr;
          display: inline-block;
          height: 56px;
          inline-size: 102.453px;
          outline-color: rgb(0, 0, 0);
          padding-block: 12px;
          padding: 12px;
          padding-inline: 12px;
          perspective-origin: 51.2188px 28px;
          text-decoration: none solid rgb(0, 0, 0);
          text-emphasis-color: rgb(0, 0, 0);
          transform-origin: 51.2266px 28px;
          width: 102.453px;
          -webkit-text-fill-color: rgb(0, 0, 0);
          -webkit-text-stroke-color: rgb(0, 0, 0);
        "
      >
        <svg
          tabindex="-1"
          focusable="”false”"
          aria-label="language icon"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 94 94"
          style="
            block-size: 32px;
            border-block-color: rgb(0, 0, 0);
            border-color: rgb(0, 0, 0);
            border-inline-color: rgb(0, 0, 0);
            caret-color: rgb(0, 0, 0);
            color: rgb(0, 0, 0);
            column-rule-color: rgb(0, 0, 0);
            cursor: pointer;
            direction: ltr;
            display: inline-block;
            height: 32px;
            inline-size: 32px;
            outline-color: rgb(0, 0, 0);
            overflow-clip-margin: content-box;
            overflow: hidden;
            perspective-origin: 16px 16px;
            text-decoration: none solid rgb(0, 0, 0);
            text-emphasis-color: rgb(0, 0, 0);
            transform-origin: 16px 16px;
            vertical-align: middle;
            width: 32px;
            -webkit-text-fill-color: rgb(0, 0, 0);
            -webkit-text-stroke-color: rgb(0, 0, 0);
          "
        >
          <defs>
            <filter id="filter5" x="0.938" y="0.938" filterUnits="userSpaceOnUse">
              <feImage
                preserveAspectRatio="none"
                x="0.9375"
                y="0.9375"
                result="image"
                xlink:href="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iOTMuMDYzIiBoZWlnaHQ9IjkzLjA5NCIgdmlld0JveD0iMCAwIDkzLjA2MyA5My4wOTQiPgogIDxkZWZzPgogICAgPHN0eWxlPgogICAgICAuY2"
              ></feImage>
              <feComposite result="composite" operator="in" in2="SourceGraphic"></feComposite>
              <feBlend result="blend" in2="SourceGraphic"></feBlend>
            </filter>
          </defs>
          <path
            tabindex="-1"
            class="gradientHot"
            d="M86.124,21.6l-1.392.443-7.42.658-2.095,3.346L73.7,25.562,67.8,20.24l-0.86-2.766-1.143-2.95-3.71-3.328-4.378-.855-0.1,2,4.288,4.183,2.1,2.469-2.361,1.234-1.921-.566-2.876-1.2,0.1-2.32L53.155,14.59,51.9,20.045l-3.806.861,0.377,3.045L53.427,24.9l0.856-4.863,4.092,0.606,1.9,1.113h3.05l2.1,4.185,5.538,5.617-0.408,2.182-4.465-.569-7.715,3.9-5.562,6.663L52.09,46.685H50.1l-3.717-1.712-3.61,1.712,0.9,3.808,1.57-1.812L48,48.593,47.81,52.016,50.1,52.682l2.284,2.565,3.73-1.048,4.266,0.672L65.32,56.2,67.8,56.491l4.184,4.756L80.07,66,74.841,76,69.32,78.561l-2.1,5.711L59.238,89.6l-0.851,3.078A46.487,46.487,0,0,0,86.124,21.6Zm-33.3,50.217-3.392-6.285,3.111-6.484-3.111-.934L45.934,54.6l-7.74-1.733-2.569-5.377v3.192H34.493l-6.67-9.045V34.215l-4.892-7.947-7.764,1.384H9.939L7.305,25.929l3.357-2.662-3.348.775A46.47,46.47,0,0,0,47.463,94.028a48,48,0,0,0,5.843-.406l-0.486-5.635s2.136-8.375,2.136-8.658S52.819,71.814,52.819,71.814Zm-34.6-55.855,8.267-1.153L30.3,12.719l4.289,1.235,6.849-.379,2.347-3.689,3.423,0.564,8.314-.78,2.286-2.525,3.229-2.156,4.569,0.689,1.67-.253A46.407,46.407,0,0,0,11.569,17.872h0.023ZM49.428,5.58l4.757-2.616,3.05,1.762L52.813,8.091,48.6,8.515,46.7,7.282Zm-14.078.382,2.1,0.873,2.746-.873,1.5,2.592-6.341,1.665L32.3,8.436S35.281,6.516,35.349,5.962Z"
          ></path>
        </svg>
        <span
          data-id="0"
          style="
            block-size: 32px;
            border-block-color: rgb(0, 0, 0);
            border-color: rgb(0, 0, 0);
            border-inline-color: rgb(0, 0, 0);
            inset: 0px;
            caret-color: rgb(0, 0, 0);
            color: rgb(0, 0, 0);
            column-rule-color: rgb(0, 0, 0);
            cursor: pointer;
            direction: ltr;
            display: inline-block;
            font-size: 18px;
            font-weight: 900;
            height: 32px;
            inline-size: 42.625px;
            inset-block: 0px;
            inset-inline: 0px;
            line-height: 32px;
            outline-color: rgb(0, 0, 0);
            padding-inline-end: 16px;
            padding-right: 16px;
            perspective-origin: 21.3125px 16px;
            position: relative;
            text-decoration: none solid rgb(0, 0, 0);
            text-emphasis-color: rgb(0, 0, 0);
            transform-origin: 21.3125px 16px;
            vertical-align: middle;
            width: 42.625px;
            -webkit-text-fill-color: rgb(0, 0, 0);
            -webkit-text-stroke-color: rgb(0, 0, 0);
          "
          >HE</span
        >
      </a>
      <div
        id="headerLang_pop"
        class="headerLang_pop"
        aria-hidden="true"
        data-id="6"
        style="background-color: rgb(255, 255, 255); block-size: auto; box-shadow: rgb(0, 0, 0) 0px 0px 12px 0px; display: none; height: auto; inline-size: 185px; inset-block-start: 100%; inset-inline-end: 0px; left: 0px; perspective-origin: 50% 50%; position: absolute; top: 100%; transform-origin: 50% 50%; width: 185px"
      >
        <ul style="block-size: auto; font-size: 18px; font-weight: 900; height: auto; inline-size: auto; letter-spacing: -0.5px; line-height: 20px; padding-block: 18px; padding: 18px; padding-inline: 18px; perspective-origin: 50% 50%; transform-origin: 50% 50%; width: auto">
          <li style="block-size: auto; font-size: 18px; font-weight: 900; height: auto; inline-size: auto; letter-spacing: -0.5px; line-height: 20px; padding-block: 14px; padding-bottom: 14px; padding-top: 14px; perspective-origin: 50% 50%; position: relative; transform-origin: 50% 50%; width: auto">
            <a
              aria-label="שנה שפה לעברית"
              href="/"
              data-id="1"
              style="
                border-block-color: rgb(0, 0, 0);
                border-color: rgb(0, 0, 0);
                border-inline-color: rgb(0, 0, 0);
                caret-color: rgb(0, 0, 0);
                color: rgb(0, 0, 0);
                column-rule-color: rgb(0, 0, 0);
                display: block;
                font-size: 18px;
                font-weight: 900;
                letter-spacing: -0.5px;
                line-height: 20px;
                list-style-type: none;
                outline-color: rgb(0, 0, 0);
                perspective-origin: 50% 50%;
                text-align: right;
                text-decoration: none solid rgb(0, 0, 0);
                text-emphasis-color: rgb(0, 0, 0);
                transform-origin: 50% 50%;
                -webkit-text-fill-color: rgb(0, 0, 0);
                -webkit-text-stroke-color: rgb(0, 0, 0);
              "
              >עברית</a
            >
          </li>
          <li style="block-size: auto; font-size: 18px; font-weight: 900; height: auto; inline-size: auto; letter-spacing: -0.5px; line-height: 20px; padding-block: 14px; padding-bottom: 14px; padding-top: 14px; perspective-origin: 50% 50%; position: relative; transform-origin: 50% 50%; width: auto">
            <a
              aria-label="שנה שפה לרוסית"
              href="/hotmobile/pages/default.aspx"
              data-id="2"
              style="
                border-block-color: rgb(0, 0, 0);
                border-color: rgb(0, 0, 0);
                border-inline-color: rgb(0, 0, 0);
                caret-color: rgb(0, 0, 0);
                color: rgb(0, 0, 0);
                column-rule-color: rgb(0, 0, 0);
                display: block;
                font-size: 18px;
                font-weight: 900;
                letter-spacing: -0.5px;
                line-height: 20px;
                list-style-type: none;
                outline-color: rgb(0, 0, 0);
                perspective-origin: 50% 50%;
                text-align: right;
                text-decoration: none solid rgb(0, 0, 0);
                text-emphasis-color: rgb(0, 0, 0);
                transform-origin: 50% 50%;
                -webkit-text-fill-color: rgb(0, 0, 0);
                -webkit-text-stroke-color: rgb(0, 0, 0);
              "
              >Русский</a
            >
          </li>
          <li style="block-size: auto; font-size: 18px; font-weight: 900; height: auto; inline-size: auto; letter-spacing: -0.5px; line-height: 20px; padding-block: 14px; padding-bottom: 14px; padding-top: 14px; perspective-origin: 50% 50%; position: relative; transform-origin: 50% 50%; width: auto">
            <a
              aria-label="שנה שפה לערבית"
              href="/arab/pages/default.aspx"
              data-id="3"
              style="
                border-block-color: rgb(0, 0, 0);
                border-color: rgb(0, 0, 0);
                border-inline-color: rgb(0, 0, 0);
                caret-color: rgb(0, 0, 0);
                color: rgb(0, 0, 0);
                column-rule-color: rgb(0, 0, 0);
                display: block;
                font-size: 18px;
                font-weight: 900;
                letter-spacing: -0.5px;
                line-height: 20px;
                list-style-type: none;
                outline-color: rgb(0, 0, 0);
                perspective-origin: 50% 50%;
                text-align: right;
                text-decoration: none solid rgb(0, 0, 0);
                text-emphasis-color: rgb(0, 0, 0);
                transform-origin: 50% 50%;
                -webkit-text-fill-color: rgb(0, 0, 0);
                -webkit-text-stroke-color: rgb(0, 0, 0);
              "
              >العربية</a
            >
          </li>
          <li style="block-size: auto; font-size: 18px; font-weight: 900; height: auto; inline-size: auto; letter-spacing: -0.5px; line-height: 20px; padding-block: 14px; padding-bottom: 14px; padding-top: 14px; perspective-origin: 50% 50%; position: relative; transform-origin: 50% 50%; width: auto">
            <a
              aria-label="שנה שפה לאנגלית"
              href="/hotmobile_en/pages/default.aspx"
              data-id="4"
              style="
                border-block-color: rgb(0, 0, 0);
                border-color: rgb(0, 0, 0);
                border-inline-color: rgb(0, 0, 0);
                caret-color: rgb(0, 0, 0);
                color: rgb(0, 0, 0);
                column-rule-color: rgb(0, 0, 0);
                display: block;
                font-size: 18px;
                font-weight: 900;
                letter-spacing: -0.5px;
                line-height: 20px;
                list-style-type: none;
                outline-color: rgb(0, 0, 0);
                perspective-origin: 50% 50%;
                text-align: right;
                text-decoration: none solid rgb(0, 0, 0);
                text-emphasis-color: rgb(0, 0, 0);
                transform-origin: 50% 50%;
                -webkit-text-fill-color: rgb(0, 0, 0);
                -webkit-text-stroke-color: rgb(0, 0, 0);
              "
              >English</a
            >
          </li>
          <li style="block-size: auto; font-size: 18px; font-weight: 900; height: auto; inline-size: auto; letter-spacing: -0.5px; line-height: 20px; padding-block: 14px; padding-bottom: 14px; padding-top: 14px; perspective-origin: 50% 50%; position: relative; transform-origin: 50% 50%; width: auto">
            <a
              aria-label="שנה שפה לצרפתית"
              href="/hotmobile_fr/pages/default.aspx"
              data-id="5"
              style="
                border-block-color: rgb(0, 0, 0);
                border-color: rgb(0, 0, 0);
                border-inline-color: rgb(0, 0, 0);
                caret-color: rgb(0, 0, 0);
                color: rgb(0, 0, 0);
                column-rule-color: rgb(0, 0, 0);
                display: block;
                font-size: 18px;
                font-weight: 900;
                letter-spacing: -0.5px;
                line-height: 20px;
                list-style-type: none;
                outline-color: rgb(0, 0, 0);
                perspective-origin: 50% 50%;
                text-align: right;
                text-decoration: none solid rgb(0, 0, 0);
                text-emphasis-color: rgb(0, 0, 0);
                transform-origin: 50% 50%;
                -webkit-text-fill-color: rgb(0, 0, 0);
                -webkit-text-stroke-color: rgb(0, 0, 0);
              "
              >Français</a
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
  <nav
    class="headerMenu"
    aria-label="תפריט ראשי לאתר"
    role="navigation"
    data-wcag="main-menu"
    data-mk-aweb="main-menu"
    data-mk-aweb-rewritten-role="navigation"
    style="block-size: 60px; inset: 0px; height: 60px; inline-size: 1730px; inset-block: 0px; inset-inline: 0px; perspective-origin: 865px 30px; position: relative; transform-origin: 865px 30px; width: 1730px"
  >
    <a
      href="#"
      aria-haspopup="true"
      aria-label="לחץ לפתוח תפריט מובייל"
      aria-expanded="false"
      aria-controls="headerMenu"
      class="headerMenu_toggleMobile"
      style="
        border-block-color: rgb(0, 114, 188);
        border-color: rgb(0, 114, 188);
        border-inline-color: rgb(0, 114, 188);
        caret-color: rgb(0, 114, 188);
        color: rgb(0, 114, 188);
        column-rule-color: rgb(0, 114, 188);
        display: none;
        outline-color: rgb(0, 114, 188);
        perspective-origin: 50% 50%;
        text-decoration: none solid rgb(0, 114, 188);
        text-emphasis-color: rgb(0, 114, 188);
        transform-origin: 50% 50%;
        -webkit-text-fill-color: rgb(0, 114, 188);
        -webkit-text-stroke-color: rgb(0, 114, 188);
      "
      ><span
        style="
          border-block-color: rgb(0, 114, 188);
          border-color: rgb(0, 114, 188);
          border-inline-color: rgb(0, 114, 188);
          caret-color: rgb(0, 114, 188);
          color: rgb(0, 114, 188);
          column-rule-color: rgb(0, 114, 188);
          cursor: pointer;
          outline-color: rgb(0, 114, 188);
          perspective-origin: 50% 50%;
          text-decoration: none solid rgb(0, 114, 188);
          text-emphasis-color: rgb(0, 114, 188);
          transform-origin: 50% 50%;
          -webkit-text-fill-color: rgb(0, 114, 188);
          -webkit-text-stroke-color: rgb(0, 114, 188);
        "
      ></span
      ><span
        style="
          border-block-color: rgb(0, 114, 188);
          border-color: rgb(0, 114, 188);
          border-inline-color: rgb(0, 114, 188);
          caret-color: rgb(0, 114, 188);
          color: rgb(0, 114, 188);
          column-rule-color: rgb(0, 114, 188);
          cursor: pointer;
          outline-color: rgb(0, 114, 188);
          perspective-origin: 50% 50%;
          text-decoration: none solid rgb(0, 114, 188);
          text-emphasis-color: rgb(0, 114, 188);
          transform-origin: 50% 50%;
          -webkit-text-fill-color: rgb(0, 114, 188);
          -webkit-text-stroke-color: rgb(0, 114, 188);
        "
      ></span
      ><span
        style="
          border-block-color: rgb(0, 114, 188);
          border-color: rgb(0, 114, 188);
          border-inline-color: rgb(0, 114, 188);
          caret-color: rgb(0, 114, 188);
          color: rgb(0, 114, 188);
          column-rule-color: rgb(0, 114, 188);
          cursor: pointer;
          outline-color: rgb(0, 114, 188);
          perspective-origin: 50% 50%;
          text-decoration: none solid rgb(0, 114, 188);
          text-emphasis-color: rgb(0, 114, 188);
          transform-origin: 50% 50%;
          -webkit-text-fill-color: rgb(0, 114, 188);
          -webkit-text-stroke-color: rgb(0, 114, 188);
        "
      ></span
    ></a>
    <ul id="headerMenu" role="menu" style="block-size: 60px; display: inline-flex; height: 60px; inline-size: 814.688px; perspective-origin: 407.344px 30px; transform-origin: 407.344px 30px; width: 814.688px">
      <li class="mobileShow" role="menuitem" style="block-size: auto; display: none; height: auto; inline-size: auto; margin-inline: 16px; margin-left: 16px; margin-right: 16px; perspective-origin: 50% 50%; transform-origin: 50% 50%; width: auto">
        <div class="mobileLang" data-id="7" style="block-size: auto; height: auto; inline-size: auto; list-style-type: none; perspective-origin: 50% 50%; text-align: right; transform-origin: 50% 50%; width: auto">
          <select style="block-size: auto; height: auto; inline-size: auto; list-style-type: none; perspective-origin: 50% 50%; transform-origin: 50% 50%; width: auto">
            <option
              value="שינוי שפה"
              style="
                block-size: auto;
                border-block-color: rgb(0, 0, 0);
                border-color: rgb(0, 0, 0);
                border-inline-color: rgb(0, 0, 0);
                caret-color: rgb(0, 0, 0);
                color: rgb(0, 0, 0);
                column-rule-color: rgb(0, 0, 0);
                cursor: default;
                font-size: 12px;
                height: auto;
                inline-size: auto;
                line-height: normal;
                list-style-type: none;
                min-block-size: 14.4px;
                min-height: 14.4px;
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
              שינוי שפה
            </option>
            <option
              value="עברית"
              style="
                block-size: auto;
                border-block-color: rgb(0, 0, 0);
                border-color: rgb(0, 0, 0);
                border-inline-color: rgb(0, 0, 0);
                caret-color: rgb(0, 0, 0);
                color: rgb(0, 0, 0);
                column-rule-color: rgb(0, 0, 0);
                cursor: default;
                font-size: 12px;
                height: auto;
                inline-size: auto;
                line-height: normal;
                list-style-type: none;
                min-block-size: 14.4px;
                min-height: 14.4px;
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
              עברית
            </option>
            <option
              value="Русский"
              style="
                block-size: auto;
                border-block-color: rgb(0, 0, 0);
                border-color: rgb(0, 0, 0);
                border-inline-color: rgb(0, 0, 0);
                caret-color: rgb(0, 0, 0);
                color: rgb(0, 0, 0);
                column-rule-color: rgb(0, 0, 0);
                cursor: default;
                font-size: 12px;
                height: auto;
                inline-size: auto;
                line-height: normal;
                list-style-type: none;
                min-block-size: 14.4px;
                min-height: 14.4px;
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
              Русский
            </option>
            <option
              value="العربية"
              style="
                block-size: auto;
                border-block-color: rgb(0, 0, 0);
                border-color: rgb(0, 0, 0);
                border-inline-color: rgb(0, 0, 0);
                caret-color: rgb(0, 0, 0);
                color: rgb(0, 0, 0);
                column-rule-color: rgb(0, 0, 0);
                cursor: default;
                font-size: 12px;
                height: auto;
                inline-size: auto;
                line-height: normal;
                list-style-type: none;
                min-block-size: 14.4px;
                min-height: 14.4px;
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
              العربية
            </option>
            <option
              value="English"
              style="
                block-size: auto;
                border-block-color: rgb(0, 0, 0);
                border-color: rgb(0, 0, 0);
                border-inline-color: rgb(0, 0, 0);
                caret-color: rgb(0, 0, 0);
                color: rgb(0, 0, 0);
                column-rule-color: rgb(0, 0, 0);
                cursor: default;
                font-size: 12px;
                height: auto;
                inline-size: auto;
                line-height: normal;
                list-style-type: none;
                min-block-size: 14.4px;
                min-height: 14.4px;
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
              English
            </option>
            <option
              value="Français"
              style="
                block-size: auto;
                border-block-color: rgb(0, 0, 0);
                border-color: rgb(0, 0, 0);
                border-inline-color: rgb(0, 0, 0);
                caret-color: rgb(0, 0, 0);
                color: rgb(0, 0, 0);
                column-rule-color: rgb(0, 0, 0);
                cursor: default;
                font-size: 12px;
                height: auto;
                inline-size: auto;
                line-height: normal;
                list-style-type: none;
                min-block-size: 14.4px;
                min-height: 14.4px;
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
              Français
            </option>
          </select>
        </div>
      </li>
      <li class="" role="menuitem" style="block-size: 60px; height: 60px; inline-size: 74.7656px; margin-inline: 16px; margin-left: 16px; margin-right: 16px; min-block-size: auto; min-height: auto; min-inline-size: auto; min-width: auto; perspective-origin: 37.375px 30px; transform-origin: 37.3828px 30px; width: 74.7656px">
        <a
          href="#"
          role="menuitem"
          id="headerMenu_tab0"
          aria-haspopup="true"
          aria-expanded="false"
          aria-controls="headerMenu0"
          class="headerMenu_toggle"
          data-id="8"
          style="
            block-size: 60px;
            border-block-color: rgb(0, 0, 0);
            border-color: rgb(0, 0, 0);
            border-inline-color: rgb(0, 0, 0);
            inset: 0px;
            caret-color: rgb(0, 0, 0);
            color: rgb(0, 0, 0);
            column-rule-color: rgb(0, 0, 0);
            display: flex;
            flex-direction: column;
            font-size: 18px;
            font-weight: 900;
            height: 60px;
            inline-size: 74.7812px;
            inset-block: 0px;
            inset-inline: 0px;
            justify-content: center;
            line-height: 18px;
            list-style-type: none;
            outline-color: rgb(0, 0, 0);
            perspective-origin: 37.3906px 30px;
            position: relative;
            text-align: center;
            text-decoration: none solid rgb(0, 0, 0);
            text-emphasis-color: rgb(0, 0, 0);
            transform-origin: 37.3906px 30px;
            width: 74.7812px;
            -webkit-text-fill-color: rgb(0, 0, 0);
            -webkit-text-stroke-color: rgb(0, 0, 0);
          "
          >הצטרפות</a
        >
        <div
          role="menu"
          id="headerMenu0"
          aria-hidden="true"
          aria-labelledby="headerMenu_tab0"
          class="headerMenu_panel"
          data-id="12"
          style="
            background-color: rgb(255, 255, 255);
            block-size: auto;
            box-shadow: rgb(0, 0, 0) 0px 0px 12px 0px;
            display: none;
            height: auto;
            inline-size: auto;
            inset-block-start: 100%;
            inset-inline-start: 16px;
            list-style-type: none;
            margin-block-start: 35px;
            margin-top: 35px;
            max-inline-size: 1150px;
            max-width: 1150px;
            opacity: 0;
            padding-block: 45px;
            padding: 45px 35px 45px 50px;
            padding-inline: 35px 50px;
            perspective-origin: 50% 50%;
            position: absolute;
            right: 16px;
            text-align: right;
            top: 100%;
            transform-origin: 50% 50%;
            transition-duration: 0.5s;
            transition-timing-function: ease-in-out;
            width: auto;
          "
        >
          <div class="headerMenu_panelContent" style="align-items: center; block-size: auto; display: flex; height: auto; inline-size: 100%; list-style-type: none; min-block-size: 100px; min-height: 100px; perspective-origin: 50% 50%; text-align: right; transform-origin: 50% 50%; width: 100%">
            <div class="headerMenu_panelLinks" style="align-items: flex-start; block-size: auto; display: flex; height: auto; inline-size: auto; list-style-type: none; perspective-origin: 50% 50%; text-align: right; transform-origin: 50% 50%; width: auto">
              <ul style="block-size: auto; font-size: 18px; font-weight: 900; height: auto; inline-size: auto; letter-spacing: -0.5px; line-height: 20px; padding-inline: 15px 30px; padding-left: 30px; padding-right: 15px; perspective-origin: 50% 50%; text-align: right; transform-origin: 50% 50%; width: auto">
                <div
                  aria-label="לינק לפתיחת טופס השארת פרטים"
                  za_parent_div="true"
                  id="ZA_CAMP_IN_PAGE_DIV_1_CID_81309"
                  class="za_reset"
                  rel="za_in_page"
                  style="
                    font-family: sans-serif;
                    display: block !important;
                    position: relative;
                    padding-right: 0px !important;
                    padding-left: 0px !important;
                    background-color: rgba(255, 255, 255, 0);
                    block-size: 50px;
                    border-block-color: rgb(194, 206, 211);
                    border-block-style: solid;
                    border-color: rgb(194, 206, 211);
                    border-style: solid;
                    border-inline-color: rgb(194, 206, 211);
                    border-inline-style: solid;
                    font-size: 18px;
                    font-weight: 900;
                    height: 50px;
                    inline-size: 275px;
                    line-height: 20px;
                    list-style-type: none;
                    padding-block: 15px;
                    padding-bottom: 15px;
                    padding-top: 15px;
                    perspective-origin: 50% 50%;
                    text-align: right;
                    text-decoration: none solid rgb(0, 0, 0);
                    transform-origin: 50% 50%;
                    width: 275px;
                  "
                >
                  <div
                    id="ZA_CAMP_IN_PAGE_DIV_1_CID_81309_INNER"
                    style="
                      overflow: hidden;
                      position: relative;
                      cursor: auto !important;
                      block-size: 100%;
                      box-sizing: content-box;
                      font-family: sans-serif;
                      font-size: 18px;
                      font-weight: 900;
                      height: 100%;
                      inline-size: 100%;
                      line-height: 20px;
                      list-style-type: none;
                      perspective-origin: 50% 50%;
                      text-align: right;
                      text-decoration: none solid rgb(0, 0, 0);
                      transform-origin: 50% 50%;
                      width: 100%;
                    "
                    class="za_reset"
                  >
                    <div
                      aria-label="להצעת הצטרפות משתלמת מנציג"
                      id="ZA_CAMP_IN_PAGE_TITLE_1_CID_81309"
                      style="
                        position: absolute;
                        margin: 0px !important;
                        padding: 0px !important;
                        box-sizing: border-box !important;
                        overflow: hidden;
                        font-style: normal !important;
                        text-decoration: none solid rgb(53, 60, 67);
                        white-space-collapse: preserve;
                        text-wrap: wrap !important;
                        direction: rtl !important;
                        font-weight: 900;
                        text-align: right;
                        cursor: pointer;
                        block-size: 100%;
                        border-block-color: rgb(53, 60, 67);
                        border-color: rgb(53, 60, 67);
                        border-inline-color: rgb(53, 60, 67);
                        caret-color: rgb(53, 60, 67);
                        color: rgb(53, 60, 67);
                        column-rule-color: rgb(53, 60, 67);
                        font-family: newfont, newfont_pg;
                        font-size: 18px;
                        height: 100%;
                        inline-size: 100%;
                        inset-block-start: 50%;
                        inset-inline-end: 0px;
                        left: 0px;
                        line-height: 19.8px;
                        list-style-type: none;
                        outline-color: rgb(53, 60, 67);
                        perspective-origin: 50% 50%;
                        text-emphasis-color: rgb(53, 60, 67);
                        top: 50%;
                        transform-origin: 50% 50%;
                        width: 100%;
                        z-index: 7;
                        -webkit-text-fill-color: rgb(53, 60, 67);
                        -webkit-text-stroke-color: rgb(53, 60, 67);
                      "
                      tabindex="0"
                      za_button="1"
                      role="link"
                      za-html-text="true"
                      class="za_reset zoom_btn_c"
                      conversion="true"
                      keepopen="true"
                      showcampmanually="81298"
                    >
                      <p
                        class="za-align-right za-direction-rtl"
                        style="
                          border-block-color: rgb(53, 60, 67);
                          border-color: rgb(53, 60, 67);
                          border-inline-color: rgb(53, 60, 67);
                          caret-color: rgb(53, 60, 67);
                          color: rgb(53, 60, 67);
                          column-rule-color: rgb(53, 60, 67);
                          cursor: pointer;
                          font-family: newfont, newfont_pg;
                          font-size: 18px;
                          font-weight: 900;
                          line-height: 19.8px;
                          list-style-type: none;
                          outline-color: rgb(53, 60, 67);
                          perspective-origin: 50% 50%;
                          text-align: right;
                          text-decoration: none solid rgb(53, 60, 67);
                          text-emphasis-color: rgb(53, 60, 67);
                          transform-origin: 50% 50%;
                          white-space-collapse: preserve;
                          -webkit-text-fill-color: rgb(53, 60, 67);
                          -webkit-text-stroke-color: rgb(53, 60, 67);
                        "
                      >
                        להצעת הצטרפות משתלמת מנציג<span
                          id="za_arrow"
                          style="
                            font-size: 20.7px;
                            line-height: 20px;
                            white-space-collapse: collapse !important;
                            text-wrap: nowrap;
                            border-block-color: rgb(53, 60, 67);
                            border-color: rgb(53, 60, 67);
                            border-inline-color: rgb(53, 60, 67);
                            caret-color: rgb(53, 60, 67);
                            color: rgb(53, 60, 67);
                            column-rule-color: rgb(53, 60, 67);
                            cursor: pointer;
                            font-weight: 900;
                            list-style-type: none;
                            outline-color: rgb(53, 60, 67);
                            perspective-origin: 50% 50%;
                            text-align: right;
                            text-decoration: none solid rgb(53, 60, 67);
                            text-emphasis-color: rgb(53, 60, 67);
                            transform-origin: 50% 50%;
                            -webkit-text-fill-color: rgb(53, 60, 67);
                            -webkit-text-stroke-color: rgb(53, 60, 67);
                          "
                        >
                          ›</span
                        >
                      </p>
                    </div>
                  </div>
                </div>
                <style style="display: none !important; box-sizing: content-box; font-size: 18px; font-weight: 900; line-height: 20px; list-style-type: none; text-align: right; text-decoration: none solid rgb(0, 0, 0)" class="za_reset" rel="za_in_page">
                  #ZA_CAMP_IN_PAGE_TITLE_1_CID_81309 {
                    background-color: rgba(0, 0, 0, 0) !important;
                    color: #353c43 !important;
                    direction: ltr !important;
                    font-size: 18px !important;
                    font-style: normal !important;
                    font-weight: normal !important;
                    letter-spacing: 0px !important;
                    line-height: 1.1 !important;
                    text-align: left !important;
                    text-decoration: none !important;
                    font-family: newfont, newfont_pg !important;
                    transform: translateY(-50%) !important;
                    height: 100% !important;
                    display: block !important;
                    width: 100% !important;
                    left: 0px !important;
                    right: unset !important;
                    top: 50% !important;
                    bottom: unset !important;
                    z-index: 7 !important;
                  }

                  #ZA_CAMP_IN_PAGE_DIV_1_CID_81309_INNER {
                    border-radius: 0px !important;
                  }

                  #ZA_CAMP_IN_PAGE_DIV_1_CID_81309 {
                    margin: 0 !important;
                    padding: 0 !important;
                    box-sizing: border-box !important;
                    position: fixed !important;
                    width: 275px !important;
                    height: 50px !important;
                    opacity: 1 !important;
                    border-width: 0px !important;
                    border-style: solid !important;
                    border-color: #c2ced3 !important;
                    border-radius: 0px !important;
                    background-color: rgba(255, 255, 255, 0) !important;
                  }
                </style>
                <li style="block-size: auto; font-size: 18px; font-weight: 900; height: auto; inline-size: auto; letter-spacing: -0.5px; line-height: 20px; padding-block: 15px; padding-bottom: 15px; padding-top: 15px; perspective-origin: 50% 50%; transform-origin: 50% 50%; width: auto">
                  <a
                    href="/programs/Pages/default.aspx"
                    role="menuitem"
                    data-id="9"
                    style="
                      border-block-color: rgb(0, 0, 0);
                      border-color: rgb(0, 0, 0);
                      border-inline-color: rgb(0, 0, 0);
                      caret-color: rgb(0, 0, 0);
                      color: rgb(0, 0, 0);
                      column-rule-color: rgb(0, 0, 0);
                      font-size: 18px;
                      font-weight: 900;
                      letter-spacing: -0.5px;
                      line-height: 20px;
                      list-style-type: none;
                      outline-color: rgb(0, 0, 0);
                      perspective-origin: 50% 50%;
                      text-align: right;
                      text-decoration: none solid rgb(0, 0, 0);
                      text-emphasis-color: rgb(0, 0, 0);
                      transform-origin: 50% 50%;
                      -webkit-text-fill-color: rgb(0, 0, 0);
                      -webkit-text-stroke-color: rgb(0, 0, 0);
                    "
                    >תכניות סלולר</a
                  >
                </li>
                <li style="block-size: auto; font-size: 18px; font-weight: 900; height: auto; inline-size: auto; letter-spacing: -0.5px; line-height: 20px; padding-block: 15px; padding-bottom: 15px; padding-top: 15px; perspective-origin: 50% 50%; transform-origin: 50% 50%; width: auto">
                  <a
                    href="/Hotalk/Pages/default.aspx"
                    role="menuitem"
                    data-id="10"
                    style="
                      border-block-color: rgb(0, 0, 0);
                      border-color: rgb(0, 0, 0);
                      border-inline-color: rgb(0, 0, 0);
                      caret-color: rgb(0, 0, 0);
                      color: rgb(0, 0, 0);
                      column-rule-color: rgb(0, 0, 0);
                      font-size: 18px;
                      font-weight: 900;
                      letter-spacing: -0.5px;
                      line-height: 20px;
                      list-style-type: none;
                      outline-color: rgb(0, 0, 0);
                      perspective-origin: 50% 50%;
                      text-align: right;
                      text-decoration: none solid rgb(0, 0, 0);
                      text-emphasis-color: rgb(0, 0, 0);
                      transform-origin: 50% 50%;
                      -webkit-text-fill-color: rgb(0, 0, 0);
                      -webkit-text-stroke-color: rgb(0, 0, 0);
                    "
                    >HOTALK פריפייד</a
                  >
                </li>
                <li style="block-size: auto; font-size: 18px; font-weight: 900; height: auto; inline-size: auto; letter-spacing: -0.5px; line-height: 20px; padding-block: 15px; padding-bottom: 15px; padding-top: 15px; perspective-origin: 50% 50%; transform-origin: 50% 50%; width: auto">
                  <a
                    href="https://campaign.hotmobile.co.il/joining_esim/"
                    role="menuitem"
                    data-id="11"
                    style="
                      border-block-color: rgb(0, 0, 0);
                      border-color: rgb(0, 0, 0);
                      border-inline-color: rgb(0, 0, 0);
                      caret-color: rgb(0, 0, 0);
                      color: rgb(0, 0, 0);
                      column-rule-color: rgb(0, 0, 0);
                      font-size: 18px;
                      font-weight: 900;
                      letter-spacing: -0.5px;
                      line-height: 20px;
                      list-style-type: none;
                      outline-color: rgb(0, 0, 0);
                      perspective-origin: 50% 50%;
                      text-align: right;
                      text-decoration: none solid rgb(0, 0, 0);
                      text-emphasis-color: rgb(0, 0, 0);
                      transform-origin: 50% 50%;
                      -webkit-text-fill-color: rgb(0, 0, 0);
                      -webkit-text-stroke-color: rgb(0, 0, 0);
                    "
                    >eSIM של HOT mobile</a
                  >
                </li>
                <div
                  aria-label="לינק לפתיחת טופס השארת פרטים"
                  za_parent_div="true"
                  id="ZA_CAMP_IN_PAGE_DIV_1_CID_82259"
                  class="za_reset"
                  rel="za_in_page"
                  style="
                    font-family: sans-serif;
                    display: block !important;
                    position: relative;
                    padding-right: 0px !important;
                    padding-left: 0px !important;
                    background-color: rgba(255, 255, 255, 0);
                    block-size: 50px;
                    border-block-color: rgb(194, 206, 211);
                    border-block-style: solid;
                    border-color: rgb(194, 206, 211);
                    border-style: solid;
                    border-inline-color: rgb(194, 206, 211);
                    border-inline-style: solid;
                    font-size: 18px;
                    font-weight: 900;
                    height: 50px;
                    inline-size: 275px;
                    line-height: 20px;
                    list-style-type: none;
                    padding-block: 15px;
                    padding-bottom: 15px;
                    padding-top: 15px;
                    perspective-origin: 50% 50%;
                    text-align: right;
                    text-decoration: none solid rgb(0, 0, 0);
                    transform-origin: 50% 50%;
                    width: 275px;
                  "
                >
                  <div
                    id="ZA_CAMP_IN_PAGE_DIV_1_CID_82259_INNER"
                    style="
                      overflow: hidden;
                      position: relative;
                      cursor: auto !important;
                      block-size: 100%;
                      box-sizing: content-box;
                      font-family: sans-serif;
                      font-size: 18px;
                      font-weight: 900;
                      height: 100%;
                      inline-size: 100%;
                      line-height: 20px;
                      list-style-type: none;
                      perspective-origin: 50% 50%;
                      text-align: right;
                      text-decoration: none solid rgb(0, 0, 0);
                      transform-origin: 50% 50%;
                      width: 100%;
                    "
                    class="za_reset"
                  >
                    <div
                      aria-label="הצטרפות ל - HOT"
                      id="ZA_CAMP_IN_PAGE_TITLE_1_CID_82259"
                      style="
                        position: absolute;
                        margin: 0px !important;
                        padding: 0px !important;
                        box-sizing: border-box !important;
                        overflow: hidden;
                        font-style: normal !important;
                        text-decoration: none solid rgb(53, 60, 67);
                        white-space-collapse: preserve;
                        text-wrap: wrap !important;
                        direction: rtl !important;
                        font-weight: 900;
                        text-align: right;
                        cursor: pointer;
                        block-size: 100%;
                        border-block-color: rgb(53, 60, 67);
                        border-color: rgb(53, 60, 67);
                        border-inline-color: rgb(53, 60, 67);
                        caret-color: rgb(53, 60, 67);
                        color: rgb(53, 60, 67);
                        column-rule-color: rgb(53, 60, 67);
                        font-family: newfont, newfont_pg;
                        font-size: 18px;
                        height: 100%;
                        inline-size: 100%;
                        inset-block-start: 50%;
                        inset-inline-end: 0px;
                        left: 0px;
                        line-height: 19.8px;
                        list-style-type: none;
                        outline-color: rgb(53, 60, 67);
                        perspective-origin: 50% 50%;
                        text-emphasis-color: rgb(53, 60, 67);
                        top: 50%;
                        transform-origin: 50% 50%;
                        width: 100%;
                        z-index: 7;
                        -webkit-text-fill-color: rgb(53, 60, 67);
                        -webkit-text-stroke-color: rgb(53, 60, 67);
                      "
                      tabindex="0"
                      za_button="1"
                      role="link"
                      za-html-text="true"
                      class="za_reset zoom_btn_c"
                      conversion="true"
                      keepopen="true"
                      showcampmanually="83689"
                    >
                      <p
                        class="za-direction-rtl za-align-right"
                        style="
                          border-block-color: rgb(53, 60, 67);
                          border-color: rgb(53, 60, 67);
                          border-inline-color: rgb(53, 60, 67);
                          caret-color: rgb(53, 60, 67);
                          color: rgb(53, 60, 67);
                          column-rule-color: rgb(53, 60, 67);
                          cursor: pointer;
                          font-family: newfont, newfont_pg;
                          font-size: 18px;
                          font-weight: 900;
                          line-height: 19.8px;
                          list-style-type: none;
                          outline-color: rgb(53, 60, 67);
                          perspective-origin: 50% 50%;
                          text-align: right;
                          text-decoration: none solid rgb(53, 60, 67);
                          text-emphasis-color: rgb(53, 60, 67);
                          transform-origin: 50% 50%;
                          white-space-collapse: preserve;
                          -webkit-text-fill-color: rgb(53, 60, 67);
                          -webkit-text-stroke-color: rgb(53, 60, 67);
                        "
                      >
                        <strong
                          style="
                            border-block-color: rgb(53, 60, 67);
                            border-color: rgb(53, 60, 67);
                            border-inline-color: rgb(53, 60, 67);
                            caret-color: rgb(53, 60, 67);
                            color: rgb(53, 60, 67);
                            column-rule-color: rgb(53, 60, 67);
                            cursor: pointer;
                            font-size: 18px;
                            line-height: 19.8px;
                            list-style-type: none;
                            outline-color: rgb(53, 60, 67);
                            perspective-origin: 50% 50%;
                            text-align: right;
                            text-decoration: none solid rgb(53, 60, 67);
                            text-emphasis-color: rgb(53, 60, 67);
                            transform-origin: 50% 50%;
                            white-space-collapse: preserve;
                            -webkit-text-fill-color: rgb(53, 60, 67);
                            -webkit-text-stroke-color: rgb(53, 60, 67);
                          "
                          >הצטרפות ל - HOT</strong
                        ><span
                          id="za_arrow"
                          style="
                            border-block-color: rgb(53, 60, 67);
                            border-color: rgb(53, 60, 67);
                            border-inline-color: rgb(53, 60, 67);
                            caret-color: rgb(53, 60, 67);
                            color: rgb(53, 60, 67);
                            column-rule-color: rgb(53, 60, 67);
                            cursor: pointer;
                            font-size: 18px;
                            font-weight: 900;
                            line-height: 19.8px;
                            list-style-type: none;
                            outline-color: rgb(53, 60, 67);
                            perspective-origin: 50% 50%;
                            text-align: right;
                            text-decoration: none solid rgb(53, 60, 67);
                            text-emphasis-color: rgb(53, 60, 67);
                            transform-origin: 50% 50%;
                            white-space-collapse: preserve;
                            -webkit-text-fill-color: rgb(53, 60, 67);
                            -webkit-text-stroke-color: rgb(53, 60, 67);
                          "
                        >
                          ›</span
                        >
                      </p>
                    </div>
                  </div>
                </div>
                <style style="display: none !important; box-sizing: content-box; font-size: 18px; font-weight: 900; line-height: 20px; list-style-type: none; text-align: right; text-decoration: none solid rgb(0, 0, 0)" class="za_reset" rel="za_in_page">
                  #ZA_CAMP_IN_PAGE_TITLE_1_CID_82259 {
                    background-color: rgba(0, 0, 0, 0) !important;
                    color: #353c43 !important;
                    direction: ltr !important;
                    font-size: 1em !important;
                    font-style: normal !important;
                    font-weight: normal !important;
                    letter-spacing: 0px !important;
                    line-height: 1.1 !important;
                    text-align: left !important;
                    text-decoration: none !important;
                    font-family: newfont, newfont_pg !important;
                    transform: translateY(-50%) !important;
                    height: 100% !important;
                    display: block !important;
                    width: 100% !important;
                    left: 0px !important;
                    right: unset !important;
                    top: 50% !important;
                    bottom: unset !important;
                    z-index: 7 !important;
                  }

                  #ZA_CAMP_IN_PAGE_DIV_1_CID_82259_INNER {
                    border-radius: 0px !important;
                  }

                  #ZA_CAMP_IN_PAGE_DIV_1_CID_82259 {
                    margin: 0 !important;
                    padding: 0 !important;
                    box-sizing: border-box !important;
                    position: fixed !important;
                    width: 275px !important;
                    height: 50px !important;
                    opacity: 1 !important;
                    border-width: 0px !important;
                    border-style: solid !important;
                    border-color: #c2ced3 !important;
                    border-radius: 0px !important;
                    background-color: rgba(255, 255, 255, 0) !important;
                  }
                </style>
              </ul>
            </div>
            <!---->
          </div>
        </div>
      </li>
      <li class="" role="menuitem" style="block-size: 60px; height: 60px; inline-size: 167.297px; margin-inline: 16px; margin-left: 16px; margin-right: 16px; min-block-size: auto; min-height: auto; min-inline-size: auto; min-width: auto; perspective-origin: 83.6406px 30px; transform-origin: 83.6484px 30px; width: 167.297px">
        <a
          href="#"
          role="menuitem"
          id="headerMenu_tab1"
          aria-haspopup="true"
          aria-expanded="false"
          aria-controls="headerMenu1"
          class="headerMenu_toggle"
          data-id="13"
          style="
            block-size: 60px;
            border-block-color: rgb(0, 0, 0);
            border-color: rgb(0, 0, 0);
            border-inline-color: rgb(0, 0, 0);
            inset: 0px;
            caret-color: rgb(0, 0, 0);
            color: rgb(0, 0, 0);
            column-rule-color: rgb(0, 0, 0);
            display: flex;
            flex-direction: column;
            font-size: 18px;
            font-weight: 900;
            height: 60px;
            inline-size: 167.297px;
            inset-block: 0px;
            inset-inline: 0px;
            justify-content: center;
            line-height: 18px;
            list-style-type: none;
            outline-color: rgb(0, 0, 0);
            perspective-origin: 83.6406px 30px;
            position: relative;
            text-align: center;
            text-decoration: none solid rgb(0, 0, 0);
            text-emphasis-color: rgb(0, 0, 0);
            transform-origin: 83.6484px 30px;
            width: 167.297px;
            -webkit-text-fill-color: rgb(0, 0, 0);
            -webkit-text-stroke-color: rgb(0, 0, 0);
          "
          >שירותים ואפליקציות</a
        >
        <div
          role="menu"
          id="headerMenu1"
          aria-hidden="true"
          aria-labelledby="headerMenu_tab1"
          class="headerMenu_panel"
          data-id="18"
          style="
            background-color: rgb(255, 255, 255);
            block-size: auto;
            box-shadow: rgb(0, 0, 0) 0px 0px 12px 0px;
            display: none;
            height: auto;
            inline-size: auto;
            inset-block-start: 100%;
            inset-inline-start: 16px;
            list-style-type: none;
            margin-block-start: 35px;
            margin-top: 35px;
            max-inline-size: 1150px;
            max-width: 1150px;
            opacity: 0;
            padding-block: 45px;
            padding: 45px 35px 45px 50px;
            padding-inline: 35px 50px;
            perspective-origin: 50% 50%;
            position: absolute;
            right: 16px;
            text-align: right;
            top: 100%;
            transform-origin: 50% 50%;
            transition-duration: 0.5s;
            transition-timing-function: ease-in-out;
            width: auto;
          "
        >
          <div class="headerMenu_panelContent" style="align-items: center; block-size: auto; display: flex; height: auto; inline-size: 100%; list-style-type: none; min-block-size: 100px; min-height: 100px; perspective-origin: 50% 50%; text-align: right; transform-origin: 50% 50%; width: 100%">
            <div class="headerMenu_panelLinks" style="align-items: flex-start; block-size: auto; display: flex; height: auto; inline-size: auto; list-style-type: none; perspective-origin: 50% 50%; text-align: right; transform-origin: 50% 50%; width: auto">
              <ul style="block-size: auto; font-size: 18px; font-weight: 900; height: auto; inline-size: auto; letter-spacing: -0.5px; line-height: 20px; padding-inline: 15px 30px; padding-left: 30px; padding-right: 15px; perspective-origin: 50% 50%; text-align: right; transform-origin: 50% 50%; width: auto">
                <li style="block-size: auto; font-size: 18px; font-weight: 900; height: auto; inline-size: auto; letter-spacing: -0.5px; line-height: 20px; padding-block: 15px; padding-bottom: 15px; padding-top: 15px; perspective-origin: 50% 50%; transform-origin: 50% 50%; width: auto">
                  <a
                    href="/devices/tochen/Pages/default.aspx"
                    role="menuitem"
                    data-id="14"
                    style="
                      border-block-color: rgb(0, 0, 0);
                      border-color: rgb(0, 0, 0);
                      border-inline-color: rgb(0, 0, 0);
                      caret-color: rgb(0, 0, 0);
                      color: rgb(0, 0, 0);
                      column-rule-color: rgb(0, 0, 0);
                      font-size: 18px;
                      font-weight: 900;
                      letter-spacing: -0.5px;
                      line-height: 20px;
                      list-style-type: none;
                      outline-color: rgb(0, 0, 0);
                      perspective-origin: 50% 50%;
                      text-align: right;
                      text-decoration: none solid rgb(0, 0, 0);
                      text-emphasis-color: rgb(0, 0, 0);
                      transform-origin: 50% 50%;
                      -webkit-text-fill-color: rgb(0, 0, 0);
                      -webkit-text-stroke-color: rgb(0, 0, 0);
                    "
                    >שירותי תוכן ואפליקציות</a
                  >
                </li>
                <li style="block-size: auto; font-size: 18px; font-weight: 900; height: auto; inline-size: auto; letter-spacing: -0.5px; line-height: 20px; padding-block: 15px; padding-bottom: 15px; padding-top: 15px; perspective-origin: 50% 50%; transform-origin: 50% 50%; width: auto">
                  <a
                    href="https://hotmobile-sale.online/deals/esim-watch/"
                    role="menuitem"
                    data-id="15"
                    style="
                      border-block-color: rgb(0, 0, 0);
                      border-color: rgb(0, 0, 0);
                      border-inline-color: rgb(0, 0, 0);
                      caret-color: rgb(0, 0, 0);
                      color: rgb(0, 0, 0);
                      column-rule-color: rgb(0, 0, 0);
                      font-size: 18px;
                      font-weight: 900;
                      letter-spacing: -0.5px;
                      line-height: 20px;
                      list-style-type: none;
                      outline-color: rgb(0, 0, 0);
                      perspective-origin: 50% 50%;
                      text-align: right;
                      text-decoration: none solid rgb(0, 0, 0);
                      text-emphasis-color: rgb(0, 0, 0);
                      transform-origin: 50% 50%;
                      -webkit-text-fill-color: rgb(0, 0, 0);
                      -webkit-text-stroke-color: rgb(0, 0, 0);
                    "
                    >eSIM לשעונים חכמים</a
                  >
                </li>
                <li style="block-size: auto; font-size: 18px; font-weight: 900; height: auto; inline-size: auto; letter-spacing: -0.5px; line-height: 20px; padding-block: 15px; padding-bottom: 15px; padding-top: 15px; perspective-origin: 50% 50%; transform-origin: 50% 50%; width: auto">
                  <a
                    href="https://campaign.hotmobile.co.il/cyber/"
                    role="menuitem"
                    data-id="16"
                    style="
                      border-block-color: rgb(0, 0, 0);
                      border-color: rgb(0, 0, 0);
                      border-inline-color: rgb(0, 0, 0);
                      caret-color: rgb(0, 0, 0);
                      color: rgb(0, 0, 0);
                      column-rule-color: rgb(0, 0, 0);
                      font-size: 18px;
                      font-weight: 900;
                      letter-spacing: -0.5px;
                      line-height: 20px;
                      list-style-type: none;
                      outline-color: rgb(0, 0, 0);
                      perspective-origin: 50% 50%;
                      text-align: right;
                      text-decoration: none solid rgb(0, 0, 0);
                      text-emphasis-color: rgb(0, 0, 0);
                      transform-origin: 50% 50%;
                      -webkit-text-fill-color: rgb(0, 0, 0);
                      -webkit-text-stroke-color: rgb(0, 0, 0);
                    "
                    >HOT mobile CYBER</a
                  >
                </li>
                <li style="block-size: auto; font-size: 18px; font-weight: 900; height: auto; inline-size: auto; letter-spacing: -0.5px; line-height: 20px; padding-block: 15px; padding-bottom: 15px; padding-top: 15px; perspective-origin: 50% 50%; transform-origin: 50% 50%; width: auto">
                  <a
                    href="https://music.hotmobile.co.il"
                    role="menuitem"
                    data-id="17"
                    style="
                      border-block-color: rgb(0, 0, 0);
                      border-color: rgb(0, 0, 0);
                      border-inline-color: rgb(0, 0, 0);
                      caret-color: rgb(0, 0, 0);
                      color: rgb(0, 0, 0);
                      column-rule-color: rgb(0, 0, 0);
                      font-size: 18px;
                      font-weight: 900;
                      letter-spacing: -0.5px;
                      line-height: 20px;
                      list-style-type: none;
                      outline-color: rgb(0, 0, 0);
                      perspective-origin: 50% 50%;
                      text-align: right;
                      text-decoration: none solid rgb(0, 0, 0);
                      text-emphasis-color: rgb(0, 0, 0);
                      transform-origin: 50% 50%;
                      -webkit-text-fill-color: rgb(0, 0, 0);
                      -webkit-text-stroke-color: rgb(0, 0, 0);
                    "
                    >מוזיקה בהמתנה</a
                  >
                </li>
              </ul>
            </div>
            <!---->
          </div>
        </div>
      </li>
      <li class="" role="menuitem" style="block-size: 60px; height: 60px; inline-size: 113.938px; margin-inline: 16px; margin-left: 16px; margin-right: 16px; min-block-size: auto; min-height: auto; min-inline-size: auto; min-width: auto; perspective-origin: 56.9688px 30px; transform-origin: 56.9688px 30px; width: 113.938px">
        <a
          href="#"
          role="menuitem"
          id="headerMenu_tab2"
          aria-haspopup="true"
          aria-expanded="false"
          aria-controls="headerMenu2"
          class="headerMenu_toggle"
          data-id="19"
          style="
            block-size: 60px;
            border-block-color: rgb(0, 0, 0);
            border-color: rgb(0, 0, 0);
            border-inline-color: rgb(0, 0, 0);
            inset: 0px;
            caret-color: rgb(0, 0, 0);
            color: rgb(0, 0, 0);
            column-rule-color: rgb(0, 0, 0);
            display: flex;
            flex-direction: column;
            font-size: 18px;
            font-weight: 900;
            height: 60px;
            inline-size: 113.938px;
            inset-block: 0px;
            inset-inline: 0px;
            justify-content: center;
            line-height: 18px;
            list-style-type: none;
            outline-color: rgb(0, 0, 0);
            perspective-origin: 56.9688px 30px;
            position: relative;
            text-align: center;
            text-decoration: none solid rgb(0, 0, 0);
            text-emphasis-color: rgb(0, 0, 0);
            transform-origin: 56.9688px 30px;
            width: 113.938px;
            -webkit-text-fill-color: rgb(0, 0, 0);
            -webkit-text-stroke-color: rgb(0, 0, 0);
          "
          >שירות ותמיכה</a
        >
        <div
          role="menu"
          id="headerMenu2"
          aria-hidden="true"
          aria-labelledby="headerMenu_tab2"
          class="headerMenu_panel"
          data-id="28"
          style="
            background-color: rgb(255, 255, 255);
            block-size: auto;
            box-shadow: rgb(0, 0, 0) 0px 0px 12px 0px;
            display: none;
            height: auto;
            inline-size: auto;
            inset-block-start: 100%;
            inset-inline-start: 16px;
            list-style-type: none;
            margin-block-start: 35px;
            margin-top: 35px;
            max-inline-size: 1150px;
            max-width: 1150px;
            opacity: 0;
            padding-block: 45px;
            padding: 45px 35px 45px 50px;
            padding-inline: 35px 50px;
            perspective-origin: 50% 50%;
            position: absolute;
            right: 16px;
            text-align: right;
            top: 100%;
            transform-origin: 50% 50%;
            transition-duration: 0.5s;
            transition-timing-function: ease-in-out;
            width: auto;
          "
        >
          <div class="headerMenu_panelContent" style="align-items: center; block-size: auto; display: flex; height: auto; inline-size: 100%; list-style-type: none; min-block-size: 100px; min-height: 100px; perspective-origin: 50% 50%; text-align: right; transform-origin: 50% 50%; width: 100%">
            <div class="headerMenu_panelLinks" style="align-items: flex-start; block-size: auto; display: flex; height: auto; inline-size: auto; list-style-type: none; perspective-origin: 50% 50%; text-align: right; transform-origin: 50% 50%; width: auto">
              <ul style="block-size: auto; font-size: 18px; font-weight: 900; height: auto; inline-size: auto; letter-spacing: -0.5px; line-height: 20px; padding-inline: 15px 30px; padding-left: 30px; padding-right: 15px; perspective-origin: 50% 50%; text-align: right; transform-origin: 50% 50%; width: auto">
                <li style="block-size: auto; font-size: 18px; font-weight: 900; height: auto; inline-size: auto; letter-spacing: -0.5px; line-height: 20px; padding-block: 15px; padding-bottom: 15px; padding-top: 15px; perspective-origin: 50% 50%; transform-origin: 50% 50%; width: auto">
                  <a
                    href="/digital_service_online"
                    role="menuitem"
                    data-id="20"
                    style="
                      border-block-color: rgb(0, 0, 0);
                      border-color: rgb(0, 0, 0);
                      border-inline-color: rgb(0, 0, 0);
                      caret-color: rgb(0, 0, 0);
                      color: rgb(0, 0, 0);
                      column-rule-color: rgb(0, 0, 0);
                      font-size: 18px;
                      font-weight: 900;
                      letter-spacing: -0.5px;
                      line-height: 20px;
                      list-style-type: none;
                      outline-color: rgb(0, 0, 0);
                      perspective-origin: 50% 50%;
                      text-align: right;
                      text-decoration: none solid rgb(0, 0, 0);
                      text-emphasis-color: rgb(0, 0, 0);
                      transform-origin: 50% 50%;
                      -webkit-text-fill-color: rgb(0, 0, 0);
                      -webkit-text-stroke-color: rgb(0, 0, 0);
                    "
                    >מגוון פעולות בשירות עצמי</a
                  >
                </li>
                <li style="block-size: auto; font-size: 18px; font-weight: 900; height: auto; inline-size: auto; letter-spacing: -0.5px; line-height: 20px; padding-block: 15px; padding-bottom: 15px; padding-top: 15px; perspective-origin: 50% 50%; transform-origin: 50% 50%; width: auto">
                  <a
                    href="/ServiceSupport/Pages/ChangeProgram.aspx"
                    role="menuitem"
                    data-id="21"
                    style="
                      border-block-color: rgb(0, 0, 0);
                      border-color: rgb(0, 0, 0);
                      border-inline-color: rgb(0, 0, 0);
                      caret-color: rgb(0, 0, 0);
                      color: rgb(0, 0, 0);
                      column-rule-color: rgb(0, 0, 0);
                      font-size: 18px;
                      font-weight: 900;
                      letter-spacing: -0.5px;
                      line-height: 20px;
                      list-style-type: none;
                      outline-color: rgb(0, 0, 0);
                      perspective-origin: 50% 50%;
                      text-align: right;
                      text-decoration: none solid rgb(0, 0, 0);
                      text-emphasis-color: rgb(0, 0, 0);
                      transform-origin: 50% 50%;
                      -webkit-text-fill-color: rgb(0, 0, 0);
                      -webkit-text-stroke-color: rgb(0, 0, 0);
                    "
                    >החלפת תכנית</a
                  >
                </li>
                <li style="block-size: auto; font-size: 18px; font-weight: 900; height: auto; inline-size: auto; letter-spacing: -0.5px; line-height: 20px; padding-block: 15px; padding-bottom: 15px; padding-top: 15px; perspective-origin: 50% 50%; transform-origin: 50% 50%; width: auto">
                  <a
                    href="/ServiceSupport/Pages/FixingLobby.aspx"
                    role="menuitem"
                    data-id="22"
                    style="
                      border-block-color: rgb(0, 0, 0);
                      border-color: rgb(0, 0, 0);
                      border-inline-color: rgb(0, 0, 0);
                      caret-color: rgb(0, 0, 0);
                      color: rgb(0, 0, 0);
                      column-rule-color: rgb(0, 0, 0);
                      font-size: 18px;
                      font-weight: 900;
                      letter-spacing: -0.5px;
                      line-height: 20px;
                      list-style-type: none;
                      outline-color: rgb(0, 0, 0);
                      perspective-origin: 50% 50%;
                      text-align: right;
                      text-decoration: none solid rgb(0, 0, 0);
                      text-emphasis-color: rgb(0, 0, 0);
                      transform-origin: 50% 50%;
                      -webkit-text-fill-color: rgb(0, 0, 0);
                      -webkit-text-stroke-color: rgb(0, 0, 0);
                    "
                    >שירות תיקונים</a
                  >
                </li>
                <li style="block-size: auto; font-size: 18px; font-weight: 900; height: auto; inline-size: auto; letter-spacing: -0.5px; line-height: 20px; padding-block: 15px; padding-bottom: 15px; padding-top: 15px; perspective-origin: 50% 50%; transform-origin: 50% 50%; width: auto">
                  <a
                    href="/ServiceSupport/Pages/TechSupportLobby.aspx"
                    role="menuitem"
                    data-id="23"
                    style="
                      border-block-color: rgb(0, 0, 0);
                      border-color: rgb(0, 0, 0);
                      border-inline-color: rgb(0, 0, 0);
                      caret-color: rgb(0, 0, 0);
                      color: rgb(0, 0, 0);
                      column-rule-color: rgb(0, 0, 0);
                      font-size: 18px;
                      font-weight: 900;
                      letter-spacing: -0.5px;
                      line-height: 20px;
                      list-style-type: none;
                      outline-color: rgb(0, 0, 0);
                      perspective-origin: 50% 50%;
                      text-align: right;
                      text-decoration: none solid rgb(0, 0, 0);
                      text-emphasis-color: rgb(0, 0, 0);
                      transform-origin: 50% 50%;
                      -webkit-text-fill-color: rgb(0, 0, 0);
                      -webkit-text-stroke-color: rgb(0, 0, 0);
                    "
                    >שירות ותמיכה</a
                  >
                </li>
                <li style="block-size: auto; font-size: 18px; font-weight: 900; height: auto; inline-size: auto; letter-spacing: -0.5px; line-height: 20px; padding-block: 15px; padding-bottom: 15px; padding-top: 15px; perspective-origin: 50% 50%; transform-origin: 50% 50%; width: auto">
                  <a
                    href="/ServiceSupport/Pages/points-of-sale.aspx"
                    role="menuitem"
                    data-id="24"
                    style="
                      border-block-color: rgb(0, 0, 0);
                      border-color: rgb(0, 0, 0);
                      border-inline-color: rgb(0, 0, 0);
                      caret-color: rgb(0, 0, 0);
                      color: rgb(0, 0, 0);
                      column-rule-color: rgb(0, 0, 0);
                      font-size: 18px;
                      font-weight: 900;
                      letter-spacing: -0.5px;
                      line-height: 20px;
                      list-style-type: none;
                      outline-color: rgb(0, 0, 0);
                      perspective-origin: 50% 50%;
                      text-align: right;
                      text-decoration: none solid rgb(0, 0, 0);
                      text-emphasis-color: rgb(0, 0, 0);
                      transform-origin: 50% 50%;
                      -webkit-text-fill-color: rgb(0, 0, 0);
                      -webkit-text-stroke-color: rgb(0, 0, 0);
                    "
                    >איתור נקודות שירות ומכירה</a
                  >
                </li>
                <li style="block-size: auto; font-size: 18px; font-weight: 900; height: auto; inline-size: auto; letter-spacing: -0.5px; line-height: 20px; padding-block: 15px; padding-bottom: 15px; padding-top: 15px; perspective-origin: 50% 50%; transform-origin: 50% 50%; width: auto">
                  <a
                    href="/ServiceSupport/Pages/Contact-Us.aspx"
                    role="menuitem"
                    data-id="25"
                    style="
                      border-block-color: rgb(0, 0, 0);
                      border-color: rgb(0, 0, 0);
                      border-inline-color: rgb(0, 0, 0);
                      caret-color: rgb(0, 0, 0);
                      color: rgb(0, 0, 0);
                      column-rule-color: rgb(0, 0, 0);
                      font-size: 18px;
                      font-weight: 900;
                      letter-spacing: -0.5px;
                      line-height: 20px;
                      list-style-type: none;
                      outline-color: rgb(0, 0, 0);
                      perspective-origin: 50% 50%;
                      text-align: right;
                      text-decoration: none solid rgb(0, 0, 0);
                      text-emphasis-color: rgb(0, 0, 0);
                      transform-origin: 50% 50%;
                      -webkit-text-fill-color: rgb(0, 0, 0);
                      -webkit-text-stroke-color: rgb(0, 0, 0);
                    "
                    >צור קשר</a
                  >
                </li>
                <li style="block-size: auto; font-size: 18px; font-weight: 900; height: auto; inline-size: auto; letter-spacing: -0.5px; line-height: 20px; padding-block: 15px; padding-bottom: 15px; padding-top: 15px; perspective-origin: 50% 50%; transform-origin: 50% 50%; width: auto">
                  <a
                    href="/SelfService/Pages/DebtPayment.aspx"
                    role="menuitem"
                    data-id="26"
                    style="
                      border-block-color: rgb(0, 0, 0);
                      border-color: rgb(0, 0, 0);
                      border-inline-color: rgb(0, 0, 0);
                      caret-color: rgb(0, 0, 0);
                      color: rgb(0, 0, 0);
                      column-rule-color: rgb(0, 0, 0);
                      font-size: 18px;
                      font-weight: 900;
                      letter-spacing: -0.5px;
                      line-height: 20px;
                      list-style-type: none;
                      outline-color: rgb(0, 0, 0);
                      perspective-origin: 50% 50%;
                      text-align: right;
                      text-decoration: none solid rgb(0, 0, 0);
                      text-emphasis-color: rgb(0, 0, 0);
                      transform-origin: 50% 50%;
                      -webkit-text-fill-color: rgb(0, 0, 0);
                      -webkit-text-stroke-color: rgb(0, 0, 0);
                    "
                    >תשלום חוב</a
                  >
                </li>
                <li style="block-size: auto; font-size: 18px; font-weight: 900; height: auto; inline-size: auto; letter-spacing: -0.5px; line-height: 20px; padding-block: 15px; padding-bottom: 15px; padding-top: 15px; perspective-origin: 50% 50%; transform-origin: 50% 50%; width: auto">
                  <a
                    href="/ServiceSupport/Pages/default.aspx"
                    role="menuitem"
                    data-id="27"
                    style="
                      border-block-color: rgb(0, 0, 0);
                      border-color: rgb(0, 0, 0);
                      border-inline-color: rgb(0, 0, 0);
                      caret-color: rgb(0, 0, 0);
                      color: rgb(0, 0, 0);
                      column-rule-color: rgb(0, 0, 0);
                      font-size: 18px;
                      font-weight: 900;
                      letter-spacing: -0.5px;
                      line-height: 20px;
                      list-style-type: none;
                      outline-color: rgb(0, 0, 0);
                      perspective-origin: 50% 50%;
                      text-align: right;
                      text-decoration: none solid rgb(0, 0, 0);
                      text-emphasis-color: rgb(0, 0, 0);
                      transform-origin: 50% 50%;
                      -webkit-text-fill-color: rgb(0, 0, 0);
                      -webkit-text-stroke-color: rgb(0, 0, 0);
                    "
                    >מידע כללי</a
                  >
                </li>
              </ul>
            </div>
            <!---->
          </div>
        </div>
      </li>
      <li class="" role="menuitem" style="block-size: 60px; height: 60px; inline-size: 91.6875px; margin-inline: 16px; margin-left: 16px; margin-right: 16px; min-block-size: auto; min-height: auto; min-inline-size: auto; min-width: auto; perspective-origin: 45.8438px 30px; transform-origin: 45.8438px 30px; width: 91.6875px">
        <a
          href="#"
          role="menuitem"
          id="headerMenu_tab3"
          aria-haspopup="true"
          aria-expanded="false"
          aria-controls="headerMenu3"
          class="headerMenu_toggle"
          data-id="29"
          style="
            block-size: 60px;
            border-block-color: rgb(0, 0, 0);
            border-color: rgb(0, 0, 0);
            border-inline-color: rgb(0, 0, 0);
            inset: 0px;
            caret-color: rgb(0, 0, 0);
            color: rgb(0, 0, 0);
            column-rule-color: rgb(0, 0, 0);
            display: flex;
            flex-direction: column;
            font-size: 18px;
            font-weight: 900;
            height: 60px;
            inline-size: 91.6875px;
            inset-block: 0px;
            inset-inline: 0px;
            justify-content: center;
            line-height: 18px;
            list-style-type: none;
            outline-color: rgb(0, 0, 0);
            perspective-origin: 45.8438px 30px;
            position: relative;
            text-align: center;
            text-decoration: none solid rgb(0, 0, 0);
            text-emphasis-color: rgb(0, 0, 0);
            transform-origin: 45.8438px 30px;
            width: 91.6875px;
            -webkit-text-fill-color: rgb(0, 0, 0);
            -webkit-text-stroke-color: rgb(0, 0, 0);
          "
          >חנות סלולר</a
        >
        <div
          role="menu"
          id="headerMenu3"
          aria-hidden="true"
          aria-labelledby="headerMenu_tab3"
          class="headerMenu_panel"
          data-id="35"
          style="
            background-color: rgb(255, 255, 255);
            block-size: auto;
            box-shadow: rgb(0, 0, 0) 0px 0px 12px 0px;
            display: none;
            height: auto;
            inline-size: auto;
            inset-block-start: 100%;
            inset-inline-start: 16px;
            list-style-type: none;
            margin-block-start: 35px;
            margin-top: 35px;
            max-inline-size: 1150px;
            max-width: 1150px;
            opacity: 0;
            padding-block: 45px;
            padding: 45px 35px 45px 50px;
            padding-inline: 35px 50px;
            perspective-origin: 50% 50%;
            position: absolute;
            right: 16px;
            text-align: right;
            top: 100%;
            transform-origin: 50% 50%;
            transition-duration: 0.5s;
            transition-timing-function: ease-in-out;
            width: auto;
          "
        >
          <div class="headerMenu_panelContent" style="align-items: center; block-size: auto; display: flex; height: auto; inline-size: 100%; list-style-type: none; min-block-size: 100px; min-height: 100px; perspective-origin: 50% 50%; text-align: right; transform-origin: 50% 50%; width: 100%">
            <div class="headerMenu_panelLinks" style="align-items: flex-start; block-size: auto; display: flex; height: auto; inline-size: auto; list-style-type: none; perspective-origin: 50% 50%; text-align: right; transform-origin: 50% 50%; width: auto">
              <ul style="block-size: auto; font-size: 18px; font-weight: 900; height: auto; inline-size: auto; letter-spacing: -0.5px; line-height: 20px; padding-inline: 15px 30px; padding-left: 30px; padding-right: 15px; perspective-origin: 50% 50%; text-align: right; transform-origin: 50% 50%; width: auto">
                <li style="block-size: auto; font-size: 18px; font-weight: 900; height: auto; inline-size: auto; letter-spacing: -0.5px; line-height: 20px; padding-block: 15px; padding-bottom: 15px; padding-top: 15px; perspective-origin: 50% 50%; transform-origin: 50% 50%; width: auto">
                  <a
                    href="https://hotstore.hotmobile.co.il/smartphones.html?utm_source=hot_mobile&amp;utm_medium=smartphones&amp;utm_campaign=Top"
                    role="menuitem"
                    data-id="30"
                    style="
                      border-block-color: rgb(0, 0, 0);
                      border-color: rgb(0, 0, 0);
                      border-inline-color: rgb(0, 0, 0);
                      caret-color: rgb(0, 0, 0);
                      color: rgb(0, 0, 0);
                      column-rule-color: rgb(0, 0, 0);
                      font-size: 18px;
                      font-weight: 900;
                      letter-spacing: -0.5px;
                      line-height: 20px;
                      list-style-type: none;
                      outline-color: rgb(0, 0, 0);
                      perspective-origin: 50% 50%;
                      text-align: right;
                      text-decoration: none solid rgb(0, 0, 0);
                      text-emphasis-color: rgb(0, 0, 0);
                      transform-origin: 50% 50%;
                      -webkit-text-fill-color: rgb(0, 0, 0);
                      -webkit-text-stroke-color: rgb(0, 0, 0);
                    "
                    >מכשירי סלולר</a
                  >
                </li>
                <li style="block-size: auto; font-size: 18px; font-weight: 900; height: auto; inline-size: auto; letter-spacing: -0.5px; line-height: 20px; padding-block: 15px; padding-bottom: 15px; padding-top: 15px; perspective-origin: 50% 50%; transform-origin: 50% 50%; width: auto">
                  <a
                    href="https://hotstore.hotmobile.co.il/smart-watches.html"
                    role="menuitem"
                    data-id="31"
                    style="
                      border-block-color: rgb(0, 0, 0);
                      border-color: rgb(0, 0, 0);
                      border-inline-color: rgb(0, 0, 0);
                      caret-color: rgb(0, 0, 0);
                      color: rgb(0, 0, 0);
                      column-rule-color: rgb(0, 0, 0);
                      font-size: 18px;
                      font-weight: 900;
                      letter-spacing: -0.5px;
                      line-height: 20px;
                      list-style-type: none;
                      outline-color: rgb(0, 0, 0);
                      perspective-origin: 50% 50%;
                      text-align: right;
                      text-decoration: none solid rgb(0, 0, 0);
                      text-emphasis-color: rgb(0, 0, 0);
                      transform-origin: 50% 50%;
                      -webkit-text-fill-color: rgb(0, 0, 0);
                      -webkit-text-stroke-color: rgb(0, 0, 0);
                    "
                    >שעונים חכמים</a
                  >
                </li>
                <li style="block-size: auto; font-size: 18px; font-weight: 900; height: auto; inline-size: auto; letter-spacing: -0.5px; line-height: 20px; padding-block: 15px; padding-bottom: 15px; padding-top: 15px; perspective-origin: 50% 50%; transform-origin: 50% 50%; width: auto">
                  <a
                    href="https://hotstore.hotmobile.co.il/accessories-smartphones.html?utm_source=hot_mobile&amp;utm_medium=accessories&amp;utm_campaign=Top"
                    role="menuitem"
                    data-id="32"
                    style="
                      border-block-color: rgb(0, 0, 0);
                      border-color: rgb(0, 0, 0);
                      border-inline-color: rgb(0, 0, 0);
                      caret-color: rgb(0, 0, 0);
                      color: rgb(0, 0, 0);
                      column-rule-color: rgb(0, 0, 0);
                      font-size: 18px;
                      font-weight: 900;
                      letter-spacing: -0.5px;
                      line-height: 20px;
                      list-style-type: none;
                      outline-color: rgb(0, 0, 0);
                      perspective-origin: 50% 50%;
                      text-align: right;
                      text-decoration: none solid rgb(0, 0, 0);
                      text-emphasis-color: rgb(0, 0, 0);
                      transform-origin: 50% 50%;
                      -webkit-text-fill-color: rgb(0, 0, 0);
                      -webkit-text-stroke-color: rgb(0, 0, 0);
                    "
                    >אביזרים</a
                  >
                </li>
                <li style="block-size: auto; font-size: 18px; font-weight: 900; height: auto; inline-size: auto; letter-spacing: -0.5px; line-height: 20px; padding-block: 15px; padding-bottom: 15px; padding-top: 15px; perspective-origin: 50% 50%; transform-origin: 50% 50%; width: auto">
                  <a
                    href="https://hotstore.hotmobile.co.il/what-is-new/tvs-and-screens.html?utm_source=hot_mobile&amp;utm_medium=tvs&amp;utm_campaign=Top"
                    role="menuitem"
                    data-id="33"
                    style="
                      border-block-color: rgb(0, 0, 0);
                      border-color: rgb(0, 0, 0);
                      border-inline-color: rgb(0, 0, 0);
                      caret-color: rgb(0, 0, 0);
                      color: rgb(0, 0, 0);
                      column-rule-color: rgb(0, 0, 0);
                      font-size: 18px;
                      font-weight: 900;
                      letter-spacing: -0.5px;
                      line-height: 20px;
                      list-style-type: none;
                      outline-color: rgb(0, 0, 0);
                      perspective-origin: 50% 50%;
                      text-align: right;
                      text-decoration: none solid rgb(0, 0, 0);
                      text-emphasis-color: rgb(0, 0, 0);
                      transform-origin: 50% 50%;
                      -webkit-text-fill-color: rgb(0, 0, 0);
                      -webkit-text-stroke-color: rgb(0, 0, 0);
                    "
                    >טלוויזיות</a
                  >
                </li>
                <li style="block-size: auto; font-size: 18px; font-weight: 900; height: auto; inline-size: auto; letter-spacing: -0.5px; line-height: 20px; padding-block: 15px; padding-bottom: 15px; padding-top: 15px; perspective-origin: 50% 50%; transform-origin: 50% 50%; width: auto">
                  <a
                    href="https://hotstore.hotmobile.co.il/computers-laptops-and-tablets.html?utm_source=hot_mobile&amp;utm_medium=computers-laptops&amp;utm_campaign=Top"
                    role="menuitem"
                    data-id="34"
                    style="
                      border-block-color: rgb(0, 0, 0);
                      border-color: rgb(0, 0, 0);
                      border-inline-color: rgb(0, 0, 0);
                      caret-color: rgb(0, 0, 0);
                      color: rgb(0, 0, 0);
                      column-rule-color: rgb(0, 0, 0);
                      font-size: 18px;
                      font-weight: 900;
                      letter-spacing: -0.5px;
                      line-height: 20px;
                      list-style-type: none;
                      outline-color: rgb(0, 0, 0);
                      perspective-origin: 50% 50%;
                      text-align: right;
                      text-decoration: none solid rgb(0, 0, 0);
                      text-emphasis-color: rgb(0, 0, 0);
                      transform-origin: 50% 50%;
                      -webkit-text-fill-color: rgb(0, 0, 0);
                      -webkit-text-stroke-color: rgb(0, 0, 0);
                    "
                    >לפטופים וטאבלטים</a
                  >
                </li>
              </ul>
            </div>
            <!---->
          </div>
        </div>
      </li>
      <li class="" role="menuitem" style="block-size: 60px; height: 60px; inline-size: 37.5px; margin-inline: 16px; margin-left: 16px; margin-right: 16px; min-block-size: auto; min-height: auto; min-inline-size: auto; min-width: auto; perspective-origin: 18.75px 30px; transform-origin: 18.75px 30px; width: 37.5px">
        <a
          href="#"
          role="menuitem"
          id="headerMenu_tab4"
          aria-haspopup="true"
          aria-expanded="false"
          aria-controls="headerMenu4"
          class="headerMenu_toggle"
          data-id="36"
          style="
            block-size: 60px;
            border-block-color: rgb(0, 0, 0);
            border-color: rgb(0, 0, 0);
            border-inline-color: rgb(0, 0, 0);
            inset: 0px;
            caret-color: rgb(0, 0, 0);
            color: rgb(0, 0, 0);
            column-rule-color: rgb(0, 0, 0);
            display: flex;
            flex-direction: column;
            font-size: 18px;
            font-weight: 900;
            height: 60px;
            inline-size: 37.5px;
            inset-block: 0px;
            inset-inline: 0px;
            justify-content: center;
            line-height: 18px;
            list-style-type: none;
            outline-color: rgb(0, 0, 0);
            perspective-origin: 18.75px 30px;
            position: relative;
            text-align: center;
            text-decoration: none solid rgb(0, 0, 0);
            text-emphasis-color: rgb(0, 0, 0);
            transform-origin: 18.75px 30px;
            width: 37.5px;
            -webkit-text-fill-color: rgb(0, 0, 0);
            -webkit-text-stroke-color: rgb(0, 0, 0);
          "
          >חו"ל</a
        >
        <div
          role="menu"
          id="headerMenu4"
          aria-hidden="true"
          aria-labelledby="headerMenu_tab4"
          class="headerMenu_panel"
          data-id="40"
          style="
            background-color: rgb(255, 255, 255);
            block-size: auto;
            box-shadow: rgb(0, 0, 0) 0px 0px 12px 0px;
            display: none;
            height: auto;
            inline-size: auto;
            inset-block-start: 100%;
            inset-inline-start: 16px;
            list-style-type: none;
            margin-block-start: 35px;
            margin-top: 35px;
            max-inline-size: 1150px;
            max-width: 1150px;
            opacity: 0;
            padding-block: 45px;
            padding: 45px 35px 45px 50px;
            padding-inline: 35px 50px;
            perspective-origin: 50% 50%;
            position: absolute;
            right: 16px;
            text-align: right;
            top: 100%;
            transform-origin: 50% 50%;
            transition-duration: 0.5s;
            transition-timing-function: ease-in-out;
            width: auto;
          "
        >
          <div class="headerMenu_panelContent" style="align-items: center; block-size: auto; display: flex; height: auto; inline-size: 100%; list-style-type: none; min-block-size: 100px; min-height: 100px; perspective-origin: 50% 50%; text-align: right; transform-origin: 50% 50%; width: 100%">
            <div class="headerMenu_panelLinks" style="align-items: flex-start; block-size: auto; display: flex; height: auto; inline-size: auto; list-style-type: none; perspective-origin: 50% 50%; text-align: right; transform-origin: 50% 50%; width: auto">
              <ul style="block-size: auto; font-size: 18px; font-weight: 900; height: auto; inline-size: auto; letter-spacing: -0.5px; line-height: 20px; padding-inline: 15px 30px; padding-left: 30px; padding-right: 15px; perspective-origin: 50% 50%; text-align: right; transform-origin: 50% 50%; width: auto">
                <li style="block-size: auto; font-size: 18px; font-weight: 900; height: auto; inline-size: auto; letter-spacing: -0.5px; line-height: 20px; padding-block: 15px; padding-bottom: 15px; padding-top: 15px; perspective-origin: 50% 50%; transform-origin: 50% 50%; width: auto">
                  <a
                    href="/roaming/"
                    role="menuitem"
                    data-id="37"
                    style="
                      border-block-color: rgb(0, 0, 0);
                      border-color: rgb(0, 0, 0);
                      border-inline-color: rgb(0, 0, 0);
                      caret-color: rgb(0, 0, 0);
                      color: rgb(0, 0, 0);
                      column-rule-color: rgb(0, 0, 0);
                      font-size: 18px;
                      font-weight: 900;
                      letter-spacing: -0.5px;
                      line-height: 20px;
                      list-style-type: none;
                      outline-color: rgb(0, 0, 0);
                      perspective-origin: 50% 50%;
                      text-align: right;
                      text-decoration: none solid rgb(0, 0, 0);
                      text-emphasis-color: rgb(0, 0, 0);
                      transform-origin: 50% 50%;
                      -webkit-text-fill-color: rgb(0, 0, 0);
                      -webkit-text-stroke-color: rgb(0, 0, 0);
                    "
                    >חבילות חו"ל</a
                  >
                </li>
                <li style="block-size: auto; font-size: 18px; font-weight: 900; height: auto; inline-size: auto; letter-spacing: -0.5px; line-height: 20px; padding-block: 15px; padding-bottom: 15px; padding-top: 15px; perspective-origin: 50% 50%; transform-origin: 50% 50%; width: auto">
                  <a
                    href="https://travelsimobile.co.il/lobby/"
                    role="menuitem"
                    data-id="38"
                    style="
                      border-block-color: rgb(0, 0, 0);
                      border-color: rgb(0, 0, 0);
                      border-inline-color: rgb(0, 0, 0);
                      caret-color: rgb(0, 0, 0);
                      color: rgb(0, 0, 0);
                      column-rule-color: rgb(0, 0, 0);
                      font-size: 18px;
                      font-weight: 900;
                      letter-spacing: -0.5px;
                      line-height: 20px;
                      list-style-type: none;
                      outline-color: rgb(0, 0, 0);
                      perspective-origin: 50% 50%;
                      text-align: right;
                      text-decoration: none solid rgb(0, 0, 0);
                      text-emphasis-color: rgb(0, 0, 0);
                      transform-origin: 50% 50%;
                      -webkit-text-fill-color: rgb(0, 0, 0);
                      -webkit-text-stroke-color: rgb(0, 0, 0);
                    "
                    >Travel sim</a
                  >
                </li>
                <li style="block-size: auto; font-size: 18px; font-weight: 900; height: auto; inline-size: auto; letter-spacing: -0.5px; line-height: 20px; padding-block: 15px; padding-bottom: 15px; padding-top: 15px; perspective-origin: 50% 50%; transform-origin: 50% 50%; width: auto">
                  <a
                    href="https://www.017.co.il/?utm_source=hotmobile&amp;utm_medium=banner&amp;utm_campaign=017"
                    role="menuitem"
                    data-id="39"
                    style="
                      border-block-color: rgb(0, 0, 0);
                      border-color: rgb(0, 0, 0);
                      border-inline-color: rgb(0, 0, 0);
                      caret-color: rgb(0, 0, 0);
                      color: rgb(0, 0, 0);
                      column-rule-color: rgb(0, 0, 0);
                      font-size: 18px;
                      font-weight: 900;
                      letter-spacing: -0.5px;
                      line-height: 20px;
                      list-style-type: none;
                      outline-color: rgb(0, 0, 0);
                      perspective-origin: 50% 50%;
                      text-align: right;
                      text-decoration: none solid rgb(0, 0, 0);
                      text-emphasis-color: rgb(0, 0, 0);
                      transform-origin: 50% 50%;
                      -webkit-text-fill-color: rgb(0, 0, 0);
                      -webkit-text-stroke-color: rgb(0, 0, 0);
                    "
                    >מחייגים לחו"ל</a
                  >
                </li>
              </ul>
            </div>
            <!---->
          </div>
        </div>
      </li>
      <li
        class="headerMenu_myHot"
        role="menuitem"
        data-id="47"
        style="block-size: 60px; height: 60px; inline-size: 137.516px; margin-inline: 16px; margin-left: 16px; margin-right: 16px; min-block-size: auto; min-height: auto; min-inline-size: auto; min-width: auto; perspective-origin: 68.75px 30px; transform-origin: 68.7578px 30px; width: 137.516px"
      >
        <a
          href="#"
          role="menuitem"
          id="headerMenu_tab5"
          aria-haspopup="true"
          aria-expanded="false"
          aria-controls="headerMenu5"
          class="headerMenu_toggle"
          data-id="41"
          style="
            block-size: 60px;
            border-block-color: rgb(255, 0, 0);
            border-color: rgb(255, 0, 0);
            border-inline-color: rgb(255, 0, 0);
            inset: 0px;
            caret-color: rgb(255, 0, 0);
            color: rgb(255, 0, 0);
            column-rule-color: rgb(255, 0, 0);
            display: flex;
            flex-direction: column;
            font-size: 18px;
            font-weight: 900;
            height: 60px;
            inline-size: 137.531px;
            inset-block: 0px;
            inset-inline: 0px;
            justify-content: center;
            line-height: 18px;
            list-style-type: none;
            outline-color: rgb(255, 0, 0);
            perspective-origin: 68.7656px 30px;
            position: relative;
            text-align: center;
            text-decoration: none solid rgb(255, 0, 0);
            text-emphasis-color: rgb(255, 0, 0);
            transform-origin: 68.7656px 30px;
            width: 137.531px;
            -webkit-text-fill-color: rgb(255, 0, 0);
            -webkit-text-stroke-color: rgb(255, 0, 0);
          "
          >My HOTmobile</a
        >
        <div
          role="menu"
          id="headerMenu5"
          aria-hidden="true"
          aria-labelledby="headerMenu_tab5"
          class="headerMenu_panel"
          data-id="46"
          style="
            background-color: rgb(255, 255, 255);
            block-size: auto;
            box-shadow: rgb(0, 0, 0) 0px 0px 12px 0px;
            display: none;
            height: auto;
            inline-size: auto;
            inset-block-start: 100%;
            inset-inline-start: 16px;
            list-style-type: none;
            margin-block-start: 35px;
            margin-top: 35px;
            max-inline-size: 1150px;
            max-width: 1150px;
            opacity: 0;
            padding-block: 45px;
            padding: 45px 35px 45px 50px;
            padding-inline: 35px 50px;
            perspective-origin: 50% 50%;
            position: absolute;
            right: 16px;
            text-align: right;
            top: 100%;
            transform-origin: 50% 50%;
            transition-duration: 0.5s;
            transition-timing-function: ease-in-out;
            width: auto;
          "
        >
          <div class="headerMenu_panelContent" style="align-items: center; block-size: auto; display: flex; height: auto; inline-size: 100%; list-style-type: none; min-block-size: 100px; min-height: 100px; perspective-origin: 50% 50%; text-align: right; transform-origin: 50% 50%; width: 100%">
            <div class="headerMenu_panelLinks" style="align-items: flex-start; block-size: auto; display: flex; height: auto; inline-size: auto; list-style-type: none; perspective-origin: 50% 50%; text-align: right; transform-origin: 50% 50%; width: auto">
              <ul style="block-size: auto; font-size: 18px; font-weight: 900; height: auto; inline-size: auto; letter-spacing: -0.5px; line-height: 20px; padding-inline: 15px 30px; padding-left: 30px; padding-right: 15px; perspective-origin: 50% 50%; text-align: right; transform-origin: 50% 50%; width: auto">
                <li style="block-size: auto; font-size: 18px; font-weight: 900; height: auto; inline-size: auto; letter-spacing: -0.5px; line-height: 20px; padding-block: 15px; padding-bottom: 15px; padding-top: 15px; perspective-origin: 50% 50%; transform-origin: 50% 50%; width: auto">
                  <a
                    href="/SelfService/Pages/Invoices.aspx"
                    role="menuitem"
                    data-id="42"
                    style="
                      border-block-color: rgb(0, 0, 0);
                      border-color: rgb(0, 0, 0);
                      border-inline-color: rgb(0, 0, 0);
                      caret-color: rgb(0, 0, 0);
                      color: rgb(0, 0, 0);
                      column-rule-color: rgb(0, 0, 0);
                      font-size: 18px;
                      font-weight: 900;
                      letter-spacing: -0.5px;
                      line-height: 20px;
                      list-style-type: none;
                      outline-color: rgb(0, 0, 0);
                      perspective-origin: 50% 50%;
                      text-align: right;
                      text-decoration: none solid rgb(0, 0, 0);
                      text-emphasis-color: rgb(0, 0, 0);
                      transform-origin: 50% 50%;
                      -webkit-text-fill-color: rgb(0, 0, 0);
                      -webkit-text-stroke-color: rgb(0, 0, 0);
                    "
                    >כניסה לאזור האישי</a
                  >
                </li>
                <li style="block-size: auto; font-size: 18px; font-weight: 900; height: auto; inline-size: auto; letter-spacing: -0.5px; line-height: 20px; padding-block: 15px; padding-bottom: 15px; padding-top: 15px; perspective-origin: 50% 50%; transform-origin: 50% 50%; width: auto">
                  <a
                    href="/SelfService/Pages/Register.aspx"
                    role="menuitem"
                    data-id="43"
                    style="
                      border-block-color: rgb(0, 0, 0);
                      border-color: rgb(0, 0, 0);
                      border-inline-color: rgb(0, 0, 0);
                      caret-color: rgb(0, 0, 0);
                      color: rgb(0, 0, 0);
                      column-rule-color: rgb(0, 0, 0);
                      font-size: 18px;
                      font-weight: 900;
                      letter-spacing: -0.5px;
                      line-height: 20px;
                      list-style-type: none;
                      outline-color: rgb(0, 0, 0);
                      perspective-origin: 50% 50%;
                      text-align: right;
                      text-decoration: none solid rgb(0, 0, 0);
                      text-emphasis-color: rgb(0, 0, 0);
                      transform-origin: 50% 50%;
                      -webkit-text-fill-color: rgb(0, 0, 0);
                      -webkit-text-stroke-color: rgb(0, 0, 0);
                    "
                    >הרשמה לאיזור האישי</a
                  >
                </li>
                <li style="block-size: auto; font-size: 18px; font-weight: 900; height: auto; inline-size: auto; letter-spacing: -0.5px; line-height: 20px; padding-block: 15px; padding-bottom: 15px; padding-top: 15px; perspective-origin: 50% 50%; transform-origin: 50% 50%; width: auto">
                  <a
                    href="/SelfService/Pages/DataUsage.aspx"
                    role="menuitem"
                    data-id="44"
                    style="
                      border-block-color: rgb(0, 0, 0);
                      border-color: rgb(0, 0, 0);
                      border-inline-color: rgb(0, 0, 0);
                      caret-color: rgb(0, 0, 0);
                      color: rgb(0, 0, 0);
                      column-rule-color: rgb(0, 0, 0);
                      font-size: 18px;
                      font-weight: 900;
                      letter-spacing: -0.5px;
                      line-height: 20px;
                      list-style-type: none;
                      outline-color: rgb(0, 0, 0);
                      perspective-origin: 50% 50%;
                      text-align: right;
                      text-decoration: none solid rgb(0, 0, 0);
                      text-emphasis-color: rgb(0, 0, 0);
                      transform-origin: 50% 50%;
                      -webkit-text-fill-color: rgb(0, 0, 0);
                      -webkit-text-stroke-color: rgb(0, 0, 0);
                    "
                    >ניצול חבילת גלישה</a
                  >
                </li>
                <li style="block-size: auto; font-size: 18px; font-weight: 900; height: auto; inline-size: auto; letter-spacing: -0.5px; line-height: 20px; padding-block: 15px; padding-bottom: 15px; padding-top: 15px; perspective-origin: 50% 50%; transform-origin: 50% 50%; width: auto">
                  <a
                    href="/SelfService/Pages/DebtPayment.aspx"
                    role="menuitem"
                    data-id="45"
                    style="
                      border-block-color: rgb(0, 0, 0);
                      border-color: rgb(0, 0, 0);
                      border-inline-color: rgb(0, 0, 0);
                      caret-color: rgb(0, 0, 0);
                      color: rgb(0, 0, 0);
                      column-rule-color: rgb(0, 0, 0);
                      font-size: 18px;
                      font-weight: 900;
                      letter-spacing: -0.5px;
                      line-height: 20px;
                      list-style-type: none;
                      outline-color: rgb(0, 0, 0);
                      perspective-origin: 50% 50%;
                      text-align: right;
                      text-decoration: none solid rgb(0, 0, 0);
                      text-emphasis-color: rgb(0, 0, 0);
                      transform-origin: 50% 50%;
                      -webkit-text-fill-color: rgb(0, 0, 0);
                      -webkit-text-stroke-color: rgb(0, 0, 0);
                    "
                    >תשלום חוב</a
                  >
                </li>
              </ul>
            </div>
            <!---->
          </div>
        </div>
      </li>
      <li class="mobileShow" role="menuitem" style="block-size: auto; display: none; height: auto; inline-size: auto; margin-inline: 16px; margin-left: 16px; margin-right: 16px; perspective-origin: 50% 50%; transform-origin: 50% 50%; width: auto">
        <a
          href="/business/Pages/default.aspx"
          class="headerMenu_link"
          style="
            block-size: 60px;
            border-block-color: rgb(0, 0, 0);
            border-color: rgb(0, 0, 0);
            border-inline-color: rgb(0, 0, 0);
            caret-color: rgb(0, 0, 0);
            color: rgb(0, 0, 0);
            column-rule-color: rgb(0, 0, 0);
            display: none;
            flex-direction: column;
            font-size: 18px;
            font-weight: 900;
            height: 60px;
            justify-content: center;
            line-height: 18px;
            list-style-type: none;
            outline-color: rgb(0, 0, 0);
            perspective-origin: 50% 50%;
            position: relative;
            text-align: center;
            text-decoration: none solid rgb(0, 0, 0);
            text-emphasis-color: rgb(0, 0, 0);
            transform-origin: 50% 50%;
            -webkit-text-fill-color: rgb(0, 0, 0);
            -webkit-text-stroke-color: rgb(0, 0, 0);
          "
          >HOTmobile עסקים</a
        >
      </li>
      <li class="mobileShow" role="menuitem" style="block-size: auto; display: none; height: auto; inline-size: auto; margin-inline: 16px; margin-left: 16px; margin-right: 16px; perspective-origin: 50% 50%; transform-origin: 50% 50%; width: auto">
        <a
          href="/Pages/Career.aspx"
          class="headerMenu_link"
          style="
            block-size: 60px;
            border-block-color: rgb(0, 0, 0);
            border-color: rgb(0, 0, 0);
            border-inline-color: rgb(0, 0, 0);
            caret-color: rgb(0, 0, 0);
            color: rgb(0, 0, 0);
            column-rule-color: rgb(0, 0, 0);
            display: none;
            flex-direction: column;
            font-size: 18px;
            font-weight: 900;
            height: 60px;
            justify-content: center;
            line-height: 18px;
            list-style-type: none;
            outline-color: rgb(0, 0, 0);
            perspective-origin: 50% 50%;
            position: relative;
            text-align: center;
            text-decoration: none solid rgb(0, 0, 0);
            text-emphasis-color: rgb(0, 0, 0);
            transform-origin: 50% 50%;
            -webkit-text-fill-color: rgb(0, 0, 0);
            -webkit-text-stroke-color: rgb(0, 0, 0);
          "
          >משרות ב -HOTmobile</a
        >
      </li>
    </ul>
  </nav>
</div>` },
  { filename: "isabelbernard com navigation with images", content: `<style></style>
<div class="section-template--21663517311322__nf_navigation_slider_npBNxX-padding !nf-px-0 gradient color-scheme-1" style="background-attachment: fixed; background-color: rgb(255, 255, 255); block-size: 170px; display: block; height: 170px; inline-size: 1920px; perspective-origin: 960px 85px; transform-origin: 960px 85px; width: 1920px">
  <div
    class="nf-flex nf-flex-wrap page-width"
    style="block-size: 170px; display: flex; flex-wrap: wrap; height: 170px; inline-size: 1600px; margin-inline: 160px; margin-left: 160px; margin-right: 160px; max-inline-size: 1600px; max-width: 1600px; padding-inline: 50px; padding-left: 50px; padding-right: 50px; perspective-origin: 800px 85px; transform-origin: 800px 85px; width: 1600px"
  >
    <div
      id="test-subject"
      class="nf-relative nf-w-full nf-py-2"
      style="
        block-size: 170px;
        inset: 0px;
        display: block;
        height: 170px;
        inline-size: 1500px;
        inset-block: 0px;
        inset-inline: 0px;
        min-block-size: auto;
        min-height: auto;
        min-inline-size: auto;
        min-width: auto;
        padding-block: 5px;
        padding-bottom: 5px;
        padding-top: 5px;
        perspective-origin: 750px 85px;
        position: relative;
        transform-origin: 750px 85px;
        width: 1500px;
      "
    >
      <div
        class="nf-justify-start max-[480px]:nf-justify-start md:nf-snap-x nf-scroll-smooth hidescrollbar nf-inline-flex nf-w-full nf-gap-[4rem] max-[989px]:nf-gap-[1rem] nf-px-4 nf-overflow-x-auto nf-overflow-y-hidden"
        x-ref="slider"
        style="block-size: 160px; gap: 20px; display: inline-flex; height: 160px; inline-size: 1500px; overflow: auto hidden; padding-inline: 10px; padding-left: 10px; padding-right: 10px; perspective-origin: 750px 80px; scroll-behavior: smooth; transform-origin: 750px 80px; width: 1500px"
      >
        <div
          class="md:nf-snap-center nf-flex nf-justify-center nf-flex-none nf-w-[114px] max-[640px]:nf-w-[80px]"
          style="block-size: 160px; display: flex; flex-shrink: 0; height: 160px; inline-size: 114px; justify-content: center; min-block-size: auto; min-height: auto; min-inline-size: auto; min-width: auto; perspective-origin: 57px 80px; transform-origin: 57px 80px; width: 114px"
        >
          <div class="nf-flex nf-w-full" style="block-size: 160px; display: flex; height: 160px; inline-size: 114px; min-block-size: auto; min-height: auto; min-inline-size: auto; min-width: auto; perspective-origin: 57px 80px; transform-origin: 57px 80px; width: 114px">
            <a
              href="/collections/rings"
              class="nf-no-underline gradient color-scheme-1"
              style="background-attachment: fixed; background-color: rgb(255, 255, 255); block-size: 160px; cursor: pointer; display: block; height: 160px; inline-size: 114px; min-block-size: auto; min-height: auto; min-inline-size: auto; min-width: auto; perspective-origin: 57px 80px; transform-origin: 57px 80px; width: 114px"
            >
              <div class="nf-w-[114px] nf-h-[114px] max-[640px]:nf-w-[80px] max-[640px]:nf-h-[80px] nf-mb-[1rem]" style="block-size: 114px; cursor: pointer; display: block; height: 114px; inline-size: 114px; margin-block-end: 10px; margin-bottom: 10px; perspective-origin: 57px 57px; transform-origin: 57px 57px; width: 114px">
                <div
                  class="nf-rounded-full nf-overflow-hidden nf-object-cover nf-aspect-[1/1] nf-aspect-w-1 nf-aspect-h-1"
                  style="
                    block-size: 114px;
                    border-radius: 9999px;
                    border-end-end-radius: 9999px;
                    border-end-start-radius: 9999px;
                    border-start-end-radius: 9999px;
                    border-start-start-radius: 9999px;
                    inset: 0px;
                    cursor: pointer;
                    display: block;
                    height: 114px;
                    inline-size: 114px;
                    inset-block: 0px;
                    inset-inline: 0px;
                    object-fit: cover;
                    overflow: hidden;
                    padding-block-end: 114px;
                    padding-bottom: 114px;
                    perspective-origin: 57px 57px;
                    position: relative;
                    transform-origin: 57px 57px;
                    width: 114px;
                  "
                >
                  <img
                    src="//www.isabelbernard.com/cdn/shop/files/col-rings.webp?v=1716820117&amp;width=160"
                    alt="Rings"
                    srcset="//www.isabelbernard.com/cdn/shop/files/col-rings.webp?v=1716820117&amp;width=160 160w"
                    width="160"
                    height="160"
                    loading="eager"
                    class="nf-w-full nf-h-full nf-object-cover nf-aspect-[1/1]"
                    style="block-size: 114px; inset: 0px; cursor: pointer; height: 114px; inline-size: 114px; inset-block: 0px; inset-inline: 0px; min-block-size: 0px; min-height: 0px; min-inline-size: 0px; min-width: 0px; object-fit: cover; perspective-origin: 57px 57px; position: absolute; transform-origin: 57px 57px; width: 114px"
                  />
                </div>
              </div>

              <div class="nf-w-[114px] max-[640px]:nf-w-[80px] nf-text-center nf-text-[1.2rem]" style="block-size: 18px; cursor: pointer; display: block; font-size: 12px; height: 18px; inline-size: 114px; line-height: 21.6px; perspective-origin: 57px 9px; text-align: center; transform-origin: 57px 9px; width: 114px">
                <p
                  class="nf-mb-0 nf-mt-0 nf-leading-normal"
                  style="block-size: 18px; cursor: pointer; display: block; font-size: 12px; height: 18px; inline-size: 114px; line-height: 18px; margin-block: 0px; margin-bottom: 0px; margin-top: 0px; perspective-origin: 57px 9px; text-align: center; text-transform: uppercase; transform-origin: 57px 9px; width: 114px"
                >
                  Rings
                </p>
              </div>
            </a>
          </div>
        </div>

        <div
          class="md:nf-snap-center nf-flex nf-justify-center nf-flex-none nf-w-[114px] max-[640px]:nf-w-[80px]"
          style="block-size: 160px; display: flex; flex-shrink: 0; height: 160px; inline-size: 114px; justify-content: center; min-block-size: auto; min-height: auto; min-inline-size: auto; min-width: auto; perspective-origin: 57px 80px; transform-origin: 57px 80px; width: 114px"
        >
          <div class="nf-flex nf-w-full" style="block-size: 160px; display: flex; height: 160px; inline-size: 114px; min-block-size: auto; min-height: auto; min-inline-size: auto; min-width: auto; perspective-origin: 57px 80px; transform-origin: 57px 80px; width: 114px">
            <a
              href="/collections/diamond-jewellery"
              class="nf-no-underline gradient color-scheme-1"
              style="background-attachment: fixed; background-color: rgb(255, 255, 255); block-size: 160px; cursor: pointer; display: block; height: 160px; inline-size: 114px; min-block-size: auto; min-height: auto; min-inline-size: auto; min-width: auto; perspective-origin: 57px 80px; transform-origin: 57px 80px; width: 114px"
            >
              <div class="nf-w-[114px] nf-h-[114px] max-[640px]:nf-w-[80px] max-[640px]:nf-h-[80px] nf-mb-[1rem]" style="block-size: 114px; cursor: pointer; display: block; height: 114px; inline-size: 114px; margin-block-end: 10px; margin-bottom: 10px; perspective-origin: 57px 57px; transform-origin: 57px 57px; width: 114px">
                <div
                  class="nf-rounded-full nf-overflow-hidden nf-object-cover nf-aspect-[1/1] nf-aspect-w-1 nf-aspect-h-1"
                  style="
                    block-size: 114px;
                    border-radius: 9999px;
                    border-end-end-radius: 9999px;
                    border-end-start-radius: 9999px;
                    border-start-end-radius: 9999px;
                    border-start-start-radius: 9999px;
                    inset: 0px;
                    cursor: pointer;
                    display: block;
                    height: 114px;
                    inline-size: 114px;
                    inset-block: 0px;
                    inset-inline: 0px;
                    object-fit: cover;
                    overflow: hidden;
                    padding-block-end: 114px;
                    padding-bottom: 114px;
                    perspective-origin: 57px 57px;
                    position: relative;
                    transform-origin: 57px 57px;
                    width: 114px;
                  "
                >
                  <img
                    src="//www.isabelbernard.com/cdn/shop/files/col-diamond-jewellery.webp?v=1716820162&amp;width=160"
                    alt="Diamond Jewellery"
                    srcset="//www.isabelbernard.com/cdn/shop/files/col-diamond-jewellery.webp?v=1716820162&amp;width=160 160w"
                    width="160"
                    height="160"
                    loading="eager"
                    class="nf-w-full nf-h-full nf-object-cover nf-aspect-[1/1]"
                    style="block-size: 114px; inset: 0px; cursor: pointer; height: 114px; inline-size: 114px; inset-block: 0px; inset-inline: 0px; min-block-size: 0px; min-height: 0px; min-inline-size: 0px; min-width: 0px; object-fit: cover; perspective-origin: 57px 57px; position: absolute; transform-origin: 57px 57px; width: 114px"
                  />
                </div>
              </div>

              <div class="nf-w-[114px] max-[640px]:nf-w-[80px] nf-text-center nf-text-[1.2rem]" style="block-size: 36px; cursor: pointer; display: block; font-size: 12px; height: 36px; inline-size: 114px; line-height: 21.6px; perspective-origin: 57px 18px; text-align: center; transform-origin: 57px 18px; width: 114px">
                <p
                  class="nf-mb-0 nf-mt-0 nf-leading-normal"
                  style="block-size: 36px; cursor: pointer; display: block; font-size: 12px; height: 36px; inline-size: 114px; line-height: 18px; margin-block: 0px; margin-bottom: 0px; margin-top: 0px; perspective-origin: 57px 18px; text-align: center; text-transform: uppercase; transform-origin: 57px 18px; width: 114px"
                >
                  Diamond Jewellery
                </p>
              </div>
            </a>
          </div>
        </div>

        <div
          class="md:nf-snap-center nf-flex nf-justify-center nf-flex-none nf-w-[114px] max-[640px]:nf-w-[80px]"
          style="block-size: 160px; display: flex; flex-shrink: 0; height: 160px; inline-size: 114px; justify-content: center; min-block-size: auto; min-height: auto; min-inline-size: auto; min-width: auto; perspective-origin: 57px 80px; transform-origin: 57px 80px; width: 114px"
        >
          <div class="nf-flex nf-w-full" style="block-size: 160px; display: flex; height: 160px; inline-size: 114px; min-block-size: auto; min-height: auto; min-inline-size: auto; min-width: auto; perspective-origin: 57px 80px; transform-origin: 57px 80px; width: 114px">
            <a
              href="/collections/earrings"
              class="nf-no-underline gradient color-scheme-1"
              style="background-attachment: fixed; background-color: rgb(255, 255, 255); block-size: 160px; cursor: pointer; display: block; height: 160px; inline-size: 114px; min-block-size: auto; min-height: auto; min-inline-size: auto; min-width: auto; perspective-origin: 57px 80px; transform-origin: 57px 80px; width: 114px"
            >
              <div class="nf-w-[114px] nf-h-[114px] max-[640px]:nf-w-[80px] max-[640px]:nf-h-[80px] nf-mb-[1rem]" style="block-size: 114px; cursor: pointer; display: block; height: 114px; inline-size: 114px; margin-block-end: 10px; margin-bottom: 10px; perspective-origin: 57px 57px; transform-origin: 57px 57px; width: 114px">
                <div
                  class="nf-rounded-full nf-overflow-hidden nf-object-cover nf-aspect-[1/1] nf-aspect-w-1 nf-aspect-h-1"
                  style="
                    block-size: 114px;
                    border-radius: 9999px;
                    border-end-end-radius: 9999px;
                    border-end-start-radius: 9999px;
                    border-start-end-radius: 9999px;
                    border-start-start-radius: 9999px;
                    inset: 0px;
                    cursor: pointer;
                    display: block;
                    height: 114px;
                    inline-size: 114px;
                    inset-block: 0px;
                    inset-inline: 0px;
                    object-fit: cover;
                    overflow: hidden;
                    padding-block-end: 114px;
                    padding-bottom: 114px;
                    perspective-origin: 57px 57px;
                    position: relative;
                    transform-origin: 57px 57px;
                    width: 114px;
                  "
                >
                  <img
                    src="//www.isabelbernard.com/cdn/shop/files/col-earrings.webp?v=1716820199&amp;width=160"
                    alt="Earrings"
                    srcset="//www.isabelbernard.com/cdn/shop/files/col-earrings.webp?v=1716820199&amp;width=160 160w"
                    width="160"
                    height="160"
                    loading="eager"
                    class="nf-w-full nf-h-full nf-object-cover nf-aspect-[1/1]"
                    style="block-size: 114px; inset: 0px; cursor: pointer; height: 114px; inline-size: 114px; inset-block: 0px; inset-inline: 0px; min-block-size: 0px; min-height: 0px; min-inline-size: 0px; min-width: 0px; object-fit: cover; perspective-origin: 57px 57px; position: absolute; transform-origin: 57px 57px; width: 114px"
                  />
                </div>
              </div>

              <div class="nf-w-[114px] max-[640px]:nf-w-[80px] nf-text-center nf-text-[1.2rem]" style="block-size: 18px; cursor: pointer; display: block; font-size: 12px; height: 18px; inline-size: 114px; line-height: 21.6px; perspective-origin: 57px 9px; text-align: center; transform-origin: 57px 9px; width: 114px">
                <p
                  class="nf-mb-0 nf-mt-0 nf-leading-normal"
                  style="block-size: 18px; cursor: pointer; display: block; font-size: 12px; height: 18px; inline-size: 114px; line-height: 18px; margin-block: 0px; margin-bottom: 0px; margin-top: 0px; perspective-origin: 57px 9px; text-align: center; text-transform: uppercase; transform-origin: 57px 9px; width: 114px"
                >
                  Earrings
                </p>
              </div>
            </a>
          </div>
        </div>

        <div
          class="md:nf-snap-center nf-flex nf-justify-center nf-flex-none nf-w-[114px] max-[640px]:nf-w-[80px]"
          style="block-size: 160px; display: flex; flex-shrink: 0; height: 160px; inline-size: 114px; justify-content: center; min-block-size: auto; min-height: auto; min-inline-size: auto; min-width: auto; perspective-origin: 57px 80px; transform-origin: 57px 80px; width: 114px"
        >
          <div class="nf-flex nf-w-full" style="block-size: 160px; display: flex; height: 160px; inline-size: 114px; min-block-size: auto; min-height: auto; min-inline-size: auto; min-width: auto; perspective-origin: 57px 80px; transform-origin: 57px 80px; width: 114px">
            <a
              href="/collections/bracelets"
              class="nf-no-underline gradient color-scheme-1"
              style="background-attachment: fixed; background-color: rgb(255, 255, 255); block-size: 160px; cursor: pointer; display: block; height: 160px; inline-size: 114px; min-block-size: auto; min-height: auto; min-inline-size: auto; min-width: auto; perspective-origin: 57px 80px; transform-origin: 57px 80px; width: 114px"
            >
              <div class="nf-w-[114px] nf-h-[114px] max-[640px]:nf-w-[80px] max-[640px]:nf-h-[80px] nf-mb-[1rem]" style="block-size: 114px; cursor: pointer; display: block; height: 114px; inline-size: 114px; margin-block-end: 10px; margin-bottom: 10px; perspective-origin: 57px 57px; transform-origin: 57px 57px; width: 114px">
                <div
                  class="nf-rounded-full nf-overflow-hidden nf-object-cover nf-aspect-[1/1] nf-aspect-w-1 nf-aspect-h-1"
                  style="
                    block-size: 114px;
                    border-radius: 9999px;
                    border-end-end-radius: 9999px;
                    border-end-start-radius: 9999px;
                    border-start-end-radius: 9999px;
                    border-start-start-radius: 9999px;
                    inset: 0px;
                    cursor: pointer;
                    display: block;
                    height: 114px;
                    inline-size: 114px;
                    inset-block: 0px;
                    inset-inline: 0px;
                    object-fit: cover;
                    overflow: hidden;
                    padding-block-end: 114px;
                    padding-bottom: 114px;
                    perspective-origin: 57px 57px;
                    position: relative;
                    transform-origin: 57px 57px;
                    width: 114px;
                  "
                >
                  <img
                    src="//www.isabelbernard.com/cdn/shop/files/col-bracelets.webp?v=1716820314&amp;width=160"
                    alt="Bracelets"
                    srcset="//www.isabelbernard.com/cdn/shop/files/col-bracelets.webp?v=1716820314&amp;width=160 160w"
                    width="160"
                    height="160"
                    loading="eager"
                    class="nf-w-full nf-h-full nf-object-cover nf-aspect-[1/1]"
                    style="block-size: 114px; inset: 0px; cursor: pointer; height: 114px; inline-size: 114px; inset-block: 0px; inset-inline: 0px; min-block-size: 0px; min-height: 0px; min-inline-size: 0px; min-width: 0px; object-fit: cover; perspective-origin: 57px 57px; position: absolute; transform-origin: 57px 57px; width: 114px"
                  />
                </div>
              </div>

              <div class="nf-w-[114px] max-[640px]:nf-w-[80px] nf-text-center nf-text-[1.2rem]" style="block-size: 18px; cursor: pointer; display: block; font-size: 12px; height: 18px; inline-size: 114px; line-height: 21.6px; perspective-origin: 57px 9px; text-align: center; transform-origin: 57px 9px; width: 114px">
                <p
                  class="nf-mb-0 nf-mt-0 nf-leading-normal"
                  style="block-size: 18px; cursor: pointer; display: block; font-size: 12px; height: 18px; inline-size: 114px; line-height: 18px; margin-block: 0px; margin-bottom: 0px; margin-top: 0px; perspective-origin: 57px 9px; text-align: center; text-transform: uppercase; transform-origin: 57px 9px; width: 114px"
                >
                  Bracelets
                </p>
              </div>
            </a>
          </div>
        </div>

        <div
          class="md:nf-snap-center nf-flex nf-justify-center nf-flex-none nf-w-[114px] max-[640px]:nf-w-[80px]"
          style="block-size: 160px; display: flex; flex-shrink: 0; height: 160px; inline-size: 114px; justify-content: center; min-block-size: auto; min-height: auto; min-inline-size: auto; min-width: auto; perspective-origin: 57px 80px; transform-origin: 57px 80px; width: 114px"
        >
          <div class="nf-flex nf-w-full" style="block-size: 160px; display: flex; height: 160px; inline-size: 114px; min-block-size: auto; min-height: auto; min-inline-size: auto; min-width: auto; perspective-origin: 57px 80px; transform-origin: 57px 80px; width: 114px">
            <a
              href="/collections/necklaces"
              class="nf-no-underline gradient color-scheme-1"
              style="background-attachment: fixed; background-color: rgb(255, 255, 255); block-size: 160px; cursor: pointer; display: block; height: 160px; inline-size: 114px; min-block-size: auto; min-height: auto; min-inline-size: auto; min-width: auto; perspective-origin: 57px 80px; transform-origin: 57px 80px; width: 114px"
            >
              <div class="nf-w-[114px] nf-h-[114px] max-[640px]:nf-w-[80px] max-[640px]:nf-h-[80px] nf-mb-[1rem]" style="block-size: 114px; cursor: pointer; display: block; height: 114px; inline-size: 114px; margin-block-end: 10px; margin-bottom: 10px; perspective-origin: 57px 57px; transform-origin: 57px 57px; width: 114px">
                <div
                  class="nf-rounded-full nf-overflow-hidden nf-object-cover nf-aspect-[1/1] nf-aspect-w-1 nf-aspect-h-1"
                  style="
                    block-size: 114px;
                    border-radius: 9999px;
                    border-end-end-radius: 9999px;
                    border-end-start-radius: 9999px;
                    border-start-end-radius: 9999px;
                    border-start-start-radius: 9999px;
                    inset: 0px;
                    cursor: pointer;
                    display: block;
                    height: 114px;
                    inline-size: 114px;
                    inset-block: 0px;
                    inset-inline: 0px;
                    object-fit: cover;
                    overflow: hidden;
                    padding-block-end: 114px;
                    padding-bottom: 114px;
                    perspective-origin: 57px 57px;
                    position: relative;
                    transform-origin: 57px 57px;
                    width: 114px;
                  "
                >
                  <img
                    src="//www.isabelbernard.com/cdn/shop/files/col-necklaces.webp?v=1716820341&amp;width=160"
                    alt="Necklaces"
                    srcset="//www.isabelbernard.com/cdn/shop/files/col-necklaces.webp?v=1716820341&amp;width=160 160w"
                    width="160"
                    height="160"
                    loading="eager"
                    class="nf-w-full nf-h-full nf-object-cover nf-aspect-[1/1]"
                    style="block-size: 114px; inset: 0px; cursor: pointer; height: 114px; inline-size: 114px; inset-block: 0px; inset-inline: 0px; min-block-size: 0px; min-height: 0px; min-inline-size: 0px; min-width: 0px; object-fit: cover; perspective-origin: 57px 57px; position: absolute; transform-origin: 57px 57px; width: 114px"
                  />
                </div>
              </div>

              <div class="nf-w-[114px] max-[640px]:nf-w-[80px] nf-text-center nf-text-[1.2rem]" style="block-size: 18px; cursor: pointer; display: block; font-size: 12px; height: 18px; inline-size: 114px; line-height: 21.6px; perspective-origin: 57px 9px; text-align: center; transform-origin: 57px 9px; width: 114px">
                <p
                  class="nf-mb-0 nf-mt-0 nf-leading-normal"
                  style="block-size: 18px; cursor: pointer; display: block; font-size: 12px; height: 18px; inline-size: 114px; line-height: 18px; margin-block: 0px; margin-bottom: 0px; margin-top: 0px; perspective-origin: 57px 9px; text-align: center; text-transform: uppercase; transform-origin: 57px 9px; width: 114px"
                >
                  Necklaces
                </p>
              </div>
            </a>
          </div>
        </div>

        <div
          class="md:nf-snap-center nf-flex nf-justify-center nf-flex-none nf-w-[114px] max-[640px]:nf-w-[80px]"
          style="block-size: 160px; display: flex; flex-shrink: 0; height: 160px; inline-size: 114px; justify-content: center; min-block-size: auto; min-height: auto; min-inline-size: auto; min-width: auto; perspective-origin: 57px 80px; transform-origin: 57px 80px; width: 114px"
        >
          <div class="nf-flex nf-w-full" style="block-size: 160px; display: flex; height: 160px; inline-size: 114px; min-block-size: auto; min-height: auto; min-inline-size: auto; min-width: auto; perspective-origin: 57px 80px; transform-origin: 57px 80px; width: 114px">
            <a
              href="/collections/charms"
              class="nf-no-underline gradient color-scheme-1"
              style="background-attachment: fixed; background-color: rgb(255, 255, 255); block-size: 160px; cursor: pointer; display: block; height: 160px; inline-size: 114px; min-block-size: auto; min-height: auto; min-inline-size: auto; min-width: auto; perspective-origin: 57px 80px; transform-origin: 57px 80px; width: 114px"
            >
              <div class="nf-w-[114px] nf-h-[114px] max-[640px]:nf-w-[80px] max-[640px]:nf-h-[80px] nf-mb-[1rem]" style="block-size: 114px; cursor: pointer; display: block; height: 114px; inline-size: 114px; margin-block-end: 10px; margin-bottom: 10px; perspective-origin: 57px 57px; transform-origin: 57px 57px; width: 114px">
                <div
                  class="nf-rounded-full nf-overflow-hidden nf-object-cover nf-aspect-[1/1] nf-aspect-w-1 nf-aspect-h-1"
                  style="
                    block-size: 114px;
                    border-radius: 9999px;
                    border-end-end-radius: 9999px;
                    border-end-start-radius: 9999px;
                    border-start-end-radius: 9999px;
                    border-start-start-radius: 9999px;
                    inset: 0px;
                    cursor: pointer;
                    display: block;
                    height: 114px;
                    inline-size: 114px;
                    inset-block: 0px;
                    inset-inline: 0px;
                    object-fit: cover;
                    overflow: hidden;
                    padding-block-end: 114px;
                    padding-bottom: 114px;
                    perspective-origin: 57px 57px;
                    position: relative;
                    transform-origin: 57px 57px;
                    width: 114px;
                  "
                >
                  <img
                    src="//www.isabelbernard.com/cdn/shop/files/col-charms.webp?v=1716820380&amp;width=160"
                    alt="Charms"
                    srcset="//www.isabelbernard.com/cdn/shop/files/col-charms.webp?v=1716820380&amp;width=160 160w"
                    width="160"
                    height="160"
                    loading="eager"
                    class="nf-w-full nf-h-full nf-object-cover nf-aspect-[1/1]"
                    style="block-size: 114px; inset: 0px; cursor: pointer; height: 114px; inline-size: 114px; inset-block: 0px; inset-inline: 0px; min-block-size: 0px; min-height: 0px; min-inline-size: 0px; min-width: 0px; object-fit: cover; perspective-origin: 57px 57px; position: absolute; transform-origin: 57px 57px; width: 114px"
                  />
                </div>
              </div>

              <div class="nf-w-[114px] max-[640px]:nf-w-[80px] nf-text-center nf-text-[1.2rem]" style="block-size: 18px; cursor: pointer; display: block; font-size: 12px; height: 18px; inline-size: 114px; line-height: 21.6px; perspective-origin: 57px 9px; text-align: center; transform-origin: 57px 9px; width: 114px">
                <p
                  class="nf-mb-0 nf-mt-0 nf-leading-normal"
                  style="block-size: 18px; cursor: pointer; display: block; font-size: 12px; height: 18px; inline-size: 114px; line-height: 18px; margin-block: 0px; margin-bottom: 0px; margin-top: 0px; perspective-origin: 57px 9px; text-align: center; text-transform: uppercase; transform-origin: 57px 9px; width: 114px"
                >
                  Charms
                </p>
              </div>
            </a>
          </div>
        </div>

        <div
          class="md:nf-snap-center nf-flex nf-justify-center nf-flex-none nf-w-[114px] max-[640px]:nf-w-[80px]"
          style="block-size: 160px; display: flex; flex-shrink: 0; height: 160px; inline-size: 114px; justify-content: center; min-block-size: auto; min-height: auto; min-inline-size: auto; min-width: auto; perspective-origin: 57px 80px; transform-origin: 57px 80px; width: 114px"
        >
          <div class="nf-flex nf-w-full" style="block-size: 160px; display: flex; height: 160px; inline-size: 114px; min-block-size: auto; min-height: auto; min-inline-size: auto; min-width: auto; perspective-origin: 57px 80px; transform-origin: 57px 80px; width: 114px">
            <a
              href="/collections/white-gold-jewellery"
              class="nf-no-underline gradient color-scheme-1"
              style="background-attachment: fixed; background-color: rgb(255, 255, 255); block-size: 160px; cursor: pointer; display: block; height: 160px; inline-size: 114px; min-block-size: auto; min-height: auto; min-inline-size: auto; min-width: auto; perspective-origin: 57px 80px; transform-origin: 57px 80px; width: 114px"
            >
              <div class="nf-w-[114px] nf-h-[114px] max-[640px]:nf-w-[80px] max-[640px]:nf-h-[80px] nf-mb-[1rem]" style="block-size: 114px; cursor: pointer; display: block; height: 114px; inline-size: 114px; margin-block-end: 10px; margin-bottom: 10px; perspective-origin: 57px 57px; transform-origin: 57px 57px; width: 114px">
                <div
                  class="nf-rounded-full nf-overflow-hidden nf-object-cover nf-aspect-[1/1] nf-aspect-w-1 nf-aspect-h-1"
                  style="
                    block-size: 114px;
                    border-radius: 9999px;
                    border-end-end-radius: 9999px;
                    border-end-start-radius: 9999px;
                    border-start-end-radius: 9999px;
                    border-start-start-radius: 9999px;
                    inset: 0px;
                    cursor: pointer;
                    display: block;
                    height: 114px;
                    inline-size: 114px;
                    inset-block: 0px;
                    inset-inline: 0px;
                    object-fit: cover;
                    overflow: hidden;
                    padding-block-end: 114px;
                    padding-bottom: 114px;
                    perspective-origin: 57px 57px;
                    position: relative;
                    transform-origin: 57px 57px;
                    width: 114px;
                  "
                >
                  <img
                    src="//www.isabelbernard.com/cdn/shop/files/col-white-gold.webp?v=1716820483&amp;width=160"
                    alt="White Gold Jewellery"
                    srcset="//www.isabelbernard.com/cdn/shop/files/col-white-gold.webp?v=1716820483&amp;width=160 160w"
                    width="160"
                    height="160"
                    loading="eager"
                    class="nf-w-full nf-h-full nf-object-cover nf-aspect-[1/1]"
                    style="block-size: 114px; inset: 0px; cursor: pointer; height: 114px; inline-size: 114px; inset-block: 0px; inset-inline: 0px; min-block-size: 0px; min-height: 0px; min-inline-size: 0px; min-width: 0px; object-fit: cover; perspective-origin: 57px 57px; position: absolute; transform-origin: 57px 57px; width: 114px"
                  />
                </div>
              </div>

              <div class="nf-w-[114px] max-[640px]:nf-w-[80px] nf-text-center nf-text-[1.2rem]" style="block-size: 36px; cursor: pointer; display: block; font-size: 12px; height: 36px; inline-size: 114px; line-height: 21.6px; perspective-origin: 57px 18px; text-align: center; transform-origin: 57px 18px; width: 114px">
                <p
                  class="nf-mb-0 nf-mt-0 nf-leading-normal"
                  style="block-size: 36px; cursor: pointer; display: block; font-size: 12px; height: 36px; inline-size: 114px; line-height: 18px; margin-block: 0px; margin-bottom: 0px; margin-top: 0px; perspective-origin: 57px 18px; text-align: center; text-transform: uppercase; transform-origin: 57px 18px; width: 114px"
                >
                  White Gold Jewellery
                </p>
              </div>
            </a>
          </div>
        </div>

        <div
          class="md:nf-snap-center nf-flex nf-justify-center nf-flex-none nf-w-[114px] max-[640px]:nf-w-[80px]"
          style="block-size: 160px; display: flex; flex-shrink: 0; height: 160px; inline-size: 114px; justify-content: center; min-block-size: auto; min-height: auto; min-inline-size: auto; min-width: auto; perspective-origin: 57px 80px; transform-origin: 57px 80px; width: 114px"
        >
          <div class="nf-flex nf-w-full" style="block-size: 160px; display: flex; height: 160px; inline-size: 114px; min-block-size: auto; min-height: auto; min-inline-size: auto; min-width: auto; perspective-origin: 57px 80px; transform-origin: 57px 80px; width: 114px">
            <a
              href="/collections/rose-gold-jewellery"
              class="nf-no-underline gradient color-scheme-1"
              style="background-attachment: fixed; background-color: rgb(255, 255, 255); block-size: 160px; cursor: pointer; display: block; height: 160px; inline-size: 114px; min-block-size: auto; min-height: auto; min-inline-size: auto; min-width: auto; perspective-origin: 57px 80px; transform-origin: 57px 80px; width: 114px"
            >
              <div class="nf-w-[114px] nf-h-[114px] max-[640px]:nf-w-[80px] max-[640px]:nf-h-[80px] nf-mb-[1rem]" style="block-size: 114px; cursor: pointer; display: block; height: 114px; inline-size: 114px; margin-block-end: 10px; margin-bottom: 10px; perspective-origin: 57px 57px; transform-origin: 57px 57px; width: 114px">
                <div
                  class="nf-rounded-full nf-overflow-hidden nf-object-cover nf-aspect-[1/1] nf-aspect-w-1 nf-aspect-h-1"
                  style="
                    block-size: 114px;
                    border-radius: 9999px;
                    border-end-end-radius: 9999px;
                    border-end-start-radius: 9999px;
                    border-start-end-radius: 9999px;
                    border-start-start-radius: 9999px;
                    inset: 0px;
                    cursor: pointer;
                    display: block;
                    height: 114px;
                    inline-size: 114px;
                    inset-block: 0px;
                    inset-inline: 0px;
                    object-fit: cover;
                    overflow: hidden;
                    padding-block-end: 114px;
                    padding-bottom: 114px;
                    perspective-origin: 57px 57px;
                    position: relative;
                    transform-origin: 57px 57px;
                    width: 114px;
                  "
                >
                  <img
                    src="//www.isabelbernard.com/cdn/shop/files/col-rose-gold.webp?v=1716820510&amp;width=160"
                    alt="Rose Gold Jewellery"
                    srcset="//www.isabelbernard.com/cdn/shop/files/col-rose-gold.webp?v=1716820510&amp;width=160 160w"
                    width="160"
                    height="160"
                    loading="eager"
                    class="nf-w-full nf-h-full nf-object-cover nf-aspect-[1/1]"
                    style="block-size: 114px; inset: 0px; cursor: pointer; height: 114px; inline-size: 114px; inset-block: 0px; inset-inline: 0px; min-block-size: 0px; min-height: 0px; min-inline-size: 0px; min-width: 0px; object-fit: cover; perspective-origin: 57px 57px; position: absolute; transform-origin: 57px 57px; width: 114px"
                  />
                </div>
              </div>

              <div class="nf-w-[114px] max-[640px]:nf-w-[80px] nf-text-center nf-text-[1.2rem]" style="block-size: 36px; cursor: pointer; display: block; font-size: 12px; height: 36px; inline-size: 114px; line-height: 21.6px; perspective-origin: 57px 18px; text-align: center; transform-origin: 57px 18px; width: 114px">
                <p
                  class="nf-mb-0 nf-mt-0 nf-leading-normal"
                  style="block-size: 36px; cursor: pointer; display: block; font-size: 12px; height: 36px; inline-size: 114px; line-height: 18px; margin-block: 0px; margin-bottom: 0px; margin-top: 0px; perspective-origin: 57px 18px; text-align: center; text-transform: uppercase; transform-origin: 57px 18px; width: 114px"
                >
                  Rose Gold Jewellery
                </p>
              </div>
            </a>
          </div>
        </div>

        <div
          class="md:nf-snap-center nf-flex nf-justify-center nf-flex-none nf-w-[114px] max-[640px]:nf-w-[80px]"
          style="block-size: 160px; display: flex; flex-shrink: 0; height: 160px; inline-size: 114px; justify-content: center; min-block-size: auto; min-height: auto; min-inline-size: auto; min-width: auto; perspective-origin: 57px 80px; transform-origin: 57px 80px; width: 114px"
        >
          <div class="nf-flex nf-w-full" style="block-size: 160px; display: flex; height: 160px; inline-size: 114px; min-block-size: auto; min-height: auto; min-inline-size: auto; min-width: auto; perspective-origin: 57px 80px; transform-origin: 57px 80px; width: 114px">
            <a
              href="/collections/initials"
              class="nf-no-underline gradient color-scheme-1"
              style="background-attachment: fixed; background-color: rgb(255, 255, 255); block-size: 160px; cursor: pointer; display: block; height: 160px; inline-size: 114px; min-block-size: auto; min-height: auto; min-inline-size: auto; min-width: auto; perspective-origin: 57px 80px; transform-origin: 57px 80px; width: 114px"
            >
              <div class="nf-w-[114px] nf-h-[114px] max-[640px]:nf-w-[80px] max-[640px]:nf-h-[80px] nf-mb-[1rem]" style="block-size: 114px; cursor: pointer; display: block; height: 114px; inline-size: 114px; margin-block-end: 10px; margin-bottom: 10px; perspective-origin: 57px 57px; transform-origin: 57px 57px; width: 114px">
                <div
                  class="nf-rounded-full nf-overflow-hidden nf-object-cover nf-aspect-[1/1] nf-aspect-w-1 nf-aspect-h-1"
                  style="
                    block-size: 114px;
                    border-radius: 9999px;
                    border-end-end-radius: 9999px;
                    border-end-start-radius: 9999px;
                    border-start-end-radius: 9999px;
                    border-start-start-radius: 9999px;
                    inset: 0px;
                    cursor: pointer;
                    display: block;
                    height: 114px;
                    inline-size: 114px;
                    inset-block: 0px;
                    inset-inline: 0px;
                    object-fit: cover;
                    overflow: hidden;
                    padding-block-end: 114px;
                    padding-bottom: 114px;
                    perspective-origin: 57px 57px;
                    position: relative;
                    transform-origin: 57px 57px;
                    width: 114px;
                  "
                >
                  <img
                    src="//www.isabelbernard.com/cdn/shop/files/col-initials.webp?v=1716820553&amp;width=160"
                    alt="Initials"
                    srcset="//www.isabelbernard.com/cdn/shop/files/col-initials.webp?v=1716820553&amp;width=160 160w"
                    width="160"
                    height="160"
                    loading="eager"
                    class="nf-w-full nf-h-full nf-object-cover nf-aspect-[1/1]"
                    style="block-size: 114px; inset: 0px; cursor: pointer; height: 114px; inline-size: 114px; inset-block: 0px; inset-inline: 0px; min-block-size: 0px; min-height: 0px; min-inline-size: 0px; min-width: 0px; object-fit: cover; perspective-origin: 57px 57px; position: absolute; transform-origin: 57px 57px; width: 114px"
                  />
                </div>
              </div>

              <div class="nf-w-[114px] max-[640px]:nf-w-[80px] nf-text-center nf-text-[1.2rem]" style="block-size: 18px; cursor: pointer; display: block; font-size: 12px; height: 18px; inline-size: 114px; line-height: 21.6px; perspective-origin: 57px 9px; text-align: center; transform-origin: 57px 9px; width: 114px">
                <p
                  class="nf-mb-0 nf-mt-0 nf-leading-normal"
                  style="block-size: 18px; cursor: pointer; display: block; font-size: 12px; height: 18px; inline-size: 114px; line-height: 18px; margin-block: 0px; margin-bottom: 0px; margin-top: 0px; perspective-origin: 57px 9px; text-align: center; text-transform: uppercase; transform-origin: 57px 9px; width: 114px"
                >
                  Initials
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>` },
  { filename: "navigation no role", content: `<div class="nav">
  <ul>
    <li>
      <a href="#main-content">Skip to main content</a>
    </li>
    <li>
      <a href="#footer">Skip to footer</a>
    </li>
  </ul>
</div>` },
  { filename: "nested nav element with divs", content: `<style>
  .navigation {
    display: flex;
    width: 80%;
    border: 1px red solid;
  }

  a {
    padding: 12px;
  }

  a::before {
    content: "a ";
  }

  div {
    border: 1px black solid;
    padding: 8px;
  }

  div::before {
    content: "div";
  }

  *::before {
    font-weight: bold;
  }
</style>

<div id="test-subject">
  <h2>My site</h2>
  <div class="navigation">
    <div>
      <a href="#home">Home</a>
    </div>
    <div>
      <a href="#about">About</a>
      <div>
        <div>
          <a href="#team">Our Team</a>
          <div>
            <a href="#leadership">Leadership</a>
            <a href="#staff">Staff</a>
          </div>
        </div>
        <a href="#history">History</a>
        <a href="#mission">Mission</a>
      </div>
    </div>
    <div>
      <a href="#services">Services</a>
      <div>
        <a href="#consulting">Consulting</a>
        <div>
          <a href="#development">Development</a>
          <div>
            <a href="#webdev">Web Development</a>
            <a href="#appdev">App Development</a>
          </div>
        </div>
        <a href="#support">Support</a>
      </div>
    </div>
    <div>
      <a href="#contact">Contact</a>
    </div>
  </div>
</div>` },
  { filename: "nested nav element with lists", content: `<style>
  #test-subject {
    width: fit-content;
  }
</style>

<div>
  <h2>My site</h2>
  <div id="test-subject">
    <ul>
      <li><a href="#home">Home</a></li>
      <li>
        <a href="#about">About</a>
        <ul>
          <li>
            <a href="#team">Our Team</a>
            <ul>
              <li><a href="#leadership">Leadership</a></li>
              <li><a href="#staff">Staff</a></li>
            </ul>
          </li>
          <li><a href="#history">History</a></li>
          <li><a href="#mission">Mission</a></li>
        </ul>
      </li>
      <li>
        <a href="#services">Services</a>
        <ul>
          <li><a href="#consulting">Consulting</a></li>
          <li>
            <a href="#development">Development</a>
            <ul>
              <li><a href="#webdev">Web Development</a></li>
              <li><a href="#appdev">App Development</a></li>
            </ul>
          </li>
          <li><a href="#support">Support</a></li>
        </ul>
      </li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </div>
</div>` },
  { filename: "partner co il main nav", content: `<style>
  [data-id="0"]::before {
    content: "";
    cursor: pointer;
    font-family: icomoon;
    -webkit-font-smoothing: antialiased;
  }

  [data-id="1"]::before {
    content: "";
    cursor: default;
    font-family: icomoon;
    font-size: 20px;
    line-height: 20px;
    perspective-origin: 0px 0px;
    text-align: center;
    transform-origin: 0px 0px;
    -webkit-font-smoothing: antialiased;
  }

  [data-id="2"]::before {
    border-block-end-color: rgb(255, 255, 255);
    border-block-start-color: rgb(255, 255, 255);
    border-bottom-color: rgb(255, 255, 255);
    border-inline-end-color: rgb(255, 255, 255);
    border-inline-start-color: rgb(255, 255, 255);
    border-left-color: rgb(255, 255, 255);
    border-right-color: rgb(255, 255, 255);
    border-top-color: rgb(255, 255, 255);
    caret-color: rgb(255, 255, 255);
    color: rgb(255, 255, 255);
    column-rule-color: rgb(255, 255, 255);
    content: "";
    cursor: pointer;
    font-family: icomoon;
    font-size: 18px;
    line-height: 18px;
    outline-color: rgb(255, 255, 255);
    perspective-origin: 0px 0px;
    text-decoration: none solid rgb(255, 255, 255);
    text-decoration-color: rgb(255, 255, 255);
    text-emphasis-color: rgb(255, 255, 255);
    transform-origin: 0px 0px;
    -webkit-font-smoothing: antialiased;
    -webkit-text-fill-color: rgb(255, 255, 255);
    -webkit-text-stroke-color: rgb(255, 255, 255);
  }

  [data-id="3"]::after {
    border-block-end-color: rgb(255, 255, 255);
    border-block-start-color: rgb(255, 255, 255);
    border-bottom-color: rgb(255, 255, 255);
    border-inline-end-color: rgb(255, 255, 255);
    border-inline-start-color: rgb(255, 255, 255);
    border-left-color: rgb(255, 255, 255);
    border-right-color: rgb(255, 255, 255);
    border-top-color: rgb(255, 255, 255);
    caret-color: rgb(255, 255, 255);
    color: rgb(255, 255, 255);
    column-rule-color: rgb(255, 255, 255);
    content: "";
    cursor: pointer;
    font-family: icomoon;
    font-size: 17px;
    line-height: 17px;
    margin-inline-start: auto;
    margin-right: auto;
    outline-color: rgb(255, 255, 255);
    text-decoration: none solid rgb(255, 255, 255);
    text-decoration-color: rgb(255, 255, 255);
    text-emphasis-color: rgb(255, 255, 255);
    white-space-collapse: break-spaces;
    -webkit-text-fill-color: rgb(255, 255, 255);
    -webkit-text-stroke-color: rgb(255, 255, 255);
  }

  [data-id="4"]::after {
    block-size: 20px;
    content: "";
    cursor: pointer;
    display: block;
    font-family: icomoon;
    font-size: 20px;
    height: 20px;
    inline-size: 20px;
    line-height: 20px;
    list-style-type: none;
    min-block-size: auto;
    min-height: auto;
    min-inline-size: auto;
    min-width: auto;
    perspective-origin: 10px 10px;
    text-align: right;
    transform-origin: 10px 10px;
    transition-duration: 0.2s;
    transition-property: transform;
    transition-timing-function: ease-in-out;
    width: 20px;
  }

  [data-id="5"]::after {
    block-size: 20px;
    content: "";
    cursor: pointer;
    display: block;
    font-family: icomoon;
    font-size: 20px;
    height: 20px;
    inline-size: 20px;
    line-height: 20px;
    list-style-type: none;
    min-block-size: auto;
    min-height: auto;
    min-inline-size: auto;
    min-width: auto;
    perspective-origin: 10px 10px;
    text-align: right;
    transform-origin: 10px 10px;
    transition-duration: 0.2s;
    transition-property: transform;
    transition-timing-function: ease-in-out;
    width: 20px;
  }

  [data-id="6"]::after {
    block-size: 20px;
    content: "";
    cursor: pointer;
    display: block;
    font-family: icomoon;
    font-size: 20px;
    height: 20px;
    inline-size: 20px;
    line-height: 20px;
    list-style-type: none;
    min-block-size: auto;
    min-height: auto;
    min-inline-size: auto;
    min-width: auto;
    perspective-origin: 10px 10px;
    text-align: right;
    transform-origin: 10px 10px;
    transition-duration: 0.2s;
    transition-property: transform;
    transition-timing-function: ease-in-out;
    width: 20px;
  }

  [data-id="7"]::after {
    block-size: 20px;
    content: "";
    cursor: pointer;
    display: block;
    font-family: icomoon;
    font-size: 20px;
    height: 20px;
    inline-size: 20px;
    line-height: 20px;
    list-style-type: none;
    min-block-size: auto;
    min-height: auto;
    min-inline-size: auto;
    min-width: auto;
    perspective-origin: 10px 10px;
    text-align: right;
    transform-origin: 10px 10px;
    transition-duration: 0.2s;
    transition-property: transform;
    transition-timing-function: ease-in-out;
    width: 20px;
  }

  [data-id="8"]::after {
    block-size: 20px;
    content: "";
    cursor: pointer;
    display: block;
    font-family: icomoon;
    font-size: 20px;
    height: 20px;
    inline-size: 20px;
    line-height: 20px;
    list-style-type: none;
    min-block-size: auto;
    min-height: auto;
    min-inline-size: auto;
    min-width: auto;
    perspective-origin: 10px 10px;
    text-align: right;
    transform-origin: 10px 10px;
    transition-duration: 0.2s;
    transition-property: transform;
    transition-timing-function: ease-in-out;
    width: 20px;
  }

  [data-id="9"]::after {
    block-size: 20px;
    content: "";
    cursor: pointer;
    display: block;
    font-family: icomoon;
    font-size: 20px;
    height: 20px;
    inline-size: 20px;
    line-height: 20px;
    list-style-type: none;
    min-block-size: auto;
    min-height: auto;
    min-inline-size: auto;
    min-width: auto;
    perspective-origin: 10px 10px;
    text-align: right;
    transform-origin: 10px 10px;
    transition-duration: 0.2s;
    transition-property: transform;
    transition-timing-function: ease-in-out;
    width: 20px;
  }
</style>
<header _ngcontent-ng-c3112934927="" class="ng-star-inserted" style="background-color: rgb(255, 255, 255); block-size: 140px; box-shadow: rgba(31, 161, 148, 0.1) 0px 4px 21px 0px; height: 140px; inset-block-start: 0px; perspective-origin: 960px 70px; position: sticky; top: 0px; transform-origin: 960px 70px; z-index: 99999">
  <cookie-message _ngcontent-ng-c3112934927="" _nghost-ng-c3228337720="">
    <div
      _ngcontent-ng-c3228337720=""
      class="cookie-message ng-star-inserted"
      style="align-items: center; background-color: rgb(255, 255, 255); inset: 611px 0px 0px; box-shadow: rgba(0, 0, 0, 0.1) 0px -10px 30px 0px; display: flex; inset-block: 611px 0px; inset-inline: 0px; justify-content: center; opacity: 0; overflow: hidden; position: fixed; transition: height ease-in-out 0.8s, opacity 0.8s ease-in-out; z-index: -1"
    >
      <div
        _ngcontent-ng-c3228337720=""
        class="message"
        style="
          block-size: 78px;
          font-size: 20px;
          height: 78px;
          inline-size: 1229px;
          line-height: normal;
          margin-inline-end: 32px;
          margin-left: 32px;
          min-block-size: auto;
          min-height: auto;
          min-inline-size: auto;
          min-width: auto;
          padding-block: 12px;
          padding-bottom: 12px;
          padding-top: 12px;
          perspective-origin: 614.5px 39px;
          transform-origin: 614.5px 39px;
          width: 1229px;
        "
      >
        <p _ngcontent-ng-c3228337720="" style="block-size: 54px; font-size: 20px; height: 54px; inline-size: 1229px; line-height: normal; perspective-origin: 614.5px 27px; transform-origin: 614.5px 27px; width: 1229px"></p>
        <p style="block-size: 54px; font-size: 20px; height: 54px; inline-size: 1229px; line-height: normal; perspective-origin: 614.5px 27px; transform-origin: 614.5px 27px; width: 1229px">
          לידיעתך, אנו משתמשים באתר זה בעוגיות (Cookies) בכדי לספק לך חווית גלישה טובה יותר, וכן למטרות תפעול, סטטיסטיקה ושיווק. למידע נוסף ולמדיניות הפרטיות המעודכנת
          <a rel="noopener" href="https://www.partner.co.il/u/privacy_policy" target="_blank" title="לחץ כאן" style="cursor: pointer; font-size: 20px; line-height: normal; text-decoration: underline solid rgb(0, 0, 0); -webkit-text-decorations-in-effect: underline">לחץ כאן</a>.
        </p>
      </div>
      <button
        _ngcontent-ng-c3228337720=""
        class="close-btn brand-btn btn-style-2"
        style="
          background-color: rgb(44, 213, 196);
          block-size: 38px;
          border-block-style: none;
          border-block-width: 0px;
          border-radius: 53px;
          border-style: none;
          border-width: 0px;
          border-end-end-radius: 53px;
          border-end-start-radius: 53px;
          border-inline-style: none;
          border-inline-width: 0px;
          border-start-end-radius: 53px;
          border-start-start-radius: 53px;
          display: block;
          font-family: simpler-regular-webfont, Arial, sans-serif;
          font-size: 20px;
          height: 38px;
          inline-size: 167.453px;
          min-block-size: auto;
          min-height: auto;
          min-inline-size: auto;
          min-width: auto;
          padding-inline: 60px;
          padding-left: 60px;
          padding-right: 60px;
          perspective-origin: 83.7188px 19px;
          transform-origin: 83.7266px 19px;
          transition-duration: 0.1s;
          transition-timing-function: linear;
          vertical-align: middle;
          width: 167.453px;
        "
      >
        סגירה
      </button>
    </div>
    <!----><!----> </cookie-message
  ><domains-mini-header _ngcontent-ng-c3112934927="" _nghost-ng-c1776931116="" class="ng-star-inserted">
    <div
      _ngcontent-ng-c1776931116=""
      class="header-above-header ng-star-inserted"
      style="background-image: linear-gradient(90deg, rgb(159, 243, 234) 1.51%, rgb(225, 255, 252) 71.59%, rgb(255, 255, 255) 113.63%); block-size: 40px; display: flex; height: 40px; padding-inline-start: 60px; padding-right: 60px; perspective-origin: 960px 20px; transform-origin: 960px 20px"
    >
      <a
        _ngcontent-ng-c1776931116=""
        class="link-item selected ng-star-inserted"
        style="
          align-items: center;
          block-size: 40px;
          border-block-end: 2px solid rgb(44, 213, 196);
          border-block-start-color: rgb(44, 213, 196);
          border-color: rgb(44, 213, 196);
          border-bottom-style: solid;
          border-bottom-width: 2px;
          border-inline-color: rgb(44, 213, 196);
          caret-color: rgb(44, 213, 196);
          color: rgb(44, 213, 196);
          column-rule-color: rgb(44, 213, 196);
          cursor: pointer;
          display: flex;
          height: 40px;
          inline-size: 62px;
          justify-content: center;
          min-block-size: auto;
          min-height: auto;
          min-inline-size: 62px;
          min-width: 62px;
          outline-color: rgb(44, 213, 196);
          padding-inline: 8px;
          padding-left: 8px;
          padding-right: 8px;
          perspective-origin: 31px 20px;
          text-decoration: none solid rgb(44, 213, 196);
          text-emphasis-color: rgb(44, 213, 196);
          transform-origin: 31px 20px;
          transition-duration: 0.3s;
          transition-timing-function: ease-in-out;
          width: 62px;
          -webkit-text-fill-color: rgb(44, 213, 196);
          -webkit-text-stroke-color: rgb(44, 213, 196);
        "
        >פרטי</a
      ><a
        _ngcontent-ng-c1776931116=""
        class="link-item ng-star-inserted"
        style="
          align-items: center;
          block-size: 40px;
          border-block-end: 2px solid rgba(0, 0, 0, 0);
          border-bottom: 2px solid rgba(0, 0, 0, 0);
          cursor: pointer;
          display: flex;
          height: 40px;
          inline-size: 62px;
          justify-content: center;
          min-block-size: auto;
          min-height: auto;
          min-inline-size: 62px;
          min-width: 62px;
          padding-inline: 8px;
          padding-left: 8px;
          padding-right: 8px;
          perspective-origin: 31px 20px;
          transform-origin: 31px 20px;
          transition-duration: 0.3s;
          transition-timing-function: ease-in-out;
          width: 62px;
        "
        >עסקי</a
      ><a
        _ngcontent-ng-c1776931116=""
        class="link-item ng-star-inserted"
        style="
          align-items: center;
          block-size: 40px;
          border-block-end: 2px solid rgba(0, 0, 0, 0);
          border-bottom: 2px solid rgba(0, 0, 0, 0);
          cursor: pointer;
          display: flex;
          height: 40px;
          inline-size: 62px;
          justify-content: center;
          min-block-size: auto;
          min-height: auto;
          min-inline-size: 62px;
          min-width: 62px;
          padding-inline: 8px;
          padding-left: 8px;
          padding-right: 8px;
          perspective-origin: 31px 20px;
          transform-origin: 31px 20px;
          transition-duration: 0.3s;
          transition-timing-function: ease-in-out;
          width: 62px;
        "
        >חנות</a
      ><a
        _ngcontent-ng-c1776931116=""
        class="link-item ng-star-inserted"
        style="
          align-items: center;
          block-size: 40px;
          border-block-end: 2px solid rgba(0, 0, 0, 0);
          border-bottom: 2px solid rgba(0, 0, 0, 0);
          cursor: pointer;
          display: flex;
          height: 40px;
          inline-size: 62px;
          justify-content: center;
          min-block-size: auto;
          min-height: auto;
          min-inline-size: 62px;
          min-width: 62px;
          padding-inline: 8px;
          padding-left: 8px;
          padding-right: 8px;
          perspective-origin: 31px 20px;
          transform-origin: 31px 20px;
          transition-duration: 0.3s;
          transition-timing-function: ease-in-out;
          width: 62px;
        "
        >קריירה</a
      ><!---->
    </div>
    <!----><!----><!----> </domains-mini-header
  ><!----><!---->
  <div _ngcontent-ng-c3112934927="" class="header-content" style="align-items: center; block-size: 100px; display: flex; height: 100px; padding-block: 31px; padding-bottom: 31px; padding-top: 31px; perspective-origin: 960px 50px; transform-origin: 960px 50px">
    <div
      _ngcontent-ng-c3112934927=""
      class="links-wrapper ng-star-inserted"
      style="
        align-items: center;
        block-size: 38px;
        display: flex;
        height: 38px;
        inline-size: 632.297px;
        margin-inline-start: 248.453px;
        margin-right: 248.453px;
        min-block-size: auto;
        min-height: auto;
        min-inline-size: auto;
        min-width: auto;
        order: 2;
        padding-inline-end: 40px;
        padding-left: 40px;
        perspective-origin: 316.141px 19px;
        transform-origin: 316.148px 19px;
        width: 632.297px;
      "
    >
      <a _ngcontent-ng-c3112934927="" class="he-btn-menu icon-hamburger-menu ng-star-inserted" data-id="0" style="cursor: pointer; display: none; font-family: icomoon; perspective-origin: 50% 50%; transform-origin: 50% 50%; -webkit-font-smoothing: antialiased"></a
      ><!----><button
        _ngcontent-ng-c3112934927=""
        id="INDmenu-partner-btn"
        accesskey="m"
        aria-labelledby="INDbtnTooltip"
        class="btn-accessibility ng-star-inserted"
        style="
          align-items: center;
          background-color: rgb(255, 255, 255);
          block-size: 38px;
          border-block-color: rgba(0, 0, 0, 0);
          border-color: rgba(0, 0, 0, 0);
          border-radius: 50%;
          border-end-end-radius: 50%;
          border-end-start-radius: 50%;
          border-inline-color: rgba(0, 0, 0, 0);
          border-start-end-radius: 50%;
          border-start-start-radius: 50%;
          box-shadow: rgba(0, 0, 0, 0.2) 0px 3.33px 8.32px 0px;
          display: flex;
          height: 38px;
          inline-size: 38px;
          justify-content: center;
          margin-inline-end: 16px;
          margin-left: 16px;
          min-block-size: auto;
          min-height: auto;
          min-inline-size: auto;
          min-width: auto;
          perspective-origin: 19px 19px;
          transform-origin: 19px 19px;
          width: 38px;
        "
      >
        <span
          _ngcontent-ng-c3112934927=""
          class="icon-acces"
          data-id="1"
          style="
            background-color: rgb(255, 255, 255);
            block-size: 20px;
            inset: 80px 1298.44px 511px 605.031px;
            cursor: default;
            display: block;
            font-family: icomoon;
            font-size: 20px;
            height: 20px;
            inline-size: 16.5312px;
            inset-block: 80px 511px;
            inset-inline: 1298.44px 605.031px;
            line-height: 20px;
            perspective-origin: 8.26562px 10px;
            position: fixed;
            text-align: center;
            transform-origin: 8.26562px 10px;
            width: 16.5312px;
            -webkit-font-smoothing: antialiased;
          "
        ></span></button
      ><!---->
      <div
        _ngcontent-ng-c3112934927=""
        class="user-container ng-star-inserted"
        style="
          align-items: center;
          background-color: rgb(35, 38, 42);
          block-size: 38px;
          border-block-color: rgb(255, 255, 255);
          border-color: rgb(255, 255, 255);
          border-radius: 50px;
          border-end-end-radius: 50px;
          border-end-start-radius: 50px;
          border-inline-color: rgb(255, 255, 255);
          border-start-end-radius: 50px;
          border-start-start-radius: 50px;
          inset: 0px;
          box-shadow: rgba(0, 0, 0, 0.2) 0px 3.3px 8.3px 0px;
          caret-color: rgb(255, 255, 255);
          color: rgb(255, 255, 255);
          column-rule-color: rgb(255, 255, 255);
          height: 38px;
          inline-size: 194.047px;
          inset-block: 0px;
          inset-inline: 0px;
          margin-inline-end: 15px;
          margin-left: 15px;
          min-block-size: auto;
          min-height: auto;
          min-inline-size: auto;
          min-width: auto;
          outline-color: rgb(255, 255, 255);
          perspective-origin: 97.0156px 19px;
          position: relative;
          text-decoration: none solid rgb(255, 255, 255);
          text-emphasis-color: rgb(255, 255, 255);
          transform-origin: 97.0234px 19px;
          width: 194.047px;
          -webkit-text-fill-color: rgb(255, 255, 255);
          -webkit-text-stroke-color: rgb(255, 255, 255);
        "
      >
        <div
          _ngcontent-ng-c3112934927=""
          class="btn-user"
          style="
            align-items: center;
            block-size: 38px;
            border-block-color: rgb(255, 255, 255);
            border-color: rgb(255, 255, 255);
            border-inline-color: rgb(255, 255, 255);
            caret-color: rgb(255, 255, 255);
            color: rgb(255, 255, 255);
            column-rule-color: rgb(255, 255, 255);
            cursor: pointer;
            display: flex;
            font-size: 17px;
            height: 38px;
            inline-size: 194.047px;
            line-height: 17px;
            min-block-size: 38px;
            min-height: 38px;
            outline-color: rgb(255, 255, 255);
            padding-inline: 22px;
            padding-left: 22px;
            padding-right: 22px;
            perspective-origin: 97.0156px 19px;
            text-decoration: none solid rgb(255, 255, 255);
            text-emphasis-color: rgb(255, 255, 255);
            transform-origin: 97.0234px 19px;
            width: 194.047px;
            -webkit-text-fill-color: rgb(255, 255, 255);
            -webkit-text-stroke-color: rgb(255, 255, 255);
          "
        >
          <span
            _ngcontent-ng-c3112934927=""
            class="icon-personal"
            data-id="2"
            style="
              block-size: 18px;
              border-block-color: rgb(255, 255, 255);
              border-color: rgb(255, 255, 255);
              border-inline-color: rgb(255, 255, 255);
              caret-color: rgb(255, 255, 255);
              color: rgb(255, 255, 255);
              column-rule-color: rgb(255, 255, 255);
              cursor: pointer;
              display: block;
              font-family: icomoon;
              font-size: 18px;
              height: 18px;
              inline-size: 17.1094px;
              line-height: 18px;
              margin-inline-end: 5px;
              margin-left: 5px;
              min-block-size: auto;
              min-height: auto;
              min-inline-size: auto;
              min-width: auto;
              outline-color: rgb(255, 255, 255);
              perspective-origin: 8.54688px 9px;
              text-decoration: none solid rgb(255, 255, 255);
              text-emphasis-color: rgb(255, 255, 255);
              transform-origin: 8.55469px 9px;
              width: 17.1094px;
              -webkit-font-smoothing: antialiased;
              -webkit-text-fill-color: rgb(255, 255, 255);
              -webkit-text-stroke-color: rgb(255, 255, 255);
            "
          ></span
          ><a
            _ngcontent-ng-c3112934927=""
            href="https://www.partner.co.il/n/login/"
            class="btn-user-text"
            style="
              block-size: 17px;
              border-block-color: rgb(255, 255, 255);
              border-color: rgb(255, 255, 255);
              border-inline-color: rgb(255, 255, 255);
              caret-color: rgb(255, 255, 255);
              color: rgb(255, 255, 255);
              column-rule-color: rgb(255, 255, 255);
              cursor: pointer;
              display: block;
              font-size: 17px;
              height: 17px;
              inline-size: 127.938px;
              line-height: 17px;
              min-block-size: auto;
              min-height: auto;
              min-inline-size: auto;
              min-width: auto;
              outline-color: rgb(255, 255, 255);
              perspective-origin: 63.9688px 8.5px;
              text-decoration: none solid rgb(255, 255, 255);
              text-emphasis-color: rgb(255, 255, 255);
              transform-origin: 63.9688px 8.5px;
              width: 127.938px;
              -webkit-text-fill-color: rgb(255, 255, 255);
              -webkit-text-stroke-color: rgb(255, 255, 255);
            "
            >כניסה לאזור האישי</a
          ><span
            _ngcontent-ng-c3112934927=""
            class="user-login-text"
            data-id="3"
            style="
              border-block-color: rgb(255, 255, 255);
              border-color: rgb(255, 255, 255);
              border-inline-color: rgb(255, 255, 255);
              caret-color: rgb(255, 255, 255);
              color: rgb(255, 255, 255);
              column-rule-color: rgb(255, 255, 255);
              cursor: pointer;
              display: none;
              font-size: 17px;
              line-height: 17px;
              min-inline-size: 157px;
              min-width: 157px;
              outline-color: rgb(255, 255, 255);
              perspective-origin: 50% 50%;
              text-decoration: none solid rgb(255, 255, 255);
              text-emphasis-color: rgb(255, 255, 255);
              transform-origin: 50% 50%;
              white-space-collapse: break-spaces;
              -webkit-text-fill-color: rgb(255, 255, 255);
              -webkit-text-stroke-color: rgb(255, 255, 255);
            "
            >היי,
            <span
              _ngcontent-ng-c3112934927=""
              style="
                border-block-color: rgb(255, 255, 255);
                border-color: rgb(255, 255, 255);
                border-inline-color: rgb(255, 255, 255);
                caret-color: rgb(255, 255, 255);
                color: rgb(255, 255, 255);
                column-rule-color: rgb(255, 255, 255);
                cursor: pointer;
                font-size: 17px;
                line-height: 17px;
                outline-color: rgb(255, 255, 255);
                perspective-origin: 50% 50%;
                text-decoration: none solid rgb(255, 255, 255);
                text-emphasis-color: rgb(255, 255, 255);
                transform-origin: 50% 50%;
                white-space-collapse: break-spaces;
                -webkit-text-fill-color: rgb(255, 255, 255);
                -webkit-text-stroke-color: rgb(255, 255, 255);
              "
            ></span
          ></span>
        </div>
        <!---->
      </div>
      <!----><button
        _ngcontent-ng-c3112934927=""
        class="btn-join ng-star-inserted"
        style="
          align-items: center;
          background-color: rgb(46, 213, 196);
          block-size: 38px;
          border-block-style: none;
          border-block-width: 0px;
          border-radius: 50px;
          border-style: none;
          border-width: 0px;
          border-end-end-radius: 50px;
          border-end-start-radius: 50px;
          border-inline-style: none;
          border-inline-width: 0px;
          border-start-end-radius: 50px;
          border-start-start-radius: 50px;
          box-shadow: rgba(46, 213, 196, 0.5) 0px 3.3px 11.6px 0px;
          cursor: pointer;
          display: flex;
          font-size: 16px;
          height: 38px;
          inline-size: 117.25px;
          min-block-size: 38px;
          min-height: 38px;
          min-inline-size: auto;
          min-width: auto;
          padding-block: 4px;
          padding: 4px 26px;
          padding-inline: 26px;
          perspective-origin: 58.625px 19px;
          transform-origin: 58.625px 19px;
          width: 117.25px;
        "
      >
        להצטרפות</button
      ><!----><a
        _ngcontent-ng-c3112934927=""
        class="logo"
        href="https://www.partner.co.il/"
        target="_blank"
        style="
          block-size: 35px;
          border-block-color: rgb(0, 0, 238);
          border-color: rgb(0, 0, 238);
          border-inline-color: rgb(0, 0, 238);
          caret-color: rgb(0, 0, 238);
          color: rgb(0, 0, 238);
          column-rule-color: rgb(0, 0, 238);
          cursor: pointer;
          display: block;
          height: 35px;
          inline-size: 165px;
          margin-inline-start: 47px;
          margin-right: 47px;
          min-block-size: auto;
          min-height: auto;
          min-inline-size: auto;
          min-width: auto;
          outline-color: rgb(0, 0, 238);
          perspective-origin: 82.5px 17.5px;
          text-decoration: none solid rgb(0, 0, 238);
          text-emphasis-color: rgb(0, 0, 238);
          transform-origin: 82.5px 17.5px;
          width: 165px;
          -webkit-text-fill-color: rgb(0, 0, 238);
          -webkit-text-stroke-color: rgb(0, 0, 238);
        "
        ><img
          _ngcontent-ng-c3112934927=""
          alt=""
          src="./media/axwlqja5/logo-partner.png"
          style="
            block-size: 32px;
            border-block-color: rgb(0, 0, 238);
            border-color: rgb(0, 0, 238);
            border-inline-color: rgb(0, 0, 238);
            caret-color: rgb(0, 0, 238);
            color: rgb(0, 0, 238);
            column-rule-color: rgb(0, 0, 238);
            cursor: pointer;
            height: 32px;
            inline-size: 165px;
            outline-color: rgb(0, 0, 238);
            perspective-origin: 82.5px 16px;
            text-decoration: none solid rgb(0, 0, 238);
            text-emphasis-color: rgb(0, 0, 238);
            transform-origin: 82.5px 16px;
            width: 165px;
            -webkit-text-fill-color: rgb(0, 0, 238);
            -webkit-text-stroke-color: rgb(0, 0, 238);
          "
      /></a>
    </div>
    <!----><!---->
    <div
      _ngcontent-ng-c3112934927=""
      id="test-subject"
      class="menu-wrapper ng-star-inserted"
      style="
        align-items: center;
        background-color: rgb(255, 255, 255);
        block-size: 20px;
        display: flex;
        height: 20px;
        inline-size: 1039.17px;
        min-block-size: auto;
        min-height: auto;
        min-inline-size: auto;
        min-width: auto;
        order: 1;
        padding-inline-start: 60px;
        padding-right: 60px;
        perspective-origin: 519.578px 10px;
        transform-origin: 519.586px 10px;
        width: 1039.17px;
      "
    >
      <ul
        _ngcontent-ng-c3112934927=""
        class="menu"
        style="
          block-size: 20px;
          display: flex;
          height: 20px;
          inline-size: 979.172px;
          list-style-position: outside;
          list-style-type: none;
          min-block-size: auto;
          min-height: auto;
          min-inline-size: auto;
          min-width: auto;
          perspective-origin: 489.578px 10px;
          transform-origin: 489.586px 10px;
          transition-duration: 0.6s;
          transition-property: width;
          width: 979.172px;
        "
      >
        <li
          _ngcontent-ng-c3112934927=""
          class="menu-item ng-star-inserted"
          style="block-size: 20px; inset: 0px; height: 20px; inline-size: 165.047px; inset-block: 0px; inset-inline: 0px; list-style-type: none; min-block-size: auto; min-height: auto; min-inline-size: auto; min-width: auto; perspective-origin: 82.5156px 10px; position: relative; transform-origin: 82.5234px 10px; width: 165.047px"
        >
          <!----><a
            _ngcontent-ng-c3112934927=""
            href="javascript:void(0);"
            class="tab-link arrow-link ng-star-inserted"
            data-id="4"
            style="block-size: 20px; cursor: pointer; display: flex; font-size: 20px; height: 20px; inline-size: 165.047px; justify-content: space-between; line-height: 20px; list-style-type: none; padding-inline-end: 28px; padding-left: 28px; perspective-origin: 82.5156px 10px; text-align: right; transform-origin: 82.5234px 10px; width: 165.047px"
            >אינטרנט סיבים</a
          ><!---->
          <div
            _ngcontent-ng-c3112934927=""
            class="tab-content ng-star-inserted"
            style="
              background-color: rgb(255, 255, 255);
              block-size: auto;
              border-bottom-left-radius: 14px;
              border-bottom-right-radius: 14px;
              border-end-end-radius: 14px;
              border-end-start-radius: 14px;
              box-shadow: rgba(29, 137, 137, 0.06) 17px 14px 25px 0px, rgba(32, 156, 144, 0.08) -18px 16px 30px 0px, rgba(31, 161, 148, 0.1) 0px 4px 21px 0px inset;
              display: none;
              flex-wrap: wrap;
              height: auto;
              inline-size: 643px;
              inset-block-start: 59.5px;
              list-style-type: none;
              padding-block: 40px 20px;
              padding: 40px 51px 20px;
              padding-inline: 51px;
              perspective-origin: 50% 50%;
              position: absolute;
              text-align: right;
              top: 59.5px;
              transform-origin: 50% 50%;
              width: 643px;
            "
          >
            <a
              _ngcontent-ng-c3112934927=""
              class="content-box sub-link ng-star-inserted"
              href="https://www.partner.co.il/n/offers/lobby"
              style="
                border-block-color: rgb(0, 0, 238);
                border-color: rgb(0, 0, 238);
                border-inline-color: rgb(0, 0, 238);
                caret-color: rgb(0, 0, 238);
                color: rgb(0, 0, 238);
                column-rule-color: rgb(0, 0, 238);
                cursor: pointer;
                display: block;
                inline-size: 89px;
                list-style-type: none;
                margin-block-end: 22px;
                margin-bottom: 22px;
                margin-inline: 4%;
                margin-left: 4%;
                margin-right: 4%;
                outline-color: rgb(0, 0, 238);
                perspective-origin: 50% 50%;
                text-align: center;
                text-decoration: none solid rgb(0, 0, 238);
                text-emphasis-color: rgb(0, 0, 238);
                transform-origin: 50% 50%;
                width: 89px;
                -webkit-text-fill-color: rgb(0, 0, 238);
                -webkit-text-stroke-color: rgb(0, 0, 238);
              "
            >
              <div
                _ngcontent-ng-c3112934927=""
                class="image"
                style="
                  align-items: center;
                  block-size: 81px;
                  border-block-color: rgb(0, 0, 238);
                  border-color: rgb(0, 0, 238);
                  border-radius: 12px;
                  border-end-end-radius: 12px;
                  border-end-start-radius: 12px;
                  border-inline-color: rgb(0, 0, 238);
                  border-start-end-radius: 12px;
                  border-start-start-radius: 12px;
                  box-shadow: rgba(3, 69, 168, 0.08) 0px 4.352px 14.144px 0px;
                  caret-color: rgb(0, 0, 238);
                  color: rgb(0, 0, 238);
                  column-rule-color: rgb(0, 0, 238);
                  cursor: pointer;
                  display: flex;
                  height: 81px;
                  inline-size: 100%;
                  justify-content: center;
                  list-style-type: none;
                  outline-color: rgb(0, 0, 238);
                  perspective-origin: 50% 50%;
                  text-align: center;
                  text-decoration: none solid rgb(0, 0, 238);
                  text-emphasis-color: rgb(0, 0, 238);
                  transform-origin: 50% 50%;
                  width: 100%;
                  -webkit-text-fill-color: rgb(0, 0, 238);
                  -webkit-text-stroke-color: rgb(0, 0, 238);
                "
              >
                <img
                  _ngcontent-ng-c3112934927=""
                  src="./media/5wlkymlo/הצטרפות.png"
                  style="
                    block-size: auto;
                    border-block-color: rgb(0, 0, 238);
                    border-color: rgb(0, 0, 238);
                    border-inline-color: rgb(0, 0, 238);
                    caret-color: rgb(0, 0, 238);
                    color: rgb(0, 0, 238);
                    column-rule-color: rgb(0, 0, 238);
                    cursor: pointer;
                    display: block;
                    height: auto;
                    inline-size: auto;
                    list-style-type: none;
                    outline-color: rgb(0, 0, 238);
                    perspective-origin: 50% 50%;
                    text-align: center;
                    text-decoration: none solid rgb(0, 0, 238);
                    text-emphasis-color: rgb(0, 0, 238);
                    transform-origin: 50% 50%;
                    width: auto;
                    -webkit-text-fill-color: rgb(0, 0, 238);
                    -webkit-text-stroke-color: rgb(0, 0, 238);
                  "
                />
              </div>
              <span _ngcontent-ng-c3112934927="" class="sub-link-text" style="cursor: pointer; display: inline-block; font-size: 15px; line-height: 15px; list-style-type: none; margin-block-start: 8px; margin-top: 8px; perspective-origin: 50% 50%; text-align: center; transform-origin: 50% 50%">Partner Fiber הצטרפות אונליין</span> </a
            ><a
              _ngcontent-ng-c3112934927=""
              class="content-box sub-link ng-star-inserted"
              href="https://www.partner.co.il/u/internet_apps"
              style="
                border-block-color: rgb(0, 0, 238);
                border-color: rgb(0, 0, 238);
                border-inline-color: rgb(0, 0, 238);
                caret-color: rgb(0, 0, 238);
                color: rgb(0, 0, 238);
                column-rule-color: rgb(0, 0, 238);
                cursor: pointer;
                display: block;
                inline-size: 89px;
                list-style-type: none;
                margin-block-end: 22px;
                margin-bottom: 22px;
                margin-inline: 4%;
                margin-left: 4%;
                margin-right: 4%;
                outline-color: rgb(0, 0, 238);
                perspective-origin: 50% 50%;
                text-align: center;
                text-decoration: none solid rgb(0, 0, 238);
                text-emphasis-color: rgb(0, 0, 238);
                transform-origin: 50% 50%;
                width: 89px;
                -webkit-text-fill-color: rgb(0, 0, 238);
                -webkit-text-stroke-color: rgb(0, 0, 238);
              "
            >
              <div
                _ngcontent-ng-c3112934927=""
                class="image"
                style="
                  align-items: center;
                  block-size: 81px;
                  border-block-color: rgb(0, 0, 238);
                  border-color: rgb(0, 0, 238);
                  border-radius: 12px;
                  border-end-end-radius: 12px;
                  border-end-start-radius: 12px;
                  border-inline-color: rgb(0, 0, 238);
                  border-start-end-radius: 12px;
                  border-start-start-radius: 12px;
                  box-shadow: rgba(3, 69, 168, 0.08) 0px 4.352px 14.144px 0px;
                  caret-color: rgb(0, 0, 238);
                  color: rgb(0, 0, 238);
                  column-rule-color: rgb(0, 0, 238);
                  cursor: pointer;
                  display: flex;
                  height: 81px;
                  inline-size: 100%;
                  justify-content: center;
                  list-style-type: none;
                  outline-color: rgb(0, 0, 238);
                  perspective-origin: 50% 50%;
                  text-align: center;
                  text-decoration: none solid rgb(0, 0, 238);
                  text-emphasis-color: rgb(0, 0, 238);
                  transform-origin: 50% 50%;
                  width: 100%;
                  -webkit-text-fill-color: rgb(0, 0, 238);
                  -webkit-text-stroke-color: rgb(0, 0, 238);
                "
              >
                <img
                  _ngcontent-ng-c3112934927=""
                  src="./media/ua4jzo5r/שירותים-ותוכן.png"
                  style="
                    block-size: auto;
                    border-block-color: rgb(0, 0, 238);
                    border-color: rgb(0, 0, 238);
                    border-inline-color: rgb(0, 0, 238);
                    caret-color: rgb(0, 0, 238);
                    color: rgb(0, 0, 238);
                    column-rule-color: rgb(0, 0, 238);
                    cursor: pointer;
                    display: block;
                    height: auto;
                    inline-size: auto;
                    list-style-type: none;
                    outline-color: rgb(0, 0, 238);
                    perspective-origin: 50% 50%;
                    text-align: center;
                    text-decoration: none solid rgb(0, 0, 238);
                    text-emphasis-color: rgb(0, 0, 238);
                    transform-origin: 50% 50%;
                    width: auto;
                    -webkit-text-fill-color: rgb(0, 0, 238);
                    -webkit-text-stroke-color: rgb(0, 0, 238);
                  "
                />
              </div>
              <span _ngcontent-ng-c3112934927="" class="sub-link-text" style="cursor: pointer; display: inline-block; font-size: 15px; line-height: 15px; list-style-type: none; margin-block-start: 8px; margin-top: 8px; perspective-origin: 50% 50%; text-align: center; transform-origin: 50% 50%">שירותים ותוכן</span> </a
            ><a
              _ngcontent-ng-c3112934927=""
              class="content-box sub-link ng-star-inserted"
              href="https://www.partner.co.il/u/mesh"
              style="
                border-block-color: rgb(0, 0, 238);
                border-color: rgb(0, 0, 238);
                border-inline-color: rgb(0, 0, 238);
                caret-color: rgb(0, 0, 238);
                color: rgb(0, 0, 238);
                column-rule-color: rgb(0, 0, 238);
                cursor: pointer;
                display: block;
                inline-size: 89px;
                list-style-type: none;
                margin-block-end: 22px;
                margin-bottom: 22px;
                margin-inline: 4%;
                margin-left: 4%;
                margin-right: 4%;
                outline-color: rgb(0, 0, 238);
                perspective-origin: 50% 50%;
                text-align: center;
                text-decoration: none solid rgb(0, 0, 238);
                text-emphasis-color: rgb(0, 0, 238);
                transform-origin: 50% 50%;
                width: 89px;
                -webkit-text-fill-color: rgb(0, 0, 238);
                -webkit-text-stroke-color: rgb(0, 0, 238);
              "
            >
              <div
                _ngcontent-ng-c3112934927=""
                class="image"
                style="
                  align-items: center;
                  block-size: 81px;
                  border-block-color: rgb(0, 0, 238);
                  border-color: rgb(0, 0, 238);
                  border-radius: 12px;
                  border-end-end-radius: 12px;
                  border-end-start-radius: 12px;
                  border-inline-color: rgb(0, 0, 238);
                  border-start-end-radius: 12px;
                  border-start-start-radius: 12px;
                  box-shadow: rgba(3, 69, 168, 0.08) 0px 4.352px 14.144px 0px;
                  caret-color: rgb(0, 0, 238);
                  color: rgb(0, 0, 238);
                  column-rule-color: rgb(0, 0, 238);
                  cursor: pointer;
                  display: flex;
                  height: 81px;
                  inline-size: 100%;
                  justify-content: center;
                  list-style-type: none;
                  outline-color: rgb(0, 0, 238);
                  perspective-origin: 50% 50%;
                  text-align: center;
                  text-decoration: none solid rgb(0, 0, 238);
                  text-emphasis-color: rgb(0, 0, 238);
                  transform-origin: 50% 50%;
                  width: 100%;
                  -webkit-text-fill-color: rgb(0, 0, 238);
                  -webkit-text-stroke-color: rgb(0, 0, 238);
                "
              >
                <img
                  _ngcontent-ng-c3112934927=""
                  src="./media/voqk3vmi/מגדיל.png"
                  style="
                    block-size: auto;
                    border-block-color: rgb(0, 0, 238);
                    border-color: rgb(0, 0, 238);
                    border-inline-color: rgb(0, 0, 238);
                    caret-color: rgb(0, 0, 238);
                    color: rgb(0, 0, 238);
                    column-rule-color: rgb(0, 0, 238);
                    cursor: pointer;
                    display: block;
                    height: auto;
                    inline-size: auto;
                    list-style-type: none;
                    outline-color: rgb(0, 0, 238);
                    perspective-origin: 50% 50%;
                    text-align: center;
                    text-decoration: none solid rgb(0, 0, 238);
                    text-emphasis-color: rgb(0, 0, 238);
                    transform-origin: 50% 50%;
                    width: auto;
                    -webkit-text-fill-color: rgb(0, 0, 238);
                    -webkit-text-stroke-color: rgb(0, 0, 238);
                  "
                />
              </div>
              <span _ngcontent-ng-c3112934927="" class="sub-link-text" style="cursor: pointer; display: inline-block; font-size: 15px; line-height: 15px; list-style-type: none; margin-block-start: 8px; margin-top: 8px; perspective-origin: 50% 50%; text-align: center; transform-origin: 50% 50%">מגדיל טווח Future Wi-Fi</span> </a
            ><a
              _ngcontent-ng-c3112934927=""
              class="content-box sub-link ng-star-inserted"
              href="https://www.partner.co.il/u/routers"
              style="
                border-block-color: rgb(0, 0, 238);
                border-color: rgb(0, 0, 238);
                border-inline-color: rgb(0, 0, 238);
                caret-color: rgb(0, 0, 238);
                color: rgb(0, 0, 238);
                column-rule-color: rgb(0, 0, 238);
                cursor: pointer;
                display: block;
                inline-size: 89px;
                list-style-type: none;
                margin-block-end: 22px;
                margin-bottom: 22px;
                margin-inline: 4%;
                margin-left: 4%;
                margin-right: 4%;
                outline-color: rgb(0, 0, 238);
                perspective-origin: 50% 50%;
                text-align: center;
                text-decoration: none solid rgb(0, 0, 238);
                text-emphasis-color: rgb(0, 0, 238);
                transform-origin: 50% 50%;
                width: 89px;
                -webkit-text-fill-color: rgb(0, 0, 238);
                -webkit-text-stroke-color: rgb(0, 0, 238);
              "
            >
              <div
                _ngcontent-ng-c3112934927=""
                class="image"
                style="
                  align-items: center;
                  block-size: 81px;
                  border-block-color: rgb(0, 0, 238);
                  border-color: rgb(0, 0, 238);
                  border-radius: 12px;
                  border-end-end-radius: 12px;
                  border-end-start-radius: 12px;
                  border-inline-color: rgb(0, 0, 238);
                  border-start-end-radius: 12px;
                  border-start-start-radius: 12px;
                  box-shadow: rgba(3, 69, 168, 0.08) 0px 4.352px 14.144px 0px;
                  caret-color: rgb(0, 0, 238);
                  color: rgb(0, 0, 238);
                  column-rule-color: rgb(0, 0, 238);
                  cursor: pointer;
                  display: flex;
                  height: 81px;
                  inline-size: 100%;
                  justify-content: center;
                  list-style-type: none;
                  outline-color: rgb(0, 0, 238);
                  perspective-origin: 50% 50%;
                  text-align: center;
                  text-decoration: none solid rgb(0, 0, 238);
                  text-emphasis-color: rgb(0, 0, 238);
                  transform-origin: 50% 50%;
                  width: 100%;
                  -webkit-text-fill-color: rgb(0, 0, 238);
                  -webkit-text-stroke-color: rgb(0, 0, 238);
                "
              >
                <img
                  _ngcontent-ng-c3112934927=""
                  src="./media/3qzh52lf/ציוד-קצה.png"
                  style="
                    block-size: auto;
                    border-block-color: rgb(0, 0, 238);
                    border-color: rgb(0, 0, 238);
                    border-inline-color: rgb(0, 0, 238);
                    caret-color: rgb(0, 0, 238);
                    color: rgb(0, 0, 238);
                    column-rule-color: rgb(0, 0, 238);
                    cursor: pointer;
                    display: block;
                    height: auto;
                    inline-size: auto;
                    list-style-type: none;
                    outline-color: rgb(0, 0, 238);
                    perspective-origin: 50% 50%;
                    text-align: center;
                    text-decoration: none solid rgb(0, 0, 238);
                    text-emphasis-color: rgb(0, 0, 238);
                    transform-origin: 50% 50%;
                    width: auto;
                    -webkit-text-fill-color: rgb(0, 0, 238);
                    -webkit-text-stroke-color: rgb(0, 0, 238);
                  "
                />
              </div>
              <span _ngcontent-ng-c3112934927="" class="sub-link-text" style="cursor: pointer; display: inline-block; font-size: 15px; line-height: 15px; list-style-type: none; margin-block-start: 8px; margin-top: 8px; perspective-origin: 50% 50%; text-align: center; transform-origin: 50% 50%">ציוד קצה לאינטרנט</span> </a
            ><a
              _ngcontent-ng-c3112934927=""
              class="content-box sub-link ng-star-inserted"
              href="https://www.partner.co.il/globalassets/global/speedcheck/index.html"
              style="
                border-block-color: rgb(0, 0, 238);
                border-color: rgb(0, 0, 238);
                border-inline-color: rgb(0, 0, 238);
                caret-color: rgb(0, 0, 238);
                color: rgb(0, 0, 238);
                column-rule-color: rgb(0, 0, 238);
                cursor: pointer;
                display: block;
                inline-size: 89px;
                list-style-type: none;
                margin-block-end: 22px;
                margin-bottom: 22px;
                margin-inline: 4%;
                margin-left: 4%;
                margin-right: 4%;
                outline-color: rgb(0, 0, 238);
                perspective-origin: 50% 50%;
                text-align: center;
                text-decoration: none solid rgb(0, 0, 238);
                text-emphasis-color: rgb(0, 0, 238);
                transform-origin: 50% 50%;
                width: 89px;
                -webkit-text-fill-color: rgb(0, 0, 238);
                -webkit-text-stroke-color: rgb(0, 0, 238);
              "
            >
              <div
                _ngcontent-ng-c3112934927=""
                class="image"
                style="
                  align-items: center;
                  block-size: 81px;
                  border-block-color: rgb(0, 0, 238);
                  border-color: rgb(0, 0, 238);
                  border-radius: 12px;
                  border-end-end-radius: 12px;
                  border-end-start-radius: 12px;
                  border-inline-color: rgb(0, 0, 238);
                  border-start-end-radius: 12px;
                  border-start-start-radius: 12px;
                  box-shadow: rgba(3, 69, 168, 0.08) 0px 4.352px 14.144px 0px;
                  caret-color: rgb(0, 0, 238);
                  color: rgb(0, 0, 238);
                  column-rule-color: rgb(0, 0, 238);
                  cursor: pointer;
                  display: flex;
                  height: 81px;
                  inline-size: 100%;
                  justify-content: center;
                  list-style-type: none;
                  outline-color: rgb(0, 0, 238);
                  perspective-origin: 50% 50%;
                  text-align: center;
                  text-decoration: none solid rgb(0, 0, 238);
                  text-emphasis-color: rgb(0, 0, 238);
                  transform-origin: 50% 50%;
                  width: 100%;
                  -webkit-text-fill-color: rgb(0, 0, 238);
                  -webkit-text-stroke-color: rgb(0, 0, 238);
                "
              >
                <img
                  _ngcontent-ng-c3112934927=""
                  src="./media/5yvbijlc/בדיקת-מהירות.png"
                  style="
                    block-size: auto;
                    border-block-color: rgb(0, 0, 238);
                    border-color: rgb(0, 0, 238);
                    border-inline-color: rgb(0, 0, 238);
                    caret-color: rgb(0, 0, 238);
                    color: rgb(0, 0, 238);
                    column-rule-color: rgb(0, 0, 238);
                    cursor: pointer;
                    display: block;
                    height: auto;
                    inline-size: auto;
                    list-style-type: none;
                    outline-color: rgb(0, 0, 238);
                    perspective-origin: 50% 50%;
                    text-align: center;
                    text-decoration: none solid rgb(0, 0, 238);
                    text-emphasis-color: rgb(0, 0, 238);
                    transform-origin: 50% 50%;
                    width: auto;
                    -webkit-text-fill-color: rgb(0, 0, 238);
                    -webkit-text-stroke-color: rgb(0, 0, 238);
                  "
                />
              </div>
              <span _ngcontent-ng-c3112934927="" class="sub-link-text" style="cursor: pointer; display: inline-block; font-size: 15px; line-height: 15px; list-style-type: none; margin-block-start: 8px; margin-top: 8px; perspective-origin: 50% 50%; text-align: center; transform-origin: 50% 50%">בדיקת מהירות</span> </a
            ><a
              _ngcontent-ng-c3112934927=""
              class="content-box sub-link ng-star-inserted"
              href="https://www.partner.co.il/u/cyberguard-campaign"
              style="
                border-block-color: rgb(0, 0, 238);
                border-color: rgb(0, 0, 238);
                border-inline-color: rgb(0, 0, 238);
                caret-color: rgb(0, 0, 238);
                color: rgb(0, 0, 238);
                column-rule-color: rgb(0, 0, 238);
                cursor: pointer;
                display: block;
                inline-size: 89px;
                list-style-type: none;
                margin-block-end: 22px;
                margin-bottom: 22px;
                margin-inline: 4%;
                margin-left: 4%;
                margin-right: 4%;
                outline-color: rgb(0, 0, 238);
                perspective-origin: 50% 50%;
                text-align: center;
                text-decoration: none solid rgb(0, 0, 238);
                text-emphasis-color: rgb(0, 0, 238);
                transform-origin: 50% 50%;
                width: 89px;
                -webkit-text-fill-color: rgb(0, 0, 238);
                -webkit-text-stroke-color: rgb(0, 0, 238);
              "
            >
              <div
                _ngcontent-ng-c3112934927=""
                class="image"
                style="
                  align-items: center;
                  block-size: 81px;
                  border-block-color: rgb(0, 0, 238);
                  border-color: rgb(0, 0, 238);
                  border-radius: 12px;
                  border-end-end-radius: 12px;
                  border-end-start-radius: 12px;
                  border-inline-color: rgb(0, 0, 238);
                  border-start-end-radius: 12px;
                  border-start-start-radius: 12px;
                  box-shadow: rgba(3, 69, 168, 0.08) 0px 4.352px 14.144px 0px;
                  caret-color: rgb(0, 0, 238);
                  color: rgb(0, 0, 238);
                  column-rule-color: rgb(0, 0, 238);
                  cursor: pointer;
                  display: flex;
                  height: 81px;
                  inline-size: 100%;
                  justify-content: center;
                  list-style-type: none;
                  outline-color: rgb(0, 0, 238);
                  perspective-origin: 50% 50%;
                  text-align: center;
                  text-decoration: none solid rgb(0, 0, 238);
                  text-emphasis-color: rgb(0, 0, 238);
                  transform-origin: 50% 50%;
                  width: 100%;
                  -webkit-text-fill-color: rgb(0, 0, 238);
                  -webkit-text-stroke-color: rgb(0, 0, 238);
                "
              >
                <img
                  _ngcontent-ng-c3112934927=""
                  src="./media/cc5dqyjv/group-260863290000.svg"
                  style="
                    block-size: auto;
                    border-block-color: rgb(0, 0, 238);
                    border-color: rgb(0, 0, 238);
                    border-inline-color: rgb(0, 0, 238);
                    caret-color: rgb(0, 0, 238);
                    color: rgb(0, 0, 238);
                    column-rule-color: rgb(0, 0, 238);
                    cursor: pointer;
                    display: block;
                    height: auto;
                    inline-size: auto;
                    list-style-type: none;
                    outline-color: rgb(0, 0, 238);
                    perspective-origin: 50% 50%;
                    text-align: center;
                    text-decoration: none solid rgb(0, 0, 238);
                    text-emphasis-color: rgb(0, 0, 238);
                    transform-origin: 50% 50%;
                    width: auto;
                    -webkit-text-fill-color: rgb(0, 0, 238);
                    -webkit-text-stroke-color: rgb(0, 0, 238);
                  "
                />
              </div>
              <span _ngcontent-ng-c3112934927="" class="sub-link-text" style="cursor: pointer; display: inline-block; font-size: 15px; line-height: 15px; list-style-type: none; margin-block-start: 8px; margin-top: 8px; perspective-origin: 50% 50%; text-align: center; transform-origin: 50% 50%">Fiber Guard</span> </a
            ><a
              _ngcontent-ng-c3112934927=""
              class="content-box sub-link ng-star-inserted"
              href="https://www.partner.co.il/u/norton"
              style="
                border-block-color: rgb(0, 0, 238);
                border-color: rgb(0, 0, 238);
                border-inline-color: rgb(0, 0, 238);
                caret-color: rgb(0, 0, 238);
                color: rgb(0, 0, 238);
                column-rule-color: rgb(0, 0, 238);
                cursor: pointer;
                display: block;
                inline-size: 89px;
                list-style-type: none;
                margin-block-end: 22px;
                margin-bottom: 22px;
                margin-inline: 4%;
                margin-left: 4%;
                margin-right: 4%;
                outline-color: rgb(0, 0, 238);
                perspective-origin: 50% 50%;
                text-align: center;
                text-decoration: none solid rgb(0, 0, 238);
                text-emphasis-color: rgb(0, 0, 238);
                transform-origin: 50% 50%;
                width: 89px;
                -webkit-text-fill-color: rgb(0, 0, 238);
                -webkit-text-stroke-color: rgb(0, 0, 238);
              "
            >
              <div
                _ngcontent-ng-c3112934927=""
                class="image"
                style="
                  align-items: center;
                  block-size: 81px;
                  border-block-color: rgb(0, 0, 238);
                  border-color: rgb(0, 0, 238);
                  border-radius: 12px;
                  border-end-end-radius: 12px;
                  border-end-start-radius: 12px;
                  border-inline-color: rgb(0, 0, 238);
                  border-start-end-radius: 12px;
                  border-start-start-radius: 12px;
                  box-shadow: rgba(3, 69, 168, 0.08) 0px 4.352px 14.144px 0px;
                  caret-color: rgb(0, 0, 238);
                  color: rgb(0, 0, 238);
                  column-rule-color: rgb(0, 0, 238);
                  cursor: pointer;
                  display: flex;
                  height: 81px;
                  inline-size: 100%;
                  justify-content: center;
                  list-style-type: none;
                  outline-color: rgb(0, 0, 238);
                  perspective-origin: 50% 50%;
                  text-align: center;
                  text-decoration: none solid rgb(0, 0, 238);
                  text-emphasis-color: rgb(0, 0, 238);
                  transform-origin: 50% 50%;
                  width: 100%;
                  -webkit-text-fill-color: rgb(0, 0, 238);
                  -webkit-text-stroke-color: rgb(0, 0, 238);
                "
              >
                <img
                  _ngcontent-ng-c3112934927=""
                  src="./media/yv5pai30/אייקון-נורטון.png"
                  style="
                    block-size: auto;
                    border-block-color: rgb(0, 0, 238);
                    border-color: rgb(0, 0, 238);
                    border-inline-color: rgb(0, 0, 238);
                    caret-color: rgb(0, 0, 238);
                    color: rgb(0, 0, 238);
                    column-rule-color: rgb(0, 0, 238);
                    cursor: pointer;
                    display: block;
                    height: auto;
                    inline-size: auto;
                    list-style-type: none;
                    outline-color: rgb(0, 0, 238);
                    perspective-origin: 50% 50%;
                    text-align: center;
                    text-decoration: none solid rgb(0, 0, 238);
                    text-emphasis-color: rgb(0, 0, 238);
                    transform-origin: 50% 50%;
                    width: auto;
                    -webkit-text-fill-color: rgb(0, 0, 238);
                    -webkit-text-stroke-color: rgb(0, 0, 238);
                  "
                />
              </div>
              <span _ngcontent-ng-c3112934927="" class="sub-link-text" style="cursor: pointer; display: inline-block; font-size: 15px; line-height: 15px; list-style-type: none; margin-block-start: 8px; margin-top: 8px; perspective-origin: 50% 50%; text-align: center; transform-origin: 50% 50%">Norton Security</span> </a
            ><a
              _ngcontent-ng-c3112934927=""
              class="content-box sub-link ng-star-inserted"
              href="https://www.partner.co.il/u/fiber-gaming-campaign"
              style="
                border-block-color: rgb(0, 0, 238);
                border-color: rgb(0, 0, 238);
                border-inline-color: rgb(0, 0, 238);
                caret-color: rgb(0, 0, 238);
                color: rgb(0, 0, 238);
                column-rule-color: rgb(0, 0, 238);
                cursor: pointer;
                display: block;
                inline-size: 89px;
                list-style-type: none;
                margin-block-end: 22px;
                margin-bottom: 22px;
                margin-inline: 4%;
                margin-left: 4%;
                margin-right: 4%;
                outline-color: rgb(0, 0, 238);
                perspective-origin: 50% 50%;
                text-align: center;
                text-decoration: none solid rgb(0, 0, 238);
                text-emphasis-color: rgb(0, 0, 238);
                transform-origin: 50% 50%;
                width: 89px;
                -webkit-text-fill-color: rgb(0, 0, 238);
                -webkit-text-stroke-color: rgb(0, 0, 238);
              "
            >
              <div
                _ngcontent-ng-c3112934927=""
                class="image"
                style="
                  align-items: center;
                  block-size: 81px;
                  border-block-color: rgb(0, 0, 238);
                  border-color: rgb(0, 0, 238);
                  border-radius: 12px;
                  border-end-end-radius: 12px;
                  border-end-start-radius: 12px;
                  border-inline-color: rgb(0, 0, 238);
                  border-start-end-radius: 12px;
                  border-start-start-radius: 12px;
                  box-shadow: rgba(3, 69, 168, 0.08) 0px 4.352px 14.144px 0px;
                  caret-color: rgb(0, 0, 238);
                  color: rgb(0, 0, 238);
                  column-rule-color: rgb(0, 0, 238);
                  cursor: pointer;
                  display: flex;
                  height: 81px;
                  inline-size: 100%;
                  justify-content: center;
                  list-style-type: none;
                  outline-color: rgb(0, 0, 238);
                  perspective-origin: 50% 50%;
                  text-align: center;
                  text-decoration: none solid rgb(0, 0, 238);
                  text-emphasis-color: rgb(0, 0, 238);
                  transform-origin: 50% 50%;
                  width: 100%;
                  -webkit-text-fill-color: rgb(0, 0, 238);
                  -webkit-text-stroke-color: rgb(0, 0, 238);
                "
              >
                <img
                  _ngcontent-ng-c3112934927=""
                  src="./media/g5flaljj/גיימינג.png"
                  style="
                    block-size: auto;
                    border-block-color: rgb(0, 0, 238);
                    border-color: rgb(0, 0, 238);
                    border-inline-color: rgb(0, 0, 238);
                    caret-color: rgb(0, 0, 238);
                    color: rgb(0, 0, 238);
                    column-rule-color: rgb(0, 0, 238);
                    cursor: pointer;
                    display: block;
                    height: auto;
                    inline-size: auto;
                    list-style-type: none;
                    outline-color: rgb(0, 0, 238);
                    perspective-origin: 50% 50%;
                    text-align: center;
                    text-decoration: none solid rgb(0, 0, 238);
                    text-emphasis-color: rgb(0, 0, 238);
                    transform-origin: 50% 50%;
                    width: auto;
                    -webkit-text-fill-color: rgb(0, 0, 238);
                    -webkit-text-stroke-color: rgb(0, 0, 238);
                  "
                />
              </div>
              <span _ngcontent-ng-c3112934927="" class="sub-link-text" style="cursor: pointer; display: inline-block; font-size: 15px; line-height: 15px; list-style-type: none; margin-block-start: 8px; margin-top: 8px; perspective-origin: 50% 50%; text-align: center; transform-origin: 50% 50%">Fiber Gaming</span> </a
            ><!---->
          </div>
          <!---->
        </li>
        <li
          _ngcontent-ng-c3112934927=""
          class="menu-item ng-star-inserted"
          style="block-size: 20px; inset: 0px; height: 20px; inline-size: 96px; inset-block: 0px; inset-inline: 0px; list-style-type: none; min-block-size: auto; min-height: auto; min-inline-size: auto; min-width: auto; perspective-origin: 48px 10px; position: relative; transform-origin: 48px 10px; width: 96px"
        >
          <!----><a
            _ngcontent-ng-c3112934927=""
            href="javascript:void(0);"
            class="tab-link arrow-link ng-star-inserted"
            data-id="5"
            style="block-size: 20px; cursor: pointer; display: flex; font-size: 20px; height: 20px; inline-size: 96px; justify-content: space-between; line-height: 20px; list-style-type: none; padding-inline-end: 28px; padding-left: 28px; perspective-origin: 48px 10px; text-align: right; transform-origin: 48px 10px; width: 96px"
            >סלולר</a
          ><!---->
          <div
            _ngcontent-ng-c3112934927=""
            class="tab-content ng-star-inserted"
            style="
              background-color: rgb(255, 255, 255);
              block-size: auto;
              border-bottom-left-radius: 14px;
              border-bottom-right-radius: 14px;
              border-end-end-radius: 14px;
              border-end-start-radius: 14px;
              box-shadow: rgba(29, 137, 137, 0.06) 17px 14px 25px 0px, rgba(32, 156, 144, 0.08) -18px 16px 30px 0px, rgba(31, 161, 148, 0.1) 0px 4px 21px 0px inset;
              display: none;
              flex-wrap: wrap;
              height: auto;
              inline-size: 643px;
              inset-block-start: 59.5px;
              list-style-type: none;
              padding-block: 40px 20px;
              padding: 40px 51px 20px;
              padding-inline: 51px;
              perspective-origin: 50% 50%;
              position: absolute;
              text-align: right;
              top: 59.5px;
              transform-origin: 50% 50%;
              width: 643px;
            "
          >
            <a
              _ngcontent-ng-c3112934927=""
              class="content-box sub-link ng-star-inserted"
              href="https://www.partner.co.il/n/plans"
              style="
                border-block-color: rgb(0, 0, 238);
                border-color: rgb(0, 0, 238);
                border-inline-color: rgb(0, 0, 238);
                caret-color: rgb(0, 0, 238);
                color: rgb(0, 0, 238);
                column-rule-color: rgb(0, 0, 238);
                cursor: pointer;
                display: block;
                inline-size: 89px;
                list-style-type: none;
                margin-block-end: 22px;
                margin-bottom: 22px;
                margin-inline: 4%;
                margin-left: 4%;
                margin-right: 4%;
                outline-color: rgb(0, 0, 238);
                perspective-origin: 50% 50%;
                text-align: center;
                text-decoration: none solid rgb(0, 0, 238);
                text-emphasis-color: rgb(0, 0, 238);
                transform-origin: 50% 50%;
                width: 89px;
                -webkit-text-fill-color: rgb(0, 0, 238);
                -webkit-text-stroke-color: rgb(0, 0, 238);
              "
            >
              <div
                _ngcontent-ng-c3112934927=""
                class="image"
                style="
                  align-items: center;
                  block-size: 81px;
                  border-block-color: rgb(0, 0, 238);
                  border-color: rgb(0, 0, 238);
                  border-radius: 12px;
                  border-end-end-radius: 12px;
                  border-end-start-radius: 12px;
                  border-inline-color: rgb(0, 0, 238);
                  border-start-end-radius: 12px;
                  border-start-start-radius: 12px;
                  box-shadow: rgba(3, 69, 168, 0.08) 0px 4.352px 14.144px 0px;
                  caret-color: rgb(0, 0, 238);
                  color: rgb(0, 0, 238);
                  column-rule-color: rgb(0, 0, 238);
                  cursor: pointer;
                  display: flex;
                  height: 81px;
                  inline-size: 100%;
                  justify-content: center;
                  list-style-type: none;
                  outline-color: rgb(0, 0, 238);
                  perspective-origin: 50% 50%;
                  text-align: center;
                  text-decoration: none solid rgb(0, 0, 238);
                  text-emphasis-color: rgb(0, 0, 238);
                  transform-origin: 50% 50%;
                  width: 100%;
                  -webkit-text-fill-color: rgb(0, 0, 238);
                  -webkit-text-stroke-color: rgb(0, 0, 238);
                "
              >
                <img
                  _ngcontent-ng-c3112934927=""
                  src="./media/yxmbybvl/הצטרפות-אונליין.png"
                  style="
                    block-size: auto;
                    border-block-color: rgb(0, 0, 238);
                    border-color: rgb(0, 0, 238);
                    border-inline-color: rgb(0, 0, 238);
                    caret-color: rgb(0, 0, 238);
                    color: rgb(0, 0, 238);
                    column-rule-color: rgb(0, 0, 238);
                    cursor: pointer;
                    display: block;
                    height: auto;
                    inline-size: auto;
                    list-style-type: none;
                    outline-color: rgb(0, 0, 238);
                    perspective-origin: 50% 50%;
                    text-align: center;
                    text-decoration: none solid rgb(0, 0, 238);
                    text-emphasis-color: rgb(0, 0, 238);
                    transform-origin: 50% 50%;
                    width: auto;
                    -webkit-text-fill-color: rgb(0, 0, 238);
                    -webkit-text-stroke-color: rgb(0, 0, 238);
                  "
                />
              </div>
              <span _ngcontent-ng-c3112934927="" class="sub-link-text" style="cursor: pointer; display: inline-block; font-size: 15px; line-height: 15px; list-style-type: none; margin-block-start: 8px; margin-top: 8px; perspective-origin: 50% 50%; text-align: center; transform-origin: 50% 50%">הצטרפות אונליין</span> </a
            ><a
              _ngcontent-ng-c3112934927=""
              class="content-box sub-link ng-star-inserted"
              href="https://www.partner.co.il/n/changerateplan"
              style="
                border-block-color: rgb(0, 0, 238);
                border-color: rgb(0, 0, 238);
                border-inline-color: rgb(0, 0, 238);
                caret-color: rgb(0, 0, 238);
                color: rgb(0, 0, 238);
                column-rule-color: rgb(0, 0, 238);
                cursor: pointer;
                display: block;
                inline-size: 89px;
                list-style-type: none;
                margin-block-end: 22px;
                margin-bottom: 22px;
                margin-inline: 4%;
                margin-left: 4%;
                margin-right: 4%;
                outline-color: rgb(0, 0, 238);
                perspective-origin: 50% 50%;
                text-align: center;
                text-decoration: none solid rgb(0, 0, 238);
                text-emphasis-color: rgb(0, 0, 238);
                transform-origin: 50% 50%;
                width: 89px;
                -webkit-text-fill-color: rgb(0, 0, 238);
                -webkit-text-stroke-color: rgb(0, 0, 238);
              "
            >
              <div
                _ngcontent-ng-c3112934927=""
                class="image"
                style="
                  align-items: center;
                  block-size: 81px;
                  border-block-color: rgb(0, 0, 238);
                  border-color: rgb(0, 0, 238);
                  border-radius: 12px;
                  border-end-end-radius: 12px;
                  border-end-start-radius: 12px;
                  border-inline-color: rgb(0, 0, 238);
                  border-start-end-radius: 12px;
                  border-start-start-radius: 12px;
                  box-shadow: rgba(3, 69, 168, 0.08) 0px 4.352px 14.144px 0px;
                  caret-color: rgb(0, 0, 238);
                  color: rgb(0, 0, 238);
                  column-rule-color: rgb(0, 0, 238);
                  cursor: pointer;
                  display: flex;
                  height: 81px;
                  inline-size: 100%;
                  justify-content: center;
                  list-style-type: none;
                  outline-color: rgb(0, 0, 238);
                  perspective-origin: 50% 50%;
                  text-align: center;
                  text-decoration: none solid rgb(0, 0, 238);
                  text-emphasis-color: rgb(0, 0, 238);
                  transform-origin: 50% 50%;
                  width: 100%;
                  -webkit-text-fill-color: rgb(0, 0, 238);
                  -webkit-text-stroke-color: rgb(0, 0, 238);
                "
              >
                <img
                  _ngcontent-ng-c3112934927=""
                  src="./media/lxzjrb3v/מבת.png"
                  style="
                    block-size: auto;
                    border-block-color: rgb(0, 0, 238);
                    border-color: rgb(0, 0, 238);
                    border-inline-color: rgb(0, 0, 238);
                    caret-color: rgb(0, 0, 238);
                    color: rgb(0, 0, 238);
                    column-rule-color: rgb(0, 0, 238);
                    cursor: pointer;
                    display: block;
                    height: auto;
                    inline-size: auto;
                    list-style-type: none;
                    outline-color: rgb(0, 0, 238);
                    perspective-origin: 50% 50%;
                    text-align: center;
                    text-decoration: none solid rgb(0, 0, 238);
                    text-emphasis-color: rgb(0, 0, 238);
                    transform-origin: 50% 50%;
                    width: auto;
                    -webkit-text-fill-color: rgb(0, 0, 238);
                    -webkit-text-stroke-color: rgb(0, 0, 238);
                  "
                />
              </div>
              <span _ngcontent-ng-c3112934927="" class="sub-link-text" style="cursor: pointer; display: inline-block; font-size: 15px; line-height: 15px; list-style-type: none; margin-block-start: 8px; margin-top: 8px; perspective-origin: 50% 50%; text-align: center; transform-origin: 50% 50%">מעבר בין תוכניות</span> </a
            ><a
              _ngcontent-ng-c3112934927=""
              class="content-box sub-link ng-star-inserted"
              href="https://www.partner.co.il/n/partnerdigital/apps-cell"
              style="
                border-block-color: rgb(0, 0, 238);
                border-color: rgb(0, 0, 238);
                border-inline-color: rgb(0, 0, 238);
                caret-color: rgb(0, 0, 238);
                color: rgb(0, 0, 238);
                column-rule-color: rgb(0, 0, 238);
                cursor: pointer;
                display: block;
                inline-size: 89px;
                list-style-type: none;
                margin-block-end: 22px;
                margin-bottom: 22px;
                margin-inline: 4%;
                margin-left: 4%;
                margin-right: 4%;
                outline-color: rgb(0, 0, 238);
                perspective-origin: 50% 50%;
                text-align: center;
                text-decoration: none solid rgb(0, 0, 238);
                text-emphasis-color: rgb(0, 0, 238);
                transform-origin: 50% 50%;
                width: 89px;
                -webkit-text-fill-color: rgb(0, 0, 238);
                -webkit-text-stroke-color: rgb(0, 0, 238);
              "
            >
              <div
                _ngcontent-ng-c3112934927=""
                class="image"
                style="
                  align-items: center;
                  block-size: 81px;
                  border-block-color: rgb(0, 0, 238);
                  border-color: rgb(0, 0, 238);
                  border-radius: 12px;
                  border-end-end-radius: 12px;
                  border-end-start-radius: 12px;
                  border-inline-color: rgb(0, 0, 238);
                  border-start-end-radius: 12px;
                  border-start-start-radius: 12px;
                  box-shadow: rgba(3, 69, 168, 0.08) 0px 4.352px 14.144px 0px;
                  caret-color: rgb(0, 0, 238);
                  color: rgb(0, 0, 238);
                  column-rule-color: rgb(0, 0, 238);
                  cursor: pointer;
                  display: flex;
                  height: 81px;
                  inline-size: 100%;
                  justify-content: center;
                  list-style-type: none;
                  outline-color: rgb(0, 0, 238);
                  perspective-origin: 50% 50%;
                  text-align: center;
                  text-decoration: none solid rgb(0, 0, 238);
                  text-emphasis-color: rgb(0, 0, 238);
                  transform-origin: 50% 50%;
                  width: 100%;
                  -webkit-text-fill-color: rgb(0, 0, 238);
                  -webkit-text-stroke-color: rgb(0, 0, 238);
                "
              >
                <img
                  _ngcontent-ng-c3112934927=""
                  src="./media/4mbdupz5/שירותים-ואפליקציות.png"
                  style="
                    block-size: auto;
                    border-block-color: rgb(0, 0, 238);
                    border-color: rgb(0, 0, 238);
                    border-inline-color: rgb(0, 0, 238);
                    caret-color: rgb(0, 0, 238);
                    color: rgb(0, 0, 238);
                    column-rule-color: rgb(0, 0, 238);
                    cursor: pointer;
                    display: block;
                    height: auto;
                    inline-size: auto;
                    list-style-type: none;
                    outline-color: rgb(0, 0, 238);
                    perspective-origin: 50% 50%;
                    text-align: center;
                    text-decoration: none solid rgb(0, 0, 238);
                    text-emphasis-color: rgb(0, 0, 238);
                    transform-origin: 50% 50%;
                    width: auto;
                    -webkit-text-fill-color: rgb(0, 0, 238);
                    -webkit-text-stroke-color: rgb(0, 0, 238);
                  "
                />
              </div>
              <span _ngcontent-ng-c3112934927="" class="sub-link-text" style="cursor: pointer; display: inline-block; font-size: 15px; line-height: 15px; list-style-type: none; margin-block-start: 8px; margin-top: 8px; perspective-origin: 50% 50%; text-align: center; transform-origin: 50% 50%">שירותים ואפליקציות</span> </a
            ><a
              _ngcontent-ng-c3112934927=""
              class="content-box sub-link ng-star-inserted"
              href="https://www.partner.co.il/n/takeover/seller/login"
              style="
                border-block-color: rgb(0, 0, 238);
                border-color: rgb(0, 0, 238);
                border-inline-color: rgb(0, 0, 238);
                caret-color: rgb(0, 0, 238);
                color: rgb(0, 0, 238);
                column-rule-color: rgb(0, 0, 238);
                cursor: pointer;
                display: block;
                inline-size: 89px;
                list-style-type: none;
                margin-block-end: 22px;
                margin-bottom: 22px;
                margin-inline: 4%;
                margin-left: 4%;
                margin-right: 4%;
                outline-color: rgb(0, 0, 238);
                perspective-origin: 50% 50%;
                text-align: center;
                text-decoration: none solid rgb(0, 0, 238);
                text-emphasis-color: rgb(0, 0, 238);
                transform-origin: 50% 50%;
                width: 89px;
                -webkit-text-fill-color: rgb(0, 0, 238);
                -webkit-text-stroke-color: rgb(0, 0, 238);
              "
            >
              <div
                _ngcontent-ng-c3112934927=""
                class="image"
                style="
                  align-items: center;
                  block-size: 81px;
                  border-block-color: rgb(0, 0, 238);
                  border-color: rgb(0, 0, 238);
                  border-radius: 12px;
                  border-end-end-radius: 12px;
                  border-end-start-radius: 12px;
                  border-inline-color: rgb(0, 0, 238);
                  border-start-end-radius: 12px;
                  border-start-start-radius: 12px;
                  box-shadow: rgba(3, 69, 168, 0.08) 0px 4.352px 14.144px 0px;
                  caret-color: rgb(0, 0, 238);
                  color: rgb(0, 0, 238);
                  column-rule-color: rgb(0, 0, 238);
                  cursor: pointer;
                  display: flex;
                  height: 81px;
                  inline-size: 100%;
                  justify-content: center;
                  list-style-type: none;
                  outline-color: rgb(0, 0, 238);
                  perspective-origin: 50% 50%;
                  text-align: center;
                  text-decoration: none solid rgb(0, 0, 238);
                  text-emphasis-color: rgb(0, 0, 238);
                  transform-origin: 50% 50%;
                  width: 100%;
                  -webkit-text-fill-color: rgb(0, 0, 238);
                  -webkit-text-stroke-color: rgb(0, 0, 238);
                "
              >
                <img
                  _ngcontent-ng-c3112934927=""
                  src="./media/qnzlt00s/העברת-בעלות.png"
                  style="
                    block-size: auto;
                    border-block-color: rgb(0, 0, 238);
                    border-color: rgb(0, 0, 238);
                    border-inline-color: rgb(0, 0, 238);
                    caret-color: rgb(0, 0, 238);
                    color: rgb(0, 0, 238);
                    column-rule-color: rgb(0, 0, 238);
                    cursor: pointer;
                    display: block;
                    height: auto;
                    inline-size: auto;
                    list-style-type: none;
                    outline-color: rgb(0, 0, 238);
                    perspective-origin: 50% 50%;
                    text-align: center;
                    text-decoration: none solid rgb(0, 0, 238);
                    text-emphasis-color: rgb(0, 0, 238);
                    transform-origin: 50% 50%;
                    width: auto;
                    -webkit-text-fill-color: rgb(0, 0, 238);
                    -webkit-text-stroke-color: rgb(0, 0, 238);
                  "
                />
              </div>
              <span _ngcontent-ng-c3112934927="" class="sub-link-text" style="cursor: pointer; display: inline-block; font-size: 15px; line-height: 15px; list-style-type: none; margin-block-start: 8px; margin-top: 8px; perspective-origin: 50% 50%; text-align: center; transform-origin: 50% 50%">העברת בעלות</span> </a
            ><a
              _ngcontent-ng-c3112934927=""
              class="content-box sub-link ng-star-inserted"
              href="https://www.partner.co.il/n/sim/login?returnUrl=%2Freplacesim%2FselectContract"
              style="
                border-block-color: rgb(0, 0, 238);
                border-color: rgb(0, 0, 238);
                border-inline-color: rgb(0, 0, 238);
                caret-color: rgb(0, 0, 238);
                color: rgb(0, 0, 238);
                column-rule-color: rgb(0, 0, 238);
                cursor: pointer;
                display: block;
                inline-size: 89px;
                list-style-type: none;
                margin-block-end: 22px;
                margin-bottom: 22px;
                margin-inline: 4%;
                margin-left: 4%;
                margin-right: 4%;
                outline-color: rgb(0, 0, 238);
                perspective-origin: 50% 50%;
                text-align: center;
                text-decoration: none solid rgb(0, 0, 238);
                text-emphasis-color: rgb(0, 0, 238);
                transform-origin: 50% 50%;
                width: 89px;
                -webkit-text-fill-color: rgb(0, 0, 238);
                -webkit-text-stroke-color: rgb(0, 0, 238);
              "
            >
              <div
                _ngcontent-ng-c3112934927=""
                class="image"
                style="
                  align-items: center;
                  block-size: 81px;
                  border-block-color: rgb(0, 0, 238);
                  border-color: rgb(0, 0, 238);
                  border-radius: 12px;
                  border-end-end-radius: 12px;
                  border-end-start-radius: 12px;
                  border-inline-color: rgb(0, 0, 238);
                  border-start-end-radius: 12px;
                  border-start-start-radius: 12px;
                  box-shadow: rgba(3, 69, 168, 0.08) 0px 4.352px 14.144px 0px;
                  caret-color: rgb(0, 0, 238);
                  color: rgb(0, 0, 238);
                  column-rule-color: rgb(0, 0, 238);
                  cursor: pointer;
                  display: flex;
                  height: 81px;
                  inline-size: 100%;
                  justify-content: center;
                  list-style-type: none;
                  outline-color: rgb(0, 0, 238);
                  perspective-origin: 50% 50%;
                  text-align: center;
                  text-decoration: none solid rgb(0, 0, 238);
                  text-emphasis-color: rgb(0, 0, 238);
                  transform-origin: 50% 50%;
                  width: 100%;
                  -webkit-text-fill-color: rgb(0, 0, 238);
                  -webkit-text-stroke-color: rgb(0, 0, 238);
                "
              >
                <img
                  _ngcontent-ng-c3112934927=""
                  src="./media/urqcluwr/ניוד.png"
                  style="
                    block-size: auto;
                    border-block-color: rgb(0, 0, 238);
                    border-color: rgb(0, 0, 238);
                    border-inline-color: rgb(0, 0, 238);
                    caret-color: rgb(0, 0, 238);
                    color: rgb(0, 0, 238);
                    column-rule-color: rgb(0, 0, 238);
                    cursor: pointer;
                    display: block;
                    height: auto;
                    inline-size: auto;
                    list-style-type: none;
                    outline-color: rgb(0, 0, 238);
                    perspective-origin: 50% 50%;
                    text-align: center;
                    text-decoration: none solid rgb(0, 0, 238);
                    text-emphasis-color: rgb(0, 0, 238);
                    transform-origin: 50% 50%;
                    width: auto;
                    -webkit-text-fill-color: rgb(0, 0, 238);
                    -webkit-text-stroke-color: rgb(0, 0, 238);
                  "
                />
              </div>
              <span _ngcontent-ng-c3112934927="" class="sub-link-text" style="cursor: pointer; display: inline-block; font-size: 15px; line-height: 15px; list-style-type: none; margin-block-start: 8px; margin-top: 8px; perspective-origin: 50% 50%; text-align: center; transform-origin: 50% 50%">החלפת SIM ו-eSIM</span> </a
            ><a
              _ngcontent-ng-c3112934927=""
              class="content-box sub-link ng-star-inserted"
              href="https://www.partner.co.il/n/roamingcellular/lobby"
              style="
                border-block-color: rgb(0, 0, 238);
                border-color: rgb(0, 0, 238);
                border-inline-color: rgb(0, 0, 238);
                caret-color: rgb(0, 0, 238);
                color: rgb(0, 0, 238);
                column-rule-color: rgb(0, 0, 238);
                cursor: pointer;
                display: block;
                inline-size: 89px;
                list-style-type: none;
                margin-block-end: 22px;
                margin-bottom: 22px;
                margin-inline: 4%;
                margin-left: 4%;
                margin-right: 4%;
                outline-color: rgb(0, 0, 238);
                perspective-origin: 50% 50%;
                text-align: center;
                text-decoration: none solid rgb(0, 0, 238);
                text-emphasis-color: rgb(0, 0, 238);
                transform-origin: 50% 50%;
                width: 89px;
                -webkit-text-fill-color: rgb(0, 0, 238);
                -webkit-text-stroke-color: rgb(0, 0, 238);
              "
            >
              <div
                _ngcontent-ng-c3112934927=""
                class="image"
                style="
                  align-items: center;
                  block-size: 81px;
                  border-block-color: rgb(0, 0, 238);
                  border-color: rgb(0, 0, 238);
                  border-radius: 12px;
                  border-end-end-radius: 12px;
                  border-end-start-radius: 12px;
                  border-inline-color: rgb(0, 0, 238);
                  border-start-end-radius: 12px;
                  border-start-start-radius: 12px;
                  box-shadow: rgba(3, 69, 168, 0.08) 0px 4.352px 14.144px 0px;
                  caret-color: rgb(0, 0, 238);
                  color: rgb(0, 0, 238);
                  column-rule-color: rgb(0, 0, 238);
                  cursor: pointer;
                  display: flex;
                  height: 81px;
                  inline-size: 100%;
                  justify-content: center;
                  list-style-type: none;
                  outline-color: rgb(0, 0, 238);
                  perspective-origin: 50% 50%;
                  text-align: center;
                  text-decoration: none solid rgb(0, 0, 238);
                  text-emphasis-color: rgb(0, 0, 238);
                  transform-origin: 50% 50%;
                  width: 100%;
                  -webkit-text-fill-color: rgb(0, 0, 238);
                  -webkit-text-stroke-color: rgb(0, 0, 238);
                "
              >
                <img
                  _ngcontent-ng-c3112934927=""
                  src="./media/swkhkdg4/חול.png"
                  style="
                    block-size: auto;
                    border-block-color: rgb(0, 0, 238);
                    border-color: rgb(0, 0, 238);
                    border-inline-color: rgb(0, 0, 238);
                    caret-color: rgb(0, 0, 238);
                    color: rgb(0, 0, 238);
                    column-rule-color: rgb(0, 0, 238);
                    cursor: pointer;
                    display: block;
                    height: auto;
                    inline-size: auto;
                    list-style-type: none;
                    outline-color: rgb(0, 0, 238);
                    perspective-origin: 50% 50%;
                    text-align: center;
                    text-decoration: none solid rgb(0, 0, 238);
                    text-emphasis-color: rgb(0, 0, 238);
                    transform-origin: 50% 50%;
                    width: auto;
                    -webkit-text-fill-color: rgb(0, 0, 238);
                    -webkit-text-stroke-color: rgb(0, 0, 238);
                  "
                />
              </div>
              <span _ngcontent-ng-c3112934927="" class="sub-link-text" style="cursor: pointer; display: inline-block; font-size: 15px; line-height: 15px; list-style-type: none; margin-block-start: 8px; margin-top: 8px; perspective-origin: 50% 50%; text-align: center; transform-origin: 50% 50%">חבילות לטסים לחו"ל</span> </a
            ><a
              _ngcontent-ng-c3112934927=""
              class="content-box sub-link ng-star-inserted"
              href="https://www.partner.co.il/u/esim-5g"
              style="
                border-block-color: rgb(0, 0, 238);
                border-color: rgb(0, 0, 238);
                border-inline-color: rgb(0, 0, 238);
                caret-color: rgb(0, 0, 238);
                color: rgb(0, 0, 238);
                column-rule-color: rgb(0, 0, 238);
                cursor: pointer;
                display: block;
                inline-size: 89px;
                list-style-type: none;
                margin-block-end: 22px;
                margin-bottom: 22px;
                margin-inline: 4%;
                margin-left: 4%;
                margin-right: 4%;
                outline-color: rgb(0, 0, 238);
                perspective-origin: 50% 50%;
                text-align: center;
                text-decoration: none solid rgb(0, 0, 238);
                text-emphasis-color: rgb(0, 0, 238);
                transform-origin: 50% 50%;
                width: 89px;
                -webkit-text-fill-color: rgb(0, 0, 238);
                -webkit-text-stroke-color: rgb(0, 0, 238);
              "
            >
              <div
                _ngcontent-ng-c3112934927=""
                class="image"
                style="
                  align-items: center;
                  block-size: 81px;
                  border-block-color: rgb(0, 0, 238);
                  border-color: rgb(0, 0, 238);
                  border-radius: 12px;
                  border-end-end-radius: 12px;
                  border-end-start-radius: 12px;
                  border-inline-color: rgb(0, 0, 238);
                  border-start-end-radius: 12px;
                  border-start-start-radius: 12px;
                  box-shadow: rgba(3, 69, 168, 0.08) 0px 4.352px 14.144px 0px;
                  caret-color: rgb(0, 0, 238);
                  color: rgb(0, 0, 238);
                  column-rule-color: rgb(0, 0, 238);
                  cursor: pointer;
                  display: flex;
                  height: 81px;
                  inline-size: 100%;
                  justify-content: center;
                  list-style-type: none;
                  outline-color: rgb(0, 0, 238);
                  perspective-origin: 50% 50%;
                  text-align: center;
                  text-decoration: none solid rgb(0, 0, 238);
                  text-emphasis-color: rgb(0, 0, 238);
                  transform-origin: 50% 50%;
                  width: 100%;
                  -webkit-text-fill-color: rgb(0, 0, 238);
                  -webkit-text-stroke-color: rgb(0, 0, 238);
                "
              >
                <img
                  _ngcontent-ng-c3112934927=""
                  src="./media/ehljqsa2/הגדרת-esim.png"
                  style="
                    block-size: auto;
                    border-block-color: rgb(0, 0, 238);
                    border-color: rgb(0, 0, 238);
                    border-inline-color: rgb(0, 0, 238);
                    caret-color: rgb(0, 0, 238);
                    color: rgb(0, 0, 238);
                    column-rule-color: rgb(0, 0, 238);
                    cursor: pointer;
                    display: block;
                    height: auto;
                    inline-size: auto;
                    list-style-type: none;
                    outline-color: rgb(0, 0, 238);
                    perspective-origin: 50% 50%;
                    text-align: center;
                    text-decoration: none solid rgb(0, 0, 238);
                    text-emphasis-color: rgb(0, 0, 238);
                    transform-origin: 50% 50%;
                    width: auto;
                    -webkit-text-fill-color: rgb(0, 0, 238);
                    -webkit-text-stroke-color: rgb(0, 0, 238);
                  "
                />
              </div>
              <span _ngcontent-ng-c3112934927="" class="sub-link-text" style="cursor: pointer; display: inline-block; font-size: 15px; line-height: 15px; list-style-type: none; margin-block-start: 8px; margin-top: 8px; perspective-origin: 50% 50%; text-align: center; transform-origin: 50% 50%">הגדרת eSIM</span> </a
            ><a
              _ngcontent-ng-c3112934927=""
              class="content-box sub-link ng-star-inserted"
              href="https://www.partner.co.il/u/bigtalk"
              style="
                border-block-color: rgb(0, 0, 238);
                border-color: rgb(0, 0, 238);
                border-inline-color: rgb(0, 0, 238);
                caret-color: rgb(0, 0, 238);
                color: rgb(0, 0, 238);
                column-rule-color: rgb(0, 0, 238);
                cursor: pointer;
                display: block;
                inline-size: 89px;
                list-style-type: none;
                margin-block-end: 22px;
                margin-bottom: 22px;
                margin-inline: 4%;
                margin-left: 4%;
                margin-right: 4%;
                outline-color: rgb(0, 0, 238);
                perspective-origin: 50% 50%;
                text-align: center;
                text-decoration: none solid rgb(0, 0, 238);
                text-emphasis-color: rgb(0, 0, 238);
                transform-origin: 50% 50%;
                width: 89px;
                -webkit-text-fill-color: rgb(0, 0, 238);
                -webkit-text-stroke-color: rgb(0, 0, 238);
              "
            >
              <div
                _ngcontent-ng-c3112934927=""
                class="image"
                style="
                  align-items: center;
                  block-size: 81px;
                  border-block-color: rgb(0, 0, 238);
                  border-color: rgb(0, 0, 238);
                  border-radius: 12px;
                  border-end-end-radius: 12px;
                  border-end-start-radius: 12px;
                  border-inline-color: rgb(0, 0, 238);
                  border-start-end-radius: 12px;
                  border-start-start-radius: 12px;
                  box-shadow: rgba(3, 69, 168, 0.08) 0px 4.352px 14.144px 0px;
                  caret-color: rgb(0, 0, 238);
                  color: rgb(0, 0, 238);
                  column-rule-color: rgb(0, 0, 238);
                  cursor: pointer;
                  display: flex;
                  height: 81px;
                  inline-size: 100%;
                  justify-content: center;
                  list-style-type: none;
                  outline-color: rgb(0, 0, 238);
                  perspective-origin: 50% 50%;
                  text-align: center;
                  text-decoration: none solid rgb(0, 0, 238);
                  text-emphasis-color: rgb(0, 0, 238);
                  transform-origin: 50% 50%;
                  width: 100%;
                  -webkit-text-fill-color: rgb(0, 0, 238);
                  -webkit-text-stroke-color: rgb(0, 0, 238);
                "
              >
                <img
                  _ngcontent-ng-c3112934927=""
                  src="./media/l3ckevnw/פריפייד.png"
                  style="
                    block-size: auto;
                    border-block-color: rgb(0, 0, 238);
                    border-color: rgb(0, 0, 238);
                    border-inline-color: rgb(0, 0, 238);
                    caret-color: rgb(0, 0, 238);
                    color: rgb(0, 0, 238);
                    column-rule-color: rgb(0, 0, 238);
                    cursor: pointer;
                    display: block;
                    height: auto;
                    inline-size: auto;
                    list-style-type: none;
                    outline-color: rgb(0, 0, 238);
                    perspective-origin: 50% 50%;
                    text-align: center;
                    text-decoration: none solid rgb(0, 0, 238);
                    text-emphasis-color: rgb(0, 0, 238);
                    transform-origin: 50% 50%;
                    width: auto;
                    -webkit-text-fill-color: rgb(0, 0, 238);
                    -webkit-text-stroke-color: rgb(0, 0, 238);
                  "
                />
              </div>
              <span _ngcontent-ng-c3112934927="" class="sub-link-text" style="cursor: pointer; display: inline-block; font-size: 15px; line-height: 15px; list-style-type: none; margin-block-start: 8px; margin-top: 8px; perspective-origin: 50% 50%; text-align: center; transform-origin: 50% 50%">תוכנית פריפייד - Bigtalk</span> </a
            ><a
              _ngcontent-ng-c3112934927=""
              class="content-box sub-link ng-star-inserted"
              href="https://www.partner.co.il/u/fix-lobby"
              style="
                border-block-color: rgb(0, 0, 238);
                border-color: rgb(0, 0, 238);
                border-inline-color: rgb(0, 0, 238);
                caret-color: rgb(0, 0, 238);
                color: rgb(0, 0, 238);
                column-rule-color: rgb(0, 0, 238);
                cursor: pointer;
                display: block;
                inline-size: 89px;
                list-style-type: none;
                margin-block-end: 22px;
                margin-bottom: 22px;
                margin-inline: 4%;
                margin-left: 4%;
                margin-right: 4%;
                outline-color: rgb(0, 0, 238);
                perspective-origin: 50% 50%;
                text-align: center;
                text-decoration: none solid rgb(0, 0, 238);
                text-emphasis-color: rgb(0, 0, 238);
                transform-origin: 50% 50%;
                width: 89px;
                -webkit-text-fill-color: rgb(0, 0, 238);
                -webkit-text-stroke-color: rgb(0, 0, 238);
              "
            >
              <div
                _ngcontent-ng-c3112934927=""
                class="image"
                style="
                  align-items: center;
                  block-size: 81px;
                  border-block-color: rgb(0, 0, 238);
                  border-color: rgb(0, 0, 238);
                  border-radius: 12px;
                  border-end-end-radius: 12px;
                  border-end-start-radius: 12px;
                  border-inline-color: rgb(0, 0, 238);
                  border-start-end-radius: 12px;
                  border-start-start-radius: 12px;
                  box-shadow: rgba(3, 69, 168, 0.08) 0px 4.352px 14.144px 0px;
                  caret-color: rgb(0, 0, 238);
                  color: rgb(0, 0, 238);
                  column-rule-color: rgb(0, 0, 238);
                  cursor: pointer;
                  display: flex;
                  height: 81px;
                  inline-size: 100%;
                  justify-content: center;
                  list-style-type: none;
                  outline-color: rgb(0, 0, 238);
                  perspective-origin: 50% 50%;
                  text-align: center;
                  text-decoration: none solid rgb(0, 0, 238);
                  text-emphasis-color: rgb(0, 0, 238);
                  transform-origin: 50% 50%;
                  width: 100%;
                  -webkit-text-fill-color: rgb(0, 0, 238);
                  -webkit-text-stroke-color: rgb(0, 0, 238);
                "
              >
                <img
                  _ngcontent-ng-c3112934927=""
                  src="./media/0aubn4t3/שירות-תיקונים.png"
                  style="
                    block-size: auto;
                    border-block-color: rgb(0, 0, 238);
                    border-color: rgb(0, 0, 238);
                    border-inline-color: rgb(0, 0, 238);
                    caret-color: rgb(0, 0, 238);
                    color: rgb(0, 0, 238);
                    column-rule-color: rgb(0, 0, 238);
                    cursor: pointer;
                    display: block;
                    height: auto;
                    inline-size: auto;
                    list-style-type: none;
                    outline-color: rgb(0, 0, 238);
                    perspective-origin: 50% 50%;
                    text-align: center;
                    text-decoration: none solid rgb(0, 0, 238);
                    text-emphasis-color: rgb(0, 0, 238);
                    transform-origin: 50% 50%;
                    width: auto;
                    -webkit-text-fill-color: rgb(0, 0, 238);
                    -webkit-text-stroke-color: rgb(0, 0, 238);
                  "
                />
              </div>
              <span _ngcontent-ng-c3112934927="" class="sub-link-text" style="cursor: pointer; display: inline-block; font-size: 15px; line-height: 15px; list-style-type: none; margin-block-start: 8px; margin-top: 8px; perspective-origin: 50% 50%; text-align: center; transform-origin: 50% 50%">שירות תיקונים Private Care</span> </a
            ><!---->
          </div>
          <!---->
        </li>
        <li
          _ngcontent-ng-c3112934927=""
          class="menu-item ng-star-inserted"
          style="block-size: 20px; inset: 0px; height: 20px; inline-size: 122.562px; inset-block: 0px; inset-inline: 0px; list-style-type: none; min-block-size: auto; min-height: auto; min-inline-size: auto; min-width: auto; perspective-origin: 61.2812px 10px; position: relative; transform-origin: 61.2812px 10px; width: 122.562px"
        >
          <a
            _ngcontent-ng-c3112934927=""
            class="tab-link ng-star-inserted"
            title='פרטנר חו"ל'
            target="_self"
            href="https://www.partner.co.il/n/roamingcellular/lobby"
            style="block-size: 20px; cursor: pointer; display: block; font-size: 20px; height: 20px; inline-size: 122.578px; line-height: 20px; list-style-type: none; padding-inline-end: 28px; padding-left: 28px; perspective-origin: 61.2812px 10px; text-align: right; transform-origin: 61.2891px 10px; width: 122.578px"
            >פרטנר חו״ל</a
          ><!----><!----><!---->
        </li>
        <li
          _ngcontent-ng-c3112934927=""
          class="menu-item ng-star-inserted"
          style="block-size: 20px; inset: 0px; height: 20px; inline-size: 144.188px; inset-block: 0px; inset-inline: 0px; list-style-type: none; min-block-size: auto; min-height: auto; min-inline-size: auto; min-width: auto; perspective-origin: 72.0938px 10px; position: relative; transform-origin: 72.0938px 10px; width: 144.188px"
        >
          <!----><a
            _ngcontent-ng-c3112934927=""
            href="javascript:void(0);"
            class="tab-link arrow-link ng-star-inserted"
            data-id="6"
            style="block-size: 20px; cursor: pointer; display: flex; font-size: 20px; height: 20px; inline-size: 144.203px; justify-content: space-between; line-height: 20px; list-style-type: none; padding-inline-end: 28px; padding-left: 28px; perspective-origin: 72.0938px 10px; text-align: right; transform-origin: 72.1016px 10px; width: 144.203px"
            >Partner TV</a
          ><!---->
          <div
            _ngcontent-ng-c3112934927=""
            class="tab-content ng-star-inserted"
            style="
              background-color: rgb(255, 255, 255);
              block-size: auto;
              border-bottom-left-radius: 14px;
              border-bottom-right-radius: 14px;
              border-end-end-radius: 14px;
              border-end-start-radius: 14px;
              box-shadow: rgba(29, 137, 137, 0.06) 17px 14px 25px 0px, rgba(32, 156, 144, 0.08) -18px 16px 30px 0px, rgba(31, 161, 148, 0.1) 0px 4px 21px 0px inset;
              display: none;
              flex-wrap: wrap;
              height: auto;
              inline-size: 643px;
              inset-block-start: 59.5px;
              list-style-type: none;
              padding-block: 40px 20px;
              padding: 40px 51px 20px;
              padding-inline: 51px;
              perspective-origin: 50% 50%;
              position: absolute;
              text-align: right;
              top: 59.5px;
              transform-origin: 50% 50%;
              width: 643px;
            "
          >
            <a
              _ngcontent-ng-c3112934927=""
              class="content-box sub-link ng-star-inserted"
              href="https://www.partner.co.il/n/tv/packages"
              style="
                border-block-color: rgb(0, 0, 238);
                border-color: rgb(0, 0, 238);
                border-inline-color: rgb(0, 0, 238);
                caret-color: rgb(0, 0, 238);
                color: rgb(0, 0, 238);
                column-rule-color: rgb(0, 0, 238);
                cursor: pointer;
                display: block;
                inline-size: 89px;
                list-style-type: none;
                margin-block-end: 22px;
                margin-bottom: 22px;
                margin-inline: 4%;
                margin-left: 4%;
                margin-right: 4%;
                outline-color: rgb(0, 0, 238);
                perspective-origin: 50% 50%;
                text-align: center;
                text-decoration: none solid rgb(0, 0, 238);
                text-emphasis-color: rgb(0, 0, 238);
                transform-origin: 50% 50%;
                width: 89px;
                -webkit-text-fill-color: rgb(0, 0, 238);
                -webkit-text-stroke-color: rgb(0, 0, 238);
              "
            >
              <div
                _ngcontent-ng-c3112934927=""
                class="image"
                style="
                  align-items: center;
                  block-size: 81px;
                  border-block-color: rgb(0, 0, 238);
                  border-color: rgb(0, 0, 238);
                  border-radius: 12px;
                  border-end-end-radius: 12px;
                  border-end-start-radius: 12px;
                  border-inline-color: rgb(0, 0, 238);
                  border-start-end-radius: 12px;
                  border-start-start-radius: 12px;
                  box-shadow: rgba(3, 69, 168, 0.08) 0px 4.352px 14.144px 0px;
                  caret-color: rgb(0, 0, 238);
                  color: rgb(0, 0, 238);
                  column-rule-color: rgb(0, 0, 238);
                  cursor: pointer;
                  display: flex;
                  height: 81px;
                  inline-size: 100%;
                  justify-content: center;
                  list-style-type: none;
                  outline-color: rgb(0, 0, 238);
                  perspective-origin: 50% 50%;
                  text-align: center;
                  text-decoration: none solid rgb(0, 0, 238);
                  text-emphasis-color: rgb(0, 0, 238);
                  transform-origin: 50% 50%;
                  width: 100%;
                  -webkit-text-fill-color: rgb(0, 0, 238);
                  -webkit-text-stroke-color: rgb(0, 0, 238);
                "
              >
                <img
                  _ngcontent-ng-c3112934927=""
                  src="./media/2ginbsds/הצטרפות.png"
                  style="
                    block-size: auto;
                    border-block-color: rgb(0, 0, 238);
                    border-color: rgb(0, 0, 238);
                    border-inline-color: rgb(0, 0, 238);
                    caret-color: rgb(0, 0, 238);
                    color: rgb(0, 0, 238);
                    column-rule-color: rgb(0, 0, 238);
                    cursor: pointer;
                    display: block;
                    height: auto;
                    inline-size: auto;
                    list-style-type: none;
                    outline-color: rgb(0, 0, 238);
                    perspective-origin: 50% 50%;
                    text-align: center;
                    text-decoration: none solid rgb(0, 0, 238);
                    text-emphasis-color: rgb(0, 0, 238);
                    transform-origin: 50% 50%;
                    width: auto;
                    -webkit-text-fill-color: rgb(0, 0, 238);
                    -webkit-text-stroke-color: rgb(0, 0, 238);
                  "
                />
              </div>
              <span _ngcontent-ng-c3112934927="" class="sub-link-text" style="cursor: pointer; display: inline-block; font-size: 15px; line-height: 15px; list-style-type: none; margin-block-start: 8px; margin-top: 8px; perspective-origin: 50% 50%; text-align: center; transform-origin: 50% 50%">הצטרפות</span> </a
            ><a
              _ngcontent-ng-c3112934927=""
              class="content-box sub-link ng-star-inserted"
              href="https://www.partner.co.il/n/tv/home"
              style="
                border-block-color: rgb(0, 0, 238);
                border-color: rgb(0, 0, 238);
                border-inline-color: rgb(0, 0, 238);
                caret-color: rgb(0, 0, 238);
                color: rgb(0, 0, 238);
                column-rule-color: rgb(0, 0, 238);
                cursor: pointer;
                display: block;
                inline-size: 89px;
                list-style-type: none;
                margin-block-end: 22px;
                margin-bottom: 22px;
                margin-inline: 4%;
                margin-left: 4%;
                margin-right: 4%;
                outline-color: rgb(0, 0, 238);
                perspective-origin: 50% 50%;
                text-align: center;
                text-decoration: none solid rgb(0, 0, 238);
                text-emphasis-color: rgb(0, 0, 238);
                transform-origin: 50% 50%;
                width: 89px;
                -webkit-text-fill-color: rgb(0, 0, 238);
                -webkit-text-stroke-color: rgb(0, 0, 238);
              "
            >
              <div
                _ngcontent-ng-c3112934927=""
                class="image"
                style="
                  align-items: center;
                  block-size: 81px;
                  border-block-color: rgb(0, 0, 238);
                  border-color: rgb(0, 0, 238);
                  border-radius: 12px;
                  border-end-end-radius: 12px;
                  border-end-start-radius: 12px;
                  border-inline-color: rgb(0, 0, 238);
                  border-start-end-radius: 12px;
                  border-start-start-radius: 12px;
                  box-shadow: rgba(3, 69, 168, 0.08) 0px 4.352px 14.144px 0px;
                  caret-color: rgb(0, 0, 238);
                  color: rgb(0, 0, 238);
                  column-rule-color: rgb(0, 0, 238);
                  cursor: pointer;
                  display: flex;
                  height: 81px;
                  inline-size: 100%;
                  justify-content: center;
                  list-style-type: none;
                  outline-color: rgb(0, 0, 238);
                  perspective-origin: 50% 50%;
                  text-align: center;
                  text-decoration: none solid rgb(0, 0, 238);
                  text-emphasis-color: rgb(0, 0, 238);
                  transform-origin: 50% 50%;
                  width: 100%;
                  -webkit-text-fill-color: rgb(0, 0, 238);
                  -webkit-text-stroke-color: rgb(0, 0, 238);
                "
              >
                <img
                  _ngcontent-ng-c3112934927=""
                  src="./media/gbqjth0p/הכל-על-פרטנר-טיוי.png"
                  style="
                    block-size: auto;
                    border-block-color: rgb(0, 0, 238);
                    border-color: rgb(0, 0, 238);
                    border-inline-color: rgb(0, 0, 238);
                    caret-color: rgb(0, 0, 238);
                    color: rgb(0, 0, 238);
                    column-rule-color: rgb(0, 0, 238);
                    cursor: pointer;
                    display: block;
                    height: auto;
                    inline-size: auto;
                    list-style-type: none;
                    outline-color: rgb(0, 0, 238);
                    perspective-origin: 50% 50%;
                    text-align: center;
                    text-decoration: none solid rgb(0, 0, 238);
                    text-emphasis-color: rgb(0, 0, 238);
                    transform-origin: 50% 50%;
                    width: auto;
                    -webkit-text-fill-color: rgb(0, 0, 238);
                    -webkit-text-stroke-color: rgb(0, 0, 238);
                  "
                />
              </div>
              <span _ngcontent-ng-c3112934927="" class="sub-link-text" style="cursor: pointer; display: inline-block; font-size: 15px; line-height: 15px; list-style-type: none; margin-block-start: 8px; margin-top: 8px; perspective-origin: 50% 50%; text-align: center; transform-origin: 50% 50%">הכל על Partner TV</span> </a
            ><a
              _ngcontent-ng-c3112934927=""
              class="content-box sub-link ng-star-inserted"
              href="https://www.partner.co.il/globalassets/global/netflixpush/netflix.html"
              style="
                border-block-color: rgb(0, 0, 238);
                border-color: rgb(0, 0, 238);
                border-inline-color: rgb(0, 0, 238);
                caret-color: rgb(0, 0, 238);
                color: rgb(0, 0, 238);
                column-rule-color: rgb(0, 0, 238);
                cursor: pointer;
                display: block;
                inline-size: 89px;
                list-style-type: none;
                margin-block-end: 22px;
                margin-bottom: 22px;
                margin-inline: 4%;
                margin-left: 4%;
                margin-right: 4%;
                outline-color: rgb(0, 0, 238);
                perspective-origin: 50% 50%;
                text-align: center;
                text-decoration: none solid rgb(0, 0, 238);
                text-emphasis-color: rgb(0, 0, 238);
                transform-origin: 50% 50%;
                width: 89px;
                -webkit-text-fill-color: rgb(0, 0, 238);
                -webkit-text-stroke-color: rgb(0, 0, 238);
              "
            >
              <div
                _ngcontent-ng-c3112934927=""
                class="image"
                style="
                  align-items: center;
                  block-size: 81px;
                  border-block-color: rgb(0, 0, 238);
                  border-color: rgb(0, 0, 238);
                  border-radius: 12px;
                  border-end-end-radius: 12px;
                  border-end-start-radius: 12px;
                  border-inline-color: rgb(0, 0, 238);
                  border-start-end-radius: 12px;
                  border-start-start-radius: 12px;
                  box-shadow: rgba(3, 69, 168, 0.08) 0px 4.352px 14.144px 0px;
                  caret-color: rgb(0, 0, 238);
                  color: rgb(0, 0, 238);
                  column-rule-color: rgb(0, 0, 238);
                  cursor: pointer;
                  display: flex;
                  height: 81px;
                  inline-size: 100%;
                  justify-content: center;
                  list-style-type: none;
                  outline-color: rgb(0, 0, 238);
                  perspective-origin: 50% 50%;
                  text-align: center;
                  text-decoration: none solid rgb(0, 0, 238);
                  text-emphasis-color: rgb(0, 0, 238);
                  transform-origin: 50% 50%;
                  width: 100%;
                  -webkit-text-fill-color: rgb(0, 0, 238);
                  -webkit-text-stroke-color: rgb(0, 0, 238);
                "
              >
                <img
                  _ngcontent-ng-c3112934927=""
                  src="./media/xfilvhsl/נטפליקס.png"
                  style="
                    block-size: auto;
                    border-block-color: rgb(0, 0, 238);
                    border-color: rgb(0, 0, 238);
                    border-inline-color: rgb(0, 0, 238);
                    caret-color: rgb(0, 0, 238);
                    color: rgb(0, 0, 238);
                    column-rule-color: rgb(0, 0, 238);
                    cursor: pointer;
                    display: block;
                    height: auto;
                    inline-size: auto;
                    list-style-type: none;
                    outline-color: rgb(0, 0, 238);
                    perspective-origin: 50% 50%;
                    text-align: center;
                    text-decoration: none solid rgb(0, 0, 238);
                    text-emphasis-color: rgb(0, 0, 238);
                    transform-origin: 50% 50%;
                    width: auto;
                    -webkit-text-fill-color: rgb(0, 0, 238);
                    -webkit-text-stroke-color: rgb(0, 0, 238);
                  "
                />
              </div>
              <span _ngcontent-ng-c3112934927="" class="sub-link-text" style="cursor: pointer; display: inline-block; font-size: 15px; line-height: 15px; list-style-type: none; margin-block-start: 8px; margin-top: 8px; perspective-origin: 50% 50%; text-align: center; transform-origin: 50% 50%">Netflix</span> </a
            ><a
              _ngcontent-ng-c3112934927=""
              class="content-box sub-link ng-star-inserted"
              href="https://tv.partner.co.il/"
              style="
                border-block-color: rgb(0, 0, 238);
                border-color: rgb(0, 0, 238);
                border-inline-color: rgb(0, 0, 238);
                caret-color: rgb(0, 0, 238);
                color: rgb(0, 0, 238);
                column-rule-color: rgb(0, 0, 238);
                cursor: pointer;
                display: block;
                inline-size: 89px;
                list-style-type: none;
                margin-block-end: 22px;
                margin-bottom: 22px;
                margin-inline: 4%;
                margin-left: 4%;
                margin-right: 4%;
                outline-color: rgb(0, 0, 238);
                perspective-origin: 50% 50%;
                text-align: center;
                text-decoration: none solid rgb(0, 0, 238);
                text-emphasis-color: rgb(0, 0, 238);
                transform-origin: 50% 50%;
                width: 89px;
                -webkit-text-fill-color: rgb(0, 0, 238);
                -webkit-text-stroke-color: rgb(0, 0, 238);
              "
            >
              <div
                _ngcontent-ng-c3112934927=""
                class="image"
                style="
                  align-items: center;
                  block-size: 81px;
                  border-block-color: rgb(0, 0, 238);
                  border-color: rgb(0, 0, 238);
                  border-radius: 12px;
                  border-end-end-radius: 12px;
                  border-end-start-radius: 12px;
                  border-inline-color: rgb(0, 0, 238);
                  border-start-end-radius: 12px;
                  border-start-start-radius: 12px;
                  box-shadow: rgba(3, 69, 168, 0.08) 0px 4.352px 14.144px 0px;
                  caret-color: rgb(0, 0, 238);
                  color: rgb(0, 0, 238);
                  column-rule-color: rgb(0, 0, 238);
                  cursor: pointer;
                  display: flex;
                  height: 81px;
                  inline-size: 100%;
                  justify-content: center;
                  list-style-type: none;
                  outline-color: rgb(0, 0, 238);
                  perspective-origin: 50% 50%;
                  text-align: center;
                  text-decoration: none solid rgb(0, 0, 238);
                  text-emphasis-color: rgb(0, 0, 238);
                  transform-origin: 50% 50%;
                  width: 100%;
                  -webkit-text-fill-color: rgb(0, 0, 238);
                  -webkit-text-stroke-color: rgb(0, 0, 238);
                "
              >
                <img
                  _ngcontent-ng-c3112934927=""
                  src="./media/spgcjtgo/pc.png"
                  style="
                    block-size: auto;
                    border-block-color: rgb(0, 0, 238);
                    border-color: rgb(0, 0, 238);
                    border-inline-color: rgb(0, 0, 238);
                    caret-color: rgb(0, 0, 238);
                    color: rgb(0, 0, 238);
                    column-rule-color: rgb(0, 0, 238);
                    cursor: pointer;
                    display: block;
                    height: auto;
                    inline-size: auto;
                    list-style-type: none;
                    outline-color: rgb(0, 0, 238);
                    perspective-origin: 50% 50%;
                    text-align: center;
                    text-decoration: none solid rgb(0, 0, 238);
                    text-emphasis-color: rgb(0, 0, 238);
                    transform-origin: 50% 50%;
                    width: auto;
                    -webkit-text-fill-color: rgb(0, 0, 238);
                    -webkit-text-stroke-color: rgb(0, 0, 238);
                  "
                />
              </div>
              <span _ngcontent-ng-c3112934927="" class="sub-link-text" style="cursor: pointer; display: inline-block; font-size: 15px; line-height: 15px; list-style-type: none; margin-block-start: 8px; margin-top: 8px; perspective-origin: 50% 50%; text-align: center; transform-origin: 50% 50%">צפייה ממחשב PC</span> </a
            ><a
              _ngcontent-ng-c3112934927=""
              class="content-box sub-link ng-star-inserted"
              href="https://www.partner.co.il/n/tv/tv-packages"
              style="
                border-block-color: rgb(0, 0, 238);
                border-color: rgb(0, 0, 238);
                border-inline-color: rgb(0, 0, 238);
                caret-color: rgb(0, 0, 238);
                color: rgb(0, 0, 238);
                column-rule-color: rgb(0, 0, 238);
                cursor: pointer;
                display: block;
                inline-size: 89px;
                list-style-type: none;
                margin-block-end: 22px;
                margin-bottom: 22px;
                margin-inline: 4%;
                margin-left: 4%;
                margin-right: 4%;
                outline-color: rgb(0, 0, 238);
                perspective-origin: 50% 50%;
                text-align: center;
                text-decoration: none solid rgb(0, 0, 238);
                text-emphasis-color: rgb(0, 0, 238);
                transform-origin: 50% 50%;
                width: 89px;
                -webkit-text-fill-color: rgb(0, 0, 238);
                -webkit-text-stroke-color: rgb(0, 0, 238);
              "
            >
              <div
                _ngcontent-ng-c3112934927=""
                class="image"
                style="
                  align-items: center;
                  block-size: 81px;
                  border-block-color: rgb(0, 0, 238);
                  border-color: rgb(0, 0, 238);
                  border-radius: 12px;
                  border-end-end-radius: 12px;
                  border-end-start-radius: 12px;
                  border-inline-color: rgb(0, 0, 238);
                  border-start-end-radius: 12px;
                  border-start-start-radius: 12px;
                  box-shadow: rgba(3, 69, 168, 0.08) 0px 4.352px 14.144px 0px;
                  caret-color: rgb(0, 0, 238);
                  color: rgb(0, 0, 238);
                  column-rule-color: rgb(0, 0, 238);
                  cursor: pointer;
                  display: flex;
                  height: 81px;
                  inline-size: 100%;
                  justify-content: center;
                  list-style-type: none;
                  outline-color: rgb(0, 0, 238);
                  perspective-origin: 50% 50%;
                  text-align: center;
                  text-decoration: none solid rgb(0, 0, 238);
                  text-emphasis-color: rgb(0, 0, 238);
                  transform-origin: 50% 50%;
                  width: 100%;
                  -webkit-text-fill-color: rgb(0, 0, 238);
                  -webkit-text-stroke-color: rgb(0, 0, 238);
                "
              >
                <img
                  _ngcontent-ng-c3112934927=""
                  src="./media/jj0npahb/חבילות-תוכן.png"
                  style="
                    block-size: auto;
                    border-block-color: rgb(0, 0, 238);
                    border-color: rgb(0, 0, 238);
                    border-inline-color: rgb(0, 0, 238);
                    caret-color: rgb(0, 0, 238);
                    color: rgb(0, 0, 238);
                    column-rule-color: rgb(0, 0, 238);
                    cursor: pointer;
                    display: block;
                    height: auto;
                    inline-size: auto;
                    list-style-type: none;
                    outline-color: rgb(0, 0, 238);
                    perspective-origin: 50% 50%;
                    text-align: center;
                    text-decoration: none solid rgb(0, 0, 238);
                    text-emphasis-color: rgb(0, 0, 238);
                    transform-origin: 50% 50%;
                    width: auto;
                    -webkit-text-fill-color: rgb(0, 0, 238);
                    -webkit-text-stroke-color: rgb(0, 0, 238);
                  "
                />
              </div>
              <span _ngcontent-ng-c3112934927="" class="sub-link-text" style="cursor: pointer; display: inline-block; font-size: 15px; line-height: 15px; list-style-type: none; margin-block-start: 8px; margin-top: 8px; perspective-origin: 50% 50%; text-align: center; transform-origin: 50% 50%">חבילות תוכן</span> </a
            ><a
              _ngcontent-ng-c3112934927=""
              class="content-box sub-link ng-star-inserted"
              href="https://www.partner.co.il/n/mypartner/tv/services"
              style="
                border-block-color: rgb(0, 0, 238);
                border-color: rgb(0, 0, 238);
                border-inline-color: rgb(0, 0, 238);
                caret-color: rgb(0, 0, 238);
                color: rgb(0, 0, 238);
                column-rule-color: rgb(0, 0, 238);
                cursor: pointer;
                display: block;
                inline-size: 89px;
                list-style-type: none;
                margin-block-end: 22px;
                margin-bottom: 22px;
                margin-inline: 4%;
                margin-left: 4%;
                margin-right: 4%;
                outline-color: rgb(0, 0, 238);
                perspective-origin: 50% 50%;
                text-align: center;
                text-decoration: none solid rgb(0, 0, 238);
                text-emphasis-color: rgb(0, 0, 238);
                transform-origin: 50% 50%;
                width: 89px;
                -webkit-text-fill-color: rgb(0, 0, 238);
                -webkit-text-stroke-color: rgb(0, 0, 238);
              "
            >
              <div
                _ngcontent-ng-c3112934927=""
                class="image"
                style="
                  align-items: center;
                  block-size: 81px;
                  border-block-color: rgb(0, 0, 238);
                  border-color: rgb(0, 0, 238);
                  border-radius: 12px;
                  border-end-end-radius: 12px;
                  border-end-start-radius: 12px;
                  border-inline-color: rgb(0, 0, 238);
                  border-start-end-radius: 12px;
                  border-start-start-radius: 12px;
                  box-shadow: rgba(3, 69, 168, 0.08) 0px 4.352px 14.144px 0px;
                  caret-color: rgb(0, 0, 238);
                  color: rgb(0, 0, 238);
                  column-rule-color: rgb(0, 0, 238);
                  cursor: pointer;
                  display: flex;
                  height: 81px;
                  inline-size: 100%;
                  justify-content: center;
                  list-style-type: none;
                  outline-color: rgb(0, 0, 238);
                  perspective-origin: 50% 50%;
                  text-align: center;
                  text-decoration: none solid rgb(0, 0, 238);
                  text-emphasis-color: rgb(0, 0, 238);
                  transform-origin: 50% 50%;
                  width: 100%;
                  -webkit-text-fill-color: rgb(0, 0, 238);
                  -webkit-text-stroke-color: rgb(0, 0, 238);
                "
              >
                <img
                  _ngcontent-ng-c3112934927=""
                  src="./media/tnvjttjl/איזור-אישי.png"
                  style="
                    block-size: auto;
                    border-block-color: rgb(0, 0, 238);
                    border-color: rgb(0, 0, 238);
                    border-inline-color: rgb(0, 0, 238);
                    caret-color: rgb(0, 0, 238);
                    color: rgb(0, 0, 238);
                    column-rule-color: rgb(0, 0, 238);
                    cursor: pointer;
                    display: block;
                    height: auto;
                    inline-size: auto;
                    list-style-type: none;
                    outline-color: rgb(0, 0, 238);
                    perspective-origin: 50% 50%;
                    text-align: center;
                    text-decoration: none solid rgb(0, 0, 238);
                    text-emphasis-color: rgb(0, 0, 238);
                    transform-origin: 50% 50%;
                    width: auto;
                    -webkit-text-fill-color: rgb(0, 0, 238);
                    -webkit-text-stroke-color: rgb(0, 0, 238);
                  "
                />
              </div>
              <span _ngcontent-ng-c3112934927="" class="sub-link-text" style="cursor: pointer; display: inline-block; font-size: 15px; line-height: 15px; list-style-type: none; margin-block-start: 8px; margin-top: 8px; perspective-origin: 50% 50%; text-align: center; transform-origin: 50% 50%">אזור אישי</span> </a
            ><a
              _ngcontent-ng-c3112934927=""
              class="content-box sub-link ng-star-inserted"
              href="https://www.partner.co.il/u/guide_home_front_command_app"
              style="
                border-block-color: rgb(0, 0, 238);
                border-color: rgb(0, 0, 238);
                border-inline-color: rgb(0, 0, 238);
                caret-color: rgb(0, 0, 238);
                color: rgb(0, 0, 238);
                column-rule-color: rgb(0, 0, 238);
                cursor: pointer;
                display: block;
                inline-size: 89px;
                list-style-type: none;
                margin-block-end: 22px;
                margin-bottom: 22px;
                margin-inline: 4%;
                margin-left: 4%;
                margin-right: 4%;
                outline-color: rgb(0, 0, 238);
                perspective-origin: 50% 50%;
                text-align: center;
                text-decoration: none solid rgb(0, 0, 238);
                text-emphasis-color: rgb(0, 0, 238);
                transform-origin: 50% 50%;
                width: 89px;
                -webkit-text-fill-color: rgb(0, 0, 238);
                -webkit-text-stroke-color: rgb(0, 0, 238);
              "
            >
              <div
                _ngcontent-ng-c3112934927=""
                class="image"
                style="
                  align-items: center;
                  block-size: 81px;
                  border-block-color: rgb(0, 0, 238);
                  border-color: rgb(0, 0, 238);
                  border-radius: 12px;
                  border-end-end-radius: 12px;
                  border-end-start-radius: 12px;
                  border-inline-color: rgb(0, 0, 238);
                  border-start-end-radius: 12px;
                  border-start-start-radius: 12px;
                  box-shadow: rgba(3, 69, 168, 0.08) 0px 4.352px 14.144px 0px;
                  caret-color: rgb(0, 0, 238);
                  color: rgb(0, 0, 238);
                  column-rule-color: rgb(0, 0, 238);
                  cursor: pointer;
                  display: flex;
                  height: 81px;
                  inline-size: 100%;
                  justify-content: center;
                  list-style-type: none;
                  outline-color: rgb(0, 0, 238);
                  perspective-origin: 50% 50%;
                  text-align: center;
                  text-decoration: none solid rgb(0, 0, 238);
                  text-emphasis-color: rgb(0, 0, 238);
                  transform-origin: 50% 50%;
                  width: 100%;
                  -webkit-text-fill-color: rgb(0, 0, 238);
                  -webkit-text-stroke-color: rgb(0, 0, 238);
                "
              >
                <img
                  _ngcontent-ng-c3112934927=""
                  src="./media/5scoz5dm/untitled-6-01.png"
                  style="
                    block-size: auto;
                    border-block-color: rgb(0, 0, 238);
                    border-color: rgb(0, 0, 238);
                    border-inline-color: rgb(0, 0, 238);
                    caret-color: rgb(0, 0, 238);
                    color: rgb(0, 0, 238);
                    column-rule-color: rgb(0, 0, 238);
                    cursor: pointer;
                    display: block;
                    height: auto;
                    inline-size: auto;
                    list-style-type: none;
                    outline-color: rgb(0, 0, 238);
                    perspective-origin: 50% 50%;
                    text-align: center;
                    text-decoration: none solid rgb(0, 0, 238);
                    text-emphasis-color: rgb(0, 0, 238);
                    transform-origin: 50% 50%;
                    width: auto;
                    -webkit-text-fill-color: rgb(0, 0, 238);
                    -webkit-text-stroke-color: rgb(0, 0, 238);
                  "
                />
              </div>
              <span _ngcontent-ng-c3112934927="" class="sub-link-text" style="cursor: pointer; display: inline-block; font-size: 15px; line-height: 15px; list-style-type: none; margin-block-start: 8px; margin-top: 8px; perspective-origin: 50% 50%; text-align: center; transform-origin: 50% 50%">התקנת יישומון פיקוד העורף</span> </a
            ><!---->
          </div>
          <!---->
        </li>
        <li
          _ngcontent-ng-c3112934927=""
          class="menu-item ng-star-inserted"
          style="block-size: 20px; inset: 0px; height: 20px; inline-size: 77.9375px; inset-block: 0px; inset-inline: 0px; list-style-type: none; min-block-size: auto; min-height: auto; min-inline-size: auto; min-width: auto; perspective-origin: 38.9688px 10px; position: relative; transform-origin: 38.9688px 10px; width: 77.9375px"
        >
          <a
            _ngcontent-ng-c3112934927=""
            class="tab-link ng-star-inserted"
            title="חשמל"
            target="_self"
            href="https://www.partner.co.il/n/partnerpower/lobby"
            style="block-size: 20px; cursor: pointer; display: block; font-size: 20px; height: 20px; inline-size: 77.9375px; line-height: 20px; list-style-type: none; padding-inline-end: 28px; padding-left: 28px; perspective-origin: 38.9688px 10px; text-align: right; transform-origin: 38.9688px 10px; width: 77.9375px"
            >חשמל</a
          ><!----><!----><!---->
        </li>
        <li
          _ngcontent-ng-c3112934927=""
          class="menu-item ng-star-inserted"
          style="block-size: 20px; inset: 0px; height: 20px; inline-size: 86.9375px; inset-block: 0px; inset-inline: 0px; list-style-type: none; min-block-size: auto; min-height: auto; min-inline-size: auto; min-width: auto; perspective-origin: 43.4688px 10px; position: relative; transform-origin: 43.4688px 10px; width: 86.9375px"
        >
          <!----><a
            _ngcontent-ng-c3112934927=""
            href="javascript:void(0);"
            class="tab-link arrow-link ng-star-inserted"
            data-id="7"
            style="block-size: 20px; cursor: pointer; display: flex; font-size: 20px; height: 20px; inline-size: 86.9531px; justify-content: space-between; line-height: 20px; list-style-type: none; padding-inline-end: 28px; padding-left: 28px; perspective-origin: 43.4688px 10px; text-align: right; transform-origin: 43.4766px 10px; width: 86.9531px"
            >חנות</a
          ><!---->
          <div
            _ngcontent-ng-c3112934927=""
            class="tab-content ng-star-inserted"
            style="
              background-color: rgb(255, 255, 255);
              block-size: auto;
              border-bottom-left-radius: 14px;
              border-bottom-right-radius: 14px;
              border-end-end-radius: 14px;
              border-end-start-radius: 14px;
              box-shadow: rgba(29, 137, 137, 0.06) 17px 14px 25px 0px, rgba(32, 156, 144, 0.08) -18px 16px 30px 0px, rgba(31, 161, 148, 0.1) 0px 4px 21px 0px inset;
              display: none;
              flex-wrap: wrap;
              height: auto;
              inline-size: 643px;
              inset-block-start: 59.5px;
              list-style-type: none;
              padding-block: 40px 20px;
              padding: 40px 51px 20px;
              padding-inline: 51px;
              perspective-origin: 50% 50%;
              position: absolute;
              text-align: right;
              top: 59.5px;
              transform-origin: 50% 50%;
              width: 643px;
            "
          >
            <a
              _ngcontent-ng-c3112934927=""
              class="content-box sub-link ng-star-inserted"
              href="https://store.partner.co.il/home"
              style="
                border-block-color: rgb(0, 0, 238);
                border-color: rgb(0, 0, 238);
                border-inline-color: rgb(0, 0, 238);
                caret-color: rgb(0, 0, 238);
                color: rgb(0, 0, 238);
                column-rule-color: rgb(0, 0, 238);
                cursor: pointer;
                display: block;
                inline-size: 89px;
                list-style-type: none;
                margin-block-end: 22px;
                margin-bottom: 22px;
                margin-inline: 4%;
                margin-left: 4%;
                margin-right: 4%;
                outline-color: rgb(0, 0, 238);
                perspective-origin: 50% 50%;
                text-align: center;
                text-decoration: none solid rgb(0, 0, 238);
                text-emphasis-color: rgb(0, 0, 238);
                transform-origin: 50% 50%;
                width: 89px;
                -webkit-text-fill-color: rgb(0, 0, 238);
                -webkit-text-stroke-color: rgb(0, 0, 238);
              "
            >
              <div
                _ngcontent-ng-c3112934927=""
                class="image"
                style="
                  align-items: center;
                  block-size: 81px;
                  border-block-color: rgb(0, 0, 238);
                  border-color: rgb(0, 0, 238);
                  border-radius: 12px;
                  border-end-end-radius: 12px;
                  border-end-start-radius: 12px;
                  border-inline-color: rgb(0, 0, 238);
                  border-start-end-radius: 12px;
                  border-start-start-radius: 12px;
                  box-shadow: rgba(3, 69, 168, 0.08) 0px 4.352px 14.144px 0px;
                  caret-color: rgb(0, 0, 238);
                  color: rgb(0, 0, 238);
                  column-rule-color: rgb(0, 0, 238);
                  cursor: pointer;
                  display: flex;
                  height: 81px;
                  inline-size: 100%;
                  justify-content: center;
                  list-style-type: none;
                  outline-color: rgb(0, 0, 238);
                  perspective-origin: 50% 50%;
                  text-align: center;
                  text-decoration: none solid rgb(0, 0, 238);
                  text-emphasis-color: rgb(0, 0, 238);
                  transform-origin: 50% 50%;
                  width: 100%;
                  -webkit-text-fill-color: rgb(0, 0, 238);
                  -webkit-text-stroke-color: rgb(0, 0, 238);
                "
              >
                <img
                  _ngcontent-ng-c3112934927=""
                  src="./media/1fvlu523/group-26086217999.svg"
                  style="
                    block-size: auto;
                    border-block-color: rgb(0, 0, 238);
                    border-color: rgb(0, 0, 238);
                    border-inline-color: rgb(0, 0, 238);
                    caret-color: rgb(0, 0, 238);
                    color: rgb(0, 0, 238);
                    column-rule-color: rgb(0, 0, 238);
                    cursor: pointer;
                    display: block;
                    height: auto;
                    inline-size: auto;
                    list-style-type: none;
                    outline-color: rgb(0, 0, 238);
                    perspective-origin: 50% 50%;
                    text-align: center;
                    text-decoration: none solid rgb(0, 0, 238);
                    text-emphasis-color: rgb(0, 0, 238);
                    transform-origin: 50% 50%;
                    width: auto;
                    -webkit-text-fill-color: rgb(0, 0, 238);
                    -webkit-text-stroke-color: rgb(0, 0, 238);
                  "
                />
              </div>
              <span _ngcontent-ng-c3112934927="" class="sub-link-text" style="cursor: pointer; display: inline-block; font-size: 15px; line-height: 15px; list-style-type: none; margin-block-start: 8px; margin-top: 8px; perspective-origin: 50% 50%; text-align: center; transform-origin: 50% 50%">Partner Store</span> </a
            ><a
              _ngcontent-ng-c3112934927=""
              class="content-box sub-link ng-star-inserted"
              href="https://www.partner.co.il/u/eilat-store-campaign"
              style="
                border-block-color: rgb(0, 0, 238);
                border-color: rgb(0, 0, 238);
                border-inline-color: rgb(0, 0, 238);
                caret-color: rgb(0, 0, 238);
                color: rgb(0, 0, 238);
                column-rule-color: rgb(0, 0, 238);
                cursor: pointer;
                display: block;
                inline-size: 89px;
                list-style-type: none;
                margin-block-end: 22px;
                margin-bottom: 22px;
                margin-inline: 4%;
                margin-left: 4%;
                margin-right: 4%;
                outline-color: rgb(0, 0, 238);
                perspective-origin: 50% 50%;
                text-align: center;
                text-decoration: none solid rgb(0, 0, 238);
                text-emphasis-color: rgb(0, 0, 238);
                transform-origin: 50% 50%;
                width: 89px;
                -webkit-text-fill-color: rgb(0, 0, 238);
                -webkit-text-stroke-color: rgb(0, 0, 238);
              "
            >
              <div
                _ngcontent-ng-c3112934927=""
                class="image"
                style="
                  align-items: center;
                  block-size: 81px;
                  border-block-color: rgb(0, 0, 238);
                  border-color: rgb(0, 0, 238);
                  border-radius: 12px;
                  border-end-end-radius: 12px;
                  border-end-start-radius: 12px;
                  border-inline-color: rgb(0, 0, 238);
                  border-start-end-radius: 12px;
                  border-start-start-radius: 12px;
                  box-shadow: rgba(3, 69, 168, 0.08) 0px 4.352px 14.144px 0px;
                  caret-color: rgb(0, 0, 238);
                  color: rgb(0, 0, 238);
                  column-rule-color: rgb(0, 0, 238);
                  cursor: pointer;
                  display: flex;
                  height: 81px;
                  inline-size: 100%;
                  justify-content: center;
                  list-style-type: none;
                  outline-color: rgb(0, 0, 238);
                  perspective-origin: 50% 50%;
                  text-align: center;
                  text-decoration: none solid rgb(0, 0, 238);
                  text-emphasis-color: rgb(0, 0, 238);
                  transform-origin: 50% 50%;
                  width: 100%;
                  -webkit-text-fill-color: rgb(0, 0, 238);
                  -webkit-text-stroke-color: rgb(0, 0, 238);
                "
              >
                <img
                  _ngcontent-ng-c3112934927=""
                  src="./media/yymnv3zk/group-26086333.svg"
                  style="
                    block-size: auto;
                    border-block-color: rgb(0, 0, 238);
                    border-color: rgb(0, 0, 238);
                    border-inline-color: rgb(0, 0, 238);
                    caret-color: rgb(0, 0, 238);
                    color: rgb(0, 0, 238);
                    column-rule-color: rgb(0, 0, 238);
                    cursor: pointer;
                    display: block;
                    height: auto;
                    inline-size: auto;
                    list-style-type: none;
                    outline-color: rgb(0, 0, 238);
                    perspective-origin: 50% 50%;
                    text-align: center;
                    text-decoration: none solid rgb(0, 0, 238);
                    text-emphasis-color: rgb(0, 0, 238);
                    transform-origin: 50% 50%;
                    width: auto;
                    -webkit-text-fill-color: rgb(0, 0, 238);
                    -webkit-text-stroke-color: rgb(0, 0, 238);
                  "
                />
              </div>
              <span _ngcontent-ng-c3112934927="" class="sub-link-text" style="cursor: pointer; display: inline-block; font-size: 15px; line-height: 15px; list-style-type: none; margin-block-start: 8px; margin-top: 8px; perspective-origin: 50% 50%; text-align: center; transform-origin: 50% 50%">שיריון מוצרים באילת</span> </a
            ><!---->
          </div>
          <!---->
        </li>
        <li
          _ngcontent-ng-c3112934927=""
          class="menu-item ng-star-inserted"
          style="block-size: 20px; inset: 0px; height: 20px; inline-size: 161.5px; inset-block: 0px; inset-inline: 0px; list-style-type: none; min-block-size: auto; min-height: auto; min-inline-size: auto; min-width: auto; perspective-origin: 80.75px 10px; position: relative; transform-origin: 80.75px 10px; width: 161.5px"
        >
          <!----><a
            _ngcontent-ng-c3112934927=""
            href="javascript:void(0);"
            class="tab-link arrow-link ng-star-inserted"
            data-id="8"
            style="block-size: 20px; cursor: pointer; display: flex; font-size: 20px; height: 20px; inline-size: 161.5px; justify-content: space-between; line-height: 20px; list-style-type: none; padding-inline-end: 28px; padding-left: 28px; perspective-origin: 80.75px 10px; text-align: right; transform-origin: 80.75px 10px; width: 161.5px"
            >שירות ותמיכה</a
          ><!---->
          <div
            _ngcontent-ng-c3112934927=""
            class="tab-content ng-star-inserted"
            style="
              background-color: rgb(255, 255, 255);
              block-size: auto;
              border-bottom-left-radius: 14px;
              border-bottom-right-radius: 14px;
              border-end-end-radius: 14px;
              border-end-start-radius: 14px;
              box-shadow: rgba(29, 137, 137, 0.06) 17px 14px 25px 0px, rgba(32, 156, 144, 0.08) -18px 16px 30px 0px, rgba(31, 161, 148, 0.1) 0px 4px 21px 0px inset;
              display: none;
              flex-wrap: wrap;
              height: auto;
              inline-size: 643px;
              inset-block-start: 59.5px;
              list-style-type: none;
              padding-block: 40px 20px;
              padding: 40px 51px 20px;
              padding-inline: 51px;
              perspective-origin: 50% 50%;
              position: absolute;
              text-align: right;
              top: 59.5px;
              transform-origin: 50% 50%;
              width: 643px;
            "
          >
            <a
              _ngcontent-ng-c3112934927=""
              class="content-box sub-link ng-star-inserted"
              href="https://www.partner.co.il/n/moving/lobby"
              style="
                border-block-color: rgb(0, 0, 238);
                border-color: rgb(0, 0, 238);
                border-inline-color: rgb(0, 0, 238);
                caret-color: rgb(0, 0, 238);
                color: rgb(0, 0, 238);
                column-rule-color: rgb(0, 0, 238);
                cursor: pointer;
                display: block;
                inline-size: 89px;
                list-style-type: none;
                margin-block-end: 22px;
                margin-bottom: 22px;
                margin-inline: 4%;
                margin-left: 4%;
                margin-right: 4%;
                outline-color: rgb(0, 0, 238);
                perspective-origin: 50% 50%;
                text-align: center;
                text-decoration: none solid rgb(0, 0, 238);
                text-emphasis-color: rgb(0, 0, 238);
                transform-origin: 50% 50%;
                width: 89px;
                -webkit-text-fill-color: rgb(0, 0, 238);
                -webkit-text-stroke-color: rgb(0, 0, 238);
              "
            >
              <div
                _ngcontent-ng-c3112934927=""
                class="image"
                style="
                  align-items: center;
                  block-size: 81px;
                  border-block-color: rgb(0, 0, 238);
                  border-color: rgb(0, 0, 238);
                  border-radius: 12px;
                  border-end-end-radius: 12px;
                  border-end-start-radius: 12px;
                  border-inline-color: rgb(0, 0, 238);
                  border-start-end-radius: 12px;
                  border-start-start-radius: 12px;
                  box-shadow: rgba(3, 69, 168, 0.08) 0px 4.352px 14.144px 0px;
                  caret-color: rgb(0, 0, 238);
                  color: rgb(0, 0, 238);
                  column-rule-color: rgb(0, 0, 238);
                  cursor: pointer;
                  display: flex;
                  height: 81px;
                  inline-size: 100%;
                  justify-content: center;
                  list-style-type: none;
                  outline-color: rgb(0, 0, 238);
                  perspective-origin: 50% 50%;
                  text-align: center;
                  text-decoration: none solid rgb(0, 0, 238);
                  text-emphasis-color: rgb(0, 0, 238);
                  transform-origin: 50% 50%;
                  width: 100%;
                  -webkit-text-fill-color: rgb(0, 0, 238);
                  -webkit-text-stroke-color: rgb(0, 0, 238);
                "
              >
                <img
                  _ngcontent-ng-c3112934927=""
                  src="./media/jprcdllp/מעבר-דירה-חדש.png"
                  style="
                    block-size: auto;
                    border-block-color: rgb(0, 0, 238);
                    border-color: rgb(0, 0, 238);
                    border-inline-color: rgb(0, 0, 238);
                    caret-color: rgb(0, 0, 238);
                    color: rgb(0, 0, 238);
                    column-rule-color: rgb(0, 0, 238);
                    cursor: pointer;
                    display: block;
                    height: auto;
                    inline-size: auto;
                    list-style-type: none;
                    outline-color: rgb(0, 0, 238);
                    perspective-origin: 50% 50%;
                    text-align: center;
                    text-decoration: none solid rgb(0, 0, 238);
                    text-emphasis-color: rgb(0, 0, 238);
                    transform-origin: 50% 50%;
                    width: auto;
                    -webkit-text-fill-color: rgb(0, 0, 238);
                    -webkit-text-stroke-color: rgb(0, 0, 238);
                  "
                />
              </div>
              <span _ngcontent-ng-c3112934927="" class="sub-link-text" style="cursor: pointer; display: inline-block; font-size: 15px; line-height: 15px; list-style-type: none; margin-block-start: 8px; margin-top: 8px; perspective-origin: 50% 50%; text-align: center; transform-origin: 50% 50%">מעבר דירה</span> </a
            ><a
              _ngcontent-ng-c3112934927=""
              class="content-box sub-link ng-star-inserted"
              href="https://www.partner.co.il/n/serviceandsupport/lobby?processId=28917"
              style="
                border-block-color: rgb(0, 0, 238);
                border-color: rgb(0, 0, 238);
                border-inline-color: rgb(0, 0, 238);
                caret-color: rgb(0, 0, 238);
                color: rgb(0, 0, 238);
                column-rule-color: rgb(0, 0, 238);
                cursor: pointer;
                display: block;
                inline-size: 89px;
                list-style-type: none;
                margin-block-end: 22px;
                margin-bottom: 22px;
                margin-inline: 4%;
                margin-left: 4%;
                margin-right: 4%;
                outline-color: rgb(0, 0, 238);
                perspective-origin: 50% 50%;
                text-align: center;
                text-decoration: none solid rgb(0, 0, 238);
                text-emphasis-color: rgb(0, 0, 238);
                transform-origin: 50% 50%;
                width: 89px;
                -webkit-text-fill-color: rgb(0, 0, 238);
                -webkit-text-stroke-color: rgb(0, 0, 238);
              "
            >
              <div
                _ngcontent-ng-c3112934927=""
                class="image"
                style="
                  align-items: center;
                  block-size: 81px;
                  border-block-color: rgb(0, 0, 238);
                  border-color: rgb(0, 0, 238);
                  border-radius: 12px;
                  border-end-end-radius: 12px;
                  border-end-start-radius: 12px;
                  border-inline-color: rgb(0, 0, 238);
                  border-start-end-radius: 12px;
                  border-start-start-radius: 12px;
                  box-shadow: rgba(3, 69, 168, 0.08) 0px 4.352px 14.144px 0px;
                  caret-color: rgb(0, 0, 238);
                  color: rgb(0, 0, 238);
                  column-rule-color: rgb(0, 0, 238);
                  cursor: pointer;
                  display: flex;
                  height: 81px;
                  inline-size: 100%;
                  justify-content: center;
                  list-style-type: none;
                  outline-color: rgb(0, 0, 238);
                  perspective-origin: 50% 50%;
                  text-align: center;
                  text-decoration: none solid rgb(0, 0, 238);
                  text-emphasis-color: rgb(0, 0, 238);
                  transform-origin: 50% 50%;
                  width: 100%;
                  -webkit-text-fill-color: rgb(0, 0, 238);
                  -webkit-text-stroke-color: rgb(0, 0, 238);
                "
              >
                <img
                  _ngcontent-ng-c3112934927=""
                  src="./media/ed5j1ph0/טלוויזיה.png"
                  style="
                    block-size: auto;
                    border-block-color: rgb(0, 0, 238);
                    border-color: rgb(0, 0, 238);
                    border-inline-color: rgb(0, 0, 238);
                    caret-color: rgb(0, 0, 238);
                    color: rgb(0, 0, 238);
                    column-rule-color: rgb(0, 0, 238);
                    cursor: pointer;
                    display: block;
                    height: auto;
                    inline-size: auto;
                    list-style-type: none;
                    outline-color: rgb(0, 0, 238);
                    perspective-origin: 50% 50%;
                    text-align: center;
                    text-decoration: none solid rgb(0, 0, 238);
                    text-emphasis-color: rgb(0, 0, 238);
                    transform-origin: 50% 50%;
                    width: auto;
                    -webkit-text-fill-color: rgb(0, 0, 238);
                    -webkit-text-stroke-color: rgb(0, 0, 238);
                  "
                />
              </div>
              <span _ngcontent-ng-c3112934927="" class="sub-link-text" style="cursor: pointer; display: inline-block; font-size: 15px; line-height: 15px; list-style-type: none; margin-block-start: 8px; margin-top: 8px; perspective-origin: 50% 50%; text-align: center; transform-origin: 50% 50%">שירות ותמיכה בטלוויזיה</span> </a
            ><a
              _ngcontent-ng-c3112934927=""
              class="content-box sub-link ng-star-inserted"
              href="https://www.partner.co.il/n/serviceandsupport/lobby?processId=48209"
              style="
                border-block-color: rgb(0, 0, 238);
                border-color: rgb(0, 0, 238);
                border-inline-color: rgb(0, 0, 238);
                caret-color: rgb(0, 0, 238);
                color: rgb(0, 0, 238);
                column-rule-color: rgb(0, 0, 238);
                cursor: pointer;
                display: block;
                inline-size: 89px;
                list-style-type: none;
                margin-block-end: 22px;
                margin-bottom: 22px;
                margin-inline: 4%;
                margin-left: 4%;
                margin-right: 4%;
                outline-color: rgb(0, 0, 238);
                perspective-origin: 50% 50%;
                text-align: center;
                text-decoration: none solid rgb(0, 0, 238);
                text-emphasis-color: rgb(0, 0, 238);
                transform-origin: 50% 50%;
                width: 89px;
                -webkit-text-fill-color: rgb(0, 0, 238);
                -webkit-text-stroke-color: rgb(0, 0, 238);
              "
            >
              <div
                _ngcontent-ng-c3112934927=""
                class="image"
                style="
                  align-items: center;
                  block-size: 81px;
                  border-block-color: rgb(0, 0, 238);
                  border-color: rgb(0, 0, 238);
                  border-radius: 12px;
                  border-end-end-radius: 12px;
                  border-end-start-radius: 12px;
                  border-inline-color: rgb(0, 0, 238);
                  border-start-end-radius: 12px;
                  border-start-start-radius: 12px;
                  box-shadow: rgba(3, 69, 168, 0.08) 0px 4.352px 14.144px 0px;
                  caret-color: rgb(0, 0, 238);
                  color: rgb(0, 0, 238);
                  column-rule-color: rgb(0, 0, 238);
                  cursor: pointer;
                  display: flex;
                  height: 81px;
                  inline-size: 100%;
                  justify-content: center;
                  list-style-type: none;
                  outline-color: rgb(0, 0, 238);
                  perspective-origin: 50% 50%;
                  text-align: center;
                  text-decoration: none solid rgb(0, 0, 238);
                  text-emphasis-color: rgb(0, 0, 238);
                  transform-origin: 50% 50%;
                  width: 100%;
                  -webkit-text-fill-color: rgb(0, 0, 238);
                  -webkit-text-stroke-color: rgb(0, 0, 238);
                "
              >
                <img
                  _ngcontent-ng-c3112934927=""
                  src="./media/bloln2k0/סלולר.png"
                  style="
                    block-size: auto;
                    border-block-color: rgb(0, 0, 238);
                    border-color: rgb(0, 0, 238);
                    border-inline-color: rgb(0, 0, 238);
                    caret-color: rgb(0, 0, 238);
                    color: rgb(0, 0, 238);
                    column-rule-color: rgb(0, 0, 238);
                    cursor: pointer;
                    display: block;
                    height: auto;
                    inline-size: auto;
                    list-style-type: none;
                    outline-color: rgb(0, 0, 238);
                    perspective-origin: 50% 50%;
                    text-align: center;
                    text-decoration: none solid rgb(0, 0, 238);
                    text-emphasis-color: rgb(0, 0, 238);
                    transform-origin: 50% 50%;
                    width: auto;
                    -webkit-text-fill-color: rgb(0, 0, 238);
                    -webkit-text-stroke-color: rgb(0, 0, 238);
                  "
                />
              </div>
              <span _ngcontent-ng-c3112934927="" class="sub-link-text" style="cursor: pointer; display: inline-block; font-size: 15px; line-height: 15px; list-style-type: none; margin-block-start: 8px; margin-top: 8px; perspective-origin: 50% 50%; text-align: center; transform-origin: 50% 50%">שירות ותמיכה בסלולר</span> </a
            ><a
              _ngcontent-ng-c3112934927=""
              class="content-box sub-link ng-star-inserted"
              href="https://www.partner.co.il/n/serviceandsupport/lobby?processId=28944"
              style="
                border-block-color: rgb(0, 0, 238);
                border-color: rgb(0, 0, 238);
                border-inline-color: rgb(0, 0, 238);
                caret-color: rgb(0, 0, 238);
                color: rgb(0, 0, 238);
                column-rule-color: rgb(0, 0, 238);
                cursor: pointer;
                display: block;
                inline-size: 89px;
                list-style-type: none;
                margin-block-end: 22px;
                margin-bottom: 22px;
                margin-inline: 4%;
                margin-left: 4%;
                margin-right: 4%;
                outline-color: rgb(0, 0, 238);
                perspective-origin: 50% 50%;
                text-align: center;
                text-decoration: none solid rgb(0, 0, 238);
                text-emphasis-color: rgb(0, 0, 238);
                transform-origin: 50% 50%;
                width: 89px;
                -webkit-text-fill-color: rgb(0, 0, 238);
                -webkit-text-stroke-color: rgb(0, 0, 238);
              "
            >
              <div
                _ngcontent-ng-c3112934927=""
                class="image"
                style="
                  align-items: center;
                  block-size: 81px;
                  border-block-color: rgb(0, 0, 238);
                  border-color: rgb(0, 0, 238);
                  border-radius: 12px;
                  border-end-end-radius: 12px;
                  border-end-start-radius: 12px;
                  border-inline-color: rgb(0, 0, 238);
                  border-start-end-radius: 12px;
                  border-start-start-radius: 12px;
                  box-shadow: rgba(3, 69, 168, 0.08) 0px 4.352px 14.144px 0px;
                  caret-color: rgb(0, 0, 238);
                  color: rgb(0, 0, 238);
                  column-rule-color: rgb(0, 0, 238);
                  cursor: pointer;
                  display: flex;
                  height: 81px;
                  inline-size: 100%;
                  justify-content: center;
                  list-style-type: none;
                  outline-color: rgb(0, 0, 238);
                  perspective-origin: 50% 50%;
                  text-align: center;
                  text-decoration: none solid rgb(0, 0, 238);
                  text-emphasis-color: rgb(0, 0, 238);
                  transform-origin: 50% 50%;
                  width: 100%;
                  -webkit-text-fill-color: rgb(0, 0, 238);
                  -webkit-text-stroke-color: rgb(0, 0, 238);
                "
              >
                <img
                  _ngcontent-ng-c3112934927=""
                  src="./media/4sopkv4n/אינטרנט-וטלפון.png"
                  style="
                    block-size: auto;
                    border-block-color: rgb(0, 0, 238);
                    border-color: rgb(0, 0, 238);
                    border-inline-color: rgb(0, 0, 238);
                    caret-color: rgb(0, 0, 238);
                    color: rgb(0, 0, 238);
                    column-rule-color: rgb(0, 0, 238);
                    cursor: pointer;
                    display: block;
                    height: auto;
                    inline-size: auto;
                    list-style-type: none;
                    outline-color: rgb(0, 0, 238);
                    perspective-origin: 50% 50%;
                    text-align: center;
                    text-decoration: none solid rgb(0, 0, 238);
                    text-emphasis-color: rgb(0, 0, 238);
                    transform-origin: 50% 50%;
                    width: auto;
                    -webkit-text-fill-color: rgb(0, 0, 238);
                    -webkit-text-stroke-color: rgb(0, 0, 238);
                  "
                />
              </div>
              <span _ngcontent-ng-c3112934927="" class="sub-link-text" style="cursor: pointer; display: inline-block; font-size: 15px; line-height: 15px; list-style-type: none; margin-block-start: 8px; margin-top: 8px; perspective-origin: 50% 50%; text-align: center; transform-origin: 50% 50%">שירות ותמיכה באינטרנט ובטלפון</span> </a
            ><a
              _ngcontent-ng-c3112934927=""
              class="content-box sub-link ng-star-inserted"
              href="https://www.partner.co.il/n/servicecenter/"
              style="
                border-block-color: rgb(0, 0, 238);
                border-color: rgb(0, 0, 238);
                border-inline-color: rgb(0, 0, 238);
                caret-color: rgb(0, 0, 238);
                color: rgb(0, 0, 238);
                column-rule-color: rgb(0, 0, 238);
                cursor: pointer;
                display: block;
                inline-size: 89px;
                list-style-type: none;
                margin-block-end: 22px;
                margin-bottom: 22px;
                margin-inline: 4%;
                margin-left: 4%;
                margin-right: 4%;
                outline-color: rgb(0, 0, 238);
                perspective-origin: 50% 50%;
                text-align: center;
                text-decoration: none solid rgb(0, 0, 238);
                text-emphasis-color: rgb(0, 0, 238);
                transform-origin: 50% 50%;
                width: 89px;
                -webkit-text-fill-color: rgb(0, 0, 238);
                -webkit-text-stroke-color: rgb(0, 0, 238);
              "
            >
              <div
                _ngcontent-ng-c3112934927=""
                class="image"
                style="
                  align-items: center;
                  block-size: 81px;
                  border-block-color: rgb(0, 0, 238);
                  border-color: rgb(0, 0, 238);
                  border-radius: 12px;
                  border-end-end-radius: 12px;
                  border-end-start-radius: 12px;
                  border-inline-color: rgb(0, 0, 238);
                  border-start-end-radius: 12px;
                  border-start-start-radius: 12px;
                  box-shadow: rgba(3, 69, 168, 0.08) 0px 4.352px 14.144px 0px;
                  caret-color: rgb(0, 0, 238);
                  color: rgb(0, 0, 238);
                  column-rule-color: rgb(0, 0, 238);
                  cursor: pointer;
                  display: flex;
                  height: 81px;
                  inline-size: 100%;
                  justify-content: center;
                  list-style-type: none;
                  outline-color: rgb(0, 0, 238);
                  perspective-origin: 50% 50%;
                  text-align: center;
                  text-decoration: none solid rgb(0, 0, 238);
                  text-emphasis-color: rgb(0, 0, 238);
                  transform-origin: 50% 50%;
                  width: 100%;
                  -webkit-text-fill-color: rgb(0, 0, 238);
                  -webkit-text-stroke-color: rgb(0, 0, 238);
                "
              >
                <img
                  _ngcontent-ng-c3112934927=""
                  src="./media/cqulwovh/מרכזי-שירות.png"
                  style="
                    block-size: auto;
                    border-block-color: rgb(0, 0, 238);
                    border-color: rgb(0, 0, 238);
                    border-inline-color: rgb(0, 0, 238);
                    caret-color: rgb(0, 0, 238);
                    color: rgb(0, 0, 238);
                    column-rule-color: rgb(0, 0, 238);
                    cursor: pointer;
                    display: block;
                    height: auto;
                    inline-size: auto;
                    list-style-type: none;
                    outline-color: rgb(0, 0, 238);
                    perspective-origin: 50% 50%;
                    text-align: center;
                    text-decoration: none solid rgb(0, 0, 238);
                    text-emphasis-color: rgb(0, 0, 238);
                    transform-origin: 50% 50%;
                    width: auto;
                    -webkit-text-fill-color: rgb(0, 0, 238);
                    -webkit-text-stroke-color: rgb(0, 0, 238);
                  "
                />
              </div>
              <span _ngcontent-ng-c3112934927="" class="sub-link-text" style="cursor: pointer; display: inline-block; font-size: 15px; line-height: 15px; list-style-type: none; margin-block-start: 8px; margin-top: 8px; perspective-origin: 50% 50%; text-align: center; transform-origin: 50% 50%">מרכזי שירות ומכירה</span> </a
            ><a
              _ngcontent-ng-c3112934927=""
              class="content-box sub-link ng-star-inserted"
              href="https://www.partner.co.il/n/miniapps/self-services-catalog"
              style="
                border-block-color: rgb(0, 0, 238);
                border-color: rgb(0, 0, 238);
                border-inline-color: rgb(0, 0, 238);
                caret-color: rgb(0, 0, 238);
                color: rgb(0, 0, 238);
                column-rule-color: rgb(0, 0, 238);
                cursor: pointer;
                display: block;
                inline-size: 89px;
                list-style-type: none;
                margin-block-end: 22px;
                margin-bottom: 22px;
                margin-inline: 4%;
                margin-left: 4%;
                margin-right: 4%;
                outline-color: rgb(0, 0, 238);
                perspective-origin: 50% 50%;
                text-align: center;
                text-decoration: none solid rgb(0, 0, 238);
                text-emphasis-color: rgb(0, 0, 238);
                transform-origin: 50% 50%;
                width: 89px;
                -webkit-text-fill-color: rgb(0, 0, 238);
                -webkit-text-stroke-color: rgb(0, 0, 238);
              "
            >
              <div
                _ngcontent-ng-c3112934927=""
                class="image"
                style="
                  align-items: center;
                  block-size: 81px;
                  border-block-color: rgb(0, 0, 238);
                  border-color: rgb(0, 0, 238);
                  border-radius: 12px;
                  border-end-end-radius: 12px;
                  border-end-start-radius: 12px;
                  border-inline-color: rgb(0, 0, 238);
                  border-start-end-radius: 12px;
                  border-start-start-radius: 12px;
                  box-shadow: rgba(3, 69, 168, 0.08) 0px 4.352px 14.144px 0px;
                  caret-color: rgb(0, 0, 238);
                  color: rgb(0, 0, 238);
                  column-rule-color: rgb(0, 0, 238);
                  cursor: pointer;
                  display: flex;
                  height: 81px;
                  inline-size: 100%;
                  justify-content: center;
                  list-style-type: none;
                  outline-color: rgb(0, 0, 238);
                  perspective-origin: 50% 50%;
                  text-align: center;
                  text-decoration: none solid rgb(0, 0, 238);
                  text-emphasis-color: rgb(0, 0, 238);
                  transform-origin: 50% 50%;
                  width: 100%;
                  -webkit-text-fill-color: rgb(0, 0, 238);
                  -webkit-text-stroke-color: rgb(0, 0, 238);
                "
              >
                <img
                  _ngcontent-ng-c3112934927=""
                  src="./media/0zjlkxeq/פעולות-בשירות-עצמי.png"
                  style="
                    block-size: auto;
                    border-block-color: rgb(0, 0, 238);
                    border-color: rgb(0, 0, 238);
                    border-inline-color: rgb(0, 0, 238);
                    caret-color: rgb(0, 0, 238);
                    color: rgb(0, 0, 238);
                    column-rule-color: rgb(0, 0, 238);
                    cursor: pointer;
                    display: block;
                    height: auto;
                    inline-size: auto;
                    list-style-type: none;
                    outline-color: rgb(0, 0, 238);
                    perspective-origin: 50% 50%;
                    text-align: center;
                    text-decoration: none solid rgb(0, 0, 238);
                    text-emphasis-color: rgb(0, 0, 238);
                    transform-origin: 50% 50%;
                    width: auto;
                    -webkit-text-fill-color: rgb(0, 0, 238);
                    -webkit-text-stroke-color: rgb(0, 0, 238);
                  "
                />
              </div>
              <span _ngcontent-ng-c3112934927="" class="sub-link-text" style="cursor: pointer; display: inline-block; font-size: 15px; line-height: 15px; list-style-type: none; margin-block-start: 8px; margin-top: 8px; perspective-origin: 50% 50%; text-align: center; transform-origin: 50% 50%">פעולות בשירות עצמי</span> </a
            ><a
              _ngcontent-ng-c3112934927=""
              class="content-box sub-link ng-star-inserted"
              href="https://www.partner.co.il/n/serviceandsupport/"
              style="
                border-block-color: rgb(0, 0, 238);
                border-color: rgb(0, 0, 238);
                border-inline-color: rgb(0, 0, 238);
                caret-color: rgb(0, 0, 238);
                color: rgb(0, 0, 238);
                column-rule-color: rgb(0, 0, 238);
                cursor: pointer;
                display: block;
                inline-size: 89px;
                list-style-type: none;
                margin-block-end: 22px;
                margin-bottom: 22px;
                margin-inline: 4%;
                margin-left: 4%;
                margin-right: 4%;
                outline-color: rgb(0, 0, 238);
                perspective-origin: 50% 50%;
                text-align: center;
                text-decoration: none solid rgb(0, 0, 238);
                text-emphasis-color: rgb(0, 0, 238);
                transform-origin: 50% 50%;
                width: 89px;
                -webkit-text-fill-color: rgb(0, 0, 238);
                -webkit-text-stroke-color: rgb(0, 0, 238);
              "
            >
              <div
                _ngcontent-ng-c3112934927=""
                class="image"
                style="
                  align-items: center;
                  block-size: 81px;
                  border-block-color: rgb(0, 0, 238);
                  border-color: rgb(0, 0, 238);
                  border-radius: 12px;
                  border-end-end-radius: 12px;
                  border-end-start-radius: 12px;
                  border-inline-color: rgb(0, 0, 238);
                  border-start-end-radius: 12px;
                  border-start-start-radius: 12px;
                  box-shadow: rgba(3, 69, 168, 0.08) 0px 4.352px 14.144px 0px;
                  caret-color: rgb(0, 0, 238);
                  color: rgb(0, 0, 238);
                  column-rule-color: rgb(0, 0, 238);
                  cursor: pointer;
                  display: flex;
                  height: 81px;
                  inline-size: 100%;
                  justify-content: center;
                  list-style-type: none;
                  outline-color: rgb(0, 0, 238);
                  perspective-origin: 50% 50%;
                  text-align: center;
                  text-decoration: none solid rgb(0, 0, 238);
                  text-emphasis-color: rgb(0, 0, 238);
                  transform-origin: 50% 50%;
                  width: 100%;
                  -webkit-text-fill-color: rgb(0, 0, 238);
                  -webkit-text-stroke-color: rgb(0, 0, 238);
                "
              >
                <img
                  _ngcontent-ng-c3112934927=""
                  src="./media/gclkcap4/מדריכים.png"
                  style="
                    block-size: auto;
                    border-block-color: rgb(0, 0, 238);
                    border-color: rgb(0, 0, 238);
                    border-inline-color: rgb(0, 0, 238);
                    caret-color: rgb(0, 0, 238);
                    color: rgb(0, 0, 238);
                    column-rule-color: rgb(0, 0, 238);
                    cursor: pointer;
                    display: block;
                    height: auto;
                    inline-size: auto;
                    list-style-type: none;
                    outline-color: rgb(0, 0, 238);
                    perspective-origin: 50% 50%;
                    text-align: center;
                    text-decoration: none solid rgb(0, 0, 238);
                    text-emphasis-color: rgb(0, 0, 238);
                    transform-origin: 50% 50%;
                    width: auto;
                    -webkit-text-fill-color: rgb(0, 0, 238);
                    -webkit-text-stroke-color: rgb(0, 0, 238);
                  "
                />
              </div>
              <span _ngcontent-ng-c3112934927="" class="sub-link-text" style="cursor: pointer; display: inline-block; font-size: 15px; line-height: 15px; list-style-type: none; margin-block-start: 8px; margin-top: 8px; perspective-origin: 50% 50%; text-align: center; transform-origin: 50% 50%">מדריכים</span> </a
            ><!---->
          </div>
          <!---->
        </li>
        <li
          _ngcontent-ng-c3112934927=""
          class="menu-item ng-star-inserted"
          style="block-size: 20px; inset: 0px; height: 20px; inline-size: 125.016px; inset-block: 0px; inset-inline: 0px; list-style-type: none; min-block-size: auto; min-height: auto; min-inline-size: auto; min-width: auto; perspective-origin: 62.5px 10px; position: relative; transform-origin: 62.5078px 10px; width: 125.016px"
        >
          <!----><a
            _ngcontent-ng-c3112934927=""
            href="javascript:void(0);"
            class="tab-link arrow-link ng-star-inserted"
            data-id="9"
            style="block-size: 20px; cursor: pointer; display: flex; font-size: 20px; height: 20px; inline-size: 125.031px; justify-content: space-between; line-height: 20px; list-style-type: none; padding-inline-end: 28px; padding-left: 28px; perspective-origin: 62.5156px 10px; text-align: right; transform-origin: 62.5156px 10px; width: 125.031px"
            >אזור אישי</a
          ><!---->
          <div
            _ngcontent-ng-c3112934927=""
            class="tab-content ng-star-inserted"
            style="
              background-color: rgb(255, 255, 255);
              block-size: auto;
              border-bottom-left-radius: 14px;
              border-bottom-right-radius: 14px;
              border-end-end-radius: 14px;
              border-end-start-radius: 14px;
              box-shadow: rgba(29, 137, 137, 0.06) 17px 14px 25px 0px, rgba(32, 156, 144, 0.08) -18px 16px 30px 0px, rgba(31, 161, 148, 0.1) 0px 4px 21px 0px inset;
              display: none;
              flex-wrap: wrap;
              height: auto;
              inline-size: 643px;
              inset-block-start: 59.5px;
              list-style-type: none;
              padding-block: 40px 20px;
              padding: 40px 51px 20px;
              padding-inline: 51px;
              perspective-origin: 50% 50%;
              position: absolute;
              text-align: right;
              top: 59.5px;
              transform-origin: 50% 50%;
              width: 643px;
            "
          >
            <a
              _ngcontent-ng-c3112934927=""
              class="content-box sub-link ng-star-inserted"
              href="https://www.partner.co.il/n/login/?ref=nav_to_personal_area"
              style="
                border-block-color: rgb(0, 0, 238);
                border-color: rgb(0, 0, 238);
                border-inline-color: rgb(0, 0, 238);
                caret-color: rgb(0, 0, 238);
                color: rgb(0, 0, 238);
                column-rule-color: rgb(0, 0, 238);
                cursor: pointer;
                display: block;
                inline-size: 89px;
                list-style-type: none;
                margin-block-end: 22px;
                margin-bottom: 22px;
                margin-inline: 4%;
                margin-left: 4%;
                margin-right: 4%;
                outline-color: rgb(0, 0, 238);
                perspective-origin: 50% 50%;
                text-align: center;
                text-decoration: none solid rgb(0, 0, 238);
                text-emphasis-color: rgb(0, 0, 238);
                transform-origin: 50% 50%;
                width: 89px;
                -webkit-text-fill-color: rgb(0, 0, 238);
                -webkit-text-stroke-color: rgb(0, 0, 238);
              "
            >
              <div
                _ngcontent-ng-c3112934927=""
                class="image"
                style="
                  align-items: center;
                  block-size: 81px;
                  border-block-color: rgb(0, 0, 238);
                  border-color: rgb(0, 0, 238);
                  border-radius: 12px;
                  border-end-end-radius: 12px;
                  border-end-start-radius: 12px;
                  border-inline-color: rgb(0, 0, 238);
                  border-start-end-radius: 12px;
                  border-start-start-radius: 12px;
                  box-shadow: rgba(3, 69, 168, 0.08) 0px 4.352px 14.144px 0px;
                  caret-color: rgb(0, 0, 238);
                  color: rgb(0, 0, 238);
                  column-rule-color: rgb(0, 0, 238);
                  cursor: pointer;
                  display: flex;
                  height: 81px;
                  inline-size: 100%;
                  justify-content: center;
                  list-style-type: none;
                  outline-color: rgb(0, 0, 238);
                  perspective-origin: 50% 50%;
                  text-align: center;
                  text-decoration: none solid rgb(0, 0, 238);
                  text-emphasis-color: rgb(0, 0, 238);
                  transform-origin: 50% 50%;
                  width: 100%;
                  -webkit-text-fill-color: rgb(0, 0, 238);
                  -webkit-text-stroke-color: rgb(0, 0, 238);
                "
              >
                <img
                  _ngcontent-ng-c3112934927=""
                  src="./media/utudrdul/איזור-אישי.png"
                  style="
                    block-size: auto;
                    border-block-color: rgb(0, 0, 238);
                    border-color: rgb(0, 0, 238);
                    border-inline-color: rgb(0, 0, 238);
                    caret-color: rgb(0, 0, 238);
                    color: rgb(0, 0, 238);
                    column-rule-color: rgb(0, 0, 238);
                    cursor: pointer;
                    display: block;
                    height: auto;
                    inline-size: auto;
                    list-style-type: none;
                    outline-color: rgb(0, 0, 238);
                    perspective-origin: 50% 50%;
                    text-align: center;
                    text-decoration: none solid rgb(0, 0, 238);
                    text-emphasis-color: rgb(0, 0, 238);
                    transform-origin: 50% 50%;
                    width: auto;
                    -webkit-text-fill-color: rgb(0, 0, 238);
                    -webkit-text-stroke-color: rgb(0, 0, 238);
                  "
                />
              </div>
              <span _ngcontent-ng-c3112934927="" class="sub-link-text" style="cursor: pointer; display: inline-block; font-size: 15px; line-height: 15px; list-style-type: none; margin-block-start: 8px; margin-top: 8px; perspective-origin: 50% 50%; text-align: center; transform-origin: 50% 50%">לאזור האישי</span> </a
            ><a
              _ngcontent-ng-c3112934927=""
              class="content-box sub-link ng-star-inserted"
              href="https://www.partner.co.il/n/debtpayment/login"
              style="
                border-block-color: rgb(0, 0, 238);
                border-color: rgb(0, 0, 238);
                border-inline-color: rgb(0, 0, 238);
                caret-color: rgb(0, 0, 238);
                color: rgb(0, 0, 238);
                column-rule-color: rgb(0, 0, 238);
                cursor: pointer;
                display: block;
                inline-size: 89px;
                list-style-type: none;
                margin-block-end: 22px;
                margin-bottom: 22px;
                margin-inline: 4%;
                margin-left: 4%;
                margin-right: 4%;
                outline-color: rgb(0, 0, 238);
                perspective-origin: 50% 50%;
                text-align: center;
                text-decoration: none solid rgb(0, 0, 238);
                text-emphasis-color: rgb(0, 0, 238);
                transform-origin: 50% 50%;
                width: 89px;
                -webkit-text-fill-color: rgb(0, 0, 238);
                -webkit-text-stroke-color: rgb(0, 0, 238);
              "
            >
              <div
                _ngcontent-ng-c3112934927=""
                class="image"
                style="
                  align-items: center;
                  block-size: 81px;
                  border-block-color: rgb(0, 0, 238);
                  border-color: rgb(0, 0, 238);
                  border-radius: 12px;
                  border-end-end-radius: 12px;
                  border-end-start-radius: 12px;
                  border-inline-color: rgb(0, 0, 238);
                  border-start-end-radius: 12px;
                  border-start-start-radius: 12px;
                  box-shadow: rgba(3, 69, 168, 0.08) 0px 4.352px 14.144px 0px;
                  caret-color: rgb(0, 0, 238);
                  color: rgb(0, 0, 238);
                  column-rule-color: rgb(0, 0, 238);
                  cursor: pointer;
                  display: flex;
                  height: 81px;
                  inline-size: 100%;
                  justify-content: center;
                  list-style-type: none;
                  outline-color: rgb(0, 0, 238);
                  perspective-origin: 50% 50%;
                  text-align: center;
                  text-decoration: none solid rgb(0, 0, 238);
                  text-emphasis-color: rgb(0, 0, 238);
                  transform-origin: 50% 50%;
                  width: 100%;
                  -webkit-text-fill-color: rgb(0, 0, 238);
                  -webkit-text-stroke-color: rgb(0, 0, 238);
                "
              >
                <img
                  _ngcontent-ng-c3112934927=""
                  src="./media/3i0nutl3/תשלום-חוב.png"
                  style="
                    block-size: auto;
                    border-block-color: rgb(0, 0, 238);
                    border-color: rgb(0, 0, 238);
                    border-inline-color: rgb(0, 0, 238);
                    caret-color: rgb(0, 0, 238);
                    color: rgb(0, 0, 238);
                    column-rule-color: rgb(0, 0, 238);
                    cursor: pointer;
                    display: block;
                    height: auto;
                    inline-size: auto;
                    list-style-type: none;
                    outline-color: rgb(0, 0, 238);
                    perspective-origin: 50% 50%;
                    text-align: center;
                    text-decoration: none solid rgb(0, 0, 238);
                    text-emphasis-color: rgb(0, 0, 238);
                    transform-origin: 50% 50%;
                    width: auto;
                    -webkit-text-fill-color: rgb(0, 0, 238);
                    -webkit-text-stroke-color: rgb(0, 0, 238);
                  "
                />
              </div>
              <span _ngcontent-ng-c3112934927="" class="sub-link-text" style="cursor: pointer; display: inline-block; font-size: 15px; line-height: 15px; list-style-type: none; margin-block-start: 8px; margin-top: 8px; perspective-origin: 50% 50%; text-align: center; transform-origin: 50% 50%">תשלום חוב</span> </a
            ><a
              _ngcontent-ng-c3112934927=""
              class="content-box sub-link ng-star-inserted"
              href="https://www.partner.co.il/n/mypartner/myactions"
              style="
                border-block-color: rgb(0, 0, 238);
                border-color: rgb(0, 0, 238);
                border-inline-color: rgb(0, 0, 238);
                caret-color: rgb(0, 0, 238);
                color: rgb(0, 0, 238);
                column-rule-color: rgb(0, 0, 238);
                cursor: pointer;
                display: block;
                inline-size: 89px;
                list-style-type: none;
                margin-block-end: 22px;
                margin-bottom: 22px;
                margin-inline: 4%;
                margin-left: 4%;
                margin-right: 4%;
                outline-color: rgb(0, 0, 238);
                perspective-origin: 50% 50%;
                text-align: center;
                text-decoration: none solid rgb(0, 0, 238);
                text-emphasis-color: rgb(0, 0, 238);
                transform-origin: 50% 50%;
                width: 89px;
                -webkit-text-fill-color: rgb(0, 0, 238);
                -webkit-text-stroke-color: rgb(0, 0, 238);
              "
            >
              <div
                _ngcontent-ng-c3112934927=""
                class="image"
                style="
                  align-items: center;
                  block-size: 81px;
                  border-block-color: rgb(0, 0, 238);
                  border-color: rgb(0, 0, 238);
                  border-radius: 12px;
                  border-end-end-radius: 12px;
                  border-end-start-radius: 12px;
                  border-inline-color: rgb(0, 0, 238);
                  border-start-end-radius: 12px;
                  border-start-start-radius: 12px;
                  box-shadow: rgba(3, 69, 168, 0.08) 0px 4.352px 14.144px 0px;
                  caret-color: rgb(0, 0, 238);
                  color: rgb(0, 0, 238);
                  column-rule-color: rgb(0, 0, 238);
                  cursor: pointer;
                  display: flex;
                  height: 81px;
                  inline-size: 100%;
                  justify-content: center;
                  list-style-type: none;
                  outline-color: rgb(0, 0, 238);
                  perspective-origin: 50% 50%;
                  text-align: center;
                  text-decoration: none solid rgb(0, 0, 238);
                  text-emphasis-color: rgb(0, 0, 238);
                  transform-origin: 50% 50%;
                  width: 100%;
                  -webkit-text-fill-color: rgb(0, 0, 238);
                  -webkit-text-stroke-color: rgb(0, 0, 238);
                "
              >
                <img
                  _ngcontent-ng-c3112934927=""
                  src="./media/a3el0n1l/פעולות-בחשבון-פרטנר.png"
                  style="
                    block-size: auto;
                    border-block-color: rgb(0, 0, 238);
                    border-color: rgb(0, 0, 238);
                    border-inline-color: rgb(0, 0, 238);
                    caret-color: rgb(0, 0, 238);
                    color: rgb(0, 0, 238);
                    column-rule-color: rgb(0, 0, 238);
                    cursor: pointer;
                    display: block;
                    height: auto;
                    inline-size: auto;
                    list-style-type: none;
                    outline-color: rgb(0, 0, 238);
                    perspective-origin: 50% 50%;
                    text-align: center;
                    text-decoration: none solid rgb(0, 0, 238);
                    text-emphasis-color: rgb(0, 0, 238);
                    transform-origin: 50% 50%;
                    width: auto;
                    -webkit-text-fill-color: rgb(0, 0, 238);
                    -webkit-text-stroke-color: rgb(0, 0, 238);
                  "
                />
              </div>
              <span _ngcontent-ng-c3112934927="" class="sub-link-text" style="cursor: pointer; display: inline-block; font-size: 15px; line-height: 15px; list-style-type: none; margin-block-start: 8px; margin-top: 8px; perspective-origin: 50% 50%; text-align: center; transform-origin: 50% 50%">פעולות בחשבון פרטנר</span> </a
            ><a
              _ngcontent-ng-c3112934927=""
              class="content-box sub-link ng-star-inserted"
              href="https://www.partner.co.il/n/mypartner/invoice"
              style="
                border-block-color: rgb(0, 0, 238);
                border-color: rgb(0, 0, 238);
                border-inline-color: rgb(0, 0, 238);
                caret-color: rgb(0, 0, 238);
                color: rgb(0, 0, 238);
                column-rule-color: rgb(0, 0, 238);
                cursor: pointer;
                display: block;
                inline-size: 89px;
                list-style-type: none;
                margin-block-end: 22px;
                margin-bottom: 22px;
                margin-inline: 4%;
                margin-left: 4%;
                margin-right: 4%;
                outline-color: rgb(0, 0, 238);
                perspective-origin: 50% 50%;
                text-align: center;
                text-decoration: none solid rgb(0, 0, 238);
                text-emphasis-color: rgb(0, 0, 238);
                transform-origin: 50% 50%;
                width: 89px;
                -webkit-text-fill-color: rgb(0, 0, 238);
                -webkit-text-stroke-color: rgb(0, 0, 238);
              "
            >
              <div
                _ngcontent-ng-c3112934927=""
                class="image"
                style="
                  align-items: center;
                  block-size: 81px;
                  border-block-color: rgb(0, 0, 238);
                  border-color: rgb(0, 0, 238);
                  border-radius: 12px;
                  border-end-end-radius: 12px;
                  border-end-start-radius: 12px;
                  border-inline-color: rgb(0, 0, 238);
                  border-start-end-radius: 12px;
                  border-start-start-radius: 12px;
                  box-shadow: rgba(3, 69, 168, 0.08) 0px 4.352px 14.144px 0px;
                  caret-color: rgb(0, 0, 238);
                  color: rgb(0, 0, 238);
                  column-rule-color: rgb(0, 0, 238);
                  cursor: pointer;
                  display: flex;
                  height: 81px;
                  inline-size: 100%;
                  justify-content: center;
                  list-style-type: none;
                  outline-color: rgb(0, 0, 238);
                  perspective-origin: 50% 50%;
                  text-align: center;
                  text-decoration: none solid rgb(0, 0, 238);
                  text-emphasis-color: rgb(0, 0, 238);
                  transform-origin: 50% 50%;
                  width: 100%;
                  -webkit-text-fill-color: rgb(0, 0, 238);
                  -webkit-text-stroke-color: rgb(0, 0, 238);
                "
              >
                <img
                  _ngcontent-ng-c3112934927=""
                  src="./media/gqxi1sbz/היסטורייה.png"
                  style="
                    block-size: auto;
                    border-block-color: rgb(0, 0, 238);
                    border-color: rgb(0, 0, 238);
                    border-inline-color: rgb(0, 0, 238);
                    caret-color: rgb(0, 0, 238);
                    color: rgb(0, 0, 238);
                    column-rule-color: rgb(0, 0, 238);
                    cursor: pointer;
                    display: block;
                    height: auto;
                    inline-size: auto;
                    list-style-type: none;
                    outline-color: rgb(0, 0, 238);
                    perspective-origin: 50% 50%;
                    text-align: center;
                    text-decoration: none solid rgb(0, 0, 238);
                    text-emphasis-color: rgb(0, 0, 238);
                    transform-origin: 50% 50%;
                    width: auto;
                    -webkit-text-fill-color: rgb(0, 0, 238);
                    -webkit-text-stroke-color: rgb(0, 0, 238);
                  "
                />
              </div>
              <span _ngcontent-ng-c3112934927="" class="sub-link-text" style="cursor: pointer; display: inline-block; font-size: 15px; line-height: 15px; list-style-type: none; margin-block-start: 8px; margin-top: 8px; perspective-origin: 50% 50%; text-align: center; transform-origin: 50% 50%">היסטוריית חשבוניות</span> </a
            ><a
              _ngcontent-ng-c3112934927=""
              class="content-box sub-link ng-star-inserted"
              href="https://www.partner.co.il/n/sim/login?returnUrl=%2Freplacesim%2FselectContract"
              style="
                border-block-color: rgb(0, 0, 238);
                border-color: rgb(0, 0, 238);
                border-inline-color: rgb(0, 0, 238);
                caret-color: rgb(0, 0, 238);
                color: rgb(0, 0, 238);
                column-rule-color: rgb(0, 0, 238);
                cursor: pointer;
                display: block;
                inline-size: 89px;
                list-style-type: none;
                margin-block-end: 22px;
                margin-bottom: 22px;
                margin-inline: 4%;
                margin-left: 4%;
                margin-right: 4%;
                outline-color: rgb(0, 0, 238);
                perspective-origin: 50% 50%;
                text-align: center;
                text-decoration: none solid rgb(0, 0, 238);
                text-emphasis-color: rgb(0, 0, 238);
                transform-origin: 50% 50%;
                width: 89px;
                -webkit-text-fill-color: rgb(0, 0, 238);
                -webkit-text-stroke-color: rgb(0, 0, 238);
              "
            >
              <div
                _ngcontent-ng-c3112934927=""
                class="image"
                style="
                  align-items: center;
                  block-size: 81px;
                  border-block-color: rgb(0, 0, 238);
                  border-color: rgb(0, 0, 238);
                  border-radius: 12px;
                  border-end-end-radius: 12px;
                  border-end-start-radius: 12px;
                  border-inline-color: rgb(0, 0, 238);
                  border-start-end-radius: 12px;
                  border-start-start-radius: 12px;
                  box-shadow: rgba(3, 69, 168, 0.08) 0px 4.352px 14.144px 0px;
                  caret-color: rgb(0, 0, 238);
                  color: rgb(0, 0, 238);
                  column-rule-color: rgb(0, 0, 238);
                  cursor: pointer;
                  display: flex;
                  height: 81px;
                  inline-size: 100%;
                  justify-content: center;
                  list-style-type: none;
                  outline-color: rgb(0, 0, 238);
                  perspective-origin: 50% 50%;
                  text-align: center;
                  text-decoration: none solid rgb(0, 0, 238);
                  text-emphasis-color: rgb(0, 0, 238);
                  transform-origin: 50% 50%;
                  width: 100%;
                  -webkit-text-fill-color: rgb(0, 0, 238);
                  -webkit-text-stroke-color: rgb(0, 0, 238);
                "
              >
                <img
                  _ngcontent-ng-c3112934927=""
                  src="./media/urqcluwr/ניוד.png"
                  style="
                    block-size: auto;
                    border-block-color: rgb(0, 0, 238);
                    border-color: rgb(0, 0, 238);
                    border-inline-color: rgb(0, 0, 238);
                    caret-color: rgb(0, 0, 238);
                    color: rgb(0, 0, 238);
                    column-rule-color: rgb(0, 0, 238);
                    cursor: pointer;
                    display: block;
                    height: auto;
                    inline-size: auto;
                    list-style-type: none;
                    outline-color: rgb(0, 0, 238);
                    perspective-origin: 50% 50%;
                    text-align: center;
                    text-decoration: none solid rgb(0, 0, 238);
                    text-emphasis-color: rgb(0, 0, 238);
                    transform-origin: 50% 50%;
                    width: auto;
                    -webkit-text-fill-color: rgb(0, 0, 238);
                    -webkit-text-stroke-color: rgb(0, 0, 238);
                  "
                />
              </div>
              <span _ngcontent-ng-c3112934927="" class="sub-link-text" style="cursor: pointer; display: inline-block; font-size: 15px; line-height: 15px; list-style-type: none; margin-block-start: 8px; margin-top: 8px; perspective-origin: 50% 50%; text-align: center; transform-origin: 50% 50%">החלפת SIM ו-eSIM</span> </a
            ><a
              _ngcontent-ng-c3112934927=""
              class="content-box sub-link ng-star-inserted"
              href="https://www.partner.co.il/selfservice1/updatepayment#!/login/creditCard"
              style="
                border-block-color: rgb(0, 0, 238);
                border-color: rgb(0, 0, 238);
                border-inline-color: rgb(0, 0, 238);
                caret-color: rgb(0, 0, 238);
                color: rgb(0, 0, 238);
                column-rule-color: rgb(0, 0, 238);
                cursor: pointer;
                display: block;
                inline-size: 89px;
                list-style-type: none;
                margin-block-end: 22px;
                margin-bottom: 22px;
                margin-inline: 4%;
                margin-left: 4%;
                margin-right: 4%;
                outline-color: rgb(0, 0, 238);
                perspective-origin: 50% 50%;
                text-align: center;
                text-decoration: none solid rgb(0, 0, 238);
                text-emphasis-color: rgb(0, 0, 238);
                transform-origin: 50% 50%;
                width: 89px;
                -webkit-text-fill-color: rgb(0, 0, 238);
                -webkit-text-stroke-color: rgb(0, 0, 238);
              "
            >
              <div
                _ngcontent-ng-c3112934927=""
                class="image"
                style="
                  align-items: center;
                  block-size: 81px;
                  border-block-color: rgb(0, 0, 238);
                  border-color: rgb(0, 0, 238);
                  border-radius: 12px;
                  border-end-end-radius: 12px;
                  border-end-start-radius: 12px;
                  border-inline-color: rgb(0, 0, 238);
                  border-start-end-radius: 12px;
                  border-start-start-radius: 12px;
                  box-shadow: rgba(3, 69, 168, 0.08) 0px 4.352px 14.144px 0px;
                  caret-color: rgb(0, 0, 238);
                  color: rgb(0, 0, 238);
                  column-rule-color: rgb(0, 0, 238);
                  cursor: pointer;
                  display: flex;
                  height: 81px;
                  inline-size: 100%;
                  justify-content: center;
                  list-style-type: none;
                  outline-color: rgb(0, 0, 238);
                  perspective-origin: 50% 50%;
                  text-align: center;
                  text-decoration: none solid rgb(0, 0, 238);
                  text-emphasis-color: rgb(0, 0, 238);
                  transform-origin: 50% 50%;
                  width: 100%;
                  -webkit-text-fill-color: rgb(0, 0, 238);
                  -webkit-text-stroke-color: rgb(0, 0, 238);
                "
              >
                <img
                  _ngcontent-ng-c3112934927=""
                  src="./media/n2fl0aaa/עדכון-אמצעי-תשלום.png"
                  style="
                    block-size: auto;
                    border-block-color: rgb(0, 0, 238);
                    border-color: rgb(0, 0, 238);
                    border-inline-color: rgb(0, 0, 238);
                    caret-color: rgb(0, 0, 238);
                    color: rgb(0, 0, 238);
                    column-rule-color: rgb(0, 0, 238);
                    cursor: pointer;
                    display: block;
                    height: auto;
                    inline-size: auto;
                    list-style-type: none;
                    outline-color: rgb(0, 0, 238);
                    perspective-origin: 50% 50%;
                    text-align: center;
                    text-decoration: none solid rgb(0, 0, 238);
                    text-emphasis-color: rgb(0, 0, 238);
                    transform-origin: 50% 50%;
                    width: auto;
                    -webkit-text-fill-color: rgb(0, 0, 238);
                    -webkit-text-stroke-color: rgb(0, 0, 238);
                  "
                />
              </div>
              <span _ngcontent-ng-c3112934927="" class="sub-link-text" style="cursor: pointer; display: inline-block; font-size: 15px; line-height: 15px; list-style-type: none; margin-block-start: 8px; margin-top: 8px; perspective-origin: 50% 50%; text-align: center; transform-origin: 50% 50%">עדכון אמצעי תשלום</span> </a
            ><a
              _ngcontent-ng-c3112934927=""
              class="content-box sub-link ng-star-inserted"
              href="https://www.partner.co.il/n/loststolen/#!/questionnaire"
              style="
                border-block-color: rgb(0, 0, 238);
                border-color: rgb(0, 0, 238);
                border-inline-color: rgb(0, 0, 238);
                caret-color: rgb(0, 0, 238);
                color: rgb(0, 0, 238);
                column-rule-color: rgb(0, 0, 238);
                cursor: pointer;
                display: block;
                inline-size: 89px;
                list-style-type: none;
                margin-block-end: 22px;
                margin-bottom: 22px;
                margin-inline: 4%;
                margin-left: 4%;
                margin-right: 4%;
                outline-color: rgb(0, 0, 238);
                perspective-origin: 50% 50%;
                text-align: center;
                text-decoration: none solid rgb(0, 0, 238);
                text-emphasis-color: rgb(0, 0, 238);
                transform-origin: 50% 50%;
                width: 89px;
                -webkit-text-fill-color: rgb(0, 0, 238);
                -webkit-text-stroke-color: rgb(0, 0, 238);
              "
            >
              <div
                _ngcontent-ng-c3112934927=""
                class="image"
                style="
                  align-items: center;
                  block-size: 81px;
                  border-block-color: rgb(0, 0, 238);
                  border-color: rgb(0, 0, 238);
                  border-radius: 12px;
                  border-end-end-radius: 12px;
                  border-end-start-radius: 12px;
                  border-inline-color: rgb(0, 0, 238);
                  border-start-end-radius: 12px;
                  border-start-start-radius: 12px;
                  box-shadow: rgba(3, 69, 168, 0.08) 0px 4.352px 14.144px 0px;
                  caret-color: rgb(0, 0, 238);
                  color: rgb(0, 0, 238);
                  column-rule-color: rgb(0, 0, 238);
                  cursor: pointer;
                  display: flex;
                  height: 81px;
                  inline-size: 100%;
                  justify-content: center;
                  list-style-type: none;
                  outline-color: rgb(0, 0, 238);
                  perspective-origin: 50% 50%;
                  text-align: center;
                  text-decoration: none solid rgb(0, 0, 238);
                  text-emphasis-color: rgb(0, 0, 238);
                  transform-origin: 50% 50%;
                  width: 100%;
                  -webkit-text-fill-color: rgb(0, 0, 238);
                  -webkit-text-stroke-color: rgb(0, 0, 238);
                "
              >
                <img
                  _ngcontent-ng-c3112934927=""
                  src="./media/a31lrerq/גניבה.png"
                  style="
                    block-size: auto;
                    border-block-color: rgb(0, 0, 238);
                    border-color: rgb(0, 0, 238);
                    border-inline-color: rgb(0, 0, 238);
                    caret-color: rgb(0, 0, 238);
                    color: rgb(0, 0, 238);
                    column-rule-color: rgb(0, 0, 238);
                    cursor: pointer;
                    display: block;
                    height: auto;
                    inline-size: auto;
                    list-style-type: none;
                    outline-color: rgb(0, 0, 238);
                    perspective-origin: 50% 50%;
                    text-align: center;
                    text-decoration: none solid rgb(0, 0, 238);
                    text-emphasis-color: rgb(0, 0, 238);
                    transform-origin: 50% 50%;
                    width: auto;
                    -webkit-text-fill-color: rgb(0, 0, 238);
                    -webkit-text-stroke-color: rgb(0, 0, 238);
                  "
                />
              </div>
              <span _ngcontent-ng-c3112934927="" class="sub-link-text" style="cursor: pointer; display: inline-block; font-size: 15px; line-height: 15px; list-style-type: none; margin-block-start: 8px; margin-top: 8px; perspective-origin: 50% 50%; text-align: center; transform-origin: 50% 50%">סטטוס אובדן/גניבה</span> </a
            ><!---->
          </div>
          <!---->
        </li>
        <!---->
      </ul>
    </div>
    <!---->
  </div>
</header>` }
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

export default NavigationMismatchFailure;
