import type { Rule } from "~/rules/interfaces";
import { PassCondition } from "~/rules/interfaces";

export const AltMisuse: Rule = {
  id: "alt-misuse",
  metadata: {
    category: "General",
    profile: "Cognitive Disability",
    wcagVersion: "2.1",
    wcagLevel: "A",
  },
  impact: "minor",
  title: "Elements other than image (Tag: IMG) should not have alt attribute",
  description: "The alt attribute is used to provide a text alternative for images. It is not meant to be used on elements other than images and therefore will not be read using screen-readers.",
  advice: `Use a screen-reader-only element to add the accessibility description of the element that was misusing the alt attribute and remove the alt attribute.`,
  associatedDetectors: [],
  refs: [
    {
      type: "WCAG",
      id: "4.1.2",
      level: "A",
      link: "https://www.w3.org/WAI/WCAG21/Understanding/name-role-value.html",
    },
    {
      type: "WCAG",
      id: "3.3.2",
      level: "A",
      link: "https://www.w3.org/WAI/WCAG21/Understanding/labels-or-instructions.html",
    },
    {
      type: "Non-Standard",
      link: "https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/alt",
    },
  ],
  passCondition: PassCondition.NoFailedNodes,
  async validate({ response, document }) {
    const elements = document.querySelectorAll<HTMLElement>("[alt]");

    for (const element of elements) {
      const isNativeIMG = element.tagName === "IMG";
      const isInputIMG = element.tagName === "INPUT" && element.getAttribute("type") === "image";
      const isNativeArea = element.tagName === "AREA";

      if (isNativeIMG || isInputIMG || isNativeArea) {
        response.passedNodes.push(element);
      } else {
        response.failedNodes.push(element);
      }
    }
  },
};
