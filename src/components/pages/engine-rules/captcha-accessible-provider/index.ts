import type { Rule } from "~/rules/interfaces";
import { PassCondition } from "~/rules/interfaces";
import { PerceivableComponentCaptcha } from "@acsbe/core-engine-classifier";

export const CaptchaAccessibleProvider: Rule = {
  id: "captcha-accessible-provider",
  metadata: {
    category: "General",
    profile: "Cognitive Disability",
    wcagVersion: "2.0",
    wcagLevel: "A",
  },
  impact: "critical",
  title: "Non-standard Captcha challenges must be replaced with an Accessible Provider (such as Google Recaptcha)",
  description: "Non-standard Captcha mechanisms are inaccessible by design. Captchas are explicitly meant to be challenging to answer in order to trick bots. Non-standard Captchas prevent screen reader users from submitting the website's forms.",
  advice: "Replace all non-standard Captcha fields with Google Recaptcha (or other Accessible Provider) which is fully accessible for screen readers and assistive technology by default. Learn more about Google Recaptcha here: https://www.google.com/recaptcha/about/",
  associatedDetectors: [PerceivableComponentCaptcha],
  refs: [
    {
      type: "WCAG",
      id: "1.1.1",
      level: "A",
      link: "https://www.w3.org/WAI/WCAG21/quickref/?showtechniques=211%2C412#non-text-content",
    },
    {
      type: "Non-Standard",
      link: "https://www.w3.org/TR/turingtest",
    },
    {
      type: "Non-Standard",
      link: "https://support.google.com/recaptcha/answer/6175971?hl=en",
    },
    {
      type: "Non-Standard",
      link: "https://www.hcaptcha.com/accessibility",
    },
    {
      type: "Non-Standard",
      link: "https://developers.cloudflare.com/turnstile/frequently-asked-questions",
    },
    {
      type: "Non-Standard",
      link: "https://friendlycaptcha.com/insights/create-an-accessible-website-how-it-works",
    },
  ],
  passCondition: PassCondition.NoFailedNodes,
  async validate({ response, classifier }) {
    //TODO: Get type for accessibleCaptchaProviders from classifier
    const accessibleCaptchaProviders = ["recaptcha", "hCaptcha", "cfTurnstile", "friendlyCaptcha"];
    const elements = classifier.getMatched([PerceivableComponentCaptcha]);
    for (const element of elements) {
      const { componentMatch } = classifier.getOperations(element);
      const elementType = componentMatch.element.type;
      if (!accessibleCaptchaProviders.includes(elementType)) {
        response.failedNodes.push(element);
      } else {
        response.passedNodes.push(element);
      }
    }
  },
};
