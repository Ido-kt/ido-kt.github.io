import React from "react";
import EngineIssueFailure from "../../../layout/engineIssueFailure";

const CarouselMismatchFailure = () => {
  const ruleId = "carousel-mismatch";
  const title = `Carousels should be tagged for assistive technology`;
  const description = `The carousel container should have a role so assistive technology treats it as a distinct section. Using role="region" with a label exposes the carousel as a named region, allowing screen reader users to recognize the purpose of the component and navigate to it efficiently.`;
  const helpText = `Assign role="region" to the carousel container. Make sure to provide a descriptive label using aria-label or aria-labelledby.`;
  const fixSteps = [
  "Review the HTML structure",
  "Apply proper accessibility attributes",
  "Test with screen readers"
  ];
  const htmlExamples = [
  { filename: "972creative carousels", content: `<link rel="stylesheet" href="../assets/972creative/090cfb33e36341d6b593c3d64994a463.css" data-minify="1">
<link href="../assets/972creative/widget.css" rel="stylesheet">
<link rel="stylesheet" href="../assets/972creative/font-awesome.min.css" media="all">

<div class="content has_slider" style="min-height: 886px">
  <div class="content_inner">
    <div class="q_slider">
      <div class="q_slider_inner">
        <div
          id="qode-972-creative"
          data-q_responsive_graphic_coefficients="1,1,0.8,0.7,0.6,0.5,0.4"
          data-q_responsive_title_coefficients="1,1,0.8,0.7,0.6,0.5,0.4"
          data-q_responsive_subtitle_coefficients="1,1,0.8,0.7,0.6,0.5,0.4"
          data-q_responsive_text_coefficients="1,1,0.8,0.7,0.6,0.5,0.4"
          data-q_responsive_button_coefficients="1,1,0.8,0.7,0.6,0.5,0.4"
          class="carousel slide fade full_screen q_auto_start advanced_responsiveness"
          data-slide_animation="6000"
          data-parallax="yes"
          style="height: 959px"
        >
          <div class="qode_slider_preloader" style="height: 959px; display: none">
            <div class="ajax_loader" style="display: block">
              <div class="ajax_loader_1">
                <div class="five_rotating_circles">
                  <div class="spinner-container container1">
                    <div class="circle1"></div>
                    <div class="circle2"></div>
                    <div class="circle3"></div>
                    <div class="circle4"></div>
                  </div>
                  <div class="spinner-container container2">
                    <div class="circle1"></div>
                    <div class="circle2"></div>
                    <div class="circle3"></div>
                    <div class="circle4"></div>
                  </div>
                  <div class="spinner-container container3">
                    <div class="circle1"></div>
                    <div class="circle2"></div>
                    <div class="circle3"></div>
                    <div class="circle4"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-inner skrollable skrollable-after" data-start="transform: translateY(0px);" data-1440="transform: translateY(-500px);" style="transform: translateY(-500px); display: none">
            <div class="item content_vertical_middle active" style="padding-top: 80px; height: 959px">
              <div class="image" style="background-image: url(https://www.972creative.com/wp-content/uploads/2017/07/home-slider-3b.jpg)">
                <img itemprop="image" src="https://www.972creative.com/wp-content/uploads/2017/07/home-slider-3b.jpg" alt="Make Your WordPress Website Extraordinary" />
              </div>
              <div class="slider_content_outer">
                <div class="slider_content center skrollable skrollable-after" style="opacity: 0" data-0=" opacity: 1;   " data-300=" opacity: 0;  ">
                  <div class="slider_content_inner all_at_once subtitle_bellow_title no_separator" style="width: 100%; position: relative">
                    <div class="text all_at_once subtitle_bellow_title no_separator">
                      <div>
                        <h2 class="q_slide_title" style="color: rgb(255, 255, 255); font-size: 48px; line-height: 48px; font-style: normal; font-weight: 500; text-shadow: none; letter-spacing: 0px; text-transform: none; margin-bottom: 16px">
                          <span style="">Make Your WordPress Website Extraordinary</span>
                        </h2>
                      </div>
                      <div>
                        <h4 class="q_slide_subtitle" style="font-size: 26px; line-height: 26px; font-style: normal; font-weight: 400; text-transform: none; letter-spacing: 0px; text-shadow: none; margin-bottom: 0px">
                          <span>Your website journey is about to begin.</span>
                        </h4>
                      </div>
                      <p class="q_slide_text" style="text-shadow: none; color: rgb(255, 255, 255); font-size: 14px; line-height: 23px; font-style: normal; font-weight: 400; text-transform: none; padding-top: 3px; padding-bottom: 6px; letter-spacing: 0px">
                        <span></span>
                      </p>
                      <a itemprop="url" class="qbutton green default pum-trigger" href="/quick-contact/" style="cursor: pointer; font-size: 10px; line-height: 36px; letter-spacing: 0px; height: 36px; width: 52px; padding-left: 44px; padding-right: 44px">Start Now</a>
                      <div class="slide_anchor_holder">
                        <a style="color: #ffffff" class="slide_anchor_button anchor" href="#content"><i class="fa fa-angle-down"></i></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="full_width">
      <div class="full_width_inner">
        <div class="vc_row wpb_row section vc_row-fluid" style="text-align: left">
          <div class="full_section_inner clearfix">
            <div class="wpb_column vc_column_container vc_col-sm-12">
              <div class="vc_column-inner">
                <div class="wpb_wrapper">
                  <div class="wpb_raw_code wpb_raw_js">
                    <div class="wpb_wrapper"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div data-q_id="#content" class="vc_row wpb_row section vc_row-fluid grid_section" style="padding-top: 150px; padding-bottom: 150px; text-align: center">
          <div class="section_inner clearfix">
            <div class="section_inner_margin clearfix">
              <div class="wpb_column vc_column_container vc_col-sm-2">
                <div class="vc_column-inner">
                  <div class="wpb_wrapper"></div>
                </div>
              </div>
              <div class="wpb_animate_when_almost_visible wpb_fadeIn fadeIn wpb_column vc_column_container vc_col-sm-8 wpb_start_animation animated">
                <div class="vc_column-inner">
                  <div class="wpb_wrapper">
                    <div class="wpb_text_column wpb_content_element">
                      <div class="wpb_wrapper">
                        <h2 style="text-align: center">Work Hard and Enjoy the Ride…</h2>
                      </div>
                    </div>
                    <div class="separator small center" style="margin-top: 10px; margin-bottom: 25px; height: 2px; width: 10%"></div>

                    <div class="wpb_text_column wpb_content_element intro-text">
                      <div class="wpb_wrapper">
                        <p>
                          We believe that building a company website should be a fun exciting experience – and that’s exactly what we aim to deliver at 972 creative. From collaborating with you on a discovery phase, to then jumping into the design and development phase of your new website, we will open your eyes and mind to new ideas and
                          possibilities of making your website extraordinary.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="wpb_column vc_column_container vc_col-sm-2">
                <div class="vc_column-inner">
                  <div class="wpb_wrapper"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="vc_row wpb_row section vc_row-fluid grid_section" style="background-color: #f6f6f6; padding-top: 100px; padding-bottom: 50px; text-align: center">
          <div class="section_inner clearfix">
            <div class="section_inner_margin clearfix">
              <div class="wpb_column vc_column_container vc_col-sm-12 vc_col-lg-offset-2 vc_col-lg-8 vc_col-md-offset-1 vc_col-md-10">
                <div class="vc_column-inner vc_custom_1467108142607">
                  <div class="wpb_wrapper">
                    <div class="wpb_text_column wpb_content_element">
                      <div class="wpb_wrapper">
                        <h2>Work</h2>
                      </div>
                    </div>
                    <div class="separator small center" style="margin-top: 10px; margin-bottom: 25px; height: 2px; width: 10%"></div>

                    <div class="wpb_text_column wpb_content_element">
                      <div class="wpb_wrapper">
                        <h4>A little taste of the work we do</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="vc_row wpb_row section vc_row-fluid" style="background-color: #f6f6f6; text-align: left">
          <div class="full_section_inner clearfix" style="padding: 0% 1%">
            <div class="wpb_column vc_column_container vc_col-sm-12">
              <div class="vc_column-inner">
                <div class="wpb_wrapper">
                  <div class="q_elements_holder one_column responsive_mode_from_768">
                    <div class="q_elements_item" data-animation="no" data-item-class="q_elements_holder_custom_637867">
                      <div class="q_elements_item_inner">
                        <div class="q_elements_item_content q_elements_holder_custom_637867" style="padding: 0 12px">
                          <div class="projects_holder_outer v3 portfolio_with_space portfolio_with_hover_text">
                            <div class="projects_holder portfolio_main_holder clearfix v3 hover_text portfolio_full_image portfolio_one_by_one hideItems">
                              <article class="mix portfolio_category_23 portfolio_category_22 default mix_all show" style="display: inline-block; opacity: 1; visibility: visible">
                                <div class="item_holder split_up">
                                  <div class="text_holder">
                                    <div class="text_holder_outer">
                                      <div class="text_holder_inner">
                                        <h5 itemprop="name" class="portfolio_title entry_title">
                                          <a itemprop="url" href="https://www.972creative.com/projects/oasis/" style="color: #ffffff" target="_self"> Oasis Management Company</a>
                                        </h5>

                                        <div class="portfolio_separator separator small center"></div>

                                        <span class="project_category" style="color: #ffffff"> Mulitlingual / Tech </span>
                                      </div>
                                    </div>
                                  </div>

                                  <a itemprop="url" class="portfolio_link_class" href="https://www.972creative.com/projects/oasis/"></a>

                                  <div style="background-color: rgba(140, 193, 64, 0.85)" class="portfolio_shader"></div>
                                  <div class="image_holder">
                                    <span class="image"
                                      ><img
                                        width="2416"
                                        height="1359"
                                        src="https://www.972creative.com/wp-content/uploads/2017/01/Portfolio-Featured-Oasis.jpg"
                                        class="attachment-full size-full wp-post-image"
                                        alt=""
                                        srcset="
                                          https://www.972creative.com/wp-content/uploads/2017/01/Portfolio-Featured-Oasis.jpg          2416w,
                                          https://www.972creative.com/wp-content/uploads/2017/01/Portfolio-Featured-Oasis-300x169.jpg   300w,
                                          https://www.972creative.com/wp-content/uploads/2017/01/Portfolio-Featured-Oasis-768x432.jpg   768w,
                                          https://www.972creative.com/wp-content/uploads/2017/01/Portfolio-Featured-Oasis-1024x576.jpg 1024w,
                                          https://www.972creative.com/wp-content/uploads/2017/01/Portfolio-Featured-Oasis-700x394.jpg   700w,
                                          https://www.972creative.com/wp-content/uploads/2017/01/Portfolio-Featured-Oasis-539x303.jpg   539w
                                        "
                                        sizes="(max-width: 2416px) 100vw, 2416px"
                                    /></span>
                                  </div>
                                </div>
                              </article>
                              <article class="mix portfolio_category_19 portfolio_category_24 default mix_all show" style="display: inline-block; opacity: 1; visibility: visible">
                                <div class="item_holder split_up">
                                  <div class="text_holder">
                                    <div class="text_holder_outer">
                                      <div class="text_holder_inner">
                                        <h5 itemprop="name" class="portfolio_title entry_title">
                                          <a itemprop="url" href="https://www.972creative.com/projects/renalsense/" style="color: #ffffff" target="_self"> RenalSense</a>
                                        </h5>

                                        <div class="portfolio_separator separator small center"></div>

                                        <span class="project_category" style="color: #ffffff"> Medical / Startup </span>
                                      </div>
                                    </div>
                                  </div>

                                  <a itemprop="url" class="portfolio_link_class" href="https://www.972creative.com/projects/renalsense/"></a>

                                  <div style="background-color: rgba(140, 193, 64, 0.85)" class="portfolio_shader"></div>
                                  <div class="image_holder">
                                    <span class="image"
                                      ><img
                                        width="2416"
                                        height="1359"
                                        src="https://www.972creative.com/wp-content/uploads/2017/01/Portfolio-Featured-RenalSense.jpg"
                                        class="attachment-full size-full wp-post-image"
                                        alt=""
                                        srcset="
                                          https://www.972creative.com/wp-content/uploads/2017/01/Portfolio-Featured-RenalSense.jpg          2416w,
                                          https://www.972creative.com/wp-content/uploads/2017/01/Portfolio-Featured-RenalSense-300x169.jpg   300w,
                                          https://www.972creative.com/wp-content/uploads/2017/01/Portfolio-Featured-RenalSense-768x432.jpg   768w,
                                          https://www.972creative.com/wp-content/uploads/2017/01/Portfolio-Featured-RenalSense-1024x576.jpg 1024w,
                                          https://www.972creative.com/wp-content/uploads/2017/01/Portfolio-Featured-RenalSense-700x394.jpg   700w,
                                          https://www.972creative.com/wp-content/uploads/2017/01/Portfolio-Featured-RenalSense-539x303.jpg   539w
                                        "
                                        sizes="(max-width: 2416px) 100vw, 2416px"
                                    /></span>
                                  </div>
                                </div>
                              </article>
                              <article class="mix portfolio_category_19 portfolio_category_24 portfolio_category_20 default mix_all show" style="display: inline-block; opacity: 1; visibility: visible">
                                <div class="item_holder split_up">
                                  <div class="text_holder">
                                    <div class="text_holder_outer">
                                      <div class="text_holder_inner">
                                        <h5 itemprop="name" class="portfolio_title entry_title">
                                          <a itemprop="url" href="https://www.972creative.com/projects/pulmone/" style="color: #ffffff" target="_self"> PulmOne</a>
                                        </h5>

                                        <div class="portfolio_separator separator small center"></div>

                                        <span class="project_category" style="color: #ffffff"> Medical / Startup / WooCommerce </span>
                                      </div>
                                    </div>
                                  </div>

                                  <a itemprop="url" class="portfolio_link_class" href="https://www.972creative.com/projects/pulmone/"></a>

                                  <div style="background-color: rgba(140, 193, 64, 0.85)" class="portfolio_shader"></div>
                                  <div class="image_holder">
                                    <span class="image"
                                      ><img
                                        width="2416"
                                        height="1359"
                                        src="https://www.972creative.com/wp-content/uploads/2017/01/Portfolio-Featured-PulmOne-1.jpg"
                                        class="attachment-full size-full wp-post-image"
                                        alt=""
                                        srcset="
                                          https://www.972creative.com/wp-content/uploads/2017/01/Portfolio-Featured-PulmOne-1.jpg          2416w,
                                          https://www.972creative.com/wp-content/uploads/2017/01/Portfolio-Featured-PulmOne-1-300x169.jpg   300w,
                                          https://www.972creative.com/wp-content/uploads/2017/01/Portfolio-Featured-PulmOne-1-768x432.jpg   768w,
                                          https://www.972creative.com/wp-content/uploads/2017/01/Portfolio-Featured-PulmOne-1-1024x576.jpg 1024w,
                                          https://www.972creative.com/wp-content/uploads/2017/01/Portfolio-Featured-PulmOne-1-700x394.jpg   700w,
                                          https://www.972creative.com/wp-content/uploads/2017/01/Portfolio-Featured-PulmOne-1-539x303.jpg   539w
                                        "
                                        sizes="(max-width: 2416px) 100vw, 2416px"
                                    /></span>
                                  </div>
                                </div>
                              </article>
                              <div class="filler"></div>
                              <div class="filler"></div>
                              <div class="filler"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="vc_row wpb_row section vc_row-fluid grid_section" style="background-color: #f6f6f6; padding-top: 50px; padding-bottom: 100px; text-align: center">
          <div class="section_inner clearfix">
            <div class="section_inner_margin clearfix">
              <div class="wpb_column vc_column_container vc_col-sm-12 vc_col-lg-offset-2 vc_col-lg-8 vc_col-md-offset-1 vc_col-md-10">
                <div class="vc_column-inner vc_custom_1467108142607">
                  <div class="wpb_wrapper"><a itemprop="url" href="work" target="_self" class="qbutton default" style="">View More</a></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="vc_row wpb_row section vc_row-fluid grid_section" style="padding-top: 100px; padding-bottom: 100px; text-align: center">
          <div class="section_inner clearfix">
            <div class="section_inner_margin clearfix">
              <div class="wpb_animate_when_almost_visible wpb_fadeIn fadeIn wpb_column vc_column_container vc_col-sm-12 wpb_start_animation animated">
                <div class="vc_column-inner">
                  <div class="wpb_wrapper">
                    <div class="wpb_text_column wpb_content_element">
                      <div class="wpb_wrapper">
                        <h2 style="text-align: center">Meet our Clients</h2>
                      </div>
                    </div>
                    <div class="separator small center" style="margin-top: 10px; margin-bottom: 25px; height: 2px; width: 10%"></div>
                    <div class="qode_carousels_holder clearfix two_rows">
                      <div class="qode_carousels" data-number-of-visible-items="5">
                        <div class="caroufredsel_wrapper" style="display: block; text-align: center; float: none; position: relative; inset: auto; z-index: auto; width: 950px; margin: 0px; overflow: hidden; cursor: move; height: 218px">
                          <ul class="slides" style="text-align: left; float: none; position: absolute; inset: 0px auto auto 0px; margin: 0px; width: 5510px; opacity: 1; z-index: auto">
                            <li class="item" style="width: 188px">
                              <div class="carousel_item_holder">
                                <span class="first_image_holder"><img itemprop="image" src="https://www.972creative.com/wp-content/uploads/2017/07/clients-eaglescreen-2.png" alt="carousel image" /></span>
                              </div>
                              <div class="carousel_item_holder">
                                <span class="first_image_holder"><img itemprop="image" src="https://www.972creative.com/wp-content/uploads/2017/07/clients-milken.png" alt="carousel image" /></span>
                              </div>
                            </li>
                            <li class="item" style="width: 188px">
                              <div class="carousel_item_holder">
                                <span class="first_image_holder"><img itemprop="image" src="https://www.972creative.com/wp-content/uploads/2017/07/clients-argus-2.png" alt="carousel image" /></span>
                              </div>
                              <div class="carousel_item_holder">
                                <span class="first_image_holder"><img itemprop="image" src="https://www.972creative.com/wp-content/uploads/2017/07/clients-credifi-2.png" alt="carousel image" /></span>
                              </div>
                            </li>
                            <li class="item" style="width: 188px">
                              <div class="carousel_item_holder">
                                <span class="first_image_holder"><img itemprop="image" src="https://www.972creative.com/wp-content/uploads/2017/07/clients-noteya.png" alt="carousel image" /></span>
                              </div>
                              <div class="carousel_item_holder">
                                <span class="first_image_holder"><img itemprop="image" src="https://www.972creative.com/wp-content/uploads/2017/07/clients-timothy-kendal-2.png" alt="carousel image" /></span>
                              </div>
                            </li>
                            <li class="item" style="width: 188px">
                              <div class="carousel_item_holder">
                                <span class="first_image_holder"><img itemprop="image" src="https://www.972creative.com/wp-content/uploads/2017/07/clients-xmpie-2.png" alt="carousel image" /></span>
                              </div>
                              <div class="carousel_item_holder">
                                <span class="first_image_holder"><img itemprop="image" src="https://www.972creative.com/wp-content/uploads/2017/07/clients-geoty-tours-2.png" alt="carousel image" /></span>
                              </div>
                            </li>
                            <li class="item" style="width: 188px">
                              <div class="carousel_item_holder">
                                <span class="first_image_holder"><img itemprop="image" src="https://www.972creative.com/wp-content/uploads/2017/07/clients-ulpan-lainyan-2.png" alt="carousel image" /></span>
                              </div>
                              <div class="carousel_item_holder">
                                <span class="first_image_holder"><img itemprop="image" src="https://www.972creative.com/wp-content/uploads/2017/07/clients-shatil.png" alt="carousel image" /></span>
                              </div>
                            </li>
                            <li class="item" style="width: 188px">
                              <div class="carousel_item_holder">
                                <span class="first_image_holder"><img itemprop="image" src="https://www.972creative.com/wp-content/uploads/2017/07/clients-the-writing-company-2.png" alt="carousel image" /></span>
                              </div>
                              <div class="carousel_item_holder">
                                <span class="first_image_holder"><img itemprop="image" src="https://www.972creative.com/wp-content/uploads/2017/07/clients-milestones-israel.png" alt="carousel image" /></span>
                              </div>
                            </li>
                            <li class="item" style="width: 188px">
                              <div class="carousel_item_holder">
                                <span class="first_image_holder"><img itemprop="image" src="https://www.972creative.com/wp-content/uploads/2017/08/clients-siteaware.png" alt="carousel image" /></span>
                              </div>
                              <div class="carousel_item_holder">
                                <span class="first_image_holder"><img itemprop="image" src="https://www.972creative.com/wp-content/uploads/2017/08/clients-global-cellular.png" alt="carousel image" /></span>
                              </div>
                            </li>
                            <li class="item" style="width: 188px">
                              <div class="carousel_item_holder">
                                <span class="first_image_holder"><img itemprop="image" src="https://www.972creative.com/wp-content/uploads/2017/07/clients-livnot.png" alt="carousel image" /></span>
                              </div>
                              <div class="carousel_item_holder">
                                <span class="first_image_holder"><img itemprop="image" src="https://www.972creative.com/wp-content/uploads/2017/07/clients-yerushalmit-movement-2.png" alt="carousel image" /></span>
                              </div>
                            </li>
                            <li class="item" style="width: 188px">
                              <div class="carousel_item_holder">
                                <span class="first_image_holder"><img itemprop="image" src="https://www.972creative.com/wp-content/uploads/2017/07/clients-renalsense-2.png" alt="carousel image" /></span>
                              </div>
                              <div class="carousel_item_holder">
                                <span class="first_image_holder"><img itemprop="image" src="https://www.972creative.com/wp-content/uploads/2017/07/clients-shawn-landres-2.png" alt="carousel image" /></span>
                              </div>
                            </li>
                            <li class="item" style="width: 188px">
                              <div class="carousel_item_holder">
                                <span class="first_image_holder"><img itemprop="image" src="https://www.972creative.com/wp-content/uploads/2017/07/clients-oasis-2.png" alt="carousel image" /></span>
                              </div>
                              <div class="carousel_item_holder">
                                <span class="first_image_holder"><img itemprop="image" src="https://www.972creative.com/wp-content/uploads/2017/07/clients-apitight-2.png" alt="carousel image" /></span>
                              </div>
                            </li>
                            <li class="item" style="width: 188px">
                              <div class="carousel_item_holder">
                                <span class="first_image_holder"><img itemprop="image" src="https://www.972creative.com/wp-content/uploads/2017/07/clients-pulmone-2-1.png" alt="carousel image" /></span>
                              </div>
                              <div class="carousel_item_holder">
                                <span class="first_image_holder"><img itemprop="image" src="https://www.972creative.com/wp-content/uploads/2017/07/clients-benji-lovitt-2.png" alt="carousel image" /></span>
                              </div>
                            </li>
                            <li class="item" style="width: 188px">
                              <div class="carousel_item_holder">
                                <span class="first_image_holder"><img itemprop="image" src="https://www.972creative.com/wp-content/uploads/2017/07/clients-everest-2.png" alt="carousel image" /></span>
                              </div>
                              <div class="carousel_item_holder">
                                <span class="first_image_holder"><img itemprop="image" src="https://www.972creative.com/wp-content/uploads/2017/07/clients-bacsoft-2-1.png" alt="carousel image" /></span>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="vc_row wpb_row section vc_row-fluid" style="background-color: #f6f6f6; padding-top: 100px; padding-bottom: 100px; text-align: left">
          <div class="full_section_inner clearfix" style="padding: 0% 1%">
            <div class="wpb_column vc_column_container vc_col-sm-12">
              <div class="vc_column-inner">
                <div class="wpb_wrapper">
                  <div class="wpb_text_column wpb_content_element">
                    <div class="wpb_wrapper">
                      <h2 style="text-align: center">Our Clients Love Us</h2>
                    </div>
                  </div>
                  <div class="separator small center" style="margin-top: 10px; margin-bottom: 25px; height: 2px; width: 10%"></div>
                  <div class="vc_row wpb_row section vc_row-fluid vc_inner" style="text-align: center">
                    <div class="full_section_inner clearfix">
                      <div class="wpb_column vc_column_container vc_col-sm-1">
                        <div class="vc_column-inner">
                          <div class="wpb_wrapper"></div>
                        </div>
                      </div>
                      <div class="wpb_column vc_column_container vc_col-sm-10">
                        <div class="vc_column-inner">
                          <div class="wpb_wrapper">
                            <blockquote class="with_quote_icon" style="">
                              <i class="fa fa-quote-right" style="color: #80c53a"></i>
                              <h5 class="blockquote-text" style=""></h5>
                            </blockquote>
                            <div class="testimonials_c_holder clearfix dark">
                              <div class="testimonials_c testimonials_c_carousel" data-show-navigation="yes" data-animation-speed="" data-auto-rotate-slides="10" data-number-per-slide="1">
                                <div class="flex-viewport" style="overflow: hidden; position: relative">
                                  <ul class="slides" style="width: 1200%; margin-left: -824px">
                                    <li id="testimonials-c-16938_clone" class="testimonial_content clone" aria-hidden="true" style="width: 790px; margin-right: 0px; float: left; display: block">
                                      <div class="testimonial_content_inner">
                                        <div class="testimonial_image_holder">
                                          <img src="https://www.972creative.com/wp-content/uploads/2016/09/Testimonial-Jean-Paul-Benhamou-150x150.jpg" draggable="false" />
                                        </div>
                                        <div class="testimonial_text_holder">
                                          <div class="testimonial_text_inner" style="">
                                            <p style="font-size: 21px">
                                              972 creative recently developed our new website, and we were extremely satisfied. Todd was always accommodating and easy to work with, meticulous, and a good communicator. The entire process ran smoothly, everything was delivered on schedule, and we are very happy with the result. Highly recommended.
                                            </p>
                                            <p class="testimonial_author" style="font-weight: 700; font-size: 12px">Jean-Paul Benhamou<br />VP Sales and Marketing<br />RenalSense</p>
                                          </div>
                                        </div>
                                      </div>
                                    </li>
                                    <li id="testimonials-c-16951" class="testimonial_content flex-active-slide" data-thumb-alt="" style="width: 790px; margin-right: 0px; float: left; display: block">
                                      <div class="testimonial_content_inner">
                                        <div class="testimonial_image_holder">
                                          <img src="https://www.972creative.com/wp-content/uploads/2015/09/Testimonial-Michael-Lapides-150x150.jpg" draggable="false" />
                                        </div>
                                        <div class="testimonial_text_holder">
                                          <div class="testimonial_text_inner" style="">
                                            <p style="font-size: 21px">
                                              We reached out to 972 creative with a project to modernize our website and came away with a masterpiece. Todd is a WordPress professional with a great eye for design and a wealth of customization experience. Even with an ambitious deadline, he finished the project early, making the entire experience
                                              enjoyable and stress-free. We now have a conversion-friendly B2B professional site and I highly recommend 972 creative to anyone who needs a WordPress expert.
                                            </p>
                                            <p class="testimonial_author" style="font-weight: 700; font-size: 12px">Michael Lapides<br />Marketing Executive<br />CrediFi</p>
                                          </div>
                                        </div>
                                      </div>
                                    </li>
                                    <li id="testimonials-c-16950" class="testimonial_content" data-thumb-alt="" style="width: 790px; margin-right: 0px; float: left; display: block">
                                      <div class="testimonial_content_inner">
                                        <div class="testimonial_image_holder">
                                          <img src="https://www.972creative.com/wp-content/uploads/2016/07/Testimonial-Shawn-Landres-1-150x150.jpg" draggable="false" />
                                        </div>
                                        <div class="testimonial_text_holder">
                                          <div class="testimonial_text_inner" style="">
                                            <p style="font-size: 21px">
                                              Working with 972 creative continues to pay off long after the website launched. Todd custom-built a robust back-end that has enabled me quickly and easily to make the updates I need to keep the site current. And he remains accessible and available to address any questions as they come up.
                                            </p>
                                            <p class="testimonial_author" style="font-weight: 700; font-size: 12px">Shawn Landres</p>
                                          </div>
                                        </div>
                                      </div>
                                    </li>
                                    <li id="testimonials-c-16939" class="testimonial_content" data-thumb-alt="" style="width: 790px; margin-right: 0px; float: left; display: block">
                                      <div class="testimonial_content_inner">
                                        <div class="testimonial_image_holder">
                                          <img src="https://www.972creative.com/wp-content/uploads/2017/01/Testimonial-Avi-Lazar-150x150.jpg" draggable="false" />
                                        </div>
                                        <div class="testimonial_text_holder">
                                          <div class="testimonial_text_inner" style="">
                                            <p style="font-size: 21px">We hired 972 creative for our new website and Todd did a great job. He is very knowledgeable and found solutions for all our needs and requests, including our online store and customer portal, and guided us to choose the best options. We would definitely work with him again.</p>
                                            <p class="testimonial_author" style="font-weight: 700; font-size: 12px">Avi Lazar<br />CEO<br />PulmOne</p>
                                          </div>
                                        </div>
                                      </div>
                                    </li>
                                    <li id="testimonials-c-16938" class="testimonial_content" data-thumb-alt="" style="width: 790px; margin-right: 0px; float: left; display: block">
                                      <div class="testimonial_content_inner">
                                        <div class="testimonial_image_holder">
                                          <img src="https://www.972creative.com/wp-content/uploads/2016/09/Testimonial-Jean-Paul-Benhamou-150x150.jpg" draggable="false" />
                                        </div>
                                        <div class="testimonial_text_holder">
                                          <div class="testimonial_text_inner" style="">
                                            <p style="font-size: 21px">
                                              972 creative recently developed our new website, and we were extremely satisfied. Todd was always accommodating and easy to work with, meticulous, and a good communicator. The entire process ran smoothly, everything was delivered on schedule, and we are very happy with the result. Highly recommended.
                                            </p>
                                            <p class="testimonial_author" style="font-weight: 700; font-size: 12px">Jean-Paul Benhamou<br />VP Sales and Marketing<br />RenalSense</p>
                                          </div>
                                        </div>
                                      </div>
                                    </li>
                                    <li id="testimonials-c-16951_clone" class="testimonial_content clone" aria-hidden="true" style="width: 790px; margin-right: 0px; float: left; display: block">
                                      <div class="testimonial_content_inner">
                                        <div class="testimonial_image_holder">
                                          <img src="https://www.972creative.com/wp-content/uploads/2015/09/Testimonial-Michael-Lapides-150x150.jpg" draggable="false" />
                                        </div>
                                        <div class="testimonial_text_holder">
                                          <div class="testimonial_text_inner" style="">
                                            <p style="font-size: 21px">
                                              We reached out to 972 creative with a project to modernize our website and came away with a masterpiece. Todd is a WordPress professional with a great eye for design and a wealth of customization experience. Even with an ambitious deadline, he finished the project early, making the entire experience
                                              enjoyable and stress-free. We now have a conversion-friendly B2B professional site and I highly recommend 972 creative to anyone who needs a WordPress expert.
                                            </p>
                                            <p class="testimonial_author" style="font-weight: 700; font-size: 12px">Michael Lapides<br />Marketing Executive<br />CrediFi</p>
                                          </div>
                                        </div>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                                <ol class="flex-control-nav flex-control-paging">
                                  <li><a href="#" class="flex-active">1</a></li>
                                  <li><a href="#">2</a></li>
                                  <li><a href="#">3</a></li>
                                  <li><a href="#">4</a></li>
                                </ol>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="wpb_column vc_column_container vc_col-sm-1">
                        <div class="vc_column-inner">
                          <div class="wpb_wrapper"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="content_bottom">
      <div class="widget widget_text_icl">
        <div class="textwidget">
          <div class="vc_row wpb_row section vc_row-fluid" style="text-align: left">
            <div class="full_section_inner clearfix">
              <div class="wpb_column vc_column_container vc_col-sm-12">
                <div class="vc_column-inner">
                  <div class="wpb_wrapper">
                    <div class="call_to_action simple" style="">
                      <div class="container_inner">
                        <div class="text_wrapper column1">
                          <div class="call_to_action_text" style="">
                            <h2>
                              <span style="color: #ffffff">Ready for <span style="text-shadow: 0px 0px 12.74px rgba(48, 48, 48, 1)">your</span> extraordinary website?</span>
                            </h2>
                          </div>
                          <a itemprop="url" href="/quick-contact/" class="qbutton white large pum-trigger" target="" style="background-color: rgb(48, 48, 48); cursor: pointer" data-hover-background-color="rgba(255,255,255,0)">Let's Talk</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>` },
  { filename: "amazon carousel no role", content: `<link rel="stylesheet" href="../assets/amazon/114aqksR8ML._RC_01ZTHTZObnL.css,51HKuoT0uoL.css,31YWy-MCUtL.css,110sHTq30-L.css,01qDClimA1L.css,01pOTCa2wPL.css,41o-WhG5CBL.css,11RZUC4PXkL.css,01gkb7U1dSL.css,110chLTQxpL.css,010+HAxVU6L.css,01L-64jduML.css,014QJx7nWqL.css,21zhsp4bfZL.css,01u0BGXGQsL.css" />
<link rel="stylesheet" href="../assets/amazon/41VAhLVyESL._RC_71mHZZ71ElL.css,51shTLj5k1L.css,21smgiAUuUL.css,01FcI3FsaiL.css,21qgXjgc2rL.css,3138zRsJyFL.css,2175gv0crxL.css,419+zHfURDL.css,11yq21oaguL.css,31vfzIZi8IL.css,01w1OmfEMzL.css,21KQnzhmfTL.css,412rFfWkapL.css_.css" />
<link rel="stylesheet" href="../assets/amazon/71bJhjK-p4L.css" />
<link rel="stylesheet" href="../assets/amazon/21nO8CcU0iL.css" />

<div class="a-column a-span12 aok-float-right apb-browse-col-pad-left apb-browse-two-col-center-margin-right a-span-last">
  <div class="apb-default-slot apb-default-merchandised-search-4">
    <div
      class="celwidget pf_rd_p-f97d5a81-6249-42a4-bbde-c5d803739fc6 pf_rd_r-YN8249HYJ1MVXNZ1CQDS c-f"
      cel_widget_id="carousel_apb-browse_1"
      data-csa-op-log-render=""
      data-csa-c-content-id="amzn1.sym.f97d5a81-6249-42a4-bbde-c5d803739fc6"
      data-csa-c-slot-id="DsUnknown-2"
      data-csa-c-type="widget"
      data-csa-c-painter="carousel-cards"
      data-csa-c-id="j1ii1q-qbi83s-f4f8ex-sigx7i"
      data-cel-widget="carousel_apb-browse_1"
      style="max-height: 500px"
    >
      <script>
        if (window.mix_csa) {
          window.mix_csa('[cel_widget_id="carousel_apb-browse_1"]', "#CardInstancePGQT8Pxru2r9IsNWFoQs8Q")("mark", "bb");
        }
      </script>
      <script>
        if (window.uet) {
          window.uet("bb", "carousel_apb-browse_1", { wb: 1 });
        }
      </script>
      <style>
          ._carousel_energy-efficiency_energy-efficiency-container__1Pkva {
              position: relative;
              text-align: left;
          }
          ._carousel_energy-efficiency_energy-efficiency-badge-standard__28gp8 {
              cursor: pointer;
              display: inline-block;
              height: 24px;
          }
          ._carousel_energy-efficiency_energy-efficiency-badge-shape__1IcJY {
              display: inline-block;
              height: 24px;
          }
          ._carousel_energy-efficiency_energy-efficiency-badge-rating__3_0eN {
              fill: #fff;
              font-size: 20px;
              vertical-align: middle;
          }
          ._carousel_energy-efficiency_energy-efficiency-badge-rating-sign__1ronK {
              fill: #fff;
              font-size: 14px;
              vertical-align: middle;
          }
          ._carousel_energy-efficiency_energy-efficiency-badge-rating-2021__2Q_3P {
              left: 24px * 0.6;
              text-shadow: -0.5px -0.5px 0 #000, 0.5px -0.5px 0 #000, -0.5px 0.5px 0 #000, 0.5px 0.5px 0 #000;
          }
          ._carousel_energy-efficiency_energy-efficiency-badge-data-sheet-label-container__2iEi2 {
              display: inline-block;
              padding-left: 5px;
              padding-top: 0;
              position: absolute;
              vertical-align: middle;
          }
          ._carousel_energy-efficiency_energy-efficiency-badge-data-sheet-label__3b6X3 {
              cursor: pointer;
              word-break: break-word;
          }

          ._carousel_style_product-image-with-badge__2Vipe,
          ._carousel_style_product-image__3GTWS {
              height: 196px;
              position: relative;
          }
          ._carousel_style_product-image-with-badge__2Vipe a,
          ._carousel_style_product-image__3GTWS a {
              display: block;
              text-align: center;
          }
          ._carousel_style_product-image__3GTWS img {
              bottom: 0;
              left: 0;
              margin: auto;
              max-height: 196px;
              position: absolute;
              right: 0;
              top: 0;
          }
          ._carousel_style_product-image-with-badge__2Vipe img {
              max-height: 172px;
          }
          ._carousel_style_grey-gradient-background__2mdc9 {
              background: -webkit-linear-gradient(254.25deg, #e2e2e2, #fff 52.74%, #e2e2e2);
              background: linear-gradient(195.75deg, #e2e2e2, #fff 52.74%, #e2e2e2);
          }
          ._carousel_style_grey-gradient-background__2mdc9 img {
              mix-blend-mode: multiply;
          }
          ._carousel_style_more-like-this-icon-button__yfqfx {
              background: #fff;
              border-radius: 50%;
              bottom: 0;
              height: 34px;
              left: 0;
              margin: 0 0 8px 8px;
              position: absolute;
              width: 34px;
          }
          ._carousel_style_more-like-this-icon-image__1N5v6 {
              height: 32px;
              margin: 6px;
              width: 32px;
          }
          ._carousel_style_acsProductBlockV1__wHQrt ._carousel_style_contributor__3ItyK {
              color: #555;
              text-decoration: none;
          }
          ._carousel_style_acsProductBlockV2__Ci47t ._carousel_style_contributor__3ItyK {
              color: #000;
              text-decoration: none;
          }
          ._carousel_style_binding-value__2d_fB {
              color: #555;
              font-size: 11px;
              line-height: 1.25;
              text-decoration: none;
          }
          ._carousel_style_empty-space__3wzzr {
              display: block;
              margin-top: 5px;
          }
          ._carousel_style_price-buying-override__1tJY7 {
              font-weight: 700;
          }
          ._carousel_style_price-label-strikethrough__2XkYp,
          ._carousel_style_price-strikethrough__1utX6 {
              color: #565959;
          }
          ._carousel_style_price-buying__dYIzO {
              margin-top: 5px;
          }
          ._carousel_style_price-strikethrough__1utX6 {
              display: inline-block;
          }
          ._carousel_style_points-label-strikethrough__3ok19,
          ._carousel_style_points-strikethrough__3Xh8c {
              color: #565959;
          }
          ._carousel_style_points-strikethrough__3Xh8c {
              display: inline-block;
          }
          ._carousel_style_carousel-container__2Iapb {
              margin-top: 20px;
          }
          ._carousel_style_acs-product-block-v1-layout__eY7eI:empty {
              border: 0;
          }
          ._carousel_style_acs-product-block-v1-layout__eY7eI:last-child {
              margin-right: 8px;
          }
          ._carousel_style_carousel-element-support__3lVml {
              padding: 5px;
          }
          ._carousel_style_carousel-element-support__3lVml a {
              display: block;
          }
      </style>
      <!--CardsClient-->
      <div class="acsWidgetCarouselV1__carousel-container _carousel_style_carousel-container__2Iapb" id="CardInstancePGQT8Pxru2r9IsNWFoQs8Q" data-card-metrics-id="carousel_apb-browse_1" data-acp-tracking='{"pf_rd_p":"f97d5a81-6249-42a4-bbde-c5d803739fc6","pf_rd_r":"YN8249HYJ1MVXNZ1CQDS"}' data-mix-claimed="true">
        <div class="a-cardui-deck" data-a-remove-top-gutter="true" data-a-remove-bottom-gutter="true" name="a-cardui-deck-autoname-0">
          <div class="a-teaser-describedby-collapsed a-hidden" id="a-cardui-deck-autoname-0-teaser-describedby-collapsed">Brief content visible, double tap to read full content.</div>
          <div class="a-teaser-describedby-expanded a-hidden" id="a-cardui-deck-autoname-0-teaser-describedby-expanded">Full content visible, double tap to read brief content.</div>
          <div class="a-cardui" data-a-card-type="basic" name="a-cardui-deck-autoname-0-card0">
            <div class="a-cardui-body">
              <h2 class="a-spacing-mini"><span class="acsWidgetCarouselV1__title">ספרי מסחר רבי מכר בכריכה רכה</span></h2>
            </div>
            <hr aria-hidden="true" class="a-spacing-base a-spacing-top-mini a-divider-normal acsWidgetCarouselV1__divider" />
          </div>
        </div>
        <div
          id="carousel"
          data-a-carousel-options='{"first_item_flush_left":true,"set_size":10,"show_partial_next":false,"single_page_align":"stretch","hide_off_screen":false,"maintain_state":false,"minimum_gutter_width":15,"name":"carousel"}'
          data-asinlist="038549081X,1538732181,1635575567,1538774194,1638932239,1250080401,1728296226,1464221138,B09CGGV8DX,1635575583"
          data-requestproperties='{"marketplace":{"id":1,"region":"NA","orgUnitId":1,"encryptedId":"ATVPDKIKX0DER","url":"https://www.amazon.com","gatewayBrowseNodeId":507846,"code":"US","merchantId":["ATVPDKIKX0DER","A17MT8ELPNNVD3","A1OHOT6VONX3KA"]},"deviceType":"desktop","isMshopApp":false,"tracking":{"pf_rd_m":"ATVPDKIKX0DER","pf_rd_s":"merchandised-search-4","pf_rd_r":"YN8249HYJ1MVXNZ1CQDS","pf_rd_p":"f97d5a81-6249-42a4-bbde-c5d803739fc6","pf_rd_t":"","pf_rd_i":"549028"},"refArgument":{"refTagBase":"s9_acsd_al_ot_","refTagPrefix":"c2_x","refTagPostfix":""},"suppressConfig":{"suppressBinding":false,"suppressContributors":false,"suppressReviewStars":false,"suppressBasisPrice":false,"restrictToAmazonMerchant":true,"suppressAvailabilityCheck":false}}'
          data-a-display-strategy="swap"
          data-a-transition-strategy="swap"
          data-a-ajax-strategy="promise"
          role="group"
          class="a-begin a-carousel-container a-carousel-display-swap a-carousel-transition-swap a-spacing-top-small min-items--3 carousel-v1 a-carousel-initialized"
        >
          <input type="hidden" autocomplete="on" class="a-carousel-firstvisibleitem" />
          <div class="a-row a-carousel-controls a-carousel-row a-carousel-has-buttons">
            <div id="test-subject" class="a-carousel-row-inner">
              <div class="a-carousel-col a-carousel-left" style="height: 397px; visibility: visible">
                <a
                  class="a-button a-button-image a-carousel-button a-carousel-goto-prevpage"
                  role="button"
                  href="https://www.amazon.com/-/he/Books/b/?_encoding=UTF8&amp;ref=bsm_nav_pill_nyt%2Fie%3DUTF8&amp;node=549028&amp;ref_=cct_cg_bsmpill_1d1&amp;pf_rd_p=fc5805e8-45ff-478e-b466-c5def105947b&amp;pf_rd_r=2A4P6E1NXTV4GYR0ESFF#"
                  id="a-autoid-0"
                  style="top: 158.797px"
                ><span class="a-button-inner"
                ><i class="a-icon a-icon-previous"><span class="a-icon-alt">Previous page</span></i></span
                ></a
                >
              </div>
              <div class="a-carousel-col a-carousel-center">
                <div class="a-carousel-viewport" role="group" aria-roledescription="" id="anonCarousel1" style="height: 397px">
                  <ol class="a-carousel">
                    <li class="a-carousel-card _carousel_style_carousel-element-support__3lVml" style="max-width: 230px; margin-right: 32px" aria-setsize="10" aria-posinset="1" aria-hidden="false">
                      <div id="acsProductBlockV1-0" data-asin="038549081X" data-default-order="0" class="a-section acsProductBlockV1 acsProductBlockV1--default">
                        <a
                          class="a-color-base a-spacing-none a-link-normal"
                          href="https://www.amazon.com/-/he/Handmaids-Tale-%D7%A1%D7%A4%D7%A8-%D7%91%D7%90%D7%A0%D7%92%D7%9C%D7%99%D7%AA/dp/038549081X/ref=s9_acsd_al_ot_c2_x_0_t?_encoding=UTF8&amp;pf_rd_m=ATVPDKIKX0DER&amp;pf_rd_s=merchandised-search-4&amp;pf_rd_r=YN8249HYJ1MVXNZ1CQDS&amp;pf_rd_p=f97d5a81-6249-42a4-bbde-c5d803739fc6&amp;pf_rd_t=&amp;pf_rd_i=549028"
                        ><div class="a-section a-spacing-base a-spacing-top-micro _carousel_style_product-image__3GTWS acsProductBlockV1__product_image">
                          <img alt="The Handmaid's Tale (ספר באנגלית):" src="https://m.media-amazon.com/images/I/61su39k8NUL.AC_SX500.jpg" data-a-hires="https://m.media-amazon.com/images/I/61su39k8NUL.AC_SX500.jpg" />
                        </div>
                          <div class="a-section a-spacing-micro acsProductBlockV1__product-title">
                            <span class="a-truncate a-size-base" data-a-word-break="break-word" data-a-max-rows="2" data-a-overflow-marker="&amp;hellip;" style="line-height: 1.3em !important; max-height: 2.6em" data-a-recalculate="false" data-a-updated="true"
                            ><span class="a-truncate-full a-offscreen">The Handmaid's Tale (ספר באנגלית):</span><span class="a-truncate-cut" aria-hidden="true" style="height: auto">The Handmaid's Tale (ספר באנגלית):</span></span
                            >
                          </div>
                          <div class="a-section a-spacing-micro _carousel_style_acsProductBlockV1__wHQrt acsProductBlockV1__contributor" dir="ltr">
                            <span class="a-truncate _carousel_style_contributor__3ItyK acsProductBlockV1__contributor-value a-size-base" data-a-word-break="normal" data-a-max-rows="2" data-a-overflow-marker="&amp;hellip;" style="line-height: 1.3em !important; max-height: 2.6em" data-a-recalculate="false" data-a-updated="true"
                            ><span class="a-truncate-full a-offscreen">Margaret Atwood</span><span class="a-truncate-cut" aria-hidden="true" style="height: auto">Margaret Atwood</span></span
                            >
                          </div></a
                        >
                        <div class="a-section a-spacing-micro acsProductBlockV1__binding"><span class="_carousel_style_binding-value__2d_fB acsProductBlockV1__binding-value" dir="ltr">Paperback</span></div>
                        <div class="a-section a-spacing-micro acsProductBlockV1__price" dir="ltr">
                          <span class="a-price acsProductBlockV1__price--buying _carousel_style_price-buying__dYIzO" data-a-size="l" data-a-color="base"
                          ><span class="a-offscreen"><span dir="rtl">\$</span>‎8.95‎</span
                          ><span aria-hidden="true" dir="ltr"
                          ><span class="a-price-symbol" dir="rtl">\$</span>‎<span class="a-price-whole">8<span class="a-price-decimal" dir="ltr">.</span>‎</span><span class="a-price-fraction">95</span></span
                          ></span
                          >‏
                          <span class="a-price a-text-price acsProductBlockV1__price--strikethrough _carousel_style_price-strikethrough__1utX6" data-a-size="s" data-a-strike="true"
                          ><span class="a-offscreen"><span dir="rtl">\$</span>‎18.00‎</span><span aria-hidden="true" dir="ltr"><span dir="rtl">\$</span>‎18.00‎</span></span
                          >‏
                        </div>
                        <div class="a-section a-spacing-micro acsProductBlockV1__review" dir="ltr"><i class="a-icon a-icon-star-medium a-star-medium-4-5"></i><span class="a-color-secondary acsProductBlockV1__rating__review-count"> 162,803</span></div>
                      </div>
                    </li>
                    <li class="a-carousel-card _carousel_style_carousel-element-support__3lVml" style="max-width: 230px; margin-right: 32px" aria-setsize="10" aria-posinset="2" aria-hidden="false">
                      <div id="acsProductBlockV1-1" data-asin="1538732181" data-default-order="1" class="a-section acsProductBlockV1 acsProductBlockV1--default">
                        <a
                          class="a-color-base a-spacing-none a-link-normal"
                          href="https://www.amazon.com/-/he/Parable-Sower-1/dp/1538732181/ref=s9_acsd_al_ot_c2_x_1_t?_encoding=UTF8&amp;pf_rd_m=ATVPDKIKX0DER&amp;pf_rd_s=merchandised-search-4&amp;pf_rd_r=YN8249HYJ1MVXNZ1CQDS&amp;pf_rd_p=f97d5a81-6249-42a4-bbde-c5d803739fc6&amp;pf_rd_t=&amp;pf_rd_i=549028"
                        ><div class="a-section a-spacing-base a-spacing-top-micro _carousel_style_product-image__3GTWS acsProductBlockV1__product_image">
                          <img alt="The Parable of the Sower (Parable, 1)" src="https://m.media-amazon.com/images/I/71ZLgz1U1lL.AC_SX500.jpg" data-a-hires="https://m.media-amazon.com/images/I/71ZLgz1U1lL.AC_SX500.jpg" />
                        </div>
                          <div class="a-section a-spacing-micro acsProductBlockV1__product-title">
                            <span class="a-truncate a-size-base" data-a-word-break="break-word" data-a-max-rows="2" data-a-overflow-marker="&amp;hellip;" style="line-height: 1.3em !important; max-height: 2.6em" data-a-recalculate="false" data-a-updated="true"
                            ><span class="a-truncate-full a-offscreen">The Parable of the Sower (Parable, 1)</span><span class="a-truncate-cut" aria-hidden="true" style="height: auto">The Parable of the Sower (Parable, 1)</span></span
                            >
                          </div>
                          <div class="a-section a-spacing-micro _carousel_style_acsProductBlockV1__wHQrt acsProductBlockV1__contributor" dir="ltr">
                            <span class="a-truncate _carousel_style_contributor__3ItyK acsProductBlockV1__contributor-value a-size-base" data-a-word-break="normal" data-a-max-rows="2" data-a-overflow-marker="&amp;hellip;" style="line-height: 1.3em !important; max-height: 2.6em" data-a-recalculate="false" data-a-updated="true"
                            ><span class="a-truncate-full a-offscreen">Octavia E. Butler</span><span class="a-truncate-cut" aria-hidden="true" style="height: auto">Octavia E. Butler</span></span
                            >
                          </div></a
                        >
                        <div class="a-section a-spacing-micro acsProductBlockV1__binding"><span class="_carousel_style_binding-value__2d_fB acsProductBlockV1__binding-value" dir="ltr">Paperback</span></div>
                        <div class="a-section a-spacing-micro acsProductBlockV1__price" dir="ltr">
                          <span class="a-price acsProductBlockV1__price--buying _carousel_style_price-buying__dYIzO" data-a-size="l" data-a-color="base"
                          ><span class="a-offscreen"><span dir="rtl">\$</span>‎12.57‎</span
                          ><span aria-hidden="true" dir="ltr"
                          ><span class="a-price-symbol" dir="rtl">\$</span>‎<span class="a-price-whole">12<span class="a-price-decimal" dir="ltr">.</span>‎</span><span class="a-price-fraction">57</span></span
                          ></span
                          >‏
                          <span class="a-price a-text-price acsProductBlockV1__price--strikethrough _carousel_style_price-strikethrough__1utX6" data-a-size="s" data-a-strike="true"
                          ><span class="a-offscreen"><span dir="rtl">\$</span>‎19.99‎</span><span aria-hidden="true" dir="ltr"><span dir="rtl">\$</span>‎19.99‎</span></span
                          >‏
                        </div>
                        <div class="a-section a-spacing-micro acsProductBlockV1__review" dir="ltr"><i class="a-icon a-icon-star-medium a-star-medium-4-5"></i><span class="a-color-secondary acsProductBlockV1__rating__review-count"> 16,212</span></div>
                      </div>
                    </li>
                    <li class="a-carousel-card _carousel_style_carousel-element-support__3lVml" style="max-width: 230px; margin-right: 32px" aria-setsize="10" aria-posinset="3" aria-hidden="false">
                      <div id="acsProductBlockV1-2" data-asin="1635575567" data-default-order="2" class="a-section acsProductBlockV1 acsProductBlockV1--default">
                        <a
                          class="a-color-base a-spacing-none a-link-normal"
                          href="https://www.amazon.com/-/he/Court-Thorns-Roses/dp/1635575567/ref=s9_acsd_al_ot_c2_x_2_t?_encoding=UTF8&amp;pf_rd_m=ATVPDKIKX0DER&amp;pf_rd_s=merchandised-search-4&amp;pf_rd_r=YN8249HYJ1MVXNZ1CQDS&amp;pf_rd_p=f97d5a81-6249-42a4-bbde-c5d803739fc6&amp;pf_rd_t=&amp;pf_rd_i=549028"
                        ><div class="a-section a-spacing-base a-spacing-top-micro _carousel_style_product-image__3GTWS acsProductBlockV1__product_image">
                          <img alt="A Court of Thorns and Roses (A Court of Thorns and Roses, 1)" src="https://m.media-amazon.com/images/I/81RrEEMiOCL.AC_SX500.jpg" data-a-hires="https://m.media-amazon.com/images/I/81RrEEMiOCL.AC_SX500.jpg" />
                        </div>
                          <div class="a-section a-spacing-micro acsProductBlockV1__product-title">
                            <span class="a-truncate a-size-base" data-a-word-break="break-word" data-a-max-rows="2" data-a-overflow-marker="&amp;hellip;" style="line-height: 1.3em !important; max-height: 2.6em" data-a-recalculate="false" data-a-updated="true"
                            ><span class="a-truncate-full a-offscreen">A Court of Thorns and Roses (A Court of Thorns and Roses, 1)</span><span class="a-truncate-cut" aria-hidden="true" style="height: 2.6em">A Court of Thorns and Roses (A Court of Th…</span></span
                            >
                          </div>
                          <div class="a-section a-spacing-micro _carousel_style_acsProductBlockV1__wHQrt acsProductBlockV1__contributor" dir="ltr">
                            <span class="a-truncate _carousel_style_contributor__3ItyK acsProductBlockV1__contributor-value a-size-base" data-a-word-break="normal" data-a-max-rows="2" data-a-overflow-marker="&amp;hellip;" style="line-height: 1.3em !important; max-height: 2.6em" data-a-recalculate="false" data-a-updated="true"
                            ><span class="a-truncate-full a-offscreen">Sarah J. Maas</span><span class="a-truncate-cut" aria-hidden="true" style="height: auto">Sarah J. Maas</span></span
                            >
                          </div></a
                        >
                        <div class="a-section a-spacing-micro acsProductBlockV1__binding"><span class="_carousel_style_binding-value__2d_fB acsProductBlockV1__binding-value" dir="ltr">Paperback</span></div>
                        <div class="a-section a-spacing-micro acsProductBlockV1__price" dir="ltr">
                          <span class="a-price acsProductBlockV1__price--buying _carousel_style_price-buying__dYIzO" data-a-size="l" data-a-color="base"
                          ><span class="a-offscreen"><span dir="rtl">\$</span>‎10.05‎</span
                          ><span aria-hidden="true" dir="ltr"
                          ><span class="a-price-symbol" dir="rtl">\$</span>‎<span class="a-price-whole">10<span class="a-price-decimal" dir="ltr">.</span>‎</span><span class="a-price-fraction">05</span></span
                          ></span
                          >‏
                          <span class="a-price a-text-price acsProductBlockV1__price--strikethrough _carousel_style_price-strikethrough__1utX6" data-a-size="s" data-a-strike="true"
                          ><span class="a-offscreen"><span dir="rtl">\$</span>‎19.00‎</span><span aria-hidden="true" dir="ltr"><span dir="rtl">\$</span>‎19.00‎</span></span
                          >‏
                        </div>
                        <div class="a-section a-spacing-micro acsProductBlockV1__review" dir="ltr"><i class="a-icon a-icon-star-medium a-star-medium-4-5"></i><span class="a-color-secondary acsProductBlockV1__rating__review-count"> 263,566</span></div>
                      </div>
                    </li>
                    <li class="a-carousel-card" aria-setsize="10" aria-posinset="4" style="width: 160px; margin-left: 32px; margin-right: 32px">
                      <div id="acsProductBlockV1-3" data-asin="1538774194" data-default-order="3" class="a-section acsProductBlockV1 acsProductBlockV1--default">
                        <a
                          class="a-color-base a-spacing-none a-link-normal"
                          href="https://www.amazon.com/-/he/Quicksilver-Callie-Hart/dp/1538774194/ref=s9_acsd_al_ot_c2_x_3_t?_encoding=UTF8&amp;pf_rd_m=ATVPDKIKX0DER&amp;pf_rd_s=merchandised-search-4&amp;pf_rd_r=YN8249HYJ1MVXNZ1CQDS&amp;pf_rd_p=f97d5a81-6249-42a4-bbde-c5d803739fc6&amp;pf_rd_t=&amp;pf_rd_i=549028"
                        ><div class="a-section a-spacing-base a-spacing-top-micro _carousel_style_product-image__3GTWS acsProductBlockV1__product_image"><img alt="Quicksilver" src="https://m.media-amazon.com/images/I/81qAKMuO0qL.AC_SX500.jpg" data-a-hires="https://m.media-amazon.com/images/I/81qAKMuO0qL.AC_SX500.jpg" /></div>
                          <div class="a-section a-spacing-micro acsProductBlockV1__product-title">
                            <span class="a-truncate a-size-base" data-a-word-break="break-word" data-a-max-rows="2" data-a-overflow-marker="&amp;hellip;" style="line-height: 1.3em !important; max-height: 2.6em" data-a-recalculate="false" data-a-updated="true"
                            ><span class="a-truncate-full a-offscreen">Quicksilver</span><span class="a-truncate-cut" aria-hidden="true" style="height: auto">Quicksilver</span></span
                            >
                          </div>
                          <div class="a-section a-spacing-micro _carousel_style_acsProductBlockV1__wHQrt acsProductBlockV1__contributor" dir="ltr">
                            <span class="a-truncate _carousel_style_contributor__3ItyK acsProductBlockV1__contributor-value a-size-base" data-a-word-break="normal" data-a-max-rows="2" data-a-overflow-marker="&amp;hellip;" style="line-height: 1.3em !important; max-height: 2.6em" data-a-recalculate="false" data-a-updated="true"
                            ><span class="a-truncate-full a-offscreen">Callie Hart</span><span class="a-truncate-cut" aria-hidden="true" style="height: auto">Callie Hart</span></span
                            >
                          </div></a
                        >
                        <div class="a-section a-spacing-micro acsProductBlockV1__binding"><span class="_carousel_style_binding-value__2d_fB acsProductBlockV1__binding-value" dir="ltr">Paperback</span></div>
                        <div class="a-section a-spacing-micro acsProductBlockV1__price" dir="ltr">
                          <span class="a-price acsProductBlockV1__price--buying _carousel_style_price-buying__dYIzO" data-a-size="l" data-a-color="base"
                          ><span class="a-offscreen"><span dir="rtl">\$</span>‎15.61‎</span
                          ><span aria-hidden="true" dir="ltr"
                          ><span class="a-price-symbol" dir="rtl">\$</span>‎<span class="a-price-whole">15<span class="a-price-decimal" dir="ltr">.</span>‎</span><span class="a-price-fraction">61</span></span
                          ></span
                          >‏
                          <span class="a-price a-text-price acsProductBlockV1__price--strikethrough _carousel_style_price-strikethrough__1utX6" data-a-size="s" data-a-strike="true"
                          ><span class="a-offscreen"><span dir="rtl">\$</span>‎21.99‎</span><span aria-hidden="true" dir="ltr"><span dir="rtl">\$</span>‎21.99‎</span></span
                          >‏
                        </div>
                        <div class="a-section a-spacing-micro acsProductBlockV1__review" dir="ltr"><i class="a-icon a-icon-star-medium a-star-medium-4-5"></i><span class="a-color-secondary acsProductBlockV1__rating__review-count"> 98,869</span></div>
                      </div>
                    </li>
                    <li class="a-carousel-card" aria-setsize="10" aria-posinset="5" style="width: 160px; margin-left: 32px; margin-right: 32px">
                      <div id="acsProductBlockV1-4" data-asin="1638932239" data-default-order="4" class="a-section acsProductBlockV1 acsProductBlockV1--default">
                        <a
                          class="a-color-base a-spacing-none a-link-normal"
                          href="https://www.amazon.com/-/he/Lights-Out-Into-Darkness-Novel/dp/1638932239/ref=s9_acsd_al_ot_c2_x_4_t?_encoding=UTF8&amp;pf_rd_m=ATVPDKIKX0DER&amp;pf_rd_s=merchandised-search-4&amp;pf_rd_r=YN8249HYJ1MVXNZ1CQDS&amp;pf_rd_p=f97d5a81-6249-42a4-bbde-c5d803739fc6&amp;pf_rd_t=&amp;pf_rd_i=549028"
                        ><div class="a-section a-spacing-base a-spacing-top-micro _carousel_style_product-image__3GTWS acsProductBlockV1__product_image">
                          <img alt="Lights Out: An Into Darkness Novel (Into Darkness Series)" src="https://m.media-amazon.com/images/I/81GnIlm7XlL.AC_SX500.jpg" data-a-hires="https://m.media-amazon.com/images/I/81GnIlm7XlL.AC_SX500.jpg" />
                        </div>
                          <div class="a-section a-spacing-micro acsProductBlockV1__product-title">
                            <span class="a-truncate a-size-base" data-a-word-break="break-word" data-a-max-rows="2" data-a-overflow-marker="&amp;hellip;" style="line-height: 1.3em !important; max-height: 2.6em" data-a-recalculate="false" data-a-updated="true"
                            ><span class="a-truncate-full a-offscreen">Lights Out: An Into Darkness Novel (Into Darkness Series)</span><span class="a-truncate-cut" aria-hidden="true" style="height: 2.6em">Lights Out: An Into Darkness Novel (Into D…</span></span
                            >
                          </div>
                          <div class="a-section a-spacing-micro _carousel_style_acsProductBlockV1__wHQrt acsProductBlockV1__contributor" dir="ltr">
                            <span class="a-truncate _carousel_style_contributor__3ItyK acsProductBlockV1__contributor-value a-size-base" data-a-word-break="normal" data-a-max-rows="2" data-a-overflow-marker="&amp;hellip;" style="line-height: 1.3em !important; max-height: 2.6em" data-a-recalculate="false" data-a-updated="true"
                            ><span class="a-truncate-full a-offscreen">Navessa Allen</span><span class="a-truncate-cut" aria-hidden="true" style="height: auto">Navessa Allen</span></span
                            >
                          </div></a
                        >
                        <div class="a-section a-spacing-micro acsProductBlockV1__binding"><span class="_carousel_style_binding-value__2d_fB acsProductBlockV1__binding-value" dir="ltr">Paperback</span></div>
                        <div class="a-section a-spacing-micro acsProductBlockV1__price" dir="ltr">
                          <span class="a-price acsProductBlockV1__price--buying _carousel_style_price-buying__dYIzO" data-a-size="l" data-a-color="base"
                          ><span class="a-offscreen"><span dir="rtl">\$</span>‎13.90‎</span
                          ><span aria-hidden="true" dir="ltr"
                          ><span class="a-price-symbol" dir="rtl">\$</span>‎<span class="a-price-whole">13<span class="a-price-decimal" dir="ltr">.</span>‎</span><span class="a-price-fraction">90</span></span
                          ></span
                          >‏
                          <span class="a-price a-text-price acsProductBlockV1__price--strikethrough _carousel_style_price-strikethrough__1utX6" data-a-size="s" data-a-strike="true"
                          ><span class="a-offscreen"><span dir="rtl">\$</span>‎19.00‎</span><span aria-hidden="true" dir="ltr"><span dir="rtl">\$</span>‎19.00‎</span></span
                          >‏
                        </div>
                        <div class="a-section a-spacing-micro acsProductBlockV1__review" dir="ltr"><i class="a-icon a-icon-star-medium a-star-medium-4-5"></i><span class="a-color-secondary acsProductBlockV1__rating__review-count"> 34,759</span></div>
                      </div>
                    </li>
                    <li class="a-carousel-card" aria-setsize="10" aria-posinset="6" style="width: 160px; margin-left: 32px; margin-right: 32px">
                      <div id="acsProductBlockV1-5" data-asin="1250080401" data-default-order="5" class="a-section acsProductBlockV1 acsProductBlockV1--default">
                        <a
                          class="a-color-base a-spacing-none a-link-normal"
                          href="https://www.amazon.com/-/he/Nightingale-Novel-Kristin-Hannah/dp/1250080401/ref=s9_acsd_al_ot_c2_x_5_t?_encoding=UTF8&amp;pf_rd_m=ATVPDKIKX0DER&amp;pf_rd_s=merchandised-search-4&amp;pf_rd_r=YN8249HYJ1MVXNZ1CQDS&amp;pf_rd_p=f97d5a81-6249-42a4-bbde-c5d803739fc6&amp;pf_rd_t=&amp;pf_rd_i=549028"
                        ><div class="a-section a-spacing-base a-spacing-top-micro _carousel_style_product-image__3GTWS acsProductBlockV1__product_image"><img alt="The Nightingale: A Novel" src="https://m.media-amazon.com/images/I/81OkWjcf4WL.AC_SX500.jpg" data-a-hires="https://m.media-amazon.com/images/I/81OkWjcf4WL.AC_SX500.jpg" /></div>
                          <div class="a-section a-spacing-micro acsProductBlockV1__product-title">
                            <span class="a-truncate a-size-base" data-a-word-break="break-word" data-a-max-rows="2" data-a-overflow-marker="&amp;hellip;" style="line-height: 1.3em !important; max-height: 2.6em" data-a-recalculate="false" data-a-updated="true"
                            ><span class="a-truncate-full a-offscreen">The Nightingale: A Novel</span><span class="a-truncate-cut" aria-hidden="true" style="height: auto">The Nightingale: A Novel</span></span
                            >
                          </div>
                          <div class="a-section a-spacing-micro _carousel_style_acsProductBlockV1__wHQrt acsProductBlockV1__contributor" dir="ltr">
                            <span class="a-truncate _carousel_style_contributor__3ItyK acsProductBlockV1__contributor-value a-size-base" data-a-word-break="normal" data-a-max-rows="2" data-a-overflow-marker="&amp;hellip;" style="line-height: 1.3em !important; max-height: 2.6em" data-a-recalculate="false" data-a-updated="true"
                            ><span class="a-truncate-full a-offscreen">Kristin Hannah</span><span class="a-truncate-cut" aria-hidden="true" style="height: auto">Kristin Hannah</span></span
                            >
                          </div></a
                        >
                        <div class="a-section a-spacing-micro acsProductBlockV1__binding"><span class="_carousel_style_binding-value__2d_fB acsProductBlockV1__binding-value" dir="ltr">Paperback</span></div>
                        <div class="a-section a-spacing-micro acsProductBlockV1__price" dir="ltr">
                          <span class="a-price acsProductBlockV1__price--buying _carousel_style_price-buying__dYIzO" data-a-size="l" data-a-color="base"
                          ><span class="a-offscreen"><span dir="rtl">\$</span>‎9.08‎</span
                          ><span aria-hidden="true" dir="ltr"
                          ><span class="a-price-symbol" dir="rtl">\$</span>‎<span class="a-price-whole">9<span class="a-price-decimal" dir="ltr">.</span>‎</span><span class="a-price-fraction">08</span></span
                          ></span
                          >‏
                          <span class="a-price a-text-price acsProductBlockV1__price--strikethrough _carousel_style_price-strikethrough__1utX6" data-a-size="s" data-a-strike="true"
                          ><span class="a-offscreen"><span dir="rtl">\$</span>‎17.99‎</span><span aria-hidden="true" dir="ltr"><span dir="rtl">\$</span>‎17.99‎</span></span
                          >‏
                        </div>
                        <div class="a-section a-spacing-micro acsProductBlockV1__review" dir="ltr"><i class="a-icon a-icon-star-medium a-star-medium-4-5"></i><span class="a-color-secondary acsProductBlockV1__rating__review-count"> 344,154</span></div>
                      </div>
                    </li>
                  </ol>
                </div>
              </div>
              <div class="a-carousel-col a-carousel-right" style="height: 397px; visibility: visible">
                <a
                  class="a-button a-button-image a-carousel-button a-carousel-goto-nextpage"
                  role="button"
                  href="https://www.amazon.com/-/he/Books/b/?_encoding=UTF8&amp;ref=bsm_nav_pill_nyt%2Fie%3DUTF8&amp;node=549028&amp;ref_=cct_cg_bsmpill_1d1&amp;pf_rd_p=fc5805e8-45ff-478e-b466-c5def105947b&amp;pf_rd_r=2A4P6E1NXTV4GYR0ESFF#"
                  id="a-autoid-1"
                  style="top: 158.797px"
                ><span class="a-button-inner"
                ><i class="a-icon a-icon-next"><span class="a-icon-alt">Next page</span></i></span
                ></a
                >
              </div>
            </div>
          </div>
          <span class="a-end aok-hidden"></span>
        </div>
      </div>
      <script>
        if (window.mix_csa) {
          window.mix_csa('[cel_widget_id="carousel_apb-browse_1"]', "#CardInstancePGQT8Pxru2r9IsNWFoQs8Q")("mark", "be");
        }
      </script>
      <script>
        if (window.uet) {
          window.uet("be", "carousel_apb-browse_1", { wb: 1 });
        }
      </script>
      <script>
        if (window.mixTimeout) {
          window.mixTimeout("carousel", "CardInstancePGQT8Pxru2r9IsNWFoQs8Q", 90000);
        }
        P.when("mix:@amzn/mix.client-runtime", "mix:carousel__KqIPI40V").execute(function (runtime, cardModule) {
          runtime.registerCardFactory("CardInstancePGQT8Pxru2r9IsNWFoQs8Q", cardModule).then(function () {
            if (window.mix_csa) {
              window.mix_csa('[cel_widget_id="carousel_apb-browse_1"]', "#CardInstancePGQT8Pxru2r9IsNWFoQs8Q")("mark", "functional");
            }
            if (window.uex) {
              window.uex("ld", "carousel_apb-browse_1", { wb: 1 });
            }
          });
        });
      </script>
      <script>
        P.load.js("https://images-na.ssl-images-amazon.com/images/I/11fJehmVpZL.js?xcp");
      </script>
    </div>
  </div>
</div>` },
  { filename: "amazon carousel no roledescription", content: `<link rel="stylesheet" href="../assets/amazon/114aqksR8ML._RC_01ZTHTZObnL.css,51HKuoT0uoL.css,31YWy-MCUtL.css,110sHTq30-L.css,01qDClimA1L.css,01pOTCa2wPL.css,41o-WhG5CBL.css,11RZUC4PXkL.css,01gkb7U1dSL.css,110chLTQxpL.css,010+HAxVU6L.css,01L-64jduML.css,014QJx7nWqL.css,21zhsp4bfZL.css,01u0BGXGQsL.css" />
<link rel="stylesheet" href="../assets/amazon/41VAhLVyESL._RC_71mHZZ71ElL.css,51shTLj5k1L.css,21smgiAUuUL.css,01FcI3FsaiL.css,21qgXjgc2rL.css,3138zRsJyFL.css,2175gv0crxL.css,419+zHfURDL.css,11yq21oaguL.css,31vfzIZi8IL.css,01w1OmfEMzL.css,21KQnzhmfTL.css,412rFfWkapL.css_.css" />
<link rel="stylesheet" href="../assets/amazon/71bJhjK-p4L.css" />
<link rel="stylesheet" href="../assets/amazon/21nO8CcU0iL.css" />

<div class="a-column a-span12 aok-float-right apb-browse-col-pad-left apb-browse-two-col-center-margin-right a-span-last">
  <div class="apb-default-slot apb-default-merchandised-search-4">
    <div
      class="celwidget pf_rd_p-f97d5a81-6249-42a4-bbde-c5d803739fc6 pf_rd_r-YN8249HYJ1MVXNZ1CQDS c-f"
      cel_widget_id="carousel_apb-browse_1"
      data-csa-op-log-render=""
      data-csa-c-content-id="amzn1.sym.f97d5a81-6249-42a4-bbde-c5d803739fc6"
      data-csa-c-slot-id="DsUnknown-2"
      data-csa-c-type="widget"
      data-csa-c-painter="carousel-cards"
      data-csa-c-id="j1ii1q-qbi83s-f4f8ex-sigx7i"
      data-cel-widget="carousel_apb-browse_1"
      style="max-height: 500px"
    >
      <script>
        if (window.mix_csa) {
          window.mix_csa('[cel_widget_id="carousel_apb-browse_1"]', "#CardInstancePGQT8Pxru2r9IsNWFoQs8Q")("mark", "bb");
        }
      </script>
      <script>
        if (window.uet) {
          window.uet("bb", "carousel_apb-browse_1", { wb: 1 });
        }
      </script>
      <style>
          ._carousel_energy-efficiency_energy-efficiency-container__1Pkva {
              position: relative;
              text-align: left;
          }
          ._carousel_energy-efficiency_energy-efficiency-badge-standard__28gp8 {
              cursor: pointer;
              display: inline-block;
              height: 24px;
          }
          ._carousel_energy-efficiency_energy-efficiency-badge-shape__1IcJY {
              display: inline-block;
              height: 24px;
          }
          ._carousel_energy-efficiency_energy-efficiency-badge-rating__3_0eN {
              fill: #fff;
              font-size: 20px;
              vertical-align: middle;
          }
          ._carousel_energy-efficiency_energy-efficiency-badge-rating-sign__1ronK {
              fill: #fff;
              font-size: 14px;
              vertical-align: middle;
          }
          ._carousel_energy-efficiency_energy-efficiency-badge-rating-2021__2Q_3P {
              left: 24px * 0.6;
              text-shadow: -0.5px -0.5px 0 #000, 0.5px -0.5px 0 #000, -0.5px 0.5px 0 #000, 0.5px 0.5px 0 #000;
          }
          ._carousel_energy-efficiency_energy-efficiency-badge-data-sheet-label-container__2iEi2 {
              display: inline-block;
              padding-left: 5px;
              padding-top: 0;
              position: absolute;
              vertical-align: middle;
          }
          ._carousel_energy-efficiency_energy-efficiency-badge-data-sheet-label__3b6X3 {
              cursor: pointer;
              word-break: break-word;
          }

          ._carousel_style_product-image-with-badge__2Vipe,
          ._carousel_style_product-image__3GTWS {
              height: 196px;
              position: relative;
          }
          ._carousel_style_product-image-with-badge__2Vipe a,
          ._carousel_style_product-image__3GTWS a {
              display: block;
              text-align: center;
          }
          ._carousel_style_product-image__3GTWS img {
              bottom: 0;
              left: 0;
              margin: auto;
              max-height: 196px;
              position: absolute;
              right: 0;
              top: 0;
          }
          ._carousel_style_product-image-with-badge__2Vipe img {
              max-height: 172px;
          }
          ._carousel_style_grey-gradient-background__2mdc9 {
              background: -webkit-linear-gradient(254.25deg, #e2e2e2, #fff 52.74%, #e2e2e2);
              background: linear-gradient(195.75deg, #e2e2e2, #fff 52.74%, #e2e2e2);
          }
          ._carousel_style_grey-gradient-background__2mdc9 img {
              mix-blend-mode: multiply;
          }
          ._carousel_style_more-like-this-icon-button__yfqfx {
              background: #fff;
              border-radius: 50%;
              bottom: 0;
              height: 34px;
              left: 0;
              margin: 0 0 8px 8px;
              position: absolute;
              width: 34px;
          }
          ._carousel_style_more-like-this-icon-image__1N5v6 {
              height: 32px;
              margin: 6px;
              width: 32px;
          }
          ._carousel_style_acsProductBlockV1__wHQrt ._carousel_style_contributor__3ItyK {
              color: #555;
              text-decoration: none;
          }
          ._carousel_style_acsProductBlockV2__Ci47t ._carousel_style_contributor__3ItyK {
              color: #000;
              text-decoration: none;
          }
          ._carousel_style_binding-value__2d_fB {
              color: #555;
              font-size: 11px;
              line-height: 1.25;
              text-decoration: none;
          }
          ._carousel_style_empty-space__3wzzr {
              display: block;
              margin-top: 5px;
          }
          ._carousel_style_price-buying-override__1tJY7 {
              font-weight: 700;
          }
          ._carousel_style_price-label-strikethrough__2XkYp,
          ._carousel_style_price-strikethrough__1utX6 {
              color: #565959;
          }
          ._carousel_style_price-buying__dYIzO {
              margin-top: 5px;
          }
          ._carousel_style_price-strikethrough__1utX6 {
              display: inline-block;
          }
          ._carousel_style_points-label-strikethrough__3ok19,
          ._carousel_style_points-strikethrough__3Xh8c {
              color: #565959;
          }
          ._carousel_style_points-strikethrough__3Xh8c {
              display: inline-block;
          }
          ._carousel_style_carousel-container__2Iapb {
              margin-top: 20px;
          }
          ._carousel_style_acs-product-block-v1-layout__eY7eI:empty {
              border: 0;
          }
          ._carousel_style_acs-product-block-v1-layout__eY7eI:last-child {
              margin-right: 8px;
          }
          ._carousel_style_carousel-element-support__3lVml {
              padding: 5px;
          }
          ._carousel_style_carousel-element-support__3lVml a {
              display: block;
          }
      </style>
      <!--CardsClient-->
      <div class="acsWidgetCarouselV1__carousel-container _carousel_style_carousel-container__2Iapb" id="CardInstancePGQT8Pxru2r9IsNWFoQs8Q" data-card-metrics-id="carousel_apb-browse_1" data-acp-tracking='{"pf_rd_p":"f97d5a81-6249-42a4-bbde-c5d803739fc6","pf_rd_r":"YN8249HYJ1MVXNZ1CQDS"}' data-mix-claimed="true">
        <div class="a-cardui-deck" data-a-remove-top-gutter="true" data-a-remove-bottom-gutter="true" name="a-cardui-deck-autoname-0">
          <div class="a-teaser-describedby-collapsed a-hidden" id="a-cardui-deck-autoname-0-teaser-describedby-collapsed">Brief content visible, double tap to read full content.</div>
          <div class="a-teaser-describedby-expanded a-hidden" id="a-cardui-deck-autoname-0-teaser-describedby-expanded">Full content visible, double tap to read brief content.</div>
          <div class="a-cardui" data-a-card-type="basic" name="a-cardui-deck-autoname-0-card0">
            <div class="a-cardui-body">
              <h2 class="a-spacing-mini"><span class="acsWidgetCarouselV1__title">ספרי מסחר רבי מכר בכריכה רכה</span></h2>
            </div>
            <hr aria-hidden="true" class="a-spacing-base a-spacing-top-mini a-divider-normal acsWidgetCarouselV1__divider" />
          </div>
        </div>
        <div
          id="carousel"
          data-a-carousel-options='{"first_item_flush_left":true,"set_size":10,"show_partial_next":false,"single_page_align":"stretch","hide_off_screen":false,"maintain_state":false,"minimum_gutter_width":15,"name":"carousel"}'
          data-asinlist="038549081X,1538732181,1635575567,1538774194,1638932239,1250080401,1728296226,1464221138,B09CGGV8DX,1635575583"
          data-requestproperties='{"marketplace":{"id":1,"region":"NA","orgUnitId":1,"encryptedId":"ATVPDKIKX0DER","url":"https://www.amazon.com","gatewayBrowseNodeId":507846,"code":"US","merchantId":["ATVPDKIKX0DER","A17MT8ELPNNVD3","A1OHOT6VONX3KA"]},"deviceType":"desktop","isMshopApp":false,"tracking":{"pf_rd_m":"ATVPDKIKX0DER","pf_rd_s":"merchandised-search-4","pf_rd_r":"YN8249HYJ1MVXNZ1CQDS","pf_rd_p":"f97d5a81-6249-42a4-bbde-c5d803739fc6","pf_rd_t":"","pf_rd_i":"549028"},"refArgument":{"refTagBase":"s9_acsd_al_ot_","refTagPrefix":"c2_x","refTagPostfix":""},"suppressConfig":{"suppressBinding":false,"suppressContributors":false,"suppressReviewStars":false,"suppressBasisPrice":false,"restrictToAmazonMerchant":true,"suppressAvailabilityCheck":false}}'
          data-a-display-strategy="swap"
          data-a-transition-strategy="swap"
          data-a-ajax-strategy="promise"
          role="group"
          class="a-begin a-carousel-container a-carousel-display-swap a-carousel-transition-swap a-spacing-top-small min-items--3 carousel-v1 a-carousel-initialized"
        >
          <input type="hidden" autocomplete="on" class="a-carousel-firstvisibleitem" />
          <div class="a-row a-carousel-controls a-carousel-row a-carousel-has-buttons">
            <div id="test-subject" class="a-carousel-row-inner" role="region">
              <div class="a-carousel-col a-carousel-left" style="height: 397px; visibility: visible">
                <a
                  class="a-button a-button-image a-carousel-button a-carousel-goto-prevpage"
                  role="button"
                  href="https://www.amazon.com/-/he/Books/b/?_encoding=UTF8&amp;ref=bsm_nav_pill_nyt%2Fie%3DUTF8&amp;node=549028&amp;ref_=cct_cg_bsmpill_1d1&amp;pf_rd_p=fc5805e8-45ff-478e-b466-c5def105947b&amp;pf_rd_r=2A4P6E1NXTV4GYR0ESFF#"
                  id="a-autoid-0"
                  style="top: 158.797px"
                ><span class="a-button-inner"
                ><i class="a-icon a-icon-previous"><span class="a-icon-alt">Previous page</span></i></span
                ></a
                >
              </div>
              <div class="a-carousel-col a-carousel-center">
                <div class="a-carousel-viewport" role="group" aria-roledescription="" id="anonCarousel1" style="height: 397px">
                  <ol class="a-carousel">
                    <li class="a-carousel-card _carousel_style_carousel-element-support__3lVml" style="max-width: 230px; margin-right: 32px" aria-setsize="10" aria-posinset="1" aria-hidden="false">
                      <div id="acsProductBlockV1-0" data-asin="038549081X" data-default-order="0" class="a-section acsProductBlockV1 acsProductBlockV1--default">
                        <a
                          class="a-color-base a-spacing-none a-link-normal"
                          href="https://www.amazon.com/-/he/Handmaids-Tale-%D7%A1%D7%A4%D7%A8-%D7%91%D7%90%D7%A0%D7%92%D7%9C%D7%99%D7%AA/dp/038549081X/ref=s9_acsd_al_ot_c2_x_0_t?_encoding=UTF8&amp;pf_rd_m=ATVPDKIKX0DER&amp;pf_rd_s=merchandised-search-4&amp;pf_rd_r=YN8249HYJ1MVXNZ1CQDS&amp;pf_rd_p=f97d5a81-6249-42a4-bbde-c5d803739fc6&amp;pf_rd_t=&amp;pf_rd_i=549028"
                        ><div class="a-section a-spacing-base a-spacing-top-micro _carousel_style_product-image__3GTWS acsProductBlockV1__product_image">
                          <img alt="The Handmaid's Tale (ספר באנגלית):" src="https://m.media-amazon.com/images/I/61su39k8NUL.AC_SX500.jpg" data-a-hires="https://m.media-amazon.com/images/I/61su39k8NUL.AC_SX500.jpg" />
                        </div>
                          <div class="a-section a-spacing-micro acsProductBlockV1__product-title">
                            <span class="a-truncate a-size-base" data-a-word-break="break-word" data-a-max-rows="2" data-a-overflow-marker="&amp;hellip;" style="line-height: 1.3em !important; max-height: 2.6em" data-a-recalculate="false" data-a-updated="true"
                            ><span class="a-truncate-full a-offscreen">The Handmaid's Tale (ספר באנגלית):</span><span class="a-truncate-cut" aria-hidden="true" style="height: auto">The Handmaid's Tale (ספר באנגלית):</span></span
                            >
                          </div>
                          <div class="a-section a-spacing-micro _carousel_style_acsProductBlockV1__wHQrt acsProductBlockV1__contributor" dir="ltr">
                            <span class="a-truncate _carousel_style_contributor__3ItyK acsProductBlockV1__contributor-value a-size-base" data-a-word-break="normal" data-a-max-rows="2" data-a-overflow-marker="&amp;hellip;" style="line-height: 1.3em !important; max-height: 2.6em" data-a-recalculate="false" data-a-updated="true"
                            ><span class="a-truncate-full a-offscreen">Margaret Atwood</span><span class="a-truncate-cut" aria-hidden="true" style="height: auto">Margaret Atwood</span></span
                            >
                          </div></a
                        >
                        <div class="a-section a-spacing-micro acsProductBlockV1__binding"><span class="_carousel_style_binding-value__2d_fB acsProductBlockV1__binding-value" dir="ltr">Paperback</span></div>
                        <div class="a-section a-spacing-micro acsProductBlockV1__price" dir="ltr">
                          <span class="a-price acsProductBlockV1__price--buying _carousel_style_price-buying__dYIzO" data-a-size="l" data-a-color="base"
                          ><span class="a-offscreen"><span dir="rtl">\$</span>‎8.95‎</span
                          ><span aria-hidden="true" dir="ltr"
                          ><span class="a-price-symbol" dir="rtl">\$</span>‎<span class="a-price-whole">8<span class="a-price-decimal" dir="ltr">.</span>‎</span><span class="a-price-fraction">95</span></span
                          ></span
                          >‏
                          <span class="a-price a-text-price acsProductBlockV1__price--strikethrough _carousel_style_price-strikethrough__1utX6" data-a-size="s" data-a-strike="true"
                          ><span class="a-offscreen"><span dir="rtl">\$</span>‎18.00‎</span><span aria-hidden="true" dir="ltr"><span dir="rtl">\$</span>‎18.00‎</span></span
                          >‏
                        </div>
                        <div class="a-section a-spacing-micro acsProductBlockV1__review" dir="ltr"><i class="a-icon a-icon-star-medium a-star-medium-4-5"></i><span class="a-color-secondary acsProductBlockV1__rating__review-count"> 162,803</span></div>
                      </div>
                    </li>
                    <li class="a-carousel-card _carousel_style_carousel-element-support__3lVml" style="max-width: 230px; margin-right: 32px" aria-setsize="10" aria-posinset="2" aria-hidden="false">
                      <div id="acsProductBlockV1-1" data-asin="1538732181" data-default-order="1" class="a-section acsProductBlockV1 acsProductBlockV1--default">
                        <a
                          class="a-color-base a-spacing-none a-link-normal"
                          href="https://www.amazon.com/-/he/Parable-Sower-1/dp/1538732181/ref=s9_acsd_al_ot_c2_x_1_t?_encoding=UTF8&amp;pf_rd_m=ATVPDKIKX0DER&amp;pf_rd_s=merchandised-search-4&amp;pf_rd_r=YN8249HYJ1MVXNZ1CQDS&amp;pf_rd_p=f97d5a81-6249-42a4-bbde-c5d803739fc6&amp;pf_rd_t=&amp;pf_rd_i=549028"
                        ><div class="a-section a-spacing-base a-spacing-top-micro _carousel_style_product-image__3GTWS acsProductBlockV1__product_image">
                          <img alt="The Parable of the Sower (Parable, 1)" src="https://m.media-amazon.com/images/I/71ZLgz1U1lL.AC_SX500.jpg" data-a-hires="https://m.media-amazon.com/images/I/71ZLgz1U1lL.AC_SX500.jpg" />
                        </div>
                          <div class="a-section a-spacing-micro acsProductBlockV1__product-title">
                            <span class="a-truncate a-size-base" data-a-word-break="break-word" data-a-max-rows="2" data-a-overflow-marker="&amp;hellip;" style="line-height: 1.3em !important; max-height: 2.6em" data-a-recalculate="false" data-a-updated="true"
                            ><span class="a-truncate-full a-offscreen">The Parable of the Sower (Parable, 1)</span><span class="a-truncate-cut" aria-hidden="true" style="height: auto">The Parable of the Sower (Parable, 1)</span></span
                            >
                          </div>
                          <div class="a-section a-spacing-micro _carousel_style_acsProductBlockV1__wHQrt acsProductBlockV1__contributor" dir="ltr">
                            <span class="a-truncate _carousel_style_contributor__3ItyK acsProductBlockV1__contributor-value a-size-base" data-a-word-break="normal" data-a-max-rows="2" data-a-overflow-marker="&amp;hellip;" style="line-height: 1.3em !important; max-height: 2.6em" data-a-recalculate="false" data-a-updated="true"
                            ><span class="a-truncate-full a-offscreen">Octavia E. Butler</span><span class="a-truncate-cut" aria-hidden="true" style="height: auto">Octavia E. Butler</span></span
                            >
                          </div></a
                        >
                        <div class="a-section a-spacing-micro acsProductBlockV1__binding"><span class="_carousel_style_binding-value__2d_fB acsProductBlockV1__binding-value" dir="ltr">Paperback</span></div>
                        <div class="a-section a-spacing-micro acsProductBlockV1__price" dir="ltr">
                          <span class="a-price acsProductBlockV1__price--buying _carousel_style_price-buying__dYIzO" data-a-size="l" data-a-color="base"
                          ><span class="a-offscreen"><span dir="rtl">\$</span>‎12.57‎</span
                          ><span aria-hidden="true" dir="ltr"
                          ><span class="a-price-symbol" dir="rtl">\$</span>‎<span class="a-price-whole">12<span class="a-price-decimal" dir="ltr">.</span>‎</span><span class="a-price-fraction">57</span></span
                          ></span
                          >‏
                          <span class="a-price a-text-price acsProductBlockV1__price--strikethrough _carousel_style_price-strikethrough__1utX6" data-a-size="s" data-a-strike="true"
                          ><span class="a-offscreen"><span dir="rtl">\$</span>‎19.99‎</span><span aria-hidden="true" dir="ltr"><span dir="rtl">\$</span>‎19.99‎</span></span
                          >‏
                        </div>
                        <div class="a-section a-spacing-micro acsProductBlockV1__review" dir="ltr"><i class="a-icon a-icon-star-medium a-star-medium-4-5"></i><span class="a-color-secondary acsProductBlockV1__rating__review-count"> 16,212</span></div>
                      </div>
                    </li>
                    <li class="a-carousel-card _carousel_style_carousel-element-support__3lVml" style="max-width: 230px; margin-right: 32px" aria-setsize="10" aria-posinset="3" aria-hidden="false">
                      <div id="acsProductBlockV1-2" data-asin="1635575567" data-default-order="2" class="a-section acsProductBlockV1 acsProductBlockV1--default">
                        <a
                          class="a-color-base a-spacing-none a-link-normal"
                          href="https://www.amazon.com/-/he/Court-Thorns-Roses/dp/1635575567/ref=s9_acsd_al_ot_c2_x_2_t?_encoding=UTF8&amp;pf_rd_m=ATVPDKIKX0DER&amp;pf_rd_s=merchandised-search-4&amp;pf_rd_r=YN8249HYJ1MVXNZ1CQDS&amp;pf_rd_p=f97d5a81-6249-42a4-bbde-c5d803739fc6&amp;pf_rd_t=&amp;pf_rd_i=549028"
                        ><div class="a-section a-spacing-base a-spacing-top-micro _carousel_style_product-image__3GTWS acsProductBlockV1__product_image">
                          <img alt="A Court of Thorns and Roses (A Court of Thorns and Roses, 1)" src="https://m.media-amazon.com/images/I/81RrEEMiOCL.AC_SX500.jpg" data-a-hires="https://m.media-amazon.com/images/I/81RrEEMiOCL.AC_SX500.jpg" />
                        </div>
                          <div class="a-section a-spacing-micro acsProductBlockV1__product-title">
                            <span class="a-truncate a-size-base" data-a-word-break="break-word" data-a-max-rows="2" data-a-overflow-marker="&amp;hellip;" style="line-height: 1.3em !important; max-height: 2.6em" data-a-recalculate="false" data-a-updated="true"
                            ><span class="a-truncate-full a-offscreen">A Court of Thorns and Roses (A Court of Thorns and Roses, 1)</span><span class="a-truncate-cut" aria-hidden="true" style="height: 2.6em">A Court of Thorns and Roses (A Court of Th…</span></span
                            >
                          </div>
                          <div class="a-section a-spacing-micro _carousel_style_acsProductBlockV1__wHQrt acsProductBlockV1__contributor" dir="ltr">
                            <span class="a-truncate _carousel_style_contributor__3ItyK acsProductBlockV1__contributor-value a-size-base" data-a-word-break="normal" data-a-max-rows="2" data-a-overflow-marker="&amp;hellip;" style="line-height: 1.3em !important; max-height: 2.6em" data-a-recalculate="false" data-a-updated="true"
                            ><span class="a-truncate-full a-offscreen">Sarah J. Maas</span><span class="a-truncate-cut" aria-hidden="true" style="height: auto">Sarah J. Maas</span></span
                            >
                          </div></a
                        >
                        <div class="a-section a-spacing-micro acsProductBlockV1__binding"><span class="_carousel_style_binding-value__2d_fB acsProductBlockV1__binding-value" dir="ltr">Paperback</span></div>
                        <div class="a-section a-spacing-micro acsProductBlockV1__price" dir="ltr">
                          <span class="a-price acsProductBlockV1__price--buying _carousel_style_price-buying__dYIzO" data-a-size="l" data-a-color="base"
                          ><span class="a-offscreen"><span dir="rtl">\$</span>‎10.05‎</span
                          ><span aria-hidden="true" dir="ltr"
                          ><span class="a-price-symbol" dir="rtl">\$</span>‎<span class="a-price-whole">10<span class="a-price-decimal" dir="ltr">.</span>‎</span><span class="a-price-fraction">05</span></span
                          ></span
                          >‏
                          <span class="a-price a-text-price acsProductBlockV1__price--strikethrough _carousel_style_price-strikethrough__1utX6" data-a-size="s" data-a-strike="true"
                          ><span class="a-offscreen"><span dir="rtl">\$</span>‎19.00‎</span><span aria-hidden="true" dir="ltr"><span dir="rtl">\$</span>‎19.00‎</span></span
                          >‏
                        </div>
                        <div class="a-section a-spacing-micro acsProductBlockV1__review" dir="ltr"><i class="a-icon a-icon-star-medium a-star-medium-4-5"></i><span class="a-color-secondary acsProductBlockV1__rating__review-count"> 263,566</span></div>
                      </div>
                    </li>
                    <li class="a-carousel-card" aria-setsize="10" aria-posinset="4" style="width: 160px; margin-left: 32px; margin-right: 32px">
                      <div id="acsProductBlockV1-3" data-asin="1538774194" data-default-order="3" class="a-section acsProductBlockV1 acsProductBlockV1--default">
                        <a
                          class="a-color-base a-spacing-none a-link-normal"
                          href="https://www.amazon.com/-/he/Quicksilver-Callie-Hart/dp/1538774194/ref=s9_acsd_al_ot_c2_x_3_t?_encoding=UTF8&amp;pf_rd_m=ATVPDKIKX0DER&amp;pf_rd_s=merchandised-search-4&amp;pf_rd_r=YN8249HYJ1MVXNZ1CQDS&amp;pf_rd_p=f97d5a81-6249-42a4-bbde-c5d803739fc6&amp;pf_rd_t=&amp;pf_rd_i=549028"
                        ><div class="a-section a-spacing-base a-spacing-top-micro _carousel_style_product-image__3GTWS acsProductBlockV1__product_image"><img alt="Quicksilver" src="https://m.media-amazon.com/images/I/81qAKMuO0qL.AC_SX500.jpg" data-a-hires="https://m.media-amazon.com/images/I/81qAKMuO0qL.AC_SX500.jpg" /></div>
                          <div class="a-section a-spacing-micro acsProductBlockV1__product-title">
                            <span class="a-truncate a-size-base" data-a-word-break="break-word" data-a-max-rows="2" data-a-overflow-marker="&amp;hellip;" style="line-height: 1.3em !important; max-height: 2.6em" data-a-recalculate="false" data-a-updated="true"
                            ><span class="a-truncate-full a-offscreen">Quicksilver</span><span class="a-truncate-cut" aria-hidden="true" style="height: auto">Quicksilver</span></span
                            >
                          </div>
                          <div class="a-section a-spacing-micro _carousel_style_acsProductBlockV1__wHQrt acsProductBlockV1__contributor" dir="ltr">
                            <span class="a-truncate _carousel_style_contributor__3ItyK acsProductBlockV1__contributor-value a-size-base" data-a-word-break="normal" data-a-max-rows="2" data-a-overflow-marker="&amp;hellip;" style="line-height: 1.3em !important; max-height: 2.6em" data-a-recalculate="false" data-a-updated="true"
                            ><span class="a-truncate-full a-offscreen">Callie Hart</span><span class="a-truncate-cut" aria-hidden="true" style="height: auto">Callie Hart</span></span
                            >
                          </div></a
                        >
                        <div class="a-section a-spacing-micro acsProductBlockV1__binding"><span class="_carousel_style_binding-value__2d_fB acsProductBlockV1__binding-value" dir="ltr">Paperback</span></div>
                        <div class="a-section a-spacing-micro acsProductBlockV1__price" dir="ltr">
                          <span class="a-price acsProductBlockV1__price--buying _carousel_style_price-buying__dYIzO" data-a-size="l" data-a-color="base"
                          ><span class="a-offscreen"><span dir="rtl">\$</span>‎15.61‎</span
                          ><span aria-hidden="true" dir="ltr"
                          ><span class="a-price-symbol" dir="rtl">\$</span>‎<span class="a-price-whole">15<span class="a-price-decimal" dir="ltr">.</span>‎</span><span class="a-price-fraction">61</span></span
                          ></span
                          >‏
                          <span class="a-price a-text-price acsProductBlockV1__price--strikethrough _carousel_style_price-strikethrough__1utX6" data-a-size="s" data-a-strike="true"
                          ><span class="a-offscreen"><span dir="rtl">\$</span>‎21.99‎</span><span aria-hidden="true" dir="ltr"><span dir="rtl">\$</span>‎21.99‎</span></span
                          >‏
                        </div>
                        <div class="a-section a-spacing-micro acsProductBlockV1__review" dir="ltr"><i class="a-icon a-icon-star-medium a-star-medium-4-5"></i><span class="a-color-secondary acsProductBlockV1__rating__review-count"> 98,869</span></div>
                      </div>
                    </li>
                    <li class="a-carousel-card" aria-setsize="10" aria-posinset="5" style="width: 160px; margin-left: 32px; margin-right: 32px">
                      <div id="acsProductBlockV1-4" data-asin="1638932239" data-default-order="4" class="a-section acsProductBlockV1 acsProductBlockV1--default">
                        <a
                          class="a-color-base a-spacing-none a-link-normal"
                          href="https://www.amazon.com/-/he/Lights-Out-Into-Darkness-Novel/dp/1638932239/ref=s9_acsd_al_ot_c2_x_4_t?_encoding=UTF8&amp;pf_rd_m=ATVPDKIKX0DER&amp;pf_rd_s=merchandised-search-4&amp;pf_rd_r=YN8249HYJ1MVXNZ1CQDS&amp;pf_rd_p=f97d5a81-6249-42a4-bbde-c5d803739fc6&amp;pf_rd_t=&amp;pf_rd_i=549028"
                        ><div class="a-section a-spacing-base a-spacing-top-micro _carousel_style_product-image__3GTWS acsProductBlockV1__product_image">
                          <img alt="Lights Out: An Into Darkness Novel (Into Darkness Series)" src="https://m.media-amazon.com/images/I/81GnIlm7XlL.AC_SX500.jpg" data-a-hires="https://m.media-amazon.com/images/I/81GnIlm7XlL.AC_SX500.jpg" />
                        </div>
                          <div class="a-section a-spacing-micro acsProductBlockV1__product-title">
                            <span class="a-truncate a-size-base" data-a-word-break="break-word" data-a-max-rows="2" data-a-overflow-marker="&amp;hellip;" style="line-height: 1.3em !important; max-height: 2.6em" data-a-recalculate="false" data-a-updated="true"
                            ><span class="a-truncate-full a-offscreen">Lights Out: An Into Darkness Novel (Into Darkness Series)</span><span class="a-truncate-cut" aria-hidden="true" style="height: 2.6em">Lights Out: An Into Darkness Novel (Into D…</span></span
                            >
                          </div>
                          <div class="a-section a-spacing-micro _carousel_style_acsProductBlockV1__wHQrt acsProductBlockV1__contributor" dir="ltr">
                            <span class="a-truncate _carousel_style_contributor__3ItyK acsProductBlockV1__contributor-value a-size-base" data-a-word-break="normal" data-a-max-rows="2" data-a-overflow-marker="&amp;hellip;" style="line-height: 1.3em !important; max-height: 2.6em" data-a-recalculate="false" data-a-updated="true"
                            ><span class="a-truncate-full a-offscreen">Navessa Allen</span><span class="a-truncate-cut" aria-hidden="true" style="height: auto">Navessa Allen</span></span
                            >
                          </div></a
                        >
                        <div class="a-section a-spacing-micro acsProductBlockV1__binding"><span class="_carousel_style_binding-value__2d_fB acsProductBlockV1__binding-value" dir="ltr">Paperback</span></div>
                        <div class="a-section a-spacing-micro acsProductBlockV1__price" dir="ltr">
                          <span class="a-price acsProductBlockV1__price--buying _carousel_style_price-buying__dYIzO" data-a-size="l" data-a-color="base"
                          ><span class="a-offscreen"><span dir="rtl">\$</span>‎13.90‎</span
                          ><span aria-hidden="true" dir="ltr"
                          ><span class="a-price-symbol" dir="rtl">\$</span>‎<span class="a-price-whole">13<span class="a-price-decimal" dir="ltr">.</span>‎</span><span class="a-price-fraction">90</span></span
                          ></span
                          >‏
                          <span class="a-price a-text-price acsProductBlockV1__price--strikethrough _carousel_style_price-strikethrough__1utX6" data-a-size="s" data-a-strike="true"
                          ><span class="a-offscreen"><span dir="rtl">\$</span>‎19.00‎</span><span aria-hidden="true" dir="ltr"><span dir="rtl">\$</span>‎19.00‎</span></span
                          >‏
                        </div>
                        <div class="a-section a-spacing-micro acsProductBlockV1__review" dir="ltr"><i class="a-icon a-icon-star-medium a-star-medium-4-5"></i><span class="a-color-secondary acsProductBlockV1__rating__review-count"> 34,759</span></div>
                      </div>
                    </li>
                    <li class="a-carousel-card" aria-setsize="10" aria-posinset="6" style="width: 160px; margin-left: 32px; margin-right: 32px">
                      <div id="acsProductBlockV1-5" data-asin="1250080401" data-default-order="5" class="a-section acsProductBlockV1 acsProductBlockV1--default">
                        <a
                          class="a-color-base a-spacing-none a-link-normal"
                          href="https://www.amazon.com/-/he/Nightingale-Novel-Kristin-Hannah/dp/1250080401/ref=s9_acsd_al_ot_c2_x_5_t?_encoding=UTF8&amp;pf_rd_m=ATVPDKIKX0DER&amp;pf_rd_s=merchandised-search-4&amp;pf_rd_r=YN8249HYJ1MVXNZ1CQDS&amp;pf_rd_p=f97d5a81-6249-42a4-bbde-c5d803739fc6&amp;pf_rd_t=&amp;pf_rd_i=549028"
                        ><div class="a-section a-spacing-base a-spacing-top-micro _carousel_style_product-image__3GTWS acsProductBlockV1__product_image"><img alt="The Nightingale: A Novel" src="https://m.media-amazon.com/images/I/81OkWjcf4WL.AC_SX500.jpg" data-a-hires="https://m.media-amazon.com/images/I/81OkWjcf4WL.AC_SX500.jpg" /></div>
                          <div class="a-section a-spacing-micro acsProductBlockV1__product-title">
                            <span class="a-truncate a-size-base" data-a-word-break="break-word" data-a-max-rows="2" data-a-overflow-marker="&amp;hellip;" style="line-height: 1.3em !important; max-height: 2.6em" data-a-recalculate="false" data-a-updated="true"
                            ><span class="a-truncate-full a-offscreen">The Nightingale: A Novel</span><span class="a-truncate-cut" aria-hidden="true" style="height: auto">The Nightingale: A Novel</span></span
                            >
                          </div>
                          <div class="a-section a-spacing-micro _carousel_style_acsProductBlockV1__wHQrt acsProductBlockV1__contributor" dir="ltr">
                            <span class="a-truncate _carousel_style_contributor__3ItyK acsProductBlockV1__contributor-value a-size-base" data-a-word-break="normal" data-a-max-rows="2" data-a-overflow-marker="&amp;hellip;" style="line-height: 1.3em !important; max-height: 2.6em" data-a-recalculate="false" data-a-updated="true"
                            ><span class="a-truncate-full a-offscreen">Kristin Hannah</span><span class="a-truncate-cut" aria-hidden="true" style="height: auto">Kristin Hannah</span></span
                            >
                          </div></a
                        >
                        <div class="a-section a-spacing-micro acsProductBlockV1__binding"><span class="_carousel_style_binding-value__2d_fB acsProductBlockV1__binding-value" dir="ltr">Paperback</span></div>
                        <div class="a-section a-spacing-micro acsProductBlockV1__price" dir="ltr">
                          <span class="a-price acsProductBlockV1__price--buying _carousel_style_price-buying__dYIzO" data-a-size="l" data-a-color="base"
                          ><span class="a-offscreen"><span dir="rtl">\$</span>‎9.08‎</span
                          ><span aria-hidden="true" dir="ltr"
                          ><span class="a-price-symbol" dir="rtl">\$</span>‎<span class="a-price-whole">9<span class="a-price-decimal" dir="ltr">.</span>‎</span><span class="a-price-fraction">08</span></span
                          ></span
                          >‏
                          <span class="a-price a-text-price acsProductBlockV1__price--strikethrough _carousel_style_price-strikethrough__1utX6" data-a-size="s" data-a-strike="true"
                          ><span class="a-offscreen"><span dir="rtl">\$</span>‎17.99‎</span><span aria-hidden="true" dir="ltr"><span dir="rtl">\$</span>‎17.99‎</span></span
                          >‏
                        </div>
                        <div class="a-section a-spacing-micro acsProductBlockV1__review" dir="ltr"><i class="a-icon a-icon-star-medium a-star-medium-4-5"></i><span class="a-color-secondary acsProductBlockV1__rating__review-count"> 344,154</span></div>
                      </div>
                    </li>
                  </ol>
                </div>
              </div>
              <div class="a-carousel-col a-carousel-right" style="height: 397px; visibility: visible">
                <a
                  class="a-button a-button-image a-carousel-button a-carousel-goto-nextpage"
                  role="button"
                  href="https://www.amazon.com/-/he/Books/b/?_encoding=UTF8&amp;ref=bsm_nav_pill_nyt%2Fie%3DUTF8&amp;node=549028&amp;ref_=cct_cg_bsmpill_1d1&amp;pf_rd_p=fc5805e8-45ff-478e-b466-c5def105947b&amp;pf_rd_r=2A4P6E1NXTV4GYR0ESFF#"
                  id="a-autoid-1"
                  style="top: 158.797px"
                ><span class="a-button-inner"
                ><i class="a-icon a-icon-next"><span class="a-icon-alt">Next page</span></i></span
                ></a
                >
              </div>
            </div>
          </div>
          <span class="a-end aok-hidden"></span>
        </div>
      </div>
      <script>
        if (window.mix_csa) {
          window.mix_csa('[cel_widget_id="carousel_apb-browse_1"]', "#CardInstancePGQT8Pxru2r9IsNWFoQs8Q")("mark", "be");
        }
      </script>
      <script>
        if (window.uet) {
          window.uet("be", "carousel_apb-browse_1", { wb: 1 });
        }
      </script>
      <script>
        if (window.mixTimeout) {
          window.mixTimeout("carousel", "CardInstancePGQT8Pxru2r9IsNWFoQs8Q", 90000);
        }
        P.when("mix:@amzn/mix.client-runtime", "mix:carousel__KqIPI40V").execute(function (runtime, cardModule) {
          runtime.registerCardFactory("CardInstancePGQT8Pxru2r9IsNWFoQs8Q", cardModule).then(function () {
            if (window.mix_csa) {
              window.mix_csa('[cel_widget_id="carousel_apb-browse_1"]', "#CardInstancePGQT8Pxru2r9IsNWFoQs8Q")("mark", "functional");
            }
            if (window.uex) {
              window.uex("ld", "carousel_apb-browse_1", { wb: 1 });
            }
          });
        });
      </script>
      <script>
        P.load.js("https://images-na.ssl-images-amazon.com/images/I/11fJehmVpZL.js?xcp");
      </script>
    </div>
  </div>
</div>` },
  { filename: "amazon carousel wrong role", content: `<link rel="stylesheet" href="../assets/amazon/114aqksR8ML._RC_01ZTHTZObnL.css,51HKuoT0uoL.css,31YWy-MCUtL.css,110sHTq30-L.css,01qDClimA1L.css,01pOTCa2wPL.css,41o-WhG5CBL.css,11RZUC4PXkL.css,01gkb7U1dSL.css,110chLTQxpL.css,010+HAxVU6L.css,01L-64jduML.css,014QJx7nWqL.css,21zhsp4bfZL.css,01u0BGXGQsL.css" />
<link rel="stylesheet" href="../assets/amazon/41VAhLVyESL._RC_71mHZZ71ElL.css,51shTLj5k1L.css,21smgiAUuUL.css,01FcI3FsaiL.css,21qgXjgc2rL.css,3138zRsJyFL.css,2175gv0crxL.css,419+zHfURDL.css,11yq21oaguL.css,31vfzIZi8IL.css,01w1OmfEMzL.css,21KQnzhmfTL.css,412rFfWkapL.css_.css" />
<link rel="stylesheet" href="../assets/amazon/71bJhjK-p4L.css" />
<link rel="stylesheet" href="../assets/amazon/21nO8CcU0iL.css" />

<div class="a-column a-span12 aok-float-right apb-browse-col-pad-left apb-browse-two-col-center-margin-right a-span-last">
  <div class="apb-default-slot apb-default-merchandised-search-4">
    <div
      class="celwidget pf_rd_p-f97d5a81-6249-42a4-bbde-c5d803739fc6 pf_rd_r-YN8249HYJ1MVXNZ1CQDS c-f"
      cel_widget_id="carousel_apb-browse_1"
      data-csa-op-log-render=""
      data-csa-c-content-id="amzn1.sym.f97d5a81-6249-42a4-bbde-c5d803739fc6"
      data-csa-c-slot-id="DsUnknown-2"
      data-csa-c-type="widget"
      data-csa-c-painter="carousel-cards"
      data-csa-c-id="j1ii1q-qbi83s-f4f8ex-sigx7i"
      data-cel-widget="carousel_apb-browse_1"
      style="max-height: 500px"
    >
      <script>
        if (window.mix_csa) {
          window.mix_csa('[cel_widget_id="carousel_apb-browse_1"]', "#CardInstancePGQT8Pxru2r9IsNWFoQs8Q")("mark", "bb");
        }
      </script>
      <script>
        if (window.uet) {
          window.uet("bb", "carousel_apb-browse_1", { wb: 1 });
        }
      </script>
      <style>
          ._carousel_energy-efficiency_energy-efficiency-container__1Pkva {
              position: relative;
              text-align: left;
          }
          ._carousel_energy-efficiency_energy-efficiency-badge-standard__28gp8 {
              cursor: pointer;
              display: inline-block;
              height: 24px;
          }
          ._carousel_energy-efficiency_energy-efficiency-badge-shape__1IcJY {
              display: inline-block;
              height: 24px;
          }
          ._carousel_energy-efficiency_energy-efficiency-badge-rating__3_0eN {
              fill: #fff;
              font-size: 20px;
              vertical-align: middle;
          }
          ._carousel_energy-efficiency_energy-efficiency-badge-rating-sign__1ronK {
              fill: #fff;
              font-size: 14px;
              vertical-align: middle;
          }
          ._carousel_energy-efficiency_energy-efficiency-badge-rating-2021__2Q_3P {
              left: 24px * 0.6;
              text-shadow: -0.5px -0.5px 0 #000, 0.5px -0.5px 0 #000, -0.5px 0.5px 0 #000, 0.5px 0.5px 0 #000;
          }
          ._carousel_energy-efficiency_energy-efficiency-badge-data-sheet-label-container__2iEi2 {
              display: inline-block;
              padding-left: 5px;
              padding-top: 0;
              position: absolute;
              vertical-align: middle;
          }
          ._carousel_energy-efficiency_energy-efficiency-badge-data-sheet-label__3b6X3 {
              cursor: pointer;
              word-break: break-word;
          }

          ._carousel_style_product-image-with-badge__2Vipe,
          ._carousel_style_product-image__3GTWS {
              height: 196px;
              position: relative;
          }
          ._carousel_style_product-image-with-badge__2Vipe a,
          ._carousel_style_product-image__3GTWS a {
              display: block;
              text-align: center;
          }
          ._carousel_style_product-image__3GTWS img {
              bottom: 0;
              left: 0;
              margin: auto;
              max-height: 196px;
              position: absolute;
              right: 0;
              top: 0;
          }
          ._carousel_style_product-image-with-badge__2Vipe img {
              max-height: 172px;
          }
          ._carousel_style_grey-gradient-background__2mdc9 {
              background: -webkit-linear-gradient(254.25deg, #e2e2e2, #fff 52.74%, #e2e2e2);
              background: linear-gradient(195.75deg, #e2e2e2, #fff 52.74%, #e2e2e2);
          }
          ._carousel_style_grey-gradient-background__2mdc9 img {
              mix-blend-mode: multiply;
          }
          ._carousel_style_more-like-this-icon-button__yfqfx {
              background: #fff;
              border-radius: 50%;
              bottom: 0;
              height: 34px;
              left: 0;
              margin: 0 0 8px 8px;
              position: absolute;
              width: 34px;
          }
          ._carousel_style_more-like-this-icon-image__1N5v6 {
              height: 32px;
              margin: 6px;
              width: 32px;
          }
          ._carousel_style_acsProductBlockV1__wHQrt ._carousel_style_contributor__3ItyK {
              color: #555;
              text-decoration: none;
          }
          ._carousel_style_acsProductBlockV2__Ci47t ._carousel_style_contributor__3ItyK {
              color: #000;
              text-decoration: none;
          }
          ._carousel_style_binding-value__2d_fB {
              color: #555;
              font-size: 11px;
              line-height: 1.25;
              text-decoration: none;
          }
          ._carousel_style_empty-space__3wzzr {
              display: block;
              margin-top: 5px;
          }
          ._carousel_style_price-buying-override__1tJY7 {
              font-weight: 700;
          }
          ._carousel_style_price-label-strikethrough__2XkYp,
          ._carousel_style_price-strikethrough__1utX6 {
              color: #565959;
          }
          ._carousel_style_price-buying__dYIzO {
              margin-top: 5px;
          }
          ._carousel_style_price-strikethrough__1utX6 {
              display: inline-block;
          }
          ._carousel_style_points-label-strikethrough__3ok19,
          ._carousel_style_points-strikethrough__3Xh8c {
              color: #565959;
          }
          ._carousel_style_points-strikethrough__3Xh8c {
              display: inline-block;
          }
          ._carousel_style_carousel-container__2Iapb {
              margin-top: 20px;
          }
          ._carousel_style_acs-product-block-v1-layout__eY7eI:empty {
              border: 0;
          }
          ._carousel_style_acs-product-block-v1-layout__eY7eI:last-child {
              margin-right: 8px;
          }
          ._carousel_style_carousel-element-support__3lVml {
              padding: 5px;
          }
          ._carousel_style_carousel-element-support__3lVml a {
              display: block;
          }
      </style>
      <!--CardsClient-->
      <div class="acsWidgetCarouselV1__carousel-container _carousel_style_carousel-container__2Iapb" id="CardInstancePGQT8Pxru2r9IsNWFoQs8Q" data-card-metrics-id="carousel_apb-browse_1" data-acp-tracking='{"pf_rd_p":"f97d5a81-6249-42a4-bbde-c5d803739fc6","pf_rd_r":"YN8249HYJ1MVXNZ1CQDS"}' data-mix-claimed="true">
        <div class="a-cardui-deck" data-a-remove-top-gutter="true" data-a-remove-bottom-gutter="true" name="a-cardui-deck-autoname-0">
          <div class="a-teaser-describedby-collapsed a-hidden" id="a-cardui-deck-autoname-0-teaser-describedby-collapsed">Brief content visible, double tap to read full content.</div>
          <div class="a-teaser-describedby-expanded a-hidden" id="a-cardui-deck-autoname-0-teaser-describedby-expanded">Full content visible, double tap to read brief content.</div>
          <div class="a-cardui" data-a-card-type="basic" name="a-cardui-deck-autoname-0-card0">
            <div class="a-cardui-body">
              <h2 class="a-spacing-mini"><span class="acsWidgetCarouselV1__title">ספרי מסחר רבי מכר בכריכה רכה</span></h2>
            </div>
            <hr aria-hidden="true" class="a-spacing-base a-spacing-top-mini a-divider-normal acsWidgetCarouselV1__divider" />
          </div>
        </div>
        <div
          id="carousel"
          data-a-carousel-options='{"first_item_flush_left":true,"set_size":10,"show_partial_next":false,"single_page_align":"stretch","hide_off_screen":false,"maintain_state":false,"minimum_gutter_width":15,"name":"carousel"}'
          data-asinlist="038549081X,1538732181,1635575567,1538774194,1638932239,1250080401,1728296226,1464221138,B09CGGV8DX,1635575583"
          data-requestproperties='{"marketplace":{"id":1,"region":"NA","orgUnitId":1,"encryptedId":"ATVPDKIKX0DER","url":"https://www.amazon.com","gatewayBrowseNodeId":507846,"code":"US","merchantId":["ATVPDKIKX0DER","A17MT8ELPNNVD3","A1OHOT6VONX3KA"]},"deviceType":"desktop","isMshopApp":false,"tracking":{"pf_rd_m":"ATVPDKIKX0DER","pf_rd_s":"merchandised-search-4","pf_rd_r":"YN8249HYJ1MVXNZ1CQDS","pf_rd_p":"f97d5a81-6249-42a4-bbde-c5d803739fc6","pf_rd_t":"","pf_rd_i":"549028"},"refArgument":{"refTagBase":"s9_acsd_al_ot_","refTagPrefix":"c2_x","refTagPostfix":""},"suppressConfig":{"suppressBinding":false,"suppressContributors":false,"suppressReviewStars":false,"suppressBasisPrice":false,"restrictToAmazonMerchant":true,"suppressAvailabilityCheck":false}}'
          data-a-display-strategy="swap"
          data-a-transition-strategy="swap"
          data-a-ajax-strategy="promise"
          role="group"
          class="a-begin a-carousel-container a-carousel-display-swap a-carousel-transition-swap a-spacing-top-small min-items--3 carousel-v1 a-carousel-initialized"
        >
          <input type="hidden" autocomplete="on" class="a-carousel-firstvisibleitem" />
          <div class="a-row a-carousel-controls a-carousel-row a-carousel-has-buttons">
            <div id="test-subject" class="a-carousel-row-inner" role="button" aria-roledescription="carousel">
              <div class="a-carousel-col a-carousel-left" style="height: 397px; visibility: visible">
                <a
                  class="a-button a-button-image a-carousel-button a-carousel-goto-prevpage"
                  role="button"
                  href="https://www.amazon.com/-/he/Books/b/?_encoding=UTF8&amp;ref=bsm_nav_pill_nyt%2Fie%3DUTF8&amp;node=549028&amp;ref_=cct_cg_bsmpill_1d1&amp;pf_rd_p=fc5805e8-45ff-478e-b466-c5def105947b&amp;pf_rd_r=2A4P6E1NXTV4GYR0ESFF#"
                  id="a-autoid-0"
                  style="top: 158.797px"
                ><span class="a-button-inner"
                ><i class="a-icon a-icon-previous"><span class="a-icon-alt">Previous page</span></i></span
                ></a
                >
              </div>
              <div class="a-carousel-col a-carousel-center">
                <div class="a-carousel-viewport" role="group" aria-roledescription="" id="anonCarousel1" style="height: 397px">
                  <ol class="a-carousel">
                    <li class="a-carousel-card _carousel_style_carousel-element-support__3lVml" style="max-width: 230px; margin-right: 32px" aria-setsize="10" aria-posinset="1" aria-hidden="false">
                      <div id="acsProductBlockV1-0" data-asin="038549081X" data-default-order="0" class="a-section acsProductBlockV1 acsProductBlockV1--default">
                        <a
                          class="a-color-base a-spacing-none a-link-normal"
                          href="https://www.amazon.com/-/he/Handmaids-Tale-%D7%A1%D7%A4%D7%A8-%D7%91%D7%90%D7%A0%D7%92%D7%9C%D7%99%D7%AA/dp/038549081X/ref=s9_acsd_al_ot_c2_x_0_t?_encoding=UTF8&amp;pf_rd_m=ATVPDKIKX0DER&amp;pf_rd_s=merchandised-search-4&amp;pf_rd_r=YN8249HYJ1MVXNZ1CQDS&amp;pf_rd_p=f97d5a81-6249-42a4-bbde-c5d803739fc6&amp;pf_rd_t=&amp;pf_rd_i=549028"
                        ><div class="a-section a-spacing-base a-spacing-top-micro _carousel_style_product-image__3GTWS acsProductBlockV1__product_image">
                          <img alt="The Handmaid's Tale (ספר באנגלית):" src="https://m.media-amazon.com/images/I/61su39k8NUL.AC_SX500.jpg" data-a-hires="https://m.media-amazon.com/images/I/61su39k8NUL.AC_SX500.jpg" />
                        </div>
                          <div class="a-section a-spacing-micro acsProductBlockV1__product-title">
                            <span class="a-truncate a-size-base" data-a-word-break="break-word" data-a-max-rows="2" data-a-overflow-marker="&amp;hellip;" style="line-height: 1.3em !important; max-height: 2.6em" data-a-recalculate="false" data-a-updated="true"
                            ><span class="a-truncate-full a-offscreen">The Handmaid's Tale (ספר באנגלית):</span><span class="a-truncate-cut" aria-hidden="true" style="height: auto">The Handmaid's Tale (ספר באנגלית):</span></span
                            >
                          </div>
                          <div class="a-section a-spacing-micro _carousel_style_acsProductBlockV1__wHQrt acsProductBlockV1__contributor" dir="ltr">
                            <span class="a-truncate _carousel_style_contributor__3ItyK acsProductBlockV1__contributor-value a-size-base" data-a-word-break="normal" data-a-max-rows="2" data-a-overflow-marker="&amp;hellip;" style="line-height: 1.3em !important; max-height: 2.6em" data-a-recalculate="false" data-a-updated="true"
                            ><span class="a-truncate-full a-offscreen">Margaret Atwood</span><span class="a-truncate-cut" aria-hidden="true" style="height: auto">Margaret Atwood</span></span
                            >
                          </div></a
                        >
                        <div class="a-section a-spacing-micro acsProductBlockV1__binding"><span class="_carousel_style_binding-value__2d_fB acsProductBlockV1__binding-value" dir="ltr">Paperback</span></div>
                        <div class="a-section a-spacing-micro acsProductBlockV1__price" dir="ltr">
                          <span class="a-price acsProductBlockV1__price--buying _carousel_style_price-buying__dYIzO" data-a-size="l" data-a-color="base"
                          ><span class="a-offscreen"><span dir="rtl">\$</span>‎8.95‎</span
                          ><span aria-hidden="true" dir="ltr"
                          ><span class="a-price-symbol" dir="rtl">\$</span>‎<span class="a-price-whole">8<span class="a-price-decimal" dir="ltr">.</span>‎</span><span class="a-price-fraction">95</span></span
                          ></span
                          >‏
                          <span class="a-price a-text-price acsProductBlockV1__price--strikethrough _carousel_style_price-strikethrough__1utX6" data-a-size="s" data-a-strike="true"
                          ><span class="a-offscreen"><span dir="rtl">\$</span>‎18.00‎</span><span aria-hidden="true" dir="ltr"><span dir="rtl">\$</span>‎18.00‎</span></span
                          >‏
                        </div>
                        <div class="a-section a-spacing-micro acsProductBlockV1__review" dir="ltr"><i class="a-icon a-icon-star-medium a-star-medium-4-5"></i><span class="a-color-secondary acsProductBlockV1__rating__review-count"> 162,803</span></div>
                      </div>
                    </li>
                    <li class="a-carousel-card _carousel_style_carousel-element-support__3lVml" style="max-width: 230px; margin-right: 32px" aria-setsize="10" aria-posinset="2" aria-hidden="false">
                      <div id="acsProductBlockV1-1" data-asin="1538732181" data-default-order="1" class="a-section acsProductBlockV1 acsProductBlockV1--default">
                        <a
                          class="a-color-base a-spacing-none a-link-normal"
                          href="https://www.amazon.com/-/he/Parable-Sower-1/dp/1538732181/ref=s9_acsd_al_ot_c2_x_1_t?_encoding=UTF8&amp;pf_rd_m=ATVPDKIKX0DER&amp;pf_rd_s=merchandised-search-4&amp;pf_rd_r=YN8249HYJ1MVXNZ1CQDS&amp;pf_rd_p=f97d5a81-6249-42a4-bbde-c5d803739fc6&amp;pf_rd_t=&amp;pf_rd_i=549028"
                        ><div class="a-section a-spacing-base a-spacing-top-micro _carousel_style_product-image__3GTWS acsProductBlockV1__product_image">
                          <img alt="The Parable of the Sower (Parable, 1)" src="https://m.media-amazon.com/images/I/71ZLgz1U1lL.AC_SX500.jpg" data-a-hires="https://m.media-amazon.com/images/I/71ZLgz1U1lL.AC_SX500.jpg" />
                        </div>
                          <div class="a-section a-spacing-micro acsProductBlockV1__product-title">
                            <span class="a-truncate a-size-base" data-a-word-break="break-word" data-a-max-rows="2" data-a-overflow-marker="&amp;hellip;" style="line-height: 1.3em !important; max-height: 2.6em" data-a-recalculate="false" data-a-updated="true"
                            ><span class="a-truncate-full a-offscreen">The Parable of the Sower (Parable, 1)</span><span class="a-truncate-cut" aria-hidden="true" style="height: auto">The Parable of the Sower (Parable, 1)</span></span
                            >
                          </div>
                          <div class="a-section a-spacing-micro _carousel_style_acsProductBlockV1__wHQrt acsProductBlockV1__contributor" dir="ltr">
                            <span class="a-truncate _carousel_style_contributor__3ItyK acsProductBlockV1__contributor-value a-size-base" data-a-word-break="normal" data-a-max-rows="2" data-a-overflow-marker="&amp;hellip;" style="line-height: 1.3em !important; max-height: 2.6em" data-a-recalculate="false" data-a-updated="true"
                            ><span class="a-truncate-full a-offscreen">Octavia E. Butler</span><span class="a-truncate-cut" aria-hidden="true" style="height: auto">Octavia E. Butler</span></span
                            >
                          </div></a
                        >
                        <div class="a-section a-spacing-micro acsProductBlockV1__binding"><span class="_carousel_style_binding-value__2d_fB acsProductBlockV1__binding-value" dir="ltr">Paperback</span></div>
                        <div class="a-section a-spacing-micro acsProductBlockV1__price" dir="ltr">
                          <span class="a-price acsProductBlockV1__price--buying _carousel_style_price-buying__dYIzO" data-a-size="l" data-a-color="base"
                          ><span class="a-offscreen"><span dir="rtl">\$</span>‎12.57‎</span
                          ><span aria-hidden="true" dir="ltr"
                          ><span class="a-price-symbol" dir="rtl">\$</span>‎<span class="a-price-whole">12<span class="a-price-decimal" dir="ltr">.</span>‎</span><span class="a-price-fraction">57</span></span
                          ></span
                          >‏
                          <span class="a-price a-text-price acsProductBlockV1__price--strikethrough _carousel_style_price-strikethrough__1utX6" data-a-size="s" data-a-strike="true"
                          ><span class="a-offscreen"><span dir="rtl">\$</span>‎19.99‎</span><span aria-hidden="true" dir="ltr"><span dir="rtl">\$</span>‎19.99‎</span></span
                          >‏
                        </div>
                        <div class="a-section a-spacing-micro acsProductBlockV1__review" dir="ltr"><i class="a-icon a-icon-star-medium a-star-medium-4-5"></i><span class="a-color-secondary acsProductBlockV1__rating__review-count"> 16,212</span></div>
                      </div>
                    </li>
                    <li class="a-carousel-card _carousel_style_carousel-element-support__3lVml" style="max-width: 230px; margin-right: 32px" aria-setsize="10" aria-posinset="3" aria-hidden="false">
                      <div id="acsProductBlockV1-2" data-asin="1635575567" data-default-order="2" class="a-section acsProductBlockV1 acsProductBlockV1--default">
                        <a
                          class="a-color-base a-spacing-none a-link-normal"
                          href="https://www.amazon.com/-/he/Court-Thorns-Roses/dp/1635575567/ref=s9_acsd_al_ot_c2_x_2_t?_encoding=UTF8&amp;pf_rd_m=ATVPDKIKX0DER&amp;pf_rd_s=merchandised-search-4&amp;pf_rd_r=YN8249HYJ1MVXNZ1CQDS&amp;pf_rd_p=f97d5a81-6249-42a4-bbde-c5d803739fc6&amp;pf_rd_t=&amp;pf_rd_i=549028"
                        ><div class="a-section a-spacing-base a-spacing-top-micro _carousel_style_product-image__3GTWS acsProductBlockV1__product_image">
                          <img alt="A Court of Thorns and Roses (A Court of Thorns and Roses, 1)" src="https://m.media-amazon.com/images/I/81RrEEMiOCL.AC_SX500.jpg" data-a-hires="https://m.media-amazon.com/images/I/81RrEEMiOCL.AC_SX500.jpg" />
                        </div>
                          <div class="a-section a-spacing-micro acsProductBlockV1__product-title">
                            <span class="a-truncate a-size-base" data-a-word-break="break-word" data-a-max-rows="2" data-a-overflow-marker="&amp;hellip;" style="line-height: 1.3em !important; max-height: 2.6em" data-a-recalculate="false" data-a-updated="true"
                            ><span class="a-truncate-full a-offscreen">A Court of Thorns and Roses (A Court of Thorns and Roses, 1)</span><span class="a-truncate-cut" aria-hidden="true" style="height: 2.6em">A Court of Thorns and Roses (A Court of Th…</span></span
                            >
                          </div>
                          <div class="a-section a-spacing-micro _carousel_style_acsProductBlockV1__wHQrt acsProductBlockV1__contributor" dir="ltr">
                            <span class="a-truncate _carousel_style_contributor__3ItyK acsProductBlockV1__contributor-value a-size-base" data-a-word-break="normal" data-a-max-rows="2" data-a-overflow-marker="&amp;hellip;" style="line-height: 1.3em !important; max-height: 2.6em" data-a-recalculate="false" data-a-updated="true"
                            ><span class="a-truncate-full a-offscreen">Sarah J. Maas</span><span class="a-truncate-cut" aria-hidden="true" style="height: auto">Sarah J. Maas</span></span
                            >
                          </div></a
                        >
                        <div class="a-section a-spacing-micro acsProductBlockV1__binding"><span class="_carousel_style_binding-value__2d_fB acsProductBlockV1__binding-value" dir="ltr">Paperback</span></div>
                        <div class="a-section a-spacing-micro acsProductBlockV1__price" dir="ltr">
                          <span class="a-price acsProductBlockV1__price--buying _carousel_style_price-buying__dYIzO" data-a-size="l" data-a-color="base"
                          ><span class="a-offscreen"><span dir="rtl">\$</span>‎10.05‎</span
                          ><span aria-hidden="true" dir="ltr"
                          ><span class="a-price-symbol" dir="rtl">\$</span>‎<span class="a-price-whole">10<span class="a-price-decimal" dir="ltr">.</span>‎</span><span class="a-price-fraction">05</span></span
                          ></span
                          >‏
                          <span class="a-price a-text-price acsProductBlockV1__price--strikethrough _carousel_style_price-strikethrough__1utX6" data-a-size="s" data-a-strike="true"
                          ><span class="a-offscreen"><span dir="rtl">\$</span>‎19.00‎</span><span aria-hidden="true" dir="ltr"><span dir="rtl">\$</span>‎19.00‎</span></span
                          >‏
                        </div>
                        <div class="a-section a-spacing-micro acsProductBlockV1__review" dir="ltr"><i class="a-icon a-icon-star-medium a-star-medium-4-5"></i><span class="a-color-secondary acsProductBlockV1__rating__review-count"> 263,566</span></div>
                      </div>
                    </li>
                    <li class="a-carousel-card" aria-setsize="10" aria-posinset="4" style="width: 160px; margin-left: 32px; margin-right: 32px">
                      <div id="acsProductBlockV1-3" data-asin="1538774194" data-default-order="3" class="a-section acsProductBlockV1 acsProductBlockV1--default">
                        <a
                          class="a-color-base a-spacing-none a-link-normal"
                          href="https://www.amazon.com/-/he/Quicksilver-Callie-Hart/dp/1538774194/ref=s9_acsd_al_ot_c2_x_3_t?_encoding=UTF8&amp;pf_rd_m=ATVPDKIKX0DER&amp;pf_rd_s=merchandised-search-4&amp;pf_rd_r=YN8249HYJ1MVXNZ1CQDS&amp;pf_rd_p=f97d5a81-6249-42a4-bbde-c5d803739fc6&amp;pf_rd_t=&amp;pf_rd_i=549028"
                        ><div class="a-section a-spacing-base a-spacing-top-micro _carousel_style_product-image__3GTWS acsProductBlockV1__product_image"><img alt="Quicksilver" src="https://m.media-amazon.com/images/I/81qAKMuO0qL.AC_SX500.jpg" data-a-hires="https://m.media-amazon.com/images/I/81qAKMuO0qL.AC_SX500.jpg" /></div>
                          <div class="a-section a-spacing-micro acsProductBlockV1__product-title">
                            <span class="a-truncate a-size-base" data-a-word-break="break-word" data-a-max-rows="2" data-a-overflow-marker="&amp;hellip;" style="line-height: 1.3em !important; max-height: 2.6em" data-a-recalculate="false" data-a-updated="true"
                            ><span class="a-truncate-full a-offscreen">Quicksilver</span><span class="a-truncate-cut" aria-hidden="true" style="height: auto">Quicksilver</span></span
                            >
                          </div>
                          <div class="a-section a-spacing-micro _carousel_style_acsProductBlockV1__wHQrt acsProductBlockV1__contributor" dir="ltr">
                            <span class="a-truncate _carousel_style_contributor__3ItyK acsProductBlockV1__contributor-value a-size-base" data-a-word-break="normal" data-a-max-rows="2" data-a-overflow-marker="&amp;hellip;" style="line-height: 1.3em !important; max-height: 2.6em" data-a-recalculate="false" data-a-updated="true"
                            ><span class="a-truncate-full a-offscreen">Callie Hart</span><span class="a-truncate-cut" aria-hidden="true" style="height: auto">Callie Hart</span></span
                            >
                          </div></a
                        >
                        <div class="a-section a-spacing-micro acsProductBlockV1__binding"><span class="_carousel_style_binding-value__2d_fB acsProductBlockV1__binding-value" dir="ltr">Paperback</span></div>
                        <div class="a-section a-spacing-micro acsProductBlockV1__price" dir="ltr">
                          <span class="a-price acsProductBlockV1__price--buying _carousel_style_price-buying__dYIzO" data-a-size="l" data-a-color="base"
                          ><span class="a-offscreen"><span dir="rtl">\$</span>‎15.61‎</span
                          ><span aria-hidden="true" dir="ltr"
                          ><span class="a-price-symbol" dir="rtl">\$</span>‎<span class="a-price-whole">15<span class="a-price-decimal" dir="ltr">.</span>‎</span><span class="a-price-fraction">61</span></span
                          ></span
                          >‏
                          <span class="a-price a-text-price acsProductBlockV1__price--strikethrough _carousel_style_price-strikethrough__1utX6" data-a-size="s" data-a-strike="true"
                          ><span class="a-offscreen"><span dir="rtl">\$</span>‎21.99‎</span><span aria-hidden="true" dir="ltr"><span dir="rtl">\$</span>‎21.99‎</span></span
                          >‏
                        </div>
                        <div class="a-section a-spacing-micro acsProductBlockV1__review" dir="ltr"><i class="a-icon a-icon-star-medium a-star-medium-4-5"></i><span class="a-color-secondary acsProductBlockV1__rating__review-count"> 98,869</span></div>
                      </div>
                    </li>
                    <li class="a-carousel-card" aria-setsize="10" aria-posinset="5" style="width: 160px; margin-left: 32px; margin-right: 32px">
                      <div id="acsProductBlockV1-4" data-asin="1638932239" data-default-order="4" class="a-section acsProductBlockV1 acsProductBlockV1--default">
                        <a
                          class="a-color-base a-spacing-none a-link-normal"
                          href="https://www.amazon.com/-/he/Lights-Out-Into-Darkness-Novel/dp/1638932239/ref=s9_acsd_al_ot_c2_x_4_t?_encoding=UTF8&amp;pf_rd_m=ATVPDKIKX0DER&amp;pf_rd_s=merchandised-search-4&amp;pf_rd_r=YN8249HYJ1MVXNZ1CQDS&amp;pf_rd_p=f97d5a81-6249-42a4-bbde-c5d803739fc6&amp;pf_rd_t=&amp;pf_rd_i=549028"
                        ><div class="a-section a-spacing-base a-spacing-top-micro _carousel_style_product-image__3GTWS acsProductBlockV1__product_image">
                          <img alt="Lights Out: An Into Darkness Novel (Into Darkness Series)" src="https://m.media-amazon.com/images/I/81GnIlm7XlL.AC_SX500.jpg" data-a-hires="https://m.media-amazon.com/images/I/81GnIlm7XlL.AC_SX500.jpg" />
                        </div>
                          <div class="a-section a-spacing-micro acsProductBlockV1__product-title">
                            <span class="a-truncate a-size-base" data-a-word-break="break-word" data-a-max-rows="2" data-a-overflow-marker="&amp;hellip;" style="line-height: 1.3em !important; max-height: 2.6em" data-a-recalculate="false" data-a-updated="true"
                            ><span class="a-truncate-full a-offscreen">Lights Out: An Into Darkness Novel (Into Darkness Series)</span><span class="a-truncate-cut" aria-hidden="true" style="height: 2.6em">Lights Out: An Into Darkness Novel (Into D…</span></span
                            >
                          </div>
                          <div class="a-section a-spacing-micro _carousel_style_acsProductBlockV1__wHQrt acsProductBlockV1__contributor" dir="ltr">
                            <span class="a-truncate _carousel_style_contributor__3ItyK acsProductBlockV1__contributor-value a-size-base" data-a-word-break="normal" data-a-max-rows="2" data-a-overflow-marker="&amp;hellip;" style="line-height: 1.3em !important; max-height: 2.6em" data-a-recalculate="false" data-a-updated="true"
                            ><span class="a-truncate-full a-offscreen">Navessa Allen</span><span class="a-truncate-cut" aria-hidden="true" style="height: auto">Navessa Allen</span></span
                            >
                          </div></a
                        >
                        <div class="a-section a-spacing-micro acsProductBlockV1__binding"><span class="_carousel_style_binding-value__2d_fB acsProductBlockV1__binding-value" dir="ltr">Paperback</span></div>
                        <div class="a-section a-spacing-micro acsProductBlockV1__price" dir="ltr">
                          <span class="a-price acsProductBlockV1__price--buying _carousel_style_price-buying__dYIzO" data-a-size="l" data-a-color="base"
                          ><span class="a-offscreen"><span dir="rtl">\$</span>‎13.90‎</span
                          ><span aria-hidden="true" dir="ltr"
                          ><span class="a-price-symbol" dir="rtl">\$</span>‎<span class="a-price-whole">13<span class="a-price-decimal" dir="ltr">.</span>‎</span><span class="a-price-fraction">90</span></span
                          ></span
                          >‏
                          <span class="a-price a-text-price acsProductBlockV1__price--strikethrough _carousel_style_price-strikethrough__1utX6" data-a-size="s" data-a-strike="true"
                          ><span class="a-offscreen"><span dir="rtl">\$</span>‎19.00‎</span><span aria-hidden="true" dir="ltr"><span dir="rtl">\$</span>‎19.00‎</span></span
                          >‏
                        </div>
                        <div class="a-section a-spacing-micro acsProductBlockV1__review" dir="ltr"><i class="a-icon a-icon-star-medium a-star-medium-4-5"></i><span class="a-color-secondary acsProductBlockV1__rating__review-count"> 34,759</span></div>
                      </div>
                    </li>
                    <li class="a-carousel-card" aria-setsize="10" aria-posinset="6" style="width: 160px; margin-left: 32px; margin-right: 32px">
                      <div id="acsProductBlockV1-5" data-asin="1250080401" data-default-order="5" class="a-section acsProductBlockV1 acsProductBlockV1--default">
                        <a
                          class="a-color-base a-spacing-none a-link-normal"
                          href="https://www.amazon.com/-/he/Nightingale-Novel-Kristin-Hannah/dp/1250080401/ref=s9_acsd_al_ot_c2_x_5_t?_encoding=UTF8&amp;pf_rd_m=ATVPDKIKX0DER&amp;pf_rd_s=merchandised-search-4&amp;pf_rd_r=YN8249HYJ1MVXNZ1CQDS&amp;pf_rd_p=f97d5a81-6249-42a4-bbde-c5d803739fc6&amp;pf_rd_t=&amp;pf_rd_i=549028"
                        ><div class="a-section a-spacing-base a-spacing-top-micro _carousel_style_product-image__3GTWS acsProductBlockV1__product_image"><img alt="The Nightingale: A Novel" src="https://m.media-amazon.com/images/I/81OkWjcf4WL.AC_SX500.jpg" data-a-hires="https://m.media-amazon.com/images/I/81OkWjcf4WL.AC_SX500.jpg" /></div>
                          <div class="a-section a-spacing-micro acsProductBlockV1__product-title">
                            <span class="a-truncate a-size-base" data-a-word-break="break-word" data-a-max-rows="2" data-a-overflow-marker="&amp;hellip;" style="line-height: 1.3em !important; max-height: 2.6em" data-a-recalculate="false" data-a-updated="true"
                            ><span class="a-truncate-full a-offscreen">The Nightingale: A Novel</span><span class="a-truncate-cut" aria-hidden="true" style="height: auto">The Nightingale: A Novel</span></span
                            >
                          </div>
                          <div class="a-section a-spacing-micro _carousel_style_acsProductBlockV1__wHQrt acsProductBlockV1__contributor" dir="ltr">
                            <span class="a-truncate _carousel_style_contributor__3ItyK acsProductBlockV1__contributor-value a-size-base" data-a-word-break="normal" data-a-max-rows="2" data-a-overflow-marker="&amp;hellip;" style="line-height: 1.3em !important; max-height: 2.6em" data-a-recalculate="false" data-a-updated="true"
                            ><span class="a-truncate-full a-offscreen">Kristin Hannah</span><span class="a-truncate-cut" aria-hidden="true" style="height: auto">Kristin Hannah</span></span
                            >
                          </div></a
                        >
                        <div class="a-section a-spacing-micro acsProductBlockV1__binding"><span class="_carousel_style_binding-value__2d_fB acsProductBlockV1__binding-value" dir="ltr">Paperback</span></div>
                        <div class="a-section a-spacing-micro acsProductBlockV1__price" dir="ltr">
                          <span class="a-price acsProductBlockV1__price--buying _carousel_style_price-buying__dYIzO" data-a-size="l" data-a-color="base"
                          ><span class="a-offscreen"><span dir="rtl">\$</span>‎9.08‎</span
                          ><span aria-hidden="true" dir="ltr"
                          ><span class="a-price-symbol" dir="rtl">\$</span>‎<span class="a-price-whole">9<span class="a-price-decimal" dir="ltr">.</span>‎</span><span class="a-price-fraction">08</span></span
                          ></span
                          >‏
                          <span class="a-price a-text-price acsProductBlockV1__price--strikethrough _carousel_style_price-strikethrough__1utX6" data-a-size="s" data-a-strike="true"
                          ><span class="a-offscreen"><span dir="rtl">\$</span>‎17.99‎</span><span aria-hidden="true" dir="ltr"><span dir="rtl">\$</span>‎17.99‎</span></span
                          >‏
                        </div>
                        <div class="a-section a-spacing-micro acsProductBlockV1__review" dir="ltr"><i class="a-icon a-icon-star-medium a-star-medium-4-5"></i><span class="a-color-secondary acsProductBlockV1__rating__review-count"> 344,154</span></div>
                      </div>
                    </li>
                  </ol>
                </div>
              </div>
              <div class="a-carousel-col a-carousel-right" style="height: 397px; visibility: visible">
                <a
                  class="a-button a-button-image a-carousel-button a-carousel-goto-nextpage"
                  role="button"
                  href="https://www.amazon.com/-/he/Books/b/?_encoding=UTF8&amp;ref=bsm_nav_pill_nyt%2Fie%3DUTF8&amp;node=549028&amp;ref_=cct_cg_bsmpill_1d1&amp;pf_rd_p=fc5805e8-45ff-478e-b466-c5def105947b&amp;pf_rd_r=2A4P6E1NXTV4GYR0ESFF#"
                  id="a-autoid-1"
                  style="top: 158.797px"
                ><span class="a-button-inner"
                ><i class="a-icon a-icon-next"><span class="a-icon-alt">Next page</span></i></span
                ></a
                >
              </div>
            </div>
          </div>
          <span class="a-end aok-hidden"></span>
        </div>
      </div>
      <script>
        if (window.mix_csa) {
          window.mix_csa('[cel_widget_id="carousel_apb-browse_1"]', "#CardInstancePGQT8Pxru2r9IsNWFoQs8Q")("mark", "be");
        }
      </script>
      <script>
        if (window.uet) {
          window.uet("be", "carousel_apb-browse_1", { wb: 1 });
        }
      </script>
      <script>
        if (window.mixTimeout) {
          window.mixTimeout("carousel", "CardInstancePGQT8Pxru2r9IsNWFoQs8Q", 90000);
        }
        P.when("mix:@amzn/mix.client-runtime", "mix:carousel__KqIPI40V").execute(function (runtime, cardModule) {
          runtime.registerCardFactory("CardInstancePGQT8Pxru2r9IsNWFoQs8Q", cardModule).then(function () {
            if (window.mix_csa) {
              window.mix_csa('[cel_widget_id="carousel_apb-browse_1"]', "#CardInstancePGQT8Pxru2r9IsNWFoQs8Q")("mark", "functional");
            }
            if (window.uex) {
              window.uex("ld", "carousel_apb-browse_1", { wb: 1 });
            }
          });
        });
      </script>
      <script>
        P.load.js("https://images-na.ssl-images-amazon.com/images/I/11fJehmVpZL.js?xcp");
      </script>
    </div>
  </div>
</div>` }
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

export default CarouselMismatchFailure;
