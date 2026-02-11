import React from "react";
import EngineIssueSuccess from "../../../layout/engineIssueSuccess";

const InteractiveTargetSizeSuccess = () => {
  const ruleId = "interactive-target-size";
  const title = `Targets for interactive elements should meet a minimum size (at least 24 by 24 CSS pixels) or have enough spacing around them`;
  const description = `Interactive elements, such as buttons and links, should have a minimum size of 24 by 24 CSS pixels or have enough spacing to avoid accidental activation of adjacent elements. This is crucial for users with motor impairments or those using the website in unstable environments, like on a bus.`;
  const helpText = `Make sure all interactive targets meet the minimum size of 24 by 24 CSS pixels. If resizing is not possible, provide spacing with a diameter of at least 24 CSS pixels around smaller targets to ensure they don't intersect with adjacent controls.`;
  const bestPractices = [
  "Follow proper HTML semantics",
  "Ensure screen reader compatibility",
  "Test with assistive technologies"
  ];
  const htmlExamples = [
  { filename: "16 by 16 css pixels button with enough space around it next to big button", content: `<style>
  .interactive-small {
    margin-top: 4px;
  }
</style>
<button class="interactive interactive-big" style="width: 80px; height: 80px; background-color: red"></button>
<div></div>
<button class="interactive interactive-small" style="width: 16px; height: 16px; background-color: yellow"></button>` },
  { filename: "24 by 24 css pixels button inside big button", content: `<html>
  <head></head>
  <body style="height: 100px">
    <button class="interactive interactive-big" style="width: 80px; height: 80px; background-color: red; position: absolute"></button>
    <div></div>
    <button class="interactive interactive-small" style="width: 24px; height: 24px; background-color: yellow; position: absolute"></button>
  </body>
</html>` },
  { filename: "24 by 24 css pixels button next to big button", content: `<button class="interactive interactive-big" style="width: 80px; height: 80px; background-color: red"></button>
<div></div>
<button class="interactive interactive-small" style="width: 24px; height: 24px; background-color: yellow"></button>` },
  { filename: "big button invisible", content: `<button class="interactive-small" style="width: 20px; height: 20px"></button>
<div></div>
<button class="interactive-big" style="width: 24px; height: 24px; visibility: hidden"></button>` },
  { filename: "equivalent exception two red buttons with same functionality one is at least 24 by 24", content: `<button class="interactive-small" style="width: 20px; height: 20px; background-color: red"></button>
<div></div>
<button class="interactive-big" style="width: 24px; height: 24px"></button>
<div></div>
<button class="interactive-big" style="width: 24px; height: 24px; background-color: red"></button>` },
  { filename: "equivalent exception two red buttons with same functionality one with enough space around it", content: `<style>
  .interactive {
    margin: 10px;
  }
</style>
<button class="interactive-small" style="width: 20px; height: 20px; background-color: red"></button>
<div></div>
<button class="interactive-big" style="width: 24px; height: 24px"></button>
<div></div>
<button class="interactive" style="width: 20px; height: 20px; background-color: red"></button>` },
  { filename: "essential exception", content: `<h1>Map</h1>
<div>
  <button class="interactive-small" style="width: 20px; height: 20px"></button><b>Tel Aviv</b>
  <div></div>
  <button class="interactive-small" style="width: 20px; height: 20px"></button><b>Ramat Gan</b>
</div>` },
  { filename: "interactive elements at least 24 by 24 css pixels", content: `<button class="interactive-24x24" style="width: 24px; height: 24px"></button>
<button class="interactive-24x30" style="width: 24px; height: 30px"></button>
<button class="interactive-30x24" style="width: 30px; height: 24px"></button>
<button class="interactive-30x30" style="width: 30px; height: 30px"></button>
<button class="interactive-40x40" style="width: 40px; height: 40px"></button>` },
  { filename: "links in a sentence", content: `<style>
  p {
    font-size: 8px;
  }
</style>
<p>
  This is an example of a paragraph with links. You can visit
  <a href="https://www.example1.com" target="_blank">1</a>
  <a href="https://www.example2.com" target="_blank">Example 2</a>
  for more information.
</p>` },
  { filename: "small button invisible", content: `<button class="interactive-small" style="width: 20px; height: 20px; visibility: hidden"></button>
<div></div>
<button class="interactive-big" style="width: 24px; height: 24px"></button>` },
  { filename: "testimonials mantra", content: `<div
  class="testimonials-slider-template--15756659982391__ss_testimonial_11_ffKdC6 swiper swiper-container-fade swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events"
  style="
    list-style-type: none;
    overflow: hidden;
    perspective-origin: 668.5px 140.75px;
    position: relative;
    touch-action: pan-y;
    transform-origin: 668.5px 140.75px;
    z-index: 1;
    block-size: 281.5px;
    inset: 0px;
    height: 281.5px;
    inline-size: 1337px;
    inset-block: 0px;
    inset-inline: 0px;
    min-block-size: 0px;
    min-height: 0px;
    min-inline-size: 0px;
    min-width: 0px;
    padding-block-start: 30px;
    padding-top: 30px;
    width: 1337px;
  "
>
  <div
    class="swiper-wrapper"
    style="
      transition-duration: 0ms;
      box-sizing: content-box;
      display: flex;
      list-style-type: none;
      perspective-origin: 668.5px 94.75px;
      position: relative;
      transform: matrix(1, 0, 0, 1, 0, 0);
      transform-origin: 668.5px 94.75px;
      transition-property: transform;
      z-index: 1;
      block-size: 189.5px;
      inset: 0px;
      height: 189.5px;
      inline-size: 1337px;
      inset-block: 0px;
      inset-inline: 0px;
      min-block-size: 0px;
      min-height: 0px;
      min-inline-size: 0px;
      min-width: 0px;
      width: 1337px;
    "
  >
    <div
      class="testimonials-slide-template--15756659982391__ss_testimonial_11_ffKdC6 swiper-slide swiper-slide-duplicate swiper-slide-prev"
      data-swiper-slide-index="2"
      style="
        transition-duration: 0ms;
        opacity: 0;
        transform: matrix(1, 0, 0, 1, 0, 0);
        flex-shrink: 0;
        list-style-type: none;
        perspective-origin: 668.5px 81.75px;
        pointer-events: none;
        position: relative;
        transform-origin: 668.5px 81.75px;
        transition-property: opacity;
        block-size: 163.5px;
        inset: 0px;
        height: 163.5px;
        inline-size: 1337px;
        inset-block: 0px;
        inset-inline: 0px;
        width: 1337px;
      "
    >
      <div
        class="testimonials-content-template--15756659982391__ss_testimonial_11_ffKdC6"
        style="
          list-style-type: none;
          perspective-origin: 350px 81.75px;
          pointer-events: none;
          transform: matrix(1, 0, 0, 1, 0, 20);
          transform-origin: 350px 81.75px;
          transition-duration: 0.3s;
          block-size: 163.5px;
          height: 163.5px;
          inline-size: 700px;
          margin-inline: 318.5px;
          margin-left: 318.5px;
          margin-right: 318.5px;
          max-inline-size: 700px;
          max-width: 700px;
          min-block-size: 0px;
          min-height: 0px;
          min-inline-size: 0px;
          min-width: 0px;
          width: 700px;
        "
      >
        <div
          class="testimonials-text-template--15756659982391__ss_testimonial_11_ffKdC6"
          style="
            list-style-type: none;
            perspective-origin: 350px 65px;
            pointer-events: none;
            position: relative;
            text-align: center;
            transform-origin: 350px 65px;
            block-size: 130px;
            inset: 0px;
            height: 130px;
            inline-size: 700px;
            inset-block: 0px;
            inset-inline: 0px;
            min-block-size: 0px;
            min-height: 0px;
            min-inline-size: 0px;
            min-width: 0px;
            width: 700px;
          "
        >
          <div
            class="testimonials-abs-template--15756659982391__ss_testimonial_11_ffKdC6"
            style="
              caret-color: rgb(73, 73, 74);
              color: rgb(73, 73, 74);
              column-rule-color: rgb(73, 73, 74);
              font-family: 'Josefin Slab', serif;
              font-size: 20px;
              line-height: 26px;
              list-style-type: none;
              outline-color: rgb(73, 73, 74);
              perspective-origin: 35px 43px;
              pointer-events: none;
              position: absolute;
              text-align: center;
              text-decoration: none solid rgb(73, 73, 74);
              text-emphasis-color: rgb(73, 73, 74);
              transform-origin: 35px 43px;
              word-break: break-word;
              -webkit-text-fill-color: rgb(73, 73, 74);
              -webkit-text-stroke-color: rgb(73, 73, 74);
              block-size: 86px;
              border-block-color: rgb(73, 73, 74);
              border-color: rgb(73, 73, 74);
              border-inline-color: rgb(73, 73, 74);
              inset: -45px 620px 89px 10px;
              height: 86px;
              inline-size: 70px;
              inset-block: -45px 89px;
              inset-inline: 10px 620px;
              min-block-size: 0px;
              min-height: 0px;
              min-inline-size: 0px;
              min-width: 0px;
              width: 70px;
            "
          >
            <svg
              width="86"
              height="55"
              viewBox="0 0 86 55"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style="
                caret-color: rgb(73, 73, 74);
                color: rgb(73, 73, 74);
                column-rule-color: rgb(73, 73, 74);
                fill: none;
                font-family: 'Josefin Slab', serif;
                font-size: 20px;
                line-height: 26px;
                list-style-type: none;
                object-fit: cover;
                opacity: 0.2;
                outline-color: rgb(73, 73, 74);
                overflow-clip-margin: content-box;
                overflow: hidden;
                perspective-origin: 35px 43px;
                pointer-events: none;
                text-align: center;
                text-decoration: none solid rgb(73, 73, 74);
                text-emphasis-color: rgb(73, 73, 74);
                transform-origin: 35px 43px;
                word-break: break-word;
                -webkit-text-fill-color: rgb(73, 73, 74);
                -webkit-text-stroke-color: rgb(73, 73, 74);
                block-size: 86px;
                border-block-color: rgb(73, 73, 74);
                border-color: rgb(73, 73, 74);
                border-inline-color: rgb(73, 73, 74);
                height: 86px;
                inline-size: 70px;
                min-block-size: 0px;
                min-height: 0px;
                min-inline-size: 0px;
                min-width: 0px;
                width: 70px;
              "
            >
              <path d="M71.3163 54.6H42.5163L60.3163 0.400024H85.5163L71.3163 54.6ZM29.3163 54.6H0.716309L18.9163 0.400024H44.1163L29.3163 54.6Z" fill="#252627"></path>
            </svg>
          </div>
          <p
            style="
              caret-color: rgb(73, 73, 74);
              color: rgb(73, 73, 74);
              column-rule-color: rgb(73, 73, 74);
              font-family: 'Josefin Slab', serif;
              font-size: 20px;
              line-height: 26px;
              list-style-type: none;
              outline-color: rgb(73, 73, 74);
              perspective-origin: 350px 65px;
              pointer-events: none;
              text-align: center;
              text-decoration: none solid rgb(73, 73, 74);
              text-emphasis-color: rgb(73, 73, 74);
              transform-origin: 350px 65px;
              word-break: break-word;
              -webkit-text-fill-color: rgb(73, 73, 74);
              -webkit-text-stroke-color: rgb(73, 73, 74);
              block-size: 130px;
              border-block-color: rgb(73, 73, 74);
              border-color: rgb(73, 73, 74);
              border-inline-color: rgb(73, 73, 74);
              height: 130px;
              inline-size: 700px;
              min-block-size: 0px;
              min-height: 0px;
              min-inline-size: 0px;
              min-width: 0px;
              width: 700px;
            "
          >
            I love your MantraBands &amp; if I could, I would buy every one to share with the world. Thank you for the positive messages, messages of empowerment &amp; messages of hope and belonging. We desperately need these messages now more than ever. I appreciate you and your inspirational business. Thank you from the bottom of my heart, spirit
            &amp; soul.
          </p>
        </div>

        <p
          class="testimonials-author-template--15756659982391__ss_testimonial_11_ffKdC6"
          style="
            caret-color: rgb(73, 73, 74);
            color: rgb(73, 73, 74);
            column-rule-color: rgb(73, 73, 74);
            font-family: 'Josefin Slab', serif;
            font-size: 15px;
            line-height: 19.5px;
            list-style-type: none;
            outline-color: rgb(73, 73, 74);
            perspective-origin: 350px 9.75px;
            pointer-events: none;
            text-align: center;
            text-decoration: none solid rgb(73, 73, 74);
            text-emphasis-color: rgb(73, 73, 74);
            transform-origin: 350px 9.75px;
            word-break: break-word;
            -webkit-text-fill-color: rgb(73, 73, 74);
            -webkit-text-stroke-color: rgb(73, 73, 74);
            block-size: 19.5px;
            border-block-color: rgb(73, 73, 74);
            border-color: rgb(73, 73, 74);
            border-inline-color: rgb(73, 73, 74);
            height: 19.5px;
            inline-size: 700px;
            margin-block-start: 14px;
            margin-top: 14px;
            min-block-size: 0px;
            min-height: 0px;
            min-inline-size: 0px;
            min-width: 0px;
            width: 700px;
          "
        >
          Pam
        </p>
      </div>
    </div>

    <div
      class="testimonials-slide-template--15756659982391__ss_testimonial_11_ffKdC6 swiper-slide swiper-slide-active"
      data-swiper-slide-index="0"
      style="
        transition-duration: 0ms;
        opacity: 1;
        transform: matrix(1, 0, 0, 1, -1337, 0);
        flex-shrink: 0;
        list-style-type: none;
        perspective-origin: 668.5px 94.75px;
        position: relative;
        transform-origin: 668.5px 94.75px;
        transition-property: opacity;
        block-size: 189.5px;
        inset: 0px;
        height: 189.5px;
        inline-size: 1337px;
        inset-block: 0px;
        inset-inline: 0px;
        width: 1337px;
      "
    >
      <div
        class="testimonials-content-template--15756659982391__ss_testimonial_11_ffKdC6"
        style="
          list-style-type: none;
          perspective-origin: 350px 94.75px;
          transform: matrix(1, 0, 0, 1, 0, 0);
          transform-origin: 350px 94.75px;
          transition-duration: 0.3s;
          block-size: 189.5px;
          height: 189.5px;
          inline-size: 700px;
          margin-inline: 318.5px;
          margin-left: 318.5px;
          margin-right: 318.5px;
          max-inline-size: 700px;
          max-width: 700px;
          min-block-size: 0px;
          min-height: 0px;
          min-inline-size: 0px;
          min-width: 0px;
          width: 700px;
        "
      >
        <div
          class="testimonials-text-template--15756659982391__ss_testimonial_11_ffKdC6"
          style="list-style-type: none; perspective-origin: 350px 78px; position: relative; text-align: center; transform-origin: 350px 78px; block-size: 156px; inset: 0px; height: 156px; inline-size: 700px; inset-block: 0px; inset-inline: 0px; min-block-size: 0px; min-height: 0px; min-inline-size: 0px; min-width: 0px; width: 700px"
        >
          <div
            class="testimonials-abs-template--15756659982391__ss_testimonial_11_ffKdC6"
            style="
              caret-color: rgb(73, 73, 74);
              color: rgb(73, 73, 74);
              column-rule-color: rgb(73, 73, 74);
              font-family: 'Josefin Slab', serif;
              font-size: 20px;
              line-height: 26px;
              list-style-type: none;
              outline-color: rgb(73, 73, 74);
              perspective-origin: 35px 43px;
              position: absolute;
              text-align: center;
              text-decoration: none solid rgb(73, 73, 74);
              text-emphasis-color: rgb(73, 73, 74);
              transform-origin: 35px 43px;
              word-break: break-word;
              -webkit-text-fill-color: rgb(73, 73, 74);
              -webkit-text-stroke-color: rgb(73, 73, 74);
              block-size: 86px;
              border-block-color: rgb(73, 73, 74);
              border-color: rgb(73, 73, 74);
              border-inline-color: rgb(73, 73, 74);
              inset: -45px 620px 115px 10px;
              height: 86px;
              inline-size: 70px;
              inset-block: -45px 115px;
              inset-inline: 10px 620px;
              min-block-size: 0px;
              min-height: 0px;
              min-inline-size: 0px;
              min-width: 0px;
              width: 70px;
            "
          >
            <svg
              width="86"
              height="55"
              viewBox="0 0 86 55"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style="
                caret-color: rgb(73, 73, 74);
                color: rgb(73, 73, 74);
                column-rule-color: rgb(73, 73, 74);
                fill: none;
                font-family: 'Josefin Slab', serif;
                font-size: 20px;
                line-height: 26px;
                list-style-type: none;
                object-fit: cover;
                opacity: 0.2;
                outline-color: rgb(73, 73, 74);
                overflow-clip-margin: content-box;
                overflow: hidden;
                perspective-origin: 35px 43px;
                text-align: center;
                text-decoration: none solid rgb(73, 73, 74);
                text-emphasis-color: rgb(73, 73, 74);
                transform-origin: 35px 43px;
                word-break: break-word;
                -webkit-text-fill-color: rgb(73, 73, 74);
                -webkit-text-stroke-color: rgb(73, 73, 74);
                block-size: 86px;
                border-block-color: rgb(73, 73, 74);
                border-color: rgb(73, 73, 74);
                border-inline-color: rgb(73, 73, 74);
                height: 86px;
                inline-size: 70px;
                min-block-size: 0px;
                min-height: 0px;
                min-inline-size: 0px;
                min-width: 0px;
                width: 70px;
              "
            >
              <path d="M71.3163 54.6H42.5163L60.3163 0.400024H85.5163L71.3163 54.6ZM29.3163 54.6H0.716309L18.9163 0.400024H44.1163L29.3163 54.6Z" fill="#252627"></path>
            </svg>
          </div>
          <p
            style="
              caret-color: rgb(73, 73, 74);
              color: rgb(73, 73, 74);
              column-rule-color: rgb(73, 73, 74);
              font-family: 'Josefin Slab', serif;
              font-size: 20px;
              line-height: 26px;
              list-style-type: none;
              outline-color: rgb(73, 73, 74);
              perspective-origin: 350px 78px;
              text-align: center;
              text-decoration: none solid rgb(73, 73, 74);
              text-emphasis-color: rgb(73, 73, 74);
              transform-origin: 350px 78px;
              word-break: break-word;
              -webkit-text-fill-color: rgb(73, 73, 74);
              -webkit-text-stroke-color: rgb(73, 73, 74);
              block-size: 156px;
              border-block-color: rgb(73, 73, 74);
              border-color: rgb(73, 73, 74);
              border-inline-color: rgb(73, 73, 74);
              height: 156px;
              inline-size: 700px;
              min-block-size: 0px;
              min-height: 0px;
              min-inline-size: 0px;
              min-width: 0px;
              width: 700px;
            "
          >
            There is something truly special about these bands and I was able to buy one for myself, but most importantly for the people that mean the most in my life. The phrases on the bands are already perfect, but what was a beyond beautiful surprise was the little message that came with the bracelets. They are inspiring and heartfelt and I
            couldn't be happier with how they turned out. Worth every penny and I can't wait to add to the collection!
          </p>
        </div>

        <p
          class="testimonials-author-template--15756659982391__ss_testimonial_11_ffKdC6"
          style="
            caret-color: rgb(73, 73, 74);
            color: rgb(73, 73, 74);
            column-rule-color: rgb(73, 73, 74);
            font-family: 'Josefin Slab', serif;
            font-size: 15px;
            line-height: 19.5px;
            list-style-type: none;
            outline-color: rgb(73, 73, 74);
            perspective-origin: 350px 9.75px;
            text-align: center;
            text-decoration: none solid rgb(73, 73, 74);
            text-emphasis-color: rgb(73, 73, 74);
            transform-origin: 350px 9.75px;
            word-break: break-word;
            -webkit-text-fill-color: rgb(73, 73, 74);
            -webkit-text-stroke-color: rgb(73, 73, 74);
            block-size: 19.5px;
            border-block-color: rgb(73, 73, 74);
            border-color: rgb(73, 73, 74);
            border-inline-color: rgb(73, 73, 74);
            height: 19.5px;
            inline-size: 700px;
            margin-block-start: 14px;
            margin-top: 14px;
            min-block-size: 0px;
            min-height: 0px;
            min-inline-size: 0px;
            min-width: 0px;
            width: 700px;
          "
        >
          Kathlina C.
        </p>
      </div>
    </div>

    <div
      class="testimonials-slide-template--15756659982391__ss_testimonial_11_ffKdC6 swiper-slide swiper-slide-next"
      data-swiper-slide-index="1"
      style="
        transition-duration: 0ms;
        opacity: 0;
        transform: matrix(1, 0, 0, 1, -2674, 0);
        flex-shrink: 0;
        list-style-type: none;
        perspective-origin: 668.5px 68.75px;
        pointer-events: none;
        position: relative;
        transform-origin: 668.5px 68.75px;
        transition-property: opacity;
        block-size: 137.5px;
        inset: 0px;
        height: 137.5px;
        inline-size: 1337px;
        inset-block: 0px;
        inset-inline: 0px;
        width: 1337px;
      "
    >
      <div
        class="testimonials-content-template--15756659982391__ss_testimonial_11_ffKdC6"
        style="
          list-style-type: none;
          perspective-origin: 350px 68.75px;
          pointer-events: none;
          transform: matrix(1, 0, 0, 1, 0, 20);
          transform-origin: 350px 68.75px;
          transition-duration: 0.3s;
          block-size: 137.5px;
          height: 137.5px;
          inline-size: 700px;
          margin-inline: 318.5px;
          margin-left: 318.5px;
          margin-right: 318.5px;
          max-inline-size: 700px;
          max-width: 700px;
          min-block-size: 0px;
          min-height: 0px;
          min-inline-size: 0px;
          min-width: 0px;
          width: 700px;
        "
      >
        <div
          class="testimonials-text-template--15756659982391__ss_testimonial_11_ffKdC6"
          style="
            list-style-type: none;
            perspective-origin: 350px 52px;
            pointer-events: none;
            position: relative;
            text-align: center;
            transform-origin: 350px 52px;
            block-size: 104px;
            inset: 0px;
            height: 104px;
            inline-size: 700px;
            inset-block: 0px;
            inset-inline: 0px;
            min-block-size: 0px;
            min-height: 0px;
            min-inline-size: 0px;
            min-width: 0px;
            width: 700px;
          "
        >
          <div
            class="testimonials-abs-template--15756659982391__ss_testimonial_11_ffKdC6"
            style="
              caret-color: rgb(73, 73, 74);
              color: rgb(73, 73, 74);
              column-rule-color: rgb(73, 73, 74);
              font-family: 'Josefin Slab', serif;
              font-size: 20px;
              line-height: 26px;
              list-style-type: none;
              outline-color: rgb(73, 73, 74);
              perspective-origin: 35px 43px;
              pointer-events: none;
              position: absolute;
              text-align: center;
              text-decoration: none solid rgb(73, 73, 74);
              text-emphasis-color: rgb(73, 73, 74);
              transform-origin: 35px 43px;
              word-break: break-word;
              -webkit-text-fill-color: rgb(73, 73, 74);
              -webkit-text-stroke-color: rgb(73, 73, 74);
              block-size: 86px;
              border-block-color: rgb(73, 73, 74);
              border-color: rgb(73, 73, 74);
              border-inline-color: rgb(73, 73, 74);
              inset: -45px 620px 63px 10px;
              height: 86px;
              inline-size: 70px;
              inset-block: -45px 63px;
              inset-inline: 10px 620px;
              min-block-size: 0px;
              min-height: 0px;
              min-inline-size: 0px;
              min-width: 0px;
              width: 70px;
            "
          >
            <svg
              width="86"
              height="55"
              viewBox="0 0 86 55"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style="
                caret-color: rgb(73, 73, 74);
                color: rgb(73, 73, 74);
                column-rule-color: rgb(73, 73, 74);
                fill: none;
                font-family: 'Josefin Slab', serif;
                font-size: 20px;
                line-height: 26px;
                list-style-type: none;
                object-fit: cover;
                opacity: 0.2;
                outline-color: rgb(73, 73, 74);
                overflow-clip-margin: content-box;
                overflow: hidden;
                perspective-origin: 35px 43px;
                pointer-events: none;
                text-align: center;
                text-decoration: none solid rgb(73, 73, 74);
                text-emphasis-color: rgb(73, 73, 74);
                transform-origin: 35px 43px;
                word-break: break-word;
                -webkit-text-fill-color: rgb(73, 73, 74);
                -webkit-text-stroke-color: rgb(73, 73, 74);
                block-size: 86px;
                border-block-color: rgb(73, 73, 74);
                border-color: rgb(73, 73, 74);
                border-inline-color: rgb(73, 73, 74);
                height: 86px;
                inline-size: 70px;
                min-block-size: 0px;
                min-height: 0px;
                min-inline-size: 0px;
                min-width: 0px;
                width: 70px;
              "
            >
              <path d="M71.3163 54.6H42.5163L60.3163 0.400024H85.5163L71.3163 54.6ZM29.3163 54.6H0.716309L18.9163 0.400024H44.1163L29.3163 54.6Z" fill="#252627"></path>
            </svg>
          </div>
          <p
            style="
              caret-color: rgb(73, 73, 74);
              color: rgb(73, 73, 74);
              column-rule-color: rgb(73, 73, 74);
              font-family: 'Josefin Slab', serif;
              font-size: 20px;
              line-height: 26px;
              list-style-type: none;
              outline-color: rgb(73, 73, 74);
              perspective-origin: 350px 52px;
              pointer-events: none;
              text-align: center;
              text-decoration: none solid rgb(73, 73, 74);
              text-emphasis-color: rgb(73, 73, 74);
              transform-origin: 350px 52px;
              word-break: break-word;
              -webkit-text-fill-color: rgb(73, 73, 74);
              -webkit-text-stroke-color: rgb(73, 73, 74);
              block-size: 104px;
              border-block-color: rgb(73, 73, 74);
              border-color: rgb(73, 73, 74);
              border-inline-color: rgb(73, 73, 74);
              height: 104px;
              inline-size: 700px;
              min-block-size: 0px;
              min-height: 0px;
              min-inline-size: 0px;
              min-width: 0px;
              width: 700px;
            "
          >
            This is a sweet and perfect gift for my sister. She prefers classic pieces of jewelry rather than something trendy or big. I thought she would like this reminder as she searches for a new career path. She appreciates the thoughtful gift and enjoys wearing it with her other bracelet: I can do hard things
          </p>
        </div>

        <p
          class="testimonials-author-template--15756659982391__ss_testimonial_11_ffKdC6"
          style="
            caret-color: rgb(73, 73, 74);
            color: rgb(73, 73, 74);
            column-rule-color: rgb(73, 73, 74);
            font-family: 'Josefin Slab', serif;
            font-size: 15px;
            line-height: 19.5px;
            list-style-type: none;
            outline-color: rgb(73, 73, 74);
            perspective-origin: 350px 9.75px;
            pointer-events: none;
            text-align: center;
            text-decoration: none solid rgb(73, 73, 74);
            text-emphasis-color: rgb(73, 73, 74);
            transform-origin: 350px 9.75px;
            word-break: break-word;
            -webkit-text-fill-color: rgb(73, 73, 74);
            -webkit-text-stroke-color: rgb(73, 73, 74);
            block-size: 19.5px;
            border-block-color: rgb(73, 73, 74);
            border-color: rgb(73, 73, 74);
            border-inline-color: rgb(73, 73, 74);
            height: 19.5px;
            inline-size: 700px;
            margin-block-start: 14px;
            margin-top: 14px;
            min-block-size: 0px;
            min-height: 0px;
            min-inline-size: 0px;
            min-width: 0px;
            width: 700px;
          "
        >
          Kristin H.
        </p>
      </div>
    </div>

    <div
      class="testimonials-slide-template--15756659982391__ss_testimonial_11_ffKdC6 swiper-slide swiper-slide-duplicate-prev"
      data-swiper-slide-index="2"
      style="
        transition-duration: 0ms;
        opacity: 0;
        transform: matrix(1, 0, 0, 1, -4011, 0);
        flex-shrink: 0;
        list-style-type: none;
        perspective-origin: 668.5px 81.75px;
        pointer-events: none;
        position: relative;
        transform-origin: 668.5px 81.75px;
        transition-property: opacity;
        block-size: 163.5px;
        inset: 0px;
        height: 163.5px;
        inline-size: 1337px;
        inset-block: 0px;
        inset-inline: 0px;
        width: 1337px;
      "
    >
      <div
        class="testimonials-content-template--15756659982391__ss_testimonial_11_ffKdC6"
        style="
          list-style-type: none;
          perspective-origin: 350px 81.75px;
          pointer-events: none;
          transform: matrix(1, 0, 0, 1, 0, 20);
          transform-origin: 350px 81.75px;
          transition-duration: 0.3s;
          block-size: 163.5px;
          height: 163.5px;
          inline-size: 700px;
          margin-inline: 318.5px;
          margin-left: 318.5px;
          margin-right: 318.5px;
          max-inline-size: 700px;
          max-width: 700px;
          min-block-size: 0px;
          min-height: 0px;
          min-inline-size: 0px;
          min-width: 0px;
          width: 700px;
        "
      >
        <div
          class="testimonials-text-template--15756659982391__ss_testimonial_11_ffKdC6"
          style="
            list-style-type: none;
            perspective-origin: 350px 65px;
            pointer-events: none;
            position: relative;
            text-align: center;
            transform-origin: 350px 65px;
            block-size: 130px;
            inset: 0px;
            height: 130px;
            inline-size: 700px;
            inset-block: 0px;
            inset-inline: 0px;
            min-block-size: 0px;
            min-height: 0px;
            min-inline-size: 0px;
            min-width: 0px;
            width: 700px;
          "
        >
          <div
            class="testimonials-abs-template--15756659982391__ss_testimonial_11_ffKdC6"
            style="
              caret-color: rgb(73, 73, 74);
              color: rgb(73, 73, 74);
              column-rule-color: rgb(73, 73, 74);
              font-family: 'Josefin Slab', serif;
              font-size: 20px;
              line-height: 26px;
              list-style-type: none;
              outline-color: rgb(73, 73, 74);
              perspective-origin: 35px 43px;
              pointer-events: none;
              position: absolute;
              text-align: center;
              text-decoration: none solid rgb(73, 73, 74);
              text-emphasis-color: rgb(73, 73, 74);
              transform-origin: 35px 43px;
              word-break: break-word;
              -webkit-text-fill-color: rgb(73, 73, 74);
              -webkit-text-stroke-color: rgb(73, 73, 74);
              block-size: 86px;
              border-block-color: rgb(73, 73, 74);
              border-color: rgb(73, 73, 74);
              border-inline-color: rgb(73, 73, 74);
              inset: -45px 620px 89px 10px;
              height: 86px;
              inline-size: 70px;
              inset-block: -45px 89px;
              inset-inline: 10px 620px;
              min-block-size: 0px;
              min-height: 0px;
              min-inline-size: 0px;
              min-width: 0px;
              width: 70px;
            "
          >
            <svg
              width="86"
              height="55"
              viewBox="0 0 86 55"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style="
                caret-color: rgb(73, 73, 74);
                color: rgb(73, 73, 74);
                column-rule-color: rgb(73, 73, 74);
                fill: none;
                font-family: 'Josefin Slab', serif;
                font-size: 20px;
                line-height: 26px;
                list-style-type: none;
                object-fit: cover;
                opacity: 0.2;
                outline-color: rgb(73, 73, 74);
                overflow-clip-margin: content-box;
                overflow: hidden;
                perspective-origin: 35px 43px;
                pointer-events: none;
                text-align: center;
                text-decoration: none solid rgb(73, 73, 74);
                text-emphasis-color: rgb(73, 73, 74);
                transform-origin: 35px 43px;
                word-break: break-word;
                -webkit-text-fill-color: rgb(73, 73, 74);
                -webkit-text-stroke-color: rgb(73, 73, 74);
                block-size: 86px;
                border-block-color: rgb(73, 73, 74);
                border-color: rgb(73, 73, 74);
                border-inline-color: rgb(73, 73, 74);
                height: 86px;
                inline-size: 70px;
                min-block-size: 0px;
                min-height: 0px;
                min-inline-size: 0px;
                min-width: 0px;
                width: 70px;
              "
            >
              <path d="M71.3163 54.6H42.5163L60.3163 0.400024H85.5163L71.3163 54.6ZM29.3163 54.6H0.716309L18.9163 0.400024H44.1163L29.3163 54.6Z" fill="#252627"></path>
            </svg>
          </div>
          <p
            style="
              caret-color: rgb(73, 73, 74);
              color: rgb(73, 73, 74);
              column-rule-color: rgb(73, 73, 74);
              font-family: 'Josefin Slab', serif;
              font-size: 20px;
              line-height: 26px;
              list-style-type: none;
              outline-color: rgb(73, 73, 74);
              perspective-origin: 350px 65px;
              pointer-events: none;
              text-align: center;
              text-decoration: none solid rgb(73, 73, 74);
              text-emphasis-color: rgb(73, 73, 74);
              transform-origin: 350px 65px;
              word-break: break-word;
              -webkit-text-fill-color: rgb(73, 73, 74);
              -webkit-text-stroke-color: rgb(73, 73, 74);
              block-size: 130px;
              border-block-color: rgb(73, 73, 74);
              border-color: rgb(73, 73, 74);
              border-inline-color: rgb(73, 73, 74);
              height: 130px;
              inline-size: 700px;
              min-block-size: 0px;
              min-height: 0px;
              min-inline-size: 0px;
              min-width: 0px;
              width: 700px;
            "
          >
            I love your MantraBands &amp; if I could, I would buy every one to share with the world. Thank you for the positive messages, messages of empowerment &amp; messages of hope and belonging. We desperately need these messages now more than ever. I appreciate you and your inspirational business. Thank you from the bottom of my heart, spirit
            &amp; soul.
          </p>
        </div>

        <p
          class="testimonials-author-template--15756659982391__ss_testimonial_11_ffKdC6"
          style="
            caret-color: rgb(73, 73, 74);
            color: rgb(73, 73, 74);
            column-rule-color: rgb(73, 73, 74);
            font-family: 'Josefin Slab', serif;
            font-size: 15px;
            line-height: 19.5px;
            list-style-type: none;
            outline-color: rgb(73, 73, 74);
            perspective-origin: 350px 9.75px;
            pointer-events: none;
            text-align: center;
            text-decoration: none solid rgb(73, 73, 74);
            text-emphasis-color: rgb(73, 73, 74);
            transform-origin: 350px 9.75px;
            word-break: break-word;
            -webkit-text-fill-color: rgb(73, 73, 74);
            -webkit-text-stroke-color: rgb(73, 73, 74);
            block-size: 19.5px;
            border-block-color: rgb(73, 73, 74);
            border-color: rgb(73, 73, 74);
            border-inline-color: rgb(73, 73, 74);
            height: 19.5px;
            inline-size: 700px;
            margin-block-start: 14px;
            margin-top: 14px;
            min-block-size: 0px;
            min-height: 0px;
            min-inline-size: 0px;
            min-width: 0px;
            width: 700px;
          "
        >
          Pam
        </p>
      </div>
    </div>

    <div
      class="testimonials-slide-template--15756659982391__ss_testimonial_11_ffKdC6 swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active"
      data-swiper-slide-index="0"
      style="
        transition-duration: 0ms;
        opacity: 0;
        transform: matrix(1, 0, 0, 1, -5348, 0);
        flex-shrink: 0;
        list-style-type: none;
        perspective-origin: 668.5px 94.75px;
        pointer-events: none;
        position: relative;
        transform-origin: 668.5px 94.75px;
        transition-property: opacity;
        block-size: 189.5px;
        inset: 0px;
        height: 189.5px;
        inline-size: 1337px;
        inset-block: 0px;
        inset-inline: 0px;
        width: 1337px;
      "
    >
      <div
        class="testimonials-content-template--15756659982391__ss_testimonial_11_ffKdC6"
        style="
          list-style-type: none;
          perspective-origin: 350px 94.75px;
          pointer-events: none;
          transform: matrix(1, 0, 0, 1, 0, 20);
          transform-origin: 350px 94.75px;
          transition-duration: 0.3s;
          block-size: 189.5px;
          height: 189.5px;
          inline-size: 700px;
          margin-inline: 318.5px;
          margin-left: 318.5px;
          margin-right: 318.5px;
          max-inline-size: 700px;
          max-width: 700px;
          min-block-size: 0px;
          min-height: 0px;
          min-inline-size: 0px;
          min-width: 0px;
          width: 700px;
        "
      >
        <div
          class="testimonials-text-template--15756659982391__ss_testimonial_11_ffKdC6"
          style="
            list-style-type: none;
            perspective-origin: 350px 78px;
            pointer-events: none;
            position: relative;
            text-align: center;
            transform-origin: 350px 78px;
            block-size: 156px;
            inset: 0px;
            height: 156px;
            inline-size: 700px;
            inset-block: 0px;
            inset-inline: 0px;
            min-block-size: 0px;
            min-height: 0px;
            min-inline-size: 0px;
            min-width: 0px;
            width: 700px;
          "
        >
          <div
            class="testimonials-abs-template--15756659982391__ss_testimonial_11_ffKdC6"
            style="
              caret-color: rgb(73, 73, 74);
              color: rgb(73, 73, 74);
              column-rule-color: rgb(73, 73, 74);
              font-family: 'Josefin Slab', serif;
              font-size: 20px;
              line-height: 26px;
              list-style-type: none;
              outline-color: rgb(73, 73, 74);
              perspective-origin: 35px 43px;
              pointer-events: none;
              position: absolute;
              text-align: center;
              text-decoration: none solid rgb(73, 73, 74);
              text-emphasis-color: rgb(73, 73, 74);
              transform-origin: 35px 43px;
              word-break: break-word;
              -webkit-text-fill-color: rgb(73, 73, 74);
              -webkit-text-stroke-color: rgb(73, 73, 74);
              block-size: 86px;
              border-block-color: rgb(73, 73, 74);
              border-color: rgb(73, 73, 74);
              border-inline-color: rgb(73, 73, 74);
              inset: -45px 620px 115px 10px;
              height: 86px;
              inline-size: 70px;
              inset-block: -45px 115px;
              inset-inline: 10px 620px;
              min-block-size: 0px;
              min-height: 0px;
              min-inline-size: 0px;
              min-width: 0px;
              width: 70px;
            "
          >
            <svg
              width="86"
              height="55"
              viewBox="0 0 86 55"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style="
                caret-color: rgb(73, 73, 74);
                color: rgb(73, 73, 74);
                column-rule-color: rgb(73, 73, 74);
                fill: none;
                font-family: 'Josefin Slab', serif;
                font-size: 20px;
                line-height: 26px;
                list-style-type: none;
                object-fit: cover;
                opacity: 0.2;
                outline-color: rgb(73, 73, 74);
                overflow-clip-margin: content-box;
                overflow: hidden;
                perspective-origin: 35px 43px;
                pointer-events: none;
                text-align: center;
                text-decoration: none solid rgb(73, 73, 74);
                text-emphasis-color: rgb(73, 73, 74);
                transform-origin: 35px 43px;
                word-break: break-word;
                -webkit-text-fill-color: rgb(73, 73, 74);
                -webkit-text-stroke-color: rgb(73, 73, 74);
                block-size: 86px;
                border-block-color: rgb(73, 73, 74);
                border-color: rgb(73, 73, 74);
                border-inline-color: rgb(73, 73, 74);
                height: 86px;
                inline-size: 70px;
                min-block-size: 0px;
                min-height: 0px;
                min-inline-size: 0px;
                min-width: 0px;
                width: 70px;
              "
            >
              <path d="M71.3163 54.6H42.5163L60.3163 0.400024H85.5163L71.3163 54.6ZM29.3163 54.6H0.716309L18.9163 0.400024H44.1163L29.3163 54.6Z" fill="#252627"></path>
            </svg>
          </div>
          <p
            style="
              caret-color: rgb(73, 73, 74);
              color: rgb(73, 73, 74);
              column-rule-color: rgb(73, 73, 74);
              font-family: 'Josefin Slab', serif;
              font-size: 20px;
              line-height: 26px;
              list-style-type: none;
              outline-color: rgb(73, 73, 74);
              perspective-origin: 350px 78px;
              pointer-events: none;
              text-align: center;
              text-decoration: none solid rgb(73, 73, 74);
              text-emphasis-color: rgb(73, 73, 74);
              transform-origin: 350px 78px;
              word-break: break-word;
              -webkit-text-fill-color: rgb(73, 73, 74);
              -webkit-text-stroke-color: rgb(73, 73, 74);
              block-size: 156px;
              border-block-color: rgb(73, 73, 74);
              border-color: rgb(73, 73, 74);
              border-inline-color: rgb(73, 73, 74);
              height: 156px;
              inline-size: 700px;
              min-block-size: 0px;
              min-height: 0px;
              min-inline-size: 0px;
              min-width: 0px;
              width: 700px;
            "
          >
            There is something truly special about these bands and I was able to buy one for myself, but most importantly for the people that mean the most in my life. The phrases on the bands are already perfect, but what was a beyond beautiful surprise was the little message that came with the bracelets. They are inspiring and heartfelt and I
            couldn't be happier with how they turned out. Worth every penny and I can't wait to add to the collection!
          </p>
        </div>

        <p
          class="testimonials-author-template--15756659982391__ss_testimonial_11_ffKdC6"
          style="
            caret-color: rgb(73, 73, 74);
            color: rgb(73, 73, 74);
            column-rule-color: rgb(73, 73, 74);
            font-family: 'Josefin Slab', serif;
            font-size: 15px;
            line-height: 19.5px;
            list-style-type: none;
            outline-color: rgb(73, 73, 74);
            perspective-origin: 350px 9.75px;
            pointer-events: none;
            text-align: center;
            text-decoration: none solid rgb(73, 73, 74);
            text-emphasis-color: rgb(73, 73, 74);
            transform-origin: 350px 9.75px;
            word-break: break-word;
            -webkit-text-fill-color: rgb(73, 73, 74);
            -webkit-text-stroke-color: rgb(73, 73, 74);
            block-size: 19.5px;
            border-block-color: rgb(73, 73, 74);
            border-color: rgb(73, 73, 74);
            border-inline-color: rgb(73, 73, 74);
            height: 19.5px;
            inline-size: 700px;
            margin-block-start: 14px;
            margin-top: 14px;
            min-block-size: 0px;
            min-height: 0px;
            min-inline-size: 0px;
            min-width: 0px;
            width: 700px;
          "
        >
          Kathlina C.
        </p>
      </div>
    </div>
  </div>
  <div
    class="testimonials-navigation-template--15756659982391__ss_testimonial_11_ffKdC6"
    style="
      align-items: center;
      gap: 20px;
      display: flex;
      justify-content: center;
      list-style-type: none;
      perspective-origin: 668.5px 24px;
      transform-origin: 668.5px 24px;
      block-size: 48px;
      height: 48px;
      inline-size: 1337px;
      margin-block-start: 14px;
      margin-top: 14px;
      min-block-size: 0px;
      min-height: 0px;
      min-inline-size: 0px;
      min-width: 0px;
      width: 1337px;
    "
  >
    <button
      class="testimonials-btn-prev-template--15756659982391__ss_testimonial_11_ffKdC6"
      style="
        align-items: center;
        background-color: rgba(0, 0, 0, 0);
        display: flex;
        flex-basis: 48px;
        flex-shrink: 0;
        justify-content: center;
        list-style-type: none;
        perspective-origin: 24px 24px;
        transform-origin: 24px 24px;
        transition-duration: 0.3s;
        block-size: 48px;
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
        height: 48px;
        inline-size: 48px;
        padding-block: 0px;
        padding: 0px;
        padding-inline: 0px;
        width: 48px;
      "
    >
      <svg
        width="16"
        height="9"
        viewBox="0 0 16 9"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        class="svelte-1dofwfm use-transition right"
        style="
          caret-color: rgb(0, 0, 0);
          color: rgb(0, 0, 0);
          column-rule-color: rgb(0, 0, 0);
          cursor: pointer;
          fill: none;
          flex-basis: 14px;
          flex-shrink: 0;
          list-style-type: none;
          outline-color: rgb(0, 0, 0);
          overflow-clip-margin: content-box;
          overflow: hidden;
          perspective-origin: 7px 7px;
          text-align: center;
          text-decoration: none solid rgb(0, 0, 0);
          text-emphasis-color: rgb(0, 0, 0);
          transform: matrix(0, 1, -1, 0, 0, 0);
          transform-origin: 7px 7px;
          -webkit-text-fill-color: rgb(0, 0, 0);
          -webkit-text-stroke-color: rgb(0, 0, 0);
          block-size: 14px;
          border-block-color: rgb(0, 0, 0);
          border-color: rgb(0, 0, 0);
          border-inline-color: rgb(0, 0, 0);
          height: 14px;
          inline-size: 14px;
          margin-inline-start: -2px;
          margin-left: -2px;
          width: 14px;
        "
      >
        <path fill-rule="evenodd" clip-rule="evenodd" d="M16 1.38462L14.5455 0L8 6.23077L1.45455 0L0 1.38462L8 9L16 1.38462Z" fill="currentColor"></path>
      </svg>
    </button>
    <div
      class="testimonials-pagination-template--15756659982391__ss_testimonial_11_ffKdC6 swiper-pagination swiper-pagination-clickable swiper-pagination-bullets"
      style="
        align-items: center;
        gap: 10px;
        display: flex;
        justify-content: center;
        list-style-type: none;
        perspective-origin: 19px 3px;
        text-align: center;
        transform: matrix(1, 0, 0, 1, 0, 0);
        transform-origin: 19px 3px;
        transition-duration: 0.3s;
        transition-property: opacity;
        z-index: 10;
        block-size: 6px;
        height: 6px;
        inline-size: 38px;
        max-inline-size: fit-content;
        max-width: fit-content;
        width: 38px;
      "
    >
      <span
        class="swiper-pagination-bullet swiper-pagination-bullet-active"
        style="
          background-color: rgb(73, 73, 74);
          cursor: pointer;
          list-style-type: none;
          perspective-origin: 3px 3px;
          text-align: center;
          transform-origin: 3px 3px;
          transition-duration: 0.25s;
          block-size: 6px;
          border-radius: 50%;
          border-end-end-radius: 50%;
          border-end-start-radius: 50%;
          border-start-end-radius: 50%;
          border-start-start-radius: 50%;
          height: 6px;
          inline-size: 6px;
          width: 6px;
          display: inline-block;
          min-height: 24px;
          min-width: 24px;
        "
      ></span
      ><span
        class="swiper-pagination-bullet"
        style="
          background-color: rgb(73, 73, 74);
          cursor: pointer;
          list-style-type: none;
          opacity: 0.5;
          perspective-origin: 3px 3px;
          text-align: center;
          transform-origin: 3px 3px;
          transition-duration: 0.25s;
          block-size: 6px;
          border-radius: 50%;
          border-end-end-radius: 50%;
          border-end-start-radius: 50%;
          border-start-end-radius: 50%;
          border-start-start-radius: 50%;
          height: 6px;
          inline-size: 6px;
          width: 6px;
          display: inline-block;
          min-height: 24px;
          min-width: 24px;
        "
      ></span
      ><span
        class="swiper-pagination-bullet"
        style="
          background-color: rgb(73, 73, 74);
          cursor: pointer;
          list-style-type: none;
          opacity: 0.5;
          perspective-origin: 3px 3px;
          text-align: center;
          transform-origin: 3px 3px;
          transition-duration: 0.25s;
          block-size: 6px;
          border-radius: 50%;
          border-end-end-radius: 50%;
          border-end-start-radius: 50%;
          border-start-end-radius: 50%;
          border-start-start-radius: 50%;
          height: 6px;
          inline-size: 6px;
          width: 6px;
          display: inline-block;
          min-height: 24px;
          min-width: 24px;
        "
      ></span>
    </div>
    <button
      class="testimonials-btn-next-template--15756659982391__ss_testimonial_11_ffKdC6"
      style="
        align-items: center;
        background-color: rgba(0, 0, 0, 0);
        display: flex;
        flex-basis: 48px;
        flex-shrink: 0;
        justify-content: center;
        list-style-type: none;
        perspective-origin: 24px 24px;
        transform-origin: 24px 24px;
        transition-duration: 0.3s;
        block-size: 48px;
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
        height: 48px;
        inline-size: 48px;
        padding-block: 0px;
        padding: 0px;
        padding-inline: 0px;
        width: 48px;
      "
    >
      <svg
        width="16"
        height="9"
        viewBox="0 0 16 9"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        class="svelte-1dofwfm use-transition right"
        style="
          caret-color: rgb(0, 0, 0);
          color: rgb(0, 0, 0);
          column-rule-color: rgb(0, 0, 0);
          cursor: pointer;
          fill: none;
          flex-basis: 14px;
          flex-shrink: 0;
          list-style-type: none;
          outline-color: rgb(0, 0, 0);
          overflow-clip-margin: content-box;
          overflow: hidden;
          perspective-origin: 7px 7px;
          text-align: center;
          text-decoration: none solid rgb(0, 0, 0);
          text-emphasis-color: rgb(0, 0, 0);
          transform: matrix(0, -1, 1, 0, 0, 0);
          transform-origin: 7px 7px;
          -webkit-text-fill-color: rgb(0, 0, 0);
          -webkit-text-stroke-color: rgb(0, 0, 0);
          block-size: 14px;
          border-block-color: rgb(0, 0, 0);
          border-color: rgb(0, 0, 0);
          border-inline-color: rgb(0, 0, 0);
          height: 14px;
          inline-size: 14px;
          margin-inline-start: 2px;
          margin-left: 2px;
          width: 14px;
        "
      >
        <path fill-rule="evenodd" clip-rule="evenodd" d="M16 1.38462L14.5455 0L8 6.23077L1.45455 0L0 1.38462L8 9L16 1.38462Z" fill="currentColor"></path>
      </svg>
    </button>
  </div>
</div>
<style></style>` },
  { filename: "undersized interactive element with enough space around it", content: `<style>
  .interactive-small {
    margin: 2px;
  }
</style>
<button class="interactive interactive-small" style="width: 20px; height: 20px"></button>
<div></div>
<button class="interactive interactive-big" style="width: 24px; height: 24px"></button>` },
  { filename: "undersized interactive element with space around it", content: `<style>
  .interactive {
    margin: 10px;
  }
</style>
<button class="interactive interactive-small" style="width: 20px; height: 20px"></button>
<div></div>
<button class="interactive interactive-big" style="width: 24px; height: 24px"></button>` }
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

export default InteractiveTargetSizeSuccess;
