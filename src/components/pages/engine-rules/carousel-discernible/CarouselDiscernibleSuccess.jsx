import React from "react";
import EngineIssueSuccess from "../../../layout/engineIssueSuccess";

const CarouselDiscernibleSuccess = () => {
  const ruleId = "carousel-discernible";
  const title = `Carousels should have a descriptive label`;
  const description = `Carousels need a label so assistive technology announces them with a clear name, such as “Featured products carousel”. This ensures screen reader users know the widget’s purpose and can differentiate it from other carousels on the page.`;
  const helpText = `Provide a clear label for the carousel using aria-labelledby to reference a visible heading or assign aria-label to the carousel container.`;
  const bestPractices = [
  "Follow proper HTML semantics",
  "Ensure screen reader compatibility",
  "Test with assistive technologies"
  ];
  const htmlExamples = [
  { filename: "972creative carousels with discernible text", content: `<div class="content has_slider" style="min-height: 886px">
  <div class="content_inner">
    <div class="q_slider">
      <div class="q_slider_inner">
        <div
          id="qode-972-creative"
          role="region"
          aria-roledescription="carousel-container"
          aria-label="clients"
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
                    <div role="region" aria-roledescription="carousel" aria-label="clients" class="qode_carousels_holder clearfix two_rows">
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
                              <div class="testimonials_c testimonials_c_carousel" role="region" aria-roledescription="carousel" aria-label="testimonials" data-show-navigation="yes" data-animation-speed="" data-auto-rotate-slides="10" data-number-per-slide="1">
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
  { filename: "amazon carousel", content: `<div
  id="desktop-5"
  data-gwi='{"visible":"desktop-5-visible","active":"desktop-5-active"}'
  data-col-span-ws="4"
  data-col-span-sm="3"
  data-order-ws="10"
  data-order-sm="10"
  data-display-at="smws"
  class="gw-col desktop-row gwi-row gw-widget-instrument gw-auto-height csm-placement-id-9929d3ab-edb7-4ef5-a232-26d90f828fa5 desktop-gateway-btf_crs_zg_ts-283155 celwidget pd_rd_wg-O4GI5 pd_rd_w-wg7Ti pd_rd_r-9b128c14-3988-40de-b8d3-c4998a2673ff"
  data-pf_rd_p="9929d3ab-edb7-4ef5-a232-26d90f828fa5"
  data-pd_rd_wg="O4GI5"
  data-pd_rd_w="wg7Ti"
  data-pd_rd_r="9b128c14-3988-40de-b8d3-c4998a2673ff"
  data-ref_="pd_hp_d_btf_crs_zg_bs_283155"
  data-cid="971ea563-5a59-47dd-baa8-f54cde945753"
  data-csa-op-log-render=""
  data-csa-c-type="widget"
  data-csa-c-slot-id="desktop-5"
  data-csa-c-content-id="amzn1.sym.9929d3ab-edb7-4ef5-a232-26d90f828fa5"
  data-csa-c-painter="ameyal-product-shoveler"
  data-csa-c-id="d98o83-lnlaqq-kf4cz3-1wufi5"
  data-cel-widget="desktop-5"
>
  <!--CardsClient-->
  <div class="a-section a-spacing-none" id="CardInstanceV-IDwiAh8cCaaegLSxM5ug" data-card-metrics-id="ameyal-product-shoveler_desktop-gateway-btf_4" data-mix-claimed="true">
    <div id="2c9b984a-2298-4fc3-9202-b89be158c741" class="a-section a-spacing-none shogun-widget card-lite product-shoveler aui-desktop fresh-shoveler">
      <div class="a-section as-title-block">
        <h2 class="as-title-block-left"><span class="a-color-base">Best Sellers in Books</span></h2>
        <span class="as-title-block-right"></span>
      </div>
      <div id="test-subject" role="region" aria-roledescription="carousel" aria-label="news feed" class="a-section a-spacing-none feed-carousel">
        <div class="a-section feed-carousel-viewport">
          <ul class="a-unordered-list a-nostyle a-horizontal feed-carousel-shelf" role="list" style="left: 0px">
            <li data-sgproduct='{"asin":"0593657470"}' class="feed-carousel-card" aria-posinset="1" aria-hidden="false" role="listitem" aria-setsize="30" style="display: inline-block; margin-right: 10px">
              <span class="a-list-item"
                ><a
                  class="a-link-normal"
                  href="/Call-Doctors-Journey-Public-Service/dp/0593657470/?_encoding=UTF8&amp;pd_rd_w=wg7Ti&amp;content-id=amzn1.sym.9929d3ab-edb7-4ef5-a232-26d90f828fa5&amp;pf_rd_p=9929d3ab-edb7-4ef5-a232-26d90f828fa5&amp;pf_rd_r=NYRX6QBXQ8WG32A4Y33P&amp;pd_rd_wg=O4GI5&amp;pd_rd_r=9b128c14-3988-40de-b8d3-c4998a2673ff&amp;ref_=pd_hp_d_btf_crs_zg_bs_283155"
                  ><img alt="On Call: A Doctor's Journey in Public Service" src="https://m.media-amazon.com/images/I/81OwvBYKmxL._AC_SY200_.jpg" class="product-image" height="200px" data-a-hires="https://m.media-amazon.com/images/I/81OwvBYKmxL._AC_SY400_.jpg" /></a
              ></span>
            </li>
            <li data-sgproduct='{"asin":"1070527718"}' class="feed-carousel-card" aria-posinset="2" aria-hidden="false" role="listitem" aria-setsize="30" style="display: inline-block; margin-right: 10px">
              <span class="a-list-item"
                ><a
                  class="a-link-normal"
                  href="/Dad-Want-Hear-Your-Story/dp/1070527718/?_encoding=UTF8&amp;pd_rd_w=wg7Ti&amp;content-id=amzn1.sym.9929d3ab-edb7-4ef5-a232-26d90f828fa5&amp;pf_rd_p=9929d3ab-edb7-4ef5-a232-26d90f828fa5&amp;pf_rd_r=NYRX6QBXQ8WG32A4Y33P&amp;pd_rd_wg=O4GI5&amp;pd_rd_r=9b128c14-3988-40de-b8d3-c4998a2673ff&amp;ref_=pd_hp_d_btf_crs_zg_bs_283155"
                  ><img alt="Dad, I Want to Hear Your Story: A Father’s Guided Journal To Share His Life &amp; His Love (Hear Your Story Books)" src="https://m.media-amazon.com/images/I/51ZvZFJOsrL._AC_SY200_.jpg" class="product-image" height="200px" data-a-hires="https://m.media-amazon.com/images/I/51ZvZFJOsrL._AC_SY400_.jpg" /></a
              ></span>
            </li>
            <li data-sgproduct='{"asin":"1464221138"}' class="feed-carousel-card" aria-posinset="3" aria-hidden="false" role="listitem" aria-setsize="30" style="display: inline-block; margin-right: 10px">
              <span class="a-list-item"
                ><a
                  class="a-link-normal"
                  href="/Housemaid-Watching-Freida-McFadden/dp/1464221138/?_encoding=UTF8&amp;pd_rd_w=wg7Ti&amp;content-id=amzn1.sym.9929d3ab-edb7-4ef5-a232-26d90f828fa5&amp;pf_rd_p=9929d3ab-edb7-4ef5-a232-26d90f828fa5&amp;pf_rd_r=NYRX6QBXQ8WG32A4Y33P&amp;pd_rd_wg=O4GI5&amp;pd_rd_r=9b128c14-3988-40de-b8d3-c4998a2673ff&amp;ref_=pd_hp_d_btf_crs_zg_bs_283155"
                  ><img alt="The Housemaid Is Watching" src="https://m.media-amazon.com/images/I/91OSM58Y-pL._AC_SY200_.jpg" class="product-image" height="200px" data-a-hires="https://m.media-amazon.com/images/I/91OSM58Y-pL._AC_SY400_.jpg" /></a
              ></span>
            </li>
            <li data-sgproduct='{"asin":"1250178630"}' class="feed-carousel-card" aria-posinset="4" aria-hidden="false" role="listitem" aria-setsize="30" style="display: inline-block; margin-right: 10px">
              <span class="a-list-item"
                ><a
                  class="a-link-normal"
                  href="/Women-Novel-Kristin-Hannah/dp/1250178630/?_encoding=UTF8&amp;pd_rd_w=wg7Ti&amp;content-id=amzn1.sym.9929d3ab-edb7-4ef5-a232-26d90f828fa5&amp;pf_rd_p=9929d3ab-edb7-4ef5-a232-26d90f828fa5&amp;pf_rd_r=NYRX6QBXQ8WG32A4Y33P&amp;pd_rd_wg=O4GI5&amp;pd_rd_r=9b128c14-3988-40de-b8d3-c4998a2673ff&amp;ref_=pd_hp_d_btf_crs_zg_bs_283155"
                  ><img alt="The Women: A Novel" src="https://m.media-amazon.com/images/I/913C+MR3S5L._AC_SY200_.jpg" class="product-image" height="200px" data-a-hires="https://m.media-amazon.com/images/I/913C+MR3S5L._AC_SY400_.jpg" /></a
              ></span>
            </li>
            <li data-sgproduct='{"asin":"1538742578"}' class="feed-carousel-card" aria-posinset="5" aria-hidden="false" role="listitem" aria-setsize="30" style="display: inline-block; margin-right: 10px">
              <span class="a-list-item"
                ><a
                  class="a-link-normal"
                  href="/Housemaid-Freida-McFadden/dp/1538742578/?_encoding=UTF8&amp;pd_rd_w=wg7Ti&amp;content-id=amzn1.sym.9929d3ab-edb7-4ef5-a232-26d90f828fa5&amp;pf_rd_p=9929d3ab-edb7-4ef5-a232-26d90f828fa5&amp;pf_rd_r=NYRX6QBXQ8WG32A4Y33P&amp;pd_rd_wg=O4GI5&amp;pd_rd_r=9b128c14-3988-40de-b8d3-c4998a2673ff&amp;ref_=pd_hp_d_btf_crs_zg_bs_283155"
                  ><img alt="The Housemaid" src="https://m.media-amazon.com/images/I/81AHTyq2wVL._AC_SY200_.jpg" class="product-image" height="200px" data-a-hires="https://m.media-amazon.com/images/I/81AHTyq2wVL._AC_SY400_.jpg" /></a
              ></span>
            </li>
            <li data-sgproduct='{"asin":"0593655036"}' class="feed-carousel-card" aria-posinset="6" aria-hidden="false" role="listitem" aria-setsize="30" style="margin-right: 10px; display: inline-block">
              <span class="a-list-item"
                ><a
                  class="a-link-normal"
                  href="/Anxious-Generation-Rewiring-Childhood-Epidemic/dp/0593655036/?_encoding=UTF8&amp;pd_rd_w=wg7Ti&amp;content-id=amzn1.sym.9929d3ab-edb7-4ef5-a232-26d90f828fa5&amp;pf_rd_p=9929d3ab-edb7-4ef5-a232-26d90f828fa5&amp;pf_rd_r=NYRX6QBXQ8WG32A4Y33P&amp;pd_rd_wg=O4GI5&amp;pd_rd_r=9b128c14-3988-40de-b8d3-c4998a2673ff&amp;ref_=pd_hp_d_btf_crs_zg_bs_283155"
                  ><img alt="The Anxious Generation: How the Great Rewiring of Childhood Is Causing an Epidemic of Mental Illness" src="https://m.media-amazon.com/images/I/81XP4hEXDXL._AC_SY200_.jpg" class="product-image" height="200px" data-a-hires="https://m.media-amazon.com/images/I/81XP4hEXDXL._AC_SY400_.jpg" /></a
              ></span>
            </li>
            <li data-sgproduct='{"asin":"0316565075"}' class="feed-carousel-card" aria-setsize="30" style="margin-right: 10px; display: inline-block" aria-posinset="7" aria-hidden="false" role="listitem">
              <span class="a-list-item"
                ><a
                  class="a-link-normal"
                  href="/Eruption-Coming_Michael-Crichton-Patterson_the-Thriller/dp/0316565075/?_encoding=UTF8&amp;pd_rd_w=wg7Ti&amp;content-id=amzn1.sym.9929d3ab-edb7-4ef5-a232-26d90f828fa5&amp;pf_rd_p=9929d3ab-edb7-4ef5-a232-26d90f828fa5&amp;pf_rd_r=NYRX6QBXQ8WG32A4Y33P&amp;pd_rd_wg=O4GI5&amp;pd_rd_r=9b128c14-3988-40de-b8d3-c4998a2673ff&amp;ref_=pd_hp_d_btf_crs_zg_bs_283155"
                  ><img alt="Eruption: Following Jurassic Park, Michael Crichton Started Another Masterpiece―James Patterson Just Finished It" src="https://m.media-amazon.com/images/I/81SIQfF-aGL._AC_SY200_.jpg" class="product-image" height="200px" data-a-hires="https://m.media-amazon.com/images/I/81SIQfF-aGL._AC_SY400_.jpg" /></a
              ></span>
            </li>
            <li data-sgproduct='{"asin":"0349132615"}' class="feed-carousel-card" aria-setsize="30" style="margin-right: 10px; display: inline-block" aria-posinset="8" aria-hidden="false" role="listitem">
              <span class="a-list-item"
                ><a
                  class="a-link-normal"
                  href="/Housemaids-Secret-Freida-McFadden/dp/0349132615/?_encoding=UTF8&amp;pd_rd_w=wg7Ti&amp;content-id=amzn1.sym.9929d3ab-edb7-4ef5-a232-26d90f828fa5&amp;pf_rd_p=9929d3ab-edb7-4ef5-a232-26d90f828fa5&amp;pf_rd_r=NYRX6QBXQ8WG32A4Y33P&amp;pd_rd_wg=O4GI5&amp;pd_rd_r=9b128c14-3988-40de-b8d3-c4998a2673ff&amp;ref_=pd_hp_d_btf_crs_zg_bs_283155"
                  ><img alt="The Housemaid's Secret" src="https://m.media-amazon.com/images/I/81LZXcfKqJL._AC_SY200_.jpg" class="product-image" height="200px" data-a-hires="https://m.media-amazon.com/images/I/81LZXcfKqJL._AC_SY400_.jpg" /></a
              ></span>
            </li>
            <li data-sgproduct='{"asin":"0735211299"}' class="feed-carousel-card" aria-setsize="30" style="margin-right: 10px; display: inline-block" aria-posinset="9" aria-hidden="false" role="listitem">
              <span class="a-list-item"
                ><a
                  class="a-link-normal"
                  href="/Atomic-Habits-Proven-Build-Break/dp/0735211299/?_encoding=UTF8&amp;pd_rd_w=wg7Ti&amp;content-id=amzn1.sym.9929d3ab-edb7-4ef5-a232-26d90f828fa5&amp;pf_rd_p=9929d3ab-edb7-4ef5-a232-26d90f828fa5&amp;pf_rd_r=NYRX6QBXQ8WG32A4Y33P&amp;pd_rd_wg=O4GI5&amp;pd_rd_r=9b128c14-3988-40de-b8d3-c4998a2673ff&amp;ref_=pd_hp_d_btf_crs_zg_bs_283155"
                  ><img alt="Atomic Habits: An Easy &amp; Proven Way to Build Good Habits &amp; Break Bad Ones" src="https://m.media-amazon.com/images/I/81YkqyaFVEL._AC_SY200_.jpg" class="product-image" height="200px" data-a-hires="https://m.media-amazon.com/images/I/81YkqyaFVEL._AC_SY400_.jpg" /></a
              ></span>
            </li>
            <li data-sgproduct='{"asin":"0063389428"}' class="feed-carousel-card" aria-setsize="30" style="margin-right: 10px; display: inline-block" aria-posinset="10" aria-hidden="false" role="listitem">
              <span class="a-list-item"
                ><a
                  class="a-link-normal"
                  href="/War-Warriors-Behind-Betrayal-Keep/dp/0063389428/?_encoding=UTF8&amp;pd_rd_w=wg7Ti&amp;content-id=amzn1.sym.9929d3ab-edb7-4ef5-a232-26d90f828fa5&amp;pf_rd_p=9929d3ab-edb7-4ef5-a232-26d90f828fa5&amp;pf_rd_r=NYRX6QBXQ8WG32A4Y33P&amp;pd_rd_wg=O4GI5&amp;pd_rd_r=9b128c14-3988-40de-b8d3-c4998a2673ff&amp;ref_=pd_hp_d_btf_crs_zg_bs_283155"
                  ><img alt="The War on Warriors: Behind the Betrayal of the Men Who Keep Us Free" src="https://m.media-amazon.com/images/I/7187im2CwUL._AC_SY200_.jpg" class="product-image" height="200px" data-a-hires="https://m.media-amazon.com/images/I/7187im2CwUL._AC_SY400_.jpg" /></a
              ></span>
            </li>
            <li data-sgproduct='{"asin":"1081439793"}' class="feed-carousel-card" aria-setsize="30" style="margin-right: 10px; display: inline-block" aria-posinset="11" aria-hidden="false" role="listitem">
              <span class="a-list-item"
                ><a
                  class="a-link-normal"
                  href="/Mom-Want-Hear-Your-Story/dp/1081439793/?_encoding=UTF8&amp;pd_rd_w=wg7Ti&amp;content-id=amzn1.sym.9929d3ab-edb7-4ef5-a232-26d90f828fa5&amp;pf_rd_p=9929d3ab-edb7-4ef5-a232-26d90f828fa5&amp;pf_rd_r=NYRX6QBXQ8WG32A4Y33P&amp;pd_rd_wg=O4GI5&amp;pd_rd_r=9b128c14-3988-40de-b8d3-c4998a2673ff&amp;ref_=pd_hp_d_btf_crs_zg_bs_283155"
                  ><img alt="Mom, I Want to Hear Your Story: A Mother’s Guided Journal To Share Her Life &amp; Her Love (Hear Your Story Books)" src="https://m.media-amazon.com/images/I/71sOqrd6JHL._AC_SY200_.jpg" class="product-image" height="200px" data-a-hires="https://m.media-amazon.com/images/I/71sOqrd6JHL._AC_SY400_.jpg" /></a
              ></span>
            </li>
            <li data-sgproduct='{"asin":"0140280197"}' class="feed-carousel-card" aria-setsize="30" style="margin-right: 10px; display: inline-block" aria-posinset="12" aria-hidden="false" role="listitem">
              <span class="a-list-item"
                ><a
                  class="a-link-normal"
                  href="/48-Laws-Power-Robert-Greene/dp/0140280197/?_encoding=UTF8&amp;pd_rd_w=wg7Ti&amp;content-id=amzn1.sym.9929d3ab-edb7-4ef5-a232-26d90f828fa5&amp;pf_rd_p=9929d3ab-edb7-4ef5-a232-26d90f828fa5&amp;pf_rd_r=NYRX6QBXQ8WG32A4Y33P&amp;pd_rd_wg=O4GI5&amp;pd_rd_r=9b128c14-3988-40de-b8d3-c4998a2673ff&amp;ref_=pd_hp_d_btf_crs_zg_bs_283155"
                  ><img alt="The 48 Laws of Power" src="https://m.media-amazon.com/images/I/611X8GI7hpL._AC_SY200_.jpg" class="product-image" height="200px" data-a-hires="https://m.media-amazon.com/images/I/611X8GI7hpL._AC_SY400_.jpg" /></a
              ></span>
            </li>
            <li data-sgproduct='{"asin":"0316258873"}' class="feed-carousel-card" aria-setsize="30" style="margin-right: 10px; display: inline-block" aria-posinset="13" aria-hidden="false" role="listitem">
              <span class="a-list-item"
                ><a
                  class="a-link-normal"
                  href="/Swan-Song-Elin-Hilderbrand/dp/0316258873/?_encoding=UTF8&amp;pd_rd_w=wg7Ti&amp;content-id=amzn1.sym.9929d3ab-edb7-4ef5-a232-26d90f828fa5&amp;pf_rd_p=9929d3ab-edb7-4ef5-a232-26d90f828fa5&amp;pf_rd_r=NYRX6QBXQ8WG32A4Y33P&amp;pd_rd_wg=O4GI5&amp;pd_rd_r=9b128c14-3988-40de-b8d3-c4998a2673ff&amp;ref_=pd_hp_d_btf_crs_zg_bs_283155"
                  ><img alt="Swan Song" src="https://m.media-amazon.com/images/I/71dSn3QCY6L._AC_SY200_.jpg" class="product-image" height="200px" data-a-hires="https://m.media-amazon.com/images/I/71dSn3QCY6L._AC_SY400_.jpg" /></a
              ></span>
            </li>
            <li data-sgproduct='{"asin":"1501110365"}' class="feed-carousel-card" aria-setsize="30" style="margin-right: 10px; display: inline-block" aria-posinset="14" aria-hidden="false" role="listitem">
              <span class="a-list-item"
                ><a
                  class="a-link-normal"
                  href="/Ends-Us-Novel-Colleen-Hoover/dp/1501110365/?_encoding=UTF8&amp;pd_rd_w=wg7Ti&amp;content-id=amzn1.sym.9929d3ab-edb7-4ef5-a232-26d90f828fa5&amp;pf_rd_p=9929d3ab-edb7-4ef5-a232-26d90f828fa5&amp;pf_rd_r=NYRX6QBXQ8WG32A4Y33P&amp;pd_rd_wg=O4GI5&amp;pd_rd_r=9b128c14-3988-40de-b8d3-c4998a2673ff&amp;ref_=pd_hp_d_btf_crs_zg_bs_283155"
                  ><img alt="It Ends with Us: A Novel (1)" src="https://m.media-amazon.com/images/I/813aV273-rL._AC_SY200_.jpg" class="product-image" height="200px" data-a-hires="https://m.media-amazon.com/images/I/813aV273-rL._AC_SY400_.jpg" /></a
              ></span>
            </li>
            <li data-sgproduct='{"asin":"1483815803"}' class="feed-carousel-card" aria-setsize="30" style="margin-right: 10px; display: inline-block" aria-posinset="15" aria-hidden="false" role="listitem">
              <span class="a-list-item"
                ><a
                  class="a-link-normal"
                  href="/Summer-Bridge-Activities%C2%AE-Activities/dp/1483815803/?_encoding=UTF8&amp;pd_rd_w=wg7Ti&amp;content-id=amzn1.sym.9929d3ab-edb7-4ef5-a232-26d90f828fa5&amp;pf_rd_p=9929d3ab-edb7-4ef5-a232-26d90f828fa5&amp;pf_rd_r=NYRX6QBXQ8WG32A4Y33P&amp;pd_rd_wg=O4GI5&amp;pd_rd_r=9b128c14-3988-40de-b8d3-c4998a2673ff&amp;ref_=pd_hp_d_btf_crs_zg_bs_283155"
                  ><img alt="Summer Bridge Activities Kindergarten to 1st Grade Workbooks, Math, Reading Comprehension, Writing, Science, Fitness,..." src="https://m.media-amazon.com/images/I/81xAm7tsXML._AC_SY200_.jpg" class="product-image" height="200px" data-a-hires="https://m.media-amazon.com/images/I/81xAm7tsXML._AC_SY400_.jpg" /></a
              ></span>
            </li>
            <li data-sgproduct='{"asin":"1483815838"}' class="feed-carousel-card" aria-setsize="30" style="margin-right: 10px; display: inline-block" aria-posinset="16" aria-hidden="false" role="listitem">
              <span class="a-list-item"
                ><a
                  class="a-link-normal"
                  href="/Summer-Bridge-Activities%C2%AE-Activities/dp/1483815838/?_encoding=UTF8&amp;pd_rd_w=wg7Ti&amp;content-id=amzn1.sym.9929d3ab-edb7-4ef5-a232-26d90f828fa5&amp;pf_rd_p=9929d3ab-edb7-4ef5-a232-26d90f828fa5&amp;pf_rd_r=NYRX6QBXQ8WG32A4Y33P&amp;pd_rd_wg=O4GI5&amp;pd_rd_r=9b128c14-3988-40de-b8d3-c4998a2673ff&amp;ref_=pd_hp_d_btf_crs_zg_bs_283155"
                  ><img alt="Summer Bridge Activities 3rd to 4th Grade Workbook, Math, Reading Comprehension, Writing, Science, Social Studies,..." src="https://m.media-amazon.com/images/I/81CgE6pRb0L._AC_SY200_.jpg" class="product-image" height="200px" data-a-hires="https://m.media-amazon.com/images/I/81CgE6pRb0L._AC_SY400_.jpg" /></a
              ></span>
            </li>
            <li data-sgproduct='{"asin":"1087852714"}' class="feed-carousel-card" aria-setsize="30" style="margin-right: 10px; display: inline-block" aria-posinset="17" aria-hidden="false" role="listitem">
              <span class="a-list-item"
                ><a
                  class="a-link-normal"
                  href="/Dad-Want-Hear-Your-Story/dp/1087852714/?_encoding=UTF8&amp;pd_rd_w=wg7Ti&amp;content-id=amzn1.sym.9929d3ab-edb7-4ef5-a232-26d90f828fa5&amp;pf_rd_p=9929d3ab-edb7-4ef5-a232-26d90f828fa5&amp;pf_rd_r=NYRX6QBXQ8WG32A4Y33P&amp;pd_rd_wg=O4GI5&amp;pd_rd_r=9b128c14-3988-40de-b8d3-c4998a2673ff&amp;ref_=pd_hp_d_btf_crs_zg_bs_283155"
                  ><img alt="Dad, I Want to Hear Your Story: A Father's Guided Journal to Share His Life &amp; His Love" src="https://m.media-amazon.com/images/I/51dAy6ohGIL._AC_SY200_.jpg" class="product-image" height="200px" data-a-hires="https://m.media-amazon.com/images/I/51dAy6ohGIL._AC_SY400_.jpg" /></a
              ></span>
            </li>
            <li data-sgproduct='{"asin":"1492667838"}' class="feed-carousel-card" aria-setsize="30" style="margin-right: 10px; display: inline-block" aria-posinset="18" aria-hidden="false" role="listitem">
              <span class="a-list-item"
                ><a
                  class="a-link-normal"
                  href="/Why-Daughter-Needs-Gregory-Lang/dp/1492667838/?_encoding=UTF8&amp;pd_rd_w=wg7Ti&amp;content-id=amzn1.sym.9929d3ab-edb7-4ef5-a232-26d90f828fa5&amp;pf_rd_p=9929d3ab-edb7-4ef5-a232-26d90f828fa5&amp;pf_rd_r=NYRX6QBXQ8WG32A4Y33P&amp;pd_rd_wg=O4GI5&amp;pd_rd_r=9b128c14-3988-40de-b8d3-c4998a2673ff&amp;ref_=pd_hp_d_btf_crs_zg_bs_283155"
                  ><img alt="Why a Daughter Needs a Dad: Celebrate Your Father Daughter Bond this Father's Day with this Special Picture Book!..." src="https://m.media-amazon.com/images/I/81F30JDZU9L._AC_SY200_.jpg" class="product-image" height="200px" data-a-hires="https://m.media-amazon.com/images/I/81F30JDZU9L._AC_SY400_.jpg" /></a
              ></span>
            </li>
            <li data-sgproduct='{"asin":"148381582X"}' class="feed-carousel-card" aria-setsize="30" style="margin-right: 10px; display: inline-block" aria-posinset="19" aria-hidden="false" role="listitem">
              <span class="a-list-item"
                ><a
                  class="a-link-normal"
                  href="/Summer-Bridge-Activities%C2%AE-Grades-Activities/dp/148381582X/?_encoding=UTF8&amp;pd_rd_w=wg7Ti&amp;content-id=amzn1.sym.9929d3ab-edb7-4ef5-a232-26d90f828fa5&amp;pf_rd_p=9929d3ab-edb7-4ef5-a232-26d90f828fa5&amp;pf_rd_r=NYRX6QBXQ8WG32A4Y33P&amp;pd_rd_wg=O4GI5&amp;pd_rd_r=9b128c14-3988-40de-b8d3-c4998a2673ff&amp;ref_=pd_hp_d_btf_crs_zg_bs_283155"
                  ><img alt="Summer Bridge Activities 2nd to 3rd Grade Workbook, Math, Reading Comprehension, Writing, Science, Social Studies,..." src="https://m.media-amazon.com/images/I/81U6MfN1ZPL._AC_SY200_.jpg" class="product-image" height="200px" data-a-hires="https://m.media-amazon.com/images/I/81U6MfN1ZPL._AC_SY400_.jpg" /></a
              ></span>
            </li>
            <li data-sgproduct='{"asin":"1635575567"}' class="feed-carousel-card" aria-setsize="30" style="margin-right: 10px; display: inline-block" aria-posinset="20" aria-hidden="false" role="listitem">
              <span class="a-list-item"
                ><a
                  class="a-link-normal"
                  href="/Court-Thorns-Roses-Sarah-Maas/dp/1635575567/?_encoding=UTF8&amp;pd_rd_w=wg7Ti&amp;content-id=amzn1.sym.9929d3ab-edb7-4ef5-a232-26d90f828fa5&amp;pf_rd_p=9929d3ab-edb7-4ef5-a232-26d90f828fa5&amp;pf_rd_r=NYRX6QBXQ8WG32A4Y33P&amp;pd_rd_wg=O4GI5&amp;pd_rd_r=9b128c14-3988-40de-b8d3-c4998a2673ff&amp;ref_=pd_hp_d_btf_crs_zg_bs_283155"
                  ><img alt="A Court of Thorns and Roses (A Court of Thorns and Roses, 1)" src="https://m.media-amazon.com/images/I/81RrEEMiOCL._AC_SY200_.jpg" class="product-image" height="200px" data-a-hires="https://m.media-amazon.com/images/I/81RrEEMiOCL._AC_SY400_.jpg" /></a
              ></span>
            </li>
            <li data-sgproduct='{"asin":"1483815811"}' class="feed-carousel-card" aria-setsize="30" style="margin-right: 10px; display: inline-block" aria-posinset="21" aria-hidden="false" role="listitem">
              <span class="a-list-item"
                ><a
                  class="a-link-normal"
                  href="/Summer-Bridge-Activities%C2%AE-Grades-Activities/dp/1483815811/?_encoding=UTF8&amp;pd_rd_w=wg7Ti&amp;content-id=amzn1.sym.9929d3ab-edb7-4ef5-a232-26d90f828fa5&amp;pf_rd_p=9929d3ab-edb7-4ef5-a232-26d90f828fa5&amp;pf_rd_r=NYRX6QBXQ8WG32A4Y33P&amp;pd_rd_wg=O4GI5&amp;pd_rd_r=9b128c14-3988-40de-b8d3-c4998a2673ff&amp;ref_=pd_hp_d_btf_crs_zg_bs_283155"
                  ><img alt="Summer Bridge Activities 1st Grade Workbooks to 2nd Grade Workbooks, Math, Reading Comprehension, Writing, Science..." src="https://m.media-amazon.com/images/I/812VfWC0-YL._AC_SY200_.jpg" class="product-image" height="200px" data-a-hires="https://m.media-amazon.com/images/I/812VfWC0-YL._AC_SY400_.jpg" /></a
              ></span>
            </li>
            <li data-sgproduct='{"asin":"0385348746"}' class="feed-carousel-card" aria-setsize="30" style="margin-right: 10px; display: inline-block" aria-posinset="22" aria-hidden="false" role="listitem">
              <span class="a-list-item"
                ><a
                  class="a-link-normal"
                  href="/Demon-Unrest-Hubris-Heartbreak-Heroism/dp/0385348746/?_encoding=UTF8&amp;pd_rd_w=wg7Ti&amp;content-id=amzn1.sym.9929d3ab-edb7-4ef5-a232-26d90f828fa5&amp;pf_rd_p=9929d3ab-edb7-4ef5-a232-26d90f828fa5&amp;pf_rd_r=NYRX6QBXQ8WG32A4Y33P&amp;pd_rd_wg=O4GI5&amp;pd_rd_r=9b128c14-3988-40de-b8d3-c4998a2673ff&amp;ref_=pd_hp_d_btf_crs_zg_bs_283155"
                  ><img alt="The Demon of Unrest: A Saga of Hubris, Heartbreak, and Heroism at the Dawn of the Civil War" src="https://m.media-amazon.com/images/I/81erI7sNo5L._AC_SY200_.jpg" class="product-image" height="200px" data-a-hires="https://m.media-amazon.com/images/I/81erI7sNo5L._AC_SY400_.jpg" /></a
              ></span>
            </li>
            <li data-sgproduct='{"asin":"1483815846"}' class="feed-carousel-card" aria-setsize="30" style="margin-right: 10px; display: inline-block" aria-posinset="23" aria-hidden="false" role="listitem">
              <span class="a-list-item"
                ><a
                  class="a-link-normal"
                  href="/Summer-Bridge-Activities%C2%AE-Grades-Activities/dp/1483815846/?_encoding=UTF8&amp;pd_rd_w=wg7Ti&amp;content-id=amzn1.sym.9929d3ab-edb7-4ef5-a232-26d90f828fa5&amp;pf_rd_p=9929d3ab-edb7-4ef5-a232-26d90f828fa5&amp;pf_rd_r=NYRX6QBXQ8WG32A4Y33P&amp;pd_rd_wg=O4GI5&amp;pd_rd_r=9b128c14-3988-40de-b8d3-c4998a2673ff&amp;ref_=pd_hp_d_btf_crs_zg_bs_283155"
                  ><img alt="Summer Bridge Activities 4th to 5th Grade Workbook, Math, Reading Comprehension, Writing, Science, Social Studies,..." src="https://m.media-amazon.com/images/I/81mPc9L+fjL._AC_SY200_.jpg" class="product-image" height="200px" data-a-hires="https://m.media-amazon.com/images/I/81mPc9L+fjL._AC_SY400_.jpg" /></a
              ></span>
            </li>
            <li data-sgproduct='{"asin":"1538704439"}' class="feed-carousel-card" aria-setsize="30" style="margin-right: 10px; display: inline-block" aria-posinset="24" aria-hidden="false" role="listitem">
              <span class="a-list-item"
                ><a
                  class="a-link-normal"
                  href="/Just-Summer-Abby-Jimenez/dp/1538704439/?_encoding=UTF8&amp;pd_rd_w=wg7Ti&amp;content-id=amzn1.sym.9929d3ab-edb7-4ef5-a232-26d90f828fa5&amp;pf_rd_p=9929d3ab-edb7-4ef5-a232-26d90f828fa5&amp;pf_rd_r=NYRX6QBXQ8WG32A4Y33P&amp;pd_rd_wg=O4GI5&amp;pd_rd_r=9b128c14-3988-40de-b8d3-c4998a2673ff&amp;ref_=pd_hp_d_btf_crs_zg_bs_283155"
                  ><img alt="Just for the Summer" src="https://m.media-amazon.com/images/I/81tVBUv75vL._AC_SY200_.jpg" class="product-image" height="200px" data-a-hires="https://m.media-amazon.com/images/I/81tVBUv75vL._AC_SY400_.jpg" /></a
              ></span>
            </li>
            <li data-sgproduct='{"asin":"0679805273"}' class="feed-carousel-card" aria-setsize="30" style="margin-right: 10px; display: inline-block" aria-posinset="25" aria-hidden="false" role="listitem">
              <span class="a-list-item"
                ><a
                  class="a-link-normal"
                  href="/Oh-Places-Youll-Dr-Seuss/dp/0679805273/?_encoding=UTF8&amp;pd_rd_w=wg7Ti&amp;content-id=amzn1.sym.9929d3ab-edb7-4ef5-a232-26d90f828fa5&amp;pf_rd_p=9929d3ab-edb7-4ef5-a232-26d90f828fa5&amp;pf_rd_r=NYRX6QBXQ8WG32A4Y33P&amp;pd_rd_wg=O4GI5&amp;pd_rd_r=9b128c14-3988-40de-b8d3-c4998a2673ff&amp;ref_=pd_hp_d_btf_crs_zg_bs_283155"
                  ><img alt="Oh, the Places You'll Go!" src="https://m.media-amazon.com/images/I/61AiILuAb9L._AC_SY200_.jpg" class="product-image" height="200px" data-a-hires="https://m.media-amazon.com/images/I/61AiILuAb9L._AC_SY400_.jpg" /></a
              ></span>
            </li>
            <li data-sgproduct='{"asin":"1952568137"}' class="feed-carousel-card" aria-setsize="30" style="margin-right: 10px; display: inline-block" aria-posinset="26" aria-hidden="false" role="listitem">
              <span class="a-list-item"
                ><a
                  class="a-link-normal"
                  href="/Tell-Your-Life-Story-Dad/dp/1952568137/?_encoding=UTF8&amp;pd_rd_w=wg7Ti&amp;content-id=amzn1.sym.9929d3ab-edb7-4ef5-a232-26d90f828fa5&amp;pf_rd_p=9929d3ab-edb7-4ef5-a232-26d90f828fa5&amp;pf_rd_r=NYRX6QBXQ8WG32A4Y33P&amp;pd_rd_wg=O4GI5&amp;pd_rd_r=9b128c14-3988-40de-b8d3-c4998a2673ff&amp;ref_=pd_hp_d_btf_crs_zg_bs_283155"
                  ><img alt="Tell Me Your Life Story, Dad: A Father’s Guided Journal and Memory Keepsake Book (Tell Me Your Life Story® Series Books)" src="https://m.media-amazon.com/images/I/41+UDzZ2Y5S._AC_SY200_.jpg" class="product-image" height="200px" data-a-hires="https://m.media-amazon.com/images/I/41+UDzZ2Y5S._AC_SY400_.jpg" /></a
              ></span>
            </li>
            <li data-sgproduct='{"asin":"1483815854"}' class="feed-carousel-card" aria-setsize="30" style="margin-right: 10px; display: inline-block" aria-posinset="27" aria-hidden="false" role="listitem">
              <span class="a-list-item"
                ><a
                  class="a-link-normal"
                  href="/Summer-Bridge-Activities%C2%AE-Activities/dp/1483815854/?_encoding=UTF8&amp;pd_rd_w=wg7Ti&amp;content-id=amzn1.sym.9929d3ab-edb7-4ef5-a232-26d90f828fa5&amp;pf_rd_p=9929d3ab-edb7-4ef5-a232-26d90f828fa5&amp;pf_rd_r=NYRX6QBXQ8WG32A4Y33P&amp;pd_rd_wg=O4GI5&amp;pd_rd_r=9b128c14-3988-40de-b8d3-c4998a2673ff&amp;ref_=pd_hp_d_btf_crs_zg_bs_283155"
                  ><img alt="Summer Bridge Activities 5th to 6th Grade Workbooks, Math, Reading Comprehension, Writing, Science, Social Studies,..." src="https://m.media-amazon.com/images/I/81iCTz8d3uL._AC_SY200_.jpg" class="product-image" height="200px" data-a-hires="https://m.media-amazon.com/images/I/81iCTz8d3uL._AC_SY400_.jpg" /></a
              ></span>
            </li>
            <li data-sgproduct='{"asin":"1250080401"}' class="feed-carousel-card" aria-setsize="30" style="margin-right: 10px; display: inline-block" aria-posinset="28" aria-hidden="false" role="listitem">
              <span class="a-list-item"
                ><a
                  class="a-link-normal"
                  href="/Nightingale-Novel-Kristin-Hannah/dp/1250080401/?_encoding=UTF8&amp;pd_rd_w=wg7Ti&amp;content-id=amzn1.sym.9929d3ab-edb7-4ef5-a232-26d90f828fa5&amp;pf_rd_p=9929d3ab-edb7-4ef5-a232-26d90f828fa5&amp;pf_rd_r=NYRX6QBXQ8WG32A4Y33P&amp;pd_rd_wg=O4GI5&amp;pd_rd_r=9b128c14-3988-40de-b8d3-c4998a2673ff&amp;ref_=pd_hp_d_btf_crs_zg_bs_283155"
                  ><img alt="The Nightingale: A Novel" src="https://m.media-amazon.com/images/I/81OkWjcf4WL._AC_SY200_.jpg" class="product-image" height="200px" data-a-hires="https://m.media-amazon.com/images/I/81OkWjcf4WL._AC_SY400_.jpg" /></a
              ></span>
            </li>
            <li data-sgproduct='{"asin":"1635575583"}' class="feed-carousel-card" aria-setsize="30" style="margin-right: 10px; display: inline-block" aria-posinset="29" aria-hidden="false" role="listitem">
              <span class="a-list-item"
                ><a
                  class="a-link-normal"
                  href="/Court-Mist-Fury-Thorns-Roses/dp/1635575583/?_encoding=UTF8&amp;pd_rd_w=wg7Ti&amp;content-id=amzn1.sym.9929d3ab-edb7-4ef5-a232-26d90f828fa5&amp;pf_rd_p=9929d3ab-edb7-4ef5-a232-26d90f828fa5&amp;pf_rd_r=NYRX6QBXQ8WG32A4Y33P&amp;pd_rd_wg=O4GI5&amp;pd_rd_r=9b128c14-3988-40de-b8d3-c4998a2673ff&amp;ref_=pd_hp_d_btf_crs_zg_bs_283155"
                  ><img alt="A Court of Mist and Fury" src="https://m.media-amazon.com/images/I/812XbpMDovL._AC_SY200_.jpg" class="product-image" height="200px" data-a-hires="https://m.media-amazon.com/images/I/812XbpMDovL._AC_SY400_.jpg" /></a
              ></span>
            </li>
            <li data-sgproduct='{"asin":"1649374178"}' class="feed-carousel-card" aria-setsize="30" style="margin-right: 10px; display: inline-block" aria-posinset="30" aria-hidden="false" role="listitem">
              <span class="a-list-item"
                ><a
                  class="a-link-normal"
                  href="/Iron-Flame-Empyrean-Rebecca-Yarros/dp/1649374178/?_encoding=UTF8&amp;pd_rd_w=wg7Ti&amp;content-id=amzn1.sym.9929d3ab-edb7-4ef5-a232-26d90f828fa5&amp;pf_rd_p=9929d3ab-edb7-4ef5-a232-26d90f828fa5&amp;pf_rd_r=NYRX6QBXQ8WG32A4Y33P&amp;pd_rd_wg=O4GI5&amp;pd_rd_r=9b128c14-3988-40de-b8d3-c4998a2673ff&amp;ref_=pd_hp_d_btf_crs_zg_bs_283155"
                  ><img alt="Iron Flame (The Empyrean, 2)" src="https://m.media-amazon.com/images/I/917Bc9C1MlL._AC_SY200_.jpg" class="product-image" height="200px" data-a-hires="https://m.media-amazon.com/images/I/917Bc9C1MlL._AC_SY400_.jpg" /></a
              ></span>
            </li>
          </ul>
          <div class="spinner" aria-hidden="true" style="display: none"><i class="gw-spinner" role="presentation"></i></div>
        </div>
        <a aria-label="Carousel previous slide" class="a-link-normal feed-carousel-control feed-left feed-control-disabled" tabindex="-1" href="#" aria-hidden="true"><span class="gw-icon feed-arrow"></span></a
        ><a aria-label="Carousel next slide" class="a-link-normal feed-carousel-control feed-right" tabindex="-1" href="#" aria-hidden="true"><span class="gw-icon feed-arrow"></span></a
        ><span class="feed-scrollbar"
          ><span class="feed-scrollbar-track"><span class="feed-scrollbar-thumb" style="width: 215.831px; left: 0px"></span></span
        ></span>
      </div>
      <script type="text/javascript">
        P.when("component-feed-carousel").execute(function (c) {
          c.createCarousel("#2c9b984a-2298-4fc3-9202-b89be158c741 .feed-carousel", 10, 0);
        });
      </script>
      <script id="2c9b984a-2298-4fc3-9202-b89be158c741-btfCarouselContent" type="text/x-lazy-loaded-content">
        <li data-sgproduct="{&quot;asin&quot;:&quot;0349132615&quot;}" class="feed-carousel-card"><span class="a-list-item"><a class="a-link-normal" href="/Housemaids-Secret-Freida-McFadden/dp/0349132615/?_encoding=UTF8&amp;pd_rd_w=wg7Ti&amp;content-id=amzn1.sym.9929d3ab-edb7-4ef5-a232-26d90f828fa5&amp;pf_rd_p=9929d3ab-edb7-4ef5-a232-26d90f828fa5&amp;pf_rd_r=NYRX6QBXQ8WG32A4Y33P&amp;pd_rd_wg=O4GI5&amp;pd_rd_r=9b128c14-3988-40de-b8d3-c4998a2673ff&amp;ref_=pd_hp_d_btf_crs_zg_bs_283155"><img alt="The Housemaid&#x27;s Secret" src="https://m.media-amazon.com/images/I/81LZXcfKqJL._AC_SY200_.jpg" class="product-image" height="200px" data-a-hires="https://m.media-amazon.com/images/I/81LZXcfKqJL._AC_SY400_.jpg"/></a></span></li><li data-sgproduct="{&quot;asin&quot;:&quot;0735211299&quot;}" class="feed-carousel-card"><span class="a-list-item"><a class="a-link-normal" href="/Atomic-Habits-Proven-Build-Break/dp/0735211299/?_encoding=UTF8&amp;pd_rd_w=wg7Ti&amp;content-id=amzn1.sym.9929d3ab-edb7-4ef5-a232-26d90f828fa5&amp;pf_rd_p=9929d3ab-edb7-4ef5-a232-26d90f828fa5&amp;pf_rd_r=NYRX6QBXQ8WG32A4Y33P&amp;pd_rd_wg=O4GI5&amp;pd_rd_r=9b128c14-3988-40de-b8d3-c4998a2673ff&amp;ref_=pd_hp_d_btf_crs_zg_bs_283155"><img alt="Atomic Habits: An Easy &amp; Proven Way to Build Good Habits &amp; Break Bad Ones" src="https://m.media-amazon.com/images/I/81YkqyaFVEL._AC_SY200_.jpg" class="product-image" height="200px" data-a-hires="https://m.media-amazon.com/images/I/81YkqyaFVEL._AC_SY400_.jpg"/></a></span></li><li data-sgproduct="{&quot;asin&quot;:&quot;0063389428&quot;}" class="feed-carousel-card"><span class="a-list-item"><a class="a-link-normal" href="/War-Warriors-Behind-Betrayal-Keep/dp/0063389428/?_encoding=UTF8&amp;pd_rd_w=wg7Ti&amp;content-id=amzn1.sym.9929d3ab-edb7-4ef5-a232-26d90f828fa5&amp;pf_rd_p=9929d3ab-edb7-4ef5-a232-26d90f828fa5&amp;pf_rd_r=NYRX6QBXQ8WG32A4Y33P&amp;pd_rd_wg=O4GI5&amp;pd_rd_r=9b128c14-3988-40de-b8d3-c4998a2673ff&amp;ref_=pd_hp_d_btf_crs_zg_bs_283155"><img alt="The War on Warriors: Behind the Betrayal of the Men Who Keep Us Free" src="https://m.media-amazon.com/images/I/7187im2CwUL._AC_SY200_.jpg" class="product-image" height="200px" data-a-hires="https://m.media-amazon.com/images/I/7187im2CwUL._AC_SY400_.jpg"/></a></span></li><li data-sgproduct="{&quot;asin&quot;:&quot;1081439793&quot;}" class="feed-carousel-card"><span class="a-list-item"><a class="a-link-normal" href="/Mom-Want-Hear-Your-Story/dp/1081439793/?_encoding=UTF8&amp;pd_rd_w=wg7Ti&amp;content-id=amzn1.sym.9929d3ab-edb7-4ef5-a232-26d90f828fa5&amp;pf_rd_p=9929d3ab-edb7-4ef5-a232-26d90f828fa5&amp;pf_rd_r=NYRX6QBXQ8WG32A4Y33P&amp;pd_rd_wg=O4GI5&amp;pd_rd_r=9b128c14-3988-40de-b8d3-c4998a2673ff&amp;ref_=pd_hp_d_btf_crs_zg_bs_283155"><img alt="Mom, I Want to Hear Your Story: A Mother’s Guided Journal To Share Her Life &amp; Her Love (Hear Your Story Books)" src="https://m.media-amazon.com/images/I/71sOqrd6JHL._AC_SY200_.jpg" class="product-image" height="200px" data-a-hires="https://m.media-amazon.com/images/I/71sOqrd6JHL._AC_SY400_.jpg"/></a></span></li><li data-sgproduct="{&quot;asin&quot;:&quot;0140280197&quot;}" class="feed-carousel-card"><span class="a-list-item"><a class="a-link-normal" href="/48-Laws-Power-Robert-Greene/dp/0140280197/?_encoding=UTF8&amp;pd_rd_w=wg7Ti&amp;content-id=amzn1.sym.9929d3ab-edb7-4ef5-a232-26d90f828fa5&amp;pf_rd_p=9929d3ab-edb7-4ef5-a232-26d90f828fa5&amp;pf_rd_r=NYRX6QBXQ8WG32A4Y33P&amp;pd_rd_wg=O4GI5&amp;pd_rd_r=9b128c14-3988-40de-b8d3-c4998a2673ff&amp;ref_=pd_hp_d_btf_crs_zg_bs_283155"><img alt="The 48 Laws of Power" src="https://m.media-amazon.com/images/I/611X8GI7hpL._AC_SY200_.jpg" class="product-image" height="200px" data-a-hires="https://m.media-amazon.com/images/I/611X8GI7hpL._AC_SY400_.jpg"/></a></span></li><li data-sgproduct="{&quot;asin&quot;:&quot;0316258873&quot;}" class="feed-carousel-card"><span class="a-list-item"><a class="a-link-normal" href="/Swan-Song-Elin-Hilderbrand/dp/0316258873/?_encoding=UTF8&amp;pd_rd_w=wg7Ti&amp;content-id=amzn1.sym.9929d3ab-edb7-4ef5-a232-26d90f828fa5&amp;pf_rd_p=9929d3ab-edb7-4ef5-a232-26d90f828fa5&amp;pf_rd_r=NYRX6QBXQ8WG32A4Y33P&amp;pd_rd_wg=O4GI5&amp;pd_rd_r=9b128c14-3988-40de-b8d3-c4998a2673ff&amp;ref_=pd_hp_d_btf_crs_zg_bs_283155"><img alt="Swan Song" src="https://m.media-amazon.com/images/I/71dSn3QCY6L._AC_SY200_.jpg" class="product-image" height="200px" data-a-hires="https://m.media-amazon.com/images/I/71dSn3QCY6L._AC_SY400_.jpg"/></a></span></li><li data-sgproduct="{&quot;asin&quot;:&quot;1501110365&quot;}" class="feed-carousel-card"><span class="a-list-item"><a class="a-link-normal" href="/Ends-Us-Novel-Colleen-Hoover/dp/1501110365/?_encoding=UTF8&amp;pd_rd_w=wg7Ti&amp;content-id=amzn1.sym.9929d3ab-edb7-4ef5-a232-26d90f828fa5&amp;pf_rd_p=9929d3ab-edb7-4ef5-a232-26d90f828fa5&amp;pf_rd_r=NYRX6QBXQ8WG32A4Y33P&amp;pd_rd_wg=O4GI5&amp;pd_rd_r=9b128c14-3988-40de-b8d3-c4998a2673ff&amp;ref_=pd_hp_d_btf_crs_zg_bs_283155"><img alt="It Ends with Us: A Novel (1)" src="https://m.media-amazon.com/images/I/813aV273-rL._AC_SY200_.jpg" class="product-image" height="200px" data-a-hires="https://m.media-amazon.com/images/I/813aV273-rL._AC_SY400_.jpg"/></a></span></li><li data-sgproduct="{&quot;asin&quot;:&quot;1483815803&quot;}" class="feed-carousel-card"><span class="a-list-item"><a class="a-link-normal" href="/Summer-Bridge-Activities%C2%AE-Activities/dp/1483815803/?_encoding=UTF8&amp;pd_rd_w=wg7Ti&amp;content-id=amzn1.sym.9929d3ab-edb7-4ef5-a232-26d90f828fa5&amp;pf_rd_p=9929d3ab-edb7-4ef5-a232-26d90f828fa5&amp;pf_rd_r=NYRX6QBXQ8WG32A4Y33P&amp;pd_rd_wg=O4GI5&amp;pd_rd_r=9b128c14-3988-40de-b8d3-c4998a2673ff&amp;ref_=pd_hp_d_btf_crs_zg_bs_283155"><img alt="Summer Bridge Activities Kindergarten to 1st Grade Workbooks, Math, Reading Comprehension, Writing, Science, Fitness,..." src="https://m.media-amazon.com/images/I/81xAm7tsXML._AC_SY200_.jpg" class="product-image" height="200px" data-a-hires="https://m.media-amazon.com/images/I/81xAm7tsXML._AC_SY400_.jpg"/></a></span></li><li data-sgproduct="{&quot;asin&quot;:&quot;1483815838&quot;}" class="feed-carousel-card"><span class="a-list-item"><a class="a-link-normal" href="/Summer-Bridge-Activities%C2%AE-Activities/dp/1483815838/?_encoding=UTF8&amp;pd_rd_w=wg7Ti&amp;content-id=amzn1.sym.9929d3ab-edb7-4ef5-a232-26d90f828fa5&amp;pf_rd_p=9929d3ab-edb7-4ef5-a232-26d90f828fa5&amp;pf_rd_r=NYRX6QBXQ8WG32A4Y33P&amp;pd_rd_wg=O4GI5&amp;pd_rd_r=9b128c14-3988-40de-b8d3-c4998a2673ff&amp;ref_=pd_hp_d_btf_crs_zg_bs_283155"><img alt="Summer Bridge Activities 3rd to 4th Grade Workbook, Math, Reading Comprehension, Writing, Science, Social Studies,..." src="https://m.media-amazon.com/images/I/81CgE6pRb0L._AC_SY200_.jpg" class="product-image" height="200px" data-a-hires="https://m.media-amazon.com/images/I/81CgE6pRb0L._AC_SY400_.jpg"/></a></span></li><li data-sgproduct="{&quot;asin&quot;:&quot;1087852714&quot;}" class="feed-carousel-card"><span class="a-list-item"><a class="a-link-normal" href="/Dad-Want-Hear-Your-Story/dp/1087852714/?_encoding=UTF8&amp;pd_rd_w=wg7Ti&amp;content-id=amzn1.sym.9929d3ab-edb7-4ef5-a232-26d90f828fa5&amp;pf_rd_p=9929d3ab-edb7-4ef5-a232-26d90f828fa5&amp;pf_rd_r=NYRX6QBXQ8WG32A4Y33P&amp;pd_rd_wg=O4GI5&amp;pd_rd_r=9b128c14-3988-40de-b8d3-c4998a2673ff&amp;ref_=pd_hp_d_btf_crs_zg_bs_283155"><img alt="Dad, I Want to Hear Your Story: A Father&#x27;s Guided Journal to Share His Life &amp; His Love" src="https://m.media-amazon.com/images/I/51dAy6ohGIL._AC_SY200_.jpg" class="product-image" height="200px" data-a-hires="https://m.media-amazon.com/images/I/51dAy6ohGIL._AC_SY400_.jpg"/></a></span></li><li data-sgproduct="{&quot;asin&quot;:&quot;1492667838&quot;}" class="feed-carousel-card"><span class="a-list-item"><a class="a-link-normal" href="/Why-Daughter-Needs-Gregory-Lang/dp/1492667838/?_encoding=UTF8&amp;pd_rd_w=wg7Ti&amp;content-id=amzn1.sym.9929d3ab-edb7-4ef5-a232-26d90f828fa5&amp;pf_rd_p=9929d3ab-edb7-4ef5-a232-26d90f828fa5&amp;pf_rd_r=NYRX6QBXQ8WG32A4Y33P&amp;pd_rd_wg=O4GI5&amp;pd_rd_r=9b128c14-3988-40de-b8d3-c4998a2673ff&amp;ref_=pd_hp_d_btf_crs_zg_bs_283155"><img alt="Why a Daughter Needs a Dad: Celebrate Your Father Daughter Bond this Father&#x27;s Day with this Special Picture Book!..." src="https://m.media-amazon.com/images/I/81F30JDZU9L._AC_SY200_.jpg" class="product-image" height="200px" data-a-hires="https://m.media-amazon.com/images/I/81F30JDZU9L._AC_SY400_.jpg"/></a></span></li><li data-sgproduct="{&quot;asin&quot;:&quot;148381582X&quot;}" class="feed-carousel-card"><span class="a-list-item"><a class="a-link-normal" href="/Summer-Bridge-Activities%C2%AE-Grades-Activities/dp/148381582X/?_encoding=UTF8&amp;pd_rd_w=wg7Ti&amp;content-id=amzn1.sym.9929d3ab-edb7-4ef5-a232-26d90f828fa5&amp;pf_rd_p=9929d3ab-edb7-4ef5-a232-26d90f828fa5&amp;pf_rd_r=NYRX6QBXQ8WG32A4Y33P&amp;pd_rd_wg=O4GI5&amp;pd_rd_r=9b128c14-3988-40de-b8d3-c4998a2673ff&amp;ref_=pd_hp_d_btf_crs_zg_bs_283155"><img alt="Summer Bridge Activities 2nd to 3rd Grade Workbook, Math, Reading Comprehension, Writing, Science, Social Studies,..." src="https://m.media-amazon.com/images/I/81U6MfN1ZPL._AC_SY200_.jpg" class="product-image" height="200px" data-a-hires="https://m.media-amazon.com/images/I/81U6MfN1ZPL._AC_SY400_.jpg"/></a></span></li><li data-sgproduct="{&quot;asin&quot;:&quot;1635575567&quot;}" class="feed-carousel-card"><span class="a-list-item"><a class="a-link-normal" href="/Court-Thorns-Roses-Sarah-Maas/dp/1635575567/?_encoding=UTF8&amp;pd_rd_w=wg7Ti&amp;content-id=amzn1.sym.9929d3ab-edb7-4ef5-a232-26d90f828fa5&amp;pf_rd_p=9929d3ab-edb7-4ef5-a232-26d90f828fa5&amp;pf_rd_r=NYRX6QBXQ8WG32A4Y33P&amp;pd_rd_wg=O4GI5&amp;pd_rd_r=9b128c14-3988-40de-b8d3-c4998a2673ff&amp;ref_=pd_hp_d_btf_crs_zg_bs_283155"><img alt="A Court of Thorns and Roses (A Court of Thorns and Roses, 1)" src="https://m.media-amazon.com/images/I/81RrEEMiOCL._AC_SY200_.jpg" class="product-image" height="200px" data-a-hires="https://m.media-amazon.com/images/I/81RrEEMiOCL._AC_SY400_.jpg"/></a></span></li><li data-sgproduct="{&quot;asin&quot;:&quot;1483815811&quot;}" class="feed-carousel-card"><span class="a-list-item"><a class="a-link-normal" href="/Summer-Bridge-Activities%C2%AE-Grades-Activities/dp/1483815811/?_encoding=UTF8&amp;pd_rd_w=wg7Ti&amp;content-id=amzn1.sym.9929d3ab-edb7-4ef5-a232-26d90f828fa5&amp;pf_rd_p=9929d3ab-edb7-4ef5-a232-26d90f828fa5&amp;pf_rd_r=NYRX6QBXQ8WG32A4Y33P&amp;pd_rd_wg=O4GI5&amp;pd_rd_r=9b128c14-3988-40de-b8d3-c4998a2673ff&amp;ref_=pd_hp_d_btf_crs_zg_bs_283155"><img alt="Summer Bridge Activities 1st Grade Workbooks to 2nd Grade Workbooks, Math, Reading Comprehension, Writing, Science..." src="https://m.media-amazon.com/images/I/812VfWC0-YL._AC_SY200_.jpg" class="product-image" height="200px" data-a-hires="https://m.media-amazon.com/images/I/812VfWC0-YL._AC_SY400_.jpg"/></a></span></li><li data-sgproduct="{&quot;asin&quot;:&quot;0385348746&quot;}" class="feed-carousel-card"><span class="a-list-item"><a class="a-link-normal" href="/Demon-Unrest-Hubris-Heartbreak-Heroism/dp/0385348746/?_encoding=UTF8&amp;pd_rd_w=wg7Ti&amp;content-id=amzn1.sym.9929d3ab-edb7-4ef5-a232-26d90f828fa5&amp;pf_rd_p=9929d3ab-edb7-4ef5-a232-26d90f828fa5&amp;pf_rd_r=NYRX6QBXQ8WG32A4Y33P&amp;pd_rd_wg=O4GI5&amp;pd_rd_r=9b128c14-3988-40de-b8d3-c4998a2673ff&amp;ref_=pd_hp_d_btf_crs_zg_bs_283155"><img alt="The Demon of Unrest: A Saga of Hubris, Heartbreak, and Heroism at the Dawn of the Civil War" src="https://m.media-amazon.com/images/I/81erI7sNo5L._AC_SY200_.jpg" class="product-image" height="200px" data-a-hires="https://m.media-amazon.com/images/I/81erI7sNo5L._AC_SY400_.jpg"/></a></span></li><li data-sgproduct="{&quot;asin&quot;:&quot;1483815846&quot;}" class="feed-carousel-card"><span class="a-list-item"><a class="a-link-normal" href="/Summer-Bridge-Activities%C2%AE-Grades-Activities/dp/1483815846/?_encoding=UTF8&amp;pd_rd_w=wg7Ti&amp;content-id=amzn1.sym.9929d3ab-edb7-4ef5-a232-26d90f828fa5&amp;pf_rd_p=9929d3ab-edb7-4ef5-a232-26d90f828fa5&amp;pf_rd_r=NYRX6QBXQ8WG32A4Y33P&amp;pd_rd_wg=O4GI5&amp;pd_rd_r=9b128c14-3988-40de-b8d3-c4998a2673ff&amp;ref_=pd_hp_d_btf_crs_zg_bs_283155"><img alt="Summer Bridge Activities 4th to 5th Grade Workbook, Math, Reading Comprehension, Writing, Science, Social Studies,..." src="https://m.media-amazon.com/images/I/81mPc9L+fjL._AC_SY200_.jpg" class="product-image" height="200px" data-a-hires="https://m.media-amazon.com/images/I/81mPc9L+fjL._AC_SY400_.jpg"/></a></span></li><li data-sgproduct="{&quot;asin&quot;:&quot;1538704439&quot;}" class="feed-carousel-card"><span class="a-list-item"><a class="a-link-normal" href="/Just-Summer-Abby-Jimenez/dp/1538704439/?_encoding=UTF8&amp;pd_rd_w=wg7Ti&amp;content-id=amzn1.sym.9929d3ab-edb7-4ef5-a232-26d90f828fa5&amp;pf_rd_p=9929d3ab-edb7-4ef5-a232-26d90f828fa5&amp;pf_rd_r=NYRX6QBXQ8WG32A4Y33P&amp;pd_rd_wg=O4GI5&amp;pd_rd_r=9b128c14-3988-40de-b8d3-c4998a2673ff&amp;ref_=pd_hp_d_btf_crs_zg_bs_283155"><img alt="Just for the Summer" src="https://m.media-amazon.com/images/I/81tVBUv75vL._AC_SY200_.jpg" class="product-image" height="200px" data-a-hires="https://m.media-amazon.com/images/I/81tVBUv75vL._AC_SY400_.jpg"/></a></span></li><li data-sgproduct="{&quot;asin&quot;:&quot;0679805273&quot;}" class="feed-carousel-card"><span class="a-list-item"><a class="a-link-normal" href="/Oh-Places-Youll-Dr-Seuss/dp/0679805273/?_encoding=UTF8&amp;pd_rd_w=wg7Ti&amp;content-id=amzn1.sym.9929d3ab-edb7-4ef5-a232-26d90f828fa5&amp;pf_rd_p=9929d3ab-edb7-4ef5-a232-26d90f828fa5&amp;pf_rd_r=NYRX6QBXQ8WG32A4Y33P&amp;pd_rd_wg=O4GI5&amp;pd_rd_r=9b128c14-3988-40de-b8d3-c4998a2673ff&amp;ref_=pd_hp_d_btf_crs_zg_bs_283155"><img alt="Oh, the Places You&#x27;ll Go!" src="https://m.media-amazon.com/images/I/61AiILuAb9L._AC_SY200_.jpg" class="product-image" height="200px" data-a-hires="https://m.media-amazon.com/images/I/61AiILuAb9L._AC_SY400_.jpg"/></a></span></li><li data-sgproduct="{&quot;asin&quot;:&quot;1952568137&quot;}" class="feed-carousel-card"><span class="a-list-item"><a class="a-link-normal" href="/Tell-Your-Life-Story-Dad/dp/1952568137/?_encoding=UTF8&amp;pd_rd_w=wg7Ti&amp;content-id=amzn1.sym.9929d3ab-edb7-4ef5-a232-26d90f828fa5&amp;pf_rd_p=9929d3ab-edb7-4ef5-a232-26d90f828fa5&amp;pf_rd_r=NYRX6QBXQ8WG32A4Y33P&amp;pd_rd_wg=O4GI5&amp;pd_rd_r=9b128c14-3988-40de-b8d3-c4998a2673ff&amp;ref_=pd_hp_d_btf_crs_zg_bs_283155"><img alt="Tell Me Your Life Story, Dad: A Father’s Guided Journal and Memory Keepsake Book (Tell Me Your Life Story® Series Books)" src="https://m.media-amazon.com/images/I/41+UDzZ2Y5S._AC_SY200_.jpg" class="product-image" height="200px" data-a-hires="https://m.media-amazon.com/images/I/41+UDzZ2Y5S._AC_SY400_.jpg"/></a></span></li><li data-sgproduct="{&quot;asin&quot;:&quot;1483815854&quot;}" class="feed-carousel-card"><span class="a-list-item"><a class="a-link-normal" href="/Summer-Bridge-Activities%C2%AE-Activities/dp/1483815854/?_encoding=UTF8&amp;pd_rd_w=wg7Ti&amp;content-id=amzn1.sym.9929d3ab-edb7-4ef5-a232-26d90f828fa5&amp;pf_rd_p=9929d3ab-edb7-4ef5-a232-26d90f828fa5&amp;pf_rd_r=NYRX6QBXQ8WG32A4Y33P&amp;pd_rd_wg=O4GI5&amp;pd_rd_r=9b128c14-3988-40de-b8d3-c4998a2673ff&amp;ref_=pd_hp_d_btf_crs_zg_bs_283155"><img alt="Summer Bridge Activities 5th to 6th Grade Workbooks, Math, Reading Comprehension, Writing, Science, Social Studies,..." src="https://m.media-amazon.com/images/I/81iCTz8d3uL._AC_SY200_.jpg" class="product-image" height="200px" data-a-hires="https://m.media-amazon.com/images/I/81iCTz8d3uL._AC_SY400_.jpg"/></a></span></li><li data-sgproduct="{&quot;asin&quot;:&quot;1250080401&quot;}" class="feed-carousel-card"><span class="a-list-item"><a class="a-link-normal" href="/Nightingale-Novel-Kristin-Hannah/dp/1250080401/?_encoding=UTF8&amp;pd_rd_w=wg7Ti&amp;content-id=amzn1.sym.9929d3ab-edb7-4ef5-a232-26d90f828fa5&amp;pf_rd_p=9929d3ab-edb7-4ef5-a232-26d90f828fa5&amp;pf_rd_r=NYRX6QBXQ8WG32A4Y33P&amp;pd_rd_wg=O4GI5&amp;pd_rd_r=9b128c14-3988-40de-b8d3-c4998a2673ff&amp;ref_=pd_hp_d_btf_crs_zg_bs_283155"><img alt="The Nightingale: A Novel" src="https://m.media-amazon.com/images/I/81OkWjcf4WL._AC_SY200_.jpg" class="product-image" height="200px" data-a-hires="https://m.media-amazon.com/images/I/81OkWjcf4WL._AC_SY400_.jpg"/></a></span></li><li data-sgproduct="{&quot;asin&quot;:&quot;1635575583&quot;}" class="feed-carousel-card"><span class="a-list-item"><a class="a-link-normal" href="/Court-Mist-Fury-Thorns-Roses/dp/1635575583/?_encoding=UTF8&amp;pd_rd_w=wg7Ti&amp;content-id=amzn1.sym.9929d3ab-edb7-4ef5-a232-26d90f828fa5&amp;pf_rd_p=9929d3ab-edb7-4ef5-a232-26d90f828fa5&amp;pf_rd_r=NYRX6QBXQ8WG32A4Y33P&amp;pd_rd_wg=O4GI5&amp;pd_rd_r=9b128c14-3988-40de-b8d3-c4998a2673ff&amp;ref_=pd_hp_d_btf_crs_zg_bs_283155"><img alt="A Court of Mist and Fury" src="https://m.media-amazon.com/images/I/812XbpMDovL._AC_SY200_.jpg" class="product-image" height="200px" data-a-hires="https://m.media-amazon.com/images/I/812XbpMDovL._AC_SY400_.jpg"/></a></span></li><li data-sgproduct="{&quot;asin&quot;:&quot;1649374178&quot;}" class="feed-carousel-card"><span class="a-list-item"><a class="a-link-normal" href="/Iron-Flame-Empyrean-Rebecca-Yarros/dp/1649374178/?_encoding=UTF8&amp;pd_rd_w=wg7Ti&amp;content-id=amzn1.sym.9929d3ab-edb7-4ef5-a232-26d90f828fa5&amp;pf_rd_p=9929d3ab-edb7-4ef5-a232-26d90f828fa5&amp;pf_rd_r=NYRX6QBXQ8WG32A4Y33P&amp;pd_rd_wg=O4GI5&amp;pd_rd_r=9b128c14-3988-40de-b8d3-c4998a2673ff&amp;ref_=pd_hp_d_btf_crs_zg_bs_283155"><img alt="Iron Flame (The Empyrean, 2)" src="https://m.media-amazon.com/images/I/917Bc9C1MlL._AC_SY200_.jpg" class="product-image" height="200px" data-a-hires="https://m.media-amazon.com/images/I/917Bc9C1MlL._AC_SY400_.jpg"/></a></span></li>
      </script>
      <script type="text/javascript">
        (function carouselBtf(d, w) {
          var p = d.getElementById("2c9b984a-2298-4fc3-9202-b89be158c741-btfCarouselContent"),
            h = p && p.innerHTML,
            v = h ? [h] : [];
          w.GWData = w.GWData || {};
          w.GWData["2c9b984a-2298-4fc3-9202-b89be158c741"] = { loaded: false, data: v };
        })(document, window);
      </script>
    </div>
  </div>
  <script>
    (function (f) {
      f(P._namespace("gwiAutoInstVisible"));
    })(function (P) {
      if (window.GWI) {
        GWI.Card.autoInstVisible("CardInstanceV-IDwiAh8cCaaegLSxM5ug");
      }
    });
  </script>
  <script>
    if (window.mixTimeout) {
      window.mixTimeout("ameyal-product-shoveler", "CardInstanceV-IDwiAh8cCaaegLSxM5ug", 90000);
    }
    P.when("mix:@amzn/mix.client-runtime", "mix:ameyal-product-shoveler__0Ho_NLB1").execute(function (runtime, cardModule) {
      runtime.registerCardFactory("CardInstanceV-IDwiAh8cCaaegLSxM5ug", cardModule);
      if (window.GWI) {
        window.GWI.Card.autoInstActive("CardInstanceV-IDwiAh8cCaaegLSxM5ug");
      }
    });
  </script>
</div>` },
  { filename: "carousel correctly tagged", content: `<div id="test-subject" class="carousel" role="region" aria-roledescription="carousel" aria-label="News feed">
  <ul class="carousel__slides-container">
    <li class="slide">slide 1</li>
    <li class="slide">slide 2</li>
    <li class="slide">slide 3</li>
  </ul>
</div>` },
  { filename: "carousel element aria label with carousel", content: `<div id="test-subject" class="carousel" role="region" aria-roledescription="carousel" aria-label="Awesome carousel">
  <ul class="carousel__slides-container">
    <li class="slide">slide 1</li>
    <li class="slide">slide 2</li>
    <li class="slide">slide 3</li>
  </ul>
</div>` },
  { filename: "vuetifyjs carousel", content: `<div class="mb-9 v-example v-sheet v-sheet--outlined theme--light rounded">
  <div class="v-lazy" style="min-height: 52px">
    <div class="text-end pa-2">
      <span class="v-app-tooltip-btn d-inline-block"
        ><button type="button" class="v-btn v-btn--icon v-btn--round theme--light v-size--default" aria-label="invert-example-colors">
          <span class="v-btn__content"
            ><span aria-hidden="true" class="v-icon notranslate theme--light"
              ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="img" aria-hidden="true" class="v-icon__svg">
                <path d="M12,19.58V19.58C10.4,19.58 8.89,18.96 7.76,17.83C6.62,16.69 6,15.19 6,13.58C6,12 6.62,10.47 7.76,9.34L12,5.1M17.66,7.93L12,2.27V2.27L6.34,7.93C3.22,11.05 3.22,16.12 6.34,19.24C7.9,20.8 9.95,21.58 12,21.58C14.05,21.58 16.1,20.8 17.66,19.24C20.78,16.12 20.78,11.05 17.66,7.93Z"></path></svg></span
          ></span></button
        ><span class="v-tooltip v-tooltip--bottom"><!----></span></span
      ><span class="v-app-tooltip-btn d-inline-block"
        ><button type="button" class="v-btn v-btn--icon v-btn--round theme--light v-size--default" aria-label="edit-in-codepen">
          <span class="v-btn__content"
            ><span aria-hidden="true" class="v-icon notranslate theme--light"
              ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="img" aria-hidden="true" class="v-icon__svg">
                <path
                  d="M8.21 12L6.88 12.89V11.11L8.21 12M11.47 9.82V7.34L7.31 10.12L9.16 11.36L11.47 9.82M16.7 10.12L12.53 7.34V9.82L14.84 11.36L16.7 10.12M7.31 13.88L11.47 16.66V14.18L9.16 12.64L7.31 13.88M12.53 14.18V16.66L16.7 13.88L14.84 12.64L12.53 14.18M12 10.74L10.12 12L12 13.26L13.88 12L12 10.74M22 12C22 17.5 17.5 22 12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2C17.5 2 22 6.5 22 12M18.18 10.12C18.18 10.09 18.18 10.07 18.18 10.05L18.17 10L18.17 10L18.16 9.95C18.15 9.94 18.15 9.93 18.14 9.91L18.13 9.89L18.11 9.85L18.1 9.83L18.08 9.8L18.06 9.77L18.03 9.74L18 9.72L18 9.7L17.96 9.68L17.95 9.67L12.3 5.91C12.12 5.79 11.89 5.79 11.71 5.91L6.05 9.67L6.05 9.68L6 9.7C6 9.71 6 9.72 6 9.72L5.97 9.74L5.94 9.77L5.93 9.8L5.9 9.83L5.89 9.85L5.87 9.89L5.86 9.91L5.84 9.95L5.84 10L5.83 10L5.82 10.05C5.82 10.07 5.82 10.09 5.82 10.12V13.88C5.82 13.91 5.82 13.93 5.82 13.95L5.83 14L5.84 14L5.84 14.05C5.85 14.06 5.85 14.07 5.86 14.09L5.87 14.11L5.89 14.15L5.9 14.17L5.92 14.2L5.94 14.23C5.95 14.24 5.96 14.25 5.97 14.26L6 14.28L6 14.3L6.04 14.32L6.05 14.33L11.71 18.1C11.79 18.16 11.9 18.18 12 18.18C12.1 18.18 12.21 18.15 12.3 18.1L17.95 14.33L17.96 14.32L18 14.3L18 14.28L18.03 14.26L18.06 14.23L18.08 14.2L18.1 14.17L18.11 14.15L18.13 14.11L18.14 14.09L18.16 14.05L18.16 14L18.17 14L18.18 13.95C18.18 13.93 18.18 13.91 18.18 13.88V10.12M17.12 12.89V11.11L15.79 12L17.12 12.89Z"
                ></path></svg></span
          ></span></button
        ><span class="v-tooltip v-tooltip--bottom"><!----></span></span
      ><span class="v-app-tooltip-btn d-inline-block"
        ><a href="https://github.com/vuetifyjs/vuetify/tree/master/packages/docs/src/examples/v-carousel/usage.vue" target="_blank" class="v-btn v-btn--icon v-btn--round theme--light v-size--default" aria-label="view-in-github"
          ><span class="v-btn__content"
            ><span aria-hidden="true" class="v-icon notranslate theme--light"
              ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="img" aria-hidden="true" class="v-icon__svg">
                <path
                  d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"
                ></path></svg></span></span></a
        ><span class="v-tooltip v-tooltip--bottom"><!----></span></span
      ><span class="v-app-tooltip-btn d-inline-block"
        ><button type="button" class="v-btn v-btn--icon v-btn--round theme--light v-size--default" aria-label="view-source">
          <span class="v-btn__content"
            ><span aria-hidden="true" class="v-icon notranslate theme--light"
              ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="img" aria-hidden="true" class="v-icon__svg">
                <path d="M14.6,16.6L19.2,12L14.6,7.4L16,6L22,12L16,18L14.6,16.6M9.4,16.6L4.8,12L9.4,7.4L8,6L2,12L8,18L9.4,16.6Z"></path></svg></span
          ></span></button
        ><span class="v-tooltip v-tooltip--bottom"><!----></span></span
      >
    </div>
  </div>
  <hr role="separator" aria-orientation="horizontal" class="v-divider theme--light" />
  <!---->
  <div class="pa-4 v-sheet theme--light rounded">
    <div id="test-subject" role="region" aria-roledescription="carousel" aria-label="example of slides" class="v-window v-item-group theme--dark v-carousel" file="v-carousel/usage" style="height: 500px">
      <div class="v-window__container">
        <div class="v-window-item" style="display: none">
          <div class="v-image v-responsive v-carousel__item theme--light" style="height: 500px">
            <div class="v-responsive__content">
              <div class="v-sheet theme--light rounded-0 primary" style="height: 100%">
                <div class="row fill-height align-center justify-center">
                  <div class="text-h2">Slide 1</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="v-window-item">
          <div class="v-image v-responsive v-carousel__item theme--light" style="height: 500px">
            <div class="v-responsive__content">
              <div class="v-sheet theme--light rounded-0 secondary" style="height: 100%">
                <div class="row fill-height align-center justify-center">
                  <div class="text-h2">Slide 2</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!----><!----><!---->
        <div class="v-window__prev">
          <button type="button" class="v-btn v-btn--icon v-btn--round theme--dark v-size--default" aria-label="Previous visual">
            <span class="v-btn__content"
              ><span aria-hidden="true" class="v-icon notranslate theme--dark" style="font-size: 36px; height: 36px; width: 36px"
                ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="img" aria-hidden="true" class="v-icon__svg" style="font-size: 36px; height: 36px; width: 36px">
                  <path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"></path></svg></span
            ></span>
          </button>
        </div>
        <div class="v-window__next">
          <button type="button" class="v-btn v-btn--icon v-btn--round theme--dark v-size--default" aria-label="Next visual">
            <span class="v-btn__content"
              ><span aria-hidden="true" class="v-icon notranslate theme--dark" style="font-size: 36px; height: 36px; width: 36px"
                ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="img" aria-hidden="true" class="v-icon__svg" style="font-size: 36px; height: 36px; width: 36px">
                  <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"></path></svg></span
            ></span>
          </button>
        </div>
      </div>
      <div class="v-carousel__controls" style="left: auto; right: auto">
        <div class="v-item-group theme--dark">
          <button type="button" value="0" class="v-carousel__controls__item v-btn v-btn--icon v-btn--round theme--dark v-size--small" aria-label="Carousel slide 1 of 5">
            <span class="v-btn__content"
              ><span aria-hidden="true" class="v-icon notranslate theme--dark" style="font-size: 18px; height: 18px; width: 18px"
                ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="img" aria-hidden="true" class="v-icon__svg" style="font-size: 18px; height: 18px; width: 18px">
                  <path d="M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2Z"></path></svg></span
            ></span></button
          ><button type="button" value="1" class="v-carousel__controls__item v-btn v-item--active v-btn--active v-btn--icon v-btn--round theme--dark v-size--small" aria-label="Carousel slide 2 of 5">
            <span class="v-btn__content"
              ><span aria-hidden="true" class="v-icon notranslate theme--dark" style="font-size: 18px; height: 18px; width: 18px"
                ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="img" aria-hidden="true" class="v-icon__svg" style="font-size: 18px; height: 18px; width: 18px">
                  <path d="M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2Z"></path></svg></span
            ></span></button
          ><button type="button" value="2" class="v-carousel__controls__item v-btn v-btn--icon v-btn--round theme--dark v-size--small" aria-label="Carousel slide 3 of 5">
            <span class="v-btn__content"
              ><span aria-hidden="true" class="v-icon notranslate theme--dark" style="font-size: 18px; height: 18px; width: 18px"
                ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="img" aria-hidden="true" class="v-icon__svg" style="font-size: 18px; height: 18px; width: 18px">
                  <path d="M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2Z"></path></svg></span
            ></span></button
          ><button type="button" value="3" class="v-carousel__controls__item v-btn v-btn--icon v-btn--round theme--dark v-size--small" aria-label="Carousel slide 4 of 5">
            <span class="v-btn__content"
              ><span aria-hidden="true" class="v-icon notranslate theme--dark" style="font-size: 18px; height: 18px; width: 18px"
                ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="img" aria-hidden="true" class="v-icon__svg" style="font-size: 18px; height: 18px; width: 18px">
                  <path d="M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2Z"></path></svg></span
            ></span></button
          ><button type="button" value="4" class="v-carousel__controls__item v-btn v-btn--icon v-btn--round theme--dark v-size--small" aria-label="Carousel slide 5 of 5">
            <span class="v-btn__content"
              ><span aria-hidden="true" class="v-icon notranslate theme--dark" style="font-size: 18px; height: 18px; width: 18px"
                ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="img" aria-hidden="true" class="v-icon__svg" style="font-size: 18px; height: 18px; width: 18px">
                  <path d="M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2Z"></path></svg></span
            ></span>
          </button>
        </div>
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

export default CarouselDiscernibleSuccess;
