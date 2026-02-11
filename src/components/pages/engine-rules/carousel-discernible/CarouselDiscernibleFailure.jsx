import React from "react";
import EngineIssueFailure from "../../../layout/engineIssueFailure";

const CarouselDiscernibleFailure = () => {
  const ruleId = "carousel-discernible";
  const title = `Carousels should have a descriptive label`;
  const description = `Carousels need a label so assistive technology announces them with a clear name, such as “Featured products carousel”. This ensures screen reader users know the widget’s purpose and can differentiate it from other carousels on the page.`;
  const helpText = `Provide a clear label for the carousel using aria-labelledby to reference a visible heading or assign aria-label to the carousel container.`;
  const fixSteps = [
  "Review the HTML structure",
  "Apply proper accessibility attributes",
  "Test with screen readers"
  ];
  const htmlExamples = [
  { filename: "972creative carousels", content: `<div class="content has_slider" style="min-height: 886px">
  <div class="content_inner">
    <div class="q_slider">
      <div class="q_slider_inner">
        <div
          id="qode-972-creative"
          role="region"
          aria-roledescription="carousel"
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
                    <div role="region" aria-roledescription="carousel" class="qode_carousels_holder clearfix two_rows">
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
                              <div class="testimonials_c testimonials_c_carousel" role="region" aria-roledescription="carousel" data-show-navigation="yes" data-animation-speed="" data-auto-rotate-slides="10" data-number-per-slide="1">
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
  { filename: "carousel element no aria label", content: `<div id="test-subject" class="carousel" role="region" aria-roledescription="carousel">
  <ul class="carousel__slides-container">
    <li class="slide">slide 1</li>
    <li class="slide">slide 2</li>
    <li class="slide">slide 3</li>
  </ul>
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

export default CarouselDiscernibleFailure;
