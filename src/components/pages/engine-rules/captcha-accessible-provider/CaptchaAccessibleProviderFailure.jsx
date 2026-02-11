import React from "react";
import EngineIssueFailure from "../../../layout/engineIssueFailure";

const CaptchaAccessibleProviderFailure = () => {
  const ruleId = "captcha-accessible-provider";
  const title = `Non-standard Captcha challenges must be replaced with an Accessible Provider (such as Google Recaptcha)`;
  const description = `Non-standard Captcha mechanisms are inaccessible by design. Captchas are explicitly meant to be challenging to answer in order to trick bots. Non-standard Captchas prevent screen reader users from submitting the website's forms.`;
  const helpText = `Replace all non-standard Captcha fields with Google Recaptcha (or other Accessible Provider) which is fully accessible for screen readers and assistive technology by default. Learn more about Google Recaptcha here: https://www.google.com/recaptcha/about/`;
  const fixSteps = [
  "Review the HTML structure",
  "Apply proper accessibility attributes",
  "Test with screen readers"
  ];
  const htmlExamples = [
  { filename: "form custom captcha", content: `<form class="_widgetForm_1f3oo_26" novalidate="">
  <div id="test-subject" class="_captchaWidgetContainer_1f3oo_22"><img class="_captchaImage_rrn3u_9"
                                                                       src="/dist/web/assets/captcha-rn1S3orp.jpg"
                                                                       alt="normal captcha example" width="250"
                                                                       height="50">
    <div class="_input_ws73z_1 _captchaField_rrn3u_5 _inputColorNightRider_ws73z_25"><label for="simple-captcha-field"
                                                                                            class="_inputLabel_ws73z_5">Enter
      text from the image</label><input type="text" class="_inputInner_ws73z_12" id="simple-captcha-field"
                                        name="simpleCaptcha" placeholder="Enter answer here..." autocomplete="off"
                                        value=""></div>
  </div>
  <div class="_actions_1f3oo_36">
    <button type="submit" class="_actionsItem_1f3oo_41 _buttonPrimary_d46vc_44 _button_d46vc_1 _buttonMd_d46vc_34"
            data-action="demo_action">Check
    </button>
    <button type="button" class="_actionsItem_1f3oo_41 _buttonSecondary_d46vc_143 _button_d46vc_1 _buttonMd_d46vc_34">
      Reset
    </button>
  </div>
</form>` }
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

export default CaptchaAccessibleProviderFailure;
