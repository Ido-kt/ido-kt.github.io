import React from "react";
import EngineIssueSuccess from "../../../layout/engineIssueSuccess";

const CarouselPreviousSlideDiscernibleSuccess = () => {
  const ruleId = "carousel-previous-slide-discernible";
  const title = `Carousel navigation previous arrows should be labelled for assistive technology`;
  const description = `Carousel arrow buttons are essential for operating carousels. By design, carousels are difficult for assistive technology to handle. If the navigation arrows aren't accessible, carousels may be impossible for blind users to operate.`;
  const helpText = `When using arrow button to change the carousel slide to the previous in order, include an "aria-label" or a screen-reader-only text noting this button will show the previous slide.`;
  const bestPractices = [
  "Follow proper HTML semantics",
  "Ensure screen reader compatibility",
  "Test with assistive technologies"
  ];
  const htmlExamples = [
  { filename: "carousel controls correctly labelled", content: `<div id="test-subject" class="carousel" role="region" aria-roledescription="carousel" aria-label="News feed">
    <button class="control" aria-label="previous slide">&lt;</button>
    <ul class="carousel__slides-container">
        <li class="slide">slide 1</li>
        <li class="slide">slide 2</li>
        <li class="slide">slide 3</li>
    </ul>
    <button class="control" aria-label="next slide">&gt;</button>
</div>` },
  { filename: "carousel controls labelled wrongly", content: `<div id="test-subject" class="carousel" role="region" aria-roledescription="carousel" aria-label="News feed">
    <button class="control prev" aria-label="some button"></button>
    <ul class="carousel__slides-container">
        <li class="slide">slide 1</li>
        <li class="slide">slide 2</li>
        <li class="slide">slide 3</li>
    </ul>
    <button class="control next" aria-label="some other button">&gt;</button>
</div>` },
  { filename: "vuetifyjs carousel controls not labelled", content: `<link rel="stylesheet" href="../assets/vuetify/style-DpYeMxzX.css">

<div class="mb-9 v-example v-sheet v-sheet--outlined theme--light rounded">
    <div class="v-lazy" style="min-height: 52px;">
        <div class="text-end pa-2"><span class="v-app-tooltip-btn d-inline-block"><button type="button"
                    class="v-btn v-btn--icon v-btn--round theme--light v-size--default"
                    aria-label="invert-example-colors"><span class="v-btn__content"><span aria-hidden="true"
                            class="v-icon notranslate theme--light"><svg xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24" role="img" aria-hidden="true" class="v-icon__svg">
                                <path
                                    d="M12,19.58V19.58C10.4,19.58 8.89,18.96 7.76,17.83C6.62,16.69 6,15.19 6,13.58C6,12 6.62,10.47 7.76,9.34L12,5.1M17.66,7.93L12,2.27V2.27L6.34,7.93C3.22,11.05 3.22,16.12 6.34,19.24C7.9,20.8 9.95,21.58 12,21.58C14.05,21.58 16.1,20.8 17.66,19.24C20.78,16.12 20.78,11.05 17.66,7.93Z">
                                </path>
                            </svg></span></span></button><span
                    class="v-tooltip v-tooltip--bottom"><!----></span></span><span
                class="v-app-tooltip-btn d-inline-block"><button type="button"
                    class="v-btn v-btn--icon v-btn--round theme--light v-size--default"
                    aria-label="edit-in-codepen"><span class="v-btn__content"><span aria-hidden="true"
                            class="v-icon notranslate theme--light"><svg xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24" role="img" aria-hidden="true" class="v-icon__svg">
                                <path
                                    d="M8.21 12L6.88 12.89V11.11L8.21 12M11.47 9.82V7.34L7.31 10.12L9.16 11.36L11.47 9.82M16.7 10.12L12.53 7.34V9.82L14.84 11.36L16.7 10.12M7.31 13.88L11.47 16.66V14.18L9.16 12.64L7.31 13.88M12.53 14.18V16.66L16.7 13.88L14.84 12.64L12.53 14.18M12 10.74L10.12 12L12 13.26L13.88 12L12 10.74M22 12C22 17.5 17.5 22 12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2C17.5 2 22 6.5 22 12M18.18 10.12C18.18 10.09 18.18 10.07 18.18 10.05L18.17 10L18.17 10L18.16 9.95C18.15 9.94 18.15 9.93 18.14 9.91L18.13 9.89L18.11 9.85L18.1 9.83L18.08 9.8L18.06 9.77L18.03 9.74L18 9.72L18 9.7L17.96 9.68L17.95 9.67L12.3 5.91C12.12 5.79 11.89 5.79 11.71 5.91L6.05 9.67L6.05 9.68L6 9.7C6 9.71 6 9.72 6 9.72L5.97 9.74L5.94 9.77L5.93 9.8L5.9 9.83L5.89 9.85L5.87 9.89L5.86 9.91L5.84 9.95L5.84 10L5.83 10L5.82 10.05C5.82 10.07 5.82 10.09 5.82 10.12V13.88C5.82 13.91 5.82 13.93 5.82 13.95L5.83 14L5.84 14L5.84 14.05C5.85 14.06 5.85 14.07 5.86 14.09L5.87 14.11L5.89 14.15L5.9 14.17L5.92 14.2L5.94 14.23C5.95 14.24 5.96 14.25 5.97 14.26L6 14.28L6 14.3L6.04 14.32L6.05 14.33L11.71 18.1C11.79 18.16 11.9 18.18 12 18.18C12.1 18.18 12.21 18.15 12.3 18.1L17.95 14.33L17.96 14.32L18 14.3L18 14.28L18.03 14.26L18.06 14.23L18.08 14.2L18.1 14.17L18.11 14.15L18.13 14.11L18.14 14.09L18.16 14.05L18.16 14L18.17 14L18.18 13.95C18.18 13.93 18.18 13.91 18.18 13.88V10.12M17.12 12.89V11.11L15.79 12L17.12 12.89Z">
                                </path>
                            </svg></span></span></button><span
                    class="v-tooltip v-tooltip--bottom"><!----></span></span><span
                class="v-app-tooltip-btn d-inline-block"><a target="_blank"
                    class="v-btn v-btn--icon v-btn--round theme--light v-size--default"
                    aria-label="view-in-github"><span class="v-btn__content"><span aria-hidden="true"
                            class="v-icon notranslate theme--light"><svg xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24" role="img" aria-hidden="true" class="v-icon__svg">
                                <path
                                    d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z">
                                </path>
                            </svg></span></span></a><span class="v-tooltip v-tooltip--bottom"><!----></span></span><span
                class="v-app-tooltip-btn d-inline-block"><button type="button"
                    class="v-btn v-btn--icon v-btn--round theme--light v-size--default" aria-label="view-source"><span
                        class="v-btn__content"><span aria-hidden="true" class="v-icon notranslate theme--light"><svg
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="img" aria-hidden="true"
                                class="v-icon__svg">
                                <path
                                    d="M14.6,16.6L19.2,12L14.6,7.4L16,6L22,12L16,18L14.6,16.6M9.4,16.6L4.8,12L9.4,7.4L8,6L2,12L8,18L9.4,16.6Z">
                                </path>
                            </svg></span></span></button><span class="v-tooltip v-tooltip--bottom"><!----></span></span>
        </div>
    </div>
    <hr role="separator" aria-orientation="horizontal" class="v-divider theme--light"><!---->
    <div class="pa-4 v-sheet theme--light rounded">
        <div id="test-subject" role="region" aria-roledescription="carousel" aria-label="example of slides"
            class="v-window v-item-group theme--dark v-carousel" file="v-carousel/usage" style="height: 500px;">
            <div class="v-window__container">
                <div class="v-window-item" style="display: none;">
                    <div class="v-image v-responsive v-carousel__item theme--light" style="height: 500px;">
                        <div class="v-responsive__content">
                            <div class="v-sheet theme--light rounded-0 primary" style="height: 100%;">
                                <div class="row fill-height align-center justify-center">
                                    <div class="text-h2"> Slide 1 </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="v-window-item">
                    <div class="v-image v-responsive v-carousel__item theme--light" style="height: 500px;">
                        <div class="v-responsive__content">
                            <div class="v-sheet theme--light rounded-0 secondary" style="height: 100%;">
                                <div class="row fill-height align-center justify-center">
                                    <div class="text-h2"> Slide 2 </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div><!----><!----><!---->
                <div class="v-window__prev"><button type="button"
                        class="v-btn v-btn--icon v-btn--round theme--dark v-size--default"
                        aria-label="Previous visual"><span class="v-btn__content"><span aria-hidden="true"
                                class="v-icon notranslate theme--dark"
                                style="font-size: 36px; height: 36px; width: 36px;"><svg
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="img" aria-hidden="true"
                                    class="v-icon__svg" style="font-size: 36px; height: 36px; width: 36px;">
                                    <path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"></path>
                                </svg></span></span></button></div>
                <div class="v-window__next"><button type="button"
                        class="v-btn v-btn--icon v-btn--round theme--dark v-size--default"
                        aria-label="Next visual"><span class="v-btn__content"><span aria-hidden="true"
                                class="v-icon notranslate theme--dark"
                                style="font-size: 36px; height: 36px; width: 36px;"><svg
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="img" aria-hidden="true"
                                    class="v-icon__svg" style="font-size: 36px; height: 36px; width: 36px;">
                                    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"></path>
                                </svg></span></span></button></div>
            </div>
            <div class="v-carousel__controls" style="left: auto; right: auto;">
                <div class="v-item-group theme--dark"><button type="button" value="0"
                        class="v-carousel__controls__item v-btn v-btn--icon v-btn--round theme--dark v-size--small"
                        aria-label="Carousel slide 1 of 5"><span class="v-btn__content"><span aria-hidden="true"
                                class="v-icon notranslate theme--dark"
                                style="font-size: 18px; height: 18px; width: 18px;"><svg
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="img" aria-hidden="true"
                                    class="v-icon__svg" style="font-size: 18px; height: 18px; width: 18px;">
                                    <path
                                        d="M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2Z">
                                    </path>
                                </svg></span></span></button><button type="button" value="1"
                        class="v-carousel__controls__item v-btn v-item--active v-btn--active v-btn--icon v-btn--round theme--dark v-size--small"
                        aria-label="Carousel slide 2 of 5"><span class="v-btn__content"><span aria-hidden="true"
                                class="v-icon notranslate theme--dark"
                                style="font-size: 18px; height: 18px; width: 18px;"><svg
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="img" aria-hidden="true"
                                    class="v-icon__svg" style="font-size: 18px; height: 18px; width: 18px;">
                                    <path
                                        d="M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2Z">
                                    </path>
                                </svg></span></span></button><button type="button" value="2"
                        class="v-carousel__controls__item v-btn v-btn--icon v-btn--round theme--dark v-size--small"
                        aria-label="Carousel slide 3 of 5"><span class="v-btn__content"><span aria-hidden="true"
                                class="v-icon notranslate theme--dark"
                                style="font-size: 18px; height: 18px; width: 18px;"><svg
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="img" aria-hidden="true"
                                    class="v-icon__svg" style="font-size: 18px; height: 18px; width: 18px;">
                                    <path
                                        d="M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2Z">
                                    </path>
                                </svg></span></span></button><button type="button" value="3"
                        class="v-carousel__controls__item v-btn v-btn--icon v-btn--round theme--dark v-size--small"
                        aria-label="Carousel slide 4 of 5"><span class="v-btn__content"><span aria-hidden="true"
                                class="v-icon notranslate theme--dark"
                                style="font-size: 18px; height: 18px; width: 18px;"><svg
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="img" aria-hidden="true"
                                    class="v-icon__svg" style="font-size: 18px; height: 18px; width: 18px;">
                                    <path
                                        d="M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2Z">
                                    </path>
                                </svg></span></span></button><button type="button" value="4"
                        class="v-carousel__controls__item v-btn v-btn--icon v-btn--round theme--dark v-size--small"
                        aria-label="Carousel slide 5 of 5"><span class="v-btn__content"><span aria-hidden="true"
                                class="v-icon notranslate theme--dark"
                                style="font-size: 18px; height: 18px; width: 18px;"><svg
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="img" aria-hidden="true"
                                    class="v-icon__svg" style="font-size: 18px; height: 18px; width: 18px;">
                                    <path
                                        d="M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2Z">
                                    </path>
                                </svg></span></span></button></div>
            </div>
        </div>
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

export default CarouselPreviousSlideDiscernibleSuccess;
