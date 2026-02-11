import React from "react";
import EngineIssueSuccess from "../../../layout/engineIssueSuccess";

const UserRatingDiscernibleSuccess = () => {
  const ruleId = "user-rating-discernible";
  const title = `User ratings should be tagged and labeled for assistive technology`;
  const description = `When a static star rating is presented using unlabeled icons, screen readers cannot interpret the symbols as meaningful content. Assigning a role and text alternative ensures the rating value is conveyed clearly, allowing non-visual users to understand the information.`;
  const helpText = `Assign role="img" with an aria-label such as “4 out of 5 stars,” either directly on a single image or SVG, or on a container that holds the star elements.`;
  const bestPractices = [
  "Follow proper HTML semantics",
  "Ensure screen reader compatibility",
  "Test with assistive technologies"
  ];
  const htmlExamples = [
  { filename: "airbnb ratings with aria label", content: `<span id="test-subject" aria-label="Rating 4.92 out of 5; 52 reviews"
    class="s15vsdt atm_9s_1txwivl atm_h_1h6ojuz atm_c8_km0zk7 atm_g3_18khvle atm_fr_1m9t47k atm_9s_1txwivl_ajy7l8 atm_h_1h6ojuz_ajy7l8 atm_h0_evh4rp_ajy7l8 atm_7l_5devkh_ajy7l8 atm_7l_1mi2a3h_1pmwrue atm_7l_17zsnog_1dij5us  dir dir-ltr"
    role="img">
    <span class="sfqq6w5 dir dir-ltr">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation"
            focusable="false" style="display: block; height: 12px; width: 12px; fill: currentcolor;">
            <path fill-rule="evenodd"
                d="m15.1 1.58-4.13 8.88-9.86 1.27a1 1 0 0 0-.54 1.74l7.3 6.57-1.97 9.85a1 1 0 0 0 1.48 1.06l8.62-5 8.63 5a1 1 0 0 0 1.48-1.06l-1.97-9.85 7.3-6.57a1 1 0 0 0-.55-1.73l-9.86-1.28-4.12-8.88a1 1 0 0 0-1.82 0z">
            </path>
        </svg>
    </span>
    <span aria-hidden="true" class="rpz7y38 dir dir-ltr">4.92</span>
    <span aria-hidden="true" class="r1xr6rtg dir dir-ltr">&nbsp;(52)</span>
</span>` },
  { filename: "amazon ratings with inner element with text", content: `<a id="test-subject" href="javascript:void(0)" role="button" class="a-popover-trigger a-declarative">
  <i class="a-icon a-icon-star-small a-star-small-4-5 aok-align-bottom">
    <span class="a-icon-alt">4.3 of 5</span>
  </i>
  <i class="a-icon a-icon-popover"></i>
</a>` },
  { filename: "amazon ratings with label", content: `<a id="test-subject" aria-labelledby="label-of-test" href="javascript:void(0)" role="button" class="a-popover-trigger a-declarative">
  <i class="a-icon a-icon-star-small a-star-small-4-5 aok-align-bottom"></i>
  <i class="a-icon a-icon-popover"></i>
</a>
<div id="label-of-test">Rating of 4.3 of 5</div>` },
  { filename: "google ratings with aria label", content: `<style>
  .z3HNkc,
  .z3HNkc span {
    background-size: 14px 11.4px;
    height: 11.4px;
    width: 68px;
  }

  .z3HNkc {
    background-image: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 23.44 19'><polygon fill='%2380868b' points='10,15.27 16.18,19 14.54,11.97 20,7.24 12.81,6.63 10,0 7.19,6.63 0,7.24 5.46,11.97 3.82,19'/></svg>");
    background-repeat: repeat-x;
    display: inline-block;
    overflow: hidden;
    position: relative;
  }
</style>
<span id="test-subject" class="z3HNkc" aria-label="Rated 4.3 out of 5," role="img">
  <div aria-hidden="true">
    <span style="width: calc(calc(12px + 2px) * 4 + calc(12px / 2) * 1)"></span>
  </div>
</span>` },
  { filename: "imdb ratings with inner visible text", content: `<div id="test-subject" data-testid="hero-rating-bar__aggregate-rating__score" class="sc-bde20123-2 cdQqzc">
  <span class="sc-bde20123-1 cMEQkK">8.2</span><span>/<!-- -->10</span>
</div>` },
  { filename: "ratemeds ratings with title", content: `<span id="test-subject" title="4.97" class="star-rating" data-reactid=".121rf7r60fi.0.1.0.1.\$728969.1"><span
        class="stars" data-reactid=".121rf7r60fi.0.1.0.1.\$728969.1.0"><svg width="18" height="18" viewBox="0 0 18 18"
            fill="none" class="selected" data-reactid=".121rf7r60fi.0.1.0.1.\$728969.1.0.0">
            <path
                d="M9.7361 1.45801L11.5721 5.17901C11.6921 5.42101 11.9231 5.58901 12.1901 5.62801L16.2961 6.22501C16.9691 6.32301 17.2381 7.15001 16.7511 7.62501L13.7801 10.52C13.5871 10.709 13.4981 10.98 13.5441 11.247L14.2451 15.336C14.3601 16.007 13.6561 16.518 13.0541 16.201L9.3821 14.27C9.1431 14.144 8.8571 14.144 8.6181 14.27L4.9461 16.201C4.3441 16.518 3.6401 16.006 3.7551 15.336L4.4561 11.247C4.5021 10.981 4.4131 10.709 4.2201 10.52L1.2491 7.62401C0.762101 7.14901 1.0311 6.32201 1.7041 6.22401L5.8101 5.62701C6.0771 5.58801 6.3081 5.42001 6.4281 5.17801L8.2641 1.45701C8.5651 0.847009 9.4351 0.847009 9.7361 1.45801Z"
                fill="#FA7D00" data-reactid=".121rf7r60fi.0.1.0.1.\$728969.1.0.0.0"></path>
        </svg><svg width="18" height="18" viewBox="0 0 18 18" fill="none" class="selected"
            data-reactid=".121rf7r60fi.0.1.0.1.\$728969.1.0.1">
            <path
                d="M9.7361 1.45801L11.5721 5.17901C11.6921 5.42101 11.9231 5.58901 12.1901 5.62801L16.2961 6.22501C16.9691 6.32301 17.2381 7.15001 16.7511 7.62501L13.7801 10.52C13.5871 10.709 13.4981 10.98 13.5441 11.247L14.2451 15.336C14.3601 16.007 13.6561 16.518 13.0541 16.201L9.3821 14.27C9.1431 14.144 8.8571 14.144 8.6181 14.27L4.9461 16.201C4.3441 16.518 3.6401 16.006 3.7551 15.336L4.4561 11.247C4.5021 10.981 4.4131 10.709 4.2201 10.52L1.2491 7.62401C0.762101 7.14901 1.0311 6.32201 1.7041 6.22401L5.8101 5.62701C6.0771 5.58801 6.3081 5.42001 6.4281 5.17801L8.2641 1.45701C8.5651 0.847009 9.4351 0.847009 9.7361 1.45801Z"
                fill="#FA7D00" data-reactid=".121rf7r60fi.0.1.0.1.\$728969.1.0.1.0"></path>
        </svg><svg width="18" height="18" viewBox="0 0 18 18" fill="none" class="selected"
            data-reactid=".121rf7r60fi.0.1.0.1.\$728969.1.0.2">
            <path
                d="M9.7361 1.45801L11.5721 5.17901C11.6921 5.42101 11.9231 5.58901 12.1901 5.62801L16.2961 6.22501C16.9691 6.32301 17.2381 7.15001 16.7511 7.62501L13.7801 10.52C13.5871 10.709 13.4981 10.98 13.5441 11.247L14.2451 15.336C14.3601 16.007 13.6561 16.518 13.0541 16.201L9.3821 14.27C9.1431 14.144 8.8571 14.144 8.6181 14.27L4.9461 16.201C4.3441 16.518 3.6401 16.006 3.7551 15.336L4.4561 11.247C4.5021 10.981 4.4131 10.709 4.2201 10.52L1.2491 7.62401C0.762101 7.14901 1.0311 6.32201 1.7041 6.22401L5.8101 5.62701C6.0771 5.58801 6.3081 5.42001 6.4281 5.17801L8.2641 1.45701C8.5651 0.847009 9.4351 0.847009 9.7361 1.45801Z"
                fill="#FA7D00" data-reactid=".121rf7r60fi.0.1.0.1.\$728969.1.0.2.0"></path>
        </svg><svg width="18" height="18" viewBox="0 0 18 18" fill="none" class="selected"
            data-reactid=".121rf7r60fi.0.1.0.1.\$728969.1.0.3">
            <path
                d="M9.7361 1.45801L11.5721 5.17901C11.6921 5.42101 11.9231 5.58901 12.1901 5.62801L16.2961 6.22501C16.9691 6.32301 17.2381 7.15001 16.7511 7.62501L13.7801 10.52C13.5871 10.709 13.4981 10.98 13.5441 11.247L14.2451 15.336C14.3601 16.007 13.6561 16.518 13.0541 16.201L9.3821 14.27C9.1431 14.144 8.8571 14.144 8.6181 14.27L4.9461 16.201C4.3441 16.518 3.6401 16.006 3.7551 15.336L4.4561 11.247C4.5021 10.981 4.4131 10.709 4.2201 10.52L1.2491 7.62401C0.762101 7.14901 1.0311 6.32201 1.7041 6.22401L5.8101 5.62701C6.0771 5.58801 6.3081 5.42001 6.4281 5.17801L8.2641 1.45701C8.5651 0.847009 9.4351 0.847009 9.7361 1.45801Z"
                fill="#FA7D00" data-reactid=".121rf7r60fi.0.1.0.1.\$728969.1.0.3.0"></path>
        </svg><svg width="18" height="18" viewBox="0 0 18 18" fill="none" class="selected"
            data-reactid=".121rf7r60fi.0.1.0.1.\$728969.1.0.4">
            <path
                d="M9.7361 1.45801L11.5721 5.17901C11.6921 5.42101 11.9231 5.58901 12.1901 5.62801L16.2961 6.22501C16.9691 6.32301 17.2381 7.15001 16.7511 7.62501L13.7801 10.52C13.5871 10.709 13.4981 10.98 13.5441 11.247L14.2451 15.336C14.3601 16.007 13.6561 16.518 13.0541 16.201L9.3821 14.27C9.1431 14.144 8.8571 14.144 8.6181 14.27L4.9461 16.201C4.3441 16.518 3.6401 16.006 3.7551 15.336L4.4561 11.247C4.5021 10.981 4.4131 10.709 4.2201 10.52L1.2491 7.62401C0.762101 7.14901 1.0311 6.32201 1.7041 6.22401L5.8101 5.62701C6.0771 5.58801 6.3081 5.42001 6.4281 5.17801L8.2641 1.45701C8.5651 0.847009 9.4351 0.847009 9.7361 1.45801Z"
                fill="#FA7D00" data-reactid=".121rf7r60fi.0.1.0.1.\$728969.1.0.4.0"></path>
        </svg></span></span>` },
  { filename: "rentalcars ratings with inner visible text", content: `<style>
    .SM_5e6eb992 {
        clip: rect(0, 0, 0, 0);
        border: 0;
        -webkit-clip-path: inset(50%);
        clip-path: inset(50%);
        height: 1px;
        overflow: hidden;
        padding: 0;
        position: absolute;
        white-space: nowrap;
        width: 1px;
    }
</style>
<span class="SM_df109d05">
    <div role="" class="SM_b848800a SM_aaf76dc0 SM_c62300da SM_8321412c SM_6e9e6a44 SM_cd93ebaf SM_664c9790"
        style="--bui_stack_spaced_gap--s: 2;">
        <div class="SM_cdcb464a SM_3b048df1">9<div class="SM_5e6eb992">9</div>
        </div>
        <div class="SM_1ce69267 SM_bdeacff3 SM_278a37c9">
            <div class="SM_cdcb464a SM_aa35055d SM_e1636cca"> Superb<div class="SM_5e6eb992" id="test-subject">Customer
                    rating 9 Superb
                </div>
            </div>
            <div class="SM_a6792d6d SM_fe9da244 SM_6dca34cc">400+ reviews</div>
        </div>
    </div>
</span>` },
  { filename: "yelp ratings inner element with aria label", content: `<div class="arrange__09f24__LDfbs gutter-1__09f24__yAbCL vertical-align-middle__09f24__zU9sE y-css-1iy1dwt">
    <div class="arrange-unit__09f24__rqHTg y-css-lbeyaq"><span id="test-subject" class=" y-css-pw0opj">
            <div class="y-css-9tnml4" role="img" aria-label="4.8 star rating">
                <div class="y-css-z05zjh"><svg width="20" height="20" viewBox="0 0 20 20">
                        <path fill="rgba(251,67,60,1)" opacity="1"
                            d="M0 4C0 1.79086 1.79086 0 4 0H10V20H4C1.79086 20 0 18.2091 0 16V4Z"></path>
                        <path fill="rgba(251,67,60,1)" opacity="1"
                            d="M20 4C20 1.79086 18.2091 0 16 0H10V20H16C18.2091 20 20 18.2091 20 16V4Z"></path>
                        <path fill="white" fill-rule="evenodd" clip-rule="evenodd"
                            d="M10 13.3736L12.5949 14.7111C12.7378 14.7848 12.9006 14.8106 13.0593 14.7847C13.4681 14.718 13.7454 14.3325 13.6787 13.9237L13.2085 11.0425L15.2824 8.98796C15.3967 8.8748 15.4715 8.72792 15.4959 8.569C15.5588 8.15958 15.2779 7.77672 14.8685 7.71384L11.983 7.2707L10.6699 4.66338C10.5975 4.51978 10.481 4.40322 10.3374 4.33089C9.96742 4.14458 9.51648 4.29344 9.33017 4.66338L8.01705 7.2707L5.13157 7.71384C4.97265 7.73825 4.82577 7.81309 4.71261 7.92731C4.42109 8.22158 4.42332 8.69645 4.71759 8.98796L6.79152 11.0425L6.32131 13.9237C6.29541 14.0824 6.3212 14.2452 6.39486 14.3881C6.58464 14.7563 7.03696 14.9009 7.40514 14.7111L10 13.3736Z">
                        </path>
                    </svg></div>
                <div class="y-css-z05zjh"><svg width="20" height="20" viewBox="0 0 20 20">
                        <path fill="rgba(251,67,60,1)" opacity="1"
                            d="M0 4C0 1.79086 1.79086 0 4 0H10V20H4C1.79086 20 0 18.2091 0 16V4Z"></path>
                        <path fill="rgba(251,67,60,1)" opacity="1"
                            d="M20 4C20 1.79086 18.2091 0 16 0H10V20H16C18.2091 20 20 18.2091 20 16V4Z"></path>
                        <path fill="white" fill-rule="evenodd" clip-rule="evenodd"
                            d="M10 13.3736L12.5949 14.7111C12.7378 14.7848 12.9006 14.8106 13.0593 14.7847C13.4681 14.718 13.7454 14.3325 13.6787 13.9237L13.2085 11.0425L15.2824 8.98796C15.3967 8.8748 15.4715 8.72792 15.4959 8.569C15.5588 8.15958 15.2779 7.77672 14.8685 7.71384L11.983 7.2707L10.6699 4.66338C10.5975 4.51978 10.481 4.40322 10.3374 4.33089C9.96742 4.14458 9.51648 4.29344 9.33017 4.66338L8.01705 7.2707L5.13157 7.71384C4.97265 7.73825 4.82577 7.81309 4.71261 7.92731C4.42109 8.22158 4.42332 8.69645 4.71759 8.98796L6.79152 11.0425L6.32131 13.9237C6.29541 14.0824 6.3212 14.2452 6.39486 14.3881C6.58464 14.7563 7.03696 14.9009 7.40514 14.7111L10 13.3736Z">
                        </path>
                    </svg></div>
                <div class="y-css-z05zjh"><svg width="20" height="20" viewBox="0 0 20 20">
                        <path fill="rgba(251,67,60,1)" opacity="1"
                            d="M0 4C0 1.79086 1.79086 0 4 0H10V20H4C1.79086 20 0 18.2091 0 16V4Z"></path>
                        <path fill="rgba(251,67,60,1)" opacity="1"
                            d="M20 4C20 1.79086 18.2091 0 16 0H10V20H16C18.2091 20 20 18.2091 20 16V4Z"></path>
                        <path fill="white" fill-rule="evenodd" clip-rule="evenodd"
                            d="M10 13.3736L12.5949 14.7111C12.7378 14.7848 12.9006 14.8106 13.0593 14.7847C13.4681 14.718 13.7454 14.3325 13.6787 13.9237L13.2085 11.0425L15.2824 8.98796C15.3967 8.8748 15.4715 8.72792 15.4959 8.569C15.5588 8.15958 15.2779 7.77672 14.8685 7.71384L11.983 7.2707L10.6699 4.66338C10.5975 4.51978 10.481 4.40322 10.3374 4.33089C9.96742 4.14458 9.51648 4.29344 9.33017 4.66338L8.01705 7.2707L5.13157 7.71384C4.97265 7.73825 4.82577 7.81309 4.71261 7.92731C4.42109 8.22158 4.42332 8.69645 4.71759 8.98796L6.79152 11.0425L6.32131 13.9237C6.29541 14.0824 6.3212 14.2452 6.39486 14.3881C6.58464 14.7563 7.03696 14.9009 7.40514 14.7111L10 13.3736Z">
                        </path>
                    </svg></div>
                <div class="y-css-z05zjh"><svg width="20" height="20" viewBox="0 0 20 20">
                        <path fill="rgba(251,67,60,1)" opacity="1"
                            d="M0 4C0 1.79086 1.79086 0 4 0H10V20H4C1.79086 20 0 18.2091 0 16V4Z"></path>
                        <path fill="rgba(251,67,60,1)" opacity="1"
                            d="M20 4C20 1.79086 18.2091 0 16 0H10V20H16C18.2091 20 20 18.2091 20 16V4Z"></path>
                        <path fill="white" fill-rule="evenodd" clip-rule="evenodd"
                            d="M10 13.3736L12.5949 14.7111C12.7378 14.7848 12.9006 14.8106 13.0593 14.7847C13.4681 14.718 13.7454 14.3325 13.6787 13.9237L13.2085 11.0425L15.2824 8.98796C15.3967 8.8748 15.4715 8.72792 15.4959 8.569C15.5588 8.15958 15.2779 7.77672 14.8685 7.71384L11.983 7.2707L10.6699 4.66338C10.5975 4.51978 10.481 4.40322 10.3374 4.33089C9.96742 4.14458 9.51648 4.29344 9.33017 4.66338L8.01705 7.2707L5.13157 7.71384C4.97265 7.73825 4.82577 7.81309 4.71261 7.92731C4.42109 8.22158 4.42332 8.69645 4.71759 8.98796L6.79152 11.0425L6.32131 13.9237C6.29541 14.0824 6.3212 14.2452 6.39486 14.3881C6.58464 14.7563 7.03696 14.9009 7.40514 14.7111L10 13.3736Z">
                        </path>
                    </svg></div>
                <div class="y-css-1vjw9sv"><svg width="20" height="20" viewBox="0 0 20 20">
                        <path fill="rgba(251,67,60,1)" opacity="1"
                            d="M0 4C0 1.79086 1.79086 0 4 0H10V20H4C1.79086 20 0 18.2091 0 16V4Z"></path>
                        <path fill="rgba(251,67,60,1)" opacity="1"
                            d="M20 4C20 1.79086 18.2091 0 16 0H10V20H16C18.2091 20 20 18.2091 20 16V4Z"></path>
                        <path fill="white" fill-rule="evenodd" clip-rule="evenodd"
                            d="M10 13.3736L12.5949 14.7111C12.7378 14.7848 12.9006 14.8106 13.0593 14.7847C13.4681 14.718 13.7454 14.3325 13.6787 13.9237L13.2085 11.0425L15.2824 8.98796C15.3967 8.8748 15.4715 8.72792 15.4959 8.569C15.5588 8.15958 15.2779 7.77672 14.8685 7.71384L11.983 7.2707L10.6699 4.66338C10.5975 4.51978 10.481 4.40322 10.3374 4.33089C9.96742 4.14458 9.51648 4.29344 9.33017 4.66338L8.01705 7.2707L5.13157 7.71384C4.97265 7.73825 4.82577 7.81309 4.71261 7.92731C4.42109 8.22158 4.42332 8.69645 4.71759 8.98796L6.79152 11.0425L6.32131 13.9237C6.29541 14.0824 6.3212 14.2452 6.39486 14.3881C6.58464 14.7563 7.03696 14.9009 7.40514 14.7111L10 13.3736Z">
                        </path>
                    </svg></div>
            </div>
            <meta itemprop="ratingValue" content="4.8">
        </span></div>
    <div class="arrange-unit__09f24__rqHTg arrange-unit-fill__09f24__CUubG y-css-1iy1dwt"><span
            class="fixed-size-text__09f24__bUCrM fixed-size-text--small__09f24__Bc2oE y-css-wfbtsu"><span class=""><span
                    itemprop="reviewCount">41</span></span></span></div>
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

export default UserRatingDiscernibleSuccess;
