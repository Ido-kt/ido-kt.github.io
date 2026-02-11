import React from "react";
import EngineIssueSuccess from "../../../layout/engineIssueSuccess";

const CarouselDraggingMovementsSuccess = () => {
  const ruleId = "carousel-dragging-movements";
  const title = `Carousels that require dragging movements should provide alternative methods of operation with a single pointer`;
  const description = `Carousels that require dragging movements should provide alternative methods of operation with a single pointer for example prev and next buttons or pagination.`;
  const helpText = `Ensure that the carousel can be operated with a single pointer. For example by providing 'previous' and 'next' buttons to navigate between slides, or pagination controls that allow direct access to specific slides.`;
  const bestPractices = [
  "Follow proper HTML semantics",
  "Ensure screen reader compatibility",
  "Test with assistive technologies"
  ];
  const htmlExamples = [
  { filename: "slick slider big screen", content: `<!-- The slider is in inapplicableNodes because in big screen the carousel is not draggable and there are no prev/next or pagination buttons, in small screen the carousel is draggable and there is a next button. https://comfortoneshoes.com/-->
<div
  class="halo-row brand-layout--slider column-5 brands-slider halo-slider sm-column-2 md-column-3 slick-initialized slick-slider"
  data-brands-slider=""
  data-rows="5"
  data-arrows="true"
  data-dots="false"
  data-center-mode="false"
  data-rows-mobile="2"
  data-autoplay="false"
  data-autoplay-speed="3000"
  style="--row-distance-style: -5px; block-size: 100px; inset: 0px; display: block; flex-wrap: wrap; height: 100px; inline-size: 1170px; inset-block: 0px; inset-inline: 0px; perspective-origin: 585px 50px; position: relative; touch-action: pan-y; transform-origin: 585px 50px; user-select: none; width: 1170px"
>
  <div
    aria-live="polite"
    class="slick-list draggable"
    style="
      block-size: 100px;
      inset: 0px;
      display: block;
      height: 100px;
      inline-size: 1180px;
      inset-block: 0px;
      inset-inline: 0px;
      margin-inline: -5px;
      margin-left: -5px;
      margin-right: -5px;
      overflow-block: hidden;
      overflow-inline: hidden;
      overflow: hidden;
      perspective-origin: 590px 50px;
      position: relative;
      transform: matrix(1, 0, 0, 1, 0, 0);
      transform-origin: 590px 50px;
      user-select: none;
      width: 1180px;
    "
  >
    <div class="slick-track" style="opacity: 1; transform: matrix(1, 0, 0, 1, 0, 0); block-size: 100px; inset: 0px; display: block; height: 100px; inline-size: 1180px; inset-block: 0px; inset-inline: 0px; perspective-origin: 590px 50px; position: relative; transform-origin: 590px 50px; user-select: none; width: 1180px" role="listbox" data-id="0">
      <div
        class="halo-item block-image_zJVTQT slick-slide slick-current slick-active"
        id="block-image_zJVTQT"
        style="
          --item-distance-style: 5px;
          --title_color: #000000;
          --title_color_hover: #3e8cc4;
          --color_des: #3c3c3c;
          block-size: 100px;
          display: block;
          float: left;
          height: 100px;
          inline-size: 236px;
          min-block-size: 1px;
          min-height: 1px;
          padding-inline: 5px;
          padding-left: 5px;
          padding-right: 5px;
          perspective-origin: 118px 50px;
          transform-origin: 118px 50px;
          user-select: none;
          width: 236px;
        "
        data-slick-index="0"
        aria-hidden="false"
        tabindex="-1"
        role="option"
        aria-describedby="slick-slide00"
      >
        <div class="wrapper-content" style="--border_radius: 0px; --animation-order: 1; block-size: 100px; display: block; height: 100px; inline-size: 226px; perspective-origin: 113px 50px; transform-origin: 113px 50px; user-select: none; width: 226px">
          <div
            class="wrapper-image"
            style="
              align-items: center;
              background-color: rgb(255, 255, 255);
              block-size: 100px;
              border-block: 1px solid rgba(0, 0, 0, 0.15);
              border-color: rgba(0, 0, 0, 0.15);
              border-radius: 4px;
              border-style: solid;
              border-width: 1px;
              border-end-end-radius: 4px;
              border-end-start-radius: 4px;
              border-inline: 1px solid rgba(0, 0, 0, 0.15);
              border-start-end-radius: 4px;
              border-start-start-radius: 4px;
              display: flex;
              height: 100px;
              inline-size: 226px;
              justify-content: center;
              overflow-block: hidden;
              overflow-inline: hidden;
              overflow: hidden;
              padding-block: 8px;
              padding: 8px 20px;
              padding-inline: 20px;
              perspective-origin: 113px 50px;
              transform-origin: 113px 50px;
              user-select: none;
              width: 226px;
            "
          >
            <a
              class=""
              title=""
              href="/collections/birkenstock"
              aria-label="COMFORT ONE SHOES"
              tabindex="0"
              style="
                block-size: 29.8281px;
                border-radius: 0%;
                border-end-end-radius: 0%;
                border-end-start-radius: 0%;
                border-start-end-radius: 0%;
                border-start-start-radius: 0%;
                display: block;
                height: 29.8281px;
                inline-size: 184px;
                min-block-size: auto;
                min-height: auto;
                min-inline-size: auto;
                min-width: auto;
                perspective-origin: 92px 14.9141px;
                transform-origin: 92px 14.9141px;
                user-select: none;
                width: 184px;
              "
            >
              <img
                data-srcset="//comfortoneshoes.com/cdn/shop/files/birkenstock_blue-195_165x.png?v=1753277492 165w,//comfortoneshoes.com/cdn/shop/files/birkenstock_blue-195_170x.png?v=1753277492 170w,//comfortoneshoes.com/cdn/shop/files/birkenstock_blue-195_185x.png?v=1753277492 185w"
                loading="lazy"
                sizes="(min-width: 1100px) 195px, (min-width: 750px) calc((100vw - 130px) / 2), calc((100vw - 50px) / 2)"
                alt=""
                size="195"
                class="lazyloaded"
                style="
                  margin: 0px auto;
                  block-size: 29.8359px;
                  border-radius: 0%;
                  border-end-end-radius: 0%;
                  border-end-start-radius: 0%;
                  border-start-end-radius: 0%;
                  border-start-start-radius: 0%;
                  cursor: pointer;
                  height: 29.8359px;
                  inline-size: 184px;
                  perspective-origin: 92px 14.9141px;
                  transform-origin: 92px 14.918px;
                  user-select: none;
                  width: 184px;
                "
                srcset="//comfortoneshoes.com/cdn/shop/files/birkenstock_blue-195_165x.png?v=1753277492 165w, //comfortoneshoes.com/cdn/shop/files/birkenstock_blue-195_170x.png?v=1753277492 170w, //comfortoneshoes.com/cdn/shop/files/birkenstock_blue-195_185x.png?v=1753277492 185w" /><span
                class="data-lazy-loading"
                style="cursor: pointer; user-select: none"
              ></span
            ></a>
          </div>
        </div>
      </div>
      <div
        class="halo-item block-image_Cw6LYD slick-slide slick-active"
        id="block-image_Cw6LYD"
        style="
          --item-distance-style: 5px;
          --title_color: #000000;
          --title_color_hover: #3e8cc4;
          --color_des: #3c3c3c;
          block-size: 100px;
          display: block;
          float: left;
          height: 100px;
          inline-size: 236px;
          min-block-size: 1px;
          min-height: 1px;
          padding-inline: 5px;
          padding-left: 5px;
          padding-right: 5px;
          perspective-origin: 118px 50px;
          transform-origin: 118px 50px;
          user-select: none;
          width: 236px;
        "
        data-slick-index="1"
        aria-hidden="false"
        tabindex="-1"
        role="option"
        aria-describedby="slick-slide01"
      >
        <div class="wrapper-content" style="--border_radius: 0px; --animation-order: 2; block-size: 100px; display: block; height: 100px; inline-size: 226px; perspective-origin: 113px 50px; transform-origin: 113px 50px; user-select: none; width: 226px">
          <div
            class="wrapper-image"
            style="
              align-items: center;
              background-color: rgb(255, 255, 255);
              block-size: 100px;
              border-block: 1px solid rgba(0, 0, 0, 0.15);
              border-color: rgba(0, 0, 0, 0.15);
              border-radius: 4px;
              border-style: solid;
              border-width: 1px;
              border-end-end-radius: 4px;
              border-end-start-radius: 4px;
              border-inline: 1px solid rgba(0, 0, 0, 0.15);
              border-start-end-radius: 4px;
              border-start-start-radius: 4px;
              display: flex;
              height: 100px;
              inline-size: 226px;
              justify-content: center;
              overflow-block: hidden;
              overflow-inline: hidden;
              overflow: hidden;
              padding-block: 8px;
              padding: 8px 20px;
              padding-inline: 20px;
              perspective-origin: 113px 50px;
              transform-origin: 113px 50px;
              user-select: none;
              width: 226px;
            "
          >
            <a
              class=""
              title=""
              href="/collections/ugg"
              aria-label="COMFORT ONE SHOES"
              tabindex="0"
              style="
                block-size: 55px;
                border-radius: 0%;
                border-end-end-radius: 0%;
                border-end-start-radius: 0%;
                border-start-end-radius: 0%;
                border-start-start-radius: 0%;
                display: block;
                height: 55px;
                inline-size: 120px;
                min-block-size: auto;
                min-height: auto;
                min-inline-size: auto;
                min-width: auto;
                perspective-origin: 60px 27.5px;
                transform-origin: 60px 27.5px;
                user-select: none;
                width: 120px;
              "
            >
              <img
                data-srcset="//comfortoneshoes.com/cdn/shop/files/ugg-tiny_bc164fa2-12e4-45c4-aacd-366068847e58.png?v=1753277193
"
                loading="lazy"
                sizes="(min-width: 1100px) 120px, (min-width: 750px) calc((100vw - 130px) / 2), calc((100vw - 50px) / 2)"
                alt=""
                size="120"
                class="lazyloaded"
                style="margin: 0px auto; block-size: 55px; border-radius: 0%; border-end-end-radius: 0%; border-end-start-radius: 0%; border-start-end-radius: 0%; border-start-start-radius: 0%; cursor: pointer; height: 55px; inline-size: 120px; perspective-origin: 60px 27.5px; transform-origin: 60px 27.5px; user-select: none; width: 120px"
                srcset="//comfortoneshoes.com/cdn/shop/files/ugg-tiny_bc164fa2-12e4-45c4-aacd-366068847e58.png?v=1753277193" /><span class="data-lazy-loading" style="cursor: pointer; user-select: none"></span
            ></a>
          </div>
        </div>
      </div>
      <div
        class="halo-item block-image_JfTNP6 slick-slide slick-active"
        id="block-image_JfTNP6"
        style="
          --item-distance-style: 5px;
          --title_color: #000000;
          --title_color_hover: #3e8cc4;
          --color_des: #3c3c3c;
          block-size: 100px;
          display: block;
          float: left;
          height: 100px;
          inline-size: 236px;
          min-block-size: 1px;
          min-height: 1px;
          padding-inline: 5px;
          padding-left: 5px;
          padding-right: 5px;
          perspective-origin: 118px 50px;
          transform-origin: 118px 50px;
          user-select: none;
          width: 236px;
        "
        data-slick-index="2"
        aria-hidden="false"
        tabindex="-1"
        role="option"
        aria-describedby="slick-slide02"
      >
        <div class="wrapper-content" style="--border_radius: 0px; --animation-order: 3; block-size: 100px; display: block; height: 100px; inline-size: 226px; perspective-origin: 113px 50px; transform-origin: 113px 50px; user-select: none; width: 226px">
          <div
            class="wrapper-image"
            style="
              align-items: center;
              background-color: rgb(255, 255, 255);
              block-size: 100px;
              border-block: 1px solid rgba(0, 0, 0, 0.15);
              border-color: rgba(0, 0, 0, 0.15);
              border-radius: 4px;
              border-style: solid;
              border-width: 1px;
              border-end-end-radius: 4px;
              border-end-start-radius: 4px;
              border-inline: 1px solid rgba(0, 0, 0, 0.15);
              border-start-end-radius: 4px;
              border-start-start-radius: 4px;
              display: flex;
              height: 100px;
              inline-size: 226px;
              justify-content: center;
              overflow-block: hidden;
              overflow-inline: hidden;
              overflow: hidden;
              padding-block: 8px;
              padding: 8px 20px;
              padding-inline: 20px;
              perspective-origin: 113px 50px;
              transform-origin: 113px 50px;
              user-select: none;
              width: 226px;
            "
          >
            <a
              class=""
              title=""
              href="/collections/hoka"
              aria-label="COMFORT ONE SHOES"
              tabindex="0"
              style="
                block-size: 184px;
                border-radius: 0%;
                border-end-end-radius: 0%;
                border-end-start-radius: 0%;
                border-start-end-radius: 0%;
                border-start-start-radius: 0%;
                display: block;
                height: 184px;
                inline-size: 184px;
                min-block-size: auto;
                min-height: auto;
                min-inline-size: auto;
                min-width: auto;
                perspective-origin: 92px 92px;
                transform-origin: 92px 92px;
                user-select: none;
                width: 184px;
              "
            >
              <img
                data-srcset="//comfortoneshoes.com/cdn/shop/files/c963ae59acf2704cc95d433092a64a6c90a2aef8_165x.png?v=1752816379 165w,//comfortoneshoes.com/cdn/shop/files/c963ae59acf2704cc95d433092a64a6c90a2aef8_170x.png?v=1752816379 170w,//comfortoneshoes.com/cdn/shop/files/c963ae59acf2704cc95d433092a64a6c90a2aef8_185x.png?v=1752816379 185w,//comfortoneshoes.com/cdn/shop/files/c963ae59acf2704cc95d433092a64a6c90a2aef8_198x.png?v=1752816379 198w,//comfortoneshoes.com/cdn/shop/files/c963ae59acf2704cc95d433092a64a6c90a2aef8_205x.png?v=1752816379 205w,//comfortoneshoes.com/cdn/shop/files/c963ae59acf2704cc95d433092a64a6c90a2aef8_210x.png?v=1752816379 210w,//comfortoneshoes.com/cdn/shop/files/c963ae59acf2704cc95d433092a64a6c90a2aef8_220x.png?v=1752816379 220w"
                loading="lazy"
                sizes="(min-width: 1100px) 240px, (min-width: 750px) calc((100vw - 130px) / 2), calc((100vw - 50px) / 2)"
                alt=""
                size="240"
                class="lazyloaded"
                style="margin: 0px auto; block-size: 184px; border-radius: 0%; border-end-end-radius: 0%; border-end-start-radius: 0%; border-start-end-radius: 0%; border-start-start-radius: 0%; cursor: pointer; height: 184px; inline-size: 184px; perspective-origin: 92px 92px; transform-origin: 92px 92px; user-select: none; width: 184px"
                srcset="
                  //comfortoneshoes.com/cdn/shop/files/c963ae59acf2704cc95d433092a64a6c90a2aef8_165x.png?v=1752816379 165w,
                  //comfortoneshoes.com/cdn/shop/files/c963ae59acf2704cc95d433092a64a6c90a2aef8_170x.png?v=1752816379 170w,
                  //comfortoneshoes.com/cdn/shop/files/c963ae59acf2704cc95d433092a64a6c90a2aef8_185x.png?v=1752816379 185w,
                  //comfortoneshoes.com/cdn/shop/files/c963ae59acf2704cc95d433092a64a6c90a2aef8_198x.png?v=1752816379 198w,
                  //comfortoneshoes.com/cdn/shop/files/c963ae59acf2704cc95d433092a64a6c90a2aef8_205x.png?v=1752816379 205w,
                  //comfortoneshoes.com/cdn/shop/files/c963ae59acf2704cc95d433092a64a6c90a2aef8_210x.png?v=1752816379 210w,
                  //comfortoneshoes.com/cdn/shop/files/c963ae59acf2704cc95d433092a64a6c90a2aef8_220x.png?v=1752816379 220w
                " /><span class="data-lazy-loading" style="cursor: pointer; user-select: none"></span
            ></a>
          </div>
        </div>
      </div>
      <div
        class="halo-item block-image_cWA3x4 slick-slide slick-active"
        id="block-image_cWA3x4"
        style="
          --item-distance-style: 5px;
          --title_color: #000000;
          --title_color_hover: #3e8cc4;
          --color_des: #3c3c3c;
          block-size: 100px;
          display: block;
          float: left;
          height: 100px;
          inline-size: 236px;
          min-block-size: 1px;
          min-height: 1px;
          padding-inline: 5px;
          padding-left: 5px;
          padding-right: 5px;
          perspective-origin: 118px 50px;
          transform-origin: 118px 50px;
          user-select: none;
          width: 236px;
        "
        data-slick-index="3"
        aria-hidden="false"
        tabindex="-1"
        role="option"
        aria-describedby="slick-slide03"
      >
        <div class="wrapper-content" style="--border_radius: 0px; --animation-order: 4; block-size: 100px; display: block; height: 100px; inline-size: 226px; perspective-origin: 113px 50px; transform-origin: 113px 50px; user-select: none; width: 226px">
          <div
            class="wrapper-image"
            style="
              align-items: center;
              background-color: rgb(255, 255, 255);
              block-size: 100px;
              border-block: 1px solid rgba(0, 0, 0, 0.15);
              border-color: rgba(0, 0, 0, 0.15);
              border-radius: 4px;
              border-style: solid;
              border-width: 1px;
              border-end-end-radius: 4px;
              border-end-start-radius: 4px;
              border-inline: 1px solid rgba(0, 0, 0, 0.15);
              border-start-end-radius: 4px;
              border-start-start-radius: 4px;
              display: flex;
              height: 100px;
              inline-size: 226px;
              justify-content: center;
              overflow-block: hidden;
              overflow-inline: hidden;
              overflow: hidden;
              padding-block: 8px;
              padding: 8px 20px;
              padding-inline: 20px;
              perspective-origin: 113px 50px;
              transform-origin: 113px 50px;
              user-select: none;
              width: 226px;
            "
          >
            <a
              class=""
              title=""
              href="/collections/on-running"
              aria-label="COMFORT ONE SHOES"
              tabindex="0"
              style="
                block-size: 74px;
                border-radius: 0%;
                border-end-end-radius: 0%;
                border-end-start-radius: 0%;
                border-start-end-radius: 0%;
                border-start-start-radius: 0%;
                display: block;
                height: 74px;
                inline-size: 37px;
                min-block-size: auto;
                min-height: auto;
                min-inline-size: auto;
                min-width: auto;
                perspective-origin: 18.5px 37px;
                transform-origin: 18.5px 37px;
                user-select: none;
                width: 37px;
              "
            >
              <img
                data-srcset="//comfortoneshoes.com/cdn/shop/files/on-tiny-logo.png?v=1753128464
"
                loading="lazy"
                sizes="(min-width: 1100px) 37px, (min-width: 750px) calc((100vw - 130px) / 2), calc((100vw - 50px) / 2)"
                alt=""
                size="37"
                class="lazyloaded"
                style="margin: 0px auto; block-size: 74px; border-radius: 0%; border-end-end-radius: 0%; border-end-start-radius: 0%; border-start-end-radius: 0%; border-start-start-radius: 0%; cursor: pointer; height: 74px; inline-size: 37px; perspective-origin: 18.5px 37px; transform-origin: 18.5px 37px; user-select: none; width: 37px"
                srcset="//comfortoneshoes.com/cdn/shop/files/on-tiny-logo.png?v=1753128464" /><span class="data-lazy-loading" style="cursor: pointer; user-select: none"></span
            ></a>
          </div>
        </div>
      </div>
      <div
        class="halo-item block-image_CkW4PD slick-slide slick-active"
        id="block-image_CkW4PD"
        style="
          --item-distance-style: 5px;
          --title_color: #000000;
          --title_color_hover: #3e8cc4;
          --color_des: #3c3c3c;
          block-size: 100px;
          display: block;
          float: left;
          height: 100px;
          inline-size: 236px;
          min-block-size: 1px;
          min-height: 1px;
          padding-inline: 5px;
          padding-left: 5px;
          padding-right: 5px;
          perspective-origin: 118px 50px;
          transform-origin: 118px 50px;
          user-select: none;
          width: 236px;
        "
        data-slick-index="4"
        aria-hidden="false"
        tabindex="-1"
        role="option"
        aria-describedby="slick-slide04"
      >
        <div class="wrapper-content" style="--border_radius: 0px; --animation-order: 5; block-size: 100px; display: block; height: 100px; inline-size: 226px; perspective-origin: 113px 50px; transform-origin: 113px 50px; user-select: none; width: 226px">
          <div
            class="wrapper-image"
            style="
              align-items: center;
              background-color: rgb(255, 255, 255);
              block-size: 100px;
              border-block: 1px solid rgba(0, 0, 0, 0.15);
              border-color: rgba(0, 0, 0, 0.15);
              border-radius: 4px;
              border-style: solid;
              border-width: 1px;
              border-end-end-radius: 4px;
              border-end-start-radius: 4px;
              border-inline: 1px solid rgba(0, 0, 0, 0.15);
              border-start-end-radius: 4px;
              border-start-start-radius: 4px;
              display: flex;
              height: 100px;
              inline-size: 226px;
              justify-content: center;
              overflow-block: hidden;
              overflow-inline: hidden;
              overflow: hidden;
              padding-block: 8px;
              padding: 8px 20px;
              padding-inline: 20px;
              perspective-origin: 113px 50px;
              transform-origin: 113px 50px;
              user-select: none;
              width: 226px;
            "
          >
            <a
              class=""
              title=""
              href="/collections/hartjes"
              aria-label="COMFORT ONE SHOES"
              tabindex="0"
              style="
                block-size: 26.8516px;
                border-radius: 0%;
                border-end-end-radius: 0%;
                border-end-start-radius: 0%;
                border-start-end-radius: 0%;
                border-start-start-radius: 0%;
                display: block;
                height: 26.8516px;
                inline-size: 184px;
                min-block-size: auto;
                min-height: auto;
                min-inline-size: auto;
                min-width: auto;
                perspective-origin: 92px 13.4219px;
                transform-origin: 92px 13.4258px;
                user-select: none;
                width: 184px;
              "
            >
              <img
                data-srcset="//comfortoneshoes.com/cdn/shop/files/hartjes-black-195_165x.png?v=1753277582 165w,//comfortoneshoes.com/cdn/shop/files/hartjes-black-195_170x.png?v=1753277582 170w,//comfortoneshoes.com/cdn/shop/files/hartjes-black-195_185x.png?v=1753277582 185w"
                loading="lazy"
                sizes="(min-width: 1100px) 195px, (min-width: 750px) calc((100vw - 130px) / 2), calc((100vw - 50px) / 2)"
                alt=""
                size="195"
                class="lazyloaded"
                style="
                  margin: 0px auto;
                  block-size: 26.8516px;
                  border-radius: 0%;
                  border-end-end-radius: 0%;
                  border-end-start-radius: 0%;
                  border-start-end-radius: 0%;
                  border-start-start-radius: 0%;
                  cursor: pointer;
                  height: 26.8516px;
                  inline-size: 184px;
                  perspective-origin: 92px 13.4219px;
                  transform-origin: 92px 13.4258px;
                  user-select: none;
                  width: 184px;
                "
                srcset="//comfortoneshoes.com/cdn/shop/files/hartjes-black-195_165x.png?v=1753277582 165w, //comfortoneshoes.com/cdn/shop/files/hartjes-black-195_170x.png?v=1753277582 170w, //comfortoneshoes.com/cdn/shop/files/hartjes-black-195_185x.png?v=1753277582 185w" /><span
                class="data-lazy-loading"
                style="cursor: pointer; user-select: none"
              ></span
            ></a>
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
    height: 0px;
    inline-size: 0px;
    perspective-origin: 0px 0px;
    transform-origin: 0px 0px;
    user-select: none;
    width: 0px;
    --row-distance-style: -5px;
  }
  [data-id="0"]::before {
    block-size: 0px;
    content: "";
    display: table;
    height: 0px;
    inline-size: 0px;
    perspective-origin: 0px 0px;
    transform-origin: 0px 0px;
    user-select: none;
    width: 0px;
    --row-distance-style: -5px;
  }
</style>` },
  { filename: "slick slider small screen", content: `<div
  class="halo-row brand-layout--slider column-5 brands-slider halo-slider sm-column-2 md-column-3 slick-initialized slick-slider"
  data-brands-slider=""
  data-rows="5"
  data-arrows="true"
  data-dots="false"
  data-center-mode="false"
  data-rows-mobile="2"
  data-autoplay="false"
  data-autoplay-speed="3000"
  style="
    --row-distance-style: -5px;
    block-size: 100px;
    inset: 0px;
    display: flex;
    flex-grow: 1;
    flex-wrap: wrap;
    height: 100px;
    inline-size: 741px;
    inset-block: 0px;
    inset-inline: 0px;
    margin-inline: -8px;
    margin-left: -8px;
    margin-right: -8px;
    perspective-origin: 370.5px 50px;
    position: relative;
    touch-action: pan-y;
    transform-origin: 370.5px 50px;
    user-select: none;
    width: 741px;
  "
>
  <button
    type="button"
    class="slick-prev slick-arrow slick-disabled"
    aria-label="Previous"
    role="button"
    aria-disabled="true"
    style="
      display: none;
      background-color: rgb(255, 255, 255);
      block-size: 35px;
      border-block: 1px solid rgb(255, 255, 255);
      border-color: rgb(255, 255, 255);
      border-radius: 50%;
      border-style: solid;
      border-width: 1px;
      border-end-end-radius: 50%;
      border-end-start-radius: 50%;
      border-inline: 1px solid rgb(255, 255, 255);
      border-start-end-radius: 50%;
      border-start-start-radius: 50%;
      box-shadow: rgba(0, 0, 0, 0.3) 0px 2px 6px 0px;
      font-size: 0px;
      height: 35px;
      inline-size: 35px;
      inset-block-start: 50%;
      inset-inline-start: 0px;
      left: 0px;
      line-height: 0px;
      opacity: 0.4;
      padding-block: 8px;
      padding: 8px;
      padding-inline: 8px;
      perspective-origin: 50% 50%;
      pointer-events: none;
      position: absolute;
      top: 50%;
      transform-origin: 50% 50%;
      transition-duration: 0.3s;
      user-select: none;
      width: 35px;
      z-index: 1;
    "
  >
    <svg
      xmlns="/"
      viewBox="0 0 24 24"
      style="
        block-size: 22px;
        border-block-color: rgb(0, 0, 0);
        border-color: rgb(0, 0, 0);
        border-inline-color: rgb(0, 0, 0);
        caret-color: rgb(0, 0, 0);
        color: rgb(0, 0, 0);
        column-rule-color: rgb(0, 0, 0);
        cursor: pointer;
        fill: rgb(0, 0, 0);
        font-family: Arial;
        font-size: 0px;
        height: 22px;
        inline-size: 22px;
        line-height: 0px;
        max-block-size: 100%;
        max-height: 100%;
        max-inline-size: 100%;
        max-width: 100%;
        outline-color: rgb(0, 0, 0);
        overflow-block: hidden;
        overflow-clip-margin: content-box;
        overflow-inline: hidden;
        overflow: hidden;
        perspective-origin: 50% 50%;
        pointer-events: none;
        stroke: rgba(0, 0, 0, 0);
        text-align: center;
        text-decoration-color: rgb(0, 0, 0);
        text-emphasis-color: rgb(0, 0, 0);
        transform-origin: 50% 50%;
        user-select: none;
        width: 22px;
        -webkit-text-fill-color: rgb(0, 0, 0);
        -webkit-text-stroke-color: rgb(0, 0, 0);
      "
    >
      <path d="M 7.75 1.34375 L 6.25 2.65625 L 14.65625 12 L 6.25 21.34375 L 7.75 22.65625 L 16.75 12.65625 L 17.34375 12 L 16.75 11.34375 Z"></path>
    </svg>
  </button>
  <div
    aria-live="polite"
    class="slick-list draggable"
    style="
      block-size: 100px;
      inset: 0px;
      display: block;
      height: 100px;
      inline-size: 741px;
      inset-block: 0px;
      inset-inline: 0px;
      min-block-size: auto;
      min-height: auto;
      min-inline-size: auto;
      min-width: auto;
      overflow-block: hidden;
      overflow-inline: hidden;
      overflow: hidden;
      perspective-origin: 370.5px 50px;
      position: relative;
      transform: matrix(1, 0, 0, 1, 0, 0);
      transform-origin: 370.5px 50px;
      user-select: none;
      width: 741px;
    "
  >
    <div
      class="slick-track"
      style="opacity: 1; transform: matrix(1, 0, 0, 1, 0, 0); block-size: 100px; inset: 0px; display: block; height: 100px; inline-size: 930px; inset-block: 0px; inset-inline: 0px; margin-inline-end: -189px; margin-right: -189px; perspective-origin: 465px 50px; position: relative; transform-origin: 465px 50px; user-select: none; width: 930px"
      role="listbox"
      data-id="0"
    >
      <div
        class="halo-item block-image_zJVTQT slick-slide slick-current slick-active"
        id="block-image_zJVTQT"
        style="
          --item-distance-style: 5px;
          --title_color: #000000;
          --title_color_hover: #3e8cc4;
          --color_des: #3c3c3c;
          block-size: 100px;
          display: block;
          float: left;
          height: 100px;
          inline-size: 186px;
          min-block-size: 1px;
          min-height: 1px;
          padding-inline: 8px;
          padding-left: 8px;
          padding-right: 8px;
          perspective-origin: 93px 50px;
          transform-origin: 93px 50px;
          user-select: none;
          width: 186px;
        "
        data-slick-index="0"
        aria-hidden="false"
        tabindex="-1"
        role="option"
        aria-describedby="slick-slide00"
      >
        <div class="wrapper-content" style="--border_radius: 0px; --animation-order: 1; block-size: 100px; display: block; height: 100px; inline-size: 170px; perspective-origin: 85px 50px; transform-origin: 85px 50px; user-select: none; width: 170px">
          <div
            class="wrapper-image"
            style="
              align-items: center;
              background-color: rgb(255, 255, 255);
              block-size: 100px;
              border-block: 1px solid rgba(0, 0, 0, 0.15);
              border-color: rgba(0, 0, 0, 0.15);
              border-radius: 4px;
              border-style: solid;
              border-width: 1px;
              border-end-end-radius: 4px;
              border-end-start-radius: 4px;
              border-inline: 1px solid rgba(0, 0, 0, 0.15);
              border-start-end-radius: 4px;
              border-start-start-radius: 4px;
              display: flex;
              height: 100px;
              inline-size: 170px;
              justify-content: center;
              overflow-block: hidden;
              overflow-inline: hidden;
              overflow: hidden;
              padding-block: 8px;
              padding: 8px 20px;
              padding-inline: 20px;
              perspective-origin: 85px 50px;
              transform-origin: 85px 50px;
              user-select: none;
              width: 170px;
            "
          >
            <a
              class=""
              title=""
              href="/collections/birkenstock"
              aria-label="COMFORT ONE SHOES"
              tabindex="0"
              style="
                block-size: 20.75px;
                border-radius: 0%;
                border-end-end-radius: 0%;
                border-end-start-radius: 0%;
                border-start-end-radius: 0%;
                border-start-start-radius: 0%;
                display: block;
                height: 20.75px;
                inline-size: 128px;
                min-block-size: auto;
                min-height: auto;
                min-inline-size: auto;
                min-width: auto;
                perspective-origin: 64px 10.375px;
                transform-origin: 64px 10.375px;
                user-select: none;
                width: 128px;
              "
            >
              <img
                data-srcset="//comfortoneshoes.com/cdn/shop/files/birkenstock_blue-195_165x.png?v=1753277492 165w,//comfortoneshoes.com/cdn/shop/files/birkenstock_blue-195_170x.png?v=1753277492 170w,//comfortoneshoes.com/cdn/shop/files/birkenstock_blue-195_185x.png?v=1753277492 185w"
                loading="lazy"
                sizes="(min-width: 1100px) 195px, (min-width: 750px) calc((100vw - 130px) / 2), calc((100vw - 50px) / 2)"
                alt=""
                size="195"
                class="ls-is-cached lazyloaded"
                style="
                  margin: 0px auto;
                  block-size: 20.75px;
                  border-radius: 0%;
                  border-end-end-radius: 0%;
                  border-end-start-radius: 0%;
                  border-start-end-radius: 0%;
                  border-start-start-radius: 0%;
                  cursor: pointer;
                  height: 20.75px;
                  inline-size: 128px;
                  perspective-origin: 64px 10.375px;
                  transform-origin: 64px 10.375px;
                  user-select: none;
                  width: 128px;
                "
                srcset="//comfortoneshoes.com/cdn/shop/files/birkenstock_blue-195_165x.png?v=1753277492 165w, //comfortoneshoes.com/cdn/shop/files/birkenstock_blue-195_170x.png?v=1753277492 170w, //comfortoneshoes.com/cdn/shop/files/birkenstock_blue-195_185x.png?v=1753277492 185w" /><span
                class="data-lazy-loading"
                style="cursor: pointer; user-select: none"
              ></span
            ></a>
          </div>
        </div>
      </div>
      <div
        class="halo-item block-image_Cw6LYD slick-slide slick-active"
        id="block-image_Cw6LYD"
        style="
          --item-distance-style: 5px;
          --title_color: #000000;
          --title_color_hover: #3e8cc4;
          --color_des: #3c3c3c;
          block-size: 100px;
          display: block;
          float: left;
          height: 100px;
          inline-size: 186px;
          min-block-size: 1px;
          min-height: 1px;
          padding-inline: 8px;
          padding-left: 8px;
          padding-right: 8px;
          perspective-origin: 93px 50px;
          transform-origin: 93px 50px;
          user-select: none;
          width: 186px;
        "
        data-slick-index="1"
        aria-hidden="false"
        tabindex="-1"
        role="option"
        aria-describedby="slick-slide01"
      >
        <div class="wrapper-content" style="--border_radius: 0px; --animation-order: 2; block-size: 100px; display: block; height: 100px; inline-size: 170px; perspective-origin: 85px 50px; transform-origin: 85px 50px; user-select: none; width: 170px">
          <div
            class="wrapper-image"
            style="
              align-items: center;
              background-color: rgb(255, 255, 255);
              block-size: 100px;
              border-block: 1px solid rgba(0, 0, 0, 0.15);
              border-color: rgba(0, 0, 0, 0.15);
              border-radius: 4px;
              border-style: solid;
              border-width: 1px;
              border-end-end-radius: 4px;
              border-end-start-radius: 4px;
              border-inline: 1px solid rgba(0, 0, 0, 0.15);
              border-start-end-radius: 4px;
              border-start-start-radius: 4px;
              display: flex;
              height: 100px;
              inline-size: 170px;
              justify-content: center;
              overflow-block: hidden;
              overflow-inline: hidden;
              overflow: hidden;
              padding-block: 8px;
              padding: 8px 20px;
              padding-inline: 20px;
              perspective-origin: 85px 50px;
              transform-origin: 85px 50px;
              user-select: none;
              width: 170px;
            "
          >
            <a
              class=""
              title=""
              href="/collections/ugg"
              aria-label="COMFORT ONE SHOES"
              tabindex="0"
              style="
                block-size: 55px;
                border-radius: 0%;
                border-end-end-radius: 0%;
                border-end-start-radius: 0%;
                border-start-end-radius: 0%;
                border-start-start-radius: 0%;
                display: block;
                height: 55px;
                inline-size: 120px;
                min-block-size: auto;
                min-height: auto;
                min-inline-size: auto;
                min-width: auto;
                perspective-origin: 60px 27.5px;
                transform-origin: 60px 27.5px;
                user-select: none;
                width: 120px;
              "
            >
              <img
                data-srcset="//comfortoneshoes.com/cdn/shop/files/ugg-tiny_bc164fa2-12e4-45c4-aacd-366068847e58.png?v=1753277193
"
                loading="lazy"
                sizes="(min-width: 1100px) 120px, (min-width: 750px) calc((100vw - 130px) / 2), calc((100vw - 50px) / 2)"
                alt=""
                size="120"
                class="ls-is-cached lazyloaded"
                style="margin: 0px auto; block-size: 55px; border-radius: 0%; border-end-end-radius: 0%; border-end-start-radius: 0%; border-start-end-radius: 0%; border-start-start-radius: 0%; cursor: pointer; height: 55px; inline-size: 120px; perspective-origin: 60px 27.5px; transform-origin: 60px 27.5px; user-select: none; width: 120px"
                srcset="//comfortoneshoes.com/cdn/shop/files/ugg-tiny_bc164fa2-12e4-45c4-aacd-366068847e58.png?v=1753277193" /><span class="data-lazy-loading" style="cursor: pointer; user-select: none"></span
            ></a>
          </div>
        </div>
      </div>
      <div
        class="halo-item block-image_JfTNP6 slick-slide slick-active"
        id="block-image_JfTNP6"
        style="
          --item-distance-style: 5px;
          --title_color: #000000;
          --title_color_hover: #3e8cc4;
          --color_des: #3c3c3c;
          block-size: 100px;
          display: block;
          float: left;
          height: 100px;
          inline-size: 186px;
          min-block-size: 1px;
          min-height: 1px;
          padding-inline: 8px;
          padding-left: 8px;
          padding-right: 8px;
          perspective-origin: 93px 50px;
          transform-origin: 93px 50px;
          user-select: none;
          width: 186px;
        "
        data-slick-index="2"
        aria-hidden="false"
        tabindex="-1"
        role="option"
        aria-describedby="slick-slide02"
      >
        <div class="wrapper-content" style="--border_radius: 0px; --animation-order: 3; block-size: 100px; display: block; height: 100px; inline-size: 170px; perspective-origin: 85px 50px; transform-origin: 85px 50px; user-select: none; width: 170px">
          <div
            class="wrapper-image"
            style="
              align-items: center;
              background-color: rgb(255, 255, 255);
              block-size: 100px;
              border-block: 1px solid rgba(0, 0, 0, 0.15);
              border-color: rgba(0, 0, 0, 0.15);
              border-radius: 4px;
              border-style: solid;
              border-width: 1px;
              border-end-end-radius: 4px;
              border-end-start-radius: 4px;
              border-inline: 1px solid rgba(0, 0, 0, 0.15);
              border-start-end-radius: 4px;
              border-start-start-radius: 4px;
              display: flex;
              height: 100px;
              inline-size: 170px;
              justify-content: center;
              overflow-block: hidden;
              overflow-inline: hidden;
              overflow: hidden;
              padding-block: 8px;
              padding: 8px 20px;
              padding-inline: 20px;
              perspective-origin: 85px 50px;
              transform-origin: 85px 50px;
              user-select: none;
              width: 170px;
            "
          >
            <a
              class=""
              title=""
              href="/collections/hoka"
              aria-label="COMFORT ONE SHOES"
              tabindex="0"
              style="
                block-size: 128px;
                border-radius: 0%;
                border-end-end-radius: 0%;
                border-end-start-radius: 0%;
                border-start-end-radius: 0%;
                border-start-start-radius: 0%;
                display: block;
                height: 128px;
                inline-size: 128px;
                min-block-size: auto;
                min-height: auto;
                min-inline-size: auto;
                min-width: auto;
                perspective-origin: 64px 64px;
                transform-origin: 64px 64px;
                user-select: none;
                width: 128px;
              "
            >
              <img
                data-srcset="//comfortoneshoes.com/cdn/shop/files/c963ae59acf2704cc95d433092a64a6c90a2aef8_165x.png?v=1752816379 165w,//comfortoneshoes.com/cdn/shop/files/c963ae59acf2704cc95d433092a64a6c90a2aef8_170x.png?v=1752816379 170w,//comfortoneshoes.com/cdn/shop/files/c963ae59acf2704cc95d433092a64a6c90a2aef8_185x.png?v=1752816379 185w,//comfortoneshoes.com/cdn/shop/files/c963ae59acf2704cc95d433092a64a6c90a2aef8_198x.png?v=1752816379 198w,//comfortoneshoes.com/cdn/shop/files/c963ae59acf2704cc95d433092a64a6c90a2aef8_205x.png?v=1752816379 205w,//comfortoneshoes.com/cdn/shop/files/c963ae59acf2704cc95d433092a64a6c90a2aef8_210x.png?v=1752816379 210w,//comfortoneshoes.com/cdn/shop/files/c963ae59acf2704cc95d433092a64a6c90a2aef8_220x.png?v=1752816379 220w"
                loading="lazy"
                sizes="(min-width: 1100px) 240px, (min-width: 750px) calc((100vw - 130px) / 2), calc((100vw - 50px) / 2)"
                alt=""
                size="240"
                class="ls-is-cached lazyloaded"
                style="margin: 0px auto; block-size: 128px; border-radius: 0%; border-end-end-radius: 0%; border-end-start-radius: 0%; border-start-end-radius: 0%; border-start-start-radius: 0%; cursor: pointer; height: 128px; inline-size: 128px; perspective-origin: 64px 64px; transform-origin: 64px 64px; user-select: none; width: 128px"
                srcset="
                  //comfortoneshoes.com/cdn/shop/files/c963ae59acf2704cc95d433092a64a6c90a2aef8_165x.png?v=1752816379 165w,
                  //comfortoneshoes.com/cdn/shop/files/c963ae59acf2704cc95d433092a64a6c90a2aef8_170x.png?v=1752816379 170w,
                  //comfortoneshoes.com/cdn/shop/files/c963ae59acf2704cc95d433092a64a6c90a2aef8_185x.png?v=1752816379 185w,
                  //comfortoneshoes.com/cdn/shop/files/c963ae59acf2704cc95d433092a64a6c90a2aef8_198x.png?v=1752816379 198w,
                  //comfortoneshoes.com/cdn/shop/files/c963ae59acf2704cc95d433092a64a6c90a2aef8_205x.png?v=1752816379 205w,
                  //comfortoneshoes.com/cdn/shop/files/c963ae59acf2704cc95d433092a64a6c90a2aef8_210x.png?v=1752816379 210w,
                  //comfortoneshoes.com/cdn/shop/files/c963ae59acf2704cc95d433092a64a6c90a2aef8_220x.png?v=1752816379 220w
                " /><span class="data-lazy-loading" style="cursor: pointer; user-select: none"></span
            ></a>
          </div>
        </div>
      </div>
      <div
        class="halo-item block-image_cWA3x4 slick-slide slick-active"
        id="block-image_cWA3x4"
        style="
          --item-distance-style: 5px;
          --title_color: #000000;
          --title_color_hover: #3e8cc4;
          --color_des: #3c3c3c;
          block-size: 100px;
          display: block;
          float: left;
          height: 100px;
          inline-size: 186px;
          min-block-size: 1px;
          min-height: 1px;
          padding-inline: 8px;
          padding-left: 8px;
          padding-right: 8px;
          perspective-origin: 93px 50px;
          transform-origin: 93px 50px;
          user-select: none;
          width: 186px;
        "
        data-slick-index="3"
        aria-hidden="false"
        tabindex="-1"
        role="option"
        aria-describedby="slick-slide03"
      >
        <div class="wrapper-content" style="--border_radius: 0px; --animation-order: 4; block-size: 100px; display: block; height: 100px; inline-size: 170px; perspective-origin: 85px 50px; transform-origin: 85px 50px; user-select: none; width: 170px">
          <div
            class="wrapper-image"
            style="
              align-items: center;
              background-color: rgb(255, 255, 255);
              block-size: 100px;
              border-block: 1px solid rgba(0, 0, 0, 0.15);
              border-color: rgba(0, 0, 0, 0.15);
              border-radius: 4px;
              border-style: solid;
              border-width: 1px;
              border-end-end-radius: 4px;
              border-end-start-radius: 4px;
              border-inline: 1px solid rgba(0, 0, 0, 0.15);
              border-start-end-radius: 4px;
              border-start-start-radius: 4px;
              display: flex;
              height: 100px;
              inline-size: 170px;
              justify-content: center;
              overflow-block: hidden;
              overflow-inline: hidden;
              overflow: hidden;
              padding-block: 8px;
              padding: 8px 20px;
              padding-inline: 20px;
              perspective-origin: 85px 50px;
              transform-origin: 85px 50px;
              user-select: none;
              width: 170px;
            "
          >
            <a
              class=""
              title=""
              href="/collections/on-running"
              aria-label="COMFORT ONE SHOES"
              tabindex="0"
              style="
                block-size: 74px;
                border-radius: 0%;
                border-end-end-radius: 0%;
                border-end-start-radius: 0%;
                border-start-end-radius: 0%;
                border-start-start-radius: 0%;
                display: block;
                height: 74px;
                inline-size: 37px;
                min-block-size: auto;
                min-height: auto;
                min-inline-size: auto;
                min-width: auto;
                perspective-origin: 18.5px 37px;
                transform-origin: 18.5px 37px;
                user-select: none;
                width: 37px;
              "
            >
              <img
                data-srcset="//comfortoneshoes.com/cdn/shop/files/on-tiny-logo.png?v=1753128464
"
                loading="lazy"
                sizes="(min-width: 1100px) 37px, (min-width: 750px) calc((100vw - 130px) / 2), calc((100vw - 50px) / 2)"
                alt=""
                size="37"
                class="ls-is-cached lazyloaded"
                style="margin: 0px auto; block-size: 74px; border-radius: 0%; border-end-end-radius: 0%; border-end-start-radius: 0%; border-start-end-radius: 0%; border-start-start-radius: 0%; cursor: pointer; height: 74px; inline-size: 37px; perspective-origin: 18.5px 37px; transform-origin: 18.5px 37px; user-select: none; width: 37px"
                srcset="//comfortoneshoes.com/cdn/shop/files/on-tiny-logo.png?v=1753128464" /><span class="data-lazy-loading" style="cursor: pointer; user-select: none"></span
            ></a>
          </div>
        </div>
      </div>
      <div
        class="halo-item block-image_CkW4PD slick-slide"
        id="block-image_CkW4PD"
        style="
          --item-distance-style: 5px;
          --title_color: #000000;
          --title_color_hover: #3e8cc4;
          --color_des: #3c3c3c;
          block-size: 100px;
          display: block;
          float: left;
          height: 100px;
          inline-size: 186px;
          min-block-size: 1px;
          min-height: 1px;
          padding-inline: 8px;
          padding-left: 8px;
          padding-right: 8px;
          perspective-origin: 93px 50px;
          transform-origin: 93px 50px;
          user-select: none;
          width: 186px;
        "
        data-slick-index="4"
        aria-hidden="true"
        tabindex="-1"
        role="option"
        aria-describedby="slick-slide04"
      >
        <div class="wrapper-content" style="--border_radius: 0px; --animation-order: 5; block-size: 100px; display: block; height: 100px; inline-size: 170px; perspective-origin: 85px 50px; transform-origin: 85px 50px; user-select: none; width: 170px">
          <div
            class="wrapper-image"
            style="
              align-items: center;
              background-color: rgb(255, 255, 255);
              block-size: 100px;
              border-block: 1px solid rgba(0, 0, 0, 0.15);
              border-color: rgba(0, 0, 0, 0.15);
              border-radius: 4px;
              border-style: solid;
              border-width: 1px;
              border-end-end-radius: 4px;
              border-end-start-radius: 4px;
              border-inline: 1px solid rgba(0, 0, 0, 0.15);
              border-start-end-radius: 4px;
              border-start-start-radius: 4px;
              display: flex;
              height: 100px;
              inline-size: 170px;
              justify-content: center;
              overflow-block: hidden;
              overflow-inline: hidden;
              overflow: hidden;
              padding-block: 8px;
              padding: 8px 20px;
              padding-inline: 20px;
              perspective-origin: 85px 50px;
              transform-origin: 85px 50px;
              user-select: none;
              width: 170px;
            "
          >
            <a
              class=""
              title=""
              href="/collections/hartjes"
              aria-label="COMFORT ONE SHOES"
              tabindex="-1"
              style="
                block-size: 18.6797px;
                border-radius: 0%;
                border-end-end-radius: 0%;
                border-end-start-radius: 0%;
                border-start-end-radius: 0%;
                border-start-start-radius: 0%;
                display: block;
                height: 18.6797px;
                inline-size: 128px;
                min-block-size: auto;
                min-height: auto;
                min-inline-size: auto;
                min-width: auto;
                perspective-origin: 64px 9.33594px;
                transform-origin: 64px 9.33984px;
                user-select: none;
                width: 128px;
              "
            >
              <img
                data-srcset="//comfortoneshoes.com/cdn/shop/files/hartjes-black-195_165x.png?v=1753277582 165w,//comfortoneshoes.com/cdn/shop/files/hartjes-black-195_170x.png?v=1753277582 170w,//comfortoneshoes.com/cdn/shop/files/hartjes-black-195_185x.png?v=1753277582 185w"
                loading="lazy"
                sizes="(min-width: 1100px) 195px, (min-width: 750px) calc((100vw - 130px) / 2), calc((100vw - 50px) / 2)"
                alt=""
                size="195"
                class="ls-is-cached lazyloaded"
                style="
                  margin: 0px auto;
                  block-size: 18.6797px;
                  border-radius: 0%;
                  border-end-end-radius: 0%;
                  border-end-start-radius: 0%;
                  border-start-end-radius: 0%;
                  border-start-start-radius: 0%;
                  cursor: pointer;
                  height: 18.6797px;
                  inline-size: 128px;
                  perspective-origin: 64px 9.33594px;
                  transform-origin: 64px 9.33984px;
                  user-select: none;
                  width: 128px;
                "
                srcset="//comfortoneshoes.com/cdn/shop/files/hartjes-black-195_165x.png?v=1753277582 165w, //comfortoneshoes.com/cdn/shop/files/hartjes-black-195_170x.png?v=1753277582 170w, //comfortoneshoes.com/cdn/shop/files/hartjes-black-195_185x.png?v=1753277582 185w" /><span
                class="data-lazy-loading"
                style="cursor: pointer; user-select: none"
              ></span
            ></a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <button
    type="button"
    class="slick-next slick-arrow"
    aria-label="Next"
    role="button"
    style="
      background-color: rgb(255, 255, 255);
      block-size: 35px;
      border-block: 1px solid rgb(255, 255, 255);
      border-color: rgb(255, 255, 255);
      border-radius: 50%;
      border-style: solid;
      border-width: 1px;
      border-end-end-radius: 50%;
      border-end-start-radius: 50%;
      border-inline: 1px solid rgb(255, 255, 255);
      border-start-end-radius: 50%;
      border-start-start-radius: 50%;
      inset: 50px 0px 15px 706px;
      box-shadow: rgba(0, 0, 0, 0.3) 0px 2px 6px 0px;
      display: block;
      font-size: 0px;
      height: 35px;
      inline-size: 35px;
      inset-block: 50px 15px;
      inset-inline: 706px 0px;
      line-height: 0px;
      padding-block: 8px;
      padding: 8px;
      padding-inline: 8px;
      perspective-origin: 17.5px 17.5px;
      position: absolute;
      transform: matrix(1, 0, 0, 1, 0, -17.5);
      transform-origin: 17.5px 17.5px;
      transition-duration: 0.3s;
      user-select: none;
      width: 35px;
      z-index: 1;
    "
    aria-disabled="false"
  >
    <svg
      xmlns="/"
      viewBox="0 0 24 24"
      style="
        block-size: 17px;
        border-block-color: rgb(0, 0, 0);
        border-color: rgb(0, 0, 0);
        border-inline-color: rgb(0, 0, 0);
        caret-color: rgb(0, 0, 0);
        color: rgb(0, 0, 0);
        column-rule-color: rgb(0, 0, 0);
        cursor: pointer;
        fill: rgb(0, 0, 0);
        font-family: Arial;
        font-size: 0px;
        height: 17px;
        inline-size: 17px;
        line-height: 0px;
        max-block-size: 100%;
        max-height: 100%;
        max-inline-size: 100%;
        max-width: 100%;
        outline-color: rgb(0, 0, 0);
        overflow-block: hidden;
        overflow-clip-margin: content-box;
        overflow-inline: hidden;
        overflow: hidden;
        perspective-origin: 8.5px 8.5px;
        stroke: rgba(0, 0, 0, 0);
        text-align: center;
        text-decoration-color: rgb(0, 0, 0);
        text-emphasis-color: rgb(0, 0, 0);
        transform-origin: 8.5px 8.5px;
        user-select: none;
        width: 17px;
        -webkit-text-fill-color: rgb(0, 0, 0);
        -webkit-text-stroke-color: rgb(0, 0, 0);
      "
    >
      <path d="M 7.75 1.34375 L 6.25 2.65625 L 14.65625 12 L 6.25 21.34375 L 7.75 22.65625 L 16.75 12.65625 L 17.34375 12 L 16.75 11.34375 Z"></path>
    </svg>
  </button>
</div>
<style>
  [data-id="0"]::after {
    block-size: 0px;
    clear: both;
    content: "";
    display: table;
    height: 0px;
    inline-size: 0px;
    perspective-origin: 0px 0px;
    transform-origin: 0px 0px;
    user-select: none;
    width: 0px;
    --row-distance-style: -5px;
  }
  [data-id="0"]::before {
    block-size: 0px;
    content: "";
    display: table;
    height: 0px;
    inline-size: 0px;
    perspective-origin: 0px 0px;
    transform-origin: 0px 0px;
    user-select: none;
    width: 0px;
    --row-distance-style: -5px;
  }
</style>` },
  { filename: "slick slider with prev and next buttons", content: `<div
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
    <button
      type="button"
      data-role="none"
      class="slick-arrow slick-prev"
      style="
        display: block;
        background-color: rgb(255, 255, 255);
        block-size: 40px;
        border-block: 1px solid rgb(224, 212, 255);
        border-color: rgb(224, 212, 255);
        border-radius: 50%;
        border-style: solid;
        border-width: 1px;
        border-end-end-radius: 50%;
        border-end-start-radius: 50%;
        border-inline: 1px solid rgb(224, 212, 255);
        border-start-end-radius: 50%;
        border-start-start-radius: 50%;
        inset: 90px 919px 194px -35px;
        caret-color: rgba(0, 0, 0, 0);
        color: rgba(0, 0, 0, 0);
        column-rule-color: rgba(0, 0, 0, 0);
        cursor: pointer;
        font-size: 0px;
        height: 40px;
        inline-size: 40px;
        inset-block: 90px 194px;
        inset-inline: -35px 919px;
        line-height: 0px;
        margin-block-start: -20px;
        margin-top: -20px;
        outline-color: rgba(0, 0, 0, 0);
        padding-block: 0px;
        padding: 0px;
        padding-inline: 0px;
        perspective-origin: 20px 20px;
        position: absolute;
        text-decoration-color: rgba(0, 0, 0, 0);
        text-emphasis-color: rgba(0, 0, 0, 0);
        transform: matrix(1, 0, 0, 1, 0, 0);
        transform-origin: 20px 20px;
        user-select: none;
        width: 40px;
        z-index: 2;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        -webkit-text-fill-color: rgba(0, 0, 0, 0);
        -webkit-text-stroke-color: rgba(0, 0, 0, 0);
      "
      data-id="0"
    >
      Previous
    </button>
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
    <button
      type="button"
      data-role="none"
      class="slick-arrow slick-next"
      style="
        display: block;
        background-color: rgb(255, 255, 255);
        block-size: 40px;
        border-block: 1px solid rgb(224, 212, 255);
        border-color: rgb(224, 212, 255);
        border-radius: 50%;
        border-style: solid;
        border-width: 1px;
        border-end-end-radius: 50%;
        border-end-start-radius: 50%;
        border-inline: 1px solid rgb(224, 212, 255);
        border-start-end-radius: 50%;
        border-start-start-radius: 50%;
        inset: 88px -35px 196px 919px;
        caret-color: rgba(0, 0, 0, 0);
        color: rgba(0, 0, 0, 0);
        column-rule-color: rgba(0, 0, 0, 0);
        cursor: pointer;
        font-size: 0px;
        height: 40px;
        inline-size: 40px;
        inset-block: 88px 196px;
        inset-inline: 919px -35px;
        line-height: 0px;
        margin-block-start: -20px;
        margin-top: -20px;
        outline-color: rgba(0, 0, 0, 0);
        padding-block: 0px;
        padding: 0px;
        padding-inline: 0px;
        perspective-origin: 20px 20px;
        position: absolute;
        text-decoration-color: rgba(0, 0, 0, 0);
        text-emphasis-color: rgba(0, 0, 0, 0);
        transform: matrix(1, 0, 0, 1, 0, 0);
        transform-origin: 20px 20px;
        user-select: none;
        width: 40px;
        z-index: 2;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        -webkit-text-fill-color: rgba(0, 0, 0, 0);
        -webkit-text-stroke-color: rgba(0, 0, 0, 0);
      "
      data-id="6"
    >
      Next
    </button>
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
  { filename: "swiper slider with custom button", content: `<!-- The test is in skip because the next and prev buttons are custom, example for custom buttons in carousel:  https://drinkarizona.com/?srsltid=AfmBOoq1ZtkGqpaSOs1obFgSpX8ZFl_s6nKyd_S43VIsLxmwyik6Cs4F-->
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
    class="elementor-swiper-button"
    role="button"
    tabindex="0"
    aria-label="Previous slide"
    aria-controls="swiper-wrapper-6d4a5c5301389a810"
    style="
      block-size: 32px;
      border-block-color: rgb(127, 127, 127);
      border-color: rgb(127, 127, 127);
      border-inline-color: rgb(127, 127, 127);
      inset: 246.438px 1238px 244.438px 0px;
      caret-color: rgb(127, 127, 127);
      color: rgb(127, 127, 127);
      column-rule-color: rgb(127, 127, 127);
      cursor: pointer;
      display: flex;
      font-size: 32px;
      height: 32px;
      inline-size: 32px;
      inset-block: 246.438px 244.438px;
      inset-inline: 0px 1238px;
      outline-color: rgb(127, 127, 127);
      perspective-origin: 16px 16px;
      position: absolute;
      text-decoration-color: rgb(127, 127, 127);
      text-emphasis-color: rgb(127, 127, 127);
      transform: matrix(1, 0, 0, 1, 0, -16);
      transform-origin: 16px 16px;
      transition-duration: 0.25s;
      width: 32px;
      z-index: 2;
      -webkit-text-fill-color: rgb(127, 127, 127);
      -webkit-text-stroke-color: rgb(127, 127, 127);
    "
  >
    <i
      aria-hidden="true"
      class="eicon-chevron-left"
      style="
        block-size: 32px;
        border-block-color: rgb(127, 127, 127);
        border-color: rgb(127, 127, 127);
        border-inline-color: rgb(127, 127, 127);
        caret-color: rgb(127, 127, 127);
        color: rgb(127, 127, 127);
        column-rule-color: rgb(127, 127, 127);
        cursor: pointer;
        display: block;
        font-family: eicons;
        font-size: 32px;
        font-style: normal;
        height: 32px;
        inline-size: 32px;
        line-height: 32px;
        min-block-size: auto;
        min-height: auto;
        min-inline-size: auto;
        min-width: auto;
        outline-color: rgb(127, 127, 127);
        perspective-origin: 16px 16px;
        text-decoration-color: rgb(127, 127, 127);
        text-emphasis-color: rgb(127, 127, 127);
        transform-origin: 16px 16px;
        width: 32px;
        -webkit-text-fill-color: rgb(127, 127, 127);
        -webkit-text-stroke-color: rgb(127, 127, 127);
      "
      data-id="0"
    ></i>
  </div>
  <div
    class="elementor-swiper-button"
    role="button"
    tabindex="0"
    aria-label="Next slide"
    aria-controls="swiper-wrapper-6d4a5c5301389a810"
    style="
      block-size: 32px;
      border-block-color: rgb(127, 127, 127);
      border-color: rgb(127, 127, 127);
      border-inline-color: rgb(127, 127, 127);
      inset: 246.438px 0px 244.438px 1238px;
      caret-color: rgb(127, 127, 127);
      color: rgb(127, 127, 127);
      column-rule-color: rgb(127, 127, 127);
      cursor: pointer;
      display: flex;
      font-size: 32px;
      height: 32px;
      inline-size: 32px;
      inset-block: 246.438px 244.438px;
      inset-inline: 1238px 0px;
      outline-color: rgb(127, 127, 127);
      perspective-origin: 16px 16px;
      position: absolute;
      text-decoration-color: rgb(127, 127, 127);
      text-emphasis-color: rgb(127, 127, 127);
      transform: matrix(1, 0, 0, 1, 0, -16);
      transform-origin: 16px 16px;
      transition-duration: 0.25s;
      width: 32px;
      z-index: 2;
      -webkit-text-fill-color: rgb(127, 127, 127);
      -webkit-text-stroke-color: rgb(127, 127, 127);
    "
  >
    <i
      aria-hidden="true"
      class="eicon-chevron-right"
      style="
        block-size: 32px;
        border-block-color: rgb(127, 127, 127);
        border-color: rgb(127, 127, 127);
        border-inline-color: rgb(127, 127, 127);
        caret-color: rgb(127, 127, 127);
        color: rgb(127, 127, 127);
        column-rule-color: rgb(127, 127, 127);
        cursor: pointer;
        display: block;
        font-family: eicons;
        font-size: 32px;
        font-style: normal;
        height: 32px;
        inline-size: 32px;
        line-height: 32px;
        min-block-size: auto;
        min-height: auto;
        min-inline-size: auto;
        min-width: auto;
        outline-color: rgb(127, 127, 127);
        perspective-origin: 16px 16px;
        text-decoration-color: rgb(127, 127, 127);
        text-emphasis-color: rgb(127, 127, 127);
        transform-origin: 16px 16px;
        width: 32px;
        -webkit-text-fill-color: rgb(127, 127, 127);
        -webkit-text-stroke-color: rgb(127, 127, 127);
      "
      data-id="1"
    ></i>
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
  { filename: "swiper slider with pagination prev and next buttons", content: `<div class="elementor-widget-container" style="block-size: 522.875px; height: 522.875px; inline-size: 1270px; perspective-origin: 635px 261.438px; transform-origin: 635px 261.438px; transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s, transform 0.4s; width: 1270px">
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
    class="elementor-swiper-button elementor-swiper-button-prev"
    role="button"
    tabindex="0"
    aria-label="Previous slide"
    aria-controls="swiper-wrapper-6d4a5c5301389a810"
    style="
      block-size: 32px;
      border-block-color: rgb(127, 127, 127);
      border-color: rgb(127, 127, 127);
      border-inline-color: rgb(127, 127, 127);
      inset: 246.438px 1238px 244.438px 0px;
      caret-color: rgb(127, 127, 127);
      color: rgb(127, 127, 127);
      column-rule-color: rgb(127, 127, 127);
      cursor: pointer;
      display: flex;
      font-size: 32px;
      height: 32px;
      inline-size: 32px;
      inset-block: 246.438px 244.438px;
      inset-inline: 0px 1238px;
      outline-color: rgb(127, 127, 127);
      perspective-origin: 16px 16px;
      position: absolute;
      text-decoration-color: rgb(127, 127, 127);
      text-emphasis-color: rgb(127, 127, 127);
      transform: matrix(1, 0, 0, 1, 0, -16);
      transform-origin: 16px 16px;
      transition-duration: 0.25s;
      width: 32px;
      z-index: 2;
      -webkit-text-fill-color: rgb(127, 127, 127);
      -webkit-text-stroke-color: rgb(127, 127, 127);
    "
  >
    <i
      aria-hidden="true"
      class="eicon-chevron-left"
      style="
        block-size: 32px;
        border-block-color: rgb(127, 127, 127);
        border-color: rgb(127, 127, 127);
        border-inline-color: rgb(127, 127, 127);
        caret-color: rgb(127, 127, 127);
        color: rgb(127, 127, 127);
        column-rule-color: rgb(127, 127, 127);
        cursor: pointer;
        display: block;
        font-family: eicons;
        font-size: 32px;
        font-style: normal;
        height: 32px;
        inline-size: 32px;
        line-height: 32px;
        min-block-size: auto;
        min-height: auto;
        min-inline-size: auto;
        min-width: auto;
        outline-color: rgb(127, 127, 127);
        perspective-origin: 16px 16px;
        text-decoration-color: rgb(127, 127, 127);
        text-emphasis-color: rgb(127, 127, 127);
        transform-origin: 16px 16px;
        width: 32px;
        -webkit-text-fill-color: rgb(127, 127, 127);
        -webkit-text-stroke-color: rgb(127, 127, 127);
      "
      data-id="0"
    ></i>
  </div>
  <div
    class="elementor-swiper-button elementor-swiper-button-next"
    role="button"
    tabindex="0"
    aria-label="Next slide"
    aria-controls="swiper-wrapper-6d4a5c5301389a810"
    style="
      block-size: 32px;
      border-block-color: rgb(127, 127, 127);
      border-color: rgb(127, 127, 127);
      border-inline-color: rgb(127, 127, 127);
      inset: 246.438px 0px 244.438px 1238px;
      caret-color: rgb(127, 127, 127);
      color: rgb(127, 127, 127);
      column-rule-color: rgb(127, 127, 127);
      cursor: pointer;
      display: flex;
      font-size: 32px;
      height: 32px;
      inline-size: 32px;
      inset-block: 246.438px 244.438px;
      inset-inline: 1238px 0px;
      outline-color: rgb(127, 127, 127);
      perspective-origin: 16px 16px;
      position: absolute;
      text-decoration-color: rgb(127, 127, 127);
      text-emphasis-color: rgb(127, 127, 127);
      transform: matrix(1, 0, 0, 1, 0, -16);
      transform-origin: 16px 16px;
      transition-duration: 0.25s;
      width: 32px;
      z-index: 2;
      -webkit-text-fill-color: rgb(127, 127, 127);
      -webkit-text-stroke-color: rgb(127, 127, 127);
    "
  >
    <i
      aria-hidden="true"
      class="eicon-chevron-right"
      style="
        block-size: 32px;
        border-block-color: rgb(127, 127, 127);
        border-color: rgb(127, 127, 127);
        border-inline-color: rgb(127, 127, 127);
        caret-color: rgb(127, 127, 127);
        color: rgb(127, 127, 127);
        column-rule-color: rgb(127, 127, 127);
        cursor: pointer;
        display: block;
        font-family: eicons;
        font-size: 32px;
        font-style: normal;
        height: 32px;
        inline-size: 32px;
        line-height: 32px;
        min-block-size: auto;
        min-height: auto;
        min-inline-size: auto;
        min-width: auto;
        outline-color: rgb(127, 127, 127);
        perspective-origin: 16px 16px;
        text-decoration-color: rgb(127, 127, 127);
        text-emphasis-color: rgb(127, 127, 127);
        transform-origin: 16px 16px;
        width: 32px;
        -webkit-text-fill-color: rgb(127, 127, 127);
        -webkit-text-stroke-color: rgb(127, 127, 127);
      "
      data-id="1"
    ></i>
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
  { filename: "victrola com carousel", content: `<!-- This test is in skip because .slick-prev and .slick-next are not detected by PerceivableTraitVisible-->
<div class="testimonials__wrapper" style="align-items: center; block-size: 493.102px; cursor: pointer; display: flex; flex-direction: row-reverse; height: 493.102px; inline-size: 1200px; justify-content: space-between; perspective-origin: 600px 246.547px; transform-origin: 600px 246.551px; width: 1200px">
  <div
    class="testimonials__images slick-initialized slick-slider"
    style="block-size: 493.102px; cursor: pointer; height: 493.102px; inline-size: 550px; max-inline-size: 550px; max-width: 550px; min-block-size: auto; min-height: auto; min-inline-size: auto; min-width: auto; padding-inline-start: 48px; padding-left: 48px; perspective-origin: 275px 246.547px; transform-origin: 275px 246.551px; width: 550px"
  >
    <div
      class="slick-list draggable"
      style="block-size: 493.102px; inset: 0px; cursor: pointer; height: 493.102px; inline-size: 502px; inset-block: 0px; inset-inline: 0px; overflow-block: hidden; overflow-inline: hidden; overflow: hidden; perspective-origin: 251px 246.547px; position: relative; transform: matrix(1, 0, 0, 1, 0, 0); transform-origin: 251px 246.551px; width: 502px"
    >
      <div
        class="slick-track"
        style="
          opacity: 1;
          block-size: 493.102px;
          inset: 0px;
          cursor: pointer;
          height: 493.102px;
          inline-size: 2510px;
          inset-block: 0px;
          inset-inline: 0px;
          margin-inline-end: -2008px;
          margin-right: -2008px;
          perspective-origin: 1255px 246.547px;
          position: relative;
          transform: matrix(1, 0, 0, 1, 0, 0);
          transform-origin: 1255px 246.551px;
          width: 2510px;
        "
        data-id="0"
      >
        <div
          class="slick-slide"
          data-slick-index="0"
          aria-hidden="true"
          style="
            position: relative;
            z-index: 998;
            opacity: 0;
            transition: opacity 0.5s;
            block-size: 493.102px;
            inset: 0px;
            cursor: pointer;
            float: left;
            height: 493.102px;
            inline-size: 486px;
            inset-block: 0px;
            inset-inline: 0px;
            margin-inline-end: 16px;
            margin-right: 16px;
            min-block-size: 1px;
            min-height: 1px;
            perspective-origin: 243px 246.547px;
            transform-origin: 243px 246.551px;
            width: 486px;
          "
          tabindex="-1"
        >
          <div style="block-size: 493.102px; cursor: pointer; height: 493.102px; inline-size: 486px; perspective-origin: 243px 246.547px; transform-origin: 243px 246.551px; width: 486px">
            <div class="testimonial__thumb" style="display: inline-block; block-size: 486px; cursor: pointer; height: 486px; inline-size: 486px; perspective-origin: 243px 243px; transform-origin: 243px 243px; width: 486px">
              <div class="spacer" style="block-size: 486px; inset: 0px; cursor: pointer; height: 486px; inline-size: 486px; inset-block: 0px; inset-inline: 0px; padding-block-end: 486px; padding-bottom: 486px; perspective-origin: 243px 243px; position: relative; transform-origin: 243px 243px; width: 486px">
                <div class="positioner" style="block-size: 486px; inset: 0px; cursor: pointer; height: 486px; inline-size: 486px; inset-block: 0px; inset-inline: 0px; perspective-origin: 243px 243px; position: absolute; transform-origin: 243px 243px; width: 486px">
                  <img alt="" src="//www.victrola.com/cdn/shop/files/Wave_Review_625x.jpg?v=1761232179" style="block-size: 486px; cursor: pointer; display: block; height: 486px; inline-size: 486px; max-inline-size: none; max-width: none; object-fit: cover; perspective-origin: 243px 243px; transform-origin: 243px 243px; width: 486px" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="slick-slide slick-current slick-active"
          data-slick-index="1"
          aria-hidden="false"
          style="
            position: relative;
            z-index: 999;
            opacity: 1;
            block-size: 493.102px;
            inset: 0px 502px 0px -502px;
            cursor: pointer;
            float: left;
            height: 493.102px;
            inline-size: 486px;
            inset-block: 0px;
            inset-inline: -502px 502px;
            margin-inline-end: 16px;
            margin-right: 16px;
            min-block-size: 1px;
            min-height: 1px;
            perspective-origin: 243px 246.547px;
            transform-origin: 243px 246.551px;
            width: 486px;
          "
        >
          <div style="block-size: 493.102px; cursor: pointer; height: 493.102px; inline-size: 486px; perspective-origin: 243px 246.547px; transform-origin: 243px 246.551px; width: 486px">
            <div class="testimonial__thumb" style="display: inline-block; block-size: 486px; cursor: pointer; height: 486px; inline-size: 486px; perspective-origin: 243px 243px; transform-origin: 243px 243px; width: 486px">
              <div class="spacer" style="block-size: 486px; inset: 0px; cursor: pointer; height: 486px; inline-size: 486px; inset-block: 0px; inset-inline: 0px; padding-block-end: 486px; padding-bottom: 486px; perspective-origin: 243px 243px; position: relative; transform-origin: 243px 243px; width: 486px">
                <div class="positioner" style="block-size: 486px; inset: 0px; cursor: pointer; height: 486px; inline-size: 486px; inset-block: 0px; inset-inline: 0px; perspective-origin: 243px 243px; position: absolute; transform-origin: 243px 243px; width: 486px">
                  <img
                    alt=""
                    src="//www.victrola.com/cdn/shop/files/Stream-Carbon_c6c2583e-fd43-4f91-8daa-6fbc6b56f216_625x.jpg?v=1732630983"
                    style="block-size: 486px; cursor: pointer; display: block; height: 486px; inline-size: 486px; max-inline-size: none; max-width: none; object-fit: cover; perspective-origin: 243px 243px; transform-origin: 243px 243px; width: 486px"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="slick-slide"
          data-slick-index="2"
          aria-hidden="true"
          tabindex="-1"
          style="
            position: relative;
            z-index: 998;
            opacity: 0;
            block-size: 493.102px;
            inset: 0px 1004px 0px -1004px;
            cursor: pointer;
            float: left;
            height: 493.102px;
            inline-size: 486px;
            inset-block: 0px;
            inset-inline: -1004px 1004px;
            margin-inline-end: 16px;
            margin-right: 16px;
            min-block-size: 1px;
            min-height: 1px;
            perspective-origin: 243px 246.547px;
            transform-origin: 243px 246.551px;
            width: 486px;
          "
        >
          <div style="block-size: 493.102px; cursor: pointer; height: 493.102px; inline-size: 486px; perspective-origin: 243px 246.547px; transform-origin: 243px 246.551px; width: 486px">
            <div class="testimonial__thumb" style="display: inline-block; block-size: 486px; cursor: pointer; height: 486px; inline-size: 486px; perspective-origin: 243px 243px; transform-origin: 243px 243px; width: 486px">
              <div class="spacer" style="block-size: 486px; inset: 0px; cursor: pointer; height: 486px; inline-size: 486px; inset-block: 0px; inset-inline: 0px; padding-block-end: 486px; padding-bottom: 486px; perspective-origin: 243px 243px; position: relative; transform-origin: 243px 243px; width: 486px">
                <div class="positioner" style="block-size: 486px; inset: 0px; cursor: pointer; height: 486px; inline-size: 486px; inset-block: 0px; inset-inline: 0px; perspective-origin: 243px 243px; position: absolute; transform-origin: 243px 243px; width: 486px">
                  <img alt="" src="//www.victrola.com/cdn/shop/files/Sapphire-sq2_625x.jpg?v=1733152771" style="block-size: 486px; cursor: pointer; display: block; height: 486px; inline-size: 486px; max-inline-size: none; max-width: none; object-fit: cover; perspective-origin: 243px 243px; transform-origin: 243px 243px; width: 486px" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="slick-slide"
          data-slick-index="3"
          aria-hidden="true"
          tabindex="-1"
          style="
            position: relative;
            z-index: 998;
            opacity: 0;
            block-size: 493.102px;
            inset: 0px 1506px 0px -1506px;
            cursor: pointer;
            float: left;
            height: 493.102px;
            inline-size: 486px;
            inset-block: 0px;
            inset-inline: -1506px 1506px;
            margin-inline-end: 16px;
            margin-right: 16px;
            min-block-size: 1px;
            min-height: 1px;
            perspective-origin: 243px 246.547px;
            transform-origin: 243px 246.551px;
            width: 486px;
          "
        >
          <div style="block-size: 493.102px; cursor: pointer; height: 493.102px; inline-size: 486px; perspective-origin: 243px 246.547px; transform-origin: 243px 246.551px; width: 486px">
            <div class="testimonial__thumb" style="display: inline-block; block-size: 486px; cursor: pointer; height: 486px; inline-size: 486px; perspective-origin: 243px 243px; transform-origin: 243px 243px; width: 486px">
              <div class="spacer" style="block-size: 486px; inset: 0px; cursor: pointer; height: 486px; inline-size: 486px; inset-block: 0px; inset-inline: 0px; padding-block-end: 486px; padding-bottom: 486px; perspective-origin: 243px 243px; position: relative; transform-origin: 243px 243px; width: 486px">
                <div class="positioner" style="block-size: 486px; inset: 0px; cursor: pointer; height: 486px; inline-size: 486px; inset-block: 0px; inset-inline: 0px; perspective-origin: 243px 243px; position: absolute; transform-origin: 243px 243px; width: 486px">
                  <img alt="" src="//www.victrola.com/cdn/shop/files/Century_625x.jpg?v=1729877287" style="block-size: 486px; cursor: pointer; display: block; height: 486px; inline-size: 486px; max-inline-size: none; max-width: none; object-fit: cover; perspective-origin: 243px 243px; transform-origin: 243px 243px; width: 486px" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="slick-slide"
          data-slick-index="4"
          aria-hidden="true"
          tabindex="-1"
          style="
            position: relative;
            z-index: 998;
            opacity: 0;
            block-size: 493.102px;
            inset: 0px 2008px 0px -2008px;
            cursor: pointer;
            float: left;
            height: 493.102px;
            inline-size: 486px;
            inset-block: 0px;
            inset-inline: -2008px 2008px;
            margin-inline-end: 16px;
            margin-right: 16px;
            min-block-size: 1px;
            min-height: 1px;
            perspective-origin: 243px 246.547px;
            transform-origin: 243px 246.551px;
            width: 486px;
          "
        >
          <div style="block-size: 493.102px; cursor: pointer; height: 493.102px; inline-size: 486px; perspective-origin: 243px 246.547px; transform-origin: 243px 246.551px; width: 486px">
            <div class="testimonial__thumb" style="display: inline-block; block-size: 486px; cursor: pointer; height: 486px; inline-size: 486px; perspective-origin: 243px 243px; transform-origin: 243px 243px; width: 486px">
              <div class="spacer" style="block-size: 486px; inset: 0px; cursor: pointer; height: 486px; inline-size: 486px; inset-block: 0px; inset-inline: 0px; padding-block-end: 486px; padding-bottom: 486px; perspective-origin: 243px 243px; position: relative; transform-origin: 243px 243px; width: 486px">
                <div class="positioner" style="block-size: 486px; inset: 0px; cursor: pointer; height: 486px; inline-size: 486px; inset-block: 0px; inset-inline: 0px; perspective-origin: 243px 243px; position: absolute; transform-origin: 243px 243px; width: 486px">
                  <img alt="" src="//www.victrola.com/cdn/shop/files/Eastwood-II_625x.jpg?v=1732631025" style="block-size: 486px; cursor: pointer; display: block; height: 486px; inline-size: 486px; max-inline-size: none; max-width: none; object-fit: cover; perspective-origin: 243px 243px; transform-origin: 243px 243px; width: 486px" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="testimonials__quotes" style="block-size: 465.602px; cursor: pointer; height: 465.602px; inline-size: 600px; margin-block-start: -16px; margin-top: -16px; min-block-size: auto; min-height: auto; min-inline-size: auto; min-width: auto; perspective-origin: 300px 232.797px; transform-origin: 300px 232.801px; width: 600px">
    <div class="testimonials__slider slick-initialized slick-slider" style="block-size: 409.602px; cursor: pointer; height: 409.602px; inline-size: 600px; perspective-origin: 300px 204.797px; transform-origin: 300px 204.801px; width: 600px">
      <div
        class="slick-list draggable"
        style="
          block-size: 409.602px;
          inset: 0px;
          cursor: pointer;
          height: 409.602px;
          inline-size: 600px;
          inset-block: 0px;
          inset-inline: 0px;
          overflow-block: hidden;
          overflow-inline: hidden;
          overflow: hidden;
          perspective-origin: 300px 204.797px;
          position: relative;
          transform: matrix(1, 0, 0, 1, 0, 0);
          transform-origin: 300px 204.801px;
          width: 600px;
        "
      >
        <div
          class="slick-track"
          style="
            opacity: 1;
            transform: matrix(1, 0, 0, 1, -600, 0);
            block-size: 409.602px;
            inset: 0px;
            cursor: pointer;
            height: 409.602px;
            inline-size: 3000px;
            inset-block: 0px;
            inset-inline: 0px;
            margin-inline-end: -2400px;
            margin-right: -2400px;
            perspective-origin: 1500px 204.797px;
            position: relative;
            transform-origin: 1500px 204.801px;
            width: 3000px;
          "
          data-id="1"
        >
          <div
            class="slick-slide"
            data-slick-index="0"
            aria-hidden="true"
            style="block-size: 289.602px; cursor: pointer; float: left; height: 289.602px; inline-size: 584px; margin-inline-end: 16px; margin-right: 16px; min-block-size: 1px; min-height: 1px; perspective-origin: 292px 144.797px; transform-origin: 292px 144.801px; width: 584px"
            tabindex="-1"
          >
            <div style="block-size: 289.602px; cursor: pointer; height: 289.602px; inline-size: 584px; opacity: 0; perspective-origin: 292px 144.797px; transform: matrix(0.25, 0, 0, 0.25, 0, 0); transform-origin: 292px 144.801px; transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.75s; width: 584px">
              <div class="testimonial__content" style="display: inline-block; block-size: 289.602px; cursor: pointer; height: 289.602px; inline-size: 584px; perspective-origin: 292px 144.797px; text-align: center; transform-origin: 292px 144.801px; width: 584px">
                <div class="svg-icon svg-icon--quote" style="block-size: 64px; cursor: pointer; display: none; height: 64px; inline-size: 64px; margin-block-end: 24px; margin-bottom: 24px; perspective-origin: 50% 50%; position: relative; text-align: center; transform-origin: 50% 50%; width: 64px">
                  <div class="positioner" style="block-size: 100%; cursor: pointer; height: 100%; inline-size: 100%; inset-block-start: 0px; inset-inline-start: 0px; left: 0px; perspective-origin: 50% 50%; position: absolute; text-align: center; top: 0px; transform-origin: 50% 50%; width: 100%">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 64.5 79.5"
                      style="block-size: 100%; cursor: pointer; display: block; height: 100%; inline-size: 100%; overflow-block: hidden; overflow-clip-margin: content-box; overflow-inline: hidden; overflow: hidden; perspective-origin: 50% 50%; text-align: center; transform-origin: 50% 50%; width: 100%"
                    >
                      <path
                        data-name="Path 10837"
                        d="M13.5 65.5q1 2 2.25.5t2.75 0a13.664 13.664 0 01-2.25 6 5.033 5.033 0 00-.75 5q-2.5-.5-2.75 1A1.6 1.6 0 0111 79.5q-3.5 0-4.5-1A6.451 6.451 0 014.25 76 6.451 6.451 0 002 73.5a33.732 33.732 0 01-.75-4 4.994 4.994 0 00-1.25-3Q1 48 7.5 33.75a259.342 259.342 0 0011-28.25 6.112 6.112 0 002.25-2.75A8.685 8.685 0 0122.5 0H32a10.762 10.762 0 012.75 2.75A25.765 25.765 0 0037.5 6q1 5.5-1.25 8.25a25.935 25.935 0 00-3.75 6.25 4.113 4.113 0 00.25 1.25 2.278 2.278 0 01-.25 1.75q-1 2-2 3.75t-2 3.75a5.071 5.071 0 00-1 2.75 3.109 3.109 0 01-1 2.25 15.063 15.063 0 01-2.5 4.25A7.057 7.057 0 0022.5 45q0 1-.5.5t-1.5.5a54.392 54.392 0 01-3 10.5q-2 5-4 9zm31-6.5q0-1.5-2-1.5a40.184 40.184 0 01-1.5-14 81.607 81.607 0 012.25-14 131.127 131.127 0 014.25-13.75Q50 9 52 3a5.924 5.924 0 013.75 1 8.776 8.776 0 003.75 1.5 10.638 10.638 0 012.75 4.5 14.26 14.26 0 002.25 4.5q0 8-2.5 12.75T57 37.5q-.5 8-4.5 13 .5 3-.5 4.5l-2 3a3.826 3.826 0 00-2.25-.25Q47 58 44.5 59z"
                        fill="#e45a5d"
                      ></path>
                    </svg>
                  </div>
                </div>
                <blockquote class="testimonial" style="block-size: 200px; cursor: pointer; font-size: 28px; font-weight: 300; height: 200px; inline-size: 504px; line-height: 40px; margin-block: 40px 24px; margin-bottom: 24px; margin-top: 40px; perspective-origin: 252px 100px; text-align: center; transform-origin: 252px 100px; width: 504px">
                  <p style="block-size: 200px; cursor: pointer; font-size: 28px; font-weight: 300; height: 200px; inline-size: 504px; line-height: 40px; margin-block-start: 28px; margin-top: 28px; perspective-origin: 252px 100px; text-align: center; transform-origin: 252px 100px; width: 504px">
                    <a
                      href="/products/wave-bluetooth-turntable-with-auracast"
                      title="Wave Bluetooth Turntable with Auracast"
                      tabindex="-1"
                      style="
                        border-block-color: rgb(0, 0, 0);
                        border-color: rgb(0, 0, 0);
                        border-inline-color: rgb(0, 0, 0);
                        caret-color: rgb(0, 0, 0);
                        color: rgb(0, 0, 0);
                        column-rule-color: rgb(0, 0, 0);
                        cursor: pointer;
                        font-size: 28px;
                        font-weight: 300;
                        line-height: 40px;
                        outline-color: rgb(0, 0, 0);
                        text-align: center;
                        text-decoration: underline rgb(0, 0, 0);
                        text-emphasis-color: rgb(0, 0, 0);
                        -webkit-text-decorations-in-effect: underline;
                        -webkit-text-fill-color: rgb(0, 0, 0);
                        -webkit-text-stroke-color: rgb(0, 0, 0);
                      "
                      >The Wave:</a
                    >
                    "This was the perfect upgrade for me! It adds a great pop of color to my space and it’s incredibly easy to use/set up. Happy it has the built in preamp and auto stop!"
                  </p>
                </blockquote>
                <cite style="cursor: pointer; font-weight: 700; text-align: center">ashs.vinyl, Verified Buyer</cite>
              </div>
            </div>
          </div>
          <div
            class="slick-slide slick-current slick-active"
            data-slick-index="1"
            aria-hidden="false"
            style="block-size: 369.602px; cursor: pointer; float: left; height: 369.602px; inline-size: 584px; margin-inline-end: 16px; margin-right: 16px; min-block-size: 1px; min-height: 1px; perspective-origin: 292px 184.797px; transform-origin: 292px 184.801px; width: 584px"
          >
            <div style="block-size: 369.602px; cursor: pointer; height: 369.602px; inline-size: 584px; perspective-origin: 292px 184.797px; transform: matrix(1, 0, 0, 1, 0, 0); transform-origin: 292px 184.801px; transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.75s; width: 584px">
              <div class="testimonial__content" style="display: inline-block; block-size: 369.602px; cursor: pointer; height: 369.602px; inline-size: 584px; perspective-origin: 292px 184.797px; text-align: center; transform-origin: 292px 184.801px; width: 584px">
                <div class="svg-icon svg-icon--quote" style="block-size: 64px; cursor: pointer; display: none; height: 64px; inline-size: 64px; margin-block-end: 24px; margin-bottom: 24px; perspective-origin: 50% 50%; position: relative; text-align: center; transform-origin: 50% 50%; width: 64px">
                  <div class="positioner" style="block-size: 100%; cursor: pointer; height: 100%; inline-size: 100%; inset-block-start: 0px; inset-inline-start: 0px; left: 0px; perspective-origin: 50% 50%; position: absolute; text-align: center; top: 0px; transform-origin: 50% 50%; width: 100%">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 64.5 79.5"
                      style="block-size: 100%; cursor: pointer; display: block; height: 100%; inline-size: 100%; overflow-block: hidden; overflow-clip-margin: content-box; overflow-inline: hidden; overflow: hidden; perspective-origin: 50% 50%; text-align: center; transform-origin: 50% 50%; width: 100%"
                    >
                      <path
                        data-name="Path 10837"
                        d="M13.5 65.5q1 2 2.25.5t2.75 0a13.664 13.664 0 01-2.25 6 5.033 5.033 0 00-.75 5q-2.5-.5-2.75 1A1.6 1.6 0 0111 79.5q-3.5 0-4.5-1A6.451 6.451 0 014.25 76 6.451 6.451 0 002 73.5a33.732 33.732 0 01-.75-4 4.994 4.994 0 00-1.25-3Q1 48 7.5 33.75a259.342 259.342 0 0011-28.25 6.112 6.112 0 002.25-2.75A8.685 8.685 0 0122.5 0H32a10.762 10.762 0 012.75 2.75A25.765 25.765 0 0037.5 6q1 5.5-1.25 8.25a25.935 25.935 0 00-3.75 6.25 4.113 4.113 0 00.25 1.25 2.278 2.278 0 01-.25 1.75q-1 2-2 3.75t-2 3.75a5.071 5.071 0 00-1 2.75 3.109 3.109 0 01-1 2.25 15.063 15.063 0 01-2.5 4.25A7.057 7.057 0 0022.5 45q0 1-.5.5t-1.5.5a54.392 54.392 0 01-3 10.5q-2 5-4 9zm31-6.5q0-1.5-2-1.5a40.184 40.184 0 01-1.5-14 81.607 81.607 0 012.25-14 131.127 131.127 0 014.25-13.75Q50 9 52 3a5.924 5.924 0 013.75 1 8.776 8.776 0 003.75 1.5 10.638 10.638 0 012.75 4.5 14.26 14.26 0 002.25 4.5q0 8-2.5 12.75T57 37.5q-.5 8-4.5 13 .5 3-.5 4.5l-2 3a3.826 3.826 0 00-2.25-.25Q47 58 44.5 59z"
                        fill="#e45a5d"
                      ></path>
                    </svg>
                  </div>
                </div>
                <blockquote class="testimonial" style="block-size: 280px; cursor: pointer; font-size: 28px; font-weight: 300; height: 280px; inline-size: 504px; line-height: 40px; margin-block: 40px 24px; margin-bottom: 24px; margin-top: 40px; perspective-origin: 252px 140px; text-align: center; transform-origin: 252px 140px; width: 504px">
                  <p style="block-size: 280px; cursor: pointer; font-size: 28px; font-weight: 300; height: 280px; inline-size: 504px; line-height: 40px; margin-block: 28px; margin-bottom: 28px; margin-top: 28px; perspective-origin: 252px 140px; text-align: center; transform-origin: 252px 140px; width: 504px">
                    "I purchased the
                    <a
                      href="/products/victrola-stream-carbon-works-with-sonos-turntable"
                      title="Stream Carbon Works with Sonos Turntable"
                      tabindex="0"
                      style="
                        border-block-color: rgb(0, 0, 0);
                        border-color: rgb(0, 0, 0);
                        border-inline-color: rgb(0, 0, 0);
                        caret-color: rgb(0, 0, 0);
                        color: rgb(0, 0, 0);
                        column-rule-color: rgb(0, 0, 0);
                        cursor: pointer;
                        font-size: 28px;
                        font-weight: 300;
                        line-height: 40px;
                        outline-color: rgb(0, 0, 0);
                        text-align: center;
                        text-decoration: underline rgb(0, 0, 0);
                        text-emphasis-color: rgb(0, 0, 0);
                        -webkit-text-decorations-in-effect: underline;
                        -webkit-text-fill-color: rgb(0, 0, 0);
                        -webkit-text-stroke-color: rgb(0, 0, 0);
                      "
                      >Stream Carbon</a
                    >
                    for my brother's birthday...he sent me a video with him and his favorite Bob Segar album. Instant joy. Great sound. He is also excited that it is compatible with other cartridges and said that set up with the Sonos was easy and smooth."
                  </p>
                  <p style="cursor: pointer; font-size: 28px; font-weight: 300; inline-size: 504px; line-height: 40px; margin-block-start: 28px; margin-top: 28px; perspective-origin: 252px 0px; text-align: center; transform-origin: 252px 0px; width: 504px"></p>
                </blockquote>
                <cite style="cursor: pointer; font-weight: 700; text-align: center">Polly M., Verified Buyer</cite>
              </div>
            </div>
          </div>
          <div
            class="slick-slide"
            data-slick-index="2"
            aria-hidden="true"
            tabindex="-1"
            style="block-size: 409.602px; cursor: pointer; float: left; height: 409.602px; inline-size: 584px; margin-inline-end: 16px; margin-right: 16px; min-block-size: 1px; min-height: 1px; perspective-origin: 292px 204.797px; transform-origin: 292px 204.801px; width: 584px"
          >
            <div style="block-size: 409.602px; cursor: pointer; height: 409.602px; inline-size: 584px; opacity: 0; perspective-origin: 292px 204.797px; transform: matrix(0.25, 0, 0, 0.25, 0, 0); transform-origin: 292px 204.801px; transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.75s; width: 584px">
              <div class="testimonial__content" style="display: inline-block; block-size: 409.602px; cursor: pointer; height: 409.602px; inline-size: 584px; perspective-origin: 292px 204.797px; text-align: center; transform-origin: 292px 204.801px; width: 584px">
                <div class="svg-icon svg-icon--quote" style="block-size: 64px; cursor: pointer; display: none; height: 64px; inline-size: 64px; margin-block-end: 24px; margin-bottom: 24px; perspective-origin: 50% 50%; position: relative; text-align: center; transform-origin: 50% 50%; width: 64px">
                  <div class="positioner" style="block-size: 100%; cursor: pointer; height: 100%; inline-size: 100%; inset-block-start: 0px; inset-inline-start: 0px; left: 0px; perspective-origin: 50% 50%; position: absolute; text-align: center; top: 0px; transform-origin: 50% 50%; width: 100%">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 64.5 79.5"
                      style="block-size: 100%; cursor: pointer; display: block; height: 100%; inline-size: 100%; overflow-block: hidden; overflow-clip-margin: content-box; overflow-inline: hidden; overflow: hidden; perspective-origin: 50% 50%; text-align: center; transform-origin: 50% 50%; width: 100%"
                    >
                      <path
                        data-name="Path 10837"
                        d="M13.5 65.5q1 2 2.25.5t2.75 0a13.664 13.664 0 01-2.25 6 5.033 5.033 0 00-.75 5q-2.5-.5-2.75 1A1.6 1.6 0 0111 79.5q-3.5 0-4.5-1A6.451 6.451 0 014.25 76 6.451 6.451 0 002 73.5a33.732 33.732 0 01-.75-4 4.994 4.994 0 00-1.25-3Q1 48 7.5 33.75a259.342 259.342 0 0011-28.25 6.112 6.112 0 002.25-2.75A8.685 8.685 0 0122.5 0H32a10.762 10.762 0 012.75 2.75A25.765 25.765 0 0037.5 6q1 5.5-1.25 8.25a25.935 25.935 0 00-3.75 6.25 4.113 4.113 0 00.25 1.25 2.278 2.278 0 01-.25 1.75q-1 2-2 3.75t-2 3.75a5.071 5.071 0 00-1 2.75 3.109 3.109 0 01-1 2.25 15.063 15.063 0 01-2.5 4.25A7.057 7.057 0 0022.5 45q0 1-.5.5t-1.5.5a54.392 54.392 0 01-3 10.5q-2 5-4 9zm31-6.5q0-1.5-2-1.5a40.184 40.184 0 01-1.5-14 81.607 81.607 0 012.25-14 131.127 131.127 0 014.25-13.75Q50 9 52 3a5.924 5.924 0 013.75 1 8.776 8.776 0 003.75 1.5 10.638 10.638 0 012.75 4.5 14.26 14.26 0 002.25 4.5q0 8-2.5 12.75T57 37.5q-.5 8-4.5 13 .5 3-.5 4.5l-2 3a3.826 3.826 0 00-2.25-.25Q47 58 44.5 59z"
                        fill="#e45a5d"
                      ></path>
                    </svg>
                  </div>
                </div>
                <blockquote class="testimonial" style="block-size: 320px; cursor: pointer; font-size: 28px; font-weight: 300; height: 320px; inline-size: 504px; line-height: 40px; margin-block: 40px 24px; margin-bottom: 24px; margin-top: 40px; perspective-origin: 252px 160px; text-align: center; transform-origin: 252px 160px; width: 504px">
                  <p style="block-size: 320px; cursor: pointer; font-size: 28px; font-weight: 300; height: 320px; inline-size: 504px; line-height: 40px; margin-block-start: 28px; margin-top: 28px; perspective-origin: 252px 160px; text-align: center; transform-origin: 252px 160px; width: 504px">
                    "The turntable is very well built, and I love how rich and smooth it sounds. The
                    <a
                      href="/products/stream-sapphire-turntable"
                      target="_blank"
                      title="Stream Sapphire Turntable"
                      tabindex="-1"
                      style="
                        border-block-color: rgb(0, 0, 0);
                        border-color: rgb(0, 0, 0);
                        border-inline-color: rgb(0, 0, 0);
                        caret-color: rgb(0, 0, 0);
                        color: rgb(0, 0, 0);
                        column-rule-color: rgb(0, 0, 0);
                        cursor: pointer;
                        font-size: 28px;
                        font-weight: 300;
                        line-height: 40px;
                        outline-color: rgb(0, 0, 0);
                        text-align: center;
                        text-decoration: underline rgb(0, 0, 0);
                        text-emphasis-color: rgb(0, 0, 0);
                        -webkit-text-decorations-in-effect: underline;
                        -webkit-text-fill-color: rgb(0, 0, 0);
                        -webkit-text-stroke-color: rgb(0, 0, 0);
                      "
                      >Stream Sapphire</a
                    >
                    looks upscale and sleek in my open concept family room...I am glad I spent the extra money on this and plan on adding more albums to my collection. I recommend it to anyone looking to recapture the vinyl magic."
                  </p>
                </blockquote>
                <cite style="cursor: pointer; font-weight: 700; text-align: center">Martin B, Verified Buyer</cite>
              </div>
            </div>
          </div>
          <div
            class="slick-slide"
            data-slick-index="3"
            aria-hidden="true"
            tabindex="-1"
            style="block-size: 409.602px; cursor: pointer; float: left; height: 409.602px; inline-size: 584px; margin-inline-end: 16px; margin-right: 16px; min-block-size: 1px; min-height: 1px; perspective-origin: 292px 204.797px; transform-origin: 292px 204.801px; width: 584px"
          >
            <div style="block-size: 409.602px; cursor: pointer; height: 409.602px; inline-size: 584px; opacity: 0; perspective-origin: 292px 204.797px; transform: matrix(0.25, 0, 0, 0.25, 0, 0); transform-origin: 292px 204.801px; transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.75s; width: 584px">
              <div class="testimonial__content" style="display: inline-block; block-size: 409.602px; cursor: pointer; height: 409.602px; inline-size: 584px; perspective-origin: 292px 204.797px; text-align: center; transform-origin: 292px 204.801px; width: 584px">
                <div class="svg-icon svg-icon--quote" style="block-size: 64px; cursor: pointer; display: none; height: 64px; inline-size: 64px; margin-block-end: 24px; margin-bottom: 24px; perspective-origin: 50% 50%; position: relative; text-align: center; transform-origin: 50% 50%; width: 64px">
                  <div class="positioner" style="block-size: 100%; cursor: pointer; height: 100%; inline-size: 100%; inset-block-start: 0px; inset-inline-start: 0px; left: 0px; perspective-origin: 50% 50%; position: absolute; text-align: center; top: 0px; transform-origin: 50% 50%; width: 100%">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 64.5 79.5"
                      style="block-size: 100%; cursor: pointer; display: block; height: 100%; inline-size: 100%; overflow-block: hidden; overflow-clip-margin: content-box; overflow-inline: hidden; overflow: hidden; perspective-origin: 50% 50%; text-align: center; transform-origin: 50% 50%; width: 100%"
                    >
                      <path
                        data-name="Path 10837"
                        d="M13.5 65.5q1 2 2.25.5t2.75 0a13.664 13.664 0 01-2.25 6 5.033 5.033 0 00-.75 5q-2.5-.5-2.75 1A1.6 1.6 0 0111 79.5q-3.5 0-4.5-1A6.451 6.451 0 014.25 76 6.451 6.451 0 002 73.5a33.732 33.732 0 01-.75-4 4.994 4.994 0 00-1.25-3Q1 48 7.5 33.75a259.342 259.342 0 0011-28.25 6.112 6.112 0 002.25-2.75A8.685 8.685 0 0122.5 0H32a10.762 10.762 0 012.75 2.75A25.765 25.765 0 0037.5 6q1 5.5-1.25 8.25a25.935 25.935 0 00-3.75 6.25 4.113 4.113 0 00.25 1.25 2.278 2.278 0 01-.25 1.75q-1 2-2 3.75t-2 3.75a5.071 5.071 0 00-1 2.75 3.109 3.109 0 01-1 2.25 15.063 15.063 0 01-2.5 4.25A7.057 7.057 0 0022.5 45q0 1-.5.5t-1.5.5a54.392 54.392 0 01-3 10.5q-2 5-4 9zm31-6.5q0-1.5-2-1.5a40.184 40.184 0 01-1.5-14 81.607 81.607 0 012.25-14 131.127 131.127 0 014.25-13.75Q50 9 52 3a5.924 5.924 0 013.75 1 8.776 8.776 0 003.75 1.5 10.638 10.638 0 012.75 4.5 14.26 14.26 0 002.25 4.5q0 8-2.5 12.75T57 37.5q-.5 8-4.5 13 .5 3-.5 4.5l-2 3a3.826 3.826 0 00-2.25-.25Q47 58 44.5 59z"
                        fill="#e45a5d"
                      ></path>
                    </svg>
                  </div>
                </div>
                <blockquote class="testimonial" style="block-size: 320px; cursor: pointer; font-size: 28px; font-weight: 300; height: 320px; inline-size: 504px; line-height: 40px; margin-block: 40px 24px; margin-bottom: 24px; margin-top: 40px; perspective-origin: 252px 160px; text-align: center; transform-origin: 252px 160px; width: 504px">
                  <p style="block-size: 320px; cursor: pointer; font-size: 28px; font-weight: 300; height: 320px; inline-size: 504px; line-height: 40px; margin-block-start: 28px; margin-top: 28px; perspective-origin: 252px 160px; text-align: center; transform-origin: 252px 160px; width: 504px">
                    "It was actually a rainy afternoon when we popped our cassette of Milli Vanilli into our new magical
                    <a
                      href="/products/the-century-6-in-1-wood-record-player"
                      target="_blank"
                      title="The Century 6-in-1 Wood Record Player"
                      tabindex="-1"
                      style="
                        border-block-color: rgb(0, 0, 0);
                        border-color: rgb(0, 0, 0);
                        border-inline-color: rgb(0, 0, 0);
                        caret-color: rgb(0, 0, 0);
                        color: rgb(0, 0, 0);
                        column-rule-color: rgb(0, 0, 0);
                        cursor: pointer;
                        font-size: 28px;
                        font-weight: 300;
                        line-height: 40px;
                        outline-color: rgb(0, 0, 0);
                        text-align: center;
                        text-decoration: underline rgb(0, 0, 0);
                        text-emphasis-color: rgb(0, 0, 0);
                        -webkit-text-decorations-in-effect: underline;
                        -webkit-text-fill-color: rgb(0, 0, 0);
                        -webkit-text-stroke-color: rgb(0, 0, 0);
                      "
                      >Century 6-in-1 Wood Record Player</a
                    >
                    &amp; Time Machine… Super bonus…using the 'line in' we were able up hook this unit into our Sonos system and blast Milli Vanilli’s lip synced lyrics throughout every room of our house."
                  </p>
                </blockquote>
                <cite style="cursor: pointer; font-weight: 700; text-align: center">David B, Verified Buyer</cite>
              </div>
            </div>
          </div>
          <div
            class="slick-slide"
            data-slick-index="4"
            aria-hidden="true"
            tabindex="-1"
            style="block-size: 249.602px; cursor: pointer; float: left; height: 249.602px; inline-size: 584px; margin-inline-end: 16px; margin-right: 16px; min-block-size: 1px; min-height: 1px; perspective-origin: 292px 124.797px; transform-origin: 292px 124.801px; width: 584px"
          >
            <div style="block-size: 249.602px; cursor: pointer; height: 249.602px; inline-size: 584px; opacity: 0; perspective-origin: 292px 124.797px; transform: matrix(0.25, 0, 0, 0.25, 0, 0); transform-origin: 292px 124.801px; transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.75s; width: 584px">
              <div class="testimonial__content" style="display: inline-block; block-size: 249.602px; cursor: pointer; height: 249.602px; inline-size: 584px; perspective-origin: 292px 124.797px; text-align: center; transform-origin: 292px 124.801px; width: 584px">
                <div class="svg-icon svg-icon--quote" style="block-size: 64px; cursor: pointer; display: none; height: 64px; inline-size: 64px; margin-block-end: 24px; margin-bottom: 24px; perspective-origin: 50% 50%; position: relative; text-align: center; transform-origin: 50% 50%; width: 64px">
                  <div class="positioner" style="block-size: 100%; cursor: pointer; height: 100%; inline-size: 100%; inset-block-start: 0px; inset-inline-start: 0px; left: 0px; perspective-origin: 50% 50%; position: absolute; text-align: center; top: 0px; transform-origin: 50% 50%; width: 100%">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 64.5 79.5"
                      style="block-size: 100%; cursor: pointer; display: block; height: 100%; inline-size: 100%; overflow-block: hidden; overflow-clip-margin: content-box; overflow-inline: hidden; overflow: hidden; perspective-origin: 50% 50%; text-align: center; transform-origin: 50% 50%; width: 100%"
                    >
                      <path
                        data-name="Path 10837"
                        d="M13.5 65.5q1 2 2.25.5t2.75 0a13.664 13.664 0 01-2.25 6 5.033 5.033 0 00-.75 5q-2.5-.5-2.75 1A1.6 1.6 0 0111 79.5q-3.5 0-4.5-1A6.451 6.451 0 014.25 76 6.451 6.451 0 002 73.5a33.732 33.732 0 01-.75-4 4.994 4.994 0 00-1.25-3Q1 48 7.5 33.75a259.342 259.342 0 0011-28.25 6.112 6.112 0 002.25-2.75A8.685 8.685 0 0122.5 0H32a10.762 10.762 0 012.75 2.75A25.765 25.765 0 0037.5 6q1 5.5-1.25 8.25a25.935 25.935 0 00-3.75 6.25 4.113 4.113 0 00.25 1.25 2.278 2.278 0 01-.25 1.75q-1 2-2 3.75t-2 3.75a5.071 5.071 0 00-1 2.75 3.109 3.109 0 01-1 2.25 15.063 15.063 0 01-2.5 4.25A7.057 7.057 0 0022.5 45q0 1-.5.5t-1.5.5a54.392 54.392 0 01-3 10.5q-2 5-4 9zm31-6.5q0-1.5-2-1.5a40.184 40.184 0 01-1.5-14 81.607 81.607 0 012.25-14 131.127 131.127 0 014.25-13.75Q50 9 52 3a5.924 5.924 0 013.75 1 8.776 8.776 0 003.75 1.5 10.638 10.638 0 012.75 4.5 14.26 14.26 0 002.25 4.5q0 8-2.5 12.75T57 37.5q-.5 8-4.5 13 .5 3-.5 4.5l-2 3a3.826 3.826 0 00-2.25-.25Q47 58 44.5 59z"
                        fill="#e45a5d"
                      ></path>
                    </svg>
                  </div>
                </div>
                <blockquote class="testimonial" style="block-size: 160px; cursor: pointer; font-size: 28px; font-weight: 300; height: 160px; inline-size: 504px; line-height: 40px; margin-block: 40px 24px; margin-bottom: 24px; margin-top: 40px; perspective-origin: 252px 80px; text-align: center; transform-origin: 252px 80px; width: 504px">
                  <p style="block-size: 160px; cursor: pointer; font-size: 28px; font-weight: 300; height: 160px; inline-size: 504px; line-height: 40px; margin-block-start: 28px; margin-top: 28px; perspective-origin: 252px 80px; text-align: center; transform-origin: 252px 80px; width: 504px">
                    "The
                    <a
                      href="/products/the-eastwood-ii"
                      target="_blank"
                      title="The Eastwood II"
                      tabindex="-1"
                      style="
                        border-block-color: rgb(0, 0, 0);
                        border-color: rgb(0, 0, 0);
                        border-inline-color: rgb(0, 0, 0);
                        caret-color: rgb(0, 0, 0);
                        color: rgb(0, 0, 0);
                        column-rule-color: rgb(0, 0, 0);
                        cursor: pointer;
                        font-size: 28px;
                        font-weight: 300;
                        line-height: 40px;
                        outline-color: rgb(0, 0, 0);
                        text-align: center;
                        text-decoration: underline rgb(0, 0, 0);
                        text-emphasis-color: rgb(0, 0, 0);
                        -webkit-text-decorations-in-effect: underline;
                        -webkit-text-fill-color: rgb(0, 0, 0);
                        -webkit-text-stroke-color: rgb(0, 0, 0);
                      "
                      >Eastwood II</a
                    >
                    is very easy to set up and the sound quality from the built in speaker is really good. We bought the walnut version, and it has a great retro vibe to it."
                  </p>
                </blockquote>
                <cite style="cursor: pointer; font-weight: 700; text-align: center">Christine D., Verified Buyer</cite>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="slider-nav--dots" style="align-items: center; block-size: 32px; cursor: pointer; display: flex; height: 32px; inline-size: 600px; justify-content: center; margin-block-start: 24px; margin-top: 24px; perspective-origin: 300px 16px; transform-origin: 300px 16px; width: 600px">
      <button
        class="reset slick-prev slick-arrow"
        aria-disabled="false"
        style="
          appearance: none;
          background-color: rgba(0, 0, 0, 0);
          block-size: 32px;
          border-block-style: none;
          border-block-width: 0px;
          border-style: none;
          border-width: 0px;
          border-inline-style: none;
          border-inline-width: 0px;
          inset: 0px;
          cursor: pointer;
          display: block;
          filter: brightness(0) saturate(1) invert(0.22) sepia(0.33) saturate(35.23) hue-rotate(162deg) brightness(1.02) contrast(0.98);
          height: 32px;
          inline-size: 32px;
          inset-block: 0px;
          inset-inline: 0px;
          line-height: 13.3333px;
          margin-inline: 6.66667px;
          margin-left: 6.66667px;
          margin-right: 6.66667px;
          min-block-size: auto;
          min-height: auto;
          min-inline-size: auto;
          min-width: auto;
          overflow-block: hidden;
          overflow-inline: hidden;
          overflow: hidden;
          padding-block: 0px;
          padding: 0px;
          padding-inline: 0px;
          perspective-origin: 16px 16px;
          position: relative;
          text-indent: -13320px;
          text-wrap-mode: nowrap;
          transform-origin: 16px 16px;
          width: 32px;
        "
        data-id="2"
      >
        Previous Slide
      </button>
      <div class="slider-dots" style="align-items: center; block-size: 8px; cursor: pointer; display: flex; height: 8px; inline-size: 88px; min-block-size: auto; min-height: auto; min-inline-size: auto; min-width: auto; perspective-origin: 44px 4px; transform-origin: 44px 4px; width: 88px">
        <button
          class="reset slick-dot"
          data-target="1"
          style="
            appearance: none;
            background-color: rgb(44, 44, 44);
            block-size: 8px;
            border-block-style: none;
            border-block-width: 0px;
            border-radius: 50%;
            border-style: none;
            border-width: 0px;
            border-end-end-radius: 50%;
            border-end-start-radius: 50%;
            border-inline-style: none;
            border-inline-width: 0px;
            border-start-end-radius: 50%;
            border-start-start-radius: 50%;
            cursor: pointer;
            display: block;
            height: 8px;
            inline-size: 8px;
            margin-inline-end: 12px;
            margin-right: 12px;
            min-block-size: auto;
            min-height: auto;
            min-inline-size: auto;
            min-width: auto;
            opacity: 0.2;
            padding-block: 0px;
            padding: 0px;
            padding-inline: 0px;
            perspective-origin: 4px 4px;
            text-indent: -13320px;
            transform-origin: 4px 4px;
            vertical-align: middle;
            width: 8px;
          "
        >
          Go to slide 1
        </button>

        <button
          class="reset slick-dot current"
          data-target="2"
          style="
            appearance: none;
            background-color: rgb(2, 95, 112);
            block-size: 8px;
            border-block-style: none;
            border-block-width: 0px;
            border-radius: 50%;
            border-style: none;
            border-width: 0px;
            border-end-end-radius: 50%;
            border-end-start-radius: 50%;
            border-inline-style: none;
            border-inline-width: 0px;
            border-start-end-radius: 50%;
            border-start-start-radius: 50%;
            cursor: pointer;
            display: block;
            height: 8px;
            inline-size: 8px;
            margin-inline-end: 12px;
            margin-right: 12px;
            min-block-size: auto;
            min-height: auto;
            min-inline-size: auto;
            min-width: auto;
            padding-block: 0px;
            padding: 0px;
            padding-inline: 0px;
            perspective-origin: 4px 4px;
            text-indent: -13320px;
            transform-origin: 4px 4px;
            vertical-align: middle;
            width: 8px;
          "
        >
          Go to slide 2
        </button>

        <button
          class="reset slick-dot"
          data-target="3"
          style="
            appearance: none;
            background-color: rgb(44, 44, 44);
            block-size: 8px;
            border-block-style: none;
            border-block-width: 0px;
            border-radius: 50%;
            border-style: none;
            border-width: 0px;
            border-end-end-radius: 50%;
            border-end-start-radius: 50%;
            border-inline-style: none;
            border-inline-width: 0px;
            border-start-end-radius: 50%;
            border-start-start-radius: 50%;
            cursor: pointer;
            display: block;
            height: 8px;
            inline-size: 8px;
            margin-inline-end: 12px;
            margin-right: 12px;
            min-block-size: auto;
            min-height: auto;
            min-inline-size: auto;
            min-width: auto;
            opacity: 0.2;
            padding-block: 0px;
            padding: 0px;
            padding-inline: 0px;
            perspective-origin: 4px 4px;
            text-indent: -13320px;
            transform-origin: 4px 4px;
            vertical-align: middle;
            width: 8px;
          "
        >
          Go to slide 3
        </button>

        <button
          class="reset slick-dot"
          data-target="4"
          style="
            appearance: none;
            background-color: rgb(44, 44, 44);
            block-size: 8px;
            border-block-style: none;
            border-block-width: 0px;
            border-radius: 50%;
            border-style: none;
            border-width: 0px;
            border-end-end-radius: 50%;
            border-end-start-radius: 50%;
            border-inline-style: none;
            border-inline-width: 0px;
            border-start-end-radius: 50%;
            border-start-start-radius: 50%;
            cursor: pointer;
            display: block;
            height: 8px;
            inline-size: 8px;
            margin-inline-end: 12px;
            margin-right: 12px;
            min-block-size: auto;
            min-height: auto;
            min-inline-size: auto;
            min-width: auto;
            opacity: 0.2;
            padding-block: 0px;
            padding: 0px;
            padding-inline: 0px;
            perspective-origin: 4px 4px;
            text-indent: -13320px;
            transform-origin: 4px 4px;
            vertical-align: middle;
            width: 8px;
          "
        >
          Go to slide 4
        </button>

        <button
          class="reset slick-dot"
          data-target="5"
          style="
            appearance: none;
            background-color: rgb(44, 44, 44);
            block-size: 8px;
            border-block-style: none;
            border-block-width: 0px;
            border-radius: 50%;
            border-style: none;
            border-width: 0px;
            border-end-end-radius: 50%;
            border-end-start-radius: 50%;
            border-inline-style: none;
            border-inline-width: 0px;
            border-start-end-radius: 50%;
            border-start-start-radius: 50%;
            cursor: pointer;
            display: block;
            height: 8px;
            inline-size: 8px;
            min-block-size: auto;
            min-height: auto;
            min-inline-size: auto;
            min-width: auto;
            opacity: 0.2;
            padding-block: 0px;
            padding: 0px;
            padding-inline: 0px;
            perspective-origin: 4px 4px;
            text-indent: -13320px;
            transform-origin: 4px 4px;
            vertical-align: middle;
            width: 8px;
          "
        >
          Go to slide 5
        </button>
      </div>
      <button
        class="reset slick-next slick-arrow"
        aria-disabled="false"
        style="
          appearance: none;
          background-color: rgba(0, 0, 0, 0);
          block-size: 32px;
          border-block-style: none;
          border-block-width: 0px;
          border-style: none;
          border-width: 0px;
          border-inline-style: none;
          border-inline-width: 0px;
          inset: 0px;
          cursor: pointer;
          display: block;
          filter: brightness(0) saturate(1) invert(0.22) sepia(0.33) saturate(35.23) hue-rotate(162deg) brightness(1.02) contrast(0.98);
          height: 32px;
          inline-size: 32px;
          inset-block: 0px;
          inset-inline: 0px;
          line-height: 13.3333px;
          margin-inline: 6.66667px;
          margin-left: 6.66667px;
          margin-right: 6.66667px;
          min-block-size: auto;
          min-height: auto;
          min-inline-size: auto;
          min-width: auto;
          overflow-block: hidden;
          overflow-inline: hidden;
          overflow: hidden;
          padding-block: 0px;
          padding: 0px;
          padding-inline: 0px;
          perspective-origin: 16px 16px;
          position: relative;
          text-indent: -13320px;
          text-wrap-mode: nowrap;
          transform-origin: 16px 16px;
          width: 32px;
        "
        data-id="3"
      >
        Next Slide
      </button>
    </div>
  </div>
</div>
<style>
  [data-id="0"]::after {
    block-size: 0px;
    clear: both;
    content: "";
    cursor: pointer;
    display: table;
    height: 0px;
    inline-size: 0px;
    perspective-origin: 0px 0px;
    transform-origin: 0px 0px;
    width: 0px;
  }
  [data-id="0"]::before {
    block-size: 0px;
    content: "";
    cursor: pointer;
    display: table;
    height: 0px;
    inline-size: 0px;
    perspective-origin: 0px 0px;
    transform-origin: 0px 0px;
    width: 0px;
  }
  [data-id="1"]::after {
    block-size: 0px;
    clear: both;
    content: "";
    cursor: pointer;
    display: table;
    height: 0px;
    inline-size: 0px;
    perspective-origin: 0px 0px;
    transform-origin: 0px 0px;
    width: 0px;
  }
  [data-id="1"]::before {
    block-size: 0px;
    content: "";
    cursor: pointer;
    display: table;
    height: 0px;
    inline-size: 0px;
    perspective-origin: 0px 0px;
    transform-origin: 0px 0px;
    width: 0px;
  }
  [data-id="2"]::before {
    background-image: url("../assets/chevron.svg");
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: contain;
    block-size: 13.3281px;
    bottom: 0px;
    content: "";
    cursor: pointer;
    display: block;
    height: 13.3281px;
    inline-size: 13.3281px;
    inset-block-end: 0px;
    inset-block-start: 0px;
    inset-inline-end: 0px;
    inset-inline-start: 0px;
    left: 0px;
    line-height: 13.3333px;
    margin-block-end: 9.33594px;
    margin-block-start: 9.33594px;
    margin-bottom: 9.33594px;
    margin-inline-end: 9.33594px;
    margin-inline-start: 9.33594px;
    margin-left: 9.33594px;
    margin-right: 9.33594px;
    margin-top: 9.33594px;
    perspective-origin: 6.66406px 6.66406px;
    position: absolute;
    right: 0px;
    text-indent: -13320px;
    text-wrap-mode: nowrap;
    top: 0px;
    transform: matrix(-1, 0, 0, -1, 0, 0);
    transform-origin: 6.66406px 6.66406px;
    width: 13.3281px;
  }
  [data-id="3"]::before {
    background-image: url("../assets/chevron.svg");
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: contain;
    block-size: 13.3281px;
    bottom: 0px;
    content: "";
    cursor: pointer;
    display: block;
    height: 13.3281px;
    inline-size: 13.3281px;
    inset-block-end: 0px;
    inset-block-start: 0px;
    inset-inline-end: 0px;
    inset-inline-start: 0px;
    left: 0px;
    line-height: 13.3333px;
    margin-block-end: 9.33594px;
    margin-block-start: 9.33594px;
    margin-bottom: 9.33594px;
    margin-inline-end: 9.33594px;
    margin-inline-start: 9.33594px;
    margin-left: 9.33594px;
    margin-right: 9.33594px;
    margin-top: 9.33594px;
    perspective-origin: 6.66406px 6.66406px;
    position: absolute;
    right: 0px;
    text-indent: -13320px;
    text-wrap-mode: nowrap;
    top: 0px;
    transform-origin: 6.66406px 6.66406px;
    width: 13.3281px;
  }
</style>` }
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

export default CarouselDraggingMovementsSuccess;
