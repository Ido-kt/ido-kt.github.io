import React from "react";
import EngineIssueFailure from "../../../layout/engineIssueFailure";

const CarouselDraggingMovementsFailure = () => {
  const ruleId = "carousel-dragging-movements";
  const title = `Carousels that require dragging movements should provide alternative methods of operation with a single pointer`;
  const description = `Carousels that require dragging movements should provide alternative methods of operation with a single pointer for example prev and next buttons or pagination.`;
  const helpText = `Ensure that the carousel can be operated with a single pointer. For example by providing 'previous' and 'next' buttons to navigate between slides, or pagination controls that allow direct access to specific slides.`;
  const fixSteps = [
  "Review the HTML structure",
  "Apply proper accessibility attributes",
  "Test with screen readers"
  ];
  const htmlExamples = [
  { filename: "slick slider without prev and next buttons", content: `<div
  class="react-tabs__tab-panel react-tabs__tab-panel--selected"
  role="tabpanel"
  id="react-tabs-1429"
  aria-labelledby="react-tabs-1428"
  style="block-size: 323.594px; height: 323.594px; inline-size: 930px; min-block-size: auto; min-height: auto; min-inline-size: auto; min-width: auto; perspective-origin: 465px 161.797px; transform-origin: 465px 161.797px; width: 930px"
>
  <div
    class="slick-slider slick-initialized"
    dir="ltr"
    style="block-size: 304px; inset: 0px; height: 304px; inline-size: 924px; inset-block: 0px; inset-inline: 0px; margin-inline-start: 6px; margin-left: 6px; perspective-origin: 462px 152px; position: relative; touch-action: pan-y; transform-origin: 462px 152px; user-select: none; width: 924px; -webkit-tap-highlight-color: rgba(0, 0, 0, 0)"
  >
    <div
      class="slick-list"
      style="
        block-size: 304px;
        inset: 0px;
        height: 304px;
        inline-size: 924px;
        inset-block: 0px;
        inset-inline: 0px;
        overflow-block: hidden;
        overflow-inline: hidden;
        overflow: hidden;
        perspective-origin: 462px 152px;
        position: relative;
        transform: matrix(1, 0, 0, 1, 0, 0);
        transform-origin: 462px 152px;
        user-select: none;
        width: 924px;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      "
    >
      <div
        class="slick-track"
        style="
          opacity: 1;
          transform: matrix(1, 0, 0, 1, -924, 0);
          block-size: 304px;
          inset: 0px;
          display: flex;
          height: 304px;
          inline-size: 2772px;
          inset-block: 0px;
          inset-inline: 0px;
          margin-inline-end: -1848px;
          margin-right: -1848px;
          perspective-origin: 1386px 152px;
          position: relative;
          transform-origin: 1386px 152px;
          user-select: none;
          width: 2772px;
          -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        "
        data-id="5"
      >
        <div
          data-index="0"
          class="slick-slide"
          tabindex="-1"
          aria-hidden="true"
          style="
            outline: none;
            block-size: 304px;
            float: left;
            height: 304px;
            inline-size: 462px;
            min-block-size: 1px;
            min-height: 1px;
            min-inline-size: auto;
            min-width: auto;
            padding-block: 26px 15px;
            padding: 26px 26px 15px;
            padding-inline: 26px;
            perspective-origin: 231px 152px;
            transform-origin: 231px 152px;
            user-select: none;
            width: 462px;
            -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
          "
        >
          <div style="block-size: 263px; height: 263px; inline-size: 380px; max-inline-size: 100%; max-width: 100%; perspective-origin: 190px 131.5px; transform-origin: 190px 131.5px; user-select: none; width: 380px; -webkit-tap-highlight-color: rgba(0, 0, 0, 0)">
            <div
              class="products_card__BiofU undefined productCardBlog"
              style="
                align-items: stretch;
                background-color: rgb(255, 255, 255);
                block-size: 263px;
                border-block: 1px solid rgb(236, 236, 236);
                border-color: rgb(236, 236, 236);
                border-radius: 2px;
                border-style: solid;
                border-width: 1px;
                border-end-end-radius: 2px;
                border-end-start-radius: 2px;
                border-inline: 1px solid rgb(236, 236, 236);
                border-start-end-radius: 2px;
                border-start-start-radius: 2px;
                inset: 0px;
                box-shadow: rgba(220, 220, 220, 0.5) 0px 0px 15px 0px;
                display: flex;
                flex-direction: column;
                height: 263px;
                inline-size: 380px;
                inset-block: 0px;
                inset-inline: 0px;
                max-inline-size: 100%;
                max-width: 100%;
                min-block-size: 263px;
                min-height: 263px;
                padding-block: 30px 20px;
                padding: 30px 20px 20px;
                padding-inline: 20px;
                perspective-origin: 190px 131.5px;
                position: relative;
                transform-origin: 190px 131.5px;
                user-select: none;
                width: 380px;
                -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
              "
            >
              <span
                class="products_slug__gWQEd"
                style="
                  block-size: 16.7969px;
                  border-block-color: rgb(35, 36, 52);
                  border-color: rgb(35, 36, 52);
                  border-inline-color: rgb(35, 36, 52);
                  inset: 5px 323.438px 239.203px 20px;
                  caret-color: rgb(35, 36, 52);
                  color: rgb(35, 36, 52);
                  column-rule-color: rgb(35, 36, 52);
                  display: block;
                  font-size: 12px;
                  height: 16.7969px;
                  inline-size: 34.5625px;
                  inset-block: 5px 239.203px;
                  inset-inline: 20px 323.438px;
                  line-height: 16.8px;
                  outline-color: rgb(35, 36, 52);
                  perspective-origin: 17.2812px 8.39844px;
                  position: absolute;
                  text-decoration-color: rgb(35, 36, 52);
                  text-emphasis-color: rgb(35, 36, 52);
                  transform-origin: 17.2812px 8.39844px;
                  user-select: none;
                  width: 34.5625px;
                  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
                  -webkit-text-fill-color: rgb(35, 36, 52);
                  -webkit-text-stroke-color: rgb(35, 36, 52);
                "
                >Course</span
              >
              <div
                class="products_cardContent__FL__W"
                style="block-size: 128.891px; display: flex; height: 128.891px; inline-size: 338px; min-block-size: auto; min-height: auto; min-inline-size: auto; min-width: auto; perspective-origin: 169px 64.4453px; transform-origin: 169px 64.4453px; user-select: none; width: 338px; -webkit-tap-highlight-color: rgba(0, 0, 0, 0)"
              >
                <div
                  class="products_cardContentLeft__CmSoD"
                  style="
                    align-items: center;
                    block-size: 128.891px;
                    display: flex;
                    flex-direction: column;
                    height: 128.891px;
                    inline-size: 55px;
                    margin-inline-end: 15px;
                    margin-right: 15px;
                    min-block-size: auto;
                    min-height: auto;
                    min-inline-size: auto;
                    min-width: auto;
                    perspective-origin: 27.5px 64.4453px;
                    transform-origin: 27.5px 64.4453px;
                    user-select: none;
                    width: 55px;
                    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
                  "
                >
                  <figure
                    style="
                      block-size: 55px;
                      border-radius: 100%;
                      border-end-end-radius: 100%;
                      border-end-start-radius: 100%;
                      border-start-end-radius: 100%;
                      border-start-start-radius: 100%;
                      height: 55px;
                      inline-size: 55px;
                      margin-block-end: 10px;
                      margin-bottom: 10px;
                      min-block-size: auto;
                      min-height: auto;
                      min-inline-size: auto;
                      min-width: auto;
                      overflow-block: hidden;
                      overflow-inline: hidden;
                      overflow: hidden;
                      perspective-origin: 27.5px 27.5px;
                      transform-origin: 27.5px 27.5px;
                      user-select: none;
                      width: 55px;
                      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
                    "
                  >
                    <img
                      src="/"
                      alt="Backend Developer in Java"
                      title="Backend Developer in Java"
                      width="55px"
                      loading="lazy"
                      height="55px"
                      style="block-size: 55px; display: block; height: 55px; inline-size: 55px; max-inline-size: 100%; max-width: 100%; perspective-origin: 27.5px 27.5px; transform-origin: 27.5px 27.5px; user-select: none; width: 55px; -webkit-tap-highlight-color: rgba(0, 0, 0, 0)"
                    />
                  </figure>
                  <p
                    class="products_rating__KAGE1"
                    style="
                      align-items: center;
                      block-size: 19.5938px;
                      border-block-color: rgb(56, 64, 76);
                      border-color: rgb(56, 64, 76);
                      border-inline-color: rgb(56, 64, 76);
                      caret-color: rgb(56, 64, 76);
                      color: rgb(56, 64, 76);
                      column-rule-color: rgb(56, 64, 76);
                      display: flex;
                      font-weight: 700;
                      height: 19.5938px;
                      inline-size: 19.3125px;
                      margin-block-end: 0px;
                      margin-bottom: 0px;
                      min-block-size: auto;
                      min-height: auto;
                      min-inline-size: auto;
                      min-width: auto;
                      outline-color: rgb(56, 64, 76);
                      perspective-origin: 9.65625px 9.79688px;
                      text-decoration-color: rgb(56, 64, 76);
                      text-emphasis-color: rgb(56, 64, 76);
                      transform-origin: 9.65625px 9.79688px;
                      user-select: none;
                      width: 19.3125px;
                      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
                      -webkit-text-fill-color: rgb(56, 64, 76);
                      -webkit-text-stroke-color: rgb(56, 64, 76);
                    "
                  >
                    <span
                      style="
                        block-size: 19.5938px;
                        border-block-color: rgb(56, 64, 76);
                        border-color: rgb(56, 64, 76);
                        border-inline-color: rgb(56, 64, 76);
                        caret-color: rgb(56, 64, 76);
                        color: rgb(56, 64, 76);
                        column-rule-color: rgb(56, 64, 76);
                        display: block;
                        font-weight: 700;
                        height: 19.5938px;
                        inline-size: 19.3203px;
                        min-block-size: auto;
                        min-height: auto;
                        min-inline-size: auto;
                        min-width: auto;
                        outline-color: rgb(56, 64, 76);
                        perspective-origin: 9.65625px 9.79688px;
                        text-decoration-color: rgb(56, 64, 76);
                        text-emphasis-color: rgb(56, 64, 76);
                        transform-origin: 9.66016px 9.79688px;
                        user-select: none;
                        width: 19.3203px;
                        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
                        -webkit-text-fill-color: rgb(56, 64, 76);
                        -webkit-text-stroke-color: rgb(56, 64, 76);
                      "
                      >4.5
                    </span>
                  </p>
                </div>
                <div
                  class="products_cardContentRight__046Gw"
                  style="
                    block-size: 128.891px;
                    display: flex;
                    flex-basis: 0%;
                    flex-direction: column;
                    flex-grow: 1;
                    font-size: 13px;
                    height: 128.891px;
                    inline-size: 268px;
                    line-height: 18.2px;
                    min-block-size: auto;
                    min-height: auto;
                    min-inline-size: auto;
                    min-width: auto;
                    perspective-origin: 134px 64.4453px;
                    transform-origin: 134px 64.4453px;
                    user-select: none;
                    width: 268px;
                    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
                  "
                >
                  <p
                    class="products_mB15__VQe_i"
                    style="
                      font-size: 20px;
                      block-size: 28px;
                      height: 28px;
                      inline-size: 268px;
                      line-height: 28px;
                      margin-block-end: 15px;
                      margin-bottom: 15px;
                      min-block-size: auto;
                      min-height: auto;
                      min-inline-size: auto;
                      min-width: auto;
                      perspective-origin: 134px 14px;
                      transform-origin: 134px 14px;
                      user-select: none;
                      width: 268px;
                      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
                    "
                  >
                    <a
                      href="/"
                      style="
                        color: rgb(35, 36, 52);
                        border-block-color: rgb(35, 36, 52);
                        border-color: rgb(35, 36, 52);
                        border-inline-color: rgb(35, 36, 52);
                        caret-color: rgb(35, 36, 52);
                        column-rule-color: rgb(35, 36, 52);
                        cursor: pointer;
                        font-size: 20px;
                        line-height: 28px;
                        outline-color: rgb(35, 36, 52);
                        text-decoration-color: rgb(35, 36, 52);
                        text-emphasis-color: rgb(35, 36, 52);
                        user-select: none;
                        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
                        -webkit-text-fill-color: rgb(35, 36, 52);
                        -webkit-text-stroke-color: rgb(35, 36, 52);
                      "
                      >Backend Developer in Java</a
                    >
                  </p>
                  <span
                    class="products_author__l8U2J"
                    style="
                      block-size: 18.1953px;
                      display: block;
                      font-size: 13px;
                      height: 18.1953px;
                      inline-size: 268px;
                      line-height: 18.2px;
                      margin-block-end: 5px;
                      margin-bottom: 5px;
                      min-block-size: auto;
                      min-height: auto;
                      min-inline-size: auto;
                      min-width: auto;
                      perspective-origin: 134px 9.09375px;
                      transform-origin: 134px 9.09766px;
                      user-select: none;
                      width: 268px;
                      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
                    "
                    >TestPrepTraining</span
                  >
                  <p
                    class="products_durationMode__c3H_l"
                    style="
                      block-size: 37px;
                      font-size: 13px;
                      height: 37px;
                      inline-size: 268px;
                      line-height: 17px;
                      margin-block-end: 0px;
                      margin-bottom: 0px;
                      min-block-size: auto;
                      min-height: auto;
                      min-inline-size: auto;
                      min-width: auto;
                      overflow-block: hidden;
                      overflow-inline: hidden;
                      overflow: hidden;
                      perspective-origin: 134px 18.5px;
                      transform-origin: 134px 18.5px;
                      user-select: none;
                      width: 268px;
                      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
                    "
                  >
                    Duration: <span style="font-size: 13px; line-height: 17px; user-select: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0)">51 Hours</span
                    ><span class="products_divider__PJh_j" style="font-size: 13px; line-height: 17px; margin-inline: 1px; margin-left: 1px; margin-right: 1px; user-select: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0)">|</span>Mode:
                    <span style="font-size: 13px; line-height: 17px; user-select: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0)">Online</span>
                  </p>
                  <p
                    class="products_priceOffer__TlebB"
                    style="
                      align-items: center;
                      block-size: 25.6875px;
                      display: flex;
                      font-size: 13px;
                      height: 25.6875px;
                      inline-size: 268px;
                      line-height: 18.2px;
                      margin-block-end: 0px;
                      margin-bottom: 0px;
                      min-block-size: auto;
                      min-height: auto;
                      min-inline-size: auto;
                      min-width: auto;
                      perspective-origin: 134px 12.8438px;
                      transform-origin: 134px 12.8438px;
                      user-select: none;
                      width: 268px;
                      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
                    "
                  >
                    <strong
                      class="products_price__54eMC"
                      data-id="1"
                      style="
                        block-size: 25.6953px;
                        border-block-color: rgb(56, 64, 76);
                        border-color: rgb(56, 64, 76);
                        border-inline-color: rgb(56, 64, 76);
                        caret-color: rgb(56, 64, 76);
                        color: rgb(56, 64, 76);
                        column-rule-color: rgb(56, 64, 76);
                        display: block;
                        font-size: 18px;
                        height: 25.6953px;
                        inline-size: 62.9922px;
                        line-height: 25.2px;
                        min-block-size: auto;
                        min-height: auto;
                        min-inline-size: auto;
                        min-width: auto;
                        outline-color: rgb(56, 64, 76);
                        perspective-origin: 31.4922px 12.8438px;
                        text-decoration-color: rgb(56, 64, 76);
                        text-emphasis-color: rgb(56, 64, 76);
                        transform-origin: 31.4961px 12.8477px;
                        user-select: none;
                        width: 62.9922px;
                        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
                        -webkit-text-fill-color: rgb(56, 64, 76);
                        -webkit-text-stroke-color: rgb(56, 64, 76);
                      "
                      >12999
                    </strong>
                  </p>
                </div>
              </div>
              <div
                class="products_cardContentBottom__ZpMee"
                style="
                  align-items: center;
                  block-size: 42.7969px;
                  border-block-start: 1px solid rgb(242, 243, 248);
                  border-top: 1px solid rgb(242, 243, 248);
                  display: flex;
                  height: 42.7969px;
                  inline-size: 338px;
                  margin-block-start: 10px;
                  margin-top: 10px;
                  min-block-size: auto;
                  min-height: auto;
                  min-inline-size: auto;
                  min-width: auto;
                  padding-block-start: 15px;
                  padding-top: 15px;
                  perspective-origin: 169px 21.3984px;
                  transform-origin: 169px 21.3984px;
                  user-select: none;
                  width: 338px;
                  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
                "
              >
                <a
                  href="/"
                  style="
                    block-size: 19.5938px;
                    cursor: pointer;
                    display: block;
                    font-weight: 700;
                    height: 19.5938px;
                    inline-size: 45.8828px;
                    min-block-size: auto;
                    min-height: auto;
                    min-inline-size: auto;
                    min-width: auto;
                    perspective-origin: 22.9375px 9.79688px;
                    transform-origin: 22.9414px 9.79688px;
                    user-select: none;
                    width: 45.8828px;
                    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
                  "
                  >Explore</a
                >
                <a
                  href="/"
                  class="products_btnSecondary__j4wMK products_mLAuto__k1nDh"
                  style="
                    background-color: rgb(124, 68, 255);
                    block-size: 26.7969px;
                    border-radius: 4px;
                    border-end-end-radius: 4px;
                    border-end-start-radius: 4px;
                    border-start-end-radius: 4px;
                    border-start-start-radius: 4px;
                    box-shadow: rgba(144, 96, 255, 0.3) 0px 4px 10px 0px;
                    caret-color: rgb(255, 255, 255);
                    color: rgb(255, 255, 255);
                    column-rule-color: rgb(255, 255, 255);
                    cursor: pointer;
                    display: block;
                    font-size: 12px;
                    font-weight: 700;
                    height: 26.7969px;
                    inline-size: 84.7656px;
                    line-height: 16.8px;
                    margin-inline-start: 207.359px;
                    margin-left: 207.359px;
                    min-block-size: auto;
                    min-height: auto;
                    min-inline-size: auto;
                    min-width: auto;
                    outline-color: rgb(255, 255, 255);
                    padding-block: 5px;
                    padding: 5px 20px;
                    padding-inline: 20px;
                    perspective-origin: 42.3828px 13.3984px;
                    text-decoration-color: rgb(255, 255, 255);
                    text-emphasis-color: rgb(255, 255, 255);
                    transform-origin: 42.3828px 13.3984px;
                    user-select: none;
                    width: 84.7656px;
                    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
                    -webkit-text-fill-color: rgb(255, 255, 255);
                    -webkit-text-stroke-color: rgb(255, 255, 255);
                  "
                  >Buy Now</a
                >
              </div>
            </div>
          </div>
        </div>
        <div
          data-index="1"
          class="slick-slide"
          tabindex="-1"
          aria-hidden="true"
          style="
            outline: none;
            block-size: 304px;
            float: left;
            height: 304px;
            inline-size: 462px;
            min-block-size: 1px;
            min-height: 1px;
            min-inline-size: auto;
            min-width: auto;
            padding-block: 26px 15px;
            padding: 26px 26px 15px;
            padding-inline: 26px;
            perspective-origin: 231px 152px;
            transform-origin: 231px 152px;
            user-select: none;
            width: 462px;
            -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
          "
        >
          <div style="block-size: 263px; height: 263px; inline-size: 380px; max-inline-size: 100%; max-width: 100%; perspective-origin: 190px 131.5px; transform-origin: 190px 131.5px; user-select: none; width: 380px; -webkit-tap-highlight-color: rgba(0, 0, 0, 0)">
            <div
              class="products_card__BiofU undefined productCardBlog"
              style="
                align-items: stretch;
                background-color: rgb(255, 255, 255);
                block-size: 263px;
                border-block: 1px solid rgb(236, 236, 236);
                border-color: rgb(236, 236, 236);
                border-radius: 2px;
                border-style: solid;
                border-width: 1px;
                border-end-end-radius: 2px;
                border-end-start-radius: 2px;
                border-inline: 1px solid rgb(236, 236, 236);
                border-start-end-radius: 2px;
                border-start-start-radius: 2px;
                inset: 0px;
                box-shadow: rgba(220, 220, 220, 0.5) 0px 0px 15px 0px;
                display: flex;
                flex-direction: column;
                height: 263px;
                inline-size: 380px;
                inset-block: 0px;
                inset-inline: 0px;
                max-inline-size: 100%;
                max-width: 100%;
                min-block-size: 263px;
                min-height: 263px;
                padding-block: 30px 20px;
                padding: 30px 20px 20px;
                padding-inline: 20px;
                perspective-origin: 190px 131.5px;
                position: relative;
                transform-origin: 190px 131.5px;
                user-select: none;
                width: 380px;
                -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
              "
            >
              <span
                class="products_slug__gWQEd"
                style="
                  block-size: 16.7969px;
                  border-block-color: rgb(35, 36, 52);
                  border-color: rgb(35, 36, 52);
                  border-inline-color: rgb(35, 36, 52);
                  inset: 5px 323.438px 239.203px 20px;
                  caret-color: rgb(35, 36, 52);
                  color: rgb(35, 36, 52);
                  column-rule-color: rgb(35, 36, 52);
                  display: block;
                  font-size: 12px;
                  height: 16.7969px;
                  inline-size: 34.5625px;
                  inset-block: 5px 239.203px;
                  inset-inline: 20px 323.438px;
                  line-height: 16.8px;
                  outline-color: rgb(35, 36, 52);
                  perspective-origin: 17.2812px 8.39844px;
                  position: absolute;
                  text-decoration-color: rgb(35, 36, 52);
                  text-emphasis-color: rgb(35, 36, 52);
                  transform-origin: 17.2812px 8.39844px;
                  user-select: none;
                  width: 34.5625px;
                  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
                  -webkit-text-fill-color: rgb(35, 36, 52);
                  -webkit-text-stroke-color: rgb(35, 36, 52);
                "
                >Course</span
              >
              <div
                class="products_cardContent__FL__W"
                style="block-size: 128.891px; display: flex; height: 128.891px; inline-size: 338px; min-block-size: auto; min-height: auto; min-inline-size: auto; min-width: auto; perspective-origin: 169px 64.4453px; transform-origin: 169px 64.4453px; user-select: none; width: 338px; -webkit-tap-highlight-color: rgba(0, 0, 0, 0)"
              >
                <div
                  class="products_cardContentLeft__CmSoD"
                  style="
                    align-items: center;
                    block-size: 128.891px;
                    display: flex;
                    flex-direction: column;
                    height: 128.891px;
                    inline-size: 55px;
                    margin-inline-end: 15px;
                    margin-right: 15px;
                    min-block-size: auto;
                    min-height: auto;
                    min-inline-size: auto;
                    min-width: auto;
                    perspective-origin: 27.5px 64.4453px;
                    transform-origin: 27.5px 64.4453px;
                    user-select: none;
                    width: 55px;
                    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
                  "
                >
                  <figure
                    style="
                      block-size: 55px;
                      border-radius: 100%;
                      border-end-end-radius: 100%;
                      border-end-start-radius: 100%;
                      border-start-end-radius: 100%;
                      border-start-start-radius: 100%;
                      height: 55px;
                      inline-size: 55px;
                      margin-block-end: 10px;
                      margin-bottom: 10px;
                      min-block-size: auto;
                      min-height: auto;
                      min-inline-size: auto;
                      min-width: auto;
                      overflow-block: hidden;
                      overflow-inline: hidden;
                      overflow: hidden;
                      perspective-origin: 27.5px 27.5px;
                      transform-origin: 27.5px 27.5px;
                      user-select: none;
                      width: 55px;
                      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
                    "
                  >
                    <img
                      src="/"
                      alt="Backend Developer in Python"
                      title="Backend Developer in Python"
                      width="55px"
                      loading="lazy"
                      height="55px"
                      style="block-size: 55px; display: block; height: 55px; inline-size: 55px; max-inline-size: 100%; max-width: 100%; perspective-origin: 27.5px 27.5px; transform-origin: 27.5px 27.5px; user-select: none; width: 55px; -webkit-tap-highlight-color: rgba(0, 0, 0, 0)"
                    />
                  </figure>
                  <p
                    class="products_rating__KAGE1"
                    style="
                      align-items: center;
                      block-size: 19.5938px;
                      border-block-color: rgb(56, 64, 76);
                      border-color: rgb(56, 64, 76);
                      border-inline-color: rgb(56, 64, 76);
                      caret-color: rgb(56, 64, 76);
                      color: rgb(56, 64, 76);
                      column-rule-color: rgb(56, 64, 76);
                      display: flex;
                      font-weight: 700;
                      height: 19.5938px;
                      inline-size: 19.3125px;
                      margin-block-end: 0px;
                      margin-bottom: 0px;
                      min-block-size: auto;
                      min-height: auto;
                      min-inline-size: auto;
                      min-width: auto;
                      outline-color: rgb(56, 64, 76);
                      perspective-origin: 9.65625px 9.79688px;
                      text-decoration-color: rgb(56, 64, 76);
                      text-emphasis-color: rgb(56, 64, 76);
                      transform-origin: 9.65625px 9.79688px;
                      user-select: none;
                      width: 19.3125px;
                      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
                      -webkit-text-fill-color: rgb(56, 64, 76);
                      -webkit-text-stroke-color: rgb(56, 64, 76);
                    "
                  >
                    <span
                      style="
                        block-size: 19.5938px;
                        border-block-color: rgb(56, 64, 76);
                        border-color: rgb(56, 64, 76);
                        border-inline-color: rgb(56, 64, 76);
                        caret-color: rgb(56, 64, 76);
                        color: rgb(56, 64, 76);
                        column-rule-color: rgb(56, 64, 76);
                        display: block;
                        font-weight: 700;
                        height: 19.5938px;
                        inline-size: 19.3203px;
                        min-block-size: auto;
                        min-height: auto;
                        min-inline-size: auto;
                        min-width: auto;
                        outline-color: rgb(56, 64, 76);
                        perspective-origin: 9.65625px 9.79688px;
                        text-decoration-color: rgb(56, 64, 76);
                        text-emphasis-color: rgb(56, 64, 76);
                        transform-origin: 9.66016px 9.79688px;
                        user-select: none;
                        width: 19.3203px;
                        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
                        -webkit-text-fill-color: rgb(56, 64, 76);
                        -webkit-text-stroke-color: rgb(56, 64, 76);
                      "
                      >4.5
                    </span>
                  </p>
                </div>
                <div
                  class="products_cardContentRight__046Gw"
                  style="
                    block-size: 128.891px;
                    display: flex;
                    flex-basis: 0%;
                    flex-direction: column;
                    flex-grow: 1;
                    font-size: 13px;
                    height: 128.891px;
                    inline-size: 268px;
                    line-height: 18.2px;
                    min-block-size: auto;
                    min-height: auto;
                    min-inline-size: auto;
                    min-width: auto;
                    perspective-origin: 134px 64.4453px;
                    transform-origin: 134px 64.4453px;
                    user-select: none;
                    width: 268px;
                    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
                  "
                >
                  <p
                    class="products_mB15__VQe_i"
                    style="
                      font-size: 20px;
                      block-size: 28px;
                      height: 28px;
                      inline-size: 268px;
                      line-height: 28px;
                      margin-block-end: 15px;
                      margin-bottom: 15px;
                      min-block-size: auto;
                      min-height: auto;
                      min-inline-size: auto;
                      min-width: auto;
                      perspective-origin: 134px 14px;
                      transform-origin: 134px 14px;
                      user-select: none;
                      width: 268px;
                      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
                    "
                  >
                    <a
                      href="/"
                      style="
                        color: rgb(35, 36, 52);
                        border-block-color: rgb(35, 36, 52);
                        border-color: rgb(35, 36, 52);
                        border-inline-color: rgb(35, 36, 52);
                        caret-color: rgb(35, 36, 52);
                        column-rule-color: rgb(35, 36, 52);
                        cursor: pointer;
                        font-size: 20px;
                        line-height: 28px;
                        outline-color: rgb(35, 36, 52);
                        text-decoration-color: rgb(35, 36, 52);
                        text-emphasis-color: rgb(35, 36, 52);
                        user-select: none;
                        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
                        -webkit-text-fill-color: rgb(35, 36, 52);
                        -webkit-text-stroke-color: rgb(35, 36, 52);
                      "
                      >Backend Developer in Python</a
                    >
                  </p>
                  <span
                    class="products_author__l8U2J"
                    style="
                      block-size: 18.1953px;
                      display: block;
                      font-size: 13px;
                      height: 18.1953px;
                      inline-size: 268px;
                      line-height: 18.2px;
                      margin-block-end: 5px;
                      margin-bottom: 5px;
                      min-block-size: auto;
                      min-height: auto;
                      min-inline-size: auto;
                      min-width: auto;
                      perspective-origin: 134px 9.09375px;
                      transform-origin: 134px 9.09766px;
                      user-select: none;
                      width: 268px;
                      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
                    "
                    >TestPrepTraining</span
                  >
                  <p
                    class="products_durationMode__c3H_l"
                    style="
                      block-size: 37px;
                      font-size: 13px;
                      height: 37px;
                      inline-size: 268px;
                      line-height: 17px;
                      margin-block-end: 0px;
                      margin-bottom: 0px;
                      min-block-size: auto;
                      min-height: auto;
                      min-inline-size: auto;
                      min-width: auto;
                      overflow-block: hidden;
                      overflow-inline: hidden;
                      overflow: hidden;
                      perspective-origin: 134px 18.5px;
                      transform-origin: 134px 18.5px;
                      user-select: none;
                      width: 268px;
                      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
                    "
                  >
                    Duration: <span style="font-size: 13px; line-height: 17px; user-select: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0)">20 Hours</span
                    ><span class="products_divider__PJh_j" style="font-size: 13px; line-height: 17px; margin-inline: 1px; margin-left: 1px; margin-right: 1px; user-select: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0)">|</span>Mode:
                    <span style="font-size: 13px; line-height: 17px; user-select: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0)">Online</span>
                  </p>
                  <p
                    class="products_priceOffer__TlebB"
                    style="
                      align-items: center;
                      block-size: 25.6875px;
                      display: flex;
                      font-size: 13px;
                      height: 25.6875px;
                      inline-size: 268px;
                      line-height: 18.2px;
                      margin-block-end: 0px;
                      margin-bottom: 0px;
                      min-block-size: auto;
                      min-height: auto;
                      min-inline-size: auto;
                      min-width: auto;
                      perspective-origin: 134px 12.8438px;
                      transform-origin: 134px 12.8438px;
                      user-select: none;
                      width: 268px;
                      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
                    "
                  >
                    <strong
                      class="products_price__54eMC"
                      data-id="2"
                      style="
                        block-size: 25.6953px;
                        border-block-color: rgb(56, 64, 76);
                        border-color: rgb(56, 64, 76);
                        border-inline-color: rgb(56, 64, 76);
                        caret-color: rgb(56, 64, 76);
                        color: rgb(56, 64, 76);
                        column-rule-color: rgb(56, 64, 76);
                        display: block;
                        font-size: 18px;
                        height: 25.6953px;
                        inline-size: 62.9922px;
                        line-height: 25.2px;
                        min-block-size: auto;
                        min-height: auto;
                        min-inline-size: auto;
                        min-width: auto;
                        outline-color: rgb(56, 64, 76);
                        perspective-origin: 31.4922px 12.8438px;
                        text-decoration-color: rgb(56, 64, 76);
                        text-emphasis-color: rgb(56, 64, 76);
                        transform-origin: 31.4961px 12.8477px;
                        user-select: none;
                        width: 62.9922px;
                        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
                        -webkit-text-fill-color: rgb(56, 64, 76);
                        -webkit-text-stroke-color: rgb(56, 64, 76);
                      "
                      >12999
                    </strong>
                  </p>
                </div>
              </div>
              <div
                class="products_cardContentBottom__ZpMee"
                style="
                  align-items: center;
                  block-size: 42.7969px;
                  border-block-start: 1px solid rgb(242, 243, 248);
                  border-top: 1px solid rgb(242, 243, 248);
                  display: flex;
                  height: 42.7969px;
                  inline-size: 338px;
                  margin-block-start: 10px;
                  margin-top: 10px;
                  min-block-size: auto;
                  min-height: auto;
                  min-inline-size: auto;
                  min-width: auto;
                  padding-block-start: 15px;
                  padding-top: 15px;
                  perspective-origin: 169px 21.3984px;
                  transform-origin: 169px 21.3984px;
                  user-select: none;
                  width: 338px;
                  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
                "
              >
                <a
                  href="/"
                  style="
                    block-size: 19.5938px;
                    cursor: pointer;
                    display: block;
                    font-weight: 700;
                    height: 19.5938px;
                    inline-size: 45.8828px;
                    min-block-size: auto;
                    min-height: auto;
                    min-inline-size: auto;
                    min-width: auto;
                    perspective-origin: 22.9375px 9.79688px;
                    transform-origin: 22.9414px 9.79688px;
                    user-select: none;
                    width: 45.8828px;
                    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
                  "
                  >Explore</a
                >
                <a
                  href="/"
                  class="products_btnSecondary__j4wMK products_mLAuto__k1nDh"
                  style="
                    background-color: rgb(124, 68, 255);
                    block-size: 26.7969px;
                    border-radius: 4px;
                    border-end-end-radius: 4px;
                    border-end-start-radius: 4px;
                    border-start-end-radius: 4px;
                    border-start-start-radius: 4px;
                    box-shadow: rgba(144, 96, 255, 0.3) 0px 4px 10px 0px;
                    caret-color: rgb(255, 255, 255);
                    color: rgb(255, 255, 255);
                    column-rule-color: rgb(255, 255, 255);
                    cursor: pointer;
                    display: block;
                    font-size: 12px;
                    font-weight: 700;
                    height: 26.7969px;
                    inline-size: 84.7656px;
                    line-height: 16.8px;
                    margin-inline-start: 207.359px;
                    margin-left: 207.359px;
                    min-block-size: auto;
                    min-height: auto;
                    min-inline-size: auto;
                    min-width: auto;
                    outline-color: rgb(255, 255, 255);
                    padding-block: 5px;
                    padding: 5px 20px;
                    padding-inline: 20px;
                    perspective-origin: 42.3828px 13.3984px;
                    text-decoration-color: rgb(255, 255, 255);
                    text-emphasis-color: rgb(255, 255, 255);
                    transform-origin: 42.3828px 13.3984px;
                    user-select: none;
                    width: 84.7656px;
                    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
                    -webkit-text-fill-color: rgb(255, 255, 255);
                    -webkit-text-stroke-color: rgb(255, 255, 255);
                  "
                  >Buy Now</a
                >
              </div>
            </div>
          </div>
        </div>
        <div
          data-index="2"
          class="slick-slide slick-active slick-current"
          tabindex="-1"
          aria-hidden="false"
          style="
            outline: none;
            block-size: 304px;
            float: left;
            height: 304px;
            inline-size: 462px;
            min-block-size: 1px;
            min-height: 1px;
            min-inline-size: auto;
            min-width: auto;
            padding-block: 26px 15px;
            padding: 26px 26px 15px;
            padding-inline: 26px;
            perspective-origin: 231px 152px;
            transform-origin: 231px 152px;
            user-select: none;
            width: 462px;
            -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
          "
        >
          <div style="block-size: 263px; height: 263px; inline-size: 380px; max-inline-size: 100%; max-width: 100%; perspective-origin: 190px 131.5px; transform-origin: 190px 131.5px; user-select: none; width: 380px; -webkit-tap-highlight-color: rgba(0, 0, 0, 0)">
            <div
              class="products_card__BiofU undefined productCardBlog"
              style="
                align-items: stretch;
                background-color: rgb(255, 255, 255);
                block-size: 263px;
                border-block: 1px solid rgb(236, 236, 236);
                border-color: rgb(236, 236, 236);
                border-radius: 2px;
                border-style: solid;
                border-width: 1px;
                border-end-end-radius: 2px;
                border-end-start-radius: 2px;
                border-inline: 1px solid rgb(236, 236, 236);
                border-start-end-radius: 2px;
                border-start-start-radius: 2px;
                inset: 0px;
                box-shadow: rgba(220, 220, 220, 0.5) 0px 0px 15px 0px;
                display: flex;
                flex-direction: column;
                height: 263px;
                inline-size: 380px;
                inset-block: 0px;
                inset-inline: 0px;
                max-inline-size: 100%;
                max-width: 100%;
                min-block-size: 263px;
                min-height: 263px;
                padding-block: 30px 20px;
                padding: 30px 20px 20px;
                padding-inline: 20px;
                perspective-origin: 190px 131.5px;
                position: relative;
                transform-origin: 190px 131.5px;
                user-select: none;
                width: 380px;
                -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
              "
            >
              <span
                class="products_slug__gWQEd"
                style="
                  block-size: 16.7969px;
                  border-block-color: rgb(35, 36, 52);
                  border-color: rgb(35, 36, 52);
                  border-inline-color: rgb(35, 36, 52);
                  inset: 5px 323.438px 239.203px 20px;
                  caret-color: rgb(35, 36, 52);
                  color: rgb(35, 36, 52);
                  column-rule-color: rgb(35, 36, 52);
                  display: block;
                  font-size: 12px;
                  height: 16.7969px;
                  inline-size: 34.5625px;
                  inset-block: 5px 239.203px;
                  inset-inline: 20px 323.438px;
                  line-height: 16.8px;
                  outline-color: rgb(35, 36, 52);
                  perspective-origin: 17.2812px 8.39844px;
                  position: absolute;
                  text-decoration-color: rgb(35, 36, 52);
                  text-emphasis-color: rgb(35, 36, 52);
                  transform-origin: 17.2812px 8.39844px;
                  user-select: none;
                  width: 34.5625px;
                  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
                  -webkit-text-fill-color: rgb(35, 36, 52);
                  -webkit-text-stroke-color: rgb(35, 36, 52);
                "
                >Course</span
              >
              <div
                class="products_cardContent__FL__W"
                style="block-size: 128.891px; display: flex; height: 128.891px; inline-size: 338px; min-block-size: auto; min-height: auto; min-inline-size: auto; min-width: auto; perspective-origin: 169px 64.4453px; transform-origin: 169px 64.4453px; user-select: none; width: 338px; -webkit-tap-highlight-color: rgba(0, 0, 0, 0)"
              >
                <div
                  class="products_cardContentLeft__CmSoD"
                  style="
                    align-items: center;
                    block-size: 128.891px;
                    display: flex;
                    flex-direction: column;
                    height: 128.891px;
                    inline-size: 55px;
                    margin-inline-end: 15px;
                    margin-right: 15px;
                    min-block-size: auto;
                    min-height: auto;
                    min-inline-size: auto;
                    min-width: auto;
                    perspective-origin: 27.5px 64.4453px;
                    transform-origin: 27.5px 64.4453px;
                    user-select: none;
                    width: 55px;
                    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
                  "
                >
                  <figure
                    style="
                      block-size: 55px;
                      border-radius: 100%;
                      border-end-end-radius: 100%;
                      border-end-start-radius: 100%;
                      border-start-end-radius: 100%;
                      border-start-start-radius: 100%;
                      height: 55px;
                      inline-size: 55px;
                      margin-block-end: 10px;
                      margin-bottom: 10px;
                      min-block-size: auto;
                      min-height: auto;
                      min-inline-size: auto;
                      min-width: auto;
                      overflow-block: hidden;
                      overflow-inline: hidden;
                      overflow: hidden;
                      perspective-origin: 27.5px 27.5px;
                      transform-origin: 27.5px 27.5px;
                      user-select: none;
                      width: 55px;
                      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
                    "
                  >
                    <img
                      src="/"
                      alt="Backend Developer in Node.js"
                      title="Backend Developer in Node.js"
                      width="55px"
                      loading="lazy"
                      height="55px"
                      style="block-size: 55px; display: block; height: 55px; inline-size: 55px; max-inline-size: 100%; max-width: 100%; perspective-origin: 27.5px 27.5px; transform-origin: 27.5px 27.5px; user-select: none; width: 55px; -webkit-tap-highlight-color: rgba(0, 0, 0, 0)"
                    />
                  </figure>
                  <p
                    class="products_rating__KAGE1"
                    style="
                      align-items: center;
                      block-size: 19.5938px;
                      border-block-color: rgb(56, 64, 76);
                      border-color: rgb(56, 64, 76);
                      border-inline-color: rgb(56, 64, 76);
                      caret-color: rgb(56, 64, 76);
                      color: rgb(56, 64, 76);
                      column-rule-color: rgb(56, 64, 76);
                      display: flex;
                      font-weight: 700;
                      height: 19.5938px;
                      inline-size: 19.3125px;
                      margin-block-end: 0px;
                      margin-bottom: 0px;
                      min-block-size: auto;
                      min-height: auto;
                      min-inline-size: auto;
                      min-width: auto;
                      outline-color: rgb(56, 64, 76);
                      perspective-origin: 9.65625px 9.79688px;
                      text-decoration-color: rgb(56, 64, 76);
                      text-emphasis-color: rgb(56, 64, 76);
                      transform-origin: 9.65625px 9.79688px;
                      user-select: none;
                      width: 19.3125px;
                      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
                      -webkit-text-fill-color: rgb(56, 64, 76);
                      -webkit-text-stroke-color: rgb(56, 64, 76);
                    "
                  >
                    <span
                      style="
                        block-size: 19.5938px;
                        border-block-color: rgb(56, 64, 76);
                        border-color: rgb(56, 64, 76);
                        border-inline-color: rgb(56, 64, 76);
                        caret-color: rgb(56, 64, 76);
                        color: rgb(56, 64, 76);
                        column-rule-color: rgb(56, 64, 76);
                        display: block;
                        font-weight: 700;
                        height: 19.5938px;
                        inline-size: 19.3203px;
                        min-block-size: auto;
                        min-height: auto;
                        min-inline-size: auto;
                        min-width: auto;
                        outline-color: rgb(56, 64, 76);
                        perspective-origin: 9.65625px 9.79688px;
                        text-decoration-color: rgb(56, 64, 76);
                        text-emphasis-color: rgb(56, 64, 76);
                        transform-origin: 9.66016px 9.79688px;
                        user-select: none;
                        width: 19.3203px;
                        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
                        -webkit-text-fill-color: rgb(56, 64, 76);
                        -webkit-text-stroke-color: rgb(56, 64, 76);
                      "
                      >4.5
                    </span>
                  </p>
                </div>
                <div
                  class="products_cardContentRight__046Gw"
                  style="
                    block-size: 128.891px;
                    display: flex;
                    flex-basis: 0%;
                    flex-direction: column;
                    flex-grow: 1;
                    font-size: 13px;
                    height: 128.891px;
                    inline-size: 268px;
                    line-height: 18.2px;
                    min-block-size: auto;
                    min-height: auto;
                    min-inline-size: auto;
                    min-width: auto;
                    perspective-origin: 134px 64.4453px;
                    transform-origin: 134px 64.4453px;
                    user-select: none;
                    width: 268px;
                    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
                  "
                >
                  <p
                    class="products_mB15__VQe_i"
                    style="
                      font-size: 20px;
                      block-size: 28px;
                      height: 28px;
                      inline-size: 268px;
                      line-height: 28px;
                      margin-block-end: 15px;
                      margin-bottom: 15px;
                      min-block-size: auto;
                      min-height: auto;
                      min-inline-size: auto;
                      min-width: auto;
                      perspective-origin: 134px 14px;
                      transform-origin: 134px 14px;
                      user-select: none;
                      width: 268px;
                      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
                    "
                  >
                    <a
                      href="/"
                      style="
                        color: rgb(35, 36, 52);
                        border-block-color: rgb(35, 36, 52);
                        border-color: rgb(35, 36, 52);
                        border-inline-color: rgb(35, 36, 52);
                        caret-color: rgb(35, 36, 52);
                        column-rule-color: rgb(35, 36, 52);
                        cursor: pointer;
                        font-size: 20px;
                        line-height: 28px;
                        outline-color: rgb(35, 36, 52);
                        text-decoration-color: rgb(35, 36, 52);
                        text-emphasis-color: rgb(35, 36, 52);
                        user-select: none;
                        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
                        -webkit-text-fill-color: rgb(35, 36, 52);
                        -webkit-text-stroke-color: rgb(35, 36, 52);
                      "
                      >Backend Developer in Node.js</a
                    >
                  </p>
                  <span
                    class="products_author__l8U2J"
                    style="
                      block-size: 18.1953px;
                      display: block;
                      font-size: 13px;
                      height: 18.1953px;
                      inline-size: 268px;
                      line-height: 18.2px;
                      margin-block-end: 5px;
                      margin-bottom: 5px;
                      min-block-size: auto;
                      min-height: auto;
                      min-inline-size: auto;
                      min-width: auto;
                      perspective-origin: 134px 9.09375px;
                      transform-origin: 134px 9.09766px;
                      user-select: none;
                      width: 268px;
                      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
                    "
                    >TestPrepTraining</span
                  >
                  <p
                    class="products_durationMode__c3H_l"
                    style="
                      block-size: 37px;
                      font-size: 13px;
                      height: 37px;
                      inline-size: 268px;
                      line-height: 17px;
                      margin-block-end: 0px;
                      margin-bottom: 0px;
                      min-block-size: auto;
                      min-height: auto;
                      min-inline-size: auto;
                      min-width: auto;
                      overflow-block: hidden;
                      overflow-inline: hidden;
                      overflow: hidden;
                      perspective-origin: 134px 18.5px;
                      transform-origin: 134px 18.5px;
                      user-select: none;
                      width: 268px;
                      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
                    "
                  >
                    Duration: <span style="font-size: 13px; line-height: 17px; user-select: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0)">41 Hours</span
                    ><span class="products_divider__PJh_j" style="font-size: 13px; line-height: 17px; margin-inline: 1px; margin-left: 1px; margin-right: 1px; user-select: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0)">|</span>Mode:
                    <span style="font-size: 13px; line-height: 17px; user-select: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0)">Online</span>
                  </p>
                  <p
                    class="products_priceOffer__TlebB"
                    style="
                      align-items: center;
                      block-size: 25.6875px;
                      display: flex;
                      font-size: 13px;
                      height: 25.6875px;
                      inline-size: 268px;
                      line-height: 18.2px;
                      margin-block-end: 0px;
                      margin-bottom: 0px;
                      min-block-size: auto;
                      min-height: auto;
                      min-inline-size: auto;
                      min-width: auto;
                      perspective-origin: 134px 12.8438px;
                      transform-origin: 134px 12.8438px;
                      user-select: none;
                      width: 268px;
                      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
                    "
                  >
                    <strong
                      class="products_price__54eMC"
                      data-id="3"
                      style="
                        block-size: 25.6953px;
                        border-block-color: rgb(56, 64, 76);
                        border-color: rgb(56, 64, 76);
                        border-inline-color: rgb(56, 64, 76);
                        caret-color: rgb(56, 64, 76);
                        color: rgb(56, 64, 76);
                        column-rule-color: rgb(56, 64, 76);
                        display: block;
                        font-size: 18px;
                        height: 25.6953px;
                        inline-size: 62.9922px;
                        line-height: 25.2px;
                        min-block-size: auto;
                        min-height: auto;
                        min-inline-size: auto;
                        min-width: auto;
                        outline-color: rgb(56, 64, 76);
                        perspective-origin: 31.4922px 12.8438px;
                        text-decoration-color: rgb(56, 64, 76);
                        text-emphasis-color: rgb(56, 64, 76);
                        transform-origin: 31.4961px 12.8477px;
                        user-select: none;
                        width: 62.9922px;
                        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
                        -webkit-text-fill-color: rgb(56, 64, 76);
                        -webkit-text-stroke-color: rgb(56, 64, 76);
                      "
                      >12999
                    </strong>
                  </p>
                </div>
              </div>
              <div
                class="products_cardContentBottom__ZpMee"
                style="
                  align-items: center;
                  block-size: 42.7969px;
                  border-block-start: 1px solid rgb(242, 243, 248);
                  border-top: 1px solid rgb(242, 243, 248);
                  display: flex;
                  height: 42.7969px;
                  inline-size: 338px;
                  margin-block-start: 10px;
                  margin-top: 10px;
                  min-block-size: auto;
                  min-height: auto;
                  min-inline-size: auto;
                  min-width: auto;
                  padding-block-start: 15px;
                  padding-top: 15px;
                  perspective-origin: 169px 21.3984px;
                  transform-origin: 169px 21.3984px;
                  user-select: none;
                  width: 338px;
                  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
                "
              >
                <a
                  href="/"
                  style="
                    block-size: 19.5938px;
                    cursor: pointer;
                    display: block;
                    font-weight: 700;
                    height: 19.5938px;
                    inline-size: 45.8828px;
                    min-block-size: auto;
                    min-height: auto;
                    min-inline-size: auto;
                    min-width: auto;
                    perspective-origin: 22.9375px 9.79688px;
                    transform-origin: 22.9414px 9.79688px;
                    user-select: none;
                    width: 45.8828px;
                    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
                  "
                  >Explore</a
                >
                <a
                  href="/"
                  class="products_btnSecondary__j4wMK products_mLAuto__k1nDh"
                  style="
                    background-color: rgb(124, 68, 255);
                    block-size: 26.7969px;
                    border-radius: 4px;
                    border-end-end-radius: 4px;
                    border-end-start-radius: 4px;
                    border-start-end-radius: 4px;
                    border-start-start-radius: 4px;
                    box-shadow: rgba(144, 96, 255, 0.3) 0px 4px 10px 0px;
                    caret-color: rgb(255, 255, 255);
                    color: rgb(255, 255, 255);
                    column-rule-color: rgb(255, 255, 255);
                    cursor: pointer;
                    display: block;
                    font-size: 12px;
                    font-weight: 700;
                    height: 26.7969px;
                    inline-size: 84.7656px;
                    line-height: 16.8px;
                    margin-inline-start: 207.359px;
                    margin-left: 207.359px;
                    min-block-size: auto;
                    min-height: auto;
                    min-inline-size: auto;
                    min-width: auto;
                    outline-color: rgb(255, 255, 255);
                    padding-block: 5px;
                    padding: 5px 20px;
                    padding-inline: 20px;
                    perspective-origin: 42.3828px 13.3984px;
                    text-decoration-color: rgb(255, 255, 255);
                    text-emphasis-color: rgb(255, 255, 255);
                    transform-origin: 42.3828px 13.3984px;
                    user-select: none;
                    width: 84.7656px;
                    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
                    -webkit-text-fill-color: rgb(255, 255, 255);
                    -webkit-text-stroke-color: rgb(255, 255, 255);
                  "
                  >Buy Now</a
                >
              </div>
            </div>
          </div>
        </div>
        <div
          data-index="3"
          class="slick-slide slick-active"
          tabindex="-1"
          aria-hidden="false"
          style="
            outline: none;
            block-size: 304px;
            float: left;
            height: 304px;
            inline-size: 462px;
            min-block-size: 1px;
            min-height: 1px;
            min-inline-size: auto;
            min-width: auto;
            padding-block: 26px 15px;
            padding: 26px 26px 15px;
            padding-inline: 26px;
            perspective-origin: 231px 152px;
            transform-origin: 231px 152px;
            user-select: none;
            width: 462px;
            -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
          "
        >
          <div style="block-size: 263px; height: 263px; inline-size: 380px; max-inline-size: 100%; max-width: 100%; perspective-origin: 190px 131.5px; transform-origin: 190px 131.5px; user-select: none; width: 380px; -webkit-tap-highlight-color: rgba(0, 0, 0, 0)">
            <div
              class="products_card__BiofU undefined productCardBlog"
              style="
                align-items: stretch;
                background-color: rgb(255, 255, 255);
                block-size: 263px;
                border-block: 1px solid rgb(236, 236, 236);
                border-color: rgb(236, 236, 236);
                border-radius: 2px;
                border-style: solid;
                border-width: 1px;
                border-end-end-radius: 2px;
                border-end-start-radius: 2px;
                border-inline: 1px solid rgb(236, 236, 236);
                border-start-end-radius: 2px;
                border-start-start-radius: 2px;
                inset: 0px;
                box-shadow: rgba(220, 220, 220, 0.5) 0px 0px 15px 0px;
                display: flex;
                flex-direction: column;
                height: 263px;
                inline-size: 380px;
                inset-block: 0px;
                inset-inline: 0px;
                max-inline-size: 100%;
                max-width: 100%;
                min-block-size: 263px;
                min-height: 263px;
                padding-block: 30px 20px;
                padding: 30px 20px 20px;
                padding-inline: 20px;
                perspective-origin: 190px 131.5px;
                position: relative;
                transform-origin: 190px 131.5px;
                user-select: none;
                width: 380px;
                -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
              "
            >
              <span
                class="products_slug__gWQEd"
                style="
                  block-size: 16.7969px;
                  border-block-color: rgb(35, 36, 52);
                  border-color: rgb(35, 36, 52);
                  border-inline-color: rgb(35, 36, 52);
                  inset: 5px 323.438px 239.203px 20px;
                  caret-color: rgb(35, 36, 52);
                  color: rgb(35, 36, 52);
                  column-rule-color: rgb(35, 36, 52);
                  display: block;
                  font-size: 12px;
                  height: 16.7969px;
                  inline-size: 34.5625px;
                  inset-block: 5px 239.203px;
                  inset-inline: 20px 323.438px;
                  line-height: 16.8px;
                  outline-color: rgb(35, 36, 52);
                  perspective-origin: 17.2812px 8.39844px;
                  position: absolute;
                  text-decoration-color: rgb(35, 36, 52);
                  text-emphasis-color: rgb(35, 36, 52);
                  transform-origin: 17.2812px 8.39844px;
                  user-select: none;
                  width: 34.5625px;
                  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
                  -webkit-text-fill-color: rgb(35, 36, 52);
                  -webkit-text-stroke-color: rgb(35, 36, 52);
                "
                >Course</span
              >
              <div
                class="products_cardContent__FL__W"
                style="block-size: 128.891px; display: flex; height: 128.891px; inline-size: 338px; min-block-size: auto; min-height: auto; min-inline-size: auto; min-width: auto; perspective-origin: 169px 64.4453px; transform-origin: 169px 64.4453px; user-select: none; width: 338px; -webkit-tap-highlight-color: rgba(0, 0, 0, 0)"
              >
                <div
                  class="products_cardContentLeft__CmSoD"
                  style="
                    align-items: center;
                    block-size: 128.891px;
                    display: flex;
                    flex-direction: column;
                    height: 128.891px;
                    inline-size: 55px;
                    margin-inline-end: 15px;
                    margin-right: 15px;
                    min-block-size: auto;
                    min-height: auto;
                    min-inline-size: auto;
                    min-width: auto;
                    perspective-origin: 27.5px 64.4453px;
                    transform-origin: 27.5px 64.4453px;
                    user-select: none;
                    width: 55px;
                    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
                  "
                >
                  <figure
                    style="
                      block-size: 55px;
                      border-radius: 100%;
                      border-end-end-radius: 100%;
                      border-end-start-radius: 100%;
                      border-start-end-radius: 100%;
                      border-start-start-radius: 100%;
                      height: 55px;
                      inline-size: 55px;
                      margin-block-end: 10px;
                      margin-bottom: 10px;
                      min-block-size: auto;
                      min-height: auto;
                      min-inline-size: auto;
                      min-width: auto;
                      overflow-block: hidden;
                      overflow-inline: hidden;
                      overflow: hidden;
                      perspective-origin: 27.5px 27.5px;
                      transform-origin: 27.5px 27.5px;
                      user-select: none;
                      width: 55px;
                      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
                    "
                  >
                    <img
                      src="/"
                      alt="Backend Developer in .Net"
                      title="Backend Developer in .Net"
                      width="55px"
                      loading="lazy"
                      height="55px"
                      style="block-size: 55px; display: block; height: 55px; inline-size: 55px; max-inline-size: 100%; max-width: 100%; perspective-origin: 27.5px 27.5px; transform-origin: 27.5px 27.5px; user-select: none; width: 55px; -webkit-tap-highlight-color: rgba(0, 0, 0, 0)"
                    />
                  </figure>
                  <p
                    class="products_rating__KAGE1"
                    style="
                      align-items: center;
                      block-size: 19.5938px;
                      border-block-color: rgb(56, 64, 76);
                      border-color: rgb(56, 64, 76);
                      border-inline-color: rgb(56, 64, 76);
                      caret-color: rgb(56, 64, 76);
                      color: rgb(56, 64, 76);
                      column-rule-color: rgb(56, 64, 76);
                      display: flex;
                      font-weight: 700;
                      height: 19.5938px;
                      inline-size: 19.3125px;
                      margin-block-end: 0px;
                      margin-bottom: 0px;
                      min-block-size: auto;
                      min-height: auto;
                      min-inline-size: auto;
                      min-width: auto;
                      outline-color: rgb(56, 64, 76);
                      perspective-origin: 9.65625px 9.79688px;
                      text-decoration-color: rgb(56, 64, 76);
                      text-emphasis-color: rgb(56, 64, 76);
                      transform-origin: 9.65625px 9.79688px;
                      user-select: none;
                      width: 19.3125px;
                      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
                      -webkit-text-fill-color: rgb(56, 64, 76);
                      -webkit-text-stroke-color: rgb(56, 64, 76);
                    "
                  >
                    <span
                      style="
                        block-size: 19.5938px;
                        border-block-color: rgb(56, 64, 76);
                        border-color: rgb(56, 64, 76);
                        border-inline-color: rgb(56, 64, 76);
                        caret-color: rgb(56, 64, 76);
                        color: rgb(56, 64, 76);
                        column-rule-color: rgb(56, 64, 76);
                        display: block;
                        font-weight: 700;
                        height: 19.5938px;
                        inline-size: 19.3203px;
                        min-block-size: auto;
                        min-height: auto;
                        min-inline-size: auto;
                        min-width: auto;
                        outline-color: rgb(56, 64, 76);
                        perspective-origin: 9.65625px 9.79688px;
                        text-decoration-color: rgb(56, 64, 76);
                        text-emphasis-color: rgb(56, 64, 76);
                        transform-origin: 9.66016px 9.79688px;
                        user-select: none;
                        width: 19.3203px;
                        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
                        -webkit-text-fill-color: rgb(56, 64, 76);
                        -webkit-text-stroke-color: rgb(56, 64, 76);
                      "
                      >4.5
                    </span>
                  </p>
                </div>
                <div
                  class="products_cardContentRight__046Gw"
                  style="
                    block-size: 128.891px;
                    display: flex;
                    flex-basis: 0%;
                    flex-direction: column;
                    flex-grow: 1;
                    font-size: 13px;
                    height: 128.891px;
                    inline-size: 268px;
                    line-height: 18.2px;
                    min-block-size: auto;
                    min-height: auto;
                    min-inline-size: auto;
                    min-width: auto;
                    perspective-origin: 134px 64.4453px;
                    transform-origin: 134px 64.4453px;
                    user-select: none;
                    width: 268px;
                    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
                  "
                >
                  <p
                    class="products_mB15__VQe_i"
                    style="
                      font-size: 20px;
                      block-size: 28px;
                      height: 28px;
                      inline-size: 268px;
                      line-height: 28px;
                      margin-block-end: 15px;
                      margin-bottom: 15px;
                      min-block-size: auto;
                      min-height: auto;
                      min-inline-size: auto;
                      min-width: auto;
                      perspective-origin: 134px 14px;
                      transform-origin: 134px 14px;
                      user-select: none;
                      width: 268px;
                      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
                    "
                  >
                    <a
                      href="/"
                      style="
                        color: rgb(35, 36, 52);
                        border-block-color: rgb(35, 36, 52);
                        border-color: rgb(35, 36, 52);
                        border-inline-color: rgb(35, 36, 52);
                        caret-color: rgb(35, 36, 52);
                        column-rule-color: rgb(35, 36, 52);
                        cursor: pointer;
                        font-size: 20px;
                        line-height: 28px;
                        outline-color: rgb(35, 36, 52);
                        text-decoration-color: rgb(35, 36, 52);
                        text-emphasis-color: rgb(35, 36, 52);
                        user-select: none;
                        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
                        -webkit-text-fill-color: rgb(35, 36, 52);
                        -webkit-text-stroke-color: rgb(35, 36, 52);
                      "
                      >Backend Developer in .Net</a
                    >
                  </p>
                  <span
                    class="products_author__l8U2J"
                    style="
                      block-size: 18.1953px;
                      display: block;
                      font-size: 13px;
                      height: 18.1953px;
                      inline-size: 268px;
                      line-height: 18.2px;
                      margin-block-end: 5px;
                      margin-bottom: 5px;
                      min-block-size: auto;
                      min-height: auto;
                      min-inline-size: auto;
                      min-width: auto;
                      perspective-origin: 134px 9.09375px;
                      transform-origin: 134px 9.09766px;
                      user-select: none;
                      width: 268px;
                      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
                    "
                    >TestPrepTraining</span
                  >
                  <p
                    class="products_durationMode__c3H_l"
                    style="
                      block-size: 37px;
                      font-size: 13px;
                      height: 37px;
                      inline-size: 268px;
                      line-height: 17px;
                      margin-block-end: 0px;
                      margin-bottom: 0px;
                      min-block-size: auto;
                      min-height: auto;
                      min-inline-size: auto;
                      min-width: auto;
                      overflow-block: hidden;
                      overflow-inline: hidden;
                      overflow: hidden;
                      perspective-origin: 134px 18.5px;
                      transform-origin: 134px 18.5px;
                      user-select: none;
                      width: 268px;
                      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
                    "
                  >
                    Duration: <span style="font-size: 13px; line-height: 17px; user-select: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0)">21 Hours</span
                    ><span class="products_divider__PJh_j" style="font-size: 13px; line-height: 17px; margin-inline: 1px; margin-left: 1px; margin-right: 1px; user-select: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0)">|</span>Mode:
                    <span style="font-size: 13px; line-height: 17px; user-select: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0)">Online</span>
                  </p>
                  <p
                    class="products_priceOffer__TlebB"
                    style="
                      align-items: center;
                      block-size: 25.6875px;
                      display: flex;
                      font-size: 13px;
                      height: 25.6875px;
                      inline-size: 268px;
                      line-height: 18.2px;
                      margin-block-end: 0px;
                      margin-bottom: 0px;
                      min-block-size: auto;
                      min-height: auto;
                      min-inline-size: auto;
                      min-width: auto;
                      perspective-origin: 134px 12.8438px;
                      transform-origin: 134px 12.8438px;
                      user-select: none;
                      width: 268px;
                      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
                    "
                  >
                    <strong
                      class="products_price__54eMC"
                      data-id="4"
                      style="
                        block-size: 25.6953px;
                        border-block-color: rgb(56, 64, 76);
                        border-color: rgb(56, 64, 76);
                        border-inline-color: rgb(56, 64, 76);
                        caret-color: rgb(56, 64, 76);
                        color: rgb(56, 64, 76);
                        column-rule-color: rgb(56, 64, 76);
                        display: block;
                        font-size: 18px;
                        height: 25.6953px;
                        inline-size: 62.9922px;
                        line-height: 25.2px;
                        min-block-size: auto;
                        min-height: auto;
                        min-inline-size: auto;
                        min-width: auto;
                        outline-color: rgb(56, 64, 76);
                        perspective-origin: 31.4922px 12.8438px;
                        text-decoration-color: rgb(56, 64, 76);
                        text-emphasis-color: rgb(56, 64, 76);
                        transform-origin: 31.4961px 12.8477px;
                        user-select: none;
                        width: 62.9922px;
                        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
                        -webkit-text-fill-color: rgb(56, 64, 76);
                        -webkit-text-stroke-color: rgb(56, 64, 76);
                      "
                      >12999
                    </strong>
                  </p>
                </div>
              </div>
              <div
                class="products_cardContentBottom__ZpMee"
                style="
                  align-items: center;
                  block-size: 42.7969px;
                  border-block-start: 1px solid rgb(242, 243, 248);
                  border-top: 1px solid rgb(242, 243, 248);
                  display: flex;
                  height: 42.7969px;
                  inline-size: 338px;
                  margin-block-start: 10px;
                  margin-top: 10px;
                  min-block-size: auto;
                  min-height: auto;
                  min-inline-size: auto;
                  min-width: auto;
                  padding-block-start: 15px;
                  padding-top: 15px;
                  perspective-origin: 169px 21.3984px;
                  transform-origin: 169px 21.3984px;
                  user-select: none;
                  width: 338px;
                  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
                "
              >
                <a
                  href="/"
                  style="
                    block-size: 19.5938px;
                    cursor: pointer;
                    display: block;
                    font-weight: 700;
                    height: 19.5938px;
                    inline-size: 45.8828px;
                    min-block-size: auto;
                    min-height: auto;
                    min-inline-size: auto;
                    min-width: auto;
                    perspective-origin: 22.9375px 9.79688px;
                    transform-origin: 22.9414px 9.79688px;
                    user-select: none;
                    width: 45.8828px;
                    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
                  "
                  >Explore</a
                >
                <a
                  href="/"
                  class="products_btnSecondary__j4wMK products_mLAuto__k1nDh"
                  style="
                    background-color: rgb(124, 68, 255);
                    block-size: 26.7969px;
                    border-radius: 4px;
                    border-end-end-radius: 4px;
                    border-end-start-radius: 4px;
                    border-start-end-radius: 4px;
                    border-start-start-radius: 4px;
                    box-shadow: rgba(144, 96, 255, 0.3) 0px 4px 10px 0px;
                    caret-color: rgb(255, 255, 255);
                    color: rgb(255, 255, 255);
                    column-rule-color: rgb(255, 255, 255);
                    cursor: pointer;
                    display: block;
                    font-size: 12px;
                    font-weight: 700;
                    height: 26.7969px;
                    inline-size: 84.7656px;
                    line-height: 16.8px;
                    margin-inline-start: 207.359px;
                    margin-left: 207.359px;
                    min-block-size: auto;
                    min-height: auto;
                    min-inline-size: auto;
                    min-width: auto;
                    outline-color: rgb(255, 255, 255);
                    padding-block: 5px;
                    padding: 5px 20px;
                    padding-inline: 20px;
                    perspective-origin: 42.3828px 13.3984px;
                    text-decoration-color: rgb(255, 255, 255);
                    text-emphasis-color: rgb(255, 255, 255);
                    transform-origin: 42.3828px 13.3984px;
                    user-select: none;
                    width: 84.7656px;
                    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
                    -webkit-text-fill-color: rgb(255, 255, 255);
                    -webkit-text-stroke-color: rgb(255, 255, 255);
                  "
                  >Buy Now</a
                >
              </div>
            </div>
          </div>
        </div>
        <div
          data-index="4"
          class="slick-slide"
          tabindex="-1"
          aria-hidden="true"
          style="
            outline: none;
            block-size: 304px;
            float: left;
            height: 304px;
            inline-size: 462px;
            min-block-size: 1px;
            min-height: 1px;
            min-inline-size: auto;
            min-width: auto;
            padding-block: 26px 15px;
            padding: 26px 26px 15px;
            padding-inline: 26px;
            perspective-origin: 231px 152px;
            transform-origin: 231px 152px;
            user-select: none;
            width: 462px;
            -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
          "
        ></div>
        <div
          data-index="5"
          class="slick-slide"
          tabindex="-1"
          aria-hidden="true"
          style="
            outline: none;
            block-size: 304px;
            float: left;
            height: 304px;
            inline-size: 462px;
            min-block-size: 1px;
            min-height: 1px;
            min-inline-size: auto;
            min-width: auto;
            padding-block: 26px 15px;
            padding: 26px 26px 15px;
            padding-inline: 26px;
            perspective-origin: 231px 152px;
            transform-origin: 231px 152px;
            user-select: none;
            width: 462px;
            -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
          "
        ></div>
      </div>
    </div>
  </div>
  <a class="courses_viewAll__b9lic" href="/" style="block-size: 19.5938px; cursor: pointer; display: block; font-weight: 700; height: 19.5938px; inline-size: 930px; perspective-origin: 465px 9.79688px; text-align: center; transform-origin: 465px 9.79688px; width: 930px">View All</a>
</div>
<style>
  [data-id="0"]::after {
    background-image: url("/");
    background-position: -111px -52px;
    background-repeat: no-repeat;
    block-size: 20px;
    border-block-end-color: rgba(0, 0, 0, 0);
    border-block-start-color: rgba(0, 0, 0, 0);
    border-bottom-color: rgba(0, 0, 0, 0);
    border-inline-end-color: rgba(0, 0, 0, 0);
    border-inline-start-color: rgba(0, 0, 0, 0);
    border-left-color: rgba(0, 0, 0, 0);
    border-right-color: rgba(0, 0, 0, 0);
    border-top-color: rgba(0, 0, 0, 0);
    bottom: 0px;
    caret-color: rgba(0, 0, 0, 0);
    color: rgba(0, 0, 0, 0);
    column-rule-color: rgba(0, 0, 0, 0);
    content: "";
    cursor: pointer;
    display: block;
    font-size: 0px;
    height: 20px;
    inline-size: 12px;
    inset-block-end: 0px;
    inset-block-start: 0px;
    inset-inline-end: 0px;
    inset-inline-start: 0px;
    left: 0px;
    line-height: 0px;
    margin-block-end: 9px;
    margin-block-start: 9px;
    margin-bottom: 9px;
    margin-inline-end: 13px;
    margin-inline-start: 13px;
    margin-left: 13px;
    margin-right: 13px;
    margin-top: 9px;
    outline-color: rgba(0, 0, 0, 0);
    perspective-origin: 6px 10px;
    position: absolute;
    right: 0px;
    text-decoration-color: rgba(0, 0, 0, 0);
    text-emphasis-color: rgba(0, 0, 0, 0);
    top: 0px;
    transform: matrix(0.7, 0, 0, 0.7, 0, 0);
    transform-origin: 6px 10px;
    user-select: none;
    width: 12px;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-text-fill-color: rgba(0, 0, 0, 0);
    -webkit-text-stroke-color: rgba(0, 0, 0, 0);
  }
  [data-id="0"]::before {
    border-block-end-color: rgb(255, 255, 255);
    border-block-start-color: rgb(255, 255, 255);
    border-bottom-color: rgb(255, 255, 255);
    border-inline-end-color: rgb(255, 255, 255);
    border-inline-start-color: rgb(255, 255, 255);
    border-left-color: rgb(255, 255, 255);
    border-right-color: rgb(255, 255, 255);
    border-top-color: rgb(255, 255, 255);
    caret-color: rgba(0, 0, 0, 0);
    color: rgb(255, 255, 255);
    column-rule-color: rgb(255, 255, 255);
    content: "";
    cursor: pointer;
    font-family: "'PT Sans', sans-serif";
    font-size: 20px;
    line-height: 20px;
    opacity: 0.75;
    outline-color: rgb(255, 255, 255);
    perspective-origin: 0px 0px;
    text-decoration-color: rgb(255, 255, 255);
    text-emphasis-color: rgba(0, 0, 0, 0);
    transform-origin: 0px 0px;
    user-select: none;
    -webkit-font-smoothing: antialiased;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-text-fill-color: rgba(0, 0, 0, 0);
    -webkit-text-stroke-color: rgba(0, 0, 0, 0);
  }
  [data-id="1"]::before {
    border-block-end-color: rgb(56, 64, 76);
    border-block-start-color: rgb(56, 64, 76);
    border-bottom-color: rgb(56, 64, 76);
    border-inline-end-color: rgb(56, 64, 76);
    border-inline-start-color: rgb(56, 64, 76);
    border-left-color: rgb(56, 64, 76);
    border-right-color: rgb(56, 64, 76);
    border-top-color: rgb(56, 64, 76);
    caret-color: rgb(56, 64, 76);
    color: rgb(56, 64, 76);
    column-rule-color: rgb(56, 64, 76);
    content: "₹";
    font-family: Arial, Helvetica, sans-serif;
    font-size: 18px;
    line-height: 25.2px;
    margin-inline-end: 2px;
    margin-right: 2px;
    outline-color: rgb(56, 64, 76);
    perspective-origin: 0px 0px;
    text-decoration-color: rgb(56, 64, 76);
    text-emphasis-color: rgb(56, 64, 76);
    transform-origin: 0px 0px;
    user-select: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-text-fill-color: rgb(56, 64, 76);
    -webkit-text-stroke-color: rgb(56, 64, 76);
  }
  [data-id="2"]::before {
    border-block-end-color: rgb(56, 64, 76);
    border-block-start-color: rgb(56, 64, 76);
    border-bottom-color: rgb(56, 64, 76);
    border-inline-end-color: rgb(56, 64, 76);
    border-inline-start-color: rgb(56, 64, 76);
    border-left-color: rgb(56, 64, 76);
    border-right-color: rgb(56, 64, 76);
    border-top-color: rgb(56, 64, 76);
    caret-color: rgb(56, 64, 76);
    color: rgb(56, 64, 76);
    column-rule-color: rgb(56, 64, 76);
    content: "₹";
    font-family: Arial, Helvetica, sans-serif;
    font-size: 18px;
    line-height: 25.2px;
    margin-inline-end: 2px;
    margin-right: 2px;
    outline-color: rgb(56, 64, 76);
    perspective-origin: 0px 0px;
    text-decoration-color: rgb(56, 64, 76);
    text-emphasis-color: rgb(56, 64, 76);
    transform-origin: 0px 0px;
    user-select: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-text-fill-color: rgb(56, 64, 76);
    -webkit-text-stroke-color: rgb(56, 64, 76);
  }
  [data-id="3"]::before {
    border-block-end-color: rgb(56, 64, 76);
    border-block-start-color: rgb(56, 64, 76);
    border-bottom-color: rgb(56, 64, 76);
    border-inline-end-color: rgb(56, 64, 76);
    border-inline-start-color: rgb(56, 64, 76);
    border-left-color: rgb(56, 64, 76);
    border-right-color: rgb(56, 64, 76);
    border-top-color: rgb(56, 64, 76);
    caret-color: rgb(56, 64, 76);
    color: rgb(56, 64, 76);
    column-rule-color: rgb(56, 64, 76);
    content: "₹";
    font-family: Arial, Helvetica, sans-serif;
    font-size: 18px;
    line-height: 25.2px;
    margin-inline-end: 2px;
    margin-right: 2px;
    outline-color: rgb(56, 64, 76);
    perspective-origin: 0px 0px;
    text-decoration-color: rgb(56, 64, 76);
    text-emphasis-color: rgb(56, 64, 76);
    transform-origin: 0px 0px;
    user-select: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-text-fill-color: rgb(56, 64, 76);
    -webkit-text-stroke-color: rgb(56, 64, 76);
  }
  [data-id="4"]::before {
    border-block-end-color: rgb(56, 64, 76);
    border-block-start-color: rgb(56, 64, 76);
    border-bottom-color: rgb(56, 64, 76);
    border-inline-end-color: rgb(56, 64, 76);
    border-inline-start-color: rgb(56, 64, 76);
    border-left-color: rgb(56, 64, 76);
    border-right-color: rgb(56, 64, 76);
    border-top-color: rgb(56, 64, 76);
    caret-color: rgb(56, 64, 76);
    color: rgb(56, 64, 76);
    column-rule-color: rgb(56, 64, 76);
    content: "₹";
    font-family: Arial, Helvetica, sans-serif;
    font-size: 18px;
    line-height: 25.2px;
    margin-inline-end: 2px;
    margin-right: 2px;
    outline-color: rgb(56, 64, 76);
    perspective-origin: 0px 0px;
    text-decoration-color: rgb(56, 64, 76);
    text-emphasis-color: rgb(56, 64, 76);
    transform-origin: 0px 0px;
    user-select: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-text-fill-color: rgb(56, 64, 76);
    -webkit-text-stroke-color: rgb(56, 64, 76);
  }
  [data-id="5"]::after {
    block-size: 304px;
    clear: both;
    content: "";
    display: table;
    height: 304px;
    inline-size: 0px;
    min-block-size: auto;
    min-height: auto;
    min-inline-size: auto;
    min-width: auto;
    perspective-origin: 0px 152px;
    transform-origin: 0px 152px;
    user-select: none;
    width: 0px;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
  [data-id="5"]::before {
    block-size: 304px;
    content: "";
    display: table;
    height: 304px;
    inline-size: 0px;
    min-block-size: auto;
    min-height: auto;
    min-inline-size: auto;
    min-width: auto;
    perspective-origin: 0px 152px;
    transform-origin: 0px 152px;
    user-select: none;
    width: 0px;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
  [data-id="6"]::after {
    background-image: url("/");
    background-position: -111px -52px;
    background-repeat: no-repeat;
    block-size: 20px;
    border-block-end-color: rgba(0, 0, 0, 0);
    border-block-start-color: rgba(0, 0, 0, 0);
    border-bottom-color: rgba(0, 0, 0, 0);
    border-inline-end-color: rgba(0, 0, 0, 0);
    border-inline-start-color: rgba(0, 0, 0, 0);
    border-left-color: rgba(0, 0, 0, 0);
    border-right-color: rgba(0, 0, 0, 0);
    border-top-color: rgba(0, 0, 0, 0);
    bottom: 0px;
    caret-color: rgba(0, 0, 0, 0);
    color: rgba(0, 0, 0, 0);
    column-rule-color: rgba(0, 0, 0, 0);
    content: "";
    cursor: pointer;
    display: block;
    font-size: 0px;
    height: 20px;
    inline-size: 12px;
    inset-block-end: 0px;
    inset-block-start: 0px;
    inset-inline-end: 0px;
    inset-inline-start: 0px;
    left: 0px;
    line-height: 0px;
    margin-block-end: 9px;
    margin-block-start: 9px;
    margin-bottom: 9px;
    margin-inline-end: 13px;
    margin-inline-start: 13px;
    margin-left: 13px;
    margin-right: 13px;
    margin-top: 9px;
    outline-color: rgba(0, 0, 0, 0);
    perspective-origin: 6px 10px;
    position: absolute;
    right: 0px;
    text-decoration-color: rgba(0, 0, 0, 0);
    text-emphasis-color: rgba(0, 0, 0, 0);
    top: 0px;
    transform: matrix(-0.7, 0, 0, -0.7, 0, 0);
    transform-origin: 6px 10px;
    user-select: none;
    width: 12px;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-text-fill-color: rgba(0, 0, 0, 0);
    -webkit-text-stroke-color: rgba(0, 0, 0, 0);
  }
  [data-id="6"]::before {
    border-block-end-color: rgb(255, 255, 255);
    border-block-start-color: rgb(255, 255, 255);
    border-bottom-color: rgb(255, 255, 255);
    border-inline-end-color: rgb(255, 255, 255);
    border-inline-start-color: rgb(255, 255, 255);
    border-left-color: rgb(255, 255, 255);
    border-right-color: rgb(255, 255, 255);
    border-top-color: rgb(255, 255, 255);
    caret-color: rgba(0, 0, 0, 0);
    color: rgb(255, 255, 255);
    column-rule-color: rgb(255, 255, 255);
    content: "";
    cursor: pointer;
    font-family: "'PT Sans', sans-serif";
    font-size: 20px;
    line-height: 20px;
    opacity: 0.75;
    outline-color: rgb(255, 255, 255);
    perspective-origin: 0px 0px;
    text-decoration-color: rgb(255, 255, 255);
    text-emphasis-color: rgba(0, 0, 0, 0);
    transform-origin: 0px 0px;
    user-select: none;
    -webkit-font-smoothing: antialiased;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-text-fill-color: rgba(0, 0, 0, 0);
    -webkit-text-stroke-color: rgba(0, 0, 0, 0);
  }
</style>` },
  { filename: "swiper slider with pagination not working", content: `<!-- The test is in skip because the pagination buttons are not actually changing the slides, example for such a case: https://drinkarizona.com/?srsltid=AfmBOoq1ZtkGqpaSOs1obFgSpX8ZFl_s6nKyd_S43VIsLxmwyik6Cs4F-->
<div class="elementor-widget-container" style="block-size: 522.875px; height: 522.875px; inline-size: 1270px; perspective-origin: 635px 261.438px; transform-origin: 635px 261.438px; transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s, transform 0.4s; width: 1270px">
  <div
    class="swiper elementor-loop-container elementor-grid swiper-initialized swiper-horizontal swiper-pointer-events"
    dir="ltr"
    style="
      display: grid;
      grid-template-columns: 5805px;
      grid-template-rows: 506.875px;
      list-style-type: none;
      perspective-origin: 635px 261.438px;
      position: relative;
      touch-action: pan-y;
      transform-origin: 635px 261.438px;
      z-index: 1;
      block-size: 522.875px;
      inset: 0px;
      height: 522.875px;
      inline-size: 1270px;
      inset-block: 0px;
      inset-inline: 0px;
      overflow-block: hidden;
      overflow-inline: hidden;
      overflow: hidden;
      padding-block-end: 16px;
      padding-bottom: 16px;
      width: 1270px;
    "
  >
    <div
      class="swiper-wrapper"
      aria-live="polite"
      style="
        transition-duration: 0ms;
        transform: matrix(1, 0, 0, 1, -1290, 0);
        box-sizing: content-box;
        display: flex;
        list-style-type: none;
        perspective-origin: 2902.5px 253.438px;
        position: relative;
        transform-origin: 2902.5px 253.438px;
        transition-property: transform;
        z-index: 1;
        block-size: 506.875px;
        inset: 0px;
        height: 506.875px;
        inline-size: 5805px;
        inset-block: 0px;
        inset-inline: 0px;
        min-block-size: auto;
        min-height: auto;
        min-inline-size: auto;
        min-width: auto;
        width: 5805px;
      "
      id="swiper-wrapper-6d4a5c5301389a810"
    >
      <div
        data-elementor-type="loop-item"
        data-elementor-id="4252"
        class="elementor elementor-4252 swiper-slide e-loop-item e-loop-item-538 post-538 menu_item type-menu_item status-publish has-post-thumbnail hentry category-acai-bowls swiper-slide-duplicate"
        data-elementor-post-type="elementor_library"
        role="group"
        aria-roledescription="slide"
        data-custom-edit-handle="1"
        aria-label="7 / 10"
        data-swiper-slide-index="6"
        style="
          flex-shrink: 0;
          interactivity: inert;
          list-style-type: none;
          perspective-origin: 151.25px 245.938px;
          position: relative;
          transform-origin: 151.25px 245.949px;
          transition-property: transform;
          block-size: 491.891px;
          inset: 0px;
          height: 491.891px;
          inline-size: 302.5px;
          inset-block: 0px;
          inset-inline: 0px;
          margin-inline-end: 20px;
          margin-right: 20px;
          min-block-size: auto;
          min-height: auto;
          min-inline-size: auto;
          min-width: auto;
          width: 302.5px;
        "
        aria-hidden="true"
        inert=""
      >
        <div
          data-particle_enable="false"
          data-particle-mobile-disabled="false"
          class="elementor-element elementor-element-1f7adeb5 e-con-full e-flex e-con e-parent"
          data-id="1f7adeb5"
          data-element_type="container"
          style="
            gap: 0px;
            display: flex;
            flex-direction: column;
            interactivity: inert;
            list-style-type: none;
            perspective-origin: 151.25px 245.938px;
            position: relative;
            transform-origin: 151.25px 245.949px;
            transition: background 0.3s, border 0.3s, box-shadow 0.3s, transform 0.4s;
            word-break: break-word;
            block-size: 491.891px;
            inset: 0px;
            height: 491.891px;
            inline-size: 302.5px;
            inset-block: 0px;
            inset-inline: 0px;
            max-inline-size: 100%;
            max-width: 100%;
            width: 302.5px;
          "
        >
          <div
            class="elementor-element elementor-element-62a12117 elementor-widget elementor-widget-theme-post-featured-image elementor-widget-image"
            data-id="62a12117"
            data-element_type="widget"
            data-widget_type="theme-post-featured-image.default"
            style="
              gap: 0px;
              interactivity: inert;
              list-style-type: none;
              perspective-origin: 151.25px 151.25px;
              position: relative;
              text-align: center;
              transform-origin: 151.25px 151.25px;
              word-break: break-word;
              block-size: 302.5px;
              inset: 0px;
              height: 302.5px;
              inline-size: 302.5px;
              inset-block: 0px;
              inset-inline: 0px;
              max-inline-size: 100%;
              max-width: 100%;
              min-block-size: auto;
              min-height: auto;
              width: 302.5px;
            "
          >
            <div
              class="elementor-widget-container"
              style="
                interactivity: inert;
                list-style-type: none;
                perspective-origin: 151.25px 151.25px;
                text-align: center;
                transform-origin: 151.25px 151.25px;
                transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s, transform 0.4s;
                word-break: break-word;
                block-size: 302.5px;
                height: 302.5px;
                inline-size: 302.5px;
                width: 302.5px;
              "
            >
              <img
                loading="lazy"
                decoding="async"
                width="410"
                height="410"
                src="/"
                class="attachment-medium_large size-medium_large wp-image-1547"
                alt=""
                srcset="/ 410w, / 300w, / 150w"
                sizes="(max-width: 410px) 100vw, 410px"
                style="display: inline-block; interactivity: inert; list-style-type: none; perspective-origin: 151.25px 151.25px; text-align: center; transform-origin: 151.25px 151.25px; vertical-align: middle; word-break: break-word; block-size: 302.5px; height: 302.5px; inline-size: 302.5px; width: 302.5px"
              />
            </div>
          </div>
          <div
            class="elementor-element elementor-element-66e5738b elementor-widget elementor-widget-theme-post-title elementor-page-title elementor-widget-heading"
            data-id="66e5738b"
            data-element_type="widget"
            data-widget_type="theme-post-title.default"
            style="
              gap: 0px;
              interactivity: inert;
              list-style-type: none;
              perspective-origin: 151.25px 34.1875px;
              position: relative;
              text-align: center;
              transform-origin: 151.25px 34.1914px;
              word-break: break-word;
              block-size: 68.375px;
              inset: 0px;
              height: 68.375px;
              inline-size: 302.5px;
              inset-block: 0px;
              inset-inline: 0px;
              max-inline-size: 100%;
              max-width: 100%;
              min-block-size: auto;
              min-height: auto;
              width: 302.5px;
            "
          >
            <div
              class="elementor-widget-container"
              style="
                interactivity: inert;
                list-style-type: none;
                perspective-origin: 151.25px 26.6875px;
                text-align: center;
                transform-origin: 151.25px 26.6953px;
                transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s, transform 0.4s;
                word-break: break-word;
                block-size: 53.3828px;
                height: 53.3828px;
                inline-size: 302.5px;
                margin-block: 10px 5px;
                margin-bottom: 5px;
                margin-top: 10px;
                width: 302.5px;
              "
            >
              <h2
                class="elementor-heading-title elementor-size-default"
                style="
                  caret-color: rgb(111, 36, 115);
                  color: rgb(111, 36, 115);
                  column-rule-color: rgb(111, 36, 115);
                  interactivity: inert;
                  list-style-type: none;
                  outline-color: rgb(111, 36, 115);
                  perspective-origin: 151.25px 19.1875px;
                  text-align: center;
                  text-decoration: rgb(111, 36, 115);
                  text-emphasis-color: rgb(111, 36, 115);
                  transform-origin: 151.25px 19.1992px;
                  word-break: break-word;
                  -webkit-text-fill-color: rgb(111, 36, 115);
                  -webkit-text-stroke-color: rgb(111, 36, 115);
                  block-size: 38.3906px;
                  border-block-color: rgb(111, 36, 115);
                  border-color: rgb(111, 36, 115);
                  border-inline-color: rgb(111, 36, 115);
                  height: 38.3906px;
                  inline-size: 302.5px;
                  margin-block: 0px;
                  margin-bottom: 0px;
                  margin-top: 0px;
                  width: 302.5px;
                "
              >
                JB Bowl
              </h2>
            </div>
          </div>
          <div
            class="elementor-element elementor-element-36107b0d elementor-widget elementor-widget-theme-post-content"
            data-id="36107b0d"
            data-element_type="widget"
            data-widget_type="theme-post-content.default"
            style="
              caret-color: rgb(127, 127, 127);
              color: rgb(127, 127, 127);
              gap: 0px;
              column-rule-color: rgb(127, 127, 127);
              font-style: italic;
              interactivity: inert;
              list-style-type: none;
              outline-color: rgb(127, 127, 127);
              perspective-origin: 151.25px 46px;
              position: relative;
              text-align: center;
              text-decoration: rgb(127, 127, 127);
              text-emphasis-color: rgb(127, 127, 127);
              transform-origin: 151.25px 46px;
              word-break: break-word;
              -webkit-text-fill-color: rgb(127, 127, 127);
              -webkit-text-stroke-color: rgb(127, 127, 127);
              block-size: 92px;
              border-block-color: rgb(127, 127, 127);
              border-color: rgb(127, 127, 127);
              border-inline-color: rgb(127, 127, 127);
              inset: 0px;
              height: 92px;
              inline-size: 302.5px;
              inset-block: 0px;
              inset-inline: 0px;
              max-inline-size: 100%;
              max-width: 100%;
              min-block-size: auto;
              min-height: auto;
              width: 302.5px;
            "
          >
            <div
              class="elementor-widget-container"
              style="
                caret-color: rgb(127, 127, 127);
                color: rgb(127, 127, 127);
                column-rule-color: rgb(127, 127, 127);
                font-style: italic;
                interactivity: inert;
                list-style-type: none;
                outline-color: rgb(127, 127, 127);
                perspective-origin: 151.25px 46px;
                text-align: center;
                text-decoration: rgb(127, 127, 127);
                text-emphasis-color: rgb(127, 127, 127);
                transform-origin: 151.25px 46px;
                transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s, transform 0.4s;
                word-break: break-word;
                -webkit-text-fill-color: rgb(127, 127, 127);
                -webkit-text-stroke-color: rgb(127, 127, 127);
                block-size: 92px;
                border-block-color: rgb(127, 127, 127);
                border-color: rgb(127, 127, 127);
                border-inline-color: rgb(127, 127, 127);
                height: 92px;
                inline-size: 302.5px;
                width: 302.5px;
              "
            >
              <p
                style="
                  caret-color: rgb(127, 127, 127);
                  color: rgb(127, 127, 127);
                  column-rule-color: rgb(127, 127, 127);
                  font-style: italic;
                  interactivity: inert;
                  list-style-type: none;
                  outline-color: rgb(127, 127, 127);
                  perspective-origin: 151.25px 36px;
                  text-align: center;
                  text-decoration: rgb(127, 127, 127);
                  text-emphasis-color: rgb(127, 127, 127);
                  transform-origin: 151.25px 36px;
                  word-break: break-word;
                  -webkit-text-fill-color: rgb(127, 127, 127);
                  -webkit-text-stroke-color: rgb(127, 127, 127);
                  block-size: 72px;
                  border-block-color: rgb(127, 127, 127);
                  border-color: rgb(127, 127, 127);
                  border-inline-color: rgb(127, 127, 127);
                  height: 72px;
                  inline-size: 302.5px;
                  width: 302.5px;
                "
              >
                Acai, Granola, Greek Yogurt, Peanut Butter, Pineapple, Strawberry, Coconut Shavings, Hemp Seeds
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        data-elementor-type="loop-item"
        data-elementor-id="4252"
        class="elementor elementor-4252 swiper-slide e-loop-item e-loop-item-537 post-537 menu_item type-menu_item status-publish has-post-thumbnail hentry category-acai-bowls swiper-slide-duplicate"
        data-elementor-post-type="elementor_library"
        role="group"
        aria-roledescription="slide"
        data-custom-edit-handle="1"
        aria-label="8 / 10"
        data-swiper-slide-index="7"
        style="
          flex-shrink: 0;
          interactivity: inert;
          list-style-type: none;
          perspective-origin: 151.25px 245.938px;
          position: relative;
          transform-origin: 151.25px 245.949px;
          transition-property: transform;
          block-size: 491.891px;
          inset: 0px;
          height: 491.891px;
          inline-size: 302.5px;
          inset-block: 0px;
          inset-inline: 0px;
          margin-inline-end: 20px;
          margin-right: 20px;
          min-block-size: auto;
          min-height: auto;
          min-inline-size: auto;
          min-width: auto;
          width: 302.5px;
        "
        aria-hidden="true"
        inert=""
      >
        <div
          data-particle_enable="false"
          data-particle-mobile-disabled="false"
          class="elementor-element elementor-element-1f7adeb5 e-con-full e-flex e-con e-parent"
          data-id="1f7adeb5"
          data-element_type="container"
          style="
            gap: 0px;
            display: flex;
            flex-direction: column;
            interactivity: inert;
            list-style-type: none;
            perspective-origin: 151.25px 245.938px;
            position: relative;
            transform-origin: 151.25px 245.949px;
            transition: background 0.3s, border 0.3s, box-shadow 0.3s, transform 0.4s;
            word-break: break-word;
            block-size: 491.891px;
            inset: 0px;
            height: 491.891px;
            inline-size: 302.5px;
            inset-block: 0px;
            inset-inline: 0px;
            max-inline-size: 100%;
            max-width: 100%;
            width: 302.5px;
          "
        >
          <div
            class="elementor-element elementor-element-62a12117 elementor-widget elementor-widget-theme-post-featured-image elementor-widget-image"
            data-id="62a12117"
            data-element_type="widget"
            data-widget_type="theme-post-featured-image.default"
            style="
              gap: 0px;
              interactivity: inert;
              list-style-type: none;
              perspective-origin: 151.25px 151.25px;
              position: relative;
              text-align: center;
              transform-origin: 151.25px 151.25px;
              word-break: break-word;
              block-size: 302.5px;
              inset: 0px;
              height: 302.5px;
              inline-size: 302.5px;
              inset-block: 0px;
              inset-inline: 0px;
              max-inline-size: 100%;
              max-width: 100%;
              min-block-size: auto;
              min-height: auto;
              width: 302.5px;
            "
          >
            <div
              class="elementor-widget-container"
              style="
                interactivity: inert;
                list-style-type: none;
                perspective-origin: 151.25px 151.25px;
                text-align: center;
                transform-origin: 151.25px 151.25px;
                transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s, transform 0.4s;
                word-break: break-word;
                block-size: 302.5px;
                height: 302.5px;
                inline-size: 302.5px;
                width: 302.5px;
              "
            >
              <img
                loading="lazy"
                decoding="async"
                width="410"
                height="410"
                src="/"
                class="attachment-medium_large size-medium_large wp-image-1548"
                alt=""
                srcset="/ 410w, / 300w, / 150w"
                sizes="(max-width: 410px) 100vw, 410px"
                style="display: inline-block; interactivity: inert; list-style-type: none; perspective-origin: 151.25px 151.25px; text-align: center; transform-origin: 151.25px 151.25px; vertical-align: middle; word-break: break-word; block-size: 302.5px; height: 302.5px; inline-size: 302.5px; width: 302.5px"
              />
            </div>
          </div>
          <div
            class="elementor-element elementor-element-66e5738b elementor-widget elementor-widget-theme-post-title elementor-page-title elementor-widget-heading"
            data-id="66e5738b"
            data-element_type="widget"
            data-widget_type="theme-post-title.default"
            style="
              gap: 0px;
              interactivity: inert;
              list-style-type: none;
              perspective-origin: 151.25px 34.1875px;
              position: relative;
              text-align: center;
              transform-origin: 151.25px 34.1914px;
              word-break: break-word;
              block-size: 68.375px;
              inset: 0px;
              height: 68.375px;
              inline-size: 302.5px;
              inset-block: 0px;
              inset-inline: 0px;
              max-inline-size: 100%;
              max-width: 100%;
              min-block-size: auto;
              min-height: auto;
              width: 302.5px;
            "
          >
            <div
              class="elementor-widget-container"
              style="
                interactivity: inert;
                list-style-type: none;
                perspective-origin: 151.25px 26.6875px;
                text-align: center;
                transform-origin: 151.25px 26.6953px;
                transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s, transform 0.4s;
                word-break: break-word;
                block-size: 53.3828px;
                height: 53.3828px;
                inline-size: 302.5px;
                margin-block: 10px 5px;
                margin-bottom: 5px;
                margin-top: 10px;
                width: 302.5px;
              "
            >
              <h2
                class="elementor-heading-title elementor-size-default"
                style="
                  caret-color: rgb(111, 36, 115);
                  color: rgb(111, 36, 115);
                  column-rule-color: rgb(111, 36, 115);
                  interactivity: inert;
                  list-style-type: none;
                  outline-color: rgb(111, 36, 115);
                  perspective-origin: 151.25px 19.1875px;
                  text-align: center;
                  text-decoration: rgb(111, 36, 115);
                  text-emphasis-color: rgb(111, 36, 115);
                  transform-origin: 151.25px 19.1992px;
                  word-break: break-word;
                  -webkit-text-fill-color: rgb(111, 36, 115);
                  -webkit-text-stroke-color: rgb(111, 36, 115);
                  block-size: 38.3906px;
                  border-block-color: rgb(111, 36, 115);
                  border-color: rgb(111, 36, 115);
                  border-inline-color: rgb(111, 36, 115);
                  height: 38.3906px;
                  inline-size: 302.5px;
                  margin-block: 0px;
                  margin-bottom: 0px;
                  margin-top: 0px;
                  width: 302.5px;
                "
              >
                Tequesta Dragon
              </h2>
            </div>
          </div>
          <div
            class="elementor-element elementor-element-36107b0d elementor-widget elementor-widget-theme-post-content"
            data-id="36107b0d"
            data-element_type="widget"
            data-widget_type="theme-post-content.default"
            style="
              caret-color: rgb(127, 127, 127);
              color: rgb(127, 127, 127);
              gap: 0px;
              column-rule-color: rgb(127, 127, 127);
              font-style: italic;
              interactivity: inert;
              list-style-type: none;
              outline-color: rgb(127, 127, 127);
              perspective-origin: 151.25px 34px;
              position: relative;
              text-align: center;
              text-decoration: rgb(127, 127, 127);
              text-emphasis-color: rgb(127, 127, 127);
              transform-origin: 151.25px 34px;
              word-break: break-word;
              -webkit-text-fill-color: rgb(127, 127, 127);
              -webkit-text-stroke-color: rgb(127, 127, 127);
              block-size: 68px;
              border-block-color: rgb(127, 127, 127);
              border-color: rgb(127, 127, 127);
              border-inline-color: rgb(127, 127, 127);
              inset: 0px;
              height: 68px;
              inline-size: 302.5px;
              inset-block: 0px;
              inset-inline: 0px;
              max-inline-size: 100%;
              max-width: 100%;
              min-block-size: auto;
              min-height: auto;
              width: 302.5px;
            "
          >
            <div
              class="elementor-widget-container"
              style="
                caret-color: rgb(127, 127, 127);
                color: rgb(127, 127, 127);
                column-rule-color: rgb(127, 127, 127);
                font-style: italic;
                interactivity: inert;
                list-style-type: none;
                outline-color: rgb(127, 127, 127);
                perspective-origin: 151.25px 34px;
                text-align: center;
                text-decoration: rgb(127, 127, 127);
                text-emphasis-color: rgb(127, 127, 127);
                transform-origin: 151.25px 34px;
                transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s, transform 0.4s;
                word-break: break-word;
                -webkit-text-fill-color: rgb(127, 127, 127);
                -webkit-text-stroke-color: rgb(127, 127, 127);
                block-size: 68px;
                border-block-color: rgb(127, 127, 127);
                border-color: rgb(127, 127, 127);
                border-inline-color: rgb(127, 127, 127);
                height: 68px;
                inline-size: 302.5px;
                width: 302.5px;
              "
            >
              <p
                style="
                  caret-color: rgb(127, 127, 127);
                  color: rgb(127, 127, 127);
                  column-rule-color: rgb(127, 127, 127);
                  font-style: italic;
                  interactivity: inert;
                  list-style-type: none;
                  outline-color: rgb(127, 127, 127);
                  perspective-origin: 151.25px 24px;
                  text-align: center;
                  text-decoration: rgb(127, 127, 127);
                  text-emphasis-color: rgb(127, 127, 127);
                  transform-origin: 151.25px 24px;
                  word-break: break-word;
                  -webkit-text-fill-color: rgb(127, 127, 127);
                  -webkit-text-stroke-color: rgb(127, 127, 127);
                  block-size: 48px;
                  border-block-color: rgb(127, 127, 127);
                  border-color: rgb(127, 127, 127);
                  border-inline-color: rgb(127, 127, 127);
                  height: 48px;
                  inline-size: 302.5px;
                  width: 302.5px;
                "
              >
                Dragon Fruit, Granola, Blueberry, Raspberry, Strawberry, Chia Seeds, Hemp Seeds
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        data-elementor-type="loop-item"
        data-elementor-id="4252"
        class="elementor elementor-4252 swiper-slide e-loop-item e-loop-item-533 post-533 menu_item type-menu_item status-publish has-post-thumbnail hentry category-acai-bowls swiper-slide-duplicate"
        data-elementor-post-type="elementor_library"
        role="group"
        aria-roledescription="slide"
        data-custom-edit-handle="1"
        aria-label="9 / 10"
        data-swiper-slide-index="8"
        style="
          flex-shrink: 0;
          interactivity: inert;
          list-style-type: none;
          perspective-origin: 151.25px 245.938px;
          position: relative;
          transform-origin: 151.25px 245.949px;
          transition-property: transform;
          block-size: 491.891px;
          inset: 0px;
          height: 491.891px;
          inline-size: 302.5px;
          inset-block: 0px;
          inset-inline: 0px;
          margin-inline-end: 20px;
          margin-right: 20px;
          min-block-size: auto;
          min-height: auto;
          min-inline-size: auto;
          min-width: auto;
          width: 302.5px;
        "
        aria-hidden="true"
        inert=""
      >
        <div
          data-particle_enable="false"
          data-particle-mobile-disabled="false"
          class="elementor-element elementor-element-1f7adeb5 e-con-full e-flex e-con e-parent"
          data-id="1f7adeb5"
          data-element_type="container"
          style="
            gap: 0px;
            display: flex;
            flex-direction: column;
            interactivity: inert;
            list-style-type: none;
            perspective-origin: 151.25px 245.938px;
            position: relative;
            transform-origin: 151.25px 245.949px;
            transition: background 0.3s, border 0.3s, box-shadow 0.3s, transform 0.4s;
            word-break: break-word;
            block-size: 491.891px;
            inset: 0px;
            height: 491.891px;
            inline-size: 302.5px;
            inset-block: 0px;
            inset-inline: 0px;
            max-inline-size: 100%;
            max-width: 100%;
            width: 302.5px;
          "
        >
          <div
            class="elementor-element elementor-element-62a12117 elementor-widget elementor-widget-theme-post-featured-image elementor-widget-image"
            data-id="62a12117"
            data-element_type="widget"
            data-widget_type="theme-post-featured-image.default"
            style="
              gap: 0px;
              interactivity: inert;
              list-style-type: none;
              perspective-origin: 151.25px 151.25px;
              position: relative;
              text-align: center;
              transform-origin: 151.25px 151.25px;
              word-break: break-word;
              block-size: 302.5px;
              inset: 0px;
              height: 302.5px;
              inline-size: 302.5px;
              inset-block: 0px;
              inset-inline: 0px;
              max-inline-size: 100%;
              max-width: 100%;
              min-block-size: auto;
              min-height: auto;
              width: 302.5px;
            "
          >
            <div
              class="elementor-widget-container"
              style="
                interactivity: inert;
                list-style-type: none;
                perspective-origin: 151.25px 151.25px;
                text-align: center;
                transform-origin: 151.25px 151.25px;
                transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s, transform 0.4s;
                word-break: break-word;
                block-size: 302.5px;
                height: 302.5px;
                inline-size: 302.5px;
                width: 302.5px;
              "
            >
              <img
                loading="lazy"
                decoding="async"
                width="410"
                height="410"
                src="/"
                class="attachment-medium_large size-medium_large wp-image-1546"
                alt=""
                srcset="/ 410w, / 300w, / 150w"
                sizes="(max-width: 410px) 100vw, 410px"
                style="display: inline-block; interactivity: inert; list-style-type: none; perspective-origin: 151.25px 151.25px; text-align: center; transform-origin: 151.25px 151.25px; vertical-align: middle; word-break: break-word; block-size: 302.5px; height: 302.5px; inline-size: 302.5px; width: 302.5px"
              />
            </div>
          </div>
          <div
            class="elementor-element elementor-element-66e5738b elementor-widget elementor-widget-theme-post-title elementor-page-title elementor-widget-heading"
            data-id="66e5738b"
            data-element_type="widget"
            data-widget_type="theme-post-title.default"
            style="
              gap: 0px;
              interactivity: inert;
              list-style-type: none;
              perspective-origin: 151.25px 34.1875px;
              position: relative;
              text-align: center;
              transform-origin: 151.25px 34.1914px;
              word-break: break-word;
              block-size: 68.375px;
              inset: 0px;
              height: 68.375px;
              inline-size: 302.5px;
              inset-block: 0px;
              inset-inline: 0px;
              max-inline-size: 100%;
              max-width: 100%;
              min-block-size: auto;
              min-height: auto;
              width: 302.5px;
            "
          >
            <div
              class="elementor-widget-container"
              style="
                interactivity: inert;
                list-style-type: none;
                perspective-origin: 151.25px 26.6875px;
                text-align: center;
                transform-origin: 151.25px 26.6953px;
                transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s, transform 0.4s;
                word-break: break-word;
                block-size: 53.3828px;
                height: 53.3828px;
                inline-size: 302.5px;
                margin-block: 10px 5px;
                margin-bottom: 5px;
                margin-top: 10px;
                width: 302.5px;
              "
            >
              <h2
                class="elementor-heading-title elementor-size-default"
                style="
                  caret-color: rgb(111, 36, 115);
                  color: rgb(111, 36, 115);
                  column-rule-color: rgb(111, 36, 115);
                  interactivity: inert;
                  list-style-type: none;
                  outline-color: rgb(111, 36, 115);
                  perspective-origin: 151.25px 19.1875px;
                  text-align: center;
                  text-decoration: rgb(111, 36, 115);
                  text-emphasis-color: rgb(111, 36, 115);
                  transform-origin: 151.25px 19.1992px;
                  word-break: break-word;
                  -webkit-text-fill-color: rgb(111, 36, 115);
                  -webkit-text-stroke-color: rgb(111, 36, 115);
                  block-size: 38.3906px;
                  border-block-color: rgb(111, 36, 115);
                  border-color: rgb(111, 36, 115);
                  border-inline-color: rgb(111, 36, 115);
                  height: 38.3906px;
                  inline-size: 302.5px;
                  margin-block: 0px;
                  margin-bottom: 0px;
                  margin-top: 0px;
                  width: 302.5px;
                "
              >
                PB&amp;A
              </h2>
            </div>
          </div>
          <div
            class="elementor-element elementor-element-36107b0d elementor-widget elementor-widget-theme-post-content"
            data-id="36107b0d"
            data-element_type="widget"
            data-widget_type="theme-post-content.default"
            style="
              caret-color: rgb(127, 127, 127);
              color: rgb(127, 127, 127);
              gap: 0px;
              column-rule-color: rgb(127, 127, 127);
              font-style: italic;
              interactivity: inert;
              list-style-type: none;
              outline-color: rgb(127, 127, 127);
              perspective-origin: 151.25px 56px;
              position: relative;
              text-align: center;
              text-decoration: rgb(127, 127, 127);
              text-emphasis-color: rgb(127, 127, 127);
              transform-origin: 151.25px 56px;
              word-break: break-word;
              -webkit-text-fill-color: rgb(127, 127, 127);
              -webkit-text-stroke-color: rgb(127, 127, 127);
              block-size: 112px;
              border-block-color: rgb(127, 127, 127);
              border-color: rgb(127, 127, 127);
              border-inline-color: rgb(127, 127, 127);
              inset: 0px;
              height: 112px;
              inline-size: 302.5px;
              inset-block: 0px;
              inset-inline: 0px;
              max-inline-size: 100%;
              max-width: 100%;
              min-block-size: auto;
              min-height: auto;
              width: 302.5px;
            "
          >
            <div
              class="elementor-widget-container"
              style="
                caret-color: rgb(127, 127, 127);
                color: rgb(127, 127, 127);
                column-rule-color: rgb(127, 127, 127);
                font-style: italic;
                interactivity: inert;
                list-style-type: none;
                outline-color: rgb(127, 127, 127);
                perspective-origin: 151.25px 56px;
                text-align: center;
                text-decoration: rgb(127, 127, 127);
                text-emphasis-color: rgb(127, 127, 127);
                transform-origin: 151.25px 56px;
                transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s, transform 0.4s;
                word-break: break-word;
                -webkit-text-fill-color: rgb(127, 127, 127);
                -webkit-text-stroke-color: rgb(127, 127, 127);
                block-size: 112px;
                border-block-color: rgb(127, 127, 127);
                border-color: rgb(127, 127, 127);
                border-inline-color: rgb(127, 127, 127);
                height: 112px;
                inline-size: 302.5px;
                width: 302.5px;
              "
            >
              <p
                style="
                  caret-color: rgb(127, 127, 127);
                  color: rgb(127, 127, 127);
                  column-rule-color: rgb(127, 127, 127);
                  font-style: italic;
                  interactivity: inert;
                  list-style-type: none;
                  outline-color: rgb(127, 127, 127);
                  perspective-origin: 151.25px 24px;
                  text-align: center;
                  text-decoration: rgb(127, 127, 127);
                  text-emphasis-color: rgb(127, 127, 127);
                  transform-origin: 151.25px 24px;
                  word-break: break-word;
                  -webkit-text-fill-color: rgb(127, 127, 127);
                  -webkit-text-stroke-color: rgb(127, 127, 127);
                  block-size: 48px;
                  border-block-color: rgb(127, 127, 127);
                  border-color: rgb(127, 127, 127);
                  border-inline-color: rgb(127, 127, 127);
                  height: 48px;
                  inline-size: 302.5px;
                  width: 302.5px;
                "
              >
                Acai, Granola, Peanut Butter, Banana, Strawberry
              </p>
              <p
                style="
                  caret-color: rgb(127, 127, 127);
                  color: rgb(127, 127, 127);
                  column-rule-color: rgb(127, 127, 127);
                  font-style: italic;
                  interactivity: inert;
                  list-style-type: none;
                  outline-color: rgb(127, 127, 127);
                  perspective-origin: 151.25px 12px;
                  text-align: center;
                  text-decoration: rgb(127, 127, 127);
                  text-emphasis-color: rgb(127, 127, 127);
                  transform-origin: 151.25px 12px;
                  word-break: break-word;
                  -webkit-text-fill-color: rgb(127, 127, 127);
                  -webkit-text-stroke-color: rgb(127, 127, 127);
                  block-size: 24px;
                  border-block-color: rgb(127, 127, 127);
                  border-color: rgb(127, 127, 127);
                  border-inline-color: rgb(127, 127, 127);
                  height: 24px;
                  inline-size: 302.5px;
                  width: 302.5px;
                "
              >
                &nbsp;
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        data-elementor-type="loop-item"
        data-elementor-id="4252"
        class="elementor elementor-4252 swiper-slide e-loop-item e-loop-item-519 post-519 menu_item type-menu_item status-publish has-post-thumbnail hentry category-acai-bowls swiper-slide-duplicate swiper-slide-prev"
        data-elementor-post-type="elementor_library"
        role="group"
        aria-roledescription="slide"
        data-custom-edit-handle="1"
        aria-label="10 / 10"
        data-swiper-slide-index="9"
        style="
          flex-shrink: 0;
          interactivity: inert;
          list-style-type: none;
          perspective-origin: 151.25px 245.938px;
          position: relative;
          transform-origin: 151.25px 245.949px;
          transition-property: transform;
          block-size: 491.891px;
          inset: 0px;
          height: 491.891px;
          inline-size: 302.5px;
          inset-block: 0px;
          inset-inline: 0px;
          margin-inline-end: 20px;
          margin-right: 20px;
          min-block-size: auto;
          min-height: auto;
          min-inline-size: auto;
          min-width: auto;
          width: 302.5px;
        "
        aria-hidden="true"
        inert=""
      >
        <div
          data-particle_enable="false"
          data-particle-mobile-disabled="false"
          class="elementor-element elementor-element-1f7adeb5 e-con-full e-flex e-con e-parent"
          data-id="1f7adeb5"
          data-element_type="container"
          style="
            gap: 0px;
            display: flex;
            flex-direction: column;
            interactivity: inert;
            list-style-type: none;
            perspective-origin: 151.25px 245.938px;
            position: relative;
            transform-origin: 151.25px 245.949px;
            transition: background 0.3s, border 0.3s, box-shadow 0.3s, transform 0.4s;
            word-break: break-word;
            block-size: 491.891px;
            inset: 0px;
            height: 491.891px;
            inline-size: 302.5px;
            inset-block: 0px;
            inset-inline: 0px;
            max-inline-size: 100%;
            max-width: 100%;
            width: 302.5px;
          "
        >
          <div
            class="elementor-element elementor-element-62a12117 elementor-widget elementor-widget-theme-post-featured-image elementor-widget-image"
            data-id="62a12117"
            data-element_type="widget"
            data-widget_type="theme-post-featured-image.default"
            style="
              gap: 0px;
              interactivity: inert;
              list-style-type: none;
              perspective-origin: 151.25px 151.25px;
              position: relative;
              text-align: center;
              transform-origin: 151.25px 151.25px;
              word-break: break-word;
              block-size: 302.5px;
              inset: 0px;
              height: 302.5px;
              inline-size: 302.5px;
              inset-block: 0px;
              inset-inline: 0px;
              max-inline-size: 100%;
              max-width: 100%;
              min-block-size: auto;
              min-height: auto;
              width: 302.5px;
            "
          >
            <div
              class="elementor-widget-container"
              style="
                interactivity: inert;
                list-style-type: none;
                perspective-origin: 151.25px 151.25px;
                text-align: center;
                transform-origin: 151.25px 151.25px;
                transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s, transform 0.4s;
                word-break: break-word;
                block-size: 302.5px;
                height: 302.5px;
                inline-size: 302.5px;
                width: 302.5px;
              "
            >
              <img
                loading="lazy"
                decoding="async"
                width="410"
                height="410"
                src="/"
                class="attachment-medium_large size-medium_large wp-image-2202"
                alt=""
                srcset="/ 410w, / 300w, / 150w"
                sizes="(max-width: 410px) 100vw, 410px"
                style="display: inline-block; interactivity: inert; list-style-type: none; perspective-origin: 151.25px 151.25px; text-align: center; transform-origin: 151.25px 151.25px; vertical-align: middle; word-break: break-word; block-size: 302.5px; height: 302.5px; inline-size: 302.5px; width: 302.5px"
              />
            </div>
          </div>
          <div
            class="elementor-element elementor-element-66e5738b elementor-widget elementor-widget-theme-post-title elementor-page-title elementor-widget-heading"
            data-id="66e5738b"
            data-element_type="widget"
            data-widget_type="theme-post-title.default"
            style="
              gap: 0px;
              interactivity: inert;
              list-style-type: none;
              perspective-origin: 151.25px 34.1875px;
              position: relative;
              text-align: center;
              transform-origin: 151.25px 34.1914px;
              word-break: break-word;
              block-size: 68.375px;
              inset: 0px;
              height: 68.375px;
              inline-size: 302.5px;
              inset-block: 0px;
              inset-inline: 0px;
              max-inline-size: 100%;
              max-width: 100%;
              min-block-size: auto;
              min-height: auto;
              width: 302.5px;
            "
          >
            <div
              class="elementor-widget-container"
              style="
                interactivity: inert;
                list-style-type: none;
                perspective-origin: 151.25px 26.6875px;
                text-align: center;
                transform-origin: 151.25px 26.6953px;
                transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s, transform 0.4s;
                word-break: break-word;
                block-size: 53.3828px;
                height: 53.3828px;
                inline-size: 302.5px;
                margin-block: 10px 5px;
                margin-bottom: 5px;
                margin-top: 10px;
                width: 302.5px;
              "
            >
              <h2
                class="elementor-heading-title elementor-size-default"
                style="
                  caret-color: rgb(111, 36, 115);
                  color: rgb(111, 36, 115);
                  column-rule-color: rgb(111, 36, 115);
                  interactivity: inert;
                  list-style-type: none;
                  outline-color: rgb(111, 36, 115);
                  perspective-origin: 151.25px 19.1875px;
                  text-align: center;
                  text-decoration: rgb(111, 36, 115);
                  text-emphasis-color: rgb(111, 36, 115);
                  transform-origin: 151.25px 19.1992px;
                  word-break: break-word;
                  -webkit-text-fill-color: rgb(111, 36, 115);
                  -webkit-text-stroke-color: rgb(111, 36, 115);
                  block-size: 38.3906px;
                  border-block-color: rgb(111, 36, 115);
                  border-color: rgb(111, 36, 115);
                  border-inline-color: rgb(111, 36, 115);
                  height: 38.3906px;
                  inline-size: 302.5px;
                  margin-block: 0px;
                  margin-bottom: 0px;
                  margin-top: 0px;
                  width: 302.5px;
                "
              >
                V.O.T.
              </h2>
            </div>
          </div>
          <div
            class="elementor-element elementor-element-36107b0d elementor-widget elementor-widget-theme-post-content"
            data-id="36107b0d"
            data-element_type="widget"
            data-widget_type="theme-post-content.default"
            style="
              caret-color: rgb(127, 127, 127);
              color: rgb(127, 127, 127);
              gap: 0px;
              column-rule-color: rgb(127, 127, 127);
              font-style: italic;
              interactivity: inert;
              list-style-type: none;
              outline-color: rgb(127, 127, 127);
              perspective-origin: 151.25px 34px;
              position: relative;
              text-align: center;
              text-decoration: rgb(127, 127, 127);
              text-emphasis-color: rgb(127, 127, 127);
              transform-origin: 151.25px 34px;
              word-break: break-word;
              -webkit-text-fill-color: rgb(127, 127, 127);
              -webkit-text-stroke-color: rgb(127, 127, 127);
              block-size: 68px;
              border-block-color: rgb(127, 127, 127);
              border-color: rgb(127, 127, 127);
              border-inline-color: rgb(127, 127, 127);
              inset: 0px;
              height: 68px;
              inline-size: 302.5px;
              inset-block: 0px;
              inset-inline: 0px;
              max-inline-size: 100%;
              max-width: 100%;
              min-block-size: auto;
              min-height: auto;
              width: 302.5px;
            "
          >
            <div
              class="elementor-widget-container"
              style="
                caret-color: rgb(127, 127, 127);
                color: rgb(127, 127, 127);
                column-rule-color: rgb(127, 127, 127);
                font-style: italic;
                interactivity: inert;
                list-style-type: none;
                outline-color: rgb(127, 127, 127);
                perspective-origin: 151.25px 34px;
                text-align: center;
                text-decoration: rgb(127, 127, 127);
                text-emphasis-color: rgb(127, 127, 127);
                transform-origin: 151.25px 34px;
                transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s, transform 0.4s;
                word-break: break-word;
                -webkit-text-fill-color: rgb(127, 127, 127);
                -webkit-text-stroke-color: rgb(127, 127, 127);
                block-size: 68px;
                border-block-color: rgb(127, 127, 127);
                border-color: rgb(127, 127, 127);
                border-inline-color: rgb(127, 127, 127);
                height: 68px;
                inline-size: 302.5px;
                width: 302.5px;
              "
            >
              <p
                style="
                  caret-color: rgb(127, 127, 127);
                  color: rgb(127, 127, 127);
                  column-rule-color: rgb(127, 127, 127);
                  font-style: italic;
                  interactivity: inert;
                  list-style-type: none;
                  outline-color: rgb(127, 127, 127);
                  perspective-origin: 151.25px 24px;
                  text-align: center;
                  text-decoration: rgb(127, 127, 127);
                  text-emphasis-color: rgb(127, 127, 127);
                  transform-origin: 151.25px 24px;
                  word-break: break-word;
                  -webkit-text-fill-color: rgb(127, 127, 127);
                  -webkit-text-stroke-color: rgb(127, 127, 127);
                  block-size: 48px;
                  border-block-color: rgb(127, 127, 127);
                  border-color: rgb(127, 127, 127);
                  border-inline-color: rgb(127, 127, 127);
                  height: 48px;
                  inline-size: 302.5px;
                  width: 302.5px;
                "
              >
                Acai, Granola, Raspberry, Mango, Kiwi, Hemp Seeds, Coconut Shavings
              </p>
            </div>
          </div>
        </div>
      </div>
      <style id="loop-4252" style="list-style-type: none">
        .elementor-4252 .elementor-element.elementor-element-1f7adeb5 {
          --display: flex;
          --flex-direction: column;
          --container-widget-width: 100%;
          --container-widget-height: initial;
          --container-widget-flex-grow: 0;
          --container-widget-align-self: initial;
          --flex-wrap-mobile: wrap;
          --padding-top: 0px;
          --padding-bottom: 0px;
          --padding-left: 0px;
          --padding-right: 0px;
        }
        .elementor-4252 .elementor-element.elementor-element-66e5738b > .elementor-widget-container {
          margin: 10px 0px 5px 0px;
        }
        .elementor-4252 .elementor-element.elementor-element-66e5738b {
          text-align: center;
        }
        .elementor-4252 .elementor-element.elementor-element-66e5738b .elementor-heading-title {
          color: var(--e-global-color-primary);
        }
        .elementor-4252 .elementor-element.elementor-element-36107b0d {
          text-align: center;
          color: var(--e-global-color-9fdf91a);
          font-family: "Roboto", Sans-serif;
          font-size: 16px;
          font-weight: normal;
          font-style: italic;
          line-height: 1.5em;
        }
      </style>
      <div
        data-elementor-type="loop-item"
        data-elementor-id="4252"
        class="elementor elementor-4252 swiper-slide e-loop-item e-loop-item-4275 post-4275 menu_item type-menu_item status-publish has-post-thumbnail hentry category-acai-bowls swiper-slide-active"
        data-elementor-post-type="elementor_library"
        role="group"
        aria-roledescription="slide"
        data-custom-edit-handle="1"
        aria-label="1 / 10"
        data-swiper-slide-index="0"
        style="
          flex-shrink: 0;
          list-style-type: none;
          perspective-origin: 151.25px 245.938px;
          position: relative;
          transform-origin: 151.25px 245.949px;
          transition-property: transform;
          block-size: 491.891px;
          inset: 0px;
          height: 491.891px;
          inline-size: 302.5px;
          inset-block: 0px;
          inset-inline: 0px;
          margin-inline-end: 20px;
          margin-right: 20px;
          min-block-size: auto;
          min-height: auto;
          min-inline-size: auto;
          min-width: auto;
          width: 302.5px;
        "
      >
        <div
          data-particle_enable="false"
          data-particle-mobile-disabled="false"
          class="elementor-element elementor-element-1f7adeb5 e-con-full e-flex e-con e-parent e-lazyloaded"
          data-id="1f7adeb5"
          data-element_type="container"
          style="
            gap: 0px;
            display: flex;
            flex-direction: column;
            list-style-type: none;
            perspective-origin: 151.25px 245.938px;
            position: relative;
            transform-origin: 151.25px 245.949px;
            transition: background 0.3s, border 0.3s, box-shadow 0.3s, transform 0.4s;
            word-break: break-word;
            block-size: 491.891px;
            inset: 0px;
            height: 491.891px;
            inline-size: 302.5px;
            inset-block: 0px;
            inset-inline: 0px;
            max-inline-size: 100%;
            max-width: 100%;
            width: 302.5px;
          "
        >
          <div
            class="elementor-element elementor-element-62a12117 elementor-widget elementor-widget-theme-post-featured-image elementor-widget-image"
            data-id="62a12117"
            data-element_type="widget"
            data-widget_type="theme-post-featured-image.default"
            style="
              gap: 0px;
              list-style-type: none;
              perspective-origin: 151.25px 151.25px;
              position: relative;
              text-align: center;
              transform-origin: 151.25px 151.25px;
              word-break: break-word;
              block-size: 302.5px;
              inset: 0px;
              height: 302.5px;
              inline-size: 302.5px;
              inset-block: 0px;
              inset-inline: 0px;
              max-inline-size: 100%;
              max-width: 100%;
              min-block-size: auto;
              min-height: auto;
              width: 302.5px;
            "
          >
            <div
              class="elementor-widget-container"
              style="list-style-type: none; perspective-origin: 151.25px 151.25px; text-align: center; transform-origin: 151.25px 151.25px; transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s, transform 0.4s; word-break: break-word; block-size: 302.5px; height: 302.5px; inline-size: 302.5px; width: 302.5px"
            >
              <img
                loading="lazy"
                decoding="async"
                width="410"
                height="410"
                src="/"
                class="attachment-medium_large size-medium_large wp-image-4259"
                alt=""
                srcset="/ 410w, / 300w, / 150w, / 400w"
                sizes="(max-width: 410px) 100vw, 410px"
                style="display: inline-block; list-style-type: none; perspective-origin: 151.25px 151.25px; text-align: center; transform-origin: 151.25px 151.25px; vertical-align: middle; word-break: break-word; block-size: 302.5px; height: 302.5px; inline-size: 302.5px; width: 302.5px"
              />
            </div>
          </div>
          <div
            class="elementor-element elementor-element-66e5738b elementor-widget elementor-widget-theme-post-title elementor-page-title elementor-widget-heading"
            data-id="66e5738b"
            data-element_type="widget"
            data-widget_type="theme-post-title.default"
            style="
              gap: 0px;
              list-style-type: none;
              perspective-origin: 151.25px 34.1875px;
              position: relative;
              text-align: center;
              transform-origin: 151.25px 34.1914px;
              word-break: break-word;
              block-size: 68.375px;
              inset: 0px;
              height: 68.375px;
              inline-size: 302.5px;
              inset-block: 0px;
              inset-inline: 0px;
              max-inline-size: 100%;
              max-width: 100%;
              min-block-size: auto;
              min-height: auto;
              width: 302.5px;
            "
          >
            <div
              class="elementor-widget-container"
              style="
                list-style-type: none;
                perspective-origin: 151.25px 26.6875px;
                text-align: center;
                transform-origin: 151.25px 26.6953px;
                transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s, transform 0.4s;
                word-break: break-word;
                block-size: 53.3828px;
                height: 53.3828px;
                inline-size: 302.5px;
                margin-block: 10px 5px;
                margin-bottom: 5px;
                margin-top: 10px;
                width: 302.5px;
              "
            >
              <h2
                class="elementor-heading-title elementor-size-default"
                style="
                  caret-color: rgb(111, 36, 115);
                  color: rgb(111, 36, 115);
                  column-rule-color: rgb(111, 36, 115);
                  list-style-type: none;
                  outline-color: rgb(111, 36, 115);
                  perspective-origin: 151.25px 19.1875px;
                  text-align: center;
                  text-decoration: rgb(111, 36, 115);
                  text-emphasis-color: rgb(111, 36, 115);
                  transform-origin: 151.25px 19.1992px;
                  word-break: break-word;
                  -webkit-text-fill-color: rgb(111, 36, 115);
                  -webkit-text-stroke-color: rgb(111, 36, 115);
                  block-size: 38.3906px;
                  border-block-color: rgb(111, 36, 115);
                  border-color: rgb(111, 36, 115);
                  border-inline-color: rgb(111, 36, 115);
                  height: 38.3906px;
                  inline-size: 302.5px;
                  margin-block: 0px;
                  margin-bottom: 0px;
                  margin-top: 0px;
                  width: 302.5px;
                "
              >
                Coco Breeze
              </h2>
            </div>
          </div>
          <div
            class="elementor-element elementor-element-36107b0d elementor-widget elementor-widget-theme-post-content"
            data-id="36107b0d"
            data-element_type="widget"
            data-widget_type="theme-post-content.default"
            style="
              caret-color: rgb(127, 127, 127);
              color: rgb(127, 127, 127);
              gap: 0px;
              column-rule-color: rgb(127, 127, 127);
              font-style: italic;
              list-style-type: none;
              outline-color: rgb(127, 127, 127);
              perspective-origin: 151.25px 56.75px;
              position: relative;
              text-align: center;
              text-decoration: rgb(127, 127, 127);
              text-emphasis-color: rgb(127, 127, 127);
              transform-origin: 151.25px 56.75px;
              word-break: break-word;
              -webkit-text-fill-color: rgb(127, 127, 127);
              -webkit-text-stroke-color: rgb(127, 127, 127);
              block-size: 113.5px;
              border-block-color: rgb(127, 127, 127);
              border-color: rgb(127, 127, 127);
              border-inline-color: rgb(127, 127, 127);
              inset: 0px;
              height: 113.5px;
              inline-size: 302.5px;
              inset-block: 0px;
              inset-inline: 0px;
              max-inline-size: 100%;
              max-width: 100%;
              min-block-size: auto;
              min-height: auto;
              width: 302.5px;
            "
          >
            <div
              class="elementor-widget-container"
              style="
                caret-color: rgb(127, 127, 127);
                color: rgb(127, 127, 127);
                column-rule-color: rgb(127, 127, 127);
                font-style: italic;
                list-style-type: none;
                outline-color: rgb(127, 127, 127);
                perspective-origin: 151.25px 56.75px;
                text-align: center;
                text-decoration: rgb(127, 127, 127);
                text-emphasis-color: rgb(127, 127, 127);
                transform-origin: 151.25px 56.75px;
                transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s, transform 0.4s;
                word-break: break-word;
                -webkit-text-fill-color: rgb(127, 127, 127);
                -webkit-text-stroke-color: rgb(127, 127, 127);
                block-size: 113.5px;
                border-block-color: rgb(127, 127, 127);
                border-color: rgb(127, 127, 127);
                border-inline-color: rgb(127, 127, 127);
                height: 113.5px;
                inline-size: 302.5px;
                width: 302.5px;
              "
            >
              <p
                style="
                  caret-color: rgb(127, 127, 127);
                  color: rgb(127, 127, 127);
                  column-rule-color: rgb(127, 127, 127);
                  font-style: italic;
                  list-style-type: none;
                  outline-color: rgb(127, 127, 127);
                  perspective-origin: 151.25px 24px;
                  text-align: center;
                  text-decoration: rgb(127, 127, 127);
                  text-emphasis-color: rgb(127, 127, 127);
                  transform-origin: 151.25px 24px;
                  word-break: break-word;
                  -webkit-text-fill-color: rgb(127, 127, 127);
                  -webkit-text-stroke-color: rgb(127, 127, 127);
                  block-size: 48px;
                  border-block-color: rgb(127, 127, 127);
                  border-color: rgb(127, 127, 127);
                  border-inline-color: rgb(127, 127, 127);
                  height: 48px;
                  inline-size: 302.5px;
                  width: 302.5px;
                "
              >
                Coconut Sorbet, Granola, Nutella, Strawberry, Mango, Coconut Flakes
              </p>
              <p
                style="
                  caret-color: rgb(127, 127, 127);
                  color: rgb(127, 127, 127);
                  column-rule-color: rgb(127, 127, 127);
                  font-style: italic;
                  list-style-type: none;
                  outline-color: rgb(127, 127, 127);
                  perspective-origin: 151.25px 12.75px;
                  text-align: center;
                  text-decoration: rgb(127, 127, 127);
                  text-emphasis-color: rgb(127, 127, 127);
                  transform-origin: 151.25px 12.75px;
                  word-break: break-word;
                  -webkit-text-fill-color: rgb(127, 127, 127);
                  -webkit-text-stroke-color: rgb(127, 127, 127);
                  block-size: 25.5px;
                  border-block-color: rgb(127, 127, 127);
                  border-color: rgb(127, 127, 127);
                  border-inline-color: rgb(127, 127, 127);
                  height: 25.5px;
                  inline-size: 302.5px;
                  width: 302.5px;
                "
              >
                <em
                  style="
                    font-size: 12px;
                    caret-color: rgb(127, 127, 127);
                    color: rgb(127, 127, 127);
                    column-rule-color: rgb(127, 127, 127);
                    list-style-type: none;
                    outline-color: rgb(127, 127, 127);
                    text-align: center;
                    text-decoration: rgb(127, 127, 127);
                    text-emphasis-color: rgb(127, 127, 127);
                    word-break: break-word;
                    -webkit-text-fill-color: rgb(127, 127, 127);
                    -webkit-text-stroke-color: rgb(127, 127, 127);
                    border-block-color: rgb(127, 127, 127);
                    border-color: rgb(127, 127, 127);
                    border-inline-color: rgb(127, 127, 127);
                  "
                  >*Available at Florida Locations.</em
                >
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        data-elementor-type="loop-item"
        data-elementor-id="4252"
        class="elementor elementor-4252 swiper-slide e-loop-item e-loop-item-4276 post-4276 menu_item type-menu_item status-publish has-post-thumbnail hentry category-acai-bowls swiper-slide-next"
        data-elementor-post-type="elementor_library"
        role="group"
        aria-roledescription="slide"
        data-custom-edit-handle="1"
        aria-label="2 / 10"
        data-swiper-slide-index="1"
        style="
          flex-shrink: 0;
          list-style-type: none;
          perspective-origin: 151.25px 245.938px;
          position: relative;
          transform-origin: 151.25px 245.949px;
          transition-property: transform;
          block-size: 491.891px;
          inset: 0px;
          height: 491.891px;
          inline-size: 302.5px;
          inset-block: 0px;
          inset-inline: 0px;
          margin-inline-end: 20px;
          margin-right: 20px;
          min-block-size: auto;
          min-height: auto;
          min-inline-size: auto;
          min-width: auto;
          width: 302.5px;
        "
      >
        <div
          data-particle_enable="false"
          data-particle-mobile-disabled="false"
          class="elementor-element elementor-element-1f7adeb5 e-con-full e-flex e-con e-parent e-lazyloaded"
          data-id="1f7adeb5"
          data-element_type="container"
          style="
            gap: 0px;
            display: flex;
            flex-direction: column;
            list-style-type: none;
            perspective-origin: 151.25px 245.938px;
            position: relative;
            transform-origin: 151.25px 245.949px;
            transition: background 0.3s, border 0.3s, box-shadow 0.3s, transform 0.4s;
            word-break: break-word;
            block-size: 491.891px;
            inset: 0px;
            height: 491.891px;
            inline-size: 302.5px;
            inset-block: 0px;
            inset-inline: 0px;
            max-inline-size: 100%;
            max-width: 100%;
            width: 302.5px;
          "
        >
          <div
            class="elementor-element elementor-element-62a12117 elementor-widget elementor-widget-theme-post-featured-image elementor-widget-image"
            data-id="62a12117"
            data-element_type="widget"
            data-widget_type="theme-post-featured-image.default"
            style="
              gap: 0px;
              list-style-type: none;
              perspective-origin: 151.25px 151.25px;
              position: relative;
              text-align: center;
              transform-origin: 151.25px 151.25px;
              word-break: break-word;
              block-size: 302.5px;
              inset: 0px;
              height: 302.5px;
              inline-size: 302.5px;
              inset-block: 0px;
              inset-inline: 0px;
              max-inline-size: 100%;
              max-width: 100%;
              min-block-size: auto;
              min-height: auto;
              width: 302.5px;
            "
          >
            <div
              class="elementor-widget-container"
              style="list-style-type: none; perspective-origin: 151.25px 151.25px; text-align: center; transform-origin: 151.25px 151.25px; transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s, transform 0.4s; word-break: break-word; block-size: 302.5px; height: 302.5px; inline-size: 302.5px; width: 302.5px"
            >
              <img
                loading="lazy"
                decoding="async"
                width="410"
                height="410"
                src="/"
                class="attachment-medium_large size-medium_large wp-image-4260"
                alt=""
                srcset="/ 410w, / 300w, / 150w, / 400w"
                sizes="(max-width: 410px) 100vw, 410px"
                style="display: inline-block; list-style-type: none; perspective-origin: 151.25px 151.25px; text-align: center; transform-origin: 151.25px 151.25px; vertical-align: middle; word-break: break-word; block-size: 302.5px; height: 302.5px; inline-size: 302.5px; width: 302.5px"
              />
            </div>
          </div>
          <div
            class="elementor-element elementor-element-66e5738b elementor-widget elementor-widget-theme-post-title elementor-page-title elementor-widget-heading"
            data-id="66e5738b"
            data-element_type="widget"
            data-widget_type="theme-post-title.default"
            style="
              gap: 0px;
              list-style-type: none;
              perspective-origin: 151.25px 34.1875px;
              position: relative;
              text-align: center;
              transform-origin: 151.25px 34.1914px;
              word-break: break-word;
              block-size: 68.375px;
              inset: 0px;
              height: 68.375px;
              inline-size: 302.5px;
              inset-block: 0px;
              inset-inline: 0px;
              max-inline-size: 100%;
              max-width: 100%;
              min-block-size: auto;
              min-height: auto;
              width: 302.5px;
            "
          >
            <div
              class="elementor-widget-container"
              style="
                list-style-type: none;
                perspective-origin: 151.25px 26.6875px;
                text-align: center;
                transform-origin: 151.25px 26.6953px;
                transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s, transform 0.4s;
                word-break: break-word;
                block-size: 53.3828px;
                height: 53.3828px;
                inline-size: 302.5px;
                margin-block: 10px 5px;
                margin-bottom: 5px;
                margin-top: 10px;
                width: 302.5px;
              "
            >
              <h2
                class="elementor-heading-title elementor-size-default"
                style="
                  caret-color: rgb(111, 36, 115);
                  color: rgb(111, 36, 115);
                  column-rule-color: rgb(111, 36, 115);
                  list-style-type: none;
                  outline-color: rgb(111, 36, 115);
                  perspective-origin: 151.25px 19.1875px;
                  text-align: center;
                  text-decoration: rgb(111, 36, 115);
                  text-emphasis-color: rgb(111, 36, 115);
                  transform-origin: 151.25px 19.1992px;
                  word-break: break-word;
                  -webkit-text-fill-color: rgb(111, 36, 115);
                  -webkit-text-stroke-color: rgb(111, 36, 115);
                  block-size: 38.3906px;
                  border-block-color: rgb(111, 36, 115);
                  border-color: rgb(111, 36, 115);
                  border-inline-color: rgb(111, 36, 115);
                  height: 38.3906px;
                  inline-size: 302.5px;
                  margin-block: 0px;
                  margin-bottom: 0px;
                  margin-top: 0px;
                  width: 302.5px;
                "
              >
                Nutella Crunch
              </h2>
            </div>
          </div>
          <div
            class="elementor-element elementor-element-36107b0d elementor-widget elementor-widget-theme-post-content"
            data-id="36107b0d"
            data-element_type="widget"
            data-widget_type="theme-post-content.default"
            style="
              caret-color: rgb(127, 127, 127);
              color: rgb(127, 127, 127);
              gap: 0px;
              column-rule-color: rgb(127, 127, 127);
              font-style: italic;
              list-style-type: none;
              outline-color: rgb(127, 127, 127);
              perspective-origin: 151.25px 34px;
              position: relative;
              text-align: center;
              text-decoration: rgb(127, 127, 127);
              text-emphasis-color: rgb(127, 127, 127);
              transform-origin: 151.25px 34px;
              word-break: break-word;
              -webkit-text-fill-color: rgb(127, 127, 127);
              -webkit-text-stroke-color: rgb(127, 127, 127);
              block-size: 68px;
              border-block-color: rgb(127, 127, 127);
              border-color: rgb(127, 127, 127);
              border-inline-color: rgb(127, 127, 127);
              inset: 0px;
              height: 68px;
              inline-size: 302.5px;
              inset-block: 0px;
              inset-inline: 0px;
              max-inline-size: 100%;
              max-width: 100%;
              min-block-size: auto;
              min-height: auto;
              width: 302.5px;
            "
          >
            <div
              class="elementor-widget-container"
              style="
                caret-color: rgb(127, 127, 127);
                color: rgb(127, 127, 127);
                column-rule-color: rgb(127, 127, 127);
                font-style: italic;
                list-style-type: none;
                outline-color: rgb(127, 127, 127);
                perspective-origin: 151.25px 34px;
                text-align: center;
                text-decoration: rgb(127, 127, 127);
                text-emphasis-color: rgb(127, 127, 127);
                transform-origin: 151.25px 34px;
                transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s, transform 0.4s;
                word-break: break-word;
                -webkit-text-fill-color: rgb(127, 127, 127);
                -webkit-text-stroke-color: rgb(127, 127, 127);
                block-size: 68px;
                border-block-color: rgb(127, 127, 127);
                border-color: rgb(127, 127, 127);
                border-inline-color: rgb(127, 127, 127);
                height: 68px;
                inline-size: 302.5px;
                width: 302.5px;
              "
            >
              <p
                style="
                  caret-color: rgb(127, 127, 127);
                  color: rgb(127, 127, 127);
                  column-rule-color: rgb(127, 127, 127);
                  font-style: italic;
                  list-style-type: none;
                  outline-color: rgb(127, 127, 127);
                  perspective-origin: 151.25px 24px;
                  text-align: center;
                  text-decoration: rgb(127, 127, 127);
                  text-emphasis-color: rgb(127, 127, 127);
                  transform-origin: 151.25px 24px;
                  word-break: break-word;
                  -webkit-text-fill-color: rgb(127, 127, 127);
                  -webkit-text-stroke-color: rgb(127, 127, 127);
                  block-size: 48px;
                  border-block-color: rgb(127, 127, 127);
                  border-color: rgb(127, 127, 127);
                  border-inline-color: rgb(127, 127, 127);
                  height: 48px;
                  inline-size: 302.5px;
                  width: 302.5px;
                "
              >
                Acai, Granola, Nutella, Banana, Strawberry, Chocolate Covered Almonds
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        data-elementor-type="loop-item"
        data-elementor-id="4252"
        class="elementor elementor-4252 swiper-slide e-loop-item e-loop-item-513 post-513 menu_item type-menu_item status-publish has-post-thumbnail hentry category-acai-bowls"
        data-elementor-post-type="elementor_library"
        role="group"
        aria-roledescription="slide"
        data-custom-edit-handle="1"
        aria-label="3 / 10"
        data-swiper-slide-index="2"
        style="
          flex-shrink: 0;
          list-style-type: none;
          perspective-origin: 151.25px 245.938px;
          position: relative;
          transform-origin: 151.25px 245.949px;
          transition-property: transform;
          block-size: 491.891px;
          inset: 0px;
          height: 491.891px;
          inline-size: 302.5px;
          inset-block: 0px;
          inset-inline: 0px;
          margin-inline-end: 20px;
          margin-right: 20px;
          min-block-size: auto;
          min-height: auto;
          min-inline-size: auto;
          min-width: auto;
          width: 302.5px;
        "
      >
        <div
          data-particle_enable="false"
          data-particle-mobile-disabled="false"
          class="elementor-element elementor-element-1f7adeb5 e-con-full e-flex e-con e-parent e-lazyloaded"
          data-id="1f7adeb5"
          data-element_type="container"
          style="
            gap: 0px;
            display: flex;
            flex-direction: column;
            list-style-type: none;
            perspective-origin: 151.25px 245.938px;
            position: relative;
            transform-origin: 151.25px 245.949px;
            transition: background 0.3s, border 0.3s, box-shadow 0.3s, transform 0.4s;
            word-break: break-word;
            block-size: 491.891px;
            inset: 0px;
            height: 491.891px;
            inline-size: 302.5px;
            inset-block: 0px;
            inset-inline: 0px;
            max-inline-size: 100%;
            max-width: 100%;
            width: 302.5px;
          "
        >
          <div
            class="elementor-element elementor-element-62a12117 elementor-widget elementor-widget-theme-post-featured-image elementor-widget-image"
            data-id="62a12117"
            data-element_type="widget"
            data-widget_type="theme-post-featured-image.default"
            style="
              gap: 0px;
              list-style-type: none;
              perspective-origin: 151.25px 151.25px;
              position: relative;
              text-align: center;
              transform-origin: 151.25px 151.25px;
              word-break: break-word;
              block-size: 302.5px;
              inset: 0px;
              height: 302.5px;
              inline-size: 302.5px;
              inset-block: 0px;
              inset-inline: 0px;
              max-inline-size: 100%;
              max-width: 100%;
              min-block-size: auto;
              min-height: auto;
              width: 302.5px;
            "
          >
            <div
              class="elementor-widget-container"
              style="list-style-type: none; perspective-origin: 151.25px 151.25px; text-align: center; transform-origin: 151.25px 151.25px; transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s, transform 0.4s; word-break: break-word; block-size: 302.5px; height: 302.5px; inline-size: 302.5px; width: 302.5px"
            >
              <img
                loading="lazy"
                decoding="async"
                width="410"
                height="410"
                src="/"
                class="attachment-medium_large size-medium_large wp-image-1631"
                alt=""
                srcset="/ 410w, / 300w, / 150w"
                sizes="(max-width: 410px) 100vw, 410px"
                style="display: inline-block; list-style-type: none; perspective-origin: 151.25px 151.25px; text-align: center; transform-origin: 151.25px 151.25px; vertical-align: middle; word-break: break-word; block-size: 302.5px; height: 302.5px; inline-size: 302.5px; width: 302.5px"
              />
            </div>
          </div>
          <div
            class="elementor-element elementor-element-66e5738b elementor-widget elementor-widget-theme-post-title elementor-page-title elementor-widget-heading"
            data-id="66e5738b"
            data-element_type="widget"
            data-widget_type="theme-post-title.default"
            style="
              gap: 0px;
              list-style-type: none;
              perspective-origin: 151.25px 34.1875px;
              position: relative;
              text-align: center;
              transform-origin: 151.25px 34.1914px;
              word-break: break-word;
              block-size: 68.375px;
              inset: 0px;
              height: 68.375px;
              inline-size: 302.5px;
              inset-block: 0px;
              inset-inline: 0px;
              max-inline-size: 100%;
              max-width: 100%;
              min-block-size: auto;
              min-height: auto;
              width: 302.5px;
            "
          >
            <div
              class="elementor-widget-container"
              style="
                list-style-type: none;
                perspective-origin: 151.25px 26.6875px;
                text-align: center;
                transform-origin: 151.25px 26.6953px;
                transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s, transform 0.4s;
                word-break: break-word;
                block-size: 53.3828px;
                height: 53.3828px;
                inline-size: 302.5px;
                margin-block: 10px 5px;
                margin-bottom: 5px;
                margin-top: 10px;
                width: 302.5px;
              "
            >
              <h2
                class="elementor-heading-title elementor-size-default"
                style="
                  caret-color: rgb(111, 36, 115);
                  color: rgb(111, 36, 115);
                  column-rule-color: rgb(111, 36, 115);
                  list-style-type: none;
                  outline-color: rgb(111, 36, 115);
                  perspective-origin: 151.25px 19.1875px;
                  text-align: center;
                  text-decoration: rgb(111, 36, 115);
                  text-emphasis-color: rgb(111, 36, 115);
                  transform-origin: 151.25px 19.1992px;
                  word-break: break-word;
                  -webkit-text-fill-color: rgb(111, 36, 115);
                  -webkit-text-stroke-color: rgb(111, 36, 115);
                  block-size: 38.3906px;
                  border-block-color: rgb(111, 36, 115);
                  border-color: rgb(111, 36, 115);
                  border-inline-color: rgb(111, 36, 115);
                  height: 38.3906px;
                  inline-size: 302.5px;
                  margin-block: 0px;
                  margin-bottom: 0px;
                  margin-top: 0px;
                  width: 302.5px;
                "
              >
                Chronic
              </h2>
            </div>
          </div>
          <div
            class="elementor-element elementor-element-36107b0d elementor-widget elementor-widget-theme-post-content"
            data-id="36107b0d"
            data-element_type="widget"
            data-widget_type="theme-post-content.default"
            style="
              caret-color: rgb(127, 127, 127);
              color: rgb(127, 127, 127);
              gap: 0px;
              column-rule-color: rgb(127, 127, 127);
              font-style: italic;
              list-style-type: none;
              outline-color: rgb(127, 127, 127);
              perspective-origin: 151.25px 34px;
              position: relative;
              text-align: center;
              text-decoration: rgb(127, 127, 127);
              text-emphasis-color: rgb(127, 127, 127);
              transform-origin: 151.25px 34px;
              word-break: break-word;
              -webkit-text-fill-color: rgb(127, 127, 127);
              -webkit-text-stroke-color: rgb(127, 127, 127);
              block-size: 68px;
              border-block-color: rgb(127, 127, 127);
              border-color: rgb(127, 127, 127);
              border-inline-color: rgb(127, 127, 127);
              inset: 0px;
              height: 68px;
              inline-size: 302.5px;
              inset-block: 0px;
              inset-inline: 0px;
              max-inline-size: 100%;
              max-width: 100%;
              min-block-size: auto;
              min-height: auto;
              width: 302.5px;
            "
          >
            <div
              class="elementor-widget-container"
              style="
                caret-color: rgb(127, 127, 127);
                color: rgb(127, 127, 127);
                column-rule-color: rgb(127, 127, 127);
                font-style: italic;
                list-style-type: none;
                outline-color: rgb(127, 127, 127);
                perspective-origin: 151.25px 34px;
                text-align: center;
                text-decoration: rgb(127, 127, 127);
                text-emphasis-color: rgb(127, 127, 127);
                transform-origin: 151.25px 34px;
                transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s, transform 0.4s;
                word-break: break-word;
                -webkit-text-fill-color: rgb(127, 127, 127);
                -webkit-text-stroke-color: rgb(127, 127, 127);
                block-size: 68px;
                border-block-color: rgb(127, 127, 127);
                border-color: rgb(127, 127, 127);
                border-inline-color: rgb(127, 127, 127);
                height: 68px;
                inline-size: 302.5px;
                width: 302.5px;
              "
            >
              <p
                style="
                  caret-color: rgb(127, 127, 127);
                  color: rgb(127, 127, 127);
                  column-rule-color: rgb(127, 127, 127);
                  font-style: italic;
                  list-style-type: none;
                  outline-color: rgb(127, 127, 127);
                  perspective-origin: 151.25px 24px;
                  text-align: center;
                  text-decoration: rgb(127, 127, 127);
                  text-emphasis-color: rgb(127, 127, 127);
                  transform-origin: 151.25px 24px;
                  word-break: break-word;
                  -webkit-text-fill-color: rgb(127, 127, 127);
                  -webkit-text-stroke-color: rgb(127, 127, 127);
                  block-size: 48px;
                  border-block-color: rgb(127, 127, 127);
                  border-color: rgb(127, 127, 127);
                  border-inline-color: rgb(127, 127, 127);
                  height: 48px;
                  inline-size: 302.5px;
                  width: 302.5px;
                "
              >
                Acai, Granola, Banana, Strawberry, Kiwi, Pineapple, Coconut Shavings, Honey
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        data-elementor-type="loop-item"
        data-elementor-id="4252"
        class="elementor elementor-4252 swiper-slide e-loop-item e-loop-item-539 post-539 menu_item type-menu_item status-publish has-post-thumbnail hentry category-acai-bowls"
        data-elementor-post-type="elementor_library"
        role="group"
        aria-roledescription="slide"
        data-custom-edit-handle="1"
        aria-label="4 / 10"
        data-swiper-slide-index="3"
        style="
          flex-shrink: 0;
          list-style-type: none;
          perspective-origin: 151.25px 245.938px;
          position: relative;
          transform-origin: 151.25px 245.949px;
          transition-property: transform;
          block-size: 491.891px;
          inset: 0px;
          height: 491.891px;
          inline-size: 302.5px;
          inset-block: 0px;
          inset-inline: 0px;
          margin-inline-end: 20px;
          margin-right: 20px;
          min-block-size: auto;
          min-height: auto;
          min-inline-size: auto;
          min-width: auto;
          width: 302.5px;
        "
      >
        <div
          data-particle_enable="false"
          data-particle-mobile-disabled="false"
          class="elementor-element elementor-element-1f7adeb5 e-con-full e-flex e-con e-parent e-lazyloaded"
          data-id="1f7adeb5"
          data-element_type="container"
          style="
            gap: 0px;
            display: flex;
            flex-direction: column;
            list-style-type: none;
            perspective-origin: 151.25px 245.938px;
            position: relative;
            transform-origin: 151.25px 245.949px;
            transition: background 0.3s, border 0.3s, box-shadow 0.3s, transform 0.4s;
            word-break: break-word;
            block-size: 491.891px;
            inset: 0px;
            height: 491.891px;
            inline-size: 302.5px;
            inset-block: 0px;
            inset-inline: 0px;
            max-inline-size: 100%;
            max-width: 100%;
            width: 302.5px;
          "
        >
          <div
            class="elementor-element elementor-element-62a12117 elementor-widget elementor-widget-theme-post-featured-image elementor-widget-image"
            data-id="62a12117"
            data-element_type="widget"
            data-widget_type="theme-post-featured-image.default"
            style="
              gap: 0px;
              list-style-type: none;
              perspective-origin: 151.25px 151.25px;
              position: relative;
              text-align: center;
              transform-origin: 151.25px 151.25px;
              word-break: break-word;
              block-size: 302.5px;
              inset: 0px;
              height: 302.5px;
              inline-size: 302.5px;
              inset-block: 0px;
              inset-inline: 0px;
              max-inline-size: 100%;
              max-width: 100%;
              min-block-size: auto;
              min-height: auto;
              width: 302.5px;
            "
          >
            <div
              class="elementor-widget-container"
              style="list-style-type: none; perspective-origin: 151.25px 151.25px; text-align: center; transform-origin: 151.25px 151.25px; transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s, transform 0.4s; word-break: break-word; block-size: 302.5px; height: 302.5px; inline-size: 302.5px; width: 302.5px"
            >
              <img
                loading="lazy"
                decoding="async"
                width="410"
                height="410"
                src="/"
                class="attachment-medium_large size-medium_large wp-image-1541"
                alt=""
                srcset="/ 410w, / 300w, / 150w"
                sizes="(max-width: 410px) 100vw, 410px"
                style="display: inline-block; list-style-type: none; perspective-origin: 151.25px 151.25px; text-align: center; transform-origin: 151.25px 151.25px; vertical-align: middle; word-break: break-word; block-size: 302.5px; height: 302.5px; inline-size: 302.5px; width: 302.5px"
              />
            </div>
          </div>
          <div
            class="elementor-element elementor-element-66e5738b elementor-widget elementor-widget-theme-post-title elementor-page-title elementor-widget-heading"
            data-id="66e5738b"
            data-element_type="widget"
            data-widget_type="theme-post-title.default"
            style="
              gap: 0px;
              list-style-type: none;
              perspective-origin: 151.25px 34.1875px;
              position: relative;
              text-align: center;
              transform-origin: 151.25px 34.1914px;
              word-break: break-word;
              block-size: 68.375px;
              inset: 0px;
              height: 68.375px;
              inline-size: 302.5px;
              inset-block: 0px;
              inset-inline: 0px;
              max-inline-size: 100%;
              max-width: 100%;
              min-block-size: auto;
              min-height: auto;
              width: 302.5px;
            "
          >
            <div
              class="elementor-widget-container"
              style="
                list-style-type: none;
                perspective-origin: 151.25px 26.6875px;
                text-align: center;
                transform-origin: 151.25px 26.6953px;
                transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s, transform 0.4s;
                word-break: break-word;
                block-size: 53.3828px;
                height: 53.3828px;
                inline-size: 302.5px;
                margin-block: 10px 5px;
                margin-bottom: 5px;
                margin-top: 10px;
                width: 302.5px;
              "
            >
              <h2
                class="elementor-heading-title elementor-size-default"
                style="
                  caret-color: rgb(111, 36, 115);
                  color: rgb(111, 36, 115);
                  column-rule-color: rgb(111, 36, 115);
                  list-style-type: none;
                  outline-color: rgb(111, 36, 115);
                  perspective-origin: 151.25px 19.1875px;
                  text-align: center;
                  text-decoration: rgb(111, 36, 115);
                  text-emphasis-color: rgb(111, 36, 115);
                  transform-origin: 151.25px 19.1992px;
                  word-break: break-word;
                  -webkit-text-fill-color: rgb(111, 36, 115);
                  -webkit-text-stroke-color: rgb(111, 36, 115);
                  block-size: 38.3906px;
                  border-block-color: rgb(111, 36, 115);
                  border-color: rgb(111, 36, 115);
                  border-inline-color: rgb(111, 36, 115);
                  height: 38.3906px;
                  inline-size: 302.5px;
                  margin-block: 0px;
                  margin-bottom: 0px;
                  margin-top: 0px;
                  width: 302.5px;
                "
              >
                Estes Bowl
              </h2>
            </div>
          </div>
          <div
            class="elementor-element elementor-element-36107b0d elementor-widget elementor-widget-theme-post-content"
            data-id="36107b0d"
            data-element_type="widget"
            data-widget_type="theme-post-content.default"
            style="
              caret-color: rgb(127, 127, 127);
              color: rgb(127, 127, 127);
              gap: 0px;
              column-rule-color: rgb(127, 127, 127);
              font-style: italic;
              list-style-type: none;
              outline-color: rgb(127, 127, 127);
              perspective-origin: 151.25px 46px;
              position: relative;
              text-align: center;
              text-decoration: rgb(127, 127, 127);
              text-emphasis-color: rgb(127, 127, 127);
              transform-origin: 151.25px 46px;
              word-break: break-word;
              -webkit-text-fill-color: rgb(127, 127, 127);
              -webkit-text-stroke-color: rgb(127, 127, 127);
              block-size: 92px;
              border-block-color: rgb(127, 127, 127);
              border-color: rgb(127, 127, 127);
              border-inline-color: rgb(127, 127, 127);
              inset: 0px;
              height: 92px;
              inline-size: 302.5px;
              inset-block: 0px;
              inset-inline: 0px;
              max-inline-size: 100%;
              max-width: 100%;
              min-block-size: auto;
              min-height: auto;
              width: 302.5px;
            "
          >
            <div
              class="elementor-widget-container"
              style="
                caret-color: rgb(127, 127, 127);
                color: rgb(127, 127, 127);
                column-rule-color: rgb(127, 127, 127);
                font-style: italic;
                list-style-type: none;
                outline-color: rgb(127, 127, 127);
                perspective-origin: 151.25px 46px;
                text-align: center;
                text-decoration: rgb(127, 127, 127);
                text-emphasis-color: rgb(127, 127, 127);
                transform-origin: 151.25px 46px;
                transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s, transform 0.4s;
                word-break: break-word;
                -webkit-text-fill-color: rgb(127, 127, 127);
                -webkit-text-stroke-color: rgb(127, 127, 127);
                block-size: 92px;
                border-block-color: rgb(127, 127, 127);
                border-color: rgb(127, 127, 127);
                border-inline-color: rgb(127, 127, 127);
                height: 92px;
                inline-size: 302.5px;
                width: 302.5px;
              "
            >
              <p
                style="
                  caret-color: rgb(127, 127, 127);
                  color: rgb(127, 127, 127);
                  column-rule-color: rgb(127, 127, 127);
                  font-style: italic;
                  list-style-type: none;
                  outline-color: rgb(127, 127, 127);
                  perspective-origin: 151.25px 36px;
                  text-align: center;
                  text-decoration: rgb(127, 127, 127);
                  text-emphasis-color: rgb(127, 127, 127);
                  transform-origin: 151.25px 36px;
                  word-break: break-word;
                  -webkit-text-fill-color: rgb(127, 127, 127);
                  -webkit-text-stroke-color: rgb(127, 127, 127);
                  block-size: 72px;
                  border-block-color: rgb(127, 127, 127);
                  border-color: rgb(127, 127, 127);
                  border-inline-color: rgb(127, 127, 127);
                  height: 72px;
                  inline-size: 302.5px;
                  width: 302.5px;
                "
              >
                Acai, Granola, Peanut Butter, Strawberry, Green Apple, Chocolate Covered Almonds, Honey
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        data-elementor-type="loop-item"
        data-elementor-id="4252"
        class="elementor elementor-4252 swiper-slide e-loop-item e-loop-item-518 post-518 menu_item type-menu_item status-publish has-post-thumbnail hentry category-acai-bowls"
        data-elementor-post-type="elementor_library"
        role="group"
        aria-roledescription="slide"
        data-custom-edit-handle="1"
        aria-label="5 / 10"
        data-swiper-slide-index="4"
        style="
          flex-shrink: 0;
          list-style-type: none;
          perspective-origin: 151.25px 245.938px;
          position: relative;
          transform-origin: 151.25px 245.949px;
          transition-property: transform;
          block-size: 491.891px;
          inset: 0px;
          height: 491.891px;
          inline-size: 302.5px;
          inset-block: 0px;
          inset-inline: 0px;
          margin-inline-end: 20px;
          margin-right: 20px;
          min-block-size: auto;
          min-height: auto;
          min-inline-size: auto;
          min-width: auto;
          width: 302.5px;
        "
      >
        <div
          data-particle_enable="false"
          data-particle-mobile-disabled="false"
          class="elementor-element elementor-element-1f7adeb5 e-con-full e-flex e-con e-parent"
          data-id="1f7adeb5"
          data-element_type="container"
          style="
            gap: 0px;
            display: flex;
            flex-direction: column;
            list-style-type: none;
            perspective-origin: 151.25px 245.938px;
            position: relative;
            transform-origin: 151.25px 245.949px;
            transition: background 0.3s, border 0.3s, box-shadow 0.3s, transform 0.4s;
            word-break: break-word;
            block-size: 491.891px;
            inset: 0px;
            height: 491.891px;
            inline-size: 302.5px;
            inset-block: 0px;
            inset-inline: 0px;
            max-inline-size: 100%;
            max-width: 100%;
            width: 302.5px;
          "
        >
          <div
            class="elementor-element elementor-element-62a12117 elementor-widget elementor-widget-theme-post-featured-image elementor-widget-image"
            data-id="62a12117"
            data-element_type="widget"
            data-widget_type="theme-post-featured-image.default"
            style="
              gap: 0px;
              list-style-type: none;
              perspective-origin: 151.25px 151.25px;
              position: relative;
              text-align: center;
              transform-origin: 151.25px 151.25px;
              word-break: break-word;
              block-size: 302.5px;
              inset: 0px;
              height: 302.5px;
              inline-size: 302.5px;
              inset-block: 0px;
              inset-inline: 0px;
              max-inline-size: 100%;
              max-width: 100%;
              min-block-size: auto;
              min-height: auto;
              width: 302.5px;
            "
          >
            <div
              class="elementor-widget-container"
              style="list-style-type: none; perspective-origin: 151.25px 151.25px; text-align: center; transform-origin: 151.25px 151.25px; transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s, transform 0.4s; word-break: break-word; block-size: 302.5px; height: 302.5px; inline-size: 302.5px; width: 302.5px"
            >
              <img
                loading="lazy"
                decoding="async"
                width="410"
                height="410"
                src="/"
                class="attachment-medium_large size-medium_large wp-image-1552"
                alt=""
                srcset="/ 410w, / 300w, / 150w"
                sizes="(max-width: 410px) 100vw, 410px"
                style="display: inline-block; list-style-type: none; perspective-origin: 151.25px 151.25px; text-align: center; transform-origin: 151.25px 151.25px; vertical-align: middle; word-break: break-word; block-size: 302.5px; height: 302.5px; inline-size: 302.5px; width: 302.5px"
              />
            </div>
          </div>
          <div
            class="elementor-element elementor-element-66e5738b elementor-widget elementor-widget-theme-post-title elementor-page-title elementor-widget-heading"
            data-id="66e5738b"
            data-element_type="widget"
            data-widget_type="theme-post-title.default"
            style="
              gap: 0px;
              list-style-type: none;
              perspective-origin: 151.25px 34.1875px;
              position: relative;
              text-align: center;
              transform-origin: 151.25px 34.1914px;
              word-break: break-word;
              block-size: 68.375px;
              inset: 0px;
              height: 68.375px;
              inline-size: 302.5px;
              inset-block: 0px;
              inset-inline: 0px;
              max-inline-size: 100%;
              max-width: 100%;
              min-block-size: auto;
              min-height: auto;
              width: 302.5px;
            "
          >
            <div
              class="elementor-widget-container"
              style="
                list-style-type: none;
                perspective-origin: 151.25px 26.6875px;
                text-align: center;
                transform-origin: 151.25px 26.6953px;
                transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s, transform 0.4s;
                word-break: break-word;
                block-size: 53.3828px;
                height: 53.3828px;
                inline-size: 302.5px;
                margin-block: 10px 5px;
                margin-bottom: 5px;
                margin-top: 10px;
                width: 302.5px;
              "
            >
              <h2
                class="elementor-heading-title elementor-size-default"
                style="
                  caret-color: rgb(111, 36, 115);
                  color: rgb(111, 36, 115);
                  column-rule-color: rgb(111, 36, 115);
                  list-style-type: none;
                  outline-color: rgb(111, 36, 115);
                  perspective-origin: 151.25px 19.1875px;
                  text-align: center;
                  text-decoration: rgb(111, 36, 115);
                  text-emphasis-color: rgb(111, 36, 115);
                  transform-origin: 151.25px 19.1992px;
                  word-break: break-word;
                  -webkit-text-fill-color: rgb(111, 36, 115);
                  -webkit-text-stroke-color: rgb(111, 36, 115);
                  block-size: 38.3906px;
                  border-block-color: rgb(111, 36, 115);
                  border-color: rgb(111, 36, 115);
                  border-inline-color: rgb(111, 36, 115);
                  height: 38.3906px;
                  inline-size: 302.5px;
                  margin-block: 0px;
                  margin-bottom: 0px;
                  margin-top: 0px;
                  width: 302.5px;
                "
              >
                The Local
              </h2>
            </div>
          </div>
          <div
            class="elementor-element elementor-element-36107b0d elementor-widget elementor-widget-theme-post-content"
            data-id="36107b0d"
            data-element_type="widget"
            data-widget_type="theme-post-content.default"
            style="
              caret-color: rgb(127, 127, 127);
              color: rgb(127, 127, 127);
              gap: 0px;
              column-rule-color: rgb(127, 127, 127);
              font-style: italic;
              list-style-type: none;
              outline-color: rgb(127, 127, 127);
              perspective-origin: 151.25px 34px;
              position: relative;
              text-align: center;
              text-decoration: rgb(127, 127, 127);
              text-emphasis-color: rgb(127, 127, 127);
              transform-origin: 151.25px 34px;
              word-break: break-word;
              -webkit-text-fill-color: rgb(127, 127, 127);
              -webkit-text-stroke-color: rgb(127, 127, 127);
              block-size: 68px;
              border-block-color: rgb(127, 127, 127);
              border-color: rgb(127, 127, 127);
              border-inline-color: rgb(127, 127, 127);
              inset: 0px;
              height: 68px;
              inline-size: 302.5px;
              inset-block: 0px;
              inset-inline: 0px;
              max-inline-size: 100%;
              max-width: 100%;
              min-block-size: auto;
              min-height: auto;
              width: 302.5px;
            "
          >
            <div
              class="elementor-widget-container"
              style="
                caret-color: rgb(127, 127, 127);
                color: rgb(127, 127, 127);
                column-rule-color: rgb(127, 127, 127);
                font-style: italic;
                list-style-type: none;
                outline-color: rgb(127, 127, 127);
                perspective-origin: 151.25px 34px;
                text-align: center;
                text-decoration: rgb(127, 127, 127);
                text-emphasis-color: rgb(127, 127, 127);
                transform-origin: 151.25px 34px;
                transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s, transform 0.4s;
                word-break: break-word;
                -webkit-text-fill-color: rgb(127, 127, 127);
                -webkit-text-stroke-color: rgb(127, 127, 127);
                block-size: 68px;
                border-block-color: rgb(127, 127, 127);
                border-color: rgb(127, 127, 127);
                border-inline-color: rgb(127, 127, 127);
                height: 68px;
                inline-size: 302.5px;
                width: 302.5px;
              "
            >
              <p
                style="
                  caret-color: rgb(127, 127, 127);
                  color: rgb(127, 127, 127);
                  column-rule-color: rgb(127, 127, 127);
                  font-style: italic;
                  list-style-type: none;
                  outline-color: rgb(127, 127, 127);
                  perspective-origin: 151.25px 24px;
                  text-align: center;
                  text-decoration: rgb(127, 127, 127);
                  text-emphasis-color: rgb(127, 127, 127);
                  transform-origin: 151.25px 24px;
                  word-break: break-word;
                  -webkit-text-fill-color: rgb(127, 127, 127);
                  -webkit-text-stroke-color: rgb(127, 127, 127);
                  block-size: 48px;
                  border-block-color: rgb(127, 127, 127);
                  border-color: rgb(127, 127, 127);
                  border-inline-color: rgb(127, 127, 127);
                  height: 48px;
                  inline-size: 302.5px;
                  width: 302.5px;
                "
              >
                Acai, Granola, Banana, Strawberry, Blueberry, Honey
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        data-elementor-type="loop-item"
        data-elementor-id="4252"
        class="elementor elementor-4252 swiper-slide e-loop-item e-loop-item-540 post-540 menu_item type-menu_item status-publish has-post-thumbnail hentry category-acai-bowls"
        data-elementor-post-type="elementor_library"
        role="group"
        aria-roledescription="slide"
        data-custom-edit-handle="1"
        aria-label="6 / 10"
        data-swiper-slide-index="5"
        style="
          flex-shrink: 0;
          list-style-type: none;
          perspective-origin: 151.25px 253.438px;
          position: relative;
          transform-origin: 151.25px 253.438px;
          transition-property: transform;
          block-size: 506.875px;
          inset: 0px;
          height: 506.875px;
          inline-size: 302.5px;
          inset-block: 0px;
          inset-inline: 0px;
          margin-inline-end: 20px;
          margin-right: 20px;
          min-block-size: auto;
          min-height: auto;
          min-inline-size: auto;
          min-width: auto;
          width: 302.5px;
        "
      >
        <div
          data-particle_enable="false"
          data-particle-mobile-disabled="false"
          class="elementor-element elementor-element-1f7adeb5 e-con-full e-flex e-con e-parent"
          data-id="1f7adeb5"
          data-element_type="container"
          style="
            gap: 0px;
            display: flex;
            flex-direction: column;
            list-style-type: none;
            perspective-origin: 151.25px 253.438px;
            position: relative;
            transform-origin: 151.25px 253.438px;
            transition: background 0.3s, border 0.3s, box-shadow 0.3s, transform 0.4s;
            word-break: break-word;
            block-size: 506.875px;
            inset: 0px;
            height: 506.875px;
            inline-size: 302.5px;
            inset-block: 0px;
            inset-inline: 0px;
            max-inline-size: 100%;
            max-width: 100%;
            width: 302.5px;
          "
        >
          <div
            class="elementor-element elementor-element-62a12117 elementor-widget elementor-widget-theme-post-featured-image elementor-widget-image"
            data-id="62a12117"
            data-element_type="widget"
            data-widget_type="theme-post-featured-image.default"
            style="
              gap: 0px;
              list-style-type: none;
              perspective-origin: 151.25px 151.25px;
              position: relative;
              text-align: center;
              transform-origin: 151.25px 151.25px;
              word-break: break-word;
              block-size: 302.5px;
              inset: 0px;
              height: 302.5px;
              inline-size: 302.5px;
              inset-block: 0px;
              inset-inline: 0px;
              max-inline-size: 100%;
              max-width: 100%;
              min-block-size: auto;
              min-height: auto;
              width: 302.5px;
            "
          >
            <div
              class="elementor-widget-container"
              style="list-style-type: none; perspective-origin: 151.25px 151.25px; text-align: center; transform-origin: 151.25px 151.25px; transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s, transform 0.4s; word-break: break-word; block-size: 302.5px; height: 302.5px; inline-size: 302.5px; width: 302.5px"
            >
              <img
                loading="lazy"
                decoding="async"
                width="410"
                height="410"
                src="/"
                class="attachment-medium_large size-medium_large wp-image-1550"
                alt=""
                srcset="/ 410w, / 300w, / 150w"
                sizes="(max-width: 410px) 100vw, 410px"
                style="display: inline-block; list-style-type: none; perspective-origin: 151.25px 151.25px; text-align: center; transform-origin: 151.25px 151.25px; vertical-align: middle; word-break: break-word; block-size: 302.5px; height: 302.5px; inline-size: 302.5px; width: 302.5px"
              />
            </div>
          </div>
          <div
            class="elementor-element elementor-element-66e5738b elementor-widget elementor-widget-theme-post-title elementor-page-title elementor-widget-heading"
            data-id="66e5738b"
            data-element_type="widget"
            data-widget_type="theme-post-title.default"
            style="
              gap: 0px;
              list-style-type: none;
              perspective-origin: 151.25px 34.1875px;
              position: relative;
              text-align: center;
              transform-origin: 151.25px 34.1914px;
              word-break: break-word;
              block-size: 68.375px;
              inset: 0px;
              height: 68.375px;
              inline-size: 302.5px;
              inset-block: 0px;
              inset-inline: 0px;
              max-inline-size: 100%;
              max-width: 100%;
              min-block-size: auto;
              min-height: auto;
              width: 302.5px;
            "
          >
            <div
              class="elementor-widget-container"
              style="
                list-style-type: none;
                perspective-origin: 151.25px 26.6875px;
                text-align: center;
                transform-origin: 151.25px 26.6953px;
                transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s, transform 0.4s;
                word-break: break-word;
                block-size: 53.3828px;
                height: 53.3828px;
                inline-size: 302.5px;
                margin-block: 10px 5px;
                margin-bottom: 5px;
                margin-top: 10px;
                width: 302.5px;
              "
            >
              <h2
                class="elementor-heading-title elementor-size-default"
                style="
                  caret-color: rgb(111, 36, 115);
                  color: rgb(111, 36, 115);
                  column-rule-color: rgb(111, 36, 115);
                  list-style-type: none;
                  outline-color: rgb(111, 36, 115);
                  perspective-origin: 151.25px 19.1875px;
                  text-align: center;
                  text-decoration: rgb(111, 36, 115);
                  text-emphasis-color: rgb(111, 36, 115);
                  transform-origin: 151.25px 19.1992px;
                  word-break: break-word;
                  -webkit-text-fill-color: rgb(111, 36, 115);
                  -webkit-text-stroke-color: rgb(111, 36, 115);
                  block-size: 38.3906px;
                  border-block-color: rgb(111, 36, 115);
                  border-color: rgb(111, 36, 115);
                  border-inline-color: rgb(111, 36, 115);
                  height: 38.3906px;
                  inline-size: 302.5px;
                  margin-block: 0px;
                  margin-bottom: 0px;
                  margin-top: 0px;
                  width: 302.5px;
                "
              >
                The Calypso
              </h2>
            </div>
          </div>
          <div
            class="elementor-element elementor-element-36107b0d elementor-widget elementor-widget-theme-post-content"
            data-id="36107b0d"
            data-element_type="widget"
            data-widget_type="theme-post-content.default"
            style="
              caret-color: rgb(127, 127, 127);
              color: rgb(127, 127, 127);
              gap: 0px;
              column-rule-color: rgb(127, 127, 127);
              font-style: italic;
              list-style-type: none;
              outline-color: rgb(127, 127, 127);
              perspective-origin: 151.25px 68px;
              position: relative;
              text-align: center;
              text-decoration: rgb(127, 127, 127);
              text-emphasis-color: rgb(127, 127, 127);
              transform-origin: 151.25px 68px;
              word-break: break-word;
              -webkit-text-fill-color: rgb(127, 127, 127);
              -webkit-text-stroke-color: rgb(127, 127, 127);
              block-size: 136px;
              border-block-color: rgb(127, 127, 127);
              border-color: rgb(127, 127, 127);
              border-inline-color: rgb(127, 127, 127);
              inset: 0px;
              height: 136px;
              inline-size: 302.5px;
              inset-block: 0px;
              inset-inline: 0px;
              max-inline-size: 100%;
              max-width: 100%;
              min-block-size: auto;
              min-height: auto;
              width: 302.5px;
            "
          >
            <div
              class="elementor-widget-container"
              style="
                caret-color: rgb(127, 127, 127);
                color: rgb(127, 127, 127);
                column-rule-color: rgb(127, 127, 127);
                font-style: italic;
                list-style-type: none;
                outline-color: rgb(127, 127, 127);
                perspective-origin: 151.25px 68px;
                text-align: center;
                text-decoration: rgb(127, 127, 127);
                text-emphasis-color: rgb(127, 127, 127);
                transform-origin: 151.25px 68px;
                transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s, transform 0.4s;
                word-break: break-word;
                -webkit-text-fill-color: rgb(127, 127, 127);
                -webkit-text-stroke-color: rgb(127, 127, 127);
                block-size: 136px;
                border-block-color: rgb(127, 127, 127);
                border-color: rgb(127, 127, 127);
                border-inline-color: rgb(127, 127, 127);
                height: 136px;
                inline-size: 302.5px;
                width: 302.5px;
              "
            >
              <p
                style="
                  caret-color: rgb(127, 127, 127);
                  color: rgb(127, 127, 127);
                  column-rule-color: rgb(127, 127, 127);
                  font-style: italic;
                  list-style-type: none;
                  outline-color: rgb(127, 127, 127);
                  perspective-origin: 151.25px 36px;
                  text-align: center;
                  text-decoration: rgb(127, 127, 127);
                  text-emphasis-color: rgb(127, 127, 127);
                  transform-origin: 151.25px 36px;
                  word-break: break-word;
                  -webkit-text-fill-color: rgb(127, 127, 127);
                  -webkit-text-stroke-color: rgb(127, 127, 127);
                  block-size: 72px;
                  border-block-color: rgb(127, 127, 127);
                  border-color: rgb(127, 127, 127);
                  border-inline-color: rgb(127, 127, 127);
                  height: 72px;
                  inline-size: 302.5px;
                  width: 302.5px;
                "
              >
                Greek Yogurt, Granola, Almond Butter, Banana, Raspberry, Blueberry, Pineapple, Chia Seeds, Hemp Seeds
              </p>
              <p
                style="
                  caret-color: rgb(127, 127, 127);
                  color: rgb(127, 127, 127);
                  column-rule-color: rgb(127, 127, 127);
                  font-style: italic;
                  list-style-type: none;
                  outline-color: rgb(127, 127, 127);
                  perspective-origin: 151.25px 12px;
                  text-align: center;
                  text-decoration: rgb(127, 127, 127);
                  text-emphasis-color: rgb(127, 127, 127);
                  transform-origin: 151.25px 12px;
                  word-break: break-word;
                  -webkit-text-fill-color: rgb(127, 127, 127);
                  -webkit-text-stroke-color: rgb(127, 127, 127);
                  block-size: 24px;
                  border-block-color: rgb(127, 127, 127);
                  border-color: rgb(127, 127, 127);
                  border-inline-color: rgb(127, 127, 127);
                  height: 24px;
                  inline-size: 302.5px;
                  width: 302.5px;
                "
              >
                &nbsp;
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        data-elementor-type="loop-item"
        data-elementor-id="4252"
        class="elementor elementor-4252 swiper-slide e-loop-item e-loop-item-538 post-538 menu_item type-menu_item status-publish has-post-thumbnail hentry category-acai-bowls"
        data-elementor-post-type="elementor_library"
        role="group"
        aria-roledescription="slide"
        data-custom-edit-handle="1"
        aria-label="7 / 10"
        data-swiper-slide-index="6"
        style="
          flex-shrink: 0;
          list-style-type: none;
          perspective-origin: 151.25px 253.438px;
          position: relative;
          transform-origin: 151.25px 253.438px;
          transition-property: transform;
          block-size: 506.875px;
          inset: 0px;
          height: 506.875px;
          inline-size: 302.5px;
          inset-block: 0px;
          inset-inline: 0px;
          margin-inline-end: 20px;
          margin-right: 20px;
          min-block-size: auto;
          min-height: auto;
          min-inline-size: auto;
          min-width: auto;
          width: 302.5px;
        "
      >
        <div
          data-particle_enable="false"
          data-particle-mobile-disabled="false"
          class="elementor-element elementor-element-1f7adeb5 e-con-full e-flex e-con e-parent"
          data-id="1f7adeb5"
          data-element_type="container"
          style="
            gap: 0px;
            display: flex;
            flex-direction: column;
            list-style-type: none;
            perspective-origin: 151.25px 253.438px;
            position: relative;
            transform-origin: 151.25px 253.438px;
            transition: background 0.3s, border 0.3s, box-shadow 0.3s, transform 0.4s;
            word-break: break-word;
            block-size: 506.875px;
            inset: 0px;
            height: 506.875px;
            inline-size: 302.5px;
            inset-block: 0px;
            inset-inline: 0px;
            max-inline-size: 100%;
            max-width: 100%;
            width: 302.5px;
          "
        >
          <div
            class="elementor-element elementor-element-62a12117 elementor-widget elementor-widget-theme-post-featured-image elementor-widget-image"
            data-id="62a12117"
            data-element_type="widget"
            data-widget_type="theme-post-featured-image.default"
            style="
              gap: 0px;
              list-style-type: none;
              perspective-origin: 151.25px 151.25px;
              position: relative;
              text-align: center;
              transform-origin: 151.25px 151.25px;
              word-break: break-word;
              block-size: 302.5px;
              inset: 0px;
              height: 302.5px;
              inline-size: 302.5px;
              inset-block: 0px;
              inset-inline: 0px;
              max-inline-size: 100%;
              max-width: 100%;
              min-block-size: auto;
              min-height: auto;
              width: 302.5px;
            "
          >
            <div
              class="elementor-widget-container"
              style="list-style-type: none; perspective-origin: 151.25px 151.25px; text-align: center; transform-origin: 151.25px 151.25px; transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s, transform 0.4s; word-break: break-word; block-size: 302.5px; height: 302.5px; inline-size: 302.5px; width: 302.5px"
            >
              <img
                loading="lazy"
                decoding="async"
                width="410"
                height="410"
                src="/"
                class="attachment-medium_large size-medium_large wp-image-1547"
                alt=""
                srcset="/ 410w, / 300w, / 150w"
                sizes="(max-width: 410px) 100vw, 410px"
                style="display: inline-block; list-style-type: none; perspective-origin: 151.25px 151.25px; text-align: center; transform-origin: 151.25px 151.25px; vertical-align: middle; word-break: break-word; block-size: 302.5px; height: 302.5px; inline-size: 302.5px; width: 302.5px"
              />
            </div>
          </div>
          <div
            class="elementor-element elementor-element-66e5738b elementor-widget elementor-widget-theme-post-title elementor-page-title elementor-widget-heading"
            data-id="66e5738b"
            data-element_type="widget"
            data-widget_type="theme-post-title.default"
            style="
              gap: 0px;
              list-style-type: none;
              perspective-origin: 151.25px 34.1875px;
              position: relative;
              text-align: center;
              transform-origin: 151.25px 34.1914px;
              word-break: break-word;
              block-size: 68.375px;
              inset: 0px;
              height: 68.375px;
              inline-size: 302.5px;
              inset-block: 0px;
              inset-inline: 0px;
              max-inline-size: 100%;
              max-width: 100%;
              min-block-size: auto;
              min-height: auto;
              width: 302.5px;
            "
          >
            <div
              class="elementor-widget-container"
              style="
                list-style-type: none;
                perspective-origin: 151.25px 26.6875px;
                text-align: center;
                transform-origin: 151.25px 26.6953px;
                transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s, transform 0.4s;
                word-break: break-word;
                block-size: 53.3828px;
                height: 53.3828px;
                inline-size: 302.5px;
                margin-block: 10px 5px;
                margin-bottom: 5px;
                margin-top: 10px;
                width: 302.5px;
              "
            >
              <h2
                class="elementor-heading-title elementor-size-default"
                style="
                  caret-color: rgb(111, 36, 115);
                  color: rgb(111, 36, 115);
                  column-rule-color: rgb(111, 36, 115);
                  list-style-type: none;
                  outline-color: rgb(111, 36, 115);
                  perspective-origin: 151.25px 19.1875px;
                  text-align: center;
                  text-decoration: rgb(111, 36, 115);
                  text-emphasis-color: rgb(111, 36, 115);
                  transform-origin: 151.25px 19.1992px;
                  word-break: break-word;
                  -webkit-text-fill-color: rgb(111, 36, 115);
                  -webkit-text-stroke-color: rgb(111, 36, 115);
                  block-size: 38.3906px;
                  border-block-color: rgb(111, 36, 115);
                  border-color: rgb(111, 36, 115);
                  border-inline-color: rgb(111, 36, 115);
                  height: 38.3906px;
                  inline-size: 302.5px;
                  margin-block: 0px;
                  margin-bottom: 0px;
                  margin-top: 0px;
                  width: 302.5px;
                "
              >
                JB Bowl
              </h2>
            </div>
          </div>
          <div
            class="elementor-element elementor-element-36107b0d elementor-widget elementor-widget-theme-post-content"
            data-id="36107b0d"
            data-element_type="widget"
            data-widget_type="theme-post-content.default"
            style="
              caret-color: rgb(127, 127, 127);
              color: rgb(127, 127, 127);
              gap: 0px;
              column-rule-color: rgb(127, 127, 127);
              font-style: italic;
              list-style-type: none;
              outline-color: rgb(127, 127, 127);
              perspective-origin: 151.25px 46px;
              position: relative;
              text-align: center;
              text-decoration: rgb(127, 127, 127);
              text-emphasis-color: rgb(127, 127, 127);
              transform-origin: 151.25px 46px;
              word-break: break-word;
              -webkit-text-fill-color: rgb(127, 127, 127);
              -webkit-text-stroke-color: rgb(127, 127, 127);
              block-size: 92px;
              border-block-color: rgb(127, 127, 127);
              border-color: rgb(127, 127, 127);
              border-inline-color: rgb(127, 127, 127);
              inset: 0px;
              height: 92px;
              inline-size: 302.5px;
              inset-block: 0px;
              inset-inline: 0px;
              max-inline-size: 100%;
              max-width: 100%;
              min-block-size: auto;
              min-height: auto;
              width: 302.5px;
            "
          >
            <div
              class="elementor-widget-container"
              style="
                caret-color: rgb(127, 127, 127);
                color: rgb(127, 127, 127);
                column-rule-color: rgb(127, 127, 127);
                font-style: italic;
                list-style-type: none;
                outline-color: rgb(127, 127, 127);
                perspective-origin: 151.25px 46px;
                text-align: center;
                text-decoration: rgb(127, 127, 127);
                text-emphasis-color: rgb(127, 127, 127);
                transform-origin: 151.25px 46px;
                transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s, transform 0.4s;
                word-break: break-word;
                -webkit-text-fill-color: rgb(127, 127, 127);
                -webkit-text-stroke-color: rgb(127, 127, 127);
                block-size: 92px;
                border-block-color: rgb(127, 127, 127);
                border-color: rgb(127, 127, 127);
                border-inline-color: rgb(127, 127, 127);
                height: 92px;
                inline-size: 302.5px;
                width: 302.5px;
              "
            >
              <p
                style="
                  caret-color: rgb(127, 127, 127);
                  color: rgb(127, 127, 127);
                  column-rule-color: rgb(127, 127, 127);
                  font-style: italic;
                  list-style-type: none;
                  outline-color: rgb(127, 127, 127);
                  perspective-origin: 151.25px 36px;
                  text-align: center;
                  text-decoration: rgb(127, 127, 127);
                  text-emphasis-color: rgb(127, 127, 127);
                  transform-origin: 151.25px 36px;
                  word-break: break-word;
                  -webkit-text-fill-color: rgb(127, 127, 127);
                  -webkit-text-stroke-color: rgb(127, 127, 127);
                  block-size: 72px;
                  border-block-color: rgb(127, 127, 127);
                  border-color: rgb(127, 127, 127);
                  border-inline-color: rgb(127, 127, 127);
                  height: 72px;
                  inline-size: 302.5px;
                  width: 302.5px;
                "
              >
                Acai, Granola, Greek Yogurt, Peanut Butter, Pineapple, Strawberry, Coconut Shavings, Hemp Seeds
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        data-elementor-type="loop-item"
        data-elementor-id="4252"
        class="elementor elementor-4252 swiper-slide e-loop-item e-loop-item-537 post-537 menu_item type-menu_item status-publish has-post-thumbnail hentry category-acai-bowls"
        data-elementor-post-type="elementor_library"
        role="group"
        aria-roledescription="slide"
        data-custom-edit-handle="1"
        aria-label="8 / 10"
        data-swiper-slide-index="7"
        style="
          flex-shrink: 0;
          list-style-type: none;
          perspective-origin: 151.25px 253.438px;
          position: relative;
          transform-origin: 151.25px 253.438px;
          transition-property: transform;
          block-size: 506.875px;
          inset: 0px;
          height: 506.875px;
          inline-size: 302.5px;
          inset-block: 0px;
          inset-inline: 0px;
          margin-inline-end: 20px;
          margin-right: 20px;
          min-block-size: auto;
          min-height: auto;
          min-inline-size: auto;
          min-width: auto;
          width: 302.5px;
        "
      >
        <div
          data-particle_enable="false"
          data-particle-mobile-disabled="false"
          class="elementor-element elementor-element-1f7adeb5 e-con-full e-flex e-con e-parent"
          data-id="1f7adeb5"
          data-element_type="container"
          style="
            gap: 0px;
            display: flex;
            flex-direction: column;
            list-style-type: none;
            perspective-origin: 151.25px 253.438px;
            position: relative;
            transform-origin: 151.25px 253.438px;
            transition: background 0.3s, border 0.3s, box-shadow 0.3s, transform 0.4s;
            word-break: break-word;
            block-size: 506.875px;
            inset: 0px;
            height: 506.875px;
            inline-size: 302.5px;
            inset-block: 0px;
            inset-inline: 0px;
            max-inline-size: 100%;
            max-width: 100%;
            width: 302.5px;
          "
        >
          <div
            class="elementor-element elementor-element-62a12117 elementor-widget elementor-widget-theme-post-featured-image elementor-widget-image"
            data-id="62a12117"
            data-element_type="widget"
            data-widget_type="theme-post-featured-image.default"
            style="
              gap: 0px;
              list-style-type: none;
              perspective-origin: 151.25px 151.25px;
              position: relative;
              text-align: center;
              transform-origin: 151.25px 151.25px;
              word-break: break-word;
              block-size: 302.5px;
              inset: 0px;
              height: 302.5px;
              inline-size: 302.5px;
              inset-block: 0px;
              inset-inline: 0px;
              max-inline-size: 100%;
              max-width: 100%;
              min-block-size: auto;
              min-height: auto;
              width: 302.5px;
            "
          >
            <div
              class="elementor-widget-container"
              style="list-style-type: none; perspective-origin: 151.25px 151.25px; text-align: center; transform-origin: 151.25px 151.25px; transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s, transform 0.4s; word-break: break-word; block-size: 302.5px; height: 302.5px; inline-size: 302.5px; width: 302.5px"
            >
              <img
                loading="lazy"
                decoding="async"
                width="410"
                height="410"
                src="/"
                class="attachment-medium_large size-medium_large wp-image-1548"
                alt=""
                srcset="/ 410w, / 300w, / 150w"
                sizes="(max-width: 410px) 100vw, 410px"
                style="display: inline-block; list-style-type: none; perspective-origin: 151.25px 151.25px; text-align: center; transform-origin: 151.25px 151.25px; vertical-align: middle; word-break: break-word; block-size: 302.5px; height: 302.5px; inline-size: 302.5px; width: 302.5px"
              />
            </div>
          </div>
          <div
            class="elementor-element elementor-element-66e5738b elementor-widget elementor-widget-theme-post-title elementor-page-title elementor-widget-heading"
            data-id="66e5738b"
            data-element_type="widget"
            data-widget_type="theme-post-title.default"
            style="
              gap: 0px;
              list-style-type: none;
              perspective-origin: 151.25px 34.1875px;
              position: relative;
              text-align: center;
              transform-origin: 151.25px 34.1914px;
              word-break: break-word;
              block-size: 68.375px;
              inset: 0px;
              height: 68.375px;
              inline-size: 302.5px;
              inset-block: 0px;
              inset-inline: 0px;
              max-inline-size: 100%;
              max-width: 100%;
              min-block-size: auto;
              min-height: auto;
              width: 302.5px;
            "
          >
            <div
              class="elementor-widget-container"
              style="
                list-style-type: none;
                perspective-origin: 151.25px 26.6875px;
                text-align: center;
                transform-origin: 151.25px 26.6953px;
                transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s, transform 0.4s;
                word-break: break-word;
                block-size: 53.3828px;
                height: 53.3828px;
                inline-size: 302.5px;
                margin-block: 10px 5px;
                margin-bottom: 5px;
                margin-top: 10px;
                width: 302.5px;
              "
            >
              <h2
                class="elementor-heading-title elementor-size-default"
                style="
                  caret-color: rgb(111, 36, 115);
                  color: rgb(111, 36, 115);
                  column-rule-color: rgb(111, 36, 115);
                  list-style-type: none;
                  outline-color: rgb(111, 36, 115);
                  perspective-origin: 151.25px 19.1875px;
                  text-align: center;
                  text-decoration: rgb(111, 36, 115);
                  text-emphasis-color: rgb(111, 36, 115);
                  transform-origin: 151.25px 19.1992px;
                  word-break: break-word;
                  -webkit-text-fill-color: rgb(111, 36, 115);
                  -webkit-text-stroke-color: rgb(111, 36, 115);
                  block-size: 38.3906px;
                  border-block-color: rgb(111, 36, 115);
                  border-color: rgb(111, 36, 115);
                  border-inline-color: rgb(111, 36, 115);
                  height: 38.3906px;
                  inline-size: 302.5px;
                  margin-block: 0px;
                  margin-bottom: 0px;
                  margin-top: 0px;
                  width: 302.5px;
                "
              >
                Tequesta Dragon
              </h2>
            </div>
          </div>
          <div
            class="elementor-element elementor-element-36107b0d elementor-widget elementor-widget-theme-post-content"
            data-id="36107b0d"
            data-element_type="widget"
            data-widget_type="theme-post-content.default"
            style="
              caret-color: rgb(127, 127, 127);
              color: rgb(127, 127, 127);
              gap: 0px;
              column-rule-color: rgb(127, 127, 127);
              font-style: italic;
              list-style-type: none;
              outline-color: rgb(127, 127, 127);
              perspective-origin: 151.25px 34px;
              position: relative;
              text-align: center;
              text-decoration: rgb(127, 127, 127);
              text-emphasis-color: rgb(127, 127, 127);
              transform-origin: 151.25px 34px;
              word-break: break-word;
              -webkit-text-fill-color: rgb(127, 127, 127);
              -webkit-text-stroke-color: rgb(127, 127, 127);
              block-size: 68px;
              border-block-color: rgb(127, 127, 127);
              border-color: rgb(127, 127, 127);
              border-inline-color: rgb(127, 127, 127);
              inset: 0px;
              height: 68px;
              inline-size: 302.5px;
              inset-block: 0px;
              inset-inline: 0px;
              max-inline-size: 100%;
              max-width: 100%;
              min-block-size: auto;
              min-height: auto;
              width: 302.5px;
            "
          >
            <div
              class="elementor-widget-container"
              style="
                caret-color: rgb(127, 127, 127);
                color: rgb(127, 127, 127);
                column-rule-color: rgb(127, 127, 127);
                font-style: italic;
                list-style-type: none;
                outline-color: rgb(127, 127, 127);
                perspective-origin: 151.25px 34px;
                text-align: center;
                text-decoration: rgb(127, 127, 127);
                text-emphasis-color: rgb(127, 127, 127);
                transform-origin: 151.25px 34px;
                transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s, transform 0.4s;
                word-break: break-word;
                -webkit-text-fill-color: rgb(127, 127, 127);
                -webkit-text-stroke-color: rgb(127, 127, 127);
                block-size: 68px;
                border-block-color: rgb(127, 127, 127);
                border-color: rgb(127, 127, 127);
                border-inline-color: rgb(127, 127, 127);
                height: 68px;
                inline-size: 302.5px;
                width: 302.5px;
              "
            >
              <p
                style="
                  caret-color: rgb(127, 127, 127);
                  color: rgb(127, 127, 127);
                  column-rule-color: rgb(127, 127, 127);
                  font-style: italic;
                  list-style-type: none;
                  outline-color: rgb(127, 127, 127);
                  perspective-origin: 151.25px 24px;
                  text-align: center;
                  text-decoration: rgb(127, 127, 127);
                  text-emphasis-color: rgb(127, 127, 127);
                  transform-origin: 151.25px 24px;
                  word-break: break-word;
                  -webkit-text-fill-color: rgb(127, 127, 127);
                  -webkit-text-stroke-color: rgb(127, 127, 127);
                  block-size: 48px;
                  border-block-color: rgb(127, 127, 127);
                  border-color: rgb(127, 127, 127);
                  border-inline-color: rgb(127, 127, 127);
                  height: 48px;
                  inline-size: 302.5px;
                  width: 302.5px;
                "
              >
                Dragon Fruit, Granola, Blueberry, Raspberry, Strawberry, Chia Seeds, Hemp Seeds
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        data-elementor-type="loop-item"
        data-elementor-id="4252"
        class="elementor elementor-4252 swiper-slide e-loop-item e-loop-item-533 post-533 menu_item type-menu_item status-publish has-post-thumbnail hentry category-acai-bowls"
        data-elementor-post-type="elementor_library"
        role="group"
        aria-roledescription="slide"
        data-custom-edit-handle="1"
        aria-label="9 / 10"
        data-swiper-slide-index="8"
        style="
          flex-shrink: 0;
          list-style-type: none;
          perspective-origin: 151.25px 253.438px;
          position: relative;
          transform-origin: 151.25px 253.438px;
          transition-property: transform;
          block-size: 506.875px;
          inset: 0px;
          height: 506.875px;
          inline-size: 302.5px;
          inset-block: 0px;
          inset-inline: 0px;
          margin-inline-end: 20px;
          margin-right: 20px;
          min-block-size: auto;
          min-height: auto;
          min-inline-size: auto;
          min-width: auto;
          width: 302.5px;
        "
      >
        <div
          data-particle_enable="false"
          data-particle-mobile-disabled="false"
          class="elementor-element elementor-element-1f7adeb5 e-con-full e-flex e-con e-parent"
          data-id="1f7adeb5"
          data-element_type="container"
          style="
            gap: 0px;
            display: flex;
            flex-direction: column;
            list-style-type: none;
            perspective-origin: 151.25px 253.438px;
            position: relative;
            transform-origin: 151.25px 253.438px;
            transition: background 0.3s, border 0.3s, box-shadow 0.3s, transform 0.4s;
            word-break: break-word;
            block-size: 506.875px;
            inset: 0px;
            height: 506.875px;
            inline-size: 302.5px;
            inset-block: 0px;
            inset-inline: 0px;
            max-inline-size: 100%;
            max-width: 100%;
            width: 302.5px;
          "
        >
          <div
            class="elementor-element elementor-element-62a12117 elementor-widget elementor-widget-theme-post-featured-image elementor-widget-image"
            data-id="62a12117"
            data-element_type="widget"
            data-widget_type="theme-post-featured-image.default"
            style="
              gap: 0px;
              list-style-type: none;
              perspective-origin: 151.25px 151.25px;
              position: relative;
              text-align: center;
              transform-origin: 151.25px 151.25px;
              word-break: break-word;
              block-size: 302.5px;
              inset: 0px;
              height: 302.5px;
              inline-size: 302.5px;
              inset-block: 0px;
              inset-inline: 0px;
              max-inline-size: 100%;
              max-width: 100%;
              min-block-size: auto;
              min-height: auto;
              width: 302.5px;
            "
          >
            <div
              class="elementor-widget-container"
              style="list-style-type: none; perspective-origin: 151.25px 151.25px; text-align: center; transform-origin: 151.25px 151.25px; transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s, transform 0.4s; word-break: break-word; block-size: 302.5px; height: 302.5px; inline-size: 302.5px; width: 302.5px"
            >
              <img
                loading="lazy"
                decoding="async"
                width="410"
                height="410"
                src="/"
                class="attachment-medium_large size-medium_large wp-image-1546"
                alt=""
                srcset="/ 410w, / 300w, / 150w"
                sizes="(max-width: 410px) 100vw, 410px"
                style="display: inline-block; list-style-type: none; perspective-origin: 151.25px 151.25px; text-align: center; transform-origin: 151.25px 151.25px; vertical-align: middle; word-break: break-word; block-size: 302.5px; height: 302.5px; inline-size: 302.5px; width: 302.5px"
              />
            </div>
          </div>
          <div
            class="elementor-element elementor-element-66e5738b elementor-widget elementor-widget-theme-post-title elementor-page-title elementor-widget-heading"
            data-id="66e5738b"
            data-element_type="widget"
            data-widget_type="theme-post-title.default"
            style="
              gap: 0px;
              list-style-type: none;
              perspective-origin: 151.25px 34.1875px;
              position: relative;
              text-align: center;
              transform-origin: 151.25px 34.1914px;
              word-break: break-word;
              block-size: 68.375px;
              inset: 0px;
              height: 68.375px;
              inline-size: 302.5px;
              inset-block: 0px;
              inset-inline: 0px;
              max-inline-size: 100%;
              max-width: 100%;
              min-block-size: auto;
              min-height: auto;
              width: 302.5px;
            "
          >
            <div
              class="elementor-widget-container"
              style="
                list-style-type: none;
                perspective-origin: 151.25px 26.6875px;
                text-align: center;
                transform-origin: 151.25px 26.6953px;
                transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s, transform 0.4s;
                word-break: break-word;
                block-size: 53.3828px;
                height: 53.3828px;
                inline-size: 302.5px;
                margin-block: 10px 5px;
                margin-bottom: 5px;
                margin-top: 10px;
                width: 302.5px;
              "
            >
              <h2
                class="elementor-heading-title elementor-size-default"
                style="
                  caret-color: rgb(111, 36, 115);
                  color: rgb(111, 36, 115);
                  column-rule-color: rgb(111, 36, 115);
                  list-style-type: none;
                  outline-color: rgb(111, 36, 115);
                  perspective-origin: 151.25px 19.1875px;
                  text-align: center;
                  text-decoration: rgb(111, 36, 115);
                  text-emphasis-color: rgb(111, 36, 115);
                  transform-origin: 151.25px 19.1992px;
                  word-break: break-word;
                  -webkit-text-fill-color: rgb(111, 36, 115);
                  -webkit-text-stroke-color: rgb(111, 36, 115);
                  block-size: 38.3906px;
                  border-block-color: rgb(111, 36, 115);
                  border-color: rgb(111, 36, 115);
                  border-inline-color: rgb(111, 36, 115);
                  height: 38.3906px;
                  inline-size: 302.5px;
                  margin-block: 0px;
                  margin-bottom: 0px;
                  margin-top: 0px;
                  width: 302.5px;
                "
              >
                PB&amp;A
              </h2>
            </div>
          </div>
          <div
            class="elementor-element elementor-element-36107b0d elementor-widget elementor-widget-theme-post-content"
            data-id="36107b0d"
            data-element_type="widget"
            data-widget_type="theme-post-content.default"
            style="
              caret-color: rgb(127, 127, 127);
              color: rgb(127, 127, 127);
              gap: 0px;
              column-rule-color: rgb(127, 127, 127);
              font-style: italic;
              list-style-type: none;
              outline-color: rgb(127, 127, 127);
              perspective-origin: 151.25px 56px;
              position: relative;
              text-align: center;
              text-decoration: rgb(127, 127, 127);
              text-emphasis-color: rgb(127, 127, 127);
              transform-origin: 151.25px 56px;
              word-break: break-word;
              -webkit-text-fill-color: rgb(127, 127, 127);
              -webkit-text-stroke-color: rgb(127, 127, 127);
              block-size: 112px;
              border-block-color: rgb(127, 127, 127);
              border-color: rgb(127, 127, 127);
              border-inline-color: rgb(127, 127, 127);
              inset: 0px;
              height: 112px;
              inline-size: 302.5px;
              inset-block: 0px;
              inset-inline: 0px;
              max-inline-size: 100%;
              max-width: 100%;
              min-block-size: auto;
              min-height: auto;
              width: 302.5px;
            "
          >
            <div
              class="elementor-widget-container"
              style="
                caret-color: rgb(127, 127, 127);
                color: rgb(127, 127, 127);
                column-rule-color: rgb(127, 127, 127);
                font-style: italic;
                list-style-type: none;
                outline-color: rgb(127, 127, 127);
                perspective-origin: 151.25px 56px;
                text-align: center;
                text-decoration: rgb(127, 127, 127);
                text-emphasis-color: rgb(127, 127, 127);
                transform-origin: 151.25px 56px;
                transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s, transform 0.4s;
                word-break: break-word;
                -webkit-text-fill-color: rgb(127, 127, 127);
                -webkit-text-stroke-color: rgb(127, 127, 127);
                block-size: 112px;
                border-block-color: rgb(127, 127, 127);
                border-color: rgb(127, 127, 127);
                border-inline-color: rgb(127, 127, 127);
                height: 112px;
                inline-size: 302.5px;
                width: 302.5px;
              "
            >
              <p
                style="
                  caret-color: rgb(127, 127, 127);
                  color: rgb(127, 127, 127);
                  column-rule-color: rgb(127, 127, 127);
                  font-style: italic;
                  list-style-type: none;
                  outline-color: rgb(127, 127, 127);
                  perspective-origin: 151.25px 24px;
                  text-align: center;
                  text-decoration: rgb(127, 127, 127);
                  text-emphasis-color: rgb(127, 127, 127);
                  transform-origin: 151.25px 24px;
                  word-break: break-word;
                  -webkit-text-fill-color: rgb(127, 127, 127);
                  -webkit-text-stroke-color: rgb(127, 127, 127);
                  block-size: 48px;
                  border-block-color: rgb(127, 127, 127);
                  border-color: rgb(127, 127, 127);
                  border-inline-color: rgb(127, 127, 127);
                  height: 48px;
                  inline-size: 302.5px;
                  width: 302.5px;
                "
              >
                Acai, Granola, Peanut Butter, Banana, Strawberry
              </p>
              <p
                style="
                  caret-color: rgb(127, 127, 127);
                  color: rgb(127, 127, 127);
                  column-rule-color: rgb(127, 127, 127);
                  font-style: italic;
                  list-style-type: none;
                  outline-color: rgb(127, 127, 127);
                  perspective-origin: 151.25px 12px;
                  text-align: center;
                  text-decoration: rgb(127, 127, 127);
                  text-emphasis-color: rgb(127, 127, 127);
                  transform-origin: 151.25px 12px;
                  word-break: break-word;
                  -webkit-text-fill-color: rgb(127, 127, 127);
                  -webkit-text-stroke-color: rgb(127, 127, 127);
                  block-size: 24px;
                  border-block-color: rgb(127, 127, 127);
                  border-color: rgb(127, 127, 127);
                  border-inline-color: rgb(127, 127, 127);
                  height: 24px;
                  inline-size: 302.5px;
                  width: 302.5px;
                "
              >
                &nbsp;
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        data-elementor-type="loop-item"
        data-elementor-id="4252"
        class="elementor elementor-4252 swiper-slide e-loop-item e-loop-item-519 post-519 menu_item type-menu_item status-publish has-post-thumbnail hentry category-acai-bowls swiper-slide-duplicate-prev"
        data-elementor-post-type="elementor_library"
        role="group"
        aria-roledescription="slide"
        data-custom-edit-handle="1"
        aria-label="10 / 10"
        data-swiper-slide-index="9"
        style="
          flex-shrink: 0;
          list-style-type: none;
          perspective-origin: 151.25px 253.438px;
          position: relative;
          transform-origin: 151.25px 253.438px;
          transition-property: transform;
          block-size: 506.875px;
          inset: 0px;
          height: 506.875px;
          inline-size: 302.5px;
          inset-block: 0px;
          inset-inline: 0px;
          margin-inline-end: 20px;
          margin-right: 20px;
          min-block-size: auto;
          min-height: auto;
          min-inline-size: auto;
          min-width: auto;
          width: 302.5px;
        "
      >
        <div
          data-particle_enable="false"
          data-particle-mobile-disabled="false"
          class="elementor-element elementor-element-1f7adeb5 e-con-full e-flex e-con e-parent"
          data-id="1f7adeb5"
          data-element_type="container"
          style="
            gap: 0px;
            display: flex;
            flex-direction: column;
            list-style-type: none;
            perspective-origin: 151.25px 253.438px;
            position: relative;
            transform-origin: 151.25px 253.438px;
            transition: background 0.3s, border 0.3s, box-shadow 0.3s, transform 0.4s;
            word-break: break-word;
            block-size: 506.875px;
            inset: 0px;
            height: 506.875px;
            inline-size: 302.5px;
            inset-block: 0px;
            inset-inline: 0px;
            max-inline-size: 100%;
            max-width: 100%;
            width: 302.5px;
          "
        >
          <div
            class="elementor-element elementor-element-62a12117 elementor-widget elementor-widget-theme-post-featured-image elementor-widget-image"
            data-id="62a12117"
            data-element_type="widget"
            data-widget_type="theme-post-featured-image.default"
            style="
              gap: 0px;
              list-style-type: none;
              perspective-origin: 151.25px 151.25px;
              position: relative;
              text-align: center;
              transform-origin: 151.25px 151.25px;
              word-break: break-word;
              block-size: 302.5px;
              inset: 0px;
              height: 302.5px;
              inline-size: 302.5px;
              inset-block: 0px;
              inset-inline: 0px;
              max-inline-size: 100%;
              max-width: 100%;
              min-block-size: auto;
              min-height: auto;
              width: 302.5px;
            "
          >
            <div
              class="elementor-widget-container"
              style="list-style-type: none; perspective-origin: 151.25px 151.25px; text-align: center; transform-origin: 151.25px 151.25px; transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s, transform 0.4s; word-break: break-word; block-size: 302.5px; height: 302.5px; inline-size: 302.5px; width: 302.5px"
            >
              <img
                loading="lazy"
                decoding="async"
                width="410"
                height="410"
                src="/"
                class="attachment-medium_large size-medium_large wp-image-2202"
                alt=""
                srcset="/ 410w, / 300w, / 150w"
                sizes="(max-width: 410px) 100vw, 410px"
                style="display: inline-block; list-style-type: none; perspective-origin: 151.25px 151.25px; text-align: center; transform-origin: 151.25px 151.25px; vertical-align: middle; word-break: break-word; block-size: 302.5px; height: 302.5px; inline-size: 302.5px; width: 302.5px"
              />
            </div>
          </div>
          <div
            class="elementor-element elementor-element-66e5738b elementor-widget elementor-widget-theme-post-title elementor-page-title elementor-widget-heading"
            data-id="66e5738b"
            data-element_type="widget"
            data-widget_type="theme-post-title.default"
            style="
              gap: 0px;
              list-style-type: none;
              perspective-origin: 151.25px 34.1875px;
              position: relative;
              text-align: center;
              transform-origin: 151.25px 34.1914px;
              word-break: break-word;
              block-size: 68.375px;
              inset: 0px;
              height: 68.375px;
              inline-size: 302.5px;
              inset-block: 0px;
              inset-inline: 0px;
              max-inline-size: 100%;
              max-width: 100%;
              min-block-size: auto;
              min-height: auto;
              width: 302.5px;
            "
          >
            <div
              class="elementor-widget-container"
              style="
                list-style-type: none;
                perspective-origin: 151.25px 26.6875px;
                text-align: center;
                transform-origin: 151.25px 26.6953px;
                transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s, transform 0.4s;
                word-break: break-word;
                block-size: 53.3828px;
                height: 53.3828px;
                inline-size: 302.5px;
                margin-block: 10px 5px;
                margin-bottom: 5px;
                margin-top: 10px;
                width: 302.5px;
              "
            >
              <h2
                class="elementor-heading-title elementor-size-default"
                style="
                  caret-color: rgb(111, 36, 115);
                  color: rgb(111, 36, 115);
                  column-rule-color: rgb(111, 36, 115);
                  list-style-type: none;
                  outline-color: rgb(111, 36, 115);
                  perspective-origin: 151.25px 19.1875px;
                  text-align: center;
                  text-decoration: rgb(111, 36, 115);
                  text-emphasis-color: rgb(111, 36, 115);
                  transform-origin: 151.25px 19.1992px;
                  word-break: break-word;
                  -webkit-text-fill-color: rgb(111, 36, 115);
                  -webkit-text-stroke-color: rgb(111, 36, 115);
                  block-size: 38.3906px;
                  border-block-color: rgb(111, 36, 115);
                  border-color: rgb(111, 36, 115);
                  border-inline-color: rgb(111, 36, 115);
                  height: 38.3906px;
                  inline-size: 302.5px;
                  margin-block: 0px;
                  margin-bottom: 0px;
                  margin-top: 0px;
                  width: 302.5px;
                "
              >
                V.O.T.
              </h2>
            </div>
          </div>
          <div
            class="elementor-element elementor-element-36107b0d elementor-widget elementor-widget-theme-post-content"
            data-id="36107b0d"
            data-element_type="widget"
            data-widget_type="theme-post-content.default"
            style="
              caret-color: rgb(127, 127, 127);
              color: rgb(127, 127, 127);
              gap: 0px;
              column-rule-color: rgb(127, 127, 127);
              font-style: italic;
              list-style-type: none;
              outline-color: rgb(127, 127, 127);
              perspective-origin: 151.25px 34px;
              position: relative;
              text-align: center;
              text-decoration: rgb(127, 127, 127);
              text-emphasis-color: rgb(127, 127, 127);
              transform-origin: 151.25px 34px;
              word-break: break-word;
              -webkit-text-fill-color: rgb(127, 127, 127);
              -webkit-text-stroke-color: rgb(127, 127, 127);
              block-size: 68px;
              border-block-color: rgb(127, 127, 127);
              border-color: rgb(127, 127, 127);
              border-inline-color: rgb(127, 127, 127);
              inset: 0px;
              height: 68px;
              inline-size: 302.5px;
              inset-block: 0px;
              inset-inline: 0px;
              max-inline-size: 100%;
              max-width: 100%;
              min-block-size: auto;
              min-height: auto;
              width: 302.5px;
            "
          >
            <div
              class="elementor-widget-container"
              style="
                caret-color: rgb(127, 127, 127);
                color: rgb(127, 127, 127);
                column-rule-color: rgb(127, 127, 127);
                font-style: italic;
                list-style-type: none;
                outline-color: rgb(127, 127, 127);
                perspective-origin: 151.25px 34px;
                text-align: center;
                text-decoration: rgb(127, 127, 127);
                text-emphasis-color: rgb(127, 127, 127);
                transform-origin: 151.25px 34px;
                transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s, transform 0.4s;
                word-break: break-word;
                -webkit-text-fill-color: rgb(127, 127, 127);
                -webkit-text-stroke-color: rgb(127, 127, 127);
                block-size: 68px;
                border-block-color: rgb(127, 127, 127);
                border-color: rgb(127, 127, 127);
                border-inline-color: rgb(127, 127, 127);
                height: 68px;
                inline-size: 302.5px;
                width: 302.5px;
              "
            >
              <p
                style="
                  caret-color: rgb(127, 127, 127);
                  color: rgb(127, 127, 127);
                  column-rule-color: rgb(127, 127, 127);
                  font-style: italic;
                  list-style-type: none;
                  outline-color: rgb(127, 127, 127);
                  perspective-origin: 151.25px 24px;
                  text-align: center;
                  text-decoration: rgb(127, 127, 127);
                  text-emphasis-color: rgb(127, 127, 127);
                  transform-origin: 151.25px 24px;
                  word-break: break-word;
                  -webkit-text-fill-color: rgb(127, 127, 127);
                  -webkit-text-stroke-color: rgb(127, 127, 127);
                  block-size: 48px;
                  border-block-color: rgb(127, 127, 127);
                  border-color: rgb(127, 127, 127);
                  border-inline-color: rgb(127, 127, 127);
                  height: 48px;
                  inline-size: 302.5px;
                  width: 302.5px;
                "
              >
                Acai, Granola, Raspberry, Mango, Kiwi, Hemp Seeds, Coconut Shavings
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        data-elementor-type="loop-item"
        data-elementor-id="4252"
        class="elementor elementor-4252 swiper-slide e-loop-item e-loop-item-4275 post-4275 menu_item type-menu_item status-publish has-post-thumbnail hentry category-acai-bowls swiper-slide-duplicate swiper-slide-duplicate-active"
        data-elementor-post-type="elementor_library"
        role="group"
        aria-roledescription="slide"
        data-custom-edit-handle="1"
        aria-label="1 / 10"
        data-swiper-slide-index="0"
        style="
          flex-shrink: 0;
          list-style-type: none;
          perspective-origin: 151.25px 253.438px;
          position: relative;
          transform-origin: 151.25px 253.438px;
          transition-property: transform;
          block-size: 506.875px;
          inset: 0px;
          height: 506.875px;
          inline-size: 302.5px;
          inset-block: 0px;
          inset-inline: 0px;
          margin-inline-end: 20px;
          margin-right: 20px;
          min-block-size: auto;
          min-height: auto;
          min-inline-size: auto;
          min-width: auto;
          width: 302.5px;
        "
      >
        <div
          data-particle_enable="false"
          data-particle-mobile-disabled="false"
          class="elementor-element elementor-element-1f7adeb5 e-con-full e-flex e-con e-parent"
          data-id="1f7adeb5"
          data-element_type="container"
          style="
            gap: 0px;
            display: flex;
            flex-direction: column;
            list-style-type: none;
            perspective-origin: 151.25px 253.438px;
            position: relative;
            transform-origin: 151.25px 253.438px;
            transition: background 0.3s, border 0.3s, box-shadow 0.3s, transform 0.4s;
            word-break: break-word;
            block-size: 506.875px;
            inset: 0px;
            height: 506.875px;
            inline-size: 302.5px;
            inset-block: 0px;
            inset-inline: 0px;
            max-inline-size: 100%;
            max-width: 100%;
            width: 302.5px;
          "
        >
          <div
            class="elementor-element elementor-element-62a12117 elementor-widget elementor-widget-theme-post-featured-image elementor-widget-image"
            data-id="62a12117"
            data-element_type="widget"
            data-widget_type="theme-post-featured-image.default"
            style="
              gap: 0px;
              list-style-type: none;
              perspective-origin: 151.25px 151.25px;
              position: relative;
              text-align: center;
              transform-origin: 151.25px 151.25px;
              word-break: break-word;
              block-size: 302.5px;
              inset: 0px;
              height: 302.5px;
              inline-size: 302.5px;
              inset-block: 0px;
              inset-inline: 0px;
              max-inline-size: 100%;
              max-width: 100%;
              min-block-size: auto;
              min-height: auto;
              width: 302.5px;
            "
          >
            <div
              class="elementor-widget-container"
              style="list-style-type: none; perspective-origin: 151.25px 151.25px; text-align: center; transform-origin: 151.25px 151.25px; transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s, transform 0.4s; word-break: break-word; block-size: 302.5px; height: 302.5px; inline-size: 302.5px; width: 302.5px"
            >
              <img
                loading="lazy"
                decoding="async"
                width="410"
                height="410"
                src="/"
                class="attachment-medium_large size-medium_large wp-image-4259"
                alt=""
                srcset="/ 410w, / 300w, / 150w, / 400w"
                sizes="(max-width: 410px) 100vw, 410px"
                style="display: inline-block; list-style-type: none; perspective-origin: 151.25px 151.25px; text-align: center; transform-origin: 151.25px 151.25px; vertical-align: middle; word-break: break-word; block-size: 302.5px; height: 302.5px; inline-size: 302.5px; width: 302.5px"
              />
            </div>
          </div>
          <div
            class="elementor-element elementor-element-66e5738b elementor-widget elementor-widget-theme-post-title elementor-page-title elementor-widget-heading"
            data-id="66e5738b"
            data-element_type="widget"
            data-widget_type="theme-post-title.default"
            style="
              gap: 0px;
              list-style-type: none;
              perspective-origin: 151.25px 34.1875px;
              position: relative;
              text-align: center;
              transform-origin: 151.25px 34.1914px;
              word-break: break-word;
              block-size: 68.375px;
              inset: 0px;
              height: 68.375px;
              inline-size: 302.5px;
              inset-block: 0px;
              inset-inline: 0px;
              max-inline-size: 100%;
              max-width: 100%;
              min-block-size: auto;
              min-height: auto;
              width: 302.5px;
            "
          >
            <div
              class="elementor-widget-container"
              style="
                list-style-type: none;
                perspective-origin: 151.25px 26.6875px;
                text-align: center;
                transform-origin: 151.25px 26.6953px;
                transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s, transform 0.4s;
                word-break: break-word;
                block-size: 53.3828px;
                height: 53.3828px;
                inline-size: 302.5px;
                margin-block: 10px 5px;
                margin-bottom: 5px;
                margin-top: 10px;
                width: 302.5px;
              "
            >
              <h2
                class="elementor-heading-title elementor-size-default"
                style="
                  caret-color: rgb(111, 36, 115);
                  color: rgb(111, 36, 115);
                  column-rule-color: rgb(111, 36, 115);
                  list-style-type: none;
                  outline-color: rgb(111, 36, 115);
                  perspective-origin: 151.25px 19.1875px;
                  text-align: center;
                  text-decoration: rgb(111, 36, 115);
                  text-emphasis-color: rgb(111, 36, 115);
                  transform-origin: 151.25px 19.1992px;
                  word-break: break-word;
                  -webkit-text-fill-color: rgb(111, 36, 115);
                  -webkit-text-stroke-color: rgb(111, 36, 115);
                  block-size: 38.3906px;
                  border-block-color: rgb(111, 36, 115);
                  border-color: rgb(111, 36, 115);
                  border-inline-color: rgb(111, 36, 115);
                  height: 38.3906px;
                  inline-size: 302.5px;
                  margin-block: 0px;
                  margin-bottom: 0px;
                  margin-top: 0px;
                  width: 302.5px;
                "
              >
                Coco Breeze
              </h2>
            </div>
          </div>
          <div
            class="elementor-element elementor-element-36107b0d elementor-widget elementor-widget-theme-post-content"
            data-id="36107b0d"
            data-element_type="widget"
            data-widget_type="theme-post-content.default"
            style="
              caret-color: rgb(127, 127, 127);
              color: rgb(127, 127, 127);
              gap: 0px;
              column-rule-color: rgb(127, 127, 127);
              font-style: italic;
              list-style-type: none;
              outline-color: rgb(127, 127, 127);
              perspective-origin: 151.25px 56.75px;
              position: relative;
              text-align: center;
              text-decoration: rgb(127, 127, 127);
              text-emphasis-color: rgb(127, 127, 127);
              transform-origin: 151.25px 56.75px;
              word-break: break-word;
              -webkit-text-fill-color: rgb(127, 127, 127);
              -webkit-text-stroke-color: rgb(127, 127, 127);
              block-size: 113.5px;
              border-block-color: rgb(127, 127, 127);
              border-color: rgb(127, 127, 127);
              border-inline-color: rgb(127, 127, 127);
              inset: 0px;
              height: 113.5px;
              inline-size: 302.5px;
              inset-block: 0px;
              inset-inline: 0px;
              max-inline-size: 100%;
              max-width: 100%;
              min-block-size: auto;
              min-height: auto;
              width: 302.5px;
            "
          >
            <div
              class="elementor-widget-container"
              style="
                caret-color: rgb(127, 127, 127);
                color: rgb(127, 127, 127);
                column-rule-color: rgb(127, 127, 127);
                font-style: italic;
                list-style-type: none;
                outline-color: rgb(127, 127, 127);
                perspective-origin: 151.25px 56.75px;
                text-align: center;
                text-decoration: rgb(127, 127, 127);
                text-emphasis-color: rgb(127, 127, 127);
                transform-origin: 151.25px 56.75px;
                transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s, transform 0.4s;
                word-break: break-word;
                -webkit-text-fill-color: rgb(127, 127, 127);
                -webkit-text-stroke-color: rgb(127, 127, 127);
                block-size: 113.5px;
                border-block-color: rgb(127, 127, 127);
                border-color: rgb(127, 127, 127);
                border-inline-color: rgb(127, 127, 127);
                height: 113.5px;
                inline-size: 302.5px;
                width: 302.5px;
              "
            >
              <p
                style="
                  caret-color: rgb(127, 127, 127);
                  color: rgb(127, 127, 127);
                  column-rule-color: rgb(127, 127, 127);
                  font-style: italic;
                  list-style-type: none;
                  outline-color: rgb(127, 127, 127);
                  perspective-origin: 151.25px 24px;
                  text-align: center;
                  text-decoration: rgb(127, 127, 127);
                  text-emphasis-color: rgb(127, 127, 127);
                  transform-origin: 151.25px 24px;
                  word-break: break-word;
                  -webkit-text-fill-color: rgb(127, 127, 127);
                  -webkit-text-stroke-color: rgb(127, 127, 127);
                  block-size: 48px;
                  border-block-color: rgb(127, 127, 127);
                  border-color: rgb(127, 127, 127);
                  border-inline-color: rgb(127, 127, 127);
                  height: 48px;
                  inline-size: 302.5px;
                  width: 302.5px;
                "
              >
                Coconut Sorbet, Granola, Nutella, Strawberry, Mango, Coconut Flakes
              </p>
              <p
                style="
                  caret-color: rgb(127, 127, 127);
                  color: rgb(127, 127, 127);
                  column-rule-color: rgb(127, 127, 127);
                  font-style: italic;
                  list-style-type: none;
                  outline-color: rgb(127, 127, 127);
                  perspective-origin: 151.25px 12.75px;
                  text-align: center;
                  text-decoration: rgb(127, 127, 127);
                  text-emphasis-color: rgb(127, 127, 127);
                  transform-origin: 151.25px 12.75px;
                  word-break: break-word;
                  -webkit-text-fill-color: rgb(127, 127, 127);
                  -webkit-text-stroke-color: rgb(127, 127, 127);
                  block-size: 25.5px;
                  border-block-color: rgb(127, 127, 127);
                  border-color: rgb(127, 127, 127);
                  border-inline-color: rgb(127, 127, 127);
                  height: 25.5px;
                  inline-size: 302.5px;
                  width: 302.5px;
                "
              >
                <em
                  style="
                    font-size: 12px;
                    caret-color: rgb(127, 127, 127);
                    color: rgb(127, 127, 127);
                    column-rule-color: rgb(127, 127, 127);
                    list-style-type: none;
                    outline-color: rgb(127, 127, 127);
                    text-align: center;
                    text-decoration: rgb(127, 127, 127);
                    text-emphasis-color: rgb(127, 127, 127);
                    word-break: break-word;
                    -webkit-text-fill-color: rgb(127, 127, 127);
                    -webkit-text-stroke-color: rgb(127, 127, 127);
                    border-block-color: rgb(127, 127, 127);
                    border-color: rgb(127, 127, 127);
                    border-inline-color: rgb(127, 127, 127);
                  "
                  >*Available at Florida Locations.</em
                >
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        data-elementor-type="loop-item"
        data-elementor-id="4252"
        class="elementor elementor-4252 swiper-slide e-loop-item e-loop-item-4276 post-4276 menu_item type-menu_item status-publish has-post-thumbnail hentry category-acai-bowls swiper-slide-duplicate swiper-slide-duplicate-next"
        data-elementor-post-type="elementor_library"
        role="group"
        aria-roledescription="slide"
        data-custom-edit-handle="1"
        aria-label="2 / 10"
        data-swiper-slide-index="1"
        style="
          flex-shrink: 0;
          list-style-type: none;
          perspective-origin: 151.25px 253.438px;
          position: relative;
          transform-origin: 151.25px 253.438px;
          transition-property: transform;
          block-size: 506.875px;
          inset: 0px;
          height: 506.875px;
          inline-size: 302.5px;
          inset-block: 0px;
          inset-inline: 0px;
          margin-inline-end: 20px;
          margin-right: 20px;
          min-block-size: auto;
          min-height: auto;
          min-inline-size: auto;
          min-width: auto;
          width: 302.5px;
        "
      >
        <div
          data-particle_enable="false"
          data-particle-mobile-disabled="false"
          class="elementor-element elementor-element-1f7adeb5 e-con-full e-flex e-con e-parent"
          data-id="1f7adeb5"
          data-element_type="container"
          style="
            gap: 0px;
            display: flex;
            flex-direction: column;
            list-style-type: none;
            perspective-origin: 151.25px 253.438px;
            position: relative;
            transform-origin: 151.25px 253.438px;
            transition: background 0.3s, border 0.3s, box-shadow 0.3s, transform 0.4s;
            word-break: break-word;
            block-size: 506.875px;
            inset: 0px;
            height: 506.875px;
            inline-size: 302.5px;
            inset-block: 0px;
            inset-inline: 0px;
            max-inline-size: 100%;
            max-width: 100%;
            width: 302.5px;
          "
        >
          <div
            class="elementor-element elementor-element-62a12117 elementor-widget elementor-widget-theme-post-featured-image elementor-widget-image"
            data-id="62a12117"
            data-element_type="widget"
            data-widget_type="theme-post-featured-image.default"
            style="
              gap: 0px;
              list-style-type: none;
              perspective-origin: 151.25px 151.25px;
              position: relative;
              text-align: center;
              transform-origin: 151.25px 151.25px;
              word-break: break-word;
              block-size: 302.5px;
              inset: 0px;
              height: 302.5px;
              inline-size: 302.5px;
              inset-block: 0px;
              inset-inline: 0px;
              max-inline-size: 100%;
              max-width: 100%;
              min-block-size: auto;
              min-height: auto;
              width: 302.5px;
            "
          >
            <div
              class="elementor-widget-container"
              style="list-style-type: none; perspective-origin: 151.25px 151.25px; text-align: center; transform-origin: 151.25px 151.25px; transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s, transform 0.4s; word-break: break-word; block-size: 302.5px; height: 302.5px; inline-size: 302.5px; width: 302.5px"
            >
              <img
                loading="lazy"
                decoding="async"
                width="410"
                height="410"
                src="/"
                class="attachment-medium_large size-medium_large wp-image-4260"
                alt=""
                srcset="/ 410w, / 300w, / 150w, / 400w"
                sizes="(max-width: 410px) 100vw, 410px"
                style="display: inline-block; list-style-type: none; perspective-origin: 151.25px 151.25px; text-align: center; transform-origin: 151.25px 151.25px; vertical-align: middle; word-break: break-word; block-size: 302.5px; height: 302.5px; inline-size: 302.5px; width: 302.5px"
              />
            </div>
          </div>
          <div
            class="elementor-element elementor-element-66e5738b elementor-widget elementor-widget-theme-post-title elementor-page-title elementor-widget-heading"
            data-id="66e5738b"
            data-element_type="widget"
            data-widget_type="theme-post-title.default"
            style="
              gap: 0px;
              list-style-type: none;
              perspective-origin: 151.25px 34.1875px;
              position: relative;
              text-align: center;
              transform-origin: 151.25px 34.1914px;
              word-break: break-word;
              block-size: 68.375px;
              inset: 0px;
              height: 68.375px;
              inline-size: 302.5px;
              inset-block: 0px;
              inset-inline: 0px;
              max-inline-size: 100%;
              max-width: 100%;
              min-block-size: auto;
              min-height: auto;
              width: 302.5px;
            "
          >
            <div
              class="elementor-widget-container"
              style="
                list-style-type: none;
                perspective-origin: 151.25px 26.6875px;
                text-align: center;
                transform-origin: 151.25px 26.6953px;
                transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s, transform 0.4s;
                word-break: break-word;
                block-size: 53.3828px;
                height: 53.3828px;
                inline-size: 302.5px;
                margin-block: 10px 5px;
                margin-bottom: 5px;
                margin-top: 10px;
                width: 302.5px;
              "
            >
              <h2
                class="elementor-heading-title elementor-size-default"
                style="
                  caret-color: rgb(111, 36, 115);
                  color: rgb(111, 36, 115);
                  column-rule-color: rgb(111, 36, 115);
                  list-style-type: none;
                  outline-color: rgb(111, 36, 115);
                  perspective-origin: 151.25px 19.1875px;
                  text-align: center;
                  text-decoration: rgb(111, 36, 115);
                  text-emphasis-color: rgb(111, 36, 115);
                  transform-origin: 151.25px 19.1992px;
                  word-break: break-word;
                  -webkit-text-fill-color: rgb(111, 36, 115);
                  -webkit-text-stroke-color: rgb(111, 36, 115);
                  block-size: 38.3906px;
                  border-block-color: rgb(111, 36, 115);
                  border-color: rgb(111, 36, 115);
                  border-inline-color: rgb(111, 36, 115);
                  height: 38.3906px;
                  inline-size: 302.5px;
                  margin-block: 0px;
                  margin-bottom: 0px;
                  margin-top: 0px;
                  width: 302.5px;
                "
              >
                Nutella Crunch
              </h2>
            </div>
          </div>
          <div
            class="elementor-element elementor-element-36107b0d elementor-widget elementor-widget-theme-post-content"
            data-id="36107b0d"
            data-element_type="widget"
            data-widget_type="theme-post-content.default"
            style="
              caret-color: rgb(127, 127, 127);
              color: rgb(127, 127, 127);
              gap: 0px;
              column-rule-color: rgb(127, 127, 127);
              font-style: italic;
              list-style-type: none;
              outline-color: rgb(127, 127, 127);
              perspective-origin: 151.25px 34px;
              position: relative;
              text-align: center;
              text-decoration: rgb(127, 127, 127);
              text-emphasis-color: rgb(127, 127, 127);
              transform-origin: 151.25px 34px;
              word-break: break-word;
              -webkit-text-fill-color: rgb(127, 127, 127);
              -webkit-text-stroke-color: rgb(127, 127, 127);
              block-size: 68px;
              border-block-color: rgb(127, 127, 127);
              border-color: rgb(127, 127, 127);
              border-inline-color: rgb(127, 127, 127);
              inset: 0px;
              height: 68px;
              inline-size: 302.5px;
              inset-block: 0px;
              inset-inline: 0px;
              max-inline-size: 100%;
              max-width: 100%;
              min-block-size: auto;
              min-height: auto;
              width: 302.5px;
            "
          >
            <div
              class="elementor-widget-container"
              style="
                caret-color: rgb(127, 127, 127);
                color: rgb(127, 127, 127);
                column-rule-color: rgb(127, 127, 127);
                font-style: italic;
                list-style-type: none;
                outline-color: rgb(127, 127, 127);
                perspective-origin: 151.25px 34px;
                text-align: center;
                text-decoration: rgb(127, 127, 127);
                text-emphasis-color: rgb(127, 127, 127);
                transform-origin: 151.25px 34px;
                transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s, transform 0.4s;
                word-break: break-word;
                -webkit-text-fill-color: rgb(127, 127, 127);
                -webkit-text-stroke-color: rgb(127, 127, 127);
                block-size: 68px;
                border-block-color: rgb(127, 127, 127);
                border-color: rgb(127, 127, 127);
                border-inline-color: rgb(127, 127, 127);
                height: 68px;
                inline-size: 302.5px;
                width: 302.5px;
              "
            >
              <p
                style="
                  caret-color: rgb(127, 127, 127);
                  color: rgb(127, 127, 127);
                  column-rule-color: rgb(127, 127, 127);
                  font-style: italic;
                  list-style-type: none;
                  outline-color: rgb(127, 127, 127);
                  perspective-origin: 151.25px 24px;
                  text-align: center;
                  text-decoration: rgb(127, 127, 127);
                  text-emphasis-color: rgb(127, 127, 127);
                  transform-origin: 151.25px 24px;
                  word-break: break-word;
                  -webkit-text-fill-color: rgb(127, 127, 127);
                  -webkit-text-stroke-color: rgb(127, 127, 127);
                  block-size: 48px;
                  border-block-color: rgb(127, 127, 127);
                  border-color: rgb(127, 127, 127);
                  border-inline-color: rgb(127, 127, 127);
                  height: 48px;
                  inline-size: 302.5px;
                  width: 302.5px;
                "
              >
                Acai, Granola, Nutella, Banana, Strawberry, Chocolate Covered Almonds
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        data-elementor-type="loop-item"
        data-elementor-id="4252"
        class="elementor elementor-4252 swiper-slide e-loop-item e-loop-item-513 post-513 menu_item type-menu_item status-publish has-post-thumbnail hentry category-acai-bowls swiper-slide-duplicate"
        data-elementor-post-type="elementor_library"
        role="group"
        aria-roledescription="slide"
        data-custom-edit-handle="1"
        aria-label="3 / 10"
        data-swiper-slide-index="2"
        style="
          flex-shrink: 0;
          list-style-type: none;
          perspective-origin: 151.25px 253.438px;
          position: relative;
          transform-origin: 151.25px 253.438px;
          transition-property: transform;
          block-size: 506.875px;
          inset: 0px;
          height: 506.875px;
          inline-size: 302.5px;
          inset-block: 0px;
          inset-inline: 0px;
          margin-inline-end: 20px;
          margin-right: 20px;
          min-block-size: auto;
          min-height: auto;
          min-inline-size: auto;
          min-width: auto;
          width: 302.5px;
        "
      >
        <div
          data-particle_enable="false"
          data-particle-mobile-disabled="false"
          class="elementor-element elementor-element-1f7adeb5 e-con-full e-flex e-con e-parent"
          data-id="1f7adeb5"
          data-element_type="container"
          style="
            gap: 0px;
            display: flex;
            flex-direction: column;
            list-style-type: none;
            perspective-origin: 151.25px 253.438px;
            position: relative;
            transform-origin: 151.25px 253.438px;
            transition: background 0.3s, border 0.3s, box-shadow 0.3s, transform 0.4s;
            word-break: break-word;
            block-size: 506.875px;
            inset: 0px;
            height: 506.875px;
            inline-size: 302.5px;
            inset-block: 0px;
            inset-inline: 0px;
            max-inline-size: 100%;
            max-width: 100%;
            width: 302.5px;
          "
        >
          <div
            class="elementor-element elementor-element-62a12117 elementor-widget elementor-widget-theme-post-featured-image elementor-widget-image"
            data-id="62a12117"
            data-element_type="widget"
            data-widget_type="theme-post-featured-image.default"
            style="
              gap: 0px;
              list-style-type: none;
              perspective-origin: 151.25px 151.25px;
              position: relative;
              text-align: center;
              transform-origin: 151.25px 151.25px;
              word-break: break-word;
              block-size: 302.5px;
              inset: 0px;
              height: 302.5px;
              inline-size: 302.5px;
              inset-block: 0px;
              inset-inline: 0px;
              max-inline-size: 100%;
              max-width: 100%;
              min-block-size: auto;
              min-height: auto;
              width: 302.5px;
            "
          >
            <div
              class="elementor-widget-container"
              style="list-style-type: none; perspective-origin: 151.25px 151.25px; text-align: center; transform-origin: 151.25px 151.25px; transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s, transform 0.4s; word-break: break-word; block-size: 302.5px; height: 302.5px; inline-size: 302.5px; width: 302.5px"
            >
              <img
                loading="lazy"
                decoding="async"
                width="410"
                height="410"
                src="/"
                class="attachment-medium_large size-medium_large wp-image-1631"
                alt=""
                srcset="/ 410w, / 300w, / 150w"
                sizes="(max-width: 410px) 100vw, 410px"
                style="display: inline-block; list-style-type: none; perspective-origin: 151.25px 151.25px; text-align: center; transform-origin: 151.25px 151.25px; vertical-align: middle; word-break: break-word; block-size: 302.5px; height: 302.5px; inline-size: 302.5px; width: 302.5px"
              />
            </div>
          </div>
          <div
            class="elementor-element elementor-element-66e5738b elementor-widget elementor-widget-theme-post-title elementor-page-title elementor-widget-heading"
            data-id="66e5738b"
            data-element_type="widget"
            data-widget_type="theme-post-title.default"
            style="
              gap: 0px;
              list-style-type: none;
              perspective-origin: 151.25px 34.1875px;
              position: relative;
              text-align: center;
              transform-origin: 151.25px 34.1914px;
              word-break: break-word;
              block-size: 68.375px;
              inset: 0px;
              height: 68.375px;
              inline-size: 302.5px;
              inset-block: 0px;
              inset-inline: 0px;
              max-inline-size: 100%;
              max-width: 100%;
              min-block-size: auto;
              min-height: auto;
              width: 302.5px;
            "
          >
            <div
              class="elementor-widget-container"
              style="
                list-style-type: none;
                perspective-origin: 151.25px 26.6875px;
                text-align: center;
                transform-origin: 151.25px 26.6953px;
                transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s, transform 0.4s;
                word-break: break-word;
                block-size: 53.3828px;
                height: 53.3828px;
                inline-size: 302.5px;
                margin-block: 10px 5px;
                margin-bottom: 5px;
                margin-top: 10px;
                width: 302.5px;
              "
            >
              <h2
                class="elementor-heading-title elementor-size-default"
                style="
                  caret-color: rgb(111, 36, 115);
                  color: rgb(111, 36, 115);
                  column-rule-color: rgb(111, 36, 115);
                  list-style-type: none;
                  outline-color: rgb(111, 36, 115);
                  perspective-origin: 151.25px 19.1875px;
                  text-align: center;
                  text-decoration: rgb(111, 36, 115);
                  text-emphasis-color: rgb(111, 36, 115);
                  transform-origin: 151.25px 19.1992px;
                  word-break: break-word;
                  -webkit-text-fill-color: rgb(111, 36, 115);
                  -webkit-text-stroke-color: rgb(111, 36, 115);
                  block-size: 38.3906px;
                  border-block-color: rgb(111, 36, 115);
                  border-color: rgb(111, 36, 115);
                  border-inline-color: rgb(111, 36, 115);
                  height: 38.3906px;
                  inline-size: 302.5px;
                  margin-block: 0px;
                  margin-bottom: 0px;
                  margin-top: 0px;
                  width: 302.5px;
                "
              >
                Chronic
              </h2>
            </div>
          </div>
          <div
            class="elementor-element elementor-element-36107b0d elementor-widget elementor-widget-theme-post-content"
            data-id="36107b0d"
            data-element_type="widget"
            data-widget_type="theme-post-content.default"
            style="
              caret-color: rgb(127, 127, 127);
              color: rgb(127, 127, 127);
              gap: 0px;
              column-rule-color: rgb(127, 127, 127);
              font-style: italic;
              list-style-type: none;
              outline-color: rgb(127, 127, 127);
              perspective-origin: 151.25px 34px;
              position: relative;
              text-align: center;
              text-decoration: rgb(127, 127, 127);
              text-emphasis-color: rgb(127, 127, 127);
              transform-origin: 151.25px 34px;
              word-break: break-word;
              -webkit-text-fill-color: rgb(127, 127, 127);
              -webkit-text-stroke-color: rgb(127, 127, 127);
              block-size: 68px;
              border-block-color: rgb(127, 127, 127);
              border-color: rgb(127, 127, 127);
              border-inline-color: rgb(127, 127, 127);
              inset: 0px;
              height: 68px;
              inline-size: 302.5px;
              inset-block: 0px;
              inset-inline: 0px;
              max-inline-size: 100%;
              max-width: 100%;
              min-block-size: auto;
              min-height: auto;
              width: 302.5px;
            "
          >
            <div
              class="elementor-widget-container"
              style="
                caret-color: rgb(127, 127, 127);
                color: rgb(127, 127, 127);
                column-rule-color: rgb(127, 127, 127);
                font-style: italic;
                list-style-type: none;
                outline-color: rgb(127, 127, 127);
                perspective-origin: 151.25px 34px;
                text-align: center;
                text-decoration: rgb(127, 127, 127);
                text-emphasis-color: rgb(127, 127, 127);
                transform-origin: 151.25px 34px;
                transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s, transform 0.4s;
                word-break: break-word;
                -webkit-text-fill-color: rgb(127, 127, 127);
                -webkit-text-stroke-color: rgb(127, 127, 127);
                block-size: 68px;
                border-block-color: rgb(127, 127, 127);
                border-color: rgb(127, 127, 127);
                border-inline-color: rgb(127, 127, 127);
                height: 68px;
                inline-size: 302.5px;
                width: 302.5px;
              "
            >
              <p
                style="
                  caret-color: rgb(127, 127, 127);
                  color: rgb(127, 127, 127);
                  column-rule-color: rgb(127, 127, 127);
                  font-style: italic;
                  list-style-type: none;
                  outline-color: rgb(127, 127, 127);
                  perspective-origin: 151.25px 24px;
                  text-align: center;
                  text-decoration: rgb(127, 127, 127);
                  text-emphasis-color: rgb(127, 127, 127);
                  transform-origin: 151.25px 24px;
                  word-break: break-word;
                  -webkit-text-fill-color: rgb(127, 127, 127);
                  -webkit-text-stroke-color: rgb(127, 127, 127);
                  block-size: 48px;
                  border-block-color: rgb(127, 127, 127);
                  border-color: rgb(127, 127, 127);
                  border-inline-color: rgb(127, 127, 127);
                  height: 48px;
                  inline-size: 302.5px;
                  width: 302.5px;
                "
              >
                Acai, Granola, Banana, Strawberry, Kiwi, Pineapple, Coconut Shavings, Honey
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        data-elementor-type="loop-item"
        data-elementor-id="4252"
        class="elementor elementor-4252 swiper-slide e-loop-item e-loop-item-539 post-539 menu_item type-menu_item status-publish has-post-thumbnail hentry category-acai-bowls swiper-slide-duplicate"
        data-elementor-post-type="elementor_library"
        role="group"
        aria-roledescription="slide"
        data-custom-edit-handle="1"
        aria-label="4 / 10"
        data-swiper-slide-index="3"
        style="
          flex-shrink: 0;
          list-style-type: none;
          perspective-origin: 151.25px 253.438px;
          position: relative;
          transform-origin: 151.25px 253.438px;
          transition-property: transform;
          block-size: 506.875px;
          inset: 0px;
          height: 506.875px;
          inline-size: 302.5px;
          inset-block: 0px;
          inset-inline: 0px;
          margin-inline-end: 20px;
          margin-right: 20px;
          min-block-size: auto;
          min-height: auto;
          min-inline-size: auto;
          min-width: auto;
          width: 302.5px;
        "
      >
        <div
          data-particle_enable="false"
          data-particle-mobile-disabled="false"
          class="elementor-element elementor-element-1f7adeb5 e-con-full e-flex e-con e-parent"
          data-id="1f7adeb5"
          data-element_type="container"
          style="
            gap: 0px;
            display: flex;
            flex-direction: column;
            list-style-type: none;
            perspective-origin: 151.25px 253.438px;
            position: relative;
            transform-origin: 151.25px 253.438px;
            transition: background 0.3s, border 0.3s, box-shadow 0.3s, transform 0.4s;
            word-break: break-word;
            block-size: 506.875px;
            inset: 0px;
            height: 506.875px;
            inline-size: 302.5px;
            inset-block: 0px;
            inset-inline: 0px;
            max-inline-size: 100%;
            max-width: 100%;
            width: 302.5px;
          "
        >
          <div
            class="elementor-element elementor-element-62a12117 elementor-widget elementor-widget-theme-post-featured-image elementor-widget-image"
            data-id="62a12117"
            data-element_type="widget"
            data-widget_type="theme-post-featured-image.default"
            style="
              gap: 0px;
              list-style-type: none;
              perspective-origin: 151.25px 151.25px;
              position: relative;
              text-align: center;
              transform-origin: 151.25px 151.25px;
              word-break: break-word;
              block-size: 302.5px;
              inset: 0px;
              height: 302.5px;
              inline-size: 302.5px;
              inset-block: 0px;
              inset-inline: 0px;
              max-inline-size: 100%;
              max-width: 100%;
              min-block-size: auto;
              min-height: auto;
              width: 302.5px;
            "
          >
            <div
              class="elementor-widget-container"
              style="list-style-type: none; perspective-origin: 151.25px 151.25px; text-align: center; transform-origin: 151.25px 151.25px; transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s, transform 0.4s; word-break: break-word; block-size: 302.5px; height: 302.5px; inline-size: 302.5px; width: 302.5px"
            >
              <img
                loading="lazy"
                decoding="async"
                width="410"
                height="410"
                src="/"
                class="attachment-medium_large size-medium_large wp-image-1541"
                alt=""
                srcset="/ 410w, / 300w, / 150w"
                sizes="(max-width: 410px) 100vw, 410px"
                style="display: inline-block; list-style-type: none; perspective-origin: 151.25px 151.25px; text-align: center; transform-origin: 151.25px 151.25px; vertical-align: middle; word-break: break-word; block-size: 302.5px; height: 302.5px; inline-size: 302.5px; width: 302.5px"
              />
            </div>
          </div>
          <div
            class="elementor-element elementor-element-66e5738b elementor-widget elementor-widget-theme-post-title elementor-page-title elementor-widget-heading"
            data-id="66e5738b"
            data-element_type="widget"
            data-widget_type="theme-post-title.default"
            style="
              gap: 0px;
              list-style-type: none;
              perspective-origin: 151.25px 34.1875px;
              position: relative;
              text-align: center;
              transform-origin: 151.25px 34.1914px;
              word-break: break-word;
              block-size: 68.375px;
              inset: 0px;
              height: 68.375px;
              inline-size: 302.5px;
              inset-block: 0px;
              inset-inline: 0px;
              max-inline-size: 100%;
              max-width: 100%;
              min-block-size: auto;
              min-height: auto;
              width: 302.5px;
            "
          >
            <div
              class="elementor-widget-container"
              style="
                list-style-type: none;
                perspective-origin: 151.25px 26.6875px;
                text-align: center;
                transform-origin: 151.25px 26.6953px;
                transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s, transform 0.4s;
                word-break: break-word;
                block-size: 53.3828px;
                height: 53.3828px;
                inline-size: 302.5px;
                margin-block: 10px 5px;
                margin-bottom: 5px;
                margin-top: 10px;
                width: 302.5px;
              "
            >
              <h2
                class="elementor-heading-title elementor-size-default"
                style="
                  caret-color: rgb(111, 36, 115);
                  color: rgb(111, 36, 115);
                  column-rule-color: rgb(111, 36, 115);
                  list-style-type: none;
                  outline-color: rgb(111, 36, 115);
                  perspective-origin: 151.25px 19.1875px;
                  text-align: center;
                  text-decoration: rgb(111, 36, 115);
                  text-emphasis-color: rgb(111, 36, 115);
                  transform-origin: 151.25px 19.1992px;
                  word-break: break-word;
                  -webkit-text-fill-color: rgb(111, 36, 115);
                  -webkit-text-stroke-color: rgb(111, 36, 115);
                  block-size: 38.3906px;
                  border-block-color: rgb(111, 36, 115);
                  border-color: rgb(111, 36, 115);
                  border-inline-color: rgb(111, 36, 115);
                  height: 38.3906px;
                  inline-size: 302.5px;
                  margin-block: 0px;
                  margin-bottom: 0px;
                  margin-top: 0px;
                  width: 302.5px;
                "
              >
                Estes Bowl
              </h2>
            </div>
          </div>
          <div
            class="elementor-element elementor-element-36107b0d elementor-widget elementor-widget-theme-post-content"
            data-id="36107b0d"
            data-element_type="widget"
            data-widget_type="theme-post-content.default"
            style="
              caret-color: rgb(127, 127, 127);
              color: rgb(127, 127, 127);
              gap: 0px;
              column-rule-color: rgb(127, 127, 127);
              font-style: italic;
              list-style-type: none;
              outline-color: rgb(127, 127, 127);
              perspective-origin: 151.25px 46px;
              position: relative;
              text-align: center;
              text-decoration: rgb(127, 127, 127);
              text-emphasis-color: rgb(127, 127, 127);
              transform-origin: 151.25px 46px;
              word-break: break-word;
              -webkit-text-fill-color: rgb(127, 127, 127);
              -webkit-text-stroke-color: rgb(127, 127, 127);
              block-size: 92px;
              border-block-color: rgb(127, 127, 127);
              border-color: rgb(127, 127, 127);
              border-inline-color: rgb(127, 127, 127);
              inset: 0px;
              height: 92px;
              inline-size: 302.5px;
              inset-block: 0px;
              inset-inline: 0px;
              max-inline-size: 100%;
              max-width: 100%;
              min-block-size: auto;
              min-height: auto;
              width: 302.5px;
            "
          >
            <div
              class="elementor-widget-container"
              style="
                caret-color: rgb(127, 127, 127);
                color: rgb(127, 127, 127);
                column-rule-color: rgb(127, 127, 127);
                font-style: italic;
                list-style-type: none;
                outline-color: rgb(127, 127, 127);
                perspective-origin: 151.25px 46px;
                text-align: center;
                text-decoration: rgb(127, 127, 127);
                text-emphasis-color: rgb(127, 127, 127);
                transform-origin: 151.25px 46px;
                transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s, transform 0.4s;
                word-break: break-word;
                -webkit-text-fill-color: rgb(127, 127, 127);
                -webkit-text-stroke-color: rgb(127, 127, 127);
                block-size: 92px;
                border-block-color: rgb(127, 127, 127);
                border-color: rgb(127, 127, 127);
                border-inline-color: rgb(127, 127, 127);
                height: 92px;
                inline-size: 302.5px;
                width: 302.5px;
              "
            >
              <p
                style="
                  caret-color: rgb(127, 127, 127);
                  color: rgb(127, 127, 127);
                  column-rule-color: rgb(127, 127, 127);
                  font-style: italic;
                  list-style-type: none;
                  outline-color: rgb(127, 127, 127);
                  perspective-origin: 151.25px 36px;
                  text-align: center;
                  text-decoration: rgb(127, 127, 127);
                  text-emphasis-color: rgb(127, 127, 127);
                  transform-origin: 151.25px 36px;
                  word-break: break-word;
                  -webkit-text-fill-color: rgb(127, 127, 127);
                  -webkit-text-stroke-color: rgb(127, 127, 127);
                  block-size: 72px;
                  border-block-color: rgb(127, 127, 127);
                  border-color: rgb(127, 127, 127);
                  border-inline-color: rgb(127, 127, 127);
                  height: 72px;
                  inline-size: 302.5px;
                  width: 302.5px;
                "
              >
                Acai, Granola, Peanut Butter, Strawberry, Green Apple, Chocolate Covered Almonds, Honey
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <span class="swiper-notification" aria-live="assertive" aria-atomic="true" style="display: block; list-style-type: none; opacity: 0; pointer-events: none; position: absolute; z-index: -1000; block-size: 0px; inset: 0px 1270px 522.875px 0px; height: 0px; inline-size: 0px; inset-block: 0px 522.875px; inset-inline: 0px 1270px; width: 0px"></span>
  </div>
  <div
    class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal"
    style="
      block-size: 16px;
      inset: 522.875px 355px 5px 635px;
      height: 16px;
      inline-size: 280px;
      inset-block: 522.875px 5px;
      inset-inline: 635px 355px;
      line-height: 16px;
      perspective-origin: 140px 8px;
      position: absolute;
      text-align: center;
      transform: matrix(1, 0, 0, 1, -140, -16);
      transform-origin: 140px 8px;
      transition-duration: 0.3s;
      transition-property: opacity;
      width: 280px;
      z-index: 3;
    "
  >
    <span
      class="swiper-pagination-bullet swiper-pagination-bullet-active"
      role="button"
      data-bullet-index="0"
      aria-label="Go to slide 1"
      aria-current="true"
      style="
        background-color: rgb(111, 36, 115);
        block-size: 16px;
        border-radius: 50%;
        border-end-end-radius: 50%;
        border-end-start-radius: 50%;
        border-start-end-radius: 50%;
        border-start-start-radius: 50%;
        cursor: pointer;
        display: inline-block;
        height: 16px;
        inline-size: 16px;
        line-height: 16px;
        margin-inline: 6px;
        margin-left: 6px;
        margin-right: 6px;
        perspective-origin: 8px 8px;
        text-align: center;
        transform-origin: 8px 8px;
        vertical-align: top;
        width: 16px;
      "
    ></span
    ><span
      class="swiper-pagination-bullet"
      role="button"
      data-bullet-index="1"
      aria-label="Go to slide 2"
      style="
        background-color: rgb(111, 36, 115);
        block-size: 16px;
        border-radius: 50%;
        border-end-end-radius: 50%;
        border-end-start-radius: 50%;
        border-start-end-radius: 50%;
        border-start-start-radius: 50%;
        cursor: pointer;
        display: inline-block;
        height: 16px;
        inline-size: 16px;
        line-height: 16px;
        margin-inline: 6px;
        margin-left: 6px;
        margin-right: 6px;
        opacity: 0.2;
        perspective-origin: 8px 8px;
        text-align: center;
        transform-origin: 8px 8px;
        vertical-align: top;
        width: 16px;
      "
    ></span
    ><span
      class="swiper-pagination-bullet"
      role="button"
      data-bullet-index="2"
      aria-label="Go to slide 3"
      style="
        background-color: rgb(111, 36, 115);
        block-size: 16px;
        border-radius: 50%;
        border-end-end-radius: 50%;
        border-end-start-radius: 50%;
        border-start-end-radius: 50%;
        border-start-start-radius: 50%;
        cursor: pointer;
        display: inline-block;
        height: 16px;
        inline-size: 16px;
        line-height: 16px;
        margin-inline: 6px;
        margin-left: 6px;
        margin-right: 6px;
        opacity: 0.2;
        perspective-origin: 8px 8px;
        text-align: center;
        transform-origin: 8px 8px;
        vertical-align: top;
        width: 16px;
      "
    ></span
    ><span
      class="swiper-pagination-bullet"
      role="button"
      data-bullet-index="3"
      aria-label="Go to slide 4"
      style="
        background-color: rgb(111, 36, 115);
        block-size: 16px;
        border-radius: 50%;
        border-end-end-radius: 50%;
        border-end-start-radius: 50%;
        border-start-end-radius: 50%;
        border-start-start-radius: 50%;
        cursor: pointer;
        display: inline-block;
        height: 16px;
        inline-size: 16px;
        line-height: 16px;
        margin-inline: 6px;
        margin-left: 6px;
        margin-right: 6px;
        opacity: 0.2;
        perspective-origin: 8px 8px;
        text-align: center;
        transform-origin: 8px 8px;
        vertical-align: top;
        width: 16px;
      "
    ></span
    ><span
      class="swiper-pagination-bullet"
      role="button"
      data-bullet-index="4"
      aria-label="Go to slide 5"
      style="
        background-color: rgb(111, 36, 115);
        block-size: 16px;
        border-radius: 50%;
        border-end-end-radius: 50%;
        border-end-start-radius: 50%;
        border-start-end-radius: 50%;
        border-start-start-radius: 50%;
        cursor: pointer;
        display: inline-block;
        height: 16px;
        inline-size: 16px;
        line-height: 16px;
        margin-inline: 6px;
        margin-left: 6px;
        margin-right: 6px;
        opacity: 0.2;
        perspective-origin: 8px 8px;
        text-align: center;
        transform-origin: 8px 8px;
        vertical-align: top;
        width: 16px;
      "
    ></span
    ><span
      class="swiper-pagination-bullet"
      role="button"
      data-bullet-index="5"
      aria-label="Go to slide 6"
      style="
        background-color: rgb(111, 36, 115);
        block-size: 16px;
        border-radius: 50%;
        border-end-end-radius: 50%;
        border-end-start-radius: 50%;
        border-start-end-radius: 50%;
        border-start-start-radius: 50%;
        cursor: pointer;
        display: inline-block;
        height: 16px;
        inline-size: 16px;
        line-height: 16px;
        margin-inline: 6px;
        margin-left: 6px;
        margin-right: 6px;
        opacity: 0.2;
        perspective-origin: 8px 8px;
        text-align: center;
        transform-origin: 8px 8px;
        vertical-align: top;
        width: 16px;
      "
    ></span
    ><span
      class="swiper-pagination-bullet"
      role="button"
      data-bullet-index="6"
      aria-label="Go to slide 7"
      style="
        background-color: rgb(111, 36, 115);
        block-size: 16px;
        border-radius: 50%;
        border-end-end-radius: 50%;
        border-end-start-radius: 50%;
        border-start-end-radius: 50%;
        border-start-start-radius: 50%;
        cursor: pointer;
        display: inline-block;
        height: 16px;
        inline-size: 16px;
        line-height: 16px;
        margin-inline: 6px;
        margin-left: 6px;
        margin-right: 6px;
        opacity: 0.2;
        perspective-origin: 8px 8px;
        text-align: center;
        transform-origin: 8px 8px;
        vertical-align: top;
        width: 16px;
      "
    ></span
    ><span
      class="swiper-pagination-bullet"
      role="button"
      data-bullet-index="7"
      aria-label="Go to slide 8"
      style="
        background-color: rgb(111, 36, 115);
        block-size: 16px;
        border-radius: 50%;
        border-end-end-radius: 50%;
        border-end-start-radius: 50%;
        border-start-end-radius: 50%;
        border-start-start-radius: 50%;
        cursor: pointer;
        display: inline-block;
        height: 16px;
        inline-size: 16px;
        line-height: 16px;
        margin-inline: 6px;
        margin-left: 6px;
        margin-right: 6px;
        opacity: 0.2;
        perspective-origin: 8px 8px;
        text-align: center;
        transform-origin: 8px 8px;
        vertical-align: top;
        width: 16px;
      "
    ></span
    ><span
      class="swiper-pagination-bullet"
      role="button"
      data-bullet-index="8"
      aria-label="Go to slide 9"
      style="
        background-color: rgb(111, 36, 115);
        block-size: 16px;
        border-radius: 50%;
        border-end-end-radius: 50%;
        border-end-start-radius: 50%;
        border-start-end-radius: 50%;
        border-start-start-radius: 50%;
        cursor: pointer;
        display: inline-block;
        height: 16px;
        inline-size: 16px;
        line-height: 16px;
        margin-inline: 6px;
        margin-left: 6px;
        margin-right: 6px;
        opacity: 0.2;
        perspective-origin: 8px 8px;
        text-align: center;
        transform-origin: 8px 8px;
        vertical-align: top;
        width: 16px;
      "
    ></span
    ><span
      class="swiper-pagination-bullet"
      role="button"
      data-bullet-index="9"
      aria-label="Go to slide 10"
      style="
        background-color: rgb(111, 36, 115);
        block-size: 16px;
        border-radius: 50%;
        border-end-end-radius: 50%;
        border-end-start-radius: 50%;
        border-start-end-radius: 50%;
        border-start-start-radius: 50%;
        cursor: pointer;
        display: inline-block;
        height: 16px;
        inline-size: 16px;
        line-height: 16px;
        margin-inline: 6px;
        margin-left: 6px;
        margin-right: 6px;
        opacity: 0.2;
        perspective-origin: 8px 8px;
        text-align: center;
        transform-origin: 8px 8px;
        vertical-align: top;
        width: 16px;
      "
    ></span>
  </div>
</div>
<style>
  [data-id="0"]::before {
    border-block-end-color: rgb(127, 127, 127);
    border-block-start-color: rgb(127, 127, 127);
    border-bottom-color: rgb(127, 127, 127);
    border-inline-end-color: rgb(127, 127, 127);
    border-inline-start-color: rgb(127, 127, 127);
    border-left-color: rgb(127, 127, 127);
    border-right-color: rgb(127, 127, 127);
    border-top-color: rgb(127, 127, 127);
    caret-color: rgb(127, 127, 127);
    color: rgb(127, 127, 127);
    column-rule-color: rgb(127, 127, 127);
    content: "";
    cursor: pointer;
    font-family: eicons;
    font-size: 32px;
    font-style: normal;
    line-height: 32px;
    outline-color: rgb(127, 127, 127);
    perspective-origin: 0px 0px;
    text-decoration-color: rgb(127, 127, 127);
    text-emphasis-color: rgb(127, 127, 127);
    transform-origin: 0px 0px;
    -webkit-text-fill-color: rgb(127, 127, 127);
    -webkit-text-stroke-color: rgb(127, 127, 127);
  }
  [data-id="1"]::before {
    border-block-end-color: rgb(127, 127, 127);
    border-block-start-color: rgb(127, 127, 127);
    border-bottom-color: rgb(127, 127, 127);
    border-inline-end-color: rgb(127, 127, 127);
    border-inline-start-color: rgb(127, 127, 127);
    border-left-color: rgb(127, 127, 127);
    border-right-color: rgb(127, 127, 127);
    border-top-color: rgb(127, 127, 127);
    caret-color: rgb(127, 127, 127);
    color: rgb(127, 127, 127);
    column-rule-color: rgb(127, 127, 127);
    content: "";
    cursor: pointer;
    font-family: eicons;
    font-size: 32px;
    font-style: normal;
    line-height: 32px;
    outline-color: rgb(127, 127, 127);
    perspective-origin: 0px 0px;
    text-decoration-color: rgb(127, 127, 127);
    text-emphasis-color: rgb(127, 127, 127);
    transform-origin: 0px 0px;
    -webkit-text-fill-color: rgb(127, 127, 127);
    -webkit-text-stroke-color: rgb(127, 127, 127);
  }
</style>` },
  { filename: "swiper slider without pagination prev and next buttons", content: `<div class="elementor-widget-container" style="block-size: 522.875px; height: 522.875px; inline-size: 1270px; perspective-origin: 635px 261.438px; transform-origin: 635px 261.438px; transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s, transform 0.4s; width: 1270px">
  <div
    class="swiper elementor-loop-container elementor-grid swiper-initialized swiper-horizontal swiper-pointer-events"
    dir="ltr"
    style="
      display: grid;
      grid-template-columns: 5805px;
      grid-template-rows: 506.875px;
      list-style-type: none;
      perspective-origin: 635px 261.438px;
      position: relative;
      touch-action: pan-y;
      transform-origin: 635px 261.438px;
      z-index: 1;
      block-size: 522.875px;
      inset: 0px;
      height: 522.875px;
      inline-size: 1270px;
      inset-block: 0px;
      inset-inline: 0px;
      overflow-block: hidden;
      overflow-inline: hidden;
      overflow: hidden;
      padding-block-end: 16px;
      padding-bottom: 16px;
      width: 1270px;
    "
  >
    <div
      class="swiper-wrapper"
      aria-live="polite"
      style="
        transition-duration: 0ms;
        transform: matrix(1, 0, 0, 1, -1290, 0);
        box-sizing: content-box;
        display: flex;
        list-style-type: none;
        perspective-origin: 2902.5px 253.438px;
        position: relative;
        transform-origin: 2902.5px 253.438px;
        transition-property: transform;
        z-index: 1;
        block-size: 506.875px;
        inset: 0px;
        height: 506.875px;
        inline-size: 5805px;
        inset-block: 0px;
        inset-inline: 0px;
        min-block-size: auto;
        min-height: auto;
        min-inline-size: auto;
        min-width: auto;
        width: 5805px;
      "
      id="swiper-wrapper-6d4a5c5301389a810"
    >
      <div
        data-elementor-type="loop-item"
        data-elementor-id="4252"
        class="elementor elementor-4252 swiper-slide e-loop-item e-loop-item-538 post-538 menu_item type-menu_item status-publish has-post-thumbnail hentry category-acai-bowls swiper-slide-duplicate"
        data-elementor-post-type="elementor_library"
        role="group"
        aria-roledescription="slide"
        data-custom-edit-handle="1"
        aria-label="7 / 10"
        data-swiper-slide-index="6"
        style="
          flex-shrink: 0;
          interactivity: inert;
          list-style-type: none;
          perspective-origin: 151.25px 245.938px;
          position: relative;
          transform-origin: 151.25px 245.949px;
          transition-property: transform;
          block-size: 491.891px;
          inset: 0px;
          height: 491.891px;
          inline-size: 302.5px;
          inset-block: 0px;
          inset-inline: 0px;
          margin-inline-end: 20px;
          margin-right: 20px;
          min-block-size: auto;
          min-height: auto;
          min-inline-size: auto;
          min-width: auto;
          width: 302.5px;
        "
        aria-hidden="true"
        inert=""
      >
        <div
          data-particle_enable="false"
          data-particle-mobile-disabled="false"
          class="elementor-element elementor-element-1f7adeb5 e-con-full e-flex e-con e-parent"
          data-id="1f7adeb5"
          data-element_type="container"
          style="
            gap: 0px;
            display: flex;
            flex-direction: column;
            interactivity: inert;
            list-style-type: none;
            perspective-origin: 151.25px 245.938px;
            position: relative;
            transform-origin: 151.25px 245.949px;
            transition: background 0.3s, border 0.3s, box-shadow 0.3s, transform 0.4s;
            word-break: break-word;
            block-size: 491.891px;
            inset: 0px;
            height: 491.891px;
            inline-size: 302.5px;
            inset-block: 0px;
            inset-inline: 0px;
            max-inline-size: 100%;
            max-width: 100%;
            width: 302.5px;
          "
        >
          <div
            class="elementor-element elementor-element-62a12117 elementor-widget elementor-widget-theme-post-featured-image elementor-widget-image"
            data-id="62a12117"
            data-element_type="widget"
            data-widget_type="theme-post-featured-image.default"
            style="
              gap: 0px;
              interactivity: inert;
              list-style-type: none;
              perspective-origin: 151.25px 151.25px;
              position: relative;
              text-align: center;
              transform-origin: 151.25px 151.25px;
              word-break: break-word;
              block-size: 302.5px;
              inset: 0px;
              height: 302.5px;
              inline-size: 302.5px;
              inset-block: 0px;
              inset-inline: 0px;
              max-inline-size: 100%;
              max-width: 100%;
              min-block-size: auto;
              min-height: auto;
              width: 302.5px;
            "
          >
            <div
              class="elementor-widget-container"
              style="
                interactivity: inert;
                list-style-type: none;
                perspective-origin: 151.25px 151.25px;
                text-align: center;
                transform-origin: 151.25px 151.25px;
                transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s, transform 0.4s;
                word-break: break-word;
                block-size: 302.5px;
                height: 302.5px;
                inline-size: 302.5px;
                width: 302.5px;
              "
            >
              <img
                loading="lazy"
                decoding="async"
                width="410"
                height="410"
                src="/"
                class="attachment-medium_large size-medium_large wp-image-1547"
                alt=""
                srcset="/ 410w, / 300w, / 150w"
                sizes="(max-width: 410px) 100vw, 410px"
                style="display: inline-block; interactivity: inert; list-style-type: none; perspective-origin: 151.25px 151.25px; text-align: center; transform-origin: 151.25px 151.25px; vertical-align: middle; word-break: break-word; block-size: 302.5px; height: 302.5px; inline-size: 302.5px; width: 302.5px"
              />
            </div>
          </div>
          <div
            class="elementor-element elementor-element-66e5738b elementor-widget elementor-widget-theme-post-title elementor-page-title elementor-widget-heading"
            data-id="66e5738b"
            data-element_type="widget"
            data-widget_type="theme-post-title.default"
            style="
              gap: 0px;
              interactivity: inert;
              list-style-type: none;
              perspective-origin: 151.25px 34.1875px;
              position: relative;
              text-align: center;
              transform-origin: 151.25px 34.1914px;
              word-break: break-word;
              block-size: 68.375px;
              inset: 0px;
              height: 68.375px;
              inline-size: 302.5px;
              inset-block: 0px;
              inset-inline: 0px;
              max-inline-size: 100%;
              max-width: 100%;
              min-block-size: auto;
              min-height: auto;
              width: 302.5px;
            "
          >
            <div
              class="elementor-widget-container"
              style="
                interactivity: inert;
                list-style-type: none;
                perspective-origin: 151.25px 26.6875px;
                text-align: center;
                transform-origin: 151.25px 26.6953px;
                transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s, transform 0.4s;
                word-break: break-word;
                block-size: 53.3828px;
                height: 53.3828px;
                inline-size: 302.5px;
                margin-block: 10px 5px;
                margin-bottom: 5px;
                margin-top: 10px;
                width: 302.5px;
              "
            >
              <h2
                class="elementor-heading-title elementor-size-default"
                style="
                  caret-color: rgb(111, 36, 115);
                  color: rgb(111, 36, 115);
                  column-rule-color: rgb(111, 36, 115);
                  interactivity: inert;
                  list-style-type: none;
                  outline-color: rgb(111, 36, 115);
                  perspective-origin: 151.25px 19.1875px;
                  text-align: center;
                  text-decoration: rgb(111, 36, 115);
                  text-emphasis-color: rgb(111, 36, 115);
                  transform-origin: 151.25px 19.1992px;
                  word-break: break-word;
                  -webkit-text-fill-color: rgb(111, 36, 115);
                  -webkit-text-stroke-color: rgb(111, 36, 115);
                  block-size: 38.3906px;
                  border-block-color: rgb(111, 36, 115);
                  border-color: rgb(111, 36, 115);
                  border-inline-color: rgb(111, 36, 115);
                  height: 38.3906px;
                  inline-size: 302.5px;
                  margin-block: 0px;
                  margin-bottom: 0px;
                  margin-top: 0px;
                  width: 302.5px;
                "
              >
                JB Bowl
              </h2>
            </div>
          </div>
          <div
            class="elementor-element elementor-element-36107b0d elementor-widget elementor-widget-theme-post-content"
            data-id="36107b0d"
            data-element_type="widget"
            data-widget_type="theme-post-content.default"
            style="
              caret-color: rgb(127, 127, 127);
              color: rgb(127, 127, 127);
              gap: 0px;
              column-rule-color: rgb(127, 127, 127);
              font-style: italic;
              interactivity: inert;
              list-style-type: none;
              outline-color: rgb(127, 127, 127);
              perspective-origin: 151.25px 46px;
              position: relative;
              text-align: center;
              text-decoration: rgb(127, 127, 127);
              text-emphasis-color: rgb(127, 127, 127);
              transform-origin: 151.25px 46px;
              word-break: break-word;
              -webkit-text-fill-color: rgb(127, 127, 127);
              -webkit-text-stroke-color: rgb(127, 127, 127);
              block-size: 92px;
              border-block-color: rgb(127, 127, 127);
              border-color: rgb(127, 127, 127);
              border-inline-color: rgb(127, 127, 127);
              inset: 0px;
              height: 92px;
              inline-size: 302.5px;
              inset-block: 0px;
              inset-inline: 0px;
              max-inline-size: 100%;
              max-width: 100%;
              min-block-size: auto;
              min-height: auto;
              width: 302.5px;
            "
          >
            <div
              class="elementor-widget-container"
              style="
                caret-color: rgb(127, 127, 127);
                color: rgb(127, 127, 127);
                column-rule-color: rgb(127, 127, 127);
                font-style: italic;
                interactivity: inert;
                list-style-type: none;
                outline-color: rgb(127, 127, 127);
                perspective-origin: 151.25px 46px;
                text-align: center;
                text-decoration: rgb(127, 127, 127);
                text-emphasis-color: rgb(127, 127, 127);
                transform-origin: 151.25px 46px;
                transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s, transform 0.4s;
                word-break: break-word;
                -webkit-text-fill-color: rgb(127, 127, 127);
                -webkit-text-stroke-color: rgb(127, 127, 127);
                block-size: 92px;
                border-block-color: rgb(127, 127, 127);
                border-color: rgb(127, 127, 127);
                border-inline-color: rgb(127, 127, 127);
                height: 92px;
                inline-size: 302.5px;
                width: 302.5px;
              "
            >
              <p
                style="
                  caret-color: rgb(127, 127, 127);
                  color: rgb(127, 127, 127);
                  column-rule-color: rgb(127, 127, 127);
                  font-style: italic;
                  interactivity: inert;
                  list-style-type: none;
                  outline-color: rgb(127, 127, 127);
                  perspective-origin: 151.25px 36px;
                  text-align: center;
                  text-decoration: rgb(127, 127, 127);
                  text-emphasis-color: rgb(127, 127, 127);
                  transform-origin: 151.25px 36px;
                  word-break: break-word;
                  -webkit-text-fill-color: rgb(127, 127, 127);
                  -webkit-text-stroke-color: rgb(127, 127, 127);
                  block-size: 72px;
                  border-block-color: rgb(127, 127, 127);
                  border-color: rgb(127, 127, 127);
                  border-inline-color: rgb(127, 127, 127);
                  height: 72px;
                  inline-size: 302.5px;
                  width: 302.5px;
                "
              >
                Acai, Granola, Greek Yogurt, Peanut Butter, Pineapple, Strawberry, Coconut Shavings, Hemp Seeds
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        data-elementor-type="loop-item"
        data-elementor-id="4252"
        class="elementor elementor-4252 swiper-slide e-loop-item e-loop-item-537 post-537 menu_item type-menu_item status-publish has-post-thumbnail hentry category-acai-bowls swiper-slide-duplicate"
        data-elementor-post-type="elementor_library"
        role="group"
        aria-roledescription="slide"
        data-custom-edit-handle="1"
        aria-label="8 / 10"
        data-swiper-slide-index="7"
        style="
          flex-shrink: 0;
          interactivity: inert;
          list-style-type: none;
          perspective-origin: 151.25px 245.938px;
          position: relative;
          transform-origin: 151.25px 245.949px;
          transition-property: transform;
          block-size: 491.891px;
          inset: 0px;
          height: 491.891px;
          inline-size: 302.5px;
          inset-block: 0px;
          inset-inline: 0px;
          margin-inline-end: 20px;
          margin-right: 20px;
          min-block-size: auto;
          min-height: auto;
          min-inline-size: auto;
          min-width: auto;
          width: 302.5px;
        "
        aria-hidden="true"
        inert=""
      >
        <div
          data-particle_enable="false"
          data-particle-mobile-disabled="false"
          class="elementor-element elementor-element-1f7adeb5 e-con-full e-flex e-con e-parent"
          data-id="1f7adeb5"
          data-element_type="container"
          style="
            gap: 0px;
            display: flex;
            flex-direction: column;
            interactivity: inert;
            list-style-type: none;
            perspective-origin: 151.25px 245.938px;
            position: relative;
            transform-origin: 151.25px 245.949px;
            transition: background 0.3s, border 0.3s, box-shadow 0.3s, transform 0.4s;
            word-break: break-word;
            block-size: 491.891px;
            inset: 0px;
            height: 491.891px;
            inline-size: 302.5px;
            inset-block: 0px;
            inset-inline: 0px;
            max-inline-size: 100%;
            max-width: 100%;
            width: 302.5px;
          "
        >
          <div
            class="elementor-element elementor-element-62a12117 elementor-widget elementor-widget-theme-post-featured-image elementor-widget-image"
            data-id="62a12117"
            data-element_type="widget"
            data-widget_type="theme-post-featured-image.default"
            style="
              gap: 0px;
              interactivity: inert;
              list-style-type: none;
              perspective-origin: 151.25px 151.25px;
              position: relative;
              text-align: center;
              transform-origin: 151.25px 151.25px;
              word-break: break-word;
              block-size: 302.5px;
              inset: 0px;
              height: 302.5px;
              inline-size: 302.5px;
              inset-block: 0px;
              inset-inline: 0px;
              max-inline-size: 100%;
              max-width: 100%;
              min-block-size: auto;
              min-height: auto;
              width: 302.5px;
            "
          >
            <div
              class="elementor-widget-container"
              style="
                interactivity: inert;
                list-style-type: none;
                perspective-origin: 151.25px 151.25px;
                text-align: center;
                transform-origin: 151.25px 151.25px;
                transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s, transform 0.4s;
                word-break: break-word;
                block-size: 302.5px;
                height: 302.5px;
                inline-size: 302.5px;
                width: 302.5px;
              "
            >
              <img
                loading="lazy"
                decoding="async"
                width="410"
                height="410"
                src="/"
                class="attachment-medium_large size-medium_large wp-image-1548"
                alt=""
                srcset="/ 410w, / 300w, / 150w"
                sizes="(max-width: 410px) 100vw, 410px"
                style="display: inline-block; interactivity: inert; list-style-type: none; perspective-origin: 151.25px 151.25px; text-align: center; transform-origin: 151.25px 151.25px; vertical-align: middle; word-break: break-word; block-size: 302.5px; height: 302.5px; inline-size: 302.5px; width: 302.5px"
              />
            </div>
          </div>
          <div
            class="elementor-element elementor-element-66e5738b elementor-widget elementor-widget-theme-post-title elementor-page-title elementor-widget-heading"
            data-id="66e5738b"
            data-element_type="widget"
            data-widget_type="theme-post-title.default"
            style="
              gap: 0px;
              interactivity: inert;
              list-style-type: none;
              perspective-origin: 151.25px 34.1875px;
              position: relative;
              text-align: center;
              transform-origin: 151.25px 34.1914px;
              word-break: break-word;
              block-size: 68.375px;
              inset: 0px;
              height: 68.375px;
              inline-size: 302.5px;
              inset-block: 0px;
              inset-inline: 0px;
              max-inline-size: 100%;
              max-width: 100%;
              min-block-size: auto;
              min-height: auto;
              width: 302.5px;
            "
          >
            <div
              class="elementor-widget-container"
              style="
                interactivity: inert;
                list-style-type: none;
                perspective-origin: 151.25px 26.6875px;
                text-align: center;
                transform-origin: 151.25px 26.6953px;
                transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s, transform 0.4s;
                word-break: break-word;
                block-size: 53.3828px;
                height: 53.3828px;
                inline-size: 302.5px;
                margin-block: 10px 5px;
                margin-bottom: 5px;
                margin-top: 10px;
                width: 302.5px;
              "
            >
              <h2
                class="elementor-heading-title elementor-size-default"
                style="
                  caret-color: rgb(111, 36, 115);
                  color: rgb(111, 36, 115);
                  column-rule-color: rgb(111, 36, 115);
                  interactivity: inert;
                  list-style-type: none;
                  outline-color: rgb(111, 36, 115);
                  perspective-origin: 151.25px 19.1875px;
                  text-align: center;
                  text-decoration: rgb(111, 36, 115);
                  text-emphasis-color: rgb(111, 36, 115);
                  transform-origin: 151.25px 19.1992px;
                  word-break: break-word;
                  -webkit-text-fill-color: rgb(111, 36, 115);
                  -webkit-text-stroke-color: rgb(111, 36, 115);
                  block-size: 38.3906px;
                  border-block-color: rgb(111, 36, 115);
                  border-color: rgb(111, 36, 115);
                  border-inline-color: rgb(111, 36, 115);
                  height: 38.3906px;
                  inline-size: 302.5px;
                  margin-block: 0px;
                  margin-bottom: 0px;
                  margin-top: 0px;
                  width: 302.5px;
                "
              >
                Tequesta Dragon
              </h2>
            </div>
          </div>
          <div
            class="elementor-element elementor-element-36107b0d elementor-widget elementor-widget-theme-post-content"
            data-id="36107b0d"
            data-element_type="widget"
            data-widget_type="theme-post-content.default"
            style="
              caret-color: rgb(127, 127, 127);
              color: rgb(127, 127, 127);
              gap: 0px;
              column-rule-color: rgb(127, 127, 127);
              font-style: italic;
              interactivity: inert;
              list-style-type: none;
              outline-color: rgb(127, 127, 127);
              perspective-origin: 151.25px 34px;
              position: relative;
              text-align: center;
              text-decoration: rgb(127, 127, 127);
              text-emphasis-color: rgb(127, 127, 127);
              transform-origin: 151.25px 34px;
              word-break: break-word;
              -webkit-text-fill-color: rgb(127, 127, 127);
              -webkit-text-stroke-color: rgb(127, 127, 127);
              block-size: 68px;
              border-block-color: rgb(127, 127, 127);
              border-color: rgb(127, 127, 127);
              border-inline-color: rgb(127, 127, 127);
              inset: 0px;
              height: 68px;
              inline-size: 302.5px;
              inset-block: 0px;
              inset-inline: 0px;
              max-inline-size: 100%;
              max-width: 100%;
              min-block-size: auto;
              min-height: auto;
              width: 302.5px;
            "
          >
            <div
              class="elementor-widget-container"
              style="
                caret-color: rgb(127, 127, 127);
                color: rgb(127, 127, 127);
                column-rule-color: rgb(127, 127, 127);
                font-style: italic;
                interactivity: inert;
                list-style-type: none;
                outline-color: rgb(127, 127, 127);
                perspective-origin: 151.25px 34px;
                text-align: center;
                text-decoration: rgb(127, 127, 127);
                text-emphasis-color: rgb(127, 127, 127);
                transform-origin: 151.25px 34px;
                transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s, transform 0.4s;
                word-break: break-word;
                -webkit-text-fill-color: rgb(127, 127, 127);
                -webkit-text-stroke-color: rgb(127, 127, 127);
                block-size: 68px;
                border-block-color: rgb(127, 127, 127);
                border-color: rgb(127, 127, 127);
                border-inline-color: rgb(127, 127, 127);
                height: 68px;
                inline-size: 302.5px;
                width: 302.5px;
              "
            >
              <p
                style="
                  caret-color: rgb(127, 127, 127);
                  color: rgb(127, 127, 127);
                  column-rule-color: rgb(127, 127, 127);
                  font-style: italic;
                  interactivity: inert;
                  list-style-type: none;
                  outline-color: rgb(127, 127, 127);
                  perspective-origin: 151.25px 24px;
                  text-align: center;
                  text-decoration: rgb(127, 127, 127);
                  text-emphasis-color: rgb(127, 127, 127);
                  transform-origin: 151.25px 24px;
                  word-break: break-word;
                  -webkit-text-fill-color: rgb(127, 127, 127);
                  -webkit-text-stroke-color: rgb(127, 127, 127);
                  block-size: 48px;
                  border-block-color: rgb(127, 127, 127);
                  border-color: rgb(127, 127, 127);
                  border-inline-color: rgb(127, 127, 127);
                  height: 48px;
                  inline-size: 302.5px;
                  width: 302.5px;
                "
              >
                Dragon Fruit, Granola, Blueberry, Raspberry, Strawberry, Chia Seeds, Hemp Seeds
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        data-elementor-type="loop-item"
        data-elementor-id="4252"
        class="elementor elementor-4252 swiper-slide e-loop-item e-loop-item-533 post-533 menu_item type-menu_item status-publish has-post-thumbnail hentry category-acai-bowls swiper-slide-duplicate"
        data-elementor-post-type="elementor_library"
        role="group"
        aria-roledescription="slide"
        data-custom-edit-handle="1"
        aria-label="9 / 10"
        data-swiper-slide-index="8"
        style="
          flex-shrink: 0;
          interactivity: inert;
          list-style-type: none;
          perspective-origin: 151.25px 245.938px;
          position: relative;
          transform-origin: 151.25px 245.949px;
          transition-property: transform;
          block-size: 491.891px;
          inset: 0px;
          height: 491.891px;
          inline-size: 302.5px;
          inset-block: 0px;
          inset-inline: 0px;
          margin-inline-end: 20px;
          margin-right: 20px;
          min-block-size: auto;
          min-height: auto;
          min-inline-size: auto;
          min-width: auto;
          width: 302.5px;
        "
        aria-hidden="true"
        inert=""
      >
        <div
          data-particle_enable="false"
          data-particle-mobile-disabled="false"
          class="elementor-element elementor-element-1f7adeb5 e-con-full e-flex e-con e-parent"
          data-id="1f7adeb5"
          data-element_type="container"
          style="
            gap: 0px;
            display: flex;
            flex-direction: column;
            interactivity: inert;
            list-style-type: none;
            perspective-origin: 151.25px 245.938px;
            position: relative;
            transform-origin: 151.25px 245.949px;
            transition: background 0.3s, border 0.3s, box-shadow 0.3s, transform 0.4s;
            word-break: break-word;
            block-size: 491.891px;
            inset: 0px;
            height: 491.891px;
            inline-size: 302.5px;
            inset-block: 0px;
            inset-inline: 0px;
            max-inline-size: 100%;
            max-width: 100%;
            width: 302.5px;
          "
        >
          <div
            class="elementor-element elementor-element-62a12117 elementor-widget elementor-widget-theme-post-featured-image elementor-widget-image"
            data-id="62a12117"
            data-element_type="widget"
            data-widget_type="theme-post-featured-image.default"
            style="
              gap: 0px;
              interactivity: inert;
              list-style-type: none;
              perspective-origin: 151.25px 151.25px;
              position: relative;
              text-align: center;
              transform-origin: 151.25px 151.25px;
              word-break: break-word;
              block-size: 302.5px;
              inset: 0px;
              height: 302.5px;
              inline-size: 302.5px;
              inset-block: 0px;
              inset-inline: 0px;
              max-inline-size: 100%;
              max-width: 100%;
              min-block-size: auto;
              min-height: auto;
              width: 302.5px;
            "
          >
            <div
              class="elementor-widget-container"
              style="
                interactivity: inert;
                list-style-type: none;
                perspective-origin: 151.25px 151.25px;
                text-align: center;
                transform-origin: 151.25px 151.25px;
                transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s, transform 0.4s;
                word-break: break-word;
                block-size: 302.5px;
                height: 302.5px;
                inline-size: 302.5px;
                width: 302.5px;
              "
            >
              <img
                loading="lazy"
                decoding="async"
                width="410"
                height="410"
                src="/"
                class="attachment-medium_large size-medium_large wp-image-1546"
                alt=""
                srcset="/ 410w, / 300w, / 150w"
                sizes="(max-width: 410px) 100vw, 410px"
                style="display: inline-block; interactivity: inert; list-style-type: none; perspective-origin: 151.25px 151.25px; text-align: center; transform-origin: 151.25px 151.25px; vertical-align: middle; word-break: break-word; block-size: 302.5px; height: 302.5px; inline-size: 302.5px; width: 302.5px"
              />
            </div>
          </div>
          <div
            class="elementor-element elementor-element-66e5738b elementor-widget elementor-widget-theme-post-title elementor-page-title elementor-widget-heading"
            data-id="66e5738b"
            data-element_type="widget"
            data-widget_type="theme-post-title.default"
            style="
              gap: 0px;
              interactivity: inert;
              list-style-type: none;
              perspective-origin: 151.25px 34.1875px;
              position: relative;
              text-align: center;
              transform-origin: 151.25px 34.1914px;
              word-break: break-word;
              block-size: 68.375px;
              inset: 0px;
              height: 68.375px;
              inline-size: 302.5px;
              inset-block: 0px;
              inset-inline: 0px;
              max-inline-size: 100%;
              max-width: 100%;
              min-block-size: auto;
              min-height: auto;
              width: 302.5px;
            "
          >
            <div
              class="elementor-widget-container"
              style="
                interactivity: inert;
                list-style-type: none;
                perspective-origin: 151.25px 26.6875px;
                text-align: center;
                transform-origin: 151.25px 26.6953px;
                transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s, transform 0.4s;
                word-break: break-word;
                block-size: 53.3828px;
                height: 53.3828px;
                inline-size: 302.5px;
                margin-block: 10px 5px;
                margin-bottom: 5px;
                margin-top: 10px;
                width: 302.5px;
              "
            >
              <h2
                class="elementor-heading-title elementor-size-default"
                style="
                  caret-color: rgb(111, 36, 115);
                  color: rgb(111, 36, 115);
                  column-rule-color: rgb(111, 36, 115);
                  interactivity: inert;
                  list-style-type: none;
                  outline-color: rgb(111, 36, 115);
                  perspective-origin: 151.25px 19.1875px;
                  text-align: center;
                  text-decoration: rgb(111, 36, 115);
                  text-emphasis-color: rgb(111, 36, 115);
                  transform-origin: 151.25px 19.1992px;
                  word-break: break-word;
                  -webkit-text-fill-color: rgb(111, 36, 115);
                  -webkit-text-stroke-color: rgb(111, 36, 115);
                  block-size: 38.3906px;
                  border-block-color: rgb(111, 36, 115);
                  border-color: rgb(111, 36, 115);
                  border-inline-color: rgb(111, 36, 115);
                  height: 38.3906px;
                  inline-size: 302.5px;
                  margin-block: 0px;
                  margin-bottom: 0px;
                  margin-top: 0px;
                  width: 302.5px;
                "
              >
                PB&amp;A
              </h2>
            </div>
          </div>
          <div
            class="elementor-element elementor-element-36107b0d elementor-widget elementor-widget-theme-post-content"
            data-id="36107b0d"
            data-element_type="widget"
            data-widget_type="theme-post-content.default"
            style="
              caret-color: rgb(127, 127, 127);
              color: rgb(127, 127, 127);
              gap: 0px;
              column-rule-color: rgb(127, 127, 127);
              font-style: italic;
              interactivity: inert;
              list-style-type: none;
              outline-color: rgb(127, 127, 127);
              perspective-origin: 151.25px 56px;
              position: relative;
              text-align: center;
              text-decoration: rgb(127, 127, 127);
              text-emphasis-color: rgb(127, 127, 127);
              transform-origin: 151.25px 56px;
              word-break: break-word;
              -webkit-text-fill-color: rgb(127, 127, 127);
              -webkit-text-stroke-color: rgb(127, 127, 127);
              block-size: 112px;
              border-block-color: rgb(127, 127, 127);
              border-color: rgb(127, 127, 127);
              border-inline-color: rgb(127, 127, 127);
              inset: 0px;
              height: 112px;
              inline-size: 302.5px;
              inset-block: 0px;
              inset-inline: 0px;
              max-inline-size: 100%;
              max-width: 100%;
              min-block-size: auto;
              min-height: auto;
              width: 302.5px;
            "
          >
            <div
              class="elementor-widget-container"
              style="
                caret-color: rgb(127, 127, 127);
                color: rgb(127, 127, 127);
                column-rule-color: rgb(127, 127, 127);
                font-style: italic;
                interactivity: inert;
                list-style-type: none;
                outline-color: rgb(127, 127, 127);
                perspective-origin: 151.25px 56px;
                text-align: center;
                text-decoration: rgb(127, 127, 127);
                text-emphasis-color: rgb(127, 127, 127);
                transform-origin: 151.25px 56px;
                transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s, transform 0.4s;
                word-break: break-word;
                -webkit-text-fill-color: rgb(127, 127, 127);
                -webkit-text-stroke-color: rgb(127, 127, 127);
                block-size: 112px;
                border-block-color: rgb(127, 127, 127);
                border-color: rgb(127, 127, 127);
                border-inline-color: rgb(127, 127, 127);
                height: 112px;
                inline-size: 302.5px;
                width: 302.5px;
              "
            >
              <p
                style="
                  caret-color: rgb(127, 127, 127);
                  color: rgb(127, 127, 127);
                  column-rule-color: rgb(127, 127, 127);
                  font-style: italic;
                  interactivity: inert;
                  list-style-type: none;
                  outline-color: rgb(127, 127, 127);
                  perspective-origin: 151.25px 24px;
                  text-align: center;
                  text-decoration: rgb(127, 127, 127);
                  text-emphasis-color: rgb(127, 127, 127);
                  transform-origin: 151.25px 24px;
                  word-break: break-word;
                  -webkit-text-fill-color: rgb(127, 127, 127);
                  -webkit-text-stroke-color: rgb(127, 127, 127);
                  block-size: 48px;
                  border-block-color: rgb(127, 127, 127);
                  border-color: rgb(127, 127, 127);
                  border-inline-color: rgb(127, 127, 127);
                  height: 48px;
                  inline-size: 302.5px;
                  width: 302.5px;
                "
              >
                Acai, Granola, Peanut Butter, Banana, Strawberry
              </p>
              <p
                style="
                  caret-color: rgb(127, 127, 127);
                  color: rgb(127, 127, 127);
                  column-rule-color: rgb(127, 127, 127);
                  font-style: italic;
                  interactivity: inert;
                  list-style-type: none;
                  outline-color: rgb(127, 127, 127);
                  perspective-origin: 151.25px 12px;
                  text-align: center;
                  text-decoration: rgb(127, 127, 127);
                  text-emphasis-color: rgb(127, 127, 127);
                  transform-origin: 151.25px 12px;
                  word-break: break-word;
                  -webkit-text-fill-color: rgb(127, 127, 127);
                  -webkit-text-stroke-color: rgb(127, 127, 127);
                  block-size: 24px;
                  border-block-color: rgb(127, 127, 127);
                  border-color: rgb(127, 127, 127);
                  border-inline-color: rgb(127, 127, 127);
                  height: 24px;
                  inline-size: 302.5px;
                  width: 302.5px;
                "
              >
                &nbsp;
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        data-elementor-type="loop-item"
        data-elementor-id="4252"
        class="elementor elementor-4252 swiper-slide e-loop-item e-loop-item-519 post-519 menu_item type-menu_item status-publish has-post-thumbnail hentry category-acai-bowls swiper-slide-duplicate swiper-slide-prev"
        data-elementor-post-type="elementor_library"
        role="group"
        aria-roledescription="slide"
        data-custom-edit-handle="1"
        aria-label="10 / 10"
        data-swiper-slide-index="9"
        style="
          flex-shrink: 0;
          interactivity: inert;
          list-style-type: none;
          perspective-origin: 151.25px 245.938px;
          position: relative;
          transform-origin: 151.25px 245.949px;
          transition-property: transform;
          block-size: 491.891px;
          inset: 0px;
          height: 491.891px;
          inline-size: 302.5px;
          inset-block: 0px;
          inset-inline: 0px;
          margin-inline-end: 20px;
          margin-right: 20px;
          min-block-size: auto;
          min-height: auto;
          min-inline-size: auto;
          min-width: auto;
          width: 302.5px;
        "
        aria-hidden="true"
        inert=""
      >
        <div
          data-particle_enable="false"
          data-particle-mobile-disabled="false"
          class="elementor-element elementor-element-1f7adeb5 e-con-full e-flex e-con e-parent"
          data-id="1f7adeb5"
          data-element_type="container"
          style="
            gap: 0px;
            display: flex;
            flex-direction: column;
            interactivity: inert;
            list-style-type: none;
            perspective-origin: 151.25px 245.938px;
            position: relative;
            transform-origin: 151.25px 245.949px;
            transition: background 0.3s, border 0.3s, box-shadow 0.3s, transform 0.4s;
            word-break: break-word;
            block-size: 491.891px;
            inset: 0px;
            height: 491.891px;
            inline-size: 302.5px;
            inset-block: 0px;
            inset-inline: 0px;
            max-inline-size: 100%;
            max-width: 100%;
            width: 302.5px;
          "
        >
          <div
            class="elementor-element elementor-element-62a12117 elementor-widget elementor-widget-theme-post-featured-image elementor-widget-image"
            data-id="62a12117"
            data-element_type="widget"
            data-widget_type="theme-post-featured-image.default"
            style="
              gap: 0px;
              interactivity: inert;
              list-style-type: none;
              perspective-origin: 151.25px 151.25px;
              position: relative;
              text-align: center;
              transform-origin: 151.25px 151.25px;
              word-break: break-word;
              block-size: 302.5px;
              inset: 0px;
              height: 302.5px;
              inline-size: 302.5px;
              inset-block: 0px;
              inset-inline: 0px;
              max-inline-size: 100%;
              max-width: 100%;
              min-block-size: auto;
              min-height: auto;
              width: 302.5px;
            "
          >
            <div
              class="elementor-widget-container"
              style="
                interactivity: inert;
                list-style-type: none;
                perspective-origin: 151.25px 151.25px;
                text-align: center;
                transform-origin: 151.25px 151.25px;
                transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s, transform 0.4s;
                word-break: break-word;
                block-size: 302.5px;
                height: 302.5px;
                inline-size: 302.5px;
                width: 302.5px;
              "
            >
              <img
                loading="lazy"
                decoding="async"
                width="410"
                height="410"
                src="/"
                class="attachment-medium_large size-medium_large wp-image-2202"
                alt=""
                srcset="/ 410w, / 300w, / 150w"
                sizes="(max-width: 410px) 100vw, 410px"
                style="display: inline-block; interactivity: inert; list-style-type: none; perspective-origin: 151.25px 151.25px; text-align: center; transform-origin: 151.25px 151.25px; vertical-align: middle; word-break: break-word; block-size: 302.5px; height: 302.5px; inline-size: 302.5px; width: 302.5px"
              />
            </div>
          </div>
          <div
            class="elementor-element elementor-element-66e5738b elementor-widget elementor-widget-theme-post-title elementor-page-title elementor-widget-heading"
            data-id="66e5738b"
            data-element_type="widget"
            data-widget_type="theme-post-title.default"
            style="
              gap: 0px;
              interactivity: inert;
              list-style-type: none;
              perspective-origin: 151.25px 34.1875px;
              position: relative;
              text-align: center;
              transform-origin: 151.25px 34.1914px;
              word-break: break-word;
              block-size: 68.375px;
              inset: 0px;
              height: 68.375px;
              inline-size: 302.5px;
              inset-block: 0px;
              inset-inline: 0px;
              max-inline-size: 100%;
              max-width: 100%;
              min-block-size: auto;
              min-height: auto;
              width: 302.5px;
            "
          >
            <div
              class="elementor-widget-container"
              style="
                interactivity: inert;
                list-style-type: none;
                perspective-origin: 151.25px 26.6875px;
                text-align: center;
                transform-origin: 151.25px 26.6953px;
                transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s, transform 0.4s;
                word-break: break-word;
                block-size: 53.3828px;
                height: 53.3828px;
                inline-size: 302.5px;
                margin-block: 10px 5px;
                margin-bottom: 5px;
                margin-top: 10px;
                width: 302.5px;
              "
            >
              <h2
                class="elementor-heading-title elementor-size-default"
                style="
                  caret-color: rgb(111, 36, 115);
                  color: rgb(111, 36, 115);
                  column-rule-color: rgb(111, 36, 115);
                  interactivity: inert;
                  list-style-type: none;
                  outline-color: rgb(111, 36, 115);
                  perspective-origin: 151.25px 19.1875px;
                  text-align: center;
                  text-decoration: rgb(111, 36, 115);
                  text-emphasis-color: rgb(111, 36, 115);
                  transform-origin: 151.25px 19.1992px;
                  word-break: break-word;
                  -webkit-text-fill-color: rgb(111, 36, 115);
                  -webkit-text-stroke-color: rgb(111, 36, 115);
                  block-size: 38.3906px;
                  border-block-color: rgb(111, 36, 115);
                  border-color: rgb(111, 36, 115);
                  border-inline-color: rgb(111, 36, 115);
                  height: 38.3906px;
                  inline-size: 302.5px;
                  margin-block: 0px;
                  margin-bottom: 0px;
                  margin-top: 0px;
                  width: 302.5px;
                "
              >
                V.O.T.
              </h2>
            </div>
          </div>
          <div
            class="elementor-element elementor-element-36107b0d elementor-widget elementor-widget-theme-post-content"
            data-id="36107b0d"
            data-element_type="widget"
            data-widget_type="theme-post-content.default"
            style="
              caret-color: rgb(127, 127, 127);
              color: rgb(127, 127, 127);
              gap: 0px;
              column-rule-color: rgb(127, 127, 127);
              font-style: italic;
              interactivity: inert;
              list-style-type: none;
              outline-color: rgb(127, 127, 127);
              perspective-origin: 151.25px 34px;
              position: relative;
              text-align: center;
              text-decoration: rgb(127, 127, 127);
              text-emphasis-color: rgb(127, 127, 127);
              transform-origin: 151.25px 34px;
              word-break: break-word;
              -webkit-text-fill-color: rgb(127, 127, 127);
              -webkit-text-stroke-color: rgb(127, 127, 127);
              block-size: 68px;
              border-block-color: rgb(127, 127, 127);
              border-color: rgb(127, 127, 127);
              border-inline-color: rgb(127, 127, 127);
              inset: 0px;
              height: 68px;
              inline-size: 302.5px;
              inset-block: 0px;
              inset-inline: 0px;
              max-inline-size: 100%;
              max-width: 100%;
              min-block-size: auto;
              min-height: auto;
              width: 302.5px;
            "
          >
            <div
              class="elementor-widget-container"
              style="
                caret-color: rgb(127, 127, 127);
                color: rgb(127, 127, 127);
                column-rule-color: rgb(127, 127, 127);
                font-style: italic;
                interactivity: inert;
                list-style-type: none;
                outline-color: rgb(127, 127, 127);
                perspective-origin: 151.25px 34px;
                text-align: center;
                text-decoration: rgb(127, 127, 127);
                text-emphasis-color: rgb(127, 127, 127);
                transform-origin: 151.25px 34px;
                transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s, transform 0.4s;
                word-break: break-word;
                -webkit-text-fill-color: rgb(127, 127, 127);
                -webkit-text-stroke-color: rgb(127, 127, 127);
                block-size: 68px;
                border-block-color: rgb(127, 127, 127);
                border-color: rgb(127, 127, 127);
                border-inline-color: rgb(127, 127, 127);
                height: 68px;
                inline-size: 302.5px;
                width: 302.5px;
              "
            >
              <p
                style="
                  caret-color: rgb(127, 127, 127);
                  color: rgb(127, 127, 127);
                  column-rule-color: rgb(127, 127, 127);
                  font-style: italic;
                  interactivity: inert;
                  list-style-type: none;
                  outline-color: rgb(127, 127, 127);
                  perspective-origin: 151.25px 24px;
                  text-align: center;
                  text-decoration: rgb(127, 127, 127);
                  text-emphasis-color: rgb(127, 127, 127);
                  transform-origin: 151.25px 24px;
                  word-break: break-word;
                  -webkit-text-fill-color: rgb(127, 127, 127);
                  -webkit-text-stroke-color: rgb(127, 127, 127);
                  block-size: 48px;
                  border-block-color: rgb(127, 127, 127);
                  border-color: rgb(127, 127, 127);
                  border-inline-color: rgb(127, 127, 127);
                  height: 48px;
                  inline-size: 302.5px;
                  width: 302.5px;
                "
              >
                Acai, Granola, Raspberry, Mango, Kiwi, Hemp Seeds, Coconut Shavings
              </p>
            </div>
          </div>
        </div>
      </div>
      <style id="loop-4252" style="list-style-type: none">
        .elementor-4252 .elementor-element.elementor-element-1f7adeb5 {
          --display: flex;
          --flex-direction: column;
          --container-widget-width: 100%;
          --container-widget-height: initial;
          --container-widget-flex-grow: 0;
          --container-widget-align-self: initial;
          --flex-wrap-mobile: wrap;
          --padding-top: 0px;
          --padding-bottom: 0px;
          --padding-left: 0px;
          --padding-right: 0px;
        }
        .elementor-4252 .elementor-element.elementor-element-66e5738b > .elementor-widget-container {
          margin: 10px 0px 5px 0px;
        }
        .elementor-4252 .elementor-element.elementor-element-66e5738b {
          text-align: center;
        }
        .elementor-4252 .elementor-element.elementor-element-66e5738b .elementor-heading-title {
          color: var(--e-global-color-primary);
        }
        .elementor-4252 .elementor-element.elementor-element-36107b0d {
          text-align: center;
          color: var(--e-global-color-9fdf91a);
          font-family: "Roboto", Sans-serif;
          font-size: 16px;
          font-weight: normal;
          font-style: italic;
          line-height: 1.5em;
        }
      </style>
      <div
        data-elementor-type="loop-item"
        data-elementor-id="4252"
        class="elementor elementor-4252 swiper-slide e-loop-item e-loop-item-4275 post-4275 menu_item type-menu_item status-publish has-post-thumbnail hentry category-acai-bowls swiper-slide-active"
        data-elementor-post-type="elementor_library"
        role="group"
        aria-roledescription="slide"
        data-custom-edit-handle="1"
        aria-label="1 / 10"
        data-swiper-slide-index="0"
        style="
          flex-shrink: 0;
          list-style-type: none;
          perspective-origin: 151.25px 245.938px;
          position: relative;
          transform-origin: 151.25px 245.949px;
          transition-property: transform;
          block-size: 491.891px;
          inset: 0px;
          height: 491.891px;
          inline-size: 302.5px;
          inset-block: 0px;
          inset-inline: 0px;
          margin-inline-end: 20px;
          margin-right: 20px;
          min-block-size: auto;
          min-height: auto;
          min-inline-size: auto;
          min-width: auto;
          width: 302.5px;
        "
      >
        <div
          data-particle_enable="false"
          data-particle-mobile-disabled="false"
          class="elementor-element elementor-element-1f7adeb5 e-con-full e-flex e-con e-parent e-lazyloaded"
          data-id="1f7adeb5"
          data-element_type="container"
          style="
            gap: 0px;
            display: flex;
            flex-direction: column;
            list-style-type: none;
            perspective-origin: 151.25px 245.938px;
            position: relative;
            transform-origin: 151.25px 245.949px;
            transition: background 0.3s, border 0.3s, box-shadow 0.3s, transform 0.4s;
            word-break: break-word;
            block-size: 491.891px;
            inset: 0px;
            height: 491.891px;
            inline-size: 302.5px;
            inset-block: 0px;
            inset-inline: 0px;
            max-inline-size: 100%;
            max-width: 100%;
            width: 302.5px;
          "
        >
          <div
            class="elementor-element elementor-element-62a12117 elementor-widget elementor-widget-theme-post-featured-image elementor-widget-image"
            data-id="62a12117"
            data-element_type="widget"
            data-widget_type="theme-post-featured-image.default"
            style="
              gap: 0px;
              list-style-type: none;
              perspective-origin: 151.25px 151.25px;
              position: relative;
              text-align: center;
              transform-origin: 151.25px 151.25px;
              word-break: break-word;
              block-size: 302.5px;
              inset: 0px;
              height: 302.5px;
              inline-size: 302.5px;
              inset-block: 0px;
              inset-inline: 0px;
              max-inline-size: 100%;
              max-width: 100%;
              min-block-size: auto;
              min-height: auto;
              width: 302.5px;
            "
          >
            <div
              class="elementor-widget-container"
              style="list-style-type: none; perspective-origin: 151.25px 151.25px; text-align: center; transform-origin: 151.25px 151.25px; transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s, transform 0.4s; word-break: break-word; block-size: 302.5px; height: 302.5px; inline-size: 302.5px; width: 302.5px"
            >
              <img
                loading="lazy"
                decoding="async"
                width="410"
                height="410"
                src="/"
                class="attachment-medium_large size-medium_large wp-image-4259"
                alt=""
                srcset="/ 410w, / 300w, / 150w, / 400w"
                sizes="(max-width: 410px) 100vw, 410px"
                style="display: inline-block; list-style-type: none; perspective-origin: 151.25px 151.25px; text-align: center; transform-origin: 151.25px 151.25px; vertical-align: middle; word-break: break-word; block-size: 302.5px; height: 302.5px; inline-size: 302.5px; width: 302.5px"
              />
            </div>
          </div>
          <div
            class="elementor-element elementor-element-66e5738b elementor-widget elementor-widget-theme-post-title elementor-page-title elementor-widget-heading"
            data-id="66e5738b"
            data-element_type="widget"
            data-widget_type="theme-post-title.default"
            style="
              gap: 0px;
              list-style-type: none;
              perspective-origin: 151.25px 34.1875px;
              position: relative;
              text-align: center;
              transform-origin: 151.25px 34.1914px;
              word-break: break-word;
              block-size: 68.375px;
              inset: 0px;
              height: 68.375px;
              inline-size: 302.5px;
              inset-block: 0px;
              inset-inline: 0px;
              max-inline-size: 100%;
              max-width: 100%;
              min-block-size: auto;
              min-height: auto;
              width: 302.5px;
            "
          >
            <div
              class="elementor-widget-container"
              style="
                list-style-type: none;
                perspective-origin: 151.25px 26.6875px;
                text-align: center;
                transform-origin: 151.25px 26.6953px;
                transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s, transform 0.4s;
                word-break: break-word;
                block-size: 53.3828px;
                height: 53.3828px;
                inline-size: 302.5px;
                margin-block: 10px 5px;
                margin-bottom: 5px;
                margin-top: 10px;
                width: 302.5px;
              "
            >
              <h2
                class="elementor-heading-title elementor-size-default"
                style="
                  caret-color: rgb(111, 36, 115);
                  color: rgb(111, 36, 115);
                  column-rule-color: rgb(111, 36, 115);
                  list-style-type: none;
                  outline-color: rgb(111, 36, 115);
                  perspective-origin: 151.25px 19.1875px;
                  text-align: center;
                  text-decoration: rgb(111, 36, 115);
                  text-emphasis-color: rgb(111, 36, 115);
                  transform-origin: 151.25px 19.1992px;
                  word-break: break-word;
                  -webkit-text-fill-color: rgb(111, 36, 115);
                  -webkit-text-stroke-color: rgb(111, 36, 115);
                  block-size: 38.3906px;
                  border-block-color: rgb(111, 36, 115);
                  border-color: rgb(111, 36, 115);
                  border-inline-color: rgb(111, 36, 115);
                  height: 38.3906px;
                  inline-size: 302.5px;
                  margin-block: 0px;
                  margin-bottom: 0px;
                  margin-top: 0px;
                  width: 302.5px;
                "
              >
                Coco Breeze
              </h2>
            </div>
          </div>
          <div
            class="elementor-element elementor-element-36107b0d elementor-widget elementor-widget-theme-post-content"
            data-id="36107b0d"
            data-element_type="widget"
            data-widget_type="theme-post-content.default"
            style="
              caret-color: rgb(127, 127, 127);
              color: rgb(127, 127, 127);
              gap: 0px;
              column-rule-color: rgb(127, 127, 127);
              font-style: italic;
              list-style-type: none;
              outline-color: rgb(127, 127, 127);
              perspective-origin: 151.25px 56.75px;
              position: relative;
              text-align: center;
              text-decoration: rgb(127, 127, 127);
              text-emphasis-color: rgb(127, 127, 127);
              transform-origin: 151.25px 56.75px;
              word-break: break-word;
              -webkit-text-fill-color: rgb(127, 127, 127);
              -webkit-text-stroke-color: rgb(127, 127, 127);
              block-size: 113.5px;
              border-block-color: rgb(127, 127, 127);
              border-color: rgb(127, 127, 127);
              border-inline-color: rgb(127, 127, 127);
              inset: 0px;
              height: 113.5px;
              inline-size: 302.5px;
              inset-block: 0px;
              inset-inline: 0px;
              max-inline-size: 100%;
              max-width: 100%;
              min-block-size: auto;
              min-height: auto;
              width: 302.5px;
            "
          >
            <div
              class="elementor-widget-container"
              style="
                caret-color: rgb(127, 127, 127);
                color: rgb(127, 127, 127);
                column-rule-color: rgb(127, 127, 127);
                font-style: italic;
                list-style-type: none;
                outline-color: rgb(127, 127, 127);
                perspective-origin: 151.25px 56.75px;
                text-align: center;
                text-decoration: rgb(127, 127, 127);
                text-emphasis-color: rgb(127, 127, 127);
                transform-origin: 151.25px 56.75px;
                transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s, transform 0.4s;
                word-break: break-word;
                -webkit-text-fill-color: rgb(127, 127, 127);
                -webkit-text-stroke-color: rgb(127, 127, 127);
                block-size: 113.5px;
                border-block-color: rgb(127, 127, 127);
                border-color: rgb(127, 127, 127);
                border-inline-color: rgb(127, 127, 127);
                height: 113.5px;
                inline-size: 302.5px;
                width: 302.5px;
              "
            >
              <p
                style="
                  caret-color: rgb(127, 127, 127);
                  color: rgb(127, 127, 127);
                  column-rule-color: rgb(127, 127, 127);
                  font-style: italic;
                  list-style-type: none;
                  outline-color: rgb(127, 127, 127);
                  perspective-origin: 151.25px 24px;
                  text-align: center;
                  text-decoration: rgb(127, 127, 127);
                  text-emphasis-color: rgb(127, 127, 127);
                  transform-origin: 151.25px 24px;
                  word-break: break-word;
                  -webkit-text-fill-color: rgb(127, 127, 127);
                  -webkit-text-stroke-color: rgb(127, 127, 127);
                  block-size: 48px;
                  border-block-color: rgb(127, 127, 127);
                  border-color: rgb(127, 127, 127);
                  border-inline-color: rgb(127, 127, 127);
                  height: 48px;
                  inline-size: 302.5px;
                  width: 302.5px;
                "
              >
                Coconut Sorbet, Granola, Nutella, Strawberry, Mango, Coconut Flakes
              </p>
              <p
                style="
                  caret-color: rgb(127, 127, 127);
                  color: rgb(127, 127, 127);
                  column-rule-color: rgb(127, 127, 127);
                  font-style: italic;
                  list-style-type: none;
                  outline-color: rgb(127, 127, 127);
                  perspective-origin: 151.25px 12.75px;
                  text-align: center;
                  text-decoration: rgb(127, 127, 127);
                  text-emphasis-color: rgb(127, 127, 127);
                  transform-origin: 151.25px 12.75px;
                  word-break: break-word;
                  -webkit-text-fill-color: rgb(127, 127, 127);
                  -webkit-text-stroke-color: rgb(127, 127, 127);
                  block-size: 25.5px;
                  border-block-color: rgb(127, 127, 127);
                  border-color: rgb(127, 127, 127);
                  border-inline-color: rgb(127, 127, 127);
                  height: 25.5px;
                  inline-size: 302.5px;
                  width: 302.5px;
                "
              >
                <em
                  style="
                    font-size: 12px;
                    caret-color: rgb(127, 127, 127);
                    color: rgb(127, 127, 127);
                    column-rule-color: rgb(127, 127, 127);
                    list-style-type: none;
                    outline-color: rgb(127, 127, 127);
                    text-align: center;
                    text-decoration: rgb(127, 127, 127);
                    text-emphasis-color: rgb(127, 127, 127);
                    word-break: break-word;
                    -webkit-text-fill-color: rgb(127, 127, 127);
                    -webkit-text-stroke-color: rgb(127, 127, 127);
                    border-block-color: rgb(127, 127, 127);
                    border-color: rgb(127, 127, 127);
                    border-inline-color: rgb(127, 127, 127);
                  "
                  >*Available at Florida Locations.</em
                >
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        data-elementor-type="loop-item"
        data-elementor-id="4252"
        class="elementor elementor-4252 swiper-slide e-loop-item e-loop-item-4276 post-4276 menu_item type-menu_item status-publish has-post-thumbnail hentry category-acai-bowls swiper-slide-next"
        data-elementor-post-type="elementor_library"
        role="group"
        aria-roledescription="slide"
        data-custom-edit-handle="1"
        aria-label="2 / 10"
        data-swiper-slide-index="1"
        style="
          flex-shrink: 0;
          list-style-type: none;
          perspective-origin: 151.25px 245.938px;
          position: relative;
          transform-origin: 151.25px 245.949px;
          transition-property: transform;
          block-size: 491.891px;
          inset: 0px;
          height: 491.891px;
          inline-size: 302.5px;
          inset-block: 0px;
          inset-inline: 0px;
          margin-inline-end: 20px;
          margin-right: 20px;
          min-block-size: auto;
          min-height: auto;
          min-inline-size: auto;
          min-width: auto;
          width: 302.5px;
        "
      >
        <div
          data-particle_enable="false"
          data-particle-mobile-disabled="false"
          class="elementor-element elementor-element-1f7adeb5 e-con-full e-flex e-con e-parent e-lazyloaded"
          data-id="1f7adeb5"
          data-element_type="container"
          style="
            gap: 0px;
            display: flex;
            flex-direction: column;
            list-style-type: none;
            perspective-origin: 151.25px 245.938px;
            position: relative;
            transform-origin: 151.25px 245.949px;
            transition: background 0.3s, border 0.3s, box-shadow 0.3s, transform 0.4s;
            word-break: break-word;
            block-size: 491.891px;
            inset: 0px;
            height: 491.891px;
            inline-size: 302.5px;
            inset-block: 0px;
            inset-inline: 0px;
            max-inline-size: 100%;
            max-width: 100%;
            width: 302.5px;
          "
        >
          <div
            class="elementor-element elementor-element-62a12117 elementor-widget elementor-widget-theme-post-featured-image elementor-widget-image"
            data-id="62a12117"
            data-element_type="widget"
            data-widget_type="theme-post-featured-image.default"
            style="
              gap: 0px;
              list-style-type: none;
              perspective-origin: 151.25px 151.25px;
              position: relative;
              text-align: center;
              transform-origin: 151.25px 151.25px;
              word-break: break-word;
              block-size: 302.5px;
              inset: 0px;
              height: 302.5px;
              inline-size: 302.5px;
              inset-block: 0px;
              inset-inline: 0px;
              max-inline-size: 100%;
              max-width: 100%;
              min-block-size: auto;
              min-height: auto;
              width: 302.5px;
            "
          >
            <div
              class="elementor-widget-container"
              style="list-style-type: none; perspective-origin: 151.25px 151.25px; text-align: center; transform-origin: 151.25px 151.25px; transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s, transform 0.4s; word-break: break-word; block-size: 302.5px; height: 302.5px; inline-size: 302.5px; width: 302.5px"
            >
              <img
                loading="lazy"
                decoding="async"
                width="410"
                height="410"
                src="/"
                class="attachment-medium_large size-medium_large wp-image-4260"
                alt=""
                srcset="/ 410w, / 300w, / 150w, / 400w"
                sizes="(max-width: 410px) 100vw, 410px"
                style="display: inline-block; list-style-type: none; perspective-origin: 151.25px 151.25px; text-align: center; transform-origin: 151.25px 151.25px; vertical-align: middle; word-break: break-word; block-size: 302.5px; height: 302.5px; inline-size: 302.5px; width: 302.5px"
              />
            </div>
          </div>
          <div
            class="elementor-element elementor-element-66e5738b elementor-widget elementor-widget-theme-post-title elementor-page-title elementor-widget-heading"
            data-id="66e5738b"
            data-element_type="widget"
            data-widget_type="theme-post-title.default"
            style="
              gap: 0px;
              list-style-type: none;
              perspective-origin: 151.25px 34.1875px;
              position: relative;
              text-align: center;
              transform-origin: 151.25px 34.1914px;
              word-break: break-word;
              block-size: 68.375px;
              inset: 0px;
              height: 68.375px;
              inline-size: 302.5px;
              inset-block: 0px;
              inset-inline: 0px;
              max-inline-size: 100%;
              max-width: 100%;
              min-block-size: auto;
              min-height: auto;
              width: 302.5px;
            "
          >
            <div
              class="elementor-widget-container"
              style="
                list-style-type: none;
                perspective-origin: 151.25px 26.6875px;
                text-align: center;
                transform-origin: 151.25px 26.6953px;
                transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s, transform 0.4s;
                word-break: break-word;
                block-size: 53.3828px;
                height: 53.3828px;
                inline-size: 302.5px;
                margin-block: 10px 5px;
                margin-bottom: 5px;
                margin-top: 10px;
                width: 302.5px;
              "
            >
              <h2
                class="elementor-heading-title elementor-size-default"
                style="
                  caret-color: rgb(111, 36, 115);
                  color: rgb(111, 36, 115);
                  column-rule-color: rgb(111, 36, 115);
                  list-style-type: none;
                  outline-color: rgb(111, 36, 115);
                  perspective-origin: 151.25px 19.1875px;
                  text-align: center;
                  text-decoration: rgb(111, 36, 115);
                  text-emphasis-color: rgb(111, 36, 115);
                  transform-origin: 151.25px 19.1992px;
                  word-break: break-word;
                  -webkit-text-fill-color: rgb(111, 36, 115);
                  -webkit-text-stroke-color: rgb(111, 36, 115);
                  block-size: 38.3906px;
                  border-block-color: rgb(111, 36, 115);
                  border-color: rgb(111, 36, 115);
                  border-inline-color: rgb(111, 36, 115);
                  height: 38.3906px;
                  inline-size: 302.5px;
                  margin-block: 0px;
                  margin-bottom: 0px;
                  margin-top: 0px;
                  width: 302.5px;
                "
              >
                Nutella Crunch
              </h2>
            </div>
          </div>
          <div
            class="elementor-element elementor-element-36107b0d elementor-widget elementor-widget-theme-post-content"
            data-id="36107b0d"
            data-element_type="widget"
            data-widget_type="theme-post-content.default"
            style="
              caret-color: rgb(127, 127, 127);
              color: rgb(127, 127, 127);
              gap: 0px;
              column-rule-color: rgb(127, 127, 127);
              font-style: italic;
              list-style-type: none;
              outline-color: rgb(127, 127, 127);
              perspective-origin: 151.25px 34px;
              position: relative;
              text-align: center;
              text-decoration: rgb(127, 127, 127);
              text-emphasis-color: rgb(127, 127, 127);
              transform-origin: 151.25px 34px;
              word-break: break-word;
              -webkit-text-fill-color: rgb(127, 127, 127);
              -webkit-text-stroke-color: rgb(127, 127, 127);
              block-size: 68px;
              border-block-color: rgb(127, 127, 127);
              border-color: rgb(127, 127, 127);
              border-inline-color: rgb(127, 127, 127);
              inset: 0px;
              height: 68px;
              inline-size: 302.5px;
              inset-block: 0px;
              inset-inline: 0px;
              max-inline-size: 100%;
              max-width: 100%;
              min-block-size: auto;
              min-height: auto;
              width: 302.5px;
            "
          >
            <div
              class="elementor-widget-container"
              style="
                caret-color: rgb(127, 127, 127);
                color: rgb(127, 127, 127);
                column-rule-color: rgb(127, 127, 127);
                font-style: italic;
                list-style-type: none;
                outline-color: rgb(127, 127, 127);
                perspective-origin: 151.25px 34px;
                text-align: center;
                text-decoration: rgb(127, 127, 127);
                text-emphasis-color: rgb(127, 127, 127);
                transform-origin: 151.25px 34px;
                transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s, transform 0.4s;
                word-break: break-word;
                -webkit-text-fill-color: rgb(127, 127, 127);
                -webkit-text-stroke-color: rgb(127, 127, 127);
                block-size: 68px;
                border-block-color: rgb(127, 127, 127);
                border-color: rgb(127, 127, 127);
                border-inline-color: rgb(127, 127, 127);
                height: 68px;
                inline-size: 302.5px;
                width: 302.5px;
              "
            >
              <p
                style="
                  caret-color: rgb(127, 127, 127);
                  color: rgb(127, 127, 127);
                  column-rule-color: rgb(127, 127, 127);
                  font-style: italic;
                  list-style-type: none;
                  outline-color: rgb(127, 127, 127);
                  perspective-origin: 151.25px 24px;
                  text-align: center;
                  text-decoration: rgb(127, 127, 127);
                  text-emphasis-color: rgb(127, 127, 127);
                  transform-origin: 151.25px 24px;
                  word-break: break-word;
                  -webkit-text-fill-color: rgb(127, 127, 127);
                  -webkit-text-stroke-color: rgb(127, 127, 127);
                  block-size: 48px;
                  border-block-color: rgb(127, 127, 127);
                  border-color: rgb(127, 127, 127);
                  border-inline-color: rgb(127, 127, 127);
                  height: 48px;
                  inline-size: 302.5px;
                  width: 302.5px;
                "
              >
                Acai, Granola, Nutella, Banana, Strawberry, Chocolate Covered Almonds
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        data-elementor-type="loop-item"
        data-elementor-id="4252"
        class="elementor elementor-4252 swiper-slide e-loop-item e-loop-item-513 post-513 menu_item type-menu_item status-publish has-post-thumbnail hentry category-acai-bowls"
        data-elementor-post-type="elementor_library"
        role="group"
        aria-roledescription="slide"
        data-custom-edit-handle="1"
        aria-label="3 / 10"
        data-swiper-slide-index="2"
        style="
          flex-shrink: 0;
          list-style-type: none;
          perspective-origin: 151.25px 245.938px;
          position: relative;
          transform-origin: 151.25px 245.949px;
          transition-property: transform;
          block-size: 491.891px;
          inset: 0px;
          height: 491.891px;
          inline-size: 302.5px;
          inset-block: 0px;
          inset-inline: 0px;
          margin-inline-end: 20px;
          margin-right: 20px;
          min-block-size: auto;
          min-height: auto;
          min-inline-size: auto;
          min-width: auto;
          width: 302.5px;
        "
      >
        <div
          data-particle_enable="false"
          data-particle-mobile-disabled="false"
          class="elementor-element elementor-element-1f7adeb5 e-con-full e-flex e-con e-parent e-lazyloaded"
          data-id="1f7adeb5"
          data-element_type="container"
          style="
            gap: 0px;
            display: flex;
            flex-direction: column;
            list-style-type: none;
            perspective-origin: 151.25px 245.938px;
            position: relative;
            transform-origin: 151.25px 245.949px;
            transition: background 0.3s, border 0.3s, box-shadow 0.3s, transform 0.4s;
            word-break: break-word;
            block-size: 491.891px;
            inset: 0px;
            height: 491.891px;
            inline-size: 302.5px;
            inset-block: 0px;
            inset-inline: 0px;
            max-inline-size: 100%;
            max-width: 100%;
            width: 302.5px;
          "
        >
          <div
            class="elementor-element elementor-element-62a12117 elementor-widget elementor-widget-theme-post-featured-image elementor-widget-image"
            data-id="62a12117"
            data-element_type="widget"
            data-widget_type="theme-post-featured-image.default"
            style="
              gap: 0px;
              list-style-type: none;
              perspective-origin: 151.25px 151.25px;
              position: relative;
              text-align: center;
              transform-origin: 151.25px 151.25px;
              word-break: break-word;
              block-size: 302.5px;
              inset: 0px;
              height: 302.5px;
              inline-size: 302.5px;
              inset-block: 0px;
              inset-inline: 0px;
              max-inline-size: 100%;
              max-width: 100%;
              min-block-size: auto;
              min-height: auto;
              width: 302.5px;
            "
          >
            <div
              class="elementor-widget-container"
              style="list-style-type: none; perspective-origin: 151.25px 151.25px; text-align: center; transform-origin: 151.25px 151.25px; transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s, transform 0.4s; word-break: break-word; block-size: 302.5px; height: 302.5px; inline-size: 302.5px; width: 302.5px"
            >
              <img
                loading="lazy"
                decoding="async"
                width="410"
                height="410"
                src="/"
                class="attachment-medium_large size-medium_large wp-image-1631"
                alt=""
                srcset="/ 410w, / 300w, / 150w"
                sizes="(max-width: 410px) 100vw, 410px"
                style="display: inline-block; list-style-type: none; perspective-origin: 151.25px 151.25px; text-align: center; transform-origin: 151.25px 151.25px; vertical-align: middle; word-break: break-word; block-size: 302.5px; height: 302.5px; inline-size: 302.5px; width: 302.5px"
              />
            </div>
          </div>
          <div
            class="elementor-element elementor-element-66e5738b elementor-widget elementor-widget-theme-post-title elementor-page-title elementor-widget-heading"
            data-id="66e5738b"
            data-element_type="widget"
            data-widget_type="theme-post-title.default"
            style="
              gap: 0px;
              list-style-type: none;
              perspective-origin: 151.25px 34.1875px;
              position: relative;
              text-align: center;
              transform-origin: 151.25px 34.1914px;
              word-break: break-word;
              block-size: 68.375px;
              inset: 0px;
              height: 68.375px;
              inline-size: 302.5px;
              inset-block: 0px;
              inset-inline: 0px;
              max-inline-size: 100%;
              max-width: 100%;
              min-block-size: auto;
              min-height: auto;
              width: 302.5px;
            "
          >
            <div
              class="elementor-widget-container"
              style="
                list-style-type: none;
                perspective-origin: 151.25px 26.6875px;
                text-align: center;
                transform-origin: 151.25px 26.6953px;
                transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s, transform 0.4s;
                word-break: break-word;
                block-size: 53.3828px;
                height: 53.3828px;
                inline-size: 302.5px;
                margin-block: 10px 5px;
                margin-bottom: 5px;
                margin-top: 10px;
                width: 302.5px;
              "
            >
              <h2
                class="elementor-heading-title elementor-size-default"
                style="
                  caret-color: rgb(111, 36, 115);
                  color: rgb(111, 36, 115);
                  column-rule-color: rgb(111, 36, 115);
                  list-style-type: none;
                  outline-color: rgb(111, 36, 115);
                  perspective-origin: 151.25px 19.1875px;
                  text-align: center;
                  text-decoration: rgb(111, 36, 115);
                  text-emphasis-color: rgb(111, 36, 115);
                  transform-origin: 151.25px 19.1992px;
                  word-break: break-word;
                  -webkit-text-fill-color: rgb(111, 36, 115);
                  -webkit-text-stroke-color: rgb(111, 36, 115);
                  block-size: 38.3906px;
                  border-block-color: rgb(111, 36, 115);
                  border-color: rgb(111, 36, 115);
                  border-inline-color: rgb(111, 36, 115);
                  height: 38.3906px;
                  inline-size: 302.5px;
                  margin-block: 0px;
                  margin-bottom: 0px;
                  margin-top: 0px;
                  width: 302.5px;
                "
              >
                Chronic
              </h2>
            </div>
          </div>
          <div
            class="elementor-element elementor-element-36107b0d elementor-widget elementor-widget-theme-post-content"
            data-id="36107b0d"
            data-element_type="widget"
            data-widget_type="theme-post-content.default"
            style="
              caret-color: rgb(127, 127, 127);
              color: rgb(127, 127, 127);
              gap: 0px;
              column-rule-color: rgb(127, 127, 127);
              font-style: italic;
              list-style-type: none;
              outline-color: rgb(127, 127, 127);
              perspective-origin: 151.25px 34px;
              position: relative;
              text-align: center;
              text-decoration: rgb(127, 127, 127);
              text-emphasis-color: rgb(127, 127, 127);
              transform-origin: 151.25px 34px;
              word-break: break-word;
              -webkit-text-fill-color: rgb(127, 127, 127);
              -webkit-text-stroke-color: rgb(127, 127, 127);
              block-size: 68px;
              border-block-color: rgb(127, 127, 127);
              border-color: rgb(127, 127, 127);
              border-inline-color: rgb(127, 127, 127);
              inset: 0px;
              height: 68px;
              inline-size: 302.5px;
              inset-block: 0px;
              inset-inline: 0px;
              max-inline-size: 100%;
              max-width: 100%;
              min-block-size: auto;
              min-height: auto;
              width: 302.5px;
            "
          >
            <div
              class="elementor-widget-container"
              style="
                caret-color: rgb(127, 127, 127);
                color: rgb(127, 127, 127);
                column-rule-color: rgb(127, 127, 127);
                font-style: italic;
                list-style-type: none;
                outline-color: rgb(127, 127, 127);
                perspective-origin: 151.25px 34px;
                text-align: center;
                text-decoration: rgb(127, 127, 127);
                text-emphasis-color: rgb(127, 127, 127);
                transform-origin: 151.25px 34px;
                transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s, transform 0.4s;
                word-break: break-word;
                -webkit-text-fill-color: rgb(127, 127, 127);
                -webkit-text-stroke-color: rgb(127, 127, 127);
                block-size: 68px;
                border-block-color: rgb(127, 127, 127);
                border-color: rgb(127, 127, 127);
                border-inline-color: rgb(127, 127, 127);
                height: 68px;
                inline-size: 302.5px;
                width: 302.5px;
              "
            >
              <p
                style="
                  caret-color: rgb(127, 127, 127);
                  color: rgb(127, 127, 127);
                  column-rule-color: rgb(127, 127, 127);
                  font-style: italic;
                  list-style-type: none;
                  outline-color: rgb(127, 127, 127);
                  perspective-origin: 151.25px 24px;
                  text-align: center;
                  text-decoration: rgb(127, 127, 127);
                  text-emphasis-color: rgb(127, 127, 127);
                  transform-origin: 151.25px 24px;
                  word-break: break-word;
                  -webkit-text-fill-color: rgb(127, 127, 127);
                  -webkit-text-stroke-color: rgb(127, 127, 127);
                  block-size: 48px;
                  border-block-color: rgb(127, 127, 127);
                  border-color: rgb(127, 127, 127);
                  border-inline-color: rgb(127, 127, 127);
                  height: 48px;
                  inline-size: 302.5px;
                  width: 302.5px;
                "
              >
                Acai, Granola, Banana, Strawberry, Kiwi, Pineapple, Coconut Shavings, Honey
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        data-elementor-type="loop-item"
        data-elementor-id="4252"
        class="elementor elementor-4252 swiper-slide e-loop-item e-loop-item-539 post-539 menu_item type-menu_item status-publish has-post-thumbnail hentry category-acai-bowls"
        data-elementor-post-type="elementor_library"
        role="group"
        aria-roledescription="slide"
        data-custom-edit-handle="1"
        aria-label="4 / 10"
        data-swiper-slide-index="3"
        style="
          flex-shrink: 0;
          list-style-type: none;
          perspective-origin: 151.25px 245.938px;
          position: relative;
          transform-origin: 151.25px 245.949px;
          transition-property: transform;
          block-size: 491.891px;
          inset: 0px;
          height: 491.891px;
          inline-size: 302.5px;
          inset-block: 0px;
          inset-inline: 0px;
          margin-inline-end: 20px;
          margin-right: 20px;
          min-block-size: auto;
          min-height: auto;
          min-inline-size: auto;
          min-width: auto;
          width: 302.5px;
        "
      >
        <div
          data-particle_enable="false"
          data-particle-mobile-disabled="false"
          class="elementor-element elementor-element-1f7adeb5 e-con-full e-flex e-con e-parent e-lazyloaded"
          data-id="1f7adeb5"
          data-element_type="container"
          style="
            gap: 0px;
            display: flex;
            flex-direction: column;
            list-style-type: none;
            perspective-origin: 151.25px 245.938px;
            position: relative;
            transform-origin: 151.25px 245.949px;
            transition: background 0.3s, border 0.3s, box-shadow 0.3s, transform 0.4s;
            word-break: break-word;
            block-size: 491.891px;
            inset: 0px;
            height: 491.891px;
            inline-size: 302.5px;
            inset-block: 0px;
            inset-inline: 0px;
            max-inline-size: 100%;
            max-width: 100%;
            width: 302.5px;
          "
        >
          <div
            class="elementor-element elementor-element-62a12117 elementor-widget elementor-widget-theme-post-featured-image elementor-widget-image"
            data-id="62a12117"
            data-element_type="widget"
            data-widget_type="theme-post-featured-image.default"
            style="
              gap: 0px;
              list-style-type: none;
              perspective-origin: 151.25px 151.25px;
              position: relative;
              text-align: center;
              transform-origin: 151.25px 151.25px;
              word-break: break-word;
              block-size: 302.5px;
              inset: 0px;
              height: 302.5px;
              inline-size: 302.5px;
              inset-block: 0px;
              inset-inline: 0px;
              max-inline-size: 100%;
              max-width: 100%;
              min-block-size: auto;
              min-height: auto;
              width: 302.5px;
            "
          >
            <div
              class="elementor-widget-container"
              style="list-style-type: none; perspective-origin: 151.25px 151.25px; text-align: center; transform-origin: 151.25px 151.25px; transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s, transform 0.4s; word-break: break-word; block-size: 302.5px; height: 302.5px; inline-size: 302.5px; width: 302.5px"
            >
              <img
                loading="lazy"
                decoding="async"
                width="410"
                height="410"
                src="/"
                class="attachment-medium_large size-medium_large wp-image-1541"
                alt=""
                srcset="/ 410w, / 300w, / 150w"
                sizes="(max-width: 410px) 100vw, 410px"
                style="display: inline-block; list-style-type: none; perspective-origin: 151.25px 151.25px; text-align: center; transform-origin: 151.25px 151.25px; vertical-align: middle; word-break: break-word; block-size: 302.5px; height: 302.5px; inline-size: 302.5px; width: 302.5px"
              />
            </div>
          </div>
          <div
            class="elementor-element elementor-element-66e5738b elementor-widget elementor-widget-theme-post-title elementor-page-title elementor-widget-heading"
            data-id="66e5738b"
            data-element_type="widget"
            data-widget_type="theme-post-title.default"
            style="
              gap: 0px;
              list-style-type: none;
              perspective-origin: 151.25px 34.1875px;
              position: relative;
              text-align: center;
              transform-origin: 151.25px 34.1914px;
              word-break: break-word;
              block-size: 68.375px;
              inset: 0px;
              height: 68.375px;
              inline-size: 302.5px;
              inset-block: 0px;
              inset-inline: 0px;
              max-inline-size: 100%;
              max-width: 100%;
              min-block-size: auto;
              min-height: auto;
              width: 302.5px;
            "
          >
            <div
              class="elementor-widget-container"
              style="
                list-style-type: none;
                perspective-origin: 151.25px 26.6875px;
                text-align: center;
                transform-origin: 151.25px 26.6953px;
                transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s, transform 0.4s;
                word-break: break-word;
                block-size: 53.3828px;
                height: 53.3828px;
                inline-size: 302.5px;
                margin-block: 10px 5px;
                margin-bottom: 5px;
                margin-top: 10px;
                width: 302.5px;
              "
            >
              <h2
                class="elementor-heading-title elementor-size-default"
                style="
                  caret-color: rgb(111, 36, 115);
                  color: rgb(111, 36, 115);
                  column-rule-color: rgb(111, 36, 115);
                  list-style-type: none;
                  outline-color: rgb(111, 36, 115);
                  perspective-origin: 151.25px 19.1875px;
                  text-align: center;
                  text-decoration: rgb(111, 36, 115);
                  text-emphasis-color: rgb(111, 36, 115);
                  transform-origin: 151.25px 19.1992px;
                  word-break: break-word;
                  -webkit-text-fill-color: rgb(111, 36, 115);
                  -webkit-text-stroke-color: rgb(111, 36, 115);
                  block-size: 38.3906px;
                  border-block-color: rgb(111, 36, 115);
                  border-color: rgb(111, 36, 115);
                  border-inline-color: rgb(111, 36, 115);
                  height: 38.3906px;
                  inline-size: 302.5px;
                  margin-block: 0px;
                  margin-bottom: 0px;
                  margin-top: 0px;
                  width: 302.5px;
                "
              >
                Estes Bowl
              </h2>
            </div>
          </div>
          <div
            class="elementor-element elementor-element-36107b0d elementor-widget elementor-widget-theme-post-content"
            data-id="36107b0d"
            data-element_type="widget"
            data-widget_type="theme-post-content.default"
            style="
              caret-color: rgb(127, 127, 127);
              color: rgb(127, 127, 127);
              gap: 0px;
              column-rule-color: rgb(127, 127, 127);
              font-style: italic;
              list-style-type: none;
              outline-color: rgb(127, 127, 127);
              perspective-origin: 151.25px 46px;
              position: relative;
              text-align: center;
              text-decoration: rgb(127, 127, 127);
              text-emphasis-color: rgb(127, 127, 127);
              transform-origin: 151.25px 46px;
              word-break: break-word;
              -webkit-text-fill-color: rgb(127, 127, 127);
              -webkit-text-stroke-color: rgb(127, 127, 127);
              block-size: 92px;
              border-block-color: rgb(127, 127, 127);
              border-color: rgb(127, 127, 127);
              border-inline-color: rgb(127, 127, 127);
              inset: 0px;
              height: 92px;
              inline-size: 302.5px;
              inset-block: 0px;
              inset-inline: 0px;
              max-inline-size: 100%;
              max-width: 100%;
              min-block-size: auto;
              min-height: auto;
              width: 302.5px;
            "
          >
            <div
              class="elementor-widget-container"
              style="
                caret-color: rgb(127, 127, 127);
                color: rgb(127, 127, 127);
                column-rule-color: rgb(127, 127, 127);
                font-style: italic;
                list-style-type: none;
                outline-color: rgb(127, 127, 127);
                perspective-origin: 151.25px 46px;
                text-align: center;
                text-decoration: rgb(127, 127, 127);
                text-emphasis-color: rgb(127, 127, 127);
                transform-origin: 151.25px 46px;
                transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s, transform 0.4s;
                word-break: break-word;
                -webkit-text-fill-color: rgb(127, 127, 127);
                -webkit-text-stroke-color: rgb(127, 127, 127);
                block-size: 92px;
                border-block-color: rgb(127, 127, 127);
                border-color: rgb(127, 127, 127);
                border-inline-color: rgb(127, 127, 127);
                height: 92px;
                inline-size: 302.5px;
                width: 302.5px;
              "
            >
              <p
                style="
                  caret-color: rgb(127, 127, 127);
                  color: rgb(127, 127, 127);
                  column-rule-color: rgb(127, 127, 127);
                  font-style: italic;
                  list-style-type: none;
                  outline-color: rgb(127, 127, 127);
                  perspective-origin: 151.25px 36px;
                  text-align: center;
                  text-decoration: rgb(127, 127, 127);
                  text-emphasis-color: rgb(127, 127, 127);
                  transform-origin: 151.25px 36px;
                  word-break: break-word;
                  -webkit-text-fill-color: rgb(127, 127, 127);
                  -webkit-text-stroke-color: rgb(127, 127, 127);
                  block-size: 72px;
                  border-block-color: rgb(127, 127, 127);
                  border-color: rgb(127, 127, 127);
                  border-inline-color: rgb(127, 127, 127);
                  height: 72px;
                  inline-size: 302.5px;
                  width: 302.5px;
                "
              >
                Acai, Granola, Peanut Butter, Strawberry, Green Apple, Chocolate Covered Almonds, Honey
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        data-elementor-type="loop-item"
        data-elementor-id="4252"
        class="elementor elementor-4252 swiper-slide e-loop-item e-loop-item-518 post-518 menu_item type-menu_item status-publish has-post-thumbnail hentry category-acai-bowls"
        data-elementor-post-type="elementor_library"
        role="group"
        aria-roledescription="slide"
        data-custom-edit-handle="1"
        aria-label="5 / 10"
        data-swiper-slide-index="4"
        style="
          flex-shrink: 0;
          list-style-type: none;
          perspective-origin: 151.25px 245.938px;
          position: relative;
          transform-origin: 151.25px 245.949px;
          transition-property: transform;
          block-size: 491.891px;
          inset: 0px;
          height: 491.891px;
          inline-size: 302.5px;
          inset-block: 0px;
          inset-inline: 0px;
          margin-inline-end: 20px;
          margin-right: 20px;
          min-block-size: auto;
          min-height: auto;
          min-inline-size: auto;
          min-width: auto;
          width: 302.5px;
        "
      >
        <div
          data-particle_enable="false"
          data-particle-mobile-disabled="false"
          class="elementor-element elementor-element-1f7adeb5 e-con-full e-flex e-con e-parent"
          data-id="1f7adeb5"
          data-element_type="container"
          style="
            gap: 0px;
            display: flex;
            flex-direction: column;
            list-style-type: none;
            perspective-origin: 151.25px 245.938px;
            position: relative;
            transform-origin: 151.25px 245.949px;
            transition: background 0.3s, border 0.3s, box-shadow 0.3s, transform 0.4s;
            word-break: break-word;
            block-size: 491.891px;
            inset: 0px;
            height: 491.891px;
            inline-size: 302.5px;
            inset-block: 0px;
            inset-inline: 0px;
            max-inline-size: 100%;
            max-width: 100%;
            width: 302.5px;
          "
        >
          <div
            class="elementor-element elementor-element-62a12117 elementor-widget elementor-widget-theme-post-featured-image elementor-widget-image"
            data-id="62a12117"
            data-element_type="widget"
            data-widget_type="theme-post-featured-image.default"
            style="
              gap: 0px;
              list-style-type: none;
              perspective-origin: 151.25px 151.25px;
              position: relative;
              text-align: center;
              transform-origin: 151.25px 151.25px;
              word-break: break-word;
              block-size: 302.5px;
              inset: 0px;
              height: 302.5px;
              inline-size: 302.5px;
              inset-block: 0px;
              inset-inline: 0px;
              max-inline-size: 100%;
              max-width: 100%;
              min-block-size: auto;
              min-height: auto;
              width: 302.5px;
            "
          >
            <div
              class="elementor-widget-container"
              style="list-style-type: none; perspective-origin: 151.25px 151.25px; text-align: center; transform-origin: 151.25px 151.25px; transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s, transform 0.4s; word-break: break-word; block-size: 302.5px; height: 302.5px; inline-size: 302.5px; width: 302.5px"
            >
              <img
                loading="lazy"
                decoding="async"
                width="410"
                height="410"
                src="/"
                class="attachment-medium_large size-medium_large wp-image-1552"
                alt=""
                srcset="/ 410w, / 300w, / 150w"
                sizes="(max-width: 410px) 100vw, 410px"
                style="display: inline-block; list-style-type: none; perspective-origin: 151.25px 151.25px; text-align: center; transform-origin: 151.25px 151.25px; vertical-align: middle; word-break: break-word; block-size: 302.5px; height: 302.5px; inline-size: 302.5px; width: 302.5px"
              />
            </div>
          </div>
          <div
            class="elementor-element elementor-element-66e5738b elementor-widget elementor-widget-theme-post-title elementor-page-title elementor-widget-heading"
            data-id="66e5738b"
            data-element_type="widget"
            data-widget_type="theme-post-title.default"
            style="
              gap: 0px;
              list-style-type: none;
              perspective-origin: 151.25px 34.1875px;
              position: relative;
              text-align: center;
              transform-origin: 151.25px 34.1914px;
              word-break: break-word;
              block-size: 68.375px;
              inset: 0px;
              height: 68.375px;
              inline-size: 302.5px;
              inset-block: 0px;
              inset-inline: 0px;
              max-inline-size: 100%;
              max-width: 100%;
              min-block-size: auto;
              min-height: auto;
              width: 302.5px;
            "
          >
            <div
              class="elementor-widget-container"
              style="
                list-style-type: none;
                perspective-origin: 151.25px 26.6875px;
                text-align: center;
                transform-origin: 151.25px 26.6953px;
                transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s, transform 0.4s;
                word-break: break-word;
                block-size: 53.3828px;
                height: 53.3828px;
                inline-size: 302.5px;
                margin-block: 10px 5px;
                margin-bottom: 5px;
                margin-top: 10px;
                width: 302.5px;
              "
            >
              <h2
                class="elementor-heading-title elementor-size-default"
                style="
                  caret-color: rgb(111, 36, 115);
                  color: rgb(111, 36, 115);
                  column-rule-color: rgb(111, 36, 115);
                  list-style-type: none;
                  outline-color: rgb(111, 36, 115);
                  perspective-origin: 151.25px 19.1875px;
                  text-align: center;
                  text-decoration: rgb(111, 36, 115);
                  text-emphasis-color: rgb(111, 36, 115);
                  transform-origin: 151.25px 19.1992px;
                  word-break: break-word;
                  -webkit-text-fill-color: rgb(111, 36, 115);
                  -webkit-text-stroke-color: rgb(111, 36, 115);
                  block-size: 38.3906px;
                  border-block-color: rgb(111, 36, 115);
                  border-color: rgb(111, 36, 115);
                  border-inline-color: rgb(111, 36, 115);
                  height: 38.3906px;
                  inline-size: 302.5px;
                  margin-block: 0px;
                  margin-bottom: 0px;
                  margin-top: 0px;
                  width: 302.5px;
                "
              >
                The Local
              </h2>
            </div>
          </div>
          <div
            class="elementor-element elementor-element-36107b0d elementor-widget elementor-widget-theme-post-content"
            data-id="36107b0d"
            data-element_type="widget"
            data-widget_type="theme-post-content.default"
            style="
              caret-color: rgb(127, 127, 127);
              color: rgb(127, 127, 127);
              gap: 0px;
              column-rule-color: rgb(127, 127, 127);
              font-style: italic;
              list-style-type: none;
              outline-color: rgb(127, 127, 127);
              perspective-origin: 151.25px 34px;
              position: relative;
              text-align: center;
              text-decoration: rgb(127, 127, 127);
              text-emphasis-color: rgb(127, 127, 127);
              transform-origin: 151.25px 34px;
              word-break: break-word;
              -webkit-text-fill-color: rgb(127, 127, 127);
              -webkit-text-stroke-color: rgb(127, 127, 127);
              block-size: 68px;
              border-block-color: rgb(127, 127, 127);
              border-color: rgb(127, 127, 127);
              border-inline-color: rgb(127, 127, 127);
              inset: 0px;
              height: 68px;
              inline-size: 302.5px;
              inset-block: 0px;
              inset-inline: 0px;
              max-inline-size: 100%;
              max-width: 100%;
              min-block-size: auto;
              min-height: auto;
              width: 302.5px;
            "
          >
            <div
              class="elementor-widget-container"
              style="
                caret-color: rgb(127, 127, 127);
                color: rgb(127, 127, 127);
                column-rule-color: rgb(127, 127, 127);
                font-style: italic;
                list-style-type: none;
                outline-color: rgb(127, 127, 127);
                perspective-origin: 151.25px 34px;
                text-align: center;
                text-decoration: rgb(127, 127, 127);
                text-emphasis-color: rgb(127, 127, 127);
                transform-origin: 151.25px 34px;
                transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s, transform 0.4s;
                word-break: break-word;
                -webkit-text-fill-color: rgb(127, 127, 127);
                -webkit-text-stroke-color: rgb(127, 127, 127);
                block-size: 68px;
                border-block-color: rgb(127, 127, 127);
                border-color: rgb(127, 127, 127);
                border-inline-color: rgb(127, 127, 127);
                height: 68px;
                inline-size: 302.5px;
                width: 302.5px;
              "
            >
              <p
                style="
                  caret-color: rgb(127, 127, 127);
                  color: rgb(127, 127, 127);
                  column-rule-color: rgb(127, 127, 127);
                  font-style: italic;
                  list-style-type: none;
                  outline-color: rgb(127, 127, 127);
                  perspective-origin: 151.25px 24px;
                  text-align: center;
                  text-decoration: rgb(127, 127, 127);
                  text-emphasis-color: rgb(127, 127, 127);
                  transform-origin: 151.25px 24px;
                  word-break: break-word;
                  -webkit-text-fill-color: rgb(127, 127, 127);
                  -webkit-text-stroke-color: rgb(127, 127, 127);
                  block-size: 48px;
                  border-block-color: rgb(127, 127, 127);
                  border-color: rgb(127, 127, 127);
                  border-inline-color: rgb(127, 127, 127);
                  height: 48px;
                  inline-size: 302.5px;
                  width: 302.5px;
                "
              >
                Acai, Granola, Banana, Strawberry, Blueberry, Honey
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        data-elementor-type="loop-item"
        data-elementor-id="4252"
        class="elementor elementor-4252 swiper-slide e-loop-item e-loop-item-540 post-540 menu_item type-menu_item status-publish has-post-thumbnail hentry category-acai-bowls"
        data-elementor-post-type="elementor_library"
        role="group"
        aria-roledescription="slide"
        data-custom-edit-handle="1"
        aria-label="6 / 10"
        data-swiper-slide-index="5"
        style="
          flex-shrink: 0;
          list-style-type: none;
          perspective-origin: 151.25px 253.438px;
          position: relative;
          transform-origin: 151.25px 253.438px;
          transition-property: transform;
          block-size: 506.875px;
          inset: 0px;
          height: 506.875px;
          inline-size: 302.5px;
          inset-block: 0px;
          inset-inline: 0px;
          margin-inline-end: 20px;
          margin-right: 20px;
          min-block-size: auto;
          min-height: auto;
          min-inline-size: auto;
          min-width: auto;
          width: 302.5px;
        "
      >
        <div
          data-particle_enable="false"
          data-particle-mobile-disabled="false"
          class="elementor-element elementor-element-1f7adeb5 e-con-full e-flex e-con e-parent"
          data-id="1f7adeb5"
          data-element_type="container"
          style="
            gap: 0px;
            display: flex;
            flex-direction: column;
            list-style-type: none;
            perspective-origin: 151.25px 253.438px;
            position: relative;
            transform-origin: 151.25px 253.438px;
            transition: background 0.3s, border 0.3s, box-shadow 0.3s, transform 0.4s;
            word-break: break-word;
            block-size: 506.875px;
            inset: 0px;
            height: 506.875px;
            inline-size: 302.5px;
            inset-block: 0px;
            inset-inline: 0px;
            max-inline-size: 100%;
            max-width: 100%;
            width: 302.5px;
          "
        >
          <div
            class="elementor-element elementor-element-62a12117 elementor-widget elementor-widget-theme-post-featured-image elementor-widget-image"
            data-id="62a12117"
            data-element_type="widget"
            data-widget_type="theme-post-featured-image.default"
            style="
              gap: 0px;
              list-style-type: none;
              perspective-origin: 151.25px 151.25px;
              position: relative;
              text-align: center;
              transform-origin: 151.25px 151.25px;
              word-break: break-word;
              block-size: 302.5px;
              inset: 0px;
              height: 302.5px;
              inline-size: 302.5px;
              inset-block: 0px;
              inset-inline: 0px;
              max-inline-size: 100%;
              max-width: 100%;
              min-block-size: auto;
              min-height: auto;
              width: 302.5px;
            "
          >
            <div
              class="elementor-widget-container"
              style="list-style-type: none; perspective-origin: 151.25px 151.25px; text-align: center; transform-origin: 151.25px 151.25px; transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s, transform 0.4s; word-break: break-word; block-size: 302.5px; height: 302.5px; inline-size: 302.5px; width: 302.5px"
            >
              <img
                loading="lazy"
                decoding="async"
                width="410"
                height="410"
                src="/"
                class="attachment-medium_large size-medium_large wp-image-1550"
                alt=""
                srcset="/ 410w, / 300w, / 150w"
                sizes="(max-width: 410px) 100vw, 410px"
                style="display: inline-block; list-style-type: none; perspective-origin: 151.25px 151.25px; text-align: center; transform-origin: 151.25px 151.25px; vertical-align: middle; word-break: break-word; block-size: 302.5px; height: 302.5px; inline-size: 302.5px; width: 302.5px"
              />
            </div>
          </div>
          <div
            class="elementor-element elementor-element-66e5738b elementor-widget elementor-widget-theme-post-title elementor-page-title elementor-widget-heading"
            data-id="66e5738b"
            data-element_type="widget"
            data-widget_type="theme-post-title.default"
            style="
              gap: 0px;
              list-style-type: none;
              perspective-origin: 151.25px 34.1875px;
              position: relative;
              text-align: center;
              transform-origin: 151.25px 34.1914px;
              word-break: break-word;
              block-size: 68.375px;
              inset: 0px;
              height: 68.375px;
              inline-size: 302.5px;
              inset-block: 0px;
              inset-inline: 0px;
              max-inline-size: 100%;
              max-width: 100%;
              min-block-size: auto;
              min-height: auto;
              width: 302.5px;
            "
          >
            <div
              class="elementor-widget-container"
              style="
                list-style-type: none;
                perspective-origin: 151.25px 26.6875px;
                text-align: center;
                transform-origin: 151.25px 26.6953px;
                transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s, transform 0.4s;
                word-break: break-word;
                block-size: 53.3828px;
                height: 53.3828px;
                inline-size: 302.5px;
                margin-block: 10px 5px;
                margin-bottom: 5px;
                margin-top: 10px;
                width: 302.5px;
              "
            >
              <h2
                class="elementor-heading-title elementor-size-default"
                style="
                  caret-color: rgb(111, 36, 115);
                  color: rgb(111, 36, 115);
                  column-rule-color: rgb(111, 36, 115);
                  list-style-type: none;
                  outline-color: rgb(111, 36, 115);
                  perspective-origin: 151.25px 19.1875px;
                  text-align: center;
                  text-decoration: rgb(111, 36, 115);
                  text-emphasis-color: rgb(111, 36, 115);
                  transform-origin: 151.25px 19.1992px;
                  word-break: break-word;
                  -webkit-text-fill-color: rgb(111, 36, 115);
                  -webkit-text-stroke-color: rgb(111, 36, 115);
                  block-size: 38.3906px;
                  border-block-color: rgb(111, 36, 115);
                  border-color: rgb(111, 36, 115);
                  border-inline-color: rgb(111, 36, 115);
                  height: 38.3906px;
                  inline-size: 302.5px;
                  margin-block: 0px;
                  margin-bottom: 0px;
                  margin-top: 0px;
                  width: 302.5px;
                "
              >
                The Calypso
              </h2>
            </div>
          </div>
          <div
            class="elementor-element elementor-element-36107b0d elementor-widget elementor-widget-theme-post-content"
            data-id="36107b0d"
            data-element_type="widget"
            data-widget_type="theme-post-content.default"
            style="
              caret-color: rgb(127, 127, 127);
              color: rgb(127, 127, 127);
              gap: 0px;
              column-rule-color: rgb(127, 127, 127);
              font-style: italic;
              list-style-type: none;
              outline-color: rgb(127, 127, 127);
              perspective-origin: 151.25px 68px;
              position: relative;
              text-align: center;
              text-decoration: rgb(127, 127, 127);
              text-emphasis-color: rgb(127, 127, 127);
              transform-origin: 151.25px 68px;
              word-break: break-word;
              -webkit-text-fill-color: rgb(127, 127, 127);
              -webkit-text-stroke-color: rgb(127, 127, 127);
              block-size: 136px;
              border-block-color: rgb(127, 127, 127);
              border-color: rgb(127, 127, 127);
              border-inline-color: rgb(127, 127, 127);
              inset: 0px;
              height: 136px;
              inline-size: 302.5px;
              inset-block: 0px;
              inset-inline: 0px;
              max-inline-size: 100%;
              max-width: 100%;
              min-block-size: auto;
              min-height: auto;
              width: 302.5px;
            "
          >
            <div
              class="elementor-widget-container"
              style="
                caret-color: rgb(127, 127, 127);
                color: rgb(127, 127, 127);
                column-rule-color: rgb(127, 127, 127);
                font-style: italic;
                list-style-type: none;
                outline-color: rgb(127, 127, 127);
                perspective-origin: 151.25px 68px;
                text-align: center;
                text-decoration: rgb(127, 127, 127);
                text-emphasis-color: rgb(127, 127, 127);
                transform-origin: 151.25px 68px;
                transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s, transform 0.4s;
                word-break: break-word;
                -webkit-text-fill-color: rgb(127, 127, 127);
                -webkit-text-stroke-color: rgb(127, 127, 127);
                block-size: 136px;
                border-block-color: rgb(127, 127, 127);
                border-color: rgb(127, 127, 127);
                border-inline-color: rgb(127, 127, 127);
                height: 136px;
                inline-size: 302.5px;
                width: 302.5px;
              "
            >
              <p
                style="
                  caret-color: rgb(127, 127, 127);
                  color: rgb(127, 127, 127);
                  column-rule-color: rgb(127, 127, 127);
                  font-style: italic;
                  list-style-type: none;
                  outline-color: rgb(127, 127, 127);
                  perspective-origin: 151.25px 36px;
                  text-align: center;
                  text-decoration: rgb(127, 127, 127);
                  text-emphasis-color: rgb(127, 127, 127);
                  transform-origin: 151.25px 36px;
                  word-break: break-word;
                  -webkit-text-fill-color: rgb(127, 127, 127);
                  -webkit-text-stroke-color: rgb(127, 127, 127);
                  block-size: 72px;
                  border-block-color: rgb(127, 127, 127);
                  border-color: rgb(127, 127, 127);
                  border-inline-color: rgb(127, 127, 127);
                  height: 72px;
                  inline-size: 302.5px;
                  width: 302.5px;
                "
              >
                Greek Yogurt, Granola, Almond Butter, Banana, Raspberry, Blueberry, Pineapple, Chia Seeds, Hemp Seeds
              </p>
              <p
                style="
                  caret-color: rgb(127, 127, 127);
                  color: rgb(127, 127, 127);
                  column-rule-color: rgb(127, 127, 127);
                  font-style: italic;
                  list-style-type: none;
                  outline-color: rgb(127, 127, 127);
                  perspective-origin: 151.25px 12px;
                  text-align: center;
                  text-decoration: rgb(127, 127, 127);
                  text-emphasis-color: rgb(127, 127, 127);
                  transform-origin: 151.25px 12px;
                  word-break: break-word;
                  -webkit-text-fill-color: rgb(127, 127, 127);
                  -webkit-text-stroke-color: rgb(127, 127, 127);
                  block-size: 24px;
                  border-block-color: rgb(127, 127, 127);
                  border-color: rgb(127, 127, 127);
                  border-inline-color: rgb(127, 127, 127);
                  height: 24px;
                  inline-size: 302.5px;
                  width: 302.5px;
                "
              >
                &nbsp;
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        data-elementor-type="loop-item"
        data-elementor-id="4252"
        class="elementor elementor-4252 swiper-slide e-loop-item e-loop-item-538 post-538 menu_item type-menu_item status-publish has-post-thumbnail hentry category-acai-bowls"
        data-elementor-post-type="elementor_library"
        role="group"
        aria-roledescription="slide"
        data-custom-edit-handle="1"
        aria-label="7 / 10"
        data-swiper-slide-index="6"
        style="
          flex-shrink: 0;
          list-style-type: none;
          perspective-origin: 151.25px 253.438px;
          position: relative;
          transform-origin: 151.25px 253.438px;
          transition-property: transform;
          block-size: 506.875px;
          inset: 0px;
          height: 506.875px;
          inline-size: 302.5px;
          inset-block: 0px;
          inset-inline: 0px;
          margin-inline-end: 20px;
          margin-right: 20px;
          min-block-size: auto;
          min-height: auto;
          min-inline-size: auto;
          min-width: auto;
          width: 302.5px;
        "
      >
        <div
          data-particle_enable="false"
          data-particle-mobile-disabled="false"
          class="elementor-element elementor-element-1f7adeb5 e-con-full e-flex e-con e-parent"
          data-id="1f7adeb5"
          data-element_type="container"
          style="
            gap: 0px;
            display: flex;
            flex-direction: column;
            list-style-type: none;
            perspective-origin: 151.25px 253.438px;
            position: relative;
            transform-origin: 151.25px 253.438px;
            transition: background 0.3s, border 0.3s, box-shadow 0.3s, transform 0.4s;
            word-break: break-word;
            block-size: 506.875px;
            inset: 0px;
            height: 506.875px;
            inline-size: 302.5px;
            inset-block: 0px;
            inset-inline: 0px;
            max-inline-size: 100%;
            max-width: 100%;
            width: 302.5px;
          "
        >
          <div
            class="elementor-element elementor-element-62a12117 elementor-widget elementor-widget-theme-post-featured-image elementor-widget-image"
            data-id="62a12117"
            data-element_type="widget"
            data-widget_type="theme-post-featured-image.default"
            style="
              gap: 0px;
              list-style-type: none;
              perspective-origin: 151.25px 151.25px;
              position: relative;
              text-align: center;
              transform-origin: 151.25px 151.25px;
              word-break: break-word;
              block-size: 302.5px;
              inset: 0px;
              height: 302.5px;
              inline-size: 302.5px;
              inset-block: 0px;
              inset-inline: 0px;
              max-inline-size: 100%;
              max-width: 100%;
              min-block-size: auto;
              min-height: auto;
              width: 302.5px;
            "
          >
            <div
              class="elementor-widget-container"
              style="list-style-type: none; perspective-origin: 151.25px 151.25px; text-align: center; transform-origin: 151.25px 151.25px; transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s, transform 0.4s; word-break: break-word; block-size: 302.5px; height: 302.5px; inline-size: 302.5px; width: 302.5px"
            >
              <img
                loading="lazy"
                decoding="async"
                width="410"
                height="410"
                src="/"
                class="attachment-medium_large size-medium_large wp-image-1547"
                alt=""
                srcset="/ 410w, / 300w, / 150w"
                sizes="(max-width: 410px) 100vw, 410px"
                style="display: inline-block; list-style-type: none; perspective-origin: 151.25px 151.25px; text-align: center; transform-origin: 151.25px 151.25px; vertical-align: middle; word-break: break-word; block-size: 302.5px; height: 302.5px; inline-size: 302.5px; width: 302.5px"
              />
            </div>
          </div>
          <div
            class="elementor-element elementor-element-66e5738b elementor-widget elementor-widget-theme-post-title elementor-page-title elementor-widget-heading"
            data-id="66e5738b"
            data-element_type="widget"
            data-widget_type="theme-post-title.default"
            style="
              gap: 0px;
              list-style-type: none;
              perspective-origin: 151.25px 34.1875px;
              position: relative;
              text-align: center;
              transform-origin: 151.25px 34.1914px;
              word-break: break-word;
              block-size: 68.375px;
              inset: 0px;
              height: 68.375px;
              inline-size: 302.5px;
              inset-block: 0px;
              inset-inline: 0px;
              max-inline-size: 100%;
              max-width: 100%;
              min-block-size: auto;
              min-height: auto;
              width: 302.5px;
            "
          >
            <div
              class="elementor-widget-container"
              style="
                list-style-type: none;
                perspective-origin: 151.25px 26.6875px;
                text-align: center;
                transform-origin: 151.25px 26.6953px;
                transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s, transform 0.4s;
                word-break: break-word;
                block-size: 53.3828px;
                height: 53.3828px;
                inline-size: 302.5px;
                margin-block: 10px 5px;
                margin-bottom: 5px;
                margin-top: 10px;
                width: 302.5px;
              "
            >
              <h2
                class="elementor-heading-title elementor-size-default"
                style="
                  caret-color: rgb(111, 36, 115);
                  color: rgb(111, 36, 115);
                  column-rule-color: rgb(111, 36, 115);
                  list-style-type: none;
                  outline-color: rgb(111, 36, 115);
                  perspective-origin: 151.25px 19.1875px;
                  text-align: center;
                  text-decoration: rgb(111, 36, 115);
                  text-emphasis-color: rgb(111, 36, 115);
                  transform-origin: 151.25px 19.1992px;
                  word-break: break-word;
                  -webkit-text-fill-color: rgb(111, 36, 115);
                  -webkit-text-stroke-color: rgb(111, 36, 115);
                  block-size: 38.3906px;
                  border-block-color: rgb(111, 36, 115);
                  border-color: rgb(111, 36, 115);
                  border-inline-color: rgb(111, 36, 115);
                  height: 38.3906px;
                  inline-size: 302.5px;
                  margin-block: 0px;
                  margin-bottom: 0px;
                  margin-top: 0px;
                  width: 302.5px;
                "
              >
                JB Bowl
              </h2>
            </div>
          </div>
          <div
            class="elementor-element elementor-element-36107b0d elementor-widget elementor-widget-theme-post-content"
            data-id="36107b0d"
            data-element_type="widget"
            data-widget_type="theme-post-content.default"
            style="
              caret-color: rgb(127, 127, 127);
              color: rgb(127, 127, 127);
              gap: 0px;
              column-rule-color: rgb(127, 127, 127);
              font-style: italic;
              list-style-type: none;
              outline-color: rgb(127, 127, 127);
              perspective-origin: 151.25px 46px;
              position: relative;
              text-align: center;
              text-decoration: rgb(127, 127, 127);
              text-emphasis-color: rgb(127, 127, 127);
              transform-origin: 151.25px 46px;
              word-break: break-word;
              -webkit-text-fill-color: rgb(127, 127, 127);
              -webkit-text-stroke-color: rgb(127, 127, 127);
              block-size: 92px;
              border-block-color: rgb(127, 127, 127);
              border-color: rgb(127, 127, 127);
              border-inline-color: rgb(127, 127, 127);
              inset: 0px;
              height: 92px;
              inline-size: 302.5px;
              inset-block: 0px;
              inset-inline: 0px;
              max-inline-size: 100%;
              max-width: 100%;
              min-block-size: auto;
              min-height: auto;
              width: 302.5px;
            "
          >
            <div
              class="elementor-widget-container"
              style="
                caret-color: rgb(127, 127, 127);
                color: rgb(127, 127, 127);
                column-rule-color: rgb(127, 127, 127);
                font-style: italic;
                list-style-type: none;
                outline-color: rgb(127, 127, 127);
                perspective-origin: 151.25px 46px;
                text-align: center;
                text-decoration: rgb(127, 127, 127);
                text-emphasis-color: rgb(127, 127, 127);
                transform-origin: 151.25px 46px;
                transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s, transform 0.4s;
                word-break: break-word;
                -webkit-text-fill-color: rgb(127, 127, 127);
                -webkit-text-stroke-color: rgb(127, 127, 127);
                block-size: 92px;
                border-block-color: rgb(127, 127, 127);
                border-color: rgb(127, 127, 127);
                border-inline-color: rgb(127, 127, 127);
                height: 92px;
                inline-size: 302.5px;
                width: 302.5px;
              "
            >
              <p
                style="
                  caret-color: rgb(127, 127, 127);
                  color: rgb(127, 127, 127);
                  column-rule-color: rgb(127, 127, 127);
                  font-style: italic;
                  list-style-type: none;
                  outline-color: rgb(127, 127, 127);
                  perspective-origin: 151.25px 36px;
                  text-align: center;
                  text-decoration: rgb(127, 127, 127);
                  text-emphasis-color: rgb(127, 127, 127);
                  transform-origin: 151.25px 36px;
                  word-break: break-word;
                  -webkit-text-fill-color: rgb(127, 127, 127);
                  -webkit-text-stroke-color: rgb(127, 127, 127);
                  block-size: 72px;
                  border-block-color: rgb(127, 127, 127);
                  border-color: rgb(127, 127, 127);
                  border-inline-color: rgb(127, 127, 127);
                  height: 72px;
                  inline-size: 302.5px;
                  width: 302.5px;
                "
              >
                Acai, Granola, Greek Yogurt, Peanut Butter, Pineapple, Strawberry, Coconut Shavings, Hemp Seeds
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        data-elementor-type="loop-item"
        data-elementor-id="4252"
        class="elementor elementor-4252 swiper-slide e-loop-item e-loop-item-537 post-537 menu_item type-menu_item status-publish has-post-thumbnail hentry category-acai-bowls"
        data-elementor-post-type="elementor_library"
        role="group"
        aria-roledescription="slide"
        data-custom-edit-handle="1"
        aria-label="8 / 10"
        data-swiper-slide-index="7"
        style="
          flex-shrink: 0;
          list-style-type: none;
          perspective-origin: 151.25px 253.438px;
          position: relative;
          transform-origin: 151.25px 253.438px;
          transition-property: transform;
          block-size: 506.875px;
          inset: 0px;
          height: 506.875px;
          inline-size: 302.5px;
          inset-block: 0px;
          inset-inline: 0px;
          margin-inline-end: 20px;
          margin-right: 20px;
          min-block-size: auto;
          min-height: auto;
          min-inline-size: auto;
          min-width: auto;
          width: 302.5px;
        "
      >
        <div
          data-particle_enable="false"
          data-particle-mobile-disabled="false"
          class="elementor-element elementor-element-1f7adeb5 e-con-full e-flex e-con e-parent"
          data-id="1f7adeb5"
          data-element_type="container"
          style="
            gap: 0px;
            display: flex;
            flex-direction: column;
            list-style-type: none;
            perspective-origin: 151.25px 253.438px;
            position: relative;
            transform-origin: 151.25px 253.438px;
            transition: background 0.3s, border 0.3s, box-shadow 0.3s, transform 0.4s;
            word-break: break-word;
            block-size: 506.875px;
            inset: 0px;
            height: 506.875px;
            inline-size: 302.5px;
            inset-block: 0px;
            inset-inline: 0px;
            max-inline-size: 100%;
            max-width: 100%;
            width: 302.5px;
          "
        >
          <div
            class="elementor-element elementor-element-62a12117 elementor-widget elementor-widget-theme-post-featured-image elementor-widget-image"
            data-id="62a12117"
            data-element_type="widget"
            data-widget_type="theme-post-featured-image.default"
            style="
              gap: 0px;
              list-style-type: none;
              perspective-origin: 151.25px 151.25px;
              position: relative;
              text-align: center;
              transform-origin: 151.25px 151.25px;
              word-break: break-word;
              block-size: 302.5px;
              inset: 0px;
              height: 302.5px;
              inline-size: 302.5px;
              inset-block: 0px;
              inset-inline: 0px;
              max-inline-size: 100%;
              max-width: 100%;
              min-block-size: auto;
              min-height: auto;
              width: 302.5px;
            "
          >
            <div
              class="elementor-widget-container"
              style="list-style-type: none; perspective-origin: 151.25px 151.25px; text-align: center; transform-origin: 151.25px 151.25px; transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s, transform 0.4s; word-break: break-word; block-size: 302.5px; height: 302.5px; inline-size: 302.5px; width: 302.5px"
            >
              <img
                loading="lazy"
                decoding="async"
                width="410"
                height="410"
                src="/"
                class="attachment-medium_large size-medium_large wp-image-1548"
                alt=""
                srcset="/ 410w, / 300w, / 150w"
                sizes="(max-width: 410px) 100vw, 410px"
                style="display: inline-block; list-style-type: none; perspective-origin: 151.25px 151.25px; text-align: center; transform-origin: 151.25px 151.25px; vertical-align: middle; word-break: break-word; block-size: 302.5px; height: 302.5px; inline-size: 302.5px; width: 302.5px"
              />
            </div>
          </div>
          <div
            class="elementor-element elementor-element-66e5738b elementor-widget elementor-widget-theme-post-title elementor-page-title elementor-widget-heading"
            data-id="66e5738b"
            data-element_type="widget"
            data-widget_type="theme-post-title.default"
            style="
              gap: 0px;
              list-style-type: none;
              perspective-origin: 151.25px 34.1875px;
              position: relative;
              text-align: center;
              transform-origin: 151.25px 34.1914px;
              word-break: break-word;
              block-size: 68.375px;
              inset: 0px;
              height: 68.375px;
              inline-size: 302.5px;
              inset-block: 0px;
              inset-inline: 0px;
              max-inline-size: 100%;
              max-width: 100%;
              min-block-size: auto;
              min-height: auto;
              width: 302.5px;
            "
          >
            <div
              class="elementor-widget-container"
              style="
                list-style-type: none;
                perspective-origin: 151.25px 26.6875px;
                text-align: center;
                transform-origin: 151.25px 26.6953px;
                transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s, transform 0.4s;
                word-break: break-word;
                block-size: 53.3828px;
                height: 53.3828px;
                inline-size: 302.5px;
                margin-block: 10px 5px;
                margin-bottom: 5px;
                margin-top: 10px;
                width: 302.5px;
              "
            >
              <h2
                class="elementor-heading-title elementor-size-default"
                style="
                  caret-color: rgb(111, 36, 115);
                  color: rgb(111, 36, 115);
                  column-rule-color: rgb(111, 36, 115);
                  list-style-type: none;
                  outline-color: rgb(111, 36, 115);
                  perspective-origin: 151.25px 19.1875px;
                  text-align: center;
                  text-decoration: rgb(111, 36, 115);
                  text-emphasis-color: rgb(111, 36, 115);
                  transform-origin: 151.25px 19.1992px;
                  word-break: break-word;
                  -webkit-text-fill-color: rgb(111, 36, 115);
                  -webkit-text-stroke-color: rgb(111, 36, 115);
                  block-size: 38.3906px;
                  border-block-color: rgb(111, 36, 115);
                  border-color: rgb(111, 36, 115);
                  border-inline-color: rgb(111, 36, 115);
                  height: 38.3906px;
                  inline-size: 302.5px;
                  margin-block: 0px;
                  margin-bottom: 0px;
                  margin-top: 0px;
                  width: 302.5px;
                "
              >
                Tequesta Dragon
              </h2>
            </div>
          </div>
          <div
            class="elementor-element elementor-element-36107b0d elementor-widget elementor-widget-theme-post-content"
            data-id="36107b0d"
            data-element_type="widget"
            data-widget_type="theme-post-content.default"
            style="
              caret-color: rgb(127, 127, 127);
              color: rgb(127, 127, 127);
              gap: 0px;
              column-rule-color: rgb(127, 127, 127);
              font-style: italic;
              list-style-type: none;
              outline-color: rgb(127, 127, 127);
              perspective-origin: 151.25px 34px;
              position: relative;
              text-align: center;
              text-decoration: rgb(127, 127, 127);
              text-emphasis-color: rgb(127, 127, 127);
              transform-origin: 151.25px 34px;
              word-break: break-word;
              -webkit-text-fill-color: rgb(127, 127, 127);
              -webkit-text-stroke-color: rgb(127, 127, 127);
              block-size: 68px;
              border-block-color: rgb(127, 127, 127);
              border-color: rgb(127, 127, 127);
              border-inline-color: rgb(127, 127, 127);
              inset: 0px;
              height: 68px;
              inline-size: 302.5px;
              inset-block: 0px;
              inset-inline: 0px;
              max-inline-size: 100%;
              max-width: 100%;
              min-block-size: auto;
              min-height: auto;
              width: 302.5px;
            "
          >
            <div
              class="elementor-widget-container"
              style="
                caret-color: rgb(127, 127, 127);
                color: rgb(127, 127, 127);
                column-rule-color: rgb(127, 127, 127);
                font-style: italic;
                list-style-type: none;
                outline-color: rgb(127, 127, 127);
                perspective-origin: 151.25px 34px;
                text-align: center;
                text-decoration: rgb(127, 127, 127);
                text-emphasis-color: rgb(127, 127, 127);
                transform-origin: 151.25px 34px;
                transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s, transform 0.4s;
                word-break: break-word;
                -webkit-text-fill-color: rgb(127, 127, 127);
                -webkit-text-stroke-color: rgb(127, 127, 127);
                block-size: 68px;
                border-block-color: rgb(127, 127, 127);
                border-color: rgb(127, 127, 127);
                border-inline-color: rgb(127, 127, 127);
                height: 68px;
                inline-size: 302.5px;
                width: 302.5px;
              "
            >
              <p
                style="
                  caret-color: rgb(127, 127, 127);
                  color: rgb(127, 127, 127);
                  column-rule-color: rgb(127, 127, 127);
                  font-style: italic;
                  list-style-type: none;
                  outline-color: rgb(127, 127, 127);
                  perspective-origin: 151.25px 24px;
                  text-align: center;
                  text-decoration: rgb(127, 127, 127);
                  text-emphasis-color: rgb(127, 127, 127);
                  transform-origin: 151.25px 24px;
                  word-break: break-word;
                  -webkit-text-fill-color: rgb(127, 127, 127);
                  -webkit-text-stroke-color: rgb(127, 127, 127);
                  block-size: 48px;
                  border-block-color: rgb(127, 127, 127);
                  border-color: rgb(127, 127, 127);
                  border-inline-color: rgb(127, 127, 127);
                  height: 48px;
                  inline-size: 302.5px;
                  width: 302.5px;
                "
              >
                Dragon Fruit, Granola, Blueberry, Raspberry, Strawberry, Chia Seeds, Hemp Seeds
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        data-elementor-type="loop-item"
        data-elementor-id="4252"
        class="elementor elementor-4252 swiper-slide e-loop-item e-loop-item-533 post-533 menu_item type-menu_item status-publish has-post-thumbnail hentry category-acai-bowls"
        data-elementor-post-type="elementor_library"
        role="group"
        aria-roledescription="slide"
        data-custom-edit-handle="1"
        aria-label="9 / 10"
        data-swiper-slide-index="8"
        style="
          flex-shrink: 0;
          list-style-type: none;
          perspective-origin: 151.25px 253.438px;
          position: relative;
          transform-origin: 151.25px 253.438px;
          transition-property: transform;
          block-size: 506.875px;
          inset: 0px;
          height: 506.875px;
          inline-size: 302.5px;
          inset-block: 0px;
          inset-inline: 0px;
          margin-inline-end: 20px;
          margin-right: 20px;
          min-block-size: auto;
          min-height: auto;
          min-inline-size: auto;
          min-width: auto;
          width: 302.5px;
        "
      >
        <div
          data-particle_enable="false"
          data-particle-mobile-disabled="false"
          class="elementor-element elementor-element-1f7adeb5 e-con-full e-flex e-con e-parent"
          data-id="1f7adeb5"
          data-element_type="container"
          style="
            gap: 0px;
            display: flex;
            flex-direction: column;
            list-style-type: none;
            perspective-origin: 151.25px 253.438px;
            position: relative;
            transform-origin: 151.25px 253.438px;
            transition: background 0.3s, border 0.3s, box-shadow 0.3s, transform 0.4s;
            word-break: break-word;
            block-size: 506.875px;
            inset: 0px;
            height: 506.875px;
            inline-size: 302.5px;
            inset-block: 0px;
            inset-inline: 0px;
            max-inline-size: 100%;
            max-width: 100%;
            width: 302.5px;
          "
        >
          <div
            class="elementor-element elementor-element-62a12117 elementor-widget elementor-widget-theme-post-featured-image elementor-widget-image"
            data-id="62a12117"
            data-element_type="widget"
            data-widget_type="theme-post-featured-image.default"
            style="
              gap: 0px;
              list-style-type: none;
              perspective-origin: 151.25px 151.25px;
              position: relative;
              text-align: center;
              transform-origin: 151.25px 151.25px;
              word-break: break-word;
              block-size: 302.5px;
              inset: 0px;
              height: 302.5px;
              inline-size: 302.5px;
              inset-block: 0px;
              inset-inline: 0px;
              max-inline-size: 100%;
              max-width: 100%;
              min-block-size: auto;
              min-height: auto;
              width: 302.5px;
            "
          >
            <div
              class="elementor-widget-container"
              style="list-style-type: none; perspective-origin: 151.25px 151.25px; text-align: center; transform-origin: 151.25px 151.25px; transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s, transform 0.4s; word-break: break-word; block-size: 302.5px; height: 302.5px; inline-size: 302.5px; width: 302.5px"
            >
              <img
                loading="lazy"
                decoding="async"
                width="410"
                height="410"
                src="/"
                class="attachment-medium_large size-medium_large wp-image-1546"
                alt=""
                srcset="/ 410w, / 300w, / 150w"
                sizes="(max-width: 410px) 100vw, 410px"
                style="display: inline-block; list-style-type: none; perspective-origin: 151.25px 151.25px; text-align: center; transform-origin: 151.25px 151.25px; vertical-align: middle; word-break: break-word; block-size: 302.5px; height: 302.5px; inline-size: 302.5px; width: 302.5px"
              />
            </div>
          </div>
          <div
            class="elementor-element elementor-element-66e5738b elementor-widget elementor-widget-theme-post-title elementor-page-title elementor-widget-heading"
            data-id="66e5738b"
            data-element_type="widget"
            data-widget_type="theme-post-title.default"
            style="
              gap: 0px;
              list-style-type: none;
              perspective-origin: 151.25px 34.1875px;
              position: relative;
              text-align: center;
              transform-origin: 151.25px 34.1914px;
              word-break: break-word;
              block-size: 68.375px;
              inset: 0px;
              height: 68.375px;
              inline-size: 302.5px;
              inset-block: 0px;
              inset-inline: 0px;
              max-inline-size: 100%;
              max-width: 100%;
              min-block-size: auto;
              min-height: auto;
              width: 302.5px;
            "
          >
            <div
              class="elementor-widget-container"
              style="
                list-style-type: none;
                perspective-origin: 151.25px 26.6875px;
                text-align: center;
                transform-origin: 151.25px 26.6953px;
                transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s, transform 0.4s;
                word-break: break-word;
                block-size: 53.3828px;
                height: 53.3828px;
                inline-size: 302.5px;
                margin-block: 10px 5px;
                margin-bottom: 5px;
                margin-top: 10px;
                width: 302.5px;
              "
            >
              <h2
                class="elementor-heading-title elementor-size-default"
                style="
                  caret-color: rgb(111, 36, 115);
                  color: rgb(111, 36, 115);
                  column-rule-color: rgb(111, 36, 115);
                  list-style-type: none;
                  outline-color: rgb(111, 36, 115);
                  perspective-origin: 151.25px 19.1875px;
                  text-align: center;
                  text-decoration: rgb(111, 36, 115);
                  text-emphasis-color: rgb(111, 36, 115);
                  transform-origin: 151.25px 19.1992px;
                  word-break: break-word;
                  -webkit-text-fill-color: rgb(111, 36, 115);
                  -webkit-text-stroke-color: rgb(111, 36, 115);
                  block-size: 38.3906px;
                  border-block-color: rgb(111, 36, 115);
                  border-color: rgb(111, 36, 115);
                  border-inline-color: rgb(111, 36, 115);
                  height: 38.3906px;
                  inline-size: 302.5px;
                  margin-block: 0px;
                  margin-bottom: 0px;
                  margin-top: 0px;
                  width: 302.5px;
                "
              >
                PB&amp;A
              </h2>
            </div>
          </div>
          <div
            class="elementor-element elementor-element-36107b0d elementor-widget elementor-widget-theme-post-content"
            data-id="36107b0d"
            data-element_type="widget"
            data-widget_type="theme-post-content.default"
            style="
              caret-color: rgb(127, 127, 127);
              color: rgb(127, 127, 127);
              gap: 0px;
              column-rule-color: rgb(127, 127, 127);
              font-style: italic;
              list-style-type: none;
              outline-color: rgb(127, 127, 127);
              perspective-origin: 151.25px 56px;
              position: relative;
              text-align: center;
              text-decoration: rgb(127, 127, 127);
              text-emphasis-color: rgb(127, 127, 127);
              transform-origin: 151.25px 56px;
              word-break: break-word;
              -webkit-text-fill-color: rgb(127, 127, 127);
              -webkit-text-stroke-color: rgb(127, 127, 127);
              block-size: 112px;
              border-block-color: rgb(127, 127, 127);
              border-color: rgb(127, 127, 127);
              border-inline-color: rgb(127, 127, 127);
              inset: 0px;
              height: 112px;
              inline-size: 302.5px;
              inset-block: 0px;
              inset-inline: 0px;
              max-inline-size: 100%;
              max-width: 100%;
              min-block-size: auto;
              min-height: auto;
              width: 302.5px;
            "
          >
            <div
              class="elementor-widget-container"
              style="
                caret-color: rgb(127, 127, 127);
                color: rgb(127, 127, 127);
                column-rule-color: rgb(127, 127, 127);
                font-style: italic;
                list-style-type: none;
                outline-color: rgb(127, 127, 127);
                perspective-origin: 151.25px 56px;
                text-align: center;
                text-decoration: rgb(127, 127, 127);
                text-emphasis-color: rgb(127, 127, 127);
                transform-origin: 151.25px 56px;
                transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s, transform 0.4s;
                word-break: break-word;
                -webkit-text-fill-color: rgb(127, 127, 127);
                -webkit-text-stroke-color: rgb(127, 127, 127);
                block-size: 112px;
                border-block-color: rgb(127, 127, 127);
                border-color: rgb(127, 127, 127);
                border-inline-color: rgb(127, 127, 127);
                height: 112px;
                inline-size: 302.5px;
                width: 302.5px;
              "
            >
              <p
                style="
                  caret-color: rgb(127, 127, 127);
                  color: rgb(127, 127, 127);
                  column-rule-color: rgb(127, 127, 127);
                  font-style: italic;
                  list-style-type: none;
                  outline-color: rgb(127, 127, 127);
                  perspective-origin: 151.25px 24px;
                  text-align: center;
                  text-decoration: rgb(127, 127, 127);
                  text-emphasis-color: rgb(127, 127, 127);
                  transform-origin: 151.25px 24px;
                  word-break: break-word;
                  -webkit-text-fill-color: rgb(127, 127, 127);
                  -webkit-text-stroke-color: rgb(127, 127, 127);
                  block-size: 48px;
                  border-block-color: rgb(127, 127, 127);
                  border-color: rgb(127, 127, 127);
                  border-inline-color: rgb(127, 127, 127);
                  height: 48px;
                  inline-size: 302.5px;
                  width: 302.5px;
                "
              >
                Acai, Granola, Peanut Butter, Banana, Strawberry
              </p>
              <p
                style="
                  caret-color: rgb(127, 127, 127);
                  color: rgb(127, 127, 127);
                  column-rule-color: rgb(127, 127, 127);
                  font-style: italic;
                  list-style-type: none;
                  outline-color: rgb(127, 127, 127);
                  perspective-origin: 151.25px 12px;
                  text-align: center;
                  text-decoration: rgb(127, 127, 127);
                  text-emphasis-color: rgb(127, 127, 127);
                  transform-origin: 151.25px 12px;
                  word-break: break-word;
                  -webkit-text-fill-color: rgb(127, 127, 127);
                  -webkit-text-stroke-color: rgb(127, 127, 127);
                  block-size: 24px;
                  border-block-color: rgb(127, 127, 127);
                  border-color: rgb(127, 127, 127);
                  border-inline-color: rgb(127, 127, 127);
                  height: 24px;
                  inline-size: 302.5px;
                  width: 302.5px;
                "
              >
                &nbsp;
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        data-elementor-type="loop-item"
        data-elementor-id="4252"
        class="elementor elementor-4252 swiper-slide e-loop-item e-loop-item-519 post-519 menu_item type-menu_item status-publish has-post-thumbnail hentry category-acai-bowls swiper-slide-duplicate-prev"
        data-elementor-post-type="elementor_library"
        role="group"
        aria-roledescription="slide"
        data-custom-edit-handle="1"
        aria-label="10 / 10"
        data-swiper-slide-index="9"
        style="
          flex-shrink: 0;
          list-style-type: none;
          perspective-origin: 151.25px 253.438px;
          position: relative;
          transform-origin: 151.25px 253.438px;
          transition-property: transform;
          block-size: 506.875px;
          inset: 0px;
          height: 506.875px;
          inline-size: 302.5px;
          inset-block: 0px;
          inset-inline: 0px;
          margin-inline-end: 20px;
          margin-right: 20px;
          min-block-size: auto;
          min-height: auto;
          min-inline-size: auto;
          min-width: auto;
          width: 302.5px;
        "
      >
        <div
          data-particle_enable="false"
          data-particle-mobile-disabled="false"
          class="elementor-element elementor-element-1f7adeb5 e-con-full e-flex e-con e-parent"
          data-id="1f7adeb5"
          data-element_type="container"
          style="
            gap: 0px;
            display: flex;
            flex-direction: column;
            list-style-type: none;
            perspective-origin: 151.25px 253.438px;
            position: relative;
            transform-origin: 151.25px 253.438px;
            transition: background 0.3s, border 0.3s, box-shadow 0.3s, transform 0.4s;
            word-break: break-word;
            block-size: 506.875px;
            inset: 0px;
            height: 506.875px;
            inline-size: 302.5px;
            inset-block: 0px;
            inset-inline: 0px;
            max-inline-size: 100%;
            max-width: 100%;
            width: 302.5px;
          "
        >
          <div
            class="elementor-element elementor-element-62a12117 elementor-widget elementor-widget-theme-post-featured-image elementor-widget-image"
            data-id="62a12117"
            data-element_type="widget"
            data-widget_type="theme-post-featured-image.default"
            style="
              gap: 0px;
              list-style-type: none;
              perspective-origin: 151.25px 151.25px;
              position: relative;
              text-align: center;
              transform-origin: 151.25px 151.25px;
              word-break: break-word;
              block-size: 302.5px;
              inset: 0px;
              height: 302.5px;
              inline-size: 302.5px;
              inset-block: 0px;
              inset-inline: 0px;
              max-inline-size: 100%;
              max-width: 100%;
              min-block-size: auto;
              min-height: auto;
              width: 302.5px;
            "
          >
            <div
              class="elementor-widget-container"
              style="list-style-type: none; perspective-origin: 151.25px 151.25px; text-align: center; transform-origin: 151.25px 151.25px; transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s, transform 0.4s; word-break: break-word; block-size: 302.5px; height: 302.5px; inline-size: 302.5px; width: 302.5px"
            >
              <img
                loading="lazy"
                decoding="async"
                width="410"
                height="410"
                src="/"
                class="attachment-medium_large size-medium_large wp-image-2202"
                alt=""
                srcset="/ 410w, / 300w, / 150w"
                sizes="(max-width: 410px) 100vw, 410px"
                style="display: inline-block; list-style-type: none; perspective-origin: 151.25px 151.25px; text-align: center; transform-origin: 151.25px 151.25px; vertical-align: middle; word-break: break-word; block-size: 302.5px; height: 302.5px; inline-size: 302.5px; width: 302.5px"
              />
            </div>
          </div>
          <div
            class="elementor-element elementor-element-66e5738b elementor-widget elementor-widget-theme-post-title elementor-page-title elementor-widget-heading"
            data-id="66e5738b"
            data-element_type="widget"
            data-widget_type="theme-post-title.default"
            style="
              gap: 0px;
              list-style-type: none;
              perspective-origin: 151.25px 34.1875px;
              position: relative;
              text-align: center;
              transform-origin: 151.25px 34.1914px;
              word-break: break-word;
              block-size: 68.375px;
              inset: 0px;
              height: 68.375px;
              inline-size: 302.5px;
              inset-block: 0px;
              inset-inline: 0px;
              max-inline-size: 100%;
              max-width: 100%;
              min-block-size: auto;
              min-height: auto;
              width: 302.5px;
            "
          >
            <div
              class="elementor-widget-container"
              style="
                list-style-type: none;
                perspective-origin: 151.25px 26.6875px;
                text-align: center;
                transform-origin: 151.25px 26.6953px;
                transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s, transform 0.4s;
                word-break: break-word;
                block-size: 53.3828px;
                height: 53.3828px;
                inline-size: 302.5px;
                margin-block: 10px 5px;
                margin-bottom: 5px;
                margin-top: 10px;
                width: 302.5px;
              "
            >
              <h2
                class="elementor-heading-title elementor-size-default"
                style="
                  caret-color: rgb(111, 36, 115);
                  color: rgb(111, 36, 115);
                  column-rule-color: rgb(111, 36, 115);
                  list-style-type: none;
                  outline-color: rgb(111, 36, 115);
                  perspective-origin: 151.25px 19.1875px;
                  text-align: center;
                  text-decoration: rgb(111, 36, 115);
                  text-emphasis-color: rgb(111, 36, 115);
                  transform-origin: 151.25px 19.1992px;
                  word-break: break-word;
                  -webkit-text-fill-color: rgb(111, 36, 115);
                  -webkit-text-stroke-color: rgb(111, 36, 115);
                  block-size: 38.3906px;
                  border-block-color: rgb(111, 36, 115);
                  border-color: rgb(111, 36, 115);
                  border-inline-color: rgb(111, 36, 115);
                  height: 38.3906px;
                  inline-size: 302.5px;
                  margin-block: 0px;
                  margin-bottom: 0px;
                  margin-top: 0px;
                  width: 302.5px;
                "
              >
                V.O.T.
              </h2>
            </div>
          </div>
          <div
            class="elementor-element elementor-element-36107b0d elementor-widget elementor-widget-theme-post-content"
            data-id="36107b0d"
            data-element_type="widget"
            data-widget_type="theme-post-content.default"
            style="
              caret-color: rgb(127, 127, 127);
              color: rgb(127, 127, 127);
              gap: 0px;
              column-rule-color: rgb(127, 127, 127);
              font-style: italic;
              list-style-type: none;
              outline-color: rgb(127, 127, 127);
              perspective-origin: 151.25px 34px;
              position: relative;
              text-align: center;
              text-decoration: rgb(127, 127, 127);
              text-emphasis-color: rgb(127, 127, 127);
              transform-origin: 151.25px 34px;
              word-break: break-word;
              -webkit-text-fill-color: rgb(127, 127, 127);
              -webkit-text-stroke-color: rgb(127, 127, 127);
              block-size: 68px;
              border-block-color: rgb(127, 127, 127);
              border-color: rgb(127, 127, 127);
              border-inline-color: rgb(127, 127, 127);
              inset: 0px;
              height: 68px;
              inline-size: 302.5px;
              inset-block: 0px;
              inset-inline: 0px;
              max-inline-size: 100%;
              max-width: 100%;
              min-block-size: auto;
              min-height: auto;
              width: 302.5px;
            "
          >
            <div
              class="elementor-widget-container"
              style="
                caret-color: rgb(127, 127, 127);
                color: rgb(127, 127, 127);
                column-rule-color: rgb(127, 127, 127);
                font-style: italic;
                list-style-type: none;
                outline-color: rgb(127, 127, 127);
                perspective-origin: 151.25px 34px;
                text-align: center;
                text-decoration: rgb(127, 127, 127);
                text-emphasis-color: rgb(127, 127, 127);
                transform-origin: 151.25px 34px;
                transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s, transform 0.4s;
                word-break: break-word;
                -webkit-text-fill-color: rgb(127, 127, 127);
                -webkit-text-stroke-color: rgb(127, 127, 127);
                block-size: 68px;
                border-block-color: rgb(127, 127, 127);
                border-color: rgb(127, 127, 127);
                border-inline-color: rgb(127, 127, 127);
                height: 68px;
                inline-size: 302.5px;
                width: 302.5px;
              "
            >
              <p
                style="
                  caret-color: rgb(127, 127, 127);
                  color: rgb(127, 127, 127);
                  column-rule-color: rgb(127, 127, 127);
                  font-style: italic;
                  list-style-type: none;
                  outline-color: rgb(127, 127, 127);
                  perspective-origin: 151.25px 24px;
                  text-align: center;
                  text-decoration: rgb(127, 127, 127);
                  text-emphasis-color: rgb(127, 127, 127);
                  transform-origin: 151.25px 24px;
                  word-break: break-word;
                  -webkit-text-fill-color: rgb(127, 127, 127);
                  -webkit-text-stroke-color: rgb(127, 127, 127);
                  block-size: 48px;
                  border-block-color: rgb(127, 127, 127);
                  border-color: rgb(127, 127, 127);
                  border-inline-color: rgb(127, 127, 127);
                  height: 48px;
                  inline-size: 302.5px;
                  width: 302.5px;
                "
              >
                Acai, Granola, Raspberry, Mango, Kiwi, Hemp Seeds, Coconut Shavings
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        data-elementor-type="loop-item"
        data-elementor-id="4252"
        class="elementor elementor-4252 swiper-slide e-loop-item e-loop-item-4275 post-4275 menu_item type-menu_item status-publish has-post-thumbnail hentry category-acai-bowls swiper-slide-duplicate swiper-slide-duplicate-active"
        data-elementor-post-type="elementor_library"
        role="group"
        aria-roledescription="slide"
        data-custom-edit-handle="1"
        aria-label="1 / 10"
        data-swiper-slide-index="0"
        style="
          flex-shrink: 0;
          list-style-type: none;
          perspective-origin: 151.25px 253.438px;
          position: relative;
          transform-origin: 151.25px 253.438px;
          transition-property: transform;
          block-size: 506.875px;
          inset: 0px;
          height: 506.875px;
          inline-size: 302.5px;
          inset-block: 0px;
          inset-inline: 0px;
          margin-inline-end: 20px;
          margin-right: 20px;
          min-block-size: auto;
          min-height: auto;
          min-inline-size: auto;
          min-width: auto;
          width: 302.5px;
        "
      >
        <div
          data-particle_enable="false"
          data-particle-mobile-disabled="false"
          class="elementor-element elementor-element-1f7adeb5 e-con-full e-flex e-con e-parent"
          data-id="1f7adeb5"
          data-element_type="container"
          style="
            gap: 0px;
            display: flex;
            flex-direction: column;
            list-style-type: none;
            perspective-origin: 151.25px 253.438px;
            position: relative;
            transform-origin: 151.25px 253.438px;
            transition: background 0.3s, border 0.3s, box-shadow 0.3s, transform 0.4s;
            word-break: break-word;
            block-size: 506.875px;
            inset: 0px;
            height: 506.875px;
            inline-size: 302.5px;
            inset-block: 0px;
            inset-inline: 0px;
            max-inline-size: 100%;
            max-width: 100%;
            width: 302.5px;
          "
        >
          <div
            class="elementor-element elementor-element-62a12117 elementor-widget elementor-widget-theme-post-featured-image elementor-widget-image"
            data-id="62a12117"
            data-element_type="widget"
            data-widget_type="theme-post-featured-image.default"
            style="
              gap: 0px;
              list-style-type: none;
              perspective-origin: 151.25px 151.25px;
              position: relative;
              text-align: center;
              transform-origin: 151.25px 151.25px;
              word-break: break-word;
              block-size: 302.5px;
              inset: 0px;
              height: 302.5px;
              inline-size: 302.5px;
              inset-block: 0px;
              inset-inline: 0px;
              max-inline-size: 100%;
              max-width: 100%;
              min-block-size: auto;
              min-height: auto;
              width: 302.5px;
            "
          >
            <div
              class="elementor-widget-container"
              style="list-style-type: none; perspective-origin: 151.25px 151.25px; text-align: center; transform-origin: 151.25px 151.25px; transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s, transform 0.4s; word-break: break-word; block-size: 302.5px; height: 302.5px; inline-size: 302.5px; width: 302.5px"
            >
              <img
                loading="lazy"
                decoding="async"
                width="410"
                height="410"
                src="/"
                class="attachment-medium_large size-medium_large wp-image-4259"
                alt=""
                srcset="/ 410w, / 300w, / 150w, / 400w"
                sizes="(max-width: 410px) 100vw, 410px"
                style="display: inline-block; list-style-type: none; perspective-origin: 151.25px 151.25px; text-align: center; transform-origin: 151.25px 151.25px; vertical-align: middle; word-break: break-word; block-size: 302.5px; height: 302.5px; inline-size: 302.5px; width: 302.5px"
              />
            </div>
          </div>
          <div
            class="elementor-element elementor-element-66e5738b elementor-widget elementor-widget-theme-post-title elementor-page-title elementor-widget-heading"
            data-id="66e5738b"
            data-element_type="widget"
            data-widget_type="theme-post-title.default"
            style="
              gap: 0px;
              list-style-type: none;
              perspective-origin: 151.25px 34.1875px;
              position: relative;
              text-align: center;
              transform-origin: 151.25px 34.1914px;
              word-break: break-word;
              block-size: 68.375px;
              inset: 0px;
              height: 68.375px;
              inline-size: 302.5px;
              inset-block: 0px;
              inset-inline: 0px;
              max-inline-size: 100%;
              max-width: 100%;
              min-block-size: auto;
              min-height: auto;
              width: 302.5px;
            "
          >
            <div
              class="elementor-widget-container"
              style="
                list-style-type: none;
                perspective-origin: 151.25px 26.6875px;
                text-align: center;
                transform-origin: 151.25px 26.6953px;
                transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s, transform 0.4s;
                word-break: break-word;
                block-size: 53.3828px;
                height: 53.3828px;
                inline-size: 302.5px;
                margin-block: 10px 5px;
                margin-bottom: 5px;
                margin-top: 10px;
                width: 302.5px;
              "
            >
              <h2
                class="elementor-heading-title elementor-size-default"
                style="
                  caret-color: rgb(111, 36, 115);
                  color: rgb(111, 36, 115);
                  column-rule-color: rgb(111, 36, 115);
                  list-style-type: none;
                  outline-color: rgb(111, 36, 115);
                  perspective-origin: 151.25px 19.1875px;
                  text-align: center;
                  text-decoration: rgb(111, 36, 115);
                  text-emphasis-color: rgb(111, 36, 115);
                  transform-origin: 151.25px 19.1992px;
                  word-break: break-word;
                  -webkit-text-fill-color: rgb(111, 36, 115);
                  -webkit-text-stroke-color: rgb(111, 36, 115);
                  block-size: 38.3906px;
                  border-block-color: rgb(111, 36, 115);
                  border-color: rgb(111, 36, 115);
                  border-inline-color: rgb(111, 36, 115);
                  height: 38.3906px;
                  inline-size: 302.5px;
                  margin-block: 0px;
                  margin-bottom: 0px;
                  margin-top: 0px;
                  width: 302.5px;
                "
              >
                Coco Breeze
              </h2>
            </div>
          </div>
          <div
            class="elementor-element elementor-element-36107b0d elementor-widget elementor-widget-theme-post-content"
            data-id="36107b0d"
            data-element_type="widget"
            data-widget_type="theme-post-content.default"
            style="
              caret-color: rgb(127, 127, 127);
              color: rgb(127, 127, 127);
              gap: 0px;
              column-rule-color: rgb(127, 127, 127);
              font-style: italic;
              list-style-type: none;
              outline-color: rgb(127, 127, 127);
              perspective-origin: 151.25px 56.75px;
              position: relative;
              text-align: center;
              text-decoration: rgb(127, 127, 127);
              text-emphasis-color: rgb(127, 127, 127);
              transform-origin: 151.25px 56.75px;
              word-break: break-word;
              -webkit-text-fill-color: rgb(127, 127, 127);
              -webkit-text-stroke-color: rgb(127, 127, 127);
              block-size: 113.5px;
              border-block-color: rgb(127, 127, 127);
              border-color: rgb(127, 127, 127);
              border-inline-color: rgb(127, 127, 127);
              inset: 0px;
              height: 113.5px;
              inline-size: 302.5px;
              inset-block: 0px;
              inset-inline: 0px;
              max-inline-size: 100%;
              max-width: 100%;
              min-block-size: auto;
              min-height: auto;
              width: 302.5px;
            "
          >
            <div
              class="elementor-widget-container"
              style="
                caret-color: rgb(127, 127, 127);
                color: rgb(127, 127, 127);
                column-rule-color: rgb(127, 127, 127);
                font-style: italic;
                list-style-type: none;
                outline-color: rgb(127, 127, 127);
                perspective-origin: 151.25px 56.75px;
                text-align: center;
                text-decoration: rgb(127, 127, 127);
                text-emphasis-color: rgb(127, 127, 127);
                transform-origin: 151.25px 56.75px;
                transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s, transform 0.4s;
                word-break: break-word;
                -webkit-text-fill-color: rgb(127, 127, 127);
                -webkit-text-stroke-color: rgb(127, 127, 127);
                block-size: 113.5px;
                border-block-color: rgb(127, 127, 127);
                border-color: rgb(127, 127, 127);
                border-inline-color: rgb(127, 127, 127);
                height: 113.5px;
                inline-size: 302.5px;
                width: 302.5px;
              "
            >
              <p
                style="
                  caret-color: rgb(127, 127, 127);
                  color: rgb(127, 127, 127);
                  column-rule-color: rgb(127, 127, 127);
                  font-style: italic;
                  list-style-type: none;
                  outline-color: rgb(127, 127, 127);
                  perspective-origin: 151.25px 24px;
                  text-align: center;
                  text-decoration: rgb(127, 127, 127);
                  text-emphasis-color: rgb(127, 127, 127);
                  transform-origin: 151.25px 24px;
                  word-break: break-word;
                  -webkit-text-fill-color: rgb(127, 127, 127);
                  -webkit-text-stroke-color: rgb(127, 127, 127);
                  block-size: 48px;
                  border-block-color: rgb(127, 127, 127);
                  border-color: rgb(127, 127, 127);
                  border-inline-color: rgb(127, 127, 127);
                  height: 48px;
                  inline-size: 302.5px;
                  width: 302.5px;
                "
              >
                Coconut Sorbet, Granola, Nutella, Strawberry, Mango, Coconut Flakes
              </p>
              <p
                style="
                  caret-color: rgb(127, 127, 127);
                  color: rgb(127, 127, 127);
                  column-rule-color: rgb(127, 127, 127);
                  font-style: italic;
                  list-style-type: none;
                  outline-color: rgb(127, 127, 127);
                  perspective-origin: 151.25px 12.75px;
                  text-align: center;
                  text-decoration: rgb(127, 127, 127);
                  text-emphasis-color: rgb(127, 127, 127);
                  transform-origin: 151.25px 12.75px;
                  word-break: break-word;
                  -webkit-text-fill-color: rgb(127, 127, 127);
                  -webkit-text-stroke-color: rgb(127, 127, 127);
                  block-size: 25.5px;
                  border-block-color: rgb(127, 127, 127);
                  border-color: rgb(127, 127, 127);
                  border-inline-color: rgb(127, 127, 127);
                  height: 25.5px;
                  inline-size: 302.5px;
                  width: 302.5px;
                "
              >
                <em
                  style="
                    font-size: 12px;
                    caret-color: rgb(127, 127, 127);
                    color: rgb(127, 127, 127);
                    column-rule-color: rgb(127, 127, 127);
                    list-style-type: none;
                    outline-color: rgb(127, 127, 127);
                    text-align: center;
                    text-decoration: rgb(127, 127, 127);
                    text-emphasis-color: rgb(127, 127, 127);
                    word-break: break-word;
                    -webkit-text-fill-color: rgb(127, 127, 127);
                    -webkit-text-stroke-color: rgb(127, 127, 127);
                    border-block-color: rgb(127, 127, 127);
                    border-color: rgb(127, 127, 127);
                    border-inline-color: rgb(127, 127, 127);
                  "
                  >*Available at Florida Locations.</em
                >
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        data-elementor-type="loop-item"
        data-elementor-id="4252"
        class="elementor elementor-4252 swiper-slide e-loop-item e-loop-item-4276 post-4276 menu_item type-menu_item status-publish has-post-thumbnail hentry category-acai-bowls swiper-slide-duplicate swiper-slide-duplicate-next"
        data-elementor-post-type="elementor_library"
        role="group"
        aria-roledescription="slide"
        data-custom-edit-handle="1"
        aria-label="2 / 10"
        data-swiper-slide-index="1"
        style="
          flex-shrink: 0;
          list-style-type: none;
          perspective-origin: 151.25px 253.438px;
          position: relative;
          transform-origin: 151.25px 253.438px;
          transition-property: transform;
          block-size: 506.875px;
          inset: 0px;
          height: 506.875px;
          inline-size: 302.5px;
          inset-block: 0px;
          inset-inline: 0px;
          margin-inline-end: 20px;
          margin-right: 20px;
          min-block-size: auto;
          min-height: auto;
          min-inline-size: auto;
          min-width: auto;
          width: 302.5px;
        "
      >
        <div
          data-particle_enable="false"
          data-particle-mobile-disabled="false"
          class="elementor-element elementor-element-1f7adeb5 e-con-full e-flex e-con e-parent"
          data-id="1f7adeb5"
          data-element_type="container"
          style="
            gap: 0px;
            display: flex;
            flex-direction: column;
            list-style-type: none;
            perspective-origin: 151.25px 253.438px;
            position: relative;
            transform-origin: 151.25px 253.438px;
            transition: background 0.3s, border 0.3s, box-shadow 0.3s, transform 0.4s;
            word-break: break-word;
            block-size: 506.875px;
            inset: 0px;
            height: 506.875px;
            inline-size: 302.5px;
            inset-block: 0px;
            inset-inline: 0px;
            max-inline-size: 100%;
            max-width: 100%;
            width: 302.5px;
          "
        >
          <div
            class="elementor-element elementor-element-62a12117 elementor-widget elementor-widget-theme-post-featured-image elementor-widget-image"
            data-id="62a12117"
            data-element_type="widget"
            data-widget_type="theme-post-featured-image.default"
            style="
              gap: 0px;
              list-style-type: none;
              perspective-origin: 151.25px 151.25px;
              position: relative;
              text-align: center;
              transform-origin: 151.25px 151.25px;
              word-break: break-word;
              block-size: 302.5px;
              inset: 0px;
              height: 302.5px;
              inline-size: 302.5px;
              inset-block: 0px;
              inset-inline: 0px;
              max-inline-size: 100%;
              max-width: 100%;
              min-block-size: auto;
              min-height: auto;
              width: 302.5px;
            "
          >
            <div
              class="elementor-widget-container"
              style="list-style-type: none; perspective-origin: 151.25px 151.25px; text-align: center; transform-origin: 151.25px 151.25px; transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s, transform 0.4s; word-break: break-word; block-size: 302.5px; height: 302.5px; inline-size: 302.5px; width: 302.5px"
            >
              <img
                loading="lazy"
                decoding="async"
                width="410"
                height="410"
                src="/"
                class="attachment-medium_large size-medium_large wp-image-4260"
                alt=""
                srcset="/ 410w, / 300w, / 150w, / 400w"
                sizes="(max-width: 410px) 100vw, 410px"
                style="display: inline-block; list-style-type: none; perspective-origin: 151.25px 151.25px; text-align: center; transform-origin: 151.25px 151.25px; vertical-align: middle; word-break: break-word; block-size: 302.5px; height: 302.5px; inline-size: 302.5px; width: 302.5px"
              />
            </div>
          </div>
          <div
            class="elementor-element elementor-element-66e5738b elementor-widget elementor-widget-theme-post-title elementor-page-title elementor-widget-heading"
            data-id="66e5738b"
            data-element_type="widget"
            data-widget_type="theme-post-title.default"
            style="
              gap: 0px;
              list-style-type: none;
              perspective-origin: 151.25px 34.1875px;
              position: relative;
              text-align: center;
              transform-origin: 151.25px 34.1914px;
              word-break: break-word;
              block-size: 68.375px;
              inset: 0px;
              height: 68.375px;
              inline-size: 302.5px;
              inset-block: 0px;
              inset-inline: 0px;
              max-inline-size: 100%;
              max-width: 100%;
              min-block-size: auto;
              min-height: auto;
              width: 302.5px;
            "
          >
            <div
              class="elementor-widget-container"
              style="
                list-style-type: none;
                perspective-origin: 151.25px 26.6875px;
                text-align: center;
                transform-origin: 151.25px 26.6953px;
                transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s, transform 0.4s;
                word-break: break-word;
                block-size: 53.3828px;
                height: 53.3828px;
                inline-size: 302.5px;
                margin-block: 10px 5px;
                margin-bottom: 5px;
                margin-top: 10px;
                width: 302.5px;
              "
            >
              <h2
                class="elementor-heading-title elementor-size-default"
                style="
                  caret-color: rgb(111, 36, 115);
                  color: rgb(111, 36, 115);
                  column-rule-color: rgb(111, 36, 115);
                  list-style-type: none;
                  outline-color: rgb(111, 36, 115);
                  perspective-origin: 151.25px 19.1875px;
                  text-align: center;
                  text-decoration: rgb(111, 36, 115);
                  text-emphasis-color: rgb(111, 36, 115);
                  transform-origin: 151.25px 19.1992px;
                  word-break: break-word;
                  -webkit-text-fill-color: rgb(111, 36, 115);
                  -webkit-text-stroke-color: rgb(111, 36, 115);
                  block-size: 38.3906px;
                  border-block-color: rgb(111, 36, 115);
                  border-color: rgb(111, 36, 115);
                  border-inline-color: rgb(111, 36, 115);
                  height: 38.3906px;
                  inline-size: 302.5px;
                  margin-block: 0px;
                  margin-bottom: 0px;
                  margin-top: 0px;
                  width: 302.5px;
                "
              >
                Nutella Crunch
              </h2>
            </div>
          </div>
          <div
            class="elementor-element elementor-element-36107b0d elementor-widget elementor-widget-theme-post-content"
            data-id="36107b0d"
            data-element_type="widget"
            data-widget_type="theme-post-content.default"
            style="
              caret-color: rgb(127, 127, 127);
              color: rgb(127, 127, 127);
              gap: 0px;
              column-rule-color: rgb(127, 127, 127);
              font-style: italic;
              list-style-type: none;
              outline-color: rgb(127, 127, 127);
              perspective-origin: 151.25px 34px;
              position: relative;
              text-align: center;
              text-decoration: rgb(127, 127, 127);
              text-emphasis-color: rgb(127, 127, 127);
              transform-origin: 151.25px 34px;
              word-break: break-word;
              -webkit-text-fill-color: rgb(127, 127, 127);
              -webkit-text-stroke-color: rgb(127, 127, 127);
              block-size: 68px;
              border-block-color: rgb(127, 127, 127);
              border-color: rgb(127, 127, 127);
              border-inline-color: rgb(127, 127, 127);
              inset: 0px;
              height: 68px;
              inline-size: 302.5px;
              inset-block: 0px;
              inset-inline: 0px;
              max-inline-size: 100%;
              max-width: 100%;
              min-block-size: auto;
              min-height: auto;
              width: 302.5px;
            "
          >
            <div
              class="elementor-widget-container"
              style="
                caret-color: rgb(127, 127, 127);
                color: rgb(127, 127, 127);
                column-rule-color: rgb(127, 127, 127);
                font-style: italic;
                list-style-type: none;
                outline-color: rgb(127, 127, 127);
                perspective-origin: 151.25px 34px;
                text-align: center;
                text-decoration: rgb(127, 127, 127);
                text-emphasis-color: rgb(127, 127, 127);
                transform-origin: 151.25px 34px;
                transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s, transform 0.4s;
                word-break: break-word;
                -webkit-text-fill-color: rgb(127, 127, 127);
                -webkit-text-stroke-color: rgb(127, 127, 127);
                block-size: 68px;
                border-block-color: rgb(127, 127, 127);
                border-color: rgb(127, 127, 127);
                border-inline-color: rgb(127, 127, 127);
                height: 68px;
                inline-size: 302.5px;
                width: 302.5px;
              "
            >
              <p
                style="
                  caret-color: rgb(127, 127, 127);
                  color: rgb(127, 127, 127);
                  column-rule-color: rgb(127, 127, 127);
                  font-style: italic;
                  list-style-type: none;
                  outline-color: rgb(127, 127, 127);
                  perspective-origin: 151.25px 24px;
                  text-align: center;
                  text-decoration: rgb(127, 127, 127);
                  text-emphasis-color: rgb(127, 127, 127);
                  transform-origin: 151.25px 24px;
                  word-break: break-word;
                  -webkit-text-fill-color: rgb(127, 127, 127);
                  -webkit-text-stroke-color: rgb(127, 127, 127);
                  block-size: 48px;
                  border-block-color: rgb(127, 127, 127);
                  border-color: rgb(127, 127, 127);
                  border-inline-color: rgb(127, 127, 127);
                  height: 48px;
                  inline-size: 302.5px;
                  width: 302.5px;
                "
              >
                Acai, Granola, Nutella, Banana, Strawberry, Chocolate Covered Almonds
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        data-elementor-type="loop-item"
        data-elementor-id="4252"
        class="elementor elementor-4252 swiper-slide e-loop-item e-loop-item-513 post-513 menu_item type-menu_item status-publish has-post-thumbnail hentry category-acai-bowls swiper-slide-duplicate"
        data-elementor-post-type="elementor_library"
        role="group"
        aria-roledescription="slide"
        data-custom-edit-handle="1"
        aria-label="3 / 10"
        data-swiper-slide-index="2"
        style="
          flex-shrink: 0;
          list-style-type: none;
          perspective-origin: 151.25px 253.438px;
          position: relative;
          transform-origin: 151.25px 253.438px;
          transition-property: transform;
          block-size: 506.875px;
          inset: 0px;
          height: 506.875px;
          inline-size: 302.5px;
          inset-block: 0px;
          inset-inline: 0px;
          margin-inline-end: 20px;
          margin-right: 20px;
          min-block-size: auto;
          min-height: auto;
          min-inline-size: auto;
          min-width: auto;
          width: 302.5px;
        "
      >
        <div
          data-particle_enable="false"
          data-particle-mobile-disabled="false"
          class="elementor-element elementor-element-1f7adeb5 e-con-full e-flex e-con e-parent"
          data-id="1f7adeb5"
          data-element_type="container"
          style="
            gap: 0px;
            display: flex;
            flex-direction: column;
            list-style-type: none;
            perspective-origin: 151.25px 253.438px;
            position: relative;
            transform-origin: 151.25px 253.438px;
            transition: background 0.3s, border 0.3s, box-shadow 0.3s, transform 0.4s;
            word-break: break-word;
            block-size: 506.875px;
            inset: 0px;
            height: 506.875px;
            inline-size: 302.5px;
            inset-block: 0px;
            inset-inline: 0px;
            max-inline-size: 100%;
            max-width: 100%;
            width: 302.5px;
          "
        >
          <div
            class="elementor-element elementor-element-62a12117 elementor-widget elementor-widget-theme-post-featured-image elementor-widget-image"
            data-id="62a12117"
            data-element_type="widget"
            data-widget_type="theme-post-featured-image.default"
            style="
              gap: 0px;
              list-style-type: none;
              perspective-origin: 151.25px 151.25px;
              position: relative;
              text-align: center;
              transform-origin: 151.25px 151.25px;
              word-break: break-word;
              block-size: 302.5px;
              inset: 0px;
              height: 302.5px;
              inline-size: 302.5px;
              inset-block: 0px;
              inset-inline: 0px;
              max-inline-size: 100%;
              max-width: 100%;
              min-block-size: auto;
              min-height: auto;
              width: 302.5px;
            "
          >
            <div
              class="elementor-widget-container"
              style="list-style-type: none; perspective-origin: 151.25px 151.25px; text-align: center; transform-origin: 151.25px 151.25px; transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s, transform 0.4s; word-break: break-word; block-size: 302.5px; height: 302.5px; inline-size: 302.5px; width: 302.5px"
            >
              <img
                loading="lazy"
                decoding="async"
                width="410"
                height="410"
                src="/"
                class="attachment-medium_large size-medium_large wp-image-1631"
                alt=""
                srcset="/ 410w, / 300w, / 150w"
                sizes="(max-width: 410px) 100vw, 410px"
                style="display: inline-block; list-style-type: none; perspective-origin: 151.25px 151.25px; text-align: center; transform-origin: 151.25px 151.25px; vertical-align: middle; word-break: break-word; block-size: 302.5px; height: 302.5px; inline-size: 302.5px; width: 302.5px"
              />
            </div>
          </div>
          <div
            class="elementor-element elementor-element-66e5738b elementor-widget elementor-widget-theme-post-title elementor-page-title elementor-widget-heading"
            data-id="66e5738b"
            data-element_type="widget"
            data-widget_type="theme-post-title.default"
            style="
              gap: 0px;
              list-style-type: none;
              perspective-origin: 151.25px 34.1875px;
              position: relative;
              text-align: center;
              transform-origin: 151.25px 34.1914px;
              word-break: break-word;
              block-size: 68.375px;
              inset: 0px;
              height: 68.375px;
              inline-size: 302.5px;
              inset-block: 0px;
              inset-inline: 0px;
              max-inline-size: 100%;
              max-width: 100%;
              min-block-size: auto;
              min-height: auto;
              width: 302.5px;
            "
          >
            <div
              class="elementor-widget-container"
              style="
                list-style-type: none;
                perspective-origin: 151.25px 26.6875px;
                text-align: center;
                transform-origin: 151.25px 26.6953px;
                transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s, transform 0.4s;
                word-break: break-word;
                block-size: 53.3828px;
                height: 53.3828px;
                inline-size: 302.5px;
                margin-block: 10px 5px;
                margin-bottom: 5px;
                margin-top: 10px;
                width: 302.5px;
              "
            >
              <h2
                class="elementor-heading-title elementor-size-default"
                style="
                  caret-color: rgb(111, 36, 115);
                  color: rgb(111, 36, 115);
                  column-rule-color: rgb(111, 36, 115);
                  list-style-type: none;
                  outline-color: rgb(111, 36, 115);
                  perspective-origin: 151.25px 19.1875px;
                  text-align: center;
                  text-decoration: rgb(111, 36, 115);
                  text-emphasis-color: rgb(111, 36, 115);
                  transform-origin: 151.25px 19.1992px;
                  word-break: break-word;
                  -webkit-text-fill-color: rgb(111, 36, 115);
                  -webkit-text-stroke-color: rgb(111, 36, 115);
                  block-size: 38.3906px;
                  border-block-color: rgb(111, 36, 115);
                  border-color: rgb(111, 36, 115);
                  border-inline-color: rgb(111, 36, 115);
                  height: 38.3906px;
                  inline-size: 302.5px;
                  margin-block: 0px;
                  margin-bottom: 0px;
                  margin-top: 0px;
                  width: 302.5px;
                "
              >
                Chronic
              </h2>
            </div>
          </div>
          <div
            class="elementor-element elementor-element-36107b0d elementor-widget elementor-widget-theme-post-content"
            data-id="36107b0d"
            data-element_type="widget"
            data-widget_type="theme-post-content.default"
            style="
              caret-color: rgb(127, 127, 127);
              color: rgb(127, 127, 127);
              gap: 0px;
              column-rule-color: rgb(127, 127, 127);
              font-style: italic;
              list-style-type: none;
              outline-color: rgb(127, 127, 127);
              perspective-origin: 151.25px 34px;
              position: relative;
              text-align: center;
              text-decoration: rgb(127, 127, 127);
              text-emphasis-color: rgb(127, 127, 127);
              transform-origin: 151.25px 34px;
              word-break: break-word;
              -webkit-text-fill-color: rgb(127, 127, 127);
              -webkit-text-stroke-color: rgb(127, 127, 127);
              block-size: 68px;
              border-block-color: rgb(127, 127, 127);
              border-color: rgb(127, 127, 127);
              border-inline-color: rgb(127, 127, 127);
              inset: 0px;
              height: 68px;
              inline-size: 302.5px;
              inset-block: 0px;
              inset-inline: 0px;
              max-inline-size: 100%;
              max-width: 100%;
              min-block-size: auto;
              min-height: auto;
              width: 302.5px;
            "
          >
            <div
              class="elementor-widget-container"
              style="
                caret-color: rgb(127, 127, 127);
                color: rgb(127, 127, 127);
                column-rule-color: rgb(127, 127, 127);
                font-style: italic;
                list-style-type: none;
                outline-color: rgb(127, 127, 127);
                perspective-origin: 151.25px 34px;
                text-align: center;
                text-decoration: rgb(127, 127, 127);
                text-emphasis-color: rgb(127, 127, 127);
                transform-origin: 151.25px 34px;
                transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s, transform 0.4s;
                word-break: break-word;
                -webkit-text-fill-color: rgb(127, 127, 127);
                -webkit-text-stroke-color: rgb(127, 127, 127);
                block-size: 68px;
                border-block-color: rgb(127, 127, 127);
                border-color: rgb(127, 127, 127);
                border-inline-color: rgb(127, 127, 127);
                height: 68px;
                inline-size: 302.5px;
                width: 302.5px;
              "
            >
              <p
                style="
                  caret-color: rgb(127, 127, 127);
                  color: rgb(127, 127, 127);
                  column-rule-color: rgb(127, 127, 127);
                  font-style: italic;
                  list-style-type: none;
                  outline-color: rgb(127, 127, 127);
                  perspective-origin: 151.25px 24px;
                  text-align: center;
                  text-decoration: rgb(127, 127, 127);
                  text-emphasis-color: rgb(127, 127, 127);
                  transform-origin: 151.25px 24px;
                  word-break: break-word;
                  -webkit-text-fill-color: rgb(127, 127, 127);
                  -webkit-text-stroke-color: rgb(127, 127, 127);
                  block-size: 48px;
                  border-block-color: rgb(127, 127, 127);
                  border-color: rgb(127, 127, 127);
                  border-inline-color: rgb(127, 127, 127);
                  height: 48px;
                  inline-size: 302.5px;
                  width: 302.5px;
                "
              >
                Acai, Granola, Banana, Strawberry, Kiwi, Pineapple, Coconut Shavings, Honey
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        data-elementor-type="loop-item"
        data-elementor-id="4252"
        class="elementor elementor-4252 swiper-slide e-loop-item e-loop-item-539 post-539 menu_item type-menu_item status-publish has-post-thumbnail hentry category-acai-bowls swiper-slide-duplicate"
        data-elementor-post-type="elementor_library"
        role="group"
        aria-roledescription="slide"
        data-custom-edit-handle="1"
        aria-label="4 / 10"
        data-swiper-slide-index="3"
        style="
          flex-shrink: 0;
          list-style-type: none;
          perspective-origin: 151.25px 253.438px;
          position: relative;
          transform-origin: 151.25px 253.438px;
          transition-property: transform;
          block-size: 506.875px;
          inset: 0px;
          height: 506.875px;
          inline-size: 302.5px;
          inset-block: 0px;
          inset-inline: 0px;
          margin-inline-end: 20px;
          margin-right: 20px;
          min-block-size: auto;
          min-height: auto;
          min-inline-size: auto;
          min-width: auto;
          width: 302.5px;
        "
      >
        <div
          data-particle_enable="false"
          data-particle-mobile-disabled="false"
          class="elementor-element elementor-element-1f7adeb5 e-con-full e-flex e-con e-parent"
          data-id="1f7adeb5"
          data-element_type="container"
          style="
            gap: 0px;
            display: flex;
            flex-direction: column;
            list-style-type: none;
            perspective-origin: 151.25px 253.438px;
            position: relative;
            transform-origin: 151.25px 253.438px;
            transition: background 0.3s, border 0.3s, box-shadow 0.3s, transform 0.4s;
            word-break: break-word;
            block-size: 506.875px;
            inset: 0px;
            height: 506.875px;
            inline-size: 302.5px;
            inset-block: 0px;
            inset-inline: 0px;
            max-inline-size: 100%;
            max-width: 100%;
            width: 302.5px;
          "
        >
          <div
            class="elementor-element elementor-element-62a12117 elementor-widget elementor-widget-theme-post-featured-image elementor-widget-image"
            data-id="62a12117"
            data-element_type="widget"
            data-widget_type="theme-post-featured-image.default"
            style="
              gap: 0px;
              list-style-type: none;
              perspective-origin: 151.25px 151.25px;
              position: relative;
              text-align: center;
              transform-origin: 151.25px 151.25px;
              word-break: break-word;
              block-size: 302.5px;
              inset: 0px;
              height: 302.5px;
              inline-size: 302.5px;
              inset-block: 0px;
              inset-inline: 0px;
              max-inline-size: 100%;
              max-width: 100%;
              min-block-size: auto;
              min-height: auto;
              width: 302.5px;
            "
          >
            <div
              class="elementor-widget-container"
              style="list-style-type: none; perspective-origin: 151.25px 151.25px; text-align: center; transform-origin: 151.25px 151.25px; transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s, transform 0.4s; word-break: break-word; block-size: 302.5px; height: 302.5px; inline-size: 302.5px; width: 302.5px"
            >
              <img
                loading="lazy"
                decoding="async"
                width="410"
                height="410"
                src="/"
                class="attachment-medium_large size-medium_large wp-image-1541"
                alt=""
                srcset="/ 410w, / 300w, / 150w"
                sizes="(max-width: 410px) 100vw, 410px"
                style="display: inline-block; list-style-type: none; perspective-origin: 151.25px 151.25px; text-align: center; transform-origin: 151.25px 151.25px; vertical-align: middle; word-break: break-word; block-size: 302.5px; height: 302.5px; inline-size: 302.5px; width: 302.5px"
              />
            </div>
          </div>
          <div
            class="elementor-element elementor-element-66e5738b elementor-widget elementor-widget-theme-post-title elementor-page-title elementor-widget-heading"
            data-id="66e5738b"
            data-element_type="widget"
            data-widget_type="theme-post-title.default"
            style="
              gap: 0px;
              list-style-type: none;
              perspective-origin: 151.25px 34.1875px;
              position: relative;
              text-align: center;
              transform-origin: 151.25px 34.1914px;
              word-break: break-word;
              block-size: 68.375px;
              inset: 0px;
              height: 68.375px;
              inline-size: 302.5px;
              inset-block: 0px;
              inset-inline: 0px;
              max-inline-size: 100%;
              max-width: 100%;
              min-block-size: auto;
              min-height: auto;
              width: 302.5px;
            "
          >
            <div
              class="elementor-widget-container"
              style="
                list-style-type: none;
                perspective-origin: 151.25px 26.6875px;
                text-align: center;
                transform-origin: 151.25px 26.6953px;
                transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s, transform 0.4s;
                word-break: break-word;
                block-size: 53.3828px;
                height: 53.3828px;
                inline-size: 302.5px;
                margin-block: 10px 5px;
                margin-bottom: 5px;
                margin-top: 10px;
                width: 302.5px;
              "
            >
              <h2
                class="elementor-heading-title elementor-size-default"
                style="
                  caret-color: rgb(111, 36, 115);
                  color: rgb(111, 36, 115);
                  column-rule-color: rgb(111, 36, 115);
                  list-style-type: none;
                  outline-color: rgb(111, 36, 115);
                  perspective-origin: 151.25px 19.1875px;
                  text-align: center;
                  text-decoration: rgb(111, 36, 115);
                  text-emphasis-color: rgb(111, 36, 115);
                  transform-origin: 151.25px 19.1992px;
                  word-break: break-word;
                  -webkit-text-fill-color: rgb(111, 36, 115);
                  -webkit-text-stroke-color: rgb(111, 36, 115);
                  block-size: 38.3906px;
                  border-block-color: rgb(111, 36, 115);
                  border-color: rgb(111, 36, 115);
                  border-inline-color: rgb(111, 36, 115);
                  height: 38.3906px;
                  inline-size: 302.5px;
                  margin-block: 0px;
                  margin-bottom: 0px;
                  margin-top: 0px;
                  width: 302.5px;
                "
              >
                Estes Bowl
              </h2>
            </div>
          </div>
          <div
            class="elementor-element elementor-element-36107b0d elementor-widget elementor-widget-theme-post-content"
            data-id="36107b0d"
            data-element_type="widget"
            data-widget_type="theme-post-content.default"
            style="
              caret-color: rgb(127, 127, 127);
              color: rgb(127, 127, 127);
              gap: 0px;
              column-rule-color: rgb(127, 127, 127);
              font-style: italic;
              list-style-type: none;
              outline-color: rgb(127, 127, 127);
              perspective-origin: 151.25px 46px;
              position: relative;
              text-align: center;
              text-decoration: rgb(127, 127, 127);
              text-emphasis-color: rgb(127, 127, 127);
              transform-origin: 151.25px 46px;
              word-break: break-word;
              -webkit-text-fill-color: rgb(127, 127, 127);
              -webkit-text-stroke-color: rgb(127, 127, 127);
              block-size: 92px;
              border-block-color: rgb(127, 127, 127);
              border-color: rgb(127, 127, 127);
              border-inline-color: rgb(127, 127, 127);
              inset: 0px;
              height: 92px;
              inline-size: 302.5px;
              inset-block: 0px;
              inset-inline: 0px;
              max-inline-size: 100%;
              max-width: 100%;
              min-block-size: auto;
              min-height: auto;
              width: 302.5px;
            "
          >
            <div
              class="elementor-widget-container"
              style="
                caret-color: rgb(127, 127, 127);
                color: rgb(127, 127, 127);
                column-rule-color: rgb(127, 127, 127);
                font-style: italic;
                list-style-type: none;
                outline-color: rgb(127, 127, 127);
                perspective-origin: 151.25px 46px;
                text-align: center;
                text-decoration: rgb(127, 127, 127);
                text-emphasis-color: rgb(127, 127, 127);
                transform-origin: 151.25px 46px;
                transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s, transform 0.4s;
                word-break: break-word;
                -webkit-text-fill-color: rgb(127, 127, 127);
                -webkit-text-stroke-color: rgb(127, 127, 127);
                block-size: 92px;
                border-block-color: rgb(127, 127, 127);
                border-color: rgb(127, 127, 127);
                border-inline-color: rgb(127, 127, 127);
                height: 92px;
                inline-size: 302.5px;
                width: 302.5px;
              "
            >
              <p
                style="
                  caret-color: rgb(127, 127, 127);
                  color: rgb(127, 127, 127);
                  column-rule-color: rgb(127, 127, 127);
                  font-style: italic;
                  list-style-type: none;
                  outline-color: rgb(127, 127, 127);
                  perspective-origin: 151.25px 36px;
                  text-align: center;
                  text-decoration: rgb(127, 127, 127);
                  text-emphasis-color: rgb(127, 127, 127);
                  transform-origin: 151.25px 36px;
                  word-break: break-word;
                  -webkit-text-fill-color: rgb(127, 127, 127);
                  -webkit-text-stroke-color: rgb(127, 127, 127);
                  block-size: 72px;
                  border-block-color: rgb(127, 127, 127);
                  border-color: rgb(127, 127, 127);
                  border-inline-color: rgb(127, 127, 127);
                  height: 72px;
                  inline-size: 302.5px;
                  width: 302.5px;
                "
              >
                Acai, Granola, Peanut Butter, Strawberry, Green Apple, Chocolate Covered Almonds, Honey
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <span class="swiper-notification" aria-live="assertive" aria-atomic="true" style="display: block; list-style-type: none; opacity: 0; pointer-events: none; position: absolute; z-index: -1000; block-size: 0px; inset: 0px 1270px 522.875px 0px; height: 0px; inline-size: 0px; inset-block: 0px 522.875px; inset-inline: 0px 1270px; width: 0px"></span>
  </div>

  <style>
    [data-id="0"]::before {
      border-block-end-color: rgb(127, 127, 127);
      border-block-start-color: rgb(127, 127, 127);
      border-bottom-color: rgb(127, 127, 127);
      border-inline-end-color: rgb(127, 127, 127);
      border-inline-start-color: rgb(127, 127, 127);
      border-left-color: rgb(127, 127, 127);
      border-right-color: rgb(127, 127, 127);
      border-top-color: rgb(127, 127, 127);
      caret-color: rgb(127, 127, 127);
      color: rgb(127, 127, 127);
      column-rule-color: rgb(127, 127, 127);
      content: "";
      cursor: pointer;
      font-family: eicons;
      font-size: 32px;
      font-style: normal;
      line-height: 32px;
      outline-color: rgb(127, 127, 127);
      perspective-origin: 0px 0px;
      text-decoration-color: rgb(127, 127, 127);
      text-emphasis-color: rgb(127, 127, 127);
      transform-origin: 0px 0px;
      -webkit-text-fill-color: rgb(127, 127, 127);
      -webkit-text-stroke-color: rgb(127, 127, 127);
    }
    [data-id="1"]::before {
      border-block-end-color: rgb(127, 127, 127);
      border-block-start-color: rgb(127, 127, 127);
      border-bottom-color: rgb(127, 127, 127);
      border-inline-end-color: rgb(127, 127, 127);
      border-inline-start-color: rgb(127, 127, 127);
      border-left-color: rgb(127, 127, 127);
      border-right-color: rgb(127, 127, 127);
      border-top-color: rgb(127, 127, 127);
      caret-color: rgb(127, 127, 127);
      color: rgb(127, 127, 127);
      column-rule-color: rgb(127, 127, 127);
      content: "";
      cursor: pointer;
      font-family: eicons;
      font-size: 32px;
      font-style: normal;
      line-height: 32px;
      outline-color: rgb(127, 127, 127);
      perspective-origin: 0px 0px;
      text-decoration-color: rgb(127, 127, 127);
      text-emphasis-color: rgb(127, 127, 127);
      transform-origin: 0px 0px;
      -webkit-text-fill-color: rgb(127, 127, 127);
      -webkit-text-stroke-color: rgb(127, 127, 127);
    }
  </style>
</div>` },
  { filename: "vertical carousel", content: `<!-- The vertical carousel is from https://www.citychiconline.com/-->
<div
  class="promo-items-wrap block-content slick-initialized slick-slider slick-vertical"
  style="
    background-color: black;
    block-size: 35px;
    inset: 0px;
    font-size: 13px;
    height: 35px;
    inset-block: 0px;
    inset-inline: 0px;
    line-height: 19.5px;
    max-inline-size: 100%;
    max-width: 100%;
    perspective-origin: 748.5px 17.5px;
    position: relative;
    text-align: center;
    touch-action: pan-y;
    transform-origin: 748.5px 17.5px;
    user-select: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  "
>
  <div
    class="slick-list draggable"
    style="
      block-size: 35px;
      inset: 0px;
      font-size: 13px;
      height: 35px;
      inset-block: 0px;
      inset-inline: 0px;
      line-height: 19.5px;
      overflow-block: hidden;
      overflow-inline: hidden;
      overflow: hidden;
      perspective-origin: 748.5px 17.5px;
      position: relative;
      text-align: center;
      transform: matrix(1, 0, 0, 1, 0, 0);
      transform-origin: 748.5px 17.5px;
      user-select: none;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    "
  >
    <div
      class="slick-track"
      style="
        opacity: 1;
        transform: matrix(1, 0, 0, 1, 0, -70);
        block-size: 245px;
        inset: 0px;
        display: flex;
        flex-direction: column;
        font-size: 13px;
        height: 245px;
        inset-block: 0px;
        inset-inline: 0px;
        line-height: 19.5px;
        perspective-origin: 748.5px 122.5px;
        position: relative;
        text-align: center;
        transform-origin: 748.5px 122.5px;
        user-select: none;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      "
      data-id="0"
    >
      <div
        class="slick-slide slick-cloned"
        data-slick-index="-1"
        id=""
        aria-hidden="true"
        style="
          width: 1497px;
          align-items: stretch;
          block-size: 35px;
          border-block: 1px solid rgba(0, 0, 0, 0);
          border-color: rgba(0, 0, 0, 0);
          border-style: solid;
          border-width: 1px;
          border-inline: 1px solid rgba(0, 0, 0, 0);
          display: flex;
          flex-shrink: 0;
          font-size: 13px;
          height: 35px;
          justify-content: center;
          line-height: 19.5px;
          max-inline-size: 1512px;
          max-width: 1512px;
          min-block-size: 1px;
          min-height: 1px;
          min-inline-size: auto;
          min-width: auto;
          perspective-origin: 748.5px 17.5px;
          text-align: center;
          transform-origin: 748.5px 17.5px;
          user-select: none;
          vertical-align: middle;
          -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        "
        tabindex="-1"
      >
        <div
          style="
            align-items: center;
            block-size: 33px;
            display: flex;
            font-size: 13px;
            height: 33px;
            inline-size: 178.016px;
            justify-content: center;
            line-height: 19.5px;
            min-block-size: auto;
            min-height: auto;
            min-inline-size: auto;
            min-width: auto;
            perspective-origin: 89.0078px 16.5px;
            text-align: center;
            transform-origin: 89.0078px 16.5px;
            user-select: none;
            width: 178.016px;
            -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
          "
        >
          <div
            class="item promo-item"
            style="
              display: inline-block;
              block-size: 33px;
              font-size: 13px;
              height: 33px;
              inline-size: 178.016px;
              line-height: 13px;
              min-block-size: auto;
              min-height: auto;
              min-inline-size: auto;
              min-width: auto;
              padding-block: 10px;
              padding: 10px 5px;
              padding-inline: 5px;
              perspective-origin: 89.0078px 16.5px;
              text-align: center;
              transform-origin: 89.0078px 16.5px;
              user-select: none;
              width: 178.016px;
              -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
            "
          >
            <a
              href="/plus-size-clothing"
              style="
                color: rgb(255, 255, 255);
                block-size: 13px;
                border-block-color: rgb(255, 255, 255);
                border-color: rgb(255, 255, 255);
                border-inline-color: rgb(255, 255, 255);
                caret-color: rgb(255, 255, 255);
                column-rule-color: rgb(255, 255, 255);
                cursor: pointer;
                display: block;
                font-size: 13px;
                height: 13px;
                inline-size: 168.016px;
                line-height: 13px;
                outline-color: rgb(255, 255, 255);
                perspective-origin: 84.0078px 6.5px;
                text-align: center;
                text-decoration-color: rgb(255, 255, 255);
                text-emphasis-color: rgb(255, 255, 255);
                transform-origin: 84.0078px 6.5px;
                user-select: none;
                width: 168.016px;
                -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
                -webkit-text-fill-color: rgb(255, 255, 255);
                -webkit-text-stroke-color: rgb(255, 255, 255);
              "
              tabindex="-1"
              >\$1 Shipping* on Orders \$49+</a
            >
          </div>
        </div>
      </div>
      <div
        class="slick-slide"
        data-slick-index="0"
        aria-hidden="true"
        style="
          width: 1497px;
          align-items: stretch;
          block-size: 35px;
          border-block: 1px solid rgba(0, 0, 0, 0);
          border-color: rgba(0, 0, 0, 0);
          border-style: solid;
          border-width: 1px;
          border-inline: 1px solid rgba(0, 0, 0, 0);
          display: flex;
          flex-shrink: 0;
          font-size: 13px;
          height: 35px;
          justify-content: center;
          line-height: 19.5px;
          max-inline-size: 1512px;
          max-width: 1512px;
          min-block-size: 1px;
          min-height: 1px;
          min-inline-size: auto;
          min-width: auto;
          perspective-origin: 748.5px 17.5px;
          text-align: center;
          transform-origin: 748.5px 17.5px;
          user-select: none;
          vertical-align: middle;
          -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        "
        tabindex="-1"
      >
        <div
          style="
            align-items: center;
            block-size: 33px;
            display: flex;
            font-size: 13px;
            height: 33px;
            inline-size: 262.922px;
            justify-content: center;
            line-height: 19.5px;
            min-block-size: auto;
            min-height: auto;
            min-inline-size: auto;
            min-width: auto;
            perspective-origin: 131.461px 16.5px;
            text-align: center;
            transform-origin: 131.461px 16.5px;
            user-select: none;
            width: 262.922px;
            -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
          "
        >
          <div
            class="item promo-item"
            style="
              display: inline-block;
              block-size: 33px;
              font-size: 13px;
              height: 33px;
              inline-size: 262.922px;
              line-height: 13px;
              min-block-size: auto;
              min-height: auto;
              min-inline-size: auto;
              min-width: auto;
              padding-block: 10px;
              padding: 10px 5px;
              padding-inline: 5px;
              perspective-origin: 131.461px 16.5px;
              text-align: center;
              transform-origin: 131.461px 16.5px;
              user-select: none;
              width: 262.922px;
              -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
            "
          >
            <a
              href="/plus-size-clothing"
              style="
                color: rgb(255, 255, 255);
                block-size: 13px;
                border-block-color: rgb(255, 255, 255);
                border-color: rgb(255, 255, 255);
                border-inline-color: rgb(255, 255, 255);
                caret-color: rgb(255, 255, 255);
                column-rule-color: rgb(255, 255, 255);
                cursor: pointer;
                display: block;
                font-size: 13px;
                height: 13px;
                inline-size: 252.922px;
                line-height: 13px;
                outline-color: rgb(255, 255, 255);
                perspective-origin: 126.461px 6.5px;
                text-align: center;
                text-decoration-color: rgb(255, 255, 255);
                text-emphasis-color: rgb(255, 255, 255);
                transform-origin: 126.461px 6.5px;
                user-select: none;
                width: 252.922px;
                -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
                -webkit-text-fill-color: rgb(255, 255, 255);
                -webkit-text-stroke-color: rgb(255, 255, 255);
              "
              tabindex="-1"
              >City Chic - A World of Curves in Sizes 12-24</a
            >
          </div>
        </div>
      </div>
      <div
        class="slick-slide slick-current slick-active"
        data-slick-index="1"
        aria-hidden="false"
        style="
          width: 1497px;
          align-items: stretch;
          block-size: 35px;
          border-block: 1px solid rgba(0, 0, 0, 0);
          border-color: rgba(0, 0, 0, 0);
          border-style: solid;
          border-width: 1px;
          border-inline: 1px solid rgba(0, 0, 0, 0);
          display: flex;
          flex-shrink: 0;
          font-size: 13px;
          height: 35px;
          justify-content: center;
          line-height: 19.5px;
          max-inline-size: 1512px;
          max-width: 1512px;
          min-block-size: 1px;
          min-height: 1px;
          min-inline-size: auto;
          min-width: auto;
          perspective-origin: 748.5px 17.5px;
          text-align: center;
          transform-origin: 748.5px 17.5px;
          user-select: none;
          vertical-align: middle;
          -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        "
      >
        <div
          style="
            align-items: center;
            block-size: 33px;
            display: flex;
            font-size: 13px;
            height: 33px;
            inline-size: 152.688px;
            justify-content: center;
            line-height: 19.5px;
            min-block-size: auto;
            min-height: auto;
            min-inline-size: auto;
            min-width: auto;
            perspective-origin: 76.3438px 16.5px;
            text-align: center;
            transform-origin: 76.3438px 16.5px;
            user-select: none;
            width: 152.688px;
            -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
          "
        >
          <div
            class="item promo-item"
            style="
              display: inline-block;
              block-size: 33px;
              font-size: 13px;
              height: 33px;
              inline-size: 152.688px;
              line-height: 13px;
              min-block-size: auto;
              min-height: auto;
              min-inline-size: auto;
              min-width: auto;
              padding-block: 10px;
              padding: 10px 5px;
              padding-inline: 5px;
              perspective-origin: 76.3438px 16.5px;
              text-align: center;
              transform-origin: 76.3438px 16.5px;
              user-select: none;
              width: 152.688px;
              -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
            "
          >
            <a
              href="/plus-size-clothing"
              style="
                color: rgb(255, 255, 255);
                block-size: 13px;
                border-block-color: rgb(255, 255, 255);
                border-color: rgb(255, 255, 255);
                border-inline-color: rgb(255, 255, 255);
                caret-color: rgb(255, 255, 255);
                column-rule-color: rgb(255, 255, 255);
                cursor: pointer;
                display: block;
                font-size: 13px;
                height: 13px;
                inline-size: 142.695px;
                line-height: 13px;
                outline-color: rgb(255, 255, 255);
                perspective-origin: 71.3438px 6.5px;
                text-align: center;
                text-decoration-color: rgb(255, 255, 255);
                text-emphasis-color: rgb(255, 255, 255);
                transform-origin: 71.3477px 6.5px;
                user-select: none;
                width: 142.695px;
                -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
                -webkit-text-fill-color: rgb(255, 255, 255);
                -webkit-text-stroke-color: rgb(255, 255, 255);
              "
              tabindex="0"
              >Up to 60% Off* Sitewide</a
            >
          </div>
        </div>
      </div>
      <div
        class="slick-slide"
        data-slick-index="2"
        aria-hidden="true"
        style="
          width: 1497px;
          align-items: stretch;
          block-size: 35px;
          border-block: 1px solid rgba(0, 0, 0, 0);
          border-color: rgba(0, 0, 0, 0);
          border-style: solid;
          border-width: 1px;
          border-inline: 1px solid rgba(0, 0, 0, 0);
          display: flex;
          flex-shrink: 0;
          font-size: 13px;
          height: 35px;
          justify-content: center;
          line-height: 19.5px;
          max-inline-size: 1512px;
          max-width: 1512px;
          min-block-size: 1px;
          min-height: 1px;
          min-inline-size: auto;
          min-width: auto;
          perspective-origin: 748.5px 17.5px;
          text-align: center;
          transform-origin: 748.5px 17.5px;
          user-select: none;
          vertical-align: middle;
          -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        "
        tabindex="-1"
      >
        <div
          style="
            align-items: center;
            block-size: 33px;
            display: flex;
            font-size: 13px;
            height: 33px;
            inline-size: 178.016px;
            justify-content: center;
            line-height: 19.5px;
            min-block-size: auto;
            min-height: auto;
            min-inline-size: auto;
            min-width: auto;
            perspective-origin: 89.0078px 16.5px;
            text-align: center;
            transform-origin: 89.0078px 16.5px;
            user-select: none;
            width: 178.016px;
            -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
          "
        >
          <div
            class="item promo-item"
            style="
              display: inline-block;
              block-size: 33px;
              font-size: 13px;
              height: 33px;
              inline-size: 178.016px;
              line-height: 13px;
              min-block-size: auto;
              min-height: auto;
              min-inline-size: auto;
              min-width: auto;
              padding-block: 10px;
              padding: 10px 5px;
              padding-inline: 5px;
              perspective-origin: 89.0078px 16.5px;
              text-align: center;
              transform-origin: 89.0078px 16.5px;
              user-select: none;
              width: 178.016px;
              -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
            "
          >
            <a
              href="/plus-size-clothing"
              style="
                color: rgb(255, 255, 255);
                block-size: 13px;
                border-block-color: rgb(255, 255, 255);
                border-color: rgb(255, 255, 255);
                border-inline-color: rgb(255, 255, 255);
                caret-color: rgb(255, 255, 255);
                column-rule-color: rgb(255, 255, 255);
                cursor: pointer;
                display: block;
                font-size: 13px;
                height: 13px;
                inline-size: 168.016px;
                line-height: 13px;
                outline-color: rgb(255, 255, 255);
                perspective-origin: 84.0078px 6.5px;
                text-align: center;
                text-decoration-color: rgb(255, 255, 255);
                text-emphasis-color: rgb(255, 255, 255);
                transform-origin: 84.0078px 6.5px;
                user-select: none;
                width: 168.016px;
                -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
                -webkit-text-fill-color: rgb(255, 255, 255);
                -webkit-text-stroke-color: rgb(255, 255, 255);
              "
              tabindex="-1"
              >\$1 Shipping* on Orders \$49+</a
            >
          </div>
        </div>
      </div>
      <div
        class="slick-slide slick-cloned"
        data-slick-index="3"
        id=""
        aria-hidden="true"
        style="
          width: 1497px;
          align-items: stretch;
          block-size: 35px;
          border-block: 1px solid rgba(0, 0, 0, 0);
          border-color: rgba(0, 0, 0, 0);
          border-style: solid;
          border-width: 1px;
          border-inline: 1px solid rgba(0, 0, 0, 0);
          display: flex;
          flex-shrink: 0;
          font-size: 13px;
          height: 35px;
          justify-content: center;
          line-height: 19.5px;
          max-inline-size: 1512px;
          max-width: 1512px;
          min-block-size: 1px;
          min-height: 1px;
          min-inline-size: auto;
          min-width: auto;
          perspective-origin: 748.5px 17.5px;
          text-align: center;
          transform-origin: 748.5px 17.5px;
          user-select: none;
          vertical-align: middle;
          -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        "
        tabindex="-1"
      >
        <div
          style="
            align-items: center;
            block-size: 33px;
            display: flex;
            font-size: 13px;
            height: 33px;
            inline-size: 262.922px;
            justify-content: center;
            line-height: 19.5px;
            min-block-size: auto;
            min-height: auto;
            min-inline-size: auto;
            min-width: auto;
            perspective-origin: 131.461px 16.5px;
            text-align: center;
            transform-origin: 131.461px 16.5px;
            user-select: none;
            width: 262.922px;
            -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
          "
        >
          <div
            class="item promo-item"
            style="
              display: inline-block;
              block-size: 33px;
              font-size: 13px;
              height: 33px;
              inline-size: 262.922px;
              line-height: 13px;
              min-block-size: auto;
              min-height: auto;
              min-inline-size: auto;
              min-width: auto;
              padding-block: 10px;
              padding: 10px 5px;
              padding-inline: 5px;
              perspective-origin: 131.461px 16.5px;
              text-align: center;
              transform-origin: 131.461px 16.5px;
              user-select: none;
              width: 262.922px;
              -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
            "
          >
            <a
              href="/plus-size-clothing"
              style="
                color: rgb(255, 255, 255);
                block-size: 13px;
                border-block-color: rgb(255, 255, 255);
                border-color: rgb(255, 255, 255);
                border-inline-color: rgb(255, 255, 255);
                caret-color: rgb(255, 255, 255);
                column-rule-color: rgb(255, 255, 255);
                cursor: pointer;
                display: block;
                font-size: 13px;
                height: 13px;
                inline-size: 252.922px;
                line-height: 13px;
                outline-color: rgb(255, 255, 255);
                perspective-origin: 126.461px 6.5px;
                text-align: center;
                text-decoration-color: rgb(255, 255, 255);
                text-emphasis-color: rgb(255, 255, 255);
                transform-origin: 126.461px 6.5px;
                user-select: none;
                width: 252.922px;
                -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
                -webkit-text-fill-color: rgb(255, 255, 255);
                -webkit-text-stroke-color: rgb(255, 255, 255);
              "
              tabindex="-1"
              >City Chic - A World of Curves in Sizes 12-24</a
            >
          </div>
        </div>
      </div>
      <div
        class="slick-slide slick-cloned"
        data-slick-index="4"
        id=""
        aria-hidden="true"
        style="
          width: 1497px;
          align-items: stretch;
          block-size: 35px;
          border-block: 1px solid rgba(0, 0, 0, 0);
          border-color: rgba(0, 0, 0, 0);
          border-style: solid;
          border-width: 1px;
          border-inline: 1px solid rgba(0, 0, 0, 0);
          display: flex;
          flex-shrink: 0;
          font-size: 13px;
          height: 35px;
          justify-content: center;
          line-height: 19.5px;
          max-inline-size: 1512px;
          max-width: 1512px;
          min-block-size: 1px;
          min-height: 1px;
          min-inline-size: auto;
          min-width: auto;
          perspective-origin: 748.5px 17.5px;
          text-align: center;
          transform-origin: 748.5px 17.5px;
          user-select: none;
          vertical-align: middle;
          -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        "
        tabindex="-1"
      >
        <div
          style="
            align-items: center;
            block-size: 33px;
            display: flex;
            font-size: 13px;
            height: 33px;
            inline-size: 152.688px;
            justify-content: center;
            line-height: 19.5px;
            min-block-size: auto;
            min-height: auto;
            min-inline-size: auto;
            min-width: auto;
            perspective-origin: 76.3438px 16.5px;
            text-align: center;
            transform-origin: 76.3438px 16.5px;
            user-select: none;
            width: 152.688px;
            -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
          "
        >
          <div
            class="item promo-item"
            style="
              display: inline-block;
              block-size: 33px;
              font-size: 13px;
              height: 33px;
              inline-size: 152.688px;
              line-height: 13px;
              min-block-size: auto;
              min-height: auto;
              min-inline-size: auto;
              min-width: auto;
              padding-block: 10px;
              padding: 10px 5px;
              padding-inline: 5px;
              perspective-origin: 76.3438px 16.5px;
              text-align: center;
              transform-origin: 76.3438px 16.5px;
              user-select: none;
              width: 152.688px;
              -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
            "
          >
            <a
              href="/plus-size-clothing"
              style="
                color: rgb(255, 255, 255);
                block-size: 13px;
                border-block-color: rgb(255, 255, 255);
                border-color: rgb(255, 255, 255);
                border-inline-color: rgb(255, 255, 255);
                caret-color: rgb(255, 255, 255);
                column-rule-color: rgb(255, 255, 255);
                cursor: pointer;
                display: block;
                font-size: 13px;
                height: 13px;
                inline-size: 142.695px;
                line-height: 13px;
                outline-color: rgb(255, 255, 255);
                perspective-origin: 71.3438px 6.5px;
                text-align: center;
                text-decoration-color: rgb(255, 255, 255);
                text-emphasis-color: rgb(255, 255, 255);
                transform-origin: 71.3477px 6.5px;
                user-select: none;
                width: 142.695px;
                -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
                -webkit-text-fill-color: rgb(255, 255, 255);
                -webkit-text-stroke-color: rgb(255, 255, 255);
              "
              tabindex="-1"
              >Up to 60% Off* Sitewide</a
            >
          </div>
        </div>
      </div>
      <div
        class="slick-slide slick-cloned"
        data-slick-index="5"
        id=""
        aria-hidden="true"
        style="
          width: 1497px;
          align-items: stretch;
          block-size: 35px;
          border-block: 1px solid rgba(0, 0, 0, 0);
          border-color: rgba(0, 0, 0, 0);
          border-style: solid;
          border-width: 1px;
          border-inline: 1px solid rgba(0, 0, 0, 0);
          display: flex;
          flex-shrink: 0;
          font-size: 13px;
          height: 35px;
          justify-content: center;
          line-height: 19.5px;
          max-inline-size: 1512px;
          max-width: 1512px;
          min-block-size: 1px;
          min-height: 1px;
          min-inline-size: auto;
          min-width: auto;
          perspective-origin: 748.5px 17.5px;
          text-align: center;
          transform-origin: 748.5px 17.5px;
          user-select: none;
          vertical-align: middle;
          -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        "
        tabindex="-1"
      >
        <div
          style="
            align-items: center;
            block-size: 33px;
            display: flex;
            font-size: 13px;
            height: 33px;
            inline-size: 178.016px;
            justify-content: center;
            line-height: 19.5px;
            min-block-size: auto;
            min-height: auto;
            min-inline-size: auto;
            min-width: auto;
            perspective-origin: 89.0078px 16.5px;
            text-align: center;
            transform-origin: 89.0078px 16.5px;
            user-select: none;
            width: 178.016px;
            -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
          "
        >
          <div
            class="item promo-item"
            style="
              display: inline-block;
              block-size: 33px;
              font-size: 13px;
              height: 33px;
              inline-size: 178.016px;
              line-height: 13px;
              min-block-size: auto;
              min-height: auto;
              min-inline-size: auto;
              min-width: auto;
              padding-block: 10px;
              padding: 10px 5px;
              padding-inline: 5px;
              perspective-origin: 89.0078px 16.5px;
              text-align: center;
              transform-origin: 89.0078px 16.5px;
              user-select: none;
              width: 178.016px;
              -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
            "
          >
            <a
              href="/plus-size-clothing"
              style="
                color: rgb(255, 255, 255);
                block-size: 13px;
                border-block-color: rgb(255, 255, 255);
                border-color: rgb(255, 255, 255);
                border-inline-color: rgb(255, 255, 255);
                caret-color: rgb(255, 255, 255);
                column-rule-color: rgb(255, 255, 255);
                cursor: pointer;
                display: block;
                font-size: 13px;
                height: 13px;
                inline-size: 168.016px;
                line-height: 13px;
                outline-color: rgb(255, 255, 255);
                perspective-origin: 84.0078px 6.5px;
                text-align: center;
                text-decoration-color: rgb(255, 255, 255);
                text-emphasis-color: rgb(255, 255, 255);
                transform-origin: 84.0078px 6.5px;
                user-select: none;
                width: 168.016px;
                -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
                -webkit-text-fill-color: rgb(255, 255, 255);
                -webkit-text-stroke-color: rgb(255, 255, 255);
              "
              tabindex="-1"
              >\$1 Shipping* on Orders \$49+</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<style>
  [data-id="0"]::after {
    block-size: 0px;
    clear: both;
    content: "";
    display: table;
    font-size: 13px;
    height: 0px;
    inline-size: 1497px;
    line-height: 19.5px;
    min-block-size: auto;
    min-height: auto;
    min-inline-size: auto;
    min-width: auto;
    perspective-origin: 748.5px 0px;
    text-align: center;
    transform-origin: 748.5px 0px;
    user-select: none;
    width: 1497px;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
  [data-id="0"]::before {
    block-size: 0px;
    content: "";
    display: table;
    font-size: 13px;
    height: 0px;
    inline-size: 1497px;
    line-height: 19.5px;
    min-block-size: auto;
    min-height: auto;
    min-inline-size: auto;
    min-width: auto;
    perspective-origin: 748.5px 0px;
    text-align: center;
    transform-origin: 748.5px 0px;
    user-select: none;
    width: 1497px;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
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

export default CarouselDraggingMovementsFailure;
