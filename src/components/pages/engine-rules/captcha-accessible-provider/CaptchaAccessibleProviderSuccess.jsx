import React from "react";
import EngineIssueSuccess from "../../../layout/engineIssueSuccess";

const CaptchaAccessibleProviderSuccess = () => {
  const ruleId = "captcha-accessible-provider";
  const title = `Non-standard Captcha challenges must be replaced with an Accessible Provider (such as Google Recaptcha)`;
  const description = `Non-standard Captcha mechanisms are inaccessible by design. Captchas are explicitly meant to be challenging to answer in order to trick bots. Non-standard Captchas prevent screen reader users from submitting the website's forms.`;
  const helpText = `Replace all non-standard Captcha fields with Google Recaptcha (or other Accessible Provider) which is fully accessible for screen readers and assistive technology by default. Learn more about Google Recaptcha here: https://www.google.com/recaptcha/about/`;
  const bestPractices = [
  "Follow proper HTML semantics",
  "Ensure screen reader compatibility",
  "Test with assistive technologies"
  ];
  const htmlExamples = [
  { filename: "form cloudflare turnstile", content: `<form class="_widgetForm_1f3oo_26" novalidate="">
  <ul class="_list_1jhf1_1">
    <li class="_listItem_1jhf1_12"><a
      class="_listItemLink_1jhf1_17 _listItemLinkActive_1jhf1_23 _link_uqqxn_1 _linkWithExplicitUnderline_uqqxn_15"
      href="/demo/cloudflare-turnstile">Cloudflare Turnstile</a></li>
    <li class="_listItem_1jhf1_12"><a class="_listItemLink_1jhf1_17 _link_uqqxn_1 _linkWithExplicitUnderline_uqqxn_15"
                                      href="/demo/cloudflare-turnstile-challenge">Cloudflare Challenge</a></li>
  </ul>
  <div id="cf-turnstile" style="width:300px;height:65px" class="cf-turnstile" data-sitekey="0x4AAAAAAAVrOwQWPlm3Bnr5">
    <iframe
      src="https://challenges.cloudflare.com/cdn-cgi/challenge-platform/h/g/turnstile/if/ov2/av0/rcv0/0/9miu0/0x4AAAAAAAVrOwQWPlm3Bnr5/auto/normal"
      allow="cross-origin-isolated; fullscreen; autoplay" sandbox="allow-same-origin allow-scripts allow-popups"
      id="cf-chl-widget-9miu0" tabindex="0" title="Widget containing a Cloudflare security challenge"
      style="border: none; overflow: hidden; width: 300px; height: 65px;"></iframe>
    <input type="hidden" name="cf-turnstile-response" id="cf-chl-widget-9miu0_response"
           value="0.5nz279hMMHnaTMjdsMatIrgN40B0vtcmM6Ml6NNKfiHtwz2e-dnUJhfY69v8Tqy3a5qkaBHeutcSy9ml7dSb72LWP9YHFbSqxrkO4IeLP6kbUjns5gPQHCThSGyuQrOGwftAgjbIEVtNLQ3EFa_02e7kLRp3YLB2VTho77Eu1glcBt4swqxMZABJcGtxrIntpTMRRFZKp_YZQCvM5TP5_VrHoHIAYm99Qyj-jnqzwhtuYy48sOqdCPOVo3a5koCPtf1XlJjEyQBEJL1FzuhYG_RhQfEfLcsx5IkaSugZCREuXPOSvhQpOxSfj9QvAwZk5I3u_7GrgUI6vJt-7rSTaxnizYGNpa9dep7j3cdds-Wo6NJo7yk_AZVZGtKKUeDf8N-_yFwGjZAViqVFlqVuIMQsNEEa2FzVNseiOSaHslw.ITFQvOpiFTWYvnq5RQ8jQQ.dff1552586ae31d8cf213ee755990bfb534a92c9399ae1b72a79bab3b09ba824">
  </div>
  <div class="_actions_1f3oo_36">
    <button type="submit" class="_actionsItem_1f3oo_41 _buttonPrimary_d46vc_44 _button_d46vc_1 _buttonMd_d46vc_34"
            data-action="demo_action">Check
    </button>
    <button type="button" class="_actionsItem_1f3oo_41 _buttonSecondary_d46vc_143 _button_d46vc_1 _buttonMd_d46vc_34">
      Reset
    </button>
  </div>
</form>` },
  { filename: "form friendly captcha", content: `<form method="POST">

  <label for="comment-area">Leave a comment below and submit.</label>
  <textarea class="mt-2 w-80" id="comment-area" name="comment" rows="4" placeholder="Hello world"></textarea>

  <div id="test-subject" class="frc-captcha mt-2" data-sitekey="FCMGEMUD2LR7ICLH" data-attached="1" style="position: relative; height: 70px; padding: 0px; width: 316px; max-width: 100%; max-height: 100%; overflow: hidden; border-radius: 4px;"><input type="hidden" name="frc-captcha-response" value=".UNACTIVATED" style="display: none;"><iframe allow="clipboard-write" frameborder="0" src="./widget?origin=https%3A%2F%2Fglobal.frcapi.com&amp;sess_id=5K6zs25uw5TA&amp;sess_c=2&amp;comm_id=w_o8croJOg1PVd&amp;sdk_v=0.1.5&amp;v=1&amp;agent_id=a_kQMdtPwRLcM6&amp;lang=en&amp;sitekey=FCMGEMUD2LR7ICLH&amp;ts=1718714513534" class="frc-i-widget" data--frc-frame-id="w_o8croJOg1PVd" style="border: 0px; position: absolute; width: 100%; height: 100%;"></iframe><div class="frc-banner" style="position: absolute; bottom: 2px; right: 6px; line-height: 1;"><a href="https://friendlycaptcha.com" rel="noopener" target="_blank" style="text-decoration: none; font-weight: 500; font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, Helvetica, Arial, sans-serif; line-height: 1; letter-spacing: -0.0125rem; font-size: 10px; color: rgb(119, 119, 119);">Friendly Captcha</a></div></div>
  <noscript>You need to enable Javascript to complete the anti-spam check.</noscript>

  <button class="mt-2" type="submit">Submit</button>
</form>` },
  { filename: "form google recaptcha", content: `<div class="sample-form">
  <form id="recaptcha-demo-form" method="POST">
    <fieldset>
      <legend>Sample Form with ReCAPTCHA</legend>
      <ul>
        <li><label for="input1">First Name</label><input class="jfk-textinput" id="input1" name="input1" type="text"
                                                         value="Jane" disabled="" aria-disabled="true"></li>
        <li><label for="input2">Last Name</label><input class="jfk-textinput" id="input2" name="input2" type="text"
                                                        value="Smith" disabled="" aria-disabled="true"></li>
        <li><label for="input3">Email</label><input class="jfk-textinput" id="input3" name="input3" type="text"
                                                    value="stopallbots@gmail.com" disabled="" aria-disabled="true"></li>
        <li><p>Pick your favorite color:</p><label class="jfk-radiobutton-label" for="option1"><input
          class="jfk-radiobutton-checked" type="radio" id="option1" name="radios" value="option1" disabled=""
          aria-disabled="true" checked="" aria-checked="true">Red</label><label class="jfk-radiobutton-label"
                                                                                for="option2"><input
          class="jfk-radiobutton" type="radio" id="option2" name="radios" value="option2" disabled=""
          aria-disabled="true">Green</label></li>
        <li>
          <div class=""><!-- BEGIN: ReCAPTCHA implementation example. -->
            <div id="recaptcha-demo" class="g-recaptcha" data-sitekey="6Le-wvkSAAAAAPBMRTvw0Q4Muexq9bi0DJwx_mJ-"
                 data-callback="onSuccess" data-action="action">
              <div style="width: 304px; height: 78px;">
                <div>
                  <iframe title="reCAPTCHA" width="304" height="78" role="presentation" name="a-s741wbvbp2g"
                          frameborder="0" scrolling="no"
                          sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox allow-storage-access-by-user-activation"
                          src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6Le-wvkSAAAAAPBMRTvw0Q4Muexq9bi0DJwx_mJ-&amp;co=aHR0cHM6Ly93d3cuZ29vZ2xlLmNvbTo0NDM.&amp;hl=en&amp;v=TqxSU0dsOd2Q9IbI7CpFnJLD&amp;size=normal&amp;sa=action&amp;cb=3sw5r1renlh1"></iframe>
                </div>
                <textarea id="g-recaptcha-response" name="g-recaptcha-response" class="g-recaptcha-response"
                          style="width: 250px; height: 40px; border: 1px solid rgb(193, 193, 193); margin: 10px 25px; padding: 0px; resize: none; display: none;"></textarea>
              </div>
              <iframe style="display: none;"></iframe>
            </div>
            <script nonce="">
              var onSuccess = function(response) {
                var errorDivs = document.getElementsByClassName("recaptcha-error");
                if (errorDivs.length) {
                  errorDivs[0].className = "";
                }
                var errorMsgs = document.getElementsByClassName("recaptcha-error-message");
                if (errorMsgs.length) {
                  errorMsgs[0].parentNode.removeChild(errorMsgs[0]);
                }
              };</script><!-- Optional noscript fallback. -->
            <noscript>
              <div style="width: 302px; height: 462px;">
                <iframe src="/recaptcha/api/fallback?k=6Le-wvkSAAAAAPBMRTvw0Q4Muexq9bi0DJwx_mJ-" frameborder="0"
                        scrolling="no"></iframe>
                <div><textarea id="g-recaptcha-response" name="g-recaptcha-response"
                               class="g-recaptcha-response"></textarea></div>
              </div>
              <br></noscript><!-- END: ReCAPTCHA implementation example. --></div>
        </li>
        <li><input id="recaptcha-demo-submit" type="submit" value="Submit"></li>
      </ul>
    </fieldset>
  </form>
</div>` },
  { filename: "form hcaptcha", content: `<form class="_widgetForm_1f3oo_26" novalidate="">
  <div id="test-subject" class="h-captcha">
    <div>
      <iframe
        src="https://newassets.hcaptcha.com/captcha/v1/cfb853b/static/hcaptcha.html#frame=checkbox&amp;id=1sjs7h8bqa1&amp;host=2captcha.com&amp;sentry=true&amp;reportapi=https%3A%2F%2Faccounts.hcaptcha.com&amp;recaptchacompat=off&amp;custom=false&amp;hl=en&amp;tplinks=on&amp;pstissuer=https%3A%2F%2Fpst-issuer.hcaptcha.com&amp;sitekey=41b778e7-8f20-45cc-a804-1f1ebb45c579&amp;theme=light&amp;origin=https%3A%2F%2F2captcha.com"
        tabindex="0" frameborder="0" scrolling="no"
        allow="private-state-token-issuance 'src'; private-state-token-redemption 'src'"
        title="Widget containing checkbox for hCaptcha security challenge" data-hcaptcha-widget-id="1sjs7h8bqa1"
        data-hcaptcha-response=""
        style="pointer-events: auto; width: 303px; height: 78px; overflow: hidden;"></iframe>
      <textarea id="h-captcha-response-1sjs7h8bqa1" name="h-captcha-response" style="display: none;"></textarea></div>
  </div>
  <div class="_actions_1f3oo_36">
    <button type="submit" class="_actionsItem_1f3oo_41 _buttonPrimary_d46vc_44 _button_d46vc_1 _buttonMd_d46vc_34"
            data-action="demo_action">Check
    </button>
    <button type="button" class="_actionsItem_1f3oo_41 _buttonSecondary_d46vc_143 _button_d46vc_1 _buttonMd_d46vc_34">
      Reset
    </button>
  </div>
</form>` },
  { filename: "form nested google recaptcha", content: `<div class="sample-form">
  <form id="recaptcha-demo-form" method="POST">
    <fieldset>
      <legend>Sample Form with ReCAPTCHA</legend>
      <ul>
        <li><label for="input1">First Name</label><input class="jfk-textinput" id="input1" name="input1" type="text"
                                                         value="Jane" disabled="" aria-disabled="true"></li>
        <li><label for="input2">Last Name</label><input class="jfk-textinput" id="input2" name="input2" type="text"
                                                        value="Smith" disabled="" aria-disabled="true"></li>
        <li><label for="input3">Email</label><input class="jfk-textinput" id="input3" name="input3" type="text"
                                                    value="stopallbots@gmail.com" disabled="" aria-disabled="true"></li>
        <li><p>Pick your favorite color:</p><label class="jfk-radiobutton-label" for="option1"><input
          class="jfk-radiobutton-checked" type="radio" id="option1" name="radios" value="option1" disabled=""
          aria-disabled="true" checked="" aria-checked="true">Red</label><label class="jfk-radiobutton-label"
                                                                                for="option2"><input
          class="jfk-radiobutton" type="radio" id="option2" name="radios" value="option2" disabled=""
          aria-disabled="true">Green</label></li>
        <li>
          <div id="test-subject" class="captcha-container"><!-- BEGIN: ReCAPTCHA implementation example. -->
            <div id="recaptcha-demo" class="g-recaptcha" data-sitekey="6Le-wvkSAAAAAPBMRTvw0Q4Muexq9bi0DJwx_mJ-"
                 data-callback="onSuccess" data-action="action">
              <div style="width: 304px; height: 78px;">
                <div>
                  <iframe title="reCAPTCHA" width="304" height="78" role="presentation" name="a-s741wbvbp2g"
                          frameborder="0" scrolling="no"
                          sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox allow-storage-access-by-user-activation"
                          src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6Le-wvkSAAAAAPBMRTvw0Q4Muexq9bi0DJwx_mJ-&amp;co=aHR0cHM6Ly93d3cuZ29vZ2xlLmNvbTo0NDM.&amp;hl=en&amp;v=TqxSU0dsOd2Q9IbI7CpFnJLD&amp;size=normal&amp;sa=action&amp;cb=3sw5r1renlh1"></iframe>
                </div>
                <textarea id="g-recaptcha-response" name="g-recaptcha-response" class="g-recaptcha-response"
                          style="width: 250px; height: 40px; border: 1px solid rgb(193, 193, 193); margin: 10px 25px; padding: 0px; resize: none; display: none;"></textarea>
              </div>
              <iframe style="display: none;"></iframe>
            </div>
            <script nonce="">
              var onSuccess = function(response) {
                var errorDivs = document.getElementsByClassName("recaptcha-error");
                if (errorDivs.length) {
                  errorDivs[0].className = "";
                }
                var errorMsgs = document.getElementsByClassName("recaptcha-error-message");
                if (errorMsgs.length) {
                  errorMsgs[0].parentNode.removeChild(errorMsgs[0]);
                }
              };</script><!-- Optional noscript fallback. -->
            <noscript>
              <div style="width: 302px; height: 462px;">
                <iframe src="/recaptcha/api/fallback?k=6Le-wvkSAAAAAPBMRTvw0Q4Muexq9bi0DJwx_mJ-" frameborder="0"
                        scrolling="no"></iframe>
                <div><textarea id="g-recaptcha-response" name="g-recaptcha-response"
                               class="g-recaptcha-response"></textarea></div>
              </div>
              <br></noscript><!-- END: ReCAPTCHA implementation example. --></div>
        </li>
        <li><input id="recaptcha-demo-submit" type="submit" value="Submit"></li>
      </ul>
    </fieldset>
  </form>
</div>` },
  { filename: "form no captcha", content: `<form method="POST">
  <label for="comment-area">Leave a comment below and submit.</label>
  <textarea class="mt-2 w-80" id="comment-area" name="comment" rows="4" placeholder="Hello world"></textarea>
  <button class="mt-2" type="submit">Submit</button>
</form>` }
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

export default CaptchaAccessibleProviderSuccess;
