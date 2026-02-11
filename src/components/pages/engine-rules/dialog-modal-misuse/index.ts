import type { Rule } from "~/rules/interfaces";
import { PassCondition } from "~/rules/interfaces";
import { PerceivableComponentDialogModal, CompliantComponentDialogModal } from "@acsbe/core-engine-classifier";

export const DialogModalMisuse: Rule = {
  id: "dialog-modal-misuse",
  metadata: {
    category: "Lists",
    profile: "Blind",
    wcagVersion: "2.0",
    wcagLevel: "A",
  },
  impact: "serious",
  title: "Only elements that function as dialogs should be tagged as dialog",
  description: "Marking up elements as dialogs without actual dialog behavior causes screen readers to announce a dialog, misleading users into expecting modal interaction and restricted reading order that do not occur.",
  advice: 'Remove role="dialog" from the non-dialog element or add role="presentation" if the HTML DIALOG element is used.',
  refs: [
    {
      type: "Non-Standard",
      link: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog",
    },
    {
      type: "Non-Standard",
      link: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-modal",
    },
    {
      type: "WAI",
      link: "https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/examples/dialog/",
    },
  ],
  associatedDetectors: [PerceivableComponentDialogModal, CompliantComponentDialogModal],
  passCondition: PassCondition.NoFailedNodes,
  async validate({ response, classifier }) {
    const elements = classifier.getMatched([CompliantComponentDialogModal]);

    for (const element of elements) {
      if (classifier.assert(element, PerceivableComponentDialogModal)) {
        response.passedNodes.push(element);
      } else {
        response.failedNodes.push(element);
      }
    }
  },
};
