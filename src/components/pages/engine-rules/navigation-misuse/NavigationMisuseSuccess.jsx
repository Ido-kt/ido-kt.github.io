import React from "react";
import EngineIssueSuccess from "../../../layout/engineIssueSuccess";

const NavigationMisuseSuccess = () => {
  const ruleId = "navigation-misuse";
  const title = `An element without navigation links is tagged as a navigation landmark`;
  const description = `Screen readers rely on accurate tagging and labeling to provide necessary context. If an element that does not contain navigation links is tagged as a navigation landmark, screen reader users may lose orientation and find the page's structure difficult to understand.`;
  const helpText = `Add role=presentation to the incorrect <nav> element or remove role=navigation if a different element is used.`;
  const bestPractices = [
  "Follow proper HTML semantics",
  "Ensure screen reader compatibility",
  "Test with assistive technologies"
  ];
  const htmlExamples = [
  { filename: "accessiBe main menu nav", content: `<header class="header" data-element="header" style="align-items: center; animation-duration: 0.001s; block-size: 65px; display: flex; height: 65px; justify-content: space-between; perspective-origin: 748.5px 32.5px; transform-origin: 748.5px 32.5px">
  <div
    class="wrapper wrapper-large flex flex-nowrap"
    style="
      align-items: center;
      animation-duration: 0.001s;
      block-size: 65px;
      inset: 0px;
      display: flex;
      height: 65px;
      inset-block: 0px;
      inset-inline: 0px;
      justify-content: space-between;
      max-inline-size: 1800px;
      max-width: 1800px;
      min-block-size: auto;
      min-height: auto;
      min-inline-size: auto;
      min-width: auto;
      padding-inline: 70px;
      padding-left: 70px;
      padding-right: 70px;
      perspective-origin: 748.5px 32.5px;
      position: relative;
      transform-origin: 748.5px 32.5px;
    "
  >
    <div
      class="flex"
      style="align-items: center; animation-duration: 0.001s; block-size: 65px; display: flex; flex-wrap: wrap; height: 65px; inline-size: 1357px; justify-content: space-between; min-block-size: auto; min-height: auto; min-inline-size: auto; min-width: auto; perspective-origin: 678.5px 32.5px; transform-origin: 678.5px 32.5px; width: 1357px"
    >
      <div
        class="start flex flex-inline flex-horizontal-start flex-nowrap"
        style="align-items: center; animation-duration: 0.001s; block-size: 65px; display: flex; height: 65px; inline-size: 866.805px; justify-content: flex-start; min-block-size: auto; min-height: auto; min-inline-size: auto; min-width: auto; perspective-origin: 433.398px 32.5px; transform-origin: 433.402px 32.5px; width: 866.805px"
      >
        <div
          class="mobile-menu-trigger js-a11y-bound"
          data-clicker-trigger="mobile-menu"
          role="button"
          aria-hidden="true"
          data-acsb-clickable="true"
          data-acsb-navigable="true"
          data-acsb-now-navigable="false"
          data-acsb-hidden="true"
          style="animation-duration: 0.001s; cursor: pointer; inline-size: 0px; min-block-size: auto; min-height: auto; min-inline-size: auto; min-width: auto; perspective-origin: 0px 0px; transform-origin: 0px 0px; width: 0px"
        >
          <span
            class="sr-only"
            data-acsb-hidden="false"
            data-acsb-sr-only="true"
            data-acsb-force-visible="true"
            style="
              animation-duration: 0.001s;
              block-size: 1px;
              inset: 32.5px 1427px 32.5px 70px;
              clip: rect(0px, 0px, 0px, 0px);
              cursor: text;
              display: block;
              font-size: 15px;
              height: 1px;
              inline-size: 1px;
              inset-block: 32.5px;
              inset-inline: 70px 1427px;
              line-height: 1px;
              margin-block-start: -1px;
              margin-inline-start: -1px;
              margin-left: -1px;
              margin-top: -1px;
              overflow: hidden;
              perspective-origin: 0.5px 0.5px;
              position: absolute;
              transform-origin: 0.5px 0.5px;
              width: 1px;
            "
            >Menu</span
          ><i class="icon icon-menu" aria-hidden="true" role="presentation" style="animation-duration: 0.001s; cursor: pointer; display: none; inline-size: 22px; line-height: 16px; margin-inline-end: 15px; margin-right: 15px; perspective-origin: 50% 50%; transform-origin: 50% 50%; user-select: none; width: 22px"
            ><svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              style="animation-duration: 0.001s; block-size: auto; cursor: pointer; font-style: italic; height: auto; inline-size: 100%; line-height: 16px; max-block-size: 100%; max-height: 100%; overflow-clip-margin: content-box; overflow: hidden; perspective-origin: 50% 50%; transform-origin: 50% 50%; user-select: none; width: 100%"
            >
              <path d="M1 3h14v2h-14v-2z" style="display: block"></path>
              <path d="M1 7h14v2h-14v-2z" style="display: block"></path>
              <path d="M1 11h14v2h-14v-2z" style="display: block"></path>
            </svg>
          </i>
        </div>
        <div class="logo" style="animation-duration: 0.001s; block-size: 22.8516px; height: 22.8516px; inline-size: 160px; min-block-size: auto; min-height: auto; min-inline-size: auto; min-width: auto; perspective-origin: 80px 11.4219px; transform-origin: 80px 11.4258px; width: 160px">
          <a
            href="/"
            data-acsb-clickable="true"
            data-acsb-navigable="true"
            data-acsb-now-navigable="true"
            data-custom-button-processed="true"
            style="animation-duration: 0.001s; block-size: 22.8516px; cursor: pointer; display: block; height: 22.8516px; inline-size: 160px; perspective-origin: 80px 11.4219px; transform-origin: 80px 11.4258px; width: 160px"
            ><span
              class="acsb-sr-only"
              data-acsb-sr-only="true"
              data-acsb-force-visible="true"
              data-acsb-sr-only-position="before"
              data-acsb-hidden="false"
              style="
                animation-duration: 0.001s;
                background-color: rgb(255, 255, 255);
                block-size: 1px;
                border-block-color: rgb(0, 0, 0);
                border-color: rgb(0, 0, 0);
                border-inline-color: rgb(0, 0, 0);
                inset: 0px 1497px 65px 0px;
                caret-color: rgb(0, 0, 0);
                clip: rect(0px, 0px, 0px, 0px);
                color: rgb(0, 0, 0);
                column-rule-color: rgb(0, 0, 0);
                cursor: text;
                display: block;
                font-size: 15px;
                height: 1px;
                inline-size: 1px;
                inset-block: 0px 65px;
                inset-inline: 0px 1497px;
                line-height: 1px;
                margin-block-start: -1px;
                margin-inline-start: -1px;
                margin-left: -1px;
                margin-top: -1px;
                outline-color: rgb(0, 0, 0);
                overflow: hidden;
                perspective-origin: 0.5px 0.5px;
                position: absolute;
                text-decoration: none solid rgb(0, 0, 0);
                text-emphasis-color: rgb(0, 0, 0);
                text-transform: capitalize;
                transform-origin: 0.5px 0.5px;
                width: 1px;
                -webkit-text-fill-color: rgb(0, 0, 0);
                -webkit-text-stroke-color: rgb(0, 0, 0);
              "
              >Home</span
            ><img
              class="logo-long"
              alt="accessiBe"
              style="
                animation-duration: 0.001s;
                block-size: 22.8516px;
                border-block-color: rgb(19, 110, 248);
                border-color: rgb(19, 110, 248);
                border-inline-color: rgb(19, 110, 248);
                caret-color: rgb(19, 110, 248);
                color: rgb(19, 110, 248);
                column-rule-color: rgb(19, 110, 248);
                cursor: pointer;
                display: block;
                height: 22.8516px;
                inline-size: 160px;
                outline-color: rgb(19, 110, 248);
                perspective-origin: 80px 11.4219px;
                text-decoration: none solid rgb(19, 110, 248);
                text-emphasis-color: rgb(19, 110, 248);
                transform-origin: 80px 11.4258px;
                width: 160px;
                -webkit-text-fill-color: rgb(19, 110, 248);
                -webkit-text-stroke-color: rgb(19, 110, 248);
              " /><img
              class="logo-short"
              alt="accessiBe"
              aria-hidden="true"
              data-acsb-hidden="true"
              style="
                animation-duration: 0.001s;
                block-size: 35px;
                border-block-color: rgb(19, 110, 248);
                border-color: rgb(19, 110, 248);
                border-inline-color: rgb(19, 110, 248);
                caret-color: rgb(19, 110, 248);
                color: rgb(19, 110, 248);
                column-rule-color: rgb(19, 110, 248);
                cursor: pointer;
                display: none;
                height: 35px;
                inline-size: auto;
                outline-color: rgb(19, 110, 248);
                perspective-origin: 50% 50%;
                text-decoration: none solid rgb(19, 110, 248);
                text-emphasis-color: rgb(19, 110, 248);
                transform-origin: 50% 50%;
                width: auto;
                -webkit-text-fill-color: rgb(19, 110, 248);
                -webkit-text-stroke-color: rgb(19, 110, 248);
              "
          /></a>
        </div>
        <nav
          class="menu main-menu js-a11y-bound"
          aria-label="Main menu"
          data-a11y-landmark="menu"
          id="a11y-landmark-menu"
          style="animation-duration: 0.001s; block-size: 65px; height: 65px; inline-size: 671.805px; margin-inline-start: 35px; margin-left: 35px; min-block-size: auto; min-height: auto; min-inline-size: auto; min-width: auto; perspective-origin: 335.898px 32.5px; transform-origin: 335.902px 32.5px; width: 671.805px"
        >
          <ul data-acsb-menu="ul" role="region" data-acsb-main-menu="true" id="test" style="animation-duration: 0.001s; block-size: 65px; height: 65px; inline-size: 671.812px; perspective-origin: 335.906px 32.5px; transform-origin: 335.906px 32.5px; width: 671.812px">
            <li
              class="menu-accesswidget menu-has-dropdown a11y-dd-container"
              data-acsb-menu="li"
              data-acsb-menu-root="true"
              data-acsb-dropdown-container="true"
              data-acsb-menu-focused="true"
              style="animation-duration: 0.001s; block-size: 65px; display: inline-block; height: 65px; inline-size: 125.102px; perspective-origin: 62.5469px 32.5px; transform-origin: 62.5508px 32.5px; width: 125.102px"
            >
              <a
                class="item"
                href="/accesswidget"
                data-a11y-tooltip="Use ←/→ to navigate"
                data-acsb-clickable="true"
                data-acsb-navigable="true"
                data-acsb-now-navigable="true"
                data-custom-button-processed="true"
                data-acsb-menu="a"
                data-acsb-menu-root-link="true"
                aria-haspopup="true"
                aria-expanded="false"
                data-acsb-tooltip="Use ←/→ to navigate"
                style="
                  align-items: center;
                  animation-duration: 0.001s;
                  block-size: 65px;
                  border-block-color: rgb(10, 37, 64);
                  border-color: rgb(10, 37, 64);
                  border-inline-color: rgb(10, 37, 64);
                  inset: 0px;
                  caret-color: rgb(10, 37, 64);
                  color: rgb(10, 37, 64);
                  column-rule-color: rgb(10, 37, 64);
                  cursor: pointer;
                  display: inline-flex;
                  font-size: 14px;
                  font-weight: 600;
                  height: 65px;
                  inline-size: 110.109px;
                  inset-block: 0px;
                  inset-inline: 0px;
                  justify-content: space-between;
                  line-height: 21px;
                  margin-inline-end: 15px;
                  margin-right: 15px;
                  outline-color: rgb(10, 37, 64);
                  padding-inline: 10px;
                  padding-left: 10px;
                  padding-right: 10px;
                  perspective-origin: 55.0547px 32.5px;
                  position: relative;
                  text-decoration: none solid rgb(10, 37, 64);
                  text-emphasis-color: rgb(10, 37, 64);
                  text-transform: uppercase;
                  transform-origin: 55.0547px 32.5px;
                  width: 110.109px;
                  -webkit-text-fill-color: rgb(10, 37, 64);
                  -webkit-text-stroke-color: rgb(10, 37, 64);
                "
                data-id="0"
              >
                Products
                <i
                  class="icon icon-chevron-down"
                  role="presentation"
                  style="
                    animation-duration: 0.001s;
                    block-size: 7px;
                    border-block-color: rgb(10, 37, 64);
                    border-color: rgb(10, 37, 64);
                    border-inline-color: rgb(10, 37, 64);
                    caret-color: rgb(10, 37, 64);
                    color: rgb(10, 37, 64);
                    column-rule-color: rgb(10, 37, 64);
                    cursor: pointer;
                    display: block;
                    font-size: 14px;
                    font-weight: 600;
                    height: 7px;
                    inline-size: 7px;
                    line-height: 14px;
                    margin-block-start: -1px;
                    margin-inline-start: 7px;
                    margin-left: 7px;
                    margin-top: -1px;
                    min-block-size: auto;
                    min-height: auto;
                    min-inline-size: auto;
                    min-width: auto;
                    outline-color: rgb(10, 37, 64);
                    perspective-origin: 3.5px 3.5px;
                    text-decoration: none solid rgb(10, 37, 64);
                    text-emphasis-color: rgb(10, 37, 64);
                    text-transform: uppercase;
                    transform-origin: 3.5px 3.5px;
                    user-select: none;
                    width: 7px;
                    -webkit-text-fill-color: rgb(10, 37, 64);
                    -webkit-text-stroke-color: rgb(10, 37, 64);
                  "
                  ><svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    aria-hidden="true"
                    data-acsb-hidden="true"
                    style="
                      animation-duration: 0.001s;
                      block-size: 7px;
                      border-block-color: rgb(10, 37, 64);
                      border-color: rgb(10, 37, 64);
                      border-inline-color: rgb(10, 37, 64);
                      caret-color: rgb(10, 37, 64);
                      color: rgb(10, 37, 64);
                      column-rule-color: rgb(10, 37, 64);
                      cursor: pointer;
                      font-size: 14px;
                      font-style: italic;
                      font-weight: 600;
                      height: 7px;
                      inline-size: 7px;
                      line-height: 14px;
                      max-block-size: 100%;
                      max-height: 100%;
                      outline-color: rgb(10, 37, 64);
                      overflow-clip-margin: content-box;
                      overflow: hidden;
                      perspective-origin: 3.5px 3.5px;
                      text-decoration: none solid rgb(10, 37, 64);
                      text-emphasis-color: rgb(10, 37, 64);
                      text-transform: uppercase;
                      transform-origin: 3.5px 3.5px;
                      user-select: none;
                      width: 7px;
                      -webkit-text-fill-color: rgb(10, 37, 64);
                      -webkit-text-stroke-color: rgb(10, 37, 64);
                    "
                  >
                    <path d="M16 5.5l-1.5-1.5-6.5 6.5-6.5-6.5-1.5 1.5 8 8 8-8z"></path></svg></i
              ></a>
              <div
                class="dropdown dropdown-big acsb-hidden"
                role="region"
                aria-hidden="true"
                aria-label="Sub menu"
                data-acsb-hidden="true"
                style="
                  animation-duration: 0.001s;
                  background-color: rgb(255, 255, 255);
                  border-radius: 10px;
                  border-end-end-radius: 10px;
                  border-end-start-radius: 10px;
                  border-start-end-radius: 10px;
                  border-start-start-radius: 10px;
                  box-shadow: rgba(60, 80, 170, 0.2) 0px 3px 10px 0px;
                  display: none;
                  inline-size: 1100px;
                  inset-block-start: 65px;
                  inset-inline-start: 0px;
                  left: 0px;
                  opacity: 0;
                  overflow: hidden;
                  perspective-origin: 50% 50%;
                  pointer-events: none;
                  position: absolute;
                  top: 65px;
                  transform-origin: 0% 0%;
                  visibility: hidden;
                  width: 1100px;
                  z-index: 999;
                "
                data-id="1"
              >
                <div
                  class="flex flex-vertical-stretch flex-nowrap"
                  data-acsb-possible-star="true"
                  style="align-items: stretch; animation-duration: 0.001s; block-size: auto; display: flex; height: auto; inline-size: 100%; justify-content: space-between; perspective-origin: 50% 50%; pointer-events: none; transform-origin: 50% 50%; visibility: hidden; width: 100%"
                >
                  <div
                    class="part part-menu flex flex-nowrap flex-vertical-start"
                    role="region"
                    aria-label="Submenu"
                    style="align-items: flex-start; animation-duration: 0.001s; block-size: auto; display: flex; flex-direction: row-reverse; height: auto; inline-size: 100%; justify-content: space-between; overflow: hidden; perspective-origin: 50% 50%; pointer-events: none; transform-origin: 50% 50%; visibility: hidden; width: 100%"
                  >
                    <div
                      class="part-category"
                      style="
                        animation-duration: 0.001s;
                        block-size: auto;
                        border-inline-start: 1px solid rgb(227, 232, 251);
                        border-left: 1px solid rgb(227, 232, 251);
                        height: auto;
                        inline-size: 50%;
                        padding-block: 30px;
                        padding: 30px;
                        padding-inline: 30px;
                        perspective-origin: 50% 50%;
                        pointer-events: none;
                        transform-origin: 50% 50%;
                        visibility: hidden;
                        width: 50%;
                      "
                    >
                      <a
                        href="/accessflow"
                        class="part-menu-head"
                        tabindex="-1"
                        data-acsb-clickable="true"
                        data-acsb-navigable="true"
                        data-acsb-now-navigable="false"
                        data-custom-button-processed="true"
                        style="
                          animation-duration: 0.001s;
                          border-block-end: 1px solid rgb(227, 232, 251);
                          border-bottom: 1px solid rgb(227, 232, 251);
                          cursor: pointer;
                          display: block;
                          margin-block-end: 15px;
                          margin-bottom: 15px;
                          padding-block-end: 20px;
                          padding-bottom: 20px;
                          padding-inline: 40px;
                          padding-left: 40px;
                          padding-right: 40px;
                          perspective-origin: 50% 50%;
                          pointer-events: none;
                          text-wrap-mode: nowrap;
                          transform-origin: 50% 50%;
                          visibility: hidden;
                        "
                        ><img
                          alt="accessFlow"
                          style="
                            animation-duration: 0.001s;
                            block-size: 33px;
                            border-block-color: rgb(19, 110, 248);
                            border-color: rgb(19, 110, 248);
                            border-inline-color: rgb(19, 110, 248);
                            caret-color: rgb(19, 110, 248);
                            color: rgb(19, 110, 248);
                            column-rule-color: rgb(19, 110, 248);
                            cursor: pointer;
                            display: block;
                            height: 33px;
                            inline-size: auto;
                            margin-inline-start: -40px;
                            margin-left: -40px;
                            outline-color: rgb(19, 110, 248);
                            perspective-origin: 50% 50%;
                            pointer-events: none;
                            text-decoration: none solid rgb(19, 110, 248);
                            text-emphasis-color: rgb(19, 110, 248);
                            text-wrap-mode: nowrap;
                            transform-origin: 50% 50%;
                            visibility: hidden;
                            width: auto;
                            -webkit-text-fill-color: rgb(19, 110, 248);
                            -webkit-text-stroke-color: rgb(19, 110, 248);
                          "
                        /><span
                          class="desc"
                          style="
                            animation-duration: 0.001s;
                            border-block-color: rgb(19, 110, 248);
                            border-color: rgb(19, 110, 248);
                            border-inline-color: rgb(19, 110, 248);
                            caret-color: rgb(19, 110, 248);
                            color: rgb(19, 110, 248);
                            column-rule-color: rgb(19, 110, 248);
                            cursor: pointer;
                            display: block;
                            font-size: 15px;
                            letter-spacing: 0.3px;
                            line-height: 22.5px;
                            margin-block-start: 5px;
                            margin-top: 5px;
                            outline-color: rgb(19, 110, 248);
                            perspective-origin: 50% 50%;
                            pointer-events: none;
                            text-decoration: none solid rgb(19, 110, 248);
                            text-emphasis-color: rgb(19, 110, 248);
                            text-shadow: rgba(19, 110, 248, 0.8) 0px 0px 0px;
                            text-wrap-mode: nowrap;
                            transform-origin: 50% 50%;
                            visibility: hidden;
                            -webkit-text-fill-color: rgb(19, 110, 248);
                            -webkit-text-stroke-color: rgb(19, 110, 248);
                          "
                          >Web Accessibility for Developers</span
                        ></a
                      >
                      <ul
                        class="flex"
                        data-acsb-menu="ul"
                        role="region"
                        aria-label="Submenu"
                        style="align-items: center; animation-duration: 0.001s; block-size: auto; display: flex; flex-wrap: wrap; height: auto; inline-size: 100%; justify-content: space-between; list-style-type: circle; perspective-origin: 50% 50%; pointer-events: none; transform-origin: 50% 50%; visibility: hidden; width: 100%"
                      >
                        <li style="animation-duration: 0.001s; block-size: auto; height: auto; inline-size: 100%; list-style-type: circle; margin-block-end: 15px; margin-bottom: 15px; perspective-origin: 50% 50%; pointer-events: none; transform-origin: 50% 50%; visibility: hidden; width: 100%">
                          <a
                            href="/accessflow"
                            tabindex="-1"
                            data-acsb-clickable="true"
                            data-acsb-navigable="true"
                            data-acsb-now-navigable="false"
                            data-custom-button-processed="true"
                            style="
                              animation-duration: 0.001s;
                              border-block-color: rgb(10, 37, 64);
                              border-color: rgb(10, 37, 64);
                              border-radius: 10px;
                              border-end-end-radius: 10px;
                              border-end-start-radius: 10px;
                              border-inline-color: rgb(10, 37, 64);
                              border-start-end-radius: 10px;
                              border-start-start-radius: 10px;
                              caret-color: rgb(10, 37, 64);
                              color: rgb(10, 37, 64);
                              column-rule-color: rgb(10, 37, 64);
                              cursor: pointer;
                              display: block;
                              font-size: 17px;
                              inline-size: calc(100% - 40px);
                              line-height: 25.5px;
                              list-style-type: circle;
                              margin-block: auto;
                              margin: auto;
                              margin-inline: auto;
                              outline-color: rgb(10, 37, 64);
                              padding-block: 10px;
                              padding: 10px 20px;
                              padding-inline: 20px;
                              perspective-origin: 50% 50%;
                              pointer-events: none;
                              position: relative;
                              text-decoration: none solid rgb(10, 37, 64);
                              text-emphasis-color: rgb(10, 37, 64);
                              text-shadow: rgba(10, 37, 64, 0.7) 0px 0px 0px;
                              transform-origin: 50% 50%;
                              visibility: hidden;
                              width: calc(100% - 40px);
                              -webkit-text-fill-color: rgb(10, 37, 64);
                              -webkit-text-stroke-color: rgb(10, 37, 64);
                            "
                          >
                            accessFlow Overview
                            <i
                              class="icon icon-chevron-right"
                              aria-hidden="true"
                              role="presentation"
                              style="
                                animation-duration: 0.001s;
                                border-block-color: rgb(10, 37, 64);
                                border-color: rgb(10, 37, 64);
                                border-inline-color: rgb(10, 37, 64);
                                caret-color: rgb(10, 37, 64);
                                color: rgb(10, 37, 64);
                                column-rule-color: rgb(10, 37, 64);
                                cursor: pointer;
                                display: block;
                                font-size: 17px;
                                inline-size: 7px;
                                inset-block-start: 50%;
                                inset-inline-end: 30px;
                                line-height: 17px;
                                list-style-type: circle;
                                opacity: 0;
                                outline-color: rgb(10, 37, 64);
                                perspective-origin: 50% 50%;
                                pointer-events: none;
                                position: absolute;
                                right: 30px;
                                text-decoration: none solid rgb(10, 37, 64);
                                text-emphasis-color: rgb(10, 37, 64);
                                text-shadow: rgba(10, 37, 64, 0.7) 0px 0px 0px;
                                top: 50%;
                                transform-origin: 50% 50%;
                                user-select: none;
                                visibility: hidden;
                                width: 7px;
                                -webkit-text-fill-color: rgb(10, 37, 64);
                                -webkit-text-stroke-color: rgb(10, 37, 64);
                              "
                              ><!--?xml version="1.0" encoding="utf-8"?--><svg
                                version="1.1"
                                id="Layer_1"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                x="0px"
                                y="0px"
                                viewBox="0 0 9.5 16"
                                style="
                                  animation-duration: 0.001s;
                                  block-size: auto;
                                  border-block-color: rgb(10, 37, 64);
                                  border-color: rgb(10, 37, 64);
                                  border-inline-color: rgb(10, 37, 64);
                                  caret-color: rgb(10, 37, 64);
                                  color: rgb(10, 37, 64);
                                  column-rule-color: rgb(10, 37, 64);
                                  cursor: pointer;
                                  font-size: 17px;
                                  font-style: italic;
                                  height: auto;
                                  inline-size: 100%;
                                  line-height: 17px;
                                  list-style-type: circle;
                                  max-block-size: 100%;
                                  max-height: 100%;
                                  outline-color: rgb(10, 37, 64);
                                  overflow-clip-margin: content-box;
                                  overflow: hidden;
                                  perspective-origin: 50% 50%;
                                  pointer-events: none;
                                  text-decoration: none solid rgb(10, 37, 64);
                                  text-emphasis-color: rgb(10, 37, 64);
                                  text-shadow: rgba(10, 37, 64, 0.7) 0px 0px 0px;
                                  transform-origin: 50% 50%;
                                  user-select: none;
                                  visibility: hidden;
                                  width: 100%;
                                  -webkit-text-fill-color: rgb(10, 37, 64);
                                  -webkit-text-stroke-color: rgb(10, 37, 64);
                                "
                                xml:space="preserve"
                              >
                                <path d="M1.5,0L0,1.5L6.5,8L0,14.5L1.5,16l8-8L1.5,0z"></path></svg></i
                          ></a>
                        </li>
                        <li style="animation-duration: 0.001s; block-size: auto; height: auto; inline-size: 100%; list-style-type: circle; margin-block-end: 15px; margin-bottom: 15px; perspective-origin: 50% 50%; pointer-events: none; transform-origin: 50% 50%; visibility: hidden; width: 100%">
                          <a
                            href="/accessflow/workflow"
                            tabindex="-1"
                            data-acsb-clickable="true"
                            data-acsb-navigable="true"
                            data-acsb-now-navigable="false"
                            data-custom-button-processed="true"
                            style="
                              animation-duration: 0.001s;
                              border-block-color: rgb(10, 37, 64);
                              border-color: rgb(10, 37, 64);
                              border-radius: 10px;
                              border-end-end-radius: 10px;
                              border-end-start-radius: 10px;
                              border-inline-color: rgb(10, 37, 64);
                              border-start-end-radius: 10px;
                              border-start-start-radius: 10px;
                              caret-color: rgb(10, 37, 64);
                              color: rgb(10, 37, 64);
                              column-rule-color: rgb(10, 37, 64);
                              cursor: pointer;
                              display: block;
                              font-size: 17px;
                              inline-size: calc(100% - 40px);
                              line-height: 25.5px;
                              list-style-type: circle;
                              margin-block: auto;
                              margin: auto;
                              margin-inline: auto;
                              outline-color: rgb(10, 37, 64);
                              padding-block: 10px;
                              padding: 10px 20px;
                              padding-inline: 20px;
                              perspective-origin: 50% 50%;
                              pointer-events: none;
                              position: relative;
                              text-decoration: none solid rgb(10, 37, 64);
                              text-emphasis-color: rgb(10, 37, 64);
                              text-shadow: rgba(10, 37, 64, 0.7) 0px 0px 0px;
                              transform-origin: 50% 50%;
                              visibility: hidden;
                              width: calc(100% - 40px);
                              -webkit-text-fill-color: rgb(10, 37, 64);
                              -webkit-text-stroke-color: rgb(10, 37, 64);
                            "
                          >
                            Workflow
                            <i
                              class="icon icon-chevron-right"
                              aria-hidden="true"
                              role="presentation"
                              style="
                                animation-duration: 0.001s;
                                border-block-color: rgb(10, 37, 64);
                                border-color: rgb(10, 37, 64);
                                border-inline-color: rgb(10, 37, 64);
                                caret-color: rgb(10, 37, 64);
                                color: rgb(10, 37, 64);
                                column-rule-color: rgb(10, 37, 64);
                                cursor: pointer;
                                display: block;
                                font-size: 17px;
                                inline-size: 7px;
                                inset-block-start: 50%;
                                inset-inline-end: 30px;
                                line-height: 17px;
                                list-style-type: circle;
                                opacity: 0;
                                outline-color: rgb(10, 37, 64);
                                perspective-origin: 50% 50%;
                                pointer-events: none;
                                position: absolute;
                                right: 30px;
                                text-decoration: none solid rgb(10, 37, 64);
                                text-emphasis-color: rgb(10, 37, 64);
                                text-shadow: rgba(10, 37, 64, 0.7) 0px 0px 0px;
                                top: 50%;
                                transform-origin: 50% 50%;
                                user-select: none;
                                visibility: hidden;
                                width: 7px;
                                -webkit-text-fill-color: rgb(10, 37, 64);
                                -webkit-text-stroke-color: rgb(10, 37, 64);
                              "
                              ><!--?xml version="1.0" encoding="utf-8"?--><svg
                                version="1.1"
                                id="Layer_1"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                x="0px"
                                y="0px"
                                viewBox="0 0 9.5 16"
                                style="
                                  animation-duration: 0.001s;
                                  block-size: auto;
                                  border-block-color: rgb(10, 37, 64);
                                  border-color: rgb(10, 37, 64);
                                  border-inline-color: rgb(10, 37, 64);
                                  caret-color: rgb(10, 37, 64);
                                  color: rgb(10, 37, 64);
                                  column-rule-color: rgb(10, 37, 64);
                                  cursor: pointer;
                                  font-size: 17px;
                                  font-style: italic;
                                  height: auto;
                                  inline-size: 100%;
                                  line-height: 17px;
                                  list-style-type: circle;
                                  max-block-size: 100%;
                                  max-height: 100%;
                                  outline-color: rgb(10, 37, 64);
                                  overflow-clip-margin: content-box;
                                  overflow: hidden;
                                  perspective-origin: 50% 50%;
                                  pointer-events: none;
                                  text-decoration: none solid rgb(10, 37, 64);
                                  text-emphasis-color: rgb(10, 37, 64);
                                  text-shadow: rgba(10, 37, 64, 0.7) 0px 0px 0px;
                                  transform-origin: 50% 50%;
                                  user-select: none;
                                  visibility: hidden;
                                  width: 100%;
                                  -webkit-text-fill-color: rgb(10, 37, 64);
                                  -webkit-text-stroke-color: rgb(10, 37, 64);
                                "
                                xml:space="preserve"
                              >
                                <path d="M1.5,0L0,1.5L6.5,8L0,14.5L1.5,16l8-8L1.5,0z"></path></svg></i
                          ></a>
                        </li>
                        <li style="animation-duration: 0.001s; block-size: auto; height: auto; inline-size: 100%; list-style-type: circle; margin-block-end: 15px; margin-bottom: 15px; perspective-origin: 50% 50%; pointer-events: none; transform-origin: 50% 50%; visibility: hidden; width: 100%">
                          <a
                            href="/accessflow/ai-auditing"
                            tabindex="-1"
                            data-acsb-clickable="true"
                            data-acsb-navigable="true"
                            data-acsb-now-navigable="false"
                            data-custom-button-processed="true"
                            style="
                              animation-duration: 0.001s;
                              border-block-color: rgb(10, 37, 64);
                              border-color: rgb(10, 37, 64);
                              border-radius: 10px;
                              border-end-end-radius: 10px;
                              border-end-start-radius: 10px;
                              border-inline-color: rgb(10, 37, 64);
                              border-start-end-radius: 10px;
                              border-start-start-radius: 10px;
                              caret-color: rgb(10, 37, 64);
                              color: rgb(10, 37, 64);
                              column-rule-color: rgb(10, 37, 64);
                              cursor: pointer;
                              display: block;
                              font-size: 17px;
                              inline-size: calc(100% - 40px);
                              line-height: 25.5px;
                              list-style-type: circle;
                              margin-block: auto;
                              margin: auto;
                              margin-inline: auto;
                              outline-color: rgb(10, 37, 64);
                              padding-block: 10px;
                              padding: 10px 20px;
                              padding-inline: 20px;
                              perspective-origin: 50% 50%;
                              pointer-events: none;
                              position: relative;
                              text-decoration: none solid rgb(10, 37, 64);
                              text-emphasis-color: rgb(10, 37, 64);
                              text-shadow: rgba(10, 37, 64, 0.7) 0px 0px 0px;
                              transform-origin: 50% 50%;
                              visibility: hidden;
                              width: calc(100% - 40px);
                              -webkit-text-fill-color: rgb(10, 37, 64);
                              -webkit-text-stroke-color: rgb(10, 37, 64);
                            "
                          >
                            AI Auditing
                            <i
                              class="icon icon-chevron-right"
                              aria-hidden="true"
                              role="presentation"
                              style="
                                animation-duration: 0.001s;
                                border-block-color: rgb(10, 37, 64);
                                border-color: rgb(10, 37, 64);
                                border-inline-color: rgb(10, 37, 64);
                                caret-color: rgb(10, 37, 64);
                                color: rgb(10, 37, 64);
                                column-rule-color: rgb(10, 37, 64);
                                cursor: pointer;
                                display: block;
                                font-size: 17px;
                                inline-size: 7px;
                                inset-block-start: 50%;
                                inset-inline-end: 30px;
                                line-height: 17px;
                                list-style-type: circle;
                                opacity: 0;
                                outline-color: rgb(10, 37, 64);
                                perspective-origin: 50% 50%;
                                pointer-events: none;
                                position: absolute;
                                right: 30px;
                                text-decoration: none solid rgb(10, 37, 64);
                                text-emphasis-color: rgb(10, 37, 64);
                                text-shadow: rgba(10, 37, 64, 0.7) 0px 0px 0px;
                                top: 50%;
                                transform-origin: 50% 50%;
                                user-select: none;
                                visibility: hidden;
                                width: 7px;
                                -webkit-text-fill-color: rgb(10, 37, 64);
                                -webkit-text-stroke-color: rgb(10, 37, 64);
                              "
                              ><!--?xml version="1.0" encoding="utf-8"?--><svg
                                version="1.1"
                                id="Layer_1"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                x="0px"
                                y="0px"
                                viewBox="0 0 9.5 16"
                                style="
                                  animation-duration: 0.001s;
                                  block-size: auto;
                                  border-block-color: rgb(10, 37, 64);
                                  border-color: rgb(10, 37, 64);
                                  border-inline-color: rgb(10, 37, 64);
                                  caret-color: rgb(10, 37, 64);
                                  color: rgb(10, 37, 64);
                                  column-rule-color: rgb(10, 37, 64);
                                  cursor: pointer;
                                  font-size: 17px;
                                  font-style: italic;
                                  height: auto;
                                  inline-size: 100%;
                                  line-height: 17px;
                                  list-style-type: circle;
                                  max-block-size: 100%;
                                  max-height: 100%;
                                  outline-color: rgb(10, 37, 64);
                                  overflow-clip-margin: content-box;
                                  overflow: hidden;
                                  perspective-origin: 50% 50%;
                                  pointer-events: none;
                                  text-decoration: none solid rgb(10, 37, 64);
                                  text-emphasis-color: rgb(10, 37, 64);
                                  text-shadow: rgba(10, 37, 64, 0.7) 0px 0px 0px;
                                  transform-origin: 50% 50%;
                                  user-select: none;
                                  visibility: hidden;
                                  width: 100%;
                                  -webkit-text-fill-color: rgb(10, 37, 64);
                                  -webkit-text-stroke-color: rgb(10, 37, 64);
                                "
                                xml:space="preserve"
                              >
                                <path d="M1.5,0L0,1.5L6.5,8L0,14.5L1.5,16l8-8L1.5,0z"></path></svg></i
                          ></a>
                        </li>
                        <li style="animation-duration: 0.001s; block-size: auto; height: auto; inline-size: 100%; list-style-type: circle; margin-block-end: 15px; margin-bottom: 15px; perspective-origin: 50% 50%; pointer-events: none; transform-origin: 50% 50%; visibility: hidden; width: 100%">
                          <a
                            href="/accessflow/monitoring"
                            tabindex="-1"
                            data-acsb-clickable="true"
                            data-acsb-navigable="true"
                            data-acsb-now-navigable="false"
                            data-custom-button-processed="true"
                            style="
                              animation-duration: 0.001s;
                              border-block-color: rgb(10, 37, 64);
                              border-color: rgb(10, 37, 64);
                              border-radius: 10px;
                              border-end-end-radius: 10px;
                              border-end-start-radius: 10px;
                              border-inline-color: rgb(10, 37, 64);
                              border-start-end-radius: 10px;
                              border-start-start-radius: 10px;
                              caret-color: rgb(10, 37, 64);
                              color: rgb(10, 37, 64);
                              column-rule-color: rgb(10, 37, 64);
                              cursor: pointer;
                              display: block;
                              font-size: 17px;
                              inline-size: calc(100% - 40px);
                              line-height: 25.5px;
                              list-style-type: circle;
                              margin-block: auto;
                              margin: auto;
                              margin-inline: auto;
                              outline-color: rgb(10, 37, 64);
                              padding-block: 10px;
                              padding: 10px 20px;
                              padding-inline: 20px;
                              perspective-origin: 50% 50%;
                              pointer-events: none;
                              position: relative;
                              text-decoration: none solid rgb(10, 37, 64);
                              text-emphasis-color: rgb(10, 37, 64);
                              text-shadow: rgba(10, 37, 64, 0.7) 0px 0px 0px;
                              transform-origin: 50% 50%;
                              visibility: hidden;
                              width: calc(100% - 40px);
                              -webkit-text-fill-color: rgb(10, 37, 64);
                              -webkit-text-stroke-color: rgb(10, 37, 64);
                            "
                          >
                            Monitoring
                            <i
                              class="icon icon-chevron-right"
                              aria-hidden="true"
                              role="presentation"
                              style="
                                animation-duration: 0.001s;
                                border-block-color: rgb(10, 37, 64);
                                border-color: rgb(10, 37, 64);
                                border-inline-color: rgb(10, 37, 64);
                                caret-color: rgb(10, 37, 64);
                                color: rgb(10, 37, 64);
                                column-rule-color: rgb(10, 37, 64);
                                cursor: pointer;
                                display: block;
                                font-size: 17px;
                                inline-size: 7px;
                                inset-block-start: 50%;
                                inset-inline-end: 30px;
                                line-height: 17px;
                                list-style-type: circle;
                                opacity: 0;
                                outline-color: rgb(10, 37, 64);
                                perspective-origin: 50% 50%;
                                pointer-events: none;
                                position: absolute;
                                right: 30px;
                                text-decoration: none solid rgb(10, 37, 64);
                                text-emphasis-color: rgb(10, 37, 64);
                                text-shadow: rgba(10, 37, 64, 0.7) 0px 0px 0px;
                                top: 50%;
                                transform-origin: 50% 50%;
                                user-select: none;
                                visibility: hidden;
                                width: 7px;
                                -webkit-text-fill-color: rgb(10, 37, 64);
                                -webkit-text-stroke-color: rgb(10, 37, 64);
                              "
                              ><!--?xml version="1.0" encoding="utf-8"?--><svg
                                version="1.1"
                                id="Layer_1"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                x="0px"
                                y="0px"
                                viewBox="0 0 9.5 16"
                                style="
                                  animation-duration: 0.001s;
                                  block-size: auto;
                                  border-block-color: rgb(10, 37, 64);
                                  border-color: rgb(10, 37, 64);
                                  border-inline-color: rgb(10, 37, 64);
                                  caret-color: rgb(10, 37, 64);
                                  color: rgb(10, 37, 64);
                                  column-rule-color: rgb(10, 37, 64);
                                  cursor: pointer;
                                  font-size: 17px;
                                  font-style: italic;
                                  height: auto;
                                  inline-size: 100%;
                                  line-height: 17px;
                                  list-style-type: circle;
                                  max-block-size: 100%;
                                  max-height: 100%;
                                  outline-color: rgb(10, 37, 64);
                                  overflow-clip-margin: content-box;
                                  overflow: hidden;
                                  perspective-origin: 50% 50%;
                                  pointer-events: none;
                                  text-decoration: none solid rgb(10, 37, 64);
                                  text-emphasis-color: rgb(10, 37, 64);
                                  text-shadow: rgba(10, 37, 64, 0.7) 0px 0px 0px;
                                  transform-origin: 50% 50%;
                                  user-select: none;
                                  visibility: hidden;
                                  width: 100%;
                                  -webkit-text-fill-color: rgb(10, 37, 64);
                                  -webkit-text-stroke-color: rgb(10, 37, 64);
                                "
                                xml:space="preserve"
                              >
                                <path d="M1.5,0L0,1.5L6.5,8L0,14.5L1.5,16l8-8L1.5,0z"></path></svg></i
                          ></a>
                        </li>
                        <li style="animation-duration: 0.001s; block-size: auto; height: auto; inline-size: 100%; list-style-type: circle; margin-block-end: 15px; margin-bottom: 15px; perspective-origin: 50% 50%; pointer-events: none; transform-origin: 50% 50%; visibility: hidden; width: 100%">
                          <a
                            href="/accessflow/action-funnels"
                            tabindex="-1"
                            data-acsb-clickable="true"
                            data-acsb-navigable="true"
                            data-acsb-now-navigable="false"
                            data-custom-button-processed="true"
                            style="
                              animation-duration: 0.001s;
                              border-block-color: rgb(10, 37, 64);
                              border-color: rgb(10, 37, 64);
                              border-radius: 10px;
                              border-end-end-radius: 10px;
                              border-end-start-radius: 10px;
                              border-inline-color: rgb(10, 37, 64);
                              border-start-end-radius: 10px;
                              border-start-start-radius: 10px;
                              caret-color: rgb(10, 37, 64);
                              color: rgb(10, 37, 64);
                              column-rule-color: rgb(10, 37, 64);
                              cursor: pointer;
                              display: block;
                              font-size: 17px;
                              inline-size: calc(100% - 40px);
                              line-height: 25.5px;
                              list-style-type: circle;
                              margin-block: auto;
                              margin: auto;
                              margin-inline: auto;
                              outline-color: rgb(10, 37, 64);
                              padding-block: 10px;
                              padding: 10px 20px;
                              padding-inline: 20px;
                              perspective-origin: 50% 50%;
                              pointer-events: none;
                              position: relative;
                              text-decoration: none solid rgb(10, 37, 64);
                              text-emphasis-color: rgb(10, 37, 64);
                              text-shadow: rgba(10, 37, 64, 0.7) 0px 0px 0px;
                              transform-origin: 50% 50%;
                              visibility: hidden;
                              width: calc(100% - 40px);
                              -webkit-text-fill-color: rgb(10, 37, 64);
                              -webkit-text-stroke-color: rgb(10, 37, 64);
                            "
                          >
                            Action Funnels
                            <i
                              class="icon icon-chevron-right"
                              aria-hidden="true"
                              role="presentation"
                              style="
                                animation-duration: 0.001s;
                                border-block-color: rgb(10, 37, 64);
                                border-color: rgb(10, 37, 64);
                                border-inline-color: rgb(10, 37, 64);
                                caret-color: rgb(10, 37, 64);
                                color: rgb(10, 37, 64);
                                column-rule-color: rgb(10, 37, 64);
                                cursor: pointer;
                                display: block;
                                font-size: 17px;
                                inline-size: 7px;
                                inset-block-start: 50%;
                                inset-inline-end: 30px;
                                line-height: 17px;
                                list-style-type: circle;
                                opacity: 0;
                                outline-color: rgb(10, 37, 64);
                                perspective-origin: 50% 50%;
                                pointer-events: none;
                                position: absolute;
                                right: 30px;
                                text-decoration: none solid rgb(10, 37, 64);
                                text-emphasis-color: rgb(10, 37, 64);
                                text-shadow: rgba(10, 37, 64, 0.7) 0px 0px 0px;
                                top: 50%;
                                transform-origin: 50% 50%;
                                user-select: none;
                                visibility: hidden;
                                width: 7px;
                                -webkit-text-fill-color: rgb(10, 37, 64);
                                -webkit-text-stroke-color: rgb(10, 37, 64);
                              "
                              ><!--?xml version="1.0" encoding="utf-8"?--><svg
                                version="1.1"
                                id="Layer_1"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                x="0px"
                                y="0px"
                                viewBox="0 0 9.5 16"
                                style="
                                  animation-duration: 0.001s;
                                  block-size: auto;
                                  border-block-color: rgb(10, 37, 64);
                                  border-color: rgb(10, 37, 64);
                                  border-inline-color: rgb(10, 37, 64);
                                  caret-color: rgb(10, 37, 64);
                                  color: rgb(10, 37, 64);
                                  column-rule-color: rgb(10, 37, 64);
                                  cursor: pointer;
                                  font-size: 17px;
                                  font-style: italic;
                                  height: auto;
                                  inline-size: 100%;
                                  line-height: 17px;
                                  list-style-type: circle;
                                  max-block-size: 100%;
                                  max-height: 100%;
                                  outline-color: rgb(10, 37, 64);
                                  overflow-clip-margin: content-box;
                                  overflow: hidden;
                                  perspective-origin: 50% 50%;
                                  pointer-events: none;
                                  text-decoration: none solid rgb(10, 37, 64);
                                  text-emphasis-color: rgb(10, 37, 64);
                                  text-shadow: rgba(10, 37, 64, 0.7) 0px 0px 0px;
                                  transform-origin: 50% 50%;
                                  user-select: none;
                                  visibility: hidden;
                                  width: 100%;
                                  -webkit-text-fill-color: rgb(10, 37, 64);
                                  -webkit-text-stroke-color: rgb(10, 37, 64);
                                "
                                xml:space="preserve"
                              >
                                <path d="M1.5,0L0,1.5L6.5,8L0,14.5L1.5,16l8-8L1.5,0z"></path></svg></i
                          ></a>
                        </li>
                        <li style="animation-duration: 0.001s; block-size: auto; height: auto; inline-size: 100%; list-style-type: circle; perspective-origin: 50% 50%; pointer-events: none; transform-origin: 50% 50%; visibility: hidden; width: 100%">
                          <a
                            href="/accessflow/integrate"
                            tabindex="-1"
                            data-acsb-clickable="true"
                            data-acsb-navigable="true"
                            data-acsb-now-navigable="false"
                            data-custom-button-processed="true"
                            style="
                              animation-duration: 0.001s;
                              border-block-color: rgb(10, 37, 64);
                              border-color: rgb(10, 37, 64);
                              border-radius: 10px;
                              border-end-end-radius: 10px;
                              border-end-start-radius: 10px;
                              border-inline-color: rgb(10, 37, 64);
                              border-start-end-radius: 10px;
                              border-start-start-radius: 10px;
                              caret-color: rgb(10, 37, 64);
                              color: rgb(10, 37, 64);
                              column-rule-color: rgb(10, 37, 64);
                              cursor: pointer;
                              display: block;
                              font-size: 17px;
                              inline-size: calc(100% - 40px);
                              line-height: 25.5px;
                              list-style-type: circle;
                              margin-block: auto;
                              margin: auto;
                              margin-inline: auto;
                              outline-color: rgb(10, 37, 64);
                              padding-block: 10px;
                              padding: 10px 20px;
                              padding-inline: 20px;
                              perspective-origin: 50% 50%;
                              pointer-events: none;
                              position: relative;
                              text-decoration: none solid rgb(10, 37, 64);
                              text-emphasis-color: rgb(10, 37, 64);
                              text-shadow: rgba(10, 37, 64, 0.7) 0px 0px 0px;
                              transform-origin: 50% 50%;
                              visibility: hidden;
                              width: calc(100% - 40px);
                              -webkit-text-fill-color: rgb(10, 37, 64);
                              -webkit-text-stroke-color: rgb(10, 37, 64);
                            "
                          >
                            Integrate
                            <i
                              class="icon icon-chevron-right"
                              aria-hidden="true"
                              role="presentation"
                              style="
                                animation-duration: 0.001s;
                                border-block-color: rgb(10, 37, 64);
                                border-color: rgb(10, 37, 64);
                                border-inline-color: rgb(10, 37, 64);
                                caret-color: rgb(10, 37, 64);
                                color: rgb(10, 37, 64);
                                column-rule-color: rgb(10, 37, 64);
                                cursor: pointer;
                                display: block;
                                font-size: 17px;
                                inline-size: 7px;
                                inset-block-start: 50%;
                                inset-inline-end: 30px;
                                line-height: 17px;
                                list-style-type: circle;
                                opacity: 0;
                                outline-color: rgb(10, 37, 64);
                                perspective-origin: 50% 50%;
                                pointer-events: none;
                                position: absolute;
                                right: 30px;
                                text-decoration: none solid rgb(10, 37, 64);
                                text-emphasis-color: rgb(10, 37, 64);
                                text-shadow: rgba(10, 37, 64, 0.7) 0px 0px 0px;
                                top: 50%;
                                transform-origin: 50% 50%;
                                user-select: none;
                                visibility: hidden;
                                width: 7px;
                                -webkit-text-fill-color: rgb(10, 37, 64);
                                -webkit-text-stroke-color: rgb(10, 37, 64);
                              "
                              ><!--?xml version="1.0" encoding="utf-8"?--><svg
                                version="1.1"
                                id="Layer_1"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                x="0px"
                                y="0px"
                                viewBox="0 0 9.5 16"
                                style="
                                  animation-duration: 0.001s;
                                  block-size: auto;
                                  border-block-color: rgb(10, 37, 64);
                                  border-color: rgb(10, 37, 64);
                                  border-inline-color: rgb(10, 37, 64);
                                  caret-color: rgb(10, 37, 64);
                                  color: rgb(10, 37, 64);
                                  column-rule-color: rgb(10, 37, 64);
                                  cursor: pointer;
                                  font-size: 17px;
                                  font-style: italic;
                                  height: auto;
                                  inline-size: 100%;
                                  line-height: 17px;
                                  list-style-type: circle;
                                  max-block-size: 100%;
                                  max-height: 100%;
                                  outline-color: rgb(10, 37, 64);
                                  overflow-clip-margin: content-box;
                                  overflow: hidden;
                                  perspective-origin: 50% 50%;
                                  pointer-events: none;
                                  text-decoration: none solid rgb(10, 37, 64);
                                  text-emphasis-color: rgb(10, 37, 64);
                                  text-shadow: rgba(10, 37, 64, 0.7) 0px 0px 0px;
                                  transform-origin: 50% 50%;
                                  user-select: none;
                                  visibility: hidden;
                                  width: 100%;
                                  -webkit-text-fill-color: rgb(10, 37, 64);
                                  -webkit-text-stroke-color: rgb(10, 37, 64);
                                "
                                xml:space="preserve"
                              >
                                <path d="M1.5,0L0,1.5L6.5,8L0,14.5L1.5,16l8-8L1.5,0z"></path></svg></i
                          ></a>
                        </li>
                      </ul>
                    </div>
                    <div class="part-category" style="animation-duration: 0.001s; block-size: auto; height: auto; inline-size: 50%; padding-block: 30px; padding: 30px; padding-inline: 30px; perspective-origin: 50% 50%; pointer-events: none; transform-origin: 50% 50%; visibility: hidden; width: 50%">
                      <a
                        href="/accesswidget"
                        class="part-menu-head"
                        tabindex="-1"
                        data-acsb-clickable="true"
                        data-acsb-navigable="true"
                        data-acsb-now-navigable="false"
                        data-custom-button-processed="true"
                        style="
                          animation-duration: 0.001s;
                          border-block-end: 1px solid rgb(227, 232, 251);
                          border-bottom: 1px solid rgb(227, 232, 251);
                          cursor: pointer;
                          display: block;
                          margin-block-end: 15px;
                          margin-bottom: 15px;
                          padding-block-end: 20px;
                          padding-bottom: 20px;
                          padding-inline: 40px;
                          padding-left: 40px;
                          padding-right: 40px;
                          perspective-origin: 50% 50%;
                          pointer-events: none;
                          text-wrap-mode: nowrap;
                          transform-origin: 50% 50%;
                          visibility: hidden;
                        "
                        ><img
                          alt="accessWidget"
                          style="
                            animation-duration: 0.001s;
                            block-size: 33px;
                            border-block-color: rgb(19, 110, 248);
                            border-color: rgb(19, 110, 248);
                            border-inline-color: rgb(19, 110, 248);
                            caret-color: rgb(19, 110, 248);
                            color: rgb(19, 110, 248);
                            column-rule-color: rgb(19, 110, 248);
                            cursor: pointer;
                            display: block;
                            height: 33px;
                            inline-size: auto;
                            margin-inline-start: -40px;
                            margin-left: -40px;
                            outline-color: rgb(19, 110, 248);
                            perspective-origin: 50% 50%;
                            pointer-events: none;
                            text-decoration: none solid rgb(19, 110, 248);
                            text-emphasis-color: rgb(19, 110, 248);
                            text-wrap-mode: nowrap;
                            transform-origin: 50% 50%;
                            visibility: hidden;
                            width: auto;
                            -webkit-text-fill-color: rgb(19, 110, 248);
                            -webkit-text-stroke-color: rgb(19, 110, 248);
                          "
                        /><span
                          class="desc"
                          style="
                            animation-duration: 0.001s;
                            border-block-color: rgb(19, 110, 248);
                            border-color: rgb(19, 110, 248);
                            border-inline-color: rgb(19, 110, 248);
                            caret-color: rgb(19, 110, 248);
                            color: rgb(19, 110, 248);
                            column-rule-color: rgb(19, 110, 248);
                            cursor: pointer;
                            display: block;
                            font-size: 15px;
                            letter-spacing: 0.3px;
                            line-height: 22.5px;
                            margin-block-start: 5px;
                            margin-top: 5px;
                            outline-color: rgb(19, 110, 248);
                            perspective-origin: 50% 50%;
                            pointer-events: none;
                            text-decoration: none solid rgb(19, 110, 248);
                            text-emphasis-color: rgb(19, 110, 248);
                            text-shadow: rgba(19, 110, 248, 0.8) 0px 0px 0px;
                            text-wrap-mode: nowrap;
                            transform-origin: 50% 50%;
                            visibility: hidden;
                            -webkit-text-fill-color: rgb(19, 110, 248);
                            -webkit-text-stroke-color: rgb(19, 110, 248);
                          "
                          >AI-Powered Web Accessibility</span
                        ></a
                      >
                      <ul
                        class="flex"
                        data-acsb-menu="ul"
                        role="region"
                        aria-label="Submenu"
                        style="align-items: center; animation-duration: 0.001s; block-size: auto; display: flex; flex-wrap: wrap; height: auto; inline-size: 100%; justify-content: space-between; list-style-type: circle; perspective-origin: 50% 50%; pointer-events: none; transform-origin: 50% 50%; visibility: hidden; width: 100%"
                      >
                        <li style="animation-duration: 0.001s; block-size: auto; height: auto; inline-size: 100%; list-style-type: circle; margin-block-end: 15px; margin-bottom: 15px; perspective-origin: 50% 50%; pointer-events: none; transform-origin: 50% 50%; visibility: hidden; width: 100%">
                          <a
                            href="/accesswidget"
                            tabindex="-1"
                            data-acsb-clickable="true"
                            data-acsb-navigable="true"
                            data-acsb-now-navigable="false"
                            data-custom-button-processed="true"
                            style="
                              animation-duration: 0.001s;
                              border-block-color: rgb(10, 37, 64);
                              border-color: rgb(10, 37, 64);
                              border-radius: 10px;
                              border-end-end-radius: 10px;
                              border-end-start-radius: 10px;
                              border-inline-color: rgb(10, 37, 64);
                              border-start-end-radius: 10px;
                              border-start-start-radius: 10px;
                              caret-color: rgb(10, 37, 64);
                              color: rgb(10, 37, 64);
                              column-rule-color: rgb(10, 37, 64);
                              cursor: pointer;
                              display: block;
                              font-size: 17px;
                              inline-size: calc(100% - 40px);
                              line-height: 25.5px;
                              list-style-type: circle;
                              margin-block: auto;
                              margin: auto;
                              margin-inline: auto;
                              outline-color: rgb(10, 37, 64);
                              padding-block: 10px;
                              padding: 10px 20px;
                              padding-inline: 20px;
                              perspective-origin: 50% 50%;
                              pointer-events: none;
                              position: relative;
                              text-decoration: none solid rgb(10, 37, 64);
                              text-emphasis-color: rgb(10, 37, 64);
                              text-shadow: rgba(10, 37, 64, 0.7) 0px 0px 0px;
                              transform-origin: 50% 50%;
                              visibility: hidden;
                              width: calc(100% - 40px);
                              -webkit-text-fill-color: rgb(10, 37, 64);
                              -webkit-text-stroke-color: rgb(10, 37, 64);
                            "
                          >
                            accessWidget Overview
                            <i
                              class="icon icon-chevron-right"
                              aria-hidden="true"
                              role="presentation"
                              style="
                                animation-duration: 0.001s;
                                border-block-color: rgb(10, 37, 64);
                                border-color: rgb(10, 37, 64);
                                border-inline-color: rgb(10, 37, 64);
                                caret-color: rgb(10, 37, 64);
                                color: rgb(10, 37, 64);
                                column-rule-color: rgb(10, 37, 64);
                                cursor: pointer;
                                display: block;
                                font-size: 17px;
                                inline-size: 7px;
                                inset-block-start: 50%;
                                inset-inline-end: 30px;
                                line-height: 17px;
                                list-style-type: circle;
                                opacity: 0;
                                outline-color: rgb(10, 37, 64);
                                perspective-origin: 50% 50%;
                                pointer-events: none;
                                position: absolute;
                                right: 30px;
                                text-decoration: none solid rgb(10, 37, 64);
                                text-emphasis-color: rgb(10, 37, 64);
                                text-shadow: rgba(10, 37, 64, 0.7) 0px 0px 0px;
                                top: 50%;
                                transform-origin: 50% 50%;
                                user-select: none;
                                visibility: hidden;
                                width: 7px;
                                -webkit-text-fill-color: rgb(10, 37, 64);
                                -webkit-text-stroke-color: rgb(10, 37, 64);
                              "
                              ><!--?xml version="1.0" encoding="utf-8"?--><svg
                                version="1.1"
                                id="Layer_1"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                x="0px"
                                y="0px"
                                viewBox="0 0 9.5 16"
                                style="
                                  animation-duration: 0.001s;
                                  block-size: auto;
                                  border-block-color: rgb(10, 37, 64);
                                  border-color: rgb(10, 37, 64);
                                  border-inline-color: rgb(10, 37, 64);
                                  caret-color: rgb(10, 37, 64);
                                  color: rgb(10, 37, 64);
                                  column-rule-color: rgb(10, 37, 64);
                                  cursor: pointer;
                                  font-size: 17px;
                                  font-style: italic;
                                  height: auto;
                                  inline-size: 100%;
                                  line-height: 17px;
                                  list-style-type: circle;
                                  max-block-size: 100%;
                                  max-height: 100%;
                                  outline-color: rgb(10, 37, 64);
                                  overflow-clip-margin: content-box;
                                  overflow: hidden;
                                  perspective-origin: 50% 50%;
                                  pointer-events: none;
                                  text-decoration: none solid rgb(10, 37, 64);
                                  text-emphasis-color: rgb(10, 37, 64);
                                  text-shadow: rgba(10, 37, 64, 0.7) 0px 0px 0px;
                                  transform-origin: 50% 50%;
                                  user-select: none;
                                  visibility: hidden;
                                  width: 100%;
                                  -webkit-text-fill-color: rgb(10, 37, 64);
                                  -webkit-text-stroke-color: rgb(10, 37, 64);
                                "
                                xml:space="preserve"
                              >
                                <path d="M1.5,0L0,1.5L6.5,8L0,14.5L1.5,16l8-8L1.5,0z"></path></svg></i
                          ></a>
                        </li>
                        <li style="animation-duration: 0.001s; block-size: auto; height: auto; inline-size: 100%; list-style-type: circle; margin-block-end: 15px; margin-bottom: 15px; perspective-origin: 50% 50%; pointer-events: none; transform-origin: 50% 50%; visibility: hidden; width: 100%">
                          <a
                            href="/accesswidget/examples"
                            tabindex="-1"
                            data-acsb-clickable="true"
                            data-acsb-navigable="true"
                            data-acsb-now-navigable="false"
                            data-custom-button-processed="true"
                            style="
                              animation-duration: 0.001s;
                              border-block-color: rgb(10, 37, 64);
                              border-color: rgb(10, 37, 64);
                              border-radius: 10px;
                              border-end-end-radius: 10px;
                              border-end-start-radius: 10px;
                              border-inline-color: rgb(10, 37, 64);
                              border-start-end-radius: 10px;
                              border-start-start-radius: 10px;
                              caret-color: rgb(10, 37, 64);
                              color: rgb(10, 37, 64);
                              column-rule-color: rgb(10, 37, 64);
                              cursor: pointer;
                              display: block;
                              font-size: 17px;
                              inline-size: calc(100% - 40px);
                              line-height: 25.5px;
                              list-style-type: circle;
                              margin-block: auto;
                              margin: auto;
                              margin-inline: auto;
                              outline-color: rgb(10, 37, 64);
                              padding-block: 10px;
                              padding: 10px 20px;
                              padding-inline: 20px;
                              perspective-origin: 50% 50%;
                              pointer-events: none;
                              position: relative;
                              text-decoration: none solid rgb(10, 37, 64);
                              text-emphasis-color: rgb(10, 37, 64);
                              text-shadow: rgba(10, 37, 64, 0.7) 0px 0px 0px;
                              transform-origin: 50% 50%;
                              visibility: hidden;
                              width: calc(100% - 40px);
                              -webkit-text-fill-color: rgb(10, 37, 64);
                              -webkit-text-stroke-color: rgb(10, 37, 64);
                            "
                          >
                            Examples &amp; Customers
                            <i
                              class="icon icon-chevron-right"
                              aria-hidden="true"
                              role="presentation"
                              style="
                                animation-duration: 0.001s;
                                border-block-color: rgb(10, 37, 64);
                                border-color: rgb(10, 37, 64);
                                border-inline-color: rgb(10, 37, 64);
                                caret-color: rgb(10, 37, 64);
                                color: rgb(10, 37, 64);
                                column-rule-color: rgb(10, 37, 64);
                                cursor: pointer;
                                display: block;
                                font-size: 17px;
                                inline-size: 7px;
                                inset-block-start: 50%;
                                inset-inline-end: 30px;
                                line-height: 17px;
                                list-style-type: circle;
                                opacity: 0;
                                outline-color: rgb(10, 37, 64);
                                perspective-origin: 50% 50%;
                                pointer-events: none;
                                position: absolute;
                                right: 30px;
                                text-decoration: none solid rgb(10, 37, 64);
                                text-emphasis-color: rgb(10, 37, 64);
                                text-shadow: rgba(10, 37, 64, 0.7) 0px 0px 0px;
                                top: 50%;
                                transform-origin: 50% 50%;
                                user-select: none;
                                visibility: hidden;
                                width: 7px;
                                -webkit-text-fill-color: rgb(10, 37, 64);
                                -webkit-text-stroke-color: rgb(10, 37, 64);
                              "
                              ><!--?xml version="1.0" encoding="utf-8"?--><svg
                                version="1.1"
                                id="Layer_1"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                x="0px"
                                y="0px"
                                viewBox="0 0 9.5 16"
                                style="
                                  animation-duration: 0.001s;
                                  block-size: auto;
                                  border-block-color: rgb(10, 37, 64);
                                  border-color: rgb(10, 37, 64);
                                  border-inline-color: rgb(10, 37, 64);
                                  caret-color: rgb(10, 37, 64);
                                  color: rgb(10, 37, 64);
                                  column-rule-color: rgb(10, 37, 64);
                                  cursor: pointer;
                                  font-size: 17px;
                                  font-style: italic;
                                  height: auto;
                                  inline-size: 100%;
                                  line-height: 17px;
                                  list-style-type: circle;
                                  max-block-size: 100%;
                                  max-height: 100%;
                                  outline-color: rgb(10, 37, 64);
                                  overflow-clip-margin: content-box;
                                  overflow: hidden;
                                  perspective-origin: 50% 50%;
                                  pointer-events: none;
                                  text-decoration: none solid rgb(10, 37, 64);
                                  text-emphasis-color: rgb(10, 37, 64);
                                  text-shadow: rgba(10, 37, 64, 0.7) 0px 0px 0px;
                                  transform-origin: 50% 50%;
                                  user-select: none;
                                  visibility: hidden;
                                  width: 100%;
                                  -webkit-text-fill-color: rgb(10, 37, 64);
                                  -webkit-text-stroke-color: rgb(10, 37, 64);
                                "
                                xml:space="preserve"
                              >
                                <path d="M1.5,0L0,1.5L6.5,8L0,14.5L1.5,16l8-8L1.5,0z"></path></svg></i
                          ></a>
                        </li>
                        <li style="animation-duration: 0.001s; block-size: auto; height: auto; inline-size: 100%; list-style-type: circle; margin-block-end: 15px; margin-bottom: 15px; perspective-origin: 50% 50%; pointer-events: none; transform-origin: 50% 50%; visibility: hidden; width: 100%">
                          <a
                            href="/accesswidget/artificial-intelligence"
                            tabindex="-1"
                            data-acsb-clickable="true"
                            data-acsb-navigable="true"
                            data-acsb-now-navigable="false"
                            data-custom-button-processed="true"
                            style="
                              animation-duration: 0.001s;
                              border-block-color: rgb(10, 37, 64);
                              border-color: rgb(10, 37, 64);
                              border-radius: 10px;
                              border-end-end-radius: 10px;
                              border-end-start-radius: 10px;
                              border-inline-color: rgb(10, 37, 64);
                              border-start-end-radius: 10px;
                              border-start-start-radius: 10px;
                              caret-color: rgb(10, 37, 64);
                              color: rgb(10, 37, 64);
                              column-rule-color: rgb(10, 37, 64);
                              cursor: pointer;
                              display: block;
                              font-size: 17px;
                              inline-size: calc(100% - 40px);
                              line-height: 25.5px;
                              list-style-type: circle;
                              margin-block: auto;
                              margin: auto;
                              margin-inline: auto;
                              outline-color: rgb(10, 37, 64);
                              padding-block: 10px;
                              padding: 10px 20px;
                              padding-inline: 20px;
                              perspective-origin: 50% 50%;
                              pointer-events: none;
                              position: relative;
                              text-decoration: none solid rgb(10, 37, 64);
                              text-emphasis-color: rgb(10, 37, 64);
                              text-shadow: rgba(10, 37, 64, 0.7) 0px 0px 0px;
                              transform-origin: 50% 50%;
                              visibility: hidden;
                              width: calc(100% - 40px);
                              -webkit-text-fill-color: rgb(10, 37, 64);
                              -webkit-text-stroke-color: rgb(10, 37, 64);
                            "
                          >
                            Artificial Intelligence
                            <i
                              class="icon icon-chevron-right"
                              aria-hidden="true"
                              role="presentation"
                              style="
                                animation-duration: 0.001s;
                                border-block-color: rgb(10, 37, 64);
                                border-color: rgb(10, 37, 64);
                                border-inline-color: rgb(10, 37, 64);
                                caret-color: rgb(10, 37, 64);
                                color: rgb(10, 37, 64);
                                column-rule-color: rgb(10, 37, 64);
                                cursor: pointer;
                                display: block;
                                font-size: 17px;
                                inline-size: 7px;
                                inset-block-start: 50%;
                                inset-inline-end: 30px;
                                line-height: 17px;
                                list-style-type: circle;
                                opacity: 0;
                                outline-color: rgb(10, 37, 64);
                                perspective-origin: 50% 50%;
                                pointer-events: none;
                                position: absolute;
                                right: 30px;
                                text-decoration: none solid rgb(10, 37, 64);
                                text-emphasis-color: rgb(10, 37, 64);
                                text-shadow: rgba(10, 37, 64, 0.7) 0px 0px 0px;
                                top: 50%;
                                transform-origin: 50% 50%;
                                user-select: none;
                                visibility: hidden;
                                width: 7px;
                                -webkit-text-fill-color: rgb(10, 37, 64);
                                -webkit-text-stroke-color: rgb(10, 37, 64);
                              "
                              ><!--?xml version="1.0" encoding="utf-8"?--><svg
                                version="1.1"
                                id="Layer_1"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                x="0px"
                                y="0px"
                                viewBox="0 0 9.5 16"
                                style="
                                  animation-duration: 0.001s;
                                  block-size: auto;
                                  border-block-color: rgb(10, 37, 64);
                                  border-color: rgb(10, 37, 64);
                                  border-inline-color: rgb(10, 37, 64);
                                  caret-color: rgb(10, 37, 64);
                                  color: rgb(10, 37, 64);
                                  column-rule-color: rgb(10, 37, 64);
                                  cursor: pointer;
                                  font-size: 17px;
                                  font-style: italic;
                                  height: auto;
                                  inline-size: 100%;
                                  line-height: 17px;
                                  list-style-type: circle;
                                  max-block-size: 100%;
                                  max-height: 100%;
                                  outline-color: rgb(10, 37, 64);
                                  overflow-clip-margin: content-box;
                                  overflow: hidden;
                                  perspective-origin: 50% 50%;
                                  pointer-events: none;
                                  text-decoration: none solid rgb(10, 37, 64);
                                  text-emphasis-color: rgb(10, 37, 64);
                                  text-shadow: rgba(10, 37, 64, 0.7) 0px 0px 0px;
                                  transform-origin: 50% 50%;
                                  user-select: none;
                                  visibility: hidden;
                                  width: 100%;
                                  -webkit-text-fill-color: rgb(10, 37, 64);
                                  -webkit-text-stroke-color: rgb(10, 37, 64);
                                "
                                xml:space="preserve"
                              >
                                <path d="M1.5,0L0,1.5L6.5,8L0,14.5L1.5,16l8-8L1.5,0z"></path></svg></i
                          ></a>
                        </li>
                        <li style="animation-duration: 0.001s; block-size: auto; height: auto; inline-size: 100%; list-style-type: circle; margin-block-end: 15px; margin-bottom: 15px; perspective-origin: 50% 50%; pointer-events: none; transform-origin: 50% 50%; visibility: hidden; width: 100%">
                          <a
                            href="/accesswidget/interface"
                            tabindex="-1"
                            data-acsb-clickable="true"
                            data-acsb-navigable="true"
                            data-acsb-now-navigable="false"
                            data-custom-button-processed="true"
                            style="
                              animation-duration: 0.001s;
                              border-block-color: rgb(10, 37, 64);
                              border-color: rgb(10, 37, 64);
                              border-radius: 10px;
                              border-end-end-radius: 10px;
                              border-end-start-radius: 10px;
                              border-inline-color: rgb(10, 37, 64);
                              border-start-end-radius: 10px;
                              border-start-start-radius: 10px;
                              caret-color: rgb(10, 37, 64);
                              color: rgb(10, 37, 64);
                              column-rule-color: rgb(10, 37, 64);
                              cursor: pointer;
                              display: block;
                              font-size: 17px;
                              inline-size: calc(100% - 40px);
                              line-height: 25.5px;
                              list-style-type: circle;
                              margin-block: auto;
                              margin: auto;
                              margin-inline: auto;
                              outline-color: rgb(10, 37, 64);
                              padding-block: 10px;
                              padding: 10px 20px;
                              padding-inline: 20px;
                              perspective-origin: 50% 50%;
                              pointer-events: none;
                              position: relative;
                              text-decoration: none solid rgb(10, 37, 64);
                              text-emphasis-color: rgb(10, 37, 64);
                              text-shadow: rgba(10, 37, 64, 0.7) 0px 0px 0px;
                              transform-origin: 50% 50%;
                              visibility: hidden;
                              width: calc(100% - 40px);
                              -webkit-text-fill-color: rgb(10, 37, 64);
                              -webkit-text-stroke-color: rgb(10, 37, 64);
                            "
                          >
                            Accessibility Interface
                            <i
                              class="icon icon-chevron-right"
                              aria-hidden="true"
                              role="presentation"
                              style="
                                animation-duration: 0.001s;
                                border-block-color: rgb(10, 37, 64);
                                border-color: rgb(10, 37, 64);
                                border-inline-color: rgb(10, 37, 64);
                                caret-color: rgb(10, 37, 64);
                                color: rgb(10, 37, 64);
                                column-rule-color: rgb(10, 37, 64);
                                cursor: pointer;
                                display: block;
                                font-size: 17px;
                                inline-size: 7px;
                                inset-block-start: 50%;
                                inset-inline-end: 30px;
                                line-height: 17px;
                                list-style-type: circle;
                                opacity: 0;
                                outline-color: rgb(10, 37, 64);
                                perspective-origin: 50% 50%;
                                pointer-events: none;
                                position: absolute;
                                right: 30px;
                                text-decoration: none solid rgb(10, 37, 64);
                                text-emphasis-color: rgb(10, 37, 64);
                                text-shadow: rgba(10, 37, 64, 0.7) 0px 0px 0px;
                                top: 50%;
                                transform-origin: 50% 50%;
                                user-select: none;
                                visibility: hidden;
                                width: 7px;
                                -webkit-text-fill-color: rgb(10, 37, 64);
                                -webkit-text-stroke-color: rgb(10, 37, 64);
                              "
                              ><!--?xml version="1.0" encoding="utf-8"?--><svg
                                version="1.1"
                                id="Layer_1"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                x="0px"
                                y="0px"
                                viewBox="0 0 9.5 16"
                                style="
                                  animation-duration: 0.001s;
                                  block-size: auto;
                                  border-block-color: rgb(10, 37, 64);
                                  border-color: rgb(10, 37, 64);
                                  border-inline-color: rgb(10, 37, 64);
                                  caret-color: rgb(10, 37, 64);
                                  color: rgb(10, 37, 64);
                                  column-rule-color: rgb(10, 37, 64);
                                  cursor: pointer;
                                  font-size: 17px;
                                  font-style: italic;
                                  height: auto;
                                  inline-size: 100%;
                                  line-height: 17px;
                                  list-style-type: circle;
                                  max-block-size: 100%;
                                  max-height: 100%;
                                  outline-color: rgb(10, 37, 64);
                                  overflow-clip-margin: content-box;
                                  overflow: hidden;
                                  perspective-origin: 50% 50%;
                                  pointer-events: none;
                                  text-decoration: none solid rgb(10, 37, 64);
                                  text-emphasis-color: rgb(10, 37, 64);
                                  text-shadow: rgba(10, 37, 64, 0.7) 0px 0px 0px;
                                  transform-origin: 50% 50%;
                                  user-select: none;
                                  visibility: hidden;
                                  width: 100%;
                                  -webkit-text-fill-color: rgb(10, 37, 64);
                                  -webkit-text-stroke-color: rgb(10, 37, 64);
                                "
                                xml:space="preserve"
                              >
                                <path d="M1.5,0L0,1.5L6.5,8L0,14.5L1.5,16l8-8L1.5,0z"></path></svg></i
                          ></a>
                        </li>
                        <li style="animation-duration: 0.001s; block-size: auto; height: auto; inline-size: 100%; list-style-type: circle; margin-block-end: 15px; margin-bottom: 15px; perspective-origin: 50% 50%; pointer-events: none; transform-origin: 50% 50%; visibility: hidden; width: 100%">
                          <a
                            href=""
                            tabindex="-1"
                            data-acsb-clickable="true"
                            data-acsb-navigable="true"
                            data-acsb-now-navigable="false"
                            data-custom-button-processed="true"
                            style="
                              animation-duration: 0.001s;
                              border-block-color: rgb(10, 37, 64);
                              border-color: rgb(10, 37, 64);
                              border-radius: 10px;
                              border-end-end-radius: 10px;
                              border-end-start-radius: 10px;
                              border-inline-color: rgb(10, 37, 64);
                              border-start-end-radius: 10px;
                              border-start-start-radius: 10px;
                              caret-color: rgb(10, 37, 64);
                              color: rgb(10, 37, 64);
                              column-rule-color: rgb(10, 37, 64);
                              cursor: pointer;
                              display: block;
                              font-size: 17px;
                              inline-size: calc(100% - 40px);
                              line-height: 25.5px;
                              list-style-type: circle;
                              margin-block: auto;
                              margin: auto;
                              margin-inline: auto;
                              outline-color: rgb(10, 37, 64);
                              padding-block: 10px;
                              padding: 10px 20px;
                              padding-inline: 20px;
                              perspective-origin: 50% 50%;
                              pointer-events: none;
                              position: relative;
                              text-decoration: none solid rgb(10, 37, 64);
                              text-emphasis-color: rgb(10, 37, 64);
                              text-shadow: rgba(10, 37, 64, 0.7) 0px 0px 0px;
                              transform-origin: 50% 50%;
                              visibility: hidden;
                              width: calc(100% - 40px);
                              -webkit-text-fill-color: rgb(10, 37, 64);
                              -webkit-text-stroke-color: rgb(10, 37, 64);
                            "
                          >
                            accessiBe VS Competitors
                            <i
                              class="icon icon-chevron-right"
                              aria-hidden="true"
                              role="presentation"
                              style="
                                animation-duration: 0.001s;
                                border-block-color: rgb(10, 37, 64);
                                border-color: rgb(10, 37, 64);
                                border-inline-color: rgb(10, 37, 64);
                                caret-color: rgb(10, 37, 64);
                                color: rgb(10, 37, 64);
                                column-rule-color: rgb(10, 37, 64);
                                cursor: pointer;
                                display: block;
                                font-size: 17px;
                                inline-size: 7px;
                                inset-block-start: 50%;
                                inset-inline-end: 30px;
                                line-height: 17px;
                                list-style-type: circle;
                                opacity: 0;
                                outline-color: rgb(10, 37, 64);
                                perspective-origin: 50% 50%;
                                pointer-events: none;
                                position: absolute;
                                right: 30px;
                                text-decoration: none solid rgb(10, 37, 64);
                                text-emphasis-color: rgb(10, 37, 64);
                                text-shadow: rgba(10, 37, 64, 0.7) 0px 0px 0px;
                                top: 50%;
                                transform-origin: 50% 50%;
                                user-select: none;
                                visibility: hidden;
                                width: 7px;
                                -webkit-text-fill-color: rgb(10, 37, 64);
                                -webkit-text-stroke-color: rgb(10, 37, 64);
                              "
                              ><!--?xml version="1.0" encoding="utf-8"?--><svg
                                version="1.1"
                                id="Layer_1"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                x="0px"
                                y="0px"
                                viewBox="0 0 9.5 16"
                                style="
                                  animation-duration: 0.001s;
                                  block-size: auto;
                                  border-block-color: rgb(10, 37, 64);
                                  border-color: rgb(10, 37, 64);
                                  border-inline-color: rgb(10, 37, 64);
                                  caret-color: rgb(10, 37, 64);
                                  color: rgb(10, 37, 64);
                                  column-rule-color: rgb(10, 37, 64);
                                  cursor: pointer;
                                  font-size: 17px;
                                  font-style: italic;
                                  height: auto;
                                  inline-size: 100%;
                                  line-height: 17px;
                                  list-style-type: circle;
                                  max-block-size: 100%;
                                  max-height: 100%;
                                  outline-color: rgb(10, 37, 64);
                                  overflow-clip-margin: content-box;
                                  overflow: hidden;
                                  perspective-origin: 50% 50%;
                                  pointer-events: none;
                                  text-decoration: none solid rgb(10, 37, 64);
                                  text-emphasis-color: rgb(10, 37, 64);
                                  text-shadow: rgba(10, 37, 64, 0.7) 0px 0px 0px;
                                  transform-origin: 50% 50%;
                                  user-select: none;
                                  visibility: hidden;
                                  width: 100%;
                                  -webkit-text-fill-color: rgb(10, 37, 64);
                                  -webkit-text-stroke-color: rgb(10, 37, 64);
                                "
                                xml:space="preserve"
                              >
                                <path d="M1.5,0L0,1.5L6.5,8L0,14.5L1.5,16l8-8L1.5,0z"></path></svg></i
                          ></a>
                        </li>
                        <li style="animation-duration: 0.001s; block-size: auto; height: auto; inline-size: 100%; list-style-type: circle; perspective-origin: 50% 50%; pointer-events: none; transform-origin: 50% 50%; visibility: hidden; width: 100%">
                          <a
                            href="/accesswidget/security"
                            tabindex="-1"
                            data-acsb-clickable="true"
                            data-acsb-navigable="true"
                            data-acsb-now-navigable="false"
                            data-custom-button-processed="true"
                            style="
                              animation-duration: 0.001s;
                              border-block-color: rgb(10, 37, 64);
                              border-color: rgb(10, 37, 64);
                              border-radius: 10px;
                              border-end-end-radius: 10px;
                              border-end-start-radius: 10px;
                              border-inline-color: rgb(10, 37, 64);
                              border-start-end-radius: 10px;
                              border-start-start-radius: 10px;
                              caret-color: rgb(10, 37, 64);
                              color: rgb(10, 37, 64);
                              column-rule-color: rgb(10, 37, 64);
                              cursor: pointer;
                              display: block;
                              font-size: 17px;
                              inline-size: calc(100% - 40px);
                              line-height: 25.5px;
                              list-style-type: circle;
                              margin-block: auto;
                              margin: auto;
                              margin-inline: auto;
                              outline-color: rgb(10, 37, 64);
                              padding-block: 10px;
                              padding: 10px 20px;
                              padding-inline: 20px;
                              perspective-origin: 50% 50%;
                              pointer-events: none;
                              position: relative;
                              text-decoration: none solid rgb(10, 37, 64);
                              text-emphasis-color: rgb(10, 37, 64);
                              text-shadow: rgba(10, 37, 64, 0.7) 0px 0px 0px;
                              transform-origin: 50% 50%;
                              visibility: hidden;
                              width: calc(100% - 40px);
                              -webkit-text-fill-color: rgb(10, 37, 64);
                              -webkit-text-stroke-color: rgb(10, 37, 64);
                            "
                          >
                            Security &amp; Privacy
                            <i
                              class="icon icon-chevron-right"
                              aria-hidden="true"
                              role="presentation"
                              style="
                                animation-duration: 0.001s;
                                border-block-color: rgb(10, 37, 64);
                                border-color: rgb(10, 37, 64);
                                border-inline-color: rgb(10, 37, 64);
                                caret-color: rgb(10, 37, 64);
                                color: rgb(10, 37, 64);
                                column-rule-color: rgb(10, 37, 64);
                                cursor: pointer;
                                display: block;
                                font-size: 17px;
                                inline-size: 7px;
                                inset-block-start: 50%;
                                inset-inline-end: 30px;
                                line-height: 17px;
                                list-style-type: circle;
                                opacity: 0;
                                outline-color: rgb(10, 37, 64);
                                perspective-origin: 50% 50%;
                                pointer-events: none;
                                position: absolute;
                                right: 30px;
                                text-decoration: none solid rgb(10, 37, 64);
                                text-emphasis-color: rgb(10, 37, 64);
                                text-shadow: rgba(10, 37, 64, 0.7) 0px 0px 0px;
                                top: 50%;
                                transform-origin: 50% 50%;
                                user-select: none;
                                visibility: hidden;
                                width: 7px;
                                -webkit-text-fill-color: rgb(10, 37, 64);
                                -webkit-text-stroke-color: rgb(10, 37, 64);
                              "
                              ><!--?xml version="1.0" encoding="utf-8"?--><svg
                                version="1.1"
                                id="Layer_1"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                x="0px"
                                y="0px"
                                viewBox="0 0 9.5 16"
                                style="
                                  animation-duration: 0.001s;
                                  block-size: auto;
                                  border-block-color: rgb(10, 37, 64);
                                  border-color: rgb(10, 37, 64);
                                  border-inline-color: rgb(10, 37, 64);
                                  caret-color: rgb(10, 37, 64);
                                  color: rgb(10, 37, 64);
                                  column-rule-color: rgb(10, 37, 64);
                                  cursor: pointer;
                                  font-size: 17px;
                                  font-style: italic;
                                  height: auto;
                                  inline-size: 100%;
                                  line-height: 17px;
                                  list-style-type: circle;
                                  max-block-size: 100%;
                                  max-height: 100%;
                                  outline-color: rgb(10, 37, 64);
                                  overflow-clip-margin: content-box;
                                  overflow: hidden;
                                  perspective-origin: 50% 50%;
                                  pointer-events: none;
                                  text-decoration: none solid rgb(10, 37, 64);
                                  text-emphasis-color: rgb(10, 37, 64);
                                  text-shadow: rgba(10, 37, 64, 0.7) 0px 0px 0px;
                                  transform-origin: 50% 50%;
                                  user-select: none;
                                  visibility: hidden;
                                  width: 100%;
                                  -webkit-text-fill-color: rgb(10, 37, 64);
                                  -webkit-text-stroke-color: rgb(10, 37, 64);
                                "
                                xml:space="preserve"
                              >
                                <path d="M1.5,0L0,1.5L6.5,8L0,14.5L1.5,16l8-8L1.5,0z"></path></svg></i
                          ></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    class="part part-card"
                    style="
                      animation-duration: 0.001s;
                      background-color: rgb(248, 249, 252);
                      block-size: auto;
                      border-bottom-right-radius: 10px;
                      border-end-end-radius: 10px;
                      border-start-end-radius: 10px;
                      border-top-right-radius: 10px;
                      height: auto;
                      inline-size: 380px;
                      min-inline-size: 380px;
                      min-width: 380px;
                      overflow: hidden;
                      padding-block: 30px;
                      padding: 30px;
                      padding-inline: 30px;
                      perspective-origin: 50% 50%;
                      pointer-events: none;
                      transform-origin: 50% 50%;
                      visibility: hidden;
                      width: 380px;
                    "
                  >
                    <a
                      class="card"
                      href="/accessscan"
                      tabindex="-1"
                      data-acsb-clickable="true"
                      data-acsb-navigable="true"
                      data-acsb-now-navigable="false"
                      data-custom-button-processed="true"
                      style="animation-duration: 0.001s; block-size: 100%; cursor: pointer; height: 100%; perspective-origin: 50% 50%; pointer-events: none; transform-origin: 50% 50%; visibility: hidden"
                      ><div
                        class="image"
                        style="
                          animation-duration: 0.001s;
                          block-size: 200px;
                          border-block-color: rgb(19, 110, 248);
                          border-color: rgb(19, 110, 248);
                          border-radius: 10px;
                          border-end-end-radius: 10px;
                          border-end-start-radius: 10px;
                          border-inline-color: rgb(19, 110, 248);
                          border-start-end-radius: 10px;
                          border-start-start-radius: 10px;
                          caret-color: rgb(19, 110, 248);
                          color: rgb(19, 110, 248);
                          column-rule-color: rgb(19, 110, 248);
                          cursor: pointer;
                          height: 200px;
                          inline-size: auto;
                          outline-color: rgb(19, 110, 248);
                          overflow: hidden;
                          perspective-origin: 50% 50%;
                          pointer-events: none;
                          text-decoration: none solid rgb(19, 110, 248);
                          text-emphasis-color: rgb(19, 110, 248);
                          transform-origin: 50% 50%;
                          visibility: hidden;
                          width: auto;
                          -webkit-text-fill-color: rgb(19, 110, 248);
                          -webkit-text-stroke-color: rgb(19, 110, 248);
                        "
                      >
                        <img
                          class="object-cover"
                          role="presentation"
                          alt="Is your website ADA compliant? Find out in seconds!"
                          style="
                            animation-duration: 0.001s;
                            block-size: 100%;
                            border-block-color: rgb(19, 110, 248);
                            border-color: rgb(19, 110, 248);
                            border-inline-color: rgb(19, 110, 248);
                            caret-color: rgb(19, 110, 248);
                            color: rgb(19, 110, 248);
                            column-rule-color: rgb(19, 110, 248);
                            cursor: pointer;
                            display: block;
                            height: 100%;
                            inline-size: 100%;
                            max-inline-size: none;
                            max-width: none;
                            object-fit: cover;
                            outline-color: rgb(19, 110, 248);
                            perspective-origin: 50% 50%;
                            pointer-events: none;
                            text-decoration: none solid rgb(19, 110, 248);
                            text-emphasis-color: rgb(19, 110, 248);
                            transform-origin: 50% 50%;
                            visibility: hidden;
                            width: 100%;
                            -webkit-text-fill-color: rgb(19, 110, 248);
                            -webkit-text-stroke-color: rgb(19, 110, 248);
                          "
                        />
                      </div>
                      <div
                        class="content"
                        style="
                          animation-duration: 0.001s;
                          block-size: auto;
                          border-block-color: rgb(19, 110, 248);
                          border-color: rgb(19, 110, 248);
                          border-inline-color: rgb(19, 110, 248);
                          caret-color: rgb(19, 110, 248);
                          color: rgb(19, 110, 248);
                          column-rule-color: rgb(19, 110, 248);
                          cursor: pointer;
                          height: auto;
                          inline-size: auto;
                          margin-block-start: 30px;
                          margin-top: 30px;
                          outline-color: rgb(19, 110, 248);
                          perspective-origin: 50% 50%;
                          pointer-events: none;
                          text-decoration: none solid rgb(19, 110, 248);
                          text-emphasis-color: rgb(19, 110, 248);
                          transform-origin: 50% 50%;
                          visibility: hidden;
                          width: auto;
                          -webkit-text-fill-color: rgb(19, 110, 248);
                          -webkit-text-stroke-color: rgb(19, 110, 248);
                        "
                      >
                        <span
                          class="title title-small2"
                          style="
                            animation-duration: 0.001s;
                            border-block-color: rgb(10, 37, 64);
                            border-color: rgb(10, 37, 64);
                            border-inline-color: rgb(10, 37, 64);
                            caret-color: rgb(10, 37, 64);
                            color: rgb(10, 37, 64);
                            column-rule-color: rgb(10, 37, 64);
                            cursor: pointer;
                            display: block;
                            font-size: 19px;
                            font-weight: 700;
                            inline-size: 100%;
                            letter-spacing: -0.5px;
                            line-height: 24.7px;
                            margin-block-end: 20px;
                            margin-bottom: 20px;
                            outline-color: rgb(10, 37, 64);
                            perspective-origin: 50% 50%;
                            pointer-events: none;
                            position: relative;
                            text-decoration: none solid rgb(10, 37, 64);
                            text-emphasis-color: rgb(10, 37, 64);
                            text-rendering: geometricprecision;
                            transform-origin: 50% 50%;
                            visibility: hidden;
                            width: 100%;
                            -webkit-text-fill-color: rgb(10, 37, 64);
                            -webkit-text-stroke-color: rgb(10, 37, 64);
                          "
                          >Is your website ADA compliant? Find out in seconds!</span
                        >
                        <p class="text text-medium" style="animation-duration: 0.001s; block-size: auto; cursor: pointer; height: auto; inline-size: auto; margin-block: 0px; margin-bottom: 0px; margin-top: 0px; perspective-origin: 50% 50%; pointer-events: none; transform-origin: 50% 50%; visibility: hidden; width: auto">
                          Get a free, professional web accessibility audit to learn where you stand
                        </p>
                        <span
                          class="text-button text-button-nocolor text-button-small"
                          style="
                            align-items: center;
                            animation-duration: 0.001s;
                            border-block-color: rgb(10, 37, 64);
                            border-color: rgb(10, 37, 64);
                            border-inline-color: rgb(10, 37, 64);
                            caret-color: rgb(10, 37, 64);
                            color: rgb(10, 37, 64);
                            column-rule-color: rgb(10, 37, 64);
                            cursor: pointer;
                            display: block;
                            font-size: 14px;
                            font-weight: 600;
                            inline-size: 100%;
                            justify-content: center;
                            line-height: 14px;
                            margin-block-start: 25px;
                            margin-top: 25px;
                            outline-color: rgb(10, 37, 64);
                            perspective-origin: 50% 50%;
                            pointer-events: none;
                            text-decoration: none solid rgb(10, 37, 64);
                            text-emphasis-color: rgb(10, 37, 64);
                            text-transform: uppercase;
                            transform-origin: 50% 50%;
                            user-select: none;
                            visibility: hidden;
                            width: 100%;
                            -webkit-text-fill-color: rgb(10, 37, 64);
                            -webkit-text-stroke-color: rgb(10, 37, 64);
                          "
                        >
                          Run audit now
                          <i
                            class="icon icon-chevron-right"
                            aria-hidden="true"
                            role="presentation"
                            style="
                              animation-duration: 0.001s;
                              border-block-color: rgb(10, 37, 64);
                              border-color: rgb(10, 37, 64);
                              border-inline-color: rgb(10, 37, 64);
                              caret-color: rgb(10, 37, 64);
                              color: rgb(10, 37, 64);
                              column-rule-color: rgb(10, 37, 64);
                              cursor: pointer;
                              display: inline-block;
                              font-size: 14px;
                              font-weight: 600;
                              inline-size: 100%;
                              line-height: 14px;
                              margin-inline-start: 12px;
                              margin-left: 12px;
                              max-inline-size: 5px;
                              max-width: 5px;
                              min-inline-size: 5px;
                              min-width: 5px;
                              outline-color: rgb(10, 37, 64);
                              perspective-origin: 50% 50%;
                              pointer-events: none;
                              text-decoration: none solid rgb(10, 37, 64);
                              text-emphasis-color: rgb(10, 37, 64);
                              text-transform: uppercase;
                              transform-origin: 50% 50%;
                              user-select: none;
                              visibility: hidden;
                              width: 100%;
                              -webkit-text-fill-color: rgb(10, 37, 64);
                              -webkit-text-stroke-color: rgb(10, 37, 64);
                            "
                            ><!--?xml version="1.0" encoding="utf-8"?--><svg
                              version="1.1"
                              id="Layer_1"
                              xmlns="http://www.w3.org/2000/svg"
                              xmlns:xlink="http://www.w3.org/1999/xlink"
                              x="0px"
                              y="0px"
                              viewBox="0 0 9.5 16"
                              style="
                                animation-duration: 0.001s;
                                block-size: auto;
                                border-block-color: rgb(10, 37, 64);
                                border-color: rgb(10, 37, 64);
                                border-inline-color: rgb(10, 37, 64);
                                caret-color: rgb(10, 37, 64);
                                color: rgb(10, 37, 64);
                                column-rule-color: rgb(10, 37, 64);
                                cursor: pointer;
                                font-size: 14px;
                                font-style: italic;
                                font-weight: 600;
                                height: auto;
                                inline-size: 100%;
                                line-height: 14px;
                                max-block-size: 100%;
                                max-height: 100%;
                                outline-color: rgb(10, 37, 64);
                                overflow-clip-margin: content-box;
                                overflow: hidden;
                                perspective-origin: 50% 50%;
                                pointer-events: none;
                                text-decoration: none solid rgb(10, 37, 64);
                                text-emphasis-color: rgb(10, 37, 64);
                                text-transform: uppercase;
                                transform-origin: 50% 50%;
                                user-select: none;
                                visibility: hidden;
                                width: 100%;
                                -webkit-text-fill-color: rgb(10, 37, 64);
                                -webkit-text-stroke-color: rgb(10, 37, 64);
                              "
                              xml:space="preserve"
                            >
                              <path d="M1.5,0L0,1.5L6.5,8L0,14.5L1.5,16l8-8L1.5,0z"></path></svg></i
                        ></span></div
                    ></a>
                  </div>
                </div>
              </div>
              <div
                data-acsb-now-navigable="true"
                data-acsb-force-visible="true"
                data-acsb="true"
                data-acsb-dropdown="abixl6uh1cwj"
                style="position: fixed; outline: none !important; z-index: 2147483647; display: block !important; animation-duration: 0.001s; inset: -50px 1547px 442px -50px; inline-size: 0px; inset-block: -50px 442px; inset-inline: -50px 1547px; perspective-origin: 0px 0px; transform-origin: 0px 0px; width: 0px"
              ></div>
            </li>
            <li
              class="menu-accessservices menu-has-dropdown a11y-dd-container"
              data-acsb-menu="li"
              data-acsb-menu-root="true"
              data-acsb-dropdown-container="true"
              style="animation-duration: 0.001s; block-size: 65px; display: inline-block; height: 65px; inline-size: 114.914px; perspective-origin: 57.4531px 32.5px; transform-origin: 57.457px 32.5px; width: 114.914px"
            >
              <a
                class="item"
                href="/accessservices"
                data-acsb-clickable="true"
                data-acsb-navigable="true"
                data-acsb-now-navigable="true"
                data-custom-button-processed="true"
                data-acsb-menu="a"
                data-acsb-menu-root-link="true"
                aria-haspopup="true"
                aria-expanded="false"
                style="
                  align-items: center;
                  animation-duration: 0.001s;
                  block-size: 65px;
                  border-block-color: rgb(10, 37, 64);
                  border-color: rgb(10, 37, 64);
                  border-inline-color: rgb(10, 37, 64);
                  inset: 0px;
                  caret-color: rgb(10, 37, 64);
                  color: rgb(10, 37, 64);
                  column-rule-color: rgb(10, 37, 64);
                  cursor: pointer;
                  display: inline-flex;
                  font-size: 14px;
                  font-weight: 600;
                  height: 65px;
                  inline-size: 99.9141px;
                  inset-block: 0px;
                  inset-inline: 0px;
                  justify-content: space-between;
                  line-height: 21px;
                  margin-inline-end: 15px;
                  margin-right: 15px;
                  outline-color: rgb(10, 37, 64);
                  padding-inline: 10px;
                  padding-left: 10px;
                  padding-right: 10px;
                  perspective-origin: 49.9531px 32.5px;
                  position: relative;
                  text-decoration: none solid rgb(10, 37, 64);
                  text-emphasis-color: rgb(10, 37, 64);
                  text-transform: uppercase;
                  transform-origin: 49.957px 32.5px;
                  width: 99.9141px;
                  -webkit-text-fill-color: rgb(10, 37, 64);
                  -webkit-text-stroke-color: rgb(10, 37, 64);
                "
                data-id="2"
              >
                Services
                <i
                  class="icon icon-chevron-down"
                  role="presentation"
                  style="
                    animation-duration: 0.001s;
                    block-size: 7px;
                    border-block-color: rgb(10, 37, 64);
                    border-color: rgb(10, 37, 64);
                    border-inline-color: rgb(10, 37, 64);
                    caret-color: rgb(10, 37, 64);
                    color: rgb(10, 37, 64);
                    column-rule-color: rgb(10, 37, 64);
                    cursor: pointer;
                    display: block;
                    font-size: 14px;
                    font-weight: 600;
                    height: 7px;
                    inline-size: 7px;
                    line-height: 14px;
                    margin-block-start: -1px;
                    margin-inline-start: 7px;
                    margin-left: 7px;
                    margin-top: -1px;
                    min-block-size: auto;
                    min-height: auto;
                    min-inline-size: auto;
                    min-width: auto;
                    outline-color: rgb(10, 37, 64);
                    perspective-origin: 3.5px 3.5px;
                    text-decoration: none solid rgb(10, 37, 64);
                    text-emphasis-color: rgb(10, 37, 64);
                    text-transform: uppercase;
                    transform-origin: 3.5px 3.5px;
                    user-select: none;
                    width: 7px;
                    -webkit-text-fill-color: rgb(10, 37, 64);
                    -webkit-text-stroke-color: rgb(10, 37, 64);
                  "
                  ><svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    aria-hidden="true"
                    data-acsb-hidden="true"
                    style="
                      animation-duration: 0.001s;
                      block-size: 7px;
                      border-block-color: rgb(10, 37, 64);
                      border-color: rgb(10, 37, 64);
                      border-inline-color: rgb(10, 37, 64);
                      caret-color: rgb(10, 37, 64);
                      color: rgb(10, 37, 64);
                      column-rule-color: rgb(10, 37, 64);
                      cursor: pointer;
                      font-size: 14px;
                      font-style: italic;
                      font-weight: 600;
                      height: 7px;
                      inline-size: 7px;
                      line-height: 14px;
                      max-block-size: 100%;
                      max-height: 100%;
                      outline-color: rgb(10, 37, 64);
                      overflow-clip-margin: content-box;
                      overflow: hidden;
                      perspective-origin: 3.5px 3.5px;
                      text-decoration: none solid rgb(10, 37, 64);
                      text-emphasis-color: rgb(10, 37, 64);
                      text-transform: uppercase;
                      transform-origin: 3.5px 3.5px;
                      user-select: none;
                      width: 7px;
                      -webkit-text-fill-color: rgb(10, 37, 64);
                      -webkit-text-stroke-color: rgb(10, 37, 64);
                    "
                  >
                    <path d="M16 5.5l-1.5-1.5-6.5 6.5-6.5-6.5-1.5 1.5 8 8 8-8z"></path></svg></i
              ></a>
              <div
                class="dropdown acsb-hidden"
                role="region"
                aria-hidden="true"
                aria-label="Sub menu"
                data-acsb-hidden="true"
                data-acsb-dropdown="ajwm1rdf78zd"
                style="
                  animation-duration: 0.001s;
                  background-color: rgb(255, 255, 255);
                  border-radius: 10px;
                  border-end-end-radius: 10px;
                  border-end-start-radius: 10px;
                  border-start-end-radius: 10px;
                  border-start-start-radius: 10px;
                  box-shadow: rgba(60, 80, 170, 0.2) 0px 3px 10px 0px;
                  display: none;
                  inline-size: 800px;
                  inset-block-start: 65px;
                  inset-inline-start: 0px;
                  left: 0px;
                  opacity: 0;
                  overflow: hidden;
                  perspective-origin: 50% 50%;
                  pointer-events: none;
                  position: absolute;
                  top: 65px;
                  transform-origin: 0% 0%;
                  visibility: hidden;
                  width: 800px;
                  z-index: 999;
                "
                data-id="3"
              >
                <div
                  class="flex flex-vertical-stretch flex-nowrap"
                  data-acsb-possible-star="true"
                  style="align-items: stretch; animation-duration: 0.001s; block-size: auto; display: flex; height: auto; inline-size: 100%; justify-content: space-between; perspective-origin: 50% 50%; pointer-events: none; transform-origin: 50% 50%; visibility: hidden; width: 100%"
                >
                  <div
                    class="part part-menu flex flex-nowrap flex-vertical-start"
                    style="align-items: flex-start; animation-duration: 0.001s; block-size: auto; display: flex; height: auto; inline-size: 100%; justify-content: space-between; overflow: hidden; perspective-origin: 50% 50%; pointer-events: none; transform-origin: 50% 50%; visibility: hidden; width: 100%"
                  >
                    <div class="part-category" style="animation-duration: 0.001s; block-size: auto; height: auto; inline-size: auto; padding-block: 30px; padding: 30px; padding-inline: 30px; perspective-origin: 50% 50%; pointer-events: none; transform-origin: 50% 50%; visibility: hidden; width: auto">
                      <ul
                        class="flex"
                        data-acsb-menu="ul"
                        role="region"
                        aria-label="Submenu"
                        style="align-items: center; animation-duration: 0.001s; block-size: auto; display: flex; flex-wrap: wrap; height: auto; inline-size: 100%; justify-content: space-between; list-style-type: circle; perspective-origin: 50% 50%; pointer-events: none; transform-origin: 50% 50%; visibility: hidden; width: 100%"
                      >
                        <li style="animation-duration: 0.001s; block-size: auto; height: auto; inline-size: 100%; list-style-type: circle; margin-block-end: 15px; margin-bottom: 15px; perspective-origin: 50% 50%; pointer-events: none; transform-origin: 50% 50%; visibility: hidden; width: 100%">
                          <a
                            href="/accessservices"
                            tabindex="-1"
                            data-acsb-clickable="true"
                            data-acsb-navigable="true"
                            data-acsb-now-navigable="false"
                            data-custom-button-processed="true"
                            style="
                              animation-duration: 0.001s;
                              border-block-color: rgb(10, 37, 64);
                              border-color: rgb(10, 37, 64);
                              border-radius: 10px;
                              border-end-end-radius: 10px;
                              border-end-start-radius: 10px;
                              border-inline-color: rgb(10, 37, 64);
                              border-start-end-radius: 10px;
                              border-start-start-radius: 10px;
                              caret-color: rgb(10, 37, 64);
                              color: rgb(10, 37, 64);
                              column-rule-color: rgb(10, 37, 64);
                              cursor: pointer;
                              display: block;
                              font-size: 17px;
                              inline-size: 100%;
                              line-height: 25.5px;
                              list-style-type: circle;
                              margin-block: auto;
                              margin: auto;
                              margin-inline: auto;
                              outline-color: rgb(10, 37, 64);
                              padding-block: 10px;
                              padding: 10px 20px;
                              padding-inline: 20px;
                              perspective-origin: 50% 50%;
                              pointer-events: none;
                              position: relative;
                              text-decoration: none solid rgb(10, 37, 64);
                              text-emphasis-color: rgb(10, 37, 64);
                              text-shadow: rgba(10, 37, 64, 0.7) 0px 0px 0px;
                              transform-origin: 50% 50%;
                              visibility: hidden;
                              width: 100%;
                              -webkit-text-fill-color: rgb(10, 37, 64);
                              -webkit-text-stroke-color: rgb(10, 37, 64);
                            "
                          >
                            Services Overview
                            <i
                              class="icon icon-chevron-right"
                              aria-hidden="true"
                              role="presentation"
                              style="
                                animation-duration: 0.001s;
                                border-block-color: rgb(10, 37, 64);
                                border-color: rgb(10, 37, 64);
                                border-inline-color: rgb(10, 37, 64);
                                caret-color: rgb(10, 37, 64);
                                color: rgb(10, 37, 64);
                                column-rule-color: rgb(10, 37, 64);
                                cursor: pointer;
                                display: block;
                                font-size: 17px;
                                inline-size: 7px;
                                inset-block-start: 50%;
                                inset-inline-end: 30px;
                                line-height: 17px;
                                list-style-type: circle;
                                opacity: 0;
                                outline-color: rgb(10, 37, 64);
                                perspective-origin: 50% 50%;
                                pointer-events: none;
                                position: absolute;
                                right: 30px;
                                text-decoration: none solid rgb(10, 37, 64);
                                text-emphasis-color: rgb(10, 37, 64);
                                text-shadow: rgba(10, 37, 64, 0.7) 0px 0px 0px;
                                top: 50%;
                                transform-origin: 50% 50%;
                                user-select: none;
                                visibility: hidden;
                                width: 7px;
                                -webkit-text-fill-color: rgb(10, 37, 64);
                                -webkit-text-stroke-color: rgb(10, 37, 64);
                              "
                              ><!--?xml version="1.0" encoding="utf-8"?--><svg
                                version="1.1"
                                id="Layer_1"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                x="0px"
                                y="0px"
                                viewBox="0 0 9.5 16"
                                style="
                                  animation-duration: 0.001s;
                                  block-size: auto;
                                  border-block-color: rgb(10, 37, 64);
                                  border-color: rgb(10, 37, 64);
                                  border-inline-color: rgb(10, 37, 64);
                                  caret-color: rgb(10, 37, 64);
                                  color: rgb(10, 37, 64);
                                  column-rule-color: rgb(10, 37, 64);
                                  cursor: pointer;
                                  font-size: 17px;
                                  font-style: italic;
                                  height: auto;
                                  inline-size: 100%;
                                  line-height: 17px;
                                  list-style-type: circle;
                                  max-block-size: 100%;
                                  max-height: 100%;
                                  outline-color: rgb(10, 37, 64);
                                  overflow-clip-margin: content-box;
                                  overflow: hidden;
                                  perspective-origin: 50% 50%;
                                  pointer-events: none;
                                  text-decoration: none solid rgb(10, 37, 64);
                                  text-emphasis-color: rgb(10, 37, 64);
                                  text-shadow: rgba(10, 37, 64, 0.7) 0px 0px 0px;
                                  transform-origin: 50% 50%;
                                  user-select: none;
                                  visibility: hidden;
                                  width: 100%;
                                  -webkit-text-fill-color: rgb(10, 37, 64);
                                  -webkit-text-stroke-color: rgb(10, 37, 64);
                                "
                                xml:space="preserve"
                              >
                                <path d="M1.5,0L0,1.5L6.5,8L0,14.5L1.5,16l8-8L1.5,0z"></path></svg></i
                          ></a>
                        </li>
                        <li style="animation-duration: 0.001s; block-size: auto; height: auto; inline-size: 100%; list-style-type: circle; margin-block-end: 15px; margin-bottom: 15px; perspective-origin: 50% 50%; pointer-events: none; transform-origin: 50% 50%; visibility: hidden; width: 100%">
                          <a
                            href="/accessservices/file-accessibility"
                            tabindex="-1"
                            data-acsb-clickable="true"
                            data-acsb-navigable="true"
                            data-acsb-now-navigable="false"
                            data-custom-button-processed="true"
                            style="
                              animation-duration: 0.001s;
                              border-block-color: rgb(10, 37, 64);
                              border-color: rgb(10, 37, 64);
                              border-radius: 10px;
                              border-end-end-radius: 10px;
                              border-end-start-radius: 10px;
                              border-inline-color: rgb(10, 37, 64);
                              border-start-end-radius: 10px;
                              border-start-start-radius: 10px;
                              caret-color: rgb(10, 37, 64);
                              color: rgb(10, 37, 64);
                              column-rule-color: rgb(10, 37, 64);
                              cursor: pointer;
                              display: block;
                              font-size: 17px;
                              inline-size: 100%;
                              line-height: 25.5px;
                              list-style-type: circle;
                              margin-block: auto;
                              margin: auto;
                              margin-inline: auto;
                              outline-color: rgb(10, 37, 64);
                              padding-block: 10px;
                              padding: 10px 20px;
                              padding-inline: 20px;
                              perspective-origin: 50% 50%;
                              pointer-events: none;
                              position: relative;
                              text-decoration: none solid rgb(10, 37, 64);
                              text-emphasis-color: rgb(10, 37, 64);
                              text-shadow: rgba(10, 37, 64, 0.7) 0px 0px 0px;
                              transform-origin: 50% 50%;
                              visibility: hidden;
                              width: 100%;
                              -webkit-text-fill-color: rgb(10, 37, 64);
                              -webkit-text-stroke-color: rgb(10, 37, 64);
                            "
                          >
                            File Accessibility
                            <i
                              class="icon icon-chevron-right"
                              aria-hidden="true"
                              role="presentation"
                              style="
                                animation-duration: 0.001s;
                                border-block-color: rgb(10, 37, 64);
                                border-color: rgb(10, 37, 64);
                                border-inline-color: rgb(10, 37, 64);
                                caret-color: rgb(10, 37, 64);
                                color: rgb(10, 37, 64);
                                column-rule-color: rgb(10, 37, 64);
                                cursor: pointer;
                                display: block;
                                font-size: 17px;
                                inline-size: 7px;
                                inset-block-start: 50%;
                                inset-inline-end: 30px;
                                line-height: 17px;
                                list-style-type: circle;
                                opacity: 0;
                                outline-color: rgb(10, 37, 64);
                                perspective-origin: 50% 50%;
                                pointer-events: none;
                                position: absolute;
                                right: 30px;
                                text-decoration: none solid rgb(10, 37, 64);
                                text-emphasis-color: rgb(10, 37, 64);
                                text-shadow: rgba(10, 37, 64, 0.7) 0px 0px 0px;
                                top: 50%;
                                transform-origin: 50% 50%;
                                user-select: none;
                                visibility: hidden;
                                width: 7px;
                                -webkit-text-fill-color: rgb(10, 37, 64);
                                -webkit-text-stroke-color: rgb(10, 37, 64);
                              "
                              ><!--?xml version="1.0" encoding="utf-8"?--><svg
                                version="1.1"
                                id="Layer_1"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                x="0px"
                                y="0px"
                                viewBox="0 0 9.5 16"
                                style="
                                  animation-duration: 0.001s;
                                  block-size: auto;
                                  border-block-color: rgb(10, 37, 64);
                                  border-color: rgb(10, 37, 64);
                                  border-inline-color: rgb(10, 37, 64);
                                  caret-color: rgb(10, 37, 64);
                                  color: rgb(10, 37, 64);
                                  column-rule-color: rgb(10, 37, 64);
                                  cursor: pointer;
                                  font-size: 17px;
                                  font-style: italic;
                                  height: auto;
                                  inline-size: 100%;
                                  line-height: 17px;
                                  list-style-type: circle;
                                  max-block-size: 100%;
                                  max-height: 100%;
                                  outline-color: rgb(10, 37, 64);
                                  overflow-clip-margin: content-box;
                                  overflow: hidden;
                                  perspective-origin: 50% 50%;
                                  pointer-events: none;
                                  text-decoration: none solid rgb(10, 37, 64);
                                  text-emphasis-color: rgb(10, 37, 64);
                                  text-shadow: rgba(10, 37, 64, 0.7) 0px 0px 0px;
                                  transform-origin: 50% 50%;
                                  user-select: none;
                                  visibility: hidden;
                                  width: 100%;
                                  -webkit-text-fill-color: rgb(10, 37, 64);
                                  -webkit-text-stroke-color: rgb(10, 37, 64);
                                "
                                xml:space="preserve"
                              >
                                <path d="M1.5,0L0,1.5L6.5,8L0,14.5L1.5,16l8-8L1.5,0z"></path></svg></i
                          ></a>
                        </li>
                        <li style="animation-duration: 0.001s; block-size: auto; height: auto; inline-size: 100%; list-style-type: circle; margin-block-end: 15px; margin-bottom: 15px; perspective-origin: 50% 50%; pointer-events: none; transform-origin: 50% 50%; visibility: hidden; width: 100%">
                          <a
                            href="/accessservices/media-accessibility"
                            tabindex="-1"
                            data-acsb-clickable="true"
                            data-acsb-navigable="true"
                            data-acsb-now-navigable="false"
                            data-custom-button-processed="true"
                            style="
                              animation-duration: 0.001s;
                              border-block-color: rgb(10, 37, 64);
                              border-color: rgb(10, 37, 64);
                              border-radius: 10px;
                              border-end-end-radius: 10px;
                              border-end-start-radius: 10px;
                              border-inline-color: rgb(10, 37, 64);
                              border-start-end-radius: 10px;
                              border-start-start-radius: 10px;
                              caret-color: rgb(10, 37, 64);
                              color: rgb(10, 37, 64);
                              column-rule-color: rgb(10, 37, 64);
                              cursor: pointer;
                              display: block;
                              font-size: 17px;
                              inline-size: 100%;
                              line-height: 25.5px;
                              list-style-type: circle;
                              margin-block: auto;
                              margin: auto;
                              margin-inline: auto;
                              outline-color: rgb(10, 37, 64);
                              padding-block: 10px;
                              padding: 10px 20px;
                              padding-inline: 20px;
                              perspective-origin: 50% 50%;
                              pointer-events: none;
                              position: relative;
                              text-decoration: none solid rgb(10, 37, 64);
                              text-emphasis-color: rgb(10, 37, 64);
                              text-shadow: rgba(10, 37, 64, 0.7) 0px 0px 0px;
                              transform-origin: 50% 50%;
                              visibility: hidden;
                              width: 100%;
                              -webkit-text-fill-color: rgb(10, 37, 64);
                              -webkit-text-stroke-color: rgb(10, 37, 64);
                            "
                          >
                            Media Accessibility
                            <i
                              class="icon icon-chevron-right"
                              aria-hidden="true"
                              role="presentation"
                              style="
                                animation-duration: 0.001s;
                                border-block-color: rgb(10, 37, 64);
                                border-color: rgb(10, 37, 64);
                                border-inline-color: rgb(10, 37, 64);
                                caret-color: rgb(10, 37, 64);
                                color: rgb(10, 37, 64);
                                column-rule-color: rgb(10, 37, 64);
                                cursor: pointer;
                                display: block;
                                font-size: 17px;
                                inline-size: 7px;
                                inset-block-start: 50%;
                                inset-inline-end: 30px;
                                line-height: 17px;
                                list-style-type: circle;
                                opacity: 0;
                                outline-color: rgb(10, 37, 64);
                                perspective-origin: 50% 50%;
                                pointer-events: none;
                                position: absolute;
                                right: 30px;
                                text-decoration: none solid rgb(10, 37, 64);
                                text-emphasis-color: rgb(10, 37, 64);
                                text-shadow: rgba(10, 37, 64, 0.7) 0px 0px 0px;
                                top: 50%;
                                transform-origin: 50% 50%;
                                user-select: none;
                                visibility: hidden;
                                width: 7px;
                                -webkit-text-fill-color: rgb(10, 37, 64);
                                -webkit-text-stroke-color: rgb(10, 37, 64);
                              "
                              ><!--?xml version="1.0" encoding="utf-8"?--><svg
                                version="1.1"
                                id="Layer_1"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                x="0px"
                                y="0px"
                                viewBox="0 0 9.5 16"
                                style="
                                  animation-duration: 0.001s;
                                  block-size: auto;
                                  border-block-color: rgb(10, 37, 64);
                                  border-color: rgb(10, 37, 64);
                                  border-inline-color: rgb(10, 37, 64);
                                  caret-color: rgb(10, 37, 64);
                                  color: rgb(10, 37, 64);
                                  column-rule-color: rgb(10, 37, 64);
                                  cursor: pointer;
                                  font-size: 17px;
                                  font-style: italic;
                                  height: auto;
                                  inline-size: 100%;
                                  line-height: 17px;
                                  list-style-type: circle;
                                  max-block-size: 100%;
                                  max-height: 100%;
                                  outline-color: rgb(10, 37, 64);
                                  overflow-clip-margin: content-box;
                                  overflow: hidden;
                                  perspective-origin: 50% 50%;
                                  pointer-events: none;
                                  text-decoration: none solid rgb(10, 37, 64);
                                  text-emphasis-color: rgb(10, 37, 64);
                                  text-shadow: rgba(10, 37, 64, 0.7) 0px 0px 0px;
                                  transform-origin: 50% 50%;
                                  user-select: none;
                                  visibility: hidden;
                                  width: 100%;
                                  -webkit-text-fill-color: rgb(10, 37, 64);
                                  -webkit-text-stroke-color: rgb(10, 37, 64);
                                "
                                xml:space="preserve"
                              >
                                <path d="M1.5,0L0,1.5L6.5,8L0,14.5L1.5,16l8-8L1.5,0z"></path></svg></i
                          ></a>
                        </li>
                        <li style="animation-duration: 0.001s; block-size: auto; height: auto; inline-size: 100%; list-style-type: circle; margin-block-end: 15px; margin-bottom: 15px; perspective-origin: 50% 50%; pointer-events: none; transform-origin: 50% 50%; visibility: hidden; width: 100%">
                          <a
                            href="/accessservices/expert-audit"
                            tabindex="-1"
                            data-acsb-clickable="true"
                            data-acsb-navigable="true"
                            data-acsb-now-navigable="false"
                            data-custom-button-processed="true"
                            style="
                              animation-duration: 0.001s;
                              border-block-color: rgb(10, 37, 64);
                              border-color: rgb(10, 37, 64);
                              border-radius: 10px;
                              border-end-end-radius: 10px;
                              border-end-start-radius: 10px;
                              border-inline-color: rgb(10, 37, 64);
                              border-start-end-radius: 10px;
                              border-start-start-radius: 10px;
                              caret-color: rgb(10, 37, 64);
                              color: rgb(10, 37, 64);
                              column-rule-color: rgb(10, 37, 64);
                              cursor: pointer;
                              display: block;
                              font-size: 17px;
                              inline-size: 100%;
                              line-height: 25.5px;
                              list-style-type: circle;
                              margin-block: auto;
                              margin: auto;
                              margin-inline: auto;
                              outline-color: rgb(10, 37, 64);
                              padding-block: 10px;
                              padding: 10px 20px;
                              padding-inline: 20px;
                              perspective-origin: 50% 50%;
                              pointer-events: none;
                              position: relative;
                              text-decoration: none solid rgb(10, 37, 64);
                              text-emphasis-color: rgb(10, 37, 64);
                              text-shadow: rgba(10, 37, 64, 0.7) 0px 0px 0px;
                              transform-origin: 50% 50%;
                              visibility: hidden;
                              width: 100%;
                              -webkit-text-fill-color: rgb(10, 37, 64);
                              -webkit-text-stroke-color: rgb(10, 37, 64);
                            "
                          >
                            Expert Audit
                            <i
                              class="icon icon-chevron-right"
                              aria-hidden="true"
                              role="presentation"
                              style="
                                animation-duration: 0.001s;
                                border-block-color: rgb(10, 37, 64);
                                border-color: rgb(10, 37, 64);
                                border-inline-color: rgb(10, 37, 64);
                                caret-color: rgb(10, 37, 64);
                                color: rgb(10, 37, 64);
                                column-rule-color: rgb(10, 37, 64);
                                cursor: pointer;
                                display: block;
                                font-size: 17px;
                                inline-size: 7px;
                                inset-block-start: 50%;
                                inset-inline-end: 30px;
                                line-height: 17px;
                                list-style-type: circle;
                                opacity: 0;
                                outline-color: rgb(10, 37, 64);
                                perspective-origin: 50% 50%;
                                pointer-events: none;
                                position: absolute;
                                right: 30px;
                                text-decoration: none solid rgb(10, 37, 64);
                                text-emphasis-color: rgb(10, 37, 64);
                                text-shadow: rgba(10, 37, 64, 0.7) 0px 0px 0px;
                                top: 50%;
                                transform-origin: 50% 50%;
                                user-select: none;
                                visibility: hidden;
                                width: 7px;
                                -webkit-text-fill-color: rgb(10, 37, 64);
                                -webkit-text-stroke-color: rgb(10, 37, 64);
                              "
                              ><!--?xml version="1.0" encoding="utf-8"?--><svg
                                version="1.1"
                                id="Layer_1"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                x="0px"
                                y="0px"
                                viewBox="0 0 9.5 16"
                                style="
                                  animation-duration: 0.001s;
                                  block-size: auto;
                                  border-block-color: rgb(10, 37, 64);
                                  border-color: rgb(10, 37, 64);
                                  border-inline-color: rgb(10, 37, 64);
                                  caret-color: rgb(10, 37, 64);
                                  color: rgb(10, 37, 64);
                                  column-rule-color: rgb(10, 37, 64);
                                  cursor: pointer;
                                  font-size: 17px;
                                  font-style: italic;
                                  height: auto;
                                  inline-size: 100%;
                                  line-height: 17px;
                                  list-style-type: circle;
                                  max-block-size: 100%;
                                  max-height: 100%;
                                  outline-color: rgb(10, 37, 64);
                                  overflow-clip-margin: content-box;
                                  overflow: hidden;
                                  perspective-origin: 50% 50%;
                                  pointer-events: none;
                                  text-decoration: none solid rgb(10, 37, 64);
                                  text-emphasis-color: rgb(10, 37, 64);
                                  text-shadow: rgba(10, 37, 64, 0.7) 0px 0px 0px;
                                  transform-origin: 50% 50%;
                                  user-select: none;
                                  visibility: hidden;
                                  width: 100%;
                                  -webkit-text-fill-color: rgb(10, 37, 64);
                                  -webkit-text-stroke-color: rgb(10, 37, 64);
                                "
                                xml:space="preserve"
                              >
                                <path d="M1.5,0L0,1.5L6.5,8L0,14.5L1.5,16l8-8L1.5,0z"></path></svg></i
                          ></a>
                        </li>
                        <li style="animation-duration: 0.001s; block-size: auto; height: auto; inline-size: 100%; list-style-type: circle; margin-block-end: 15px; margin-bottom: 15px; perspective-origin: 50% 50%; pointer-events: none; transform-origin: 50% 50%; visibility: hidden; width: 100%">
                          <a
                            href="/accessservices/user-testing"
                            tabindex="-1"
                            data-acsb-clickable="true"
                            data-acsb-navigable="true"
                            data-acsb-now-navigable="false"
                            data-custom-button-processed="true"
                            style="
                              animation-duration: 0.001s;
                              border-block-color: rgb(10, 37, 64);
                              border-color: rgb(10, 37, 64);
                              border-radius: 10px;
                              border-end-end-radius: 10px;
                              border-end-start-radius: 10px;
                              border-inline-color: rgb(10, 37, 64);
                              border-start-end-radius: 10px;
                              border-start-start-radius: 10px;
                              caret-color: rgb(10, 37, 64);
                              color: rgb(10, 37, 64);
                              column-rule-color: rgb(10, 37, 64);
                              cursor: pointer;
                              display: block;
                              font-size: 17px;
                              inline-size: 100%;
                              line-height: 25.5px;
                              list-style-type: circle;
                              margin-block: auto;
                              margin: auto;
                              margin-inline: auto;
                              outline-color: rgb(10, 37, 64);
                              padding-block: 10px;
                              padding: 10px 20px;
                              padding-inline: 20px;
                              perspective-origin: 50% 50%;
                              pointer-events: none;
                              position: relative;
                              text-decoration: none solid rgb(10, 37, 64);
                              text-emphasis-color: rgb(10, 37, 64);
                              text-shadow: rgba(10, 37, 64, 0.7) 0px 0px 0px;
                              transform-origin: 50% 50%;
                              visibility: hidden;
                              width: 100%;
                              -webkit-text-fill-color: rgb(10, 37, 64);
                              -webkit-text-stroke-color: rgb(10, 37, 64);
                            "
                          >
                            User Testing
                            <i
                              class="icon icon-chevron-right"
                              aria-hidden="true"
                              role="presentation"
                              style="
                                animation-duration: 0.001s;
                                border-block-color: rgb(10, 37, 64);
                                border-color: rgb(10, 37, 64);
                                border-inline-color: rgb(10, 37, 64);
                                caret-color: rgb(10, 37, 64);
                                color: rgb(10, 37, 64);
                                column-rule-color: rgb(10, 37, 64);
                                cursor: pointer;
                                display: block;
                                font-size: 17px;
                                inline-size: 7px;
                                inset-block-start: 50%;
                                inset-inline-end: 30px;
                                line-height: 17px;
                                list-style-type: circle;
                                opacity: 0;
                                outline-color: rgb(10, 37, 64);
                                perspective-origin: 50% 50%;
                                pointer-events: none;
                                position: absolute;
                                right: 30px;
                                text-decoration: none solid rgb(10, 37, 64);
                                text-emphasis-color: rgb(10, 37, 64);
                                text-shadow: rgba(10, 37, 64, 0.7) 0px 0px 0px;
                                top: 50%;
                                transform-origin: 50% 50%;
                                user-select: none;
                                visibility: hidden;
                                width: 7px;
                                -webkit-text-fill-color: rgb(10, 37, 64);
                                -webkit-text-stroke-color: rgb(10, 37, 64);
                              "
                              ><!--?xml version="1.0" encoding="utf-8"?--><svg
                                version="1.1"
                                id="Layer_1"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                x="0px"
                                y="0px"
                                viewBox="0 0 9.5 16"
                                style="
                                  animation-duration: 0.001s;
                                  block-size: auto;
                                  border-block-color: rgb(10, 37, 64);
                                  border-color: rgb(10, 37, 64);
                                  border-inline-color: rgb(10, 37, 64);
                                  caret-color: rgb(10, 37, 64);
                                  color: rgb(10, 37, 64);
                                  column-rule-color: rgb(10, 37, 64);
                                  cursor: pointer;
                                  font-size: 17px;
                                  font-style: italic;
                                  height: auto;
                                  inline-size: 100%;
                                  line-height: 17px;
                                  list-style-type: circle;
                                  max-block-size: 100%;
                                  max-height: 100%;
                                  outline-color: rgb(10, 37, 64);
                                  overflow-clip-margin: content-box;
                                  overflow: hidden;
                                  perspective-origin: 50% 50%;
                                  pointer-events: none;
                                  text-decoration: none solid rgb(10, 37, 64);
                                  text-emphasis-color: rgb(10, 37, 64);
                                  text-shadow: rgba(10, 37, 64, 0.7) 0px 0px 0px;
                                  transform-origin: 50% 50%;
                                  user-select: none;
                                  visibility: hidden;
                                  width: 100%;
                                  -webkit-text-fill-color: rgb(10, 37, 64);
                                  -webkit-text-stroke-color: rgb(10, 37, 64);
                                "
                                xml:space="preserve"
                              >
                                <path d="M1.5,0L0,1.5L6.5,8L0,14.5L1.5,16l8-8L1.5,0z"></path></svg></i
                          ></a>
                        </li>
                        <li style="animation-duration: 0.001s; block-size: auto; height: auto; inline-size: 100%; list-style-type: circle; margin-block-end: 15px; margin-bottom: 15px; perspective-origin: 50% 50%; pointer-events: none; transform-origin: 50% 50%; visibility: hidden; width: 100%">
                          <a
                            href="/accessservices/vpat"
                            tabindex="-1"
                            data-acsb-clickable="true"
                            data-acsb-navigable="true"
                            data-acsb-now-navigable="false"
                            data-custom-button-processed="true"
                            style="
                              animation-duration: 0.001s;
                              border-block-color: rgb(10, 37, 64);
                              border-color: rgb(10, 37, 64);
                              border-radius: 10px;
                              border-end-end-radius: 10px;
                              border-end-start-radius: 10px;
                              border-inline-color: rgb(10, 37, 64);
                              border-start-end-radius: 10px;
                              border-start-start-radius: 10px;
                              caret-color: rgb(10, 37, 64);
                              color: rgb(10, 37, 64);
                              column-rule-color: rgb(10, 37, 64);
                              cursor: pointer;
                              display: block;
                              font-size: 17px;
                              inline-size: 100%;
                              line-height: 25.5px;
                              list-style-type: circle;
                              margin-block: auto;
                              margin: auto;
                              margin-inline: auto;
                              outline-color: rgb(10, 37, 64);
                              padding-block: 10px;
                              padding: 10px 20px;
                              padding-inline: 20px;
                              perspective-origin: 50% 50%;
                              pointer-events: none;
                              position: relative;
                              text-decoration: none solid rgb(10, 37, 64);
                              text-emphasis-color: rgb(10, 37, 64);
                              text-shadow: rgba(10, 37, 64, 0.7) 0px 0px 0px;
                              transform-origin: 50% 50%;
                              visibility: hidden;
                              width: 100%;
                              -webkit-text-fill-color: rgb(10, 37, 64);
                              -webkit-text-stroke-color: rgb(10, 37, 64);
                            "
                          >
                            VPAT
                            <i
                              class="icon icon-chevron-right"
                              aria-hidden="true"
                              role="presentation"
                              style="
                                animation-duration: 0.001s;
                                border-block-color: rgb(10, 37, 64);
                                border-color: rgb(10, 37, 64);
                                border-inline-color: rgb(10, 37, 64);
                                caret-color: rgb(10, 37, 64);
                                color: rgb(10, 37, 64);
                                column-rule-color: rgb(10, 37, 64);
                                cursor: pointer;
                                display: block;
                                font-size: 17px;
                                inline-size: 7px;
                                inset-block-start: 50%;
                                inset-inline-end: 30px;
                                line-height: 17px;
                                list-style-type: circle;
                                opacity: 0;
                                outline-color: rgb(10, 37, 64);
                                perspective-origin: 50% 50%;
                                pointer-events: none;
                                position: absolute;
                                right: 30px;
                                text-decoration: none solid rgb(10, 37, 64);
                                text-emphasis-color: rgb(10, 37, 64);
                                text-shadow: rgba(10, 37, 64, 0.7) 0px 0px 0px;
                                top: 50%;
                                transform-origin: 50% 50%;
                                user-select: none;
                                visibility: hidden;
                                width: 7px;
                                -webkit-text-fill-color: rgb(10, 37, 64);
                                -webkit-text-stroke-color: rgb(10, 37, 64);
                              "
                              ><!--?xml version="1.0" encoding="utf-8"?--><svg
                                version="1.1"
                                id="Layer_1"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                x="0px"
                                y="0px"
                                viewBox="0 0 9.5 16"
                                style="
                                  animation-duration: 0.001s;
                                  block-size: auto;
                                  border-block-color: rgb(10, 37, 64);
                                  border-color: rgb(10, 37, 64);
                                  border-inline-color: rgb(10, 37, 64);
                                  caret-color: rgb(10, 37, 64);
                                  color: rgb(10, 37, 64);
                                  column-rule-color: rgb(10, 37, 64);
                                  cursor: pointer;
                                  font-size: 17px;
                                  font-style: italic;
                                  height: auto;
                                  inline-size: 100%;
                                  line-height: 17px;
                                  list-style-type: circle;
                                  max-block-size: 100%;
                                  max-height: 100%;
                                  outline-color: rgb(10, 37, 64);
                                  overflow-clip-margin: content-box;
                                  overflow: hidden;
                                  perspective-origin: 50% 50%;
                                  pointer-events: none;
                                  text-decoration: none solid rgb(10, 37, 64);
                                  text-emphasis-color: rgb(10, 37, 64);
                                  text-shadow: rgba(10, 37, 64, 0.7) 0px 0px 0px;
                                  transform-origin: 50% 50%;
                                  user-select: none;
                                  visibility: hidden;
                                  width: 100%;
                                  -webkit-text-fill-color: rgb(10, 37, 64);
                                  -webkit-text-stroke-color: rgb(10, 37, 64);
                                "
                                xml:space="preserve"
                              >
                                <path d="M1.5,0L0,1.5L6.5,8L0,14.5L1.5,16l8-8L1.5,0z"></path></svg></i
                          ></a>
                        </li>
                        <li style="animation-duration: 0.001s; block-size: auto; height: auto; inline-size: 100%; list-style-type: circle; margin-block-end: 15px; margin-bottom: 15px; perspective-origin: 50% 50%; pointer-events: none; transform-origin: 50% 50%; visibility: hidden; width: 100%">
                          <a
                            href="/accessservices/inspection"
                            tabindex="-1"
                            data-acsb-clickable="true"
                            data-acsb-navigable="true"
                            data-acsb-now-navigable="false"
                            data-custom-button-processed="true"
                            style="
                              animation-duration: 0.001s;
                              border-block-color: rgb(10, 37, 64);
                              border-color: rgb(10, 37, 64);
                              border-radius: 10px;
                              border-end-end-radius: 10px;
                              border-end-start-radius: 10px;
                              border-inline-color: rgb(10, 37, 64);
                              border-start-end-radius: 10px;
                              border-start-start-radius: 10px;
                              caret-color: rgb(10, 37, 64);
                              color: rgb(10, 37, 64);
                              column-rule-color: rgb(10, 37, 64);
                              cursor: pointer;
                              display: block;
                              font-size: 17px;
                              inline-size: 100%;
                              line-height: 25.5px;
                              list-style-type: circle;
                              margin-block: auto;
                              margin: auto;
                              margin-inline: auto;
                              outline-color: rgb(10, 37, 64);
                              padding-block: 10px;
                              padding: 10px 20px;
                              padding-inline: 20px;
                              perspective-origin: 50% 50%;
                              pointer-events: none;
                              position: relative;
                              text-decoration: none solid rgb(10, 37, 64);
                              text-emphasis-color: rgb(10, 37, 64);
                              text-shadow: rgba(10, 37, 64, 0.7) 0px 0px 0px;
                              transform-origin: 50% 50%;
                              visibility: hidden;
                              width: 100%;
                              -webkit-text-fill-color: rgb(10, 37, 64);
                              -webkit-text-stroke-color: rgb(10, 37, 64);
                            "
                          >
                            Inspection
                            <i
                              class="icon icon-chevron-right"
                              aria-hidden="true"
                              role="presentation"
                              style="
                                animation-duration: 0.001s;
                                border-block-color: rgb(10, 37, 64);
                                border-color: rgb(10, 37, 64);
                                border-inline-color: rgb(10, 37, 64);
                                caret-color: rgb(10, 37, 64);
                                color: rgb(10, 37, 64);
                                column-rule-color: rgb(10, 37, 64);
                                cursor: pointer;
                                display: block;
                                font-size: 17px;
                                inline-size: 7px;
                                inset-block-start: 50%;
                                inset-inline-end: 30px;
                                line-height: 17px;
                                list-style-type: circle;
                                opacity: 0;
                                outline-color: rgb(10, 37, 64);
                                perspective-origin: 50% 50%;
                                pointer-events: none;
                                position: absolute;
                                right: 30px;
                                text-decoration: none solid rgb(10, 37, 64);
                                text-emphasis-color: rgb(10, 37, 64);
                                text-shadow: rgba(10, 37, 64, 0.7) 0px 0px 0px;
                                top: 50%;
                                transform-origin: 50% 50%;
                                user-select: none;
                                visibility: hidden;
                                width: 7px;
                                -webkit-text-fill-color: rgb(10, 37, 64);
                                -webkit-text-stroke-color: rgb(10, 37, 64);
                              "
                              ><!--?xml version="1.0" encoding="utf-8"?--><svg
                                version="1.1"
                                id="Layer_1"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                x="0px"
                                y="0px"
                                viewBox="0 0 9.5 16"
                                style="
                                  animation-duration: 0.001s;
                                  block-size: auto;
                                  border-block-color: rgb(10, 37, 64);
                                  border-color: rgb(10, 37, 64);
                                  border-inline-color: rgb(10, 37, 64);
                                  caret-color: rgb(10, 37, 64);
                                  color: rgb(10, 37, 64);
                                  column-rule-color: rgb(10, 37, 64);
                                  cursor: pointer;
                                  font-size: 17px;
                                  font-style: italic;
                                  height: auto;
                                  inline-size: 100%;
                                  line-height: 17px;
                                  list-style-type: circle;
                                  max-block-size: 100%;
                                  max-height: 100%;
                                  outline-color: rgb(10, 37, 64);
                                  overflow-clip-margin: content-box;
                                  overflow: hidden;
                                  perspective-origin: 50% 50%;
                                  pointer-events: none;
                                  text-decoration: none solid rgb(10, 37, 64);
                                  text-emphasis-color: rgb(10, 37, 64);
                                  text-shadow: rgba(10, 37, 64, 0.7) 0px 0px 0px;
                                  transform-origin: 50% 50%;
                                  user-select: none;
                                  visibility: hidden;
                                  width: 100%;
                                  -webkit-text-fill-color: rgb(10, 37, 64);
                                  -webkit-text-stroke-color: rgb(10, 37, 64);
                                "
                                xml:space="preserve"
                              >
                                <path d="M1.5,0L0,1.5L6.5,8L0,14.5L1.5,16l8-8L1.5,0z"></path></svg></i
                          ></a>
                        </li>
                        <li style="animation-duration: 0.001s; block-size: auto; height: auto; inline-size: 100%; list-style-type: circle; perspective-origin: 50% 50%; pointer-events: none; transform-origin: 50% 50%; visibility: hidden; width: 100%">
                          <a
                            href="/accessservices/web-accessibility-litigation-support"
                            tabindex="-1"
                            data-acsb-clickable="true"
                            data-acsb-navigable="true"
                            data-acsb-now-navigable="false"
                            data-custom-button-processed="true"
                            style="
                              animation-duration: 0.001s;
                              border-block-color: rgb(10, 37, 64);
                              border-color: rgb(10, 37, 64);
                              border-radius: 10px;
                              border-end-end-radius: 10px;
                              border-end-start-radius: 10px;
                              border-inline-color: rgb(10, 37, 64);
                              border-start-end-radius: 10px;
                              border-start-start-radius: 10px;
                              caret-color: rgb(10, 37, 64);
                              color: rgb(10, 37, 64);
                              column-rule-color: rgb(10, 37, 64);
                              cursor: pointer;
                              display: block;
                              font-size: 17px;
                              inline-size: 100%;
                              line-height: 25.5px;
                              list-style-type: circle;
                              margin-block: auto;
                              margin: auto;
                              margin-inline: auto;
                              outline-color: rgb(10, 37, 64);
                              padding-block: 10px;
                              padding: 10px 20px;
                              padding-inline: 20px;
                              perspective-origin: 50% 50%;
                              pointer-events: none;
                              position: relative;
                              text-decoration: none solid rgb(10, 37, 64);
                              text-emphasis-color: rgb(10, 37, 64);
                              text-shadow: rgba(10, 37, 64, 0.7) 0px 0px 0px;
                              transform-origin: 50% 50%;
                              visibility: hidden;
                              width: 100%;
                              -webkit-text-fill-color: rgb(10, 37, 64);
                              -webkit-text-stroke-color: rgb(10, 37, 64);
                            "
                          >
                            Litigation Support
                            <i
                              class="icon icon-chevron-right"
                              aria-hidden="true"
                              role="presentation"
                              style="
                                animation-duration: 0.001s;
                                border-block-color: rgb(10, 37, 64);
                                border-color: rgb(10, 37, 64);
                                border-inline-color: rgb(10, 37, 64);
                                caret-color: rgb(10, 37, 64);
                                color: rgb(10, 37, 64);
                                column-rule-color: rgb(10, 37, 64);
                                cursor: pointer;
                                display: block;
                                font-size: 17px;
                                inline-size: 7px;
                                inset-block-start: 50%;
                                inset-inline-end: 30px;
                                line-height: 17px;
                                list-style-type: circle;
                                opacity: 0;
                                outline-color: rgb(10, 37, 64);
                                perspective-origin: 50% 50%;
                                pointer-events: none;
                                position: absolute;
                                right: 30px;
                                text-decoration: none solid rgb(10, 37, 64);
                                text-emphasis-color: rgb(10, 37, 64);
                                text-shadow: rgba(10, 37, 64, 0.7) 0px 0px 0px;
                                top: 50%;
                                transform-origin: 50% 50%;
                                user-select: none;
                                visibility: hidden;
                                width: 7px;
                                -webkit-text-fill-color: rgb(10, 37, 64);
                                -webkit-text-stroke-color: rgb(10, 37, 64);
                              "
                              ><!--?xml version="1.0" encoding="utf-8"?--><svg
                                version="1.1"
                                id="Layer_1"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                x="0px"
                                y="0px"
                                viewBox="0 0 9.5 16"
                                style="
                                  animation-duration: 0.001s;
                                  block-size: auto;
                                  border-block-color: rgb(10, 37, 64);
                                  border-color: rgb(10, 37, 64);
                                  border-inline-color: rgb(10, 37, 64);
                                  caret-color: rgb(10, 37, 64);
                                  color: rgb(10, 37, 64);
                                  column-rule-color: rgb(10, 37, 64);
                                  cursor: pointer;
                                  font-size: 17px;
                                  font-style: italic;
                                  height: auto;
                                  inline-size: 100%;
                                  line-height: 17px;
                                  list-style-type: circle;
                                  max-block-size: 100%;
                                  max-height: 100%;
                                  outline-color: rgb(10, 37, 64);
                                  overflow-clip-margin: content-box;
                                  overflow: hidden;
                                  perspective-origin: 50% 50%;
                                  pointer-events: none;
                                  text-decoration: none solid rgb(10, 37, 64);
                                  text-emphasis-color: rgb(10, 37, 64);
                                  text-shadow: rgba(10, 37, 64, 0.7) 0px 0px 0px;
                                  transform-origin: 50% 50%;
                                  user-select: none;
                                  visibility: hidden;
                                  width: 100%;
                                  -webkit-text-fill-color: rgb(10, 37, 64);
                                  -webkit-text-stroke-color: rgb(10, 37, 64);
                                "
                                xml:space="preserve"
                              >
                                <path d="M1.5,0L0,1.5L6.5,8L0,14.5L1.5,16l8-8L1.5,0z"></path></svg></i
                          ></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    class="part part-card"
                    style="
                      animation-duration: 0.001s;
                      background-color: rgb(248, 249, 252);
                      block-size: auto;
                      border-bottom-right-radius: 10px;
                      border-end-end-radius: 10px;
                      border-start-end-radius: 10px;
                      border-top-right-radius: 10px;
                      height: auto;
                      inline-size: 380px;
                      min-inline-size: 380px;
                      min-width: 380px;
                      overflow: hidden;
                      padding-block: 30px;
                      padding: 30px;
                      padding-inline: 30px;
                      perspective-origin: 50% 50%;
                      pointer-events: none;
                      transform-origin: 50% 50%;
                      visibility: hidden;
                      width: 380px;
                    "
                  >
                    <a
                      class="card"
                      href="https://dashboard.accessibe.com/accessservices"
                      tabindex="-1"
                      data-acsb-clickable="true"
                      data-acsb-navigable="true"
                      data-acsb-now-navigable="false"
                      data-custom-button-processed="true"
                      style="animation-duration: 0.001s; block-size: 100%; cursor: pointer; height: 100%; perspective-origin: 50% 50%; pointer-events: none; transform-origin: 50% 50%; visibility: hidden"
                      ><div
                        class="image"
                        style="
                          animation-duration: 0.001s;
                          block-size: 200px;
                          border-block-color: rgb(19, 110, 248);
                          border-color: rgb(19, 110, 248);
                          border-radius: 10px;
                          border-end-end-radius: 10px;
                          border-end-start-radius: 10px;
                          border-inline-color: rgb(19, 110, 248);
                          border-start-end-radius: 10px;
                          border-start-start-radius: 10px;
                          caret-color: rgb(19, 110, 248);
                          color: rgb(19, 110, 248);
                          column-rule-color: rgb(19, 110, 248);
                          cursor: pointer;
                          height: 200px;
                          inline-size: auto;
                          outline-color: rgb(19, 110, 248);
                          overflow: hidden;
                          perspective-origin: 50% 50%;
                          pointer-events: none;
                          text-decoration: none solid rgb(19, 110, 248);
                          text-emphasis-color: rgb(19, 110, 248);
                          transform-origin: 50% 50%;
                          visibility: hidden;
                          width: auto;
                          -webkit-text-fill-color: rgb(19, 110, 248);
                          -webkit-text-stroke-color: rgb(19, 110, 248);
                        "
                      >
                        <img
                          class="object-cover"
                          role="presentation"
                          alt="Create and manage your accessibility projects easily!"
                          style="
                            animation-duration: 0.001s;
                            block-size: 100%;
                            border-block-color: rgb(19, 110, 248);
                            border-color: rgb(19, 110, 248);
                            border-inline-color: rgb(19, 110, 248);
                            caret-color: rgb(19, 110, 248);
                            color: rgb(19, 110, 248);
                            column-rule-color: rgb(19, 110, 248);
                            cursor: pointer;
                            display: block;
                            height: 100%;
                            inline-size: 100%;
                            max-inline-size: none;
                            max-width: none;
                            object-fit: cover;
                            outline-color: rgb(19, 110, 248);
                            perspective-origin: 50% 50%;
                            pointer-events: none;
                            text-decoration: none solid rgb(19, 110, 248);
                            text-emphasis-color: rgb(19, 110, 248);
                            transform-origin: 50% 50%;
                            visibility: hidden;
                            width: 100%;
                            -webkit-text-fill-color: rgb(19, 110, 248);
                            -webkit-text-stroke-color: rgb(19, 110, 248);
                          "
                        />
                      </div>
                      <div
                        class="content"
                        style="
                          animation-duration: 0.001s;
                          block-size: auto;
                          border-block-color: rgb(19, 110, 248);
                          border-color: rgb(19, 110, 248);
                          border-inline-color: rgb(19, 110, 248);
                          caret-color: rgb(19, 110, 248);
                          color: rgb(19, 110, 248);
                          column-rule-color: rgb(19, 110, 248);
                          cursor: pointer;
                          height: auto;
                          inline-size: auto;
                          margin-block-start: 30px;
                          margin-top: 30px;
                          outline-color: rgb(19, 110, 248);
                          perspective-origin: 50% 50%;
                          pointer-events: none;
                          text-decoration: none solid rgb(19, 110, 248);
                          text-emphasis-color: rgb(19, 110, 248);
                          transform-origin: 50% 50%;
                          visibility: hidden;
                          width: auto;
                          -webkit-text-fill-color: rgb(19, 110, 248);
                          -webkit-text-stroke-color: rgb(19, 110, 248);
                        "
                      >
                        <span
                          class="title title-small2"
                          style="
                            animation-duration: 0.001s;
                            border-block-color: rgb(10, 37, 64);
                            border-color: rgb(10, 37, 64);
                            border-inline-color: rgb(10, 37, 64);
                            caret-color: rgb(10, 37, 64);
                            color: rgb(10, 37, 64);
                            column-rule-color: rgb(10, 37, 64);
                            cursor: pointer;
                            display: block;
                            font-size: 19px;
                            font-weight: 700;
                            inline-size: 100%;
                            letter-spacing: -0.5px;
                            line-height: 24.7px;
                            margin-block-end: 20px;
                            margin-bottom: 20px;
                            outline-color: rgb(10, 37, 64);
                            perspective-origin: 50% 50%;
                            pointer-events: none;
                            position: relative;
                            text-decoration: none solid rgb(10, 37, 64);
                            text-emphasis-color: rgb(10, 37, 64);
                            text-rendering: geometricprecision;
                            transform-origin: 50% 50%;
                            visibility: hidden;
                            width: 100%;
                            -webkit-text-fill-color: rgb(10, 37, 64);
                            -webkit-text-stroke-color: rgb(10, 37, 64);
                          "
                          >Create and manage your accessibility projects easily!</span
                        >
                        <p class="text text-medium" style="animation-duration: 0.001s; block-size: auto; cursor: pointer; height: auto; inline-size: auto; margin-block: 0px; margin-bottom: 0px; margin-top: 0px; perspective-origin: 50% 50%; pointer-events: none; transform-origin: 50% 50%; visibility: hidden; width: auto">
                          Streamline accessibility projects with our Project Management Dashboard
                        </p>
                        <span
                          class="text-button text-button-nocolor text-button-small"
                          style="
                            align-items: center;
                            animation-duration: 0.001s;
                            border-block-color: rgb(10, 37, 64);
                            border-color: rgb(10, 37, 64);
                            border-inline-color: rgb(10, 37, 64);
                            caret-color: rgb(10, 37, 64);
                            color: rgb(10, 37, 64);
                            column-rule-color: rgb(10, 37, 64);
                            cursor: pointer;
                            display: block;
                            font-size: 14px;
                            font-weight: 600;
                            inline-size: 100%;
                            justify-content: center;
                            line-height: 14px;
                            margin-block-start: 25px;
                            margin-top: 25px;
                            outline-color: rgb(10, 37, 64);
                            perspective-origin: 50% 50%;
                            pointer-events: none;
                            text-decoration: none solid rgb(10, 37, 64);
                            text-emphasis-color: rgb(10, 37, 64);
                            text-transform: uppercase;
                            transform-origin: 50% 50%;
                            user-select: none;
                            visibility: hidden;
                            width: 100%;
                            -webkit-text-fill-color: rgb(10, 37, 64);
                            -webkit-text-stroke-color: rgb(10, 37, 64);
                          "
                        >
                          Start a Project
                          <i
                            class="icon icon-chevron-right"
                            aria-hidden="true"
                            role="presentation"
                            style="
                              animation-duration: 0.001s;
                              border-block-color: rgb(10, 37, 64);
                              border-color: rgb(10, 37, 64);
                              border-inline-color: rgb(10, 37, 64);
                              caret-color: rgb(10, 37, 64);
                              color: rgb(10, 37, 64);
                              column-rule-color: rgb(10, 37, 64);
                              cursor: pointer;
                              display: inline-block;
                              font-size: 14px;
                              font-weight: 600;
                              inline-size: 100%;
                              line-height: 14px;
                              margin-inline-start: 12px;
                              margin-left: 12px;
                              max-inline-size: 5px;
                              max-width: 5px;
                              min-inline-size: 5px;
                              min-width: 5px;
                              outline-color: rgb(10, 37, 64);
                              perspective-origin: 50% 50%;
                              pointer-events: none;
                              text-decoration: none solid rgb(10, 37, 64);
                              text-emphasis-color: rgb(10, 37, 64);
                              text-transform: uppercase;
                              transform-origin: 50% 50%;
                              user-select: none;
                              visibility: hidden;
                              width: 100%;
                              -webkit-text-fill-color: rgb(10, 37, 64);
                              -webkit-text-stroke-color: rgb(10, 37, 64);
                            "
                            ><!--?xml version="1.0" encoding="utf-8"?--><svg
                              version="1.1"
                              id="Layer_1"
                              xmlns="http://www.w3.org/2000/svg"
                              xmlns:xlink="http://www.w3.org/1999/xlink"
                              x="0px"
                              y="0px"
                              viewBox="0 0 9.5 16"
                              style="
                                animation-duration: 0.001s;
                                block-size: auto;
                                border-block-color: rgb(10, 37, 64);
                                border-color: rgb(10, 37, 64);
                                border-inline-color: rgb(10, 37, 64);
                                caret-color: rgb(10, 37, 64);
                                color: rgb(10, 37, 64);
                                column-rule-color: rgb(10, 37, 64);
                                cursor: pointer;
                                font-size: 14px;
                                font-style: italic;
                                font-weight: 600;
                                height: auto;
                                inline-size: 100%;
                                line-height: 14px;
                                max-block-size: 100%;
                                max-height: 100%;
                                outline-color: rgb(10, 37, 64);
                                overflow-clip-margin: content-box;
                                overflow: hidden;
                                perspective-origin: 50% 50%;
                                pointer-events: none;
                                text-decoration: none solid rgb(10, 37, 64);
                                text-emphasis-color: rgb(10, 37, 64);
                                text-transform: uppercase;
                                transform-origin: 50% 50%;
                                user-select: none;
                                visibility: hidden;
                                width: 100%;
                                -webkit-text-fill-color: rgb(10, 37, 64);
                                -webkit-text-stroke-color: rgb(10, 37, 64);
                              "
                              xml:space="preserve"
                            >
                              <path d="M1.5,0L0,1.5L6.5,8L0,14.5L1.5,16l8-8L1.5,0z"></path></svg></i
                        ></span></div
                    ></a>
                  </div>
                </div>
              </div>
            </li>
            <li
              class="menu-company menu-has-dropdown a11y-dd-container"
              data-acsb-menu="li"
              data-acsb-menu-root="true"
              data-acsb-dropdown-container="true"
              style="animation-duration: 0.001s; block-size: 65px; display: inline-block; height: 65px; inline-size: 121.961px; perspective-origin: 60.9766px 32.5px; transform-origin: 60.9805px 32.5px; width: 121.961px"
            >
              <a
                class="item"
                href="/company"
                data-acsb-clickable="true"
                data-acsb-navigable="true"
                data-acsb-now-navigable="true"
                data-custom-button-processed="true"
                data-acsb-menu="a"
                data-acsb-menu-root-link="true"
                aria-haspopup="true"
                aria-expanded="false"
                style="
                  align-items: center;
                  animation-duration: 0.001s;
                  block-size: 65px;
                  border-block-color: rgb(10, 37, 64);
                  border-color: rgb(10, 37, 64);
                  border-inline-color: rgb(10, 37, 64);
                  inset: 0px;
                  caret-color: rgb(10, 37, 64);
                  color: rgb(10, 37, 64);
                  column-rule-color: rgb(10, 37, 64);
                  cursor: pointer;
                  display: inline-flex;
                  font-size: 14px;
                  font-weight: 600;
                  height: 65px;
                  inline-size: 106.961px;
                  inset-block: 0px;
                  inset-inline: 0px;
                  justify-content: space-between;
                  line-height: 21px;
                  margin-inline-end: 15px;
                  margin-right: 15px;
                  outline-color: rgb(10, 37, 64);
                  padding-inline: 10px;
                  padding-left: 10px;
                  padding-right: 10px;
                  perspective-origin: 53.4766px 32.5px;
                  position: relative;
                  text-decoration: none solid rgb(10, 37, 64);
                  text-emphasis-color: rgb(10, 37, 64);
                  text-transform: uppercase;
                  transform-origin: 53.4805px 32.5px;
                  width: 106.961px;
                  -webkit-text-fill-color: rgb(10, 37, 64);
                  -webkit-text-stroke-color: rgb(10, 37, 64);
                "
                data-id="4"
              >
                Company
                <i
                  class="icon icon-chevron-down"
                  role="presentation"
                  style="
                    animation-duration: 0.001s;
                    block-size: 7px;
                    border-block-color: rgb(10, 37, 64);
                    border-color: rgb(10, 37, 64);
                    border-inline-color: rgb(10, 37, 64);
                    caret-color: rgb(10, 37, 64);
                    color: rgb(10, 37, 64);
                    column-rule-color: rgb(10, 37, 64);
                    cursor: pointer;
                    display: block;
                    font-size: 14px;
                    font-weight: 600;
                    height: 7px;
                    inline-size: 7px;
                    line-height: 14px;
                    margin-block-start: -1px;
                    margin-inline-start: 7px;
                    margin-left: 7px;
                    margin-top: -1px;
                    min-block-size: auto;
                    min-height: auto;
                    min-inline-size: auto;
                    min-width: auto;
                    outline-color: rgb(10, 37, 64);
                    perspective-origin: 3.5px 3.5px;
                    text-decoration: none solid rgb(10, 37, 64);
                    text-emphasis-color: rgb(10, 37, 64);
                    text-transform: uppercase;
                    transform-origin: 3.5px 3.5px;
                    user-select: none;
                    width: 7px;
                    -webkit-text-fill-color: rgb(10, 37, 64);
                    -webkit-text-stroke-color: rgb(10, 37, 64);
                  "
                  ><svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    aria-hidden="true"
                    data-acsb-hidden="true"
                    style="
                      animation-duration: 0.001s;
                      block-size: 7px;
                      border-block-color: rgb(10, 37, 64);
                      border-color: rgb(10, 37, 64);
                      border-inline-color: rgb(10, 37, 64);
                      caret-color: rgb(10, 37, 64);
                      color: rgb(10, 37, 64);
                      column-rule-color: rgb(10, 37, 64);
                      cursor: pointer;
                      font-size: 14px;
                      font-style: italic;
                      font-weight: 600;
                      height: 7px;
                      inline-size: 7px;
                      line-height: 14px;
                      max-block-size: 100%;
                      max-height: 100%;
                      outline-color: rgb(10, 37, 64);
                      overflow-clip-margin: content-box;
                      overflow: hidden;
                      perspective-origin: 3.5px 3.5px;
                      text-decoration: none solid rgb(10, 37, 64);
                      text-emphasis-color: rgb(10, 37, 64);
                      text-transform: uppercase;
                      transform-origin: 3.5px 3.5px;
                      user-select: none;
                      width: 7px;
                      -webkit-text-fill-color: rgb(10, 37, 64);
                      -webkit-text-stroke-color: rgb(10, 37, 64);
                    "
                  >
                    <path d="M16 5.5l-1.5-1.5-6.5 6.5-6.5-6.5-1.5 1.5 8 8 8-8z"></path></svg></i
              ></a>
              <div
                class="dropdown acsb-hidden"
                role="region"
                aria-label="Sub menu"
                data-acsb-hidden="true"
                data-acsb-dropdown="akg6imv8cgf"
                aria-hidden="true"
                style="
                  animation-duration: 0.001s;
                  background-color: rgb(255, 255, 255);
                  border-radius: 10px;
                  border-end-end-radius: 10px;
                  border-end-start-radius: 10px;
                  border-start-end-radius: 10px;
                  border-start-start-radius: 10px;
                  box-shadow: rgba(60, 80, 170, 0.2) 0px 3px 10px 0px;
                  display: none;
                  inline-size: 800px;
                  inset-block-start: 65px;
                  inset-inline-start: 0px;
                  left: 0px;
                  opacity: 0;
                  overflow: hidden;
                  perspective-origin: 50% 50%;
                  pointer-events: none;
                  position: absolute;
                  top: 65px;
                  transform-origin: 0% 0%;
                  visibility: hidden;
                  width: 800px;
                  z-index: 999;
                "
                data-id="5"
              >
                <div
                  class="flex flex-vertical-stretch flex-nowrap"
                  data-acsb-possible-star="true"
                  style="align-items: stretch; animation-duration: 0.001s; block-size: auto; display: flex; height: auto; inline-size: 100%; justify-content: space-between; perspective-origin: 50% 50%; pointer-events: none; transform-origin: 50% 50%; visibility: hidden; width: 100%"
                >
                  <div
                    class="part part-menu flex flex-nowrap flex-vertical-start"
                    data-acsb-overflower="true"
                    style="align-items: flex-start; animation-duration: 0.001s; block-size: auto; display: flex; height: auto; inline-size: 100%; justify-content: space-between; overflow: hidden; perspective-origin: 50% 50%; pointer-events: none; transform-origin: 50% 50%; visibility: hidden; width: 100%"
                  >
                    <div class="part-category" style="animation-duration: 0.001s; block-size: auto; height: auto; inline-size: auto; padding-block: 30px; padding: 30px; padding-inline: 30px; perspective-origin: 50% 50%; pointer-events: none; transform-origin: 50% 50%; visibility: hidden; width: auto">
                      <ul
                        class="flex"
                        data-acsb-menu="ul"
                        role="region"
                        aria-label="Submenu"
                        style="align-items: center; animation-duration: 0.001s; block-size: auto; display: flex; flex-wrap: wrap; height: auto; inline-size: 100%; justify-content: space-between; list-style-type: circle; perspective-origin: 50% 50%; pointer-events: none; transform-origin: 50% 50%; visibility: hidden; width: 100%"
                      >
                        <li style="animation-duration: 0.001s; block-size: auto; height: auto; inline-size: 100%; list-style-type: circle; margin-block-end: 15px; margin-bottom: 15px; perspective-origin: 50% 50%; pointer-events: none; transform-origin: 50% 50%; visibility: hidden; width: 100%">
                          <a
                            href="/company"
                            data-acsb-clickable="true"
                            data-acsb-navigable="true"
                            data-acsb-now-navigable="false"
                            data-custom-button-processed="true"
                            tabindex="-1"
                            style="
                              animation-duration: 0.001s;
                              border-block-color: rgb(10, 37, 64);
                              border-color: rgb(10, 37, 64);
                              border-radius: 10px;
                              border-end-end-radius: 10px;
                              border-end-start-radius: 10px;
                              border-inline-color: rgb(10, 37, 64);
                              border-start-end-radius: 10px;
                              border-start-start-radius: 10px;
                              caret-color: rgb(10, 37, 64);
                              color: rgb(10, 37, 64);
                              column-rule-color: rgb(10, 37, 64);
                              cursor: pointer;
                              display: block;
                              font-size: 17px;
                              inline-size: 100%;
                              line-height: 25.5px;
                              list-style-type: circle;
                              margin-block: auto;
                              margin: auto;
                              margin-inline: auto;
                              outline-color: rgb(10, 37, 64);
                              padding-block: 10px;
                              padding: 10px 20px;
                              padding-inline: 20px;
                              perspective-origin: 50% 50%;
                              pointer-events: none;
                              position: relative;
                              text-decoration: none solid rgb(10, 37, 64);
                              text-emphasis-color: rgb(10, 37, 64);
                              text-shadow: rgba(10, 37, 64, 0.7) 0px 0px 0px;
                              transform-origin: 50% 50%;
                              visibility: hidden;
                              width: 100%;
                              -webkit-text-fill-color: rgb(10, 37, 64);
                              -webkit-text-stroke-color: rgb(10, 37, 64);
                            "
                          >
                            About accessiBe
                            <i
                              class="icon icon-chevron-right"
                              aria-hidden="true"
                              role="presentation"
                              style="
                                animation-duration: 0.001s;
                                border-block-color: rgb(10, 37, 64);
                                border-color: rgb(10, 37, 64);
                                border-inline-color: rgb(10, 37, 64);
                                caret-color: rgb(10, 37, 64);
                                color: rgb(10, 37, 64);
                                column-rule-color: rgb(10, 37, 64);
                                cursor: pointer;
                                display: block;
                                font-size: 17px;
                                inline-size: 7px;
                                inset-block-start: 50%;
                                inset-inline-end: 30px;
                                line-height: 17px;
                                list-style-type: circle;
                                opacity: 0;
                                outline-color: rgb(10, 37, 64);
                                perspective-origin: 50% 50%;
                                pointer-events: none;
                                position: absolute;
                                right: 30px;
                                text-decoration: none solid rgb(10, 37, 64);
                                text-emphasis-color: rgb(10, 37, 64);
                                text-shadow: rgba(10, 37, 64, 0.7) 0px 0px 0px;
                                top: 50%;
                                transform-origin: 50% 50%;
                                user-select: none;
                                visibility: hidden;
                                width: 7px;
                                -webkit-text-fill-color: rgb(10, 37, 64);
                                -webkit-text-stroke-color: rgb(10, 37, 64);
                              "
                              ><!--?xml version="1.0" encoding="utf-8"?--><svg
                                version="1.1"
                                id="Layer_1"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                x="0px"
                                y="0px"
                                viewBox="0 0 9.5 16"
                                style="
                                  animation-duration: 0.001s;
                                  block-size: auto;
                                  border-block-color: rgb(10, 37, 64);
                                  border-color: rgb(10, 37, 64);
                                  border-inline-color: rgb(10, 37, 64);
                                  caret-color: rgb(10, 37, 64);
                                  color: rgb(10, 37, 64);
                                  column-rule-color: rgb(10, 37, 64);
                                  cursor: pointer;
                                  font-size: 17px;
                                  font-style: italic;
                                  height: auto;
                                  inline-size: 100%;
                                  line-height: 17px;
                                  list-style-type: circle;
                                  max-block-size: 100%;
                                  max-height: 100%;
                                  outline-color: rgb(10, 37, 64);
                                  overflow-clip-margin: content-box;
                                  overflow: hidden;
                                  perspective-origin: 50% 50%;
                                  pointer-events: none;
                                  text-decoration: none solid rgb(10, 37, 64);
                                  text-emphasis-color: rgb(10, 37, 64);
                                  text-shadow: rgba(10, 37, 64, 0.7) 0px 0px 0px;
                                  transform-origin: 50% 50%;
                                  user-select: none;
                                  visibility: hidden;
                                  width: 100%;
                                  -webkit-text-fill-color: rgb(10, 37, 64);
                                  -webkit-text-stroke-color: rgb(10, 37, 64);
                                "
                                xml:space="preserve"
                                aria-hidden="true"
                                data-acsb-hidden="true"
                              >
                                <path d="M1.5,0L0,1.5L6.5,8L0,14.5L1.5,16l8-8L1.5,0z"></path></svg></i
                          ></a>
                        </li>
                        <li style="animation-duration: 0.001s; block-size: auto; height: auto; inline-size: 100%; list-style-type: circle; margin-block-end: 15px; margin-bottom: 15px; perspective-origin: 50% 50%; pointer-events: none; transform-origin: 50% 50%; visibility: hidden; width: 100%">
                          <a
                            href="/company/impact"
                            data-acsb-clickable="true"
                            data-acsb-navigable="true"
                            data-acsb-now-navigable="false"
                            data-custom-button-processed="true"
                            tabindex="-1"
                            style="
                              animation-duration: 0.001s;
                              border-block-color: rgb(10, 37, 64);
                              border-color: rgb(10, 37, 64);
                              border-radius: 10px;
                              border-end-end-radius: 10px;
                              border-end-start-radius: 10px;
                              border-inline-color: rgb(10, 37, 64);
                              border-start-end-radius: 10px;
                              border-start-start-radius: 10px;
                              caret-color: rgb(10, 37, 64);
                              color: rgb(10, 37, 64);
                              column-rule-color: rgb(10, 37, 64);
                              cursor: pointer;
                              display: block;
                              font-size: 17px;
                              inline-size: 100%;
                              line-height: 25.5px;
                              list-style-type: circle;
                              margin-block: auto;
                              margin: auto;
                              margin-inline: auto;
                              outline-color: rgb(10, 37, 64);
                              padding-block: 10px;
                              padding: 10px 20px;
                              padding-inline: 20px;
                              perspective-origin: 50% 50%;
                              pointer-events: none;
                              position: relative;
                              text-decoration: none solid rgb(10, 37, 64);
                              text-emphasis-color: rgb(10, 37, 64);
                              text-shadow: rgba(10, 37, 64, 0.7) 0px 0px 0px;
                              transform-origin: 50% 50%;
                              visibility: hidden;
                              width: 100%;
                              -webkit-text-fill-color: rgb(10, 37, 64);
                              -webkit-text-stroke-color: rgb(10, 37, 64);
                            "
                          >
                            Our Impact
                            <i
                              class="icon icon-chevron-right"
                              aria-hidden="true"
                              role="presentation"
                              style="
                                animation-duration: 0.001s;
                                border-block-color: rgb(10, 37, 64);
                                border-color: rgb(10, 37, 64);
                                border-inline-color: rgb(10, 37, 64);
                                caret-color: rgb(10, 37, 64);
                                color: rgb(10, 37, 64);
                                column-rule-color: rgb(10, 37, 64);
                                cursor: pointer;
                                display: block;
                                font-size: 17px;
                                inline-size: 7px;
                                inset-block-start: 50%;
                                inset-inline-end: 30px;
                                line-height: 17px;
                                list-style-type: circle;
                                opacity: 0;
                                outline-color: rgb(10, 37, 64);
                                perspective-origin: 50% 50%;
                                pointer-events: none;
                                position: absolute;
                                right: 30px;
                                text-decoration: none solid rgb(10, 37, 64);
                                text-emphasis-color: rgb(10, 37, 64);
                                text-shadow: rgba(10, 37, 64, 0.7) 0px 0px 0px;
                                top: 50%;
                                transform-origin: 50% 50%;
                                user-select: none;
                                visibility: hidden;
                                width: 7px;
                                -webkit-text-fill-color: rgb(10, 37, 64);
                                -webkit-text-stroke-color: rgb(10, 37, 64);
                              "
                              ><!--?xml version="1.0" encoding="utf-8"?--><svg
                                version="1.1"
                                id="Layer_1"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                x="0px"
                                y="0px"
                                viewBox="0 0 9.5 16"
                                style="
                                  animation-duration: 0.001s;
                                  block-size: auto;
                                  border-block-color: rgb(10, 37, 64);
                                  border-color: rgb(10, 37, 64);
                                  border-inline-color: rgb(10, 37, 64);
                                  caret-color: rgb(10, 37, 64);
                                  color: rgb(10, 37, 64);
                                  column-rule-color: rgb(10, 37, 64);
                                  cursor: pointer;
                                  font-size: 17px;
                                  font-style: italic;
                                  height: auto;
                                  inline-size: 100%;
                                  line-height: 17px;
                                  list-style-type: circle;
                                  max-block-size: 100%;
                                  max-height: 100%;
                                  outline-color: rgb(10, 37, 64);
                                  overflow-clip-margin: content-box;
                                  overflow: hidden;
                                  perspective-origin: 50% 50%;
                                  pointer-events: none;
                                  text-decoration: none solid rgb(10, 37, 64);
                                  text-emphasis-color: rgb(10, 37, 64);
                                  text-shadow: rgba(10, 37, 64, 0.7) 0px 0px 0px;
                                  transform-origin: 50% 50%;
                                  user-select: none;
                                  visibility: hidden;
                                  width: 100%;
                                  -webkit-text-fill-color: rgb(10, 37, 64);
                                  -webkit-text-stroke-color: rgb(10, 37, 64);
                                "
                                xml:space="preserve"
                                aria-hidden="true"
                                data-acsb-hidden="true"
                              >
                                <path d="M1.5,0L0,1.5L6.5,8L0,14.5L1.5,16l8-8L1.5,0z"></path></svg></i
                          ></a>
                        </li>
                        <li style="animation-duration: 0.001s; block-size: auto; height: auto; inline-size: 100%; list-style-type: circle; margin-block-end: 15px; margin-bottom: 15px; perspective-origin: 50% 50%; pointer-events: none; transform-origin: 50% 50%; visibility: hidden; width: 100%">
                          <a
                            href="/company/careers"
                            data-acsb-clickable="true"
                            data-acsb-navigable="true"
                            data-acsb-now-navigable="false"
                            data-custom-button-processed="true"
                            tabindex="-1"
                            style="
                              animation-duration: 0.001s;
                              border-block-color: rgb(10, 37, 64);
                              border-color: rgb(10, 37, 64);
                              border-radius: 10px;
                              border-end-end-radius: 10px;
                              border-end-start-radius: 10px;
                              border-inline-color: rgb(10, 37, 64);
                              border-start-end-radius: 10px;
                              border-start-start-radius: 10px;
                              caret-color: rgb(10, 37, 64);
                              color: rgb(10, 37, 64);
                              column-rule-color: rgb(10, 37, 64);
                              cursor: pointer;
                              display: block;
                              font-size: 17px;
                              inline-size: 100%;
                              line-height: 25.5px;
                              list-style-type: circle;
                              margin-block: auto;
                              margin: auto;
                              margin-inline: auto;
                              outline-color: rgb(10, 37, 64);
                              padding-block: 10px;
                              padding: 10px 20px;
                              padding-inline: 20px;
                              perspective-origin: 50% 50%;
                              pointer-events: none;
                              position: relative;
                              text-decoration: none solid rgb(10, 37, 64);
                              text-emphasis-color: rgb(10, 37, 64);
                              text-shadow: rgba(10, 37, 64, 0.7) 0px 0px 0px;
                              transform-origin: 50% 50%;
                              visibility: hidden;
                              width: 100%;
                              -webkit-text-fill-color: rgb(10, 37, 64);
                              -webkit-text-stroke-color: rgb(10, 37, 64);
                            "
                          >
                            Careers
                            <i
                              class="icon icon-chevron-right"
                              aria-hidden="true"
                              role="presentation"
                              style="
                                animation-duration: 0.001s;
                                border-block-color: rgb(10, 37, 64);
                                border-color: rgb(10, 37, 64);
                                border-inline-color: rgb(10, 37, 64);
                                caret-color: rgb(10, 37, 64);
                                color: rgb(10, 37, 64);
                                column-rule-color: rgb(10, 37, 64);
                                cursor: pointer;
                                display: block;
                                font-size: 17px;
                                inline-size: 7px;
                                inset-block-start: 50%;
                                inset-inline-end: 30px;
                                line-height: 17px;
                                list-style-type: circle;
                                opacity: 0;
                                outline-color: rgb(10, 37, 64);
                                perspective-origin: 50% 50%;
                                pointer-events: none;
                                position: absolute;
                                right: 30px;
                                text-decoration: none solid rgb(10, 37, 64);
                                text-emphasis-color: rgb(10, 37, 64);
                                text-shadow: rgba(10, 37, 64, 0.7) 0px 0px 0px;
                                top: 50%;
                                transform-origin: 50% 50%;
                                user-select: none;
                                visibility: hidden;
                                width: 7px;
                                -webkit-text-fill-color: rgb(10, 37, 64);
                                -webkit-text-stroke-color: rgb(10, 37, 64);
                              "
                              ><!--?xml version="1.0" encoding="utf-8"?--><svg
                                version="1.1"
                                id="Layer_1"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                x="0px"
                                y="0px"
                                viewBox="0 0 9.5 16"
                                style="
                                  animation-duration: 0.001s;
                                  block-size: auto;
                                  border-block-color: rgb(10, 37, 64);
                                  border-color: rgb(10, 37, 64);
                                  border-inline-color: rgb(10, 37, 64);
                                  caret-color: rgb(10, 37, 64);
                                  color: rgb(10, 37, 64);
                                  column-rule-color: rgb(10, 37, 64);
                                  cursor: pointer;
                                  font-size: 17px;
                                  font-style: italic;
                                  height: auto;
                                  inline-size: 100%;
                                  line-height: 17px;
                                  list-style-type: circle;
                                  max-block-size: 100%;
                                  max-height: 100%;
                                  outline-color: rgb(10, 37, 64);
                                  overflow-clip-margin: content-box;
                                  overflow: hidden;
                                  perspective-origin: 50% 50%;
                                  pointer-events: none;
                                  text-decoration: none solid rgb(10, 37, 64);
                                  text-emphasis-color: rgb(10, 37, 64);
                                  text-shadow: rgba(10, 37, 64, 0.7) 0px 0px 0px;
                                  transform-origin: 50% 50%;
                                  user-select: none;
                                  visibility: hidden;
                                  width: 100%;
                                  -webkit-text-fill-color: rgb(10, 37, 64);
                                  -webkit-text-stroke-color: rgb(10, 37, 64);
                                "
                                xml:space="preserve"
                                aria-hidden="true"
                                data-acsb-hidden="true"
                              >
                                <path d="M1.5,0L0,1.5L6.5,8L0,14.5L1.5,16l8-8L1.5,0z"></path></svg></i
                          ></a>
                        </li>
                        <li style="animation-duration: 0.001s; block-size: auto; height: auto; inline-size: 100%; list-style-type: circle; margin-block-end: 15px; margin-bottom: 15px; perspective-origin: 50% 50%; pointer-events: none; transform-origin: 50% 50%; visibility: hidden; width: 100%">
                          <a
                            href="/company/vision"
                            data-acsb-clickable="true"
                            data-acsb-navigable="true"
                            data-acsb-now-navigable="false"
                            data-custom-button-processed="true"
                            tabindex="-1"
                            style="
                              animation-duration: 0.001s;
                              border-block-color: rgb(10, 37, 64);
                              border-color: rgb(10, 37, 64);
                              border-radius: 10px;
                              border-end-end-radius: 10px;
                              border-end-start-radius: 10px;
                              border-inline-color: rgb(10, 37, 64);
                              border-start-end-radius: 10px;
                              border-start-start-radius: 10px;
                              caret-color: rgb(10, 37, 64);
                              color: rgb(10, 37, 64);
                              column-rule-color: rgb(10, 37, 64);
                              cursor: pointer;
                              display: block;
                              font-size: 17px;
                              inline-size: 100%;
                              line-height: 25.5px;
                              list-style-type: circle;
                              margin-block: auto;
                              margin: auto;
                              margin-inline: auto;
                              outline-color: rgb(10, 37, 64);
                              padding-block: 10px;
                              padding: 10px 20px;
                              padding-inline: 20px;
                              perspective-origin: 50% 50%;
                              pointer-events: none;
                              position: relative;
                              text-decoration: none solid rgb(10, 37, 64);
                              text-emphasis-color: rgb(10, 37, 64);
                              text-shadow: rgba(10, 37, 64, 0.7) 0px 0px 0px;
                              transform-origin: 50% 50%;
                              visibility: hidden;
                              width: 100%;
                              -webkit-text-fill-color: rgb(10, 37, 64);
                              -webkit-text-stroke-color: rgb(10, 37, 64);
                            "
                          >
                            Our Vision
                            <i
                              class="icon icon-chevron-right"
                              aria-hidden="true"
                              role="presentation"
                              style="
                                animation-duration: 0.001s;
                                border-block-color: rgb(10, 37, 64);
                                border-color: rgb(10, 37, 64);
                                border-inline-color: rgb(10, 37, 64);
                                caret-color: rgb(10, 37, 64);
                                color: rgb(10, 37, 64);
                                column-rule-color: rgb(10, 37, 64);
                                cursor: pointer;
                                display: block;
                                font-size: 17px;
                                inline-size: 7px;
                                inset-block-start: 50%;
                                inset-inline-end: 30px;
                                line-height: 17px;
                                list-style-type: circle;
                                opacity: 0;
                                outline-color: rgb(10, 37, 64);
                                perspective-origin: 50% 50%;
                                pointer-events: none;
                                position: absolute;
                                right: 30px;
                                text-decoration: none solid rgb(10, 37, 64);
                                text-emphasis-color: rgb(10, 37, 64);
                                text-shadow: rgba(10, 37, 64, 0.7) 0px 0px 0px;
                                top: 50%;
                                transform-origin: 50% 50%;
                                user-select: none;
                                visibility: hidden;
                                width: 7px;
                                -webkit-text-fill-color: rgb(10, 37, 64);
                                -webkit-text-stroke-color: rgb(10, 37, 64);
                              "
                              ><!--?xml version="1.0" encoding="utf-8"?--><svg
                                version="1.1"
                                id="Layer_1"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                x="0px"
                                y="0px"
                                viewBox="0 0 9.5 16"
                                style="
                                  animation-duration: 0.001s;
                                  block-size: auto;
                                  border-block-color: rgb(10, 37, 64);
                                  border-color: rgb(10, 37, 64);
                                  border-inline-color: rgb(10, 37, 64);
                                  caret-color: rgb(10, 37, 64);
                                  color: rgb(10, 37, 64);
                                  column-rule-color: rgb(10, 37, 64);
                                  cursor: pointer;
                                  font-size: 17px;
                                  font-style: italic;
                                  height: auto;
                                  inline-size: 100%;
                                  line-height: 17px;
                                  list-style-type: circle;
                                  max-block-size: 100%;
                                  max-height: 100%;
                                  outline-color: rgb(10, 37, 64);
                                  overflow-clip-margin: content-box;
                                  overflow: hidden;
                                  perspective-origin: 50% 50%;
                                  pointer-events: none;
                                  text-decoration: none solid rgb(10, 37, 64);
                                  text-emphasis-color: rgb(10, 37, 64);
                                  text-shadow: rgba(10, 37, 64, 0.7) 0px 0px 0px;
                                  transform-origin: 50% 50%;
                                  user-select: none;
                                  visibility: hidden;
                                  width: 100%;
                                  -webkit-text-fill-color: rgb(10, 37, 64);
                                  -webkit-text-stroke-color: rgb(10, 37, 64);
                                "
                                xml:space="preserve"
                                aria-hidden="true"
                                data-acsb-hidden="true"
                              >
                                <path d="M1.5,0L0,1.5L6.5,8L0,14.5L1.5,16l8-8L1.5,0z"></path></svg></i
                          ></a>
                        </li>
                        <li style="animation-duration: 0.001s; block-size: auto; height: auto; inline-size: 100%; list-style-type: circle; margin-block-end: 15px; margin-bottom: 15px; perspective-origin: 50% 50%; pointer-events: none; transform-origin: 50% 50%; visibility: hidden; width: 100%">
                          <a
                            href="/company/accessculture"
                            data-acsb-clickable="true"
                            data-acsb-navigable="true"
                            data-acsb-now-navigable="false"
                            data-custom-button-processed="true"
                            tabindex="-1"
                            style="
                              animation-duration: 0.001s;
                              border-block-color: rgb(10, 37, 64);
                              border-color: rgb(10, 37, 64);
                              border-radius: 10px;
                              border-end-end-radius: 10px;
                              border-end-start-radius: 10px;
                              border-inline-color: rgb(10, 37, 64);
                              border-start-end-radius: 10px;
                              border-start-start-radius: 10px;
                              caret-color: rgb(10, 37, 64);
                              color: rgb(10, 37, 64);
                              column-rule-color: rgb(10, 37, 64);
                              cursor: pointer;
                              display: block;
                              font-size: 17px;
                              inline-size: 100%;
                              line-height: 25.5px;
                              list-style-type: circle;
                              margin-block: auto;
                              margin: auto;
                              margin-inline: auto;
                              outline-color: rgb(10, 37, 64);
                              padding-block: 10px;
                              padding: 10px 20px;
                              padding-inline: 20px;
                              perspective-origin: 50% 50%;
                              pointer-events: none;
                              position: relative;
                              text-decoration: none solid rgb(10, 37, 64);
                              text-emphasis-color: rgb(10, 37, 64);
                              text-shadow: rgba(10, 37, 64, 0.7) 0px 0px 0px;
                              transform-origin: 50% 50%;
                              visibility: hidden;
                              width: 100%;
                              -webkit-text-fill-color: rgb(10, 37, 64);
                              -webkit-text-stroke-color: rgb(10, 37, 64);
                            "
                          >
                            accessCulture
                            <i
                              class="icon icon-chevron-right"
                              aria-hidden="true"
                              role="presentation"
                              style="
                                animation-duration: 0.001s;
                                border-block-color: rgb(10, 37, 64);
                                border-color: rgb(10, 37, 64);
                                border-inline-color: rgb(10, 37, 64);
                                caret-color: rgb(10, 37, 64);
                                color: rgb(10, 37, 64);
                                column-rule-color: rgb(10, 37, 64);
                                cursor: pointer;
                                display: block;
                                font-size: 17px;
                                inline-size: 7px;
                                inset-block-start: 50%;
                                inset-inline-end: 30px;
                                line-height: 17px;
                                list-style-type: circle;
                                opacity: 0;
                                outline-color: rgb(10, 37, 64);
                                perspective-origin: 50% 50%;
                                pointer-events: none;
                                position: absolute;
                                right: 30px;
                                text-decoration: none solid rgb(10, 37, 64);
                                text-emphasis-color: rgb(10, 37, 64);
                                text-shadow: rgba(10, 37, 64, 0.7) 0px 0px 0px;
                                top: 50%;
                                transform-origin: 50% 50%;
                                user-select: none;
                                visibility: hidden;
                                width: 7px;
                                -webkit-text-fill-color: rgb(10, 37, 64);
                                -webkit-text-stroke-color: rgb(10, 37, 64);
                              "
                              ><!--?xml version="1.0" encoding="utf-8"?--><svg
                                version="1.1"
                                id="Layer_1"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                x="0px"
                                y="0px"
                                viewBox="0 0 9.5 16"
                                style="
                                  animation-duration: 0.001s;
                                  block-size: auto;
                                  border-block-color: rgb(10, 37, 64);
                                  border-color: rgb(10, 37, 64);
                                  border-inline-color: rgb(10, 37, 64);
                                  caret-color: rgb(10, 37, 64);
                                  color: rgb(10, 37, 64);
                                  column-rule-color: rgb(10, 37, 64);
                                  cursor: pointer;
                                  font-size: 17px;
                                  font-style: italic;
                                  height: auto;
                                  inline-size: 100%;
                                  line-height: 17px;
                                  list-style-type: circle;
                                  max-block-size: 100%;
                                  max-height: 100%;
                                  outline-color: rgb(10, 37, 64);
                                  overflow-clip-margin: content-box;
                                  overflow: hidden;
                                  perspective-origin: 50% 50%;
                                  pointer-events: none;
                                  text-decoration: none solid rgb(10, 37, 64);
                                  text-emphasis-color: rgb(10, 37, 64);
                                  text-shadow: rgba(10, 37, 64, 0.7) 0px 0px 0px;
                                  transform-origin: 50% 50%;
                                  user-select: none;
                                  visibility: hidden;
                                  width: 100%;
                                  -webkit-text-fill-color: rgb(10, 37, 64);
                                  -webkit-text-stroke-color: rgb(10, 37, 64);
                                "
                                xml:space="preserve"
                                aria-hidden="true"
                                data-acsb-hidden="true"
                              >
                                <path d="M1.5,0L0,1.5L6.5,8L0,14.5L1.5,16l8-8L1.5,0z"></path></svg></i
                          ></a>
                        </li>
                        <li style="animation-duration: 0.001s; block-size: auto; height: auto; inline-size: 100%; list-style-type: circle; margin-block-end: 15px; margin-bottom: 15px; perspective-origin: 50% 50%; pointer-events: none; transform-origin: 50% 50%; visibility: hidden; width: 100%">
                          <a
                            href="/glossary"
                            data-acsb-clickable="true"
                            data-acsb-navigable="true"
                            data-acsb-now-navigable="false"
                            data-custom-button-processed="true"
                            tabindex="-1"
                            style="
                              animation-duration: 0.001s;
                              border-block-color: rgb(10, 37, 64);
                              border-color: rgb(10, 37, 64);
                              border-radius: 10px;
                              border-end-end-radius: 10px;
                              border-end-start-radius: 10px;
                              border-inline-color: rgb(10, 37, 64);
                              border-start-end-radius: 10px;
                              border-start-start-radius: 10px;
                              caret-color: rgb(10, 37, 64);
                              color: rgb(10, 37, 64);
                              column-rule-color: rgb(10, 37, 64);
                              cursor: pointer;
                              display: block;
                              font-size: 17px;
                              inline-size: 100%;
                              line-height: 25.5px;
                              list-style-type: circle;
                              margin-block: auto;
                              margin: auto;
                              margin-inline: auto;
                              outline-color: rgb(10, 37, 64);
                              padding-block: 10px;
                              padding: 10px 20px;
                              padding-inline: 20px;
                              perspective-origin: 50% 50%;
                              pointer-events: none;
                              position: relative;
                              text-decoration: none solid rgb(10, 37, 64);
                              text-emphasis-color: rgb(10, 37, 64);
                              text-shadow: rgba(10, 37, 64, 0.7) 0px 0px 0px;
                              transform-origin: 50% 50%;
                              visibility: hidden;
                              width: 100%;
                              -webkit-text-fill-color: rgb(10, 37, 64);
                              -webkit-text-stroke-color: rgb(10, 37, 64);
                            "
                          >
                            Glossary
                            <i
                              class="icon icon-chevron-right"
                              aria-hidden="true"
                              role="presentation"
                              data-acsb-hidden="true"
                              style="
                                animation-duration: 0.001s;
                                border-block-color: rgb(10, 37, 64);
                                border-color: rgb(10, 37, 64);
                                border-inline-color: rgb(10, 37, 64);
                                caret-color: rgb(10, 37, 64);
                                color: rgb(10, 37, 64);
                                column-rule-color: rgb(10, 37, 64);
                                cursor: pointer;
                                display: block;
                                font-size: 17px;
                                inline-size: 7px;
                                inset-block-start: 50%;
                                inset-inline-end: 30px;
                                line-height: 17px;
                                list-style-type: circle;
                                opacity: 0;
                                outline-color: rgb(10, 37, 64);
                                perspective-origin: 50% 50%;
                                pointer-events: none;
                                position: absolute;
                                right: 30px;
                                text-decoration: none solid rgb(10, 37, 64);
                                text-emphasis-color: rgb(10, 37, 64);
                                text-shadow: rgba(10, 37, 64, 0.7) 0px 0px 0px;
                                top: 50%;
                                transform-origin: 50% 50%;
                                user-select: none;
                                visibility: hidden;
                                width: 7px;
                                -webkit-text-fill-color: rgb(10, 37, 64);
                                -webkit-text-stroke-color: rgb(10, 37, 64);
                              "
                              ><!--?xml version="1.0" encoding="utf-8"?--><svg
                                version="1.1"
                                id="Layer_1"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                x="0px"
                                y="0px"
                                viewBox="0 0 9.5 16"
                                style="
                                  animation-duration: 0.001s;
                                  block-size: auto;
                                  border-block-color: rgb(10, 37, 64);
                                  border-color: rgb(10, 37, 64);
                                  border-inline-color: rgb(10, 37, 64);
                                  caret-color: rgb(10, 37, 64);
                                  color: rgb(10, 37, 64);
                                  column-rule-color: rgb(10, 37, 64);
                                  cursor: pointer;
                                  font-size: 17px;
                                  font-style: italic;
                                  height: auto;
                                  inline-size: 100%;
                                  line-height: 17px;
                                  list-style-type: circle;
                                  max-block-size: 100%;
                                  max-height: 100%;
                                  outline-color: rgb(10, 37, 64);
                                  overflow-clip-margin: content-box;
                                  overflow: hidden;
                                  perspective-origin: 50% 50%;
                                  pointer-events: none;
                                  text-decoration: none solid rgb(10, 37, 64);
                                  text-emphasis-color: rgb(10, 37, 64);
                                  text-shadow: rgba(10, 37, 64, 0.7) 0px 0px 0px;
                                  transform-origin: 50% 50%;
                                  user-select: none;
                                  visibility: hidden;
                                  width: 100%;
                                  -webkit-text-fill-color: rgb(10, 37, 64);
                                  -webkit-text-stroke-color: rgb(10, 37, 64);
                                "
                                xml:space="preserve"
                              >
                                <path d="M1.5,0L0,1.5L6.5,8L0,14.5L1.5,16l8-8L1.5,0z"></path></svg></i
                          ></a>
                        </li>
                        <li style="animation-duration: 0.001s; block-size: auto; height: auto; inline-size: 100%; list-style-type: circle; perspective-origin: 50% 50%; pointer-events: none; transform-origin: 50% 50%; visibility: hidden; width: 100%">
                          <a
                            href="/blog"
                            data-acsb-clickable="true"
                            data-acsb-navigable="true"
                            data-acsb-now-navigable="false"
                            data-custom-button-processed="true"
                            tabindex="-1"
                            style="
                              animation-duration: 0.001s;
                              border-block-color: rgb(10, 37, 64);
                              border-color: rgb(10, 37, 64);
                              border-radius: 10px;
                              border-end-end-radius: 10px;
                              border-end-start-radius: 10px;
                              border-inline-color: rgb(10, 37, 64);
                              border-start-end-radius: 10px;
                              border-start-start-radius: 10px;
                              caret-color: rgb(10, 37, 64);
                              color: rgb(10, 37, 64);
                              column-rule-color: rgb(10, 37, 64);
                              cursor: pointer;
                              display: block;
                              font-size: 17px;
                              inline-size: 100%;
                              line-height: 25.5px;
                              list-style-type: circle;
                              margin-block: auto;
                              margin: auto;
                              margin-inline: auto;
                              outline-color: rgb(10, 37, 64);
                              padding-block: 10px;
                              padding: 10px 20px;
                              padding-inline: 20px;
                              perspective-origin: 50% 50%;
                              pointer-events: none;
                              position: relative;
                              text-decoration: none solid rgb(10, 37, 64);
                              text-emphasis-color: rgb(10, 37, 64);
                              text-shadow: rgba(10, 37, 64, 0.7) 0px 0px 0px;
                              transform-origin: 50% 50%;
                              visibility: hidden;
                              width: 100%;
                              -webkit-text-fill-color: rgb(10, 37, 64);
                              -webkit-text-stroke-color: rgb(10, 37, 64);
                            "
                          >
                            Blog
                            <i
                              class="icon icon-chevron-right"
                              aria-hidden="true"
                              role="presentation"
                              data-acsb-hidden="true"
                              style="
                                animation-duration: 0.001s;
                                border-block-color: rgb(10, 37, 64);
                                border-color: rgb(10, 37, 64);
                                border-inline-color: rgb(10, 37, 64);
                                caret-color: rgb(10, 37, 64);
                                color: rgb(10, 37, 64);
                                column-rule-color: rgb(10, 37, 64);
                                cursor: pointer;
                                display: block;
                                font-size: 17px;
                                inline-size: 7px;
                                inset-block-start: 50%;
                                inset-inline-end: 30px;
                                line-height: 17px;
                                list-style-type: circle;
                                opacity: 0;
                                outline-color: rgb(10, 37, 64);
                                perspective-origin: 50% 50%;
                                pointer-events: none;
                                position: absolute;
                                right: 30px;
                                text-decoration: none solid rgb(10, 37, 64);
                                text-emphasis-color: rgb(10, 37, 64);
                                text-shadow: rgba(10, 37, 64, 0.7) 0px 0px 0px;
                                top: 50%;
                                transform-origin: 50% 50%;
                                user-select: none;
                                visibility: hidden;
                                width: 7px;
                                -webkit-text-fill-color: rgb(10, 37, 64);
                                -webkit-text-stroke-color: rgb(10, 37, 64);
                              "
                              ><!--?xml version="1.0" encoding="utf-8"?--><svg
                                version="1.1"
                                id="Layer_1"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                x="0px"
                                y="0px"
                                viewBox="0 0 9.5 16"
                                style="
                                  animation-duration: 0.001s;
                                  block-size: auto;
                                  border-block-color: rgb(10, 37, 64);
                                  border-color: rgb(10, 37, 64);
                                  border-inline-color: rgb(10, 37, 64);
                                  caret-color: rgb(10, 37, 64);
                                  color: rgb(10, 37, 64);
                                  column-rule-color: rgb(10, 37, 64);
                                  cursor: pointer;
                                  font-size: 17px;
                                  font-style: italic;
                                  height: auto;
                                  inline-size: 100%;
                                  line-height: 17px;
                                  list-style-type: circle;
                                  max-block-size: 100%;
                                  max-height: 100%;
                                  outline-color: rgb(10, 37, 64);
                                  overflow-clip-margin: content-box;
                                  overflow: hidden;
                                  perspective-origin: 50% 50%;
                                  pointer-events: none;
                                  text-decoration: none solid rgb(10, 37, 64);
                                  text-emphasis-color: rgb(10, 37, 64);
                                  text-shadow: rgba(10, 37, 64, 0.7) 0px 0px 0px;
                                  transform-origin: 50% 50%;
                                  user-select: none;
                                  visibility: hidden;
                                  width: 100%;
                                  -webkit-text-fill-color: rgb(10, 37, 64);
                                  -webkit-text-stroke-color: rgb(10, 37, 64);
                                "
                                xml:space="preserve"
                              >
                                <path d="M1.5,0L0,1.5L6.5,8L0,14.5L1.5,16l8-8L1.5,0z"></path></svg></i
                          ></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    class="part part-card"
                    data-acsb-overflower="true"
                    style="
                      animation-duration: 0.001s;
                      background-color: rgb(248, 249, 252);
                      block-size: auto;
                      border-bottom-right-radius: 10px;
                      border-end-end-radius: 10px;
                      border-start-end-radius: 10px;
                      border-top-right-radius: 10px;
                      height: auto;
                      inline-size: 380px;
                      min-inline-size: 380px;
                      min-width: 380px;
                      overflow: hidden;
                      padding-block: 30px;
                      padding: 30px;
                      padding-inline: 30px;
                      perspective-origin: 50% 50%;
                      pointer-events: none;
                      transform-origin: 50% 50%;
                      visibility: hidden;
                      width: 380px;
                    "
                  >
                    <a
                      class="card"
                      href="/unstoppables"
                      data-acsb-clickable="true"
                      data-acsb-navigable="true"
                      data-acsb-now-navigable="false"
                      data-custom-button-processed="true"
                      tabindex="-1"
                      style="animation-duration: 0.001s; block-size: 100%; cursor: pointer; height: 100%; perspective-origin: 50% 50%; pointer-events: none; transform-origin: 50% 50%; visibility: hidden"
                      ><div
                        class="image"
                        data-acsb-overflower="true"
                        style="
                          animation-duration: 0.001s;
                          block-size: 200px;
                          border-block-color: rgb(19, 110, 248);
                          border-color: rgb(19, 110, 248);
                          border-radius: 10px;
                          border-end-end-radius: 10px;
                          border-end-start-radius: 10px;
                          border-inline-color: rgb(19, 110, 248);
                          border-start-end-radius: 10px;
                          border-start-start-radius: 10px;
                          caret-color: rgb(19, 110, 248);
                          color: rgb(19, 110, 248);
                          column-rule-color: rgb(19, 110, 248);
                          cursor: pointer;
                          height: 200px;
                          inline-size: auto;
                          outline-color: rgb(19, 110, 248);
                          overflow: hidden;
                          perspective-origin: 50% 50%;
                          pointer-events: none;
                          text-decoration: none solid rgb(19, 110, 248);
                          text-emphasis-color: rgb(19, 110, 248);
                          transform-origin: 50% 50%;
                          visibility: hidden;
                          width: auto;
                          -webkit-text-fill-color: rgb(19, 110, 248);
                          -webkit-text-stroke-color: rgb(19, 110, 248);
                        "
                      >
                        <img
                          class="object-cover"
                          role="presentation"
                          alt="Meet our Unstoppable disability partner team"
                          style="
                            animation-duration: 0.001s;
                            block-size: 100%;
                            border-block-color: rgb(19, 110, 248);
                            border-color: rgb(19, 110, 248);
                            border-inline-color: rgb(19, 110, 248);
                            caret-color: rgb(19, 110, 248);
                            color: rgb(19, 110, 248);
                            column-rule-color: rgb(19, 110, 248);
                            cursor: pointer;
                            display: block;
                            height: 100%;
                            inline-size: 100%;
                            max-inline-size: none;
                            max-width: none;
                            object-fit: cover;
                            outline-color: rgb(19, 110, 248);
                            perspective-origin: 50% 50%;
                            pointer-events: none;
                            text-decoration: none solid rgb(19, 110, 248);
                            text-emphasis-color: rgb(19, 110, 248);
                            transform-origin: 50% 50%;
                            visibility: hidden;
                            width: 100%;
                            -webkit-text-fill-color: rgb(19, 110, 248);
                            -webkit-text-stroke-color: rgb(19, 110, 248);
                          "
                        />
                      </div>
                      <div
                        class="content"
                        style="
                          animation-duration: 0.001s;
                          block-size: auto;
                          border-block-color: rgb(19, 110, 248);
                          border-color: rgb(19, 110, 248);
                          border-inline-color: rgb(19, 110, 248);
                          caret-color: rgb(19, 110, 248);
                          color: rgb(19, 110, 248);
                          column-rule-color: rgb(19, 110, 248);
                          cursor: pointer;
                          height: auto;
                          inline-size: auto;
                          margin-block-start: 30px;
                          margin-top: 30px;
                          outline-color: rgb(19, 110, 248);
                          perspective-origin: 50% 50%;
                          pointer-events: none;
                          text-decoration: none solid rgb(19, 110, 248);
                          text-emphasis-color: rgb(19, 110, 248);
                          transform-origin: 50% 50%;
                          visibility: hidden;
                          width: auto;
                          -webkit-text-fill-color: rgb(19, 110, 248);
                          -webkit-text-stroke-color: rgb(19, 110, 248);
                        "
                      >
                        <span
                          class="title title-small2"
                          style="
                            animation-duration: 0.001s;
                            border-block-color: rgb(10, 37, 64);
                            border-color: rgb(10, 37, 64);
                            border-inline-color: rgb(10, 37, 64);
                            caret-color: rgb(10, 37, 64);
                            color: rgb(10, 37, 64);
                            column-rule-color: rgb(10, 37, 64);
                            cursor: pointer;
                            display: block;
                            font-size: 19px;
                            font-weight: 700;
                            inline-size: 100%;
                            letter-spacing: -0.5px;
                            line-height: 24.7px;
                            margin-block-end: 20px;
                            margin-bottom: 20px;
                            outline-color: rgb(10, 37, 64);
                            perspective-origin: 50% 50%;
                            pointer-events: none;
                            position: relative;
                            text-decoration: none solid rgb(10, 37, 64);
                            text-emphasis-color: rgb(10, 37, 64);
                            text-rendering: geometricprecision;
                            transform-origin: 50% 50%;
                            visibility: hidden;
                            width: 100%;
                            -webkit-text-fill-color: rgb(10, 37, 64);
                            -webkit-text-stroke-color: rgb(10, 37, 64);
                          "
                          >Meet our Unstoppable disability partner team</span
                        >
                        <p class="text text-medium" style="animation-duration: 0.001s; block-size: auto; cursor: pointer; height: auto; inline-size: auto; margin-block: 0px; margin-bottom: 0px; margin-top: 0px; perspective-origin: 50% 50%; pointer-events: none; transform-origin: 50% 50%; visibility: hidden; width: auto">
                          accessiBe’s Unstoppable team raises awareness and promotes inclusion!
                        </p>
                        <span
                          class="text-button text-button-nocolor text-button-small"
                          style="
                            align-items: center;
                            animation-duration: 0.001s;
                            border-block-color: rgb(10, 37, 64);
                            border-color: rgb(10, 37, 64);
                            border-inline-color: rgb(10, 37, 64);
                            caret-color: rgb(10, 37, 64);
                            color: rgb(10, 37, 64);
                            column-rule-color: rgb(10, 37, 64);
                            cursor: pointer;
                            display: block;
                            font-size: 14px;
                            font-weight: 600;
                            inline-size: 100%;
                            justify-content: center;
                            line-height: 14px;
                            margin-block-start: 25px;
                            margin-top: 25px;
                            outline-color: rgb(10, 37, 64);
                            perspective-origin: 50% 50%;
                            pointer-events: none;
                            text-decoration: none solid rgb(10, 37, 64);
                            text-emphasis-color: rgb(10, 37, 64);
                            text-transform: uppercase;
                            transform-origin: 50% 50%;
                            user-select: none;
                            visibility: hidden;
                            width: 100%;
                            -webkit-text-fill-color: rgb(10, 37, 64);
                            -webkit-text-stroke-color: rgb(10, 37, 64);
                          "
                        >
                          Meet the Unstoppables
                          <i
                            class="icon icon-chevron-right"
                            aria-hidden="true"
                            role="presentation"
                            style="
                              animation-duration: 0.001s;
                              border-block-color: rgb(10, 37, 64);
                              border-color: rgb(10, 37, 64);
                              border-inline-color: rgb(10, 37, 64);
                              caret-color: rgb(10, 37, 64);
                              color: rgb(10, 37, 64);
                              column-rule-color: rgb(10, 37, 64);
                              cursor: pointer;
                              display: inline-block;
                              font-size: 14px;
                              font-weight: 600;
                              inline-size: 100%;
                              line-height: 14px;
                              margin-inline-start: 12px;
                              margin-left: 12px;
                              max-inline-size: 5px;
                              max-width: 5px;
                              min-inline-size: 5px;
                              min-width: 5px;
                              outline-color: rgb(10, 37, 64);
                              perspective-origin: 50% 50%;
                              pointer-events: none;
                              text-decoration: none solid rgb(10, 37, 64);
                              text-emphasis-color: rgb(10, 37, 64);
                              text-transform: uppercase;
                              transform-origin: 50% 50%;
                              user-select: none;
                              visibility: hidden;
                              width: 100%;
                              -webkit-text-fill-color: rgb(10, 37, 64);
                              -webkit-text-stroke-color: rgb(10, 37, 64);
                            "
                            ><!--?xml version="1.0" encoding="utf-8"?--><svg
                              version="1.1"
                              id="Layer_1"
                              xmlns="http://www.w3.org/2000/svg"
                              xmlns:xlink="http://www.w3.org/1999/xlink"
                              x="0px"
                              y="0px"
                              viewBox="0 0 9.5 16"
                              style="
                                animation-duration: 0.001s;
                                block-size: auto;
                                border-block-color: rgb(10, 37, 64);
                                border-color: rgb(10, 37, 64);
                                border-inline-color: rgb(10, 37, 64);
                                caret-color: rgb(10, 37, 64);
                                color: rgb(10, 37, 64);
                                column-rule-color: rgb(10, 37, 64);
                                cursor: pointer;
                                font-size: 14px;
                                font-style: italic;
                                font-weight: 600;
                                height: auto;
                                inline-size: 100%;
                                line-height: 14px;
                                max-block-size: 100%;
                                max-height: 100%;
                                outline-color: rgb(10, 37, 64);
                                overflow-clip-margin: content-box;
                                overflow: hidden;
                                perspective-origin: 50% 50%;
                                pointer-events: none;
                                text-decoration: none solid rgb(10, 37, 64);
                                text-emphasis-color: rgb(10, 37, 64);
                                text-transform: uppercase;
                                transform-origin: 50% 50%;
                                user-select: none;
                                visibility: hidden;
                                width: 100%;
                                -webkit-text-fill-color: rgb(10, 37, 64);
                                -webkit-text-stroke-color: rgb(10, 37, 64);
                              "
                              xml:space="preserve"
                              aria-hidden="true"
                              data-acsb-hidden="true"
                            >
                              <path d="M1.5,0L0,1.5L6.5,8L0,14.5L1.5,16l8-8L1.5,0z"></path></svg></i
                        ></span></div
                    ></a>
                  </div>
                </div>
              </div>
            </li>
            <li
              class="menu-partners menu-has-dropdown a11y-dd-container"
              data-acsb-menu="li"
              data-acsb-menu-root="true"
              data-acsb-dropdown-container="true"
              style="animation-duration: 0.001s; block-size: 65px; display: inline-block; height: 65px; inline-size: 120.391px; perspective-origin: 60.1953px 32.5px; transform-origin: 60.1953px 32.5px; width: 120.391px"
            >
              <a
                class="item"
                href="/partners"
                data-acsb-clickable="true"
                data-acsb-navigable="true"
                data-acsb-now-navigable="true"
                data-custom-button-processed="true"
                data-acsb-menu="a"
                data-acsb-menu-root-link="true"
                aria-haspopup="true"
                aria-expanded="false"
                style="
                  align-items: center;
                  animation-duration: 0.001s;
                  block-size: 65px;
                  border-block-color: rgb(10, 37, 64);
                  border-color: rgb(10, 37, 64);
                  border-inline-color: rgb(10, 37, 64);
                  inset: 0px;
                  caret-color: rgb(10, 37, 64);
                  color: rgb(10, 37, 64);
                  column-rule-color: rgb(10, 37, 64);
                  cursor: pointer;
                  display: inline-flex;
                  font-size: 14px;
                  font-weight: 600;
                  height: 65px;
                  inline-size: 105.391px;
                  inset-block: 0px;
                  inset-inline: 0px;
                  justify-content: space-between;
                  line-height: 21px;
                  margin-inline-end: 15px;
                  margin-right: 15px;
                  outline-color: rgb(10, 37, 64);
                  padding-inline: 10px;
                  padding-left: 10px;
                  padding-right: 10px;
                  perspective-origin: 52.6953px 32.5px;
                  position: relative;
                  text-decoration: none solid rgb(10, 37, 64);
                  text-emphasis-color: rgb(10, 37, 64);
                  text-transform: uppercase;
                  transform-origin: 52.6953px 32.5px;
                  width: 105.391px;
                  -webkit-text-fill-color: rgb(10, 37, 64);
                  -webkit-text-stroke-color: rgb(10, 37, 64);
                "
                data-id="6"
              >
                Partners
                <i
                  class="icon icon-chevron-down"
                  role="presentation"
                  style="
                    animation-duration: 0.001s;
                    block-size: 7px;
                    border-block-color: rgb(10, 37, 64);
                    border-color: rgb(10, 37, 64);
                    border-inline-color: rgb(10, 37, 64);
                    caret-color: rgb(10, 37, 64);
                    color: rgb(10, 37, 64);
                    column-rule-color: rgb(10, 37, 64);
                    cursor: pointer;
                    display: block;
                    font-size: 14px;
                    font-weight: 600;
                    height: 7px;
                    inline-size: 7px;
                    line-height: 14px;
                    margin-block-start: -1px;
                    margin-inline-start: 7px;
                    margin-left: 7px;
                    margin-top: -1px;
                    min-block-size: auto;
                    min-height: auto;
                    min-inline-size: auto;
                    min-width: auto;
                    outline-color: rgb(10, 37, 64);
                    perspective-origin: 3.5px 3.5px;
                    text-decoration: none solid rgb(10, 37, 64);
                    text-emphasis-color: rgb(10, 37, 64);
                    text-transform: uppercase;
                    transform-origin: 3.5px 3.5px;
                    user-select: none;
                    width: 7px;
                    -webkit-text-fill-color: rgb(10, 37, 64);
                    -webkit-text-stroke-color: rgb(10, 37, 64);
                  "
                  ><svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    aria-hidden="true"
                    data-acsb-hidden="true"
                    style="
                      animation-duration: 0.001s;
                      block-size: 7px;
                      border-block-color: rgb(10, 37, 64);
                      border-color: rgb(10, 37, 64);
                      border-inline-color: rgb(10, 37, 64);
                      caret-color: rgb(10, 37, 64);
                      color: rgb(10, 37, 64);
                      column-rule-color: rgb(10, 37, 64);
                      cursor: pointer;
                      font-size: 14px;
                      font-style: italic;
                      font-weight: 600;
                      height: 7px;
                      inline-size: 7px;
                      line-height: 14px;
                      max-block-size: 100%;
                      max-height: 100%;
                      outline-color: rgb(10, 37, 64);
                      overflow-clip-margin: content-box;
                      overflow: hidden;
                      perspective-origin: 3.5px 3.5px;
                      text-decoration: none solid rgb(10, 37, 64);
                      text-emphasis-color: rgb(10, 37, 64);
                      text-transform: uppercase;
                      transform-origin: 3.5px 3.5px;
                      user-select: none;
                      width: 7px;
                      -webkit-text-fill-color: rgb(10, 37, 64);
                      -webkit-text-stroke-color: rgb(10, 37, 64);
                    "
                  >
                    <path d="M16 5.5l-1.5-1.5-6.5 6.5-6.5-6.5-1.5 1.5 8 8 8-8z"></path></svg></i
              ></a>
              <div
                class="dropdown acsb-hidden"
                role="region"
                aria-hidden="true"
                aria-label="Sub menu"
                data-acsb-hidden="true"
                data-acsb-dropdown="a6ay0dahua6j"
                style="
                  animation-duration: 0.001s;
                  background-color: rgb(255, 255, 255);
                  border-radius: 10px;
                  border-end-end-radius: 10px;
                  border-end-start-radius: 10px;
                  border-start-end-radius: 10px;
                  border-start-start-radius: 10px;
                  box-shadow: rgba(60, 80, 170, 0.2) 0px 3px 10px 0px;
                  display: none;
                  inline-size: 800px;
                  inset-block-start: 65px;
                  inset-inline-start: 0px;
                  left: 0px;
                  opacity: 0;
                  overflow: hidden;
                  perspective-origin: 50% 50%;
                  pointer-events: none;
                  position: absolute;
                  top: 65px;
                  transform-origin: 0% 0%;
                  visibility: hidden;
                  width: 800px;
                  z-index: 999;
                "
                data-id="7"
              >
                <div
                  class="flex flex-vertical-stretch flex-nowrap"
                  data-acsb-possible-star="true"
                  style="align-items: stretch; animation-duration: 0.001s; block-size: auto; display: flex; height: auto; inline-size: 100%; justify-content: space-between; perspective-origin: 50% 50%; pointer-events: none; transform-origin: 50% 50%; visibility: hidden; width: 100%"
                >
                  <div
                    class="part part-menu flex flex-nowrap flex-vertical-start"
                    style="align-items: flex-start; animation-duration: 0.001s; block-size: auto; display: flex; height: auto; inline-size: 100%; justify-content: space-between; overflow: hidden; perspective-origin: 50% 50%; pointer-events: none; transform-origin: 50% 50%; visibility: hidden; width: 100%"
                  >
                    <div class="part-category" style="animation-duration: 0.001s; block-size: auto; height: auto; inline-size: auto; padding-block: 30px; padding: 30px; padding-inline: 30px; perspective-origin: 50% 50%; pointer-events: none; transform-origin: 50% 50%; visibility: hidden; width: auto">
                      <ul
                        class="flex"
                        data-acsb-menu="ul"
                        role="region"
                        aria-label="Submenu"
                        style="align-items: center; animation-duration: 0.001s; block-size: auto; display: flex; flex-wrap: wrap; height: auto; inline-size: 100%; justify-content: space-between; list-style-type: circle; perspective-origin: 50% 50%; pointer-events: none; transform-origin: 50% 50%; visibility: hidden; width: 100%"
                      >
                        <li style="animation-duration: 0.001s; block-size: auto; height: auto; inline-size: 100%; list-style-type: circle; margin-block-end: 15px; margin-bottom: 15px; perspective-origin: 50% 50%; pointer-events: none; transform-origin: 50% 50%; visibility: hidden; width: 100%">
                          <a
                            href="/partners"
                            tabindex="-1"
                            data-acsb-clickable="true"
                            data-acsb-navigable="true"
                            data-acsb-now-navigable="false"
                            data-custom-button-processed="true"
                            style="
                              animation-duration: 0.001s;
                              border-block-color: rgb(10, 37, 64);
                              border-color: rgb(10, 37, 64);
                              border-radius: 10px;
                              border-end-end-radius: 10px;
                              border-end-start-radius: 10px;
                              border-inline-color: rgb(10, 37, 64);
                              border-start-end-radius: 10px;
                              border-start-start-radius: 10px;
                              caret-color: rgb(10, 37, 64);
                              color: rgb(10, 37, 64);
                              column-rule-color: rgb(10, 37, 64);
                              cursor: pointer;
                              display: block;
                              font-size: 17px;
                              inline-size: 100%;
                              line-height: 25.5px;
                              list-style-type: circle;
                              margin-block: auto;
                              margin: auto;
                              margin-inline: auto;
                              outline-color: rgb(10, 37, 64);
                              padding-block: 10px;
                              padding: 10px 20px;
                              padding-inline: 20px;
                              perspective-origin: 50% 50%;
                              pointer-events: none;
                              position: relative;
                              text-decoration: none solid rgb(10, 37, 64);
                              text-emphasis-color: rgb(10, 37, 64);
                              text-shadow: rgba(10, 37, 64, 0.7) 0px 0px 0px;
                              transform-origin: 50% 50%;
                              visibility: hidden;
                              width: 100%;
                              -webkit-text-fill-color: rgb(10, 37, 64);
                              -webkit-text-stroke-color: rgb(10, 37, 64);
                            "
                          >
                            Agency Partner Program
                            <i
                              class="icon icon-chevron-right"
                              aria-hidden="true"
                              role="presentation"
                              style="
                                animation-duration: 0.001s;
                                border-block-color: rgb(10, 37, 64);
                                border-color: rgb(10, 37, 64);
                                border-inline-color: rgb(10, 37, 64);
                                caret-color: rgb(10, 37, 64);
                                color: rgb(10, 37, 64);
                                column-rule-color: rgb(10, 37, 64);
                                cursor: pointer;
                                display: block;
                                font-size: 17px;
                                inline-size: 7px;
                                inset-block-start: 50%;
                                inset-inline-end: 30px;
                                line-height: 17px;
                                list-style-type: circle;
                                opacity: 0;
                                outline-color: rgb(10, 37, 64);
                                perspective-origin: 50% 50%;
                                pointer-events: none;
                                position: absolute;
                                right: 30px;
                                text-decoration: none solid rgb(10, 37, 64);
                                text-emphasis-color: rgb(10, 37, 64);
                                text-shadow: rgba(10, 37, 64, 0.7) 0px 0px 0px;
                                top: 50%;
                                transform-origin: 50% 50%;
                                user-select: none;
                                visibility: hidden;
                                width: 7px;
                                -webkit-text-fill-color: rgb(10, 37, 64);
                                -webkit-text-stroke-color: rgb(10, 37, 64);
                              "
                              ><!--?xml version="1.0" encoding="utf-8"?--><svg
                                version="1.1"
                                id="Layer_1"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                x="0px"
                                y="0px"
                                viewBox="0 0 9.5 16"
                                style="
                                  animation-duration: 0.001s;
                                  block-size: auto;
                                  border-block-color: rgb(10, 37, 64);
                                  border-color: rgb(10, 37, 64);
                                  border-inline-color: rgb(10, 37, 64);
                                  caret-color: rgb(10, 37, 64);
                                  color: rgb(10, 37, 64);
                                  column-rule-color: rgb(10, 37, 64);
                                  cursor: pointer;
                                  font-size: 17px;
                                  font-style: italic;
                                  height: auto;
                                  inline-size: 100%;
                                  line-height: 17px;
                                  list-style-type: circle;
                                  max-block-size: 100%;
                                  max-height: 100%;
                                  outline-color: rgb(10, 37, 64);
                                  overflow-clip-margin: content-box;
                                  overflow: hidden;
                                  perspective-origin: 50% 50%;
                                  pointer-events: none;
                                  text-decoration: none solid rgb(10, 37, 64);
                                  text-emphasis-color: rgb(10, 37, 64);
                                  text-shadow: rgba(10, 37, 64, 0.7) 0px 0px 0px;
                                  transform-origin: 50% 50%;
                                  user-select: none;
                                  visibility: hidden;
                                  width: 100%;
                                  -webkit-text-fill-color: rgb(10, 37, 64);
                                  -webkit-text-stroke-color: rgb(10, 37, 64);
                                "
                                xml:space="preserve"
                              >
                                <path d="M1.5,0L0,1.5L6.5,8L0,14.5L1.5,16l8-8L1.5,0z"></path></svg></i
                          ></a>
                        </li>
                        <li style="animation-duration: 0.001s; block-size: auto; height: auto; inline-size: 100%; list-style-type: circle; margin-block-end: 15px; margin-bottom: 15px; perspective-origin: 50% 50%; pointer-events: none; transform-origin: 50% 50%; visibility: hidden; width: 100%">
                          <a
                            href="/partners/strategic"
                            tabindex="-1"
                            data-acsb-clickable="true"
                            data-acsb-navigable="true"
                            data-acsb-now-navigable="false"
                            data-custom-button-processed="true"
                            style="
                              animation-duration: 0.001s;
                              border-block-color: rgb(10, 37, 64);
                              border-color: rgb(10, 37, 64);
                              border-radius: 10px;
                              border-end-end-radius: 10px;
                              border-end-start-radius: 10px;
                              border-inline-color: rgb(10, 37, 64);
                              border-start-end-radius: 10px;
                              border-start-start-radius: 10px;
                              caret-color: rgb(10, 37, 64);
                              color: rgb(10, 37, 64);
                              column-rule-color: rgb(10, 37, 64);
                              cursor: pointer;
                              display: block;
                              font-size: 17px;
                              inline-size: 100%;
                              line-height: 25.5px;
                              list-style-type: circle;
                              margin-block: auto;
                              margin: auto;
                              margin-inline: auto;
                              outline-color: rgb(10, 37, 64);
                              padding-block: 10px;
                              padding: 10px 20px;
                              padding-inline: 20px;
                              perspective-origin: 50% 50%;
                              pointer-events: none;
                              position: relative;
                              text-decoration: none solid rgb(10, 37, 64);
                              text-emphasis-color: rgb(10, 37, 64);
                              text-shadow: rgba(10, 37, 64, 0.7) 0px 0px 0px;
                              transform-origin: 50% 50%;
                              visibility: hidden;
                              width: 100%;
                              -webkit-text-fill-color: rgb(10, 37, 64);
                              -webkit-text-stroke-color: rgb(10, 37, 64);
                            "
                          >
                            Strategic Partnerships
                            <i
                              class="icon icon-chevron-right"
                              aria-hidden="true"
                              role="presentation"
                              style="
                                animation-duration: 0.001s;
                                border-block-color: rgb(10, 37, 64);
                                border-color: rgb(10, 37, 64);
                                border-inline-color: rgb(10, 37, 64);
                                caret-color: rgb(10, 37, 64);
                                color: rgb(10, 37, 64);
                                column-rule-color: rgb(10, 37, 64);
                                cursor: pointer;
                                display: block;
                                font-size: 17px;
                                inline-size: 7px;
                                inset-block-start: 50%;
                                inset-inline-end: 30px;
                                line-height: 17px;
                                list-style-type: circle;
                                opacity: 0;
                                outline-color: rgb(10, 37, 64);
                                perspective-origin: 50% 50%;
                                pointer-events: none;
                                position: absolute;
                                right: 30px;
                                text-decoration: none solid rgb(10, 37, 64);
                                text-emphasis-color: rgb(10, 37, 64);
                                text-shadow: rgba(10, 37, 64, 0.7) 0px 0px 0px;
                                top: 50%;
                                transform-origin: 50% 50%;
                                user-select: none;
                                visibility: hidden;
                                width: 7px;
                                -webkit-text-fill-color: rgb(10, 37, 64);
                                -webkit-text-stroke-color: rgb(10, 37, 64);
                              "
                              ><!--?xml version="1.0" encoding="utf-8"?--><svg
                                version="1.1"
                                id="Layer_1"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                x="0px"
                                y="0px"
                                viewBox="0 0 9.5 16"
                                style="
                                  animation-duration: 0.001s;
                                  block-size: auto;
                                  border-block-color: rgb(10, 37, 64);
                                  border-color: rgb(10, 37, 64);
                                  border-inline-color: rgb(10, 37, 64);
                                  caret-color: rgb(10, 37, 64);
                                  color: rgb(10, 37, 64);
                                  column-rule-color: rgb(10, 37, 64);
                                  cursor: pointer;
                                  font-size: 17px;
                                  font-style: italic;
                                  height: auto;
                                  inline-size: 100%;
                                  line-height: 17px;
                                  list-style-type: circle;
                                  max-block-size: 100%;
                                  max-height: 100%;
                                  outline-color: rgb(10, 37, 64);
                                  overflow-clip-margin: content-box;
                                  overflow: hidden;
                                  perspective-origin: 50% 50%;
                                  pointer-events: none;
                                  text-decoration: none solid rgb(10, 37, 64);
                                  text-emphasis-color: rgb(10, 37, 64);
                                  text-shadow: rgba(10, 37, 64, 0.7) 0px 0px 0px;
                                  transform-origin: 50% 50%;
                                  user-select: none;
                                  visibility: hidden;
                                  width: 100%;
                                  -webkit-text-fill-color: rgb(10, 37, 64);
                                  -webkit-text-stroke-color: rgb(10, 37, 64);
                                "
                                xml:space="preserve"
                              >
                                <path d="M1.5,0L0,1.5L6.5,8L0,14.5L1.5,16l8-8L1.5,0z"></path></svg></i
                          ></a>
                        </li>
                        <li style="animation-duration: 0.001s; block-size: auto; height: auto; inline-size: 100%; list-style-type: circle; margin-block-end: 15px; margin-bottom: 15px; perspective-origin: 50% 50%; pointer-events: none; transform-origin: 50% 50%; visibility: hidden; width: 100%">
                          <a
                            href="/partners/affiliates"
                            tabindex="-1"
                            data-acsb-clickable="true"
                            data-acsb-navigable="true"
                            data-acsb-now-navigable="false"
                            data-custom-button-processed="true"
                            style="
                              animation-duration: 0.001s;
                              border-block-color: rgb(10, 37, 64);
                              border-color: rgb(10, 37, 64);
                              border-radius: 10px;
                              border-end-end-radius: 10px;
                              border-end-start-radius: 10px;
                              border-inline-color: rgb(10, 37, 64);
                              border-start-end-radius: 10px;
                              border-start-start-radius: 10px;
                              caret-color: rgb(10, 37, 64);
                              color: rgb(10, 37, 64);
                              column-rule-color: rgb(10, 37, 64);
                              cursor: pointer;
                              display: block;
                              font-size: 17px;
                              inline-size: 100%;
                              line-height: 25.5px;
                              list-style-type: circle;
                              margin-block: auto;
                              margin: auto;
                              margin-inline: auto;
                              outline-color: rgb(10, 37, 64);
                              padding-block: 10px;
                              padding: 10px 20px;
                              padding-inline: 20px;
                              perspective-origin: 50% 50%;
                              pointer-events: none;
                              position: relative;
                              text-decoration: none solid rgb(10, 37, 64);
                              text-emphasis-color: rgb(10, 37, 64);
                              text-shadow: rgba(10, 37, 64, 0.7) 0px 0px 0px;
                              transform-origin: 50% 50%;
                              visibility: hidden;
                              width: 100%;
                              -webkit-text-fill-color: rgb(10, 37, 64);
                              -webkit-text-stroke-color: rgb(10, 37, 64);
                            "
                          >
                            Affiliate Program
                            <i
                              class="icon icon-chevron-right"
                              aria-hidden="true"
                              role="presentation"
                              style="
                                animation-duration: 0.001s;
                                border-block-color: rgb(10, 37, 64);
                                border-color: rgb(10, 37, 64);
                                border-inline-color: rgb(10, 37, 64);
                                caret-color: rgb(10, 37, 64);
                                color: rgb(10, 37, 64);
                                column-rule-color: rgb(10, 37, 64);
                                cursor: pointer;
                                display: block;
                                font-size: 17px;
                                inline-size: 7px;
                                inset-block-start: 50%;
                                inset-inline-end: 30px;
                                line-height: 17px;
                                list-style-type: circle;
                                opacity: 0;
                                outline-color: rgb(10, 37, 64);
                                perspective-origin: 50% 50%;
                                pointer-events: none;
                                position: absolute;
                                right: 30px;
                                text-decoration: none solid rgb(10, 37, 64);
                                text-emphasis-color: rgb(10, 37, 64);
                                text-shadow: rgba(10, 37, 64, 0.7) 0px 0px 0px;
                                top: 50%;
                                transform-origin: 50% 50%;
                                user-select: none;
                                visibility: hidden;
                                width: 7px;
                                -webkit-text-fill-color: rgb(10, 37, 64);
                                -webkit-text-stroke-color: rgb(10, 37, 64);
                              "
                              ><!--?xml version="1.0" encoding="utf-8"?--><svg
                                version="1.1"
                                id="Layer_1"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                x="0px"
                                y="0px"
                                viewBox="0 0 9.5 16"
                                style="
                                  animation-duration: 0.001s;
                                  block-size: auto;
                                  border-block-color: rgb(10, 37, 64);
                                  border-color: rgb(10, 37, 64);
                                  border-inline-color: rgb(10, 37, 64);
                                  caret-color: rgb(10, 37, 64);
                                  color: rgb(10, 37, 64);
                                  column-rule-color: rgb(10, 37, 64);
                                  cursor: pointer;
                                  font-size: 17px;
                                  font-style: italic;
                                  height: auto;
                                  inline-size: 100%;
                                  line-height: 17px;
                                  list-style-type: circle;
                                  max-block-size: 100%;
                                  max-height: 100%;
                                  outline-color: rgb(10, 37, 64);
                                  overflow-clip-margin: content-box;
                                  overflow: hidden;
                                  perspective-origin: 50% 50%;
                                  pointer-events: none;
                                  text-decoration: none solid rgb(10, 37, 64);
                                  text-emphasis-color: rgb(10, 37, 64);
                                  text-shadow: rgba(10, 37, 64, 0.7) 0px 0px 0px;
                                  transform-origin: 50% 50%;
                                  user-select: none;
                                  visibility: hidden;
                                  width: 100%;
                                  -webkit-text-fill-color: rgb(10, 37, 64);
                                  -webkit-text-stroke-color: rgb(10, 37, 64);
                                "
                                xml:space="preserve"
                              >
                                <path d="M1.5,0L0,1.5L6.5,8L0,14.5L1.5,16l8-8L1.5,0z"></path></svg></i
                          ></a>
                        </li>
                        <li style="animation-duration: 0.001s; block-size: auto; height: auto; inline-size: 100%; list-style-type: circle; margin-block-end: 15px; margin-bottom: 15px; perspective-origin: 50% 50%; pointer-events: none; transform-origin: 50% 50%; visibility: hidden; width: 100%">
                          <a
                            href="/partners/nonprofit"
                            tabindex="-1"
                            data-acsb-clickable="true"
                            data-acsb-navigable="true"
                            data-acsb-now-navigable="false"
                            data-custom-button-processed="true"
                            style="
                              animation-duration: 0.001s;
                              border-block-color: rgb(10, 37, 64);
                              border-color: rgb(10, 37, 64);
                              border-radius: 10px;
                              border-end-end-radius: 10px;
                              border-end-start-radius: 10px;
                              border-inline-color: rgb(10, 37, 64);
                              border-start-end-radius: 10px;
                              border-start-start-radius: 10px;
                              caret-color: rgb(10, 37, 64);
                              color: rgb(10, 37, 64);
                              column-rule-color: rgb(10, 37, 64);
                              cursor: pointer;
                              display: block;
                              font-size: 17px;
                              inline-size: 100%;
                              line-height: 25.5px;
                              list-style-type: circle;
                              margin-block: auto;
                              margin: auto;
                              margin-inline: auto;
                              outline-color: rgb(10, 37, 64);
                              padding-block: 10px;
                              padding: 10px 20px;
                              padding-inline: 20px;
                              perspective-origin: 50% 50%;
                              pointer-events: none;
                              position: relative;
                              text-decoration: none solid rgb(10, 37, 64);
                              text-emphasis-color: rgb(10, 37, 64);
                              text-shadow: rgba(10, 37, 64, 0.7) 0px 0px 0px;
                              transform-origin: 50% 50%;
                              visibility: hidden;
                              width: 100%;
                              -webkit-text-fill-color: rgb(10, 37, 64);
                              -webkit-text-stroke-color: rgb(10, 37, 64);
                            "
                          >
                            Nonprofit Partnerships
                            <i
                              class="icon icon-chevron-right"
                              aria-hidden="true"
                              role="presentation"
                              style="
                                animation-duration: 0.001s;
                                border-block-color: rgb(10, 37, 64);
                                border-color: rgb(10, 37, 64);
                                border-inline-color: rgb(10, 37, 64);
                                caret-color: rgb(10, 37, 64);
                                color: rgb(10, 37, 64);
                                column-rule-color: rgb(10, 37, 64);
                                cursor: pointer;
                                display: block;
                                font-size: 17px;
                                inline-size: 7px;
                                inset-block-start: 50%;
                                inset-inline-end: 30px;
                                line-height: 17px;
                                list-style-type: circle;
                                opacity: 0;
                                outline-color: rgb(10, 37, 64);
                                perspective-origin: 50% 50%;
                                pointer-events: none;
                                position: absolute;
                                right: 30px;
                                text-decoration: none solid rgb(10, 37, 64);
                                text-emphasis-color: rgb(10, 37, 64);
                                text-shadow: rgba(10, 37, 64, 0.7) 0px 0px 0px;
                                top: 50%;
                                transform-origin: 50% 50%;
                                user-select: none;
                                visibility: hidden;
                                width: 7px;
                                -webkit-text-fill-color: rgb(10, 37, 64);
                                -webkit-text-stroke-color: rgb(10, 37, 64);
                              "
                              ><!--?xml version="1.0" encoding="utf-8"?--><svg
                                version="1.1"
                                id="Layer_1"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                x="0px"
                                y="0px"
                                viewBox="0 0 9.5 16"
                                style="
                                  animation-duration: 0.001s;
                                  block-size: auto;
                                  border-block-color: rgb(10, 37, 64);
                                  border-color: rgb(10, 37, 64);
                                  border-inline-color: rgb(10, 37, 64);
                                  caret-color: rgb(10, 37, 64);
                                  color: rgb(10, 37, 64);
                                  column-rule-color: rgb(10, 37, 64);
                                  cursor: pointer;
                                  font-size: 17px;
                                  font-style: italic;
                                  height: auto;
                                  inline-size: 100%;
                                  line-height: 17px;
                                  list-style-type: circle;
                                  max-block-size: 100%;
                                  max-height: 100%;
                                  outline-color: rgb(10, 37, 64);
                                  overflow-clip-margin: content-box;
                                  overflow: hidden;
                                  perspective-origin: 50% 50%;
                                  pointer-events: none;
                                  text-decoration: none solid rgb(10, 37, 64);
                                  text-emphasis-color: rgb(10, 37, 64);
                                  text-shadow: rgba(10, 37, 64, 0.7) 0px 0px 0px;
                                  transform-origin: 50% 50%;
                                  user-select: none;
                                  visibility: hidden;
                                  width: 100%;
                                  -webkit-text-fill-color: rgb(10, 37, 64);
                                  -webkit-text-stroke-color: rgb(10, 37, 64);
                                "
                                xml:space="preserve"
                              >
                                <path d="M1.5,0L0,1.5L6.5,8L0,14.5L1.5,16l8-8L1.5,0z"></path></svg></i
                          ></a>
                        </li>
                        <li style="animation-duration: 0.001s; block-size: auto; height: auto; inline-size: 100%; list-style-type: circle; margin-block-end: 15px; margin-bottom: 15px; perspective-origin: 50% 50%; pointer-events: none; transform-origin: 50% 50%; visibility: hidden; width: 100%">
                          <a
                            href="#popup-demo"
                            class="js-a11y-bound"
                            role="button"
                            tabindex="-1"
                            data-acsb-clickable="true"
                            data-acsb-navigable="true"
                            data-acsb-now-navigable="false"
                            data-custom-button-processed="true"
                            style="
                              animation-duration: 0.001s;
                              border-block-color: rgb(10, 37, 64);
                              border-color: rgb(10, 37, 64);
                              border-radius: 10px;
                              border-end-end-radius: 10px;
                              border-end-start-radius: 10px;
                              border-inline-color: rgb(10, 37, 64);
                              border-start-end-radius: 10px;
                              border-start-start-radius: 10px;
                              caret-color: rgb(10, 37, 64);
                              color: rgb(10, 37, 64);
                              column-rule-color: rgb(10, 37, 64);
                              cursor: pointer;
                              display: block;
                              font-size: 17px;
                              inline-size: 100%;
                              line-height: 25.5px;
                              list-style-type: circle;
                              margin-block: auto;
                              margin: auto;
                              margin-inline: auto;
                              outline-color: rgb(10, 37, 64);
                              padding-block: 10px;
                              padding: 10px 20px;
                              padding-inline: 20px;
                              perspective-origin: 50% 50%;
                              pointer-events: none;
                              position: relative;
                              text-decoration: none solid rgb(10, 37, 64);
                              text-emphasis-color: rgb(10, 37, 64);
                              text-shadow: rgba(10, 37, 64, 0.7) 0px 0px 0px;
                              transform-origin: 50% 50%;
                              visibility: hidden;
                              width: 100%;
                              -webkit-text-fill-color: rgb(10, 37, 64);
                              -webkit-text-stroke-color: rgb(10, 37, 64);
                            "
                          >
                            Schedule Discovery Call
                            <i
                              class="icon icon-chevron-right"
                              aria-hidden="true"
                              role="presentation"
                              style="
                                animation-duration: 0.001s;
                                border-block-color: rgb(10, 37, 64);
                                border-color: rgb(10, 37, 64);
                                border-inline-color: rgb(10, 37, 64);
                                caret-color: rgb(10, 37, 64);
                                color: rgb(10, 37, 64);
                                column-rule-color: rgb(10, 37, 64);
                                cursor: pointer;
                                display: block;
                                font-size: 17px;
                                inline-size: 7px;
                                inset-block-start: 50%;
                                inset-inline-end: 30px;
                                line-height: 17px;
                                list-style-type: circle;
                                opacity: 0;
                                outline-color: rgb(10, 37, 64);
                                perspective-origin: 50% 50%;
                                pointer-events: none;
                                position: absolute;
                                right: 30px;
                                text-decoration: none solid rgb(10, 37, 64);
                                text-emphasis-color: rgb(10, 37, 64);
                                text-shadow: rgba(10, 37, 64, 0.7) 0px 0px 0px;
                                top: 50%;
                                transform-origin: 50% 50%;
                                user-select: none;
                                visibility: hidden;
                                width: 7px;
                                -webkit-text-fill-color: rgb(10, 37, 64);
                                -webkit-text-stroke-color: rgb(10, 37, 64);
                              "
                              ><!--?xml version="1.0" encoding="utf-8"?--><svg
                                version="1.1"
                                id="Layer_1"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                x="0px"
                                y="0px"
                                viewBox="0 0 9.5 16"
                                style="
                                  animation-duration: 0.001s;
                                  block-size: auto;
                                  border-block-color: rgb(10, 37, 64);
                                  border-color: rgb(10, 37, 64);
                                  border-inline-color: rgb(10, 37, 64);
                                  caret-color: rgb(10, 37, 64);
                                  color: rgb(10, 37, 64);
                                  column-rule-color: rgb(10, 37, 64);
                                  cursor: pointer;
                                  font-size: 17px;
                                  font-style: italic;
                                  height: auto;
                                  inline-size: 100%;
                                  line-height: 17px;
                                  list-style-type: circle;
                                  max-block-size: 100%;
                                  max-height: 100%;
                                  outline-color: rgb(10, 37, 64);
                                  overflow-clip-margin: content-box;
                                  overflow: hidden;
                                  perspective-origin: 50% 50%;
                                  pointer-events: none;
                                  text-decoration: none solid rgb(10, 37, 64);
                                  text-emphasis-color: rgb(10, 37, 64);
                                  text-shadow: rgba(10, 37, 64, 0.7) 0px 0px 0px;
                                  transform-origin: 50% 50%;
                                  user-select: none;
                                  visibility: hidden;
                                  width: 100%;
                                  -webkit-text-fill-color: rgb(10, 37, 64);
                                  -webkit-text-stroke-color: rgb(10, 37, 64);
                                "
                                xml:space="preserve"
                              >
                                <path d="M1.5,0L0,1.5L6.5,8L0,14.5L1.5,16l8-8L1.5,0z"></path></svg></i
                          ></a>
                        </li>
                        <li style="animation-duration: 0.001s; block-size: auto; height: auto; inline-size: 100%; list-style-type: circle; margin-block-end: 15px; margin-bottom: 15px; perspective-origin: 50% 50%; pointer-events: none; transform-origin: 50% 50%; visibility: hidden; width: 100%">
                          <a
                            href="/support/partners"
                            tabindex="-1"
                            data-acsb-clickable="true"
                            data-acsb-navigable="true"
                            data-acsb-now-navigable="false"
                            data-custom-button-processed="true"
                            style="
                              animation-duration: 0.001s;
                              border-block-color: rgb(10, 37, 64);
                              border-color: rgb(10, 37, 64);
                              border-radius: 10px;
                              border-end-end-radius: 10px;
                              border-end-start-radius: 10px;
                              border-inline-color: rgb(10, 37, 64);
                              border-start-end-radius: 10px;
                              border-start-start-radius: 10px;
                              caret-color: rgb(10, 37, 64);
                              color: rgb(10, 37, 64);
                              column-rule-color: rgb(10, 37, 64);
                              cursor: pointer;
                              display: block;
                              font-size: 17px;
                              inline-size: 100%;
                              line-height: 25.5px;
                              list-style-type: circle;
                              margin-block: auto;
                              margin: auto;
                              margin-inline: auto;
                              outline-color: rgb(10, 37, 64);
                              padding-block: 10px;
                              padding: 10px 20px;
                              padding-inline: 20px;
                              perspective-origin: 50% 50%;
                              pointer-events: none;
                              position: relative;
                              text-decoration: none solid rgb(10, 37, 64);
                              text-emphasis-color: rgb(10, 37, 64);
                              text-shadow: rgba(10, 37, 64, 0.7) 0px 0px 0px;
                              transform-origin: 50% 50%;
                              visibility: hidden;
                              width: 100%;
                              -webkit-text-fill-color: rgb(10, 37, 64);
                              -webkit-text-stroke-color: rgb(10, 37, 64);
                            "
                          >
                            Partner Support
                            <i
                              class="icon icon-chevron-right"
                              aria-hidden="true"
                              role="presentation"
                              style="
                                animation-duration: 0.001s;
                                border-block-color: rgb(10, 37, 64);
                                border-color: rgb(10, 37, 64);
                                border-inline-color: rgb(10, 37, 64);
                                caret-color: rgb(10, 37, 64);
                                color: rgb(10, 37, 64);
                                column-rule-color: rgb(10, 37, 64);
                                cursor: pointer;
                                display: block;
                                font-size: 17px;
                                inline-size: 7px;
                                inset-block-start: 50%;
                                inset-inline-end: 30px;
                                line-height: 17px;
                                list-style-type: circle;
                                opacity: 0;
                                outline-color: rgb(10, 37, 64);
                                perspective-origin: 50% 50%;
                                pointer-events: none;
                                position: absolute;
                                right: 30px;
                                text-decoration: none solid rgb(10, 37, 64);
                                text-emphasis-color: rgb(10, 37, 64);
                                text-shadow: rgba(10, 37, 64, 0.7) 0px 0px 0px;
                                top: 50%;
                                transform-origin: 50% 50%;
                                user-select: none;
                                visibility: hidden;
                                width: 7px;
                                -webkit-text-fill-color: rgb(10, 37, 64);
                                -webkit-text-stroke-color: rgb(10, 37, 64);
                              "
                              ><!--?xml version="1.0" encoding="utf-8"?--><svg
                                version="1.1"
                                id="Layer_1"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                x="0px"
                                y="0px"
                                viewBox="0 0 9.5 16"
                                style="
                                  animation-duration: 0.001s;
                                  block-size: auto;
                                  border-block-color: rgb(10, 37, 64);
                                  border-color: rgb(10, 37, 64);
                                  border-inline-color: rgb(10, 37, 64);
                                  caret-color: rgb(10, 37, 64);
                                  color: rgb(10, 37, 64);
                                  column-rule-color: rgb(10, 37, 64);
                                  cursor: pointer;
                                  font-size: 17px;
                                  font-style: italic;
                                  height: auto;
                                  inline-size: 100%;
                                  line-height: 17px;
                                  list-style-type: circle;
                                  max-block-size: 100%;
                                  max-height: 100%;
                                  outline-color: rgb(10, 37, 64);
                                  overflow-clip-margin: content-box;
                                  overflow: hidden;
                                  perspective-origin: 50% 50%;
                                  pointer-events: none;
                                  text-decoration: none solid rgb(10, 37, 64);
                                  text-emphasis-color: rgb(10, 37, 64);
                                  text-shadow: rgba(10, 37, 64, 0.7) 0px 0px 0px;
                                  transform-origin: 50% 50%;
                                  user-select: none;
                                  visibility: hidden;
                                  width: 100%;
                                  -webkit-text-fill-color: rgb(10, 37, 64);
                                  -webkit-text-stroke-color: rgb(10, 37, 64);
                                "
                                xml:space="preserve"
                              >
                                <path d="M1.5,0L0,1.5L6.5,8L0,14.5L1.5,16l8-8L1.5,0z"></path></svg></i
                          ></a>
                        </li>
                        <li style="animation-duration: 0.001s; block-size: auto; height: auto; inline-size: 100%; list-style-type: circle; perspective-origin: 50% 50%; pointer-events: none; transform-origin: 50% 50%; visibility: hidden; width: 100%">
                          <a
                            href="/support/partners/how-do-i-whitelabel-the-interface"
                            tabindex="-1"
                            data-acsb-clickable="true"
                            data-acsb-navigable="true"
                            data-acsb-now-navigable="false"
                            data-custom-button-processed="true"
                            style="
                              animation-duration: 0.001s;
                              border-block-color: rgb(10, 37, 64);
                              border-color: rgb(10, 37, 64);
                              border-radius: 10px;
                              border-end-end-radius: 10px;
                              border-end-start-radius: 10px;
                              border-inline-color: rgb(10, 37, 64);
                              border-start-end-radius: 10px;
                              border-start-start-radius: 10px;
                              caret-color: rgb(10, 37, 64);
                              color: rgb(10, 37, 64);
                              column-rule-color: rgb(10, 37, 64);
                              cursor: pointer;
                              display: block;
                              font-size: 17px;
                              inline-size: 100%;
                              line-height: 25.5px;
                              list-style-type: circle;
                              margin-block: auto;
                              margin: auto;
                              margin-inline: auto;
                              outline-color: rgb(10, 37, 64);
                              padding-block: 10px;
                              padding: 10px 20px;
                              padding-inline: 20px;
                              perspective-origin: 50% 50%;
                              pointer-events: none;
                              position: relative;
                              text-decoration: none solid rgb(10, 37, 64);
                              text-emphasis-color: rgb(10, 37, 64);
                              text-shadow: rgba(10, 37, 64, 0.7) 0px 0px 0px;
                              transform-origin: 50% 50%;
                              visibility: hidden;
                              width: 100%;
                              -webkit-text-fill-color: rgb(10, 37, 64);
                              -webkit-text-stroke-color: rgb(10, 37, 64);
                            "
                          >
                            Whitelabeled Guide
                            <i
                              class="icon icon-chevron-right"
                              aria-hidden="true"
                              role="presentation"
                              style="
                                animation-duration: 0.001s;
                                border-block-color: rgb(10, 37, 64);
                                border-color: rgb(10, 37, 64);
                                border-inline-color: rgb(10, 37, 64);
                                caret-color: rgb(10, 37, 64);
                                color: rgb(10, 37, 64);
                                column-rule-color: rgb(10, 37, 64);
                                cursor: pointer;
                                display: block;
                                font-size: 17px;
                                inline-size: 7px;
                                inset-block-start: 50%;
                                inset-inline-end: 30px;
                                line-height: 17px;
                                list-style-type: circle;
                                opacity: 0;
                                outline-color: rgb(10, 37, 64);
                                perspective-origin: 50% 50%;
                                pointer-events: none;
                                position: absolute;
                                right: 30px;
                                text-decoration: none solid rgb(10, 37, 64);
                                text-emphasis-color: rgb(10, 37, 64);
                                text-shadow: rgba(10, 37, 64, 0.7) 0px 0px 0px;
                                top: 50%;
                                transform-origin: 50% 50%;
                                user-select: none;
                                visibility: hidden;
                                width: 7px;
                                -webkit-text-fill-color: rgb(10, 37, 64);
                                -webkit-text-stroke-color: rgb(10, 37, 64);
                              "
                              ><!--?xml version="1.0" encoding="utf-8"?--><svg
                                version="1.1"
                                id="Layer_1"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                x="0px"
                                y="0px"
                                viewBox="0 0 9.5 16"
                                style="
                                  animation-duration: 0.001s;
                                  block-size: auto;
                                  border-block-color: rgb(10, 37, 64);
                                  border-color: rgb(10, 37, 64);
                                  border-inline-color: rgb(10, 37, 64);
                                  caret-color: rgb(10, 37, 64);
                                  color: rgb(10, 37, 64);
                                  column-rule-color: rgb(10, 37, 64);
                                  cursor: pointer;
                                  font-size: 17px;
                                  font-style: italic;
                                  height: auto;
                                  inline-size: 100%;
                                  line-height: 17px;
                                  list-style-type: circle;
                                  max-block-size: 100%;
                                  max-height: 100%;
                                  outline-color: rgb(10, 37, 64);
                                  overflow-clip-margin: content-box;
                                  overflow: hidden;
                                  perspective-origin: 50% 50%;
                                  pointer-events: none;
                                  text-decoration: none solid rgb(10, 37, 64);
                                  text-emphasis-color: rgb(10, 37, 64);
                                  text-shadow: rgba(10, 37, 64, 0.7) 0px 0px 0px;
                                  transform-origin: 50% 50%;
                                  user-select: none;
                                  visibility: hidden;
                                  width: 100%;
                                  -webkit-text-fill-color: rgb(10, 37, 64);
                                  -webkit-text-stroke-color: rgb(10, 37, 64);
                                "
                                xml:space="preserve"
                              >
                                <path d="M1.5,0L0,1.5L6.5,8L0,14.5L1.5,16l8-8L1.5,0z"></path></svg></i
                          ></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    class="part part-card"
                    style="
                      animation-duration: 0.001s;
                      background-color: rgb(248, 249, 252);
                      block-size: auto;
                      border-bottom-right-radius: 10px;
                      border-end-end-radius: 10px;
                      border-start-end-radius: 10px;
                      border-top-right-radius: 10px;
                      height: auto;
                      inline-size: 380px;
                      min-inline-size: 380px;
                      min-width: 380px;
                      overflow: hidden;
                      padding-block: 30px;
                      padding: 30px;
                      padding-inline: 30px;
                      perspective-origin: 50% 50%;
                      pointer-events: none;
                      transform-origin: 50% 50%;
                      visibility: hidden;
                      width: 380px;
                    "
                  >
                    <a
                      class="card"
                      href="/partners"
                      tabindex="-1"
                      data-acsb-clickable="true"
                      data-acsb-navigable="true"
                      data-acsb-now-navigable="false"
                      data-custom-button-processed="true"
                      style="animation-duration: 0.001s; block-size: 100%; cursor: pointer; height: 100%; perspective-origin: 50% 50%; pointer-events: none; transform-origin: 50% 50%; visibility: hidden"
                      ><div
                        class="image"
                        style="
                          animation-duration: 0.001s;
                          block-size: 200px;
                          border-block-color: rgb(19, 110, 248);
                          border-color: rgb(19, 110, 248);
                          border-radius: 10px;
                          border-end-end-radius: 10px;
                          border-end-start-radius: 10px;
                          border-inline-color: rgb(19, 110, 248);
                          border-start-end-radius: 10px;
                          border-start-start-radius: 10px;
                          caret-color: rgb(19, 110, 248);
                          color: rgb(19, 110, 248);
                          column-rule-color: rgb(19, 110, 248);
                          cursor: pointer;
                          height: 200px;
                          inline-size: auto;
                          outline-color: rgb(19, 110, 248);
                          overflow: hidden;
                          perspective-origin: 50% 50%;
                          pointer-events: none;
                          text-decoration: none solid rgb(19, 110, 248);
                          text-emphasis-color: rgb(19, 110, 248);
                          transform-origin: 50% 50%;
                          visibility: hidden;
                          width: auto;
                          -webkit-text-fill-color: rgb(19, 110, 248);
                          -webkit-text-stroke-color: rgb(19, 110, 248);
                        "
                      >
                        <img
                          class="object-cover"
                          role="presentation"
                          alt="Agency? Freelancer? Learn about our Partner Program"
                          style="
                            animation-duration: 0.001s;
                            block-size: 100%;
                            border-block-color: rgb(19, 110, 248);
                            border-color: rgb(19, 110, 248);
                            border-inline-color: rgb(19, 110, 248);
                            caret-color: rgb(19, 110, 248);
                            color: rgb(19, 110, 248);
                            column-rule-color: rgb(19, 110, 248);
                            cursor: pointer;
                            display: block;
                            height: 100%;
                            inline-size: 100%;
                            max-inline-size: none;
                            max-width: none;
                            object-fit: cover;
                            outline-color: rgb(19, 110, 248);
                            perspective-origin: 50% 50%;
                            pointer-events: none;
                            text-decoration: none solid rgb(19, 110, 248);
                            text-emphasis-color: rgb(19, 110, 248);
                            transform-origin: 50% 50%;
                            visibility: hidden;
                            width: 100%;
                            -webkit-text-fill-color: rgb(19, 110, 248);
                            -webkit-text-stroke-color: rgb(19, 110, 248);
                          "
                        />
                      </div>
                      <div
                        class="content"
                        style="
                          animation-duration: 0.001s;
                          block-size: auto;
                          border-block-color: rgb(19, 110, 248);
                          border-color: rgb(19, 110, 248);
                          border-inline-color: rgb(19, 110, 248);
                          caret-color: rgb(19, 110, 248);
                          color: rgb(19, 110, 248);
                          column-rule-color: rgb(19, 110, 248);
                          cursor: pointer;
                          height: auto;
                          inline-size: auto;
                          margin-block-start: 30px;
                          margin-top: 30px;
                          outline-color: rgb(19, 110, 248);
                          perspective-origin: 50% 50%;
                          pointer-events: none;
                          text-decoration: none solid rgb(19, 110, 248);
                          text-emphasis-color: rgb(19, 110, 248);
                          transform-origin: 50% 50%;
                          visibility: hidden;
                          width: auto;
                          -webkit-text-fill-color: rgb(19, 110, 248);
                          -webkit-text-stroke-color: rgb(19, 110, 248);
                        "
                      >
                        <span
                          class="title title-small2"
                          style="
                            animation-duration: 0.001s;
                            border-block-color: rgb(10, 37, 64);
                            border-color: rgb(10, 37, 64);
                            border-inline-color: rgb(10, 37, 64);
                            caret-color: rgb(10, 37, 64);
                            color: rgb(10, 37, 64);
                            column-rule-color: rgb(10, 37, 64);
                            cursor: pointer;
                            display: block;
                            font-size: 19px;
                            font-weight: 700;
                            inline-size: 100%;
                            letter-spacing: -0.5px;
                            line-height: 24.7px;
                            margin-block-end: 20px;
                            margin-bottom: 20px;
                            outline-color: rgb(10, 37, 64);
                            perspective-origin: 50% 50%;
                            pointer-events: none;
                            position: relative;
                            text-decoration: none solid rgb(10, 37, 64);
                            text-emphasis-color: rgb(10, 37, 64);
                            text-rendering: geometricprecision;
                            transform-origin: 50% 50%;
                            visibility: hidden;
                            width: 100%;
                            -webkit-text-fill-color: rgb(10, 37, 64);
                            -webkit-text-stroke-color: rgb(10, 37, 64);
                          "
                          >Agency? Freelancer? Learn about our Partner Program</span
                        >
                        <p class="text text-medium" style="animation-duration: 0.001s; block-size: auto; cursor: pointer; height: auto; inline-size: auto; margin-block: 0px; margin-bottom: 0px; margin-top: 0px; perspective-origin: 50% 50%; pointer-events: none; transform-origin: 50% 50%; visibility: hidden; width: auto">
                          Let’s get your clients’ websites accessible, inclusive, and compliant!
                        </p>
                        <span
                          class="text-button text-button-nocolor text-button-small"
                          style="
                            align-items: center;
                            animation-duration: 0.001s;
                            border-block-color: rgb(10, 37, 64);
                            border-color: rgb(10, 37, 64);
                            border-inline-color: rgb(10, 37, 64);
                            caret-color: rgb(10, 37, 64);
                            color: rgb(10, 37, 64);
                            column-rule-color: rgb(10, 37, 64);
                            cursor: pointer;
                            display: block;
                            font-size: 14px;
                            font-weight: 600;
                            inline-size: 100%;
                            justify-content: center;
                            line-height: 14px;
                            margin-block-start: 25px;
                            margin-top: 25px;
                            outline-color: rgb(10, 37, 64);
                            perspective-origin: 50% 50%;
                            pointer-events: none;
                            text-decoration: none solid rgb(10, 37, 64);
                            text-emphasis-color: rgb(10, 37, 64);
                            text-transform: uppercase;
                            transform-origin: 50% 50%;
                            user-select: none;
                            visibility: hidden;
                            width: 100%;
                            -webkit-text-fill-color: rgb(10, 37, 64);
                            -webkit-text-stroke-color: rgb(10, 37, 64);
                          "
                        >
                          Partner Program
                          <i
                            class="icon icon-chevron-right"
                            aria-hidden="true"
                            role="presentation"
                            style="
                              animation-duration: 0.001s;
                              border-block-color: rgb(10, 37, 64);
                              border-color: rgb(10, 37, 64);
                              border-inline-color: rgb(10, 37, 64);
                              caret-color: rgb(10, 37, 64);
                              color: rgb(10, 37, 64);
                              column-rule-color: rgb(10, 37, 64);
                              cursor: pointer;
                              display: inline-block;
                              font-size: 14px;
                              font-weight: 600;
                              inline-size: 100%;
                              line-height: 14px;
                              margin-inline-start: 12px;
                              margin-left: 12px;
                              max-inline-size: 5px;
                              max-width: 5px;
                              min-inline-size: 5px;
                              min-width: 5px;
                              outline-color: rgb(10, 37, 64);
                              perspective-origin: 50% 50%;
                              pointer-events: none;
                              text-decoration: none solid rgb(10, 37, 64);
                              text-emphasis-color: rgb(10, 37, 64);
                              text-transform: uppercase;
                              transform-origin: 50% 50%;
                              user-select: none;
                              visibility: hidden;
                              width: 100%;
                              -webkit-text-fill-color: rgb(10, 37, 64);
                              -webkit-text-stroke-color: rgb(10, 37, 64);
                            "
                            ><!--?xml version="1.0" encoding="utf-8"?--><svg
                              version="1.1"
                              id="Layer_1"
                              xmlns="http://www.w3.org/2000/svg"
                              xmlns:xlink="http://www.w3.org/1999/xlink"
                              x="0px"
                              y="0px"
                              viewBox="0 0 9.5 16"
                              style="
                                animation-duration: 0.001s;
                                block-size: auto;
                                border-block-color: rgb(10, 37, 64);
                                border-color: rgb(10, 37, 64);
                                border-inline-color: rgb(10, 37, 64);
                                caret-color: rgb(10, 37, 64);
                                color: rgb(10, 37, 64);
                                column-rule-color: rgb(10, 37, 64);
                                cursor: pointer;
                                font-size: 14px;
                                font-style: italic;
                                font-weight: 600;
                                height: auto;
                                inline-size: 100%;
                                line-height: 14px;
                                max-block-size: 100%;
                                max-height: 100%;
                                outline-color: rgb(10, 37, 64);
                                overflow-clip-margin: content-box;
                                overflow: hidden;
                                perspective-origin: 50% 50%;
                                pointer-events: none;
                                text-decoration: none solid rgb(10, 37, 64);
                                text-emphasis-color: rgb(10, 37, 64);
                                text-transform: uppercase;
                                transform-origin: 50% 50%;
                                user-select: none;
                                visibility: hidden;
                                width: 100%;
                                -webkit-text-fill-color: rgb(10, 37, 64);
                                -webkit-text-stroke-color: rgb(10, 37, 64);
                              "
                              xml:space="preserve"
                            >
                              <path d="M1.5,0L0,1.5L6.5,8L0,14.5L1.5,16l8-8L1.5,0z"></path></svg></i
                        ></span></div
                    ></a>
                  </div>
                </div>
              </div>
            </li>
            <li class="menu-reviews" data-acsb-menu="li" data-acsb-menu-root="true" style="animation-duration: 0.001s; block-size: 65px; display: inline-block; height: 65px; inline-size: 96.5625px; perspective-origin: 48.2812px 32.5px; transform-origin: 48.2812px 32.5px; width: 96.5625px">
              <a
                class="item"
                href="/reviews"
                data-acsb-clickable="true"
                data-acsb-navigable="true"
                data-acsb-now-navigable="true"
                data-custom-button-processed="true"
                data-acsb-menu="a"
                data-acsb-menu-root-link="true"
                style="
                  align-items: center;
                  animation-duration: 0.001s;
                  block-size: 65px;
                  border-block-color: rgb(10, 37, 64);
                  border-color: rgb(10, 37, 64);
                  border-inline-color: rgb(10, 37, 64);
                  inset: 0px;
                  caret-color: rgb(10, 37, 64);
                  color: rgb(10, 37, 64);
                  column-rule-color: rgb(10, 37, 64);
                  cursor: pointer;
                  display: inline-flex;
                  font-size: 14px;
                  font-weight: 600;
                  height: 65px;
                  inline-size: 81.5625px;
                  inset-block: 0px;
                  inset-inline: 0px;
                  justify-content: space-between;
                  line-height: 21px;
                  margin-inline-end: 15px;
                  margin-right: 15px;
                  outline-color: rgb(10, 37, 64);
                  padding-inline: 10px;
                  padding-left: 10px;
                  padding-right: 10px;
                  perspective-origin: 40.7812px 32.5px;
                  position: relative;
                  text-decoration: none solid rgb(10, 37, 64);
                  text-emphasis-color: rgb(10, 37, 64);
                  text-transform: uppercase;
                  transform-origin: 40.7812px 32.5px;
                  width: 81.5625px;
                  -webkit-text-fill-color: rgb(10, 37, 64);
                  -webkit-text-stroke-color: rgb(10, 37, 64);
                "
                data-id="8"
              >
                Reviews
              </a>
            </li>
            <li class="menu-pricing" data-acsb-menu="li" data-acsb-menu-root="true" style="animation-duration: 0.001s; block-size: 65px; display: inline-block; height: 65px; inline-size: 92.8984px; perspective-origin: 46.4453px 32.5px; transform-origin: 46.4492px 32.5px; width: 92.8984px">
              <a
                class="item"
                href="/pricing"
                data-acsb-clickable="true"
                data-acsb-navigable="true"
                data-acsb-now-navigable="true"
                data-custom-button-processed="true"
                data-acsb-menu="a"
                data-acsb-menu-root-link="true"
                style="
                  align-items: center;
                  animation-duration: 0.001s;
                  block-size: 65px;
                  border-block-color: rgb(10, 37, 64);
                  border-color: rgb(10, 37, 64);
                  border-inline-color: rgb(10, 37, 64);
                  inset: 0px;
                  caret-color: rgb(10, 37, 64);
                  color: rgb(10, 37, 64);
                  column-rule-color: rgb(10, 37, 64);
                  cursor: pointer;
                  display: inline-flex;
                  font-size: 14px;
                  font-weight: 600;
                  height: 65px;
                  inline-size: 77.9062px;
                  inset-block: 0px;
                  inset-inline: 0px;
                  justify-content: space-between;
                  line-height: 21px;
                  margin-inline-end: 15px;
                  margin-right: 15px;
                  outline-color: rgb(10, 37, 64);
                  padding-inline: 10px;
                  padding-left: 10px;
                  padding-right: 10px;
                  perspective-origin: 38.9531px 32.5px;
                  position: relative;
                  text-decoration: none solid rgb(10, 37, 64);
                  text-emphasis-color: rgb(10, 37, 64);
                  text-transform: uppercase;
                  transform-origin: 38.9531px 32.5px;
                  width: 77.9062px;
                  -webkit-text-fill-color: rgb(10, 37, 64);
                  -webkit-text-stroke-color: rgb(10, 37, 64);
                "
                data-id="9"
              >
                Pricing
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div
        class="end flex flex-inline flex-horizontal-end flex-nowrap"
        style="align-items: center; animation-duration: 0.001s; block-size: 40px; display: flex; height: 40px; inline-size: 328.539px; justify-content: flex-end; min-block-size: auto; min-height: auto; min-inline-size: auto; min-width: auto; perspective-origin: 164.266px 20px; transform-origin: 164.27px 20px; width: 328.539px"
      >
        <button
          class="cta-b js-a11y-bound"
          data-clicker-trigger="popup-demo"
          data-demo-cta="Site header"
          data-acsb-clickable="true"
          data-acsb-navigable="true"
          data-acsb-now-navigable="true"
          data-custom-button-processed="true"
          style="
            align-items: center;
            animation-duration: 0.001s;
            block-size: 17px;
            display: flex;
            font-size: 15px;
            font-weight: 600;
            height: 17px;
            inline-size: 133.812px;
            justify-content: center;
            line-height: 15px;
            margin-inline-end: 30px;
            margin-right: 30px;
            min-block-size: auto;
            min-height: auto;
            min-inline-size: auto;
            min-width: auto;
            perspective-origin: 66.9062px 8.5px;
            text-transform: uppercase;
            transform-origin: 66.9062px 8.5px;
            user-select: none;
            width: 133.812px;
          "
        >
          <i
            class="icon icon-play"
            role="presentation"
            style="
              align-items: center;
              animation-duration: 0.001s;
              background-color: rgb(10, 37, 64);
              block-size: 20px;
              border-block-color: rgb(0, 0, 0);
              border-color: rgb(0, 0, 0);
              border-radius: 50%;
              border-end-end-radius: 50%;
              border-end-start-radius: 50%;
              border-inline-color: rgb(0, 0, 0);
              border-start-end-radius: 50%;
              border-start-start-radius: 50%;
              caret-color: rgb(0, 0, 0);
              color: rgb(0, 0, 0);
              column-rule-color: rgb(0, 0, 0);
              cursor: pointer;
              display: flex;
              font-size: 15px;
              font-weight: 600;
              height: 20px;
              inline-size: 20px;
              justify-content: center;
              line-height: 15px;
              margin-block-start: -3px;
              margin-inline-end: 7px;
              margin-right: 7px;
              margin-top: -3px;
              min-block-size: auto;
              min-height: auto;
              min-inline-size: auto;
              min-width: auto;
              outline-color: rgb(0, 0, 0);
              perspective-origin: 10px 10px;
              text-align: center;
              text-decoration: none solid rgb(0, 0, 0);
              text-emphasis-color: rgb(0, 0, 0);
              text-transform: uppercase;
              transform-origin: 10px 10px;
              user-select: none;
              width: 20px;
              -webkit-text-fill-color: rgb(0, 0, 0);
              -webkit-text-stroke-color: rgb(0, 0, 0);
            "
            ><svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0 0 27 30.9"
              style="
                animation-duration: 0.001s;
                block-size: 8.00781px;
                border-block-color: rgb(0, 0, 0);
                border-color: rgb(0, 0, 0);
                border-inline-color: rgb(0, 0, 0);
                caret-color: rgb(0, 0, 0);
                color: rgb(0, 0, 0);
                column-rule-color: rgb(0, 0, 0);
                cursor: pointer;
                font-size: 15px;
                font-style: italic;
                font-weight: 600;
                height: 8.00781px;
                inline-size: 7px;
                line-height: 15px;
                max-block-size: 100%;
                max-height: 100%;
                min-block-size: auto;
                min-height: auto;
                min-inline-size: auto;
                min-width: auto;
                outline-color: rgb(0, 0, 0);
                overflow-clip-margin: content-box;
                overflow: hidden;
                perspective-origin: 3.5px 4px;
                text-align: center;
                text-decoration: none solid rgb(0, 0, 0);
                text-emphasis-color: rgb(0, 0, 0);
                text-transform: uppercase;
                transform-origin: 3.5px 4.00391px;
                user-select: none;
                width: 7px;
                -webkit-text-fill-color: rgb(0, 0, 0);
                -webkit-text-stroke-color: rgb(0, 0, 0);
              "
              xml:space="preserve"
              aria-hidden="true"
              data-acsb-hidden="true"
            >
              <path d="M0,2c0-1.6,1.7-2.6,3.1-1.8l23,13.4c1.3,0.8,1.3,2.7,0,3.5l-23,13.4C1.7,31.4,0,30.5,0,28.9V2z"></path></svg></i
          ><span
            style="
              animation-duration: 0.001s;
              block-size: 15px;
              border-block-color: rgb(0, 0, 0);
              border-color: rgb(0, 0, 0);
              border-inline-color: rgb(0, 0, 0);
              caret-color: rgb(0, 0, 0);
              color: rgb(0, 0, 0);
              column-rule-color: rgb(0, 0, 0);
              cursor: pointer;
              display: block;
              font-size: 15px;
              font-weight: 600;
              height: 15px;
              inline-size: 106.82px;
              line-height: 15px;
              min-block-size: auto;
              min-height: auto;
              min-inline-size: auto;
              min-width: auto;
              outline-color: rgb(0, 0, 0);
              perspective-origin: 53.4062px 7.5px;
              text-align: center;
              text-decoration: none solid rgb(0, 0, 0);
              text-emphasis-color: rgb(0, 0, 0);
              text-transform: uppercase;
              transform-origin: 53.4102px 7.5px;
              user-select: none;
              width: 106.82px;
              -webkit-text-fill-color: rgb(0, 0, 0);
              -webkit-text-stroke-color: rgb(0, 0, 0);
            "
            >Book a Demo</span
          ></button
        ><a
          class="button cta-a"
          href="https://dashboard.accessibe.com/app/signup"
          target="_blank"
          data-acsb-tooltip="New Window"
          data-acsb-clickable="true"
          data-acsb-navigable="true"
          data-acsb-now-navigable="true"
          data-custom-button-processed="true"
          style="
            align-items: center;
            animation-duration: 0.001s;
            background-color: rgb(19, 110, 248);
            block-size: 40px;
            border-block-style: solid;
            border-block-width: 2px;
            border-radius: 50px;
            border-style: solid;
            border-width: 2px;
            border-end-end-radius: 50px;
            border-end-start-radius: 50px;
            border-inline-style: solid;
            border-inline-width: 2px;
            border-start-end-radius: 50px;
            border-start-start-radius: 50px;
            inset: 0px;
            box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px;
            caret-color: rgb(255, 255, 255);
            color: rgb(255, 255, 255);
            column-rule-color: rgb(255, 255, 255);
            cursor: pointer;
            display: flex;
            font-size: 14px;
            font-weight: 600;
            height: 40px;
            inline-size: 164.742px;
            inset-block: 0px;
            inset-inline: 0px;
            justify-content: center;
            letter-spacing: 0.3px;
            line-height: 14px;
            min-block-size: auto;
            min-height: auto;
            min-inline-size: auto;
            min-width: auto;
            outline-color: rgb(255, 255, 255);
            padding-block: 11px;
            padding: 11px 17px;
            padding-inline: 17px;
            perspective-origin: 82.3672px 20px;
            position: relative;
            text-decoration: none solid rgb(255, 255, 255);
            text-emphasis-color: rgb(255, 255, 255);
            text-transform: uppercase;
            text-wrap-mode: nowrap;
            transform-origin: 82.3711px 20px;
            user-select: none;
            width: 164.742px;
            -webkit-text-fill-color: rgb(255, 255, 255);
            -webkit-text-stroke-color: rgb(255, 255, 255);
          "
          ><span
            class="acsb-sr-only"
            data-acsb-sr-only="true"
            data-acsb-force-visible="true"
            data-acsb-sr-only-position="before"
            data-acsb-hidden="false"
            style="
              animation-duration: 0.001s;
              background-color: rgb(255, 255, 255);
              block-size: 1px;
              border-block-color: rgb(0, 0, 0);
              border-color: rgb(0, 0, 0);
              border-inline-color: rgb(0, 0, 0);
              inset: 0px 160.742px 36px 0px;
              caret-color: rgb(0, 0, 0);
              clip: rect(0px, 0px, 0px, 0px);
              color: rgb(0, 0, 0);
              column-rule-color: rgb(0, 0, 0);
              cursor: text;
              display: block;
              font-size: 15px;
              height: 1px;
              inline-size: 1px;
              inset-block: 0px 36px;
              inset-inline: 0px 160.742px;
              letter-spacing: 0.3px;
              line-height: 1px;
              margin-block-start: -1px;
              margin-inline-start: -1px;
              margin-left: -1px;
              margin-top: -1px;
              outline-color: rgb(0, 0, 0);
              overflow: hidden;
              perspective-origin: 0.5px 0.5px;
              position: absolute;
              text-decoration: none solid rgb(0, 0, 0);
              text-emphasis-color: rgb(0, 0, 0);
              text-transform: capitalize;
              text-wrap-mode: nowrap;
              transform-origin: 0.5px 0.5px;
              user-select: none;
              width: 1px;
              -webkit-text-fill-color: rgb(0, 0, 0);
              -webkit-text-stroke-color: rgb(0, 0, 0);
            "
            >account -
          </span>
          Start Free Trial
          <span
            class="acsb-sr-only"
            data-acsb-sr-only="true"
            data-acsb-force-visible="true"
            data-acsb-sr-only-position="after"
            data-acsb-hidden="false"
            style="
              animation-duration: 0.001s;
              background-color: rgb(255, 255, 255);
              block-size: 1px;
              border-block-color: rgb(0, 0, 0);
              border-color: rgb(0, 0, 0);
              border-inline-color: rgb(0, 0, 0);
              inset: 0px 160.742px 36px 0px;
              caret-color: rgb(0, 0, 0);
              clip: rect(0px, 0px, 0px, 0px);
              color: rgb(0, 0, 0);
              column-rule-color: rgb(0, 0, 0);
              cursor: text;
              display: block;
              font-size: 15px;
              height: 1px;
              inline-size: 1px;
              inset-block: 0px 36px;
              inset-inline: 0px 160.742px;
              letter-spacing: 0.3px;
              line-height: 1px;
              margin-block-start: -1px;
              margin-inline-start: -1px;
              margin-left: -1px;
              margin-top: -1px;
              outline-color: rgb(0, 0, 0);
              overflow: hidden;
              perspective-origin: 0.5px 0.5px;
              position: absolute;
              text-decoration: none solid rgb(0, 0, 0);
              text-emphasis-color: rgb(0, 0, 0);
              text-transform: capitalize;
              text-wrap-mode: nowrap;
              transform-origin: 0.5px 0.5px;
              user-select: none;
              width: 1px;
              -webkit-text-fill-color: rgb(0, 0, 0);
              -webkit-text-stroke-color: rgb(0, 0, 0);
            "
          >
            - New Window</span
          ></a
        >
      </div>
    </div>
  </div>
</header>
<style>
  [data-id="0"]::after {
    block-size: 0px;
    border-block-end-color: rgb(255, 255, 255);
    border-block-end-style: solid;
    border-block-end-width: 10px;
    border-block-start-color: rgba(0, 0, 0, 0);
    border-block-start-style: solid;
    border-bottom-color: rgb(255, 255, 255);
    border-bottom-style: solid;
    border-bottom-width: 10px;
    border-inline-end-color: rgba(0, 0, 0, 0);
    border-inline-end-style: solid;
    border-inline-end-width: 10px;
    border-inline-start-color: rgba(0, 0, 0, 0);
    border-inline-start-style: solid;
    border-inline-start-width: 10px;
    border-left-color: rgba(0, 0, 0, 0);
    border-left-style: solid;
    border-left-width: 10px;
    border-right-color: rgba(0, 0, 0, 0);
    border-right-style: solid;
    border-right-width: 10px;
    border-top-color: rgba(0, 0, 0, 0);
    border-top-style: solid;
    bottom: 0px;
    caret-color: rgb(10, 37, 64);
    color: rgb(10, 37, 64);
    column-rule-color: rgb(10, 37, 64);
    content: "";
    cursor: pointer;
    display: block;
    font-size: 14px;
    font-weight: 600;
    height: 0px;
    inline-size: 0px;
    inset-block-end: 0px;
    inset-block-start: 65px;
    inset-inline-end: 0px;
    inset-inline-start: 0px;
    left: 0px;
    line-height: 21px;
    margin-block-start: -10px;
    margin-inline-end: 45.0547px;
    margin-inline-start: 45.0469px;
    margin-left: 45.0469px;
    margin-right: 45.0547px;
    margin-top: -10px;
    opacity: 0;
    outline-color: rgb(10, 37, 64);
    perspective-origin: 10px 5px;
    position: absolute;
    right: 0px;
    text-decoration: none solid rgb(10, 37, 64);
    text-decoration-color: rgb(10, 37, 64);
    text-emphasis-color: rgb(10, 37, 64);
    text-transform: uppercase;
    top: 65px;
    transform-origin: 10px 5px;
    visibility: hidden;
    width: 0px;
    z-index: 999999;
    -webkit-text-fill-color: rgb(10, 37, 64);
    -webkit-text-stroke-color: rgb(10, 37, 64);
  }
  [data-id="0"]::before {
    block-size: 10px;
    border-block-end-color: rgb(10, 37, 64);
    border-block-start-color: rgb(10, 37, 64);
    border-bottom-color: rgb(10, 37, 64);
    border-bottom-left-radius: 50%;
    border-bottom-right-radius: 50%;
    border-end-end-radius: 50%;
    border-end-start-radius: 50%;
    border-inline-end-color: rgb(10, 37, 64);
    border-inline-start-color: rgb(10, 37, 64);
    border-left-color: rgb(10, 37, 64);
    border-right-color: rgb(10, 37, 64);
    border-start-end-radius: 50%;
    border-start-start-radius: 50%;
    border-top-color: rgb(10, 37, 64);
    border-top-left-radius: 50%;
    border-top-right-radius: 50%;
    bottom: 0px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 10px 0px;
    caret-color: rgb(10, 37, 64);
    color: rgb(10, 37, 64);
    column-rule-color: rgb(10, 37, 64);
    content: "";
    cursor: pointer;
    display: block;
    font-size: 14px;
    font-weight: 600;
    height: 10px;
    inline-size: 10px;
    inset-block-end: 0px;
    inset-block-start: 65px;
    inset-inline-end: 0px;
    inset-inline-start: 0px;
    left: 0px;
    line-height: 21px;
    margin-block-start: -10px;
    margin-inline-end: 50.0547px;
    margin-inline-start: 50.0469px;
    margin-left: 50.0469px;
    margin-right: 50.0547px;
    margin-top: -10px;
    opacity: 0;
    outline-color: rgb(10, 37, 64);
    perspective-origin: 5px 5px;
    position: absolute;
    right: 0px;
    text-decoration: none solid rgb(10, 37, 64);
    text-decoration-color: rgb(10, 37, 64);
    text-emphasis-color: rgb(10, 37, 64);
    text-transform: uppercase;
    top: 65px;
    transform-origin: 5px 5px;
    visibility: hidden;
    width: 10px;
    -webkit-text-fill-color: rgb(10, 37, 64);
    -webkit-text-stroke-color: rgb(10, 37, 64);
  }
  [data-id="1"]::before {
    block-size: 20px;
    content: "";
    display: block;
    height: 20px;
    inline-size: 100%;
    inset-block-start: -15px;
    inset-inline-start: 0px;
    left: 0px;
    pointer-events: none;
    position: absolute;
    top: -15px;
    visibility: hidden;
    width: 100%;
  }
  [data-id="2"]::after {
    block-size: 0px;
    border-block-end-color: rgb(255, 255, 255);
    border-block-end-style: solid;
    border-block-end-width: 10px;
    border-block-start-color: rgba(0, 0, 0, 0);
    border-block-start-style: solid;
    border-bottom-color: rgb(255, 255, 255);
    border-bottom-style: solid;
    border-bottom-width: 10px;
    border-inline-end-color: rgba(0, 0, 0, 0);
    border-inline-end-style: solid;
    border-inline-end-width: 10px;
    border-inline-start-color: rgba(0, 0, 0, 0);
    border-inline-start-style: solid;
    border-inline-start-width: 10px;
    border-left-color: rgba(0, 0, 0, 0);
    border-left-style: solid;
    border-left-width: 10px;
    border-right-color: rgba(0, 0, 0, 0);
    border-right-style: solid;
    border-right-width: 10px;
    border-top-color: rgba(0, 0, 0, 0);
    border-top-style: solid;
    bottom: 0px;
    caret-color: rgb(10, 37, 64);
    color: rgb(10, 37, 64);
    column-rule-color: rgb(10, 37, 64);
    content: "";
    cursor: pointer;
    display: block;
    font-size: 14px;
    font-weight: 600;
    height: 0px;
    inline-size: 0px;
    inset-block-end: 0px;
    inset-block-start: 65px;
    inset-inline-end: 0px;
    inset-inline-start: 0px;
    left: 0px;
    line-height: 21px;
    margin-block-start: -10px;
    margin-inline-end: 39.9609px;
    margin-inline-start: 39.9531px;
    margin-left: 39.9531px;
    margin-right: 39.9609px;
    margin-top: -10px;
    opacity: 0;
    outline-color: rgb(10, 37, 64);
    perspective-origin: 10px 5px;
    position: absolute;
    right: 0px;
    text-decoration: none solid rgb(10, 37, 64);
    text-decoration-color: rgb(10, 37, 64);
    text-emphasis-color: rgb(10, 37, 64);
    text-transform: uppercase;
    top: 65px;
    transform-origin: 10px 5px;
    visibility: hidden;
    width: 0px;
    z-index: 999999;
    -webkit-text-fill-color: rgb(10, 37, 64);
    -webkit-text-stroke-color: rgb(10, 37, 64);
  }
  [data-id="2"]::before {
    block-size: 10px;
    border-block-end-color: rgb(10, 37, 64);
    border-block-start-color: rgb(10, 37, 64);
    border-bottom-color: rgb(10, 37, 64);
    border-bottom-left-radius: 50%;
    border-bottom-right-radius: 50%;
    border-end-end-radius: 50%;
    border-end-start-radius: 50%;
    border-inline-end-color: rgb(10, 37, 64);
    border-inline-start-color: rgb(10, 37, 64);
    border-left-color: rgb(10, 37, 64);
    border-right-color: rgb(10, 37, 64);
    border-start-end-radius: 50%;
    border-start-start-radius: 50%;
    border-top-color: rgb(10, 37, 64);
    border-top-left-radius: 50%;
    border-top-right-radius: 50%;
    bottom: 0px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 10px 0px;
    caret-color: rgb(10, 37, 64);
    color: rgb(10, 37, 64);
    column-rule-color: rgb(10, 37, 64);
    content: "";
    cursor: pointer;
    display: block;
    font-size: 14px;
    font-weight: 600;
    height: 10px;
    inline-size: 10px;
    inset-block-end: 0px;
    inset-block-start: 65px;
    inset-inline-end: 0px;
    inset-inline-start: 0px;
    left: 0px;
    line-height: 21px;
    margin-block-start: -10px;
    margin-inline-end: 44.9609px;
    margin-inline-start: 44.9531px;
    margin-left: 44.9531px;
    margin-right: 44.9609px;
    margin-top: -10px;
    opacity: 0;
    outline-color: rgb(10, 37, 64);
    perspective-origin: 5px 5px;
    position: absolute;
    right: 0px;
    text-decoration: none solid rgb(10, 37, 64);
    text-decoration-color: rgb(10, 37, 64);
    text-emphasis-color: rgb(10, 37, 64);
    text-transform: uppercase;
    top: 65px;
    transform-origin: 5px 5px;
    visibility: hidden;
    width: 10px;
    -webkit-text-fill-color: rgb(10, 37, 64);
    -webkit-text-stroke-color: rgb(10, 37, 64);
  }
  [data-id="3"]::before {
    block-size: 20px;
    content: "";
    display: block;
    height: 20px;
    inline-size: 100%;
    inset-block-start: -15px;
    inset-inline-start: 0px;
    left: 0px;
    pointer-events: none;
    position: absolute;
    top: -15px;
    visibility: hidden;
    width: 100%;
  }
  [data-id="4"]::after {
    block-size: 0px;
    border-block-end-color: rgb(255, 255, 255);
    border-block-end-style: solid;
    border-block-end-width: 10px;
    border-block-start-color: rgba(0, 0, 0, 0);
    border-block-start-style: solid;
    border-bottom-color: rgb(255, 255, 255);
    border-bottom-style: solid;
    border-bottom-width: 10px;
    border-inline-end-color: rgba(0, 0, 0, 0);
    border-inline-end-style: solid;
    border-inline-end-width: 10px;
    border-inline-start-color: rgba(0, 0, 0, 0);
    border-inline-start-style: solid;
    border-inline-start-width: 10px;
    border-left-color: rgba(0, 0, 0, 0);
    border-left-style: solid;
    border-left-width: 10px;
    border-right-color: rgba(0, 0, 0, 0);
    border-right-style: solid;
    border-right-width: 10px;
    border-top-color: rgba(0, 0, 0, 0);
    border-top-style: solid;
    bottom: 0px;
    caret-color: rgb(10, 37, 64);
    color: rgb(10, 37, 64);
    column-rule-color: rgb(10, 37, 64);
    content: "";
    cursor: pointer;
    display: block;
    font-size: 14px;
    font-weight: 600;
    height: 0px;
    inline-size: 0px;
    inset-block-end: 0px;
    inset-block-start: 65px;
    inset-inline-end: 0px;
    inset-inline-start: 0px;
    left: 0px;
    line-height: 21px;
    margin-block-start: -10px;
    margin-inline-end: 43.4844px;
    margin-inline-start: 43.4766px;
    margin-left: 43.4766px;
    margin-right: 43.4844px;
    margin-top: -10px;
    opacity: 0;
    outline-color: rgb(10, 37, 64);
    perspective-origin: 10px 5px;
    position: absolute;
    right: 0px;
    text-decoration: none solid rgb(10, 37, 64);
    text-decoration-color: rgb(10, 37, 64);
    text-emphasis-color: rgb(10, 37, 64);
    text-transform: uppercase;
    top: 65px;
    transform-origin: 10px 5px;
    visibility: hidden;
    width: 0px;
    z-index: 999999;
    -webkit-text-fill-color: rgb(10, 37, 64);
    -webkit-text-stroke-color: rgb(10, 37, 64);
  }
  [data-id="4"]::before {
    block-size: 10px;
    border-block-end-color: rgb(10, 37, 64);
    border-block-start-color: rgb(10, 37, 64);
    border-bottom-color: rgb(10, 37, 64);
    border-bottom-left-radius: 50%;
    border-bottom-right-radius: 50%;
    border-end-end-radius: 50%;
    border-end-start-radius: 50%;
    border-inline-end-color: rgb(10, 37, 64);
    border-inline-start-color: rgb(10, 37, 64);
    border-left-color: rgb(10, 37, 64);
    border-right-color: rgb(10, 37, 64);
    border-start-end-radius: 50%;
    border-start-start-radius: 50%;
    border-top-color: rgb(10, 37, 64);
    border-top-left-radius: 50%;
    border-top-right-radius: 50%;
    bottom: 0px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 10px 0px;
    caret-color: rgb(10, 37, 64);
    color: rgb(10, 37, 64);
    column-rule-color: rgb(10, 37, 64);
    content: "";
    cursor: pointer;
    display: block;
    font-size: 14px;
    font-weight: 600;
    height: 10px;
    inline-size: 10px;
    inset-block-end: 0px;
    inset-block-start: 65px;
    inset-inline-end: 0px;
    inset-inline-start: 0px;
    left: 0px;
    line-height: 21px;
    margin-block-start: -10px;
    margin-inline-end: 48.4844px;
    margin-inline-start: 48.4766px;
    margin-left: 48.4766px;
    margin-right: 48.4844px;
    margin-top: -10px;
    opacity: 0;
    outline-color: rgb(10, 37, 64);
    perspective-origin: 5px 5px;
    position: absolute;
    right: 0px;
    text-decoration: none solid rgb(10, 37, 64);
    text-decoration-color: rgb(10, 37, 64);
    text-emphasis-color: rgb(10, 37, 64);
    text-transform: uppercase;
    top: 65px;
    transform-origin: 5px 5px;
    visibility: hidden;
    width: 10px;
    -webkit-text-fill-color: rgb(10, 37, 64);
    -webkit-text-stroke-color: rgb(10, 37, 64);
  }
  [data-id="5"]::before {
    block-size: 20px;
    content: "";
    display: block;
    height: 20px;
    inline-size: 100%;
    inset-block-start: -15px;
    inset-inline-start: 0px;
    left: 0px;
    pointer-events: none;
    position: absolute;
    top: -15px;
    visibility: hidden;
    width: 100%;
  }
  [data-id="6"]::after {
    block-size: 0px;
    border-block-end-color: rgb(255, 255, 255);
    border-block-end-style: solid;
    border-block-end-width: 10px;
    border-block-start-color: rgba(0, 0, 0, 0);
    border-block-start-style: solid;
    border-bottom-color: rgb(255, 255, 255);
    border-bottom-style: solid;
    border-bottom-width: 10px;
    border-inline-end-color: rgba(0, 0, 0, 0);
    border-inline-end-style: solid;
    border-inline-end-width: 10px;
    border-inline-start-color: rgba(0, 0, 0, 0);
    border-inline-start-style: solid;
    border-inline-start-width: 10px;
    border-left-color: rgba(0, 0, 0, 0);
    border-left-style: solid;
    border-left-width: 10px;
    border-right-color: rgba(0, 0, 0, 0);
    border-right-style: solid;
    border-right-width: 10px;
    border-top-color: rgba(0, 0, 0, 0);
    border-top-style: solid;
    bottom: 0px;
    caret-color: rgb(10, 37, 64);
    color: rgb(10, 37, 64);
    column-rule-color: rgb(10, 37, 64);
    content: "";
    cursor: pointer;
    display: block;
    font-size: 14px;
    font-weight: 600;
    height: 0px;
    inline-size: 0px;
    inset-block-end: 0px;
    inset-block-start: 65px;
    inset-inline-end: 0px;
    inset-inline-start: 0px;
    left: 0px;
    line-height: 21px;
    margin-block-start: -10px;
    margin-inline-end: 42.6953px;
    margin-inline-start: 42.6953px;
    margin-left: 42.6953px;
    margin-right: 42.6953px;
    margin-top: -10px;
    opacity: 0;
    outline-color: rgb(10, 37, 64);
    perspective-origin: 10px 5px;
    position: absolute;
    right: 0px;
    text-decoration: none solid rgb(10, 37, 64);
    text-decoration-color: rgb(10, 37, 64);
    text-emphasis-color: rgb(10, 37, 64);
    text-transform: uppercase;
    top: 65px;
    transform-origin: 10px 5px;
    visibility: hidden;
    width: 0px;
    z-index: 999999;
    -webkit-text-fill-color: rgb(10, 37, 64);
    -webkit-text-stroke-color: rgb(10, 37, 64);
  }
  [data-id="6"]::before {
    block-size: 10px;
    border-block-end-color: rgb(10, 37, 64);
    border-block-start-color: rgb(10, 37, 64);
    border-bottom-color: rgb(10, 37, 64);
    border-bottom-left-radius: 50%;
    border-bottom-right-radius: 50%;
    border-end-end-radius: 50%;
    border-end-start-radius: 50%;
    border-inline-end-color: rgb(10, 37, 64);
    border-inline-start-color: rgb(10, 37, 64);
    border-left-color: rgb(10, 37, 64);
    border-right-color: rgb(10, 37, 64);
    border-start-end-radius: 50%;
    border-start-start-radius: 50%;
    border-top-color: rgb(10, 37, 64);
    border-top-left-radius: 50%;
    border-top-right-radius: 50%;
    bottom: 0px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 10px 0px;
    caret-color: rgb(10, 37, 64);
    color: rgb(10, 37, 64);
    column-rule-color: rgb(10, 37, 64);
    content: "";
    cursor: pointer;
    display: block;
    font-size: 14px;
    font-weight: 600;
    height: 10px;
    inline-size: 10px;
    inset-block-end: 0px;
    inset-block-start: 65px;
    inset-inline-end: 0px;
    inset-inline-start: 0px;
    left: 0px;
    line-height: 21px;
    margin-block-start: -10px;
    margin-inline-end: 47.6953px;
    margin-inline-start: 47.6953px;
    margin-left: 47.6953px;
    margin-right: 47.6953px;
    margin-top: -10px;
    opacity: 0;
    outline-color: rgb(10, 37, 64);
    perspective-origin: 5px 5px;
    position: absolute;
    right: 0px;
    text-decoration: none solid rgb(10, 37, 64);
    text-decoration-color: rgb(10, 37, 64);
    text-emphasis-color: rgb(10, 37, 64);
    text-transform: uppercase;
    top: 65px;
    transform-origin: 5px 5px;
    visibility: hidden;
    width: 10px;
    -webkit-text-fill-color: rgb(10, 37, 64);
    -webkit-text-stroke-color: rgb(10, 37, 64);
  }
  [data-id="7"]::before {
    block-size: 20px;
    content: "";
    display: block;
    height: 20px;
    inline-size: 100%;
    inset-block-start: -15px;
    inset-inline-start: 0px;
    left: 0px;
    pointer-events: none;
    position: absolute;
    top: -15px;
    visibility: hidden;
    width: 100%;
  }
  [data-id="8"]::after {
    block-size: 0px;
    border-block-end-color: rgb(255, 255, 255);
    border-block-end-style: solid;
    border-block-end-width: 10px;
    border-block-start-color: rgba(0, 0, 0, 0);
    border-block-start-style: solid;
    border-bottom-color: rgb(255, 255, 255);
    border-bottom-style: solid;
    border-bottom-width: 10px;
    border-inline-end-color: rgba(0, 0, 0, 0);
    border-inline-end-style: solid;
    border-inline-end-width: 10px;
    border-inline-start-color: rgba(0, 0, 0, 0);
    border-inline-start-style: solid;
    border-inline-start-width: 10px;
    border-left-color: rgba(0, 0, 0, 0);
    border-left-style: solid;
    border-left-width: 10px;
    border-right-color: rgba(0, 0, 0, 0);
    border-right-style: solid;
    border-right-width: 10px;
    border-top-color: rgba(0, 0, 0, 0);
    border-top-style: solid;
    bottom: 0px;
    caret-color: rgb(10, 37, 64);
    color: rgb(10, 37, 64);
    column-rule-color: rgb(10, 37, 64);
    content: "";
    cursor: pointer;
    display: block;
    font-size: 14px;
    font-weight: 600;
    height: 0px;
    inline-size: 0px;
    inset-block-end: 0px;
    inset-block-start: 65px;
    inset-inline-end: 0px;
    inset-inline-start: 0px;
    left: 0px;
    line-height: 21px;
    margin-block-start: -10px;
    margin-inline-end: 30.7812px;
    margin-inline-start: 30.7812px;
    margin-left: 30.7812px;
    margin-right: 30.7812px;
    margin-top: -10px;
    opacity: 0;
    outline-color: rgb(10, 37, 64);
    perspective-origin: 10px 5px;
    position: absolute;
    right: 0px;
    text-decoration: none solid rgb(10, 37, 64);
    text-decoration-color: rgb(10, 37, 64);
    text-emphasis-color: rgb(10, 37, 64);
    text-transform: uppercase;
    top: 65px;
    transform-origin: 10px 5px;
    visibility: hidden;
    width: 0px;
    z-index: 999999;
    -webkit-text-fill-color: rgb(10, 37, 64);
    -webkit-text-stroke-color: rgb(10, 37, 64);
  }
  [data-id="8"]::before {
    block-size: 10px;
    border-block-end-color: rgb(10, 37, 64);
    border-block-start-color: rgb(10, 37, 64);
    border-bottom-color: rgb(10, 37, 64);
    border-bottom-left-radius: 50%;
    border-bottom-right-radius: 50%;
    border-end-end-radius: 50%;
    border-end-start-radius: 50%;
    border-inline-end-color: rgb(10, 37, 64);
    border-inline-start-color: rgb(10, 37, 64);
    border-left-color: rgb(10, 37, 64);
    border-right-color: rgb(10, 37, 64);
    border-start-end-radius: 50%;
    border-start-start-radius: 50%;
    border-top-color: rgb(10, 37, 64);
    border-top-left-radius: 50%;
    border-top-right-radius: 50%;
    bottom: 0px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 10px 0px;
    caret-color: rgb(10, 37, 64);
    color: rgb(10, 37, 64);
    column-rule-color: rgb(10, 37, 64);
    content: "";
    cursor: pointer;
    display: block;
    font-size: 14px;
    font-weight: 600;
    height: 10px;
    inline-size: 10px;
    inset-block-end: 0px;
    inset-block-start: 65px;
    inset-inline-end: 0px;
    inset-inline-start: 0px;
    left: 0px;
    line-height: 21px;
    margin-block-start: -10px;
    margin-inline-end: 35.7812px;
    margin-inline-start: 35.7812px;
    margin-left: 35.7812px;
    margin-right: 35.7812px;
    margin-top: -10px;
    opacity: 0;
    outline-color: rgb(10, 37, 64);
    perspective-origin: 5px 5px;
    position: absolute;
    right: 0px;
    text-decoration: none solid rgb(10, 37, 64);
    text-decoration-color: rgb(10, 37, 64);
    text-emphasis-color: rgb(10, 37, 64);
    text-transform: uppercase;
    top: 65px;
    transform-origin: 5px 5px;
    visibility: hidden;
    width: 10px;
    -webkit-text-fill-color: rgb(10, 37, 64);
    -webkit-text-stroke-color: rgb(10, 37, 64);
  }
  [data-id="9"]::after {
    block-size: 0px;
    border-block-end-color: rgb(255, 255, 255);
    border-block-end-style: solid;
    border-block-end-width: 10px;
    border-block-start-color: rgba(0, 0, 0, 0);
    border-block-start-style: solid;
    border-bottom-color: rgb(255, 255, 255);
    border-bottom-style: solid;
    border-bottom-width: 10px;
    border-inline-end-color: rgba(0, 0, 0, 0);
    border-inline-end-style: solid;
    border-inline-end-width: 10px;
    border-inline-start-color: rgba(0, 0, 0, 0);
    border-inline-start-style: solid;
    border-inline-start-width: 10px;
    border-left-color: rgba(0, 0, 0, 0);
    border-left-style: solid;
    border-left-width: 10px;
    border-right-color: rgba(0, 0, 0, 0);
    border-right-style: solid;
    border-right-width: 10px;
    border-top-color: rgba(0, 0, 0, 0);
    border-top-style: solid;
    bottom: 0px;
    caret-color: rgb(10, 37, 64);
    color: rgb(10, 37, 64);
    column-rule-color: rgb(10, 37, 64);
    content: "";
    cursor: pointer;
    display: block;
    font-size: 14px;
    font-weight: 600;
    height: 0px;
    inline-size: 0px;
    inset-block-end: 0px;
    inset-block-start: 65px;
    inset-inline-end: 0px;
    inset-inline-start: 0px;
    left: 0px;
    line-height: 21px;
    margin-block-start: -10px;
    margin-inline-end: 28.9531px;
    margin-inline-start: 28.9453px;
    margin-left: 28.9453px;
    margin-right: 28.9531px;
    margin-top: -10px;
    opacity: 0;
    outline-color: rgb(10, 37, 64);
    perspective-origin: 10px 5px;
    position: absolute;
    right: 0px;
    text-decoration: none solid rgb(10, 37, 64);
    text-decoration-color: rgb(10, 37, 64);
    text-emphasis-color: rgb(10, 37, 64);
    text-transform: uppercase;
    top: 65px;
    transform-origin: 10px 5px;
    visibility: hidden;
    width: 0px;
    z-index: 999999;
    -webkit-text-fill-color: rgb(10, 37, 64);
    -webkit-text-stroke-color: rgb(10, 37, 64);
  }
  [data-id="9"]::before {
    block-size: 10px;
    border-block-end-color: rgb(10, 37, 64);
    border-block-start-color: rgb(10, 37, 64);
    border-bottom-color: rgb(10, 37, 64);
    border-bottom-left-radius: 50%;
    border-bottom-right-radius: 50%;
    border-end-end-radius: 50%;
    border-end-start-radius: 50%;
    border-inline-end-color: rgb(10, 37, 64);
    border-inline-start-color: rgb(10, 37, 64);
    border-left-color: rgb(10, 37, 64);
    border-right-color: rgb(10, 37, 64);
    border-start-end-radius: 50%;
    border-start-start-radius: 50%;
    border-top-color: rgb(10, 37, 64);
    border-top-left-radius: 50%;
    border-top-right-radius: 50%;
    bottom: 0px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 10px 0px;
    caret-color: rgb(10, 37, 64);
    color: rgb(10, 37, 64);
    column-rule-color: rgb(10, 37, 64);
    content: "";
    cursor: pointer;
    display: block;
    font-size: 14px;
    font-weight: 600;
    height: 10px;
    inline-size: 10px;
    inset-block-end: 0px;
    inset-block-start: 65px;
    inset-inline-end: 0px;
    inset-inline-start: 0px;
    left: 0px;
    line-height: 21px;
    margin-block-start: -10px;
    margin-inline-end: 33.9531px;
    margin-inline-start: 33.9453px;
    margin-left: 33.9453px;
    margin-right: 33.9531px;
    margin-top: -10px;
    opacity: 0;
    outline-color: rgb(10, 37, 64);
    perspective-origin: 5px 5px;
    position: absolute;
    right: 0px;
    text-decoration: none solid rgb(10, 37, 64);
    text-decoration-color: rgb(10, 37, 64);
    text-emphasis-color: rgb(10, 37, 64);
    text-transform: uppercase;
    top: 65px;
    transform-origin: 5px 5px;
    visibility: hidden;
    width: 10px;
    -webkit-text-fill-color: rgb(10, 37, 64);
    -webkit-text-stroke-color: rgb(10, 37, 64);
  }
</style>` },
  { filename: "breadcrumb nav list items mixed inline displays", content: `<nav class="breadcrumbs" itemtype="https://schema.org/BreadcrumbList">
  <li itemprop="itemListElement" itemtype="http://schema.org/ListItem">
    <a itemprop="item" href="/blog/" data-wpel-link="internal">
      <span itemprop="name">Blog</span>
      <span itemprop="name">Blog</span>
    </a>
  </li>
  <li itemprop="itemListElement" itemscope="" itemtype="http://schema.org/ListItem">
    <a data-utm-content="breadcrumbs" itemprop="item" href="/blog/1">
      <span itemprop="name">Security</span>
      <meta itemprop="position" content="2" />
    </a>
  </li>
  <li itemprop="itemListElement" itemscope="" itemtype="http://schema.org/ListItem">
    <a data-utm-content="breadcrumbs" itemprop="item" href="/blog/1/2">
      <span itemprop="name">Security</span>
      <meta itemprop="position" content="2" />
    </a>
  </li>
  <li itemprop="itemListElement" itemscope="" itemtype="http://schema.org/ListItem">
    <a data-utm-content="breadcrumbs" itemprop="item" href="/blog/1/2/3">
      <span itemprop="name">Security</span>
      <meta itemprop="position" content="2" />
    </a>
  </li>
</nav>

<style>
  .breadcrumbs {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .breadcrumbs li {
    display: inline;
    font-family: var(--font-family-primary);
    font-weight: 400;
    font-size: 16px;
    line-height: 32px;
    color: #7c889d;
  }

  .breadcrumbs li:not(:last-child) {
    display: -webkit-inline-box;
    display: -webkit-inline-flex;
    display: -moz-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -moz-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }

  .breadcrumbs li:not(:last-child):after {
    content: "";
    width: 12px;
    height: 16px;
    margin: 0 3px 0 8px;
    display: inline-block;
    background-image: url(./icon-slash.svg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
  }

  .breadcrumbs li a {
    color: var(--color-green);
    font-weight: 700;
  }

  .breadcrumbs li a:hover {
    color: var(--color-green-hover);
  }
</style>` },
  { filename: "breadcrumb role navigation list items mixed inline displays", content: `<ul role="navigation" class="breadcrumbs" itemtype="https://schema.org/BreadcrumbList">
  <li itemprop="itemListElement" itemtype="http://schema.org/ListItem">
    <a itemprop="item" href="/blog/" data-wpel-link="internal">
      <span itemprop="name">Blog</span>
      <span itemprop="name">Blog</span>
    </a>
  </li>
  <li itemprop="itemListElement" itemscope="" itemtype="http://schema.org/ListItem">
    <a data-utm-content="breadcrumbs" itemprop="item" href="/blog/1">
      <span itemprop="name">Security</span>
      <meta itemprop="position" content="2" />
    </a>
  </li>
  <li itemprop="itemListElement" itemscope="" itemtype="http://schema.org/ListItem">
    <a data-utm-content="breadcrumbs" itemprop="item" href="/blog/1/2">
      <span itemprop="name">Security</span>
      <meta itemprop="position" content="2" />
    </a>
  </li>
  <li itemprop="itemListElement" itemscope="" itemtype="http://schema.org/ListItem">
    <a data-utm-content="breadcrumbs" itemprop="item" href="/blog/1/2/3">
      <span itemprop="name">Security</span>
      <meta itemprop="position" content="2" />
    </a>
  </li>
</ul>

<style>
  .breadcrumbs {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .breadcrumbs li {
    display: inline;
    font-family: var(--font-family-primary);
    font-weight: 400;
    font-size: 16px;
    line-height: 32px;
    color: #7c889d;
  }

  .breadcrumbs li:not(:last-child) {
    display: -webkit-inline-box;
    display: -webkit-inline-flex;
    display: -moz-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -moz-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }

  .breadcrumbs li:not(:last-child):after {
    content: "";
    width: 12px;
    height: 16px;
    margin: 0 3px 0 8px;
    display: inline-block;
    background-image: url(./icon-slash.svg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
  }

  .breadcrumbs li a {
    color: var(--color-green);
    font-weight: 700;
  }

  .breadcrumbs li a:hover {
    color: var(--color-green-hover);
  }
</style>` },
  { filename: "bsnsports com main menu", content: `<div
  id="test"
  class="relative flex"
  role="navigation"
  aria-label="Page Menu"
  style="animation-duration: 0.001s; block-size: 97px; inset: 0px; display: flex; height: 97px; inline-size: 780.141px; inset-block: 0px; inset-inline: 0px; min-block-size: auto; min-height: auto; min-inline-size: auto; min-width: auto; perspective-origin: 390.07px 48.5px; position: relative; transform-origin: 390.07px 48.5px; width: 780.141px"
>
  <ul
    class="flex preflight-list items-end gap-8 pl-5 text-center"
    data-acsb-menu="ul"
    aria-label="Main Menu"
    style="
      align-items: flex-end;
      animation-duration: 0.001s;
      block-size: 97px;
      gap: 32px;
      display: flex;
      height: 97px;
      inline-size: 780.148px;
      list-style-type: none;
      min-block-size: auto;
      min-height: auto;
      min-inline-size: auto;
      min-width: auto;
      padding-inline-start: 20px;
      padding-left: 20px;
      perspective-origin: 390.07px 48.5px;
      text-align: center;
      transform-origin: 390.074px 48.5px;
      width: 780.148px;
    "
  >
    <li
      class="mb-[9px]! flex h-22 items-end"
      style="
        align-items: flex-end;
        animation-duration: 0.001s;
        block-size: 88px;
        display: flex;
        height: 88px;
        inline-size: 90px;
        list-style-type: none;
        margin-block-end: 9px;
        margin-bottom: 9px;
        min-block-size: auto;
        min-height: auto;
        min-inline-size: auto;
        min-width: auto;
        perspective-origin: 45px 44px;
        text-align: center;
        transform-origin: 45px 44px;
        width: 90px;
      "
    >
      <a
        class=""
        href="/"
        data-acsb-clickable="true"
        data-acsb-navigable="true"
        data-acsb-now-navigable="true"
        data-custom-button-processed="true"
        style="
          animation-duration: 0.001s;
          block-size: 90px;
          border-block-color: rgb(0, 0, 238);
          border-color: rgb(0, 0, 238);
          border-inline-color: rgb(0, 0, 238);
          caret-color: rgb(0, 0, 238);
          color: rgb(0, 0, 238);
          column-rule-color: rgb(0, 0, 238);
          cursor: pointer;
          display: block;
          height: 90px;
          inline-size: 90px;
          list-style-type: none;
          min-block-size: auto;
          min-height: auto;
          min-inline-size: auto;
          min-width: auto;
          outline-color: rgb(0, 0, 238);
          perspective-origin: 45px 45px;
          text-align: center;
          text-decoration: underline solid rgb(0, 0, 238);
          text-emphasis-color: rgb(0, 0, 238);
          transform-origin: 45px 45px;
          width: 90px;
          -webkit-text-decorations-in-effect: underline;
          -webkit-text-fill-color: rgb(0, 0, 238);
          -webkit-text-stroke-color: rgb(0, 0, 238);
        "
        ><span
          class="sr-only acsb-sr-only"
          data-acsb-hidden="false"
          data-acsb-sr-only="true"
          data-acsb-force-visible="true"
          style="
            animation-duration: 0.001s;
            background-color: rgb(255, 255, 255);
            block-size: 1px;
            inset: 0px 780.195px 97px 0px;
            clip: rect(0px, 0px, 0px, 0px);
            cursor: text;
            display: block;
            font-size: 15px;
            height: 1px;
            inline-size: 1px;
            inset-block: 0px 97px;
            inset-inline: 0px 780.195px;
            line-height: 1px;
            list-style-type: none;
            margin-block-start: -1px;
            margin-inline-start: -1px;
            margin-left: -1px;
            margin-top: -1px;
            overflow-block: hidden;
            overflow-inline: hidden;
            overflow: hidden;
            perspective-origin: 0.5px 0.5px;
            position: absolute;
            text-align: center;
            text-transform: capitalize;
            text-wrap-mode: nowrap;
            transform-origin: 0.5px 0.5px;
            width: 1px;
          "
          >BSN SPORTS</span
        ><!--\$--><svg
          fill="currentColor"
          viewBox="0 0 90 84"
          xmlns="http://www.w3.org/2000/svg"
          class="shrink-0 h-[5.625rem] w-[5.625rem]"
          data-acsb-hidden="true"
          role="presentation"
          style="
            animation-duration: 0.001s;
            block-size: 90px;
            border-block-color: rgb(0, 0, 238);
            border-color: rgb(0, 0, 238);
            border-inline-color: rgb(0, 0, 238);
            caret-color: rgb(0, 0, 238);
            color: rgb(0, 0, 238);
            column-rule-color: rgb(0, 0, 238);
            cursor: pointer;
            fill: rgb(0, 0, 238);
            flex-shrink: 0;
            height: 90px;
            inline-size: 90px;
            list-style-type: none;
            outline-color: rgb(0, 0, 238);
            overflow-block: hidden;
            overflow-clip-margin: content-box;
            overflow-inline: hidden;
            overflow: hidden;
            perspective-origin: 45px 45px;
            text-align: center;
            text-decoration: none solid rgb(0, 0, 238);
            text-emphasis-color: rgb(0, 0, 238);
            transform-origin: 45px 45px;
            width: 90px;
            -webkit-text-fill-color: rgb(0, 0, 238);
            -webkit-text-stroke-color: rgb(0, 0, 238);
          "
        >
          <path clip-rule="evenodd" d="m51.406 2.319-31.144 58.9 51.832-15.657-11.88-7.485-30.86 17.695 26.63-29.259-4.578-24.194Z" fill="#BA172B" fill-rule="evenodd"></path>
          <path
            clip-rule="evenodd"
            d="m39.594 75.907-1.224-.718c-.557-.312-.955-.625-1.193-.906-.255-.297-.366-.594-.366-.922 0-.374.175-.671.509-.921.334-.234.763-.36 1.288-.36.588 0 1.16.157 1.701.454l.907-1.047v-.062a4.578 4.578 0 0 0-2.576-.781c-.986 0-1.781.265-2.385.812-.605.546-.923 1.25-.923 2.108 0 .578.16 1.094.493 1.531.318.438.875.89 1.638 1.36l1.224.733c.986.594 1.48 1.234 1.48 1.906 0 .406-.176.75-.494 1.03-.334.282-.747.407-1.256.407-.843 0-1.622-.297-2.321-.906l-.923 1.047c.652.515 2.163 1.234 3.26 1.234.97 0 1.75-.282 2.353-.828.605-.547.907-1.266.907-2.156-.048-1.187-.732-2.218-2.1-3.014ZM43.123 81.828V70.8h3.562c1.066 0 1.924.281 2.56.859.637.562.955 1.328.955 2.28 0 .64-.16 1.203-.493 1.703-.334.5-.78.86-1.336 1.078-.573.219-1.384.328-2.449.328H44.73v4.78h-1.606Zm3.276-9.622h-1.67v3.452h1.766c.652 0 1.16-.157 1.51-.453.35-.297.525-.734.525-1.297 0-1.14-.716-1.702-2.13-1.702ZM70.68 81.828l-2.67-5.436c.397-.219.715-.5.97-.844a2.875 2.875 0 0 0 .492-1.655c0-.938-.334-1.687-1.002-2.234-.668-.547-1.574-.828-2.703-.828h-2.814v11.012h1.606v-4.795h.334l1.16-.078.382-.094 2.449 4.967h1.797v-.015Zm-5.517-6.202h-.604v-3.483h.477c.779 0 1.351.063 1.685.172.334.11.604.312.795.594.191.28.286.593.286.937 0 .359-.079.671-.254.937a1.672 1.672 0 0 1-.7.625c-.318.156-.874.218-1.685.218ZM56.322 70.66c1.59 0 2.91.53 3.975 1.624 1.05 1.077 1.59 2.42 1.59 4.045s-.525 2.968-1.606 4.03c-1.065 1.062-2.417 1.594-4.039 1.594-1.542 0-2.846-.532-3.88-1.594-1.033-1.062-1.542-2.405-1.542-3.998 0-1.64.525-3 1.558-4.077 1.034-1.094 2.353-1.625 3.944-1.625Zm.063 1.499c-1.176 0-2.146.39-2.894 1.187-.763.796-1.145 1.796-1.145 3.014 0 1.188.382 2.172 1.145 2.968.764.781 1.718 1.187 2.846 1.187 1.145 0 2.1-.406 2.879-1.202.763-.797 1.145-1.812 1.145-3 0-1.17-.382-2.14-1.145-2.936-.78-.828-1.718-1.218-2.83-1.218ZM71.285 70.8l-1.161 1.328v.078h3.848v9.621h1.606v-9.621h3.912V70.8h-8.205ZM9.731 78.641c0 .937-.333 1.687-.985 2.25-.652.562-1.575.843-2.751.843H0V70.815h4.945c.7 0 1.304.063 1.813.204.509.124.938.312 1.24.546.318.234.557.5.716.812.159.313.238.657.238 1.016 0 .406-.08.765-.238 1.109a2.402 2.402 0 0 1-.604.828 2.343 2.343 0 0 1-.716.468c.763.297 1.336.672 1.733 1.11.414.437.604 1.03.604 1.733Zm-3.911-4.67c0-.531-.175-.875-.525-1.047-.35-.172-.906-.265-1.654-.265h-.7v4.31l1.082-1.686c.763 0 .954-.078 1.288-.25.334-.188.509-.547.509-1.062Zm.556 4.545c0-.937-.7-1.406-2.067-1.406H2.942v2.796h1.367c1.368 0 2.067-.468 2.067-1.39ZM17.746 75.939a19.2 19.2 0 0 0-2.051-1.062c-.478-.22-.811-.422-1.002-.578-.191-.157-.287-.344-.287-.563 0-.234.096-.421.287-.578.19-.156.493-.234.906-.234.636 0 1.24.125 1.797.375a.121.121 0 0 0 .063.031l1.448-1.671v-.063a5.543 5.543 0 0 0-.7-.343c-.334-.156-.78-.281-1.304-.406a8.407 8.407 0 0 0-1.717-.172c-.875 0-1.606.14-2.21.422-.605.28-1.05.656-1.352 1.14-.286.468-.445 1-.445 1.593 0 .61.143 1.14.445 1.578.286.453.668.812 1.129 1.109.46.297 1.002.578 1.606.828.556.218.97.421 1.256.624.286.203.43.453.43.75 0 .172-.08.344-.255.531-.16.188-.54.281-1.113.281-.62 0-1.209-.109-1.75-.343a7.997 7.997 0 0 1-.906-.438l-1.399 1.61c.747.577 1.829 1.093 2.385 1.233.557.125 1.002.203 1.336.234.334.032.62.047.843.047.826 0 1.558-.14 2.194-.406.636-.265 1.129-.64 1.495-1.14.35-.5.54-1.093.54-1.765 0-.61-.143-1.125-.445-1.547a4.11 4.11 0 0 0-1.224-1.077ZM31.818 81.75h-.302l-7.25-6.092v6.091h-3.324V70.815h.302l7.22 6.061v-6.06h3.354v10.933ZM84.323 75.907 83.1 75.19c-.556-.312-.954-.625-1.193-.906-.254-.297-.365-.594-.365-.922 0-.374.175-.671.509-.921.334-.234.763-.36 1.288-.36.588 0 1.16.157 1.701.454l.906-1.047v-.062a4.578 4.578 0 0 0-2.576-.781c-.986 0-1.78.265-2.385.812-.604.546-.922 1.25-.922 2.108 0 .578.159 1.094.477 1.531.318.438.875.89 1.638 1.36l1.224.733c.986.594 1.479 1.234 1.479 1.906 0 .406-.175.75-.509 1.03-.334.282-.747.407-1.256.407-.875 0-1.67-.312-2.385-.953l-.89 1.031v.047c.62.5 2.194 1.265 3.29 1.265.97 0 1.75-.28 2.354-.828.605-.546.907-1.265.907-2.155-.016-1.203-.7-2.234-2.068-3.03ZM89.73 72.08l-.048-.843c0-.11 0-.25-.016-.406h-.016c-.032.125-.08.297-.127.422l-.27.796h-.302l-.27-.812c-.032-.11-.064-.281-.096-.406h-.016c0 .125 0 .266-.016.406l-.048.844h-.27l.111-1.437h.43l.254.703c.032.109.064.218.096.359.031-.125.063-.25.095-.36l.254-.702h.414L90 72.08h-.27Zm-1.574-1.42v.234h-.462v1.202h-.286v-1.203h-.46v-.234h1.208Z"
            fill="#1D1F1F"
            fill-rule="evenodd"
          ></path>
        </svg>
        <span
          style="
            position: absolute;
            padding: 0px !important;
            clip: rect(0px, 0px, 0px, 0px);
            border: 0px !important;
            animation-duration: 0.001s;
            background-color: rgb(255, 255, 255);
            block-size: 1px;
            inset: 0px 780.195px 97px 0px;
            cursor: text;
            display: block;
            font-size: 15px;
            height: 1px;
            inline-size: 1px;
            inset-block: 0px 97px;
            inset-inline: 0px 780.195px;
            line-height: 1px;
            list-style-type: none;
            margin-block-start: -1px;
            margin-inline-start: -1px;
            margin-left: -1px;
            margin-top: -1px;
            overflow-block: hidden;
            overflow-inline: hidden;
            overflow: hidden;
            perspective-origin: 0.5px 0.5px;
            text-align: center;
            text-transform: capitalize;
            transform-origin: 0.5px 0.5px;
            width: 1px;
          "
          data-acsb-hidden="false"
          data-acsb-sr-only="true"
          class="acsb-sr-only"
          data-acsb-force-visible="true"
        >
          | Redirects to homepage</span
        ></a
      >
    </li>
    <li
      class="relative flex"
      data-acsb-menu="li"
      data-acsb-menu-root="true"
      style="
        animation-duration: 0.001s;
        block-size: 40px;
        inset: 0px;
        display: flex;
        height: 40px;
        inline-size: 120.898px;
        inset-block: 0px;
        inset-inline: 0px;
        list-style-type: none;
        min-block-size: auto;
        min-height: auto;
        min-inline-size: auto;
        min-width: auto;
        perspective-origin: 60.4453px 20px;
        position: relative;
        text-align: center;
        transform-origin: 60.4492px 20px;
        width: 120.898px;
      "
    >
      <div
        class="inline-block w-full cursor-pointer"
        style="animation-duration: 0.001s; block-size: 40px; cursor: pointer; height: 40px; inline-size: 120.906px; list-style-type: none; min-block-size: auto; min-height: auto; min-inline-size: auto; min-width: auto; perspective-origin: 60.4531px 20px; text-align: center; transform-origin: 60.4531px 20px; width: 120.906px"
      >
        <a
          data-accent="false"
          data-state="closed"
          data-text="Sports Solutions"
          class="group relative inline-block w-full preflight-button py-2 no-underline after:pointer-events-none after:invisible after:block after:h-0 after:overflow-hidden after:font-bold after:content-[attr(data-text)] after:select-none hover:font-bold"
          href="/sports/"
          data-acsb-clickable="true"
          data-acsb-navigable="true"
          data-acsb-now-navigable="true"
          data-custom-button-processed="true"
          data-acsb-menu="a"
          data-acsb-menu-root-link="true"
          data-acsb-tooltip="Use ←/→ to navigate"
          style="
            animation-duration: 0.001s;
            block-size: 40px;
            inset: 0px;
            box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px;
            cursor: pointer;
            display: inline-block;
            height: 40px;
            inline-size: 120.914px;
            inset-block: 0px;
            inset-inline: 0px;
            list-style-type: none;
            padding-block: 8px;
            padding-bottom: 8px;
            padding-top: 8px;
            perspective-origin: 60.4531px 20px;
            position: relative;
            text-align: center;
            transform-origin: 60.457px 20px;
            width: 120.914px;
          "
          data-id="0"
          >Sports Solutions
          <div
            class="absolute bottom-0 left-0 h-1 w-0 bg-primary transition-all group-hover:w-1/3 group-data-[state=open]:w-1/3"
            data-acsb-hidden="true"
            style="
              animation-duration: 0.001s;
              background-color: rgb(186, 23, 43);
              block-size: 4px;
              inset: 36px 120.914px 0px 0px;
              cursor: pointer;
              height: 4px;
              inline-size: 0px;
              inset-block: 36px 0px;
              inset-inline: 0px 120.914px;
              list-style-type: none;
              perspective-origin: 0px 2px;
              position: absolute;
              text-align: center;
              transform-origin: 0px 2px;
              width: 0px;
            "
          ></div
        ></a>
      </div>
    </li>
    <li
      class="relative flex"
      data-acsb-menu="li"
      data-acsb-menu-root="true"
      style="
        animation-duration: 0.001s;
        block-size: 40px;
        inset: 0px;
        display: flex;
        height: 40px;
        inline-size: 110.852px;
        inset-block: 0px;
        inset-inline: 0px;
        list-style-type: none;
        min-block-size: auto;
        min-height: auto;
        min-inline-size: auto;
        min-width: auto;
        perspective-origin: 55.4219px 20px;
        position: relative;
        text-align: center;
        transform-origin: 55.4258px 20px;
        width: 110.852px;
      "
    >
      <div
        class="inline-block w-full cursor-pointer"
        style="animation-duration: 0.001s; block-size: 40px; cursor: pointer; height: 40px; inline-size: 110.852px; list-style-type: none; min-block-size: auto; min-height: auto; min-inline-size: auto; min-width: auto; perspective-origin: 55.4219px 20px; text-align: center; transform-origin: 55.4258px 20px; width: 110.852px"
      >
        <a
          data-accent="false"
          data-state="closed"
          data-text="Team Uniforms"
          class="group relative inline-block w-full preflight-button py-2 no-underline after:pointer-events-none after:invisible after:block after:h-0 after:overflow-hidden after:font-bold after:content-[attr(data-text)] after:select-none hover:font-bold"
          href="/team-uniforms/"
          data-acsb-clickable="true"
          data-acsb-navigable="true"
          data-acsb-now-navigable="true"
          data-custom-button-processed="true"
          data-acsb-menu="a"
          data-acsb-menu-root-link="true"
          style="
            animation-duration: 0.001s;
            block-size: 40px;
            inset: 0px;
            box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px;
            cursor: pointer;
            display: inline-block;
            height: 40px;
            inline-size: 110.859px;
            inset-block: 0px;
            inset-inline: 0px;
            list-style-type: none;
            padding-block: 8px;
            padding-bottom: 8px;
            padding-top: 8px;
            perspective-origin: 55.4297px 20px;
            position: relative;
            text-align: center;
            transform-origin: 55.4297px 20px;
            width: 110.859px;
          "
          data-id="1"
          >Team Uniforms
          <div
            class="absolute bottom-0 left-0 h-1 w-0 bg-primary transition-all group-hover:w-1/3 group-data-[state=open]:w-1/3"
            data-acsb-hidden="true"
            style="
              animation-duration: 0.001s;
              background-color: rgb(186, 23, 43);
              block-size: 4px;
              inset: 36px 110.859px 0px 0px;
              cursor: pointer;
              height: 4px;
              inline-size: 0px;
              inset-block: 36px 0px;
              inset-inline: 0px 110.859px;
              list-style-type: none;
              perspective-origin: 0px 2px;
              position: absolute;
              text-align: center;
              transform-origin: 0px 2px;
              width: 0px;
            "
          ></div
        ></a>
      </div>
    </li>
    <li
      class="relative flex"
      data-acsb-menu="li"
      data-acsb-menu-root="true"
      style="
        animation-duration: 0.001s;
        block-size: 40px;
        inset: 0px;
        display: flex;
        height: 40px;
        inline-size: 166.469px;
        inset-block: 0px;
        inset-inline: 0px;
        list-style-type: none;
        min-block-size: auto;
        min-height: auto;
        min-inline-size: auto;
        min-width: auto;
        perspective-origin: 83.2344px 20px;
        position: relative;
        text-align: center;
        transform-origin: 83.2344px 20px;
        width: 166.469px;
      "
    >
      <div
        class="inline-block w-full cursor-pointer"
        data-acsb-clickable="true"
        data-acsb-navigable="true"
        tabindex="0"
        data-acsb-now-navigable="true"
        data-acsb-menu="a"
        data-acsb-menu-root-link="true"
        role="button"
        style="animation-duration: 0.001s; block-size: 40px; cursor: pointer; height: 40px; inline-size: 141.469px; list-style-type: none; min-block-size: auto; min-height: auto; min-inline-size: auto; min-width: auto; perspective-origin: 70.7344px 20px; text-align: center; transform-origin: 70.7344px 20px; width: 141.469px"
      >
        <div
          class="group relative inline-block w-full preflight-button py-2 no-underline after:pointer-events-none after:invisible after:block after:h-0 after:overflow-hidden after:font-bold after:content-[attr(data-text)] after:select-none hover:font-bold data-[accent=true]:rounded-lg data-[accent=true]:bg-gray-100 data-[accent=true]:px-3 data-[state=open]:font-bold data-[accent=true]:data-[state=open]:bg-primary data-[accent=true]:data-[state=open]:text-white"
          data-accent="true"
          data-state="closed"
          data-text="Coaches Toolkit"
          style="
            animation-duration: 0.001s;
            background-color: oklch(0.967 0.003 264.542);
            block-size: 40px;
            border-radius: 8px;
            border-end-end-radius: 8px;
            border-end-start-radius: 8px;
            border-start-end-radius: 8px;
            border-start-start-radius: 8px;
            inset: 0px;
            box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px;
            cursor: pointer;
            display: inline-block;
            height: 40px;
            inline-size: 141.469px;
            inset-block: 0px;
            inset-inline: 0px;
            list-style-type: none;
            padding-block: 8px;
            padding: 8px 12px;
            padding-inline: 12px;
            perspective-origin: 70.7344px 20px;
            position: relative;
            text-align: center;
            transform-origin: 70.7344px 20px;
            width: 141.469px;
          "
          data-id="2"
        >
          Coaches Toolkit
        </div>
      </div>
      <div
        class="ml-6!"
        data-acsb-hidden="false"
        aria-hidden="true"
        style="animation-duration: 0.001s; block-size: 40px; height: 40px; inline-size: 1px; list-style-type: none; margin-inline-start: 24px; margin-left: 24px; min-block-size: auto; min-height: auto; min-inline-size: auto; min-width: auto; perspective-origin: 0.5px 20px; text-align: center; transform-origin: 0.5px 20px; width: 1px"
      >
        <div
          data-orientation="vertical"
          role="none"
          class="bg-[var(--separator-default-border-color)] h-full w-[var(--separator-default-border-width)]"
          style="animation-duration: 0.001s; background-color: rgb(184, 187, 187); block-size: 40px; height: 40px; inline-size: 1px; list-style-type: none; perspective-origin: 0.5px 20px; text-align: center; transform-origin: 0.5px 20px; width: 1px"
        ></div>
      </div>
    </li>
    <li
      class="relative flex"
      data-acsb-menu="li"
      data-acsb-menu-root="true"
      style="
        animation-duration: 0.001s;
        block-size: 40px;
        inset: 0px;
        display: flex;
        height: 40px;
        inline-size: 37.7422px;
        inset-block: 0px;
        inset-inline: 0px;
        list-style-type: none;
        min-block-size: auto;
        min-height: auto;
        min-inline-size: auto;
        min-width: auto;
        perspective-origin: 18.8672px 20px;
        position: relative;
        text-align: center;
        transform-origin: 18.8711px 20px;
        width: 37.7422px;
      "
    >
      <div
        class="inline-block w-full cursor-pointer"
        style="animation-duration: 0.001s; block-size: 40px; cursor: pointer; height: 40px; inline-size: 37.7422px; list-style-type: none; min-block-size: auto; min-height: auto; min-inline-size: auto; min-width: auto; perspective-origin: 18.8672px 20px; text-align: center; transform-origin: 18.8711px 20px; width: 37.7422px"
      >
        <a
          data-accent="false"
          data-state="closed"
          data-text="Shop"
          class="group relative inline-block w-full preflight-button py-2 no-underline after:pointer-events-none after:invisible after:block after:h-0 after:overflow-hidden after:font-bold after:content-[attr(data-text)] after:select-none hover:font-bold"
          href="/shop/"
          data-acsb-clickable="true"
          data-acsb-navigable="true"
          data-acsb-now-navigable="true"
          data-custom-button-processed="true"
          data-acsb-menu="a"
          data-acsb-menu-root-link="true"
          style="
            animation-duration: 0.001s;
            block-size: 40px;
            inset: 0px;
            box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px;
            cursor: pointer;
            display: inline-block;
            height: 40px;
            inline-size: 37.7422px;
            inset-block: 0px;
            inset-inline: 0px;
            list-style-type: none;
            padding-block: 8px;
            padding-bottom: 8px;
            padding-top: 8px;
            perspective-origin: 18.8672px 20px;
            position: relative;
            text-align: center;
            transform-origin: 18.8711px 20px;
            width: 37.7422px;
          "
          data-id="3"
          >Shop
          <div
            class="absolute bottom-0 left-0 h-1 w-0 bg-primary transition-all group-hover:w-1/3 group-data-[state=open]:w-1/3"
            data-acsb-hidden="true"
            style="
              animation-duration: 0.001s;
              background-color: rgb(186, 23, 43);
              block-size: 4px;
              inset: 36px 37.7422px 0px 0px;
              cursor: pointer;
              height: 4px;
              inline-size: 0px;
              inset-block: 36px 0px;
              inset-inline: 0px 37.7422px;
              list-style-type: none;
              perspective-origin: 0px 2px;
              position: absolute;
              text-align: center;
              transform-origin: 0px 2px;
              width: 0px;
            "
          ></div
        ></a>
      </div>
    </li>
    <li
      class="relative flex"
      data-acsb-menu="li"
      data-acsb-menu-root="true"
      style="
        animation-duration: 0.001s;
        block-size: 40px;
        inset: 0px;
        display: flex;
        height: 40px;
        inline-size: 74.2031px;
        inset-block: 0px;
        inset-inline: 0px;
        list-style-type: none;
        min-block-size: auto;
        min-height: auto;
        min-inline-size: auto;
        min-width: auto;
        perspective-origin: 37.1016px 20px;
        position: relative;
        text-align: center;
        transform-origin: 37.1016px 20px;
        width: 74.2031px;
      "
    >
      <a
        class="group relative inline-block w-full preflight-button py-2 no-underline hover:font-bold data-[state=open]:font-bold font-bold text-primary"
        href="/c/clearance/#accent"
        data-acsb-clickable="true"
        data-acsb-navigable="true"
        data-acsb-now-navigable="true"
        data-custom-button-processed="true"
        data-acsb-menu="a"
        data-acsb-menu-root-link="true"
        style="
          animation-duration: 0.001s;
          block-size: 40px;
          border-block-color: rgb(186, 23, 43);
          border-color: rgb(186, 23, 43);
          border-inline-color: rgb(186, 23, 43);
          inset: 0px;
          box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px;
          caret-color: rgb(186, 23, 43);
          color: rgb(186, 23, 43);
          column-rule-color: rgb(186, 23, 43);
          cursor: pointer;
          display: block;
          font-weight: 700;
          height: 40px;
          inline-size: 74.2109px;
          inset-block: 0px;
          inset-inline: 0px;
          list-style-type: none;
          min-block-size: auto;
          min-height: auto;
          min-inline-size: auto;
          min-width: auto;
          outline-color: rgb(186, 23, 43);
          padding-block: 8px;
          padding-bottom: 8px;
          padding-top: 8px;
          perspective-origin: 37.1016px 20px;
          position: relative;
          text-align: center;
          text-decoration: none solid rgb(186, 23, 43);
          text-emphasis-color: rgb(186, 23, 43);
          transform-origin: 37.1055px 20px;
          width: 74.2109px;
          -webkit-text-fill-color: rgb(186, 23, 43);
          -webkit-text-stroke-color: rgb(186, 23, 43);
        "
        >Clearance
        <div
          class="absolute bottom-0 left-0 h-1 w-0 bg-primary transition-all group-hover:w-1/3 group-data-[state=open]:w-1/3"
          data-acsb-hidden="true"
          style="
            animation-duration: 0.001s;
            background-color: rgb(186, 23, 43);
            block-size: 4px;
            border-block-color: rgb(186, 23, 43);
            border-color: rgb(186, 23, 43);
            border-inline-color: rgb(186, 23, 43);
            inset: 36px 74.2109px 0px 0px;
            caret-color: rgb(186, 23, 43);
            color: rgb(186, 23, 43);
            column-rule-color: rgb(186, 23, 43);
            cursor: pointer;
            font-weight: 700;
            height: 4px;
            inline-size: 0px;
            inset-block: 36px 0px;
            inset-inline: 0px 74.2109px;
            list-style-type: none;
            outline-color: rgb(186, 23, 43);
            perspective-origin: 0px 2px;
            position: absolute;
            text-align: center;
            text-decoration: none solid rgb(186, 23, 43);
            text-emphasis-color: rgb(186, 23, 43);
            transform-origin: 0px 2px;
            width: 0px;
            -webkit-text-fill-color: rgb(186, 23, 43);
            -webkit-text-stroke-color: rgb(186, 23, 43);
          "
        ></div
      ></a>
    </li>
  </ul>
</div>
<style>
  [data-id="0"]::after {
    block-size: 0px;
    content: "Sports Solutions";
    cursor: pointer;
    display: block;
    font-weight: 700;
    height: 0px;
    inline-size: 120.906px;
    list-style-type: none;
    overflow-block: hidden;
    overflow-inline: hidden;
    overflow-x: hidden;
    overflow-y: hidden;
    perspective-origin: 60.4531px 0px;
    pointer-events: none;
    text-align: center;
    transform-origin: 60.4531px 0px;
    user-select: none;
    visibility: hidden;
    width: 120.906px;
  }
  [data-id="1"]::after {
    block-size: 0px;
    content: "Team Uniforms";
    cursor: pointer;
    display: block;
    font-weight: 700;
    height: 0px;
    inline-size: 110.852px;
    list-style-type: none;
    overflow-block: hidden;
    overflow-inline: hidden;
    overflow-x: hidden;
    overflow-y: hidden;
    perspective-origin: 55.4219px 0px;
    pointer-events: none;
    text-align: center;
    transform-origin: 55.4258px 0px;
    user-select: none;
    visibility: hidden;
    width: 110.852px;
  }
  [data-id="2"]::after {
    block-size: 0px;
    content: "Coaches Toolkit";
    cursor: pointer;
    display: block;
    font-weight: 700;
    height: 0px;
    inline-size: 117.469px;
    list-style-type: none;
    overflow-block: hidden;
    overflow-inline: hidden;
    overflow-x: hidden;
    overflow-y: hidden;
    perspective-origin: 58.7344px 0px;
    pointer-events: none;
    text-align: center;
    transform-origin: 58.7344px 0px;
    user-select: none;
    visibility: hidden;
    width: 117.469px;
  }
  [data-id="3"]::after {
    block-size: 0px;
    content: "Shop";
    cursor: pointer;
    display: block;
    font-weight: 700;
    height: 0px;
    inline-size: 37.7422px;
    list-style-type: none;
    overflow-block: hidden;
    overflow-inline: hidden;
    overflow-x: hidden;
    overflow-y: hidden;
    perspective-origin: 18.8672px 0px;
    pointer-events: none;
    text-align: center;
    transform-origin: 18.8711px 0px;
    user-select: none;
    visibility: hidden;
    width: 37.7422px;
  }
</style>` },
  { filename: "nav element is container of multiple list menus nav links", content: `<div>
  <nav>
    <ul>
      <li>
        <a href="/home">Home</a>
      </li>
      <li>
        <a href="/about">About</a>
      </li>
    </ul>
    <div>
      <h4>Contact us</h4>
      <ul>
        <li>
          <a href="/contact/info">Get info</a>
        </li>
        <li>
          <a href="/contact/ticket">Submit a ticket</a>
        </li>
      </ul>
    </div>
  </nav>
</div>` },
  { filename: "nav element is container of multiple list menus", content: `<div>
  <nav>
    <ul>
      <li>
        <a href="#main-content">Skip to main content</a>
      </li>
      <li>
        <a href="#footer">Skip to footer</a>
      </li>
    </ul>
    <ul>
      <li>
        <a href="#main-content">Skip to main content</a>
      </li>
      <li>
        <a href="#footer">Skip to footer</a>
      </li>
    </ul>
  </nav>
</div>` },
  { filename: "nav element is container of single list menu", content: `<div>
  <nav>
    <ul>
      <li>
        <a href="#main-content">Skip to main content</a>
      </li>
      <li>
        <a href="#footer">Skip to footer</a>
      </li>
    </ul>
  </nav>
</div>` },
  { filename: "nav role is container of multiple list menus nav links", content: `<div>
  <div role="navigation">
    <ul>
      <li>
        <a href="/home">Home</a>
      </li>
      <li>
        <a href="/about">About</a>
      </li>
    </ul>
    <div>
      <h4>Contact us</h4>
      <ul>
        <li>
          <a href="/contact/info">Get info</a>
        </li>
        <li>
          <a href="/contact/ticket">Submit a ticket</a>
        </li>
      </ul>
    </div>
  </div>
</div>` },
  { filename: "nav role is container of multiple list menus", content: `<div>
  <div role="navigation">
    <ul>
      <li>
        <a href="#main-content">Skip to main content</a>
      </li>
      <li>
        <a href="#footer">Skip to footer</a>
      </li>
    </ul>
    <ul>
      <li>
        <a href="#main-content">Skip to main content</a>
      </li>
      <li>
        <a href="#footer">Skip to footer</a>
      </li>
    </ul>
  </div>
</div>` },
  { filename: "nav role is container of single list menu", content: `<div>
  <div role="navigation">
    <ul>
      <li>
        <a href="#main-content">Skip to main content</a>
      </li>
      <li>
        <a href="#footer">Skip to footer</a>
      </li>
    </ul>
  </div>
</div>` }
  ];

  return (
    <EngineIssueSuccess
      ruleId={ruleId}
      title={title}
      description={description}
      helpText={helpText}
      bestPractices={bestPractices}
      htmlExamples={htmlExamples}
    />
  );
};

export default NavigationMisuseSuccess;
